using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class RegTypeMaster
    {
        private string _registration_type;

        public string REGISTRATION_TYPE
        {
            get { return _registration_type; }
            set { _registration_type = value; }
        }
        private int _registration_fee;

        public int REGISTRATION_FEE
        {
            get { return _registration_fee; }
            set { _registration_fee = value; }
        }
        private int _registration_validity;

        public int REGISTRATION_VALIDITY
        {
            get { return _registration_validity; }
            set { _registration_validity = value; }
        }

        private string _VALIDTY_DT;

        public string VALIDTY_DT
        {
            get { return _VALIDTY_DT; }
            set { _VALIDTY_DT = value; }
        }
        private string _registration_type_id;
        public string REGISTRATION_TYPE_ID
        {
            get { return _registration_type_id; }
            set { _registration_type_id = value; }
        }
        private int _registration_fee_id;

        public int REGISTRATION_FEE_ID
        {
            get { return _registration_fee_id; }
            set { _registration_fee_id = value; }
        }
            private int _reg_type_rev_no;

            public int REG_TYPE_PRICE_REV_NO
        {
            get { return _reg_type_rev_no; }
            set { _reg_type_rev_no = value; }
        }
            private int _sessionid;

            public int SESSION_ID
            {
                get { return _sessionid; }
                set { _sessionid = value; }
            }
            private int _op_count;

            public int OP_COUNT
            {
                get { return _op_count; }
                set { _op_count = value; }
            }

            private string create_dt;
            public string CREATE_DT
            {
                set { create_dt = value; }
                get { return create_dt; }
            }
            private string _MODIFY_DT;
            public string MODIFY_DT
            {
                set { _MODIFY_DT = value; }
                get { return _MODIFY_DT; }
            }

            private string _MODIFIED_BY;
            public string MODIFIED_BY
            {
                set { _MODIFIED_BY = value; }
                get { return _MODIFIED_BY; }
            }
            private string _CREATED_BY;
            public string CREATED_BY
            {
                set { _CREATED_BY = value; }
                get { return _CREATED_BY; }
            }

    }
}
