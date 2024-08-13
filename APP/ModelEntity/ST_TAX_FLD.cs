using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
[Serializable]
    public class ST_TAX_FLD
    {
        private int _filed_id;
        public int FILED_ID
        {
            set { _filed_id = value; }
            get { return _filed_id; }
        }
        private int _field_rev_no;
        public int FIELD_REV_NO
        {
            set { _field_rev_no = value; }
            get { return _field_rev_no; }
        }
        private string _field_cd;
        public string FIELD_CD
        {
            set { _field_cd = value; }
            get { return _field_cd; }
        }
        private string _field_name;
        public string FIELD_NAME
        {
            set { _field_name = value; }
            get { return _field_name; }
        }
        private string _field_desc;
        public string FIELD_DESC
        {
            set { _field_desc = value; }
            get { return _field_desc; }
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
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }

        private int _TAX_ID;

        public int TAX_ID
        {
            get { return _TAX_ID; }
            set { _TAX_ID = value; }
        }

        private int _TAX_REV_NO;

        public int TAX_REV_NO
        {
            get { return _TAX_REV_NO; }
            set { _TAX_REV_NO = value; }
        }

        private string _TAX_CD;

        public string TAX_CD
        {
            get { return _TAX_CD; }
            set { _TAX_CD = value; }
        }

        private string _TAX_NAME;

        public string TAX_NAME
        {
            get { return _TAX_NAME; }
            set { _TAX_NAME = value; }
        }

        private string _TAX_DESC;

        public string TAX_DESC
        {
            get { return _TAX_DESC; }
            set { _TAX_DESC = value; }
        }

        private string _SERVICE_ID;

        public string SERVICE_ID
        {
            get { return _SERVICE_ID; }
            set { _SERVICE_ID = value; }
        }
        private string _TAX_PCT;

        public string TAX_PCT
        {
            get { return _TAX_PCT; }
            set { _TAX_PCT = value; }
        }
        
    }
}
