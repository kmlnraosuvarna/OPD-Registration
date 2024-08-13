
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class StoreProceduresNames
    {
        public const string UPR_INSUPD_ROOM_DEPARTMENT = "PR_INSUPD_ROOM_DEPARTMENT";
        public const string UPR_GET_ROOM_DEPARTMENT = "PR_GET_ROOM_DEPARTMENT";

        public const string UPR_INSUPD_ADT_ESTBILL = "PR_INSUPD_ADT_ESTBILL_XML";
        public const string UPR_GETALL_ADT_ESTBILL = "PR_GETALL_ADT_ESTBILL";
        public const string UPR_PR_GET_ADT_ESTBILL_SRV = "PR_GET_ADT_ESTBILL_SRV";
        public const string UPROC_GET_AllIPS_NEW = "PROC_GET_AllIPS_NEW";
        public const string UPROC_GET_ALLUMRNO_NEW = "PROC_GET_ALLUMRNO_NEW";
        
        public const string UPR_GETALL_CSSD_KIT_RECEIVE_LOOKUP = "PR_GETALL_CSSD_KIT_RECEIVE_LOOKUP";
        public const string UPR_GETALL_KIT_ISSUE_LOOKUP = "PR_GETALL_KIT_ISSUE_LOOKUP";
        public const string UPR_GETALL_ST_STP_FROM_USER_CSSD = "PR_GETALL_ST_STP_FROM_USER_CSSD";
        public const string UPR_GETALL_ST_STP_TO_USER_CSSD = "PR_GETALL_ST_STP_TO_USER_CSSD";
        public const string UPR_GET_CSSD_KIT_MASTER_ITEMS = "PR_GET_CSSD_KIT_MASTER_ITEMS";
        public const string UPR_GET_CSSD_ITEM_BAT = "PR_GET_CSSD_ITEM_BAT";
        public const string UPR_INSUPD_CSSD_ITEM_STP_XML = "PR_INSUPD_CSSD_ITEM_STP_XML";
        public const string UPR_GETALL_CSSD_ITEM_STP = "PR_GETALL_CSSD_ITEM_STP";
        public const string UPR_INSUPD_CSSD_KIT_INSTRUMENT_XML = "PR_INSUPD_CSSD_KIT_INSTRUMENT_XML";
        public const string UPR_GETALL_CSSD_KIT_INSTRUMENT = "PR_GETALL_CSSD_KIT_INSTRUMENT";
        public const string UPR_INSUPD_CSSD_KIT_RETURN_XML = "PR_INSUPD_CSSD_KIT_RETURN_XML";
        public const string UPR_GET_CSSD_KIT_RETURN = "PR_GET_CSSD_KIT_RETURN";
        public const string UPR_GET_CSSD_KIT_RETURN_ITEM = "PR_GET_CSSD_KIT_RETURN_ITEM";
        public const string UPR_GETALL_CSSD_KIT_RETURN = "PR_GETALL_CSSD_KIT_RETURN";
        public const string UPR_INSUPD_VEHICLE_CHARGES = "PR_INSUPD_VEHICLE_CHARGES";
        public const string UPR_GET_ALL_CSSD_ENTITY_PRC = "PR_GET_ALL_CSSD_ENTITY_PRC";

        public const string UPR_GETALL_WINGS = "PR_GETALL_WINGS";
        public const string UPR_INSUPD_WING = "PR_INSUPD_WING";
        public const string UPR_GET_WING = "PR_GET_WING";
        public const string UPR_DEL_WING = "PR_DEL_WING";
        public const string UPR_GETALL_BLOCK = "PR_GETALL_BLOCKS";
        public const string UPR_GETALL_WING = "PR_GETALL_WING";
        public const string UPR_GET_INSUPD_PHYSICAL_EXAMINATION_MASTER = "PR_GET_INSUPD_PHYSICAL_EXAMINATION_MASTER";
        public const string UDD_PR_GET_QMS_SRV_DETAILS = "DD_PR_GET_QMS_SRV_DETAILS";
        public const string UDD_PR_UPD_SRV_QMS = "DD_PR_UPD_SRV_QMS";
        public const string UPR_GET_CORP_IPPKGBILL_VIEW_PKG = "PR_GET_CORP_IPPKGBILL_VIEW_PKG";
        public const string UPR_GET_IP_SERVICES_FINAL_CORPORATE = "PR_GET_IP_SERVICES_FINAL_CORPORATE";
        public const string UPR_GET_BILLING_HEAD_AUTO = "PR_GET_BILLING_HEAD_AUTO";
        public const string UPR_INSUPD_ADT_APPBILL_XML_CORP = "PR_INSUPD_ADT_APPBILL_XML_CORP";
        public const string UPR_GET_IP_COMPANY_TARIFF_PRICE_CORP_PKG = "PR_GET_IP_COMPANY_TARIFF_PRICE_CORP_PKG";
        public const string UPR_GET_ADT_PKGAPPBILL_VIEW_CORP_APP = "PR_GET_ADT_PKGAPPBILL_VIEW_CORP_APP";
        public const string UPR_GET_CONV_CORP_PKG_DET_EDIT = "PR_GET_CONV_CORP_PKG_DET_EDIT";
        public const string UPR_INS_CORP_PACKAGE_BILL_XML = "PR_INS_CORP_PACKAGE_BILL_XML";
        public const string UPR_GET_PCKG_CONV_DET_CORP_APP = "PR_GET_PCKG_CONV_DET_CORP_APP";



        public const string UPR_GETALL_PACKAGE_CONV_CORP = "PR_GETALL_PACKAGE_CONV_CORP";
        public const string UPR_GET_SAMPLE_ENTRY_REPORT = "PR_GET_SAMPLE_ENTRY_REPORT";
        public const string UPR_INSUPD_SAMPLE_UNIT = "PR_INSUPD_SAMPLE_UNIT";
        public const string UPR_GET_LAB_UNIT_AUTO = "PR_GET_LAB_UNIT_AUTO";
        public const string UPR_GET_LAB_UNIT_MASTER_PAGING = "PR_GET_LAB_UNIT_MASTER_PAGING";
        public const string UGET_PHELBOTOMIST_EMPLOYEE = "GET_PHELBOTOMIST_EMPLOYEE";
        public const string UPR_GET_RADIOLOGY_BILL_DET = "PR_GET_RADIOLOGY_BILL_DET";
        public const string UPR_GET_RADIOLOGY_SERVICE_DET = "PR_GET_RADIOLOGY_SRV_DET";
        public const string UPR_GET_Department_ID = "PR_GET_Department_ID";
        public const string UPR_GET_Department_PAGING = "PR_GET_Department_PAGING";
        public const string UPR_INSUPD_DEPARTMENT = "PR_INSUPD_DEPARTMENT";
        public const string UPR_GET_TESTTYPES = "PR_GET_TESTTYPES";
        #region PatConvesionType Members
        public const string UPR_GET_IP_PAT_CNVRT_TYPE_GRID = "PR_GET_IP_PAT_CNVRT_TYPE_GRID";
        public const string UPR_GET_IP_PAT_CNVRT_TYPE_GRID_AUTO = "PR_GET_IP_PAT_CNVRT_TYPE_GRID_AUTO";
        public const string UPR_INS_PAT_CONVERSION_TYPE = "PR_INS_PAT_CONVERSION_TYPE";
        public const string UPR_INS_PAT_CONVERSION_TYPE_AUTO = "PR_INS_PAT_CONVERSION_TYPE_AUTO";
        #endregion
        public const string UPR_GET_IP_PKG_SERVICE_DETAILS = "PR_GET_IP_PKG_SERVICE_DETAILS";
        public const string UPR_GET_TESTSTATUS_DETAILS_BY_BILLID = "PR_GET_TESTSTATUS_DETAILS_BY_BILLID";
        public const string UPR_GET_TESTSTATUS_BILLS = "PR_GET_TESTSTATUS_BILLS";
        public const string UPR_UNLOCK_USER = "PR_UNLOCK_USER";
        public const string UPR_GET_DRUG_ALERT = "PR_GET_DRUG_ALERT";//PR_GET_WARD_ROOM_BED_ON_COND_NURSE_DOSAGE
        public const string UPR_GET_QUESTIONARY = "PR_GET_QUESTIONARY";
        public const string UPR_GETALL_PROF_DESIGNATION = "PR_GETALL_PROF_DESIGNATION";
        public const string UPR_GET_BED_DET_BASED_ON_ROOM = "PR_GET_BED_DET_BASED_ON_ROOM";
        public const string UPR_GET_APPROVE_RECORDS = "PR_GET_APPROVE_RECORDS";
        public const string UPR_GET_DISC_REQ_PENDING_DEPTS = "PR_GET_DISC_REQ_PENDING_DEPTS";
        public const string UPR_GET_MSG_TRANSACTION_TYPES = "PR_GET_MSG_TRANSACTION_TYPES";
        public const string UPR_GETALL_DD_INVS_ORDER_AUTO_D = "PR_GETALL_DD_INVS_ORDER_AUTO_D";
        public const string UPR_GETALL_DD_INVS_ORDER_AUTO = "PR_GETALL_DD_INVS_ORDER_AUTO";
        public const string UPR_GET_LABNUMBER_ID = "PR_GET_LABNUMBER_ID";
        public const string UPR_GET_ADMISSION_REQUISITION_AUTO = "PR_GET_ADMISSION_REQUISITION_AUTO";
        public const string UPR_GET_ADMISSION_REQUISITION = "PR_GET_ADMISSION_REQUISITION";
        public const string UPR_GET_LABNUMBER_PAGING = "PR_GET_LABNUMBER_PAGING";
        public const string UPR_GET_IP_SRV_TYPE_WISE_AMOUNT = "PR_GET_IP_SRV_TYPE_WISE_AMOUNT";
        public const string UPR_GET_DISCHARGE_PROGRESS_MGNT = "PR_GET_DISCHARGE_PROGRESS_MGNT";
        public const string UPR_GET_SERVICES_SRVTYPE_SRVGRP = "PR_GET_SERVICES_SRVTYPE_SRVGRP";
        public const string UPR_GET_NURSE_REQUESTED_USERS = "PR_GET_NURSE_REQUESTED_USERS";
        public const string UPR_GET_MERGE_UMR_NO_AUTO = "PR_GET_MERGE_UMR_NO_AUTO";
        public const string UPR_GET_MERGE_UMR_NO = "PR_GET_MERGE_UMR_NO";
        public const string UPR_GET_PREREG_AUTO = "PR_GET_PREREG_AUTO";
        public const string UPR_UPD_SERVICE_GROUP_WISE_PRICE = "PR_UPD_SERVICE_GROUP_WISE_PRICE";
        public const string UPR_GET_VISIT_TYPE = "PR_GET_VISIT_TYPE";
        public const string UPR_GET_FO_PRE_REG_LOOKUP_AUTO = "PR_GET_FO_PRE_REG_LOOKUP_AUTO";
        public const string UPR_GET_FO_PRE_REG_AUTO = "PR_GET_FO_PRE_REG_AUTO";
        public const string UPR_GET_PREREG_NEW_AUTO = "PR_GET_PREREG_NEW_AUTO";
        public const string UPR_GET_FO_PRE_REG = "PR_GET_FO_PRE_REG";
        public const string UPR_GET_FO_PRE_REG_PAGING = "PR_GET_FO_PRE_REG_PAGING";
        public const string UPR_DEL_FO_PRE_REG = "PR_DEL_FO_PRE_REG";
        public const string UPR_INSUPD_FO_PRE_REG = "PR_INSUPD_FO_PRE_REG";
        public const string UPR_GET_INC_EXC_SERVICE = "PR_GET_INC_EXC_SERVICE";
        public const string UPR_GET_DIM_DET = "PR_GET_DIM_DET";
        public const string UPR_GET_PRO_DLETE = "PR_GET_PRO_DLETE";
        public const string UPR_GET_PRO_AUTO_NEW = "PR_GET_PRO_AUTO_NEW";
        public const string UPR_GET_PRO_VIEW = "PR_GET_PRO_VIEW";
        public const string UPR_GET_PRO_NAME = "PR_GET_PRO_NAME";
        public const string UPR_GET_PRO_PAGING = "PR_GET_PRO_PAGING";
        public const string UPR_INSUPD_PRO = "PR_INSUPD_PRO";
        public const string UPR_GET_TARIFF_DET = "PR_GET_TARIFF_DET";
        public const string UPR_INSUPD_ORG_DUE_PAYMENT = "PR_INSUPD_ORG_DUE_PAYMENT";
        public const string UPR_GET_DOC_AUTO_COMP = "PR_GET_DOC_AUTO_COMP";
        public const string UPR_INSUPD_FO_REG_ALLERGY_XML = "PR_INSUPD_FO_REG_ALLERGY_XML";
        public const string UPR_GET_ALLERGIES_AUTOCOM = "PR_GET_ALLERGIES_AUTOCOM";
        public const string UPR_GET_ALLERGY_SEVERITY_AUTO = "PR_GET_ALLERGY_SEVERITY_AUTO";
        public const string UPR_GET_ALLERGY_CLINICAL_STATUS_AUTO = "PR_GET_ALLERGY_CLINICAL_STATUS_AUTO";
        public const string UPR_GET_ALLERGY_TYPE_AUTO = "PR_GET_ALLERGY_TYPE_AUTO";
        public const string UPR_INSUPD_BED_XML_ROOT = "PR_INSUPD_BED_XML_ROOT";
        public const string UPR_GET_RECEIPT_REFERENCE_NAME = "PR_GET_RECEIPT_REFERENCE_NAME";
        public const string UPR_INSERT_SERVICE_DET_XML_ROOT = "PR_INSERT_SERVICE_DET_XML_ROOT";
        public const string UPR_GET_CORP_PAT_INFO_PAGING = "PR_GET_CORP_PAT_INFO_PAGING";
        public const string UPR_GET_SERVICE_GROUP_AUTOCOMPLTE = "PR_GET_SERVICE_GROUP_AUTOCOMPLTE";
        public const string UPR_GET_REFERAL_LETTER_NO = "PR_GET_REFERAL_LETTER_NO";
        public const string UPR_INSUPD_BED_XML = "PR_INSUPD_BED_XML";
        public const string UPR_GET_IP_COMPANY_TARIFF_PRICE = "PR_GET_IP_COMPANY_TARIFF_PRICE";
        public const string UPR_GET_TPA_INSURENCE_DET = "PR_GET_TPA_INSURENCE_DET";
        public const string UPR_INSUPD_TPA_INSURENCE_XML = "PR_INSUPD_TPA_INSURENCE_XML";
        public const string UPR_GET_ALL_COMPANY_DET = "PR_GET_ALL_COMPANY_DET";
        public const string UPR_INSUPD_PKG_CONS_DOC_PRICE_XML = "PR_INSUPD_PKG_CONS_DOC_PRICE_XML";
        public const string UPR_GET_PR_TEMPLATE_AUTO = "PR_GET_PR_TEMPLATE_AUTO";
        public const string UPR_GET_ALL_DOCTOR_DET = "PR_GET_ALL_DOCTOR_DET ";
        public const string UPR_GETALL_PR_TEMPLATE = "PR_GETALL_PR_TEMPLATE";
        public const string UPR_INSUPD_PR_TEMPLATE = "PR_INSUPD_PR_TEMPLATE";
        public const string UPR_GET_PR_TEMPLATE = "PR_GET_PR_TEMPLATE";
        public const string UPR_INSUPD_FO_BILL_XML_ROOT = "PR_INSUPD_FO_BILL_XML_ROOT";
        public const string UPR_INSUPD_ADT_APPBILL_AND_IMR_ITEM_XML = "PR_INSUPD_ADT_APPBILL_AND_IMR_ITEM_XML";
        public const string UPR_INSUPD_FO_BILL_XML = "PR_INSUPD_FO_BILL_XML";
        public const string UPR_INSUPD_TARIFF_SERVICE_XML = "PR_INSUPD_TARIFF_SERVICE_XML";
        public const string UPR_DELETE_CORPBILL = "PR_DELETE_CORPBILL";
        public const string UPR_GET_SERVICE_PRICE_TIER_ID = "PR_GET_SERVICE_PRICE_TIER_ID";
        public const string UPR_GET_CORP_IP_SERVICES = "PR_GET_CORP_IP_SERVICES";
        public const string UPR_GET_AUTO_CORP_IP_SERVICES = "PR_GET_AUTO_CORP_IP_SERVICES";
        public const string UPR_GET_VW_SERVICES_AUTO = "PR_GET_VW_SERVICES_AUTO";
        public const string UPR_GET_TAX_NARRATION = "PR_GET_TAX_NARRATION";
        public const string UPR_GET_GEN_SRV_TAX = "PR_GET_GEN_SRV_TAX";
        public const string UPR_INSUPD_GENSRVTAX_DET = "PR_INSUPD_GENSRVTAX_DET";
        public const string UPR_INSUPD_CORP_COLLECTION_XML = "PR_INSUPD_CORP_COLLECTION_XML";
        public const string UPR_GET_ERROR_REPORT = "PR_GET_ERROR_REPORT";
        public const string UPR_GET_CORP_PKG_SERVICES_BYID = "PR_GET_CORP_PKG_SERVICES_BYID_CORP";
        public const string UPR_GET_CARD_VALIDITY = "PR_GET_CARD_VALIDITY";
        public const string UPR_INSUPD_HM_CORP_ADMNREN = "PR_INSUPD_HM_CORP_ADMNREN";
        public const string UPR_GETALL_RECEIPT_COLUMN_BASED_AUTO = "PR_GETALL_RECEIPT_COLUMN_BASED_AUTO";
        public const string UPR_GET_FINAL_BILL_STATUS = "PR_GET_FINAL_BILL_STATUS";
        public const string UPR_GET_ACCOUNTING_COMPANY = "PR_GET_ACCOUNTING_COMPANY";
        public const string UINS_UPD_TRANSACTION_LOCK = "INS_UPD_TRANSACTION_LOCK";
        public const string UPR_GET_CHECK_REVISIT = "PR_GET_CHECK_REVISIT";
        public const string UPR_GET_ASSAY_SPEC_COLL = "PR_GET_ASSAY_SPEC_COLL";
        public const string UPR_GET_APT_PAT_COUNT = "PR_GET_APT_PAT_COUNT";
        public const string UPR_GET_APP_PKG_DET = "PR_GET_APP_PKG_DET";
        public const string UPR_INS_PACKAGE_BILL_XML = "PR_INS_PACKAGE_BILL_XML";
        public const string UPR_GET_PACKAGE_CONSULTATIONS = "PR_GET_PACKAGE_CONSULTATIONS";
        public const string UPR_GET_ADT_PKGAPPBILL_VIEW = "PR_GET_ADT_PKGAPPBILL_VIEW";
        public const string UPR_INSUPD_CORPORATE_STMTCOL_XML = "PR_INSUPD_CORPORATE_STMTCOL_XML";
        public const string UPR_GET_CORP_IPPKGBILL_VIEW = "PR_GET_CORP_IPPKGBILL_VIEW";
        public const string UPR_GET_CORP_IPPKGBILL_SRV_VIEW = "PR_GET_CORP_IPPKGBILL_SRV_VIEW";
        public const string UPR_GETALL_CMP_STMT = "PR_GETALL_CMP_STMT";
        public const string UPR_GET_COMPANY_SERVICETYPETAX = "PR_GET_COMPANY_SERVICETYPETAX";
        public const string UPR_GET_CORP_IPBILL_VIEW = "PR_GET_CORP_IPBILL_VIEW";
        public const string UPR_GET_ADT_APPBILL_FPNL = "PR_GET_ADT_APPBILL_FPNL";
        public const string UPR_GET_COR_APPROXIMATE = "PR_GET_COR_APPROXIMATE";
        public const string UPR_INSUPD_ADT_APPBILL_XML = "PR_INSUPD_ADT_APPBILL_XML";
        public const string UPR_GET_CORP_STMT_TYPE_RPT_FMT_CNT = "PR_GET_CORP_STMT_TYPE_RPT_FMT_CNT";
        public const string UPR_GETALL_CORP_STMT_TYPE_RPT_FMT_CNT = "PR_GETALL_CORP_STMT_TYPE_RPT_FMT_CNT";
        public const string UPR_GET_CORP_STMT_TYPE_RPT_FMT_CNT_AUTO = "PR_GET_CORP_STMT_TYPE_RPT_FMT_CNT_AUTO";
        public const string UPR_INS_CORPORATE_XML = "PR_INS_CORPORATE_XML";
        public const string UPR_GET_CORPORATE_BILL_DET = "PR_GET_CORPORATE_BILL_DET";
        public const string UPR_GET_CORPORATE_BILL_DET_AUTO = "PR_GET_CORPORATE_BILL_DET_AUTO";
        public const string UPR_GET_COR_APPROXIMATE_AUTO = "PR_GET_COR_APPROXIMATE_AUTO";
        public const string UPR_GET_OPBILL_BACKUP_REPORT = "PR_GET_OPBILL_BACKUP_REPORT";
        public const string UPR_INS_CORP_STMT_TYPE_RPT_FMT_CNT = "PR_INS_CORP_STMT_TYPE_RPT_FMT_CNT";
        public const string UPR_GET_ORGANDEMPPAYPERCENT = "PR_GET_ORGANDEMPPAYPERCENT";
        public const string UPR_GET_TERIFFSERV = "PR_GET_TERIFFSERV";
        public const string UPR_GETALL_STMTFORMAT_DETAILS = "PR_GETALL_STMTFORMAT_DETAILS";
        public const string UPR_GETALL_CMPSERV = "PR_GETALL_CMPSERV";
        public const string UPR_GET_COMPNYINFO_BY_ADMNID = "PR_GET_COMPNYINFO_BY_ADMNID";
        public const string UPR_GET_COMPANY_TARIFF_SER_MAPPING = "PR_GET_COMPANY_TARIFF_SER_MAPPING";
        public const string UPR_GET_TARIFF_RULES = "PR_GET_TARIFF_RULES";
        public const string UPR_GET_DOCTOR_INDENT_LOOKUP = "PR_GET_DOCTOR_INDENT_LOOKUP";
        public const string UPR_GET_MODIFY_APPROVE_AUTO = "PR_GET_MODIFY_APPROVE_AUTO";
        public const string UPR_GET_SERVICE_TYPESFORPOST_DSCNT = "PR_GET_SERVICE_TYPESFORPOST_DSCNT";
        public const string UPR_GET_DOCTOR_INDENTS = "PR_GET_DOCTOR_INDENTS";
        public const string UPR_INS_STATUS_CNCL = "PR_INS_STATUS_CNCL";
        public const string UPR_GET_PATIENT_DET_BAS_ADMN_UMR = "PR_GET_PATIENT_DET_BAS_ADMN_UMR";
        public const string UPR_GET_NURSESTATION_BASEDON_NURSE = "PR_GET_NURSESTATION_BASEDON_NURSE";
        public const string UPR_GET_NUR_IND_DET1 = "PR_GET_NUR_IND_DET";
        public const string UPR_DEL_REFUND_DET = "PR_DEL_REFUND_DET";
        public const string UPR_GET_WARD_ROOM_BED_ON_COND = "PR_GET_WARD_ROOM_BED_ON_COND";
        public const string UPR_GET_WARD_ROOM_BED_DROPDOWN_DET = "PR_GET_WARD_ROOM_BED_DROPDOWN_DET";
        public const string UPR_GET_PER_PARTNER_SERVICEINFO_AUTO_BASED_ONID = "PR_GET_PER_PARTNER_SERVICEINFO_AUTO_BASED_ONID";
        public const string UPR_GET_PER_PARTNER_SERVICEINFO_AUTO = "PR_GET_PER_PARTNER_SERVICEINFO_AUTO";
        public const string UPR_INSUPD_ADDITIONAL_BED = "PR_INSUPD_ADDITIONAL_BED";
        public const string UPR_GET_PARTNER_SERVICEINFO = "PR_GET_PARTNER_SERVICEINFO";
        public const string UPR_GET_PER_PARTNER_SERVICEINFO = "PR_GET_PER_PARTNER_SERVICEINFO";
        public const string UPR_GET_CORP_BILL_DTLS = "PR_GET_CORP_BILL_DTLS";
        public const string UPR_GET_ACCOUNT_LEDGE_DTL = "PR_GET_ACCOUNT_LEDGE_DTL";
        public const string UPR_GET_PACKAGES_BY_BID = "PR_GET_PACKAGES_BY_BID";
        public const string UPR_GETALL_PKG_BILL_SRV = "PR_GETALL_PKG_BILL_SRV";
        public const string UPR_GET_PKG_GEN_BILL_DET = "PR_GET_PKG_GEN_BILL_DET";
        public const string UPR_GET_DOCTOR_TRANSFER_AUTO = "PR_GET_DOCTOR_TRANSFER_AUTO";
        public const string UPR_CNCL_PKG_CON_MASTER = "PR_CNCL_PKG_CON_MASTER";
        public const string UPR_INSUPD_ST_CARRIER = "PR_INSUPD_ST_CARRIER";
        public const string UPR_GETALL_ST_CARRIER = "PR_GETALL_ST_CARRIER";
        public const string UPR_GET_ST_CARRIER_AUTO = "PR_GET_ST_CARRIER_AUTO";
        public const string UPR_GET_USER_WISE_LOG_DETAILS = "PR_GET_USER_WISE_LOG_DETAILS";
        public const string UPR_DEL_ST_CARRIER = "PR_DEL_ST_CARRIER";
        public const string UPR_GET_ST_CARRIER_FPNL = "PR_GET_ST_CARRIER_FPNL";
        public const string UPR_GET_ST_CARRIER_LOOKUP = "PR_GET_ST_CARRIER_LOOKUP";
        public const string UPR_INSUPD_ST_CARRIER_PLAN = "PR_INSUPD_ST_CARRIER_PLAN";
        public const string UPR_GETALL_ST_CARRIER_PLAN = "PR_GETALL_ST_CARRIER_PLAN";
        public const string UPR_GET_ST_CARRIER_PLAN_FPNL = "PR_GET_ST_CARRIER_PLAN_FPNL";
        public const string UPR_DEL_ST_CARRIER_PLAN = "PR_DEL_ST_CARRIER_PLAN";
        public const string UPR_GET_ST_CARRIER_PLAN_AUTO = "PR_GET_ST_CARRIER_PLAN_AUTO";
        public const string UPR_GET_VW_RESULT_ENTRY_PENDING_DETAILS = "PR_GET_VW_RESULT_ENTRY_PENDING_DETAILS";
        public const string UPR_GET_VW_RESULT_ENTRY_PENDING_DET = "PR_GET_VW_RESULT_ENTRY_PENDING_DET";
        public const string UPR_INSUPD_ASSAY_DELAY_MSG_XML = "PR_INSUPD_ASSAY_DELAY_MSG_XML";
        public const string UPR_GETALL_ASSAY_DELAY_MSG = "PR_GETALL_ASSAY_DELAY_MSG";

        public const string UPR_GET_GROUPBILL_SERVICES = "PR_GET_GROUPBILL_SERVICES";
        public const string UPR_GET_OPIP_BILL_DET = "PR_GET_OPIP_BILL_DET";
        public const string UPR_PR_GET_PRO_PAGING = "PR_GET_PRO_PAGING";
        public const string UPR_GETALL_PRO = "PR_GETALL_PRO";
        public const string UPR_GET_PRO_AUTO = "PR_GET_PRO_AUTO";

        public const string UPR_GET_VW_SRV_BILLDET = "PR_GET_VW_SRV_BILLDET";
        public const string UPR_INS_COMPANY_LTYPE = "PR_INS_COMPANY_LTYPE";
        public const string UPR_INS_COMPANY_LETTER_FORMATES = "PR_INS_COMPANY_LETTER_FORMATES";
        public const string UPR_UPDSTATUS_USER = "PR_UPDSTATUS_USER";
        // rani 03.06.2016
        public const string Rani_Bill_Det = "sp_rani27052016";

        # region HEALTHCARDLIST
        public const string UPR_GET_HEALTH_CARD = "PR_GET_HEALTH_CARD";
        public const string UPR_INSUPD_HEALTH_CARD_XML = "PR_INSUPD_HEALTH_CARD_XML";
        public const string Upr_get_HEALTH_CARD_TYPES = "pr_get_HEALTH_CARD_TYPES";
        public const string UPR_GET_HEALTH_CARD_DET = "PR_GET_HEALTH_CARD_DET";
        public const string UPR_GETALL_HEALTH_CARD = "PR_GETALL_HEALTH_CARD";
        public const string UPR_GET_HEALTH_CARD_TYPE = "PR_GET_HEALTH_CARD_TYPE";
        public const string UPR_INSUPD_HEALTH_CARD_TYPE_XML = "PR_INSUPD_HEALTH_CARD_TYPE_XML";
        public const string UPR_GET_HEALTH_CARD_TYPE_DET = "PR_GET_HEALTH_CARD_TYPE_DET";
        public const string UPR_GETALL_HEALTH_CARD_TYPE = "PR_GETALL_HEALTH_CARD_TYPE";
        public const string UPR_GET_HEALTH_CARD_AUTO = "PR_GET_HEALTH_CARD_AUTO";
        # endregion

        #region HC_SCHEME
        public const string UPR_GETALL_HC_SCHEME = "PR_GETALL_HC_SCHEME";
        public const string UPR_GETALL_HC_SCHEME_SLAB = "PR_GETALL_HC_SCHEME_SLAB";
        #endregion

        #region DSCRD_PRF_TAX

        public const string UPR_INSUPD_DSCRD_PRF_TAX = "PR_INSUPD_DSCRD_PRF_TAX";
        public const string UPR_GET_DSCRD_PRF_TAX = "PR_GET_DSCRD_PRF_TAX";
        public const string UPR_GETALL_DSCRD_PRF_TAX = "PR_GETALL_DSCRD_PRF_TAX";
        public const string UPR_GET_UMR_AUTO = "PR_GET_UMR_AUTO";
        #endregion

        #region USER_LIMIT

        public const string UPR_INSUPD_USER_LIMIT = "PR_INSUPD_USER_LIMIT";
        public const string UPR_GET_USER_LIMIT = "PR_GET_USER_LIMIT";
        public const string UPR_GETALL_USER_LIMIT = "PR_GETALL_USER_LIMIT";

        #endregion

        #region MERGE_UMR_NO
        public const string UPR_GET_PATIENT_DET_FOR_MERGE = "PR_GET_PATIENT_DET_FOR_MERGE";
        public const string UPR_GET_PATIENT_DET_BASEDUMR_NO = "PR_GET_PATIENT_DET_BASEDUMR_NO";
        public const string UPR_GET_PATIENT_DTLS_UMR_NO = "PR_GET_PATIENT_DTLS_UMR_NO";
        public const string UPR_UPD_MERGEUMRNOS = "PR_UPD_MERGEUMRNOS";
        public const string UPR_GET_TRANSACTION_DET_ON_UMRNO = "PR_GET_TRANSACTION_DET_ON_UMRNO";
        public const string UPR_INSUPD_MERGE_UMR_NO_DET = "PR_INSUPD_MERGE_UMR_NO_DET";
        #endregion

        #region Print Settings
        public const string UPR_GET_SHIFT_SCROLL = "PR_GET_SHIFT_SCROLL";
        public const string UPR_GET_SHIFT_SCROLL_REP = "PR_GET_SHIFT_SCROLL_REP";
        public const string UPR_GET_DOCUMENTS_REPORTS_LIST = "PR_GET_DOCUMENTS_REPORTS_LIST";

        #endregion

        #region Voucher Payments

        public const string UPR_GET_VOUCHER_PAYMENT_TYPES = "PR_GET_VOUCHER_PAYMENT_TYPES";
        public const string UPR_INS_VOUCHER_PAYMENT = "PR_INS_VOUCHER_PAYMENT";
        public const string UPR_GET_VOUCHER_PAYMENT_LIST = "PR_GET_VOUCHER_PAYMENT_LIST";
        public const string UPR_GET_BILL_SETMNT_DET = "PR_GET_BILL_SETMNT_DET";
        public const string UPR_GET_VOUCHER_IPOP_DETL = "PR_GET_VOUCHER_IPOP_DETL";

        #endregion

        #region Chart Procedures
        public const string UPR_GET_REGISTRATIONS_YEAR_COUNT = "PR_GET_REGISTRATIONS_YEAR_COUNT";
        public const string UPR_GET_REGISTRATIONS_MONTH_COUNT = "PR_GET_REGISTRATIONS_MONTH_COUNT";
        public const string UPR_GET_REGISTRATIONS_DAY_COUNT = "PR_GET_REGISTRATIONS_DAY_COUNT";
        public const string UPR_GET_REGISTRATIONS_YEARS = "PR_GET_REGISTRATIONS_YEARS";

        public const string UPR_GET_CONSULTATIONS_YEAR_COUNT = "PR_GET_CONSULTATIONS_YEAR_COUNT";
        public const string UPR_GET_CONSULTATIONS_MONTH_COUNT = "PR_GET_CONSULTATIONS_MONTH_COUNT";
        public const string UPR_GET_CONSULTATIONS_DAY_COUNT = "PR_GET_CONSULTATIONS_DAY_COUNT";
        public const string UPR_GET_CONSULTATIONS_YEARS = "PR_GET_CONSULTATIONS_YEARS";

        public const string UPR_GET_ADMISSIONS_YEAR_COUNT = "PR_GET_ADMISSIONS_YEAR_COUNT";
        public const string UPR_GET_ADMISSIONS_MONTH_COUNT = "PR_GET_ADMISSIONS_MONTH_COUNT";
        public const string UPR_GET_ADMISSIONS_DAY_COUNT = "PR_GET_ADMISSIONS_DAY_COUNT";
        public const string UPR_GET_ADMISSIONS_YEARS = "PR_GET_ADMISSIONS_YEARS";

        public const string UPR_GET_OPBILLS_YEAR_COUNT = "PR_GET_OPBILLS_YEAR_COUNT";
        public const string UPR_GET_OPBILLS_MONTH_COUNT = "PR_GET_OPBILLS_MONTH_COUNT";
        public const string UPR_GET_OPBILLS_DAY_COUNT = "PR_GET_OPBILLS_DAY_COUNT";
        public const string UPR_GET_OPBILLS_YEARS = "PR_GET_OPBILLS_YEARS";

        public const string UPR_GET_CHARTS_YEAR_COUNT = "PR_GET_CHARTS_YEAR_COUNT";
        #endregion

        #region DoctorAvailbility Procedures
        public const string UPR_GET_DOC_STATUS = "PR_GET_DOC_STATUS";
        public const string UPR_INS_DOC_AVA = "PR_INS_DOC_AVA";
        public const string UPR_GETALL_DOC_AVA = "PR_GETALL_DOC_AVA";
        public const string UPR_GET_DOC_AVA_AUTO = "PR_GET_DOC_AVA_AUTO";
        public const string UPR_GET_DOC_AVA = "PR_GET_DOC_AVA";
        public const string UPR_GET_DOCTOR_AVA_TIME = "PR_GET_DOCTOR_AVA_TIME";

        #endregion

        #region constants

        #region UMR_LOCK
        public const string UPR_GET_UMR_LOCK_LOOKUP = "PR_GET_UMR_LOCK_LOOKUP";
        public const string UPR_GET_UMRLOCK_AUTO = "PR_GET_UMRLOCK_AUTO";
        public const string UPR_GET_UMR_LOCK = "PR_GET_UMR_LOCK";
        public const string UPR_INSUPD_UMR_LOCK = "PR_INSUPD_UMR_LOCK";
        public const string UPR_UPD_REALEASE_UMR_LOCK = "PR_UPD_REALEASE_UMR_LOCK";

        #endregion

        #region Constants StoredProcedures

        public const string Stp_GetAll_TableColumnNames = "hims.Stp_GetAll_TableColumnNames";
        public const string UPR_PR_GET_WARDPLAN = "PR_GET_WARDPLAN";
        public const string Stp_PR_GET_BED_AUTO = "PR_GET_BED_AUTO";

        public const string Stp_GenericPaging = "hims.PR_GenericPaging";
        public const string UPR_PR_GET_GRAPHICALCHART = "PR_GET_GRAPHICALCHART";
        public const string SE_Get_UserDetails = "hims.PR_GET_USERDETAILS";

        public const string SE_CheckUserCredentials = "hims.PR_GET_CHECKUSERCREDENTIALS";
        public const string UPR_GET_IPRECEIPTCNCL_LIST = "PR_GET_IPRECEIPTCNCL_LIST";
        public const string UPR_GETALL_FO_RECPAY_CNCL = "PR_GETALL_FO_RECPAY_CNCL";
        public const string Stp_Get_Services = "hims.UPR_Get_Services";

        public const string Stp_Insert_DepartmentServices = "hims.UPR_Insert_DepartmentServices";

        public const string Stp_Get_Departmentservices = "hims.UPR_Get_Departmentservices";

        public const string Stp_Get_DynamicValue = "hims.PR_Get_DynamicValue";
        public const string UPR_PR_GET_PATIENT_DET_ON_WARD_ID = "PR_GET_PATIENT_DET_ON_WARD_ID";

        public const string UPR_GET_USER_MODULE_DOC_ALL = "hims.PR_GET_USER_MODULE_DOC_ALL";
        public const string Stp_Get_Modules = "hims.PR_GET_MODULES";

        public const string Stp_InsUpd_Address = "hims.PR_InsUpd_Address";

        public const string Stp_Update_RefalInfo = "hims.PR_UPD_REFALINFO";

        public const string Stp_Insert_ReferalInfo = "hims.PR_INS_REFERALINFO";

        public const string Stp_Get_Referals = "hims.PR_GETALL_REFERALS";//7/24/2010

        public const string Stp_GetAll_LookUp_Referals = "hims.PR_GETALL_LOOKUP_REFERALS";

        public const string stp_get_referals = "hims.PR_get_referals";

        public const string Stp_Get_Search_ReferInfo = "hims.PR_Get_Search_ReferInfo";   //2/11/2010(rama)

        public const string Stp_Delete_ReferalInfor = "hims.PR_Del_ReferalInfor";//

        public const string Sp_Get_Users = "hims.PR_Get_Users";

        public const string VerifyUserGetUser = "hims.VerifyUserGetUser";

        public const string Stp_Ins_DoctorDetails = "hims.UPR_Ins_DoctorDetails";

        public const string Sp_Get_Specilization = "hims.PR_Get_Specilization";

        public const string Sp_GetSpecialization_Byuser = "hims.PR_GetSpecialization_Byuser";

        public const string Sp_Hint_Question = "hims.PR_GET_HINTQUESTION";

        public const string Stp_Get_ColumnNames_Search = "hims.PR_GET_COLUMNNAMES_SEARCH";

        public const string Stp_Get_ColumnNames = "hims.PR_Get_ColumnNames";

        public const string Stp_Get_AdvanceSearch_Data = "hims.PR_Get_AdvanceSearch_Data";

        public const string UPR_Get_Country = "hims.PR_GET_COUNTRY";

        public const string UPR_Get_State = "hims.PR_Get_State";

        public const string Stp_Upd_addressDetails = "hims.PR_Upd_addressDetails";

        public const string Stp_Get_UserDetails = "hims.PR_GET_USERDETAILS";

        public const string STP_GET_USERCREDENTIALS = "hims.PR_GET_USERCREDENTIALS";

        public const string Stp_Get_UserDetailsByUserName = "hims.PR_GET_USERDETAILSBYUSERNAME";

        public const string UPR_Get_City = "hims.PR_GET_CITY";

        public const string UPR_UPD_USERPASSWORD = "hims.PR_UPD_USERS";
        public const string UPR_GET_AUTO_REFERALS = "hims.PR_GET_AUTO_REFERALS";
        public const string Stp_Get_InsUpd_TableId = "hims.PR_Get_InsUpd_TableId";
        public const string Stp_Get_LookupData = "hims.PR_Get_LookupData";
        public const string Stp_Get_Autocomplete = "hims.PR_Get_Autocomplete";
        public const string Stp_Get_View_ColumnNames = "hims.PR_Get_View_ColumnNames";
        public const string Stp_Get_InsUpd_RowStatus = "hims.PR_Get_InsUpd_RowStatus";

        // SP's for SIM saleem

        public const string Stp_Get_ModuleNames = "hims.PR_get_Modulenames";
        public const string Stp_Get_Sub_ModuleNames = "hims.PR_Get_Documents";
        public const string Stp_Get_Save_userPermisions = "hims.PR_insupd_AccessPermitions";
        public const string Stp_Get_DetailsForModify = "hims.PR_get_assigndocs";
        public const string UPR_INSUPD_USER_DOC_PERMISSION = "hims.PR_INSUPD_MODULE_DOC";
        public const string UPR_INSUPD_ROLE_DOC_ACCESS = "hims.PR_INSUPD_ROLE_DOC_ACCESS";
        //assign users to group related sp's
        public const string Stp_Insupd_Assign_UserToGroup = "hims.PR_INS_USER_GROUPS";
        //paging for assign users to group or role 
        //public const string Stp_Get_UsersAsRoleGroupbyPageno = "UPR_GET_USERS_BY_ID";
        public const string Stp_Get_UsersbyPageno = "hims.PR_GET_USERS_BY_ID";
        //get the list of users assign to Role or Group
        public const string PR_Get_Users_GroupRoleAssign = "hims.PR_GET_USERS_ASSIGNGROUPROLE";


        public const string UPR_GET_DOCT_DEPT = "PR_GET_DOCT_DEPT";
        public const string UPR_GETALL_USER_DEPARTMENTS = "PR_GETALL_USER_DEPARTMENTS";
        public const string UPR_GET_USER_DEPT_BYID = "PR_GET_USER_DEPT_BYID";
        //public const string Stp_Get_Users_GroupAssign= "";
        //sp for Assign message category for Groups,Role,Dept
        public const string Stp_Ins_Upd_GroupCategory = "hims.Stp_Ins_Upd_GroupCategory ";
        public const string Stp_Ins_Upd_RoleCategory = "hims.Stp_InsuPD_ROLECATEGORY ";
        public const string Stp_Ins_Upd_DeptCategory = "hims.Stp_InsUpd_DEPTCATEGORY ";
        //sp for getting users list based on user group id
        public const string Stp_Get_GroupIDRelatedUsers = "hims.Stp_Get_GroupIDRelatedUsers";
        //sp for sending compose mails

        public const string PR_Get_AllRoles = "hims.PR_Get_AllRoles";
        public const string UPR_GET_ALLGROUPS = "hims.PR_GET_ALLGROUPS";
        public const string UPR_GET_ALLUSERS = "hims.PR_GET_ALLUSERS";
        public const string Pr_Ins_ComposeMessage = "hims.PR_Ins_ComposeMessages";
        public const string Stp_Get_MessageCategories = "Shims.tp_Get_MessageCategories";
        public const string PR_GET_ROLE_GROUP_DEPT_TOUSER = "hims.PR_GET_ROLE_GROUP_DEPT_TOUSER";
        public const string PR_GET_ROLES_BYID = "hims.PR_GET_ROLES_BYID";
        public const string PR_GET_GROUPS_BYID = "hims.PR_GET_GROUPS_BYID";
        public const string PR_GET_ROLES = "hims.PR_GET_ROLES";
        public const string PR_INS_ROLE_MESSAGE = "hims.PR_INS_ROLE_MESSAGE";
        public const string PR_GET_GROUPS = "hims.PR_GET_GROUPS";
        public const string PR_INS_GROUP_MESSAGE = "hims.PR_INS_GROUP_MESSAGE";
        public const string PR_GETALL_CATEGORIES = "hims.PR_GETALL_CATEGORIES";
        public const string PR_INS_ROLE_MESSAGE_NEW = "PR_INS_ROLE_MESSAGE_BY_USERS";
        public const string PR_GET_ALLUSER_CATEGORIES = "hims.PR_GET_ALLUSER_CATEGORIES";
        public const string PR_GET_CATEGORY_TYPE_NAME = "hims.PR_GET_CATEGORY_TYPE_NAME";
        public const string UPR_GET_MAILMSGAUTO = "PR_GET_MAILMSGAUTO";
        //sp for saving new user details.
        public const string Stp_Insupd_userInfo = "hims.UPR_Insupd_userInfo";
        public const string Stp_Get_ExistUsers = "hims.UPR_Get_ExistUsers";
        public const string Stp_Get_Specialisations = "hims.UPR_Get_Specializations";
        public const string UPR_Get_UserAnd_Group = "hims.PR_GET_USERAND_GROUP";

        //public const string 

        #region For Assign Permission to A GROUP OR ROLE OR DEPARTMENT
        public const string Stp_GetRole = "hims.PR_GETROLE";
        public const string Stp_GetGroup = "hims.GETGROUPS";
        public const string Stp_GetDepartment = "hims.GETDEPARTMENT";
        public const string Stp_SaveRolePermission = "hims.STP_ASSIGNPERMISSION_ROLE";
        public const string Stp_SaveGroupPermission = "hims.STP_ASSIGNPERMISSION_GROUP";
        public const string Stp_SaveDeptPermission = "STP_ASSIGNPERMISSION_DEPARTMENT";
        public const string Stp_GetMessageCategory = "hims.UPR_GET_MSGCATEGORIES";
        public const string Stp_INS_MESSAGECAT_GROUP = "hims.INSUPD_MESSAGECAT_GROUP";
        public const string Stp_INS_MESSAGECAT_ROLE = "hims.INSUPD_MESSAGECAT_ROLE";
        public const string Stp_INS_MESSAGECAT_DEPARTMENT = "hims.INSUPD_MESSAGECAT_DEPARTMENT";
        public const string Stp_GET_GROUPCATEGORY = "hims.STP_GETGROUPCATEGORY";
        public const string Stp_GET_CATBYGROUP = "hims.GET_CATBYGROUP";
        public const string Stp_GET_CATBYROLE = "hims.GET_CATBYROLE";
        public const string Stp_GET_CATBYDEPT = "hims.GET_CATBYDEPARTMENT";
        public const string MS_CHECK_CATBYGROUP = "hims.CHECK_CATBYGROUP";
        public const string MS_CHECK_CATBYROLE = "hims.CHECK_CATBYROLE";
        public const string MS_CHECK_CATBYDEPT = "hims.CHECK_CATBYDEPT";
        public const string MS_UPDATE_GROUPCAT = "hims.UPDATE_GROUPCAT";
        public const string MS_UPDATE_ROLECAT = "hims.UPDATE_ROLECAT";
        public const string MS_UPDATE_DEPTCAT = "hims.UPDATE_DEPTCAT";
        public const string UPR_GET_CORP_PACKAGE_CONV_SRV = "PR_GET_CORP_PACKAGE_CONV_SRV";

        #endregion

        #region User Groups
        public const string Stp_Get_Groups = "hims.UPR_Get_Groups";
        #endregion User Groups

        #region DashBoard Procedures...

        public const string Stp_Get_MyProfile = "hims.PR_GET_MYPROFILE";
        public const string Stp_Update_Myprofile = "hims.PR_UPD_MYPROFILE";
        public const string PR_INS_MYPROFILE_ADDRESS = "hims.PR_INS_MYPROFILE_ADDRESS";
        public const string PR_GET_EMPLOYEE_ADDRESS = "hims.PR_GET_EMPLOYEE_ADDRESS";
        public const string UPR_GET_ADMIN_USERS = "PR_GET_ADMIN_USERS";
        public const string UPR_GET_USER_WISE_LOG_DETAILS_GROUPING = "PR_GET_USER_WISE_LOG_DETAILS_GROUPING";
        #endregion DashBoard Procedures...

        #region Constants for Search
        //public const string Stp_Get_SearchCriteria = "SEARCH.Stp_Get_SearchCriteria";
        public const string Stp_Update_AdvanceSearch = "hims.PR_Update_AdvanceSearch";
        public const string Stp_GetTable_ColumnNames = "hims.PR_Get_ColumnNames";
        public const string Stp_Get_AdvanceSearch = "hims.UPR_Get_AdvanceSearch";
        public const string Stp_Get_SearchData = "hims.UPR_Get_SearchData";

        public const string Stp_Get_DefaultSearchColumn = "hims.UPR_Get_DefaultSearchColumn";
        public const string Stp_Get_TableSearchCriteria = "hims.PR_Get_SearchCriteria";
        public const string Stp_Get_BedRoomWardSearchData = "PR_GET_BEDROOMWARD_LOOKUP";
        public const string Stp_Get_PR_GET_WARDROOMBEDCHART = "PR_GET_WARDROOMBEDCHART";
        #endregion Search

        #region Constans for Employee Informaiton
        public const string Stp_Insert_EmpInfo = "hims.PR_INS_EMPINFO";
        public const string Stp_Get_EmpType = "hims.PR_GET_EMPLOYEE_TYPE";
        public const string Stp_Get_Designation = "hims.PR_GET_DESIGNATIONLIST";
        public const string Stp_Get_Department = "hims.PR_GET_DEPARTMENTLIST";
        public const string Stp_Get_EmpInfo = "hims.PR_Get_EmpInfo";
        public const string Stp_Deleteall = "hims.UPR_Deleteall";
        public const string Stp_Get_Search_EmpData = "hims.UPR_Get_Search_EmpData";
        public const string Stp_Update_EmpInfo = "hims.PR_UPD_EMPINFO";


        public const string Stp_Delete_EmpInfor = "hims.UPR_Delete_EmpInfor";
        public const string Stp_Get_EmpInfor_ByID = "hims.PR_GET_EMPLOYEEINFO_BYID";
        public const string UPR_GETALL_EMPLOYEE = "hims.PR_GETALL_EMPLOYEE";
        #endregion Constans for Employee Informaiton

        #region Constatns for CommonMethod



        #endregion Constatns for CommonMethod

        #region ConstantsAutoComplete
        //store procedure name

        //parameter for the stored procedure
        public const string parmTableName = "@tableName";
        public const string parmCount = "@count";
        public const string parmPrefixtxt = "@prefixText";
        public const string parmColumnName = "@columnName";
        //column name for the auto complete
        public const string COLUMN_NAME = "hims.COLUMN_NAME";
        #endregion ConstantsAutoComplete

        #region Message Station
        public const string UPR_Get_MsgCategories = "hims.UPR_GET_MSGCATEGORIES";

        public const string MS_UPR_GET_USERMSGCAT = "hims.UPR_GET_USERMSGCAT";

        public const string MS_UPR_GET_CATEGORYCOUNT = "hims.UPR_GET_CATEGORYCOUNT";
        #endregion

        #endregion

        public const string Stp_Get_DataFromTable = "hims.PR_Get_DataFromTable";
        public const string Stp_Get_TableColumnNames = "hims.PR_Get_TableColumnNames";
        public const string Stp_Get_IdFromTable = "hims.PR_Get_IdFromTable";
        #endregion

        #region FO_OPD_BILL

        public const string UPR_GET_OPD_BILL_REQ = "PR_GET_OPD_BILL_REQ";
        public const string UPR_INSUPD_OPD_BILL = "PR_INSUPD_OPD_BILL";
        public const string UPR_GET_OPD_BILL_DET = "PR_GET_OPD_BILL_DET";
        public const string UPR_CNCL_OPD_BILL = "PR_CNCL_OPD_BILL";
        public const string UPR_GETALL_OPD_BILL = "PR_GETALL_OPD_BILL";
        public const string UPR_GETALL_OPD_REQ = "PR_GETALL_OPD_REQ";
        public const string UPR_GETALL_OPD_REQ_BY_ID = "PR_GETALL_OPD_BILL_REQ_BY_ID";
        public const string UPR_INS_OPD_BILL_REQ = "PR_INS_OPD_BILL_REQ";

        #endregion

        #region FO_BILL
        public const string UPR_GET_FO_BILL_PATID = "PR_GET_FO_BILL_PATID";
        public const string UPR_UPD_BUS_PRTNR_SRV_PRICE = "PR_UPD_BUS_PRTNR_SRV_PRICE";
        public const string UPR_DEL_BUS_PRTNR_SRV_PRICE = "PR_DEL_BUS_PRTNR_SRV_PRICE";
        #endregion

        #region Business Partner Price Setup
        public const string UPR_GET_BUS_PRTNR_SRV_PRICE_DTLS = "PR_GET_BUS_PRTNR_SRV_PRICE_DTLS";
        public const string UPR_GET_BUS_PRTNR_SRV_PRICE_EQUCD = "PR_GET_BUS_PRTNR_SRV_PRICE_EQUCD";
        public const string UPR_GET_BUSINESS_PARTNER = "PR_GET_BUSINESS_PARTNER";
        public const string UPR_GET_SERVICE_AUTO_COMP = "PR_GET_SERVICE_AUTO_COMP";
        public const string UPR_GET_SRVGROUP_PRICE = "PR_GET_SRVGROUP_PRICE";
        public const string UPR_INS_BUS_PRTNR_SRV_PRICE = "PR_INS_BUSP_RTNR_SRV_PRICE";
        public const string UPR_INSUPD_BUS_PRTNR_SRV_PRICE_XML = "PR_INSUPD_BUS_PRTNR_SRV_PRICE_XML";
        public const string UPR_UPD_FO_BILL_SRV_SENT = "PR_UPD_FO_BILL_SRV_SENT";
        public const string UPR_GET_FO_BILL_SRV_NO = "PR_GET_FO_BILL_SRV_NO";
        public const string UPR_GET_FO_BILL_SRV_DATE = "PR_GET_FO_BILL_SRV_DATE";

        public const string UPR_GET_GENERIC_AUTOCOMP = "hims.PR_GET_GENERIC_AUTOCOMP";
        public const string UPR_INS_USER_DOC_AUDIT = "hims.PR_INS_USER_DOC_AUDIT";
        #endregion

        #region UserLogin Info

        public const string UPR_INS_ASSAY_ACK = "PR_INS_ASSAY_ACK";
        public const string UPR_GET_USERS_AUTO = "PR_GET_USERS_AUTO";
        public const string UPR_USERSESSION = "PR_INS_USERSESSION";
        //public const string UPR_GET_VALIDATE_USER_LOGIN = "hims.PR_GET_VALIDATE_USER_LOGIN";
        public const string UPR_GET_VALIDATE_USER_LOGIN = "se.PR_GET_VALIDATE_USER_LOGIN_NEW";
        public const string UPR_GET_AGE_UOMS = "PR_GET_AGE_UOMS";
        public const string UPR_GET_REQUISITION_AUTHORITY = "PR_GET_REQUISITION_AUTHORITY";
        public const string UPR_GET_REQUISITION_STATUS = "PR_GET_REQUISITION_STATUS";
        public const string UPR_DEL_ASSAY_WORKFLOW_WORK = "PR_DEL_ASSAY_WORKFLOW_WORK";
        public const string UPR_GET_ASSAY_SAMPLE_CANCEL = "PR_GET_ASSAY_SAMPLE_CANCEL";
        public const string UPR_GETALL_ASSAY_RESULT_SRV_STAT = "PR_GETALL_ASSAY_RESULT_SRV_STAT";
        public const string UPR_INSUPD_ASSAY_RESULT_XML = "PR_INSUPD_ASSAY_RESULT_XML";
        public const string UPR_GET_ASSAYFORMAT_COMP_RESULT_IP = "PR_GET_ASSAYFORMAT_COMP_RESULT_IP";
        public const string UPR_GET_ASSAYFORMAT_COMP_RESULT = "PR_GET_ASSAYFORMAT_COMP_RESULT";
        public const string UPR_GET_TEST_APPROVAL_STATUS = "PR_GET_TEST_APPROVAL_STATUS";
        public const string UPR_GET_REPROCESSING_BILLS = "PR_GET_REPROCESSING_BILLS";
        public const string UPR_GET_REPROCESSING_SERVICES = "PR_GET_REPROCESSING_SERVICES";
        #endregion

        #region
        public const string UPR_GET_IDFROMTABLE = "hims.PR_Get_IdFromTable";
        public const string UPR_INSUPD_SE_ROLE = "hims.PR_INSUPD_SE_ROLE";
        public const string UPR_INSUPD_MODULE = "hims.PR_INSUPD_MODULE";
        public const string UPR_GET_ADT_DISCNT = "hims.PR_GET_ADT_DISCNT";
        #endregion

        #region ADT_DOC_TRNSFR
        public const string UPR_INSUPD_ADT_DOC_TRNSFR = "PR_INSUPD_ADT_DOC_TRNSFR";
        #endregion

        #region EMPLOYEE

        public const string UPR_GETALL_EMPLOYEES = "PR_GETALL_USER_DETAILS_VW";
        public const string UPR_GET_EMP_DETAILS = "PR_GET_EMP_INFOBYID";
        public const string UPR_GET_ALL_EMPINFO = "PR_GETALL_EMPLOYEE";
        public const string UPR_GET_USERDETAILSBYID = "SE.PR_GET_USERDETAILSBYID";
        public const string UPR_GET_EMPINFOSEARCH = "PR_GET_EMPINFOSEARCH";
        public const string UPR_DEL_EMPLOYEEINFO = "PR_DEL_EMPLOYEEINFO";
        public const string UPR_GET_EMPLOYEE_AUTO = "PR_GET_EMPLOYEE_AUTO";
        public const string UPR_GETALL_ASSAY_RESULT_AUTO_COMP = "PR_GETALL_ASSAY_RESULT_AUTO_COMP";
        public const string UPR_GET_VW_ASSAY_MODIFY_RESULT_DISPATCH_AUTO = "PR_GET_VW_ASSAY_MODIFY_RESULT_DISPATCH_AUTO";
        public const string UPR_GET_VW_ASSAY_DUAL_RESULT_SRV_AUTO_COMP = "PR_GET_VW_ASSAY_DUAL_RESULT_SRV_AUTO_COMP";
        public const string UPR_GET_VW_ASSAY_MODIFY_RESULT_SRV_AUTO_COMP = "PR_GET_VW_ASSAY_MODIFY_RESULT_SRV_AUTO_COMP";
        public const string UPR_INSUPD_ASSAY_RESULT_SRV_STAT_XML = "PR_INSUPD_ASSAY_RESULT_SRV_STAT_XML";
        #endregion

        #region LookUpSearch

        public const string UPR_GET_CSC_DETAILS = "PR_GET_CSC_DETAILS";
        public const string UPR_GET_BANK_DETAILS = "PR_GET_BANK_DETAILS";
        public const string UPR_GET_LOOKUP_CONFIG = "PR_GET_LOOKUP_CONFIG";
        public const string UPR_GETALL_AUTO_RECEIPTS = "PR_GETALL_BILLS";
        public const string UPR_GETALL_PENDING_BILLS = "PR_GETALL_DUE_BILLS";
        public const string UPR_GETALL_DUE_BILLS = "PR_GETALL_FO_BILL_DUE_BILLS";
        public const string UPR_GETALL_AUTO_AUTH = "PR_GET_LOOKUP_AUTH";
        public const string UPR_GET_LOOKUP_AUTH_BY_TRAN = "PR_GET_LOOKUP_AUTH_BY_TRAN";
        public const string UPR_GET_ROLE_PAGE = "PR_GET_ROLE_PAGE";
        public const string UPR_GETALL_DD_INVS_ORDER = "PR_GETALL_DD_INVS_ORDER";

        #endregion

        #region AutoComplte

        public const string UPR_GET_ADT_PRE_AUTH_AUTO = "PR_GET_ADT_PRE_AUTH_AUTO";
        public const string UPR_ADDR_TYPE_AUTO_COMP = "PR_GET_ADDR_TYPE_AUTO_COMP";
        public const string UPR_CITY_AUTO_COMP = "PR_GET_CITY_AUTO_COMP";
        public const string UPR_STATE_AUTO_COMP = "PR_GET_STATE_AUTO_COMP";
        public const string UPR_COUNTRY_AUTO_COMP = "PR_GET_COUNTRY_AUTO_COMP";
        public const string UPR_RELATIONSHIP_AUTO_COMP = "PR_GET_RELATIONSHIP_AUTOCOMP";
        public const string UPR_OCCUPATION_AUTO_COMP = "PR_GET_OCCUPATION_AUTOCOMP";
        public const string UPR_REFERRAL_AUTO_COMP = "PR_REFERAL_AUTO_COMP";
        public const string UPR_GET_AUTO_COMP = "PR_GET_AUTO_COMP";
        public const string UPR_CONSULTANT_AUTO_COMP = "PR_GET_DOCTOR_AUTO_COMP";
        public const string UPR_EMPLOYEE_AUTO_COMP = "PR_GET_EMPLOYEE_AUTO_COMP";
        public const string UPR_ALLERGY_AUTO_COMP = "PR_GET_ALLERGY_AUTO_COMP";
        public const string UPR_EDUCATION_AUTO_COMP = "PR_GET_EDUCATION_AUTO_COMP";
        public const string UPR_NATIONALITY_AUTO_COMP = "PR_GET_NATIONALITY_AUTOCOMP";
        public const string UPR_ISSUEDAT_AUTO_COMP = "PR_GET_AREA_AUTO_COMP";//PR_CITY_AUTO_COMP
        public const string UPR_ISSUEDBY_AUTO_COMP = "PR_GET_ISSUEDBY_AUTOCOMP";
        public const string UPR_GRADE_AUTO_COMP = "PR_GET_GRADEAUTOCOMPLETED";
        public const string UPR_AREA_AUTO_COMP = "PR_GET_AREA_AUTO_COMP";
        public const string UPR_EMPLOYER_AUTO_COMP = "PR_GET_EMPLOYER_AUTO_COMP";
        public const string UPR_EMPLOYER_AUTO_COMP_REG = "PR_GET_EMPLOYER_AUTO_COMP_REG";
        public const string UPR_EMPLOYER_AUTO_COMP_CBP = "PR_GET_EMPLOYER_AUTO_COMP_CBP";
        public const string UPR_CONTACTPERSON_AUTO_COMP = "PR_CONTACTPERSON_AUTO_COMP";
        public const string UPR_LOCATION_AUTO_COMP = "PR_GET_LOCATION_AUTOCOMP";
        public const string UPR_BANK_AUTO_COMP = "PR_GET_BANK_AUTO_COMP";
        public const string UPR_HOSPITAL_AUTO_COMP = "PR_GET_HOSPITAL_AUTOCOMP";
        public const string UPR_STAFF_AUTO_COMP = "PR_EMPLOYEE_AUTO_COMP";
        public const string UPR_GET_FACILITY_AUTO_COMP = "PR_GET_FACILITY_AUTO_COMP";
        public const string UPR_GET_VW_ASSAY_RESULT_SRV_AUTO_COMP = "PR_GET_VW_ASSAY_RESULT_SRV_AUTO_COMP";
        public const string UPR_GET_VW_ASSAY_RESULT_SRV_AUTO_COMPLETE_DISPATCH = "PR_GET_VW_ASSAY_RESULT_SRV_AUTO_COMPLETE_DISPATCH";
        public const string UPR_GET_VW_ASSAY_RESULT_SRV_AUTO_COMPLETE = "PR_GET_VW_ASSAY_RESULT_SRV_AUTO_COMPLETE";
        public const string UPR_GETALL_SAMPLE_REPROCESS_AUTO_COMP = "PR_GETALL_SAMPLE_REPROCESS_AUTO_COMP";
        public const string UPR_GET_RESULT_ENTRY_PENDING_AUTO = "PR_GET_RESULT_ENTRY_PENDING_AUTO";
        public const string UPR_GET_BILL_DUE = "PR_GET_BILL_DUE";
        public const string UPR_GET_VW_RESULT_DUALREPORTS = "PR_GET_VW_RESULT_DUALREPORTS";
        public const string UPR_GET_ASSAY_SAMPLE_ACK = "PR_GET_ASSAY_SAMPLE_ACK";
        public const string UPR_GET_AUTO_REFERALS_SRC_ID = "PR_GET_AUTO_REFERALS_SRC_ID";
        public const string UPR_INSUPD_BILL_SETMNT_XML = "PR_INSUPD_BILL_SETMNT_XML";
        #endregion

        #region ACCREDITATION
        #endregion

        #region Service Master
        public const string UPR_GET_APT_ENTITYES_DATA = "PR_GET_APT_ENTITYES_DATA";
        public const string UPR_GET_APT_ENTITYES = "PR_GET_APT_ENTITYES";
        public const string UAPT_PR_GET_MSG_MESSAGE = "APT_PR_GET_MSG_MESSAGE";
        public const string UAPT_PR_GET_GRP_FNPL = "APT_PR_GET_GRP_FNPL";
        public const string UPR_GET_GRP_ORGANIZATION = "PR_GET_GRP_ORGANIZATION";
        public const string UPR_GET_GRP_ORG_LOCATION = "PR_GET_GRP_ORG_LOCATION";
        public const string UPR_UPD_USER_GROUP = "PR_UPD_USER_GROUP";
        public const string UPR_GET_GROUPMASTER = "PR_GET_GROUPMASTER";
        public const string UPR_GET_GROUPS_MASTER_AUTO = "PR_GET_GROUPS_MASTER_AUTO";
        public const string UPR_GETALL_GROUP_VIEW = "PR_GETALL_GROUP_VIEW";
        public const string UPR_GRP_DEL = "PR_GRP_DEL";
        public const string UPR_INS_USER_GROUP = "PR_INS_USER_GROUP";
        public const string STP_GETSERVICES = "SP_GETSERVICES";
        public const string UPR_GET_SERVICEDETAILS = "PR_GET_SERVICEDETAILS ";
        public const string UPR_GET_TABLEDATA = "PR_GET_TABLEDATA";
        public const string UPR_GET_SERVICEPRICEDETAILS = "PR_GET_SERVICEPRICEDETAILS";
        public const string UPR_INS_SERVICE_DIMENSIONS = "PR_INS_SERVICE_DIMENSIONS";
        public const string UPR_INSUPD_TARIFF_SERVICE = "PR_INSUPD_TARIFF_SERVICE";
        public const string UPR_DEL_TARIFF_SERVICE = "PR_DEL_TARIFF_SERVICE";
        public const string UPR_GET_TARIFF_SERVICE_DETAILS = "PR_GETALL_TARIFF_SERVICE_DETAILS";
        public const string PR_GET_TARIFFSERVICE_DETAILS = "PR_GETALL_TARIFFSERVICE_DETAILS_NEW";
        public const string UPR_GET_SERVICE_GROUP_SERVOCE_CD = "PR_GET_SERVICE_GROUP_SERVOCE_CD";
        public const string UPR_GET_WARDGROUP_BY_TARIFF = "PR_GET_WARDGROUP_BY_TARIFF";
        public const string UPR_GET_SERVICE_ENQUIRY = "PR_GET_SERVICE_ENQUIRY";


        #region SERVICE PRICE LEVELS
        public const string UPR_GET_SERVICE_PRICE_BY_TARIFF = "PR_GET_COMPANY_TARIFF_PRICE";
        public const string UPR_GET_SERVICE_PRICE_LEVELS = "PR_GET_SERVICE_PRICE_LEVELS";
        public const string UPR_INS_PRICE_DIMENSIONS = "PR_INS_PRICE_DIMENSIONS";
        public const string UPR_GET_DIMENSSON_BY_LEVELID = "PR_GET_DIMENSSON_BY_LEVELID";
        public const string DEL_SERVICE_LEVELS = "PR_DEL_SERVICE_PRICE_TIRE";
        public const string PR_GET_SERVICEDIMCOLUMNBASED = "PR_GET_SERVICEDIMCOLUMNBASED";
        public const string UPR_GET_SERVICE_PRICE_DIMENSION = "PR_GET_SERVICE_PRICE_DIMENSION";
        public const string UPR_GET_WARDAMOUNTS = "PR_GET_WARDAMOUNTS";
        #endregion
        //public const string PR_GET_PRICE_DIMESION_SEARCH = "PR_GET_PRICE_DIMESION_SEARCH";
        #region SERVICE MAPPING

        public const string UPR_INS_SERVICE_MAPPING = "PR_INS_SERVICE_MAPPING";
        public const string UPR_GET_SERVICE_MAPPINGS = "PR_GET_SERVICE_MAPPINGS";
        public const string PR_GET_SERVICE_PRICE_DESC = "PR_GET_SERVICE_PRICE_DESC";
        public const string PR_UPD_SERV_PRICE_TIRE = "PR_UPD_SERV_PRICE_TIRE";
        public const string PR_DEL_SERVICE_PRICE_TIRE = "PR_DEL_SERVICE_PRICE_TIRE";
        public const string PR_SERVICELAVELSEARCHBY_DESC = "PR_GET_SERVICELAVELSEARCHBY";
        public const string PR_GET_SERVICEMAPCOLUMNBASED = "PR_GET_SERVICEMAPCOLUMNBASED";
        public const string UPR_GET_SERVICELEVELCOLUMNBASED = "PR_GET_SERVICELEVELCOLUMNBASED";
        public const string UPR_GET_SERMAP_COLSERCHTXT = "";
        public const string UPR_GETALL_SERVICESBYID = "PR_GETALL_SERVICESBYID";
        public const string UPR_GETALL_SERVICEPAGING = "PR_GETALL_VWSERVICEMAPPINGS";
        public const string UPR_GETALL_SERVICETIER_PAGGING = "PR_GETALL_SERVICETIERPAGE";
        public const string UPR_DEL_SERVICEPRICE = "PR_DEL_SERVICEPRICE";
        public const string UPR_UPD_CANCEL_AMOUNT = "PR_UPD_CANCEL_AMOUNT";
        public const string UPR_INSUPD_SERVICE_PRICE_XML = "PR_INSUPD_SERVICE_PRICE_XML";
        #endregion

        #endregion Service Master

        #region Anesthesia Master

        public const string UPR_INSUPD_ANESTHESIA = "PR_INSUPD_ANESTHESIA";
        public const string GETALL_ANESTHESIAS = "PR_GETALL_ANESTHESIAS";
        public const string GET_ANESTHESIA_ONCD = "PR_GET_ANESTHESIA";
        public const string DEL_ANESTHESIA = "PR_DEL_ANESTHESIA";
        public const string Get_ANESTHESIA_SBASED = "PR_GET_ANESTHESIACOLUMNBASED";

        #endregion

        #region BillingHead
        public const string UPR_GETALL_OPD_BILL_REQ = "PR_GETALL_OPD_BILL_REQ";
        public const string INSUPD_BILLINGHEAD = "PR_INSUPD_BILLINGHEAD";
        public const string DEL_BILLINGHEAD = "PR_DEL_BILLINGHEAD";
        public const string GETALL_BILLINGHEAD = "PR_GETALL_BILLINGHEAD";
        public const string GET_BILLINGHEAD_ONCD = "PR_GET_BILLINGHEAD_ONCD";
        public const string GET_ALL_SERVICES = "PR_GETALL_SERVICES";
        public const string GET_ALL_UNASSIGN_SERVICES = "PR_GETALL_UNASSIGN_SERVICES";
        public const string STP_GET_BILLINGHEADCOLUMNBASED = "PR_GET_BILLINGHEADCOLUMNBASED";
        public const string STP_GET_BILLINHEADDYNAMIC = "PR_GET_BILLINHEADDYNAMIC";
        public const string STP_GET_SERVICES_ASSIGNED = "PR_GET_SERVICES_ASSIGNED";
        public const string UPR_GET_ASSAY_RESULT_VALUE = "PR_GET_ASSAY_RESULT_VALUE";
        public const string UPR_GET_SERVICE_DETN = "PR_GET_SERVICE_DETN";
        public const string UPR_GET_ASSAY_RESULT_SRV_AUTO = "PR_GET_ASSAY_RESULT_SRV_AUTO";
        public const string UPR_GET_ASSAY_RESULT_SRV_COMPONENT = "PR_GET_ASSAY_RESULT_SRV_COMPONENT";
        public const string UPR_GETALL_DEPT_DOC_PAGE_AUTO = "PR_GETALL_DEPT_DOC_PAGE_AUTO";
        public const string UPR_GET_FO_OPD_REQ_AUTO_COMP = "PR_GET_FO_OPD_REQ_AUTO_COMP";

        #endregion

        #region ServicePrice
        public const string UPR_GET_DOCTOR_ENQUIRY_FEE = "PR_GET_DOCTOR_ENQUIRY_FEE";
        public const string UPR_GET_SERVICE_PRICE_TARIFFID = "PR_GET_SERVICE_PRICE_TARIFFID";
        public const string UPR_GET_SERVICEWISEDIMENSIONS = "PR_GET_SERVICEDIMENSIONS";
        public const string UPR_GET_PRICE_SERVICE_DIMENSION_VW = "PR_GET_PRICE_SERVICE_DIMENSION_VW";
        public const string STP_INS_SERVICE_PRICE = "PR_INS_SERVICE_PRICE_DUMMY12345";
        public const string UPR_GET_SERVICEDIMENSION = "PR_GET_SERVICEDIMENSION";
        public const string PR_SERVICE_DIM_AUTO = "PR_GET_SERVICE_PRICE_DIM_AUTOCOMPLTE";
        public const string PR_GET_SERVICE_PRICE = "PR_GET_SERVICE_PRICE_BY_COND";
        public const string UPR_GETALL_TARIFF_PERC_DIM = "PR_GETALL_TARIFF_PER_DIM";
        public const string UPR_GET_TARIFF_ID_ORG_SERVICE = "PR_GET_TARIFF_ID_ORG_SERVICE";
        public const string UPR_GET_DOCTOR_SERVICE_PRICE = "PR_GET_DOCTOR_SERVICE_PRICE";
        public const string UPR_GET_SERVICE_PRICE = "PR_GET_SERVICE_PRICE_NEW";
        public const string UPR_GETALL_TARIFF = "PR_GETALL_TARIFF";

        #endregion

        #region assayworkflow
        public const string UPR_GET_ASSAY_WORKFLOW = "PR_GET_ASSAY_WORKFLOW";
        public const string UPR_GET_ASSAY_STATE = "PR_GET_ASSAY_STATE";
        public const string UPR_GET_TABKEY1 = "PR_GET_TABKEY";
        public const string UPR_INSERT_ASSAY_WORKFLOW_STATE = "PR_INSERT_ASSAY_WORKFLOW_STATE";
        public const string UPR_GET_ASSAY_WORKFLOW_PAGE = "PR_GET_ASSAY_WORKFLOW_PAGE";
        public const string UPR_GET_ASSAY_WF_NAME = "PR_GET_ASSAY_WF_NAME";
        public const string UPR_GET_ASSAY_WORKFLOWN = "PR_GET_ASSAY_WORKFLOWN";
        public const string UPR_DEL_ASSAY_WORKFLOW = "PR_DEL_ASSAY_WORKFLOW";
        public const string UPR_GET_ASSAY_WORKFLOW_FPNL = "PR_GET_ASSAY_WORKFLOW_FPNL";
        public const string UPR_GET_ASSAY_WORKFLOW_QU = "PR_GET_ASSAY_WORKFLOW_QU";
        public const string UPR_INSUPD_ASSAY_WORKFLOW_STATE = "PR_INSUPD_ASSAY_WORKFLOW_STATE";
        #endregion

        #region SurgeryCategory

        public const string INSUPD_SURGERYCATEGORY = "PR_INSUPD_SURGERYCATEGORIES";
        public const string DEL_SURGERYCATEGORY = "PR_DEL_SURGERYCATEGORIES ";

        public const string GETALL_SURGERYCATEGORIES = "PR_GETALL_SURGERYCATEGORIES";
        public const string GET_SURGERYCATEGORY_ONCD = "PR_GET_SURGERYCATEGORIES";
        public const string UPR_GET_SURGERYCATEGORY_AUTOCOMPLTE = "PR_GET_SURGERYCATEGORY_AUTOCOMPLTE";
        public const string UPR_GET_SURGERYCATEGORY_SEARCH = "PR_GET_SURGERYCATEGORY_SEARCH";
        public const string PR_CHECK_SURGERYCODE = "PR_CHECK_SURGERYCODE";
        public const string UPR_DEL_SURGERYCATEGORIES_ALL = "PR_DEL_SURGERYCATEGORIES_ALL";
        public const string UPR_GET_BILL_REFERAL_DETAILSDAYWISE_REPORT_UMRNO = "PR_GET_BILL_REFERAL_DETAILSDAYWISE_REPORT_UMRNO";
        public const string UPR_GET_BILL_REFERAL_DETAILS_DAY_WISE_REPORT_PAGING = "PR_GET_BILL_REFERAL_DETAILS_DAY_WISE_REPORT_PAGING";
        public const string UPR_GET_AUTO_COMP_DEPT_DOCTOR = "PR_GET_AUTO_COMP_DEPT_DOCTOR";
        public const string UPR_GET_AUTO_COMP_DEPT = "PR_GET_AUTO_COMP_DEPT";
        public const string UPR_GETALL_DEPARTMENTS_DOCTORS = "PR_GETALL_DEPARTMENTS_DOCTORS";
        #endregion

        #region PATIENTS

        #region Patient Registration
        public const string UPR_GET_IP_PAT_DET_UMR_ADMN = "PR_GET_IP_PAT_DET_UMR_ADMN";
        public const string UPR_GET_ADT_PRE_ADMN_SERACH = "PR_GET_ADT_PRE_ADMN_SERACH";
        public const string UPR_GET_ADT_ADMN_AUTO = "PR_GET_ADT_ADMN_AUTO";
        public const string UPR_GET_ADMISSION_INFO = "PR_GET_ADMISSION_INFO";
        public const string UPR_GET_BED_STATUS = "PR_GET_BED_STATUS";
        public const string UPR_GET_BEDSTATUS = "PR_GET_BEDSTATUS";
        public const string UPR_GET_ROOM_INFO = "PR_GET_ROOM_INFO";
        public const string UPR_GET_REGISTRATION_FEE = "PR_GET_REGISTRATION_FEE";
        public const string UPR_GET_INSURENCE_AUTO = "PR_GET_FO_REG_INSURANCE_AUTO";
        //public const string UPR_INS_PATIENT_REGISTRATION = "PR_INSUPD_PATIENT_REGISTRATION ";
        public const string UPR_INS_PATIENT_REGISTRATION = "PR_INSUPD_PATIENT_REG_NEW";//"PR_INSUPD_PATIENT_REG";10/12/2010
        //public const string UPR_INS_PATIENT_REGISTRATION = "PR_INSUPD_PATIENT_REGISTRATION_TEST ";
        public const string UPR_INS_ADDRESS_ONLY = "PR_INS_ADDRESS_ONLY";
        public const string UPR_INS_FO_REGISTRATION_DET3_ONLY = "PR_INS_FO_REG_INSURANCE";//"PR_INS_FO_REGISTRATION_DET3_ONLY"; 10/12/2010
        public const string UPR_INS_FO_REGISTRATION_DET = "PR_INS_FO_REG_ALLERGY";//"PR_INS_FO_REGISTRATION_DET";10/12/2010
        public const string UPR_INS_FO_REGISTRATION_DET2_ONLY = "PR_INS_FO_REG_ATTENDENT";//"PR_INS_FO_REGISTRATION_DET2_ONLY";10/12/2010
        public const string UPR_INS_FO_REGISTRATION_DET4_ONLY = "PR_INS_FO_REG_CORPORATE";//"PR_INS_FO_REGISTRATION_DET4_ONLY";10/12/2010
        public const string UPR_INS_PATIENT_DET_ONLY = "PR_INS_PATIENT_DET_ONLY";
        public const string UPR_INS_PATIENT_DET2 = "PR_INS_PATIENT_DET2";
        public const string UPR_INS_PATIENT_ADDITIONAL_INFO = "PR_INS_PATIENT_ADDITIONAL_INFO";
        public const string UPR_GET_ALLREFERRAL = "PR_GET_ALL_REFERRAL";
        public const string UPR_GETALLREFERRAL = "PR_GET_ALLREFERRAL";
        public const string UPR_GET_REFERALS_BYSOURCE = "PR_GET_REFERALS_BYSOURCE";
        public const string UPR_GET_PATIENT_INFO = "PR_GET_PATIENTDETAILS_NEW";//"PR_GET_PATIENTDETAILS";
        public const string UPR_GET_PATIENT_UREMR_NO = "PR_GET_TABKEY";//"PR_GET_UMRNO";
        public const string UPR_GET_PATIENTTYPE = "PR_GET_PATIENTTYPE";
        public const string UPR_GET_PATIENTCATEGORY = "PR_GET_PATIENTCATEGORY";
        public const string UPR_GET_RESPONSBILITYPERSON = "PR_GET_RESPONSBILITYPERSON";
        public const string UP_GET_MARITAL_STATUS = "PR_GET_MARITAL_STATUS";
        public const string UPR_GET_GENDER = "PR_GET_GENDER";
        public const string UPR_GET_DISPLAYNAMES = "PR_GET_DISPLAYNAMES";
        public const string UPR_GET_TITLE = "PR_GET_TITLE";
        public const string UPR_GET_ADMISSIONMODES = "PR_GET_ADMISSIONMODES";
        public const string UPR_GET_PATIENTADDRESS = "PR_GET_PATIENTADDRESS";
        public const string UPR_GET_RECEIPT_NUMBER = "PR_GET_BILLNO";
        public const string UPR_GET_CONSULTATION_NO = "PR_GET_CONSULTATION_NO";
        public const string UPR_GETALL_ADDERSSTYPESS = "PR_GETALL_ADDERSSTYPESS";
        public const string UPR_FO_REGISTRATION_DET = "PR_FO_REGISTRATION_DET";
        public const string UPR_GET_ADMISSON_SOURCE_DET = "PR_GET_ADMISSON_SOURCE_DET";
        public const string UPR_GET_ALLERGY_TYPE = "PR_GET_ALLERGY_TYPE";
        public const string UPR_GET_ALLERGY_SEVERITY = "PR_GET_ALLERGY_SEVERITY";
        public const string UPR_GET_ALLERGY_CLINICAL_STATUS = "PR_GET_ALLERGY_CLINICAL_STATUS";
        public const string UPR_GET_FO_REGISTRATION_DET = "PR_GET_FO_REGISTRATION_DET";
        public const string UPR_GETALL_FO_REGISTRATION_DET = "PR_GETALL_FO_REG_ALLERGY";//"PR_GETALL_FO_REGISTRATION_DET";//for getting all allergies
        public const string UPR_GET_PATIENT_ALLERGY = "PR_GET_PATIENT_ALLERGY";//for getting one allergy

        public const string UPR_GET_PATIENT_REGISTRATION = "PR_GET_PATIENT_REGISTRATION_NEW";//"PR_GET_PATIENT_REGISTRATION";//10/12/2010
        //public const string UPR_GET_PATIENT_REGISTRATION = "PR_GET_PATIENTFULLDETAILS";
        public const string UPR_GET_PATIENT_VISA_DETAILS = "PR_GET_VISA_DETAILS";
        public const string UPR_GET_PATIENT_WORK_PERMIT_DETAILS = "PR_GET_WORK_PERMIT_DETAILS";
        public const string UPR_GET_PATIENT_ALLERGIES = "PR_GET_ALLERGIES";
        public const string UPR_GET_PATIENT_ALLERGY_SEARCH = "PR_GETALL_REGISTRATIONPREFIX_NEW";//"PR_GETALL_REGISTRATIONPREFIX";//11/12/2010
        public const string UPR_DELETE_PATIENT_ALLERGIES = "PR_DEL_PATIENT_ALLERGIES";
        public const string UPR_DELETE_PATIENT_EMPLOYEES = "PR_DEL_PATIENT_EMPLOYEES";
        //public const string UPR_GET_PATIENT_INSURANCE_DETAILS = "PR_GET_INSURANCE_DETAILS";
        public const string UPR_GET_INSURANCE_DETAILS = "PR_GETALL_INSURANCE_DETAILS_NEW";//"PR_GETALL_INSURANCE_DETAILS";//10/12/2010
        public const string UPR_GET_PATIENT_INSURANCE_DETAILS = "PR_GET_PATIENT_INSURANCE_DETAILS_NEW";//"PR_GET_PATIENT_INSURANCE_DETAILS";10/12/2010
        public const string UPR_GET_PATIENT_INSURANCE_SEARCH = "PR_GET_PATIENT_INSURANCE_SEARCH";
        public const string UPR_DELETE_PATIENT_INSURANCES = "PR_DEL_PATIENT_INSURANCES";
        public const string UPR_GET_PATIENT_ADDRESS_DETAILS = "PR_GET_PATIENT_ADDRESS_DETAILS";
        public const string UPR_GET_REGISTRATION_DET4 = "PR_GET_REGISTRATION_DET4";
        public const string UPR_GETALL_REGISTRATION_DET4 = "PR_GETALL_REGISTRATION_DET4";

        public const string UPR_GET_INSURECE_TYPE = "PR_GET_INSURECE_TYPE";
        public const string UPR_GET_PATIENT_COVERAGE = "PR_GET_PATIENT_COVERAGE";
        public const string UPR_GET_PKGCONSULTATIONS_PATIENTINFO = "PR_GET_PKG_CONS";
        public const string UPR_GET_PATIENTINFO = "PR_GET_PATIENTINFO";
        public const string UPR_GET_IP_PATIENTINFO = "PR_GETALL_IP_PATIENTS";
        //public const string UPR_GET_PATIENTINFO = "PR_GET_PATIENTINFO_DUPLICATE";
        //public const string UPR_GET_PATIENTADDRESSDETAILS = "PR_GET_PATIENTADDRESSDETAILS";
        public const string UPR_GET_PATIENTADDRESSDETAILS = "PR_GET_PATIENTADDRESSDETAILS_CONCAD";
        //public const string UPR_GET_PATIENT_SEARCH = "PR_GET_PATIENT_SEARCH";
        public const string UPR_GET_PATIENT_SEARCH = "PR_GET_PATIENT_SEARCH_INFO";
        public const string UPR_GET_PATIENT_EMPINFO_DETAILS = "PR_GET_PATIENT_EMPINFO_DETAILS_NEW";//"PR_GET_PATIENT_EMPINFO_DETAILS";//10/12/2010
        public const string UPR_INS_PATIENT_REGISTRATION_TEST = "PR_INS_PATIENT_REGISTRATION_TEST_NEW";//"PR_INS_PATIENT_REGISTRATION_TEST";10/12/2010
        public const string UPR_GET_FO_REGISTRATION_DET2 = "PR_GET_FO_REGISTRATION_DET2";
        public const string UPR_GET_BLOODGROUPS = "PR_GET_BLOODGROUPS";
        public const string UPR_GET_OCCUPATIONS = "PR_GET_OCCUPATIONS";
        public const string UPR_GET_DIETTYPES = "PR_GET_DIETTYPES";
        public const string UPR_GET_RELIGIONS = "PR_GET_RELIGIONS";
        public const string UPR_GET_NATIONALITY = "PR_GET_NATIONALITY";
        public const string UPR_DEL_PATIENT_DETAILS = "PR_DEL_MULTIPLETAB";
        public const string UPR_GET_OCCUPATION = "PR_GET_OCCUPATION";
        public const string UPR_GET_REFERRALS = "PR_GET_REFERAL";
        public const string UPR_GET_PATIENT_TYPES = "PR_GET_PATIENT_TYPE";
        public const string UPR_GET_ALL_ISSUEDBY = "PR_GET_ALL_ISSUEDBY_COMPANIES";
        public const string UPR_GET_ISSUEDAT = "PR_GETALL_AREAS";//PR_GETALL_CITIES
        public const string UPR_GET_ALL_ALLERGIES = "PR_GETALL_ALLERGIES";
        public const string UPR_GET_CONSULTANT = "PR_GET_DOCTOR_NAMES";
        public const string UPR_GET_EMPLOYEE = "PR_GET_REFERAL";
        public const string UPR_GET_ETHNICITY = "PR_GET_ETHNICITY";
        public const string UPR_GET_VISATYPE = "PR_GET_VISATYPE";
        public const string UPR_GET_LANGUAGE = "PR_GET_LANGUAGE";
        public const string UPR_GET_ALL_AREAS = "PR_GETALL_AREAS";
        public const string UPR_GET_ALL_NATIONALITIES = "PR_GETALL_NATIONALITIES";
        public const string UPR_GET_ALL_GRADES = "PR_GETALL_GRADE";
        public const string UPR_GET_ALLGRADES = "PR_GET_ALLGRADES";
        public const string UPR_GET_ALL_EDUCATIONS = "PR_GETALL_EDUCATIONS";
        public const string UPR_GET_ALL_ADDERSSTYPESS = "PR_GET_ALLADDERSSTYPESS";
        public const string UPR_GET_ALLADDERSSTYPESS = "PR_GET_ALLADDERSSTYPESS";
        public const string UPR_GET_ALL_RELATIONSHIPS = "PR_GETALL_PATIENTRELATION";//"PR_GETALL_RELATIONSHIPS"; CHECKING WHETHER IT IS USING OR NOT
        public const string UPR_GETALL_PATIENTRELATION = "PR_GETALL_PATIENTRELATION";
        public const string UPR_GET_ALLRELATIONSHIPS = "PR_GET_ALLRELATIONSHIPS";
        public const string UPR_GET_ALL_EMPLOYERS = "PR_GETALL_EMPLOYERS";
        public const string UPR_GET_PATIENTS_ORDER = "PR_GET_PATIENTS_ORDER";
        public const string UPR_GET_PATIENT_INSURANCE_ORDER = "PR_GET_PATIENT_INSURANCE_NEW";//"PR_GET_PATIENT_INSURANCE_ORDER";10/12/2010
        public const string UPR_GET_PATIENT_ALLERGY_ORDER = "PR_GET_PATIENT_ALLERGY_ORDER_NEW";//"PR_GET_PATIENT_ALLERGY_ORDER";10/12/2010
        public const string UPR_GET_RELATIONSHIPS = "PR_GET_RELATIONSHIPS";
        public const string UPR_GET_HOSPITALS = "PR_GETALL_HOSPITALS";
        public const string UPR_DEL_PATIENT_ADDITIONALINFO = "PR_DEL_PATIENT_ADDITIONALINFO";
        public const string UPR_DEL_PATIENT_PASSPORTINFO = "PR_DEL_PATIENT_PASSPORTINFO";
        public const string UPR_GET_PATIENTS_EXPIRY = "PR_GET_PATIENTS_EXPIRY";
        public const string UPR_GET_PATIENTS_HISTORY = "PR_GET_PATIENTS_HISTORY";

        public const string UPR_PR_GET_VW_OP_PATIENT_ENQ_DET = "PR_GET_VW_OP_PATIENT_ENQ_DET1234";
        #endregion
        #region CORPORATE
        public const string UPR_INSUPD_COMPANY_ITEM = "PR_INSUPD_COMPANY_ITEM_XML";
        public const string UPR_GET_CORPORATE_DETAILS = "PR_GET_CORPORATE_DETAILS";
        public const string UPR_INSUPD_CMPNY_REFERAL_LETTER = "PR_INSUPD_CMPNY_REFERAL_LETTER";
        public const string UPR_GET_CORPORATE_PATIENTINFO = "PR_GET_CORPORATE_PATIENTINFO";
        public const string UPR_GET_CMPNY_REFERAL_LETTER = "PR_GET_CMPNY_REFERAL_LETTER";
        public const string UPR_GET_CMPNY_REFERAL_LETTER_AUTO = "PR_GET_CMPNY_REFERAL_LETTER_AUTO";
        public const string UPR_GET_CMPNY_REFERAL_LETTER_ID = "PR_GET_CMPNY_REFERAL_LETTER_ID";
        public const string UPR_GET_CMPNY_ITEM_BY_ID = "PR_GET_COMPANY_ITEM_BY_CMP_ID";
        public const string UPR_GETALL_CORP_STMT_TYPE = "PR_GETALL_CORP_STMT_TYPE";
        public const string UPR_GET_CORP_STMT_TYPE_AUTOCOMP = "PR_GET_CORP_STMT_TYPE_AUTOCOMP";
        public const string UPR_GETALL_IPCORP_STMT_BILLS = "PR_GETALL_IPCORP_STMT_BILLS";
        public const string UPR_DEL_ADT_CMP_STMT_FRMT = "PR_DEL_ADT_CMP_STMT_FRMT";
        public const string UPR_INSUPD_COMPANY_STMT_CLIST = "PR_INSUPD_COMPANY_STMT_CLIST";
        public const string UPR_GET_COMPANY_STMT_CLIST = "PR_GET_COMPANY_STMT_CLIST";
        public const string UPR_GETALL_COMPANY_STMT_CLIST = "PR_GETALL_COMPANY_STMT_CLIST";
        public const string UPR_GET_COMPANY_MASTER_AUTO = "PR_GET_COMPANY_MASTER_AUTO";

        public const string UPR_GET_ADT_CMP_STMT_CL = "PR_GET_ADT_CMP_STMT_CL";
        public const string UPR_GET_ADT_CMP_STMT_CVL = "PR_GET_ADT_CMP_STMT_CVL";
        public const string UPR_GET_ADT_CMP_STMT_CB = "PR_GET_ADT_CMP_STMT_CB";
        public const string UPR_GET_ADT_CMP_STMT_MC = "PR_GET_ADT_CMP_STMT_MC";
        public const string UPR_GET_ADT_CMP_STMT_EC = "PR_GET_ADT_CMP_STMT_EC";
        public const string UPR_GET_ADT_CMP_STMT_CA = "PR_GET_ADT_CMP_STMT_CA";
        #endregion
        #region Day Care
        public const string UPR_GET_DAYCARE_READMIT_DSCHRG = "PR_GET_DAYCARE_READMIT_DSCHRG";
        public const string UPR_GET_ADT_DAYCARE_READMISSION_AUTO = "PR_GET_ADT_DAYCARE_READMISSION_AUTO";
        public const string UPR_GET_DAYCARE_ADT_DSCHRG = "PR_GET_DAYCARE_ADT_DSCHRG";
        public const string UPR_GET_ADT_DAYCARE_DSCHRG_AUTO = "PR_GET_ADT_DAYCARE_DSCHRG_AUTO";
        public const string UPR_GETALL_DAYCARE_PATIENT_DISCHARGE = "PR_GETALL_DAYCARE_PATIENT_DISCHARGE";
        public const string UPR_GET_DISCHARGE_TYPE = "PR_GET_DISCHARGE_TYPE";
        public const string UPR_DEL_ADT_DSCHRG = "PR_DEL_ADT_DSCHRG";
        public const string UPR_GET_ADT_DSCHRG = "PR_GET_ADT_DSCHRG";
        public const string UPR_GETALL_PATIENT_DISCHARGE = "PR_GETALL_PATIENT_DISCHARGE";
        public const string UPR_GET_ADMISSION_TYPE = "PR_GET_ADMISSION_TYPE";
        public const string UPR_GET_ADT_PRE_ADMN = "PR_GET_ADT_PRE_ADMN";
        public const string UPR_INSUPD_PATIENT_ADMISIION = "PR_INSUPD_PATIENT_ADMISIION";

        public const string UPR_GET_METHOD_OF_COMMUNICATION = "PR_GET_METHOD_OF_COMMUNICATION";
        public const string UPR_GET_FO_ADMISSION_DET = "PR_GET_FO_ADMISSION_DET";
        public const string UPR_INS_FO_ADMISSION = "PR_INS_FO_ADMISSION";
        public const string UPR_INS_FO_ADMISSION_DET5 = "PR_INS_FO_ADMISSION_DET5";
        public const string UPR_INS_FO_ADMISSION_DET2 = "PR_INS_FO_ADMISSION_DET2";
        public const string UPR_GET_FO_ADMISSIONALLERGY = "PR_GET_FO_ADMISSIONALLERGY";
        public const string UPR_GET_FO_ADMISSION_INSURENCE = "PR_GET_FO_ADMISSION_DET3";
        public const string UPR_GET_FO_ADMISSION_EMPLOYEE = "PR_GET_FO_ADMISSION_DET4";
        public const string UPR_INSUPD_FO_ADMISSION_DET4 = "PR_INSUPD_FO_ADMISSION_DET4";
        public const string UPR_GET_FO_ADMISSION_MLCINFO = "PR_GET_FO_ADMISSION_MLCINFO";
        public const string UPR_GET_FO_ADMISSION = "PR_GET_FO_ADMISSION";
        public const string UPR_GET_MLC_TYPE = "PR_GET_MLC_TYPE";
        public const string UPR_GET_TRANSPORT_MODE = "PR_GET_TRANSPORT_MODE";
        public const string UPR_DEL_FO_ADMISSION = "PR_DEL_FO_ADMISSION";
        public const string UPR_DEL_FO_ADMISSION_DET4 = "PR_DEL_FO_ADMISSION_DET4";
        public const string UPR_DEL_FO_ADMISSION_DET = "PR_DEL_FO_ADMISSION_DET";
        public const string UPR_DEL_FO_ADMISSION_DET3 = "PR_DEL_FO_ADMISSION_DET3";
        public const string UPR_INSUPD_FO_ADMISSION_DET = "PR_INSUPD_FO_ADMISSION_DET";
        public const string UPR_UPD_FO_MLCINFO = "PR_UPD_ADT_ADMN_MLC";
        public const string UPR_DEL_MLC_DETAILS = "PR_DEL_MLC_DETAILS";
        public const string UPR_INSUPD_FO_ADMISSION_DET3 = "PR_INSUPD_FO_ADMISSION_DET3";
        public const string UPR_GET_BED_DETAILS = "PR_GET_BED_DETAILS";
        public const string UPR_GET_ROOM_DETAILS = "PR_GET_ROOM_DETAILS";
        public const string UPR_GET_FO_ADMISSION_DET5 = "PR_GET_FO_ADMISSION_DET5";
        public const string UPR_GET_FO_ADMISSION_DET2 = "PR_GET_FO_ADMISSION_DET2";

        public const string UPR_GET_FO_ADMISSION_DET3PREFIX = "PR_GET_FO_ADMISSION_DET3PREFIX";
        public const string UPR_GETALL_ADMISSIONPREFIX = "PR_GETALL_ADMISSIONPREFIX";
        public const string UPR_GET_PATIENT_ADMISSION_INSURANCE_ORDER = "PR_GET_PATIENT_ADMISSION_INSURANCE_ORDER";
        public const string UPR_GET_PATIENT_ADMISSION_ALLERGY_ORDER = "PR_GET_PATIENT_ADMISSION_ALLERGY_ORDER";
        public const string UPR_GETALL_FO_ADMISSION_DET = "PR_GETALL_ADT_ADMN_PATIENT";
        public const string UPR_GETALL_CHANGE_ADMN_DET = "PR_GETALL_CHANGE_ADMN_DET";
        public const string UPR_GETALL_RE_ADMISSION_DET = "PR_GETALL_ADT_ADMN";
        public const string UPR_GET_ADT_ADMNS = "PR_GET_ADT_ADMNS";

        //public const string UPR_GETALL_FO_ADMISSION_DET = "PR_GETALL_FO_ADMISSION_DET";
        #endregion DayCare

        #endregion front office Module

        #region ConsultationType

        public const string UPR_INSUPD_CONSULTATIONTYPE = "PR_INSUPD_CONSULTATION_TYPES";
        public const string UPR_GETALL_CONSULTATIONTYPES = "PR_GETALL_CONSULTATION_TYPES";
        public const string UPR_GET_CONSULTATIONTYPE_ONCD = "PR_GET_CONSULTATION_TYPES";
        public const string UPR_DEL_CONSULTATIONTYPE = "PR_DEL_CONSULTATION_TYPES";
        public const string UPR_GET_CONSULTATIONTYPE_AUTOCOMPLTE = "PR_GET_CONSULTATIONTYPE_PREFIX";
        public const string UPR_GET_CONSULTATIONTYPE_SEARCH = "PR_GET_CONSULTATIONTYPE_SEARCH ";
        public const string PR_GET_CONSULTATION_TYPESCOVERAGEID = "PR_GET_CONSULTATION_TYPESCOVERAGEID";
        public const string UPR_INS_FO_BILL_DET = "PR_INS_FO_BILL_DET";
        public const string UPR_GET_CONSULTATIONS = "PR_GET_CONSULTATIONS";
        public const string UPR_GET_CONSULTATION_DETAILS = "PR_GET_CONSULTATION_DETAILS";

        public const string UPR_GET_FB_BILL_DETAILS = "PR_GET_FB_BILL_DETAILS_PAGE";
        #endregion

        #region Surgery Classification

        public const string UPR_INSUPD_SURGERYCLASSIFICATION = "PR_INSUPD_VW_SURGERY_CLASS";
        public const string UPR_GETALL_SURGERYCLASSIFICATIONS = "PR_GETALL_VW_SURGERY_CLASS";
        public const string UPR_GET_SURGERYCLASSIFICATION_ONCD = "PR_GET_VW_SURGERY_CLASSCD";
        public const string UPR_DEL_SURGERYCLASSIFICATION = "PR_DEL_VW_SURGERY_CLASS";
        public const string UPR_GET_SURGERYCLASSIFICATION_AUTOCOMPLETE = "PR_GET_SURGERY_CLASS_PREFIX";
        public const string UPR_GET_SURGERYCLASSIFICATION_SEARCH = "PR_GET_SURGERY_CLASS_SEARCH";
        public const string UPR_DEL_VW_SURGERY_CLASS_ALL = "PR_DEL_VW_SURGERY_CLASS_ALL";

        #endregion

        #region SERVICEGROUP

        public const string UPR_INSUPD_SERVICEGROUP = "PR_INSUPD_SERVICEGROUP";
        public const string UPR_GETALL_SERVICEGROUPNAMES_PAGING = "PR_GETALL_SERVICEGROUP_PAGING";
        public const string UPR_GET_AUTOCOMPLETE_GRPNAMES = "PR_GET_SERVICEGROUPAUTOCOMPLTE";
        public const string UPR_GET_SERVICEGRPNAMES_PREFIX = "PR_GETALL_SERVICEGROUP_PRFIX_PAGING";
        public const string UPR_DEL_SERVICEGROUPNAME = "PR_DEL_SERVICEGROUPBYCD";
        public const string UPR_GET_SERGROUPNAME_DETAILS = "PR_GET_SERVICEGROUPBYID";
        public const string UPR_GET_SERVICEGROUPBYCOLUMN = "PR_GET_SERVICEGROUPBYCOLUMN";

        #endregion

        #region SERVICES

        public const string UPR_INSUPD_SERVICE = "";
        public const string UPR_GETALL_SERVICES_PAGING = "";
        public const string UPR_GET_AUTOCOMPLETE_SERVICES = "";
        public const string UPR_GET_SERVICES_PREFIX = "";
        public const string UPR_DEL_SERVICE = "";
        public const string PR_GET_PATCLASS_ONSERID = "PR_GET_PATCLASS_ONSERID";
        public const string GET_SERVICELEVELCOLUMNBASED_ = "GET_SERVICELEVELCOLUMNBASED";

        #endregion

        #region SERVICE TYPE

        public const string UPR_INSUPD_SERVICETYPE = "PR_INSUPD_SERVICE_TYPE";
        public const string UPR_GET_SERVICETYPE = "PR_GET_SERVICE_TYPE";
        public const string UPR_GET_SERVICETYPEPAGE = "PR_GET_SERVICE_TYPE_PAGING";
        public const string UPR_GET_SERVICEBYID = "PR_GET_SERVICE_TYPEBYCD";
        public const string UPR_DEL_SERVICE_TYPE = "PR_DEL_SERVICE_TYPE";
        public const string UPR_DEL_SERVICE_TYPE_ONEBYONE = "PR_DEL_SERVICE_TYPE_ONEBYONE";
        public const string UPR_GET_SERVICE_TYPE_AUTO = "PR_GET_SERVICE_TYPE_AUTOCOMPLTE";
        public const string UPR_GET_COMPANY_AUTOCOMPLTEBY_COL = "PR_GET_COMPANY_AUTOCOMPLTEBY_COL";

        #endregion

        #region Service Master

        public const string UPR_GETALL_BILLINGHEADS = "PR_GETALL_BILLINGHEADS";
        public const string UPR_GETALL_SERVICEGROUPS = "PR_GETALL_SERVICEGROUP";
        public const string UPR_GETALL_SERVICETYPES = "PR_GETALL_SERVICETYPES";
        public const string Get_SERVICETYPES_SBASED = "PR_GET_SERVICETYPECOLUMNBASED";
        public const string UPR_INSUPD_SERVICEMASTER = "PR_INSUPD_SERVICEMASTER";
        public const string UPR_GETALL_SERVICE = "PR_GETALL_SERVICE";
        //changed sp PR_GETALL_SERVICE_BY_TYPE to PR_GETALL_SERVICE_BY_TYPE_NEW
        public const string UPR_GETALL_SERVICE_BY_TYPE = "PR_GETALL_SERVICE_BY_TYPE_NEW";//"PR_GETALL_SERVICE_BY_TYPE";
        public const string UPR_GETALL_IPSERVICE_BY_TYPE = "PR_GETALL_SERVICE_BY_TYPE_IP";
        public const string UPR_GETALL_TARIFF_SERVICES = "PR_GETALL_TARIFF_SERVICES";
        public const string UPR_GETALL_IPSERVICE_BY_SERVICETYPE = "PR_GETALL_SERVICE_BY_TYPEIP";
        public const string UPR_GET_SERVICE_ONCODE = "PR_GET_SERVICE";
        public const string UPR_DEL_SERVICE_MASTER = "PR_DEL_SERVICE";
        public const string UPR_GET_SERVICEMASTERBY_COLST = "PR_GET_SERVICEAUTOCOMPLETED";
        //public const string UPR_GET_SERVICEMASTER_AUTOCOMPLETE = "PR_GET_AUTO_SERVICES";
        public const string UPR_GET_OP_AUTO_SERVICES = "PR_GET_AUTO_OP_SERVICES";
        public const string UPR_GET_CORP_AUTO_SERVICES = "PR_GET_AUTO_OP_SERVICES_CORP";
        public const string UPR_GET_IP_AUTO_SERVICES = "PR_GET_AUTO_IP_SERVICES";
        public const string UPR_GET_AUTO_PACKAGES = "PR_GET_AUTO_PACKAGES";

        public const string UPR_INS_CORP_BILLSTATUS = "PR_INS_CORP_BILLSTATUS";
        public const string UPR_GET_SERVICE_TYPE_AUTOCOMPLETE = "PR_GET_AUTO_SERVICESTYPE";
        public const string UPR_GET_AUTOPACKAGESERVICE = "PR_GET_AUTOPACKAGESERVICE";
        public const string UPR_INSUPD_SERVICEPACKAGE = "PR_INSUPD_SERVICE_DET";
        #endregion

        #region TariffServiceMapping
        public const string PR_GET_TARIFF_SERVICE = "PR_GET_TARIFF_SERVICE";
        public const string UPR_GET_TARIFFSERVICEMAPPINGDYNAMIC = "PR_GET_TARIFFSERVICEMAPPINGDYNAMIC";
        #endregion

        #region ServiceGroupMapping

        public const string PR_GET_ALLSERVICE = "PR_GET_ALLSERVICE";
        public const string PR_GET_ALLSERVICE_GROUP = "PR_GET_ALLSERVICE_GROUP";
        public const string PR_UPD_SERVICEGROUP = "PR_UPD_SERVICEGROUP";
        public const string PR_GET_SERVICEMAP_BY_SERV_NAME = "PR_GET_SERVICEMAP_BY_SERV_NAME";
        public const string PR_DEL_SERVICEGROUPMAPPING = "PR_DEL_SERVICEMAPPINGS";

        #endregion

        #region servicepackage

        public const string UPR_GETALL_PACKAGE_SERVICES = "PR_GETALL_PACKAGE_SERVICES";
        public const string UPR_GETALL_GROUP_SERVICES = "PR_GETALL_GROUP_SERVICES";
        public const string UPR_GETALL_SERVICES_SEARCH = "PR_GETALL_SERVICES_SEARCH";
        public const string UPR_GET_SERVICE_DET = "PR_GET_SERVICE_DET";
        public const string UPR_GET_PACKAGE_SERVICES = "PR_GET_PACKAGE_SERVICES";

        public const string UPR_GETALL_VW_SERVICE_DET = "PR_GETALL_VW_SERVICE_DET";
        public const string UPR_GET_PACKAGESERVICE_INFO = "PR_GET_PACKAGESERVICE_INFO";
        public const string UPR_GETALL_OPBILLGROUPS = "PR_GETALL_OPBILLGROUPS";
        public const string UPR_DEL_PACKAGESERVICE = "PR_DEL_PACKAGESERVICE";
        public const string UPR_DEL_SERVICESOF_PACKAGESERVICE = "PR_DEL_SERVICESOF_PACKAGESERVICE";
        public const string UPR_DEL_SERVICESOF_GROUPBILLING = "PR_DEL_SERVICESOF_GROUPBILLING";
        public const string UPR_GET_AUTO_SERVICE = "PR_GET_AUTO_SERVICE";
        public const string UPR_GET_AUTOOPBILLGROUPSERVICE = "PR_GET_AUTOOPBILLGROUPSERVICE";
        public const string UPR_GETALL_ASSAYCOMPARISIONS = "PR_GETALL_ASSAYCOMPARISIONS";
        public const string UPR_GETALL_ASSAY_SERVICES = "PR_GETALL_ASSAY_SERVICES";
        public const string UPR_GET_AUTOCOMP_ASSAYSERVICE = "PR_GET_AUTOCOMP_ASSAYSERVICE";
        public const string UPR_GET_AUTOCOMP_SEPERATEPRINT = "PR_GET_AUTOCOMP_SEPERATEPRINT";
        #endregion

        #region OPD_PROC

        public const string UPR_GETALL_OPD_TYPES = "PR_GETALL_OPD_TYPES";
        public const string UPR_INSUPD_OPD_PROC_XML = "PR_INSUPD_OPD_PROC_XML";
        public const string UPR_DEL_OPD_PROC = "PR_DEL_OPD_PROC";
        public const string UPR_GETALL_OPD_PROC = "PR_GETALL_OPD_PROC";
        public const string UPR_GET_OPD_PROC = "PR_GET_OPD_PROC";
        #endregion

        #region CREDIT ORGANIZATION
        public const string UPR_GET_COMPANY_AUTO = "PR_GET_COMPANY_AUTO";
        public const string UPR_GET_COMPANY_SERVICETAX_TYPE = "PR_GET_COMPANY_SERVICETAX_TYPE";
        public const string UPR_GET_COMPANY_SRV_TAX_SRV_TYPE = "PR_GET_COMPANY_SRV_TAX_SRV_TYPE";
        public const string UPR_GET_COMPANY_SRV_TAX = "PR_GET_COMPANY_SRV_TAX";
        public const string UPR_GET_COMPANY_SERVICETAX = "PR_GET_COMPANY_SERVICETAX";
        public const string UPR_CHECK_COMPANYSERVICETAX = "PR_CHECK_COMPANYSERVICETAX";
        public const string UPR_INSUPD_COMPANY_SERVICE_TAX = "PR_INSUPD_COMPANY_SERVICE_TAX";
        public const string UPR_CHECK_COMPANYTARIFF = "PR_CHECK_COMPANYTARIFF";
        public const string UPR_GET_COMPANY_CPCONTARCT = "PR_GET_COMPANY_CPCONTARCT";
        public const string UPR_GET_COMPANY_TARIFF_CLASSID = "PR_GET_COMPANY_TARIFF_CLASSID";
        public const string UPR_COMPANY_TARIFF_SETTINGS = "PR_INSUPD_COMPANYTARCOPY";// "PR_INSUPD_COMPANY_TRCON";
        public const string UPR_GET_COMPANY_TARIFF = "PR_GET_COMPANY_TARIFF";
        public const string UPR_COMPANY_AUTHORIZATION_AUTO_COMP = "PR_GET_AUTO_COMPANY_REG";
        public const string UPR_CHECK_COMPANYCODE = "PR_GET_CHECK_COMPANYCODE";
        public const string UPR_INS_CREDIT_ORGANIZATION = "PR_INSUPD_COMPANYDETAILS_COM";//PR_INSUPD_COMPANYDETAILS  
        public const string UPR_GET_CREDIT_ORGANIZATION_BYID = "PR_GET_COMPANYDETAILS_COMP";//PR_GET_COMPANY_DETAILS
        public const string UPR_GET_COMPANY = "PR_GET_COMPANYINFO";
        public const string UPR_DEL_COMPANY_ORG = "PR_DEL_COMPANY_ORG";
        public const string UPR_GET_COMPANYTYPE = "PR_GET_COMPANYTYPE";
        public const string UPR_GET_LOCATION = "PR_GET_REGLOCATION";
        public const string UPR_GET_SCOPEOFBUSS = "PR_GET_SCOPEOFBUSINESS";
        public const string UPR_GET_COMPANY_PAGING = "PR_GET_COMPANYINFO_PAGING";
        public const string UPR_GET_COMPANYAUTOCOMPLETED = "PR_GET_COMPANYAUTOCOMPLETED";
        public const string UPR_GET_CONTACTDETAILSAUTOCOMPLETED = "PR_GET_CONTACTAUTOCOMPLETED";
        public const string UPR_INS_MULTI_LISTCMP = "PR_INS_COMPANY2";//cREDIT ORGANIZATION EXCHANGEDETAILS
        public const string UPR_INS_MULTI_CONTACTPERSON = "PR_INSUPD_COMPANYCONTACT_NEW";//CREDIT ORGANIZATION CONTACT PERSON DETAILS
        public const string UPR_GET_CONTACTPERSON_DET = "PR_GET_CONTACTPERSON_DET";//CREDIT ORGANIZATION CONTACT PERSON DETAILS LIST // PR_GET_CONTACTPERSON_DET
        public const string UPR_GET_COMPANY_EXE_LIST = "PR_GET_LIST_DET";
        public const string UPR_INS_CMP_MULTADDR = "PR_INS_CMP_MULTADDR";
        public const string UPR_INSUPD_COMPANYADDRESS = "PR_INSUPD_COMPANYADDRESS_NEW";
        public const string UPR_GET_COMPANY_RECORD_BYPRVNEXT = "PR_GET_COMPANY_DETAIL";
        public const string UPR_UPD_COMPANY_CONTACT = "PR_UPD_COMPANYCONTACT_NEW";
        public const string UPR_DEL_COMPANY_CONTACT = "PR_DEL_COMPANYCONTACT_NEW";
        //GET THE RECORD OF COMPANY BY APPLYING PREV,NEX OPTION
        public const string UPR_GET_MULTI_CONTACTPERSON_DET_BYID = "PR_GET_MULTI_CONTACTPERSON_NEW";
        public const string UPR_GET_CONTACT_AUTOCOMPLTEBY_COL = "PR_GET_CONTACT_AUTOCOMPLTEBY_COL";
        public const string UPR_GET_ALLCONTACTLIST = "GET_ALLCONTACTLIST";
        public const string UPR_GET_COMPANYCONTACTINFOCOLUMNBASED = "PR_GET_COMPANYCONTACTINFOCOLUMNBASED_NEW";
        public const string UPR_GET_COMPANYMULTIADDRESS = "PR_GET_COMPANY3ADDRESS_NEW";
        public const string UPR_GET_COMPANYADDRESS_BYID = "PR_GET_COMPANYADDRESS_NEW";
        public const string UPR_DEL_COMPANYADDRESS = "PR_DEL_COMPANYADDRESS";

        #region CREDITORGANIZATION TARIFF SETTINGS
        // public const string UPR_GETALL_CATEGORIES_VW = "PR_GETALL_CATEGORIES_VW";
        public const string UPR_GET_COMPANY_TARIFFSETTINGS = "PR_GET_COMPANY_TARIFFSETTINGS";
        public const string UPR_GETALL_COMPANY_TARIFFS = "PR_GETALL_COMPANY_TARIFFS";

        #endregion
        #endregion

        #region ADDRESS SEARCH CONTROL

        public const string UPR_GET_CITY = "PR_GET_CITY";
        public const string UPR_GETALL_CITIES = "PR_GETALL_CITIES";
        public const string UPR_GET_STATE = "PR_GET_STATE";
        public const string UPR_GETALL_STATE = "PR_GETALL_STATE";
        public const string UPR_GET_COUNTRY = "PR_GET_COUNTRY";
        public const string UPR_GETAll_COUNTRIES = "PR_GETAll_COUNTRIES";
        public const string UPR_GET_CITYSEARCH = "PR_GET_SEARCH_CITY";
        public const string UPR_GET_STATESEARCH = "";
        public const string UPR_GET_COUNTRYSEARCH = "";
        public const string UPR_GETALL_CITY = "PR_GETALL_CITY";//no pageing
        public const string UPR_INS_CITY = "PR_INS_CITY";
        #endregion

        #region FACILITYMASTER

        public const string UPR_GETALL_FACILITIES = "PR_GETALL_FACILITIES";
        public const string UPR_GET_FACILITIES_BY_USER_ID = "PR_GET_FACILITIES_BY_USER_ID";

        #endregion

        #region GradeMaster

        public const string INS_UPD_GRADEMASTER = "PR_INSUPD_EMPLOYEE_GRADE_VW";
        public const string GETALL_GRADEMASTERSPAGING = "PR_GETALL_EMPLOYEEGRADE";
        public const string GET_GRADEMASTERBYCD = "PR_GET_EMPLOYEE_GRADE";
        public const string DEL_GRADEMASTER = "PR_DEL_EMPLOYEEGRADECD";
        public const string GETALL_GRADECODES = "PR_GET_VW_EMPLOYEE_GRADE";
        public const string GET_GRADEMASTERVERSIONSBYCD = "PR_GET_EMPLOYEE_GRADE_VERSION";
        public const string UPR_GET_GRADEAUTOCOMPLETED = "PR_GET_GRADEAUTOCOMPLETED";
        public const string UPR_GET_GARDESEARCHBYCOL = "PR_GET_GRADECOLUMNBASED";
        public const string UPR_INSUPD_EMPLOYEE = "PR_INSUPD_EMPLOYEE";

        #endregion

        #region TARIFF MASTER

        public const string UPR_GET_TARIFFPAGE = "PR_GETALL_TARIFFPAGE";
        public const string UPR_GET_TARIFF_BYID = "PR_GET_TARIFFBYID";
        public const string UPR_DEL_TARIFF = "PR_DEL_TARIFF";
        public const string UPR_INSUPD_TARIFF = "PR_INSUPD_TARIFF";
        public const string UPR_DELALL_TARIFF = "PR_DEL_ALLTARIFF";
        public const string UPR_GET_TARIFFAUTOCOMPLEATE = "PR_GET_TARIFF_AUTOCOMPLTE";
        public const string UPR_GET_TARIFFCOLUMNBASED = "PR_GET_TARIFFCOLUMNBASED";
        #endregion

        #region Universal Standard

        public const string UPR_GETALL_UVSTANDARD = "PR_GETALL_UVSTANDARD";
        public const string UPR_INSUPD_UVSTANDARD = "PR_INS_UVSTANDARD";
        public const string UPR_GET_UVSTANDARD_BYID = "PR_GET_UVSTANDARD_BYID";
        public const string UPR_DEL_UVSTANDARD = "PR_DEL_UVSTANDARD";
        public const string UPR_GET_UVSTANDARDPAGE = "PR_GET_UVSTANDARD";
        public const string UPR_GET_UVSTDCOLUMNBASED = "PR_GET_UVSTDCOLUMNBASED";
        public const string UPR_GET_UVSTDAUTOCOMPLTE = "PR_GET_UVSTD_AUTOCOMPLTE";

        #endregion

        #region Company Policy

        public const string UPR_GET_COMPANY_POLICIES = "PR_GET_COMPANY_POLICIES";
        public const string UPR_GET_BOOLEAN_LIST = "PR_GET_BOOLEAN_LIST";
        public const string UPR_GET_DATE_FORMAT_LIST = "PR_GET_DATE_FORMAT_LIST";
        public const string UPR_GET_NATURAL_NUMBERS_LIST = "PR_GET_NATURAL_NUMBERS_LIST";
        public const string UPR_GET_NUMBER_FORMAT_LIST = "PR_GET_NUMBER_FORMAT_LIST";
        public const string UPR_INSUPD_PARAMETER_VALUE = "PR_INSUPD_PARAMETER_VALUE";
        //public const string UPR_INSUPD_PARAMETER_VALUE = "PR_INSUPD_PARAMETER_VALUE_NEW";
        public const string UPR_GET_PARAMETER_ENTITYVALUES = "PR_GET_PARAMETER_ENTITYVALUES";

        #endregion company policy

        #region Department
        public const string UPR_GETALL_DEPARTMENTSLIST = "PR_GETALL_DEPARTMENTSLIST";
        //sp to get all locations
        public const string UPR_GET_AUTO_DEPT = "PR_GET_AUTO_DEPT";
        public const string UPR_GETALL_LOCATIONSLIST = "PR_GETALL_LOCATIONS";
        public const string UPR_GETALL_SPECIALIZATIONS = "PR_GETALL_SPECIALIZATIONS";
        public const string UPR_GETALL_DESIGNATION = "PR_GETALL_DESIGNATION";
        public const string UPR_DEPARTMENT_AUTO_COMP = "PR_GET_DEPARTMENT_AUTO_COMP";
        public const string UPR_DESIGNATION_AUTO_COMP = "PR_GET_DESIGNATION_AUTO_COMP";
        public const string UPR_GET_DEPARTMENT = "PR_GETALL_DEPARTMENTS";
        public const string UPR_GET_DESIGNATION = "PR_GET_DESIGNATION";
        public const string UPR_GET_SPECIALIZATION = "PR_GET_SPECIALIZATION";

        #endregion

        #region Employee Type
        public const string UPR_GET_EMP_TYPE = "PR_GET_EMPLOYEE_TYPE";
        #endregion

        #region Doctor Master

        public const string UPR_GET_SEXUAL_PREFERENCE = "PR_GET_SEXUAL_PREFERENCE";
        public const string UPR_GET_ETHINCITY = "PR_GET_ETHINCITY";
        public const string UPR_GET_SEX = "PR_GET_SEX";
        public const string UPR_GET_RELIGION = "PR_GET_RELIGION";

        public const string UPR_DEL_DEPT_DOC = "PR_DEL_DEPT_DOC";
        public const string UPR_GET_DEPT_DOC = "PR_GET_DEPT_DOC";
        public const string UPR_GET_DOCTORTYPE = "PR_GET_DOCTORTYPE";
        public const string UPR_INSUPD_DOCMASTER = "PR_INSUPD_DOCTOR";
        public const string UPR_GETALL_DOCTORDETAILS = "PR_GETALL_DOCTORS";
        public const string UPR_GETALL_DOCMASTER = "PR_GETALL_DOCTORS";
        public const string UPR_GET_DOCMASTERBYID = "PR_GET_DOCTORBYID";
        public const string UPR_DEL_DOCTORMASTER = "PR_DEL_DOCTORBYID";
        public const string UPR_GET_DOCINFOCOLUMNBASED = "PR_GET_DOCINFOCOLUMNBASED";
        public const string UPR_GET_DOCTORMASTERAUTO = "PR_GET_DOCTORMASTERAUTO";
        public const string UPR_GET_DOCTOR_RECORD_BYPRVNEXT = "PR_GET_DOCTOR_ORDER";
        public const string UPR_INSUPD_DOCTORPROFESSIONAL = "PR_INSUPD_DOCTORPROFESSIONAL";
        public const string UPR_GETALL_DOCTORPROFESSIONAL = "PR_GET_DOCTORPROFESSIONAL";//"PR_GETALL_DOCTORPROFESSIONAL";
        public const string UPR_DEL_DOCTOR_PROFESSIONAL = "PR_DEL_DOCTOR_PROFESSIONAL";
        public const string UPR_CHECK_DOCTORCODE = "PR_GET_CHECK_DOCTORCODE";
        public const string UPR_GET_DOCPREFCOLUMNBASED = "PR_GET_DOCPREFCOLUMNBASED";


        /// <summary>
        /// DOCTOR DEPENDENT INFO
        /// </summary>
        public const string UPR_INSUPD_DOCTOR_DEPENDENT = "PR_INSUPD_DOCTOR_DEPENDENT";
        public const string UPR_GET_DOC_DEPENDENT_INFO = "PR_GETALL_DOCTORDEPENDENT";
        public const string UPR_DEL_DOC_DEPENDENT = "PR_DEL_DOCTORDEPENDENT";
        public const string UPR_GET_DOCDEPENDENTCOLUMNBASED = "PR_GET_DOCDEPENDENTCOLUMNBASED";
        public const string UPR_GET_DEPENDENTBYID = "PR_GET_DEPENDENTBYID";
        public const string UPR_GET_DEPENDENT_TYPE = "PR_GET_DEPENDENT_TYPE";
        public const string UPR_UPD_DOCTOR_DEPENDENT = "PR_UPD_EMPLOYEE_DEPENDENTS";
        /// <summary>
        /// DOCTOR'S EDUCATION DETAILS
        /// </summary>
        /// 
        public const string UPR_GET_QUALIFICATIONSEARCH = "PR_GET_DOCTOR_EDUCATION";
        public const string UPR_GET_QUALIFICATION_AUTO_COMP = "PR_GET_QUALIFICATION_AUTO_COMP";
        public const string UPR_INSUPD_DOCMASTER_EDU = "PR_INSUPD_DOCTOREDUCATION";
        public const string UPR_INSTITUTION_AUTO_COMP = "PR_GET_INSTITUTION_AUTO_COMP";
        public const string UPR_BOARD_UNIVERSITY_AUTOCOMP = "PR_GET_BOARD_UNIVERSITY_AUTOCOMP";
        public const string UPR_GETALL_DOCTOREDUCATION = "PR_GETALL_DOCTOREDUCATION";
        public const string UPR_DEL_DOCTOREDUCATION = "PR_DEL_DOCTOREDUCATION";
        public const string UPR_GET_DOCEDUBYID = "PR_GET_DOCEDUBYID";
        public const string UPR_GET_DOCTOR_EDUCATION_AUTO = "PR_GET_DOCTOR_EDUCATION_AUTO";
        /// <summary>
        /// DOCTOR'S CERTIFICATION DETAILS
        /// </summary>
        public const string UPR_INS_DOCTOR_CERTIFICATE = "PR_INS_DOCTOR_CERTIFICATE";
        public const string UPR_GETALL_DOCTORCERTIFICATION = "PR_GETALL_DOCTORCERTIFICATION";
        public const string UPR_DEL_DOCTORCERTIFICATION = "PR_DEL_DOCTORCERTIFICATION";
        public const string UPR_GETDOCCERTIFICATIONBYID = "PR_GET_DOCCERTIFICATIONBYID";
        /// <summary>
        /// DOCTOR'S SENCTION
        /// </summary>
        public const string UPR_GET_DOCTOR_SANCTION_AUTO = "PR_GET_DOCTOR_SANCTION_AUTO";
        public const string UPR_GET_DOCTOR_SANCTION_SEARCH = "PR_GET_DOCTOR_SANCTION_SEARCH";
        public const string UPR_INS_DOCTOR_SANCTION = "PR_INSUPD_DOCTOR_SANCTION";
        public const string UPR_GETALL_DOCTORSANCTION = "PR_GETALL_DOCTORSANCTION";
        public const string UPR_DEL_DOCTORSANCTION = "PR_DEL_DOCTORSANCTION";
        public const string UPR_GETDOCSENCTIONBYID = "PR_GET_DOCSENCTIONBYID";
        /// <summary>
        /// DOCTOR'S SPECIALIZATION
        /// </summary>
        public const string UPR_GET_DOCTOR_SPECIALIZATION_SEARCH = "PR_GET_DOCTOR_SPECIALIZATION_SEARCH";
        public const string UPR_GET_DOCTOR_LICENSE_SEARCH = "PR_GET_DOCTOR_LICENSE_SEARCH";

        public const string UPR_SPECIALIZATION_AUTO_COMP = "PR_GET_SPECIALIZATION_AUTOCOMP";
        public const string UPR_INS_DOCTOR_SPECIALIZATION = "PR_INSUPD_DOCTOR_SPECIALIZATION";
        public const string UPR_GETALL_DOCTORSPECIALIZATION = "PR_GETALL_DOCTORSPECIALIZATION";
        public const string UPR_DEL_DOCTOR_SPECIALIZATION = " PR_DEL_DOCTOR_SPECIALIZATION";
        /// <summary>
        /// DOCTOR'S LICENCE
        /// </summary>
        public const string UPR_INS_DOCTOR_LICENSE = "PR_INSUPD_DOCTOR_LICENSE";
        public const string UPR_GETALL_DOCTORLICENSE = "PR_GETALL_DOCTORLICENSE";
        public const string UPR_GETDOClicenceBYID = "PR_GET_DOCLICENCEBYID";
        public const string UPR_DEL_DOCTORLICENCE = "PR_DEL_DOCTORLICENCE";
        /// <summary>
        /// DOCTOR'S EXPERIENCE
        /// </summary>
        public const string UPR_INS_DOCTOR_EXPERIENCE = "PR_INSUPD_DOCTOR_EXPERIENCE";
        public const string UPR_GETALL_DOCTOREXPERIENCE = "PR_GETALL_DOCTOREXPERIENCE";
        public const string UPR_DESIGNATION_AUTOCOMP = "PR_GET_DESIGNATION_AUTOCOMP";
        public const string UPR_GETDOCEXPERIENCEBYID = "PR_GET_DOCEXPERIENCEBYID";
        public const string UPR_DEL_DOCTOR_EXPERIENCE = "PR_DEL_DOCTOR_EXPERIENCE";


        /// <summary>
        /// Doctor' Bank Details
        /// </summary>
        /// 
        public const string UPR_INSUPD_DOCTORBANK = "PR_INSUPD_DOCTORBANK";
        public const string UPR_GETALL_DOCTORBANK = "PR_GETALL_DOCTORBANK";
        public const string UPR_GET_DOCTORSBANKDETAILSBYID = "PR_GET_DOCTORSBANKDETAILSBYID";
        public const string UPR_DEL_DOCTORBANK = "PR_DEL_DOCTORBANK";
        public const string UPR_GET_BANK_INFOCOLUMNBASED = "PR_GET_BANK_INFOCOLUMNBASED";
        public const string UPR_DEL_BANK = "PR_DEL_BANK";
        /// <summary>
        /// DOOCTORS TREATMENT PREFERENCE
        /// </summary>
        public const string UPR_PROCEDURES_AUTOCOMP = "PR_GET_PROCEDURES_AUTOCOMP";
        public const string UPR_GETALL_PROCEDURE = "PR_GETALL_PROCEDURE";
        public const string UPR_VW_LANGUAGE_AUTOCOMP = "PR_GET_VWLANGUAGEAUTOCOMP";
        public const string UPR_ETHINCITY_AUTOCOMP = "PR_GET_ETHINCITY_AUTOCOMP";
        public const string UPR_SEX_AUTOCOMP = "PR_GET_SEX_AUTOCOMP";
        public const string UPR_SEXUAL_PREFERENCE_AUTOCOMP = "PR_GET_SEXUALAUTOCOMP";
        public const string UPR_RELIGION_AUTOCOMP = "PR_GET_RELIGION_AUTOCOMP";
        public const string UPR_INSUPD_DOCTORTREATPREF = "PR_INSUPD_DOCTORTREATPREF";
        public const string UPR_GETALL_DOCTORTREATPREF = "PR_GETALL_DOCTORTREATPREF";
        public const string UPR_GET_DOCTORTREATPREF_BYID = "PR_GET_DOCTORTREATPREF_BYID";
        public const string UPR_DEL_DOCTORPREFERENCE = "PR_DEL_DOCTORPREFERENCE";
        /// <summary>
        /// DOCTOR HOSPITALS
        /// </summary>
        /// 
        public const string UPR_INSUPD_DOCTORHOSPITAL = "PR_INSUPD_DOCTORHOSPITAL";
        public const string UPR_DEL_DOCTORHOSPITAL = "PR_DEL_DOCTORHOSPITAL";
        public const string UPR_GET_DOCTORHOSPITAL = "PR_GET_DOCTORHOSPITAL";
        public const string UPR_GETALL_DOCTORHOSPITAL = "PR_GETALL_DOCTORHOSPITAL";


        #endregion

        #region RoomMaster

        public const string UPR_GETALL_ROOMMASTER = "PR_GETALL_ROOM";
        public const string UPR_INSUPD_ROOMMASTER = "PR_INSUPD_ROOM";
        public const string UPR_DEL_ROOMMASTER = "PR_DEL_ROOM";
        public const string UPR_AUTO_COMPL_ROOMNAMES = "PR_GET_ROOM_AUTOCOMPLTE";
        public const string UPR_GETALL_ROOMS_PREFIX = "PR_GET_ROOMPRFIX";
        public const string UPR_GET_ROOMMASTER_ONID = "PR_GET_ROOM";

        #endregion

        #region WARDS

        public const string UPR_GETALL_WARDS = "PR_GETALL_WARD";
        public const string UPR_GET_WARDS = "PR_GET_WARDS";
        public const string UPR_GETALL_WARDS_LOOKUP = "PR_GET_WARD_PAGE_ADVANCE";

        #endregion

        #region ROOMSTATUS

        public const string UPR_GETALL_ROOMSTATUS = "PR_GETALL_ROOMSTATUSPAGE";
        public const string UPR_DEL_ROOMSTATUS = "PR_DEL_ROOMSTATUS";
        public const string UPR_INSUPD_ROOMSTATUS = "PR_INSUPD_ROOMSTATUS";
        public const string UPR_GET_ROOMSTATUS_ONID = "PR_GET_ROOMSTATUS";
        public const string UPR_GET_ROOMS = "PR_GET_ROOMS";

        #endregion

        #region FLOORS

        public const string UPR_GETALL_FLOORS = "PR_GETALL_FLOOR";
        public const string UPR_INSUPD_FLOORS = "PR_INSUPD_FLOOR";
        public const string UPR_DEL_FLOOR = "PR_DEL_FLOOR";
        public const string UPR_GET_FLOOR = "PR_GET_FLOOR";

        #endregion

        #region BLOCK

        public const string UPR_GETALL_BLOCKS = "PR_GETALL_BLOCK";
        public const string UPR_INSUPD_BLOCK = "PR_INSUPD_BLOCK";
        public const string UPR_DEL_BLOCK = "PR_DEL_BLOCK ";
        public const string UPR_GET_BLOCK_ONID = "PR_GET_BLOCK";

        #endregion

        #region Bed Master

        public const string UPR_INSUPD_BEDMASTER = "PR_INSUPD_BED";
        public const string UPR_GET_BEDBYID = "PR_GET_BEDBYID";
        public const string UPR_GETBED_INPAGEING = "PR_GETALL_BED";
        public const string UPR_DEL_BED = "PR_DEL_BED";
        public const string UPR_GETROOMID = "PR_GETROOMINFO";
        public const string UPR_GETCOLUMNBYSEARCH_BED = "PR_GET_BEDCOLUMNBASED";
        public const string UPR_GET_BED_AUTOCOMPLTE = "PR_GET_BED_AUTOCOMPLTE";
        public const string UPR_GET_BEDTYPE = "PR_GET_BEDTYPE";

        #endregion

        #region BedManagement

        public const string UPR_GET_WARDS_DETAILS = "PR_GET_WARDS_DETAILS";

        #endregion

        #region REFERRAL

        public const string UPR_DEL_ALLREFERALS = "PR_DEL_ALLREFERALS";
        public const string UPR_GETALL_REFERALS = "PR_GETALL_REFERALS";
        public const string UPR_GETALL_REFERRALTYPES = "PR_GETALL_REFERRALTYPES";
        public const string UPR_GET_SEARCH_REFERINFO = "GN.PR_Get_Search_ReferInfo";

        #endregion

        #region ORGANIZATION

        public const string UPR_INSUPD_ORGANIZATION = "PR_INSUPD_ORGANIZATION";
        public const string UPR_GETALL_ORGANIZATIONS = "PR_GETALL_ORGANIZATION";
        public const string UPR_GET_ORG_BYID = "PR_GET_ORGANIZATION";
        public const string UPR_DELETE_ORGBY_ID = "PR_DEL_ORGANIZATION";
        public const string UPR_GET_AUTOCOMPLETE_ORG = "PR_GET_ORGANIZATIONAUTOCOMP";
        public const string UPR_GET_ORG_COLUMNBASED = "PR_GET_ORGANIZATIONPREFIX";
        public const string UPR_GETALL_EXCHANGE = "PR_GET_EXCHANGE";

        #endregion

        #region SECURITY AND IDENTITY  -- USER
        public const string UPR_GET_QUICKLINK_DOCUMENT = "PR_GET_QUICKLINK_DOCUMENT";
        public const string UPR_INSUPD_QUICKLINK = "PR_INSUPD_USER_QUICK_LINKS";

        public const string UPR_GET_USER_QUICK_LINKS_MODULE = "PR_GET_USER_QUICK_LINKS_MODULE";

        public const string UPR_GET_USER_QUICK_LINKS = "PR_GET_USER_QUICK_LINKS";
        public const string UPR_GET_USER_QUICK_LINKS_BYID = "PR_GET_USER_QUICK_LINKS_BYID";

        public const string UPR_GETALL_DOCUMENT = "PR_GETALL_DOCUMENT";
        public const string UPR_GET_DOCUMENTS_BY_ROLES = "PR_GET_DOCUMENTS_BY_ROLES";
        public const string UPR_DEL_MODULE = "PR_DEL_MODULE";
        public const string UPR_SEARCH_DOCUMENTBY_MODID = "PR_GET_MODULE_DOC";
        public const string UPR_GET_MODULE_PAGE = "PR_GET_MODULE_PAGE";
        public const string UPR_GET_MODULEDETAILS = "PR_GET_MODULEDETAILS";
        public const string UPR_DEL_ROLE = "PR_DEL_ROLE";
        public const string UPR_GET_CHECK_USERNAME = "PR_GET_CHECK_USERNAME";
        public const string UPR_GET_CHECK_ROLENAME = "PR_GET_CHECK_ROLENAME";
        public const string UPR_GET_ROLEINFOCOLUMNBASED = "PR_GET_ROLEINFOCOLUMNBASED";
        public const string UPR_GETLOC_BYUID = "PR_GETLOC_BYUID";
        public const string UPR_GET_USER_LOC_ROLE_BYID = "PR_GET_USER_LOC_ROLE_BYID";
        public const string UPR_GET_ROLEINFO_ID = "PR_GET_ROLEINFO_ID";
        public const string UPR_GET_USERGROUPINFOCOLUMNBASED = "PR_GET_USERGROUPINFOCOLUMNBASED";
        public const string UPR_INSUPD_USER_GROUP = "PR_INSUPD_USER_GROUP";
        public const string UPR_GET_USER_GROUPBYID = "PR_GET_USER_GROUP_FPNL";
        public const string UPR_DEL_USER_GROUP = "PR_DEL_USER_GROUP";
        public const string UPR_GET_CHCK_USERGRPCD = "PR_GET_CHCK_USERGRPCD";
        public const string UPR_GET_USERGROUP = "PR_GET_USERGROUP";
        public const string UPR_GET_ALLUSERSGROUPS = "PR_GET_ALLUSERSGROUPS";
        public const string UPR_INSUPD_USER = "PR_INSUPD_USERS";
        public const string UPR_INSUPD_USER_LOC_ROLE = "PR_INSUPD_USER_LOC_ROLE";
        public const string UPR_GET_USER = "PR_GET_USERPAGELIST";
        public const string UPR_GET_ROLEPAGELIST = "PR_GET_ROLEPAGELIST";
        public const string UPR_GET_ROLE = "PR_GET_ROLE";
        public const string UPR_INSUPD_USERGROUP = "PR_INS_USER_GROUP";
        public const string UPR_GET_USERINFOCOLUMNBASED = "PR_GET_USERINFOCOLUMNBASED";
        public const string UPR_DEL_USER = "PR_DEL_USER";
        public const string UPR_GET_USERS_INFO_BYID = "PR_GET_USERS_INFO_BYID";
        public const string UPR_GET_USERS_ROLE_INFO_BYID = "PR_GET_USERS_ROLE_INFO_BYID";
        public const string UPR_GET_CHCK_MODULECD = "PR_GET_CHCK_MODULECD";
        public const string UPR_INSUPD_DOCUMENT = "PR_INSUPD_DOCUMENT";
        public const string UPR_GET_CHCK_DOCCD = "PR_GET_CHCK_DOCCD";
        public const string UPR_GET_MODULEIDMULT = "PR_GET_MODULEIDMULT";
        //public const string UPR_GET_MODULEIDMULT = "PR_GET_MODULEDOC";
        public const string UPR_GETALL_MODULE = "PR_GETALL_MODULE";
        public const string UPR_GETALL_MODULELIST = "PR_GETALL_MODULELIST";
        public const string UPR_GET_ASSUNASSDOCBYMODULE = "PR_GET_MODULEDOC";
        public const string UPR_GET_SUBMODULES = "PR_GET_SUBMODULES";
        public const string UPR_INS_SUBMODULES = "PR_INSUPD_MODULEDOC";
        public const string UPR_GET_VWUSERMODULE = "HIMS.PR_GET_VWUSERMODULE";
        public const string UPR_GET_USER_MOD_DOC_ALL = "PR_GET_USER_MOD_DOC_ALL";
        //public const string UPR_GET_USER_MOD_DOC_ALL_NEW = "PR_GET_USER_MOD_DOC_ALL_NEW";
        public const string UPR_GET_USER_MOD_DOC_ALL_WITH_ASSIGN = "PR_GET_USER_MOD_DOC_ALL_WITH_ASSIGN";
        public const string UPR_GET_DOCUMENTS_BY_ROLEMOD = "PR_GET_DOCUMENTS_BY_ROLEMOD";
        public const string UPR_GET_REFERENCE_TYPE = "PR_GET_REFERENCE_TYPE";
        public const string UPR_GET_SUBMODULES_MULT = "PR_GET_SUBMODULES_MULT";
        public const string UPR_GET_MODULEDOC_MULT = "PR_GET_MODULEDOC_MULT";
        public const string UPR_GET_USER_DOC_AUDIT_BYDATE = "PR_GET_USER_DOC_AUDIT_BYDATE";
        public const string UPR_CHECK_DOC_AVA = "PR_CHECK_DOC_AVA";
        #endregion

        #region Service Percentage SetUp

        public const string PR_INSUPD_SERVICE_PERCENTAGE_SETUP = "PR_INSUPD_SERVICE_PERCENTAGE_SETUP";
        public const string PR_GET_SERVICE_PERCENTAGE_SETUPDETAILS = "PR_GET_SERVICE_PERCENTAGE_SETUPDETAILS";

        #endregion

        #region ORGANIZATION BANK

        public const string UPR_INSUPD_ORGBANK = "PR_INS_ORGANIZATIONBANKACCOUNT";
        public const string UPR_GETALL_BANKS_PAGING = "PR_GETALL_BANK";
        public const string UPR_GETALL_ORGBANKS = "PR_GETALL_ORGANIZATION_BANK_ACCOUNT";
        public const string UPR_GETALL_BANKS = "PR_GET_BANK";
        public const string UPR_GET_BANK_ID = "PR_GET_BANKID";
        public const string UPR_GET_BANK_COLUMN_BASED = "PR_GET_BANKAUTOCOMPLETE";
        public const string UPR_DEL_ORGBANK = "PR_DEL_ORGANIZATIONBANKACCOUNT";
        public const string UPR_GET_ORG_BANK = "PR_GET_ORGANIZATIONBANKACCOUNT";
        public const string UPR_INSUPD_BANK = "PR_INSUPD_BANK";
        public const string UPR_GET_AUTO_BANKS = "PR_GET_AUTO_BANKS";

        #endregion

        #region SERVICEMODULE PRENEXT RECORDS

        public const string UPR_GET_NXTPRE_REC_IDS = "PR_GET_GENERAL_VIEW_FPNL";

        #endregion

        #region Departments
        public const string UPR_GETALL_DEPT_PAGING = "PR_GETALL_DEPARTMENTS";
        #endregion

        #region FO_RECPAY

        public const string UPR_GET_IP_BILL_DETAIL = "PR_GET_IP_BILL_DET";
        public const string UPR_GET_REFUND_DET = "PR_GET_REFUND_DET";
        public const string UPR_GET_FO_RECPAY_REF = "PR_GET_FO_RECPAY_REF";
        public const string UPR_GET_FO_RECPAY_REF_IP = "PR_GET_FO_RECPAY_REF_IP";
        public const string UPR_GET_FO_RECPAY_REF_ADV = "PR_GET_FO_RECPAY_REF_ADV";
        public const string UPR_GET_PRE_ADVANCE_DET = "PR_GET_PRE_ADVANCE_DET";
        public const string UPR_INSUPD_ADDRECEIPT = "PR_INSUPD_ADDRECEIPT";
        public const string UPR_GETALL_RECEIPTS_PAGING = "PR_GETALL_RECEIPTS_PAGING";
        public const string UPR_DELETE_RECEIPT = "PR_DEL_RECEIPT";
        public const string UPR_UPD_APPROVE_STATUS = "PR_UPD_APPROVE_STATUS";
        public const string UPR_GETALL_PAT_RECEIPTS = "PR_GETALL_PAT_RECEIPTS";
        public const string UPR_GET_RECEIPT_DET_ONID = "PR_GET_RECEIPT_DET_ONID";
        public const string UPR_GET_BILL_DETAILS = "PR_GET_BILL_DETAIL_ON_ID";
        public const string UPR_GET_PATIENT_PRE_CONSULTATIONS = "PR_GET_PATIENT_PRE_CONSULTATIONS";
        public const string UPR_GETALL_BILLS_DET_ONID = "PR_GETALL_BILLS_ONID";
        public const string UPR_GET_RECEIPT_COLUMN_BASED = "PR_GET_RECEIPT_COLUMN_BASED";
        public const string UPR_GET_RECEIPTS_AUTO_COMP = "PR_GET_RECEIPTS_AUTO_COMP";
        public const string UPR_GET_RECEIPTS_TYPES_AUTO_COMP = "PR_GETALL_BILLS_AUTO";

        public const string UPR_GET_DOCTOR_PAY_BY_SERVICE = "PR_GET_DOCTOR_PAY_BY_SERVICE";
        public const string UPR_GETALL_ADVANCE_TYPES = "PR_GETALL_ADVANCE_TYPE";
        public const string PR_INSERT_FO_RECPAY_REF = "PR_INSERT_FO_RECPAY_REF";
        public const string PR_GET_RECEIPT_COLUMN_LEVEL = "PR_GET_RECEIPT_COLUMN_LEVEL";
        public const string PR_GET_FO_RECPAY = "PR_GET_FO_RECPAY";
        public const string UPR_INS_IP_FINAL_BILL = "PR_INS_IP_FINAL_BILL";
        public const string UPR_GET_BED_STATUS_DET_BASEDON_ADMN_NO = "PR_GET_BED_STATUS_DET_BASEDON_ADMN_NO";
        public const string UFINAL_BILL_APPROVAL = "FINAL_BILL_APPROVAL";
        public const string UPR_INSUPD_FO_RECPAY_XML = "PR_INSUPD_FO_RECPAY_XML";
        public const string UPR_UPD_APPROVE_TRANSACTION = "PR_UPD_APPROVE_TRANSACTION";
        #endregion

        #region FO_BILL_DET
        public const string UPR_BILL_SETMNT_AUTO = "PR_BILL_SETMNT_AUTO";
        public const string UFO_BILL_CANCL_AUTO = "FO_BILL_CANCL_AUTO";
        public const string UPR_GET_RECPAY_CNCL_AUTO = "PR_GET_RECPAY_CNCL_AUTO";
        public const string UPR_GET_FO_BILL_DETAIL = "PR_GET_FO_BILL_DETAIL";
        public const string UPR_GETALL_BILLNUMBERS = "PR_GET_BILL_DETAILS";
        public const string UPR_GETALL_BILLNUMBERS_RID = "PR_GETALL_TRANSACTION_NO_RID";
        public const string UPR_GET_BILLS_AUTO_COMP = "PR_GET_BILLS_AUTO_COMP";
        public const string UPR_GET_BILL_COLUMN_BASED = "PR_GET_BILL_COLUMN_BASED";
        public const string UPR_INSUPD_BILL_DET = "PR_INSUPD_BILL_DET";
        public const string UPR_GET_BILL_DET = "PR_GET_BILL_DET_ON_ID";
        public const string UPR_GET_PRE_REFUND_DET = "PR_GET_PRE_REFUND_DET";
        public const string UPR_GET_CONSULTATIONS_HISTORY = "PR_GET_CONSULTATIONS_HISTORY";
        public const string UPR_PR_GET_OP_BILL_REPORT = "PR_GET_OP_BILL_REPORT";
        public const string UPR_UPDATE_FO_BILL_DET = "PR_UPDATE_FO_BILL_DET";
        public const string UPR_GETALL_REFUND_REPORT = "PR_GETALL_REFUND_REPORT";
        public const string UPR_INSUPD_ADT_PRE_AUTH = "PR_INSUPD_ADT_PRE_AUTH";
        public const string UPR_GETALL_ADT_PRE_AUTH = "PR_GETALL_ADT_PRE_AUTH";

        #endregion

        #region SERVICE DIMENSSIONS(ENUMERATED SP'S)

        public const string UPR_GETALL_VOUCHER_TYPES = "PR_GETALL_VOUCHER_TYPE";
        public const string UPR_GETALL_REFND_TYPES = "PR_GET_PAYMENT_REFERENCE_TYPE";
        public const string UPR_GETALL_RECP_TYPES = "PR_GET_RECEIPT_REFERENCE_TYPE";
        public const string UPR_GETALL_CARD_TYPES = "PR_GET_CARD_TYPE";
        public const string UPR_GETALL_AC_MODE_TYPES = "PR_GET_ACCOUNT_OPE_MODES";
        public const string UPR_GETALL_ACCTYPES = "PR_GETALL_ACCOUNT_TYPES";
        public const string UPR_GETALL_REG_AUTHORITY = "";
        public const string UPR_GETALL_ACCRE_STATUS = "PR_GETAll_ACCR_STATUS";
        public const string UPR_GET_EXCHANGE = "PR_GET_EXCHANGE";
        public const string UPR_GET_NATUREOFBUSS = "PR_GET_NATUREOFBUSINESS";
        public const string UPR_GETALL_SCOPE_OF_BUSINESS = "PR_GETALL_SCOPE_OF_BUSINESS";
        public const string UPR_GETALL_DOCTOR_CAT = "PR_GETALL_DOCTOR_CAT";
        public const string UPR_GETALL_COVERAGE_CLASS = "PR_GET_COVERAGECLASS";
        public const string UPR_GETALL_SERVICECLASSES = "PR_GETALL_SERVICECLASS";
        public const string STP_GETDIMENSSIONS = "PR_GET_DIMENSSIONS";
        public const string UPR_GETALL_SERVICE_TYPE_VW = "PR_GETALL_SERVICE_TYPE_VW";
        public const string UPR_GETALL_SERVICEPRICE_CLASS_VW = "PR_GETALL_SERVICEPRICE_CLASS_VW";
        public const string UPR_GETALL_CATEGORIES_VW = "PR_GETALL_CATEGORIES_VW";
        public const string UPR_GET_DOCTORS = "PR_GET_DOCTORS";
        public const string UPR_GET_TARIFFS = "PR_GET_TARIFFS";
        public const string UPR_GET_TYPE_OF_CONSULTATION = "PR_GET_CONSULTATIONTYPES";
        public const string UPR_GET_WARDGROUPS = "PR_GET_WARDGROUPS";
        public const string UPR_GET_GENERAL_WARDGROUPS = "PR_GET_WARD_GROUPS";
        public const string UPR_GETALL_REFERAL_SOURCE = "PR_GETALL_REFERALSOURCE";
        public const string UPR_GETALL_BILL_TYPE = "PR_GETALL_BILL_TYPE";
        public const string UPR_GETALL_CREDIT_TYPE = "PR_GETALL_CREDIT_TYPE";
        public const string UPR_GETALL_CONCESSION_ON = "PR_GETALL_CONCESSION_ON";
        public const string UPR_GETALL_CONCESSION_TYPE = "PR_GETALL_CONCESSION_TYPE";
        public const string UPR_GETALL_AUTH_FOR_TRAN = "PR_GETALL_AUTH_FOR_TRAN";

        #endregion

        #region ADT_IMR

        public const string UPR_GET_IP_SERVICE_DETAILS = "PR_GET_IP_SERVICE_DETAILS";
        public const string UPR_GET_IP_SERVICES_FINAL = "PR_GET_IP_SERVICES_FINAL";
        public const string UPR_GET_IP_FINAL_WITH_PHARMACY = "PR_GET_IP_FINAL_WITH_PHARMACY";
        public const string UPR_GET_SRV_ADMN_DETL = "PR_GET_SRV_ADMN_DETL";
        #endregion

        #region Laboratory
        public const string UPR_INSUPD_LAB_QUICK_SETTINGS = "PR_INSUPD_LAB_QUICK_SETTINGS";
        public const string UGet_STPID_USER = "Get_STPID_USER";
        public const string UPR_VACCUTAINER_AUTO = "PR_VACCUTAINER_AUTO";
        public const string UPR_UPD_ASSAY_SPEC_COL_SRV = "PR_UPD_ASSAY_SPEC_COL_SRV";
        public const string UPR_UPD_ASSAY_SPEC_COL_SRV_GROSS = "PR_UPD_ASSAY_SPEC_COL_SRV_GROSS";
        public const string UPR_INSUPD_LABNUMBER = "PR_INSUPD_LABNUMBER";
        public const string UPR_GET_BILL_SERVICES_ASSAY_SAMPREC = "PR_GET_BILL_SERVICES_ASSAY_SAMPREC";
        public const string UPR_GET_PATIENTSERVICEDETAILS_IP = "PR_GET_PATIENTSERVICEDETAILS_IP";
        public const string UPR_GET_BILL_SERVICES_ASSAY_SAMPREC_IP = "PR_GET_BILL_SERVICES_ASSAY_SAMPREC_IP";
        public const string UPR_GET_SAMPLE_RECEIVE = "PR_GET_SAMPLE_RECEIVE";
        public const string UPR_GET_DOC_AVA_REPORT = "PR_GET_DOC_AVA_REPORT";
        public const string UPR_GET_COM_MSG_MESSAGE = "PR_GET_COM_MSG_MESSAGE";
        public const string UPR_GET_SPECIMENSERVICEDETAILS_BARCD_GEN = "PR_GET_SPECIMENSERVICEDETAILS_BARCD_GEN";
        public const string UPR_GET_BILLBETWEENDATES_BARCODE_GEN = "PR_GET_BILLBETWEENDATES_BARCODE_GEN";
        public const string UPR_GET_WORKFLOW_IMAGE = "PR_GET_WORKFLOW_IMAGE";
        public const string UPR_GETALL_WORKFLOW = "PR_GETALL_WORKFLOW";
        public const string UPR_GETALL_NOTETYPES = "PR_GETALL_NOTETYPES";
        public const string UPR_GET_NOTESBYSERVICE = "PR_GET_NOTESBYSERVICE";
        public const string UGET_FONT = "GET_FONT";
        public const string UGET_COLOUR = "GET_COLOUR";
        public const string UPR_GETALL_ASSAY_TEMPLATE = "PR_GETALL_ASSAY_TEMPLATE";
        public const string UPR_GETALL_ASSAY_TEMPLATE_AUTO = "PR_GETALL_ASSAY_TEMPLATE_AUTO";
        public const string UPR_GET_SAMPLE_ACK_ADVANCE = "PR_GET_SAMPLE_ACK_ADVANCE";
        public const string UPR_GET_SAMPLE_ACK_AUTO = "PR_GET_SAMPLE_ACK_AUTO";
        public const string UPR_GET_RECEIVE_ITEMS = "PR_GET_RECEIVE_ITEMS";
        public const string UPR_GET_SENDER_ITEMS = "PR_GET_SENDER_ITEMS";
        public const string UPR_GET_ASSAY_STATE_NAME = "PR_GET_ASSAY_STATE_NAME";
        public const string UPR_GETALL_SERVICE_AUTO = "PR_GETALL_SERVICE_AUTO";
        public const string UPR_GET_VW_SAMPLE_DETAILS_ORGANISIM = "PR_GET_VW_SAMPLE_DETAILS_ORGANISIM";
        public const string UPR_GET_ASSAY_ACK = "PR_GET_ASSAY_ACK";
        public const string UPR_GET_SERVICE_STATUS_COUNT = "PR_GET_SERVICE_STATUS_COUNT";
        public const string UPR_GET_SERVICE_STATUS = "PR_GET_SERVICE_STATUS";
        public const string UPR_GET_ANTIBIOTICS = "PR_GET_ANTIBIOTICS";
        public const string UPR_GET_SERVICE_LABNO = "PR_GET_SERVICE_LABNO";
        public const string UPR_GET_ORGANISMS = "PR_GET_ORGANISMS";

        public const string UPR_DEL_BUS_PRTNR_SRV_PRICE_ID = "PR_DEL_BUS_PRTNR_SRV_PRICE_ID";
        public const string UPR_GET_OUTSIDE_SERVICES = "PR_GET_OUTSIDE_SERVICES";

        public const string UPR_GET_BUS_PRTNR_SRV_PRICE_ID = "PR_GET_BUS_PRTNR_SRV_PRICE_ID";

        public const string UPR_GET_BILLBETWEENDATES_OUTSIDESERVICE = "PR_GET_BILLBETWEENDATES_OUTSIDESERVICE";

        public const string UPR_GET_PATIENT_PARAMETER_INFO = "PR_GET_PATIENT_PARAMETER_INFO";
        public const string UPR_GET_SERVICESINFOFORPATIENT = "PR_GET_VW_ASSAY_BILL_DETAILS";
        public const string UPR_GET_SERVICES = "PR_GET_SERVICES";
        public const string UPR_UPD_FO_BILL_DET_IS_OUTSIDE_SERVICE = "PR_UPD_FO_BILL_DET_IS_OUTSIDE_SERVICE";
        public const string UPR_UPD_PARTNERID = "PR_UPD_PARTNERID";
        public const string UPR_GETALL_ASSAY_RESULTAUTO = "PR_GETALL_ASSAY_RESULTAUTO";
        public const string UPR_INSUPD_BUS_PRTNR_SRV_PRICE = "PR_INSUPD_BUS_PRTNR_SRV_PRICE";
        public const string UPR_GETALL_SERVICE_PRICE_ORG_LEVEL = "PR_GETALL_SERVICE_PRICE_ORG_LEVEL";
        public const string UPR_GETALL_BUS_PRTNR_SRV_PRICE = "PR_GETALL_BUS_PRTNR_SRV_PRICE";
        public const string UPR_GETALL_DEPT_DOC = "PR_GET_DEPT_DOC_PAGE";
        public const string UPR_INSUPD_DEPT_DOC = "PR_INSUPD_DEPT_DOC";
        public const string UPR_INSUPD_LABPRINT_SETUP = "PR_INSUPD_LABPRINTSETUP";
        public const string UPR_GETALL_DEPT_DOC_PAGE = "PR_GETALL_DEPT_DOC_PAGE";
        public const string UPR_DEL_DEPT_DOC_ONLY = "PR_DEL_DEPT_DOC_ONLY";


        public const string UPR_GET_OTHERHOSMAPPING = "PR_GET_OTHERHOSMAPPING";

        public const string UPR_GETALL_ASSAY_RESULT_DISPATCH = "PR_GETALL_ASSAY_RESULT_DISPATCH";
        public const string UPR_GETALL_ASSAY_RESULT_APPROVALS = "PR_GETALL_ASSAY_RESULT_APPROVALS";
        public const string UPR_GETALL_ASSAY_RESULT_VERIFICATIONS = "PR_GETALL_ASSAY_RESULT_VERIFICATIONS";


        public const string UPR_GET_ASSAY_DISPATCH_SERVICES = "PR_GET_ASSAY_DISPATCH_SERVICES";

        public const string UPR_INS_ASSAY_PROCESS = "PR_INS_ASSAY_PROCESS";
        public const string UPR_GET_ASSAY_DISPATCH_BILLS = "PR_GET_ASSAY_DISPATCH_BILLS";

        public const string UPR_GET_ASSAY_FORMAT_COM_RESULT = "PR_GET_ASSAY_FORMAT_COM_RESULT";

        public const string UPR_GET_ASSAY_VERIFICATION_SERVICES = "PR_GET_ASSAY_VERIFICATION_SERVICES";
        public const string UPR_GET_ASSAY_APPROVAL_SERVICES = "PR_GET_ASSAY_APPROVAL_SERVICES";

        public const string UPR_GET_ASSAY_APPROVAL_BILLS = "PR_GET_ASSAY_APPROVAL_BILLS";

        public const string UPR_GET_ASSAY_VERIFICATION_BILLS = "PR_GET_ASSAY_VERIFICATION_BILLS_NEW";//"PR_GET_ASSAY_VERIFICATION_BILLS";


        public const string UPR_GETALL_BUSINESSPARTNERS = "PR_GETALL_BUSINESSPARTNERS";

        public const string UPR_GETALL_TEMPLATE_SERVICES = "PR_GETALL_TEMPLATE_SERVICES";

        public const string UPR_GET_SERVICESBYGROUP_AUTO = "PR_GET_SERVICESBYGROUP_AUTO";
        public const string UPR_GETALL_SERVICESBYGROUPID_AUTO = "PR_GETALL_SERVICESBYGROUPID_AUTO";
        public const string UPR_GET_ASSAYDETAILS_RESULTENTRY = "PR_GET_ASSAY_DETAILS_RESULTENTRY";

        public const string UPR_GETALL_WORKFLOWS = "PR_GETALL_WORKFLOWS";
        public const string UPR_GETALL_COMPONENTVALUES = "PR_GETALL_COMPONENTVALUES";
        public const string UPR_GET_ASSAY_FORMAT = "PR_GET_ASSAY_FORMAT";

        public const string UPR_ORGANISM_AUTO_ORGANISM_VALUES = "PR_ORGANISM_AUTO_ORGANISM_VALUES";
        public const string UPR_ORGANISM_AUTOANTIBIOTICS = "PR_ORGANISM_AUTOANTIBIOTICS";
        public const string UPR_ORGANISM_AUTOSERVICEGROUPS = "PR_ORGANISM_AUTOSERVICEGROUPS";
        public const string UPR_GETALL_ORGANISMS = "PR_GETALL_ORGANISMS";
        public const string UPR_GETALL_SPECIMENS = "PR_GETALL_SPECIMENS";
        public const string UPR_GETALL_ANTIBIOTICS = "PR_GETALL_ANTIBIOTICS";
        public const string UPR_GETALL_SERVICE_GROUPS = "PR_GETALL_SERVICE_GROUPS";
        public const string UPR_GETALL_EXISTING_ORGANISMS = "PR_GETALL_EXISTING_ORGANISMS";
        public const string UPR_INSUPD_ANTIBIOTIC_HEADER = "PR_INSUPD_ANTIBIOTIC_HEADER";
        public const string UPR_InsUpd_ANTIBIOTIC_DET = "PR_InsUpd_ANTIBIOTIC_DET";
        public const string UPR_GET_ANTIBIOTICS_BY_ORGANISMID = "PR_GET_ANTIBIOTICS_BY_ORGANISMID";
        public const string UPR_SPECIMENS_AUTOANTIBIOTICS = "PR_SPECIMENS_AUTOANTIBIOTICS";
        public const string UPR_GET_ASSAY_BY_SERVICE_GROUPID = "PR_GET_ASSAY_BY_SERVICE_GROUPID";
        public const string UPR_GET_SERVICES_BYSERVICEGROUPID = "PR_GET_SERVICES_BYSERVICEGROUPID";
        public const string UPR_GETALL_VACTAINERS = "PR_GETALL_VACTAINERS";
        public const string UPR_INSUPD_ASSAY = "PR_INSUPD_ASSAY";
        public const string UPR_GET_TEST_SPECIMENS = "PR_GET_TEST_SPECIMENS";
        public const string UPR_GET_ANTIBIOTIC_SETUPS = "PR_GET_ANTIBIOTIC_SETUPS";
        public const string UPR_INSUPD_COMPONENT_VALUE_SET = "PR_INSUPD_COMPONENT_VALUE_SET";
        public const string UPR_INSUPD_COMPONENT_VALUE = "PR_INSUPD_COMPONENT_VALUE";
        public const string UPR_GETALL_COMPONENTMULTIPLES = "PR_GETALL_COMPONENTMULTIPLES";
        public const string UPR_GETALL_METHODS = "PR_GETALL_METHODS";
        public const string UPR_INSUPD_COMPONENT = "PR_INSUPD_COMPONENT";
        public const string UPR_GET_GENDERS = "PR_GET_GENDERS";
        public const string UPR_GET_OPERATORS = "PR_GET_OPERATORS";
        public const string UPR_GET_UOMS = "PR_GET_UOMS";
        public const string UPR_INSUPD_COMPONENT_NORMAL_VALUE = "PR_INSUPD_COMPONENT_NORMAL_VALUE";
        public const string UPR_GETALL_PARAMETERSLIST = "PR_GETALL_PARAMETERSLIST";
        public const string UPR_GETALL_PARAMETERMULTIPLEVALUESLIST = "PR_GETALL_PARAMETERMULTIPLEVALUESLIST";
        public const string UPR_GET_COMPONENTCONTROLS = "PR_GET_COMPONENTCONTROLS";
        public const string UPR_INSUPD_ASSAY_FORMAT_DOC = "PR_INSUPD_ASSAY_FORMAT_DOC";
        public const string UPR_GET_ASSAY_FORMAT_DOC = "PR_GET_ASSAY_FORMAT_DOC";

        public const string UPR_INSUPD_ASSAY_SAMPLE = "PR_INSUPD_ASSAY_SPEC_COL";
        public const string UPR_INSUPD_ASSAY_SAMPLE_SERVICE = "PR_INSUPD_ASSAY_SPEC_COL_SRV";
        public const string UPR_GET_PATIENTSERVICEDETAILS = "PR_GET_PATIENTSERVICEDETAILS";
        public const string UPR_GET_BILLBETWEENDATES = "PR_GET_BILLBETWEENDATES";
        public const string UPR_GET_ASSAY_SAMPLE = "PR_GET_ASSAY_SPEC_COL";
        public const string UPR_GETALL_ASSAY_SAMPLE = "PR_GETALL_ASSAY_SAMPLE";
        public const string UPR_GET_SPECIMENSERVICEDETAILS = "PR_GET_SPECIMENSERVICEDETAILS";
        public const string UPR_TESTSPECIMEN = "PR_TESTSPECIMEN";
        public const string UPR_ANTIBIOTICSETUPLIST = "PR_ANTIBIOTICSETUPLIST";
        public const string UPR_PARAMMULTIPLEVALUE = "PR_PARAMMULTIPLEVALUE";
        public const string UPR_PARAMETERSAUTOCOMP = "PR_PARAMETERSAUTOCOMP";
        public const string UPR_GETALL_TESTSPECIMENSETUPS = "PR_GETALL_TESTSPECIMENSETUPS";
        public const string UPR_GETALL_COMPONENTS = "PR_GETALL_COMPONENTS";
        public const string UPR_DEFAULTDOCTOR_AUTOCOMP = "PR_GET_ASSAY_FORMAT_DOC_AUTO";
        public const string UPR_INSUPD_ASSAY_FORMAT = "PR_INSUPD_ASSAY_FORMAT";
        public const string UPR_INSUPD_ASSAY_FORMAT_COMP = "PR_INSUPD_ASSAY_FORMAT_COMP";
        public const string UPR_GET_FORMAT_SETUPS = "PR_GET_FORMAT_SETUPS";
        public const string UPR_GET_NTIBIOTIC_HEADER = "PR_GET_NTIBIOTIC_HEADER_FPNL";
        public const string UPR_GET_ANTIBIOTIC_DET = "PR_GET_ANTIBIOTIC_DET";
        public const string UPR_GET_COMPONENT_FPNL = "PR_GET_COMPONENT_FPNL";
        public const string UPR_GET_COMPONENT_DETAILS = "PR_GET_COMPONENT_DETAILS";
        public const string UPR_GET_FORMATS_BYSERVICEID = "PR_GET_FORMATS_BYSERVICEID";
        public const string UPR_GET_ASSAY_TEMPLATE = "PR_GET_ASSAY_TEMPLATE";
        public const string UPR_GETALL_ASSAY_RESULT = "PR_GETALL_ASSAY_RESULT";
        public const string UPR_GETALL_ASSAY_RESULT_HL7 = "PR_GETALL_ASSAY_RESULT_HL7";

        public const string UPR_INSUPD_COMPONENT_METHOD = "PR_INSUPD_COMPONENT_METHOD";
        public const string UPR_GET_ASSAY_FORMAT_COMP2 = "PR_GET_ASSAY_FORMAT_COMP2";
        public const string UPR_GET_COMPONENT_VALUE_SET = "PR_GET_COMPONENT_VALUE_SET";
        public const string UPR_INSUPD_ASSAY_TEMPLATE = "PR_INSUPD_ASSAY_TEMPLATE";
        public const string UPR_INSUPD_ASSAY_TEMPLATE_COMP = "PR_INSUPD_ASSAY_TEMPLATE_COMP";
        public const string UPR_INSUPD_ASSAY_RESULT = "PR_INSUPD_ASSAY_RESULT";
        public const string UPR_InsUpd_ASSAY_RESULT_SERVICE = "PR_INSUPD_ASSAY_RESULT_SRV";
        public const string UPR_GET_ASSAY_SAMPLE_BILLS = "PR_GET_ASSAY_SAMPLE_BILLS";

        public const string UPR_GET_METHODS = "PR_GET_METHODS";
        public const string UPR_INSUPD_ASSAY_RESULT_SRV_STAT = "PR_INSUPD_ASSAY_RESULT_SRV_STAT";
        public const string UPR_INSUPD_ASSAY_RESULT_COMP = "PR_INSUPD_ASSAY_RESULT_SRV_COMP";
        public const string UPR_GET_ASSAYDETAILS = "PR_GET_ASSAY_DETAILS";
        public const string UPR_GET_ASSAY_FORMAT_COMDETAILS = "PR_GET_ASSAY_FORMAT_COMDETAILS";
        public const string UPR_GET_LAB_TECHINICiANS = "PR_GET_LAB_TECHINICiANS";
        public const string UPR_GET_COMMUL_VALUES = "PR_GET_COMMUL_VALUES";
        public const string UPR_GET_ASSAY_FORMAT_TEMPLATE = "PR_GET_ASSAY_FORMAT_TEMPLATE";
        public const string UPR_GET_ASSAY_SERVICEID = "PR_GET_ASSAY_SERVICEID";
        public const string UPR_INSUPD_ASSAY_CANCEL = "PR_INSUPD_ASSAY_CANCEL";
        public const string UPR_INSUPD_ASSAY_CANCEL_SERVICE = "PR_INSUPD_ASSAY_CANCEL_SERVICE";
        public const string UPR_GET_ASSAY_CANCEL = "PR_GET_ASSAY_CANCEL";
        public const string UPR_GET_LABSAMPLE_AUTHS = "PR_GET_LABSAMPLE_AUTHS";
        public const string UPR_GET_BILLBETWEENDATES_ASSAY = "PR_GET_BILLBETWEENDATES_ASSAY";
        public const string UPR_GET_BILL_SERVICES_ASSAY = "PR_GET_BILL_SERVICES_ASSAY";
        public const string UPR_GET_COMPONENT_EMTHODS = "PR_GET_COMPONENT_EMTHODS";

        public const string UPR_GET_COMPONENT_VALUE_FLNV = "PR_GET_COMPONENT_FLNV";
        public const string UPR_GET_ASSAY = "PR_GET_ASSAY";
        public const string UPR_DEL_ASSAY = "PR_DEL_ASSAY";
        public const string UPR_GET_ASSAY_FNPL = "PR_GET_ASSAY_FNPL";


        public const string UPR_DEL_COMPONENT = "PR_DEL_COMPONENT";
        public const string UPR_DEL_COMPONENT_VALUE_SET = "PR_DEL_COMPONENT_VALUE_SET";
        public const string UPR_GET_PARAMMULTIPLEVALUES = "PR_GET_PARAMMULTIPLEVALUES";
        public const string UPR_DEL_FORMATSETUPS = "PR_DEL_FORMATSETUPS";
        public const string UPR_DEL_TEMPLATSETUPS = "PR_DEL_TEMPLATSETUPS";
        public const string UPR_DEL_RESULTENTRIES = "PR_DEL_RESULTENTRIES";
        public const string UPR_DEL_SAMPLEENTRIES = "PR_DEL_SAMPLE_ENTRIES";
        public const string UPR_DEL_CANCLEENTRIES = "PR_DEL_CANCLEENTRIES";

        public const string UPR_GET_TEMPLATECOMPONENT_VIEWDATA = "PR_GET_TEMPLATECOMPONENT_VIEWDATA";
        public const string UPR_GET_TEMPLATEVIEWDATA_FNPL = "PR_GET_TEMPLATEVIEWDATA_FNPL";

        public const string UPR_GET_FORMATSETUP_COMP_VIEWDATA = "PR_GET_FORMATSETUP_COMP_VIEWDATA";
        public const string UPR_GET_FORMATSETUP_VIEWDATA = "PR_GET_FORMATSETUP_VIEWDATA";

        public const string UPR_DEL_ANTIBIOTIC_HEADER = "PR_DEL_ANTIBIOTIC_HEADER";
        public const string UPR_DEL_ANTIBIOTIC_DET = "PR_DEL_ANTIBIOTIC_DET";
        public const string UPR_GET_RESULTSERVICES_VIEWDATA = "PR_GET_RESULTSERVICES_VIEWDATA";
        public const string UPR_GET_RESULTETNRY_VIEWDATA = "PR_GET_RESULTETNRY_VIEWDATA";
        public const string UPR_GET_ASSAYFORMAT_DOC = "PR_GET_ASSAYFORMAT_DOC";
        public const string UPR_DEL_ASSAY_FORMAT_DOC = "PR_DEL_ASSAY_FORMAT_DOC";
        public const string UPR_GET_DOCTOR_DETAILS = "PR_GET_DOCTOR_DETAILS";
        public const string UPR_GET_ASSAY_FORMAT_DOC_FNPL = "PR_GET_ASSAY_FORMAT_DOC_FNPL";
        public const string UPR_GET_ANTIBIOTIC_HEADER_FPNL = "PR_GET_ANTIBIOTIC_HEADER_FPNL";
        public const string UPR_GET_ANTIBIOTIC_HEADER = "PR_GET_ANTIBIOTIC_HEADER";
        public const string UPR_GET_COMPONENT_AUTOCOMP = "PR_GET_COMPONENT_AUTOCOMP";
        public const string UPR_GET_ASSAY_TEMPLATE_AUTOCOMP = "PR_GET_ASSAY_TEMPLATE_AUTOCOMP";
        public const string UPR_GET_ASSAY_FORMAT_AUTOCOMP = "PR_GET_ASSAY_FORMAT_AUTOCOMP";
        public const string UPR_GET_ASSAY_TEMPLATE_CN = "PR_GET_ASSAY_TEMPLATE_CN";
        public const string UPR_GET_ASSAY_AUTOCOMP = "PR_GET_ASSAY_AUTOCOMP";
        public const string UPR_GET_COMPONENT_VALUE_SET_AUTOCOMP = "PR_GET_COMPONENT_VALUE_SET_AUTOCOMP";
        public const string UPR_ORGANISM = "PR_ORGANISM";
        public const string UPR_AUTOANTIBIOTICS = "PR_AUTOANTIBIOTICS";
        public const string UPR_AUTOMETHODS = "PR_AUTOMETHODS";
        public const string UPR_GET_COMPONENT_VALUE_PREF = "PR_GET_COMPONENT_VALUE_PREF";
        public const string UPR_GET_COMPONENTS = "PR_GET_COMPONENTS";
        public const string UPR_GET_VW_S_S_V = "PR_GET_VW_S_S_V";
        public const string UPR_GET_ASSAY_VW_SSL = "PR_GET_ASSAY_VW_SSL";
        public const string UPR_GET_VW_SSL = "PR_GET_VW_SSL";
        public const string UPR_GET_VW_ASSAY_FORMAT = "PR_GET_VW_ASSAY_FORMAT";
        public const string UPR_GET_ANTIBIO_HEADER = "PR_GET_ANTIBIO_HEADER";
        public const string UPR_GET_WORKFLOW = "PR_GET_WORKFLOW";
        public const string UPR_GET_COMPONENTVALUES = "PR_GET_COMPONENTVALUES";
        public const string UPR_GET_ASSAY_SERVICE = "PR_GET_ASSAY_SERVICE";
        public const string UPR_GETALL_VW_ASSAY_BILL_PAT = "PR_GETALL_VW_ASSAY_BILL_PAT";
        public const string UPR_GET_RESULTENTRY_DETL = "PR_GET_RESULTENTRY_DETL";
        public const string UPR_GET_VIEW_RESULT_CHART_AUTO = "PR_GET_VIEW_RESULT_CHART_AUTO";
        public const string UPR_GET_SURGIRIES = "PR_GET_SURGIRIES";
        public const string UPR_GET_SURGIRIES_AUTO = "PR_GET_SURGIRIES_AUTO";
        public const string UPR_GET_RESUT_SERVICE = "PR_GET_RESUT_SERVICE";
        public const string UPR_GET_RESUT_SERVICE_RECENT = "PR_GET_RESUT_SERVICE_RECENT";
        public const string UPR_GET_RESULT_VALUE = "PR_GET_RESULT_VALUE";
        public const string UPR_GET_COMPONENT_RESULT_VALUE = "PR_GET_COMPONENT_RESULT_VALUE";
        public const string UPR_GET_RESUT_SERVICE_RECENT_REPORT = "PR_GET_RESUT_SERVICE_RECENT_REPORT";
        public const string UPR_GET_COMPONENT_CHART = "PR_GET_COMPONENT_CHART";
        public const string UPR_GET_VW_ASSAY_BILL_PAT = "PR_GET_VW_ASSAY_BILL_PAT";
        public const string UPR_GET_EMPLOYEE_AUTOCOMP = "PR_GET_EMPLOYEE_AUTOCOMP";
        public const string UPR_GET_VW_ASSAY_FO_BILL_PAT = "PR_GET_VW_ASSAY_FO_BILL_PAT";
        public const string UPR_GET_ASSAY_CANCEL_PREFIX = "PR_GET_ASSAY_CANCEL_PREFIX";
        public const string UPR_GET_ASSAY_CANCEL_NO_DT = "PR_GET_ASSAY_CANCEL_NO_DT";
        public const string UPR_GET_VW_FBT_ASC_P_FR_AC = "PR_GET_VW_FBT_ASC_P_FR_AC";
        public const string UPR_GET_ASSAY_RESULT_AUTOCOMP = "PR_GET_ASSAY_RESULT_AUTOCOMP";
        public const string UPR_GET_ASSAY_RESULT_PREFIX = "PR_GET_ASSAY_RESULT_PREFIX";
        public const string UPR_GET_BUSINESS_PARTNER_AUTOCOMP = "PR_GET_BUSINESS_PARTNER_AUTOCOMP";
        public const string UPR_GET_ASSAY_SAMPLE_BILLS_VW = "PR_GET_ASSAY_SAMPLE_BILLS_VW";
        public const string UPR_GET_DOCTOR_ADDRESS_VW = "PR_GET_DOCTOR_ADDRESS_VW";
        public const string UPR_GET_RESULT_SRV = "PR_GET_RESULT_SRV";
        public const string UPR_GET_VW_ASSAY_RESULT_SRV_AUTOCOMP = "PR_GET_VW_ASSAY_RESULT_SRV_AUTOCOMP";
        public const string UPR_GET_VW_ASSAY_RESULT_SRV = "PR_GET_VW_ASSAY_RESULT_SRV ";
        public const string UPR_GET_VW_TEST_APPROVAL = "PR_GET_VW_TEST_APPROVAL";
        public const string UPR_GET_VW_ASSAY_RESULT_SERVICE_AUTO = "PR_GET_VW_ASSAY_RESULT_SERVICE_AUTO";
        public const string UPR_GET_VW_ASSAY_RESULT_SERVICE = "PR_GET_VW_ASSAY_RESULT_SERVICE";
        public const string UPR_GET_ASSAY_APPROVAL_BILLS_VW_AUTOCOMP = "PR_GET_ASSAY_APPROVAL_BILLS_VW_AUTOCOMP";
        public const string UPR_GET_ASSAY_DISPATCH_BILLS_VW_AUTO = "PR_GET_ASSAY_DISPATCH_BILLS_VW_AUTO";
        public const string UPR_GET_ASSAY_VERIFICATION_BILLS_VW_AUTO = "PR_GET_ASSAY_VERIFICATION_BILLS_VW_AUTO";
        public const string UPR_GET_VW_ASSAY_RESULT_SRV_AUTO = "PR_GET_VW_ASSAY_RESULT_SRV_AUTO";
        public const string UPR_GET_BILL_RESULT = "PR_GET_BILL_RESULT";
        public const string UPR_GET_BILL_RESULT_UMRNO = "PR_GET_BILL_RESULT_UMRNO";
        public const string UPR_GET_SERVICE_RESULT = "PR_GET_SERVICE_RESULT";
        public const string UPR_GET_SRVBARCD = "PR_GET_SRVBARCD";
        public const string UPR_GET_RESULTVALUES = "PR_GET_RESULTVALUES";
        public const string UPR_GET_VW_SAMPLE_DETAILS = "PR_GET_VW_SAMPLE_DETAILS";
        public const string UPR_GET_VW_RESULT_DETAILS = "PR_GET_VW_RESULT_DETAILS";
        public const string UPR_GET_PATIENT_ON = "PR_GET_PATIENT_ON";
        public const string UPR_GET_VW_RESULT_DETAILS_GRIDPAGING = "PR_GET_VW_RESULT_DETAILS_GRIDPAGING";
        public const string UPR_GET_SERVICE_DETAILS_GRIDPAGING = "PR_GET_SERVICE_DETAILS_GRIDPAGING";
        public const string UPR_GET_VW_SAMPLE_DETAILS_PAGING = "PR_GET_VW_SAMPLE_DETAILS_PAGING";
        public const string UPR_GET_BILL_REFERAL_DETAILS_PAGING = "PR_GET_BILL_REFERAL_DETAILS_PAGING";
        public const string UPR_GET_BILL_REFERAL_DETAILS = "PR_GET_BILL_REFERAL_DETAILS";
        public const string UPR_GET_BILL_DET_New = "PR_GET_BILL_DET";
        public const string UPR_GETALL_BUS_PRTNR_SRV_PRICE_AUTO = "PR_GETALL_BUS_PRTNR_SRV_PRICE_AUTO";
        public const string UPR_GET_VW_SAMPLE_DETAILS_SAMPLE = "PR_GET_VW_SAMPLE_DETAILS";
        public const string UPR_GET_SERVICE_DETAILS = "PR_GET_SERVICE_DETAILS";
        public const string UPR_GET_VW_SPECIMEN_STATUS_AUTOCOMP = "PR_GET_VW_SPECIMEN_STATUS_AUTOCOMP";
        public const string UPR_GET_ASSAY_CANCEL_SERVICE = "PR_GET_ASSAY_CANCEL_SERVICE";
        public const string UPR_GET_ASSAY_CANCEL_IS_OUTSIDE_SERVICE = "PR_GET_ASSAY_CANCEL_IS_OUTSIDE_SERVICE";
        public const string UPR_GET_ASSAY_SPEC_COL_PAGE = "PR_GET_ASSAY_SPEC_COL_PAGE";
        public const string UPR_GET_ASSAY_TEMPLATE_PREF = "PR_GET_ASSAY_TEMPLATE_PREF";
        public const string UPR_GET_ASSAY_RESULT_SRV_COMP = "PR_GET_ASSAY_RESULT_SRV_COMP";
        public const string UPR_GET_SERVICE_NAME_BILL_ID = "PR_GET_SERVICE_NAME_BILL_ID";
        public const string UPR_GET_ASSAY_FORMAT_COM_RESULT_SERVICE = "PR_GET_ASSAY_FORMAT_COM_RESULT_SERVICE";
        public const string UPR_GET_ASSAY_FORMAT_COM_RESULT_SERVICE_HL7 = "PR_GET_ASSAY_FORMAT_COM_RESULT_SERVICE_HL7";
        public const string UPR_GET_TEST_APPROVAL_BETWEEN_DATES = "PR_GET_TEST_APPROVAL_BETWEEN_DATES";
        public const string UPR_INSUPD_FOREIGN_LOC = "PR_INSUPD_FOREIGN_LOC";
        public const string UPR_GET_RESULT_ENTRY_PENDING_DETAILS = "PR_GET_RESULT_ENTRY_PENDING_DETAILS";
        #endregion

        #region Autocodes

        public const string UPR_GET_TABKEY = "pr_get_pageLoad_tabkey";

        #endregion

        #region receipt
        public const string UPR_GET_ADT_PRE_AUTH = "PR_GET_ADT_PRE_AUTH";
        public const string UPR_GET_PREADV_AUTO_COMP = "PR_GET_PREADV_AUTO_COMP";
        public const string GET_ORGANISM_VALUES = "";
        public const string UPR_GET_PATIENT_RECEIPTINFO = "PR_GET_PATIENT_RECEIPTINFO_NEW";//"PR_GET_PATIENT_RECEIPTINFO";
        public const string Stp_GET_PR_GET_ADT_ADMN_DAYCAREPATIENT = "PR_GET_ADT_ADMN_DAYCAREPATIENT";
        public const string UPR_GETALL_OPD_BILL_SRV = "PR_GETALL_OPD_BILL_SRV";
        public const string UPR_GET_FO_OPD_BILL_AUTO_COMP = "PR_GET_FO_OPD_BILL_AUTO_COMP";
        public const string UPR_GET_TRANSACTION_DETAILS = "PR_GET_TRANSACTION_DETAILS";
        public const string UPR_GET_TRAN_CASH_DENOM = "PR_GET_TRAN_CASH_DENOM";
        public const string UPR_GET_VOUCHER_TRANSACTION_DETAILS = "PR_GET_VOUCHER_TRANSACTION_DETAILS";
        #endregion

        #region Exceptions

        public const string UPR_UPDATE_ADVANCESEARCH = "SE.PR_UPDATE_ADVANCESEARCH";
        public const string stp_Get_Exceptions = "stp_Get_Exceptions";
        public const string PR_GETALL_LOGINHISTORY = "PR_GETALL_LOGINHISTORY";
        public const string PR_GET_AUTO_LOGINHISTORY = "PR_GET_AUTO_LOGINHISTORY";
        public const string PR_GET_LOGINHISTORY = "PR_GET_LOGINHISTORY";
        public const string STP_GET_EXCEPTIONS_BY_ID = "STP_GET_EXCEPTIONS_BY_ID";
        public const string UPR_GETALL_USER_SESSION_TRACK = "PR_GETALL_USER_SESSION_TRACK";
        #endregion

        #region AUTHORIZATION
        public const string UPR_UPD_FO_BILL_AUTH_DET = "PR_UPD_FO_BILL_AUTH_DET";
        public const string UPR_GET_TRANSATION_DET = "PR_GET_AUTH_DET_ON_ID";
        public const string UPR_GET_TRANSATIONDET = "PR_GET_TRANSATION_DET";
        public const string UPR_GET_AUTHORIZATIONDETAILS = "PR_GET_AUTHORIZATIONDETAILS";
        public const string UPR_GETALL_AUTHORIZATIONS = "PR_GETALL_AUTHORISATION";
        public const string UPR_GET_AUTHORIZATION = "PR_GET_AUTHORISATION";
        public const string UPR_DEL_AUTHORIZATION = "PR_DEL_AUTHORISATION";
        public const string UPR_INSUPD_AUTHORIZATION = "PR_INSUPD_AUTHORISATION";
        public const string UPR_GET_AUTO_AUTHORIZATION = "PR_GET_AUTO_AUTH";
        public const string UPR_GETALL_CHANGE_AUTHORISATION = "PR_GETALL_CHANGE_AUTHORISATION";


        public const string UPR_INSUPD_MODIFYAPPROVAL = "PR_INS_STATUS_CNCL";
        #endregion

        #region Appointments
        public const string UPR_GET_MACHINE_SLOTS_TEST = "PR_GET_MACHINE_SLOTS_TEST";
        public const string UPPR_GET_APPOINTMENT_REPORT = "PR_GET_APPOINTMENT_REPORT";
        public const string UAPT_PR_GET_DEPTID = "APT_PR_GET_DEPTID";
        public const string UPR_UPD_APT_APMNT = "PR_UPD_APT_APMNT";
        public const string UPR_GET_UMR_AUTO1 = "PR_GET_UMR_AUTO1";
        public const string UPR_INSUPD_ITEM = "PR_INSUPD_ITEM";
        public const string UAPT_PR_GETALL_ITEM = "APT_PR_GETALL_ITEM";
        public const string UAPT_PR_DEL_ITEM = "APT_PR_DEL_ITEM";
        public const string UPR_GET_APT_RESORCE_SCHEDULES = "PR_GET_APT_RESORCE_SCHEDULES";
        public const string UPR_GET_USERS_DEPTMAAP_AUTO = "PR_GET_USERS_DEPTMAAP_AUTO";
        public const string UPR_UPD_PATIENT_DET_BY_TIME = "PR_UPD_PATIENT_DET_BY_TIME";
        public const string UPR_GET_APT_SERVICE_COMMON_TIMES1 = "PR_GET_APT_SERVICE_COMMON_TIME";
        public const string UPR_GET_APT_SERVICE_COM_TIMES = "PR_GET_APT_SERVICE_COM_TIMES";
        public const string UPR_GETALL_APT_RSRC = "PR_GETALL_APT_RSRC";
        public const string UPR_PR_GET_DEPARTMENT = "PR_GET_DEPARTMENT";
        public const string UPR_PR_GET_DOCTORNAME = "PR_GET_DOCTORNAME";
        public const string UPR_GET_TOTALSLOTS = "PR_GET_TOTALSLOTS ";
        public const string UPR_GET_APPTS_PATIENT = "PR_GET_APPTS_PATIENT";
        public const string UPR_GET_CHECKDATESAME = "PR_GET_CHECKDATESAME";
        public const string UPR_PR_INSUPD_DOCTORAPPTTEMPLATE = "PR_INSUPD_DOCTORAPPTTEMPLATE";
        public const string UPR_GET_DEFAULT_APPT_TEMPLATE = "PR_GET_DEFAULT_APPT_TEMPLATE";
        public const string UPR_GET_CHECKAPPTALLOTEDDT = "PR_GET_CHECKAPPTALLOTEDDT";
        public const string UPR_PR_GET_DOCTORSCHEDULES_CANCEL = "PR_GET_DOCTORSCHEDULES_CANCEL";
        public const string UPR_INSUPD_PATIENTDETAILS = "PR_INSUPD_PATIENTDETAILS";
        public const string UPR_GET_CHECKSAMETIME = "PR_GET_CHECKSAMETIME";
        public const string UPR_GET_CHECKSTATUS = "PR_GET_CHECKSTATUS";
        public const string UPR_GET_DOCTOR_SCHEDULES = "PR_GET_DOCTOR_SCHEDULES";
        public const string UPR_GET_PATIENT_VISITTYPE = "PR_GET_PATIENT_VISITTYPE";
        public const string UPR_GET_PATIENTIDAPPTS = "PR_GET_PATIENTIDAPPTS";
        public const string UPR_PR_GET_DOCTORSLOTS = "PR_GET_DOCTORSLOTS";
        public const string UPR_GET_WSDATES = "PR_GET_WSDATES";
        public const string UPR_GET_WEEK_APPTSEMRDETAILS = "PR_GET_WEEK_APPTSEMRDETAILS";
        public const string UPR_INSUPD_SLOT_CANCEL = "PR_INSUPD_SLOT_CANCEL";
        public const string UPR_GET_PATIENT_DET_BYTIME = "PR_GET_PATIENT_DET_BY_TIME";
        public const string UPR_GET_EMRDETAILS = "PR_GET_EMRDETAILS";
        public const string UPR_GET_ASSIGNEDDOCTORS = "PR_GET_ASSIGNEDDOCTORS";
        public const string UPR_PA_CHECKING = "PR_PA_CHECKING";
        public const string UPR_INS_ADDPA = "PR_INS_ADDPA";
        public const string UPR_DEL_REMOVEPA = "PR_DEL_REMOVEPA";
        public const string UPR_PR_GET_PATIENT_CHECKTIME = "PR_GET_PATIENT_CHECKTIME";
        public const string UPR_GET_TOCANCELPATIENT = "PR_GET_TOCANCELPATIENT";
        public const string UPR_GET_CHECKAPPOINTMENT = "PR_GET_CHECKAPPOINTMENT";
        public const string UPR_UPD_PATIENT_CANCEL_APPTS = "PR_UPD_PATIENT_CANCEL_APPTS";
        public const string UPR_PR_GET_APPTPATIENTPAGEING = "PR_GET_APPTPATIENTPAGEING";
        public const string UPR_PR_GET_SLOTDETAILS = "PR_GET_SLOTDETAILS";
        public const string UPR_PR_GET_PATIENT_LIST_COUNT = "PR_GET_PATIENT_LIST_COUNT";
        public const string UPR_pr_get_patient_list_view = "pr_get_patient_list_view";
        public const string UPR_pr_get_patientappointment_type = "pr_get_patientappointment_type";
        public const string UPR_PR_GET_PATIENTTYPES = "PR_GET_PATIENTTYPES";
        public const string UPR_PR_GET_SLOTDURATION = "PR_GET_SLOTDURATION";
        public const string UPR_PR_GET_SECRETARIES = "PR_GET_SECRETARIES";
        public const string UPR_PR_GET_DOCTORNAMENEW = "PR_GET_DOCTORNAMENEW";
        public const string UPR_PR_GETALL_APPTS_DEPARTMENTS = "PR_GETALL_APPTS_DEPARTMENTS";
        public const string UPR_PR_GET_WSDATES = "PR_GET_WSDATES";
        public const string UPR_PR_GET_WEEK_APPTSEMRDETAILS = "PR_GET_WEEK_APPTSEMRDETAILS";
        public const string UPR_PR_GET_PDETAILS = "PR_GET_PDETAILS";
        public const string UPR_PR_GET_PATIENTMASTERDETAILS = "PR_GET_PATIENTMASTERDETAILS";
        public const string UPR_PR_UPD_PATIENTVISTTYPE = "PR_UPD_PATIENTVISTTYPE";
        public const string UPR_PR_INS_PATIENTAPPTEMR = "PR_INS_PATIENTAPPTEMR";
        public const string UPR_GET_APPT_AUTO_COMP = "PR_GET_APPT_AUTO_COMP";
        public const string UPR_GETALL_APPOINTMENTS = "PR_GETALL_APPOINTMENTS";
        public const string UPR_GET_APT_SLOT_FPNL = "PR_GET_APT_SLOT_FPNL";
        public const string UPR_GET_RSRC_SCH = "PR_GET_RSRC_SCH";//APT_RSRC_SCH
        public const string UPR_INS_APT_DFLT_SCH_TIME = "PR_INS_APT_DFLT_SCH_TIME";
        public const string UPR_PR_INS_APMNT_DETAILS = "PR_INS_APMNT_DETAILS";
        public const string UPR_PR_GET_CHECK_SLOTTIME = "PR_GET_CHECK_SLOTTIME";
        public const string UPR_GET_SPEL_DESG = "PR_GET_SPEL_DESG";
        public const string UPR_GET_APT_APMNT_PAT = "PR_GET_APT_APMNT_PAT";
        public const string UPR_DEL_APT_APMNT_PAT = "PR_DEL_APT_APMNT_PAT";
        public const string UPR_UPDATE_APT_APMNT_PAT_BACK = "PR_UPDATE_APT_APMNT_PAT_BACK";
        public const string UPR_UPDATE_APT_APMNT_PAT = "PR_UPDATE_APT_APMNT_PAT";
        public const string UPR_GET_INFO_APT_APMNT_PAT = "PR_GET_INFO_APT_APMNT_PAT";
        public const string UPR_PR_GETALL_ITEM = "PR_GETALL_ITEM";
        public const string UPR_GET_CANCEL_DATES = "PR_GET_CANCEL_DATES";
        public const string UPR_INSUPD_APT_RSRC_SCH_TMP = "PR_INSUPD_APT_RSRC_SCH_TMP";
        public const string UPR_GET_APT_RSRC_MAN_DET = "PR_GET_APT_RSRC_MAN_DET";
        public const string UPR_GET_CHECKDOCTORSCHLS = "PR_GET_CHECKDOCTORSCHLS";
        public const string UPR_GET_APT_EMERGENCY_SLOTS = "PR_GET_APT_EMERGENCY_SLOTS";
        #region Paltient List
        public const string UPR_GET_apt_PAT_LIST_VIEW = "PR_GET_apt_PAT_LIST_VIEW";
        public const string UPR_GET_apt_PATAPPTS_TYPE = "PR_GET_apt_PATAPPTS_TYPE";
        #endregion
        #endregion

        #region MESSAGE STATION
        public const string UPR_GETALL_TASK_BUGS = "PR_GETALL_TASK_BUGS";
        public const string UPR_GETALL_TASK = "PR_GETALL_TASK";
        public const string UPR_GET_TASKRELATEDISSUES = "PR_GET_TASKRELATEDISSUES";
        public const string UPR_DEL_TASK_BUGS = "PR_DEL_TASK_BUGS";
        public const string UPR_INSUPD_TASK_BUGS = "PR_INSUPD_TASK_BUGS";
        public const string UPR_GET_TASK_BUGS_BYID = "PR_GET_TASK_BUGS_BYID";
        public const string UPR_GET_TASKSTATUS = "PR_GET_TASKSTATUS";
        public const string UPR_GET_PRIORITY = "PR_GET_PRIORITY";
        public const string UPR_GET_TASKCATEGORY = "PR_GET_TASKCATEGORY";

        public const string UPR_INSUPD_REQUISTIONS = "PR_INSUPD_REQUISTIONS";
        public const string UPR_DEL_REQUISTIONS = "PR_DEL_REQUISTIONS";
        public const string UPR_DEL_TASKDETAILS = "PR_DEL_TASKDETAILS";
        public const string UPR_GET_REQUISTIONSTYPES = "PR_GET_REQUISTIONSTYPES";
        public const string UPR_GET_REQUISTIONS = "PR_GET_REQUISTIONS";
        public const string UPR_GET_REQUISTION_DETAILS_BYID = "PR_GET_REQUISTION_DETAILS_BYID";
        public const string UPR_GET_NASSIGNTASKDETAILS = "PR_GET_NASSIGNTASKDETAILS";
        public const string PR_DEL_COMPOSE_MESSAGES = "PR_DEL_COMPOSE_MESSAGES";
        public const string PR_GET_MAILMESSAGES = "PR_GET_MAILMESSAGES";
        public const string PR_GET_USERNAMES_NEW = "PR_GET_USERNAMES";
        // public const string PR_GET_ALLUSER_CATEGORIES = "PR_GET_ALLUSER_CATEGORIES";
        public const string PR_GET_SENTMAILMESSAGES = "PR_GET_SENTMAILMESSAGES";
        public const string PR_GET_DRAFTMESSAGES = "PR_GET_DRAFTMESSAGES";
        public const string PR_DEL_COMPOSE_SENTMESSAGES = "PR_DEL_COMPOSE_SENTMESSAGES";
        public const string PR_DEL_COMPOSE_DRAFTMESSAGES = "PR_DEL_COMPOSE_DRAFTMESSAGES";
        public const string PR_GET_TASKDETAILS = "PR_GET_TASKDETAILS";
        public const string PR_GETALL_USERS = "PR_GETALL_USERS";
        public const string PR_INS_TASK = "PR_INS_TASK";
        public const string PR_GET_LEAVEREQUISITION = "PR_GET_LEAVEREQUISITION";
        public const string PR_DEL_LEAVEDETAILS = "PR_DEL_LEAVEDETAILS";
        public const string PR_INSUPD_LEAVEREQUISITION = "PR_INSUPD_LEAVEREQUISITION";
        public const string PR_GET_REQUISTIONS = "PR_GET_REQUISTIONS";
        public const string PR_GET_MESSAGE_ORDER = "PR_GET_MESSAGE_ORDER";
        public const string PR_GET_ALLDRAFTMSGCOUNT = "PR_GET_ALLDRAFTMSGCOUNT";
        public const string PR_GET_ALLMSGCOUNT = "PR_GET_ALLMSGCOUNT";
        public const string PR_GET_SENTMESSAGE_ORDER = "PR_GET_SENTMESSAGE_ORDER";
        public const string PR_GET_DRAFTMESSAGESTYPE = "PR_GET_DRAFTMESSAGESTYPE";
        public const string PR_INS_COMPOSEMESSAGES = "PR_INS_COMPOSEMESSAGES";
        public const string PR_INS_COMPOSEMESSAGESDETAILS = "PR_INS_COMPOSEMESSAGESDETAILS";
        public const string PR_GET_ALLROLES = "PR_GET_ALLROLES";
        public const string PR_GET_ROLEUSERSMULT = "PR_GET_ROLEUSERSMULT";
        public const string PR_DEL_ROLE_MESSAGE = "PR_DEL_ROLE_MESSAGE";

        #endregion

        #region OPBILL CANCELLATION
        public const string UPR_PR_GET_CANCEL_SERVICES = "PR_GET_CANCEL_SERVICES";
        public const string UPR_GET_CANCELLED_RECEIPTS = "PR_GETALL_CANCELLEDBILLDETAILS";
        public const string UPR_GETALL_NOTCANCELLEDBILLS_PAGING = "PR_GETALL_NOTCANCELLEDBILLS_PAGING";
        public const string UPR_GET_AUTO_OPBILLNO = "PR_GET_AUTO_OPBILLNO";
        #endregion


        #region Radiology Report Dispatch
        public const string UPR_GET_RADIOLOGY_SERVICEGRPS = "PR_GET_RADIOLOGY_SERVICEGRPS";
        public const string UPR_GET_SERV_BILLDETL = "PR_GET_SRV_BILL_DET"; //"PR_GET_SERV_BILLDETL_123_PAGE" ;//"PR_GET_SERV_BILLDETL_123";// "PR_GET_SERV_BILLDETL";
        public const string UPR_GET_SERVDET_BYBILLID = "PR_GET_SERVDET_BYBILLID";
        public const string UPR_INS_ASSAY_RESULT_SRV_STAT_PROCESS = "PR_INS_ASSAY_RESULT_SRV_STAT_PROCESS";
        public const string UPR_INS_ASSAY_RESULT_SRV_STAT_PROCESS123 = "PR_INS_ASSAY_RESULT_SRV_STAT_PROCESS123";
        public const string UPR_GET_AUTO_RADIOLOGYBILL = "PR_GET_AUTO_RADIOLOGYBILL";
        public const string UPR_GETALL_RADIOLOGYSERVICES = "PR_GETALL_RADIOLOGYSERVICES";
        public const string UPR_GET_AUTO_RADIOLOGYSERVICE = "PR_GET_AUTO_RADIOLOGYSERVICE";
        public const string UPR_GET_VW_TEST_APPROVAL_DATE = "PR_GET_VW_TEST_APPROVAL_DATE";
        public const string UPR_GET_VW_LAB_BAR_CODE = "PR_GET_VW_LAB_BAR_CODE";
        public const string UPR_GET_VW_RESULT_SERVICE = "PR_GET_VW_RESULT_SERVICE";
        #endregion

        #region survey module
        #region feedbackfrom

        public const string UPR_GETALL_FB_TEMPLATE = "PR_GETALL_FB_TEMPLATE";

        #region pATIENTGROUP
        public const string UPR_GET_IN_PATIENT_DTLS = "PR_GET_IN_PATIENT_DTLS";
        public const string UPR_GET_OUT_PATIENT_DTLS = "PR_GET_OUT_PATIENT_DTLS";
        public const string UPR_GET_EMPLOYEE_DTLS = "PR_GET_EMPLOYEE_DTLS";
        public const string UPR_USER_CHK_FB_FORM_HDR = "PR_USER_CHK_FB_FORM_HDR";
        public const string UPR_GET_FB_COMPLAINT_DTLS = "PR_GET_FB_COMPLAINT_DTLS";
        #endregion

        #region getgroups,questions,controls
        public const string UPR_GET_FB_TEMPLATE_GROUP_TEMP_ID = "PR_GET_FB_TEMPLATE_GROUP_TEMP_ID";
        //public const string UPR_GET_FB_TEMPLATE_QUESTION = "PR_GET_FB_TEMPLATE_QUESTION";
        public const string UPR_GET_FB_TEMPLATE_QUESTION = "PR_GET_FB_TEMPLATE_QUESTION_MODIFY";
        public const string UPR_GET_FB_TEMPLATE_QUESTION_CONTROL = "PR_GET_FB_TEMPLATE_QUESTION_CONTROL";
        #endregion

        #region FEEDBACKFORM
        public const string UPR_INS_FB_FORM_DTL = "PR_INS_FB_FORM_DTL";
        public const string UPR_INS_FB_FORM_HDR = "PR_INS_FB_FORM_HDR";
        #endregion
        #endregion
        #region controlvalmaster
        public const string UPR_INSUPD_FB_CONTROL_VALUE = "PR_INSUPD_FB_CONTROL_VALUE";
        public const string UPR_GET_FB_CONTROL_VAL_FPNL = "PR_GET_FB_CONTROL_VAL_FPNL";
        public const string UPR_GET_CONTROLVALSETDTLS = "PR_GETALL_FB_CONTROL_VALUE_SET";
        public const string UPR_DEL_FB_CONTROL_VALUE = "PR_DEL_FB_CONTROL_VALUE";
        public const string UPR_GET_CONTROLVAL_PAGE = "PR_GET_FB_CONTROL_VAL_PAGE";
        public const string UPR_GET_FB_CONTROL_VALUE_AUTO = "PR_GET_FB_CONTROL_VALUE_AUTO";
        public const string UPR_GET_PAGELOAD_TABKEY = "PR_GET_PAGELOAD_TABKEY";
        #endregion
        #region TEMPLATEQUESTIONMASTER
        public const string UPR_GET_TEMPLATE = "PR_GETALL_FB_TEMPLATE";
        public const string UPR_GET_QUESTIONDTLS = "PR_GETALL_FB_QUESTION";
        // public const string UPR_GET_GROUPDTLS = "PR_GETALL_FB_GROUP";
        public const string UPR_GET_GROUPDTLS = "PR_GET_FB_TEMPLATE_GROUP_TEMP_ID";
        public const string UPR_INS_TEMPLATEQUESTION = "PR_INSUPD_FB_TEMPLATE_QUESTION";
        public const string UPR_GET_TEMPLATEQMASTER = "PR_GET_FB_TEMPLATE_QUESTION_FPNL";
        public const string UPR_DEL_TEMPLATEQMASTER = "PR_DEL_FB_TEMPLATE_QUESTION";
        public const string UPR_GET_TEMPLATEQMASTER_BACK = "PR_GET_FB_TEMPLATE_QUESTION_TGQ";
        public const string UPR_GET_FB_QUESTIONIDS_QUESTION = "PR_GET_FB_QUESTIONIDS_QUESTION";
        #endregion
        #region QuestionMaster
        public const string UPR__INS_QUESTIONMASTER = "PR_INS_FB_QUESTION";
        public const string UPR_GET_CONTROLTYPES = "PR_GETALL_FB_CONTROL";
        public const string UPR_GETALL_FB_CONTROL_VALUE_SET = "PR_GETALL_FB_CONTROL_VALUE_SET";
        public const string UPR_GET_FB_QUESTIONCVS_PAGE = "PR_GET_FB_QUESTION_PAGE";
        public const string UPR_GET_QUETIONEDIT = "PR_GETALL_FB_QUESTION";
        public const string UPR_DEL_QUESTION = "PR_DEL_FB_QUESTION";
        public const string UPR_GET_FB_QUESTION_FPNL = "PR_GET_FB_QUETION_CVS_FPNL";
        public const string UPR_GET_FB_QUETION_DTLS = "PR_GET_FB_QUETION_CVS";
        public const string UPR_GET_CONTROL_NAMES = "PR_GET_CONTROL_NAMES";
        #endregion
        #endregion

        #region oprating
        public const string UPR_GET_FB_OPRATING_CD = "PR_GET_FB_OPRATING_CD";
        public const string UPR_GET_FB_OPRATING_VD = "";
        public const string UPR_INSUPD_FB_OPRATING = "PR_INSUPD_FB_OPRATING";
        public const string UPR_GET_FB_OPRATING_CD_GRAPH_Y = "PR_GET_FB_OPRATING_CD_GRAPH_Y";
        public const string UPR_GET_FB_OPRATING_CD_GRAPH_M = "PR_GET_FB_OPRATING_CD_GRAPH_M";
        public const string UPR_GET_FB_OPRATING_CD_GRAPH_D = "PR_GET_FB_OPRATING_CD_GRAPH_D";
        #endregion

        #region dotnetquestions
        public const string UPR_GETALL_FORM_DTL = "PR_GETALL_FORM_DTL";
        public const string UPR_GET_FORMIDDTLS = "PR_GET_FORM_ID_DTLS";
        public const string UPR_INS_FB_FORM_SDTL = "PR_INS_FB_FORM_SDTL";
        public const string UPR_GET_FB_FORM_HDR = "PR_GET_FB_FORM_HDR";
        public const string UPR_GETALL_FB_FORM_HDR_AUTO = "PR_GETALL_FB_FORM_HDR_AUTO";
        #endregion

        #region iprating
        public const string UPR_GET_FB_IPRATING_DD = "PR_GET_FB_IPRATING_DD";
        public const string UPR_GET_FB_IPRATING_AD = "PR_GET_FB_IPRATING_AD";
        public const string UPR_GET_FB_IPRATING_CD = "PR_GET_FB_IPRATING_CD";
        public const string UPR_INSUPD_FB_IPRATING = "PR_INSUPD_FB_IPRATING";
        public const string UPR_GET_YEARS = "PR_GET_YEARS";
        public const string UPR_GET_FO_BILL_SRV = "PR_GET_FO_BILL_SRV";
        public const string UPR_GET_FO_BILL_SRV_AUTO = "PR_GET_FO_BILL_SRV_AUTO";
        public const string UPR_GET_ADMN_IMR_SRV = "PR_GET_ADMN_IMR_SRV";
        public const string UPR_GET_ADMN_IMR_SRV_AUTO = "PR_GET_ADMN_IMR_SRV_AUTO";
        public const string UPR_GET_SERVICE_DATES = "PR_GET_SERVICE_DATES";
        public const string UPR_GET_IP_SERVICE_DATES = "PR_GET_IP_SERVICE_DATES";
        public const string UPR_GET_SURGIRIES_AUTO_NEW = "PR_GET_SURGIRIES_AUTO";
        public const string UPR_GET_MEDICATIONS_AUTO = "PR_GET_MEDICATIONS_AUTO";
        public const string UPR_UPD_PATIENT_PROCEDURES = "PR_UPD_PATIENT_PROCEDURES";
        public const string UPR_GET_PATIENT_MEDICATIONS_AUTO = "PR_GET_PATIENT_MEDICATIONS_AUTO";
        public const string UPR_INSUPD_PATIENT_SURGERIES_HISTORY = "PR_INSUPD_PATIENT_SURGERIES_HISTORY";
        public const string UPR_INSUPD_PATIENT_MEDICATIONS = "PR_INSUPD_PATIENT_MEDICATIONS";
        public const string UPR_GET_PATIENT_SURGERIES_HISTORY = "PR_GET_PATIENT_SURGERIES_HISTORY";
        public const string UPR_GETALL_PATIENT_MEDICATIONS = "PR_GETALL_PATIENT_MEDICATIONS";
        public const string UPR_DEL_PATIENT_SURGERIES_HISTORY = "PR_DEL_PATIENT_SURGERIES_HISTORY";
        public const string UPR_DEL_PATIENT_MEDICATIONS = "PR_DEL_PATIENT_MEDICATIONS";
        public const string UPR_GET_FB_IPRATING_AD_GRAPH_Y = "PR_GET_FB_IPRATING_AD_GRAPH_Y";
        public const string UPR_GET_FB_IPRATING_DD_GRAPH_Y = "PR_GET_FB_IPRATING_DD_GRAPH_Y";
        public const string UPR_GET_FB_IPRATING_CD_GRAPH_Y = "PR_GET_FB_IPRATING_CD_GRAPH_Y";
        public const string UPR_GET_FB_IPRATING_AD_GRAPH_M = "PR_GET_FB_IPRATING_AD_GRAPH_M";
        public const string UPR_GET_FB_IPRATING_DD_GRAPH_M = "PR_GET_FB_IPRATING_DD_GRAPH_M";
        public const string UPR_GET_FB_IPRATING_CD_GRAPH_M = "PR_GET_FB_IPRATING_CD_GRAPH_M";
        public const string UPR_GET_FB_IPRATING_AD_GRAPH_D = "PR_GET_FB_IPRATING_AD_GRAPH_D";
        public const string UPR_GET_FB_IPRATING_DD_GRAPH_D = "PR_GET_FB_IPRATING_DD_GRAPH_D";
        public const string UPR_GET_FB_IPRATING_CD_GRAPH_D = "PR_GET_FB_IPRATING_CD_GRAPH_D";
        #endregion

        #region Complainttype

        public const string UPR_INSUPD_FB_COMPLAINTTYPES = "PR_INSUPD_FB_COMPLAINTTYPES";
        public const string UPR_GETALL_FB_COMPLAINTTYPE = "PR_GETALL_FB_COMPLAINTTYPE";
        public const string UPR_GET_FB_COMPLAINTTYPE_FPNL = "PR_GET_FB_COMPLAINTTYPE_FPNL";
        #endregion

        #region ComplainttypeList
        public const string UPR_GET_COMPLAINTTYPES = "pr_get_complainttypes";
        public const string UPR_INS_COMPLAINTS = "pr_ins_complaints";
        public const string UPR_GET_COMPLAINTDETAILS = "PR_GET_COMPLAINTDETAILS";
        public const string UPR_GET_COMPLAINTTYPE = "pr_get_complainttype";
        #endregion

        #region TempGroup Sp's
        public const string UPR_GETALL_FB_GROUP_PAGE = "PR_GET_FB_GROUP_PAGE";
        public const string UPR_GETALL_FB_TEMPLATE_PAGE = "PR_GET_FB_TEMPLATE_PAGE";
        public const string UPR_GET_FB_TEMPLATE_GROUP_FPNL = "PR_GET_FB_TEMPLATE_GROUP_FPNL";
        public const string UPR_INSUPD_FB_TEMPLATE_GROUP = "PR_INSUPD_FB_TEMPLATE_GROUP";
        public const string UPR_DEL_PR_TEMPLATE_GROUP = "PR_DEL_FB_TEMPLATE_GROUP";
        public const string UPR_GET_FB_TEMPLATE_GROUP_PAGE = "PR_GET_FB_TEMPLATE_GROUP_PAGE";
        public const string UPR_GET_TEMPLATE_AUTO = "PR_GET_TEMPLATE_AUTO";
        public const string UPR_GET_GROUP_AUTO = "PR_GET_GROUP_AUTO";

        #endregion

        #region ApptResourceMaster

        public const string UPR_INSUPD_APT_RESOURCE_TYPE = "PR_INSUPD_APT_RESOURCE_TYPE";
        public const string UPR_GET_RESOURCETYPE = "PR_GET_RESOURCETYPE";
        public const string UPR_GET_RESOURCE_TYPE_AUTO = "PR_GET_RESOURCE_TYPE_AUTO";
        public const string UPR_PR_GETALL_APT_RSRC = "PR_GETALL_APT_RSRC";
        public const string UPR_PR_GETALL_APT_RSRC_TYPE = "PR_GETALL_APT_RSRC_TYPE";
        public const string UPR_INSUPD_APT_RSRC_TYPE = "PR_INSUPD_APT_RSRC_TYPE";
        public const string UPR_GETALL_APT_RSRC_TYPE = "PR_GETALL_APT_RSRC_TYPE";
        public const string UPR_APT_PR_GET_RSRC_DETAILS = "APT_PR_GETALL_RSRC_DETAILS";
        public const string UPR_PR_INSUPD_APT_RSRC = "PR_INSUPD_APT_RSRC";
        public const string UPR_PR_DEL_RSRC_TYPE = "APT_PR_DEL_RSRC_TYPE";
        public const string UPR_APT_PR_DEL_RSRC = "APT_PR_DEL_RSRC";
        public const string UPR_APT_PR_GET_RSRC_TYPE = "APT_PR_GET_RSRC_TYPE";
        public const string UPR_APT_PR_GET_RSRC = "APT_PR_GET_RSRC";
        public const string UPR_APT_PR_INSUPD_SERVICE_RSRC = "APT_PR_INSUPD_SERVICE_RSRC";
        //public const string UPR_PR_INSUPD_APT_DFLT_SCH = "PR_INSUPD_APT_DFLT_SCH";
        public const string UPR_INSUPD_DFLT_SCH_TIME = "PR_INSUPD_DFLT_SCH_TIME";
        public const string UPR_APT_PR_GETALL_SERVICE_RSRC = "APT_PR_GETALL_SERVICE_RSRC";
        public const string UPR_PR_GET_DFLT_SCH = "PR_GETALL_Dflt_Sch";
        public const string UPR_PR_INSUPD_APT_RSRC_SCH = "PR_INSUPD_APT_RSRC_SCH";
        public const string UPR_APT_PR_GETALL_RSRC_SCH = "APT_PR_GETALL_RSRC_SCH";
        public const string UPR_INSUPD_APT_SLOT = "PR_INSUPD_APT_SLOT";
        public const string UPR_PR_GETALL_APT_RSRC_MAN = "PR_GETALL_APT_MAN";
        public const string UPR_PR_INSUPD_APT_RSRC_MAN = "PR_INSUPD_APT_RSRC_MAN";
        public const string UPR_GETALL_Appt_Slot = "PR_GETALL_Appt_Slot";
        public const string UPR_DEL_APT_SLOT = "APT_PR_DEL_APT_SLOT";
        public const string UPR_GET_APT_SLOT = "APT_PR_GET_APT_SLOT";
        public const string UPR_GET_Apptslot_Auto = "PR_GET_Apptslot_Auto";
        public const string UPR_GET_RSRC_SCH_BYID = "PR_GET_RSRC_SCH_BY_ID";
        public const string UPR_PR_GET_RSRC_SCHTIME_BY_ID = "PR_GET_RSRC_SCHTIME_BY_ID";
        public const string UPR_PR_GET_APT_APMNT_DET = "PR_GET_APT_APMNT_DET";
        // public const string UPR_PR_INS_APMNT_DETAILS = "PR_INS_APMNT_DETAILS";
        public const string UPR_PR_GET_APT_DETAILS = "PR_GET_APT_DETAILS";
        public const string UPR_PR_GET_APT_RSRC_SCH = "PR_GET_APT_RSRC_SCH";
        public const string UPR_PR_GET_TOCANCEL_APT_PAT = "PR_GET_TOCANCEL_APT_PAT";
        public const string UPR_DEL_TOCANCEL_APT_PAT = "PR_DEL_TOCANCEL_APT_PAT";
        public const string UPR_GET_APT_SERVICE_RSRC = "PR_GET_APT_SERVICE_RSRC ";
        public const string UPR_GET_APT_RSRC_EXE = "PR_GET_APT_RSRC_EXE";
        public const string UPR_GET_RSRC_SCHTIME_BY_RSRCID = "PR_GET_RSRC_SCHTIME_BY_RSRCID";
        public const string UPR_PR_GET_ITEM_AUTO_COMP = "PR_GET_ITEM_AUTO_COMP";
        public const string UPR_PR_ALLGET_ITEM = "PR_ALLGET_ITEM";
        public const string UPR_PR_GETALL_RSRCTYPES = "PR_GETALL_RSRCTYPES";
        public const string UPR_PR_GETRSRCNAMES = "PR_GETRSRCNAMES";
        public const string UPR_GET_PATIENT_IDORUMR = "PR_GET_PATIENT_IDORUMR";
        public const string UPR_GET_EMPID = "PR_GET_EMPID";
        public const string UPR_GET_APT_RSRC_SCH_D = "PR_GET_APT_RSRC_SCH_D";
        public const string UPR_GET_APT_RSRC_SCH_DT = "PR_GET_APT_RSRC_SCH_DT";
        public const string UPR_GET_APT_RSRC_SCH_TIME = "PR_GET_APT_RSRC_SCH_TIME";
        public const string UPR_UPD_APT_RSRC_SCH_TIME = "PR_UPD_APT_RSRC_SCH_TIME";
        public const string UPR_GET_APT_SERVICE_COMMON_TIMES = "PR_GET_APT_SERVICE_COMMON_TIMES";
        public const string UPR_GET_SERVICEEDIT = "PR_GET_SERVICEEDIT";
        public const string UPR_GET_APT_RSRC_SCH_D_7DAYS = "PR_GET_APT_RSRC_SCH_D_7DAYS";
        public const string UPR_GET_APT_SERVICE_RSRC_SPC = "PR_GET_APT_SERVICE_RSRC_SPC";
        public const string UPR_GET_APT_SERVICE_RSRC_RSRC_TYPE = "PR_GET_APT_SERVICE_RSRC_TYPE";
        public const string UPR_GET_APT_APMNT_RSRC = "PR_GET_APT_APMNT_RSRC";
        public const string UPR_GET_apt_PATAPPTS_INFO = "PR_GET_APT_INFO";
        #endregion

        #region Reports
        public const string UPR_GET_ORG_WISE_COLLECTION = "PR_GET_ORG_WISE_COLLECTION";
        public const string UPR_GET_SERVICE_TAX = "PR_GET_SERVICE_TAX";
        public const string UPR_GET_RADIOLOGY_LOG_REGISTER = "PR_GET_RADIOLOGY_LOG_REGISTER";
        public const string UPR_GET_TRAN_REQ_REPORT = "PR_GET_TRAN_REQ_REPORT";
        public const string UPR_GET_VW_PATIENT_REG_REPORT_DETAILS = "PR_GET_VW_PATIENT_REG_REPORT_DETAILS";
        public const string UPR_GET_NURSESTATION_AUTO = "PR_GET_NURSESTATION_AUTO";
        public const string UPR_GETALL_NURSESTATION = "PR_GETALL_NURSESTATIONS";
        public const string UPR_GET_NU_IND_REPORT = "PR_GET_NU_IND_REPORT";
        public const string UPR_RPT_GET_OP_CONSULTATION_DETAILS = "PR_RPT_GET_OP_CONSULTATION_DETAILS";
        public const string UPR_PR_INS_LICIENCE_INFO = "PR_INS_LICIENCE_INFO";
        public const string UPR_PR_GET_LICIENCE_INFO = "PR_GET_LICIENCE_INFO";
        public const string UPR_PR_INS_CUST_LICIENCE_INFO = "PR_INS_CUST_LICIENCE_INFO";
        public const string UPR_PR_GET_USER_PASSWORD = "PR_GET_USER_PASSWORD";
        public const string UPR_PR_INS_USERSESSION_new = "PR_INS_USERSESSION_new";
        public const string UPR_GET_PASSWORD_FLAG = "PR_GET_PASSWORD_FLAG";
        public const string UPR_GET_USER_STATUS = "PR_GET_USER_STATUS";
        public const string UPR_INSUPD_SHIFT_LOG = "PR_INSUPD_SHIFT_LOG";
        public const string UPR_CHECK_USERPASSWORD = "PR_CHECK_USERPASSWORD";
        public const string UPR_GETALL_USER_DETAILS = "PR_GETALL_USER_DETAILS";
        public const string UPR_PR_GET_DEPT_DOC_DET = "PR_GET_DEPT_DOC_DET";
        public const string UPR_PR_GET_DEPT_DOC_AUTO = "PR_GET_DEPT_DOC_AUTO";
        public const string UPR_PR_GET_DEPT_DOCLIST = "PR_GET_DEPT_DOCLIST";
        public const string UPR_PR_GET_DEPT_DOC_AUTOCOMP = "PR_GET_DEPT_DOC_AUTOCOMP";
        public const string UPR_GET_HINTQSNS = "PR_GET_HINTQSNS";
        public const string UPR_UPD_USER_DETAILS = "PR_UPD_USER_DETAILS";
        public const string UPR_GET_SERVICES_BY_SERVICE_GROUPID = "PR_GET_SERVICES_BY_SERVICE_GROUPID";

        public const string UPR_PR_GET_RESULT_SRV_MODIFY = "PR_GET_RESULT_SRV_MODIFY";
        public const string UPR_PR_GET_ASSAY_DETAILS_RES_EDIT = "PR_GET_ASSAY_DETAILS_RES_EDIT";

        public const string UPR_GET_VW_SERVICE_DETAIL_BILL = "PR_GET_VW_SERVICE_DETAIL_BILL";
        public const string UPR_GET_DOCUMENT_DETL = "PR_GET_DOCUMENT_DETL";
        public const string UPR_INS_APT_RSRC_SCHTIME = "PR_INS_APT_RSRC_SCHTIME";
        public const string UPR_INS_DOC_FORMAT_DET = "PR_INS_DOC_FORMAT_DET";
        public const string UPR_GET_FORMATS = "PR_GET_FORMATS";
        public const string UPR_INS_DOC_FORMAT_HDR = "PR_INS_DOC_FORMAT_HDR";
        public const string UPR_GET_DOC_FORMAT_DET = "PR_GET_DOC_FORMAT_DET";
        public const string UPR_GETALL_FOREIGN_LOC = "PR_GETALL_FOREIGN_LOC_MAP";
        public const string UPR_DEL_TRANSACTIONSLOCS = "PR_DEL_TRANSACTIONSLOCS";
        public const string UPR_INSUPD_DOC_FORMAT = "PR_INSUPD_DOC_FORMAT";
        public const string UPR_GET_DOC_FORMAT_PAGE = "PR_GET_DOC_FORMAT_PAGE";
        public const string UPR_DEL_FORMATS = "PR_DEL_FORMATS";
        public const string UPR_DEL_LOC_BASED_SERVICES = "PR_DEL_LOC_BASED_SERVICES";
        public const string UPR_PR_GET_APT_RSRCSCH = "PR_GET_APT_RSRCSCH";
        public const string UPR_GET_USER_SESSION_STIME = "PR_GET_USER_SESSION_STIME";
        public const string UPR_UPD_USER_CHANGE_PASSWORD = "PR_UPD_USER_CHANGE_PASSWORD";
        public const string UPR_GET_LABTRANSACTIONS_AUTOCOMPLTE = "PR_GET_LABTRANSACTIONS_AUTOCOMPLTE";
        public const string UPR_GET_VW_APT_RSRC_SCH_BY_SERVICE = "PR_GET_VW_APT_RSRC_SCH_BY_SERVICE";
        public const string PR_GET_FO_TRANDET = "PR_GET_FO_TRANDET";
        public const string UPR_INS_FO_RECPAY_CNCL = "PR_INS_FO_RECPAY_CNCL";
        public const string UPR_INSURT_SURGIRIES = "PR_INSURT_SURGIRIES";
        public const string UPR_GET_SERVICE_ENTRY_REPORT = "PR_GET_SERVICE_ENTRY_REPORT";
        public const string UPR_GET_AUTHORIZATIONREPORT = "PR_GET_AUTHORIZATIONREPORT";
        public const string UPR_GET_POSTDISCOUNTS = "PR_GET_POSTDISCOUNTS";
        public const string UPR_GET_CANCELLATION_REPORTS_NEW = "PR_GET_CANCELLATION_REPORTS_NEW";
        public const string UPR_GET_IP_OP_DOCTOR_WISE_REPORT = "PR_GET_IP_OP_DOCTOR_WISE_REPORT";
        public const string UPR_GET_APPOINTMENT_REPORT = "PR_GET_APPOINTMENT_REPORT";
        public const string UPR_GET_USERWISE_PRINT_TRAKKER = "PR_GET_USERWISE_PRINT_TRAKKER";
        public const string UPR_GET_LAB_STATISTICS = "PR_GET_LAB_STATISTICS";
        public const string UPR_GET_DEPARTMENT_STATICS_REPORT = "PR_GET_DEPARTMENT_STATICS_REPORT";
        public const string UPR_GET_DAYCARE_REPORT = "PR_GET_DAYCARE_REPORT";
        public const string UPR_GET_BILL_REFERAL_DETAILS_REPORT = "PR_GET_BILL_REFERAL_DETAILS_REPORT";
        public const string UPR_GET_SERVICE_DETAILSMAIN = "PR_GET_SERVICE_DETAILSMAIN";
        public const string UPR_GET_MIS_REPORT = "PR_GET_MIS_REPORT";
        public const string UPR_GET_MIS_REPORT_DET = "PR_GET_MIS_REPORT_DET";
        public const string UPR_GET_ADMN_DOCTOR_SETTLEMENT = "PR_GET_ADMN_DOCTOR_SETTLEMENT";
        public const string UPR_GET_PRINT_PERMISSION = "PR_GET_PRINT_PERMISSION";
        public const string UPR_GET_LAB_PARAMETER_REPORT = "PR_GET_LAB_PARAMETER_REPORT";
        public const string UPR_GETALL_REFUND_REPORT_NEW = "PR_GETALL_REFUND_REPORT_NEW";
        public const string UPR_GET_MASTER_DETAILES_REPORT = "PR_GET_MASTER_DETAILES_REPORT";
        public const string UPR_GET_REG_COST_CENTER = "PR_GET_REG_COST_CENTER";
        public const string UPR_GETALL_PENDING_INDENTS = "PR_GETALL_PENDING_INDENTS";
        #endregion

        #region Loc Based Services
        public const string UPR_INS_LOC_SERVICE_MAP = "PR_INS_LOC_SERVICE_MAP";
        public const string UPR_GET_LOC_SERVICE_MAP = "PR_GET_LOC_SERVICE_MAP";
        public const string UPR_PR_GET_WARD_BED_DETAILS = "PR_GET_WARD_BED_DETAILS";
        #endregion

        #region VOUCHER_PAYMENT

        public const string UPR_INSUPD_VOUCHER_PAYMENT = "PR_INSUPD_VOUCHER_PAYMENT";
        public const string UPR_GETALL_VOUCHER_PAYMENTS = "PR_GETALL_VOUCHER_PAYMENT";
        public const string UPR_GET_VOUCHER_PAYMENT = "PR_GET_VOUCHER_PAYMENT";
        public const string UPR_DEL_VOUCHER_PAYMENT = "PR_DEL_VOUCHER_PAYMENT";
        public const string UPR_GET_VOUCHER_AUTO_COMP = "PR_GET_VOUCHER_AUTO_COMPLETE";
        public const string UPR_INS_FOREIGN_LOC = "PR_INS_FOREIGN_LOC_MAP";
        public const string UPR_GET_LOC = "PR_GET_LOC";
        public const string UPR_GET_EXCEPT_LOC = "PR_GET_EXCEPT_LOC";
        public const string UPR_GETALL_SERVICE_GRP = "PR_GETALL_SERVICE_GRP";
        public const string UPR_GET_SERVICE_GROUP = "PR_GET_SERVICE_GROUP";
        public const string UPR_GET_SERVICE_LOCATION = "PR_GET_SERVICE_LOCATION";

        #endregion

        #region User Permission Report
        public const string UPR_GET_DOC_USER_MODULE = "PR_GET_DOC_USER_MODULE";
        public const string UPR_GET_DOCUMENT_AUTO = "PR_GET_DOCUMENT_AUTO";
        public const string UPR_GET_MODULE_AUTO = "PR_GET_MODULE_AUTO";
        public const string UPR_GET_MODULE_AUTOCOMP = "PR_GET_MODULE_AUTOCOMP";
        public const string UPR_GET_DOCUMENT_AUTOCOMP = "PR_GET_DOCUMENT_AUTOCOMP";
        public const string UPR_GET_DOCFORMATAUTOCOMPLTE = "PR_GET_DOCFORMATAUTOCOMPLTE";
        #endregion

        #region Referal Report
        public const string UPR_GET_REFERAL_DETAILS_REPORT = "PR_GET_REFERAL_DETAILS_REPORT";
        public const string UPR_GETALL_REFERAL_LETTER = "PR_GETALL_REFERAL_LETTER";
        #endregion

        #region Lookupservice
        //Department Lookup
        public const string UPR_GET_DEPT_SRVGRP_PAGE_ADVANCE = "PR_GET_DEPT_SRVGRP_PAGE_ADVANCE";
        public const string UPR_GET_DEPT_SRVGRP_AUTO = "PR_GET_DEPT_SRVGRP_AUTO";
        //Doctor Lookup
        public const string UPR_GET_DOCTOR_PAGE_ADVANCE = "PR_GET_DOCTOR_PAGE_ADVANCE";
        public const string UPR_GET_DOCTOR_AUTO = "PR_GET_DOCTOR_AUTO";
        //ServiceGroup Lookup
        public const string UPR_GET_SERVICE_GROUP_PAGE_ADVANCE = "PR_GET_SERVICE_GROUP_PAGE_ADVANCE";
        public const string UPR_GET_SERVICE_GROUP_AUTO = "PR_GET_SERVICE_GROUP_AUTO";
        //Service Lookup
        public const string UPR_GET_SERVICE_PAGE_ADVANCE = "PR_GET_SERVICE_PAGE_ADVANCE";
        public const string UPR_GET_SERVICE_AUTO = "PR_GET_SERVICE_AUTO";
        #endregion

        #region Bed Transfer
        public const string UPR_GET_BED_LOOKUP = "PR_GET_BED_LOOKUP";
        public const string UPR_GET_BED_AUTO = "PR_GET_BED_AUTO";
        public const string UPR_GET_ROOM_LOOKUP = "PR_GET_ROOM_LOOKUP";
        public const string UPR_GET_ROOM_AUTO = "PR_GET_ROOM_AUTO";
        public const string UPR_GET_WARD_LOOKUP = "PR_GET_WARD_LOOKUP";
        public const string UPR_GET_WARD_AUTO = "PR_GET_WARD_AUTO";
        public const string UPR_GET_BED_TRANSACTION = "PR_GET_BED_TRANSACTION";
        public const string UPR_GET_ADT_ADMN_BED = "PR_GET_ADT_ADMN_BED";
        public const string UPR_INSUPD_ADMN_BED = "PR_INSUPD_ADMN_BED";
        public const string UPR_CHK_RETBEDS_FOR_ADMNID = "PR_CHK_RETBEDS_FOR_ADMNID";
        #endregion

        #region Releas Of Bed
        public const string UPR_UPDATE_BED = "PR_UPDATE_BED";
        public const string UPR_GET_RELEASE_BED = "PR_GET_RELEASE_BED";
        #endregion

        #region Pre Admission
        public const string UPR_INSUPD_PRE_ADMN = "PR_INSUPD_PRE_ADMN";
        public const string UPR_GET_ADT_PRE_ADMN_FPNL = "PR_GET_ADT_PRE_ADMN_FPNL";
        public const string UPR_GET_ADT_PRE_ADMN_PAGING = "PR_GET_ADT_PRE_ADMN_PAGING";
        public const string UPR_GET_ADT_PRE_ADMN_AUTO = "PR_GET_ADT_PRE_ADMN_AUTO";
        public const string UPR_GET_PRE_ADDMISSION = "PR_GET_PRE_ADDMISSION";
        #endregion

        #region IP PATIENT SERVICES
        public const string Get_IPPatDtls = "PR_GET_ADT_ADMN";
        public const string Ins_IPServiceEntry = "PR_INS_ADT_IMR_SRV";
        public const string Get_IPSetrvices = "PR_GET_ADT_IMR_SRV";
        public const string Ins_IPCancelService = "PR_INS_ADT_IMR_CNCL_SRV";
        public const string Get_IPServiceHeaderDetails = "PR_GETALL_IMR_SRV";
        public const string GetAll_IPServicesByID = "PR_GETALL_ADT_IMR_SRV";
        public const string Get_Auto_ADTIMR_Details = "PR_GET_AUTO_ADT_IMR_DTLS";
        public const string Ins_ADTIMR_SRV_XML = "PR_INS_ADT_IMR_SRV_XML";
        public const string Ins_ADMIMR_CancelServices = "PR_INS_ADT_IMR_CNCL_SRV_XML";
        public const string UPR_INSUPD_ADT_IMR_CNCL = "PR_INSUPD_ADT_IMR_CNCL";
        public const string UPR_GETALL_ADT_IMR_CNCL = "PR_GETALL_ADT_IMR_CNCL";
        public const string UPR_GET_AUTO_ADT_IMR_CNCL = "PR_GET_AUTO_ADT_IMR_CNCL";
        public const string UPR_GETALL_IMR_CNCL_SRV = "PR_GETALL_IMR_CNCL_SRV";
        public const string GetServiceDetailsBasedOnSrvType = "PR_GETALL_SERVICE_BY_TYPEIP";
        public const string UPR_GETALL_ADT_IMR_SRV_BY_ADMN_NO = "PR_GETALL_ADT_IMR_SRV_BY_ADMN_NO";
        #endregion

        #region User Audit
        public const string UPR_GET_USER_DOC_AUDIT = "PR_GET_USER_DOC_AUDIT";
        public const string UPR_GET_USER_SHIFT_LOG = "PR_GET_USER_SHIFT_LOG";
        #endregion

        #region RoleServiceGroup
        public const string PR_INSUPD_ROLE_SERVICE_GROUP = "PR_INSUPD_ROLE_SERVICE_GROUP";
        public const string PR_GET_ROLE_SERVICE_GROUP = "PR_GET_ROLE_SERVICE_GROUP";

        #endregion

        #region IpAdmissionCancel
        public const string UPR_INSUPD_ADT_ADMN_BED = "PR_INSUPD_ADT_ADMN_BED";
        public const string UPR_GET_ADT_ADMN_CANCEL = "PR_GET_ADT_ADMN_CANCEL";
        #endregion

        #region Doctor Transfer
        public const string UPR_GET_ADT_ADMN_BY_UMR_NO = "PR_GET_ADT_ADMN_BY_UMR_NO";
        public const string UPR_INSERT_ADT_ADMN = "PR_INSERT_ADT_ADMN";
        public const string UPR_GET_CANCELLEDADMISSIONSAUTOCOMPLTE = "PR_GET_CANCELLEDADMISSIONSAUTOCOMPLTE";
        #endregion

        #region Re Admission
        public const string UPR_INSUPD_PE_ADMN = "PR_INSUPD_PE_ADMN";
        public const string UPR_GET_RE_AMDN = "PR_GET_RE_AMDN";
        #endregion

        #region Patient Discharge
        public const string UPR_GET_SUMMARY_LIST = "PR_GET_SUMMARY_LIST";
        public const string UPR_GET_ADT_FORMAT_SERACH = "PR_GETALL_ADT_DSCHRG_FRMT";
        public const string UPR_INSUPD_ADT_DSCHRG = "PR_INSUPD_ADT_DSCHRG";
        public const string UPR_GET_FO_BILL = "PR_GET_FO_BILL";
        public const string UPR_GET_ADT_DSCHRG_AUTO = "PR_GET_ADT_DSCHRG_AUTO";
        #endregion

        #region ICDCodes

        public const string PR_INSUPD_ICD = "PR_INSUPD_ICD";
        public const string PR_GET_ICDINFO = "PR_GET_ICDINFO";
        public const string PR_GET_ICDAUTO = "PR_GET_ICDAUTO";
        public const string UPR_INSUPD_ADT_DIAG = "PR_INSUPD_ADT_DIAG";
        public const string UPR_GET_ICD_NAVIGATION = "PR_GET_ICD_NAVIGATION";
        public const string UPR_DEL_ICD_CODES = "PR_DEL_ICD_CODES";

        #endregion

        #region IPapproxmateBill

        public const string UPR_INS_ADT_APPBILL = "PR_INS_ADT_APPBILL";
        public const string UPR_INS_PACKAGE_BILL = "PR_INS_PACKAGE_BILL";

        public const string UPR_GETALL_ADT_APPBILL = "PR_GETALL_ADT_APPBILL";
        public const string UPR_GET_AUTO_ADT_APPBILL = "";

        #endregion

        #region DeliveryInfo

        public const string UPR_GET_BABYSTATUS = "PR_GET_BABYSTATUS";
        public const string UPR_GET_DELIVERYTYPE = "PR_GET_DELIVERYTYPE";
        public const string UPR_GET_DELVRYINFO = "PR_GET_DELVRY_INFO";
        public const string UPR_INSUPD_ADT_DELVREY = "PR_INSUPD_ADT_DELVREY";
        public const string UPR_INSUPD_ADT_DELVRY = "PR_INSUPD_ADT_DELVRY";
        public const string UPR_GET_DELVRY_DET_INFO = "PR_GET_DELVRY_DET_INFO";
        public const string UPR_GET_DELVRY_INFO_AUTO = "PR_GET_DELVRY_INFO_AUTO";
        public const string UPR_GET_DELVRY_NAVIGATION = "PR_GET_DELVRY_NAVIGATION";
        public const string UPR_DEL_DELVRY_INFO = "PR_DEL_DELVRY_INFO";

        #endregion

        #region ADT_SRV_LOCK

        public const string UPR_INSUPD_ADT_SRV_LOCK = "PR_INSUPD_ADT_SRV_LOCK";
        public const string UPR_GET_ADT_SRV_LOCK = "PR_GET_ADT_SRV_LOCK";
        public const string UPR_GETALL_ADT_SRV_LOCK = "PR_GETALL_ADT_SRV_LOCK";
        public const string UPR_GET_ADT_SRV_LOCK_AUTO_COMP = "PR_GET_ADT_SRV_LOCK_AUTO_COMP";
        #endregion

        #region ADT_CREDIT_LIMIT
        public const string UPR_INSUPD_ADT_CREDIT_LIMIT = "PR_INSUPD_ADT_CREDIT_LIMIT";
        public const string UPR_GETALL_ADT_CREDIT_LIMIT = "PR_GETALL_ADT_CREDIT_LIMIT";
        public const string UPR_GET_ADT_CREDIT_LIMIT_AUTO = "PR_GET_ADT_CREDIT_LIMIT_AUTO";
        #endregion

        #region BILL_SETMNT

        public const string UPR_GET_BILL_SETMNT = "PR_GET_BILL_SETMNT";
        public const string UPR_INSUPD_BILL_SETMNT_DET = "PR_INSUPD_BILL_SETMNT_DET";
        public const string UPR_GET_BILL_DET_SETMNT = "PR_GET_BILL_DET_SETMNT";
        public const string UPR_GETALL_BILL_SETMNT = "PR_GETALL_BILL_SETMNT";
        public const string UPR_GET_SETTLMENT_VIEW = "PR_GET_SETTLMENT_VIEW";

        #endregion

        #region IPFinal Bill Cancel

        public const string UPR_INS_FO_BILL_CNCL = "PR_INS_FO_BILL_CNCL";
        public const string UPR_GET_BILL_CNCL_DT = "PR_GET_BILL_CNCL_DT";
        public const string UPR_GET_OP_CNCL_SRV = "PR_GET_OP_CNCL_SRV";
        public const string UPR_GET_FO_BILL_CNCL_SRV = "PR_GET_FO_BILL_CNCL_SRV";
        public const string UPR_GET_VW_IP_BILL_DISCHRG_DET = "PR_GET_VW_IP_BILL_DISCHRG_DET";
        public const string UPR_GET_FO_BILL_CLCL_SRV_All = "PR_GET_FO_BILL_CLCL_SRV";

        #endregion

        #region Ip Admission Report
        public const string UPR_GET_ADMISSION_REPORT_INFO = "PR_GET_ADMISSION_REPORT_INFO";
        public const string UPR_GETALL_ADMIN_DETAILS = "PR_GETALL_ADMIN_DETAILS";
        #endregion

        #region DischargeSummary Templete
        public const string UPR_INSUPD_ADT_DSCHRG_FRMT_XML = "pr_ins_dschrg_frmt_note_xml";
        public const string GET_ADT_DSCHRG_FRMT_NOTE = "PR_GET_ADT_DSCHRG_FRMT_NOTE";
        public const string UPR_INSUPD_ADT_DSCHRG_SUM_NOTE_XML = "PR_INSUPD_ADT_DSCHRG_SUM_NOTE_XML";
        public const string UPR_GETALL_ADT_DSCHRG_FRMT_SEARCH = "PR_GETALL_ADT_DSCHRG_FRMT_SEARCH";
        public const string UPR_GETALL_ADT_DSCHRG_SERVICES = "PR_GET_DSCHRG_SERVICE_INFO";
        public const string UPR_GET_ADT_DISCHARGE_SUMMARY_AUTO = "PR_GET_ADT_DISCHARGE_SUMMARY_AUTO";
        public const string UPR_AUTO_ADT_DSCHRG_FRMT = "PR_AUTO_ADT_DSCHRG_FRMT";
        public const string UPR_GETALL_ASSAY_RESULT_MODIFYAPPROVAL = "PR_GETALL_ASSAY_RESULT_MODIFYAPPROVAL";
        public const string UPR_GETALL_ASSAY_RESULT_DUALREPORT = "PR_GETALL_ASSAY_RESULT_DUALREPORT";
        public const string UPR_GETALL_ASSAY_RESULT_RADILOGY_DISPATCH = "PR_GETALL_ASSAY_RESULT_RADILOGY_DISPATCH";
        public const string UPR_DEL_DSCHRG_FRMT = "PR_UPD_ADT_DSCHRG_FRMT";
        public const string UPR_GET_CATHLAB_PROCEDURES = "PR_GET_CATHLAB_PROCEDURES";
        public const string UPR_GET_DOCTOR_INFO = "PR_GET_DOCTOR_INFO";

        #endregion

        #region Procedures related to XML
        public const string UPR_UPD_ASSAY_RESULT_SRV_STAT_XML = "PR_UPD_ASSAY_RESULT_SRV_STAT_XML";
        public const string UPR_INSUPD_ASSAY_RESULT_SRVSTAT_XML = "PR_INSUPD_ASSAY_RESULT_SRVSTAT_XML";
        public const string UPR_INSUPD_ASSAY_FORMAT_COMP_XML = "PR_INSUPD_ASSAY_FORMAT_COMP_XML";
        public const string UPR_INSUPD_ASSAY_TEMP_COMP_XML = "PR_INSUPD_ASSAY_TEMP_COMP_XML";
        public const string UPR_INSUPD_COMP_MTHD_NRML_XML = "PR_INSUPD_COMP_MTHD_NRML_XML";
        public const string UPR_INSUPD_ASSAY_CANCEL_SRV_XML = "PR_INSUPD_ASSAY_CANCEL_SRV_XML";
        public const string UPR_INSUPD_ASSAY_SPEC_SRV_XML = "PR_INSUPD_ASSAY_SPEC_SRV_XML";
        #endregion

        #region ADT_DSCHRG_EXCPN

        public const string UPR_GET_PATIENT_CLASS = "PR_GET_PATIENT_CLASS";
        public const string UPR_GET_EXCEPTION_TYPE = "PR_GET_EXCEPTION_TYPE";
        public const string UPR_INSUPD_ADT_DSCHRG_EXCPN = "PR_INSUPD_ADT_DSCHRG_EXCPN";

        #endregion

        #region SMS SETTINGS
        public const string UPR_GET_DEPT_EXTERNAL_SETIDS = "PR_GET_DEPT_EXTERNAL_SETIDS";
        public const string UPR_GET_COM_MSG_FORMAT_TYPE = "PR_GET_COM_MSG_FORMAT_TYPE";
        public const string UPR_GET_COM_MSG_TRANSACTION_TYPE = "PR_GET_COM_MSG_TRANSACTION_TYPE";
        public const string UPR_INSUPD_COM_MSG_TEMPLATE = "PR_INSUPD_COM_MSG_TEMPLATE";
        public const string UPR_GETALL_COM_MSG_FORMAT_TEMP = "PR_GETALL_COM_MSG_FORMAT_TEMP";
        public const string UPR_INSUPD_COM_MSG_AMT_RANGE = "PR_INSUPD_COM_MSG_AMT_RANGE";
        public const string UPR_GETALL_COM_MSG_AMT_RANGE = "PR_GETALL_COM_MSG_AMT_RANGE";
        public const string UPR_GET_COM_MSG_OPERATION_TYPE = "PR_GET_COM_MSG_OPERATION_TYPE";
        public const string UPR_GET_COM_MSG_REFERENCE_TYPE = "PR_GET_COM_MSG_REFERENCE_TYPE";
        public const string UPR_GETALL_COM_MSG_ADDR_BOOK = "PR_GETALL_COM_MSG_ADDR_BOOK";
        public const string UPR_INSUPD_COM_MSG_ADDR_BOOK = "PR_INSUPD_COM_MSG_ADDR_BOOK";
        public const string UPR_GET_MSG_METHOD_OF_COMMUNICATION = "PR_GET_MSG_METHOD_OF_COMMUNICATION";
        public const string UPR_GET_IMAGE_TYPE = "PR_GET_IMAGE_TYPE";
        public const string UPR_GET_ALL_USERS = "PR_GET_ALL_USERS";
        public const string UPR_UPD_USERS_USERID_DEPTID = "PR_UPD_USERS_USERID_DEPTID";
        public const string UPR_INSUPD_TRANS_FRMTYPE = "PR_INSUPD_TRANS_FRMTYPE";
        public const string UPR_GET_CMMAPFORMATS = "PR_GET_CMMAPFORMATS";
        public const string UPR_INSUPD_COM_MSG_AMT_RANGE_USER = "PR_INSUPD_COM_MSG_AMT_RANGE_USER";
        public const string UPR_DEL_COM_MSG_SETTING = "PR_DEL_COM_MSG_SETTING";
        public const string UPR_GET_COM_MSG_REFERENCE_DET = "PR_GET_COM_MSG_REFERENCE_DET";
        public const string UPR_GET_MAPTRANS = "PR_GET_COM_MAPTRANS";
        public const string UPR_GET_MAPFORMATS = "PR_GET_COM_MAPFORMATS";
        public const string UPR_GET_VIEW_PAT0_REG0_DETAILS = "PR_GET_VIEW_PAT0_REG0_DETAILS";
        public const string UPR_GETALL_PR_GET_COM_MSG_SETTING = "PR_GETALL_PR_GET_COM_MSG_SETTING";
        public const string UPR_GET_COM_MSG_SETTING = "PR_GET_COM_MSG_SETTING";
        public const string UPR_GET_COM_MSG_TRANS_OPER = "PR_GET_COM_MSG_TRANS_OPER";
        public const string UPR_GET_COM_MSG_TRANS_OPER_DTLS = "PR_GET_COM_MSG_TRANS_OPER_DTLS";
        public const string UPR_GETALL_COM_MSG_MESSAGE = "PR_GETALL_COM_MSG_MESSAGE";
        public const string UPR_SENDMESSAGE_WEBSERVICE = "PR_SENDMESSAGE_WEBSERVICE";
        public const string UPR_GET_AMT_RANGE_AUTO = "PR_GET_AMT_RANGE_AUTO";
        public const string UPR_GET_AMT_RANGE_NAVIGATION = "PR_GET_AMT_RANGE_NAVIGATION";
        public const string UPR_DEL_COM_MSG_AMT_RANGE = "PR_DEL_COM_MSG_AMT_RANGE";
        public const string UPR_DEL_COM_MSG_ADDRBOOK = "PR_DEL_COM_MSG_ADDRBOOK";
        public const string UPR_GET_ADDRBOOKAUTO = "PR_GET_ADDRBOOKAUTO";
        public const string UPR_UPD_COM_MSG_STATUS = "PR_UPD_COM_MSG_STATUS";
        public const string UPR_GET_MSGCOMM_AUTO = "PR_GET_MSGCOMM_AUTO";
        public const string UPR_GET_USERS_DEPTMAAP = "PR_GET_USERS_DEPTMAAP";
        public const string UPR_GET_PATIENT_INFO_NEW = "PR_GET_PATIENT_INFO";
        public const string UPR_GET_IP_PATIENT_INFO = "PR_GET_IP_PATIENT_INFO";
        public const string UPR_GET_ALL_PACKAGES = "PR_GET_ALL_PACKAGES";
        public const string UPR_GET_SERVICE_PACKEGES = "PR_GET_SERVICE_PACKEGES";
        public const string UPR_GET_WARDGROUPWISE_SERVICE_PRICE = "PR_GET_WARDGROUPWISE_SERVICE_PRICE";

        #endregion

        #region Ip Reports
        public const string UPR_GET_IP_GENERAL_REPORT = "PR_GET_IP_GENERAL_REPORT";
        public const string UPR_GET_IP_EXP_REPORT = "PR_GET_IP_EXP_REPORT";
        public const string UPR_GET_SHIFT_SUB_ADV_REPORT = "PR_GET_SHIFT_SUB_ADV_REPORT";
        public const string UPR_GET_WARD_REPORT_DTLS = "PR_GET_WARD_REPORT_DTLS";
        public const string UPR_GET_DISCHARGE_REPORT = "PR_GET_DISCHARGE_REPORT";
        public const string UPR_GET_BILL_BREAKUP_REPORT = "PR_GET_BILL_BREAKUP_REPORT";
        public const string UPR_GET_COMPLETE_BED_REPORT = "PR_GET_COMPLETE_BED_REPORT";
        public const string UPR_COMPARE_DOC_FORMAT = "PR_COMPARE_DOC_FORMAT";
        public const string UPR_GETALL_DUE_RECEIPTS_REPORT = "PR_GETALL_DUE_RECEIPTS_REPORT";
        public const string UPR_GET_PACKAGE_SRV = "PR_GET_PACKAGE_SRV";
        public const string UPR_GET_PACKAGE_CONV_SRV = "PR_GET_PACKAGE_CONV_SRV";
        public const string UPR_GET_PATIENT_HISTORY = "PR_GET_PATIENT_HISTORY";
        public const string UPR_GET_BREAKUP_DETL = "PR_GET_BREAKUP_DETL";
        #endregion

        #region IPReceipt Cancellation
        public const string UPR_DSCRD_REF_TAX_AUTO = "PR_DSCRD_REF_TAX_AUTO";
        public const string UPR_GETALL_FO_RECPAY_REF = "PR_GETALL_FO_RECPAY_REF_BACK";
        public const string UPR_INSUPD_IP_RECEIPT_CANCEL = "PR_INSUPD_IP_RECEIPT_CANCEL";
        #endregion

        #region Inpatient Summary

        public const string UPR_GET_IP_PATIENT_LAB_INFRM = "PR_GET_IP_PATIENT_LAB_INFRM";
        public const string UPR_GET_IP_PATIENT_INFORMATION = "PR_GET_IP_PATIENT_INFORMATION";
        public const string UPR_GET_IP_PATIENT_DTL = "PR_GET_IP_PATIENT_DTL";
        public const string UPR_GET_IP_ALLERGIES = "PR_GET_IP_ALLERGIES ";
        public const string UPR_GET_GENERAL_EXAMINATION = "PR_GET_GENERAL_EXAMINATION";
        public const string UPR_GET_INTAKE_OUTPUT = "PR_GET_INTAKE_OUTPUT";
        public const string UPR_GET_SERVICE_GROUPS_IP = "PR_GET_SERVICE_GROUPS_IP";
        public const string UPR_GET_DIAGONSIS_PROBLEMS = "PR_GET_DIAGONSIS_PROBLEMS";

        #endregion

        #region ADT_DISCNT

        public const string UPR_INSUPD_ADT_DISCNT = "PR_INSUPD_ADT_DISCNT_SRV_XML";
        public const string UPR_GET_IP_ADT_DISCNT_SRV = "PR_GET_IP_ADT_DISCNT_SRV";
        public const string UPR_GET_OP_ADT_DISCNT_SRV = "PR_GET_OP_ADT_DISCNT_SRV";
        public const string UPR_GETALL_ADT_DISCNT = "PR_GETALL_ADT_DISCNT";
        public const string UPR_GET_AUTO_ADT_DISCNT_DTLS = "PR_GET_AUTO_ADT_DISCNT_DTLS";
        public const string UPR_CNCL_POST_DISCNT = "PR_CNCL_POST_DISCNT";
        public const string UPR_DEL_PATIENT_PROCEDURE = "PR_DEL_PATIENT_PROCEDURE";
        public const string UPR_GET_APPROVE_DISCNT = "PR_GET_APPROVE_DISCNT";


        #endregion

        #region PACKAGE_CONVERTION

        public const string UPR_INSUPD_PACKAGE_CONVERTION = "PR_INSUPD_PACKAGE_CONV_SRV_XML";
        public const string UPR_GET_PACKAGE_CONVERTION = "PR_GET_PACKAGE_CONVERTION";
        public const string UPR_GETALL_PACKAGE_CONVERTION = "PR_GETALL_PACKAGE_CONV";
        public const string UPR_GET_PCKG_CONV_DET = "PR_GET_PCKG_CONV_DET";
        public const string UPR_GET_CONV_PKG_DET = "PR_GET_CONV_PKG_DET";
        public const string UPR_PR_GET_PKG_BILL_DETAILS_VIEW = "PR_GET_PKG_BILL_DETAILS_VIEW";

        public const string UPR_GET_AUTO_PCKG_CONV = "PR_GET_AUTO_PCKG_CONV";

        #endregion

        #region ASSAY_DOCUMENTS
        public const string UPR_GETALL_APPBILL_TRAN_TYPE = "APPBILL_TRAN_TYPE";
        public const string UPR_GETALL_DOCUMENT_TYPE = "PR_GETALL_DOCUMENT_TYPE";
        public const string UPR_GET_DOCUMENT_TYPE_AUTO = "PR_GET_DOCUMENT_TYPE_AUTO";
        public const string UPR_INSUPD_ASSAY_DOCUMENTS = "PR_INSUPD_ASSAY_DOCUMENTS";
        public const string UPR_GET_ASSAY_DOCUMENTS = "PR_GET_ASSAY_DOCUMENTS";
        public const string UPR_GET_ASSAY_DOCUMENTS_AUTO = "PR_GET_ASSAY_DOCUMENTS_AUTO";
        public const string UPR_DEL_ASSAY_DOCUMENTS = "PR_DEL_ASSAY_DOCUMENTS";
        public const string UPR_GET_ASSAY_DOCUMENTS_FPNL = "PR_GET_ASSAY_DOCUMENTS_FPNL";
        public const string UPR_GET_VW_SRV_DEPARTMENTS = "PR_GET_VW_SRV_DEPARTMENTS";
        public const string UPR_GET_VW_SRV_DEPARTMENTS_AUTO = "PR_GET_VW_SRV_DEPARTMENTS_AUTO";
        public const string UPR_GETALL_VW_SRV_DEPARTMENTS = "PR_GETALL_VW_SRV_DEPARTMENTS";
        public const string UPR_INSUPD_DOCUMENT_NOTES = "PR_INSUPD_DOCUMENT_NOTES";
        public const string UPR_GET_DOCUMENT_NOTES = "PR_GET_DOCUMENT_NOTES";
        public const string UPR_GETALL_DOCUMENT_NOTES = "PR_GETALL_DOCUMENT_NOTES";
        #endregion

        #region Doctors Desk
        public const string UPR_GET_PATIENT_DOCTOR_ID = "PR_GET_PATIENT_DOCTOR_ID";
        public const string UPR_GET_ASSAY_RESULT_REFID = "PR_GET_ASSAY_RESULT_REFID";
        public const string UPR_GET_ADT_IMR_SRV_TRET_ID = "PR_GET_ADT_IMR_SRV_TRET_ID";
        public const string UPR_GET_LBRESULTS_DOCS = "PR_GET_LBRESULTS_DOCS";
        public const string UPR_GET_PERSONS_INFO = "PR_GET_PERSONS_INFO";
        public const string UPR_GET_CONSULTENT_INFO = "PR_GET_CONSULTENT_INFO";
        public const string UPR_GET_DOCTOR_STATUS_COUNT = "PR_GET_DOCTOR_STATUS_COUNT";
        public const string UPR_GET_MAILMSGDDASK = "PR_GET_MAILMSGDDASK";
        public const string UPR_GET_APT_RSRC_SCH_TIME_DDESK = "PR_GET_APT_RSRC_SCH_TIME_DDESK";
        public const string UAPT_PR_GET_CHIEFCOMPLAINT = "APT_PR_GET_CHIEFCOMPLAINT";
        public const string UPR_INSUPD_CHIEFCOMPLAINT = "PR_INSUPD_CHIEFCOMPLAINT";
        public const string UPR_DEL_PATIENT_MEDICAL_HISTORY = "PR_DEL_PATIENT_MEDICAL_HISTORY";
        public const string UPR_GETALL_PATIENTMEDICALHISTORY = "PR_GETALL_PATIENTMEDICALHISTORY";
        public const string UPR_GET_DURATION = "PR_GET_DURATION";
        public const string UPR_GET_FREQUENCY = "PR_GET_FREQUENCY";
        public const string UPR_GET_PRIORITY1 = "PR_GET_PRIORITY";
        public const string UPR_INS_CHIEF_COMPLENTS = "PR_INS_CHIEF_COMPLENTS";
        public const string UPR_GET_AUTO_CHIEF_CMPT = "PR_GET_AUTO_CHIEF_CMPT";
        public const string UAPT_PR_GET_DIAGNOSIS = "APT_PR_GET_Diagnosis";
        public const string UPR_GETALL_GENERALEXAMINATION = "PR_GETALL_GENERALEXAMINATION";
        public const string UPR_DEL_GENERAL_EXAMINATION = "PR_DEL_GENERAL_EXAMINATION";
        public const string UPR_UPD_PATIENT_PROCEDURES1 = "PR_UPD_PATIENT_PROCEDURES";
        public const string UPR_GET_PATIENT_PROCEDURES_AUTO = "PR_GET_PATIENT_PROCEDURES_AUTO";
        public const string UPR_GET_PROCEDURES_AUTO = "PR_GET_PROCEDURES_AUTO";
        public const string UPR_INS_FAMILY_DISEASE = "PR_INS_FAMILY_DISEASE";
        public const string UPR_DEL_CHIEF_COMPLAINTS = "PR_DEL_CHIEF_COMPLAINTS";
        public const string UPR_GET_DOCTOR_PATIENT_FPNL = "PR_GET_DOCTOR_PATIENT_FPNL";
        public const string UPR_INSUPD_DRUGM = "PR_INSUPD_DRUGM";
        public const string UPR_GETALL_DRUGM = "PR_GETALL_DRUGM";
        public const string UPR_DEL_DRUG = "PR_DEL_DRUG";
        public const string UPR_GET_DRUGM_FPNL = "PR_GET_DRUGM_FPNL";
        public const string UPR_INSUPD_DRUG_HISTORY_XML = "PR_INSUPD_DRUG_HISTORY_XML";
        public const string UPR_GET_CREATEDT_DRUGHISTORY = "PR_GET_CREATEDT_DRUGHISTORY";
        public const string UPR_GETALL_DRUGHISTORY = "PR_GETALL_DRUGHISTORY";
        public const string UPR_DEL_DRUG_HISTORY = "PR_DEL_DRUG_HISTORY";
        public const string UPR_INSUPD_HEALTH_TIP = "PR_INSUPD_HEALTH_TIP";
        public const string UPR_GET_HEALTH_TIP = "PR_GET_HEALTH_TIP";
        public const string UPR_DEL_HEALTH_TIPS = "PR_DEL_HEALTH_TIPS";
        public const string UPR_GET_HEALTH_TIP_AUTO = "PR_GET_HEALTH_TIP_AUTO";
        #region Condtions
        public const string UPR_GET_CONDITIONS = "PR_GET_CONDITIONS";
        public const string UPR_GET_CONDITIONS_AUTO = "PR_GET_CONDITIONS_AUTO";
        public const string UPR_INSUPD_PATIENT_CONDITIONS = "PR_INSUPD_PATIENT_CONDITIONS";
        public const string UPR_GET_PATIENT_CONDITIONS = "PR_GET_PATIENT_CONDITIONS";
        public const string UPR_DEL_PATIENT_CONDITIONS = "PR_DEL_PATIENT_CONDITIONS";
        #endregion
        #region DoctorsViewList

        public const string UPR_GET_DOCTOR_PATIENT = "PR_GET_DOCTOR_PATIENT";
        public const string UPR_GET_IP_PATIENT_DETAILS = "PR_GET_IP_PATIENT_DETAILS";

        #endregion
        #region Recomendations
        public const string UPR_INS_RECOMMENDATIONS = "PR_INS_RECOMMENDATIONS";
        public const string UPR_DEL_PATIENT_RECOMMANDATIONS = "PR_DEL_PATIENT_RECOMMANDATIONS";
        public const string UPR_GET_PATIENT_RECOMMANDATIONS = "PR_GET_PATIENT_RECOMMANDATIONS";
        public const string UPR_INSUPD_PATIENT_RECOMMANDATIONS = "PR_INSUPD_PATIENT_RECOMMANDATIONS";
        public const string UPR_GET_RECOMMENDATIONS_AUTO = "PR_GET_RECOMMENDATIONS_AUTO";
        public const string UPR_GET_RECOMMENDATIONS_PAGE = "PR_GET_RECOMMENDATIONS_PAGE";
        #endregion

        #region MedicationsOrTreatments
        public const string UPR_GETALL_MEDICATIONS = "PR_GETALL_MEDICATIONS";
        #endregion

        #region Procedures
        public const string UPR_GETALL_PROCEDURES = "PR_GETALL_PROCEDURES";
        public const string UPR_GET_PROCEDURESAUTO = "PR_GET_PROCEDURESAUTO";
        public const string UPR_INSUPD_PATIENT_PROCEDURES = "PR_INSUPD_PATIENT_PROCEDURES";
        public const string UPR_GETALL_PATIENT_PROCS = "PR_GETALL_PATIENT_PROCS";
        public const string UPR_GET_ITEMM_FPNL = "PR_GET_ITEMM_FPNL";
        public const string UPR_DEL_ITEMM = "PR_DEL_ITEMM";
        public const string UPR_GET_ITEMM_AUTO = "PR_GET_ITEMM_AUTO";
        public const string UPR_GETALL_ITEMM = "PR_GETALL_ITEMM";
        public const string UPR_INSUPD_ITEMM = "PR_INSUPD_ITEMM";
        #endregion
        #region Immunization
        public const string UPR_PR_INSUPD_IMMUNIZATIONS_GROUP = "PR_INSUPD_IMMUNIZATIONS_GROUP";
        public const string UPR_PR_GETALL_IMMU_GRPS1 = "PR_GETALL_IMMU_GRPS1";
        public const string UPR_GET_IMMUNIZATIONS_AUTO = "PR_GET_IMMUNIZATIONS_AUTO";
        public const string UPR_DEL_IMMUNIZATIONS_GROUP = "PR_DEL_IMMUNIZATIONS_GROUP";
        public const string UPR_INSUPD_PATIENT_IMMUNIZATION_HISTORY = "PR_INSUPD_PATIENT_IMMUNIZATION_HISTORY";
        public const string UPR_INSUPD_IMMUNIZATIONS = "PR_INSUPD_IMMUNIZATIONS";
        public const string UPR_GET_IMMUNIZATIONS = "PR_GET_IMMUNIZATIONS";
        public const string UPR_GET_PATIENT_IMMUNIZATION_HISTORY = "PR_GET_PATIENT_IMMUNIZATION_HISTORY";
        public const string UPR_DEL_PATIENT_IMMUNIZATION_HISTORY = "PR_DEL_PATIENT_IMMUNIZATION_HISTORY";
        public const string UPR_UPD_PATIENT_IMMUNIZATION_HISTORY = "PR_UPD_PATIENT_IMMUNIZATION_HISTORY";
        public const string UPR_GET_PATIENT_IMMUNIZATION_HISTORY_AUTO = "PR_GET_PATIENT_IMMUNIZATION_HISTORY_AUTO";
        public const string UPR_GETALL_IMMS = "PR_GETALL_IMMS";
        #endregion
        #region DRUGLIST
        public const string UPR_GET_CHIEF_COMPLAINTS_GRP = "PR_GET_CHIEF_COMPLAINTS_GRP";
        public const string UPR_GET_MEDICINE_TYPE = "PR_GET_MEDICINE_TYPE";
        public const string UPR_GET_UOM = "PR_GET_UOM";
        public const string UPR_GET_DRUG_PATTERN = "PR_GET_DRUG_PATTERN";
        public const string UPR_GETALL_DRUG_SHAPE = "PR_GETALL_DRUG_SHAPE";
        public const string UPR_GETALL_DRUG_COLOR = "PR_GETALL_DRUG_COLOR";
        public const string UPR_GET_CHIEF_COMPLAINTS_AUTO = "PR_GET_CHIEF_COMPLAINTS_AUTO";
        public const string UPR_INS_DOCTOR_MEDICINES = "PR_INS_DOCTOR_MEDICINES";
        public const string UPR_GETALL_DOCTOR_MEDICINES = "PR_GETALL_DOCTOR_MEDICINES";
        public const string UPR_GET_DOCTOR_MEDICINES_AUTO = "PR_GET_DOCTOR_MEDICINES_AUTO";
        public const string UPR_UPD_DOCTOR_MEDICINES = "PR_UPD_DOCTOR_MEDICINES";
        public const string UPR_DEL_DOCTOR_MEDICINES = "PR_DEL_DOCTOR_MEDICINES";
        #endregion

        #region General_Examinations
        public const string UPR_INS_GENERAL_EXAMINATION = "PR_INS_GENERAL_EXAMINATION";
        public const string UPR_GET_DIAGNOSIS = "PR_GET_DIAGNOSIS";
        public const string UPR_GET_COMPLAINT_MASTER = "PR_GET_COMPLAINT_MASTER";
        public const string UPR_GET_NP_SUB_COMPLAINT0 = "PR_GET_NP_SUB_COMPLAINT0";
        #endregion

        #endregion

        #region ChangeReceiptMode
        public const string UPR_GET_IP_OP_DETAILS = "PR_GET_IP_OP_DETAILS";
        public const string UPR_INS_FO_RECPAY_CHNG_PMODE = "PR_INS_FO_RECPAY_CHNG_PMODE";
        public const string UPR_GET_FO_RECPAY_CHNG_PMODE = "PR_GET_FO_RECPAY_CHNG_PMODE";
        public const string UPR_GET_IP_OP_DETAILS_AUTO = "PR_GET_IP_OP_DETAILS_AUTO";
        #endregion

        #region HL7 Manager

        public const string UPR_GET_HL7_MANAGER_INFO = "PR_GET_HL7_MANAGER_INFO";
        public const string UPR_GET_HL7_TABLES_AUTO = "PR_GET_HL7_TABLES_AUTO";
        public const string UPR_GET_HL7_COMPOSITE_TYPES_INFO = "PR_GET_HL7_COMPOSITE_TYPES_INFO";
        public const string UPR_GET_HL7_COMPOSITE_TYPES_AUTO = "PR_GET_HL7_COMPOSITE_TYPES_AUTO";
        public const string UPR_GET_HL7_TABLES_TYPE_NO = "PR_GET_HL7_TABLES_TYPE_NO";
        public const string UPR_GET_HL7_SEGMENTS_PAGE = "PR_GET_HL7_SEGMENTS_PAGE";
        public const string UPR_GET_HL7_SEGMENTS_AUTO = "PR_GET_HL7_SEGMENTS_AUTO";
        public const string UPR_GET_HL7_SEGMENTS_FIELDS = "PR_GET_HL7_SEGMENTS_FIELDS";
        public const string UPR_GET_HL7_FIELDS_HDR_PAGE = "PR_GET_HL7_FIELDS_HDR_PAGE";
        public const string UPR_GET_HL7_MESSAGE_HDR_PAGE = "PR_GET_HL7_MESSAGE_HDR_PAGE";
        public const string UPR_GET_HL7_SEGMENTS_HDR_PAGE = "PR_GET_HL7_SEGMENTS_HDR_PAGE";
        public const string UPR_GET_HL7_TABLE_HDR_PAGE = "PR_GET_HL7_TABLE_HDR_PAGE";
        public const string UPR_GET_HL7_MESSAGE_PAGE = "PR_GET_HL7_MESSAGE_PAGE";
        public const string UPR_GET_HL7_MESSAGE_AUTO = "PR_GET_HL7_MESSAGE_AUTO";
        public const string UPR_GET_HL7_MSG_PAGE = "PR_GET_HL7_MSG_PAGE";
        public const string UPR_GET_HL7_PROFILES = "PR_GET_HL7_PROFILES";
        public const string UPR_GET_HL7_MSG_AUTO = "PR_GET_HL7_MSG_AUTO";
        public const string UPR_GET_HL7_PROFILES_ID = "PR_GET_HL7_PROFILES_ID";
        public const string UPR_GET_HL7_ENABLE = "PR_GET_HL7_ENABLE";
        public const string UPR_GET_HL7_ACK_ON_NEW_CONN = "PR_GET_HL7_ACK_ON_NEW_CONN";
        public const string UPR_GET_HL7_MSH_15_ACK_ACC = "PR_GET_HL7_MSH_15_ACK_ACC";
        public const string UPR_GET_HL7_PROCESS_BATCH = "PR_GET_HL7_PROCESS_BATCH";
        public const string UPR_GET_HL7_SEND_ACK = "PR_GET_HL7_SEND_ACK";
        public const string UPR_GET_HL7_COMMUNICATION_TYPE = "PR_GET_HL7_COMMUNICATION_TYPE";
        public const string UPR_INSUPD_HL7_LISTENER_PROFILE = "PR_INSUPD_HL7_LISTENER_PROFILE";
        public const string UPR_GET_HL7_SEGMENTS_BY_CD = "PR_GET_HL7_SEGMENTS_BY_CD";
        public const string UPR_GET_HL7_MESSAGES_BY_CD = "PR_GET_HL7_MESSAGES_BY_CD";
        public const string UPR_GET_HL7_LAB_DETAILS = "PR_GET_HL7_LAB_DETAILS";
        public const string UPR_GET_HL7_SEGMENTS_HDR_AUTO = "PR_GET_HL7_SEGMENTS_HDR_AUTO";
        public const string UPR_GET_HL7_MESSAGE_HDR_AUTO = "PR_GET_HL7_MESSAGE_HDR_AUTO";
        public const string UPR_GET_HL7_FIELDS_HDR_AUTO = "PR_GET_HL7_FIELDS_HDR_AUTO";
        public const string UPR_GET_HL7_TABLE_HDR_AUTO = "PR_GET_HL7_TABLE_HDR_AUTO";
        public const string UPR_GET_HL7_OB_PROF = "PR_GET_HL7_OB_PROF";
        public const string UPR_GET_HL7_OUTBOUND_MSG_PAGE = "PR_GET_HL7_OUTBOUND_MSG_PAGE";
        public const string UPR_INS_HL7_OUTBOUND_PROFILE_MSG = "PR_INS_HL7_OUTBOUND_PROFILE_MSG";
        public const string UPR_INSUPD_HL7_OUTBOUND_PROFILE = "PR_INSUPD_HL7_OUTBOUND_PROFILE";
        public const string UPR_GET_HL7_OUTBOUND_PROFILE_MSG_AUTO = "PR_GET_HL7_OUTBOUND_PROFILE_MSG_AUTO";
        public const string UPR_GET_HL7_PATIENT_INFO = "PR_GET_HL7_PATIENT_INFO";
        public const string UPR_GET_HL7_PATIENT_LAB_INFO = "PR_GET_HL7_PATIENT_LAB_INFO";
        public const string UPR_GET_HL7_HIMS_TABLES_MAPPING = "PR_GET_HL7_HIMS_TABLES_MAPPING";
        public const string UPR_GET_HL7_PATIENT_INFO_AUTO = "PR_GET_HL7_PATIENT_INFO_AUTO";
        public const string UPR_GET_HL7_MSG_EXISTANCE = "PR_GET_HL7_MSG_EXISTANCE";
        public const string UPR_INS_HL7_MSG = "PR_INS_HL7_MSG";
        public const string UPR_INSUPD_LAB_HL7_PARTNER_PARAMETER = "PR_INSUPD_LAB_HL7_PARTNER_PARAMETER";
        public const string UPR_DEL_HL7_PARTNER_PARAMETER = "PR_DEL_HL7_PARTNER_PARAMETER";
        public const string UPR_GETALL_HL7_PARTNER_PARAMETER = "PR_GETALL_HL7_PARTNER_PARAMETER";
        public const string UPR_GET_HL7_PARTNER_PARAMETER = "PR_GET_HL7_PARTNER_PARAMETER";
        #endregion

        #region Lab Interface
        public const string UPR_GET_LIS_MAPINGM = "PR_GET_LIS_MAPINGM";
        public const string UPR_GET_LIS_CONTROLDATA_AUTO = "PR_GET_LIS_CONTROLDATA_AUTO";
        public const string UPR_GETALL_LIS_CONTROLDATA = "PR_GET_LIS_CONTROLDATA";
        // Mapping
        public const string UPR_GETALL_LIS_MAPPINGM = "PR_GETALL_LIS_MAPPINGM";
        public const string UPR_INSUPD_LIS_MAPPINGM = "PR_INSUPD_LIS_MAPPINGM";
        public const string UPR_GET_LIS_MAP_AUTO = "PR_GET_LIS_MAP_AUTO";
        public const string UPR_DEL_LISMAPPING = "PR_DEL_LISMAPPING";

        // Control Names
        public const string UPR_GETALL_LIS_CONTROLNAMES = "PR_GETALL_LIS_CONTROLNAMES";
        public const string UPR_INSUPD_LIS_CONTROLNAMES = "PR_INSUPD_LIS_CONTROLNAMES";
        public const string UPR_GET_LIS_CNTRL_NAME_AUTO = "PR_GET_LIS_CNTRL_NAME_AUTO";
        public const string UPR_DEL_LISCNTRL_NAME = "PR_DEL_LISCNTRL_NAME";

        //Control Ranges        
        public const string UPR_GETALL_LIS_CONTROLRANGES = "PR_GETALL_LIS_CONTROLRANGES";
        public const string UPR_INSUPD_LIS_CONTROLRANGES = "PR_INSUPD_LIS_CONTROLRANGES";
        public const string UPR_DEL_LIS_CNTRL_RANGE = "PR_DEL_LIS_CNTRL_RANGE";
        public const string UPR_GET_LIS_CNTRLRANGE = "PR_GET_LIS_CNTRLRANGE";
        public const string UPR_GET_LIS_RANGE_AUTO = "PR_GET_LIS_RANGE_AUTO";
        public const string UPR_GET_LIS_ANALYSERM = "PR_GET_LIS_ANALYSERM";

        #endregion

        #region FinancialWorkFlow
        public const string UPR_GET_FINANCIAL_WORKFLOW_PAGE = "PR_GET_FINANCIAL_WORKFLOW_PAGE";
        public const string UPR_GET_FINANCIAL_WF_NAME = "PR_GET_FINANCIAL_WF_NAME";
        public const string UPR_GET_FINANCIAL_WORKFLOW = "PR_GET_FINANCIAL_WORKFLOW";
        public const string UPR_GET_FINANCIAL_STATE = "PR_GET_FINANCIAL_STATE";
        public const string UPR_INS_FINANCIAL_WORKFLOW_STATE = "PR_INS_FINANCIAL_WORKFLOW_STATE";
        public const string UPR_INSUPD_FINANCIAL_WORKFLOW_STATE = "PR_INSUPD_FINANCIAL_WORKFLOW_STATE";
        public const string UPR_GETALL_FINANWORKFLOW = "PR_GETALL_FINANWORKFLOW";
        public const string UPR_UPD_FWF_APPROVAL = "PR_UPD_FWF_APPROVAL";
        public const string UPR_UPD_FO_BILL = "PR_UPD_FO_BILL";
        public const string UPR_GET_FO_BILL_STAT = "PR_GET_FO_BILL_STAT";
        public const string UPR_GET_FINAL_WORKFLOW_FPNL = "PR_GET_FINAL_WORKFLOW_FPNL";
        public const string UPR_GET_FINANCIAL_WORKFLOW_QU = "PR_GET_FINANCIAL_WORKFLOWS";
        #endregion

        #region Cash Denomiation
        public const string UPR_GET_SHIFT_lOG_TIMES = "PR_GET_SHIFT_lOG_TIMES";
        public const string UPR_GET_CASH_DENOMINATION = "PR_GET_CASH_DENOMINATION";
        public const string UPR_INS_SHFT_CASH_DENOM_XML = "PR_INS_SHFT_CASH_DENOM_XML";
        public const string UPR_GET_PATIENT_CONDITIONS_AUTO = "PR_GET_PATIENT_CONDITIONS_AUTO";
        public const string UPR_GET_SHIFT_LOG = "PR_GET_SHIFT_LOG";
        public const string UPR_GET_SHIFT_LOG_AUTO = "PR_GET_SHIFT_LOG_AUTO";
        public const string UPR_INSUPD_SHIFT_COL_SUBMIT_XML = "PR_INSUPD_SHIFT_COL_SUBMIT_XML";
        public const string UPR_INSUPD_SHIFT_USER_ADV_XML = "PR_INSUPD_SHIFT_USER_ADV_XML";
        public const string uPR_INSUPD_SHIFT_SCROLL_MRG = "PR_INSUPD_SHIFT_SCROLL_MRG";
        #endregion
        #region Shift
        public const string UPR_GET_SHFT_CASH_DENOM = "PR_GET_SHFT_CASH_DENOM";
        public const string UPR_GETALL_SHFT_CASH_DENOM = "PR_GETALL_SHFT_CASH_DENOM";
        public const string UPR_GET_SHFT_CASH_DENOM_AUTO = "PR_GET_SHFT_CASH_DENOM_AUTO";
        public const string UPR_GET_SHIFT_SCROLL_MER = "PR_GET_SHIFT_SCROLL_MER";
        public const string UPR_GETALL_SHIFT_SCROLL_MGR = "PR_GETALL_SHIFT_SCROLL_MGR";
        public const string UPR_GET_SHIFT_SCROLL_MGR_AUTO = "PR_GET_SHIFT_SCROLL_MGR_AUTO";
        #endregion
        #region DoctorDesk Allergies
        public const string UPR_GETALL_DOC_FAMILY_HISTORY = "PR_GETALL_DOC_FAMILY_HISTORY";
        public const string UPR_DEL_DOC_FAMILY_HISTORY = "PR_DEL_DOC_FAMILY_HISTORY";
        public const string UPR_GET_ALLERGIE = "PR_GET_ALLERGIE";
        public const string UPR_INSERT_PATIENT_ALLERGIES = "PR_INSERT_PATIENT_ALLERGIES";
        public const string UPR_GET_ALLERGIES_GROUP = "PR_GET_ALLERGIES_GROUP";
        public const string UPR_INSUPD_ALLERGIES_GROUP = "PR_INSUPD_ALLERGIES_GROUP";
        public const string UPR_DEL_ALLERGIES_GROUP = "PR_DEL_ALLERGIES_GROUP";
        public const string UPR_GETAllergies_PATIENT_ALLERGIES = "PR_GET_PATIENT_ALLERGIES";
        public const string UPR_DEL_PATIENT_ALLERGIES = "PR_DEL_PATIENT_ALLERGIES";
        public const string UPR_INS_PATIENT_ALLERGIES_EXISTS = "PR_INS_PATIENT_ALLERGIES_EXISTS";
        public const string UPR_GET_ALLERGIES_AUTO = "PR_GET_ALLERGIES_AUTO";
        public const string UPR_GET_PATIENT_ALLERGIES_AUTO = "PR_GET_PATIENT_ALLERGIES_AUTO";
        public const string UPR_INS_PATIENT_MEASUREMENTS = "PR_INS_PATIENT_MEASUREMENTS";
        public const string UPR_GET_PATIENT_MEASUREMENTS = "PR_GET_PATIENT_MEASUREMENTS";
        public const string UPR_INS_PATIENT_VITALS = "PR_INS_PATIENT_VITALS";
        public const string UPR_GET_PATIENT_VITALS = "PR_GET_PATIENT_VITALS";
        public const string UPR_GETALL_QMS_PAT_PRIORITY = "PR_GETALL_QMS_PAT_PRIORITY";
        public const string UPR_GETALL_QMS_PAT_PRIORITY_AUTO = "PR_GETALL_QMS_PAT_PRIORITY_AUTO";
        public const string UPR_UPD_QMS_DOCTOR_APT_SCH = "PR_UPD_QMS_DOCTOR_APT_SCH";
        public const string UPR_GET_QMS_DOCTOR_APT_SCH = "PR_GET_QMS_DOCTOR_APT_SCH";
        public const string UPR_GET_DOC_APTSCH_SEQ = "PR_GET_DOC_APTSCH_SEQ";
        public const string UPR_UPD_QMS_DATA_DISPLAY = "PR_UPD_QMS_DATA_DISPLAY";
        public const string UPR_GET_DOCTOR_PATIENT_NEXTPAT = "PR_GET_DOCTOR_PATIENT_NEXTPAT";
        public const string UPR_GET_APTSCH_FNPL = "PR_GET_APTSCH_FNPL";
        public const string UPR_UPD_PATIENT_SURGERIES_HISTORY = "PR_UPD_PATIENT_SURGERIES_HISTORY";
        public const string UPR_UPD_PATIENT_RECOMMANDATIONS = "PR_UPD_PATIENT_RECOMMANDATIONS";
        public const string UPR_GET_VW_PATIENT_DETAILS = "PR_GET_VW_PATIENT_DETAILS";
        public const string UPR_PATIENT_SURGERIES_HISTORY_AUTO = "PR_PATIENT_SURGERIES_HISTORY_AUTO";
        public const string UPR_GET_PATIENT_RECOMMANDATIONS_AUTO = "PR_GET_PATIENT_RECOMMANDATIONS_AUTO";
        public const string UPR_GET_DOCTOR_PATIENT_AUTO = "PR_GET_DOCTOR_PATIENT_AUTO";
        public const string UPR_GET_IP_PATIENT_DETAILS_AUTO = "PR_GET_IP_PATIENT_DETAILS_AUTO";
        public const string UPR_GET_VW_PATIENT_LAB_INFO = "PR_GET_VW_PATIENT_LAB_INFO";
        public const string UPR_GET_VW_PATIENT_LAB_INFO_AUTO = "PR_GET_VW_PATIENT_LAB_INFO_AUTO";
        public const string UPR_GET_VW_PATIENT_LAB_INFO_RESULT = "PR_GET_VW_PATIENT_LAB_INFO_RESULT";
        public const string UPR_GET_NU_IND_SRV = "PR_GET_NU_IND_SRV";
        public const string UPR_INSUPD_NUTRITION_VALUES = "PR_INSUPD_NUTRITION_VALUES";
        public const string UPR_GET_NUTRITIONVAL_FPNL = "PR_GET_NUTRITIONVAL_FPNL";
        public const string UPR_GET_NUTRITION_VALUES_AUTO = "PR_GET_NUTRITION_VALUES_AUTO";
        public const string UPR_GET_DIET_NAME = "PR_GET_DIET_NAME";
        public const string UPR_INSUPD_DIET_SHEET_XML = "PR_INSUPD_DIET_SHEET_XML";
        public const string UPR_GET_NUTRITION_VALUE_AUTO = "PR_GET_NUTRITION_VALUE_AUTO";
        public const string UPR_UPADTE_DIET_CHARTANALYSIS = "PR_UPADTE_DIET_CHARTANALYSIS";
        public const string UPR_GET_DIET_CHARTANALYSIS = "PR_GET_DIET_CHARTANALYSIS";
        public const string UPR_GET_DIET_CHARTANALYSIS_AUTO = "PR_GET_DIET_CHARTANALYSIS_AUTO";

        public const string UPR_INS_DM_DIET = "PR_INS_DM_DIET";
        public const string UPR_GETALL_DIETMASTER = "PR_GETALL_DIETMASTER";
        public const string UPR_DEL_DIET_MASTER = "PR_DEL_DIET_MASTER";
        public const string UPR_GET_DM_DIET_AUTO = "PR_GET_DM_DIET_AUTO";
        public const string UPR_GET_DM_DIET_FPNL = "PR_GET_DM_DIET_FPNL";
        public const string UPR_GETALL_NUTRITION_VALUES = "PR_GETALL_NUTRITION_VALUES";
        public const string UPR_DEL_NUTRITION_VALUES = "PR_DEL_NUTRITION_VALUES";
        public const string UPR_INS_NP_PROFILE_SETUP = "PR_INS_NP_PROFILE_SETUP";
        public const string UPR_GETALL_NP_PROFILE_SETUP = "PR_GETALL_NP_PROFILE_SETUP";
        public const string UPR_GET_LABPROFILE_AUTO = "PR_GET_LABPROFILE_AUTO";
        public const string UPR_GET_PROFILENAMES = "PR_GET_PROFILENAMES";
        public const string UPR_GET_PARM_NAMES = "PR_GET_PARM_NAMES";
        public const string UPR_INS_NP_PAST_INVEST = "PR_INS_NP_PAST_INVEST";
        public const string UPR_GETALL_PARM_VALUES = "PR_GETALL_PARM_VALUES";

        public const string UPR_INS_GSIV_COMPLAINTS = "PR_INS_GSIV_COMPLAINTS";
        public const string UPR_DEL_GSIV_COMPLAINTS = "PR_DEL_GSIV_COMPLAINTS";
        public const string UPR_GET_GSIV_COMPLAINTS_CREATEDT = "PR_GET_GSIV_COMPLAINTS_CREATEDT";
        public const string UPR_GET_GSIV_COMPLAINTS = "PR_GET_GSIV_COMPLAINTS";
        public const string UPR_INS_ORDER_INVPROFILE = "PR_INS_ORDER_INVPROFILE";
        public const string UPR_INSUPD_NPIV_DIAGNOSIS_XML = "PR_INSUPD_NPIV_DIAGNOSIS_XML";
        public const string UPR_GET_NPIV_DIAGNOSIS = "PR_GET_NPIV_DIAGNOSIS";
        public const string UPR_GET_NPIV_DIAGNOSIS_CREATEDT = "PR_GET_NPIV_DIAGNOSIS_CREATEDT";
        public const string UPR_DEL_NPIV_DIAGNOSIS = "PR_DEL_NPIV_DIAGNOSIS";

        public const string UPR_INSUPD_FAMILY_HISTORY_XML = "PR_INSUPD_FAMILY_HISTORY_XML";
        public const string UPR_GET_CREATEDT_FAMILYHISTORY = "PR_GET_CREATEDT_FAMILYHISTORY";
        public const string UPR_GETALL_FAMILYHISTORY = "PR_GETALL_FAMILYHISTORY";
        public const string UPR_INSUPD_HABITUATIONS_XML = "PR_INSUPD_HABITUATIONS_XML";
        public const string UPR_GET_CREATEDT_HABITUATIONS = "PR_GET_CREATEDT_HABITUATIONS";
        public const string UPR_GETALL_HABITUATIONST = "PR_GETALL_HABITUATIONST";
        public const string UPR_GET_MEASURMENTS_TAB = "PR_GET_MEASURMENTS_TAB";
        public const string UPR_GET_CREATEDT_PATIENT_MEASUREMENTS = "PR_GET_CREATEDT_PATIENT_MEASUREMENTS";
        public const string UPR_GET_PATIENT_ALLERGYTAB = "PR_GET_PATIENT_ALLERGYTAB";
        public const string UPR_INS_ALLERGIES_TAB = "PR_INS_ALLERGIES_TAB";
        public const string UPR_GET_GSINITIALVISIT_CREATEDT = "PR_GET_GSINITIALVISIT_CREATEDT";
        public const string UPR_INSERT_GSINITIALVISIT = "PR_INSERT_GSINITIALVISIT";

        public const string USP_PR_INSUPD_ALLERGIES = "PR_INSUPD_ALLERGIES";
        public const string USP_PR_GETALL_ALLERGIESMASTER = "PR_GETALL_ALLERGIESMASTER";
        public const string USP_PR_GET_ALLERGIES_AUTO = "PR_GET_ALLERGIES_AUTO";
        public const string USP_PR_DEL_ALLERGIES = "PR_DEL_ALLERGIES";
        public const string USP_PR_GET_ALLERGIESM_FPNL = "PR_GET_ALLERGIESM_FPNL";
        public const string UPR_GET_NP_PROFILE_SETUP_FPNL = "PR_GET_NP_PROFILE_SETUP_FPNL";

        public const string UPR_GETALL_NP_SYMPTOMM = "PR_GETALL_NP_SYMPTOMM";
        public const string UPR_INSUPD_NP_SYMPTOMM = "PR_INSUPD_NP_SYMPTOMM";
        public const string UPR_GET_Symptoms_FPNL = "PR_GET_Symptoms_FPNL";
        public const string UPR_DEL_Symptoms = "PR_DEL_Symptoms";
        public const string UPR_GET_NP_SYMPTOMM_AUTO = "PR_GET_NP_SYMPTOMM_AUTO";
        public const string UPR_INSUPD_DD_IMPLANTING_DATA_XML = "PR_INSUPD_DD_IMPLANTING_DATA_XML";
        public const string UPR_INSERT_DD_TREATMANAGE_PLAN = "PR_INSERT_DD_TREATMANAGE_PLAN";
        public const string UPR_GET_GSINITIALVISIT = "PR_GET_GSINITIALVISIT";
        public const string UPR_GET_PREV_COMPLAINTS = "PR_GET_PREV_COMPLAINTS";
        public const string UPR_GET_DD_TREATMANAGE_PLAN = "PR_GET_DD_TREATMANAGE_PLAN";
        public const string UPR_INSUPD_NPIV_BODY_IMAGES_XML = "PR_INSUPD_NPIV_BODY_IMAGES_XML";
        public const string UPR_GET_BODY_IMAGES = "PR_GET_BODY_IMAGES";

        public const string UPR_GET_INVS_ORDER_SERVICES = "PR_GET_INVS_ORDER_SERVICES";
        #region Habituations
        public const string UPR_INSUPD_HABITUATIONS = "PR_INSUPD_HABITUATIONS";
        public const string UPR_GETALL_HABITUATIONS = "PR_GETALL_HABITUATIONS";
        public const string UPR_DEL_HABITUATIONS = "PR_DEL_HABITUATIONS";
        public const string UPR_INSUPD_HABITUATIONMASTER = "PR_INSUPD_HABITUATIONMASTER";
        public const string UPR_DEL_HABITMASTER = "PR_DEL_HABITMASTER";
        public const string UPR_GETALL_HABITMASTER = "PR_GETALL_HABITMASTER";
        public const string UPR_GET_HABITMASTER_FPNL = "PR_GET_HABITMASTER_FPNL";
        public const string UPR_GET_HABITUATIONMAST_AUTO = "PR_GET_HABITUATIONMAST_AUTO";
        public const string UPR_GET_PARENT_MODULE_AUTO = "PR_GET_PARENT_MODULE_AUTO";
        #endregion
        #endregion

        #region
        public const string UPR_GET_DOCTOR_MEDICIN_AUTO = "PR_GET_DOCTOR_MEDICIN_AUTO";
        public const string UPR_INSUPD_PATIENT_MEDICATION = "PR_INSUPD_PATIENT_MEDICATION";
        public const string UPR_INSERT_MEDICATIONS = "PR_INSERT_MEDICATIONS";
        public const string UPR_GET_CHIEF_COMPLAINTS = "PR_GET_CHIEF_COMPLAINTS";

        #endregion

        #region WardServiceEntry
        public const string INSERT_ADT_WARD_AUTO_SRV_XML = "PR_INS_ADT_WARD_AUTO_SRV_XML";
        public const string GETALL_ADT_WARD_AUTO_CHRG = "PR_GETALL_ADT_WARD_AUTO_CHRG";
        public const string GETALL_ADT_WARD_AUTO_CHRG_SRV = "PR_GETALL_ADT_WARD_AUTO_CHRG_SRV";
        public const string GETALL_ADT_WARD_AUTOCOMPLETE = "PR_GET_AUTO_ADT_WARD_DTLS";
        public const string UPR_DEL_ADT_WARD_AUTO_CHRG = "PR_DEL_ADT_WARD_AUTO_CHRG";
        #endregion

        #region DoctorDesk FamilyHistory
        public const string UPR_DEL_DIAGNOSISES = "PR_DEL_DIAGNOSISES";
        public const string UPR_INSUPD_FAMILY_DISEASE = "PR_INSUPD_FAMILY_DISEASE";
        public const string UPR_INSUPD_DIAGNOSIS = "PR_INSUPD_DIAGNOSIS";
        public const string UPR_GETALL_DIAGNOSIS = "PR_GETALL_DIAGNOSIS";
        public const string UPR_GET_DIAGNOSIS_AUTO = "PR_GET_DIAGNOSIS_AUTO";
        public const string UPR_GET_DIAGNOSIS_FPNL = "PR_GET_DIAGNOSIS_FPNL";
        public const string UPR_INSUPD_PATIENT_FAMILY_DISEASES = "PR_INSUPD_PATIENT_FAMILY_DISEASES";
        public const string UPR_GETALL_FAMILY = "PR_GETALL_FAMILY";
        public const string UPR_GET_FAMILY_DISEASE = "PR_GET_FAMILY_DISEASE";
        public const string UPR_GET_PATIENT_FAMILY_DISEASES = "PR_GET_PATIENT_FAMILY_DISEASES";
        public const string UPR_DEL_PATIENT_FAMILY_DISEASES = "PR_DEL_PATIENT_FAMILY_DISEASES";
        public const string UPR_INS_FAMILY = "PR_INS_FAMILY";
        public const string UPR_UPD_PATIENT_FAMILY_DISEASES = "PR_UPD_PATIENT_FAMILY_DISEASES";
        public const string UPR_GET_FAMILY_DISEASES = "PR_GET_FAMILY_DISEASE";
        public const string UPR_GET_FAMILY_DISEASE_AUTOSEARCH = "PR_GET_FAMILY_DISEASE_AUTOSEARCH";
        public const string UPR_DEL_FAMILY = "PR_DEL_FAMILY";
        public const string UPR_GET_PATIENT_FAMILY_DISEASES_AUTO = "PR_GET_PATIENT_FAMILY_DISEASES_AUTO";
        public const string UPR_INS_NP_SUB_COMPLAINT0 = "PR_INS_NP_SUB_COMPLAINT0";
        public const string UPR_GET_COMPLAINT_TYPE = "PR_GET_COMPLAINT_TYPE";
        public const string UPR_INSUPD_FAMILYDISEASE = "PR_INSUPD_FAMILYDISEASE";
        public const string UPR_GETALL_FAMILYDISEASE = "PR_GETALL_FAMILYDISEASE";
        public const string UPR_GET_FAMILYDISEASE_AUTO = "PR_GET_FAMILYDISEASE_AUTO";
        public const string UPR_DEL_FAMILY_DISEASE = "PR_DEL_FAMILY_DISEASE";
        public const string UPR_GET_FAMILYDISEASE_FPNL = "PR_GET_FAMILYDISEASE_FPNL";
        public const string UPR_INSUPD_SPECIAL_INSTRUCTIONS = "PR_INSUPD_SPECIAL_INSTRUCTIONS";
        public const string UPR_GETALL_SPECIAL_INSTRUCTIONS = "PR_GETALL_SPECIAL_INSTRUCTIONS";
        public const string UPR_DEL_SPECIAL_INSTRUCTIONS = "PR_DEL_SPECIAL_INSTRUCTIONS";
        public const string UPR_GET_SPECIAL_INSTRUCTIONS_AUTO = "PR_GET_SPECIAL_INSTRUCTIONS_AUTO";
        public const string UPR_GET_SPECIALINSTRUCTIONS_FPNL = "PR_GET_SPECIALINSTRUCTIONS_FPNL";

        #endregion

        #region  Document Help
        public const string INSUPD_DOCUMENT_HELP = "PR_INSUPD_DOC_HELP";
        public const string GET_DOCUMENT_HELP = "PR_GET_DOC_HELP";
        #endregion

        #region Appointments
        public const string UPR_INS_QMS_DOCTOR_APT_SCH = "PR_INS_QMS_DOCTOR_APT_SCH";
        public const string UPR_GET_EHR_CHECK_SAME_DATE = "PR_GET_EHR_CHECK_SAME_DATE";
        public const string UPR_GET_EHR_CHECK_SAME_TIME = "PR_GET_EHR_CHECK_SAME_TIME";
        #endregion

        #region OUTSTANDING DUE RECEIPTS
        public const string UPR_PR_GET_DUE_BILLS_VIEW = "PR_GET_DUE_BILLS_VIEW";
        #endregion
        public const string UPR_PR_INS_SERVICE_PRICE_XML = "PR_INS_SERVICE_PRICE_XML";
        public const string UPR_ADT_PATIENTS_AUTO = "PR_ADT_PATIENTS_AUTO";
        public const string UPR_GET_IP_PAT_CONVERSION_TYPE = "PR_GET_IP_PAT_CONVERSION_TYPE";
        public const string UPR_GET_IP_PAT_CONVERSION_TYPE_AUTO = "PR_GET_IP_PAT_CONVERSION_TYPE_AUTO";
        #region Wardwise Credit Limit
        public const string UPR_GET_ADT_WARD_CREDIT_LIMIT = "PR_GET_ADT_WARD_CREDIT_LIMIT";
        public const string UPR_UPD_ADT_WARD_CREDIT_LIMIT = "PR_UPD_ADT_WARD_CREDIT_LIMIT";
        public const string UPR_GET_WARD_CREDIT_LIMIT_SRV_TYPES = "PR_GET_WARD_CREDIT_LIMIT_SRV_TYPES";
        #endregion

        #region NURSE STATION
        public const string UPR_UPDATE_CASESHEET_STATUS = "PR_UPDATE_CASESHEET_STATUS";
        public const string UPR_INSUPD_NU_IND_XML = "PR_INSUPD_NU_IND_XML";
        public const string UPR_INSUPD_NU_IND_CNCL_XML = "PR_INSUPD_NU_IND_CNCL_XML";
        public const string UPR_GETALL_NU_IND_CNCL_SRV = "PR_GETALL_NU_IND_CNCL_SRV";
        public const string UPR_GETALL_NU_IND_SRV = "PR_GETALL_NU_IND_SRV";
        public const string UPR_GETALL_NU_IND = "PR_GETALL_NU_IND";
        public const string UPR_GET_NU_IND_AUTOCOMP = "PR_GET_NU_IND_AUTOCOMP";
        public const string UPR_INSUPD_NU_IND_CNCL_SRV_XML = "PR_INSUPD_NU_IND_CNCL_SRV_XML";
        public const string UPR_INSUPD_NST_NUR = "PR_INSUPD_NST_NUR";
        public const string UPR_GET_NTR_NUR_BYID = "PR_GET_NTR_NUR_BYID";
        public const string UPR_GETALL_NURSESTATIONS = "PR_GETALL_NURSESTATION ";
        public const string UPR_INSUPD_NURSESTATIONS = "PR_INSUPD_NURSESTATION";
        public const string UPR_INSUPD_NST_PGS_NOTE = "PR_INSUPD_NST_PGS_NOTE";
        public const string UPR_GETALL_NST_PGS_NOTE = "PR_GETALL_NST_PGS_NOTE";
        public const string UPR_GET_AUTO_NST_PGS_NOTE = "PR_GET_AUTO_NST_PGS_NOTE";
        public const string UPR_INSUPD_NST_DOC_VST_XML = "PR_INSUPD_NST_DOC_VST_XML";
        public const string UPR_GET_NST_DOC_VST_DET = "PR_GET_NST_DOC_VST_DET";
        public const string UPR_GETALL_CASE_SHEET = "PR_GETALL_CASE_SHEET";
        public const string UPR_GET_CASE_SHEET_DET = "PR_GET_CASE_SHEET_DET";
        public const string UPR_GET_CASE_SHEET_DOC_EDIT = "PR_GET_CASE_SHEET_DOC_EDIT";
        public const string UPR_GET_PATIENT_CASE_SHEET_DET = "PR_GET_PATIENT_CASE_SHEET_DET";
        public const string UPR_GET_NST_PGS_NOTE_PREV = "PR_GET_NST_PGS_NOTE_PREV";
        public const string UPR_INSUPD_NST_IN_OUT_XML = "PR_INSUPD_NST_IN_OUT_XML";
        public const string UPR_GET_NURSE_SERVICE_GROUP = "PR_GET_NURSE_SERVICE_GROUP";
        public const string UPR_GET_ASSAY_RESULT_SRV = "PR_GET_ASSAY_RESULT_SRV";
        public const string UPR_GETALL_NURSE_INDENTS = "PR_GETALL_NURSE_INDENTS";
        public const string UPR_GETALL_NURSE_IND_SERVICES = "PR_GETALL_NURSE_IND_SERVICES";
        public const string UPR_INS_ADT_IMR_SRV_XML_INDENT = "PR_INS_ADT_IMR_SRV_XML_INDENT";

        #endregion

        #region Discharge Summary
        public const string UPR_GET_ADT_DSCHRG_SUM_SUB_TITLES = "PR_GET_ADT_DSCHRG_SUM_SUB_TITLES";
        public const string UPR_INSUPD_ADT_DSCHRG_SUM_NOTE = "PR_INSUPD_ADT_DSCHRG_SUM_NOTE";
        public const string UPR_GET_ORG_DET = "PR_GET_ORG_DET";
        public const string UPR_GET_PATIENT_ADMN_INFO = "PR_GET_PATIENT_ADMN_INFO";
        public const string UPR_GET_ADMN_INVESTIGATIONS = "PR_GET_ADMN_INVESTIGATIONS";
        public const string UPR_GET_INVESTIGATIONS_DSCHRG = "PR_GET_INVESTIGATIONS_DSCHRG";
        public const string UPR_INS_INVESTIGATIONS_XML = "PR_INS_INVESTIGATIONS_XML";
        public const string UPR_GET_ADMN_INVESTIGATIONS_COMPONENT = "PR_GET_ADMN_INVESTIGATIONS_COMPONENT";
        public const string UPR_GET_IP_INVES = "PR_GET_IP_INVES";

        #endregion

        #region Corporate
        public const string UPR_UPDATE_CORP_DETAILS = "PR_UPDATE_CORP_DETAILS";
        public const string UPR_GET_COMPANY_BILL_WF = "PR_GET_COMPANY_BILL_WF";
        public const string UPR_INSUPD_CORP_BILL_STATUS_XML = "dbo.PR_INSUPD_CORP_BILL_STATUS_XML";
        #endregion

        #region STORES



        #region Quotation Entry
        public const string UPR_GET_ST_DEPT_STP_MRQ = "PR_GET_ST_DEPT_STP_MRQ";
        public const string UPR_GET_ST_QTN_AUTO = "PR_GET_ST_QTN_AUTO";
        public const string UPR_DEL_ST_QTN = "PR_DEL_ST_QTN";
        public const string UPR_GET_ST_QTN_ITEM = "PR_GET_ST_QTN_ITEM";
        public const string UPR_GETALL_ST_QTN = "PR_GETALL_ST_QTN";
        public const string UPR_INSUPD_ST_QTN_ITEM_XML = "PR_INSUPD_ST_QTN_ITEM_XML";
        public const string UPR_INSUPD_ST_QTN = "PR_INSUPD_ST_QTN";
        public const string UPR_GET_ST_RFQ_ITEMS = "PR_GET_ST_RFQ_ITEMS";
        #endregion

        public const string UPR_GET_AUTO_ITEM_SERVICES = "PR_GET_AUTO_ITEM_SERVICES";
        public const string UPR_GET_ST_SEC_LOOKUP = "PR_GET_ST_SEC_LOOKUP";
        public const string UPR_GET_ST_RFQ_LOOKUP = "PR_GET_ST_RFQ_LOOKUP";
        public const string UPR_DEL_ST_NRQ = "PR_DEL_ST_NRQ";
        public const string UPR_GET_ALL_ST_NRQ = "PR_GET_ALL_ST_NRQ";
        public const string UPR_GET_PRIFILE_ITEMS = "PR_GET_PRIFILE_ITEMS";
        public const string UPR_GET_DRUGPROFILE_LOOKUP = "PR_GET_DRUGPROFILE_LOOKUP";
        public const string UPR_GET_ONHAND_STOCK = "PR_GET_ONHAND_STOCK";
        public const string UPR_GET_ST_MIC_AUTO = "PR_GET_ST_MIC_AUTO";
        public const string UPR_GET_ST_STP_USERCD = "PR_GET_ST_STP_USERCD";
        public const string UPR_GET_ST_STP_USER = "PR_GET_ST_STP_USER";
        public const string UPR_INSUPD_ST_STP_USER = "PR_INSUPD_ST_STP_USER";
        public const string UPR_GET_ST_STP = "PR_GET_ST_STP";
        public const string UPR_GETALL_ST_MIC = "PR_GETALL_ST_MIC";
        public const string UPR_GET_ST_MIC_ITEM = "PR_GET_ST_MIC_ITEM";
        public const string UPR_DEL_ST_MIC_ITEM = "PR_DEL_ST_MIC_ITEM";
        public const string UPR_GET_ST_MIC_ITEMS = "PR_GET_ST_MIC_ITEMS";
        public const string UPR_GET_ST_MIC_PO = "PR_GET_ST_MIC_PO ";
        public const string UPR_INSUPD_ST_SEC = "PR_INSUPD_ST_SEC";
        public const string UPR_GETALL_ST_SEC = "PR_GETALL_ST_SEC";
        public const string UPR_GET_ST_SEC = "PR_GET_ST_SEC";
        public const string UPR_GET_ST_SEC_AUTO = "PR_GET_ST_SEC_AUTO";
        public const string UPR_DEL_ST_SEC = "PR_DEL_ST_SEC";
        public const string UPR_GET_ST_VENDOR_DETABYID_FPNL = "PR_GET_ST_VENDOR_DETABYID_FPNL";
        public const string UPR_GET_CURRENCY_DETAILSBYID = "PR_GET_CURRENCY_DETAILSBYID";
        public const string UPR_GET_CURRENCY_EXCHANGEVAL = "PR_GET_CURRENCY_EXCHANGEVAL";
        public const string UPR_GET_ST_PUP_DETAILS_BYID = "PR_GET_ST_PUP_DETAILS_BYID";
        public const string UPR_GET_PUP_DEPTS = "PR_GET_PUP_DEPTS";
        public const string UPR_GET_ST_PUP_AUTO = "PR_GET_ST_PUP_AUTO";
        public const string UPR_INSUPD_ST_PUP = "PR_INSUPD_ST_PUP";
        public const string UPR_DEL_ST_PUP = "PR_DEL_ST_PUP";
        public const string UPR_GET_PUP_DEPT = "PR_GET_PUP_DEPT";
        public const string UPR_GET_ST_PUP = "PR_GET_ST_PUP";

        public const string UPR_INSUPD_ST_STP_PUP = "PR_INSUPD_ST_STP_PUP";
        public const string UPR_GET_ST_STP_PUP = "PR_GET_ST_STP_PUP";
        public const string UPR_INSUPD_ST_STP_PI = "PR_INSUPD_ST_STP_PI";
        public const string UPR_GET_ST_STP_PI = "PR_GET_ST_STP_PI";

        public const string UPR_INS_ST_STP_DEPT = "PR_INS_ST_STP_DEPT";
        public const string UPR_GET_ST_STP_DEPT = "PR_GET_ST_STP_DEPT";
        public const string UPR_GET_DEPARTMENTCD = "PR_GET_DEPARTMENTCD";
        public const string UPR_INSUPD_DRUG_PRFLE_XML = "PR_INSUPD_DRUG_PRFLE_XML";
        public const string UPR_GETALL_DRUG_PRFLE = "PR_GETALL_DRUG_PRFLE";
        public const string UPR_DEL_DRUG_PRFLE_ITEM = "PR_DEL_DRUG_PRFLE_ITEM";
        public const string UPR_GET_DRUG_PRFLE_ITEM = "PR_GET_DRUG_PRFLE_ITEM";
        public const string UPR_GET_ST_DRUG_PRFLE_AUTO = "PR_GET_ST_DRUG_PRFLE_AUTO";
        public const string UPR_DEL_ST_QU_TNC = "PR_DEL_ST_QU_TNC";
        public const string UPR_DEL_ST_PO_TNC = "PR_DEL_ST_PO_TNC";
        public const string UPR_GET_ST_MRQ_AUTO = "PR_GET_ST_MRQ_AUTO";
        public const string UPR_GET_ST_MRQ_ITEM = "PR_GET_ST_MRQ_ITEM";
        public const string UPR_UPD_ST_MRQ_ITEM = "PR_UPD_ST_MRQ_ITEM";
        public const string UPR_GETALL_ST_MRQ = "PR_GETALL_ST_MRQ";
        public const string UPR_INSUPD_ST_MRQ_XML = "PR_INSUPD_ST_MRQ_XML";
        public const string UPR_GET_VEND_CRCT_ITEM = "PR_GET_VEND_CRCT_ITEM";
        public const string UPR_DEL_ST_VEND_CRT = "PR_DEL_ST_VEND_CRT";
        public const string UPR_GET_ST_VEND_CRT_AUTO = "PR_GET_ST_VEND_CRT_AUTO";
        public const string UPR_GETALL_ST_VEND_CRT = "PR_GETALL_ST_VEND_CRT";
        public const string UPR_GET_ST_VEND_CRT_DET = "PR_GET_ST_VEND_CRT_DET";
        public const string UPR_INSUPD_ST_STP_ROL = "PR_INSUPD_ST_STP_ROL";
        public const string UPR_GET_ST_STP_ROL_PAGE = "PR_GET_ST_STP_ROL_PAGE";
        public const string UPR_GET_ST_STP_ROL = "PR_GET_ST_STP_ROL";
        public const string UPR_GET_ST_STP_ROL_AUTO = "PR_GET_ST_STP_ROL_AUTO";
        public const string UPR_DEL_ST_STP_ROL = "PR_DEL_ST_STP_ROL";

        public const string UPR_GET_CURRENCY_DETAILS = "PR_GET_CURRENCY_DETAILS";
        public const string UPR_GET_CURRENCY_EXRATE = "PR_GET_CURRENCY_EXRATE";
        public const string UPR_INSUPD_CURRENCY_EXRATE = "PR_INSUPD_CURRENCY_EXRATE";
        public const string UPR_GET_CURRENCY_EXRATE_PAGE = "PR_GET_CURRENCY_EXRATE_PAGE";
        public const string UPR_GET_CURRENCY_EXRATE_AUTO = "PR_GET_CURRENCY_EXRATE_AUTO";
        public const string UPR_DEL_CURRENCY_EXRATE = "PR_DEL_CURRENCY_EXRATE";

        public const string UPR_GET_DRUG_INSTRCTN = "PR_GET_DRUG_INSTRCTN";
        public const string UPR_INSUPD_DRUG_INSTRCTN = "PR_INSUPD_DRUG_INSTRCTN";
        public const string UPR_GET_DRUG_INSTRCTN_PAGE = "PR_GET_DRUG_INSTRCTN_PAGE";
        public const string UPR_GET_DRUG_INSTRCTN_AUTO = "PR_GET_DRUG_INSTRCTN_AUTO";
        public const string UPR_DEL_DRUG_INSTRCTN = "PR_DEL_DRUG_INSTRCTN";

        public const string UPR_GET_DRUG_DIRCTN = "PR_GET_DRUG_DIRCTN";
        public const string UPR_INSUPD_DRUG_DIRCTN = "PR_INSUPD_DRUG_DIRCTN";
        public const string UPR_GET_DRUG_DIRCTN_PAGE = "PR_GET_DRUG_DIRCTN_PAGE";
        public const string UPR_GET_DRUG_DIRCTN_AUTO = "PR_GET_DRUG_DIRCTN_AUTO";
        public const string UPR_DEL_DRUG_DIRCTN = "PR_DEL_DRUG_DIRCTN";

        public const string UPR_GET_PATIENT_CMPLNT = "PR_GET_PATIENT_CMPLNT";
        public const string UPR_INSUPD_PATIENT_CMPLNT = "PR_INSUPD_PATIENT_CMPLNT";
        public const string UPR_GET_PATIENT_CMPLNT_PAGE = "PR_GET_PATIENT_CMPLNT_PAGE";
        public const string UPR_GET_PATIENT_CMPLNT_AUTO = "PR_GET_PATIENT_CMPLNT_AUTO";
        public const string UPR_DEL_PATIENT_CMPLNT = "PR_DEL_PATIENT_CMPLNT";

        public const string UPR_GET_DRUG_ROUTE = "PR_GET_DRUG_ROUTE";
        public const string UPR_INSUPD_DRUG_ROUTE = "PR_INSUPD_DRUG_ROUTE";
        public const string UPR_GET_DRUG_ROUTE_PAGE = "PR_GET_DRUG_ROUTE_PAGE";
        public const string UPR_GET_DRUG_ROUTE_AUTO = "PR_GET_DRUG_ROUTE_AUTO";
        public const string UPR_DEL_DRUG_ROUTE = "PR_DEL_DRUG_ROUTE";

        public const string UPR_INSUPD_MANUFACTURE_DETAILS = "PR_INSUPD_MANUFACTURE_DETAILS";
        public const string UPR_GET_MANUFACTURE_DETAILS = "PR_GET_MANUFACTURE_DETAILS";
        public const string UPR_GET_MANUFACTURE_DETAILS_AUTO = "PR_GET_MANUFACTURE_DETAILS_AUTO";
        public const string UPR_GET_MANUFACTURE_DETAILES_PAGE = "PR_GET_MANUFACTURE_DETAILES_PAGE";
        public const string UPR_DEL_MANUFACTURE_DETAILES = "PR_DEL_MANUFACTURE_DETAILES";
        public const string UPR_GET_MANUFACTURE_SEARCHDATA = "PR_GET_MANUFACTURE_SEARCHDATA";

        public const string UPR_INSUPD_VENDOR_DETAILS = "PR_INSUPD_ST_VENDOR_DETAILS";
        public const string UPR_GET_VENDOR_DETAILS = "PR_GET_ST_VENDOR_DETAILS";
        public const string UPR_GET_VENDOR_DETAILS_AUTO = "PR_GET_ST_VENDOR_DETAILS_AUTO";
        public const string UPR_GET_VENDOR_DETAILES_PAGE = "PR_GET_ST_VENDOR_DETAILES_PAGE";
        public const string UPR_DEL_VENDOR_DETAILES = "PR_DEL_ST_VENDOR_DETAILES";
        public const string UPR_GET_VENDOR_LOOKUP = "PR_GET_ST_VENDOR_LOOKUP";

        public const string UPR_INSUPD_ITEM_L1 = "PR_INSUPD_ITEM_L1";
        public const string UPR_PR_GETALL_ITEM_L1 = "PR_GETALL_ITEM_L1";
        public const string UPR_PR_INSUPD_ITEM_L3 = "PR_INSUPD_ITEM_L3";
        public const string UPR_PR_GETALL_ITEM_L3 = "PR_GETALL_ITEM_L3";
        public const string UPR_PR_GET_ITEMLEVEL1 = "PR_GET_ITEMLEVEL1";
        public const string UPR_PR_DEL_ITEM_L1 = "PR_DEL_ITEM_L1";
        public const string UPR_PR_DEL_ITEM_L3 = "PR_DEL_ITEM_L3";
        public const string UPR_PR_GET_ITEMLEVEL3 = "PR_GET_ITEMLEVEL3";
        public const string UPR_PR_INSUPD_ITEM_L2 = "PR_INSUPD_ITEM_L2";
        public const string UPR_PR_GETALL_ITEM_L2 = "PR_GETALL_ITEM_L2";
        public const string UPR_PR_GET_AUTO_COMP_ITEM_L1 = "PR_GET_AUTO_COMP_ITEM_L1";
        public const string UPR_PR_INSUPD_ST_ITEM = "PR_INSUPD_ST_ITEM";
        public const string UPR_PR_GET_ST_ITEM = "PR_GET_ST_ITEM";
        public const string UPR_PR_GETALL_ST_ITEM = "PR_GETALL_ST_ITEM";
        public const string UPR_PR_DEL_ST_ITEM = "PR_DEL_ST_ITEM";
        public const string UPR_PR_GET_ITEMLEVEL2 = "PR_GET_ITEMLEVEL2";
        public const string UPR_PR_DEL_ITEM_L2 = "PR_DEL_ITEM_L2";

        public const string UPR_INS_ST_STP = "PR_INS_ST_STP";
        public const string UPR_GETALL_ST_STP = "PR_GETALL_ST_STP";
        public const string UPR_PR_ITEM_CD_AUTO_GEN = "PR_ITEM_CD_AUTO_GEN";
        public const string UPR_GET_SURGERY_AUTO_PAGE = "PR_GET_SURGERY_AUTO_PAGE";
        public const string UPR_GET_SURGERY_AUTO = "PR_GET_SURGERY_AUTO";
        public const string UPR_GET_STOCKPOINT_DETAILS = "PR_GET_STOCKPOINT_DETAILS";

        public const string UPR_DEL_STPNTSETTING = "PR_DEL_STPNTSETTING";
        public const string UPR_GET_ST_STP_DETAILS_BYID = "PR_GET_ST_STP_DETAILS_BYID";
        public const string UPR_GET_AUTO_COMP_STP = "PR_GET_AUTO_COMP_STP";
        public const string UPR_PR_GET_STTAX_FLD = "PR_GET_STTAX_FLD";
        public const string UPR_PR_GET_ST_TAX_RULEFLD = "PR_GET_ST_TAX_RULEFLD";
        public const string UPR_PR_GETALL_ST_TAX_RULE = "PR_GETALL_ST_TAX_RULE";
        public const string UPR_PR_INSUPD_ST_TAX_RULE_FLD = "PR_INSUPD_ST_TAX_RULE_FLD";
        public const string UPR_GET_ST_TAX_RULE_FLD = "PR_GET_ST_TAX_RULE_FLD";
        public const string UPR_INSUPD_VEND_CRT_XML = "PR_INSUPD_ST_VEND_CRT_XML";
        public const string UPR_GET_ST_TAX_RULE_FLD_ALL = "PR_GET_ST_TAX_RULE_FLD_ALL";
        public const string UPR_DEL_ST_TAX_RULE_FLD = "PR_DEL_ST_TAX_RULE_FLD";
        public const string UPR_GETALL_TAX_RULE = "PR_GETALL_TAX_RULE";
        public const string UPR_GETALL_TAX_RULE_AUTO = "PR_GETALL_TAX_RULE_AUTO";

        #region PI
        public const string UPR_INSUPD_ST_PIND_XML = "PR_INSUPD_ST_PIND_XML";
        public const string UPR_GETALL_ST_PURCHASEIND_LIST = "PR_GETALL_ST_PURCHASEIND_LIST";
        public const string UPR_GET_PURCHASEINDENT_ITEMS = "PR_GET_PURCHASEINDENT_ITEMS";
        public const string UPR_GET_PURCHASEINDENT_ITEM_AUTO = "PR_GET_PURCHASEINDENT_ITEM_AUTO";
        public const string UPR_DEL_ST_PURCHASEINDENT = "PR_DEL_ST_PURCHASEINDENT";
        public const string UPR_UPD_APPROVE_PURCHASEINDENT = "PR_UPD_APPROVE_PURCHASEINDENT";
        #endregion

        #endregion

        #region StockReceiveNote
        public const string UPR_GETALL_ST_STR_ITEM = "PR_GETALL_ST_STR_ITEM";
        public const string UPR_DEL_ST_STR = "PR_DEL_ST_STR";
        public const string UPR_GET_ST_STR_AUTO = "PR_GET_ST_STR_AUTO";
        public const string UPR_INSUPD_ST_STR = "PR_INSUPD_ST_STR";
        public const string UPR_GETALL_ST_STR = "PR_GETALL_ST_STR";
        public const string UPR_GETALL_ST_TRN_ITEM = "PR_GETALL_ST_TRN_ITEM";
        #endregion

        #region DRUG INDENT
        public const string UPR_GET_AUTO_DRUGS = "PR_GET_AUTO_DRUGS";
        public const string UPR_INSUPD_ST_NRQ_ITEM_XML = "PR_INSUPD_ST_NRQ_ITEM_XML";
        public const string UPR_GET_ST_NRQ_NO = "PR_GET_ST_NRQ_NO";
        public const string UPR_GETALL_ST_NRQ = "PR_GETALL_ST_NRQ";
        public const string UPR_GET_ST_NRQ_AUTO = "PR_GET_ST_NRQ_AUTO";
        public const string UPR_GET_ST_NRQ_ITEM = "PR_GET_ST_NRQ_ITEM";
        public const string UPR_GET_ST_NRQ_ITEM_CD = "PR_GET_ST_NRQ_ITEM_CD";
        public const string UPR_INSUPD_ST_DRQ_XML = "PR_INSUPD_ST_DRQ_XML";
        public const string UPR_INSUPD_ST_DRG_REC_XML = "PR_INSUPD_ST_DRG_REC_XML";
        public const string UPR_DEL_ST_NRQ_ITEM = "PR_DEL_ST_NRQ_ITEM";
        #endregion

        public const string UPR_GETALL_STP_DEPARTMENTS = "PR_GETALL_STP_DEPARTMENTS";

        #region Terms And Conditions
        public const string UPR_GET_ST_TERMSANDCONDITIONS = "PR_GET_ST_TERMSANDCONDITIONS";
        public const string UPR_INSUPD_PO_TNC = "PR_INSUPD_PO_TNC";
        public const string UPR_GET_PO_TNC = "PR_GET_PO_TNC";
        public const string UPR_GET_PO_TNC_FPNL = "PR_GET_PO_TNC_FPNL";
        public const string UPR_GET_ST_TERMSANDCONDITIONS_AUTO = "PR_GET_ST_TERMSANDCONDITIONS_AUTO";
        #endregion

        public const string UPR_INSUPD_ST_PO_XML = "PR_INSUPD_ST_PO_XML";//for single PO
        public const string UPR_INSUPD_ST_PO_ITEM_XML = "PR_INSUPD_ST_PO_ITEM_XML";//for multiple PO generation based vendors selected
        public const string UPR_GET_ST_PIND = "PR_GET_ST_PIND";
        public const string UPR_GET_ST_PIND_ITEM = "PR_GET_ST_PIND_ITEM";
        public const string UPR_GETALL_ST_PURCHASEORDER_LIST = "PR_GETALL_ST_PURCHASEORDER_LIST";
        public const string UPR_GET_PURCHASEORDER_ITEMS = "PR_GET_PURCHASEORDER_ITEMS";

        #region Item_Concission_Master
        public const string UPR_GET_ITEMS_AUTO = "PR_GET_ITEMS_AUTO";
        public const string UPR_INSUPD_ITEM_SCHM_XML = "PR_INSUPD_ITEM_SCHM_XML";
        public const string UPR_DEL_ITEM_SCHM = "PR_DEL_ITEM_SCHM";
        #endregion


        #region Request For Quotetion
        public const string UPR_INSUPD_ST_RFQ_XML = "PR_INSUPD_ST_RFQ_XML";
        public const string UPR_GETALL_ST_RFQ = "PR_GETALL_ST_RFQ";
        public const string UPR_GET_ST_RFQ = "PR_GET_ST_RFQ";
        public const string UPR_GET_ST_RFQ_ITEM = "PR_GET_ST_RFQ_ITEM";
        public const string UPR_GET_ST_RFQ_VEND = "PR_GET_ST_RFQ_VEND";
        public const string UPR_GET_ST_RFQ_IND = "PR_GET_ST_RFQ_IND";
        public const string UPR_GET_ST_RFQ_TNC = "PR_GET_ST_RFQ_TNC";
        public const string UPR_GET_ST_RFQ_VEND_ITEM = "PR_GET_ST_RFQ_VEND_ITEM";
        public const string UPR_DEL_ST_RFQ = "PR_DEL_ST_RFQ";
        public const string UPR_GET_ST_PINDS = "PR_GET_ST_PINDS";
        #endregion

        public const string UPR_GET_MACHINE_SCHEDULES = "pr_get_machine_schedules";
        #region NRDC
        public const string UPR_INSUPD_ST_NRC = "PR_INSUPD_ST_NRC";
        public const string UPR_GETALL_ST_NRC = "PR_GETALL_ST_NRC";
        public const string UPR_GET_ST_NRC_AUTO = "PR_GET_ST_NRC_AUTO";
        public const string UPR_DEL_ST_NRC = "PR_DEL_ST_NRC";
        public const string UPR_GET_ST_TRN_ITEM = "PR_GET_ST_TRN_ITEM";


        #endregion

        #region Ward Group
        public const string UPR_GET_WARD_GROUP = "PR_GET_WARD_GROUP";
        public const string UPR_INSUPD_TARIFF_WARD_GROUP_XML = "PR_INSUPD_TARIFF_WARD_GROUP_XML";
        public const string UPR_GET_WARD_GROUP_AUTO = "PR_GET_WARD_GROUP_AUTO";
        #endregion



        #region Masters
        public const string UPR_GET_DEPT_TYPES = "PR_GET_DEPT_TYPES";
        #endregion
        public const string UPR_GET_WARDWISE_CREDITLIMIT_AUTO = "PR_GET_ADT_WARD_CREDIT_LIMIT_AUTO";
        public const string UPR_GET_REFERAL_CONS_DET = "PR_GET_REFERAL_CONS_DET";

        public const string UPR_GET_ACKDETAILS = "PR_GET_ACKDETAILS";
        public const string UPR_GET_PREV_NST_DOCREQS = "PR_GET_PREV_NST_DOCREQS";
        public const string UPR_INSUPD_NST_DOC_VST_CNCL_XML = "PR_INSUPD_NST_DOC_VST_CNCL_XML";

        #region onlinepatient reports
        public const string UPR_GET_PATIENT_BILLS = "PR_GET_PATIENT_BILLS";
        public const string UPR_GET_PATIENT_BILLS_SERVICES = "PR_GET_PATIENT_BILLS_SERVICES";
        #endregion

        #region QUICK
        public const string UPR_PR_GETALL_APPTS_DEPARTMENTSN = "PR_GETALL_APPTS_DEPARTMENTSN";
        #endregion
        public const string UPR_GET_INS_SMS_MESSAGE = "PR_GET_INS_SMS_MESSAGE";
        public const string UPR_GET_COM_DSCUMRY_TYPE = "PR_GET_COM_DSCUMRY_TYPE";
        public const string upr_get_bed_transfr_list = "pr_get_bed_transfr_list";
        public const string UPR_GET_BED_TRANSFR_AUTO = "PR_GET_BED_TRANSFR_AUTO";
        public const string UPR_GETALL_ENTITY = "PR_GETALL_ENTITY";
        public const string UPR_GETALL_ENTITY_VALUE = "PR_GETALL_ENTITY_VALUE";
        public const string UPR_GET_ENTITY_AUTO = "PR_GET_ENTITY_AUTO";

        #region LAB

        public const string UPR_INSUPD_HOLIDAYS = "PR_INSUPD_HOLIDAYS";
        public const string UPR_GET_HOLIDAYS_PAGING = "PR_GET_HOLIDAYS_PAGING";
        public const string UPR_GET_HOLIDAYS = "PR_GET_HOLIDAYS";
        public const string UPR_DELETE_HOLIDAY = "PR_DELETE_HOLIDAY";
        public const string UPR_GET_HOLIDAYS_AUTO = "PR_GET_HOLIDAYS_AUTO";

        #endregion
        #region FRANCHISE

        public const string UPR_GET_FO_RECPAY_REF_FRANCHISE = "PR_GET_FO_RECPAY_REF_FRANCHISE";
        public const string UPR_GET_FRANCHISEE_DEPOSIT_DETAILS = "PR_GET_FRANCHISEE_DEPOSIT_DETAILS";
        public const string UPR_GET_FRANCHISEE_DEPOSIT_DETAILS_AUTO = "PR_GET_FRANCHISEE_DEPOSIT_DETAILS_AUTO";
        public const string UPR_GET_FRANCHISE_DET = "PR_GET_FRANCHISE_DET";
        public const string UPR_GET_INSUPD_FRANCHISEE = "PR_GET_INSUPD_FRANCHISEE";
        public const string UPR_GET_LOCATION_DTLS = "PR_GET_LOCATION_DTLS";
        public const string UPR_GET_LOCATION_DTLS_AUTO = "PR_GET_LOCATION_DTLS_AUTO";
        public const string UPR_GET_LOCATION_TRANSACTION_DTLS = "PR_GET_LOCATION_TRANSACTION_DTLS";
        public const string UPR_GET_LOCATION_ADDRESS_DTLS = "PR_GET_LOCATION_ADDRESS_DTLS";
        public const string UPR_GET_COURIER_AUTO = "PR_GET_COURIER_AUTO";
        public const string UPR_GET_CITIS = "PR_GET_CITIS";
        public const string UPR_GET_STATS = "PR_GET_STATS";
        public const string UPR_GET_COUNTRIS = "PR_GET_COUNTRIS";
        public const string UPR_GET_ARES = "PR_GET_ARES";
        public const string UPR_GET_PATIENTDET = "PR_GET_PATIENTDET";
        public const string UPR_GET_PATIENTDET_VIEW = "PR_GET_PATIENTDET_VIEW";
        public const string UPR_INSUPD_FRANCHISE_APMNT = "PR_INSUPD_FRANCHISE_APMNT";

        #endregion
        #region Lab Working Hours

        public const string UPR_INSUPD_LAB_WORKING_HOURS = "PR_INSUPD_LAB_WORKING_HOURS";
        public const string uPR_GET_LAB_WORKING_HOURS = "PR_GET_LAB_WORKING_HOURS";
        public const string UPR_GET_HOLIDAYS_REMARKS = "PR_GET_HOLIDAYS_REMARKS";
        #endregion

        #region  ACCOUNTS

        public const string UPR_GENERALTRANSACTIONS = "PROC_GENERALTRANSACTIONS";
        public const string UPROC_ACCOUNTS_LIS_INTEGRATION = "PROC_ACCOUNTS_LIS_INTEGRATION";

        #endregion
        #region Parameter Percent SetUp
        public const string UPR_GET_FORMAT_COMPONENTS_AUTO = "PR_GET_FORMAT_COMPONENTS_AUTO";
        public const string UPR_INSUPD_PERCENT_SETUP_XML = "PR_INSUPD_PERCENT_SETUP_XML";
        public const string UPR_GET_PERCENT_SETUP_PAGING = "PR_GET_PERCENT_SETUP_PAGING";
        public const string UPR_GET_PERCENT_SETUP_COMP = "PR_GET_PERCENT_SETUP_COMP";
        public const string UPR_GET_PERCENT_SETUP = "PR_GET_PERCENT_SETUP";
        public const string UPR_DEL_PERCENT_SETUP_COMP = "PR_DEL_PERCENT_SETUP_COMP";
        public const string UPR_GET_PERCENT_SETUP_AUTO = "PR_GET_PERCENT_SETUP_AUTO";
        #endregion

        public const string UPR_GET_ST_NRQ_CNCL_PAGING = "PR_GET_ST_NRQ_CNCL_PAGING";
        public const string UPR_GET_ST_NRQ_CNCL_AUTO = "PR_GET_ST_NRQ_CNCL_AUTO";
        public const string UPR_GET_ST_NRQ_CNCL_ITEM = "PR_GET_ST_NRQ_CNCL_ITEM";

        public const string UPR_GETALL_DRUG_RETURN = "PR_GETALL_DRUG_RETURN";
        public const string UPR_GETALL_DRUG_RETURN_ITEMS = "PR_GETALL_DRUG_RETURN_ITEMS";
        public const string UPR_GETALL_DRUG_RETURN_AUTO = "PR_GETALL_DRUG_RETURN_AUTO";
        public const string UPR_GET_ALL_IP_BILL_DETAILS = "PR_GET_ALL_IP_BILL_DETAILS";
        public const string UPR_GET_WARD_GROUP_TARIFF = "PR_GET_WARD_GROUP_TARIFF";
        public const string UPR_GETALL_SERVICE_PRICES = "PR_GETALL_SERVICE_PRICES";
        public const string UPR_GET_LOCATION_PAGING = "PR_GET_LOCATION_PAGING";

        public const string UPR_GET_WOR_ORDER_SERVICES = "PR_GET_WOR_ORDER_SERVICES";
        public const string UPR_GET_ORDERDETAILS = "PR_GET_ORDERDETAILS";
        public const string UPR_GET_WORKORDER_SERVICE_AUTO = "PR_GET_WORKORDER_SERVICE_AUTO";
        public const string UPR_GET_WORKORDER_VIEW = "PR_GET_WORKORDER_VIEW";
        public const string UPR_GET_WORKORDER_VIEW_NEW = "PR_GET_WORKORDER_VIEW_NEW";
        public const string UPR_GET_MONTHLY_TOUR_PRG_DET = "PR_GET_MONTHLY_TOUR_PRG_DET";
        public const string UPR_GET_MTP_VIEW = "PR_GET_MTP_VIEW";
        public const string UPR_GET_MTP_ACTIVITY_PLAN_AUTO = "PR_GET_MTP_ACTIVITY_PLAN_AUTO";
        public const string UPR_GET_WORKORDER_APPROX_VIEW = "PR_GET_WORKORDER_APPROX_VIEW";
        public const string UPR_GET_AUTO_OP_SAMPLE_REG = "PR_GET_AUTO_OP_SAMPLE_REG";
        public const string UPR_GETALL_COURIER_DET = "PR_GETALL_COURIER_DET";
        public const string UPR_GET_ALL_COURIERS = "PR_GET_ALL_COURIERS";
        public const string UPR_GET_COURIER_EDIT_VIEW = "PR_GET_COURIER_EDIT_VIEW";
        public const string UPR_COURIER_APPROVAL = "PR_COURIER_APPROVAL";
        public const string UPR_GET_LOC_COMP_MAPPING_LOOKUP = "PR_GET_LOC_COMP_MAPPING_LOOKUP";
        public const string UPR_GET_TRANSACTION_DETAILS_SUB = "PR_GET_TRANSACTION_DETAILS_SUB";
        public const string UPR_GET_PATIENTDETAILS_NEW_SUB = "PR_GET_PATIENTDETAILS_NEW_SUB";
        public const string UPR_GET_FACILITIES_BY_USER_ID_AUTO_SUB = "PR_GET_FACILITIES_BY_USER_ID_AUTO_SUB";
        public const string UPR_GET_RECEIPT_SAMPLE_REG_SUB = "PR_GET_RECEIPT_SAMPLE_REG_SUB";
        public const string UPR_GET_DOCTORS_SLOT_DETAILS = "PR_GET_DOCTORS_SLOT_DETAILS";
        public const string UPR_UPD_FO_BILL_SRV_SERVICE_STATUS = "PR_UPD_FO_BILL_SRV_SERVICE_STATUS";
        /*Added for Emergency Slots*/
        public const string UPR_GET_MONTHWISE_DATES = "PR_GET_MONTHWISE_DATES";
        public const string UPR_INSUPD_EMERGENCY_SLOTS_XML = "PR_INSUPD_EMERGENCY_SLOTS_XML";
        public const string UPR_GET_ALL_PACKAGES_SERVICES = "PR_GET_ALL_PACKAGES_SERVICES";
        public const string UPR_INSUPD_FO_RECPAY_DET_XML_NEW = "PR_INSUPD_FO_RECPAY_DET_XML_NEW";
        public const string UPR_GETALL_LOCATION_TARIFF = "PR_GETALL_LOCATION_TARIFF";
        public const string UPR_GET_SERVICE_CLINICAL_HISTORY = "PR_GET_SERVICE_CLINICAL_HISTORY";
        public const string UPR_HOSP_WARD_GROUP_MAPPING = "PR_HOSP_WARD_GROUP_MAPPING";
        public const string UPR_INSUPD_HOSP_WARD_GROUP_SUB = "PR_INSUPD_HOSP_WARD_GROUP_SUB";
        public const string UPR_GET_HOSP_WARD_GROUP_AUTO_SUB = "PR_GET_HOSP_WARD_GROUP_AUTO_SUB";

        /*Added for DashBoard*/
        public const string UPR_GET_YEAR_WISE_IP_OP_COLLECTION = "PR_GET_YEAR_WISE_IP_OP_COLLECTION";
        public const string UPR_GET_IP_REVENUE_DATES_WISE = "PR_GET_IP_REVENUE_DATES_WISE";
        public const string UPR_GET_BED_OCCUPANCY_DEATILS = "PR_GET_BED_OCCUPANCY_DEATILS";
        public const string UPR_GET_DSCHRG_DETAILS = "PR_GET_DSCHRG_DETAILS";
        public const string UPR_GET_SURGERY_DETAILS = "PR_GET_SURGERY_DETAILS";
        public const string UPR_GET_REVENUE_DASHBOARD = "PR_GET_REVENUE_DASHBOARD";
        public const string UPR_GET_DASHBOARD_AMOUTS_DETAILS = "PR_GET_DASHBOARD_AMOUTS_DETAILS";
        public const string UPR_GET_TOTAL_AMOUNT_DASHBOARD = "PR_GET_TOTAL_AMOUNT_DASHBOARD";
        public const string UPR_GET_REVENUE_WEEK_AMOUNT_DASHBOARD = "PR_GET_REVENUE_WEEK_AMOUNT_DASHBOARD";
        public const string UPR_GET_REFUND_AMT_DAYWISE_DETAILS = "PR_GET_REFUND_AMT_DAYWISE_DETAILS";
        public const string UPR_GET_EMPLOYER_AUTO_COMP_CLIENT = "PR_GET_EMPLOYER_AUTO_COMP_CLIENT";
        public const string UPR_GET_KPIS_DETAILS = "PR_GET_KPIS_DETAILS";
        public const string UPR_GET_CASHCREDIT_DETAILS = "PR_GET_CASHCREDIT_DETAILS";
        public const string UPR_INSUPD_PATIENT_REG_CON_OPBILL_XML_ROOT = "PR_INSUPD_PATIENT_REG_CON_OPBILL_XML_ROOT";
        /*DashBoard Ends*/
        public const string UPR_GET_SERVICE_ESTIMATION_WORK_ORDER_SERVICES_SUB = "PR_GET_SERVICE_ESTIMATION_WORK_ORDER_SERVICES_SUB";
        public const string UPR_GET_PAT_REG_ALERT_MSG = "PR_GET_PAT_REG_ALERT_MSG";
        public const string UPR_GET_INVS_ORDER_SERVICES_NEW = "PR_GET_INVS_ORDER_SERVICES_NEW";
        public const string UPR_INSUPD_PATIENT_ADDRESS_MODIFY_XML = "PR_INSUPD_PATIENT_ADDRESS_MODIFY_XML";
        public const string UPR_GETALL_TRANS_ADVANCE_SUBURBAN = "PR_GETALL_TRANS_ADVANCE_SUBURBAN";
        public const string UPR_GETALL_BILLS_ONID_SUB = "PR_GETALL_BILLS_ONID_SUB";
        public const string UPR_GET_SERVICE_CLINICAL_SUMMARY_SUB = "PR_GET_SERVICE_CLINICAL_SUMMARY_SUB";
        public const string UPR_GETALL_ADVANCE_PAYMENT = "PR_GETALL_ADVANCE_PAYMENT";
        public const string UPR_GET_ADVANCE_DETAILS = "PR_GET_ADVANCE_DETAILS";
        public const string UPR_GET_MEDICATIONS_CLINICAL_SUMMARY_SUB = "PR_GET_MEDICATIONS_CLINICAL_SUMMARY_SUB";
        public const string UPR_INSUPD_MEDICATIONS = "PR_INSUPD_MEDICATIONS";
        public const string UPR_GETALL_MEDICATION = "PR_GETALL_MEDICATION";
        public const string UPR_GETALL_MEDICATION_EDIT = "PR_GETALL_MEDICATION_EDIT";
        public const string UPR_GETALL_TRANS_ADVANCE_AUTO_SUBURBAN = "PR_GETALL_TRANS_ADVANCE_AUTO_SUBURBAN";
        public const string UPR_GET_REFUND_DET_SUB_EDIT = "PR_GET_REFUND_DET_SUB_EDIT";
        public const string UPR_GET_REFERRAL_CONCESSION = "PR_GET_REFERRAL_CONCESSION";
        public const string UPR_GET_REFERRAL_CONCESSION_SUB = "PR_GET_REFERRAL_CONCESSION_SUB";
        public const string UPR_GET_LOC_COMP_MAPPING_TPA_DD_SUB = "PR_GET_LOC_COMP_MAPPING_TPA_DD_SUB";
        public const string UPR_GET_PACKAGE_INCLUDE_SERVICES_SUB = "PR_GET_PACKAGE_INCLUDE_SERVICES_SUB";
        public const string UPR_INSUPD_PAT_IMAGE_SAVING = "PR_INSUPD_PAT_IMAGE_SAVING";
        public const string UPR_GET_CURRENCY_EXRATE_CURRENCY = "PR_GET_CURRENCY_EXRATE_CURRENCY";
        public const string UPR_GET_CURRENCY_LOOKUP_AUTO = "PR_GET_CURRENCY_LOOKUP_AUTO";
        #region prakash
        public const string UPR_GET_ALL_INSUPD_DOC_AVA_XML = "PR_INSUPD_DOC_AVA_XML";//ALL DOCTOR AVALABLE DETAILS
        public const string UPR_GET_DOC_AVA_STATUS = "PR_GET_DOC_AVA_STATUS";
        public const string UPR_GET_AFT_CMPLTION_BILLS_STS = "dbo.PR_GET_AFT_CMPLTION_BILLS_STS";
        public const string UPR_GET_CORP_ALL_BILL_STS = "dbo.PR_GET_CORP_ALL_BILL_STS";
        #endregion

        #region Neelima
        public const string UPR_DEL_PAT_GENDER_TITLE = "PR_DEL_PAT_GENDER_TITLE ";//FOR DELETION PROC 
        public const string UPR_GETALL_PAT_GENDER_TITLE = "PR_GETALL_PAT_GENDER_TITLE";//GRID PAGE DATA PROC 
        public const string UPR_GET_PAT_GENDER_TITLE = "PR_GET_PAT_GENDER_TITLE";//GETTING THE DATA
        public const string UPR_INSUPD_PAT_GENDER_TITLE = "PR_INSUPD_PAT_GENDER_TITLE";//INSERTING THE GIVEN DATA

        #endregion

        #region Praveen
        public const string UPR_GET_CHECK_TARIFFNAME = "PR_GET_CHECK_TARIFFNAME";
        public const string UPR_GET_CHECK_DEPARTMENTNAME = "PR_GET_CHECK_DEPARTMENTNAME";

        public const string UPR_GET_AUTO_ALLERGY = "PR_GET_AUTO_ALLERGY";
        public const string UPR_GET_AUTO_ST_ITEM = "PR_GET_AUTO_ST_ITEM";
        public const string UPR_INSUPD_PAT_ALLERGIES_XML = "PR_INSUPD_PAT_ALLERGIES_XML";
        public const string UPR_GETALL_PAT_ALLERGIES = "PR_GETALL_PAT_ALLERGIES";
        public const string UPR_GET_PAT_ALLERGIES_LST = "PR_GET_PAT_ALLERGIES_LST";

        public const string UPR_INSUPD_NU_IND_XML_FOOD_SRV = "PR_INSUPD_NU_IND_XML_FOOD_SRV";
        public const string UPR_GETALL_SERVICE_FOOD = "PR_GETALL_SERVICE_FOOD";
        public const string UPR_GETALL_NU_IND_FOOD = "PR_GETALL_NU_IND_FOOD";
        public const string UPR_GET_NU_IND_SRV_FOOD = "PR_GET_NU_IND_SRV_FOOD";

        public const string UPR_INSUPD_NUR_DIET_IND = "PR_INSUPD_NUR_DIET_IND";
        public const string UPR_GET_NUR_DIET_IND = "PR_GET_NUR_DIET_IND";
        public const string UPR_GET_APP_BILL_NUR = "PR_GET_APP_BILL_NUR";
        public const string UPR_GET_FO_RECPAY_REF_NST = "PR_GET_FO_RECPAY_REF_NST";
        public const string UPR_GET_PATIENT_NURS = "PR_GET_PATIENT_NURS";
        //public const string UPR_GET_NUR_DIET_IND = "PR_GET_NUR_DIET_IND";

        public const string UPR_GETALL_PATIENT_MVMNT_PURPOSE = "PR_GETALL_PATIENT_MVMNT_PURPOSE";
        public const string UPR_GETALL_PATIENT_MVMNT_TRNSFR_MODE = "PR_GETALL_PATIENT_MVMNT_TRNSFR_MODE";
        public const string UPR_INSUPD_ADT_PATIENT_MVMNT = "PR_INSUPD_ADT_PATIENT_MVMNT";
        public const string UPR_GET_ADT_PATIENT_MVMNT = "PR_GET_ADT_PATIENT_MVMNT";
        public const string UPR_INSUPD_ADT_PATIENT_CONSLNG = "PR_INSUPD_ADT_PATIENT_CONSLNG";
        public const string UPR_GET_ADT_PATIENT_CONSLNG = "PR_GET_ADT_PATIENT_CONSLNG";
        public const string UPR_GET_PAT_EMRG_DETLS = "PR_GET_PAT_EMRG_DETLS";
        public const string UPR_INSUPD_ADT_ADMN_DIABETIC_CHART = "PR_INSUPD_ADT_ADMN_DIABETIC_CHART";
        public const string UPR_GET_ADT_ADMN_DIABETIC_CHART = "PR_GET_ADT_ADMN_DIABETIC_CHART";
        public const string UPR_GET_DIABETICS_ENTITIES = "PR_GET_DIABETICS_ENTITIES";



        #endregion Praveen

        public const string UPR_GET_ALL_OP_SERVICES = "PR_GET_ALL_OP_SERVICES";
        public const string UPR_GETALL_VW_IP_ADMN_DTLS = "PR_GETALL_VW_IP_ADMN_DTLS";
        public const string UPR_GET_COM_MSG_CONCESSION = "PR_GET_COM_MSG_CONCESSION";
        public const string UPR_GET_DOCUMENT_ATTRIBUTE = "PR_GET_DOCUMENT_ATTRIBUTE";
        public const string UPR_INSUPD_SHIFT_COL_TRNSFR_XML = "PR_INSUPD_SHIFT_COL_TRNSFR_XML";
        public const string UPR_GET_ALL_EMS_ENTITY_PRC = "PR_GET_ALL_EMS_ENTITY_PRC";
        public const string UPR_INSUPD_DRIVERFORM = "PR_INSUPD_DRIVER_DETLS_XML";
        public const string UPR_GET_DRIVERINFORMATION = "PR_GET_DRIVER_DETLS";
        public const string UPR_INSUPD_VEHICLE_XML = "PR_INSUPD_VEHICLE_XML";// for vehicle master
        public const string UPR_INSUPD_VEHICLE_FUEL = "PR_INSUPD_VEHICLE_FUEL";
        public const string UPR_INSUPD_VEHICLE_SALE = "PR_INSUPD_VEHICLE_SALE";
        public const string UPR_GETALL_VEHICLE_SALE = "PR_GETALL_VEHICLE_SALE";
        public const string UPR_GETALL_TRANSPORT_ENTITY_VALUE = "PR_GETALL_TRANSPORT_ENTITY_VALUE";
        public const string UPR_PR_GET_VEHICLE = "PR_GET_VEHICLE";
        public const string UPR_INSUPD_VEHICLE_REQ_XML = "PR_INSUPD_VEHICLE_REQ_XML";
        public const string UPR_INSUPD_VEHICLE_SCARP_XML = "PR_INSUPD_VEHICLE_SCARP_XML";
        public const string UPR_INSUPD_VEHICLE_OUT_XML = "PR_INSUPD_VEHICLE_OUT_XML";
        public const string UPR_INSUPD_VEHICLE_IN_XML = "PR_INSUPD_VEHICLE_IN_XML";
        public const string UPR_INSUPD_VEHICLE_SALE_XML = "PR_INSUPD_VEHICLE_SALE_XML";
        public const string UPR_INSUPD_VEHICLE_FUEL_XML = "PR_INSUPD_VEHICLE_FUEL_XML";
        public const string UPR_INSUPD_VECHL_SERVS_FRM_XML = "PR_INSUPD_VECHL_SERVS_FRM_XML";
        public const string UPR_GETALL_DRIVERS = "PR_GETALL_DRIVER_DETLS";
        public const string UPR_GETALL_VEHICLE = "PR_GETALL_VEHICLE";
        public const string UPR_GET_VEHICLE_DETAILS_EXT_CHILD = "PR_GET_VEHICLE_DETAILS_EXT_CHILD";
        public const string UPR_GET_VEHICLE_ACCDT_DETLS = "PR_GET_VEHICLE_ACCDT_DETLS ";
        public const string UPR_INSUPD_VEHICLE_ACCDT_DETLS = "PR_INSUPD_VEHICLE_ACCDT_DETLS";
        public const string UPR_GETALL_VEHICLE_ACCDT_DETLS = "PR_GETALL_VEHICLE_ACCDT_DETLS";
        public const string UPR_GET_VEHICLE_SALE = "PR_GET_VEHICLE_SALE";
        public const string UPR_GETALL_VEHICLE_FUEL = "PR_GETALL_VEHICLE_FUEL";
        public const string UPR_GET_VEHICLE_REQ = "PR_GET_VEHICLE_REQ";
        public const string UPR_INSUPD_VEHICLE_REQ = "PR_INSUPD_VEHICLE_REQ";
        public const string UPR_GETALL_VEHICLE_REQ = "PR_GETALL_VEHICLE_REQ";
        public const string UPR_GETALL_VEHICLE_REQ_LOOKUP = "PR_GETALL_VEHICLE_REQ_LOOKUP";
        public const string UPR_GET_VEHICLE_FUEL = "PR_GET_VEHICLE_FUEL";

        public const string UPR_GETALL_VEHICLE_OUT = "PR_GETALL_VEHICLE_OUT";
        public const string UPR_GETALL_VEHICLE_OUT_LOOKUP = "PR_GETALL_VEHICLE_OUT_LOOKUP";
        public const string UPR_GET_VEHICLE_OUT = "PR_GET_VEHICLE_OUT";
        public const string UPR_GET_VEHICLE_INSURENCE = "PR_GET_VEHICLE_INSURENCE";
        public const string UPR_INSUPD_VEHICLE_INSURENCE = "PR_INSUPD_VEHICLE_INSURENCE";
        public const string UPR_INSUPD_VEHICLE_INSURENCE_XML = "PR_INSUPD_VEHICLE_INSURENCE_XML";
        public const string UPR_GETALL_VEHICLE_INSURENCE = "PR_GETALL_VEHICLE_INSURENCE";
        public const string UPR_INSUPD_VEHICLE_SCARP = "PR_INSUPD_VEHICLE_SCARP";

        public const string UPR_GET_VEHICLE_SCARP = "PR_GET_VEHICLE_SCARP";
        public const string UPR_GETALL_VEHICLE_SCARP = "PR_GETALL_VEHICLE_SCARP";
        public const string UPR_INSUPD_VECHL_SERVS_FRM = "PR_INSUPD_VECHL_SERVS_FRM";
        public const string UPR_GET_VECHL_SERVS_FRM = "PR_GET_VECHL_SERVS_FRM";
        public const string UPR_GETALL_VECHL_SERVS_FRM = "PR_GETALL_VECHL_SERVS_FRM";
        public const string UPR_GET_VEHICLE_POLLUTION_CHECK = "PR_GET_VEHICLE_POLLUTION_CHECK";
        public const string UPR_INSUPD_VEHICLE_ROUTE_MAP = "PR_INSUPD_VEHICLE_ROUTE_KILMTR_WISE";
        public const string UPR_GET_VEHICLE_ROUTE_MAP = "PR_GET_VEHICLE_ROUTE_KILMTR_WISE";
        public const string UPR_GETALL_VEHICLE_ROUTE_MAP = "PR_GETALL_VEHICLE_ROUTE_KILMTR_WISE";
        public const string UPR_INSUPD_TRANSPORT_ENTITY_VALUE = "PR_INSUPD_TRANSPORT_ENTITY_VALUE";
        public const string UPR_GET_TRANSPORT_ENTITY_VALUE = "PR_GET_TRANSPORT_ENTITY_VALUE";
        public const string UPR_INSUPD_VEHICLE_SRV_CENTER = "PR_INSUPD_VEHICLE_SRV_CENTER ";
        public const string UPR_GET_VEHICLE_SRV_CENTER = "PR_GET_VEHICLE_SRV_CENTER";
        public const string UPR_GETALL_VEHICLE_SRV_CENTER = "PR_GETALL_VEHICLE_SRV_CENTER";
        public const string UPR_INSUPD_VEHICLE_TYPE = "PR_INSUPD_VEHICLE_TYPE   ";
        public const string UPR_GET_VEHICLE_TYPE = "PR_GET_VEHICLE_TYPE";
        public const string UPR_GETALL_VEHICLE_TYPE = "PR_GETALL_VEHICLE_TYPE";
        public const string UPR_INSUPD_VEHICLE_POLLUTION_CHECK = "PR_INSUPD_VEHICLE_POLLUTION_CHECK";
        public const string UPR_GETALL_VEHICLE_POLLUTION_CHECK = "PR_GETALL_VEHICLE_POLLUTION_CHECK";
        public const string UPR_GETALL_VEHICLE_FUEL_FUELBUNK = "PR_GETALL_VEHICLE_FUEL_FUELBUNK";
        public const string UPR_INSUPD_VEHICLE_POLLUTION_CHECK_XML = "PR_INSUPD_VEHICLE_POLLUTION_CHECK_XML";
        public const string UPR_GETALL_VEHICLE_FUEL_VEHICLE = "PR_GETALL_VEHICLE_FUEL_VEHIBIND";
        public const string UPR_GET_VEHICLE_CHARGES = "PR_GET_VEHICLE_CHARGES";
        public const string UPR_GETALL_VEHICLE_CHARGES = "PR_GETALL_VEHICLE_CHARGES";
        public const string UPR_GETALL_VEHICLE_LOOKUP = "PR_GETALL_VEHICLE_LOOKUP";
        public const string UPR_GETALL_VEHICLE_ROUTE_WISE = "PR_GETALL_VEHICLE_ROUTEWISE";
        public const string UPR_GETALL_VEHICLE_ROUTEWISE_LOOKUP = "PR_GETALL_VEHICLE_ROUTEWISE_LOOKUP";
        public const string UPR_GETALL_VEHICLE_REQ_CANCEL_LOOKUP = "PR_GETALL_VEHICLE_REQ_CANCEL_LOOKUP";
        public const string UPR_GETALL_VEHICLE_REQ_RECEIPT_LOOKUP = "PR_GETALL_VEHICLE_REQ_RECEIPT_LOOKUP";
        public const string UPR_GET_VEHICLE_IN = "PR_GET_VEHICLE_IN";
        public const string UPR_GETALL_DRIVER_OUT_EXCLUDE = "PR_GETALL_DRIVER_OUT_EXCLUDE ";
        public const string UPR_GETALL_CSSD_RE_PROCESS_NEW_LOOKUP = "PR_GETALL_CSSD_RE_PROCESS_NEW_LOOKUP";
        public const string UPR_GETALL_VEHICLE_IN = "PR_GETALL_VEHICLE_IN";
        public const string UPR_GET_VEHICLE_KMWISE = "PR_GET_VEHICLE_KMWISE";
        public const string UPR_GETALL_CSSD_MACHINE_MASTER_LOOKUP = "PR_GETALL_CSSD_MACHINE_MASTER_LOOKUP";
        public const string UPR_GETALL_CSSD_KIT_PREPARATION_LOOKUP = "PR_GETALL_CSSD_KIT_PREPARATION_LOOKUP";
        public const string UPR_GETALL_CSSD_KIT_REQ_LOOKUP = "PR_GETALL_CSSD_KIT_REQ_LOOKUP";
        public const string UP_GET_VEHICLE_TYPE_DDL = "PR_GET_VEHICLE_TYPE_LIST";
        public const string UPR_GET_ALL_TRANSPORT_ENTITY_PRC = "PR_GET_ALL_TRANSPORT_ENTITY_PRC";

        public const string UPR_GETALL_DIA_COMPONENT_AUTOCOMP = "PR_GETALL_DIA_COMPONENT_AUTOCOMP";
        public const string UPR_GETALL_ADT_FUND = "PR_GETALL_ADT_FUND";
        public const string UPR_GETALL_ADT_FUND_ALLOCATION = "PR_GETALL_ADT_FUND_ALLOCATION";
        public const string UPR_GETALL_ADT_PREADMN_ENQRY = "PR_GETALL_ADT_PREADMN_ENQRY";
        public const string UPR_GETALL_ADT_FUND_TRANSFER = "PR_GETALL_ADT_FUND_TRANSFER";
        public const string UPR_GETALL_ADT_FUND_COMMITTEE = "PR_GETALL_ADT_FUND_COMMITTEE";
        public const string UPR_GETALL_ADT_FUND_SANCTION = "PR_GETALL_ADT_FUND_SANCTION";
        public const string UPR_GETALL_PANEL = "PR_GETALL_PANEL";
        public const string UPR_UPD_DMS_UPLOAD = "PR_UPDATE_DMS_STATUS ";



        public const string UPR_GET_DP_DOCTOR_PF_STATEMENTS = "PR_GET_DP_DOCTOR_PF_STATEMENTS";
        public const string UPR_GET_DP_DOCTOR_BANKDETAILS = "PR_GET_DP_DOCTOR_BANKDETAILS ";
        public const string UPR_INSUPD_DP_DOCTOR_PF_PAY_REF_DET = "PR_INSUPD_DP_DOCTOR_PF_PAY_REF_DET";
        public const string UPR_GET_DP_DOCTOR_PF_PAY_BALANCE = "PR_GET_DP_DOCTOR_PF_PAY_BALANCE";


    }


}

