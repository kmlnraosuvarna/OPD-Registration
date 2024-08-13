using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class PatientAddress : Address
    {
        private int _patient_id;
        public int Patient_Id
        {
            get
            {
                return _patient_id;
            }
            set
            {
                _patient_id = value;
            }
        }

    
        private string _urEmrNo = string.Empty;
        public string UrEmrNo
        {
            get
            {
                return _urEmrNo;
            }
            set
            {
                _urEmrNo = value;
            }
        }
        private string _firstName = string.Empty;
        public string FirstName
        {
            get
            {
                return _firstName;
            }
            set
            {
                _firstName = value;
            }
        }
        private string _middleName = string.Empty;
        public string MiddleName
        {
            get
            {
                return _middleName;
            }
            set
            {
                _middleName = value;
            }
        }
        private string _lastName = string.Empty;
        public string LastName
        {
            get
            {
                return _lastName;
            }
            set
            {
                _lastName = value;
            }
        }

        private string _displayName = string.Empty;
        public string DisplayName
        {
            get
            {
                return _displayName;
            }
            set
            {
                _displayName = value;
            }
        }

        private int _patient_det3_rev_no;
        public int PATIENT_DET3_REV_NO
        {
            get { return _patient_det3_rev_no; }
            set { _patient_det3_rev_no = value; }
        }

        private int Refrl_Type_Id;
        public int REFRL_TYPE_ID
        {
            get { return Refrl_Type_Id; }
            set { Refrl_Type_Id = value; }
        }

        private int Dispatch_Type_Id;
         public int DISPATCH_TYPE_ID
        {
            get { return Dispatch_Type_Id; }
            set { Dispatch_Type_Id = value; }
        }
         private string Dispatch_Method_Name;
        public string DISPATCH_METHOD_NAME
        {
            get { return Dispatch_Method_Name; }
            set { Dispatch_Method_Name = value; }
        }
        private string _PREST_PERMI;
        public string PREST_PERMI
        {
            get { return _PREST_PERMI; }
            set { _PREST_PERMI = value; }
        }
        private string _PREST_OTHER;
        public string PREST_OTHER
        {
            get { return _PREST_OTHER; }
            set { _PREST_OTHER = value; }
        }
        private string _STD_CODE;
        public string STD_CODE
        {
            get { return _STD_CODE; }
            set { _STD_CODE = value; }
        }
        private string _MOBILE_PHONE1;
        public string MOBILE_PHONE1
        {
            get { return _MOBILE_PHONE1; }
            set { _MOBILE_PHONE1 = value; }
        }
        public string AUTH_CD { get; set; }
        public int AUTH_ID { get; set; }
        public string AUTH_NAME { get; set; }
        public string AUTH_FOR_TRAN_NAME { get; set; }
        public string REFERAL_SOURCE_NAME { get; set; }
        public string CONCESSION_PERCENT { get; set; }
        public string AUTH_FOR_CONCESSION_PERCENT { get; set; }
        public string AUTH_FOR_CONCESSION_PERIOD { get; set; }
        public string AUTH_FOR_DUE_PERIOD { get; set; }
        public string AUTH_FOR_CONCESSION_PERIOD_AMOUNT { get; set; }
        public string AUTH_FOR_DUE_PERIOD_AMOUNT { get; set; }
        public string IS_CONCESSION_OWN_PATIENTS_ONLY { get; set; }
        public string IS_DUE_OWN_PATIENTS_ONLY { get; set; }
        public string REMAINING_AUTH_AMOUNT { get; set; }
        public string AUTH_FOR_DUE_AMOUNT { get; set; }
        public string REMAINING_DUE_AMOUNT { get; set; }
        public string AUTH_REF_CD { get; set; }
        public string AUTH_SOURCE_NAME { get; set; }
    }
}
