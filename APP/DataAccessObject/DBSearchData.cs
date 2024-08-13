using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data;
using EzHms.ModelEntity;

namespace EzHms.DataAccessObject
{
    public class DBSearchData:DBExecuteDataReader
    {

        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            return null;

        }
        public int GetIDOfDescription(string tableName, string colName, string colValue)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                // Database dbBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(System.Data.CommandType.StoredProcedure, EzHms.ModelEntity.StoreProceduresNames.UPR_GET_IDFROMTABLE);
                dbLayer.AddInParameter(dbCmd, "IP_Tname", DbType.String, tableName);
                dbLayer.AddInParameter(dbCmd, "IP_ColumnName", DbType.String, colName);
                dbLayer.AddInParameter(dbCmd, "IP_DescVal", DbType.String, colValue);
                object obj = dbLayer.ExecuteNonQuery(dbCmd);
                int id = obj != DBNull.Value ? Convert.ToInt32(obj) : 0;
                return id;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetIDOfDescription").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return 0;
            }
        }
    }
}
