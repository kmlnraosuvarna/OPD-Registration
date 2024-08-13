using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using EzHms.ModelEntity;

namespace EzHms.DataAccessObject
{
    public class DBSearchModel
    {
        /// <summary>
        /// Update the fields in the perticuler table, when the user select or de-select 
        /// the fields
        /// </summary>
        /// <param name="qryString">
        /// search criteria, contains the column id and column status in a string format
        /// the string wil be split in the stored procedure and update all columns at the time.
        /// </param>
        public void UpdateDataModel(string searchCriteria, string defaultColumn)
        {
            //instance for the Databse connection
            using (DataAccessLayer dbLayer = new DataAccessLayer())
            {
                //command name
                try
                {
                    Database dbSvc = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, EzHms.ModelEntity.StoreProceduresNames.UPR_UPDATE_ADVANCESEARCH);
                    dbSvc.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.INSTRING_PARM, DbType.String, searchCriteria);
                    dbSvc.ExecuteNonQuery(dbCmd);
                }
                catch (Exception ex)
                {
                    ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("UpdateDataModel").Name;
                    ErrorLoger.InsertErrorLogger(ex, 201, 1);
                   
                }
            }
        }
    }
}
