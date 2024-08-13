using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Data;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using EzHms.ModelEntity;
using Constants = EzHms.ModelEntity.DALConstants;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using AddressCollection = EzHms.ModelEntity.AddressCollection;
namespace EzHms.DataAccessObject
{
    public class DBLookUpSearch : DBExecuteDataReader
    {
        private Database dbSvc = null;
        private DbCommand cmd = null;
        private DataAccessLayer _dblayer = null;
        private CollectionBase _cBase = null;
        public List<object> Get_City_State_Country_SearchDS(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_CSC_DETAILS);
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                    if (_lookUpSearch.PreConditon != null && _lookUpSearch.PreConditon.Count > 0)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_NATIONALITY_ID", DbType.String, _lookUpSearch.PreConditon[0]);
                    }
                    if (_lookUpSearch.PreConditon != null && _lookUpSearch.PreConditon.Count > 1)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_STATE_ID", DbType.String, _lookUpSearch.PreConditon[1]);
                    }
                    if (!string.IsNullOrEmpty(_lookUpSearch.REPORTFILTERCRETERIA))
                    {
                        dbSvc.AddInParameter(cmd, Constants.REPORT_FLAG, DbType.String, _lookUpSearch.REPORTFILTERCRETERIA);
                    }

                    dbSvc.AddInParameter(cmd, "IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);

                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUpSearch.EVENTFLAG);
                    dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                    //GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                    //_cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    //return _cBase;
                    DataSet ds = dbSvc.ExecuteDataSet(cmd);
                    List<object> list = new List<object>();
                    if (ds != null)
                    {
                        if (ds.Tables.Count > 0)
                        {
                            DataTable dt = ds.Tables[0];
                            ArrayList arraylist = new ArrayList();

                            foreach (DataRow row in dt.Rows)
                            {
                                var dict = new Dictionary<string, object>();
                                foreach (DataColumn col in dt.Columns)
                                {
                                    dict[col.ColumnName] = row[col];
                                }
                                arraylist.Add(dict);
                                _total_records = Convert.ToInt32(row["TOT_RECORD_CNT"].ToString());
                            }
                            list.Add(arraylist);
                        }

                        list.Add(_total_records);
                        return list;
                    }
                    else
                        return null;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_City_State_Country_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_City_State_Country_Search(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_CSC_DETAILS);
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                    if (_lookUpSearch.PreConditon != null && _lookUpSearch.PreConditon.Count > 0)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_NATIONALITY_ID", DbType.String, _lookUpSearch.PreConditon[0]);
                    }
                    if (_lookUpSearch.PreConditon != null && _lookUpSearch.PreConditon.Count > 1)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_STATE_ID", DbType.String, _lookUpSearch.PreConditon[1]);
                    }
                    if (!string.IsNullOrEmpty(_lookUpSearch.REPORTFILTERCRETERIA))
                    {
                        dbSvc.AddInParameter(cmd,Constants.REPORT_FLAG,DbType.String,_lookUpSearch.REPORTFILTERCRETERIA);
                    }

                    dbSvc.AddInParameter(cmd, "IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);

                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUpSearch.EVENTFLAG);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                    _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_City_State_Country_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            try
            {
                AddressCollection _addCollection = new AddressCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.Address _addUtility = new EzHms.ModelEntity.Address();
                    _addUtility.CITY_NAME = returnData[DALConstants.CITY_NAME_COL].ToString();
                    _addUtility.COUNTRY_NAME = returnData[DALConstants.COUNTRY_NAME_COL].ToString();
                    _addUtility.STATE_NAME = returnData[DALConstants.STATE_NAME_COL].ToString();
                    _addUtility.CITY_ID = returnData[DALConstants.CITY_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.CITY_ID_COL]) : 0;
                    _addUtility.COUNTRY_ID = returnData[DALConstants.COUNTRY_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.COUNTRY_ID_COL]) : 0;
                    _addUtility.STATE_ID = returnData[DALConstants.STATE_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.STATE_ID_COL]) : 0;
                    _addUtility.AREA_ID = returnData[DALConstants.AREA_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.AREA_ID_COL]) : 0;
                    _addUtility.AREA_NAME = returnData[DALConstants.AREA_NAME_COL].ToString();
                    _addUtility.PIN_CODE = returnData[DALConstants.PIN_CODE_COL] != DBNull.Value ? Convert.ToString(returnData[DALConstants.PIN_CODE_COL]) : string.Empty;
                    _addUtility.DISTRICT_ID = returnData["DISTRICT_ID"] != DBNull.Value ? Convert.ToString(returnData["DISTRICT_ID"]) : string.Empty;
                    _addUtility.STD_CODE = returnData["STD_CODE"] != DBNull.Value ? Convert.ToString(returnData["STD_CODE"]) : string.Empty;
                    _addUtility.DISTRICT_NAME = returnData["DISTRICT_NAME"].ToString();
                    _addUtility.NoOfRecords = Convert.ToInt32(returnData["TOT_RECORD_CNT"]);
                    _addCollection.Add(_addUtility);
                }
                return _addCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_City_State_Country_Search_Report(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "RPR_GET_CSC_DETAILS_REPORT");
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE); 
                    //if (string.IsNullOrEmpty(_lookUpSearch.COLUMN_NAME))
                    //{
                    dbSvc.AddInParameter(cmd, "IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "IP_PREFIX_TEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);
                    //}
                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUpSearch.EVENTFLAG);
                    //dbSvc.AddOutParameter(cmd, Constants.OUTPUT_PARM, DbType.Int32, _total_records);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection_Report);
                    _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    //_total_records = dbSvc.GetParameterValue(cmd, "@IP_COUNT") != DBNull.Value ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, "@IP_COUNT")) : 0;
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_City_State_Country_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected  CollectionBase GenerateCollection_Report(IDataReader returnData)
        {
            try
            {
                AddressCollection _addCollection = new AddressCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.Address _addUtility = new EzHms.ModelEntity.Address();
                    _addUtility.CITY_NAME = returnData[DALConstants.CITY_NAME_COL].ToString();
                    _addUtility.COUNTRY_NAME = returnData[DALConstants.COUNTRY_NAME_COL].ToString();
                    _addUtility.STATE_NAME = returnData[DALConstants.STATE_NAME_COL].ToString();
                    _addUtility.CITY_ID = returnData[DALConstants.CITY_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.CITY_ID_COL]) : 0;
                    _addUtility.AREA_NAME = returnData[DALConstants.AREA_NAME_COL].ToString();
                    _addUtility.DISTRICT_NAME = returnData["DISTRICT_NAME"].ToString();
                    _addUtility.RECORD_STATUS=!DBNull.Value.Equals(returnData["RECORD_STATUS"])?returnData["RECORD_STATUS"].ToString():string.Empty;
                    _addUtility.NoOfRecords = Convert.ToInt32(returnData["TOT_RECORD_CNT"]);
                    _addCollection.Add(_addUtility);
                }
                return _addCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public LOOKUP_CONFIG GetLookUP_Search_Config(string _ctrlName)
        {
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_LOOKUP_CONFIG_NEW_APPROACH");
                    dbSvc.AddInParameter(cmd, Constants.CONTROL_NAME_PARM, DbType.String, _ctrlName);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(Generate_LookUP_Search);
                    LookUP_Config_Collection _cBase = (LookUP_Config_Collection)_dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase[0];
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUP_Search_Config").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        CollectionBase Generate_LookUP_Search(IDataReader reader)
        {
            try
            {
                LookUP_Config_Collection _lCollection = new LookUP_Config_Collection();
                while (reader.Read())
                {
                    LOOKUP_CONFIG _lookUP = new LOOKUP_CONFIG();
                    _lookUP.LOOKUP_COLUMN = reader["LOOKUP_COLUMN"].ToString();
                    _lookUP.LOOKUP_COLUMN_ALIAS = reader["LOOKUP_COLUMN_ALIAS"].ToString();
                    _lookUP.LOOKUP_KEY_COLUMNS = reader["LOOKUP_KEY_COLUMNS"].ToString();
                    _lookUP.LOOKUP_SERVICE_METHOD = reader["LOOKUP_SERVICE_METHOD"].ToString();
                    _lookUP.LOOKUP_SERVICE_PATH = reader["LOOKUP_SERVICE_PATH"].ToString();
                    _lookUP.LOOKUP_NAME = reader["LOOKUP_TITLE"].ToString();
                    _lCollection.Add(_lookUP);
                }
                return _lCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Generate_LookUP_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetCountryDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_COUNTRY_DETAILS");
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                    dbSvc.AddInParameter(cmd, "IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);
                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUpSearch.EVENTFLAG);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCountryDetailsColl);
                    _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCountryDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected CollectionBase GetCountryDetailsColl(IDataReader returnData)
        {
            try
            {
                AddressCollection _addCollection = new AddressCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.Address _addUtility = new EzHms.ModelEntity.Address();
                    _addUtility.COUNTRY_ID = returnData["COUNTRY_ID"] != DBNull.Value ? Convert.ToInt32(returnData["COUNTRY_ID"]) : 0;
                    _addUtility.COUNTRY_NAME = returnData["COUNTRY_NAME"] != DBNull.Value ? Convert.ToString(returnData["COUNTRY_NAME"]) : string.Empty;
                    _addUtility.COUNTRY_CD = returnData["COUNTRY_CD"] != DBNull.Value ? Convert.ToString(returnData["COUNTRY_CD"]) : string.Empty;
                    _addUtility.COUNTRY_DESC = returnData["COUNTRY_DESC"] != DBNull.Value ? Convert.ToString(returnData["COUNTRY_DESC"]) : string.Empty;
                    _addUtility.NoOfRecords = returnData["TOT_RECORD_CNT"] != DBNull.Value ? Convert.ToInt32(returnData["TOT_RECORD_CNT"]) : 0;

                    _addUtility.ISD_CODE = returnData["ISD_CODE"] != DBNull.Value ? Convert.ToString(returnData["ISD_CODE"]) : string.Empty;
                    _addCollection.Add(_addUtility);
                }
                return _addCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCountryDetailsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetCityDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_CITY_NEW_DETAILS");
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);
                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUpSearch.EVENTFLAG);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCityDetailsColl);
                    _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCityDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected CollectionBase GetCityDetailsColl(IDataReader returnData)
        {
            try
            {
                AddressCollection _addCollection = new AddressCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.Address _addUtility = new EzHms.ModelEntity.Address();
                    _addUtility.CITY_ID = returnData["CITY_ID"] != DBNull.Value ? Convert.ToInt32(returnData["CITY_ID"]) : 0;
                    _addUtility.CITY_NAME = returnData["CITY_NAME"] != DBNull.Value ? Convert.ToString(returnData["CITY_NAME"]) : string.Empty;
                    _addUtility.CITY_CD = returnData["CITY_CD"] != DBNull.Value ? Convert.ToString(returnData["CITY_CD"]) : string.Empty;
                    _addUtility.CITY_DESC = returnData["CITY_DESC"] != DBNull.Value ? Convert.ToString(returnData["CITY_DESC"]) : string.Empty;
                    _addUtility.STATE_NAME = returnData["STATE_NAME"] != DBNull.Value ? Convert.ToString(returnData["STATE_NAME"]) : string.Empty;
                    _addUtility.COUNTRY_NAME = returnData["COUNTRY_NAME"] != DBNull.Value ? Convert.ToString(returnData["COUNTRY_NAME"]) : string.Empty;
                    _addUtility.NoOfRecords = returnData["TOT_RECORD_CNT"] != DBNull.Value ? Convert.ToInt32(returnData["TOT_RECORD_CNT"]) : 0;
                    _addUtility.STD_CODE = returnData["STD_CODE"] != DBNull.Value ? Convert.ToString(returnData["STD_CODE"]) : string.Empty;
                    _addUtility.ISD_CODE = returnData["ISD_CODE"] != DBNull.Value ? Convert.ToString(returnData["ISD_CODE"]) : string.Empty;
                    _addUtility.DISTRICT_NAME = returnData["DISTRICT_NAME"] != DBNull.Value ? Convert.ToString(returnData["DISTRICT_NAME"]) : string.Empty;
                    _addCollection.Add(_addUtility);
                }
                return _addCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCountryDetailsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
       
        public CollectionBase GetStateDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_STATE_DETAILS");
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                    dbSvc.AddInParameter(cmd, "IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);
                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    if (_lookUpSearch.PreConditon != null && _lookUpSearch.PreConditon.Count > 0)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_COUNTRY_ID", DbType.String, _lookUpSearch.PreConditon[0]);
                    }
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32,1);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetStateDetailsColl);
                    _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetStateDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected CollectionBase GetStateDetailsColl(IDataReader returnData)
        {
            try
            {
                AddressCollection _addCollection = new AddressCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.Address _addUtility = new EzHms.ModelEntity.Address();
                    _addUtility.STATE_ID = returnData["STATE_ID"] != DBNull.Value ? Convert.ToInt32(returnData["STATE_ID"]) : 0;
                    _addUtility.STATE_NAME = returnData["STATE_NAME"] != DBNull.Value ? Convert.ToString(returnData["STATE_NAME"]) : string.Empty;
                    _addUtility.STATE_CD = returnData["STATE_CD"] != DBNull.Value ? Convert.ToString(returnData["STATE_CD"]) : string.Empty;
                    _addUtility.STATE_DESC = returnData["STATE_DESC"] != DBNull.Value ? Convert.ToString(returnData["STATE_DESC"]) : string.Empty;
                    _addUtility.COUNTRY_ID = returnData["COUNTRY_ID"] != DBNull.Value ? Convert.ToInt32(returnData["COUNTRY_ID"]) : 0;
                    _addUtility.COUNTRY_NAME = returnData["COUNTRY_NAME"] != DBNull.Value ? Convert.ToString(returnData["COUNTRY_NAME"]) : string.Empty;
                    _addUtility.NoOfRecords = returnData["TOT_RECORD_CNT"] != DBNull.Value ? Convert.ToInt32(returnData["TOT_RECORD_CNT"]) : 0;
                    _addCollection.Add(_addUtility);
                }
                return _addCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetStateDetailsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        public CollectionBase GetDistrictDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_DISTRICT_DETAILS");
                    dbSvc.AddInParameter(cmd, Constants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                    dbSvc.AddInParameter(cmd, Constants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                    dbSvc.AddInParameter(cmd, "IP_COLUMN_NAME", DbType.String, _lookUpSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);
                    if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                        dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                    if (_lookUpSearch.PreConditon != null && _lookUpSearch.PreConditon.Count > 0)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_STATE_ID", DbType.String, _lookUpSearch.PreConditon[0]);
                    }
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUpSearch.EVENTFLAG);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetDistrictDetailsColl);
                    _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDistrictDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected CollectionBase GetDistrictDetailsColl(IDataReader returnData)
        {
            try
            {
                AddressCollection _addCollection = new AddressCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.Address _addUtility = new EzHms.ModelEntity.Address();
                    _addUtility.DISTRICT_ID = returnData["DISTRICT_ID"] != DBNull.Value ? Convert.ToString(returnData["DISTRICT_ID"]) : string.Empty;
                    _addUtility.DISTRICT_NAME = returnData["DISTRICT_NAME"] != DBNull.Value ? Convert.ToString(returnData["DISTRICT_NAME"]) : string.Empty;
                    _addUtility.DISTRICT_CD = returnData["DISTRICT_CD"] != DBNull.Value ? Convert.ToString(returnData["DISTRICT_CD"]) : string.Empty;
                    _addUtility.DISTRICT_DESC = returnData["DISTRICT_DESC"] != DBNull.Value ? Convert.ToString(returnData["DISTRICT_DESC"]) : string.Empty;
                    _addUtility.STATE_NAME = returnData["STATE_NAME"] != DBNull.Value ? Convert.ToString(returnData["STATE_NAME"]) : string.Empty;
                    _addUtility.COUNTRY_NAME = returnData["COUNTRY_NAME"] != DBNull.Value ? Convert.ToString(returnData["COUNTRY_NAME"]) : string.Empty;
                    _addUtility.NoOfRecords = returnData["TOT_RECORD_CNT"] != DBNull.Value ? Convert.ToInt32(returnData["TOT_RECORD_CNT"]) : 0;
                    _addCollection.Add(_addUtility);
                }
                return _addCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDistrictDetailsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        public DataSet GetAllLocPriceConfiguredDoctors(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    Database dBase = _dblayer.DBaseFactory;
                    DbCommand dbCmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_DOCTORS_WITHLOC");
                    dBase.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                    if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                    {
                        string deptid = string.Empty;
                        if (_lookUPSearch.PreConditon.Count > 0 && !string.IsNullOrEmpty(_lookUPSearch.PreConditon[0].ToString()))
                        {
                            deptid = "DEPARTMENT_ID=" + _lookUPSearch.PreConditon[0].ToString();
                            deptid = _lookUPSearch.PreConditon[0].ToString();
                            if (deptid.StartsWith("D"))
                                dBase.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, Convert.ToInt32(deptid.Substring(6)));
                            else
                                dBase.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, deptid);
                        }
                    }
                    if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    {
                        dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                    }
                    if (!string.IsNullOrEmpty(_lookUPSearch.SORTORDER))
                    {
                        dBase.AddInParameter(dbCmd, "@IP_ORDER_BY", DbType.String, _lookUPSearch.SORTORDER);
                    }
                    dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                    dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                    dBase.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUPSearch.EVENTFLAG);
                    dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                    DataSet ds = dBase.ExecuteDataSet(dbCmd);
                    return ds;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_City_State_Country_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
    }
}