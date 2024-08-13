using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{

    public class CounterUser
    {

        private int counter_user_id;

        public int COUNTER_USER_ID
        {
            get { return counter_user_id; }
            set { counter_user_id = value; }
        }


        private string counter_id;

        public string COUNTER_ID
        {
            get { return counter_id; }
            set { counter_id = value; }
        }


        private string user_id;

        public string USER_ID
        {
            get { return user_id; }
            set { user_id = value; }
        }

        private int counter_user_rev_no;

        public int COUNTER_USER_REV_NO
        {
            get { return counter_user_rev_no; }
            set { counter_user_rev_no = value; }
        }


        private int counter_rev_no;

        public int COUNTER_REV_NO
        {
            get { return counter_rev_no; }
            set { counter_rev_no = value; }
        }

        private int user_rev_no;

        public int USER_REV_NO
        {
            get { return user_rev_no; }
            set { user_rev_no = value; }
        }


        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private string counter_name;

        public string COUNTER_NAME
        {
            get { return counter_name; }
            set { counter_name = value; }
        }
        private string user_name;

        public string USER_NAME
        {
            get { return user_name; }
            set { user_name = value; }
        }

        private string doctor_id;

        public string DOCTOR_ID
        {
            get { return doctor_id; }
            set { doctor_id = value; }
        }

        private int doctor_rev_no;

        public int DOCTOR_REV_NO
        {
            get { return doctor_rev_no; }
            set { doctor_rev_no = value; }
        }

        private int counter_doc_id;

        public int COUNTER_DOC_ID
        {
            get { return counter_doc_id; }
            set { counter_doc_id = value; }
        }

        private int counter_doc_rev_no;

        public int COUNTER_DOC_REV_NO
        {
            get { return counter_doc_rev_no; }
            set { counter_doc_rev_no = value; }
        }

        private string doctor_name;

        public string DOCTOR_NAME
        {
            get { return doctor_name; }
            set { doctor_name = value; }
        }

        private string _COUNTER_IDS;

        public string COUNTER_IDS
        {
            get { return _COUNTER_IDS; }
            set { _COUNTER_IDS = value; }
        }

        private string _FLAG;

        public string FLAG
        {
            get { return _FLAG; }
            set { _FLAG = value; }
        }
        private int _LOC_ID;

        public int LOC_ID
        {
            get { return _LOC_ID; }
            set { _LOC_ID = value; }
        }
        private string _LOCATION_NAME;

        public string LOCATION_NAME
        {
            get { return _LOCATION_NAME; }
            set { _LOCATION_NAME = value; }
        }

        public string CREATE_BY { get; set; }
        public string CREATE_DT { get; set; }
        public string MODIFY_BY { get; set; }
        public string MODIFY_DT { get; set; }
        public string RECORD_STATUS { get; set; }

    }
}
