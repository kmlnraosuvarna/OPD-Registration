using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
     [Serializable]
   public class HC_Scheme
    {
        private int _SCHEME_ID;

        public int SCHEME_ID
        {
            get { return _SCHEME_ID; }
            set { _SCHEME_ID = value; }
        }

        private int _SCHEME_REV_NO;

        public int SCHEME_REV_NO
        {
            get { return _SCHEME_REV_NO; }
            set { _SCHEME_REV_NO = value; }
        }

        private string _SCHEME_CD;

        public string SCHEME_CD
        {
            get { return _SCHEME_CD; }
            set { _SCHEME_CD = value; }
        }
        private string _SCHEME_NAME;

        public string SCHEME_NAME
        {
            get { return _SCHEME_NAME; }
            set { _SCHEME_NAME = value; }
        }

        private string _SCHEME_DESC;

        public string SCHEME_DESC
        {
            get { return _SCHEME_DESC; }
            set { _SCHEME_DESC = value; }
        }

        private int _SCHEME_TYPE_ID;

        public int SCHEME_TYPE_ID
        {
            get { return _SCHEME_TYPE_ID; }
            set { _SCHEME_TYPE_ID = value; }
        }
         



        private string _CARD_VALID_YEARS;

        public string CARD_VALID_YEARS
        {
            get { return _CARD_VALID_YEARS; }
            set { _CARD_VALID_YEARS = value; }
        }

                    private int _CARD_ACTIVATION_DAYS;

        public int CARD_ACTIVATION_DAYS
        {
            get { return _CARD_ACTIVATION_DAYS; }
            set { _CARD_ACTIVATION_DAYS = value; }
        }

        private int _AVAIL_PCT_PER_BILL;

        public int AVAIL_PCT_PER_BILL
        {
            get { return _AVAIL_PCT_PER_BILL; }
            set { _AVAIL_PCT_PER_BILL = value; }
        }
        

        private int _CREATE_BY;

        public int CREATE_BY
        {
            get { return _CREATE_BY; }
            set { _CREATE_BY = value; }
        }

        private string _CREATE_BY1;

        public string CREATE_BY1
        {
            get { return _CREATE_BY1; }
            set { _CREATE_BY1 = value; }
        }

        private string _CREATE_DT;

        public string CREATE_DT
        {
            get { return _CREATE_DT; }
            set { _CREATE_DT = value; }
        }

        private int _MODIFY_BY;

        public int MODIFY_BY
        {
            get { return _MODIFY_BY; }
            set { _MODIFY_BY = value; }
        }

        private string _MODIFY_BY1;

        public string MODIFY_BY1
        {
            get { return _MODIFY_BY1; }
            set { _MODIFY_BY1 = value; }
        }

        private string _MODIFY_DT;

        public string MODIFY_DT
        {
            get { return _MODIFY_DT; }
            set { _MODIFY_DT = value; }
        }

        private string _RECORD_STATUS;

        public string RECORD_STATUS
        {
            get { return _RECORD_STATUS; }
            set { _RECORD_STATUS = value; }
        }

        private int _GRP_ID;

        public int GRP_ID
        {
            get { return _GRP_ID; }
            set { _GRP_ID = value; }
        }

        private int _ORG_ID;

        public int ORG_ID
        {
            get { return _ORG_ID; }
            set { _ORG_ID = value; }
        }

        private int _LOC_ID;

        public int LOC_ID
        {
            get { return _LOC_ID; }
            set { _LOC_ID = value; }
        }

        private int _SESSION_ID;

        public int SESSION_ID
        {
            get { return _SESSION_ID; }
            set { _SESSION_ID = value; }
        }

        private int _SCHEME_LAB_ID;

        public int SCHEME_LAB_ID
        {
            get { return _SCHEME_LAB_ID; }
            set { _SCHEME_LAB_ID = value; }
        }
        private int _SCHEME_LAB_REV_NO;

        public int SCHEME_LAB_REV_NO
        {
            get { return _SCHEME_LAB_REV_NO; }
            set { _SCHEME_LAB_REV_NO = value; }
        }

        private string _NO_OF_DAYS;

        public string NO_OF_DAYS
        {
            get { return _NO_OF_DAYS; }
            set { _NO_OF_DAYS = value; }
        }
        private string _PERCENTAGE;

        public string PERCENTAGE
        {
            get { return _PERCENTAGE; }
            set { _PERCENTAGE = value; }
        }
        private string _CNCSN_RULE_ID;

        public string CNCSN_RULE_ID
        {
            get { return _CNCSN_RULE_ID; }
            set { _CNCSN_RULE_ID = value; }
        }
        private string _CNCSN_RULE_NAME;

        public string CNCSN_RULE_NAME
        {
            get { return _CNCSN_RULE_NAME; }
            set { _CNCSN_RULE_NAME = value; }
        }

        private string _CNCSN_RULE_CODE;

        public string CNCSN_RULE_CODE
        {
            get { return _CNCSN_RULE_CODE; }
            set { _CNCSN_RULE_CODE = value; }
        }

       
        private int _page_num;
        public int PAGE_NUM
        {
            get { return _page_num; }
            set { _page_num = value; }
        }
        private int _page_size;
        public int PAGE_SIZE
        {
            get { return _page_size; }
            set { _page_size = value; }
        }
        private string xml;

        public string Xml
        {
            get { return xml; }
            set { xml = value; }
        }
    }
}
