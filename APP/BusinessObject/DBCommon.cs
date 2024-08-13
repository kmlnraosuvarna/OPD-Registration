using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data;
using System.Data.Common;
using EzHms.DataAccessObject;
namespace EzHms.BusinessObject
{
    public class DBCommon
    {
         //Database  dbSvc = DatabaseFactory.CreateDatabase(Constants.ConnectionName);
        public DBCommon()
        { 
        }

        public IDataReader ExecuteReader(string procName, params object[] paramValues)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbSvc = dbLayer.DBaseFactory;
            DbCommand cmd = dbSvc.GetStoredProcCommand(procName);
            foreach(object parm in paramValues)
            {
              
            }
            return dbSvc.ExecuteReader(cmd);

        }
        
    }
}
