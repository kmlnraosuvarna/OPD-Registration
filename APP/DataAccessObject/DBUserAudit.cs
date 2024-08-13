using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using DalCont=EzHms.ModelEntity.DALConstants;
using Spname=EzHms.ModelEntity.StoreProceduresNames;
using System.Data;
using System.Collections;

namespace EzHms.DataAccessObject
{
   public class DBUserAudit:DBExecuteDataReader
    {
       public CollectionBase GetUserAudit(string FromDate, string Todate)
       {
           try
           {
               DataAccessLayer _dbLayer = new DataAccessLayer();
               Database dbSvc = _dbLayer.DBaseFactory;
               DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, Spname.UPR_GET_USER_DOC_AUDIT);
               dbSvc.AddInParameter(dbCmd, DalCont.IP_FROM_DT_PARAM, DbType.DateTime, FromDate);
               dbSvc.AddInParameter(dbCmd, DalCont.IP_TO_DT_PARAM, DbType.DateTime, Todate);
               GenerateCollectionReader SqlData = new GenerateCollectionReader(GenerateCollection);
               CollectionBase cBase = _dbLayer.ExecuteReaderCommand(dbCmd, SqlData);
               return cBase;
           }
           catch (Exception ex)
           {
               ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetUserAudit").Name;
               ErrorLoger.InsertErrorLogger(ex, 203, 1);
               return null;
           }
       }

        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            try
            {
                UserAuditCollection uCol = new UserAuditCollection();
                UserAudit uAudit;
                while (returnData.Read())
                {
                    uAudit = new UserAudit();
                    uAudit.USER_ID = Convert.ToInt32(returnData[DalCont.USER_ID_COL]);
                    uAudit.DOC_ID = Convert.ToInt32(returnData[DalCont.DOC_ID_COL]);
                    uAudit.TRANSACTION_ID = Convert.ToInt32(returnData[DalCont.TRANSACTION_ID_COL]);
                    uAudit.ACTION_ID = Convert.ToInt32(returnData[DalCont.ACTION_ID_COL]);
                    uAudit.USER_NAME = returnData[DalCont.USER_NAME_COL].ToString();
                    uAudit.DOC_NAME = returnData[DalCont.DOC_NAME_COL].ToString();
                    uAudit.NOOFTRANS = returnData[DalCont.NO_OF_TRANS_COL].ToString();
                    uCol.Add(uAudit);
                }
                return uCol;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 203, 1);
                return null;
            }
        }
        public List<ListElements> AutoExtender(string prefixText, int count, string contextKey)
        {
            count = 0;
            try
            {
                DataAccessLayer dalayer = new DataAccessLayer();
                Database dbase = dalayer.DBaseFactory;
                DbCommand dbcmd = dalayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_USERGROUP_AUTO_COMP");
                dbase.AddInParameter(dbcmd, "@IP_COLUMN_NAME", DbType.String, contextKey);
                dbase.AddInParameter(dbcmd, "@IP_PREFIXTEXT", DbType.String, prefixText);
                //dbase.AddOutParameter(dbcmd, "@OP_COUNT", DbType.Int32, count);
                return dalayer.ExecuteReadercmd(dbcmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("AutoExtender").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }

        }
    }
}
