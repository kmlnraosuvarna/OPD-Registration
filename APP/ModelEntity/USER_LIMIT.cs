using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class USER_LIMIT
    {
        private string _user_cd;

        public string USER_CD
        {
            get { return _user_cd; }
            set { _user_cd = value; }
        }
        private string user_name;
        public string USER_NAME
        {
            get { return user_name; }
            set { user_name = value; }
        }

        private int _user_limit_id;
        public int USER_LIMIT_ID
        {
            set { _user_limit_id = value; }
            get { return _user_limit_id; }
        }
        private int _user_limit_rev_no;
        public int USER_LIMIT_REV_NO
        {
            set { _user_limit_rev_no = value; }
            get { return _user_limit_rev_no; }
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
        private float _reg_cncn;
        public float REG_CNCN
        {
            set { _reg_cncn = value; }
            get { return _reg_cncn; }
        }
        private float _REG_DUE;
        public float REG_DUE
        {
            get { return _REG_DUE; }
            set { _REG_DUE = value; }
        }
        private float _ip_cncn;
        public float IP_CNCN
        {
            set { _ip_cncn = value; }
            get { return _ip_cncn; }
        }
        private float _ip_due;
        public float IP_DUE
        {
            set { _ip_due = value; }
            get { return _ip_due; }
        }
        private float _op_consult_cncn;
        public float OP_CONSULT_CNCN
        {
            set { _op_consult_cncn = value; }
            get { return _op_consult_cncn; }
        }
        private float _op_consult_due;
        public float OP_CONSULT_DUE
        {
            set { _op_consult_due = value; }
            get { return _op_consult_due; }
        }
        private float _op_cncn;
        public float OP_CNCN
        {
            set { _op_cncn = value; }
            get { return _op_cncn; }
        }
        private float _op_due;
        public float OP_DUE
        {
            set { _op_due = value; }
            get { return _op_due; }
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
        private string _is_active;
        public string IS_ACTIVE
        {
            set { _is_active = value; }
            get { return _is_active; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
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
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private float _REFUNDABLE_AMT;
        public float REFUNDABLE_AMT
        {
            set { _REFUNDABLE_AMT = value; }
            get { return _REFUNDABLE_AMT; }
        }

        private float _OPD_CONC;
        public float OPD_CONC
        {
            set { _OPD_CONC = value; }
            get { return _OPD_CONC; }
        }
        private float _OPD_DUE;
        public float OPD_DUE
        {
            set { _OPD_DUE = value; }
            get { return _OPD_DUE; }
        }
        private string st_op_cncn;
        public string ST_OP_CNCN
        {
            set { st_op_cncn = value; }
            get { return st_op_cncn; }
        }
        private string st_op_due;
        public string ST_OP_DUE
        {
            set { st_op_due = value; }
            get { return st_op_due; }
        }
        private string _REFUNDABLE_AMOUNT;
        public string REFUNDABLE_AMOUNT
        {
            set { _REFUNDABLE_AMOUNT = value; }
            get { return _REFUNDABLE_AMOUNT; }
        }

        private string st_ip_cncn;
        public string ST_IP_CNCN
        {
            set { st_ip_cncn = value; }
            get { return st_ip_cncn; }
        }
        private string st_ip_due;
        public string ST_IP_DUE
        {
            set { st_ip_due = value; }
            get { return st_ip_due; }
        }

    }
}
