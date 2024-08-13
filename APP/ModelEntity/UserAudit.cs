using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class UserAudit
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
        private string _DOC_NAME;

        public string DOC_NAME
        {
            get { return _DOC_NAME; }
            set { _DOC_NAME = value; }
        }
        private string _USER_NAME;

        public string USER_NAME
        {
            get { return _USER_NAME; }
            set { _USER_NAME = value; }
        }
        private string _TRANSACTION_TYPE;

        public string TRANSACTION_TYPE
        {
            get { return _TRANSACTION_TYPE; }
            set { _TRANSACTION_TYPE = value; }
        }
        private string _ACTION_NAME;

        public string ACTION_NAME
        {
            get { return _ACTION_NAME; }
            set { _ACTION_NAME = value; }
        }
        private string _NOOFTRANS;

        public string NOOFTRANS
        {
            get { return _NOOFTRANS; }
            set { _NOOFTRANS = value; }
        }


    }
}
