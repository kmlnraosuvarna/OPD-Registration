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
using System.IO;
using System.Data.SqlTypes;
using System.Data.Common;
using System.Collections;
using System.Data;
using System.Data.SqlClient;
using SPNAMES = EzHms.ModelEntity.StoreProceduresNames;
using DALCONST = EzHms.ModelEntity.DALConstants;
using EzHms.ModelEntity;

namespace EzHms.DataAccessObject
{
    public class DBEventform : DBExecuteDataReader
    {

        DataAccessLayer dbLayer = new DataAccessLayer();
        public bool Save(Eventform evntfom)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_EVENT");
                dbsv.AddInParameter(cmd, "@IP_EFT_FROM_DATE", DbType.String, evntfom.EFT_FROM_DATE);
                dbsv.AddInParameter(cmd, "@IP_EFT_TO_DATE", DbType.String, evntfom.EFT_TO_DATE);
                dbsv.AddInParameter(cmd, "@IP_EVENT_ID", DbType.String, evntfom.EVENT_ID);
                dbsv.AddInParameter(cmd, "@IP_EVENT_REV_NO", DbType.String, null);
                dbsv.AddInParameter(cmd, "@IP_CNCSN_RULE_ID", DbType.Int32, evntfom.CNCSN_RULE_ID);
                dbsv.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, evntfom.SESSION_ID);
                dbsv.AddInParameter(cmd, "@IP_EVENT_DEFINE_BY", DbType.Int32, evntfom.EVENT_DEFINE_BY);
                dbsv.AddInParameter(cmd, "@IP_EVENT_AUTH_ID", DbType.Int32, evntfom.EVENT_AUTH_ID);
                dbsv.AddInParameter(cmd, "@IP_EVENT_CD", DbType.String, evntfom.EVENT_CD);
                dbsv.AddInParameter(cmd, "@IP_EVENT_NAME", DbType.String, evntfom.EVENT_NAME);
                dbsv.ExecuteNonQuery(cmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return true;
        }
        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            throw new NotImplementedException();
        }

        public CollectionBase DocumentPaymentModes_View_Edit(Eventform hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DOCUMENT_PAYMENT_MODE_EDIT");
                dBase.AddInParameter(dbcmd, "@IP_DOC_ID", DbType.Int32, hdv.DOC_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(DocumentPaymentModes_View_Edit_Collection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DocumentPaymentModes_View_Edit").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase DocumentPaymentModes_View_Edit_Collection(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    objev.DOCUMENT_PAYMODE_ID = returndata["DOCUMENT_PAYMODE_ID"] != DBNull.Value ? Convert.ToInt32(returndata["DOCUMENT_PAYMODE_ID"].ToString()) : 0;
                    // objev.DOC_ID = returndata["DOC_ID"] != DBNull.Value ? Convert.ToInt32(returndata["DOC_ID"].ToString()) : 0;
                    objev.DOC_ID = !DBNull.Value.Equals(returndata["DOC_ID"]) ? Convert.ToString(returndata["DOC_ID"]) : string.Empty;
                    objev.PAYMENT_MODE_ID = !DBNull.Value.Equals(returndata["PAYMENT_MODE_ID"]) ? Convert.ToString(returndata["PAYMENT_MODE_ID"]) : string.Empty;
                    objev.PAYMENT_MODE_NAME = !DBNull.Value.Equals(returndata["PAYMENT_MODE_NAME"]) ? Convert.ToString(returndata["PAYMENT_MODE_NAME"]) : string.Empty;

                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DocumentPaymentModes_View_Edit_Collection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase EditEvent(Eventform hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_EVENT");
                dBase.AddInParameter(dbcmd, "@IP_EVENT_ID", DbType.Int32, hdv.EVENT_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(EditEvent_Coll);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("EditEvent").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase EditEvent_Coll(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();

                    objev.EVENT_ID = returndata["EVENT_ID"] != DBNull.Value ? Convert.ToInt32(returndata["EVENT_ID"].ToString()) : 0;
                    objev.EVENT_CD = !DBNull.Value.Equals(returndata["EVENT_CD"]) ? Convert.ToString(returndata["EVENT_CD"]) : string.Empty;
                    objev.EVENT_NAME = !DBNull.Value.Equals(returndata["EVENT_NAME"]) ? Convert.ToString(returndata["EVENT_NAME"]) : string.Empty;
                    objev.EFT_FROM_DATE = !DBNull.Value.Equals(returndata["EFT_FROM_DATE"]) ? Convert.ToString(returndata["EFT_FROM_DATE"]) : string.Empty;
                    objev.EFT_TO_DATE = !DBNull.Value.Equals(returndata["EFT_TO_DATE"]) ? Convert.ToString(returndata["EFT_TO_DATE"]) : string.Empty;
                    objev.CNCSN_RULE_ID = returndata["CNCSN_RULE_ID"] != DBNull.Value ? Convert.ToInt32(returndata["CNCSN_RULE_ID"].ToString()) : 0;
                    objev.EVENT_DEFINE_BY = returndata["EVENT_DEFINE_BY"] != DBNull.Value ? Convert.ToInt32(returndata["EVENT_DEFINE_BY"].ToString()) : 0;
                    objev.EVENT_AUTH_ID = returndata["EVENT_AUTH_ID"] != DBNull.Value ? Convert.ToInt32(returndata["EVENT_AUTH_ID"].ToString()) : 0;
                    objev.CNCSN_RULE_NAME = !DBNull.Value.Equals(returndata["CNCSN_RULE_NAME"]) ? Convert.ToString(returndata["CNCSN_RULE_NAME"]) : string.Empty;
                    objev.AUTH_NAME = !DBNull.Value.Equals(returndata["AUTH_NAME"]) ? Convert.ToString(returndata["AUTH_NAME"]) : string.Empty;
                    objev.FIRST_NAME = !DBNull.Value.Equals(returndata["FIRST_NAME"]) ? Convert.ToString(returndata["FIRST_NAME"]) : string.Empty;
                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthhdr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
     
    
        public CollectionBase GET_DocumentList(GridPaging gpage, out int _totalrecords)
        {
            int recCount = 0;
            _totalrecords = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_CHECKLIST");
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, Convert.ToInt32(gpage.CURRENT_PAGE));
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, Convert.ToInt32(gpage.PAGE_SIZE));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, 0);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Getdocumentlist);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                if (dBase.GetParameterValue(dbCmd, "@OP_COUNT") != null)
                {
                    _totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT"));
                }
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GET_DocumentList").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
            finally
            {

            }
        }
        CollectionBase Getdocumentlist(IDataReader returndata)
        {
            try
            {
                Eventformcollection objcoll = new Eventformcollection();
                Eventform objev = null;
                while (returndata.Read())
                {
                    objev = new Eventform();
                    objev.CHECKLIST_ID = returndata["CHECKLIST_ID"] != DBNull.Value ? Convert.ToInt32(returndata["CHECKLIST_ID"].ToString()) : 0;
                    objev.CHECKLIST_CD = !DBNull.Value.Equals(returndata["CHECKLIST_CD"]) ? Convert.ToString(returndata["CHECKLIST_CD"]) : string.Empty;
                    objev.CHECKLIST_DESC = !DBNull.Value.Equals(returndata["CHECKLIST_DESC"]) ? Convert.ToString(returndata["CHECKLIST_DESC"]) : string.Empty;
                    objev.CHECKLIST_REV_NO = returndata["CHECKLIST_REV_NO"] != DBNull.Value ? Convert.ToInt32(returndata["CHECKLIST_REV_NO"].ToString()) : 0;
                    objev.RECORD_STATUS = !DBNull.Value.Equals(returndata["RECORD_STATUS"]) ? Convert.ToString(returndata["RECORD_STATUS"]) : string.Empty;
                    objcoll.Add(objev);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getdocumentlist").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }
        public CollectionBase Edit_Documents(Eventform hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CHECKLIST");
                dBase.AddInParameter(dbcmd, "@IP_CHECKLIST_ID", DbType.Int32, hdv.CHECKLIST_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Edit_Documents_collection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Edit_Documents").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Edit_Documents_collection(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    objev.CHECKLIST_ID = returndata["CHECKLIST_ID"] != DBNull.Value ? Convert.ToInt32(returndata["CHECKLIST_ID"].ToString()) : 0;
                    objev.CHECKLIST_CD = !DBNull.Value.Equals(returndata["CHECKLIST_CD"]) ? Convert.ToString(returndata["CHECKLIST_CD"]) : string.Empty;
                    objev.CHECKLIST_DESC = !DBNull.Value.Equals(returndata["CHECKLIST_DESC"]) ? Convert.ToString(returndata["CHECKLIST_DESC"]) : string.Empty;
                    objev.CHECKLIST_REV_NO = returndata["CHECKLIST_REV_NO"] != DBNull.Value ? Convert.ToInt32(returndata["CHECKLIST_REV_NO"].ToString()) : 0;

                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Edit_Documents_collection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
     

        public string Save_Consent_Template(Eventform evntfom, out string tempid)
        {
            tempid = string.Empty;

            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_FB_TEMPLATE");
                dbsv.AddInParameter(cmd, "@IP_TEMPLATE_TYPE_ID", DbType.Int32, evntfom.TEMPLATE_TYPE_ID);
                dbsv.AddInParameter(cmd, "@IP_SESSION_ID", DbType.String, evntfom.SESSION_ID);
                dbsv.AddInParameter(cmd, "@IP_TEMPLATE_ID", DbType.Int32, evntfom.TEMPLATE_ID);
                dbsv.AddInParameter(cmd, "@IP_TEMPLATE_CD", DbType.String, evntfom.TEMPLATE_CD);
                dbsv.AddInParameter(cmd, "@IP_TEMPLATE_NAME", DbType.String, evntfom.TEMPLATE_NAME);
                dbsv.AddInParameter(cmd, "@IP_TEMPLATE_DESC", DbType.String, evntfom.TEMPLATE_DESC);
                dbsv.AddInParameter(cmd, "@IP_FORM_META_TEXT", DbType.String, evntfom.FORM_META_TEXT);
                dbsv.AddOutParameter(cmd, "@OP_CNT", DbType.Int32, 50);
                dbsv.ExecuteNonQuery(cmd);
                tempid = (dbsv.GetParameterValue(cmd, "@OP_CNT").ToString());

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Consent_Template").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return tempid;

        }
        public bool Save_Instruction_Images(Eventform evntfom)
        {


            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;

                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_TEMP_INSTRUCTN");
                dbsv.AddInParameter(cmd, "@IP_TEMPLATE_ID", DbType.Int32, evntfom.TEMPLATE_ID);
                dbsv.AddInParameter(cmd, "@IP_LANGUAGE_ID", DbType.Int32, evntfom.LANGUAGE_ID);
                dbsv.AddInParameter(cmd, "@IP_ATTACHMENT_DESCRIPTION", DbType.String, evntfom.ATTACHMENT_DESCRIPTION);
                dbsv.AddInParameter(cmd, "@IP_IMAGE", DbType.Binary, evntfom.IMAGEDATA);
                dbsv.AddInParameter(cmd, "@IP_IMAGE_PATH", DbType.String, evntfom.IMAGE_PATH);
                dbsv.AddInParameter(cmd, "@IP_SESSION_ID", DbType.String, evntfom.SESSION_ID);
                dbsv.ExecuteNonQuery(cmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Instruction_Images").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return true;

        }
        public int GetForeignTariffStatus(Int16 fcat_id, Int16 tariff_id)
        {
            int count = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_FOREIGN_TARIFF_STATUS");
                dbsv.AddInParameter(cmd, "@IP_FOREIGN_CATEGORY_ID", DbType.Int32, fcat_id);
                dbsv.AddInParameter(cmd, "@IP_TARIFF_ID", DbType.Int32, tariff_id);
                count = Convert.ToInt32(dbsv.ExecuteScalar(cmd));
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetForeignTariffStatus").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return count;
        }
        public CollectionBase ForeignCategory_View_Edit_Collection(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    objev.FCAT_TARIFF_ID = returndata["FCAT_TARIFF_ID"] != DBNull.Value ? Convert.ToInt32(returndata["FCAT_TARIFF_ID"].ToString()) : 0;
                    objev.FCAT_TARIFF_REV_NO = returndata["FCAT_TARIFF_REV_NO"] != DBNull.Value ? Convert.ToInt32(returndata["FCAT_TARIFF_REV_NO"].ToString()) : 0;
                    objev.FOREIGN_CATEGORY_ID = returndata["FOREIGN_CATEGORY_ID"] != DBNull.Value ? Convert.ToInt32(returndata["FOREIGN_CATEGORY_ID"].ToString()) : 0;
                    objev.FOREIGN_CATEGORIES_NAME = !DBNull.Value.Equals(returndata["FOREIGN_CATEGORIES_NAME"]) ? Convert.ToString(returndata["FOREIGN_CATEGORIES_NAME"]) : string.Empty;
                    objev.TARIFF_ID = returndata["TARIFF_ID"] != DBNull.Value ? Convert.ToInt32(returndata["TARIFF_ID"].ToString()) : 0;

                    objev.TARIFF_NAME = !DBNull.Value.Equals(returndata["TARIFF_NAME"]) ? Convert.ToString(returndata["TARIFF_NAME"]) : string.Empty;
                    objev.EFFECT_FROM_DATE = !DBNull.Value.Equals(returndata["EFFECT_FROM_DATE"]) ? Convert.ToString(returndata["EFFECT_FROM_DATE"]) : string.Empty;
                    objev.EFFECT_TO_DATE = !DBNull.Value.Equals(returndata["EFFECT_TO_DATE"]) ? Convert.ToString(returndata["EFFECT_TO_DATE"]) : string.Empty;


                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ForeignCategory_View_Edit_Collection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_ForeignCategoryGrid_Collection(GridPaging gpage, out int _totalrecords)
        {
            int recCount = 0;
            _totalrecords = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_FOREIGN_CATEGORY_TARIFF");
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, Convert.ToInt32(gpage.CURRENT_PAGE));
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, Convert.ToInt32(gpage.PAGE_SIZE));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, gpage.EVENTFLAG);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_Foreign_Category);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_ForeignCategoryGrid_Collection").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
            finally
            {

            }
        }
        CollectionBase Get_Foreign_Category(IDataReader returndata)
        {
            try
            {
                Eventformcollection objcoll = new Eventformcollection();
                Eventform objev = null;
                while (returndata.Read())
                {
                    objev = new Eventform();
                    objev.FCAT_TARIFF_ID = returndata["FCAT_TARIFF_ID"] != DBNull.Value ? Convert.ToInt32(returndata["FCAT_TARIFF_ID"].ToString()) : 0;
                    objev.FCAT_TARIFF_REV_NO = returndata["FCAT_TARIFF_REV_NO"] != DBNull.Value ? Convert.ToInt32(returndata["FCAT_TARIFF_REV_NO"].ToString()) : 0;
                    objev.FOREIGN_CATEGORY_ID = returndata["FOREIGN_CATEGORY_ID"] != DBNull.Value ? Convert.ToInt32(returndata["FOREIGN_CATEGORY_ID"].ToString()) : 0;
                    objev.FOREIGN_CATEGORIES_NAME = !DBNull.Value.Equals(returndata["FOREIGN_CATEGORIES_NAME"]) ? Convert.ToString(returndata["FOREIGN_CATEGORIES_NAME"]) : string.Empty;
                    objev.TARIFF_ID = returndata["TARIFF_ID"] != DBNull.Value ? Convert.ToInt32(returndata["TARIFF_ID"].ToString()) : 0;
                    objev.TARIFF_NAME = !DBNull.Value.Equals(returndata["TARIFF_NAME"]) ? Convert.ToString(returndata["TARIFF_NAME"]) : string.Empty;
                    objev.EFFECT_FROM_DATE = !DBNull.Value.Equals(returndata["EFFECT_FROM_DATE"]) ? Convert.ToString(returndata["EFFECT_FROM_DATE"]) : string.Empty;
                    objev.EFFECT_TO_DATE = !DBNull.Value.Equals(returndata["EFFECT_TO_DATE"]) ? Convert.ToString(returndata["EFFECT_TO_DATE"]) : string.Empty;
                    objev.CREATED_BY = !DBNull.Value.Equals(returndata["CREATED_BY"]) ? Convert.ToString(returndata["CREATED_BY"]) : string.Empty;
                    objev.MODIFY_DT = !DBNull.Value.Equals(returndata["MODIFY_DT"]) ? Convert.ToString(returndata["MODIFY_DT"]) : string.Empty;
                    objev.CREATE_DT = !DBNull.Value.Equals(returndata["CREATE_DT"]) ? Convert.ToString(returndata["CREATE_DT"]) : string.Empty;
                    objev.MODIFIED_BY = !DBNull.Value.Equals(returndata["MODIFIED_BY"]) ? Convert.ToString(returndata["MODIFIED_BY"]) : string.Empty;
                    objev.NoOfRecords = !DBNull.Value.Equals(returndata["TOT_RECORD_CNT"]) ? Convert.ToInt32(returndata["TOT_RECORD_CNT"].ToString()) : 0;
                    objcoll.Add(objev);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Foreign_Category").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }
        public bool Save_Document_PaymentModes_Mapping(Eventform evntfom)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_DOCUMENT_PAYMENT_MODE");
                dbsv.AddInParameter(cmd, "@IP_DOCUMENT_PAYMODE_ID", DbType.Int32, evntfom.DOCUMENT_PAYMODE_ID);
                dbsv.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, evntfom.DOC_ID);
                dbsv.AddInParameter(cmd, "@IP_PAYMENT_MODE_ID", DbType.String, evntfom.PAYMENT_MODE_ID);
                dbsv.AddInParameter(cmd, "@IP_SESSION_ID", DbType.String, evntfom.SESSION_ID);


                dbsv.ExecuteNonQuery(cmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Document_PaymentModes_Mapping").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return true;
        }
        public CollectionBase Get_DocumentPaymentGrid_Collection(GridPaging gpage, out int _totalrecords)
        {
            int recCount = 0;
            _totalrecords = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_DOCUMENT_PAYMENT_MODE");
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, Convert.ToInt32(gpage.CURRENT_PAGE));
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, Convert.ToInt32(gpage.PAGE_SIZE));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, _totalrecords);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_DocumentPayment_Mapping);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                _totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT"));
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_DocumentPaymentGrid_Collection").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
            finally
            {

            }
        }
        CollectionBase Get_DocumentPayment_Mapping(IDataReader returndata)
        {
            try
            {
                Eventformcollection objcoll = new Eventformcollection();
                Eventform objev = null;
                while (returndata.Read())
                {
                    objev = new Eventform();
                    objev.DOCUMENT_PAYMODE_ID = returndata["DOCUMENT_PAYMODE_ID"] != DBNull.Value ? Convert.ToInt32(returndata["DOCUMENT_PAYMODE_ID"].ToString()) : 0;
                    objev.DOC_ID = !DBNull.Value.Equals(returndata["DOC_ID"]) ? Convert.ToString(returndata["DOC_ID"]) : string.Empty;
                    objev.PAYMENT_MODE_ID = !DBNull.Value.Equals(returndata["PAYMENT_MODE_ID"]) ? Convert.ToString(returndata["PAYMENT_MODE_ID"]) : string.Empty;
                    objev.PAYMENT_MODE_NAME = !DBNull.Value.Equals(returndata["PAYMENT_MODE_NAME"]) ? Convert.ToString(returndata["PAYMENT_MODE_NAME"]) : string.Empty;
                    objcoll.Add(objev);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_DocumentPayment_Mapping").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }
        public CollectionBase Get_All_ForeignCategories()
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FOREIGN_CATEGORIES");
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_All_ForeignCategories_Collection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_ForeignCategories").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase GET_ALL_FOREIGNCATEGORIES_TARIFF_MAPPING()
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FOREIGN_CATEGORIES_TARIFF_MAPPING");
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_All_ForeignCategories_Collection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_ForeignCategories").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_All_ForeignCategories_Collection(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    //objev.FOREIGN_CATEGORIES_ID = returndata["FOREIGN_CATEGORIES_ID"] != DBNull.Value ? Convert.ToInt32(returndata["FOREIGN_CATEGORIES_ID"].ToString()) : 0;
                    objev.FOREIGN_CATEGORIES_ID = !DBNull.Value.Equals(returndata["FOREIGN_CATEGORIES_ID"]) ? returndata["FOREIGN_CATEGORIES_ID"].ToString() : "";
                    objev.FOREIGN_CATEGORIES_NAME = !DBNull.Value.Equals(returndata["FOREIGN_CATEGORIES_NAME"]) ? Convert.ToString(returndata["FOREIGN_CATEGORIES_NAME"]) : string.Empty;

                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_ForeignCategories_Collection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Show_Srv_ScheduleDtls(string _bill_srv_id)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FO_BILL_SRV_SCH");
                dBase.AddInParameter(dbcmd, "@IP_BILL_SRV_ID", DbType.Int32, _bill_srv_id);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(ForeignCategory_View_Edit_Collectiona1);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Show_Srv_ScheduleDtls").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase ForeignCategory_View_Edit_Collectiona1(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    objev.BILL_SRV_SCH_ID = !DBNull.Value.Equals(returndata["BILL_SRV_SCH_ID"]) ? Convert.ToString(returndata["BILL_SRV_SCH_ID"]) : string.Empty;
                    objev.BILL_SRV_ID = !DBNull.Value.Equals(returndata["BILL_SRV_ID"]) ? Convert.ToString(returndata["BILL_SRV_ID"]) : string.Empty;
                    objev.SCH_DT = !DBNull.Value.Equals(returndata["SCH_DT"]) ? Convert.ToString(returndata["SCH_DT"]) : string.Empty;

                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ForeignCategory_View_Edit_Collection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase Get_Billinghead(Eventform cntuser)
        {


            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_BILLINGHEAD_PATIENT_CLASS");
                dBase.AddInParameter(dbCmd, "@IP_PATIENT_CLASS_ID", DbType.Int32, Convert.ToInt32(cntuser.PATIENT_CLASS_ID));
                // dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(cntuser.SESSION_ID));

                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(getall_billinghead_Coll);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);

                return cbase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Billinghead").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }

        }
        protected CollectionBase getall_billinghead_Coll(IDataReader returnData)
        {
            try
            {
                Eventformcollection CntColl = new Eventformcollection();
                while (returnData.Read())
                {
                    Eventform cntuser = new Eventform();

                    cntuser.BILLINGHEAD_ID = !DBNull.Value.Equals(returnData["BILLINGHEAD_ID"]) ? Convert.ToString(returnData["BILLINGHEAD_ID"]) : string.Empty;
                    cntuser.BILLINGHEAD_NAME = !DBNull.Value.Equals(returnData["BILLINGHEAD_NAME"]) ? Convert.ToString(returnData["BILLINGHEAD_NAME"]) : string.Empty;
                    cntuser.PATIENT_CLASS_ID = !DBNull.Value.Equals(returnData["PATIENT_CLASS_ID"]) ? Convert.ToString(returnData["PATIENT_CLASS_ID"]) : string.Empty;
                    cntuser.DISPLAY_ORDER = !DBNull.Value.Equals(returnData["DISPLAY_ORDER"]) ? Convert.ToString(returnData["DISPLAY_ORDER"]) : string.Empty;

                    CntColl.Add(cntuser);

                }
                return CntColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod(" getall_billinghead_Coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public bool Savebillinghead(Eventform rm, out int count)
        {
            bool _status = false;
            count = 0;

            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_BILLINGHEAD_PATIENT_CLASS_XML");
                dbSvc.AddInParameter(dbCmd, StoresConstatns.XML_PARAM, DbType.Xml, rm.XML);
                dbSvc.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, rm.SESSION_ID);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);

                _status = dbSvc.ExecuteNonQuery(dbCmd) > 0;

                if (count == 1)
                    return _status;
                else
                    return _status;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Savebillinghead").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return _status;
        }
      

        /*ER*/

      
      
        public DataSet Get_Ward_Groups()
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_WARD_GROUPS");

                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, 1);

                DataSet cbase = dBase.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Ward_Groups").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public DataSet Get_Ward_Groups1(string tariffid)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_WARD_GROUP_ID");


                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, 1);
                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, tariffid);

                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Ward_Groups").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
      
      
        public CollectionBase Get_All_PatientTransferwards_imr(Eventform eve)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_PAT_TRANSFR_WARDS_IMR");
                dBase.AddInParameter(dbcmd, "@IP_ADMN_ID", DbType.Int32, eve.ADMN_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_All_PatientTransferwards_collection_Imr);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_PatientTransferwards_imr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_All_PatientTransferwards_collection_Imr(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    objev.ID = !DBNull.Value.Equals(returndata["WARD_ID"]) ? returndata["WARD_ID"].ToString() : "";
                    objev.WARD_ID = !DBNull.Value.Equals(returndata["WARD_ID"]) ? Convert.ToInt32(returndata["WARD_ID"].ToString()) : 0;
                    objev.WARD_DESC = !DBNull.Value.Equals(returndata["WARD_DESC"]) ? Convert.ToString(returndata["WARD_DESC"]) : string.Empty;
                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_PatientTransferwards_collection_Imr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public DataSet GetPatientCategoryDtls(Int16 patcat_id)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FOREIGN_CATEGORY_TARIFF_DTLS");
                dBase.AddInParameter(dbcmd, "@IP_FCAT_ID", DbType.Int32, patcat_id);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dBase.AddInParameter(dbcmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                //GenerateCollectionReader sqldata = new GenerateCollectionReader(GetPatientCategoryDtls_Coll);
                //CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                DataSet cbase = dblayer.ExecuteDataSet(dbcmd);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPatientCategoryDtls").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase GetPatientCategoryDtls_Coll(IDataReader returndata)
        {
            try
            {
                Eventformcollection HcColl = new Eventformcollection();
                while (returndata.Read())
                {
                    Eventform objev = new Eventform();
                    objev.TARIFF_ID = returndata["TARIFF_ID"] != DBNull.Value ? Convert.ToInt32(returndata["TARIFF_ID"].ToString()) : 0;
                    objev.TARIFF_NAME = !DBNull.Value.Equals(returndata["TARIFF_NAME"]) ? Convert.ToString(returndata["TARIFF_NAME"]) : string.Empty;
                    HcColl.Add(objev);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPatientCategoryDtls_Coll").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

    }
}
