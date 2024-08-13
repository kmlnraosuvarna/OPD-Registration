using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Service : LookUpSearch
    {
        //#region members

        //private int serviceID;
        //private string serviceCD;
        //private string serviceDESC;
        //private string serviceName;

        //private int serGroupID;       
        //private string serGroupDesc;       
        //private string serGroupCD;        
        //private string serGroupName;

        //private int deptcd;       

        //private int createdby;       
        //private int modifyby;
        //private int count;       
        //#endregion

        //#region Properties
        //public int ServiceID
        //{
        //    get { return serviceID; }
        //    set { serviceID = value; }
        //}
        //public string ServiceCD
        //{
        //    get { return serviceCD; }
        //    set { serviceCD = value; }
        //}
        //public string ServiceDESC
        //{
        //    get { return serviceDESC; }
        //    set { serviceDESC = value; }
        //}
        //public string ServiceName
        //{
        //    get { return serviceName; }
        //    set { serviceName = value; }
        //}
        //public int SerGroupID
        //{
        //    get { return serGroupID; }
        //    set { serGroupID = value; }
        //}
        //public string SerGroupDesc
        //{
        //    get { return serGroupDesc; }
        //    set { serGroupDesc = value; }
        //}
        //public string SerGroupCD
        //{
        //    get { return serGroupCD; }
        //    set { serGroupCD = value; }
        //}
        //public string SerGroupName
        //{
        //    get { return serGroupName; }
        //    set { serGroupName = value; }
        //}
        //public int Createdby
        //{
        //    get { return createdby; }
        //    set { createdby = value; }
        //}
        //public int Modifyby
        //{
        //    get { return modifyby; }
        //    set { modifyby = value; }
        //}
        //public int Count
        //{
        //    get { return count; }
        //    set { count = value; }
        //}
        //public int Deptcd
        //{
        //    get { return deptcd; }
        //    set { deptcd = value; }
        //}
        //#endregion
        private string pkg_inc_amount;

        public string PKG_INC_AMOUNT
        {
            get { return pkg_inc_amount; }
            set { pkg_inc_amount = value; }
        }

        private string _flag = string.Empty;
        public string FLAG
        {
            get { return _flag; }
            set { _flag = value; }
        }

        private string _service_group_id_str = string.Empty;
        public string SERVICE_GROUP_ID_STR
        {
            get { return _service_group_id_str; }
            set { _service_group_id_str = value; }
        }


        private string _service_type_id_str = string.Empty;
        public string SERVICE_TYPE_ID_STR
        {
            get { return _service_type_id_str; }
            set { _service_type_id_str = value; }
        }


        private string _ward_group_id_str = string.Empty;
        public string WARD_GROUP_ID_STR
        {
            get { return _ward_group_id_str; }
            set { _ward_group_id_str = value; }
        }

        private int copy_tariff_id;

        public int COPY_TARIFF_ID
        {
            get { return copy_tariff_id; }
            set { copy_tariff_id = value; }
        }
        private int _CMP_SRV_ID;

        public int CMP_SRV_ID
        {
            get { return _CMP_SRV_ID; }
            set { _CMP_SRV_ID = value; }
        }

        private string tariff_price;

        public string TARIFF_PRICE
        {
            get { return tariff_price; }
            set { tariff_price = value; }
        }

        private string general_service_name;

        public string GENERAL_SERVICE_NAME
        {
            get { return general_service_name; }
            set { general_service_name = value; }
        }
        private string tariff_service_cd;

        public string TARIFF_SERVICE_CD
        {
            get { return tariff_service_cd; }
            set { tariff_service_cd = value; }
        }
        private string tariff_service_name;

        public string TARIFF_SERVICE_NAME
        {
            get { return tariff_service_name; }
            set { tariff_service_name = value; }
        }
        private string general_service_cd;

        public string GENERAL_SERVICE_CD
        {
            get { return general_service_cd; }
            set { general_service_cd = value; }
        }
        private int quantity;

        public int QUANTITY
        {
            get { return quantity; }
            set { quantity = value; }
        }

        private string _PARTNER_NAME;

        public string PARTNER_NAME
        {
            get { return _PARTNER_NAME; }
            set { _PARTNER_NAME = value; }
        }
        private int _BUS_PRTNR_SRV_PRICE_ID;

        public int BUS_PRTNR_SRV_PRICE_ID
        {
            get { return _BUS_PRTNR_SRV_PRICE_ID; }
            set { _BUS_PRTNR_SRV_PRICE_ID = value; }
        }
        private int _BUSINESS_PARTNER_ID;

        public int BUSINESS_PARTNER_ID
        {
            get { return _BUSINESS_PARTNER_ID; }
            set { _BUSINESS_PARTNER_ID = value; }
        }


        private string _PRICE = string.Empty;

        public string PRICE
        {
            get { return _PRICE; }
            set { _PRICE = value; }
        }
        private int _BUSINESS_PARTNER_REV_NO;

        public int BUSINESS_PARTNER_REV_NO
        {
            get { return _BUSINESS_PARTNER_REV_NO; }
            set { _BUSINESS_PARTNER_REV_NO = value; }
        }

        private int _BUS_PRTNR_SRV_PRICE_REV_NO;

        public int BUS_PRTNR_SRV_PRICE_REV_NO
        {
            get { return _BUS_PRTNR_SRV_PRICE_REV_NO; }
            set { _BUS_PRTNR_SRV_PRICE_REV_NO = value; }
        }
        private string _SERVICE_PRICE;

        public string SERVICE_PRICE
        {
            get { return _SERVICE_PRICE; }
            set { _SERVICE_PRICE = value; }
        }
        private string _SERVICE_GROUP_CD;

        public string SERVICE_GROUP_CD
        {
            get { return _SERVICE_GROUP_CD; }
            set { _SERVICE_GROUP_CD = value; }
        }
        private string _ServicePrice;

        public string ServicePrice
        {
            get { return _ServicePrice; }
            set { _ServicePrice = value; }
        }
        private int _service_id;
        public int SERVICE_ID
        {
            set { _service_id = value; }
            get { return _service_id; }
        }
        private string _service_cd;
        public string SERVICE_CD
        {
            set { _service_cd = value; }
            get { return _service_cd; }
        }


        private string _tariff_name = string.Empty;

        public string TARIFF_NAME
        {
            get { return _tariff_name; }
            set { _tariff_name = value; }
        }

        private string _service_class_name = string.Empty;

        public string SERVICE_CLASS_NAME
        {
            get { return _service_class_name; }
            set { _service_class_name = value; }
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
        private int _hospital_id;
        public int HOSPITAL_ID
        {
            set { _hospital_id = value; }
            get { return _hospital_id; }
        }
        private int _hospital_rev_no;
        public int HOSPITAL_REV_NO
        {
            set { _hospital_rev_no = value; }
            get { return _hospital_rev_no; }
        }

        private string _service_group_name = string.Empty;
        public string SERVICE_GROUP_NAME
        {
            get
            {
                return _service_group_name;
            }
            set
            {
                _service_group_name = value;
            }
        }
        private string _service_type_name = string.Empty;
        public string SERVICE_TYPE_NAME
        {
            get { return _service_type_name; }
            set { _service_type_name = value; }
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
        private int _billing_head_id;
        public int BILLING_HEAD_ID
        {
            set { _billing_head_id = value; }
            get { return _billing_head_id; }
        }
        private int _billing_head_rev_no;
        public int BILLING_HEAD_REV_NO
        {
            set { _billing_head_rev_no = value; }
            get { return _billing_head_rev_no; }
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
        private int _parent_service_id;
        public int PARENT_SERVICE_ID
        {
            set { _parent_service_id = value; }
            get { return _parent_service_id; }
        }
        private int _parent_service_rev_no;
        public int PARENT_SERVICE_REV_NO
        {
            set { _parent_service_rev_no = value; }
            get { return _parent_service_rev_no; }
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

        private string _isassigned;
        public string ISASSIGNED
        {
            set { _isassigned = value; }
            get { return _isassigned; }
        }
        private string _isactive;
        public string ISACTIVE
        {
            set { _isactive = value; }
            get { return _isactive; }
        }
        private string _service_dispname;
        public string SERVICE_DISPNAME
        {
            set { _service_dispname = value; }
            get { return _service_dispname; }
        }
        private string _service_unicode;
        public string SERVICE_UNICODE
        {
            set { _service_unicode = value; }
            get { return _service_unicode; }
        }
        private int _serviceclass_id;
        public int SERVICECLASS_ID
        {
            set { _serviceclass_id = value; }
            get { return _serviceclass_id; }
        }
        private int _serviceclass_rev_no;
        public int SERVICECLASS_REV_NO
        {
            set { _serviceclass_rev_no = value; }
            get { return _serviceclass_rev_no; }
        }
        private int _service_rev_no;
        public int SERVICE_REV_NO
        {
            set { _service_rev_no = value; }
            get { return _service_rev_no; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _service_sub_group_id;
        public int SERVICE_SUB_GROUP_ID
        {
            set { _service_sub_group_id = value; }
            get { return _service_sub_group_id; }
        }
        private int _service_sub_group_rev_no;
        public int SERVICE_SUB_GROUP_REV_NO
        {
            set { _service_sub_group_rev_no = value; }
            get { return _service_sub_group_rev_no; }
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
        private string _first;

        public string FIRST
        {
            get { return _first; }
            set { _first = value; }
        }
        private string _next;

        public string NEXT
        {
            get { return _next; }
            set { _next = value; }
        }
        private string _previous;

        public string PREVIOUS
        {
            get { return _previous; }
            set { _previous = value; }
        }
        private string _last;

        public string LAST
        {
            get { return _last; }
            set { _last = value; }
        }

        private int _service_class_id = 0;

        public int SERVICE_CLASS_ID
        {
            get { return _service_class_id; }
            set { _service_class_id = value; }
        }

        private string _doctor_id;

        public string DOCTOR_ID
        {
            get { return _doctor_id; }
            set { _doctor_id = value; }
        }
        private int clinical_history_id;

        public int CLINICAL_HISTORY_ID
        {
            get { return clinical_history_id; }
            set { clinical_history_id = value; }
        }
        private string medication_name;

        public string MEDICATION_NAME
        {
            get { return medication_name; }
            set { medication_name = value; }
        }
        private string medication_desc;

        public string MEDICATION_DESC
        {
            get { return medication_desc; }
            set { medication_desc = value; }
        }
        private int medication_id;

        public int MEDICATION_ID
        {
            get { return medication_id; }
            set { medication_id = value; }
        }
        private string medication_rev_no;

        public string MEDICATION_REV_NO
        {
            get { return medication_rev_no; }
            set { medication_rev_no = value; }
        }
        private string _create_by;
        public string CREATE_BY
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

        private string _modify_by;
        public string MODIFY_BY
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
        private string _service_price_id;

        public string SERVICE_PRICE_ID
        {
            get { return _service_price_id; }
            set { _service_price_id = value; }
        }
        private string _org_price;

        public string ORG_PRICE
        {
            get { return _org_price; }
            set { _org_price = value; }
        }
        private string _doctor_price;

        public string DOCTOR_PRICE
        {
            get { return _doctor_price; }
            set { _doctor_price = value; }
        }
        private string _patient_class_id;

        public string PATIENT_CLASS_ID
        {
            get { return _patient_class_id; }
            set { _patient_class_id = value; }
        }
        private string _con_type_id;

        public string CONSULTATION_TYPE_ID
        {
            get { return _con_type_id; }
            set { _con_type_id = value; }
        }
        private string _emergency_price;

        public string EMERGENCY_PRICE
        {
            get { return _emergency_price; }
            set { _emergency_price = value; }
        }
        private string _is_clinical_hist_req;

        public string IS_CLINICAL_HIST_REQ
        {
            get { return _is_clinical_hist_req; }
            set { _is_clinical_hist_req = value; }
        }
        private string _srv_gender_id;

        public string SRV_GENDER_ID
        {
            get { return _srv_gender_id; }
            set { _srv_gender_id = value; }
        }
        private string _hist_type;

        public string HISTORY_TYPE
        {
            get { return _hist_type; }
            set { _hist_type = value; }
        }
        private string _hist_type_id;

        public string HISTORY_TYPE_ID
        {
            get { return _hist_type_id; }
            set { _hist_type_id = value; }
        }
        private string _min_price;

        public string MIN_PRICE
        {
            get { return _min_price; }
            set { _min_price = value; }
        }
        private string _max_price;

        public string MAX_PRICE
        {
            get { return _max_price; }
            set { _max_price = value; }
        }
        private string _no_need_srv;

        public string NO_NEED_SRV
        {
            get { return _no_need_srv; }
            set { _no_need_srv = value; }
        }
        private string _concern_forn_req;

        public string CONCERN_FORM_REQ
        {
            get { return _concern_forn_req; }
            set { _concern_forn_req = value; }
        }
        private string _priv_srv_post_dt;

        public string PRIV_SRV_POSTED_DT
        {
            get { return _priv_srv_post_dt; }
            set { _priv_srv_post_dt = value; }
        }
        private string _no_need_days;

        public string NO_NEED_DAYS
        {
            get { return _no_need_days; }
            set { _no_need_days = value; }
        }
        private string _qty_edit;

        public string QYT_EDIT
        {
            get { return _qty_edit; }
            set { _qty_edit = value; }
        }
        private string _rate_edit;

        public string RATE_EDIT
        {
            get { return _rate_edit; }
            set { _rate_edit = value; }
        }
        private string _cmp_disc_pcnt;

        public string CMP_DISC_PCNT
        {
            get { return _cmp_disc_pcnt; }
            set { _cmp_disc_pcnt = value; }
        }
        private string _emp_percent;

        public string EMP_PERCENT
        {
            get { return _emp_percent; }
            set { _emp_percent = value; }
        }
        private string _org_percent;

        public string ORG_PERCENT
        {
            get { return _org_percent; }
            set { _org_percent = value; }
        }
        private string _emp_price;

        public string EMP_PRICE
        {
            get { return _emp_price; }
            set { _emp_price = value; }
        }
        private string _from_days;

        public string FROM_DAYS
        {
            get { return _from_days; }
            set { _from_days = value; }
        }
        private string _to_days;

        public string TO_DAYS
        {
            get { return _to_days; }
            set { _to_days = value; }
        }
        private string _equi_service_name;

        public string EQUI_SERVICE_NAME
        {
            get { return _equi_service_name; }
            set { _equi_service_name = value; }
        }
        private string _is_post;

        public string IS_POST
        {
            get { return _is_post; }
            set { _is_post = value; }
        }

        private string _MAX_OPT_SERVICES_ALLOWED;
        public string MAX_OPT_SERVICES_ALLOWED
        {
            set { _MAX_OPT_SERVICES_ALLOWED = value; }
            get { return _MAX_OPT_SERVICES_ALLOWED; }
        }
        private string _op_count;

        public string OP_COUNT
        {
            get { return _op_count; }
            set { _op_count = value; }
        }
        private string _ip_pagnum;

        public string IP_PAGENUM
        {
            get { return _ip_pagnum; }
            set { _ip_pagnum = value; }
        }
        private int _company_id;
        public int COMPANY_ID
        {
            set { _company_id = value; }
            get { return _company_id; }
        }

        private int _patient_id;
        public int PATIENT_ID
        {
            set { _patient_id = value; }
            get { return _patient_id; }
        }

        private int _ward_group_id;
        public int WARD_GROUP_ID
        {
            set { _ward_group_id = value; }
            get { return _ward_group_id; }
        }
        private string _TEMPLATE_CD;

        public string TEMPLATE_CD
        {
            get { return _TEMPLATE_CD; }
            set { _TEMPLATE_CD = value; }
        }
        private string _TEMPLATE_DESC;

        public string TEMPLATE_DESC
        {
            get { return _TEMPLATE_DESC; }
            set { _TEMPLATE_DESC = value; }
        }
        private string _FORM_META_TEXT;

        public string FORM_META_TEXT
        {
            get { return _FORM_META_TEXT; }
            set { _FORM_META_TEXT = value; }
        }

        private string _LANGUAGE;

        public string LANGUAGE
        {
            get { return _LANGUAGE; }
            set { _LANGUAGE = value; }
        }
        private int _TEMPLATE_ID;

        public int TEMPLATE_ID
        {
            get { return _TEMPLATE_ID; }
            set { _TEMPLATE_ID = value; }
        }

        private int _LANGUAGE_ID;

        public int LANGUAGE_ID
        {
            get { return _LANGUAGE_ID; }
            set { _LANGUAGE_ID = value; }
        }
        private byte[] _IMAGE;

        public byte[] IMAGE
        {
            get { return _IMAGE; }
            set { _IMAGE = value; }
        }

        private string _IMAGE_PATH;

        public string IMAGE_PATH
        {
            get { return _IMAGE_PATH; }
            set { _IMAGE_PATH = value; }
        }
        private string _template_name;

        public string TEMPLATE_NAME
        {
            get { return _template_name; }
            set { _template_name = value; }
        }
        private string _template_type_id;

        public string TEMPLATE_TYPE_ID
        {
            get { return _template_type_id; }
            set { _template_type_id = value; }
        }
        private string _template_type_name;

        public string TEMPLATE_TYPE_NAME
        {
            get { return _template_type_name; }
            set { _template_type_name = value; }
        }
        private string is_free_followup;

        public string IS_FREE_FOLLOWUP
        {
            get { return is_free_followup; }
            set { is_free_followup = value; }
        }
        private string is_additional;

        public string IS_ADDITIONAL
        {
            get { return is_additional; }
            set { is_additional = value; }
        }
        private string discount_percent;

        public string DISCOUNT_PERCENT
        {
            get { return discount_percent; }
            set { discount_percent = value; }
        }

        private string _IS_SRV_CHECKLIST_REQUIRED;
            public string IS_SRV_CHECKLIST_REQUIRED
            {
                get { return _IS_SRV_CHECKLIST_REQUIRED; }
                set { _IS_SRV_CHECKLIST_REQUIRED = value; }
        }
            private string _IS_SRV_INSTRUCTION_REQ;
            public string IS_SRV_INSTRUCTION_REQ
            {
                get { return _IS_SRV_INSTRUCTION_REQ; }
                set { _IS_SRV_INSTRUCTION_REQ = value; }
        }
        
        private string _FROM_AGE;
        public string FROM_AGE {
            get { return _FROM_AGE; }
            set { _FROM_AGE = value; }
        }
        private string _IS_CLINICAL_HIS_REQ;
        public string IS_CLINICAL_HIS_REQ
        {
            get { return _IS_CLINICAL_HIS_REQ; }
            set { _IS_CLINICAL_HIS_REQ = value; }
        }

        private string _ACCEPTED_BY;
            public string ACCEPTED_BY
        {
            get { return _ACCEPTED_BY; }
            set { _ACCEPTED_BY = value; }
        }
        private string _POSTED_TIME;
        public string POSTED_TIME
        {
            get { return _POSTED_TIME; }
            set { _POSTED_TIME = value; }
        }
        private string _IS_SRV_GUIDELINES_REQUIRED;
        public string IS_SRV_GUIDELINES_REQUIRED
        {
            get { return _IS_SRV_GUIDELINES_REQUIRED; }
            set { _IS_SRV_GUIDELINES_REQUIRED = value; }
        }
        
        private string _GENDER_ID;
        public string GENDER_ID
        {
            get { return _GENDER_ID; }
            set { _GENDER_ID = value; }
        }
        private string _TO_AGE;
        public string TO_AGE
        {
            get { return _TO_AGE; }
            set { _TO_AGE = value; }
        }

        private string is_optional;

        public string IS_OPTIONAL
        {
            get { return is_optional; }
            set { is_optional = value; }
        }
        public string BILL_ID { get; set; }
        public string BILL_NO { get; set; }
        public string BILL_SRV_ID { get; set; }
        public string BILL_SRV_SCH_ID { get; set; }
        public string SCH_DT { get; set; }

        private string _inc_status;

        public string INC_STATUS
        {
            get { return _inc_status; }
            set { _inc_status = value; }
        }
        private string _ward_category_id;

        public string WARD_CATEGORY_ID
        {
            get { return _ward_category_id; }
            set { _ward_category_id = value; }
        }
        private string _ward_category_name;

        public string WARD_CATEGORY_NAME
        {
            get { return _ward_category_name; }
            set { _ward_category_name = value; }
        }


        private string _SERVICE_TYPE;

        public string SERVICE_TYPE
        {
            get { return _SERVICE_TYPE; }
            set { _SERVICE_TYPE = value; }
        }

        private string _REASON;

        public string REASON
        {
            get { return _REASON; }
            set { _REASON = value; }
        }

        private string _SPECIMEN_NAME;

        public string SPECIMEN_NAME
        {
            get { return _SPECIMEN_NAME; }
            set { _SPECIMEN_NAME = value; }
        }

        private string _VACCUTAINER_NAME;

        public string VACCUTAINER_NAME
        {
            get { return _VACCUTAINER_NAME; }
            set { _VACCUTAINER_NAME = value; }
        }

        private string _AMOUNT;

        public string AMOUNT
        {
            get { return _AMOUNT; }
            set { _AMOUNT = value; }
        }


        private string _DEPARTMENT_ID;

        public string DEPARTMENT_ID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }


        private string _RATE;

        public string RATE
        {
            get { return _RATE; }
            set { _RATE = value; }
        }

        private string _IS_DIRECT_BILLING;

        public string IS_DIRECT_BILLING
        {
            get { return _IS_DIRECT_BILLING; }
            set { _IS_DIRECT_BILLING = value; }
        }

        private string _IS_QUANTITY_EDIT;

        public string IS_QUANTITY_EDIT
        {
            get { return _IS_QUANTITY_EDIT; }
            set { _IS_QUANTITY_EDIT = value; }
        }
        private string _post_dt;
        public string POSTED_DT
        {
            get { return _post_dt; }
            set { _post_dt = value; }
        }
        private string _SERVICE_RECORD_STATUS;
        public string SERVICE_RECORD_STATUS
        {
            get { return _SERVICE_RECORD_STATUS; }
            set { _SERVICE_RECORD_STATUS = value; }
        }
        public string IS_DOCTOR_REQUIRED { get; set; }
        public string DEPARTMNT_ID { get; set; }

        private string _IS_APPROVAL_REQUIRED;
        public string IS_APPROVAL_REQUIRED
        {
            get { return _IS_APPROVAL_REQUIRED; }
            set { _IS_APPROVAL_REQUIRED = value; }
        }
        private string _DEPARTMENT_NAME;
        public string DEPARTMENT_NAME
        {
            get { return _DEPARTMENT_NAME; }
            set { _DEPARTMENT_NAME = value; }
        }
        private string _DOCTOR_NAME;
        public string DOCTOR_NAME
        {
            get { return _DOCTOR_NAME; }
            set { _DOCTOR_NAME = value; }
        }
        private string _SRV_MAP_STATUS;
        public string SRV_MAP_STATUS
        {
            get { return _SRV_MAP_STATUS; }
            set { _SRV_MAP_STATUS = value; }
        }
        private string _IS_FAVOURITE;
        public string IS_FAVOURITE
        {
            get { return _IS_FAVOURITE; }
            set { _IS_FAVOURITE = value; }
        }
        
    }
    


}

namespace nameSpaceSERVICE_CLASS
{
    class SERVICE_CLASS 
    {
        private int _service_class_id;
        public int SERVICE_CLASS_ID
        {
            set { _service_class_id = value; }
            get { return _service_class_id; }
        }
        private string _service_class_cd;
        public string SERVICE_CLASS_CD
        {
            set { _service_class_cd = value; }
            get { return _service_class_cd; }
        }
        private string _service_class_name;
        public string SERVICE_CLASS_NAME
        {
            set { _service_class_name = value; }
            get { return _service_class_name; }
        }
        private string _service_class_desc;
        public string SERVICE_CLASS_DESC
        {
            set { _service_class_desc = value; }
            get { return _service_class_desc; }
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
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int _entity_rev_no;
        public int ENTITY_REV_NO
        {
            set { _entity_rev_no = value; }
            get { return _entity_rev_no; }
        }
        private int _entity_id;
        public int ENTITY_ID
        {
            set { _entity_id = value; }
            get { return _entity_id; }
        }
        private int _hospital_id;
        public int HOSPITAL_ID
        {
            set { _hospital_id = value; }
            get { return _hospital_id; }
        }
        private int _hospital_rev_no;
        public int HOSPITAL_REV_NO
        {
            set { _hospital_rev_no = value; }
            get { return _hospital_rev_no; }
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
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }

        private string _group_name = string.Empty;
        public string GROUP_NAME
        {
            set
            {
                _group_name = value;
            }
            get
            {
                return _group_name;
            }

        }

        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }

        private int _PACKAGE_ID;

        public int PACKAGE_ID
        {
            get { return _PACKAGE_ID; }
            set { _PACKAGE_ID = value; }
        }

        private string _PACKAGE_CD;

        public string PACKAGE_CD
        {
            get { return _PACKAGE_CD; }
            set { _PACKAGE_CD = value; }
        }
        private string _PACKAGE_NAME;

        public string PACKAGE_NAME
        {
            get { return _PACKAGE_NAME; }
            set { _PACKAGE_NAME = value; }
        }

        private string _DEC_PERCENT;

        public string DEC_PERCENT
        {
            get { return _DEC_PERCENT; }
            set { _DEC_PERCENT = value; }
        }
        private string _SERVICE_ID;

        public string SERVICE_ID
        {
            get { return _SERVICE_ID; }
            set { _SERVICE_ID = value; }
        }
        private string _SERVICE_NAME;

        public string SERVICE_NAME
        {
            get { return _SERVICE_NAME; }
            set { _SERVICE_NAME = value; }
        }
        private string _SERVICE_DEPENDENT_DAYS;

        public string SERVICE_DEPENDENT_DAYS
        {
            get { return _SERVICE_DEPENDENT_DAYS; }
            set { _SERVICE_DEPENDENT_DAYS = value; }
        }
        private string _PRICE;
        public string PRICE
        {
            get { return _PRICE; }
            set { _PRICE = value; }
        }
        private string _DEPARTMENT_ID;
        public string DEPARTMENT_ID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }
           
        
        
    }
}
