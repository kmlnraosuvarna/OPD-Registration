using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceDetMaster:ServiceMaster
    {
        private string _inc_status = string.Empty;
        public string INC_STATUS
        {
            get { return _inc_status; }
            set { _inc_status = value; }
        }
        private int _VALUE = 0;
        public int Value
        {
            get { return _VALUE; }
            set { _VALUE = value; }
        }

        private int _pre_days = 0;
        public int PRE_DAYS
        {
            get { return _pre_days; }
            set { _pre_days = value; }
        }

        private int _post_days = 0;
        public int POST_DAYS
        {
            get { return _post_days; }
            set { _post_days = value; }
        }


        private string service_det_type_id;

        public string SERVICE_DET_TYPE_ID
        {
            get { return service_det_type_id; }
            set { service_det_type_id = value; }
        }

        private int service_det_id;
        public int SERVICE_DET_ID
        {
            set { service_det_id = value; }
            get { return service_det_id; }
        }
        
        private int service_class_id;
        public int SERVICE_CLASS_ID
        {
            set { service_class_id = value; }
            get { return service_class_id; }
        }

        private string service_det_ids;
        public string SERVICE_DET_IDS
        {
            set { service_det_ids = value; }
            get { return service_det_ids; }
        }

        private int service_det_rev_no;
        public int SERVICE_DET_REV_NO
        {
            set { service_det_rev_no = value; }
            get { return service_det_rev_no; }
        }

        private string service_det_rev_nos;
        public string SERVICE_DET_REV_NOS
        {
            set { service_det_rev_nos = value; }
            get { return service_det_rev_nos; }
        }

        private string dept_ids;
        public string DEPT_IDS
        {
            set { dept_ids = value; }
            get { return dept_ids; }
        }
        private string general_service_id;
        public string GENERAL_SERVICE_IDS
        {
            set { general_service_id = value; }
            get { return general_service_id; }
        }

        private string general_service_name;
        public string GENERAL_SERVICE_NAME
        {
            set { general_service_name = value; }
            get { return general_service_name; }
        }

        private string effect_from;
        public string EFFECT_FROM
        {
            set { effect_from = value; }
            get { return effect_from; }
        }

        private string effect_to;
        public string EFFECT_TO
        {
            set { effect_to = value; }
            get { return effect_to; }
        }
        private string rate;
        public string RATE
        {
            set { rate = value; }
            get { return rate; }
        }
        private string quantity;
        public string QUANTITY
        {
            set { quantity = value; }
            get { return quantity; }
        }
        private string amount;
        public string AMOUNT
        {
            set { amount = value; }
            get { return amount; }
        }
        private float amount1;
        public float AMOUNT1
        {
            set { amount1 = value; }
            get { return amount1; }
        }

        private int department_id=0;
        public int DEPARTMENT_ID1
        {
            set { department_id = value; }
            get { return department_id; }
        }



        //private string department_id1;
        //public string DEPARTMENT_ID
        //{
        //    set { department_id1 = value; }
        //    get { return department_id1; }
        //}

        private string department_name = String.Empty;

        public string DEPARTMENT_NAME
        {
            get { return department_name; }
            set { department_name = value; }
        }

        private string _pkg_srv_id;
        public string PKG_SRV_ID
        {
            get { return _pkg_srv_id; }
            set { _pkg_srv_id = value; }
        }
        private string _pkg_srv_name;
        public string PKG_SRV_NAME
        {
            get { return _pkg_srv_name; }
            set { _pkg_srv_name = value; }
        }
        private string _pkg_srv_price;
        public string PKG_SRV_PRICE
        {
            get { return _pkg_srv_price; }
            set { _pkg_srv_price = value; }
        }
        private string _class_srv_id;

        public string CLASS_SERVICE_ID
        {
            get { return _class_srv_id; }
            set { _class_srv_id = value; }
        }
        private string _pkg_amt;

        public string PKG_PAID_AMT
        {
            get { return _pkg_amt; }
            set { _pkg_amt = value; }
        }
        private string _pkg_act_amt;

        public string PKG_ACT_AMT
        {
            get { return _pkg_act_amt; }
            set { _pkg_act_amt = value; }
        }
        private string record_statuss;

        public string RECORD_STATUSS
        {
            get { return record_statuss; }
            set { record_statuss = value; }
        }
        private string create_by_name;

        public string CREATE_BY_NAME
        {
            get { return create_by_name; }
            set { create_by_name = value; }
        }
        private string modify_by_name;

        public string MODIFY_BY_NAME
        {
            get { return modify_by_name; }
            set { modify_by_name = value; }
        }
        private int _SERVICE_CLASS_ID_NEW;

        public int SERVICE_CLASS_ID_NEW
        {
            get { return _SERVICE_CLASS_ID_NEW; }
            set { _SERVICE_CLASS_ID_NEW = value; }
        }

        private string _AMOUNT_NEW;
        public string AMOUNT_NEW
        {
            set { _AMOUNT_NEW = value; }
            get { return _AMOUNT_NEW; }
        }
        
        private string display_name;

        public string DISPLAY_NAME
        {
            get { return display_name; }
            set { display_name = value; }
        }
        private string uniservice_code;

        public string UNI_SERVICE_CODE
        {
            get { return uniservice_code; }
            set { uniservice_code = value; }
        }
        private string is_active;

        public string IS_ACTIVE
        {
            get { return is_active; }
            set { is_active = value; }
        }
        private string service_class_ids;

        public string SERVICE_CLASS_IDS
        {
            get { return service_class_ids; }
            set { service_class_ids = value; }
        }
        private string tariff_service_id;

        public string TARIFF_SERVICE_ID
        {
            get { return tariff_service_id; }
            set { tariff_service_id = value; }
        }
        private string is_clinical_hist_req;

        public string IS_CLINICAL_HIST_REQ
        {
            get { return is_clinical_hist_req; }
            set { is_clinical_hist_req = value; }
        }
        private string chistory_text;

        public string CHISTORY_TEXT
        {
            get { return chistory_text; }
            set { chistory_text = value; }
        }

        private string pkg_inc_amount;

        public string PKG_INC_AMOUNT
        {
            get { return pkg_inc_amount; }
            set { pkg_inc_amount = value; }
        }
        private string processing_lab;

        public string PROCESSING_LAB
        {
            get { return processing_lab; }
            set { processing_lab = value; }
        }

        private float _SRV_DET_PRICE;

        public float SRV_DET_PRICE
        {
            get { return _SRV_DET_PRICE; }
            set { _SRV_DET_PRICE = value; }
        }
        private string _net_amount;

        public string NET_AMOUNT
        {
            get { return _net_amount; }
            set { _net_amount = value; }
        }
        private string _is_optinal;

        public string IS_OPTIONAL
        {
            get { return _is_optinal; }
            set { _is_optinal = value; }
        }
        private string _IS_FREE_FOLLOWUP;
        public string IS_FREE_FOLLOWUP
        {
            set { _IS_FREE_FOLLOWUP = value; }
            get { return _IS_FREE_FOLLOWUP; }
        }
        private string is_additional;
        public string IS_ADDITIONAL
        {
            set { is_additional = value; }
            get { return is_additional; }
        }
        private string discount_percent;
        public string DISCOUNT_PERCENT
        {
            set { discount_percent = value; }
            get { return discount_percent; }
        }
        private string is_main;
        public string IS_MAIN
        {
            set { is_main = value; }
            get { return is_main; }
        }
        private int ward_category_id;
        public int WARD_CATEGORY_ID
        {
            set { ward_category_id = value; }
            get { return ward_category_id; }
        }
        private string _ward_category_name;
        public string WARD_CATEGORY_NAME
        {
            set { _ward_category_name = value; }
            get { return _ward_category_name; }
        }
        private string _item_id;

        public string ITEM_ID
        {
            get { return _item_id; }
            set { _item_id = value; }
        }
        private string _item_name;

        public string ITEM_NAME
        {
            get { return _item_name; }
            set { _item_name = value; }
        }
        private string _item_group_id;

        public string ITEM_GROUP_ID
        {
            get { return _item_group_id; }
            set { _item_group_id = value; }
        }
        private string _item_group_name;

        public string ITEM_GROUP_NAME
        {
            get { return _item_group_name; }
            set { _item_group_name = value; }
        }
        private string _SERVICE_STATUS;

        public string SERVICE_STATUS
        {
            get { return _SERVICE_STATUS; }
            set { _SERVICE_STATUS = value; }
        }
        private string _SRV_NET_AMOUNT;

        public string SRV_NET_AMOUNT
        {
            get { return _SRV_NET_AMOUNT; }
            set { _SRV_NET_AMOUNT = value; }
        }
        private string _SRV_CONCESSION_AMOUNT;

        public string SRV_CONCESSION_AMOUNT
        {
            get { return _SRV_CONCESSION_AMOUNT; }
            set { _SRV_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_CASH_CONCESSION_AMOUNT;

        public string SRV_CASH_CONCESSION_AMOUNT
        {
            get { return _SRV_CASH_CONCESSION_AMOUNT; }
            set { _SRV_CASH_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_CASH_CONCESSION_PCNT;

        public string SRV_CASH_CONCESSION_PCNT
        {
            get { return _SRV_CASH_CONCESSION_PCNT; }
            set { _SRV_CASH_CONCESSION_PCNT = value; }
        }
        private string _SRV_HC_CONCESSION_AMOUNT;

        public string SRV_HC_CONCESSION_AMOUNT
        {
            get { return _SRV_HC_CONCESSION_AMOUNT; }
            set { _SRV_HC_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_HC_CONCESSION_PCNT;

        public string SRV_HC_CONCESSION_PCNT
        {
            get { return _SRV_HC_CONCESSION_PCNT; }
            set { _SRV_HC_CONCESSION_PCNT = value; }
        }
        private string _SRV_MANAGMENT_CONCESSION_AMOUNT;

        public string SRV_MANAGMENT_CONCESSION_AMOUNT
        {
            get { return _SRV_MANAGMENT_CONCESSION_AMOUNT; }
            set { _SRV_MANAGMENT_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_MANAGMENT_CONCESSION_PCNT;

        public string SRV_MANAGMENT_CONCESSION_PCNT
        {
            get { return _SRV_MANAGMENT_CONCESSION_PCNT; }
            set { _SRV_MANAGMENT_CONCESSION_PCNT = value; }
        }
        private string _SRV_STAFF_CONCESSION_AMOUNT;

        public string SRV_STAFF_CONCESSION_AMOUNT
        {
            get { return _SRV_STAFF_CONCESSION_AMOUNT; }
            set { _SRV_STAFF_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_STAFF_CONCESSION_PCNT;

        public string SRV_STAFF_CONCESSION_PCNT
        {
            get { return _SRV_STAFF_CONCESSION_PCNT; }
            set { _SRV_STAFF_CONCESSION_PCNT = value; }
        }
        private string _SRV_EVENT_BASED_CONCESSION_AMOUNT;

        public string SRV_EVENT_BASED_CONCESSION_AMOUNT
        {
            get { return _SRV_EVENT_BASED_CONCESSION_AMOUNT; }
            set { _SRV_EVENT_BASED_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_EVENT_BASED_CONCESSION_PCNT;

        public string SRV_EVENT_BASED_CONCESSION_PCNT
        {
            get { return _SRV_EVENT_BASED_CONCESSION_PCNT; }
            set { _SRV_EVENT_BASED_CONCESSION_PCNT = value; }
        }
        private string _SRV_CONCESSION_RULE_CONCESSION_AMOUNT;

        public string SRV_CONCESSION_RULE_CONCESSION_AMOUNT
        {
            get { return _SRV_CONCESSION_RULE_CONCESSION_AMOUNT; }
            set { _SRV_CONCESSION_RULE_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_CONCESSION_RULE_CONCESSION_PCNT;

        public string SRV_CONCESSION_RULE_CONCESSION_PCNT
        {
            get { return _SRV_CONCESSION_RULE_CONCESSION_PCNT; }
            set { _SRV_CONCESSION_RULE_CONCESSION_PCNT = value; }
        }

        private string item_generic_id;

        public string ITEM_GENERIC_ID
        {
            get { return item_generic_id; }
            set { item_generic_id = value; }
        }

        private string item_form_id;

        public string ITEM_FORM_ID
        {
            get { return item_form_id; }
            set { item_form_id = value; }
        }

        private string il1_name;

        public string IL1_NAME
        {
            get { return il1_name; }
            set { il1_name = value; }
        }

        private string il2_name;

        public string IL2_NAME
        {
            get { return il2_name; }
            set { il2_name = value; }
        }
        private string il3_name;

        public string IL3_NAME
        {
            get { return il3_name; }
            set { il3_name = value; }
        }

        private string stp_id;

        public string STP_ID
        {
            get { return stp_id; }
            set { stp_id = value; }
        }
        private string stp_name;

        public string STP_NAME
        {
            get { return stp_name; }
            set { stp_name = value; }
        }
        private string include_all;

        public string INCLUDE_ALL
        {
            get { return include_all; }
            set { include_all = value; }
        }

        private string _SERVICE_DET_XML;

        public string SERVICE_DET_XML
        {
            get { return _SERVICE_DET_XML; }
            set { _SERVICE_DET_XML = value; }
        }
        private string _SRV_PKG_ID;

        public string SRV_PKG_ID
        {
            get { return _SRV_PKG_ID; }
            set { _SRV_PKG_ID = value; }
        }

        public string CGST_AMOUNT { get; set; }
        public string CGST_PCT { get; set; }
        public string SGST_AMOUNT { get; set; }
        public string SGST_PCT { get; set; }
        public string RATE_EXC_GST { get; set; }

    }

}
