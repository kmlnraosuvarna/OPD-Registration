 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data;
using System.Data.Common;
using System.Transactions;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using System.Configuration;
using EzHms.DataAccessObject;

namespace EzHms.BusinessObject
{
    public  class UserDetails: IDisposable
    {
        #region Member Variables
        private static UsersUtility objUserUtility = null;
       // private static Database dbSvc = null;
        private static DbConnection connection = null;
        private static DbTransaction transaction = null;
        #endregion Member Variables

        public UserDetails()
        {
        }

        #region Getting Country,State,City
 
        public DataSet GetAllCountryList()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmdCountry = dbSvc.GetStoredProcCommand(Constants.UPR_Get_Country);
            connection = dbSvc.CreateConnection();
            DataSet dsContry = new DataSet();
            dbSvc.LoadDataSet(DbCmdCountry, dsContry, "tbCountry");
            return dsContry;
        }

        public DataSet GetAllStateByCountry(string uCountry)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DataSet dsState = new DataSet();
            DbCommand DbcmdState = dbSvc.GetStoredProcCommand(Constants.UPR_Get_State);
            connection = dbSvc.CreateConnection();
            dbSvc.AddInParameter(DbcmdState, DALConstants.COUNTRY_ID_PARM, DbType.Int32,uCountry);
            //dbSvc.LoadDataSet(DbcmdState, dsState, "tbState");
            //return dsState;
            dsState = dbSvc.ExecuteDataSet(DbcmdState);
            return dsState;
        }
        public DataSet GetAllCityByState(string uCity)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DataSet dsCity = new DataSet();
            DbCommand DbcmdCity = dbSvc.GetStoredProcCommand(Constants.UPR_Get_City);
            connection = dbSvc.CreateConnection();
            dbSvc.AddInParameter(DbcmdCity, DALConstants.STATE_ID_PARM, DbType.Int32, uCity);
            //dbSvc.LoadDataSet(DbcmdState, dsState, "tbcity");
            //return dsState;
            dsCity = dbSvc.ExecuteDataSet(DbcmdCity);
            return dsCity;

        }
        public DataSet GetHintQuestions()
        {
            //DATABSECONNECT

            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DataSet dsHintQuest = new DataSet();
            DbCommand DbcmdState = dbSvc.GetStoredProcCommand(Constants.Sp_Hint_Question);
            connection = dbSvc.CreateConnection();
           // dbSvc.AddInParameter(DbcmdState, "Stateid", DbType.String, 1);
            dbSvc.LoadDataSet(DbcmdState, dsHintQuest, "tbHintQuest");
            return dsHintQuest;
        }
        public DataSet GetTimezones(string timezoneMnts)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DataSet dsHintQuest = new DataSet();
            DbCommand DbcmdState = dbSvc.GetStoredProcCommand("PR_GET_ST_TIMEZONE");
            connection = dbSvc.CreateConnection();
            dbSvc.AddInParameter(DbcmdState, "@IP_MINUTES", DbType.String, timezoneMnts);
            dbSvc.LoadDataSet(DbcmdState, dsHintQuest, "tbtimezone");
            return dsHintQuest;
        }

        #endregion

        //Method 2 get user names available in database
        public DataSet GetUserList()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbSvc.GetSqlStringCommand(SPNames.UPR_GET_ROLE);
            DataSet userDS = dbSvc.ExecuteDataSet(dbCmd);
            return userDS;
        }
        //Method 2 get user groups available in database

        //saleem :sp to get users with page number n pagesize
        public DataSet GetUserListwithpaging(int pageno, int pagesize)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.Stp_Get_UsersbyPageno);//instead of this SP i need only users details sp
            dbobj.AddInParameter(dbCmd, "@PageNo ", DbType.Int32, pageno);
            dbobj.AddInParameter(dbCmd, "@PageSize", DbType.Int32, pagesize);
            DataSet getUsrWPDS = dbobj.ExecuteDataSet(dbCmd);
            return getUsrWPDS;
        }
        public DataSet GetGroupsList()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbSvc.GetSqlStringCommand("select user_grp_name,user_grp_id from se.user_group where record_status='A'");
            DataSet groupDS = dbSvc.ExecuteDataSet(dbCmd);
            return groupDS;
        }
        public DataSet GetRolesList(int sessionid)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            //dbobj.AddInParameter(dbCmd, "@IP_group_ID ", DbType.Int32, groupID);
            DbCommand dbCmd = dbSvc.GetStoredProcCommand(SPNames.UPR_GET_ROLE);
            dbSvc.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
            DataSet groupDS = dbSvc.ExecuteDataSet(dbCmd);
            return groupDS;
        }        
        public DataSet GetUsersbyGroupRoleID(int groupID, int roleID) //sp for getting Users by group or RoleIDs
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.PR_Get_Users_GroupRoleAssign);
            dbobj.AddInParameter(dbCmd, "@IP_group_ID ", DbType.Int32, groupID);
            dbobj.AddInParameter(dbCmd, "@IP_role_ID", DbType.Int32, roleID);
            DataSet getUsrbyGRDS = dbobj.ExecuteDataSet(dbCmd);
            return getUsrbyGRDS;
        }

        public bool InsAssignRoletoRole(UsersUtility objUserUtility)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //// objUserUtility = new UsersUtility();
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.PR_INS_ROLE_MESSAGE);
            connection = dbSvc.CreateConnection();
            
            try
            {
                connection.Open();
                transaction = connection.BeginTransaction();
                dbSvc.AddInParameter(DbCmd, "@IP_FROM_ROLE_ID", System.Data.DbType.Int32, objUserUtility.FromRoleID);
                dbSvc.AddInParameter(DbCmd, "@IP_TO_ROLE_ID", System.Data.DbType.String, objUserUtility.ToRoleID);
                //execute the query...
                dbSvc.ExecuteNonQuery(DbCmd, transaction);
                //commit the transaction...
                transaction.Commit();
                return true;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return true;

        }

        public DataSet GetAssignRoles(int roleID) //sp for getting Users by group or RoleIDs
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.PR_GET_ROLES);
            dbobj.AddInParameter(dbCmd, "@IP_FROM_ROLE_ID", DbType.Int32, roleID);
            DataSet getAssignRoles = dbobj.ExecuteDataSet(dbCmd);
            return getAssignRoles;
        }

        public bool InsAssignGrouptoGroup(UsersUtility objUserUtility)
        {
            // objUserUtility = new UsersUtility();
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.PR_INS_GROUP_MESSAGE);
            connection = dbSvc.CreateConnection();

            try
            {
                connection.Open();
                transaction = connection.BeginTransaction();
                dbSvc.AddInParameter(DbCmd, "@IP_FROM_GROUP_ID", System.Data.DbType.Int32, objUserUtility.FromGroupID);
                dbSvc.AddInParameter(DbCmd, "@TO_GROUP_ID", System.Data.DbType.String, objUserUtility.ToGroupID);
                //execute the query...
                dbSvc.ExecuteNonQuery(DbCmd, transaction);
                //commit the transaction...
                transaction.Commit();
                return true;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return true;

        }

        public DataSet GetAssignGroups(int GroupID) //sp for getting Users by group or RoleIDs
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.PR_GET_GROUPS);
            dbobj.AddInParameter(dbCmd, "@IP_FROM_GROUP_ID", DbType.Int32, GroupID);
            DataSet getAssignRoles = dbobj.ExecuteDataSet(dbCmd);
            return getAssignRoles;
        }

        public DataSet GetAllRoles()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.PR_Get_AllRoles);
            DataSet getAllRoles = dbobj.ExecuteDataSet(dbCmd);
            return getAllRoles;
        }
        public DataSet GetAllGroups()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.UPR_GET_ALLGROUPS);
            DataSet getAllGroups = dbobj.ExecuteDataSet(dbCmd);
            return getAllGroups;
        }
        
        public DataSet GetAllUsers()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.UPR_GET_ALLUSERS);
            DataSet getAllUsers = dbobj.ExecuteDataSet(dbCmd);
            return getAllUsers;
        }
        public DataSet GetRoleGroupDeptUsers()
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.PR_GETALL_CATEGORIES);
            DataSet getAllRGDepUser = dbobj.ExecuteDataSet(dbCmd);
            return getAllRGDepUser;
        }

        public bool InsRoleGroupDeptUsers(UsersUtility objUserUtility)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.PR_INS_ROLE_MESSAGE_NEW);
            connection = dbSvc.CreateConnection();

            try
            {
                connection.Open();
                transaction = connection.BeginTransaction();
                dbSvc.AddInParameter(DbCmd, "@IP_FROM_ROLE_ID", System.Data.DbType.Int32, objUserUtility.FromRoleID);
                dbSvc.AddInParameter(DbCmd, "@IP_TO_ROLE_ID", System.Data.DbType.String, objUserUtility.ToRoleID);
                //execute the query...
                dbSvc.ExecuteNonQuery(DbCmd, transaction);
                //commit the transaction...
                transaction.Commit();
                return true;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return true;

        }

       

        //saleem
        public DataSet GetUserForModify(int userID, int docID)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.Stp_Get_DetailsForModify );
            dbobj.AddInParameter(dbCmd, "@IP_DOC_ID ", DbType.Int32, docID);
            dbobj.AddInParameter(dbCmd, "@IP_USER_ID", DbType.Int32, userID);
            DataSet getUsrForModifyDS = dbobj.ExecuteDataSet(dbCmd);
            return getUsrForModifyDS;
            
        }
        // sp for getting user code to check code is existing in user table or not
        public DataSet GetExistingUser(string userCD)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd=dbobj.GetStoredProcCommand(Constants.Stp_Get_ExistUsers);
            dbobj.AddInParameter(dbCmd, "USER_CD", DbType.String, userCD);
            DataSet getexistuser=dbobj.ExecuteDataSet(dbCmd );
            return getexistuser;

        }
        public DataSet GetselectRoletoAll (int RoleId)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //Database dbobj = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbobj.GetStoredProcCommand(Constants.PR_GET_CATEGORY_TYPE_NAME);
            dbobj.AddInParameter(dbCmd, "@IP_FROM_ROLE_ID", DbType.Int32, RoleId);
            DataSet getexistuser = dbobj.ExecuteDataSet(dbCmd);
            return getexistuser;
        
        }

        public UsersUtility GetUserDetails(int userID)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //objUserUtility = new UsersUtility();
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.Stp_Get_UserDetails);
            connection = dbSvc.CreateConnection();
            dbSvc.AddInParameter(DbCmd, DALConstants.User_ID_PARM, DbType.Int32, userID);
            DataSet ds = new DataSet();
            dbSvc.LoadDataSet(DbCmd, ds, "UserDetails");
            if (ds.Tables[0].Rows.Count > 0)
            {
                objUserUtility.USER_ID = userID;
                objUserUtility.USER_CD = ds.Tables["UserDetails"].Rows[0]["USER_CD"].ToString();
                objUserUtility.USER_NAME = ds.Tables["UserDetails"].Rows[0]["USER_NAME"].ToString();
                objUserUtility.USERTYPE = ds.Tables["UserDetails"].Rows[0]["USERTYPE"].ToString();
                objUserUtility.RefName = ds.Tables["UserDetails"].Rows[0]["REFERENCE_TYPE_DESC"].ToString();
                objUserUtility.RefType = ds.Tables["UserDetails"].Rows[0]["REFERENCE_TYPE_ID"].ToString();
                objUserUtility.AddressType = ds.Tables["UserDetails"].Rows[0]["ADDR_TYPE_ID_VER"].ToString();
                objUserUtility.Address1 = ds.Tables["UserDetails"].Rows[0]["Address1"].ToString();
                objUserUtility.Address2 = ds.Tables["UserDetails"].Rows[0]["Address2"].ToString();
                objUserUtility.MOBILE_PHONE = ds.Tables["UserDetails"].Rows[0]["MOBILE_PHONE"].ToString();
                objUserUtility.HOME_PHONE = ds.Tables["UserDetails"].Rows[0]["HOME_PHONE"].ToString();
                objUserUtility.OFFICE_PHONE = ds.Tables["UserDetails"].Rows[0]["OFFICE_PHONE"].ToString();
                objUserUtility.FAX_NUMBER = ds.Tables["UserDetails"].Rows[0]["FAX_NUMBER"].ToString();
                objUserUtility.Email_ID = ds.Tables["UserDetails"].Rows[0]["EMAIL_ID"].ToString();
                objUserUtility.Country = ds.Tables["UserDetails"].Rows[0]["COUNTRY_ID_VER"].ToString();
                objUserUtility.State = ds.Tables["UserDetails"].Rows[0]["STATE_ID_VER"].ToString();
                objUserUtility.City = ds.Tables["UserDetails"].Rows[0]["CITY_ID_VER"].ToString();
                objUserUtility.ZipCode = ds.Tables["UserDetails"].Rows[0]["ZIPCODE"].ToString();
                objUserUtility.WEBSITE_URL = ds.Tables["UserDetails"].Rows[0]["WEBSITE_URL"].ToString();
            }
            return objUserUtility;
        }

        public DataSet   GetUserDetailsByID(string uName)
        {
            //string str = string.Empty;
            //if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
            //    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
            //else
            //    str = "SuvarnaDB";
            //objUserUtility = new UsersUtility();
            //dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.Stp_Get_UserDetailsByUserName);
            connection = dbSvc.CreateConnection();

         DataSet ds = new DataSet();

            try
            {
                connection.Open();
                dbSvc.AddInParameter(DbCmd, "Username", DbType.String, uName); 
            
            dbSvc.LoadDataSet(DbCmd, ds, "UserDetails" );
          //  DataSet userDS = dbSvc.ExecuteDataSet(DbCmd);
                ////transaction = connection.BeginTransaction();
                //objUserUtility.USER_ID = Convert.ToInt32(ds.Tables["UserDetails"].Rows[0]["User_ID"].ToString());
                //objUserUtility.USER_CD = ds.Tables["UserDetails"].Rows[0]["USER_CD"].ToString();
                //objUserUtility.USER_NAME = ds.Tables["UserDetails"].Rows[0]["USER_NAME"].ToString();
                //objUserUtility.USERTYPE = ds.Tables["UserDetails"].Rows[0]["USERTYPE"].ToString();
                //objUserUtility.RefName = ds.Tables["UserDetails"].Rows[0]["REFERENCE_TYPE_DESC"].ToString();
                //objUserUtility.RefType = ds.Tables["UserDetails"].Rows[0]["REFERENCE_TYPE_ID"].ToString();
                //objUserUtility.AddressType = ds.Tables["UserDetails"].Rows[0]["ADDR_TYPE_ID_VER"].ToString();
                //objUserUtility.Address1 = ds.Tables["UserDetails"].Rows[0]["Address1"].ToString();
                //objUserUtility.Address2 = ds.Tables["UserDetails"].Rows[0]["Address2"].ToString();
                //objUserUtility.MobileNo = ds.Tables["UserDetails"].Rows[0]["MOBILE_PHONE"].ToString();
                //objUserUtility.HomePhoneNo = ds.Tables["UserDetails"].Rows[0]["HOME_PHONE"].ToString();
                //objUserUtility.OfficePhoneNo = ds.Tables["UserDetails"].Rows[0]["OFFICE_PHONE"].ToString();
                //objUserUtility.FaxNo = ds.Tables["UserDetails"].Rows[0]["FAX_NUMBER"].ToString();
                //objUserUtility.EmailID = ds.Tables["UserDetails"].Rows[0]["EMAIL_ID"].ToString();
                //objUserUtility.Country = ds.Tables["UserDetails"].Rows[0]["COUNTRY_ID_VER"].ToString();
                //objUserUtility.State = ds.Tables["UserDetails"].Rows[0]["STATE_ID_VER"].ToString();
                //objUserUtility.City = ds.Tables["UserDetails"].Rows[0]["CITY_ID_VER"].ToString();
                //objUserUtility.ZipCode = ds.Tables["UserDetails"].Rows[0]["ZIPCODE"].ToString();
                //objUserUtility.WebSiteURL = ds.Tables["UserDetails"].Rows[0]["WEBSITE_URL"].ToString();

            }
            catch (Exception ex)
            {
                // transaction.Rollback();
                throw ex;
            }
            finally
            {
                connection.Close();
            }
            return ds ;
        }
        public bool UpdateUserDetails(UsersUtility objUserUtility)
        {
           // string str = string.Empty;
           // if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
           //     str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
           // else
           //     str = "SuvarnaDB";
            int count = 0;
             objUserUtility = new UsersUtility();
           // dbSvc = DatabaseFactory.CreateDatabase(str);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.Stp_Upd_addressDetails);
            connection = dbSvc.CreateConnection();
           
            try
            {
                connection.Open();
                transaction = connection.BeginTransaction();
                dbSvc.AddInParameter(DbCmd, DALConstants.USER_ID_PARM, DbType.Int32, objUserUtility.USER_ID);
                dbSvc.AddInParameter(DbCmd,DALConstants.ADDRESS1_PARM, System.Data.DbType.String, objUserUtility.Address1 );
                dbSvc.AddInParameter(DbCmd, DALConstants.ADDRESS2_PARM, System.Data.DbType.String, objUserUtility.Address2);
                dbSvc.AddInParameter(DbCmd, DALConstants.MOBILEPHONE_PARM, System.Data.DbType.String, objUserUtility.MOBILE_PHONE);
                dbSvc.AddInParameter(DbCmd, DALConstants.HOMEPHONE_PARM, System.Data.DbType.String, objUserUtility.HOME_PHONE);
                dbSvc.AddInParameter(DbCmd, DALConstants.OFFICEPHONE_PARM, System.Data.DbType.String, objUserUtility.OFFICE_PHONE);
                dbSvc.AddInParameter(DbCmd, DALConstants.FAXNUMBER_PARM, System.Data.DbType.String, objUserUtility.FAX_NUMBER);
                dbSvc.AddInParameter(DbCmd, DALConstants.EMAILID_PARM, System.Data.DbType.String, objUserUtility.Email_ID);
                dbSvc.AddInParameter(DbCmd, DALConstants.COUNTRYNAME_PARM, System.Data.DbType.String, objUserUtility.Country);
                dbSvc.AddInParameter(DbCmd, DALConstants.STATENAME_PARM, System.Data.DbType.String, objUserUtility.State);
                dbSvc.AddInParameter(DbCmd, DALConstants.CITYNAME_PARM, System.Data.DbType.String, objUserUtility.City);
                dbSvc.AddInParameter(DbCmd, DALConstants.ZIPCODE_PARM, System.Data.DbType.String, objUserUtility.ZipCode);
                dbSvc.AddInParameter(DbCmd, DALConstants.WEBSITEURL_PARM, System.Data.DbType.String, objUserUtility.WEBSITE_URL);
                dbSvc.AddInParameter(DbCmd, DALConstants.PHOTO_PARM, System.Data.DbType.String, objUserUtility.IMAGEURL);
                dbSvc.AddInParameter(DbCmd, DALConstants.REFERENCE_TYPE_ID_PARM, System.Data.DbType.String, objUserUtility.REFERENCE_TYPE_ID);
                //execute the query...
               count=dbSvc.ExecuteNonQuery(DbCmd, transaction);
                //commit the transaction...
                transaction.Commit();
            }
            catch(Exception ex)
            {
                transaction.Rollback();
                throw ex ;
            }
            finally
            {
                connection.Close();
            }
            if (count > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        #region IDisposable Members

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        #endregion
        public DataSet GetDocPermissionByDocFormCd(string formcd,int userid)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbobj = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbobj.GetStoredProcCommand("PR_GET_USER_MODULE_DOC_ALL_FORMAT");
                dbobj.AddInParameter(dbCmd, "@IP_DOC_FORM_CD", DbType.String, formcd);
                dbobj.AddInParameter(dbCmd, "@IP_USER_ID", DbType.Int32, userid);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dbobj.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                DataSet docper = dbobj.ExecuteDataSet(dbCmd);
                return docper;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDocPermissionByDocFormCd").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public DataSet GetModuleIDFromModule_Form_CD(string formcd,int userid)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbobj = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbobj.GetStoredProcCommand("PR_GET_MODULE_ID_FOR_MODULE_CD");
                dbobj.AddInParameter(dbCmd, "@IP_MODULE_FORM_CD", DbType.String, formcd);
                dbobj.AddInParameter(dbCmd, "@IP_USER_ID", DbType.Int32, userid);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dbobj.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                DataSet docper = dbobj.ExecuteDataSet(dbCmd);
                return docper;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDocPermissionByDocFormCd").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        
    }
}
