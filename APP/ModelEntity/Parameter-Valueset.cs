using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
[Serializable]
    public class Parameter_Valueset
    {
     
       private int _component_val_set_id;
            public int COMPONENT_VAL_SET_ID
            {
                set { _component_val_set_id = value; }
                get { return _component_val_set_id; }
            }
            private int _component_val_set_rev_no;
            public int COMPONENT_VAL_SET_REV_NO
            {
                set { _component_val_set_rev_no = value; }
                get { return _component_val_set_rev_no; }
            }
            private string _component_val_set_cd;
            public string COMPONENT_VAL_SET_CD
            {
                set { _component_val_set_cd = value; }
                get { return _component_val_set_cd; }
            }
            private string _component_multi_val;
            public string COMPONENT_MULTI_VAL
            {
                set { _component_multi_val = value; }
                get { return _component_multi_val; }
            }
            private string _component_val_set_name;
            public string COMPONENT_VAL_SET_NAME
            {
                set { _component_val_set_name = value; }
                get { return _component_val_set_name; }
            }
            private string _component_val_set_desc;
            public string COMPONENT_VAL_SET_DESC
            {
                set { _component_val_set_desc = value; }
                get { return _component_val_set_desc; }
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
            private int _session_id;
            public int SESSION_ID
            {
                set { _session_id = value; }
                get { return _session_id; }
            }
        }
     

}
