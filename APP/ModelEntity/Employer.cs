using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class Employer : GridPaging
    {
        private int company_id = 0;
        private string company_fee = string.Empty;
        private string company_code = string.Empty;
        private string company_desc = string.Empty;
        private string company_name = string.Empty;
        private string is_letter_required = string.Empty;
        private string _card_validity = string.Empty;
        private string _card_no = string.Empty;
        private string _salary = string.Empty;
        private string _emp_name = string.Empty;
        private string _employee_No = string.Empty;

        public string EMP_NO
        {
            get { return _employee_No; }
            set { _employee_No = value; }
        }
        private int _department_id = 0;
        public int DEPARTMENT_ID
        {
            get { return _department_id; }
            set { _department_id = value; }
        }

        public string EMP_NAME
        {
            get { return _emp_name; }
            set { _emp_name = value; }
        }

        private string _designation = string.Empty;
        public string DESIGNATION
        {
            get { return _designation; }
            set { _designation = value; }
        }


        public string SALARY
        {
            get { return _salary; }
            set { _salary = value; }
        }



        public string CARD_NO
        {
            get { return _card_no; }
            set { _card_no = value; }
        }

        public string CARD_VALIDITY
        {
            get { return _card_validity; }
            set { _card_validity = value; }
        }


        public int COMPANY_ID
        {
            get
            {
                return company_id;
            }
            set
            {
                company_id = value;
            }
        }

        //public int SESSION_ID
        //{
        //    get
        //    {
        //        return session_id;
        //    }
        //    set
        //    {
        //        session_id = value;
        //    }
        //}

        /// <summary>
        /// Gets or sets the CODE.
        /// </summary>
        /// <value>The CODE.</value>
        /// <remarks></remarks>
        public string COMANY_CD
        {
            get
            {
                return company_code;
            }
            set
            {
                company_code = value;
            }
        }

        /// <summary>
        /// Gets or sets the DESC.
        /// </summary>
        /// <value>The DESC.</value>
        /// <remarks></remarks>
        public string COMPANY_DESC
        {
            get
            {
                return company_desc;
            }
            set
            {
                company_desc = value;
            }
        }
        public string COMPANY_NAME
        {
            get
            {
                return company_name;
            }
            set
            {
                company_name = value;
            }
        }

        public string COMPANY_FEE
        {
            get
            {
                return company_fee;
            }
            set
            {
                company_fee = value;
            }
        }
        public string IS_LETTER_REQUIRED
        {
            get
            {
                return is_letter_required;
            }
            set
            {
                is_letter_required = value;
            }
        }
        private string is_conseligible_ward = string.Empty;
        public string IS_CONSELIGIBLE_WARD
        {
            get { return is_conseligible_ward; }
            set { is_conseligible_ward = value; }
        }
        private string dispatch_type_id;

        public string DISPATCH_TYPE_ID
        {
            get { return dispatch_type_id; }
            set { dispatch_type_id = value; }
        }
        private string _billing_type_id;

        public string BILLING_TYPE_ID
        {
            get { return _billing_type_id; }
            set { _billing_type_id = value; }
        }
        private string _mobile_phone;
        public string MOBILE_PHONE
        {
            get { return _mobile_phone; }
            set { _mobile_phone = value; }
        }
        private string _email_id;
        public string EMAIL_ID
        {
            get { return _email_id; }
            set { _email_id = value; }
        }
        private string _default_doc_id;
        public string DEFAULT_DOC_ID
        {
            get { return _default_doc_id; }
            set { _default_doc_id = value; }
        }
        private string _referal_name;
        public string REFERAL_NAME
        {
            get { return _referal_name; }
            set { _referal_name = value; }
        }
        private string _tariff_configuration_ip;
        public string TARIFF_CONFIGURATION_IP
        {
            get { return _tariff_configuration_ip; }
            set { _tariff_configuration_ip = value; }
        }
        private string _tariff_configuration_op;
        public string TARIFF_CONFIGURATION_OP
        {
            get { return _tariff_configuration_op; }
            set { _tariff_configuration_op = value; }
        }
        private string _val_no_of_days;
        public string VAL_NO_OF_DAYS
        {
            get { return _val_no_of_days; }
            set { _val_no_of_days = value; }
        }
        private string cmp_exp_sts;
        public string CMP_EXP_STS
        {
            get { return cmp_exp_sts; }
            set { cmp_exp_sts = value; }
        }
        private string emp_percent;
        public string EMP_PERCENT
        {
            get { return emp_percent; }
            set { emp_percent = value; }
        }
        private string org_percent;
        public string ORG_PERCENT
        {
            get { return org_percent; }
            set { org_percent = value; }
        }
        private string _CMP_EXP_ALERT;
        public string CMP_EXP_ALERT
        {
            get { return _CMP_EXP_ALERT; }
            set { _CMP_EXP_ALERT = value; }
        }
        private string _EFFECT_TO_DT;
        public string EFFECT_TO_DT
        {
            get { return _EFFECT_TO_DT; }
            set { _EFFECT_TO_DT = value; }
        }
        private string _EFFECT_FROM_DT;
        public string EFFECT_FROM_DT
        {
            get { return _EFFECT_FROM_DT; }
            set { _EFFECT_FROM_DT = value; }
        }
        private byte[] _image;
        public byte[] IMAGE
        {
            get { return _image; }
            set { _image = value; }
        }
        private string _CMP_CONS_DONE;
        public string CMP_CONS_DONE
        {
            get { return _CMP_CONS_DONE; }
            set { _CMP_CONS_DONE = value; }
        }

        private string _VAL_NO_OF_CONSULTATIONS;
        public string VAL_NO_OF_CONSULTATIONS
        {
            get { return _VAL_NO_OF_CONSULTATIONS; }
            set { _VAL_NO_OF_CONSULTATIONS = value; }
        }
        private string _IP_APPROVAL_REQ_MIN_AMT;

        public string IP_APPROVAL_REQ_MIN_AMT
        {
            get { return _IP_APPROVAL_REQ_MIN_AMT; }
            set { _IP_APPROVAL_REQ_MIN_AMT = value; }
        }
        private string _OP_APPROVAL_REQ_MIN_AMT;

        public string OP_APPROVAL_REQ_MIN_AMT
        {
            get { return _OP_APPROVAL_REQ_MIN_AMT; }
            set { _OP_APPROVAL_REQ_MIN_AMT = value; }
        }
        private string _CREDIT_LIMIT_AMT_OP;

        public string CREDIT_LIMIT_AMT_OP
        {
            get { return _CREDIT_LIMIT_AMT_OP; }
            set { _CREDIT_LIMIT_AMT_OP = value; }
        }
        private string _srv_id;

        public string SRV_ID
        {
            get { return _srv_id; }
            set { _srv_id = value; }
        }
        private string _service_desc;

        public string SERVICE_DESC
        {
            get { return _service_desc; }
            set { _service_desc = value; }
        }
        private string _rate;

        public string RATE
        {
            get { return _rate; }
            set { _rate = value; }
        }
        private string _price;

        public string PRICE
        {
            get { return _price; }
            set { _price = value; }
        }
        private string _IP_ORG_PERCENT;

        public string IP_ORG_PERCENT
        {
            get { return _IP_ORG_PERCENT; }
            set { _IP_ORG_PERCENT = value; }
        }
        private string _IP_EMP_PERCENT;

        public string IP_EMP_PERCENT
        {
            get { return _IP_EMP_PERCENT; }
            set { _IP_EMP_PERCENT = value; }
        }

        private string _colour_id = string.Empty;
        public string COLOUR_ID
        {
            get { return _colour_id; }
            set { _colour_id = value; }
        }
        private string _COMPANY_TYPE_ID;

        public string COMPANY_TYPE_ID
        {
            get { return _COMPANY_TYPE_ID; }
            set { _COMPANY_TYPE_ID = value; }
        }

        private string _RECORD_STATUS;

        public string RECORD_STATUS
        {
            get { return _RECORD_STATUS; }
            set { _RECORD_STATUS = value; }
        }
        private string _COMPANY_TYPE_NAME;

        public string COMPANY_TYPE_NAME
        {
            get { return _COMPANY_TYPE_NAME; }
            set { _COMPANY_TYPE_NAME = value; }
        }
        private string _CONTACT_PERSON_NAME;

        public string CONTACT_PERSON_NAME
        {
            get { return _CONTACT_PERSON_NAME; }
            set { _CONTACT_PERSON_NAME = value; }
        }


    }
}
