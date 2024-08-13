using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class USER_DOC_AUDIT
    {
        private int _user_doc_audit_id;
        public int USER_DOC_AUDIT_ID
        {
            set { _user_doc_audit_id = value; }
            get { return _user_doc_audit_id; }
        }
        private int _user_doc_audit_rev_no;
        public int USER_DOC_AUDIT_REV_NO
        {
            set { _user_doc_audit_rev_no = value; }
            get { return _user_doc_audit_rev_no; }
        }
        private int _user_id;
        public int USER_ID
        {
            set { _user_id = value; }
            get { return _user_id; }
        }
        private int _user_rev_no;
        public int USER_REV_NO
        {
            set { _user_rev_no = value; }
            get { return _user_rev_no; }
        }
        private int _doc_id;
        public int DOC_ID
        {
            set { _doc_id = value; }
            get { return _doc_id; }
        }
        private int _doc_rev_no;
        public int DOC_REV_NO
        {
            set { _doc_rev_no = value; }
            get { return _doc_rev_no; }
        }
        private int _transaction_id;
        public int TRANSACTION_ID
        {
            set { _transaction_id = value; }
            get { return _transaction_id; }
        }
        private int _transaction_rev_no;
        public int TRANSACTION_REV_NO
        {
            set { _transaction_rev_no = value; }
            get { return _transaction_rev_no; }
        }
        private int _action_id;
        public int ACTION_ID
        {
            set { _action_id = value; }
            get { return _action_id; }
        }
        private int _action_rev_no;
        public int ACTION_REV_NO
        {
            set { _action_rev_no = value; }
            get { return _action_rev_no; }
        }
        private int _create_by;
        public int CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
        }
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private int _modify_by;
        public int MODIFY_BY
        {
            set { _modify_by = value; }
            get { return _modify_by; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private string _ptype;
        public string PTYPE
        {
            set { _ptype = value; }
            get { return _ptype; }
        }

        private string _UMR_NO;
        public string UMR_NO
        {
            set { _UMR_NO = value; }
            get { return _UMR_NO; }
        }
        private string _TRANSACTION_NO;
        public string TRANSACTION_NO
        {
            set { _TRANSACTION_NO = value; }
            get { return _TRANSACTION_NO; }
        }

        private string _PRINT_COUNT;
        public string PRINT_COUNT
        {
            set { _PRINT_COUNT = value; }
            get { return _PRINT_COUNT; }
        }

        private string _PRINT_COPIES_COUNT;
        public string PRINT_COPIES_COUNT
        {
            set { _PRINT_COPIES_COUNT = value; }
            get { return _PRINT_COPIES_COUNT; }
        }
        public string ACTION_IPTEXT { get; set; }
        public string ACTION_OPTEXT { get; set; }
        public string USER_DOC_AUDIT_DET_REV_NO{ get; set; }
    }
}
