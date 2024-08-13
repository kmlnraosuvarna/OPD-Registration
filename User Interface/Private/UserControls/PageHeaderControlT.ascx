<%@ Control Language="C#" AutoEventWireup="true" CodeFile="~/Private/UserControls/PageHeaderControl.ascx.cs"
    Inherits="Private_UserControls_PageHeaderControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
<%@ Register Src="~/Private/UserControls/DMSControl.ascx" TagName="DMSControl" TagPrefix="uc1" %>
<%@ Register Src="~/Private/UserControls/MultipleFileUpload.ascx" TagName="MultipleFileUpload"
    TagPrefix="uc6" %>
<%@ Register Src="~/Private/UserControls/ExportGrid.ascx" TagName="ExportData" TagPrefix="Expdata" %>
<style>
    .preloadall
    {
        z-index: 9999999;
    }
</style>
<script type="text/javascript">

    //function ValidatePaste(textFlag, ctrl) { 
    //    var regExp = "";
    //    var msg = "";
    //    var textData = window.event.clipboardData.getData('text');
    //    if (textFlag == 'N') 
    //        regExp = /^[0-9]/; // only numbers
    //    if (textFlag == 'C')
    //        regExp = /^[A-Za-z ]*$/; // only alphabets
    //    if (textFlag == 'CN')
    //        regExp = /[A-Za-z0-9]*$/; // only alphabets with numbers
    //    if (textFlag == 'SC')
    //        regExp = /^[ a-zA-Z0-9_@./#&+-*$%()]*$/; // alphanumerics with special chars
    //    if (textFlag == 'D')
    //        regExp = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/; // only decimals

    //    if (!regExp.test(textData)) {
    //        if (textFlag == 'N')
    //            alert('Please enter Numbers only');
    //        if (textFlag == 'C')
    //            alert('Please enter Characters only');
    //        if (textFlag == 'D')
    //            alert('Please enter Decimals only');
    //    }
    //    else
    //        ctrl.value = textData;
    //    return false;
    //}


    function getPosition(str, m, i) { return str.split(m, i).join(m).length; }
    function CheckShiftLogStatus(shiftLogstatus, absuri) {
        console.log(absuri);
        var ui = getPosition(document.location.pathname, '/', 2);
        var uisol = document.location.pathname.substring(document.location.pathname.indexOf('/') + 1, ui);
        var url = window.location.origin + '/' + uisol;

        if (shiftLogstatus == "P") {
            alert('You have to access for ShiftLog for doing this transaction . Please contact Administrator');

            window.location.replace(url + '/private/module.aspx');
        }
        else {
            if (shiftLogstatus == "N")
                alert('Please Login for Shift');
            else if (shiftLogstatus == "H")
                alert('Your Shift Cash Limit is over');
            else if (shiftLogstatus == "S")
                alert('Your Inermediate submission is in Not Approved state');
            else if (shiftLogstatus == "J")
                alert('Your Inermediate submission is in Reject state');
            else if (shiftLogstatus == "R")
                alert('Your collected amount is going to reach the limit');

            if (shiftLogstatus == "N" || shiftLogstatus == "S")
                window.location.replace(url + '/private/Admin/ShiftLog.aspx?DOC_FORM_CD=SHIFTLOG&pgurl=" + absuri + "');
            else if (shiftLogstatus == "H") {
                window.location.replace(url + '/private/ShiftLog/ShiftCollectionSubmit.aspx?DOC_FORM_CD=HTINSHFTSUB');
            }
            else if (shiftLogstatus == "R") {
                alert('Your collected amount is going to reach the limit');
            }
        }
    }
    function Fn_WrongPwd() {
        $(".stoast").toastText("Info", "Transaction password is wrong", 5, 2);
        return false;
    }
    function Fn_NoData() {
        $(".stoast").toastText("Info", "Please Enter Password", 5, 2);
        return false;
    }

    $(document).bind("ajaxSend", function () {
        $("#progress").show();
    }).bind("ajaxComplete", function () {
        $("#progress").hide();
    });

    function OnSwapImageNames(id, imgName, replaceName) {
        var _path = id.src;
        _path = _path.replace(imgName, replaceName);
        id.src = _path;
    }
    function ShoworHide() { $find('<%= ModalPopupExtender2.ClientID %>').hide(); $find('<%= ModalPopupExtender3.ClientID %>').show(); }
    function ShoworHide1() { $find('<%= ModalPopupExtender3.ClientID %>').hide(); $find('<%= ModalPopupExtender2.ClientID %>').show(); }
    function CloseExtendar() { $(document).ready(function (e) { var model = $find('<%= ModalPopupExtender3.ClientID %>'); if (model != null) model.hide(); e.preventDefault(); }); }
</script>
<script type="text/javascript">
    $(document).ready(function () {
        var url = _iniUrl + "Private/FrontOffice/IPBilling/FileUpload.aspx";
        $('[id*=ifFileUpload]').attr('src', url);
        $('[id$=imgadd]').click(function(){
           SaveLogData(1,'ADD NEW','0');
        });
        $('[id$=imgbtncancel]').click(function(){
            SaveLogData(11,'GRID','0');
        });
        $('[id$=imgbtnclear]').click(function(){
            SaveLogData(12,'CLEAR','0');
        });
        $('[id$=imgbtnSave]').click(function(){
            SaveLogData(10,'SAVE','0');
        });
        $('[id$=imgDmsUpload]').click(function(){
            SaveLogData(13,'ENTRY-UPLOAD','0');
        });
        $('[id$=imgDmsDownload]').click(function(){
            SaveLogData(14,'ENTRY-DOWNLOAD','0');
        });
    });    
    function SaveLogData(id,actiontext,tran_id){
      var doc_id = $('[id*=hdndocsessionid]').val();var user_id='<%=SessionHandler.UserID%>'; 
      GetNonAsync(
        "Private/FrontOffice/Registrations.aspx/GetLogData",
        {doc_id : doc_id,user_id:user_id,action_Id : id,tran_id : tran_id,tran_no : '',action_iptext : actiontext,action_optext : ''},
      function(){
      },
      function (jqXHR, textStatus, errorThrown) {
      });
      var k=$('[id*=hdnPHControl]').val();
      if((actiontext == "GRID" &&  k == 'IP')||(actiontext == "CLEAR" &&  k == 'IP')||(actiontext == "ADD NEW" &&  k == 'IP')||(actiontext == "SAVE" &&  k == 'IP')){
      ReleaseUMRLock();
      }
    } 
       

    function OnFileUpload(obj) { 
  
        var admnno = document.getElementById('ctl00_hdnDMSAdmnNo').value;
        if (document.getElementById('ctl00_hdnDMSUmrNo').value == '') {
            $(".stoast").toastText("Warning", "Please select UMR number!", 5, 3);
            return false;
        }
        $('[id*=divfileupload]')[0].style.display = 'block';
       
       if(document.getElementById('ctl00_hdnDMSUmrNoshow').value!='' && document.getElementById('ctl00_hdnDMSUmrNoshow').value!='undefined'){
      $('#dmsumrrefrenceshow').css("display", "block");
            $('#dmsumrshow').css("display", "block");
      

      document.getElementById('<%=lblfileupumr.ClientID %>').innerHTML=document.getElementById('ctl00_hdnDMSUmrNoshow').value
 
       }
       if(document.getElementById('ctl00_hdnDMSReferenceNoshow').value!='' && document.getElementById('ctl00_hdnDMSReferenceNoshow').value!='undefined'){
      $('#dmsumrrefrenceshow').css("display", "block");
      $('#dmsreferenceshow').css("display", "block");
      document.getElementById('<%=lblfileuprefernce.ClientID %>').innerHTML=document.getElementById('ctl00_hdnDMSReferenceNoshow').value
 
       }
       
        return false;
    }

    function onFileDowload(obj) { 
   // document.getElementById('ctl00_hdnDMSUmrNo').value=document.getElementById('ctl00_ContentPlaceHolder1_IPPatientDtls1_ucAdmission_txtSearchControl').value;
        if (document.getElementById('ctl00_hdnDMSUmrNo').value == '') {
            $(".stoast").toastText("Warning", "Please select UMR number!", 5, 3);
            return false;
        }
        var docid = $('[id*=hdnSessionDocId]').val();
        var modid = $('[id*=hdnSessionModId]').val();
        //var path =  window.location.origin + document.getElementById('<%=hdndownloadpath.ClientID %>').value;
        var path = document.getElementById('<%=hdndownloadpath.ClientID %>').value;
        var umrno = document.getElementById('ctl00_hdnDMSUmrNo').value;
        var trnautoid= document.getElementById('ctl00_hdnDMSAdmnNo').value;
        var userid=<%=SessionHandler.UserID %>;
        var DBSESSION_ID=<%=SessionHandler.DBSESSION_ID %>;  

        var filepath = path + umrno + "," +trnautoid+ "," +trnautoid+"," +modid+"," +docid+","+ DBSESSION_ID + ",Y";
        //var filepath = path + umrno + "," +trnautoid+ "," +trnautoid+"," +modid+"," +docid+","+ userid + ",Y";
        /*var http="http:";
        var filepath1=http+''+filepath.split(':')[3];*/
        window.open(filepath);
        return false;
    }

    function onFileView(obj){ 
    if (document.getElementById('ctl00_hdnDMSUmrNo').value == '') {
            $(".stoast").toastText("Warning", "Please select UMR number!", 5, 3);
            return false;

        }
// 
        var docid = $('[id*=hdnSessionDocId]').val();
        var modid = $('[id*=hdnSessionModId]').val();
        //var path = window.location.origin + document.getElementById('<%=hdndownloadpath.ClientID %>').value;
        var path = document.getElementById('<%=hdndownloadpath.ClientID %>').value;
        var umrno = document.getElementById('ctl00_hdnDMSUmrNo').value;
        var trnautoid= document.getElementById('ctl00_hdnDMSAdmnNo').value;
        var userid=<%=SessionHandler.UserID %>;
        var DBSESSION_ID=<%=SessionHandler.DBSESSION_ID %>;  

        var filepath = path + umrno + "," +trnautoid+ "," +trnautoid+"," +modid+"," +docid+","+ DBSESSION_ID + ",N";
        //var filepath = path + umrno + "," +trnautoid+ "," +trnautoid+"," +modid+"," +docid+","+ userid + ",N";
         window.open(filepath);
  
        return false;
    }

  
    
    function ViewUploadedDoc(objs){   
        if($('#ctl00_ContentPlaceHolder1_headerControl1_hdnDMSFtp').val()=="NO"){
            $(".stoast").toastText("Warning", "Ftp Not Working.Please Contact to Administrator.", 5, 3);
            return false;
        }
        else{
        DocumentIdsLoad(objs);SaveLogData(8,'UPLOAD','');
        OnFileUpload('Grid');
        }
    }
    function ViewDownloadedDoc(objs){
        DocumentIdsLoad(objs);
        onFileDowload('Grid');SaveLogData(9,'DOWNLOAD','');
    }

    function ViewDocUments(objs){
        DocumentIdsLoad(objs);
        onFileView('Grid');
    }

    var DocName;
    function DocumentIdsLoad(objs)
    {
        var _data=gridControl.getDataRow(objs);
         DocName=  document.getElementById('<%=hdnDocName.ClientID%>').value
        var DocId =<%= SessionHandler.DOCUMENT_ID %>;
        var Globalid=''; //umrno
        var Transactionid='';  //admissionno
        var Table_Name='';
        var Tbl_Auto_id_column='';
        var Tbl_Auto_cd_column='';
        var umrnoshow='';
        var referencecd='';
        switch(DocId){
           
            case 2232:/* MLC */
                 Globalid = _data.MLC_NO;
                 Transactionid =_data.MLC_NO;
                 referencecd=_data.MLC_NO;
                 Table_Name='ADT_MLC';
                 Tbl_Auto_cd_column='MLC_NO';      
                 Tbl_Auto_id_column='MLC_NO';               
                break;
            case 64:/* Registration */
                 Globalid = _data.UMR_NO;
                 Transactionid =_data.BILL_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='BILL_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                        umrnoshow  =_data.UMR_NO;   
                break;
           case 86:/* OP BIlling */
                 Globalid = _data.UMR_NO;
                 Transactionid =_data.BILL_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='BILL_NO';      
                 Tbl_Auto_id_column='UMR_NO';  
                    umrnoshow  =_data.UMR_NO;              
                break;
            case 379:/* OP Consultation */
                 Globalid = _data.UMR_NO;
                 Transactionid =_data.BILL_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='BILL_NO';      
                 Tbl_Auto_id_column='UMR_NO';  
                    umrnoshow  =_data.UMR_NO;              
                break;
            case 2354:/* OPD Registration and Billing */
                 Globalid = _data.UMR_NO;
                 Transactionid =_data.BILL_ID;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='BILL_ID';      
                 Tbl_Auto_id_column='UMR_NO';  
                    umrnoshow  =_data.UMR_NO;              
                break;
              case 105:/* Admission */
                 Globalid = _data.UMR_NO;
                 Transactionid =_data.ADMN_NO;
                 Table_Name='ADT_ADMN';
                 Tbl_Auto_cd_column='ADMN_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                    umrnoshow  =_data.UMR_NO;               
                break;
                case 507:/* Imr Service Entry */
                 Globalid = _data.UmrNo;
                 Transactionid =_data.IMR_NO;
                 Table_Name='ADT_IMR';
                 Tbl_Auto_cd_column='IMR_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                    umrnoshow  =_data.UMR_NO;                                
                break;
                 /*case 5272: Order Verification 
                 Globalid = _data.UMRNO;
                 Transactionid =_data.ORDERNO;
                 if(_data.PATIENTTYPE=="IP"){
                   Table_Name='NU_IND';
                   Tbl_Auto_cd_column='IND_NO'; 
                 }
                 if(_data.PATIENTTYPE=="OP"){
                   Table_Name='DD_INVS_ORDER';
                   Tbl_Auto_cd_column='ORDER_NO'; 
                 }
                 Tbl_Auto_id_column='UMR_NO';                                
                break;*/
                default:
                if(DocName.toString().trim().toUpperCase()=="IMR SERVICE ENTRY")
                {
                 Globalid = _data.UmrNo;
                 Transactionid =_data.IMR_NO;
                 Table_Name='ADT_IMR';
                 Tbl_Auto_cd_column='IMR_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                    umrnoshow  =_data.UMR_NO;  
                }
               else if (DocName.toString().trim().toUpperCase()=="DEPT COMPLAINT FORM") 
               {
                    Globalid = _data.COMP_ALLOT_ID;
                    Transactionid = _data.COMP_ALLOT_ID;
                    Table_Name = 'EMS_COMPLAINT_ALLOTMENT';
                    Tbl_Auto_cd_column = 'COMP_ALLOT_NO';
                    referencecd= 'COMP_ALLOT_NO';
                    Tbl_Auto_id_column = 'COMP_ALLOT_ID';
                }
                else if(DocName.toString().trim().toUpperCase()=="ORDER VERIFICATION" )
                {
                 Globalid = _data.UMRNO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.ORDERNO;
                 if(_data.PATIENTTYPE=="IP"){
                   Table_Name='NU_IND';
                   Tbl_Auto_cd_column='IND_NO'; 
                 }
                 if(_data.PATIENTTYPE=="OP"){
                   Table_Name='DD_INVS_ORDER';
                   Tbl_Auto_cd_column='ORDER_ID'; 
                 }
                 Tbl_Auto_id_column='UMR_NO';  
                }
                else if(DocName.toString().trim().toUpperCase()=="ADMISSION" || DocName.toString().trim().toUpperCase()=="ER REGISTRATION")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.ADMN_NO;
                 Table_Name='ADT_ADMN';
                 Tbl_Auto_cd_column='ADMN_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="IP ADVANCE" || DocName.toString().trim().toUpperCase()=="PRE-REFUND")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.TRANSACTION_ID;
                 Table_Name='FO_ADVANCE';
                 Tbl_Auto_cd_column='TRANSACTION_REF_ID';    
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="REFUND CENTRALIZED")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.UMR_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='UMR_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="REFUND")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.UMR_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='UMR_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="OUTSTANDINGDUE  CENTRALIZED")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.BILL_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='BILL_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="PRE ADMISSION")
                {
                 Globalid = _data.UMRNO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.PRE_ADMISSION_NO;
                 Table_Name='ADT_PREADMN';
                 Tbl_Auto_cd_column='ADMN_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                 else if(DocName.toString().trim().toUpperCase()=="IP CREDIT LIMIT")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.CREDIT_LIMIT_ID;
                 Table_Name='ADT_CREDIT_LIMIT';
                 Tbl_Auto_cd_column='CREDIT_LIMIT_ID';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="INTERIM BILL")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.BILL_NO;
                 Table_Name='ADT_APPBILL';
                 Tbl_Auto_cd_column='BILL_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="NEW IP FINAL BILL" || DocName.toString().trim().toUpperCase()=="IP FINAL BILL PAYMENT" || DocName.toString().trim().toUpperCase()=="ER FINAL BILL" || DocName.toString().trim().toUpperCase()=="IP SUPPLEMENTARY BILL" || DocName.toString().trim().toUpperCase()=="IP FINAL BILLS LIST")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.BILL_NO;
                 Table_Name='FO_BILL';
                 Tbl_Auto_cd_column='BILL_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                 else if(DocName.toString().trim().toUpperCase()=="POST DISCOUNT" ||DocName.toString().trim().toUpperCase()=="POST DISCOUNT CENTRALIZED")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.DISCNT_NO;
                 Table_Name='ADT_DISCNT';
                 Tbl_Auto_cd_column='DISCNT_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
               else if(DocName.toString().trim().toUpperCase()=="OPBILLASSESMENT")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.BILL_ASSESMENT_ID;
                 Table_Name='FO_BILL_ASSESMENT';
                 Tbl_Auto_cd_column='BILL_ASSESMENT_ID';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="ASSESMENT MERGE")
                {
                 Globalid = _data.UMR_NO;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.BILL_ASSESMENT_ID;
                 Table_Name='FO_BILL_ASSESMENT';
                 Tbl_Auto_cd_column='BILL_ASSESMENT_ID';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                 else if(DocName.toString().trim().toUpperCase()=="IP DISCHARGE")
                {
                 Globalid = _data.UmrNo;
                    umrnoshow  =_data.UMR_NO; 
                 Transactionid =_data.DISCHR_NO;
                 Table_Name='ADT_DSCHRG';
                 Tbl_Auto_cd_column='DISCHR_NO';      
                 Tbl_Auto_id_column='UMR_NO'; 
                }
                else if(DocName.toString().trim()=="Department")
                {
                 Globalid = _data.DEPARTMENT_ID;
                 Transactionid =_data.DEPARTMENT_CD;
                 referencecd=_data.DEPARTMENT_CD;
                 Table_Name='MA.DEPARTMENT';
                 Tbl_Auto_id_column='DEPARTMENT_ID'; 
                 Tbl_Auto_cd_column='DEPARTMENT_CD'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="OT CONSENT FORM" || DocName.toString().trim()=="Guide Lines"|| DocName.toString().trim()=="pre-defined instructions"|| DocName.toString().trim()=="Health-CheckUp FeedBack" || DocName.toString().trim()=="Patient Counselling Template" || DocName.toString().trim()=="Consent Template" || DocName.toString().trim()=="MLC Template" || DocName.toString().trim()=="Instructions Template" || DocName.toString().trim()=="Service Questionary")
                {
                 Globalid = _data.TEMPLATE_ID;
                 Transactionid =_data.TEMPLATE_CD;
                 referencecd=_data.TEMPLATE_CD;
                 Table_Name='FB_TEMPLATE';
                 Tbl_Auto_id_column='TEMPLATE_ID'; 
                 Tbl_Auto_cd_column='TEMPLATE_CD'; 
                }
                 else if(DocName.toString().trim()=="Equipment Mapping")
                {
                 Globalid = _data.WARD_GROUP_EQUIPMENT_ID;
                Transactionid = _data.WARD_GROUP_EQUIPMENT_ID;
                 Table_Name='WARD_GROUP_EQUIPMENT';
                 Tbl_Auto_id_column='WARD_GROUP_EQUIPMENT_ID'; 
                 Tbl_Auto_cd_column='WARD_GROUP_EQUIPMENT_ID'; 
                }
                 else if(DocName.toString().trim()=="Referral")
                {
                 Globalid = _data.REFRL_ID;
                Transactionid = _data.REFRL_CD;
                referencecd = _data.REFRL_CD;
                 Table_Name='MA.REFERAL';
                 Tbl_Auto_id_column='REFRL_ID'; 
                 Tbl_Auto_cd_column='REFRL_CD'; 
                }
                else if(DocName.toString().trim()=="Referral")
                {
                 Globalid = _data.REFRL_ID;
                Transactionid = _data.REFRL_CD;
                referencecd = _data.REFRL_CD;
                 Table_Name='MA.REFERAL';
                 Tbl_Auto_id_column='REFRL_ID'; 
                 Tbl_Auto_cd_column='REFRL_CD'; 
                }
                else if(DocName.toString().trim().toUpperCase()=="DOCTOR_UNITS")
                {
                 Globalid = _data.DOCTOR_UNIT_ID;
                 Transactionid =_data.DOCTOR_UNIT_CD;
                 referencecd =_data.DOCTOR_UNIT_CD;
                 Table_Name='DOCTOR_UNITS';
                 Tbl_Auto_id_column='DOCTOR_UNIT_ID'; 
                 Tbl_Auto_cd_column='DOCTOR_UNIT_CD'; 
                }
                 else if(DocName.toString().trim()=="Counter Master")
                {
                 Globalid = _data.COUNTER_ID;
                Transactionid = _data.COUNTER_ID;
                 Table_Name='QMS_COUNTERS';
                 Tbl_Auto_id_column='COUNTER_ID'; 
                 Tbl_Auto_cd_column='COUNTER_ID'; 
                }
                else if(DocName.toString().trim()=="Donatee Details")
                {
                 Globalid = _data.FUND_ID;
                Transactionid = _data.FUND_CD;
                referencecd = _data.FUND_CD;
                 Table_Name='ADT_FUND';
                 Tbl_Auto_id_column='FUND_ID'; 
                 Tbl_Auto_cd_column='FUND_CD'; 
                }
                 else if(DocName.toString().trim()=="Organization")
                {
                 Globalid = _data.ORG_ID;
                 Transactionid = _data.ORG_CD;
                 referencecd = _data.ORG_CD;
                 Table_Name='ORGANIZATION';
                 Tbl_Auto_id_column='ORG_ID'; 
                 Tbl_Auto_cd_column='ORG_CD'; 
                }
                else if(DocName.toString().trim()=="Doctor Employee")
                {
                if(_data.EMPLOYEE_ID !=null || _data.EMPLOYEE_ID !="" || _data.EMPLOYEE_ID !=undefined)
                {
                 Globalid = _data.EMPLOYEE_ID;
                 Transactionid = _data.EMPLOYEE_CD;
                  referencecd = _data.EMPLOYEE_CD;
                 Table_Name='MA.EMPLOYEE';
                 Tbl_Auto_id_column='EMPLOYEE_ID'; 
                 Tbl_Auto_cd_column='EMPLOYEE_CD';
                 }
                 else{
                 Globalid = _data.DOCTOR_ID;
                 Transactionid = _data.DOCTOR_CD;
                 referencecd = _data.DOCTOR_CD;
                 Table_Name='DOCTOR';
                 Tbl_Auto_id_column='DOCTOR_ID'; 
                 Tbl_Auto_cd_column='DOCTOR_CD';
                 }
                }
                  else if(DocName.toString().trim()=="Diagnosis Master")
                {
                 Globalid = _data.DIAGNOSIS_ID;
                 Transactionid = _data.DIAGNOSIS_CD;
                 referencecd = _data.DIAGNOSIS_CD;
                 Table_Name='DIAGNOSIS';
                 Tbl_Auto_id_column='DIAGNOSIS_ID'; 
                 Tbl_Auto_cd_column='DIAGNOSIS_CD'; 
                }
                 else if(DocName.toString().trim()=="Doctor Room")
                {
                 Globalid = _data.ROOM_ID;
                 Transactionid = _data.Room_CD;
                 referencecd=  _data.Room_CD;
                 Table_Name='CONSULTANT_ROOM';
                 Tbl_Auto_id_column='ROOM_ID'; 
                 Tbl_Auto_cd_column='Room_CD'; 
                }
                else if(DocName.toString().trim()=="Currency Settings")
                {
                 Globalid = _data.CURR_XCHG_ID;
                 Transactionid = _data.CURR_XCHG_CD;
                  referencecd =  _data.CURR_XCHG_CD;
                 Table_Name='CURRENCY_EXRATE';
                 Tbl_Auto_id_column='CURR_XCHG_ID'; 
                 Tbl_Auto_cd_column='CURR_XCHG_CD'; 
                }
                 else if(DocName.toString().trim()== "Employee")
                {
                 Globalid = _data.EMPLOYEE_ID;
                 Transactionid = _data.EMPLOYEE_CD;
                  referencecd= _data.EMPLOYEE_CD;
                 Table_Name='MA.EMPLOYEE';
                 Tbl_Auto_id_column='EMPLOYEE_ID'; 
                 Tbl_Auto_cd_column='EMPLOYEE_CD'; 
                }
                else if(DocName.toString().trim()== "PAS Supplier Documents Upload")
                {
                 Globalid = _data.PAS_SUP_DOC_ID;
                 Transactionid = _data.PAS_SUP_DOC_NO;
                  referencecd= _data.PAS_SUP_DOC_NO;
                 Table_Name='DMS_PAS_SUPPLIER_DOC_UPLOAD';
                 Tbl_Auto_id_column='PAS_SUP_DOC_ID'; 
                 Tbl_Auto_cd_column='PAS_SUP_DOC_NO'; 
                }
                 else if(DocName.toString().trim()== "Doctor Panel")
                {
                 Globalid = _data.PANEL_ID;
                 Transactionid = _data.PANEL_CD;
                  referencecd= _data.PANEL_CD;
                 Table_Name='PANEL';
                 Tbl_Auto_id_column='PANEL_ID'; 
                 Tbl_Auto_cd_column='PANEL_CD'; 
                }
                else if(DocName.toString().trim()== "Doctor Visits Mapping")
                {
                 Globalid = _data.CHARGE_RULE_ID;
                 Transactionid = _data.CHARGE_RULE_ID;
                 Table_Name='DOCTOR_CHARGE_RULE';
                 Tbl_Auto_id_column='CHARGE_RULE_ID'; 
                 Tbl_Auto_cd_column='CHARGE_RULE_ID'; 
                }
                 else if(DocName.toString().trim()== "Change Tariff")
                {
                 Globalid = _data.REQUEST_ID;
                 Transactionid = _data.REQUEST_CD;
                  referencecd = _data.REQUEST_CD;
                 Table_Name='ADT_ADMN_ATTRIBUTE_CHANGE';
                 Tbl_Auto_id_column='REQUEST_ID'; 
                 Tbl_Auto_cd_column='REQUEST_CD'; 
                }
                else if(DocName.toString().trim()== "Wing")
                {
                 Globalid = _data.WING_ID;
                 Transactionid = _data.WING_CD;
                  referencecd= _data.WING_CD;
                 Table_Name='WING';
                 Tbl_Auto_id_column='WING_ID'; 
                 Tbl_Auto_cd_column='WING_CD'; 
                }
                else if(DocName.toString().trim()== "Pro Master")
                {
                 Globalid = _data.PRO_ID;
                 Transactionid = _data.PRO_CD;
                  referencecd= _data.PRO_CD;
                 Table_Name='MA.PRO';
                 Tbl_Auto_id_column='PRO_ID'; 
                 Tbl_Auto_cd_column='PRO_CD'; 
                }
                 else if(DocName.toString().trim()== "Denomination Master")
                {
                 Globalid = _data.CASH_DENOMINATION_ID;
                 Transactionid = _data.CASH_DENOMINATION_ID;
                 Table_Name='CASH_DENOMINATION';
                 Tbl_Auto_id_column='CASH_DENOMINATION_ID'; 
                 Tbl_Auto_cd_column='CASH_DENOMINATION_ID'; 
                }
                 else if(DocName.toString().trim()== "Emergency Code Master")
                {
                 Globalid = _data.EC_ID;
                 Transactionid = _data.EC_CD;
                
                 Table_Name='EMERGENCY_CODE';
                 Tbl_Auto_id_column='EC_ID'; 
                 Tbl_Auto_cd_column='EC_CD'; 
                }
                else if(DocName.toString().trim()== "Economic Status")
                {
                 Globalid = _data.ES_ID;
                 Transactionid = _data.EC_CD;
                   referencecd =_data.EC_CD;
                 Table_Name='ECONOMIC_STATUS';
                 Tbl_Auto_id_column='ES_ID'; 
                 Tbl_Auto_cd_column='EC_CD'; 
                }
                else if(DocName.toString().trim()== "Check List Master")
                {
                 Globalid = _data.CHECKLIST_ID;
                 Transactionid = _data.CHECKLIST_CD;
                  referencecd= _data.CHECKLIST_CD;
                 Table_Name='CHECKLIST';
                 Tbl_Auto_id_column='CHECKLIST_ID'; 
                 Tbl_Auto_cd_column='CHECKLIST_CD'; 
                }
                else if(DocName.toString().trim()== "Event")
                {
                 Globalid = _data.EVENT_ID;
                 Transactionid = _data.EVENT_CD;
                 referencecd= _data.EVENT_CD;
                 Table_Name='EVENT';
                 Tbl_Auto_id_column='EVENT_ID'; 
                 Tbl_Auto_cd_column='EVENT_CD'; 
                }
                else if(DocName.toString().trim()== "Source Master")
                {
                 Globalid = _data.REFERAL_CATEGORY_ID;
                 Transactionid = _data.REFERAL_CATEGORY_CD;
                 referencecd=  _data.REFERAL_CATEGORY_CD;
                 Table_Name='REFERAL_CATEGORY';
                 Tbl_Auto_id_column='REFERAL_CATEGORY_ID'; 
                 Tbl_Auto_cd_column='REFERAL_CATEGORY_CD'; 
                }
                else if(DocName.toString().trim() == "Equipment Group Master")
                {
                 Globalid = _data.EQUIPMENT_GROUP_ID;
                 Transactionid = _data.EQUIPMENT_GROUP_CD;
                 referencecd=_data.EQUIPMENT_GROUP_CD;
                 Table_Name='EQUIPMENT_GROUP';
                 Tbl_Auto_id_column='EQUIPMENT_GROUP_ID'; 
                 Tbl_Auto_cd_column='EQUIPMENT_GROUP_CD'; 
                }
                else if(DocName.toString().trim() == "Currency Master")
                {
                 Globalid = _data.CURRENCY_ID;
                 Transactionid = _data.CURRENCY_CD;
                 referencecd= _data.CURRENCY_CD;
                 Table_Name='MA.CURRENCY';
                 Tbl_Auto_id_column='CURRENCY_ID'; 
                 Tbl_Auto_cd_column='CURRENCY_CD'; 
                }
                else if(DocName.toString().trim() == "Doctor")
                {
                 Globalid = _data.ID;
                 Transactionid = _data.DOCTOR_CD;
                 referencecd= _data.DOCTOR_CD;
                 Table_Name='Doctor';
                 Tbl_Auto_id_column='DOCTOR_ID'; 
                 Tbl_Auto_cd_column='DOCTOR_CD'; 
                }
                else if(DocName.toString().trim() == "Remarks")
                {
                 Globalid = _data.Assay_doc_id;
                 Transactionid = _data.Assay_doc_id;
                 Table_Name='ASSAY_DOCUMENTS';
                 Tbl_Auto_id_column='Assay_doc_id'; 
                 Tbl_Auto_cd_column='Assay_doc_id'; 
                }
                 else if(DocName.toString().trim() == "Certificates Mapping")
                {
                 Globalid = _data.FEEDBACK_ID;
                 Transactionid = _data.FEEDBACK_ID;
                 Table_Name='FB_FORM';
                 Tbl_Auto_id_column='FEEDBACK_ID'; 
                 Tbl_Auto_cd_column='FEEDBACK_ID'; 
                }
                else if(DocName.toString().trim() == "Rule Master")
                {
                 Globalid = _data.CNCSN_RULE_ID;
                 Transactionid = _data.CNCSN_RULE_CD;
                 referencecd=_data.CNCSN_RULE_CD;
                 Table_Name='CONCESSION_RULE';
                 Tbl_Auto_id_column='CNCSN_RULE_ID'; 
                 Tbl_Auto_cd_column='CNCSN_RULE_CD'; 
                }
                else if(DocName.toString().trim() == "Equipment Master")
                {
                 Globalid = _data.EQMT_ID;
                 Transactionid = _data.EQMT_CD;
                 referencecd= _data.EQMT_CD;
                 Table_Name='EQUIPMENT';
                 Tbl_Auto_id_column='EQMT_ID'; 
                 Tbl_Auto_cd_column='EQMT_CD'; 
                }
                else if(DocName.toString().trim() == "Room"){
                Globalid = _data.Room_ID;
                 Transactionid = _data.Room_CD;
                 referencecd=_data.Room_CD;
                 Table_Name='ROOM';
                 Tbl_Auto_id_column='Room_ID'; 
                 Tbl_Auto_cd_column='Room_CD'; 
                }
               else if(DocName.toString().trim() == "Claim"){
                Globalid = _data.CLAIM_ID;
                 Transactionid = _data.CLAIM_ID;
                 Table_Name='ADT_CMP_CLAIM';
                 Tbl_Auto_id_column='CLAIM_ID'; 
                 Tbl_Auto_cd_column='CLAIM_ID'; 
                }
             else if(DocName.toString().trim().toUpperCase()=="CORPORATE STATEMENTS" &&  _data.STMT_PAT_ID >0){
                 Globalid = _data.STMT_PAT_ID;
                 Transactionid = _data.STMT_PAT_ID;
                 Table_Name='ADT_CMP_STMT_PAT';
                 Tbl_Auto_id_column='STMT_PAT_ID'; 
                 Tbl_Auto_cd_column='STMT_PAT_ID';
                 }
            else if(DocName.toString().trim().toUpperCase()=="CORPORATE STATEMENTS"||DocName.toString().trim().toUpperCase()=="CORPORATE BILLS PREPARATION"){
                 Globalid = _data.STMT_ID;
                 Transactionid = _data.STMT_ID;
                 Table_Name='ADT_CMP_STMT';
                 Tbl_Auto_id_column='STMT_ID'; 
                 Tbl_Auto_cd_column='STMT_ID';
                 }
            else if(DocName.toString().trim().toUpperCase()=="DOCKET HANDOVER TO CCD EXECUTIVE PERSON"){
                 Globalid = _data.SUBMSN_ID;
                 Transactionid = _data.SUBMSN_ID;
                 Table_Name='ADT_CMP_DOCKET';
                 Tbl_Auto_id_column='DOCKET_ID'; 
                 Tbl_Auto_cd_column='DOCKET_ID';
             }
            else if(DocName.toString().trim().toUpperCase()=="CCD RECEIVING"){
                 Globalid = _data.DOCKET_STATUS_ID;
                 Transactionid = _data.DOCKET_STATUS_ID;
                 Table_Name='ADT_CMP_DOCKET_STATUS';
                 Tbl_Auto_id_column='DOCKET_STATUS_ID'; 
                 Tbl_Auto_cd_column='DOCKET_STATUS_ID';
             }
            else if(DocName.toString().trim().toUpperCase()=="BILL CLEARANCE"){
                 Globalid = _data.CORP_COLLECTION_ID;
                 Transactionid = _data.CORP_COLLECTION_ID;
                 Table_Name='CORP_COLLECTION';
                 Tbl_Auto_id_column='CORP_COLLECTION_ID'; 
                 Tbl_Auto_cd_column='CORP_COLLECTION_ID';
             }    
            else if(DocName.toString().trim().toUpperCase()=="CORPORATE IP FINAL BILLING" ||DocName.toString().trim().toUpperCase()=="CORPORATE PACKAGE BILLING"){
                  Globalid = _data.BILL_ID;
                 Transactionid = _data.BILL_ID;
                 Table_Name='FO_BILL';
                 Tbl_Auto_id_column='BILL_ID'; 
                 Tbl_Auto_cd_column='BILL_ID';
             }
            else if(DocName.toString().trim().toUpperCase()=="READY FOR STATEMENT"){
                 Globalid = _data.BILL_CMP_CHECKLIST_ID;
                 Transactionid = _data.BILL_CMP_CHECKLIST_ID;
                 Table_Name='FO_BILL_CMP_CHECKLIST';
                 Tbl_Auto_id_column='BILL_CMP_CHECKLIST_ID'; 
                 Tbl_Auto_cd_column='BILL_CMP_CHECKLIST_ID';
             }
             else if(DocName.toString().trim().toUpperCase()=="CORPREG AND REFLETTER" ||DocName.toString().trim().toUpperCase()=="CORPORATE REGISTRATION AND REFERRAL LETTER ENTRY"){
              if(_data.FLAG=="LETTER"){
                 Globalid = _data.REFERAL_LETTER_ID;
                 Transactionid = _data.REFERAL_LETTER_ID;
                 Table_Name='CMPNY_REFERAL_LETTER';
                 Tbl_Auto_id_column='REFERAL_LETTER_ID'; 
                 Tbl_Auto_cd_column='REFERAL_LETTER_ID';               
              }
                 Globalid = _data.REG_CORPORATE_ID;
                 Transactionid = _data.REG_CORPORATE_ID;
                 Table_Name='FO_REG_CORPORATE';
                 Tbl_Auto_id_column='REG_CORPORATE_ID'; 
                 Tbl_Auto_cd_column='REG_CORPORATE_ID';             
             }
             else if(DocName.toString().trim().toUpperCase()=="DEPARTMENTFILESUPLOAD"){
                 Globalid = _data.FILES_UPLOAD_CD;
                 Transactionid = _data.FILES_UPLOAD_CD;
                 referencecd = _data.FILES_UPLOAD_CD;
                 Table_Name='DMS_DEPT_FILES_UPLOAD';
                 Tbl_Auto_id_column='FILES_UPLOAD_CD'; 
                 Tbl_Auto_cd_column='FILES_UPLOAD_CD';               
             }
              else if(DocName.toString().trim().toUpperCase()=="SOP DOCUMENTS UPLOAD"){
                 Globalid = _data.DMS_SOP_DOCUMENTS_UPLOAD_ID;
                 Transactionid = _data.DMS_SOP_DOCUMENTS_UPLOAD_CD;
                 referencecd=  _data.DMS_SOP_DOCUMENTS_UPLOAD_CD;
                 Table_Name='DMS_SOP_DOCUMENTS_UPLOAD';
                 Tbl_Auto_id_column='DMS_SOP_DOCUMENTS_UPLOAD_ID'; 
                 Tbl_Auto_cd_column='DMS_SOP_DOCUMENTS_UPLOAD_CD';               
             }
              else if(DocName.toString().trim().toUpperCase()=="FINAL BILL CANCELLATION"){
                 Globalid = _data.UMR_NO;
                 Transactionid = _data.ADMN_NO;
                 Table_Name='FO_BILL_CNCL';
                 Tbl_Auto_id_column='BILL_CNCL_ID'; 
                 Tbl_Auto_cd_column='BILL_CNCL_ID';               
             }
               else if(DocName.toString().trim().toUpperCase()=="SERVICE GROUPWISE INCREMENT"||DocName.toString().trim().toUpperCase()=="SERVICE GROUPWISE INCREMENT CONSULTATION"){
                 Globalid = _data.T_INCREMENT_ID;
                 Transactionid = _data.T_INCREMENT_ID;
                 Table_Name='TARIFF_INCREMENT0';
                 Tbl_Auto_id_column='T_INCREMENT_ID'; 
                 Tbl_Auto_cd_column='T_INCREMENT_ID';
             }    
             
                else{
                document.getElementById('ctl00_hdnDMSUmrNo').value = _data.UMR_NO;
                   umrnoshow  =_data.UMR_NO; 
                if(_data.TRANSACTION_NO != undefined && _data.TRANSACTION_NO != null && _data.TRANSACTION_NO != "")
                    document.getElementById('ctl00_hdnDMSAdmnNo').value = _data.TRANSACTION_NO;
                else
                    document.getElementById('ctl00_hdnDMSAdmnNo').value = _data.UMR_NO;
                       umrnoshow  =_data.UMR_NO; 
                    }
                break;

        }
        if(Globalid!="" && Globalid!=undefined && Globalid!=null && Globalid!="undefined" && Globalid!="null")
        {
         document.getElementById('ctl00_hdnDMSUmrNo').value = Globalid;
        }
       if(Transactionid!="" && Transactionid!=undefined && Transactionid!=null && Transactionid!="undefined" && Transactionid!="null")
        {
        document.getElementById('ctl00_hdnDMSAdmnNo').value = Transactionid; 
        }
        if(Table_Name!="" && Table_Name!=undefined && Table_Name!=null && Table_Name!="undefined" && Table_Name!="null")
        {
         document.getElementById('ctl00_hdnMtablename').value = Table_Name;
        }
        if(Tbl_Auto_id_column!="" && Tbl_Auto_id_column!=undefined && Tbl_Auto_id_column!=null && Tbl_Auto_id_column!="undefined" && Tbl_Auto_id_column!="null")
        {
         document.getElementById('ctl00_hdnMtblautocdGlobalcolumns').value = Tbl_Auto_id_column;    
        }
        
         if(Tbl_Auto_cd_column!="" && Tbl_Auto_cd_column!=undefined && Tbl_Auto_cd_column!=null && Tbl_Auto_cd_column!="undefined" && Tbl_Auto_cd_column!="null")
        {
         document.getElementById('ctl00_hdnMtblautoidcolumns').value =Tbl_Auto_cd_column;       
        }
          if(umrnoshow!="" && umrnoshow!=undefined && umrnoshow!=null && umrnoshow!="undefined" && umrnoshow!="null"){
              document.getElementById('ctl00_hdnDMSUmrNoshow').value = umrnoshow;  
          
          }
          if(referencecd!="" && referencecd!=undefined && referencecd!=null && referencecd!="undefined" && referencecd!="null"){
          
           document.getElementById('ctl00_hdnDMSReferenceNoshow').value = referencecd; 
          }
        

    }

    function CheckUploadDocs(UMRNO){
    var _status=true;
        if(UMRNO  != null && UMRNO != undefined && UMRNO  != undefined){
            GetNonAsync(
                    "GridService.asmx/CheckUploadedDoc",
                    {UmrNo :UMRNO},
                    function(jdata){ 
                        if(jdata.d == null){
                            _status = false;
                        }
                        else{
                            if(jdata.d.length == 0)
                                _status =false;
                            else
                                _status= true;
                        }
                    },
                    function(){
                    });
        }
        return _status;
    }


    
    function btnDMSclose() {
        $('[id*=divfileupload]')[0].style.display = 'none';
           $('#dmsumrrefrenceshow').css("display", "none");
           $('#dmsumrshow').css("display", "none");
           $('#dmsreferenceshow').css("display", "none");
              
                 document.getElementById('<%=lblfileuprefernce.ClientID %>').innerHTML='';
           document.getElementById('<%=lblfileupumr.ClientID %>').innerHTML='';
        return false;
    }
    function FilterStateMaintainence(){
        if(localStorage.getItem("advSrch") != null && localStorage.getItem("advSrch") != "" && localStorage.getItem("advSrch") != undefined){
            var _srch = localStorage.getItem("advSrch");
            localStorage.setItem('_advSrch', _srch);
        }
    }

</script>
<asp:UpdatePanel ID="UpdatePanel4" runat="server">
    <ContentTemplate>
        <div class="helpbut">
            <i></i>
            <asp:Image ID="Image1" runat="server" ImageUrl="~/Assets/img/gray-sprite.png" CssClass="flagclip QuickICO" />
            <div class="helplist">
                <ul>
                    <li><b>
                        <asp:Image ID="imginfo" runat="server" ImageUrl="~/Assets/img/gray-sprite.png" CssClass="clip userhelp" />
                    </b><a href="../Help/Help.aspx?type=User" id="UserManual" runat="server">User Manual</a>
                    </li>
                    <li><b>
                        <asp:Image ID="ImageButton3" runat="server" ImageUrl="~/Assets/img/gray-sprite.png"
                            ToolTip="DB HELP" CssClass="clip Dhelp" />
                    </b><a href="../Help/Help.aspx?type=DB" id="DBManual" runat="server">DB Help</a>
                    </li>
                    <li><b>
                        <asp:Image ID="UmanualHelp1" runat="server" ImageUrl="~/Assets/img/gray-sprite.png"
                            CssClass="clip AddHelp" /></b> <a href="../Help/HelpContent.aspx?type=User" id="ImgBtnUManualAdd"
                                runat="server">Add User Manual</a> </li>
                </ul>
            </div>
        </div>
        <div id="tdindicares" runat="server" style="float: right; height: 36px; line-height: 38px;
            margin-right: 10px;">
            <asp:Image ID="box" runat="server" ImageUrl="~/Assets/img/box.gif" />
            &nbsp;
            <asp:Label ID="lblMsg" Text="Indicates Mandatory Fields" runat="server"></asp:Label>
        </div>
        <div class="export" id="divexport" runat="server">
            <Expdata:ExportData ID="ExportData1" runat="server" />
        </div>
        <div class="pagebut">
            <asp:ImageButton AccessKey="A" ID="imgadd" runat="server" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="Anew" />
            <asp:ImageButton ID="imgbtnEdit" AccessKey="E" runat="server" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHEdit" />
            <asp:ImageButton ID="imgdelete" runat="server" AccessKey="D" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHDelete" />
            <asp:ImageButton ID="imgconfiguration" runat="server" AccessKey="Q" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHconfig" />
            <asp:ImageButton ID="imgbtnSave" runat="server" AccessKey="S" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHSave" />
            <asp:ImageButton ID="imgbtnclear" runat="server" AccessKey="W" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHClear" />
            <asp:ImageButton ID="imgbtncancel" runat="server" AccessKey="C" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHGview" />
            <asp:ImageButton ID="imgBtnReload" runat="server" AccessKey="R" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHreload" />
            <asp:ImageButton ID="imgBtnApproved" runat="server" Visible="false" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHapprove" />
            <asp:ImageButton ID="imgbacktodah" runat="server" Visible="false" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHback" />
            <asp:ImageButton ID="imgdirectPrint" runat="server" Visible="false" AccessKey="P"
                ImageUrl="~/Assets/img/ph_empty_btn.png" CssClass="PHPrint" OnClientClick="return PrintConfirmationCheck(this);" />
            <asp:ImageButton ID="imgDmsUpload" runat="server" Visible="false" AccessKey="P" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHdmsupload" OnClientClick="return OnFileUpload('Header');" />
            <asp:ImageButton ID="imgDmsView" runat="server" Visible="false" AccessKey="P" ImageUrl="~/Assets/img/ph_empty_btn.png"
                CssClass="PHdmsview" OnClientClick="return onFileView('Header');" />
            <asp:ImageButton ID="imgDmsDownload" runat="server" Visible="false" AccessKey="P"
                ImageUrl="~/Assets/img/ph_empty_btn.png" CssClass="PHdmsdownload" OnClientClick="return onFileDowload('Header');" />
        </div>
        <div class="pagebut" style="display: none; float: left" id="divUserTran" runat="server">
            <div id="divShowHide" style="background: rgb(255, 255, 255); border: 1px solid #b3b3b3;
                z-index: 9; border-radius: 3px; float: left; padding: 2px; margin-left: 20px" runat="server">
                <asp:RadioButtonList ID="radiousertran" runat="server" onclick="onCheck();" CssClass="chk-list1"
                    Style="margin: 0px !important;" RepeatDirection="Horizontal" RepeatLayout="Flow">
                </asp:RadioButtonList>
            </div>
        </div>
        <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender1" BackgroundCssClass="cmask"
            CancelControlID="imgclose1" runat="server" PopupControlID="Eventtrans2" TargetControlID="imgconfiguration">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="Eventtrans2" runat="server" Style="display: none; width: 35%;" class="modalpopup">
            <div class="pop-header">
                <h1>
                    Configuration
                </h1>
                <asp:Button ID="imgclose1" runat="server" CssClass="cbutton" Text="&times;" />
            </div>
            <div class="pop-body" style="padding: 10px 5px 10px 5px; max-height: 250px; overflow: auto;">
                <table border="0" bgcolor="#FFFFFF" cellpadding="2" cellspacing="2" width="100%"
                    align="center">
                    <tr>
                        <td align="left">
                            <asp:CheckBoxList RepeatColumns="2" CssClass="Chkbox" RepeatDirection="Horizontal"
                                ID="chkConfigColumns" runat="server">
                            </asp:CheckBoxList>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="padding-left: 10px;">
                            Page Size &nbsp;&nbsp;
                            <asp:DropDownList ID="ddlConfigPage" runat="server" CssClass="ComboBoxDropDown">
                                <asp:ListItem Value="10">10</asp:ListItem>
                                <asp:ListItem Value="15">15</asp:ListItem>
                                <asp:ListItem Value="20">20</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 5px 0px 0px 0px;">
                            <asp:ImageButton ID="imgBtnSaveConfig" runat="server" Style="vertical-align: top;"
                                ImageUrl="~/Images/Btn/NewOk_btn.gif" />
                            <asp:ImageButton ID="ImageButton9" runat="server" Style="vertical-align: top;" ImageUrl="~/Images/Btn/Newcancel_btn.gif" />
                        </td>
                    </tr>
                </table>
            </div>
        </asp:Panel>
        <%--<uc1:DMSControl ID="DMSControl1" runat="server" />--%>
        <div id="divfileupload" width="600px" style="display: none; z-index: 9999999999!important;"
            runat="server" class="masking">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="width: 725px; height: 384px; margin-left: -350px;
                margin-top: -197px;">
                <div class="pop-header">
                    <h1>
                        <asp:Label ID="lblfileupload" runat="server" Text="Documents Upload"></asp:Label>
                    </h1>
                    <input type="button" id="btncancelupload" class="button" value="&times;" onclick="return btnDMSclose();" />
                </div>
                <div id="dmsumrrefrenceshow" style="display: none;" class="pop-body">
                    <div class="panel-body" style="background: #f0f0f0">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" align="center">
                            <tr id="dmsumrshow" style="display: none;">
                                <td align="left" width="12%">
                                    <asp:Label ID="lblumrno" Text="#UMR NO : " Style="font-weight: bold; color: #0686C2"
                                        runat="server"></asp:Label>
                                </td>
                                <td width="15%">
                                    <asp:Label ID="lblfileupumr" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                        color: #0686C2; float: left;"></asp:Label>
                                </td>
                                <td width="auto">
                                </td>
                            </tr>
                            <tr id="dmsreferenceshow" style="display: none;">
                                <td align="left" width="15%">
                                    <asp:Label ID="lblreferenceno" Text="#Reference Code : " Style="font-weight: bold;
                                        color: #0686C2" runat="server"></asp:Label>
                                </td>
                                <td width="15%">
                                    <asp:Label ID="lblfileuprefernce" runat="server" CssClass="cu-type-amt" Style="font-weight: bold;
                                        color: #0686C2; float: left;"></asp:Label>
                                </td>
                                <td width="auto">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="pop-body" style="padding: 10px 5px 10px 5px; max-height: 350px; overflow: auto;">
                    <%--<uc6:MultipleFileUpload ID="MultipleFileUpload1" runat="server" />--%>
                    <iframe id="ifFileUpload" style="width: 99%; height: 325px;"></iframe>
                </div>
            </div>
        </div>
        <asp:LinkButton ID="lnkdummy3" runat="server" Style="display: none"></asp:LinkButton>
        <asp:LinkButton ID="lnkdummy" runat="server" Style="display: none"></asp:LinkButton>
        <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender2" BackgroundCssClass="cmask"
            CancelControlID="imgclose1" runat="server" PopupControlID="pnlOtherUser" TargetControlID="lnkdummy">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="pnlOtherUser" runat="server" Style="display: none; width: 30%;" class="modalpopup">
            <div class="pop-header">
                <h1>
                    LOGIN
                </h1>
                <asp:Button ID="ImageButton1" runat="server" CssClass="cbutton" Text="&times;" />
            </div>
            <div class="pop-body" style="padding: 10px 5px 10px 5px; max-height: 250px;">
                <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="FormsCtrl">
                    <tr>
                        <td align="left" width="25%">
                            User Name
                        </td>
                        <td align="left" width="75%">
                            <asp:TextBox ID="txtUserName" Width="70%" runat="server" CssClass="formtextbox"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="25%">
                            Password
                        </td>
                        <td align="left" width="75%">
                            <asp:TextBox ID="txtPassword" Width="70%" runat="server" CssClass="formtextbox" TextMode="Password"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2">
                            <asp:Label ID="lblMessage" runat="server" Text="lblMessage" CssClass="Errormsg" Visible="false"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td align="left" style="padding-top: 5px;">
                            <asp:ImageButton ID="imgBtnLogin" runat="server" ImageUrl="~/Images/Btn/login_btn.gif"
                                OnClick="imgBtnLogin_ClickNusre" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center">
                            <asp:LinkButton ID="lnkNewUser" runat="server" OnClientClick="ShoworHide();return false;"
                                Text="Back to Transaction Code"></asp:LinkButton>
                        </td>
                    </tr>
                </table>
            </div>
        </asp:Panel>
        <asp:LinkButton ID="lnkdummy1" runat="server"></asp:LinkButton>
        <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender3" BackgroundCssClass="cmask"
            CancelControlID="ImageButton2" runat="server" PopupControlID="pnlTransactioncd"
            TargetControlID="lnkdummy1">
        </ajaxToolkit:ModalPopupExtender>
        <asp:Panel ID="pnlTransactioncd" runat="server" Style="display: none; width: 30%;"
            class="modalpopup">
            <div class="pop-header">
                <h1>
                    Transaction Code
                </h1>
                <asp:Button ID="ImageButton2" runat="server" CssClass="cbutton" OnClientClick="return HideTransactionPopUp();"
                    Text="&times;" />
            </div>
            <div class="pop-body" style="padding: 10px 5px 10px 5px; max-height: 250px;">
                <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="FormsCtrl">
                    <tr>
                        <td align="left">
                            User Name
                        </td>
                        <td align="right">
                            <asp:DropDownList ID="ddlUsers" runat="server">
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" width="40%">
                            <asp:Label ID="lblTransactionpwd" runat="server" Text="Transaction Code"></asp:Label>
                        </td>
                        <td align="left" width="60%">
                            <asp:TextBox ID="txtTransactionpwd" TextMode="Password" runat="server" CssClass="formtextbox"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="middle" colspan="2" style="padding-top: 5px;">
                            <asp:ImageButton ID="imgSaveTransaction" runat="server" ImageAlign="Bottom" ImageUrl="~/Images/Btn/saveandclose_btn.PNG"
                                OnClick="imgSaveTransaction_Click" />
                        </td>
                    </tr>
                </table>
            </div>
            <asp:HiddenField ID="hdnUmrNo" runat="server" />
            <asp:HiddenField ID="hdnAdmnNo" runat="server" />
            <asp:HiddenField ID="hdnConsultationNum" runat="server" />
            <asp:HiddenField ID="hdnTransactionId" runat="server" />
            <asp:HiddenField ID="hdnStatus" runat="server" />
            <asp:HiddenField ID="hdndocId" runat="server" />
            <asp:HiddenField ID="hdnTokenSys" runat="server" />
            <asp:HiddenField ID="hdnextendedVal" runat="server" />
            <asp:HiddenField ID="hdnIstokencall" runat="server" />
            <asp:HiddenField ID="hdndownloadpath" runat="server" />
            <asp:HiddenField ID="hdnTimeFormat" runat="server" />
            <asp:HiddenField ID="hdnDateFormat" runat="server" />
            <asp:HiddenField ID="hdnDMSPermissions" runat="server" />
            <asp:HiddenField ID="hdnexportdata" runat="server" />
            <asp:HiddenField ID="hdnMobileMadatory" runat="server" />
            <asp:HiddenField ID="hdnMobileMinDigits" runat="server" />
            <asp:HiddenField ID="hdnMobileMaxDigits" runat="server" />
            <asp:HiddenField ID="hdninitialgridpagecount" runat="server" />
            <asp:HiddenField ID="hdnclientNameFor" runat="server" />
            <asp:HiddenField ID="hdntranpwdsave" runat="server" />
            <asp:HiddenField ID="hdnisshiftvaliate" runat="server" />
            <asp:HiddenField ID="hdnDMSFtp" runat="server" />
            <asp:HiddenField ID="hdnDocName" runat="server" />
            <asp:HiddenField ID="hdnPHControl" runat="server" />
            <asp:HiddenField ID="hdnShowExport" runat="server" />
            <asp:HiddenField ID="hdnIsMedClg" runat="server" />
            <asp:HiddenField ID="hdnEnableRuralBedssel" runat="server" Value="TRUE" />
            <asp:HiddenField ID="hdnEnableUrbanBedssel" runat="server" Value="FALSE" />
            <asp:HiddenField ID="hdnisSaveDisable" runat="server" Value="0" />
            <asp:HiddenField ID="hdnhealth_car_det_id" runat="server" />
            <%--<asp:HiddenField ID="hdngdocformcd" runat="server" />--%>
        </asp:Panel>
        <div id="progress" class="masking preloadall" style="display: none;">
            <div class="cmask">
            </div>
            <div class="loader1">
                <asp:Image ID="imgpro" runat="server" ImageUrl="~/Assets/img/preloader.gif" />
            </div>
        </div>
        <div id="somediv" title="Shiftlog" style="display: none;">
            <iframe id="thedialog" width="350" height="350"></iframe>
        </div>
    </ContentTemplate>
</asp:UpdatePanel>
<%--style="display: none; z-index: 999999; top: 0px; left: 0px; background: red;
            margin: 5px 10px 5px 5px; padding: 12px; border-radius: 3px; position: fixed;"--%>
<script type="text/javascript" language="javascript">

    function ShowModelDialog() {
        popUpObj = window.open("../../FrontOffice/IPBilling/FileUpload.aspx",
"ModalPopUp",
"toolbar=no," +
"scrollbars=no," +
"location=no," +
"statusbar=no," +
"menubar=no," +
"resizable=0," +
"width=300," +
"height=200," +
"left = 490," +
"top=300"
);
        popUpObj.focus();
    }
    function HidePopup() { var modelPopUp = $find('ctl00_ContentPlaceHolder1_UCHeaderControl_DMSControl1_insurmodelpopup'); if (modelPopUp != null) { modelPopUp.hide(); return false; } }
    function HideTransactionPopUp() { var tran_model_popup = $find('<%=ModalPopupExtender3.ClientID %>'); if (tran_model_popup != null) { tran_model_popup.hide(); return false; } }
    function PrintConfirmationCheck() {
        $(".smessagebox").scustommessagebox(1, "Confirm", 'Do you want a print?', HeaderPrintOK, '', HeaderPrintCancel); return false;
    }
    function HeaderPrintOK() {
        __doPostBack('ctl00$ContentPlaceHolder1$UCHeaderControl$imgdirectPrint', '');
    }
    function HeaderPrintCancel() {
    }
    with (Sys.WebForms.PageRequestManager.getInstance()) { add_beginRequest(onBeginRequest); add_endRequest(onEndRequest); }
    function onBeginRequest(sender, args) { var prog = document.getElementById('progress'); if (isNaN(parseInt(prog.length))) { prog.style.display = 'block'; } else { for (var _index = 0; _index < prog.length; _index++) { prog[_index].style.display = 'block'; } } var btnSave = document.getElementById('<%=imgbtnSave.ClientID %>'); if (btnSave != null) btnSave.disabled = false; }
    function onEndRequest(sender, args) { var prog = document.getElementById('progress'); prog.style.display = 'none'; if (isNaN(parseInt(prog.length))) { prog.style.display = 'none'; } else { for (var _index = 0; _index < prog.length; _index++) { prog[_index].style.display = 'none'; } } }
    function getPosition(str, m, i) { return str.split(m, i).join(m).length; }
    function ShiftLogCheck() {

        $(".stoast").toastText("Alert", 'Please Login for Shift', 5, 3);
        ShowShiftlogDialog();
    }
    function ShowShiftlogDialog() { var iHeight = 300; var iWidth = 250; var sFeatures = "dialogWidth:" + iWidth + "px;dialogHeight: " + iHeight + "px;scroll:no;resizable:yes"; var ui = getPosition(document.location.pathname, '/', 2); var uisol = document.location.pathname.substring(document.location.pathname.indexOf('/') + 1, ui); var url = 'http://' + document.location.host + '/' + uisol + '/' + 'Private/Admin/ShiftLog.Aspx'; window.open(url, sFeatures); return false; }
    with (Sys.WebForms.PageRequestManager.getInstance()) {
        add_beginRequest(onBeginRequest);
        add_endRequest(onEndRequest);
    }


</script>
