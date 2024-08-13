using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using EzHms.ModelEntity;
using System.Collections;

namespace EzHms.DataAccessObject
{
    public class DBUMR_LOCK : DBExecuteDataReader
    {
        public bool LockTransaction(UMR_LOCK locModel, out int TID)
        {
            TID = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_UMR_LOCK);
                dBase.AddInParameter(dbCmd, DALConstants.UMR_LOCK_ID_PARM, DbType.Int32, locModel.UMR_LOCK_ID);
                dBase.AddInParameter(dbCmd, DALConstants.BILL_NO_PARM, DbType.String, locModel.BILL_NO);
                dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, locModel.ADMN_NO);
                dBase.AddInParameter(dbCmd, DALConstants.UMR_NO_PARM, DbType.String, locModel.UMR_NO);
                dBase.AddInParameter(dbCmd, DALConstants.DOC_ID_PARM, DbType.Int32, locModel.DOC_ID);
                dBase.AddInParameter(dbCmd, DALConstants.LOCK_STATUS_PARM, DbType.String, locModel.LOCK_STATUS);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, locModel.SESSION_ID);
                
                dBase.AddOutParameter(dbCmd, DALConstants.OP_UMR_LOCK_ID_PARM, DbType.Int32, 0);
                int count = dBase.ExecuteNonQuery(dbCmd);
                TID = dBase.GetParameterValue(dbCmd, DALConstants.OP_UMR_LOCK_ID_PARM).ToString() != string.Empty ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OP_UMR_LOCK_ID_PARM)) : 0;
                if (count > 0)
                    return true;
                else
                    return false;
            }

            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("LockTransaction").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return false;
            }
        }

        public string GetTransactionStatus(UMR_LOCK locModel)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_UMR_LOCK);
                dBase.AddInParameter(dbCmd, DALConstants.BILL_NO_PARM, DbType.String, locModel.BILL_NO);
                dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, locModel.ADMN_NO);
                dBase.AddInParameter(dbCmd, DALConstants.UMR_NO_PARM, DbType.String, locModel.UMR_NO);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, locModel.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.DOCUMENT_ID_PARM, DbType.Int32, locModel.DOC_ID);
                return dBase.ExecuteScalar(dbCmd).ToString();
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetTransactionStatus").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return string.Empty;
            }
        }
        public void ReleaseTransactionLog(UMR_LOCK locModel)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_UPD_REALEASE_UMR_LOCK);
                dBase.AddInParameter(dbCmd, DALConstants.BILL_NO_PARM, DbType.String, locModel.BILL_NO);
                dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, locModel.ADMN_NO);
                dBase.AddInParameter(dbCmd, DALConstants.UMR_NO_PARM, DbType.String, locModel.UMR_NO);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, locModel.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.DOCUMENT_ID_PARM, DbType.Int32, locModel.DOC_ID);
                 dBase.ExecuteScalar(dbCmd).ToString();
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ReleaseTransactionLog").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                //return string.Empty;
            }
        }
        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            try
            {
                UMR_LOCK_COLL locMasterCollection = new UMR_LOCK_COLL();
                UMR_LOCK locMaster;
                while (returnData.Read())
                {
                    locMaster = new UMR_LOCK();
                    locMaster.UMR_NO = returnData[DALConstants.UMR_NO_COL].ToString();
                    locMaster.ADMN_NO = returnData[DALConstants.ADMN_NO_COL].ToString();
                    locMasterCollection.Add(locMaster);
                }

                return locMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return null;
        }


        public CollectionBase GetLookUpUmrLock(LookUpSearch gPage, out int total_Records)
        {
            total_Records = 0;
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dbSvc = _dbLayer.DBaseFactory;
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_UMR_LOCK_LOOKUP);

                dbSvc.AddInParameter(dbCmd, DALConstants.IP_PAGENUM_PRAM, DbType.Int32, gPage.CURRENT_PAGE);
                dbSvc.AddInParameter(dbCmd, DALConstants.IP_PAGESIZE_PRAM, DbType.Int32, gPage.PAGE_SIZE);
                if (!string.IsNullOrEmpty(gPage.PreConditon[0].ToString()))
                {
                    dbSvc.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, gPage.PreConditon[0]);
                }
                if (string.IsNullOrEmpty(gPage.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PRAM, DbType.String, gPage.COLUMN_NAME);
                    dbSvc.AddInParameter(dbCmd, DALConstants.IP_PREFIXTEXT_PRAM, DbType.String, gPage.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(gPage.ADVANCESEARCH))
                    dbSvc.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, gPage.ADVANCESEARCH);
                dbSvc.AddOutParameter(dbCmd, DALConstants.OP_COUNT_PRAM, DbType.Int32, total_Records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GeneratelookupBed);
                CollectionBase cBase = _dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                total_Records = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, DALConstants.OP_COUNT_PRAM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUpUmrLock").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        protected CollectionBase GeneratelookupBed(IDataReader returnData)
        {
            try
            {
                UMR_LOCK_COLL locMasterCollection = new UMR_LOCK_COLL();
                UMR_LOCK locMaster;
                while (returnData.Read())
                {
                    locMaster = new UMR_LOCK();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.UMR_LOCK_ID_COL].ToString()))
                        locMaster.UMR_LOCK_ID = Convert.ToInt32(returnData[DALConstants.UMR_LOCK_ID_COL]);
                    locMaster.ADMN_NO = !string.IsNullOrEmpty(returnData[DALConstants.ADMN_NO_COL].ToString()) ? returnData[DALConstants.ADMN_NO_COL].ToString() :string.Empty;
                    locMaster.BILL_NO = !string.IsNullOrEmpty(returnData[DALConstants.BILL_NO_COL].ToString()) ? returnData[DALConstants.BILL_NO_COL].ToString() : string.Empty;
                    locMaster.BILL_TYPE = !string.IsNullOrEmpty(returnData[DALConstants.BILL_TYPE_COL].ToString()) ? returnData[DALConstants.BILL_TYPE_COL].ToString() : string.Empty;
                    locMaster.MACHINE = !string.IsNullOrEmpty(returnData[DALConstants.MACHINE_COL].ToString()) ? returnData[DALConstants.MACHINE_COL].ToString() : string.Empty;
                    locMaster.USER_NAME =!string.IsNullOrEmpty(returnData[DALConstants.USER_NAME_COL].ToString()) ? returnData[DALConstants.USER_NAME_COL].ToString() : string.Empty;
                    locMaster.UMR_NO =  !string.IsNullOrEmpty(returnData[DALConstants.UMR_NO_COL].ToString()) ? returnData[DALConstants.UMR_NO_COL].ToString() : string.Empty;
                    locMasterCollection.Add(locMaster);
                }

                return locMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GeneratelookupBed").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return null;

        }
        public List<ListElements> LookUpAutoCompUmr_Lock(string prefixText, int count, string contextKey)
        {
            try
            {
                Database dbObj = DatabaseFactory.CreateDatabase("SuvarnaDB");

                DbCommand dbCmd = dbObj.GetStoredProcCommand(SPNames.UPR_GET_UMRLOCK_AUTO);
                dbObj.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PRAM, DbType.String, contextKey);
                dbObj.AddInParameter(dbCmd, DALConstants.IP_PREFIXTEXT_PRAM, DbType.String, prefixText);
                dbObj.AddInParameter(dbCmd, DALConstants.IP_COUNT_PARM, DbType.Int32, count);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dbObj.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                IDataReader dbDR = dbObj.ExecuteReader(dbCmd);
                return DataReader(dbDR);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("LookUpAutoCompUmr_Lock").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        private List<ListElements> DataReader(IDataReader dbDR)
        {
            try
            {
                List<ListElements> returnData = new List<ListElements>();
                while (dbDR.Read())
                {
                    ListElements _element = new ListElements();
                    _element.Text = dbDR[0].ToString();
                    _element.Value = dbDR[1].ToString();
                    returnData.Add(_element);
                }
                return returnData;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DataReader").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
    }
}
