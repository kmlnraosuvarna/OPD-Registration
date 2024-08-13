using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class FinancialWorkFlowState :GridPaging
    {
        private int _financial_wf_state_id;
        public int FINANCIAL_WF_STATE_ID
        {
            set { _financial_wf_state_id = value; }
            get { return _financial_wf_state_id; }
        }
        private int _financial_workflow_state_rev_no;
        public int FINANCIAL_WORKFLOW_STATE_REV_NO
        {
            set { _financial_workflow_state_rev_no = value; }
            get { return _financial_workflow_state_rev_no; }
        }
        private string _financial_workflow_state_cd;
        public string FINANCIAL_WORKFLOW_STATE_CD
        {
            set { _financial_workflow_state_cd = value; }
            get { return _financial_workflow_state_cd; }
        }
        private int _financial_wf_id;
        public int FINANCIAL_WF_ID
        {
            set { _financial_wf_id = value; }
            get { return _financial_wf_id; }
        }
        private int _financial_wf_rev_no;
        public int FINANCIAL_WF_REV_NO
        {
            set { _financial_wf_rev_no = value; }
            get { return _financial_wf_rev_no; }
        }
        private int _seq;
        public int SEQ
        {
            set { _seq = value; }
            get { return _seq; }
        }
        private int _financial_state_id;
        public int FINANCIAL_STATE_ID
        {
            set { _financial_state_id = value; }
            get { return _financial_state_id; }
        }
        private int _financial_state_rev_no;
        public int FINANCIAL_STATE_REV_NO
        {
            set { _financial_state_rev_no = value; }
            get { return _financial_state_rev_no; }
        }
        private int _create_by;
        public int CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
        }
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private int _modify_by;
        public int MODIFY_BY
        {
            set { _modify_by = value; }
            get { return _modify_by; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
         
        
        private string _financial_state_cd;
        public string FINANCIAL_STATE_CD
        {
            set { _financial_state_cd = value; }
            get { return _financial_state_cd; }
        }
        private string _financial_state_name;
        public string FINANCIAL_STATE_NAME
        {
            set { _financial_state_name = value; }
            get { return _financial_state_name; }
        }
        private string _financial_state_desc;
        public string FINANCIAL_STATE_DESC
        {
            set { _financial_state_desc = value; }
            get { return _financial_state_desc; }
        }
       
    }
}
