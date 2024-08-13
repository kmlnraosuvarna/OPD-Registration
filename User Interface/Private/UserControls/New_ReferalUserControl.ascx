<%@ Control Language="C#" AutoEventWireup="true" CodeFile="New_ReferalUserControl.ascx.cs"
    Inherits="Private_UserControls_New_ReferalUserControl" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="Search" TagPrefix="Lookup" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<script type="text/javascript">
var ctrlcom = 'ctl00_ContentPlaceHolder1';
    function cleardata() {
        var sel_ref = $('#'+ ctrlcom + '_ucReferal_ddlreferral').val();
        if (sel_ref != 1) {
            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = "";
            document.getElementById('' + ctrlcom + '_ucReferal_ddlRefClass').value = 0;
            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = "";
            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = "";
        }
    }
    function OnEmrgncy(id) {
        var doc_name = $('#<%=hdndocname.ClientID %>').val();
        if (doc_name != "REG" && $('#'+ ctrlcom + '_ddlRegType').val() != 5 && doc_name != "ER") {
            if (doc_name == 'Cons') {
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == null || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == undefined) {
                    $('#<%=ddlreferral.ClientID %>').val('0');
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                    $(".stoast").toastText("warning", "Please Select UMR No ", 5, 3);
                    return false;
                }
            }
            if (doc_name == 'OP') {
                if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value == '') {
                    if (document.getElementById('' + ctrlcom + '_chkIsOsp').checked) { }
                    else {
                        if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == null || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == undefined) {
                            $('#<%=ddlreferral.ClientID %>').val('0');
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                            $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                            $(".stoast").toastText("warning", "Please Select UMR No ", 5, 3);
                            return false;
                        }
                    }
                }
                else if (document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value == 'N') {
                    if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == '' || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == null || document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value == undefined) {
                        $('#<%=ddlreferral.ClientID %>').val('0');
                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                        $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                        $(".stoast").toastText("warning", "Please Select UMR No ", 5, 3);
                        return false;
                    }
                }
            }
            OnNullValue(id);
        }
    }
    function onRefSelection(obj) {
     if(document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').value==0)
     {
         $(".stoast").toastText("Warning", "Please Select Referral type", 5, 3);
                     return false;
     }
     
        focus = 'N';
        if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "REG" && GlobalMyAddress1 != "") {
            CheckPatAddress(obj);
        }
        else if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "Cons" || document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "OP" || document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "OPQUICK") {
            CheckPatAddress(obj);
        }
        else {
            OnSuccessPatAddr(obj);
        }
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>');
        referalvalidation(Name);
    }
    function chkHHsms(){
        var HH =document.getElementById('<%=txtshh.ClientID%>').value;
        var MM =document.getElementById('<%=txtsmm.ClientID%>').value;
        var SS =document.getElementById('<%=txtsss.ClientID%>').value;

            if(parseInt(HH)>23){
                $(".stoast").toastText("warning", "Please enter time below 24 hours!", 5, 3);
               document.getElementById('<%=txtshh.ClientID%>').value;
                return false;
            }
            if(parseInt(MM)>59){
                $(".stoast").toastText("warning", "Please enter time below 59 minutes!", 5, 3);
               document.getElementById('<%=txtsmm.ClientID%>').value;
                 return false;
            }
            if(parseInt(SS)>59){
                $(".stoast").toastText("warning", "Please Enter bellow 59 Seconds", 5, 3);
                document.getElementById('<%=txtsss.ClientID%>').value;
                 return false;
            }
        } 
    function onremarks() {
        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        Name = $('#<%=ucreferalname.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var Ref_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value;
        var Refrl_class_id = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value;
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = '0';
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')        
        { Cat_type_id = 0; }
        var smsdate ="";
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
       var smstime = new Date().format('HH:mm:ss');
      if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
     }
     else {
          smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      
        if(chksms=="Y"){
         smsDt =new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;;
        }
        else{
        smsDt="";
        }
        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {isRefdtlschng1='Y';
         if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id=myMultiDatar1[0].pat_rfrl_dtl_id;
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks.toUpperCase(), Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
         if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar2[0].pat_rfrl_dtl_id;
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks.toUpperCase(), Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks.toUpperCase(), Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks.toUpperCase(), Cat_type_id,smsDt);
        }
    }
    function clicksms() {

        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        Name = $('#<%=ucreferalname.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var Ref_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value;
        var Refrl_class_id = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value;
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = '0';
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
        { Cat_type_id = 0; }
       
         var smsdate ="";
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
       var smstime = new Date().format('HH:mm:ss');
      if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
     }
     else {
          smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      
        if(chksms=="Y"){
         smsDt =new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;;
        }
        else{
        smsDt="";
        }

        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {isRefdtlschng1='Y';
            if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar1[0].pat_rfrl_dtl_id;
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
            if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar2[0].pat_rfrl_dtl_id;
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
    }
    function clickLetter() {
        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        Name = $('#<%=ucreferalname.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var Ref_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value;
        var Refrl_class_id = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value;
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = '0';
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
        { Cat_type_id = 0; }
        var smsdate ="";
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
        var smstime = new Date().format('HH:mm:ss');
        if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
     }
     else {
          smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      
        if(chksms=="Y"){
         smsDt =new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;;
        }
        else{
        smsDt="";
        }
        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {isRefdtlschng1='Y';
            if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar1[0].pat_rfrl_dtl_id;
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
            if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar2[0].pat_rfrl_dtl_id;
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt); ;
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
    }
    function onRefToSelection(data) {
        var results = data;
        document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = results._lktext;
        if (results.REFRL_ID == undefined) {
            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = results.RESULT.REFRL_ID
        } else {
            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = results.REFRL_ID;
        }
        document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = results._lktext;
        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        Name = $('#<%=ucreferalname.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var Ref_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value;
        var Refrl_class_id = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = '0';
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;

        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
        { Cat_type_id = 0; }

         var smsdate ="";
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
        var smstime = new Date().format('HH:mm:ss');
        if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
     }
     else {
          smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      
        if(chksms=="Y"){
         smsDt =new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;;
        }
        else{
        smsDt="";
        }
        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {isRefdtlschng1='Y';
            if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar1[0].pat_rfrl_dtl_id;
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
            if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar2[0].pat_rfrl_dtl_id;
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        var ReferedToid = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>');
        referalvalidation(ReferedToid);

        $("#Refscroll").scrollTop($(Refscroll).offset().top);
    }

    function onRefSource(data) {
        var results = data;
        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID %>').value = results._lktext;
        if (results.CAT_REFRL_ID == undefined) {
            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value = results.RESULT.CAT_REFRL_ID;
        } else {
            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value = results.CAT_REFRL_ID;
        }
        document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value = results._lktext;
        $('#<%=hdncattype_id.ClientID %>').val(results.CAT_REFRL_SOURCE_ID);
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();

        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        Name = $('#<%=ucreferalname.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var Ref_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value;
        var Refrl_class_id = document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value;
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = '0';
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();

        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
        { Cat_type_id = 0; }
        var smsdate ="";
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
       var smstime = new Date().format('HH:mm:ss');
      if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
     }
     else {
          smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      
        if(chksms=="Y"){
         smsDt =new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;;
        }
        else{
        smsDt="";
        }

        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) {isRefdtlschng1='Y';
            if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar1[0].pat_rfrl_dtl_id;
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
            if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar2[0].pat_rfrl_dtl_id;
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }

        var Sourceid = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID %>');

        var Ref_src_type_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var Ref_src_id = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
       // document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_hdn_preCond').value = Ref_src_type_id + "^" + Ref_src_id;
    }

    var focus = 'N';
    function CheckPatAddress(obj) {
        var PatAreaid = "0"; var RefAreaid = "0"; focus = 'N';
        if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "REG" && myMultiAddress1 != "") {
            RefAreaid = myMultiAddress1[0]["Area"];
        }
        else if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "Cons" || document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "OP") {
            RefAreaid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value;
        }
        else if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "OPQUICK") {
            if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "OPQUICK" && GlobalMyAddress1 != "") {
                RefAreaid = GlobalMyAddress1[0]["Area"];
                // RefAreaid = myMultiAddress1[0]["Area"];                
            }
            if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "OPQUICK" && document.getElementById('' + ctrlcom + '_chk_old').checked == true) {
                RefAreaid = document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value;
            }
        }
        else {
            RefAreaid = myMultiAddress1[0]["Area"];
        }
        if (obj.AREA_ID == undefined||obj.AREA_ID==null) { 
        if(obj.RESULT!=undefined && obj.RESULT!=null && obj.RESULT!=''){PatAreaid = obj.RESULT.AREA_ID; }
        else {PatAreaid='0';}
         } 
         else { PatAreaid = obj.AREA_ID; }
        if (PatAreaid > "0" && RefAreaid > "0") {
            if (RefAreaid != PatAreaid) {
                focus = 'Y';
                $(".smessagebox").scustommessagebox(1, "Info", "The patient address is not in the same region as the referrer's address.  Do you want to continue?", OnSuccessPatAddr, obj, OnRejectPatAddr);
            } else {
                OnSuccessPatAddr(obj);
            }
        } else {
            OnSuccessPatAddr(obj);
        }

    }
    var isRefdtlschng1='N';
    var isRefdtlschng2='N';
    var isRefdtlschng3='N';
    var isRefdtlschng4='N';

     function OnSuccessPatAddr(obj) {
        var adress = '';
        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = obj._lktext;
        if (obj.REFRL_ID == undefined) {
            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = obj.RESULT["REFRL_ID"];
            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = obj._lktext;
            document.getElementById('<%= txtRefPhone.ClientID%>').value = obj.RESULT["MOBILE_PHONE"];
            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; 
            document.getElementById('<%=_hdnID.ClientID%>').value = obj.RESULT["REFRL_ID"];

            adress = obj.RESULT["ADDRESS1"];
            if (adress == '' || adress == null || adress == undefined) { adress = ''; }
            if (obj.RESULT["CITY_NAME"] != undefined && obj.RESULT["CITY_NAME"] != null && obj.RESULT["CITY_NAME"] != "") { adress = adress + "," + obj.RESULT["CITY_NAME"] }
            if (obj.RESULT["LOCATION_NAME"] != undefined && obj.RESULT["LOCATION_NAME"] != null && obj.RESULT["LOCATION_NAME"] != "") { adress = adress + "," + obj.RESULT["LOCATION_NAME"] }
            document.getElementById('<%=txtrefaddr.ClientID%>').value = adress;
            document.getElementById('<%=hdnrefareaid.ClientID%>').value = obj.RESULT["AREA_ID"];
        }
        else {
            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = obj.REFRL_ID;
            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = obj._lktext;
            document.getElementById('<%= txtRefPhone.ClientID%>').value = obj.MOBILE_PHONE;
            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; 
            document.getElementById('<%=_hdnID.ClientID%>').value = obj["REFRL_ID"];
            adress = obj["ADDRESS1"];
            if (obj["CITY_NAME"] != undefined || obj["CITY_NAME"] != null || obj["CITY_NAME"] != "") { adress = adress + "," + obj["CITY_NAME"] }
            if (obj["LOCATION_NAME"] != undefined || obj["LOCATION_NAME"] != null || obj["LOCATION_NAME"] != "") { adress = adress + "," + obj["LOCATION_NAME"] }
            document.getElementById('<%=txtrefaddr.ClientID%>').value = adress
            document.getElementById('<%=hdnrefareaid.ClientID%>').value = obj.AREA_ID;
        }
        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        Name = $('#<%=ucreferalname.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var Ref_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val();
        var Refrl_class_id = $('#<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').val();
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = '0';
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
        { Cat_type_id = 0; }
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
          var smsdate ="";
          var smsDt="";
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
       var smstime = new Date().format('HH:mm:ss');
      if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
     }
     else {
          smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      
        if(chksms=="Y"){
         smsDt =new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;;
        }
        else{
        smsDt="";
        }
        MaintainReferal_sourceid(Ref_id);

        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
        if (SelectedRowIndex == 1) { isRefdtlschng1='Y';
            if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar1[0].pat_rfrl_dtl_id;
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
            if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar2[0].pat_rfrl_dtl_id;
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
        }
        if (focus == 'Y') {
            if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value == "REG") { document.getElementById('' + ctrlcom + '_Address1_txtPin').focus(); }
        }
    }
    function OnRejectPatAddr() {
        clearRefDtls();
        document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').className = 'red';
        return false;
    }
    function ClaerClickOnReferalControl() {
        myMultiDatar1 = []; myMultiDatar2 = []; myMultiDatar3 = []; myMultiDatar4 = [];
        clearRefDtls();
        $("#R1").addClass("select");EnableWalkin();
        SelectedRowIndex = 1;
        $("#R2,#R3,#R4").removeClass("select");
    }

    function DisableWalkin()
    {
            var dropdown = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral');
                        for (var i = 0; i < dropdown.options.length; i++) {
                            if (dropdown.options[i].value == '1')
                                dropdown.options[i].disabled=true;

                        }
    }

    function EnableWalkin()
    {
            var dropdown = document.getElementById('ctl00_ContentPlaceHolder1_ucReferal_ddlreferral');
                        for (var i = 0; i < dropdown.options.length; i++) {
                            if (dropdown.options[i].value == '1')
                                dropdown.options[i].disabled=false;
                        }
    }
    var set_contextKey = '';
    var ReferalSelectionType = 0;
    var SelectedRowIndex = 0;
    $(document).ready(function (e) {
            var dateformat1=   document.getElementById('<%=hdndateformateref.ClientID%>').value;
            var split1 = dateformat1.split(' ');
            var current_format1 = split1[0];
             $('#<%=txtSMSDt.ClientID %>').datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat:dateformat1,
                minDate: new Date
            });

            $("#ReferalDiv li").on("click", function () {
                var RowIndex = 0;
                var CurrentTar = $(this).data("tar");
                SelectedRowIndex = $(this).data("tar").substring(4, 5);
                SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

                if (SelectedRowIndex == 1) {
                    if (GlobalMyData1 == '') {
                   //if (GlobalMyData1[0].Record_Status == 'A'){
                        $("#R1").addClass("select");EnableWalkin();
                        SelectedRowIndex = 1;
                        $("#R2,#R3,#R4").removeClass("select");
                    }
                    else {
                        SelectedRowIndex = 1;
                        $("#R1").addClass("select");EnableWalkin();
                        $("#R2").removeClass("select");
                        $("#R3").removeClass("select");
                        $("#R4").removeClass("select");
                    }
                }
                if (SelectedRowIndex == 2 || SelectedRowIndex == 3 || SelectedRowIndex == 4) {
                    $('#Refscroll').scrollTop(0);
                    $.each(GlobalMyData1, function (ArrIndex, ChngRowIndex) {
                        if (ChngRowIndex.Source == '1' && ChngRowIndex.Record_Status=='A') {
                            SelectedRowIndex = 1;
                            $("#R1").addClass("select");EnableWalkin();
                            $("#R2,#R3,#R4").removeClass("select");
                            return false;
                        }
                        else if (ChngRowIndex.Source > 1 && ChngRowIndex.Name == ''  && ChngRowIndex.Record_Status=='A') {
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                            SelectedRowIndex = 1;
                            $("#R1").addClass("select");EnableWalkin();
                            $("#R2,#R3,#R4").removeClass("select");
                            return false;
                        }
//                        else if (ChngRowIndex.Source > 1 && ChngRowIndex.ReferalClass == ''  && ChngRowIndex.Record_Status=='A') {
//                           if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                                SelectedRowIndex = 1;
//                                $("#R1").addClass("select");EnableWalkin();
//                                $("#R2,#R3,#R4").removeClass("select");
//                                return false;
//                            }
//                        }
//                        else if (ChngRowIndex.Source > 1 && ChngRowIndex.referedTo == ''  && ChngRowIndex.Record_Status=='A') {
//                            if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                                SelectedRowIndex = 1;
//                                $("#R1").addClass("select");EnableWalkin();
//                                $("#R2,#R3,#R4").removeClass("select");
//                                return false;
//                            }
//                        }
                    });
                }
                if (SelectedRowIndex == 2) {
                    if (GlobalMyData1 == '' || GlobalMyData1[0].Record_Status == 'D') {
                   // if (GlobalMyData1[0].Record_Status == 'A'){
                        $("#R1").addClass("select");EnableWalkin();
                        SelectedRowIndex = 1;
                        $("#R2,#R3,#R4").removeClass("select");
                    }
                    else {
                        SelectedRowIndex = 2;
                        $("#R2").addClass("select");
                        DisableWalkin();
                        $("#R1").removeClass("select");
                        $("#R3").removeClass("select");
                        $("#R4").removeClass("select");
                    }
                }

            if (SelectedRowIndex == 3 || SelectedRowIndex == 4) {

                $.each(GlobalMyData2, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.Source == '1' && ChngRowIndex.Record_Status=='A') {
                        SelectedRowIndex = 2;
                        $("#R2").addClass("select"); DisableWalkin();
                        $("#R1,#R3,#R4").removeClass("select");
                        return false;
                    }
                    else if (ChngRowIndex.Source > 1 && ChngRowIndex.Name == '' && ChngRowIndex.Record_Status=='A') {
                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                        SelectedRowIndex = 2;
                        $("#R2").addClass("select"); DisableWalkin();
                        $("#R1,#R3,#R4").removeClass("select");
                        return false;
                    }
//                    else if (ChngRowIndex.Source > 1 && ChngRowIndex.ReferalClass == '' && ChngRowIndex.Record_Status=='A') {
//                        if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                            SelectedRowIndex = 2;
//                            $("#R2").addClass("select"); DisableWalkin();
//                            $("#R1,#R3,#R4").removeClass("select");
//                            return false;
//                        }
//                    }
//                    else if (ChngRowIndex.Source > 1 && ChngRowIndex.referedTo == '' && ChngRowIndex.Record_Status=='A') {
//                        if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                            SelectedRowIndex = 2;
//                            $("#R2").addClass("select"); DisableWalkin();
//                            $("#R1,#R3,#R4").removeClass("select");
//                            return false;
//                        }
//                    }
                });
            }

            if (SelectedRowIndex == 3) {
                if (GlobalMyData1 == '' || GlobalMyData1[0].Record_Status == 'D') {
                    $("#R1").addClass("select");EnableWalkin();
                    SelectedRowIndex = 1;
                    $("#R2,#R3,#R4").removeClass("select");
                }
                else if (GlobalMyData2 == '' || GlobalMyData2[0].Record_Status == 'D') {
                    $("#R2").addClass("select"); DisableWalkin();
                    SelectedRowIndex = 2;
                    $("#R3,#R4,#R1").removeClass("select");
                }
                else {
                    $("#R3").addClass("select"); DisableWalkin();
                    SelectedRowIndex = 3;
                    $("#R2").removeClass("select");
                    $("#R1").removeClass("select");
                    $("#R4").removeClass("select");
                }
            }
            if (SelectedRowIndex == 4) {
                $.each(GlobalMyData3, function (ArrIndex, ChngRowIndex) {
                    if (ChngRowIndex.Source == '1') {
                        SelectedRowIndex = 3;
                        $("#R3").addClass("select"); DisableWalkin();
                        $("#R1,#R2,#R4").removeClass("select");
                        return false;
                    }
                    else if (ChngRowIndex.Source > 1 && ChngRowIndex.Name == '') {
                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
                        SelectedRowIndex = 3;
                        $("#R3").addClass("select"); DisableWalkin();
                        $("#R1,#R2,#R4").removeClass("select");
                        return false;
                    }
//                    else if (ChngRowIndex.Source > 1 && ChngRowIndex.ReferalClass == '') {
//                        if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                            document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').focus();
//                            SelectedRowIndex = 1;
//                            $("#R1").addClass("select");EnableWalkin();
//                            $("#R2,#R3,#R4").removeClass("select");
//                            return false;
//                        }
//                    }
//                    else if (ChngRowIndex.Source > 1 && ChngRowIndex.referedTo == '') {
//                        if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                            document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').focus();
//                            SelectedRowIndex = 1;
//                            $("#R1").addClass("select");EnableWalkin();
//                            $("#R2,#R3,#R4").removeClass("select");
//                            return false;
//                        }
//                    }
                });
            }

            if (SelectedRowIndex == 4) {
                if (GlobalMyData1 == '' || GlobalMyData1[0].Record_Status == 'D') {
                    $("#R1").addClass("select");EnableWalkin();
                    SelectedRowIndex = 1;
                    $("#R2,#R3,#R4").removeClass("select");
                }
                else if (GlobalMyData2 == '' || GlobalMyData2[0].Record_Status == 'D') {
                    $("#R2").addClass("select");
                    SelectedRowIndex = 2; DisableWalkin();
                    $("#R3,#R4,#R1").removeClass("select");
                }
                else if (GlobalMyData3 == '' || GlobalMyData3[0].Record_Status == 'D') {
                    $("#R3").addClass("select");
                    SelectedRowIndex = 3; DisableWalkin();
                    $("#R2,#R4,#R1").removeClass("select");
                }
                else {
                    SelectedRowIndex = 4;
                    $("#R4").addClass("select"); DisableWalkin();
                    $("#R1").removeClass("select");
                    $("#R3").removeClass("select");
                    $("#R2").removeClass("select");
                }
            }
            if (SelectedRowIndex == 1) {
                if (GlobalMyData1 != '' && GlobalMyData1[0].Record_Status=='A') {
                    $.each(GlobalMyData1, function (ArrIndex, ChngRowIndex) {
                        if (ChngRowIndex.rowIndex == SelectedRowIndex && ChngRowIndex.Record_Status=='A') {
                            if (ChngRowIndex.ReferalClass == undefined) { ReferalClass = ""; }
                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=hdnrefareaid.ClientID%>').value = ChngRowIndex.RefArea_Id;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            if (document.getElementById('<%=ddlreferral.ClientID %>').value > 1) {
                                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                            }
                        }
                        else {
                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=hdnrefareaid.ClientID%>').value = ChngRowIndex.RefArea_Id;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            if (document.getElementById('<%=ddlreferral.ClientID %>').value > 1) {
                                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                            }
                        }
                    });
                }
                else {
                    document.getElementById('<%=ddlreferral.ClientID %>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                    document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;
                    document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                    document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                    document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                    document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = "0";
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = '';

                    document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = '';
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = 0;
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = '';
                    document.getElementById('<%=txtremarks.ClientID %>').value = '';
                    document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                    document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('trsmsDt').style.display = 'none';
                    document.getElementById('<%=hdnRecordstatus.ClientID%>').value = 'A';
                }
                var view_chk = document.getElementById('<%=hdnView_R.ClientID%>').value;

                if (view_chk == "VIEW_OP" || view_chk == "REG" || view_chk == "OPDbill" || view_chk == "Cons") {


                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;

                }
                var formname = document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value;
//                if (formname == 'CHANGE-REG'||formname == 'REG' || formname=='OPQUICK') {
                if(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value>1){
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;                    
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                    }
//                }
                else {
              
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                   
                }

                MaintainSourceDetName();
            }
            if (SelectedRowIndex == 2) {
                if (GlobalMyData2 != '' && GlobalMyData2[0].Record_Status=='A') {
                    $.each(GlobalMyData2, function (ArrIndex, ChngRowIndex) {
                        if (ChngRowIndex.rowIndex == SelectedRowIndex && ChngRowIndex.Record_Status=='A') {

                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;

                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                        }
                        else {
                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;  
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            if (document.getElementById('<%=ddlreferral.ClientID %>').value > 1) {
                                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                            }

                        }
                    });
                }
                else {
                    document.getElementById('<%=ddlreferral.ClientID %>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                    document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;
                    document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                    document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                    document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                    document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = "0";
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = '';

                    document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = '';
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = 0;
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = '';
                    document.getElementById('<%=txtremarks.ClientID %>').value = '';
                    document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                    document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('trsmsDt').style.display = 'none';
                    document.getElementById('<%=hdnRecordstatus.ClientID%>').value = 'A';
                }
                var view_chk = document.getElementById('<%=hdnView_R.ClientID%>').value;
                if (view_chk == "VIEW_OP" || view_chk == "REG" || view_chk == "OPDbill" || view_chk == "Cons") {

                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;

                }
                var formname = document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value;
                if (formname == 'CHANGE-REG'||formname == 'REG' || formname=='OPQUICK') {
                 if(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value==0){
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;                    
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    }
                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;


                }

                MaintainSourceDetName();
            }
            if (SelectedRowIndex == 3) {
                if (GlobalMyData3 != '' && GlobalMyData3[0].Record_Status=='A') {
                    $.each(GlobalMyData3, function (ArrIndex, ChngRowIndex) {
                        if (ChngRowIndex.rowIndex == SelectedRowIndex) {

                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;

                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                 document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                        }
                        else {
                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            if (document.getElementById('<%=ddlreferral.ClientID %>').value > 1) {
                                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                            }
                        }
                    });
                }
                else {
                    document.getElementById('<%=ddlreferral.ClientID %>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                    document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;
                    document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                    document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                    document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                    document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = "0";
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = '';

                    document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = '';
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = 0;
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = '';
                    document.getElementById('<%=txtremarks.ClientID %>').value = '';
                    document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                    document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('trsmsDt').style.display = 'none';
                    document.getElementById('<%=hdnRecordstatus.ClientID%>').value = '';
                }
                var view_chk = document.getElementById('<%=hdnView_R.ClientID%>').value;
                if (view_chk == "VIEW_OP" || view_chk == "REG" || view_chk == "OPDbill" || view_chk == "Cons") {

                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;

                }
                var formname = document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value;
                if (formname == 'CHANGE-REG'||formname == 'REG' || formname=='OPQUICK') {
                 if(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value==0){
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;                    
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    }
                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;

                }


                MaintainSourceDetName();
            }
            if (SelectedRowIndex == 4) {
                if (GlobalMyData4 != '' && GlobalMyData4[0].Record_Status=='A') {
                    $.each(GlobalMyData4, function (ArrIndex, ChngRowIndex) {
                        if (ChngRowIndex.rowIndex == SelectedRowIndex) {

                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id;
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                        }
                        else {
                            document.getElementById('<%=ddlreferral.ClientID %>').value = ChngRowIndex.Source;
                            document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.ReferalClass;
                            document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Refrl_class_id; 
                            document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = ChngRowIndex.referedTo;
                            document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.RfrlTo_Id;
                            document.getElementById('<%=txtrefaddr.ClientID%>').value = ChngRowIndex.Address;
                            document.getElementById('<%=txtRefPhone.ClientID%>').value = ChngRowIndex.Phone;
                            document.getElementById('<%=_hdnID.ClientID%>').value = ChngRowIndex.id;
                            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = ChngRowIndex.pat_rfrl_dtl_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ChngRowIndex.Ref_id;
                            document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ChngRowIndex.Name;
                            document.getElementById('<%=txtremarks.ClientID %>').value = ChngRowIndex.Remarks;
                            document.getElementById('<%=hdnRecordstatus.ClientID%>').value = ChngRowIndex.Record_Status;
                            if (ChngRowIndex.sms == "Y") {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = true;
                                document.getElementById('trsmsDt').style.display = 'table-cell';
                                var smstime=ChngRowIndex.smsDt;
                                document.getElementById('<%=txtSMSDt.ClientID%>').value = new Date(smstime.split(' ')[0]).format('dd-MMM-yyyy');
                                var times = smstime.split(' ')[1];
                                document.getElementById('<%=txtshh.ClientID%>').value = times.split(':')[0];
                                document.getElementById('<%=txtsmm.ClientID%>').value = times.split(':')[1];
                                document.getElementById('<%=txtsss.ClientID%>').value = times.split(':')[2];
                            }
                            else {
                                document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                                document.getElementById('trsmsDt').style.display = 'none';
                            }
                            if (ChngRowIndex.letter == "Y") {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = true;
                            }
                            else {
                                document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                            }
                            if (document.getElementById('<%=ddlreferral.ClientID %>').value > 1) {
                                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                            }
                        }
                    });
                }
                else {
                    document.getElementById('<%=ddlreferral.ClientID %>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                    document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;
                    document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                    document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                    document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                    document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = "0";
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = 0;
                    document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = '';
                    document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = '';
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = 0;
                    document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = '';
                    document.getElementById('<%=txtremarks.ClientID %>').value = '';
                    document.getElementById('<%=chkSMS.ClientID %>').checked = false;
                    document.getElementById('<%=chkLeter.ClientID %>').checked = false;
                    document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('trsmsDt').style.display = 'none';
                    document.getElementById('<%=hdnRecordstatus.ClientID%>').value = '';
                }
                var view_chk = document.getElementById('<%=hdnView_R.ClientID%>').value;
                if (view_chk == "VIEW_OP" || view_chk == "REG" || view_chk == "OPDbill" || view_chk == "Cons") {


                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;


                }
                var formname = document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value;
                if (formname == 'CHANGE-REG'||formname == 'REG' || formname=='OPQUICK') {
                 if(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value==0){
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;                    
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    }
                }
               else {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;


                }
                MaintainSourceDetName();
            }
        });
    });

    var GlobalMyData1 = new Array();
    var myMultiDatar1 = new Array();
    var multiDimArrayr1 = 0;

    function multiDimArrayR1(RowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,Record_Status) {
    if(Record_Status==undefined || Record_Status == null || Record_Status=='') Record_Status='A';
        if (Source > 0 && Source != '1') {
            var c = multiDimArrayr1;
            if ((myMultiDatar2[c] != undefined && myMultiDatar2[c]["Ref_id"] == Ref_id) || (myMultiDatar3[c] != undefined && myMultiDatar3[c]["Ref_id"] == Ref_id) || (myMultiDatar4[c] != undefined && myMultiDatar4[c]["Ref_id"] == Ref_id)) {

                $(".stoast").toastText("warning", "This Referral is already selected", 5, 3);
                myMultiDatar1[c] = new Array(6);
                myMultiDatar1[c]["rowIndex"] = RowIndex;
                myMultiDatar1[c]["Source"] = Source;
                myMultiDatar1[c]["Name"] = '';
                myMultiDatar1[c]["Ref_id"] = 0;
                myMultiDatar1[c]["ReferalClass"] = '';
                myMultiDatar1[c]["Refrl_class_id"] = 0;
                myMultiDatar1[c]["Address"] = '';
                myMultiDatar1[c]["Phone"] = '';
                myMultiDatar1[c]["id"] = 0;
                myMultiDatar1[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar1[c]["RfrlTo_Id"] = 0;
                myMultiDatar1[c]["referedTo"] = "";
                myMultiDatar1[c]["Cat_type_id"] = 0;
                myMultiDatar1[c]["sms"] = "";
                myMultiDatar1[c]["letter"] = "";
                myMultiDatar1[c]["Remarks"] = "";
                myMultiDatar1[c]["smsDt"] = "";
                myMultiDatar1[c]["Record_Status"] = "A";
                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; //0 ;
                document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = 0;
                document.getElementById('<%=hdnRecordstatus.ClientID%>').value = 'A';
                GlobalMyData1 = myMultiDatar1;

            }
            else {
                myMultiDatar1[c] = new Array(6);
                myMultiDatar1[c]["rowIndex"] = RowIndex;
                myMultiDatar1[c]["Source"] = Source;
                myMultiDatar1[c]["Name"] = Name;
                myMultiDatar1[c]["Ref_id"] = Ref_id;
                myMultiDatar1[c]["ReferalClass"] = ReferalClass;
                myMultiDatar1[c]["Refrl_class_id"] = Refrl_class_id;
                myMultiDatar1[c]["Address"] = Address;
                myMultiDatar1[c]["Phone"] = Phone;
                myMultiDatar1[c]["id"] = id;
                myMultiDatar1[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar1[c]["RefArea_Id"] = '';
                myMultiDatar1[c]["RfrlTo_Id"] = ReferedTo_id;
                myMultiDatar1[c]["Cat_type_id"] = Cat_type_id;
                myMultiDatar1[c]["referedTo"] = ReferedTo;
                myMultiDatar1[c]["sms"] = chksms;
                myMultiDatar1[c]["letter"] = chkleter;
                myMultiDatar1[c]["Remarks"] = Remarks;
                 myMultiDatar1[c]["smsDt"] = smsDt;
                 myMultiDatar1[c]["Record_Status"] = Record_Status;
                GlobalMyData1 = myMultiDatar1;
            }
        }
        else if (Source == '1') {
            var c = multiDimArrayr1;
            myMultiDatar1[c] = new Array(6);
            myMultiDatar1[c]["rowIndex"] = RowIndex;
            myMultiDatar1[c]["Source"] = Source;
            myMultiDatar1[c]["Name"] = Name;
            myMultiDatar1[c]["Ref_id"] = Ref_id;
            myMultiDatar1[c]["ReferalClass"] = ReferalClass;
            myMultiDatar1[c]["Refrl_class_id"] = Refrl_class_id;
            myMultiDatar1[c]["Address"] = Address;
            myMultiDatar1[c]["Phone"] = Phone;
            myMultiDatar1[c]["id"] = id;
            myMultiDatar1[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
            myMultiDatar1[c]["RefArea_Id"] = '';
            myMultiDatar1[c]["RfrlTo_Id"] = ReferedTo_id;
            myMultiDatar1[c]["Cat_type_id"] = Cat_type_id;
            myMultiDatar1[c]["referedTo"] = ReferedTo;
            myMultiDatar1[c]["sms"] = chksms;
            myMultiDatar1[c]["letter"] = chkleter;
            myMultiDatar1[c]["Remarks"] = Remarks;
            myMultiDatar1[c]["smsDt"] = smsDt;
            myMultiDatar1[c]["Record_Status"] = Record_Status;
            GlobalMyData1 = myMultiDatar1;
            $('#'+ ctrlcom + '_ucReferal_ddlreferral').removeClass('red');
        }
        else {
            GlobalMyData1 = '';
        }
    }
    var GlobalMyData2 = new Array();
    var myMultiDatar2 = new Array();
    var multiDimArrayr2 = 0;

    function multiDimArrayR2(RowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,Record_Status) {
    if(Record_Status==undefined || Record_Status == null || Record_Status=='') Record_Status='A';
        if (Source > 0) {
            if (Source == "1") {
                $(".stoast").toastText("warning", "We Can not Select this Referral in R2", 5, 3);
                $('#<%=ddlreferral.ClientID %>').val('0');
                return false;
            }

            var c = multiDimArrayr2;

            if (myMultiDatar1[c]["Ref_id"] == Ref_id) {
                $(".stoast").toastText("warning", "This Referral is already selected", 5, 3);
                myMultiDatar2[c] = new Array(6);
                myMultiDatar2[c]["rowIndex"] = RowIndex;
                myMultiDatar2[c]["Source"] = Source;
                myMultiDatar2[c]["Name"] = '';
                myMultiDatar2[c]["Ref_id"] = 0;
                myMultiDatar2[c]["ReferalClass"] = '';
                myMultiDatar2[c]["Refrl_class_id"] = 0;
                myMultiDatar2[c]["Address"] = '';
                myMultiDatar2[c]["Phone"] = '';
                myMultiDatar2[c]["id"] = 0;
                myMultiDatar2[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar2[c]["RfrlTo_Id"] = 0;
                myMultiDatar2[c]["referedTo"] = "";
                myMultiDatar2[c]["Cat_type_id"] = 0;
                myMultiDatar2[c]["sms"] = "";
                myMultiDatar2[c]["letter"] = "";
                myMultiDatar2[c]["Remarks"] = "";
                  myMultiDatar2[c]["smsDt"] = "";
                 myMultiDatar2[c]["Record_Status"] = "A";
                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; //0 ;
                document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = 0;
                document.getElementById('<%=hdnRecordstatus.ClientID%>').value = 'A';
                GlobalMyData2 = myMultiDatar2;
            }
            else {
                myMultiDatar2[c] = new Array(6);
                myMultiDatar2[c]["rowIndex"] = RowIndex;
                myMultiDatar2[c]["Source"] = Source;
                myMultiDatar2[c]["Name"] = Name;
                myMultiDatar2[c]["Ref_id"] = Ref_id;
                myMultiDatar2[c]["ReferalClass"] = ReferalClass;
                myMultiDatar2[c]["Refrl_class_id"] = Refrl_class_id;
                myMultiDatar2[c]["Address"] = Address;
                myMultiDatar2[c]["Phone"] = Phone;
                myMultiDatar2[c]["id"] = id;
                myMultiDatar2[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar2[c]["RfrlTo_Id"] = ReferedTo_id;
                myMultiDatar2[c]["Cat_type_id"] = Cat_type_id;
                myMultiDatar2[c]["referedTo"] = ReferedTo;
                myMultiDatar2[c]["sms"] = chksms;
                myMultiDatar2[c]["letter"] = chkleter;
                myMultiDatar2[c]["Remarks"] = Remarks;
                myMultiDatar2[c]["smsDt"] = smsDt;
                myMultiDatar2[c]["Record_Status"] = Record_Status;
                GlobalMyData2 = myMultiDatar2;
            }
        }
        else {
            GlobalMyData2 = '';
        }
    }

    var GlobalMyData3 = new Array();
    var myMultiDatar3 = new Array();
    var multiDimArrayr3 = 0;

    function multiDimArrayR3(RowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,Record_Status) {
    if(Record_Status==undefined || Record_Status == null || Record_Status=='') Record_Status='A';
        if (Source > 0) {
            if (Source == "1") {
                $(".stoast").toastText("warning", "We Can not Select this Referral in R3", 5, 3);
                $('#<%=ddlreferral.ClientID %>').val('0');
                return false;
            }
            var c = multiDimArrayr3;
            if (myMultiDatar1[c]["Ref_id"] == Ref_id || myMultiDatar2[c]["Ref_id"] == Ref_id) {
                $(".stoast").toastText("warning", "This Referral is already selected", 5, 3);
                myMultiDatar3[c] = new Array(6);
                myMultiDatar3[c]["rowIndex"] = RowIndex;
                myMultiDatar3[c]["Source"] = Source;
                myMultiDatar3[c]["Name"] = '';
                myMultiDatar3[c]["Ref_id"] = 0;
                myMultiDatar3[c]["ReferalClass"] = '';
                myMultiDatar3[c]["Refrl_class_id"] = 0;
                myMultiDatar3[c]["Address"] = '';
                myMultiDatar3[c]["Phone"] = '';
                myMultiDatar3[c]["id"] = 0;
                myMultiDatar3[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar3[c]["RfrlTo_Id"] = 0;
                myMultiDatar3[c]["referedTo"] = 0;
                myMultiDatar3[c]["Cat_type_id"] = 0;
                myMultiDatar3[c]["sms"] = '';
                myMultiDatar3[c]["letter"] = '';
                myMultiDatar3[c]["Remarks"] = '';
                myMultiDatar3[c]["smsDt"] = '';
                myMultiDatar3[c]["Record_Status"] = 'A';
                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;
                document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = 0;
                document.getElementById('<%=hdnRecordstatus.ClientID%>').value = 'A';
                GlobalMyData2 = myMultiDatar2;
            } else {
                myMultiDatar3[c] = new Array(6);
                myMultiDatar3[c]["rowIndex"] = RowIndex;
                myMultiDatar3[c]["Source"] = Source;
                myMultiDatar3[c]["Name"] = Name;
                myMultiDatar3[c]["Ref_id"] = Ref_id;
                myMultiDatar3[c]["ReferalClass"] = ReferalClass;
                myMultiDatar3[c]["Refrl_class_id"] = Refrl_class_id;
                myMultiDatar3[c]["Address"] = Address;
                myMultiDatar3[c]["Phone"] = Phone;
                myMultiDatar3[c]["id"] = id;
                myMultiDatar3[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar3[c]["RfrlTo_Id"] = ReferedTo_id;
                myMultiDatar3[c]["referedTo"] = ReferedTo;
                myMultiDatar3[c]["Cat_type_id"] = Cat_type_id;
                myMultiDatar3[c]["sms"] = chksms;
                myMultiDatar3[c]["letter"] = chkleter;
                myMultiDatar3[c]["Remarks"] = Remarks;
                myMultiDatar3[c]["smsDt"] = smsDt;
                myMultiDatar3[c]["Record_Status"] = Record_Status;
                GlobalMyData3 = myMultiDatar3;
            }
        } else {
            GlobalMyData3 = '';
        }
    }

    var GlobalMyData4 = new Array();
    var myMultiDatar4 = new Array();
    var multiDimArrayr4 = 0;

    function multiDimArrayR4(RowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,Record_Status) {
    if(Record_Status==undefined || Record_Status == null || Record_Status=='') Record_Status='A';
        if (Source > 0) {
            if (Source == "1") {
                $(".stoast").toastText("warning", "We Can not Select this Referral in R4", 5, 3);
                $('#<%=ddlreferral.ClientID %>').val('0');
                return false;
            }
            var c = multiDimArrayr4;
            if (myMultiDatar1[c]["Ref_id"] == Ref_id || myMultiDatar2[c]["Ref_id"] == Ref_id || myMultiDatar3[c]["Ref_id"] == Ref_id) {
                $(".stoast").toastText("warning", "This Referral is already selected", 5, 3);
                myMultiDatar4[c] = new Array(6);
                myMultiDatar4[c]["rowIndex"] = RowIndex;
                myMultiDatar4[c]["Source"] = Source;
                myMultiDatar4[c]["Name"] = '';
                myMultiDatar4[c]["Ref_id"] = 0;
                myMultiDatar4[c]["ReferalClass"] = '';
                myMultiDatar4[c]["Refrl_class_id"] = 0;
                myMultiDatar4[c]["Address"] = '';
                myMultiDatar4[c]["Phone"] = '';
                myMultiDatar4[c]["id"] = 0;
                myMultiDatar4[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar4[c]["RfrlTo_Id"] = 0;
                myMultiDatar4[c]["referedTo"] = 0;
                myMultiDatar4[c]["sms"] = '';
                myMultiDatar4[c]["letter"] = '';
                myMultiDatar4[c]["Remarks"] = '';
                myMultiDatar4[c]["Cat_type_id"] = 0;
                 myMultiDatar4[c]["smsDt"] = '';
                 myMultiDatar4[c]["Record_Status"] = 'A';
                document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;
                document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
                document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
                document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
                document.getElementById('<%=_hdnID.ClientID%>').value = 0;
                document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = 0;
                document.getElementById('<%=hdnRecordstatus.ClientID%>').value = 'A';
                GlobalMyData2 = myMultiDatar2;
            } else {

                myMultiDatar4[c] = new Array(6);
                myMultiDatar4[c]["rowIndex"] = RowIndex;
                myMultiDatar4[c]["Source"] = Source;
                myMultiDatar4[c]["Name"] = Name;
                myMultiDatar4[c]["Ref_id"] = Ref_id;
                myMultiDatar4[c]["ReferalClass"] = ReferalClass;
                myMultiDatar4[c]["Refrl_class_id"] = Refrl_class_id;
                myMultiDatar4[c]["Address"] = Address;
                myMultiDatar4[c]["Phone"] = Phone;
                myMultiDatar4[c]["id"] = id;
                myMultiDatar4[c]["pat_rfrl_dtl_id"] = pat_rfrl_dtl_id;
                myMultiDatar4[c]["RfrlTo_Id"] = ReferedTo_id;
                myMultiDatar4[c]["Cat_type_id"] = Cat_type_id;
                myMultiDatar4[c]["referedTo"] = ReferedTo;
                myMultiDatar4[c]["sms"] = chksms;
                myMultiDatar4[c]["letter"] = chkleter;
                myMultiDatar4[c]["Remarks"] = Remarks;
                 myMultiDatar4[c]["smsDt"] = smsDt;
                 myMultiDatar4[c]["Record_Status"] = Record_Status;
                GlobalMyData4 = myMultiDatar4;
            }
        }
        else {
            GlobalMyData4 = '';
        }
    }

    function SetReferalData(ddl)
    {
            var Source = $('[id*=ddlreferral]').find('option:selected').val();//$('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        var ReferalClass = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val();
        var Refrl_class_id = $('#<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').val();
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        Name = document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value;
        var pat_rfrl_dtl_id =  $('#<%=_hdnpat_rfrl_dtl_id.ClientID%>').val();
          var RecordStatus= document.getElementById('<%=hdnRecordstatus.ClientID%>').value;
        var Ref_id = 0;
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
         var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
    var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
    var sss = document.getElementById('<%=txtsss.ClientID%>').value;
    var smstime = new Date().format('HH:mm:ss');
    if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
    }
    else {
        smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      if(sms == true){
     smsDt = new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;
     }
     else{
     smsDt="";
     }

           SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

        if (SelectedRowIndex == 1) {isRefdtlschng1='Y';
            GlobalMyData1 = new Array();
             if(ddl.value==1 || ddl.value==0){ 
              
                if(myMultiDatar1.length>0 && myMultiDatar1[0].pat_rfrl_dtl_id!='' && myMultiDatar1[0].pat_rfrl_dtl_id>0)
                    pat_rfrl_dtl_id=myMultiDatar1[0].pat_rfrl_dtl_id;
                
                 if(ddl.value==0 && pat_rfrl_dtl_id > 0){RecordStatus='D';myMultiDatar1[0]["Record_Status"] = "D";}
             
                  multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);

                    if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                     {   myMultiDatar2[0]["Record_Status"] = "D";  GlobalMyData2 = myMultiDatar2; isRefdtlschng2='Y';}
                     else{
                          myMultiDatar2 = []; myMultiDatar3 = []; myMultiDatar4 = [];
                          GlobalMyData2 = ''; GlobalMyData3 = ''; GlobalMyData4 = '';
                     }

                 if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                 {   myMultiDatar3[0]["Record_Status"] = "D";  GlobalMyData3 = myMultiDatar3; isRefdtlschng3='Y';}
                  else{
                          myMultiDatar3 = []; myMultiDatar4 = [];
                          GlobalMyData3 = ''; GlobalMyData4 = '';
                     }

                 if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                 {  myMultiDatar4[0]["Record_Status"] = "D";   GlobalMyData4 = myMultiDatar4; isRefdtlschng4='Y';}
                  else{
                   myMultiDatar4 = []; GlobalMyData4 = '';
                   }
             }
             else
             {
                 multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
             }
        }
        if (SelectedRowIndex == 2) {isRefdtlschng2='Y';
            if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                     pat_rfrl_dtl_id=myMultiDatar2[0].pat_rfrl_dtl_id;

            if (Source == "0")
            {
                if(myMultiDatar2.length>0 && myMultiDatar2[0].pat_rfrl_dtl_id!='' && myMultiDatar2[0].pat_rfrl_dtl_id>0)
                {     myMultiDatar2[0]["Record_Status"] = "D";  GlobalMyData2 = myMultiDatar2; isRefdtlschng2='Y';}
                else{
                        myMultiDatar2 = []; myMultiDatar3 = []; myMultiDatar4 = [];
                        GlobalMyData2 = '';  GlobalMyData3 = ''; GlobalMyData4 = '';
                }
                if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                {   myMultiDatar3[0]["Record_Status"] = "D";  GlobalMyData3 = myMultiDatar3; isRefdtlschng3='Y';}
                 else{
                        myMultiDatar3 = []; myMultiDatar4 = [];
                        GlobalMyData3 = ''; GlobalMyData4 = '';
                }
                 if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                   { myMultiDatar4[0]["Record_Status"] = "D";  GlobalMyData4 = myMultiDatar4; isRefdtlschng4='Y';}
                   else{
                   myMultiDatar4 = []; GlobalMyData4 = '';
                   }
                   return false;
            }
            if (Source == 1) {
                $(".stoast").toastText("Warning", "Walk – in cannot be selected in R-2", 5, 3);
                if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                {   myMultiDatar3[0]["Record_Status"] = "D";  GlobalMyData3 = myMultiDatar3;isRefdtlschng3='Y';}
                else{
                      myMultiDatar3 = []; myMultiDatar4 = [];
                      GlobalMyData3 = ''; GlobalMyData4 = ''; isRefdtlschng2='Y';

                   }
                if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                  {  myMultiDatar4[0]["Record_Status"] = "D";  GlobalMyData4 = myMultiDatar4; isRefdtlschng4='Y';}
                  else{ myMultiDatar4 = []; GlobalMyData4 = '';
                   }
                return false;
            }
            else {
                Source = Source;
            }
            GlobalMyData2 = new Array();
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                     pat_rfrl_dtl_id = myMultiDatar3[0].pat_rfrl_dtl_id;
             if (Source == "0")
             {

                 if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                  {  myMultiDatar3[0]["Record_Status"] = "D";  GlobalMyData3 = myMultiDatar3; isRefdtlschng3='Y';}
                    else{
                      myMultiDatar3 = []; myMultiDatar4 = [];
                      GlobalMyData3 = ''; GlobalMyData4 = ''; isRefdtlschng2='Y';
                      ClearTab();
                   }
                 if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                  {  myMultiDatar4[0]["Record_Status"] = "D";  GlobalMyData4 = myMultiDatar4; isRefdtlschng4='Y';}
                   else{ myMultiDatar4 = []; GlobalMyData4 = '';
                   }
                     return false;
             }
            if (Source == 1) {
                $(".stoast").toastText("warning", "Walk – in cannot be selected in R-3", 5, 3);
                $('#ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').val('0');

                 if(myMultiDatar3.length>0 && myMultiDatar3[0].pat_rfrl_dtl_id!='' && myMultiDatar3[0].pat_rfrl_dtl_id>0)
                   { myMultiDatar3[0]["Record_Status"] = "D";  GlobalMyData3 = myMultiDatar3; isRefdtlschng3='Y';}
                   else{
                        myMultiDatar3 = []; myMultiDatar4 = [];
                        GlobalMyData3 = ''; GlobalMyData4 = ''; isRefdtlschng3='Y';
                   }
                 if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                  {  myMultiDatar4[0]["Record_Status"] = "D";  GlobalMyData4 = myMultiDatar4; isRefdtlschng4 ='Y';}
                   else{ myMultiDatar4 = []; GlobalMyData4 = '';
                   }

                return false;
            }

            else {
                Source = Source;
            }
            GlobalMyData3 = new Array();
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
         if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                     pat_rfrl_dtl_id = myMultiDatar4[0].pat_rfrl_dtl_id;
            if (Source == "0")
             {
                 if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                   { myMultiDatar4[0]["Record_Status"] = "D";  GlobalMyData4 = myMultiDatar4; isRefdtlschng4='Y';}
                   else
                   {
                      myMultiDatar4 = [];
                      GlobalMyData4 = '';
                     ClearTab();
                   }
                     return false;
             }
            if (Source == 1) {
                 $(".stoast").toastText("warning", "Walk – in cannot be selected in R-4", 5, 3);
                $('#ctl00_ContentPlaceHolder1_ucReferal_ddlreferral').val('0');

                if(myMultiDatar4.length>0 && myMultiDatar4[0].pat_rfrl_dtl_id!='' && myMultiDatar4[0].pat_rfrl_dtl_id>0)
                  {  myMultiDatar4[0]["Record_Status"] = "D";  GlobalMyData4 = myMultiDatar4; isRefdtlschng4='Y';}
                  else
                  {
                        myMultiDatar4 = [];
                        GlobalMyData4 = '';
                  }
                return false;
            }
            else {
                Source = Source;
            }
            GlobalMyData4 = new Array();
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
    }

    function SetReferalContextKey(ddl) {

        MaintainSourceDetName();
        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = 0;
        document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = '';
        document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = 0;
        document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID%>').value = '';
        document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
        document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
        document.getElementById('<%=_hdnRefAddr.ClientID%>').value = '';
        document.getElementById('<%=_hdnRefPhone.ClientID%>').value = '';
        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').checked = false;
        document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').checked = false;
        document.getElementById('<%=txtremarks.ClientID%>').value = '';
        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = ""; // 0;   
        document.getElementById('<%=_hdnID.ClientID%>').value = 0;
       // document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = 0;
		document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value =0;

        if (document.getElementById('<%=hdnRefReq.ClientID%>').value != "Yes") {
            if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value == "YES") {
                if (document.getElementById('<%=ddlreferral.ClientID%>').value == 1 || document.getElementById('<%=ddlreferral.ClientID%>').value == 0) {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').disabled = true;
                
                    $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                    $('#'+ ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
                    $('#'+ ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');
                    $('#'+ ctrlcom + '_ucReferal_ddlreferral').removeClass('red');
                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').disabled = false;
                }
            } else {
                if (document.getElementById('<%=ddlreferral.ClientID%>').value != 0) {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = false;

                }
            }
        }
        else {

            if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value == "YES") {
                if (document.getElementById('<%=ddlreferral.ClientID%>').value == 1 || document.getElementById('<%=ddlreferral.ClientID%>').value == 0) {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = true;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').disabled = true;
                    document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').disabled = true;


                    $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                    $('#'+ ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
                    $('#'+ ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');
                    $('#'+ ctrlcom + '_ucReferal_ddlreferral').removeClass('red');

                }
                else {
                    document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = false;
                    document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = false;
                    document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = false;

                }
            }
            else {//(document.getElementById('<%=ddlreferral.ClientID%>').value != 0) {

                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucreferalname').disabled = false;
                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').disabled = false;
                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucrfrlsrc').disabled = false;
                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucReferal_ucReferedto').disabled = false;
                if (document.getElementById('<%=ddlreferral.ClientID%>').value == '1') {

                    GetNonAsync(
                "GridService.asmx/Get_Default_Values",
                {},
                function (data) {

                    if (data.d.length > 0) {

                        var ref_by = jQuery.parseJSON(data.d[0]);
                        var ref_source = jQuery.parseJSON(data.d[1]);
                        var ref_to = jQuery.parseJSON(data.d[2]);

                        var adress;
                        document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = ref_by[0].REFRL_ID;
                        document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = ref_by[0].REFERAL_NAME;
                        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = ref_by[0].REFERAL_NAME;
                        //ctl00_ContentPlaceHolder1_ucReferal_ucreferalname_txtSearchControl
                        document.getElementById('<%= txtRefPhone.ClientID%>').value = ref_by[0].MOBILE_PHONE;
                        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = "";
                        document.getElementById('<%=_hdnID.ClientID%>').value = ref_by[0].REFRL_ID;
                        if (ref_by[0].CITY_NAME != undefined && ref_by[0].CITY_NAME != null && ref_by[0].CITY_NAME != "") {
                            if (ref_by[0].ADDRESS1 != undefined && ref_by[0].ADDRESS1 != null && ref_by[0].ADDRESS1 != "") {
                                adress = ref_by[0].ADDRESS1 + "," + ref_by[0].CITY_NAME;
                            }
                            else {
                                adress = ref_by[0].CITY_NAME;
                            }

                        }
                        if (ref_by[0].LOCATION_NAME != undefined && ref_by[0].LOCATION_NAME != null && ref_by[0].LOCATION_NAME != "") {
                            if (ref_by[0].ADDRESS1 != undefined && ref_by[0].ADDRESS1 != null && ref_by[0].ADDRESS1 != "") {
                                adress = adress + "," + ref_by[0].LOCATION_NAME;
                            }
                            else {
                                adress = ref_by[0].LOCATION_NAME;
                            }
                        }

                        document.getElementById('<%=txtrefaddr.ClientID%>').value = adress
                        document.getElementById('<%=hdnrefareaid.ClientID%>').value = ref_by[0].AREA_ID;


                        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID %>').value = ref_source[0].REFERAL_CATEGORY_NAME;
                        document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value = ref_source[0].CAT_REFRL_ID;
                        document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value = ref_source[0].REFERAL_CATEGORY_NAME;
                        $('#<%=hdncattype_id.ClientID %>').val(ref_source[0].CAT_REFRL_SOURCE_ID);


                        document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = ref_to[0].REFERED_TO_REFERAL_NAME;
                        document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = ref_to[0].REFERED_TO_REFRL_ID;
                        document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = ref_to[0].REFERED_TO_REFERAL_NAME;
                        SetReferalData(ddl);
                    }
                },
                function (jerror, jerrorstatus, errorThrown)
                { });
                }
            
                 SetReferalData(ddl);
            }
        }

        SetReferalData(ddl);
        var Sourceid = $('#<%=ddlreferral.ClientID %>');
        if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value == "YES") {
            if (document.getElementById('<%=ddlreferral.ClientID%>').value != 1) {
                referalvalidation(Sourceid);
            }
        }
        else {
            referalvalidation(Sourceid);
        }

        if (Sourceid.val() == '1') {
            $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
            $('#'+ ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
            $('#'+ ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');
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


    function ClearTab() {
        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID %>').value = "";
        document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID %>').value = 0;
        document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenText").ClientID %>').value = "";
        $('#<%=hdncattype_id.ClientID %>').val(0);
        document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID %>').value = "";
        document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID %>').value = 0;
        document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID %>').value = "";
         $('#<%=_hdnID.ClientID%>').val(0);
    }
    function MaintainSourceDetName(obj) {
        if (getParameterByName('MODE') != 'VIEW') {
            var UrlVal = ReturnIniUrl();
            var Ref_src_id = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value; ;
            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_hdn_preCond').value =Ref_src_id;
          
        }
    }
    function MaintainReferal_sourceid(Ref_id) {
        if (getParameterByName('MODE') != 'VIEW') {
            var UrlVal = ReturnIniUrl();
            var Ref_src_type_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val(); //document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value; ;
         var Ref_src_id = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_hdn_preCond').value = Ref_src_type_id + "^" + Ref_src_id;

        }
    }
    function MaintainSourceDetNameClear(obj) {
        if (getParameterByName('MODE') != 'VIEW') {
            var UrlVal = ReturnIniUrl();
            var Ref_src_id = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value; ;
             document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_hdn_preCond').value = 0;
             document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_hdn_preCond').value =0;
        }
    }

    function SetReferralClass(Obj) {
        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        var ReferalClass = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val();
        var Refrl_class_id = $('#<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').val();
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var pat_rfrl_dtl_id = $('#<%=_hdnpat_rfrl_dtl_id.ClientID%>').val();
          var RecordStatus= document.getElementById('<%=hdnRecordstatus.ClientID%>').value;
        var Ref_id = document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value;
        Name = document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value;
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        ReferedTo = document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
         var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
    var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
    var sss = document.getElementById('<%=txtsss.ClientID%>').value;
    var smstime = new Date().format('HH:mm:ss');
    if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
    }
    else {
        smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      if(sms == true){
     smsDt = new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;
     }
     else{
     smsDt="";
     }

        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

        if (SelectedRowIndex == 1) {
            GlobalMyData1 = '';isRefdtlschng1='Y';
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 2) {
            GlobalMyData2 = '';isRefdtlschng2='Y';
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 3) {isRefdtlschng3='Y';
            GlobalMyData3 = '';
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 4) {isRefdtlschng4='Y';
            GlobalMyData4 = '';
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }

    }


    function OnItemReferal(objVal, obj) {
        var CurrentRowIndex = 1;
        var results = objVal;
        document.getElementById('<%=_hdnID.ClientID%>').value = results.Value;
        if (!results.Text.toString().toLowerCase().match(/Dr./)) {
            document.getElementById('<%=hdnReferalName.ClientID%>').value = 'Dr.' + results.Text;
            document.getElementById('<%=_hdnRefText.ClientID%>').value = 'Dr.' + results.Text;
            document.getElementById('<%=_hdnID.ClientID%>').value = results.Value;
            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = '0';
            document.getElementById('<%=hdnRecordstatus.ClientID%>').value='A';
        }
        else {
            document.getElementById('<%=hdnReferalName.ClientID%>').value = results.Text;
            document.getElementById('<%=_hdnRefText.ClientID%>').value = results.Text;
            document.getElementById('<%=_hdnID.ClientID%>').value = results.Value;
            document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = '0';
            document.getElementById('<%=hdnRecordstatus.ClientID%>').value='A';
        }
        if (results.AddtionalVal == undefined || results.AddtionalVal == '') { results.AddtionalVal = ''; }
        document.getElementById('<%=txtRefPhone.ClientID%>').value = results.AddtionalVal;
        if (results.RefAddress == undefined || results.RefAddress == '') { results.RefAddress = ''; }
        document.getElementById('<%=txtrefaddr.ClientID%>').value = results.RefAddress;
        document.getElementById('<%=_hdnRefAddr.ClientID%>').value = results.RefAddress;
        document.getElementById('<%=_hdnRefPhone.ClientID%>').value = results.AddtionalVal;

        var Source = $('#<%=ddlreferral.ClientID %>').val();
        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
        var ReferalClass = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val();
        var Refrl_class_id = $('#<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').val();
        var Address = $('#<%=txtrefaddr.ClientID%>').val();
        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
        var id = $('#<%=_hdnID.ClientID%>').val();
        var Ref_id = document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value;
        Name = document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value;
        var pat_rfrl_dtl_id = document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value;
        var RecordStatus= document.getElementById('<%=hdnRecordstatus.ClientID%>').value;
        var ReferedTo = $('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
        ReferedTo = $('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
        var ReferedTo_id = $('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
        ReferedTo = document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID%>').value;
        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();
        var chksms = 'N';
        var chkleter = 'N';
        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
        if (sms == true) { chksms = "Y"; }
        var smsdate="";
        if (letter == true) { chkleter = "Y"; }
        var Remarks = $('#<%=txtremarks.ClientID%>').val();
        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
        <%=txtsss.ClientID%>
       
        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
    var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
    var sss = document.getElementById('<%=txtsss.ClientID%>').value;
    var smstime = new Date().format('HH:mm:ss');
    if (sHrs != "") {
        smstime = sHrs + ":" + sMn + ":" + sss;
    }
    else {
        smstime = new Date().format('HH:mm:ss');
    }

     var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
      if(sms == true){
     smsDt = new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;
     }
     else{
     smsDt="";
     }

        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;

        if (SelectedRowIndex == 1) {
            GlobalMyData1 = '';isRefdtlschng1='Y';
            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 2) {
            GlobalMyData2 = '';isRefdtlschng2='Y';
            multiDimArrayR2(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 3) {
            GlobalMyData3 = '';isRefdtlschng3='Y';
            multiDimArrayR3(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }
        if (SelectedRowIndex == 4) {
            GlobalMyData4 = '';isRefdtlschng4='Y';
            multiDimArrayR4(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
        }

    }

    //Referral Info Add Saving Start
    function QuickREfValidate() {

        var areaid = document.getElementById('<%=hdnAreaId.ClientID %>').value;
        if (document.getElementById('<%=ddlRefSourceType.ClientID%>').value == '0') {
            $(".stoast").toastText("warning", "Please select the source of referral!", 5, 3);
            document.getElementById('<%=ddlRefSourceType.ClientID%>').focus();
            return false;
        }
        else if (document.getElementById('<%=txtRefName.ClientID%>').value == '') {
            $(".stoast").toastText("warning", "Please Enter Referal Name", 5, 3);
            document.getElementById('<%=txtRefName.ClientID%>').focus();
            return false;
        }
 
        else if (document.getElementById('<%=ddlRefClass.ClientID%>').value == 0) {
            $(".stoast").toastText("warning", "Please Enter Referal Class", 5, 3);
            document.getElementById('<%=ddlRefClass.ClientID%>').focus();
            return false;
        }
      
        else if (document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value == '' || areaid == '' || areaid == 0 || areaid == null || areaid == undefined) {
            $(".stoast").toastText("warning", "Please select area!.", 5, 3);
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_Lookuparea').focus();
            return false;
        }
        else {
            var refname = document.getElementById('<%=txtRefName.ClientID%>').value;
            var refphno = document.getElementById('<%=txtRefMobile.ClientID%>').value;
            var refclass = document.getElementById('<%= ddlRefClass.ClientID%>').value;
            var refsrc = document.getElementById('<%=ddlRefSourceType.ClientID%>').value;
            var refregno = document.getElementById('<%=txtRefRegistNo.ClientID%>').value;
            var area = document.getElementById('<%=hdnAreaId.ClientID %>').value;
            var country = document.getElementById('<%=hdncountryid.ClientID %>').value;
            var state = document.getElementById('<%=hdnstateid.ClientID %>').value;
            var city = document.getElementById('<%=hdnCityId.ClientID %>').value;
            var address = document.getElementById('<%=txtaddressref.ClientID%>').value;
            var mailid = document.getElementById('<%=txtemailid.ClientID%>').value;
            var _District = document.getElementById('<%=hdndistrictid.ClientID %>').value; ;
            if (area == '' || area == null || area == undefined) { area = "0"; }
            if (country == '' || country == null || country == undefined) { country = "0"; }
            if (state == '' || state == null || state == undefined) { state = "0"; }
            if (city == '' || city == null || city == undefined) { city = "0"; }
            if (_District == '' || _District == null || _District == undefined) { _District = "0"; }

            if (refsrc != 3) {
                GetAsync(
                "Referal.asmx/ReferralSave",
                { Ref_Name: refname, Ref_phNo: refphno, Ref_Src: refsrc, Ref_RegNo: refregno, area: area, country: country, state: state, city: city, address: address, RefClass: refclass, District: _District, mailid: mailid,referencetypeid:1 },
                function (JData) {
                    if (JData != 0) {
                        $(".stoast").toastText("Info", "Saved Successfully!", 7, 2);
                        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = refname;
                        document.getElementById('<%=ddlreferral.ClientID %>').value = refsrc;
                        document.getElementById('<%=txtRefPhone.ClientID%>').value = refphno;
                        document.getElementById('<%=txtrefaddr.ClientID%>').value = address;
                        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').className = 'grey';
                        document.getElementById('<%=ddlreferral.ClientID %>').className = 'grey';
                        document.getElementById('<%=_hdnRefAddr.ClientID%>').value = address;
                        document.getElementById('<%=_hdnRefPhone.ClientID%>').value = refphno;
                        document.getElementById('<%=_hdnID.ClientID%>').value = JData.d;
                        document.getElementById('<%=txtRefName.ClientID%>').value = '';
                        document.getElementById('<%=txtRefMobile.ClientID%>').value = '';
                        document.getElementById('<%=ddlRefSourceType.ClientID%>').value = '--select--';
                        document.getElementById('<%=txtRefRegistNo.ClientID%>').value = '';
                        document.getElementById('<%=hdnAreaId.ClientID %>').value = '';
                        document.getElementById('<%=hdncountryid.ClientID %>').value = '';
                        document.getElementById('<%=hdnstateid.ClientID %>').value = ''
                        document.getElementById('<%=hdnCityId.ClientID %>').value = '';
                        document.getElementById('<%=txtaddressref.ClientID%>').value = '';
                        document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value = '';
                        document.getElementById('<%=txtcountry.ClientID%>').value = '';
                        document.getElementById('<%=txtstate.ClientID %>').value = '';
                        document.getElementById('<%=txtcity.ClientID %>').value = '';
                        $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val(""); // (refclass);
                        //$find('ctl00_ContentPlaceHolder1_QckReferalPopup').hide();
                        var Source = $('#<%=ddlreferral.ClientID %>').val();
                        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
                        var ReferalClass = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val();
                        var Refrl_class_id = $('#<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').val();
                        var Address = $('#<%=txtrefaddr.ClientID%>').val();
                        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
                        var id = $('#<%=_hdnID.ClientID%>').val();
                        var pat_rfrl_dtl_id = $('#<%=_hdnpat_rfrl_dtl_id.ClientID%>').val();
                        var RecordStatus= document.getElementById('<%=hdnRecordstatus.ClientID%>').value;
                        var RefArea_Id = document.getElementById('<%=hdnrefareaid.ClientID%>').value;
                        var ref_id = JData.d;
                        var chksms = 'N';
                        var chkleter = 'N';
                        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
                        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
                        if (sms == true) { chksms = "Y"; }
                        var smsdate="";
                        if (letter == true) { chkleter = "Y"; }

                        var sHrs = document.getElementById('<%=txtshh.ClientID%>').value;
                        var sMn = document.getElementById('<%=txtsmm.ClientID%>').value;
                        var sss = document.getElementById('<%=txtsss.ClientID%>').value;
                        var smstime = new Date().format('HH:mm:ss');
                        if (sHrs != "") {
                            smstime = sHrs + ":" + sMn + ":" + sss;
                        }
                        else {
                            smstime = new Date().format('HH:mm:ss');
                        }

                         var smsDt = new Date(document.getElementById('<%=txtSMSDt.ClientID%>').value).format('dd-MMM-yyyy');
                          if(sms == true){
                         smsDt = new Date(smsDt).format('yyyy-MM-dd') + " " + smstime;
                         }
                         else{
                         smsDt="";
                         }
                        var Remarks = $('#<%=txtremarks.ClientID%>').val();
                        var ReferedTo = Name; //$('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
                        ReferedTo = Name; //$('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
                        var ReferedTo_id = ref_id; //$('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
                        ReferedTo = Name;
                        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val(); // document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID%>').value;
                        $('[id*=DivReferal]')[0].style.display = 'none';
                        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                        if (SelectedRowIndex == 1) {
                            multiDimArrayR1(SelectedRowIndex, Source, Name, ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
                        }
                        if (SelectedRowIndex == 2) {
                            multiDimArrayR2(SelectedRowIndex, Source, Name, ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
                        }
                        if (SelectedRowIndex == 3) {
                            multiDimArrayR3(SelectedRowIndex, Source, Name, ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
                        }
                        if (SelectedRowIndex == 4) {
                            multiDimArrayR4(SelectedRowIndex, Source, Name, ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt,RecordStatus);
                        }
                    }
                    else {
                        $(".stoast").toastText("Info", "Failed To Add Referral!", 7, 2);
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", errorThrown, 5, 3);
                });
            }
            else {
                GetAsync(
                "Referal.asmx/ReferralSaveStaff",
                { Ref_Name: refname, Ref_phNo: refphno, Ref_Src: refsrc, Ref_RegNo: refregno, area: area, country: country, state: state, city: city, address: address },
                function (JData) {
                    if (JData != 0) {
                        $(".stoast").toastText("Info", "Saved Successfully!", 7, 2);
                        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = refname;
                        document.getElementById('<%=ddlreferral.ClientID %>').value = refsrc;
                        document.getElementById('<%=txtRefPhone.ClientID%>').value = refphno;
                        document.getElementById('<%=txtrefaddr.ClientID%>').value = address;
                        document.getElementById('<%=_hdnRefAddr.ClientID%>').value = address;
                        document.getElementById('<%=_hdnRefPhone.ClientID%>').value = refphno;
                        document.getElementById('<%=_hdnID.ClientID%>').value = JData.d;
                        document.getElementById('<%=txtRefName.ClientID%>').value = '';
                        document.getElementById('<%=txtRefMobile.ClientID%>').value = '';
                        document.getElementById('<%=ddlRefSourceType.ClientID%>').value = '--select--';
                        document.getElementById('<%=txtRefRegistNo.ClientID%>').value = '';
                        document.getElementById('<%=hdnAreaId.ClientID %>').value = '';
                        document.getElementById('<%=hdncountryid.ClientID %>').value = '';
                        document.getElementById('<%=hdnstateid.ClientID %>').value = ''
                        document.getElementById('<%=hdnCityId.ClientID %>').value = '';
                        document.getElementById('<%=txtaddressref.ClientID%>').value = '';
                        document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value = '';
                        document.getElementById('<%=txtcountry.ClientID%>').value = '';
                        document.getElementById('<%=txtstate.ClientID %>').value = '';
                        document.getElementById('<%=txtcity.ClientID %>').value = '';
                        //$find('ctl00_ContentPlaceHolder1_QckReferalPopup').hide();
                        var Source = $('#<%=ddlreferral.ClientID %>').val();
                        var Name = $('#<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').val();
                        var ReferalClass = $('#<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').val();
                        var Refrl_class_id = $('#<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').val();
                        var Address = $('#<%=txtrefaddr.ClientID%>').val();
                        var Phone = $('#<%=txtRefPhone.ClientID%>').val();
                        var id = $('#<%=_hdnID.ClientID%>').val();
                        var pat_rfrl_dtl_id = $('#<%=_hdnpat_rfrl_dtl_id.ClientID%>').val();
                        var RecordStatus= document.getElementById('<%=hdnRecordstatus.ClientID%>').value;
                        var ReferedTo = Name; //$('#<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').val();
                        ReferedTo = Name; //$('#<%=ucReferedto.FindControl("_hiddenText").ClientID%>').val();
                        var ReferedTo_id = ref_id; //$('#<%=ucReferedto.FindControl("_hiddenID").ClientID%>').val();
                        ReferedTo = Name; // document.getElementById('<%=ucReferedto.FindControl("_hiddenText").ClientID%>').value;
                        var Cat_type_id = $('#<%=hdncattype_id.ClientID %>').val();

                        var chksms = 'N';
                        var chkleter = 'N';
                        var sms = $('#<%=chkSMS.ClientID%>').prop('checked');
                        var letter = $('#<%=chkLeter.ClientID%>').prop('checked');
                        if (sms == true) { chksms = "Y"; }
                        var smsdate="";
                        if (letter == true) { chkleter = "Y"; }
                        var Remarks = $('#<%=txtremarks.ClientID%>').val();

                        $('[id*=DivReferal]')[0].style.display = 'none';
                        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                        if (SelectedRowIndex == 1) {
                            multiDimArrayR1(SelectedRowIndex, Source, Name, '', ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo);
                        }
                        if (SelectedRowIndex == 2) {
                            multiDimArrayR2(SelectedRowIndex, Source, Name, '', ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo);
                        }
                        if (SelectedRowIndex == 3) {
                            multiDimArrayR3(SelectedRowIndex, Source, Name, '', ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo);
                        }
                    }
                    else {
                        $(".stoast").toastText("warning", "Failed To Add Referral", 5, 3);
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    $(".stoast").toastText("warning", errorThrown, 5, 3);
                });
            }
        }
        clearreferalquick();
    }
    //Referral Info Add Saving End
    function ClosingReferalPopup() {
        $('[id*=DivReferal]')[0].style.display = 'none';
        $('#progress').hide();
        return false;
    }
    function clearreferalquick() {
        document.getElementById('' + ctrlcom + '_ucReferal_ddlRefSourceType').value = "--Select--";
        document.getElementById('' + ctrlcom + '_ucReferal_txtRefName').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_ddlRefClass').value = "--Select--";
        document.getElementById('' + ctrlcom + '_ucReferal_txtRefRegistNo').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_txtRefMobile').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_txtemailid').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_txtaddressref').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_Lookuparea_txtSearchControl').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_txtcountry').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_txtstate').value = "";
        document.getElementById('' + ctrlcom + '_ucReferal_txtcity').value = "";
    }

    function lookupareasselection(text) {
        if (text.ID == undefined) {
            document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value = text.AREA_NAME;
            $('#'+ ctrlcom + '_ucReferal_Lookuparea__hiddenText').val(text.AREA_NAME);
            $('#'+ ctrlcom + '_ucReferal_Lookuparea__hiddenID').val(text.AREA_ID);
            document.getElementById('<%=hdnAreaId.ClientID %>').value = text.AREA_ID;
            document.getElementById('<%=txtcountry.ClientID%>').value = text.COUNTRY_NAME;
            document.getElementById('<%=txtstate.ClientID %>').value = text.STATE_NAME;
            document.getElementById('<%=txtcity.ClientID %>').value = text.CITY_NAME;
            document.getElementById('<%=hdnCityId.ClientID %>').value = text.CITY_ID;
            document.getElementById('<%=hdncountryid.ClientID %>').value = text.COUNTRY_ID;
            document.getElementById('<%=hdnstateid.ClientID %>').value = text.STATE_ID;
            document.getElementById('<%=txtdistrict.ClientID %>').value = text.DISTRICT_NAME;
            document.getElementById('<%=hdndistrictid.ClientID %>').value = text.DISTRICT_ID;
        }
        else {
            document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value = text.RESULT.AREA_NAME;
            $('#'+ ctrlcom + '_ucReferal_Lookuparea__hiddenText').val(text.RESULT.AREA_NAME);
            $('#'+ ctrlcom + '_ucReferal_Lookuparea__hiddenID').val(text.RESULT.ID);
            document.getElementById('<%=hdnAreaId.ClientID %>').value = text.ID;
            document.getElementById('<%=txtcountry.ClientID%>').value = text.RESULT.COUNTRY_NAME;
            document.getElementById('<%=txtstate.ClientID %>').value = text.RESULT.STATE_NAME;
            document.getElementById('<%=txtcity.ClientID %>').value = text.RESULT.CITY_NAME;
            document.getElementById('<%=hdnCityId.ClientID %>').value = text.RESULT.CITY_ID;
            document.getElementById('<%=hdncountryid.ClientID %>').value = text.RESULT.COUNTRY_ID;
            document.getElementById('<%=hdnstateid.ClientID %>').value = text.RESULT.STATE_ID;
            document.getElementById('<%=txtdistrict.ClientID %>').value = text.RESULT.DISTRICT_NAME;
            document.getElementById('<%=hdndistrictid.ClientID %>').value = text.RESULT.DISTRICT_ID;
        }
        if (document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value == '') {
            document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').className = 'red';
        }
        else {
            document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').className = 'grey';
        }
        return false;
    }
    function clearRefDtls() {
        GlobalMyData1 = '';
        GlobalMyData2 = '';
        GlobalMyData3 = '';
        GlobalMyData4 = '';
        document.getElementById('<%=ddlreferral.ClientID %>').value = 0;
        document.getElementById('<%=ucreferalname.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=ucreferalname.FindControl("_hiddenID").ClientID%>').value = '';
        document.getElementById('<%=ucreferalname.FindControl("_hiddenText").ClientID%>').value = '';
        document.getElementById('<%=ucReferedto.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=ucReferedto.FindControl("_hiddenID").ClientID%>').value = 0;
        document.getElementById('<%=ucrfrlsrc.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=ucrfrlsrc.FindControl("_hiddenID").ClientID%>').value = 0;
        $('#<%=hdncattype_id.ClientID %>').val(0);
        document.getElementById('<%=txtrefaddr.ClientID%>').value = '';
        document.getElementById('<%=txtRefPhone.ClientID%>').value = '';
        document.getElementById('<%=_hdnID.ClientID%>').value = 0;
        document.getElementById('<%=_hdnpat_rfrl_dtl_id.ClientID%>').value = 0;
        document.getElementById('<%=hdnRecordstatus.ClientID%>').value='A';
        document.getElementById('' + ctrlcom + '_ucReferal_chkSMS').checked = false;
        document.getElementById('' + ctrlcom + '_ucReferal_chkLeter').checked = false;
        document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value = '';
    }

    function clearpopupcontrols() {
        var referalsource = document.getElementById('<%=ddlreferral.ClientID %>').value;
        if (referalsource == 1) {
            $(".stoast").toastText("Warning", "System should not allow to add a referral when Walk-in is selected", 5, 3);
            return false;
        }
        document.getElementById('<%=txtRefName.ClientID%>').value = '';
        document.getElementById('<%=ddlRefClass.ClientID%>').value = 0;
        document.getElementById('<%=txtRefMobile.ClientID%>').value = '';
        document.getElementById('<%=txtRefRegistNo.ClientID%>').value = '';
        document.getElementById('<%=hdnAreaId.ClientID %>').value = '';
        document.getElementById('<%=hdncountryid.ClientID %>').value = '';
        document.getElementById('<%=hdnstateid.ClientID %>').value = ''
        document.getElementById('<%=hdnCityId.ClientID %>').value = '';
        document.getElementById('<%=txtemailid.ClientID %>').value = '';
        document.getElementById('<%=txtaddressref.ClientID%>').value = '';
        document.getElementById('<%=Lookuparea.FindControl("txtSearchControl").ClientID%>').value = '';
        document.getElementById('<%=txtcountry.ClientID%>').value = '';
        document.getElementById('<%=txtstate.ClientID %>').value = '';
        document.getElementById('<%=txtcity.ClientID %>').value = '';
        document.getElementById('<%=txtdistrict.ClientID %>').value = '';
        //QuickREfValidate(); /* Clearing Details Validation No Need Commented By Pushkar */
        var referalsource = document.getElementById('<%=ddlreferral.ClientID %>').value;
        if (referalsource == '' || referalsource == undefined || referalsource == null || referalsource == '2') { referalsource = '0'; }
        document.getElementById('<%=ddlRefSourceType.ClientID%>').value = referalsource;
        if (document.getElementById('<%=hdnRefQucikAdd.ClientID%>').value == 'Y') {
            $('[id*=DivReferal]')[0].style.display = 'block';
        }
        else {
            $('[id*=DivReferal]')[0].style.display = 'none';
           // $(".stoast").toastText("warning", "You dont have permission to Quick Add", 5, 3);
           // return false;
        }
        validationColors();
        return false;
    }

    function RefSelection() {
    }
    function OnReferalAddtionalIfo() {
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value > 1) {
            var lblrefAddress = document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value;
            var lblRefPhno = document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value;
            $('[id*=lblrefAddAddress]').text(lblrefAddress);
            $('[id*=lblRefAddPhno]').text(lblRefPhno);
            $('[id*=DivAddtionalIfno]')[0].style.display = 'block';
        }
        return false;
    }
    function ClosingAddtionalInfoPopup() {
        $('[id*=DivAddtionalIfno]')[0].style.display = 'none';
        return false;
    }

    function validationColors() {
        var _chkValidation = true;
        var _ctrls = new Array();
        _ctrls[0] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlRefSourceType';
        _ctrls[1] = 'ctl00_ContentPlaceHolder1_ucReferal_txtRefName';
        _ctrls[2] = 'ctl00_ContentPlaceHolder1_ucReferal_ddlRefClass';
       // _ctrls[3] = 'ctl00_ContentPlaceHolder1_ucReferal_txtRefMobile';
        _ctrls[4] = 'ctl00_ContentPlaceHolder1_ucReferal_Lookuparea_txtSearchControl';
       // _ctrls[5] = 'ctl00_ContentPlaceHolder1_ucReferal_txtRefRegistNo';
      //  _ctrls[6] = 'ctl00_ContentPlaceHolder1_ucReferal_txtemailid';

        for (var i = 0; i < _ctrls.length; i++) {

            var ctrl = document.getElementById(_ctrls[i]);
            if (OnNullValue(ctrl) == false) {

                _chkValidation = false;
            }
        }

        return _chkValidation;
    }
    //    function OnNullValue() {
    //    }
    function showPatReffralDetails() {
        var sourcevalve = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == '0') {
            $(".stoast").toastText("warning", "Please select Source#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').focus();
            return false;
        }
        if (sourcevalve == 2 || sourcevalve == 3) {//|| sourcevalve == 7 || sourcevalve == 14 || sourcevalve == 22 || sourcevalve == 25 || sourcevalve == 27 || sourcevalve == 2 || sourcevalve == 18) { /*Doctor 2,corporate 18 is not in ref master*/
            $(".stoast").toastText("warning", "Referral Info not available for this Referral Source# ", 5, 3);
            return false;
        }
        if (document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value == '') {
            $(".stoast").toastText("warning", "Please select Referral Name#!.", 5, 3);
            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').focus();
            return false;
        }

        AssignBannerAddressDetails();
        $("#patMultiRefDtls").show();

        return false;
    }
    function HidePatMultiRef() {
        $("#patMultiRefDtls").hide();
        return false;
    }
    function AssignBannerAddressDetails() {
        var referlid = document.getElementById('<%=_hdnID.ClientID %>').value;
        var refID = 0;
        GetAsync(
                    "PatientRegistration.asmx/Get_Patient_referal_Details",
                    { refID: referlid },
                    function (jdata) {
                        var result = jdata.d;
                        if (result != null) {
                            if (result.length > 0) {
                                document.getElementById('<%=lbladdress.ClientID %>').innerHTML = result[0]["Address1"] + ", " + result[0]["Address2"];
                                document.getElementById('<%=lblArea.ClientID %>').innerHTML = result[0]["AREA_NAME"];
                                document.getElementById('<%=lblCity.ClientID %>').innerHTML = result[0]["CITY_NAME"];
                                document.getElementById('<%=lblState.ClientID %>').innerHTML = result[0]["STATE_NAME"];
                                document.getElementById('<%=lblCountry.ClientID %>').innerHTML = result[0]["COUNTRY_NAME"];
                                document.getElementById('<%=lblCode.ClientID %>').innerHTML = result[0]["ZipCode"];
                                document.getElementById('<%=lblfax.ClientID %>').innerHTML = result[0]["FAX_NUMBER"];
                                document.getElementById('<%=lblTelNo.ClientID %>').innerHTML = result[0]["HOME_PHONE"];
                                document.getElementById('<%=lblMobNo.ClientID %>').innerHTML = result[0]["MOBILE_PHONE"];
                                document.getElementById('<%=lblEmail.ClientID %>').innerHTML = result[0]["Email_ID"];
                                document.getElementById('<%=lblproname.ClientID %>').innerHTML = result[0]["PRO_NAME"];
                                document.getElementById('<%=lblHospName.ClientID %>').innerHTML = result[0]["HOSPITAL_NAME"];
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        $(".stoast").toastText("warning", errorThrown, 5, 3);
                    });

        return false;

    }
</script>
<script type="text/javascript">
    function checkRefnamevalidation() {
        var SOURCEID = document.getElementById("" + ctrlcom + "_ucReferal_ddlRefSourceType").value;
        var NAME = document.getElementById("" + ctrlcom + "_ucReferal_txtRefName").value;
        var _total_records = 0;
        $.ajax({
            type: "POST",
            url: UrlVal + "PatientRegistration.asmx/referalmethod",
            data: "{'SOURCEID':'" + SOURCEID + "','NAME':'" + NAME + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (jqXHR, textStatus, errorThrown) { },
            success: function (jdata) {
                if (jdata.d == true) {
                    $(".stoast").toastText("Info", "This  Referal Name is alredy selected!", 5, 2);
                    document.getElementById('' + ctrlcom + '_ucReferal_txtRefName').value = "";
                }
                else {
                    return false;
                }
            }
        });

        return false;

    }
    function colourchange() {
        if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value != "0") {
            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').className = 'grey';

        }
    }
    function referalvalidation(id) {
        var ctrlid = id[0]["id"];
        if (document.getElementById('' + ctrlcom + '_ucReferal_hdndocname').value != "ER" && document.getElementById('' + ctrlcom + '_hdnRefReq').value == "Yes") {
            if (document.getElementById(ctrlid) == document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral') && document.getElementById(ctrlid) != '') {
                $('#' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').addClass('red');
//                if (document.getElementById('<%=hdnreferaldisable.ClientID%>').value != "YES") {
//                    $('#' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').addClass('red');
//                    $('#' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').addClass('red');
//                }
                $('#' + ctrlid).removeClass('red');

            }
            else if (document.getElementById(ctrlid) != '') {
                $('#' + ctrlid).removeClass('red');
            }
        }
       
        var Ref_src_type_id = $('#<%=ucreferalname.FindControl("_hiddenID").ClientID%>').val();
        var Ref_src_id = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_hdn_preCond').value = Ref_src_type_id + "^" + Ref_src_id;

    }
    /* function MobileNoSettingSavevalidate1(obj) {
    if ($('[id*=hdnMobileMaxDigits]') != null || $('[id*=hdnMobileMaxDigits]') != undefined) {
    var maxmobilenodigits = $('[id*=hdnMobileMaxDigits]').val();
    var minmobilenodigits = $('[id*=hdnMobileMinDigits]').val();
    if (document.getElementById(obj.id) != null) {
    var x = document.getElementById(obj.id).value;
    if (x.length < minmobilenodigits) {
    $(".stoast").toastText("warning", "Enter Minimum of " + minmobilenodigits + " Digits Mobile Number", 5, 3);

    }
    }
    }
    }*/
    function CheckMblNo1(ev) {
        if (document.getElementById(ev.id).value == '0000000000') {
            document.getElementById(ev.id).value = '';
            $(".stoast").toastText("warning", "The mobile number should not be all zeros!", 2, 3);
            return false;
        }
    }
    function CheckrefMobile(ev) {

        if (document.getElementById('' + ctrlcom + '_ucReferal_txtRefMobile').value == '0000000000') {
            document.getElementById('' + ctrlcom + '_ucReferal_txtRefMobile').value = '';
            $(".stoast").toastText("warning", "The mobile number should not be all zeros!", 2, 3);
            document.getElementById('' + ctrlcom + '_ucReferal_txtRefMobile').focus();
            return false;
        }

    }
    function CheckSMSDT(event) {
        var trsms = 'trsmsDt';

        //  var admnDt = new Date().format('dd-MMM-yyyy');
        if (event.checked == true) {
            document.getElementById(trsms).style.display = 'table-cell';
            //document.getElementById('<%=btnsmsdt.ClientID%>').value;.style.display = "none";


        }
        else {
            document.getElementById(trsms).style.display = 'none';

        }
    }

    function ValidateSMSDate(sender, args) {

        if (sender._selectedDate > new Date()) {
            $(".stoast").toastText("Alert", "You cannot select a future date!", 3, 2);
            sender._selectedDate = new Date();
            sender._textbox.set_Value(sender._selectedDate.format(sender._format))
            document.getElementById('' + ctrlcom + '_ucReferal_txtSMSDt').value = sender._selectedDate.format('dd-MMM-yyyy');

            return false;
        }
        document.getElementById('' + ctrlcom + '_ucReferal_txtSMSDt').value = sender._selectedDate.format('dd-MMM-yyyy');

    }
</script>
<style>
    .floating-label
    {
        display: none;
    }
    .reff-panelH .reff-moreD > table > tbody > tr > td:nth-child(2)
    {
        width: 100%;
    }
</style>
<div class="panel-heading tabs">
    <h3 class="panel-title tab_title">
        Referral Info</h3>
    <div class="tabed-div">
        <div id="ReferalDiv" class="tabed-panel">
            <ul>
                <li id="R1" class="select" data-tar="item1">R1</li>
                <li id="R2" data-tar="item2">R2</li>
                <li id="R3" data-tar="item3">R3</li>
                <li id="R4" data-tar="item4">R4</li>
            </ul>
        </div>
    </div>
    <label id="Clearid" onclick="ClaerClickOnReferalControl();" class="su-refresh-1 pheadico tooltip"
        title="Clear">
    </label>
    <div class="clr">
    </div>
    <div class="addnew tooltip" style="display:none" title="Add New Referral">
        <asp:ImageButton ID="btnQkAdd" runat="server" ImageUrl="~/Assets/img/gray-sprite.png"
            CssClass="flagclip QuickICO " OnClientClick="return clearpopupcontrols();" />
    </div>
</div>
<div class="reff-panelH panel-hide" style="    clear: both;">
    <div id="Refscroll" class="panel-body reff-moreD">
     <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl">
            <tr>
            <td>
             <div class="formflex flex-column ">
             <div class="formelements">
                                    <div class="formelementslbl">
                                      <asp:Label CssClass="ellip" ID="lblrefSrc" runat="server" Text="Referral Type"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                        <asp:DropDownList ID="ddlreferral" runat="server" placeholder=" " TabIndex="26" ToolTip="Select Referral"
                            onchange=" SetReferalContextKey(this);OnEmrgncy(this);return cleardata();" onblur="colourchange();">
                        </asp:DropDownList>
                                    </div>
                                </div>
                                
                                   <div class="formelements">
                                    <div class="formelementslbl">
                                      <asp:Label ID="lblrefName" runat="server" Text="Referred By"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                      <div id="divlookups" runat="server" class="btntxt refflook">
                            <asp:HiddenField ID="_hdnID" runat="server" />
                            <asp:HiddenField ID="_hdnpat_rfrl_dtl_id" runat="server" />
                            <asp:HiddenField ID="hdnRecordstatus" runat="server" />
                            <asp:HiddenField ID="_hdnRefText" runat="server" />
                            <asp:HiddenField ID="_hdnRefPhone" runat="server" />
                            <asp:HiddenField ID="_hdnRefAddr" runat="server" />
                            <Lookup:Search ID="ucreferalname" runat="server" OnBlurRequired="true" CallbackFn="onRefSelection" />
                            <div id="AutoReferalDiv" class="lk_auto_options">
                            </div>
                            <div id="divREfInfo" runat="server" class="txtbtn">
                                <i id="butnInfo" title="Referred Information" onclick="return showPatReffralDetails();"
                                    class="icon-info-2 lookupico tooltip"></i>
                            </div>
                        </div>
                                    </div>
                                </div>
                                
                                   <div class="formelements">
                                    <div class="formelementslbl">
                                     <asp:Label CssClass="ellip" ID="lblrefcls" runat="server" Text="Referral Source"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                         <Lookup:Search ID="ucrfrlsrc" runat="server" OnBlurRequired="true" CallbackFn="onRefSource" />
                        <asp:HiddenField ID="hdncattype_id" runat="server" />
                                    </div>
                                </div>
                                
                                 <div class="formelements">
                                    <div class="formelementslbl">
                                     <asp:Label CssClass="ellip" ID="lblreferedto" runat="server" Text="Referred To"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                      <Lookup:Search ID="ucReferedto" runat="server" OnBlurRequired="true" CallbackFn="onRefToSelection" />
                                    </div>
                                </div>
                                 <div class="formelements">
                                    <div class="formelementslbl">
                                      <asp:Label CssClass="ellip" ID="lblRefAddress" runat="server" Text="Address"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                      <asp:TextBox ID="txtrefaddr" runat="server" Height="26px" placeholder=" " disabled="true"
                            CssClass="reff-ta" TextMode="MultiLine" TabIndex="28" ondragstart="return false"
                            draggable="false" ondrop="filterOnDragDrop(event);" ondragenter="filterOnDragDrop(event);"
                            ondragover="filterOnDragDrop(event);">
                        </asp:TextBox>
                                    </div>
                                </div>
                                 <div class="formelements">
                                    <div class="formelementslbl">
                                     <asp:Label CssClass="ellip" ID="lblrefPhno" runat="server" Text="Phone #"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                     <div class="btntxt" style="padding-right: 110px;">
                            <asp:TextBox ID="txtRefPhone" placeholder=" " Height="20px" disabled="true" runat="server"
                                ToolTip="Enter Phone Number" TabIndex="29" MaxLength="12">
                            </asp:TextBox>
                            <div class="txtbtn">
                                <asp:CheckBox ID="chkSMS" runat="server" Text="SMS" onclick="return clicksms(),CheckSMSDT(this);" />
                                <asp:CheckBox ID="chkLeter" runat="server" Text="LETTER" onclick="return clickLetter();" /></div>
                        </div>
                                    </div>
                                </div>
                                 <div class="formelements"  id="trsmsDt" style="display: none;">

                                    <div class="formelementstxt">
                                      <div>
                        <div style="width: 45%; float: left;">
                            <asp:TextBox ID="txtSMSDt" runat="server" CssClass="ReadOnlyTextBox" ReadOnly="true"
                                onchange="return clicksms(this);"></asp:TextBox>
                            <asp:HiddenField ID="hdnchksmsDate" runat="server" />
                            <div class="txtbtn">
                                <asp:Button ID="btnsmsdt" runat="server" CssClass="tb_Btn calendar" Text="" /></div>
                            <ajaxToolkit:CalendarExtender ID="smscalender" CssClass="MyCalendar" runat="server"
                                Format="dd-MMM-yyyy" OnClientDateSelectionChanged="ValidateSMSDate" PopupButtonID="btnsmsdt"
                                TargetControlID="txtSMSDt">
                            </ajaxToolkit:CalendarExtender>
                        </div>
                        <asp:TextBox ID="txtshh" Width="11%" runat="server" onkeypress="return CheckNumericphno(event);"
                            onkeyup="return chkHHsms()" onblur="return clicksms();" PlaceHolder="hh" MaxLength="2"></asp:TextBox>
                        <asp:TextBox ID="txtsmm" Width="15%" runat="server" onkeypress="return CheckNumericphno(event);"
                            onkeyup="return chkHHsms()" onblur="return clicksms();" MaxLength="2" PlaceHolder="mm"></asp:TextBox>
                        <asp:TextBox ID="txtsss" Width="13%" runat="server" onkeypress="return CheckNumericphno(event);"
                            onkeyup="return chkHHsms()" onblur="return clicksms();" MaxLength="2" PlaceHolder="ss"></asp:TextBox>
                    </div>
                                    </div>
                                </div>
                                 <div class="formelements">
                                    <div class="formelementslbl">
                                     <asp:Label CssClass="ellip" ID="lblremarks" runat="server" Text="Remarks"></asp:Label>
                                    </div>
                                    <div class="formelementstxt">
                                        <asp:TextBox ID="txtremarks" placeholder=" " Height="26px" runat="server" TextMode="MultiLine"
                            onblur="return onremarks();">
                        </asp:TextBox>
                                    </div>
                                </div>
                                
                         
                           
                           
                                
                                </div>
            </td>
            </tr>
            </table>

    </div>
    <i class="reffmore"></i>
</div>
<div id="DivReferal" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="margin-left: -250px; margin-top: -200px; width: 400px;">
        <div class="pop-header">
            <h1>
                Quick Referral Add
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button2" runat="server" OnClientClick="return ClosingReferalPopup();"
                CssClass="cbutton" Text="&times;" />
        </div>
        <div class="pop-body" style="padding: 10px 5px 10px 5px; overflow: auto; height: 345px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                <tr>
                    <td align="left" width="3%">
                        <label class="ellip">
                            Referral Type</label>
                    </td>
                    <td align="left" width="70%">
                        <asp:DropDownList ID="ddlRefSourceType" runat="server" onchange="return OnNullValue(this);">
                            <asp:ListItem Value="0">--Select--</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Referral By</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtRefName" runat="server" onkeyup="return OnNullValue(this);" autocomplete="off"
                            onblur="return checkRefnamevalidation();">
                        </asp:TextBox>
                        <%--this.value=TitleCase(this);--%>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Referral Source</label>
                    </td>
                    <td align="left">
                        <%--<asp:TextBox ID="txtRefClass" runat="server" onkeyup="return OnNullValue(this);" autocomplete="off"
                            onblur="this.value=TitleCase(this);"></asp:TextBox>--%>
                        <asp:DropDownList ID="ddlRefClass" runat="server" onchange="return OnNullValue(this);">
                        </asp:DropDownList>
                    </td>
                </tr>
                <%-- <tr>
                    <td>
                        Referal To
                    </td>
                    <td>
                        <asp:TextBox ID="txtreferalBy" runat="server"></asp:TextBox>
                    </td>
                </tr>--%>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Registration #</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtRefRegistNo" runat="server" autocomplete="off" onblur="this.value=TitleCase(this); ">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Mobile #</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtRefMobile" runat="server" autocomplete="off" onkeypress="return chkNumeric(event);"
                            onblur="CheckMblNo1(this);return MobileNoSettingSavevalidate1(this);" MaxLength="10">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Email Id</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtemailid" runat="server" onchange="return EmailIdValidation(this);"
                            autocomplete="off">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Address</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtaddressref" runat="server" TextMode="MultiLine" autocomplete="off">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Area</label>
                    </td>
                    <td align="left">
                        <Lookup:Search ID="Lookuparea" runat="server" CallbackFn="lookupareasselection" />
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            Country</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtcountry" runat="server" Enabled="false">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            State</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtstate" runat="server" Enabled="false">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            District</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtdistrict" runat="server" Enabled="false">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <label class="ellip">
                            City</label>
                    </td>
                    <td align="left">
                        <asp:TextBox ID="txtcity" runat="server" Enabled="false">
                        </asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td align="center" colspan="2" style="padding: 5px 0 0 0;">
                        <input type="button" id="imgSave" onclick="QuickREfValidate();" value="Save and Close"
                            class="button" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div id="DivAddtionalIfno" runat="server" class="masking">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="margin-left: -200px; margin-top: -150px; width: 360px;">
        <div class="pop-header">
            <h1>
                Referral Additional Info
            </h1>
            <asp:Button buttonaction="cancelButton" ID="Button1" runat="server" OnClientClick="return ClosingAddtionalInfoPopup();"
                CssClass="cbutton" Text="&times;" />
        </div>
        <div class="pop-body" style="padding: 10px 5px 10px 5px; overflow: auto; height: 100px;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                <tr>
                    <td align="left" width="3%">
                        <label class="ellip">
                            Referral Address :</label>
                    </td>
                    <td align="left" width="70%">
                        <asp:Label ID="lblrefAddAddress" runat="server" Text=''></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" width="3%">
                        <label class="ellip">
                            Referral Phone# :</label>
                    </td>
                    <td align="left" width="70%">
                        <asp:Label ID="lblRefAddPhno" runat="server" Text=''></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<asp:HiddenField ID="hdnReferalName" runat="server" />
<asp:HiddenField ID="hdnstateid" runat="server" />
<asp:HiddenField ID="hdndistrictid" runat="server" />
<asp:HiddenField ID="hdncountryid" runat="server" />
<asp:HiddenField ID="hdnAreaId" runat="server" />
<asp:HiddenField ID="hdnCityId" runat="server" />
<asp:HiddenField ID="hdnRefQucikAdd" runat="server" />
<asp:HiddenField ID="hdnrefareaid" runat="server" />
<asp:HiddenField ID="hdndocname" runat="server" />
<asp:HiddenField ID="hdnRefReq" runat="server" />
<asp:HiddenField ID="hdnClientName" runat="server" />
<asp:HiddenField ID="hdnView_R" runat="server" />
<asp:HiddenField ID="hdndateformateref" runat="server" />
<asp:HiddenField ID="hdnreferaldisable" runat="server" />
<div class="masking" id="patMultiRefDtls">
    <div class="cmask">
    </div>
    <div class="clientpopup" style="width: 500px; height: 450px; margin-left: -250px;
        margin-top: -225px;">
        <div class="pop-header">
            <h1>
                Referral Details
            </h1>
            <asp:Button buttonaction="cancelButton" ID="img4" runat="server" CssClass="cbutton"
                Text="&times;" OnClientClick="return HidePatMultiRef();" />
        </div>
        <div class="pop-body" style="padding: 10px 0px 0px 0px;">
            <table cellpadding="2" cellspacing="2" border="0" width="100%" class="FormsCtrl">
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
                <tr>
                    <td align="left">
                        <b>Pro Name</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblproname" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <b>Hospital Name</b>
                    </td>
                    <td align="center">
                        <b>:</b>
                    </td>
                    <td align="left">
                        <asp:Label ID="lblHospName" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
