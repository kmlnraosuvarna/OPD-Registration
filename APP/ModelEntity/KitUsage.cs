using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class KitUsage
    {
        private string _KIT_USAGE_ID;

        public string KIT_USAGE_ID
        {
            get { return _KIT_USAGE_ID; }
            set { _KIT_USAGE_ID = value; }
        }

        private string kit_usage_rev_no;

        public string KIT_USAGE_REV_NO
        {
            get { return kit_usage_rev_no; }
            set { kit_usage_rev_no = value; }
        }

        private string kit_usage_cd;

        public string KIT_USAGE_CD
        {
            get { return kit_usage_cd; }
            set { kit_usage_cd = value; }
        }

        private string kit_steril_id;

        public string KIT_STERIL_ID
        {
            get { return kit_steril_id; }
            set { kit_steril_id = value; }
        }


        private string kit_steril_item_id;

        public string KIT_STERIL_ITEM_ID
        {
            get { return kit_steril_item_id; }
            set { kit_steril_item_id = value; }
        }
        private string kit_open_type;

        public string KIT_OPEN_TYPE
        {
            get { return kit_open_type; }
            set { kit_open_type = value; }
        }

        private string kit_id;

        public string KIT_ID
        {
            get { return kit_id; }
            set { kit_id = value; }
        }

        private string kit_name;

        public string KIT_NAME
        {
            get { return kit_name; }
            set { kit_name = value; }
        }


        private string kit_open_by_name;

        public string KIT_OPEN_BY_NAME
        {
            get { return kit_open_by_name; }
            set { kit_open_by_name = value; }
        }

        private string kit_open_by;

        public string KIT_OPEN_BY
        {
            get { return kit_open_by; }
            set { kit_open_by = value; }
        }
        private string kit_open_date;

        public string KIT_OPEN_DATE
        {
            get { return kit_open_date; }
            set { kit_open_date = value; }
        }
        private string issue_from;

        public string ISSUE_FROM
        {
            get { return issue_from; }
            set { issue_from = value; }
        }

        private string issue_to;

        public string ISSUE_TO
        {
            get { return issue_to; }
            set { issue_to = value; }
        }

        private string remarks;

        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }
        private string _tran_xml;
        public string TRAN_XML
        {
            get { return _tran_xml; }
            set { _tran_xml = value; }
        }
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private string item_name;

        public string ITEM_NAME
        {
            get { return item_name; }
            set { item_name = value; }
        }
        private int qty;

        public int QTY
        {
            get { return qty; }
            set { qty = value; }
        }
        private int qty_issue;

        public int QTY_ISSUE
        {
            get { return qty_issue; }
            set { qty_issue = value; }
        }
        private int item_id;


        public int ITEM_ID
        {
            get { return item_id; }
            set { item_id = value; }
        }


        private string _CREATE_BY;
        public string CREATE_BY
        {
            get { return _CREATE_BY; }
            set { _CREATE_BY = value; }
        }
        private string _MODIFY_BY;
        public string MODIFY_BY
        {
            get { return _MODIFY_BY; }
            set { _MODIFY_BY = value; }
        }
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }

        private string approved_by;
        public string APPROVED_BY
        {
            set { approved_by = value; }
            get { return approved_by; }
        }
        private string approved_date;
        public string APPROVED_DATE
        {
            set { approved_date = value; }
            get { return approved_date; }
        }

        private string stp_id;
        public string STP_ID
        {
            set { stp_id = value; }
            get { return stp_id; }
        }
        private string stp_name;
        public string STP_NAME
        {
            set { stp_name = value; }
            get { return stp_name; }
        }

        private string BarCode;
        public string BARCODE
        {
            set { BarCode = value; }
            get { return BarCode; }
        }

        private string Expiry_Date;
        public string EXPIRY_DATE
        {
            set { Expiry_Date = value; }
            get { return Expiry_Date; }
        }

        private string Sterilization_Date;
        public string STERILIZATION_DATE
        {
            set { Sterilization_Date = value; }
            get { return Sterilization_Date; }
        }
        private string Sterilization_Type;
        public string STERILIZATION_TYPE
        {
            set { Sterilization_Type = value; }
            get { return Sterilization_Type; }
        }

        private string kit_usage_item_id;
        public string KIT_USAGE_ITEM_ID
        {
            set { kit_usage_item_id = value; }
            get { return kit_usage_item_id; }
        }

        private string item_code;
        public string ITEM_CODE
        {
            set { item_code = value; }
            get { return item_code; }
        }

        private string bar_code;
        public string BAR_CODE
        {
            set { bar_code = value; }
            get { return bar_code; }
        }

        private string bar_exp;
        public string BAR_EXP
        {
            set { bar_exp = value; }
            get { return bar_exp; }
        }

        //private string qty;
        //   public string QTY
        //  {
        //      set { qty = value; }
        //      get { return qty; }
        //  }

        private string issue_to_id;
        public string ISSUE_TO_ID
        {
            set { issue_to_id = value; }
            get { return issue_to_id; }
        }

        private string issue_to_name;
        public string ISSUE_TO_NAME
        {
            set { issue_to_name = value; }
            get { return issue_to_name; }

        }
        private string kit_open_type_name;
        public string KIT_OPEN_TYPE_NAME
        {
            set { kit_open_type_name = value; }
            get { return kit_open_type_name; }
        }

        private string record_status;
        public string RECORD_STATUS
        {
            set { record_status = value; }
            get { return record_status; }
        }



        private string batch_cd;
        public string BATCH_CD
        {
            set { batch_cd = value; }
            get { return batch_cd; }
        }

        private string batch_exp_dt;
        public string BATCH_EXP_DT
        {
            set { batch_exp_dt = value; }
            get { return batch_exp_dt; }

        }
        private string strail_dt;
        public string STRAIL_DT
        {
            set { strail_dt = value; }
            get { return strail_dt; }
        }

        private string sterlized_method_name;
        public string STERLIZED_METHOD_NAME
        {
            set { sterlized_method_name = value; }
            get { return sterlized_method_name; }
        }


        private string kit_storage_item_id;
        public string KIT_STORAGE_ITEM_ID
        {
            set { kit_storage_item_id = value; }
            get { return kit_storage_item_id; }
        }

        private string item_cd;
        public string ITEM_CD
        {
            set { item_cd = value; }
            get { return item_cd; }
        }
        private string kit_usage_item_rev_no;
        public string KIT_USAGE_ITEM_REV_NO
        {
            set { kit_usage_item_rev_no = value; }
            get { return kit_usage_item_rev_no; }
        }
        private string kit_receive_item_id;
        public string KIT_RECEIVE_ITEM_ID
        {
            set { kit_receive_item_id = value; }
            get { return kit_receive_item_id; }
        }
        private string batch_no;

        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string kit_receive_cd;

        public string KIT_RECEIVE_CD
        {
            get { return kit_receive_cd; }
            set { kit_receive_cd = value; }
        }
        private string issue_date;

        public string ISSUE_DATE
        {
            get { return issue_date; }
            set { issue_date = value; }
        }
        private string request_date;

        public string REQUEST_DATE
        {
            get { return request_date; }
            set { request_date = value; }
        }
        private string recieve_date;

        public string RECIEVE_DATE
        {
            get { return recieve_date; }
            set { recieve_date = value; }
        }
        private string item_type;

        public string ITEM_TYPE
        {
            get { return item_type; }
            set { item_type = value; }
        }
        private string admn_no;

        public string ADMN_NO
        {
            get { return admn_no; }
            set { admn_no = value; }
        }
        private string umr_no;

        public string UMR_NO
        {
            get { return umr_no; }
            set { umr_no = value; }
        }
        private string admn_id;

        public string ADMN_ID
        {
            get { return admn_id; }
            set { admn_id = value; }
        }

        private string chk_status;

        public string CHK_STATUS
        {
            get { return chk_status; }
            set { chk_status = value; }
        }
        private string kit_cd;

        public string KIT_CD
        { 
            get { return kit_cd; }
            set { kit_cd = value; }
        }
        private string received_date;

        public string RECEIVED_DATE
        {
            get { return received_date; }
            set { received_date = value; }
        }
        private string patient_id;

        public string PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
        private string status;

        public string STATUS
        {
            get { return status; }
            set { status = value; }
        }
        private string to_stp;

        public string TO_STP
        {
            get { return to_stp; }
            set { to_stp = value; }
        }
    }
}
