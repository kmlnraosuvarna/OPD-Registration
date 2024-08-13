using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Locations : LOCATION_DET
    {
        private string Location_ver_id;
        public string LOCATION_VERID
        {
            get { return Location_ver_id; }
            set { Location_ver_id = value; }
        }

        private int location_seq_id;
        public int Location_Seq_Id
        {
            get { return location_seq_id; }
            set { location_seq_id = value; }
        }

        private int location_id1;
        public int LOCATION_ID1
        {
            get { return location_id1; }
            set { location_id1 = value; }
        }
        private int _customer_type_id;

        public int CUSTOMER_TYPE_ID
        {
            get { return _customer_type_id; }
            set { _customer_type_id = value; }
        }
       
        private string location_cd;
        public string LOCATION_CD
        {
            get { return location_cd; }
            set { location_cd = value; }
        }

        private string location_name;
        public string LOCATION_NAME
        {
            get { return location_name; }
            set { location_name = value; }
        }

        private string location_desc;
        public string LOCATION_DESC
        {
            get { return location_desc; }
            set { location_desc = value; }
        }
        private int count;

        public int COUNT
        {
            get { return count; }
            set { count = value; }
        }
        private string createdt;

        public string CREATE_DT
        {
            get { return createdt; }
            set { createdt = value; }
        }
        private string modifydt;

        public string MODIFY_DT
        {
            get { return modifydt; }
            set { modifydt = value; }
        }
        private int createby;

        public int CREATE_BY
        {
            get { return createby; }
            set { createby = value; }
        }
        private int modifyby;

        public int MODIFY_BY
        {
            get { return modifyby; }
            set { modifyby = value; }
        }
        
        private string _customer_type_name;

        public string CUSTOMER_TYPE_NAME
        {
            get { return _customer_type_name; }
            set { _customer_type_name = value; }
        }
        private string _customer_type_cd;

        public string CUSTOMER_TYPE_CD
        {
            get { return _customer_type_cd; }
            set { _customer_type_cd = value; }
        }
        private string _customer_type_desc;

        public string CUSTOMER_TYPE_DESC
        {
            get { return _customer_type_desc; }
            set { _customer_type_desc = value; }
        }
        //private int Location_id;

        //public int LOCATION_ID
        //{
        //    get { return Location_id; }
        //    set { Location_id = value; }
        //}
        //private string Location_name;

        //public string LOCATION_NAME
        //{
        //    get { return Location_name; }
        //    set { Location_name = value; }
        //}
        //private string Location_desc;

        //public string LOCATION_DESC
        //{
        //    get { return Location_desc; }
        //    set { Location_desc = value; }
        //}
        private int Location_rev_no;

        public int LOCATION_REV_NO
        {
            get { return Location_rev_no; }
            set { Location_rev_no = value; }
        }
        private int org_id;

        public int ORG_ID
        {
            get { return org_id; }
            set { org_id = value; }
        }
        private int grp_id;

        public int GRP_ID
        {
            get { return grp_id; }
            set { grp_id = value; }
        }
        private string record_status;

        public string RECORD_STATUS
        {
            get { return record_status; }
            set { record_status = value; }
        }
        // public string Location_VerID
        //{
        //    get { return Location_ver_id; }
        //    set { Location_ver_id = value; }
        //}

        //private int location_seq_id;
        //public int Location_Seq_Id
        //{
        //    get { return location_seq_id; }
        //    set { location_seq_id = value; }
        //}

        //private int location_id;
        //public int Location_Id
        //{
        //    get { return location_id; }
        //    set { location_id = value; }
        //}

        //private string location_cd;
        //public string Location_CD
        //{
        //    get { return location_cd; }
        //    set { location_cd = value; }
        //}

        //private string location_name;
        //public string Location_Name
        //{
        //    get { return location_name; }
        //    set { location_name = value; }
        //}

        //private string location_desc;
        //public string Location_Desc
        //{
        //    get { return location_desc; }
        //    set { location_desc = value; }
        //}
        //private int count;

        //public int COUNT
        //{
        //    get { return count; }
        //    set { count = value; }
        //}
        //private string createdt;

        //public string CREATE_DT
        //{
        //    get { return createdt; }
        //    set { createdt = value; }
        //}
        //private string modifydt;

        //public string MODIFY_DT
        //{
        //    get { return modifydt; }
        //    set { modifydt = value; }
        //}
        //private int createby;

        //public int CREATE_BY
        //{
        //    get { return createby; }
        //    set { createby = value; }
        //}
        //private int modifyby;

        //public int MODIFY_BY
        //{
        //    get { return modifyby; }
        //    set { modifyby = value; }
        //}
        //private int Location_id;

        //public int LOCATION_ID
        //{
        //    get { return Location_id; }
        //    set { Location_id = value; }
        //}
        //private string Location_name;

        //public string LOCATION_NAME
        //{
        //    get { return Location_name; }
        //    set { Location_name = value; }
        //}
        //private string Location_desc;

        //public string LOCATION_DESC
        //{
        //    get { return Location_desc; }
        //    set { Location_desc = value; }
        //}
        //private int Location_rev_no;

        //public int LOCATION_REV_NO
        //{
        //    get { return Location_rev_no; }
        //    set { Location_rev_no = value; }
        //}
        //private int org_id;

        //public int ORG_ID
        //{
        //    get { return org_id; }
        //    set { org_id = value; }
        //}
        //private int grp_id;

        //public int GRP_ID
        //{
        //    get { return grp_id; }
        //    set { grp_id = value; }
        //}
        //private string record_status;

        //public string RECORD_STATUS
        //{
        //    get { return record_status; }
        //    set { record_status = value; }
        //}
        private string _transaction_dt;

        public string TRANSACTION_DT
        {
            get { return _transaction_dt; }
            set { _transaction_dt = value; }
        }
        private string _is_credit_limit;

        public string IS_CREDIT_LIMIT
        {
            get { return _is_credit_limit; }
            set { _is_credit_limit = value; }
        }
        private string _employee_name;

        public string EMPLOYEE_NAME
        {
            get { return _employee_name; }
            set { _employee_name = value; }
        }

        private string _frn_country_name;

        public string FRN_COUNTRY_NAME
        {
            get { return _frn_country_name; }
            set { _frn_country_name = value; }
        }

        private string _opening_balance;

        public string OPENING_BALANCE
        {
            get { return _opening_balance; }
            set { _opening_balance = value; }
        }

        private string _bill_amount;

        public string BILL_AMOUNT
        {
            get { return _bill_amount; }
            set { _bill_amount = value; }
        }

        private string _closing_balance;

        public string CLOSING_BALANCE
        {
            get { return _closing_balance; }
            set { _closing_balance = value; }
        }

        private string _status;

        public string STATUS
        {
            get { return _status; }
            set { _status = value; }
        }

        private string _isdirectclient;

        public string ISDIRECTCLIENT
        {
            get { return _isdirectclient; }
            set { _isdirectclient = value; }
        }
        private string _cre_from_dt;

        public string CRE_FROM_DT
        {
            get { return _cre_from_dt; }
            set { _cre_from_dt = value; }
        }
        private string _cre_to_dt;

        public string CRE_TO_DT
        {
            get { return _cre_to_dt; }
            set { _cre_to_dt = value; }
        }

        private int _report_mngr_id;

        public int REPORT_MNGR_ID
        {
            get { return _report_mngr_id; }
            set { _report_mngr_id = value; }
        }
        private string _create_name;

        public string CREATE_NAME
        {
            get { return _create_name; }
            set { _create_name = value; }
        }
        private string _modify_name;

        public string MODIFY_NAME
        {
            get { return _modify_name; }
            set { _modify_name = value; }
        }
        private string _is_regional_lab;

        public string IS_REGIONAL_LAB
        {
            get { return _is_regional_lab; }
            set { _is_regional_lab = value; }
        }
        private string _is_centre_lab;

        public string IS_CENTRE_LAB
        {
            get { return _is_centre_lab; }
            set { _is_centre_lab = value; }
        }
        private int _regional_lab_id;

        public int REGIONAL_LAB_ID
        {
            get { return _regional_lab_id; }
            set { _regional_lab_id = value; }
        }
        private string _regional_lab_name;

        public string REGIONAL_LAB_NAME
        {
            get { return _regional_lab_name; }
            set { _regional_lab_name = value; }
        }

        private string _is_sms_reqd;
        public string IS_SMS_REQD
        {
            get { return _is_sms_reqd; }
            set { _is_sms_reqd=value;}
        }
        private string _LAST_PAYMENT_AMOUNT;

        public string LAST_PAYMENT_AMOUNT
        {
            get { return _LAST_PAYMENT_AMOUNT; }
            set { _LAST_PAYMENT_AMOUNT = value; }
        }

        private string _LAST_PAYMENT_DATE;

        public string LAST_PAYMENT_DATE
        {
            get { return _LAST_PAYMENT_DATE; }
            set { _LAST_PAYMENT_DATE = value; }
        }

        private string _SAMPLES_COUNT;

        public string SAMPLES_COUNT
        {
            get { return _SAMPLES_COUNT; }
            set { _SAMPLES_COUNT = value; }
        }
        private string _LOCK_STATUS;

        public string LOCK_STATUS
        {
            get { return _LOCK_STATUS; }
            set { _LOCK_STATUS = value; }
        }
        private string _zone_id;

        public string ZONE_ID
        {
            get { return _zone_id; }
            set { _zone_id = value; }
        }
        private string _zone_cd;

        public string ZONE_CD
        {
            get { return _zone_cd; }
            set { _zone_cd = value; }
        }
        private string _zone_name;

        public string ZONE_NAME
        {
            get { return _zone_name; }
            set { _zone_name = value; }
        }
        private string _zone_desc;

        public string ZONE_DESC
        {
            get { return _zone_desc; }
            set { _zone_desc = value; }
        }
        private int time_zone_id;

        public int TIME_ZONE_ID
        {
            get { return time_zone_id; }
            set { time_zone_id = value; }
        }
        private int _category_type_id;

        public int CATEGORY_TYPE_ID
        {
            get { return _category_type_id; }
            set { _category_type_id = value; }
        }
        private string _category_id;

        public string CATEGORY_ID
        {
            get { return _category_id; }
            set { _category_id = value; }
        }
        private string _category_name;

        public string CATEGORY_NAME
        {
            get { return _category_name; }
            set { _category_name = value; }
        }
        private string _category_cd;

        public string CATEGORY_CD
        {
            get { return _category_cd; }
            set { _category_cd = value; }
        }
        private string _location_type_id;

        public string LOCATION_TYPE_ID
        {
            get { return _location_type_id; }
            set { _location_type_id = value; }
        }
        private string _location_type_name;

        public string LOCATION_TYPE_NAME
        {
            get { return _location_type_name; }
            set { _location_type_name = value; }
        }
        private string _location_type_desc;

        public string LOCATION_TYPE_DESC
        {
            get { return _location_type_desc; }
            set { _location_type_desc = value; }
        }
        private string _location_type_cd;

        public string LOCATION_TYPE_CD
        {
            get { return _location_type_cd; }
            set { _location_type_cd = value; }
        }
        private string _bill_type_id;

        public string BILL_TYPE_ID
        {
            get { return _bill_type_id; }
            set { _bill_type_id = value; }
        }
        private string _cr_reference_id;

        public string CR_REFERENCE_ID
        {
            get { return _cr_reference_id; }
            set { _cr_reference_id = value; }
        }
        private string _cr_reference_type_id;

        public string CR_REFERENCE_TYPE_ID
        {
            get { return _cr_reference_type_id; }
            set { _cr_reference_type_id = value; }
        }
        private string _cmp_name;

        public string CMP_NAME
        {
            get { return _cmp_name; }
            set { _cmp_name = value; }
        }
        private string _ref_name;

        public string REF_NAME
        {
            get { return _ref_name; }
            set { _ref_name = value; }
        }
        private int _logistic_tat_uom_id;

        public int LOGISTIC_TAT_UOM_ID
        {
            get { return _logistic_tat_uom_id; }
            set { _logistic_tat_uom_id = value; }
        }
        private int _logistic_tat_time;

        public int LOGISTIC_TAT_TIME
        {
            get { return _logistic_tat_time; }
            set { _logistic_tat_time = value; }
        }
        private string _is_report_head;

        public string IS_REPORT_HEAD
        {
            get { return _is_report_head; }
            set { _is_report_head = value; }
        }
        private string _is_report_without_head;

        public string IS_REPORT_WITHOUT_HEAD
        {
            get { return _is_report_without_head; }
            set { _is_report_without_head = value; }
        }
        private int _MIG_ID;

        public int MIG_ID
        {
            get { return _MIG_ID; }
            set { _MIG_ID = value; }
        }

        private int barcode_to_range;

        public int BARCODE_TO_RANGE
        {
            get { return barcode_to_range; }
            set { barcode_to_range = value; }
        }

        private string _PAT_ORG_LVL;

        public string PAT_ORG_LVL
        {
            get { return _PAT_ORG_LVL; }
            set { _PAT_ORG_LVL = value; }
        }

        private string _SRV_ORG_LVL;

        public string SRV_ORG_LVL
        {
            get { return _SRV_ORG_LVL; }
            set { _SRV_ORG_LVL = value; }
        }

        private string _MED_ORG_LVL;

        public string MED_ORG_LVL
        {
            get { return _MED_ORG_LVL; }
            set { _MED_ORG_LVL = value; }
        }

        private int _I_ORG_ID;

        public int I_ORG_ID
        {
            get { return _I_ORG_ID; }
            set { _I_ORG_ID = value; }
        }

        private int _I_LOC_ID;

        public int I_LOC_ID
        {
            get { return _I_LOC_ID; }
            set { _I_LOC_ID = value; }
        }
        private int _SEED_VAL;

        public int SEED_VAL
        {
            get { return _SEED_VAL; }
            set { _SEED_VAL = value; }
        }

        private string _GST_NO;

        public string GST_NO
        {
            get { return _GST_NO; }
            set { _GST_NO = value; }
        }

        private string _CIN_NO;

        public string CIN_NO
        {
            get { return _CIN_NO; }
            set { _CIN_NO = value; }
        }

        private string _PAN_NO;

        public string PAN_NO
        {
            get { return _PAN_NO; }
            set { _PAN_NO = value; }
        }

        private int _TOT_RECORD_CNT;

        public int TOT_RECORD_CNT
        {
            get { return _TOT_RECORD_CNT; }
            set { _TOT_RECORD_CNT = value; }
        }
        public string TRANSACTIONTYPE { get; set; }
        public string FLAG { get; set; }
        private int _location_id;
        public int LOCATION_ID
        {
            set { _location_id = value; }
            get { return _location_id; }
        }
        public string TRANSACTIONMAPP { get; set; }
    }
    }

