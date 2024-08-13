using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Data.Objects;
//using System.Data.EntityClient;
using System.Data.Common;
using System.Data;
using Microsoft.Practices.EnterpriseLibrary.Data;
using EzHms.DataAccessObject;
namespace EzHms.BusinessObject
{
    public class AddressType
    {

        private static Database dbSvc = null;
        private static DbConnection connection = null;
        private static DbTransaction transaction = null;

        public AddressType()
        { 

        }

        public static DataSet GetAddressType()
        {
            //AddressTypeEntitys addressEntities =new AddressTypeEntitys();
            //ObjectResult<AddresTypeModel> objAddresstype = addressEntities.GetAddressType();
            //return objAddresstype;

            DataSet dsAddrType = new DataSet();
            //dbSvc = DatabaseFactory.CreateDatabase(Constants.ConnectionName);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            connection = dbSvc.CreateConnection();
            try
            {
                connection.Open();
                DbCommand cmd = dbSvc.GetSqlStringCommand("select * from ma.ADDRESS_TYPE"); //dbSvc.GetStoredProcCommand("");
                dbSvc.LoadDataSet(cmd, dsAddrType, "AddressType");
            }
            //catch (Exception ex)
            //{

            //}
            finally
            {
                connection.Close();
            }
            return dsAddrType;
        }
    }
}
