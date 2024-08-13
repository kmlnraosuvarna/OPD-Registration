using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class ENTITY
    {
        private int _entity_id;
        public int ENTITY_ID
        {
            get { return _entity_id; }
            set { _entity_id = value; }
        }
        private string _entity_cd;
        public string ENTITY_CD
        {
            get { return _entity_cd; }
            set { _entity_cd = value; }
        }
        private string _entity_desc;
        public string ENTITY_DESC
        {
            get { return _entity_desc; }
            set { _entity_desc = value; }
        }
        private int _entity_value_id;
        public int ENTITY_VALUE_ID
        {
            get { return _entity_value_id; }
            set { _entity_value_id = value; }
        }
        private string _entity_value_cd;
        public string ENTITY_VALUE_CD
        {
            get { return _entity_value_cd; }
            set { _entity_value_cd = value; }
        }
        private string _entity_value_name;
        public string ENTITY_VALUE_NAME
        {
            get { return _entity_value_name; }
            set { _entity_value_name = value; }
        }
        private string _entity_value_desc;
        public string ENTITY_VALUE_DESC
        {
            get { return _entity_value_desc; }
            set { _entity_value_desc = value; }
        }
        private string _session_id;
        public string SESSION_ID
        {
            get { return _session_id; }
            set { _session_id = value; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
        }
        public string XML { get; set; }
        public string ENTITY_VALUE_REV_NO { get; set; }
        public string DISPLAY_ORDER { get; set; }
    }
}
