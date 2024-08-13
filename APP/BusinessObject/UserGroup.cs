using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using EzHms.DataAccessObject;

namespace EzHms.BusinessObject
{
    public class UserGroup
    {
        //private Database dbobj = null;

        public UserGroup()
        { 
        }

        public DataSet GetUserGroups()
        {
            //dbobj = DatabaseFactory.CreateDatabase(Constants.ConnectionName);
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dbobj = dbLayer.DBaseFactory;
            DbCommand cmd = dbobj.GetSqlStringCommand(Constants.Stp_Get_Groups);
            return dbobj.ExecuteDataSet(cmd);
        }
    }
}
