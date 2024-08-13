using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class OPD_TYPE:OPD_PROC
    {
        private string _IS_INCLUDE;

        public string IS_INCLUDE
        {
            get { return _IS_INCLUDE; }
            set { _IS_INCLUDE = value; }
        }
        private int _opd_type_id;
        public int OPD_TYPE_ID
        {
            set { _opd_type_id = value; }
            get { return _opd_type_id; }
        }
        private string _opd_type_cd;
        public string OPD_TYPE_CD
        {
            set { _opd_type_cd = value; }
            get { return _opd_type_cd; }
        }
        private string _opd_type_name;
        public string OPD_TYPE_NAME
        {
            set { _opd_type_name = value; }
            get { return _opd_type_name; }
        }
        private string _opd_type_desc;
        public string OPD_TYPE_DESC
        {
            set { _opd_type_desc = value; }
            get { return _opd_type_desc; }
        }
       
        private int _opd_type_rev_no;
        public int OPD_TYPE_REV_NO
        {
            set { _opd_type_rev_no = value; }
            get { return _opd_type_rev_no; }
        }
    }
}
