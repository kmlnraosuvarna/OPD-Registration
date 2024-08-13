using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{


    #region STORES
    public class StoresConstatns
    {
        public const string NU_AMT_COL = "NU_AMT";
        public const string REFERENCE_TYPE_NAME_COL = "REFERENCE_TYPE_NAME";
        public const string ONHAND_PACK_COL = "ONHAND_PACK";
        public const string I_SALE_VAL_COL = "I_SALE_VAL";
        public const string I_PURC_VAL_COL = "I_PURC_VAL";
        public const string BILL_AMT_TAX_COL = "BILL_AMT_TAX";
        public const string ITEM_SALE_VALUE_COL = "ITEM_SALE_VALUE";
        public const string ITEM_PUR_VALUE_COL = "ITEM_PUR_VALUE";
        public const string MANUFACTURER_COL = "MANUFACTURER";
        public const string L3_NAME_COL = "L3_NAME";
        public const string L2_NAME_COL = "L2_NAME";
        public const string L1_NAME_COL = "L1_NAME";
        public const string IP_RETURN_AMT_COL = "IP_RETURN_AMT";
        public const string IP_SALE_AMT_COL = "IP_SALE_AMT";
        public const string IP_PURC_AMT_COL = "IP_PURC_AMT";
        public const string ip_net_sale_COL = "ip_net_sale";
        public const string op_net_sale_COL = "op_net_sale";
        public const string OP_RETURN_AMT_COL = "OP_RETURN_AMT";
        public const string OP_OUTSTAND_DUE_COL = "OP_OUTSTAND_DUE";
        public const string OP_DUE_AMT_COL = "OP_DUE_AMT";
        public const string OP_RECEIPT_AMT_COL = "OP_RECEIPT_AMT";
        public const string OP_NET_AMT_COL = "OP_NET_AMT";
        public const string OP_CNCS_AMT_COL = "OP_CNCS_AMT";
        public const string OP_BILL_AMT_COL = "OP_BILL_AMT";
        public const string OP_SALE_AMT_COL = "OP_SALE_AMT";
        public const string OP_PURC_AMT_COL = "OP_PURC_AMT";
        public const string OP_PURC_RATE_COL = "OP_PURC_RATE ";
        public const string OP_SALE_RATE_COL = "OP_SALE_RATE";
        public const string CLASS_NAME_COL = "CLASS_NAME";
        public const string CLASS_ID_COL = "CLASS_ID";
        public const string PATIENT_NAME_COL = "PATIENT_NAME";
        public const string DI_ITEM_CD_COL = "DI_ITEM_CD";
        public const string DI_ITEM_NAME_COL = "DI_ITEM_NAME";
        public const string D_PRFLE_CD_COL = "D_PRFLE_CD";
        public const string D_PRFLE_NAME_COL = "D_PRFLE_NAME";
        public const string CURRENCY_SYMBOL_COL = "CURRENCY_SYMBOL";
        public const string LICENSE_NO_COL = "LICENSE_NO";
        public const string INCHARGENAME_COL = "INCHARGENAME";
        public const string IS_ASSET_COL = "IS_ASSET";
        public const string IS_EXPIRY_COL = "IS_EXPIRY";
        public const string IS_EQUIP_COL = "IS_EQUIP";
        public const string IS_REUSED_COL = "IS_REUSED";
        public const string UOM_NAME_COL = "UOM_NAME";
        public const string FORM_NAME_COL = "FORM_NAME";
        public const string GENERIC_NAME_COL = "GENERIC_NAME";
        public const string GROUP_COL = "GROUP";
        public const string LEVEL0_COL = "LEVEL0";
        public const string GROUP_CD_COL = "GROUP_CD";
        public const string DESCRIPTION_COL = "DESCRIPTION";
        public const string NAME_COL = "NAME";
        public const string CODE_COL = "CODE";
        public const string PROFIT_INC_VAT_COL = "PROFIT_INC_VAT";
        public const string PAT_SALE_AMT_COL = "PAT_SALE_AMT";
        public const string PAT_PURC_AMT_COL = "PAT_PURC_AMT";
        public const string PAT_QTY_COL = "PAT_QTY";
        public const string STOCK_SALE_AMT_COL = "STOCK_SALE_AMT";
        public const string STOCK_PURC_AMT_COL = "STOCK_PURC_AMT";
        public const string STOCK_QTY_COL = "STOCK_QTY";
        public const string NET_SALE_AMT_COL = "NET_SALE_AMT";
        public const string NET_PURC_AMT_COL = "NET_PURC_AMT";
        public const string NET_QTY_COL = "NET_QTY";
        public const string IS_IND_MAN_IPBILL_COL = "IS_IND_MAN_IPBILL";
        public const string IS_IND_MAN_IPBILL_PARM = "@IP_IS_IND_MAN_IPBILL";
        public const string EXCISE_DUTY_COL = "EXCISE_DUTY";
        public const string NON_CONSIGNMENT_COL = "NON_CONSIGNMENT";
        public const string CONSIGNMENT_AMT_COL = "CONSIGNMENT_AMT";
        public const string MACHINE_NAME_COL = "MACHINE_NAME";

        public const string RETURN_DT_COL = "RETURN_DT";
        public const string CURRENCY_COL = "CURRENCY";
        public const string MIN_NO_COL = "MIN_NO";
        public const string PURCRATE_COL = "PURCRATE";
        public const string SALERATE_COL = "SALERATE";
        public const string PR_RESET_ID_COL = "PR_RESET_ID";

        public const string ITEM_L1_NAME_COL = "ITEM_L1_NAME";
        public const string ITEM_L2_NAME_COL = "ITEM_L2_NAME";
        public const string ITEM_L3_NAME_COL = "ITEM_L3_NAME";

        public const string ITEM_L1_NAME_PARM = "@IP_ITEM_L1_NAME";
        public const string ITEM_L2_NAME_PARM = "@IP_ITEM_L2_NAME";
        public const string ITEM_L3_NAME_PARM = "@IP_ITEM_L3_NAME";
        public const string PR_RESET_ID_PARM = "@IP_PR_RESET_ID";

        // public const string VD_STNDAYS_PARM = "@IP_VD_STNDAYS";

        public const string IP_TO_SALE_VAL_PARM = "@IP_TO_SALE_VAL";
        public const string IP_FROM_SALE_VAL_PARM = "@IP_FROM_SALE_VAL";
        public const string IP_FROM_PUR_VAL_PARM = "@IP_FROM_PUR_VAL";
        public const string IP_TO_PUR_VAL_PARM = "@IP_TO_PUR_VAL";
        public const string IP_CREATED_BY_PARM = "@IP_CREATED_BY";
        public const string STOCK_POINT_NAME_COL = "STOCK_POINT_NAME";
        //public const string VD_STNDAYS_COL = "VD_STNDAYS";
        public const string PURVAL_POS_COL = "PURVAL_POS";
        public const string PURVAL_NEG_COL = "PURVAL_NEG";
        public const string SCARP_QTY_COL = "SCARP_QTY";
        public const string SCN_PURC_RATE_COL = "SCN_PURC_RATE";
        public const string SCN_SALE_RATE_COL = "SCN_SALE_RATE";
        public const string SCN_PURC_AMT_COL = "SCN_PURC_AMT";
        public const string SCN_SALE_AMT_COL = "SCN_SALE_AMT";
        public const string IP_IL1_ID_PARM = "IP_IL1_ID";
        public const string IP_IL2_ID_PARM = "IP_IL2_ID";
        public const string IP_IL3_ID_PARM = "IP_IL3_ID";
        public const string IP_STP_ID_PARM = "IP_STP_ID";
        public const string TO_STOCK_POINT_COL = "TO_STOCK_POINT";
        public const string IP_ITEM_ID = "@IP_ITEM_ID";
        public const string FROM_STP_ID_COL = "FROM_STP_ID";
        public const string IP_FROM_STP_ID_PARM = "IP_FROM_STP_ID";
        public const string IP_TO_STP_ID_PARM = "IP_TO_STP_ID";
        public const string IP_ITEM_L1_ID_PARM = "IP_ITEM_L1_ID";
        public const string IP_ITEM_L2_ID_PARM = "IP_ITEM_L2_ID";
        public const string IP_ITEM_L3_ID_PARM = "IP_ITEM_L3_ID";
        public const string IP_ITEM_ID_PARM = "IP_ITEM_ID";
        // public const string IP_FLAG_PARM = "IP_FLAG";
        public const string TRN_TYPE_COL = "TRN_TYPE";
        #region StockpointSetting Parameters
        public const string MRQ_ITEM_CD_COL = "MRQ_ITEM_CD";
        public const string MRQ_QTY_ORDERED_COL = "MRQ_QTY_ORDERED";
        public const string MRQ_QTY_ISSUED_COL = "MRQ_QTY_ISSUED";
        public const string MRQ_PENDING_COL = "MRQ_PENDING";
        public const string MRQ_REJECTED_COL = "MRQ_REJECTED";
        public const string MRQ_RECEIVED_STOCK_POINT_COL = "MRQ_RECEIVED_STOCK_POINT";
        public const string MRQ_FROM_STOCK_POINT_COL = "MRQ_FROM_STOCK_POINT";
        public const string MRSTN_QTY_ORDERED_COL = "MRSTN_QTY_ORDERED";
        public const string MRSTN_QTY_ISSUED_COL = "MRSTN_QTY_ISSUED";
        public const string MRSTN_QTY_PENDING_COL = "MRSTN_QTY_PENDING";
        public const string MRSTN_QTY_ONHAND_COL = "MRSTN_QTY_ONHAND";
        public const string MRSTN_ISINDENTED_COL = "MRSTN_ISINDENTED";
        public const string MRSTN_REQ_NO_COL = "MRSTN_REQ_NO";
        public const string MRSTN_REQ_DT_COL = "MRSTN_REQ_DT";
        public const string MRSTN_VEND_NAME_COL = "MRSTN_VEND_NAME";
        public const string MRSTN_RECEIVED_STOCK_POINT_COL = "MRSTN_RECEIVED_STOCK_POINT";
        public const string MRSTN_FROM_STOCK_POINT_COL = "MRSTN_FROM_STOCK_POINT";
        public const string GRN_QTY_COL = "GRN_QTY";
        public const string PO_ORDER_QTY_COL = "PO_ORDER_QTY";
        public const string PO_VEND_NAME_COL = "PO_VEND_NAME";
        public const string INDENT_DT_COL = "INDENT_DT";
        public const string IDENT_NO_COL = "IDENT_NO";
        public const string PENDING_QTY_COL = "PENDING_QTY";
        public const string SPI_FROM_STOCK_POINT_COL = "SPI_FROM_STOCK_POINT";
        public const string SPI_TO_STOCK_POINT_COL = "SPI_TO_STOCK_POINT";
        public const string NRD_STOCK_POINT_NAME_COL = "NRD_STOCK_POINT_NAME";
        public const string VENDOR_NAME_COL = "VENDOR_NAME";
        public const string QTY_ADJ_COL = "QTY_ADJ";
        public const string SAN_STOCK_POINT_NAME_COL = "SAN_STOCK_POINT_NAME";
        public const string RECEIVED_STOCK_POINT_COL = "RECEIVED_STOCK_POINT";
        public const string FROM_STOCK_POINT_COL = "FROM_STOCK_POINT";
        public const string LOCAL_CURRENCY_COL = "LOCAL_CURRENCY";
        public const string VENDOR_VALUE_COL = "VENDOR_VALUE";
        public const string PO_VALUE_COL = "PO_VALUE";
        public const string IP_FLAG_PARM = "@IP_FLAG";
        public const string OP_RFQ_ID = "@OP_RFQ_ID ";
        public const string OP_BILL_ID = "@OP_BILL_ID";
        public const string OP_PO_ID = "@OP_PO_ID";
        public const string OP_PIND_ID = "@OP_PIND_ID";
        public const string CNCS_AMT_COL = "CNCS_AMT";
        public const string OP_SEC_ID = "@OP_SEC_ID";
        public const string OP_REN_ID = "@OP_REN_ID";
        public const string OP_MRN_ID = "@OP_MRN_ID";
        public const string OP_SCN_ID = "@OP_SCN_ID";
        public const string OP_GRN_ID = "@OP_GRN_ID";
        public const string OP_NRC_ID = "@OP_NRC_ID";
        public const string OP_REQ_ID = "@OP_REQ_ID";
        public const string OP_STN_ID = "@OP_STN_ID";
        public const string OP_SAN_ID = "@OP_SAN_ID";
        public const string OP_RET_ID = "@OP_RET_ID ";
        public const string PIND_ITM_IDS_PARAM = "@IP_PIND_ITM_IDS";
        public const string TRN_ITEM_REV_NO_COL = "TRN_ITEM_REV_NO";
        public const string TRN_ITEM_ID_COL = "TRN_ITEM_ID";
        public const string ISSUE_UNITS_PARM = "@IP_ISSUE_UNITS";
        public const string ISSUE_UNITS_COL = "ISSUE_UNITS";
        public const string DIRECTIONS_PARM = "@IP_DIRECTIONS";
        public const string DIRECTIONS_COL = "DIRECTIONS";
        public const string VENDOR_PACK_SIZE_PARM = "@IP_VENDOR_PACK_SIZE";
        public const string CODE_1_PARM = "@IP_CODE_1";
        public const string CODE_1_COL = "CODE_1";
        public const string CODE_2_PARM = "@IP_CODE_2";
        public const string CODE_2_COL = "CODE_2";
        public const string CODE_3_PARM = "@IP_CODE_3";
        public const string CODE_3_COL = "CODE_3";
        public const string NAMED_PATIENT_PARM = "@IP_NAMED_PATIENT";
        public const string NAMED_PATIENT_COL = "NAMED_PATIENT";
        public const string ISSUE_TO_DEPT_PARM = "@IP_ISSUE_TO_DEPT";
        public const string EXTEMPORANEOUS_PARM = "@IP_EXTEMPORANEOUS";
        public const string ISSUE_TO_DEPT_COL = "ISSUE_TO_DEPT";
        public const string EXTEMPORANEOUS_COL = "EXTEMPORANEOUS";
        public const string ICS_CD_PARM = "@IP_ICS_CD";
        public const string ICS_CD_COL = "ICS_CD";
        public const string ICS_NAME_PARM = "@IP_ICS_NAME";
        public const string ICS_NAME_COL = "ICS_NAME";
        public const string ST_STR_TABLE = "ST_STR";
        public const string SESSION_ID_PARM = "@IP_SESSION_ID";
        public const string ST_MRQ_TABLE = "ST_MRQ";
        public const string STP_ROL_REV_NO_PARM = "@IP_STP_ROL_REV_NO";
        public const string STP_ID_PARM = "@IP_STP_ID";
        public const string STP_REV_NO_PARM = "@IP_STP_REV_NO";
        public const string STP_CD_PARM = "@IP_STP_CD";
        public const string STP_NAME_PARM = "@IP_STP_NAME";
        public const string STP_DESC_PARM = "@IP_STP_DESC";
        public const string STP_ALIAS_PARM = "@IP_STP_ALIAS";
        public const string REG_NAME_PARM = "@IP_REG_NAME";
        public const string GRP_NAME_PARM = "@IP_GRP_NAME";
        public const string APGST_NO_PARM = "@IP_APGST_NO";
        public const string VAT_NO_PARM = "@IP_VAT_NO";
        public const string DL_NO_PARM = "@IP_DL_NO";
        public const string LST_NO_PARM = "@IP_LST_NO";
        public const string CST_NO_PARM = "@IP_CST_NO";
        public const string ADDRESS1_PARM = "@IP_ADDRESS1";
        public const string ADDRESS2_PARM = "@IP_ADDRESS2";
        public const string ADDRESS3_PARM = "@IP_ADDRESS3";
        public const string DC_ALLOWDISC_PARM = "@IP_DC_ALLOWDISC";
        public const string DC_DISCAPP_PARM = "@IP_DC_DISCAPP";
        public const string IL0_PARM = "@IP_IL0";
        public const string STP_TYPE_PARM = "@IP_STP_TYPE";
        public const string POS_PARM = "@IP_POS";
        public const string POR_PARM = "@IP_POR";
        public const string ICM_PARM = "@IP_ICM";
        public const string EA_GRNMSGDAYS_PARM = "@IP_EA_GRNMSGDAYS";
        public const string EA_GRNEXPIRY_PARM = "@IP_EA_GRNEXPIRY";
        public const string EA_STNMSGDAYS_PARM = "@IP_EA_STNMSGDAYS";
        public const string EA_STNEXPIRY_PARM = "@IP_EA_STNEXPIRY";
        public const string EA_BILLINGMSGDAYS_PARM = "@IP_EA_BILLINGMSGDAYS";
        public const string EA_BILLINGEXPIRY_PARM = "@IP_EA_BILLINGEXPIRY";
        public const string EA_ADJMSGDAYS_PARM = "@IP_EA_ADJMSGDAYS";
        public const string EA_ADJEXPIRYDAYS_PARM = "@IP_EA_ADJEXPIRYDAYS";
        public const string RV_ROUNDTYPE_PARM = "@IP_RV_ROUNDTYPE";
        public const string RV_ROUND_PARM = "@IP_RV_ROUND";
        public const string PM_PAYMODES_PARM = "@IP_PM_PAYMODES";
        public const string TP_GRN_PARM = "@IP_TP_GRN";
        public const string TP_NRD_PARM = "@IP_TP_NRD";
        public const string TP_RDC_PARM = "@IP_TP_RDC";
        public const string TP_RDR_PARM = "@IP_TP_RDR";
        public const string TP_PO_PARM = "@IP_TP_PO";
        public const string TP_PI_PARM = "@IP_TP_PI";
        public const string TP_STR_PARM = "@IP_TP_STR";
        public const string TP_STN_PARM = "@IP_TP_STN";
        public const string TP_SAN_PARM = "@IP_TP_SAN";
        public const string TP_SCN_PARM = "@IP_TP_SCN";
        public const string TP_OPS_PARM = "@IP_TP_OPS";
        public const string TP_OPR_PARM = "@IP_TP_OPR";
        public const string TP_IPS_PARM = "@IP_TP_IPS";
        public const string TP_IPR_PARM = "@IP_TP_IPR";
        public const string TP_IMO_PARM = "@IP_TP_IMO";
        public const string DA_GRN_PARM = "@IP_DA_GRN";
        public const string DA_NRD_PARM = "@IP_DA_NRD";
        public const string DA_RDC_PARM = "@IP_DA_RDC";
        public const string DA_RDR_PARM = "@IP_DA_RDR";
        public const string DA_PO_PARM = "@IP_DA_PO";
        public const string DA_PI_PARM = "@IP_DA_PI";
        public const string DA_STR_PARM = "@IP_DA_STR";
        public const string DA_STN_PARM = "@IP_DA_STN";
        public const string DA_SAN_PARM = "@IP_DA_SAN";
        public const string DA_SCN_PARM = "@IP_DA_SCN";
        public const string DA_OPS_PARM = "@IP_DA_OPS";
        public const string DA_OPR_PARM = "@IP_DA_OPR";
        public const string DA_IPS_PARM = "@IP_DA_IPS";
        public const string DA_IPR_PARM = "@IP_DA_IPR";
        public const string DA_IMO_PARM = "@IP_DA_IMO";
        public const string DA_NMPAT_PARM = "@IP_DA_NMPAT";
        public const string DA_VCRCT_PARM = "@IP_DA_VCRCT";
        public const string DA_QREQ_PARM = "@IP_DA_QREQ";
        public const string DA_QENTRY_PARM = "@IP_DA_QENTRY";
        public const string DA_QCOMP_PARM = "@IP_DA_QCOMP";
        public const string DA_REUSEITM_PARM = "@IP_DA_REUSEITM";
        public const string GS_POM_PARM = "@IP_GS_POM";
        public const string GS_SIMT_PARM = "@IP_GS_SIMT";
        public const string GS_SC_PARM = "@IP_GS_SC";
        public const string GS_ICL_PARM = "@IP_GS_ICL";
        public const string GS_QCC_PARM = "@IP_GS_QCC";
        public const string GS_BCL_PARM = "@IP_GS_BCL";
        public const string PSS_TG_PARM = "@IP_PSS_TG";
        public const string PSS_SPC_PARM = "@IP_PSS_SPC";
        public const string PSS_IL_PARM = "@IP_PSS_IL";
        public const string PSS_QCC_PARM = "@IP_PSS_QCC";
        public const string PSS_DC_PARM = "@IP_PSS_DC";
        public const string PR_APR_PARM = "@IP_PR_APR";
        public const string PR_LPR_PARM = "@IP_PR_LPR";
        public const string PR_PRA_PARM = "@IP_PR_PRA";
        public const string PR_LPRP_PARM = "@IP_PR_LPRP";
        public const string PSC_GRN_PARM = "@IP_PSC_GRN";
        public const string PSC_NRD_PARM = "@IP_PSC_NRD";
        public const string PSC_RDC_PARM = "@IP_PSC_RDC";
        public const string PSC_RDR_PARM = "@IP_PSC_RDR";
        public const string PSC_PO_PARM = "@IP_PSC_PO";
        public const string PSC_PI_PARM = "@IP_PSC_PI";
        public const string PSC_STR_PARM = "@IP_PSC_STR";
        public const string PSC_STN_PARM = "@IP_PSC_STN";
        public const string PSC_SAN_PARM = "@IP_PSC_SAN";
        public const string PSC_SCN_PARM = "@IP_PSC_SCN";
        public const string PSC_OPS_PARM = "@IP_PSC_OPS";
        public const string PSC_OPR_PARM = "@IP_PSC_OPR";
        public const string PSC_IPS_PARM = "@IP_PSC_IPS";
        public const string PSC_IPR_PARM = "@IP_PSC_IPR";
        public const string PSC_IMO_PARM = "@IP_PSC_IMO";
        public const string VD_PODAYS_PARM = "@IP_VD_PODAYS";
        public const string VD_PIDAYS_PARM = "@IP_VD_PIDAYS";
        public const string VD_TRDAYS_PARM = "@IP_VD_TRDAYS";
        public const string VD_MODAYS_PARM = "@IP_VD_MODAYS";
        public const string CREATE_BY_PARM = "@IP_CREATE_BY";
        public const string CREATE_DT_PARM = "@IP_CREATE_DT";
        public const string MODIFY_BY_PARM = "@IP_MODIFY_BY";
        public const string MODIFY_DT_PARM = "@IP_MODIFY_DT";
        public const string VD_LCDAYS_PARM = "@IP_VD_LCDAYS";
        public const string DC_EDIT_IN_BILL_PARM = "@IP_DC_EDIT_IN_BILL";
        public const string DEF_BILL_TYPE_PARM = "@IP_DEF_BILL_TYPE";
        public const string CURR_CD_PARM = "@IP_CURR_CD";
        public const string CURR_REV_NO_PARM = "@IP_CURR_REV_NO";
        public const string CURR_XCHG_REV_NO_PARM = "@IP_CURR_XCHG_REV_NO";
        public const string CURR_ID_PARM = "@IP_CURR_ID";
        public const string BARCODE_PARM = "@IP_BARCODE";
        public const string CIMSREQ_PARM = "@IP_CIMSREQ";
        public const string RULE_ID_PARM = "@IP_RULE_ID";
        public const string RULE_REV_NO_PARM = "@IP_RULE_REV_NO";
        public const string RULE_CD_PARM = "@IP_RULE_CD";
        public const string BILL_MIN_AMT_PARM = "@IP_BILL_MIN_AMT";
        public const string ROL_COND_PARM = "@IP_ROL_COND";
        public const string ROL_MIND_PARM = "@IP_ROL_MIND";
        public const string ROL_MAXD_PARM = "@IP_ROL_MAXD";
        public const string ROL_REOD_PARM = "@IP_ROL_REOD";
        public const string A_CLASS_PCT_PARM = "@IP_A_CLASS_PCT";
        public const string B_CLASS_PCT_PARM = "@IP_B_CLASS_PCT";
        public const string C_CLASS_PCT_PARM = "@IP_C_CLASS_PCT";
        public const string A_COND_PARM = "@IP_A_COND";
        public const string A_MIND_PARM = "@IP_A_MIND";
        public const string A_MAXD_PARM = "@IP_A_MAXD";
        public const string A_REOD_PARM = "@IP_A_REOD";
        public const string B_COND_PARM = "@IP_B_COND";
        public const string B_MIND_PARM = "@IP_B_MIND";
        public const string B_MAXD_PARM = "@IP_B_MAXD";
        public const string B_REOD_PARM = "@IP_B_REOD";
        public const string C_COND_PARM = "@IP_C_COND";
        public const string C_MIND_PARM = "@IP_C_MIND";
        public const string C_MAXD_PARM = "@IP_C_MAXD";
        public const string C_REOD_PARM = "@IP_C_REOD";
        public const string MNF_CD_PARM = "@IP_MNF_CD";
        public const string SRT_NAME_PARM = "@IP_SRT_NAME";
        public const string REG_NO_PARM = "@IP_REG_NO";
        public const string GLOBAL_ID_PARM = "@IP_GLOBAL_ID";
        public const string STP_IDs_PARAM = "@IP_STP_IDS";
        public const string CURR_XCHG_ID_PARM = "@IP_CURR_XCHG_ID";
        public const string CURR_XCHG_CD_PARM = "@IP_CURR_XCHG_CD";
        public const string FROM_CURR_ID_PARM = "@IP_FROM_CURR_ID";
        public const string FROM_CURR_SYMBOL_PARM = "@IP_FROM_CURR_SYMBOL";
        public const string TO_CURR_ID_PARM = "@IP_TO_CURR_ID";
        public const string TO_CURR_SYMBOL_PARM = "@IP_TO_CURR_SYMBOL";
        public const string EX_RATE_PARM = "@IP_EX_RATE";
        public const string EFT_FROM_DT_PARM = "@IP_EFT_FROM_DT";
        public const string EFT_TO_DT_PARM = "@IP_EFT_TO_DT";
        public const string STP_ROL_ID_PARM = "@IP_STP_ROL_ID";
        public const string VENDOR_CONTRACTID_OUTPARAM = "OP_VENDOR_CONTRACTID";
        public const string VEND_CRT_TABLE = "ST_VEND_CRT";
        public const string PI_TABLE = "ST_PIND";
        public const string PO_TABLE = "ST_PO";
        public const string VEND_TYPE_PARM = "@IP_REG_TYPE";
        #region Security Check Entry
        public const string SEC_ID_PARM = "@IP_SEC_ID";
        public const string SEC_REV_NO_PARM = "@IP_SEC_REV_NO";
        public const string SEC_NO_PARM = "@IP_SEC_NO";
        public const string SEC_DT_PARM = "@IP_SEC_DT";
        public const string INVDC_NO_PARM = "@IP_INVDC_NO";
        public const string INVDC_DT_PARM = "@IP_INVDC_DT";
        public const string MGATEPASSNO_PARM = "@IP_MGATEPASSNO";
        public const string CHECKED_BY_PARM = "@IP_CHECKED_BY";
        public const string IS_RECEIVED_PARM = "@IP_IS_RECEIVED";
        public const string GRN_ID_PARM = "@IP_GRN_ID";
        public const string GRN_NO_PARM = "@IP_GRN_NO";
        public const string PI_ID_PARM = "@IP_PI_ID";

        #endregion
        #region ITEM_L1
        public const string IL1_ID_PARM = "IP_IL1_ID";
        public const string IL1_REV_NO_PARM = "IP_IL1_REV_NO";
        public const string IL1_CD_PARM = "IP_IL1_CD";
        public const string IL1_NAME_PARM = "IP_IL1_NAME";
        public const string IL1_DESC_PARM = "IP_IL1_DESC";
        #endregion
        #region ITEM_L3
        public const string IL3_ID_PARM = "IP_IL3_ID";
        public const string IL3_REV_NO_PARM = "IP_IL3_REV_NO";
        public const string IL3_CD_PARM = "IP_IL3_CD";
        public const string IL3_NAME_PARM = "IP_IL3_NAME";
        public const string IL3_DESC_PARM = "IP_IL3_DESC";
        #endregion
        #region ITEM_L2
        public const string IL2_ID_PARM = "IP_IL2_ID";
        public const string IL2_REV_NO_PARM = "IP_IL2_REV_NO";
        public const string IL2_CD_PARM = "IP_IL2_CD";
        public const string IL2_NAME_PARM = "IP_IL2_NAME";
        public const string IL2_DESC_PARM = "IP_IL2_DESC";
        #endregion
        #region ST_ITEM
        public const string DURG_IMAGE_PARM = "@IP_DURG_IMAGE";
        public const string DURG_IMAGE_COL = "DURG_IMAGE";
        public const string ST_ITEM_TABLE = "ST_ITEM";
        public const string SALE_UOM_PARM = "@IP_SALE_UOM";
        public const string SALE_UOM_COL = "SALE_UOM";
        public const string PURCHASE_UOM_PARM = "@IP_PURCHASE_UOM";
        public const string PURCHASE_UOM_COL = "PURCHASE_UOM";
        public const string INSTRUCTIONS_PARM = "@IP_INSTRUCTIONS";
        public const string INSTRUCTIONS_COL = "INSTRUCTIONS";
        public const string QTY_DAY_APRM = "@IP_QTY_DAY";
        public const string QTY_DAY_COL = "QTY_DAY";
        public const string ITEM_ID_PARM = "IP_ITEM_ID";
        public const string ITEM_REV_NO_PARM = "IP_ITEM_REV_NO";
        public const string ITEM_NAME_PARM = "IP_ITEM_NAME";
        public const string ITEM_CD_PARM = "IP_ITEM_CD";
        public const string STRENGTH_PARM = "IP_STRENGTH";
        public const string UNITS_PARM = "IP_UNITS";
        public const string COLOUR_CD_PARM = "IP_COLOUR_CD";
        public const string ICS_ID_PARM = "IP_ICS_ID";
        public const string ICS_REV_NO_PARM = "IP_ICS_REV_NO";
        public const string PACKING_PARM = "IP_PACKING";
        public const string DRUG_SCHEDULE_PARM = "IP_DRUG_SCHEDULE";
        public const string SPECIFICATIONS_PARM = "IP_SPECIFICATIONS";
        public const string REUSED_CLS_PARM = "IP_REUSED_CLS";
        public const string EQUIP_CLS_PARM = "IP_EQUIP_CLS";
        public const string EXPIRY_CLS_PARM = "IP_EXPIRY_CLS";
        public const string BATCH_CLS_PARM = "IP_BATCH_CLS";
        public const string ASSET_CLS_PARM = "IP_ASSET_CLS";
        public const string ABC_CLS_PARM = "IP_ABC_CLS";
        public const string VED_CLS_PARM = "IP_VED_CLS";
        public const string FSN_CLS_PARM = "IP_FSN_CLS";
        public const string ROL_CLS_PARM = "IP_ROL_CLS";
        public const string TRACK_CLS_PARM = "IP_TRACK_CLS";
        public const string ALERTS_CLS_PARM = "IP_ALERTS_CLS";
        public const string LEAD_TIME_PARM = "IP_LEAD_TIME";
        public const string CATALOGUENO_PARM = "IP_CATALOGUENO";
        public const string CIMSID_PARM = "IP_CIMSID";
        public const string CIMSTYPE_PARM = "IP_CIMSTYPE";
        public const string PRESC_CLS_PARM = "IP_PRESC_CLS";
        public const string MNF_ID_PARM = "@IP_MNF_ID";
        public const string MNF_REV_NO_PARM = "@IP_MNF_REV_NO";
        public const string MNF_NAME_PARM = "@IP_MNF_NAME";
        public const string VEND_ID_PARM = "@IP_VEND_ID";
        public const string VEND_REV_NO_PARM = "@IP_VEND_REV_NO";
        public const string VEND_NAME_PARM = "@IP_VEND_NAME";
        public const string VEND_CD_PARM = "@IP_VEND_CD";

        public const string RTE_ID_PARM = "@IP_RTE_ID";
        public const string RTE_REV_NO_PARM = "@IP_RTE_REV_NO";
        public const string RTE_NAME_PARM = "@IP_RTE_NAME";
        public const string RTE_CD_PARM = "@IP_RTE_CD";
        public const string RTE_DESC_PARM = "@IP_RTE_DESC";

        public const string INS_ID_PARM = "@IP_INS_ID";
        public const string INS_REV_NO_PARM = "@IP_INS_REV_NO";
        public const string INS_NAME_PARM = "@IP_INS_NAME";
        public const string INS_CD_PARM = "@IP_INS_CD";
        public const string INS_DESC_PARM = "@IP_INS_DESC";

        public const string DIR_ID_PARM = "@IP_DIR_ID";
        public const string DIR_REV_NO_PARM = "@IP_DIR_REV_NO";
        public const string DIR_NAME_PARM = "@IP_DIR_NAME";
        public const string DIR_CD_PARM = "@IP_DIR_CD";
        public const string DIR_DESC_PARM = "@IP_DIR_DESC";
        public const string QUICK_CD_PARM = "@IP_QUICK_CD";
        public const string QTY_PER_DAY_PARM = "@IP_QTY_PER_DAY";

        public const string CMPL_ID_PARM = "@IP_CMPL_ID";
        public const string CMPL_REV_NO_PARM = "@IP_CMPL_REV_NO";
        public const string CMPL_NAME_PARM = "@IP_CMPL_NAME";
        public const string CMPL_CD_PARM = "@IP_CMPL_CD";
        public const string CMPL_DESC_PARM = "@IP_CMPL_DESC";

        public const string A_CLS_PCT_PARM = "@IP_A_CLS_PCT";
        public const string B_CLS_PCT_PARM = "@IP_B_CLS_PCT";
        public const string C_CLS_PCT_PARM = "@IP_C_CLS_PCT";
        #endregion
        #region ST_TAX_FLD_ST_TAX_RULE_ST_TAX_RULE_FLD
        public const string FILED_ID_PARM = "@IP_FILED_ID";
        public const string FIELD_REV_NO_PARM = "@IP_FIELD_REV_NO";
        public const string FIELD_CD_PARM = "@IP_FIELD_CD";
        public const string FIELD_NAME_PARM = "@IP_FIELD_NAME";
        public const string FIELD_DESC_PARM = "@IP_FIELD_DESC";

        public const string RULE_NAME_PARM = "@IP_RULE_NAME";
        public const string RULE_DESC_PARM = "@IP_RULE_DESC";
        public const string RULE_FLD_ID_PARM = "@IP_RULE_FLD_ID";
        public const string RULE_FLD_REV_NO_PARM = "@IP_RULE_FLD_REV_NO";
        public const string AUTH_NAME_PARM = "@IP_AUTH_NAME";
        public const string FORMULA_PARM = "@IP_FORMULA";
        public const string PR_RESET_REV_NO_PARM = "@PR_RESET_REV_NO";
        #endregion
        #endregion
        public const string PR_RESET_REV_NO_COL = "PR_RESET_REV_NO";
        public const string AUTH_NAME_COL = "AUTH_NAME";
        public const string STP_TO_NAME_COL = "STP_TO_NAME";
        public const string EMP_NAME_COL = "EMP_NAME";
        public const string REQ_ID_PARM = "@IP_REQ_ID";
        public const string REQ_NO_PARM = "@IP_REQ_NO";
        public const string REQ_CD_PARM = "@IP_REQ_CD";
        public const string REQ_BY_PARM = "@IP_REQ_BY";
        public const string REQ_DT_PARM = "@IP_REQ_DT";
        public const string STP_TO_ID_PARM = "@IP_STP_TO_ID";
        public const string STP_TO_CD_PARM = "@IP_STP_TO_CD";
        public const string IL0 = "@IP_IL0";
        public const string REMARKS_PARM = "@IP_REMARKS";
        public const string APPROVED_BY_PARM = "@IP_APPROVED_BY";
        public const string APPROVED_BY_NAME_COL = "APPROVED_BY_NAME";
        public const string APPROVED_DT_PARM = "@IP_APPROVED_DT";
        public const string REQ_REV_NO_PARM = "@IP_REQ_REV_NO";
        public const string REQ_ITM_ID_PARM = "@IP_REQ_ITM_ID";
        public const string QTY_ORDERED_PARM = "@IP_QTY_ORDERED";
        public const string QTY_ISSUED_PARM = "@IP_QTY_ISSUED";
        public const string QTY_ACCEPTED_PARM = "@IP_QTY_ACCEPTED";
        public const string QTY_REJECTED_PARM = "@IP_QTY_REJECTED";
        public const string RECORD_SNO_PARM = "@IP_RECORD_SNO";
        public const string REQ_ITM_REV_NO_PARM = "@IP_REQ_ITM_REV_NO";
        public const string OP_COUNT_PARAM = "@OP_COUNT";
        public const string XML_PARAM = "@XML";
        public const string VENDC_NO_PARM = "@IP_VENDC_NO";
        public const string VENDC_ID_PARM = "@IP_VENDC_ID";
        public const string TNC_ID_PARM = "@IP_TNC_ID";
        public const string TNC_REV_NO_PARM = "@IP_TNC_REV_NO";
        public const string TNC_CD_PARM = "@IP_TNC_CD";
        public const string TNC_NAME_PARM = "@IP_TNC_NAME";
        public const string TNC_DESC_PARM = "@IP_TNC_DESC";
        public const string FORM_PARM = "@IP_FORM";


        public const string PRFLE_ITEM_ID_PARM = "@IP_PRFLE_ITEM_ID";
        public const string PRFLE_ID_PARM = "@IP_PRFLE_ID";
        public const string IS_MANDATORY_PARM = "@IP_IS_MANDATORY";
        public const string SRGRY_ID_PARM = "@IP_SRGRY_ID";
        public const string PRFLE_CD_PARM = "@IP_PRFLE_CD";
        public const string PRFLE_NAME_PARM = "@IP_PRFLE_NAME";
        public const string PRFLE_DESC_PARM = "@IP_PRFLE_DESC";
        public const string STP_DEPT_ID_PARM = "@IP_STP_DEPT_ID";
        public const string STP_DEPT_CD_PARM = "@IP_STP_DEPT_CD";
        public const string REL_ID_PARM = "@IP_REL_ID";
        public const string REL_CD_PARM = "@IP_REL_CD";
        public const string PUP_ID_PARM = "@IP_PUP_ID";
        public const string PUP_CD_PARM = "@IP_PUP_CD";
        public const string PUP_NAME_PARM = "@IP_PUP_NAME";
        public const string PUP_DESC_PARM = "@IP_PUP_DESC";
        public const string US_CD_PARM = "@IP_US_CD";
        public const string USER_ID_PARM = "@IP_USER_ID";
        public const string ISDEFAULT_PARM = "@IP_ISDEFAULT";
        public const string DEF_STP_CD_PARM = "@IP_DEF_STP_CD";
        public const string DEF_STP_ID_PARM = "@IP_DEF_STP_ID";
        public const string USER_PROFILECD_PARM = "@IP_USER_PROFILECD";
        public const string PUP_REV_NO_PARM = "@IP_PUP_REV_NO";

        public const string SHOW_MONOGRAPH_BTN_PARM = "@IP_SHOW_MONOGRAPH_BTN";
        public const string IS_FINAPP_REQ_PARM = "@IP_IS_FINAPP_REQ";
        public const string IS_DOC_DISC_PARM = "@IP_IS_DOC_DISC";
        public const string DOC_DISC_PER_PARM = "@IP_DOC_DISC_PER";
        public const string SHOW_TAXPER_INOP_PHARMA_PARM = "@IP_SHOW_TAXPER_INOP_PHARMA";
        public const string IS_ITEM_CONC_INOP_PHARMA_PARM = "@IP_IS_ITEM_CONC_INOP_PHARMA";
        public const string IS_CONC_REQ_INIP_PHARMA_PARM = "@ip_IS_CONC_REQ_INIP_PHARMA";
        public const string DEFAULT_CONC_INOP_PHARMA_PARM = "@IP_DEFAULT_CONC_INOP_PHARMA";
        public const string OP_TAX_PER_PARM = "@IP_OP_TAX_PER";
        public const string SHOW_ADMNNO_INOP_PHARMA_PARM = "@IP_SHOW_ADMNNO_INOP_PHARMA";
        public const string SHOW_NUR_INDENT_FIRST_PARM = "@IP_SHOW_NUR_INDENT_FIRST";
        public const string CONTRACT_DAYS_PARM = "@IP_CONTRACT_DAYS";
        public const string IS_MEDISPAN_CIMS_PARM = "@IP_IS_MEDISPAN_CIMS";
        public const string REQ_ALLERGY_INPRESC_PARM = "@IP_REQ_ALLERGY_INPRESC";
        public const string INCLUDE_PROD_INALRGY_PARM = "@IP_INCLUDE_PROD_INALRGY";
        public const string REQ_INTRCTNS_INPRESC_PARM = "@IP_REQ_INTRCTNS_INPRESC";
        public const string REQ_FILLS_CHKIN_INTCTNSALRGY_PARM = "@IP_REQ_FILLS_CHKIN_INTCTNSALRGY";
        public const string IS_PIMS_HL7_PARM = "@IP_IS_PIMS_HL7";
        public const string ALRGY_MSG_TYPE_PARM = "@IP_ALRGY_MSG_TYPE";
        public const string ALLW_PERAMT_PAT_RECEIPT_PARM = "@IP_ALLW_PERAMT_PAT_RECEIPT";
        public const string PERAMT_COLLECT_FROM_PAT_PARM = "@IP_PERAMT_COLLECT_FROM_PAT";
        public const string ALLW_PAT_STMT_PARM = "@IP_ALLW_PAT_STMT";
        public const string PAT_STMT_DAYS_PARM = "@IP_PAT_STMT_DAYS";
        public const string ALLW_DUE_IN_CLAIM_PARM = "@IP_ALLW_DUE_IN_CLAIM";
        public const string IS_TRANSCD_MANDATORY_PARM = "@IP_IS_TRANSCD_MANDATORY";
        public const string IS_PAS_DIRESCT_PARM = "@IP_IS_PAS_DIRESCT";
        public const string SHOW_ALL_CTRLS_PARM = "@IP_SHOW_ALL_CTRLS";
        public const string FILL_CANCL_DAYS_PARM = "@IP_FILL_CANCL_DAYS";
        public const string PRESC_DAYS_FOR_BLOCK_PARM = "@IP_PRESC_DAYS_FOR_BLOCK";
        public const string PRESC_FROMDAYS_FOR_REFILL_PARM = "@IP_PRESC_FROMDAYS_FOR_REFILL";
        public const string PRESC_TODAYS_FOR_REFILL_PARM = "@IP_PRESC_TODAYS_FOR_REFILL";
        public const string IS_SCAN_MANDATORY_PARM = "@IP_IS_SCAN_MANDATORY";
        public const string IS_SUPLYDAYS_MANDATORY_PARM = "@IP_IS_SUPLYDAYS_MANDATORY";
        public const string SHOW_PENDMSG_INPRESC_PARM = "@IP_SHOW_PENDMSG_INPRESC";
        public const string SHOW_PAT_DUE_ALERT_PARM = "@IP_SHOW_PAT_DUE_ALERT";
        public const string SHOW_DUEALERT_WHEN_PARM = "@IP_SHOW_DUEALERT_WHEN";
        public const string BIN_NO_PARM = "@IP_BIN_NO";
        public const string MIN_QTY_PARM = "@IP_MIN_QTY";
        public const string MAX_QTY_PARM = "@IP_MAX_QTY";
        public const string ROL_QTY_PARM = "@IP_ROL_QTY";
        public const string ITEM_BIN_ID_PARM = "@IP_ITEM_BIN_ID";
        public const string ITEM_BIN_REV_NO_PARM = "@IP_ITEM_BIN_REV_NO";

        public const string ITEM_BIN_ID_COL = "ITEM_BIN_ID";
        public const string ITEM_BIN_REV_NO_COL = "ITEM_BIN_REV_NO";
        public const string MIN_QTY_COL = "MIN_QTY";
        public const string MAX_QTY_COL = "MAX_QTY";
        public const string ROL_QTY_COL = "ROL_QTY";
        public const string FORM_COL = "FORM";
        public const string BIN_NO_COL = "BIN_NO";
        public const string ISPO_PARM = "@IP_ISPO";
        public const string PEND_QTY_UNIT_COL = "PEND_QTY_UNIT";
        public const string PEND_QTY_BONUS_COL = "PEND_QTY_BONUS";
        // public const string ISSUE_UNITS_COL = "ISSUE_UNITS";
        public const string ISSUE_UNITS_VALUE_COL = "ISSUE_UNITS_VALUE";
        public const string SALE_RATE_RULE_COL = "SALE_RATE_RULE";
        //public const string PO_RULE_CD_COL = "PO_RULE_CD";
        //public const string PO_RULE_COL="PO_RULE";

        #region StockPointSetting Columns

        public const string VEND_GRN_AMT_COL = "VEND_GRN_AMT";
        public const string SEC_DT_COL = "SEC_DT";
        public const string INVDC_NO_COL = "INVDC_NO";
        public const string INVDC_DT_COL = "INVDC_DT";
        public const string MGATEPASSNO_COL = "MGATEPASSNO";
        public const string CHECKED_BY_COL = "CHECKED_BY";
        public const string IS_RECEIVED_COL = "IS_RECEIVED";

        public const string PUP_REV_NO_COL = "PUP_REV_NO";
        public const string DEF_STP_NAME_COL = "DEF_STP_NAME";
        public const string USER_NAME_COL = "USER_NAME";
        public const string USER_CD_COL = "USER_CD";
        public const string US_CD_COL = "US_CD";
        public const string USER_ID_COL = "USER_ID";
        public const string ISDEFAULT_COL = "ISDEFAULT";
        public const string DEF_STP_CD_COL = "DEF_STP_CD";
        public const string DEF_STP_ID_COL = "DEF_STP_ID";
        public const string USER_PROFILECD_COL = "USER_PROFILECD";
        public const string DEPT_NAME_COL = "DEPT_NAME";
        public const string PUP_NAME_COL = "PUP_NAME";
        public const string REL_ID_COL = "REL_ID";
        public const string REL_CD_COL = "REL_CD";
        public const string PUP_ID_COL = "PUP_ID";
        public const string PUP_CD_COL = "PUP_CD";
        public const string PUP_DESC_COL = "PUP_DESC";
        public const string STP_DEPT_ID_COL = "STP_DEPT_ID";
        public const string STP_DEPT_CD_COL = "STP_DEPT_CD";
        public const string SRGRY_NAME_COL = "SRGRY_NAME";
        public const string PRFLE_ITEM_ID_COL = "PRFLE_ITEM_ID";
        public const string PRFLE_ID_COL = "PRFLE_ID";
        public const string IS_MANDATORY_COL = "IS_MANDATORY";
        public const string SRGRY_ID_COL = "SRGRY_ID";
        public const string PRFLE_CD_COL = "PRFLE_CD";
        public const string PRFLE_NAME_COL = "PRFLE_NAME";
        public const string PRFLE_DESC_COL = "PRFLE_DESC";

        public const string TNC_REV_NO_COL = "TNC_REV_NO";
        public const string TNC_ID_COL = "TNC_ID";
        public const string TNC_CD_COL = "TNC_CD";
        public const string TNC_NAME_COL = "TNC_NAME";
        public const string TNC_DESC_COL = "TNC_DESC";
        public const string REQ_ITM_ID_COL = "REQ_ITM_ID";
        public const string QTY_ORDERED_COL = "QTY_ORDERED";
        public const string QTY_ISSUED_COL = "QTY_ISSUED";

        public const string REQ_ITM_REV_NO_COL = "REQ_ITM_REV_NO";
        public const string REQ_ID_COL = "REQ_ID";
        public const string REQ_REV_NO_COL = "REQ_REV_NO";
        public const string REQ_NO_COL = "REQ_NO";
        public const string REQ_CD_COL = "REQ_CD";
        public const string REQ_BY_COL = "REQ_BY";
        public const string REQ_DT_COL = "REQ_DT";
        public const string STP_TO_ID_COL = "STP_TO_ID";
        public const string STP_TO_CD_COL = "STP_TO_CD";

        public const string APPROVED_BY_COL = "APPROVED_BY";
        public const string APPROVED_DT_COL = "APPROVED_DT";

        public const string VENDC_ITM_REV_NO_COL = "VENDC_ITM_REV_NO";
        public const string VENDC_ITM_NAME_COL = "VENDC_ITM_NAME";
        public const string VENDC_ID_COL = "VENDC_ID";
        public const string VENDC_NO_COL = "VENDC_NO";
        public const string VENDC_DT_COL = "VENDC_DT";
        public const string VENDC_ITM_ID_COL = "VENDC_ITM_ID";
        public const string VENDC_REV_NO_COL = "VENDC_REV_NO";

        public const string BONUS_QTY_COL = "BONUS_QTY";
        public const string UNIT_RATE_COL = "UNIT_RATE";
        public const string MRP_COL = "MRP";
        public const string TAX_PCT_COL = "TAX_PCT";
        public const string MONTH_MIN_QTY = "MONTH_MIN_QTY";

        public const string VEND_TYPE_COL = "REG_TYPE";
        public const string STP_ROL_REV_NO_COL = "STP_ROL_REV_NO";
        public const string STP_ROL_ID_COL = "STP_ROL_ID";
        public const string FROM_CURR_CD_COL = "FROM_CURRENCY_CD";
        public const string TO_CURR_CD_COL = "TO_CURRENCY_CD";
        public const string CURR_XCHG_ID_COL = "CURR_XCHG_ID";
        public const string CURR_XCHG_CD_COL = "CURR_XCHG_CD";
        public const string FROM_CURR_ID_COL = "FROM_CURR_ID";
        public const string FROM_CURR_SYMBOL_COL = "FROM_CURR_SYMBOL";
        public const string TO_CURR_ID_COL = "TO_CURR_ID";
        public const string TO_CURR_SYMBOL_COL = "TO_CURR_SYMBOL";
        public const string EX_RATE_COL = "EX_RATE";
        public const string EFT_FROM_DT_COL = "EFT_FROM_DT";
        public const string EFT_TO_DT_COL = "EFT_TO_DT";
        public const string CMPL_ID_COL = "CMPL_ID";
        public const string CMPL_REV_NO_COL = "CMPL_REV_NO";
        public const string CMPL_NAME_COL = "CMPL_NAME";
        public const string CMPL_CD_COL = "CMPL_CD";
        public const string CMPL_DESC_COL = "CMPL_DESC";

        public const string QUICK_CD_COL = "QUICK_CD";
        public const string QTY_PER_DAY_COL = "QTY_PER_DAY";
        public const string DIR_ID_COL = "DIR_ID";
        public const string DIR_REV_NO_COL = "DIR_REV_NO";
        public const string DIR_NAME_COL = "DIR_NAME";
        public const string DIR_CD_COL = "DIR_CD";
        public const string DIR_DESC_COL = "DIR_DESC";

        public const string INS_ID_COL = "INS_ID";
        public const string INS_REV_NO_COL = "INS_REV_NO";
        public const string INS_NAME_COL = "INS_NAME";
        public const string INS_CD_COL = "INS_CD";
        public const string INS_DESC_COL = "INS_DESC";

        public const string RTE_ID_COL = "RTE_ID";
        public const string RTE_REV_NO_COL = "RTE_REV_NO";
        public const string RTE_NAME_COL = "RTE_NAME";
        public const string RTE_CD_COL = "RTE_CD";
        public const string RTE_DESC_COL = "RTE_DESC";

        public const string VEND_ID_COL = "VEND_ID";
        public const string VEND_REV_NO_COL = "VEND_REV_NO";
        public const string VEND_NAME_COL = "VEND_NAME";
        public const string VEND_CD_COL = "VEND_CD";
        public const string VEND_DESC_COL = "VEND_DESC";
        public const string MNF_NAME_COL = "MNF_NAME";
        public const string MNF_REV_NO_COL = "MNF_REV_NO";
        public const string MNF_ID_COL = "MNF_ID";
        public const string MNF_CD_COL = "MNF_CD";
        public const string SRT_NAME_COL = "SRT_NAME";
        public const string REG_NO_COL = "REG_NO";
        public const string GLOBAL_ID_COL = "GLOBAL_ID";

        public const string STP_REV_NO_COL = "STP_REV_NO";
        public const string STP_CD_COL = "STP_CD";
        public const string STP_NAME_COL = "STP_NAME";
        public const string STP_DESC_COL = "STP_DESC";
        public const string STP_ALIAS_COL = "STP_ALIAS";
        public const string REG_NAME_COL = "REG_NAME";
        public const string GRP_NAME_COL = "GRP_NAME";
        public const string APGST_NO_COL = "APGST_NO";
        public const string VAT_NO_COL = "VAT_NO";
        public const string DL_NO_COL = "DL_NO";
        public const string LST_NO_COL = "LST_NO";
        public const string CST_NO_COL = "CST_NO";
        public const string ADDRESS1_COL = "ADDRESS1";
        public const string ADDRESS2_COL = "ADDRESS2";
        public const string ADDRESS3_COL = "ADDRESS3";
        public const string DC_ALLOWDISC_COL = "DC_ALLOWDISC";
        public const string DC_DISCAPP_COL = "DC_DISCAPP";

        public const string STP_TYPE_COL = "STP_TYPE";
        public const string POS_COL = "POS";
        public const string POR_COL = "POR";
        public const string ICM_COL = "ICM";
        public const string EA_GRNMSGDAYS_COL = "EA_GRNMSGDAYS";
        public const string EA_GRNEXPIRY_COL = "EA_GRNEXPIRY";
        public const string EA_STNMSGDAYS_COL = "EA_STNMSGDAYS";
        public const string EA_STNEXPIRY_COL = "EA_STNEXPIRY";
        public const string EA_BILLINGMSGDAYS_COL = "EA_BILLINGMSGDAYS";
        public const string EA_BILLINGEXPIRY_COL = "EA_BILLINGEXPIRY";
        public const string EA_ADJMSGDAYS_COL = "EA_ADJMSGDAYS";
        public const string EA_ADJEXPIRYDAYS_COL = "EA_ADJEXPIRYDAYS";
        public const string RV_ROUNDTYPE_COL = "RV_ROUNDTYPE";
        public const string RV_ROUND_COL = "RV_ROUND";
        public const string PM_PAYMODES_COL = "PM_PAYMODES";
        public const string TP_GRN_COL = "TP_GRN";
        public const string TP_NRD_COL = "TP_NRD";
        public const string TP_RDC_COL = "TP_RDC";
        public const string TP_RDR_COL = "TP_RDR";
        public const string TP_PO_COL = "TP_PO";
        public const string TP_PI_COL = "TP_PI";
        public const string TP_STR_COL = "TP_STR";
        public const string TP_STN_COL = "TP_STN";
        public const string TP_SAN_COL = "TP_SAN";
        public const string TP_SCN_COL = "TP_SCN";
        public const string TP_OPS_COL = "TP_OPS";
        public const string TP_OPR_COL = "TP_OPR";
        public const string TP_IPS_COL = "TP_IPS";
        public const string TP_IPR_COL = "TP_IPR";
        public const string TP_IMO_COL = "TP_IMO";
        public const string DA_GRN_COL = "DA_GRN";
        public const string DA_NRD_COL = "DA_NRD";
        public const string DA_RDC_COL = "DA_RDC";
        public const string DA_RDR_COL = "DA_RDR";
        public const string DA_PO_COL = "DA_PO";
        public const string DA_PI_COL = "DA_PI";
        public const string DA_STR_COL = "DA_STR";
        public const string DA_STN_COL = "DA_STN";
        public const string DA_SAN_COL = "DA_SAN";
        public const string DA_SCN_COL = "DA_SCN";
        public const string DA_OPS_COL = "DA_OPS";
        public const string DA_OPR_COL = "DA_OPR";
        public const string DA_IPS_COL = "DA_IPS";
        public const string DA_IPR_COL = "DA_IPR";
        public const string DA_IMO_COL = "DA_IMO";
        public const string DA_NMPAT_COL = "DA_NMPAT";
        public const string DA_VCRCT_COL = "DA_VCRCT";
        public const string DA_QREQ_COL = "DA_QREQ";
        public const string DA_QENTRY_COL = "DA_QENTRY";
        public const string DA_QCOMP_COL = "DA_QCOMP";
        public const string DA_REUSEITM_COL = "DA_REUSEITM";
        public const string GS_POM_COL = "GS_POM";
        public const string GS_SIMT_COL = "GS_SIMT";
        public const string GS_SC_COL = "GS_SC";
        public const string GS_ICL_COL = "GS_ICL";
        public const string GS_QCC_COL = "GS_QCC";
        public const string GS_BCL_COL = "GS_BCL";
        public const string PSS_TG_COL = "PSS_TG";
        public const string PSS_SPC_COL = "PSS_SPC";
        public const string PSS_IL_COL = "PSS_IL";
        public const string PSS_QCC_COL = "PSS_QCC";
        public const string PSS_DC_COL = "PSS_DC";
        public const string PR_APR_COL = "PR_APR";
        public const string PR_LPR_COL = "PR_LPR";
        public const string PR_PRA_COL = "PR_PRA";
        public const string PR_LPRP_COL = "PR_LPRP";
        public const string PSC_GRN_COL = "PSC_GRN";
        public const string PSC_NRD_COL = "PSC_NRD";
        public const string PSC_RDC_COL = "PSC_RDC";
        public const string PSC_RDR_COL = "PSC_RDR";
        public const string PSC_PO_COL = "PSC_PO";
        public const string PSC_PI_COL = "PSC_PI";
        public const string PSC_STR_COL = "PSC_STR";
        public const string PSC_STN_COL = "PSC_STN";
        public const string PSC_SAN_COL = "PSC_SAN";
        public const string PSC_SCN_COL = "PSC_SCN";
        public const string PSC_OPS_COL = "PSC_OPS";
        public const string PSC_OPR_COL = "PSC_OPR";
        public const string PSC_IPS_COL = "PSC_IPS";
        public const string PSC_IPR_COL = "PSC_IPR";
        public const string PSC_IMO_COL = "PSC_IMO";
        public const string VD_PODAYS_COL = "VD_PODAYS";
        public const string VD_PIDAYS_COL = "VD_PIDAYS";
        public const string VD_TRDAYS_COL = "VD_TRDAYS";
        public const string VD_MODAYS_COL = "VD_MODAYS";
        public const string CREATE_BY_COL = "CREATE_BY";
        public const string CREATE_DT_COL = "CREATE_DT";
        public const string MODIFY_BY_COL = "MODIFY_BY";
        public const string MODIFY_DT_COL = "MODIFY_DT";
        public const string VD_LCDAYS_COL = "VD_LCDAYS";
        public const string DC_EDIT_IN_BILL_COL = "DC_EDIT_IN_BILL";
        public const string DEF_BILL_TYPE_COL = "DEF_BILL_TYPE";
        public const string CURR_CD_COL = "CURR_CD";
        public const string CURR_REV_NO_COL = "CURR_REV_NO";
        public const string CURR_XCHG_REV_NO_COL = "CURR_XCHG_REV_NO";
        public const string CURR_ID_COL = "CURR_ID";
        public const string CURR_NAME_COL = "CURR_NAME";
        public const string BARCODE_COL = "BARCODE";
        public const string CIMSREQ_COL = "CIMSREQ";
        public const string RULE_ID_COL = "RULE_ID";
        public const string RULE_REV_NO_COL = "RULE_REV_NO";
        public const string RULE_CD_COL = "RULE_CD";
        public const string BILL_MIN_AMT_COL = "BILL_MIN_AMT";
        public const string ROL_COND_COL = "ROL_COND";
        public const string ROL_MIND_COL = "ROL_MIND";
        public const string ROL_MAXD_COL = "ROL_MAXD";
        public const string ROL_REOD_COL = "ROL_REOD";
        public const string A_CLASS_PCT_COL = "A_CLASS_PCT";
        public const string B_CLASS_PCT_COL = "B_CLASS_PCT";
        public const string C_CLASS_PCT_COL = "C_CLASS_PCT";
        public const string A_CLS_PCT_COL = "A_CLS_PCT";
        public const string B_CLS_PCT_COL = "B_CLS_PCT";
        public const string C_CLS_PCT_COL = "C_CLS_PCT";

        public const string A_COND_COL = "A_COND";
        public const string A_MIND_COL = "A_MIND";
        public const string A_MAXD_COL = "A_MAXD";
        public const string A_REOD_COL = "A_REOD";
        public const string B_COND_COL = "B_COND";
        public const string B_MIND_COL = "B_MIND";
        public const string B_MAXD_COL = "B_MAXD";
        public const string B_REOD_COL = "B_REOD";
        public const string C_COND_COL = "C_COND";
        public const string C_MIND_COL = "C_MIND";
        public const string C_MAXD_COL = "C_MAXD";
        public const string C_REOD_COL = "C_REOD";

        public const string IS_FINAPP_REQ_COL = "IS_FINAPP_REQ";
        public const string SHOW_MONOGRAPH_BTN_COL = "SHOW_MONOGRAPH_BTN";
        public const string IS_DOC_DISC_COL = "IS_DOC_DISC";
        public const string DOC_DISC_PER_COL = "DOC_DISC_PER";
        public const string SHOW_TAXPER_INOP_PHARMA_COL = "SHOW_TAXPER_INOP_PHARMA";
        public const string IS_ITEM_CONC_INOP_PHARMA_COL = "IS_ITEM_CONC_INOP_PHARMA";
        public const string IS_CONC_REQ_INIP_PHARMA_COL = "IS_CONC_REQ_INIP_PHARMA";
        public const string DEFAULT_CONC_INOP_PHARMA_COL = "DEFAULT_CONC_INOP_PHARMA";
        public const string OP_TAX_PER_COL = "OP_TAX_PER";
        public const string SHOW_ADMNNO_INOP_PHARMA_COL = "SHOW_ADMNNO_INOP_PHARMA";
        public const string SHOW_NUR_INDENT_FIRST_COL = "SHOW_NUR_INDENT_FIRST";
        public const string CONTRACT_DAYS_COL = "CONTRACT_DAYS";
        public const string IS_MEDISPAN_CIMS_COL = "IS_MEDISPAN_CIMS";
        public const string REQ_ALLERGY_INPRESC_COL = "REQ_ALLERGY_INPRESC";
        public const string INCLUDE_PROD_INALRGY_COL = "INCLUDE_PROD_INALRGY";
        public const string REQ_INTRCTNS_INPRESC_COL = "REQ_INTRCTNS_INPRESC";
        public const string REQ_FILLS_CHKIN_INTCTNSALRGY_COL = "REQ_FILLS_CHKIN_INTCTNSALRGY";
        public const string IS_PIMS_HL7_COL = "IS_PIMS_HL7";
        public const string ALRGY_MSG_TYPE_COL = "ALRGY_MSG_TYPE";
        public const string ALLW_PERAMT_PAT_RECEIPT_COL = "ALLW_PERAMT_PAT_RECEIPT";
        public const string PERAMT_COLLECT_FROM_PAT_COL = "PERAMT_COLLECT_FROM_PAT";
        public const string ALLW_PAT_STMT_COL = "ALLW_PAT_STMT";
        public const string PAT_STMT_DAYS_COL = "PAT_STMT_DAYS";
        public const string ALLW_DUE_IN_CLAIM_COL = "ALLW_DUE_IN_CLAIM";
        public const string IS_TRANSCD_MANDATORY_COL = "IS_TRANSCD_MANDATORY";
        public const string IS_PAS_DIRESCT_COL = "IS_PAS_DIRESCT";
        public const string SHOW_ALL_CTRLS_COL = "SHOW_ALL_CTRLS";
        public const string FILL_CANCL_DAYS_COL = "FILL_CANCL_DAYS";
        public const string PRESC_DAYS_FOR_BLOCK_COL = "PRESC_DAYS_FOR_BLOCK";
        public const string PRESC_FROMDAYS_FOR_REFILL_COL = "PRESC_FROMDAYS_FOR_REFILL";
        public const string PRESC_TODAYS_FOR_REFILL_COL = "PRESC_TODAYS_FOR_REFILL";
        public const string IS_SCAN_MANDATORY_COL = "IS_SCAN_MANDATORY";
        public const string IS_SUPLYDAYS_MANDATORY_COL = "IS_SUPLYDAYS_MANDATORY";
        public const string SHOW_PENDMSG_INPRESC_COL = "SHOW_PENDMSG_INPRESC";
        public const string SHOW_PAT_DUE_ALERT_COL = "SHOW_PAT_DUE_ALERT";
        public const string SHOW_DUEALERT_WHEN_COL = "SHOW_DUEALERT_WHEN";




        #region ITEM_L1
        public const string IL1_ID_COL = "IL1_ID";
        public const string IL1_REV_NO_COL = "IL1_REV_NO";
        public const string IL1_CD_COL = "IL1_CD";
        public const string IL1_NAME_COL = "IL1_NAME";
        public const string IL1_DESC_COL = "IL1_DESC";
        #endregion
        #region ITEM_L3
        public const string IL3_ID_COL = "IL3_ID";
        public const string IL3_REV_NO_COL = "IL3_REV_NO";
        public const string IL3_CD_COL = "IL3_CD";
        public const string IL3_NAME_COL = "IL3_NAME";
        public const string IL3_DESC_COL = "IL3_DESC";
        #endregion
        #region ITEM_L2
        public const string IL2_ID_COL = "IL2_ID";
        public const string IL2_REV_NO_COL = "IL2_REV_NO";
        public const string IL2_CD_COL = "IL2_CD";
        public const string IL2_NAME_COL = "IL2_NAME";
        public const string IL2_DESC_COL = "IL2_DESC";
        #endregion
        #region ST_ITEM
        public const string ITEM_ID_COL = "ITEM_ID";
        public const string ITEM_REV_NO_COL = "ITEM_REV_NO";
        public const string ITEM_NAME_COL = "ITEM_NAME";
        public const string ITEM_CD_COL = "ITEM_CD";
        public const string STRENGTH_COL = "STRENGTH";
        public const string UNITS_COL = "UNITS";
        public const string COLOUR_CD_COL = "COLOUR_CD";
        public const string ICS_ID_COL = "ICS_ID";
        public const string ICS_REV_NO_COL = "ICS_REV_NO";
        public const string PACKING_COL = "PACKING";
        public const string DRUG_SCHEDULE_COL = "DRUG_SCHEDULE";
        public const string SPECIFICATIONS_COL = "SPECIFICATIONS";
        public const string REUSED_CLS_COL = "REUSED_CLS";
        public const string EQUIP_CLS_COL = "EQUIP_CLS";
        public const string EXPIRY_CLS_COL = "EXPIRY_CLS";
        public const string BATCH_CLS_COL = "BATCH_CLS";
        public const string ASSET_CLS_COL = "ASSET_CLS";
        public const string ABC_CLS_COL = "ABC_CLS";
        public const string VED_CLS_COL = "VED_CLS";
        public const string FSN_CLS_COL = "FSN_CLS";
        public const string ROL_CLS_COL = "ROL_CLS";
        public const string TRACK_CLS_COL = "TRACK_CLS";
        public const string ALERTS_CLS_COL = "ALERTS_CLS";
        public const string LEAD_TIME_COL = "LEAD_TIME";
        public const string CATALOGUENO_COL = "CATALOGUENO";
        public const string CIMSID_COL = "CIMSID";
        public const string CIMSTYPE_COL = "CIMSTYPE";
        public const string PRESC_CLS_COL = "PRESC_CLS";
        #endregion

        #region ST_TAX_FLD, ST_TAX_RULE, ST_TAX_RULE_FLD
        public const string FIELD_ID_COL = "FILED_ID";
        public const string FIELD_REV_NO_COL = "FIELD_REV_NO";
        public const string FIELD_CD_COL = "FIELD_CD";
        public const string FIELD_NAME_COL = "FIELD_NAME";
        public const string FIELD_DESC_COL = "FIELD_DESC";
        public const string RULE_NAME_COL = "RULE_NAME";
        public const string RULE_DESC_COL = "RULE_DESC";
        public const string RULE_FLD_ID_COL = "RULE_FLD_ID";
        public const string RULE_FLD_REV_NO_COL = "RULE_FLD_REV_NO";
        public const string FORMULA_COL = "FORMULA";

        public const string UNIT_SALE_RATE_COL = "UNIT_SALE_RATE";
        public const string DISC1_COL = "DISC1";
        public const string DISC2_COL = "DISC2";
        public const string PACK_FORWARD_COL = "PACK_FORWARD";
        public const string FREIGHT_COL = "FREIGHT";
        public const string EX_DUTY_COL = "EX_DUTY";
        public const string PUR_TAX_COL = "PUR_TAX";
        public const string OT_TAX_COL = "OT_TAX";
        public const string INSURANCE_COL = "INSURANCE";
        public const string PUR_RATE_COL = "PUR_RATE";


        #endregion

        #endregion


        #region
        public const string ST_BILL_RECPT_NO_TABLE = "ST_BILL_RECPT_NO";
        public const string ADMN_NO_PARM = "@IP_ADMN_NO";
        public const string DOCTOR_ID_PARM = "@IP_DOCTOR_ID";
        public const string GRP_ID_PARM = "@IP_GRP_ID";
        public const string IS_EMERGENCY_PARM = "@IP_IS_EMERGENCY";
        public const string LOC_ID_PARM = "@IP_LOC_ID";
        public const string NRQ_CANCEL_DT_PARM = "@IP_NRQ_CANCEL_DT";
        public const string NRQ_CANCEL_NO_PARM = "@IP_NRQ_CANCEL_NO";
        public const string NRQ_DT_PARM = "@IP_NRQ_DT";
        public const string NRQ_ID_PARM = "@IP_NRQ_ID";
        public const string ORG_ID_PARM = "@IP_ORG_ID";
        public const string RECORD_STATUS_PARM = "@IP_RECORD_STATUS";
        public const string REQUESTED_BY_PARM = "@IP_REQUESTED_BY";
        public const string ST_NRQ_CNCL_ID_PARM = "@IP_ST_NRQ_CNCL_ID";
        public const string ST_NRQ_CNCL_REV_NO_PARM = "@IP_ST_NRQ_CNCL_REV_NO";
        public const string STATUS_PARM = "@IP_STATUS";
        public const string SYSTEM_NAME_PARM = "@IP_SYSTEM_NAME";
        public const string UMR_NO_PARM = "@IP_UMR_NO";
        public const string VERSION_CD_PARM = "@IP_VERSION_CD";
        public const string WARD_ID_PARM = "@IP_WARD_ID";
        public const string WARD_NAME_PARM = "@IP_WARD_NAME";
        public const string ADMN_NO_COL = "ADMN_NO";
        public const string DOCTOR_ID_COL = "DOCTOR_ID";
        public const string GRP_ID_COL = "GRP_ID";
        public const string IS_EMERGENCY_COL = "IS_EMERGENCY";
        public const string LOC_ID_COL = "LOC_ID";
        public const string NRQ_CANCEL_DT_COL = "NRQ_CANCEL_DT";
        public const string NRQ_CANCEL_NO_COL = "NRQ_CANCEL_NO";
        public const string NRQ_DT_COL = "NRQ_DT";
        public const string NRQ_ID_COL = "NRQ_ID";
        public const string ORG_ID_COL = "ORG_ID";
        public const string RECORD_STATUS_COL = "RECORD_STATUS";
        public const string REQUESTED_BY_COL = "REQUESTED_BY";
        public const string SESSION_ID_COL = "SESSION_ID";
        public const string ST_NRQ_CNCL_ID_COL = "ST_NRQ_CNCL_ID";
        public const string ST_NRQ_CNCL_REV_NO_COL = "ST_NRQ_CNCL_REV_NO";
        public const string STATUS_COL = "STATUS";
        public const string SYSTEM_NAME_COL = "SYSTEM_NAME";
        public const string UMR_NO_COL = "UMR_NO";
        public const string VERSION_CD_COL = "VERSION_CD";
        public const string WARD_ID_COL = "WARD_ID";
        public const string WARD_NAME_COL = "WARD_NAME";
        public const string DRQ_ID_PARM = "@IP_DRQ_ID";
        public const string RETURN_CANCEL_DT_PARM = "@IP_RETURN_CANCEL_DT";
        public const string RETURN_CANCEL_NO_PARM = "@IP_RETURN_CANCEL_NO";
        public const string RETURN_IND_NO_PARM = "@IP_RETURN_IND_NO";
        public const string ST_DRQ_CNCL_ID_PARM = "@IP_ST_DRQ_CNCL_ID";
        public const string ST_DRQ_CNCL_REV_NO_PARM = "@IP_ST_DRQ_CNCL_REV_NO";
        public const string RETURN_CANCEL_DT_COL = "RETURN_CANCEL_DT";
        public const string RETURN_CANCEL_NO_COL = "RETURN_CANCEL_NO";
        public const string RETURN_IND_NO_COL = "RETURN_IND_NO";
        public const string ST_DRQ_CNCL_ID_COL = "ST_DRQ_CNCL_ID";
        public const string ST_DRQ_CNCL_REV_NO_COL = "ST_DRQ_CNCL_REV_NO";
        public const string BILL_NO_PARM = "@IP_BILL_NO";
        public const string DRG_REC_ID_PARM = "@IP_DRG_REC_ID";
        public const string DRG_REC_REV_NO_PARM = "@IP_DRG_REC_REV_NO";
        public const string DRUG_REC_CD_PARM = "@IP_DRUG_REC_CD";
        public const string INDENT_NO_PARM = "@IP_INDENT_NO";
        public const string DRG_REC_ID_COL = "DRG_REC_ID";
        public const string DRG_REC_REV_NO_COL = "DRG_REC_REV_NO";
        public const string DRUG_REC_CD_COL = "DRUG_REC_CD";
        public const string INDENT_NO_COL = "INDENT_NO";
        public const string REQTYPE_PARM = "@IP_REQTYPE";
        public const string STP_TO_REV_NO_PARM = "@IP_STP_TO_REV_NO";
        public const string SYSTEMNAME_PARM = "@IP_SYSTEMNAME";
        public const string VERSIONCD_PARM = "@IP_VERSIONCD";
        public const string REQ_FLG_COL = "REQ_FLG";
        public const string STP_TO_REV_NO_COL = "STP_TO_REV_NO";
        public const string SYSTEMNAME_COL = "SYSTEMNAME";
        public const string VERSIONCD_COL = "VERSIONCD";
        public const string DEPT_ID_PARM = "@IP_DEPT_ID";
        public const string DEPT_REV_NO_PARM = "@IP_DEPT_REV_NO";
        public const string DEPT_ID_COL = "DEPT_ID";
        public const string DEPT_REV_NO_COL = "DEPT_REV_NO";
        public const string BATCH_NO_COL = "BATCH_NO";
        public const string BILL_NO_COL = "BILL_NO";
        public const string DEPT_CD_COL = "DEPT_CD";
        public const string DRG_REC_ITEM_ID_COL = "DRG_REC_ITEM_ID";
        public const string DRG_REC_ITEM_REV_NO_COL = "DRG_REC_ITEM_REV_NO";
        public const string EXPIRY_DT_COL = "EXPIRY_DT";
        public const string ITEM_DESC_COL = "ITEM_DESC";
        public const string PURC_RATE_COL = "PURC_RATE";
        public const string PURC_VALUE_COL = "PURC_VALUE";
        public const string QUANTITY_COL = "QUANTITY";
        public const string RECEIVED_TIME_COL = "RECEIVED_TIME";
        public const string SALE_RATE_COL = "SALE_RATE";
        public const string SALE_VALUE_COL = "SALE_VALUE";
        public const string SBATCH_NO_COL = "SBATCH_NO";
        public const string BATCH_NO_PARM = "@IP_BATCH_NO";
        public const string DEPT_CD_PARM = "@IP_DEPT_CD";
        public const string DRG_REC_ITEM_ID_PARM = "@IP_DRG_REC_ITEM_ID";
        public const string DRG_REC_ITEM_REV_NO_PARM = "@IP_DRG_REC_ITEM_REV_NO";
        public const string EXPIRY_DT_PARM = "@IP_EXPIRY_DT";
        public const string ITEM_DESC_PARM = "@IP_ITEM_DESC";
        public const string PURC_RATE_PARM = "@IP_PURC_RATE";
        public const string PURC_VALUE_PARM = "@IP_PURC_VALUE";
        public const string QUANTITY_PARM = "@IP_QUANTITY";
        public const string RECEIVED_TIME_PARM = "@IP_RECEIVED_TIME";
        public const string SALE_RATE_PARM = "@IP_SALE_RATE";
        public const string SALE_VALUE_PARM = "@IP_SALE_VALUE";
        public const string SBATCH_NO_PARM = "@IP_SBATCH_NO";

        public const string PIND_ID_PARM = "@IP_PIND_ID";
        public const string PIND_ITM_ID_COL = "PIND_ITM_ID";
        public const string PIND_ITM_REV_NO_COL = "PIND_ITM_REV_NO";
        public const string PIND_ID_COL = "PIND_ID";
        public const string PIND_REV_NO_COL = "PIND_REV_NO";
        public const string PIND_CD_COL = "PIND_CD";
        public const string DEPT_TO_ID_COL = "DEPT_TO_ID";
        public const string DEPT_TO_NAME_COL = "DEPT_TO_NAME";

        public const string ITEM_STP_ID_PARM = "@IP_ITEM_STP_ID";

        public const string ITEM_STP_COL = "ITEM_STP_REV_NO";
        //public const string  ITEM_STP_COL="ITEM_STP_REV_NO";
        //public const string  ITEM_STP_COL="STP_ID";
        //public const string  STP_REV_NO_COL="STP_REV_NO";
        //public const string  ITEM_ID_COL="ITEM_ID";
        //public const string  ITEM_REV_NO_COL="ITEM_REV_NO";
        //public const string  ITEM_CD_COL="ITEM_CD";
        public const string OPENING_QTY_COL = "OPENING_QTY";
        public const string ONHAND_QTY_COL = "ONHAND_QTY";
        public const string YEAR_ID_COL = "YEAR_ID";
        public const string CURR_YEAR_COL = "CURR_YEAR";


        //public const string  BARCODE_COL   ="BARCODE";        
        //public const string  BATCH_NO_COL  ="BATCH_NO";
        //public const string  EXPIRY_DT_COL ="EXPIRY_DT";
        public const string PURCHASE_RATE_COL = "PURCHASE_RATE";
        //public const string  SALE_RATE_COL = "SALE_RATE";
        public const string CONSIGN_FLG_COL = "CONSIGN_FLG";
        public const string PURC_TAX_PER_COL = "PURC_TAX_PER";



        #region PO constatns
        public const string PO_ID_COL = "PO_ID";
        public const string PO_REV_NO_COL = "PO_REV_NO";
        public const string PO_NO_COL = "PO_NO";
        public const string PO_DT_COL = "PO_DT";
        public const string PO_AMT_COL = "PO_AMT";
        public const string PO_STATUS_COL = "PO_STATUS";
        public const string PO_ITEM_ID_COL = "PO_ITEM_ID";
        public const string PO_ITEM_REV_NO_COL = "PO_ITEM_REV_NO";
        public const string QTY_UNIT_COL = "QTY_UNIT";
        public const string QTY_PACK_COL = "QTY_PACK";
        public const string PURC_AMT_COL = "PURC_AMT";
        public const string SALE_AMT_COL = "SALE_AMT";
        public const string VEND_PURC_RATE_COL = "VEND_PURC_RATE";
        public const string VEND_PURC_AMT_COL = "VEND_PURC_AMT";
        public const string VEND_SALE_RATE_COL = "VEND_SALE_RATE";
        public const string VEND_SALE_AMT_COL = "VEND_SALE_AMT";
        //po reports
        public const string VENDOR_CURRENCY_COL = "VENDOR_CURRENCY";
        public const string ORDERED_QTY_COL = "ORDERED_QTY";
        public const string BONUS_COL = "BONUS";
        public const string RECEIVED_QTY_COL = "RECEIVED_QTY";
        public const string RECEIVED_BONUS_COL = "RECEIVED_BONUS";
        public const string PENDING_COL = "PENDING";
        public const string SUPPLIER_NAME_COL = "SUPPLIER_NAME";
        public const string IP_FROM_DT = "@IP_FROM_DT";
        public const string IP_TO_DT = "@IP_TO_DT";





        public const string PO_ID_PARM = "@IP_PO_ID";
        //public const string _PARM = "@IP_";
        public const string QTY_BONUS_COL = "QTY_BONUS";
        public const string UNIT_EPR_COL = "UNIT_EPR";
        public const string UNIT_ESR_COL = "UNIT_ESR";

        #endregion

        #endregion
    #endregion

        #region stockTransfernote and recipt
        public const string TNC_TYPE_ID_PARM = "@IP_TNC_TYPE_ID";
        public const string TNC_TYPE_ID_COL = "TNC_TYPE_ID";
        public const string TERMS_CONDITIONS_ID_COL = "TERMS_CONDITIONS_ID";
        public const string TERMS_CONDITIONS_NAME_COL = "TERMS_CONDITIONS_NAME";
        public const string APPROVED_COL = "APPROVED";
        public const string REQ_IDS_PARM = "@IP_REQ_ID";
        public const string DISPENSERCD_PARM = "@IP_DISPENSERCD";
        public const string DOC_TYPE_PARM = "@IP_DOC_TYPE";
        public const string STN_DT_PARM = "@IP_STN_DT";
        public const string STN_ID_PARM = "@IP_STN_ID";
        public const string STN_NO_PARM = "@IP_STN_NO";
        public const string STN_PAMT_PARM = "@IP_STN_PAMT";
        public const string STN_REV_NO_PARM = "@IP_STN_REV_NO";
        public const string STN_SAMT_PARM = "@IP_STN_SAMT";
        public const string DISPENSERCD_COL = "DISPENSERCD";
        public const string DOC_TYPE_COL = "DOC_TYPE";
        public const string STN_DT_COL = "STN_DT";
        public const string STN_ID_COL = "STN_ID";
        public const string STN_NO_COL = "STN_NO";
        public const string STN_PAMT_COL = "STN_PAMT";
        public const string STN_REV_NO_COL = "STN_REV_NO";
        public const string STN_SAMT_COL = "STN_SAMT";
        public const string ACLR_ACK_ID_PARM = "@IP_ACLR_ACK_ID";
        public const string ACLR_ACK_NO_PARM = "@IP_ACLR_ACK_NO";
        public const string ACLR_ID_PARM = "@IP_ACLR_ID";
        public const string ACLR_NO_PARM = "@IP_ACLR_NO";
        public const string CONSIGN_FLG_PARM = "@IP_CONSIGN_FLG";
        public const string CURR_L_ID_PARM = "@IP_CURR_L_ID";
        public const string CURR_L_REV_NO_PARM = "@IP_CURR_L_REV_NO";
        public const string CURR_L_SYMBOL_PARM = "@IP_CURR_L_SYMBOL";
        public const string CURR_SYMBOL_PARM = "@IP_CURR_SYMBOL";
        public const string DESPATCH_FLG_PARM = "@IP_DESPATCH_FLG";
        public const string DISC_AMT_PARM = "@IP_DISC_AMT";
        public const string DISC_PER_PARM = "@IP_DISC_PER";
        public const string DISC_RULE_PARM = "@IP_DISC_RULE";
        public const string DISC_VAL_PARM = "@IP_DISC_VAL";
        public const string DISC2_AMT_PARM = "@IP_DISC2_AMT";
        public const string DISC2_PER_PARM = "@IP_DISC2_PER";
        public const string DISC2_RULE_PARM = "@IP_DISC2_RULE";
        public const string DISC2_VAL_PARM = "@IP_DISC2_VAL";
        public const string ED_AMT_PARM = "@IP_ED_AMT";
        public const string ED_PER_PARM = "@IP_ED_PER";
        public const string ED_RULE_PARM = "@IP_ED_RULE";
        public const string ED_VAL_PARM = "@IP_ED_VAL";
        public const string EPR_RULE_PARM = "@IP_EPR_RULE";
        public const string ESR_RULE_PARM = "@IP_ESR_RULE";
        public const string EXCHANGE_RATE_PARM = "@IP_EXCHANGE_RATE";
        public const string EXP_DT_PARM = "@IP_EXP_DT";
        public const string FREIGHT_AMT_PARM = "@IP_FREIGHT_AMT";
        public const string FREIGHT_PER_PARM = "@IP_FREIGHT_PER";
        public const string FREIGHT_RULE_PARM = "@IP_FREIGHT_RULE";
        public const string FREIGHT_VAL_PARM = "@IP_FREIGHT_VAL";
        public const string GRN_RULE_PARM = "@IP_GRN_RULE";
        public const string GRN_RULE_CD_PARM = "@IP_GRN_RULE_CD";
        public const string GRN_RULE_ID_PARM = "@IP_GRN_RULE_ID";
        public const string INS_AMT_PARM = "@IP_INS_AMT";
        public const string INS_PER_PARM = "@IP_INS_PER";
        public const string INS_RULE_PARM = "@IP_INS_RULE";
        public const string INS_VAL_PARM = "@IP_INS_VAL";
        public const string NET_AMT_PARM = "@IP_NET_AMT";
        public const string OTAX_AMT_PARM = "@IP_OTAX_AMT";
        public const string OTAX_PER_PARM = "@IP_OTAX_PER";
        public const string OTAX_RULE_PARM = "@IP_OTAX_RULE";
        public const string OTAX_VAL_PARM = "@IP_OTAX_VAL";
        public const string OTAX2_AMT_PARM = "@IP_OTAX2_AMT";
        public const string OTAX2_PER_PARM = "@IP_OTAX2_PER";
        public const string OTAX2_RULE_PARM = "@IP_OTAX2_RULE";
        public const string OTAX2_VAL_PARM = "@IP_OTAX2_VAL";
        public const string PCLR_ACK_ID_PARM = "@IP_PCLR_ACK_ID";
        public const string PCLR_ACK_NO_PARM = "@IP_PCLR_ACK_NO";
        public const string PCLR_ID_PARM = "@IP_PCLR_ID";
        public const string PCLR_NO_PARM = "@IP_PCLR_NO";
        public const string PF_AMT_PARM = "@IP_PF_AMT";
        public const string PF_PER_PARM = "@IP_PF_PER";
        public const string PF_RULE_PARM = "@IP_PF_RULE";
        public const string PF_VAL_PARM = "@IP_PF_VAL";
        public const string PURC_AMT_PARM = "@IP_PURC_AMT";
        public const string QTY_PARM = "@IP_QTY";
        public const string QTY_BLOCKED_PARM = "@IP_QTY_BLOCKED";
        public const string QTY_BONUS_PARM = "@IP_QTY_BONUS";
        public const string QTY_BONUS_REC_PARM = "@IP_QTY_BONUS_REC";
        public const string QTY_ONHAND_PARM = "@IP_QTY_ONHAND";
        public const string QTY_ORDEREDBONUS_PARM = "@IP_QTY_ORDEREDBONUS";
        public const string QTY_PACK_PARM = "@IP_QTY_PACK";
        public const string QTY_UNIT_PARM = "@IP_QTY_UNIT";
        public const string QTY_UNIT_REC_PARM = "@IP_QTY_UNIT_REC";
        public const string REQ_ITEM_CD_PARM = "@IP_REQ_ITEM_CD";
        public const string REQ_ITEM_ID_PARM = "@IP_REQ_ITEM_ID";
        public const string REQ_ITEM_REV_NO_PARM = "@IP_REQ_ITEM_REV_NO";
        public const string SALE_AMT_PARM = "@IP_SALE_AMT";
        public const string STAX_AMT_PARM = "@IP_STAX_AMT";
        public const string STAX_PER_PARM = "@IP_STAX_PER";
        public const string STAX_RULE_PARM = "@IP_STAX_RULE";
        public const string TRN_DT_PARM = "@IP_TRN_DT";
        public const string TRN_ID_PARM = "@IP_TRN_ID";
        public const string TRN_NO_PARM = "@IP_TRN_NO";
        public const string TRN_REV_NO_PARM = "@IP_TRN_REV_NO";
        public const string UNIT_EPR_PARM = "@IP_UNIT_EPR";
        public const string UNIT_ESR_PARM = "@IP_UNIT_ESR";
        public const string UNIT_MRP_PARM = "@IP_UNIT_MRP";
        public const string UNIT_PR_PARM = "@IP_UNIT_PR";
        public const string VEND_PURC_AMT_PARM = "@IP_VEND_PURC_AMT";
        public const string VEND_PURC_RATE_PARM = "@IP_VEND_PURC_RATE";
        public const string VEND_SALE_AMT_PARM = "@IP_VEND_SALE_AMT";
        public const string VEND_SALE_RATE_PARM = "@IP_VEND_SALE_RATE";
        public const string VENDOR_CD_PARM = "@IP_VENDOR_CD";
        public const string VENDOR_ID_PARM = "@IP_VENDOR_ID";
        public const string VENDOR_REV_NO_PARM = "@IP_VENDOR_REV_NO";

        public const string ACLR_ACK_ID_COL = "ACLR_ACK_ID";
        public const string ACLR_ACK_NO_COL = "ACLR_ACK_NO";
        public const string ACLR_ID_COL = "ACLR_ID";
        public const string ACLR_NO_COL = "ACLR_NO";
        public const string CURR_L_ID_COL = "CURR_L_ID";
        public const string CURR_L_REV_NO_COL = "CURR_L_REV_NO";
        public const string CURR_L_SYMBOL_COL = "CURR_L_SYMBOL";
        public const string CURR_SYMBOL_COL = "CURR_SYMBOL";
        public const string DESPATCH_FLG_COL = "DESPATCH_FLG";
        public const string DISC_AMT_COL = "DISC_AMT";
        public const string DISC_PER_COL = "DISC_PER";
        public const string DISC_RULE_COL = "DISC_RULE";
        public const string DISC_VAL_COL = "DISC_VAL";
        public const string DISC2_AMT_COL = "DISC2_AMT";
        public const string DISC2_PER_COL = "DISC2_PER";
        public const string DISC2_RULE_COL = "DISC2_RULE";
        public const string DISC2_VAL_COL = "DISC2_VAL";
        public const string ED_AMT_COL = "ED_AMT";
        public const string ED_PER_COL = "ED_PER";
        public const string ED_RULE_COL = "ED_RULE";
        public const string ED_VAL_COL = "ED_VAL";
        public const string EPR_RULE_COL = "EPR_RULE";
        public const string ESR_RULE_COL = "ESR_RULE";
        public const string EXCHANGE_RATE_COL = "EXCHANGE_RATE";
        public const string EXP_DT_COL = "EXP_DT";
        public const string FREIGHT_AMT_COL = "FREIGHT_AMT";
        public const string FREIGHT_PER_COL = "FREIGHT_PER";
        public const string FREIGHT_RULE_COL = "FREIGHT_RULE";
        public const string FREIGHT_VAL_COL = "FREIGHT_VAL";
        public const string GRN_RULE_COL = "GRN_RULE";
        public const string GRN_RULE_CD_COL = "GRN_RULE_CD";
        public const string GRN_RULE_ID_COL = "GRN_RULE_ID";
        public const string INS_AMT_COL = "INS_AMT";
        public const string INS_PER_COL = "INS_PER";
        public const string INS_RULE_COL = "INS_RULE";
        public const string INS_VAL_COL = "INS_VAL";
        public const string NET_AMT_COL = "NET_AMT";
        public const string OTAX_AMT_COL = "OTAX_AMT";
        public const string OTAX_PER_COL = "OTAX_PER";
        public const string OTAX_RULE_COL = "OTAX_RULE";
        public const string OTAX_VAL_COL = "OTAX_VAL";
        public const string OTAX2_AMT_COL = "OTAX2_AMT";
        public const string OTAX2_PER_COL = "OTAX2_PER";
        public const string OTAX2_RULE_COL = "OTAX2_RULE";
        public const string OTAX2_VAL_COL = "OTAX2_VAL";
        public const string PCLR_ACK_ID_COL = "PCLR_ACK_ID";
        public const string PCLR_ACK_NO_COL = "PCLR_ACK_NO";
        public const string PCLR_ID_COL = "PCLR_ID";
        public const string PCLR_NO_COL = "PCLR_NO";
        public const string PF_AMT_COL = "PF_AMT";
        public const string PF_PER_COL = "PF_PER";
        public const string PF_RULE_COL = "PF_RULE";
        public const string PF_VAL_COL = "PF_VAL";
        public const string QTY_BLOCKED_COL = "QTY_BLOCKED";
        public const string QTY_BONUS_REC_COL = "QTY_BONUS_REC";
        public const string QTY_ONHAND_COL = "QTY_ONHAND";
        public const string QTY_ORDEREDBONUS_COL = "QTY_ORDEREDBONUS";
        public const string REQ_ITEM_CD_COL = "REQ_ITEM_CD";
        public const string REQ_ITEM_ID_COL = "REQ_ITEM_ID";
        public const string REQ_ITEM_REV_NO_COL = "REQ_ITEM_REV_NO";
        public const string REQ_TYPE_COL = "REQ_TYPE";
        public const string STAX_AMT_COL = "STAX_AMT";
        public const string STAX_PER_COL = "STAX_PER";
        public const string STAX_RULE_COL = "STAX_RULE";
        public const string TRN_DT_COL = "TRN_DT";
        public const string TRN_ID_COL = "TRN_ID";
        public const string TRN_NO_COL = "TRN_NO";
        public const string TRN_REV_NO_COL = "TRN_REV_NO";
        public const string UNIT_MRP_COL = "UNIT_MRP";
        public const string UNIT_PR_COL = "UNIT_PR";
        public const string VENDOR_CD_COL = "VENDOR_CD";
        public const string VENDOR_ID_COL = "VENDOR_ID";
        public const string VENDOR_REV_NO_COL = "VENDOR_REV_NO";
        public const string STR_DT_PARM = "@IP_STR_DT";
        public const string STR_ID_PARM = "@IP_STR_ID";
        public const string STR_NO_PARM = "@IP_STR_NO";
        public const string STR_PAMT_PARM = "@IP_STR_PAMT";
        public const string STR_REV_NO_PARM = "@IP_STR_REV_NO";
        public const string STR_SAMT_PARM = "@IP_STR_SAMT";
        public const string STR_DT_COL = "STR_DT";
        public const string STR_ID_COL = "STR_ID";
        public const string STR_NO_COL = "STR_NO";
        public const string STR_PAMT_COL = "STR_PAMT";
        public const string STR_REV_NO_COL = "STR_REV_NO";
        public const string STR_SAMT_COL = "STR_SAMT";

        public const string BROUGHT_BY_COL = "BROUGHT_BY";
        public const string GRN_ID_COL = "GRN_ID";
        public const string GRN_NO_COL = "GRN_NO";
        public const string GRN_REV_NO_COL = "GRN_REV_NO";
        public const string IL0_COL = "IL0";
        public const string INVOICE_AMT_COL = "INVOICE_AMT";
        public const string INVOICE_NO_COL = "INVOICE_NO";
        public const string IS_GRNDONE_COL = "IS_GRNDONE";
        public const string IS_SUBTOACC_COL = "IS_SUBTOACC";
        public const string IS_SUBTOPUR_COL = "IS_SUBTOPUR";
        public const string MIC_CD_COL = "MIC_CD";
        public const string MIC_DT_COL = "MIC_DT";
        public const string MIC_ID_COL = "MIC_ID";
        public const string MIC_REV_NO_COL = "MIC_REV_NO";
        public const string RECEIVED_BY_COL = "RECEIVED_BY";
        public const string REMARKS_COL = "REMARKS";
        public const string RETURNED_COL = "RETURNED";
        public const string SEC_ID_COL = "SEC_ID";
        public const string SEC_NO_COL = "SEC_NO";
        public const string SEC_REV_NO_COL = "SEC_REV_NO";


        public const string MIC_ITM_ID_COL = "MIC_ITM_ID";
        public const string MIC_ITM_REV_NO_COL = "MIC_ITM_REV_NO";
        public const string QTY_COL = "QTY";
        public const string QTY_ACCEPTED_COL = "QTY_ACCEPTED";
        public const string QTY_BONUS_ACCEPTED_COL = "QTY_BONUS_ACCEPTED";
        public const string QTY_RECEIVED_COL = "QTY_RECEIVED";
        public const string QTY_REJECTED_COL = "QTY_REJECTED";
        public const string RATE_COL = "RATE";
        public const string RECORD_SNO_COL = "RECORD_SNO";
        public const string STP_ID_COL = "STP_ID";

        public const string BROUGHT_BY_PARM = "@IP_BROUGHT_BY";
        public const string GRN_REV_NO_PARM = "@IP_GRN_REV_NO";
        public const string INVOICE_AMT_PARM = "@IP_INVOICE_AMT";
        public const string INVOICE_NO_PARM = "@IP_INVOICE_NO";
        public const string IS_GRNDONE_PARM = "@IP_IS_GRNDONE";
        public const string IS_SUBTOACC_PARM = "@IP_IS_SUBTOACC";
        public const string IS_SUBTOPUR_PARM = "@IP_IS_SUBTOPUR";
        public const string MIC_CD_PARM = "@IP_MIC_CD";
        public const string MIC_DT_PARM = "@IP_MIC_DT";
        public const string MIC_ID_PARM = "@IP_MIC_ID";
        public const string MIC_REV_NO_PARM = "@IP_MIC_REV_NO";
        public const string RECEIVED_BY_PARM = "@IP_RECEIVED_BY";
        public const string RETURNED_PARM = "@IP_RETURNED";
        public const string VOUCHER_DT_PARM = "@IP_VOUCHER_DT";
        public const string VOUCHER_NO_PARM = "@IP_VOUCHER_NO";

        public const string MIC_ITM_ID_PARM = "@IP_MIC_ITM_ID";
        public const string MIC_ITM_REV_NO_PARM = "@IP_MIC_ITM_REV_NO";
        public const string PO_NO_PARM = "@IP_PO_NO";

        public const string QTY_BONUS_ACCEPTED_PARM = "@IP_QTY_BONUS_ACCEPTED";

        public const string QTY_RECEIVED_PARM = "@IP_QTY_RECEIVED";
        public const string RATE_PARM = "@IP_RATE";

        public const string LOC_CURR_PARM = "@IP_LOC_CURR";
        public const string LOC_AMT_PARM = "@IP_LOC_AMT";
        public const string MIC_NO_PARM = "@IP_MIC_NO";

        public const string LOC_CURR_COL = "LOC_CURR";
        public const string LOC_AMT_COL = "LOC_AMT";
        public const string MIC_NO_COL = "MIC_NO";

        #endregion
        /// <summary>
        /// Drug Indent Properties Added By Ramesh
        /// </summary>
        public const string IP_NST_ID = "@IP_NST_ID";
     

        #region Item CNCSN Master

        public const string CURR_YEAR_PARM = "@IP_CURR_YEAR";
        public const string ONHAND_QTY_PARM = "@IP_ONHAND_QTY";
        public const string OPENING_QTY_PARM = "@IP_OPENING_QTY";
        public const string SCHM_CD_PARM = "@IP_SCHM_CD";
        public const string SCHM_DESC_PARM = "@IP_SCHM_DESC";
        public const string SCHM_ID_PARM = "@IP_SCHM_ID";
        public const string SCHM_NAME_PARM = "@IP_SCHM_NAME";
        public const string SCHM_REV_NO_PARM = "@IP_SCHM_REV_NO";
        public const string YEAR_ID_PARM = "@IP_YEAR_ID";
        public const string CNCSN_LEVEL_PARM = "@IP_CNCSN_LEVEL";
        public const string CNCSN_PCT_PARM = "@IP_CNCSN_PCT";
        public const string IL0_ID_PARM = "@IP_IL0_ID";
        public const string IL0_REV_NO_PARM = "@IP_IL0_REV_NO";
        public const string SCHM_CNCSN_ID_PARM = "@IP_SCHM_CNCSN_ID";
        public const string SCHM_CNCSN_REV_NO_PARM = "@IP_SCHM_CNCSN_REV_NO";

        public const string SCHM_CD_COL = "SCHM_CD";
        public const string SCHM_DESC_COL = "SCHM_DESC";
        public const string SCHM_ID_COL = "SCHM_ID";
        public const string SCHM_NAME_COL = "SCHM_NAME";
        public const string SCHM_REV_NO_COL = "SCHM_REV_NO";
        public const string CNCSN_LEVEL_COL = "CNCSN_LEVEL";
        public const string CNCSN_PCT_COL = "CNCSN_PCT";
        public const string IL0_ID_COL = "IL0_ID";
        public const string IL0_REV_NO_COL = "IL0_REV_NO";
        public const string SCHM_CNCSN_ID_COL = "SCHM_CNCSN_ID";
        public const string SCHM_CNCSN_REV_NO_COL = "SCHM_CNCSN_REV_NO";

        public const string DEPT_ONHAND_COL = "DEPT_ONHAND";
        public const string STOCK_ONHAND_COL = "STOCK_ONHAND";
        public const string VENDOR_PACK_SIZE_COL = "VENDOR_PACK_SIZE";
        public const string FROM_STP_COL = "FROM_STP";
        public const string TO_STP_NAME_COL = "TO_STP_NAME";
        public const string FROM_CURRENCY_NAME_COL = "FROM_CURRENCY_NAME";
        public const string TO_CURRENCY_NAME_COL = "TO_CURRENCY_NAME";
        #endregion
        public const string OP_COUNT = "@OP_COUNT";
        public const string AGE1_COL = "AGE1";
        public const string IS_SUBSTITUTE_REQ_COL = "IS_SUBSTITUTE_REQ";
        public const string MNF_DT_COL = "MNF_DT";
        public const string PREV_RECEIVED_COL = "PREV_RECEIVED";
        public const string DA_MRQ_PARM = "@IP_DA_MRQ";
        public const string DA_MRQ_COL = "DA_MRQ";
        public const string PRFLE_REV_NO_COL = "PRFLE_REV_NO";
        public const string QTY_PENDING_COL = "QTY_PENDING";
        public const string TOTAL_QTY_COL = "TOTAL_QTY";
        public const string PACK_COL = "PACK";
        public const string PRFLE_ITEM_REV_NO_COL = "PRFLE_ITEM_REV_NO";
        public const string ITEM_STP_ID_COL = "ITEM_STP_ID";
        public const string DEL_TERMS_COL = "DEL_TERMS";

        public const string ALLOW_DISC_SALES_PARM = "@IP_ALLOW_DISC_SALES";
        public const string CON_EDIT_BILL_PARM = "@IP_CON_EDIT_BILL";
        public const string ALLOW_DOC_DISCNT_PARM = "@IP_ALLOW_DOC_DISCNT";
        public const string DEFAULT_CON_OPBILL_PARM = "@IP_DEFAULT_CON_OPBILL";
        public const string DA_MRN_PARM = "@IP_DA_MRN";
        public const string ALLOW_DISC_SALES_COL = "ALLOW_DISC_SALES";
        public const string CON_EDIT_BILL_COL = "CON_EDIT_BILL";
        public const string ALLOW_DOC_DISCNT_COL = "ALLOW_DOC_DISCNT";
        public const string DEFAULT_CON_OPBILL_COL = "DEFAULT_CON_OPBILL";
        public const string DA_MRN_COL = "DA_MRN";

        public const string MRQ_DT_COL = "MRQ_DT";
        public const string MRQ_ID_COL = "MRQ_ID";
        public const string ISEMERGENCY_COL = "ISEMERGENCY";
        public const string MRQ_NO_COL = "MRQ_NO";

        public const string NEW_ITEM_COL = "NEW_ITEM";

        public const string OP_ITM_BAR_PARM = "@IP_OP_ITM_BAR";
        public const string OP_ITM_BAR_COL = "OP_ITM_BAR";
        public const string OP_ITM_BAR = "@OP_ITM_BAR";
        public const string TRN_TYPE_PARM = "@IP_TRN_TYPE";
        public const string OP_MSG_PARM = "@OP_MSG";
        public const string CATEGORY_ID_COL = "CATEGORY_ID";
        public const string MEDISPAN_ID_COL = "MEDISPAN_ID";
        public const string DRP_DT_PARM = "@IP_DRP_DT";
        public const string DRP_ID_PARM = "@IP_DRP_ID";
        public const string DRP_NO_PARM = "@IP_DRP_NO";
        public const string DRP_PAMT_PARM = "@IP_DRP_PAMT";
        public const string DRP_REV_NO_PARM = "@IP_DRP_REV_NO";
        public const string DRP_SAMT_PARM = "@IP_DRP_SAMT";

        public const string DRP_DT_COL = "DRP_DT";
        public const string DRP_ID_COL = "DRP_ID";
        public const string DRP_NO_COL = "DRP_NO";
        public const string DRP_PAMT_COL = "DRP_PAMT";
        public const string DRP_REV_NO_COL = "DRP_REV_NO";
        public const string DRP_SAMT_COL = "DRP_SAMT";

        #region GRNEntry
        public const string INVOICE_DT_COL = "INVOICE_DT";
        public const string INVOICE_DT_PARM = "@IP_INVOICE_DT";
        public const string DC_DT_PARM = "@IP_DC_DT";
        public const string DC_NO_PARM = "@IP_DC_NO";
        public const string GATEPASS_PARM = "@IP_GATEPASS";
        public const string GRN_AMT_PARM = "@IP_GRN_AMT";
        public const string GRN_DT_PARM = "@IP_GRN_DT";
        public const string GRN_TYPE_PARM = "@IP_GRN_TYPE";
        public const string NRDC_AMT_PARM = "@IP_NRDC_AMT";
        public const string NRDC_NOS_PARM = "@IP_NRDC_NOS";
        public const string OVERHEAD_AMT_PARM = "@IP_OVERHEAD_AMT";
        public const string PAYMODE_PARM = "@IP_PAYMODE";
        public const string ROUNDOFF_AMT_PARM = "@IP_ROUNDOFF_AMT";
        public const string DC_DT_COL = "DC_DT";
        public const string DC_NO_COL = "DC_NO";
        public const string GATEPASS_COL = "GATEPASS";
        public const string GRN_AMT_COL = "GRN_AMT";
        public const string GRN_DT_COL = "GRN_DT";
        public const string GRN_TYPE_COL = "GRN_TYPE";
        public const string NRDC_AMT_COL = "NRDC_AMT";
        public const string NRDC_NOS_COL = "NRDC_NOS";
        public const string OVERHEAD_AMT_COL = "OVERHEAD_AMT";
        public const string PAYMODE_COL = "PAYMODE";
        public const string ROUNDOFF_AMT_COL = "ROUNDOFF_AMT";
        #endregion

        #region Request for Quatation
        public const string CNT_FROM_DT_PARM = "@IP_CNT_FROM_DT";
        public const string CNT_TO_DT_PARM = "@IP_CNT_TO_DT";
        public const string RFQ_DT_PARM = "@IP_RFQ_DT";
        public const string RFQ_ID_PARM = "@IP_RFQ_ID";
        public const string RFQ_NO_PARM = "@IP_RFQ_NO";
        public const string RFQ_REV_NO_PARM = "@IP_RFQ_REV_NO";
        public const string RFQ_TYPE_PARM = "@IP_RFQ_TYPE";
        public const string SPEC_PARM = "@IP_SPEC";
        public const string VAL_FROM_DT_PARM = "@IP_VAL_FROM_DT";
        public const string VAL_TO_DT_PARM = "@IP_VAL_TO_DT";


        public const string CNT_FROM_DT_COL = "CNT_FROM_DT";
        public const string CNT_TO_DT_COL = "CNT_TO_DT";
        public const string RFQ_DT_COL = "RFQ_DT";
        public const string RFQ_ID_COL = "RFQ_ID";
        public const string RFQ_NO_COL = "RFQ_NO";
        public const string RFQ_REV_NO_COL = "RFQ_REV_NO";
        public const string RFQ_TYPE_COL = "RFQ_TYPE";
        public const string SPEC_COL = "SPEC";
        public const string VAL_FROM_DT_COL = "VAL_FROM_DT";
        public const string VAL_TO_DT_COL = "VAL_TO_DT";

        public const string ITEM_UOM_PARM = "@IP_ITEM_UOM";
        public const string RFQ_ITEM_ID_PARM = "@IP_RFQ_ITEM_ID";
        public const string RFQ_ITEM_REV_NO_PARM = "@IP_RFQ_ITEM_REV_NO";
        public const string UNIT_RATE_PARM = "@IP_UNIT_RATE";
        public const string UNIT_RATE_CURR_PARM = "@IP_UNIT_RATE_CURR";

        public const string ITEM_UOM_COL = "ITEM_UOM";
        public const string RFQ_ITEM_ID_COL = "RFQ_ITEM_ID";
        public const string RFQ_ITEM_REV_NO_COL = "RFQ_ITEM_REV_NO";
        public const string UNIT_RATE_CURR_COL = "UNIT_RATE_CURR";

        public const string APPREOVED_BY_PARM = "@IP_APPREOVED_BY";
        public const string PIND_DT_PARM = "@IP_PIND_DT";
        public const string PIND_NO_PARM = "@IP_PIND_NO";
        public const string RFQ_IND_ID_PARM = "@IP_RFQ_IND_ID";
        public const string RFQ_IND_REV_NO_PARM = "@IP_RFQ_IND_REV_NO";

        public const string APPREOVED_BY_COL = "APPREOVED_BY";
        public const string PIND_DT_COL = "PIND_DT";
        public const string PIND_NO_COL = "PIND_NO";
        public const string RFQ_IND_ID_COL = "RFQ_IND_ID";
        public const string RFQ_IND_REV_NO_COL = "RFQ_IND_REV_NO";

        public const string RFQ_VEND_ID_PARM = "@IP_RFQ_VEND_ID";
        public const string RFQ_VEND_REV_NO_PARM = "@IP_RFQ_VEND_REV_NO";

        public const string RFQ_VEND_ID_COL = "RFQ_VEND_ID";
        public const string RFQ_VEND_REV_NO_COL = "RFQ_VEND_REV_NO";


        public const string RFQ_TNC_ID_PARM = "@IP_RFQ_TNC_ID";
        public const string RFQ_TNC_REV_NO_PARM = "@IP_RFQ_TNC_REV_NO";
        public const string SNO_PARM = "@IP_SNO";
        public const string TNC_PARM = "@IP_TNC";



        public const string RFQ_TNC_ID_COL = "RFQ_TNC_ID";
        public const string RFQ_TNC_REV_NO_COL = "RFQ_TNC_REV_NO";
        public const string SNO_COL = "SNO";
        public const string TNC_COL = "TNC";
        #endregion

        # region Quotation Entry
        public const string CREDIT_DAYS_PARM = "@IP_CREDIT_DAYS";
        public const string DELIVERY_TERMS_PARM = "@IP_DELIVERY_TERMS";
        public const string FREIGHT_PARM = "@IP_FREIGHT";
        public const string OTHER_CHARGES_PARM = "@IP_OTHER_CHARGES";
        public const string PAYMENT_TERMS_PARM = "@IP_PAYMENT_TERMS";
        public const string QTN_DT_PARM = "@IP_QTN_DT";
        public const string QTN_ID_PARM = "@IP_QTN_ID";
        public const string QTN_NO_PARM = "@IP_QTN_NO";
        public const string QTN_REV_NO_PARM = "@IP_QTN_REV_NO";
        public const string QTN_STATUS_PARM = "@IP_QTN_STATUS";
        public const string QTN_VALUE_PARM = "@IP_QTN_VALUE";
        public const string REF_NO_PARM = "@IP_REF_NO";
        public const string VALIDITY_DAYS_PARM = "@IP_VALIDITY_DAYS";

        public const string CREDIT_DAYS_COL = "CREDIT_DAYS";
        public const string DELIVERY_TERMS_COL = "DELIVERY_TERMS";
        public const string OTHER_CHARGES_COL = "OTHER_CHARGES";
        public const string PAYMENT_TERMS_COL = "PAYMENT_TERMS";
        public const string QTN_DT_COL = "QTN_DT";
        public const string QTN_ID_COL = "QTN_ID";
        public const string QTN_NO_COL = "QTN_NO";
        public const string QTN_REV_NO_COL = "QTN_REV_NO";
        public const string QTN_STATUS_COL = "QTN_STATUS";
        public const string QTN_VALUE_COL = "QTN_VALUE";
        public const string REF_NO_COL = "REF_NO";
        public const string VALIDITY_DAYS_COL = "VALIDITY_DAYS";

        public const string DISC_PCT_PARM = "@IP_DISC_PCT";
        public const string DISC2_PCT_PARM = "@IP_DISC2_PCT";
        public const string ED_PCT_PARM = "@IP_ED_PCT";
        public const string FREIGHT_PCT_PARM = "@IP_FREIGHT_PCT";
        public const string INS_PCT_PARM = "@IP_INS_PCT";
        public const string OTAX_PCT_PARM = "@IP_OTAX_PCT";
        public const string OTAX2_PCT_PARM = "@IP_OTAX2_PCT";
        public const string PO_RULE_PARM = "@IP_PO_RULE";
        public const string PO_RULE_CD_PARM = "@IP_PO_RULE_CD";
        public const string PO_RULE_ID_PARM = "@IP_PO_RULE_ID";
        public const string QTN_ITEM_ID_PARM = "@IP_QTN_ITEM_ID";
        public const string QTN_ITEM_REV_NO_PARM = "@IP_QTN_ITEM_REV_NO";
        public const string QTY_REC_PARM = "@IP_QTY_REC";
        public const string STAX_PCT_PARM = "@IP_STAX_PCT";
        public const string STAX_VAL_PARM = "@IP_STAX_VAL";

        public const string DISC_PCT_COL = "DISC_PCT";
        public const string DISC2_PCT_COL = "DISC2_PCT";
        public const string ED_PCT_COL = "ED_PCT";
        public const string FREIGHT_PCT_COL = "FREIGHT_PCT";
        public const string INS_PCT_COL = "INS_PCT";
        public const string OTAX_PCT_COL = "OTAX_PCT";
        public const string OTAX2_PCT_COL = "OTAX2_PCT";
        public const string PO_RULE_COL = "PO_RULE";
        public const string PO_RULE_CD_COL = "PO_RULE_CD";
        public const string PO_RULE_ID_COL = "PO_RULE_ID";
        public const string QTN_ITEM_ID_COL = "QTN_ITEM_ID";
        public const string QTN_ITEM_REV_NO_COL = "QTN_ITEM_REV_NO";
        public const string QTY_REC_COL = "QTY_REC";
        public const string STAX_PCT_COL = "STAX_PCT";
        public const string STAX_VAL_COL = "STAX_VAL";
        public const string UOM_COL = "UOM";
        public const string VEND_PACK_COL = "VEND_PACK";
        # endregion

        #region NRDC
        public const string AUTH_ID_PARM = "@IP_AUTH_ID";
        public const string AUTH_REV_NO_PARM = "@IP_AUTH_REV_NO";
        public const string IS_GRN_DONE_PARM = "@IP_IS_GRN_DONE";
        public const string LR_NO_PARM = "@IP_LR_NO";
        public const string NRC_DT_PARM = "@IP_NRC_DT";
        public const string NRC_ID_PARM = "@IP_NRC_ID";
        public const string NRC_NO_PARM = "@IP_NRC_NO";
        public const string NRC_PAMT_PARM = "@IP_NRC_PAMT";
        public const string NRC_REV_NO_PARM = "@IP_NRC_REV_NO";
        public const string NRC_SAMT_PARM = "@IP_NRC_SAMT";
        public const string NRC_VAL_PARM = "@IP_NRC_VAL";
        public const string ITEM_STOCK_PARM = "@ITEM_STOCK";
        public const string BATCHWISE_STOCK_PARM = "@BATCHWISE_STOCK";

        public const string AUTH_ID_COL = "AUTH_ID";
        public const string AUTH_REV_NO_COL = "AUTH_REV_NO";
        public const string IS_GRN_DONE_COL = "IS_GRN_DONE";
        public const string LR_NO_COL = "LR_NO";
        public const string NRC_DT_COL = "NRC_DT";
        public const string NRC_ID_COL = "NRC_ID";
        public const string NRC_NO_COL = "NRC_NO";
        public const string NRC_PAMT_COL = "NRC_PAMT";
        public const string NRC_REV_NO_COL = "NRC_REV_NO";
        public const string NRC_SAMT_COL = "NRC_SAMT";
        public const string NRC_VAL_COL = "NRC_VAL";
        public const string ITEM_STOCK_COL = "ITEM_STOCK";
        public const string BATCHWISE_STOCK_COL = "BATCHWISE_STOCK";

        #endregion

        #region RDC

        public const string RDC_DT_PARM = "@IP_RDC_DT";
        public const string RDC_ID_PARM = "@IP_RDC_ID";
        public const string RDC_NO_PARM = "@IP_RDC_NO";
        public const string RDC_PAMT_PARM = "@IP_RDC_PAMT";
        public const string RDC_REV_NO_PARM = "@IP_RDC_REV_NO";
        public const string RDC_SAMT_PARM = "@IP_RDC_SAMT";
        public const string RDC_VAL_PARM = "@IP_RDC_VAL";

        public const string RDC_DT_COL = "RDC_DT";
        public const string RDC_ID_COL = "RDC_ID";
        public const string RDC_NO_COL = "RDC_NO";
        public const string RDC_PAMT_COL = "RDC_PAMT";
        public const string RDC_REV_NO_COL = "RDC_REV_NO";
        public const string RDC_SAMT_COL = "RDC_SAMT";
        public const string RDC_VAL_COL = "RDC_VAL";
        public const string OP_RDC_ID = "@OP_RDC_ID";


        #endregion


        #region CarrierMaster
        public const string ALTERNATE_IP_PARM = "@IP_ALTERNATE_IP";
        public const string ALTERNATE_IP_PORTNO_PARM = "@IP_ALTERNATE_IP_PORTNO";
        public const string EFFECTIVE_FROM_PARM = "@IP_EFFECTIVE_FROM";
        public const string EFFECTIVE_TO_PARM = "@IP_EFFECTIVE_TO";
        public const string IP_ADDRESS_PARM = "@IP_IP_ADDRESS";
        public const string IP_PORT_NO_PARM = "@IP_IP_PORT_NO";
        public const string PAS_REQUIRED_PARM = "@IP_PAS_REQUIRED";
        public const string ST_CARRIER_CD_PARM = "@IP_ST_CARRIER_CD";
        public const string ST_CARRIER_DESC_PARM = "@IP_ST_CARRIER_DESC";
        public const string ST_CARRIER_ID_PARM = "@IP_ST_CARRIER_ID";
        public const string ST_CARRIER_NAME_PARM = "@IP_ST_CARRIER_NAME";
        public const string ST_CARRIER_REV_NO_PARM = "@IP_ST_CARRIER_REV_NO";
        public const string VPN_USER_ID_PARM = "@IP_VPN_USER_ID";
        public const string PROVIDER_PARM = "@IP_PROVIDER";
        public const string VPN_PASSWORD_PARM = "@IP_VPN_PASSWORD";
        public const string PAYMENT_TYPE_PARM = "@IP_PAYMENT_TYPE";

        public const string ALTERNATE_IP_COL = "ALTERNATE_IP";
        public const string ALTERNATE_IP_PORTNO_COL = "ALTERNATE_IP_PORTNO";
        public const string EFFECTIVE_FROM_COL = "EFFECTIVE_FROM";
        public const string EFFECTIVE_TO_COL = "EFFECTIVE_TO";
        public const string IP_ADDRESS_COL = "IP_ADDRESS";
        public const string IP_PORT_NO_COL = "IP_PORT_NO";
        public const string PAS_REQUIRED_COL = "PAS_REQUIRED";
        public const string ST_CARRIER_CD_COL = "ST_CARRIER_CD";
        public const string ST_CARRIER_DESC_COL = "ST_CARRIER_DESC";
        public const string ST_CARRIER_ID_COL = "ST_CARRIER_ID";
        public const string ST_CARRIER_NAME_COL = "ST_CARRIER_NAME";
        public const string ST_CARRIER_REV_NO_COL = "ST_CARRIER_REV_NO";
        public const string VPN_USER_ID_COL = "VPN_USER_ID";
        public const string PROVIDER_COL = "PROVIDER";
        public const string VPN_PASSWORD_COL = "VPN_PASSWORD";
        public const string PAYMENT_TYPE_COL = "PAYMENT_TYPE";


        #endregion


        #region CarrierMasterPlan

        public const string CARRIER_ID_PARM = "@IP_CARRIER_ID";
        public const string CARRIER_PCT_PARM = "@IP_CARRIER_PCT";
        public const string CARRIER_PLAN_ID_PARM = "@IP_CARRIER_PLAN_ID";
        public const string CARRIER_PLAN_REV_NO_PARM = "@IP_CARRIER_PLAN_REV_NO";
        public const string CARRIER_REV_NO_PARM = "@IP_CARRIER_REV_NO";
        public const string PATIENT_PCT_PARM = "@IP_PATIENT_PCT";
        public const string PAY_MODE_PARM = "@IP_PAY_MODE";
        public const string PLAN_CD_PARM = "@IP_PLAN_CD";
        public const string PLAN_NAME_PARM = "@IP_PLAN_NAME";
        public const string PLAN_NO_PARM = "@IP_PLAN_NO";


        public const string CARRIER_ID_COL = "CARRIER_ID";
        public const string CARRIER_PCT_COL = "CARRIER_PCT";
        public const string CARRIER_PLAN_ID_COL = "CARRIER_PLAN_ID";
        public const string CARRIER_PLAN_REV_NO_COL = "CARRIER_PLAN_REV_NO";
        public const string CARRIER_REV_NO_COL = "CARRIER_REV_NO";
        public const string PATIENT_PCT_COL = "PATIENT_PCT";
        public const string PAY_MODE_COL = "PAY_MODE";
        public const string PLAN_CD_COL = "PLAN_CD";
        public const string PLAN_NAME_COL = "PLAN_NAME";
        public const string PLAN_NO_COL = "PLAN_NO";

        #endregion

        #region vendor

        public const string CURRENCY_ID_PARM = "@IP_CURRENCY_ID";
        public const string PO_TNC_ID_PARM = "@IP_PO_TNC_ID";
        public const string PAYMENT_TNC_ID_PARM = "@IP_PAYMENT_TNC_ID";
        public const string DELIVERY_DAYS_PARM = "@IP_DELIVERY_DAYS";
        public const string PAYMENT_DAYS_PARM = "@IP_PAYMENT_DAYS";

        public const string CURRENCY_ID_COL = "CURRENCY_ID";
        public const string PO_TNC_ID_COL = "PO_TNC_ID";
        public const string PAYMENT_TNC_ID_COL = "PAYMENT_TNC_ID";
        public const string DELIVERY_DAYS_COL = "DELIVERY_DAYS";
        public const string PAYMENT_DAYS_COL = "PAYMENT_DAYS";
        public const string CURRENCY_NAME_COL = "CURRENCY_NAME";
        public const string PO_TNC_NAME_COL = "PO_TNC_NAME";
        public const string PA_TNC_NAME_COL = "PA_TNC_NAME";

        #endregion


        #region ST_SAN

        public const string ST_SAN_TABLE = "ST_SAN";
        public const string SAN_DT_PARM = "@IP_SAN_DT";
        public const string SAN_ID_PARM = "@IP_SAN_ID";
        public const string SAN_NO_PARM = "@IP_SAN_NO";
        public const string SAN_PAMT_PARM = "@IP_SAN_PAMT";
        public const string SAN_REV_NO_PARM = "@IP_SAN_REV_NO";
        public const string SAN_SAMT_PARM = "@IP_SAN_SAMT";
        public const string SAN_TYPE_PARM = "@IP_SAN_TYPE";
        public const string SESSIONID_PARM = "@IP_SESSIONID";
        public const string EXP_DATE_PARM = "@IP_EXP_DATE";
        public const string ONHAND_SOTCK_PARM = "@IP_ONHAND_SOTCK";
        public const string ADJUST_QTY_PARM = "@IP_ADJUST_QTY";
        public const string PURC_TAX_PER_PARM = "@IP_PURC_TAX_PER";
        public const string SAL_RATE_PARM = "@IP_SAL_RATE";
        public const string PURCHASE_RATE_PARM = "@IP_PURCHASE_RATE";
        public const string PURC_VAL_PARM = "@IP_PURCHASE_VAL";
        public const string ILO_PARM = "@IP_ILO";
        public const string FQTY_PARM = "@IP_QTY";
        public const string QTY_LEDGER_PARM = "@IP_QTY_LEDGER";
        public const string FLAG_PARM = "@IP_FLAG";
        public const string LEDG_QTY_PARM = "@IP_LEDG_QTY";






        public const string SAN_DT_COL = "SAN_DT";
        public const string SAN_ID_COL = "SAN_ID";
        public const string SAN_NO_COL = "SAN_NO";
        public const string SAN_PAMT_COL = "SAN_PAMT";
        public const string SAN_REV_NO_COL = "SAN_REV_NO";
        public const string SAN_SAMT_COL = "SAN_SAMT";
        public const string SAN_TYPE_COL = "SAN_TYPE";
        public const string SESSIONID_COL = "SESSIONID";
        //public const string SAN_TYPE_COL = "SAN_TYPE";
        public const string EXP_DATE_COL = "EXP_DATE";
        public const string ONHAND_SOTCK_COL = "ONHAND_SOTCK";
        public const string ADJUST_QTY_COL = "ADJUST_QTY";
        public const string STOCK_ITEM_BAT_COL = "STOCK_ITEM_BAT";
        public const string SAL_RATE_COL = "SAL_RATE";
        public const string PURC_VAL_COL = "PURCHASE_VAL";
        public const string FLAG_COL = "FLAG";
        public const string ILO_COL = "ILO";
        public const string FQTY_COL = "QTY";
        public const string QTY_UNIT_REC_COL = "QTY_UNIT_REC";
        public const string QTY_LEDGER_COL = "QTY_LEDGER";
        public const string LEDG_QTY_COL = "LEDG_QTY";





        #endregion

        #region ST_SCN


        public const string SCN_DT_PARM = "@IP_SCN_DT";
        public const string SCN_ID_PARM = "@IP_SCN_ID";
        public const string SCN_NO_PARM = "@IP_SCN_NO";
        public const string SCN_PAMT_PARM = "@IP_SCN_PAMT";
        public const string SCN_REV_NO_PARM = "@IP_SCN_REV_NO";
        public const string SCN_SAMT_PARM = "@IP_SCN_SAMT";
        public const string SCN_TYPE_PARM = "@IP_SCN_TYPE";
        public const string BATCH_STOCK_PARM = "@IP_BATCH_STOCK";
        public const string QTY_SCRAPED_PARM = "@IP_QTY_SCRAPED";
        public const string QTY_BLOCKED_SAN_PARM = "@IP_QTY_BLOCKED_SAN";


        public const string SCN_DT_COL = "SCN_DT";
        public const string SCN_ID_COL = "SCN_ID";
        public const string SCN_NO_COL = "SCN_NO";
        public const string SCN_PAMT_COL = "SCN_PAMT";
        public const string SCN_REV_NO_COL = "SCN_REV_NO";
        public const string SCN_SAMT_COL = "SCN_SAMT";
        public const string SCN_TYPE_COL = "SCN_TYPE";
        public const string BATCH_STOCK_COL = "BATCH_STOCK";
        public const string QTY_SCRAPED_COL = "QTY_SCRAPED";
        public const string QTY_BLOCKED_SAN_COL = "QTY_BLOCKED_SAN";



        #endregion


        #region ST_REN

        public const string REN_DT_PARM = "@IP_REN_DT";
        public const string REN_ID_PARM = "@IP_REN_ID";
        public const string REN_NO_PARM = "@IP_REN_NO";
        public const string REN_PAMT_PARM = "@IP_REN_PAMT";
        public const string REN_REV_NO_PARM = "@IP_REN_REV_NO";
        public const string REN_SAMT_PARM = "@IP_REN_SAMT";
        public const string REN_TYPE_PARM = "@IP_REN_TYPE";
        public const string ITEM_CODE_PARM = "@IP_ITEM_CODE";
        public const string BATCHNO_PARM = "@IP_BATCHNO";
        public const string EXPDT_PARM = "@IP_EXPDT";
        public const string ONHAND_STOCK_PARM = "@IP_ONHAND_STOCK";





        public const string REN_DT_COL = "REN_DT";
        public const string REN_ID_COL = "REN_ID";
        public const string REN_NO_COL = "REN_NO";
        public const string REN_PAMT_COL = "REN_PAMT";
        public const string REN_REV_NO_COL = "REN_REV_NO";
        public const string REN_SAMT_COL = "REN_SAMT";
        public const string REN_TYPE_COL = "REN_TYPE";
        public const string ITEM_CODE_COL = "ITEM_CODE";
        public const string BATCHNO_COL = "BATCHNO";
        public const string EXPDT_COL = "EXPDT";
        public const string ONHAND_STOCK_COL = "ONHAND_STOCK";



        #endregion

        #region ST_MRN

        public const string DSPNSR_ID_PARM = "@IP_DSPNSR_ID";
        public const string DSPNSR_REV_NO_PARM = "@IP_DSPNSR_REV_NO";
        public const string MRN_DT_PARM = "@IP_MRN_DT";
        public const string MRN_ID_PARM = "@IP_MRN_ID";
        public const string MRN_NO_PARM = "@IP_MRN_NO";
        public const string MRN_PAMT_PARM = "@IP_MRN_PAMT";
        public const string MRN_REV_NO_PARM = "@IP_MRN_REV_NO";
        public const string MRN_SAMT_PARM = "@IP_MRN_SAMT";





        public const string DSPNSR_ID_COL = "DSPNSR_ID";
        public const string DSPNSR_REV_NO_COL = "DSPNSR_REV_NO";
        public const string MRN_DT_COL = "MRN_DT";
        public const string MRN_ID_COL = "MRN_ID";
        public const string MRN_NO_COL = "MRN_NO";
        public const string MRN_PAMT_COL = "MRN_PAMT";
        public const string MRN_REV_NO_COL = "MRN_REV_NO";
        public const string MRN_SAMT_COL = "MRN_SAMT";

        #endregion

        public const string BLOCKED_STOCK_COL = "BLOCK_STOCK";

        public const string VD_STNDAYS_COL = "VD_STNDAYS";
        public const string VD_STNDAYS_PARM = "@IP_VD_STNDAYS";

        public const string IS_ALLOW_IP_ADVANCE_COL = "IS_ALLOW_IP_ADVANCE";
        public const string IS_ALLOW_IP_ADVANCE_PARM = "@IP_IS_ALLOW_IP_ADVANCE";



        #region ST_QCS



        public const string AMC_CMC_FLG_PARM = "@IP_AMC_CMC_FLG";
        public const string BONUS_QTY_PARM = "@IP_BONUS_QTY";
        public const string DIS_AMT_PARM = "@IP_DIS_AMT";
        public const string DIS_PCT_PARM = "@IP_DIS_PCT";
        public const string EXCISE_DUTY_AMT_PARM = "@IP_EXCISE_DUTY_AMT";
        public const string EXCISE_DUTY_PCT_PARM = "@IP_EXCISE_DUTY_PCT";
        public const string INSURANCE_AMT_PARM = "@IP_INSURANCE_AMT";
        public const string OTH_TAX1_AMT_PARM = "@IP_OTH_TAX1_AMT";
        public const string OTH_TAX1_PCT_PARM = "@IP_OTH_TAX1_PCT";
        public const string OTH_TAX2_AMT_PARM = "@IP_OTH_TAX2_AMT";
        public const string OTH_TAX2_PCT_PARM = "@IP_OTH_TAX2_PCT";
        public const string PF_PCT_PARM = "@IP_PF_PCT";
        public const string QCS_DT_PARM = "@IP_QCS_DT";
        public const string QCS_ID_PARM = "@IP_QCS_ID";
        public const string QCS_ITEM_ID_PARM = "@IP_QCS_ITEM_ID";
        public const string QCS_ITEM_REV_NO_PARM = "@IP_QCS_ITEM_REV_NO";
        public const string QCS_NO_PARM = "@IP_QCS_NO";
        public const string QCS_REV_NO_PARM = "@IP_QCS_REV_NO";
        public const string SALES_TAX_AMT_PARM = "@IP_SALES_TAX_AMT";
        public const string SALES_TAX_PCT_PARM = "@IP_SALES_TAX_PCT";
        public const string VENDOR_RANK_PARM = "@IP_VENDOR_RANK";
        public const string VALIDT_DAYS_PARM = "@IP_VALIDT_DAYS";
        public const string RESET_NO_PARM = "@IP_RESET_NO";
        public const string RESET_DT_PARM = "@IP_RESET_DT";
        public const string TRANSACTION_TYPE_PARM = "@IP_TRANSACTION_TYPE";
        public const string RESET_ID_PARM = "@IP_RESET_ID";




        public const string AMC_CMC_FLG_COL = "AMC_CMC_FLG";
        public const string DIS_AMT_COL = "DIS_AMT";
        public const string DIS_PCT_COL = "DIS_PCT";
        public const string EXCISE_DUTY_AMT_COL = "EXCISE_DUTY_AMT";
        public const string EXCISE_DUTY_PCT_COL = "EXCISE_DUTY_PCT";
        public const string INSURANCE_AMT_COL = "INSURANCE_AMT";
        public const string OTH_TAX1_AMT_COL = "OTH_TAX1_AMT";
        public const string OTH_TAX1_PCT_COL = "OTH_TAX1_PCT";
        public const string OTH_TAX2_AMT_COL = "OTH_TAX2_AMT";
        public const string OTH_TAX2_PCT_COL = "OTH_TAX2_PCT";
        public const string PF_PCT_COL = "PF_PCT";
        public const string QCS_DT_COL = "QCS_DT";
        public const string QCS_ID_COL = "QCS_ID";
        public const string QCS_ITEM_ID_COL = "QCS_ITEM_ID";
        public const string QCS_ITEM_REV_NO_COL = "QCS_ITEM_REV_NO";
        public const string QCS_NO_COL = "QCS_NO";
        public const string QCS_REV_NO_COL = "QCS_REV_NO";
        public const string SALES_TAX_AMT_COL = "SALES_TAX_AMT";
        public const string SALES_TAX_PCT_COL = "SALES_TAX_PCT";
        public const string VENDOR_RANK_COL = "VENDOR_RANK";
        public const string VALIDT_DAYS_COL = "VALIDT_DAYS";
        public const string RESET_NO_COL = "RESET_NO";
        public const string RESET_DT_COL = "RESET_DT";
        public const string TRANSACTION_TYPE_COL = "TRANSACTION_TYPE";
        public const string RESET_ID_COL = "RESET_ID";



        #endregion

        #region ST_PatientReturns
        public const string ADVANCE_AMOUNT_COL = "ADVANCE_AMOUNT";
        public const string DUE_AMOUNT_COL = "DUE_AMOUNT";
        public const string PAID_AMOUNT_COL = "PAID_AMOUNT";
        public const string APPROX_BILL_AMOUNT_COL = "APPROX_BILL_AMOUNT";

        public const string BILL_AMT_PARM = "@IP_BILL_AMT";
        public const string BILL_DT_PARM = "@IP_BILL_DT";
        public const string BILL_ID_PARM = "@IP_BILL_ID";
        public const string BILL_REV_NO_PARM = "@IP_BILL_REV_NO";
        public const string BILL_TYPE_PARM = "@IP_BILL_TYPE";
        public const string CANCEL_FILL_PARM = "@IP_CANCEL_FILL";
        public const string LESS_DED_AMT_PARM = "@IP_LESS_DED_AMT";
        public const string LESS_DISC_AMT_PARM = "@IP_LESS_DISC_AMT";
        public const string LESS_DUE_AMT_PARM = "@IP_LESS_DUE_AMT";
        public const string PAT_NAME_PARM = "@IP_PAT_NAME";
        public const string POR_PURC_AMT_PARM = "@IP_POR_PURC_AMT";
        public const string POR_SALE_AMT_PARM = "@IP_POR_SALE_AMT";
        public const string RET_AMT_PARM = "@IP_RET_AMT";
        public const string RET_AUTH_ID_PARM = "@IP_RET_AUTH_ID";
        public const string RET_AUTH_REV_NO_PARM = "@IP_RET_AUTH_REV_NO";
        public const string RET_DT_PARM = "@IP_RET_DT";
        public const string RET_ID_PARM = "@IP_RET_ID";
        public const string RET_NO_PARM = "@IP_RET_NO";
        public const string RET_PAID_AMT_PARM = "@IP_RET_PAID_AMT";
        public const string RET_REV_NO_PARM = "@IP_RET_REV_NO";
        public const string TKN_NO_PARM = "@IP_TKN_NO";
        public const string XML_DATA_PARM = "@IP_XML_DATA";


        public const string BILL_AMT_COL = "BILL_AMT";
        public const string BILL_DT_COL = "BILL_DT";
        public const string BILL_ID_COL = "BILL_ID";
        public const string BILL_REV_NO_COL = "BILL_REV_NO";
        public const string BILL_TYPE_COL = "BILL_TYPE";
        public const string CANCEL_FILL_COL = "CANCEL_FILL";
        public const string LESS_DED_AMT_COL = "LESS_DED_AMT";
        public const string LESS_DISC_AMT_COL = "LESS_DISC_AMT";
        public const string LESS_DUE_AMT_COL = "LESS_DUE_AMT";
        public const string PAT_NAME_COL = "PAT_NAME";
        public const string POR_PURC_AMT_COL = "POR_PURC_AMT";
        public const string POR_SALE_AMT_COL = "POR_SALE_AMT";
        public const string RET_AMT_COL = "RET_AMT";
        public const string RET_AUTH_ID_COL = "RET_AUTH_ID";
        public const string RET_AUTH_REV_NO_COL = "RET_AUTH_REV_NO";
        public const string RET_DT_COL = "RET_DT";
        public const string RET_ID_COL = "RET_ID";
        public const string RET_NO_COL = "RET_NO";
        public const string RET_PAID_AMT_COL = "RET_PAID_AMT";
        public const string RET_REV_NO_COL = "RET_REV_NO";
        public const string TKN_NO_COL = "TKN_NO";


        #endregion
        #region PointOfSaleIP
        public const string DISPENSER_ID_COL = "DISPENSER_ID";
        public const string DISPENSER_NAME_COL = "DISPENSER_NAME";
        public const string TREATMENT_BY_ID_COL = "TREATMENT_BY_ID";
        public const string CARRIER_COPAY_PARM = "@IP_CARRIER_COPAY";
        public const string CARRIER_PAY_PARM = "@IP_CARRIER_PAY";
        public const string DOCTOR_CD_PARM = "@IP_DOCTOR_CD";
        public const string DUE_AMT_PARM = "@IP_DUE_AMT";
        public const string DUE_AUTH_CD_PARM = "@IP_DUE_AUTH_CD";
        public const string DUE_AUTH_NAME_PARM = "@IP_DUE_AUTH_NAME";
        public const string DUE_RECOVERED_PARM = "@IP_DUE_RECOVERED";
        public const string FILL_DT_PARM = "@IP_FILL_DT";
        public const string FILL_ID_PARM = "@IP_FILL_ID";
        public const string FILL_NO_PARM = "@IP_FILL_NO";
        public const string OUTSTAND_DUE_PARM = "@IP_OUTSTAND_DUE";
        public const string PAT_WO_AMT_PARM = "@IP_PAT_WO_AMT";
        public const string RECEIPT_AMT_PARM = "@IP_RECEIPT_AMT";
        public const string RECEIPT_NO_PARM = "@IP_RECEIPT_NO";
        public const string REFILL_TYPE_PARM = "@IP_REFILL_TYPE";
        public const string RETURN_AMT_PARM = "@IP_RETURN_AMT";
        public const string RX_ID_PARM = "@IP_RX_ID";
        public const string RX_NO_PARM = "@IP_RX_NO";
        public const string TKN_ID_PARM = "@IP_TKN_ID";

        public const string CARRIER_COPAY_COL = "CARRIER_COPAY";
        public const string CARRIER_PAY_COL = "CARRIER_PAY";
        public const string DOCTOR_CD_COL = "DOCTOR_CD";
        public const string DUE_AMT_COL = "DUE_AMT";
        public const string DUE_AUTH_CD_COL = "DUE_AUTH_CD";
        public const string DUE_AUTH_NAME_COL = "DUE_AUTH_NAME";
        public const string DUE_RECOVERED_COL = "DUE_RECOVERED";
        public const string FILL_DT_COL = "FILL_DT";
        public const string FILL_ID_COL = "FILL_ID";
        public const string FILL_NO_COL = "FILL_NO";
        public const string OUTSTAND_DUE_COL = "OUTSTAND_DUE";
        public const string PAT_WO_AMT_COL = "PAT_WO_AMT";
        public const string RECEIPT_AMT_COL = "RECEIPT_AMT";
        public const string RECEIPT_NO_COL = "RECEIPT_NO";
        public const string REFILL_TYPE_COL = "REFILL_TYPE";
        public const string RETURN_AMT_COL = "RETURN_AMT";
        public const string RX_ID_COL = "RX_ID";
        public const string RX_NO_COL = "RX_NO";
        public const string TKN_ID_COL = "TKN_ID";

        public const string AUTHORIZATION_NO_PARM = "@IP_AUTHORIZATION_NO";
        public const string BILL_CD_PARM = "@IP_BILL_CD";
        public const string BILL_ITEM_ID_PARM = "@IP_BILL_ITEM_ID";
        public const string BILL_ITEM_REV_NO_PARM = "@IP_BILL_ITEM_REV_NO";
        public const string CYCLE_FILL_PARM = "@IP_CYCLE_FILL";
        public const string DAYS_SUPPLY_PARM = "@IP_DAYS_SUPPLY";
        public const string INBOUND_PARM = "@IP_INBOUND";
        public const string ITEM_SALE_AMT_PARM = "@IP_ITEM_SALE_AMT";
        public const string ITEM_SALE_RATE_PARM = "@IP_ITEM_SALE_RATE";
        public const string NDC_NO_PARM = "@IP_NDC_NO";
        public const string OUTBOUND_PARM = "@IP_OUTBOUND";
        public const string PRESCRIBED_DT_PARM = "@IP_PRESCRIBED_DT";
        public const string REFILS_PRES_PARM = "@IP_REFILS_PRES";
        public const string RX_ITEM_CD_PARM = "@IP_RX_ITEM_CD";
        public const string RX_ITEM_ID_PARM = "@IP_RX_ITEM_ID";

        public const string DOCTOR_NAME_COL = "DOCTOR_NAME";
        public const string AUTHORIZATION_NO_COL = "AUTHORIZATION_NO";
        public const string BILL_CD_COL = "BILL_CD";
        public const string BILL_ITEM_ID_COL = "BILL_ITEM_ID";
        public const string BILL_ITEM_REV_NO_COL = "BILL_ITEM_REV_NO";
        public const string CYCLE_FILL_COL = "CYCLE_FILL";
        public const string DAYS_SUPPLY_COL = "DAYS_SUPPLY";
        public const string INBOUND_COL = "INBOUND";
        public const string ITEM_SALE_AMT_COL = "ITEM_SALE_AMT";
        public const string ITEM_SALE_RATE_COL = "ITEM_SALE_RATE";
        public const string NDC_NO_COL = "NDC_NO";
        public const string OUTBOUND_COL = "OUTBOUND";
        public const string PRESCRIBED_DT_COL = "PRESCRIBED_DT";
        public const string REFILS_PRES_COL = "REFILS_PRES";
        public const string RX_ITEM_CD_COL = "RX_ITEM_CD";
        public const string RX_ITEM_ID_COL = "RX_ITEM_ID";
        #endregion

        #region ST_VEND_CRCT

        public const string CRCT_AMT_PARM = "@IP_CRCT_AMT";
        public const string CRCT_DT_PARM = "@IP_CRCT_DT";
        public const string CRCT_ID_PARM = "@IP_CRCT_ID";
        public const string CRCT_NO_PARM = "@IP_CRCT_NO";
        public const string CRCT_REV_NO_PARM = "@IP_CRCT_REV_NO";
        public const string CRCT_STATUS_PARM = "@IP_CRCT_STATUS";
        public const string CRCT_TYPE_PARM = "@IP_CRCT_TYPE";
        public const string CRCT_VER_NO_PARM = "@IP_CRCT_VER_NO";
        public const string DELIVERY_LOC_PARM = "@IP_DELIVERY_LOC";
        public const string DOM_EXP_FLG_PARM = "@IP_DOM_EXP_FLG";
        public const string ENCLOSURES_PARM = "@IP_ENCLOSURES";
        public const string EVAL_8_PARM = "@IP_EVAL_8";
        public const string GRP_REV_NO_PARM = "@IP_GRP_REV_NO";
        public const string LOC_REV_NO_PARM = "@IP_LOC_REV_NO";
        public const string LOCAL_CURR_CD_PARM = "@IP_LOCAL_CURR_CD";
        public const string ORG_REV_NO_PARM = "@IP_ORG_REV_NO";
        public const string ROUNDOFFAMT_PARM = "@IP_ROUNDOFFAMT";
        public const string TNC_DESC_R_PARM = "@IP_TNC_DESC_R";
        public const string VEND_CRCT_ID_PARM = "@IP_VEND_CRCT_ID";
        public const string VEND_CRCT_REV_NO_PARM = "@IP_VEND_CRCT_REV_NO";
        public const string VEND_GRN_AMT_PARM = "@IP_VEND_GRN_AMT";
        public const string CRCT_RULE_PARM = "@IP_CRCT_RULE";
        public const string CRCT_RULE_CD_PARM = "@IP_CRCT_RULE_CD";
        public const string USALE_RATE_RULE_PARM = "@IP_USALE_RATE_RULE";
        public const string VEND_CRCT_ITEM_ID_PARM = "@IP_VEND_CRCT_ITEM_ID";
        public const string VEND_CRCT_ITEM_REV_NO_PARM = "@IP_VEND_CRCT_ITEM_REV_NO";
        public const string VEND_RANK_PARM = "@IP_VEND_RANK";


        public const string CRCT_AMT_COL = "CRCT_AMT";
        public const string CRCT_DT_COL = "CRCT_DT";
        public const string CRCT_ID_COL = "CRCT_ID";
        public const string CRCT_NO_COL = "CRCT_NO";
        public const string CRCT_REV_NO_COL = "CRCT_REV_NO";
        public const string CRCT_STATUS_COL = "CRCT_STATUS";
        public const string CRCT_TYPE_COL = "CRCT_TYPE";
        public const string CRCT_VER_NO_COL = "CRCT_VER_NO";
        public const string DELIVERY_LOC_COL = "DELIVERY_LOC";
        public const string DOM_EXP_FLG_COL = "DOM_EXP_FLG";
        public const string ENCLOSURES_COL = "ENCLOSURES";
        public const string EVAL_8_COL = "EVAL_8";
        public const string GRP_REV_NO_COL = "GRP_REV_NO";
        public const string LOC_REV_NO_COL = "LOC_REV_NO";
        public const string LOCAL_CURR_CD_COL = "LOCAL_CURR_CD";
        public const string ORG_REV_NO_COL = "ORG_REV_NO";
        public const string ROUNDOFFAMT_COL = "ROUNDOFFAMT";
        public const string TNC_DESC_R_COL = "TNC_DESC_R";
        public const string VEND_CRCT_ID_COL = "VEND_CRCT_ID";
        public const string VEND_CRCT_REV_NO_COL = "VEND_CRCT_REV_NO";
        public const string CRCT_RULE_COL = "CRCT_RULE";
        public const string CRCT_RULE_CD_COL = "CRCT_RULE_CD";
        public const string CRCT_RULE_ID_COL = "CRCT_RULE_ID";
        public const string USALE_RATE_RULE_COL = "USALE_RATE_RULE";
        public const string VEND_CRCT_ITEM_ID_COL = "VEND_CRCT_ITEM_ID";
        public const string VEND_CRCT_ITEM_REV_NO_COL = "VEND_CRCT_ITEM_REV_NO";
        public const string VEND_RANK_COL = "VEND_RANK";

        public const string GROUP_NAME_PARM = "@IP_GROUP_NAME";
        public const string REGIS_NAME_PARM = "@IP_REGIS_NAME";
        public const string SHIP_CD_PARM = "@IP_SHIP_CD";
        public const string SHIP_DESC_PARM = "@IP_SHIP_DESC";
        public const string SHIP_ID_PARM = "@IP_SHIP_ID";
        public const string SHIP_NAME_PARM = "@IP_SHIP_NAME";
        public const string SHIP_REV_NO_PARM = "@IP_SHIP_REV_NO";

        public const string GROUP_NAME_COL = "GROUP_NAME";
        public const string REGIS_NAME_COL = "REGIS_NAME";
        public const string SHIP_CD_COL = "SHIP_CD";
        public const string SHIP_DESC_COL = "SHIP_DESC";
        public const string SHIP_ID_COL = "SHIP_ID";
        public const string SHIP_NAME_COL = "SHIP_NAME";
        public const string SHIP_REV_NO_COL = "SHIP_REV_NO";
        public const string PAYMENT_TERMS_ID_COL = "PAYMENT_TERMS_ID";
        public const string PAYMENT_TERMS_NAME_COL = "PAYMENT_TERMS_NAME";
        #endregion

        #region ST_TACODES

        public const string TA_CD_PARM = "@IP_TA_CD";
        public const string TA_DESC_PARM = "@IP_TA_DESC";
        public const string TA_GROUP_PARM = "@IP_TA_GROUP";
        public const string TA_ID_PARM = "@IP_TA_ID";
        public const string TA_NATURE_PARM = "@IP_TA_NATURE";
        public const string TA_REV_NO_PARM = "@IP_TA_REV_NO";
        public const string TA_TYPE_PARM = "@IP_TA_TYPE";



        public const string TA_CD_COL = "TA_CD";
        public const string TA_DESC_COL = "TA_DESC";
        public const string TA_GROUP_COL = "TA_GROUP";
        public const string TA_ID_COL = "TA_ID";
        public const string TA_NATURE_COL = "TA_NATURE";
        public const string TA_REV_NO_COL = "TA_REV_NO";
        public const string TA_TYPE_COL = "TA_TYPE";

        #endregion

        #region ST_REMARKS
        public const string DOC_ID_PARM = "@IP_DOC_ID";
        public const string REMARKS_CD_PARM = "@IP_REMARKS_CD";
        public const string REMARKS_DESC_PARM = "@IP_REMARKS_DESC";
        public const string REMARKS_ID_PARM = "@IP_REMARKS_ID";
        public const string REMARKS_NAME_PARM = "@IP_REMARKS_NAME";
        public const string REMARKS_REV_NO_PARM = "@IP_REMARKS_REV_NO";

        public const string DOC_ID_COL = "DOC_ID";
        public const string REMARKS_CD_COL = "REMARKS_CD";
        public const string REMARKS_DESC_COL = "REMARKS_DESC";
        public const string REMARKS_ID_COL = "REMARKS_ID";
        public const string REMARKS_NAME_COL = "REMARKS_NAME";
        public const string REMARKS_REV_NO_COL = "REMARKS_REV_NO";

        #endregion

        #region ST_CTR_TYPE

        public const string CTR_TYPE_CD_PARM = "@IP_CTR_TYPE_CD";
        public const string CTR_TYPE_DESC_PARM = "@IP_CTR_TYPE_DESC";
        public const string CTR_TYPE_ID_PARM = "@IP_CTR_TYPE_ID";
        public const string CTR_TYPE_NAME_PARM = "@IP_CTR_TYPE_NAME";
        public const string CTR_TYPE_REV_NO_PARM = "@IP_CTR_TYPE_REV_NO";
        public const string REC_STATUS_PARM = "@IP_REC_STATUS";
        public const string VERSION_ID_PARM = "@IP_VERSION_ID";


        public const string CTR_TYPE_CD_COL = "CTR_TYPE_CD";
        public const string CTR_TYPE_DESC_COL = "CTR_TYPE_DESC";
        public const string CTR_TYPE_ID_COL = "CTR_TYPE_ID";
        public const string CTR_TYPE_NAME_COL = "CTR_TYPE_NAME";
        public const string CTR_TYPE_REV_NO_COL = "CTR_TYPE_REV_NO";
        public const string REC_STATUS_COL = "REC_STATUS";
        public const string VERSION_ID_COL = "VERSION_ID";

        #endregion

        #region ST_CTR
        public const string COUNTER_FLG_PARM = "@IP_COUNTER_FLG";
        public const string CTR_CD_PARM = "@IP_CTR_CD";
        public const string CTR_DESC_PARM = "@IP_CTR_DESC";
        public const string CTR_ID_PARM = "@IP_CTR_ID";
        public const string CTR_NAME_PARM = "@IP_CTR_NAME";
        public const string CTR_REV_NO_PARM = "@IP_CTR_REV_NO";
        public const string DESP_FLG_PARM = "@IP_DESP_FLG";
        public const string PRESC_FLG_PARM = "@IP_PRESC_FLG";
        public const string RECP_FLG_PARM = "@IP_RECP_FLG";
        public const string SYSTEM_MAP_PARM = "@IP_SYSTEM_MAP";


        public const string COUNTER_FLG_COL = "COUNTER_FLG";
        public const string CTR_CD_COL = "CTR_CD";
        public const string CTR_DESC_COL = "CTR_DESC";
        public const string CTR_ID_COL = "CTR_ID";
        public const string CTR_NAME_COL = "CTR_NAME";
        public const string CTR_REV_NO_COL = "CTR_REV_NO";
        public const string DESP_FLG_COL = "DESP_FLG";
        public const string PRESC_FLG_COL = "PRESC_FLG";
        public const string RECP_FLG_COL = "RECP_FLG";
        public const string SYSTEM_MAP_COL = "SYSTEM_MAP";

        #endregion

        public const string INDENT_QTY_PARAM = "@IP_INDENT_QTY";
        public const string ONHAND_PACKING_PARAM = "@IP_ONHAND_PACKING";
        public const string CONSUMP_PACKING_PARAM = "@IP_CONSUMP_PACKING";
        public const string CONSUMED_QTY_PARAM = "@IP_CONSUMED_QTY";
        public const string QTY_PENDING_PARAM = "@IP_QTY_PENDING";
        public const string ONHANDQTY_PARAM = "@IP_ONHANDQTY";


        public const string INDENT_QTY_COL = "INDENT_QTY";
        public const string ONHAND_PACKING_COL = "ONHAND_PACKING";
        public const string CONSUMP_PACKING_COL = "CONSUMP_PACKING";
        public const string CONSUMED_QTY_COL = "CONSUMED_QTY";
        public const string ONHANDQTY_COL = "ONHANDQTY";

        public const string TIMINGS_COL = "TIMINGS";
        #region ST_GRN_PAYMENTS

        public const string BALANCE_PARM = "@IP_BALANCE";
        public const string CASH_AMT_PARM = "@IP_CASH_AMT";
        public const string CHEQUE_AMT_PARM = "@IP_CHEQUE_AMT";
        public const string CHEQUE_BANK_PARM = "@IP_CHEQUE_BANK";
        public const string CHEQUE_DT_PARM = "@IP_CHEQUE_DT";
        public const string CHEQUE_NO_PARM = "@IP_CHEQUE_NO";
        public const string PAYMENT_DT_PARM = "@IP_PAYMENT_DT";
        public const string PAYMENT_ID_PARM = "@IP_PAYMENT_ID";
        public const string PAYMENT_NO_PARM = "@IP_PAYMENT_NO";
        public const string PAYMENT_REV_NO_PARM = "@IP_PAYMENT_REV_NO";
        public const string RECEIPTS_PARM = "@IP_RECEIPTS";
        public const string RETURNS_PARM = "@IP_RETURNS";
        public const string TOTALPAYMENT_PARM = "@IP_TOTALPAYMENT";


        public const string BALANCE_COL = "BALANCE";
        public const string CASH_AMT_COL = "CASH_AMT";
        public const string CHEQUE_AMT_COL = "CHEQUE_AMT";
        public const string CHEQUE_BANK_COL = "CHEQUE_BANK";
        public const string CHEQUE_DT_COL = "CHEQUE_DT";
        public const string CHEQUE_NO_COL = "CHEQUE_NO";
        public const string PAYMENT_DT_COL = "PAYMENT_DT";
        public const string PAYMENT_ID_COL = "PAYMENT_ID";
        public const string PAYMENT_NO_COL = "PAYMENT_NO";
        public const string PAYMENT_REV_NO_COL = "PAYMENT_REV_NO";
        public const string RECEIPTS_COL = "RECEIPTS";
        public const string RETURNS_COL = "RETURNS";
        public const string TOTALPAYMENT_COL = "TOTALPAYMENT";


        public const string ADJUSTMENT_PARM = "@IP_ADJUSTMENT";
        public const string ADVANCE_PARM = "@IP_ADVANCE";
        public const string GRN_VALUE_PARM = "@IP_GRN_VALUE";
        public const string INTEREST_PARM = "@IP_INTEREST";
        public const string INVOICE_VALUE_PARM = "@IP_INVOICE_VALUE";
        public const string PAIDAMOUNT_PARM = "@IP_PAIDAMOUNT";
        public const string PAYMENT_LIST_ID_PARM = "@IP_PAYMENT_LIST_ID";
        public const string PAYMENT_LIST_REV_NO_PARM = "@IP_PAYMENT_LIST_REV_NO";

        public const string ADJUSTMENT_COL = "ADJUSTMENT";
        public const string ADVANCE_COL = "ADVANCE";
        public const string GRN_VALUE_COL = "GRN_VALUE";
        public const string INTEREST_COL = "INTEREST";
        public const string INVOICE_VALUE_COL = "INVOICE_VALUE";
        public const string NURSE_WHITE_BOARD_ID_COL = "NURSE_WHITE_BOARD_ID";
        public const string PAIDAMOUNT_COL = "PAIDAMOUNT";
        public const string PAYMENT_LIST_ID_COL = "PAYMENT_LIST_ID";
        public const string PAYMENT_LIST_REV_NO_COL = "PAYMENT_LIST_REV_NO";


        #endregion

        #region ST_DRG_REC_ITEM

        public const string DOSAGE_ID_PARM = "@IP_DOSAGE_ID";
        public const string DOSAGE_NO_PARM = "@IP_DOSAGE_NO";
        public const string DOSAGE_DT_PARM = "@IP_DOSAGE_DT";
        public const string DOSAGE_ITEM_ID_PARM = "@IP_DOSAGE_ITEM_ID";
        public const string DOSEAGE_PARM = "@IP_DOSEAGE";
        public const string FREQUENCY_PARM = "@IP_FREQUENCY";
        public const string TIMINGS1_PARM = "@IP_TIMINGS1";
        public const string TIMINGS2_PARM = "@IP_TIMINGS2";
        public const string TIMINGS3_PARM = "@IP_TIMINGS3";
        public const string NURSE_NOTE_PARM = "@IP_NURSE_NOTE";
        public const string INTERVAL_PARM = "@IP_INTERVAL";
        public const string DRUG_STOP_DT_PARM = "@IP_DRUG_STOP_DT";
        public const string REASON_PARM = "@IP_REASON";
        public const string IT3STATUS_PARM = "@IP_T3STATUS";
        public const string T2STATUS_PARM = "@IP_T2STATUS";
        public const string T1STATUS_PARM = "@IP_T1STATUS";
        public const string CHANGE_QTY_PARM = "@IP_CHANGE_QTY";
        public const string IS_SHOW_NURSING_PARM = "@IP_IS_SHOW_NURSING";


        public const string IS_SHOW_NURSING_COL = "IS_SHOW_NURSING";
        public const string DOSAGE_ID_COL = "DOSAGE_ID";
        public const string DOSAGE_NO_COL = "DOSAGE_NO";
        public const string DOSAGE_DT_COL = "DOSAGE_DT";
        public const string DOSAGE_ITEM_ID_COL = "DOSAGE_ITEM_ID";
        public const string DOSAGE_ITEM_REV_NO_COL = "DOSAGE_ITEM_REV_NO";
        public const string DOSEAGE_COL = "DOSEAGE";
        public const string FREQUENCY_COL = "FREQUENCY";
        public const string TIMINGS1_COL = "TIMINGS1";
        public const string TIMINGS2_COL = "TIMINGS2";
        public const string TIMINGS3_COL = "TIMINGS3";
        public const string NURSE_NOTE_COL = "NURSE_NOTE";
        public const string INTERVAL_COL = "INTERVAL";
        public const string DRUG_STOP_DT_COL = "DRUG_STOP_DT";
        public const string REASON_COL = "REASON";
        public const string IT3STATUS_COL = "T3STATUS";
        public const string T2STATUS_COL = "T2STATUS";
        public const string T1STATUS_COL = "T1STATUS";



        public const string ADMN_DT_COL = "ADMN_DT";
        public const string WARD_GROUP_NAME_COL = "WARD_GROUP_NAME";
        public const string ROOM_NAME_COL = "ROOM_NAME";
        public const string BED_NAME_COL = "BED_NAME";
        public const string CONSULTANT_COL = "CONSULTANT";
        public const string DISPLAY_NAME_COL = "DISPLAY_NAME";
        public const string AGE_COL = "AGE";
        public const string DOB_COL = "DOB";
        public const string GENDER_COL = "GENDER";
        public const string PATIENT_TYPE_COL = "PATIENT_TYPE";
        public const string PATIENT_TYPE_ID_COL = "PATIENT_TYPE_ID";



        #endregion

        #region DISCREQ_LOG


        public const string DISCREQ_NO_PARM = "@IP_DISCREQ_NO";
        public const string DISCREQ_LOG_DT_PARM = "@IP_DISCREQ_LOG_DT";
        public const string PROCESS_CD_PARM = "@IP_PROCESS_CD";
        public const string LOG_NOTES_PARM = "@IP_LOG_NOTES";
        public const string COFFSTATUS_PARM = "@IP_COFFSTATUS";
        public const string COFF_FROM_DT_PARM = "@IP_COFF_FROM_DT";
        public const string COFF_TO_DT_PARM = "@IP_COFF_TO_DT";
        public const string DISC_REQ_NO_PARM = "@IP_DISC_REQ_NO";
        public const string DISC_REQ_DT_PARM = "@IP_DISC_REQ_DT";
        public const string DOCTOR_NOTES_PARM = "@IP_DOCTOR_NOTES";
        public const string SENT_TO_BILL_PARM = "@IP_SENT_TO_BILL";
        public const string SENT_DT_PARM = "@IP_SENT_DT";
        public const string SENT_BY_PARM = "@IP_SENT_BY";
        public const string RECDBY_BILL_PARM = "@IP_RECDBY_BILL";
        public const string RECD_DT_PARM = "@IP_RECD_DT";
        public const string RECD_BY_PARM = "@IP_RECD_BY";
        public const string BILLED_STATUS_PARM = "@IP_BILLED_STATUS";
        public const string BILLED_DT_PARM = "@IP_BILLED_DT";
        public const string DISC_REQ_ID_PARM = "@IP_DISC_REQ_ID";
        public const string BILLED_BY_PARM = "@IP_BILLED_BY";
        public const string DISCREQ_LOG_ID_PARM = "@IP_DISCREQ_LOG_ID";
        public const string DISCREQ_LOG_NO_PARM = "@IP_DISCREQ_LOG_NO";
        public const string LOG_TYPE_PARM = "@IP_LOG_TYPE";
        public const string GENDER_PARM = "@IP_GENDER";
        public const string WORD_NAME_PARM = "@IP_WORD_NAME";
        public const string SCROLL_TEXT_PARM = "@IP_SCROLL_TEXT";
        public const string DIAGNOSIS_PARM = "@IP_DIAGNOSIS";
        public const string NURSE_WHITE_BOARD_ID = "@IP_NURSE_WHITE_BOARD_ID";
        public const string NURSE_WHITE_BOARD_REV_NO_PARM = "@IP_NURSE_WHITE_BOARD_REV_NO";

        public const string IP_DISC_TYPE_PARM = "IP_DISC_TYPE";

        #endregion

        #region ST_MRQ_CNCL


        public const string MRQ_CANCEL_DT_PARM = "@IP_MRQ_CANCEL_DT";
        public const string MRQ_CANCEL_NO_PARM = "@IP_MRQ_CANCEL_NO";
        public const string MRQ_DT_PARM = "@IP_MRQ_DT";
        public const string MRQ_ID_PARM = "@IP_MRQ_ID";
        public const string ST_MRQ_CNCL_ID_PARM = "@IP_ST_MRQ_CNCL_ID";
        public const string ST_MRQ_CNCL_REV_NO_PARM = "@IP_ST_MRQ_CNCL_REV_NO";


        public const string MRQ_CANCEL_DT_COL = "MRQ_CANCEL_DT";
        public const string MRQ_CANCEL_NO_COL = "MRQ_CANCEL_NO";
        public const string ST_MRQ_CNCL_ID_COL = "ST_MRQ_CNCL_ID";
        public const string ST_MRQ_CNCL_REV_NO_COL = "ST_MRQ_CNCL_REV_NO";

        public const string QTY_REQUESTED_COL = "QTY_REQUESTED";
        public const string ST_MRQ_CNCL_ITEM_ID_COL = "ST_MRQ_CNCL_ITEM_ID";
        public const string ST_MRQ_CNCL_ITEM_REV_NO_COL = "ST_MRQ_CNCL_ITEM_REV_NO";

        public const string QTY_REQUESTED_PARM = "@IP_QTY_REQUESTED";
        public const string ST_MRQ_CNCL_ITEM_ID_PARM = "@IP_ST_MRQ_CNCL_ITEM_ID";
        public const string ST_MRQ_CNCL_ITEM_REV_NO_PARM = "@IP_ST_MRQ_CNCL_ITEM_REV_NO";


        #endregion


        public const string EXCHANGE_RATE_DD_PARM = "@IP_EXCHANGE_RATE_DD";
        public const string EXCHANGE_RATE_CARD_PARM = "@IP_EXCHANGE_RATE_CARD";
        public const string EXCHANGE_RATE_CHAQUE_PARM = "@IP_EXCHANGE_RATE_CHAQUE";
        public const string CREATE_NAME_COL = "CREATE_NAME";
        public const string EXCHANGE_RATE_DD_COL = "EXCHANGE_RATE_DD";
        public const string EXCHANGE_RATE_CHAQUE_COL = "EXCHANGE_RATE_CHAQUE";
        public const string EXCHANGE_RATE_CARD_COL = "EXCHANGE_RATE_CARD";
        public const string MODIFY_NAME_COL = "MODIFY_NAME";
        public const string IP_QUERY_PARAM = "@IP_QUERY";
    }

}