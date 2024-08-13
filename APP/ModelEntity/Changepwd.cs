using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public  class Changepwd
    {
        private string _user_unlock = string.Empty;
        public string USER_UNLOCK
        {
            get { return _user_unlock; }
            set { _user_unlock = value; }
        }

        private string _apply_pwd_rule = string.Empty;
        public string APPLY_PWD_RULE
        {
            get { return _apply_pwd_rule; }
            set { _apply_pwd_rule = value; }
        }


        private int user_id;
        public int USER_ID
        {
            get { return user_id; }
            set { user_id = value; }
        }
        private string user_name;
        public string USER_NAME
        {
            get { return user_name; }
            set { user_name = value; }
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
        private string password;

        public string PASWORD
        {
            get { return password; }
            set { password = value; }
        }
       
        public int HINT_ID
        {
            get { return hint_id; }
            set { hint_id = value; }
        }
        private string hint_name;
        public string HINT_NAME
        {
            get { return hint_name; }
            set { hint_name = value; }
        }
        private string user_cd;
        public string USER_CD
        {
            get { return user_cd; }
            set { user_cd = value; }
        }
        private string _DEPARTMENT_NAME;
        public string DEPARTMENT_NAME
        {
            get { return _DEPARTMENT_NAME; }
            set { _DEPARTMENT_NAME = value; }
        }
        private string user_desc;
        public string USER_DESC
        {
            get { return user_desc; }
            set { user_desc = value; }
        }

        private string _flag;

        public string FLAG
        {
            get { return _flag; }
            set { _flag = value; }
        }
        private int _session_ID;

        public int SESSION_ID
        {
            get { return _session_ID; }
            set { _session_ID = value; }
        }
        private string transactionpassword;

        public string TRANSACTIONPASSWORD
        {
            get { return transactionpassword; }
            set { transactionpassword = value; }
        }
        private string _advance_amount;
        public string ADVANCE_AMOUNT
        {
            get { return _advance_amount; }
            set { _advance_amount = value; }
        }

        private string _login_Status;
        public string LOGIN_STATUS
        {
            get { return _login_Status; }
            set { _login_Status = value; }
        }
        private string _REMARKS;

        public string REMARKS
        {
            get { return _REMARKS; }
            set { _REMARKS = value; }
        }
        private string _AUTH_ID;

        public string AUTH_ID
        {
            get { return _AUTH_ID; }
            set { _AUTH_ID = value; }
        }
        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }

        private string _RECORD_STATUS;

        public string RECORD_STATUS
        {
            get { return _RECORD_STATUS; }
            set { _RECORD_STATUS = value; }
        }



        private string _PF_HEAD_ID;

        public string PF_HEAD_ID
        {
            get { return _PF_HEAD_ID; }
            set { _PF_HEAD_ID = value; }
        }
        private string _PF_HEAD_CD;

        public string PF_HEAD_CD
        {
            get { return _PF_HEAD_CD; }
            set { _PF_HEAD_CD = value; }
        }
        private string _PF_HEAD_TYPE_ID;

        public string PF_HEAD_TYPE_ID
        {
            get { return _PF_HEAD_TYPE_ID; }
            set { _PF_HEAD_TYPE_ID = value; }
        }

        private string _PF_HEAD_TYPE_NAME;

        public string PF_HEAD_TYPE_NAME
        {
            get { return _PF_HEAD_TYPE_NAME; }
            set { _PF_HEAD_TYPE_NAME = value; }
        }

        
        private string _PF_HEAD_NAME;

        public string PF_HEAD_NAME
        {
            get { return _PF_HEAD_NAME; }
            set { _PF_HEAD_NAME = value; }
        }
        private string _PF_HEAD_CLASS_ID;

        public string PF_HEAD_CLASS_ID
        {
            get { return _PF_HEAD_CLASS_ID; }
            set { _PF_HEAD_CLASS_ID = value; }
        }
        private string _PF_HEAD_CLASS_NAME;

        public string PF_HEAD_CLASS_NAME
        {
            get { return _PF_HEAD_CLASS_NAME; }
            set { _PF_HEAD_CLASS_NAME = value; }
        }
        private string _PF_HEAD_CATEGORY_ID;

        public string PF_HEAD_CATEGORY_ID
        {
            get { return _PF_HEAD_CATEGORY_ID; }
            set { _PF_HEAD_CATEGORY_ID = value; }
        }
        private string _PF_HEAD_CATEGORY_NAME;

        public string PF_HEAD_CATEGORY_NAME
        {
            get { return _PF_HEAD_CATEGORY_NAME; }
            set { _PF_HEAD_CATEGORY_NAME = value; }
        }
        private string _DISPLAY_ORDER;

        public string DISPLAY_ORDER
        {
            get { return _DISPLAY_ORDER; }
            set { _DISPLAY_ORDER = value; }
        }

        private string _AMOUNT_SIGN;

        public string AMOUNT_SIGN
        {
            get { return _AMOUNT_SIGN; }
            set { _AMOUNT_SIGN = value; }
        }

        private string _FORMULA;

        public string FORMULA
        {
            get { return _FORMULA; }
            set { _FORMULA = value; }
        }

        
        

    }
}
