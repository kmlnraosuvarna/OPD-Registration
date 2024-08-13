#region Comments
// ClassName    : LoginBO
// Description  : This class is used to Validate user based on UserName and Password. And to get the user details based on username
// Author       : Naga Sankar J
// DateCreated  : 29/12/2009
// Modified By  : G.Lakshmi Naryana,
// DateModified : 05/01/2010
#endregion

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Data;
//using System.Data.Objects;
using System.Data.Common;
using System.Data.SqlClient;
//using System.Data.Entity;
using logingUserInfor =EzHms.ModelEntity.UserLogingInfo;
//using System.Data.EntityClient;

namespace EzHms.BusinessObject
{
    //Business Object Login
    public class LoginBO
    {

        //#region MemberVariables
        //private  DbConnection dbCon = null;
        //private  DbCommand dbCmd = null;
        //#endregion

        //#region Properties
        //string strRetval;
        //#endregion

        //#region Validate and User Details
        ////Login Business Object to valudate user.

        //public string UserValidation(usersModel uModel)
        //{
        //    //THis method uses eHms data base to validate user.

        //    ezHmsEntity = new EzHmsEntity();
        //    List<userRoleModel> userList = GetUsersDetails(uModel).ToList();
        //    if (userList.Count > 0)
        //    {
        //        List<usersModel> validatedUserList = ezHmsEntity.CheckUserCredentials(uModel.USER_NAME, uModel.PASSWORD).ToList();
        //        //int a=string.Compare(uModel.PASSWORD,validatedUserList[0].PASSWORD.ToString());
        //        if (uModel.PASSWORD == validatedUserList[0].PASSWORD.ToString())
        //        {
        //            strRetval = "1";
        //        }
        //        else
        //        {
        //            strRetval = "2";
        //        }
        //    }
        //    else
        //    {
        //        strRetval = "0";
        //    }
        //    return strRetval;
        //}

        //public string ValidateUser(loginModel lModel)
        //{
        //    //To establish entity connection.
        //    lEntity = new loginEntity();

        //    //List<loginModel> userList = lEntity.sp_GetUserName(lModel.UserName).ToList();
        //    List<loginModel> userList = GetUserDetails(lModel).ToList();
        //    if (userList.Count > 0)
        //    {
        //        //List<loginModel> userValidateList = lEntity.sp_CheckUserCredentials(lModel.UserName, lModel.Password).ToList();
        //        List<loginModel> userValidateList = lEntity.CheckUserCredentials(lModel.UserName, lModel.Password).ToList();

        //        if (lModel.Password == userValidateList[0].Password.ToString())
        //        {
        //            strRetval = "1";
        //        }
        //        else
        //        {
        //            strRetval = "2";
        //        }
        //    }
        //    else
        //    {
        //        strRetval = "0";
        //    }
        //    return strRetval;
        //}

        ////Login Business Object to get Getting user details based on username.
        //public ObjectResult<loginModel> GetUserDetails(loginModel lModel)
        //{
        //    ObjectResult<loginModel> userDetailsList = lEntity.GetUserDetails(lModel.UserName);
        //    return userDetailsList;
        //}

        //public ObjectResult<userRoleModel> GetUsersDetails(usersModel uModel)
        //{
        //    string uName = uModel.USER_NAME;
        //    ObjectResult<userRoleModel> userDetails = ezHmsEntity.GetUserDetails(uName);
        //    return userDetails;
        //}

        //#region MethodGetUserLogingInformation
        ///// <summary>
        ///// Get the User Loging Information...
        ///// </summary>
        ///// <returns>returns the list of Loging History objects</returns>
        //public List<logHistory> GetUserLogHistory()
        //{
        //    lEntity = new loginEntity();
        //    List<logHistory> userlogHistory = lEntity.GetUserLoginInformation().ToList<logHistory>();

        //    return userlogHistory;
        //}
        //#endregion MethodGetUserLogingInformation

        ////Inserting the Loging user information
        //public void InsertLogingInfor(logingUserInfor objLogingUserInfor)
        //{
        //    lEntity = new loginEntity();
        //    eCon = (EntityConnection)lEntity.Connection;
        //    dbCon = eCon.StoreConnection;
        //    dbCmd = dbCon.CreateCommand();
        //    dbCmd.CommandText = "masters.stp_Ins_LoginHistory";
        //    dbCmd.CommandType = CommandType.StoredProcedure;
        //    bool openConnection = dbCmd.Connection.State == ConnectionState.Closed;
        //    if (openConnection)
        //    {
        //        dbCmd.Connection.Open();
        //    }
        //    //Add the parameters to the command
        //    dbCmd.Parameters.Add(new SqlParameter("@USERID", objLogingUserInfor.UserID));
        //    dbCmd.Parameters.Add(new SqlParameter("@USERNAME", objLogingUserInfor.UserName));
        //    dbCmd.Parameters.Add(new SqlParameter("@SOURCE_IPADDRESS", objLogingUserInfor.IPAddress));
        //    dbCmd.Parameters.Add(new SqlParameter("@AGENT", objLogingUserInfor.Agent));
        //    dbCmd.Parameters.Add(new SqlParameter("@HOSTNAME", objLogingUserInfor.HostName));
        //    dbCmd.Parameters.Add(new SqlParameter("@HEADERTEXT", objLogingUserInfor.HeaderText));
        //    dbCmd.Parameters.Add(new SqlParameter("@CREATEBY", objLogingUserInfor.CreatedBy));
        //    //Execute the command
        //    //dbCmd.ExecuteNonQuery();
        //}

    } 
}
