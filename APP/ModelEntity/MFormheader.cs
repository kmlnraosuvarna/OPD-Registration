using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class MFormheader : Mformdetails
    {
        private string form_id, form_rev_no, feedback_date, patient_id, Template_id, note, _COMPLAINT;
        private int session_id;

        public string Template_id1
        {
            get { return Template_id; }
            set { Template_id = value; }
        }

        public string Form_id
        {
            get { return form_id; }
            set { form_id = value; }
        }

        public string Form_rev_no
        {
            get { return form_rev_no; }
            set { form_rev_no = value; }
        }

        private int _question;

        public int Question
        {
            get { return _question; }
            set { _question = value; }
        }

        public int Session_id
        {
            get { return session_id; }
            set { session_id = value; }
        }

        public string Feedback_date
        {
            get { return feedback_date; }
            set { feedback_date = value; }
        }

        public string Patient_id
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
        public string Note
        {
            get { return note; }
            set { note = value; }
        }

        public string COMPLAINT
        {
            get { return _COMPLAINT; }
            set { _COMPLAINT = value; }
        } 

        //Following code written by PRAVEENS for GetComplaints

        #region GetComplaints
        private string _QUESTION_ID;
        public string QUESTION_ID
        {
            get { return _QUESTION_ID; }
            set { _QUESTION_ID = value; }
        }

        //private string _CONTROL_VALUE;
        //public string CONTROL_VALUE
        //{
        //    get { return _CONTROL_VALUE; }
        //    set { _CONTROL_VALUE = value; }
        //}

        //private string _ACTUAL_SCORE;
        //public string ACTUAL_SCORE
        //{
        //    get { return _ACTUAL_SCORE; }
        //    set { _ACTUAL_SCORE = value; }
        //}
        private string _QUESTION_NAME;
        public string QUESTION_NAME
        {
            get { return _QUESTION_NAME; }
            set { _QUESTION_NAME = value; }
        }

        private string _COMPLAINT_TYPE_ID;
        public string COMPLAINT_TYPE_ID
        {
            get { return _COMPLAINT_TYPE_ID; }
            set { _COMPLAINT_TYPE_ID = value; }
        }

        private string _COMPLAINT_DESC;
        public string COMPLAINT_DESC
        {
            get { return _COMPLAINT_DESC; }
            set { _COMPLAINT_DESC = value; }
        }

        private string _PREVENT_ACTION;
        public string PREVENT_ACTION
        {
            get { return _PREVENT_ACTION; }
            set { _PREVENT_ACTION = value; }
        }

        private string _CORRECT_ACTION;
        public string CORRECT_ACTION
        {
            get { return _CORRECT_ACTION; }
            set { _CORRECT_ACTION = value; }
        }

        private string _REFERENCE_NO;
        public string REFERENCE_NO
        {
            get { return _REFERENCE_NO; }
            set { _REFERENCE_NO = value; }
        }

        private string _CONTROL_VAL_NAME;
        public string CONTROL_VAL_NAME
        {
            get { return _CONTROL_VAL_NAME; }
            set { _CONTROL_VAL_NAME = value; }
        }

        private string _A;
        public string A
        {
            get { return _A; }
            set { _A = value; }
        }

        private string _B;
        public string B
        {
            get { return _B; }
            set { _B = value; }
        }

        private string _C;
        public string C
        {
            get { return _C; }
            set { _C = value; }
        }

        private string _D;
        public string D
        {
            get { return _D; }
            set { _D = value; }
        }
        #endregion

        private Mformdetailscollections detailscollections;

        public Mformdetailscollections Detailscollections
        {
            get { return detailscollections; }
            set { detailscollections = value; }
        }


    }
}
