using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
  public  class KitReturn
    {
        private int kit_return_id;

        public int KIT_RETURN_ID
        {
            get { return kit_return_id; }
            set { kit_return_id = value; }
        }

        private string item_category;

        public string ITEM_CATEGORY
        {
            get { return item_category; }
            set { item_category = value; }
        }

        private int kit_return_rev_no;

        public int KIT_RETURN_REV_NO
        {
            get { return kit_return_rev_no; }
            set { kit_return_rev_no = value; }
        }
        private string kit_return_cd;

        public string KIT_RETURN_CD
        {
            get { return kit_return_cd; }
            set { kit_return_cd = value; }
        }
        private int kit_recieve_id;

        public int KIT_RECIEVE_ID
        {
            get { return kit_recieve_id; }
            set { kit_recieve_id = value; }
        }
        private string return_by;

        public string RETURN_BY
        {
            get { return return_by; }
            set { return_by = value; }
        }
        private string kit_return_by_name;

        public string KIT_RETURN_BY_NAME
        {
            get { return kit_return_by_name; }
            set { kit_return_by_name = value; }
        }
        private string return_date;

        public string RETURN_DATE
        {
            get { return return_date; }
            set { return_date = value; }
        }
        private string from_stp;

        public string FROM_STP
        {
            get { return from_stp; }
            set { from_stp = value; }
        }
        private string to_stp;

        public string TO_STP
        {
            get { return to_stp; }
            set { to_stp = value; }
        }
        private string remarks;

        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }
        private int stp_id;

        public int STP_ID
        {
            get { return stp_id; }
            set { stp_id = value; }
        }
        private string _APPROVED_BY;
        public string APPROVED_BY
        {
            get { return _APPROVED_BY; }
            set { _APPROVED_BY = value; }
        }
        private string _APPROVED_DATE;
        public string APPROVED_DATE
        {
            get { return _APPROVED_DATE; }
            set { _APPROVED_DATE = value; }
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
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int kit_return_item_id;

        public int KIT_RETURN_ITEM_ID
        {
            get { return kit_return_item_id; }
            set { kit_return_item_id = value; }
        }
        private int kit_return_item_rev_no;

        public int KIT_RETURN_ITEM_REV_NO
        {
            get { return kit_return_item_rev_no; }
            set { kit_return_item_rev_no = value; }
        }
        private int kit_recieve_item_id;

        public int KIT_RECIEVE_ITEM_ID
        {
            get { return kit_recieve_item_id; }
            set { kit_recieve_item_id = value; }
        }
        private string isreturn;

        public string ISRETURN
        {
            get { return isreturn; }
            set { isreturn = value; }
        }
        private int return_type_id;

        public int RETURN_TYPE_ID
        {
            get { return return_type_id; }
            set { return_type_id = value; }
        }
        private string return_type_name;

        public string RETURN_TYPE_NAME
        {
            get { return return_type_name; }
            set { return_type_name = value; }
        }
        private string _tran_xml;
        public string TRAN_XML
        {
            get { return _tran_xml; }
            set { _tran_xml = value; }
        }
        private string kit_name;

        public string KIT_NAME
        {
            get { return kit_name; }
            set { kit_name = value; }
        }
        private int qty_requested;

        public int QTY_REQUESTED
        {
            get { return qty_requested; }
            set { qty_requested = value; }
        }
        private int qty_recieved;

        public int QTY_RECIEVED
        {
            get { return qty_recieved; }
            set { qty_recieved = value; }
        }
        private int qty_issued;

        public int QTY_ISSUED
        {
            get { return qty_issued; }
            set { qty_issued = value; }
        }
        private int qty_pending;

        public int QTY_PENDING
        {
            get { return qty_pending; }
            set { qty_pending = value; }
        }
        private string returnn;

        public string RETURNN
        {
            get { return returnn; }
            set { returnn = value; }
        }
        private string kit_return_item_cd;

        public string KIT_RETURN_ITEM_CD
        {
            get { return kit_return_item_cd; }
            set { kit_return_item_cd = value; }
        }
        private string kit_item_name;

        public string KIT_ITEM_NAME
        {
            get { return kit_item_name; }
            set { kit_item_name = value; }
        }
        private int batch_no;

        public int BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string exp_dt;

        public string EXP_DT
        {
            get { return exp_dt; }
            set { exp_dt = value; }
        }
        private int qty;

        public int QTY
        {
            get { return qty; }
            set { qty = value; }
        }
        private string from_stp_name;

        public string FROM_STP_NAME
        {
            get { return from_stp_name; }
            set { from_stp_name = value; }
        }
        private string to_stp_name;

        public string TO_STP_NAME
        {
            get { return to_stp_name; }
            set { to_stp_name = value; }
        }
        private int kit_rec_id;

        public int KIT_REC_ID
        {
            get { return kit_rec_id; }
            set { kit_rec_id = value; }
        }
        private string kit_rec_name;

        public string KIT_REC_NAME
        {
            get { return kit_rec_name; }
            set { kit_rec_name = value; }
        }
        private string kit_rec_cd;

        public string KIT_REC_CD
        {
            get { return kit_rec_cd; }
            set { kit_rec_cd = value; }
        }
        private string item_cd;

        public string ITEM_CD
        {
            get { return item_cd; }
            set { item_cd = value; }
        }
        private string item_name;

        public string ITEM_NAME
        {
            get { return item_name; }
            set { item_name = value; }
        }
        private int reference_type_id;

        public int REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }
        private string status;

        public string STATUS
        {
            get { return status; }
            set { status = value; }
        }
        private string flag;

        public string FLAG
        {
            get { return flag; }
            set { flag = value; }
        }
        private string return_qty;

        public string RETURN_QTY
        {
            get { return return_qty; }
            set { return_qty = value; }
        }
        private string kit_receive_cd;

        public string KIT_RECEIVE_CD
        {
            get { return kit_receive_cd; }
            set { kit_receive_cd = value; }
        }
        private string batch_no1;

        public string BATCH_NO1
        {
            get { return batch_no1; }
            set { batch_no1 = value; }
        }
        private string exp_date;

        public string EXP_DATE
        {
            get { return exp_date; }
            set { exp_date = value; }
        }
        private string blocked_qty;

        public string BLOCKED_QTY
        {
            get { return blocked_qty; }
            set { blocked_qty = value; }
        }
        private string barcode;

        public string BARCODE
        {
            get { return barcode; }
            set { barcode = value; }
        }
        private string kit_id;

        public string KIT_ID
        {
            get { return kit_id; }
            set { kit_id = value; }
        }
        private string kit_cd;

        public string KIT_CD
        {
            get { return kit_cd; }
            set { kit_cd = value; }
        }
        private string item_type;

        public string ITEM_TYPE
        {
            get { return item_type; }
            set { item_type = value; }
        }
        private string is_default_stock_reduce;

        public string IS_DEFAULT_STOCK_REDUCE
        {
            get { return is_default_stock_reduce; }
            set { is_default_stock_reduce = value; }
        }
        private string qty_received;

        public string QTY_RECEIVED
        {
            get { return qty_received; }
            set { qty_received = value; }
        }
        private string identity_no;

        public string IDENTITY_NO
        {
            get { return identity_no; }
            set { identity_no = value; }
        }
        private string model_name;

        public string MODEL_NAME
        {
            get { return model_name; }
            set { model_name = value; }
        }
        private string serial_no;

        public string SERIAL_NO
        {
            get { return serial_no; }
            set { serial_no = value; }
        }
        private string onhand_qty;

        public string ONHAND_QTY
        {
            get { return onhand_qty; }
            set { onhand_qty = value; }
        }
        private string model_no;

        public string MODEL_NO
        {
            get { return model_no; }
            set { model_no = value; }
        }

        private string kit_receive_item_id;

        public string KIT_RECEIVE_ITEM_ID
        {
            get { return kit_receive_item_id; }
            set { kit_receive_item_id = value; }
        }
        private string kit_receive_id;

        public string KIT_RECEIVE_ID
        {
            get { return kit_receive_id; }
            set { kit_receive_id = value; }
        }
        private string batch_cd;

        public string BATCH_CD
        {
            get { return batch_cd; }
            set { batch_cd = value; }

        }
        private string kit_usage_id;

        public string KIT_USAGE_ID
        {
            get { return kit_usage_id; }
            set { kit_usage_id = value; }
        }
        private string xml;

        public string XML
        {
            get { return xml; }
            set { xml = value; }
        }
        private string re_process_id;

        public string RE_PROCESS_ID
        {
            get { return re_process_id; }
            set { re_process_id = value; }
        }
        public string PROC_NAME { get; set; }
        public string EMS_ITEM_RECIEVE_ID { get; set; }
    }
}
