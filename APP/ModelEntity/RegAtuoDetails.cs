using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class RegAtuoDetails
    {
        #region Member Variables

        private string _value = string.Empty;
        private string _text = string.Empty;
        private string _docketid = string.Empty;
        private string _docketname = string.Empty;
        private string _AddtionalVal = string.Empty;
        //private string id=string.Empty;
        //private string code=string.Empty;
        //private string desc=string.Empty;

        #endregion Member Variables

        #region Public Properties
        public string Value
        {
            get
            {
                return _value;
            }
            set
            {
                _value = value;
            }
        }



        public string docketid
        {
            get
            {
                return _docketid;
            }
            set
            {
                _docketid = value;
            }

        }
        public string docketname
        {
            get
            {
                return _docketname;
            }
            set
            {
                _docketname = value;
            }

        }
        public string Text
        {
            get
            {
                return _text;
            }
            set
            {
                _text = value;
            }

        }

        public string AddtionalVal
        {
            get
            {
                return _AddtionalVal;
            }
            set
            {
                _AddtionalVal = value;
            }

        }
        private string _refaddress;

        public string RefAddress
        {
            get { return _refaddress; }
            set { _refaddress = value; }
        }

        private string _refTypeID;

        public string REFRL_TYPE_ID
        {
            get { return _refTypeID; }
            set { _refTypeID = value; }
        }
        private string _dispatch_type_id;
        public string DISPATCH_TYPE_ID
        {
            get { return _dispatch_type_id; }
            set { _dispatch_type_id = value; }
        }
        private string _dispatch_method_name;

        public string DISPATCH_METHOD_NAME
        {
            get { return _dispatch_method_name; }
            set { _dispatch_method_name = value; }
        }
        private string referal_email_id;

        public string REFERAL_EMAIL_ID
        {
            get { return referal_email_id; }
            set { referal_email_id = value; }
        }
        private string _emp_id;

        public string _EMP_ID
        {
            get { return _emp_id; }
            set { _emp_id = value; }
        }

        #endregion Public Properties
    }
}
