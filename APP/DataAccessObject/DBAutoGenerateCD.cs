using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;

namespace EzHms.DataAccessObject
{
    public class DBAutoGenerateCD
    {
        public string GetAutoGenerateCD(string tableName)
        {
            string code = string.Empty;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                //Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABKEY);
                dbLayer.AddInParameter(dbCmd, DALConstants.TABLE_PARM, DbType.String, tableName);
                dbLayer.AddOutParameter(dbCmd, DALConstants.OP_TABKEY_CD_PARM, DbType.String, 20);
                dbLayer.ExecuteScalar(dbCmd);
                code = dbLayer.GetParameterValue(dbCmd, DALConstants.OP_TABKEY_CD_PARM).ToString();
                return code;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoGenerateCD").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return string.Empty;
            }
        }

        public string GetAutoReferalSourceNumber(string tableName)
        {
            string code = string.Empty;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                //Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABKEY);
                dbLayer.AddInParameter(dbCmd, DALConstants.TABLE_PARM, DbType.String, tableName);
                dbLayer.AddOutParameter(dbCmd, DALConstants.OP_TABKEY_CD_PARM, DbType.String, 20);
                dbLayer.ExecuteScalar(dbCmd);
                code = dbLayer.GetParameterValue(dbCmd, DALConstants.OP_TABKEY_CD_PARM).ToString();
                return code;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoReferalSourceNumber").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return string.Empty;
            }
        }
        public string GetAutoGenerateCDAdmn(string tableName,int casetypeid)
        {
            string code = string.Empty;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                //Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DIFF_CODE");
                dbLayer.AddInParameter(dbCmd, DALConstants.TABLE_PARM, DbType.String, tableName);
                dbLayer.AddInParameter(dbCmd, "@IP_ENTITY_VALUE_ID", DbType.Int32, casetypeid);
                dbLayer.AddOutParameter(dbCmd, "@OP_CODE", DbType.String, 20);
                dbLayer.ExecuteScalar(dbCmd);
                code = dbLayer.GetParameterValue(dbCmd, "@OP_CODE").ToString();
                return code;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoGenerateCD").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return string.Empty;
            }
        }
        public string GetAntiBoiticsAutoCD(AntiBioticsAutoCode _antibioticsCode, string code)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_PAGELOAD_TABKEY");
                dBase.AddInParameter(dbCmd, "@IP_TABLE_NAME", DbType.String, code);
                dBase.AddOutParameter(dbCmd, "@OP_TABKEY_CD", DbType.String, 20);
                dBase.ExecuteNonQuery(dbCmd);
                code = dBase.GetParameterValue(dbCmd, "@OP_TABKEY_CD").ToString();
                return code;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAntiBoiticsAutoCD").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return string.Empty;
            }
        }
    }
}
