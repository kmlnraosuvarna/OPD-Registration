using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
   public class HC_SCHEME_RULE
    {
        private string _SCHEME_RULE_ID;
        public string SCHEME_RULE_ID
        {
            get { return _SCHEME_RULE_ID; }
            set { _SCHEME_RULE_ID = value; }
        }
        private string _SCHEME_RULE_REV_NO;
        public string SCHEME_RULE_REV_NO
        {
            get { return _SCHEME_RULE_REV_NO; }
            set { _SCHEME_RULE_REV_NO = value; }
        }
        private string _CNCSN_RULE_ID;
        public string CNCSN_RULE_ID
        {
            get { return _CNCSN_RULE_ID; }
            set { _CNCSN_RULE_ID = value; }
        }
        private string _SCHEME_ID;
        public string SCHEME_ID
        {
            get { return _SCHEME_ID; }
            set { _SCHEME_ID = value; }
        }
        private string _SCHEME_NAME;
        public string SCHEME_NAME
        {
            get { return _SCHEME_NAME; }
            set { _SCHEME_NAME = value; }
        }
        private string _CNCSN_RULE_CODE;
        public string CNCSN_RULE_CODE
        {
            get { return _CNCSN_RULE_CODE; }
            set { _CNCSN_RULE_CODE = value; }
        }
        private string _CNCSN_RULE_NAME;
        public string CNCSN_RULE_NAME
        {
            get { return _CNCSN_RULE_NAME; }
            set { _CNCSN_RULE_NAME = value; }
        }
        private int tot_record_cnt;
        public int TOT_RECORD_CNT
        {
            get { return tot_record_cnt; }
            set { tot_record_cnt = value; }
        }
        private string _effect_from_dt;
        public string EFFECT_FROM_DT
        {
            set { _effect_from_dt = value; }
            get { return _effect_from_dt; }
        }

        private string _effect_to_dt;
        public string EFFECT_TO_DT
        {
            set { _effect_to_dt = value; }
            get { return _effect_to_dt; }
        }
    }
}
