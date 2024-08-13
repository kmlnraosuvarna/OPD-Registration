using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class HEALTH_CARD_TYPE : HEALTH_CARD_TYPE_SLAB
    {
        private int _health_card_type_id;
        public int HEALTH_CARD_TYPE_ID
        {
            set { _health_card_type_id = value; }
            get { return _health_card_type_id; }
        }
        private int _health_card_type_rev_no;
        public int HEALTH_CARD_TYPE_REV_NO
        {
            set { _health_card_type_rev_no = value; }
            get { return _health_card_type_rev_no; }
        }
        private string _health_card_type_cd;
        public string HEALTH_CARD_TYPE_CD
        {
            set { _health_card_type_cd = value; }
            get { return _health_card_type_cd; }
        }
        private string _health_card_type_name;
        public string HEALTH_CARD_TYPE_NAME
        {
            set { _health_card_type_name = value; }
            get { return _health_card_type_name; }
        }
        private string _health_card_type_desc;
        public string HEALTH_CARD_TYPE_DESC
        {
            set { _health_card_type_desc = value; }
            get { return _health_card_type_desc; }
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
        private int _create_by;
        public int CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
        }
        private string _create_by1;
        public string CREATE_BY1
        {
            set { _create_by1 = value; }
            get { return _create_by1; }
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

        private string _modify_by1;
        public string MODIFY_BY1
        {
            set { _modify_by1 = value; }
            get { return _modify_by1; }
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
        private string _xml;
        public string XML
        {
            get { return _xml; }
            set { _xml = value; }
        }
        private HealthCardSlabCollection _hlthcardtype_det_collxml;

        public HealthCardSlabCollection Hlthcardtype_det_collxml
        {
            get { return _hlthcardtype_det_collxml; }
            set { _hlthcardtype_det_collxml = value; }
        }
        private string _schemename;
        public string SCHEMENAME
        {
            get { return _schemename; }
            set { _schemename = value; }
        }
        private string _schemeid;
        public string SCHEMEID
        {
            get { return _schemeid; }
            set { _schemeid = value; }
        }

        private string _HEALTH_CARD_NO;

        public string HEALTH_CARD_NO
        {
            get { return _HEALTH_CARD_NO; }
            set { _HEALTH_CARD_NO = value; }
        }

        private string _FULL_NAME;

        public string FULL_NAME
        {
            get { return _FULL_NAME; }
            set { _FULL_NAME = value; }
        }

        private string _UMR_NO;

        public string UMR_NO
        {
            get { return _UMR_NO; }
            set { _UMR_NO = value; }
        }
        private int _HEALTH_CARD_ID;

        public int HEALTH_CARD_ID
        {
            get { return _HEALTH_CARD_ID; }
            set { _HEALTH_CARD_ID = value; }
        }

        private string _UTILIZED_AMOUNT;

        public string UTILIZED_AMOUNT
        {
            get { return _UTILIZED_AMOUNT; }
            set { _UTILIZED_AMOUNT = value; }
        }

        private int _MAX_NO_OF_PERSONS;

        public int MAX_NO_OF_PERSONS
        {
            get { return _MAX_NO_OF_PERSONS; }
            set { _MAX_NO_OF_PERSONS = value; }
        }

        private int cncsn_rule_id;

        public int CNCSN_RULE_ID
        {
            get { return cncsn_rule_id; }
            set { cncsn_rule_id = value; }
        }

        private string cncsn_rule_cd;

        public string CNCSN_RULE_CD
        {
            get { return cncsn_rule_cd; }
            set { cncsn_rule_cd = value; }
        }

        private string cncsn_rule_name;

        public string CNCSN_RULE_NAME
        {
            get { return cncsn_rule_name; }
            set { cncsn_rule_name = value; }
        }

        private string cncsn_define_by;

        public string CNCSN_DEFINE_BY
        {
            get { return cncsn_define_by; }
            set { cncsn_define_by = value; }
        }

        private string _AUTH_NAME;

        public string AUTH_NAME
        {
            get { return _AUTH_NAME; }
            set { _AUTH_NAME = value; }
        }


        private string _CNCSN_DEFINE_NAME;

        public string CNCSN_DEFINE_NAME
        {
            get { return _CNCSN_DEFINE_NAME; }
            set { _CNCSN_DEFINE_NAME = value; }
        }
        public string IS_EDIT { get; set; }
        public string ELIGIBILITY_AMOUNT_USE { get; set; }
        public string IS_AMOUNT_CHANGE { get; set; }
        public string AUTO_PREFIX { get; set; }
        public string  HEALTH_CARD_CODE { get; set; }
       
    }
}

