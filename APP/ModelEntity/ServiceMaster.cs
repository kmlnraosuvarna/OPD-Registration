using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceMaster : ViewPaging, IXmlSerializable
    {
        private string Service_dt = string.Empty;
        public string SERVICE_DT
        {
            get { return Service_dt; }
            set { Service_dt = value; }
        }
        private string _IS_SRV_QTY_DISPLAY = string.Empty;
        public string IS_SRV_QTY_DISPLAY
        {
            get { return _IS_SRV_QTY_DISPLAY; }
            set { _IS_SRV_QTY_DISPLAY = value; }
        }

        private string _SRV_QTY_DISPLAY_SUFFIX_TEXT = string.Empty;
        public string SRV_QTY_DISPLAY_SUFFIX_TEXT
        {
            get { return _SRV_QTY_DISPLAY_SUFFIX_TEXT; }
            set { _SRV_QTY_DISPLAY_SUFFIX_TEXT = value; }
        }


        private string _PRICING_METHOD_ID = string.Empty;
        public string PRICING_METHOD_ID
        {
            get { return _PRICING_METHOD_ID; }
            set { _PRICING_METHOD_ID = value; }
        }

        private string _IS_DIRECT_BILLING = string.Empty;
        public string IS_DIRECT_BILLING
        {
            get { return _IS_DIRECT_BILLING; }
            set { _IS_DIRECT_BILLING = value; }
        }
        private string _IS_NURSE_INDENT_REQ = string.Empty;
        public string IS_NURSE_INDENT_REQ
        {
            get { return _IS_NURSE_INDENT_REQ; }
            set { _IS_NURSE_INDENT_REQ = value; }
        }

        private string Admn_no = string.Empty;
        public string ADMN_NO
        {
            get { return Admn_no; }
            set { Admn_no = value; }
        }

        private string _status = string.Empty;
        public string STATUS
        {
            get { return _status; }
            set { _status = value; }
        }

        private int _type_id = 0;
        public int TYPE_ID
        {
            get { return _type_id; }
            set { _type_id = value; }
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

        private int _con_type_id = 0;

        public int CONSULTATION_TYPE_ID
        {
            get { return _con_type_id; }
            set { _con_type_id = value; }
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

        private string _service_group_id;
        public string SERVICE_GROUP_ID
        {
            set { _service_group_id = value; }
            get { return _service_group_id; }
        }

        private string _service_group_cd;
        public string SERVICE_GROUP_CD
        {
            set { _service_group_cd = value; }
            get { return _service_group_cd; }
        }
        private string service_group_name;

        public string SERVICE_GROUP_NAME
        {
            get { return service_group_name; }
            set { service_group_name = value; }
        }

        private string service_grp_idseq;

        public string Service_Grp_IdSeq
        {
            get { return service_grp_idseq; }
            set { service_grp_idseq = value; }
        }
        private int _billing_head_id;
        public int BILLING_HEAD_ID
        {
            set { _billing_head_id = value; }
            get { return _billing_head_id; }
        }

        private int _service_type_id;
        public int SERVICE_TYPE_ID
        {
            set { _service_type_id = value; }
            get { return _service_type_id; }
        }
        private string service_type_name;

        public string SERVICE_TYPE_NAME
        {
            get { return service_type_name; }
            set { service_type_name = value; }
        }
        private string service_type_idseq;

        public string Service_Type_IdSeq
        {
            get { return service_type_idseq; }
            set { service_type_idseq = value; }
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
        private int _parent_service_seq_id;
        public int PARENT_SERVICE_SEQ_ID
        {
            set { _parent_service_seq_id = value; }
            get { return _parent_service_seq_id; }
        }
        private int _tariff_id;
        public int TARIFF_ID
        {
            set { _tariff_id = value; }
            get { return _tariff_id; }
        }
        private string _tariff_name;
        public string TARIFF_NAME
        {
            set { _tariff_name = value; }
            get { return _tariff_name; }
        }
        private string _tariff_cd;
        public string TARIFF_CD
        {
            set { _tariff_cd = value; }
            get { return _tariff_cd; }
        }
        private string _general_service_name;
        public string GENERAL_SERVICE_NAME
        {
            set { _general_service_name = value; }
            get { return _general_service_name; }
        }
        private int _general_service_id;
        public int GENERAL_SERVICE_ID
        {
            set { _general_service_id = value; }
            get { return _general_service_id; }
        }



        private int _tariff_seq_id;
        public int TARIFF_SEQ_ID
        {
            set { _tariff_seq_id = value; }
            get { return _tariff_seq_id; }
        }
        private int _price_class_id;
        public int PRICE_CLASS_ID
        {
            set { _price_class_id = value; }
            get { return _price_class_id; }
        }
        private int _price_class_seq_id;
        public int PRICE_CLASS_SEQ_ID
        {
            set { _price_class_seq_id = value; }
            get { return _price_class_seq_id; }
        }
        private int _coverage_id;
        public int COVERAGE_ID
        {
            set { _coverage_id = value; }
            get { return _coverage_id; }
        }
        private int _coverage_seq_id;
        public int COVERAGE_SEQ_ID
        {
            set { _coverage_seq_id = value; }
            get { return _coverage_seq_id; }
        }
        private string coverage_idseq;

        public string Coverage_IdSeq
        {
            get { return coverage_idseq; }
            set { coverage_idseq = value; }
        }
        private string _coverage_cd;

        public string Coverage_cd
        {
            get { return _coverage_cd; }
            set { _coverage_cd = value; }
        }

        private string _coverage_desc;

        public string Coverage_desc
        {
            get { return _coverage_desc; }
            set { _coverage_desc = value; }
        }
        private int _payment_type_id;
        public int PAYMENT_TYPE_ID
        {
            set { _payment_type_id = value; }
            get { return _payment_type_id; }
        }
        private int _payment_type_seq_id;
        public int PAYMENT_TYPE_SEQ_ID
        {
            set { _payment_type_seq_id = value; }
            get { return _payment_type_seq_id; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private string _current_record;
        public string CURRENT_RECORD
        {
            set { _current_record = value; }
            get { return _current_record; }
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
        private int _hospital_id_ver;
        public int HOSPITAL_ID_VER
        {
            set { _hospital_id_ver = value; }
            get { return _hospital_id_ver; }
        }
        private string _mintime;
        public string MINTIME
        {
            set { _mintime = value; }
            get { return _mintime; }
        }
        private string _maxtime;
        public string MAXTIME
        {
            set { _maxtime = value; }
            get { return _maxtime; }
        }
        private string _serdeptcd;
        public string SERDEPTCD
        {
            set { _serdeptcd = value; }
            get { return _serdeptcd; }
        }
        private string _servicestatusdetails;
        public string SERVICESTATUSDETAILS
        {
            set { _servicestatusdetails = value; }
            get { return _servicestatusdetails; }
        }
        private string _serviceincharges;
        public string SERVICEINCHARGES
        {
            set { _serviceincharges = value; }
            get { return _serviceincharges; }
        }
        private string _servicehods;
        public string SERVICEHODS
        {
            set { _servicehods = value; }
            get { return _servicehods; }
        }
        private string _requestedhods;
        public string REQUESTEDHODS
        {
            set { _requestedhods = value; }
            get { return _requestedhods; }
        }
        private string _isapprovalmust;
        public string ISAPPROVALMUST
        {
            set { _isapprovalmust = value; }
            get { return _isapprovalmust; }
        }
        private string _isidnumbermust;
        public string ISIDNUMBERMUST
        {
            set { _isidnumbermust = value; }
            get { return _isidnumbermust; }
        }
        private string _row_status;
        public string ROW_STATUS
        {
            set { _row_status = value; }
            get { return _row_status; }
        }
        private int _service_type_id_ver;
        public int SERVICE_TYPE_ID_VER
        {
            set { _service_type_id_ver = value; }
            get { return _service_type_id_ver; }
        }
        private int _service_id_ver;
        public int SERVICE_ID_VER
        {
            set { _service_id_ver = value; }
            get { return _service_id_ver; }
        }

        private int count;

        public int Count
        {
            get { return count; }
            set { count = value; }
        }
        private string uniservicecode;

        public string Uniservicecode
        {
            get { return uniservicecode; }
            set { uniservicecode = value; }
        }

        private string isactive;

        public string IsActive
        {
            get { return isactive; }
            set { isactive = value; }
        }
        private string _ISACTIVE;

        public string ISACTIVE
        {
            get { return _ISACTIVE; }
            set { _ISACTIVE = value; }
        }
        private string displayname;

        public string DisplayName
        {
            get { return displayname; }
            set { displayname = value; }
        }

        private int _serviceclass_id;

        public int Serviceclass_id
        {
            get { return _serviceclass_id; }
            set { _serviceclass_id = value; }
        }

        //private int _serviceclass_seq_id;

        //public int SERVICECLASS_SEQ_ID
        //{
        //    get { return _serviceclass_seq_id; }
        //    set { _serviceclass_seq_id = value; }
        //}
        private string _service_class_name;

        public string SERVICE_CLASS_NAME
        {
            get { return _service_class_name; }
            set { _service_class_name = value; }
        }
        private string service_class_idseq;

        public string Service_Class_IdSeq
        {
            get { return service_class_idseq; }
            set { service_class_idseq = value; }
        }
        private int service_rev_no;

        public int SERVICE_REV_NO
        {
            get { return service_rev_no; }
            set { service_rev_no = value; }
        }
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private float price;

        public float PRICE
        {
            get { return price; }
            set { price = value; }
        }
        private float org_price;

        public float ORG_PRICE
        {
            get { return org_price; }
            set { org_price = value; }
        }
        private float doctor_price;

        public float DOCTOR_PRICE
        {
            get { return doctor_price; }
            set { doctor_price = value; }
        }
        private string concession;

        public string CONCESSION
        {
            get { return concession; }
            set { concession = value; }
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
        private bool save_status = true;
        public bool SAVE_STATUS
        {
            set { save_status = value; }
            get { return save_status; }
        }

        private int department_id;
        public int DEPARTMENT_ID
        {
            set { department_id = value; }
            get { return department_id; }
        }
        private string department_name;
        public string DEPARTMENT_NAME
        {
            set { department_name = value; }
            get { return department_name; }
        }

        private string ref_doctor_name;
        public string REF_DOCTOR_NAME
        {
            set { ref_doctor_name = value; }
            get { return ref_doctor_name; }
        }


        private string doctor_id;
        public string DOCTOR_ID
        {
            set { doctor_id = value; }
            get { return doctor_id; }
        }

        private string doctor_name;
        public string DOCTOR_NAME
        {
            set { doctor_name = value; }
            get { return doctor_name; }
        }
        private int _duration = 0;

        public int Duration
        {
            get { return _duration; }
            set { _duration = value; }
        }

        private ServiceDetMasterCollection _srvDetColl;
        public ServiceDetMasterCollection SRVDETCOLL
        {
            get { return _srvDetColl; }
            set { _srvDetColl = value; }
        }


        private string _is_flag = string.Empty;

        public string IS_FLAG
        {
            get { return _is_flag; }
            set { _is_flag = value; }
        }
        #region IXmlSerializable Members

        public System.Xml.Schema.XmlSchema GetSchema()
        {
            return null;
        }

        public void ReadXml(System.Xml.XmlReader reader)
        {

        }

        public void WriteXml(System.Xml.XmlWriter writer)
        {

        }

        #endregion


        private int reference_doctor_id;
        public int REFERENCE_DOCTOR_ID
        {
            get { return reference_doctor_id; }
            set { reference_doctor_id = value; }
        }
        private string patient_type;
        public string PATIENT_TYPE
        {
            get { return patient_type; }
            set { patient_type = value; }
        }

        private int patient_type_id;
        public int PATIENT_TYPE_ID
        {
            get { return patient_type_id; }
            set { patient_type_id = value; }
        }

        private string org_name;
        public string ORG_NAME
        {
            get { return org_name; }
            set { org_name = value; }
        }

        private int service_dept_id;
        public int SERVICE_DEPT_ID
        {
            get { return service_dept_id; }
            set { service_dept_id = value; }
        }

        private string is_pkg;
        public string IS_PKG
        {
            get { return is_pkg; }
            set { is_pkg = value; }
        }

        private string _QUANTITY;
        public string QUANTITY
        {
            get { return _QUANTITY; }
            set { _QUANTITY = value; }
        }
        private int acc_cmp_id;
        public int ACC_CMP_ID
        {
            get { return acc_cmp_id; }
            set { acc_cmp_id = value; }
        }


        private string acc_cmp_name;
        public string ACC_CMP_NAME
        {
            get { return acc_cmp_name; }
            set { acc_cmp_name = value; }
        }

        private float acc_cmp_pct;
        public float ACC_CMP_PCT
        {
            get { return acc_cmp_pct; }
            set { acc_cmp_pct = value; }
        }

        private string acc_effect_from_dt;
        public string ACC_EFFECT_FROM_DT
        {
            set { acc_effect_from_dt = value; }
            get { return acc_effect_from_dt; }
        }
        private string acc_effect_to_dt;
        public string ACC_EFFECT_TO_DT
        {
            set { acc_effect_to_dt = value; }
            get { return acc_effect_to_dt; }
        }
        private float amount;
        public float AMOUNT
        {
            get { return amount; }
            set { amount = value; }
        }

        private int _company_service_group_id;
        public int COMPANY_SERVICE_GROUP_ID
        {
            set { _company_service_group_id = value; }
            get { return _company_service_group_id; }
        }

        private int _company_service_id;
        public int COMPANY_SERVICE_ID
        {
            set { _company_service_id = value; }
            get { return _company_service_id; }
        }

        private string _company_service_name;
        public string COMPANY_SERVICE_NAME
        {
            set { _company_service_name = value; }
            get { return _company_service_name; }
        }



        private string _IS_NUR_STATION;
        public string IS_NUR_STATION
        {
            set { _IS_NUR_STATION = value; }
            get { return _IS_NUR_STATION; }
        }
        private int _billingHeadid;

        public int BILLINGHEAD_ID
        {
            get { return _billingHeadid; }
            set { _billingHeadid = value; }
        }
        private string _billingHeadName;

        public string BILLINGHEAD_NAME
        {
            get { return _billingHeadName; }
            set { _billingHeadName = value; }
        }
        private string _billheaddesc;

        public string BILLINGHEAD_DESC
        {
            get { return _billheaddesc; }
            set { _billheaddesc = value; }
        }
        private int patient_id;

        public int PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }

        private string result_dt;

        public string RESULT_DT
        {
            get { return result_dt; }
            set { result_dt = value; }
        }
        private string component_name;

        public string COMPONENT_NAME
        {
            get { return component_name; }
            set { component_name = value; }
        }

        private string normal_value;

        public string NORMAL_VALUE
        {
            get { return normal_value; }
            set { normal_value = value; }
        }

        private string result_value;

        public string RESULT_VALUE
        {
            get { return result_value; }
            set { result_value = value; }
        }
        private string specimen_name;
        public string SPECIMEN_NAME
        {
            set { specimen_name = value; }
            get { return specimen_name; }
        }

        private string format_cd;
        public string FORMAT_CD
        {
            set { format_cd = value; }
            get { return format_cd; }
        }
        private float luxary_tax;
        public float LUXARY_TAX
        {
            get { return luxary_tax; }
            set { luxary_tax = value; }
        }

        private string _luxry_tax;

        public string Luxry_tax
        {
            get { return _luxry_tax; }
            set { _luxry_tax = value; }
        }
        private string _flag;

        public string FLAG
        {
            get { return _flag; }
            set { _flag = value; }
        }
        private string ward_name;

        public string WARD_NAME
        {
            get { return ward_name; }
            set { ward_name = value; }
        }
        private int ward_group_id;

        public int WARD_GROUP_ID
        {
            get { return ward_group_id; }
            set { ward_group_id = value; }
        }
        private string concession_amount;

        public string CONCESSION_AMOUNT
        {
            get { return concession_amount; }
            set { concession_amount = value; }
        }
        private string concession_amount_perc;

        public string CONCESSION_AMOUNT_PERC
        {
            get { return concession_amount_perc; }
            set { concession_amount_perc = value; }
        }
        private string _coverage_for;
        public string COVERAGE_FOR
        {
            get { return _coverage_for; }
            set { _coverage_for = value; }
        }
        private string pkg_ef_from_todt;

        public string PKG_EF_FRM_TODT
        {
            get { return pkg_ef_from_todt; }
            set { pkg_ef_from_todt = value; }
        }
        private int _pckg_conv_id;
        public int PCKG_CONV_ID
        {
            set { _pckg_conv_id = value; }
            get { return _pckg_conv_id; }
        }
        private string _consumption;
        public string CONSUMPTION
        {
            set { _consumption = value; }
            get { return _consumption; }
        }
        private string _emergncy_price;
        public string EMERGNCY_PRICE
        {
            set { _emergncy_price = value; }
            get { return _emergncy_price; }
        }
        private string vaccutainer_name;
        public string VACCUTAINER_NAME
        {
            set { vaccutainer_name = value; }
            get { return vaccutainer_name; }
        }

        private string Record_Statuss;

        public string RECORD_STATUSS
        {
            get { return Record_Statuss; }
            set { Record_Statuss = value; }
        }
        private string _IS_DELETE;

        public string IS_DELETE
        {
            get { return _IS_DELETE; }
            set { _IS_DELETE = value; }
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
        private string clinical_history;

        public string CLINICAL_HISTORY
        {
            get { return clinical_history; }
            set { clinical_history = value; }
        }
        private string ward_group_name;

        public string WARD_GROUP_NAME
        {
            get { return ward_group_name; }
            set { ward_group_name = value; }
        }
        private string gender_id;

        public string GENDER_ID
        {
            get { return gender_id; }
            set { gender_id = value; }
        }
        private string species_id;

        public string SPECIES_ID
        {
            get { return species_id; }
            set { species_id = value; }
        }
        private string gender_name;

        public string GENDER_NAME
        {
            get { return gender_name; }
            set { gender_name = value; }
        }
        private string species_name;

        public string SPECIES_NAME
        {
            get { return species_name; }
            set { species_name = value; }
        }
        private string _history_type;

        public string HISTORY_TYPE
        {
            get { return _history_type; }
            set { _history_type = value; }
        }

        private string pckg_conv_srv_id = string.Empty;

        public string PCKG_CONV_SRV_ID
        {
            get { return pckg_conv_srv_id; }
            set { pckg_conv_srv_id = value; }
        }
        private string company_id = string.Empty;

        public string COMPANY_ID
        {
            get { return company_id; }
            set { company_id = value; }
        }
        private string company_name = string.Empty;

        public string COMPANY_NAME
        {
            get { return company_name; }
            set { company_name = value; }
        }
        private string tariff_service_id;

        public string TARIFF_SERVICE_ID
        {
            get { return tariff_service_id; }
            set { tariff_service_id = value; }
        }
        private string is_quantity_edit;

        public string IS_QUANTITY_EDIT
        {
            get { return is_quantity_edit; }
            set { is_quantity_edit = value; }
        }


        private string is_pric_edit;

        public string IS_PRIC_EDIT
        {
            get { return is_pric_edit; }
            set { is_pric_edit = value; }
        }

        private string is_price_edit;

        public string IS_PRICE_EDIT
        {
            get { return is_price_edit; }
            set { is_price_edit = value; }
        }
        private int no_of_days;

        public int NO_OF_DAYS
        {
            get { return no_of_days; }
            set { no_of_days = value; }
        }
        private int from_age;

        public int FROM_AGE
        {
            get { return from_age; }
            set { from_age = value; }
        }

        private int to_age;

        public int TO_AGE
        {
            get { return to_age; }
            set { to_age = value; }
        }
        private float minceiling;

        public float MINCEILING
        {
            get { return minceiling; }
            set { minceiling = value; }
        }
        private float maxceiling;

        public float MAXCEILING
        {
            get { return maxceiling; }
            set { maxceiling = value; }
        }
        private int testoccurancy;

        public int TESTOCCURaNCY
        {
            get { return testoccurancy; }
            set { testoccurancy = value; }
        }
        private string is_appt_req;

        public string IS_APPT_REQ
        {
            get { return is_appt_req; }
            set { is_appt_req = value; }

        }
        private string is_consent_req;

        public string IS_CONSENT_REQ
        {
            get { return is_consent_req; }
            set { is_consent_req = value; }
        }
        private string is_pre_requisit;

        public string IS_PRE_REQUISIT
        {
            get { return is_pre_requisit; }
            set { is_pre_requisit = value; }
        }
        private string is_test_comparision_req;

        public string IS_TEST_COMPARISION_REQ
        {
            get { return is_test_comparision_req; }
            set { is_test_comparision_req = value; }
        }

        private string _NOTE;

        public string NOTE
        {
            get { return _NOTE; }
            set { _NOTE = value; }
        }

        private int _PAGE_SIZE;

        public int PAGE_SIZE
        {
            get { return _PAGE_SIZE; }
            set { _PAGE_SIZE = value; }
        }
        private int _PAGE_NO;

        public int PAGE_NO
        {
            get { return _PAGE_NO; }
            set { _PAGE_NO = value; }
        }
        private string _ADVANCE_SEARCH;

        public string ADVANCE_SEARCH
        {
            get { return _ADVANCE_SEARCH; }
            set { _ADVANCE_SEARCH = value; }
        }
        private string _IS_REG_FEE_INCLUDED;

        public string IS_REG_FEE_INCLUDED
        {
            get { return _IS_REG_FEE_INCLUDED; }
            set { _IS_REG_FEE_INCLUDED = value; }
        }
        private string _EMERGNCY_FLAG;

        public string EMERGNCY_FLAG
        {
            get { return _EMERGNCY_FLAG; }
            set { _EMERGNCY_FLAG = value; }
        }
        private string _PATIENT_CLASS_ID;

        public string PATIENT_CLASS_ID
        {
            get { return _PATIENT_CLASS_ID; }
            set { _PATIENT_CLASS_ID = value; }
        }
        private string max_opt_services_allowed;

        public string MAX_OPT_SERVICES_ALLOWED
        {
            get { return max_opt_services_allowed; }
            set { max_opt_services_allowed = value; }
        }
        private int service_subclass_id;

        public int SERVICE_SUBCLASS_ID
        {
            get { return service_subclass_id; }
            set { service_subclass_id = value; }
        }
        private string is_doctor_share_required;

        public string IS_DOCTOR_SHARE_REQUIRED
        {
            get { return is_doctor_share_required; }
            set { is_doctor_share_required = value; }
        }
        private string consent_template_id;

        public string CONSENT_TEMPLATE_ID
        {
            get { return consent_template_id; }
            set { consent_template_id = value; }
        }

        private string is_consent_form;

        public string IS_CONSENT_FORM
        {
            get { return is_consent_form; }
            set { is_consent_form = value; }
        }
        private string consent_template_name;

        public string CONSENT_TEMPLATE_NAME
        {
            get { return consent_template_name; }
            set { consent_template_name = value; }
        }
        private int referal_letter_id;

        public int REFERAL_LETTER_ID
        {
            get { return referal_letter_id; }
            set { referal_letter_id = value; }
        }

        private string _IS_SRV_GUIDELINES_REQUIRED;

        public string IS_SRV_GUIDELINES_REQUIRED
        {
            get { return _IS_SRV_GUIDELINES_REQUIRED; }
            set { _IS_SRV_GUIDELINES_REQUIRED = value; }
        }

        private string _SERVICE_GUIDELINE_TEMPLATE_ID;

        public string SERVICE_GUIDELINE_TEMPLATE_ID
        {
            get { return _SERVICE_GUIDELINE_TEMPLATE_ID; }
            set { _SERVICE_GUIDELINE_TEMPLATE_ID = value; }
        }
        private string _SERVICE_GUIDELINE_TEMPLATE_NAME;

        public string SERVICE_GUIDELINE_TEMPLATE_NAME
        {
            get { return _SERVICE_GUIDELINE_TEMPLATE_NAME; }
            set { _SERVICE_GUIDELINE_TEMPLATE_NAME = value; }
        }

        private string _IS_SRV_CHECKLIST_REQUIRED;

        public string IS_SRV_CHECKLIST_REQUIRED
        {
            get { return _IS_SRV_CHECKLIST_REQUIRED; }
            set { _IS_SRV_CHECKLIST_REQUIRED = value; }
        }

        private string _SERVICE_CHECKLIST_TEMPLATE_ID;

        public string SERVICE_CHECKLIST_TEMPLATE_ID
        {
            get { return _SERVICE_CHECKLIST_TEMPLATE_ID; }
            set { _SERVICE_CHECKLIST_TEMPLATE_ID = value; }
        }
        private string _SERVICE_CHECKLIST_TEMPLATE_NAME;

        public string SERVICE_CHECKLIST_TEMPLATE_NAME
        {
            get { return _SERVICE_CHECKLIST_TEMPLATE_NAME; }
            set { _SERVICE_CHECKLIST_TEMPLATE_NAME = value; }
        }

        private string _is_remarks_mandatory;
        public string IS_REMARKS_MANDATORY
        {
            get { return _is_remarks_mandatory; }
            set { _is_remarks_mandatory = value; }
        }

        private string _SERVICE_QUESTION_TEMPLATE_ID;
        public string SERVICE_QUESTION_TEMPLATE_ID
        {
            get { return _SERVICE_QUESTION_TEMPLATE_ID; }
            set { _SERVICE_QUESTION_TEMPLATE_ID = value; }
        }

        private string _SERVICE_QUESTION_TEMPLATE_NAME;
        public string SERVICE_QUESTION_TEMPLATE_NAME
        {
            get { return _SERVICE_QUESTION_TEMPLATE_NAME; }
            set { _SERVICE_QUESTION_TEMPLATE_NAME = value; }
        }

        private string _SERVICE_FEEDBACK_TEMPLATE_ID;
        public string SERVICE_FEEDBACK_TEMPLATE_ID
        {
            get { return _SERVICE_FEEDBACK_TEMPLATE_ID; }
            set { _SERVICE_FEEDBACK_TEMPLATE_ID = value; }
        }

        private string _SERVICE_FEEDBACK_TEMPLATE_NAME;
        public string SERVICE_FEEDBACK_TEMPLATE_NAME
        {
            get { return _SERVICE_FEEDBACK_TEMPLATE_NAME; }
            set { _SERVICE_FEEDBACK_TEMPLATE_NAME = value; }
        }

        private string _PATIENT_COUSELLING_TEMPLATE_ID;
        public string PATIENT_COUSELLING_TEMPLATE_ID
        {
            get { return _PATIENT_COUSELLING_TEMPLATE_ID; }
            set { _PATIENT_COUSELLING_TEMPLATE_ID = value; }
        }
        private string _PATIENT_COUSELLING_TEMPLATE_NAME;
        public string PATIENT_COUSELLING_TEMPLATE_NAME
        {
            get { return _PATIENT_COUSELLING_TEMPLATE_NAME; }
            set { _PATIENT_COUSELLING_TEMPLATE_NAME = value; }
        }

        private int _billingead_id;
        public int BILLINGEAD_ID
        {
            get { return _billingead_id; }
            set { _billingead_id = value; }
        }

        private string _billinghead;
        public string BILLINGHEAD
        {
            get { return _billinghead; }
            set { _billinghead = value; }
        }

        private string _SERVICE_INSTRUCTIONS_TEMPLATE_ID;
        public string SERVICE_INSTRUCTIONS_TEMPLATE_ID
        {
            get { return _SERVICE_INSTRUCTIONS_TEMPLATE_ID; }
            set { _SERVICE_INSTRUCTIONS_TEMPLATE_ID = value; }
        }
        private string _IS_SRV_INSTRUCTION_REQ;
        public string IS_SRV_INSTRUCTION_REQ
        {
            get { return _IS_SRV_INSTRUCTION_REQ; }
            set { _IS_SRV_INSTRUCTION_REQ = value; }
        }
        private string _SERVICE_INSTRUCTIONS_TEMPLATE_NAME;
        public string SERVICE_INSTRUCTIONS_TEMPLATE_NAME
        {
            get { return _SERVICE_INSTRUCTIONS_TEMPLATE_NAME; }
            set { _SERVICE_INSTRUCTIONS_TEMPLATE_NAME = value; }
        }
        private string _sub_pkd_id;

        public string SUB_PKD_ID
        {
            get { return _sub_pkd_id; }
            set { _sub_pkd_id = value; }
        }
        private string _sub_pkg_name;

        public string SUB_PKG_NAME
        {
            get { return _sub_pkg_name; }
            set { _sub_pkg_name = value; }
        }
        private int _TAX_ID;

        public int TAX_ID
        {
            get { return _TAX_ID; }
            set { _TAX_ID = value; }
        }
        private string _TAX_PCT;

        public string TAX_PCT
        {
            get { return _TAX_PCT; }
            set { _TAX_PCT = value; }
        }
        private string _TAX_AMOUNT;

        public string TAX_AMOUNT
        {
            get { return _TAX_AMOUNT; }
            set { _TAX_AMOUNT = value; }
        }
        private string _approval_reg;

        public string APPROVAL_REG
        {
            get { return _approval_reg; }
            set { _approval_reg = value; }
        }
        private string _TAX_NAME;

        public string TAX_NAME
        {
            get { return _TAX_NAME; }
            set { _TAX_NAME = value; }
        }

        private string _xml;

        public string XML
        {
            get { return _xml; }
            set { _xml = value; }
        }
        private string _IS_ONLINE_DISPLAY = string.Empty;
        public string IS_ONLINE_DISPLAY
        {
            get { return _IS_ONLINE_DISPLAY; }
            set { _IS_ONLINE_DISPLAY = value; }
        }
        private string _time_interval_id;

        public string TIME_INTERVAL_ID
        {
            get { return _time_interval_id; }
            set { _time_interval_id = value; }
        }
        private string _interval_cd;

        public string INTERVAL_CD
        {
            get { return _interval_cd; }
            set { _interval_cd = value; }
        }
        private string _interval_name;

        public string INTERVAL_NAME
        {
            get { return _interval_name; }
            set { _interval_name = value; }
        }
        private string _from_minute;

        public string FROM_MINUTE
        {
            get { return _from_minute; }
            set { _from_minute = value; }
        }
        private string _to_minute;

        public string TO_MINUTE
        {
            get { return _to_minute; }
            set { _to_minute = value; }
        }
        private string _UNI_SERVICE_TYPE_ID;

        public string UNI_SERVICE_TYPE_ID
        {
            get { return _UNI_SERVICE_TYPE_ID; }
            set { _UNI_SERVICE_TYPE_ID = value; }
        }

        private string min_ceiling;

        public string MIN_CEILING
        {
            get { return min_ceiling; }
            set { min_ceiling = value; }
        }
        private string max_ceiling;

        public string MAX_CEILING
        {
            get { return max_ceiling; }
            set { max_ceiling = value; }
        }
        private string service_unicode;

        public string SERVICE_UNICODE
        {
            get { return service_unicode; }
            set { service_unicode = value; }
        }
        private string pricing_method_name;

        public string PRICING_METHOD_NAME
        {
            get { return pricing_method_name; }
            set { pricing_method_name = value; }
        }
        private string uni_service_type_name;

        public string UNI_SERVICE_TYPE_NAME
        {
            get { return uni_service_type_name; }
            set { uni_service_type_name = value; }
        }
        private string test_occurancy;

        public string TEST_OCCURANCY
        {
            get { return test_occurancy; }
            set { test_occurancy = value; }
        }
        private string service_dispname;

        public string SERVICE_DISPNAME
        {
            get { return service_dispname; }
            set { service_dispname = value; }
        }
        private string tax_from_dt;

        public string TAX_FROM_DT
        {
            get { return tax_from_dt; }
            set { tax_from_dt = value; }
        }
        private string tax_to_dt;

        public string TAX_TO_DT
        {
            get { return tax_to_dt; }
            set { tax_to_dt = value; }
        }
        private string op_billinghead_id;

        public string OP_BILLINGHEAD_ID
        {
            get { return op_billinghead_id; }
            set { op_billinghead_id = value; }
        }
        private string num_of_days;

        public string NUM_OF_DAYS
        {
            get { return num_of_days; }
            set { num_of_days = value; }
        }
        private string is_having_universal_code;

        public string IS_HAVING_UNIVERSAL_CODE
        {
            get { return is_having_universal_code; }
            set { is_having_universal_code = value; }
        }
        private string slot_duration;

        public string SLOT_DURATION
        {
            get { return slot_duration; }
            set { slot_duration = value; }
        }
        private string luxury_tax_name;

        public string LUXURY_TAX_NAME
        {
            get { return luxury_tax_name; }
            set { luxury_tax_name = value; }
        }
        private string is_appointment;

        public string IS_APPOINTMENT
        {
            get { return is_appointment; }
            set { is_appointment = value; }
        }
        private string pre_requist_note;

        public string PRE_REQUIST_NOTE
        {
            get { return pre_requist_note; }
            set { pre_requist_note = value; }
        }
        private string is_approval_required;

        public string IS_APPROVAL_REQUIRED
        {
            get { return is_approval_required; }
            set { is_approval_required = value; }
        }
        private string is_price;

        public string IS_PRICE
        {
            get { return is_price; }
            set { is_price = value; }
        }

        private string _SERVICE_DEPENDENT_DAYS;

        public string SERVICE_DEPENDENT_DAYS
        {
            get { return _SERVICE_DEPENDENT_DAYS; }
            set { _SERVICE_DEPENDENT_DAYS = value; }
        }
        private string _UMR_NO;

        public string UMR_NO
        {
            get { return _UMR_NO; }
            set { _UMR_NO = value; }
        }
        private string _service_cd1;

        public string SERVICE_CD1
        {
            get { return _service_cd1; }
            set { _service_cd1 = value; }
        }

        private string _SERVICE_CD3;

        public string SERVICE_CD3
        {
            get { return _SERVICE_CD3; }
            set { _SERVICE_CD3 = value; }
        }
        private string _GL_NAME;

        public string GL_NAME
        {
            get { return _GL_NAME; }
            set { _GL_NAME = value; }
        }


        private string _EQUI_SERVICE_CD;

        public string EQUI_SERVICE_CD
        {
            get { return _EQUI_SERVICE_CD; }
            set { _EQUI_SERVICE_CD = value; }
        }
        private string _PROCEDURE_TYPE_ID;
        public string PROCEDURE_TYPE_ID
        {
            get { return _PROCEDURE_TYPE_ID; }
            set { _PROCEDURE_TYPE_ID = value; }
        }
        private string _TOT_RECORD_CNT;
        public string TOT_RECORD_CNT
        {
            set { _TOT_RECORD_CNT = value; }
            get { return _TOT_RECORD_CNT; }
        }
        private string _DOCTORROLE_ID;

        public string DOCTORROLE_ID
        {
            get { return _DOCTORROLE_ID; }
            set { _DOCTORROLE_ID = value; }
        }
        private string gl_code;

        public string GL_CODE
        {
            get { return gl_code; }
            set { gl_code = value; }
        }
        private string cpt_id;
        public string CPT_ID
        {
            get { return cpt_id; }
            set { cpt_id = value; }
        }
        private string cpt_name;
        public string CPT_NAME
        {
            get { return cpt_name; }
            set { cpt_name = value; }
        }
        private string _IS_DOCTOR_REQUIRED;

        public string IS_DOCTOR_REQUIRED
        {
            get { return _IS_DOCTOR_REQUIRED; }
            set { _IS_DOCTOR_REQUIRED = value; }
        }

        private string _COMPANY_BILL_HEAD_ID;

        public string COMPANY_BILL_HEAD_ID
        {
            get { return _COMPANY_BILL_HEAD_ID; }
            set { _COMPANY_BILL_HEAD_ID = value; }
        }
        private string _IS_SCHEDULE_REQUIRED;

        public string IS_SCHEDULE_REQUIRED
        {
            get { return _IS_SCHEDULE_REQUIRED; }
            set { _IS_SCHEDULE_REQUIRED = value; }
        }


        private string _ACCOUNT_SET;
        public string ACCOUNT_SET
        {
            get { return _ACCOUNT_SET; }
            set { _ACCOUNT_SET = value; }
        }
        private string _GL_CONTROL;
        public string GL_CONTROL
        {
            get { return _GL_CONTROL; }
            set { _GL_CONTROL = value; }
        }
        private string _CATEGORY;
        public string CATEGORY
        {
            get { return _CATEGORY; }
            set { _CATEGORY = value; }
        }
        private string _COGS_ACCOUNT;
        public string COGS_ACCOUNT
        {
            get { return _COGS_ACCOUNT; }
            set { _COGS_ACCOUNT = value; }
        }
        private string _SALES_REVENUE_ACCOUNT;
        public string SALES_REVENUE_ACCOUNT
        {
            get { return _SALES_REVENUE_ACCOUNT; }
            set { _SALES_REVENUE_ACCOUNT = value; }
        }

        private int _APPLICABLE_FOR_ID;
        public int APPLICABLE_FOR_ID
        {
            get { return _APPLICABLE_FOR_ID; }
            set { _APPLICABLE_FOR_ID = value; }
        }
        private int _BILL_ID;
        public int BILL_ID
        {
            get { return _BILL_ID; }
            set { _BILL_ID = value; }
        }
        private float _ORG_PCT;

        public float ORG_PCT
        {
            get { return _ORG_PCT; }
            set { _ORG_PCT = value; }
        }
        private float _DOCTOR_PCT;

        public float DOCTOR_PCT
        {
            get { return _DOCTOR_PCT; }
            set { _DOCTOR_PCT = value; }
        }
        public string EMER_ORG_PCT { get; set; }
        public string EMER_DOCTOR_PCT { get; set; }
        public string EMER_ORG_PRICE { get; set; }
        public string EMER_DOCTOR_PRICE { get; set; }
        public string SAC_CD { get; set; }
        public string IS_TAX_INCLUDE_EXCLUDE { get; set; }
        public string SERVICE_SUB_GROUP_ID { get; set; }
        public string SERVICE_SUB_GROUP_NAME { get; set; }
        public string DOC_DEPT_UINT_ID { get; set; }
        public string ITEM_ID { get; set; }
        public string ITEM_NAME { get; set; }
        public string HEALTHCHKUP_SUMMARY_TEMPLATE_ID { get; set; }
        public string HEALTHCHKUP_SUMMARY_TEMPLATE_NAME { get; set; }
    }
}
