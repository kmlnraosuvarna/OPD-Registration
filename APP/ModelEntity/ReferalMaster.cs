using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ReferalMaster : Address
    {
        private int refrl_id;

        public int REFRL_ID
        {
            get { return refrl_id; }
            set { refrl_id = value; }
        }
        private int refrl_src_id;

        public int REFRL_SRC_ID
        {
            get { return refrl_src_id; }
            set { refrl_src_id = value; }
        }
        private string referal_name;

        public string REFERAL_NAME
        {
            get { return referal_name; }
            set { referal_name = value; }
        }
        private string regis_no;

        public string REGISTRATION_NO
        {
            get { return regis_no; }
            set { regis_no = value; }
        }
        private string refrl_cd;

        public string REFRL_CD
        {
            get { return refrl_cd; }
            set { refrl_cd = value; }
        }
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private string _opconspercent;

        public string OPCONSPERCENT
        {
            get { return _opconspercent; }
            set { _opconspercent = value; }
        }
        private string _invpersent;

        public string INVPERCENT
        {
            get { return _invpersent; }
            set { _invpersent = value; }
        }
        private string _ipprecent;

        public string IPPERCENT
        {
            get { return _ipprecent; }
            set { _ipprecent = value; }
        }
        private string _packages;

        public string PACKAGES
        {
            get { return _packages; }
            set { _packages = value; }
        }
        private string _services;

        public string SERVICES
        {
            get { return _services; }
            set { _services = value; }
        }
        private string _misc;

        public string MISCELLANEOUS
        {
            get { return _misc; }
            set { _misc = value; }
        }
        private string _procedures;

        public string PROCEDURES
        {
            get { return _procedures; }
            set { _procedures = value; }
        }
        private int _pro_id;

        public int PRO_ID
        {
            get { return _pro_id; }
            set { _pro_id = value; }
        }
        private string _pro_name;

        public string PRO_NAME
        {
            get { return _pro_name; }
            set { _pro_name = value; }
        }
        private string _pro_cd;

        public string PRO_CD
        {
            get { return _pro_cd; }
            set { _pro_cd = value; }
        }
        private string _refrl_type_id;

        public string REFRL_TYPE_ID
        {
            get { return _refrl_type_id; }
            set { _refrl_type_id = value; }
        }
        private string __dispatch_type_id;

        public string DISPATCH_TYPE_ID
        {
            get { return __dispatch_type_id; }
            set { __dispatch_type_id = value; }
        }
        private string _emaid_id;

        public string EMAIL_ID
        {
            get { return _emaid_id; }
            set { _emaid_id = value; }
        }
        private string _dispatch_method_name;

        public string DISPATCH_METHOD_NAME
        {
            get { return _dispatch_method_name; }
            set { _dispatch_method_name = value; }
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
        private string address;

        public string ADDRESS
        {
            get { return address; }
            set { address = value; }
        }
        private string _pat_rfrl_dtl_id;

        public string PAT_RFRL_DTL_ID
        {
            get { return _pat_rfrl_dtl_id; }
            set { _pat_rfrl_dtl_id = value; }
        }
        private string _PAT_RFRL_DTL_REV_NO;

        public string PAT_RFRL_DTL_REV_NO
        {
            get { return _PAT_RFRL_DTL_REV_NO; }
            set { _PAT_RFRL_DTL_REV_NO = value; }
        }

        private string _METHOD_OF_COMM_ID;
        public string METHOD_OF_COMM_ID
        {
            get { return _METHOD_OF_COMM_ID; }
            set { _METHOD_OF_COMM_ID = value; }
        }

        private string _REFERAL_CLASS_ID;
        public string REFERAL_CLASS_ID
        {
            get { return _REFERAL_CLASS_ID; }
            set { _REFERAL_CLASS_ID = value; }
        }

        private string _REFERAL_CLASS_NAME;
        public string REFERAL_CLASS_NAME
        {
            get { return _REFERAL_CLASS_NAME; }
            set { _REFERAL_CLASS_NAME = value; }
        }

        private string _IS_VIP;
        public string IS_VIP
        {
            get { return _IS_VIP; }
            set { _IS_VIP = value; }
        }

        private string _VIP_TYPE_ID;
        public string VIP_TYPE_ID
        {
            get { return _VIP_TYPE_ID; }
            set { _VIP_TYPE_ID = value; }
        }

        private string _IS_STOP_ALERT;
        public string IS_STOP_ALERT
        {
            get { return _IS_STOP_ALERT; }
            set { _IS_STOP_ALERT = value; }
        }

        private string _REMARKS;
        public string REMARKS
        {
            get { return _REMARKS; }
            set { _REMARKS = value; }
        }

        private string _IS_NEW_BORN;
        public string IS_NEW_BORN
        {
            get { return _IS_NEW_BORN; }
            set { _IS_NEW_BORN = value; }
        }
        private string _ADDRESS1;
        public string ADDRESS1
        {
            get { return _ADDRESS1; }
            set { _ADDRESS1 = value; }
        }

        private int _VALIDATION_RULE_ID;

        public int VALIDATION_RULE_ID
        {
            get { return _VALIDATION_RULE_ID; }
            set { _VALIDATION_RULE_ID = value; }
        }


        private string _COMPANY_NAME;

        public string COMPANY_NAME
        {
            get { return _COMPANY_NAME; }
            set { _COMPANY_NAME = value; }
        }

        //private int _company_id;
        //public int COMPANY_ID
        //{
        //    set { _company_id = value; }
        //    get { return _company_id; }
        //}
        private string _service_name;
        public string SERVICE_NAME
        {
            set { _service_name = value; }
            get { return _service_name; }
        }

        private int quantity;

        public int QUANTITY
        {
            get { return quantity; }
            set { quantity = value; }
        }

        private int _service_id;
        public int SERVICE_ID
        {
            set { _service_id = value; }
            get { return _service_id; }
        }

        private int _REFERAL_CATEGORY_ID;

        public int REFERAL_CATEGORY_ID
        {
            get { return _REFERAL_CATEGORY_ID; }
            set { _REFERAL_CATEGORY_ID = value; }
        }

        private int _REFERAL_CATEGORY_REV_NO;

        public int REFERAL_CATEGORY_REV_NO
        {
            get { return _REFERAL_CATEGORY_REV_NO; }
            set { _REFERAL_CATEGORY_REV_NO = value; }
        }

        private string _REFERAL_CATEGORY_CD;

        public string REFERAL_CATEGORY_CD
        {
            get { return _REFERAL_CATEGORY_CD; }
            set { _REFERAL_CATEGORY_CD = value; }
        }

        private string _REFERAL_CATEGORY_NAME;

        public string REFERAL_CATEGORY_NAME
        {
            get { return _REFERAL_CATEGORY_NAME; }
            set { _REFERAL_CATEGORY_NAME = value; }
        }

        private string _REFERAL_CATEGORY_DESC;

        public string REFERAL_CATEGORY_DESC
        {
            get { return _REFERAL_CATEGORY_DESC; }
            set { _REFERAL_CATEGORY_DESC = value; }
        }

        private int _REFRL_CLS_SRC_ID;

        public int REFRL_CLS_SRC_ID
        {
            get { return _REFRL_CLS_SRC_ID; }
            set { _REFRL_CLS_SRC_ID = value; }
        }

        private int _REFRL_CLS_SRC_REV_NO;

        public int REFRL_CLS_SRC_REV_NO
        {
            get { return _REFRL_CLS_SRC_REV_NO; }
            set { _REFRL_CLS_SRC_REV_NO = value; }
        }

        private int _CAT_REFRL_SOURCE_ID;

        public int CAT_REFRL_SOURCE_ID
        {
            get { return _CAT_REFRL_SOURCE_ID; }
            set { _CAT_REFRL_SOURCE_ID = value; }
        }

        private int _CAT_REFRL_ID;

        public int CAT_REFRL_ID
        {
            get { return _CAT_REFRL_ID; }
            set { _CAT_REFRL_ID = value; }
        }

        private int _SRC_REFRL_SOURCE_ID;

        public int SRC_REFRL_SOURCE_ID
        {
            get { return _SRC_REFRL_SOURCE_ID; }
            set { _SRC_REFRL_SOURCE_ID = value; }
        }

        private int _SRC_REFRL_ID;

        public int SRC_REFRL_ID
        {
            get { return _SRC_REFRL_ID; }
            set { _SRC_REFRL_ID = value; }
        }

        private string _MODIFY_DT;

        public string MODIFY_DT
        {
            get { return _MODIFY_DT; }
            set { _MODIFY_DT = value; }
        }

        private string _CREATE_DT;

        public string CREATE_DT
        {
            get { return _CREATE_DT; }
            set { _CREATE_DT = value; }
        }


        private int _REFERRED_TO_ID;

        public int REFERRED_TO_ID
        {
            get { return _REFERRED_TO_ID; }
            set { _REFERRED_TO_ID = value; }
        }

        private string _REFERRED_TO_NAME;

        public string REFERRED_TO_NAME
        {
            get { return _REFERRED_TO_NAME; }
            set { _REFERRED_TO_NAME = value; }
        }

        private int _REFERAL_CATEGORY_TO_ID;

        public int REFERAL_CATEGORY_TO_ID
        {
            get { return _REFERAL_CATEGORY_TO_ID; }
            set { _REFERAL_CATEGORY_TO_ID = value; }
        }

        private string _REFERAL_CATEGORY_TO_NAME;

        public string REFERAL_CATEGORY_TO_NAME
        {
            get { return _REFERAL_CATEGORY_TO_NAME; }
            set { _REFERAL_CATEGORY_TO_NAME = value; }
        }

        private int _REFERAL_SOURCE_TO_ID;

        public int REFERAL_SOURCE_TO_ID
        {
            get { return _REFERAL_SOURCE_TO_ID; }
            set { _REFERAL_SOURCE_TO_ID = value; }
        }

        private string _REFERAL_SOURCE_TO_NAME;

        public string REFERAL_SOURCE_TO_NAME
        {
            get { return _REFERAL_SOURCE_TO_NAME; }
            set { _REFERAL_SOURCE_TO_NAME = value; }
        }

        private string _REFERAL_REMARKS;

        public string REFERAL_REMARKS
        {
            get { return _REFERAL_REMARKS; }
            set { _REFERAL_REMARKS = value; }
        }

        private string _IS_SMS;

        public string IS_SMS
        {
            get { return _IS_SMS; }
            set { _IS_SMS = value; }
        }

        private string _IS_LETTER;

        public string IS_LETTER
        {
            get { return _IS_LETTER; }
            set { _IS_LETTER = value; }
        }

        private string _SRC_REFRL_CD;

        public string SRC_REFRL_CD
        {
            get { return _SRC_REFRL_CD; }
            set { _SRC_REFRL_CD = value; }
        }

        private string _SRC_REFRL_NAME;

        public string SRC_REFRL_NAME
        {
            get { return _SRC_REFRL_NAME; }
            set { _SRC_REFRL_NAME = value; }
        }

        private string _CAT_REFERAL_SOURCE_NAME;

        public string CAT_REFERAL_SOURCE_NAME
        {
            get { return _CAT_REFERAL_SOURCE_NAME; }
            set { _CAT_REFERAL_SOURCE_NAME = value; }
        }


        private string _REFERAL_SOURCE_NAME;

        public string REFERAL_SOURCE_NAME1
        {
            get { return _REFERAL_SOURCE_NAME; }
            set { _REFERAL_SOURCE_NAME = value; }
        }

        private int _REFRL_CAT_SRC_ID;

        public int REFRL_CAT_SRC_ID
        {
            get { return _REFRL_CAT_SRC_ID; }
            set { _REFRL_CAT_SRC_ID = value; }
        }

        private int _REFRL_CAT_SRC_REV_NO;

        public int REFRL_CAT_SRC_REV_NO
        {
            get { return _REFRL_CAT_SRC_REV_NO; }
            set { _REFRL_CAT_SRC_REV_NO = value; }
        }

        private string areaname;

        public string AREANAME
        {
            get { return areaname; }
            set { areaname = value; }
        }
        private int referal_source_id;

        public int REFERAL_SOURCE_ID
        {
            get { return referal_source_id; }
            set { referal_source_id = value; }
        }
        private string referal_source_name;

        public string REFERAL_SOURCE_NAME
        {
            get { return referal_source_name; }
            set { referal_source_name = value; }
        }
        private string referal_mobileno;

        public string REFERAL_MOBILENO
        {
            get { return referal_mobileno; }
            set { referal_mobileno = value; }
        }
        private string method_of_communication;

        public string METHOD_OF_COMMUNICATION
        {
            get { return method_of_communication; }
            set { method_of_communication = value; }
        }

        private string consultant_name;

        public string CONSULTANT_NAME
        {
            get { return consultant_name; }
            set { consultant_name = value; }
        }
        private string doctor_id;

        public string DOCTOR_ID
        {
            get { return doctor_id; }
            set { doctor_id = value; }
        }
        private string city;

        public string CITY
        {
            get { return city; }
            set { city = value; }
        }
        private string location_name;

        public string LOCATION_NAME
        {
            get { return location_name; }
            set { location_name = value; }
        }


    }
}
