using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class HEALTH_CARD_TYPE_SLAB 
    {
        private int _card_type_slab_id;
        public int CARD_TYPE_SLAB_ID
        {
            set { _card_type_slab_id = value; }
            get { return _card_type_slab_id; }
        }
        private int _card_type_slab_rev_no;
        public int CARD_TYPE_SLAB_REV_NO
        {
            set { _card_type_slab_rev_no = value; }
            get { return _card_type_slab_rev_no; }
        }
        private string _no_of_days;
        public string NO_OF_DAYS
        {
            set { _no_of_days = value; }
            get { return _no_of_days; }
        }
        private string _percentage;
        public string PERCENTAGE
        {
            set { _percentage = value; }
            get { return _percentage; }
        }
        private int _health_card_type_id;
        public int HEALTH_CARD_TYPE_ID
        {
            set { _health_card_type_id = value; }
            get { return _health_card_type_id; }
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
        private string health_card_type_name;
        public string HEALTH_CARD_TYPE_NAME
        {
            get { return health_card_type_name; }
            set { health_card_type_name = value; }
        }
    }
}

