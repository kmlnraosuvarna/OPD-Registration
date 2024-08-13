
#region Comments
// ClassName    : UserLogingInfo.cs
// Description  : An object for the User Loging information, describes when the user loging,
//                  from which ip user logged in, HostName etc.  
// Author       : G.Lakshmi Narayana,
// DateCreated  : 02/01/2010.
// Modified By  :Sahu
// Modified Date: 16/07/2010
#endregion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class UserLogingInfo
   { 
        
        #region classUserLogingInfo
       #region DataMembers
       private string userId = string.Empty;
        private string userName = string.Empty;
        private string ipAddress = string.Empty;
        private string agent = string.Empty;
        private string hostName = string.Empty;
        private string headerText = string.Empty;
        private string createBy = string.Empty;
        private string password = string.Empty;
        #endregion DataMembers

       #region properties
        public string UserID
        {
            get { return userId; }
            set { userId = value; }
        }


        public string UserName
        {
            get { return userName; }
            set { userName = value; }
        }
        public string Password
        {get { return password; }
            set { password = value; }
        }
      
        public string IPAddress
        {
            get { return ipAddress; }
            set { ipAddress = value; }
        }

      
        public string Agent
        {
            get { return agent; }
            set { agent = value; }
        }
        
        public string HostName
        {
            get { return hostName; }
            set { hostName = value; }
        }

     
        public string HeaderText
        {
            get { return headerText; }
            set { headerText = value; }
        }

        public string CreatedBy
        {
            get { return createBy; }
            set { createBy = value; }
        }
       #endregion properties
        #endregion classUserLogingInfo

        #region User Session Info
        private int _user_session_seq_id;
        public int USER_SESSION_SEQ_ID
        {
            set { _user_session_seq_id = value; }
            get { return _user_session_seq_id; }
        }
        private int _user_session_id;
        public int USER_SESSION_ID
        {
            set { _user_session_id = value; }
            get { return _user_session_id; }
        }
        private string _machine;
        public string MACHINE
        {
            set { _machine = value; }
            get { return _machine; }
        }
        private string _version;
        public string VERSION
        {
            set { _version = value; }
            get { return _version; }
        }
        private string _terminal;
        public string TERMINAL
        {
            set { _terminal = value; }
            get { return _terminal; }
        }
        private string _osuser;
        public string OSUSER
        {
            set { _osuser = value; }
            get { return _osuser; }
        }
        private int _user_seq_id;
        public int USER_SEQ_ID
        {
            set { _user_seq_id = value; }
            get { return _user_seq_id; }
        }
        private int _user_id;
        public int USER_ID
        {
            set { _user_id = value; }
            get { return _user_id; }
        }
        private int _session_seq_id;
        public int SESSION_SEQ_ID
        {
            set { _session_seq_id = value; }
            get { return _session_seq_id; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private string _start_time;
        public string START_TIME
        {
            set { _start_time = value; }
            get { return _start_time; }
        }
        private string _end_time;
        public string END_TIME
        {
            set { _end_time = value; }
            get { return _end_time; }
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
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _org_seq_id;
        public int ORG_SEQ_ID
        {
            set { _org_seq_id = value; }
            get { return _org_seq_id; }
        }
        private int _role_id;
        public int ROLE_ID
        {
            set { _role_id = value; }
            get { return _role_id; }
        }
        private int _role_seq_id;
        public int ROLE_SEQ_ID
        {
            set { _role_seq_id = value; }
            get { return _role_seq_id; }
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
        private string _current_record;
        public string CURRENT_RECORD
        {
            set { _current_record = value; }
            get { return _current_record; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }

        private int _user_id_ver;
        public int USER_ID_VER
        {
            set { _user_id_ver = value; }
            get { return _user_id_ver; }
        }
        private string _row_status;
        public string ROW_STATUS
        {
            set { _row_status = value; }
            get { return _row_status; }
        }

        private string _transaction_pwd;

        public string Transaction_pwd
        {
            get { return _transaction_pwd; }
            set { _transaction_pwd = value; }
        }
        private string _CLENT_TIME_ZONE;

        public string CLENT_TIME_ZONE
        {
            get { return _CLENT_TIME_ZONE; }
            set { _CLENT_TIME_ZONE = value; }
        }
        private int _TIME_ZONE_ID;

        public int TIME_ZONE_ID
        {
            get { return _TIME_ZONE_ID; }
            set { _TIME_ZONE_ID = value; }
        }
        #endregion
        private string _column_name;

        public string COLUMN_NAME
        {
            get { return _column_name; }
            set { _column_name = value; }
        }
        private string _prefix_text;

        public string PREFIX_TEXT
        {
            get { return _prefix_text; }
            set { _prefix_text = value; }
        }
        private string _advance_search;

        public string ADVANCE_SEARCH
        {
            get { return _advance_search; }
            set { _advance_search = value; }
        }
        private string _page_num;

        public string PAGE_NUM
        {
            get { return _page_num; }
            set { _page_num = value; }
        }
        private string _page_size;

        public string PAGE_SIZE
        {
            get { return _page_size; }
            set { _page_size = value; }
        }
        private string _from_date;

        public string FROM_DATE
        {
            get { return _from_date; }
            set { _from_date = value; }
        }
        private string _to_date;

        public string TO_DATE
        {
            get { return _to_date; }
            set { _to_date = value; }
        }
       private string Location_Name;

        public string LOCATION_NAME
        {
            get { return Location_Name; }
            set { Location_Name = value; }
        }

        private string _totalrecords;

        public string TOTALRECORDS
        {
            get { return _totalrecords; }
            set { _totalrecords = value; }
        }
        private string username;

        public string USERNAME
        {
            get { return username; }
            set { username = value; }
        }

        private string _BROWSER_NAME;

        public string BROWSER_NAME
        {
            get { return _BROWSER_NAME; }
            set { _BROWSER_NAME = value; }
        }
        private string _BROWSER_VERSION;

        public string BROWSER_VERSION
        {
            get { return _BROWSER_VERSION; }
            set { _BROWSER_VERSION = value; }
        }

        private string _CLIENT_NAME;

        public string CLIENT_NAME
        {
            get { return _CLIENT_NAME; }
            set { _CLIENT_NAME = value; }
        }
    }
}
