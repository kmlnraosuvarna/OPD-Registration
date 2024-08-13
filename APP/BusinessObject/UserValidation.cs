using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Common;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Microsoft.Practices.EnterpriseLibrary.Data.Sql;

namespace EzHms.BusinessObject
{
    public class UserValidation
    {
        Database dbObj = DatabaseFactory.CreateDatabase(Constants.ConnectionName);
        IDataReader dbDR = null;
        string strRetval;

        //public string ValidateUserDetails(string uName, string password)
        //{
        //    DataSet userDetailsDS = GetExistUserDetials(uName);
        //    if (userDetailsDS.Tables.Count>0)
        //    {
        //        DbCommand dbCmd = dbObj.GetStoredProcCommand(Constants.SE_CheckUserCredentials);
        //        dbObj.AddInParameter(dbCmd, "IP_USER_NAME", DbType.String, uName);
        //        dbObj.AddInParameter(dbCmd, "IP_PASSWORD", DbType.String, password);
        //        try
        //        {
        //            dbDR = dbObj.ExecuteReader(dbCmd);
        //            if (dbDR.Read())
        //            {
        //                string pwd = dbDR[0].ToString();
        //                if (password == pwd)
        //                {
        //                    strRetval = "1";
        //                }
        //                else
        //                {
        //                    strRetval = "2";
        //                }
        //            }
        //            else
        //            {
        //                strRetval = "2";
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            return ex.Message;
        //        }
        //        finally
        //        {
        //            dbDR.Dispose();
        //            dbCmd.Connection.Close();
        //        }
        //    }
        //    else
        //    {
        //        strRetval = "0";
        //    }
        //    return strRetval;
        //}

        //public DataSet GetExistUserDetials(string uName)
        //{
        //    DbCommand dbCmd = dbObj.GetStoredProcCommand(Constants.SE_Get_UserDetails);
        //    //GETUSERDETAILS
        //    //DbCommand dbCmd = dbObj.GetStoredProcCommand("GETUSERDETAILS");
        //    dbObj.AddInParameter(dbCmd, "IP_USER_NAME", DbType.String, uName);
        //    DataSet userDetialsDS = dbObj.ExecuteDataSet(dbCmd);
        //    if (userDetialsDS.Tables.Count == 0)
        //    {
        //        return userDetialsDS;
        //    }
        //    else
        //    {
        //        return userDetialsDS;
        //    }
        //}

       
    }
}
