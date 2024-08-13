using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class COUNTERMASTER
    {
        private int Counter_Id;

        public int COUNTER_ID
        {
            get { return Counter_Id; }
            set { Counter_Id = value; }
        }


        private int Counter_Rev;

        public int COUNTER_REV
        {
            get { return Counter_Rev; }
            set { Counter_Rev = value; }
        }
        private string Counter_Name;

        public string COUNTER_NAME
        {
            get { return Counter_Name; }
            set { Counter_Name = value; }
        }
        private string Counter_Desc;

        public string COUNTER_DESC
        {
            get { return Counter_Desc; }
            set { Counter_Desc = value; }
        }
        private string Terminal_Name;

        public string TERMINAL_NAME
        {
            get { return Terminal_Name; }
            set { Terminal_Name = value; }
        }
        private string Is_Token_Required;

        public string IS_TOKEN_REQUIRED
        {
            get { return Is_Token_Required; }
            set { Is_Token_Required = value; }
        }
        private string Counter_Status;

        public string COUNTER_STATUS
        {
            get { return Counter_Status; }
            set { Counter_Status = value; }
        }
        private string Service_Type_Id;

        public string SERVICE_TYPE_ID
        {
            get { return Service_Type_Id; }
            set { Service_Type_Id = value; }
        }
        private int SessionID;

        public int SESSIONID
        {
            get { return SessionID; }
            set { SessionID = value; }
        }
        private string Create_By;

        public string CREATE_BY
        {
            get { return Create_By; }
            set { Create_By = value; }
        }
        private string Modify_By;

        public string Modify_BY
        {
            get { return Modify_By; }
            set { Modify_By = value; }
        }
        private string Record_Status;

        public string RECORD_STATUS
        {
            get { return Record_Status; }
            set { Record_Status = value; }
        }
        private string UserId;
        public string USERID
        {
            get { return UserId; }
            set { UserId = value; }
        }

        private string Service_type;
        public string SERVICE_TYPE
        {
            get { return Service_type; }
            set { Service_type = value; }
        }
    }
}
