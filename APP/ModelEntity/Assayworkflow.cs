using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Assayworkflow:ViewPaging
    {
        
        private string assay_workflow_id, assay_workflow_name;

        private string _category_type;

        public string CATEGORY_TYPE
    {

        get { return _category_type; }
        set { _category_type = value; }
    }

        private string _assay_wf_cd;

       public string ASSAY_WF_CD
    {
    
    get { return _assay_wf_cd; }
            set { _assay_wf_cd = value; }
    }
       private string _assay_workflow_rev_no;

       public string ASSAY_WORKFLOW_REV_NO
       {

           get { return _assay_workflow_rev_no; }
           set { _assay_workflow_rev_no = value; }
       }
       private string _assay_wf_id;

       public string ASSAY_WF_ID
       {

           get { return _assay_wf_id; }
           set { _assay_wf_id = value; }
       }

       private string _session_id;

       public string SESSION_ID
       {

           get { return _session_id; }
           set { _session_id = value; }
       }

       private string _assay_wf_name;

       public string ASSAY_WF_NAME
       {

           get { return _assay_wf_name; }
           set { _assay_wf_name = value; }
       }

       private string _assay_wf_desc;

       public string ASSAY_WF_DESC
       {

           get { return _assay_wf_desc; }
           set { _assay_wf_desc = value; }
       }


        
        public string Assay_workflow_id
        {
            get { return assay_workflow_id; }
            set { assay_workflow_id = value; }
        }

        public string Assay_workflow_name
        {
            get { return assay_workflow_name; }
            set { assay_workflow_name = value; }
        }
        private string ASSAYSTATE_ID;

        public string ASSAY_STATE_ID
        {
            get { return ASSAYSTATE_ID; }
            set { ASSAYSTATE_ID = value; }
        }
        private string assaystatecode;

        public string Assaystatecode
        {
            get { return assaystatecode; }
            set { assaystatecode = value; }
        }
        private string assaystatename;

        public string Assaystatename
        {
            get { return assaystatename; }
            set { assaystatename = value; }
        }
        private string assaystatedesc;

        public string Assaystatedesc
        {
            get { return assaystatedesc; }
            set { assaystatedesc = value; }
        }
        private string sessionid;

        public string Sessionid
        {
            get { return sessionid; }
            set { sessionid = value; }
        }
        private string workflowcode;

        public string Workflowcode
        {
            get { return workflowcode; }
            set { workflowcode = value; }
        }
        private string assay_WF_STATE_ID;

        public string Assay_WF_STATE_ID
        {
            get { return assay_WF_STATE_ID; }
            set { assay_WF_STATE_ID = value; }
        }
        private string aswsstaerevno;

        public string Aswsstaerevno
        {
            get { return aswsstaerevno; }
            set { aswsstaerevno = value; }
        }
        private string image_path;

        public string IMAGE_PATH
        {
            get { return image_path; }
            set { image_path = value; }
        }
    }
}
