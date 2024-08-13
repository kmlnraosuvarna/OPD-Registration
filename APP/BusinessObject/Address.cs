using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AddressUtil = EzHms.ModelEntity.Address;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using EzHms.DataAccessObject;
namespace EzHms.BusinessObject
{
    public class Address
    {
        private static Database dbSvc = null;
        private static DbConnection connection = null;

        public Address()
        { 
        }

        public static void InsertAddressDetails(AddressUtil objAddUtility,int empID)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
           // dbSvc = DatabaseFactory.CreateDatabase(Constants.ConnectionName);
            DbCommand DbCmd = dbSvc.GetStoredProcCommand(Constants.Stp_InsUpd_Address);
            connection = dbSvc.CreateConnection();
            //dbSvc.AddInParameter(DbCmd, "EMPLOYEE_ID_VER", DbType.Int32, empID);
            try
            {
                if (connection.State != ConnectionState.Open)
                {
                    connection.Open();
                }
                dbSvc.AddInParameter(DbCmd, "ADDRESS1", System.Data.DbType.String, objAddUtility.Address1);
                dbSvc.AddInParameter(DbCmd, "ADDRESS2", System.Data.DbType.String, objAddUtility.Address2);
                dbSvc.AddInParameter(DbCmd, "MOBILE_PHONE", System.Data.DbType.String, objAddUtility.MOBILE_PHONE);
                dbSvc.AddInParameter(DbCmd, "HOME_PHONE", System.Data.DbType.String, objAddUtility.HOME_PHONE);
                dbSvc.AddInParameter(DbCmd, "OFFICE_PHONE", System.Data.DbType.String, objAddUtility.OFFICE_PHONE);
                dbSvc.AddInParameter(DbCmd, "FAX_NUMBER", System.Data.DbType.String, objAddUtility.FAX_NUMBER);
                dbSvc.AddInParameter(DbCmd, "EMAIL_ID", System.Data.DbType.String, objAddUtility.Email_ID);
                dbSvc.AddInParameter(DbCmd, "COUNTRY_ID_VER", System.Data.DbType.Int32, objAddUtility.Country);
                dbSvc.AddInParameter(DbCmd, "STATE_ID_VER", System.Data.DbType.Int32, objAddUtility.State);
                dbSvc.AddInParameter(DbCmd, "CITY_ID_VER", System.Data.DbType.Int32, objAddUtility.City);
                dbSvc.AddInParameter(DbCmd, "ZIPCODE", System.Data.DbType.String, objAddUtility.ZipCode);
                dbSvc.AddInParameter(DbCmd, "WEBSITE_URL", System.Data.DbType.String, objAddUtility.WEBSITE_URL);
                dbSvc.AddInParameter(DbCmd, "ADDR_TYPE_ID_VER", System.Data.DbType.Int32, objAddUtility.AddressType);
                dbSvc.AddInParameter(DbCmd, "REFERENCE_TYPE_ID_VER", System.Data.DbType.Int32, 1);
                dbSvc.AddInParameter(DbCmd, "REFERENCE_ID_VER", System.Data.DbType.Int32, empID);
                //execute the query...
                dbSvc.ExecuteNonQuery(DbCmd);
                //commit the transaction...

            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                connection.Close();
            }
        }
    }
}
