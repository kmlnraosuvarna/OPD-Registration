using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Mformdetails
    {
        private int FORM_DTL_REV_NO, QUESTION_ID, FORM_ID, FORM_REV_NO, CONTROL_VALUE, ACTUAL_SCORE, CUSTOM_SCORE, _TEMPLATE_SCORE,session_id;
        private string patient_id, Template_id;

        public int TEMPLATE_SCORE
        {
            get { return _TEMPLATE_SCORE; }
            set { _TEMPLATE_SCORE = value; }
        }

        public int FORM_DTL_REV_NO1
        {
            get { return FORM_DTL_REV_NO; }
            set { FORM_DTL_REV_NO = value; }
        }

        public int QUESTION_ID1
        {
            get { return QUESTION_ID; }
            set { QUESTION_ID = value; }
        }

        public int FORM_ID1
        {
            get { return FORM_ID; }
            set { FORM_ID = value; }
        }

        public int FORM_REV_NO1
        {
            get { return FORM_REV_NO; }
            set { FORM_REV_NO = value; }
        }

        public int CONTROL_VALUE1
        {
            get { return CONTROL_VALUE; }
            set { CONTROL_VALUE = value; }
        }

        public int ACTUAL_SCORE1
        {
            get { return ACTUAL_SCORE; }
            set { ACTUAL_SCORE = value; }
        }

        public int CUSTOM_SCORE1
        {
            get { return CUSTOM_SCORE; }
            set { CUSTOM_SCORE = value; }
        }
        private string NOTES;

        public string NOTES1
        {
            get { return NOTES; }
            set { NOTES = value; }
        }

        //public string NOTES1
        //{
        //    get { return NOTES; }
        //    set { NOTES = value; }
        //}


        //Following code written by PRAVEENS for GetComplaints

        //FOR complaint editing

        private int _count;
        public int Count
        {
            get { return _count; }
            set { _count = value; }
        }

        private int _FORM_DTL_ID;
        public int FORM_DTL_ID
        {
            get { return _FORM_DTL_ID; }
            set { _FORM_DTL_ID = value; }
        }

        private int _COMPLAINT_ID;
        public int COMPLAINT_ID
        {
            get { return _COMPLAINT_ID; }
            set { _COMPLAINT_ID = value; }
        }


        private int _COMPLAINT_ID_REV_NO;
        public int COMPLAINT_ID_REV_NO
        {
            get { return _COMPLAINT_ID_REV_NO; }
            set { _COMPLAINT_ID_REV_NO = value; }
        }

        private DateTime _FROMDATE;
        public DateTime FROMDATE
        {
            get { return _FROMDATE; }
            set { _FROMDATE = value; }
        }


       
        public string Template_id1
        {
            get { return Template_id; }
            set { Template_id = value; }
        }
      
        public string Patient_id
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
       
        public int Session_id
        {
            get { return session_id; }
            set { session_id = value; }
        }

        private Mformdetailscollections detailscollections;

        public Mformdetailscollections Detailscollections
        {
            get { return detailscollections; }
            set { detailscollections = value; }
        }

    }
}


