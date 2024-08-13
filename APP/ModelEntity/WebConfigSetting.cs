using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class WebConfigSetting
    {
        private int _IP_WEB_ID;

        public int IP_WEB_ID
        {
            get { return _IP_WEB_ID; }
            set { _IP_WEB_ID = value; }
        }
        private string _IP_KEY;

        public string IP_KEY
        {
            get { return _IP_KEY; }
            set { _IP_KEY = value; }
        }
        private string _IP_VALUE;

        public string IP_VALUE
        {
            get { return _IP_VALUE; }
            set { _IP_VALUE = value; }
        }
        private string _IP_DESCRIPTION;

        public string IP_DESCRIPTION
        {
            get { return _IP_DESCRIPTION; }
            set { _IP_DESCRIPTION = value; }
        }
        private string _IP_ISACTIVE;

        public string IP_ISACTIVE
        {
            get { return _IP_ISACTIVE; }
            set { _IP_ISACTIVE = value; }
        }
        private string _IP_INUSE;

        public string IP_INUSE
        {
            get { return _IP_INUSE; }
            set { _IP_INUSE = value; }
        }
        private int _IP_WEB_REV_NO;

        public int IP_WEB_REV_NO
        {
            get { return _IP_WEB_REV_NO; }
            set { _IP_WEB_REV_NO = value; }
        }
        private int _IP_SESSION_ID;

        public int IP_SESSION_ID
        {
            get { return _IP_SESSION_ID; }
            set { _IP_SESSION_ID = value; }
        }


        private string create_by;
        public string CREATE_BY
        {
            set { create_by = value; }
            get { return create_by; }
        }

        private string create_dt;
        public string CREATE_DT
        {
            set { create_dt = value; }
            get { return create_dt; }
        }
        private string _MODIFY_BY;
        public string MODIFY_BY
        {
            set { _MODIFY_BY = value; }
            get { return _MODIFY_BY; }
        }

        private string _MODIFY_DT;
        public string MODIFY_DT
        {
            set { _MODIFY_DT = value; }
            get { return _MODIFY_DT; }
        }

        private string _MODIFIED_BY;
        public string MODIFIED_BY
        {
            set { _MODIFIED_BY = value; }
            get { return _MODIFIED_BY; }
        }
        private string _CREATED_BY;
        public string CREATED_BY
        {
            set { _CREATED_BY = value; }
            get { return _CREATED_BY; }
        }



    }
}
