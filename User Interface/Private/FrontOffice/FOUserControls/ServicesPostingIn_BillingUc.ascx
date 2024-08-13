<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ServicesPostingIn_BillingUc.ascx.cs"
    Inherits="Private_FrontOffice_FOUserControls_ServicesPostingIn_BillingUc" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="Search" TagPrefix="Lookup" %>
<script type="text/javascript" src="<%=Page.ResolveUrl("~/JSScript/View/select2.min.js") %>"></script>
<script type="text/javascript" language="javascript">

var ctrlcom = 'ctl00_ContentPlaceHolder1';
 $(document).ready(function(){
              // Initialize select2
           $("#ddldeprtment").select2();
             // $("#ctl00_ContentPlaceHolder1_UCServices_ddlunits").select2();
             // $("#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat").select2();
             // $("#ctl00_ContentPlaceHolder1_UCServices_ddltariff").select2();
  var docdepartments=JSON.parse($('#ctl00_ContentPlaceHolder1_UCServices_hdnDoctorDepartment').val());
   var departments = "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
   var units="<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
       for (var i = 0; i < docdepartments.length; i++) {
     departments += "<OPTION   value='" + docdepartments[i].DEPARTMENT_ID + "'>" + docdepartments[i].DEPARTMENT_NAME + "</OPTION>";
                  }

           $('#ddldeprtment').html(departments);
           $('#ctl00_ContentPlaceHolder1_UCServices_ddlunits').html(units)
        });

  function DepartmentoptionsChange(){
      var docdepartment =$('#ddldeprtment').val();
  var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
    if (form_name == 'OP' || form_name == 'Cons') {
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        if (umr_no == '') {
           
            if(docdepartment !=0){
             $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
             $('#ddldeprtment').val(0).select2()
             // $("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
            return false;
        }

        if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
            $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
           
               if(docdepartment !=0){
                $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
                $('#ddldeprtment').val(0).select2();
            //  $("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
            return false;
        }
        if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
            if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
               
                  if(docdepartment !=0){
                   $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                   $('#ddldeprtment').val(0).select2();
              //$("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
                return false;
            }
        }
    }
    if (form_name == 'OPQUICK') {
        if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
            var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            if (umr_no == '') {
               
                  if(docdepartment !=0){
                   $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
                   $('#ddldeprtment').val(0).select2();
             // $("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
               
                 if(docdepartment !=0){
                  $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
                $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                $('#ddldeprtment').val(0).select2()
              //$("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
                if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                 
                      if(docdepartment !=0){
                         $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                         $('#ddldeprtment').val(0).select2();
             // $("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
                    return false;
                }
            }
        }
        else {
            var pat_type = $('#' + ctrlcom + '_ddlPatientType').val();
            if (pat_type == 2 || pat_type == 5 || pat_type == 7 || pat_type == 10) {
                if ($('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val() == '') {
                   
                      if(docdepartment !=0){
                       $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                       $('#ddldeprtment').val(0).select2();
            //  $("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
              }
                     return false;
                }

            }

        }
    }

    var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
    if (hdnallowtariffslcn == 'true') {
      
        var pat_type = '';
        if (form_name == 'OP' || form_name == 'Cons') {
            pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
        }
        else if (form_name == 'OPQUICK') {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
            }
        else {
            pat_type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
        }
        }
    if (pat_type==1) {
        var PatientCategory = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
        if (PatientCategory == undefined || PatientCategory == null || PatientCategory == '' || PatientCategory == '--select--' || PatientCategory == '0') {
            $(".stoast").toastText("warning", "Please Select Patient Category", 5, 3);
            $('#ddldeprtment').val(0).select2();
              //$("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
            return false;
        
         }
        var taiff_id = document.getElementById('' + ctrlcom + '_UCServices_ddltariff').value;
        if (taiff_id == undefined || taiff_id == null || taiff_id == '' || taiff_id == '--select--' || taiff_id=='0') {
            $(".stoast").toastText("warning", "Please Select Tariff", 5, 3);
            $(".stoast").toastText("warning", "Sorry  No Tariff Mapped To This Patient Category", 5, 2);
            $('#ddldeprtment').val(0).select2();
            // $("#ddldeprtment option:eq("+0+")").prop('selected','selected').change();
            return false;
        }
    }
    }


   var docuints=JSON.parse($('#ctl00_ContentPlaceHolder1_UCServices_hdndoctorunits').val());
   var docdeptment=  $('#ddldeprtment').val();   
  
   var uints = "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
    for (var i = 0; i < docuints.length; i++) {
                     if(docdeptment==docuints[i].SPECIALIZATION_ID){
                     
                          uints += "<OPTION   value='" + docuints[i].DOCTOR_UNIT_ID + "'>" + docuints[i].DOCTOR_UNIT_NAME + "</OPTION>";
                          }
                  }
				      $('#<%=ddlunits.ClientID %>').html(uints);

                      var selectedindex=0;
                      if($('#<%=ddlunits.ClientID %> option:eq(1)').val() !='undefined'){
                      selectedindex=1;}
                       $("#<%=ddlunits.ClientID %> option:eq("+selectedindex+")").attr('selected','selected');
                       
                      MCISearchoptionsChange();

                      if(selectedindex==1){
                      var dindex='';
                       var ddluintid= $("#<%=ddlunits.ClientID %>").val();
                        for (var i = 0; i < docuints.length; i++) {

                        if(ddluintid==docuints[i].DOCTOR_UNIT_ID){
                        dindex=""+i+"";
                        
                        }
                       
                        }
                         if(dindex==""){ return false;}
                         var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
    if (form_name == 'OPQUICK' || form_name == 'Cons') {
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        var bill_no = $('#' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').val();
    }
    else {
        var umr_no = '';
    }
    /*patient Category Mapping Concept*/
    var _tariff_id = 1;
    var _form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
    if (_form_name == 'OP' || _form_name == 'Cons' || _form_name == 'OPQUICK' || _form_name == 'REG') {
        var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
        var pat_cat_id = $('#' + ctrlcom + '_UCServices_ddlpatcat').val();
        var pat_tariff_id = $('#' + ctrlcom + '_UCServices_ddltariff').val();
        var pat_type = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
        if (pat_cat_id == undefined || pat_cat_id == null || pat_cat_id == '' || pat_cat_id == '--select--') { pat_cat_id = 0; }
        if (pat_tariff_id == undefined || pat_tariff_id == null || pat_tariff_id == '' || pat_tariff_id == '--select--') { pat_tariff_id = 0; }
        if (pat_type == undefined || pat_type == null || pat_type == '' || pat_type == '--select--' || pat_type == '0' || pat_type == 0) { pat_type = 1; }
        if (hdnallowtariffslcn == 'true' && parseInt(pat_cat_id) > 0 && parseInt(pat_tariff_id) > 0 && parseInt(pat_type) == 1)
            _tariff_id = pat_tariff_id;
    }
    var srv_id = docuints[dindex].DOCTOR_UNIT_HEAD_ID;
    var column_name = 'SERVICE_NAME';

    if (_form_name == 'OP' || _form_name == 'Cons') {
        var Cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
    } else {
        if (_form_name == 'OPQUICK') {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                var Cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;

            } else {
                var Cmp_id = document.getElementById('' + ctrlcom + '_hdnCompanyID').value;
            }
        }
    }
    if (Cmp_id == undefined || Cmp_id == null || Cmp_id == '' || Cmp_id == "0")
    { Cmp_id = 0; }
    var _Contextkey = 1 + "," + _tariff_id + "," + 2 + "," + column_name + "," + 'N' + "," + 1 + "," + Cmp_id + "," + umr_no + "," + srv_id + "," + 0 + "," + 0 + "," + 0 + "," + 0;
    if (srv_id == undefined || srv_id == null || srv_id == '') { srv_id = 0; }
    if (srv_id != 0) {
        GetNonAsync("ServiceMasterWebService.asmx/NewGetAutoCompleteSErviceInfo",
    { prefixText: '', count: parseInt(0), contextKey: _Contextkey },
    function (jdata) {
        if (jdata.d != null && jdata.d[0][0] != null && jdata.d[0][0] != undefined && jdata.d[0][0] != 'undefined') {
        var srvavilable="Y";
          if ($.inArray(parseInt(jdata.d[0][0].DOCTOR_ID), arrServiceIds) == -1) {
          srvavilable="N";
            AssignValues("ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_txtServiceName", jdata.d[0][0]);
            }
            ServicesAutoContextKey();
            if(srvavilable=="Y"){
              $(".stoast").toastText("Info", "This "+docuints[dindex].DOCTOR_UNIT_NAME+" Unit Head  "+jdata.d[0][0].SERVICE_NAME+ " Doctor is Already Exists", 5, 2);
            
            }
        }
    });
    }
                      }


   }


    function Line_or_Group_Change() {
        if (document.getElementById('' + ctrlcom + '_UCServices_rbtnsrv_Wise_And_Group_Type_0').checked == true) {
            $('#<%=hdnsrvgrp_type_con.ClientID %>').val('False');
            DivSrvGrpCncn.style.display = 'none';
//              $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
//                    $(this).remove();
//                });
               //ClearAllConcessionControl();
               document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = false;
             //document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = false;
                $('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
        }
        else {
            $('#<%=hdnsrvgrp_type_con.ClientID %>').val('True');
            DivSrvGrpCncn.style.display = 'block';
        }

    }
    function MCISearchoptionsChange()
    {
    
    ServicesAutoContextKey();
    var schedule='N';
     var is_mci = document.getElementById('ctl00_hdnIsMedClg').value;
         if (is_mci.toLowerCase() == 'true') {
    if(document.getElementById('' + ctrlcom + '_UCServices_rbtnmcicreit_0').checked)
    {
    schedule='MCIS';
    }
    }

    var docdepartment =$('#ddldeprtment').val();
    var docunits = document.getElementById('' + ctrlcom + '_UCServices_ddlunits').value;
    if (docdepartment == undefined || docdepartment == null || docdepartment == '' || docdepartment == '--select--' || docdepartment == '0') { docdepartment='0' }
    if (docunits == undefined || docunits == null || docunits == '' || docunits == '--select--' || docunits == '0') { docunits='0' }

    var doc_dept_uint=docdepartment+','+docunits;
    var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
      if (form_name == 'OPQUICK') {
         if (document.getElementById('' + ctrlcom + '_chk_old').checked == false) {
                document.getElementById('ctl00_ContentPlaceHolder1_ucConsultant_hdn_preCond').value="^^" + schedule + "^" + "" + "^" + doc_dept_uint;
         }
      }
    }

    function DepartmentuintoptionsChange(){
     var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
     if (form_name == 'OP' || form_name == 'Cons') {
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        if (umr_no == '') {
            $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
             $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
            return false;
        }

        if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
            $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
            $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
             $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
            return false;
        }
        if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
            if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                 $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
                return false;
            }
        }
    }
    if (form_name == 'OPQUICK') {
        if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
            var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            if (umr_no == '') {
                $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
                 $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
                $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
                $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                 $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
                return false;
            }
            if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
                if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                    $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                     $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
                    return false;
                }
            }
        }
        else {
            var pat_type = $('#' + ctrlcom + '_ddlPatientType').val();
            if (pat_type == 2 || pat_type == 5 || pat_type == 7 || pat_type == 10) {
                if ($('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val() == '') {
                    $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                     $("#<%=ddlunits.ClientID %> option:eq("+0+")").attr('selected','selected');
                     return false;
                }

            }

        }
    }
 MCISearchoptionsChange();

                 
   var docuints=JSON.parse($('#ctl00_ContentPlaceHolder1_UCServices_hdndoctorunits').val());
                      var dindex='';
                       var ddluintid= $("#<%=ddlunits.ClientID %>").val();
                        for (var i = 0; i < docuints.length; i++) {

                        if(ddluintid==docuints[i].DOCTOR_UNIT_ID){
                        dindex=i;
                        
                        }
                        }
                        if(dindex==''){
                        
                         return false;
                        }
                         var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
    if (form_name == 'OPQUICK' || form_name == 'Cons') {
        var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        var bill_no = $('#' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').val();
    }
    else {
        var umr_no = '';
    }
    /*patient Category Mapping Concept*/
    var _tariff_id = 1;
    var _form_name = $('#' + ctrlcom + '_ReceiptControl2_hdnDocName').val();
    if (_form_name == 'OP' || _form_name == 'Cons' || _form_name == 'OPQUICK' || _form_name == 'REG') {
        var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
        var pat_cat_id = $('#' + ctrlcom + '_UCServices_ddlpatcat').val();
        var pat_tariff_id = $('#' + ctrlcom + '_UCServices_ddltariff').val();
        var pat_type = $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val();
        if (pat_cat_id == undefined || pat_cat_id == null || pat_cat_id == '' || pat_cat_id == '--select--') { pat_cat_id = 0; }
        if (pat_tariff_id == undefined || pat_tariff_id == null || pat_tariff_id == '' || pat_tariff_id == '--select--') { pat_tariff_id = 0; }
        if (pat_type == undefined || pat_type == null || pat_type == '' || pat_type == '--select--' || pat_type == '0' || pat_type == 0) { pat_type = 1; }
        if (hdnallowtariffslcn == 'true' && parseInt(pat_cat_id) > 0 && parseInt(pat_tariff_id) > 0 && parseInt(pat_type) == 1)
            _tariff_id = pat_tariff_id;
    }
    var srv_id = docuints[dindex].DOCTOR_UNIT_HEAD_ID;
    var column_name = 'SERVICE_NAME';

    if (_form_name == 'OP' || _form_name == 'Cons') {
        var Cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
    } else {
        if (_form_name == 'OPQUICK') {
            if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                var Cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;

            } else {
                var Cmp_id = document.getElementById('' + ctrlcom + '_hdnCompanyID').value;
            }
        }
    }
    if (Cmp_id == undefined || Cmp_id == null || Cmp_id == '' || Cmp_id == "0")
    { Cmp_id = 0; }
    var _Contextkey = 1 + "," + _tariff_id + "," + 2 + "," + column_name + "," + 'N' + "," + 1 + "," + Cmp_id + "," + umr_no + "," + srv_id + "," + 0 + "," + 0 + "," + 0 + "," + 0;
    if (srv_id == undefined || srv_id == null || srv_id == '') { srv_id = 0; }
    if (srv_id != 0) {
        GetNonAsync("ServiceMasterWebService.asmx/NewGetAutoCompleteSErviceInfo",
       { prefixText: '', count: parseInt(0), contextKey: _Contextkey },
        function (jdata) {
            if (jdata.d != null && jdata.d[0][0] != null && jdata.d[0][0] != undefined && jdata.d[0][0] != 'undefined') {
            var srvavilable="Y"
            if ($.inArray(parseInt(jdata.d[0][0].DOCTOR_ID), arrServiceIds) == -1) {
            
                  AssignValues("ctl00_ContentPlaceHolder1_UCServices_gv_services_header_ctl03_txtServiceName", jdata.d[0][0]);
              srvavilable="N"
            }
        
                ServicesAutoContextKey();
                if(srvavilable=="Y"){
                    $(".stoast").toastText("Info", "This "+docuints[dindex].DOCTOR_UNIT_NAME+" Unit Head  "+jdata.d[0][0].SERVICE_NAME+ " Doctor is Already Exists", 5, 2);
            
                }
            }
        });
    }
    }

 

    function Onbillnoselection(input) {

        if (input.RESULT != undefined) {
            document.getElementById('' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').value = input.RESULT.BILL_NO;
            document.getElementById('' + ctrlcom + '_UCServices_ucbillno__hiddenID').value=input.RESULT.BILL_ID;
        }
        else {
            document.getElementById('' + ctrlcom + '_UCServices_ucbillno_txtSearchControl').value = input.BILL_NO;
            document.getElementById('' + ctrlcom + '_UCServices_ucbillno__hiddenID').value=input.BILL_ID;
        }
    }
    function ShowServiceGrp(ev) {
        $("#divSrvGrpForm").show();
        return false;
    }
    function typegroupchangeingevent() {

        if (document.getElementById('' + ctrlcom + '_UCServices_Srv_Grp_Type_pcnt_0').checked == true) {
            document.getElementById('tbl_SrvGrp').style.display = "table";
            document.getElementById('tbl_srv_type').style.display = "none";
            $("table[id$=tbl_srv_type] tr:has(td)").each(function (e) {
                $('[id$=tbl_srv_type] tr').filter(':eq(' + e + ')').find('input[type=text][id*=txtsrvTypepcnt]').val(0);
            });

        }
        else {
            document.getElementById('tbl_SrvGrp').style.display = "none";
            document.getElementById('tbl_srv_type').style.display = "table";
            $("table[id$=tbl_SrvGrp] tr:has(td)").each(function (e) {
                $('[id$=tbl_SrvGrp] tr').filter(':eq(' + e + ')').find('input[type=text][id*=txtsrvgrppcnt]').val(0);
            });

        }
        return false;
    }
    var SrowIndex = 0; var Sindex = 0;
    function fn_Add_SrvGrp_Disc(srv_grp_name, srv_grp_pcnt) {

        var gvServices = document.getElementById('tbl_SrvGrp');
        var SrowIndex = gvServices.rows.length;
        var checkRowIndex = SrowIndex;
        var gridindex = 1;
        var newRow = gvServices.insertRow(SrowIndex);

        newCell = newRow.insertCell(0);
        newCell.className = 'scode';
        var lblsrvgrpname = document.createElement('label'); lblsrvgrpname.id = 'lblsrvgrpname' + Sindex; lblsrvgrpname.innerHTML = srv_grp_name;
        newCell.appendChild(lblsrvgrpname);


        newCell = newRow.insertCell(1);
        var txtsrvgrppcnt = document.createElement('input');
        txtsrvgrppcnt.type = 'text';
        txtsrvgrppcnt.id = 'txtsrvgrppcnt' + Sindex;
        txtsrvgrppcnt.value = srv_grp_pcnt;
       // txtsrvgrppcnt.onblur = function () { OnSrvGrpPcnt(this) };
        txtsrvgrppcnt.onkeypress = function () { numeralsOnlyTest(event); };
        txtsrvgrppcnt.onkeyup = function () { OnSrvGrpPcnt(this) };
        newCell.className = 'scode';
        newCell.appendChild(txtsrvgrppcnt);
        Sindex++;
    } 
    var SrowIndex = 0; var Sindex = 0;
    function fn_Add_SrvType_Disc(srv_type_name, srv_type_pcnt) {

        var gvServices = document.getElementById('tbl_srv_type');
        var SrowIndex = gvServices.rows.length;
        var checkRowIndex = SrowIndex;
        var gridindex = 1;
        var newRow = gvServices.insertRow(SrowIndex);

        newCell = newRow.insertCell(0);
        newCell.className = 'scode';
        var lblsrvtypename = document.createElement('label'); lblsrvtypename.id = 'lblsrvtypename' + Sindex; lblsrvtypename.innerHTML = srv_type_name;
        newCell.appendChild(lblsrvtypename);


        newCell = newRow.insertCell(1);
        var txtsrvTypepcnt = document.createElement('input');
        txtsrvTypepcnt.type = 'text';
        txtsrvTypepcnt.id = 'txtsrvTypepcnt' + Sindex;
        txtsrvTypepcnt.value = srv_type_pcnt;
        txtsrvTypepcnt.onkeyup = function () { OnSrvtypePcnt(this) };
        txtsrvTypepcnt.onkeypress = function () { numeralsOnlyTest(event); };
        newCell.className = 'scode';
        newCell.appendChild(txtsrvTypepcnt);
        Sindex++;
    }
    function OnSrvtypePcnt(ev) {

        if (parseFloat(ev.value) > 100) {
            ev.value = 0;
            $(".stoast").toastText("warning", "Discount Cannot Be More Than 100%", 5, 3);
            return false;
        }
    }
    function OnSrvGrpPcnt(ev) {

        if (parseFloat(ev.value) > 100) {
            ev.value = 0;
            $(".stoast").toastText("warning", "Discount Cannot Be More Than 100%", 5, 3);
            return false;
        }
    }
    function SrvGrpClick() {
    var chTotalOnPatGrossper = 0;
    var chTotalOnPatGrossamt=0;
        if ($('#'+ ctrlcom + '_UCServices_hdnsrvgrp_type_con').val() == 'False') {
        }
        else {
            $('#'+ ctrlcom + '_UCServices_hdnisadditinal').val('Y');
             document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
            var cmp_setting_outsrc = $('#'+ ctrlcom + '_UCServices_hdnAllowOutSideConcs').val();
            var SrvShdulRoot = ''; var c = '';
            var hdndate = '';
            if (document.getElementById('' + ctrlcom + '_UCServices_Srv_Grp_Type_pcnt_0').checked == true) {/* service Group wise discount Starts*/
                $("table[id*=tbl_SrvGrp] tr:has(td)").each(function (e) {
                    var srv_grp_name = $(this).closest('tr').find('[id*=lblsrvgrpname]').text();
                    var srv_grp_pcnt = $(this).closest('tr').find('[id*=txtsrvgrppcnt]').val();
                    if (srv_grp_pcnt == '' || srv_grp_pcnt == null || srv_grp_pcnt == undefined || srv_grp_pcnt == NaN) {
                        srv_grp_pcnt = 0;
                    }
                    var GvRowscount = 0;
                    var count = 0;
                    var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                    var _index = 0;
                    var _index = grid.rows.length;
                    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
                        if (count == 0) {
                            for (GvRowscount = 0; GvRowscount <= _index; GvRowscount++) {
                                var srv_wise_grp_name = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnSrv_Grp_Name]').val();
                                var class_srv_id = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                                var is_outsrc = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                                if (is_outsrc == '' || is_outsrc == null || is_outsrc == undefined)
                                { is_outsrc = 'N'; }
                                if ((srv_wise_grp_name == srv_grp_name && is_outsrc == 'N' && class_srv_id == '0') || (srv_wise_grp_name == srv_grp_name && is_outsrc == 'Y' && cmp_setting_outsrc == 'True' && class_srv_id == '0')) {
                                    var srv_dcnt = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscP]').val();
                                    var pAmt = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtPamt]').val();
                                    if (srv_dcnt == null || srv_dcnt == undefined || srv_dcnt == '')
                                    { srv_dcnt = 0; }
                                    if (pAmt == null || pAmt == undefined || pAmt == '')
                                    { pAmt = 0; }

                                       var Healthcard = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txthcPer]").val();
                                       var Management = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtmaPer]").val();
                                       var Staff = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtstPer]").val();
                                       var EventBased = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtebPer]").val();
                                       var RuleBased =$('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtRulePer]").val();
                                       var newsrv_grp_pcnt=srv_grp_pcnt;
                                        if (Healthcard == undefined || Healthcard == '' || Healthcard == null || Healthcard == "NaN") { Healthcard = 0; }
                                        if (Management == undefined || Management == '' || Management == null || Management == "NaN") { Management = 0; }
                                        if (Staff == undefined || Staff == '' || Staff == null || Staff == "NaN") { Staff = 0; }
                                        if (EventBased == undefined || EventBased == '' || EventBased == null || EventBased == "NaN") { EventBased = 0; }
                                        if (RuleBased == undefined || RuleBased == '' || RuleBased == null || RuleBased == "NaN") { RuleBased = 0; }

                                         var totlinepcr=parseFloat(newsrv_grp_pcnt)+parseFloat(Healthcard)+parseFloat(Management)+parseFloat(Staff)+parseFloat(EventBased)+parseFloat(RuleBased);
                                         if(totlinepcr>100){
                                         newsrv_grp_pcnt=parseFloat(totlinepcr)-parseFloat(Healthcard)-parseFloat(Management)-parseFloat(Staff)-parseFloat(EventBased)-parseFloat(RuleBased)-parseFloat(parseFloat(totlinepcr)-100);
                                         }
                                         else if (totlinepcr==100){
                                          newsrv_grp_pcnt=parseFloat(totlinepcr)-parseFloat(Healthcard)-parseFloat(Management)-parseFloat(Staff)-parseFloat(EventBased)-parseFloat(RuleBased);
                                         }

                                    srv_dcnt = newsrv_grp_pcnt;/*parseFloat(srv_dcnt) + */
                                    $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscP]').val(srv_dcnt);
                                    var PconAmt = Math.round((parseFloat(pAmt) * parseFloat(srv_dcnt)) / parseFloat(100));
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscAmt]').val(PconAmt);
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscP]')[0].disabled = false;
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscAmt]')[0].disabled = false;
                                     var hcdisamt= $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtHcAmt]").val();
                                     var mandisamt=  $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtmgAmt]").val();
                                     var staffdisamt=$('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtstAmt]").val();
                                     var eventdisamt=$('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtebAmt]").val();
                                     var condisamt= $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find("input[type=text][id*=txtcncrlAmt]").val();
                                    var pNetAmt = parseFloat(pAmt) - parseFloat(PconAmt)-parseFloat(hcdisamt)-parseFloat(mandisamt)-parseFloat(staffdisamt)-parseFloat(eventdisamt)-parseFloat(condisamt);
                                    pNetAmt = pNetAmt > 0 ? pNetAmt : 0;
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtPNAmt]').val(pNetAmt);
                                    //var x = 1;
                                   
                                    var disc_grid_length = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length;


                                    //OnPatDiscPcntChange(this, 'PAT', 'Srv')
                                    //                            CalculateMultiDiscPercentage(this, 'Perecent');
                                   
                                    $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(9),.col-hide tr:nth-child(12),.col-hide tr:nth-child(13)").show();
                                    $("#payitem2,._quick-div").show();
                                    $("._mdisc").css('width', '72%');
                                    $("#payitem1,#payitem3").hide();
                                    $('[id*=ConcessionAmt]')[0].style.display = 'none';
                                    $("#lbladvanced").addClass("select");
                                    $("#lblquick").removeClass("select");
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;

                                     var CurDisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis');
    if (getParameterByName("MODE") != "VIEW" || getParameterByName("MODE") != "VIEW_OP") {
        CurDisPer.value = typeof CurDisPer.value == "string" ? (CurDisPer.value.trim() == "" ? "" : CurDisPer.value) : (typeof CurDisPer.value == "number" ? CurDisPer.value : "0");
        if (CurDisPer.value > 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
        }
        else {
        var pattax=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
            var PatGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            if (PatGrossAmt == undefined || PatGrossAmt == '' || PatGrossAmt == null || PatGrossAmt == "NaN") { PatGrossAmt = 0; }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                var AdvAmount = document.getElementById('' + ctrlcom + '_txtAdvance').value;
                if (AdvAmount == undefined || AdvAmount == '' || AdvAmount == null || AdvAmount == "NaN") { AdvAmount = "0"; }
                PatGrossAmt = setProperDecimalsVal(parseFloat(PatGrossAmt) - parseFloat(AdvAmount));
                if (parseFloat(PatGrossAmt) < 0) {
                    PatGrossAmt = 0;
                }
            }

 

            }}

                            
                                    $('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
                                    var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0, chtotamt = 0, chtotpcnt = 0, btot_amt = 0; ntot_amt = 0;
                                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                        var hcAmt = $(this).closest('tr').find("[id*=txtHcAmt]").val();
                                        var hcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                        var chamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                        var chpcnt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                        var b_amt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                        var n_amt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                        if (chamt == undefined || chamt == null || chamt == '')
                                        { chamt = 0; }
                                        if (chpcnt == undefined || chpcnt == null || chpcnt == '')
                                        { chpcnt = 0; }
                                        if (b_amt == undefined || b_amt == null || b_amt == '') { b_amt = 0; }
                                        if (n_amt == undefined || n_amt == null || n_amt == '') { n_amt = 0; }

                                        if (hcAmt == undefined || hcAmt == null || hcAmt == '') { hcAmt = 0; }
                                        if (hcPer == undefined || hcPer == null || hcPer == '') { hcPer = 0; }
                                        if (chamt == undefined || chamt == null || chamt == '') { chamt = 0; }
                                        if (chpcnt == undefined || chpcnt == null || chpcnt == '') { chpcnt = 0; }

                                        typeof hcPer == 'string' ? (typeof hcPer == 'undefined' || hcPer.trim() == '' ? 0 : parseFloat(hcPer)) : (typeof hcPer == 'object' ? 0 : parseFloat(hcPer));
                                        typeof hcAmt == 'string' ? (typeof hcAmt == 'undefined' || hcAmt.trim() == '' ? 0 : parseFloat(hcAmt)) : (typeof hcAmt == 'object' ? 0 : parseFloat(hcAmt));
                                        hcTotAmt += parseFloat(hcAmt);
                                        hcTotPer += parseFloat(hcPer);
                                        chtotamt += parseFloat(chamt);
                                        chtotpcnt += parseFloat(chpcnt);
                                        btot_amt += parseFloat(b_amt);
                                        ntot_amt += parseFloat(n_amt);
                                    });
                                    chTotalOnPatGrossper = (parseFloat(chtotamt) / parseFloat(btot_amt)) * 100;
                                    chTotalOnPatGrossamt = Math.round((parseFloat(btot_amt) * parseFloat(chTotalOnPatGrossper)) / 100);
                                    chTotalOnPatGrossper = setProperDecimalsCorpPer(chTotalOnPatGrossper);
                                    chTotalOnPatGrossamt = Math.round(chTotalOnPatGrossamt);

                                 
                                }
                                count++;
                            }
                        }

                    });

                });
            } /* service Grou wise discount Ends*/
            else if (document.getElementById('' + ctrlcom + '_UCServices_Srv_Grp_Type_pcnt_1').checked == true) {/* service type wise discount starts*/

                $("table[id*=tbl_srv_type] tr:has(td)").each(function (e) {
                    var srv_type_name = $(this).closest('tr').find('[id*=lblsrvtypename]').text();
                    var srv_type_pcnt = $(this).closest('tr').find('[id*=txtsrvTypepcnt]').val();
                    if (srv_type_pcnt == undefined || srv_type_pcnt == null || srv_type_pcnt == '' || srv_type_pcnt == NaN)
                    { srv_type_pcnt = 0; }

                    var GvRowscount = 0;
                    var count = 0;
                    var grid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
                    var _index = 0;
                    var _index = grid.rows.length;
                    $("table[id$=UCServices_gvServices] tr:has(td)").each(function (e) {
                        if (count == 0) {
                            for (GvRowscount = 0; GvRowscount <= _index; GvRowscount++) {
                                var srv_wise_type_name = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnSrv_Type_Name]').val();
                                var class_srv_id = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnClass_Srv_ID]').val();
                                var is_outsrc = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                                if (is_outsrc == '' || is_outsrc == null || is_outsrc == undefined)
                                { is_outsrc = 'N'; }
                                if ((srv_wise_type_name == srv_type_name && is_outsrc == 'N' && class_srv_id == '0') || (srv_wise_type_name == srv_type_name && is_outsrc == 'Y' && cmp_setting_outsrc == 'True' && class_srv_id == '0')) {
                                    var srv_dcnt = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscP]').val();
                                    var pAmt = $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtPamt]').val();
                                    if (srv_dcnt == null || srv_dcnt == undefined || srv_dcnt == '')
                                    { srv_dcnt = 0; }
                                    if (pAmt == null || pAmt == undefined || pAmt == '')
                                    { pAmt = 0; }
                                    srv_dcnt = parseFloat(srv_type_pcnt); /*parseFloat(srv_dcnt) + */
                                    $('[id$=gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscP]').val(srv_dcnt);
                                    var PconAmt = Math.round((parseFloat(pAmt) * parseFloat(srv_dcnt)) / parseFloat(100));

                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscAmt]').val(PconAmt);
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscP]')[0].disabled = false;
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtDiscAmt]')[0].disabled = false;
                                    var pNetAmt = parseFloat(pAmt) - parseFloat(PconAmt);
                                    pNetAmt = pNetAmt > 0 ? pNetAmt : 0;
                                    $('[id$=UCServices_gvServices] tr').filter(':eq(' + GvRowscount + ')').find('input[type=text][id*=txtPNAmt]').val(pNetAmt);
                                  
                                    $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(9),.col-hide tr:nth-child(12),.col-hide tr:nth-child(13)").show();
                                    $("#payitem2,._quick-div").show();
                                    $("._mdisc").css('width', '72%');
                                    $("#payitem1,#payitem3").hide();
                                    $('[id*=ConcessionAmt]')[0].style.display = 'none';
                                    $("#lbladvanced").addClass("select");
                                    $("#lblquick").removeClass("select");
                                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;

                                     var CurDisPer = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis');
    if (getParameterByName("MODE") != "VIEW" || getParameterByName("MODE") != "VIEW_OP") {
        CurDisPer.value = typeof CurDisPer.value == "string" ? (CurDisPer.value.trim() == "" ? "" : CurDisPer.value) : (typeof CurDisPer.value == "number" ? CurDisPer.value : "0");
        if (CurDisPer.value > 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 100;
        }
        else {
        var pattax=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
            var PatGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
            if (PatGrossAmt == undefined || PatGrossAmt == '' || PatGrossAmt == null || PatGrossAmt == "NaN") { PatGrossAmt = 0; }
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'IPFINAL') {
                var AdvAmount = document.getElementById('' + ctrlcom + '_txtAdvance').value;
                if (AdvAmount == undefined || AdvAmount == '' || AdvAmount == null || AdvAmount == "NaN") { AdvAmount = "0"; }
                PatGrossAmt = setProperDecimalsVal(parseFloat(PatGrossAmt) - parseFloat(AdvAmount));
                if (parseFloat(PatGrossAmt) < 0) {
                    PatGrossAmt = 0;
                }
            }
          
          
            }}
        

                                    //OnMultipleDiscGrid(); 
                                    $('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
                                    var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0, chtotamt = 0, chtotpcnt = 0, btot_amt = 0; ntot_amt = 0;
                                    $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                        var hcAmt = $(this).closest('tr').find("[id*=txtHcAmt]").val();
                                        var hcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                        var chamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                        var chpcnt = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                        var b_amt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                        var n_amt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                        if (chamt == undefined || chamt == null || chamt == '')
                                        { chamt = 0; }
                                        if (chpcnt == undefined || chpcnt == null || chpcnt == '')
                                        { chpcnt = 0; }
                                        if (b_amt == undefined || b_amt == null || b_amt == '') { b_amt = 0; }
                                        if (n_amt == undefined || n_amt == null || n_amt == '') { n_amt = 0; }

                                        if (hcAmt == undefined || hcAmt == null || hcAmt == '') { hcAmt = 0; }
                                        if (hcPer == undefined || hcPer == null || hcPer == '') { hcPer = 0; }
                                        if (chamt == undefined || chamt == null || chamt == '') { chamt = 0; }
                                        if (chpcnt == undefined || chpcnt == null || chpcnt == '') { chpcnt = 0; }

                                        typeof hcPer == 'string' ? (typeof hcPer == 'undefined' || hcPer.trim() == '' ? 0 : parseFloat(hcPer)) : (typeof hcPer == 'object' ? 0 : parseFloat(hcPer));
                                        typeof hcAmt == 'string' ? (typeof hcAmt == 'undefined' || hcAmt.trim() == '' ? 0 : parseFloat(hcAmt)) : (typeof hcAmt == 'object' ? 0 : parseFloat(hcAmt));
                                        hcTotAmt += parseFloat(hcAmt);
                                        hcTotPer += parseFloat(hcPer);
                                        chtotamt += parseFloat(chamt);
                                        chtotpcnt += parseFloat(chpcnt);
                                        btot_amt += parseFloat(b_amt);
                                        ntot_amt += parseFloat(n_amt);
                                    });
                                    debugger;//111
                                    chTotalOnPatGrossper=((parseFloat(chtotamt) / parseFloat(btot_amt)) * 100);
                                    chTotalOnPatGrossamt = Math.round((parseFloat(btot_amt) * parseFloat(chTotalOnPatGrossper)) / 100);
                                    chTotalOnPatGrossper = setProperDecimalsCorpPer(chTotalOnPatGrossper);
                                }
                                count++;
                            }
                        }

                    });

                });

            } /* service type wise discount Ends*/
        }
        debugger;


var cashindex=0;
var cashrowindex=0;
debugger;
$("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
var index2=$(this)[0].rowIndex;
var cashseletid = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index2 + ")").find('[id*=ddlMultiDiscounttype]').val();
if(cashseletid==1)
{
cashrowindex=index2;
}
});

if(document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length==2)
{
    cashrowindex=1;
}else{
if(cashrowindex!=0)
{
    cashrowindex=cashrowindex;
}else{
debugger;
fn_AddRowWithDetais();
cashrowindex=document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length-2;
}
}

debugger;//2222
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=txtPersentage]').val(chTotalOnPatGrossper);
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=txtAmount]').val(chTotalOnPatGrossamt);
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=txtPersentage]')[0].disabled = true;
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=txtAmount]')[0].disabled = true;
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=ddlMultiDiscounttype]').val(1);
$("table[id$=gvMultipleConcession] tr").filter(":eq(" + cashrowindex + ")").find('[id*=ddlModes]').val(2);

 var SrvCashPerTotal = 0, SrvHealthcardTotal = 0, SrvManageMentTotal = 0, SrvStaffTotal = 0, SrvEventBasedTotal = 0; SrvRulBasedTotal = 0;
    var SrvCashAmtTotal = 0, SrvHealthcardAmtTotal = 0, SrvManageMentAmtTotal = 0, SrvStaffAmtTotal = 0, SrvEventBasedAmtTotal = 0, SrvAmtBasedAmtTotal = 0;
    var TotalSrvPer = 0;
    var TotalSrvAmt = 0;
    var disabledqyrate=false;
    $("table[id*=gvServices] tr:has(td)").each(function (e) {
        if ($(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val() != undefined) {
            var CashPer = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
            var CashAmt = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
            CashPer = CashPer == '' ? 0 : CashPer;
            CashAmt = CashAmt == '' ? 0 : CashAmt;
            SrvCashPerTotal += parseFloat(CashPer);
            SrvCashAmtTotal += parseFloat(CashAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txthcPer]").val() != undefined) {
            var Healthcard = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
            var HealthcardAmt = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();
            Healthcard = Healthcard == '' ? 0 : Healthcard;
            HealthcardAmt = HealthcardAmt == '' ? 0 : HealthcardAmt;
            SrvHealthcardAmtTotal += parseFloat(HealthcardAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val() != undefined) {
            var Management = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
            var ManagementAmt = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();
            Management = Management == '' ? 0 : Management;
            ManagementAmt = ManagementAmt == '' ? 0 : ManagementAmt;
            SrvManageMentTotal += parseFloat(Management);
            SrvManageMentAmtTotal += parseFloat(ManagementAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtstPer]").val() != undefined) {
            var Staff = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
            var StaffAmt = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();
            Staff = Staff == '' ? 0 : Staff;
            StaffAmt = StaffAmt == '' ? 0 : StaffAmt;
            SrvStaffTotal += parseFloat(Staff);
            SrvStaffAmtTotal += parseFloat(StaffAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtebPer]").val() != undefined) {
            var EventBased = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
            var EventBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();
            EventBased = EventBased == '' ? 0 : EventBased;
            EventBasedAmt = EventBasedAmt == '' ? 0 : EventBasedAmt;
            SrvEventBasedTotal += parseFloat(EventBased);
            SrvEventBasedAmtTotal += parseFloat(EventBasedAmt);
        }
        if ($(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val() != undefined) {
            var RuleBased = $(this).closest('tr').find("input[type=text][id*=txtRulePer]").val();
            var RuleBasedAmt = $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").val();
            RuleBased = RuleBased == '' ? 0 : RuleBased;
            RuleBasedAmt = RuleBasedAmt == '' ? 0 : RuleBasedAmt;
            SrvRulBasedTotal += parseFloat(RuleBased);
            SrvAmtBasedAmtTotal += parseFloat(RuleBasedAmt);
        }

    });
    var TotalSrvAmt =parseFloat(SrvCashAmtTotal) + parseFloat(SrvHealthcardAmtTotal) + parseFloat(SrvManageMentAmtTotal) + parseFloat(SrvStaffAmtTotal) + parseFloat(SrvEventBasedAmtTotal) + parseFloat(SrvAmtBasedAmtTotal);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = setProperDecimalsCorpPer(TotalSrvPer);
    var partydiscount=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
    partydiscount=partydiscount||0;
    var totaldiscount=parseFloat(TotalSrvAmt)+parseFloat(partydiscount);
    totaldiscount=totaldiscount||0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(TotalSrvAmt);
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = Math.round(totaldiscount);
    var patgrossamt= document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value ;
    var discper=setProperDecimalsCorpPer(parseFloat(TotalSrvAmt)*100/parseFloat(patgrossamt));
    discper=discper||0;
    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value=discper;

   var patnetamt= parseFloat(patgrossamt)-parseFloat(TotalSrvAmt);
   patnetamt=patnetamt||0;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value=patnetamt;
   var cmpnetamt=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value;
   cmpnetamt=cmpnetamt||0;
   var totalnetamt=parseFloat(patnetamt)+parseFloat(cmpnetamt);
   totalnetamt=totalnetamt||0;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value=totalnetamt;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value=patnetamt;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value=totalnetamt;

   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value =patnetamt;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value= patnetamt;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value=patnetamt;
   document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value=patnetamt;
   

    
    

    $("#divSrvGrpForm").hide();
    return false;
}

    function closeLangfiles() {
        $('#divimages').hide();
    }
    function ViewLanguageDtls(data) {
        //        $('#divimages').show();
        var _dat = '<ul>';
        var _dat1 = '<ul>';
        if (data.d != null) {
            if (data.d.length > 0) {
                if (data.d[0] != '') {
                    for (var i = 0; i < data.d[0].length; i++) {
                        var pathname = data.d[0][i].replace(/\\/g, "/");
                        pathname = pathname.split('/')[pathname.split('/').length - 1];
                        var ext = pathname.split('.')[1];
                        var filename = '';
                        if (pathname.length > 13)
                            filename = pathname.substring(0, 13) + '...';
                        else
                            filename = pathname.substring(pathname.lastIndexOf('/') + 1);
                        var b = window.location.origin + "/" + window.location.pathname.split('/')[1] + "/" + "Private/FrontOffice/ImageViewer/material/original/" + umrno + "/" + pathname;
                        //  var path = 'http://localhost:60283/User%20Interface/Private/FrontOffice/Imageviewer/material/original/177400668633/' + fname; //'http://localhost:56858/UI' + b;
                        //                        var path = 'http://localhost:60283/User%20Interface' + b;
                        var path = b;
                        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnsrcname').value = path;
                        var src = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnsrcname').value;
                        if (ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png") {
                            _dat += '<li><img id="imgview" onClick="Languageview(src);" style=\"height:100px;width:100px;\" src="' + path + '"' + '</li>';
                            _dat += '<label>' + filename + '</label>';
                        }
                        else {
                            _dat1 += '<li><img id="imgview" onClick="Languageview(src);" style=\"height:50px;width:50px;\" src="' + path + '"' + '</li>';
                            _dat1 += '<label>' + filename + '</label>';
                        }
                    }
                    $('#gallery').html(_dat);
                    $('#gallery1').html(_dat1);
                }
            }
        }
        return false;
    }
    function Languageview(obj) {
        var img = obj;
        var _data = '<ul>';
        _data += '<P><li><img id="imgview1" onClick="imgDownload(src);" style=\"height:380px;width:550px;\" src="' + img + '"' + '</li></P>';
        _data += '</ul>';
        $('#divimage').html(_data);
        //return false;
    }
    function imgDownload(obj) {
        var href = obj;
        window.open(href);

    }
    function PrintClick() {
        var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
        var data = document.getElementById('' + ctrlcom + '_UCServices_hdnConsentFmdt').value;
        var umr_no = $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        var pat_id = $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val();
        var type = '';
        if (document.getElementById('' + ctrlcom + '_UCServices_lblcntorguidetxt').innerHTML == 'Guidelines Details ') {
            type = 'G';
        }
        else if (document.getElementById('' + ctrlcom + '_UCServices_lblcntorguidetxt').innerHTML == "Instruction Details ") {
            type = 'SI';
        }
        else {
            if (document.getElementById('' + ctrlcom + '_UCServices_lblcntorguidetxt').innerHTML == "Check List Details ") {
                type = 'CH';
            }
            else {
                type = 'C';
            }
        }

        if (pat_id == '' || pat_id == null || pat_id == undefined) { pat_id = '0'; }
        if (umr_no != '' && umr_no != undefined && umr_no != null && pat_id != '0') {
            data = ReplaceSplCharactor(data);
            var url = _iniUrl + "Private/FrontOffice/FOUserControls/Concent_Form.aspx?Srv_id=" + data + "&umr_no=" + umr_no + "&pat_id=" + pat_id + "&type=" + type;
            window.open(url);

        }
        if (form_name == 'OPQUICK' && (umr_no == '' || umr_no == null || umr_no == undefined)) {
            $(".stoast").toastText("Info", "Unable To Take The Print. Because Patient Not Yet Registered", 5, 2);
            return false;
        }
        ConsentClose();
        return false;
    }
    function ShowServicePopup(evt) {

        var kcode = evt.keyCode;
        if (kcode == 113) {
            $('[id*=BtnSrvSearchService]').trigger("click");
            return false;
        }
        
    //$('#'+ ctrlcom + '_UCServices_gv_services_header_ctl03_autoComplete1_completionListElem').appendTo('#gvServicesautoid');
    }
    //Naresh
    function InvalidData(obj) {
        var rowgetid = obj.id;
        $("table[id*=gv_services_header] tr:has(td)").each(function (e) {
            if ($(this).closest('tr').find("input[type=text][id*=txtServiceName]")[0].id == rowgetid) {
                var servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                if (servicename != "" && (srv_id == "" || srv_id == undefined)) {
                    $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val("");
                }
            }

        });

    }
    //Naresh
    function CloseServicesPopUp() {
        ctl00_ContentPlaceHolder1_UCServices_PanelSrvsLup.style.display = "none";
        return false;

    }
    function ConsentClose() {
        $("#divConsentFormDtls").hide();
        return false;
    }
    function SrvGrpClose() {
        $("#divSrvGrpForm").hide();
        return false;
    }
    function DiscAmtOrPcnt() {
        document.getElementById('' + ctrlcom + '_UCServices_txtDiscAmtSag').value = '0';
        DiscAmtOrPcntSagrigation();
        return false;
    }

    function CalculateAmountConc(obj, Type) {

        var Perconces = 0, concession = 0, txtPayAmt = 0, dec = 2;
        var corpPercent = 0;
        var empPercent = 100;

        var sGrid = document.getElementById('<%= gvServices.ClientID %>');
        var OrginalTransAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
        var TAmount = 0, GAmount = 0, Amount = 0, NetAmount = 0, Qty = 0, Rate = 0, IndivConcession = 0, InitialAmount = 0, TotConcession = 0, empAmt = 0, corpAmt = 0;
        var servicename = 0;
        var concpersent = 0;

        if (Type == 'Perecent') {
            if ($(obj).val() != null && $(obj).val() != "") {
                Perconces = parseFloat($(obj).val());
                if (Perconces == '' || Perconces == NaN || Perconces == undefined) {
                    Perconces = 0;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
                }
                else {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'red';
                }
            }
        }
        if (Type == 'Amount') {
            if ($(obj).val() != null && $(obj).val() != "") {
                concession = $(obj).val();
                if (concession == '' || concession == NaN || concession == undefined) {
                    concession = 0;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
                }
                else {
                   document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'red';
                }

            }
        }
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal') != null) {
            txtPayAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value;
        }
        if (sGrid != null) {
            var OutSrcConAllow = $('#'+ ctrlcom + '_UCServices_hdnAllowOutSideConcs').val();
            $("table[id*=<%= gvServices.ClientID %>] tr:has(td)").each(function (e) {
                servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
                Rate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
                if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                    Amount = ($(this).closest('tr').find("input[id*=txtPamt]").val());
                    var Is_Out_src_Srv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
                    if (OutSrcConAllow == 'False' && Is_Out_src_Srv == 'Y') {
                    }
                    else {
                        TAmount = parseFloat(TAmount) + parseFloat(Amount);
                    }
                }
            });
            if (txtPayAmt > 0) {
            
var type=1;
     $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
        var ConcessionAmtInd = $(this).closest('tr').find("[id*=ddlMultiDiscounttype]").val();
        ConcessionAmtInd = ConcessionAmtInd == '' ? 0 : ConcessionAmtInd;
      if(ConcessionAmtInd==2)
      {
      type=2;
      }
      else
      {
       type=1;
      }
        
    });


                GetPayment(concession, Perconces, TAmount, dec, txtPayAmt, type, Perconces, obj);
                if (Type == 'Amount') {
                    CalculateGridAmtCount(); 
                 }
            }
        }
    }

    function gstCalculation(tax_pct, tax_amt, exec_gst_amt, sFcnt, patDiscamt, mFcnt, seramount,cmp_amt, e, amts) {

    finalamount = seramount - sFcnt - patDiscamt - mFcnt;
  
    var incl_gst_amt = (parseInt(finalamount) + (parseInt(seramount - sFcnt - patDiscamt - mFcnt)) * (parseInt(tax_pct) / 100));
    var incl_gst_net_amt = (parseInt(incl_gst_amt) - parseInt(patDiscamt)-parseInt(sFcnt)-parseInt(mFcnt));
    var pat_tax = (parseFloat(finalamount)) * (parseFloat(tax_pct) / 100);
    var cmp_tax=(parseFloat(cmp_amt)) * (parseFloat(tax_pct) / 100);
    if (incl_gst_amt == undefined || incl_gst_amt == null || incl_gst_amt == '') { incl_gst_amt = "0"; }
    if (pat_tax == undefined || pat_tax == null || pat_tax == '') { pat_tax = "0"; }
     if (cmp_tax == undefined || cmp_tax == null || cmp_tax == '') { cmp_tax = "0"; }
//    serviceamount = seramount - incl_gst_amt;
//    incl_gst_amt = seramount - serviceamount;
//    $('[id$=UCServices_gvServices] tr').filter(':eq(' + e + ')').find('[id*=txtRate]').val(incl_gst_amt);
//    $('[id$=UCServices_gvServices] tr').filter(':eq(' + e + ')').find('[id*=hdnpatamt]').val(pat_tax);
//    $('[id$=UCServices_gvServices] tr').filter(':eq(' + e + ')').find('[id*=hdncmptaxamt]').val(cmp_tax);
   
     tax =  (Math.round(parseFloat(pat_tax)) +Math.round(parseFloat(cmp_tax)) );

    amts.push(incl_gst_amt);
    amts.push(incl_gst_net_amt);
    amts.push(tax);
    amts.push(pat_tax);
    amts.push(cmp_tax);

    return amts;
}

    var GridSlectionType = '';
    var MultiGriObj = '';
    function GetOverAllConcession(Perconces, TAmount, txtPayAmt, dec, Type, TotalConcessionPersentage, obj) {
        dec = 0;
        GridSlectionType = Type;
        var hccard=document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value;
        if(hccard==""||hccard==undefined||hccard==null){hccard=0;}
        var OutSrcConAllow = $('#'+ ctrlcom + '_UCServices_hdnAllowOutSideConcs').val();
        var BIll_GrossAmt = $('#'+ ctrlcom + '_ReceiptControl2_txtpatgross').val();
        var billNetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value;
        var dueAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        var concamt=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        var inputs = document.getElementById('<%= gvServices.ClientID %>').rows.length;
        var sGrid = document.getElementById('<%= gvServices.ClientID %>');
        var ForeignSrv = '';
        var SrvTypeId = '0';
        var y = Perconces;
        var z = TotalConcessionPersentage;
        var x = setProperDecimals((parseFloat(y) / 100) * parseFloat(TAmount));
        var w = setProperDecimals((parseFloat(z) / 100) * parseFloat(TAmount));
        var NetAmount = 0, ConceAmt = 0, Rate = 0, Qty = 0, RealOrgPrice = 0, RealDocPrice = 0, orgAmt = 0;  var docAmt = 0;
        var tNetAmount = 0; var OvaerAllConcAmt = 0; var taxamt=0; var totaltaxamt=0;
        var Is_Out_src_Srv = 'N';
        var TotalCncAmount = 0;
        RealOrgPrice = 0;
        RealDocPrice = 100; MultiGriObj = obj;
        var taxamt = 0 ,ptaxamt=0,ctaxamt=0;
        var totalsgstamount = 0; var totalcgstamount = 0;
        var lastrowindex=0;
        var toatlcalculatedddiscountamt=0;
        $("table[id*=<%= gvServices.ClientID %>] tr:has(td)").each(function (e) {
        var grid_length=document.getElementById('' + ctrlcom + '_UCServices_gvServices').rows.length;
            Rate = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();
            var srvname = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            Is_Out_src_Srv = $(this).closest('tr').find("input[type=hidden][id*=hdnIsForeignSrv]").val();
            lastrowindex=$(this)[0].rowIndex;
            if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                if (OutSrcConAllow == 'False' && Is_Out_src_Srv == 'Y') { /* Allow Concession For Out Sourec Service Based On Setting Added By Pushkar */
                  $(".stoast").toastText("warning", " Based On Setting This OutSource "+ srvname +" Service Discount Working  ", 5, 3);

                }
                else {
               
                    NetAmount = (parseFloat(Rate)); //* parseInt(Qty));                  
                    ConceAmt = Math.round((((parseFloat(y)) / 100) * parseFloat(NetAmount)));                  
                    tNetAmount = parseFloat(NetAmount) - parseFloat(ConceAmt);                  
                    ConceAmt = Math.round((((parseFloat(y)) / 100) * parseFloat(NetAmount)));
                    OvaerAllConcAmt = parseFloat(OvaerAllConcAmt) + parseFloat(ConceAmt);
                    toatlcalculatedddiscountamt= parseFloat(toatlcalculatedddiscountamt) + parseFloat(ConceAmt);
                    OvaerAllConcAmt = Math.round(OvaerAllConcAmt);  

                 var tax_pct=$(this).closest('tr').find("[id*=hdntaxpct]").val();
                  if (tax_pct == undefined || tax_pct == null || tax_pct == '' ||tax_pct== NaN||tax_pct=="NaN") { tax_pct = "0"; }
                 var tottax_amt=(parseFloat(tNetAmount)* parseFloat(tax_pct) / 100).toFixed(2);
                  if (tottax_amt == undefined || tottax_amt == null || tottax_amt == '' ||tottax_amt== NaN||tottax_amt=="NaN") { tottax_amt = "0"; }
                 $(this).closest('tr').find("[id*=hdntaxamount]").val(tottax_amt);       
                
                
                 var ruleid = $('#' + ctrlcom + '_UCServices_hdnconruleid').val();
                  if(ruleid==""||ruleid==undefined||ruleid==null || ruleid=="undefined"){ruleid=0;}
                  if(hccard !=0){ruleid=0;}
                  var form_name = document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value;
                    var pat_type = '';
                    if (form_name == 'OP' || form_name == 'Cons') {
                        pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                    }
                    else if (form_name == 'OPQUICK') {
                        pat_type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
                    }
                    if(pat_type !=1 ){ ruleid=0}
                    if(hccard==0  && ruleid==0){
                                 
           
                    if (GridSlectionType == '1') {
                        $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val(setProperDecimalsCorpPer(Perconces));
                        $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(setProperDecimals(ConceAmt));
                       
                         //$(this).closest('tr').find("input[type=text][id*=txtDiscP]").attr('disabled', true);
                     //     $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").attr('disabled', true);
                         
                        var PatNetAmt = parseFloat($(this).closest('tr').find("input[type=text][id*=txtPamt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val((PatNetAmt));
                        var def_doctorPct=$(this).closest('tr').find('[id*=hdnDoctorPct]').val();
                        var def_orgPct=$(this).closest('tr').find('[id*=hdnOrgPct]').val();
                       var cmp_net_amt= $(this).closest('tr').find('input[type=text][id*=txtCamt]').val();
                         if (cmp_net_amt == undefined || cmp_net_amt == null || cmp_net_amt == '') { cmp_net_amt = "0"; }
//                         if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == '') { PatNetAmt = "0"; }
                         if (def_doctorPct == undefined || def_doctorPct == null || def_doctorPct == '') { def_doctorPct = "0"; }
                         if (def_orgPct == undefined || def_orgPct == null || def_orgPct == '') { def_orgPct = "0"; }
                       $(this).closest('tr').find('[id*=hdnDoctorPrice]').val((setProperDecimals(parseFloat(PatNetAmt)+parseFloat(cmp_net_amt))*setProperDecimals(def_doctorPct))/100);
                       $(this).closest('tr').find('[id*=hdnOrgPrice]').val((setProperDecimals(PatNetAmt+parseFloat(cmp_net_amt))*setProperDecimals(def_orgPct))/100);
                        
                                                             
                    }
                    else if (GridSlectionType == '2') {
                        $(this).closest('tr').find("input[type=text][id*=txthcPer]").val(setProperDecimalsCorpPer(Perconces));
                        $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val(setProperDecimals(ConceAmt));
                        $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").attr("disabled", true);
                        $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").addClass('ReadOnlyTextBox');
                        var PatNetAmt = parseFloat($(this).closest('tr').find("input[type=text][id*=txtPamt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val((PatNetAmt));
                          
                    }
                    else if (GridSlectionType == '3') {
                        $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val(setProperDecimalsCorpPer(Perconces));
                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val(setProperDecimals(ConceAmt));
                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").attr("disabled", true);
                        $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").addClass('ReadOnlyTextBox');
                        var PatNetAmt = parseFloat($(this).closest('tr').find("input[type=text][id*=txtPamt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val((PatNetAmt));
                            
                    }
                    else if (GridSlectionType == '4') {
                        $(this).closest('tr').find("input[type=text][id*=txtstPer]").val(setProperDecimalsCorpPer(Perconces));
                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val(setProperDecimals(ConceAmt));
                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").attr("disabled", true);
                        $(this).closest('tr').find("input[type=text][id*=txtstAmt]").addClass('ReadOnlyTextBox');
                        var PatNetAmt = parseFloat($(this).closest('tr').find("input[type=text][id*=txtPamt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val((PatNetAmt));
                        
                    }
                    else if (GridSlectionType == '5') {
                        $(this).closest('tr').find("input[type=text][id*=txtebPer]").val(setProperDecimalsCorpPer(Perconces));
                        $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val(setProperDecimals(ConceAmt));
                        $(this).closest('tr').find("input[type=text][id*=txtebAmt]").attr("disabled", true);
                        $(this).closest('tr').find("input[type=text][id*=txtebAmt]").addClass('ReadOnlyTextBox');
                        var PatNetAmt = parseFloat($(this).closest('tr').find("input[type=text][id*=txtPamt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val((PatNetAmt));
                         
                    }
                    else {
                        $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val(setProperDecimals(ConceAmt));
                        $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val(setProperDecimalsCorpPer(Perconces));

                        $(this).closest('tr').find("input[type=text][id*=txtDiscP]").attr('disabled', true);
                          $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").attr('disabled', true);

//                          if (document.getElementById('' + ctrlcom + '_UCServices_hdnisallowgst').value.toUpperCase() == "YES") 
//                          {
//                              var srvoriginalprice = $(this).closest('tr').find("[id*=hdnrateexcgst]").val();   
//                              var srvgrsamt=parseFloat(srvoriginalprice)-parseFloat(tottax_amt);
//                              $(this).closest('tr').find("input[type=text][id*=txtPamt]").val(Math.round(srvgrsamt));
//                              $(this).closest('tr').find("input[type=text][id*=txtRate]").val(Math.round(srvgrsamt))
//                              $(this).closest('tr').find("input[type=text][id*=txtAmount]").val(Math.round(srvgrsamt))
//                          }

                        var PatNetAmt = parseFloat($(this).closest('tr').find("input[type=text][id*=txtPamt]").val()) - parseFloat($(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val(setProperDecimals(PatNetAmt));
                        var def_doctorPct=$(this).closest('tr').find('[id*=hdnDoctorPct]').val();
                        var def_orgPct=$(this).closest('tr').find('[id*=hdnOrgPct]').val();
                         var cmp_net_amt= $(this).closest('tr').find('input[type=text][id*=txtCamt]').val();
                         if (cmp_net_amt == undefined || cmp_net_amt == null || cmp_net_amt == '') { cmp_net_amt = "0"; }
                         if (def_doctorPct == undefined || def_doctorPct == null || def_doctorPct == '') { def_doctorPct = "0"; }
                         if (def_orgPct == undefined || def_orgPct == null || def_orgPct == '') { def_orgPct = "0"; }
                       $(this).closest('tr').find('[id*=hdnDoctorPrice]').val((setProperDecimals(parseFloat(PatNetAmt)+parseFloat(cmp_net_amt))*setProperDecimals(def_doctorPct))/100);
                       $(this).closest('tr').find('[id*=hdnOrgPrice]').val((setProperDecimals(PatNetAmt+parseFloat(cmp_net_amt))*setProperDecimals(def_orgPct))/100);
                    }
                }
                              
                if (document.getElementById('' + ctrlcom + '_UCServices_hdnisallowgst').value.toUpperCase() == "YES") {
                var patnetamt = $(this).closest('tr').find('input[type=text][id*=txtPNAmt]').val();
                if (patnetamt== undefined || patnetamt== null || patnetamt== ''|| patnetamt== "" || isNaN(patnetamt) || patnetamt< 0) { patnetamt= "0"; }
                var cmptnetamt = $(this).closest('tr').find('input[type=text][id*=txtCamt]').val();
                    var exec_gst_amt=$(this).closest('tr').find("[id*=hdnrateexcgst]").val();   
                    var pattaxamt =(parseFloat(patnetamt) * parseFloat(tax_pct) / 100);
                    pattaxamt=pattaxamt.toFixed(2);
                    var cmptaxamt = (parseFloat(cmptnetamt)* parseFloat(tax_pct) / 100);
                    cmptaxamt=cmptaxamt.toFixed(2);
                    $(this).closest('tr').find('input[type=text][id*=txtptax]').val(pattaxamt);
                    $(this).closest('tr').find('input[type=text][id*=txtcmptax]').val(cmptaxamt);

            
                          
            var sgst_tax_pct = $(this).closest('tr').find("[id*=hdnsgstpct]").val();
            var cgst_tax_pct = $(this).closest('tr').find("[id*=hdncgstpct]").val();
            var sgsttaxamt = (parseFloat(tottax_amt) * parseFloat(sgst_tax_pct) / 100);
            sgsttaxamt=sgsttaxamt.toFixed(2);
            var cgsttaxamt = (parseFloat(tottax_amt) * parseFloat(cgst_tax_pct) / 100);
            cgsttaxamt=cgsttaxamt.toFixed(2);
            $(this).closest('tr').find('[id*=hdncgstamount]').val(cgsttaxamt);
            $(this).closest('tr').find('[id*=hdnsgstamount]').val(sgsttaxamt);
            totalsgstamount =(parseFloat(totalsgstamount) + parseFloat(sgsttaxamt));
            totalsgstamount=totalsgstamount.toFixed(2);
            totalcgstamount = (parseFloat(totalcgstamount) + parseFloat(cgsttaxamt));
            totalcgstamount=totalcgstamount.toFixed(2);
                   
                    ptaxamt = (parseFloat(ptaxamt)+parseFloat(pattaxamt)); ptaxamt= ptaxamt.toFixed(2);
                    ctaxamt=  (parseFloat(ctaxamt)+parseFloat(cmptaxamt));
                    ctaxamt=ctaxamt.toFixed(2);
                     taxamt =   (parseFloat(ptaxamt)+parseFloat(ctaxamt));
                     taxamt=taxamt.toFixed(2);

                }
      
                }
            }


        });

            $('#'+ ctrlcom + '_ReceiptControl2_txttaxamt').val(taxamt);
            $('#'+ ctrlcom + '_ReceiptControl2_txtpatTotTax').val(ptaxamt);
            $('#'+ ctrlcom + '_ReceiptControl2_txtcmpTotTx').val(ctaxamt);
            $('#'+ ctrlcom + '_ReceiptControl2_hdnTotalSgstAmount').val(totalsgstamount);
            $('#'+ ctrlcom + '_ReceiptControl2_hdnTotalCgstAmount').val(totalcgstamount);

        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
            var Regfee = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes") {
            }
            else {
            }
            Regfee = (Regfee == '' || Regfee == undefined || Regfee == null) ? 0 : Regfee;
            Regfee = parseFloat(Regfee);
        }
        if (Regfee > 0) {
            if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
                if (Regfee > 0) {
                    var Concess = (parseFloat(Perconces) / 100) * parseFloat(Regfee);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(OvaerAllConcAmt + Concess);
                
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegConcAmt').value = Math.round(Concess);
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnBillingConcAmt').value = Math.round(OvaerAllConcAmt);
                    if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value) == 0) {
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
                    }
                    document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = sGrid.innerHTML;
                }
            }
        }
        else {
       
            if (obj == 'A') {
          
            var roundeddiscount=document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
            var roundedmssingdiscamt=0;
            if(parseFloat(toatlcalculatedddiscountamt)!=parseFloat(roundeddiscount))
            {
            if(parseFloat(roundeddiscount)>parseFloat(toatlcalculatedddiscountamt))
            {
                        roundedmssingdiscamt=parseFloat(roundeddiscount)-parseFloat(toatlcalculatedddiscountamt);
                        var curdiscamt=$('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtDiscAmt]").val();
                        var ConceAmt= setProperDecimals(parseFloat(curdiscamt)+parseFloat(roundedmssingdiscamt) );
                      
                        $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtDiscAmt]").val(ConceAmt);
                        var PatNetAmt = parseFloat($('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtPamt]").val()) - parseFloat($('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtDiscAmt]").val());

                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }

                        $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtPNAmt]").val(setProperDecimals(PatNetAmt));
                        var def_doctorPct=$('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnDoctorPct]').val();
                        var def_orgPct=$('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnOrgPct]').val();
                         var cmp_net_amt= $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('input[type=text][id*=txtCamt]').val();
                         if (cmp_net_amt == undefined || cmp_net_amt == null || cmp_net_amt == '') { cmp_net_amt = "0"; }
                         
                         if (def_doctorPct == undefined || def_doctorPct == null || def_doctorPct == '') { def_doctorPct = "0"; }
                         if (def_orgPct == undefined || def_orgPct == null || def_orgPct == '') { def_orgPct = "0"; }
                       $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnDoctorPrice]').val((setProperDecimals(parseFloat(PatNetAmt)+parseFloat(cmp_net_amt))*setProperDecimals(def_doctorPct))/100);
                       $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnOrgPrice]').val((setProperDecimals(PatNetAmt+parseFloat(cmp_net_amt))*setProperDecimals(def_orgPct))/100);
            }
            else if(parseFloat(toatlcalculatedddiscountamt)>parseFloat(roundeddiscount)){
            
            
             roundedmssingdiscamt=parseFloat(toatlcalculatedddiscountamt)-parseFloat(roundeddiscount);
              var curdiscamt=$('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtDiscAmt]").val();
                        var ConceAmt= setProperDecimals(parseFloat(curdiscamt)-parseFloat(roundedmssingdiscamt) );
             $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtDiscAmt]").val(ConceAmt);
                        var PatNetAmt = parseFloat($('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtPamt]").val()) - parseFloat($('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtDiscAmt]").val());
                        if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == ''|| PatNetAmt == "" || isNaN(PatNetAmt) || PatNetAmt < 0) { PatNetAmt = "0"; }
                        $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find("input[type=text][id*=txtPNAmt]").val(setProperDecimals(PatNetAmt));
                        var def_doctorPct=$('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnDoctorPct]').val();
                        var def_orgPct=$('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnOrgPct]').val();
                         var cmp_net_amt= $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('input[type=text][id*=txtCamt]').val();
                         if (cmp_net_amt == undefined || cmp_net_amt == null || cmp_net_amt == '') { cmp_net_amt = "0"; }
//                         if (PatNetAmt == undefined || PatNetAmt == null || PatNetAmt == '') { PatNetAmt = "0"; }
                         if (def_doctorPct == undefined || def_doctorPct == null || def_doctorPct == '') { def_doctorPct = "0"; }
                         if (def_orgPct == undefined || def_orgPct == null || def_orgPct == '') { def_orgPct = "0"; }
                       $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnDoctorPrice]').val((setProperDecimals(parseFloat(PatNetAmt)+parseFloat(cmp_net_amt))*setProperDecimals(def_doctorPct))/100);
                       $('table[id*=gvServices] tr').filter(':eq(' + lastrowindex + ')').find('[id*=hdnOrgPrice]').val((setProperDecimals(PatNetAmt+parseFloat(cmp_net_amt))*setProperDecimals(def_orgPct))/100);
            
            
            
            }
            }
                OvaerAllConcAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
                OvaerAllConcAmt = Math.round(OvaerAllConcAmt);
            }
            else {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnBillingConcAmt').value = Math.round(OvaerAllConcAmt);
            }

            if (parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value) == 0) {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
            }
            document.getElementById('' + ctrlcom + '_hdnHTMLstring').value = sGrid.innerHTML;
        }
        if (OvaerAllConcAmt == undefined || OvaerAllConcAmt == null || OvaerAllConcAmt == '' || OvaerAllConcAmt == "NaN") { OvaerAllConcAmt = 0; }




        return OvaerAllConcAmt;

    }


    function GetPayment(conc, Perc, TAmount, dec, txtPayAmt, Type, TotalConcessionPersentage, obj) {
        if (parseFloat(conc) > 0) {
            GetConcession(conc, TAmount, dec, txtPayAmt, '');
        }
        else {
               var overallcon = GetOverAllConcession(Perc, TAmount, txtPayAmt, dec, Type, TotalConcessionPersentage, obj);
               /*sitaram start 12/09/2019 for sun of services amt to grid to apply the control*/
               var _docName = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
               var TotalGrossAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value;
               var ReceiptAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalReciptAmt').value;
               var CmpNetAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value;
               var CmpConcAmt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = overallcon, _docName;
               var IndConcAmt = parseFloat(TotalGrossAmt) - parseFloat(overallcon);
               var TotalConcession = parseFloat(CmpConcAmt) + parseFloat(IndConcAmt);
               var NetAmt = setProperDecimalsCorp(IndConcAmt);
               var CurDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
               var CurCmpDue = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpartygrossamt').value;
               var pattaxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatTotTax').value;
                var cmptaxamt = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpTotTax').value;
               if (pattaxamt == '' || pattaxamt == undefined || pattaxamt == null) { pattaxamt = 0; }
               if (cmptaxamt == '' || cmptaxamt == undefined || cmptaxamt == null) { cmptaxamt = 0; }
               if (CurDue == undefined || CurDue == '' || CurDue == null || CurDue == "NaN") { CurDue = 0; }
               if (CurCmpDue == undefined || CurCmpDue == '' || CurCmpDue == null || CurCmpDue == "NaN") { CurCmpDue = 0; }
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = setProperDecimalsAll(NetAmt, _docName);
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = setProperDecimalsAll((parseFloat(NetAmt) + parseFloat(CmpNetAmt)), _docName);
               var totalamount = NetAmt;
               var exchangerate = ctl00_ContentPlaceHolder1_ReceiptControl2_txtExchangeRate.value;
               var amount = setProperDecimalsCorp(parseFloat(totalamount) / parseFloat(exchangerate));
    
               if(document.getElementById('' + ctrlcom + '_UCServices_hdnisallowgst').value.toUpperCase() == "YES" ){
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = setProperDecimalsAll((parseFloat(NetAmt) + parseFloat(CmpNetAmt)+  parseFloat(pattaxamt)+parseFloat(cmptaxamt)), _docName);
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = setProperDecimalsAll((parseFloat(NetAmt)+  parseFloat(pattaxamt)) , _docName); 
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = setProperDecimalsAll((parseFloat(CmpNetAmt)+  parseFloat(cmptaxamt)) , _docName); 
               document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = setProperDecimalsAll((parseFloat(NetAmt) +parseFloat(pattaxamt)), _docName);
               document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = setProperDecimalsAll((parseFloat(NetAmt)+ parseFloat(pattaxamt)), _docName);
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value =setProperDecimalsAll(parseFloat(amount)+  parseFloat(pattaxamt));
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value =setProperDecimalsAll(parseFloat(amount)+  parseFloat(pattaxamt));              
               }
               else{
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = setProperDecimalsAll((parseFloat(NetAmt) + parseFloat(CmpNetAmt)), _docName);               
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = setProperDecimalsAll(NetAmt, _docName);
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = setProperDecimalsAll(NetAmt, _docName);
               document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = setProperDecimalsAll(NetAmt, _docName);
                   document.getElementById('' + ctrlcom + '_ReceiptControl2_txtreqamtkyd').value = amount;
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtCurrAmt').value = amount;
                
               }
//               document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value = setProperDecimalsAll(NetAmt, _docName);
//               document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = setProperDecimalsAll(NetAmt, _docName);
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
               document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrossamttotal').value = setProperDecimalsAll((parseFloat(CurDue) + parseFloat(CurCmpDue)), _docName);
               /*sitaram end*/
        }
    }
    function GetConcession(concession, TAmount, dec, txtPayAmt, obj) {
        var inputs = document.getElementById('<%= gvServices.ClientID %>').rows.length;
        var dueAmount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = concession;
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value == 'OPQUICK') {
            var Regfee = 0;
            if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnRegconSetting').value == "Yes") {
            }
            //var Regfee = document.getElementById('' + ctrlcom + '_txtregfee').value;
            Regfee = Regfee == '' ? 0 : Regfee;
            Regfee = parseFloat(Regfee);
            var per = (parseFloat(concession) * 100) / (parseFloat(TAmount) + parseFloat(Regfee));
        }
        else {
            var per = (parseFloat(concession) * 100) / (parseFloat(TAmount));
        }
        if (per > 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = 0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = 0;
            $(".stoast").toastText("warning", "Concession cannot be greater than Net Amount.", 5, 3);
            /*alert('Concession cannot be greater than Net Amount.');*/
            return false;
        }

        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = per;
        var balAmount = parseFloat(dueAmount) - parseFloat(concession);



        if (parseFloat(balAmount) >= 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round((parseFloat(TAmount) - parseFloat(concession) - parseFloat(txtPayAmt)));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round((parseFloat(TAmount) - parseFloat(concession)));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = Math.round(parseFloat(TAmount));
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('lk_txt_options_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        }
        else {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = Math.round((parseFloat(TAmount) - parseFloat(concession)));
            //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value = parseFloat(txtPayAmt) + parseFloat(balAmount);
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '1px solid rgb(190, 190, 190)';
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').value = '';
            document.getElementById('lk_txt_options_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;

            var RemainDues = parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value) - parseFloat(document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatientReceiptAmt').value);
            if (RemainDues > 0)
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = Math.round(RemainDues);
            else
                document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = 0;
        }
        obj = 'A';
        if (obj == 'A')//Contribute amount in all Services.
        {
            var Perc = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value;
            var Fn_Out_Concess = GetOverAllConcession(Perc, TAmount, txtPayAmt, dec, 'Cash', Perc, obj);
            if (parseFloat(Fn_Out_Concess) > 0) {
                concession = parseFloat(Fn_Out_Concess);
            }
            document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value = Math.round(concession);
        }
    }
    function hideSelectionColumn(obj, Val, Sel_Disc_Type_ids) {
        var IndexSelected = Val;
        var disc_type_ids = Sel_Disc_Type_ids.split(',');
        var cash_count = 0;
        var HC_Count = 0;
        var Mnt_Count = 0;
        var Stff_Count = 0;
        var EvBsd_Count = 0;
        var CR_Count = 0;
        var PR_Count = 0;
        for (var i = 0; i <= disc_type_ids.length; i++) {
            if (disc_type_ids[i] == '1') {
                cash_count = parseInt(cash_count) + parseInt(1);
            }
            else if (disc_type_ids[i] == '2') {
                HC_Count = parseInt(HC_Count) + parseInt(1);
            }
            else if (disc_type_ids[i] == '3') {
                Mnt_Count = parseInt(Mnt_Count) + parseInt(1);
            }
            else if (disc_type_ids[i] == '4') {
                Stff_Count = parseInt(Stff_Count) + parseInt(1);
            }
            else if (disc_type_ids[i] == '5') {
                EvBsd_Count = parseInt(EvBsd_Count) + parseInt(1);
            }
            else if (disc_type_ids[i] == '6') {
                CR_Count = parseInt(CR_Count) + parseInt(1);
            }
            else if (disc_type_ids[i] == '7') {
                PR_Count = parseInt(PR_Count) + parseInt(1);
            }
        }
        if (parseInt(cash_count) > 0) /* Cash Wise Discount Exist Or Not Checking */
        { }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var amt = parseFloat($(this).closest('tr').find("[id*=txtAmount]").val());
                if (parseInt(srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtDiscP]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtDiscAmt]")[0].disabled = true;
                    var txtcashAmt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                    txtcashAmt = typeof txtcashAmt == 'string' ? (typeof txtcashAmt == 'undefined' || txtcashAmt.trim() == '' ? 0 : parseFloat(txtcashAmt)) : (typeof txtcashAmt == 'object' ? 0 : parseFloat(txtcashAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtcashAmt);
                    $(this).closest("tr").find("[id*=txtDiscP]").val('0');
                    $(this).closest("tr").find("[id*=txtDiscAmt]").val('0');
                }
            });
        }
        if (parseInt(HC_Count) > 0) /* Health Card Wise Discount Exists Or Not */
        { }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var amt = parseFloat($(this).closest('tr').find("[id*=txtAmount]").val());
                if (parseInt(srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txthcPer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtHcAmt]")[0].disabled = true;
                    var txtHCAmt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                    txtHCAmt = typeof txtHCAmt == 'string' ? (typeof txtHCAmt == 'undefined' || txtHCAmt.trim() == '' ? 0 : parseFloat(txtHCAmt)) : (typeof txtHCAmt == 'object' ? 0 : parseFloat(txtHCAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtHCAmt);
                    $(this).closest("tr").find("[id*=txthcPer]").val('0');
                    $(this).closest("tr").find("[id*=txtHcAmt]").val('0');
                }
            });
        }
        if (parseInt(Mnt_Count) > 0) {/* Management Discount Check */
        }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var amt = parseFloat($(this).closest('tr').find("[id*=txtAmount]").val());
                if (parseInt(srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtmaPer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtmgAmt]")[0].disabled = true;
                    var txtmgAmt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                    txtmgAmt = typeof txtmgAmt == 'string' ? (typeof txtmgAmt == 'undefined' || txtmgAmt.trim() == '' ? 0 : parseFloat(txtmgAmt)) : (typeof txtmgAmt == 'object' ? 0 : parseFloat(txtmgAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtmgAmt);
                    $(this).closest("tr").find("[id*=txtmaPer]").val('0');
                    $(this).closest("tr").find("[id*=txtmgAmt]").val('0');
                }
            });
        }
        if (parseInt(Stff_Count) > 0) /* Staff Discount Checking */
        { }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var amt = parseFloat($(this).closest('tr').find("[id*=txtAmount]").val());
                if (parseInt(srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtstPer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtstAmt]")[0].disabled = true;
                    var txtstAmt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                    txtstAmt = typeof txtstAmt == 'string' ? (typeof txtstAmt == 'undefined' || txtstAmt.trim() == '' ? 0 : parseFloat(txtstAmt)) : (typeof txtstAmt == 'object' ? 0 : parseFloat(txtstAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtstAmt);
                    $(this).closest("tr").find("[id*=txtstPer]").val('0');
                    $(this).closest("tr").find("[id*=txtstAmt]").val('0');
                }
            });
        }
        if (parseInt(EvBsd_Count) > 0) /* Event Based Discount Valdation Checking */
        { }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var amt = parseFloat($(this).closest('tr').find("[id*=txtAmount]").val());
                if (parseInt(srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtebPer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtebAmt]")[0].disabled = true;
                    var txtebAmt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                    txtebAmt = typeof txtebAmt == 'string' ? (typeof txtebAmt == 'undefined' || txtebAmt.trim() == '' ? 0 : parseFloat(txtebAmt)) : (typeof txtebAmt == 'object' ? 0 : parseFloat(txtebAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtebAmt);
                    $(this).closest("tr").find("[id*=txtebPer]").val('0');
                    $(this).closest("tr").find("[id*=txtebAmt]").val('0');
                }
            });
        }
        if (parseInt(CR_Count) > 0) /* Concession Rule Based Discount Checking */
        { }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var srv_id = $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
                var amt = parseFloat($(this).closest('tr').find("[id*=txtAmount]").val());
                if (parseInt(srv_id) > 0) {
                    $(this).closest("tr").find("[id*=txtRulePer]")[0].disabled = true;
                    $(this).closest("tr").find("[id*=txtcncrlAmt]")[0].disabled = true;
                    var txtCrAmt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                    txtCrAmt = typeof txtCrAmt == 'string' ? (typeof txtCrAmt == 'undefined' || txtCrAmt.trim() == '' ? 0 : parseFloat(txtCrAmt)) : (typeof txtCrAmt == 'object' ? 0 : parseFloat(txtCrAmt));
                    var _net = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                    if (_net == "" || _net == undefined || _net == null || _net == "NaN") { _net = "0"; }
                    $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(_net) + txtCrAmt);
                    $(this).closest("tr").find("[id*=txtRulePer]").val('0');
                    $(this).closest("tr").find("[id*=txtcncrlAmt]").val('0');
                }
            });
        }
        var grid = document.getElementById('<%= gvServices.ClientID %>');
        for (intC = 0; intC < grid.rows.length; intC++) {
            if (IndexSelected == '2') {
                $('.HCPER').show();
                $('.HCAMT').show();
            }
            if (IndexSelected == '3') {
                $('.MGPER').show();
                $('.MGAMT').show();
            }
            if (IndexSelected == '4') {
                $('.STAFPER').show();
                $('.STAMT').show();
            }
            if (IndexSelected == '5') {
                $('.EBPER').show();
                $('.EBAMT').show();
            }
            if (IndexSelected == '6') {
                $('.CNCRLPER').show();
                $('.CNCRLAMT').show();
            }
        }

    }

    function CalculateTotalAmt() {
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            servicename = $(this).closest('tr').find("input[type=text][id*=txtServiceName]").val();
            Rate = $(this).closest('tr').find("input[type=text][id*=txtRate]").val();
            if (Rate != '' && $(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val() > 0 && servicename != '' && servicename != '--Enter Service Name Here--') {
                Amount = ($(this).closest('tr').find("input[type=text][id*=txtPamt]").val());
                TAmount = parseFloat(TAmount) + parseFloat(Amount);
            }
        });

    }

    var CountIncrement = 0;
    var SELECTED_TYPE_ID = '', SELECTED_ID = '', SERVICE_ID = '', SERVICE_TYPE_ID = '', SERVICE_GROUP_ID = '', PACKAGE_IDS = '', DOCTORID = '', UMR_NO = '', AMOUNT = '', sameconc = '';
    function Onselection(data) {
        SELECTED_TYPE_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").val();
        if (SELECTED_TYPE_ID == '2') { /* Health Card Selection Already Exist Or Not Condition Checking */
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                var index = $(this)[0].rowIndex;
                var cardno = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[id*=hdncardid]").val();
                if (cardno == data.HEALTH_CARD_TYPE_ID) {
                    $(".stoast").toastText("warning", "Health card of this type is already having concession", 5, 3);
                    /*alert('Health card of this type is already having concession');*/
                    sameconc = "Y";
                    return false;
                }
                else {
                    sameconc = "N";
                }
            });
            SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdncardid]").val();
        }
        else if (SELECTED_TYPE_ID == '5') { /* Event Based Selection Already Exist Or Not Condition Checking */
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                var index = $(this)[0].rowIndex;
                var cardno = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[id*=hdneventid]").val();
                if (cardno == data.EVENT_ID) {
                    $(".stoast").toastText("warning", "Eventbased of this type is already having concession", 5, 3);
                    /*alert('Eventbased of this type is already having concession');*/
                    sameconc = "Y";
                    return false;
                }
                else {
                    sameconc = "N";
                }
            });
            SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdneventid]").val();

        }
        else if (SELECTED_TYPE_ID == '6') {
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                var index = $(this)[0].rowIndex;
                var cardno = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[id*=hdnRuleid]").val();
                if (cardno == data.CNCSN_RULE_ID) {
                    $(".stoast").toastText("warning", "Concession Rule is already having concession", 5, 3);
                    /*alert('Concession Rule is already having concession');*/
                    sameconc = "Y";
                    return false;
                }
                else {
                    sameconc = "N";
                }
            });
            SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnRuleid]").val();
        }
        if (sameconc != "Y") {
            GlobalMyData = [];
            hcbindcalc(data, SELECTED_ID);
        }
    }
    function hcbindcalc(data, SELECTED_ID) {
        var TotalPer = 0;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            var IndvPerTotal = $(this).closest("tr").find("[id*=txtPersentage]").val();
            IndvPerTotal = IndvPerTotal == '' ? 0 : IndvPerTotal;
            IndvPerTotal = typeof IndvPerTotal == 'string' ? (typeof IndvPerTotal == 'undefined' || IndvPerTotal.trim() == '' ? 0 : parseFloat(IndvPerTotal)) : (typeof IndvPerTotal == 'object' ? 0 : parseFloat(IndvPerTotal));
            TotalPer += parseFloat(IndvPerTotal);
        });
        if (TotalPer >= 100) {
            $(".stoast").toastText("warning", "System Should Not Alow More Than 100%", 5, 3);
            /*alert('System Should Not Alow More Than 100%');*/
            btnclose();
            return false;
        }
        BindData('Add', data, SELECTED_ID);
    }
    var cncsc_rule_defined='';var cncsc_rule_define_id=0;
    function BindData(Val, SlectedVal, selectedId) {

        var AllowOveralFrinSrvDscnt = document.getElementById('' + ctrlcom + '_UCServices_hdnAllowOutSideConcs').value;
        if (Val == 'Add') {

            SERVICE_TYPE_ID == "" ? 0 : SERVICE_TYPE_ID;
            SERVICE_GROUP_ID == "" ? 0 : SERVICE_GROUP_ID;
            PACKAGE_IDS == "" ? 0 : PACKAGE_IDS;
            DOCTORID == "" ? 0 : DOCTORID;
            if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
                UMR_NO = $('#'+ ctrlcom + '_Umrlookup_txtSearchControl').val();
            }
            else {
                UMR_NO = $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            }
            UMR_NO == '' ? 0 : UMR_NO;
            var PAT_NAME = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value;
            var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
            var index = gridid.rows.length - 1;
            var serviceid = 0, doctorid = 0, servicetypeid = 0,qty=0,rate=0,sel_qty=0,sel_rate=0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                    SERVICE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val();
                    var is_Frien_Srv = $(this).closest('tr').find('input[type=hidden][id*=hdnIsForeignSrv]').val();
                    SERVICE_TYPE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceTypID]").val();
                    DOCTORID = $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val();   
                    qty=$(this).closest("tr").find("input[type=text][id*=txtQty]").val();
                    rate=$(this).closest("tr").find("input[type=text][id*=txtRate]").val();
                    if(qty==undefined || qty==null || qty=='' || qty==0){qty=1;}
                    if(rate==undefined || rate==null || rate=='' || rate==0){rate=0;}
                    SERVICE_ID = SERVICE_ID == undefined ? 0 : SERVICE_ID;
                    SERVICE_TYPE_ID = SERVICE_TYPE_ID == undefined ? 0 : SERVICE_TYPE_ID;
                    DOCTORID = DOCTORID == undefined ? 0 : DOCTORID;
                    SERVICE_ID = SERVICE_ID == '' ? 0 : SERVICE_ID;
                    SERVICE_TYPE_ID = SERVICE_TYPE_ID == '' ? 0 : SERVICE_TYPE_ID;
                    DOCTORID = DOCTORID == '' ? 0 : DOCTORID;

                    
                 


                    if (AllowOveralFrinSrvDscnt == "False" && is_Frien_Srv == "Y") {
                    }
                    else {
                        if (SERVICE_ID != 0 && SERVICE_ID != null && SERVICE_ID != undefined && SERVICE_ID != "") {
                            if (serviceid == 0) {
                                serviceid = SERVICE_ID;
                                doctorid = DOCTORID;
                            }
                            else {
                                serviceid += ',' + SERVICE_ID;
                                 doctorid += ',' + DOCTORID;
                                
                            }
                        }
                        /*if (DOCTORID != 0 && DOCTORID != null && DOCTORID != undefined && DOCTORID != "") {
                            if (doctorid == 0) {
                                doctorid = DOCTORID;
                            }
                            else {
                                doctorid += ',' + DOCTORID;
                            }
                        }*/
                        if (SERVICE_TYPE_ID != "0" && SERVICE_TYPE_ID != null && SERVICE_TYPE_ID != undefined && SERVICE_TYPE_ID != "") {
                            if (servicetypeid == 0) {
                                servicetypeid = SERVICE_TYPE_ID;
                                doctorid = DOCTORID;
                                 sel_qty=qty;
                                 sel_rate=rate;
                            }
                            else {
                                servicetypeid += ',' + SERVICE_TYPE_ID;
                                 sel_qty += ',' + qty;
                                 sel_rate += ',' + rate;
                                //doctorid += ',' + DOCTORID;
                            }
                        }
                    }
                }
            });
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").val() == '2') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').val(SlectedVal.HEALTH_CARD_TYPE_NAME);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdncardid]").val(SlectedVal.HEALTH_CARD_TYPE_ID);
                }
                if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").val() == '5') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').val(SlectedVal.EVENT_NAME);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtAutherizedPersion]').val(SlectedVal.AUTH_NAME);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnauthid]").val(SlectedVal.EVENT_AUTH_ID);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdneventid]").val(SlectedVal.EVENT_ID);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtAutherizedPersion]').removeClass('red');
                    CreateMultiDiscgirdRow();                  
                }
                if ($('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").val() == '6') {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtcardno]').val(SlectedVal.CNCSN_RULE_NAME);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnRuleid]").val(SlectedVal.CNCSN_RULE_ID);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtAutherizedPersion]').val(SlectedVal.CNCSN_DEFINE_NAME);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnauthid]").val(SlectedVal.CNCSN_DEFINE_BY);
                     $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndexNew + ")").find('[id*=txtAutherizedPersion]').removeClass('red');
                     CreateMultiDiscgirdRow();
                                     
                }
            });
            SELECTED_TYPE_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=ddlMultiDiscounttype]").val();
            if (SELECTED_TYPE_ID == '2') {
                SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdncardid]").val();
            }
            else if (SELECTED_TYPE_ID == '4') {
                SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnauthid]").val();
            }
            else if (SELECTED_TYPE_ID == '5') {
                SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdneventid]").val();

            }
            else if (SELECTED_TYPE_ID == '6') {
                SELECTED_ID = $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnRuleid]").val();
            }
            if (SELECTED_ID == undefined || SELECTED_ID == "") { SELECTED_ID = selectedId; }

              var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var cmp_id = 0;
        
        if (form_name == 'OP') {
            cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        }
        else if (form_name == 'Cons') {
           cmp_id=document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value
        }
       else if (form_name == 'OPQUICK') {
           var pat_type = $('#'+ ctrlcom + '_ddlPatientType').val();
           if (pat_type == '2' || pat_type == '8' || pat_type == '5') {
               cmp_id = $('#'+ ctrlcom + '_hdnCompanyID').val();
            }
            
        }
       if (cmp_id == undefined || cmp_id == null || cmp_id == '') {cmp_id = 0; }
      var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
         var healthcarddet_id=0;
          if (form_name == 'OPQUICK') {
         healthcarddet_id=document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnhealth_car_det_id').value;
         }
        if (healthcarddet_id == undefined || healthcarddet_id == null || healthcarddet_id == '') {healthcarddet_id = 0; }
            if (SELECTED_ID != '0' && (UMR_NO != '' || PAT_NAME != '')) {
                GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/GetPrices",
            { SELECTED_TYPE_ID: SELECTED_TYPE_ID, SELECTED_ID: SELECTED_ID, UMR_NO: UMR_NO, SERVICE_ID: serviceid, SERVICE_TYPE_ID: servicetypeid, PAT_NAME: PAT_NAME, DOCTOR_ID: doctorid,cmp_id:cmp_id, sel_qty:sel_qty,sel_rate:sel_rate ,HEALTH_CARD_DET_ID:healthcarddet_id },
            function (JData) {
            if(JData.d  != null){
            if(JData.d[0][0] != null){
              JData.d = JData.d[0][0];
                if (JData.d != null) {
                    multiDimArray(JData, SELECTED_ID, CurrentRowIndexNew);
                    var Data = JData.d;
                    for (var i in Data) {
                        i++;
                        if (Data[i - 1]["SERVICE_ID"] != '') {
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                    if (Data[i - 1]["SERVICE_ID"] == '2') {
                                        if (Data[i - 1]["DOCTOR_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val() && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                var RoWindex = $(this)[0].rowIndex;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();

                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;

                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                       // $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));

                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'HC');
                                                }
                                                if (SELECTED_TYPE_ID == '5') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();

                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                       // $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'EV');
                                                }
                                                if (SELECTED_TYPE_ID == '6') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxthcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    pattxthcPer = pattxthcPer == '' ? 0 : pattxthcPer;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(TotaloAssignAmt));
                                                       // $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                   // $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'RL');
                                                }
                                                CalculateGridAmt(RoWindex);
                                            }
                                        }
                                    }
                                    else {
                                        if (Data[i - 1]["SERVICE_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                var RoWindex = $(this)[0].rowIndex;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();

                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;

                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(TotaloAssignAmt));
                                                      //  $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                      //  $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'HC');
                                                }
                                                if (SELECTED_TYPE_ID == '5') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();

                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(TotaloAssignAmt));
                                                      //  $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                       // $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'EV');
                                                }
                                                if (SELECTED_TYPE_ID == '6') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxthcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    var txtQty = $(this).closest("tr").find("[id*=txtQty]").val();
                                                    if (txtQty == '' || txtQty == undefined || txtQty == null) { txtQty = '1'; }
                                                    pattxthcPer = pattxthcPer == '' ? 0 : pattxthcPer;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;

                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(TotaloAssignAmt));
                                                    //    $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    
                                                    
                                                    } else {

                                                            var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                            var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                            var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                            var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                            var patcncsnruleamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                            var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                            var patgrosslineamt=$(this).closest("tr").find("[id*=txtPamt]").val();
                                                            var totaleligiblebalanceamount=0;
                    
                                                            patgrosslineamt=patgrosslineamt||0;
                                                            pattxtDiscamt=pattxtDiscamt||0;
                                                            pattxtmaamt=pattxtmaamt||0;
                                                            patxtstamt=patxtstamt||0;
                                                            pattxthcamt=pattxthcamt||0;
                                                            patcncsnruleamt=patcncsnruleamt||0;
                                                            pattxtebamt=pattxtebamt||0;
                                                            totaleligiblebalanceamount+=parseFloat(pattxtDiscamt)+parseFloat(pattxtmaamt)+parseFloat(patxtstamt)+parseFloat(pattxthcamt)+parseFloat(patcncsnruleamt)+parseFloat(pattxtebamt);
                                                            totaleligiblebalanceamount=totaleligiblebalanceamount||0;
                                                            totaleligiblebalanceamount=parseFloat(patgrosslineamt)-parseFloat(totaleligiblebalanceamount);

                                                            if(parseFloat(Data[i - 1].DIS_AMT) > parseFloat(totaleligiblebalanceamount))
                                                            {
                                                                $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(totaleligiblebalanceamount));
                                                                $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                            }
                                                            else{
                                                                $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                                $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(Data[i - 1].DIS_AMT) * parseFloat(txtQty));
                                                            }
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'RL');
                                                }
                                                CalculateGridAmt(RoWindex);
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
                else {
                    var AlertMessages = '';
                    if (SELECTED_TYPE_ID == 2) {
                        AlertMessages = 'Health card';
                    }
                    if (SELECTED_TYPE_ID == 5) {
                        AlertMessages = 'Event Based';
                    }
                    if (SELECTED_TYPE_ID == 6) {
                        AlertMessages = 'Concession Rule';
                    }
                    $(".stoast").toastText("warning", "This '" + AlertMessages + "'Does Not Have Any Concession", 5, 3);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("input[type=hidden][id*=hdnRuleid]").val(0);
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtcardno]").val('');
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').find("[id*=txtcardno]").focus();
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + CurrentRowIndexNew + ')').remove();
                }
                }
                }
            },
            function (jqXHR, textStatus, errorThrown) {

            });
            }
        }
        else {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var RoWindex = $(this)[0].rowIndex;
                if (SlectedVal == 2) {
                    $(this).closest("tr").find("[id*=txthcPer]").val(0);
                    $(this).closest("tr").find("[id*=txtHcAmt]").val(0);
                    CalculateGridAmt(RoWindex);
                }
                if (SlectedVal == 5) {
                    $(this).closest("tr").find("[id*=txtebPer]").val(0);
                    $(this).closest("tr").find("[id*=txtebAmt]").val(0);
                    CalculateGridAmt(RoWindex);
                }
                if (SlectedVal == 6) {
                    $(this).closest("tr").find("[id*=txtRulePer]").val(0);
                    $(this).closest("tr").find("[id*=txtcncrlAmt]").val(0);
                    CalculateGridAmt(RoWindex);
                }
            });
        }
        $('[id*=pnlGridPop]').css("display", "none");
        if (Val.toLowerCase() == 'delete') {
            HideDiscountColumns(CurrentRowIndexNew);
        }
    }
    var multi_disc_length='';
    function CalculateMultiDiscountGridTypeBased(CountIncrement, Flag) {
         var PatGrossAmt = $('#'+ ctrlcom + '_ReceiptControl2_txtpatgross').val();
        
        if (Flag == 'HC') {
            var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtHcAmt]").val() > 0) {
                    var hcAmt = $(this).closest('tr').find("[id*=txtHcAmt]").val();
                    var hcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                    typeof hcPer == 'string' ? (typeof hcPer == 'undefined' || hcPer.trim() == '' ? 0 : parseFloat(hcPer)) : (typeof hcPer == 'object' ? 0 : parseFloat(hcPer));
                    typeof hcAmt == 'string' ? (typeof hcAmt == 'undefined' || hcAmt.trim() == '' ? 0 : parseFloat(hcAmt)) : (typeof hcAmt == 'object' ? 0 : parseFloat(hcAmt));
                    hcTotAmt += parseFloat(hcAmt);
                    hcTotPer += parseFloat(hcPer);
                }
            });

            var hcTotalOnPatGrossper = setProperDecimalsCorpPer((parseFloat(hcTotAmt) / parseFloat(PatGrossAmt)) * 100);
            var hcTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(hcTotalOnPatGrossper)) / 100;
            if(hcTotalOnPatGrossper==""||hcTotalOnPatGrossper==0||isNaN(hcTotalOnPatGrossper)){hcTotalOnPatGrossper=0;}
            if(hcTotalOnPatGrossAmt==""||hcTotalOnPatGrossAmt==0||isNaN(hcTotalOnPatGrossAmt)){hcTotalOnPatGrossAmt=0;}
            hcTotalOnPatGrossper = setProperDecimalsCorpPer(hcTotalOnPatGrossper);
            hcTotalOnPatGrossAmt = Math.round(hcTotalOnPatGrossAmt);

            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val(hcTotalOnPatGrossper);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(hcTotalOnPatGrossAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAutherizedPersion]').val(cncsc_rule_defined);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find("input[type=hidden][id*=hdnauthid]").val(cncsc_rule_define_id);
           // onauthbind($('[id$=gvMultipleConcession] tr').filter(':eq(' + CountIncrement + ')').find('[id*=BtnSrvSearch]')[0])
            multi_disc_length = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length;
            if (multi_disc_length == 2) {
                fn_AddRowWithDetais();
                multi_disc_length++;
            }           
            if (CountIncrement == 1) {
                AssignSno1(1);
                var PerHc = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]').val();
                if (parseFloat(PerHc) > 0) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
                }
                $('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
            }
        }
        else if (Flag == 'EV') {
            var EvTotAmt = 0, EvTotPer = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtebAmt]").val() > 0) {
                    var EvAmt = $(this).closest('tr').find("[id*=txtebAmt]").val();
                    var EvPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                    typeof EvAmt == 'string' ? (typeof EvAmt == 'undefined' || EvAmt.trim() == '' ? 0 : parseFloat(EvAmt)) : (typeof EvAmt == 'object' ? 0 : parseFloat(EvAmt));
                    typeof EvPer == 'string' ? (typeof EvPer == 'undefined' || EvPer.trim() == '' ? 0 : parseFloat(EvPer)) : (typeof EvPer == 'object' ? 0 : parseFloat(EvPer));
                    EvTotAmt += parseFloat(EvAmt);
                    EvTotPer += parseFloat(EvPer);
                }
            });

            var EvTotalOnPatGrossper = setProperDecimalsCorpPer((parseFloat(EvTotAmt) / parseFloat(PatGrossAmt)) * 100);
            var EvTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(EvTotalOnPatGrossper)) / 100;
            EvTotalOnPatGrossper = setProperDecimalsCorpPer(EvTotalOnPatGrossper);
            EvTotalOnPatGrossAmt = Math.round(EvTotalOnPatGrossAmt);

            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val(EvTotalOnPatGrossper.toFixed(2));
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(EvTotalOnPatGrossAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
           // $('#'+ ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
        }
        else if (Flag == 'CRL') {
            var RlTotAmt = 0, RlTotPer = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtcncrlAmt]").val() > 0) {
                    var RlAmt = $(this).closest('tr').find("[id*=txtcncrlAmt]").val();
                    var RlPer = $(this).closest("tr").find("[id*=txtRulePer]").val();
                    var txtQty = $(this).closest("tr").find("[id*=txtQty]").val();
                    //if (txtQty != '' && txtQty != null && txtQty != undefined) { RlAmt = parseFloat(RlAmt) * parseFloat(txtQty); }
                    typeof RlAmt == 'string' ? (typeof RlAmt == 'undefined' || RlAmt.trim() == '' ? 0 : parseFloat(RlAmt)) : (typeof RlAmt == 'object' ? 0 : parseFloat(RlAmt));
                    typeof RlPer == 'string' ? (typeof RlPer == 'undefined' || RlPer.trim() == '' ? 0 : parseFloat(RlPer)) : (typeof RlPer == 'object' ? 0 : parseFloat(RlPer));
                    RlTotAmt += parseFloat(RlAmt);
                    RlTotPer += parseFloat(RlPer);
                }
            });
            var RlTotalOnPatGrossper = (parseFloat(RlTotAmt) / parseFloat(PatGrossAmt)) * 100;
            var RlTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(RlTotalOnPatGrossper)) / 100;
            RlTotalOnPatGrossper = setProperDecimalsCorpPer(RlTotalOnPatGrossper);
            RlTotalOnPatGrossAmt = Math.round(RlTotalOnPatGrossAmt);

            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val((RlTotalOnPatGrossper).toFixed(4));
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(RlTotalOnPatGrossAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
              $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]').val(2);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
             $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAutherizedPersion]')[0].disabled = true;
             //$("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtCRemks]').className = 'grey';
              $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAutherizedPersion]').val(cncsc_rule_defined);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=hdnRuleid]').val($('#'+ ctrlcom + '_UCServices_hdnconruleid').val());
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find("input[type=hidden][id*=hdnauthid]").val(cncsc_rule_define_id);
                
             multi_disc_length = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length;
            if (multi_disc_length == 2) {
                fn_AddRowWithDetais();
                multi_disc_length++;
            }           
            if (CountIncrement == 1) {
                AssignSno1(1);
                var PerHc = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]').val();
                if (parseFloat(PerHc) > 0) {
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
//                    
//                     document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').disabled = true;
                     // document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_ucdueauth').disabled = true;
                     //   document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').value = cncsc_rule_defined;
              //  document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenText').value = cncsc_rule_defined;
              // document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth__hiddenID').value = cncsc_rule_define_id;
                document.getElementById('' + ctrlcom + '_ReceiptControl2_ucdueauth_txtSearchControl').className = 'grey';
                }
                $('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
            }
        }
        else if (Flag == 'RL') {
            var RlTotAmt = 0, RlTotPer = 0;
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtcncrlAmt]").val() > 0) {
                    var RlAmt = $(this).closest('tr').find("[id*=txtcncrlAmt]").val();
                    var RlPer = $(this).closest("tr").find("[id*=txtRulePer]").val();
                    var txtQty = $(this).closest("tr").find("[id*=txtQty]").val();
                    //if (txtQty != '' && txtQty != null && txtQty != undefined) { RlAmt = parseFloat(RlAmt) * parseFloat(txtQty); }
                    typeof RlAmt == 'string' ? (typeof RlAmt == 'undefined' || RlAmt.trim() == '' ? 0 : parseFloat(RlAmt)) : (typeof RlAmt == 'object' ? 0 : parseFloat(RlAmt));
                    typeof RlPer == 'string' ? (typeof RlPer == 'undefined' || RlPer.trim() == '' ? 0 : parseFloat(RlPer)) : (typeof RlPer == 'object' ? 0 : parseFloat(RlPer));
                    RlTotAmt += parseFloat(RlAmt);
                    RlTotPer += parseFloat(RlPer);
                }
            });
            var RlTotalOnPatGrossper = setProperDecimalsCorpPer((parseFloat(RlTotAmt) / parseFloat(PatGrossAmt)) * 100);
            var RlTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(RlTotalOnPatGrossper)) / 100;
            RlTotalOnPatGrossper = setProperDecimalsCorpPer(RlTotalOnPatGrossper);
            RlTotalOnPatGrossAmt = Math.round(RlTotalOnPatGrossAmt);

            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val(RlTotalOnPatGrossper);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(RlTotalOnPatGrossAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
            
        }
        else {

            var hcrowindex = 0;
            var Cashrowindexmode1 = 0;
            var Cashrowindexmode2 = 0;
            var Managentrowindexmode1 = 0;
            var Managentrowindexmode2 = 0;
            var Stafrowindexmode1 = 0;
            var Stafrowindexmode2 = 0;
            var Eventrowindex = 0; 
            var conrulerowindex=0;           

            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '2') {
                    hcrowindex = $(this)[0].rowIndex;
                }
            });
              $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '6') {
                    conrulerowindex = $(this)[0].rowIndex;
                }
            });
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '3' && $(this).closest("tr").find("[id*=ddlModes]").val() == '1') {
                    Managentrowindexmode1 = $(this)[0].rowIndex;
                }
            });


            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '3' && $(this).closest("tr").find("[id*=ddlModes]").val() == '2') {
                    Managentrowindexmode2 = $(this)[0].rowIndex;
                }
            });
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '4' && $(this).closest("tr").find("[id*=ddlModes]").val() == '1') {
                    Stafrowindexmode1 = $(this)[0].rowIndex;
                }
            });
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '4' && $(this).closest("tr").find("[id*=ddlModes]").val() == '2') {
                    Stafrowindexmode2 = $(this)[0].rowIndex;
                }
            });
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '1' && $(this).closest("tr").find("[id*=ddlModes]").val() == '1') {
                    Cashrowindexmode1 = $(this)[0].rowIndex;
                }
            });
            $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '1' && $(this).closest("tr").find("[id*=ddlModes]").val() == '2') {
                    Cashrowindexmode2 = $(this)[0].rowIndex;
                }
            });
              $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
                if ($(this).closest("tr").find("[id*=ddlMultiDiscounttype]").val() == '5' && $(this).closest("tr").find("[id*=ddlModes]").val() == '1') {
                    Eventrowindex = $(this)[0].rowIndex;
                }
            });
            if (hcrowindex > 0) {
                var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtHcAmt]").val() > 0) {
                        var hcAmt = $(this).closest('tr').find("[id*=txtHcAmt]").val();
                        var hcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                        typeof hcPer == 'string' ? (typeof hcPer == 'undefined' || hcPer.trim() == '' ? 0 : parseFloat(hcPer)) : (typeof hcPer == 'object' ? 0 : parseFloat(hcPer));
                        typeof hcAmt == 'string' ? (typeof hcAmt == 'undefined' || hcAmt.trim() == '' ? 0 : parseFloat(hcAmt)) : (typeof hcAmt == 'object' ? 0 : parseFloat(hcAmt));
                        hcTotAmt += parseFloat(hcAmt);
                        hcTotPer += parseFloat(hcPer);
                    }
                });
                var hcTotalOnPatGrossper =setProperDecimalsCorpPer((parseFloat(hcTotAmt) / parseFloat(PatGrossAmt)) * 100);
                var hcTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(hcTotalOnPatGrossper)) / 100;
                if(hcTotalOnPatGrossper==""||hcTotalOnPatGrossper==0||isNaN(hcTotalOnPatGrossper)){hcTotalOnPatGrossper=0;}
                if(hcTotalOnPatGrossAmt==""||hcTotalOnPatGrossAmt==0||isNaN(hcTotalOnPatGrossAmt)){hcTotalOnPatGrossAmt=0;}
                hcTotalOnPatGrossper = setProperDecimalsCorpPer(hcTotalOnPatGrossper);
                hcTotalOnPatGrossAmt = Math.round(hcTotalOnPatGrossAmt);

                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtPersentage]').val(hcTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtAmount]').val(hcTotalOnPatGrossAmt);
                if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtPersentage]').val() != 0) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtAmount]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtPersentage]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=ddlModes]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtcardno]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
                } else {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=ddlModes]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtcardno]')[0].disabled = false;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=txtcardno]').val('');
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[id*=hdncardid]").val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = false;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + hcrowindex + ")").find('[id*=BtnSrvSearch]')[0].disabled = false;
                }
            }
            if (conrulerowindex > 0) {
                var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtcncrlAmt]").val() > 0) {
                        var hcAmt = $(this).closest('tr').find("[id*=txtcncrlAmt]").val();
                        var hcPer = $(this).closest("tr").find("[id*=txtRulePer]").val();
                        typeof hcPer == 'string' ? (typeof hcPer == 'undefined' || hcPer.trim() == '' ? 0 : parseFloat(hcPer)) : (typeof hcPer == 'object' ? 0 : parseFloat(hcPer));
                        typeof hcAmt == 'string' ? (typeof hcAmt == 'undefined' || hcAmt.trim() == '' ? 0 : parseFloat(hcAmt)) : (typeof hcAmt == 'object' ? 0 : parseFloat(hcAmt));
                        hcTotAmt += parseFloat(hcAmt);
                        hcTotPer += parseFloat(hcPer);
                    }
                });
                var hcTotalOnPatGrossper = setProperDecimalsCorpPer((parseFloat(hcTotAmt) / parseFloat(PatGrossAmt)) * 100);
                var hcTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(hcTotalOnPatGrossper)) / 100;
                if(hcTotalOnPatGrossper==""||hcTotalOnPatGrossper==0||isNaN(hcTotalOnPatGrossper)){hcTotalOnPatGrossper=0;}
                if(hcTotalOnPatGrossAmt==""||hcTotalOnPatGrossAmt==0||isNaN(hcTotalOnPatGrossAmt)){hcTotalOnPatGrossAmt=0;}
                hcTotalOnPatGrossper = setProperDecimalsCorpPer(hcTotalOnPatGrossper);
                hcTotalOnPatGrossAmt = Math.round(hcTotalOnPatGrossAmt);

                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtPersentage]').val(hcTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtAmount]').val(hcTotalOnPatGrossAmt);
                if ($("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtPersentage]').val() != 0) {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtAmount]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtPersentage]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=ddlModes]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtcardno]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
                } else {
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=ddlModes]')[0].disabled = true;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtcardno]')[0].disabled = false;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=txtcardno]').val('');
                    $('table[id*=gvMultipleConcession] tr').filter(':eq(' + index + ')').find("input[id*=hdncardid]").val(0);
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = false;
                    $("table[id$=gvMultipleConcession] tr").filter(":eq(" + conrulerowindex + ")").find('[id*=BtnSrvSearch]')[0].disabled = false;
                }
            }
            if (Eventrowindex > 0) {
                var evTotAmt = 0, evTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtebAmt]").val() > 0) {
                        var evCashAmt = $(this).closest('tr').find("[id*=txtebAmt]").val();
                        var evCashPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                        typeof evCashAmt == 'string' ? (typeof evCashAmt == 'undefined' || evCashAmt.trim() == '' ? 0 : parseFloat(evCashAmt)) : (typeof evCashAmt == 'object' ? 0 : parseFloat(evCashAmt));
                        typeof evCashPer == 'string' ? (typeof evCashPer == 'undefined' || evCashPer.trim() == '' ? 0 : parseFloat(evCashPer)) : (typeof evCashPer == 'object' ? 0 : parseFloat(evCashPer));
                        evTotAmt += parseFloat(evCashAmt);
                        evTotPer += parseFloat(evCashPer);
                    }
                });
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Eventrowindex + ")").find('[id*=txtAmount]').val(Math.round(evTotAmt));
            }
            if (Stafrowindexmode1 > 0) {
                var StTotAmt = 0, StTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtstAmt]").val() > 0) {
                        var StCashAmt = $(this).closest('tr').find("[id*=txtstAmt]").val();
                        var StCashPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                        typeof StCashAmt == 'string' ? (typeof StCashAmt == 'undefined' || StCashAmt.trim() == '' ? 0 : parseFloat(StCashAmt)) : (typeof StCashAmt == 'object' ? 0 : parseFloat(StCashAmt));
                        typeof StCashPer == 'string' ? (typeof StCashPer == 'undefined' || StCashPer.trim() == '' ? 0 : parseFloat(StCashPer)) : (typeof StCashPer == 'object' ? 0 : parseFloat(StCashPer));
                        StTotAmt += parseFloat(StCashAmt);
                        StTotPer += parseFloat(StCashPer);
                    }
                });
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Stafrowindexmode1 + ")").find('[id*=txtAmount]').val(Math.round(StCashAmt));
            }
            if (Stafrowindexmode2 > 0) {
                var StTotAmt = 0, StTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtstAmt]").val() > 0) {
                        var StCashAmt = $(this).closest('tr').find("[id*=txtstAmt]").val();
                        var StCashPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                        typeof StCashAmt == 'string' ? (typeof StCashAmt == 'undefined' || StCashAmt.trim() == '' ? 0 : parseFloat(StCashAmt)) : (typeof StCashAmt == 'object' ? 0 : parseFloat(StCashAmt));
                        typeof StCashPer == 'string' ? (typeof StCashPer == 'undefined' || StCashPer.trim() == '' ? 0 : parseFloat(StCashPer)) : (typeof StCashPer == 'object' ? 0 : parseFloat(StCashPer));
                        StTotAmt += parseFloat(StCashAmt);
                        StTotPer += parseFloat(StCashPer);
                    }
                });
                var StTotalOnPatGrossper =setProperDecimalsCorpPer((parseFloat(StTotAmt) / parseFloat(PatGrossAmt)) * 100);
                var StTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(StTotalOnPatGrossper)) / 100;
                StTotalOnPatGrossAmt = Math.round(StTotalOnPatGrossAmt);
                StTotalOnPatGrossper = setProperDecimalsCorpPer(StTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Stafrowindexmode2 + ")").find('[id*=txtPersentage]').val(StTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Stafrowindexmode2 + ")").find('[id*=txtAmount]').val(StTotalOnPatGrossAmt);
            }
            if (Managentrowindexmode1 > 0) {
                var MgTotAmt = 0, MgTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtmgAmt]").val() > 0) {
                        var MgCashAmt = $(this).closest('tr').find("[id*=txtmgAmt]").val();
                        var MgCashPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                        typeof MgCashAmt == 'string' ? (typeof MgCashAmt == 'undefined' || MgCashAmt.trim() == '' ? 0 : parseFloat(MgCashAmt)) : (typeof MgCashAmt == 'object' ? 0 : parseFloat(MgCashAmt));
                        typeof MgCashPer == 'string' ? (typeof MgCashPer == 'undefined' || MgCashPer.trim() == '' ? 0 : parseFloat(MgCashPer)) : (typeof MgCashPer == 'object' ? 0 : parseFloat(MgCashPer));
                        MgTotAmt += parseFloat(MgCashAmt);
                        MgTotPer += parseFloat(MgCashPer);
                    }
                });
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Cashrowindexmode1 + ")").find('[id*=txtAmount]').val(Math.round(MgTotAmt));
            }
            if (Managentrowindexmode2 > 0) {
                var MgTotAmt = 0, MgTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtDiscAmt]").val() > 0) {
                        var MgCashAmt = $(this).closest('tr').find("[id*=txtmgAmt]").val();
                        var MgCashPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                        typeof MgCashAmt == 'string' ? (typeof MgCashAmt == 'undefined' || MgCashAmt.trim() == '' ? 0 : parseFloat(MgCashAmt)) : (typeof MgCashAmt == 'object' ? 0 : parseFloat(MgCashAmt));
                        typeof MgCashPer == 'string' ? (typeof MgCashPer == 'undefined' || MgCashPer.trim() == '' ? 0 : parseFloat(MgCashPer)) : (typeof MgCashPer == 'object' ? 0 : parseFloat(MgCashPer));
                        MgTotAmt += parseFloat(MgCashAmt);
                        MgTotPer += parseFloat(MgCashPer);
                    }
                });
                var MgTotalOnPatGrossper = setProperDecimalsCorpPer((parseFloat(MgTotAmt) / parseFloat(PatGrossAmt)) * 100);
                var MgTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(MgTotalOnPatGrossper)) / 100;
                MgTotalOnPatGrossAmt = Math.round(MgTotalOnPatGrossAmt);
                MgTotalOnPatGrossper = setProperDecimalsCorpPer(MgTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Managentrowindexmode2 + ")").find('[id*=txtPersentage]').val(MgTotalOnPatGrossper.toFixed(2));
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Managentrowindexmode2 + ")").find('[id*=txtAmount]').val(MgTotalOnPatGrossAmt);
            }
            if (Cashrowindexmode1 > 0) {
                var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtDiscAmt]").val() > 0) {
                        var CashAmt = $(this).closest('tr').find("[id*=txtDiscAmt]").val();
                        var CashPer = $(this).closest("tr").find("[id*=txtDiscP]").val();
                        typeof CashAmt == 'string' ? (typeof CashAmt == 'undefined' || CashAmt.trim() == '' ? 0 : parseFloat(CashAmt)) : (typeof CashAmt == 'object' ? 0 : parseFloat(CashAmt));
                        typeof CashPer == 'string' ? (typeof CashPer == 'undefined' || CashPer.trim() == '' ? 0 : parseFloat(CashPer)) : (typeof CashPer == 'object' ? 0 : parseFloat(CashPer));
                        CnTotAmt += parseFloat(CashAmt);
                        CnTotPer += parseFloat(CashPer);
                    }
                });
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Cashrowindexmode1 + ")").find('[id*=txtAmount]').val(Math.round(CnTotAmt));
            }
            if (Cashrowindexmode2 > 0) {
                var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0;
                $("table[id*=gvServices] tr:has(td)").each(function (e) {
                    if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtDiscAmt]").val() > 0) {
                        var CashAmt = $(this).closest('tr').find("[id*=txtDiscAmt]").val();
                        var CashPer = $(this).closest("tr").find("[id*=txtDiscP]").val();
                        typeof CashAmt == 'string' ? (typeof CashAmt == 'undefined' || CashAmt.trim() == '' ? 0 : parseFloat(CashAmt)) : (typeof CashAmt == 'object' ? 0 : parseFloat(CashAmt));
                        typeof CashPer == 'string' ? (typeof CashPer == 'undefined' || CashPer.trim() == '' ? 0 : parseFloat(CashPer)) : (typeof CashPer == 'object' ? 0 : parseFloat(CashPer));
                        CnTotAmt += parseFloat(CashAmt);
                        CnTotPer += parseFloat(CashPer);
                    }
                });
                var CashTotalOnPatGrossper = (parseFloat(CnTotAmt) / parseFloat(PatGrossAmt)) * 100;
                var CashTotalOnPatGrossAmt = (parseFloat(PatGrossAmt) * parseFloat(CashTotalOnPatGrossper)) / 100;
                CashTotalOnPatGrossAmt = Math.round(CashTotalOnPatGrossAmt);
                CashTotalOnPatGrossper = setProperDecimalsCorpPer(CashTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Cashrowindexmode2 + ")").find('[id*=txtPersentage]').val(CashTotalOnPatGrossper);
                $("table[id$=gvMultipleConcession] tr").filter(":eq(" + Cashrowindexmode2 + ")").find('[id*=txtAmount]').val(CashTotalOnPatGrossAmt);
            }
            CalculateGridAmt(CountIncrement);
        }
    }
    function BindDataPatientHealthCard(id, val) {
    debugger;
        var PAT_NAME = '';
        var allow_outsrc = $('#'+ ctrlcom + '_UCServices_hdnAllowOutSideConcs').val();
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
            UMR_NO = $('#'+ ctrlcom + '_Umrlookup_txtSearchControl').val();
            PAT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                    PAT_NAME= PAT_NAME.split(".").pop();
        }
        else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP') {
            UMR_NO = $('#'+ ctrlcom + '_umrPatientDetails_hdnUmrNo').val();
            PAT_NAME = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
            PAT_NAME= PAT_NAME.split(".").pop();
        }
        else {
            UMR_NO = $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            PAT_NAME = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
                    PAT_NAME= PAT_NAME.split(".").pop();
        }
        UMR_NO == '' ? 0 : UMR_NO;
        var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
        var index = gridid.rows.length - 1;
        var serviceid = 0, doctorid = 0, servicetypeid = 0, amount = 0, srv_w_out_src = 'N',qty=0,amount=0,sel_qty=0;sel_rate=0;;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                var rowIndex=$(this)[0].rowIndex;
                SERVICE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val();
                SERVICE_TYPE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceTypID]").val();
                DOCTORID = $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val();
                srv_w_out_src = $(this).closest("tr").find("input[type=hidden][id*=hdnIsForeignSrv]").val();
                qty=$(this).closest("tr").find("input[type=text][id*=txtQty]").val();
                CalculateGridAmt(rowIndex);

                rate=$(this).closest("tr").find("input[type=text][id*=txtPamt]").val();

                if(qty==undefined || qty==null || qty=='' || qty==0){qty=1;}
                if(rate==undefined || rate==null || rate=='' || rate==0){rate=0;}
                SERVICE_ID = SERVICE_ID == undefined ? 0 : SERVICE_ID;
                SERVICE_TYPE_ID = SERVICE_TYPE_ID == undefined ? 0 : SERVICE_TYPE_ID;
                DOCTORID = DOCTORID == undefined ? 0 : DOCTORID;
                SERVICE_ID = SERVICE_ID == '' ? 0 : SERVICE_ID;
                SERVICE_TYPE_ID = SERVICE_TYPE_ID == '' ? 0 : SERVICE_TYPE_ID;
                DOCTORID = DOCTORID == '' ? 0 : DOCTORID;
                if (srv_w_out_src == '' || srv_w_out_src == undefined || srv_w_out_src == null)
                { srv_w_out_src = 'N'; }
               // if (SERVICE_ID != 1) { /* this condition added by pushkar to avoid health card concession for reg */
                    if (allow_outsrc == 'True' || (allow_outsrc == 'False' && srv_w_out_src != 'Y')) {
                        if (serviceid == 0) {
                            serviceid = SERVICE_ID;
                             doctorid = DOCTORID;
                        }
                        else {
                            serviceid += ',' + SERVICE_ID;
                            doctorid += ',' + DOCTORID;
                        }
                      /*  if (doctorid == 0) {
                            doctorid = DOCTORID;
                        }
                        else {
                            doctorid += ',' + DOCTORID;
                        }*/
                        if (servicetypeid == 0) {
                            servicetypeid = SERVICE_TYPE_ID;
                            sel_qty=qty;
                            sel_rate=rate;
                        }
                        else {
                            servicetypeid += ',' + SERVICE_TYPE_ID;
                            sel_qty+=','+qty;
                            sel_rate+=','+rate;
                        }
                    }
                //}
            }
        });
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 1) {
            fn_AddRowWithDetais();
        }
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtcardno]').val(val);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("input[type=hidden][id*=hdncardid]").val(id);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("[id*=ddlMultiDiscounttype]").val(2);
         ClearAllConcessionControl('Not');
        /*$('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("[id*=txtAutherizedPersion]").css('border', '1px solid rgb(244, 120, 94)');*/
            
        // $('[id*=pnlGridPop]')[0].style.display = 'none';
        $('[id*=pnlGridPop]').css("display", "none");
        SELECTED_TYPE_ID = 2;
        SELECTED_ID = id;
        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
         var healthcarddet_id=0;
          if (form_name == 'OPQUICK') {
         healthcarddet_id=document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnhealth_car_det_id').value;
         }
         if (healthcarddet_id == undefined || healthcarddet_id == null || healthcarddet_id == '') {healthcarddet_id = 0; }
        var cmp_id=0;
        GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/GetPrices",
            { SELECTED_TYPE_ID: SELECTED_TYPE_ID, SELECTED_ID: SELECTED_ID, UMR_NO: UMR_NO, SERVICE_ID: serviceid, SERVICE_TYPE_ID: servicetypeid, PAT_NAME: PAT_NAME, DOCTOR_ID: doctorid,cmp_id:cmp_id,sel_qty:sel_qty,sel_rate:sel_rate ,HEALTH_CARD_DET_ID:healthcarddet_id},
            function (JData) {
            if( JData.d != null){
                  if(JData.d[0][0] != null){
                   JData.d = JData.d[0][0];
                         $('#'+ ctrlcom + '_ReceiptControl2_ddlDiscountType').val($('#'+ ctrlcom + '_ReceiptControl2_ddlDiscountType option:eq(0)').val());
                   document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
              if (JData.d != null) {
                 $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(9),.col-hide tr:nth-child(12),.col-hide tr:nth-child(13)").show();
                    $("#payitem2,._quick-div").show();
                    $("._mdisc").css('width', '72%');
                    $("#payitem1,#payitem3").hide();
                    $('[id*=ConcessionAmt]')[0].style.display = 'none';
                    $("#lbladvanced").addClass("select"); $("#lblquick").removeClass("select");
                    var Data = JData.d;
                    multiDimArray(JData, SELECTED_ID, 1);
                    for (var i in Data) {
                        i++;
                        if (Data[i - 1]["SERVICE_ID"] != '') {
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                    if (Data[i - 1]["SERVICE_ID"] == '2') {
                                    debugger;
                                        if (Data[i - 1]["DOCTOR_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val() && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                $('.ghcdisc').show();
                                                var form_name = $('#'+ ctrlcom + '_ReceiptControl2_hdnDocName').val();
                                                var Pat_cmp = '2';
                                              /*  if (form_name == 'OP' || form_name == 'Cons') {
                                                    Pat_cmp = $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').val();
                                                }
                                                else if (form_name == 'OPQUICK') {
                                                    var reg_type = $('#'+ ctrlcom + '_ddlRegType').val();
                                                    if (reg_type == '5') {
                                                        Pat_cmp = '2';
                                                    }
                                                    else {
                                                        Pat_cmp = '1';
                                                    }
                                                }*/
                                                var Disc_Count = 1;
                                                if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                                                }
                                                $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "table-cell");
                                                });

                                                $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "table-cell");
                                                });
                                                var RoWindex = $(this)[0].rowIndex;
                                                var RoWindex = $(this)[0].rowIndex;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();

                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;

                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                     if (ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy.value == '2') {
                                                        var patcmp= $('#ctl00_ContentPlaceHolder1_txtEmpPayAmt').val();
                                                            if (patcmp == "" || patcmp == null || patcmp == undefined) { patcmp = "0"; }
                                                             var patamt=$(this).closest("tr").find("[id*=txtPamt]").val();
                                                              if (patamt == "" || patamt == null || patamt == undefined) { patamt = "0"; }
                                                     $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                     var hcamt=setProperDecimals(parseFloat(parseFloat(patamt)*parseFloat(Data[i - 1].PERCENTAGE))/100);
                                                       if (hcamt == "" || hcamt == null || hcamt == undefined) { hcamt = "0"; }
                                                          $(this).closest("tr").find("[id*=txtHcAmt]").val(hcamt);

 //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(patamt)-parseFloat(hcamt));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                     }
                                                     else{
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                        }
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(1, 'HC');
                                                }
                                                if (SELECTED_TYPE_ID == '5') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();

                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(TotaloAssignAmt));
                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'EV');
                                                }
                                                if (SELECTED_TYPE_ID == '6') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxthcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    pattxthcPer = pattxthcPer == '' ? 0 : pattxthcPer;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(TotaloAssignAmt));
                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        $(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    $(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'RL');
                                                }
                                                var InputPer = parseFloat(Data[i - 1].TOT_PERCENTAGE);
                                                var InputAmt = parseFloat(Data[i - 1].TOTAL_DIS_AMT);
                                                CalculateGridAmt(RoWindex);
                                            }
                                        }
                                    }
                                    else {
                                    debugger;
                                        if (Data[i - 1]["SERVICE_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                $('.ghcdisc').show();
                                                var form_name = $('#'+ ctrlcom + '_ReceiptControl2_hdnDocName').val();
                                                var Pat_cmp = '2';
                                            /*    if (form_name == 'OP' || form_name == 'Cons') {
                                                    Pat_cmp = $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').val();
                                                }
                                                else if (form_name == 'OPQUICK') {
                                                    var reg_type = $('#'+ ctrlcom + '_ddlRegType').val();
                                                    if (reg_type == '5') {
                                                        Pat_cmp = '2';
                                                    }
                                                    else {
                                                        Pat_cmp = '1';
                                                    }
                                                } */
                                                var Disc_Count = 1;
                                                if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                                                }
                                                $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "table-cell");
                                                });

                                                $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txthcPer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").css("display", "table-cell");
                                                });
                                                var RoWindex = $(this)[0].rowIndex;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();

                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;

                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(TotaloAssignAmt));
                                                       // $(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                       if (ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy.value == '2') {
                                                        var patcmp= $('#ctl00_ContentPlaceHolder1_txtEmpPayAmt').val();
                                                            if (patcmp == "" || patcmp == null || patcmp == undefined) { patcmp = "0"; }
                                                             var patamt=$(this).closest("tr").find("[id*=txtPamt]").val();
                                                              if (patamt == "" || patamt == null || patamt == undefined) { patamt = "0"; }
                                                     $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                     var hcamt=setProperDecimals(parseFloat(parseFloat(patamt)*parseFloat(Data[i - 1].PERCENTAGE))/100);
                                                       if (hcamt == "" || hcamt == null || hcamt == undefined) { hcamt = "0"; }
                                                          $(this).closest("tr").find("[id*=txtHcAmt]").val(hcamt);

 //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(patamt)-parseFloat(hcamt));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                     }
                                                     else{
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                        }
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(1, 'HC');
                                                }
                                                if (SELECTED_TYPE_ID == '5') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();

                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'EV');
                                                }
                                                if (SELECTED_TYPE_ID == '6') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxthcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    pattxthcPer = pattxthcPer == '' ? 0 : pattxthcPer;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'RL');
                                                }
                                                var InputPer = parseFloat(Data[i - 1].TOT_PERCENTAGE);
                                                var InputAmt = parseFloat(Data[i - 1].TOTAL_DIS_AMT);
                                                CalculateGridAmt(RoWindex);
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
                
                }
                }
            },
            function (jqXHR, textStatus, errorThrown) {

            });
    }
    
     function BindDataPatientconsutionrule(con_ruleId,con_rule_name) {
     

        var PAT_NAME = '';
        var allow_outsrc = $('#'+ ctrlcom + '_UCServices_hdnAllowOutSideConcs').val();
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
            UMR_NO = $('#'+ ctrlcom + '_Umrlookup_txtSearchControl').val();
            PAT_NAME = document.getElementById('' + ctrlcom + '_txtDisplayname').innerHTML;
                    PAT_NAME= PAT_NAME.split(".").pop();
        }
        else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP') {
            UMR_NO = $('#'+ ctrlcom + '_umrPatientDetails_hdnUmrNo').val();
            PAT_NAME = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
            PAT_NAME= PAT_NAME.split(".").pop();
        }
        else {
            UMR_NO = $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
            PAT_NAME = document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML;
                    PAT_NAME= PAT_NAME.split(".").pop();
        }
        UMR_NO == '' ? 0 : UMR_NO;
        var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
        var index = gridid.rows.length - 1;
        var serviceid = 0, doctorid = 0, servicetypeid = 0, amount = 0, srv_w_out_src = 'N',qty=0,amount=0,sel_qty=0;sel_rate=0;;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                SERVICE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val();
                SERVICE_TYPE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceTypID]").val();
                DOCTORID = $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val();
                srv_w_out_src = $(this).closest("tr").find("input[type=hidden][id*=hdnIsForeignSrv]").val();
                qty=$(this).closest("tr").find("input[type=text][id*=txtQty]").val();
                rate=$(this).closest("tr").find("input[type=text][id*=txtRate]").val();
                //sel_id=$(this).closest("tr").find("input[type=hidden][id*=hdncruleid]").val();
                 // sel_name=$(this).closest("tr").find("input[type=hidden][id*=hdncrulename]").val();
                if(qty==undefined || qty==null || qty=='' || qty==0){qty=1;}
                if(rate==undefined || rate==null || rate=='' || rate==0){rate=0;}
                SERVICE_ID = SERVICE_ID == undefined ? 0 : SERVICE_ID;
                SERVICE_TYPE_ID = SERVICE_TYPE_ID == undefined ? 0 : SERVICE_TYPE_ID;
                DOCTORID = DOCTORID == undefined ? 0 : DOCTORID;
                SERVICE_ID = SERVICE_ID == '' ? 0 : SERVICE_ID;
                SERVICE_TYPE_ID = SERVICE_TYPE_ID == '' ? 0 : SERVICE_TYPE_ID;
                DOCTORID = DOCTORID == '' ? 0 : DOCTORID;
                if (srv_w_out_src == '' || srv_w_out_src == undefined || srv_w_out_src == null)
                { srv_w_out_src = 'N'; }
               // if (SERVICE_ID != 1) { /* this condition added by pushkar to avoid health card concession for reg */
                    if (allow_outsrc == 'True' || (allow_outsrc == 'False' && srv_w_out_src != 'Y')) {
                        if (serviceid == 0) {
                            serviceid = SERVICE_ID;
                             doctorid = DOCTORID;
                        }
                        else {
                            serviceid += ',' + SERVICE_ID;
                            doctorid += ',' + DOCTORID;
                        }
                    
                        if (servicetypeid == 0) {
                            servicetypeid = SERVICE_TYPE_ID;
                            sel_qty=qty;
                            sel_rate=rate;
                        }
                        else {
                            servicetypeid += ',' + SERVICE_TYPE_ID;
                            sel_qty+=','+qty;
                            sel_rate+=','+rate;
                        }
                    }
                //}
            }
        });

        if(favserviceres.length!=0){
        for (var i = 0; i < favserviceres.length; i++) {
        if (serviceid == 0) {
        serviceid=favserviceres[i].SERVICE_ID;
        sel_rate=favserviceres[i].PRICE;
        sel_qty=1;
        servicetypeid= 0;
         doctorid=0;
        }else{
        serviceid += ',' + favserviceres[i].SERVICE_ID;
        sel_rate+= ',' + favserviceres[i].PRICE;
         sel_qty+= ',' + 1;
         servicetypeid+= ',' + 0;
         doctorid+= ',' + 0;
        }
        }
        }
        
        if (document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession').rows.length == 2) {
            fn_AddRowWithDetais();
        }
  
 
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtcardno]').val(con_rule_name);
       $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("input[type=hidden][id*=hdncardid]").val(con_ruleId);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("[id*=ddlMultiDiscounttype]").val(6);
             $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtCRemks]').val(con_rule_name);
              $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtCRemks]').removeClass('red');
  
        $('[id*=pnlGridPop]').css("display", "none");
        SELECTED_TYPE_ID =6;
       SELECTED_ID = con_ruleId;
     var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
         var healthcarddet_id=0;
          if (form_name == 'OPQUICK') {
         healthcarddet_id=document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnhealth_car_det_id').value;
         }
        if (healthcarddet_id == undefined || healthcarddet_id == null || healthcarddet_id == '') {healthcarddet_id = 0; }
        var cmp_id=0;
       $.ajax({
        type: "POST",
        url: _iniUrl + "Private/FrontOffice/OPDBILLNEW.aspx/GetPrices",
        dataType: "json",
        beforeSend:function(){
           $("#progressshow").show();
     
        },
        data: JSON.stringify({SELECTED_TYPE_ID: SELECTED_TYPE_ID, SELECTED_ID: SELECTED_ID, UMR_NO: UMR_NO, SERVICE_ID: serviceid, SERVICE_TYPE_ID: servicetypeid, PAT_NAME: PAT_NAME, DOCTOR_ID: doctorid,cmp_id:cmp_id,sel_qty:sel_qty,sel_rate:sel_rate,HEALTH_CARD_DET_ID:healthcarddet_id }),
        contentType: "application/json; charset=utf-8",
        error: function(jqXHR, textStatus, errorThrown) {
          $("#progressshow").hide();
            cfail(jqXHR, textStatus, errorThrown);
        },
        success: function(JData) {
           
      
        
       // GetAsync(
     // GetNonAsync(  
//            "Private/FrontOffice/OpBilling/OPConsultation1.aspx/GetPrices",
//            { SELECTED_TYPE_ID: SELECTED_TYPE_ID, SELECTED_ID: SELECTED_ID, UMR_NO: UMR_NO, SERVICE_ID: serviceid, SERVICE_TYPE_ID: servicetypeid, PAT_NAME: PAT_NAME, DOCTOR_ID: doctorid,cmp_id:cmp_id,sel_qty:sel_qty,sel_rate:sel_rate },
//            function (JData) {
              
                   
                          $('#'+ ctrlcom + '_ReceiptControl2_ddlDiscountType').val($('#'+ ctrlcom + '_ReceiptControl2_ddlDiscountType option:eq(0)').val());
                   document.getElementById('' + ctrlcom + '_ReceiptControl2_ddlDiscountType').disabled = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').disabled = true;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').disabled = true;
               
                   CalculateGridAmt(0);
                   if(JData.d != null){
                    if(JData.d[0][0]  != null){
                  JData.d = JData.d[0][0];
                     if (JData.d != null) {
                    
                      $(".col-hide tr:nth-child(3),.col-hide tr:nth-child(4),.col-hide tr:nth-child(5),.col-hide tr:nth-child(6),.col-hide tr:nth-child(7),.col-hide tr:nth-child(8),.col-hide tr:nth-child(9),.col-hide tr:nth-child(12),.col-hide tr:nth-child(13)").show();
                   $("#payitem2,._quick-div").show();
                    $("._mdisc").css('width', '72%');
                    $("#payitem1,#payitem3").hide();
                    $('[id*=ConcessionAmt]')[0].style.display = 'none';
                    $("#lbladvanced").addClass("select"); $("#lblquick").removeClass("select");
                    mode = "A";
                      ClearAllConcessionControl('Not');
                    var Data = JData.d;
                    multiDimArray(JData, SELECTED_ID, 1);
                    for (var i in Data) {
                     
                        i++;
                        if (Data[i - 1]["SERVICE_ID"] != '') {
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                    if (Data[i - 1]["SERVICE_ID"] == '2') {
                                        if (Data[i - 1]["DOCTOR_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val() && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                $('.gcrdisc').show();
                                                var form_name = $('#'+ ctrlcom + '_ReceiptControl2_hdnDocName').val();
                                                var Pat_cmp = '2';
                                            
                                                var Disc_Count = 1;
                                                if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                                                }
                                                $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "table-cell");
                                                });

                                                $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "table-cell");
                                                });
                                                var RoWindex = $(this)[0].rowIndex;
                                                var RoWindex = $(this)[0].rowIndex;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();

                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;

                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(1, 'HC');
                                                }
                                                if (SELECTED_TYPE_ID == '5') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();

                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'EV');
                                                }
                                                if (SELECTED_TYPE_ID == '6') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxthcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    pattxthcPer = pattxthcPer == '' ? 0 : pattxthcPer;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(1, 'CRL');
                                                }
                                                var InputPer = parseFloat(Data[i - 1].TOT_PERCENTAGE);
                                                var InputAmt = parseFloat(Data[i - 1].TOTAL_DIS_AMT);
                                                CalculateGridAmt(RoWindex);
                                            }
                                        }
                                    }
                                    else {
                                        if (Data[i - 1]["SERVICE_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                $('.gcrdisc').show();
                                                var form_name = $('#'+ ctrlcom + '_ReceiptControl2_hdnDocName').val();
                                                var Pat_cmp = '2';
                                            /*    if (form_name == 'OP' || form_name == 'Cons') {
                                                    Pat_cmp = $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').val();
                                                }
                                                else if (form_name == 'OPQUICK') {
                                                    var reg_type = $('#'+ ctrlcom + '_ddlRegType').val();
                                                    if (reg_type == '5') {
                                                        Pat_cmp = '2';
                                                    }
                                                    else {
                                                        Pat_cmp = '1';
                                                    }
                                                } */
                                                var Disc_Count = 1;
                                                if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes')/* cmp with barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-bdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-bdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp == '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* cmp without barcd*/
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-dis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-dis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value == 'Yes') /*pat with bartcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cbdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cbdis' + Disc_Count;
                                                }
                                                else if (Pat_cmp != '2' && document.getElementById('' + ctrlcom + '_UCServices_hdnPrePrintedBarcodeReq').value != 'Yes') /* pat without barcd */
                                                {
                                                    document.getElementById('' + ctrlcom + '_UCServices_gv_services_header').className = 'grid gvServices-cdis' + Disc_Count;
                                                    document.getElementById('' + ctrlcom + '_UCServices_gvServices').className = 'grid gvServices-cdis' + Disc_Count;
                                                }
                                                $("table[id*=UCServices_gv_services_header] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "table-cell");
                                                });

                                                $("table[id*=UCServices_gvServices] tr:has(td)").each(function (e) {
                                                    var ev = this.rowIndex;
                                                    $(this).closest('tr').find("input[type=text][id*=txtRulePer]").css("display", "table-cell");
                                                    $(this).closest('tr').find("input[type=text][id*=txtcncrlAmt]").css("display", "table-cell");
                                                });
                                                var RoWindex = $(this)[0].rowIndex;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();

                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;

                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                        cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(1, 'HC');
                                                }
                                                if (SELECTED_TYPE_ID == '5') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var pattxtRlper = $(this).closest("tr").find("[id*=txtRulePer]").val();
                                                    var pattxtRlamt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();

                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    pattxtRlamt = pattxtRlamt == '' ? 0 : pattxtRlamt;
                                                    pattxtRlper = pattxtRlper == '' ? 0 : pattxtRlper;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer) + parseFloat(pattxtRlper);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt) + parseFloat(pattxtRlamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtebPer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtebAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(CurrentRowIndexNew, 'EV');
                                                }
                                                if (SELECTED_TYPE_ID == '6') {
                                                    var pattxtDiscP = $(this).closest("tr").find("[id*=txtDiscP]").val();
                                                    var pattxtDiscamt = $(this).closest("tr").find("[id*=txtDiscAmt]").val();
                                                    var patxtstPer = $(this).closest("tr").find("[id*=txtstPer]").val();
                                                    var patxtstamt = $(this).closest("tr").find("[id*=txtstAmt]").val();
                                                    var pattxtmaPer = $(this).closest("tr").find("[id*=txtmaPer]").val();
                                                    var pattxtmaamt = $(this).closest("tr").find("[id*=txtmgAmt]").val();
                                                    var pattxtebPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                                                    var pattxtebamt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                                                    var pattxthcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var pattxthcamt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                    var patTotalnetamt = $(this).closest("tr").find("[id*=txtPamt]").val();
                                                    pattxthcPer = pattxthcPer == '' ? 0 : pattxthcPer;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    patTotalnetamt = patTotalnetamt == '' ? 0 : patTotalnetamt;
                                                    pattxtDiscamt = pattxtDiscamt == '' ? 0 : pattxtDiscamt;
                                                    patxtstamt = patxtstamt == '' ? 0 : patxtstamt;
                                                    pattxtmaamt = pattxtmaamt == '' ? 0 : pattxtmaamt;
                                                    pattxtebamt = pattxtebamt == '' ? 0 : pattxtebamt;
                                                    pattxtDiscP = pattxtDiscP == '' ? 0 : pattxtDiscP;
                                                    patxtstPer = patxtstPer == '' ? 0 : patxtstPer;
                                                    pattxtmaPer = pattxtmaPer == '' ? 0 : pattxtmaPer;
                                                    pattxtebPer = pattxtebPer == '' ? 0 : pattxtebPer;
                                                    var TotalAssignPer = parseFloat(pattxtDiscP) + parseFloat(patxtstPer) + parseFloat(pattxtmaPer) + parseFloat(pattxtebPer);
                                                    var TotalAssignAmt = parseFloat(pattxtDiscamt) + parseFloat(patxtstamt) + parseFloat(pattxtmaamt) + parseFloat(pattxtebamt);
                                                    var assignTotalAmt = TotalAssignAmt;
                                                    var assignTotalPer = TotalAssignPer;
                                                    var SubassignTotalPer = 100 - assignTotalPer;
                                                    var TotaloAssignAmt = patTotalnetamt - assignTotalAmt;
                                                    var TotalNetAmt = TotalAssignAmt + TotaloAssignAmt;
                                                    if ((parseFloat(assignTotalPer) + (parseFloat(Data[i - 1].PERCENTAGE))) > 100) {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(SubassignTotalPer));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(TotaloAssignAmt));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(TotalNetAmt);
                                                    } else {
                                                        $(this).closest("tr").find("[id*=txtRulePer]").val(parseFloat(Data[i - 1].PERCENTAGE));
                                                        $(this).closest("tr").find("[id*=txtcncrlAmt]").val(parseFloat(Data[i - 1].DIS_AMT));
                                                        //$(this).closest("tr").find("[id*=txtPNAmt]").val(parseFloat(Data[i - 1].NET_AMOUNT));
                                                           cncsc_rule_defined=Data[i - 1].RULE_DEFINE_BY;
                                                        cncsc_rule_define_id=Data[i-1].DEFINE_BY_ID;
                                                    }
                                                    var CurNetAmt = $(this).closest("tr").find("[id*=txtPNAmt]").val();
                                                    CurNetAmt = typeof CurNetAmt == 'string' ? (typeof CurNetAmt == 'undefined' || CurNetAmt.trim() == '' ? 0 : parseFloat(CurNetAmt)) : (typeof CurNetAmt == 'object' ? 0 : parseFloat(CurNetAmt));
                                                    CurNetAmt = CurNetAmt < 0 ? 0 : CurNetAmt;
                                                    //$(this).closest("tr").find("[id*=txtPNAmt]").val(CurNetAmt);
                                                    CalculateMultiDiscountGridTypeBased(1, 'CRL');
                                                }
                                                var InputPer = parseFloat(Data[i - 1].TOT_PERCENTAGE);
                                                var InputAmt = parseFloat(Data[i - 1].TOTAL_DIS_AMT);
                                                CalculateGridAmt(RoWindex);
                                            }
                                        }
                                    }
                                }
                            });
                        } 
                    }
                 
                }
                }
                
                }
                else{
                 document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = false;
               
                if( document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked==true){
                document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = false;
                   document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = false;
                   OnMultipleDiscGrid();
                }
} $("#progressshow").hide();
            }
           
    });
           
    }
   
    function BindGridMultipleDataPatientSelection(InputPer, InputAmt, CountIncrement) {

        var hcTotAmt = 0, hcTotPer = 0, EvTotAmt = 0, EvTotPer = 0, CnTotAmt = 0, CnTotPer = 0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0 && $(this).closest('tr').find("input[type=hidden][id*=hdnClass_Srv_ID]").val() == 0 && $(this).closest('tr').find("[id*=txtHcAmt]").val() > 0) {
                var hcAmt = $(this).closest('tr').find("[id*=txtHcAmt]").val();
                var hcPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                typeof hcPer == 'string' ? (typeof hcPer == 'undefined' || hcPer.trim() == '' ? 0 : parseFloat(hcPer)) : (typeof hcPer == 'object' ? 0 : parseFloat(hcPer));
                typeof hcAmt == 'string' ? (typeof hcAmt == 'undefined' || hcAmt.trim() == '' ? 0 : parseFloat(hcAmt)) : (typeof hcAmt == 'object' ? 0 : parseFloat(hcAmt));
                hcTotAmt += parseFloat(hcAmt);
                hcTotPer += parseFloat(hcPer);
            }
        });

        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]').val(InputPer);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtAmount]').val(Math.round(InputAmt));
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtAmount]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=ddlModes]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtcardno]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
        AssignSno1(1);
        var PerHc = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]').val();
        if (parseFloat(PerHc) > 0) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').checked = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_chkismultiple').disabled = true;
        }
        $('#'+ ctrlcom + '_ReceiptControl2_Div2')[0].style.display = 'block';
        CalculateSumOfMaultipleAmount();
    }



    function BindGridMultipleData(InputPer, InputAmt, CountIncrement) {
    InputPer=setProperDecimalsCorpPer(InputPer);
    InputAmt=Math.round(InputAmt);
        var CurrentVal = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]').val();
        if (CurrentVal == 6) {
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val(InputPer);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(InputAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;

        }
        if (CurrentVal == 5) {
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val(InputPer);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(InputAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;
        }
        if (CurrentVal == 2) {
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]').val(InputPer);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]').val(InputAmt);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtAmount]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtPersentage]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlModes]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=txtcardno]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=ddlMultiDiscounttype]')[0].disabled = true;
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CountIncrement + ")").find('[id*=BtnSrvSearch]')[0].disabled = true;

        }
        CalculateSumOfMaultipleAmount();
        var AmtPerc = 0;
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (i, j) {
            var Current = $(this)[0].rowIndex;
            AmtPerc = parseFloat(AmtPerc) + parseFloat($(this).closest("tr").find("[id*=txtPersentage]")[0].value);

        });
        if (parseFloat(AmtPerc) > 100) {
            $(".toast").toastText("Info", "Sorry System Doesn't Allow  More Than 100%", 5, 2);
            $("table[id$=gvMultipleConcession] tr").filter(":eq(" + CurrentRowIndex + ")").find("[id*=txtPersentage]").val(0);
        }
        if (parseFloat(AmtPerc) == 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = true;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '';
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = true;

        }
        else if (parseFloat(AmtPerc) < 100) {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').disabled = false;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_Search3_txtSearchControl').style.border = '1px solid rgb(244, 120, 94)';
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ReceiptControl2_Search3').disabled = false;
        }
    }
    function DeleteMultiGridRowMaultipleAmount(CurentRowPer, CurentRowAmt, Type) {
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                if (Type == '2') {
                    var CurPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                    var CurentAmt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                    if (CurentRowPer > CurPer) {
                        if (CurPer > 0) {
                            var DeletedPer = CurPer - CurentRowPer;
                            var DeletedAmt = CurentAmt - CurentRowAmt;
                            $(this).closest("tr").find("[id*=txthcPer]").val(DeletedPer);
                            $(this).closest("tr").find("[id*=txtHcAmt]").val(DeletedAmt);
                        }
                    }
                }
                if (Type == '5') {
                    var CurPer = $(this).closest("tr").find("[id*=txtebPer]").val();
                    var CurentAmt = $(this).closest("tr").find("[id*=txtebAmt]").val();
                    if (CurentRowPer > CurPer) {
                        if (CurPer > 0) {
                            var DeletedPer = CurPer - CurentRowPer;
                            var DeletedAmt = CurentAmt - CurentRowAmt;
                            $(this).closest("tr").find("[id*=txtebPer]").val(DeletedPer);
                            $(this).closest("tr").find("[id*=txtebAmt]").val(DeletedAmt);
                        }
                    }
                }
                if (Type == '6') {
                    var CurPer = $(this).closest("tr").find("[id*=txtRulePer]").val();
                    var CurentAmt = $(this).closest("tr").find("[id*=txtcncrlAmt]").val();
                    if (CurentRowPer > CurPer) {
                        if (CurPer > 0) {
                            var DeletedPer = CurPer - CurentRowPer;
                            var DeletedAmt = CurentAmt - CurentRowAmt;
                            $(this).closest("tr").find("[id*=txtRulePer]").val(DeletedPer);
                            $(this).closest("tr").find("[id*=txtcncrlAmt]").val(DeletedAmt);
                        }
                    }
                }

            }
        });

    }

    function CalculateSumOfMaultipleAmount() {
        var TotalPerTotal = 0, TotalAmtTotal = 0;
        var PatGrossAmt = $('#'+ ctrlcom + '_ReceiptControl2_txtpatgross').val();
        var CmpNetAmt = $('#'+ ctrlcom + '_ReceiptControl2_txtcmpNet').val();
        var CmpDueAmt = $('#'+ ctrlcom + '_ReceiptControl2_txtcmpDue').val();
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            var IndvPerTotal = $(this).closest("tr").find("[id*=txtPersentage]").val();
            var IndvAmtTotal = $(this).closest("tr").find("[id*=txtAmount]").val();
            IndvPerTotal = IndvPerTotal == '' ? 0 : IndvPerTotal;
            IndvPerTotal = IndvPerTotal == undefined ? 0 : IndvPerTotal;
            IndvPerTotal = IndvPerTotal == NaN ? 0 : IndvPerTotal;

            IndvAmtTotal = IndvAmtTotal == '' ? 0 : IndvAmtTotal;
            IndvAmtTotal = IndvAmtTotal == undefined ? 0 : IndvAmtTotal;
            IndvAmtTotal = IndvAmtTotal == NaN ? 0 : IndvAmtTotal;

            TotalPerTotal += parseFloat(IndvPerTotal);
            TotalAmtTotal += parseFloat(IndvAmtTotal);
        });
        var NetAmtTotal = 0;
        NetAmtTotal = $('#'+ ctrlcom + '_ReceiptControl2_txtpatNet').val();
        CmpNetAmt = CmpNetAmt == '' ? 0 : CmpNetAmt;
        CmpNetAmt = CmpNetAmt == undefined ? 0 : CmpNetAmt;
        PatGrossAmt = PatGrossAmt == '' ? 0 : PatGrossAmt;
        if (parseFloat(PatGrossAmt) > parseFloat(TotalAmtTotal)) {
            NetAmtTotal = parseFloat(PatGrossAmt) - parseFloat(TotalAmtTotal);
        }
        else {
            NetAmtTotal = parseFloat(NetAmtTotal);
        }
        $('#'+ ctrlcom + '_ReceiptControl2_txtpatNet').val(NetAmtTotal);
        $('#'+ ctrlcom + '_ReceiptControl2_txtpatdue').val(NetAmtTotal);
        $('#'+ ctrlcom + '_ReceiptControl2_hdnNetAmt').val(NetAmtTotal);
        CmpDueAmt = CmpDueAmt == '' ? 0 : CmpDueAmt;
        CmpDueAmt = CmpDueAmt == undefined ? 0 : CmpDueAmt;
        var TotalDueAmt = parseFloat(NetAmtTotal) + parseFloat(CmpDueAmt);
        var NetAmtTotalCmp = parseFloat(CmpNetAmt) + parseFloat(NetAmtTotal);
        NetAmtTotalCmp = NetAmtTotalCmp == '' ? 0 : NetAmtTotalCmp;
        $('#'+ ctrlcom + '_ReceiptControl2_txtTotalNet').val(NetAmtTotalCmp);
        $('#'+ ctrlcom + '_ReceiptControl2_txtTotalDue').val(NetAmtTotalCmp);
        CalculateGridAmt(0);
    }







    function CalculateSumOfAmount() {
        var Perconces = 0, concession = 0, txtPayAmt = 0, dec = 2;
        var sGrid = document.getElementById('' + ctrlcom + '_UCServices_gvServices');
        var TAmount = 0, GAmount = 0, Amount = 0, NetAmount = 0, Qty = 0, Rate = 0, IndivConcession = 0, InitialAmount = 0, TotConcession = 0;
        var IndividualSumAmt = 0;
        var CmpcGross = 0; cmpcDPent = 0; cmpcDFlat = 0, CmpcNAmt = 0;
        var TotalDisPer = 0;
        var TotalDiscAmt = 0;
        try {
            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                var ev = this.rowIndex;
                if (ev != undefined && ev != '' && ev != null) { ev = ev; } else { ev = 1; }
                var patbAmt = $(this).closest('tr').find("input[type=text][id*=txtPamt]").val();

                var patDPercent = $(this).closest('tr').find("input[type=text][id*=txtDiscP]").val();
                var patDFlat = $(this).closest('tr').find("input[type=text][id*=txtDiscAmt]").val();
                
                var HcpatDPercent = $(this).closest('tr').find("input[type=text][id*=txthcPer]").val();
                var HcpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtHcAmt]").val();

                var mapatDPercent = $(this).closest('tr').find("input[type=text][id*=txtmaPer]").val();
                var mapatDFlat = $(this).closest('tr').find("input[type=text][id*=txtmgAmt]").val();

                var stpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtstPer]").val();
                var stpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtstAmt]").val();

                var ebpatDPercent = $(this).closest('tr').find("input[type=text][id*=txtebPer]").val();
                var ebpatDFlat = $(this).closest('tr').find("input[type=text][id*=txtebAmt]").val();

                var PatNAmt = $(this).closest('tr').find("input[type=text][id*=txtPNAmt]").val();
                var CmpBAmt = $(this).closest('tr').find("input[type=text][id*=txtCamt]").val();
                var CmpDPercent = $(this).closest('tr').find("input[type=text][id*=txtCDiscP]").val();
                var CmpDFlat = $(this).closest('tr').find("input[type=text][id*=txtCDiscAmt]").val();
                var CmpNAmt = $(this).closest('tr').find("input[type=text][id*=txtCNetAmt]").val();

                if (patbAmt == '' || patbAmt == undefined || isNaN(patbAmt))
                    patbAmt = '0';
                if (CmpBAmt == '' || CmpBAmt == undefined || isNaN(CmpBAmt))
                    CmpBAmt = '0';
                if (patDFlat == '' || patDFlat == undefined || isNaN(patDFlat))
                    patDFlat = '0';
                if (HcpatDFlat == '' || HcpatDFlat == undefined || isNaN(HcpatDFlat))
                    HcpatDFlat = '0';
                if (mapatDFlat == '' || mapatDFlat == undefined || isNaN(mapatDFlat))
                    mapatDFlat = '0';
                if (stpatDFlat == '' || stpatDFlat == undefined || isNaN(stpatDFlat))
                    stpatDFlat = '0';
                if (ebpatDFlat == '' || ebpatDFlat == undefined || isNaN(ebpatDFlat))
                    ebpatDFlat = '0';
                var TotalFlatAmt = parseFloat(patDFlat) + parseFloat(HcpatDFlat) + parseFloat(mapatDFlat) + parseFloat(stpatDFlat) + parseFloat(ebpatDFlat);
                var TotalFlatPer = parseFloat(patDPercent) + parseFloat(HcpatDPercent) + parseFloat(mapatDPercent) + parseFloat(stpatDPercent) + parseFloat(ebpatDPercent);

                if (!isNaN(patDFlat) && patDFlat != "") {
                    patDFlat = patDFlat = "" ? 0 : patDFlat;
                    IndivConcession = IndivConcession = "" ? 0 : IndivConcession;
                    TotConcession = parseFloat(TotalFlatPer) + parseFloat(IndivConcession); /* caluculating total concession*/
                    IndividualSumAmt = parseFloat(TotConcession) + parseFloat(IndividualSumAmt);
                }
            });
        } catch (e) { }


        /*Quick Start*/
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(GAmount) + parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = parseFloat(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount) + parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPayAmt').value = parseFloat(GAmount) + parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = parseFloat(GAmount - IndividualSumAmt) + parseFloat(CmpcGross);
        /*Quick End */
        /* Advanced Start */
        //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = parseFloat(GAmount);
        var CurentNetyamount = document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgrossamt').value;
        CurentNetyamount = CurentNetyamount == '' ? 0 : CurentNetyamount;
        CurentNetyamount = CurentNetyamount == undefined ? 0 : CurentNetyamount;
        var concPer = parseFloat(CurentNetyamount) * 100 / parseFloat(GAmount);
        var AmountVal = parseFloat(GAmount - IndividualSumAmt);
        AmountVal = AmountVal > 0 ? AmountVal : 0;
        //document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdis').value = Math.round(concPer * Math.pow(10, 4)) / Math.pow(10, 4);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatgross').value = parseFloat(GAmount);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtparygross').value = parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtgrosstotal').value = parseFloat(GAmount) + parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatNet').value = AmountVal;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpNet').value = parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalNet').value = AmountVal + parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtpatdue').value = AmountVal;
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtcmpDue').value = parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_txtTotalDue').value = AmountVal + parseFloat(CmpcGross);
        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnNetAmt').value = AmountVal + parseFloat(CmpcGross);

    }

    function OnUmrselectionNew() {
        SERVICE_TYPE_ID == "" ? 0 : SERVICE_TYPE_ID;
        SERVICE_GROUP_ID == "" ? 0 : SERVICE_GROUP_ID;
        PACKAGE_IDS == "" ? 0 : PACKAGE_IDS;
        DOCTORID == "" ? 0 : DOCTORID;
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
            UMR_NO = $('#'+ ctrlcom + '_Umrlookup_txtSearchControl').val();
        }
        else {
            UMR_NO = $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
        }
        UMR_NO == '' ? 0 : UMR_NO;
        var PAT_NAME = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value;
        var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
        var index = gridid.rows.length - 1;
        var serviceid = 0, doctorid = 0, servicetypeid = 0,sel_qty=0,sel_rate=0;qty=0;rate=0;
        $("table[id*=gvServices] tr:has(td)").each(function (e) {
            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                SERVICE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val();
                SERVICE_TYPE_ID = $(this).closest("tr").find("input[type=hidden][id*=hdnServiceTypID]").val();
                DOCTORID = $(this).closest("tr").find("input[type=hidden][id*=hdnDoctorID]").val();                
                qty=$(this).closest("tr").find("input[type=text][id*=txtQty]").val();
                rate=$(this).closest("tr").find("input[type=text][id*=txtRate]").val();
                if(qty==undefined || qty==null || qty=='' || qty==0){qty=1;}
                if(rate==undefined || rate==null || rate=='' || rate==0){rate=0;}
                SERVICE_ID = SERVICE_ID == undefined ? 0 : SERVICE_ID;
                SERVICE_TYPE_ID = SERVICE_TYPE_ID == undefined ? 0 : SERVICE_TYPE_ID;
                DOCTORID = DOCTORID == undefined ? 0 : DOCTORID;
                SERVICE_ID = SERVICE_ID == '' ? 0 : SERVICE_ID;
                SERVICE_TYPE_ID = SERVICE_TYPE_ID == '' ? 0 : SERVICE_TYPE_ID;
                DOCTORID = DOCTORID == '' ? 0 : DOCTORID;
                serviceid += ',' + SERVICE_ID;
                doctorid += ',' + DOCTORID;
                servicetypeid += ',' + SERVICE_TYPE_ID;
                sel_qty += ',' + qty;
                sel_rate += ',' + rate;
            }
        });
        SELECTED_TYPE_ID = 2;
        SELECTED_ID = 1;
        var form_name = $('#ctl00_ContentPlaceHolder1_ReceiptControl2_hdnDocName').val();
         var healthcarddet_id=0;
          if (form_name == 'OPQUICK') {
         healthcarddet_id=document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnhealth_car_det_id').value;
         }
         if (healthcarddet_id == undefined || healthcarddet_id == null || healthcarddet_id == '') {healthcarddet_id = 0; }
        GetNonAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/GetPrices",
            { SELECTED_TYPE_ID: SELECTED_TYPE_ID, SELECTED_ID: SELECTED_ID, UMR_NO: UMR_NO, SERVICE_ID: serviceid, SERVICE_TYPE_ID: servicetypeid, PAT_NAME: PAT_NAME, DOCTOR_ID: doctorid, cmp_id:cmp_id,sel_qty:sel_qty,sel_rate:sel_rate ,HEALTH_CARD_DET_ID:healthcarddet_id },
            function (JData) {
            if(JData.d != null){
            if(JData.d[0][0] != null){
              JData.d = JData.d[0][0];
                if (JData.d != null) {
                    var Data = JData.d;
                    for (var i in Data) {
                        i++;
                        if (Data[i - 1]["SERVICE_ID"] != '') {
                            $("table[id*=gvServices] tr:has(td)").each(function (e) {
                                if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                    if (Data[i - 1]["SERVICE_ID"] == '2') {
                                        if (Data[i - 1]["SERVICE_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val()) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                if (SELECTED_TYPE_ID == '2') {
                                                    var PrevPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                    var PreAmt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                }
                                                PrevPer = PrevPer == '' ? 0 : PrevPer;
                                                PreAmt = PreAmt == '' ? 0 : PreAmt;
                                                if (SELECTED_TYPE_ID == '2') {
                                                    $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE) + parseFloat(PrevPer));
                                                    $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT) + parseFloat(PreAmt));
                                                }
                                                var InputPer = parseFloat(Data[i - 1].PERCENTAGE);
                                                var InputAmt = parseFloat(Data[i - 1].DIS_AMT);
                                                var cardName = 'Naresh';
                                                var cardId = 1;
                                                var CompanyName = '';
                                                var CmpId = 0;
                                                BindGridMultipleDataOnUmrSelection(InputPer, InputAmt, 1, cardName, cardId, CompanyName, CmpId);
                                            }
                                        }
                                    }
                                    else {
                                        if (Data[i - 1]["SERVICE_ID"] == $(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val()) {
                                            if ($(this).closest("tr").find("input[type=hidden][id*=hdnServiceID]").val() > 0) {
                                                var PrevPer = $(this).closest("tr").find("[id*=txthcPer]").val();
                                                var PreAmt = $(this).closest("tr").find("[id*=txtHcAmt]").val();
                                                PrevPer = PrevPer == '' ? 0 : PrevPer;
                                                PreAmt = PreAmt == '' ? 0 : PreAmt;
                                                $(this).closest("tr").find("[id*=txthcPer]").val(parseFloat(Data[i - 1].PERCENTAGE) + parseFloat(PrevPer));
                                                $(this).closest("tr").find("[id*=txtHcAmt]").val(parseFloat(Data[i - 1].DIS_AMT) + parseFloat(PreAmt));
                                                var InputPer = parseFloat(Data[i - 1].PERCENTAGE);
                                                var InputAmt = parseFloat(Data[i - 1].DIS_AMT);
                                                var cardName = 'Naresh';
                                                var cardId = 1;
                                                var CompanyName = '';
                                                var CmpId = 0;
                                                BindGridMultipleDataOnUmrSelection(InputPer, InputAmt, 1, cardName, cardId, CompanyName, CmpId);
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }

                }
                }
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
    }
    function BindPatientHealthCrad(id, carno) {
        if (id == '' || id == null || id == undefined) { id = 0; }
        if (parseInt(id) > 0) {
            BindDataPatientHealthCard(id, carno);
        }
    }
    function BindGridMultipleDataOnUmrSelection(InputPer, InputAmt, CountIncrement, cardName, cardId) {
    InputAmt=Math.round(InputAmt);
    InputPer=setProperDecimalsCorpPer(InputPer);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("[id*=ddlMultiDiscounttype]")[0].selectedIndex = 2;
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("input[type=hidden][id*=hdncardid]").val(cardId);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]').val(InputPer);
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtAmount]').val(InputAmt);
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("[id*=ddlMultiDiscounttype]")[0].disabled = true;
        $('table[id*=gvMultipleConcession] tr').filter(':eq(' + 1 + ')').find("input[type=hidden][id*=hdncardid]")[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtPersentage]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=txtAmount]')[0].disabled = true;
        $("table[id$=gvMultipleConcession] tr").filter(":eq(" + 1 + ")").find('[id*=ddlModes]')[0].disabled = true;
        UpdateGridDiscountSelection('', 'Perecent');
        //CalculateGridAmtCount();
    }

    function btnclose12() {
        $('[id*=pnlGridPop]').css("display", "none");
        return false;
    }
    function BindHealthCard(obj) {
        
        var form_name = document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDocName').value;
        var cmp_id = 0;
        if (form_name == 'OP') {
            cmp_id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
        }
        else if (form_name == 'Cons') {
           cmp_id=document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value
        }
       else if (form_name == 'OPQUICK') {
           var pat_type = $('#'+ ctrlcom + '_ddlPatientType').val();
           if (pat_type == '2' || pat_type == '8' || pat_type == '5') {
               cmp_id = $('#'+ ctrlcom + '_hdnCompanyID').val();
            }
            
        }
       if (cmp_id == undefined || cmp_id == null || cmp_id == '') {cmp_id = 0; }
        var gridid = document.getElementById('' + ctrlcom + '_ReceiptControl2_gvMultipleConcession');
        var index = obj.parentElement.parentElement.parentElement.parentElement.rowIndex;
        var type;
        // $('[id*=pnlGridPop]')[0].style.display = 'block';
        $('[id*=pnlGridPop_Helthcard]').css("display", "block");
        $("table[id*=gvMultipleConcession] tr:has(td)").each(function (e) {
            type = $("table[id$=gvMultipleConcession] tr").filter(":eq(" + index + ")").find('[id*=ddlMultiDiscounttype]').val();
        });
        if (type == "2") {
            var param = param || {};
            var cName = 'HEALTH_CARD_TYPE_ID';
            var pText = '';
            param.dataKey = "HEALTH_CARD_TYPE_ID";
            param.pageSize = 10;
            param.pageNum = 1;
            param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '',};
            $('#'+ ctrlcom + '_ReceiptControl2_lblSrvsN').text("HEALTH CARD DETAILS");
            param.wsPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindHealthcardLookup";
            param.wsFilterPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindHealthcardLookup";
            param.template = ["HEALTH_CARD_TYPE_CD*HEALTH_CARD_TYPE_CD"
                                    , "HEALTH_CARD_TYPE_NAME*HEALTH_CARD_TYPE_NAME"
                                    , "HEALTH_CARD_TYPE_DESC*HEALTH_CARD_TYPE_DESC"
                                    ];
            param.header = [{ col: "HEALTH_CARD_TYPE_CD", sort: false, filter: true }
                                    , { col: "HEALTH_CARD_TYPE_NAME", sort: false, filter: true }
                                    , { col: "HEALTH_CARD_TYPE_DESC", sort: false, filter: true }

                                    ];
        }
        else if (type == "3") {
        }
        else if (type == "4") {
            var param = param || {};
            var cName = 'STAFF_ID';
            var pText = '';
            param.dataKey = "STAFF_ID";
            param.pageSize = 10;
            param.pageNum = 1;
            param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '' };
            $('#'+ ctrlcom + '_ReceiptControl2_lblSrvsN').text("STAFF DETAILS");
            param.wsPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindStaffLookup";
            param.wsFilterPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindStaffLookup";
            param.template = ["CODE*CODE"
                                    , "NAME*NAME"
                                    , "DEPARTMENT*DEPARTMENT"
                                    ];
            param.header = [{ col: "Code", sort: false, filter: true }
                                    , { col: "Name", sort: false, filter: true }
                                    , { col: "Department", sort: false, filter: true }
                                    ];
        }
        else if (type == "5") {
            var param = param || {};
            var cName = '';
            var pText = '';
            param.dataKey = "EVENT_ID";
            param.pageSize = 10;
            param.pageNum = 1;
            param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: ''};
            $('#'+ ctrlcom + '_ReceiptControl2_lblSrvsN').text("EVENT DETAILS");
            param.wsPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindEventLookup";
            param.wsFilterPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindEventLookup";
            param.template = ["EVENT_CD*EVENT_CD"
                                    , "EVENT_NAME*EVENT_NAME"
                                    , "AUTH_NAME*AUTH_NAME"
                                    ];
            param.header = [{ col: "EVENT_CD", sort: false, filter: true }
                                    , { col: "EVENT_NAME", sort: false, filter: true }
                                    , { col: "AUTH_NAME", sort: false, filter: true }
                                    ];
        }
        else if (type == "6") {
            var param = param || {};
            var cName = 'CNCSN_RULE_ID';
            var pText = '';
            param.dataKey = "CNCSN_RULE_ID";
            param.pageSize = 10;
            param.pageNum = 1;
            param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: ''};
            $('#'+ ctrlcom + '_ReceiptControl2_lblSrvsN').text("Rule Details");
            param.wsPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindRuleLookup";
            param.wsFilterPath = "Private/FrontOffice/OpBilling/OPConsultation1.aspx/BindRuleLookup";
            param.template = ["CNCSN_RULE_NAME*CNCSN_RULE_NAME"
                                    , "CNCSN_RULE_CD*CNCSN_RULE_CD"
                                    , "CNCSN_DEFINE_NAME*CNCSN_DEFINE_NAME"
                                    ];
            param.header = [{ col: "Rule name", sort: false, filter: true }
                                    , { col: "Rule Code", sort: false, filter: true }
                                    , { col: "Rule Defined By", sort: false, filter: true }
                                    ];
        }
        param.enablePaging = true;
        param.enableTrace = false;
        param.enableFilter = true;
        param.enableCheckbox = false;
        param.enableSorting = true;
        param.RowNo = true;
        param.tableTemplate = true;
        param.enableDMS = false;
        param.rowClick = function (key) {
            Onselection(key);
        };
        gridControl = $("#divhealthcard").jtable(param);
        return false;
    }

    function OnLmpChange(sender) {
        var dt1 = document.getElementById('<%=txtLmpCalander.ClientID %>').value;
        var dt = new Date().format('dd-MMM-yyyy');
        var result = CompareDates(dt, dt1);
        if (result == "d1<d2") {
            $(".stoast").toastText("warning", "Date should not be Greaterthan Today Date.", 5, 3);
            /*alert("Date should not be Greaterthan Today Date.");*/
            sender._selectedDate = new Date();
            // set the date back to the current date
            sender._textbox.set_Value(sender._selectedDate.format(sender._format))
        }
    }
    function _assigntarifinView(patcat_id){
    $('#<%=ddlpatcat.ClientID %>').val(patcat_id);
    ChangeTarifByPatcat();
    if(document.getElementById('' + ctrlcom + '_UCServices_hbnisshowpatcatagery').value.toUpperCase() == "YES" ){
    $('.allowMTariff').show();
    }
    else{
     $('.allowMTariff').show();
    }
    $('#<%=ddlpatcat.ClientID %>').prop('disabled',true);
    $('#<%=ddltariff.ClientID %>').prop('disabled',true);
    }
     var patientcategeoryarray = new Array();
   function ChangeTarifByPatcat(){/*Tarif DroupDown*/
      var _tariff = '';
     
      if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true') {


   $('#<%=ddltariff.ClientID %>').html('');
   var _count=0;
   var patcat_id=$('#<%=ddlpatcat.ClientID %>').val();
   if (patcat_id == null || patcat_id == undefined || patcat_id == '' || patcat_id == '--Select--') { patcat_id = 0; }
   if(patcat_id == 0)
   {
   var policy_pat_cat=$('[id*=hdnpatcatpolicy]').val();
   $(".stoast").toastText("warning", "System should not allow to change patient category as select,other wise its changes to Default Patient Category!.", 5, 3);
   $('#<%=ddlpatcat.ClientID %>').val(policy_pat_cat);
   patcat_id=policy_pat_cat;
   }
   /*Patient category comparision with Services*/
   var resultcat_id='';
   
          
   $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
   var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
   var _pat_cat_id = $(this).closest('tr').find('input[type=hidden][id*=hdnpatcatid]').val();
   var ser_id=$(this).closest('tr').find("input[type=hidden][id*=hdnServiceID]").val();
    if (_pat_cat_id == null || _pat_cat_id == undefined || _pat_cat_id == '' || _pat_cat_id == 'undefined') { _pat_cat_id = 0; }
   if(patcat_id!=_pat_cat_id && srv_name!='REGISTRATION')
   {
   //if(con_srv_id !=ser_id){
   resultcat_id=_pat_cat_id;
   _count=1;
   }
   //}
   });
   if(_count==1)
   {
    $(".stoast").toastText("warning", "System should not allow to change patient category after posting service/doctor,delete the service/doctor and post it again!.", 5, 3);
   // $('#<%=ddlpatcat.ClientID %>').val(0);
  // var policy_pat_cat=$('[id*=hdnpatcatpolicy]').val();
      $('#<%=ddlpatcat.ClientID %>').val(resultcat_id);
   patcat_id=resultcat_id;
   }
   if(patcat_id!=0)
   {
   // document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblpatientcategory').innerHTML=$('#ctl00_ContentPlaceHolder1_UCServices_ddlpatcat').children("option").filter(":selected").text();
    GetNonAsync(
       "Private/FrontOffice/OPDBILLNEW.aspx/GetPatientCategoryDtls",
       { patcat_id: patcat_id },
          function (JData) {
        
              if (JData.d[0] != '') {
              patientcategeoryarray=JData;
                  for (var i = 0; i <= JData.d[0].length; i++) {
                      if (i == 0)
                          _tariff += "<OPTION selected value='" + i + "'>" + '--select--' + "</OPTION>";
                      else
                          _tariff += "<OPTION  selected value='" + JData.d[0][i - 1].TARIFF_ID + "'>" + JData.d[0][i - 1].TARIFF_NAME + "</OPTION>";
                  }
                  $('#<%=ddltariff.ClientID %>').html(_tariff);
                 
                    if (JData.d[0][0].TARIFF_ID == undefined || JData.d[0][0].TARIFF_ID == null || JData.d[0][0].TARIFF_ID == '')
                { JData.d[0][0].TARIFF_ID = 0; }
                  $('#<%=ddltariff.ClientID %>').val(JData.d[0][0].TARIFF_ID);
                  if (JData.d[0][0].RULE_ID == undefined || JData.d[0][0].RULE_ID == null || JData.d[0][0].RULE_ID == '')
                { JData.d[0][0].RULE_ID = 0; }
                  $('#'+ ctrlcom + '_UCServices_hdnconruleid').val(JData.d[0][0].RULE_ID);
                   
                     if (JData.d[0][0].CNCSN_RULE_NAME == undefined || JData.d[0][0].CNCSN_RULE_NAME == null || JData.d[0][0].CNCSN_RULE_NAME == 'undefined')
                { JData.d[0][0].CNCSN_RULE_NAME = ''; }
                   $('#'+ ctrlcom + '_UCServices_hdnconrulename').val(JData.d[0][0].CNCSN_RULE_NAME);
   if (JData.d[0][0].DEFINE_BY_ID == undefined || JData.d[0][0].DEFINE_BY_ID == null || JData.d[0][0].DEFINE_BY_ID == 'undefined')
                { JData.d[0][0].DEFINE_BY_ID = ''; }
                    $('#'+ ctrlcom + '_UCServices_hdnconruledefindbyid').val(JData.d[0][0].DEFINE_BY_ID);                             
              }
              else
              {
                  _tariff += "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
                  $('#<%=ddltariff.ClientID %>').html(_tariff);
                  $('#<%=ddltariff.ClientID %>').val(0);
                   $('#'+ ctrlcom + '_UCServices_hdnconruleid').val(0);
                   $('#'+ ctrlcom + '_UCServices_hdnconrulename').val('');
                    $('#'+ ctrlcom + '_UCServices_hdnconruledefindbyid').val(0);    
              }
              $('#'+ ctrlcom + '_UCServices_ddlpatcat').removeClass('red');
          },
              function (jqXHR, textStatus, errorThrown) {
                  $(".stoast").toastText("Info", errorThrown, 5, 4);
              });
              }
//              if ($('#ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').val() == 1) {
        if ($('#' + ctrlcom + '_UCServices_hdnconruleid').val() > 0) {
            $('.gcrdisc').show();
        }
        else {
            $('.gcrdisc').hide();
        }
//    }
//    else {
//        $('.gcrdisc').hide();
//    }
}
else{
 _tariff += "<OPTION selected value='" + 0 + "'>" + '--select--' + "</OPTION>";
                  $('#<%=ddltariff.ClientID %>').html(_tariff);
  $('#<%=ddltariff.ClientID %>').val(0);
   $('#<%=ddltariff.ClientID %>').prop('disabled', true);
    $('#<%=ddltariff.ClientID %>')[0].style.display = 'none';
     $('#<%=lbltariff.ClientID %>')[0].style.display = 'none';


}

   var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
        if (form_name == 'OPQUICK') {
        if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {
         if (document.getElementById('' + ctrlcom + '_chk_old') != null) {
               if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {}else{   if (document.getElementById('' + ctrlcom + '_pre_regi').value != 5){ AllowAdminCharges();}}
               
               
               }
        }
        }
       
       

              ServicesAutoContextKey();
   return false;
   }

   function HighlightSearchText(source, e)
   {
    if(source._currentPrefix!=null)
    {
        var list= source.get_completionList();
        var search=source._currentPrefix.toLowerCase();
        var _ul = "";
        for(var i=0;i<list.childNodes.length;i++)
        {
            var text=list.childNodes[i].innerHTML;
            var value= list.childNodes[i]._value;
           _ul += "<li class='autocomplete_listItem srvautocomplete'>";
            for(var j=0;j<text.split('#').length;j++)
            {
                 var value ="";
                var coltext = text.split('#')[j];
                var index=coltext.toLowerCase().indexOf(search);
                if(index!=-1)
                {
                        value = coltext.replace(new RegExp(search, "gi"), '<b class="auto_hilite">$&</b>');
                }
                else
                    value = coltext;
                 _ul += "<span>" + value + "</span>";

            }
            _ul += "<span style='display:none;' id='srvdet'>'" + list.childNodes[i]._value + "'</span></li>";
        }
        source._completionListElement.innerHTML= _ul;
    }
   }
</script>
<style type="text/css">
    /*  .srvautocomplete{width:500px !important}
    .srvautocomplete{}
    .srvautocomplete li div{display:flex;  
    border-bottom: 1px solid #cacaca;}
    .srvautocomplete ul li div span{    padding: 3px;
    border-right: 1px solid #cacaca;}
    .srvautocomplete ul li div span:nth-child(1){flex:1}
     .srvautocomplete ul li div span:nth-child(2){width:90px}
      .srvautocomplete ul li div span:nth-child(3){width:70px; text-align:right;}
      .srvautocomplete ul li div span:Last-child{border-right: 0px solid #cacaca;}
      */
      .ui-progressbar-value{background:red;}
        .progressbar-container
        {
        position: relative;
    width: 350px;
    margin: 0 auto;
    top: 50%;
            
            }
            .progressbar-bar
        {
            height:25px;
            margin:10px 0;
                
            boarder-radius:7px;
            
            
            }
            .progressbar-label
        {
            position :absolute;
            top:2px;
            left:45%;
            z-index:2;
            color: blue;
            
            }
    .srvautocomplete:hover
    {
        background: #d5e8f0;
        cursor: pointer;
    }
    .autocomplete_completionListElement
    {
        min-width: 300px !important;
        max-width: 80%;
        border-collapse: collapse;
    }
    srvautocompleteauto
    {
        width: 300px !important;
    }
    .srvautocomplete
    {
        display: table-row;
        border-bottom: 1px solid #cacaca;
        padding: 0;
    }
    .srvautocomplete span
    {
        border-right: 1px solid #cacaca;
        padding: 4px 4px;
        display: table-cell;
        line-height: 15px;
        max-width: 400px;
    }
    /*.srvautocomplete span:nth-child(1){flex:1}
     .srvautocomplete span:nth-child(2){width:90px}
      .srvautocomplete span:nth-child(3){width:70px; text-align:right;}
      .srvautocomplete span:Last-child{border-right: 0px solid #cacaca;} */
    
    .auto_hilite
    {
        color: #ff9900;
    }
    .autocomplete_highlightedListItem .auto_hilite
    {
        color: #FFEB3B !important;
    }
    .tooltip-templates
    {
        display: none;
    }
    .legendinfo
    {
        position: relative;
    }
    .opbilllookup
    {
        margin-left: 0px;
    }
    .outsource
    {
    }
    i.cosernform
    {
        background: red;
    }
    .fser
    {
        background: green;
    }
    i.pkg
    {
        background: blue;
    }
    i.Tariff
    {
        background: white;
    }
    .divmanage
    {
            display: flex;
    }
    .divmanage input[type="checkbox"]
    {
        float: left;
    }
    .divmanage i
    {
        float: left;
        cursor: pointer;
        font-size: 16px;
        padding: 3px 0px;
        height: 21px;
        line-height: 15px;
        margin-top: 0px;
        margin-right: 2px;
    }
    .divmanage i:hover
    {
        background: #eee;
        border-radius: 2px;
    }
    .divmanage i.sdelete
    {
        color: #ff6666;
    }
    .divmanage i.prerequest
    {
        color: #409C29;
    }
    .divmanage i.historytype
    {
        color: #3079D1;
    }
    
    
    .gvServices .jtblgrid tbody
    {
        background: #fff;
    }
    .gvServices .jtblgrid tbody tr th, .gvServices .jtblgrid thead tr th
    {
        font-weight: 400;
        line-height: 13px;
    }
    .gvServices .jtblgrid tbody tr:nth-child(3)
    {
        background: #eee;
    }
    .gvServices .jtblgrid tbody tr th, .gvServices .grid jtblgrid tr th
    {
        padding: 0px 3px 0px 3px !important;
        vertical-align: middle;
    }
    .gvServices .jtblgrid td input[type="text"]
    {
        padding: 0px 4px;
    }
    .chrome .gvServices .jtblgrid .tb_Btn, .gvServices .jtblgrid .tb_Btn
    {
        height: 19px;
    }
    .gvServices .jtblgrid td select
    {
        padding: 0px 4px;
        font-size: 11px;
    }
    .gvServices .jtblgrid tbody tr td
    {
        padding: 1px 4px !important;
    }
    .gvServices .jtblgrid tbody tr:hover
    {
        background: none;
    }
    
    .PstCons
    {
        width: 28px !important;
        text-align: center !important;
    }
    
    .gvServices-bmin
    {
        min-width: 1540px !important;
        width: 100% !important;
    }
    .gvServices-min
    {
        min-width: 1440px !important;
        width: 100% !important;
    }
    
    .sno
    {
        min-width: 40px !important;
        text-align: left !important;
    }
    .Manage
    {
        text-align: left !important;
             min-width: 110px !important;
    }
    .PrivPostDt
    {
        min-width: 110px !important;
        text-align: left !important;
    }
    .sd-name
    {
        min-width: 300px !important;
        max-width: 300px !important;
        text-align: left !important;
    }
    .txtsrvdoctor
    {
        min-width: 110px !important;
        text-align: left !important;
    }
    .Slots
    {
        min-width: 80px !important;
        text-align: left !important;
    }
    .scode
    {
        min-width: 80px !important;
        text-align: left !important;
    }
    .stype
    {
        min-width: 110px !important;
        text-align: left !important;
    }
    .Qty
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .charge
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .amount
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .stat
    {
        min-width: 40px !important;
        text-align: center !important;
    }
    .pamt
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .pdisc
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .pdiscamt
    {
        min-width: 80px !important;
        text-align: right !important;
    }
    .pnamt
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    /* .gvServices-min cold end*/
    .sbarcd
    {
        min-width: 100px !important;
        text-align: center !important;
    }
    /* .gvServices-min cols + corporate colos width : 370*/
    
    .gvServices-corp
    {
        min-width: 1810px !important;
        width: 100% !important;
    }
    .gvServices-bcorp
    {
        min-width: 1910px !important;
        width: 100% !important;
    }
    
    .camt
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .cdisc
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .cdiscamt
    {
        min-width: 75px !important;
        text-align: right !important;
    }
    .cnamt
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .Equi_Srv_Name
    {
        
         min-width: 300px !important;
        max-width: 300px !important;
        text-align: left !important;
    }
    
    .gvServices-dis1
    {
        min-width: 1930px !important;
        width: 100% !important;
    }
    .gvServices-bdis1
    {
        min-width: 2030px !important;
        width: 100% !important;
    }
    .gvServices-cdis1
    {
        min-width: 1560px !important;
        width: 100% !important;
    }
    .gvServices-cbdis1
    {
        min-width: 1660px !important;
        width: 100% !important;
    }
    .HCPER
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .HCAMT
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .gvServices-dis2
    {
        min-min-width: 2050px !important;
        width: 100% !important;
    }
    .gvServices-bdis2
    {
        min-width: 2150px !important;
        width: 100% !important;
    }
    .gvServices-cdis2
    {
        min-width: 1680px !important;
        width: 100% !important;
    }
    .gvServices-cbdis2
    {
        min-width: 1780px !important;
        width: 100% !important;
    }
    .MGPER
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .MGAMT
    {
        min-width: 65px !important;
        text-align: right !important;
    }
    .gvServices-dis3
    {
        min-width: 2170px !important;
        width: 100% !important;
    }
    .gvServices-bdis3
    {
        min-width: 2270px !important;
        width: 100% !important;
    }
    .gvServices-cdis3
    {
        min-width: 1800px !important;
        width: 100% !important;
    }
    .gvServices-cbdis3
    {
        min-width: 1900px !important;
        width: 100% !important;
    }
    .STAFPER
    {
        min-width: 70px !important;
        text-align: right !important;
    }
    .STAMT
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .gvServices-dis4
    {
        min-width: 2290px !important;
        width: 100% !important;
    }
    .gvServices-bdis4
    {
        min-width: 2390px !important;
        width: 100% !important;
    }
    .gvServices-cdis4
    {
        min-width: 1920px !important;
        width: 100% !important;
    }
    .gvServices-cbdis4
    {
        min-width: 2020px !important;
        width: 100% !important;
    }
    .EBPER
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .EBAMT
    {
        min-width: 60px !important;
        text-align: right !important;
    }
    .gvServices-dis5
    {
        min-width: 2410px !important;
        width: 100% !important;
    }
    .gvServices-bdis5
    {
        min-width: 2510px !important;
        width: 100% !important;
    }
    .gvServices-cdis5
    {
        min-width: 2040px !important;
        width: 100% !important;
    }
    .gvServices-cbdis5
    {
        min-width: 2140px !important;
        width: 100% !important;
    }
    .CNCRLPER
    {
        min-width: 75px !important;
        text-align: right !important;
    }
    .CNCRLAMT
    {
        min-width: 75px !important;
        text-align: right !important;
    }
    .remarks
    {
        min-width: 100px !important;
        text-align: right !important;
    }
    .slegend1
    {
        float: right;
    }
    .pheadico
    {
        margin-right:0px;
    }
    
    .slegend1 i
    {
        float: right;
        border-radius: 50%;
        height: 12px;
        width: 12px;
        margin: 3px 2px 0 2px;
        position: relative;
    }
    
    i.fser
    {
        background: green;
    }
    i.fser2
    {
        background: red;
    }
    i.fser3
    {
        background: blue;
    }
    i.fser4
    {
        background: White;
    }
    i.historytype
    {
        color: #3079D1;
    }
    i.fser5
    {
        background: Gray;
    }
    i.fser6
    {
        background: Lime;
    }
    i.fser7
    {
        background: Aqua;
    }
    i.fser8
    {
        background: Lime;
    }
    i.fser9
    {
        background: orange;
    }
    i.fser10
    {
        background: Fuchsia;
    }
    i.fser15
    {
        background: rgba(0, 126, 255, 0.56);
    }
    
    i.fser11
    {
        background: red;
    }
    .lege-div
    {
        float: right;
        width: 20px;
        margin: 5px;
    }
    .lege-div i
    {
        float: left;
        width: 6px;
        height: 6px;
        margin: 0px 1px 1px 1px;
        border-radius: 50%;
        border: 0px solid white;
    }
    .lege-div > div.colorchart
    {
        display: none;
        position: absolute;
        top: 34px;
        right: 0px;
    }
    .lege-div > div.colorchart > div
    {
        height: 35px;
        display: block;
        clear: both;
        padding: 10px 5px;
        border-bottom: 1px solid #cacaca;
    }
    .lege-div > div.colorchart > div label
    {
        width: 12px;
        height: 12px;
        margin: 2px 9px 1px 1px;
        border-radius: 50%;
        float: left;
    }
    .lege-div > div.colorchart > div span
    {
        float: left;
    }
    .lege-div:hover > div.colorchart
    {
        background: #fff;
        z-index: 999;
        border: 1px solid #cacaca;
        display: block;
        box-shadow: 0 3px 6px 2px #999;
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
        right:30px;
    }
    .FavColor
    {
        color: lightgray;
    }
    .FavColorAdd
    {
        color: forestgreen;
    }
    .prevRecDiv
    {
        color: #3079D1;
        height: 22px;
    }
    .pattax
    {
        min-width: 65px !important;
        text-align: right !important;
    }
    .taxper
    {
        min-width: 65px !important;
        text-align: right !important;
    }
    .cmptax
    {
        min-width: 65px !important;
        text-align: right !important;
    }
    
    


.preloader {
  margin: auto;
   <%-- background: url(../../../CompanyLogo/Brand_Logo.PNG) no-repeat center;--%>
    background-position: center;
    background-size: 150px;
    width: 79px;
    height: 95px;
    position: absolute;
    right: 64.2rem;
    top: 26.6rem;
    z-index: 999999999;
}


.preloader2 {
border: 5px solid #f3f3f3;
    border-top: 5px solid #f00;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: spin 1s ease-in-out infinite;
    position: relative;
    margin: auto;
    top: 25rem;
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}

   
</style>
<div class="panel-divW" id="trServiceGrid" runat="server">
    <div class="panel-heading smallheading clearfix" style="height: 26px; padding: 0px 3px !important;">
        <h3 class="panel-title" style="float: left; padding: 3px 0;">
            <asp:Label ID="lblheadsrvname" runat="server" Text="Add Consultations & Services"></asp:Label>
        </h3>
        <%--  <h5 class="panel-title" style="float: left; padding: 5px 0; color: #076780; margin-left: 10px;">
            Reports Dispatch To
        </h5>--%>
        <div id="Div1" class="div1" style="float: left; margin-left: 3px; margin-top: 3px;width: min-content;">
            <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                <tr>
                    <td align="right" class="allowMTariff">
                        <asp:Label Text="Patient Category" ID="lblpatcat" runat="server"></asp:Label>
                    </td>
                    <td class="allowMTariff">
                        <asp:DropDownList ID="ddlpatcat" runat="server" Width="130px" onchange="ChangeTarifByPatcat(); OnNullValue(this);">
                        </asp:DropDownList>
                    </td>
                    <td align="right" class="allowMTariff">
                        <asp:Label Text="Tariff" ID="lbltariff" runat="server"></asp:Label>
                    </td>
                    <td class="allowMTariff">
                        <asp:DropDownList ID="ddltariff" runat="server" Width="150px" onchange="tariffchange(); checkservicename(this); ">
                        </asp:DropDownList>
                    </td>
                    <td id="txtsrvname">
                        <input s type="checkbox" id="chkisservicename" runat="server" onclick="return checkservicename(this);" />
                        <asp:Label Text="As Tariff" ID="Label8" runat="server" Style="margin-left: 0px;"></asp:Label>
                    </td>
                    <td>
                        <div id="divcount" style="float: left;">
                            <%-- <input s type="checkbox" id="chkisservicename" runat="server" onclick="return checkservicename(this);" />
                            <asp:Label Text="As Tariff" ID="lblsearchas" runat="server" Style="margin-left: 0px;"></asp:Label>--%>
                            <asp:Label Text="day Count" ID="daycount" runat="server"></asp:Label>
                            <asp:TextBox ID="txtdaycount" runat="server" Width="9%" Enabled="false"></asp:TextBox>
                            <asp:Label Text="Dept Count" ID="deptcount" runat="server"></asp:Label>
                            <asp:TextBox ID="txtdeptcount" runat="server" Enabled="false" Width="9%"></asp:TextBox>
                            <asp:Label Text="Consultation Count" ID="concount" runat="server"></asp:Label>
                            <asp:TextBox ID="txtconsutacont" runat="server" Enabled="false" Width="9%"></asp:TextBox>
                        </div>
                    </td>
                    <td align="right" style="display:none">
                        <asp:Label Text="Bill No" ID="lblbillno_h" runat="server"></asp:Label>
                    </td>
                    <td width="120px" style="display:none">
                        <Lookup:Search ID="ucbillno" runat="server" OnBlurRequired="true" CallbackFn="Onbillnoselection" />
                    </td>
                </tr>
            </table>
        </div>
        <div class="lege-div pull-right"  id="DivCorpColors" style="display: none;margin-top: 6px;">
            <i style="background-color: orange;"></i><i style="background-color: #AED75B;"></i>
            <i style="background-color: #FFDAB9;"></i><i style="background-color: #FFC0CB;">
            </i>
            <div id="divSrvColors" class="colorchart">
                <div>
                    <label style="">
                    </label>
                    <asp:Label ID="lblpri4" runat="server"></asp:Label>
                    <asp:HiddenField ID="HdnPri4" runat="server" />
                    <asp:HiddenField ID="HdnPriC4" runat="server" />
                </div>
                <div>
                    <label style="background-color: #AED75B;">
                    </label>
                    <asp:Label ID="lblpri3" runat="server"></asp:Label>
                    <asp:HiddenField ID="HdnPri3" runat="server" />
                    <asp:HiddenField ID="HdnPriC3" runat="server" />
                </div>
                <div>
                    <label style="background-color: #FFDAB9;">
                    </label>
                    <asp:Label ID="lblpri2" runat="server"></asp:Label>
                    <asp:HiddenField ID="HdnPri2" runat="server" />
                    <asp:HiddenField ID="HdnPriC2" runat="server" />
                </div>
                <div>
                    <label style="background-color: #FFC0CB;">
                    </label>
                    <asp:Label ID="lblpri1" runat="server"></asp:Label>
                    <asp:HiddenField ID="HdnPri1" runat="server" />
                    <asp:HiddenField ID="HdnPriC1" runat="server" />
                </div>
            </div>
        </div>
        <div style="float: left;">
            <i class="su-star-empty tooltip prevRecDiv" title="Favourites List" onclick="return fn_GetFavourites(this);"
                style="cursor: pointer; display: none; float: left; padding: 4px; font-size: 18px;">
            </i>
        </div>
        <div id="divcolorcd" class="lege-div pull-right" style="margin-top: 6px;">
                <i style="background-color: orange;"></i><i style="background-color: Blue;"></i>
                <i style="background-color: Green;"></i><i style="background-color: Red;"></i>
                <div id="div2" class="colorchart">
                    <div>
                        <label style="background-color: Blue">
                        </label>
                        <asp:Label ID="Label5" Text="Package Includes" runat="server"></asp:Label>
                    </div>
                    <div>
                        <label style="background-color: Green;">
                        </label>
                        <asp:Label ID="Label6" Text="OutSource" runat="server"></asp:Label>
                    </div>
                    <div>
                        <label style="background-color: Red;">
                        </label>
                        <asp:Label ID="Label7" Text="Consent Form Req" runat="server"></asp:Label>
                    </div>
                </div>
            </div>
            <input type="button" id="btnselfinv" value="Order Inv" class="button" style="float: right;
                margin-top: 4px !important; margin-right: 4px !important; padding: 1px 4px; display: block;"
                onclick="return BindSelfInvData(event);" />
            <input type="button" id="lnkBtnHistory" value="History" class="button" style="float: right;
                margin-top: 4px !important; margin-right: 4px !important; padding: 1px 4px;"
                onclick="return ShowGrid(event);" />
        <%--<div>
        <label id="srvclear" onclick="serviceClearcontactdetails();" class="su-refresh-1 pheadico tooltip"
        title="Clear" tooltip="Clear">
    </label>
        
        </div>--%>
    </div>
    <div class="panel-heading smallheading clearfix" style="height: auto !important; padding: 0px 3px !important;
        background: none;">
        <div id="DivSrvConS" style="float: left;">
            <asp:RadioButtonList ID="rbtnSrvsAndCons" RepeatDirection="Horizontal" CssClass="chk-list1"
                RepeatLayout="Flow" runat="server" onchange="ChangeSrvToCons();">
                <asp:ListItem Value="1" Selected="True">Consultation</asp:ListItem>
                <asp:ListItem Value="2">Services</asp:ListItem>
            </asp:RadioButtonList>
        </div>
        <div id="Divdocuint" style="float: left; margin-top: 1px;">
            <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                <tr>
                    <td align="right">
                        Department
                    </td>
                    <td>
                        <%--  <asp:DropDownList ID="ddldeprtment" runat="server" Width="103px" onchange="DepartmentoptionsChange();" >
                        </asp:DropDownList>--%>
                        <select id='ddldeprtment' style='width: 200px;' onchange="DepartmentoptionsChange();">
                        </select>
                    </td>
                    <td align="right">
                        Unit
                    </td>
                    <td>
                        <asp:DropDownList ID="ddlunits" runat="server" Width="150px" onchange="DepartmentuintoptionsChange();">
                        </asp:DropDownList>
                    </td>
                </tr>
            </table>
        </div>
        <div id="Divismcicreit" style="float: left; display: none;">
            <asp:RadioButtonList ID="rbtnmcicreit" runat="server" onchange="MCISearchoptionsChange();"
                RepeatDirection="Horizontal" CssClass="chk-list1" RepeatLayout="Flow">
                <asp:ListItem Value="1" Text="Schedule" Selected="True"></asp:ListItem>
                <asp:ListItem Value="2" Text="All"></asp:ListItem>
            </asp:RadioButtonList>
        </div>
        <div class="righttxt1">
            
            <div style="float: left; width: auto;display: none; margin-top: 5px !important;">
                <b style="
    font-size: 11px;
    margin-top: 5px;
    float: left;
">Discount Type :</b>
            </div>
            <div style="float: left;display: none;width: auto; margin-top: 1px !important;">
                <asp:RadioButtonList ID="rbtnDiscTypes" RepeatDirection="Horizontal" CssClass="chk-list"
                    runat="server" onchange="DiscountTypesChanges();">
                    <asp:ListItem Value="0" Selected="True">None</asp:ListItem>
                    <asp:ListItem Value="1">By Item</asp:ListItem>
                    <asp:ListItem Value="2">Ovarall</asp:ListItem>
                </asp:RadioButtonList>
            </div>
            <div id="DivFOrPcnt" style="float: left;
    width: auto;
    margin-top: 2px !important;
    display: none;
    margin-right: 5px;">
                <asp:DropDownList ID="DDDidcType" runat="server" onchange="DiscAmtOrPcnt();" class="formselect"
                    Style="width: 70px; float: left; margin-right: 5px !important;">
                    <asp:ListItem Value="2" Text="Flat" Selected="True"></asp:ListItem>
                    <asp:ListItem Value="1" Text="Percent"></asp:ListItem>
                </asp:DropDownList>
                <asp:TextBox ID="txtDiscAmtSag" runat="server" RepeatDirection="Horizontal" class="formtext"
                    Style="width: 40px; float: left;" onblur="return DiscAmtOrPcntSagrigation();"
                    onkeypress="return checknumers(event);"></asp:TextBox>
            </div>
            
            <asp:LinkButton ID="lnkReceiptDetails" runat="server" Text="Receipt Details" Style="display: none">
            </asp:LinkButton>
        </div>
    </div>
    <div id="gvServicesautoid" class="panel-body grd gvServices">
        <div id="DivGrid_Header" style="overflow: hidden;" class="divscroll">
            <asp:GridView ID="gv_services_header" runat="server" AutoGenerateColumns="False"
                Width="100%" CssClass="jtblgrid gvServices-width" GridLines="None" BorderWidth="0"
                CellPadding="0" CellSpacing="0" ShowHeaderWhenEmpty="True">
                <RowStyle CssClass="gridrow" />
                <AlternatingRowStyle CssClass="gridAlternaterow" />
                <Columns>
                    <asp:TemplateField HeaderText="S.No">
                        <HeaderStyle CssClass="sno" />
                        <ItemStyle CssClass="sno" />
                        <ItemTemplate>
                            <div id="divSno">
                                <asp:HiddenField ID="hdnServiceID" runat="server" Value='<%# Eval("VALUE") %>' />
                                <asp:HiddenField ID="hdnbillingheadid" runat="server" Value='<%# Eval("VALUE") %>' />
                                <asp:HiddenField ID="hdnrefsrvqty" runat="server" Value='<%#Eval("REFRL_QTY")%>' />
                                <asp:HiddenField ID="hdnconrequistionid" runat="server" />
                                <asp:HiddenField ID="hdnEvent_track_id" runat="server" />
                                <asp:Label ID="lblSNo" runat="server" Text='<%# Container.DataItemIndex %>' />
                                <div id="DivColors" class="slegend" style="display: none">
                                    <i class="cosernform"></i><i class="fser"></i>
                                </div>
                            </div>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Manage">
                        <HeaderStyle CssClass="Manage" Width="100px" />
                        <ItemStyle CssClass="Manage" />
                        <ItemTemplate>
                            <%--<i id="tagList" class="icon-list"  style="display:none;"></i>--%>
                            <i id="tagList" class="icon-list tooltip" data-tooltip-content="#tooltip_content"
                                style="display: none;"></i>
                            <%-- <div class="tooltip-templates">
                        <span id="tooltip_content"></span>
                        </div>--%>
                            <asp:ImageButton ID="imgBtnDelete" CommandName="sDelete" CssClass="gimg" CommandArgument='<%# Eval("VALUE") %>'
                                runat="server" Style="vertical-align: Middle; display: none;" ImageUrl="~/Assets/Grid_Icons/delete.png"
                                OnClientClick="return RemoveGridViewService(this);" ToolTip="Remove" />
                            <asp:ImageButton ID="imgClinicalHistory" CommandName="ClinicalHistory" CssClass="gimg"
                                ToolTip="Pre Requisite" CommandArgument='<%# Eval("VALUE") %>' runat="server"
                                ImageUrl="~/Assets/Grid_Icons/viewhistory.png" OnClientClick="return ShowPre_Cus_On_Srvs(this);"
                                Style="display: none;" />
                            <asp:ImageButton ID="imgbtnhisttype" runat="server" CssClass="gimg" ImageUrl="~/Assets/Grid_Icons/history.gif"
                                ToolTip="History Type" Style="display: none;" OnClientClick="return historytype(this);" />
                            <asp:CheckBox ID="chkPstCons" runat="server" CssClass="PstCons" ToolTip="Post Consultations"
                                OnClientClick="return onCheckPostCons(this);" Style="display: none;" />
                            <asp:ImageButton ID="ImgSrvHist" runat="server" class="icon-book historytype" ImageUrl="~/Assets/Grid_Icons/history.gif"
                                ToolTip="History" Style="display: none;" OnClientClick="return ServiceWiseHistory(this);" />
                            <asp:ImageButton ID="imgSrvShedul" CssClass="gimg" ToolTip="Service Schedule" runat="server"
                                ImageUrl="~/Assets/Grid_Icons/ServicesAndTariffs_icon.gif" OnClientClick="return Show_Srv_ScheduleDtls(this);"
                                Style="display: none;" />
                            <asp:ImageButton ID="imgGuidelines" CssClass="gimg" ToolTip="Guide Lines" runat="server"
                                ImageUrl="~/Assets/Grid_Icons/ServicesAndTariffs_icon.gif" OnClientClick="return onGuidelinesClick(this);"
                                Style="display: none;" />
                            <asp:ImageButton ID="imgCheckList" CssClass="gimg" ToolTip="Check List" runat="server"
                                ImageUrl="~/Assets/Grid_Icons/ServicesAndTariffs_icon.gif" OnClientClick="return onCheckListClick(this);"
                                Style="display: none;" />
                            <asp:ImageButton ID="imgInstructionList" CssClass="gimg" ToolTip="Check List" runat="server"
                                ImageUrl="~/Assets/Grid_Icons/ServicesAndTariffs_icon.gif" OnClientClick="return onCheckInstructionClick(this);"
                                Style="display: none;" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Prev. Posted Dt">
                        <HeaderStyle CssClass="PrivPostDt" />
                        <ItemStyle CssClass="PrivPostDt" />
                        <ItemTemplate>
                            <asp:Label ID="txtPriv_Post_Dt" runat="server" Text='<%#Eval("PRIV_SRV_POSTED_DT")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Doctor / Service Name">
                        <HeaderStyle CssClass="sd-name" />
                        <ItemStyle CssClass="sd-name" />
                        <ItemTemplate>
                            <div id="divsrvname" class="btntxt">
                                <asp:TextBox ID="txtServiceName" Text='<%# Eval("TEXT") %>' runat="server" CssClass="SampleReg"
                                    onkeyup="ShowServicePopup(event);"></asp:TextBox>
                                <div>
                                    <ajaxToolkit:AutoCompleteExtender runat="server" ID="autoComplete1" TargetControlID="txtServiceName"
                                        ServiceMethod="GetAllOPServiceAuto" UseContextKey="true" ServicePath="~/ServiceMasterWebService.asmx"
                                        CompletionSetCount="20" MinimumPrefixLength="2" CompletionInterval="5" EnableCaching="false"
                                        ShowOnlyCurrentWordInCompletionListItem="true" OnClientItemSelected="OnItemSelection"
                                        OnClientPopulated="HighlightSearchText" FirstRowSelected="true" CompletionListCssClass="autocomplete_completionListElement"
                                        CompletionListItemCssClass="autocomplete_listItem" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem">
                                    </ajaxToolkit:AutoCompleteExtender>
                                    <ajaxToolkit:TextBoxWatermarkExtender ID="txtWaterMarker" runat="server" TargetControlID="txtServiceName"
                                        WatermarkText="--Enter Doctor/service Name Here--">
                                    </ajaxToolkit:TextBoxWatermarkExtender>
                                </div>
                                <div id="divBtnSrc" class="txtbtn">
                                    <input type="button" id="BtnSrvSearchService" value="&nbsp;" class="tb_Btn searchbtn"
                                        onclick="return OnServicesSearchLookup(this,'TblHeader');" />
                                </div>
                            </div>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Service Doctor">
                        <HeaderStyle CssClass="txtsrvdoctor" />
                        <ItemStyle CssClass="txtsrvdoctor" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtsrvdoctor" runat="server" Text='<%#Eval("DOCTOR_NAME")%>' ReadOnly="true"></asp:TextBox>
                            <asp:HiddenField ID="hdnsrvdoctorID" runat="server" Value='<%# Eval("DOCTOR_ID") %>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Slots">
                        <HeaderStyle CssClass="Slots" />
                        <ItemStyle CssClass="Slots" />
                        <ItemTemplate>
                            <asp:DropDownList ID="ddlSlotTiming" runat="server" onchange="SlotChnage(this);">
                            </asp:DropDownList>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="S Code">
                        <HeaderStyle CssClass="scode" />
                        <ItemStyle CssClass="scode" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtServiceCode" runat="server" Text='<%#Eval("Service_cd")%>' ReadOnly="true"></asp:TextBox>
                            <asp:HiddenField ID="hdnSrvUniCode" runat="server" Value='<%# Eval("SERVICE_UNICODE") %>' />
                            <asp:HiddenField ID="hdnUniSrvTypeId" runat="server" Value='<%# Eval("UNI_SERVICE_TYPE_ID") %>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Type">
                        <HeaderStyle CssClass="stype" />
                        <ItemStyle CssClass="stype" />
                        <ItemTemplate>
                            <asp:DropDownList ID="ddSType" runat="server" onchange="DropDownTypeChanges(this);"
                                Enabled="false">
                            </asp:DropDownList>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Qty">
                        <HeaderStyle CssClass="Qty" />
                        <ItemStyle CssClass="Qty" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtQty" runat="server" Enabled="false" Text='<%# Eval("QUANTITY")%>'
                                onkeypress="return checknumers(event);" onfocus="CheckCurrentQty(this);" onkeyup="return OnQtyChange(this);"
                                onblur="return OnQtyChange(this);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Rate">
                        <HeaderStyle CssClass="charge" />
                        <ItemStyle CssClass="charge" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtRate" runat="server" Enabled="false" Text='<%# Eval("RATE")%>'
                                onkeypress="return checknumers(event);" onkeyup="return OnRateChange(this);"
                                onblur=" OnRateChange(this);CheckPriceInRange(this);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Amount">
                        <HeaderStyle CssClass="amount" />
                        <ItemStyle CssClass="amount" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtAmount" runat="server" Enabled="false" Text='<%# Eval("AMOUNT")%>'
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Stat">
                        <HeaderStyle CssClass="stat" />
                        <ItemStyle CssClass="stat" />
                        <HeaderTemplate />
                        <ItemTemplate>
                            <asp:HiddenField ID="hdnIsEmergency" runat="server" Value='<%#Eval("IS_EMERGENCY")%>' />
                            <asp:HiddenField ID="hdnIsPrerequisit" runat="server" Value='<%#Eval("IS_CLINICAL_HIST_REQ")%>' />
                            <asp:HiddenField ID="hdnIsForeignSrv" runat="server" Value='<%#Eval("IS_FOREIGN_SERVICE")%>' />
                            <asp:HiddenField ID="hdnConCernFormreq" runat="server" Value='<%#Eval("CONCERN_FORM_REQ")%>' />
                            <asp:HiddenField ID="hdnSpeciman_name" runat="server" Value='<%#Eval("SPECIMEN_NAME")%>' />
                            <asp:HiddenField ID="hdnTrf" runat="server" Value='<%#Eval("TRF")%>' />
                            <asp:HiddenField ID="hdnSite" runat="server" Value='<%#Eval("SITE")%>' />
                            <asp:HiddenField ID="hdnConTypeId" runat="server" Value='<%#Eval("CONSULTATION_TYPE_ID")%>' />
                            <asp:HiddenField ID="hdnCmpClrCd" runat="server" Value='<%#Eval("COLOR_CD")%>' />
                            <asp:HiddenField ID="hdn_ord_id" runat="server" />
                            <asp:HiddenField ID="hdnord_det_id" runat="server" />
                            <asp:HiddenField ID="hdnSrv_Name_A" runat="server" />
                            <asp:CheckBox ID="chkstat" runat="server" onclick="selectAll(this);" />
                            <asp:HiddenField ID="hdnServiceClass" runat="server" Value='<%#Eval("PKG_SRV_IDS")%>' />
                            <asp:HiddenField ID="hdnClass_Srv_ID" runat="server" Value='<%#Eval("Service_Class_Id")%>' />
                            <asp:HiddenField ID="hdnServiceGrpID" runat="server" />
                            <asp:HiddenField ID="hdnServiceTypID" runat="server" />
                            <asp:HiddenField ID="hdnDoctorID" runat="server" Value='<%#Eval("DOCTOR_ID")%>' />
                            <asp:HiddenField ID="hdnDepartment_Id" runat="server" />
                            <asp:HiddenField ID="hdnSrv_Type_Name" runat="server" />
                            <asp:HiddenField ID="hdnSrv_Grp_Name" runat="server" />
                            <asp:HiddenField ID="hdnPat_Class_Id" runat="server" />
                            <asp:HiddenField ID="hdnEmergency_Price" runat="server" />
                            <asp:HiddenField ID="hdnNormal_Price" runat="server" />
                            <asp:HiddenField ID="hdnTariffId" runat="server" Value='<%#Eval("Tariff_Id")%>' />
                            <asp:HiddenField ID="hdnhistorytypeID" runat="server" Value='<%#Eval("CNCL_SMRY_ID")%>' />
                            <asp:HiddenField ID="hdnMin_Price" runat="server" />
                            <asp:HiddenField ID="hdnMax_Price" runat="server" />
                            <asp:HiddenField ID="hdnNo_Nd_Dys" runat="server" />
                            <asp:HiddenField ID="hdnMedicationType" runat="server" Value='<%#Eval("MEDICATION_ID")%>' />
                            <asp:HiddenField ID="hdnDosageqty" runat="server" Value='<%#Eval("DOSAGE")%>' />
                            <asp:HiddenField ID="hdnIsTakenToday" runat="server" Value='<%#Eval("IS_TAKEN_TODAY")%>' />
                            <asp:HiddenField ID="hdnLmpCal" runat="server" Value='<%#Eval("LMP_DT")%>' />
                            <asp:HiddenField ID="hdnOutherMedic" runat="server" Value='<%#Eval("OUTHER_MEDICATION")%>' />
                            <asp:HiddenField ID="hdncount" runat="server" Value='<%#Eval("CNCL_SMRY_ID")%>' />
                            <asp:HiddenField ID="hdnCmpDiscPcnt" runat="server" Value='<%#Eval("CNCL_SMRY_ID")%>' />
                            <asp:HiddenField ID="hdnprorate" runat="server" />
                            <asp:HiddenField ID="hdnSrvShcedulSave" runat="server" />
                            <asp:HiddenField ID="hdnedit_srv_cd" runat="server" />
                            <asp:HiddenField ID="hdnmax_opt_srvs" runat="server" />
                            <asp:HiddenField ID="hdnsrvdates" runat="server" />
                            <asp:HiddenField ID="hdnTockenNO" runat="server" />
                            <asp:HiddenField ID="hdnreqid" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField FooterText="Bar Code">
                        <HeaderStyle CssClass="sbarcd barcdhead" />
                        <ItemStyle CssClass="sbarcd barcdhead" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtBarcode" runat="server" onblur="return barcodevalidate(this);"></asp:TextBox>
                            <asp:HiddenField ID="hdnISSamplecoll" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Amt">
                        <HeaderStyle CssClass="pamt gpatamts" />
                        <ItemStyle CssClass="pamt gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtPamt" runat="server" Text='<%# Eval("EMP_GROSS_AMT")%>' Enabled="false"
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Disc%">
                        <HeaderStyle CssClass="pdisc gpatamts" />
                        <ItemStyle CssClass="pdisc gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtDiscP" runat="server" Enabled="false" Text='<%# Eval("CONCESSION_AMOUNT")%>'
                                onkeypress="return checknumers(event);" onkeyup="return OnPatDiscPcntChange(this,'PAT');"
                                onfocus="return ClearTextbox(this);" onblur="return OnPatDiscPcntChange(this,'PAT');AssignZero(this);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Disc.Amt">
                        <HeaderStyle CssClass="pdiscamt gpatamts" />
                        <ItemStyle CssClass="pdiscamt gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtDiscAmt" runat="server" Enabled="false" Text='<%# Eval("CONCESSION_AMOUNT")%>'
                                onkeypress="return checknumers(event);" onkeyup="return OnPatAmtChange(this,'PAT');"
                                onblur="return OnPatAmtChange(this,'PAT');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P NAmt">
                        <HeaderStyle CssClass="pnamt gpatamts" />
                        <ItemStyle CssClass="pnamt gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtPNAmt" runat="server" Text='<%# Eval("EMP_NET_AMT")%>' Enabled="false"
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C Amt">
                        <HeaderStyle CssClass="camt gcompany" />
                        <ItemStyle CssClass="camt gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCamt" runat="server" Text='<%# Eval("COMPANY_AMOUNT")%>' Enabled="false"
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C DiscPe">
                        <HeaderStyle CssClass="cdisc gcompany" />
                        <ItemStyle CssClass="cdisc gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCDiscP" runat="server" Enabled="false" Text='<%# Eval("COMPANY_CNCSN_PCT")%>'
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C Disc.Amt">
                        <HeaderStyle CssClass="cdiscamt gcompany" />
                        <ItemStyle CssClass="cdiscamt gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCDiscAmt" runat="server" Enabled="false" Text='<%# Eval("COMPANY_CNCSN_AMT")%>'
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C NAmt">
                        <HeaderStyle CssClass="cnamt gcompany" />
                        <ItemStyle CssClass="cnamt gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCNetAmt" runat="server" Text='<%# Eval("COMPANY_NET_AMT")%>'
                                Enabled="false" onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Tariff Service Name">
                        <HeaderStyle CssClass="Equi_Srv_Name gcompany" />
                        <ItemStyle CssClass="Equi_Srv_Name gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtEqui_Srv_Name" runat="server" Text='<%# Eval("EQUI_SERVICE_NAME")%>'
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="HCPer%">
                        <HeaderStyle CssClass="HCPER ghcdisc" />
                        <ItemStyle CssClass="HCPER ghcdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txthcPer" onblur="return CalConcessionAmount('P');" runat="server"
                                Text='<%# Eval("HCPER")%>' CssClass="Aright" Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="HcAmt">
                        <HeaderStyle CssClass="HCAMT ghcdisc" />
                        <ItemStyle CssClass="HCAMT ghcdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtHcAmt" runat="server" Text='<%# Eval("HCAMT")%>' CssClass="Aright"
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="MgPer%">
                        <HeaderStyle CssClass="MGPER gmgdisc" />
                        <ItemStyle CssClass="MGPER gmgdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtmaPer" onkeyup="return OnPatDiscPcntChange(this,'MG');" runat="server"
                                Text='<%# Eval("MGPER")%>' CssClass="Aright" Enabled="false" onblur="return OnPatDiscPcntChange(this,'MG');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="MgAmt">
                        <HeaderStyle CssClass="MGAMT gmgdisc" />
                        <ItemStyle CssClass="MGAMT gmgdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtmgAmt" runat="server" onkeyup="return OnPatAmtChange(this,'MG');"
                                Text='<%# Eval("MGAMT")%>' CssClass="Aright" Enabled="false" onblur="return OnPatAmtChange(this,'MG');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="StafPer%">
                        <HeaderStyle CssClass="STAFPER gstdisc" />
                        <ItemStyle CssClass="STAFPER gstdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtstPer" onkeyup="return OnPatDiscPcntChange(this,'STAF');" runat="server"
                                Text='<%# Eval("STAFPER")%>' CssClass="Aright" Enabled="false" onblur="return OnPatDiscPcntChange(this,'STAF');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="StAmt">
                        <HeaderStyle CssClass="STAMT gstdisc" />
                        <ItemStyle CssClass="STAMT gstdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtstAmt" runat="server" onkeyup="return OnPatAmtChange(this,'STAF');"
                                Text='<%# Eval("STAMT")%>' CssClass="Aright" Enabled="false" onblur="return OnPatAmtChange(this,'STAF');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="EBPer%">
                        <HeaderStyle CssClass="EBPER gevdisc" />
                        <ItemStyle CssClass="EBPER gevdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtebPer" onblur="return CalConcessionAmount('P');" runat="server"
                                Text='<%# Eval("EBPER")%>' CssClass="Aright" Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="EbAmt">
                        <HeaderStyle CssClass="EBAMT gevdisc" />
                        <ItemStyle CssClass="EBAMT gevdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtebAmt" Enabled="false" runat="server" Text='<%# Eval("EBAMT")%>'
                                CssClass="Aright"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Cncrlper%">
                        <HeaderStyle CssClass="CNCRLPER gcrdisc" />
                        <ItemStyle CssClass="CNCRLPER gcrdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtRulePer" onblur="return CalConcessionAmount('P');" runat="server"
                                Text='<%# Eval("RULPER")%>' CssClass="Aright" Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Cncrlamt">
                        <HeaderStyle CssClass="CNCRLAMT gcrdisc" />
                        <ItemStyle CssClass="CNCRLAMT gcrdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtcncrlAmt" runat="server" Text='<%# Eval("RULAMT")%>' CssClass="Aright"
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Remarks">
                        <HeaderStyle CssClass="remarks" />
                        <ItemStyle CssClass="remarks" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtremks" runat="server" Text='<%# Eval("REMARKS")%>' CssClass="Aright"></asp:TextBox>
                            <asp:HiddenField ID="hdnIsRemarks" runat="server" Value='<%#Eval("IS_REMARKS_MANDATORY")%>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Tax%">
                        <HeaderStyle CssClass="taxper gsttax" />
                        <ItemStyle CssClass="taxper gsttax" />
                        <ItemTemplate>
                            <asp:TextBox ID="txttaxper" runat="server" Text='<%# Eval("TAX_PCT")%>' CssClass="Aright"
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Tax">
                        <HeaderStyle CssClass="pattax gsttax" />
                        <ItemStyle CssClass="pattax gsttax" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtptax" runat="server" CssClass="Aright" Text='<%# Eval("EMP_TAX_AMT")%>'
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C Tax">
                        <HeaderStyle CssClass="cmptax gcompany" />
                        <ItemStyle CssClass="cmptax gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtcmptax" runat="server" CssClass="Aright" Text='<%# Eval("CMP_TAX_AMT")%>'
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
        <div id="DivGrid_Body" class="divscroll " style="padding: 0px 0px 0px 0px; min-height: 150px;
            max-height: 250px">
            <asp:GridView ID="gvServices" runat="server" AutoGenerateColumns="False" Width="100%"
                CssClass="jtblgrid gvServices-width" GridLines="None" BorderWidth="0" CellPadding="0"
                CellSpacing="0" ShowHeaderWhenEmpty="True" ShowHeader="false">
                <RowStyle CssClass="gridrow" />
                <AlternatingRowStyle CssClass="gridAlternaterow" />
                <Columns>
                    <asp:TemplateField HeaderText="S.No">
                        <HeaderStyle CssClass="sno" />
                        <ItemStyle CssClass="sno" />
                        <ItemTemplate>
                            <div id="divSno">
                                <asp:HiddenField ID="hdnServiceID" runat="server" Value='<%# Eval("VALUE") %>' />
                                <asp:HiddenField ID="hdnbillingheadid" runat="server" Value='<%# Eval("VALUE") %>' />
                                <asp:HiddenField ID="hdnrefsrvqty" runat="server" Value='<%#Eval("REFRL_QTY")%>' />
                                <asp:HiddenField ID="hdnconrequistionid" runat="server" />
                                <asp:HiddenField ID="hdnItem_id" runat="server" />
                                <asp:HiddenField ID="hdnitem_group_id" runat="server" />
                                <asp:HiddenField ID="hdnEvent_track_id" runat="server" />
                                <asp:Label ID="lblSNo" runat="server" Text='<%# Container.DataItemIndex %>' />
                                <div id="DivColors" class="slegend" style="display: none">
                                    <i class="cosernform"></i><i class="fser"></i>
                                </div>
                            </div>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Manage">
                        <HeaderStyle CssClass="Manage" />
                        <ItemStyle CssClass="Manage" />
                        <ItemTemplate>
                            <i class="icon-flow-tree"></i><i id="tagList" class="icon-list tooltip" data-tooltip-content="#tooltip_content">
                            </i>
                            <asp:ImageButton ID="imgBtnDelete" CommandName="sDelete" CssClass="gimg" CommandArgument='<%# Eval("VALUE") %>'
                                runat="server" Style="vertical-align: Middle; display: block;" ImageUrl="~/Assets/Grid_Icons/delete.png"
                                OnClientClick="return RemoveGridViewService(this);" ToolTip="Remove" />
                            <asp:ImageButton ID="imgClinicalHistory" CommandName="ClinicalHistory" CssClass="gimg"
                                ToolTip="Pre Requisite" CommandArgument='<%# Eval("VALUE") %>' runat="server"
                                ImageUrl="~/Assets/Grid_Icons/viewhistory.png" OnClientClick="return ShowPre_Cus_On_Srvs(this);"
                                Style="display: block;" />
                            <asp:ImageButton ID="imgbtnhisttype" runat="server" CssClass="gimg" ImageUrl="~/Assets/Grid_Icons/history.gif"
                                ToolTip="History Type" Style="display: none;" OnClientClick="return historytype(this);" />
                            <asp:CheckBox ID="chkPstCons" runat="server" CssClass="PstCons" ToolTip="Post Consultations"
                                OnClientClick="return onCheckPostCons(this);" Style="display: block;" />
                            <asp:ImageButton ID="ImgSrvHist" runat="server" class="icon-book historytype" ImageUrl="~/Assets/Grid_Icons/history.gif"
                                ToolTip="History" Style="display: block;" OnClientClick="return ServiceWiseHistory(this);" />
                            <asp:ImageButton ID="imgSrvShedul" CssClass="gimg" ToolTip="Service Schedule" runat="server"
                                ImageUrl="~/Assets/Grid_Icons/ServicesAndTariffs_icon.gif" OnClientClick="return Show_Srv_ScheduleDtls(this);"
                                Style="display: none;" />
                            <asp:ImageButton ID="imgOptionalSrv" class="icon-doc-1 historytype" ToolTip="Optinal Services"
                                runat="server" ImageUrl="~/Assets/Grid_Icons/history.gif" OnClientClick="return Show_OptionalSrvDtls(this);"
                                Style="display: none;" />
                            <asp:ImageButton ID="imgGuidelines" CssClass="gimg" ToolTip="Guide Lines" runat="server"
                                ImageUrl="~/Assets/Grid_Icons/ServicesAndTariffs_icon.gif" OnClientClick="return onGuidelinesClick(this);"
                                Style="display: none;" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Prev. Posted Dt">
                        <HeaderStyle CssClass="PrivPostDt" />
                        <ItemStyle CssClass="PrivPostDt" />
                        <ItemTemplate>
                            <asp:Label ID="txtPriv_Post_Dt" runat="server" Text='<%#Eval("PRIV_SRV_POSTED_DT")%>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Doctor / Service Name">
                        <HeaderStyle CssClass="sd-name" />
                        <ItemStyle CssClass="sd-name" />
                        <ItemTemplate>
                            <div id="divsrvname" class="btntxt opbilllookup">
                                <asp:TextBox ID="txtServiceName" Text='<%# Eval("TEXT") %>' runat="server" CssClass="SampleReg"
                                    onkeyup="ShowServicePopup(event);" onfocus="return onAgeCapturing();"></asp:TextBox>
                                <ajaxToolkit:AutoCompleteExtender runat="server" ID="autoComplete1" TargetControlID="txtServiceName"
                                    ServiceMethod="GetAllOPServiceAuto" UseContextKey="true" ServicePath="~/ServiceMasterWebService.asmx"
                                    CompletionSetCount="5" MinimumPrefixLength="2" CompletionInterval="5" EnableCaching="false"
                                    OnClientItemSelected="OnItemSelection" FirstRowSelected="true" CompletionListCssClass="autocomplete_completionListElement"
                                    CompletionListItemCssClass="autocomplete_listItem" CompletionListHighlightedItemCssClass="autocomplete_highlightedListItem" />
                                <ajaxToolkit:TextBoxWatermarkExtender ID="txtWaterMarker" runat="server" TargetControlID="txtServiceName"
                                    WatermarkText="--Enter Test Name Here--">
                                </ajaxToolkit:TextBoxWatermarkExtender>
                                <div id="divBtnSrc" class="txt_btn">
                                    <input type="button" id="BtnSrvSearchService" value="&nbsp;" class="tb_Btn searchbtn"
                                        onclick="return OnServicesSearchLookup(this,'TblBody');" />
                                </div>
                            </div>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Service Doctor">
                        <HeaderStyle CssClass="txtsrvdoctor" />
                        <ItemStyle CssClass="txtsrvdoctor" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtsrvdoctor" runat="server" Text='<%#Eval("DOCTOR_NAME")%>' ReadOnly="true"></asp:TextBox>
                            <asp:HiddenField ID="hdnsrvdoctorID" runat="server" Value='<%# Eval("DOCTOR_ID") %>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Slots">
                        <HeaderStyle CssClass="Slots" />
                        <ItemStyle CssClass="Slots" />
                        <ItemTemplate>
                            <asp:DropDownList ID="ddlSlotTiming" runat="server" onchange="SlotChnage(this);">
                            </asp:DropDownList>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="S Code">
                        <HeaderStyle CssClass="scode" />
                        <ItemStyle CssClass="scode" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtServiceCode" runat="server" Text='<%#Eval("Service_cd")%>' ReadOnly="true"></asp:TextBox>
                            <asp:HiddenField ID="hdnSrvUniCode" runat="server" Value='<%# Eval("SERVICE_UNICODE") %>' />
                            <asp:HiddenField ID="hdnUniSrvTypeId" runat="server" Value='<%# Eval("UNI_SERVICE_TYPE_ID") %>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Type">
                        <HeaderStyle CssClass="stype" />
                        <ItemStyle CssClass="stype" />
                        <ItemTemplate>
                            <asp:DropDownList ID="ddSType" runat="server" onchange="DropDownTypeChanges(this);"
                                Enabled="false">
                            </asp:DropDownList>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Qty">
                        <HeaderStyle CssClass="Qty" />
                        <ItemStyle CssClass="Qty" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtQty" runat="server" Enabled="false" Text='<%# Eval("QUANTITY")%>'
                                onfocus="CheckCurrentQty(this);" onkeypress="return checknumers(event);" onkeyup="return OnQtyChange(this);"
                                onblur="return OnQtyChange(this);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Rate">
                        <HeaderStyle CssClass="charge" />
                        <ItemStyle CssClass="charge" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtRate" runat="server" Enabled="false" Text='<%# Eval("RATE")%>'
                                onkeypress="return checknumers(event);" onkeyup="return OnRateChange(this);"
                                onblur=" OnRateChange(this);CheckPriceInRange(this);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Amount">
                        <HeaderStyle CssClass="amount" />
                        <ItemStyle CssClass="amount" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtAmount" runat="server" Enabled="false" Text='<%# Eval("AMOUNT")%>'
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="STAT">
                        <HeaderStyle CssClass="stat" />
                        <ItemStyle CssClass="stat" />
                        <HeaderTemplate>
                            STAT
                            <asp:CheckBox ID="chkstat" runat="server" onclick="selectAll(this);" />
                            <asp:HiddenField ID="hdnServiceClass" runat="server" Value='<%#Eval("PKG_SRV_IDS")%>' />
                            <asp:HiddenField ID="hdnClass_Srv_ID" runat="server" Value='<%#Eval("Service_Class_Id")%>' />
                            <asp:HiddenField ID="hdnServiceGrpID" runat="server" />
                            <asp:HiddenField ID="hdnServiceTypID" runat="server" />
                            <asp:HiddenField ID="hdnDoctorID" runat="server" Value='<%#Eval("DOCTOR_ID")%>' />
                            <asp:HiddenField ID="hdnDepartment_Id" runat="server" />
                            <asp:HiddenField ID="hdnSrv_Type_Name" runat="server" />
                            <asp:HiddenField ID="hdnSrv_Grp_Name" runat="server" />
                            <asp:HiddenField ID="hdnPat_Class_Id" runat="server" />
                            <asp:HiddenField ID="hdnEmergency_Price" runat="server" />
                            <asp:HiddenField ID="hdnNormal_Price" runat="server" />
                            <asp:HiddenField ID="hdnTariffId" runat="server" Value='<%#Eval("Tariff_Id")%>' />
                            <asp:HiddenField ID="hdnhistorytypeID" runat="server" Value='<%#Eval("CNCL_SMRY_ID")%>' />
                            <asp:HiddenField ID="hdnMin_Price" runat="server" />
                            <asp:HiddenField ID="hdnMax_Price" runat="server" />
                            <asp:HiddenField ID="hdnNo_Nd_Dys" runat="server" />
                            <asp:HiddenField ID="hdnMedicationType" runat="server" Value='<%#Eval("MEDICATION_ID")%>' />
                            <asp:HiddenField ID="hdnDosageqty" runat="server" Value='<%#Eval("DOSAGE")%>' />
                            <asp:HiddenField ID="hdnIsTakenToday" runat="server" Value='<%#Eval("IS_TAKEN_TODAY")%>' />
                            <asp:HiddenField ID="hdnLmpCal" runat="server" Value='<%#Eval("LMP_DT")%>' />
                            <asp:HiddenField ID="hdnOutherMedic" runat="server" Value='<%#Eval("OUTHER_MEDICATION")%>' />
                            <asp:HiddenField ID="hdncount" runat="server" Value='<%#Eval("CNCL_SMRY_ID")%>' />
                            <asp:HiddenField ID="hdnCmpDiscPcnt" runat="server" Value='<%#Eval("CNCL_SMRY_ID")%>' />
                            <asp:HiddenField ID="hdnIsRegInclude" runat="server" />
                            <asp:HiddenField ID="hdnedit_srv_cd" runat="server" />
                            <asp:HiddenField ID="hdnmax_opt_srvs" runat="server" />
                            <asp:HiddenField ID="hdnsrvdates" runat="server" />
                            <asp:HiddenField ID="hdnTockenNO" runat="server" />
                            <asp:HiddenField ID="hdnreqid" runat="server" />
                        </HeaderTemplate>
                        <ItemTemplate>
                            <asp:CheckBox ID="chkEmergency" runat="server" onclick="onCheckEmergency(this);" />
                            <asp:HiddenField ID="hdnIsEmergency" runat="server" Value='<%#Eval("IS_EMERGENCY")%>' />
                            <asp:HiddenField ID="hdnIsPrerequisit" runat="server" Value='<%#Eval("IS_CLINICAL_HIST_REQ")%>' />
                            <asp:HiddenField ID="hdnIsForeignSrv" runat="server" Value='<%#Eval("IS_FOREIGN_SERVICE")%>' />
                            <asp:HiddenField ID="hdnConCernFormreq" runat="server" Value='<%#Eval("CONCERN_FORM_REQ")%>' />
                            <asp:HiddenField ID="hdnSpeciman_name" runat="server" Value='<%#Eval("SPECIMEN_NAME")%>' />
                            <asp:HiddenField ID="hdnTrf" runat="server" Value='<%#Eval("TRF")%>' />
                            <asp:HiddenField ID="hdnSite" runat="server" Value='<%#Eval("SITE")%>' />
                            <asp:HiddenField ID="hdnConTypeId" runat="server" Value='<%#Eval("CONSULTATION_TYPE_ID")%>' />
                            <asp:HiddenField ID="hdnCmpClrCd" runat="server" Value='<%#Eval("COLOR_CD")%>' />
                            <asp:HiddenField ID="hdn_ord_id" runat="server" />
                            <asp:HiddenField ID="hdnord_det_id" runat="server" />
                            <asp:HiddenField ID="hdnSrv_Name_A" runat="server" />
                            <asp:HiddenField ID="hdn_ind_doc_id" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Bar Code">
                        <HeaderStyle CssClass="sbarcd" />
                        <ItemStyle CssClass="sbarcd barcddata" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtBarcode" runat="server" onblur="return barcodevalidate(this);"></asp:TextBox>
                            <asp:HiddenField ID="hdnISSamplecoll" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Amt">
                        <HeaderStyle CssClass="pamt gpatamts" />
                        <ItemStyle CssClass="pamt gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtPamt" runat="server" Text='<%# Eval("EMP_GROSS_AMT")%>' Enabled="false"
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Disc%">
                        <HeaderStyle CssClass="pdisc gpatamts" />
                        <ItemStyle CssClass="pdisc gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtDiscP" runat="server" Enabled="false" Text='<%# Eval("CONCESSION_AMOUNT")%>'
                                onkeypress="return checknumers(event);" onkeyup="return OnPatDiscPcntChange(this,'PAT');"
                                onfocus="return ClearTextbox(this);" onblur="return OnPatDiscPcntChange(this,'PAT');AssignZero(this);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Disc.Amt">
                        <HeaderStyle CssClass="pdiscamt gpatamts" />
                        <ItemStyle CssClass="pdiscamt gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtDiscAmt" runat="server" Enabled="false" Text='<%# Eval("CONCESSION_AMOUNT")%>'
                                onkeypress="return checknumers(event);" onkeyup="return OnPatAmtChange(this,'PAT');"
                                onblur="return OnPatAmtChange(this,'PAT');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P NAmt">
                        <HeaderStyle CssClass="pnamt gpatamts" />
                        <ItemStyle CssClass="pnamt gpatamts" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtPNAmt" runat="server" Text='<%# Eval("EMP_NET_AMT")%>' Enabled="false"
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C Amt">
                        <HeaderStyle CssClass="camt gcompany" />
                        <ItemStyle CssClass="camt gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCamt" runat="server" Text='<%# Eval("COMPANY_AMOUNT")%>' Enabled="false"
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C DiscPe">
                        <HeaderStyle CssClass="cdisc gcompany" />
                        <ItemStyle CssClass="cdisc gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCDiscP" runat="server" Enabled="false" Text='<%# Eval("COMPANY_CNCSN_PCT")%>'
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C Disc.Amt">
                        <HeaderStyle CssClass="cdiscamt gcompany" />
                        <ItemStyle CssClass="cdiscamt gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCDiscAmt" runat="server" Enabled="false" Text='<%# Eval("COMPANY_CNCSN_AMT")%>'
                                onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C NAmt">
                        <HeaderStyle CssClass="cnamt gcompany" />
                        <ItemStyle CssClass="cnamt gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtCNetAmt" runat="server" Text='<%# Eval("COMPANY_NET_AMT")%>'
                                Enabled="false" onkeypress="return checknumers(event);"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Equi Service NAme">
                        <HeaderStyle CssClass="Equi_Srv_Name gcompany" />
                        <ItemStyle CssClass="Equi_Srv_Name gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtEqui_Srv_Name" runat="server" Text='<%# Eval("EQUI_SERVICE_NAME")%>'
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="HCPer%">
                        <HeaderStyle CssClass="HCPER ghcdisc" />
                        <ItemStyle CssClass="HCPER ghcdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txthcPer" onblur="return CalConcessionAmount('P');" runat="server"
                                Text='<%# Eval("HCPER")%>' CssClass="Aright" Enabled="false" Style="display: none"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="HcAmt">
                        <HeaderStyle CssClass="HCAMT ghcdisc" />
                        <ItemStyle CssClass="HCAMT ghcdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtHcAmt" runat="server" Text='<%# Eval("HCAMT")%>' CssClass="Aright"
                                Enabled="false" Style="display: none"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="MgPer%">
                        <HeaderStyle CssClass="MGPER gmgdisc" />
                        <ItemStyle CssClass="MGPER gmgdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtmaPer" onkeyup="return OnPatDiscPcntChange(this,'MG');" runat="server"
                                Text='<%# Eval("MGPER")%>' CssClass="Aright" Enabled="false" onblur="return OnPatDiscPcntChange(this,'MG');"
                                Style="display: none"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="MgAmt">
                        <HeaderStyle CssClass="MGAMT gmgdisc" />
                        <ItemStyle CssClass="MGAMT gmgdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtmgAmt" runat="server" onkeyup="return OnPatAmtChange(this,'MG');"
                                Text='<%# Eval("MGAMT")%>' CssClass="Aright" Enabled="false" onblur="return OnPatAmtChange(this,'MG');"
                                Style="display: none"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="StafPer%">
                        <HeaderStyle CssClass="STAFPER gstdisc" />
                        <ItemStyle CssClass="STAFPER gstdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtstPer" onkeyup="return OnPatDiscPcntChange(this,'STAF');" runat="server"
                                Text='<%# Eval("STAFPER")%>' CssClass="Aright" Enabled="false" onblur="return OnPatDiscPcntChange(this,'STAF');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="StAmt">
                        <HeaderStyle CssClass="STAMT gstdisc" />
                        <ItemStyle CssClass="STAMT gstdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtstAmt" runat="server" onkeyup="return OnPatAmtChange(this,'STAF');"
                                Text='<%# Eval("STAMT")%>' CssClass="Aright" Enabled="false" onblur="return OnPatAmtChange(this,'STAF');"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="EBPer%">
                        <HeaderStyle CssClass="EBPER gevdisc" />
                        <ItemStyle CssClass="EBPER gevdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtebPer" onblur="return CalConcessionAmount('P');" runat="server"
                                Text='<%# Eval("EBPER")%>' CssClass="Aright" Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="EbAmt">
                        <HeaderStyle CssClass="EBAMT gevdisc" />
                        <ItemStyle CssClass="EBAMT gevdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtebAmt" Enabled="false" runat="server" Text='<%# Eval("EBAMT")%>'
                                CssClass="Aright"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Cncrlper%">
                        <HeaderStyle CssClass="CNCRLPER gcrdisc" />
                        <ItemStyle CssClass="CNCRLPER gcrdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtRulePer" onblur="return CalConcessionAmount('P');" runat="server"
                                Text='<%# Eval("RULPER")%>' CssClass="Aright" Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Cncrlamt">
                        <HeaderStyle CssClass="CNCRLAMT gcrdisc" />
                        <ItemStyle CssClass="CNCRLAMT gcrdisc" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtcncrlAmt" runat="server" Text='<%# Eval("RULAMT")%>' CssClass="Aright"
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Remarks">
                        <HeaderStyle CssClass="remarks" />
                        <ItemStyle CssClass="remarks" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtremks" runat="server" Text='<%# Eval("REMARKS")%>' CssClass="Aright"></asp:TextBox>
                            <asp:HiddenField ID="hdnIsRemarks_Mandatory" runat="server" Value='<%#Eval("IS_REMARKS_MANDATORY")%>' />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Tax%">
                        <HeaderStyle CssClass="taxper patient" />
                        <ItemStyle CssClass="taxper patient" />
                        <ItemTemplate>
                            <asp:TextBox ID="txttaxper" runat="server" Text='<%# Eval("TAX_PCT")%>' CssClass="Aright"
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="P Tax">
                        <HeaderStyle CssClass="pattax patient" />
                        <ItemStyle CssClass="pattax patient" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtptax" runat="server" CssClass="Aright" Text='<%# Eval("EMP_TAX_AMT")%>'
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="C Tax">
                        <HeaderStyle CssClass="cmptax gcompany" />
                        <ItemStyle CssClass="cmptax gcompany" />
                        <ItemTemplate>
                            <asp:TextBox ID="txtcmptax" runat="server" CssClass="Aright" Text='<%# Eval("CMP_TAX_AMT")%>'
                                Enabled="false"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
    </div>
    <div class="panel-body">
        <div id="DivRadSrvdrprtpy" style="float: left;">
            <asp:RadioButtonList ID="rbtnsrv_Wise_And_Group_Type" runat="server" onchange="Line_or_Group_Change();"
                RepeatDirection="Horizontal" CssClass="chk-list1">
                <asp:ListItem Value="1" Text="Line Wise Disc" Selected="True"></asp:ListItem>
                <asp:ListItem Value="2" Text="Service Group/Type Wise Disc"></asp:ListItem>
            </asp:RadioButtonList>
        </div>
        <div id="DivSrvGrpCncn" style="float: left; margin-left: 3px; margin-top: 0px;">
            <input type="button" id="chkSrvGrpCncn" value="Service Group/Type Wise Concession"
                class="button" style="float: right; margin-top: 4px !important; margin-right: 4px !important;
                padding: 1px 4px;" onclick="return ShowServiceGrp(this);" />
        </div>
        <div style="float: left; margin-top: 4px;">
            <label style="float: left; padding: 1px 4px 0 19px;">
                Reports Dispatch To :
            </label>
            <asp:DropDownList ID="divrptDispatch" runat="server" Style="float: left;" Width="110px">
            </asp:DropDownList>
        </div>
    </div>
    <%-- <div class="tooltip-templates">
                        <div id="tooltip_content">
                        <table>
                        <thead><tr><th>name</th><th>Amt</th></tr></thead>
                        <tbody><tr><td>Swetha</td><td>200</td></tr></tbody>
                        </table>
                        </div>
                        </div>--%>
</div>
<div>
    <div id="divlist" style="width: 600px; display: none" class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 600px; height: 200px; margin-left: -300px;
            margin-top: -200px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="Label2" runat="server" Text="Insurance Details"></asp:Label>
                </h1>
                <asp:Button ID="Button1" runat="server" CssClass="cbutton" Text="&times;" OnClientClick="return CloseInsConPopUp();" />
            </div>
            <div class="pop-body grd" style="height: 366px;">
                <div id="divtagList" class=" divscroll" style="height: 330px; overflow: auto;">
                </div>
            </div>
        </div>
    </div>
    <div id="divpasdetails" style="width: 263px; display: none" class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 425px; height: 200px; margin-left: -243px;
            margin-top: -163px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="Label3" runat="server" Text="Mapping Details"></asp:Label>
                </h1>
                <asp:Button ID="Button2" runat="server" CssClass="cbutton" Text="&times;" OnClientClick="return CloseInspasdtlsPopUp();" />
            </div>
            <div class="pop-body grd" style="height: 120px;">
                <div id="div4" class=" divscroll" style="height: 150px; overflow: auto;">
                </div>
            </div>
        </div>
    </div>
    <asp:Panel ID="PanelSrvsLup" Style="display: none" runat="server" class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 720px; height: 420px; margin-left: -360px;
            margin-top: -214px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblSrvsN" runat="server" Text="Services/Consultations"></asp:Label>
                </h1>
                <asp:Button ID="btnSrvsConsCancel" runat="server" CssClass="cbutton" Text="&times;"
                    OnClientClick="return CloseServicesPopUp();" />
            </div>
            <div class="pop-body grd" style="height: 383px;">
                <div id="divSrvsCons" class="divscroll" style="height: 350px; overflow: auto;">
                </div>
            </div>
        </div>
    </asp:Panel>
    <asp:Panel ID="PnlPkgConsultations" Width="600px" Style="display: none" runat="server"
        class="masking">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 600px; height: 200px; margin-left: -300px;
            margin-top: -200px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblpkgcon" runat="server" Text="Doctors"></asp:Label>
                </h1>
                <asp:Button ID="btpkgcon" runat="server" CssClass="cbutton" Text="&times;" OnClientClick="return ClosePkgConPopUp();" />
            </div>
            <div class="pop-body grd" style="height: 366px;">
                <div id="divPackageConsultations" class=" divscroll" style="height: 330px; overflow: auto;">
                </div>
            </div>
        </div>
    </asp:Panel>
    <asp:Panel ID="pnlPre_Cau_On_Srv" runat="server" class="masking" Style="display: none;">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 400px; height: 240px; margin-left: -200px;
            margin-top: -120px;">
            <div class="pop-header">
                <h1>
                    PreRequisition History
                </h1>
                <asp:Button ID="btnReqClosing" runat="server" OnClientClick="return ClosePrerequestPopup();"
                    CssClass="cbutton" Text="&times;" />
            </div>
            <div class="pop-body" style="height: 200px; padding: 20px; overflow: auto;">
                <div style="padding-bottom: 10px;">
                    <h1 style="margin: 0px; padding: 0px; font-size: 15px;">
                        <asp:Label ID="lblprereqhistory" runat="server"></asp:Label></h1>
                </div>
                <div style="padding-bottom: 10px;">
                    <asp:Label ID="lblhistorycol" runat="server" Style="display: block;"></asp:Label>
                </div>
            </div>
        </div>
    </asp:Panel>
    <asp:Panel ID="pnlHistype" runat="server" class="masking" Style="display: none;">
        <div class="cmask">
        </div>
        <div id="divHisttype" class="clientpopup" style="width: 400px; height: 250px; margin-left: -200px;
            margin-top: -125px; display: block;">
            <div class="pop-header">
                <h1>
                    History Type
                </h1>
                <asp:Button ID="btnhisclose" CssClass="cbutton" runat="server" OnClientClick="return closehipopup();"
                    Text="&times;" />
                <input type="submit" id="lnksave" value="save" style="width: 60px" onclick="return SaveClosehistypePopup();" />
            </div>
            <div class="pop-body">
                <table border="0" cellpadding="0" cellspacing="7" width="100%" class="FormsCtrl">
                    <tr>
                        <td align="left" width="130px">
                            <b>Service Name</b>
                        </td>
                        <td align="left">
                            <asp:Label ID="lblhisttype" runat="server"></asp:Label>
                        </td>
                    </tr>
                    <tr id="divClinicalHis">
                        <td align="left" width="130px">
                            History Type
                        </td>
                        <td align="left">
                            <asp:DropDownList ID="ddlclinical" runat="server" Width="95%" onchange="return BindMeditation();">
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr id="divMedications" style="display: none;">
                        <td align="left" width="130px">
                            <asp:Label ID="lblMedicatonText" runat="server" Text="Medication/Details"></asp:Label>
                        </td>
                        <td align="left" class="cal">
                            <div id="divMedic" runat="server">
                                <asp:DropDownList ID="ddlmeditation" runat="server" Width="95%">
                                </asp:DropDownList>
                            </div>
                            <div class="btntxt" id="divLmpCal" runat="server" style="display: none; width: 95%;">
                                <asp:TextBox ID="txtLmpCalander" runat="server" MaxLength="11" ToolTip="DD-MMM-YYYY"
                                    Style="border: 1px solid rgb(244, 120, 94);" autocomplete="off" onfocus="OnLostFoucs(this)"></asp:TextBox>
                                <div class="txt_btn">
                                    <asp:Button ID="BtnCalen" runat="server" CssClass="tb_Btn calendar" Text="&times;" />
                                </div>
                                <ajaxToolkit:CalendarExtender ID="CalendarExtender2" TargetControlID="txtLmpCalander"
                                    runat="server" CssClass="MyCalendar" PopupButtonID="BtnCalen" OnClientDateSelectionChanged="OnLmpChange"
                                    PopupPosition="TopLeft" Format="dd-MMM-yyyy">
                                </ajaxToolkit:CalendarExtender>
                            </div>
                            <div id="divOtherMedication" style="display: none; width: 95%;">
                                <asp:TextBox ID="txtOthrMedicText" runat="server"></asp:TextBox>
                            </div>
                        </td>
                    </tr>
                    <tr id="divDosage" style="display: none;">
                        <td align="left">
                            Dosage
                        </td>
                        <td align="left">
                            <asp:TextBox ID="txtDosage" runat="server" onkeypress="return numeralsOnly(event);"></asp:TextBox>
                        </td>
                    </tr>
                    <tr id="divChkTaken" style="display: none;">
                        <td align="left" width="130px">
                        </td>
                        <td align="left">
                            <asp:CheckBox ID="chkDosgeTaken" runat="server" Text="Taken Today" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </asp:Panel>
    <asp:Panel ID="pnlSrvSdul" runat="server" class="masking" Style="display: none;">
        <div class="cmask">
        </div>
        <div id="divSrvSdul" class="clientpopup" style="width: 500px; height: 311px; margin-left: -280px;
            margin-top: -192px; display: block;">
            <div class="pop-header    ">
                <asp:Button ID="btnSrvSdulclose" CssClass="cbutton" runat="server" OnClientClick="return SrvSdulclosehipopup();"
                    Text="&times;" />
                <input type="submit" id="btnSrvSdulSubmit" value="save" style="width: 60px" onclick="return SaveCloseSrvSdul();" />
            </div>
            <div class="pop-body">
                <div style="border-bottom: 1px solid #cacaca; padding-bottom: 5px;">
                    <table border="0" cellpadding="0" width="100%" class="FormsCtrl">
                        <tr>
                            <td>
                                Service Name
                            </td>
                            <td>
                                <asp:TextBox ID="txtSrvShdulServicename" runat="server" ReadOnly="true"></asp:TextBox>
                            </td>
                            <td>
                                Qty
                            </td>
                            <td>
                                <asp:TextBox ID="txtSrvSdulQty" runat="server" ReadOnly="true"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="divscroll" style="height: 390px; overflow: auto;">
                    <table id="tbl_SrvSdul" border="0" cellpadding="0" cellspacing="0" width="100%" class="FormsCtrl">
                    </table>
                    <div class="btntxt">
                        <div class="txtbtn">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </asp:Panel>
    <div class="masking" id="divLogdetails">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 90%; height: 500px; margin-left: -45%; margin-top: -250px;">
            <div class="pop-header">
                <h1>
                    History Details For :
                    <asp:Label ID="lblHPatName" runat="server" Style="color: Maroon;"></asp:Label>
                </h1>
                <h1>
                    UMR NO :
                    <asp:Label ID="lblHumrno" runat="server" Style="color: Maroon;"></asp:Label>
                </h1>
                <div style="display: none;" id="pattoken">
                    <h1 style="width: 269px;">
                        <label id='ibltkoen' style="padding-top: 1px;">
                            <span style="float: left;">Token No :</span> <span>
                                <asp:Label ID="ibltokenno" runat="server" Style="color: Maroon; display: none;"></asp:Label></span></label></h1>
                </div>
                <asp:Button buttonaction="cancelButton" ID="Button11" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return logcancel()" />
            </div>
            <div class="pop-body grd" style="height: 460px;">
                <div id="tbl_Hisdetails" style="overflow: auto; height: 410px" class="divscroll">
                </div>
            </div>
        </div>
    </div>
    <div class="masking" id="divOptional">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 50%; height: 50px; margin-left: -30%; margin-top: -250px;">
            <div class="pop-header">
                <h1>
                    Optional Services :
                    <asp:Label ID="Label1" runat="server" Style="color: Maroon;"></asp:Label>
                </h1>
                <asp:Button buttonaction="cancelButton" ID="btnoptionalclose" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return optionalclose();" />
                <asp:Button ID="btnoptionalok" runat="server" CssClass="cbutton" Text="OK" OnClientClick="return btnOkOptional();" />
            </div>
            <div class="pop-body grd" style="height: 460px;">
                <div id="Div3" style="overflow: auto; height: 410px" class="divscroll">
                    <table id="tbl_Optional" class="grid" cellspacing="0" cellpadding="0" style="border-width: 0px;
                        width: 100%; border-collapse: collapse;">
                        <body>
                            <th>
                            </th>
                            <th>
                                Sno
                            </th>
                            <th>
                                Service Name
                            </th>
                            <th>
                                Service Code
                            </th>
                            <th>
                                Service Group
                            </th>
                            <th>
                                Price
                            </th>
                        </body>
                    </table>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
    <%--<div class="pop-body grd" style="height: 460px;">
                <div id="div2" style="overflow: auto; height: 410px" class="divscroll">
                <table>
                <td>
                <asp:Label ID="Label2" runat="server"></asp:Label>
                </td>
                </table>
                </div>
            </div>--%>
    <div class="masking" id="divConsentFormDtls">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 784px; height: 1123px; margin-left: -28%;
            margin-top: -269px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblcntorguidetxt" runat="server"></asp:Label>
                    <asp:Label ID="lblConsentSrv" runat="server" Style="color: Maroon;"></asp:Label>
                </h1>
                <asp:Button buttonaction="cancelButton" ID="btnConsentFormClose" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return ConsentClose()" />
                <asp:Button ID="btnprintclick" runat="server" Text="Print" Style="width: 5%;" OnClientClick="return PrintClick()" />
            </div>
            <div class="pop-body grd" style="height: 460px;">
                <div id="divConsentFromTextDtls" style="overflow: auto; height: 410px" class="divscroll">
                    <table>
                        <td>
                            <asp:Label ID="lblCtxt" runat="server"></asp:Label>
                        </td>
                    </table>
                </div>
                <div id="divlang" class="corpfilterdata" style="float: left; display: block;">
                    <ul id="ulLang">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="masking" id="divSrvGrpForm">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 500px; height: 440px; margin-left: -280px;
            margin-top: -220px; display: block;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="lblsrvgrpcncsn" runat="server" Text="Service Group/Type Wise Concession"></asp:Label>
                </h1>
                <asp:Button ID="btngrpdiscclose" runat="server" CssClass="cbutton" Text="&times;"
                    OnClientClick="return SrvGrpClose()" />
                <asp:Button ID="btnSrvGrpOk" runat="server" Text="Ok" Style="width: 40px" OnClientClick="return SrvGrpClick()" />
            </div>
            <div class="pop-body grd divscroll" style="height: 400px;">
                <div style="border-bottom: 1px solid #cacaca; padding-bottom: 5px;">
                    <asp:RadioButtonList ID="Srv_Grp_Type_pcnt" RepeatColumns="2" runat="server" onchange="return typegroupchangeingevent();">
                        <asp:ListItem Selected="True" Value="1" Text="Service Group Wise Discount"></asp:ListItem>
                        <asp:ListItem Value="2" Text="Service Type Wise Discount"></asp:ListItem>
                    </asp:RadioButtonList>
                </div>
                <table id="tbl_SrvGrp" border="0" cellpadding="0" cellspacing="0" width="100%" class="grid">
                </table>
                <table id="tbl_srv_type" border="0" cellpadding="0" cellspacing="0" width="100%"
                    class="grid" style="display: none;">
                </table>
            </div>
            <div>
            </div>
        </div>
    </div>
    <div style="display: none; z-index: 999999; position: absolute;" class="modalBackground"
        id="newprogressbar">
        <div class="progressbar-container">
            <label id="message" style="position: absolute; top: -90%; left: 0%; font-weight: 900;
                color: blue; font-size: 18px;">
            </label>
            <div class="progressbar-bar">
            </div>
            <div class="progressbar-label">
            </div>
        </div>
    </div>
    <div style="display: none; z-index: 999999; position: absolute;" class="modalBackground"
        id="newprogressbar1">
        <div class="preloader">
            <img src="../../CompanyLogo/Brand_Logo.PNG" />
        </div>
        <div class="preloader2">
        </div>
    </div>
    <div class="masking" id="divimages" style="display: none;">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 750px; height: 437px; margin-left: -387px;
            margin-top: -225px; overflow: auto;">
            <div class="pop-header">
                <h1>
                    Image View
                </h1>
                <asp:Button buttonaction="cancelButton" ID="Button6" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return closeLangfiles();" />
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
    <div class="masking" id="divselfinv">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 90%; height: 500px; margin-left: -45%; margin-top: -250px;">
            <div class="pop-header">
                <h1>
                    Order Investigations
                </h1>
                <asp:Button buttonaction="cancelButton" ID="btncnclpinds" runat="server" CssClass="cbutton"
                    Text="&times;" OnClientClick="return selfinvcancel()" />
            </div>
            <div class="pop-body grd" style="height: 460px;">
                <div id="tbl_selfinv" style="overflow: auto; height: 410px" class="divscroll">
                </div>
            </div>
        </div>
    </div>
    <div class="masking" id="FavLst">
        <div class="cmask">
        </div>
        <div class="clientpopup" style="width: 45%; margin-left: -21%; margin-top: -248px;">
            <div class="pop-header">
                <h1>
                    <asp:Label ID="Label4" runat="server" Text="Favourites List"></asp:Label>
                </h1>
                <input type="button" value="x" class="button" onclick="return CloseFavlst();" />
                <input type="button" value="OK" class="button" onclick="return fn_AssignFavs();" />
            </div>
            <div class="pop-body grd" style="height: 430px;">
                <div id="tbl_Favourites" style="height: 370px !important; overflow: auto; display: block;"
                    class="divscroll">
                </div>
            </div>
        </div>
    </div>
    <div style="display: none;">
        <div class="scwidth">
        </div>
        <asp:HiddenField ID="hdnBillType" runat="server" />
        <asp:HiddenField ID="hdnPkgSrvs" runat="server" />
        <asp:HiddenField ID="hdnRowIndex" runat="server" />
        <asp:HiddenField ID="hdnRowGenCd" runat="server" />
        <asp:HiddenField ID="hdnRowIndexValue" runat="server" />
        <asp:HiddenField ID="hdnSrvFormName" runat="server" />
        <asp:HiddenField ID="hdnReg_fee" runat="server" />
        <asp:HiddenField ID="hdnGenderID" runat="server" />
        <asp:HiddenField ID="hdnCorpPat" runat="server" />
        <asp:HiddenField ID="hdnPrePrintedBarcodeReq" runat="server" />
        <asp:HiddenField ID="ddlPatientType" runat="server" />
        <asp:HiddenField ID="hdnGender_ID" runat="server" />
        <asp:HiddenField ID="hdnOptions" runat="server" />
        <asp:HiddenField ID="hdnPat_Age" runat="server" />
        <asp:HiddenField ID="hdnIsAllowCncn" runat="server" />
        <asp:HiddenField ID="HdnUserWiseConce" runat="server" />
        <asp:HiddenField ID="hdnUserWiseDuePcnt" runat="server" />
        <asp:HiddenField ID="hdnAllowOutSideConcs" runat="server" />
        <asp:HiddenField ID="hdnEmergencySlot1" runat="server" />
        <asp:HiddenField ID="hdnEmergencySlot2" runat="server" />
        <asp:HiddenField ID="hdnEmergencySlot3" runat="server" />
        <asp:HiddenField ID="hdnEmerFlagTime" runat="server" />
        <asp:HiddenField ID="hdnCon_In_Op" runat="server" />
        <asp:HiddenField ID="hdnNew_Born_Pcnt" runat="server" />
        <asp:HiddenField ID="hdnCompanyCrdLmt" runat="server" />
        <asp:HiddenField ID="hdnOPCreditLmt" runat="server" />
        <asp:HiddenField ID="hdnCasulity" runat="server" />
        <asp:HiddenField ID="hdnTotalCasulAmt" runat="server" />
        <asp:HiddenField ID="hdnViewHcPer" runat="server" />
        <asp:HiddenField ID="hdnViewHcAmnt" runat="server" />
        <asp:HiddenField ID="hdnViewMGPer" runat="server" />
        <asp:HiddenField ID="hdnViewMGAmnt" runat="server" />
        <asp:HiddenField ID="hdnViewSTPer" runat="server" />
        <asp:HiddenField ID="hdnViewSTAmnt" runat="server" />
        <asp:HiddenField ID="hdnViewEBPer" runat="server" />
        <asp:HiddenField ID="hdnViewEBAmnt" runat="server" />
        <asp:HiddenField ID="hdnViewRUPer" runat="server" />
        <asp:HiddenField ID="hdnViewRUAmnt" runat="server" />
        <asp:HiddenField ID="hdnSrvGenderId" runat="server" />
        <asp:HiddenField ID="hdnSrvFDays" runat="server" />
        <asp:HiddenField ID="hdnSrvTDays" runat="server" />
        <asp:HiddenField ID="hdnSelection" runat="server" />
        <asp:HiddenField ID="hdnassay_com_config" runat="server" />
        <asp:HiddenField ID="hdnhcdiscsts" runat="server" />
        <asp:HiddenField ID="hdnRegFeeAutoFill" runat="server" />
        <asp:HiddenField ID="hdncrd_ltd_indx" runat="server" />
        <asp:HiddenField ID="hdncrd_ltd_post" runat="server" />
        <asp:HiddenField ID="hdnRemoveSrv" runat="server" />
        <asp:HiddenField ID="hdnPkgConsToOSP" runat="server" />
        <asp:HiddenField ID="hdnGIsRegInclude" runat="server" />
        <asp:HiddenField ID="hdnpkgincdlt" runat="server" />
        <asp:HiddenField ID="hdnConsentFmdt" runat="server" />
        <asp:HiddenField ID="hdnopt_srv_cnt" runat="server" />
        <asp:HiddenField ID="hdnPkgConsCharges" runat="server" />
        <asp:HiddenField ID="hdnpkg_print_req" runat="server" />
        <asp:HiddenField ID="hdnRegReqFee" runat="server" />
        <asp:HiddenField ID="hdnRemarks" runat="server" />
        <asp:HiddenField ID="hdnisadditinal" runat="server" />
        <asp:HiddenField ID="hdnsrvqtyCompany" runat="server" />
        <asp:HiddenField ID="hdnDoctrPasNo" runat="server" />
        <asp:HiddenField ID="hdnfoodandbev" runat="server" />
        <asp:HiddenField ID="hdnsrvgrp_type_con" runat="server" />
        <asp:HiddenField ID="hdnEmrMigID" runat="server" />
        <asp:HiddenField ID="hdnisdoctorrequired" runat="server" />
        <asp:HiddenField ID="hdnIsCnsltReqFrSrvPsting" runat="server" />
        <asp:HiddenField ID="hdnisschedulerequired" runat="server" />
        <asp:HiddenField ID="hdnOrgPrice" runat="server" />
        <asp:HiddenField ID="hdnDoctorPrice" runat="server" />
        <asp:HiddenField ID="hdnOrgPct" runat="server" />
        <asp:HiddenField ID="hdnDoctorPct" runat="server" />
        <asp:HiddenField ID="hdnallowtestforbill" runat="server" />
        <asp:HiddenField ID="hdnallowpndg" runat="server" />
        <asp:HiddenField ID="hdnsrvpriceID" runat="server" />
        <asp:HiddenField ID="hdnallowtariffslcn" runat="server" />
        <asp:HiddenField ID="hdnforeigncatid" runat="server" />
        <asp:HiddenField ID="hdnallowconsservice" runat="server" />
        <asp:HiddenField ID="hdnconssrvID" runat="server" />
        <asp:HiddenField ID="hdnIS_MCI" runat="server" />
        <asp:HiddenField ID="hdnpatcatpolicy" runat="server" />
        <asp:HiddenField ID="hdnStarIndex" runat="server" />
        <asp:HiddenField ID="hdnisallowgst" runat="server" />
        <asp:HiddenField ID="hbnsearchsrvaspertariff" runat="server" />
        <asp:HiddenField ID="hdnsrvpricereq" runat="server" />
        <asp:HiddenField ID="hbnisshowpatcatagery" runat="server" />
        <asp:HiddenField ID="hdnIS_MCI_default" runat="server" />
        <asp:HiddenField ID="hdnconruleid" runat="server" />
        <asp:HiddenField ID="hdnconrulename" runat="server" />
        <asp:HiddenField ID="hdnconruledefindbyid" runat="server" />
        <asp:HiddenField ID="hdnpatienttokenno" runat="server" />
        <asp:HiddenField ID="hdnAllowFutureDateAppointments" runat="server" />
        <asp:HiddenField ID="hdndoctorunits" runat="server" />
        <asp:HiddenField ID="hdnDoctorDepartment" runat="server" />
    </div>
    <script type="text/javascript">

        function BindSelfInvData() {

            var isselfinv = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnselfinves').value;

            var form_name = $('#' + ctrlcom + '_UCServices_hdnSrvFormName').val();
            if (form_name == 'OP' || form_name == 'Cons') {
                var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
                if (umr_no == '') {
                    $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
                    return false;
                }

                if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
                    $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                    $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
                    return false;
                }
                if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
                    if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                        $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                        return false;
                    }
                }

                var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                if (hdnallowtariffslcn == 'true') {

                    var pat_type = '';
                    if (form_name == 'OP' || form_name == 'Cons') {
                        pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                    }

                    if (pat_type == 1) {
                        var PatientCategory = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
                        if (PatientCategory == undefined || PatientCategory == null || PatientCategory == '' || PatientCategory == '--select--' || PatientCategory == '0') {
                            $(".stoast").toastText("warning", "Please Select Patient Category", 5, 3);
                            return false;

                        }
                        var taiff_id = document.getElementById('' + ctrlcom + '_UCServices_ddltariff').value;
                        if (taiff_id == undefined || taiff_id == null || taiff_id == '' || taiff_id == '--select--' || taiff_id == '0') {
                            $(".stoast").toastText("warning", "Please Select Tariff", 5, 3);
                            $(".stoast").toastText("warning", "Sorry  No Tariff Mapped To This Patient Category", 5, 2);
                            return false;
                        }
                    }
                }

            }
            else if (form_name == 'OPQUICK') {
                if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                    var umr_no = $('#' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val();
                    if (umr_no == '') {
                        $(".stoast").toastText("warning", "Please select UMR#!.", 5, 3);
                        return false;
                    }
                    if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '0' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '' || $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == null) {
                        $(".stoast").toastText("warning", "Please Select Payment Type", 5, 3);
                        $('#' + ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                        return false;
                    }
                    if ($('#' + ctrlcom + '_uccorporate_ddlPaymentBy').val() == '2') {
                        if ($('#' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').val() == '') {
                            $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                            return false;
                        }
                    }
                }
                else {
                    var pat_type = $('#' + ctrlcom + '_ddlPatientType').val();
                    if (pat_type == 2 || pat_type == 5 || pat_type == 7 || pat_type == 10) {
                        if ($('#' + ctrlcom + '_EmployerInfo1_uctpa_txtSearchControl').val() == '') {
                            $(".stoast").toastText("warning", "Please Select Company/TPA", 5, 3);
                            return false;
                        }

                    }

                }
                var hdnallowtariffslcn = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                if (hdnallowtariffslcn == 'true') {

                    var pat_type = '';
                    if (form_name == 'OPQUICK') {
                        if (document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                            pat_type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
                        }
                        else {
                            pat_type = document.getElementById('' + ctrlcom + '_ddlPatientType').value;
                        }
                    }
                    if (pat_type == 1) {
                        var PatientCategory = document.getElementById('' + ctrlcom + '_UCServices_ddlpatcat').value;
                        if (PatientCategory == undefined || PatientCategory == null || PatientCategory == '' || PatientCategory == '--select--' || PatientCategory == '0') {
                            $(".stoast").toastText("warning", "Please Select Patient Category", 5, 3);
                            return false;

                        }
                        var taiff_id = document.getElementById('' + ctrlcom + '_UCServices_ddltariff').value;
                        if (taiff_id == undefined || taiff_id == null || taiff_id == '' || taiff_id == '--select--' || taiff_id == '0') {
                            $(".stoast").toastText("warning", "Please Select Tariff", 5, 3);
                            $(".stoast").toastText("warning", "Sorry  No Tariff Mapped To This Patient Category", 5, 2);
                            return false;
                        }
                    }
                }

            }
            if (isselfinv != 'Y') {
                $(".stoast").toastText("warning", "This patient don't have any Order investigations....!", 5, 3);
                return false;
            }
            else {
                var gridControl;
                var _admnno = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnucadmnno').value;
                var _umrno = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;

                var cName = ''; var pText = '';
                var param = param || {};
                param.pageSize = 10;
                param.pageNum = 1;
                param.dataKey = "IND_ID";
                param.defaultWSParams = { _cName: cName, _pText: pText, admnno: _admnno, _advSrch: '', umrno: _umrno };
                param.wsPath = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GetPrevIndents";
                param.wsFilterPath = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GetPrevIndents";
                param.template = ["IND_NO*IND_NO"
                            , "IND_DT*CREATE_DT"
                            , "CNSLTSN_NAME*CNSLTSN_NAME"
                            , "ORDERED_BY*ORDERED_BY"
                            , "IS_SELF_INVESTIGATION*IS_SELF_INVESTIGATION"];
                param.header = [{ col: "Indent#", sort: false, filter: true }
                    , { col: "Indent Dt", sort: false, filter: false }
                    , { col: "Doctor Name", sort: false, filter: false }
                    , { col: "Order By", sort: false, filter: false }
                    , { col: "Order Investigation", sort: false, filter: false}];
                param.enablePaging = true;
                param.enableTrace = false;
                param.enableFilter = true;
                param.enableCheckbox = true;
                param.enableSorting = true;
                param.tableTemplate = true;
                param.RowNo = true; param.tableTemplate = true;
                param.enableDMS = false;
                param.checkboxClick = getClickedIndServices;
                param.RowDataBinding = function (rowitem, _data) {
                    $('.ajaxTablecheckboxalltbl_selfinv').css('display', 'none')
                    var obj = $(rowitem);
                    obj.find("td").each(function (i, j) {
                    });

                    return obj[0].outerHTML;
                };

                param.treeCallBack = function (me) {

                    var _pk = $(me).data("key");
                    var _tr = $(me);
                    var _ajax = "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/GetFirstChild1";
                    BuildChildTree({ id: _pk, admnno: _admnno, umrno: _umrno }, _tr, "IND_ID", _ajax, {
                        SERVICE_NAME: "Service Name",
                        SERVICE_TYPE_NAME: "Service Type",
                        QUANTITY: "Quantity",
                        SPECIMEN_NAME: "Specimen",
                        VACCUTAINER_NAME: "Vaccutainer",
                        ACCEPTED_BY: "Done By",
                        ACCEPTED_DT: "Done Dt",
                        STATUS: "Bill Status",
                        RECORD_STATUS: "Record Status",
                        REASON: "Reason"
                    }, 1, false
                 );
                };
                gridControl = $("#tbl_selfinv").jMtable(param);
                $("#divselfinv").show();
                return false;
            }
        }
        function BuildChildTree(dataKey, eventObject, targetID, AJAXURL, bindColumns, level, Child, callBack) {
            var _tr = "";
            var _colcount = eventObject.parent().parent().find("td").length - 1;
            var _pk = eventObject.data("key");

            if (document.getElementById("tr_" + level + "_" + _pk) != null) {
                $("#tr_" + level + "_" + _pk).slideToggle();
            }
            else {
                ReturnAsync(
                 AJAXURL
                , dataKey
                , function (JData) {
                    _tr += "<tr id=\"tr_" + level + "_" + _pk + "\"><td>&nbsp;</td><td colspan=\"" + _colcount + "\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"childtbl\" width=\"100%\"><thead><tr>";

                    if (Child)
                        _tr += "<th>&nbsp;</th>";
                    for (var _j in bindColumns) {
                        _tr += "<th name='col" + _j + "'>" + bindColumns[_j] + "</th>";
                    }
                    _tr += "</tr></thead><tbody>";
                    if (JData.d != null) {
                        $(JData.d[0]).each(function (i, j) {
                            _tr += "<tr>";
                            if (Child)
                                _tr += "<td><input type=\"button\" class='ajaxlevel_" + (level + 1) + "_click'  data-key='" + j[targetID] + "' value=\"+\" /></td>";

                            for (var _j in bindColumns) {
                                if (j[_j] == "A") { _tr += "<td>ACTIVE</td>"; }
                                else if (j[_j] == "C") { _tr += "<td>CANCELLED</td>"; }
                                else _tr += "<td name='col" + _j + "'>" + j[_j] + "</td>";
                            }
                            _tr += "</tr>";
                        });
                    }
                    eventObject.parent().parent().after(_tr);
                    if (typeof callBack === "function") {
                        callBack();
                    }
                }
                , function (jqXHR, textStatus, errorThrown) {
                    console.log("Check the Functionality");
                });
            }
        }
        function selfinvcancel() {
            $("#divselfinv").hide();
            return false;
        }
        $(document).ready(function () {
            if (document.getElementById('<%=hdnSrvFormName.ClientID %>').value == 'OP') {
                $('.tooltip').tooltipster({
                    theme: 'tooltipster-shadow',
                    contentClonig: true,
                    maxWidth: 350
                });
            }
            setTimeout(function () {
            }, 2000);
            //$("#maindotornames").css('overflow','auto');
            $("#DivGrid_Body").scroll(function () {
                //$("#maindotornames").css('overflow', 'hidden');
                $("#DivGrid_Header").scrollLeft($(this).scrollLeft());
            });

            //            var data_grid = $("#"+ ctrlcom + "_UCServices_gvServices").height();
            //            var data_div = $("#DivGrid_Body").height();
            //            if (data_grid >= data_div) {
            //                $("#DivGrid_Header").width($("#DivGrid_Header").width() - getScrollBarWidth());
            //            }
            //            else {
            //               // $("#DivGrid_Header").width($("#DivGrid_Header").width());
            //            }
            //$("#DivGrid_Header").width($("#DivGrid_Header").width() - getScrollBarWidth());00
            var _qrystr = '<%=Request.QueryString["MODE"] %>';
            if (!($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true' && document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK')) {
                if (_qrystr != 'VIEW' && _qrystr != 'VIEW_OP')
                    $('.allowMTariff').hide(); /*Tariff selection in op*/
            }
        });
        function onAgeCapturing() {
            if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OP') {
                if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked == true) {
                    document.getElementById('' + ctrlcom + '_UCServices_hdnPat_Age').value = document.getElementById('' + ctrlcom + '_newAgeUc_txtYear').value;
                }
            }
        }
        $(document).ready(function () {
            if ($('[id*=hdnallowtariffslcn]').val().toLowerCase() == 'true') {
                if (document.getElementById('' + ctrlcom + '_UCServices_hbnsearchsrvaspertariff').value.toUpperCase() == "YES") {


                    if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'Cons') {
                        document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').checked = false;
                        document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').disabled = true;
                    }

                    else if (document.getElementById('' + ctrlcom + '_UCServices_hdnSrvFormName').value == 'OPQUICK') {
                        if (document.getElementById('' + ctrlcom + '_UCServices_rbtnSrvsAndCons_0').checked == true) {
                            document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').checked = false;
                            document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').disabled = true;
                        }
                    }
                    else {
                        document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').checked = true;
                        document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').disabled = false;
                    }
                }
                else {
                    document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').checked = false;
                    document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').disabled = true;

                }
            }
            else {
                document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').checked = false;
                document.getElementById('' + ctrlcom + '_UCServices_chkisservicename').disabled = true;

                //                $('[id*=ctl00_ContentPlaceHolder1_UCServices_lblsearchas]')[0].style.display = 'none';
                //                $('[id*=ctl00_ContentPlaceHolder1_UCServices_chkisservicename]')[0].style.display = 'none';


            }
        });
        function checkservicename() {
            ServicesAutoContextKey();

        }

        function tariffchange() {

            var pattariff_id = $('#<%=ddltariff.ClientID %>').val();
            var resulttariff_id = '';
            var _count = 0;
            if (pattariff_id == null || pattariff_id == undefined || pattariff_id == '' || pattariff_id == '--Select--') { pattariff_id = 0; }
            if (pattariff_id == 0) {
                $(".stoast").toastText("warning", "System should not allow to change patient Tariff as select,other wise its changes to Default Patient Category!.", 5, 3);
                $('#<%=ddltariff.ClientID %>').val($('#<%=ddltariff.ClientID %> option:eq(1)').val());
            }
            $("table[id*=UCServices_gvServices] tr:has(td)").each(function () {
                var srv_name = $(this).closest('tr').find('input[type=text][id*=txtServiceName]').val();
                var _pat_tariff_id = $(this).closest('tr').find('input[type=hidden][id*=hdnTariffId]').val();
                if (_pat_tariff_id == null || _pat_tariff_id == undefined || _pat_tariff_id == '' || _pat_tariff_id == 'undefined') { _pat_tariff_id = 0; }
                if (pattariff_id != _pat_tariff_id && srv_name != 'REGISTRATION') {
                    resulttariff_id = _pat_tariff_id;
                    _count = 1;
                }
            });
            if (_count == 1) {
                $(".stoast").toastText("warning", "System should not allow to change patient tariff after posting service/doctor,delete the service/doctor and post it again!.", 5, 3);
                // $('#<%=ddlpatcat.ClientID %>').val(0);
                // var policy_pat_cat=$('[id*=hdnpatcatpolicy]').val();
                $('#<%=ddltariff.ClientID %>').val(resulttariff_id);
                //patcat_id = resulttariff_id;
            }
            if (patientcategeoryarray.d[0] != '') {

                for (i = 0; i < patientcategeoryarray.d[0].length; i++) {

                    if (patientcategeoryarray.d[0][i].TARIFF_ID == $('#<%=ddltariff.ClientID %>').val()) {
                        if (patientcategeoryarray.d[0][i].RULE_ID == undefined || patientcategeoryarray.d[0][i].RULE_ID == null || patientcategeoryarray.d[0][i].RULE_ID == '')
                        { patientcategeoryarray.d[0][i].RULE_ID = 0; }
                        $('#' + ctrlcom + '_UCServices_hdnconruleid').val(patientcategeoryarray.d[0][i].RULE_ID);

                        if (patientcategeoryarray.d[0][i].CNCSN_RULE_NAME == undefined || patientcategeoryarray.d[0][i].CNCSN_RULE_NAME == null || patientcategeoryarray.d[0][i].CNCSN_RULE_NAME == 'undefined')
                        { patientcategeoryarray.d[0][i].CNCSN_RULE_NAME = ''; }
                        $('#' + ctrlcom + '_UCServices_hdnconrulename').val(patientcategeoryarray.d[0][i].CNCSN_RULE_NAME);
                        if (patientcategeoryarray.d[0][i].DEFINE_BY_ID == undefined || patientcategeoryarray.d[0][i].DEFINE_BY_ID == null || patientcategeoryarray.d[0][i].DEFINE_BY_ID == '')
                        { patientcategeoryarray.d[0][i].DEFINE_BY_ID = 0; }
                        $('#' + ctrlcom + '_UCServices_hdnconruledefindbyid').val(patientcategeoryarray.d[0][i].DEFINE_BY_ID);
                    }

                    if ($('#' + ctrlcom + '_UCServices_hdnconruleid').val() > 0) {
                        $('.gcrdisc').show();
                    }
                    else {
                        $('.gcrdisc').hide();
                    }

                }
            }
        }

        

    </script>
