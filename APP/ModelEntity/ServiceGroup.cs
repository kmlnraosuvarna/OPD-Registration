using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class ServiceGroup : ViewPaging
    {
        private string _Dept_VerID;

        public string Dept_VerID
        {
            get { return _Dept_VerID; }
            set { _Dept_VerID = value; }
        }
        private int serGroupID;

        public int SerGroupID
        {
            get { return serGroupID; }
            set { serGroupID = value; }
        }

        private string serGroupDesc;

        public string SerGroupDesc
        {
            get { return serGroupDesc; }
            set { serGroupDesc = value; }
        }
        private string _SAC_CD;

        public string SAC_CD
        {
            get { return _SAC_CD; }
            set { _SAC_CD = value; }
        }
        private string serGroupCD;

        public string SerGroupCD
        {
            get { return serGroupCD; }
            set { serGroupCD = value; }
        }
        private string serGroupName;

        public string SerGroupName
        {
            get { return serGroupName; }
            set { serGroupName = value; }
        }

        private int deptcd;

        public int Deptcd
        {
            get { return deptcd; }
            set { deptcd = value; }
        }

        private int count;

        public int Count
        {
            get { return count; }
            set { count = value; }
        }
      
        private string createdt;

        public string Create_DT
        {
            get { return createdt; }
            set { createdt = value; }
        }
        private string modifydt;

        public string Modify_DT
        {
            get { return modifydt; }
            set { modifydt = value; }
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
            get { return modify_by; }
            set { modify_by = value; }
        }
        private string dept_name;

        public string DEPT_NAME
        {
            get { return dept_name; }
            set { dept_name = value; }
        }

        private int srv_grp_rev_no;

        public int SERVICE_GROUP_REV_NO
        {
            get { return srv_grp_rev_no; }
            set { srv_grp_rev_no = value; }
        }
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private int dept_rev_no;

        public int DEPARTMENT_REV_NO
        {
            get { return dept_rev_no; }
            set { dept_rev_no = value; }
        }

        private string _col1_caption;
        public string COL1_CAPTION
        {
            set { _col1_caption = value; }
            get { return _col1_caption; }
        }
        private string _col2_caption;
        public string COL2_CAPTION
        {
            set { _col2_caption = value; }
            get { return _col2_caption; }
        }
        private string _col3_caption;
        public string COL3_CAPTION
        {
            set { _col3_caption = value; }
            get { return _col3_caption; }
        }
        private string _col4_caption;
        public string COL4_CAPTION
        {
            set { _col4_caption = value; }
            get { return _col4_caption; }
        }
        private int _default_doctor_id;
        public int DEFAULT_DOCTOR_ID
        {
            set { _default_doctor_id = value; }
            get { return _default_doctor_id; }
        }
        private int _default_doctor_rev_no;
        public int DEFAULT_DOCTOR_REV_NO
        {
            set { _default_doctor_rev_no = value; }
            get { return _default_doctor_rev_no; }
        }
        private string _doc_sign_caption;
        public string DOC_SIGN_CAPTION
        {
            set { _doc_sign_caption = value; }
            get { return _doc_sign_caption; }
        }
        private string _report_title;
        public string REPORT_TITLE
        {
            set { _report_title = value; }
            get { return _report_title; }
        }
        private string _req_approval_flg;
        public string REQ_APPROVAL_FLG
        {
            set { _req_approval_flg = value; }
            get { return _req_approval_flg; }
        }
        private string _req_despatch_flg;
        public string REQ_DESPATCH_FLG
        {
            set { _req_despatch_flg = value; }
            get { return _req_despatch_flg; }
        }
        private string _req_digital_sign_flg;
        public string REQ_DIGITAL_SIGN_FLG
        {
            set { _req_digital_sign_flg = value; }
            get { return _req_digital_sign_flg; }
        }
        
         private string _grossing_submission;
         public string GROSSING_SUBMISSION
        {
            set { _grossing_submission = value; }
            get { return _grossing_submission; }
        }
        private string _req_verification_flg;
        public string REQ_VERIFICATION_FLG
        {
            set { _req_verification_flg = value; }
            get { return _req_verification_flg; }
        }

        private string _suggessions;
        public string SUGGESSIONS
        {
            set { _suggessions = value; }
            get { return _suggessions; }
        }
        private string _note1;
        public string NOTE1
        {
            set { _note1 = value; }
            get { return _note1; }
        }
        private string _note2;
        public string NOTE2
        {
            set { _note2 = value; }
            get { return _note2; }
        }
        private string _doctor_name;
        public string DOCTOR_NAME
        {
            set { _doctor_name = value; }
            get { return _doctor_name; }
        }
        private int workflow_id;

        public int ASSAY_WF_ID
        {
            get { return workflow_id; }
            set { workflow_id = value; }
        }
        private string assay_wrkf_name;

        public string Assay_wrkf_name
        {
            get { return assay_wrkf_name; }
            set { assay_wrkf_name = value; }
        }
        private string _record_status;

        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
        }

        private string upd_approval_butn;
        public string UPD_APPROVAL_BUTN
        {
            set { upd_approval_butn = value; }
            get { return upd_approval_butn; }
        }

        private string upd_verification_butn;
        public string UPD_VERIFICATION_BUTN
        {
            set { upd_verification_butn = value; }
            get { return upd_verification_butn; }
        }

        private string accession_no_req;
        public string ACCESSION_NO_REQ
        {
            set { accession_no_req = value; }
            get { return accession_no_req; }
        }

        private string barcode_req;
        public string BARCODE_REQ
        {
            set { barcode_req = value; }
            get { return barcode_req; }
        }
        private string Record_Statuss;

        public string RECORD_STATUSS
        {
            get { return Record_Statuss; }
            set { Record_Statuss = value; }
        }
        private string create_by_name;

        public string CREATE_BY_NAME
        {
            get { return create_by_name; }
            set { create_by_name = value; }
        }
        private string modify_by_name;

        public string MODIFY_BY_NAME
        {
            get { return modify_by_name; }
            set { modify_by_name = value; }
        }
        private string _value = string.Empty;
        private string _text = string.Empty;
        public string Value
        {
            get
            {
                return _value;
            }
            set
            {
                _value = value;
            }
        }
        public string Text
        {
            get
            {
                return _text;
            }
            set
            {
                _text = value;
            }

        }
        private string service_group_cd;

        public string SERVICE_GROUP_CD
        {
            get { return service_group_cd; }
            set { service_group_cd = value; }
        }
        private string service_group_name;

        public string SERVICE_GROUP_NAME
        {
            get { return service_group_name; }
            set { service_group_name = value; }
        }
        private string service_group_desc;

        public string SERVICE_GROUP_DESC
        {
            get { return service_group_desc; }
            set { service_group_desc = value; }
        }
        private string create_dt;

        public string CREATE_DT
        {
            get { return create_dt; }
            set { create_dt = value; }
        }
        private string modify_dt;

        public string MODIFY_DT
        {
            get { return modify_dt; }
            set { modify_dt = value; }
        }
        private string department_id;

        public string DEPARTMENT_ID
        {
            get { return department_id; }
            set { department_id = value; }
        }
        private string service_group_id;

        public string SERVICE_GROUP_ID
        {
            get { return service_group_id; }
            set { service_group_id = value; }
        }
        private string department_name;

        public string DEPARTMENT_NAME
        {
            get { return department_name; }
            set { department_name = value; }
        }
        private int _printorder;

        public int PRINT_ORDER
        {
            get { return _printorder; }
            set { _printorder = value; }
        }
        private string _multilevelapprove;

        public string MULTILEVELAPPROVE
        {
            get { return _multilevelapprove; }
            set { _multilevelapprove = value; }
        }
        private int _approvalcount;

        public int APPROVALCOUNT
        {
            get { return _approvalcount; }
            set { _approvalcount = value; }
        }
        private string _IS_ONLINE_DISPLAY;

        public string IS_ONLINE_DISPLAY
        {
            get { return _IS_ONLINE_DISPLAY; }
            set { _IS_ONLINE_DISPLAY = value; }
        }

        private string _PATIENT_CLASS_ID;

        public string PATIENT_CLASS_ID
        {
            get { return _PATIENT_CLASS_ID; }
            set { _PATIENT_CLASS_ID = value; }
        }
        private string _RESULT_REQ;

        public string IS_RESULT_REQUIRED
        {
            get { return _RESULT_REQ; }
            set { _RESULT_REQ = value; }
        }
        private string _NUS_DIS_NAME;

        public string NUS_DIS_NAME
        {
            get { return _NUS_DIS_NAME; }
            set { _NUS_DIS_NAME = value; }
        }
        private string _LAB_TECH;

        public string LAB_TECH
        {
            get { return _LAB_TECH; }
            set { _LAB_TECH = value; }
        }
    }
}
