using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for PARAMETER_NAME
/// </summary>
public class PARAMETER_NAMES
{
    public const string DB_DATE_FORMAT = "DB Documents Date Format";
    public const string DATE_FORMAT = "Documents Date Format";
    public const string TIME_FORMAT = "TIME FORMAT";
    public const string Org_Tariff_Name = "org Tariff Name";
    public const string POST_DISCOUNT_APPROVAL_ALERT = "POST DISCOUNT APPROVAL ALERT";
    public const string RegDts_req_in_trans_forms = "Is Registration Details Required In Transaction Forms";
    public const string Days_Consider_For_Reg_Details = "Days Consider For Reg.Details";
    public const string Need_To_Show_Reg_Doctor = "Need To Show Reg Doctor";
    public const string Days_Consider_To_Show_Reg_Doctor = "Days Consider To Show Reg Doctor";
    public const string ADT_IN_OP = "Allow admitted patient in OP billing";
    public const string Company_Expire_Alert = "Company Expire Alert";
    public const string IS_ASSESMENT_REQUIRED = "IS ASSESMENT REQUIRED";
    public const string ASSESMENT_SMS_REMAINDER_DAYS = "ASSESMENT SMS REMAINDER DAYS";
    public const string ASSESMENT_SMS_REMAINDER_AFTER_DAYS = "ASSESMENT SMS REMAINDER AFTER DAYS";
    public const string NO_CNS_LIMIT = "No of Consultations Limit required";

    public const string Is_ref_doc_in_reg = "Is referal doctor required in registration";
    public const string Osp_Billing_Required = "Osp Billing Required";
    public const string DISPLAY_PAGE = "Page Display";


    public const string UPDATE_REQ_APPROVAL = "Update Required in Result Entry Approval";
    public const string RADIOLOGY_DEPT_ID = "Radiology_Dept_Id";
    public const string IS_CENTRALIZED = "Is Centralized";
    public const string REG_FEE = "Registration Fee";
    public const string AUTOCODE = "Autocode Generation";
    public const string ISSAMPLEENTRYNEEDED = "Is Sample Entry Needed";
    public const string COMPANYNAME = "Companyname";
    public const string COMPANY_ADDRESS = "Company Address";
    public const string COMPANY_LOGO = "Companylogo";
    public const string REGVALIDATION = "Registration Validation";
    public const string CNSLTVALIDATION = "Consultation Validity";
    public const string TIMESTOREFUND = "No Of Times To Give Refunds";
    public const string NO_POST_DISCOUNTS = "No Of Times To Give Post Discount";
    public const string OPSERCANCELDAYS = "Op Service Cancellation Days";
    public const string CONSCANCELDAYS = "Consultation Cancel Days";
    public const string MOBILEINOP = "Is Mobile No.Mandatory In Op Billing";
    public const string MISCINOPBILL = "Allow Miscellaneous In Op Billing";
    public const string CONSINOPBILL = "Allow Consultations In Op Billing";
    public const string CONSPATREGVALD = "Consider Registration Validity For Patients";
    public const string CONFIRMSAVE = "While Saving Record Ask For Conformation";
    public const string ISHEADERVISIBLE = "Is Header Visible";
    public const string ISLOGOVISIBLE = "Is Logo Visible";
    public const string ISSPECIMENVISIBLE = "Is Specimen Visible";
    public const string ISMETHODVISIBLE = "Method Settings For Print";
    public const string ISBARCODEGENERATE = "Is  BarCode Generate Automatically";
    public const string ISRESULTENTRYUCBILLS = "Result Entry Applicable For Any Billing Finished Investgation Is";
    public const string NOOFQUESTIONS = "No of Questions";
    public const string IS_SHOW_PRINT_DATE = "Print By And Date";
    public const string IS_AUDIT_REQUIRED = "Is Audit Required";
    public const string IS_AUDIT_OPTIONS = "Is Audit Options";
    public const string LAB_REPORT_WHEN_DUE = "OP Lab Report When Due";
    public const string IPRES_SERVICEWISE = "IP Result entry Service.No wise Required";
    public const string REG_Cncl_Days = "Registration Cancelation Days";
    //  public const string OLD_BILL_DT = "Save old bill dt for IP final bill";

    public const string PKG_CNS_TO_OSP = "Allow to post pkg consultation to OSP patient in OP billing";
    public const string DOUBLE_PRINT_DCCC = "Double print when Due/Concession/Credit/Cheque payment";


    public const string ASSY_COMPARISSION = "Is Investigation comparision Required.";
    public const string ASSY_COMPARISSION_OPBILLING = "Investigations Comparisions In Op Billing Is Required";
    public const string ADVANCE_MANDATORY = "Advance Mandatory for IP.";

    public const string DUE_REMAINDER = "Due Remainders";
    public const string SERVICE = "Service";
    // public const string CONSULTATION = "Consultation";
    public const string INVESTIGATION = "Investigation";
    public const string AlwIMRConcsn_Service = "Alwimrconcession_Service";
    public const string AlwIMRConcsn_Consultation = "Alwimrconcession_Consultation";
    public const string AlwIMRConcsn_Investigation = "Alwimrconcession_Investigation";
    public const string AlwIMRConcsn_Professional = "Alwimrconcession_Professional";
    public const string RMChrg_Auto = "Room Charge Automation";
    public const string Apply_Credit_Limit = "Apply Credit Limit";
    public const string lab_specimin_visible = "Speciminvisible";
    public const string EditRate_InOpBill = "Is Edit Rate In Op Bill";
    public const string USER_CONC_CREDIT_LIMITS = "Is Alllow User Wise Concession/creditlimit";
    public const string PWD_TYPE = "Pwd Type";
    public const string IS_PWD_REQUIRED = "Password Conditions Req";
    public const string PWD_EXP_DAYS = "Pwd Exp Days";
    public const string MSG_POPULATE_DAYS = "Msg Populate Days";
    public const string PWD_MIN_LENGTH = "Pwd Mini Length";
    public const string PWD_VALIDATION = "Password Validation";
    public const string Need_QuickLink_Module_Desc = "Need QuickLink With Module Description";
    public const string Result_Entry_Setting = "Result Entry Settings";
    //  public const string IsEdtReqMiscSrv = "IsEdtReqMiscSrv";
    public const string Allow_All_Bed_Types = "Show All Bedtypes In Bed Chart";
    public const string Pkg_cons_charge_setting = "Package Consultation Charge Settings";
   // public const string Charge_All_Doctors = "Charge For All Doctors";
    public const string Employee_Age = "Employee Age";
    public const string MaxDecForAllAmts = "MaxDecForAllAmts";
    public const string LAB_GTT = "GlucoseTest";
    public const string SMS_1 = "SMS USer Id";
    public const string SMS_2 = "SMS Password";
    public const string SMS_3 = "SMS Sender Id";
    public const string ACCREDITATION_REQUIRED = "Accreditation Required";

    public const string SERVICE_TAX_REQUIRED = "Service Tax For Corporate";
    public const string SERVICE_TAX_FLAT_OR_INDIVIDUAL = "Service Tax Required";
    public const string IS_CORP_TARIFF_REQ_IN_IPSRVS = "Is Corporate Tariff Required in IP Services";
    public const string IS_PHARMACY_INTEGRATION_REQUIRED = "Is Pharmacy Integration Required";
    public const string Pharmacy_Module_ID = "Pharmacy Module ID";
    public const string IsAllergiesFromMedispan = "Is Allergies From Medispan";
    public const string NoOfCopies = "NoOfCopiesPerprint";

    //for dispatch dashboard
    public const string ISMARGINTOP = "ISMARGINTOP";
    public const string ISMARGINBOTTOM = "ISMARGINBOTTOM";
    public const string ISHEADERHEIGHT = "ISHEADERHEIGHT";
    public const string ISFOOTERHEIGHT = "ISFOOTERHEIGHT";
    public const string ISMARGINTOPUNCHECK = "ISMARGINTOPUNCHECK";
    public const string ISMARGINBOTTOMUNCHECK = "ISMARGINBOTTOMUNCHECK";
    public const string ISHEADERHEIGHTUNCHECK = "ISHEADERHEIGHTUNCHECK";
    public const string ISMARGINLEFT = "ISMARGINLEFT";
    public const string ISMARGINRIGHT = "ISMARGINRIGHT";
    public const string ISFOOTERHEIGHTUNCHECK = "ISFOOTERHEIGHTUNCHECK";
    public const string ISHTMLXAXIXS = "HtmlrptXaxis";
    public const string ISHTMLYAXIXS = "HtmlrptYaxis";
    //End
    
    /*labgrid*/
    public const string Is_DashBoard_Display_Day_records = "Is_DashBoard_Display_Day_records";
    public const string Lab_DashBoard_Display_records = "Lab_DashBoard_Display_records";
    /**/
    public const string Tabs_Required_or_not = "Tabs Required or not";
    public const string Critical_Values = "Show Critical Values";
    public const string WARD_AUTOMATION_REQUIRED = "Ward Automation Required";
    public const string Apply_Credit_Limit_While_Indent = "Apply Credit Limit while indenting";
    public const string Indenting_Time_Interval = "Indenting Time Interval";
    public const string Allow_Concession_For_Outside_Service_In_Op = "Allow Concesson For Outside Service In Op";
    public const string Lab_No_Reqd = "Show Lab No";
    public const string SampleAcknowledgement = "Sample Acknowledgement";
    public const string PASSWORD_LOCK_ATTEMPTS = "Password Lock Attempts";
    public const string PWD_HISTORY = "Password History";
    public const string VerificationUpdate = "Verification Update Required";
    //public const string ApprovalUpdate = "Approval Update Required";
    public const string BarCodePrint = "BarCode Print Required";
    public const string Doctor_Prescription_Required = "Doctor Prescription Required";
    public const string Is_Pre_Admission_Mandatory = "Is Pre Admission Mandatory";
    public const string IP_Result_View_Without_Approval = "IP Result View Without Approval";
    public const string QMS_REQD = "QMS Req";
    public const string Allow_Service_Entry_For_Srv_Call_Off_For_Designation = "Allow Service Entry For Service Call Off For The Designation";
    public const string Enable_Inbox_alert = "Enable Inbox alert";
    public const string Drug_Administrative_Charges = "Drug Administrative Charges";
    public const string Casuality_Credit_Limit_For_OP = "Casuality Credit Limit For OP";
    public const string IPSampleAcknowledgement = "IP Sample Acknowledgement";
    public const string New_Born_Percentage = "New Born Percentage";
    public const string Allow_Refund_Amount_Up_To_Receipt_Amount = "Allow Refund Amount Up To Receipt Amount";
    public const string Is_MyAccounts_Integration_Required = "Is MyAccounts Integration Required";
    public const string Allow_Discharge_Date_Manually_In_IP_Discharge = "Allow Discharge Date Manually In IP Discharge";
    public const string Allow_Print_in_Result_View = "Allow Print in Result View";
    //public const string Emergency_Slot1 = "Emergency Slot1";
    //public const string Emergency_Slot2 = "Emergency Slot2";
    //public const string Emergency_Slot3 = "Emergency Slot3";
    public const string Consider_Emergency_Slot_Setup = "Consider Emergency Slots";
    public const string Is_Sample_Billing_Pending_For_Approval = "Is Sample Billing Pending For Approval";
    public const string Show_IP_Option = "Show IP Option";
    public const string No_Of_Days_Estimated_Bills_Required_In_Sample_Registration = "NO OF DAYS ESTIMATED BILLS REQUIRED IN SAMPLE REGISTRATION";
    //    public const string Both_Print_and_Prescription_at_Saving_Time = "Both Print and Prescription at Saving Time";
    public const string Is_Upload_Download_Req = "Is Upload/Download Req";
    // public const string verify_results = "Verify Results";
    //  public const string Is_Show_New_Req = "Is Show New Requirements";
    public const string IS_REQ_PRE_PRINTED_BARCODE = "Pre Printed Barcode";
    public const string Is_Refund_Direct_Approval = "Is Refund Direct Approval";
    public const string Is_Save_Alert_Required = "Is Save Alert Required";

    public const string Is_Formulary_Required = "Is Formulary Required";

    // public const string Only_Balanced_Patients_In_Receiption = "Only Balanced Patients In Receiption";
    //  public const string Default_Details_For_Clients = "Default Details For Clients";
    //  public const string Any_Center_Payment_Option_For_Due = "Any Center Payment Option For Due";
    //public const string SRS_And_RCS_No_Of_Pages_Required = "SRS And RCS No Of Pages Required";
    public const string Bed_Transfer_Request = "Bed Transfer Request";
    public const string Is_Screen_Mask_Required = "Is Screen Mask Required";
    //  public const string Apply_Barcode_Rules_According_To_Slims = "Apply Barcode Rules According To Slims";
    public const string Is_Extended_Display_Req = "Is Extended Display Req";
    public const string Is_User_Session_Tracking = "Is User Session Tracking";
    public const string Is_Nurse_Bed_Vacate_Required = "Is Nurse Bed Vacate Required";
    public const string REGDISPLAYNAME = "Display Name In Registration";
    public const string Discharge_Summary_Auto_Approve = "DischargeSummaryAutoApprove";
    public const string DSCHRG_SUM_HSPTL_ADD_DATA = "DSCHRG_SUM_HSPTL_ADD_DATA";
    
    public const string NEW_USER_LOCK_DAYS = "New User lock days";
    public const string History_Details_Req_In_Days = "History Details Req In Days";
    public const string IsBillingUser = "Is Billing User";
    public const string Cancelation_Auto_Refund = "Cancelation Auto Refund";
    public const string CREDIT_LIMIT_EXPIRED = "CREDIT_LIMIT_EXPIRED";
    public const string Default_Nationality = "Default Nationality";
    public const string Request_Approval = "Request Approval";
    //  public const string Bed_Transfer = "Bed Transfer";
    public const string Allow_Consultations_InOPBilling = "Allow Consultations In Op Billing";
    public const string Req_App_Letter_ADT_Ward_Varies = "Req Approval Letter When Admitted & Billing Ward Differs";
    public const string Block_Other_Beds_OnPat_Single_Ward_Demand = "Block Other Beds Of Admitted ward in case of Single ward in Demand";
    public const string Registration_Billing_Concession_Applicable = "Registration and Billing Concession Applicable";
    public const string Allow_Registration_Expiry_Patients_In_Op_Billing = "Allow Registration Expiry Patients In Op Billing";
    public const string Base_Currency = "Base Currency";
    // added by rama on 15-Oct-2018
    public const string Admission_Currency = "Admission Currency";
    public const string DND_Enabled_By_Default = "DND Enabled By Default";
    public const string Family_Reference_Selection_Consultent_And_Referals_Enabled_By_Default = "Family Reference Selection Consultent And Referals Enabled By Default";
    public const string Allow_due_in_reg_and_con = "Allow due in reg & con";
    public const string Service_Cancellation_Before = "Service Cancellation Before";
    public const string Apply_Company_Approval = "Apply Company Approval";
    public const string Is_Mlc_Police_Intimation_Received_or_Not = "Is Mlc Police Intimation Received or Not";
    public const string Funds_Validity_days = "Funds Validity Days";
    public const string IS_REQ_NST_PAT_LABLES = "IS REQ NST PAT LABLES";
    public const string Test_Occurency_Required_In_Billing = "Test Occurency Required In Billing";
    public const string Allow_History_Details_In_Billing = "Allow History Details In Billing";
    public const string Allow_Adimited_Patients_In_Op_Billing = "Allow Adimited Patients In Op Billing";
    public const string Allow_Acknowledge_Print_for_ImrSrevice = "Sample Collection for IP";
    public const string IsProfessionalChargesEdit = "IsProfessionalChargesEdit";
    public const string IsConsultationEdit = "IsConsultationEdit";
    public const string Allow_Mltple_admns_umrno = "Allow Multiple Admissions under same UmrNo";
    public const string Allow_Admission_Date_To_change = "Allow Admission Date To Change";
    public const string ER_MobileNo_Mandatory = "ER_MobileNo_Mandatory";
    public const string IsHealthCardReq = "IsHealthCardReq";
    public const string WINDOW_POPUP = "WINDOW_POPUP";
    public const string REG_FEE_AUTO_FILL_IN_CASH = "REG FEE AUTO FILL IN CASH";
    public const string KIN_NAME_MANDATARY = "KIN_NAME_MANDATARY";
    public const string IS_MAIL_MANDATARY = "IS_MAIL_MANDATARY";
    public const string MINATES = "MINATES";
    public const string EXPRIRYTIME = "EXPRIRYTIME";
    public const string IS_ALLOW_CASH = "IS_ALLOW_CASH";
    public const string DYNAMIC_IP_BILL_PRINT_SETUP = "DYNAMIC_IP_BILL_PRINT_SETUP";
    public const string APPSYNC = "APPSYNC";
    public const string FUTUREAPPOINTMENTREQUIRED = "FUTUREAPPOINTMENTREQUIRED";
    public const string CONSULTATION_COUNT_IN_DAY = "CONSULTATION_COUNT_IN_DAY";
    public const string EmployeeRelativeDetails = "EmployeeRelativeDetails";
    public const string DEFAULT_CONSULTATION = "DEFAULT_CONSULTATION"; 

    public const string Is_OTP_Change_Password = "Is OTP in Change Password";
    public const string Is_OTP_Forgot_Password = "Is OTP in Forgot Password";

    public const string Is_applicable_Service_charges_percentage_amt = "Is applicable Service charges percentage amt";
    public const string COVERT_OP_SERVICES_AS_IP_SERVICES = "COVERT OP SERVICES AS IP SERVICES";
    public const string No_Of_Supply_Bills = "No Of Supply Bills";

    public const string Required_provision_to_delete_package_includes = "Required provision to delete package includes";
    public const string CARD_TRANSACTION_OTP_REQUIRED = "CARD TRANSACTION OTP REQUIRED";
    public const string REQ_SHIFTHRANDSUB_FOR_SHIFTLOG = "Require Shift Handover/Submittion before Shift Login";
    public const string IS_SENT_TO_BILL_WITHOUT_DSUMMARY = "IS_SENT_TO_BILL_WITHOUT_DSUMMARY";
    public const string mobile_number_required = "mobile number required";
    public const string IS_AUTOMATIC_VISIT = "Is Automatic Visit";

    public const string After_Company_Expiry_Alert = "After Company Expire Alert";
    public const string Corporate_Credit_Limt_Percentage_Amt = " Corporate Credit Limit Percentage Amt";
    public const string Is_Appointment_Slots_Required = "Is Appointment Slots Required";
    public const string Is_Dischagre_Request = "Is Dischagre Request";
    public const string Req_Multiple_currency = "Required Multiple Currency";
    public const string BIND_ER_PATIENTS_BY_DEFAULT = "Bind ER Patients By Default";// ADDED BY RAMA ON 20190522
    public const string REQ_AUTOBILL_FOR_ERPATIENTS = "Required Autobill of Orders for ER Patient";// ADDED BY RAMA ON 20190530
    public const string CONSIDER_SYNCRECORDS_IN_REPORT = "IS_CONSIDER_SYNC_RECORDS_IN_REPORT";// ADDED BY RAMA ON 20190530
    public const string COMPANY_REFERAL_VALIDITY_EXPIRING_DAYS = "Company Referal validity expiring Days";
    public const string REFERAL_VALIDITY_EXPIRING_DAYS = "REFERAL VALIDITY EXPIRING DAYS";
    public const string FREE_FOLLOWUP_VISIT_REQUIRED_FOR_PACKAGE = "Free followup visit required for Package";
    public const string CREDIT_CARD_SERVICE_CHARGE = "Credit Card service charge";
    public const string additinal_services_Discount_considering_days = "additinal services Discount considering days";
    public const string DONOR_MINIMUM_WEIGHT = "";
    public const string DONOR_DATA_CHANGES_WITHIN_DAYS = "DONOR_DATA_CHANGES_WITHIN_DAYS";
    public const string BLOOD_BAGS_EXPIRY_BEFORE_DAYS = "BLOOD_BAGS_EXPIRY_BEFORE_DAYS";
    public const string MINIMUM_AGE_IN_YEARS = "MINIMUM_AGE_IN_YEARS";
    public const string Minimum_Days_Bw_Previews_And_Current_Donation = "Minimum_Days_B/w_Previews_And_Current_Donation";
    public const string package_consultation_considering_days = "package consultation considering days";
    public const string NO_OF_VISITOR_PASSES = "NO_OF_VISITOR_PASSES";
    public const string NO_OF_VEHICLE_PASSES = "NO_OF_VEHICLE_PASSES";
    public const string NO_OF_ATTEND_PASSES = "NO_OF_ATTEND_PASSES";
    public const string Receipt_Amount_In_Words = "Receipt Amount In Words";
    public const string FBMaxDecimals = "FBMaxDecimals";
    public const string ConsiderDecimals = "ConsiderDecimals";

    public const string Time_Min = "Time Min";
    public const string Corporate_approval_Limt_Percentage_Amt = "Corporate_approval_Limt_Percentage_Amt";
    public const string Admission_check_In = "Admission check In";
    public const string Admission_check_Out = "Admission check Out";
    public const string ER_Holding_Time = "Er Holding Time";
    public const string Minimum_Days_Blood_Bag_Reserved = "Minimum_Days_Blood_Bag_Reserved";
    public const string Refund_Amount = "Refund_Amount";
    public const string IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED = "IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED";
    public const string Max_Indents_Per_Day = "Max_Indents_Per_Day";
    public const string Max_Items_Per_Day = "Max_Items_Per_Day";
    public const string Luxury_Tax_Amount = "Luxury Tax Amount";
    public const string Is_Mobile_No_Mandatory = "Is Mobile No Mandatory";
    public const string Extended_Display_Window = "Extended Display Window";
    public const string Is_PAS_Integration_Req = "Is PAS Integration Req";
    public const string Company_Prcnt_Visibility = "Company Prcnt Visibility";
    public const string Rate_Editable_for_Phar_Items = "Rate Editable for Phar Items";
    public const string billing_aletrs_req_or_no = "Billing Alerts Required Or Not";
    public const string Default_Password = "Default Password";
    public const string Default_Transaction_Password = "Default Transaction Password";
    public const string Shift_Alert_per = "Shift_Alert_per";
    public const string Shift_Limit_amt = "Shift_Limit_amt";
    public const string NBM_HOURS = "NBM_HOURS";
    public const string BILLTYPEDISPLAYRECORDS = "BILLTYPEDISPLAYRECORDS";
    public const string REGTMANDATORY = "REGTMANDATORY";
    public const string AUTOINSERTSENDGLOCTION = "AUTOINSERTSENDGLOCTION";
    public const string IS_REQUIRED_QR_CODE_IN_PRINT = "Is Required QR Code In Print";
    public const string HISTO_REPORT_DATA = "HistoReportData";
    public const string IS_IMR_SRV_CANCEL_WHEN_SAMPLE_REJECTION = "IS_IMR_SRV_CANCEL_WHEN_SAMPLE_REJECTION";
    //SAMPLECOLLETION 
    public const string IS_REQUIRED_SAMPLE_COLLECTION_REPORT = "SAMPLE COLLECTION REPORT REQUIRED";
    public const string IS_REQUIRED_SAMPLE_COLLECTION_BARCD_PDF = "SAMPLE COLLECTION BARCODE PDF PRINT REQUIRED";
    public const string IS_REQUIRED_SAMPLE_COLLECTION_BARCD_ALERT_PRINT = "SAMPLE COLLECTION BARCODE ALERT PRINT REQUIRED";

    public const string FIRSTMIDDLELASTNAME = "FIRSTMIDDLELASTNAME";
    public const string FIRSTLASTNAME = "FIRSTLASTNAME";
    public const string Is_Dialosys_WardGroup = "Is_Dialosys_WardGroup";
    public const string IS_DIALOSYS_EQUIPMENT = "IS_DIALOSYS_EQUIPMENT";
    // public const string Dialysis_Dept = "DIALOSYS DEPARTMENT";
    public const string IS_PHYSIOTHERAPY_EQUIPMENT = "IS_PHYSIOTHERAPY_EQUIPMENT";
    public const string Is_Doctor_Solts_Required = "IS DOCTOR SOLTS REQUIRED";
    public const string Allow_Same_Consultant_OnSameDay = "Allow Same Consultant OnSameDay";
    
    public const string CONSULTANT_PREFIX_REQUIRED = "CONSULTANT PREFIX REQUIRED";
    public const string EMR_MIGRATION_ID = "EMR MIGRATION ID";
    public const string ORDERING_PHYSICIAN_LIMITED_DAYS = "ORDERING PHYSICIAN LIMITED DAYS";
    public const string ALLOW_DUE_IN_OPD_SCREEN = "ALLOW DUE IN OPD SCREEN";
    public const string ALLOW_BARCODE_PRINT_DIRECTLY = "ALLOW BARCODE PRINT DIRECTLY";
    public const string Service_Group_Type_Wise_Concession_Applicable = "Service Group/Type Wise Concession Applicable";

    public const string Food_Charges_part_Of_Room_Rent = "FCPORR";
    public const string Raise_Auto_Request_To_Dietician_For_The_New_Admitted_Patient = "RARTDFTNAP";
    public const string DIETARY_DEPARTMENT_REFERENCE_ID = "DDRI";
    public const string Is_Result_Processed_with_QC = "Is Result Processed with QC";
    public const string Mobile_No_Maximum_Digits = "Mobile No Maximum Digits";
    public const string Mobile_No_Minimum_Digits = "Mobile No Minimum Digits";
    public const string DIALIZER = "DIALIZER";
    public const string PATIENT_NEW_INFORMATION = "PATIENT NEW INFORMATION";
    public const string DAYS_FOR_HIC_ACTIVITY_SCHEDULE_REMAINDER = "DAYS FOR HIC ACTIVITY SCHEDULE REMAINDER";
    public const string DEFAULT_GRID_PAGE_SIZE = "DEFAULT GRID PAGE SIZE";
    public const string VACCINATION_FOR_NEW_EMPLOYEE = "VACCINATION FOR NEW EMPLOYEE";
    public const string Health_Checkup_Package_Dietory_Details_Include = "Health Checkup Package Dietory Details Include";
    public const string Autocompletion_Prefix_Length = "Autocompletion Prefix Length";
    public const string OTCHECKIN = "Ward To Ot Patient Mvmnt";
    public const string Days_to_validate_Verify_Mobile_No = "Days to validate Verify Mobile No";
    public const string Prescription_Print_Configuration_Setting = "Prescription Print Configuration Setting";
    public const string Consultation_Print_Settings = "Consultation Print Settings";

    public const string APPOINTMENT_CONTACT_NO = "Appointment Contact No";
    public const string EMERGENCY_CONTACT_NO = "Emergency Contact No";
    //  public const string Casuality_Duty_Doctor = "Casuality Duty Doctor";
    public const string Required_IP_Bill_Report_Handover_Details = "Required IP Bill Report Handover Details";
    public const string Cash_Credit_Limt_Percentage_Amt = "Cash Credit Limit Percentage Amt";

    public const string DISCHARGE_TIME = "DISCHARGE TIME";
    public const string ShowOrderInvestagation = "ShowOrderInvestagation";

    public const string TransctionPasswordSetting = "Transction_Password_Setting";
    public const string RequstforDctvstNoofDays = "Request For Doc Vst NoOf Days";
    public const string FOLLOWUP_PRESCRIPTION_REQUIRED = "FOLLOWUP PRESCRIPTION REQUIRED";
    public const string Create_Individual_Indent = "Create_Individual Indent";
    public const string Modify_ApprovedTrans_Days = "Modify_ApprovedTrans_Days";
    public const string Conformation_Message_Before_Getting_Reports = "Conformation Message Before Getting Reports";
    public const string Consultant_Mandatory_While_Saving_ER_Registration = "Consultant Mandatory While Saving ER Registration";
    public const string Require_Admn_Request_Approval_While_ERPatient_Conversion = "Require Admn.Request&Approval While ER Patient Conversion";
    public const string Claim_Req_For_OP = "Claim Req For OP";
    public const string CorpServiceDelete = "CorpServiceDelete";

    public const string PWD_COMPTY_ALPHABETS_CAPS = "Password Complexity Alphabets Capitals";
    public const string PWD_COMPTY_ALPHABETS_SMALLS = "Password Complexity Alphabets Smalls";
    public const string ALLOW_MULTIPLE_DISCHARGE_SUMMARIES = "Allow Multiple Discharge Summaries";
    public const string ALLOW_BED_ACKNOWLEDGEMENT_WITHOUT_ADVANCE = "ALLOW_BED_ACKNOWLEDGEMENT_WITHOUT_ADVANCE";
    public const string AUTOMATIC_BED_VACATE_TIME = "AUTOMATIC_BED_VACATE_TIME";
    public const string Reports_Date_Format = "Report Date Format";

    public const string Advance_Limit_Mandatory = "Advance_Limit_Mandatory";
    public const string Advance_Limit = "Advance_Limit";
    public const string ADVANCE_REACHING_ALERT = "ADVANCE_REACHING_ALERT";
    public const string FINALBILL = "FINALBILL";
    
    
    public const string CONSIDER_PHARMACY_CHARGES_BILLING_HEAD = "Consider Pharmacy Charges Billing Head";
    public const string DAYS_TO_BACK_ADMISSIONDT = "Days to back Admission dt";
    public const string ORDERSET_SERVICE_GROUP = "OrderSetSrvGroup";
    public const string Is_Consultant_Required_While_Posting_Service = "Is Consultant Required While Posting Service";

    public const string Is_Drug_Receiving_Mandatory = "Is Drug Receiving Mandatory";
    public const string Default_Due_Authorized = "Default Due Authorized";
    public const string Is_GLCD_Req = "Is GL Code Required";
    public const string Is_COGS_Req = "Is COGS Required";
    public const string IS_COLLECTION_POINT_REQD_IN_SAMPLE_COLLECTION = "Is Collection point reqd in sample collection";
    public const string RESULTVALUE_DISPLAY_WITH_COMPONENT_NAME_FOR_RADIOLOGY_REPORTS = "ResultValue Display With Component Name For Radiology Reports";
    public const string AMENDMENT_NOTE_DISPLAY_IN_REPORTS = "Amendment Note Display In Reports";
    public const string Is_Resultentry_doctor_required = "Is Resultentry doctor required(in saving)";
    public const string In_ResultApproval_Saving_Replace_Default_Doctor = "In ResultApproval Saving Replace Default Doctor";
    public const string RESULTENTRY_REBACK_WITH_COMPONENT_VALUES = "ResultEntry Reback with Component Values(Retest)";
    public const string RESULTAPPROVAL_AFTER_SAVING_TO_GET_PRINT = "ResultApproval after saving to get print";
    public const string IS_GET_ALL_SERVICES_FOR_ADD_TEST = "Is Get All Services For Add Test";
    public const string IS_GET_ALL_SERVICES_BASED_ON_BILL_NO = "Is Get All Services Based on bill No";
    public const string INDENT_WISE_LAB_BARCD = "INDENT_WISE_LAB_BARCD";
    public const string IMGDIPLAYINHTMLRPT = "IMGDIPLAYINHTMLRPT";

    public const string MO_SMO_DAYS = "MO_SMO_DAYS";
    public const string CMS_CMO_DAYS = "CMS_CMO_DAYS";
    public const string IS_ALLOW_TO_ZERO_PRICE_SERVICES = "IS_ALLOW_TO_ZERO_PRICE_SERVICES";
    public const string REQ_AUTO_CONSUMPTION_SERVICE = "REQ_AUTO_CONSUMPTION_SERVICE";
    
    public const string IS_ALLOW_TO_ZERO_PRICE_TESTS_FOR_BILLING = "IS_ALLOW_TO_ZERO_PRICE_TESTS_FOR_BILLING";
    public const string IS_ALLOW_PENDING_SERVICES = "IS_ALLOW_PENDING_SERVICES";
    public const string IS_ALLOW_ORDERING_PHYSICIAN = "IS_ALLOW_ORDERING_PHYSICIAN";
    public const string IS_ALLOW_AUTO_IP_FINAL_BILL_PAYMENT = "IS_ALLOW_AUTO_IP_FINAL_BILL_PAYMENT";
    public const string CommonSequence = "CommonSequence";
    public const string IS_ALLOW_BARCODE_FOR_TRANSACTION = "IS_ALLOW_BARCODE_FOR_TRANSACTION";
    public const string IS_GST_REQUIRED = "IS_GST_REQUIRED";
    public const string AllowPinelab = "AllowPinelab";
    public const string Allowadmnplan = "Allowadmnplan";
    public const string NurseOrdertimeSampleCollection = "NurseOrdertimeSampleCollection";
    public const string showpriceinindent = "showpriceinindent";
    public const string AllowPinlabforRefund = "AllowPinlabforRefund";
    public const string ENABLE_EMPASA = "ENABLE_EMPASA";
    public const string ALLOW_TARIFFCOVERED_SERVICESONLY = "ALLOW_TARIFFCOVERED_SERVICESONLY";
    public const string AUTO_SELECTED_IS_TREATED_DOCTOR = "AUTO_SELECTED_IS_TREATED_DOCTOR";
    public const string IS_ALLOW_SURGERYSERVICE = "IS_ALLOW_SURGERYSERVICE";
    public const string IS_SHOW_PATIENTCATEGORY = "IS_SHOW_PATIENTCATEGORY";
    public const string Apply_Credit_Limit_COR = "Apply_Credit_Limit_COR";
    public const string Credit_Limit_indenting_order = "Credit_Limit_indenting_order";
    public const string IsCorpTariffprioritywise = "IsCorpTariffprioritywise";
    public const string IS_BILLINGCOLUMN_EDITABLE = "IS_BILLINGCOLUMN_EDITABLE";
    public const string IS_ALLOW_MORE_THAN_BAMOUNT = "IS_ALLOW_MORE_THAN_BAMOUNT";
    public const string IS_SRVNAME_CD_AS_PER_TARIFF = "IS_SRVNAME_CD_AS_PER_TARIFF";
    // public const string IS_SERVICE_WITH_GST = "IS_SERVICE_WITH_GST";
    public const string IS_RENEWAL_REQUIRED = "IS_RENEWAL_REQUIRED";
    public const string LIMIT_AMOUNT_PANNO_BILLING = "Limit amount for capturing PAN# in Billing";// ADDED BY RAMA ON 20190530
    public const string IS_MAPPED_CURRENCY = "Is Mapped Currency";
    public const string IS_DISCHAGRE_REQUEST = "Is_Dischagre_Request";
    public const string CHK_PENDING_INDENTS = "CHK_PENDING_INDENTS";
    public const string ER_PATIENT_SEARCH = "ER_PATIENT_SEARCH";
    public const string MCI_DOCTOR_SEARCH = "MCI_DOCTOR_SEARCH";
    public const string Item_SaleRate_Required = "Item SaleRate Required";
    public const string All_Items_Required = "All Items Required";
    public const string Pkg_Items_Required = "Package Items Required";
    public const string Is_Medical_College = "Is_Medical_College";
    public const string MCI_MANUAL_AND_AUTO_PROCESS_DATA = "MCI_MANUAL_AND_AUTO_PROCESS_DATA";
    public const string Ms_Disc_req = "Ms_Disc_req";
    public const string DATE_FROM_YESTERDAY = "DATE_FROM_YESTERDAY";

    public const string TALLYLOCATIONWISEORNOT = "TALLYLOCATIONWISEORNOT";
    public const string GET_BOTH_TYPE_PATIENTS = "GET_BOTH_TYPE_PATIENTS";
    public const string IS_ENABLE_INDENT_ORDER_SET = "IS_ENABLE_INDENT_ORDER_SET";
    public const string IS_ENABLE_RURAL_BED_SEL = "IS_ENABLE_RURAL_BED_SEL";
    public const string IS_ENABLE_URBAN_BED_SEL = "IS_ENABLE_URBAN_BED_SEL";
    public const string NURSE_THUMB_REQUIRED = "NURSE_THUMB_REQUIRED";
    
    public const string NORMAL_DSCHRG_REQ_DREC_PENDING = "NORMAL_DSCHRG_REQ_DREC_PENDING";

    public const string IS_ENABLE_HSPTL_ADD_DATA = "IS_ENABLE_HSPTL_ADD_DATA";
    public const string IS_ENABLE_NURSE_ATTEN_SIGN = "IS_ENABLE_NURSE_ATTEN_SIGN";
    public const string IS_ENABLE_REPORT_HEADER = "IS_ENABLE_REPORT_HEADER";
    public const string IS_ENABLE_DIS_REPORT_HEADER_IMG = "IS_ENABLE_DIS_REPORT_HEADER_IMG";
    public const string IS_ENABLE_DIS_REPORT_FOOTER_IMG = "IS_ENABLE_DIS_REPORT_FOOTER_IMG";
    

    public const string IS_DOCTOR_REQUIRED = "IS_DOCTOR_REQUIRED";
    public const string IS_REFERAL_REQUIRED = "IS_REFERAL_REQUIRED";
    public const string CHK_ALL_BILLTRAN = "CHK_ALL_BILLTRAN";
    public const string Enable_Thumb = "Enable_Thumb";
    public const string Date_Of_Birth = "Date_Of_Birth";
    public const string CHK_POST_BW_SERVICES = "CHK_POST_BW_SERVICES";
    public const string CHK_ALLOW_ZERO_PRICE_IP = "CHK_ALLOW_ZERO_PRICE_IP";
    public const string CHK_ALLOW_TARIFF_OPTION_OP = "CHK_ALLOW_TARIFF_OPTION_OP";
    public const string CHK_ALLOW_TARIFF_OPTION_Delivery = "CHK_ALLOW_TARIFF_OPTION_Delivery";
    public const string Patient_category = "Patient_category";
    public const string Delivery_Patient_category = "Delivery_Patient_category";
    public const string CHK_SERVICE_PRICE = "CHK_SERVICE_PRICE";
    public const string ALLOW_SERVICE_ID = "ALLOW_SERVICE_ID";
    public const string PATIENT_TITLE = "PATIENT_TITLE";
    public const string REFERAL_POPULATE = "REFERAL_POPULATE";
    public const string IS_MONTHDATE_EDITABLE_DOB = "Is Month and Days Editable for DOB";
    public const string IS_DEFULT_REQURIED = "IS_DEFULT_REQURIED";
    public const string IS_DEFULT_MOTHERNAME = "IS_DEFULT_MOTHERNAME";
    public const string IS_EMAIL_REQUERED = "IS_EMAIL_REQUERED";
    public const string DEFAULT_STATE = "Default State";
    public const string CHK_ALLOW_ADV_IN_IMR = "CHK_ALLOW_ADV_IN_IMR";
    public const string IS_DISCOUNT_DIRECT_APPROVAL = "IS_DISCOUNT_DIRECT_APPROVAL";
    public const string IS_PRE_REFUND_DIRECT_APPROVAL = "IS_PRE_REFUND_DIRECT_APPROVAL";
    public const string REQ_AUTO_ADMISSION_FOR_DELIVERY = "Required Auto Admission for Delivery Information";
    public const string IS_SHOW_GST_IN_IPBILLS = "IS_SHOW_GST_IN_IPBILLS";
    public const string IS_ALLOW_BILL_ZERO_PRICE_SRV = "IS_ALLOW_BILL_ZERO_PRICE_SRV";
    public const string IS_ALLOW_ER_DASHBOARD_REFRESH = "IS_ALLOW_ER_DASHBOARD_REFRESH";
    public const string ALLOW_ZERO_RATE_FOR_SAVING = "ALLOW_ZERO_RATE_FOR_SAVING";
    public const string org_per_emp_per = "Company Tariff Required for admission saving";
    public const string CMP_TARIFF_SRVS_CNVTD = "CMP_TARIFF_SRVS_CNVTD";
    public const string SRV_PRICE_REQUIRED = "SRV_PRICE_REQUIRED";
    public const string EXPIRE_DATE_MANDATORY = "EXPIRE_DATE_MANDATORY";
    public const string ICD_CODE_MANDATORY = "ICD_CODE_MANDATORY";
    public const string ER_TO_IP_AUTO_BED_OCCUPIED = "ER_TO_IP_AUTO_BED_OCCUPIED";
    public const string IS_CREDIT_LIMIT_REQUIRED_IN_DRUG_ORDER = "IS_CREDIT_LIMIT_REQUIRED_IN_DRUG_ORDER";
    public const string ENABLE_REDCOLOR_PAT_CAT = "ENABLE_REDCOLOR_PAT_CAT";
    public const string CONCESSION_DISABLE = "CONCESSION_DISABLE";
    public const string DIS_SUM_PREPARAION_IP_FB_MANDATE = "DIS_SUM_PREPARAION_IP_FB_MANDATE";
    public const string DCITEM = "DCITEM";

    public const string USERMOREINFO = "USERMOREINFO";
    public const string IS_SAVE_PKG_SERVICESFROM_DB = "IS_SAVE_PKG_SERVICESFROM_DB";
    public const string IS_MANDATORY_SWIPING = "IS_MANDATORY_SWIPING";

    public const string IS_ADMNPLANSURGICAL_MANDATE = "IS_ADMNPLANSURGICAL_MANDATE";
    public const string IS_PKGCONVSION_MANDATE = "IS_PKGCONVSION_MANDATE";
    public const string IS_MOBILENUMBER_MANDATE = "IS_MOBILENUMBER_MANDATE";
    //public const string BTLOC = "BTLOC";
    public const string ECMODOCTOR = "ECMODOCTOR";
    public const string MRD_AUTOD = "MRD_AUTOD";
    public const string ISSERVICEAPPLI = "ISSERVICEAPPLI";
    public const string RULE_NAME = "RULENAME";
    public const string SERVICECODE = "SERVICECODE";
    public const string ENABLEPAYTM = "ENABLEPAYTM";
    public const string Default_Admission_Case_Type = "Default Admission Case Type";
    public const string Default_Admission_Type = "Default Admission Type";
    public const string IS_ADMN_MOBILENUMBER_MANDATE = "IS_ADMN_MOBILENUMBER_MANDATE";
    public const string GST_CHARGE_ON = "GST_CHARGE_ON";
    public const string IS_CARDNO_MANDATE = "IS_CARDNO_MANDATE";
    public const string IS_CARDREFNO_MANDATE = "IS_CARDREFNO_MANDATE";
}

public class PARAMETER_CODES
{
    
    public const string EnablePaytm = "ENABLEPAYTM";
    public const string SERVICECODE = "SERVICECODE";
    public const string RULE_NAME = "RULENAME";
    public const string ISSERVICEAPPLI = "ISSERVICEAPPLI";
    public const string ECMODOCTOR = "ECMODOCTOR";
   // public const string BTLOC = "BTLOC";
    public const string IS_MOBILENUMBER_MANDATE = "IS_MOBILENUMBER_MANDATE";
    public const string IS_ADMNPLANSURGICAL_MANDATE = "IS_ADMNPLANSURGICAL_MANDATE";
    public const string IS_PKGCONVSION_MANDATE = "IS_PKGCONVSION_MANDATE";
    public const string IS_CARDNO_MANDATE = "IS_CARDNO_MANDATE";
    public const string IS_CARDREFNO_MANDATE = "IS_CARDREFNO_MANDATE";

    public const string IS_MANDATORY_SWIPING = "IS_MANDATORY_SWIPING";
    public const string USERMOREINFO = "USERMOREINFO";
    public const string IS_SAVE_PKG_SERVICESFROM_DB = "IS_SAVE_PKG_SERVICESFROM_DB";
    public const string Org_Tariff_Name = "org";
    public const string ACCREDITATION_REQUIRED = "LAB_ACT";
    public const string additinal_services_Discount_considering_days = "ASDCD";
    public const string Admission_check_In = "CPGP";
    public const string Admission_check_Out = "CRGP";
    public const string Admission_Prefix_Settings = "GEN_49";
    public const string ADV_MANDATORY = "FBL_6";
    public const string After_Company_Expiry_Alert = "ACE";
    // public const string Allow_AdimitedPatients_InOpBilling = "GEN_54";
    public const string ADT_IN_OP_BILL = "FBL_4";
    public const string ALLOW_BARCODE_PRINT_DIRECTLY = "DABPD";
    public const string Allow_Concesson_outsideservice_inop = "PNT_73";
    public const string Allow_Consultations_InOPBilling = "GEN_57";
    public const string Allow_Discharge_Date_Manually_In_IP_Discharge = "IPDIS_127";
    public const string ALLOW_DUE_IN_OPD_SCREEN = "ADIOPDS";
    public const string Allow_due_in_reg_and_con = "DUE";
    public const string Allow_History_Details_In_Billing = "AHB";
    public const string Allow_Miscellaneous_OPBilling = "GEN_110";
    public const string Allow_Mltple_admns_umrno = "IP_207";
    public const string Allow_Admission_Date_To_change = "IP_208";
    public const string ER_MobileNo_Mandatory = "ERM";
    public const string Allow_Print_in_Result_View = "LAB_144";
    public const string Allow_Refund_Amount_Up_To_Receipt_Amount = "PNT_131";
    public const string Allow_Registration_Expiry_Patients_In_Op_Billing = "GEN_168";
    public const string Allow_Service_Entry_For_Srv_Call_Off_For_Designation = "IPIMR_01";
    public const string PKG_CNS_OSP = "FBL_2";
    public const string Allow_ZeroConsultaion_Op = "RPT_85";
    public const string AllowSrvEditInOPCorpBill = "OPBIL_101";
    public const string Allow_Concession_IMRPosting = "GEN_47";
    public const string AlwIMRConcsn_Consultation = "IP_124";
    public const string AlwIMRConcsn_Investigation = "IP_125";
    public const string AlwIMRConcsn_Professional = "IP_128";
    public const string AlwIMRConcsn_Service = "IP_123";
    //  public const string Amount_InWords = "PNT_70";
    public const string Apply_Company_Approval = "CHKAPPR";

    public const string Apply_Credit_Limit = "GEN_62";

    public const string Apply_Credit_Limit_while_indenting = "GEN_153";

    public const string APPROVAL_UPDATE = "APPROVAL_UPDATE";

    public const string AUTO_APPROVAL_REQ = "LAB_136";

    public const string AutoCode_Generation = "COM_113";

    public const string Autocompletion_Prefix_Length = "GEN_450";

    public const string APPOINTMENT_CONTACT_NO = "APPOINTMENT_CONTACT_NO";
    public const string ALLOW_MULTIPLE_DISCHARGE_SUMMARIES = "MULTI_DS_SMRY";
    public const string ALLOW_BED_ACKNOWLEDGEMENT_WITHOUT_ADVANCE = "Allow_BedAck_WithOut_Advance";
    public const string AUTOMATIC_BED_VACATE_TIME = "AUTO_BED_VACATE_TIME";
    public const string ADVANCE_REACHING_ALERT = "ADV_REACHING_ALERT";
    public const string FINALBILL = "FINALBILL";



    // B letter 

    public const string BARCODE_PRINT = "BARCODE_PRINT";

    public const string Base_Currency = "COM_38";
    public const string Admission_Currency = "ABC";
    public const string Bed_Transfer_Request = "BTR";

    public const string Block_Other_Beds_OnPat_Single_Ward_Demand = "ADT_02";

    public const string Blood_Bags_Expiry_Before_Days = "BBE";

    // public const string Both_Print_and_Prescription_at_Saving_Time = "OPBIL_110";
    public const string BIND_ER_PATIENTS_BY_DEFAULT = "ISERBIND"; // added by rama on 22-05-2019 (bind ER patients By default)
    public const string REQ_AUTOBILL_FOR_ERPATIENTS = "ERORDAB"; // added by rama on 30-05-2019 (to bill automatically when order is raised for ER patients)
    public const string CONSIDER_SYNCRECORDS_IN_REPORT = "IS_SYNC_RECORDS_REQ"; // added by rama on 30-05-2019 (show sync records in the report or not )
    // C letter

    //public const string Card_Amount = "PNT_69";

    public const string CARD_TRANSACTION_OTP_REQUIRED = "CTOR";

    // public const string Case_Sheet_Print = "PNT_118";

    //public const string Cash_Amount = "PNT_67";

    //  public const string CashChek_Point = "RPT_88";

    //public const string CashChekPoint_Req = "RPT_89";

    public const string Casuality_Credit_Limit_For_OP = "OPBIL_102";

    public const string Charge_for_AllDoctors = "GEN_111";

    //public const string Cheque_Amount = "PNT_68";

    public const string Company_Address = "COM_102";

    public const string Company_Expire_Alert = "CMP_EXPIRE";

    public const string Company_Prcnt_Visibility = "CPV";

    public const string Rate_Editable_for_Phar_Items = "REPI";

    public const string billing_aletrs_req_or_not = "BARON";

    public const string COMPANY_REFERAL_VALIDITY_EXPIRING_DAYS = "CRVED";

    public const string CompanyLogo = "COM_40";

    public const string CompanyName = "COM_39";

    public const string Consider_RegValidity_Patients = "GEN_56";

    //  public const string Consultation = "CONS";

    public const string Consider_DesgorGroup_forPrint = "LAB_127";

    public const string CONSULTANT_PREFIX_REQUIRED = "DR";

    public const string Consultation_CancelDays = "GEN_107";

    //  public const string Consultation_Validity = "CNSVDT";

    // public const string Corporate_OpBills = "RPT_26";

    public const string Corporate_approval_Limt_Percentage_Amt = "CALP";

    public const string Corporate_Credit_Limt_Percentage_Amt = "CCLP";

    //  public const string Corprate_Opconsultations = "RPT_24";

    public const string COVERT_OP_SERVICES_AS_IP_SERVICES = "OP-IP";

    //public const string CreateBy_Date = "PNT_71";

    public const string CREDIT_CARD_SERVICE_CHARGE = "CCSC";

    public const string Current_Financial_YearFrom = "COM_41";

    public const string Current_Financial_YearTo = "COM_42";

    public const string CMS_CMO_DAYS = "CMS_CMO_DAYS";
    // D Letter settings

    //  public const string DayCare_OpBill = "RPT_120";

    public const string Days_Consider_For_Reg_Details = "GEN_157";

    public const string Days_Consider_To_Show_Reg_Doctor = "GEN_159";

    public const string DAYS_FOR_HIC_ACTIVITY_SCHEDULE_REMAINDER = "R";

    public const string Days_Consider_OpConstn_InOpBilling = "PNT_76";

    public const string DEFAULT_GRID_PAGE_SIZE = "DGPS";
    public const string Default_Nationality = "GEN_166";

    public const string Default_Password = "DP";

    public const string Default_Transaction_Password = "DTP";

    public const string DIALIZER = "D";

    public const string Dialysis_Dept = "DD001";

    public const string DIETARY_DEPARTMENT_REFERENCE_ID = "DDRI";

    public const string Discharge_Summary_Auto_Approve = "GEN_162";
    public const string DSCHRG_SUM_HSPTL_ADD_DATA = "DSCHRG_SUM_HSPTL_ADD_DATA";


    public const string Display_Name_In_Registration = "REG_06";

    public const string DND_Enabled_By_Default = "DND";

    public const string Doctor_Payments = "GEN_45";

    //  public const string Doctor_PresCription_Required = "GEN_55";

    public const string Document_Number_Formatt = "GEN_02";

    public const string Documents_Date_Format = "COM_37";

    public const string Donor_Data_Changes_withIn_Days = "DCW";

    public const string Donor_Minimum_Weight = "DMW";

    public const string DOUBLE_PRINT = "FBL_3";

    // public const string DownLoad_Execs_Settings = "RPT_87";

    public const string Drug_Administrative_Charges = "RPT_87";

    public const string DSCUMRY_TYPE1 = "DSCUMRY_01";

    public const string Due_Remainders = "GEN_44";

    public const string Document_Display_Order_By = "GEN_449";

    // E letter 

    //public const string Emergency_Slot1 = "OPBIL_105";

    //public const string Emergency_Slot2 = "OPBIL_106";

    //public const string Emergency_Slot3 = "OPBIL_107";
    public const string Consider_Emergency_Slot_Setup = "OPBIL_107";

    public const string Employee_Age = "GEN_06";

    public const string EMR_MIGRATION_ID = "EMID";

    public const string INBOX_ALERT = "GEN_155";

    public const string ER_Holding_Time = "EHT";

    public const string Extended_Display_Window = "EDW";

    public const string EMERGENCY_CONTACT_NO = "EMERGENCY_CONTACT_NO";
    // F letter

    public const string Family_Reference_Selection_Consultent_And_Referals_Enabled_By_Default = "FMS";

    // public const string FinTrans_WorkFlow = "COM_136";

    //  public const string Food_Beverages = "RPT_83";

    public const string Food_Charges_part_Of_Room_Rent = "FCPORR";

    // public const string Classic_User = "RPT_90";

    //public const string Golden_User = "RPT_91";

    public const string Modify_ApprovedTrans_Days = "GEN_52";

    public const string FREE_FOLLOWUP_VISIT_REQUIRED_FOR_PACKAGE = "FVRP";

    public const string Funds_Validity_days = "FVD";

    // public const string General_OpBills = "RPT_25";

    //  public const string GeneralOp_consultations = "RPT_23";

    // public const string LAB_GTT_TEST = "LAB_GTT";

    public const string History_Details_Req_In_Days = "GEN_165";

    //  public const string Hospital_Scroll_Company = "ACC_31";

    //  public const string DailyCancellatio_ReportNotShow = "RPT_82";

    // public const string DosPrints_DoNotShow = "PNT_81";

    public const string ShowOpServices_InIpCorporateBilling = "PNT_78";

    public const string Indenting_Time_Interval = "GEN_154";

    public const string Investigations_Comparision_inOPBill_required = "LAB_11";

    public const string IPRES_SRVWISE = "LAB_135";

    public const string IP_Result_View_Without_Approval = "IPRWA_01";

    public const string IPSampleAck = "IPSampleAck";

    public const string Is_BarCode_Generate_Auto = "LAB_129";

    //public const string Is_Accounts_required = "ACC_28";

    public const string IsAllergiesFromMedispan = "GEN_152";

    public const string Alllow_UserWise_Concession_CreditLimit = "RPT_86";

    public const string Is_applicable_Service_charges_percentage_amt = "SRVPRCNT";

    public const string Is_Appointment_Slots_Required = "IASR";

    public const string IS_ASSESMENT_REQUIRED = "IAR";

    public const string ASSESMENT_SMS_REMAINDER_DAYS = "ASRD";

    public const string ASSESMENT_SMS_REMAINDER_AFTER_DAYS = "ASRFD";

    public const string Is_Audit_Options = "GEN_133";

    public const string Is_Audit_Required = "GEN_132";

    public const string IS_AUTOMATIC_VISIt = "AVST";

    public const string Is_Centralized = "OPBIL_100";

    public const string IsCorpTariffReqInIPServices = "CORP_TRF_REQ_IN_IPSRV";


    public const string Is_DashBoard_Display_Day_records = "Dash_101";
    /*laboratory*/
    public const string Is_Labgrid_Display_Day_records = "Is_Labgrid_Display_Day_records";
    public const string Lab_DashBoard_Display_records = "Lab_DashBoard_Display_records";
    //public const string Is_labDashBoard_Display_Day_records = "Dash_101";


    public const string Is_Doctor_Solts_Required = "IDSR";
    public const string Allow_Same_Consultant_OnSameDay = "ASCSD";

    public const string DrWise_ServiceChargeInc_InOpBilling = "PNT_77";

    public const string EditRate_InOpBill = "PNT_74";

    public const string Is_Extended_Display_Req = "ISED_01";

    public const string Is_Formulary_Required = "PHAR_001";

    // public const string Is_Header_Visible = "PNT_128";

    //// public const string ASSY_COMP = "FBL_5";

    // public const string Is_Logo_Visible = "PNT_127";

    public const string IS_MKR_CHKR = "PNT_127";

    public const string Is_Mlc_Police_Intimation_Received_or_Not = "MLC02";

    public const string Is_Mobile_No_Mandatory = "IMNM";

    public const string MobileNo_MandatoryInOpBilling = "GEN_60";

    public const string Is_MyAccounts_Integration_Required = "GEN_156";

    public const string Is_Nurse_Bed_Vacate_Required = "GEN_164";

    public const string Is_OTP_Change_Password = "OTPC";

    public const string Is_OTP_Forgot_Password = "OTPF";

    public const string Is_PAS_Integration_Req = "IPIR";

    public const string IsPharmacyIntegrationRequired = "GEN_150";

    public const string IsBillingUser = "IBU";

    public const string Cancelation_Auto_Refund = "CAR";

    public const string CREDIT_LIMIT_EXPIRED = "CAR";

    public const string Is_Pre_Admission_Mandatory = "PREADM_1";

    public const string Is_referal_doctor_required = "REG_05";

    public const string Is_Refund_Direct_Approval = "PNT_132";

    public const string RegDts_req_in_trans_forms = "GEN_134";

    public const string IS_REQ_NST_PAT_LABLES = "IRN";

    public const string Is_Result_Processed_with_QC = "IS_QC";

    public const string Is_Sample_Billing_Pending_For_Approval = "OPBIL_108";

    // public const string Is_Sample_Entry_Needed = "GEN_119";

    public const string Is_Save_Alert_Required = "ISAR_01";

    public const string Is_Screen_Mask_Required = "TKN_GEN";

    // public const string Is_Scroll_Using = "ACC_29";

    public const string Service_print_requied_inpatient = "LAB_10";

    public const string IS_SMS_SEND = "SMS_5";

    // public const string Is_Specimen_Visible = "PNT_129";

    public const string Is_Upload_Download_Req = "IUDR_01";

    public const string Is_User_Session_Tracking = "GEN_160";

    public const string Is_Archive = "GEN_114";

    public const string Is_Code_Generate = "GEN_115";

    public const string IS_DIALOSYS_EQUIPMENT = "EQMT";

    public const string Is_Dialosys_WardGroup = "DW";

    public const string Is_Dischagre_Request = "IDR";

    public const string Receipt_Amount_In_Words = "RAW";

    public const string FBMaxDecimals = "FBMD";

    public const string ConsiderDecimals = "CD";

    public const string Is_Doc_Level_Audit = "GEN_117";

    public const string IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED = "DIL_01";

    public const string IS_PHYSIOTHERAPY_EQUIPMENT = "PE";

    // public const string Is_Populate_Rev_No = "GEN_116";

    public const string IS_SENT_TO_BILL_WITHOUT_DSUMMARY = "ISB";

    public const string IsEditMiscSrvInIMRPosting = "IP_01";

    public const string Is_Consultant_Required_While_Posting_Service = "CNS_REQ_SERV_POST";

    // public const string Laser_Print = "PNT_75";

    public const string Luxury_Tax_Amount = "LTA";

    public const string Lookup_Page_Size = "LOK_02";

    public const string MasterUI_Visibility = "COM_99";

    public const string Max_Decimal = "COM_43";

    public const string Max_Indents_Per_Day = "MIP_01";

    public const string Max_Items_Per_Day = "MIP_02";

    public const string MaxDecForAllAmts = "COM_453";

    // public const string Medical_Purchase_Company = "ACC_35";

    public const string Settings_Print = "LAB_08";

    public const string Minimum_Age_In_Years = "MAI";

    public const string Minimum_Days_Bw_Previews_And_Current_Donation = "MDI";

    public const string Minimum_Days_Blood_Bag_Reserved = "MDB";

    public const string Mobile_No_Maximum_Digits = "MMD1";

    public const string Mobile_No_Minimum_Digits = "MMD";

    public const string mobile_number_required = "MNR";

    public const string MODAPRL_DAYS = "MODAPRL";

    public const string Msg_Populate_Days = "RPT_96";

    public const string MO_SMO_DAYS = "MO_SMO_DAYS";

    public const string NBM_HOURS = "NBM";
    public const string BILLTYPEDISPLAYRECORDS = "BILLTYPEDISPLAYRECORDS";
    public const string REGTMANDATORY = "REGTMANDATORY";

    public const string AUTOINSERTSENDGLOCTION = "AUTOINSERTSENDGLOCTION";

    public const string FIRSTMIDDLELASTNAME = "FIRSTMIDDLELASTNAME";
    public const string FIRSTLASTNAME = "FIRSTLASTNAME";

    public const string Need_Integrated_billing_bloodbank = "LAB_13";

    public const string Need_QuickLink_Module_Desc = "QUICK_05";

    public const string Need_To_Show_Reg_Doctor = "GEN_158";

    public const string New_Born_Percentage = "OPBIL_104";

    public const string NEW_USER_LOCK_DAYS = "GEN_163";

    public const string CNS_LIMIT = "CNS_1";

    public const string No_Of_Days_Estimated_Bills_Required_In_Sample_Registration = "OPBIL_109";

    //  public const string Noof_OpBill_DosPrint = "GEN_46";

    public const string No_Of_Questions = "GEN_131";

    public const string No_Of_Supply_Bills = "SUPLLY";

    public const string Nooftimes_toGivePostDisounts = "PNT_109";
    public const string POSTDISCOUNT_VALIDY_CANCEL_DAYS = "POSTDISCOUNT_VALIDY_CANCEL_DAYS";

    public const string NoOfTimes_togiveRefunds = "PNT_108";

    public const string NO_OF_ATTEND_PASSES = "NAP";

    public const string NO_OF_VEHICLE_PASSES = "NVP";

    public const string NO_OF_VISITOR_PASSES = "NVSP";
    
    public const string NoOfCopiesPerprint = "PNT_95";
    //FOR DISPATCHDASBOARD PRINT 
    
    public const string ISMARGINTOP = "ISMARGINTOP";
    public const string ISMARGINBOTTOM = "ISMARGINBOTTOM";
    public const string ISHEADERHEIGHT = "ISHEADERHEIGHT";
    public const string ISFOOTERHEIGHT = "ISFOOTERHEIGHT";
    public const string ISMARGINTOPUNCHECK = "ISMARGINTOPUNCHECK";
    public const string ISMARGINBOTTOMUNCHECK = "ISMARGINBOTTOMUNCHECK";
    public const string ISHEADERHEIGHTUNCHECK = "ISHEADERHEIGHTUNCHECK";
    public const string ISMARGINLEFT = "ISMARGINLEFT";
    public const string ISMARGINRIGHT = "ISMARGINRIGHT";
    public const string ISFOOTERHEIGHTUNCHECK = "ISFOOTERHEIGHTUNCHECK";
    public const string ISHTMLXAXIXS = "HtmlrptXaxis";
    public const string ISHTMLYAXIXS = "HtmlrptYaxis";
    //end
    public const string IpBillCancelDays_Dichargedpatients = "PNT_79";

    //public const string OldNew_Setup = "LAB_64";

    public const string LABREPORT_WHEN_DUE = "LAB_134";

    public const string OPService_CancelDays = "GEN_106";

    public const string ORDERING_PHYSICIAN_LIMITED_DAYS = "OPLD";

    // public const string Osp_Needed = "GEN_48";

    public const string ORDERSET_SERVICE_GROUP = "OrderSetSrvGroup";

    public const string PkgConsltn_ChargeSettings = "PNT_80";

    public const string package_consultation_considering_days = "PCD";

    public const string Page_Display = "COM_104";

    public const string PWD_COMPTY_ALPHABETS = "PCC_249";
    public const string PWD_COMPTY_ALPHABETS_CAPS = "PCC_250";
    public const string PWD_COMPTY_ALPHABETS_SMALLS = "PCC_251";

    public const string PWD_COMPTY_CHAR = "PCC_247";

    public const string PWD_COMPTY_NUMERICS = "PCC_248";

    public const string Password_Conditions_Req = "RPT_93";

    public const string PWD_HISTORY = "PWH_246";

    public const string PASSWORD_LOCK_ATTEMPTS = "PLA_244";

    // public const string Password_Settings = "RPT_92";

    //  public const string Pwd_Validation = "RPT_119";

    public const string PATIENT_NEW_INFORMATION = "P";

    //public const string Pharmacy_Bills = "RPT_27";

    // public const string PharmacyModuleID = "GEN_151";

    // public const string Pharmacy_Scroll_Company = "ACC_32";

    //public const string Pharmacy_VAT = "ACC_36";

    public const string PHOTO_PRINT_REGISTRATION = "Photo_print";

    //  public const string PostOtServices_Billing = "RPT_84";

    public const string IS_REQ_PRE_PRINTED_BARCODE = "PREBAR";

    // public const string PrintBy_Date = "PNT_72";

    // public const string Is_Print_Required_BeforeRefundApproval = "PNT_130";

    public const string PrintSettings_Required = "GEN_58";

    public const string ProfessionalTax_OnBill = "GEN_59";

    public const string PwdExp_Days = "RPT_94";

    public const string Pwd_MinLength = "RPT_97";

    // public const string PWD_TYPE = "RPT_98";
    public const string CONSIDER_PHARMACY_CHARGES_BILLING_HEAD = "IP_PHBH";

    public const string QMS = "QMS";

    public const string Raise_Auto_Request_To_Dietician_For_The_New_Admitted_Patient = "RARTDFTNAP";

    // public const string ReceiptNo_date = "PNT_65";

    // public const string Referral_Details = "PNT_66";
    public const string Refund_Amount = "RFA";

    public const string report_format_based = "CRF";

    public const string Refunds_Max_Days = "RMD";

    public const string REG_FEE_AUTO_FILL_IN_CASH = "FRG";
    public const string KIN_NAME_MANDATARY = "KIN_NAME_MANDATARY";
    public const string IS_MAIL_MANDATARY = "IS_MAIL_MANDATARY";
    public const string MINATES = "MINATES";
   
    public const string EXPRIRYTIME = "EXPRIRYTIME";
    public const string IS_ALLOW_CASH = "IS_ALLOW_CASH";
    public const string DYNAMIC_IP_BILL_PRINT_SETUP = "DYNAMIC_IP_BILL_PRINT_SETUP";
    public const string APPSYNC = "APPSYNC";
    public const string FUTUREAPPOINTMENTREQUIRED = "FUTUREAPPOINTMENTREQUIRED";
    public const string CONSULTATION_COUNT_IN_DAY = "CONSULTATION_COUNT_IN_DAY";
    public const string DEFAULT_CONSULTATION = "DEFAULT_CONSULTATION";
    public const string EmployeeRelativeDetails = "EmployeeRelativeDetails";
    public const string IsHealthCardReq = "IHR";

    public const string WINDOW_POPUP = "WP_01";

    // public const string Registration = "Reg";

    public const string Registration_Billing_Concession_Applicable = "GEN_167";

    public const string For_Registration_Cancel_Days = "GEN_169";

    // public const string Registration_Fee = "COM_103";

    //  public const string Registration_Validation = "COM_105";

    public const string Req_App_Letter_ADT_Ward_Varies = "ADT_01";

    public const string Request_Approval = "REQAPP";

    public const string REQ_SHIFTHRANDSUB_FOR_SHIFTLOG = "RSH";

    public const string Req_Multiple_currency = "RMC";

    public const string Required_provision_to_delete_package_includes = "I_PKG";

    public const string Reset_AutoGenerationNo_EveryYear = "GEN_51";

    public const string ResEntryAplicbl_BFInvestgation = "LAB_63";

    public const string Result_Entry_Settings = "LAB_07";

    public const string RMChrg_Auto = "IP_126";

    // public const string Salary_Company = "ACC_33";

    public const string SAMPLE_ACK = "SAMPLE_ACK";

    public const string Allow_SAMPLE_Coll_for_IP = "SCIP"; //(Sample Collection For Ip)

    public const string IsProfessionalChargesEdit = "PROF_EDIT";

    public const string IsConsultationEdit = "CONS_EDIT";

    public const string OLD_DT_FBILL = "FBL_1";

    public const string org_per_emp_per = "CPOP";
    public const string CorpServiceDelete = "CSD";

    public const string claim_req_for_op = "CROP";

    public const string Service_Cancel_Before = "COM_117";

    //  public const string Service_Cancellation_for_Print = "LAB_09";

    //  public const string ServiceGroup_WiseCopy = "GEN_112";

    //  public const string Service_Group_Type_Wise_Concession_Applicable = "SGTCA";

    public const string Osp_Billing_Required = "OSPBR";

    // public const string Service_Tax = "ACC_122";

    public const string IsServiceTaxRequired = "SRTX_1";//(Service Tax For Corporate)
    // (Service Tax Required)
    public const string SerTax_Req = "ACC_98";

    public const string Shift_Alert_per = "SAP";

    public const string Shift_Limit_amt = "SLA";

    //  public const string ShwPntBtn_InReport = "RPT_121";

    public const string Show_AllBedTypes_INBedChart = "GEN_61";

    public const string Show_Critical_Values = "LAB_CRIT";

    public const string Show_errmsg = "GEN_05";

    public const string Show_IP_Option = "IP_127";

    public const string LAB_NO = "LAB_NO";

    public const string Show_Units = "LAB_128";

    public const string SMS_FROM_TIME = "SMS_6";

    public const string SMS_Password = "SMS_2";

    public const string SMS_Sender_Id = "SMS_3";

    public const string SMS_TO_TIME = "SMS_7";

    public const string SMS_URL = "SMS_4";

    public const string SMS_User_Id = "SMS_1";

    public const string SMTP_Authenticate = "SMTP_6";

    public const string SMTP_Paswword = "SMTP_8";

    public const string SMTP_Proxy_Server = "SMTP_1";

    public const string SMTP_Proxy_Server_Port = "SMTP_2";

    public const string SMTP_Send_Using = "SMTP_3";

    public const string SMTP_Server = "SMTP_4";

    public const string SMTP_Server_port = "SMTP_5";

    public const string SMTP_TO_Address = "SMTP_10";

    public const string SMTP_Use_SSL = "SMTP_9";

    public const string SMTP_User_Name = "SMTP_7";

    public const string IS_SPECIMIN_VISIBLE = "Lab_spec";

    public const string STP_NAME = "LAB_STP";

    public const string Tabs_Required_or_not = "TAB_101";

    public const string Test_Occurency_Required_In_Billing = "TOR";

    public const string TIME_FORMAT = "TM";

    public const string Time_Min = "TiM";

    public const string UI_Visibility = "COM_101";
    public const string UPDATE_REQ_RESULT = "LAB_137";

    // public const string UserWise_Scroll = "ACC_30";

    public const string VACCINATION_FOR_NEW_EMPLOYEE = "NEV";

    public const string VERIFICATION_UPDATE = "VERIFICATION_UPDATE";

    public const string Ward_Automation_Required = "FBL_10";

    public const string WORK_FLOW = "LAB_130";
    public const string saving_conformation = "GEN_04";

    //(Is  barcode Generate Automatically)
    // public const string Show_Units_As_Seperate_Col = "LAB_129";
    //(Uom Needed In Reports Separately )
    //  public const string UOM_Needed_reports_separately = "LAB_12";

    public const string Health_Checkup_Package_Dietory_Details_Include = "HCPDDI";

    public const string OTCHECKIN = "OTW";

    public const string Days_to_validate_Verify_Mobile_No = "GEN211";

    public const string Prescription_Print_Configuration_Setting = "PPCS";

    public const string Consultation_Print_Settings = "CONPRTSET";

    public const string POST_DISCOUNT_APPROVAL_ALERT = "PDA";

    public const string REFERAL_VALIDITY_EXPIRING_DAYS = "REFVALID";

    // public const string Casuality_Duty_Doctor = "OPBIL_103";

    public const string Required_IP_Bill_Report_Handover_Details = "IRHD";

    public const string Cash_Credit_Limt_Percentage_Amt = "CHLP";
    public const string HK_TIME = "HK";
    public const string DISCHARGE_TIME = "DT";
    public const string RIS_Schedule_Mandatory = "RIS_SCH_MAN";
    public const string ShowOrderInvestagation = "SOI";
    public const string TransctionPasswordSetting = "PSWDTRNS";
    public const string RequstforDctvstNoofDays = "REQDND";
    public const string FOLLOWUP_PRESCRIPTION_REQUIRED = "FPR";
    public const string Create_Individual_Indent = "CINDNT";
    public const string Conformation_Message_Before_Getting_Reports = "CHKCNFRMRPT";
    public const string Require_Admn_Request_Approval_While_ERPatient_Conversion = "ERAEPC";

    public const string Report_Date_Format = "RDF";
    public const string AMENDMENT_NOTE_DISPLAY_IN_REPORTS="ANDIR";
    public const string Is_Resultentry_doctor_required = "ISRELTD";
    public const string In_ResultApproval_Saving_Replace_Default_Doctor = "IRASRD";
    public const string RESULTENTRY_REBACK_WITH_COMPONENT_VALUES = "RERBCK";
    public const string Advance_Limit_Mandatory = "Adv_Limit_Man";
    public const string Advance_Limit = "Adv_Limit";
    public const string DAYS_TO_BACK_ADMISSIONDT = "ADTCHNG";
    public const string Consultant_Mandatory_While_Saving_ER_Registration = "CNS_REQ_FOR_ER";

    public const string Is_Drug_Receiving_Mandatory = "PH_01";
    public const string Default_Due_Authorized = "DDA";

    public const string Is_GLCD_Req = "GLCD";
    public const string Is_COGS_Req = "COGS";
    public const string IS_COLLECTION_POINT_REQD_IN_SAMPLE_COLLECTION = "ICPSC";
    public const string RESULTVALUE_DISPLAY_WITH_COMPONENT_NAME_FOR_RADIOLOGY_REPORTS = "RVDCNFRR";
    public const string RESULTAPPROVAL_AFTER_SAVING_TO_GET_PRINT = "RSAPRTGR";
    public const string IS_REQUIRED_QR_CODE_IN_PRINT = "IRQRCD";
    public const string HISTO_REPORT_DATA = "HRDT";
    public const string IS_IMR_SRV_CANCEL_WHEN_SAMPLE_REJECTION = "ICSREJ";
    //SAMPLECOLLECTION
    public const string IS_REQUIRED_SAMPLE_COLLECTION_REPORT = "SAMPLEREPT";
    public const string IS_REQUIRED_SAMPLE_COLLECTION_BARCD_PDF = "SAMPLEBRCDPDF";
    public const string IS_REQUIRED_SAMPLE_COLLECTION_BARCD_ALERT_PRINT = "SAMPLEBRCDALERT";

    public const string IS_GET_ALL_SERVICES_FOR_ADD_TEST = "IGASAT";
    public const string IS_GET_ALL_SERVICES_BASED_ON_BILL_NO = "IGABBNO";
    public const string INDENT_WISE_LAB_BARCD = "IND_LAB_BARCD";
    public const string IMGDIPLAYINHTMLRPT = "IMGDIPLAYINHTMLRPT";
    public const string ISRELTD = "ISRELTD";
    public const string IRASRD = "IRASRD";
    public const string IS_ALLOW_TO_ZERO_PRICE_SERVICES = "ZPS";
    public const string REQ_AUTO_CONSUMPTION_SERVICE = "REQ_AUTO_CONSUMPTION_SERVICE";

    public const string IS_RESULT_DATES = "REDT";
    public const string IS_VERIFICATION_DATES = "RVDT";
    public const string IS_APPROVE_DATES = "RADT";
    public const string SamCollAplicbl_BFInvestgation = "LSCABFI";
    public const string IS_ALLOW_TO_ZERO_PRICE_TESTS_FOR_BILLING = "ZPTFB";
    public const string IS_ALLOW_PENDING_SERVICES = "IS_ALLOW_PENDING_SERVICES";
    public const string IS_ALLOW_ORDERING_PHYSICIAN = "IS_ALLOW_ORDERING_PHYSICIAN";
    public const string IS_ALLOW_AUTO_IP_FINAL_BILL_PAYMENT = "AUTOIPBILLPAYMENT";
    public const string CommonSequence = "CommonSeq";
    public const string IS_ALLOW_BARCODE_FOR_TRANSACTION = "ISABFT";
    public const string IS_GST_REQUIRED = "IS_GST_REQUIRED";
    public const string AllowPinelab = "AllowPinelab";

    public const string Allowadmnplan = "Allowadmnplan";

    public const string NurseOrdertimeSampleCollection = "NurseOrdertimeSampleCollection";

    public const string showpriceinindent = "showpriceinindent";

    public const string AllowPinlabforRefund = "AllowPinlabforRefund";
    public const string ENABLE_EMPASA = "ENABLE_EMPASA";
    public const string ALLOW_TARIFFCOVERED_SERVICESONLY = "ALLOW_TARIFFCOVERED_SERVICESONLY";
    public const string AUTO_SELECTED_IS_TREATED_DOCTOR = "AUTO_SELECTED_IS_TREATED_DOCTOR";
    
    public const string IS_ALLOW_SURGERYSERVICE = "IS_ALLOW_SURGERYSERVICE";
    public const string IS_SHOW_PATIENTCATEGORY = "IS_SHOW_PATIENTCATEGORY";
    public const string Apply_Credit_Limit_COR = "Apply_Credit_Limit_COR";
    public const string Credit_Limit_indenting_order = "Credit_Limit_indenting_order";
    public const string IsCorpTariffprioritywise = "IsCorpTariffprioritywise";
    public const string IS_BILLINGCOLUMN_EDITABLE = "IS_BILLINGCOLUMN_EDITABLE";
    public const string IS_ALLOW_MORE_THAN_BAMOUNT = "IS_ALLOW_MORE_THAN_BAMOUNT";
    


    public const string IS_SRVNAME_CD_AS_PER_TARIFF = "IS_SRVNAME_CD_AS_PER_TARIFF";
    // public const string IS_SERVICE_WITH_GST = "IS_SERVICE_WITH_GST";
    public const string IS_RENEWAL_REQUIRED = "IRR";
    public const string LIMIT_AMOUNT_PANNO_BILLING = "LAPANBILL"; // added by rama on 06-06-2019 (for cpaturing PAN# or Adhaar# when bill is morethan the specified limit amount)
    public const string IS_MAPPED_CURRENCY = "IMC";
    public const string IS_DISCHAGRE_REQUEST = "IDR";
    public const string CHK_PENDING_INDENTS = "CHK_PENDING_INDENTS";
    public const string ER_PATIENT_SEARCH = "ER_PATIENT_SEARCH";
    public const string MCI_DOCTOR_SEARCH = "MCI_DOCTOR_SEARCH";

    public const string Item_SaleRate_Required = "PH_02";
    public const string All_Items_Required = "PH_03";
    public const string Pkg_Items_Required = "PH_04";
    public const string AUTO_SELECT_STP_FOR_PKG_NON_PKG_IN_NRQ = "AUTO_SELECT_STP_FOR_PKG";
    public const string Is_Medical_College = "IS_MED_CLG";
    public const string MCI_MANUAL_AND_AUTO_PROCESS_DATA = "MCIAD";
    public const string Ms_Disc_req = "MS_DIS_REQ";
    public const string DATE_FROM_YESTERDAY = "DATE_FROM_YESTERDAY";

    public const string TALLYLOCATIONWISEORNOT = "TALLYLOCATIONWISEORNOT";

    public const string GET_BOTH_TYPE_PATIENTS = "GET_BOTH_TYPE_PATIENTS";
    public const string IS_ENABLE_INDENT_ORDER_SET = "IS_ENABLE_INDENT_ORDER_SET";
    public const string IS_ENABLE_RURAL_BED_SEL = "IS_ENABLE_RURAL_BED_SEL";
    public const string IS_ENABLE_URBAN_BED_SEL = "IS_ENABLE_URBAN_BED_SEL";
    public const string NURSE_THUMB_REQUIRED = "NURSE_THUMB_REQUIRED";
    public const string NORMAL_DSCHRG_REQ_DREC_PENDING = "NORMAL_DSCHRG_REQ_DREC_PENDING";

    public const string IS_ENABLE_HSPTL_ADD_DATA = "IS_ENABLE_HSPTL_ADD_DATA";
    public const string IS_ENABLE_NURSE_ATTEN_SIGN = "IS_ENABLE_NURSE_ATTEN_SIGN";
    public const string IS_ENABLE_REPORT_HEADER = "IS_ENABLE_REPORT_HEADER";
    public const string IS_ENABLE_DIS_REPORT_HEADER_IMG = "IS_ENABLE_DIS_REPORT_HEADER_IMG";
    public const string IS_ENABLE_DIS_REPORT_FOOTER_IMG = "IS_ENABLE_DIS_REPORT_FOOTER_IMG";
    
    public const string IS_DOCTOR_REQUIRED = "IDRR";
    public const string IS_REFERAL_REQUIRED = "IRRR";
    public const string CHK_ALL_BILLTRAN = "CHK_ALL_BILLTRAN";
    public const string Enable_Thumb = "ENABLE_THUMB";
    public const string Date_Of_Birth = "DOB";
    public const string CHK_POST_BW_SERVICES = "CHK_POST_BW_SERVICES";
    public const string CHK_ALLOW_ZERO_PRICE_IP = "CHK_ALLOW_ZERO_PRICE_IP";
    public const string CHK_ALLOW_TARIFF_OPTION_OP = "CHK_ALLOW_TARIFF_OPTION_OP";

    public const string CHK_ALLOW_TARIFF_OPTION_Delivery = "CHK_ALLOW_TARIFF_OPTION_Delivery";
    public const string Patient_category = "Patient_category";
    public const string Delivery_Patient_category = "Delivery_Patient_category";
    public const string CHK_SERVICE_PRICE = "CHP1";
    public const string ALLOW_SERVICE_ID = "CHP2";
    public const string PATIENT_TITLE = "PT";
    public const string REFERAL_POPULATE = "RP";
    public const string IS_MONTHDATE_EDITABLE_DOB = "DOBEDIT";
    public const string IS_DEFULT_REQURIED = "IS_DEFULT_REQURIED";
    public const string IS_DEFULT_MOTHERNAME = "IS_DEFULT_MOTHERNAME";
    public const string IS_EMAIL_REQUERED = "IS_EMAIL_REQUERED";
    public const string DEFAULT_STATE = "DSTATE";
    public const string CHK_ALLOW_ADV_IN_IMR = "CHK_ALLOW_ADV_IN_IMR";
    public const string IS_DISCOUNT_DIRECT_APPROVAL = "IDDA";
    public const string IS_PRE_REFUND_DIRECT_APPROVAL = "IPRDA";
    public const string REQ_AUTO_ADMISSION_FOR_DELIVERY = "DIAUTOADMN";
    public const string IS_SHOW_GST_IN_IPBILLS = "IS_SHOW_GST_IN_IPBILLS";
    public const string IS_ALLOW_BILL_ZERO_PRICE_SRV = "IS_ALLOW_BILL_ZERO_PRICE_SRV";
    public const string IS_ALLOW_ER_DASHBOARD_REFRESH = "IS_ALLOW_ER_DASHBOARD_REFRESH";
    public const string ALLOW_ZERO_RATE_FOR_SAVING = "ALLOW_ZERO_RATE_FOR_SAVING";
    public const string CMP_TARIFF_SRVS_CNVTD = "CMP_TARIFF_SRVS_CNVTD";
    public const string SRV_PRICE_REQUIRED = "SRV_PRICE_REQUIRED";
    public const string EXPIRE_DATE_MANDATORY = "EXPIRE_DATE_MANDATORY";
    public const string ICD_CODE_MANDATORY = "ICD_CODE_MANDATORY";
    public const string ER_TO_IP_AUTO_BED_OCCUPIED = "ER_TO_IP_AUTO_BED_OCCUPIED";
    public const string IS_CREDIT_LIMIT_REQUIRED_IN_DRUG_ORDER = "ICLDR";
    public const string ENABLE_REDCOLOR_PAT_CAT = "ENABLE_REDCOLOR_PAT_CAT";
    public const string Antibiotic_Display_Order = "Antibiotic_OrderBy";
    public const string CONCESSION_DISABLE = "CONCESSION_DISABLE";
    public const string DIS_SUM_PREPARAION_IP_FB_MANDATE = "DIS_SUM_PREPARAION_IP_FB_MANDATE";
    public const string DCITEM = "DCITEM";
    public const string MRD_AUTOD = "MRD_AUTOD";
    public const string Default_Admission_Case_Type = "DACTY";
    public const string Default_Admission_Type = "DATY";
    public const string IS_ADMN_MOBILENUMBER_MANDATE = "IS_ADMN_MOBILENUMBER_MANDATE";
    public const string GST_CHARGE_ON = "GST_CHARGE_ON";
}