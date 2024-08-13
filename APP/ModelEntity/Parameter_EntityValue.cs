using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Parameter_EntityValue
    {
        private string _entity_value_seq_id;
        public string ENTITY_VALUE_REV_NO
        {
            set { _entity_value_seq_id = value; }
            get { return _entity_value_seq_id; }
        }
        private string _entity_value_id;
        public string ENTITY_VALUE_ID
        {
            set { _entity_value_id = value; }
            get { return _entity_value_id; }
        }
        private string _entity_value;
        public string ENTITY_VALUE
        {
            set { _entity_value = value; }
            get { return _entity_value; }
        }
        private string _entity_display_value;
        public string ENTITY_DISPLAY_VALUE
        {
            set { _entity_display_value = value; }
            get { return _entity_display_value; }
        }
        private string _entity_id;
        public string ENTITY_ID
        {
            set { _entity_id = value; }
            get { return _entity_id; }
        }
        private int _entity_seq_id;
        public int ENTITY_SEQ_ID
        {
            set { _entity_seq_id = value; }
            get { return _entity_seq_id; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
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
        private string _current_record;
        public string CURRENT_RECORD
        {
            set { _current_record = value; }
            get { return _current_record; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
    }
}



