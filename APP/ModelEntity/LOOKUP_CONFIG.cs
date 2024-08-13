using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{

    public class LookUP_Config_Collection : System.Collections.CollectionBase
    {
        public int Add(LOOKUP_CONFIG _value)
        {
            return InnerList.Add(_value);
        }

        public LOOKUP_CONFIG this[int index]
        {
            get
            {
                if (List.Count > index)
                    return (LOOKUP_CONFIG)List[index];
                return null;
            }
        }
    }

    public class LOOKUP_CONFIG
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
    }
}
