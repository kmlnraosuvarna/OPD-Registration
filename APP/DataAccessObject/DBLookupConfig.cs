using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Data;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using EzHms.ModelEntity;

namespace EzHms.DataAccessObject
{
    public class DBLookupConfig:DBExecuteDataReader
    {
        public bool SaveLookup(LookupconfigMaster obj)
        {
            int count = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbobj = _dblayer.DBaseFactory;
                DbCommand dbCmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_LOOKUP_CONFIG_BACK");
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_ID_PARM, DbType.String, obj.LOOKUP_ID);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_NAME_PARM, DbType.String, obj.LOOKUP_NAME);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_DESC_PARM, DbType.String, obj.LOOKUP_DESC);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_SERVICE_METHOD_PARM, DbType.String, obj.LOOKUP_SERVICE_METHOD);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_SERVICE_PATH_PARM, DbType.String, obj.LOOKUP_SERVICE_PATH);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_CONFIG_REV_NO_PARM, DbType.Int32, obj.LOOKUP_CONFIG_REV_NO);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_COLUMN_PARM, DbType.String, obj.LOOKUP_COLUMN);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_COLUMN_ALIAS_PARM, DbType.String, obj.LOOKUP_COLUMN_ALIAS);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_KEY_COLUMNS_PARM, DbType.String, obj.LOOKUP_KEY_COLUMNS);
                dbobj.AddInParameter(dbCmd, DALConstants.LOOKUP_TITLE_PARM, DbType.String, obj.LOOKUP_TITLE);
                dbobj.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, obj.SESSION_ID);
                count = dbobj.ExecuteNonQuery(dbCmd);
                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveLookup").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return false;
            }

        }

        public CollectionBase GetLookupDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records, int _lookup_id)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_LOOKUPINFOCOLUMNBASED");
                if (_lookup_id != 0)
                   dBase.AddInParameter(dbCmd, DALConstants.LOOKUP_ID_PARM, DbType.Int32, _lookup_id);
                if (_objpag.CURRENT_PAGE > 0)
                    dBase.AddInParameter(dbCmd, DALConstants.IP_PAGENUM_PRAM, DbType.Int32, _objpag.CURRENT_PAGE);
                if (_objpag.PAGE_SIZE > 0)
                    dBase.AddInParameter(dbCmd, DALConstants.IP_PAGESIZE_PRAM, DbType.Int32, _objpag.PAGE_SIZE);
              
                    dBase.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, _objpag.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, _objpag.PREFIX_TEXT);
                  
                    
               
                if (!string.IsNullOrEmpty(_objpag.ADVANCESEARCH))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, _objpag.ADVANCESEARCH);
                }
                dBase.AddInParameter(dbCmd, DALConstants.FROM_DT_PARAM, DbType.String, _objpag.FROM_DT);
                dBase.AddInParameter(dbCmd, DALConstants.TO_DT_PARAM, DbType.String, _objpag.TO_DT);
                dBase.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.String, _objpag.EVENTFLAG);

                /*dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);*/
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(LookupColl);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                /*if (!string.IsNullOrEmpty(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM).ToString()))
                    _total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));*/
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookupDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 80, 1);
            }
            return null;
        }

        protected CollectionBase LookupColl(IDataReader returnData)
        {
            try
            {
                LookupconfigCollection cuntcoll = new LookupconfigCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.LookupconfigMaster objcunt = new LookupconfigMaster();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.LOOKUP_ID_COL].ToString()))
                        objcunt.LOOKUP_ID = Convert.ToInt32(returnData[DALConstants.LOOKUP_ID_COL]);

                    objcunt.LOOKUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_NAME_COL]) : string.Empty;                               // returnData["LOOKUP_COLUMN"].ToString();
                    objcunt.LOOKUP_COLUMN_ALIAS = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_COLUMN_ALIAS_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_COLUMN_ALIAS_COL]) : string.Empty;       //returnData["LOOKUP_COLUMN_ALIAS"].ToString();
                    objcunt.LOOKUP_KEY_COLUMNS = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_KEY_COLUMNS_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_KEY_COLUMNS_COL]) : string.Empty;          //returnData["LOOKUP_KEY_COLUMNS"].ToString();
                    objcunt.LOOKUP_SERVICE_METHOD = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_SERVICE_METHOD_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_SERVICE_METHOD_COL]) : string.Empty;  //returnData["LOOKUP_SERVICE_METHOD"].ToString();
                    objcunt.LOOKUP_SERVICE_PATH = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_SERVICE_PATH_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_SERVICE_PATH_COL]) : string.Empty;       //returnData["LOOKUP_SERVICE_PATH"].ToString();
                    objcunt.LOOKUP_COLUMN = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_COLUMN_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_COLUMN_COL]) : string.Empty;                          //returnData["LOOKUP_NAME"].ToString();
                    objcunt.LOOKUP_TITLE = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_TITLE_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_TITLE_COL]) : string.Empty;                             //returnData["LOOKUP_TITLE"].ToString();
                    objcunt.LOOKUP_DESC = !DBNull.Value.Equals(returnData[DALConstants.LOOKUP_DESC_COL]) ? Convert.ToString(returnData[DALConstants.LOOKUP_DESC_COL]) : string.Empty;                               //returnData["LOOKUP_DESC"].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.LOOKUP_CONFIG_REV_NO_COL].ToString()))
                        objcunt.LOOKUP_CONFIG_REV_NO = Convert.ToInt32(returnData[DALConstants.LOOKUP_CONFIG_REV_NO_COL]);

                    objcunt.RECORD_STATUS = returnData[DALConstants.RECORD_STATUS_COL].ToString();
                    objcunt.NoOfRecords = !DBNull.Value.Equals(returnData["TOT_RECORD_CNT"]) ? Convert.ToInt32(returnData["TOT_RECORD_CNT"]) : 0;
                    
                    cuntcoll.Add(objcunt);
                }
                return cuntcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("LookupColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 80, 1);
                return null;
            }
        }

        public bool DeleteBall(string del)
        {
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database _dBase = _dbLayer.DBaseFactory;
                DbCommand _dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_DEL_LOOKUP_CONFIG_BACK");
                _dBase.AddInParameter(_dbCmd, "@IP_LOOKUP_ID", DbType.Int32, del);
                _dBase.ExecuteNonQuery(_dbCmd);
                return true;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DeleteBall").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return false;
            }
        }

        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            throw new NotImplementedException();
        }
    }
}