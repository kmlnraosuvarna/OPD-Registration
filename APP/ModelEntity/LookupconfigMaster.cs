using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class LookupconfigMaster
    {
         private int _lookup_id;
        public int LOOKUP_ID
        {
            set { _lookup_id = value; }
            get { return _lookup_id; }
        }
        private string _lookup_name;
        public string LOOKUP_NAME
        {
            set { _lookup_name = value; }
            get { return _lookup_name; }
        }
        private string _lookup_desc;
        public string LOOKUP_DESC
        {
            set { _lookup_desc = value; }
            get { return _lookup_desc; }
        }
        private string _lookup_service_method;
        public string LOOKUP_SERVICE_METHOD
        {
            set { _lookup_service_method = value; }
            get { return _lookup_service_method; }
        }
        private string _lookup_service_path;
        public string LOOKUP_SERVICE_PATH
        {
            set { _lookup_service_path = value; }
            get { return _lookup_service_path; }
        }
        private string _lookup_column;
        public string LOOKUP_COLUMN
        {
            set { _lookup_column = value; }
            get { return _lookup_column; }
        }

        private string _lookup_title;

        public string LOOKUP_TITLE
        {
            get { return _lookup_title; }
            set { _lookup_title = value; }
        }

        private string _lookup_column_alias;
        public string LOOKUP_COLUMN_ALIAS
        {
            set { _lookup_column_alias = value; }
            get { return _lookup_column_alias; }
        }
        private string _lookup_key_columns;
        public string LOOKUP_KEY_COLUMNS
        {
            set { _lookup_key_columns = value; }
            get { return _lookup_key_columns; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _lookup_config_rev_no;
        public int LOOKUP_CONFIG_REV_NO
        {
            set { _lookup_config_rev_no = value; }
            get { return _lookup_config_rev_no; }
        }
        private string _record_status;

        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
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
        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }
    }
    }
