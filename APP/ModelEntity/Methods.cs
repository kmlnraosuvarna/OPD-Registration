using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Methods
    { 
            private int _methods_id;
            public int METHODS_ID
            {
                set { _methods_id = value; }
                get { return _methods_id; }
            }
            private string _methods_cd;
            public string METHODS_CD
            {
                set { _methods_cd = value; }
                get { return _methods_cd; }
            }
            private string _methods_name;
            public string METHODS_NAME
            {
                set { _methods_name = value; }
                get { return _methods_name; }
            }
            private string _methods_desc;
            public string METHODS_DESC
            {
                set { _methods_desc = value; }
                get { return _methods_desc; }
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
            private int _methods_rev_no;
            public int METHODS_REV_NO
            {
                set { _methods_rev_no = value; }
                get { return _methods_rev_no; }
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
            private string METHOD_ID1;

            public string METHOD_ID
            {
                get { return METHOD_ID1; }
                set { METHOD_ID1 = value; }
            }
            private string METHOD_CD1;

            public string METHOD_CD
            {
                get { return METHOD_CD1; }
                set { METHOD_CD1 = value; }
            }
            private string METHOD_NAME1;

            public string METHOD_NAME
            {
                get { return METHOD_NAME1; }
                set { METHOD_NAME1 = value; }
            }
            private string METHOD_DESC1;

            public string METHOD_DESC
            {
                get { return METHOD_DESC1; }
                set { METHOD_DESC1 = value; }
            }
        }
    
}
