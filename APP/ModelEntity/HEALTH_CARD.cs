using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class HEALTH_CARD : HEALTH_CARD_DET
    {
        private int _health_card_id;
        public int HEALTH_CARD_ID
        {
            set { _health_card_id = value; }
            get { return _health_card_id; }
        }
        private int _health_card_rev_no;
        public int HEALTH_CARD_REV_NO
        {
            set { _health_card_rev_no = value; }
            get { return _health_card_rev_no; }
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
        private string _actual_amount;
        public string ACTUAL_AMOUNT
        {
            set { _actual_amount = value; }
            get { return _actual_amount; }
        }
        private string _eligibility_amount;
        public string ELIGIBILITY_AMOUNT
        {
            set { _eligibility_amount = value; }
            get { return _eligibility_amount; }
        }
        private string _utilized_amount;
        public string UTILIZED_AMOUNT
        {
            set { _utilized_amount = value; }
            get { return _utilized_amount; }
        }
        private string _BALANCE_AMOUNT;

        public string BALANCE_AMOUNT
        {
            get { return _BALANCE_AMOUNT; }
            set { _BALANCE_AMOUNT = value; }
        }

        private string _health_card_issue_dt;
        public string HEALTH_CARD_ISSUE_DT
        {
            set { _health_card_issue_dt = value; }
            get { return _health_card_issue_dt; }
        }
        private int _max_no_of_persons;
        public int MAX_NO_OF_PERSONS
        {
            set { _max_no_of_persons = value; }
            get { return _max_no_of_persons; }
        }
        private string _validity_from_dt;
        public string VALIDITY_FROM_DT
        {
            set { _validity_from_dt = value; }
            get { return _validity_from_dt; }
        }
        private string _validity_to_date;
        public string VALIDITY_TO_DATE
        {
            set { _validity_to_date = value; }
            get { return _validity_to_date; }
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
        private int _page_num;
        public int PAGE_NUM
        {
            get { return _page_num; }
            set { _page_num = value; }
        }
        private int _page_size;
        public int PAGE_SIZE
        {
            get { return _page_size; }
            set { _page_size = value; }
        }
        private HealthCardCollection _hlthcard_det_coll;
        public HealthCardCollection HLTHCARD_DET_COLL
        {
            set { _hlthcard_det_coll = value; }
            get { return _hlthcard_det_coll; }
        }

        private Healthcarddetlcollectionxml _hlthcard_det_collxml;
        public Healthcarddetlcollectionxml HLTHCARD_DET_COLLXML
        {
            set { _hlthcard_det_collxml = value; }
            get { return _hlthcard_det_collxml; }
        }

        private int _health_card_type_id;
        public int HEALTH_CARD_TYPE_ID
        {
            get { return _health_card_type_id; }
            set { _health_card_type_id = value; }
        }

        private string health_card_displayname;
        public string HEALTH_CARD_DISPLAYNAME
        {
            get { return health_card_displayname; }
            set { health_card_displayname = value; }
        }
        private int card_validity_days;

        public int CARD_VALIDITY_DAYS
        {
            get { return card_validity_days; }
            set { card_validity_days = value; }
        }
        private string _xml;

        public string XML
        {
            get { return _xml; }
            set { _xml = value; }
        }
      
        private string validity_to_dt;
        public string VALIDITY_TO_DT
        {
            set { validity_to_dt = value; }
            get { return validity_to_dt; }
        }

        private string _EMPLOYEE_NAME;

        public string EMPLOYEE_NAME
        {
            get { return _EMPLOYEE_NAME; }
            set { _EMPLOYEE_NAME = value; }
        }
      
    }
}

