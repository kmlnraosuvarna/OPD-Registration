using System;
using System.Collections.Generic;
using System.Linq;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;

using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Caching;
using Microsoft.Practices.EnterpriseLibrary.Caching.Expirations;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.IO;
using System.Text;

namespace EzHms.DataAccessObject
{
    public class DBquickadmission
    {
        public bool InsertRegistrationXml(string xmlstring, out int OP_ADT_ADMN_ID, out String OP_UMR_NO)
        {
            OP_ADT_ADMN_ID = 0;
            OP_UMR_NO = " ";
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dBase = _dbLayer.DBaseFactory;
                string strxml = xmlstring.Replace('$', '"');
                MemoryStream stream = new MemoryStream(System.Text.Encoding.UTF32.GetBytes(strxml));
                System.Data.SqlTypes.SqlXml xml = new System.Data.SqlTypes.SqlXml(stream);
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "[MCI].[PR_INSUPD_QUICK_ADMISSION]");
                dBase.AddInParameter(dbCmd, "@IP_XML_DATA", DbType.Xml, strxml);
                //dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                dBase.AddOutParameter(dbCmd, "@OP_ADT_ADMN_ID", DbType.Int32, OP_ADT_ADMN_ID);
                dBase.AddOutParameter(dbCmd, "@OP_UMR_NO", DbType.String, 100);
                bool _status = _dbLayer.ExecuteNonQuery(dbCmd);
                OP_ADT_ADMN_ID = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_ADT_ADMN_ID"));
                OP_UMR_NO = (dBase.GetParameterValue(dbCmd, "@OP_UMR_NO")).ToString();
                return _status;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertRegXml").Name;
                ErrorLoger.InsertErrorLogger(ex, 1205, 1);
                return false;
            }
        }

        public CollectionBase Bindquiuckdetails(quickadmission gpage)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dblayer.SetCommandType(CommandType.StoredProcedure, "[MCI].[PR_GETALL_QUICK_ADMISSION]");
                dBase.AddInParameter(dbCmd, "@IP_TO_DT", DbType.String, gpage.TO_DT);
                dBase.AddInParameter(dbCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DT);
                //  dBase.AddInParameter(dbCmd, "@IP_CURRENT_PAGE", DbType.Int32, gpage.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, gpage.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_ADT_ADMN_QUICK_ID ", DbType.Int32, gpage.ADT_ADMN_QUICK_ID);
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, gpage.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, gpage.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.String, gpage.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, gpage.IPCOUNT);
                //if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                //{
                //    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                //    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                //}
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(dblayer.GenerateGridList);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbCmd, sqlData);
                //DataSet cbase = dblayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Bindquiuckdetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 80, 1);
            }
            return null;
        }

        public CollectionBase QuickviewDetails(quickadmission quickobj)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "[MCI].[PR_GET_QUICK_ADMISSION]");
                dBase.AddInParameter(dbCmd, "@IP_ADT_ADMN_QUICK_ID", DbType.Int32, quickobj.ADT_ADMN_QUICK_ID);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader saldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, saldata);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCityMasterDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase getaddressdetailes(string umr)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_UMR_NO_ADD_DTS");
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, umr);

                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("getaddressdetailes").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }
    }
}
