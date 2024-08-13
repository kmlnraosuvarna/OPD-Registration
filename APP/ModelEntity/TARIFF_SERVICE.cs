using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


    namespace EzHms.ModelEntity
    {
       [Serializable]
       public  class TARIFF_SERVICE:SERVICE_PRICE
        {
            private int _service_id;
            public int SERVICE_ID
            {
                set { _service_id = value; }
                get { return _service_id; }
            }
            private int _service_rev_no;
            public int SERVICE_REV_NO
            {
                set { _service_rev_no = value; }
                get { return _service_rev_no; }
            }
            private int _tariff_id;
            public int TARIFF_ID
            {
                set { _tariff_id = value; }
                get { return _tariff_id; }
            }
            private int _tariff_rev_no;
            public int TARIFF_REV_NO
            {
                set { _tariff_rev_no = value; }
                get { return _tariff_rev_no; }
            }
            private string _service_cd;
            public string SERVICE_CD
            {
                set { _service_cd = value; }
                get { return _service_cd; }
            }
            private string _service_name;
            public string SERVICE_NAME
            {
                set { _service_name = value; }
                get { return _service_name; }
            }
            private string _service_desc;
            public string SERVICE_DESC
            {
                set { _service_desc = value; }
                get { return _service_desc; }
            }
            private int _service_group_id;
            public int SERVICE_GROUP_ID
            {
                set { _service_group_id = value; }
                get { return _service_group_id; }
            }
            private int _service_group_rev_no;
            public int SERVICE_GROUP_REV_NO
            {
                set { _service_group_rev_no = value; }
                get { return _service_group_rev_no; }
            }
            private int _billi_head_id;
            public int BILLI_HEAD_ID
            {
                set { _billi_head_id = value; }
                get { return _billi_head_id; }
            }
            private int _bill_head_rev_no;
            public int BILL_HEAD_REV_NO
            {
                set { _bill_head_rev_no = value; }
                get { return _bill_head_rev_no; }
            }
            private int _service_type_id;
            public int SERVICE_TYPE_ID
            {
                set { _service_type_id = value; }
                get { return _service_type_id; }
            }
            private int _service_type_rev_no;
            public int SERVICE_TYPE_REV_NO
            {
                set { _service_type_rev_no = value; }
                get { return _service_type_rev_no; }
            }
            private string _is_sample_needed;
            public string IS_SAMPLE_NEEDED
            {
                set { _is_sample_needed = value; }
                get { return _is_sample_needed; }
            }
            private string _is_diet;
            public string IS_DIET
            {
                set { _is_diet = value; }
                get { return _is_diet; }
            }
            private string _is_foreign_service;
            public string IS_FOREIGN_SERVICE
            {
                set { _is_foreign_service = value; }
                get { return _is_foreign_service; }
            }
            private int _price_class_id;
            public int PRICE_CLASS_ID
            {
                set { _price_class_id = value; }
                get { return _price_class_id; }
            }
            private int _price_class_rev_no;
            public int PRICE_CLASS_REV_NO
            {
                set { _price_class_rev_no = value; }
                get { return _price_class_rev_no; }
            }
            private int _coverage_id;
            public int COVERAGE_ID
            {
                set { _coverage_id = value; }
                get { return _coverage_id; }
            }
            private int _coverage_rev_no;
            public int COVERAGE_REV_NO
            {
                set { _coverage_rev_no = value; }
                get { return _coverage_rev_no; }
            }
            private int _payment_type_id;
            public int PAYMENT_TYPE_ID
            {
                set { _payment_type_id = value; }
                get { return _payment_type_id; }
            }
            private int _payment_type_rev_no;
            public int PAYMENT_TYPE_REV_NO
            {
                set { _payment_type_rev_no = value; }
                get { return _payment_type_rev_no; }
            }
            private int _general_service_id;
            public int GENERAL_SERVICE_ID
            {
                set { _general_service_id = value; }
                get { return _general_service_id; }
            }
            private int _general_service_rev_no;
            public int GENERAL_SERVICE_REV_NO
            {
                set { _general_service_rev_no = value; }
                get { return _general_service_rev_no; }
            }
            private string _effect_from_dt;
            public string EFFECT_FROM_DT
            {
                set { _effect_from_dt = value; }
                get { return _effect_from_dt; }
            }
            private string _effect_to_dt;
            public string EFFECT_TO_DT
            {
                set { _effect_to_dt = value; }
                get { return _effect_to_dt; }
            }
            private int _service_class_id;
            public int SERVICE_CLASS_ID
            {
                set { _service_class_id = value; }
                get { return _service_class_id; }
            }
            private int _service_class_rev_no;
            public int SERVICE_CLASS_REV_NO
            {
                set { _service_class_rev_no = value; }
                get { return _service_class_rev_no; }
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
            
           
           
            private string _is_flag;
            public string IS_FLAG
            {
                set { _is_flag = value; }
                get { return _is_flag; }
            }
            private string _price;
            public string PRICE
            {
                set { _price = value; }
                get { return _price; }
            }
            private int _pre_days;
            public int PRE_DAYS
            {
                set { _pre_days = value; }
                get { return _pre_days; }
            }
            private int _post_days;
            public int POST_DAYS
            {
                set { _post_days = value; }
                get { return _post_days; }
            }

            private TARIFF_SERVICE_COLL _tariff_service_coll;

            public TARIFF_SERVICE_COLL TARIFF_SERVICE_COLL
            {
                get { return _tariff_service_coll; }
                set { _tariff_service_coll = value; }
            }
            private string _save_status;

            public string SAVE_STATUS
            {
                get { return _save_status; }
                set { _save_status = value; }
            }
            private string _record_status;

            public string RECORD_STATUS
            {
                get { return _record_status; }
                set { _record_status = value; }
            }
            private string _service_group_name;

            public string SERVICE_GROUP_NAME
            {
                get { return _service_group_name; }
                set { _service_group_name = value; }
            }
            private string _general_service_name;

            public string GENERAL_SERVICE_NAME
            {
                get { return _general_service_name; }
                set { _general_service_name = value; }
            }


            private string _tariff_price = string.Empty;
            public string TARIFF_PRICE
            {
                get { return _tariff_price; }
                set { _tariff_price = value; }
            }


            private string _service_type_name = string.Empty;
            public string SERVICE_TYPE_NAME
            {
                get { return _service_type_name; }
                set { _service_type_name = value; }
            }
        }
    }


