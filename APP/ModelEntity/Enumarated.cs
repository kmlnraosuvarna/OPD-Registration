
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;

namespace EzHms.ModelEntity
{

    public enum UserOrGroup
    {
        Users,
        Group,
        USER_GROUP,
        USER_ROLE,
        ROLE,
        DOCUMENT,
        MODULE
    }

    public enum DataOperations
    {
        VIEW,
        EDIT,
        DELETE
    }

    public enum PackageType
    {
        Profile = 6,
        HealthCheckup = 7,
        Operation = 8,
        OperationPackage = 13
    }

    public enum PagingViewStatus
    {
        FIRST,
        PREVIOUS,
        LAST,
        NEXT,
        CURRENT
    }

    public enum PatientClass
    {
        Inpatient = 1,
        Outpatient = 2
    }
    //public enum SUBMIT_TYPE
    //{
    //    Interim_Submit = 1,
    //    Shift_Handover = 2,
    //    Shift_Submit = 3


    //}

    public enum SUBMIT_TYPE
    {
        [StringValue("Interim_Submit")]
        Interim_Submit = 1,
        [StringValue("Shift_Handover")]
        Shift_Handover = 2,
        [StringValue("Shift_Submit")]
        Shift_Submit = 3
    }

    public enum PatientType
    {
        General = 1,
        Corporate = 2
    }
    public enum ServiceClass
    {
        Service = 1,
        Groupservice = 2,
        Packageservice = 3,
        Assaycomparison = 4,
        Seperate_Print_Price = 5
    }

    public enum INCIDENT_CATEGORY
    {
        INTERNAL = 1,
        EXTERNAL = 2
    }

    public enum AdmissionManageType
    {
        ADMISSION,
        PASSPORT_DETAILS,
        ALLERGIES,
        INSURENCES,
        EMPLOYEE,
        ADITIONAL_INFO,
        MLC
    }

    public enum AdmissionSearchType
    {
        ALLERGY,
        INSURANCE

    }

    public enum ServicesModule
    {
        [StringValue("SRVG")]
        ServiceGroup,
        [StringValue("SRVM")]
        ServiceMaster,
        [StringValue("SRVGM")]
        ServiceGroupMapping,
        [StringValue("SRVL")]
        ServiceLevels,
        [StringValue("SRMP")]
        ServiceMapping,
        [StringValue("SRVP")]
        ServicesPrice,
        [StringValue("CNSC")]
        ConsultationCharges,
        [StringValue("CNST")]
        ConsultationType,
        [StringValue("SRCT")]
        SurgeryCategory,
        [StringValue("SRCL")]
        SurgeryClassification,
        [StringValue("BILH")]
        BillingHeads,
        [StringValue("ANEM")]
        AnesthesiaMaster
    }

    public enum ServiceDimCode
    {
        [StringValue("DOC")]
        DOCTOR,
        [StringValue("WG")]
        WARD_GROUP,
        [StringValue("GWG")]
        GENERAL_WARD_GROUP,
        [StringValue("WA")]
        WARD,
        [StringValue("BT")]
        BED_TYPE,
        [StringValue("CT")]
        CONSULTATION_TYPE,
        [StringValue("AREA")]
        Area,
        [StringValue("CITY")]
        City,
        [StringValue("STATE")]
        State,
        [StringValue("COUNTRY")]
        Country,
        [StringValue("DEPT")]
        Department,
        [StringValue("TAR")]
        Tariff,
        [StringValue("ORG")]
        Organization,
        [StringValue("PC")]
        Patient_Class,
        [StringValue("LOC")]
        Location,
        [StringValue("SCAT")]
        Surgery_Category,
        [StringValue("SC")]
        Surgery_Class,
        [StringValue("SPE")]
        Specialization,
        [StringValue("DCAT")]
        Doctor_Category,
        [StringValue("COMP")]
        Company

        //[StringValue("SPE")]
        //Specialization,
        //[StringValue("DOC")]
        //DOCTOR,
        //[StringValue("WG")]
        //WARDGROUP,
        //[StringValue("WA")]
        //WARD,
        //[StringValue("BT")]
        //BEDTYPE,
        //[StringValue("CT")]
        //CONSULTATIONTYPE,
        //[StringValue("DEPT")]
        //Department,
        //[StringValue("TAR")]
        //Tariff,
        //[StringValue("HOS")]
        //Hospital,
        //[StringValue("ORG")]
        //Organization,
        ////[StringValue("SPC")]
        ////ServicePriceClass,
        //[StringValue("PL")]
        //PriceLevel,
        ////[StringValue("PC")]
        ////priceClass,
        //[StringValue("LOC")]
        //Facility,
        //[StringValue("SCAT")]
        //SurgeryCategory,
        //[StringValue("SC")]
        //SurgeryClass,
        //[StringValue("SEC")]
        //ServiceCoverage,
        //[StringValue("DCAT")]
        //DOCTORCAT
    }

    public enum ServiceDimenssions
    {
        [StringValue("AREA_ID")]
        AREA,
        [StringValue("BED_TYPE_ID")]
        BED_TYPE,
        [StringValue("CITY_ID")]
        CITY,
        [StringValue("CONSULTATION_TYPE_ID")]
        CONSULTATION_TYPE,
        [StringValue("COUNTRY_ID")]
        COUNTRY,
        [StringValue("DEPARTMENT_ID")]
        DEPARTMENT,
        [StringValue("DOCTOR_ID")]
        DOCTOR,
        [StringValue("DOCTOR_CATEGORY_ID")]
        DOCTOR_CATEGORY,
        [StringValue("LOC_ID")]
        FACILITY,
        [StringValue("ORG_ID")]
        ORGANIZATION,
        [StringValue("PATIENT_CLASS_ID")]
        PATIENT_CLASS,
        [StringValue("SPECIALIZATION_ID")]
        SPECIALIZATION,
        [StringValue("STATE_ID")]
        STATE,
        [StringValue("SURGERY_CATEGORY_ID")]
        SURGERY_CATEGORY,
        [StringValue("SURGERY_CLASS_ID")]
        SURGERY_CLASS,
        [StringValue("TARIFF_ID")]
        TARIFF,
        [StringValue("WARD_ID")]
        WARD,
        [StringValue("WARD_GROUP_ID")]
        WARD_GROUP,
        [StringValue("GENERAL_WARD_GROUP_ID")]
        GENERAL_WARD_GROUP,
        [StringValue("TARIFF_ID")]
        SERVICE_PRICE_CLASS,
        [StringValue("SERVICE_TYPE_ID")]
        SERVICE_TYPE,
        [StringValue("WARD_GROUP_ID")]
        DIMENSIONS,
        [StringValue("SERVICE_CLASS_ID")]
        SERVICE_CLASS,
        [StringValue("PRICING_METHOD_ID")]
        PRICING_METHOD,
        [StringValue("COVERAGE_CLASS_ID")]
        COVERAGE_CLASS,
        [StringValue("DOCTOR_CAT_ID")]
        DOCTOR_CAT,
        [StringValue("SCPOE_OF_BUSINESS_ID")]
        SCPOE_OF_BUSINESS,
        [StringValue("NATURE_OF_BUSINESS_ID")]
        NATURE_OF_BUSINESS,
        [StringValue("AUTHORITY_ID")]
        AUTHORITY,
        [StringValue("EXCHANGE_ID")]
        EXCHANGE,
        [StringValue("ACCREDITATION_ID")]
        ACCREDITATION,
        [StringValue("ACCOUNT_TYPE_ID")]
        ACCOUNT_TYPE,
        [StringValue("ACCOUNT_OPE_MODE_ID")]
        ACCOUNT_OPE_MODE,
        [StringValue("CARD_TYPE_ID")]
        CARD_TYPE,
        [StringValue("RECEIPT_REFERENCE_TYPE_ID")]
        RECEIPT_REFERENCE_TYPE,
        [StringValue("PAYMENT_REFERENCE_TYPE_ID")]
        PAYMENT_REFERENCE_TYPE,
        [StringValue("GIFT_VOUCHER_TYPE_ID")]
        GIFT_VOUCHER_TYPE,
        [StringValue("REFERAL_SOURCE_ID")]
        REFERAL_SOURCE,
        [StringValue("BILL_TYPE_ID")]
        BILL_TYPE,
        [StringValue("CREDIT_TYPE_ID")]
        CREDIT_TYPE,
        [StringValue("CONCESSION_ON_ID")]
        CONCESSION_ON,
        [StringValue("CONCESSION_TYPE_ID")]
        CONCESSION_TYPE,
        [StringValue("AUTHORIZATION_FOR_TRAN_ID")]
        AUTHORIZATION_FOR_TRAN,
        [StringValue("ADVANCE_TYPE_ID")]
        ADVANCE_TYPE,
        [StringValue("APPBILL_TRAN_TYPE_ID")]
        APPBILL_TRAN_TYPE,
        [StringValue("COMPANY_ID")]
        COMPANY,



    }

    public enum PatientServices
    {
        PATIENT_REGISTRATION,
        PATIENT_ADMISSION
    }

    public enum UOM_TYPE
    {
        AGE = 3
    }

    public enum MasterOptions
    {
        INFECTION_TYPE,
        MRD_MORTALITY_TYPE,
        SUBMISSION_TYPE,
        DISPLAY_NAME,
        VEHICLE_TYPE,
        SERVICE_TYPE,
        CHARGE_TYPE,
        GENDER,
        MARITAL_STATUS,
        RESPONSBILITY_PERSON,
        PATIENT_TYPE,
        PATIENT_CATEGORY,
        TITLE,
        COVERAGE,
        ALLERGY_TYPE,
        ALLERGY_SEVERITY,
        ALLERGY_CLINICAL_STATUS,
        ADMISSION_MODE,
        ADMISSION_SOURCE,
        NATIONALITY,
        BLOOD_GROUPS,
        RELIGION,
        OCCUPATION,
        METHOD_OF_COMMUNICATION,
        INSURANCETYPE,
        ETHNICITY,
        VISATYPE,
        LANGUAGE,
        DIETTYPE,
        COPAY,
        MLC_TYPE,
        MODE_OF_TRANSPORT,
        REFERRAL,
        RELATIONSHIP,
        GRADE,
        ADDRESSTYPE,
        AGE_UOM,
        REQUISITION_AUTHORITY,
        REQUISITION_STATUS,
        DELIVERYTYPE,
        BABYSTATUS,
        WORK_FLOW,
        DSCHRG_EXCEPTION_TYPE,
        PATIENT_CLASS,
        TRANSACTION_TYPE,
        OPERATION_TYPE,
        REFERENCE_TYPE,
        MSG_METHOD_OF_COMMUNICATION,
        IMAGE_TYPE,
        TASK_PRIORITY,
        TASK_STATUS,
        TASK_CATEGORY,
        TASK_REQ_TYPE,
        HL7_ENABLE,
        HL7_ACK_ON_NEW_CONN,
        HL7_MSH_15_ACK_ACC,
        HL7_PROCESS_BATCH,
        HL7_SEND_ACK,
        HL7_COMMUNICATION_TYPE,
        FINANCIAL_WORKFLOW,
        DOCTORDICK_FAMILY,
        ALERT_TYPE,
        QUESTIONARY,
        TEST_TYPE,
        DSUMRY_HDR,
        STP_NAME,
        DISPATCH_METHOD,
        SPECIES,
        CLINICAL_HISTORY,
        ITEM_TYPE,
        KIT_VALIDITY,
        KIT_GROUP,
        KIT_RACK,
        PREPARATION_TYPE,
        KIT_TYPE,
        STORAGE_TYPE,
        KIT_OPEN_TYPE,
        STERILIZE_ITEM_STATUS,
        SUPPLIERS_LIST,
        ACK_ASTATUS,
        VEHICLE_NAME,
        DRIVER_NAME,
        REQUEST_TYPE,
        REQUEST_CATEGORY,
        MATERIAL_TYPE,
        PRIORITY,
        ISSUE_TYPE,
        RETURN_TYPE,
        FEEDBACK_VEHICLE_STATUS,
        REPROCESS_TYPE,
        DEINFECTION_TYPE,
        PROCESS_TYPE,
        KIT_RECEIVE_TYPE,
        Complaint_Category,
        Comlaint_Method,
        RANGES,
        Complaint_Type,
        TIMEHOURSELECTION,
        TIMEMINSELECTION,
        Complaint_Status,
        EMS_REQUEST_TYPE,
        TRNS_TYPE_OF_JOURNY,
        TRNS_UNIT_RQST_TYPE,
        TRNS_UNIT_NAME,
        PAT_ATTNDS,
        DMS_RACK_STORAGE_TYPE,
        Equipment_Type,
        PC_REQ_STATUS,
        HIC_ACTIVITY_SCH_TYPE,
        HIC_ACTIVITY,
        VACCINATION_TRN_STATUS,
        VACCINATION_DURATION,
        HIC_AUDIT_AREA,
        NST_STNS,
        EMS_LOAN_TYPE
    }

    public enum PatientViewEnum
    {
        ADDRESS,
        ALLERGIES,
        INSURENCES,
        PAYER_DETAILS,
        EMERGENCY_CONTACT,
        EMPINFO
    }

    public enum RegistrationType
    {
        COMPLETE, QUICK
    }

    public enum TemplateType
    {
        Blood_Bank = 1,
        CONSENT_FORM = 2,
        Guidelines = 3,
        ServiceQuestionary = 4,
        HealthCheckUpFeedBack = 5,
        PatientCouselling = 6,
        Checklist = 7,
        Instructions = 8,
        MlcTemplate = 13,
        pre_defined_instructions = 14,
        Mortality_and_Morbidity = 16,
        ot_consent_form = 20,
        incident_template = 21
    }

    public enum Parameter_Entity
    {
        Boolean_List = 2,
        Number_Format_List,
        Date_Format_List,
        Natural_Numbers,
        oldornew_setup,
        Result_Entry_Settings,
        Method_Settings_for_Print,
        Service_Cancellation_for_Print,
        Package_Consultation_Charge_Settings,
        UI_Visibility,
        Registration_Validation = 13,
        Consider_SerGrporDesg_forPrint = 14,
        Show_Unit_Settings = 15,
        Audit_Req = 16,
        LabReport_When_Due = 17,
        DISPLAY_NAME = 185,
        Documents_Display_Order = 20,
    }

    public enum CompanyPolicyEnum
    {
        PARAMETER_NAME,
        PARAMETER_VALUE,
        PARAMETER_DISPLAY_VALUE,
        PARAMETER_GROUP_ID,
        SESSION_ID,
        PARAMETER_LEVEL,
        FACILITY_ID,
        HOSPITAL_ID,
        PARAMETER_CODE,
        FB_CONTROL
    }

    public enum StockPointEnum
    {
        [Description("STP_ALIAS")]
        ALIAS_CODE,
        [Description("DC_ALLOWDISC")]
        ALLOW_DISCOUNT_ON_SALES,
        [Description("DC_DISCAPP")]
        DISCOUNT_PERCENTAGE,
        [Description("DC_EDIT_IN_BILL")]
        CONCESSION_EDITABLE_IN_BILLING,
        [Description("EA_GRNMSGDAYS")]
        EXPIRY_ALERTS_ON_GRN_MSG,
        [Description("EA_GRNEXPIRY")]
        EXPIRY_ALERTS_ON_GRN_VALIDATION,
        [Description("EA_STNMSGDAYS")]
        EXPIRY_ALERTS_ON_STN_MSG,
        [Description("EA_STNEXPIRY")]
        EXPIRY_ALERTS_ON_STN_VALIDATION,
        [Description("EA_BILLINGMSGDAYS")]
        EXPIRY_ALERTS_ON_POS_MSG,
        [Description("EA_BILLINGEXPIRY")]
        EXPIRY_ALERTS_ON_POS_VALIDATION,
        [Description("EA_ADJMSGDAYS")]
        EXPIRY_ALERTS_ON_ADJ_MSG,
        [Description("EA_ADJEXPIRYDAYS")]
        EXPIRY_ALERTS_ON_ADJ_VALIDATION,
        [Description("RV_ROUNDTYPE")]
        ROUNDING_VALUE_TYPE,
        [Description("RV_ROUND")]
        ROUNDING_VALUE,
        [Description("PM_PAYMODES")]
        PAYMENT_MODE,
        [Description("TP_GRN")]
        TP_GRN,
        [Description("TP_NRD")]
        TP_NRD,
        [Description("TP_RDC")]
        TP_RDC,
        [Description("TP_RDR")]
        TP_RDR,
        [Description("TP_PO")]
        TP_PO,
        [Description("TP_PI")]
        TP_PI,
        [Description("TP_STR")]
        TP_STR,
        [Description("TP_STN")]
        TP_STN,
        [Description("TP_SAN")]
        TP_SAN,
        [Description("TP_SCN")]
        TP_SCN,
        [Description("TP_OPS")]
        TP_OPS,
        [Description("TP_OPR")]
        TP_OPR,
        [Description("TP_IPS")]
        TP_IPS,
        [Description("TP_IPR")]
        TP_IPR,
        [Description("TP_IMO")]
        TP_IMO,
        [Description("DA_GRN")]
        DIRECT_APPROVAL_GRN,
        [Description("DA_NRD")]
        DIRECT_APPROVAL_NRD,
        [Description("DA_RDC")]
        DIRECT_APPROVAL_RDC,
        [Description("DA_RDR")]
        DIRECT_APPROVAL_RDR,
        [Description("DA_PO")]
        DIRECT_APPROVAL_PO,
        [Description("DA_PI")]
        DIRECT_APPROVAL_PI,
        [Description("DA_STR")]
        DIRECT_APPROVAL_STR,
        [Description("DA_STN")]
        DIRECT_APPROVAL_STN,
        [Description("DA_SAN")]
        DIRECT_APPROVAL_SAN,
        [Description("DA_SCN")]
        DIRECT_APPROVAL_SCN,
        [Description("DA_OPS")]
        DIRECT_APPROVAL_OPS,
        [Description("DA_OPR")]
        DIRECT_APPROVAL_OPR,
        [Description("DA_IPS")]
        DIRECT_APPROVAL_IPS,
        [Description("DA_IPR")]
        DIRECT_APPROVAL_IPR,
        [Description("DA_IMO")]
        DIRECT_APPROVAL_IMO,
        [Description("GS_POM")]
        PO_MANDATORY,
        [Description("GS_SIMT")]
        SINGLE_INVOICE_MULTIPLE_TIMES,
        [Description("GS_SC")]
        SECURITY_CHECK,
        [Description("GS_ICL")]
        INWARD_CHECK_LIST,
        [Description("GS_QCC")]
        QUALITY_CONTROL_CHECK,
        [Description("GS_BCL")]
        BARCODE_LABELLING,
        [Description("PSS_TG")]
        TOKEN_GENERATION,
        [Description("PSS_SPC")]
        SEPERATE_PAYMENT_COUNTER,
        [Description("PSS_IL")]
        INSTRUCTION_LABELLING,
        [Description("PSS_QCC")]
        QULITY_CONTROL_CHECK,
        [Description("PSS_DC")]
        DISPATCH_COUNTER,
        [Description("PR_APR")]
        ACCEPT_PATIENT_RETURNS,
        [Description("PR_LPR")]
        LESS_ON_PATIENT_RETURN,
        [Description("PR_PRA")]
        PERCENTAGE_ON_PATIENT_RETURNS,
        [Description("PR_LPRP")]
        LESS_ON_PATIENT_RETURNS_PERCENTAGE,
        [Description("VD_PODAYS")]
        VALIDITY_PO_DAYS,
        [Description("VD_PIDAYS")]
        VALIDITY_PI_DAYS,
        [Description("VD_TRDAYS")]
        VALIDITY_MRQ_DAYS,
        [Description("VD_MODAYS")]
        VALIDITY_MED_ORDER_DAYS,
        [Description("VD_LCDAYS")]
        VALIDITY_LEDGER_DAYS,
        [Description("VD_STNDAYS")]
        VALIDITY_STN_DAYS,

        [Description("DEF_BILL_TYPE")]
        DEFAULT_BILL_TYPE,
        [Description("CURR_ID")]
        CURRENCY_ID,
        [Description("CURR_NAME")]
        CURRENCY_NAME,
        [Description("BARCODE")]
        BARCODE,
        [Description("CIMSREQ")]
        CIMSREQ,
        [Description("RULE_ID")]
        TAX_RULE_ID,
        [Description("BILL_MIN_AMT")]
        MINIMUM_BILL_AMT,
        [Description("DA_MRQ")]
        DIRECT_APPROVAL_MRQ,
        [Description("STP_TYPE")]
        STP_TYPE,
        [Description("IS_DOC_DISC")]
        Is_Doctor_Discount,
        [Description("DOC_DISC_PER")]
        Doctor_Discount_Percentage,
        [Description("SHOW_TAXPER_INOP_PHARMA")]
        SHOW_TAXPER_INOP_PHARMA,
        [Description("IS_ITEM_CONC_INOP_PHARMA")]
        IS_ITEM_CONC_INOP_PHARMA,
        [Description("IS_CONC_REQ_INIP_PHARMA")]
        IS_CONC_REQ_INIP_PHARMA,
        [Description("DEFAULT_CONC_INOP_PHARMA")]
        DEFAULT_CONC_INOP_PHARMA,
        [Description("OP_TAX_PER")]
        OP_TAX_PER,
        [Description("SHOW_ADMNNO_INOP_PHARMA")]
        SHOW_ADMNNO_INOP_PHARMA,
        [Description("SHOW_NUR_INDENT_FIRST")]
        SHOW_NUR_INDENT_FIRST,
        [Description("CONTRACT_DAYS")]
        CONTRACT_DAYS,
        [Description("IS_MEDISPAN_CIMS")]
        IS_MEDISPAN_CIMS,
        [Description("REQ_ALLERGY_INPRESC")]
        REQ_ALLERGY_INPRESC,
        [Description("INCLUDE_PROD_INALRGY")]
        INCLUDE_PROD_INALRGY,
        [Description("REQ_INTRCTNS_INPRESC")]
        REQ_INTRCTNS_INPRESC,
        [Description("REQ_FILLS_CHKIN_INTCTNSALRGY")]
        REQ_FILLS_CHKIN_INTCTNSALRGY,
        [Description("IS_PIMS_HL7")]
        IS_PIMS_HL7,
        [Description("ALRGY_MSG_TYPE")]
        ALRGY_MSG_TYPE,
        [Description("ALLW_PERAMT_PAT_RECEIPT")]
        ALLW_PERAMT_PAT_RECEIPT,
        [Description("PERAMT_COLLECT_FROM_PAT")]
        PERAMT_COLLECT_FROM_PAT,
        [Description("ALLW_PAT_STMT")]
        ALLW_PAT_STMT,
        [Description("PAT_STMT_DAYS")]
        PAT_STMT_DAYS,
        [Description("ALLW_DUE_IN_CLAIM")]
        ALLW_DUE_IN_CLAIM,
        [Description("IS_TRANSCD_MANDATORY")]
        IS_TRANSCD_MANDATORY,
        [Description("IS_PAS_DIRESCT")]
        IS_PAS_DIRESCT,
        [Description("SHOW_ALL_CTRLS")]
        SHOW_ALL_CTRLS,
        [Description("FILL_CANCL_DAYS")]
        FILL_CANCL_DAYS,
        [Description("PRESC_DAYS_FOR_BLOCK")]
        PRESC_DAYS_FOR_BLOCK,
        [Description("PRESC_FROMDAYS_FOR_REFILL")]
        PRESC_FROMDAYS_FOR_REFILL,
        [Description("PRESC_TODAYS_FOR_REFILL")]
        PRESC_TODAYS_FOR_REFILL,
        [Description("IS_SCAN_MANDATORY")]
        IS_SCAN_MANDATORY,
        [Description("IS_SUPLYDAYS_MANDATORY")]
        IS_SUPLYDAYS_MANDATORY,
        [Description("SHOW_PENDMSG_INPRESC")]
        SHOW_PENDMSG_INPRESC,
        [Description("SHOW_PAT_DUE_ALERT")]
        SHOW_PAT_DUE_ALERT,
        [Description("SHOW_DUEALERT_WHEN")]
        SHOW_DUEALERT_WHEN,
        [Description("IS_FINAPP_REQ")]
        IS_FINAPP_REQ,
        [Description("SHOW_MONOGRAPH_BTN")]
        SHOW_MONOGRAPH_BTN,
        [Description("DA_NMPAT")]
        DA_NMPAT,
        [Description("DA_VCRCT")]
        DA_VCRCT,
        [Description("DA_QREQ")]
        DA_QREQ,
        [Description("DA_QENTRY")]
        DA_QENTRY,
        [Description("DA_QCOMP")]
        DA_QCOMP,
        [Description("DA_REUSEITM")]
        DA_REUSEITM,
        [Description("ALLOW_DISC_SALES")]
        ALLOW_DISC_SALES,
        [Description("CON_EDIT_BILL")]
        CON_EDIT_BILL,
        [Description("ALLOW_DOC_DISCNT")]
        ALLOW_DOC_DISCNT,
        [Description("DEFAULT_CON_OPBILL")]
        DEFAULT_CON_OPBILL,
        [Description("DA_MRN")]
        DA_MRN,
        [Description("RULE_CD")]
        TAX_RULE_NAME,
        [Description("IS_IND_MAN_IPBILL")]
        IS_IND_MAN_IPBILL

    }

    public enum CreditOrgEnum
    {
        ADDRESSTYPE
    }

    public enum BedManagemantEnum
    {
        WARDS,
        BED,
        ROOM,
        BLOCKS,
        FLOORS,
        WARDGROUPS,
        BEDTYPES,
        NURSESTATION,
        WING
    }

    public enum DrProfType
    {
        BRIDGES_TO_EXCELLENCE = 1,
        Achievements,
        MEMBERSHIP,
        INTERESTS,
        RESEARCH,
        PUBLICATIONS,
        CONFERENCES,
        HOSPITALS

    }

    public enum IPAdmission
    {
        ADT_DSCHRG,
        ADT_ADMN,
        ICD,
        ADT_DIAG,
        ADT_DIAG_ICD,
        ADT_DELVRY,
        FO_BILL_CNCL,
        ADT_PREADMN,
        MERGE_UMRNO,
        ADT_BED_MNGMNT,
        STATUS_CNCL
    }

    public enum AutoCodes
    {
        FO_RECPAY_CNCL,
        FO_REGISTRATION,
        FO_RECPAY,
        FO_BILL,
        FO_BILL_CNCL,
        ASSAY,
        ASSAY_SPEC_COL,
        ASSAY_CANCEL,
        ASSAY_RESULT,
        ASSAY_FORMAT,
        ASSAY_TEMPLATE,
        COMPONENT,
        COMPONENT_VALUE,
        COMPONENT_VALUE_SET,
        EMPLOYEE,
        ANTIBIOTIC_HEADER,
        LABNO,
        VOUCHER_PAYMENT,
        BARCODE_GEN,
        ADT_IMR,
        ADT_IMR_CNCL,
        ADT_SRV_LOCK,
        ADT_CREDIT_LIMIT,
        BILL_SETMNT,
        ADT_DSCHRG_FRMT,
        ADT_DSCHRG_SUM,
        ADT_DISCNT,
        ADT_APPBILL,
        PACKAGE_CONV,
        ADT_ADMN_CNCL,
        RECOMMENDATIONS,
        SURGIRIES,
        PATIENT_MEDICATIONS,
        ALLERGIES,
        ADT_WARD_AUTO_CHRG,
        IMMUNIZATIONS,
        DAYCARETYPE,
        OPD_PROC,
        FO_OPD_BILL,
        FO_OPD_BILL_REQ,
        DSCRD_PRF_TAX,
        ADT_INDENT_CNCL,
        NU_IND,
        NST_PGS_NOTE,
        NST_DOC_VST,
        NST_IN_OUT,
        FO_RECPAY_CHNG_PMODE,
        CHIEF_COMPLAINTS,
        NP_SUB_COMPLAINT0,
        ORDER_INVPROFILE,
        NP_PROFILE_SETUP,
        DM_DIET,
        DM_DIET0,
        GSINITIALVISIT,
        PO_TNC,
        DRUG_PRFLE,
        QU_TNC,
        ST_DRQ,
        ST_NRQ,
        ST_DRG_REC,
        ADT_CMP_STMT_FRMT,

        FO_BILL_CORPPKG,
        FO_BILL_IPCORP,
        FO_BILL_IPPKG,
        FO_BILL_IPF,
        FO_BILL_OPAS,
        FO_BILL_OSPM,
        FO_BILL_OSPB,
        FO_BILL_OPCORP,
        FO_BILL_CORPCONS,
        FO_BILL_OPM,
        FO_BILL_OPF,
        FO_BILL_OPCONS,
        FO_BILL_REG,
        HEALTH_CARD,
        NURSE_REQ_DOCTOR,
        NST_DOC_VST_CNCL,
        PERCENT_SETUP,
        PHYSICAL_EXAMINATION_MASTER,
        PRINT_RESET,
        CORONARY_ANGIOGRAPHY,
        CORONARY_BALLOON_ANGIOPLASTY,
        PAT_ALLERGIES,
        NUR_DIET_IND,
        EVENT,
        ADT_PATIENT_CONSLNG,
        INCIDENT,
        ADT_BED_REQ,
        ADT_MLC,
        ADT_FUND,
        CHECKLIST,
        HC_HEALTH_CARD,
        ECONOMIC_STATUS,
        INCIDENT_TYPE,
        VALIDATION_RULE,
        ADT_FUND_TRANSFER,
        PANEL,
        COMPANY_BILL_WF,
        FB_CONTROL_VALUE_SET,
        FB_QUESTION,
        FB_TEMPLATE,
        CASH_DENOMINATION,
        PAYMENT_MODE,
        ADT_TAX,
        CONSULTANT_ROOM,
        CPT,
        ADT_ADMN_DIABETIC_CHART,
        DP_POOL,
        DP_DOCTOR_PF_SRV_TEMPLATE,
        DP_DOCTOR_PF_CONTRACT,
        DP_DOCTOR_PF_PAY

    }

    public enum ReferalSource
    {
        PATIENT,
        DOCTOR,
        STAFF,
        ORGANIZATION,
        COMPANY,
        OTHER_DOCTORS,
        HOSPITALS,
        OTHER_HOSPITALS
    }

    public enum PARAMETER_NAME
    {

        [Description("Page Display")]
        DISPLAY_PAGE,
        [Description("Documents Date Format")]
        DATE_FORMAT,
        [Description("Update Required in Result Entry Approval")]
        UPDATE_REQ_APPROVAL,
        [Description("DB Documents Date Format")]
        DB_DATE_FORMAT,
        [Description("Radiology_Dept_Id")]
        RADIOLOGY_DEPT_ID,
        [Description("Is Centralized")]
        IS_CENTRALIZED,
        [Description("Registration Fee")]
        REG_FEE,
        [Description("Autocode Generation")]
        AUTOCODE,
        [Description("Is Sample Entry Needed")]
        ISSAMPLEENTRYNEEDED,
        [Description("Companyname")]
        COMPANYNAME,
        [Description("Company Address")]
        COMPANY_ADDRESS,
        [Description("Companylogo")]
        COMPANY_LOGO,
        [Description("Registration Validation")]
        REGVALIDATION,
        [Description("Consultation Validity")]
        CNSLTVALIDATION,
        [Description("No Of Times To Give Refunds")]
        TIMESTOREFUND,
        [Description("No Of Times To Give Post Discount")]
        NO_POST_DISCOUNTS,
        [Description("Op Service Cancellation Days")]
        OPSERCANCELDAYS,
        [Description("Consultation Cancel Days")]
        CONSCANCELDAYS,
        [Description("Is Mobile No.Mandatory In Op Billing")]
        MOBILEINOP,
        [Description("Allow Miscellaneous In Op Billing")]
        MISCINOPBILL,
        [Description("Allow Consultations In Op Billing")]
        CONSINOPBILL,
        [Description("Consider Registration Validity For Patients")]
        CONSPATREGVALD,
        [Description("While Saving Record Ask For Conformation")]
        CONFIRMSAVE,
        [Description("Is Header Visible")]
        ISHEADERVISIBLE,
        [Description("Is Logo Visible")]
        ISLOGOVISIBLE,
        [Description("Is Specimen Visible")]
        ISSPECIMENVISIBLE,
        [Description("Method Settings For Print")]
        ISMETHODVISIBLE,
        [Description("Is  BarCode Generate Automatically")]
        ISBARCODEGENERATE,
        [Description("Result Entry Applicable For Any Billing Finished Investgation Is")]
        ISRESULTENTRYUCBILLS,
        [Description("No of Questions")]
        NOOFQUESTIONS,
        [Description("Print By And Date")]
        IS_SHOW_PRINT_DATE,
        [Description("Is Audit Required")]
        IS_AUDIT_REQUIRED,
        [Description("Is Audit Options")]
        IS_AUDIT_OPTIONS,
        [Description("OP Lab Report When Due")]
        LAB_REPORT_WHEN_DUE,
        [Description("IP Result entry Service.No wise Required")]
        IPRES_SERVICEWISE,

        [Description("Registration Cancelation Days")]
        REG_Cncl_Days,

        [Description("Save old bill dt for IP final bill")]
        OLD_BILL_DT,
        [Description("No of Consultations Limit required")]
        NO_CNS_LIMIT,
        [Description("Allow to post pkg consultation to OSP patient in OP billing")]
        PKG_CNS_TO_OSP,
        [Description("Double print when Due/Concession/Credit/Cheque payment")]
        DOUBLE_PRINT_DCCC,
        [Description("Allow admitted patient in OP billing")]
        ADT_IN_OP,
        [Description("Is Investigation comparision Required.")]
        ASSY_COMPARISSION,

        [Description("Investigations Comparisions In Op Billing Is Required ")]
        ASSY_COMPARISSION_OPBILLING,

        [Description("Advance Mandatory for IP.")]
        ADVANCE_MANDATORY,

        [Description("Is referal doctor required in registration")]
        Is_ref_doc_in_reg,
        [Description("Due Remainders")]
        DUE_REMAINDER,
        [Description("Service")]
        SERVICE,
        [Description("Consultation")]
        CONSULTATION,
        [Description("Investigation")]
        INVESTIGATION,
        [Description("Alwimrconcession_Service")]
        AlwIMRConcsn_Service,
        [Description("Alwimrconcession_Consultation")]
        AlwIMRConcsn_Consultation,
        [Description("Alwimrconcession_Investigation")]
        AlwIMRConcsn_Investigation,
        [Description("Alwimrconcession_Professional")]
        AlwIMRConcsn_Professional,
        [Description("Room Charge Automation")]
        RMChrg_Auto,
        [Description("Apply Credit Limit")]
        Apply_Credit_Limit,
        [Description("Speciminvisible")]
        lab_specimin_visible,
        [Description("Is Edit Rate In Op Bill")]
        EditRate_InOpBill,
        [Description("Is Alllow User Wise Concession/creditlimit")]
        USER_CONC_CREDIT_LIMITS,
        [Description("Pwd Type")]
        PWD_TYPE,
        [Description("Password Conditions Req")]
        IS_PWD_REQUIRED,
        [Description("Pwd Exp Days")]
        PWD_EXP_DAYS,
        [Description("Msg Populate Days")]
        MSG_POPULATE_DAYS,
        [Description("Pwd Mini Length")]
        PWD_MIN_LENGTH,
        [Description("Password Validation")]
        PWD_VALIDATION,
        [Description("Need QuickLink With Module Description")]
        Need_QuickLink_Module_Desc,
        [Description("Result Entry Settings")]
        Result_Entry_Setting,
        [Description("IsEdtReqMiscSrv")]
        IsEdtReqMiscSrv,
        [Description("Show All Bedtypes In Bed Chart")]
        Allow_All_Bed_Types,
        [Description("Package Consultation Charge Settings")]
        Pkg_cons_charge_setting,
        [Description("Charge For All Doctors")]
        Charge_All_Doctors,
        [Description("Employee Age")]
        Employee_Age,
        [Description("MaxDecForAllAmts")]
        MaxDecForAllAmts,
        [Description("GlucoseTest")]
        LAB_GTT,
        [Description("SMS USer Id")]
        SMS_1,
        [Description("SMS Password")]
        SMS_2,
        [Description("SMS Sender Id")]
        SMS_3,
        [Description("Accreditation Required")]
        ACCREDITATION_REQUIRED,
        [Description("Is Registration Details Required In Transaction Forms")]
        RegDts_req_in_trans_forms,
        [Description("Service Tax For Corporate")]
        SERVICE_TAX_REQUIRED,
        [Description("Service Tax Required")]
        SERVICE_TAX_FLAT_OR_INDIVIDUAL,
        [Description("Is Corporate Tariff Required in IP Services")]
        IS_CORP_TARIFF_REQ_IN_IPSRVS,
        [Description("Is Pharmacy Integration Required")]
        IS_PHARMACY_INTEGRATION_REQUIRED,
        [Description("Pharmacy Module ID")]
        Pharmacy_Module_ID,
        [Description("Is Allergies From Medispan")]
        IsAllergiesFromMedispan,
        [Description("NoOfCopiesPerprint")]
        NoOfCopies,
        [Description("Tabs Required or not")]
        Tabs_Required_or_not,
        [Description("Show Critical Values")]
        Critical_Values,
        //for dispatch dashboard    
        [Description("ISMARGINTOP")]
        ISMARGINTOP,
        [Description("ISMARGINBOTTOM")]
        ISMARGINBOTTOM,
        [Description("ISHEADERHEIGHT")]
        ISHEADERHEIGHT,
        [Description("ISFOOTERHEIGHT")]
        ISFOOTERHEIGHT,
        [Description("ISMARGINTOPUNCHECK")]
        ISMARGINTOPUNCHECK,
        [Description("ISMARGINBOTTOMUNCHECK")]
        ISMARGINBOTTOMUNCHECK,
        [Description("ISHEADERHEIGHTUNCHECK")]
        ISHEADERHEIGHTUNCHECK,
        [Description("ISFOOTERHEIGHTUNCHECK")]
        ISFOOTERHEIGHTUNCHECK,
        [Description("HtmlrptXaxis")]
        ISHTMLXAXIXS,
        [Description("HtmlrptYaxis")]
        ISHTMLYAXIXS,

        //end
        [Description("Ward Automation Required")]
        WARD_AUTOMATION_REQUIRED,
        [Description("Apply Credit Limit while indenting")]
        Apply_Credit_Limit_While_Indent,
        [Description("Indenting Time Interval")]
        Indenting_Time_Interval,
        [Description("Allow Concesson For Outside Service In Op")]
        Allow_Concession_For_Outside_Service_In_Op,
        [Description("Show Lab No")]
        Lab_No_Reqd,
        [Description("Sample Acknowledgement")]
        SampleAcknowledgement,
        [Description("Password Lock Attempts")]
        PASSWORD_LOCK_ATTEMPTS,
        [Description("Password History")]
        PWD_HISTORY,
        [Description("Verification Update Required")]
        VerificationUpdate,
        [Description("Approval Update Required")]
        ApprovalUpdate,
        [Description("BarCode Print Required")]
        BarCodePrint,
        [Description("Doctor Prescription Required")]
        Doctor_Prescription_Required,
        [Description("Is Pre Admission Mandatory")]
        Is_Pre_Admission_Mandatory,
        [Description("IP Result View Without Approval")]
        IP_Result_View_Without_Approval,
        [Description("QMS Req")]
        QMS_REQD,
        [Description("Allow Service Entry For Service Call Off For The Designation")]
        Allow_Service_Entry_For_Srv_Call_Off_For_Designation,
        [Description("Enable Inbox alert")]
        Enable_Inbox_alert,
        [Description("Drug Administrative Charges")]
        Drug_Administrative_Charges,
        [Description("Casuality Credit Limit For OP")]
        Casuality_Credit_Limit_For_OP,
        [Description("IP Sample Acknowledgement")]
        IPSampleAcknowledgement,
        [Description("New Born Percentage")]
        New_Born_Percentage,
        [Description("Allow Refund Amount Up To Receipt Amount")]
        Allow_Refund_Amount_Up_To_Receipt_Amount,
        [Description("Is MyAccounts Integration Required")]
        Is_MyAccounts_Integration_Required,
        [Description("Allow Discharge Date Manually In IP Discharge")]
        Allow_Discharge_Date_Manually_In_IP_Discharge,
        [Description("Allow Print in Result View")]
        Allow_Print_in_Result_View,
        [Description("Emergency Slot1")]
        Emergency_Slot1,
        [Description("Emergency Slot2")]
        Emergency_Slot2,
        [Description("Emergency Slot3")]
        Emergency_Slot3,
        [Description("Days Consider For Reg.Details")]
        Days_Consider_For_Reg_Details,
        [Description("Is Sample Billing Pending For Approval")]
        Is_Sample_Billing_Pending_For_Approval,
        [Description("Show IP Option")]
        Show_IP_Option,
        [Description("NO OF DAYS ESTIMATED BILLS REQUIRED IN SAMPLE REGISTRATION")]
        No_Of_Days_Estimated_Bills_Required_In_Sample_Registration,
        [Description("Both Print and Prescription at Saving Time")]
        Both_Print_and_Prescription_at_Saving_Time,
        [Description("Is Upload/Download Req")]
        Is_Upload_Download_Req,
        [Description("Verify Results")]
        verify_results,
        [Description("Is Show New Requirements")]
        Is_Show_New_Req,

        [Description("Pre Printed Barcode")]
        IS_REQ_PRE_PRINTED_BARCODE,



        [Description("Is Refund Direct Approval")]
        Is_Refund_Direct_Approval,
        [Description("Is Save Alert Required")]
        Is_Save_Alert_Required,
        [Description("Need To Show Reg Doctor")]
        Need_To_Show_Reg_Doctor,
        [Description("Is Formulary Required")]
        Is_Formulary_Required,
        [Description("Days Consider To Show Reg Doctor")]
        Days_Consider_To_Show_Reg_Doctor,

        [Description("Only Balanced Patients In Receiption")]
        Only_Balanced_Patients_In_Receiption,
        [Description("Default Details For Clients")]
        Default_Details_For_Clients,
        [Description("Any Center Payment Option For Due")]
        Any_Center_Payment_Option_For_Due,
        [Description("SRS And RCS No Of Pages Required")]
        SRS_And_RCS_No_Of_Pages_Required,
        [Description("Bed Transfer Request")]
        Bed_Transfer_Request,
        [Description("Is Screen Mask Required")]
        Is_Screen_Mask_Required,
        [Description("Apply Barcode Rules According To Slims")]
        Apply_Barcode_Rules_According_To_Slims,
        [Description("Is Extended Display Req")]
        Is_Extended_Display_Req,
        [Description("Is User Session Tracking")]
        Is_User_Session_Tracking,
        [Description("Is Nurse Bed Vacate Required")]
        Is_Nurse_Bed_Vacate_Required,
        [Description("Display Name In Registration")]
        REGDISPLAYNAME,
        [Description("DischargeSummaryAutoApprove")]
        Discharge_Summary_Auto_Approve,
        [Description("New User lock days")]
        NEW_USER_LOCK_DAYS,
        [Description("History Details Req In Days")]
        History_Details_Req_In_Days,

        [Description("Is Billing User")]
        IsBillingUser,

        [Description("Cancelation Auto Refund")]
        Cancelation_Auto_Refund,

        [Description("CREDIT_LIMIT_EXPIRED")]
        CREDIT_LIMIT_EXPIRED,

        [Description("Default Nationality")]
        Default_Nationality,
        [Description("Request Approval")]
        Request_Approval,
        [Description("Bed Transfer")]
        Bed_Transfer,
        [Description("Allow Consultations In Op Billing")]
        Allow_Consultations_InOPBilling,
        [Description("Req Approval Letter When Admitted & Billing Ward Differs")]
        Req_App_Letter_ADT_Ward_Varies,
        [Description("Block Other Beds Of Admitted ward in case of Single ward in Demand")]
        Block_Other_Beds_OnPat_Single_Ward_Demand,
        [Description("Registration and Billing Concession Applicable")]
        Registration_Billing_Concession_Applicable,
        [Description("Allow Registration Expiry Patients In Op Billing")]
        Allow_Registration_Expiry_Patients_In_Op_Billing,
        [Description("Base Currency")]
        Base_Currency,

        [Description("DND Enabled By Default")]
        DND_Enabled_By_Default,

        [Description("Family Reference Selection Consultent And Referals Enabled By Default")]
        Family_Reference_Selection_Consultent_And_Referals_Enabled_By_Default,

        [Description("Allow due in reg & con")]
        Allow_due_in_reg_and_con,

        [Description("Service Cancellation Before")]
        Service_Cancellation_Before,

        [Description("Apply Company Approval")]
        Apply_Company_Approval,

        [Description("Is Mlc Police Intimation Received or Not")]
        Is_Mlc_Police_Intimation_Received_or_Not,
        [Description("Funds Validity Days")]
        Funds_Validity_days,
        [Description("IS REQ NST PAT LABLES")]
        IS_REQ_NST_PAT_LABLES,
        [Description("Test Occurency Required In Billing")]
        Test_Occurency_Required_In_Billing,
        [Description("Allow History Details In Billing")]
        Allow_History_Details_In_Billing,
        [Description("Allow Adimited Patients In Op Billing")]
        Allow_Adimited_Patients_In_Op_Billing,
        [Description("Sample Collection for IP")]
        Allow_Acknowledge_Print_for_ImrSrevice,
        [Description("IsProfessionalChargesEdit")]
        IsProfessionalChargesEdit,
        [Description("IsConsultationEdit")]
        IsConsultationEdit,
        [Description("Allow Multiple Admissions under same UmrNo")]
        Allow_Mltple_admns_umrno,
        [Description("Allow Admission Date To Change")]
        Allow_Admission_Date_To_change,
        [Description("ER_MobileNo_Mandatory")]
        ER_MobileNo_Mandatory,

        [Description("IsHealthCardReq")]
        IsHealthCardReq,

        [Description("WINDOW_POPUP")]
        WINDOW_POPUP,

        [Description("REG FEE AUTO FILL IN CASH")]
        REG_FEE_AUTO_FILL_IN_CASH,

        [Description("Is OTP in Change Password")]
        Is_OTP_Change_Password,
        [Description("Is OTP in Forgot Password")]
        Is_OTP_Forgot_Password,

        [Description("TIME FORMAT")]
        TIME_FORMAT,
        [Description("Is applicable Service charges percentage amt")]
        Is_applicable_Service_charges_percentage_amt,
        [Description("COVERT OP SERVICES AS IP SERVICES")]
        COVERT_OP_SERVICES_AS_IP_SERVICES,
        [Description("No Of Supply Bills")]
        No_Of_Supply_Bills,
        [Description("Company Expire Alert ")]
        Company_Expire_Alert,
        [Description("Required provision to delete package includes")]
        Required_provision_to_delete_package_includes,
        [Description("CARD TRANSACTION OTP REQUIRED")]
        CARD_TRANSACTION_OTP_REQUIRED,
        [Description("Require Shift Handover/Submittion before Shift Login")]
        REQ_SHIFTHRANDSUB_FOR_SHIFTLOG,
        [Description("IS_SENT_TO_BILL_WITHOUT_DSUMMARY")]
        IS_SENT_TO_BILL_WITHOUT_DSUMMARY,
        [Description("mobile number required")]
        mobile_number_required,
        [Description("Is Automatic Visit")]
        IS_AUTOMATIC_VISIT,
        [Description(" Org Tariff Name")]
        Org_Tariff_Name,
        [Description(" After Company Expire Alert")]
        After_Company_Expiry_Alert,
        [Description(" Corporate Credit Limit Percentage Amt")]
        Corporate_Credit_Limt_Percentage_Amt,
        [Description("Is Appointment Slots Required")]
        Is_Appointment_Slots_Required,

        [Description("Is Dischagre Request")]
        Is_Dischagre_Request,

        [Description("Required Multiple Currency")]
        Req_Multiple_currency,
        [Description("Company Referal validity expiring Days")]
        COMPANY_REFERAL_VALIDITY_EXPIRING_DAYS,
        [Description("REFERAL VALIDITY EXPIRING DAYS")]
        REFERAL_VALIDITY_EXPIRING_DAYS,
        [Description("Free followup visit required for Package")]
        FREE_FOLLOWUP_VISIT_REQUIRED_FOR_PACKAGE,
        [Description("Credit Card service charge")]
        CREDIT_CARD_SERVICE_CHARGE,
        [Description("additinal services Discount considering days")]
        additinal_services_Discount_considering_days,
        DONOR_MINIMUM_WEIGHT,
        [Description("DONOR_DATA_CHANGES_WITHIN_DAYS")]
        DONOR_DATA_CHANGES_WITHIN_DAYS,
        [Description("BLOOD_BAGS_EXPIRY_BEFORE_DAYS")]
        BLOOD_BAGS_EXPIRY_BEFORE_DAYS,
        [Description("MINIMUM_AGE_IN_YEARS")]
        MINIMUM_AGE_IN_YEARS,
        [Description("Minimum_Days_B/w_Previews_And_Current_Donation")]
        Minimum_Days_Bw_Previews_And_Current_Donation,
        [Description("package consultation considering days")]
        package_consultation_considering_days,

        [Description("NO_OF_VISITOR_PASSES")]
        NO_OF_VISITOR_PASSES,
        [Description("NO_OF_VEHICLE_PASSES")]
        NO_OF_VEHICLE_PASSES,
        [Description("NO_OF_ATTEND_PASSES")]
        NO_OF_ATTEND_PASSES,

        [Description("IS ASSESMENT REQUIRED")]
        IS_ASSESMENT_REQUIRED,
        [Description("Time Min")]
        Time_Min,
        [Description("Corporate_approval_Limt_Percentage_Amt")]
        Corporate_approval_Limt_Percentage_Amt,
        [Description("Admission check In")]
        Admission_check_In,
        [Description("Admission check Out")]
        Admission_check_Out,
        [Description("Er Holding Time")]
        ER_Holding_Time,
        [Description("Minimum_Days_Blood_Bag_Reserved")]
        Minimum_Days_Blood_Bag_Reserved,
        [Description("Refund_Amount")]
        Refund_Amount,
        [Description("IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED")]
        IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED,
        [Description("Max_Indents_Per_Day")]
        Max_Indents_Per_Day,
        [Description("Max_Items_Per_Day")]
        Max_Items_Per_Day,
        [Description("Luxury Tax Amount")]
        Luxury_Tax_Amount,
        [Description("Is Mobile No Mandatory")]
        Is_Mobile_No_Mandatory,
        [Description("Extended Display Window")]
        Extended_Display_Window,
        [Description("Is PAS Integration Req")]
        Is_PAS_Integration_Req,

        /*ittadi*/
        /*  [Description("Request For Doc Vst NoOf Days")]
          RequstforDctvstNoofDays,*/


        [Description("Company Prcnt Visibility")]
        Company_Prcnt_Visibility,
        [Description("Rate Editable for Phar Items")]
        Rate_Editable_for_Phar_Items,
        [Description("Default Password")]
        Default_Password,
        [Description("Default Transaction Password")]
        Default_Transaction_Password,
        [Description("Shift_Alert_per")]
        Shift_Alert_per,
        [Description("Shift_Limit_amt")]
        Shift_Limit_amt,
        [Description("NBM_HOURS")]
        NBM_HOURS,
        [Description("Is_Dialosys_WardGroup")]
        Is_Dialosys_WardGroup,
        [Description("IS_DIALOSYS_EQUIPMENT")]
        IS_DIALOSYS_EQUIPMENT,
        [Description("DIALOSYS DEPARTMENT")]
        Dialysis_Dept,
        [Description("IS_PHYSIOTHERAPY_EQUIPMENT")]
        IS_PHYSIOTHERAPY_EQUIPMENT,

        [Description("IS DOCTOR SOLTS REQUIRED")]
        Is_Doctor_Solts_Required,

        [Description("CONSULTANT PREFIX REQUIRED")]
        CONSULTANT_PREFIX_REQUIRED,

        [Description("EMR MIGRATION ID")]
        EMR_MIGRATION_ID,

        [Description("ORDERING PHYSICIAN LIMITED DAYS")]
        ORDERING_PHYSICIAN_LIMITED_DAYS,

        [Description("ALLOW DUE IN OPD SCREEN")]
        ALLOW_DUE_IN_OPD_SCREEN,
        [Description("ALLOW BARCODE PRINT DIRECTLY")]
        ALLOW_BARCODE_PRINT_DIRECTLY,
        [Description("Service Group/Type Wise Concession Applicable")]
        Service_Group_Type_Wise_Concession_Applicable,

        [Description("Osp Billing Required")]
        Osp_Billing_Required,

        [Description("FCPORR")]
        Food_Charges_part_Of_Room_Rent,
        [Description("RARTDFTNAP")]
        Raise_Auto_Request_To_Dietician_For_The_New_Admitted_Patient,
        [Description("DDRI")]
        DIETARY_DEPARTMENT_REFERENCE_ID,

        [Description("Is Result Processed with QC")]
        Is_Result_Processed_with_QC,
        [Description("Mobile No Maximum Digits")]
        Mobile_No_Maximum_Digits,
        [Description("Mobile No Minimum Digits")]
        Mobile_No_Minimum_Digits,
        [Description("DIALIZER")]
        DIALIZER,
        [Description("PATIENT NEW INFORMATION")]
        PATIENT_NEW_INFORMATION,
        [Description("DAYS FOR HIC ACTIVITY SCHEDULE REMAINDER")]
        DAYS_FOR_HIC_ACTIVITY_SCHEDULE_REMAINDER,
        [Description("DEFAULT GRID PAGE SIZE")]
        DEFAULT_GRID_PAGE_SIZE,
        [Description("VACCINATION FOR NEW EMPLOYEE")]
        VACCINATION_FOR_NEW_EMPLOYEE,

        [Description("Health Checkup Package Dietory Details Include")]
        Health_Checkup_Package_Dietory_Details_Include,
        [Description("Autocompletion Prefix Length")]
        Autocompletion_Prefix_Length,
        [Description("Ward To Ot Patient Mvmnt")]
        OTCHECKIN,

        [Description("Days to validate Verify Mobile No")]
        Days_to_validate_Verify_Mobile_No,

        [Description("Prescription Print Configuration Setting")]
        Prescription_Print_Configuration_Setting,
        [Description("Consultation Print Settings")]
        Consultation_Print_Settings,
        [Description("POST DISCOUNT APPROVAL ALERT")]
        POST_DISCOUNT_APPROVAL_ALERT,
        [Description("Appointment Contact No")]
        APPOINTMENT_CONTACT_NO,
        [Description("Emergency Contact No")]
        EMERGENCY_CONTACT_NO,
        [Description("Casuality Duty Doctor")]
        Casuality_Duty_Doctor,
        [Description("Required IP Bill Report Handover Details")]
        Required_IP_Bill_Report_Handover_Details,
        [Description(" Cash Credit Limit Percentage Amt")]
        Cash_Credit_Limt_Percentage_Amt,
        [Description("RIS Schedule Mandatory")]
        RIS_Schedule_Mandatory,
        [Description("Create_Individual Indent")]
        Create_Individual_Indent,
        [Description("HK TIME")]
        HK_TIME,
        [Description("DISCHARGE TIME")]
        DISCHARGE_TIME,
        [Description("Is Collection point reqd in sample collection")]
        IS_COLLECTION_POINT_REQD_IN_SAMPLE_COLLECTION,
        [Description("Department Consumption is Based On Item Wise")]
        Department_Consumption_is_Based_On_Item_Wise,
    }


    public enum PARAMETER_VALUE
    {
        [Description("New Page")]
        NEW_PAGE,
        [Description("Grid")]
        GRID,
        [Description("Automatically")]
        AUTOGENERATE,
        [Description("Manually")]
        MANUAL,
        [Description("Decentralized")]
        DECENTRALIZED,
        [Description("Centralized")]
        CENTRALIZED,
        [Description("1 YEAR")]
        ONE_YEAR,
        [Description("3 MONTHS")]
        THREE_MONTHS,
        [Description("6 MONTHS")]
        SIX_MONTHS,
        [Description("9 MONTHS")]
        NINE_MONTHS,
        [Description("Message")]
        MESSAGE,
        [Description("None")]
        NONE,
        [Description("Validation")]
        VALIDATION,
        [Description("MainGroupWiseSelectionandResultEntry")]
        GROUPWISE,
        [Description("All Main Groups at a Time Result Entry")]
        ALLGROUPS,
        [Description("Doctor Wise Variation")]
        DOC_WISE_VARIATION,
        [Description("Fixed Charge For All Doctors")]
        FIX_CHARGE_FRALL_DOCTORS,
        [Description("Package Percentage")]
        PKG_PERCENTAGE,
        [Description("Service tax Flat for all Org.")]
        SRV_TAX_FLAT,
        [Description("Service Tax Organization Wise")]
        SRV_TAX_IND_FOR_ORG,
        [Description("Password Lock Attempts")]
        PASSWORD_LOCK_ATTEMPTS,
        [Description("Password Complexity Numerics")]
        PWD_CMPTY_NUMERICS,
        [Description("Password Complexity Characters")]
        PWD_CMPTY_CHARACTERS,
        [Description("Password Complexity Alphabets")]
        PWD_CMPTY_ALPHABETS,
        [Description("10")]
        FUND_TEN_DAYS,
        [Description("1")]
        Org_Tariff_Name,
        [Description("Free followup visit required for Package")]
        FREE_FOLLOWUP_VISIT_REQUIRED_FOR_PACKAGE,
        [Description("Credit Card service charge")]
        CREDIT_CARD_SERVICE_CHARGE,
        [Description("DONOR_MINIMUM_WEIGHT")]
        DONOR_MINIMUM_WEIGHT,
        [Description("DONOR_DATA_CHANGES_WITHIN_DAYS")]
        DONOR_DATA_CHANGES_WITHIN_DAYS,
        [Description("BLOOD_BAGS_EXPIRY_BEFORE_DAYS")]
        BLOOD_BAGS_EXPIRY_BEFORE_DAYS,
        [Description("MINIMUM_AGE_IN_YEARS")]
        MINIMUM_AGE_IN_YEARS,
        [Description("Minimum_Days_B/w_Previews_And_Current_Donation")]
        Minimum_Days_Bw_Previews_And_Current_Donation,
        [Description("Minimum_Days_Blood_Bag_Reserved")]
        Minimum_Days_Blood_Bag_Reserved,
        [Description("Refunds_Max_Days")]
        Refunds_Max_Days,
        [Description("Luxury Tax Amount")]
        Luxury_Tax_Amount,
        [Description("IS DRUG INDENT ITEMS COUNT LIMIT IS REQURED")]
        IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED,
        [Description("Max_Indents_Per_Day")]
        Max_Indents_Per_Day,
        [Description("Max_Items_Per_Day")]
        Max_Items_Per_Day,
        [Description("Is Mobile No Mandatory")]
        Is_Mobile_No_Mandatory,
        [Description("Extended Display Window")]
        Extended_Display_Window,
        [Description("Is PAS Integration Req")]
        Is_PAS_Integration_Req,

        /* [Description("Request For Doc Vst NoOf Days")]
         RequstforDctvstNoofDays,*/


        [Description("Default Password")]
        Default_Password,
        [Description("Default Transaction Password")]
        Default_Transaction_Password,
        [Description("Shift_Alert_per")]
        Shift_Alert_per,
        [Description("Shift_Limit_amt")]
        Shift_Limit_amt,
        [Description("NBM_HOURS")]
        NBM_HOURS,

        [Description("FCPORR")]
        Food_Charges_part_Of_Room_Rent,
        [Description("RARTDFTNAP")]
        Raise_Auto_Request_To_Dietician_For_The_New_Admitted_Patient,
        [Description("DDRI")]
        DIETARY_DEPARTMENT_REFERENCE_ID,

        [Description("Is_Dialosys_WardGroup")]
        Is_Dialosys_WardGroup,
        [Description("IS_DIALOSYS_EQUIPMENT")]
        IS_DIALOSYS_EQUIPMENT,
        [Description("DIALOSYS DEPARTMENT")]
        Dialysis_Dept,
        [Description("IS_PHYSIOTHERAPY_EQUIPMENT")]
        IS_PHYSIOTHERAPY_EQUIPMENT,
        [Description("Mobile No Maximum Digits")]
        Mobile_No_Maximum_Digits,
        [Description("Mobile No Minimum Digits")]
        Mobile_No_Minimum_Digits,
        [Description("DIALIZER")]
        DIALIZER,
        [Description("PATIENT NEW INFORMATION")]
        PATIENT_NEW_INFORMATION,
        [Description("DAYS FOR HIC ACTIVITY SCHEDULE REMAINDER")]
        DAYS_FOR_HIC_ACTIVITY_SCHEDULE_REMAINDER,
        [Description("DEFAULT GRID PAGE SIZE")]
        DEFAULT_GRID_PAGE_SIZE,
        [Description("VACCINATION FOR NEW EMPLOYEE")]
        VACCINATION_FOR_NEW_EMPLOYEE,
        [Description("Ward To Ot Patient Mvmnt")]
        OTCHECKIN,
        [Description("Days to validate Verify Mobile No")]
        Days_to_validate_Verify_Mobile_No,

        [Description("Prescription Print Configuration Setting")]
        Prescription_Print_Configuration_Setting,
        [Description("Consultation Print Settings")]
        Consultation_Print_Settings,
        [Description("POST DISCOUNT APPROVAL ALERT")]
        POST_DISCOUNT_APPROVAL_ALERT,
        [Description("REFERAL_VALIDITY_EXPIRING_DAYS")]
        REFERAL_VALIDITY_EXPIRING_DAYS,
        [Description("Emergency Contact No")]
        EMERGENCY_CONTACT_NO,
        [Description("Appointment Contact No")]
        APPOINTMENT_CONTACT_NO,
        [Description("Casuality Duty Doctor")]
        Casuality_Duty_Doctor,
        [Description("CREDIT_LIMIT_EXPIRED")]
        CREDIT_LIMIT_EXPIRED,
        [Description("Is Billing User")]
        IsBillingUser,
        [Description("Cancelation Auto Refund")]
        Cancelation_Auto_Refund,
        [Description("RIS Schedule Mandatory")]
        RIS_Schedule_Mandatory,
        [Description("Create_Individual Indent")]
        Create_Individual_Indent,
        [Description("HK TIME")]
        HK_TIME,
        [Description("DISCHARGE TIME")]
        DISCHARGE_TIME,
    }

    //public enum PARAMETER_CODE
    //{
    //    [StringValue("RMD")]
    //    Refunds_Max_Days,
    //    [StringValue("GEN_117")]
    //    Is_Doc_Level_Audit,
    //    [StringValue("GEN_119")]
    //    Is_Sample_Entry_Needed,
    //    [StringValue("CNSVDT")]
    //    Consultation_Validity,
    //    [StringValue("CONSULT")]
    //    Consultation,
    //    [StringValue("Reg")]
    //    Registration,
    //    [StringValue("COM_37")]
    //    Documents_Date_Format,
    //    [StringValue("GEN_02")]
    //    Document_Number_Formatt,
    //    [StringValue("COM_38")]
    //    Base_Currency,
    //    [StringValue("GEN_04")]
    //    saving_conformation,
    //    [StringValue("GEN_05")]
    //    Show_errmsg,
    //    [StringValue("GEN_06")]
    //    Employee_Age,
    //    [StringValue("COM_453")]
    //    MaxDecForAllAmts,
    //    [StringValue("LAB_07")]
    //    Result_Entry_Settings,
    //    [StringValue("LAB_08")]
    //    Settings_Print,
    //    [StringValue("LAB_09")]
    //    Service_Cancellation_for_Print,
    //    [StringValue("LAB_10")]
    //    Service_print_requied_inpatient,
    //    [StringValue("LAB_11")]
    //    Investigations_Comparision_inOPBill_required,
    //    [StringValue("LAB_12")]
    //    UOM_Needed_reports_separately,
    //    [StringValue("LAB_13")]
    //    Need_Integrated_billing_bloodbank,
    //    [StringValue("PNT_65")]
    //    ReceiptNo_date,
    //    [StringValue("PNT_66")]
    //    Referral_Details,
    //    [StringValue("PNT_67")]
    //    Cash_Amount,
    //    [StringValue("PNT_68")]
    //    Cheque_Amount,
    //    [StringValue("PNT_69")]
    //    Card_Amount,
    //    [StringValue("PNT_70")]
    //    Amount_InWords,
    //    [StringValue("PNT_71")]
    //    CreateBy_Date,
    //    [StringValue("PNT_72")]
    //    PrintBy_Date,
    //    [StringValue("PNT_73")]
    //    Allow_Concesson_outsideservice_inop,
    //    [StringValue("RPT_23")]
    //    GeneralOp_consultations,
    //    [StringValue("RPT_24")]
    //    Corprate_Opconsultations,
    //    [StringValue("RPT_25")]
    //    General_OpBills,
    //    [StringValue("RPT_26")]
    //    Corporate_OpBills,
    //    [StringValue("RPT_27")]
    //    Pharmacy_Bills,
    //    [StringValue("ACC_28")]
    //    Is_Accounts_required,
    //    [StringValue("ACC_29")]
    //    Is_Scroll_Using,
    //    [StringValue("ACC_30")]
    //    UserWise_Scroll,
    //    [StringValue("ACC_31")]
    //    Hospital_Scroll_Company,
    //    [StringValue("ACC_32")]
    //    Pharmacy_Scroll_Company,
    //    [StringValue("ACC_33")]
    //    Salary_Company,
    //    [StringValue("ACC_35")]
    //    Medical_Purchase_Company,
    //    [StringValue("ACC_36")]
    //    Pharmacy_VAT,
    //    //[StringValue("COM_39")]
    //    //BaseCurrency,
    //    [StringValue("COM_39")]
    //    CompanyName,
    //    [StringValue("COM_40")]
    //    CompanyLogo,
    //    [StringValue("COM_41")]
    //    Current_Financial_YearFrom,
    //    [StringValue("COM_42")]
    //    Current_Financial_YearTo,
    //    [StringValue("COM_43")]
    //    Max_Decimal,
    //    [StringValue("GEN_44")]
    //    Due_Remainders,
    //    [StringValue("GEN_45")]
    //    Doctor_Payments,
    //    [StringValue("GEN_46")]
    //    Noof_OpBill_DosPrint,
    //    [StringValue("GEN_47")]
    //    Allow_Concession_IMRPosting,
    //    [StringValue("GEN_48")]
    //    Osp_Needed,
    //    [StringValue("GEN_49")]
    //    Admission_Prefix_Settings,
    //    [StringValue("GEN_51")]
    //    Reset_AutoGenerationNo_EveryYear,
    //    [StringValue("GEN_52")]
    //    Modify_ApprovedTrans_Days,
    //    [StringValue("GEN_54")]
    //    Allow_AdimitedPatients_InOpBilling,
    //    [StringValue("GEN_55")]
    //    Doctor_PresCription_Required,
    //    [StringValue("GEN_56")]
    //    Consider_RegValidity_Patients,
    //    [StringValue("GEN_57")]
    //    Allow_Consultations_InOPBilling,
    //    [StringValue("GEN_58")]
    //    PrintSettings_Required,
    //    [StringValue("GEN_59")]
    //    ProfessionalTax_OnBill,
    //    [StringValue("GEN_60")]
    //    MobileNo_MandatoryInOpBilling,
    //    [StringValue("GEN_61")]
    //    Show_AllBedTypes_INBedChart,
    //    [StringValue("GEN_62")]
    //    Apply_Credit_Limit,
    //    [StringValue("LAB_63")]
    //    ResEntryAplicbl_BFInvestgation,
    //    [StringValue("LAB_64")]
    //    OldNew_Setup,
    //    [StringValue("PNT_65")]
    //    ReceiptNo_Date,
    //    [StringValue("PNT_95")]
    //    NoOfCopiesPerprint,
    //    [StringValue("PNT_96")]
    //    IsPrintCountCheck,
    //    //[StringValue("PNT_73")]
    //    //Allow_Concesson_outsideservice_op,
    //    [StringValue("PNT_74")]
    //    EditRate_InOpBill,
    //    [StringValue("PNT_75")]
    //    Laser_Print,
    //    [StringValue("PNT_76")]
    //    Days_Consider_OpConstn_InOpBilling,
    //    [StringValue("PNT_77")]
    //    DrWise_ServiceChargeInc_InOpBilling,
    //    [StringValue("PNT_78")]
    //    ShowOpServices_InIpCorporateBilling,
    //    [StringValue("PNT_79")]
    //    IpBillCancelDays_Dichargedpatients,
    //    [StringValue("PNT_80")]
    //    PkgConsltn_ChargeSettings,
    //    [StringValue("PNT_81")]
    //    DosPrints_DoNotShow,
    //    [StringValue("RPT_82")]
    //    DailyCancellatio_ReportNotShow,
    //    [StringValue("RPT_83")]
    //    Food_Beverages,
    //    [StringValue("RPT_84")]
    //    PostOtServices_Billing,
    //    [StringValue("RPT_85")]
    //    Allow_ZeroConsultaion_Op,
    //    [StringValue("RPT_86")]
    //    Alllow_UserWise_Concession_CreditLimit,
    //    [StringValue("RPT_87")]
    //    DownLoad_Execs_Settings,
    //    [StringValue("RPT_88")]
    //    CashChek_Point,
    //    [StringValue("RPT_89")]
    //    CashChekPoint_Req,
    //    [StringValue("RPT_90")]
    //    Classic_User,
    //    [StringValue("RPT_91")]
    //    Golden_User,
    //    [StringValue("RPT_92")]
    //    Password_Settings,
    //    [StringValue("RPT_93")]
    //    Password_Conditions_Req,
    //    [StringValue("RPT_94")]
    //    PwdExp_Days,
    //    [StringValue("RPT_96")]
    //    Msg_Populate_Days,
    //    [StringValue("RPT_97")]
    //    Pwd_MinLength,
    //    [StringValue("ACC_98")]
    //    SerTax_Req,
    //    [StringValue("COM_99")]
    //    MasterUI_Visibility,
    //    [StringValue("OPBIL_100")]
    //    Is_Centralized,
    //    [StringValue("COM_101")]
    //    UI_Visibility,
    //    [StringValue("COM_102")]
    //    Company_Address,
    //    [StringValue("COM_103")]
    //    Registration_Fee,
    //    [StringValue("COM_104")]
    //    Page_Display,
    //    [StringValue("COM_105")]
    //    Registration_Validation,
    //    [StringValue("GEN_106")]
    //    OPService_CancelDays,
    //    [StringValue("GEN_107")]
    //    Consultation_CancelDays,
    //    [StringValue("PNT_108")]
    //    NoOfTimes_togiveRefunds,
    //    [StringValue("PNT_109")]
    //    Nooftimes_toGivePostDisounts,
    //    [StringValue("GEN_110")]
    //    Allow_Miscellaneous_OPBilling,
    //    [StringValue("GEN_111")]
    //    Charge_for_AllDoctors,
    //    [StringValue("GEN_112")]
    //    ServiceGroup_WiseCopy,
    //    [StringValue("COM_113")]
    //    AutoCode_Generation,
    //    [StringValue("GEN_114")]
    //    Is_Archive,
    //    [StringValue("GEN_115")]
    //    Is_Code_Generate,
    //    [StringValue("GEN_116")]
    //    Is_Populate_Rev_No,
    //    [StringValue("COM_117")]
    //    Service_Cancel_Before,
    //    [StringValue("PNT_118")]
    //    Case_Sheet_Print,
    //    [StringValue("RPT_119")]
    //    Pwd_Validation,
    //    [StringValue("RPT_120")]
    //    DayCare_OpBill,
    //    [StringValue("RPT_121")]
    //    ShwPntBtn_InReport,
    //    [StringValue("ACC_122")]
    //    Service_Tax,
    //    [StringValue("IP_123")]
    //    AlwIMRConcsn_Service,
    //    [StringValue("IP_124")]
    //    AlwIMRConcsn_Consultation,
    //    [StringValue("IP_125")]
    //    AlwIMRConcsn_Investigation,
    //    [StringValue("IP_128")]
    //    AlwIMRConcsn_Professional,

    //    [StringValue("IP_126")]

    //    RMChrg_Auto,

    //    [StringValue("PNT_127")]
    //    Is_Logo_Visible,
    //    [StringValue("PNT_128")]
    //    Is_Header_Visible,
    //    [StringValue("PNT_129")]
    //    Is_Specimen_Visible,
    //    [StringValue("PNT_130")]
    //    Is_Print_Required_BeforeRefundApproval,
    //    [StringValue("LAB_127")]
    //    Consider_DesgorGroup_forPrint,
    //    [StringValue("LAB_128")]
    //    Show_Units,
    //    [StringValue("LAB_129")]
    //    Show_Units_As_Seperate_Col,
    //    [StringValue("SMTP_1")]
    //    SMTP_Proxy_Server,
    //    [StringValue("SMTP_2")]
    //    SMTP_Proxy_Server_Port,
    //    [StringValue("SMTP_3")]
    //    SMTP_Send_Using,
    //    [StringValue("SMTP_4")]
    //    SMTP_Server,
    //    [StringValue("SMTP_5")]
    //    SMTP_Server_port,
    //    [StringValue("SMTP_6")]
    //    SMTP_Authenticate,
    //    [StringValue("SMTP_7")]
    //    SMTP_User_Name,
    //    [StringValue("SMTP_8")]
    //    SMTP_Paswword,
    //    [StringValue("SMTP_9")]
    //    SMTP_Use_SSL,
    //    [StringValue("SMTP_10")]
    //    SMTP_TO_Address,
    //    [StringValue("LAB_129")]
    //    Is_BarCode_Generate_Auto,
    //    [StringValue("SMS_1")]
    //    SMS_User_Id,
    //    [StringValue("SMS_2")]
    //    SMS_Password,
    //    [StringValue("SMS_3")]
    //    SMS_Sender_Id,
    //    [StringValue("SMS_4")]
    //    SMS_URL,
    //    [StringValue("LAB_130")]
    //    WORK_FLOW,
    //    [StringValue("GEN_131")]
    //    No_Of_Questions,
    //    [StringValue("GEN_132")]
    //    Is_Audit_Required,
    //    [StringValue("GEN_133")]
    //    Is_Audit_Options,
    //    [StringValue("SMS_5")]
    //    IS_SMS_SEND,
    //    [StringValue("SMS_6")]
    //    SMS_FROM_TIME,
    //    [StringValue("SMS_7")]
    //    SMS_TO_TIME,
    //    [StringValue("LAB_134")]
    //    LABREPORT_WHEN_DUE,
    //    [StringValue("LAB_135")]
    //    IPRES_SRVWISE,
    //    [StringValue("COM_136")]
    //    FinTrans_WorkFlow,

    //    [StringValue("FBL_1")]
    //    OLD_DT_FBILL,
    //    [StringValue("CNS_1")]
    //    CNS_LIMIT,
    //    [StringValue("FBL_2")]
    //    PKG_CNS_OSP,
    //    [StringValue("FBL_3")]
    //    DOUBLE_PRINT,
    //    [StringValue("FBL_4")]
    //    ADT_IN_OP_BILL,
    //    [StringValue("FBL_5")]
    //    ASSY_COMP,
    //    [StringValue("FBL_6")]
    //    ADV_MANDATORY,
    //    [StringValue("MODAPRL")]
    //    MODAPRL_DAYS,
    //    [StringValue("Photo_print")]
    //    PHOTO_PRINT_REGISTRATION,
    //    [StringValue("ALLOW_SAMPLE_ACK")]
    //    ALLOW_SAMPLE_ACK,
    //    [StringValue("LAB_136")]
    //    AUTO_APPROVAL_REQ,
    //    [StringValue("LAB_137")]
    //    UPDATE_REQ_RESULT,
    //    [StringValue("REG_05")]
    //    Is_referal_doctor_required,
    //    [StringValue("Lab_spec")]
    //    IS_SPECIMIN_VISIBLE,
    //    [StringValue("RPT_98")]
    //    PWD_TYPE,
    //    [StringValue("RPT_93")]
    //    PWD_CONDITION,
    //    [StringValue("RPT_94")]
    //    PWD_EXP_DAYS,
    //    //[StringValue("RPT_96")]
    //    //MSG_POPULATE_DAYS,
    //    [StringValue("RPT_97")]
    //    PWD_MIN_LENGTH,
    //    [StringValue("QUICK_05")]
    //    Need_QuickLink_Module_Desc,
    //    [StringValue("IP_01")]
    //    IsEditMiscSrvInIMRPosting,
    //    [StringValue("LAB_GTT")]
    //    LAB_GTT_TEST,
    //    [StringValue("LAB_ACT")]
    //    ACCREDITATION_REQUIRED,
    //    [StringValue("GEN_134")]
    //    IsRegDtlsReqInTransForms,
    //    [StringValue("SRTX_1")]
    //    IsServiceTaxRequired,
    //    [StringValue("CORP_TRF_REQ_IN_IPSRV")]
    //    IsCorpTariffReqInIPServices,
    //    [StringValue("GEN_150")]
    //    IsPharmacyIntegrationRequired,
    //    [StringValue("GEN_151")]
    //    PharmacyModuleID,
    //    [StringValue("Dash_101")]
    //    Is_DashBoard_Display_Day_records,
    //    //[StringValue("Dash_101")]
    //    //Is_DashBoard_Display_Day_records
    //    [StringValue("GEN_152")]
    //    IsAllergiesFromMedispan,
    //    [StringValue("OPBIL_101")]
    //    AllowSrvEditInOPCorpBill,
    //    [StringValue("TAB_101")]
    //    Tabs_Required_or_not,
    //    [StringValue("LAB_CRIT")]
    //    Show_Critical_Values,
    //    [StringValue("FBL_10")]
    //    Ward_Automation_Required,
    //    [StringValue("GEN_153")]
    //    Apply_Credit_Limit_while_indenting,
    //    [StringValue("GEN_154")]
    //    Indenting_Time_Interval,
    //    [StringValue("LAB_NO")]
    //    LAB_NO,
    //    [StringValue("SAMPLE_ACK")]
    //    SAMPLE_ACK,
    //    [StringValue("PLA_244")]
    //    PASSWORD_LOCK_ATTEMPTS,
    //    [StringValue("PWH_246")]
    //    PWD_HISTORY,
    //    [StringValue("PCC_247")]
    //    PWD_COMPTY_CHAR,
    //    [StringValue("PCC_248")]
    //    PWD_COMPTY_NUMERICS,
    //    [StringValue("PCC_249")]
    //    PWD_COMPTY_ALPHABETS,
    //    [StringValue("VERIFICATION_UPDATE")]
    //    VERIFICATION_UPDATE,
    //    [StringValue("APPROVAL_UPDATE")]
    //    APPROVAL_UPDATE,
    //    [StringValue("BARCODE_PRINT")]
    //    BARCODE_PRINT,
    //    [StringValue("DSCUMRY_01")]
    //    DSCUMRY_TYPE1,
    //    [StringValue("DSCUMRY_02")]
    //    DSCUMRY_TYPE2,
    //    [StringValue("DSCUMRY_03")]
    //    DSCUMRY_TYPE3,
    //    [StringValue("PREADM_1")]
    //    Is_Pre_Admission_Mandatory,
    //    [StringValue("IPRWA_01")]
    //    IP_Result_View_Without_Approval,
    //    [StringValue("QMS")]
    //    QMS,
    //    [StringValue("IPIMR_01")]
    //    Allow_Service_Entry_For_Srv_Call_Off_For_Designation,
    //    [StringValue("GEN_155")]
    //    INBOX_ALERT,
    //    [StringValue("IPD_1")]
    //    Drug_Administrative_Charges,
    //    [StringValue("OPBIL_102")]
    //    Casuality_Credit_Limit_For_OP,
    //    [StringValue("IPSampleAck")]
    //    IPSampleAck,
    //    [StringValue("OPBIL_104")]
    //    New_Born_Percentage,
    //    [StringValue("LAB_STP")]
    //    STP_NAME,
    //    [StringValue("PNT_131")]
    //    Allow_Refund_Amount_Up_To_Receipt_Amount,
    //    [StringValue("GEN_156")]
    //    Is_MyAccounts_Integration_Required,
    //    [StringValue("IPDIS_127")]
    //    Allow_Discharge_Date_Manually_In_IP_Discharge,
    //    [StringValue("LAB_144")]
    //    Allow_Print_in_Result_View,
    //    [StringValue("OPBIL_105")]
    //    Emergency_Slot1,
    //    [StringValue("OPBIL_106")]
    //    Emergency_Slot2,
    //    [StringValue("OPBIL_107")]
    //    Emergency_Slot3,
    //    [StringValue("GEN_157")]
    //    Days_Consider_For_Reg_Details,
    //    [StringValue("OPBIL_108")]
    //    Is_Sample_Billing_Pending_For_Approval,
    //    [StringValue("IP_127")]
    //    Show_IP_Option,
    //    [StringValue("OPBIL_109")]
    //    No_Of_Days_Estimated_Bills_Required_In_Sample_Registration,
    //    [StringValue("OPBIL_110")]
    //    Both_Print_and_Prescription_at_Saving_Time,
    //    [StringValue("IUDR_01")]
    //    Is_Upload_Download_Req,
    //    [StringValue("RES")]
    //    verify_results,
    //    [StringValue("SNRQ")]
    //    Is_Show_New_Req,



    //    [StringValue("PREBAR")]
    //    IS_REQ_PRE_PRINTED_BARCODE,

    //    [StringValue("PNT_132")]
    //    Is_Refund_Direct_Approval,
    //    [StringValue("ISAR_01")]
    //    Is_Save_Alert_Required,
    //    [StringValue("GEN_158")]
    //    Need_To_Show_Reg_Doctor,
    //    [StringValue("PHAR_001")]
    //    Is_Formulary_Required,
    //    [StringValue("GEN_159")]
    //    Days_Consider_To_Show_Reg_Doctor,

    //    [StringValue("OPBIL_111")]
    //    Only_Balanced_Patients_In_Receiption,
    //    [StringValue("OPBIL_112")]
    //    Default_Details_For_Clients,
    //    [StringValue("OPBIL_113")]
    //    Any_Center_Payment_Option_For_Due,
    //    [StringValue("OPBIL_114")]
    //    SRS_And_RCS_No_Of_Pages_Required,
    //    [StringValue("BTR")]
    //    Bed_Transfer_Request,
    //    [StringValue("TKN_GEN")]
    //    Is_Screen_Mask_Required,
    //    [StringValue("OPBIL_115")]
    //    Apply_Barcode_Rules_According_To_Slims,
    //    [StringValue("ISED_01")]
    //    Is_Extended_Display_Req,
    //    [StringValue("GEN_160")]
    //    Is_User_Session_Tracking,
    //    [StringValue("GEN_164")]
    //    Is_Nurse_Bed_Vacate_Required,
    //    [StringValue("REG_06")]
    //    Display_Name_In_Registration,
    //    [Description("GEN_161")]
    //    IS_MKR_CHKR,
    //    [StringValue("GEN_162")]
    //    Discharge_Summary_Auto_Approve,
    //    [StringValue("GEN_163")]
    //    NEW_USER_LOCK_DAYS,
    //    [StringValue("GEN_165")]
    //    History_Details_Req_In_Days,
    //    [StringValue("GEN_166")]
    //    Default_Nationality,
    //    [StringValue("REQAPP")]
    //    Request_Approval,
    //    [StringValue("BT")]
    //    Bed_Transfer,

    //    [StringValue("ADT_01")]
    //    Req_App_Letter_ADT_Ward_Varies,
    //    [StringValue("ADT_02")]
    //    Block_Other_Beds_OnPat_Single_Ward_Demand,
    //    [StringValue("GEN_167")]
    //    Registration_Billing_Concession_Applicable,
    //    [StringValue("GEN_168")]
    //    Allow_Registration_Expiry_Patients_In_Op_Billing,

    //    [StringValue("GEN_169")]
    //    For_Registration_Cancel_Days,

    //    [StringValue("DND")]
    //    DND_Enabled_By_Default,
    //    [StringValue("FMS")]
    //    Family_Reference_Selection_Consultent_And_Referals_Enabled_By_Default,
    //    [StringValue("DUE")]
    //    Allow_due_in_reg_and_con,
    //    [StringValue("CHKAPPR")]
    //    Apply_Company_Approval,

    //    [StringValue("MLC02")]
    //    Is_Mlc_Police_Intimation_Received_or_Not,
    //    [StringValue("FVD")]
    //    Funds_Validity_days,
    //    [StringValue("IRN")]
    //    IS_REQ_NST_PAT_LABLES,
    //    [StringValue("AHB")]
    //    Allow_History_Details_In_Billing,
    //    [StringValue("TOR")]
    //    Test_Occurency_Required_In_Billing,
    //    [StringValue("GEN_54")]
    //    Allow_Adimited_Patients_In_Op_Billing,
    //    [StringValue("SCIP")]
    //    Allow_Acknowledge_Print_for_ImrSrevice,
    //    [StringValue("IP_207")]
    //    Allow_Mltple_admns_umrno,

    //    [StringValue("FRG")]
    //    REG_FEE_AUTO_FILL_IN_CASH,
    //    [StringValue("OTPC")]
    //    Is_OTP_Change_Password,
    //    [StringValue("OTPF")]
    //    Is_OTP_Forgot_Password,

    //    [StringValue("TM")]
    //    TIME_FORMAT,
    //    [StringValue("SRVPRCNT")]
    //    Is_applicable_Service_charges_percentage_amt,
    //    [StringValue("OP-IP")]
    //    COVERT_OP_SERVICES_AS_IP_SERVICES,
    //    [StringValue("SUPLLY")]
    //    No_Of_Supply_Bills,
    //    [StringValue("CMP_EXPIRE")]
    //    Company_Expire_Alert,
    //    [StringValue("I_PKG")]
    //    Required_provision_to_delete_package_includes,
    //    [StringValue("CTOR")]
    //    CARD_TRANSACTION_OTP_REQUIRED,
    //    [StringValue("RSH")]
    //    REQ_SHIFTHRANDSUB_FOR_SHIFTLOG,
    //    [StringValue("ISB")]
    //    IS_SENT_TO_BILL_WITHOUT_DSUMMARY,
    //    [StringValue("MNR")]
    //    mobile_number_required,
    //    [StringValue("AVST")]
    //    IS_AUTOMATIC_VISIt,
    //    [StringValue("org")]
    //    Org_Tariff_Name,
    //    [StringValue("ACE")]
    //    After_Company_Expiry_Alert,
    //    [StringValue("CCLP")]
    //    Corporate_Credit_Limt_Percentage_Amt,
    //    [StringValue("IASR")]
    //    Is_Appointment_Slots_Required,

    //    [StringValue("IDR")]
    //    Is_Dischagre_Request,

    //    [StringValue("RMC")]
    //    Req_Multiple_currency,
    //    [StringValue("DMW")]
    //    Donor_Minimum_Weight,
    //    [StringValue("DCW")]
    //    Donor_Data_Changes_withIn_Days,
    //    [StringValue("BBE")]
    //    Blood_Bags_Expiry_Before_Days,
    //    [StringValue("CRVED")]
    //    COMPANY_REFERAL_VALIDITY_EXPIRING_DAYS,
    //    [StringValue("MAI")]
    //    Minimum_Age_In_Years,
    //    [StringValue("FVRP")]
    //    FREE_FOLLOWUP_VISIT_REQUIRED_FOR_PACKAGE,
    //    [StringValue("CCSC")]
    //    CREDIT_CARD_SERVICE_CHARGE,
    //    [StringValue("ASDCD")]
    //    additinal_services_Discount_considering_days,
    //    [StringValue("MDI")]
    //    Minimum_Days_Bw_Previews_And_Current_Donation,
    //    [StringValue("PCD")]
    //    package_consultation_considering_days,

    //    [StringValue("IDSR")]
    //    Is_Doctor_Solts_Required,

    //    [StringValue("DR")]
    //    CONSULTANT_PREFIX_REQUIRED,

    //    [StringValue("EMID")]
    //    EMR_MIGRATION_ID,

    //    [StringValue("OPLD")]
    //    ORDERING_PHYSICIAN_LIMITED_DAYS,

    //    [StringValue("NVSP")]
    //    NO_OF_VISITOR_PASSES,
    //    [StringValue("NVP")]
    //    NO_OF_VEHICLE_PASSES,
    //    [StringValue("NAP")]
    //    NO_OF_ATTEND_PASSES,


    //    [StringValue("IAR")]
    //    IS_ASSESMENT_REQUIRED,
    //    [StringValue("TiM")]
    //    Time_Min,
    //    [StringValue("CALP")]
    //    Corporate_approval_Limt_Percentage_Amt,
    //    [StringValue("RFA")]
    //    Refund_Amount,
    //    [StringValue("CPGP")]
    //    Admission_check_In,
    //    [StringValue("EHT")]
    //    ER_Holding_Time,
    //    [StringValue("CRGP")]
    //    Admission_check_Out,
    //    [StringValue("MDB")]
    //    Minimum_Days_Blood_Bag_Reserved,
    //    [StringValue("LTA")]
    //    Luxury_Tax_Amount,
    //    [StringValue("DIL_01")]
    //    IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED,
    //    [StringValue("MIP_01")]
    //    Max_Indents_Per_Day,
    //    [StringValue("MIP_02")]
    //    Max_Items_Per_Day,
    //    [StringValue("IMNM")]
    //    Is_Mobile_No_Mandatory,
    //    [StringValue("EDW")]
    //    Extended_Display_Window,
    //    [StringValue("IPIR")]
    //    Is_PAS_Integration_Req,
    //    [StringValue("CPV")]
    //    Company_Prcnt_Visibility,
    //    [StringValue("DP")]
    //    Default_Password,
    //    [StringValue("DTP")]
    //    Default_Transaction_Password,
    //    [StringValue("SAP")]
    //    Shift_Alert_per,
    //    [StringValue("SLA")]
    //    Shift_Limit_amt,
    //    [StringValue("NBM")]
    //    NBM_HOURS,
    //    [StringValue("DW")]
    //    Is_Dialosys_WardGroup,
    //    [StringValue("EQMT")]
    //    IS_DIALOSYS_EQUIPMENT,
    //    [StringValue("DD001")]
    //    Dialysis_Dept,
    //    [StringValue("PE")]
    //    IS_PHYSIOTHERAPY_EQUIPMENT,
    //    [StringValue("ADIOPDS")]
    //    ALLOW_DUE_IN_OPD_SCREEN,
    //    [StringValue("ABPD")]
    //    ALLOW_BARCODE_PRINT_DIRECTLY,

    //    [StringValue("SGTCA")]
    //    Service_Group_Type_Wise_Concession_Applicable,

    //    [StringValue("FCPORR")]
    //    Food_Charges_part_Of_Room_Rent,
    //    [StringValue("RARTDFTNAP")]
    //    Raise_Auto_Request_To_Dietician_For_The_New_Admitted_Patient,
    //    [StringValue("DDRI")]
    //    DIETARY_DEPARTMENT_REFERENCE_ID,

    //    [StringValue("IS_QC")]
    //    Is_Result_Processed_with_QC,
    //    [StringValue("MMD1")]
    //    Mobile_No_Maximum_Digits,
    //    [StringValue("MMD")]
    //    Mobile_No_Minimum_Digits,
    //    [StringValue("D")]
    //    DIALIZER,
    //    [StringValue("P")]
    //    PATIENT_NEW_INFORMATION,
    //    [StringValue("R")]
    //    DAYS_FOR_HIC_ACTIVITY_SCHEDULE_REMAINDER,
    //    [StringValue("DGPS")]
    //    DEFAULT_GRID_PAGE_SIZE,

    //    [StringValue("NEV")]
    //    VACCINATION_FOR_NEW_EMPLOYEE,

    //}

    public enum PARAMETER_CODE
    {
        [StringValue("org")]
        Org_Tariff_Name,
        [StringValue("LAB_ACT")]
        ACCREDITATION_REQUIRED,
        [StringValue("ASDCD")]
        additinal_services_Discount_considering_days,
        [StringValue("CPGP")]
        Admission_check_In,
        [StringValue("CRGP")]
        Admission_check_Out,
        [StringValue("GEN_49")]
        Admission_Prefix_Settings,
        [StringValue("FBL_6")]
        ADV_MANDATORY,
        [StringValue("ACE")]
        After_Company_Expiry_Alert,
        [StringValue("GEN_54")]
        Allow_AdimitedPatients_InOpBilling,
        [StringValue("FBL_4")]// duplicate to GEN-54
        ADT_IN_OP_BILL,
        [StringValue("ABPD")]
        ALLOW_BARCODE_PRINT_DIRECTLY,
        [StringValue("PNT_73")]
        Allow_Concesson_outsideservice_inop,
        [StringValue("GEN_57")]
        Allow_Consultations_InOPBilling,
        [StringValue("IPDIS_127")]
        Allow_Discharge_Date_Manually_In_IP_Discharge,
        [StringValue("ADIOPDS")]
        ALLOW_DUE_IN_OPD_SCREEN,
        [StringValue("DUE")]
        Allow_due_in_reg_and_con,
        [StringValue("AHB")]
        Allow_History_Details_In_Billing,
        [StringValue("GEN_110")]
        Allow_Miscellaneous_OPBilling,
        [StringValue("IP_207")]
        Allow_Mltple_admns_umrno,
        [StringValue("IP_208")]
        Allow_Admission_Date_To_change,
        [StringValue("ERM")]
        ER_MobileNo_Mandatory,
        [StringValue("LAB_144")]
        Allow_Print_in_Result_View,
        [StringValue("PNT_131")]
        Allow_Refund_Amount_Up_To_Receipt_Amount,
        [StringValue("GEN_168")]
        Allow_Registration_Expiry_Patients_In_Op_Billing,
        [StringValue("IPIMR_01")]
        Allow_Service_Entry_For_Srv_Call_Off_For_Designation,
        [StringValue("FBL_2")]// Allow To Post Pkg Consultation To Osp Patient In Op Billing
        PKG_CNS_OSP,
        [StringValue("RPT_85")]
        Allow_ZeroConsultaion_Op,
        [StringValue("OPBIL_101")]
        AllowSrvEditInOPCorpBill,
        [StringValue("GEN_47")]
        Allow_Concession_IMRPosting,
        [StringValue("IP_124")]
        AlwIMRConcsn_Consultation,
        [StringValue("IP_125")]
        AlwIMRConcsn_Investigation,
        [StringValue("IP_128")]
        AlwIMRConcsn_Professional,
        [StringValue("IP_123")]
        AlwIMRConcsn_Service,
        [StringValue("PNT_70")]
        Amount_InWords,
        [StringValue("CHKAPPR")]
        Apply_Company_Approval,
        [StringValue("GEN_62")]
        Apply_Credit_Limit,
        [StringValue("GEN_153")]
        Apply_Credit_Limit_while_indenting,
        [StringValue("APPROVAL_UPDATE")]
        APPROVAL_UPDATE,
        [StringValue("LAB_136")]
        AUTO_APPROVAL_REQ,
        [StringValue("COM_113")]
        AutoCode_Generation,
        [StringValue("GEN_450")]
        Autocompletion_Prefix_Length,
        [StringValue("APPOINTMENT_CONTACT_NO")]
        APPOINTMENT_CONTACT_NO,
        // B letter 
        [StringValue("BARCODE_PRINT")]
        BARCODE_PRINT,
        [StringValue("COM_38")]
        Base_Currency,
        [StringValue("BTR")]
        Bed_Transfer_Request,
        [StringValue("ADT_02")]
        Block_Other_Beds_OnPat_Single_Ward_Demand,
        [StringValue("BBE")]
        Blood_Bags_Expiry_Before_Days,
        [StringValue("OPBIL_110")]
        Both_Print_and_Prescription_at_Saving_Time,

        // C letter
        [StringValue("PNT_69")]
        Card_Amount,
        [StringValue("CTOR")]
        CARD_TRANSACTION_OTP_REQUIRED,
        [StringValue("PNT_118")]
        Case_Sheet_Print,
        [StringValue("PNT_67")]
        Cash_Amount,
        [StringValue("RPT_88")]
        CashChek_Point,
        [StringValue("RPT_89")]
        CashChekPoint_Req,
        [StringValue("OPBIL_102")]
        Casuality_Credit_Limit_For_OP,
        [StringValue("GEN_111")]
        Charge_for_AllDoctors,
        [StringValue("PNT_68")]
        Cheque_Amount,
        [StringValue("COM_102")]
        Company_Address,
        [StringValue("CMP_EXPIRE")]
        Company_Expire_Alert,
        [StringValue("CPV")]
        Company_Prcnt_Visibility,
        [StringValue("REPI")]
        Rate_Editable_for_Phar_Items,
        [StringValue("CRVED")]
        COMPANY_REFERAL_VALIDITY_EXPIRING_DAYS,
        [StringValue("COM_40")]
        CompanyLogo,
        [StringValue("COM_39")]
        CompanyName,
        [StringValue("GEN_56")]
        Consider_RegValidity_Patients,
        [StringValue("CONS")]
        Consultation,
        [StringValue("LAB_127")]
        Consider_DesgorGroup_forPrint,
        [StringValue("DR")]
        CONSULTANT_PREFIX_REQUIRED,
        [StringValue("GEN_107")]
        Consultation_CancelDays,
        [StringValue("CNSVDT")]
        Consultation_Validity,
        [StringValue("RPT_26")]
        Corporate_OpBills,
        [StringValue("CALP")]
        Corporate_approval_Limt_Percentage_Amt,
        [StringValue("CCLP")]
        Corporate_Credit_Limt_Percentage_Amt,
        [StringValue("RPT_24")]
        Corprate_Opconsultations,
        [StringValue("OP-IP")]
        COVERT_OP_SERVICES_AS_IP_SERVICES,
        [StringValue("PNT_71")]
        CreateBy_Date,
        [StringValue("CCSC")]
        CREDIT_CARD_SERVICE_CHARGE,
        [StringValue("COM_41")]
        Current_Financial_YearFrom,
        [StringValue("COM_42")]
        Current_Financial_YearTo,

        // D Letter settings
        [StringValue("RPT_120")]
        DayCare_OpBill,
        [StringValue("GEN_157")]
        Days_Consider_For_Reg_Details,
        [StringValue("GEN_159")]
        Days_Consider_To_Show_Reg_Doctor,
        [StringValue("R")]
        DAYS_FOR_HIC_ACTIVITY_SCHEDULE_REMAINDER,
        [StringValue("PNT_76")]
        Days_Consider_OpConstn_InOpBilling,
        [StringValue("DGPS")]
        DEFAULT_GRID_PAGE_SIZE,

        [StringValue("GEN_166")]
        Default_Nationality,
        [StringValue("DP")]
        Default_Password,
        [StringValue("DTP")]
        Default_Transaction_Password,
        [StringValue("D")]
        DIALIZER,
        [StringValue("DD001")]
        Dialysis_Dept,
        [StringValue("DDRI")]
        DIETARY_DEPARTMENT_REFERENCE_ID,
        [StringValue("GEN_162")]
        Discharge_Summary_Auto_Approve,
        [StringValue("REG_06")]
        Display_Name_In_Registration,
        [StringValue("DND")]
        DND_Enabled_By_Default,
        [StringValue("GEN_45")]
        Doctor_Payments,
        [StringValue("GEN_55")]
        Doctor_PresCription_Required,
        [StringValue("GEN_02")]
        Document_Number_Formatt,
        [StringValue("COM_37")]
        Documents_Date_Format,
        [StringValue("DCW")]
        Donor_Data_Changes_withIn_Days,
        [StringValue("DMW")]
        Donor_Minimum_Weight,
        [StringValue("FBL_3")]
        DOUBLE_PRINT,
        [StringValue("RPT_87")]
        DownLoad_Execs_Settings,
        [StringValue("IPD_1")]
        Drug_Administrative_Charges,
        [StringValue("DSCUMRY_01")]
        DSCUMRY_TYPE1,
        [StringValue("GEN_44")]
        Due_Remainders,
        [StringValue("GEN_449")]
        Document_Display_Order_By,

        // E letter 
        [StringValue("OPBIL_105")]
        Emergency_Slot1,
        [StringValue("OPBIL_106")]
        Emergency_Slot2,
        [StringValue("OPBIL_107")]
        Emergency_Slot3,
        [StringValue("GEN_06")]
        Employee_Age,
        [StringValue("EMID")]
        EMR_MIGRATION_ID,
        [StringValue("GEN_155")]
        INBOX_ALERT,
        [StringValue("EHT")]
        ER_Holding_Time,
        [StringValue("EDW")]
        Extended_Display_Window,
        [StringValue("EMERGENCY_CONTACT_NO")]
        EMERGENCY_CONTACT_NO,
        // F letter
        [StringValue("FMS")]
        Family_Reference_Selection_Consultent_And_Referals_Enabled_By_Default,
        [StringValue("COM_136")]
        FinTrans_WorkFlow,
        [StringValue("RPT_83")]
        Food_Beverages,
        [StringValue("FCPORR")]
        Food_Charges_part_Of_Room_Rent,
        [StringValue("RPT_90")]
        Classic_User,
        [StringValue("RPT_91")]
        Golden_User,
        [StringValue("GEN_52")]
        Modify_ApprovedTrans_Days,
        [StringValue("FVRP")]
        FREE_FOLLOWUP_VISIT_REQUIRED_FOR_PACKAGE,
        [StringValue("FVD")]
        Funds_Validity_days,
        [StringValue("RPT_25")]
        General_OpBills,

        [StringValue("RPT_23")]
        GeneralOp_consultations,
        [StringValue("LAB_GTT")]
        LAB_GTT_TEST,

        [StringValue("GEN_165")]
        History_Details_Req_In_Days,

        [StringValue("ACC_31")]
        Hospital_Scroll_Company,
        [StringValue("RPT_82")]
        DailyCancellatio_ReportNotShow,
        [StringValue("PNT_81")]
        DosPrints_DoNotShow,
        [StringValue("PNT_78")]
        ShowOpServices_InIpCorporateBilling,
        [StringValue("GEN_154")]
        Indenting_Time_Interval,
        [StringValue("LAB_11")]
        Investigations_Comparision_inOPBill_required,
        [StringValue("LAB_135")]
        IPRES_SRVWISE,
        [StringValue("IPRWA_01")]
        IP_Result_View_Without_Approval,
        [StringValue("IPSampleAck")]
        IPSampleAck,

        [StringValue("LAB_129")]
        Is_BarCode_Generate_Auto,
        [StringValue("ACC_28")]
        Is_Accounts_required,
        [StringValue("GEN_152")]
        IsAllergiesFromMedispan,
        [StringValue("RPT_86")]
        Alllow_UserWise_Concession_CreditLimit,
        [StringValue("SRVPRCNT")]
        Is_applicable_Service_charges_percentage_amt,
        [StringValue("IASR")]
        Is_Appointment_Slots_Required,
        [StringValue("IAR")]
        IS_ASSESMENT_REQUIRED,
        [StringValue("GEN_133")]
        Is_Audit_Options,
        [StringValue("GEN_132")]
        Is_Audit_Required,
        [StringValue("AVST")]
        IS_AUTOMATIC_VISIt,

        [StringValue("OPBIL_100")]
        Is_Centralized,
        [StringValue("CORP_TRF_REQ_IN_IPSRV")]
        IsCorpTariffReqInIPServices,
        [StringValue("Dash_101")]
        Is_DashBoard_Display_Day_records,
        [StringValue("IDSR")]
        Is_Doctor_Solts_Required,
        [StringValue("PNT_77")]
        DrWise_ServiceChargeInc_InOpBilling,
        [StringValue("PNT_74")]
        EditRate_InOpBill,
        [StringValue("ISED_01")]
        Is_Extended_Display_Req,
        [StringValue("PHAR_001")]
        Is_Formulary_Required,
        [StringValue("PNT_128")]
        Is_Header_Visible,
        [StringValue("FBL_5")]
        ASSY_COMP,
        [StringValue("PNT_127")]
        Is_Logo_Visible,
        [Description("GEN_161")]
        IS_MKR_CHKR,
        [StringValue("MLC02")]
        Is_Mlc_Police_Intimation_Received_or_Not,
        [StringValue("IMNM")]
        Is_Mobile_No_Mandatory,
        [StringValue("GEN_60")]
        MobileNo_MandatoryInOpBilling,
        [StringValue("GEN_156")]
        Is_MyAccounts_Integration_Required,
        [StringValue("GEN_164")]
        Is_Nurse_Bed_Vacate_Required,
        [StringValue("OTPC")]
        Is_OTP_Change_Password,
        [StringValue("OTPF")]
        Is_OTP_Forgot_Password,
        [StringValue("IPIR")]
        Is_PAS_Integration_Req,
        /*ittadi*/

        /* [StringValue("REQDND")]
         RequstforDctvstNoofDays,*/


        [StringValue("GEN_150")]
        IsPharmacyIntegrationRequired,

        [StringValue("IBU")]
        IsBillingUser,

        [StringValue("CAR")]
        Cancelation_Auto_Refund,

        [StringValue("CLE")]
        CREDIT_LIMIT_EXPIRED,

        [StringValue("PREADM_1")]
        Is_Pre_Admission_Mandatory,
        [StringValue("REG_05")]
        Is_referal_doctor_required,
        [StringValue("PNT_132")]
        Is_Refund_Direct_Approval,
        [StringValue("GEN_134")]
        RegDts_req_in_trans_forms,
        [StringValue("IRN")]
        IS_REQ_NST_PAT_LABLES,
        [StringValue("IS_QC")]
        Is_Result_Processed_with_QC,
        [StringValue("OPBIL_108")]
        Is_Sample_Billing_Pending_For_Approval,
        [StringValue("GEN_119")]
        Is_Sample_Entry_Needed,
        [StringValue("ISAR_01")]
        Is_Save_Alert_Required,
        [StringValue("TKN_GEN")]
        Is_Screen_Mask_Required,

        [StringValue("ACC_29")]
        Is_Scroll_Using,
        [StringValue("LAB_10")]
        Service_print_requied_inpatient,
        [StringValue("SMS_5")]
        IS_SMS_SEND,
        [StringValue("PNT_129")]
        Is_Specimen_Visible,
        [StringValue("IUDR_01")]
        Is_Upload_Download_Req,
        [StringValue("GEN_160")]
        Is_User_Session_Tracking,
        [StringValue("GEN_114")]
        Is_Archive,
        [StringValue("GEN_115")]
        Is_Code_Generate,
        [StringValue("EQMT")]
        IS_DIALOSYS_EQUIPMENT,
        [StringValue("DW")]
        Is_Dialosys_WardGroup,
        [StringValue("IDR")]
        Is_Dischagre_Request,
        [StringValue("GEN_117")]
        Is_Doc_Level_Audit,
        [StringValue("DIL_01")]
        IS_DRUG_INDENT_ITEMS_COUNT_LIMIT_IS_REQURED,
        [StringValue("PE")]
        IS_PHYSIOTHERAPY_EQUIPMENT,
        [StringValue("GEN_116")]
        Is_Populate_Rev_No,
        [StringValue("ISB")]
        IS_SENT_TO_BILL_WITHOUT_DSUMMARY,
        [StringValue("IP_01")]
        IsEditMiscSrvInIMRPosting,

        [StringValue("PNT_75")]
        Laser_Print,
        [StringValue("LTA")]
        Luxury_Tax_Amount,
        [StringValue("LOK_02")]
        Lookup_Page_Size,

        [StringValue("COM_99")]
        MasterUI_Visibility,
        [StringValue("COM_43")]
        Max_Decimal,
        [StringValue("MIP_01")]
        Max_Indents_Per_Day,
        [StringValue("MIP_02")]
        Max_Items_Per_Day,
        [StringValue("COM_453")]
        MaxDecForAllAmts,
        [StringValue("ACC_35")]
        Medical_Purchase_Company,
        [StringValue("LAB_08")]
        Settings_Print,
        [StringValue("MAI")]
        Minimum_Age_In_Years,
        [StringValue("MDI")]
        Minimum_Days_Bw_Previews_And_Current_Donation,
        [StringValue("MDB")]
        Minimum_Days_Blood_Bag_Reserved,
        [StringValue("MMD1")]
        Mobile_No_Maximum_Digits,
        [StringValue("MMD")]
        Mobile_No_Minimum_Digits,
        [StringValue("MNR")]
        mobile_number_required,
        [StringValue("MODAPRL")]
        MODAPRL_DAYS,
        [StringValue("RPT_96")]
        Msg_Populate_Days,
        [StringValue("NBM")]
        NBM_HOURS,
        [StringValue("LAB_13")]
        Need_Integrated_billing_bloodbank,
        [StringValue("QUICK_05")]
        Need_QuickLink_Module_Desc,

        [StringValue("GEN_158")]
        Need_To_Show_Reg_Doctor,
        [StringValue("OPBIL_104")]
        New_Born_Percentage,
        [StringValue("GEN_163")]
        NEW_USER_LOCK_DAYS,
        [StringValue("CNS_1")]
        CNS_LIMIT,
        [StringValue("OPBIL_109")]
        No_Of_Days_Estimated_Bills_Required_In_Sample_Registration,
        [StringValue("GEN_46")]
        Noof_OpBill_DosPrint,
        [StringValue("GEN_131")]
        No_Of_Questions,
        [StringValue("SUPLLY")]
        No_Of_Supply_Bills,
        [StringValue("PNT_109")]
        Nooftimes_toGivePostDisounts,
        [StringValue("PNT_108")]
        NoOfTimes_togiveRefunds,
        [StringValue("NAP")]
        NO_OF_ATTEND_PASSES,
        [StringValue("NVP")]
        NO_OF_VEHICLE_PASSES,
        [StringValue("NVSP")]
        NO_OF_VISITOR_PASSES,
        [StringValue("PNT_95")]
        NoOfCopiesPerprint,
        [StringValue("PNT_79")]
        IpBillCancelDays_Dichargedpatients,
        [StringValue("LAB_64")]
        OldNew_Setup,
        [StringValue("LAB_134")]
        LABREPORT_WHEN_DUE,
        [StringValue("GEN_106")]
        OPService_CancelDays,
        [StringValue("OPLD")]
        ORDERING_PHYSICIAN_LIMITED_DAYS,
        [StringValue("GEN_48")]
        Osp_Needed,
        [StringValue("PNT_80")]
        PkgConsltn_ChargeSettings,
        [StringValue("PCD")]
        package_consultation_considering_days,
        [StringValue("COM_104")]
        Page_Display,
        [StringValue("PCC_249")]
        PWD_COMPTY_ALPHABETS,
        [StringValue("PCC_247")]
        PWD_COMPTY_CHAR,
        [StringValue("PCC_248")]
        PWD_COMPTY_NUMERICS,
        [StringValue("RPT_93")]
        Password_Conditions_Req,
        [StringValue("PWH_246")]
        PWD_HISTORY,
        [StringValue("PLA_244")]
        PASSWORD_LOCK_ATTEMPTS,
        [StringValue("RPT_92")]
        Password_Settings,
        [StringValue("RPT_119")]
        Pwd_Validation,
        [StringValue("P")]
        PATIENT_NEW_INFORMATION,
        [StringValue("RPT_27")]
        Pharmacy_Bills,
        [StringValue("GEN_151")]
        PharmacyModuleID,
        [StringValue("ACC_32")]
        Pharmacy_Scroll_Company,
        [StringValue("ACC_36")]
        Pharmacy_VAT,
        [StringValue("Photo_print")]
        PHOTO_PRINT_REGISTRATION,
        [StringValue("RPT_84")]
        PostOtServices_Billing,
        [StringValue("PREBAR")]
        IS_REQ_PRE_PRINTED_BARCODE,
        [StringValue("PNT_72")]
        PrintBy_Date,
        [StringValue("PNT_130")]
        Is_Print_Required_BeforeRefundApproval,
        [StringValue("GEN_58")]
        PrintSettings_Required,
        [StringValue("GEN_59")]
        ProfessionalTax_OnBill,

        [StringValue("RPT_94")]
        PwdExp_Days,
        [StringValue("RPT_97")]
        Pwd_MinLength,
        [StringValue("RPT_98")]
        PWD_TYPE,
        [StringValue("QMS")]
        QMS,
        [StringValue("RARTDFTNAP")]
        Raise_Auto_Request_To_Dietician_For_The_New_Admitted_Patient,
        [StringValue("PNT_65")]
        ReceiptNo_date,
        [StringValue("PNT_66")]
        Referral_Details,

        [StringValue("RFA")]
        Refund_Amount,
        [StringValue("RMD")]
        Refunds_Max_Days,
        [StringValue("FRG")]
        REG_FEE_AUTO_FILL_IN_CASH,
        [StringValue("IHR")]
        IsHealthCardReq,
        [StringValue("WP_01")]
        WINDOW_POPUP,

        [StringValue("Reg")]
        Registration,
        [StringValue("GEN_167")]
        Registration_Billing_Concession_Applicable,
        [StringValue("GEN_169")]
        For_Registration_Cancel_Days,
        [StringValue("COM_103")]
        Registration_Fee,
        [StringValue("COM_105")]
        Registration_Validation,
        [StringValue("ADT_01")]
        Req_App_Letter_ADT_Ward_Varies,
        [StringValue("REQAPP")]
        Request_Approval,
        [StringValue("RSH")]
        REQ_SHIFTHRANDSUB_FOR_SHIFTLOG,
        [StringValue("RMC")]
        Req_Multiple_currency,
        [StringValue("I_PKG")]
        Required_provision_to_delete_package_includes,
        [StringValue("GEN_51")]
        Reset_AutoGenerationNo_EveryYear,
        [StringValue("LAB_63")]
        ResEntryAplicbl_BFInvestgation,
        [StringValue("LAB_07")]
        Result_Entry_Settings,
        [StringValue("IP_126")]
        RMChrg_Auto,
        [StringValue("ACC_33")]
        Salary_Company,
        [StringValue("SAMPLE_ACK")]
        SAMPLE_ACK,

        [StringValue("SCIP")]
        Allow_SAMPLE_Coll_for_IP, //(Sample Collection For Ip)
        [StringValue("PROF_EDIT")]
        IsProfessionalChargesEdit,
        [StringValue("CONS_EDIT")]
        IsConsultationEdit,
        [StringValue("FBL_1")]
        OLD_DT_FBILL,
        [StringValue("COM_117")]
        Service_Cancel_Before,
        [StringValue("LAB_09")]
        Service_Cancellation_for_Print,
        [StringValue("GEN_112")]
        ServiceGroup_WiseCopy,
        [StringValue("SGTCA")]
        Service_Group_Type_Wise_Concession_Applicable,

        [StringValue("OSPBR")]
        Osp_Billing_Required,

        [StringValue("ACC_122")]
        Service_Tax,

        [StringValue("SRTX_1")]
        IsServiceTaxRequired,//(Service Tax For Corporate)
        [StringValue("ACC_98")] // (Service Tax Required)
        SerTax_Req,
        [StringValue("SAP")]
        Shift_Alert_per,
        [StringValue("SLA")]
        Shift_Limit_amt,
        [StringValue("RPT_121")]
        ShwPntBtn_InReport,
        [StringValue("GEN_61")]
        Show_AllBedTypes_INBedChart,
        [StringValue("LAB_CRIT")]
        Show_Critical_Values,
        //FOR DISPATCHDASHBOARD PRINT
        [StringValue("ISMARGINTOP")]
        ISMARGINTOP,
        [StringValue("ISMARGINBOTTOM")]
        ISMARGINBOTTOM,
        [StringValue("ISHEADERHEIGHT")]
        ISHEADERHEIGHT,
        [StringValue("ISFOOTERHEIGHT")]
        ISFOOTERHEIGHT,
        [StringValue("ISMARGINTOPUNCHECK")]
        ISMARGINTOPUNCHECK,
        [StringValue("ISMARGINBOTTOMUNCHECK")]
        ISMARGINBOTTOMUNCHECK,
        [StringValue("ISHEADERHEIGHTUNCHECK")]
        ISHEADERHEIGHTUNCHECK,
        [StringValue("ISFOOTERHEIGHTUNCHECK")]
        ISFOOTERHEIGHTUNCHECK,
        [StringValue("HtmlrptXaxis")]
        ISHTMLXAXIXS,
        [StringValue("HtmlrptYaxis")]
        ISHTMLYAXIXS,
        //end

        [StringValue("GEN_05")]
        Show_errmsg,
        [StringValue("IP_127")]
        Show_IP_Option,
        [StringValue("LAB_NO")]
        LAB_NO,
        [StringValue("LAB_128")]
        Show_Units,
        [StringValue("SMS_6")]
        SMS_FROM_TIME,
        [StringValue("SMS_2")]
        SMS_Password,
        [StringValue("SMS_3")]
        SMS_Sender_Id,
        [StringValue("SMS_7")]
        SMS_TO_TIME,
        [StringValue("SMS_4")]
        SMS_URL,
        [StringValue("SMS_1")]
        SMS_User_Id,
        [StringValue("SMTP_6")]
        SMTP_Authenticate,
        [StringValue("SMTP_8")]
        SMTP_Paswword,
        [StringValue("SMTP_1")]
        SMTP_Proxy_Server,
        [StringValue("SMTP_2")]
        SMTP_Proxy_Server_Port,
        [StringValue("SMTP_3")]
        SMTP_Send_Using,
        [StringValue("SMTP_4")]
        SMTP_Server,
        [StringValue("SMTP_5")]
        SMTP_Server_port,
        [StringValue("SMTP_10")]
        SMTP_TO_Address,
        [StringValue("SMTP_9")]
        SMTP_Use_SSL,
        [StringValue("SMTP_7")]
        SMTP_User_Name,
        [StringValue("Lab_spec")]
        IS_SPECIMIN_VISIBLE,
        [StringValue("LAB_STP")]
        STP_NAME,
        [StringValue("TAB_101")]
        Tabs_Required_or_not,
        [StringValue("TOR")]
        Test_Occurency_Required_In_Billing,
        [StringValue("TM")]
        TIME_FORMAT,
        [StringValue("TiM")]
        Time_Min,
        [StringValue("COM_101")]
        UI_Visibility,

        [StringValue("LAB_137")]
        UPDATE_REQ_RESULT,
        [StringValue("ACC_30")]
        UserWise_Scroll,
        [StringValue("NEV")]
        VACCINATION_FOR_NEW_EMPLOYEE,

        [StringValue("VERIFICATION_UPDATE")]
        VERIFICATION_UPDATE,


        [StringValue("FBL_10")]
        Ward_Automation_Required,

        [StringValue("LAB_130")]
        WORK_FLOW,

        [StringValue("GEN_04")]
        saving_conformation,


        [StringValue("LAB_129")]//(Is  barcode Generate Automatically)
        Show_Units_As_Seperate_Col,
        [StringValue("LAB_12")]//(Uom Needed In Reports Separately )
        UOM_Needed_reports_separately,

        [StringValue("HCPDDI")]
        Health_Checkup_Package_Dietory_Details_Include,
        [StringValue("OTW")]
        OTCHECKIN,
        [StringValue("GEN211")]
        Days_to_validate_Verify_Mobile_No,
        [StringValue("PPCS")]
        Prescription_Print_Configuration_Setting,
        [StringValue("CONPRTSET")]
        Consultation_Print_Settings,
        [StringValue("PDA")]
        POST_DISCOUNT_APPROVAL_ALERT,
        [StringValue("REFVALID")]
        REFERAL_VALIDITY_EXPIRING_DAYS,
        [StringValue("OPBIL_103")]
        Casuality_Duty_Doctor,
        [StringValue("IRHD")]
        Required_IP_Bill_Report_Handover_Details,
        [StringValue("CHLP")]
        Cash_Credit_Limt_Percentage_Amt,
        [StringValue("RIS_SCH_MAN")]
        RIS_Schedule_Mandatory,
        [StringValue("CINDNT")]
        Create_Individual_Indent,
        [StringValue("HK")]
        HK_TIME,
        [StringValue("DT")]
        DISCHARGE_TIME,
        [StringValue("ICPSC")]
        IS_COLLECTION_POINT_REQD_IN_SAMPLE_COLLECTION
    }
    public enum Modules
    {
        [StringValue("M16")]
        Front_Office,
        [StringValue("M16-1")]
        Regestration,
        [StringValue("M16-2")]
        Day_Care
    }

    public enum Tariff
    {
        [StringValue("General")]
        General = 1,
        TARIFF,
        [StringValue("1")]
        General_value
    }

    public enum ServiceCodes
    {
        [StringValue("REG")]
        REGISTRATION,
        [StringValue("CON")]
        CONSULTATION
    }

    public enum PageClassification
    {
        Grid = 1,
        AddNew,
        Edit,
        View,
        CriticalValue = 5
    }

    public enum Department
    {

        Radiology = 17
    }
    public enum ServiceAutoCode
    {
        [StringValue("SHIFT_SCROLL_MGR")]
        ShiftScrollMrg,
        [StringValue("SHIFT_SCROLL_AUDIT")]
        ShiftScrollAudit,
        [StringValue("SHIFT_COL_SUBMIT")]
        ShiftColSubmit,
        [StringValue("ADT_PRE_AUTH")]
        InsuranceApprovl,
        [StringValue("SHIFT_USER_ADV")]
        ShiftUserAdv,
        [StringValue("SERVICE_GROUP")]
        ServiceGroup,
        [StringValue("SERVICE")]
        Service,
        [StringValue("ANESTHESIA")]
        AnasthesiaMaster,
        [StringValue("BILLINGHEAD")]
        BillingHeads,
        [StringValue("SURGERY_CATEGORIES")]
        SurgeryCategory,
        [StringValue("CONSULTATION_TYPES")]
        ConsultationType,
        [StringValue("FB_TEMPLATE")]
        TemplateMaster,
        [StringValue("FB_CONTROL_VALUE_SET")]
        CONTROL_VALUE_SET,
        [StringValue("FB_GROUP")]
        GroupMaster,
        [StringValue("FB_CONTROL_VALUE")]
        controlvaluemaster,
        [StringValue("APT_RSRC_TYPE")]
        ResoursType,
        [StringValue("ADT_PRE_ADMN")]
        PreAdmission,
        [StringValue("ADT_CREDIT_LIMIT")]
        InPatientCredit,
        [StringValue("FINANCIAL_WORKFLOW")]
        Financialworkflow,
        [StringValue("SHFT_CASH_DENOM")]
        CashDenominatin,
        [StringValue("APT_SLOT")]
        ApmntSlot,
        [StringValue("MA.FAMILYDISEASE")]
        familydisease,
        [StringValue("MA.CHIEF_COMPLAINTS")]
        Chief_Complaints,
        [StringValue("MA.DIAGNOSIS")]
        Diagnosis,
        [StringValue("MA.ITEMCAT")]
        ItemCategory,
        [StringValue("DRUGM")]
        drug,
        [StringValue("MA.HABITUATION")]
        Habituations,
        [StringValue("MA.SPECIAL_INSTRUCTIONS")]
        SPECIALINSTRUCTIONS,
        [StringValue("ALLERGIES")]
        allergies,
        [StringValue("DRUG_PROFILE0")]
        Drugprofile,
        [StringValue("ADT_CMP_STMT")]
        CompanyStatement,
        [StringValue("ITEMM")]
        Item,
        [StringValue("DOC_FORMAT")]
        Docformat,
        [StringValue("MA.NP_SYMPTOMM")]
        NP_SYMPTOMM,
        [StringValue("MA.PRO")]
        PRO,
        [StringValue("MA.HEALTH_CARD_TYPE")]
        HEALTH_CARD_TYPE,
        [StringValue("ADT_PRE_AUTH_REQ")]
        PRE_AUTHORIZATION,
    }
    public enum ST_DOC_TYPE
    {
        [StringValue("GRN")]
        Goods_recipt_Note,
        [StringValue("NRD")]
        Non_returnble_delveryChallan,
        [StringValue("RDC")]
        returnble_delveryChallan,
        [StringValue("RDR")]
        returnble_delveryNotes,
        [StringValue("STN")]
        Stock_Transfer_Note,
        [StringValue("STR")]
        Stock_transfer_recive,
        [StringValue("SAN")]
        Stock_adjust_Note,
        [StringValue("SCN")]
        Scrap_Note,
        [StringValue("POS")]
        Pointof_sales,
        [StringValue("POR")]
        Patient_returns
    }

    public enum ASSAY_PROCESS_TYPE
    {
        [StringValue("R")]
        ResultEntry,
        [StringValue("V")]
        Verification,
        [StringValue("A")]
        Approval,
        [StringValue("D")]
        Dispatch,
        [StringValue("RV")]
        Revoke_Verification,
        [StringValue("RA")]
        Revoke_Approval,
        [StringValue("RD")]
        Revoke_Dispatch,
        [StringValue("CR")]
        Cancel_Result,
        [StringValue("DR")]
        Dual_Report,
        [StringValue("RC")]
        Re_Collection,
        [StringValue("RFD")]
        Radiology_Film_Dispatch,
        [StringValue("RRD")]
        Radiology_Report_Dispatch,
        [StringValue("SR")]
        ReProcessing,
        [StringValue("MA")]
        MODIFIED_APPROVAL,
        [StringValue("RCNCL")]
        RESULT_CANCELATION,
    }
    public enum TRANSACTION_TYPE
    {
        Test = 1,
        Sample,
        SampleAcnwoldgement,
        ResultEntry,
        Verification,
        Approval,
        Dispatch,
    }

    public enum AdmissionFlags
    {
        [StringValue("PatConvrtGTC")]
        PatConvrt_GenToCorp,
        [StringValue("PatConvrtCTG")]
        PatConvrt_CorpToGen,
        [StringValue("PatConvrtCTC")]
        PatConvrt_CorpToCorp,
        [StringValue("IPCORPBILL")]
        Corporatebills,
        [StringValue("ISOSP")]
        ISOSP,
        [StringValue("OSP")]
        OSP,
        [StringValue("IMRPOST")]
        IMR_Posting,
        [StringValue("DAYREADT")]
        DAYREADT,
        [StringValue("DAYCARE")]
        DAYCARE,
        [StringValue("OP")]
        OP,
        [StringValue("PAS")]
        PreAdvanceSettlement,
        [StringValue("IP")]
        IP,
        [StringValue("PAM")]
        Pre_Admission,
        [StringValue("ADM")]
        Admissions,
        [StringValue("RAM")]
        ReAdmission,
        [StringValue("DEL")]
        DelivaryInfo,
        [StringValue("DELDSG")]
        DelivaryInfoIncDischarge,
        [StringValue("IPND")]
        TempAdmissions,//for All Other Condition such as "No bill" its work for Admission
        [StringValue("DSG")]
        Discharge,
        [StringValue("ADT")]
        Admitted,
        [StringValue("DSCSUMRY")]
        Dschrg_Summary,
        [StringValue("IPF")]
        IPFianlBills,
        [StringValue("PRE-REF")]
        PreRefunds,
        [StringValue("PREBILL")]
        PreFinalBilling,
        [StringValue("CORP")]
        Corporate,
        [StringValue("OPCORP")]
        OPCorporate,
        [StringValue("IPCORP")]
        IPCorporate,
        [StringValue("IPCORPPKG")]
        IPCorporatePkg,
        [StringValue("PKGCONS")]
        PackageConsults,
        [StringValue("OSPDUE")]
        OSP_Due_receipts,
        [StringValue("IPWOF")]
        PatientsWithoutFinalBills,
        [StringValue("IPWOFNCNV")]
        PatientsWithoutFinalnPkgCnvBill,
        [StringValue("IPPKGCNV")]
        PackageConvertedBills,
        [StringValue("IPCALLOFF")]
        IPServiceCallOff,
        [StringValue("SRVCNCL")]
        ServiceCancel,
        [StringValue("IPPKG")]
        IPPackageBillsNotDone,
        [StringValue("IPFCNV")]
        FinalandPackageConvertedBills,
        [StringValue("IPADV")]
        IPwithAdvance,
        [StringValue("IPPKGAPP")]
        PackageApproximateBills,
        [StringValue("DSGWBILL")]
        DischargeWithOutBill,
        [StringValue("REG")]
        RegisteredPatients,
        [StringValue("TIP")]
        OnlyAdmitedPat,
        [StringValue("IPDWOF")]
        PatForDisWithoutFinalBills,
        [StringValue("IPDF")]
        PatForDisWithIPFianlBills,
        [StringValue("ADMCNCL")]
        AdmissionCancel,
        [StringValue("CRDLMT")]
        CreditLmt,
        [StringValue("IPFPKGAPP")]
        FinalnPkgApproxBills,
        [StringValue("IPFWOPKGCNV")]
        FinalWithoutPkgAppnCnv,
        [StringValue("IPFCNVWOAPP")]
        FinalnCnvrWithoutPkgAppxBills,
        [StringValue("IPFWOCNV")]



        FinalnWithoutCnvBills,
        [StringValue("IPCNVWOF")]
        PkgCnvWithoutFinalBill,
        [StringValue("IPCWOFNCNV")]
        CorpPkgCnvWithoutFinalBill,
        [StringValue("CORPIPPKGCNV")]
        CorpPkgCnvPatients,
        [StringValue("NURSE")]
        Nurse,
        [StringValue("IPAddorRet")]
        IPAdditionalOrRetainedBedsForm,
        [StringValue("REGDUE")]
        REGDUE,
        [StringValue("REGCONC")]
        REGCONC,
        [StringValue("OSPDUE")]
        OSPDUE,
        [StringValue("OSPCONC")]
        OSPCONC,
        [StringValue("REG_REFERAL")]
        REG_REFERAL,
        [StringValue("REG_CONSUL")]
        REG_CONSUL,
        [StringValue("OSP_REFERAL")]
        OSP_REFERAL,
        [StringValue("OSP_CONSUL")]
        OSP_CONSUL,
        [StringValue("OPCORPLTRQ")]
        OPCORPLETTERREQ,
        [StringValue("OPCORPLTNTRQ")]
        OPCORPLETTERNOTREQIRD,
        [StringValue("CDVDY")]
        CARDVALIDITY,
        [StringValue("IPCORPAPX")]
        IPCORPAPX,
        [StringValue("IPCORPAPXFINAL")]
        IPCORPAPXFINAL,
        [StringValue("CORPREFLETTER")]
        CORPREFLETTER,
        [StringValue("CHNGCORPDTLS")] // for getting admitted patients who has referal letter entry
        CHNGCORPDTLS,
        [StringValue("CrpPkgApproxBills")]
        CrpPkgApproxBills,
        [StringValue("CrpPkgCnvAndWOCrpPkgAppxBills")]
        CrpPkgCnvAndWOCrpPkgAppxBills,
        [StringValue("WOCrpPkgCnvAndWOCrpPkgAppxBills")]
        WOCrpPkgCnvAndWOCrpPkgAppxBills,
        [StringValue("CrpPkgCnvBills")]
        CrpPkgCnvBills,
        [StringValue("WOCrpPkgCnvBills")]
        WOCrpPkgCnvBills,
        [StringValue("IPWOCORPAPXFINAL")]
        IPWOCORPAPXFINAL,
        [StringValue("REGWOCORP")]
        REGWOCORP,
        [StringValue("CHNGREGDETAILS")]
        CHNGREGDETAILS,
        [StringValue("CORPPKGCONS")]
        CorpPkgConsults,
        [StringValue("PREADM")]
        PreAdmission,
        [StringValue("CASUALREG")]
        CASUALREG,
        [StringValue("IPCORPPKGAPX")]
        CorpPkgWithOutfbill,
        [StringValue("IPPKGCNVCORP")]
        CnvrWithoutPkgApxFbBills,
        [StringValue("RESULTBILLS")]
        RESULTBILLS,
        [StringValue("ADTDSG")]
        AdmittedDischargePat,
        [StringValue("PROCEDUREDONE")]
        proceduredonePat,
        [StringValue("PROCEDUREDONEDSG")]
        proceduredonePatdsg,
        [StringValue("WOMEN")]
        Mother,
        [StringValue("ER")]
        ERDschrg_Summary,
        [StringValue("ER")]
        ERDischarge,

    }

    public enum ReceiptMode
    {
        [StringValue("REGISTRATION")]
        Registrations,
        [StringValue("CONSULTENT")]
        OpConsultations,
        [StringValue("OPBILLS")]
        OpBills,
        [StringValue("IPADVANCE")]
        IpAdvances,
        [StringValue("IPBILLS")]
        IpBills,
        [StringValue("DUES")]
        Dues
    }

    public enum IPUMRS
    {

    }

    public enum Format
    {
        [StringValue("Dept_ID")]
        Dept,
    }
    public enum Authorization
    {
        [StringValue("Due")]
        DueAuthorization,
        [StringValue("AUTH")]
        CHANGE_AUTHORISATION,
        [StringValue("MODAP")]
        STATUS_CNCL
    }
    public enum AntiBioticsAutoCode
    {
        [StringValue("ANTIBIOTIC_HEADER")]
        AntiBiotics,

    }
    public enum CommunicationMode
    {
        SMS = 6,
        EMAIL = 3,
        INTRANETMAIL = 7
    }

    public enum Corporate
    {
        [StringValue("COMPANY_ITEM")]
        Company_item,
        [StringValue("FO_RECPAY")]
        FO_RECPAY

    }

    public enum ReceiptTypes
    {
        Deposit_Advance = 1,
        Investigation = 3,
        Receipt_Against_Bill = 4,
        OP_Misc = 5,
        OSP_Misc = 18,
        OP_Corp_Misc = 19,
        Refund = 6,
        OP_Bill = 7,
        Pre_Advance = 8,
        IP_General_Bill = 9,
        Pre_Advance_Settlement = 10,
        IP_Package_Bill = 11,
        Pre_Refund = 12,
        Corporate = 13,
        OPD_Billing = 14,
        OSP_Billing = 15,
        Voucher_Payments = 16,
        OP_Corporate = 17,
        Convert_To_PreAdvance = 36

    }

    public enum PackageStatus
    {
        FromApproximateBillDone = 1,
        PackageConvDone = 2,
        GeneralBillDone = 3,
        GenBillPkgConvDone = 4
    }



    public enum PaymentModes
    {
        Cash = 1,
        Cheque = 2,
        Demand_Draft = 3,
        Credit_Card = 4,
        Debit_Card = 5,
        Online = 6,
        Voucher = 7
    }

    public enum Authorization_For
    {
        Op_Concession = 1,
        Op_Credit = 2,
        Op_Cancellations = 3,
        Ip_Concession = 6,
        Ip_Credit = 7,
        Op_Pharmacy_Cancellations = 4,
        Ip_Cancellations = 8,
        Patient_Bill_Conversion = 9,
        Voucher_Approval = 10,
        Modifying_Approved_Trans = 11,
        Discharge_Without_Settlement = 12,
        Op_Pharmacy_Due = 5,
        Ip_Admission = 0,//pls check this value in DB
        Dr_wise_Settlement = 16,
        Post_Discount = 15,
        OPD_Modification = 13,
        OPD_Cancellation = 14,
        Discard_prof_service_tax = 17,
        Merge_Umr_no = 18,
        Additional_Ret_Blocked_Bed = 21,
        Cheque_Authorization = 25,
        Refund_Authorization = 35,
        Indent_Authorization = 36,
        Indent_Apporval = 34,
        User_Management = 37,
        Patient_Temporary_Movement = 39
    }

    public enum IPBills
    {
        [StringValue("IPG")]
        General_Not_Disharged,
        [StringValue("IPGD")]
        General_Disharged,
        [StringValue("IPP")]   //NOt Discharged-package
        Package_Not_Disharged,
        [StringValue("IPPD")]
        Package_Disharged,
        [StringValue("IPC")]
        Corporate_Not_Disharged,
        [StringValue("IPC")]
        Corporate_Not_Discharged,   // Not Discharged-corporate
        [StringValue("IPCD")]
        Corporate_Disharged,

        [StringValue("IPFBILL")]
        General_Bill_Done_Not_Discharged,
        [StringValue("IPPBILL")]
        Package_Bill_Done_Not_Discharged,
        [StringValue("IPCORP")]
        Corporate_Bill_Done_Not_Discharged,

        [StringValue("IPDG")]
        General_FinalCl_Discharged, // Discharged-General
        [StringValue("IPDP")]
        Package_FinalCl_Dischargedok,//Discharged-package
        [StringValue("IPDC")]
        Corporate_FinalCl_Discharged,// Discharged-corporate(Ref-Type-ID=13)



    }

    public enum HL7OUTBOUND
    {
        [StringValue("LABRES")]
        LAB_ORDER_RESULTS,
        [StringValue("LABORD")]
        LAB_ORDER,
        [StringValue("BILL")]
        FINANCIAL_TRANSACTIONS,
    }
    public enum itemlevel1Enum
    {
        ITEM_L1
    }

    public enum Consultation
    {
        Op_Cons_For_Org = 9,
        Ip_Cons_For_Org = 10,
        Op_Cons_Default_Org = 1,
        IP_Cons_Default_Org = 4
    }
    public enum ServicePriceDimension
    {
        [StringValue("Default_ORG")]
        Default_ORG = 1,
        [StringValue("OP_ORG")]
        OP_ORG = 3,
        [StringValue("IP_ORG")]
        IP_ORG = 4
    }
    public enum REFERENCE_TYPE
    {
        [StringValue("ADMIN")]
        Admin,
        [StringValue("SUA")]
        superAdmin,
        [StringValue("PATIENT")]
        Patient,
        [StringValue("DOCTOR")]
        Doctor,
        [StringValue("EMP")]
        Employee,
        [StringValue("VENDOR")]
        Vendor,
        [StringValue("ORGN")]
        Organization,
        [StringValue("SE.GROUP")]
        Group,
        [StringValue("LOCATION")]
        Location,
        [StringValue("COMPANY")]
        Company,
        [StringValue("BANKBRN")]
        Bank_Branch,
        [StringValue("STND")]
        Standard,
        [StringValue("ODOC")]
        Other_Doctors,
        [StringValue("OHOS")]
        Other_Hospitals,
        [StringValue("OORG")]
        Other_Organizations,
        [StringValue("HCOD")]
        Health_Co_ordinators,
        [StringValue("PATEMR")]
        Patient_Emrgency,
        [StringValue("PAS")]
        Personal_Asst,
        [StringValue("NURSE")]
        Nurse,
        [StringValue("PHARMACY")]
        Pharmacy,
        [StringValue("FNT")]
        Front_Office,
        [StringValue("LAB")]
        Laboratory,
        [StringValue("OTH")]
        Others,
        [StringValue("FRU")]
        Franchise_User,
        [StringValue("ACCESION")]
        Accesion,
        [StringValue("TECH")]
        Technical,
        [StringValue("SMGR")]
        Sales_Manager,
        [StringValue("AUTH")]
        Authentication,
        [StringValue("DBOY")]
        Dispatch_Boy,
        [StringValue("Verification")]
        Verification,
        [StringValue("Phlebotomist")]
        Phlebotomist,
        [StringValue("HVST")]
        Home_Visit,
        [StringValue("DEL")]
        Delivery,
        [StringValue("REF")]
        REF,
    }
    public enum Doctor_Role
    {
        Primary_Doctor = 4,   //Treatment doctor
        Secondary_Doctor = 5   //Duty Doctor
    }
    public enum AdmissionProcess
    {
        CALL_NOT_RESPONSE = 1,
        CONFIRMED = 2,
        POSTPONED = 3,
        CANCELLED = 4,
        VISITED = 5
    }

    public enum QMS_SERVICE_TYPES
    {
        REGISTRATION = 1,
        CONSULTATION = 2,
        REGISTRATION_CONSULTATION = 3,
        DIAGNOSTICSBILLING = 4,
        PHARMACYBILLING = 5,
        PHARMACYDISPATCH = 6,
        PHARMACYRETURNS = 7,
        PHARMACYREFUNDS = 8,
        SAMPLECOLLECTION = 9
    }
    public enum enumBB
    {



        [StringValue("OTBOOK")]
        OTBOOK,//OTBOOK

        [StringValue("SS")]
        SS,//SURGERY
        [StringValue("SM")]
        SM,//SURGERY
        [StringValue("IT")]
        IT,//SURGERY
        [StringValue("EQ")]
        EQ,//Equipment
        [StringValue("SM")]
        CS,//Cat Special Type
        [StringValue("CST")]
        CST,//Cat Special Type1
        [StringValue("TM")]
        TM,//Blood Bag Type
        [StringValue("TT")]
        TT,//Blood Bag Type
        [StringValue("BBT")]
        BBT,//Blood Bag Type
        [StringValue("BP")]
        BP,//Blood Product
        [StringValue("BSP")]
        BSP,
        [StringValue("BG")]
        BG,
        [StringValue("PM")]
        PM,
        [StringValue("BDR")]
        BDR,
        [StringValue("BDQ")]
        BDQ,
        [StringValue("BDS")]
        BDS,
        [StringValue("SCS")]
        SCS,
        [StringValue("SC")]
        SC,
        [StringValue("BCS")]
        BCS,
        [StringValue("BCSBG")]
        BCSBG,
        [StringValue("BDV")]
        BDV,
        [StringValue("BDVG")]
        BDVG,
        [StringValue("ST")]
        ST,
        [StringValue("BCSBl")]
        BCSBl,
        [StringValue("XMTCH")]
        XMTCH,
        [StringValue("XMTCHB")]
        XMTCHB,
        [StringValue("XMTCHU")]
        XMTCHU,
        BCSBGA,
        //ST,
        BBTA,
        BPA,
        BSPA,
        BGA,
        PMA,
        BDRA,
        BDQA,
        BDSA,
        SCSA,
        SCA,
        BCSA,
        BR,
        BS,
        BSIN,
        BBG,
        STE,
        BIN,
        XMTCHA,
        BBI,
        BBP,
        BBIG,
        BBIS,
        XMATCHP,
        XMATCHRP,
        MANUAL_CD,
        OTREQ,
        OTREQSUR,
        OTBOOKSUB,
        RES,
        SLOTS,
        OTBOOKDTLS,
        OT_PRE_SUR,
        OT_PRE_RSRC,
        OT_BODY_PARTS,
        OT_PRE_OP,
        OT_ANESTHESIA,
        SUR_PRICE,
        SUR_PRICE1,
        OTOP,
        OTOPSUR,
        OTOPRSRC,
        OTOPAMP,
        OTOPITEM,
        OTOPP,
        OPRSCPRICE,
        OPRSC,
        ALLOPRSC,
        AREA,
        SCHSURGERIES, SCHRSRC, PRICESEQUP, Fumigation, CATEGIOURIES,
    }

    public enum AUDIT_OPTIONS
    {
        PRINT,
        EDIT,
        VIEW
    }
}
