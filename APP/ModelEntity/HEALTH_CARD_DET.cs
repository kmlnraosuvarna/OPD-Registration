using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class HEALTH_CARD_DET : HEALTH_CARD_TYPE
    {
        private int _health_card_det_id;
        public int HEALTH_CARD_DET_ID
        {
            set { _health_card_det_id = value; }
            get { return _health_card_det_id; }
        }
        private int _health_card_det_rev_no;
        public int HEALTH_CARD_DET_REV_NO
        {
            set { _health_card_det_rev_no = value; }
            get { return _health_card_det_rev_no; }
        }
        private string _health_card_no;
        public string HEALTH_CARD_NO
        {
            set { _health_card_no = value; }
            get { return _health_card_no; }
        }
        private string _umr_no;
        public string UMR_NO
        {
            set { _umr_no = value; }
            get { return _umr_no; }
        }
        private int _health_card_id;
        public int HEALTH_CARD_ID
        {
            set { _health_card_id = value; }
            get { return _health_card_id; }
        }
        private string _first_name;
        public string FIRST_NAME
        {
            set { _first_name = value; }
            get { return _first_name; }
        }
        private string _moddle_name;
        public string MODDLE_NAME
        {
            set { _moddle_name = value; }
            get { return _moddle_name; }
        }
        private string _last_name;
        public string LAST_NAME
        {
            set { _last_name = value; }
            get { return _last_name; }
        }
        private string _display_name;
        public string DISPLAY_NAME
        {
            set { _display_name = value; }
            get { return _display_name; }
        }
        //private int _sex;
        //public int SEX
        //{
        //    set { _sex = value; }
        //    get { return _sex; }
        //}
        private string _gender;
        public string GENDER
        {
            set { _gender = value; }
            get { return _gender; }
        }
        private string _relation;
        public string RELATION
        {
            set { _relation = value; }
            get { return _relation; }
        }
        private string _is_primary_card_holder;
        public string IS_PRIMARY_CARD_HOLDER
        {
            set { _is_primary_card_holder = value; }
            get { return _is_primary_card_holder; }
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
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }

        private int _s_NO;

        public int S_NO
        {
            get { return _s_NO; }
            set { _s_NO = value; }
        }

        private int _age;
        public int AGE
        {
            set { _age = value; }
            get { return _age; }
        }
        private string _middlename;
        public string MIDDLENAME
        {
            set { _middlename = value; }
            get { return _middlename; }
        }
       
        private string _rule_id;
        public string RULE_ID
        {
            set { _rule_id = value; }
            get { return _rule_id; }
        }

        private string _rule_name;
        public string RULE_NAME
        {
            set { _rule_name = value; }
            get { return _rule_name; }
        }
        private string _sex_name;
        public string SEX_NAME
        {
            set { _sex_name = value; }
            get { return _sex_name; }
        }
        private string _balance_amount;

        public string BALANCE_AMOUNT
        {
            get { return _balance_amount; }
            set { _balance_amount = value; }
        }
        private string _card_validity_years;

        public string CARD_VALIDITY_YEARS
        {
            get { return _card_validity_years; }
            set { _card_validity_years = value; }
        }
        private string _VALIDITY_DAYS;
        public string VALIDITY_DAYS
        {
            get { return _VALIDITY_DAYS; }
            set { _VALIDITY_DAYS = value; }
        }

        private string _employee_id;

        public string EMPLOYEE_ID
        {
            get { return _employee_id; }
            set { _employee_id = value; }
        }

        private string _EMPLOYEE_DEPENDENTS_ID;

        public string EMPLOYEE_DEPENDENTS_ID
        {
            get { return _EMPLOYEE_DEPENDENTS_ID; }
            set { _EMPLOYEE_DEPENDENTS_ID = value; }
        }

        private string _RELATIONSHIP_NAME;

        public string RELATIONSHIP_NAME
        {
            get { return _RELATIONSHIP_NAME; }
            set { _RELATIONSHIP_NAME = value; }
        }

        private string _ed_employee_id;

        public string ED_EMPLOYEE_ID
        {
            get { return _ed_employee_id; }
            set { _ed_employee_id = value; }
        }

        private string _EMPLOYEE_CD;

        public string EMPLOYEE_CD
        {
            get { return _EMPLOYEE_CD; }
            set { _EMPLOYEE_CD = value; }
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
    }

}
