using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class QuestionTemplate
    {


        private string _QUESTION_ID;
        public string QUESTION_ID
        {
            get { return _QUESTION_ID; }
            set { _QUESTION_ID = value; }
        }

        private string _SERVICE_ID;
        public string SERVICE_ID
        {
            get { return _SERVICE_ID; }
            set { _SERVICE_ID = value; }
        }
        
        private string _CONTROL_VAL_ID;
        public string CONTROL_VAL_ID
        {
            get { return _CONTROL_VAL_ID; }
            set { _CONTROL_VAL_ID = value; }
        }

        private string _QUESTION_NAME;
        public string QUESTION_NAME
        {
            get { return _QUESTION_NAME; }
            set { _QUESTION_NAME = value; }
        }
        private string _CONTROL_ID;
        public string CONTROL_ID
        {
            get { return _CONTROL_ID; }
            set { _CONTROL_ID = value; }
        }
        private string _CONTROL_VAL_SET_ID;
        public string CONTROL_VAL_SET_ID
        {
            get { return _CONTROL_VAL_SET_ID; }
            set { _CONTROL_VAL_SET_ID = value; }
        }
        private string _CONTROL_NAME;
        public string CONTROL_NAME
        {
            get { return _CONTROL_NAME; }
            set { _CONTROL_NAME = value; }
        }


        private string _CONTROL_VAL_NAME;
        public string CONTROL_VAL_NAME
        {
            get { return _CONTROL_VAL_NAME; }
            set { _CONTROL_VAL_NAME = value; }
        }
        private string _CONTROL_VAL_SET_NAME;
        public string CONTROL_VAL_SET_NAME
        {
            get { return _CONTROL_VAL_SET_NAME; }
            set { _CONTROL_VAL_SET_NAME = value; }
        }
        

    }
}
