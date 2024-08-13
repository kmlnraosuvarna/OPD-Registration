using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class UMR_LOCK
    {
        private string _USER_NAME;

        public string USER_NAME
        {
            get { return _USER_NAME; }
            set { _USER_NAME = value; }
        }
        private string _BILL_TYPE;

        public string BILL_TYPE
        {
            get { return _BILL_TYPE; }
            set { _BILL_TYPE = value; }
        }
        private string _MACHINE;

        public string MACHINE
        {
            get { return _MACHINE; }
            set { _MACHINE = value; }
        }       
        private int _umr_lock_id;
        public int UMR_LOCK_ID
        {
            set { _umr_lock_id = value; }
            get { return _umr_lock_id; }
        }
        private int _umr_lock_rev_no;
        public int UMR_LOCK_REV_NO
        {
            set { _umr_lock_rev_no = value; }
            get { return _umr_lock_rev_no; }
        }
        private string _umr_no;
        public string UMR_NO
        {
            set { _umr_no = value; }
            get { return _umr_no; }
        }
        private string _admn_no;
        public string ADMN_NO
        {
            set { _admn_no = value; }
            get { return _admn_no; }
        }
        private string _bill_no;
        public string BILL_NO
        {
            set { _bill_no = value; }
            get { return _bill_no; }
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
        private string _lock_status;
        public string LOCK_STATUS
        {
            set { _lock_status = value; }
            get { return _lock_status; }
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
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
    }
}
