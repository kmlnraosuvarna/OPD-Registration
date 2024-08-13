
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using SPName = EzHms.ModelEntity.StoreProceduresNames;
using limitModel = EzHms.ModelEntity.USER_LIMIT;
using System.Collections;

namespace EzHms.DataAccessObject
{
    public class DBUSER_LIMIT : DBExecuteDataReader
    {
        public bool InsertUserCreditLimits(USER_LIMIT lmtMaster, out int aID)
        {
            aID = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPName.UPR_INSUPD_USER_LIMIT);
                dBase.AddInParameter(dbCmd, DALConstants.USER_LIMIT_ID_PARM, DbType.Int32, lmtMaster.USER_LIMIT_ID);
                dBase.AddInParameter(dbCmd, DALConstants.USER_LIMIT_REV_NO_PARM, DbType.Int32, lmtMaster.USER_LIMIT_REV_NO);
                dBase.AddInParameter(dbCmd, DALConstants.USER_ID_PARM, DbType.Int32, lmtMaster.USER_ID);
                dBase.AddInParameter(dbCmd, DALConstants.REG_CNCN_PARM, DbType.Double, lmtMaster.REG_CNCN);
                dBase.AddInParameter(dbCmd, DALConstants.REG_DUE_PARM, DbType.Double, lmtMaster.REG_DUE);
                dBase.AddInParameter(dbCmd, DALConstants.IP_CNCN_PARM, DbType.Double, lmtMaster.IP_CNCN);
                dBase.AddInParameter(dbCmd, DALConstants.IP_DUE_PARM, DbType.Double, lmtMaster.IP_DUE);
                dBase.AddInParameter(dbCmd, DALConstants.OP_CONSULT_CNCN_PARM, DbType.Double, lmtMaster.OP_CONSULT_CNCN);
                dBase.AddInParameter(dbCmd, DALConstants.OP_CONSULT_DUE_PARM, DbType.Double, lmtMaster.OP_CONSULT_DUE);
                dBase.AddInParameter(dbCmd, DALConstants.OP_CNCN_PARM, DbType.Double, lmtMaster.OP_CNCN);
                dBase.AddInParameter(dbCmd, DALConstants.OP_DUE_PARM, DbType.Double, lmtMaster.OP_DUE);
                dBase.AddInParameter(dbCmd, DALConstants.IS_ACTIVE_PARM, DbType.String, lmtMaster.IS_ACTIVE);
                dBase.AddInParameter(dbCmd, "@IP_REFUND_AMOUNT_LIMIT", DbType.Double, lmtMaster.REFUNDABLE_AMOUNT);
                dBase.AddInParameter(dbCmd, "@IP_OPD_CNCN", DbType.Double, lmtMaster.OPD_CONC);
                dBase.AddInParameter(dbCmd, "@IP_OPD_DUE", DbType.Double, lmtMaster.OPD_DUE);
                dBase.AddInParameter(dbCmd, "@IP_ST_OP_CNCN", DbType.String, lmtMaster.ST_OP_CNCN);
                dBase.AddInParameter(dbCmd, "@IP_ST_OP_DUE", DbType.String, lmtMaster.ST_OP_DUE);

                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, lmtMaster.SESSION_ID);
                dBase.AddOutParameter(dbCmd, DALConstants.OP_USER_LIMIT_ID_PARM, DbType.Int32, aID);
                dBase.AddInParameter(dbCmd, "@IP_ST_IP_CNCN", DbType.String, lmtMaster.ST_IP_CNCN);
                dBase.AddInParameter(dbCmd, "@IP_ST_IP_DUE", DbType.String, lmtMaster.ST_IP_DUE);
                int count = dBase.ExecuteNonQuery(dbCmd);
                aID = dBase.GetParameterValue(dbCmd, DALConstants.OP_USER_LIMIT_ID_PARM).ToString() != string.Empty ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OP_USER_LIMIT_ID_PARM)) : 0;
                if (count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertUserCreditLimits").Name;
                ErrorLoger.InsertErrorLogger(ex, 1205, 1);
                return false;
            }
        }

        public CollectionBase GetUserCreditLimits(int usrLmtID,int UserId)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPName.UPR_GET_USER_LIMIT);
                dBase.AddInParameter(dbCmd, DALConstants.USER_LIMIT_ID_PARM, DbType.Int32, usrLmtID);
                dBase.AddInParameter(dbCmd, DALConstants.USER_ID_PARM, DbType.Int32, UserId);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetUserCreditLimits").Name;
                ErrorLoger.InsertErrorLogger(ex, 1205, 1);
                return null;
            }
        }

        public CollectionBase GetAllUsersLimits(LookUpSearch OBJ, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_USER_LIMIT);
                dbLayer.AddInParameter(dbCmd, DALConstants.PageNum, DbType.Int32, OBJ.CURRENT_PAGE);
                dbLayer.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, OBJ.PAGE_SIZE);
                dbLayer.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, OBJ.COLUMN_NAME);
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, OBJ.PREFIX_TEXT);
                dbLayer.AddInParameter(dbCmd, DALConstants.FROM_DT_PARM, DbType.String, OBJ.FROM_DATE);
                dbLayer.AddInParameter(dbCmd, DALConstants.TO_DT_PARM, DbType.String, OBJ.TO_DATE);
                dbLayer.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARAM, DbType.String, OBJ.ADVANCESEARCH);
                dbLayer.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                total_records = Convert.ToInt32(dbLayer.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllUsersLimits").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            try
            {
                USER_LIMIT_COLL lmtCollection = new USER_LIMIT_COLL();
                limitModel lmtMaster;
                while (returnData.Read())
                {
                    lmtMaster = new limitModel();

                    lmtMaster.USER_LIMIT_ID = !string.IsNullOrEmpty(returnData[DALConstants.USER_LIMIT_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.USER_LIMIT_ID_COL].ToString()) : 0;
                    lmtMaster.USER_LIMIT_REV_NO = !string.IsNullOrEmpty(returnData[DALConstants.USER_LIMIT_REV_NO_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.USER_LIMIT_REV_NO_COL].ToString()) : 0;
                    lmtMaster.USER_ID = !string.IsNullOrEmpty(returnData[DALConstants.USER_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.USER_ID_COL].ToString()) : 0;
                    lmtMaster.REG_CNCN = !string.IsNullOrEmpty(returnData[DALConstants.REG_CNCN_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.REG_CNCN_COL].ToString()) : 0;
                    lmtMaster.REG_DUE = !string.IsNullOrEmpty(returnData[DALConstants.REG_DUE_COL].ToString()) && !DBNull.Value.Equals(returnData[DALConstants.REG_DUE_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.REG_DUE_COL].ToString()) : 0;
                    lmtMaster.IP_CNCN = !string.IsNullOrEmpty(returnData[DALConstants.IP_CNCN_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.IP_CNCN_COL].ToString()) : 0;
                    lmtMaster.IP_DUE = !string.IsNullOrEmpty(returnData[DALConstants.IP_DUE_COL].ToString()) ? float.Parse(returnData[DALConstants.IP_DUE_COL].ToString()) : 0;
                    lmtMaster.OP_CONSULT_CNCN = !string.IsNullOrEmpty(returnData[DALConstants.OP_CONSULT_CNCN_COL].ToString()) ? float.Parse(returnData[DALConstants.OP_CONSULT_CNCN_COL].ToString()) : 0;
                    lmtMaster.OP_CONSULT_DUE = !string.IsNullOrEmpty(returnData[DALConstants.OP_CONSULT_DUE_COL].ToString()) ? float.Parse(returnData[DALConstants.OP_CONSULT_DUE_COL].ToString()) : 0;
                    lmtMaster.OP_CNCN = !string.IsNullOrEmpty(returnData[DALConstants.OP_CNCN_COL].ToString()) ? float.Parse(returnData[DALConstants.OP_CNCN_COL].ToString()) : 0;
                    lmtMaster.OP_DUE = !string.IsNullOrEmpty(returnData[DALConstants.OP_DUE_COL].ToString()) ? float.Parse(returnData[DALConstants.OP_DUE_COL].ToString()) : 0;
                    lmtMaster.OP_DUE = !string.IsNullOrEmpty(returnData[DALConstants.OP_DUE_COL].ToString()) ? float.Parse(returnData[DALConstants.OP_DUE_COL].ToString()) : 0;
                    lmtMaster.USER_NAME = returnData[DALConstants.USER_NAME_COL].ToString();
                    lmtMaster.USER_CD = returnData[DALConstants.USER_CD_COLL].ToString();
                    lmtMaster.IS_ACTIVE = returnData[DALConstants.IS_ACTIVE_COL].ToString();
                    lmtMaster.CREATE_BY = !string.IsNullOrEmpty(returnData[DALConstants.CREATE_BY_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.CREATE_BY_COL].ToString()) : 0;
                    lmtMaster.CREATE_DT = returnData[DALConstants.CREATE_DT_COL].ToString();
                    lmtMaster.REFUNDABLE_AMOUNT = !string.IsNullOrEmpty(returnData["REFUND_AMOUNT_LIMIT"].ToString()) ? Convert.ToString(returnData["REFUND_AMOUNT_LIMIT"].ToString()) : string.Empty;
                    lmtMaster.OPD_CONC = !string.IsNullOrEmpty(returnData["OPD_CNCN"].ToString()) ? float.Parse(returnData["OPD_CNCN"].ToString()) : 0;
                    lmtMaster.OPD_DUE= !string.IsNullOrEmpty(returnData["OPD_DUE"].ToString()) ? float.Parse(returnData["OPD_DUE"].ToString()) : 0;
                    lmtMaster.ST_OP_CNCN = !string.IsNullOrEmpty(returnData["ST_OP_CNCN"].ToString()) ? Convert.ToString(returnData["ST_OP_CNCN"].ToString()) : string.Empty;
                    lmtMaster.ST_OP_DUE = !string.IsNullOrEmpty(returnData["ST_OP_DUE"].ToString()) ? Convert.ToString(returnData["ST_OP_DUE"].ToString()) : string.Empty;
                    lmtMaster.ST_IP_CNCN = !string.IsNullOrEmpty(returnData["ST_IP_CNCN"].ToString()) ? Convert.ToString(returnData["ST_IP_CNCN"].ToString()) : string.Empty;
                    lmtMaster.ST_IP_DUE = !string.IsNullOrEmpty(returnData["ST_IP_DUE"].ToString()) ? Convert.ToString(returnData["ST_IP_DUE"].ToString()) : string.Empty;
                    lmtMaster.MODIFY_DT = returnData[DALConstants.MODIFY_DT_COL].ToString();  
                    lmtCollection.Add(lmtMaster);
                }
                return lmtCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
    }
}
