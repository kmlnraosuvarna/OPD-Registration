using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class ConsultationTypeMaster
    {
        #region Members

        private string consultationtypecd;
        private string consultationtypedesc;
        private int consultationtypeid;
        private int typeofconsultation;

        public int TYPE_OF_CONSULTATION_REV_NO
        {
            get { return typeofconsultation; }
            set { typeofconsultation = value; }
        }
        private string consultationName;
        private string coverageType;
        private int coverage_rev_no;

        public int COVERAGE_REV_NO
        {
            get { return coverage_rev_no; }
            set { coverage_rev_no = value; }
        }

        
        private int coverage_id;

        public int Coverage_ID
        {
            get { return coverage_id; }
            set { coverage_id = value; }
        }
        private int consultation_rev_no;

        public int CONSULTATION_REV_NO
        {
            get { return consultation_rev_no; }
            set { consultation_rev_no = value; }
        }
        private int consultation_id;
        private string createby;

        public string CREATE_BY
        {
            get { return createby; }
            set { createby = value; }
        }
        private string modifiedby;
         
        public string MODIFY_BY
        {
            get { return modifiedby; }
            set { modifiedby = value; }
        }
        private string createdt;
        private string modifydt;
        private int count;
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }

        private string revisit_consultation_type_id;

        public string REVISIT_CONSULTATION_TYPE_ID
        {
            get { return revisit_consultation_type_id; }
            set { revisit_consultation_type_id = value; }
        }

        #endregion       

        #region Properties

        public string Coverage_Type
        {
            get { return coverageType; }
            set { coverageType = value; }
        }

        public string Consultation_Name
        {
            get { return consultationName; }
            set { consultationName = value; }
        }

        public string Create_Dt
        {
            get { return createdt; }
            set { createdt = value; }
        }
        
        public string Modify_Dt
        {
            get { return modifydt; }
            set { modifydt = value; }
        }        

        public int TYPE_OF_CONSULTATION_ID
        {
            get { return consultation_id; }
            set { consultation_id = value; }
        }

        public string ConsultationType_CD
        {
            get { return consultationtypecd; }
            set { consultationtypecd = value; }

        }

        public string ConsultationType_Desc
        {
            get { return consultationtypedesc; }
            set { consultationtypedesc = value; }
        }

        public int ConsultationType_ID
        {
            get { return consultationtypeid; }
            set { consultationtypeid = value; }
        }       

        public int Count
        {
            get { return count; }
            set { count = value; }
        }

        #endregion
    }
}
