using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using EzHms.ModelEntity;
using System.Collections;
using System.IO;
using System.Data.SqlTypes;
using EzHms.DataAccessObject;
using System.Data.SqlClient;


namespace EzHms.DataAccessObject
{
    public class DBWebConfigSetting : DBExecuteDataReader
    {
        public bool Save(WebConfigSetting WebCnfg)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;

                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_WEBCONFIGSETTING");
                dbsv.AddInParameter(cmd, "@IP_WEB_ID", DbType.Int32, WebCnfg.IP_WEB_ID);
                dbsv.AddInParameter(cmd, "@IP_KEY", DbType.String, WebCnfg.IP_KEY);
                dbsv.AddInParameter(cmd, "@IP_VALUE", DbType.String, WebCnfg.IP_VALUE);
                dbsv.AddInParameter(cmd, "@IP_DESCRIPTION", DbType.String, WebCnfg.IP_DESCRIPTION);
                dbsv.AddInParameter(cmd, "@IP_ISACTIVE", DbType.String, WebCnfg.IP_ISACTIVE);
                dbsv.AddInParameter(cmd, "@IP_INUSE", DbType.String, WebCnfg.IP_INUSE);
                dbsv.AddInParameter(cmd, "@IP_WEB_REV_NO", DbType.Int32, WebCnfg.IP_WEB_REV_NO);
                dbsv.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, WebCnfg.IP_SESSION_ID);
                // dbsv.AddInParameter(cmd, "@IP_FUND_ALLOC_NO", DbType.Int32, Fund.IP_FUND_ALLOC_NO);

                //dbsv.AddInParameter(cmd, "@IP_VALID_TO_DT", DbType.Int32, Fund.IP_VALID_TO_DT);

                //cmd.ExecuteReader();
                //cmd.ExecuteReader();
                dbsv.ExecuteNonQuery(cmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return true;
        }

        public CollectionBase Get_WebConfigSetting_List(GridPaging gpage, out int _totalrecords)
        {
            int recCount = 0;
            _totalrecords = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PHR_PR_GET_WEBCONFIGVALUES");
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, Convert.ToInt32(gpage.CURRENT_PAGE));
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, Convert.ToInt32(gpage.PAGE_SIZE));
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, gpage.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_TO_DATE", DbType.String, gpage.TO_DATE);
                dBase.AddInParameter(dbCmd, "@IP_FROM_DATE", DbType.String, gpage.FROM_DATE);
                // dBase.AddInParameter(dbCmd, DALConstants.IP_FLAG_PARM, DbType.String, gpage.FLAG);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, gpage.ADVANCESEARCH);
                dBase.AddOutParameter(dbCmd, DALConstants.OP_COUNT_PARM, DbType.Int32, _totalrecords);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetWebConfigSettings);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                _totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OP_COUNT_PARM));
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_WebConfigSetting_List").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
            finally
            {

            }
        }
        CollectionBase GetWebConfigSettings(IDataReader returndata)
        {
            try
            {
                WebConfigSettingCollection objcoll = new WebConfigSettingCollection();
                WebConfigSetting objweb = null;
                while (returndata.Read())
                {
                    objweb = new WebConfigSetting();
                    objweb.IP_WEB_ID = Convert.ToInt32(returndata["WEB_ID"]);
                    objweb.IP_KEY= !DBNull.Value.Equals(returndata["KEY"]) ? Convert.ToString(returndata["KEY"].ToString()) : string.Empty;
                    objweb.IP_VALUE = !DBNull.Value.Equals(returndata["VALUE"]) ? Convert.ToString(returndata["VALUE"].ToString()) : string.Empty;
                    objweb.IP_DESCRIPTION = !DBNull.Value.Equals(returndata["DESCRIPTION"]) ? Convert.ToString(returndata["DESCRIPTION"].ToString()) : string.Empty;
                    //objweb.IP_ISACTIVE = !DBNull.Value.Equals(returndata["ISACTIVE"]) ? Convert.ToString(returndata["ISACTIVE"]) : string.Empty;
                    objweb.IP_INUSE = !DBNull.Value.Equals(returndata["INUSE"]) ? Convert.ToString(returndata["INUSE"]) : string.Empty;
                    objweb.CREATED_BY = !DBNull.Value.Equals(returndata["CREATED_BY"]) ? Convert.ToString(returndata["CREATED_BY"].ToString()) : string.Empty;
                    objweb.MODIFIED_BY = !DBNull.Value.Equals(returndata["MODIFIED_BY"]) ? Convert.ToString(returndata["MODIFIED_BY"].ToString()) : string.Empty;
                    objweb.MODIFY_DT = !DBNull.Value.Equals(returndata["MODIFY_DT"]) ? Convert.ToString(returndata["MODIFY_DT"].ToString()) : string.Empty;
                    objweb.CREATE_DT = !DBNull.Value.Equals(returndata["CREATE_DT"]) ? Convert.ToString(returndata["CREATE_DT"].ToString()) : string.Empty;
                    objweb.MODIFY_BY = !DBNull.Value.Equals(returndata["MODIFY_BY"]) ? Convert.ToString(returndata["MODIFY_BY"].ToString()) : string.Empty;
                    objweb.CREATE_BY = !DBNull.Value.Equals(returndata["CREATE_BY"]) ? Convert.ToString(returndata["CREATE_BY"].ToString()) : string.Empty;                 

                    objcoll.Add(objweb);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetWebConfigSettings").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }
        public CollectionBase Edit_View_WenconfigSettingsDetails(WebConfigSetting hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PHR_PR_GET_WEBCONFIGVALUES_BY_ID");
                dBase.AddInParameter(dbcmd, "@IP_WEB_ID", DbType.Int32, hdv.IP_WEB_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Edit_View_WenconfigSettingsDetails_Coll);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Edit_View_WenconfibSettingsDetails").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Edit_View_WenconfigSettingsDetails_Coll(IDataReader returndata)
        {
            try
            {
                WebConfigSettingCollection HcColl = new WebConfigSettingCollection();
                while (returndata.Read())
                {
                    WebConfigSetting objwebcnfg = new WebConfigSetting();
                    //objvital.ADMISSION_NO = !DBNull.Value.Equals(returndata[DALConstants.ADMISSION_NO_COL]) ? Convert.ToString(returndata[DALConstants.ADMISSION_NO_COL]) : string.Empty;
                    objwebcnfg.IP_WEB_ID = !DBNull.Value.Equals(returndata["WEB_ID"]) ? Convert.ToInt32(returndata["WEB_ID"]) : 0;
                    objwebcnfg.IP_KEY = !DBNull.Value.Equals(returndata["KEY"]) ? Convert.ToString(returndata["KEY"]) : string.Empty;
                    objwebcnfg.IP_VALUE = !DBNull.Value.Equals(returndata["VALUE"]) ? Convert.ToString(returndata["VALUE"]) : string.Empty;
                    objwebcnfg.IP_DESCRIPTION = !DBNull.Value.Equals(returndata["DESCRIPTION"]) ? Convert.ToString(returndata["DESCRIPTION"]) : string.Empty;
                    objwebcnfg.IP_INUSE = !DBNull.Value.Equals(returndata["INUSE"]) ? Convert.ToString(returndata["INUSE"]) : string.Empty;
                    objwebcnfg.IP_ISACTIVE = returndata["ISACTIVE"] != DBNull.Value ? Convert.ToString(returndata["ISACTIVE"].ToString()) : string.Empty;
                    HcColl.Add(objwebcnfg);
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
        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            throw new NotImplementedException();
        }
    }

}
