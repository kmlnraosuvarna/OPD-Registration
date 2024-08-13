using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class FinancialWorkFlow : FinancialWorkFlowState
    {
 
        private int _financial_rev_no;
        public int FINANCIAL_REV_NO
        {
            set { _financial_rev_no = value; }
            get { return _financial_rev_no; }
        }
        private string _financial_wf_cd;
        public string FINANCIAL_WF_CD
        {
            set { _financial_wf_cd = value; }
            get { return _financial_wf_cd; }
        }
        private string _financial_wf_name;
        public string FINANCIAL_WF_NAME
        {
            set { _financial_wf_name = value; }
            get { return _financial_wf_name; }
        }
        private string _financial_wf_desc;
        public string FINANCIAL_WF_DESC
        {
            set { _financial_wf_desc = value; }
            get { return _financial_wf_desc; }
        }
        private string _image_path;
        public string IMAGE_PATH
        {
            set { _image_path = value; }
            get { return _image_path; }
        }
        private string _record_status;

        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
        }
    }

}
