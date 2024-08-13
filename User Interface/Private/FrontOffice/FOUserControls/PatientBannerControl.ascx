<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PatientBannerControl.ascx.cs"
    Inherits="Private_FrontOffice_FOUserControls_PatientBannerControl" %>
<%@ Register Src="~/Private/UserControls/LookUp.ascx" TagName="UCSearch" TagPrefix="UCLookup" %>
<%@ Register Src="~/Private/FrontOffice/FOUserControls/PatientOptions.ascx" TagName="UCPatOpt"
    TagPrefix="UCPatOpt" %>
<script type="text/javascript"> 
var ctrlcom = 'ctl00_ContentPlaceHolder1'; 
function BannerViewData(result)
{
    var pagemode = '<%=Request.QueryString["MODE"] %>';
     if(pagemode=='VIEW_OP' || pagemode=='VIEW')
     {
         document.getElementById('<%=lblbilldt.ClientID %>').innerHTML =result[0].BILL_DT;
         document.getElementById('<%=lblbillno.ClientID %>').innerHTML =result[0].BILL_NO;
     }
}
function ReplaceSplCharactorScaning(value) {
    value = value.replace(/&/g, '');
    value = value.replace(/%/g, '');
    //value = value.replace(/?/g,'');
    value = value.replace(/\?/g, '');
    value = value.replace(/\;E/g, '');
    return value;
}  
function UmrPreCondition(_con)
{

    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup_hdn_preCond').value="0^" + _con;

}
$(document).ready(function(){

         var pagemode = '<%=Request.QueryString["MODE"] %>';
         var form_name = document.getElementById('<%=hdnFormName.ClientID %>').value;
         if(pagemode=='VIEW_OP' || pagemode=='VIEW')
         {
            document.getElementById('trviewdata').style.display = "table-row";
         }
         if (document.getElementById('<%=hdnIsNewReg.ClientID %>').value == "Y") {
                document.getElementById('imgbtnNewReg').style.display = "block";
         }
         else{
            document.getElementById('imgbtnNewReg').style.display = "none";
         }
         if(form_name=="OP"){
             if(document.getElementById('' + ctrlcom + '_hdnAddTest').value=="Y"){
              document.getElementById('' + ctrlcom + '_umrPatientDetails_tdbillno').style.display = "table-cell";
              document.getElementById('' + ctrlcom + '_umrPatientDetails_tdopbillslookup').style.display = "table-cell";
              document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').disabled=true;
              document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_umrPatientDetails_Umrlookup').disabled=true;
             }
         }
     
     
        $(".lookuptextbox").keydown(function (e) {
            /*related to barcode access of umr no changed by Swetha Reddy on 26/08/2017*/
            var _COUNT=0;
            if($(this.parentElement.parentElement).find('.lookupName').text() == "NEW_UMR"){
                _COUNT=1;
            }
            if ($(this.parentElement.parentElement).find('.lookupName').text() == "PRE_ADM_UMR") { 
            _COUNT = 2; 
            }

              var Validation_failed=document.getElementById('<%=hdnValidationFailed.ClientID %>').value;
              var IsUmrSelection =document.getElementById('<%=hdnIsUmrSelection.ClientID %>').value;
              if (e.keyCode === 13 && Validation_failed !='Y' && _COUNT == 1  && IsUmrSelection !='Y') {
                 var umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
                 var dataumrno=ReplaceSplCharactorScaning(umr_no);;
                 umr_no=dataumrno;
                 document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value=umr_no
                 if(umr_no==''||umr_no==null||umr_no==undefined){umr_no='';}
                 if(umr_no!=''){
                    GetAsync(
                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/umrnos",
                        { umrno: umr_no },
                        function (JData) {
                            OnUmrSelection(JData.d[0][0]);
                        },
                        function (jqXHR, textStatus, errorThrown) {
                            alert(errorThrown);
                        });
                }
             }
             if (e.keyCode === 13 && Validation_failed !='Y' && _COUNT == 2  && IsUmrSelection !='Y') {
             var umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value;
             var dataumrno=ReplaceSplCharactorScaning(umr_no);;
             umr_no=dataumrno;
             document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value=umr_no
             if(umr_no==''||umr_no==null||umr_no==undefined){umr_no='';}
             if(umr_no!=''){
                GetAsync(
                    "Private/Corporate/Changes/CorpMultipleIns.aspx/preadmnno",
                    { umrno: umr_no },
                    function (JData) {
                    
                        onPreAdmnUMRforins(JData.d[0][0]);
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        alert(errorThrown);
                    });
            }
       }
    }); /* $(".lookuptextbox").keydown(function (e) end */

});

  function RedirectToPatientDashBoard()
  {
        if(document.getElementById('<%=hdnPatientDBFlg.ClientID %>').value=="Y")
        {
            var umrno= document.getElementById('<%=hdnUmrNo.ClientID %>').value;//'<%=Request.QueryString["umrno"] %>';
            var PatientId = '<%=Request.QueryString["PatientID"] %>';
            if(umrno   !='')
            {
              var ui = getPosition(document.location.pathname, '/', 2);
             var uisol = document.location.pathname.substring(document.location.pathname.indexOf('/')+1,ui);
             var url= 'http://'+document.location.host+'/'+uisol;
             var path = url + '/private/Dashboards/Patientdashbord.aspx';
             window.location = path+"?umrno="+umrno+"&Patientid="+PatientId+"&DOC_FORM_CD=PATDSBD";
            }
        }
  }
function getPosition(str, m, i) { return str.split(m, i).join(m).length; }
function NewRegistration(){
    var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value;
    var Reg_DocID=document.getElementById('<%=hdnReg_Doc.ClientID %>').value;
    var hdnOp_Doc=document.getElementById('<%=hdnOp_Doc.ClientID %>').value;
    var hdnCons_Doc=document.getElementById('<%=hdnCons_Doc.ClientID %>').value;  
    var Admn_DocID=document.getElementById('<%=hdnAdmn_Doc.ClientID %>').value; 
    var admntype = '';
    var str="";
    if (document.getElementById('ctl00_hdnIsMedClg').value == "TRUE") {
        var rec_type_id = $('input[id*=radiousertran]:checked').val()
        if (rec_type_id == 0 || rec_type_id == null || rec_type_id == undefined) { rec_type_id = 1; }
    }
    /* Condition Added by pushkar please let Him Know Before uncomment it */
    if(form_name=='ADMN')
    {
     admntype = '<%=Request.QueryString["Type"] %>';
     str="Reg";
    }
  
    //window.location = _iniUrl + 'Private/FrontOffice/YRegistration.aspx?MOD_ID=Y&isReg=' + str + "&Type=" + form_name + "&pageurl=" + window.location.origin + window.location.pathname + "&admntype=" + admntype+ "&Doc_regID=" + Reg_DocID+ "&OP_Doc_ID=" + hdnOp_Doc+ "&Cons_Doc_ID=" + hdnCons_Doc + "&DOC_FORM_CD=REG-EXPIRY";
    window.location = _iniUrl + 'Private/FrontOffice/YRegistration.aspx?isReg=' + str + "&Type=" + form_name + "&pageurl=" + window.location.origin + window.location.pathname + "&rec_type_id=" + rec_type_id+  "&admntype=" + admntype+ "&Doc_regID=" + Reg_DocID+ "&OP_Doc_ID=" + hdnOp_Doc+ "&Cons_Doc_ID=" + hdnCons_Doc + "&DOC_FORM_CD=REG-EXPIRY";

}

function PatientInformation(umr_no){
    if(document.getElementById('<%=hdnDocName.ClientID %>').value == "OP"){
        ClearAllControls();
    }
    else if(document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
        ClearConsultation();
    }
//     GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
//              { umr_no: umr_no },
//              function (jdata) {
//                  if (jdata.d[0] != null) {
//                      Patient_Valdations(jdata.d[0][0]);
//                  }
//              }, function () {
//     });
   var sp_name='';
   var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value ;
   if(form_name=="OP" ||form_name=="Cons")
        sp_name="PR_GETALL_PATIENT_DET_OP";
   else if (form_name=="ADMN" || form_name=="ER")
        sp_name="PR_GETALL_PATIENT_DET_IP";
   else
        sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
   
   var parameters='';
   var parametervalues='';
   parameters = "IP_UMR_NO";
   parametervalues =umr_no;
            
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
                 if(form_name=="OP" ||form_name=="Cons"){
                      Patient_Valdationsop(jdata.d[0][0]);
                 }
                 else if(form_name=="ADMN" || form_name=="ER"){
                      Patient_Valdationsforip(jdata.d[0][0]);
                       var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                       if (_ispatcat == 'true') {
                        patientcat();
                       }
                 }
                 else{
                      Patient_Valdationsforall(jdata.d[0][0]);
                 }

            }
        }, function () {
    });
}


function OnBill(_d){
 if(_d.BILL_NO==undefined || _d.BILL_NO==null ){ 
       _bill_Id=_d.RESULT.BILL_ID;
       _bill_No=_d._lktext;
       patient_id=_d.RESULT.PATIENT_ID;
       umr_no=_d.RESULT.UMR_NO;
     
   }   
   else{
        _bill_Id=_d.BILL_ID;
       _bill_No=_d.BILL_NO;    
        patient_id=_d.PATIENT_ID;
        umr_no=_d.UMR_NO;
        
    }
document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value=umr_no;
document.getElementById('' + ctrlcom + '_umrPatientDetails_ucBills_txtSearchControl').value=_bill_No
document.getElementById('' + ctrlcom + '_umrPatientDetails_ucBills__hiddenID').value=_bill_Id
document.getElementById('' + ctrlcom + '_umrPatientDetails_ucBills__hiddenText').value=_bill_No;
   var d=[];
   d.UMR_NO=umr_no;
      OnUmrSelection(d);
}

function OnBillSelection(_d)
{
     var _bill_No=''; var _bill_Id=''; var reg_id=''; var bill_rev_no='';var patient_id='';var umr_no='';var patient_type='';
     if(_d.COPR_STMT_STATUS=="Y"){
          $(".stoast").toastText("Info", "Corporate Statement Done For This Bill ..", 5, 3);
          return false;
     }
     if(_d.POST_DISCOUNT_APP_STATUS =="N"){
          $(".stoast").toastText("Info", "Please Approve Post Discount Record Against to this Bill # ", 5, 3); 
          return false;
     }
     if(_d.REFUND_APP_STATUS =="N"){
          $(".stoast").toastText("Info", "Please Approve Refund Record Against to this Bill # ", 5, 3); 
          return false;
     }
    if(_d.BILL_NO==undefined || _d.BILL_NO==null ){ 
    if( _d.RESULT.POST_DISCOUNT_APP_STATUS =="N"){
          $(".stoast").toastText("Info", "Please Approve Post Discount Record Against to this Bill # ", 5, 3);
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').value='';  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value='';  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenText').value='';  
          return false;    
    }
    if( _d.RESULT.REFUND_APP_STATUS =="N"){
          $(".stoast").toastText("Info", "Please Approve Refund Record Against to this Bill # ", 5, 3);
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').value='';  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value='';  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenText').value='';  
          return false;    
    }
       _bill_Id=_d.ID;
       _bill_No= _d.RESULT.BILL_NO;
       reg_id=_d.RESULT.REG_ID;
       bill_rev_no=_d.RESULT.BILL_REV_NO;
       patient_id=_d.RESULT.PATIENT_ID;
       umr_no=_d.RESULT.UMR_NO;
       patient_type=_d.RESULT.PATIENT_TYPE;
   }   
   else{
        _bill_Id=_d.BILL_ID;
       _bill_No=_d.BILL_NO;
        reg_id=_d.REG_ID;
        bill_rev_no=_d.BILL_REV_NO;
        patient_id=_d.PATIENT_ID;
        umr_no=_d.UMR_NO;
         patient_type=_d.PATIENT_TYPE;
    }
    if(document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value!="")
    {
           document.getElementById('<%=Umrlookup.ClientID %>').value=umr_no;  
           $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(patient_type);
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').value=_bill_No;  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value=_bill_Id;  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenText').value=_bill_No; 
           document.getElementById('<%=hdnRegID.ClientID %>').value=reg_id;
           document.getElementById('<%=hdnBillRevNo.ClientID %>').value=bill_rev_no;
    }else
    {
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').value=_bill_No;  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value=_bill_Id;  
           document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenText').value=_bill_No;  
    }
   BindPatientDetails(patient_id,umr_no);
   GetPatentBills(umr_no);
  
    
}

function OnUmrSelection(input) {
        _xmlCorpRef = '';
        _xmlCorpReg = '';
     var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value;
     document.getElementById('<%=hdnUAdmnNO.ClientID %>').value='';
     if(form_name=='MULTIPLEBILLS')
        {         
        var ADMN_NO = $('[id*=IPPatientDtls1_ucUmrNo_txtSearchControl]').val();
        if (ADMN_NO == '' || ADMN_NO == undefined || ADMN_NO == 'undefined') {
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').value = '';
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value = 0;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenText').value = '';
            $('#'+ ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').addClass('red');
        }
     }
     switch(form_name)
     {
        case "HISAPPT":
        {
            ClearApptControls();
        }
        break;
        case "ER":
        {
            checkERstatus(input);
        }
        break;
        case "OpBillAssesment":
        {
            checkHCstatus(input);
        }
        break;
        case "FeedBack Form":
        {
            checkHCstatus(input);
        }
        break;
        case "PREADVANCE":
        {
            var View = $('#'+ ctrlcom + '_hdnViewmode').val();
            if (View == 'Y')
            { 
            }
            else 
            {
                ClearAllControls();
            }
        }
        break;
        case "HCSUMRY":
        {
            checkHCstatus(input);
        }
        break;
        case "PATIENT COMPONENT":
        {
            checkPatCompStatus(input);
        }
        break;
         case "DIALYSIS BOOKING":
        {
            checkdialysisbooking(input);
        }
        break;
        case "PATIENTDAILIZERMAPPING":
        {
            checkPatDialzrMapping(input);
        }
        break;
        case "DIALLABIND":
        {
            checkDialLabIndStatus(input);
        }
        break;
        case "DIAREND":
        {
            checkDialRendStatus(input);
        }
        break;
        case "DIALSERIND":
        {
            checkDialSerIndStatus(input);
        }
        break;
        case "HCFEEDBK":
        {
            checkHCstatus(input);
        }
        break;
        case "CREF":
        {
            checkpatstatus(input);
        }
        break;
        case "OP":
        {
            ClearAllControls();
        }
        break;
        case "Cons":
        {
            ClearConsultation();
        }
        break;
        case "OPCNCL":
        {
            ClearopBillCancel();
        }
        break;
        case "OPPKGBILL":
        {
            ClearopPkgBillCancel();
        }
        break;
        case "OUTSTDNGDUE":
        {
            ClearoutstdngDue();
        }
        break;
        case "Refund":
        {
            ClearRefunds();
        }
        break;
        case "POSTDSCNT":
        {
            ClearpostDiscnt();
        }
        break;
        case "BillConvertion":
        {
            ClecarBillConvertion();
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').disabled = false;
            document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_umrPatientDetails_ucbill').disabled = false;
            var umr_no= '';
            if(input.UMR_NO== null || input.UMR_NO == undefined || input.UMR_NO == ''){
             umr_no=input._lktext;
            }
            else{
            umr_no = input.UMR_NO;
            }
            BindBills(umr_no);
        }
        break;
        case "PreAssessmentBills":
        {
            checkHCstatus(input);
        }
        break;
        case "ESTBILL":
        {
            ClearDetails();
        }
        break;
        case "ADMN":
        {
            clearAdmnInfo();
        }
      
//        case "ADMN":
//        {
//            clearAdmnInfo();
//            GetAsync(
//                                    "Private/FrontOffice/DayCare/AddNewAdmission.aspx/PreAdmn_Precondition",
//                                    { UMR_NO:input.UMR_NO},
//                                    function (JData) {
//                                    },
//                                    function (jqXHR, textStatus, errorThrown) {
//                                    });
//            document.getElementById('' + ctrlcom + '_EmergencyContactDetails1_txtpassno').value=document.getElementById('' + ctrlcom + '_hdnNoOfAP').value;
//            LinkUmrno(input);
//            var type = '<%=Request.QueryString["Type"] %>';
//            if (type == "Pre")
//            {
//                OnPagePreAdmnValidations();
//            }
//            else
//            {
//                OnPageValidations();
//            }
//        }
//        break;
        default:
            break;
     }
        $('.vipsource').css('display','none');
        var PatientID=0;
        var _umr_no='';
        $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').removeClass('lookuptextbox red'); /* remove lookup border color */
        if(input.RESULT==undefined) /* lookup selection */
        {
             PatientID=input.PATIENT_ID;
             _umr_no=input.UMR_NO;
        }
        else /* auto completion selection */
        {
             PatientID=input.RESULT.PATIENT_ID;
             _umr_no=input.RESULT.UMR_NO;
        }        
    /* Umr_no Based Validation Data Getting Start */    
    var sp_name='';
    if(form_name=="OP" ||form_name=="Cons")
        sp_name="PR_GETALL_PATIENT_DET_OP";
    else if (form_name=="ADMN" || form_name=="ER")
        sp_name="PR_GETALL_PATIENT_DET_IP";
    else
        sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
  
   if (form_name == 'OP' || form_name == 'Cons') {
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnhealthcard_id').value=0;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_HdnHealthcardno').value='';
        }
         if (form_name == 'OPQUICK') {
            document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardid').value=0;
            document.getElementById('' + ctrlcom + '_ReceiptControl2_HdnHealthcardno').value='';
        }
   var parameters='';
   var parametervalues='';
   parameters = "IP_UMR_NO";
   parametervalues =_umr_no;
            
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
                 if(form_name=="OP" ||form_name=="Cons"){
                      Patient_Valdationsop(jdata.d[0][0]);
                 }
                 else if(form_name=="ADMN" || form_name=="ER"){
                      Patient_Valdationsforip(jdata.d[0][0]);
                      var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                      if (_ispatcat == 'true')
                        patientcat();
                 }
                 else{
                    Patient_Valdationsforall(jdata.d[0][0]);
                 }
            }
        }, function () {
    });
       /*  Umr_no Based Validation Data Getting End */ 
       return false;
 }


function CompareExpireDate(Date1, Date2) {
    Date1 = new Date(Date1).format('dd-MMM-yyyy');
    Date2 = new Date(Date2).format('dd-MMM-yyyy');
    if (Date1 != null && Date1 != "" && Date2 != null && Date2 != "") {
            if (Date1.length == 10) Date1 = '0' + Date1; if (Date2.length == 10) Date2 = '0' + Date2;
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
  function OnsuccesssaveConfirmationwithParam_message(param)
  {
       if(param==undefined){param}
       var param_splt=param.split(',');
       param=param_splt[0];
       if(param=='pat-expiry')
       {
           return false;
       }
       else if(param == 'In-Active'||param=='blocked') /* In-Active Umr_no Check */
       {
           var form_name=param_splt[1];
           if(form_name=='PREADVANCE'||form_name=='ADMN')
           {
                var _umr_no = param_splt[2];
                var PatientID = param_splt[3];
                BindPatientDetails(PatientID,_umr_no);
                BindPatientBedDetails(_umr_no); 
           }
           else
           {
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                return false;
           }
       }
       else if(param=='reg-expired')
       {
           var form_name =param_splt[1];
           if(form_name!='ADMN')
           {
                 if(form_name == 'OpBillAssesment')
                 {
                   var pat_id=param_splt[3];
                   var type = form_name;
                   window.location.href = _iniUrl+ 'Private/FrontOffice/YRegistration.aspx?Type=' + type + '&ID=Registration&pane=0&DOC_ID=64&PatType=PATEXP&ExpPatID=' + pat_id+"&DOC_FORM_CD=REG-EXPIRY";
                 }
                 else if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value == 'N' && (form_name=='OP' || form_name=='Cons')){
                   document.getElementById('' + ctrlcom + '_chk_old').checked=false;
                    onGetPatientBanner();
                    document.getElementById('' + ctrlcom + '_chkisold').checked = true;
                    document.getElementById('' + ctrlcom + '_tdUmr').style.display = 'block';
                    $('#lk_btn_ctl00_ContentPlaceHolder1_ucUMRno').trigger('click')
                    document.getElementById('_lk_ctl00_ContentPlaceHolder1_ucUMRno').value = param_splt[2];
                    console.log('abc', document.getElementById('_lk_ctl00_ContentPlaceHolder1_ucUMRno').value);
                    $('#btn_fnd_ctl00_ContentPlaceHolder1_ucUMRno').trigger('click');
                    ShowUmrNos();
                    return false;
                }
                else if((document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value=='') && (form_name == 'OP' || form_name == 'Cons'))
                {
                       var pat_id=param_splt[3];
                       var type = form_name;
                       window.location.href = _iniUrl+ 'Private/FrontOffice/YRegistration.aspx?Type=' + type + '&ID=Registration&pane=0&DOC_ID=64&PatType=PATEXP&ExpPatID=' + pat_id+"&DOC_FORM_CD=REG-EXPIRY";
                }
            }
           else if(form_name=='PREADVANCE'||form_name=='ADMN')
           {
                var _umr_no = param_splt[2];
                var PatientID = param_splt[3];
                BindPatientDetails(PatientID,_umr_no);
                BindPatientBedDetails(_umr_no);
           }
       }
       else if(param=='admited')
       {
            var _umr_no = param_splt[2];
            var PatientID = param_splt[3];
            var allow_mtpl_admn=param_splt[4];
            var allow_ip_to_op=param_splt[5];
            var limited_srv=param_splt[6];
            var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value;
              if(form_name=='HCSUMRY')
              {
              return false;
              }
              else{

                    if(form_name=='ADMN' && allow_mtpl_admn=='Y')
                    {
                        BindPatientDetails(PatientID,_umr_no);
                        BindPatientBedDetails(_umr_no);
                    }
                    else if(form_name !='ADMN' && allow_ip_to_op=='True')
                    {
                        BindPatientDetails(PatientID,_umr_no);
                        BindPatientBedDetails(_umr_no);
                    }
                    else if(limited_srv=='Y')
                    {
                        BindPatientDetails(PatientID,_umr_no);
                        BindPatientBedDetails(_umr_no);
                    }
                }
       }
       else if(param=='merged')
       {
            var _umr_no = param_splt[2];
            var PatientID = param_splt[3];
            var sp_name='';
 
           if(form_name=="OP" ||form_name=="Cons")
                sp_name="PR_GETALL_PATIENT_DET_OP";
           else if (form_name=="ADMN" || form_name=="ER")
                sp_name="PR_GETALL_PATIENT_DET_IP";
           else
                sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
   
           var parameters='';
           var parametervalues='';
           parameters = "IP_UMR_NO";
           parametervalues =_umr_no;
            
           GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
           { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
                function (jdata) {
                    if (jdata.d[0] != null) {
                         if(form_name=="OP" ||form_name=="Cons"){

                          Patient_Valdationsop(jdata.d[0][0]);
                         }
                         else if(form_name=="ADMN" || form_name=="ER"){
                             Patient_Valdationsforip(jdata.d[0][0]);
                               var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                               if (_ispatcat == 'true') 
                                  patientcat();
                         }
                         else
                                Patient_Valdationsforall(jdata.d[0][0]);
                    }
                }, function () {
            });

        return false;
        //BindPatientBedDetails(_umr_no);
       }
       else if(param=='OSP')
       {
       }
       else if(param=='Cancel')
       {
        document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
        return false;
       }
       else
       {
       }
   }
    
function patBind(patid,umrno){
   BindPatientDetails(patid,umrno);
}
function Okinactive()
{
    return true;
}
function CancelInactive()
{
    ClearPatientBanerControl();
    return false;
}
 var _xmlCorpRef = '';
 var _xmlCorpReg = '';

function Patient_Valdationsop(input)
{
        var docformcd=getParameterByName("DOC_FORM_CD");
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        if(input.IS_OSP=='Y' && docformcd =="OPDREGBILL")
        {

        }
        else{
//           var RegExpDt = new Date(input.REG_EXPIRY_DATE).format('dd-MMM-yyyy');
//           var currDt = new Date().format("dd-MMM-yyyy");
//           if (RegExpDt.length != 2) {
//           var sedt = RegExpDt;
//           var currDt = new Date().format("dd-MMM-yyyy");
//           var result = CompareDates(sedt, currDt);
//           if (result == "d1<d2") {
//               $(".stoast").toastText("warning", "Patient Registration Validity is Over on,'" + RegExpDt + "' , need to register again.", 5, 3);
//               return false;
//               }
//           }
            if (input.IS_REG_EXPIRY == 'Y') /* Registration Expiry Condition Start */
            {
                var is_renewal_required = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnisrenewal').value;
                if (is_renewal_required == "Yes") {
                    var Allow_Reg_Expiry = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnAlloweOP').value;
                    param = 'reg-expired';
                    param = param + ',' + form_name;
                    param = param + ',' + input.UMR_NO;
                    param = param + ',' + input.PATIENT_ID;
                    if (form_name == 'PREADVANCE') {
                        ConfirmationRequiredForSaveWithParam_message(obj, param, 'This UMR# Registration Expired , Do You Want To Deposit Advance');
                        return false;
                    }
                    else if (form_name == 'OUTSTDNGDUE' || form_name == 'OPCNCL' || form_name == 'Refund' || form_name == 'POSTDSCNT' || form_name == 'OPPKGBILL' || form_name == 'MLC' || form_name == 'PatientAccount') {
                        $(".stoast").toastText("Info", "Patient Registration Validity is Over  So , Please Renewal Again.", 5, 2);
                    }
                    else {
                        if (Allow_Reg_Expiry == "False") {
                            param = 'reg-expired';
                            param = param + ',' + form_name;
                            param = param + ',' + input.UMR_NO;
                            param = param + ',' + input.PATIENT_ID;
                            ConfirmationRequiredForSaveWithParam_message(obj, param, 'Patient Registration Validity is Over  So , Please Renewal Again.');
                            return false;
                        }
                        else {
                            $(".stoast").toastText("Info", "Patient Registration Validity is Over  So , Please Renewal Again.", 5, 2);
                        }
                    }
                }
                else {
                    $(".stoast").toastText("Info", "Patient Registration Validity is Over  So , Please Contact Administration..!", 5, 2);
                    return false;
                }
            } /* Registration Expiry Condition End */
        }
        var hdnDashBoardUmr=$('[id*=hdnDashBoardUmr]').val();
        if(hdnDashBoardUmr==''||hdnDashBoardUmr==null||hdnDashBoardUmr==undefined){
            hdnDashBoardUmr='';
        }
        if(hdnDashBoardUmr!=''){
            document.getElementById('<%=Umrlookup.ClientID %>').disabled=true;
            document.getElementById('<%=ucAdmission.ClientID %>').disabled=true;
            document.getElementById('imgbtnNewReg').disabled=true;
        }
  
        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;
        document.getElementById('<%=hdnfrgncatgryid.ClientID %>').value=input.TARIFF_ID;
        document.getElementById('<%=hdnbalanceAmt.ClientID %>').value=input.BALANCE_AMOUNT;

        var param;
        var obj;
         
         if( document.getElementById('<%=hdnVerifymonileno.ClientID %>').value=="Y"){
             if(input.LAST_TRAN_DT!="")
             {
                 var previoustrandt=new Date(input.LAST_TRAN_DT).format('dd-MMM-yyyy')
                 currDt = new Date().format('dd-MMM-yyyy');
                 var daysformoblevalidation=document.getElementById('<%=hdndaysvalidatemobno.ClientID %>').value;
                 if(form_name!="CorpClaim")
                 {
                     if(daysformoblevalidation=="NaN"||daysformoblevalidation==undefined||daysformoblevalidation==null||daysformoblevalidation==""){daysformoblevalidation=0;}
                     var days = days_betwwen_dates(new Date(previoustrandt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                      if(days<=parseFloat(daysformoblevalidation))
                      {
                         $(".stoast").toastText("Info", "Please Verify Mobile No!.", 5, 2); 
                      }          
                 }
             }
         }
         if(input.FUND_BALANCE_AMOUNT!="" && input.FUND_BALANCE_AMOUNT!=null && input.FUND_BALANCE_AMOUNT!=undefined)
         {
                $(".stoast").toastText("Info", "This Patient Has Fund", 3, 2);
         }
         if (input.RECORD_STATUS != 'A' || input.PATIENT_STATUS == 'Cancel'||input.PATIENT_STATUS == 'In Active') { /* Inactivated Or Cancelled Validation Start */
             if(input.PATIENT_STATUS == 'Cancel') /* cancel */
             {
                   param='Cancel';
                   param=param+','+form_name;
                   document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                   ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Cancelled  Reason for '+ input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                   return false;
             }
             else /* in-active */
             {
                   param='In-Active';
                   param=param+','+form_name;
                   var Inactive_Reason=input.STATUS_REASON;
                   if(Inactive_Reason==undefined || Inactive_Reason==null)
                   {
                        Inactive_Reason='';
                   }
                   if(Inactive_Reason != ''){
                           document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                           ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                           return false;
                   }
                   else{
                           document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                           ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated  Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                           return false;
                       }
             }
        }
        if (input.PATIENT_STATUS == 'Death') /* Expired Patient Validation Start */
        {

                param='pat-expiry';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'Sorry,you cannot admit an expired patient');
                    return false;
      
        }/* Expired Patient Validation Ends */
        if (input.PATIENT_STATUS == 'Blocked') { /* Blocked Patient Validation Start */

                param='blocked';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is BLOCKED With Reason '+input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                return false;
               
        } /* Blocked Patient Validation End */
        $('#ptype-flag').removeClass();
        $('#ptype-flag').addClass('ptype-flag');
        /* Senior Citizon And Vip Validation Start */
        if(input.IS_SENIOR_CITIZEN == 'Y' && (input.IS_VIP.trim() == 'V' || input.IS_VIP.trim() == 'VV'))
        {
                var txt="";var clas="";
                if(input.IS_VIP.trim() == 'V'){ txt="VIP patient";clas="p-sc-vip";}else {txt="This is a VVIP patient!";clas="p-sc-vvip";}
                $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                $(".alertprompt").css('background-color','#a0e458');
                $(".stoast").toastText("Info",txt+"<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                $(".alertprompt").css('background-color','#FC8107');
                $('#ptype-flag').addClass(clas);
        }
        else
        {
                if (input.IS_SENIOR_CITIZEN == 'Y') {
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $('#ptype-flag').addClass("p-scitizen");
                }
                if (input.IS_VIP !=null && input.IS_VIP.trim() == 'V') {
                        $(".stoast").toastText("Info","This is a VIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vip");
                }
                if (input.IS_VIP && input.IS_VIP.trim() == 'VV') {
                        $(".stoast").toastText("Info","This is a VVIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vvip");
                }
        }/* Senior Citizon And Vip Validation End */
        if((form_name=="OP" || form_name=="Cons") && ($('[id*=hdnallowtariffslcn]').val().toLowerCase()=='true'))/*Tariff selection Concept*/
        {
              $(".stoast").toastText("Info", "This patient having patient category", 3, 2);
              if ($('[id*=hbnisshowpatcatagery]').val().toUpperCase() == "YES") {
                    $('.allowMTariff').show();
              }
              else{   $('.allowMTariff').show();
                        $('#'+ ctrlcom + '_UCServices_ddlpatcat').prop('disabled',true);
                        $('#'+ ctrlcom + '_UCServices_ddltariff').prop('disabled',true);
              }
                   /*---------------By Default patient category*/
                 /*  $('#'+ ctrlcom + '_UCServices_ddlpatcat').val(input.FOREIGN_CATEGORY_ID);
                   $('[id*=hdnforeigncatid]').val(input.FOREIGN_CATEGORY_ID);*/

                    /*---------------By Default Location Default category*/
                    /*Patient category purpose*/
                     // document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML=input.FOREIGN_CATEGORY_NAME;
             if(input.FOREIGN_CATEGORY_ID=="" ||input.FOREIGN_CATEGORY_ID== undefined||input.FOREIGN_CATEGORY_ID== 'undefined'){
                    var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
                    var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
           
                    if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
                   $('#'+ ctrlcom + '_UCServices_ddlpatcat').val(setpatcat);
                   $('[id*=hdnforeigncatid]').val(setpatcat);
             }else{
                    $('#'+ ctrlcom + '_UCServices_ddlpatcat').val(input.FOREIGN_CATEGORY_ID);
                    $('[id*=hdnforeigncatid]').val(input.FOREIGN_CATEGORY_ID);
             }
           ChangeTarifByPatcat();
           document.getElementById('' + ctrlcom + '_UCServices_ddltariff').selectedIndex=1;
        }
      
            var hdnDateFormat = $('[id$=hdnDateFormat]').val();
            if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
            var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            if(input.DISCHRG_STATUS == 'Y'){
            var datacount=0;
            var sp_name='PR_GETALL_PATIENT_DET_OPA';
   
          var parameters='';
          var parametervalues='';
          parameters = "IP_UMR_NO";
          parametervalues = input.UMR_NO;
          
          GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
          { parameters:parameters ,parametervalues:parametervalues,sp_name:sp_name},
            function (jdata) {
                if (jdata.d[0] != null && jdata.d[0].length>0) {
                    datacount=1;
                    if(jdata.d[0][0].PRE_ADMN_STATUS=='C')
                    {
                           $(".stoast").toastText("Info", "Pre Admission Has Been Cancelled For This Patient!!!", 5, 2); 
                    } 
                    document.getElementById('<%=hdnucadmnno.ClientID %>').value=jdata.d[0][0].ADMN_NO;
                    document.getElementById('<%=hdnadmnno.ClientID %>').value=jdata.d[0][0].ADMN_NO;
                    document.getElementById('<%=hdndschrgstatus.ClientID %>').value=jdata.d[0][0].DSCHRG_STATUS;
                    document.getElementById('<%=hdnselfinves.ClientID %>').value=jdata.d[0][0].IS_SELF_INVESTIGATION;
                    document.getElementById('<%=hdnadmntypeids.ClientID %>').value=jdata.d[0][0].ADMN_CASE_TYPE_ID;
                    if (jdata.d[0][0].ADMITTED_STATUS == 'Y'&& jdata.d[0][0].APPROVE_STATUS=="N") /* Admited Validation Starts */
                    {
                           var Allow_admn=document.getElementById('<%=hdnAlowAdmnToOP.ClientID %>').value;
                           var Allow_multi_admn=document.getElementById('<%=hdnAlwmtplAdmn.ClientID %>').value;      
                           var admnbedtls=jdata.d[0][0].ADMN_BED_DTLS;
                           var casetype=jdata.d[0][0].ADMN_CASE_TYPE_NAME;
                           var admnno=jdata.d[0][0].ADMN_NO;       
                           if(admnbedtls==undefined||admnbedtls==null)
                           {
                           admnbedtls='';
                           }
                           var admn=admnno+"-"+'CaseType: '+ jdata.d[0][0].ADMN_CASE_TYPE_NAME+"-"+admnbedtls;
                           param='admited';
                           param=param+','+form_name;
                           param=param+','+input.UMR_NO;
                           param=param+','+input.PATIENT_ID;
       
                           document.getElementById('<%=hdnNewAdmnID.ClientID %>').value=jdata.d[0][0].ADMN_ID; 
                           document.getElementById('<%=hdnIsallowed.ClientID %>').value=jdata.d[0][0].IS_OP_TRN_ALLOWED;
                           if(Allow_admn==undefined)
                           Allow_admn=True;
                           var admndt=new Date(jdata.d[0][0].ADMN_DT).format(hdnDateFormat) + " " + new Date(jdata.d[0][0].ADMN_DT).format(hdnTimeFormat);
                           if(form_name!='CREF' && form_name!='ESTBILL' && form_name!='ESTBILL' && form_name!='BillConvertion' && form_name!='CorpClaim'&&form_name!='PatientAccount'){
                                if (jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_admn=='True')/* Admited Checking Based On Company Policy Setting */
                                {
                                    param=param+','+Allow_multi_admn;
                                    param=param+','+Allow_admn;
                                    param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                                    ConfirmationRequiredForSaveWithParam_message(obj,param,'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                                    $('.icon-user-3').css('display', 'block')
                                    $('.icons ul li')[11].style.display = 'block';
                                    return false;
                                }
                                else if(jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_admn=="False")/* Admited Checking Based On Company Policy Setting */
                                {
                                    if(jdata.d[0][0].IS_OP_TRN_ALLOWED=='Y' )
                                     {
                                          param=param+','+Allow_multi_admn;
                                          param=param+','+Allow_admn;
                                          param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                                          document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                          $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+' So, Op Transaction Not Allowed',5,2);
                                     }
                                     else
                                     {
                                          param=param+','+Allow_multi_admn;
                                          param=param+','+Allow_admn;
                                          param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                                          $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'',5,2);
                                            // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                                            return false;
                                     }
                                }
                            }
                        return false;
                    } 
                    if(datacount==1){
                         return false;
                 }
               }
            }, function () {
          });
         if(datacount==1){
            return false;
         }
       }
       /* Admited Validation Ends */
        if(form_name!='CorpClaim'){
       if (input.PATIENT_STATUS == 'Merge') /* Merge Validations Start */
       {
            Is_mearged = 'Y';
            param='merged';
            param=param+','+form_name;
            param=param+','+input.MERGE_UMR_NO;
            param=param+','+input.MERGE_PATIENT_ID;
            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# ('+input.UMR_NO+' )  is MERGED to ' + input.MERGE_UMR_NO +' Do You Want To Continue With Merged UMR#'+input.MERGE_UMR_NO);
            return false;
       } /* Merge Validations End */
     }
    
        if (parseFloat(input.OUTSTANDING_DUE) > 0) {
            if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-rupee"></i>' + input.OUTSTANDING_DUE ,5,2);
            }
            else{
                $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-dollar"></i>' + input.OUTSTANDING_DUE ,5,2);
            }
        }
        if (parseFloat(input.REFUND) > 0) {
            if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-rupee"></i>' + input.REFUND ,5,2);
            }
            else{
                $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-dollar"></i>' + input.REFUND ,5,2);
            }
        }
        
        var fdays;
        if(parseFloat(input.EXPIRING_AMT)>0) /* Expiring Amount Validation Start */
        {
            var sedt = input.EXPIRY_DT;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                 //   if (res == "d1>d2") {
                    var days = days_betwwen_dates(new Date().format('dd-MMM-yyyy'), new Date(input.EXPIRY_DT).format('dd-MMM-yyyy'));
                    fdays=days;
            if(days>0){
                if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire within ' + days + ' Days..',5,2);
                }
                else{
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire within ' + days + ' Days..',5,2);
                }
                 document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = days + "Days";
            }
            else{
                    if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire Today..',5,2);
                    }
                    else{
                        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire Today..',5,2);
                    }
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = "Today";
             } 

           // }
        }/* Expiring Amount Validation Ends */

        if(parseFloat(input.PRE_ADVANCE_AMOUNT)>0)
        {
            if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-rupee"></i>'+input.PRE_ADVANCE_AMOUNT ,5,2);
            }
            else{
                $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-dollar"></i>'+input.PRE_ADVANCE_AMOUNT ,5,2);
            }
        }
        if(input.IS_MLC=='Y')
        {
           $(".stoast").toastText("Info",'MLC Patient !',5,2);/*UnCommented By Pushkar Let me know before uncomment it*/
           if(document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN")
            {
                document.getElementById('' + ctrlcom + '_chkIsMLC').checked=true;
            }
        }
        if(input.VALIDITY_EXPIRING_DAYS=='Y')
        {
            $(".stoast").toastText("Info",'This Patient Corporate Referal Letter Validity Is Expiring ...',5,2);
        }
        if(input.APMNT_ID1!='0' &&input.APMNT_ID1!=undefined && input.APMNT_ID1!='')
        {
            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "HISAPPT" || document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
                //$(".stoast").toastText("Info","This Umr No " +input.UMR_NO+" Having An Appointment",5,2);
                 $(".stoast").toastText("Info","This Patient Has An Appointment(s)",5,2);
            }
        }

            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrecord_status').value = input.RECORD_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpatient_expiry').value = input.PATIENT_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_blocked').value = input.IS_BLOCKED;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnonbed_status').value = input.ONBED_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_merge').value = input.IS_MERGE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_reg_expiry').value = input.IS_REG_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_senior_citizen').value = input.IS_SENIOR_CITIZEN;

            var vip= input.IS_VIP;
            vip=vip==undefined?"":vip;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_vip').value = vip.trim();
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnoutstanding_due').value = input.OUTSTANDING_DUE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrefund').value = input.REFUND;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnmerge_umr_no').value = input.MERGE_UMR_NO;
             
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpreadvance').value = input.PRE_ADVANCE_AMOUNT;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnismlc').value = input.IS_MLC;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpamt').value = input.EXPIRING_AMT;
           
                       
            if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PREAUTH" && document.getElementById('<%=hdnDocName.ClientID %>').value != "BillConvertion" ) { /* TRANSACTION SAVING XML GENERATION UMR_NO ASSIGN */
                var Name = document.getElementById('<%=hdnDocName.ClientID %>').value;
                switch (Name) {
                    case "OPCNCL":
                        break;
                    case "DI":
                        break;
                    case "POSTDSCNT":
                        break;
                    case "IP CREDIT LIMIT":
                        break;
                    case "MLC":
                        break;
                    case "PDoc":
                        break;
                    case "CREF":
                        break;
                    case "ConsTransfer":
                        break;
                    case "OPPKGBILL":
                        break;
                    case "FeedBack Form":
                        break;
                    case "OpBillAssesment":
                        break;
                    case "AssesmentMerge":
                        break;
                    case "ER":
                        break;
                    case "HCSUMRY":
                        break;
                    case "HCFEEDBK":
                        break;
                    case "PASSPORTDETAILS":
                        break;
                    case "PATIENT COMPONENT":
                        break;
                        case "DIALYSIS BOOKING":
                        break;
                    
                    case "PATIENTDAILIZERMAPPING":
                        break;
                    case "DIALLABIND":
                        break;
                    case "DIAREND":
                        break;
                    case "DIALSERIND":
                        break;
                    case "ADVTRAN":
                        break;
                    case "TO_ADVTRAN":
                        break;
                    case "CorpClaim":
                        break;
                    case "HISAPPT":
                        break;
                    case "RefLetterValidity":
                        break;
                    case "OrderedVerification":
                        break;
                    case "ESTBILL":
                    break;
                    case "PreAssessmentBills":
                    break;
                    default:
                    if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO')!=null)
                    {
                        if (document.getElementById('<%=hdnDocName.ClientID %>').value != "Passport" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PatientAccount")
                        document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = input.UMR_NO;
                        }
                        break;
                    }
            }
       var PatientID = input.PATIENT_ID;
       var _umr_no = input.UMR_NO;
       BindPatientDetails(PatientID,_umr_no);
        
  } 

   function Patient_Valdationsforall(input)
   {
         var hdnDashBoardUmr=$('[id*=hdnDashBoardUmr]').val();
        if(hdnDashBoardUmr==''||hdnDashBoardUmr==null||hdnDashBoardUmr==undefined){
        hdnDashBoardUmr='';
        }
        if(hdnDashBoardUmr!=''){
        document.getElementById('<%=Umrlookup.ClientID %>').disabled=true;
        document.getElementById('<%=ucAdmission.ClientID %>').disabled=true;
        document.getElementById('imgbtnNewReg').disabled=true;
        }
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
      // document.getElementById('<%=hdnoldregtpaid.ClientID %>').value=input.REG_CMP_ID;
        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;
        document.getElementById('<%=hdnfrgncatgryid.ClientID %>').value=input.TARIFF_ID;
    
        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;
  
     
        var param;
        var obj;
        if(form_name=="ESTBILL"){
               if(input.ESTBILL_STATUS =="N"){
                  $(".stoast").toastText("Info","Please Approve The Previous Estimation Bill!", 3, 2);
                 return false;
             }
         }
         if(form_name=="ESTBILL"){
         if(input.ESTBILL_STATUS =="Y"){
         
            }
         }
     
         if(form_name=="AssesmentMerge"){
             if(input.ASSESSMENT_STATUS !=""){
                $(".stoast").toastText("Info",input.ASSESSMENT_STATUS+" are not scheduled", 5, 3);
             }
         }

          if( document.getElementById('<%=hdnVerifymonileno.ClientID %>').value=="Y"){
           if(input.LAST_TRAN_DT!="")
           {
             var previoustrandt=new Date(input.LAST_TRAN_DT).format('dd-MMM-yyyy')
             currDt = new Date().format('dd-MMM-yyyy');
             var daysformoblevalidation=document.getElementById('<%=hdndaysvalidatemobno.ClientID %>').value;
             if(form_name!="CorpClaim")
             {
                 if(daysformoblevalidation=="NaN"||daysformoblevalidation==undefined||daysformoblevalidation==null||daysformoblevalidation==""){daysformoblevalidation=0;}
                 var days = days_betwwen_dates(new Date(previoustrandt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                  if(days<=parseFloat(daysformoblevalidation))
                  {
                     $(".stoast").toastText("Info", "Please Verify Mobile No!.", 5, 2); 
                  }          
              }
           }
         }
                
       
       if (input.RECORD_STATUS != 'A' || input.PATIENT_STATUS == 'Cancel'||input.PATIENT_STATUS == 'In Active') { /* Inactivated Or Cancelled Validation Start */
                    if(input.PATIENT_STATUS == 'Cancel') /* cancel */
                    {
                        if(form_name=='OUTSTDNGDUE' || form_name=='Refund')
                        {
                             $(".stoast").toastText("Info", 'This UMR# Is Cancelled  Reason for '+ input.STATUS_REASON , 5, 3);
                        }
                        else
                        {
                            param='Cancel';
                            param=param+','+form_name;
                            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Cancelled  Reason for '+ input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                            return false;
                        }
                    }
                    else /* in-active */
                    {
                        param='In-Active';
                        param=param+','+form_name;
                        var Inactive_Reason=input.STATUS_REASON;
                        if(Inactive_Reason==undefined || Inactive_Reason==null)
                        {
                             Inactive_Reason='';
                        }
                        if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PREADVANCE')
                        {
                             $(".stoast").toastText("Info", "This UMR# Is In-Activated With Reason For "+Inactive_Reason+" ", 5, 3);
                        }
                        else
                        {
                            if(Inactive_Reason != ''){
                                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                                return false;
                            }
                            else{
                                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated  Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                                return false;
                            }
                        }
                    }
                    
                } /* Inactivated Or Cancelled Validation Ends */
                
        if (input.PATIENT_STATUS == 'Death') /* Expired Patient Validation Start */
        {
            if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PatientAccount'||form_name=="PREADVANCE" ||form_name=="OpBillAssesment"||form_name=="BillConvertion" )
            {

            $(".stoast").toastText("Info",'This Patient Is Expired',5,2); 
            }
            else
            {
                param='pat-expiry';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'Sorry,you cannot admit an expired patient');
                    return false;
            }
        }/* Expired Patient Validation Ends */
        

       if (input.PATIENT_STATUS == 'Blocked') { /* Blocked Patient Validation Start */
               if(form_name=='PREADVANCE')
               {
                 param='blocked';
                 param=param+','+form_name;
                 param=param+','+input.UMR_NO;
                 param=param+','+input.PATIENT_ID;
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is BLOCKED  With Reason '+input.STATUS_REASON +' so, Do You Want To Deposit Advance');
                 return false;
               }
               else if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC')
               {
               $(".stoast").toastText("Info",'This UMR# is BLOCKED With Reason '+input.STATUS_REASON  ,5,2);
               }
               else
               {
                param='blocked';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is BLOCKED With Reason '+input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                return false;
                }
       } /* Blocked Patient Validation End */


         
          document.getElementById('<%=hdnselfinves.ClientID %>').value=input.IS_SELF_INVESTIGATION;

              var hdnDateFormat = $('[id$=hdnDateFormat]').val();
            if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
            var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
             if(form_name!='CorpClaim'){
       if (input.PATIENT_STATUS == 'Merge') /* Merge Validations Start */
       {
            Is_mearged = 'Y';
            param='merged';
            param=param+','+form_name;
            param=param+','+input.MERGE_UMR_NO;
            param=param+','+input.MERGE_PATIENT_ID;
            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# ('+input.UMR_NO+' )  is MERGED to ' + input.MERGE_UMR_NO +' Do You Want To Continue With Merged UMR#'+input.MERGE_UMR_NO);
            return false;
       } /* Merge Validations End */
     }
      if (input.IS_REG_EXPIRY == 'Y') /* Registration Expiry Condition Start */
      {
       var is_renewal_required = document.getElementById('<%=hdnisrenewal.ClientID %>').value; 
       if(is_renewal_required=="Yes"){     
       var Allow_Reg_Expiry=document.getElementById('<%=hdnAlloweOP.ClientID %>').value;
        param='reg-expired';
        param=param+','+form_name;
        param=param+','+input.UMR_NO;
        param=param+','+input.PATIENT_ID;
         if(form_name=='PREADVANCE')
         {
            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# Registration Expired , Do You Want To Deposit Advance');
            return false;
         }
         else if (form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PatientAccount')
         {
         $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Renewal Again.",5,2);
         }
         else
         {
            if (Allow_Reg_Expiry == "False") 
            {
            param='reg-expired';
            param=param+','+form_name;
            param=param+','+input.UMR_NO;
            param=param+','+input.PATIENT_ID;
            ConfirmationRequiredForSaveWithParam_message(obj,param,'Patient Registration Validity is Over  So , Please Renewal Again.');
            return false;
            }
            else 
            {
            $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Renewal Again.",5,2);
            }
         }
       }
       else 
         {
         $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Contact Administration..!",5,2);
         return false;
         }
       }
        if(form_name=='PREADVANCE')
        {
            if(document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true){
                if (input.REF_STATUS == 'N') {
                            $(".stoast").toastText("Info", "Please Approve Deposit Refund Record Against to this Umr No..!", 5, 2);
                            return false;
                }
           }
        }

        $('#ptype-flag').removeClass();
        $('#ptype-flag').addClass('ptype-flag');
        /* Senior Citizon And Vip Validation Start */
        if(input.IS_SENIOR_CITIZEN == 'Y' && (input.IS_VIP.trim() == 'V' || input.IS_VIP.trim() == 'VV'))
        {
                var txt="";var clas="";
                if(input.IS_VIP.trim() == 'V'){ txt="VIP patient";clas="p-sc-vip";}else {txt="This is a VVIP patient!";clas="p-sc-vvip";}
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $(".stoast").toastText("Info",txt+"<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass(clas);

         }
        else
        {
                if (input.IS_SENIOR_CITIZEN == 'Y') {
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $('#ptype-flag').addClass("p-scitizen");
                }
                if (input.IS_VIP !=null && input.IS_VIP.trim() == 'V') {
                        $(".stoast").toastText("Info","This is a VIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vip");
                }
                if (input.IS_VIP && input.IS_VIP.trim() == 'VV') {
                        $(".stoast").toastText("Info","This is a VVIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vvip");
                }
        }/* Senior Citizon And Vip Validation End */

        
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnismlc').value = input.IS_MLC;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrecord_status').value = input.RECORD_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpatient_expiry').value = input.PATIENT_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_blocked').value = input.IS_BLOCKED;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_merge').value = input.IS_MERGE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_reg_expiry').value = input.IS_REG_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_senior_citizen').value = input.IS_SENIOR_CITIZEN;
                 document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnmerge_umr_no').value = input.MERGE_UMR_NO;
            var vip= input.IS_VIP;
            vip=vip==undefined?"":vip;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_vip').value = vip.trim();
                document.getElementById('<%=hdndschrgstatus.ClientID %>').value=input.DSCHRG_STATUS;


        if(input.IS_MLC=='Y')
        {
           $(".stoast").toastText("Info",'MLC Patient !',5,2);/*UnCommented By Pushkar Let me know before uncomment it*/
          
        }
        
        if(input.VALIDITY_EXPIRING_DAYS=='Y')
        {
        $(".stoast").toastText("Info",'This Patient Corporate Referal Letter Validity Is Expiring ...',5,2);
        }
        if(input.APMNT_ID1!='0' &&input.APMNT_ID1!=undefined && input.APMNT_ID1!='')
        {
            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "HISAPPT" ){
                //$(".stoast").toastText("Info","This Umr No " +input.UMR_NO+" Having An Appointment",5,2);
                 $(".stoast").toastText("Info","This Patient Has An Appointment(s)",5,2);
            }
        }
             if(input.DISCHRG_STATUS == 'Y'){
            var sp_name='PR_GETALL_PATIENT_DET_OPA';
       
            var parameters='';
          var parametervalues='';
            parameters = "IP_UMR_NO";
                 parametervalues =input.UMR_NO;
            
                GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters:parameters ,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
                 document.getElementById('<%=hdnadmntypeids.ClientID %>').value=jdata.d[0][0].ADMN_CASE_TYPE_ID;
    
        document.getElementById('<%=hdnadmnno.ClientID %>').value=jdata.d[0][0].ADMN_NO;
        document.getElementById('<%=hdnucadmnno.ClientID %>').value=jdata.d[0][0].ADMN_NO;
	    if((form_name=="Refund"||form_name=="POSTDSCNT"|| form_name == "OUTSTDNGDUE") && (jdata.d[0][0].ADMN_NO!=null || jdata.d[0][0].ADMN_NO!=""||jdata.d[0][0].ADMN_NO!=undefined)){ 
 	         var flag=form_name;
              if (flag == "OUTSTDNGDUE")
                flag = "OUTSTDNGDUE";
            else if (flag != ""&&flag!=null) flag = "IPF";

              if (input.UMR_NO != "")
              document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_ucAdmission_hdn_preCond').value=flag + "^^^" + jdata.d[0][0].UMR_NO;
              else
              document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_ucAdmission_hdn_preCond').value=flag + "^^^";


	    }


   
        if(jdata.d[0][0].PRE_ADMN_STATUS=='C')
        {
               $(".stoast").toastText("Info", "Pre Admission Has Been Cancelled For This Patient!!!", 5, 2); 
        }  
       if (jdata.d[0][0].ADMITTED_STATUS == 'Y'&& jdata.d[0][0].APPROVE_STATUS=="N") /* Admited Validation Starts */
       {
       var Allow_admn=document.getElementById('<%=hdnAlowAdmnToOP.ClientID %>').value;
       var Allow_multi_admn=document.getElementById('<%=hdnAlwmtplAdmn.ClientID %>').value;      
        var admnbedtls=jdata.d[0][0].ADMN_BED_DTLS;
        var casetype=jdata.d[0][0].ADMN_CASE_TYPE_NAME;
        var admnno=jdata.d[0][0].ADMN_NO;       
        if(admnbedtls==undefined||admnbedtls==null)
        {
        admnbedtls='';
        }
        var admn=admnno+"-"+'CaseType: '+ jdata.d[0][0].ADMN_CASE_TYPE_NAME+"-"+admnbedtls;
        param='admited';
        param=param+','+form_name;
        param=param+','+jdata.d[0][0].UMR_NO;
        param=param+','+jdata.d[0][0].PATIENT_ID;
       
        document.getElementById('<%=hdnNewAdmnID.ClientID %>').value=jdata.d[0][0].ADMN_ID; 
        document.getElementById('<%=hdnIsallowed.ClientID %>').value=jdata.d[0][0].IS_OP_TRN_ALLOWED;
          if (form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PREADVANCE' || form_name=='ADVTRAN'|| form_name=='PREAUTH')
          {
          $(".stoast").toastText("Info","This patient is ADMITED",5,2);
          }
          
          else
          {  
          var admndt=new Date(jdata.d[0][0].ADMN_DT).format(hdnDateFormat) + " " + new Date(jdata.d[0][0].ADMN_DT).format(hdnTimeFormat);
            if(form_name!='CREF' && form_name!='ESTBILL' && form_name!='ESTBILL' && form_name!='BillConvertion' && form_name!='CorpClaim'&&form_name!='PatientAccount'){
            if (jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_admn=='True')/* Admited Checking Based On Company Policy Setting */
            {
                param=param+','+Allow_multi_admn;
                 param=param+','+Allow_admn;
                  param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                 $('.icon-user-3').css('display', 'block')
                 $('.icons ul li')[11].style.display = 'block';
                 return false;
            }
            else if(jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_admn=="False")/* Admited Checking Based On Company Policy Setting */
            {
           
                if(jdata.d[0][0].IS_OP_TRN_ALLOWED=='Y' )
                 {
                  param=param+','+Allow_multi_admn;
                 param=param+','+Allow_admn;
                  param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                  document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                   $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+' So, Op Transaction Not Allowed',5,2);
                 }
                else
                {
                  param=param+','+Allow_multi_admn;
                 param=param+','+Allow_admn;
                 param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
             $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'',5,2);
                // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                 return false;
                }
            }
           
          }
          


        }

       }/* Admited Validation Ends */
       

      if (form_name == 'ESTBILL')
      {
      var preAdmnID=jdata.d[0][0].PRE_ADMNID;var admitted_status=jdata.d[0][0].ADMITTED_STATUS;var admnNO=jdata.d[0][0].ADMN_NO;
      if(preAdmnID==''||preAdmnID==null||preAdmnID==undefined){preAdmnID=0;}
      if(admnNO==''||admnNO==null||admnNO==undefined){admnNO=0;}
      if(admitted_status==''||admitted_status==null||admitted_status==undefined){admitted_status='';}
      if(parseInt(preAdmnID)==0&&admitted_status==''){
      $(".stoast").toastText("Info","Only Pre Admitted/Admitted Patients Are Allowed.!",5,2);
      return false;
      }
     else{
     if(admnNO!=''){
     $('#'+ ctrlcom + '_hdnAdmnNO').val(admnNO);

     }
     else if(parseInt(preAdmnID)>0){
     $('#'+ ctrlcom + '_hdnPreAdmnID').val(preAdmnID);
     var pID= getParameterByName('PREADMN_ID');
     if(pID==''||pID==undefined||pID==null){pID='';}
     if(pID==''){
     AssignPreAdmnDtls();
     
     }
     }

     }
      }

               document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnonbed_status').value = jdata.d[0][0].ONBED_STATUS;
       
       }
       }, function () {
    });

            }
         
         if(form_name=="PREADVANCE" || form_name=="OUTSTDNGDUE" || form_name== "Refund"|| form_name=="OUTSTDNGDUE" || form_name=="POSTDSCNT" || form_name=="BillConvertion"  ){

         
     var sp_name='PR_GETALL_PATIENT_AMOUNT_DET';
       
            var parameters='';
          var parametervalues='';
            parameters = "IP_UMR_NO";
                 parametervalues =input.UMR_NO;
            
                GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters:parameters ,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
         document.getElementById('<%=hdntotalAdv.ClientID %>').value=jdata.d[0][0].TOTAL_ADVANCE_AMT;
        document.getElementById('<%=hdnutilizeAmt.ClientID %>').value=jdata.d[0][0].UTILIZED_AMOUNT;
        document.getElementById('<%=hdnbalanceAmt.ClientID %>').value=jdata.d[0][0].BALANCE_AMOUNT;
         if(form_name=="PREADVANCE"){
            $('#'+ ctrlcom + '_txttotaladvance').val(jdata.d[0][0].TOTAL_ADVANCE_AMT);
            $('#'+ ctrlcom + '_txtUtilizeAmt').val(jdata.d[0][0].UTILIZED_AMOUNT);
            $('#'+ ctrlcom + '_txtBalanceAmt').val(jdata.d[0][0].BALANCE_AMOUNT);  
//                    if(document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true){
//                        if (jdata.d[0][0].REF_STATUS == 'N') {
//                            $(".stoast").toastText("Info", "Please Approve Deposit Refund Record Against to this Umr No..!", 5, 2);
//                            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value='';
//                              document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
//                              ClearPatientBanerControl();
//                            return false;
//                        }
//                        }
            if (document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true) {
                 $('#'+ ctrlcom + '_ReceiptControl2_txtreqamtkyd').val(jdata.d[0][0].BALANCE_AMOUNT);
                 $('#'+ ctrlcom + '_txtRefundableAmt').val(jdata.d[0][0].BALANCE_AMOUNT);
                 document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value=jdata.d[0][0].BALANCE_AMOUNT;

            }
        }
         if(jdata.d[0][0].FUND_BALANCE_AMOUNT!="" && jdata.d[0][0].FUND_BALANCE_AMOUNT!=null && jdata.d[0][0].FUND_BALANCE_AMOUNT!=undefined)
         {
           $(".stoast").toastText("Info", "This Patient Has Fund", 3, 2);
         }

        if (parseFloat(jdata.d[0][0].OUTSTANDING_DUE) > 0) {
         if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + jdata.d[0][0].UMR_NO + ' Having Due Amount Of <i class="icon-rupee"></i>' + jdata.d[0][0].OUTSTANDING_DUE ,5,2);
        }
        else{
        $(".stoast").toastText("Info",'This UMR# ' + jdata.d[0][0].UMR_NO + ' Having Due Amount Of <i class="icon-dollar"></i>' + jdata.d[0][0].OUTSTANDING_DUE ,5,2);
        }
        }
        if (parseFloat(jdata.d[0][0].REFUND) > 0) {
        if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + jdata.d[0][0].UMR_NO + ' Having Refundable Amount Of <i class="icon-rupee"></i>' + jdata.d[0][0].REFUND ,5,2);
        }
        else{
         $(".stoast").toastText("Info",'This UMR# ' + jdata.d[0][0].UMR_NO + ' Having Refundable Amount Of <i class="icon-dollar"></i>' + jdata.d[0][0].REFUND ,5,2);
        }
        }
        
        var fdays;
        if(parseFloat(jdata.d[0][0].EXPIRING_AMT)>0) /* Expiring Amount Validation Start */
        {
        var sedt = jdata.d[0][0].EXPIRY_DT;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                 //   if (res == "d1>d2") {
                    var days = days_betwwen_dates(new Date().format('dd-MMM-yyyy'), new Date(jdata.d[0][0].EXPIRY_DT).format('dd-MMM-yyyy'));
                    fdays=days;
            if(days>0){
                if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + jdata.d[0][0].EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire within ' + days + ' Days..',5,2);
                    }
                    else{
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + jdata.d[0][0].EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire within ' + days + ' Days..',5,2);
                    }
                     document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = days + "Days";
                }
                else{
                    if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + jdata.d[0][0].EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire Today..',5,2);
                    }
                    else{
                     $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + jdata.d[0][0].EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire Today..',5,2);
                    }
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = "Today";
                } 

           // }
        }/* Expiring Amount Validation Ends */
        if(parseFloat(jdata.d[0][0].PRE_ADVANCE_AMOUNT)>0)
        {
        if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-rupee"></i>'+jdata.d[0][0].PRE_ADVANCE_AMOUNT ,5,2);
        }
        else{
         $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-dollar"></i>'+jdata.d[0][0].PRE_ADVANCE_AMOUNT ,5,2);
        }
        }
        
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnoutstanding_due').value = jdata.d[0][0].OUTSTANDING_DUE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrefund').value = jdata.d[0][0].REFUND;
              if(form_name == "POSTDSCNT"){
            document.getElementById('' + ctrlcom + '_hdnAdvance').value= jdata.d[0][0].PRE_ADVANCE_AMOUNT;
            }
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpreadvance').value = jdata.d[0][0].PRE_ADVANCE_AMOUNT;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpamt').value = jdata.d[0][0].EXPIRING_AMT;
 }, function () {
    });



       
           }
                       
            if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PREAUTH" && document.getElementById('<%=hdnDocName.ClientID %>').value != "BillConvertion" ) { /* TRANSACTION SAVING XML GENERATION UMR_NO ASSIGN */
            var Name = document.getElementById('<%=hdnDocName.ClientID %>').value;
            switch (Name) {
                case "OPCNCL":
                    break;
                case "DI":
                    break;
                case "POSTDSCNT":
                    break;
                case "IP CREDIT LIMIT":
                    break;
                case "MLC":
                    break;
                case "PDoc":
                    break;
                case "CREF":
                    break;
                case "ConsTransfer":
                    break;
                case "OPPKGBILL":
                    break;
                case "FeedBack Form":
                    break;
                case "OpBillAssesment":
                    break;
                case "AssesmentMerge":
                    break;
                case "ER":
                    break;
                case "HCSUMRY":
                    break;
                case "HCFEEDBK":
                    break;
                case "PASSPORTDETAILS":
                    break;
                case "PATIENT COMPONENT":
                    break;
                    case "DIALYSIS BOOKING":
                    break;
                    
                case "PATIENTDAILIZERMAPPING":
                    break;
                case "DIALLABIND":
                    break;
                case "DIAREND":
                    break;
                case "DIALSERIND":
                    break;
                case "ADVTRAN":
                    break;
                case "TO_ADVTRAN":
                    break;
                case "CorpClaim":
                    break;
                case "HISAPPT":
                    break;
                case "RefLetterValidity":
                    break;
                case "OrderedVerification":
                    break;
                case "ESTBILL":
                break;
                case "PreAssessmentBills":
                break;
                default:
                if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO')!=null)
                {
                    if (document.getElementById('<%=hdnDocName.ClientID %>').value != "Passport" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PatientAccount")
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = input.UMR_NO;
                    }
                    break;
            }
        }
       var PatientID = input.PATIENT_ID;
       var _umr_no = input.UMR_NO;
       
   
          if(form_name == 'PREAUTH')
         {
         clearallinsfields();
         if(input.PRE_ADMNID!=""||input.PRE_ADMNID!=undefined||input.PRE_ADMNID!=null)
                {
                 preadmnid = input.PRE_ADMNID;
                 GetNonAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_Pre_AdmissionDetails",
                { PADMNID: preadmnid },
                function (data) {
                var result = $.parseJSON(data.d[0][0]);
                
                if(result.length>0)
                {
                     document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = result[0].PRE_ADMN_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = result[0].ADMN_NO;
                    BindPatientDetails(PatientID,_umr_no);
                    }
                    else{
                    $(".stoast").toastText("Info", "Pre Admission Not Done.", 5, 2);
                    return false;
                    }
                   }
                 )};
                    
         }
        else
        {
            BindPatientDetails(PatientID,_umr_no);
        
           /* if(document.getElementById('' + ctrlcom + '_chkLinkIP').checked == true)
            {
            BindPatientBedDetails(document.getElementById('' + ctrlcom + '_ucParentIP__hiddenText').value);
            }
            else
            { */
            BindPatientBedDetails(_umr_no);
           // }
        }
      if(form_name == 'CorpClaim')
       {
           BindBills();
           BillDetails();
           DisplayAmount.style.display = 'block';
       }
      if(form_name == "MULTIPLEBILLS")
        {
            BindBillsclaim();
        }
        if(form_name == "ADMN")
        {
            onExtendedDisplayValues();
        }

  } 

    function Patient_Valdationsforip(input)
    {
   
        var hdnDashBoardUmr=$('[id*=hdnDashBoardUmr]').val();
        if(hdnDashBoardUmr==''||hdnDashBoardUmr==null||hdnDashBoardUmr==undefined){
        hdnDashBoardUmr='';
        }
        if(hdnDashBoardUmr!=''){
        document.getElementById('<%=Umrlookup.ClientID %>').disabled=true;
        document.getElementById('<%=ucAdmission.ClientID %>').disabled=true;
        document.getElementById('imgbtnNewReg').disabled=true;
        }
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
       // document.getElementById('<%=hdnoldregtpaid.ClientID %>').value=input.REG_CMP_ID;
        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;

        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;
        document.getElementById('<%=hdndschrgstatus.ClientID %>').value=input.DSCHRG_STATUS;
     
        

        var param;
        var obj;
        
        

       
         
          if( document.getElementById('<%=hdnVerifymonileno.ClientID %>').value=="Y"){
           if(input.LAST_TRAN_DT!="")
           {
             var previoustrandt=new Date(input.LAST_TRAN_DT).format('dd-MMM-yyyy')
             currDt = new Date().format('dd-MMM-yyyy');
             var daysformoblevalidation=document.getElementById('<%=hdndaysvalidatemobno.ClientID %>').value;
             if(form_name!="CorpClaim")
             {
                 if(daysformoblevalidation=="NaN"||daysformoblevalidation==undefined||daysformoblevalidation==null||daysformoblevalidation==""){daysformoblevalidation=0;}
                 var days = days_betwwen_dates(new Date(previoustrandt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                  if(days<=parseFloat(daysformoblevalidation))
                  {
                     $(".stoast").toastText("Info", "Please Verify Mobile No!.", 5, 2); 
                  }          
              }
           }
         }
           
         
         if(input.FUND_BALANCE_AMOUNT!="" && input.FUND_BALANCE_AMOUNT!=null && input.FUND_BALANCE_AMOUNT!=undefined)
         {
           $(".stoast").toastText("Info", "This Patient Has Fund", 3, 2);
         }
         if(form_name=="ADMN" || form_name=="ER"){
          $('[id*=hdnpatcatid]').val(input.FOREIGN_CATEGORY_ID);
          $('[id*=hdntariffid]').val(input.TARIFF_NAME);
          }
        if(form_name=="ADMN"){
             if(input.PGS_NOTE !="" && input.PGS_NOTE !=null && input.PGS_NOTE !=undefined){
              $(".stoast").toastText("Info", "Previous Clinical Notes : "+input.PGS_NOTE, 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS=="P"){
                $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Pending State..", 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS=="A"){
                $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Approved State..", 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS=="R"){
                $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Rejected State..", 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS !='' && input.PRE_AUTH_REQ_STATUS != "A"){
                $(".stoast").toastText("Info", "Advance Amount Should Be Collected From Patient", 3, 2);
             }
              $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptAdmnID').val(input.ADMN_ID); 
       }
       if (input.RECORD_STATUS != 'A' || input.PATIENT_STATUS == 'Cancel'||input.PATIENT_STATUS == 'In Active') { /* Inactivated Or Cancelled Validation Start */
                    if(input.PATIENT_STATUS == 'Cancel') /* cancel */
                    {
                       
                            param='Cancel';
                            param=param+','+form_name;
                            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Cancelled  Reason for '+ input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                            return false;
                       
                    }
                    else /* in-active */
                    {
                        param='In-Active';
                        param=param+','+form_name;
                        var Inactive_Reason=input.STATUS_REASON;
                        if(Inactive_Reason==undefined || Inactive_Reason==null)
                        {
                             Inactive_Reason='';
                        }
                       
                            if(Inactive_Reason != ''){
                                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                                return false;
                            }
                            else{
                                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated  Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                                return false;
                            }
                        
                    }
                    
                } /* Inactivated Or Cancelled Validation Ends */
                
        if (input.PATIENT_STATUS == 'Death') /* Expired Patient Validation Start */
        {
        
                param='pat-expiry';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'Sorry,you cannot admit an expired patient');
                    return false;
            
        }/* Expired Patient Validation Ends */
        

       if (input.PATIENT_STATUS == 'Blocked') { /* Blocked Patient Validation Start */
              
                param='blocked';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is BLOCKED With Reason '+input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                return false;
               
       } /* Blocked Patient Validation End */


       var PRE_ADMN_STATUS='';
       var PRE_ADMNID='';
       var ADMISSION_REQUISITION_ID='';
        if(input.DISCHRG_STATUS == 'Y'){
            var sp_name='PR_GETALL_PATIENT_DET_OPA';
   
            var parameters='';
         var parametervalues='';
         parameters = "IP_UMR_NO";
         parametervalues =input.UMR_NO;
         GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
        { parameters:parameters ,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null && jdata.d[0].length>0) {
             
            PRE_ADMN_STATUS=jdata.d[0][0].PRE_ADMN_STATUS;
            PRE_ADMNID=jdata.d[0][0].PRE_ADMNID;
            ADMISSION_REQUISITION_ID=jdata.d[0][0].ADMISSION_REQUISITION_ID;
            document.getElementById('<%=hdnucadmnno.ClientID %>').value=jdata.d[0][0].ADMN_NO;
            document.getElementById('<%=hdnselfinves.ClientID %>').value=jdata.d[0][0].IS_SELF_INVESTIGATION;
               document.getElementById('<%=hdnadmntypeids.ClientID %>').value=jdata.d[0][0].ADMN_CASE_TYPE_ID;
              var hdnDateFormat = $('[id$=hdnDateFormat]').val();
            if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
            var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
            if (jdata.d[0][0].ADMITTED_STATUS == 'Y'&& jdata.d[0][0].APPROVE_STATUS=="N") /* Admited Validation Starts */
            {
               var Allow_admn=document.getElementById('<%=hdnAlowAdmnToOP.ClientID %>').value;
               var Allow_multi_admn=document.getElementById('<%=hdnAlwmtplAdmn.ClientID %>').value;      
                var admnbedtls=jdata.d[0][0].ADMN_BED_DTLS;
                var casetype=jdata.d[0][0].ADMN_CASE_TYPE_NAME;
                var admnno=jdata.d[0][0].ADMN_NO;       
                if(admnbedtls==undefined||admnbedtls==null)
                {
                admnbedtls='';
                }
                var admn=admnno+"-"+'CaseType: '+ jdata.d[0][0].ADMN_CASE_TYPE_NAME+"-"+admnbedtls;
                param='admited';
                param=param+','+form_name;
                param=param+','+jdata.d[0][0].UMR_NO;
                param=param+','+jdata.d[0][0].PATIENT_ID;
                document.getElementById('<%=hdnadmnno.ClientID %>').value=jdata.d[0][0].ADMN_NO;
                document.getElementById('<%=hdnNewAdmnID.ClientID %>').value=jdata.d[0][0].ADMN_ID; 
                document.getElementById('<%=hdnIsallowed.ClientID %>').value=jdata.d[0][0].IS_OP_TRN_ALLOWED;
                if(jdata.d[0][0].PRE_ADMN_STATUS=='C')
                {
                       $(".stoast").toastText("Info", "Pre Admission Has Been Cancelled For This Patient!!!", 5, 2); 
                }       
                if(form_name=="ADMN"){
                    if(jdata.d[0][0].DISCHARGE_VACENT_STATUS =="Y"){
                         $(".stoast").toastText("Info","This Patient Is Discharged But Bed Is Not Vacant. Please Vacant Bed!", 3, 2);
                        return false;
                    }
                }
                if(form_name=='ADMN')
                {
                   var admndt1=new Date(jdata.d[0][0].ADMN_DT).format(hdnDateFormat) + " " + new Date(jdata.d[0][0].ADMN_DT).format(hdnTimeFormat);
                  if(jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_multi_admn=="Y")
                  {
                         param=param+','+Allow_multi_admn;
                         param=param+','+Allow_admn;
                         param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                         ConfirmationRequiredForSaveWithParam_message(obj,param,'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt1+'" Admn#'+ admn+'' );
                        return false;
                  }
                  else if(jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_multi_admn=="N")
                  {
                      param=param+','+Allow_multi_admn;
                         param=param+','+Allow_admn;
                         param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                        $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt1+'" Admn#'+ admn+'',5,2);
                        // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                         return false;
                  }
              }
              else if(form_name=="ER"){ 
                document.getElementById('' + ctrlcom + '_hdnPatientid').value = input.PATIENT_ID;
                if(jdata.d[0][0].ADMITTED_STATUS=='Y'){ 
                    var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
                    var hdnDateFormat = $('[id$=hdnDateFormat]').val();
                    if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
                    if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
                   var Admn_dt=new Date(jdata.d[0][0].ADMN_DT).format(hdnDateFormat) + " " + new Date(jdata.d[0][0].ADMN_DT).format(hdnTimeFormat);
                   var completeBedInfo=jdata.d[0][0].BED_NAME+"/"+jdata.d[0][0].ROOM_NAME+"/"+jdata.d[0][0].WARD_NAME;
                   var msg='This Patient Is Already Admited On Bed "'+ completeBedInfo +'" With Admn#:"'+jdata.d[0][0].ADMN_NO+'"& Admission Date:'+ Admn_dt+'';
                      $(".stoast").toastText("Info",msg, 5, 2);
                      document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value='';
                      document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                      Clearpopup();
                      ClearPatientBanerControl();
                     return false;
                 }
            }
          else
          {  
            var admndt=new Date(jdata.d[0][0].ADMN_DT).format(hdnDateFormat) + " " + new Date(jdata.d[0][0].ADMN_DT).format(hdnTimeFormat);
            if(form_name!='CREF' && form_name!='ESTBILL' && form_name!='ESTBILL' && form_name!='BillConvertion' && form_name!='CorpClaim'&&form_name!='PatientAccount'){
                if (jdata.d[0][0].ADMITTED_STATUS == 'Y' && Allow_admn=='True')/* Admited Checking Based On Company Policy Setting */
                {
                    param=param+','+Allow_multi_admn;
                     param=param+','+Allow_admn;
                      param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                    ConfirmationRequiredForSaveWithParam_message(obj,param,'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                     $('.icon-user-3').css('display', 'block')
                     $('.icons ul li')[11].style.display = 'block';
                     return false;
                }
                else if(input.ADMITTED_STATUS == 'Y' && Allow_admn=="False")/* Admited Checking Based On Company Policy Setting */
                {
           
                    if(input.IS_OP_TRN_ALLOWED=='Y' )
                     {
                      param=param+','+Allow_multi_admn;
                     param=param+','+Allow_admn;
                      param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                      document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                       $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+' So, Op Transaction Not Allowed',5,2);
                     }
                    else
                    {
                      param=param+','+Allow_multi_admn;
                     param=param+','+Allow_admn;
                     param=param+','+jdata.d[0][0].IS_OP_TRN_ALLOWED;
                 $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ jdata.d[0][0].BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'',5,2);
                    // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                     return false;
                    }
                }
           }
        }

       }/* Admited Validation Ends */
       }
       }, function () {
    });
     return false;
   }
      if (input.IS_REG_EXPIRY == 'Y') /* Registration Expiry Condition Start */
      {
       var is_renewal_required = document.getElementById('<%=hdnisrenewal.ClientID %>').value; 
       if(is_renewal_required=="Yes"){     
       var Allow_Reg_Expiry=document.getElementById('<%=hdnAlloweOP.ClientID %>').value;
        param='reg-expired';
        param=param+','+form_name;
        param=param+','+input.UMR_NO;
        param=param+','+input.PATIENT_ID;
         
        
            if (Allow_Reg_Expiry == "False") 
            {
            param='reg-expired';
            param=param+','+form_name;
            param=param+','+input.UMR_NO;
            param=param+','+input.PATIENT_ID;
            ConfirmationRequiredForSaveWithParam_message(obj,param,'Patient Registration Validity is Over  So , Please Renewal Again.');
            return false;
            }
            else 
            {
            $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Renewal Again.",5,2);
            }
         
       }
       else 
         {
         $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Contact Administration..!",5,2);
         return false;
         }
       } /* Registration Expiry Condition Ends */
      
        $('#ptype-flag').removeClass();
        $('#ptype-flag').addClass('ptype-flag');
        /* Senior Citizon And Vip Validation Start */
        if(input.IS_SENIOR_CITIZEN == 'Y' && (input.IS_VIP.trim() == 'V' || input.IS_VIP.trim() == 'VV'))
        {
                var txt="";var clas="";
                if(input.IS_VIP.trim() == 'V'){ txt="VIP patient";clas="p-sc-vip";}else {txt="This is a VVIP patient!";clas="p-sc-vvip";}
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $(".stoast").toastText("Info",txt+"<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass(clas);

         }
        else
        {
                if (input.IS_SENIOR_CITIZEN == 'Y') {
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $('#ptype-flag').addClass("p-scitizen");
                }
                if (input.IS_VIP !=null && input.IS_VIP.trim() == 'V') {
                        $(".stoast").toastText("Info","This is a VIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vip");
                }
                if (input.IS_VIP && input.IS_VIP.trim() == 'VV') {
                        $(".stoast").toastText("Info","This is a VVIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vvip");
                }
        }/* Senior Citizon And Vip Validation End */
        if (parseFloat(input.OUTSTANDING_DUE) > 0) {
         if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-rupee"></i>' + input.OUTSTANDING_DUE ,5,2);
        }
        else{
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-dollar"></i>' + input.OUTSTANDING_DUE ,5,2);
        }
        }
        if (parseFloat(input.REFUND) > 0) {
        if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-rupee"></i>' + input.REFUND ,5,2);
        }
        else{
         $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-dollar"></i>' + input.REFUND ,5,2);
        }
        }
        
        var fdays;
        if(parseFloat(input.EXPIRING_AMT)>0) /* Expiring Amount Validation Start */
        {
        var sedt = input.EXPIRY_DT;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                 //   if (res == "d1>d2") {
                    var days = days_betwwen_dates(new Date().format('dd-MMM-yyyy'), new Date(input.EXPIRY_DT).format('dd-MMM-yyyy'));
                    fdays=days;
            if(days>0){
                if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire within ' + days + ' Days..',5,2);
                    }
                    else{
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire within ' + days + ' Days..',5,2);
                    }
                     document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = days + "Days";
                }
                else{
                    if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire Today..',5,2);
                    }
                    else{
                     $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire Today..',5,2);
                    }
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = "Today";
                } 

           // }
        }/* Expiring Amount Validation Ends */
        if(parseFloat(input.PRE_ADVANCE_AMOUNT)>0)
        {
        if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-rupee"></i>'+input.PRE_ADVANCE_AMOUNT ,5,2);
        }
        else{
         $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-dollar"></i>'+input.PRE_ADVANCE_AMOUNT ,5,2);
        }
        }
        if(input.IS_MLC=='Y')
        {
           $(".stoast").toastText("Info",'MLC Patient !',5,2);/*UnCommented By Pushkar Let me know before uncomment it*/
           if(document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN")
            {
            document.getElementById('' + ctrlcom + '_chkIsMLC').checked=true;
            }
        }
        if(input.VALIDITY_EXPIRING_DAYS=='Y')
        {
        $(".stoast").toastText("Info",'This Patient Corporate Referal Letter Validity Is Expiring ...',5,2);
        }
       


            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrecord_status').value = input.RECORD_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpatient_expiry').value = input.PATIENT_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_blocked').value = input.IS_BLOCKED;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnonbed_status').value = input.ONBED_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_merge').value = input.IS_MERGE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_reg_expiry').value = input.IS_REG_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_senior_citizen').value = input.IS_SENIOR_CITIZEN;
           
            var vip= input.IS_VIP;
            vip=vip==undefined?"":vip;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_vip').value = vip.trim();
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnoutstanding_due').value = input.OUTSTANDING_DUE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrefund').value = input.REFUND;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnmerge_umr_no').value = input.MERGE_UMR_NO;
             
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpreadvance').value = input.PRE_ADVANCE_AMOUNT;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnismlc').value = input.IS_MLC;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpamt').value = input.EXPIRING_AMT;
           
                       
            if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PREAUTH" && document.getElementById('<%=hdnDocName.ClientID %>').value != "BillConvertion" ) { /* TRANSACTION SAVING XML GENERATION UMR_NO ASSIGN */
            var Name = document.getElementById('<%=hdnDocName.ClientID %>').value;
            switch (Name) {
                case "OPCNCL":
                    break;
                case "DI":
                    break;
                case "POSTDSCNT":
                    break;
                case "IP CREDIT LIMIT":
                    break;
                case "MLC":
                    break;
                case "PDoc":
                    break;
                case "CREF":
                    break;
                case "ConsTransfer":
                    break;
                case "OPPKGBILL":
                    break;
                case "FeedBack Form":
                    break;
                case "OpBillAssesment":
                    break;
                case "AssesmentMerge":
                    break;
                case "ER":
                    break;
                case "HCSUMRY":
                    break;
                case "HCFEEDBK":
                    break;
                case "PASSPORTDETAILS":
                    break;
                case "PATIENT COMPONENT":
                    break;
                    case "DIALYSIS BOOKING":
                    break;
                    
                case "PATIENTDAILIZERMAPPING":
                    break;
                case "DIALLABIND":
                    break;
                case "DIAREND":
                    break;
                case "DIALSERIND":
                    break;
                case "ADVTRAN":
                    break;
                case "TO_ADVTRAN":
                    break;
                case "CorpClaim":
                    break;
                case "HISAPPT":
                    break;
                case "RefLetterValidity":
                    break;
                case "OrderedVerification":
                    break;
                case "ESTBILL":
                break;
                case "PreAssessmentBills":
                break;
                default:
                if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO')!=null)
                {
                    if (document.getElementById('<%=hdnDocName.ClientID %>').value != "Passport" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PatientAccount")
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = input.UMR_NO;
                    }
                    break;
            }
        }
       var PatientID = input.PATIENT_ID;
       var _umr_no = input.UMR_NO;
       
       if (form_name == 'ADMN')
         {
         var QryType = document.getElementById('' + ctrlcom + '_hdnQryType').value;
            if(input.PRE_ADMNID > "0" && input.PRE_ADMN_STATUS!="C")
            {
                if(QryType == "Pre")
                {
                 $(".stoast").toastText("warning", "Preadmission Done For This Patient!", 5, 3);
                 return false;
                }
                else if(input.PRE_ADMNID!=""||input.PRE_ADMNID!=undefined||input.PRE_ADMNID!=null)
                {
                 preadmnid = input.PRE_ADMNID
                 GetAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_Pre_AdmissionDetails",
                { PADMNID: preadmnid },
                function (data) {
                    var result = $.parseJSON(data.d[0]);
                    document.getElementById('<%=hdnUmrNo.ClientID %>').value = result[0].UMR_NO;
                    document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
                    document.getElementById('<%=hdnReg_id.ClientID %>').value = result[0].REGISTRATION_ID;//in admission saving time,reg_id taking from this hidden variable so i assigned this one also....@Ali
                    document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
                    document.getElementById('<%=hdnPatientid.ClientID %>').value = result[0].PATIENT_ID;
                    document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = result[0].PRE_ADMN_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(result[0].PRE_ADMN_DT).format('dd-MMM-yyyy');
                    document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = result[0].PRE_ADMN_ID;
                    document.getElementById('<%=hdnBillNo.ClientID %>').value = result[0].BILL_NO;
                     document.getElementById('ctl00_hdnDMSUmrNo').value=result[0].UMR_NO;
                    document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
//                    if(input==undefined)
//                    {
//                        document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(result[0].PRE_ADMN_DT).format('dd-MMM-yyyy');
//                        document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = result[0].PRE_ADMN_ID;
//                    }
//                    else
//                    {
//                    document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(input["ADMN_DT"]).format('dd-MMM-yyyy');
//                    document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = input["_lktext"];
//                    }
                    PreAdmnPatDetails(data, 'PRE');
                });
                }
                else
                {
                Patdetailsassign(input.PRE_ADMNID);
                }
            }
            else
            {
            
              if(input.ADMISSION_REQUISITION_ID > 0)
              {
                 AssignRequestDetails(PatientID,ADMISSION_REQUISITION_ID);
              }
             
                   BindPatientDetails(PatientID,_umr_no);
                  document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
            }
                
            /* AssignSurgeryDetails(_umr_no);*/
         }
      
        else
        {
        BindPatientDetails(PatientID,_umr_no);
        
           /* if(document.getElementById('' + ctrlcom + '_chkLinkIP').checked == true)
            {
            BindPatientBedDetails(document.getElementById('' + ctrlcom + '_ucParentIP__hiddenText').value);
            }
            else
            { */
            BindPatientBedDetails(_umr_no);
           // }
        }
      

  } 


   
   function Patient_Valdations(input)
  {
   
        var hdnDashBoardUmr=$('[id*=hdnDashBoardUmr]').val();
        if(hdnDashBoardUmr==''||hdnDashBoardUmr==null||hdnDashBoardUmr==undefined){
        hdnDashBoardUmr='';
        }
        if(hdnDashBoardUmr!=''){
        document.getElementById('<%=Umrlookup.ClientID %>').disabled=true;
        document.getElementById('<%=ucAdmission.ClientID %>').disabled=true;
        document.getElementById('imgbtnNewReg').disabled=true;
        }
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        document.getElementById('<%=hdnoldregtpaid.ClientID %>').value=input.REG_CMP_ID;
        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;
        document.getElementById('<%=hdnfrgncatgryid.ClientID %>').value=input.TARIFF_ID;
        document.getElementById('<%=hdndocreqstatus.ClientID %>').value=input.DOC_STATUS;
        document.getElementById('<%=hdnstopcons.ClientID %>').value=input.STOP_CONS;
        document.getElementById('<%=hdndocholdstatus.ClientID %>').value=input.DOC_HOL_STATUS;
        document.getElementById('<%=hdnapmntfromdt.ClientID %>').value=input.FROM_DATE;
        document.getElementById('<%=hdnapmnttodt.ClientID %>').value=input.TO_DATE;
        document.getElementById('<%=hdnregexpdt.ClientID %>').value=input.REG_EXPIRY_DATE;
        document.getElementById('<%=hdnadmntypeids.ClientID %>').value=input.ADMN_CASE_TYPE_ID;
        document.getElementById('<%=hdndschrgstatus.ClientID %>').value=input.DSCHRG_STATUS;
        document.getElementById('<%=hdnadmnno.ClientID %>').value=input.ADMN_NO;
        document.getElementById('<%=hdntotalAdv.ClientID %>').value=input.TOTAL_ADVANCE_AMT;
        document.getElementById('<%=hdnutilizeAmt.ClientID %>').value=input.UTILIZED_AMOUNT;
        document.getElementById('<%=hdnbalanceAmt.ClientID %>').value=input.BALANCE_AMOUNT;
        

	    if((form_name=="Refund"||form_name=="POSTDSCNT"|| form_name == "OUTSTDNGDUE") && (input.ADMN_NO!=null || input.ADMN_NO!=""||input.ADMN_NO!=undefined)){ 
 	         var flag=form_name;
              if (flag == "OUTSTDNGDUE")
                flag = "OUTSTDNGDUE";
            else if (flag != ""&&flag!=null) flag = "IPF";

              if (input.UMR_NO != "")
              document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_ucAdmission_hdn_preCond').value=flag + "^^^" + input.UMR_NO;
              else
              document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_ucAdmission_hdn_preCond').value=flag + "^^^";
	    }
        var param;
        var obj;
        if(input.PRE_ADMN_STATUS=='C')
        {
               $(".stoast").toastText("Info", "Pre Admission Has Been Cancelled For This Patient!!!", 5, 2); 
        }       
         if(form_name=="ADMN"){
               if(input.DISCHARGE_VACENT_STATUS =="Y"){
                  $(".stoast").toastText("Info","This Patient Is Discharged But Bed Is Not Vacant. Please Vacant Bed!", 3, 2);
                 return false;
             }
         }
         if(form_name=="ESTBILL"){
               if(input.ESTBILL_STATUS =="N"){
                  $(".stoast").toastText("Info","Please Approve The Previous Estimation Bill!", 3, 2);
                 return false;
             }
         }
         if(form_name=="ESTBILL"){
         if(input.ESTBILL_STATUS =="Y"){
         
            }
         }
         /*if(form_name=="OpBillAssesment"){
             if(input.ASSESSMENT_STATUS =="N"){
                $(".stoast").toastText("Info","Please approve the previous Assessment Bill!", 5, 3);
                return false;
             }

         }*/

          if(form_name=="AssesmentMerge"){
             if(input.ASSESSMENT_STATUS !=""){
                $(".stoast").toastText("Info",input.ASSESSMENT_STATUS+" are not scheduled", 5, 3);
             }
         }

         if(form_name=="ER"){ 
             document.getElementById('' + ctrlcom + '_hdnPatientid').value = input.PATIENT_ID;
               if(input.ADMITTED_STATUS=='Y'){ 
            var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
            var hdnDateFormat = $('[id$=hdnDateFormat]').val();
            if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
               var Admn_dt=new Date(input.ADMN_DT).format(hdnDateFormat) + " " + new Date(input.ADMN_DT).format(hdnTimeFormat);
               var completeBedInfo=input.BED_NAME+"/"+input.ROOM_NAME+"/"+input.WARD_NAME;
               var msg='This Patient Is Already Admited On Bed "'+ completeBedInfo +'" With Admn#:"'+input.ADMN_NO+'"& Admission Date:'+ Admn_dt+'';
                  $(".stoast").toastText("Info",msg, 5, 2);
                  document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value='';
                  document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                  Clearpopup();
                  ClearPatientBanerControl();
                 return false;
             }
         }
         if(form_name=="PREADVANCE"){
            $('#'+ ctrlcom + '_txttotaladvance').val(input.TOTAL_ADVANCE_AMT);
            $('#'+ ctrlcom + '_txtUtilizeAmt').val(input.UTILIZED_AMOUNT);
            $('#'+ ctrlcom + '_txtBalanceAmt').val(input.BALANCE_AMOUNT);  
            if(document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true){
                if (input.REF_STATUS == 'N') {
                    $(".stoast").toastText("Info", "Please Approve Deposit Refund Record Against to this Umr No..!", 5, 2);
                      document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value='';
                  document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').focus();
                  Clearpopup();
                  ClearPatientBanerControl();
                    return false;
                }
            }
            if (document.getElementById('' + ctrlcom + '_chkAdvRefund').checked == true) {
                 $('#'+ ctrlcom + '_ReceiptControl2_txtreqamtkyd').val(input.BALANCE_AMOUNT);
                 $('#'+ ctrlcom + '_txtRefundableAmt').val(input.BALANCE_AMOUNT);
                 document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnDueAmt').value=input.BALANCE_AMOUNT;
            }
        }
          if( document.getElementById('<%=hdnVerifymonileno.ClientID %>').value=="Y"){
           if(input.LAST_TRAN_DT!="")
           {
             var previoustrandt=new Date(input.LAST_TRAN_DT).format('dd-MMM-yyyy')
             currDt = new Date().format('dd-MMM-yyyy');
             var daysformoblevalidation=document.getElementById('<%=hdndaysvalidatemobno.ClientID %>').value;
             if(form_name!="CorpClaim")
             {
                 if(daysformoblevalidation=="NaN"||daysformoblevalidation==undefined||daysformoblevalidation==null||daysformoblevalidation==""){daysformoblevalidation=0;}
                 var days = days_betwwen_dates(new Date(previoustrandt).format('dd-MMM-yyyy'), new Date().format('dd-MMM-yyyy'));
                  if(days<=parseFloat(daysformoblevalidation))
                  {
                     $(".stoast").toastText("Info", "Please Verify Mobile No!.", 5, 2); 
                  }          
              }
           }
         }
           if((form_name=="OP" || form_name=="Cons") && ($('[id*=hdnallowtariffslcn]').val().toLowerCase()=='true'))/*Tariff selection Concept*/
           {
            $(".stoast").toastText("Info", "This patient having patient category", 3, 2);
             if ($('[id*=hbnisshowpatcatagery]').val().toUpperCase() == "YES") {
           $('.allowMTariff').show();
           }
           else{   $('.allowMTariff').show();
    $('#'+ ctrlcom + '_UCServices_ddlpatcat').prop('disabled',true);
    $('#'+ ctrlcom + '_UCServices_ddltariff').prop('disabled',true);
           }
           /*---------------By Default patient category*/
         /*  $('#'+ ctrlcom + '_UCServices_ddlpatcat').val(input.FOREIGN_CATEGORY_ID);
           $('[id*=hdnforeigncatid]').val(input.FOREIGN_CATEGORY_ID);*/

            /*---------------By Default Location Default category*/
            /*Patient category purpose*/
             // document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML=input.FOREIGN_CATEGORY_NAME;
            if(input.FOREIGN_CATEGORY_ID=="" ||input.FOREIGN_CATEGORY_ID== undefined||input.FOREIGN_CATEGORY_ID== 'undefined'){
            var setpatcat = $('[id*=hdnpatcatpolicy]').val(); //company policis
            var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
           
            if (setpatcat == '' || setpatcat == null || setpatcat == undefined || setpatcat == 'undefined') setpatcat = 0;
           $('#'+ ctrlcom + '_UCServices_ddlpatcat').val(setpatcat);
           $('[id*=hdnforeigncatid]').val(setpatcat);
           }else{
            $('#'+ ctrlcom + '_UCServices_ddlpatcat').val(input.FOREIGN_CATEGORY_ID);
           $('[id*=hdnforeigncatid]').val(input.FOREIGN_CATEGORY_ID);
           
           }
           ChangeTarifByPatcat();
           document.getElementById('' + ctrlcom + '_UCServices_ddltariff').selectedIndex=1;
           }
         
         if(input.FUND_BALANCE_AMOUNT!="" && input.FUND_BALANCE_AMOUNT!=null && input.FUND_BALANCE_AMOUNT!=undefined)
         {
           $(".stoast").toastText("Info", "This Patient Has Fund", 3, 2);
         }
         if(form_name=="ADMN" || form_name=="ER"){
          $('[id*=hdnpatcatid]').val(input.FOREIGN_CATEGORY_ID);
          $('[id*=hdntariffid]').val(input.TARIFF_NAME);
          }
        if(form_name=="ADMN"){
             if(input.PGS_NOTE !="" && input.PGS_NOTE !=null && input.PGS_NOTE !=undefined){
              $(".stoast").toastText("Info", "Previous Clinical Notes : "+input.PGS_NOTE, 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS=="P"){
                $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Pending State..", 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS=="A"){
                $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Approved State..", 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS=="R"){
                $(".stoast").toastText("Info", "This Patient Pre Authorization Status is in Rejected State..", 3, 2);
             }
             if(input.PRE_AUTH_REQ_STATUS !='' && input.PRE_AUTH_REQ_STATUS != "A"){
                $(".stoast").toastText("Info", "Advance Amount Should Be Collected From Patient", 3, 2);
             }
              $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptAdmnID').val(input.ADMN_ID); 
       }
       if (input.RECORD_STATUS != 'A' || input.PATIENT_STATUS == 'Cancel'||input.PATIENT_STATUS == 'In Active') { /* Inactivated Or Cancelled Validation Start */
                    if(input.PATIENT_STATUS == 'Cancel') /* cancel */
                    {
                        if(form_name=='OUTSTDNGDUE' || form_name=='Refund')
                        {
                             $(".stoast").toastText("Info", 'This UMR# Is Cancelled  Reason for '+ input.STATUS_REASON , 5, 3);
                        }
                        else
                        {
                            param='Cancel';
                            param=param+','+form_name;
                            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Cancelled  Reason for '+ input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                            return false;
                        }
                    }
                    else /* in-active */
                    {
                        param='In-Active';
                        param=param+','+form_name;
                        var Inactive_Reason=input.STATUS_REASON;
                        if(Inactive_Reason==undefined || Inactive_Reason==null)
                        {
                             Inactive_Reason='';
                        }
                        if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PREADVANCE')
                        {
                             $(".stoast").toastText("Info", "This UMR# Is In-Activated With Reason For "+Inactive_Reason+" ", 5, 3);
                        }
                        else
                        {
                            if(Inactive_Reason != ''){
                                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                                return false;
                            }
                            else{
                                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is Inactivated  Reason for '+ Inactive_Reason +' so, You Cannot Do Any Transactions');
                                return false;
                            }
                        }
                    }
                    
                } /* Inactivated Or Cancelled Validation Ends */
                
        if (input.PATIENT_STATUS == 'Death') /* Expired Patient Validation Start */
        {
            if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PatientAccount'||form_name=="PREADVANCE" ||form_name=="OpBillAssesment"||form_name=="BillConvertion" )
            {

            $(".stoast").toastText("Info",'This Patient Is Expired',5,2); 
            }
            else
            {
                param='pat-expiry';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'Sorry,you cannot admit an expired patient');
                    return false;
            }
        }/* Expired Patient Validation Ends */
        
//        if (input.PATIENT_STATUS == 'In Active') /* In-Active Patient Validation Start */
//        {
//            param='In-Active';
//                    param=param+','+form_name;
//                    var Inactive_Reason=input.STATUS_REASON;
//                        if(Inactive_Reason==undefined || Inactive_Reason==null)
//                        {
//                        Inactive_Reason='';
//                        }
//                        if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PREADVANCE')
//                        {
//                        $(".stoast").toastText("Info", "This Umr_no Is In-Activated With Reason For "+Inactive_Reason+" ", 5, 3);
//                        }
//                        else
//                        {
//                            if(Inactive_Reason != ''){
//                            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
//                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR_NO is inactivated Reason for '+ Inactive_Reason +' so, You cannot do any transactions');
//                                return false;
//                            }
//                            else{
//                            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
//                                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR_NO is inactivated so, You cannot do any transactions');
//                                return false;
//                            }
//                        }
//        }
       if (input.PATIENT_STATUS == 'Blocked') { /* Blocked Patient Validation Start */
               if(form_name=='PREADVANCE')
               {
                 param='blocked';
                 param=param+','+form_name;
                 param=param+','+input.UMR_NO;
                 param=param+','+input.PATIENT_ID;
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is BLOCKED  With Reason '+input.STATUS_REASON +' so, Do You Want To Deposit Advance');
                 return false;
               }
               else if(form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC')
               {
               $(".stoast").toastText("Info",'This UMR# is BLOCKED With Reason '+input.STATUS_REASON  ,5,2);
               }
               else
               {
                param='blocked';
                param=param+','+form_name;
                document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# is BLOCKED With Reason '+input.STATUS_REASON +' so, You Cannot Do Any Transactions');
                return false;
                }
       } /* Blocked Patient Validation End */
         document.getElementById('<%=hdnucadmnno.ClientID %>').value=input.ADMN_NO;
          document.getElementById('<%=hdnselfinves.ClientID %>').value=input.IS_SELF_INVESTIGATION;

              var hdnDateFormat = $('[id$=hdnDateFormat]').val();
            if (hdnDateFormat == undefined || hdnDateFormat == null || hdnDateFormat == "") { hdnDateFormat = "dd-MMM-yyyy"; }
            var hdnTimeFormat = $('[id$=hdnTimeFormat]').val();
            if (hdnTimeFormat == undefined || hdnTimeFormat == null || hdnTimeFormat == "") { hdnTimeFormat = "HH:mm:ss"; }
       if (input.ADMITTED_STATUS == 'Y'&& input.APPROVE_STATUS=="N") /* Admited Validation Starts */
       {
       var Allow_admn=document.getElementById('<%=hdnAlowAdmnToOP.ClientID %>').value;
       var Allow_multi_admn=document.getElementById('<%=hdnAlwmtplAdmn.ClientID %>').value;      
        var admnbedtls=input.ADMN_BED_DTLS;
        var casetype=input.ADMN_CASE_TYPE_NAME;
        var admnno=input.ADMN_NO;       
        if(admnbedtls==undefined||admnbedtls==null)
        {
        admnbedtls='';
        }
        var admn=admnno+"-"+'CaseType: '+ input.ADMN_CASE_TYPE_NAME+"-"+admnbedtls;
        param='admited';
        param=param+','+form_name;
        param=param+','+input.UMR_NO;
        param=param+','+input.PATIENT_ID;
       
        document.getElementById('<%=hdnNewAdmnID.ClientID %>').value=input.ADMN_ID; 
        document.getElementById('<%=hdnIsallowed.ClientID %>').value=input.IS_OP_TRN_ALLOWED;
          if (form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PREADVANCE' || form_name=='ADVTRAN'|| form_name=='PREAUTH')
          {
          $(".stoast").toastText("Info","This patient is ADMITED",5,2);
          }
          else if(form_name=='ADMN')
          {
               var admndt1=new Date(input.ADMN_DT).format(hdnDateFormat) + " " + new Date(input.ADMN_DT).format(hdnTimeFormat);
              if(input.ADMITTED_STATUS == 'Y' && Allow_multi_admn=="Y")
              {
                     param=param+','+Allow_multi_admn;
                     param=param+','+Allow_admn;
                     param=param+','+input.IS_OP_TRN_ALLOWED;
                     ConfirmationRequiredForSaveWithParam_message(obj,param,'This Patient Is Already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt1+'" Admn#'+ admn+'' );
                    return false;
              }
              else if(input.ADMITTED_STATUS == 'Y' && Allow_multi_admn=="N")
              {
                  param=param+','+Allow_multi_admn;
                     param=param+','+Allow_admn;
                     param=param+','+input.IS_OP_TRN_ALLOWED;
                    $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt1+'" Admn#'+ admn+'',5,2);
                    // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                     return false;
              }
          }
          else
          {  
          var admndt=new Date(input.ADMN_DT).format(hdnDateFormat) + " " + new Date(input.ADMN_DT).format(hdnTimeFormat);
            if(form_name!='CREF' && form_name!='ESTBILL' && form_name!='ESTBILL' && form_name!='BillConvertion' && form_name!='CorpClaim'&&form_name!='PatientAccount'){
            if (input.ADMITTED_STATUS == 'Y' && Allow_admn=='True')/* Admited Checking Based On Company Policy Setting */
            {
                param=param+','+Allow_multi_admn;
                 param=param+','+Allow_admn;
                  param=param+','+input.IS_OP_TRN_ALLOWED;
                ConfirmationRequiredForSaveWithParam_message(obj,param,'This Patient Is Already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                 $('.icon-user-3').css('display', 'block')
                 $('.icons ul li')[11].style.display = 'block';
                 return false;
            }
            else if(input.ADMITTED_STATUS == 'Y' && Allow_admn=="False")/* Admited Checking Based On Company Policy Setting */
            {
           
                if(input.IS_OP_TRN_ALLOWED=='Y' )
                 {
                  param=param+','+Allow_multi_admn;
                 param=param+','+Allow_admn;
                  param=param+','+input.IS_OP_TRN_ALLOWED;
                  document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
                   $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+' So, Op Transaction Not Allowed',5,2);
                 }
                else
                {
                  param=param+','+Allow_multi_admn;
                 param=param+','+Allow_admn;
                 param=param+','+input.IS_OP_TRN_ALLOWED;
             $(".stoast").toastText("Info",'This Patient Is Already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'',5,2);
                // ConfirmationRequiredForSaveWithParam_message(obj,param,'This patient is already Admited On This Bed "'+ input.BED_NAME +'"& Admited Dt:"'+admndt+'" Admn#'+ admn+'' );
                 return false;
                }
            }
           
          }
          


        }

       }/* Admited Validation Ends */
        if(form_name!='CorpClaim'){
       if (input.PATIENT_STATUS == 'Merge') /* Merge Validations Start */
       {
            Is_mearged = 'Y';
            param='merged';
            param=param+','+form_name;
            param=param+','+input.MERGE_UMR_NO;
            param=param+','+input.MERGE_PATIENT_ID;
            document.getElementById('<%=hdnValidationFailed.ClientID %>').value='Y';
            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# ('+input.UMR_NO+' )  is MERGED to ' + input.MERGE_UMR_NO +' Do You Want To Continue With Merged UMR#'+input.MERGE_UMR_NO);
            return false;
       } /* Merge Validations End */
     }
      if (input.IS_REG_EXPIRY == 'Y') /* Registration Expiry Condition Start */
      {
       var is_renewal_required = document.getElementById('<%=hdnisrenewal.ClientID %>').value; 
       if(is_renewal_required=="Yes"){     
       var Allow_Reg_Expiry=document.getElementById('<%=hdnAlloweOP.ClientID %>').value;
        param='reg-expired';
        param=param+','+form_name;
        param=param+','+input.UMR_NO;
        param=param+','+input.PATIENT_ID;
         if(form_name=='PREADVANCE')
         {
            ConfirmationRequiredForSaveWithParam_message(obj,param,'This UMR# Registration Expired , Do You Want To Deposit Advance');
            return false;
         }
         else if (form_name=='OUTSTDNGDUE'||form_name=='OPCNCL' ||form_name=='Refund' ||form_name=='POSTDSCNT'||form_name=='OPPKGBILL' || form_name=='MLC' || form_name=='PatientAccount')
         {
         $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Renewal Again.",5,2);
         }
         else
         {
            if (Allow_Reg_Expiry == "False") 
            {
            param='reg-expired';
            param=param+','+form_name;
            param=param+','+input.UMR_NO;
            param=param+','+input.PATIENT_ID;
            ConfirmationRequiredForSaveWithParam_message(obj,param,'Patient Registration Validity is Over  So , Please Renewal Again.');
            return false;
            }
            else 
            {
            $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Renewal Again.",5,2);
            }
         }
       }
       else 
         {
         $(".stoast").toastText("Info","Patient Registration Validity is Over  So , Please Contact Administration..!",5,2);
         return false;
         }
       } /* Registration Expiry Condition Ends */
       /* Osp Patient Condition Starts */
    /*  if (input.IS_OSP.trim() == 'Y') 
      {
        param='OSP';
        param=param+','+form_name;
        if(form_name=='OPCNCL')
        {
         $(".stoast").toastText("Info","OSP Patient.",5,2);
        }
        else
        {
        ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP patient cannot do op Transactions');
        return false;
        } 
      }*/
      /* Osp Patient Condition Ends */

      if (form_name == 'ESTBILL')
      {
      var preAdmnID=input.PRE_ADMNID;var admitted_status=input.ADMITTED_STATUS;var admnNO=input.ADMN_NO;
      if(preAdmnID==''||preAdmnID==null||preAdmnID==undefined){preAdmnID=0;}
      if(admnNO==''||admnNO==null||admnNO==undefined){admnNO=0;}
      if(admitted_status==''||admitted_status==null||admitted_status==undefined){admitted_status='';}
      if(parseInt(preAdmnID)==0&&admitted_status==''){
      $(".stoast").toastText("Info","Only Pre Admitted/Admitted Patients Are Allowed.!",5,2);
      return false;
      }
     else{
     if(admnNO!=''){
     $('#'+ ctrlcom + '_hdnAdmnNO').val(admnNO);

     }
     else if(parseInt(preAdmnID)>0){
     $('#'+ ctrlcom + '_hdnPreAdmnID').val(preAdmnID);
     var pID= getParameterByName('PREADMN_ID');
     if(pID==''||pID==undefined||pID==null){pID='';}
     if(pID==''){
     AssignPreAdmnDtls();
     
     }
     }

     }
      }



        $('#ptype-flag').removeClass();
        $('#ptype-flag').addClass('ptype-flag');
        /* Senior Citizon And Vip Validation Start */
        if(input.IS_SENIOR_CITIZEN == 'Y' && (input.IS_VIP.trim() == 'V' || input.IS_VIP.trim() == 'VV'))
        {
                var txt="";var clas="";
                if(input.IS_VIP.trim() == 'V'){ txt="VIP patient";clas="p-sc-vip";}else {txt="This is a VVIP patient!";clas="p-sc-vvip";}
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $(".stoast").toastText("Info",txt+"<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass(clas);

         }
        else
        {
                if (input.IS_SENIOR_CITIZEN == 'Y') {
                        $(".stoast").toastText("Info","SENIOR CITIZEN patient",5,2);
                        $(".alertprompt").css('background-color','#a0e458');
                        $('#ptype-flag').addClass("p-scitizen");
                }
                if (input.IS_VIP !=null && input.IS_VIP.trim() == 'V') {
                        $(".stoast").toastText("Info","This is a VIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vip");
                }
                if (input.IS_VIP && input.IS_VIP.trim() == 'VV') {
                        $(".stoast").toastText("Info","This is a VVIP patient!<br>Source:"+input.VIP_SOURCE_NAME+"<br>Remarks:"+input.VIP_NOTE+"",5,2);
                        $(".alertprompt").css('background-color','#FC8107');
                        $('#ptype-flag').addClass("p-vvip");
                }
        }/* Senior Citizon And Vip Validation End */
        if (parseFloat(input.OUTSTANDING_DUE) > 0) {
         if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-rupee"></i>' + input.OUTSTANDING_DUE ,5,2);
        }
        else{
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Due Amount Of <i class="icon-dollar"></i>' + input.OUTSTANDING_DUE ,5,2);
        }
        }
        if (parseFloat(input.REFUND) > 0) {
        if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-rupee"></i>' + input.REFUND ,5,2);
        }
        else{
         $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Refundable Amount Of <i class="icon-dollar"></i>' + input.REFUND ,5,2);
        }
        }
        
        var fdays;
        if(parseFloat(input.EXPIRING_AMT)>0) /* Expiring Amount Validation Start */
        {
        var sedt = input.EXPIRY_DT;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                 //   if (res == "d1>d2") {
                    var days = days_betwwen_dates(new Date().format('dd-MMM-yyyy'), new Date(input.EXPIRY_DT).format('dd-MMM-yyyy'));
                    fdays=days;
            if(days>0){
                if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" || document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire within ' + days + ' Days..',5,2);
                    }
                    else{
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire within ' + days + ' Days..',5,2);
                    }
                     document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = days + "Days";
                }
                else{
                    if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
                    $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-rupee"></i>  Expire Today..',5,2);
                    }
                    else{
                     $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Fund Amount Of ' + input.EXPIRING_AMT + '<i class="icon-dollar"></i>  Expire Today..',5,2);
                    }
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpdays').value = "Today";
                } 

           // }
        }/* Expiring Amount Validation Ends */
        if(parseFloat(input.PRE_ADVANCE_AMOUNT)>0)
        {
        if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INDIAN RUPEE" ||document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnbasecurrancy').value == "INR"){
        $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-rupee"></i>'+input.PRE_ADVANCE_AMOUNT ,5,2);
        }
        else{
         $(".stoast").toastText("Info",'This UMR# ' + input.UMR_NO + ' Having Pre Advance Amount <i class="icon-dollar"></i>'+input.PRE_ADVANCE_AMOUNT ,5,2);
        }
        }
        if(input.IS_MLC=='Y')
        {
           $(".stoast").toastText("Info",'MLC Patient !',5,2);/*UnCommented By Pushkar Let me know before uncomment it*/
           if(document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN")
            {
            document.getElementById('' + ctrlcom + '_chkIsMLC').checked=true;
            }
        }
        if(input.VALIDITY_EXPIRING_DAYS=='Y')
        {
        $(".stoast").toastText("Info",'This Patient Corporate Referal Letter Validity Is Expiring ...',5,2);
        }
        if(input.APMNT_ID1!='0' &&input.APMNT_ID1!=undefined && input.APMNT_ID1!='')
        {
            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "HISAPPT" || document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
                //$(".stoast").toastText("Info","This Umr No " +input.UMR_NO+" Having An Appointment",5,2);
                 $(".stoast").toastText("Info","This Patient Has An Appointment(s)",5,2);
            }
        }


            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrecord_status').value = input.RECORD_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpatient_expiry').value = input.PATIENT_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_blocked').value = input.IS_BLOCKED;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnonbed_status').value = input.ONBED_STATUS;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_merge').value = input.IS_MERGE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_reg_expiry').value = input.IS_REG_EXPIRY;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_senior_citizen').value = input.IS_SENIOR_CITIZEN;
            if(form_name == "POSTDSCNT"){
            document.getElementById('' + ctrlcom + '_hdnAdvance').value= input.PRE_ADVANCE_AMOUNT;
            }
            var vip= input.IS_VIP;
            vip=vip==undefined?"":vip;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnis_vip').value = vip.trim();
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnoutstanding_due').value = input.OUTSTANDING_DUE;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnrefund').value = input.REFUND;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnmerge_umr_no').value = input.MERGE_UMR_NO;
             
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnpreadvance').value = input.PRE_ADVANCE_AMOUNT;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnismlc').value = input.IS_MLC;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnfundexpamt').value = input.EXPIRING_AMT;
           
                       
            if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PREAUTH" && document.getElementById('<%=hdnDocName.ClientID %>').value != "BillConvertion" ) { /* TRANSACTION SAVING XML GENERATION UMR_NO ASSIGN */
            var Name = document.getElementById('<%=hdnDocName.ClientID %>').value;
            switch (Name) {
                case "OPCNCL":
                    break;
                case "DI":
                    break;
                case "POSTDSCNT":
                    break;
                case "IP CREDIT LIMIT":
                    break;
                case "MLC":
                    break;
                case "PDoc":
                    break;
                case "CREF":
                    break;
                case "ConsTransfer":
                    break;
                case "OPPKGBILL":
                    break;
                case "FeedBack Form":
                    break;
                case "OpBillAssesment":
                    break;
                case "AssesmentMerge":
                    break;
                case "ER":
                    break;
                case "HCSUMRY":
                    break;
                case "HCFEEDBK":
                    break;
                case "PASSPORTDETAILS":
                    break;
                case "PATIENT COMPONENT":
                    break;
                    case "DIALYSIS BOOKING":
                    break;
                    
                case "PATIENTDAILIZERMAPPING":
                    break;
                case "DIALLABIND":
                    break;
                case "DIAREND":
                    break;
                case "DIALSERIND":
                    break;
                case "ADVTRAN":
                    break;
                case "TO_ADVTRAN":
                    break;
                case "CorpClaim":
                    break;
                case "HISAPPT":
                    break;
                case "RefLetterValidity":
                    break;
                case "OrderedVerification":
                    break;
                case "ESTBILL":
                break;
                case "PreAssessmentBills":
                break;
                default:
                if(document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO')!=null)
                {
                    if (document.getElementById('<%=hdnDocName.ClientID %>').value != "Passport" && document.getElementById('<%=hdnDocName.ClientID %>').value != "PatientAccount")
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = input.UMR_NO;
                    }
                    break;
            }
        }
       var PatientID = input.PATIENT_ID;
       var _umr_no = input.UMR_NO;
       
       if (form_name == 'ADMN')
         {
         var QryType = document.getElementById('' + ctrlcom + '_hdnQryType').value;
            if(input.PRE_ADMNID > "0" && input.PRE_ADMN_STATUS!="C")
            {
                if(QryType == "Pre")
                {
                 $(".stoast").toastText("warning", "Preadmission Done For This Patient!", 5, 3);
                 return false;
                }
                else if(input.PRE_ADMNID!=""||input.PRE_ADMNID!=undefined||input.PRE_ADMNID!=null)
                {
                 preadmnid = input.PRE_ADMNID
                 GetAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_Pre_AdmissionDetails",
                { PADMNID: preadmnid },
                function (data) {
                    var result = $.parseJSON(data.d[0]);
                    document.getElementById('<%=hdnUmrNo.ClientID %>').value = result[0].UMR_NO;
                    document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
                    document.getElementById('<%=hdnReg_id.ClientID %>').value = result[0].REGISTRATION_ID;//in admission saving time,reg_id taking from this hidden variable so i assigned this one also....@Ali
                    document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
                    document.getElementById('<%=hdnPatientid.ClientID %>').value = result[0].PATIENT_ID;
                    document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = result[0].PRE_ADMN_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(result[0].PRE_ADMN_DT).format('dd-MMM-yyyy');
                    document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = result[0].PRE_ADMN_ID;
                    document.getElementById('<%=hdnBillNo.ClientID %>').value = result[0].BILL_NO;
                     document.getElementById('ctl00_hdnDMSUmrNo').value=result[0].UMR_NO;
                    document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
//                    if(input==undefined)
//                    {
//                        document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(result[0].PRE_ADMN_DT).format('dd-MMM-yyyy');
//                        document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = result[0].PRE_ADMN_ID;
//                    }
//                    else
//                    {
//                    document.getElementById('' + ctrlcom + '_hidPreAdmDt').value = new Date(input["ADMN_DT"]).format('dd-MMM-yyyy');
//                    document.getElementById('' + ctrlcom + '_hidPreAdmNo').value = input["_lktext"];
//                    }
                    PreAdmnPatDetails(data, 'PRE');
                });
                }
                else
                {
                Patdetailsassign(input.PRE_ADMNID);
                }
            }
            else
            {
            
              if(input.ADMISSION_REQUISITION_ID > 0)
              {
                 AssignRequestDetails(PatientID, input.ADMISSION_REQUISITION_ID);
              }
             
                   BindPatientDetails(PatientID,_umr_no);
                  document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
            }
                if(input.REG_CMP_ID > "0" ){
                AdmissionAdmnCorpDetils(input);
                }
            /* AssignSurgeryDetails(_umr_no);*/
         }
         else if(form_name == 'PREAUTH')
         {
         clearallinsfields();
         if(input.PRE_ADMNID!=""||input.PRE_ADMNID!=undefined||input.PRE_ADMNID!=null)
                {
                 preadmnid = input.PRE_ADMNID;
                 GetNonAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_Pre_AdmissionDetails",
                { PADMNID: preadmnid },
                function (data) {
                var result = $.parseJSON(data.d[0][0]);
                
                if(result.length>0)
                {
                     document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = result[0].ADMN_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = result[0].PRE_ADMN_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = result[0].ADMN_NO;
                    BindPatientDetails(PatientID,_umr_no);
                    }
                    else{
                    $(".stoast").toastText("Info", "Pre Admission Not Done.", 5, 2);
                    return false;
                    }
                   }
                 )};
                    
         }
        else
        {
        BindPatientDetails(PatientID,_umr_no);
        
           /* if(document.getElementById('' + ctrlcom + '_chkLinkIP').checked == true)
            {
            BindPatientBedDetails(document.getElementById('' + ctrlcom + '_ucParentIP__hiddenText').value);
            }
            else
            { */
            BindPatientBedDetails(_umr_no);
           // }
        }
      if(form_name == 'CorpClaim')
       {
           BindBills();
           BillDetails();
           DisplayAmount.style.display = 'block';
       }
      if(form_name == "MULTIPLEBILLS")
        {
            BindBillsclaim();
        }
        if(form_name == "ADMN")
        {
            onExtendedDisplayValues();
        }

  }
    
    function BindPatientBedDetails(_umr_no){
    if (document.getElementById('<%=hdnflag.ClientID %>').value == "ADMN" ){
     GetAsync(
                    "PatientRegistration.asmx/Get_Patient_BedInfo_Details",
                    { _umr_no: _umr_no },
                    function (result) {
                     
                          if(document.getElementById('' + ctrlcom + '_chkLinkIP').checked == false){
                                OnPatBedSuccess(result);
                              }
                                else{
                                LinkIPSelect(result);
                                LinkMotherBed();
                              }
                           
                        },
                    function (jqXHR, textStatus, errorThrown) {
                    });
                    }
        return false;
    }
    function OnPatBedSuccess(result){
      if (result.d[0] != null && result.d[0]!= "") {
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_ucBed_txtSearchControl').value=result.d[0].BED_NAME;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_ucBed__hiddenText').value=result.d[0].BED_NAME;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_ucBed__hiddenID').value=result.d[0].BED_ID;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnBedId').value=result.d[0].BED_ID;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_txtRoom').value=result.d[0].ROOM_NAME;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_txtRoom').disabled=true;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnRoom').value=result.d[0].ROOM_ID;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_txtWard').value=result.d[0].WARD_NAME;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_txtWard').disabled=true;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnWard').value=result.d[0].WARD_ID;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_Ucward_txtSearchControl').value=result.d[0].TREATED_WARD;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_Ucward__hiddenText').value=result.d[0].TREATED_WARD;
      document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnTreatedWard').value=result.d[0].TREATED_WARD_ID;
      document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnreservebedid').value=result.d[0].BED_ID;
       var bedStatus = result.d[0].BED_STATUS_ID;
       var bedPostStatus = result.d[0].BED_POST_STATUS_ID;
    if ((bedStatus == '6' && bedPostStatus == '3')) {
        $(".stoast").toastText("warning", "Selected Bed is not Vecated,Please Select Another Bed", 5, 3);
        /*alert('Selected Bed is not Vecated,Please Select Another Bed');*/
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_ucBed_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_ucBed_txtSearchControl').focus();
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnBedId').value = '';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_txtRoom').value = '';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnRoom').value = '';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_txtWard').value ='';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnWard').value = '';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_Ucward_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnTreatedWard').value = '';
        return false;

    }
         }
         return false;
    }
     function OnRefundPatientInfoSuccess(result)
    {
    
     document.getElementById('<%=lblPatName.ClientID %>').innerHTML = result[0].DISPLAY_NAME;
           
            document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UmrNo;
            $('#'+ ctrlcom + '_ucUMRno__hiddnID').val(result[0].PATIENT_ID);
            $('#'+ ctrlcom + '_ucUMRno__hiddenText').val(result[0].UmrNo);
            document.getElementById('<%=lblgender.ClientID %>').innerHTML = result[0].GENDER;
            document.getElementById('<%=lblagedob.ClientID %>').innerHTML = result[0].DISPLAY_AGE + "/" + new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = result[0].OCCUPATION;
            document.getElementById('<%=lblmothername.ClientID %>').innerHTML = result[0].MOTHER_MAIDEN_NAME;
            document.getElementById('<%=lblpattype.ClientID %>').innerHTML = result[0].REG_PATIENT_TYPE_NAME;
            document.getElementById('<%=lblcmpname.ClientID %>').innerHTML = result[0].COMPANY_NAME;
            if (result[0].RELATION_SHIP_NAME == 'Self') {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = 'Self';
            }
            else {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = result[0].RELATION_SHIP_NAME;
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = result[0].RES_PERSON_NAME;
            }
            document.getElementById('<%=lblrefdoc.ClientID %>').innerHTML = result[0].CONSULTANT;
            document.getElementById('<%=hdnGenderID.ClientID %>').value = result[0].GENDER_ID;
    }

        var healthcarddatafordoctorbind = new Array();
        
        function bindhealthcaeddoctor() {/*Consultation setting Reg.Doctor Required in Consultation and Billing */
            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons" || document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
                var hdnRegDoctorReq = $('#<%=hdnRegDoctorRequired.ClientID %>').val();
                if (hdnRegDoctorReq == "True") {
                    var RegDoctorDays = $('#<%=hdnRegShowDocDays.ClientID %>').val();
                    var RegDt = healthcarddatafordoctorbind.REGISTRATION_DT;
                    var NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    if (NoofDays > RegDoctorDays) {
                    }
                    else {
                        AssignConsultantDoctor(healthcarddatafordoctorbind.DOCTOR_ID, healthcarddatafordoctorbind.CONSULTANT, healthcarddatafordoctorbind.CONSULTANT_CD, healthcarddatafordoctorbind.DEPARTMENT_ID, healthcarddatafordoctorbind.DEPARTMENT_NAME);
                    }
                }
            }
            else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
                if (document.getElementById('' + ctrlcom + '_hdnView').value == 'VIEW_OP') {
                   AssignConsultantDoctor(healthcarddatafordoctorbind.DOCTOR_ID, healthcarddatafordoctorbind.CONSULTANT, healthcarddatafordoctorbind.CONSULTANT_CD, healthcarddatafordoctorbind.DEPARTMENT_ID, healthcarddatafordoctorbind.DEPARTMENT_NAME);
                }
                if (document.getElementById('' + ctrlcom + '_hdnView').value != 'VIEW_OP') {
                    var IsRegReq = $('#<%=hdnIsRegDtlsReq.ClientID %>').val(); /*Registration Details Required in Transaction Forms*/
                    var RegReferalDays = $('#<%=hdnRegRefDays.ClientID %>').val();
                    if (IsRegReq == "Yes") {
                        var NoofDays = 0;
                        var RegDt = healthcarddatafordoctorbind.REGISTRATION_DT;
                        if (RegDt == '' || RegDt == undefined || RegDt == "") {
                            NoofDays = 0;
                        }
                        else {
                            NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        }
                        if (NoofDays <= RegReferalDays) {
                            AssignConsultantDoctor(healthcarddatafordoctorbind.DOCTOR_ID, healthcarddatafordoctorbind.CONSULTANT, healthcarddatafordoctorbind.CONSULTANT_CD, healthcarddatafordoctorbind.DEPARTMENT_ID, healthcarddatafordoctorbind.DEPARTMENT_NAME);
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = '0';
                             SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));
                        }
                    }
                }

//                 var hdnRegDoctorReq = document.getElementById('' + ctrlcom + '_hdnRegDoctorRequired');
//                if (hdnRegDoctorReq.value == "True") {
//                    var RegDoctorDays = document.getElementById('' + ctrlcom + '_hdnRegShowDocDays').value;
//                    var RegDt = healthcarddatafordoctorbind.REGISTRATION_DT;
//                    var NoofDays = 0;
//                    if (RegDt == '' || RegDt == undefined || RegDt == "") {
//                        NoofDays = 0;
//                    }
//                    NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
//                    if (NoofDays > RegDoctorDays) {
//                        $('#' + ctrlcom + '_UcOdrPsyn_txtSearchControl').val('');
//                        $('#' + ctrlcom + '_UcOdrPsyn__hiddenText').val('');
//                        $('#' + ctrlcom + '_UcOdrPsyn__hiddenID').val('');
//                    }
//                    else {
//                        AssignConsultantDoctor(healthcarddatafordoctorbind.DOCTOR_ID, healthcarddatafordoctorbind.CONSULTANT, healthcarddatafordoctorbind.CONSULTANT_CD, healthcarddatafordoctorbind.DEPARTMENT_ID, healthcarddatafordoctorbind.DEPARTMENT_NAME);
//                    }
//                }
            }
        }
        
        function healthcardlookup(dataSource) {
            var gridCols = [];
            for (var key in dataSource[0]) {
                if (key != 'recid' && key != 'STATUS' && key != 'TOT_RECORD_CNT' && key != 'DISPLAY_ID' && key != 'SERIAL_NO' && key != 'HEALTH_CARD_ID'&& key != 'CNCSN_RULE_ID'&& key != 'HEALTH_CARD_DET_ID' && key != 'HEALTH_CARD_TYPE_ID' ) {
                    gridCols.push(
            { field: key, caption: key.replace("_", " "), size: '125px', sortable: false, resizable: true, arrow: false, searchable: 'text' }
          );
                }
            }
            $('#divhealthcardlist').w2grid({
                name: 'divhealthcardlist',
                columns: gridCols,
                show: {
                    toolbar: true,
                    footer: true,
                    selectColumn: false,
                    toolbarReload: false,
                    onReload: false,
                    toolbar: true,
                    lineNumbers: true

                },
                records: dataSource,
                onClick: function (ev) {
                    var columnno = ev.column;
                    var loop = 0;
                    var items = $.grep(dataSource, function (obje, ind) {
                        if (obje.recid == ev.recid) {

                            if (dataSource[loop].HEALTH_CARD_TYPE_ID > 0) {
                                $(".stoast").toastText("Info", "This Patient Has Health Card!", 7, 2);
                                $('[id*=lblHcardDisplay]').css('display', 'block');

                                if (dataSource[loop].ELIGIBILITY_AMOUNT == 0) {
                                    $(".stoast").toastText("Info", "Health Card Has Zero Eligible Amount!", 7, 2);
                                }

                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardid').value = dataSource[loop].HEALTH_CARD_TYPE_ID;
                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardno').value = dataSource[loop].HEALTH_CARD_NO;
                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblhcno').innerHTML = dataSource[loop].HEALTH_CARD_NO;
                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value = dataSource[loop].CNCSN_RULE_ID;
                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value = dataSource[loop].ELIGIBILITY_AMOUNT;
                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value = dataSource[loop].HEALTH_CARD_DET_ID;
                                document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value = dataSource[loop].HEALTH_CARD_ID;
                                if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons" || document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
                                    bindhealthcaeddoctor();
                                }
                            }
                            else {
                                $('[id*=lblHcardDisplay]').css('display', 'none');

                            }

                            $('[id*=healthcardlist]')[0].style.display = "none";

                            return false;
                        }
                        loop++;
                    });
                }

            });

        }
        function Closehealthcard() {
            $('[id*=healthcardlist]')[0].style.display = "none";
        }

        function healthcarddetails()
        {
            var health_card_id = document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value;
            if (health_card_id == "" || health_card_id == null || health_card_id == undefined || isNaN(health_card_id)) { health_card_id = 0; }
           
            if (parseFloat(health_card_id) > 0) {
                healthcarddetailschecking();
            }
            else {
                $(".stoast").toastText('Info', "There Is No Healthcard for this Patient.", 2, 2);
            }
     }

function healthcarddetailschecking() {
    var gridHCControl;
    var umr_no = '';
    var hdnTimeFormat = $('[id*=hdnTimeFormat]').val();
    var hdnDateFormat = $('[id*=hdnDateFormat]').val();
    if (hdnDateFormat == undefined || hdnDateFormat == "" || hdnDateFormat == null) { hdnDateFormat = "dd-MMM-yyyy"; }
    umr_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value;
      
    var PatientID = $('[id*=hdnOptPatientid]').val();
    var param_HC = param_HC || {};
    param_HC.dataKey = "HEALTH_CARD_ID";
    param_HC.pageSize = 10;
    param_HC.pageNum = 1;
    param_HC.defaultWSParams = { umr_no: umr_no };
    param_HC.wsPath = "Private/FrontOffice/OpBilling/OpBillClientSide.aspx/BindHealthCards";
    param_HC.wsFilterPath = "Private/FrontOffice/OpBilling/OpBillClientSide.aspx/BindHealthCards";
    param_HC.template = ["HEALTH_CARD_NO*HEALTH_CARD_NO"
    , "HEALTH_CARD_TYPE_NAME*HEALTH_CARD_TYPE_NAME"
    , "SCHEMENAME*SCHEMENAME"
    , "ELIGIBILITY_AMOUNT*ELIGIBILITY_AMOUNT"
    , "UTILIZED_AMOUNT*UTILIZED_AMOUNT"
    , "BALANCE_AMOUNT*BALANCE_AMOUNT"
    , "CNCSN_RULE_NAME*CNCSN_RULE_NAME"
    , "EFFECT_FROM_DT*EFFECT_FROM_DT"
    , "EFFECT_TO_DT*EFFECT_TO_DT"
    ];
    param_HC.header = [{ col: "Health Card#", sort: false, filter: false }
    , { col: "Health Card Type", sort: false, filter: false }
    , { col: "Scheme", sort: false, filter: false }
    , { col: "Eligibility Amount", sort: false, filter: false }
    , { col: "Utilized Amount", sort: false, filter: false }
    , { col: "Balance Amount", sort: false, filter: false }
    , { col: "Rule Name", sort: false, filter: false }
    , { col: "Effect From Date", sort: false, filter: false }
    , { col: "Effect To Date", sort: false, filter: false }
    ];
    param_HC.enablePaging = false;
    param_HC.enableTrace = false;
    param_HC.enableFilter = false;
    param_HC.enableCheckbox = false;
    param_HC.enableSorting = false;
    param_HC.RowNo = true;
    param_HC.tableTemplate = true;
    param_HC.enableDMS = false;
    param_HC.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        obj.find("td").each(function (i, j) {
            if (i == 8) {
                if (_data.EFFECT_FROM_DT != undefined && _data.EFFECT_FROM_DT != null && _data.EFFECT_FROM_DT != "" && _data.EFFECT_FROM_DT != "null")
                    $(this).text(new Date(_data.EFFECT_FROM_DT).format(hdnDateFormat));
            }
             if (i == 9) {
                if (_data.EFFECT_TO_DT != undefined && _data.EFFECT_TO_DT != null && _data.EFFECT_TO_DT != "" && _data.EFFECT_TO_DT != "null")
                    $(this).text(new Date(_data.EFFECT_TO_DT).format(hdnDateFormat));
            }
        });
        return obj[0].outerHTML;
    };
    gridHCControl = $("#divhealthcardGrid").jtable(param_HC);
    $("#Healthcardpopup").show();
    
}

        var myMultihealthDatar1 = new Array(); var index = 1;
        function healthArrayBinding(data) {
            myMultihealthDatar1 = [];
           
            if (data.d[0].length > 0) {

                for (i = 0; i < data.d[0].length; i++) {
                    myMultihealthDatar1[i] = new Array();
                    myMultihealthDatar1[i]["recid"] = index;
                    myMultihealthDatar1[i]["HEALTH_CARD_TYPE_ID"] =data.d[0][i].HEALTH_CARD_TYPE_ID;
                    myMultihealthDatar1[i]["UMR_NO"] = data.d[0][i].UMR_NO;
                    myMultihealthDatar1[i]["FULL_NAME"] = data.d[0][i].FULL_NAME;
                    myMultihealthDatar1[i]["HEALTH_CARD_TYPE_NAME"] = data.d[0][i].HEALTH_CARD_TYPE_NAME;
                    myMultihealthDatar1[i]["HEALTH_CARD_NO"] = data.d[0][i].HEALTH_CARD_NO;
                    myMultihealthDatar1[i]["ELIGIBILITY_AMOUNT"] = data.d[0][i].ELIGIBILITY_AMOUNT;
                    myMultihealthDatar1[i]["HEALTH_CARD_TYPE_ID"] = data.d[0][i].HEALTH_CARD_TYPE_ID;
                    myMultihealthDatar1[i]["CNCSN_RULE_ID"] = data.d[0][i].CNCSN_RULE_ID;
                    myMultihealthDatar1[i]["HEALTH_CARD_DET_ID"] = data.d[0][i].HEALTH_CARD_DET_ID;
                    myMultihealthDatar1[i]["HEALTH_CARD_ID"] = data.d[0][i].HEALTH_CARD_ID;
                    index++;           
                }

            }
            return myMultihealthDatar1;
        }
     
        function MultipleHcGettingDetails(result) {


            if (w2ui.divhealthcardlist != undefined && w2ui.divhealthcardlist != null) {
                w2ui.divhealthcardlist.destroy();
            }
            if (result.d[0].length > 1) {
                $('[id*=healthcardlist]')[0].style.display = "block";
                myMultiDatar122 = healthArrayBinding(result);
                dataSource = myMultiDatar122;
                healthcardlookup(dataSource);
            } else {

            if (result.d[0][0] != undefined) {
                if (result.d[0][0].HEALTH_CARD_TYPE_ID > 0) {
                    $(".stoast").toastText("Info", "This Patient Has Health Card!", 7, 2);
                    $('[id*=lblHcardDisplay]').css('display', 'block');

                    if (parseFloat(result.d[0][0].ELIGIBILITY_AMOUNT) == 0) {
                        $(".stoast").toastText("Info", "Health Card Has Zero Eligible Amount!", 7, 2);
                    }
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardid').value = result.d[0][0].HEALTH_CARD_TYPE_ID;
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardno').value = result.d[0][0].HEALTH_CARD_NO;
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblhcno').innerHTML = result.d[0][0].HEALTH_CARD_NO;
                       document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value =result.d[0][0].CNCSN_RULE_ID;
                        document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value = result.d[0][0].ELIGIBILITY_AMOUNT;
                        document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value = result.d[0][0].HEALTH_CARD_DET_ID;
                            document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcard_id').value = result.d[0][0].HEALTH_CARD_ID;
                         if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons" || document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
                    bindhealthcaeddoctor();
                    }
                }
                }
                else {
                    $('[id*=lblHcardDisplay]').css('display', 'none');

                }



            }



        }
 function BindPatientDetails(patientID, umrNo) {
    if(patientID!="")
    {
        document.getElementById('<%=hdnCNCLPatID.ClientID %>').value = patientID;
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" && $('[id$=hdnView]').val() == 'VIEW_OP') {
            var bill_id = $('#'+ ctrlcom + '_hdnBill_ID').val();
            Advanced_Details(bill_id);
        } 
        var sp_name='';
        var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value;
       if(form_name=="OP" ||form_name=="Cons"){
            sp_name="PR_GET_PATIENT_REGISTRATION_NEW_OP";}
       else if(form_name=="ADMN" || form_name=="ER"){
            sp_name="PR_GET_PATIENT_REGISTRATION_NEW_IP";
       }
        else{
            sp_name="PR_GET_PATIENT_REGISTRATION_NEW_ALL";
        }
       var parameters='';
          var parametervalues='';
          parameters = "IP_PATIENT_ID";
          parametervalues = parseInt(patientID);
          GetNonAsync(
                    "Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
                    { parameters:parameters ,parametervalues:parametervalues,sp_name:sp_name },
                    function (jdata) {
                        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" && $('[id$=hdnView]').val() == "VIEW_OP") {
                            if (document.getElementById('' + ctrlcom + '_hdnbill_typeID').value == "15") {
                                OnBindOspPatintInfoSuccess(jdata.d);
                            }
                            else {
                                    if(form_name=="OP" ||form_name=="Cons"){
                                        OnPatientInfoSuccessforop(jdata.d);
                                    }
                                    else if(form_name=="ADMN" || form_name=="ER"){
                                        OnPatientInfoSuccessforip(jdata.d);
                                    }else{
                                        OnPatientInfoSuccessforall(jdata.d);
                                    }
                                }
                       }
                      /* else if(document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund" &&document.getElementById('<%=hdndocmode.ClientID %>').value == "VIEW")
                        {
                        OnRefundPatientInfoSuccess(jdata.d);
                        } */ 
                      else {
                              if(form_name=="OP" ||form_name=="Cons"){
                                    OnPatientInfoSuccessforop(jdata.d);
                              }else if(form_name=="ADMN" || form_name=="ER"){
                                    OnPatientInfoSuccessforip(jdata.d);
                              }else{
                                 OnPatientInfoSuccessforall(jdata.d);
                                  }
                        }

                    },
                    function (jqXHR, textStatus, errorThrown) {
                });
        }
     return false;
 }

function OnPatientInfoSuccessforip(result) {
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        var obj='suvarna',param='OSP';
        if (result != null && result != "") {
         result=result[0];
         if(form_name!='ER'){
          if(result[0].COMPANY_ID > "0" ){
                
                (result[0]);
                }
          }

        if(result[0].IS_OSP.trim() == 'Y'){
          
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=result[0].IS_OSP.trim();
        }
        else{
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value = '';
        }
        if (result[0].IS_OSP.trim() == 'Y' && result[0].IS_REG_REQUIRED.trim() == 'N') {
         
                ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP Patient Cannot Do Op Billing');
          
            return false;
        }
        if( result[0].IS_REG_REQUIRED != "" && result[0].IS_REG_REQUIRED != null && result[0].IS_REG_REQUIRED != undefined){
            if(result[0].IS_REG_REQUIRED == "Y"){
                if(form_name == 'ADMN'|| form_name == 'ER')
                {
                    document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "This is OSP Patient, Registration Fees Not Paid", 5, 2);
                    ClearPatientBanerControl();
                    return false;
                }
               
            }
        }
        if( result[0].BILL_NO != "" && result[0].BILL_NO != null && result[0].BILL_NO != undefined){
                document.getElementById('<%= hdnBillNo.ClientID %>').value = result[0].BILL_NO;
        }
      
   
        $('[id*=hdnisosp]').val(result[0].IS_OSP);
        if(result[0].IS_VIP == "V" || result[0].IS_VIP == "VV"){
            $('.vipsource').css('display','');
            var txt1 = '', txt2 = '';
            if(result[0].VIP_TYPE_NAME != undefined && result[0].VIP_TYPE_NAME != null && result[0].VIP_TYPE_NAME != ''){
                txt1 = '<b> Source :</b><span>'+ result[0].VIP_TYPE_NAME + '</span>';
            }
            if(result[0].VIP_NOTE != undefined && result[0].VIP_NOTE != null && result[0].VIP_NOTE != ''){
                 txt2 = '<b> Remarks :</b><span>'+ result[0].VIP_NOTE + '</span>';
            }
            if(txt1 != ''){
                $('.vsource').empty();
                $('.vsource').append(txt1);
            }
            if(txt2 != ''){
                $('.vremarks').empty();
                $('.vremarks').append(txt2);
            }
        }
        else{
            $('.vipsource').css('display','none');
        }
         if (document.getElementById('<%=hdnDocName.ClientID %>').value == "MLC") {
            document.getElementById('' + ctrlcom + '_hdnmlcumrno').value = _umr_no;
        }
        var STR = result[0].PATIENT_IMAGE; var _umr_no = result[0].UMR_NO, _pat_id = result[0].PATIENT_ID, _ref_type_id = "1";

        document.getElementById('<%=hdncashlmtamt.ClientID %>').value=result[0].CASH_LIMIT_AMT;
        if(result[0].HEALTH_CARD_COUNT>0){
            var sp_name="PR_GET_HC_HEALTH_CARD_DET_UMR_NO";
            var parameters='';
            var parametervalues='';
            parameters = "IP_UMR_NO";
            parametervalues = _umr_no;
            GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
            { parameters:parameters,parametervalues:parametervalues,sp_name:sp_name},
                function (jdata) {
                    if (jdata.d[0] != null && jdata.d[0] != '') {

               MultipleHcGettingDetails(jdata);


                    }
                }, function () {
            });
             
         }else{
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardid').value = '';
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardno').value ='';
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblhcno').innerHTML = '';
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value ='';
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value='';
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value='';
                  $('[id*=lblHcardDisplay]').css('display', 'none');
          }
                
            $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
            if (form_name != "OPCNCL" && form_name != "PREAUTH" && form_name != "DI" && form_name != "OPPKGBILL"&& form_name != "CorpClaim" && form_name != "OUTSTDNGDUE" && form_name != "POSTDSCNT" && form_name != "IP CREDIT LIMIT" && form_name != "PREADVANCE" && form_name != "MLC" && form_name != "PDoc" && form_name != "Refund" && form_name != "Passport" && form_name != 'PREADVANCE' && form_name != 'MAB' && form_name != 'CREF' && form_name != "ConsTransfer" && form_name != "PATIENT COMPONENT"&& form_name != "PATIENTDAILIZERMAPPING"&&form_name != "DIALYSIS BOOKING"&& form_name != "DIALLABIND"&& form_name != "DIAREND"&& form_name != "DIALSERIND" && form_name != "HCSUMRY" && form_name != "FeedBack Form" && form_name != "OpBillAssesment" && form_name != "ER" && form_name !='PASSPORTDETAILS' && form_name != "BillConvertion" && form_name != "HCFEEDBK" && form_name !='ADVTRAN'&& form_name !='TO_ADVTRAN' && form_name != "HISAPPT" && form_name != "RefLetterValidity" &&form_name != "AssesmentMerge" &&form_name != "OrderedVerification"&&form_name != "ESTBILL" && form_name != "PreAssessmentBills" && form_name != "IPRECEIPT_CNCL" && form_name != "PatientAccount" && form_name != "MULTIPLEBILLS" && form_name != "QUICKADMN" ){
                if(result[0].CREDIT_ORG_ID!=undefined&&result[0].CREDIT_ORG_ID!=null&&result[0].CREDIT_ORG_ID!=""){
                    document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0].CREDIT_ORG_ID;
                }
            }
           
            document.getElementById('<%=hdnUmrNo.ClientID %>').value = _umr_no;
            document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
            document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
            document.getElementById('<%=hdnPatientid.ClientID %>').value =_pat_id;
            if(document.getElementById('ctl00_ContentPlaceHolder1_hdnPatientid')!=null&&document.getElementById('ctl00_ContentPlaceHolder1_hdnPatientid')!=undefined){document.getElementById('ctl00_ContentPlaceHolder1_hdnPatientid').value=_pat_id;}
            document.getElementById('<%=hdnDeptId.ClientID %>').value =result[0].DEPARTMENT_ID;
            document.getElementById('<%=hdnDeptName.ClientID %>').value =result[0].DEPARTMENT_NAME;
            document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
            /*don't remove This Condition if in case U Use "hdnoldregtpaid" Split & Use */
            if(document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="" || document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="0"||document.getElementById('<%=hdnoldregtpaid.ClientID %>').value ==null||document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =='undefined'){
             document.getElementById('<%=hdnoldregtpaid.ClientID %>').value = result[0].COMPANY_ID;
             }
            document.getElementById('<%=hdnisnewborn.ClientID %>').value = result[0].IS_NEW_BORN;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val(_umr_no);
            /*related to upload files in dms*/
            document.getElementById('ctl00_hdnDMSUmrNo').value=_umr_no;
            document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value=result[0].AREA;
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != '') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
            }
            
            var arraystr = new Array();   
            arraystr[0]=0;
            if(STR == undefined || STR == null || STR == "" ){STR= arraystr}
            var _baseString = '';
            GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: STR, UMR_NO: _umr_no, REFERENCE_ID: _pat_id, REFERENCE_TYPE_ID: "1",formname:form_name },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null) {
                    $('#<%=img.ClientID %>').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#<%=img.ClientID %>').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            var PatientID = result[0].PATIENT_ID;
            if(PatientID == undefined || PatientID == null || PatientID == "" ){ PatientID="0";}
             if(document.getElementById('<%=hdnDocName.ClientID %>').value =="ER"){
             document.getElementById('' + ctrlcom + '_ddlNationality').value=result[0].NATIONALITY_ID;
              document.getElementById('' + ctrlcom + '_hdnpatRev_No').value = result[0].PATIENT_RIVISION_NO;
              document.getElementById('' + ctrlcom + '_txtNearestPS').value = result[0].NEAREST_PS;
              
             ClearAddressDetails();
                  $('#'+ ctrlcom + '_hdnNatinality_id').val(result[0].NATIONALITY_ID);
                 // AssignReferalDetails(PatientID);
                  AssignReferalsInfo(PatientID);
                   AssignAddrDtls(PatientID);
             }
            /* checking Registration Validity start */
            if (result[0].REG_EXPIRY_DT != null && result[0].REG_EXPIRY_DT != '' && result[0].REG_EXPIRY_DT != undefined) {
                var regExpDt = result[0].REG_EXPIRY_DT.split(' ')[0];
                var ExpDt = new Date(regExpDt).format('dd-MMM-yyyy');
                if (new Date(regExpDt).format('dd-MMM-yyyy') == "NaN--NaN") {
                    ExpDt = regExpDt.split('-')[0] + "/" + regExpDt.split('-')[1] + "/" + regExpDt.split('-')[2];
                }
                var REGExpDt = new Date(ExpDt).format('dd-MMM-yyyy');
                var currDt = new Date().format("dd-MMM-yyyy");
                if (REGExpDt.length == 11) {
                    var sedt = REGExpDt;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                    if (res == "d1<d2") {
                        var type = '';
                        if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP')
                        { type = 'OP'; }
                        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ADMN')
                        { type = 'ADMN'; }
                        else
                        { type = 'CON'; }
                    }
                }
            }    /* checking Registration Validity Ends */
            /* assigning data to Banner controls */
            document.getElementById('<%=lblPatName.ClientID %>').innerHTML = result[0].DISPLAY_NAME;
           
             
            document.getElementById('<%=lblgender.ClientID %>').innerHTML = result[0].GENDER;
             document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML=result[0].FOREIGN_CATEGORIES_NAME;
            var age=result[0].AGE.split(',');
            /* changed Bby rani age[0] to DISPLAY_AGE */
            document.getElementById('<%=lblagedob.ClientID %>').innerHTML = result[0].DISPLAY_AGE + "/" + new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=hdnDOB.ClientID %>').value=new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = result[0].OCCUPATION_NAME;
            document.getElementById('<%=lblmothername.ClientID %>').innerHTML = result[0].MOTHER_MAIDEN_NAME;
            if(result[0].REG_PATIENT_TYPE_NAME==null||result[0].REG_PATIENT_TYPE_NAME=='null')result[0].REG_PATIENT_TYPE_NAME='';
            if(result[0].IS_REG_REQUIRED=='Y' && result[0].REG_PATIENT_TYPE_NAME==''){
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML='General';
            }
            else{
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML = result[0].REG_PATIENT_TYPE_NAME + "/" + result[0].REG_TYPE_NAME;
            }

            var __admnNO= document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnucadmnno').value;
            var hdnUAdmnNO= document.getElementById('<%=hdnUAdmnNO.ClientID %>').value
            if(hdnUAdmnNO==''||hdnUAdmnNO==null||hdnUAdmnNO==undefined){hdnUAdmnNO='';}
            if(__admnNO==''||__admnNO==null||__admnNO==undefined){__admnNO='';}
           /* if(hdnUAdmnNO!=''){
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(hdnUAdmnNO);
            }
            else
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(__admnNO);*/


            document.getElementById('<%=lblcmpname.ClientID %>').innerHTML = result[0].REG_REFERENCE_TYPE_NAME;//result[0].COMPANY_NAME;-->Commented By Naresh
            document.getElementById('<%=lblMobileNo.ClientID %>').innerHTML = result[0].MOBILE_NO1;
         
             
           if (result[0].RELATION_SHIP_NAME == 'Self') {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = 'Self';
            }
            else if(result[0].RELATION_SHIP_NAME == ''){
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
            }
            else {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = result[0].RELATION_SHIP_NAME;
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = result[0].RES_PERSON_NAME;
            }  

            document.getElementById('<%=hdnOspRegPatID.ClientID %>').value=result[0].PATIENT_ID;
            if(result[0].IS_REG_REQUIRED != 'Y' && result[0].CONSULTANT != ''&& result[0].CONSULTANT != null)
            document.getElementById('<%=lblrefdoc.ClientID %>').innerHTML = result[0].CONSULTANT+'-'+ result[0].DEPARTMENT_NAME;
            document.getElementById('<%=hdnGenderID.ClientID %>').value = result[0].GENDER_ID;
              
            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {

            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN"){
            if(result[0].PATIENT_TYPE_ID=="2" || result[0].PATIENT_TYPE_ID=="5" || result[0].PATIENT_TYPE_ID=="8" || result[0].PATIENT_TYPE_ID=="9"){
                 document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value=0;
            }else{document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;}
            }
                /* Company setting Reg Details Required in Transaction screen and Days for consideration */
                var IsRegReq = document.getElementById('' + ctrlcom + '_hdnIsRegDtlsReq').value; /*Registration Details Required in Transaction Forms*/
                var RegReferalDays = document.getElementById('' + ctrlcom + '_hdnRegRefDays').value;
                if (IsRegReq == "Yes") {
                    var NoofDays=0;
                    var RegDt = result[0].REGISTRATION_DT;
                    if(RegDt==''||RegDt==undefined||RegDt==""){NoofDays=0;}
                    else
                    {
                        NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    }
                    if (NoofDays <= RegReferalDays) {
                        var patid = result[0].PATIENT_ID;
                        AssignReferalsInfo(patid);  
                         if(result[0].PATIENT_TYPE_ID=="2" || result[0].PATIENT_TYPE_ID=="5" || result[0].PATIENT_TYPE_ID=="8" || result[0].PATIENT_TYPE_ID=="9"){
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value=2;
                        }else{document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;}
                        $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                        AssignCompanyDetails();
                        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
                          document.getElementById('' + ctrlcom + '_hdnpat_id').value =result[0].PATIENT_ID;
                            if(result[0].EMPLOYEE_ID!=null &&result[0].EMPLOYEE_ID!=''&&result[0].EMPLOYEE_ID!=undefined){
                                if(result[0].EMPLOYEE_ID>0){
                                    if(result[0].ELIGIBLE_WARD_GROUP_NAME!='' && result[0].ELIGIBLE_WARD_GROUP_NAME!=undefined && result[0].ELIGIBLE_WARD_GROUP_NAME!=null){
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdlblEligiblewardGrp').style.display="table-cell"
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdtxtEligiblewardGrp').style.display="table-cell"
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_TxteliblewardGrp').value=result[0].ELIGIBLE_WARD_GROUP_NAME;
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnEligibleWardGrpId').value=result[0].ELIGIBLE_WARD_GROUP_ID;
                                    }
                                }
                            }
                            else
                            {
                              document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdlblEligiblewardGrp').style.display="none"
                              document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdtxtEligiblewardGrp').style.display="none"
                            }
                            if(result[0].IS_NEW_BORN == 'Y')
                            {
                            
  var sp_name='PR_GET_PARENT_CHILD_ADMISSION_DETAILS_IP';
        
          var parameters='';
          var parametervalues='';
           parameters = "IP_PARENT_UMR_NO";
                parameters = parameters + '*' + "IP_CHILD_UMR_NO";

                 parametervalues = result[0].PARENT_UMR_NO;
                parametervalues = parametervalues + '*' +  result[0].UMR_NO;
                GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters:parameters ,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0][0] != null) {

                             document.getElementById('' + ctrlcom + '_ddlLinktype').value = 2;
                                document.getElementById('' + ctrlcom + '_chkLinkIP').disabled = false;
                                document.getElementById('' + ctrlcom + '_hdnIsNewBorn').value = "Y";
                                document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').style.border = "1px solid #f4785e";
                                document.getElementById('tdlinkno').style.display = 'table-cell';
                                document.getElementById('tdcadavar').style.display = 'none';
                                document.getElementById('' + ctrlcom + '_txtcadvarremarks').style.border = '1px solid rgb(190,190,190)';
                                document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucParentIP').disabled = false;
                                document.getElementById('' + ctrlcom + '_lbllinkno').innerHTML = 'Link#';
                                document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').value=jdata.d[0][0].ADMN_NO;
                                document.getElementById('' + ctrlcom + '_ucParentIP__hiddenID').value=jdata.d[0][0].ADMN_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentWardID').value = jdata.d[0][0].WARD_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentWardName').value = jdata.d[0][0].WARD_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentTWardID').value = jdata.d[0][0].TREATED_WARD_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentTWardName').value = jdata.d[0][0].TREATED_WARD_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentRoomID').value = jdata.d[0][0].ROOM_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentRoomName').value = jdata.d[0][0].ROOM_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentBedID').value = jdata.d[0][0].BED_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentBedName').value = jdata.d[0][0].BED_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentwardgrpid').value =jdata.d[0][0].WARD_GROUP_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentwardgrpname').value = jdata.d[0][0].WARD_GROUP_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParenttwardgrpid').value = jdata.d[0][0].TREATED_WARD_GROUP_ID;
                                document.getElementById('' + ctrlcom + '_hdnParenttwardgrpname').value = jdata.d[0][0].TREATED_WARD_GROUP_NAME;
                                document.getElementById('ctl00_ContentPlaceHolder1_ucParentIP_hdn_preCond').value = "WOMEN^^^" + jdata.d[0][0].PARENT_UMR_NO;
                                    

			 }
       }, function () {
    });

                            }
                             
                            if (result[0].CONSULTANT != '') {
                                document.getElementById('' + ctrlcom + '_hdnPreAdvanceAmt').value = result[0].PRE_ADVANCE;
                                AssignPrimaryDoctor(result[0].DOCTOR_ID, result[0].CONSULTANT, result[0].SPECIALIZATION_ID, result[0].SPECIALIZATION_NAME);
                            }
                               if(form_name=="ADMN")
                               {
                                   document.getElementById('<%=hdnpatient_type.ClientID %>').value=result[0].PATIENT_TYPE_ID;
                                   if(result[0].IS_MLC=='Y')
                                    {
                                    $(".stoast").toastText("Info",'MLC Patient !',5,2);
                                    }
                                    if (result[0].PATIENT_TYPE_ID == '1') {
                                        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = true;
                                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = true;
                                        document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = true;
                                        document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
                                        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
                                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
                                         var type = '<%=Request.QueryString["Type"] %>';                             
                              
                                         if (type == "Pre")
                                           {
                                               OnPagePreAdmnValidations();
                                           }
                                           else
                                            {
                                              OnPageValidations();
                                            }
                                    }

                                     Get_Emergency_Dtls(result[0].PATIENT_ID);
                               }
                        }
                    }
                   else {
                        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                   
                    SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));
						if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIsRefDtlsDisable').value=='YES')
                        {
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').className = 'Gray';
                        }
                        else
                        {
                              if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == '1') {
                             GetNonAsync(
                        "GridService.asmx/Get_Default_Values",
                        {},
                        function (data) {

                            if (data.d.length > 0) {

                                var ref_by = jQuery.parseJSON(data.d[0]);
                                var ref_source = jQuery.parseJSON(data.d[1]);
                                var ref_to = jQuery.parseJSON(data.d[2]);

                                var adress;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value = ref_by[0].REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenText').value = ref_by[0].REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = ref_by[0].REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = ref_by[0].MOBILE_PHONE;
                                document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = ref_by[0].REFRL_ID;

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

                                document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = adress
                                document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value = ref_by[0].AREA_ID;

                                   document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = "";

                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value = ref_source[0].CAT_REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenText').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                $('#'+ ctrlcom + '_ucReferal_hdncattype_id').val(ref_source[0].CAT_REFRL_SOURCE_ID);


                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value = ref_to[0].REFERED_TO_REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value = ref_to[0].REFERED_TO_REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenText').value = ref_to[0].REFERED_TO_REFERAL_NAME;

                                var Source = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
                                var Name = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value;
                       
                                var ReferedTo = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value;
                       
                                var Ref_id =  document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value;
                                var ReferedTo_id = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value;
                                var ReferalClass = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value;
                                var Refrl_class_id = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value;
                                var Cat_type_id = document.getElementById('' + ctrlcom + '_ucReferal_hdncattype_id').value;
                                var Address = document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value;
                                var Phone = document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value;
                                var id = document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value;
                                var pat_rfrl_dtl_id = '0';
                                var RefArea_Id =  document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value;
                                if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
                                { Cat_type_id = 0; }
                                var chksms = 'N';
                                var chkleter = 'N';

                                var Remarks = document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value;
                                var smstime = new Date().format('HH:mm:ss');
                                var smsDt="";
                                MaintainReferal_sourceid(Ref_id);
                                SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                                if (SelectedRowIndex == 1) {
                                    multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
                                }

                                $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                                $('#'+ ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
                                $('#'+ ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');

                            }
                        },
                        function (jerror, jerrorstatus, errorThrown)
                        { });
							  }
                        }
     }
                }
                    
        }
        
        if (document.getElementById('<%=hdnDocName.ClientID %>').value  == "ADMN") {
            OnchangeStatus();onExtendedDisplayValues();
            notapplicablevalidation();
            Get_Advance_Related_data();
        }
      
        
      
            }
        document.getElementById('<%=hdnIsUmrSelection.ClientID %>').value='Y';
     
      

        return false;
    }

    function OnPatientInfoSuccessforop(result) {
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        var obj='suvarna',param='OSP';
         result=result[0];
        if (result != null && result != "") {
     
            if(result[0].IS_OSP.trim() == 'Y'){
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=result[0].IS_OSP.trim();
                document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').value= 1;
                document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = true;
            }
            else{
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value = '';
                document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').value= 0;
                document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = false;
            }

            if (result[0].IS_OSP.trim() == 'Y' && result[0].IS_REG_REQUIRED.trim() == 'N') {
               if(form_name=='Cons')
                {
                    ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP Patient Cannot Do Op Consultation Billing');
                }
            
                else{
                    ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP Patient Cannot Do Op Billing');
                } 
                return false;
            }

            if( result[0].IS_REG_REQUIRED != "" && result[0].IS_REG_REQUIRED != null && result[0].IS_REG_REQUIRED != undefined){
            if(result[0].IS_REG_REQUIRED == "Y"){
                     document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "Registration Fees Not Paid", 5, 2);
            }
        }

        if( result[0].BILL_NO != "" && result[0].BILL_NO != null && result[0].BILL_NO != undefined){
                document.getElementById('<%= hdnBillNo.ClientID %>').value = result[0].BILL_NO;
        }
       
      /*  if(form_name=='OP'||form_name=='Cons'){
                 GetAsync(
                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Get_Package_Bill_Numbers",
                        { UMR_NO: result[0].UMR_NO },
                        function (data) {
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
        }
        if(form_name=='OPQUICK'){
                 GetAsync(
                        "Private/FrontOffice/OPDBill.aspx/Get_Package_Bill_Numbers",
                        { UMR_NO: result[0].UMR_NO },
                        function (data) {
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
        }*/
        
        document.getElementById('ctl00_ContentPlaceHolder1_UCServices_ucbillno_hdn_preCond').value= result[0].UMR_NO;
        if (form_name=='Cons') {
         var hdnRegDoctorReq = $('#<%=hdnRegDoctorRequired.ClientID %>').val();
                    if (hdnRegDoctorReq == "True") {
                        var RegDoctorDays = $('#<%=hdnRegShowDocDays.ClientID %>').val();
                        var RegDt = result[0].REGISTRATION_DT;
                        var NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        if (NoofDays > RegDoctorDays) {
                        }else{

     var sp_name="PR_GETALL_PATIENT_DOCTOR_DETAILS_OPC";
   if(result[0].DOCTOR_ID !=0 && result[0].DOCTOR_ID !=null && result[0].DOCTOR_ID!='undefined'&& result[0].DOCTOR_ID !='null' ){
      
    var parameters='';
    var parametervalues='';
    parameters = "IP_PATIENT_ID";
    parametervalues =  result[0].DOCTOR_ID;
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
        document.getElementById('<%=hdndocreqstatus.ClientID %>').value=jdata.d[0][0].DOC_STATUS;
        document.getElementById('<%=hdnstopcons.ClientID %>').value=jdata.d[0][0].STOP_CONS;
        document.getElementById('<%=hdndocholdstatus.ClientID %>').value=jdata.d[0][0].DOC_HOL_STATUS;
        document.getElementById('<%=hdnapmntfromdt.ClientID %>').value=jdata.d[0][0].FROM_DATE;
        document.getElementById('<%=hdnapmnttodt.ClientID %>').value=jdata.d[0][0].TO_DATE;


            }
        }, function () {
    });
    }

    }

    }}

        $('[id*=hdnisosp]').val(result[0].IS_OSP);
        if(result[0].IS_VIP == "V" || result[0].IS_VIP == "VV"){
            $('.vipsource').css('display','');
            var txt1 = '', txt2 = '';
            if(result[0].VIP_TYPE_NAME != undefined && result[0].VIP_TYPE_NAME != null && result[0].VIP_TYPE_NAME != ''){
                txt1 = '<b> Source :</b><span>'+ result[0].VIP_TYPE_NAME + '</span>';
            }
            if(result[0].VIP_NOTE != undefined && result[0].VIP_NOTE != null && result[0].VIP_NOTE != ''){
                 txt2 = '<b> Remarks :</b><span>'+ result[0].VIP_NOTE + '</span>';
            }
            if(txt1 != ''){
                $('.vsource').empty();
                $('.vsource').append(txt1);
            }
            if(txt2 != ''){
                $('.vremarks').empty();
                $('.vremarks').append(txt2);
            }
        }
        else{
            $('.vipsource').css('display','none');
        }
        var STR = result[0].PATIENT_IMAGE; var _umr_no = result[0].UMR_NO, _pat_id = result[0].PATIENT_ID, _ref_type_id = "1";
    
         document.getElementById('<%=hdncashlmtamt.ClientID %>').value=result[0].CASH_LIMIT_AMT;
             
             healthcarddatafordoctorbind=[];
             healthcarddatafordoctorbind["REGISTRATION_DT"]=result[0].REGISTRATION_DT;
             healthcarddatafordoctorbind["DOCTOR_ID"]=result[0].DOCTOR_ID;
             healthcarddatafordoctorbind["CONSULTANT"]=result[0].CONSULTANT;
             healthcarddatafordoctorbind["CONSULTANT_CD"]=result[0].CONSULTANT_CD;
             healthcarddatafordoctorbind["DEPARTMENT_ID"]=result[0].DEPARTMENT_ID;
             healthcarddatafordoctorbind["DEPARTMENT_NAME"]=result[0].DEPARTMENT_NAME;
             if(result[0].HEALTH_CARD_COUNT>0){
              
                     var sp_name="PR_GET_HC_HEALTH_CARD_DET_UMR_NO";
                    var parameters='';
                    var parametervalues='';
                    parameters = "IP_UMR_NO";
                    parametervalues = _umr_no;
                    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
                    { parameters:parameters,parametervalues:parametervalues,sp_name:sp_name},
                        function (jdata) {
                            if (jdata.d[0] != null && jdata.d[0] != '') {
                                    MultipleHcGettingDetails(jdata);
                            }
                        }, function () {
                    });
             
              }else{
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardid').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardno').value ='';
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblhcno').innerHTML = '';
                     document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value ='';
                      document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value='';
                      document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value='';
                    $('[id*=lblHcardDisplay]').css('display', 'none');
              
              }
                            
            $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);

            if(result[0].CREDIT_ORG_ID!=undefined&&result[0].CREDIT_ORG_ID!=null&&result[0].CREDIT_ORG_ID!=""){
                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0].CREDIT_ORG_ID;
                }

            if (form_name == "Cons")
            {
                document.getElementById('' + ctrlcom + '_hdndueamt').value = result[0].DUE_AMOUNT; 
                document.getElementById('' + ctrlcom + '_hdnpat_id').value =_pat_id;
                document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;
                }
           
             if(form_name=="OP"){
              document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;             
             
             }
                    

            
            document.getElementById('<%=hdnUmrNo.ClientID %>').value = _umr_no;
            document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
            document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
            document.getElementById('<%=hdnPatientid.ClientID %>').value =_pat_id;
            document.getElementById('<%=hdnDeptId.ClientID %>').value =result[0].DEPARTMENT_ID;
            document.getElementById('<%=hdnDeptName.ClientID %>').value =result[0].DEPARTMENT_NAME;
            document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
            /*don't remove This Condition if in case U Use "hdnoldregtpaid" Split & Use */
            if(document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="" || document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="0"||document.getElementById('<%=hdnoldregtpaid.ClientID %>').value ==null){
             document.getElementById('<%=hdnoldregtpaid.ClientID %>').value = result[0].COMPANY_ID;
             }
            document.getElementById('<%=hdnisnewborn.ClientID %>').value = result[0].IS_NEW_BORN;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val(_umr_no);
            /*related to upload files in dms*/
            document.getElementById('ctl00_hdnDMSUmrNo').value=_umr_no;
            document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value=result[0].AREA;
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != '') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
            }
         
           var arraystr = new Array();   
    arraystr[0]=0;
       if(STR == undefined || STR == null || STR == "" ){STR= arraystr}
            
            var _baseString = '';
            GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: STR, UMR_NO: _umr_no, REFERENCE_ID: _pat_id, REFERENCE_TYPE_ID: "1",formname:form_name },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null) {
                    $('#<%=img.ClientID %>').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#<%=img.ClientID %>').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            var PatientID = result[0].PATIENT_ID;
            if(PatientID == undefined || PatientID == null || PatientID == "" ){ PatientID="0";}
         
            /* checking Registration Validity start */
            if (result[0].REG_EXPIRY_DT != null && result[0].REG_EXPIRY_DT != '' && result[0].REG_EXPIRY_DT != undefined) {
                var regExpDt = result[0].REG_EXPIRY_DT.split(' ')[0];
                var ExpDt = new Date(regExpDt).format('dd-MMM-yyyy');
                if (new Date(regExpDt).format('dd-MMM-yyyy') == "NaN--NaN") {
                    ExpDt = regExpDt.split('-')[0] + "/" + regExpDt.split('-')[1] + "/" + regExpDt.split('-')[2];
                }
                var REGExpDt = new Date(ExpDt).format('dd-MMM-yyyy');
                var currDt = new Date().format("dd-MMM-yyyy");
                if (REGExpDt.length == 11) {
                    var sedt = REGExpDt;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                    if (res == "d1<d2") {
                        var type = '';
                        if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP')
                        { type = 'OP'; }
                        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ADMN')
                        { type = 'ADMN'; }
                        else
                        { type = 'CON'; }
                    }
                }
            }    /* checking Registration Validity Ends */
            /* assigning data to Banner controls */
            document.getElementById('<%=lblPatName.ClientID %>').innerHTML = result[0].DISPLAY_NAME;
            
            document.getElementById('<%=lblgender.ClientID %>').innerHTML = result[0].GENDER;
             document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML=result[0].FOREIGN_CATEGORIES_NAME;
            var age=result[0].AGE.split(',');
            /* changed Bby rani age[0] to DISPLAY_AGE */
            document.getElementById('<%=lblagedob.ClientID %>').innerHTML = result[0].DISPLAY_AGE + "/" + new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=hdnDOB.ClientID %>').value=new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = result[0].OCCUPATION;
            document.getElementById('<%=lblmothername.ClientID %>').innerHTML = result[0].MOTHER_MAIDEN_NAME;
             if(result[0].REG_PATIENT_TYPE_NAME==null||result[0].REG_PATIENT_TYPE_NAME=='null')result[0].REG_PATIENT_TYPE_NAME='';
            if(result[0].IS_REG_REQUIRED=='Y' && result[0].REG_PATIENT_TYPE_NAME==''){
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML='General';
            }
            else{
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML = result[0].REG_PATIENT_TYPE_NAME + "/" + result[0].REG_TYPE_NAME;
            }
            
            var __admnNO= document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnucadmnno').value;
            var hdnUAdmnNO= document.getElementById('<%=hdnUAdmnNO.ClientID %>').value
            if(hdnUAdmnNO==''||hdnUAdmnNO==null||hdnUAdmnNO==undefined){hdnUAdmnNO='';}
            if(__admnNO==''||__admnNO==null||__admnNO==undefined){__admnNO='';}
           /* if(hdnUAdmnNO!=''){
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(hdnUAdmnNO);
            }
            else
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(__admnNO);*/


            document.getElementById('<%=lblcmpname.ClientID %>').innerHTML = result[0].REG_REFERENCE_TYPE_NAME;//result[0].COMPANY_NAME;-->Commented By Naresh
            document.getElementById('<%=lblMobileNo.ClientID %>').innerHTML = result[0].MOBILE_NO1;
         
             
           if (result[0].RELATION_SHIP_NAME == 'Self') {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = 'Self';
            }
            else if(result[0].RELATION_SHIP_NAME == ''){
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
            }
            else {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = result[0].RELATION_SHIP_NAME;
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = result[0].RES_PERSON_NAME;
            }  

            document.getElementById('<%=hdnOspRegPatID.ClientID %>').value=result[0].PATIENT_ID;
            if(result[0].IS_REG_REQUIRED != 'Y' && result[0].CONSULTANT != '' && result[0].CONSULTANT != null)
            document.getElementById('<%=lblrefdoc.ClientID %>').innerHTML = result[0].CONSULTANT+'-'+ result[0].DEPARTMENT_NAME;
            document.getElementById('<%=hdnGenderID.ClientID %>').value = result[0].GENDER_ID;
            
            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons" ) {

             // document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
               if(result[0].PATIENT_TYPE_ID=="2" || result[0].PATIENT_TYPE_ID=="5" || result[0].PATIENT_TYPE_ID=="8" || result[0].PATIENT_TYPE_ID=="9"){
                     document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value=2;
               }else{document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;}
               $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
              $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
              
                /* Company setting Reg Details Required in Transaction screen and Days for consideration */
                var IsRegReq = document.getElementById('' + ctrlcom + '_hdnIsRegDtlsReq').value; /*Registration Details Required in Transaction Forms*/
                var RegReferalDays = document.getElementById('' + ctrlcom + '_hdnRegRefDays').value;
                if (IsRegReq == "Yes") {
                    var NoofDays=0;
                    var RegDt = result[0].REGISTRATION_DT;
                    if(RegDt==''||RegDt==undefined||RegDt==""){NoofDays=0;}
                    else
                    {
                        NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    }
                    if (NoofDays <= RegReferalDays) {
                        var patid = result[0].PATIENT_ID;
                        AssignReferalsInfo(patid);  
                       
                        AssignCompanyDetails();
                    }
                   else {
                        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                         SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));
						if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIsRefDtlsDisable').value=='YES')
                        {
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').className = 'Gray';
                        }
                        else
                        {
                            if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == '1') {
                             GetNonAsync(
                                "GridService.asmx/Get_Default_Values",
                                {},
                                function (data) {

                                    if (data.d.length > 0) {

                                        var ref_by = jQuery.parseJSON(data.d[0]);
                                        var ref_source = jQuery.parseJSON(data.d[1]);
                                        var ref_to = jQuery.parseJSON(data.d[2]);

                                        var adress;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value = ref_by[0].REFRL_ID;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenText').value = ref_by[0].REFERAL_NAME;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = ref_by[0].REFERAL_NAME;
                                        document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = ref_by[0].MOBILE_PHONE;
                                        document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = ref_by[0].REFRL_ID;

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

                                        document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = adress
                                        document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value = ref_by[0].AREA_ID;

                                           document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = "";

                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value = ref_source[0].CAT_REFRL_ID;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenText').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                        $('#'+ ctrlcom + '_ucReferal_hdncattype_id').val(ref_source[0].CAT_REFRL_SOURCE_ID);


                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value = ref_to[0].REFERED_TO_REFERAL_NAME;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value = ref_to[0].REFERED_TO_REFRL_ID;
                                        document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenText').value = ref_to[0].REFERED_TO_REFERAL_NAME;

                                        var Source = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
                                        var Name = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value;
                       
                                        var ReferedTo = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value;
                       
                                        var Ref_id =  document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value;
                                        var ReferedTo_id = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value;
                                        var ReferalClass = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value;
                                        var Refrl_class_id = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value;
                                        var Cat_type_id = document.getElementById('' + ctrlcom + '_ucReferal_hdncattype_id').value;
                                        var Address = document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value;
                                        var Phone = document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value;
                                        var id = document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value;
                                        var pat_rfrl_dtl_id = '0';
                                        var RefArea_Id =  document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value;
                                        if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
                                        { Cat_type_id = 0; }
                                        var chksms = 'N';
                                        var chkleter = 'N';

                                        var Remarks = document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value;
                                        var smstime = new Date().format('HH:mm:ss');
                                        var smsDt="";
                                        MaintainReferal_sourceid(Ref_id);
                                        SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                                        if (SelectedRowIndex == 1) {
                                            multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
                                        }

                                        $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                                        $('#'+ ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
                                        $('#'+ ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');

                                    }
                                },
                                function (jerror, jerrorstatus, errorThrown)
                                { });
							  }
                        }
                     }
                }
               
                if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons") {/* Company setting Reg Doctor Required in consultation screen and Days for consideration */
                    $('#'+ ctrlcom + '_UCServices_hdnGender_ID').val(result[0].GENDER_ID);
                    $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val('0');
                    var age=result[0].AGE;
                    var age_split=age.split(",");
                
                    $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val(age_split[0]);
                    $('#'+ ctrlcom + '_UCServices_hdnCasulity').val(result[0].REG_TYPE_ID);
                    document.getElementById('<%=hdnpatient_type.ClientID %>').value=result[0].PATIENT_TYPE_ID;
                
                    var Pat_Type = result[0].PATIENT_TYPE_ID;
                    if( Pat_Type != '' || Pat_Type!=null || Pat_Type!=undefined){
                        if (Pat_Type == '2' || Pat_Type == '3'||Pat_Type == '4'|| Pat_Type == '5' || Pat_Type == '6'||Pat_Type == '7' || Pat_Type == '8'||   Pat_Type == '9'|| Pat_Type == '10')
                        {
                            document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                            $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                        }/*Changed 0 to 2 by naresh*/
                        else {
                            if(result[0].PATIENT_TYPE_ID==null || result[0].PATIENT_TYPE_ID==undefined|| result[0].PATIENT_TYPE_ID=='')
                                document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;
                            else
                                document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = result[0].PATIENT_TYPE_ID;
                            $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                        }
                    }else{
                    
                       document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1; 
                        $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    
                    }
                    
                    if (getParameterByName('MODE') != 'VIEW') {
                     if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                        BindConsultReq(result[0].DOCTOR_ID);
                        }
//                        GetAsync(
//                            "Private/FrontOffice/OpBilling/OPConsultation1.aspx/Company_Precondition",
//                            { PatientId: PatientID,UMR_NO:_umr_no,CMPNY_ID:0 },
//                            function (JData) {
//                            },
//                            function (jqXHR, textStatus, errorThrown) {
//                            }); 

                        var oprefltrfor = "";
                        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP"){

                             oprefltrfor = "OPB";
                        }
                        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
                            oprefltrfor = "OPC";
                        }

                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value="0^PATIENTCMP^" + PatientID + "^";
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo_hdn_preCond').value="^^^^" + 0 + "^" + _umr_no + "^^^"+oprefltrfor;

                        set_contextKey = 'PATIENT';
                    }
                    if(result[0].HEALTH_CARD_COUNT>0){}else{
                    var hdnRegDoctorReq = $('#<%=hdnRegDoctorRequired.ClientID %>').val();
                    if (hdnRegDoctorReq == "True") {
                        var RegDoctorDays = $('#<%=hdnRegShowDocDays.ClientID %>').val();
                        var RegDt = result[0].REGISTRATION_DT;
                        var NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        if (NoofDays > RegDoctorDays) {
                        }
                        else {  
                            AssignConsultantDoctor(result[0].DOCTOR_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].DEPARTMENT_ID, result[0].DEPARTMENT_NAME);
                            
                         

                            
                        }
                    }
                    }
                }
            }
            else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
                var patid = result[0].PATIENT_ID;
                if (document.getElementById('' + ctrlcom + '_hdnView').value == 'REG') {
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = result[0].UMR_NO;
                    $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
                }
                if (document.getElementById('' + ctrlcom + '_hdnView').value == 'VIEW_OP') {
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UMR_NO;
                    $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
                    AssignReferalsInfo(patid);
                      if(result[0].HEALTH_CARD_COUNT>0){}else{
                    AssignConsultantDoctor(result[0].DOCTOR_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].DEPARTMENT_ID, result[0].DEPARTMENT_NAME);
                    }
                }
                $('#'+ ctrlcom + '_hdnpat_id').val(result[0].PATIENT_ID);
                $('#'+ ctrlcom + '_UCServices_hdnGender_ID').val(result[0].GENDER_ID);
                $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val('0');
                var age=result[0].AGE;
                var age_split=age.split(",");
                $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val(age_split[0]);
                $('#'+ ctrlcom + '_UCServices_hdnCasulity').val(result[0].REG_TYPE_ID);
                document.getElementById('<%=hdnpatient_type.ClientID %>').value=result[0].PATIENT_TYPE_ID;
                var Pat_Type = result[0].PATIENT_TYPE_ID;
                if( Pat_Type != ''){
                if (Pat_Type == '2' || Pat_Type == '3'||Pat_Type == '4'|| Pat_Type == '5' || Pat_Type == '6'||Pat_Type == '7' || Pat_Type == '8'||   Pat_Type == '9'|| Pat_Type == '10')
                {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                    $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                }/*Changed 0 to 2 by naresh*/
                else {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = result[0].PATIENT_TYPE_ID;
                    if( document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=='Y'){
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value= 1;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = true;
                    }
                     else{
                     document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value= 0;
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = false;
                    }
                    $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    $('#'+ ctrlcom + '_UCServices_divrptDispatch').val('2');
                }
                }
                else{
                 document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                    $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                
                
                }
                if (document.getElementById('' + ctrlcom + '_hdnView').value != 'VIEW_OP') {/* Company setting Reg Details Required in Transaction screen and Days for consideration */
                    var IsRegReq = $('#<%=hdnIsRegDtlsReq.ClientID %>').val(); /*Registration Details Required in Transaction Forms*/
                    var RegReferalDays =  $('#<%=hdnRegRefDays.ClientID %>').val();
                    if (IsRegReq == "Yes") {
                     var NoofDays=0;
                        var RegDt = result[0].REGISTRATION_DT;
                        if(RegDt==''||RegDt==undefined||RegDt==""){
                            NoofDays=0;
                        }
                        else
                        {
                            NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        }
                        if (NoofDays <= RegReferalDays) {
                            AssignReferalsInfo(patid);
                              if(result[0].HEALTH_CARD_COUNT>0){}else{
                            AssignConsultantDoctor(result[0].DOCTOR_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].DEPARTMENT_ID, result[0].DEPARTMENT_NAME);
                            }
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = '0';
                             SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));
                        }
                    }                    
                    var hdnRegDoctorReq = document.getElementById('' + ctrlcom + '_hdnRegDoctorRequired');
                    if (hdnRegDoctorReq.value == "True") {
                        var RegDoctorDays = document.getElementById('' + ctrlcom + '_hdnRegShowDocDays').value;
                        var RegDt = result[0].REGISTRATION_DT;
                        var NoofDays=0;
                         if(RegDt==''||RegDt==undefined||RegDt==""){
                            NoofDays=0;
                        }                        
                        NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        if (NoofDays > RegDoctorDays) {
                            $('#'+ ctrlcom + '_UcOdrPsyn_txtSearchControl').val('');
                            $('#'+ ctrlcom + '_UcOdrPsyn__hiddenText').val('');
                            $('#'+ ctrlcom + '_UcOdrPsyn__hiddenID').val('');
                        }
                        else {
                          if(result[0].HEALTH_CARD_COUNT>0){}else{
                            AssignConsultantDoctor(result[0].DOCTOR_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].DEPARTMENT_ID, result[0].DEPARTMENT_NAME);
                            }
                        }
                    }
                    if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                    BindBillingRequisitions();
                    }
                }
//                $('#'+ ctrlcom + '_ucReferal_ddlreferral').removeClass('red');
                $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
            }            
        }
        if (form_name=='OP') {
            if(result[0].DOCTOR_PAS_NO != undefined && result[0].DOCTOR_PAS_NO != null && result[0].DOCTOR_PAS_NO != ''){
                 document.getElementById('' + ctrlcom + '_UCServices_hdnDoctrPasNo').value= result[0].DOCTOR_PAS_NO;
            }
            else{
                document.getElementById('' + ctrlcom + '_UCServices_hdnDoctrPasNo').value= '';
            }
        }
        
       

        if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP' || document.getElementById('<%=hdnFormName.ClientID %>').value == "Cons") {
            var cmp_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
            var Pat_Type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
            if (Pat_Type == '2' || Pat_Type=='5' || Pat_Type=='8') {
                document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'Y';
                FirstRowShowCmpAmts();
                EnableCmpInfo();
            }
            else {
                FirstRowHideCmpAmts();
                DisableCmpInfo();
                document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'N';
            }
            if (parseInt(cmp_Id) > 0 && Pat_Type == '2') {
                DivCorporate.style.display = "block";
                DivCorpColors.style.display = "block";
            }
            else {
                DivCorporate.style.display = "none";
                DivCorpColors.style.display = "none";
             }
            if (getParameterByName('MODE') != 'VIEW_OP') {
                ServicesAutoContextKey();
            }
        }
        if(document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" || document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
            $('#'+ ctrlcom + '_hdnpat_id').val(result[0].PATIENT_ID);
            $('#' + ctrlcom + '_UCServices_hdnpatienttokenno').val(result[0].TOKEN_NO);
            onExtendedDisplayValues();
            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons")
            { OnPageValidation();}
        }
       
        
        if(form_name=='Cons' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value!='')
          
            {
                 if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {

                AllowAdminCharges();
      
            }
            }
        document.getElementById('<%=hdnIsUmrSelection.ClientID %>').value='Y';
//        if(form_name=='Cons')
//            TabFocusSetting();
        return false;
    }
        function OnPatientInfoSuccessforall(result) {
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
           result=result[0];
        var obj='suvarna',param='OSP';
        if (result != null && result != "") {
        
          if(form_name=="PatientAccount"){
          _assignPatientAccntDtls(result);//function available in patient account report
        }
        if(result[0].REFERENCE_SOURCE_ID > 0 ){
            if(form_name=="OrderedVerification"){
               $('#'+ ctrlcom + '_ddlreferral').val(result[0].REFERENCE_SOURCE_ID);
               if($('#'+ ctrlcom + '_ddlreferral').val() ==0 || $('#'+ ctrlcom + '_ddlreferral').val() ==1){
                 $('#'+ ctrlcom + '_GenericUCReferred_txtSearchControl').attr('disabled', true);
               }
               else{
               $('#'+ ctrlcom + '_GenericUCReferred_txtSearchControl').attr('disabled', false);
               }
           }
        }
        if(result[0].IS_OSP.trim() == 'Y'){
            if(form_name=='CREF'){
                $(".stoast").toastText("Info", "System Didn't Allow OSP Patient To Do Corporate Reg & Ref. Letter", 7, 2);
                return false;
            }
            if(form_name=='PREADVANCE'){
               $(".stoast").toastText("Info", "System Didn't Allow OSP Patient To Deposit The Advance", 7, 2);
                return false;
            }
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=result[0].IS_OSP.trim();
        }
        else{
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value = '';
        }
        if (result[0].IS_OSP.trim() == 'Y' && result[0].IS_REG_REQUIRED.trim() == 'N') {
           
             if(form_name=='CREF'){
                ConfirmationRequiredForSaveWithParam_message(obj,param,'System Didnot Allow OSP Patient To Do Corporate Reg & Ref. Letter');
            }
            
            else{
                ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP Patient Cannot Do Op Billing');
            } 
            return false;
        }
        if( result[0].IS_REG_REQUIRED != "" && result[0].IS_REG_REQUIRED != null && result[0].IS_REG_REQUIRED != undefined){
            if(result[0].IS_REG_REQUIRED == "Y"){
              
                    document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "Registration Fees Not Paid", 5, 2);
              
            }
        }
        if( result[0].BILL_NO != "" && result[0].BILL_NO != null && result[0].BILL_NO != undefined){
                document.getElementById('<%= hdnBillNo.ClientID %>').value = result[0].BILL_NO;
        }
       
        
       
        $('[id*=hdnisosp]').val(result[0].IS_OSP);
        if(result[0].IS_VIP == "V" || result[0].IS_VIP == "VV"){
            $('.vipsource').css('display','');
            var txt1 = '', txt2 = '';
            if(result[0].VIP_TYPE_NAME != undefined && result[0].VIP_TYPE_NAME != null && result[0].VIP_TYPE_NAME != ''){
                txt1 = '<b> Source :</b><span>'+ result[0].VIP_TYPE_NAME + '</span>';
            }
            if(result[0].VIP_NOTE != undefined && result[0].VIP_NOTE != null && result[0].VIP_NOTE != ''){
                 txt2 = '<b> Remarks :</b><span>'+ result[0].VIP_NOTE + '</span>';
            }
            if(txt1 != ''){
                $('.vsource').empty();
                $('.vsource').append(txt1);
            }
            if(txt2 != ''){
                $('.vremarks').empty();
                $('.vremarks').append(txt2);
            }
        }
        else{
            $('.vipsource').css('display','none');
        }
        var STR = result[0].PATIENT_IMAGE; var _umr_no = result[0].UmrNo, _pat_id = result[0].PATIENT_ID, _ref_type_id = "1";
           document.getElementById('<%=hdncashlmtamt.ClientID %>').value=result[0].CASH_LIMIT_AMT;
             if (document.getElementById('<%=hdnDocName.ClientID %>').value == "MLC") {
            document.getElementById('' + ctrlcom + '_hdnmlcumrno').value = _umr_no;
        }



           if(form_name=="POSTDSCNT"){
                      if(result[0].HEALTH_CARD_COUNT>0){
              
     var sp_name="PR_GET_HC_HEALTH_CARD_DET_UMR_NO";
    var parameters='';
    var parametervalues='';
    parameters = "IP_UMR_NO";
    parametervalues = _umr_no;
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters:parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null && jdata.d[0] != '') {
         
       MultipleHcGettingDetails(jdata);


            }
        }, function () {
    });
             
              }else{
                  document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardid').value = '';
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_HdnHealthcardno').value ='';
                    document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_lblhcno').innerHTML = '';
                     document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdncncsn_rule_id').value ='';
                      document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthcardeligibleamt').value='';
                      document.getElementById('ctl00_ContentPlaceHolder1_umrPatientDetails_hdnhealthdepencyid').value='';
                    $('[id*=lblHcardDisplay]').css('display', 'none');
              
              }
              }else{
              if(result[0].HEALTH_CARD_COUNT>0){
                  $(".stoast").toastText("Info", "This Patient Has Health Card!", 7, 2);
                  $('[id*=lblHcardDisplay]').css('display', 'block');
              }
              else{
               $('[id*=lblHcardDisplay]').css('display', 'none');
              }
              
              }



       
          

            $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
            if (form_name != "OPCNCL" && form_name != "PREAUTH" && form_name != "DI" && form_name != "OPPKGBILL"&& form_name != "CorpClaim" && form_name != "OUTSTDNGDUE" && form_name != "POSTDSCNT" && form_name != "IP CREDIT LIMIT" && form_name != "PREADVANCE" && form_name != "MLC" && form_name != "PDoc" && form_name != "Refund" && form_name != "Passport" && form_name != 'PREADVANCE' && form_name != 'MAB' && form_name != 'CREF' && form_name != "ConsTransfer" && form_name != "PATIENT COMPONENT"&& form_name != "PATIENTDAILIZERMAPPING"&&form_name != "DIALYSIS BOOKING"&& form_name != "DIALLABIND"&& form_name != "DIAREND"&& form_name != "DIALSERIND" && form_name != "HCSUMRY" && form_name != "FeedBack Form" && form_name != "OpBillAssesment" && form_name != "ER" && form_name !='PASSPORTDETAILS' && form_name != "BillConvertion" && form_name != "HCFEEDBK" && form_name !='ADVTRAN'&& form_name !='TO_ADVTRAN' && form_name != "HISAPPT" && form_name != "RefLetterValidity" &&form_name != "AssesmentMerge" &&form_name != "OrderedVerification"&&form_name != "ESTBILL" && form_name != "PreAssessmentBills" && form_name != "IPRECEIPT_CNCL" && form_name != "PatientAccount" && form_name != "MULTIPLEBILLS" && form_name != "QUICKADMN" ){
            if(result[0].CREDIT_ORG_ID!=undefined&&result[0].CREDIT_ORG_ID!=null&&result[0].CREDIT_ORG_ID!=""){
                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0].CREDIT_ORG_ID;
                }
                }
           
            if (form_name=="DIALLABIND")
            {
                document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;
             }
             
           if(form_name=="DIAREND"){
              document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;           
             
             }          

            
            document.getElementById('<%=hdnUmrNo.ClientID %>').value = _umr_no;
            document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
            document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
            document.getElementById('<%=hdnPatientid.ClientID %>').value =_pat_id;
            document.getElementById('<%=hdnDeptId.ClientID %>').value =result[0].DEPARTMENT_ID;
            document.getElementById('<%=hdnDeptName.ClientID %>').value =result[0].DEPARTMENT_NAME;
            document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
            /*don't remove This Condition if in case U Use "hdnoldregtpaid" Split & Use */
            if(document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="" || document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="0"||document.getElementById('<%=hdnoldregtpaid.ClientID %>').value ==null|| document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =='undefined'){
             document.getElementById('<%=hdnoldregtpaid.ClientID %>').value = result[0].COMPANY_ID;
             }
            document.getElementById('<%=hdnisnewborn.ClientID %>').value = result[0].IS_NEW_BORN;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val(_umr_no);
            /*related to upload files in dms*/
            document.getElementById('ctl00_hdnDMSUmrNo').value=_umr_no;
            document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value=result[0].AREA;
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != '') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
            }
             if (form_name == "PASSPORTDETAILS") {
             $('#'+ ctrlcom + '_hdnNatinality_id').val(result[0].NATIONALITY_ID);
             }
            if (form_name == "PREADVANCE") {
                var umr_NO = result[0].UmrNo;
                PreviousAdvanceDetails(umr_NO);
                $('[id*=hdnumr_no]').val(umr_NO);
            }
             if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ESTBILL')
      {
         AssignAdmnInfo1();
         IntermBillDetails();
         EstimationDeposiAmt();
         EstimationQuestionDetails();
         EstimationAddressDetails();
         
      
      }
         if(form_name=="QUICKADMN"){
         var res= result[0];
               umrdetalies(res);        
             
             } 
            
            var _baseString = '';
              var arraystr = new Array();   
    arraystr[0]=0;
       if(STR == undefined || STR == null || STR == "" ){STR= arraystr}
            GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: STR, UMR_NO: _umr_no, REFERENCE_ID: _pat_id, REFERENCE_TYPE_ID: "1",formname:form_name },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null) {
                    $('#<%=img.ClientID %>').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#<%=img.ClientID %>').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            var PatientID = result[0].PATIENT_ID;
            if(PatientID == undefined || PatientID == null || PatientID == "" ){ PatientID="0";}
          
            /* checking Registration Validity start */
            if (result[0].REG_EXPIRY_DT != null && result[0].REG_EXPIRY_DT != '' && result[0].REG_EXPIRY_DT != undefined) {
                var regExpDt = result[0].REG_EXPIRY_DT.split(' ')[0];
                var ExpDt = new Date(regExpDt).format('dd-MMM-yyyy');
                if (new Date(regExpDt).format('dd-MMM-yyyy') == "NaN--NaN") {
                    ExpDt = regExpDt.split('-')[0] + "/" + regExpDt.split('-')[1] + "/" + regExpDt.split('-')[2];
                }
                var REGExpDt = new Date(ExpDt).format('dd-MMM-yyyy');
                var currDt = new Date().format("dd-MMM-yyyy");
                if (REGExpDt.length == 11) {
                    var sedt = REGExpDt;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                    if (res == "d1<d2") {
                        var type = '';
                        if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP')
                        { type = 'OP'; }
                        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ADMN')
                        { type = 'ADMN'; }
                        else
                        { type = 'CON'; }
                    }
                }
            }    /* checking Registration Validity Ends */
            /* assigning data to Banner controls */
            document.getElementById('<%=lblPatName.ClientID %>').innerHTML = result[0].DISPLAY_NAME;
            if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OPCNCL" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OPPKGBILL" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE" && document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund" && document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = result[0].DISPLAY_NAME;
            }
             if(form_name=="PREADVANCE"){
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = result[0].DISPLAY_NAME;
                document.getElementById('' + ctrlcom + '_chkpatientname').checked=true;
                depositer();
            }
            document.getElementById('<%=lblgender.ClientID %>').innerHTML = result[0].GENDER;
             document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML=result[0].FOREIGN_CATEGORIES_NAME;
            var age=result[0].AGE.split(',');
            /* changed Bby rani age[0] to DISPLAY_AGE */
            document.getElementById('<%=lblagedob.ClientID %>').innerHTML = result[0].DISPLAY_AGE + "/" + new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=hdnDOB.ClientID %>').value=new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = result[0].OCCUPATION;
            document.getElementById('<%=lblmothername.ClientID %>').innerHTML = result[0].MOTHER_MAIDEN_NAME;
             if(result[0].REG_PATIENT_TYPE_NAME==null||result[0].REG_PATIENT_TYPE_NAME=='null')result[0].REG_PATIENT_TYPE_NAME='';
            if(result[0].IS_REG_REQUIRED=='Y' && result[0].REG_PATIENT_TYPE_NAME==''){
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML='General';
            }
            else{
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML = result[0].REG_PATIENT_TYPE_NAME + "/" + result[0].REG_TYPE_NAME;
            }

            var __admnNO= document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnucadmnno').value;
            var hdnUAdmnNO= document.getElementById('<%=hdnUAdmnNO.ClientID %>').value
            if(hdnUAdmnNO==''||hdnUAdmnNO==null||hdnUAdmnNO==undefined){hdnUAdmnNO='';}
            if(__admnNO==''||__admnNO==null||__admnNO==undefined){__admnNO='';}
           /* if(hdnUAdmnNO!=''){
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(hdnUAdmnNO);
            }
            else
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(__admnNO);*/


            document.getElementById('<%=lblcmpname.ClientID %>').innerHTML = result[0].REG_REFERENCE_TYPE_NAME;//result[0].COMPANY_NAME;-->Commented By Naresh
            document.getElementById('<%=lblMobileNo.ClientID %>').innerHTML = result[0].MOBILE_NO1;
         
             
           if (result[0].RELATION_SHIP_NAME == 'Self') {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = 'Self';
            }
            else if(result[0].RELATION_SHIP_NAME == ''){
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
            }
            else {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = result[0].RELATION_SHIP_NAME;
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = result[0].RES_PERSON_NAME;
            }  

            document.getElementById('<%=hdnOspRegPatID.ClientID %>').value=result[0].PATIENT_ID;
            if(result[0].IS_REG_REQUIRED != 'Y' && result[0].CONSULTANT != '')
            document.getElementById('<%=lblrefdoc.ClientID %>').innerHTML = result[0].CONSULTANT+'-'+ result[0].DEPARTMENT_NAME;
            document.getElementById('<%=hdnGenderID.ClientID %>').value = result[0].GENDER_ID;
              if(form_name=="POSTDSCNT"){
               $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIPAdmnno').value);
               }
         
           
        }
      
        if (form_name=='HISAPPT') {
            BindAppointmentDetails('NEW',result);
            var patid = result[0].PATIENT_ID;
            AssignReferalsInfo(patid);
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OPCNCL") {
            BindBillCnclData();
            OnPageValidationBillCancell();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE") {
            BindoutStndgDueData();
            OnPageValidation();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund") {
            BindRefundDueData();
            OnPageValidation();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT") {
            BindPostDscntDueData();
            var admnNO= document.getElementById('<%=hdnUAdmnNO.ClientID %>').value;
            if(admnNO==''||admnNO==undefined||admnNO==null){admnNO='';}
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value=admnNO;
            OnPageValidation();
        }
        if(document.getElementById('<%=hdnDocName.ClientID %>').value =="OpBillAssesment"){
            BindBillCnclData();
            BindPrevAssesmentDetails();
            EstimationBillDetails();
            EstimationQuestionDetails();
            EstimationAddressDetails();
        }
         if(document.getElementById('<%=hdnDocName.ClientID %>').value =="AssesmentMerge"){
            BindBillCnclMergeData();
        }
        if(document.getElementById('<%=hdnDocName.ClientID %>').value =="PreAssessmentBills"){
            BindAdtEstData();
        }
        if(form_name=='ADVTRAN')
        {
            Previous_Advance_Grid(result[0].UmrNo);
             OnPageValidation();
        }
        if(form_name=='TO_ADVTRAN')
        {
            Previous_Advance_Grid_TO(result[0].UmrNo);
        }
       
     
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ConsTransfer") {
            if (getParameterByName("MODE") != "VIEW") {
                BindPackageBillsList(result);
            }
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OPPKGBILL") {
            if (getParameterByName("MODE") != "VIEW") {
                BindPkgBillData();
            }
        }
       
        if (document.getElementById('<%=hdnDocName.ClientID %>').value  == "CREF") {
            ChkRefLetDetails();
        }
        if(form_name=='ADVTRAN')
        {
            OnPageValidation();
        }
       
        document.getElementById('<%=hdnIsUmrSelection.ClientID %>').value='Y';
        if(form_name=='MULTIPLEBILLS')
        {         
            GetPatentBills();
            var admn_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value;
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').removeClass('lookuptextbox red');
            if(admn_no>0){
            $('#'+ ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').removeClass('lookuptextbox red');
            }
            else{
            $(".stoast").toastText("Info","Please Select Bill # ", 3, 2);
            }
            GetNonAsync(
        "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInsurancesbillsBILL_NO",
        { admn_no: admn_no },
        function (data) {
            $('[id*=tblmultiins] tr:has(td)').remove();
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
                if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                                sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                                sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].CITY_NAME, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMAIL_ID, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION, sdata[i].CITY_ID,
                                 sdata[i].STATE_ID, sdata[i].COUNTRY_ID, 0, sdata[i].PATIENT_INS_ID, sdata[i].PH_FIRST_NAME, sdata[i].ADDRESS1, sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, PinZip, sdata[i].OFFICE_PHONE, sdata[i].ADDRESS2, Name, idprof, ID_PROOF_ID, PRE_AUTH_AMOUNT, APRVL_AMOUNT, District_name, 0,sdata[i].CLAIM_ID
                                 );
                renderUIDis(jDataval);
            }
            $('table[id*=tblmultiins] tr:has(td) div').css('display', 'block');
                if (getParameterByName("MODE") == 'VIEW') {
                $('table[id*=tblmultiins] tbody').find('[id*=imagetd]').css('display', 'none');
                $("[id$=tblmultiins] th").filter(':not(:has(table th))')[0].style.display='none';
                }
        },
        function () {
        });
        }
        else if(form_name=='PREAUTH')
        {
            var admn_no = $('[id*=umrPatientDetails_ucPreAdmUmr_txtSearchControl]').val();
            GetAsync(
        "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInsurances",
        { admn_no: admn_no },
        function (data) {
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
                if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                                sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                                sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].CITY_NAME, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMAIL_ID, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION, sdata[i].CITY_ID,
                                 sdata[i].STATE_ID, sdata[i].COUNTRY_ID, 0, sdata[i].PATIENT_INS_ID, sdata[i].PH_FIRST_NAME, sdata[i].ADDRESS1, sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, PinZip, sdata[i].OFFICE_PHONE, sdata[i].ADDRESS2, Name, idprof, ID_PROOF_ID, PRE_AUTH_AMOUNT, APRVL_AMOUNT, District_name
                                 );
                renderUIDis(jDataval);
            }
            $('table[id*=tblmultiins] tr:has(td) div').css('display', 'block');
        },
        function () {
        });
        }
        

        return false;
    }
     function OnPatientInfoSuccess(result) {
        var form_name = document.getElementById('<%=hdnDocName.ClientID %>').value;
        var obj='suvarna',param='OSP';
        if (result != null && result != "") {
        if(result[0].HEALTH_CARD_ID > 0 ){
            $(".stoast").toastText("Info", "This Patient Has Health Card!", 7, 2);
            $('[id*=lblHcardDisplay]').css('display','block');
            /*if(form_name=="POSTDSCNT"){
            document.getElementById('' + ctrlcom + '_rbConcession_1').checked=true;
            hccheck()
            }*/
            if(parseFloat(result[0].HC_ELIGIBILITY_AMOUNT)==0){
            $(".stoast").toastText("Info", "Health Card Has Zero Eligible Amount!", 7, 2);
            }
        }
        else{
        $('[id*=lblHcardDisplay]').css('display','none');
            /*if(form_name=="POSTDSCNT"){
            document.getElementById('' + ctrlcom + '_rbConcession_0').checked=true;
            hccheck()
            }*/
        }
          if(form_name=="PatientAccount"){
          _assignPatientAccntDtls(result);//function available in patient account report
        }
        if(result[0].REFERENCE_SOURCE_ID > 0 ){
            if(form_name=="OrderedVerification"){
               $('#'+ ctrlcom + '_ddlreferral').val(result[0].REFERENCE_SOURCE_ID);
               if($('#'+ ctrlcom + '_ddlreferral').val() ==0 || $('#'+ ctrlcom + '_ddlreferral').val() ==1){
                 $('#'+ ctrlcom + '_GenericUCReferred_txtSearchControl').attr('disabled', true);
               }
               else{
               $('#'+ ctrlcom + '_GenericUCReferred_txtSearchControl').attr('disabled', false);
               }
           }
        }
        if(result[0].IS_OSP.trim() == 'Y'){
            if(form_name=='CREF'){
                $(".stoast").toastText("Info", "System Didn't Allow OSP Patient To Do Corporate Reg & Ref. Letter", 7, 2);
                return false;
            }
            if(form_name=='PREADVANCE'){
               $(".stoast").toastText("Info", "System Didn't Allow OSP Patient To Deposit The Advance", 7, 2);
                return false;
            }
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=result[0].IS_OSP.trim();
        }
        else{
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value = '';
        }
        if (result[0].IS_OSP.trim() == 'Y' && result[0].IS_REG_REQUIRED.trim() == 'N') {
           if(form_name=='Cons')
            {
                ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP Patient Cannot Do Op Consultation Billing');
            }
            else if(form_name=='CREF'){
                ConfirmationRequiredForSaveWithParam_message(obj,param,'System Didnot Allow OSP Patient To Do Corporate Reg & Ref. Letter');
            }
            
            else{
                ConfirmationRequiredForSaveWithParam_message(obj,param,'OSP Patient Cannot Do Op Billing');
            } 
            return false;
        }
        if( result[0].IS_REG_REQUIRED != "" && result[0].IS_REG_REQUIRED != null && result[0].IS_REG_REQUIRED != undefined){
            if(result[0].IS_REG_REQUIRED == "Y"){
                if(form_name == 'ADMN'|| form_name == 'ER')
                {
                    document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "This is OSP Patient, Registration Fees Not Paid", 5, 2);
                    ClearPatientBanerControl();
                    return false;
                }
                else
                {
                    document.getElementById('<%= hdnOspRegReq.ClientID %>').value = result[0].IS_REG_REQUIRED;
                    $(".stoast").toastText("Alert", "Registration Fees Not Paid", 5, 2);
                }
            }
        }
        if( result[0].BILL_NO != "" && result[0].BILL_NO != null && result[0].BILL_NO != undefined){
                document.getElementById('<%= hdnBillNo.ClientID %>').value = result[0].BILL_NO;
        }
        /*if(form_name=='ER'){   Not Required Here. because automatically patient address is populating here let them entering EC Address &this block not working properly also.
          document.getElementById('' + ctrlcom + '_hdnpat_id').value =result[0].PATIENT_ID;
                 regaddressdetails();
        }*/
       /* if(form_name=='OP'||form_name=='Cons'){
                 GetAsync(
                        "Private/FrontOffice/OpBilling/OPBillClientSide.aspx/Get_Package_Bill_Numbers",
                        { UMR_NO: result[0].UmrNo },
                        function (data) {
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
        }
        if(form_name=='OPQUICK'){
                 GetAsync(
                        "Private/FrontOffice/OPDBill.aspx/Get_Package_Bill_Numbers",
                        { UMR_NO: result[0].UmrNo },
                        function (data) {
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
        }*/

        $('[id*=hdnisosp]').val(result[0].IS_OSP);
        if(result[0].IS_VIP == "V" || result[0].IS_VIP == "VV"){
            $('.vipsource').css('display','');
            var txt1 = '', txt2 = '';
            if(result[0].VIP_TYPE_NAME != undefined && result[0].VIP_TYPE_NAME != null && result[0].VIP_TYPE_NAME != ''){
                txt1 = '<b> Source :</b><span>'+ result[0].VIP_TYPE_NAME + '</span>';
            }
            if(result[0].VIP_NOTE != undefined && result[0].VIP_NOTE != null && result[0].VIP_NOTE != ''){
                 txt2 = '<b> Remarks :</b><span>'+ result[0].VIP_NOTE + '</span>';
            }
            if(txt1 != ''){
                $('.vsource').empty();
                $('.vsource').append(txt1);
            }
            if(txt2 != ''){
                $('.vremarks').empty();
                $('.vremarks').append(txt2);
            }
        }
        else{
            $('.vipsource').css('display','none');
        }
        var STR = result[0].PATIENT_IMAGE; var _umr_no = result[0].UmrNo, _pat_id = result[0].PATIENT_ID, _ref_type_id = "1";
        document.getElementById('<%=HdnHealthcardid.ClientID %>').value = result[0].HEALTH_CARD_ID;
        document.getElementById('<%=HdnHealthcardno.ClientID %>').value = result[0].HEALTH_CARD_NAME;
        document.getElementById('<%=lblhcno.ClientID %>').innerHTML =result[0].HEALTH_CARD_NO;
        document.getElementById('<%=hdncashlmtamt.ClientID %>').value=result[0].CASH_LIMIT_AMT;
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "MLC") {
            document.getElementById('' + ctrlcom + '_hdnmlcumrno').value = _umr_no;
        }
              /* added by pushkar please let his know
              if(result[0].HC_HEALTH_CARD_STS=='Y')
              {
                $.ajax({
                    type: "POST",
                    url: _iniUrl + "GridService.asmx/MultipleHcGetting",
                    data: "{'_umr_no':'" + _umr_no + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    error: function (jqXHR, textStatus, errorThrown) {
                    },
                    success: function (JData) {
                    }
                });
              } added by pushkar please let his know */

            $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
            if (form_name != "OPCNCL" && form_name != "PREAUTH" && form_name != "DI" && form_name != "OPPKGBILL"&& form_name != "CorpClaim" && form_name != "OUTSTDNGDUE" && form_name != "POSTDSCNT" && form_name != "IP CREDIT LIMIT" && form_name != "PREADVANCE" && form_name != "MLC" && form_name != "PDoc" && form_name != "Refund" && form_name != "Passport" && form_name != 'PREADVANCE' && form_name != 'MAB' && form_name != 'CREF' && form_name != "ConsTransfer" && form_name != "PATIENT COMPONENT"&& form_name != "PATIENTDAILIZERMAPPING"&&form_name != "DIALYSIS BOOKING"&& form_name != "DIALLABIND"&& form_name != "DIAREND"&& form_name != "DIALSERIND" && form_name != "HCSUMRY" && form_name != "FeedBack Form" && form_name != "OpBillAssesment" && form_name != "ER" && form_name !='PASSPORTDETAILS' && form_name != "BillConvertion" && form_name != "HCFEEDBK" && form_name !='ADVTRAN'&& form_name !='TO_ADVTRAN' && form_name != "HISAPPT" && form_name != "RefLetterValidity" &&form_name != "AssesmentMerge" &&form_name != "OrderedVerification"&&form_name != "ESTBILL" && form_name != "PreAssessmentBills" && form_name != "IPRECEIPT_CNCL" && form_name != "PatientAccount" && form_name != "MULTIPLEBILLS" && form_name != "QUICKADMN" ){
            if(result[0].CREDIT_ORG_ID!=undefined&&result[0].CREDIT_ORG_ID!=null&&result[0].CREDIT_ORG_ID!=""){
                document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value = result[0].CREDIT_ORG_ID;
                }
                }
            if (form_name == "Cons")
            {
                document.getElementById('' + ctrlcom + '_hdndueamt').value = result[0].DUE_AMOUNT; 
                document.getElementById('' + ctrlcom + '_hdnpat_id').value =_pat_id;
                document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;
                }
            if (form_name=="DIALLABIND")
            {
                document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;
             }
             if(form_name=="OP"){
              document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;             
             
             }
           if(form_name=="DIAREND"){
              document.getElementById('<%=hdnconsultentdoctorid.ClientID %>').value= result[0].TREATMENT_BY_ID;           
             
             }          

            
            document.getElementById('<%=hdnUmrNo.ClientID %>').value = _umr_no;
            document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
            document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
            document.getElementById('<%=hdnPatientid.ClientID %>').value =_pat_id;
            document.getElementById('<%=hdnDeptId.ClientID %>').value =result[0].Department_ID;
            document.getElementById('<%=hdnDeptName.ClientID %>').value =result[0].Department_Name;
            document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
            /*don't remove This Condition if in case U Use "hdnoldregtpaid" Split & Use */
            if(document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="" || document.getElementById('<%=hdnoldregtpaid.ClientID %>').value =="0"||document.getElementById('<%=hdnoldregtpaid.ClientID %>').value ==null){
             document.getElementById('<%=hdnoldregtpaid.ClientID %>').value = result[0].COMPANY_ID;
             }
            document.getElementById('<%=hdnisnewborn.ClientID %>').value = result[0].IS_NEWBORN;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').val(_umr_no);
            /*related to upload files in dms*/
            document.getElementById('ctl00_hdnDMSUmrNo').value=_umr_no;
            document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
            document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnpatareaid').value=result[0].AREA;
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').val(_umr_no);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').val(_pat_id);
            $('#'+ ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
            if (document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value != '') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
            }
             if (form_name == "PASSPORTDETAILS") {
             $('#'+ ctrlcom + '_hdnNatinality_id').val(result[0].NATIONALITY_ID);
             }
            if (form_name == "PREADVANCE") {
                var umr_NO = result[0].UmrNo;
                PreviousAdvanceDetails(umr_NO);
            }
             if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ESTBILL')
      {
         AssignAdmnInfo1();
         IntermBillDetails();
         EstimationDeposiAmt();
         EstimationQuestionDetails();
         EstimationAddressDetails();
         
      
      }
         if(form_name=="QUICKADMN"){
         var res= result[0];
               umrdetalies(res);        
             
             } 
            
            var _baseString = '';
            GetAsync(
            "Private/FrontOffice/OPDBILLNEW.aspx/Get_imagedetails",
            { _str: STR, UMR_NO: _umr_no, REFERENCE_ID: _pat_id, REFERENCE_TYPE_ID: "1",formname:form_name },
            function (data) {
                _baseString = data.d;
                if (_baseString != '' && _baseString != undefined && _baseString != null) {
                    $('#<%=img.ClientID %>').attr('src', "data:image/jpg;base64," + _baseString);
                }
                else {
                    $('#<%=img.ClientID %>').attr('src', "");
                }
            },
            function (jqXHR, textStatus, errorThrown) {
            });
            var PatientID = result[0].PATIENT_ID;
            if(PatientID == undefined || PatientID == null || PatientID == "" ){ PatientID="0";}
             if(document.getElementById('<%=hdnDocName.ClientID %>').value =="ER"){
             document.getElementById('' + ctrlcom + '_ddlNationality').value=result[0].NATIONALITY_ID;
              document.getElementById('' + ctrlcom + '_hdnpatRev_No').value = result[0].PATIENT_RIVISION_NO;
              document.getElementById('' + ctrlcom + '_txtNearestPS').value = result[0].NEAREST_PS;
              
             ClearAddressDetails();
                  $('#'+ ctrlcom + '_hdnNatinality_id').val(result[0].NATIONALITY_ID);
                 // AssignReferalDetails(PatientID);
                  AssignReferalsInfo(PatientID);
                   AssignAddrDtls(PatientID);
             }
            /* checking Registration Validity start */
            if (result[0].REG_EXPIRY_DT != null && result[0].REG_EXPIRY_DT != '' && result[0].REG_EXPIRY_DT != undefined) {
                var regExpDt = result[0].REG_EXPIRY_DT.split(' ')[0];
                var ExpDt = new Date(regExpDt).format('dd-MMM-yyyy');
                if (new Date(regExpDt).format('dd-MMM-yyyy') == "NaN--NaN") {
                    ExpDt = regExpDt.split('-')[0] + "/" + regExpDt.split('-')[1] + "/" + regExpDt.split('-')[2];
                }
                var REGExpDt = new Date(ExpDt).format('dd-MMM-yyyy');
                var currDt = new Date().format("dd-MMM-yyyy");
                if (REGExpDt.length == 11) {
                    var sedt = REGExpDt;
                    var currDt = new Date().format('dd-MMM-yyyy');
                    var res = CompareExpireDate(sedt, currDt);
                    if (res == "d1<d2") {
                        var type = '';
                        if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP')
                        { type = 'OP'; }
                        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == 'ADMN')
                        { type = 'ADMN'; }
                        else
                        { type = 'CON'; }
                    }
                }
            }    /* checking Registration Validity Ends */
            /* assigning data to Banner controls */
            document.getElementById('<%=lblPatName.ClientID %>').innerHTML = result[0].DISPLAY_NAME;
            if (document.getElementById('<%=hdnDocName.ClientID %>').value != "ADMN" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OPCNCL" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OPPKGBILL" && document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE" && document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund" && document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT") {
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = result[0].DISPLAY_NAME;
            }
             if(form_name=="PREADVANCE"){
                document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnPatientName').value = result[0].DISPLAY_NAME;
                document.getElementById('' + ctrlcom + '_chkpatientname').checked=true;
                depositer();
            }
            document.getElementById('<%=lblgender.ClientID %>').innerHTML = result[0].GENDER;
             document.getElementById('<%=lblpatientcategory.ClientID %>').innerHTML=result[0].FOREIGN_CATEGORIES_NAME;
            var age=result[0].AGE.split(',');
            /* changed Bby rani age[0] to DISPLAY_AGE */
            document.getElementById('<%=lblagedob.ClientID %>').innerHTML = result[0].DISPLAY_AGE + "/" + new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=hdnDOB.ClientID %>').value=new Date(result[0].DOB).format(document.getElementById('<%=hdndtfmt.ClientID %>').value);
            document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = result[0].OCCUPATION;
            document.getElementById('<%=lblmothername.ClientID %>').innerHTML = result[0].MOTHER_MAIDEN_NAME;
             if(result[0].REG_PATIENT_TYPE_NAME==null||result[0].REG_PATIENT_TYPE_NAME=='null')result[0].REG_PATIENT_TYPE_NAME='';
            if(result[0].IS_REG_REQUIRED=='Y' && result[0].REG_PATIENT_TYPE_NAME==''){
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML='General';
            }
            else{
                document.getElementById('<%=lblpattype.ClientID %>').innerHTML = result[0].REG_PATIENT_TYPE_NAME + "/" + result[0].REG_TYPE_NAME;
            }

            var __admnNO= document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnucadmnno').value;
            var hdnUAdmnNO= document.getElementById('<%=hdnUAdmnNO.ClientID %>').value
            if(hdnUAdmnNO==''||hdnUAdmnNO==null||hdnUAdmnNO==undefined){hdnUAdmnNO='';}
            if(__admnNO==''||__admnNO==null||__admnNO==undefined){__admnNO='';}
           /* if(hdnUAdmnNO!=''){
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(hdnUAdmnNO);
            }
            else
            $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(__admnNO);*/


            document.getElementById('<%=lblcmpname.ClientID %>').innerHTML = result[0].REG_REFERENCE_TYPE_NAME;//result[0].COMPANY_NAME;-->Commented By Naresh
            document.getElementById('<%=lblMobileNo.ClientID %>').innerHTML = result[0].MOBILE_NO1;
         
             
           if (result[0].RELATION_SHIP_NAME == 'Self') {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = 'Self';
            }
            else if(result[0].RELATION_SHIP_NAME == ''){
            document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = 'Responsible';
            }
            else {
                document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = result[0].RELATION_SHIP_NAME;
                document.getElementById('<%=lblfathername.ClientID %>').innerHTML = result[0].RES_PERSON_NAME;
            }  

            document.getElementById('<%=hdnOspRegPatID.ClientID %>').value=result[0].PATIENT_ID;
            if(result[0].IS_REG_REQUIRED != 'Y' && result[0].CONSULTANT != '')
            document.getElementById('<%=lblrefdoc.ClientID %>').innerHTML = result[0].CONSULTANT+'-'+ result[0].Department_Name;
            document.getElementById('<%=hdnGenderID.ClientID %>').value = result[0].GENDER_ID;
              if(form_name=="POSTDSCNT"){
               $('#'+ ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').val(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIPAdmnno').value);
               }
            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons" || document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {

            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN"){
            if(result[0].PATIENT_TYPE_ID=="2" || result[0].PATIENT_TYPE_ID=="5" || result[0].PATIENT_TYPE_ID=="8" || result[0].PATIENT_TYPE_ID=="9"){
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value=0;
                        }else{document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;}
            }else{
              document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0;
              $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
               }
                /* Company setting Reg Details Required in Transaction screen and Days for consideration */
                var IsRegReq = document.getElementById('' + ctrlcom + '_hdnIsRegDtlsReq').value; /*Registration Details Required in Transaction Forms*/
                var RegReferalDays = document.getElementById('' + ctrlcom + '_hdnRegRefDays').value;
                if (IsRegReq == "Yes") {
                    var NoofDays=0;
                    var RegDt = result[0].REGISTRATION_DT;
                    if(RegDt==''||RegDt==undefined||RegDt==""){NoofDays=0;}
                    else
                    {
                        NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                    }
                    if (NoofDays <= RegReferalDays) {
                        var patid = result[0].PATIENT_ID;
                        AssignReferalsInfo(patid);  
                         if(result[0].PATIENT_TYPE_ID=="2" || result[0].PATIENT_TYPE_ID=="5" || result[0].PATIENT_TYPE_ID=="8" || result[0].PATIENT_TYPE_ID=="9"){
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value=2;
                        }else{document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 1;}
                        $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                        AssignCompanyDetails();
                        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
                          document.getElementById('' + ctrlcom + '_hdnpat_id').value =result[0].PATIENT_ID;
                            if(result[0].EMPLOYEE_ID!=null &&result[0].EMPLOYEE_ID!=''&&result[0].EMPLOYEE_ID!=undefined){
                                if(result[0].EMPLOYEE_ID>0){
                                    if(result[0].ELIGIBLE_WARD_GROUP_NAME!='' && result[0].ELIGIBLE_WARD_GROUP_NAME!=undefined && result[0].ELIGIBLE_WARD_GROUP_NAME!=null){
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdlblEligiblewardGrp').style.display="table-cell"
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdtxtEligiblewardGrp').style.display="table-cell"
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_TxteliblewardGrp').value=result[0].ELIGIBLE_WARD_GROUP_NAME;
                                     document.getElementById('' + ctrlcom + '_ucBedRoomWard_hdnEligibleWardGrpId').value=result[0].ELIGIBLE_WARD_GROUP_ID;
                                    }
                                }
                            }
                            else
                            {
                              document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdlblEligiblewardGrp').style.display="none"
                              document.getElementById('' + ctrlcom + '_ucBedRoomWard_tdtxtEligiblewardGrp').style.display="none"
                            }
                            if(result[0].IS_NEWBORN == 'Y')
                            {
                                document.getElementById('' + ctrlcom + '_ddlLinktype').value = 2;
                                document.getElementById('' + ctrlcom + '_chkLinkIP').disabled = false;
                                document.getElementById('' + ctrlcom + '_hdnIsNewBorn').value = "Y";
                                document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').style.border = "1px solid #f4785e";
                                document.getElementById('tdlinkno').style.display = 'table-cell';
                                document.getElementById('tdcadavar').style.display = 'none';
                                document.getElementById('' + ctrlcom + '_txtcadvarremarks').style.border = '1px solid rgb(190,190,190)';
                                document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').disabled = false;
                                document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_ucParentIP').disabled = false;
                                document.getElementById('' + ctrlcom + '_lbllinkno').innerHTML = 'Link#';
                                document.getElementById('' + ctrlcom + '_ucParentIP_txtSearchControl').value=result[0].ADMN_NO;
                                document.getElementById('' + ctrlcom + '_ucParentIP__hiddenID').value=result[0].ADMN_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentWardID').value = result[0].WARD_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentWardName').value = result[0].WARD_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentTWardID').value = result[0].TREATED_WARD_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentTWardName').value = result[0].TREATED_WARD_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentRoomID').value = result[0].ROOM_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentRoomName').value = result[0].ROOM_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentBedID').value = result[0].BED_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentBedName').value = result[0].BED_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParentwardgrpid').value = result[0].WARD_GROUP_ID;
                                document.getElementById('' + ctrlcom + '_hdnParentwardgrpname').value = result[0].WARD_GROUP_NAME;
                                document.getElementById('' + ctrlcom + '_hdnParenttwardgrpid').value = result[0].TREATED_WARD_GROUP_ID;
                                document.getElementById('' + ctrlcom + '_hdnParenttwardgrpname').value = result[0].TREATED_WARD_GROUP_NAME;

//                                GetAsync(
//                                    "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Link_Precondition",
//                                    { UMR_NO:result[0].PARENT_UMR_NO},
//                                    function (JData) {
//                                    },
//                                    function (jqXHR, textStatus, errorThrown) {
//                                    });

                                document.getElementById('ctl00_ContentPlaceHolder1_ucParentIP_hdn_preCond').value = "WOMEN^^^" + result[0].PARENT_UMR_NO;
                            }
                            if (result[0].CONSULTANT != '') {
                                document.getElementById('' + ctrlcom + '_hdnPreAdvanceAmt').value = result[0].PRE_ADVANCE;
                                AssignPrimaryDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].SPECIALIZATION_ID, result[0].SPECIALIZATION_NAME);
                            }
                               if(form_name=="ADMN")
                               {
                                   document.getElementById('<%=hdnpatient_type.ClientID %>').value=result[0].PATIENT_TYPE_ID;
                                   if(result[0].IS_MLC=='Y')
                                    {
                                    $(".stoast").toastText("Info",'MLC Patient !',5,2);
                                    }
                                    if (result[0].PATIENT_TYPE_ID == '1') {
                                        document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup_txtSearchControl').disabled = true;
                                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_CmpLookup').disabled = true;
                                        document.getElementById('' + ctrlcom + '_uccorporate_btnCmpReg').disabled = true;
                                        document.getElementById('' + ctrlcom + '_uccorporate_btnRefLetter').disabled = true;
                                        document.getElementById('' + ctrlcom + '_uccorporate_ucRefLetterNo_txtSearchControl').disabled = true;
                                        document.getElementById('lk_btn_ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo').disabled = true;
                                         var type = '<%=Request.QueryString["Type"] %>';                             
                              
                                         if (type == "Pre")
                                           {
                                               OnPagePreAdmnValidations();
                                           }
                                           else
                                            {
                                              OnPageValidations();
                                            }
                                    }

                                     Get_Emergency_Dtls(result[0].PATIENT_ID);
                               }
                        }
                    }
                   else {
                        document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                    SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));

						if(document.getElementById('' + ctrlcom + '_umrPatientDetails_hdnIsRefDtlsDisable').value=='YES')
                        {
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').className = 'Gray';
                        }
                        else
                        {
                              if (document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value == '1') {
                             GetNonAsync(
                        "GridService.asmx/Get_Default_Values",
                        {},
                        function (data) {

                            if (data.d.length > 0) {

                                var ref_by = jQuery.parseJSON(data.d[0]);
                                var ref_source = jQuery.parseJSON(data.d[1]);
                                var ref_to = jQuery.parseJSON(data.d[2]);

                                var adress;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value = ref_by[0].REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenText').value = ref_by[0].REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = ref_by[0].REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = ref_by[0].MOBILE_PHONE;
                                document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = ref_by[0].REFRL_ID;

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

                                document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = adress
                                document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value = ref_by[0].AREA_ID;

                                   document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = "";

                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value = ref_source[0].CAT_REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenText').value = ref_source[0].REFERAL_CATEGORY_NAME;
                                $('#'+ ctrlcom + '_ucReferal_hdncattype_id').val(ref_source[0].CAT_REFRL_SOURCE_ID);


                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value = ref_to[0].REFERED_TO_REFERAL_NAME;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value = ref_to[0].REFERED_TO_REFRL_ID;
                                document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenText').value = ref_to[0].REFERED_TO_REFERAL_NAME;

                                var Source = document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value;
                                var Name = document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value;
                       
                                var ReferedTo = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').value;
                       
                                var Ref_id =  document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname__hiddenID').value;
                                var ReferedTo_id = document.getElementById('' + ctrlcom + '_ucReferal_ucReferedto__hiddenID').value;
                                var ReferalClass = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').value;
                                var Refrl_class_id = document.getElementById('' + ctrlcom + '_ucReferal_ucrfrlsrc__hiddenID').value;
                                var Cat_type_id = document.getElementById('' + ctrlcom + '_ucReferal_hdncattype_id').value;
                                var Address = document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value;
                                var Phone = document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value;
                                var id = document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value;
                                var pat_rfrl_dtl_id = '0';
                                var RefArea_Id =  document.getElementById('' + ctrlcom + '_ucReferal_hdnrefareaid').value;
                                if (Cat_type_id == undefined || Cat_type_id == null || Cat_type_id == '')
                                { Cat_type_id = 0; }
                                var chksms = 'N';
                                var chkleter = 'N';

                                var Remarks = document.getElementById('' + ctrlcom + '_ucReferal_txtremarks').value;
                                var smstime = new Date().format('HH:mm:ss');
                                var smsDt="";
                                MaintainReferal_sourceid(Ref_id);
                                SelectedRowIndex = SelectedRowIndex == 0 ? 1 : SelectedRowIndex;
                                if (SelectedRowIndex == 1) {
                                    multiDimArrayR1(SelectedRowIndex, Source, Name, Ref_id, ReferalClass, Refrl_class_id, Address, Phone, id, pat_rfrl_dtl_id, RefArea_Id, ReferedTo_id, ReferedTo, chksms, chkleter, Remarks, Cat_type_id,smsDt);
                                }

                                $('#'+ ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').removeClass('red');
                                $('#'+ ctrlcom + '_ucReferal_ucrfrlsrc_txtSearchControl').removeClass('red');
                                $('#'+ ctrlcom + '_ucReferal_ucReferedto_txtSearchControl').removeClass('red');

                            }
                        },
                        function (jerror, jerrorstatus, errorThrown)
                        { });
							  }
                        }
     }
                }
               
                if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons") {/* Company setting Reg Doctor Required in consultation screen and Days for consideration */
                    $('#'+ ctrlcom + '_UCServices_hdnGender_ID').val(result[0].GENDER_ID);
                    $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val('0');
                    var age=result[0].AGE;
                    var age_split=age.split(",");
                
                    $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val(age_split[0]);
                    $('#'+ ctrlcom + '_UCServices_hdnCasulity').val(result[0].REG_TYPE_ID);
                    document.getElementById('<%=hdnpatient_type.ClientID %>').value=result[0].PATIENT_TYPE_ID;
                
                    var Pat_Type = result[0].PATIENT_TYPE_ID;
                    if( Pat_Type != ''){
                    if (Pat_Type == '2' || Pat_Type == '3'||Pat_Type == '4'|| Pat_Type == '5' || Pat_Type == '6'||Pat_Type == '7' || Pat_Type == '8'||   Pat_Type == '9'|| Pat_Type == '10')
                    {
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                        $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                    }/*Changed 0 to 2 by naresh*/
                    else {
                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = result[0].PATIENT_TYPE_ID;
//                        if( document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=='Y'){
//                            document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value= 1;
//                            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = true;
//                        }
//                        else{
//                            document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value= 0;
//                            document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = false;
//                        }
                        $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    }
                    }else{
                    
                       document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                        $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                    
                    }
                    if (getParameterByName('MODE') != 'VIEW') {
                     if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                        BindConsultReq(result[0].Doctor_ID);
                        }
//                        GetAsync(
//                            "Private/FrontOffice/OpBilling/OPConsultation1.aspx/Company_Precondition",
//                            { PatientId: PatientID,UMR_NO:_umr_no,CMPNY_ID:0 },
//                            function (JData) {
//                            },
//                            function (jqXHR, textStatus, errorThrown) {
//                            }); 

                            var oprefltrfor = "";
                            if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP"){
                                document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_chkOPBill').checked = true;
                                oprefltrfor = "OPB";
                            }
                            else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
                                document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_chkCons').checked = true;
                                oprefltrfor = "OPC";
                            }

                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_CmpLookup_hdn_preCond').value="0^PATIENTCMP^" + PatientID + "^";
                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ucRefLetterNo_hdn_preCond').value="^^^^" + 0 + "^" + _umr_no + "^^^"+oprefltrfor;

                        set_contextKey = 'PATIENT';
                    }
                    var hdnRegDoctorReq = $('#<%=hdnRegDoctorRequired.ClientID %>').val();
                    if (hdnRegDoctorReq == "True") {
                        var RegDoctorDays = $('#<%=hdnRegShowDocDays.ClientID %>').val();
                        var RegDt = result[0].REGISTRATION_DT;
                        var NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        if (NoofDays > RegDoctorDays) {
                        }
                        else {
                            AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                        }
                    }
                }
            }
            else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OP") {
                var patid = result[0].PATIENT_ID;
                if (document.getElementById('' + ctrlcom + '_hdnView').value == 'REG') {
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UmrNo;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UmrNo;
                    document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnTranUMRNO').value = result[0].UmrNo;
                    $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
                }
                if (document.getElementById('' + ctrlcom + '_hdnView').value == 'VIEW_OP') {
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UmrNo;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UmrNo;
                    $('#'+ ctrlcom + '_umrPatientDetails_hdnReg_id').val(result[0].REGISTRATION_ID);
                    AssignReferalsInfo(patid);
                    AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                }
                $('#'+ ctrlcom + '_hdnpat_id').val(result[0].PATIENT_ID);
                $('#'+ ctrlcom + '_UCServices_hdnGender_ID').val(result[0].GENDER_ID);
                $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val('0');
                var age=result[0].AGE;
                var age_split=age.split(",");
                $('#'+ ctrlcom + '_UCServices_hdnPat_Age').val(age_split[0]);
                $('#'+ ctrlcom + '_UCServices_hdnCasulity').val(result[0].REG_TYPE_ID);
                document.getElementById('<%=hdnpatient_type.ClientID %>').value=result[0].PATIENT_TYPE_ID;
                var Pat_Type = result[0].PATIENT_TYPE_ID;
                if( Pat_Type != ''){
                if (Pat_Type == '2' || Pat_Type == '3'||Pat_Type == '4'|| Pat_Type == '5' || Pat_Type == '6'||Pat_Type == '7' || Pat_Type == '8'||   Pat_Type == '9'|| Pat_Type == '10')
                {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                    $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                }/*Changed 0 to 2 by naresh*/
                else {
                    document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = result[0].PATIENT_TYPE_ID;
//                    if( document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnISOSP').value=='Y'){
//                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value= 1;
//                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = true;
//                    }
//                     else{
//                        document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value= 0;
//                        document.getElementById('ctl00_ContentPlaceHolder1_uccorporate_ddlPaymentBy').disabled = false;
//                    }
                    $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
                    $('#'+ ctrlcom + '_UCServices_divrptDispatch').val('2');
                }
                }
                else{
                 document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value = 0; 
                    $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').addClass('red');
                
                
                }
                if (document.getElementById('' + ctrlcom + '_hdnView').value != 'VIEW_OP') {/* Company setting Reg Details Required in Transaction screen and Days for consideration */
                    var IsRegReq = $('#<%=hdnIsRegDtlsReq.ClientID %>').val(); /*Registration Details Required in Transaction Forms*/
                    var RegReferalDays =  $('#<%=hdnRegRefDays.ClientID %>').val();
                    if (IsRegReq == "Yes") {
                     var NoofDays=0;
                        var RegDt = result[0].REGISTRATION_DT;
                        if(RegDt==''||RegDt==undefined||RegDt==""){
                            NoofDays=0;
                        }
                        else
                        {
                            NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        }
                        if (NoofDays <= RegReferalDays) {
                            AssignReferalsInfo(patid);
                            AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                        }
                        else {
                            document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral').value = '1';
                            document.getElementById('' + ctrlcom + '_ucReferal_ucreferalname_txtSearchControl').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtrefaddr').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal_txtRefPhone').value = '';
                            document.getElementById('' + ctrlcom + '_ucReferal__hdnID').value = '0';
                             SetReferalContextKey(document.getElementById('' + ctrlcom + '_ucReferal_ddlreferral'));
                        }
                    }                    
                    var hdnRegDoctorReq = document.getElementById('' + ctrlcom + '_hdnRegDoctorRequired');
                    if (hdnRegDoctorReq.value == "True") {
                        var RegDoctorDays = document.getElementById('' + ctrlcom + '_hdnRegShowDocDays').value;
                        var RegDt = result[0].REGISTRATION_DT;
                        var NoofDays=0;
                         if(RegDt==''||RegDt==undefined||RegDt==""){
                            NoofDays=0;
                        }                        
                        NoofDays = Math.round(Math.ceil(((new Date()).getTime() - (new Date(RegDt)).getTime())) / (1000 * 60 * 60 * 24));
                        if (NoofDays > RegDoctorDays) {
                            $('#'+ ctrlcom + '_UcOdrPsyn_txtSearchControl').val('');
                            $('#'+ ctrlcom + '_UcOdrPsyn__hiddenText').val('');
                            $('#'+ ctrlcom + '_UcOdrPsyn__hiddenID').val('');
                        }
                        else {
                            AssignConsultantDoctor(result[0].Doctor_ID, result[0].CONSULTANT, result[0].CONSULTANT_CD, result[0].Department_ID, result[0].Department_Name);
                        }
                    }
                    if (document.getElementById('' + ctrlcom + '_hdnAppsync').value == "true") {
                    BindBillingRequisitions();
                    }
                }
                $('#'+ ctrlcom + '_ucReferal_ddlreferral').removeClass('red');
                $('#'+ ctrlcom + '_uccorporate_ddlPaymentBy').removeClass('red');
            }            
        }
        if (form_name=='OP') {
            if(result[0].DOCTOR_PAS_NO != undefined && result[0].DOCTOR_PAS_NO != null && result[0].DOCTOR_PAS_NO != ''){
                 document.getElementById('' + ctrlcom + '_UCServices_hdnDoctrPasNo').value= result[0].DOCTOR_PAS_NO;
            }
            else{
                document.getElementById('' + ctrlcom + '_UCServices_hdnDoctrPasNo').value= '';
            }
        }
        if (form_name=='HISAPPT') {
            BindAppointmentDetails('NEW',result);
            var patid = result[0].PATIENT_ID;
            AssignReferalsInfo(patid);
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OPCNCL") {
            BindBillCnclData();
            OnPageValidationBillCancell();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE") {
            BindoutStndgDueData();
            OnPageValidation();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund") {
            BindRefundDueData();
            OnPageValidation();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT") {
            BindPostDscntDueData();
            var admnNO= document.getElementById('<%=hdnUAdmnNO.ClientID %>').value;
            if(admnNO==''||admnNO==undefined||admnNO==null){admnNO='';}
            document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value=admnNO;
            OnPageValidation();
        }
        if(document.getElementById('<%=hdnDocName.ClientID %>').value =="OpBillAssesment"){
            BindBillCnclData();
            BindPrevAssesmentDetails();
            EstimationBillDetails();
            EstimationQuestionDetails();
            EstimationAddressDetails();
        }
         if(document.getElementById('<%=hdnDocName.ClientID %>').value =="AssesmentMerge"){
            BindBillCnclMergeData();
        }
        if(document.getElementById('<%=hdnDocName.ClientID %>').value =="PreAssessmentBills"){
            BindAdtEstData();
        }
        if(form_name=='ADVTRAN')
        {
            Previous_Advance_Grid(result[0].UmrNo);
             OnPageValidation();
        }
        if(form_name=='TO_ADVTRAN')
        {
            Previous_Advance_Grid_TO(result[0].UmrNo);
        }
        if (document.getElementById('<%=hdnFormName.ClientID %>').value == 'OP' || document.getElementById('<%=hdnFormName.ClientID %>').value == "Cons") {
            var cmp_Id = document.getElementById('' + ctrlcom + '_uccorporate_CmpLookup__hiddenID').value;
            var Pat_Type = document.getElementById('' + ctrlcom + '_uccorporate_ddlPaymentBy').value;
            if (Pat_Type == '2' || Pat_Type=='5' || Pat_Type=='8') {
                document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'Y';
                FirstRowShowCmpAmts();
                EnableCmpInfo();
            }
            else {
                FirstRowHideCmpAmts();
                DisableCmpInfo();
                document.getElementById('' + ctrlcom + '_UCServices_hdnCorpPat').value = 'N';
            }
            if (parseInt(cmp_Id) > 0 && Pat_Type == '2') {
                DivCorporate.style.display = "block";
                DivCorpColors.style.display = "block";
            }
            else {
                DivCorporate.style.display = "none";
                DivCorpColors.style.display = "none";
             }
            if (getParameterByName('MODE') != 'VIEW_OP') {
                ServicesAutoContextKey();
            }
        }
        if(document.getElementById('<%=hdnDocName.ClientID %>').value == "OP" || document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons"){
            $('#'+ ctrlcom + '_hdnpat_id').val(result[0].PATIENT_ID);
            $('#' + ctrlcom + '_UCServices_hdnpatienttokenno').val(result[0].TOKEN_NO);
            onExtendedDisplayValues();
            if(document.getElementById('<%=hdnDocName.ClientID %>').value == "Cons")
            { OnPageValidation();}
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ConsTransfer") {
            if (getParameterByName("MODE") != "VIEW") {
                BindPackageBillsList(result);
            }
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "OPPKGBILL") {
            if (getParameterByName("MODE") != "VIEW") {
                BindPkgBillData();
            }
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value  == "ADMN") {
            OnchangeStatus();onExtendedDisplayValues();
            notapplicablevalidation();
            Get_Advance_Related_data();
        }
        if (document.getElementById('<%=hdnDocName.ClientID %>').value  == "CREF") {
            ChkRefLetDetails();
        }
        if(form_name=='ADVTRAN')
        {
            OnPageValidation();
        }
        if(form_name=='Cons' && document.getElementById('' + ctrlcom + '_ReceiptControl2_hdnOPDState').value!='')
          //   if (ctl00_ContentPlaceHolder1_chk_old.checked == false) {
            {
                 if (document.getElementById('' + ctrlcom + '_UCServices_hdnallowconsservice').value.toUpperCase() == "TRUE") {

                AllowAdminCharges();
       //   }
            }
            }
        document.getElementById('<%=hdnIsUmrSelection.ClientID %>').value='Y';
        if(form_name=='MULTIPLEBILLS')
        {         
            GetPatentBills();
            var admn_no = document.getElementById('' + ctrlcom + '_umrPatientDetails_ucbill__hiddenID').value;
            $('#'+ ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').removeClass('lookuptextbox red');
            if(admn_no>0){
            $('#'+ ctrlcom + '_umrPatientDetails_ucbill_txtSearchControl').removeClass('lookuptextbox red');
            }
            else{
            $(".stoast").toastText("Info","Please Select Bill # ", 3, 2);
            }
            GetNonAsync(
        "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInsurancesbillsBILL_NO",
        { admn_no: admn_no },
        function (data) {
            $('[id*=tblmultiins] tr:has(td)').remove();
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
                if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                                sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                                sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].CITY_NAME, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMAIL_ID, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION, sdata[i].CITY_ID,
                                 sdata[i].STATE_ID, sdata[i].COUNTRY_ID, 0, sdata[i].PATIENT_INS_ID, sdata[i].PH_FIRST_NAME, sdata[i].ADDRESS1, sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, PinZip, sdata[i].OFFICE_PHONE, sdata[i].ADDRESS2, Name, idprof, ID_PROOF_ID, PRE_AUTH_AMOUNT, APRVL_AMOUNT, District_name, 0,sdata[i].CLAIM_ID
                                 );
                renderUIDis(jDataval);
            }
            $('table[id*=tblmultiins] tr:has(td) div').css('display', 'block');
                if (getParameterByName("MODE") == 'VIEW') {
                $('table[id*=tblmultiins] tbody').find('[id*=imagetd]').css('display', 'none');
                $("[id$=tblmultiins] th").filter(':not(:has(table th))')[0].style.display='none';
                }
        },
        function () {
        });
        }
        else if(form_name=='PREAUTH')
        {
            var admn_no = $('[id*=umrPatientDetails_ucPreAdmUmr_txtSearchControl]').val();
            GetAsync(
        "Private/Corporate/Changes/CorpMultipleIns.aspx/GetSavedInsurances",
        { admn_no: admn_no },
        function (data) {
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
                if (inslevel == 1) { inslevel = "Primary"; } if (inslevel == 2) { inslevel = "Secondary"; } if (inslevel == 3) { inslevel = "Territory"; }
                var InsPerc = sdata[i].CMP_PER.replace('.', '');
                var PatPerc = sdata[i].PAT_PER.replace('.', '');
                var PinZip = sdata[i].ZIPCODE;
                var Name = sdata[i].PH_FULL_NAME;
                var PRE_AUTH_AMOUNT = sdata[i].PRE_AUTH_AMOUNT;
                var APRVL_AMOUNT = sdata[i].APRVL_AMOUNT;
                var District_name = sdata[i].DISTRICT_NAME;
                var jDataval = AddUpdateInscmp(i + 1, sdata[i].INS_COMPANY_NAME, sdata[i].TPA_COMPANY_NAME, sdata[i].INS_COMPANY_ID, inslevel, sdata[i].INSURANCE_LEVEL, sdata[i].PLAN_NAME, InsPerc, PatPerc, sdata[i].PH_SSN, sdata[i].POLICY_NO, sdata[i].POLICY_MEMBER_ID, sdata[i].POLICY_GROUP_ID,
                                sdata[i].RELATION_NAME, sdata[i].RELATION_ID, POLICY_EXPIRY_DT, sdata[i].PH_FIRST_NAME, sdata[i].PH_MIDDLE_NAME, sdata[i].PH_LAST_NAME, sdata[i].GENDER_NAME, sdata[i].PH_GENDER_ID, dob,
                                sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].AREA_ID, sdata[i].CITY_NAME, sdata[i].ZIPCODE, sdata[i].OFFICE_PHONE, sdata[i].MOBILE_PHONE, sdata[i].EMAIL_ID, sdata[i].EMPLOYER_NAME, sdata[i].EMPLOYER_LOCATION, sdata[i].CITY_ID,
                                 sdata[i].STATE_ID, sdata[i].COUNTRY_ID, 0, sdata[i].PATIENT_INS_ID, sdata[i].PH_FIRST_NAME, sdata[i].ADDRESS1, sdata[i].ADDRESS1, sdata[i].AREA_NAME, sdata[i].CITY_NAME, sdata[i].STATE_NAME, sdata[i].COUNTRY_NAME, PinZip, sdata[i].OFFICE_PHONE, sdata[i].ADDRESS2, Name, idprof, ID_PROOF_ID, PRE_AUTH_AMOUNT, APRVL_AMOUNT, District_name
                                 );
                renderUIDis(jDataval);
            }
            $('table[id*=tblmultiins] tr:has(td) div').css('display', 'block');
        },
        function () {
        });
        }
        

        return false;
    }
     $.fn.toastText = function (title, text, wait, cid) {
                wait = 20;

                var cid = cid || 1;
                var t_class = [];
                t_class[0] = "";
                t_class[1] = "sucess";
                t_class[2] = "info";
                t_class[3] = "warning";
                t_class[4] = "danger";

                var t_icon = [];
                t_icon[0] = "";
                t_icon[1] = "icon-check-1";
                t_icon[2] = "icon-info-1";
                t_icon[3] = "icon-cancel-alt";
                t_icon[4] = "icon-erase";


                if ($(this).length > 0)
                    $(this).remove();

                $(".toastdiv").append("<div class=\"alertprompt " + t_class[cid] + "\" ><span class=\"title\"><i class=" + t_icon[cid] + "></i>" + title + "</span> <span class=\"message\">" + text + "</span> <button class=\"alertclose\">X</button></div>");

                $(".alertprompt").fadeIn(300, function () {
                    setTimeout(function () {
                        $(".alertprompt").animate({ 'margin-right': '-500px' }).fadeOut(1000, function () {
                            $(".alertprompt").remove();
                        });
                    }, wait * 1000);
                }).animate({ 'margin-top': '10px' });

                $(".alertprompt button").bind("click", function () {

                    $(this).parent().remove();

                });


            };
    function onChangeAdmSelection(input) {
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN") {
            if (input.RESULT == undefined) {
               document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value = input["ADMN_NO"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenID').value = input["ADMN_ID"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenText').value = input["_lktext"];
                 if (document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value != '') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
               }
            }
            else {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenID').value = input.RESULT.ADMN_ID;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenText').value = input["_lktext"];
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value != '') {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
               }
            }
            GetNonAsync(
                "Private/FrontOffice/DayCare/AddNewAdmission.aspx/Get_Pat_AdmissionDetails",
                { admnID: document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenID').value },
                function (data) {
                var pat_ref_data=$.parseJSON(data.d[1])[0];
                    var result = $.parseJSON(data.d[0]);
                    /*Discharge Validation*/
                    if((document.getElementById('' + ctrlcom + '_hdnAdmType').value == 'changeAdmID') && (result[0].DSCHRG_STATUS=='D' || result[0].DSCHRG_STATUS=='W'))
                    {
                    $(".stoast").toastText("Info", "System Should Not Allow Change Admission Details When The Patient Has Discharged!..", 5, 2);
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value='';
                    return false;
                    }
                    document.getElementById('<%=hdnUmrNo.ClientID %>').value = result[0].UMR_NO;
                    document.getElementById('<%=hdnRegID.ClientID %>').value = result[0].REGISTRATION_ID;
                    document.getElementById('<%=hdnRegDt.ClientID %>').value = result[0].REGISTRATION_DT;
                    document.getElementById('<%=hdnPatientid.ClientID %>').value = result[0].PATIENT_ID;
                    document.getElementById('<%=hdnbillid.ClientID %>').value = result[0].BILL_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = result[0].UMR_NO;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = result[0].REGISTRATION_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').value = result[0].PATIENT_ID;
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = result[0].BILL_ID;
                     document.getElementById('ctl00_hdnDMSUmrNo').value=result[0].UMR_NO;
                    document.getElementById('ctl00_hdnDMSAdmnNo').value=result[0].REGISTRATION_NO;
                    PreAdmnPatDetails(data, 'CHNG');
                },
                function () {
                    OnCallError();
                });
        }

	else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "Refund"||document.getElementById('<%=hdnDocName.ClientID %>').value == "POSTDSCNT" || document.getElementById('<%=hdnDocName.ClientID %>').value == "OUTSTDNGDUE") {
 		    if (input.RESULT == undefined) {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value = input["ADMN_NO"];
                document.getElementById('<%=hdnUAdmnNO.ClientID %>').value = input["ADMN_NO"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenID').value = input["ADMN_ID"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenText').value =input["ADMN_NO"];
                document.getElementById('<%=hdnIPAdmnno.ClientID %>').value=input["ADMN_NO"];
                 if (document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value != '') {
                    document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
		         }
		        umrno= input["UMR_NO"];
            }
            else {

                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenID').value = input.RESULT.ADMN_ID;
                document.getElementById('<%=hdnUAdmnNO.ClientID %>').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission__hiddenText').value = input["_lktext"];
                document.getElementById('<%=hdnIPAdmnno.ClientID %>').value=input["_lktext"];
                if (document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').value != '') {
                   document.getElementById('' + ctrlcom + '_umrPatientDetails_ucAdmission_txtSearchControl').style.border = "1px solid rgb(190, 190, 190)";
		        }
		      umrno= input.RESULT.UMR_NO;
	       }

//              GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
//                    { umr_no: umrno},
//                        function (jdata) {
//                            if (jdata.d[0] != null) {
//                            Patient_Valdations(jdata.d[0][0]);
//                            }
//                        }, function () {
//               });




 var sp_name='';
 sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
 var parameters='';
 var parametervalues='';
 parameters = "IP_UMR_NO";
 parametervalues =umrno;
            
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
            
            Patient_Valdationsforall(jdata.d[0][0]);
           
            }


            
        }, function () {
    });




  			
        }
    }
        function onPreAdmnUMRforins(input) {
        var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value ;
        if (input!='' && input!=undefined ||input!=null) {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = input.PRE_ADMN_NO;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = input.ADMN_ID;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = input.PRE_ADMN_NO;

                preadmnid = input.ADMN_ID;
                umrno=input.UMR_NO;
            }
          
            if (input == undefined ) {
             <% if (Request.QueryString["PREADMN_ID"] != null)
                   {   %>
                     
               preadmnid = <%=Request.QueryString["PREADMN_ID"] %>;
                umrno = document.getElementById('<%=hdnpreadmnumrno.ClientID %>').value;
                <% } %>
            }
           
//                     GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
//                    { umr_no: umrno},
//                        function (jdata)  {
//                            if (jdata.d[0] != null) {
//                            Patient_Valdations(jdata.d[0][0]);
//                            }
//                        }, function () {
//                    });
  var sp_name='';
 
   if(form_name=="OP" ||form_name=="Cons"){
      sp_name="PR_GETALL_PATIENT_DET_OP";}
       else if (form_name=="ADMN" || form_name=="ER"){
   sp_name="PR_GETALL_PATIENT_DET_IP";
   
   }
   else{
   sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
   
   }

   var parameters='';
          var parametervalues='';
            parameters = "IP_UMR_NO";
                 parametervalues =umrno;
            
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
             if(form_name=="OP" ||form_name=="Cons"){

              Patient_Valdationsop(jdata.d[0][0]);
             }
             else if(form_name=="ADMN" || form_name=="ER"){
             
             Patient_Valdationsforip(jdata.d[0][0]);
             
             }else{
            Patient_Valdationsforall(jdata.d[0][0]);
            }
            if(form_name=="ADMN" || form_name=="ER"){
               var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                 if (_ispatcat == 'true') {
            patientcat();
            }}


            }
        }, function () {
    });
        }

    function onPreAdmnUMR(input) {
    var form_name=document.getElementById('<%=hdnDocName.ClientID %>').value ;
     var preadmnid;
       var umrno;
         
        if (document.getElementById('<%=hdnDocName.ClientID %>').value == "ADMN"||document.getElementById('<%=hdnDocName.ClientID %>').value == "ESTBILL") {
            if (input!= undefined && input.ID == undefined && input.RESULT==undefined) {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = input["ADMN_ID"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = input["_lktext"];
                preadmnid = input["ADMN_ID"];
                   umrno=input.UMR_NO;
            }
            else if (input!= undefined){
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = input.RESULT.ADMN_ID;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = input["_lktext"];
                preadmnid = input.RESULT.ADMN_ID;
                umrno=input.RESULT.UMR_NO;
            }
          
            if (input == undefined ) {
             <% if (Request.QueryString["PREADMN_ID"] != null)
             {%>
               preadmnid = <%=Request.QueryString["PREADMN_ID"] %>;
               umrno = document.getElementById('<%=hdnpreadmnumrno.ClientID %>').value;
            <% } %>
            }
//           
//                     GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
//                    { umr_no: umrno},
//                        function (jdata)  {
//                            if (jdata.d[0] != null) {
//                            Patient_Valdations(jdata.d[0][0]);//1
//                            }
//                        }, function () {
//                    });
  var sp_name='';
 
   if(form_name=="OP" ||form_name=="Cons"){
      sp_name="PR_GETALL_PATIENT_DET_OP";}
       else if (form_name=="ADMN" || form_name=="ER"){
   sp_name="PR_GETALL_PATIENT_DET_IP";
   
   }
   else{
   sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
   
   }

   var parameters='';
          var parametervalues='';
            parameters = "IP_UMR_NO";
                 parametervalues =umrno;
            
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
             if(form_name=="OP" ||form_name=="Cons"){

              Patient_Valdationsop(jdata.d[0][0]);
             }
             else if(form_name=="ADMN" || form_name=="ER"){
             
             Patient_Valdationsforip(jdata.d[0][0]);
             
             }else{
            Patient_Valdationsforall(jdata.d[0][0]);
            }
            if(form_name=="ADMN" || form_name=="ER"){
               var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                 if (_ispatcat == 'true') {
            patientcat();
            }}


            }
        }, function () {
    });
          
        }
        else if (document.getElementById('<%=hdnDocName.ClientID %>').value == "PREAUTH") {
        if (input!= undefined && input.ID == undefined && input.RESULT==undefined) {
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = input["ADMN_ID"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = input["_lktext"];
                preadmnid = input["ADMN_ID"];
                   umrno=input.UMR_NO;
            }
            else if (input!= undefined){
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value = input["_lktext"];
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value = input.RESULT.ADMN_ID;
                document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value = input["_lktext"];
                preadmnid = input.RESULT.ADMN_ID;
                umrno=input.RESULT.UMR_NO;
            }
          
            if (input == undefined ) {
             <% if (Request.QueryString["PREADMN_ID"] != null)
                   {   %>
                     
               preadmnid = <%=Request.QueryString["PREADMN_ID"] %>;
                umrno = document.getElementById('<%=hdnpreadmnumrno.ClientID %>').value;
                <% } %>
            }
//           
//                     GetNonAsync("PatientRegistration.asmx/pat_banner_Valdatation_data",
//                    { umr_no: umrno},
//                        function (jdata)  {
//                            if (jdata.d[0] != null) {
//                            Patient_Valdations(jdata.d[0][0]);
//                            }
//                        }, function () {
//                    });
  var sp_name='';
 
   if(form_name=="OP" ||form_name=="Cons"){
      sp_name="PR_GETALL_PATIENT_DET_OP";}
       else if (form_name=="ADMN" || form_name=="ER"){
   sp_name="PR_GETALL_PATIENT_DET_IP";
   
   }
   else{
   sp_name="PR_GETALL_PATIENT_DET_OP_NEW";
   
   }

   var parameters='';
          var parametervalues='';
            parameters = "IP_UMR_NO";
                 parametervalues =umrno;
            
    GetNonAsync("Private/FrontOffice/OPD/opdsessionst.aspx/pat_banner_Valdatation_dataGridDataBind",
    { parameters: parameters,parametervalues:parametervalues,sp_name:sp_name},
        function (jdata) {
            if (jdata.d[0] != null) {
             if(form_name=="OP" ||form_name=="Cons"){

              Patient_Valdationsop(jdata.d[0][0]);
             }
             else if(form_name=="ADMN" || form_name=="ER"){
             
             Patient_Valdationsforip(jdata.d[0][0]);
             
             }else{
            Patient_Valdationsforall(jdata.d[0][0]);
            }
            if(form_name=="ADMN" || form_name=="ER"){
               var _ispatcat = $('[id*=hdnallowtariffslcn]').val().toLowerCase();
                 if (_ispatcat == 'true') {
            patientcat();
            }}


            }
        }, function () {
    });
        }
    }
    function ClearPatientBanerControl() {
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup_txtSearchControl').value = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblPatName').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblgender').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblagedob').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblrefdoc').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lbloccupation').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblfathername').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblmothername').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblcmpname').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblpatientcategory').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr_txtSearchControl').value='';
        $('#'+ ctrlcom + '_hdnUmrNo').val('0');
        $('#'+ ctrlcom + '_hdnRegID').val('0');
        $('#'+ ctrlcom + '_hdnRegDt').val('0');
        $('#'+ ctrlcom + '_hdnbillid').val('0');
        $('#'+ ctrlcom + '_ReceiptControl2_HdnHealthcardid').val('0');
        $('#'+ ctrlcom + '_ReceiptControl2_HdnHealthcardno').val('0');
        $('#'+ ctrlcom + '_hdnPatientID').val('0');
        $('#'+ ctrlcom + '_hdnAuthID').val('0');
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenID').value = '0';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_Umrlookup__hiddenText').value = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptRegID').value = '0';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptPatientid').value = '0';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptBillid').value = '0';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPatOptions_hdnOptUmrNo').value = '0';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenText').value='';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_ucPreAdmUmr__hiddenID').value='0';
        document.getElementById('<%=lblpattype.ClientID %>').innerHTML = '';
        document.getElementById('<%=lbloccupation.ClientID %>').innerHTML = '';
        document.getElementById('<%=lblrespperson.ClientID %>').innerHTML = '';
        document.getElementById('' + ctrlcom + '_umrPatientDetails_lblMobileNo').innerHTML='';
        document.getElementById('<%=hdnValidationFailed.ClientID %>').value='';
         $('#<%=img.ClientID %>').attr('src', "");
          $('#ptype-flag').removeClass();
                $('#ptype-flag').addClass('ptype-flag');
                $('.vipsource').css('display','none')
    }
//    function onCheck(){
//    var _con = $('input[id*=radiousertran]:checked').val()
//     if (_con == 0 || _con == null || _con == undefined) { _con = 1; }    
//      GetAsync(
//       "Private/FrontOffice/OpBilling/OPConsultation1.aspx/AddPreConditionUmr",
//       { con: _con },
//      function (JData) {
//      },
//      function (jqXHR, textStatus, errorThrown) {        
//      });
//    }
 
 function ClosehealthcardsPopUp() {
    $('#Healthcardpopup').hide();
    return false;
}

function clearHealthcardGrid() {
    $("table[id*=gvHealthCraddet] tr:has(td)").each(function () {
        $(this).remove();
    });
}
</script>
<link rel="stylesheet" type="text/css" media="screen" href="<%=ResolveClientUrl("~/Assets/w2ui/w2ui-1.5.rc1.css") %> " />
<asp:ScriptManagerProxy ID="smp" runat="server">
    <Scripts>
        <asp:ScriptReference Path="~/Assets/w2ui/w2ui.min.js" />
        <asp:ScriptReference Path="~/Assets/w2ui/w2grid.js" />
    </Scripts>
</asp:ScriptManagerProxy>
<asp:HiddenField ID="hdnPatientid" runat="server" />
<asp:HiddenField ID="hdnpatcatid" runat="server" />
<asp:HiddenField ID="hdnRegID" runat="server" />
<asp:HiddenField ID="hdnRegDt" runat="server" />
<asp:HiddenField ID="hdnUmrNo" runat="server" />
<asp:HiddenField ID="hdnDocName" runat="server" />
<asp:HiddenField ID="hdnFormName" runat="server" />
<asp:HiddenField ID="hdnbillid" runat="server" />
<asp:HiddenField ID="hdndtfmt" runat="server" />
<asp:HiddenField ID="hdnflag" runat="server" />
<asp:HiddenField ID="hdndocmode" runat="server" />
<asp:HiddenField ID="hdnmlcumrno" runat="server" />
<div class="panel-divW pat-opbanner" style="border: 0px;" id="banner">
    <fieldset id="banercolourcorp" class="field-set">
        <legend class="title" style="padding: 0px !important">
            <div class="ptype-flag" id="ptype-flag">
                <i></i>
                <div class="vipsource">
                    <div class="vsource">
                    </div>
                    <div class="vremarks">
                    </div>
                </div>
            </div>
            <div class="ptype">
                <table border="0" cellpadding="0" cellspacing="0" class="FormsCtrl">
                    <tr>
                        <td align="left">
                            <asp:Label class="lblbold" Text="UMR#" ID="lblumr" runat="server"> </asp:Label>
                        </td>
                        <td id="tdadmn" runat="server">
                            <UCLookup:UCSearch ID="Umrlookup" runat="server" CallbackFn="OnUmrSelection" OnBlurRequired="true"
                                IsPrefixLenRequired="true" AutoExtraCols="PATIENT_NAME,MOBILE_NO,DOB-D" IsReqExtraColsinAuto="true" />
                            <asp:TextBox ID="txtUmrno" ReadOnly="true" onkeydown="return false" runat="server"
                                Visible="false"></asp:TextBox>
                        </td>
                        <td id="tdbillno" runat="server" style="display: none" align="left">
                            <asp:Label class="lblbold" Text="BILLNO#" ID="Label1" runat="server"> </asp:Label>
                        </td>
                        <td id="tdopbillslookup" style="display: none" runat="server">
                            <UCLookup:UCSearch ID="ucBills" runat="server" CallbackFn="OnBill" OnBlurRequired="true" />
                        </td>
                        <td id="tdbillnolookup" style="display: none" runat="server">
                            <UCLookup:UCSearch ID="ucbill" runat="server" CallbackFn="OnBillSelection" OnBlurRequired="true" />
                        </td>
                        <td align="left" id="tdlblpreadmn" style="display: none; float: left;" runat="server">
                            <asp:Label ID="lbladmin" runat="server" Text="PreAdmn#" CssClass="lblbold" Style="margin-left: 10px;"></asp:Label>
                        </td>
                        <td style="display: none; float: left;" id="tdpreadmn" runat="server">
                            <UCLookup:UCSearch Title="PRE_ADM_UMR" ID="ucPreAdmUmr" runat="server" CallbackFn="onPreAdmnUMR" />
                        </td>
                        <td style="display: none" id="tdUmrAdmission" runat="server">
                            <UCLookup:UCSearch Title="Admission" ID="ucAdmission" runat="server" CallbackFn="onChangeAdmSelection" />
                        </td>
                        <td>
                            <input type="button" id="imgbtnNewReg" value="&nbsp;" style="display: none" title="New Registration"
                                class="tb_Btn quickadd tooltip" onclick="return NewRegistration();">
                        </td>
                    </tr>
                </table>
            </div>
            <label id="lblHcardDisplay" title="Health Card" class="su-vcard icohcard" onclick="return healthcarddetails(this);"
                style="display: none">
            </label>
        </legend>
        <UCPatOpt:UCPatOpt ID="ucPatOptions" runat="server" />
        <div class="oppat-photo">
            <div class="viewphoto">
                <asp:Image ID="img" runat="server" ImageUrl="~/Assets/img/photo.png" />
            </div>
        </div>
        <div class="opdetails">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="viewtable">
                <tr id="trviewdata" style="display: none;">
                    <td align="left" class="lbl-name">
                        Bill&nbsp;#
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblbillno" runat="server" TabIndex="5"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Bill&nbsp;Dt
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblbilldt" runat="server" TabIndex="3"></asp:Label>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Name
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblPatName" runat="server" TabIndex="5"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Age/DOB
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblagedob" runat="server" TabIndex="3"></asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Gender
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblgender" runat="server" TabIndex="3"></asp:Label>
                        <asp:HiddenField ID="hdnGenderID" runat="server" />
                        <asp:HiddenField ID="hdnReg_id" runat="server" />
                    </td>
                    <td align="left" class="lbl-name">
                        Occupation
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbloccupation" runat="server" TabIndex="3"> </asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left" class="lbl-name">
                        Prescribed Doctor
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblrefdoc" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        <asp:Label ID="lblrespperson" runat="server"></asp:Label>
                        Name
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblfathername" runat="server"></asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Maiden Name
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblmothername" runat="server"></asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Patient Category
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblpatientcategory" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <%-- <td align="left" class="lbl-name">
                        IP No
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbladmnno" runat="server"></asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        DOA
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lbladmndt" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Primary Doctor
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblprimarydoc" runat="server"></asp:Label>
                    </td>--%>
                    <td align="left" class="lbl-name">
                        Patient Type
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblpattype" runat="server"></asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Company Name
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblcmpname" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Mobile #
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblMobileNo" runat="server"> </asp:Label>
                    </td>
                    <td align="left" class="lbl-name">
                        Health Card #
                    </td>
                    <td align="center" class="lbl-col">
                        :
                    </td>
                    <td align="left" class="lbl-val">
                        <asp:Label ID="lblhcno" runat="server"></asp:Label>
                    </td>
                </tr>
            </table>
        </div>
        <div id="healthcardlist" style="display: none" runat="server" class="masking">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="width: 750px; height: 500px; margin-left: -375px;
                margin-top: -250px;">
                <div class="pop-header">
                    <h1>
                        <asp:Label ID="Label4" runat="server" Text="Health Card Details"></asp:Label>
                    </h1>
                    <input type="button" id="bthealthcancel" class="button" value="&times;" onclick="return Closehealthcard();" />
                </div>
                <div class="pop-body grd" id="divhealthcardlist" style="height: 464px; border: 0px;">
                </div>
            </div>
        </div>
        <div class="masking" id="Healthcardpopup">
            <div class="cmask">
            </div>
            <div class="clientpopup" style="width: 1000PX; height: 435PX; margin-left: -491PX;
                margin-top: -237px;">
                <div class="pop-header">
                    <h1>
                        Health Card Details
                    </h1>
                    <asp:Button buttonaction="cancelButton" ID="img1" runat="server" CssClass="cbutton"
                        OnClientClick="return ClosehealthcardsPopUp();" Text="&times;" />
                </div>
                <div class="pop-body" style="padding: 0px 0px 0px 0px; overflow: hidden;">
                    <div style="float: left; width: 100%; margin: 0.5%;">
                        <div id="divhealthcardGrid" style="overflow: auto; height: 350PX; border: #c5c5cd 1px solid;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
    <asp:HiddenField ID="hdnAlloweOP" runat="server" />
    <asp:HiddenField ID="HdnHealthcardid" runat="server" />
    <asp:HiddenField ID="HdnHealthcardno" runat="server" />
    <asp:HiddenField ID="hdnAlwmtplAdmn" runat="server" />
    <asp:HiddenField ID="hdnCNCLPatID" runat="server" />
    <asp:HiddenField ID="hdnreservebedid" runat="server" />
    <asp:HiddenField ID="hdnDeptId" runat="server" />
    <asp:HiddenField ID="hdnDeptName" runat="server" />
    <asp:HiddenField ID="hdnAlowAdmnToOP" runat="server" />
    <asp:HiddenField ID="hdnconsultentdoctorid" runat="server" />
    <asp:HiddenField ID="hdnfrgncatgryid" runat="server" />
    <asp:HiddenField ID="hdnisnewborn" runat="server" />
    <asp:HiddenField ID="hdnNewAdmnID" runat="server" />
    <asp:HiddenField ID="hdnIsallowed" runat="server" />
    <asp:HiddenField ID="hdnpatient_type" runat="server" />
    <asp:HiddenField ID="hdnoldregtpaid" runat="server" />
    <asp:HiddenField ID="hdnregexpdt" runat="server" />
    <asp:HiddenField ID="hdndocreqstatus" runat="server" />
    <asp:HiddenField ID="hdnpatareaid" runat="server" />
    <asp:HiddenField ID="hdnstopcons" runat="server" />
    <asp:HiddenField ID="hdnOspRegReq" runat="server" />
    <asp:HiddenField ID="hdnOspRegPatID" runat="server" />
    <asp:HiddenField ID="hdnBillRevNo" runat="server" />
    <asp:HiddenField ID="hdncncsn_rule_id" runat="server" />
    <asp:HiddenField ID="hdndocholdstatus" runat="server" />
    <asp:HiddenField ID="hdnadmntypeids" runat="server" />
    <asp:HiddenField ID="hdnVerifymonileno" runat="server" />
    <asp:HiddenField ID="hdnbasecurrancy" runat="server" />
    <asp:HiddenField ID="hdnisvisible" runat="server" />
    <asp:HiddenField ID="hdnPatID" runat="server" />
    <asp:HiddenField ID="hdnucadmnno" runat="server" />
    <asp:HiddenField ID="hdnselfinves" runat="server" />
    <asp:HiddenField ID="hdnValidationFailed" runat="server" />
    <asp:HiddenField ID="hdnBillNo" runat="server" />
    <asp:HiddenField ID="hdndschrgstatus" runat="server" />
    <asp:HiddenField ID="hdnRegShowDocDays" runat="server" />
    <asp:HiddenField ID="hdnRegDoctorRequired" runat="server" />
    <asp:HiddenField ID="hdnIsRegDtlsReq" runat="server" />
    <asp:HiddenField ID="hdnRegRefDays" runat="server" />
    <asp:HiddenField ID="hdnIsUmrSelection" runat="server" />
    <asp:HiddenField ID="hdnbannerPrint" runat="server" />
    <asp:HiddenField ID="hdndaysvalidatemobno" runat="server" />
    <asp:HiddenField ID="hdnIsNewReg" runat="server" />
    <asp:HiddenField ID="hdnapmntfromdt" runat="server" />
    <asp:HiddenField ID="hdnapmnttodt" runat="server" />
    <asp:HiddenField ID="hdnpreadmnumrno" runat="server" />
    <asp:HiddenField ID="hdnadmnno" runat="server" />
    <asp:HiddenField ID="hdnIPAdmnno" runat="server" />
    <asp:HiddenField ID="hdnReg_Doc" runat="server" />
    <asp:HiddenField ID="hdnAdvAmount" runat="server" />
    <asp:HiddenField ID="hdnOp_Doc" runat="server" />
    <asp:HiddenField ID="hdnCons_Doc" runat="server" />
    <asp:HiddenField ID="hdnAdmn_Doc" runat="server" />
    <asp:HiddenField ID="hdntotalAdv" runat="server" />
    <asp:HiddenField ID="hdnutilizeAmt" runat="server" />
    <asp:HiddenField ID="hdnbalanceAmt" runat="server" />
    <asp:HiddenField ID="hdnDOB" runat="server" />
    <asp:HiddenField ID="hdnUAdmnNO" runat="server" />
    <asp:HiddenField ID="hdnisrenewal" runat="server" />
    <asp:HiddenField ID="hdnIsMedClg" runat="server" />
    <asp:HiddenField ID="hdnRectypeRequire" runat="server" Value='N' />
    <asp:HiddenField ID="hdnIsRefDtlsDisable" runat="server" />
    <asp:HiddenField ID="hdnPatientDBFlg" runat="server" />
    <asp:HiddenField ID="hdncashlmtamt" runat="server" />
    <asp:HiddenField ID="hdntariffid" runat="server" />
    <asp:HiddenField ID="hdnisosp" runat="server" />
    <asp:HiddenField ID="hdnhealthcardeligibleamt" runat="server" />
    <asp:HiddenField ID="hdnhealthdepencyid" runat="server" />
    <asp:HiddenField ID="hdnhealthcard_id" runat="server" />
</div>
