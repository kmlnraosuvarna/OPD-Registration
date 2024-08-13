using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Service_PriceModel
    {

        private string _SERVICE_CD;

        public string SERVICE_CD
        {
            get { return _SERVICE_CD; }
            set { _SERVICE_CD = value; }
        }
        private string _SERVICE_NAME;

        public string SERVICE_NAME
        {
            get { return _SERVICE_NAME; }
            set { _SERVICE_NAME = value; }
        }
        private string _cons_reg_fee = "0";
        public string CONS_REG_REE
        {
            get { return _cons_reg_fee; }
            set { _cons_reg_fee = value; }
        }


        private int _charge_type_id = 0;
        public int CHARGE_TYPE_ID
        {
            get { return _charge_type_id; }
            set { _charge_type_id = value; }
        }

        private string _service_price_id = String.Empty;
        public string SERVICE_PRICE_ID
        {
            set { _service_price_id = value; }
            get { return _service_price_id; }
        }
        private string _service_price_rev_no = String.Empty;
        public string SERVICE_PRICE_REV_NO
        {
            set { _service_price_rev_no = value; }
            get { return _service_price_rev_no; }
        }
        private int _service_id;
        public int SERVICE_ID
        {
            set { _service_id = value; }
            get { return _service_id; }
        }
        private string _start_dt;
        public string START_DT
        {
            set { _start_dt = value; }
            get { return _start_dt; }
        }
        private string _end_dt;
        public string END_DT
        {
            set { _end_dt = value; }
            get { return _end_dt; }
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
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _price_tier_id;
        public int PRICE_TIER_ID
        {

            set { _price_tier_id = value; }
            get { return _price_tier_id; }
        }

        private int _tariff_id;
        public int TARIFF_ID
        {
            set { _tariff_id = value; }
            get { return _tariff_id; }
        }
        private string _org_price;
        public string ORG_PRICE
        {
            set { _org_price = value; }
            get { return _org_price; }
        }

        private string _doctor_price;
        public string DOCTOR_PRICE
        {
            set { _doctor_price = value; }
            get { return _doctor_price; }
        }

        private string _price;
        public string PRICE
        {
            set { _price = value; }
            get { return _price; }
        }

        private string _cost;
        public string COST
        {
            set { _cost = value; }
            get { return _cost; }
        }

        private int _no_of_days;
        public int NO_OF_DAYS
        {
            set { _no_of_days = value; }
            get { return _no_of_days; }
        }

        private int _no_of_visits;
        public int NO_OF_VISITS
        {
            set { _no_of_visits = value; }
            get { return _no_of_visits; }
        }

        private int _doctor_id;
        public int DOCTOR_ID
        {
            set { _doctor_id = value; }
            get { return _doctor_id; }
        }

        private int _doctor_rev_no;
        public int DOCTOR_REV_NO
        {
            set { _doctor_rev_no = value; }
            get { return _doctor_rev_no; }
        }

        private int _consultation_type_id;
        public int CONSULTATION_TYPE_ID
        {
            set { _consultation_type_id = value; }
            get { return _consultation_type_id; }
        }

        private int _consultation_type_rev_no;
        public int CONSULTATION_TYPE_REV_NO
        {
            set { _consultation_type_rev_no = value; }
            get { return _consultation_type_rev_no; }
        }

        private int _ward_group_id;
        public int WARD_GROUP_ID
        {
            set { _ward_group_id = value; }
            get { return _ward_group_id; }
        }

        private int _ward_group_rev_no;
        public int WARD_GROUP_REV_NO
        {
            set { _ward_group_rev_no = value; }
            get { return _ward_group_rev_no; }
        }

        private int _ward_id;
        public int WARD_ID
        {
            set { _ward_id = value; }
            get { return _ward_id; }
        }

        private int _ward_rev_no;
        public int WARD_REV_NO
        {
            set { _ward_rev_no = value; }
            get { return _ward_rev_no; }
        }
        private int _surgery_category_id;
        public int SURGERY_CATEGORY_ID
        {
            set { _surgery_category_id = value; }
            get { return _surgery_category_id; }
        }
        private int _surgery_category_rev_no;
        public int SURGERY_CATEGORY_REV_NO
        {
            set { _surgery_category_rev_no = value; }
            get { return _surgery_category_rev_no; }
        }

        private int _surgery_class_id;
        public int SURGERY_CLASS_ID
        {
            set { _surgery_class_id = value; }
            get { return _surgery_class_id; }
        }
        private int _surgery_class_rev_no;
        public int SURGERY_CLASS_REV_NO
        {
            set { _surgery_class_rev_no = value; }
            get { return _surgery_class_rev_no; }
        }

        private int _department_id;
        public int DEPARTMENT_ID
        {
            set { _department_id = value; }
            get { return _department_id; }
        }

        private int _department_rev_no;
        public int DEPARTMENT_REV_NO
        {
            set { _department_rev_no = value; }
            get { return _department_rev_no; }
        }

        private int _bed_type_id;
        public int BED_TYPE_ID
        {
            set { _bed_type_id = value; }
            get { return _bed_type_id; }
        }
        private int _bed_type_rev_no;
        public int BED_TYPE_REV_NO
        {
            set { _bed_type_rev_no = value; }
            get { return _bed_type_rev_no; }
        }


        private int _patient_class_id;
        public int PATIENT_CLASS_ID
        {

            set { _patient_class_id = value; }
            get { return _patient_class_id; }
        }


        private int _patient_class_rev_no;
        public int PATIENT_CLASS_REV_NO
        {

            set { _patient_class_rev_no = value; }
            get { return _patient_class_rev_no; }
        }

        private int _specialization_id;
        public int SPECIALIZATION_ID
        {
            set { _specialization_id = value; }
            get { return _specialization_id; }
        }

        private int _specialization_rev_no;
        public int SPECIALIZATION_REV_NO
        {

            set { _specialization_rev_no = value; }
            get { return _specialization_rev_no; }
        }

        private int _area_id;
        public int AREA_ID
        {
            set { _area_id = value; }
            get { return _area_id; }
        }

        private int _area_rev_no;
        public int AREA_REV_NO
        {
            set { _area_rev_no = value; }
            get { return _area_rev_no; }
        }

        private int _city_id;
        public int CITY_ID
        {
            set { _city_id = value; }
            get { return _city_id; }
        }

        private int _city_rev_no;
        public int CITY_REV_NO
        {
            set { _city_rev_no = value; }
            get { return _city_rev_no; }
        }

        private int _state_id;
        public int STATE_ID
        {
            set { _state_id = value; }
            get { return _state_id; }
        }

        private int _state_rev_no;
        public int STATE_REV_NO
        {
            set { _state_rev_no = value; }
            get { return _state_rev_no; }
        }

        private int _country_id;
        public int COUNTRY_ID
        {
            set { _country_id = value; }
            get { return _country_id; }
        }

        private int _country_rev_no;
        public int COUNTRY_REV_NO
        {
            set { _country_rev_no = value; }
            get { return _country_rev_no; }
        }

        private int _doctor_category_id;
        public int DOCTOR_CATEGORY_ID
        {
            set { _doctor_category_id = value; }
            get { return _doctor_category_id; }
        }

        private int _doctor_category_rev_no;
        public int DOCTOR_CATEGORY_REV_NO
        {
            set { _doctor_category_rev_no = value; }
            get { return _doctor_category_rev_no; }
        }

        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
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
        private int _tariff_rev_no;
        public int TARIFF_REV_NO
        {
            set { _tariff_rev_no = value; }
            get { return _tariff_rev_no; }
        }

        private int _service_rev_no;
        public int SERVICE_REV_NO
        {
            set { _service_rev_no = value; }
            get { return _service_rev_no; }
        }

        private int _price_tier_rev_no;
        public int PRICE_TIER_REV_NO
        {
            set { _price_tier_rev_no = value; }
            get { return _price_tier_rev_no; }
        }

        private int _time_slot_id;
        public int TIME_SLOT_ID
        {
            set { _time_slot_id = value; }
            get { return _time_slot_id; }
        }

        private int _time_slot_rev_no;
        public int TIME_SLOT_REV_NO
        {
            set { _time_slot_rev_no = value; }
            get { return _time_slot_rev_no; }
        }


        private int company_id;
        public int COMPANY_ID
        {
            set { company_id = value; }
            get { return company_id; }
        }

        private int company_rev_no;
        public int COMPANY_REV_NO
        {
            set { company_rev_no = value; }
            get { return company_rev_no; }
        }

        private string _ward_group_ids;
        public string WARD_GROUP_IDS
        {
            set { _ward_group_ids = value; }
            get { return _ward_group_ids; }
        }


        private int _price_dim_id = 0;
        public int PRICE_DIM_ID
        {
            get { return _price_dim_id; }
            set { _price_dim_id = value; }
        }


        private string _price_dim_cd;
        public string PRICE_DIM_CD
        {
            get { return _price_dim_cd; }
            set { _price_dim_cd = value; }
        }


        private string _price_dim_desc;
        public string PRICE_DIM_DESC
        {
            get { return _price_dim_desc; }
            set { _price_dim_desc = value; }
        }


        private string _price_tier_priority;
        public string PRICE_TIER_PRIORITY
        {
            get { return _price_tier_priority; }
            set { _price_tier_priority = value; }
        }


        private int _p_d_no_of_visits = 0;
        public int P_D_NO_VISITS
        {
            get { return _p_d_no_of_visits; }
            set { _p_d_no_of_visits = value; }
        }

        private int _p_no_of_visits = 0;
        public int P_NO_VISITS
        {
            get { return _p_no_of_visits; }
            set { _p_no_of_visits = value; }
        }

        private int _no_of_visits_doctor_day = 0;
        public int NO_OF_VISITS_DOCTOR_DAY
        {
            get { return _no_of_visits_doctor_day; }
            set { _no_of_visits_doctor_day = value; }

        }
        private string _emerg_price;

        public string EMERGENCY_PRICE
        {
            get { return _emerg_price; }
            set { _emerg_price = value; }
        }
        private string ward_group_name;

        public string WARD_GROUP_NAME
        {
            get { return ward_group_name; }
            set { ward_group_name = value; }
        }
        private string consultation_type_name;

        public string CONSULTATION_TYPE_NAME
        {
            get { return consultation_type_name; }
            set { consultation_type_name = value; }
        }
        private string doctor_name;

        public string DOCTOR_NAME
        {
            get { return doctor_name; }
            set { doctor_name = value; }
        }
        private string no_of_free_revisits;

        public string NO_OF_FREE_REVISITS
        {
            get { return no_of_free_revisits; }
            set { no_of_free_revisits = value; }
        }
        private string no_of_paid_revisits;

        public string NO_OF_PAID_REVISITS
        {
            get { return no_of_paid_revisits; }
            set { no_of_paid_revisits = value; }
        }

        private string ward_group_cd;

        public string WARD_GROUP_CD
        {
            get { return ward_group_cd; }
            set { ward_group_cd = value; }
        }
        private string _ot_category_id;

        public string OT_CATEGORY_ID
        {
            get { return _ot_category_id; }
            set { _ot_category_id = value; }
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

        private string _org_pct;
        public string ORG_PCT
        {
            set { _org_pct = value; }
            get { return _org_pct; }
        }

        private string _doctor_pct;
        public string DOCTOR_PCT
        {
            set { _doctor_pct = value; }
            get { return _doctor_pct; }
        }
    }
}







