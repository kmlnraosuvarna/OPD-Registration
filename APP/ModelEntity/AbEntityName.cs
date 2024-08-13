using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{[Serializable]
    public abstract class AbEntityName 
    {
        //
        private string _cd;
        public string CD
        {
            set { _cd = value; }
            get { return _cd; }
        }
        private string _desc;
        public string DESC
        {
            set { _desc = value; }
            get { return _desc; }
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
        private string _current_record;
        public string CURRENT_RECORD
        {
            set { _current_record = value; }
            get { return _current_record; }
        }
       
        private int _entity_id;
        public int ENTITY_ID
        {
            set { _entity_id = value; }
            get { return _entity_id; }
        }
        private int _hospital_id;
        public int HOSPITAL_ID
        {
            set { _hospital_id = value; }
            get { return _hospital_id; }
        }
        private int _hospital_seq_id;
        public int HOSPITAL_SEQ_ID
        {
            set { _hospital_seq_id = value; }
            get { return _hospital_seq_id; }
        }
    }
}

    

