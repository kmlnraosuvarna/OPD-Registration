using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
 
    [Serializable]
    public  class KitRecieve
    {

        private string kit_receive_id;

        public string KIT_RECEIVE_ID
        {
            get { return kit_receive_id; }
            set { kit_receive_id = value; }
        }

        private string kit_receive_rev_no;

        public string KIT_RECEIVE_REV_NO
        {
            get { return kit_receive_rev_no; }
            set { kit_receive_rev_no = value; }
        }

        private string kit_receive_cd;

        public string KIT_RECEIVE_CD
        {
            get { return kit_receive_cd; }
            set { kit_receive_cd = value; }
        }

        private string kit_issue_id;

        public string KIT_ISSUE_ID
        {
            get { return kit_issue_id; }
            set { kit_issue_id = value; }
        }
        private string received_by;

        public string RECEIVED_BY
        {
            get { return received_by; }
            set { received_by = value; }
        }
        private string received_date;

        public string RECEIVED_DATE
        {
            get { return received_date; }
            set { received_date = value; }
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
        private string session_id;

        public string SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
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

        private string record_status;

        public string RECORD_STATUS
        {
            get { return record_status; }
            set { record_status = value; }
        }
        private string kit_receive_item_id;

        public string KIT_RECEIVE_ITEM_ID
        {
            get { return kit_receive_item_id; }
            set { kit_receive_item_id = value; }
        }
        private string kit_receive_item_rev_no;

        public string KIT_RECEIVE_ITEM_REV_NO
        {
            get { return kit_receive_item_rev_no; }
            set { kit_receive_item_rev_no = value; }
        }
        private string kit_id;

        public string KIT_ID
        {
            get { return kit_id; }
            set { kit_id = value; }
        }


        private string batch_no;

        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string qty_received;

        public string QTY_RECEIVED
        {
            get { return qty_received; }
            set { qty_received = value; }
        }

        private string isreject;

        public string ISREJECT
        {
            get { return isreject; }
            set { isreject = value; }
        }
        private string stp_id;

        public string STP_ID
        {
            get { return stp_id; }
            set { stp_id = value; }
        }

        private string item_used;

        public string ITEM_USED
        {
            get { return item_used; }
            set { item_used = value; }
        }
        private string item_requested;

        public string ITEM_REQUESTED
        {
            get { return item_requested; }
            set { item_requested = value; }
        }
        private string first_name;

        public string FIRST_NAME
        {
            get { return first_name; }
            set { first_name = value; }
        }
        private string kit_name;

        public string KIT_NAME
        {
            get { return kit_name; }
            set { kit_name = value; }
        }
        private string kit_issue_cd;

        public string KIT_ISSUE_CD
        {
            get { return kit_issue_cd; }
            set { kit_issue_cd = value; }
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

        private string department_name;

        public string DEPARTMENT_NAME
        {
            get { return department_name; }
            set { department_name = value; }
        }
        private string stp_name;

        public string STP_NAME
        {
            get { return stp_name; }
            set { stp_name = value; }
        }
        private string qty_req;
        public string QTY_REQ
        {
            get { return qty_req; }
            set { qty_req = value; }
        }

        private string qty_issue;
        public string QTY_ISSUE
        {
            get { return qty_issue; }
            set { qty_issue = value; }
        }
        private string kit_issue_item_id;
        public string KIT_ISSUE_ITEM_ID
        {
            get { return kit_issue_item_id; }
            set { kit_issue_item_id = value; }
        }
        private string kit_req_item_id;
        public string KIT_REQ_ITEM_ID
        {
            get { return kit_req_item_id; }
            set { kit_req_item_id = value; }
        }
        private string item_type;
        public string ITEM_TYPE
        {
            get { return item_type; }
            set { item_type = value; }
        }
        private string status;
        public string STATUS
        {
            get { return status; }
            set { status = value; }
        }
        private string qty_pending;
        public string QTY_PENDING
        {
            get { return qty_pending; }
            set { qty_pending = value; }
        }


        private string kit_return_item_id;
        public string KIT_RETURN_ITEM_ID
        {
            get { return kit_return_item_id; }
            set { kit_return_item_id = value; }
        }
        private string exp_dt;
        public string EXP_DT
        {
            get { return exp_dt; }
            set { exp_dt = value; }
        }
        private string qty;
        public string QTY
        {
            get { return qty; }
            set { qty = value; }
        }
        private string kit_return_id;
        public string KIT_RETURN_ID
        {
            get { return kit_return_id; }
            set { kit_return_id = value; }
        }

        private string kit_receive_type_id;
        public string KIT_RECEIVE_TYPE_ID
        {
            get { return kit_receive_type_id; }
            set { kit_receive_type_id = value; }
        }
        private string kit_receive_type_name;
        public string KIT_RECEIVE_TYPE_NAME
        {
            get { return kit_receive_type_name; }
            set { kit_receive_type_name = value; }
        }


        private string item_id;
        public string ITEM_ID
        {
            get { return item_id; }
            set { item_id = value; }
        }
        private string item_name;
        public string ITEM_NAME
        {
            get { return item_name; }
            set { item_name = value; }
        }

        private string trn_item_id;
        public string TRN_ITEM_ID
        {
            get { return trn_item_id; }
            set { trn_item_id = value; }
        }
        private string trn_id;
        public string TRN_ID
        {
            get { return trn_id; }
            set { trn_id = value; }
        }

        private string barcode;
        public string BARCODE
        {
            get { return barcode; }
            set { barcode = value; }
        }
        private string identity_no;
        public string IDENTITY_NO
        {
            get { return identity_no; }
            set { identity_no = value; }
        }

        private string qty_receive;
        public string QTY_RECEIVE
        {
            get { return qty_receive; }
            set { qty_receive = value; }
        }
        private string blocked_qty;
        public string BLOCKED_QTY
        {
            get { return blocked_qty; }
            set { blocked_qty = value; }
        }

        private string eqp_group_id;
        public string EQP_GROUP_ID
        {
            get { return eqp_group_id; }
            set { eqp_group_id = value; }
        }
        private string eqp_group_name;
        public string EQP_GROUP_NAME
        {
            get { return eqp_group_name; }
            set { eqp_group_name = value; }
        }

        private string model_name;
        public string MODEL_NAME
        {
            get { return model_name; }
            set { model_name = value; }
        }
        private string eqp_model_dtls_id;
        public string EQP_MODEL_DTLS_ID
        {
            get { return eqp_model_dtls_id; }
            set { eqp_model_dtls_id = value; }
        }
        private string item_cd;
        public string ITEM_CD
        {
            get { return item_cd; }
            set { item_cd = value; }
        }

        private string received_name;
        public string RECEIVED_NAME
        {
            get { return received_name; }
            set { received_name = value; }
        }
        private string department_id;
        public string DEPARTMENT_ID
        {
            get { return department_id; }
            set { department_id = value; }
        }
        private string trn_rev_no;
        public string TRN_REV_NO
        {
            get { return trn_rev_no; }
            set { trn_rev_no = value; }
        }
        private string flag;
        public string FLAG
        {
            get { return flag; }
            set { flag = value; }
        }
        private string issue_child_id;

        public string ISSUE_CHILD_ID
        {
            get { return issue_child_id; }
            set { issue_child_id = value; }
        }
        private string approved_name;

        public string APPROVED_NAME
        {
            get { return approved_name; }
            set { approved_name = value; }
        }
        private string approved_dt;

        public string APPROVED_DT
        {
            get { return approved_dt; }
            set { approved_dt = value; }
        }
        private string ip_id;

        public string IP_ID
        {
            get { return ip_id; }
            set { ip_id = value; }
        }
        private string received_remarks;

        public string RECEIVED_REMARKS
        {
            get { return received_remarks; }
            set { received_remarks = value; }
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
        private string patient_name;

        public string PATIENT_NAME
        {
            get { return patient_name; }
            set { patient_name = value; }
        }
        private string kit_rack_id;

        public string KIT_RACK_ID
        {
            get { return kit_rack_id; }
            set { kit_rack_id = value; }
        }
        private string dept_rack_name;

        public string DEPT_RACK_NAME
        {
            get { return dept_rack_name; }
            set { dept_rack_name = value; }
        }
        private string kit_storage_item_id;

        public string KIT_STORAGE_ITEM_ID
        {
            get { return kit_storage_item_id; }
            set { kit_storage_item_id = value; }
        }
        private string patient_id;

        public string PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
        private string priority_id;

        public string PRIORITY_ID
        {
            get { return priority_id; }
            set { priority_id = value; }
        }
        private string priority_name;

        public string PRIORITY_NAME
        {
            get { return priority_name; }
            set { priority_name = value; }
        }
        private string risk_id;

        public string RISK_ID
        {
            get { return risk_id; }
            set { risk_id = value; }
        }
        private string risk_name;

        public string RISK_NAME
        {
            get { return risk_name; }
            set { risk_name = value; }
        }


        private string item_category;

        public string ITEM_CATEGORY
        {
            get { return item_category; }
            set { item_category = value; }
        }
        public string PROC_NAME { get; set; }
    }
}
