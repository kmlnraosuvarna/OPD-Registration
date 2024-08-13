using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public abstract class CommonPropeties 
    {

        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }

        private int _eventFlag;
        public int EVENTFLAG
        {
            get { return _eventFlag; }
            set { _eventFlag = value; }
        }
        

        private int _revision_no;
        public int REVISION_NO
        {
            get {
                return _revision_no;
            }
            set {
                _revision_no = value;
            }
        }

        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _grp_seq_id;
        public int GRP_SEQ_ID
        {
            set { _grp_seq_id = value; }
            get { return _grp_seq_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _org_seq_id;
        public int ORG_SEQ_ID
        {
            set { _org_seq_id = value; }
            get { return _org_seq_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private int _loc_seq_id;
        public int LOC_SEQ_ID
        {
            set { _loc_seq_id = value; }
            get { return _loc_seq_id; }
        }
        private string location;

        public string LOCATION
        {
            get { return location; }
            set { location = value; }
        }
      
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private int _create_by;
        public int CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
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
        //private string _current_record;
        //public string CURRENT_RECORD
        //{
        //    set { _current_record = value; }
        //    get { return _current_record; }
        //}
        private string _create_by_name;

        public string CREATE_BY_NAME
        {
            get { return _create_by_name; }
            set { _create_by_name = value; }
        }
        private string _modified_by_name;

        public string MODIFIED_BY_NAME
        {
            get { return _modified_by_name; }
            set { _modified_by_name = value; }
        }
        private string _SAC_CD;

        public string SAC_CD
        {
            get { return _SAC_CD; }
            set { _SAC_CD = value; }
        }
        
    }
}
