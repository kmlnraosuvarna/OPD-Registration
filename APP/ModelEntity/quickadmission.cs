using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
  public class quickadmission
    {
        public int ADT_ADMN_QUICK_ID { get; set; }
        public int PATIENT_ID { get; set; }
        public int TITLE_ID { get; set; }
        public string FIRST_NAME { get; set; }
        public string MIDDLE_NAME { get; set; }
        public string LAST_NAME { get; set; }
        public string DISPLAY_NAME { get; set; }
        public string DOB { get; set; }
        public int GENDER_ID { get; set; }
        public int AGE { get; set; }
        public int NATIONALITY_ID { get; set; }
        public int PATIENT_TYPE_ID { get; set; }
        public int VISIT_TYPE_ID { get; set; }
        public int REG_CONSULTANT_ID { get; set; }
        public string ADDRESS1 { get; set; }
        public string EMAIL_ID { get; set; }
        public int MOBILE_PHONE { get; set; }
        public int HOME_PHONE { get; set; }
        public int AREA_ID { get; set; }
        public int CITY_ID { get; set; }
        public int DISTRICT_ID { get; set; }
        public int STATE_ID { get; set; }
        public int COUNTRY_ID { get; set; }
        public string ZIPCODE { get; set; }
        public int OP_CONSULTANT_ID { get; set; }
        public int ADMN_DOCTOR_ID { get; set; }
        public string OP_CONSULTANT_DT { get; set; }
        public string ADMN_DT { get; set; }
        public int WARD_ID { get; set; }
        public int ROOM_ID { get; set; }
        public string UMR_NO { get; set; }
        public int BED_ID { get; set; }
        public int BILLING_CLASS_ID { get; set; }
        public string DISCHARGE_DT { get; set; }
        public int DISCHARGE_DOCTOR_ID { get; set; }
        public int PATIENT_CLASS_ID { get; set; }
        public string CREATE_BY { get; set; }
        public string CREATE_DT { get; set; }
        public string MODIFY_BY { get; set; }
        public string MODIFY_DT { get; set; }
        public string APPROVE_BY { get; set; }
        public string APPROVE_DT { get; set; }
        public string RECORD_STATUS { get; set; }
        public int GRP_ID { get; set; }
        public int ORG_ID { get; set; }
        public int LOC_ID { get; set; }
        public int SESSION_ID { get; set; }

        public int IPCOUNT { get; set; }

        public string COLUMN_NAME { get; set; }
        public string PREFIX_TEXT { get; set; }
        public string ADVANCESEARCH { get; set; }
        public int PAGE_SIZE { get; set; }
        public int CURRENT_PAGE { get; set; }
        public string FROM_DT { get; set; }
        public string TO_DT { get; set; }
        public string FLAG { get; set; }
        public int EVENTFLAG { get; set; }
       
    }
}
