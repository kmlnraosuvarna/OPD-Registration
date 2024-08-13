using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class KitRequest
    {
        private string kit_req_id;

        public string KIT_REQ_ID
        {
            get { return kit_req_id; }
            set { kit_req_id = value; }
        }

        private string kit_req_rev_no;

        public string KIT_REQ_REV_NO
        {
            get { return kit_req_rev_no; }
            set { kit_req_rev_no = value; }
        }

        private string kit_req_cd;

        public string KIT_REQ_CD
        {
            get { return kit_req_cd; }
            set { kit_req_cd = value; }
        }

        private int to_dep;

        public int TO_DEP
        {
            get { return to_dep; }
            set { to_dep = value; }
        }
        private string from_dep;

        public string FROM_DEP
        {
            get { return from_dep; }
            set { from_dep = value; }
        }
        private string to_stp;

        public string TO_STP
        {
            get { return to_stp; }
            set { to_stp = value; }
        }

        private string from_dep_name;

        public string FROM_DEP_NAME
        {
            get { return from_dep_name; }
            set { from_dep_name = value; }
        }
        private string to_dep_name;

        public string TO_DEP_NAME
        {
            get { return to_dep_name; }
            set { to_dep_name = value; }
        }

        private string item_category;

        public string ITEM_CATEGORY
        {
            get { return item_category; }
            set { item_category = value; }
        }
        private string issue_check;

        public string ISSUE_CHECK
        {
            get { return issue_check; }
            set { issue_check = value; }
        }

        private string to_stp_name;

        public string TO_STP_NAME
        {
            get { return to_stp_name; }
            set { to_stp_name = value; }
        }
        private string stp_name;

        public string STP_NAME
        {
            get { return stp_name; }
            set { stp_name = value; }
        }
        private string request_type_name;

        public string REQUEST_TYPE_NAME
        {
            get { return request_type_name; }
            set { request_type_name = value; }
        }
        private string is_pre_requisit;

        public string IS_PRE_REQUISIT
        {
            get { return is_pre_requisit; }
            set { is_pre_requisit = value; }
        }

        private string request_type_id;

        public string REQUEST_TYPE_ID
        {
            get { return request_type_id; }
            set { request_type_id = value; }
        }

        private string kit_type_name;

        public string KIT_TYPE_NAME
        {
            get { return kit_type_name; }
            set { kit_type_name = value; }
        }

        private string kit_type_id;

        public string KIT_TYPE_ID
        {
            get { return kit_type_id; }
            set { kit_type_id = value; }
        }
        private string category_id;

        public string CATEGORY_ID
        {
            get { return category_id; }
            set { category_id = value; }
        }

        private string category_name;

        public string CATEGORY_NAME
        {
            get { return category_name; }
            set { category_name = value; }
        }
        private string kit_cd;

        public string KIT_CD
        {
            get { return kit_cd; }
            set { kit_cd = value; }
        }
        private string group_id;

        public string GROUP_ID
        {
            get { return group_id; }
            set { group_id = value; }
        }

        private string material_type_id;

        public string MATERIAL_TYPE_ID
        {
            get { return material_type_id; }
            set { material_type_id = value; }
        }

        private string material_type_name;

        public string MATERIAL_TYPE_NAME
        {
            get { return material_type_name; }
            set { material_type_name = value; }
        }


        private string request_by;

        public string REQUEST_BY
        {
            get { return request_by; }
            set { request_by = value; }
        }
        private string request_date;

        public string REQUEST_DATE
        {
            get { return request_date; }
            set { request_date = value; }
        }
        private string _tran_xml;
        public string TRAN_XML
        {
            get { return _tran_xml; }
            set { _tran_xml = value; }
        }
        private string remarks;

        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }
      
        private string stp_id;

        public string STP_ID
        {
            get { return stp_id; }
            set { stp_id = value; }
        }
        private int stp_id1;

        public int STP_ID1
        {
            get { return stp_id1; }
            set { stp_id1 = value; }
        }
        private string approved_by;

        public string APPROVED_BY
        {
            get { return approved_by; }
            set { approved_by = value; }
        }
        private string approved_date;
        public string APPROVED_DATE
        {
            get { return approved_date; }
            set { approved_date = value; }
        }
        private string create_by;
        public string CREATE_BY
        {
            get { return create_by; }
            set { create_by = value; }
        }
        private string modify_by;
        public string MODIFY_BY
        {
            set { modify_by = value; }
            get { return modify_by; }
        }
        private string create_dt;
        public string CREATE_DT
        {
            set { create_dt = value; }
            get { return create_dt; }
        }






        private string modify_dt;

        public string MODIFY_DT
        {
            get { return modify_dt; }
            set { modify_dt = value; }
        }

        private string record_status;

        public string RECORD_STATUS
        {
            get { return record_status; }
            set { record_status = value; }
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
        private string due_date;

        public string DUE_DATE
        {
            get { return due_date; }
            set { due_date = value; }
        }
        private string kit_req_item_id;

        public string KIT_REQ_ITEM_ID
        {
            get { return kit_req_item_id; }
            set { kit_req_item_id = value; }
        }
        private string kit_req_item_rev_no;

        public string KIT_REQ_ITEM_REV_NO
        {
            get { return kit_req_item_rev_no; }
            set { kit_req_item_rev_no = value; }
        }
        private string kit_id;

        public string KIT_ID
        {
            get { return kit_id; }
            set { kit_id = value; }
        }
        private string session_id;

        public string SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }

        private string qty_req;

        public string QTY_REQ
        {
            get { return qty_req; }
            set { qty_req = value; }
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

        private string qty_onhand;

        public string QTY_ONHAND
        {
            get { return qty_onhand; }
            set { qty_onhand = value; }
        }
        private string status;
        public string STATUS
        {
            get { return status; }
            set { status = value; }
        }


        private string item_id;

        public string ITEM_ID
        {
            get { return item_id; }
            set { item_id = value; }
        }
        private int item_id1;

        public int ITEM_ID1
        {
            get { return item_id1; }
            set { item_id1 = value; }
        }

        private string item_name;

        public string ITEM_NAME
        {
            get { return item_name; }
            set { item_name = value; }
        }

        private string item_cd;

        public string ITEM_CD
        {
            get { return item_cd; }
            set { item_cd = value; }
        }
        private string group_name;
        public string GROUP_NAME
        {
            get { return group_name; }
            set { group_name = value; }
        }

        private string priority;

        public string PRIORITY
        {
            get { return priority; }
            set { priority = value; }
        }
        private string priority_type_name;
        public string PRIORITY_TYPE_NAME
        {
            get { return priority_type_name; }
            set { priority_type_name = value; }
        }
        private string onhand_qty;
        public string ONHAND_QTY
        {
            get { return onhand_qty; }
            set { onhand_qty = value; }
        }

        private int _comp_allot_id;
        public int COMP_ALLOT_ID
        {
            set { _comp_allot_id = value; }
            get { return _comp_allot_id; }
        }
        private int _comp_allot_rev_no;
        public int COMP_ALLOT_REV_NO
        {
            set { _comp_allot_rev_no = value; }
            get { return _comp_allot_rev_no; }
        }
        private string _comp_allot_no;
        public string COMP_ALLOT_NO
        {
            set { _comp_allot_no = value; }
            get { return _comp_allot_no; }
        }
        private string _comp_allot_dt;
        public string COMP_ALLOT_DT
        {
            set { _comp_allot_dt = value; }
            get { return _comp_allot_dt; }
        }
        private int _reference_id;
        public int REFERENCE_ID
        {
            set { _reference_id = value; }
            get { return _reference_id; }
        }
        private int _reference_type_id;
        public int REFERENCE_TYPE_ID
        {
            set { _reference_type_id = value; }
            get { return _reference_type_id; }
        }
        private int _complaint_method_id;
        public int COMPLAINT_METHOD_ID
        {
            set { _complaint_method_id = value; }
            get { return _complaint_method_id; }
        }
        private int _complaint_by;
        public int COMPLAINT_BY
        {
            set { _complaint_by = value; }
            get { return _complaint_by; }
        }
        private string _complaint_dt;
        public string COMPLAINT_DT
        {
            set { _complaint_dt = value; }
            get { return _complaint_dt; }
        }
        private int _complaint_type_id;
        public int COMPLAINT_TYPE_ID
        {
            set { _complaint_type_id = value; }
            get { return _complaint_type_id; }
        }
        private int _category;
        public int CATEGORY
        {
            set { _category = value; }
            get { return _category; }
        }
        private int _eqp_type_id;
        public int EQP_TYPE_ID
        {
            set { _eqp_type_id = value; }
            get { return _eqp_type_id; }
        }
        private int _informed_to;
        public int INFORMED_TO
        {
            set { _informed_to = value; }
            get { return _informed_to; }
        }

        private string _identity_no;
        public string IDENTITY_NO
        {
            set { _identity_no = value; }
            get { return _identity_no; }
        }
        private string _serial_no;
        public string SERIAL_NO
        {
            set { _serial_no = value; }
            get { return _serial_no; }
        }
        private string _model_no;
        public string MODEL_NO
        {
            set { _model_no = value; }
            get { return _model_no; }
        }
        private int _location_id;
        public int LOCATION_ID
        {
            set { _location_id = value; }
            get { return _location_id; }
        }
        private int _complaint_dept_id;
        public int COMPLAINT_DEPT_ID
        {
            set { _complaint_dept_id = value; }
            get { return _complaint_dept_id; }
        }
        private string _is_urgent;
        public string IS_URGENT
        {
            set { _is_urgent = value; }
            get { return _is_urgent; }
        }

        private string _description;
        public string DESCRIPTION
        {
            set { _description = value; }
            get { return _description; }
        }

        private int _alloted_by;
        public int ALLOTED_BY
        {
            set { _alloted_by = value; }
            get { return _alloted_by; }
        }
        private int _alloted_to;
        public int ALLOTED_TO
        {
            set { _alloted_to = value; }
            get { return _alloted_to; }
        }


        private int _complaint_status;
        public int COMPLAINT_STATUS
        {
            set { _complaint_status = value; }
            get { return _complaint_status; }
        }
        private string comlaint_method_name;
        public string COMLAINT_METHOD_NAME
        {
            set { comlaint_method_name = value; }
            get { return comlaint_method_name; }
        }
        private string complaint_name;
        public string COMPLAINT_NAME
        {
            set { complaint_name = value; }
            get { return complaint_name; }
        }
        private string informed_to_name;
        public string INFORMED_TO_NAME
        {
            set { informed_to_name = value; }
            get { return informed_to_name; }
        }
        private string equipment_type_name;
        public string EQUIPMENT_TYPE_NAME
        {
            set { equipment_type_name = value; }
            get { return equipment_type_name; }
        }
        private string complaint_type_name;
        public string COMPLAINT_TYPE_NAME
        {
            set { complaint_type_name = value; }
            get { return complaint_type_name; }
        }
        private string location_name;
        public string LOCATION_NAME
        {
            set { location_name = value; }
            get { return location_name; }
        }
        private string complaint_dept_name;
        public string COMPLAINT_DEPT_NAME
        {
            set { complaint_dept_name = value; }
            get { return complaint_dept_name; }
        }
        private string alloted_to_name;
        public string ALLOTED_TO_NAME
        {
            set { alloted_to_name = value; }
            get { return alloted_to_name; }
        }
        private string alloted_by_name;
        public string ALLOTED_BY_NAME
        {
            set { alloted_by_name = value; }
            get { return alloted_by_name; }
        }
        private int eqp_receive_id;
        public int EQP_RECEIVE_ID
        {
            set { eqp_receive_id = value; }
            get { return eqp_receive_id; }
        }
        private int receive_id;
        public int RECEIVE_ID
        {
            set { receive_id = value; }
            get { return receive_id; }
        }
        private int eqp_model_id;
        public int EQP_MODEL_ID
        {
            set { eqp_model_id = value; }
            get { return eqp_model_id; }
        }

        private int manufacture_id;
        public int MANUFACTURE_ID
        {
            set { manufacture_id = value; }
            get { return manufacture_id; }
        }
        private int block_id;
        public int BLOCK_ID
        {
            set { block_id = value; }
            get { return block_id; }
        }
        private int department_id;
        public int DEPARTMENT_ID
        {
            set { department_id = value; }
            get { return department_id; }
        }

        private int eqp_group_id;
        public int EQP_GROUP_ID
        {
            set { eqp_group_id = value; }
            get { return eqp_group_id; }
        }
        private int eqp_maintance_id;
        public int EQP_MAINTANCE_ID
        {
            set { eqp_maintance_id = value; }
            get { return eqp_maintance_id; }
        }
        private int floor_id;
        public int FLOOR_ID
        {
            set { floor_id = value; }
            get { return floor_id; }
        }
        private string eqp_group_name;
        public string EQP_GROUP_NAME
        {
            set { eqp_group_name = value; }
            get { return eqp_group_name; }
        }
        private string department_name;
        public string DEPARTMENT_NAME
        {
            set { department_name = value; }
            get { return department_name; }
        }
        private string date_of_delivery;
        public string DATE_OF_DELIVERY
        {
            set { date_of_delivery = value; }
            get { return date_of_delivery; }
        }
        private string installation_dt;
        public string INSTALLATION_DT
        {
            set { installation_dt = value; }
            get { return installation_dt; }
        }
        private string mnf_name;
        public string MNF_NAME
        {
            set { mnf_name = value; }
            get { return mnf_name; }
        }
        private string model_name;
        public string MODEL_NAME
        {
            set { model_name = value; }
            get { return model_name; }
        }
        private string qty;
        public string QTY
        {
            set { qty = value; }
            get { return qty; }
        }
        private string current_status;
        public string CURRENT_STATUS
        {
            set { current_status = value; }
            get { return current_status; }
        }
        private string block_name;
        public string BLOCK_NAME
        {
            set { block_name = value; }
            get { return block_name; }
        }
        private string floor_name;
        public string FLOOR_NAME
        {
            set { floor_name = value; }
            get { return floor_name; }
        }
        private string count_value;
        public string COUNT_VALUE
        {
            set { count_value = value; }
            get { return count_value; }
        }
        private string complaint_status_id;
        public string COMPLAINT_STATUS_ID
        {
            set { complaint_status_id = value; }
            get { return complaint_status_id; }
        }
        private string complaint_status_name;
        public string COMPLAINT_STATUS_NAME
        {
            set { complaint_status_name = value; }
            get { return complaint_status_name; }
        }
        private string main_comp_allot_no;
        public string MAIN_COMP_ALLOT_NO
        {
            get { return main_comp_allot_no; }
            set { main_comp_allot_no = value; }
        }
        private string read_status;
        public string READ_STATUS
        {
            get { return read_status; }
            set { read_status = value; }
        }

        private string start_time;
        public string START_TIME
        {
            get { return start_time; }
            set { start_time = value; }
        }
        private string end_time;
        public string END_TIME
        {
            get { return end_time; }
            set { end_time = value; }
        }
        private string comp_status;
        public string COMP_STATUS
        {
            get { return comp_status; }
            set { comp_status = value; }
        }
        private string from_dt;
        public string FROM_DT
        {
            get { return from_dt; }
            set { from_dt = value; }
        }
        private string to_dt;
        public string TO_DT
        {
            get { return to_dt; }
            set { to_dt = value; }
        }

        private int comp_allot_msg_id;
        public int COMP_ALLOT_MSG_ID
        {
            get { return comp_allot_msg_id; }
            set { comp_allot_msg_id = value; }
        }

        private string file_path;
        public string FILE_PATH
        {
            get { return file_path; }
            set { file_path = value; }
        }
        private string file_name;
        public string FILE_NAME
        {
            get { return file_name; }
            set { file_name = value; }
        }
        private string file_extension;
        public string FILE_EXTENSION
        {
            get { return file_extension; }
            set { file_extension = value; }
        }
        private string file_attach_status;
        public string FILE_ATTACH_STATUS
        {
            get { return file_attach_status; }
            set { file_attach_status = value; }
        }
        private int _complaint_id;
        public int COMPLAINT_ID
        {
            set { _complaint_id = value; }
            get { return _complaint_id; }
        }
        private string port;
        public string PORT
        {
            get { return port; }
            set { port = value; }
        }

        private string request_by_name;
        public string REQUEST_BY_NAME
        {
            get { return request_by_name; }
            set { request_by_name = value; }
        }
        private int issue_by;
        public int ISSUE_BY
        {
            get { return issue_by; }
            set { issue_by = value; }
        }
        private string issue_by_name;
        public string ISSUE_BY_NAME
        {
            get { return issue_by_name; }
            set { issue_by_name = value; }
        }
        private string issue_date;
        public string ISSUE_DATE
        {
            get { return issue_date; }
            set { issue_date = value; }
        }
        private string dept_name;
        public string DEPT_NAME
        {
            get { return dept_name; }
            set { dept_name = value; }
        }
        private string qty_issue;
        public string QTY_ISSUE
        {
            get { return qty_issue; }
            set { qty_issue = value; }
        }
        private string qty_receive;
        public string QTY_RECEIVE
        {
            get { return qty_receive; }
            set { qty_receive = value; }
        }
        private string qty_pending;
        public string QTY_PENDING
        {
            get { return qty_pending; }
            set { qty_pending = value; }
        }

        private int user_id;
        public int USER_ID
        {
            get { return user_id; }
            set { user_id = value; }
        }
        private string isreject;
        public string ISREJECT
        {
            get { return isreject; }
            set { isreject = value; }
        }
        private string item_type;
        public string ITEM_TYPE
        {
            get { return item_type; }
            set { item_type = value; }
        }
        private string expiry_dt;
        public string EXPIRY_DT
        {
            get { return expiry_dt; }
            set { expiry_dt = value; }
        }
        private string barcode;
        public string BARCODE
        {
            get { return barcode; }
            set { barcode = value; }
        }
        private string kit_receive_item_id;
        public string KIT_RECEIVE_ITEM_ID
        {
            get { return kit_receive_item_id; }
            set { kit_receive_item_id = value; }
        }
        private string batch_no;
        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string cancel_by;
        public string CANCEL_BY
        {
            get { return cancel_by; }
            set { cancel_by = value; }
        }
        private string cancel_dt;
        public string CANCEL_DT
        {
            get { return cancel_dt; }
            set { cancel_dt = value; }
        }
        private string patient_id;
        public string PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
        private string patient_umr_no;
        public string PATIENT_UMR_NO
        {
            get { return patient_umr_no; }
            set { patient_umr_no = value; }
        }
        private string umr_no;
        public string UMR_NO
        {
            get { return umr_no; }
            set { umr_no = value; }
        }
        private string admn_no;
        public string ADMN_NO
        {
            get { return admn_no; }
            set { admn_no = value; }
        }
        private string rejected_remarks;

        public string REJECTED_REMARKS
        {
            get { return rejected_remarks; }
            set { rejected_remarks = value; }
        }
        private string dms_upload;

        public string DMS_UPLOAD
        {
            get { return dms_upload; }
            set { dms_upload = value; }
        }
        private string comp_allot_time;

        public string COMP_ALLOT_TIME
        {
            get { return comp_allot_time; }
            set { comp_allot_time = value; }
        }
        private string eqp_category_name;

        public string EQP_CATEGORY_NAME
        {
            get { return eqp_category_name; }
            set { eqp_category_name = value; }
        }

        private string vendor_name;

        public string VENDOR_NAME
        {
            get { return vendor_name; }
            set { vendor_name = value; }
        }
        private string ip_indentid;

        public string IP_INDENTID
        {
            get { return ip_indentid; }
            set { ip_indentid = value; }
        }
        private string ip_patienttype;

        public string IP_PATIENTTYPE
        {
            get { return ip_patienttype; }
            set { ip_patienttype = value; }
        }
        private string ip_deptid;

        public string IP_DEPTID
        {
            get { return ip_deptid; }
            set { ip_deptid = value; }
        }
        private string serviceid;

        public string SERVICEID
        {
            get { return serviceid; }
            set { serviceid = value; }
        }
        private string servicecd;

        public string SERVICECD
        {
            get { return servicecd; }
            set { servicecd = value; }
        }
        private string servicename;

        public string SERVICENAME
        {
            get { return servicename; }
            set { servicename = value; }
        }
        private string servicegroupid;

        public string SERVICEGROUPID
        {
            get { return servicegroupid; }
            set { servicegroupid = value; }
        }
        private string servicegroupcd;

        public string SERVICEGROUPCD
        {
            get { return servicegroupcd; }
            set { servicegroupcd = value; }
        }
        private string servicegroupname;

        public string SERVICEGROUPNAME
        {
            get { return servicegroupname; }
            set { servicegroupname = value; }
        }
        private string createby;

        public string CREATEBY
        {
            get { return createby; }
            set { createby = value; }
        }
        private string verified_by;

        public string VERIFIED_BY
        {
            get { return verified_by; }
            set { verified_by = value; }
        }
        private string verifieddt;

        public string VERIFIEDDT
        {
            get { return verifieddt; }
            set { verifieddt = value; }
        }
        private string verified_remarks;

        public string VERIFIED_REMARKS
        {
            get { return verified_remarks; }
            set { verified_remarks = value; }
        }
        private string price;

        public string PRICE
        {
            get { return price; }
            set { price = value; }
        }
        private string order_id;

        public string ORDER_ID
        {
            get { return order_id; }
            set { order_id = value; }
        }
        private string status_remarks;

        public string STATUS_REMARKS
        {
            get { return status_remarks; }
            set { status_remarks = value; }
        }
        private string patienttype;

        public string PATIENTTYPE
        {
            get { return patienttype; }
            set { patienttype = value; }
        }
        private string service_name;

        public string SERVICE_NAME
        {
            get { return service_name; }
            set { service_name = value; }
        }
        private int req_id;
        public int REQ_ID
        {
            set { req_id = value; }
            get { return req_id; }
        }
        private string onhandqty;
        public string ONHANDQTY
        {
            set { onhandqty = value; }
            get { return onhandqty; }
        }
        private int kit_issue_item_id;
        public int KIT_ISSUE_ITEM_ID
        {
            get { return kit_issue_item_id; }
            set { kit_issue_item_id = value; }
        }
        private string blocked_qty;
        public string BLOCKED_QTY
        {
            set { blocked_qty = value; }
            get { return blocked_qty; }
        }
        private string user_name;
        public string USER_NAME
        {
            get { return user_name; }
            set { user_name = value; }
        }
        private string password;

        public string PASWORD
        {
            get { return password; }
            set { password = value; }
        }
        private int hint_id;
        public int HINT1_ID
        {
            get { return hint_id; }
            set { hint_id = value; }
        }
        private string hint_ans;
        public string HINT1_ANS
        {
            get { return hint_ans; }
            set { hint_ans = value; }
        }
        private string user_cd;
        public string USER_CD
        {
            get { return user_cd; }
            set { user_cd = value; }
        }
        private string user_desc;
        public string USER_DESC
        {
            get { return user_desc; }
            set { user_desc = value; }
        }
        public string PC_REQ_ID { get; set; }
        public string PC_REQ_REV_NO { get; set; }
        public string PC_REQ_NO { get; set; }
        public string PC_REQ_DT { get; set; }
        public string PC_METHOD_ID { get; set; }
        public string TRN_TYPE_ID { get; set; }
        public string TRN_REFERENCE_ID { get; set; }
        public string PC_REQ_SOURCE_ID { get; set; }
        public string DUE_DT { get; set; }
        public string WING_ID { get; set; }
        public string ROOM_ID { get; set; }
        public string PC_REQ_STATUS_ID { get; set; }
        public string GRP_ID { get; set; }
        public string ORG_ID { get; set; }
        public string LOC_ID { get; set; }
        public string PC_METHOD_NAME { get; set; }
        public string HIC_TRN_TYPE_NAME { get; set; }
        public string PC_REQ_SOURCE_NAME { get; set; }
        public string WING_NAME { get; set; }
        public string ADMN_ID { get; set; }
        public string ASSIGNED_BY { get; set; }
        public string ASSIGNED_DT { get; set; }
        public string ASSIGNED_BY_NAME { get; set; }
        public string TRAN_TYPE_ID { get; set; }
        public string ASSIGNED_TO { get; set; }
        public string ASSIGNED_TO_NAME { get; set; }
        public string PC_REQ_STATUS_NAME { get; set; }
        public string BATCH_CD { get; set; }
        public string STOCK_IN_LOCATION { get; set; }

        private string module_id;

        public string MODULE_ID
        {
            get { return module_id; }
            set { module_id = value; }
        }
        public int NoOfRecords { get; set; }
        				
        public string APPROVED_COUNT{get;set;}
        public string PENDING_COUNT{get;set;}
        public string REJECTED_COUNT{get;set;}
        public string TOTAL_SERVICE_COUNT{get;set;}
        public string TYPE{get;set;}
        public string USER_WISE_APPROVAL_COUNT { get; set; }
        public string ORDERED_SERVICE_ID { get; set; }
        public string ORDERED_SERVICE_CD { get; set; }
        public string ORDERED_SERVICE_NAME { get; set; }
        public float SERVCE_QUANTITY { get; set; }
        public string BILL_NO { get; set; }
        public string BILL_DT { get; set; }
        public string BILL_AMOUNT { get; set; }
        public string CONCESSION_AMOUNT { get; set; }
        public string NET_AMOUNT { get; set; }
        public string PAID_AMOUNT { get; set; }
        public string GENDER { get; set; }
        public string IS_CONSENT_FORM { get; set; }
        public string IS_SRV_GUIDELINES_REQUIRED { get; set; }
        public string STAT { get; set; }
        public string INSTRUCTIONS { get; set; }
        public string AUTO_VERIFIED_COUNT { get; set; }
        public string PROC_NAME { get; set; }

        public int ROLE_ID { get; set; }
        public int ROLE_REV_NO { get; set; }
        public string ROLE_CD { get; set; }
        public string ROLE_NAME { get; set; }
        public string ROLE_DESC { get; set; }

        //ROLE PERMISSIONS IN ASSET MANAGEMENT
        public int ROLE_AUTO_ID { get; set; }
        public string OPEN { get; set; }
        public string ASSIGN { get; set; }
        public string ON_HOLD { get; set; }
        public string INPROGRESS { get; set; }
        public string COMPLETED { get; set; }
        public string REOPEN { get; set; }
        public string CLOSED { get; set; }
        public string REJECTED { get; set; }
        public string ACKNOWLEDGE { get; set; }
        public string WORKORDERPRINT { get; set; }
        public string HANDOVERPRINT { get; set; }
        public string WORKORDER { get; set; }
        public string SOFTWARE_DTL { get; set; }
        public string REASSIGN { get; set; }
        public string SUB_COMPLAINT { get; set; }
        public string WORK_ORDER_APPROVE { get; set; }
        public string SERVICE_DTL { get; set; }
    }


    public enum MasterOptions_kit
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
}

