using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class FacilityMaster
    {
        private int facilityID;

        public int FacilityID
        {
            get { return facilityID; }
            set { facilityID = value; }
        }

        private string facilityIDSEQ;

        public string FacilityIDSEQ
        {
            get { return facilityIDSEQ; }
            set { facilityIDSEQ = value; }
        }


        private string facilityCode;

        public string FACILITYCODE
        {
            get { return facilityCode; }
            set { facilityCode = value; }
        }

        private string facilityName;

        public string FACILITYNAME
        {
            get { return facilityName; }
            set { facilityName = value; }
        }

        private string facilityDesc;

        public string FACILITYDESC
        {
            get { return facilityDesc; }
            set { facilityDesc = value; }
        }

        private int createBy;

        public int CreateBy
        {
            get { return createBy; }
            set { createBy = value; }
        }

        private int modifyBy;

        public int ModifyBy
        {
            get { return modifyBy; }
            set { modifyBy = value; }
        }

        private int facility_id;

        public int FACILITY_ID
        {
            get { return facility_id; }
            set { facility_id = value; }
        }

        private string facility_desc;

        public string FACILITY_DESC
        {
            get { return facility_desc; }
            set { facility_desc = value; }
        }

        private string facility_cd;

        public string FACILITY_CD
        {
            get { return facility_cd; }
            set { facility_cd = value; }
        }

        private string facility_name;

        public string FACILITY_NAME
        {
            get { return facility_name; }
            set { facility_name = value; }
        }

        private string facility_rev_no;

        public string FACILITY_REV_NO
        {
            get { return facility_rev_no; }
            set { facility_rev_no = value; }
        }
        private string facilityCd;

        public string FacilityCode
        {
            get { return facilityCd; }
            set { facilityCd = value; }
        }

        private string facilityNam;

        public string FacilityName
        {
            get { return facilityNam; }
            set { facilityNam = value; }
        }

        private string facilityDes;

        public string FacilityDesc
        {
            get { return facilityDes; }
            set { facilityDes= value; }
        }

        private int _TOT_RECORD_CNT;

        public int TOT_RECORD_CNT
        {
            get { return _TOT_RECORD_CNT; }
            set { _TOT_RECORD_CNT = value; }
        }
    }
}
