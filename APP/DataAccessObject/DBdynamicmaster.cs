using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using DALCONST = EzHms.ModelEntity.DALConstants;
using SpNames = EzHms.ModelEntity.StoreProceduresNames;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Microsoft.Practices.EnterpriseLibrary.Data.Sql;
using System.Collections;
using System.Data.Common;
using System.Data;
using System.IO;


namespace EzHms.DataAccessObject
{
   public class DBdynamicmaster:DBExecuteDataReader
    {
       public bool InsertData(FinancialWorkFlow  aw, out int cntId)
       {
           cntId = 0;
           try
           {
               DataAccessLayer dblayer = new DataAccessLayer();
               Database dbase = dblayer.DBaseFactory;
               DbCommand dcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_FINACIAL_WORKFLOW");
               dbase.AddInParameter(dcmd, "@IP_FINANCIAL_WF_ID", DbType.String, aw.FINANCIAL_WF_ID);
               dbase.AddInParameter(dcmd, "@IP_FINANCIAL_WF_CD", DbType.String, aw.FINANCIAL_WF_CD);
               dbase.AddInParameter(dcmd, "@IP_FINANCIAL_WF_NAME", DbType.String, aw.FINANCIAL_WF_NAME);
               dbase.AddInParameter(dcmd, "@IP_FINANCIAL_WF_DESC", DbType.String, aw.FINANCIAL_WF_DESC);
               dbase.AddInParameter(dcmd, "@IP_FINANCIAL_REV_NO", DbType.String, aw.FINANCIAL_REV_NO);
               dbase.AddInParameter(dcmd, "@IP_SESSION_ID", DbType.String, aw.SESSION_ID);
               dbase.AddInParameter(dcmd, "@IP_IMAGE_PATH ", DbType.String, aw.IMAGE_PATH);
               //dbase.AddInParameter(dcmd, DALConstants.IP_RECORD_SNO_PARAM, DbType.String, appt.RECORD_SNO);

               dbase.AddOutParameter(dcmd, DALConstants.OP_COUNT_PARAM, DbType.Int32, 10);

               dbase.ExecuteNonQuery(dcmd);
               cntId = Convert.ToInt32(dbase.GetParameterValue(dcmd, DALConstants.OP_COUNT_PARAM));
               return true;
           }
           catch (Exception ex)
           {
               ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertData").Name;
               ErrorLoger.InsertErrorLogger(ex, 201, 1);
               return false;
           }
       }

        protected override CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            throw new NotImplementedException();
        }

        public bool InsertData(Assayworkflow aw, int cntId)
        {
            throw new NotImplementedException();
        }
        public string GetCode(ServiceAutoCode serAutoCode, string code)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;

                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_TABKEY");
                dbSvc.AddInParameter(dbCmd, "@IP_TABLE_NAME", DbType.String, code);
                dbSvc.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, 10);
                dbSvc.AddOutParameter(dbCmd, "@OP_TABKEY_CD", DbType.String, 20);
                dbSvc.ExecuteNonQuery(dbCmd);
                code = dbSvc.GetParameterValue(dbCmd, "@OP_TABKEY_CD").ToString();

                return code;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCode").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetGridFinancialworkflow(GridPaging gPage, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database _dBase = _dbLayer.DBaseFactory;

                DbCommand _dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FINANCIAL_WORKFLOW");
                _dBase.AddInParameter(_dbCmd, DALConstants.IP_PAGESIZE_PARAM, DbType.Int32, gPage.PAGE_SIZE);
                _dBase.AddInParameter(_dbCmd, DALConstants.IP_PAGENUM_PARAM, DbType.Int32, gPage.CURRENT_PAGE);
                _dBase.AddInParameter(_dbCmd, DALConstants.IP_PREFIXTEXT_PARAM, DbType.String, gPage.PREFIX_TEXT);
                _dBase.AddInParameter(_dbCmd, DALConstants.IP_COLUMN_NAME_PARAM, DbType.String, gPage.COLUMN_NAME);
                _dBase.AddOutParameter(_dbCmd, DALConstants.OP_COUNT_PARAM, DbType.Int32, total_records);
                _dBase.AddInParameter(_dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, gPage.ADVANCESEARCH);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCollectionGrid);
                CollectionBase cBase = _dbLayer.ExecuteReaderCommand(_dbCmd, sqlData);
                total_records = Convert.ToInt32(_dBase.GetParameterValue(_dbCmd, DALConstants.OP_COUNT_PARAM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetGridFinancialworkflow").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }


        protected CollectionBase GetCollectionGrid(IDataReader returnData)
        {
            try
            {
                FinancialWorkFlow appt;
                AssayworkflowCollections awcoll = new AssayworkflowCollections();

                while (returnData.Read())
                {
                    appt = new FinancialWorkFlow();
                    appt.FINANCIAL_WF_ID = Convert.ToInt32(returnData["FINANCIAL_WF_ID"].ToString());
                    appt.FINANCIAL_WF_CD = returnData["FINANCIAL_WF_CD"].ToString();
                    appt.FINANCIAL_WF_NAME = returnData["FINANCIAL_WF_NAME"].ToString();
                    appt.FINANCIAL_WF_DESC = returnData["FINANCIAL_WF_DESC"].ToString();
                    appt.RECORD_STATUS = returnData[DALConstants.RECORD_STATUS_COL].ToString();
                    awcoll.Add(appt);

                }
                return awcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCollectionGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }

        }
        public bool Delete(string del)
        {
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database _dBase = _dbLayer.DBaseFactory;
                DbCommand _dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_DEL_FINANCIAL_WORKFLOW");
                _dBase.AddInParameter(_dbCmd, "@IP_FINANCIAL_WF_ID ", DbType.Int32, del);
                _dBase.ExecuteNonQuery(_dbCmd);
                return true;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Delete").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return false;
            }

        }
        public List<ListElements> AutoExtender(string prefixText, int count, string contextKey)
        {
            count = 0;
            try
            {
                DataAccessLayer dalayer = new DataAccessLayer();
                Database dbase = dalayer.DBaseFactory;
                DbCommand dbcmd = dalayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_FINANCIALWORKFLOW");
                dbase.AddInParameter(dbcmd, "@IP_COLUMN_NAME", DbType.String, contextKey);
                dbase.AddInParameter(dbcmd, "@IP_PREFIXTEXT", DbType.String, prefixText);
                // dbase.AddOutParameter(dbcmd, "@OP_COUNT", DbType.Int32, count);
                return dalayer.ExecuteReadercmd(dbcmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("AutoExtender").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }

        }
        public CollectionBase EditFinancial(FinancialWorkFlow fwf)
        {
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database _dbase = _dbLayer.DBaseFactory;
                DbCommand _dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FINANCIAL_WORKFLOW_FPNL");

                _dbase.AddInParameter(_dbCmd, "@IP_FINANCIAL_WF_ID", DbType.Int32, fwf.FINANCIAL_WF_ID);

                GenerateCollectionReader sqldata = new GenerateCollectionReader(GenerateCOllectionEdit);
                CollectionBase _cBase = _dbLayer.ExecuteReaderCommand(_dbCmd, sqldata);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("EditFinancial").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        protected CollectionBase GenerateCOllectionEdit(IDataReader returnData)
        {
            try
            {
                FinancialWorkFlowCollection coll = new FinancialWorkFlowCollection();
                FinancialWorkFlow appt;
                while (returnData.Read())
                {
                    appt = new FinancialWorkFlow();
                    appt.FINANCIAL_WF_ID = Convert.ToInt32(returnData["FINANCIAL_WF_ID"].ToString());
                    appt.FINANCIAL_WF_NAME = returnData["FINANCIAL_WF_NAME"].ToString();
                    appt.FINANCIAL_WF_DESC = returnData["FINANCIAL_WF_DESC"].ToString();
                    appt.FINANCIAL_REV_NO = Convert.ToInt32(returnData["FINANCIAL_REV_NO"].ToString());
                    appt.FINANCIAL_WF_CD = returnData["FINANCIAL_WF_CD"].ToString();

                    appt.FIRSTREC = returnData[DALConstants.First_Col] != DBNull.Value ? returnData[DALConstants.First_Col].ToString() : string.Empty;
                    appt.PREVREC = returnData[DALConstants.Prev_Col] != DBNull.Value ? returnData[DALConstants.Prev_Col].ToString() : string.Empty;
                    appt.NEXTREC = returnData[DALConstants.Next_Col] != DBNull.Value ? returnData[DALConstants.Next_Col].ToString() : string.Empty;
                    appt.LASTREC = returnData[DALConstants.Last_Col] != DBNull.Value ? returnData[DALConstants.Last_Col].ToString() : string.Empty;

                    coll.Add(appt);
                }
                return coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCOllectionEdit").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        #region Saving DocumentAttributes
        public bool SaveDocumentAttributes(ADT_DSCHRG_SUM objds)
        {
            int count = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                StringBuilder xmlData = new StringBuilder();

                /*xmlData.Append("<root>");
                foreach (ADT_DSCHRG_SUM summaryChild in objds.ADT_DSCHRG_SUM_COLLEC)
                {
                    xmlData.Append("<DOCUMENT_ATTRIBUTE");
                    xmlData.Append(EzHms.ModelEntity.PropertyHandler.AddAttributes(summaryChild));
                    xmlData.Append("></DOCUMENT_ATTRIBUTE>");
                }
                xmlData.Append("</root>");
                MemoryStream stream = new MemoryStream(System.Text.Encoding.UTF32.GetBytes(xmlData.ToString()));
                System.Data.SqlTypes.SqlXml xml = new System.Data.SqlTypes.SqlXml(stream);*/

                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_DOCUMENT_ATTRIBUTE_XML");
                dbSvc.AddInParameter(dbCmd, "@XML", DbType.Xml, objds.DOC_ATTR_XML);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                bool Result = dbLayer.ExecuteNonQuery(dbCmd);
                return Result;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveDocumentAttributes").Name;
                ErrorLoger.InsertErrorLogger(ex, 1207, 1);
                return false;
            }
        }

        public CollectionBase GetDocumentAttributesByDocId(int docId)
        {
            DataAccessLayer _dbLayer = new DataAccessLayer();
            Database dBase = _dbLayer.DBaseFactory;
            DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, SpNames.UPR_GET_DOCUMENT_ATTRIBUTE);
            try
            {
                dBase.AddInParameter(dbCmd, "@IP_DOCUMENT_ID", DbType.Int32, Convert.ToInt32(docId));
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateDocAttributesCollection);
                CollectionBase _cBase = _dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDocumentAttributesByDocId").Name;
                ErrorLoger.InsertErrorLogger(ex, 102, 1);
            }
            return null;

        }
        protected CollectionBase GenerateDocAttributesCollection(IDataReader returnData)
        {
            try
            {
                ADT_DSCHRG_SUM_COLLECTION objCol = new ADT_DSCHRG_SUM_COLLECTION();
                while (returnData.Read())
                {
                    ADT_DSCHRG_SUM adtDsch = new ADT_DSCHRG_SUM();
                    adtDsch.DOCUMENT_ID = !DBNull.Value.Equals(returnData[DALCONST.DOCUMENT_ID_COL]) ? Convert.ToInt32(returnData[DALCONST.DOCUMENT_ID_COL]) : 0;
                    adtDsch.DOCUMENT_NAME = !DBNull.Value.Equals(returnData[DALCONST.DOCUMENT_NAME_COL]) ? Convert.ToString(returnData[DALCONST.DOCUMENT_NAME_COL]) : string.Empty;
                    adtDsch.ATTRIBUTE_ID = !DBNull.Value.Equals(returnData[DALCONST.ATTRIBUTE_ID_COL]) ? Convert.ToInt32(returnData[DALCONST.ATTRIBUTE_ID_COL]) : 0;
                    adtDsch.ATTRIBUTE_CD = !DBNull.Value.Equals(returnData[DALCONST.ATTRIBUTE_CD_COL]) ? Convert.ToString(returnData[DALCONST.ATTRIBUTE_CD_COL]) : string.Empty;
                    adtDsch.ATTRIBUTE_NAME = !DBNull.Value.Equals(returnData[DALCONST.ATTRIBUTE_NAME_COL]) ? Convert.ToString(returnData[DALCONST.ATTRIBUTE_NAME_COL]) : string.Empty;
                    adtDsch.LOGICAL_CD = !DBNull.Value.Equals(returnData[DALCONST.LOGICAL_CD_COL]) ? Convert.ToString(returnData[DALCONST.LOGICAL_CD_COL]) : string.Empty;
                    adtDsch.PHYSICAL_CD = !DBNull.Value.Equals(returnData[DALCONST.PHYSICAL_CD_COL]) ? Convert.ToString(returnData[DALCONST.PHYSICAL_CD_COL]) : string.Empty;
                    adtDsch.RECORD_STATUS = !DBNull.Value.Equals(returnData[DALCONST.RECORD_STATUS_COL]) ? Convert.ToString(returnData[DALCONST.RECORD_STATUS_COL]) : string.Empty;
                    objCol.Add(adtDsch);
                }
                return objCol;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateDocAttributesCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public string SaveDocumentAttributesMapping(ADT_DSCHRG_SUM objds)
        {
            //count = string.Empty;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                StringBuilder xmlData = new StringBuilder();
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_UPD_USER_DOC_ACCESS");
                dbSvc.AddInParameter(dbCmd, "@IP_DOC_ID", DbType.Int32, objds.DOC_ID);
                dbSvc.AddInParameter(dbCmd, "@IP_USER_ID", DbType.Int32, objds.USER_ID);
                //dbSvc.AddInParameter(dbCmd, "@IP_MODULE_ID", DbType.Int32, objds.MODULE_ID);
                dbSvc.AddInParameter(dbCmd, "@IP_ACCESS_ADD_DISABLE_ATTRIBUTES", DbType.String, objds.ADD_ATTRIBUTES);
                dbSvc.AddInParameter(dbCmd, "@IP_ACCESS_MOD_DISABLE_ATTRIBUTES", DbType.String, objds.MODIFY_ATTRIBUTES);
                dbSvc.AddInParameter(dbCmd, "@IP_ACCESS_QRY_DISABLE_ATTRIBUTES", DbType.String, objds.QRY_ATTRIBUTES);
                //dbSvc.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, objds.SESSION_ID);
                //dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.String, Convert.ToInt32(count));
                string Result = dbLayer.ExecuteScalar(dbCmd).ToString();
                //count = dbSvc.GetParameterValue(dbCmd, DALConstants.OP_COUNT_PARAM).ToString();
                return Result;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveDocumentAttributesMapping").Name;
                ErrorLoger.InsertErrorLogger(ex, 1207, 1);
                return string.Empty;
            }
        }
        public CollectionBase GetDocumentAttributesByDocIdUserId(int docId, int userid,out string msg)
        {
            msg = string.Empty;
            DataAccessLayer _dbLayer = new DataAccessLayer();
            Database dBase = _dbLayer.DBaseFactory;
            DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_USER_DOC_ACCESS_EXISTS");
            try
            {
                dBase.AddInParameter(dbCmd, "@IP_DOC_ID", DbType.Int32, Convert.ToInt32(docId));
                dBase.AddInParameter(dbCmd, "@IP_USER_ID", DbType.Int32, Convert.ToInt32(userid));
                dBase.AddInParameter(dbCmd, "@OP_MESSAGE", DbType.String, msg);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(MappedDocAttrCol);
                CollectionBase _cBase =_dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDocumentAttributesByDocIdUserId").Name;
                ErrorLoger.InsertErrorLogger(ex, 102, 1);
            }
            return null;

        }
        protected CollectionBase MappedDocAttrCol(IDataReader returnData)
        {
            try
            {
                ADT_DSCHRG_SUM_COLLECTION objCol = new ADT_DSCHRG_SUM_COLLECTION();
                while (returnData.Read())
                {
                    ADT_DSCHRG_SUM adtDsch = new ADT_DSCHRG_SUM();

                    adtDsch.DOCUMENT_ID = !DBNull.Value.Equals(returnData["DOC_ID"]) ? Convert.ToInt32(returnData["DOC_ID"]) : 0;
                    adtDsch.USER_ID = !DBNull.Value.Equals(returnData["USER_ID"]) ? Convert.ToInt32(returnData["USER_ID"]) : 0;
                    adtDsch.ADD_ATTRIBUTES = !DBNull.Value.Equals(returnData["ACCESS_ADD_DISABLE_ATTRIBUTES"]) ? Convert.ToString(returnData["ACCESS_ADD_DISABLE_ATTRIBUTES"]) : string.Empty;
                    adtDsch.MODIFY_ATTRIBUTES = !DBNull.Value.Equals(returnData["ACCESS_MOD_DISABLE_ATTRIBUTES"]) ? Convert.ToString(returnData["ACCESS_MOD_DISABLE_ATTRIBUTES"]) : string.Empty;
                    adtDsch.QRY_ATTRIBUTES = !DBNull.Value.Equals(returnData["ACCESS_QRY_DISABLE_ATTRIBUTES"]) ? Convert.ToString(returnData["ACCESS_QRY_DISABLE_ATTRIBUTES"]) : string.Empty;

                    objCol.Add(adtDsch);
                }
                return objCol;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("MappedDocAttrCol").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetDocumentsByModId(GridPaging gPage,out int total_records)
        {
            total_records = 0;
            DataAccessLayer _dbLayer = new DataAccessLayer();
            Database dBase = _dbLayer.DBaseFactory;
            DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_DOCUMENTBYMODULE");
            try
            {
                dBase.AddInParameter(dbCmd, "@IP_MODULEID", DbType.Int32, gPage.MOD_ID);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, gPage.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, gPage.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, gPage.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, gPage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, gPage.EVENTFLAG);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, gPage.ADVANCESEARCH);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(DocCol);
                CollectionBase _cBase = _dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDocumentsByModId").Name;
                ErrorLoger.InsertErrorLogger(ex, 102, 1);
            }
            return null;

        }
        protected CollectionBase DocCol(IDataReader returnData)
        {
            try
            {
                ADT_DSCHRG_SUM_COLLECTION objCol = new ADT_DSCHRG_SUM_COLLECTION();
                while (returnData.Read())
                {
                    ADT_DSCHRG_SUM adtDsch = new ADT_DSCHRG_SUM();

                    adtDsch.DOCUMENT_ID = !DBNull.Value.Equals(returnData["DOC_ID"]) ? Convert.ToInt32(returnData["DOC_ID"]) : 0;
                    adtDsch.DOCUMENT_CD = !DBNull.Value.Equals(returnData["DOC_CD"]) ? Convert.ToString(returnData["DOC_CD"]) : string.Empty;
                    adtDsch.DOCUMENT_NAME = !DBNull.Value.Equals(returnData["DOC_NAME"]) ? Convert.ToString(returnData["DOC_NAME"]) : string.Empty;
                    adtDsch.DOCUMENT_REV_NO = !DBNull.Value.Equals(returnData["DOCUMENT_REV_NO"]) ? Convert.ToString(returnData["DOCUMENT_REV_NO"]) : string.Empty;
                    adtDsch.TOTAL_RECORDS = !DBNull.Value.Equals(returnData["TOT_RECORD_CNT"]) ? Convert.ToInt32(returnData["TOT_RECORD_CNT"]) : 0;
                    objCol.Add(adtDsch);
                }
                return objCol;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("MappedDocAttrCol").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        #endregion

    }
}
