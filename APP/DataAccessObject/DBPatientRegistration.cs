//<Author>
//
//</Author> 
namespace EzHms.DataAccessObject
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using EzHms.ModelEntity;
    using System.Data;

    using System.Data.Common;

    using Microsoft.Practices.EnterpriseLibrary.Caching;
    using Microsoft.Practices.EnterpriseLibrary.Caching.Expirations;
    using Microsoft.Practices.EnterpriseLibrary.Data;
    using System.IO;
    using PriceModal = EzHms.ModelEntity.ServicePrice;
    /// <summary>
    /// Patient Registration 
    /// </summary>
    /// <remarks></remarks>
    public class DBPatientRegistration : DBExecuteDataReader
    {

        private Database dbSvc = null;
        private DbCommand cmd = null;
        private DataAccessLayer _dblayer = null;
        private PatientRegistrationCollection _collection = null;
        private PatientRegistration _patRegistration = null;
        private ICacheManager _pOptionCache = null;
        public DBPatientRegistration()
        {

        }

        public CollectionBase GetLookUPSearchData1(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_COMPANYINFO_PAGING");
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (_lookUPSearch.PreConditon != null)
                {
                    if (_lookUPSearch.PreConditon.Count == 3)
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.COMPANY_TYPE_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                        dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, _lookUPSearch.PreConditon[1]);
                        dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.String, _lookUPSearch.PreConditon[2]);
                    }
                    else if (_lookUPSearch.PreConditon.Count == 2)
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.COMPANY_TYPE_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                        dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, _lookUPSearch.PreConditon[1]);
                    }
                    else
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.COMPANY_TYPE_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                    }
                }

                /*dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);*/
                dBase.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUPSearch.EVENTFLAG);
                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch2);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                /*_tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));*/
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public AddressCollection GetAutoComp_Area(string prefixText, int count, string contextKey, List<object> precondition)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbObj = dbLayer.DBaseFactory;
                // DbCommand dbCmd = dbObj.GetStoredProcCommand(StoreProceduresNames.UPR_AREA_AUTO_COMP);
                DbCommand dbCmd = null;
                //if (contextKey != null && contextKey != string.Empty)
                //    dbCmd = dbObj.GetStoredProcCommand("PR_GET_AREA_AUTO_COMP_CONTEXT");
                //else
                dbCmd = dbObj.GetStoredProcCommand(StoreProceduresNames.UPR_AREA_AUTO_COMP);
                dbObj.AddInParameter(dbCmd, DALConstants.PREFIX_TXT_PARM, DbType.String, prefixText);
                dbObj.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                if (precondition != null && precondition.Count > 1)
                {
                    dbObj.AddInParameter(dbCmd, "@IP_STATE_ID", DbType.String, precondition[1].ToString());
                }
                List<ListElements> returnData = new List<ListElements>();
                IDataReader dbDR = dbObj.ExecuteReader(dbCmd);
                return AddressCollection(dbDR);
            }
            catch (Exception ex)
            {
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        private AddressCollection AddressCollection(IDataReader dbDR)
        {
            AddressCollection returnData = new AddressCollection();
            while (dbDR.Read())
            {
                EzHms.ModelEntity.Address _element = new EzHms.ModelEntity.Address();
                _element.Area = !DBNull.Value.Equals(dbDR[DALConstants.AREA_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.AREA_NAME_COL]) : string.Empty;//dbDR[0].ToString();
                _element.AREA_ID = !DBNull.Value.Equals(dbDR[DALConstants.AREA_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.AREA_ID_COL]) : 0;//dbDR[0].ToString();//Convert.ToInt32(dbDR[7].ToString());
                _element.AREA_NAME = !DBNull.Value.Equals(dbDR[DALConstants.AREA_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.AREA_NAME_COL]) : string.Empty;//dbDR[0].ToString();
                _element.CITY_ID = !DBNull.Value.Equals(dbDR[DALConstants.CITY_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.CITY_ID_COL]) : 0; //Convert.ToInt32(dbDR[0].ToString());
                _element.CITY_NAME = !DBNull.Value.Equals(dbDR[DALConstants.CITY_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.CITY_NAME_COL]) : string.Empty; //dbDR[2].ToString();
                _element.COUNTRY_ID = !DBNull.Value.Equals(dbDR[DALConstants.COUNTRY_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.COUNTRY_ID_COL]) : 0; //Convert.ToInt32(dbDR[3].ToString());
                _element.COUNTRY_NAME = !DBNull.Value.Equals(dbDR[DALConstants.COUNTRY_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.COUNTRY_NAME_COL]) : string.Empty;// dbDR[4].ToString();
                _element.STATE_ID = !DBNull.Value.Equals(dbDR[DALConstants.STATE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.STATE_ID_COL]) : 0; //Convert.ToInt32(dbDR[5].ToString());
                _element.STATE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.STATE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.STATE_NAME_COL]) : string.Empty; //dbDR[6].ToString();
                _element.PIN_CODE = !DBNull.Value.Equals(dbDR[DALConstants.PIN_CODE_COL]) ? Convert.ToString(dbDR[DALConstants.PIN_CODE_COL]) : string.Empty; //dbDR[9].ToString();
                _element.PIN_CODE_NAME = !DBNull.Value.Equals(dbDR["PIN_CODE_NAME"]) ? Convert.ToString(dbDR["PIN_CODE_NAME"]) : string.Empty;
                _element.Value = !DBNull.Value.Equals(dbDR[DALConstants.AREA_ID_COL]) ? Convert.ToString(dbDR[DALConstants.AREA_ID_COL]) : "0";
                _element.DISTRICT_ID = !DBNull.Value.Equals(dbDR["DISTRICT_ID"]) ? Convert.ToString(dbDR["DISTRICT_ID"]) : string.Empty;
                _element.DISTRICT_NAME = !DBNull.Value.Equals(dbDR["DISTRICT_NAME"]) ? Convert.ToString(dbDR["DISTRICT_NAME"]) : string.Empty;
                _element.STD_CODE = !DBNull.Value.Equals(dbDR["STD_CODE"]) ? Convert.ToString(dbDR["STD_CODE"]) : string.Empty;
                _element.ISD_CODE = !DBNull.Value.Equals(dbDR["ISD_CODE"]) ? Convert.ToString(dbDR["ISD_CODE"]) : string.Empty;
                _element.AREA1 = !DBNull.Value.Equals(dbDR["AREA1"]) ? Convert.ToString(dbDR["AREA1"]) : string.Empty;
                returnData.Add(_element);
            }
            return returnData;
        }
        public CollectionBase GetLookUPSearch2(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection _bCollection = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration _bModel = new PatientRegistration();
                    _bModel.COMPANY_ID = reader[DALConstants.COMPANY_ID_COL].ToString();
                    _bModel.COMPANY_NAME = reader[DALConstants.COMPANY_NAME_COL].ToString();
                    _bModel.COMANY_CD = reader[DALConstants.COMANY_CD_COL].ToString();
                    _bModel.COMPANY_DESC = reader[DALConstants.COMPANY_DESC_COL].ToString();
                    _bModel.ID = !DBNull.Value.Equals(reader[DALConstants.COMPANY_ID_COL]) ? Convert.ToInt32(reader[DALConstants.COMPANY_ID_COL]) : 0;
                    _bModel.IS_LETTER_REQUIRED = reader[DALConstants.IS_LETTER_REQUIRED_COL].ToString();
                    _bModel.OP_CONS_PAYMENT = !DBNull.Value.Equals(reader["OP_CONS_PAYMENT"]) ? Convert.ToString(reader["OP_CONS_PAYMENT"]) : string.Empty;
                    _bModel.OP_PRIORITY = !DBNull.Value.Equals(reader[DALConstants.OP_PRIORITY_COL]) ? Convert.ToString(reader[DALConstants.OP_PRIORITY_COL]) : string.Empty;
                    _bModel.OP_PRIORITY_TARIFFS = !DBNull.Value.Equals(reader[DALConstants.OP_PRIORITY_TARIFFS_COL]) ? Convert.ToString(reader[DALConstants.OP_PRIORITY_TARIFFS_COL]) : string.Empty;
                    _bModel.OP_PRIORITY_COLOR_CDS = !DBNull.Value.Equals(reader[DALConstants.OP_PRIORITY_COLOR_CDS_COL]) ? Convert.ToString(reader[DALConstants.OP_PRIORITY_COLOR_CDS_COL]) : string.Empty;
                    _bModel.VAL_NO_OF_CONSULTATIONS = !DBNull.Value.Equals(reader[DALConstants.VAL_NO_OF_CONSULTATIONS_COL]) ? Convert.ToString(reader[DALConstants.VAL_NO_OF_CONSULTATIONS_COL]) : "0";
                    _bModel.VAL_NO_OF_DAYS = !DBNull.Value.Equals(reader[DALConstants.VAL_NO_OF_DAYS_COL]) ? Convert.ToString(reader[DALConstants.VAL_NO_OF_DAYS_COL]) : "0";
                    _bModel.EFFECT_TO_DT = !DBNull.Value.Equals(reader[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(reader[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _bModel.ORG_PERCENT = !DBNull.Value.Equals(reader[DALConstants.ORG_PERCENT_COL]) ? Convert.ToString(reader[DALConstants.ORG_PERCENT_COL]) : string.Empty;
                    _bModel.EMP_PERCENT = !DBNull.Value.Equals(reader[DALConstants.EMP_PERCENT_COL]) ? Convert.ToString(reader[DALConstants.EMP_PERCENT_COL]) : string.Empty;
                    _bModel.COLOUR_ID = !DBNull.Value.Equals(reader[DALConstants.COLOUR_ID_COL]) ? Convert.ToString(reader[DALConstants.COLOUR_ID_COL]) : string.Empty;
                    _bModel.CONS_TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.CONS_TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.CONS_TARIFF_ID_COL]) : 0;
                    _bModel.EMP_RELATIONSHIP_ID = !DBNull.Value.Equals(reader[DALConstants.EMP_RELATIONSHIP_ID_COL]) ? Convert.ToInt32(reader[DALConstants.EMP_RELATIONSHIP_ID_COL]) : 0;
                    _bModel.EMPLOYEE_ID = !DBNull.Value.Equals(reader[DALConstants.EMPLOYEE_ID_COL]) ? Convert.ToString(reader[DALConstants.EMPLOYEE_ID_COL]) : "0";
                    _bModel.DESIGNATION = !DBNull.Value.Equals(reader[DALConstants.DESIGNATION_COL]) ? Convert.ToString(reader[DALConstants.DESIGNATION_COL]) : "0";
                    _bModel.DEPARTMENT = !DBNull.Value.Equals(reader[DALConstants.DEPARTMENT_COL]) ? Convert.ToString(reader[DALConstants.DEPARTMENT_COL]) : "0";
                    _bModel.BRANCH = !DBNull.Value.Equals(reader["BRANCH"]) ? Convert.ToString(reader["BRANCH"]) : "0";
                    _bModel.EMP_GRADE_ID = !DBNull.Value.Equals(reader[DALConstants.EMP_GRADE_ID_COL]) ? Convert.ToString(reader[DALConstants.EMP_GRADE_ID_COL]) : "0";
                    _bModel.IMAGE = !DBNull.Value.Equals(reader["IMAGE"]) ? (byte[])(reader["IMAGE"]) : new byte[1];
                    _bModel.CMP_CONS_DONE = !DBNull.Value.Equals(reader["CMP_CONS_DONE"]) ? reader["CMP_CONS_DONE"].ToString() : string.Empty;
                    _bModel.CMPY_REFERL_LETTER = !DBNull.Value.Equals(reader["CMPY_REFERL_LETTER"]) ? reader["CMPY_REFERL_LETTER"].ToString() : string.Empty;
                    _bModel.CMPY_REFERL_LETTER_DAYS = !DBNull.Value.Equals(reader["CMPY_REFERL_LETTER_DAYS"]) ? reader["CMPY_REFERL_LETTER_DAYS"].ToString() : string.Empty;
                    _bModel.CREDIT_LIMIT_AMT_OP = !DBNull.Value.Equals(reader["CREDIT_LIMIT_AMT_OP"]) ? reader["CREDIT_LIMIT_AMT_OP"].ToString() : "0";
                    _bModel.IS_CONSELIGIBLE_WARD = !DBNull.Value.Equals(reader["IS_CONSELIGIBLE_WARD"]) ? reader["IS_CONSELIGIBLE_WARD"].ToString() : string.Empty;
                    _bModel.TARIFF_CONFIGURATION_IP = !DBNull.Value.Equals(reader["TARIFF_CONFIGURATION_IP"]) ? reader["TARIFF_CONFIGURATION_IP"].ToString() : string.Empty;
                    _bModel.TARIFF_CONFIGURATION_OP = !DBNull.Value.Equals(reader["TARIFF_CONFIGURATION_OP"]) ? reader["TARIFF_CONFIGURATION_OP"].ToString() : string.Empty;
                    _bModel.IP_APPROVAL_REQ_MIN_AMT = !DBNull.Value.Equals(reader["IP_APPROVAL_REQ_MIN_AMT"]) ? reader["IP_APPROVAL_REQ_MIN_AMT"].ToString() : "0";
                    _bModel.TARIFF_ID = !DBNull.Value.Equals(reader["TARIFF_ID"]) ? Convert.ToInt32(reader["TARIFF_ID"]) : 0;
                    _bModel.TARIFF_NAME = !DBNull.Value.Equals(reader["TARIFF_NAME"]) ? reader["TARIFF_NAME"].ToString() : string.Empty;
                    _bModel.TOT_RECORD_CNT = !DBNull.Value.Equals(reader[DALConstants.TOT_RECORD_CNT_COL]) ? Convert.ToString(reader[DALConstants.TOT_RECORD_CNT_COL]) : "0";
                    _bModel.CONSULTATION_DISC_PER = !DBNull.Value.Equals(reader["CONSULTATION_DISC_PER"]) ? Convert.ToString(reader["CONSULTATION_DISC_PER"]) : "0";

                    _bModel.IP_ORG_PERCENT = !DBNull.Value.Equals(reader[DALConstants.ORG_PERCENT_COL]) ? Convert.ToString(reader["IP_ORG_PERCENT"]) : string.Empty;
                    _bModel.IP_EMP_PERCENT = !DBNull.Value.Equals(reader[DALConstants.EMP_PERCENT_COL]) ? Convert.ToString(reader["IP_EMP_PERCENT"]) : string.Empty;
                    _bModel.COMPANY_TYPE_ID = !DBNull.Value.Equals(reader[DALConstants.COMPANY_TYPE_ID_COL]) ? Convert.ToString(reader[DALConstants.COMPANY_TYPE_ID_COL]) : "0";
                    _bCollection.Add(_bModel);
                }
                return _bCollection;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;

            }
        }

        public DataSet GetFavouritesList(GridPaging obj, out int count)
        {
            count = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_OP_FAVORITE_SERVICES");
                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, obj.TARIFF_ID);
                dBase.AddInParameter(dbCmd, "@IP_USER_ID", DbType.String, obj.USER_ID);
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, obj.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, obj.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, obj.IP_ADVANCE_SEARCH);
                dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.String, obj.CMP_ID);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, obj.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, obj.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, obj.EVENTFLAG);
                dBase.AddInParameter(dbCmd, "@IP_PAT_CATEGORY_ID", DbType.String, obj.PATIENT_CLASS_ID);
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                // EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(dbLayer.GenerateGridList);
                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetFavouritesLst").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }
        public PatientRegistrationCollection RegBillGrid(GridPaging gp, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_REG_CONS_OPBILL");
                dBase.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, gp.COLUMN_NAME);
                dBase.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, gp.PREFIX_TEXT);
                dBase.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, gp.ADVANCESEARCH);
                dBase.AddInParameter(cmd, "@IP_PAGENUM", DbType.Int32, gp.CURRENT_PAGE);
                dBase.AddInParameter(cmd, "@IP_PAGESIZE", DbType.Int32, gp.PAGE_SIZE);
                dBase.AddInParameter(cmd, "@IP_FROM_DT", DbType.String, gp.FROM_DATE);
                dBase.AddInParameter(cmd, "@IP_TO_DT", DbType.String, gp.TO_DATE);
                dBase.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, gp.EVENTFLAG);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(RegBillCollGrid);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(cmd, sqlData);
                //total_records = Convert.ToInt32(dBase.GetParameterValue(cmd, "@OP_COUNT"));
                return (PatientRegistrationCollection)cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 1203, 1);
                return null;
            }
        }
        public CollectionBase GetLookUPSearchData(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_AUTO_AUTH);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                /* if ((_lookUPSearch.PreConditon != null) && (_lookUPSearch.PreConditon[0].ToString() != "") && (_lookUPSearch.PreConditon.Count > 0))*/
                if ((_lookUPSearch.PreConditon != null) && (_lookUPSearch.PreConditon.Count > 0))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.AUTH_SOURCE_ID_PARAM, DbType.String, _lookUPSearch.PreConditon[0]);
                }
                if ((_lookUPSearch.PreConditon != null) && (_lookUPSearch.PreConditon.Count > 0))
                {
                    if (_lookUPSearch.PreConditon.Count > 1)
                        dBase.AddInParameter(dbCmd, DALConstants.AUTH_FOR_TRAN_ID_PARAM, DbType.String, _lookUPSearch.PreConditon[1]);
                }

                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);

                if (!string.IsNullOrEmpty(_lookUPSearch.REPORTFILTERCRETERIA))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.REPORT_FLAG, DbType.String, _lookUPSearch.REPORTFILTERCRETERIA);
                }
                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                if ((_lookUPSearch.PreConditon != null) && (_lookUPSearch.PreConditon.Count > 0))
                    if (_lookUPSearch.PreConditon.Count > 2)
                        dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, _lookUPSearch.PreConditon[2]);
                //}

                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                //_tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }

        }
        public CollectionBase GetLookUPSearch(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection _bCollection = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientAddress _bModel = new PatientAddress();
                    _bModel.AUTH_CD = reader[DALConstants.AUTH_CD_COL].ToString();
                    _bModel.AUTH_ID = Convert.ToInt32(reader[DALConstants.AUTH_ID_COL]);
                    _bModel.AUTH_NAME = reader[DALConstants.AUTH_NAME_COL].ToString();
                    _bModel.AUTH_FOR_TRAN_NAME = reader[DALConstants.AUTH_FOR_TRAN_NAME_COL].ToString();
                    _bModel.REFERAL_SOURCE_NAME = reader["AUTH_TYPE"].ToString();
                    _bModel.CONCESSION_PERCENT = !DBNull.Value.Equals(reader[DALConstants.CONCESSION_PERCENT_COL]) ? reader[DALConstants.CONCESSION_PERCENT_COL].ToString() : string.Empty;
                    _bModel.AUTH_FOR_CONCESSION_PERCENT = !DBNull.Value.Equals(reader["AUTH_FOR_CONCESSION_PERCENT"]) ? reader["AUTH_FOR_CONCESSION_PERCENT"].ToString() : string.Empty;
                    _bModel.AUTH_FOR_CONCESSION_PERIOD = !DBNull.Value.Equals(reader["AUTH_FOR_CONCESSION_PERIOD"]) ? reader["AUTH_FOR_CONCESSION_PERIOD"].ToString() : string.Empty;
                    _bModel.AUTH_FOR_DUE_PERIOD = !DBNull.Value.Equals(reader["AUTH_FOR_DUE_PERIOD"]) ? reader["AUTH_FOR_DUE_PERIOD"].ToString() : string.Empty;
                    _bModel.AUTH_FOR_CONCESSION_PERIOD_AMOUNT = !DBNull.Value.Equals(reader["AUTH_FOR_CONCESSION_PERIOD_AMOUNT"]) ? reader["AUTH_FOR_CONCESSION_PERIOD_AMOUNT"].ToString() : string.Empty;
                    _bModel.AUTH_FOR_DUE_PERIOD_AMOUNT = !DBNull.Value.Equals(reader["AUTH_FOR_DUE_PERIOD_AMOUNT"]) ? reader["AUTH_FOR_DUE_PERIOD_AMOUNT"].ToString() : string.Empty;
                    _bModel.IS_CONCESSION_OWN_PATIENTS_ONLY = !DBNull.Value.Equals(reader["IS_CONCESSION_OWN_PATIENTS_ONLY"]) ? reader["IS_CONCESSION_OWN_PATIENTS_ONLY"].ToString() : string.Empty;
                    _bModel.IS_DUE_OWN_PATIENTS_ONLY = !DBNull.Value.Equals(reader["IS_DUE_OWN_PATIENTS_ONLY"]) ? reader["IS_DUE_OWN_PATIENTS_ONLY"].ToString() : string.Empty;
                    _bModel.AUTH_FOR_DUE_AMOUNT = !DBNull.Value.Equals(reader["AUTH_FOR_DUE_AMOUNT"]) ? reader["AUTH_FOR_DUE_AMOUNT"].ToString() : "0";
                    if (reader["REMAINING_AUTH_AMOUNT"].ToString() == "" || reader["REMAINING_AUTH_AMOUNT"].ToString() == null)
                    {
                        _bModel.REMAINING_AUTH_AMOUNT = "0";
                    }
                    else
                    {
                        _bModel.REMAINING_AUTH_AMOUNT = (reader["REMAINING_AUTH_AMOUNT"].ToString());
                    }
                    if (reader["REMAINING_DUE_AMOUNT"].ToString() == "" || reader["REMAINING_DUE_AMOUNT"].ToString() == null)
                    {
                        _bModel.REMAINING_DUE_AMOUNT = "0";
                    }
                    else
                    {
                        _bModel.REMAINING_DUE_AMOUNT = (reader["REMAINING_DUE_AMOUNT"].ToString());
                    }
                    _bModel.NoOfRecords = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToInt32(reader["TOT_RECORD_CNT"].ToString()) : 0;
                    _bModel.AUTH_REF_CD = !DBNull.Value.Equals(reader["AUTH_REF_CD"]) ? reader["AUTH_REF_CD"].ToString() : string.Empty;
                    _bModel.AUTH_SOURCE_NAME = !DBNull.Value.Equals(reader["AUTH_SOURCE_NAME"]) ? reader["AUTH_SOURCE_NAME"].ToString() : string.Empty;

                    _bCollection.Add(_bModel);
                }
                return _bCollection;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;

            }
        }
        public CollectionBase RegBillCollGrid(IDataReader returnData)
        {

            try
            {

                PatientRegistrationCollection PatregColl = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration PatReg = new PatientRegistration();
                    PatReg.UMR_NO = !DBNull.Value.Equals(returnData["UMR_NO"]) ? Convert.ToString(returnData["UMR_NO"]) : string.Empty;
                    PatReg.CREATE_DT = !DBNull.Value.Equals(returnData["CREATE_DT"]) ? Convert.ToString(returnData["CREATE_DT"]) : string.Empty;
                    PatReg.GRP_BILL_NO = !string.IsNullOrEmpty(returnData["GRP_BILL_NO"].ToString()) ? returnData["GRP_BILL_NO"].ToString() : string.Empty;
                    PatReg.PATIENT_ID = !DBNull.Value.Equals(returnData["patient_id"]) ? Convert.ToString(returnData["patient_id"]) : string.Empty;
                    PatReg.TRANSACTION_ID = !DBNull.Value.Equals(returnData["TRANSACTION_ID"]) ? Convert.ToInt32(returnData["TRANSACTION_ID"]) : 0;
                    PatReg.Transaction_no = !DBNull.Value.Equals(returnData["TRANSACTION_NO"]) ? Convert.ToString(returnData["TRANSACTION_NO"]) : string.Empty;
                    PatReg.Transaction_dt = !DBNull.Value.Equals(returnData["TRANSACTION_DT"]) ? Convert.ToString(returnData["TRANSACTION_DT"]) : string.Empty;
                    PatReg.MOBILE_NO1 = !DBNull.Value.Equals(returnData["MOBILE_NO1"]) ? Convert.ToString(returnData["MOBILE_NO1"]) : string.Empty;
                    PatReg.DISPLAY_NAME = !DBNull.Value.Equals(returnData["DISPLAY_NAME"]) ? Convert.ToString(returnData["DISPLAY_NAME"]) : string.Empty;
                    PatReg.RECEIPT_AMOUNT = !DBNull.Value.Equals(returnData["RECEIPT_AMOUNT"]) ? Convert.ToString(returnData["RECEIPT_AMOUNT"]) : "0";
                    PatReg.CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CONCESSION_AMOUNT"]) : "0";
                    PatReg.PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAID_AMOUNT"]) ? Convert.ToInt32(returnData["PAID_AMOUNT"]) : 0;
                    PatReg.DUE_AMOUNT = !DBNull.Value.Equals(returnData["DUE_AMOUNT"]) ? Convert.ToInt32(returnData["DUE_AMOUNT"]) : 0;
                    // PatReg.BILL_TYPE_NAME = !DBNull.Value.Equals(returnData["BILL_TYPE_NAME"]) ? Convert.ToString(returnData["BILL_TYPE_NAME"]) : "";
                    PatReg.CREATED_BY = !DBNull.Value.Equals(returnData["CREATED_BY"]) ? Convert.ToString(returnData["CREATED_BY"]) : string.Empty;
                    PatReg.MODIFIED_BY = !DBNull.Value.Equals(returnData["MODIFIED_BY"]) ? Convert.ToString(returnData["MODIFIED_BY"]) : string.Empty;
                    PatReg.MODIFY_DT = !DBNull.Value.Equals(returnData["MODIFY_DT"]) ? Convert.ToString(returnData["MODIFY_DT"]) : string.Empty;
                    PatReg.BILL_ID = !DBNull.Value.Equals(returnData["BILL_ID"]) ? Convert.ToInt32(returnData["BILL_ID"]) : 0;
                    PatReg.MOBILE_NO2 = !DBNull.Value.Equals(returnData["MOBILE_NO2"]) ? Convert.ToString(returnData["MOBILE_NO2"]) : string.Empty;
                    /*  PatReg.CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CONCESSION_AMOUNT"]) : string.Empty;
                        PatReg.PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAID_AMOUNT"]) ? float.Parse(returnData["PAID_AMOUNT"].ToString()) : 0;
                        PatReg.DUE_AMOUNT = !DBNull.Value.Equals(returnData["DUE_AMOUNT"]) ? float.Parse(returnData["DUE_AMOUNT"].ToString()) : 0;
                        PatReg.IS_ASSESMENT_REQUIRED = !DBNull.Value.Equals(returnData["IS_ASSESMENT_REQUIRED"]) ? Convert.ToString(returnData["IS_ASSESMENT_REQUIRED"]) : "N";
   
                     */
                    /*Because Of THese Columns Duplicate Data Comming,  This Is Commented By Pushkar ,Please let Him Know Before Uncomment */
                    PatReg.CONCESSION_AUTHORIZATION_NAME = !DBNull.Value.Equals(returnData["CONCESSION_AUTHORIZATION_NAME"]) ? Convert.ToString(returnData["CONCESSION_AUTHORIZATION_NAME"]) : string.Empty;
                    PatReg.DUE_AUTHORIZATION_NAME = !DBNull.Value.Equals(returnData["DUE_AUTHORIZATION_NAME"]) ? Convert.ToString(returnData["DUE_AUTHORIZATION_NAME"]) : string.Empty;
                    PatReg.AUTHORIZED_NAME = !DBNull.Value.Equals(returnData["CONCESSION_AUTHORIZATION_NAME"]) ? Convert.ToString(returnData["CONCESSION_AUTHORIZATION_NAME"]) : string.Empty;
                    PatReg.FOREIGN_CATEGORIES_NAME = !DBNull.Value.Equals(returnData["FOREIGN_CATEGORIES_NAME"]) ? Convert.ToString(returnData["FOREIGN_CATEGORIES_NAME"]) : string.Empty;
                    PatReg.GROSS_AMOUNT = !DBNull.Value.Equals(returnData["GROSS_AMOUNT"]) ? Convert.ToInt32(returnData["GROSS_AMOUNT"]) : 0;
                    //PatReg.NET_AMOUNT = !DBNull.Value.Equals(returnData["NET_AMOUNT"]) ? Convert.ToInt32(returnData["NET_AMOUNT"]) : 0;                  

                    /*   PatReg.OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["OUTSTANDING_DUE"]) ? Convert.ToString(returnData["OUTSTANDING_DUE"]) : string.Empty;
                    PatReg.DOCTOR_DEPARTMENT_NAME = !DBNull.Value.Equals(returnData["DOCTOR_DEPARTMENT_NAME"]) ? Convert.ToString(returnData["DOCTOR_DEPARTMENT_NAME"]) : string.Empty;
                    PatReg.REFERAL_TYPE_NAME = !DBNull.Value.Equals(returnData["REFERAL_TYPE_NAME"]) ? Convert.ToString(returnData["REFERAL_TYPE_NAME"]) : string.Empty;
                    PatReg.REFERAL_SOURCE_NAME = !DBNull.Value.Equals(returnData["REFERAL_SOURCE_NAME"]) ? Convert.ToString(returnData["REFERAL_SOURCE_NAME"]) : string.Empty;
                    PatReg.REFERAL_DOCTOR_NAME = !DBNull.Value.Equals(returnData["REFERAL_DOCTOR_NAME"]) ? Convert.ToString(returnData["REFERAL_DOCTOR_NAME"]) : string.Empty;
                    PatReg.REFERRED_BY = !DBNull.Value.Equals(returnData["REFERRED_BY"]) ? Convert.ToString(returnData["REFERRED_BY"]) : string.Empty;
                    */
                    /*Because Of THese Columns Duplicate Data Comming,  This Is Commented By Pushkar ,Please let Him Know Before Uncomment */
                    PatReg.NET_AMT = !DBNull.Value.Equals(returnData["NET_AMT"]) ? Convert.ToString(returnData["NET_AMT"]) : string.Empty;
                    PatReg.PAT_GROSS_AMOUNT = !DBNull.Value.Equals(returnData["PAT_GROSS_AMOUNT"]) ? Convert.ToString(returnData["PAT_GROSS_AMOUNT"]) : string.Empty;
                    PatReg.PAT_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["PAT_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["PAT_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.PAT_NET_AMT = !DBNull.Value.Equals(returnData["PAT_NET_AMT"]) ? Convert.ToString(returnData["PAT_NET_AMT"]) : string.Empty;
                    PatReg.PAT_PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAT_PAID_AMOUNT"]) ? Convert.ToString(returnData["PAT_PAID_AMOUNT"]) : string.Empty;
                    PatReg.PAT_DUE_AMOUNT = !DBNull.Value.Equals(returnData["PAT_DUE_AMOUNT"]) ? Convert.ToString(returnData["PAT_DUE_AMOUNT"]) : string.Empty;
                    PatReg.CMP_GROSS_AMT = !DBNull.Value.Equals(returnData["CMP_GROSS_AMT"]) ? Convert.ToString(returnData["CMP_GROSS_AMT"]) : string.Empty;
                    PatReg.CMP_PAID_AMT = !DBNull.Value.Equals(returnData["CMP_PAID_AMT"]) ? Convert.ToString(returnData["CMP_PAID_AMT"]) : string.Empty;
                    PatReg.COMPANY_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["COMPANY_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["COMPANY_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.CMP_NET_AMT = !DBNull.Value.Equals(returnData["CMP_NET_AMT"]) ? Convert.ToString(returnData["CMP_NET_AMT"]) : string.Empty;
                    PatReg.CMP_DUE_AMT = !DBNull.Value.Equals(returnData["CMP_DUE_AMT"]) ? Convert.ToString(returnData["CMP_DUE_AMT"]) : string.Empty;
                    PatReg.TRANSFER_TYPE_ID = !DBNull.Value.Equals(returnData["TRANSFER_TYPE_ID"]) ? Convert.ToString(returnData["TRANSFER_TYPE_ID"]) : string.Empty;
                    PatReg.TOT_RECORD_CNT = !DBNull.Value.Equals(returnData["TOT_RECORD_CNT"]) ? Convert.ToString(returnData["TOT_RECORD_CNT"]) : string.Empty;
                    PatReg.COMPANY_DUE = !DBNull.Value.Equals(returnData["COMPANY_DUE"]) ? Convert.ToString(returnData["COMPANY_DUE"]) : string.Empty;
                    PatReg.DMS_UPLOAD = !DBNull.Value.Equals(returnData["DMS_UPLOAD"]) ? Convert.ToString(returnData["DMS_UPLOAD"]) : string.Empty;
                    PatReg.REC_TYPE_NAME = !DBNull.Value.Equals(returnData["REC_TYPE_NAME"]) ? Convert.ToString(returnData["REC_TYPE_NAME"]) : string.Empty;
                    PatReg.BILL_AMOUNT_EXC_GST = !DBNull.Value.Equals(returnData["BILL_AMOUNT_EXC_GST"]) ? Convert.ToString(returnData["BILL_AMOUNT_EXC_GST"]) : string.Empty;
                    PatReg.NET_AMOUNT_EXC_GST = !DBNull.Value.Equals(returnData["NET_AMOUNT_EXC_GST"]) ? Convert.ToString(returnData["NET_AMOUNT_EXC_GST"]) : string.Empty;
                    PatReg.GST_AMOUNT = !DBNull.Value.Equals(returnData["GST_AMOUNT"]) ? Convert.ToString(returnData["GST_AMOUNT"]) : string.Empty;
                    PatReg.SGST_AMOUNT = !DBNull.Value.Equals(returnData["SGST_AMOUNT"]) ? Convert.ToString(returnData["SGST_AMOUNT"]) : string.Empty;
                    PatReg.CGST_AMOUNT = !DBNull.Value.Equals(returnData["CGST_AMOUNT"]) ? Convert.ToString(returnData["CGST_AMOUNT"]) : string.Empty;
                    PatReg.BILL_TYPE_ID = !DBNull.Value.Equals(returnData["BILL_TYPE_ID"]) ? Convert.ToString(returnData["BILL_TYPE_ID"]) : string.Empty;
                    PatReg.BILL_TYPE_ID = !DBNull.Value.Equals(returnData["BILL_TYPE_ID"]) ? Convert.ToString(returnData["BILL_TYPE_ID"]) : string.Empty;
                    PatReg.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? Convert.ToString(returnData["RECORD_STATUS"]) : string.Empty;
                    PatReg.OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["OUTSTANDING_DUE"]) ? Convert.ToString(returnData["OUTSTANDING_DUE"]) : string.Empty;
                    PatReg.PAT_OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["PAT_OUTSTANDING_DUE"]) ? Convert.ToString(returnData["PAT_OUTSTANDING_DUE"]) : string.Empty;
                    PatReg.CMP_OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["CMP_OUTSTANDING_DUE"]) ? Convert.ToString(returnData["CMP_OUTSTANDING_DUE"]) : string.Empty;



                    PatregColl.Add(PatReg);
                }
                return PatregColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillCollGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }

        }
        public CollectionBase RegBillFirstChildGrid(PatientRegistration PatReg)
        {

            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_CONS_OPBIL_DTLS");
                dBase.AddInParameter(cmd, "@IP_GRP_BILL_NO", DbType.String, PatReg.GRP_BILL_NO);
                dBase.AddInParameter(cmd, "@IP_BILL_ID", DbType.Int32, PatReg.BILL_ID);
                dBase.AddInParameter(cmd, "@IP_TRAN_ID", DbType.Int32, PatReg.TRANSACTION_ID);

                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(RegBillFirstChildCollGrid);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(cmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 1203, 1);
                return null;
            }
        }
        public CollectionBase RegBillFirstChildCollGrid(IDataReader returnData)
        {

            try
            {

                PatientRegistrationCollection PatregColl = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration PatReg = new PatientRegistration();
                    PatReg.UMR_NO = !string.IsNullOrEmpty(returnData["UMR_NO"].ToString()) ? Convert.ToString(returnData["UMR_NO"]) : string.Empty;
                    PatReg.REGISTRATION_NO = !string.IsNullOrEmpty(returnData["REGISTRATION_NO"].ToString()) ? returnData["REGISTRATION_NO"].ToString() : string.Empty;
                    PatReg.BILL_NO = !string.IsNullOrEmpty(returnData["BILL_NO"].ToString()) ? returnData["BILL_NO"].ToString() : string.Empty;
                    PatReg.BILL_ID = !DBNull.Value.Equals(returnData["BILL_ID"]) ? Convert.ToInt32(returnData["BILL_ID"]) : 0;
                    PatReg.PATIENT_ID = !DBNull.Value.Equals(returnData["patient_id"]) ? Convert.ToString(returnData["patient_id"]) : string.Empty;
                    PatReg.TRANSACTION_ID = !DBNull.Value.Equals(returnData["TRANSACTION_ID"]) ? Convert.ToInt32(returnData["TRANSACTION_ID"]) : 0;
                    PatReg.Transaction_no = !DBNull.Value.Equals(returnData["TRANSACTION_NO"]) ? Convert.ToString(returnData["TRANSACTION_NO"]) : string.Empty;
                    PatReg.Transaction_dt = !DBNull.Value.Equals(returnData["TRANSACTION_DT"]) ? Convert.ToString(returnData["TRANSACTION_DT"]) : string.Empty;
                    PatReg.MOBILE_NO1 = !DBNull.Value.Equals(returnData["MOBILE_NO1"]) ? Convert.ToString(returnData["MOBILE_NO1"]) : string.Empty;
                    PatReg.DISPLAY_NAME = !DBNull.Value.Equals(returnData["DISPLAY_NAME"]) ? Convert.ToString(returnData["DISPLAY_NAME"]) : string.Empty;
                    PatReg.BILL_DT = !DBNull.Value.Equals(returnData["BILL_DT"]) ? Convert.ToString(returnData["BILL_DT"]) : string.Empty;
                    PatReg.GRP_BILL_NO = !string.IsNullOrEmpty(returnData["GRP_BILL_NO"].ToString()) ? returnData["GRP_BILL_NO"].ToString() : string.Empty;
                    PatReg.RECEIPT_AMOUNT = !DBNull.Value.Equals(returnData["RECEIPT_AMOUNT"]) ? Convert.ToString(returnData["RECEIPT_AMOUNT"]) : "0";
                    PatReg.DOCTOR_CD = !DBNull.Value.Equals(returnData["DOCTOR_CD"]) ? Convert.ToString(returnData["DOCTOR_CD"]) : string.Empty;
                    PatReg.DOCTOR_NAME = !DBNull.Value.Equals(returnData["DOC_NAME"]) ? Convert.ToString(returnData["DOC_NAME"]) : string.Empty;
                    PatReg.DOCTOR_ID = !DBNull.Value.Equals(returnData["DOCTOR_ID"]) ? Convert.ToString(returnData["DOCTOR_ID"]) : "0";
                    PatReg.BILL_TYPE_ID = !DBNull.Value.Equals(returnData["BILL_TYPE_ID"]) ? Convert.ToString(returnData["BILL_TYPE_ID"]) : string.Empty;
                    PatReg.PKG_DTS = !DBNull.Value.Equals(returnData["PKG_DTS"]) ? Convert.ToString(returnData["PKG_DTS"]) : "N";

                    PatReg.GROSS_AMOUNT = !DBNull.Value.Equals(returnData["GROSS_AMOUNT"].ToString()) ? Convert.ToInt32(returnData["GROSS_AMOUNT"]) : 0;
                    PatReg.CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.NET_AMOUNT = !DBNull.Value.Equals(returnData["NET_AMT"]) ? Convert.ToInt32(returnData["NET_AMT"]) : 0;
                    PatReg.PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAID_AMOUNT"]) ? float.Parse(returnData["PAID_AMOUNT"].ToString()) : 0;
                    PatReg.DUE_AMOUNT = !DBNull.Value.Equals(returnData["DUE_AMOUNT"]) ? float.Parse(returnData["DUE_AMOUNT"].ToString()) : 0;

                    PatReg.PAT_GROSS_AMOUNT = !DBNull.Value.Equals(returnData["PAT_GROSS_AMOUNT"].ToString()) ? returnData["PAT_GROSS_AMOUNT"].ToString() : "0";
                    PatReg.PAT_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["PAT_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["PAT_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.PAT_NET_AMT = !DBNull.Value.Equals(returnData["PAT_NET_AMT"]) ? returnData["PAT_NET_AMT"].ToString() : "0";
                    PatReg.PAT_PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAT_PAID_AMOUNT"]) ? Convert.ToString(returnData["PAT_PAID_AMOUNT"]) : string.Empty;
                    PatReg.PAT_DUE_AMOUNT = !DBNull.Value.Equals(returnData["PAT_DUE_AMOUNT"]) ? Convert.ToString(returnData["PAT_DUE_AMOUNT"]) : string.Empty;



                    PatReg.COMPANY_AMOUNT = !DBNull.Value.Equals(returnData["COMPANY_AMOUNT"]) ? Convert.ToString(returnData["COMPANY_AMOUNT"]) : string.Empty;
                    PatReg.COMPANY_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["COMPANY_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["COMPANY_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.COMPANY_NET_AMOUNT = !DBNull.Value.Equals(returnData["COMPANY_NET_AMOUNT"]) ? Convert.ToString(returnData["COMPANY_NET_AMOUNT"]) : string.Empty;
                    PatReg.COMPANY_DUE_AMOUNT = !DBNull.Value.Equals(returnData["COMPANY_DUE_AMOUNT"]) ? Convert.ToString(returnData["COMPANY_DUE_AMOUNT"]) : string.Empty;


                    PatReg.CASH_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CASH_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CASH_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.CASH_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["CASH_CONCESSION_PCNT"]) ? Convert.ToString(returnData["CASH_CONCESSION_PCNT"]) : string.Empty;
                    PatReg.HC_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["HC_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["HC_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.HC_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["HC_CONCESSION_PCNT"]) ? Convert.ToString(returnData["HC_CONCESSION_PCNT"]) : string.Empty;
                    PatReg.MANAGMENT_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["MANAGMENT_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["MANAGMENT_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.MANAGMENT_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["MANAGMENT_CONCESSION_PCNT"]) ? Convert.ToString(returnData["MANAGMENT_CONCESSION_PCNT"]) : string.Empty;
                    PatReg.STAFF_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["STAFF_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["STAFF_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.STAFF_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["STAFF_CONCESSION_PCNT"]) ? Convert.ToString(returnData["STAFF_CONCESSION_PCNT"]) : string.Empty;
                    PatReg.EVENT_BASED_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["EVENT_BASED_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["EVENT_BASED_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.EVENT_BASED_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["EVENT_BASED_CONCESSION_PCNT"]) ? Convert.ToString(returnData["EVENT_BASED_CONCESSION_PCNT"]) : string.Empty;
                    PatReg.CONCESSION_RULE_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_RULE_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CONCESSION_RULE_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.CONCESSION_RULE_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["CONCESSION_RULE_CONCESSION_PCNT"]) ? Convert.ToString(returnData["CONCESSION_RULE_CONCESSION_PCNT"]) : string.Empty;
                    PatReg.HEALTH_CARD_NO = !DBNull.Value.Equals(returnData["HEALTH_CARD_NO"]) ? Convert.ToString(returnData["HEALTH_CARD_NO"]) : string.Empty;
                    PatReg.APPT_NO = !DBNull.Value.Equals(returnData["APPT_NO"]) ? Convert.ToString(returnData["APPT_NO"]) : string.Empty;
                    PatReg.CONSULTANT_TRANSFER_DT = !DBNull.Value.Equals(returnData["CONSULTANT_TRANSFER_DT"]) ? Convert.ToString(returnData["CONSULTANT_TRANSFER_DT"]) : string.Empty;
                    PatReg.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? Convert.ToString(returnData["RECORD_STATUS"]) : string.Empty;
                    PatReg.BILL_AMOUNT_EXC_GST = !DBNull.Value.Equals(returnData["BILL_AMOUNT_EXC_GST"]) ? Convert.ToString(returnData["BILL_AMOUNT_EXC_GST"]) : string.Empty;
                    PatReg.NET_AMOUNT_EXC_GST = !DBNull.Value.Equals(returnData["NET_AMOUNT_EXC_GST"]) ? Convert.ToString(returnData["NET_AMOUNT_EXC_GST"]) : string.Empty;
                    PatReg.GST_AMOUNT = !DBNull.Value.Equals(returnData["GST_AMOUNT"]) ? Convert.ToString(returnData["GST_AMOUNT"]) : string.Empty;
                    PatReg.SGST_AMOUNT = !DBNull.Value.Equals(returnData["SGST_AMOUNT"]) ? Convert.ToString(returnData["SGST_AMOUNT"]) : string.Empty;
                    PatReg.CGST_AMOUNT = !DBNull.Value.Equals(returnData["CGST_AMOUNT"]) ? Convert.ToString(returnData["CGST_AMOUNT"]) : string.Empty;
                    PatReg.OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["OUTSTANDING_DUE"]) ? Convert.ToString(returnData["OUTSTANDING_DUE"]) : string.Empty;

                    PatReg.RECORD_STATUS = !DBNull.Value.Equals(returnData["SRV_BILL_RECORD_STATUS"]) ? Convert.ToString(returnData["SRV_BILL_RECORD_STATUS"]) : string.Empty;

                    PatregColl.Add(PatReg);
                }
                return PatregColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillCollGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }

        }
        public CollectionBase GetPatientBillsOnID(int recpID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_BILLS_ONID");
                dBase.AddInParameter(dbCmd, DALConstants.TRANSACTION_ID_PARM, DbType.Int32, recpID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateBillsOnReceiptID);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPatientBillsOnID").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GenerateBillsOnReceiptID(IDataReader returnData)
        {
            try
            {
                ReceiptMasterCollection recpMasterCollection = new ReceiptMasterCollection();
                ReceiptMaster recpMaster;
                while (returnData.Read())
                {
                    recpMaster = new ReceiptMaster();

                    #region BILL

                    recpMaster.AMOUNT = !DBNull.Value.Equals(returnData[DALConstants.AMOUNT_COL]) ? float.Parse(returnData[DALConstants.AMOUNT_COL].ToString()) : 0;
                    recpMaster.SERVICE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_ID_COL]) : "0";
                    recpMaster.SERVICE_CODE = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_CD_COL]) : "";
                    recpMaster.SERVICE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : "";
                    if (returnData["TRANSFER_TYPE_ID"].ToString() == "1")
                    {
                        recpMaster.RECORD_STATUS = "T";
                    }
                    else
                    {
                        recpMaster.RECORD_STATUS = !DBNull.Value.Equals(returnData[DALConstants.RECORD_STATUS_COL]) ? Convert.ToString(returnData[DALConstants.RECORD_STATUS_COL]) : "";
                    }
                    recpMaster.EFFECT_FROM_DT = !DBNull.Value.Equals(returnData[DALConstants.EFF_FROM_DT_COL]) ? Convert.ToString(returnData[DALConstants.EFF_FROM_DT_COL]) : "";
                    recpMaster.EFFECT_TO_DT = !DBNull.Value.Equals(returnData[DALConstants.EFF_TO_DT_COL]) ? Convert.ToString(returnData[DALConstants.EFF_TO_DT_COL]) : "";
                    recpMaster.DOCTOR_ID = !DBNull.Value.Equals(returnData[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL]) : "0";
                    recpMaster.SERVICE_CLASS_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_CLASS_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_CLASS_ID_COL]) : "0";
                    recpMaster.CLASS_SERVICE_ID = !DBNull.Value.Equals(returnData[DALConstants.CLASS_SERVICE_ID_COL]) ? Convert.ToString(returnData[DALConstants.CLASS_SERVICE_ID_COL]) : "0";
                    recpMaster.SERVICE_TYPE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_ID_COL]) : "0";
                    recpMaster.SERVICE_GROUP_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_ID_COL]) : "0";
                    recpMaster.SERVICE_TYPE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) : "0";
                    recpMaster.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) : "0";
                    recpMaster.QUANTITY = !DBNull.Value.Equals(returnData[DALConstants.QUANTITY_COL]) ? Convert.ToString(returnData[DALConstants.QUANTITY_COL]) : "0";

                    recpMaster.RATE = !DBNull.Value.Equals(returnData[DALConstants.RATE_COL]) ? Convert.ToString(returnData[DALConstants.RATE_COL]) : "0";
                    recpMaster.ORDER_ID = !DBNull.Value.Equals(returnData["ORDER_NO"]) ? Convert.ToString(returnData["ORDER_NO"]) : string.Empty;
                    recpMaster.BILL_SERVICE_ID = !DBNull.Value.Equals(returnData["BILL_SRV_ID"]) ? Convert.ToString(returnData["BILL_SRV_ID"]) : string.Empty;
                    recpMaster.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(returnData["IS_SRV_GUIDELINES_REQUIRED"]) ? Convert.ToString(returnData["IS_SRV_GUIDELINES_REQUIRED"]) : "N";
                    recpMaster.IS_CONSENT_FORM = !DBNull.Value.Equals(returnData["IS_CONSENT_FORM"]) ? Convert.ToString(returnData["IS_CONSENT_FORM"]) : "N";
                    recpMaster.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(returnData["IS_SRV_CHECKLIST_REQUIRED"]) ? Convert.ToString(returnData["IS_SRV_CHECKLIST_REQUIRED"]) : "N";
                    recpMaster.SRV_NET_AMOUNT = !DBNull.Value.Equals(returnData["SRV_NET_AMOUNT"]) ? Convert.ToString(returnData["SRV_NET_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_CASH_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_CASH_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_CASH_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_CASH_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["SRV_CASH_CONCESSION_PCNT"]) ? Convert.ToString(returnData["SRV_CASH_CONCESSION_PCNT"]) : string.Empty;
                    recpMaster.SRV_HC_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_HC_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_HC_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_HC_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["SRV_HC_CONCESSION_PCNT"]) ? Convert.ToString(returnData["SRV_HC_CONCESSION_PCNT"]) : string.Empty;
                    recpMaster.SRV_MANAGMENT_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_MANAGMENT_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_MANAGMENT_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_MANAGMENT_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["SRV_MANAGMENT_CONCESSION_PCNT"]) ? Convert.ToString(returnData["SRV_MANAGMENT_CONCESSION_PCNT"]) : string.Empty;
                    recpMaster.SRV_STAFF_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_STAFF_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_STAFF_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_STAFF_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["SRV_STAFF_CONCESSION_PCNT"]) ? Convert.ToString(returnData["SRV_STAFF_CONCESSION_PCNT"]) : string.Empty;
                    recpMaster.SRV_EVENT_BASED_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_EVENT_BASED_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_EVENT_BASED_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_EVENT_BASED_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["SRV_EVENT_BASED_CONCESSION_PCNT"]) ? Convert.ToString(returnData["SRV_EVENT_BASED_CONCESSION_PCNT"]) : string.Empty;
                    recpMaster.SRV_CONCESSION_RULE_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["SRV_CONCESSION_RULE_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["SRV_CONCESSION_RULE_CONCESSION_AMOUNT"]) : string.Empty;
                    recpMaster.SRV_CONCESSION_RULE_CONCESSION_PCNT = !DBNull.Value.Equals(returnData["SRV_CONCESSION_RULE_CONCESSION_PCNT"]) ? Convert.ToString(returnData["SRV_CONCESSION_RULE_CONCESSION_PCNT"]) : string.Empty;
                    recpMaster.REMARKS = !DBNull.Value.Equals(returnData["REMARKS"]) ? Convert.ToString(returnData["REMARKS"]) : string.Empty;
                    recpMaster.RATE_EXC_GST = !DBNull.Value.Equals(returnData["RATE_EXC_GST"]) ? Convert.ToString(returnData["RATE_EXC_GST"]) : string.Empty;
                    recpMaster.TAX_PCT = !DBNull.Value.Equals(returnData["TAX_PCT"]) ? Convert.ToString(returnData["TAX_PCT"]) : string.Empty;
                    recpMaster.TAX_AMOUNT = !DBNull.Value.Equals(returnData["TAX_AMOUNT"]) ? Convert.ToString(returnData["TAX_AMOUNT"]) : string.Empty;
                    recpMaster.SGST_PCT = !DBNull.Value.Equals(returnData["SGST_PCT"]) ? Convert.ToString(returnData["SGST_PCT"]) : string.Empty;
                    recpMaster.SGST_AMOUNT = !DBNull.Value.Equals(returnData["SGST_AMOUNT"]) ? Convert.ToString(returnData["SGST_AMOUNT"]) : string.Empty;
                    recpMaster.CGST_PCT = !DBNull.Value.Equals(returnData["CGST_PCT"]) ? Convert.ToString(returnData["CGST_PCT"]) : string.Empty;
                    recpMaster.CGST_AMOUNT = !DBNull.Value.Equals(returnData["CGST_AMOUNT"]) ? Convert.ToString(returnData["CGST_AMOUNT"]) : string.Empty;
                    recpMaster.SAC_CD = !DBNull.Value.Equals(returnData["SAC_CD"]) ? Convert.ToString(returnData["SAC_CD"]) : string.Empty;
                    #endregion

                    recpMasterCollection.Add(recpMaster);
                }
                return recpMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateBillsOnReceiptID").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Patient_Referals_Details(int _patID)
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_MULTI_REFRL_DTLS_BASEDON_PATID");
                dbSvc.AddInParameter(cmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, _patID);
                GenerateCollectionReader _reader = new GenerateCollectionReader(Get_Patient_Referals_Details);
                return _dblayer.ExecuteReaderCommand(cmd, _reader);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patient_EmployeeInfor_Details").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        private CollectionBase Get_Patient_Referals_Details(IDataReader returndata)
        {
            try
            {

                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returndata.Read())
                {
                    ReferalMaster _prfrl = new ReferalMaster();
                    _prfrl.REFERAL_SOURCE_ID = !DBNull.Value.Equals(returndata["REFERAL_SOURCE_ID"]) ? Convert.ToInt32(returndata["REFERAL_SOURCE_ID"].ToString()) : 0;
                    _prfrl.REFERAL_SOURCE_NAME = !DBNull.Value.Equals(returndata["REFERAL_SOURCE_NAME"]) ? returndata["REFERAL_SOURCE_NAME"].ToString() : "";
                    _prfrl.REFRL_ID = !DBNull.Value.Equals(returndata["REFERL_ID"]) ? Convert.ToInt32(returndata["REFERL_ID"].ToString()) : 0;
                    _prfrl.REFERAL_NAME = !DBNull.Value.Equals(returndata["REFERL_NAME"]) ? returndata["REFERL_NAME"].ToString() : string.Empty;
                    // _prfrl.REFERAL_CLASS = !DBNull.Value.Equals(returndata[DALConstants.REFERAL_CLASS_COL]) ? returndata[DALConstants.REFERAL_CLASS_COL].ToString() : string.Empty;
                    _prfrl.Address1 = !DBNull.Value.Equals(returndata["ADDRESS1"]) ? returndata["ADDRESS1"].ToString() : string.Empty;
                    _prfrl.Address2 = !DBNull.Value.Equals(returndata["ADDRESS2"]) ? returndata["ADDRESS2"].ToString() : string.Empty;
                    _prfrl.REFERAL_MOBILENO = returndata[DALConstants.MOBILE_PHONE_COL] != DBNull.Value ? returndata[DALConstants.MOBILE_PHONE_COL].ToString() : string.Empty;
                    _prfrl.PAT_RFRL_DTL_ID = !DBNull.Value.Equals(returndata["PAT_RFRL_DTL_ID"]) ? Convert.ToString(returndata["PAT_RFRL_DTL_ID"].ToString()) : "0";
                    _prfrl.PAT_RFRL_DTL_REV_NO = !DBNull.Value.Equals(returndata["PAT_RFRL_DTL_REV_NO"]) ? returndata["PAT_RFRL_DTL_REV_NO"].ToString() : string.Empty;
                    _prfrl.METHOD_OF_COMM_ID = !DBNull.Value.Equals(returndata["METHOD_OF_COMM_ID"]) ? Convert.ToString(returndata["METHOD_OF_COMM_ID"].ToString()) : string.Empty;
                    _prfrl.METHOD_OF_COMMUNICATION = !DBNull.Value.Equals(returndata["METHOD_OF_COMMUNICATION_NAME"]) ? Convert.ToString(returndata["METHOD_OF_COMMUNICATION_NAME"].ToString()) : string.Empty;
                    _prfrl.CONSULTANT_NAME = !DBNull.Value.Equals(returndata["CONSULTANT_NAME"]) ? Convert.ToString(returndata["CONSULTANT_NAME"].ToString()) : string.Empty;
                    _prfrl.IS_VIP = !DBNull.Value.Equals(returndata["IS_VIP"]) ? Convert.ToString(returndata["IS_VIP"].ToString()) : string.Empty;
                    _prfrl.IS_STOP_ALERT = !DBNull.Value.Equals(returndata["IS_STOP_ALERT"]) ? Convert.ToString(returndata["IS_STOP_ALERT"].ToString()) : string.Empty;
                    _prfrl.VIP_TYPE_ID = !DBNull.Value.Equals(returndata["VIP_TYPE_ID"]) ? Convert.ToString(returndata["VIP_TYPE_ID"].ToString()) : string.Empty;
                    _prfrl.REMARKS = !DBNull.Value.Equals(returndata["REMARKS"]) ? Convert.ToString(returndata["REMARKS"].ToString()) : string.Empty;
                    _prfrl.IS_NEW_BORN = !DBNull.Value.Equals(returndata["NEW_BORN"]) ? Convert.ToString(returndata["NEW_BORN"].ToString()) : string.Empty;
                    _prfrl.DOCTOR_ID = !DBNull.Value.Equals(returndata["DOCTOR_ID"]) ? Convert.ToString(returndata["DOCTOR_ID"].ToString()) : string.Empty;
                    _prfrl.REFERAL_CLASS_ID = !DBNull.Value.Equals(returndata["REFERAL_CLASS_ID"]) ? Convert.ToString(returndata["REFERAL_CLASS_ID"].ToString()) : string.Empty;
                    _prfrl.REFERAL_CLASS_NAME = !DBNull.Value.Equals(returndata["REFERAL_CLASS_NAME"]) ? Convert.ToString(returndata["REFERAL_CLASS_NAME"].ToString()) : string.Empty;
                    _prfrl.MOBILE_PHONE = !DBNull.Value.Equals(returndata["MOBILE_PHONE"]) ? Convert.ToString(returndata["MOBILE_PHONE"].ToString()) : string.Empty;


                    _prfrl.REFERRED_TO_ID = !DBNull.Value.Equals(returndata["REFERRED_TO_ID"]) ? Convert.ToInt32(returndata["REFERRED_TO_ID"].ToString()) : 0;
                    _prfrl.REFERRED_TO_NAME = !DBNull.Value.Equals(returndata["REFERRED_TO_NAME"]) ? Convert.ToString(returndata["REFERRED_TO_NAME"].ToString()) : string.Empty;
                    _prfrl.REFERAL_CATEGORY_TO_ID = !DBNull.Value.Equals(returndata["REFERAL_CATEGORY_TO_ID"]) ? Convert.ToInt32(returndata["REFERAL_CATEGORY_TO_ID"].ToString()) : 0;
                    _prfrl.REFERAL_CATEGORY_TO_NAME = !DBNull.Value.Equals(returndata["REFERAL_CATEGORY_TO_NAME"]) ? Convert.ToString(returndata["REFERAL_CATEGORY_TO_NAME"].ToString()) : string.Empty;
                    _prfrl.REFERAL_SOURCE_TO_ID = !DBNull.Value.Equals(returndata["REFERAL_SOURCE_TO_ID"]) ? Convert.ToInt32(returndata["REFERAL_SOURCE_TO_ID"].ToString()) : 0;
                    _prfrl.REFERAL_SOURCE_TO_NAME = !DBNull.Value.Equals(returndata["REFERAL_SOURCE_TO_NAME"]) ? Convert.ToString(returndata["REFERAL_SOURCE_TO_NAME"].ToString()) : string.Empty;
                    _prfrl.IS_LETTER = !DBNull.Value.Equals(returndata["IS_LETTER"]) ? Convert.ToString(returndata["IS_LETTER"].ToString()) : string.Empty;
                    _prfrl.IS_SMS = !DBNull.Value.Equals(returndata["IS_SMS"]) ? Convert.ToString(returndata["IS_SMS"].ToString()) : string.Empty;
                    _prfrl.REFERAL_REMARKS = !DBNull.Value.Equals(returndata["REFERAL_REMARKS"]) ? Convert.ToString(returndata["REFERAL_REMARKS"].ToString()) : string.Empty;
                    _prfrl.CITY = !DBNull.Value.Equals(returndata["city"]) ? Convert.ToString(returndata["city"].ToString()) : string.Empty;
                    _prfrl.AREA_NAME = !DBNull.Value.Equals(returndata["area_name"]) ? Convert.ToString(returndata["area_name"].ToString()) : string.Empty;
                    _prfrl.LOCATION_NAME = !DBNull.Value.Equals(returndata["LOCATION_NAME"]) ? Convert.ToString(returndata["LOCATION_NAME"].ToString()) : string.Empty;


                    _collection.Add(_prfrl);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patient_Referals_Details").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public DataSet Get_Dynamic_AutoCompletion(LookUpSearch _lookUPSearch, out int _total_records, string sp_name)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, sp_name);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (_lookUPSearch.CMO_DOCTOR == "REFERALS_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_REFRL_SRC_ID", DbType.String, _lookUPSearch.PreConditon[0]);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERAL_SRC_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_REFERL_TYPE_ID", DbType.Int32, _lookUPSearch.PreConditon[0]);
                        dbSvc.AddInParameter(cmd, "@IP_REFERL_SRC_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                        dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                        dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                    }
                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERAL_TO_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "NEW_UMR")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "AREA_NEW_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "DOCTOR_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERALS_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "PASDIAGNOSIS_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                }
                else if (_lookUPSearch.CMO_DOCTOR == "AUTHORIZATION_NEW1")
                {
                    dbSvc.AddInParameter(cmd, DALConstants.AUTH_SOURCE_ID_PARAM, DbType.String, "0");

                    dbSvc.AddInParameter(cmd, DALConstants.AUTH_FOR_TRAN_ID_PARAM, DbType.String, "2");

                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);

                }
                else if (_lookUPSearch.CMO_DOCTOR == "AUTHORIZATIONBYTRANID_NEW")
                {
                    dbSvc.AddInParameter(cmd, DALConstants.AUTH_SOURCE_ID_PARAM, DbType.String, "0");
                    dbSvc.AddInParameter(cmd, DALConstants.AUTH_FOR_TRAN_ID_PARAM, DbType.String, "1");
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);

                }
                else if (_lookUPSearch.CMO_DOCTOR == "EMPLOYER_OPD_NEW" || _lookUPSearch.CMO_DOCTOR == "EMPLOYER_OPD_CMP_NEW")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PATIENT_TYPE_ID", DbType.String, "2");
                    dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, "ALL");
                    dbSvc.AddInParameter(cmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);

                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERALLETTERS")
                {
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                    dbSvc.AddInParameter(cmd, "@IP_TPA_ID", DbType.Int32, _lookUPSearch.PreConditon[4]);
                    dbSvc.AddInParameter(cmd, "@IP_UMR_NO", DbType.String, _lookUPSearch.PreConditon[5]);
                    dbSvc.AddInParameter(cmd, "@IP_PATIENT_COVERAGE_ID", DbType.Int32, _lookUPSearch.PreConditon[7]);

                }
                else
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);




                }

                if (_lookUPSearch.FLAG != "")
                {
                    if (_lookUPSearch.CMO_DOCTOR == "PASDIAGNOSIS_NEW")
                    {

                    }
                    else
                    {
                        if (_lookUPSearch.CMO_DOCTOR != "EMPLOYER_OPD_NEW" && _lookUPSearch.CMO_DOCTOR != "EMPLOYER_OPD_CMP_NEW")
                        {
                            dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.FLAG);
                        }
                    }
                }


                dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet _cBase = dbSvc.ExecuteDataSet(cmd);
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_IPPatients_Info_LOOKUP").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public List<object> GetLookUpRSearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                string SP_NAME = "";
                if (_lookUPSearch.CMO_DOCTOR == "REFERALS_NEW")
                {
                    SP_NAME = "PR_GETALL_LOOKUP_REFERALS";
                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERAL_SRC_NEW") { SP_NAME = "PR_GET_REFERAL_CATEGORY_SOURCE_DTLS"; }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERAL_TO_NEW") { SP_NAME = "PR_GETALL_REFERED_TO_DTLS"; }
                else if (_lookUPSearch.CMO_DOCTOR == "AREA_NEW_NEW") { SP_NAME = "PR_GET_CSC_DETAILS"; }
                else if (_lookUPSearch.CMO_DOCTOR == "PASDIAGNOSIS_NEW") { SP_NAME = "PR_GETALL_DIAGNOSIS_LOOKUP"; }
                else if (_lookUPSearch.CMO_DOCTOR == "AUTHORIZATION_NEW1") { SP_NAME = "PR_GET_LOOKUP_AUTH"; }
                else if (_lookUPSearch.CMO_DOCTOR == "AUTHORIZATIONBYTRANID_NEW") { SP_NAME = "PR_GET_LOOKUP_AUTH"; }
                else if (_lookUPSearch.CMO_DOCTOR == "EMPLOYER_OPD_NEW") { SP_NAME = "PR_GETALL_EMPLOYERS_OPD"; }
                else if (_lookUPSearch.CMO_DOCTOR == "EMPLOYER_OPD_CMP_NEW") { SP_NAME = "PR_GETALL_EMPLOYERS_OPD_CMP"; }
                else if (_lookUPSearch.CMO_DOCTOR == "APPOINTMENTSREG_NEW1") { SP_NAME = "PR_GETALL_APPOINTMENTS_NEW"; }




                else { SP_NAME = "PR_GETALL_DOCTORS"; }

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SP_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, _lookUPSearch.COLUMN_NAME);





                if (_lookUPSearch.CMO_DOCTOR == "AUTHORIZATION_NEW1")
                {
                    dBase.AddInParameter(dbCmd, DALConstants.AUTH_SOURCE_ID_PARAM, DbType.String, "0");

                    dBase.AddInParameter(dbCmd, DALConstants.AUTH_FOR_TRAN_ID_PARAM, DbType.String, "2");

                    dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);

                }
                if (_lookUPSearch.CMO_DOCTOR == "AUTHORIZATIONBYTRANID_NEW")
                {
                    dBase.AddInParameter(dbCmd, DALConstants.AUTH_SOURCE_ID_PARAM, DbType.String, "0");
                    dBase.AddInParameter(dbCmd, DALConstants.AUTH_FOR_TRAN_ID_PARAM, DbType.String, "1");
                    dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);

                }

                if (_lookUPSearch.CMO_DOCTOR == "EMPLOYER_OPD_NEW" || _lookUPSearch.CMO_DOCTOR == "EMPLOYER_OPD_CMP_NEW")
                {
                    dBase.AddInParameter(dbCmd, "@IP_PATIENT_TYPE_ID", DbType.String, _lookUPSearch.PreConditon[2]);
                    dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, "ALL");
                    dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);

                }



                if (_lookUPSearch.CMO_DOCTOR == "APPOINTMENTSREG_NEW1") { dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, "RCN"); }




                if (_lookUPSearch.CMO_DOCTOR == "REFERALS_NEW")
                {
                    dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    dBase.AddInParameter(dbCmd, "@IP_REFRL_SRC_ID", DbType.String, _lookUPSearch.PreConditon[0]);

                }
                else if (_lookUPSearch.CMO_DOCTOR == "PASDIAGNOSIS_NEW")
                {
                    dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);

                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERAL_SRC_NEW")
                {
                    dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                    {
                        dBase.AddInParameter(dbCmd, "@IP_REFERL_TYPE_ID", DbType.Int32, _lookUPSearch.PreConditon[0]);
                        dBase.AddInParameter(dbCmd, "@IP_REFERL_SRC_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                    }
                }
                else if (_lookUPSearch.CMO_DOCTOR == "REFERAL_TO_NEW")
                {
                    dBase.AddInParameter(dbCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    //if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                    //{
                    //    dBase.AddInParameter(dbCmd, "@IP_REFERL_TYPE_ID", DbType.Int32, _lookUPSearch.PreConditon[0]);
                    //    dBase.AddInParameter(dbCmd, "@IP_REFERL_SRC_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                    //}
                }
                else if (_lookUPSearch.CMO_DOCTOR == "AREA_NEW_NEW")
                {

                    dBase.AddInParameter(dbCmd, "@IP_STATE_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                    //if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                    //{
                    //    dBase.AddInParameter(dbCmd, "@IP_REFERL_TYPE_ID", DbType.Int32, _lookUPSearch.PreConditon[0]);
                    //    dBase.AddInParameter(dbCmd, "@IP_REFERL_SRC_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                    //}
                }

                else
                {
                    if (!string.IsNullOrEmpty(_lookUPSearch.SORTORDER))
                    {
                        if (_lookUPSearch.CMO_DOCTOR != "AUTHORIZATION_NEW1" && _lookUPSearch.CMO_DOCTOR != "EMPLOYER_OPD_NEW"
                            && _lookUPSearch.CMO_DOCTOR != "EMPLOYER_OPD_CMP_NEW" && _lookUPSearch.CMO_DOCTOR != "AUTHORIZATIONBYTRANID_NEW" && _lookUPSearch.CMO_DOCTOR != "APPOINTMENTSREG_NEW1")
                        {
                            dBase.AddInParameter(dbCmd, "@IP_ORDER_BY", DbType.String, _lookUPSearch.SORTORDER);

                            dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                        }
                    }
                }



                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                {
                    dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.REPORTFILTERCRETERIA))
                {
                    if (_lookUPSearch.REPORTFILTERCRETERIA != "UD")
                    {
                        dBase.AddInParameter(dbCmd, "@IP_REPORT_FLAG", DbType.String, _lookUPSearch.REPORTFILTERCRETERIA);
                    }
                }


                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, 1);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, 1);

                DataSet ds = dBase.ExecuteDataSet(dbCmd);
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
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUpRSearchData").Name;
                //ErrorLoger.InsertErrorLogger(ex, 806, 1);
                return null;
            }
        }


        public CollectionBase GetLookUPSearch_PReregistrationData(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_FO_PRE_REG_LOOKUP_AUTO);

                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARAM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OP_COUNT_PARM, DbType.Int32, 8);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(PReregistrationlookupDataCollection);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OP_COUNT_PARM));
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch_PROData").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase PReregistrationlookupDataCollection(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection objcoll = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration objacn = new PatientRegistration();
                    objacn.PRE_REG_ID = !DBNull.Value.Equals(reader[DALConstants.PRE_REG_ID_COL]) ? Convert.ToInt32(reader[DALConstants.PRE_REG_ID_COL]) : 0;
                    objacn.PRE_REG_NO = reader[DALConstants.PRE_REG_NO_COL].ToString(); //!DBNull.Value.Equals(reader[DALConstants.PRE_REG_NO_COL]) ? Convert.ToString(reader[DALConstants.PRE_REG_NO_COL]) : string.Empty;
                    objacn.DISPLAY_NAME = reader[DALConstants.DISPLAY_NAME_COLP].ToString(); //!DBNull.Value.Equals(reader[DALConstants.DISPLAY_NAME_COLP]) ? Convert.ToString(reader[DALConstants.DISPLAY_NAME_COL]) : string.Empty;
                    objacn.PRE_REG_DT = reader[DALConstants.PRE_REG_DT_COL].ToString();
                    objacn.MOBILE_NO = reader[DALConstants.MOBILE_NO_COL].ToString();
                    objacn.APT_PAT_ID = !DBNull.Value.Equals(reader["APT_PAT_ID"]) ? Convert.ToInt32(reader["APT_PAT_ID"]) : 0;
                    objcoll.Add(objacn);
                }
                return objcoll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;

            }
        }

        public CollectionBase GetEmergencyFlagExist(EzHms.ModelEntity.PatientRegistration _objModel)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_EMERGENCY_FLAG");
                dBase.AddInParameter(dbCmd, "IP_FLAG", DbType.String, _objModel.FLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateGetEmergencyCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateGetEmergencyCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            return null;
        }
        public CollectionBase GenerateGetEmergencyCollection(IDataReader returnData)
        {
            PatientRegistrationCollection _coll = new PatientRegistrationCollection();
            EzHms.ModelEntity.PatientRegistration _objModel = null;
            try
            {
                while (returnData.Read())
                {
                    _objModel = new EzHms.ModelEntity.PatientRegistration();
                    _objModel.EXIST = !DBNull.Value.Equals(returnData["EXIST"]) ? (returnData["EXIST"]).ToString() : "0";
                    _objModel.SLOT1 = !DBNull.Value.Equals(returnData["SLOT1"]) ? (returnData["SLOT1"]).ToString() : "0";
                    _objModel.SLOT2 = !DBNull.Value.Equals(returnData["SLOT2"]) ? (returnData["SLOT2"]).ToString() : "0";
                    _objModel.SLOT3 = !DBNull.Value.Equals(returnData["SLOT3"]) ? (returnData["SLOT3"]).ToString() : "0";
                    _coll.Add(_objModel);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateGetEmergencyCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            finally
            {
                _objModel = null;
            }
            return _coll;
        }
        public CollectionBase GetLookUpSearchData(PatientRegistration _patRegistration, EzHms.ModelEntity.LookUpSearch _lookupSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_PR_GET_VW_OP_PATIENT_ENQ_DET);
                //dbSvc.AddInParameter(dbCmd, DALConstants.PageNum, DbType.Int32, _lookupSearch.CURRENT_PAGE);
                //dbSvc.AddInParameter(dbCmd, DALConstants.PageSize, DbType.Int32, _lookupSearch.PAGE_SIZE);
                dbSvc.AddInParameter(dbCmd, DALConstants.IP_FLAG_PARM, DbType.String, _patRegistration.FLAG);
                dbSvc.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookupSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookupSearch.PAGE_SIZE);
                dbSvc.AddInParameter(dbCmd, DALConstants.UMR_NO_PARM, DbType.String, _patRegistration.UMR_NO);
                dbSvc.AddInParameter(dbCmd, DALConstants.PATIENT_NAME_PARM, DbType.String, _patRegistration.PAT_NAME);
                dbSvc.AddInParameter(dbCmd, DALConstants.ADDRESS1_PARM, DbType.String, _patRegistration.ADDRESS);
                dbSvc.AddInParameter(dbCmd, DALConstants.CONSULTATION_NO_PARM, DbType.String, _patRegistration.CONSULTETION_NO);
                dbSvc.AddInParameter(dbCmd, DALConstants.DOC_NAME_PARM, DbType.String, _patRegistration.Consultantname);
                dbSvc.AddInParameter(dbCmd, DALConstants.GENDER_PARM, DbType.String, _patRegistration.GENDER);
                dbSvc.AddInParameter(dbCmd, DALConstants.CITYNAME_PARM, DbType.String, _patRegistration.CITY);
                dbSvc.AddInParameter(dbCmd, DALConstants.REGISTRATION_NO_PARM, DbType.String, _patRegistration.REGNO);
                dbSvc.AddInParameter(dbCmd, DALConstants.REGISTRATION_DT_PARM, DbType.String, _patRegistration.REGISTRATION_DT);
                dbSvc.AddInParameter(dbCmd, DALConstants.VISIT_TYPE_PARM, DbType.String, _patRegistration.VISIT_TYPE);
                dbSvc.AddInParameter(dbCmd, DALConstants.PHONE_PARM, DbType.String, _patRegistration.MOBILE_NO);

                dbSvc.AddInParameter(dbCmd, DALConstants.FROM_DT_PARAM, DbType.String, _patRegistration.FROM_DATE);
                dbSvc.AddInParameter(dbCmd, DALConstants.TO_DT_PARAM, DbType.String, _patRegistration.TO_DATE);
                dbSvc.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                GenerateCollectionReader reader = new GenerateCollectionReader(Get_Patient_Enquiry_Info_Coll);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, reader);
                _total_records = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUpSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 802, 1);
                return null;
            }
        }
        private CollectionBase Get_Patient_Enquiry_Info_Coll(IDataReader returnData)
        {
            try
            {
                if (this._collection == null)
                    this._collection = new PatientRegistrationCollection();
                //if (this._empCollection == null)
                //this._empCollection = new patEmpInfoCollection();
                while (returnData.Read())
                {
                    PatientRegistration patregistration = new PatientRegistration();
                    patregistration.UMR_NO = returnData[DALConstants.UMR_NO_COL].ToString();
                    patregistration.REGNO = returnData[DALConstants.REG_NO_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PATIENT_NAME_COL].ToString()))
                        patregistration.PAT_NAME = returnData[DALConstants.PATIENT_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.ADRS_COL].ToString()))
                        patregistration.ADDRESS = returnData[DALConstants.ADRS_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.CONSULTATION_NO_COL].ToString()))
                        patregistration.CONSULTETION_NO = returnData[DALConstants.CONSULTATION_NO_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.DOC_NAME_COL].ToString()))
                        patregistration.Consultantname = returnData[DALConstants.DOC_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.GENDER_COL].ToString()))
                        patregistration.GENDER = returnData[DALConstants.GENDER_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.CITY_NAME_COL].ToString()))
                        patregistration.CITY = returnData[DALConstants.CITY_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.VISIT_TYPE_COL].ToString()))
                        patregistration.VISIT_TYPE = returnData[DALConstants.VISIT_TYPE_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PHONE1_COL].ToString()))
                        patregistration.MOBILE_NO = returnData[DALConstants.PHONE1_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.REG_DT_COL].ToString()))
                        patregistration.REGISTRATION_DT = returnData[DALConstants.REG_DT_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        patregistration.RES_PERSON_NAME = returnData[DALConstants.RES_PERSON_NAME_COL].ToString();
                    _collection.Add(patregistration);

                }

                return (CollectionBase)this._collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patient_Enquiry_Info_Coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_IP_Patients_Info(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                string _str_flag = string.Empty;
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                {
                    if (_lookUPSearch.PreConditon[0] != "")
                    {
                        // AdmissionFlags _flag_val = (AdmissionFlags)_lookUPSearch.PreConditon[0];
                        // _str_flag = ConverEnumToString.GetStringValue(_flag_val);
                        _str_flag = _lookUPSearch.PreConditon[0].ToString();
                    }
                }
                if (_str_flag == "WOMEN")
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_IP_PATIENTS_WOMENS");
                else
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_IP_PATIENTINFO);

                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);

                //if (string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                //{
                dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                //}
                if (_lookUPSearch.SERVICE_TYPE_ID.ToString() != "")
                    dbSvc.AddInParameter(cmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, _lookUPSearch.SERVICE_TYPE_ID);

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);

                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                {
                    if (Convert.ToString(_lookUPSearch.PreConditon[0]) != string.Empty)
                    {
                        //AdmissionFlags _flag_val = (AdmissionFlags)_lookUPSearch.PreConditon[0];
                        //string _str_flag_val = ConverEnumToString.GetStringValue(_flag_val);
                        string _str_flag_val = _lookUPSearch.PreConditon[0].ToString();
                        dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, _str_flag_val);
                    }

                    if (_lookUPSearch.PreConditon.Count > 2 && Convert.ToString(_lookUPSearch.PreConditon[1]) != "")
                    {
                        dbSvc.AddInParameter(cmd, DALConstants.FROM_DT_PARAM, DbType.String, Convert.ToString(_lookUPSearch.PreConditon[1]));
                        dbSvc.AddInParameter(cmd, DALConstants.TO_DT_PARAM, DbType.String, Convert.ToString(_lookUPSearch.PreConditon[2]));

                    }
                    if (_lookUPSearch.PreConditon.Count > 3 && Convert.ToString(_lookUPSearch.PreConditon[3]) != "")
                    {
                        dbSvc.AddInParameter(cmd, DALConstants.UMR_NO_PARM, DbType.String, _lookUPSearch.PreConditon[3].ToString());
                    }


                }

                //dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                //dbSvc.AddOutParameter(cmd, , DbType.Int32, 100);
                dbSvc.AddOutParameter(cmd, "@OP_COUNT", DbType.Int32, 100);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_IP_Patients_coll);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                object count = dbSvc.GetParameterValue(cmd, "@OP_COUNT");
                _total_records = count != DBNull.Value ? Convert.ToInt32(count) : 0; //Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_IP_Patients_Info").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        private CollectionBase Get_IP_Patients_coll(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration _registration = new PatientRegistration();
                    if (reader[DALConstants.ADMN_NO_COL].ToString() != string.Empty)
                        _registration.ADMN_NO = reader[DALConstants.ADMN_NO_COL].ToString();

                    if (reader[DALConstants.PATIENT_TYPE_NAME_COL].ToString() != string.Empty)
                        _registration.PATIENT_TYPE = reader[DALConstants.PATIENT_TYPE_NAME_COL].ToString();

                    if (reader[DALConstants.WARD_NAME_COL].ToString() != string.Empty)
                        _registration.WARD_NAME = reader[DALConstants.WARD_NAME_COL].ToString();

                    if (reader[DALConstants.ADMN_DT_COL].ToString() != string.Empty)
                        _registration.ADMN_DT = !DBNull.Value.Equals(reader[DALConstants.ADMN_DT_COL]) ? reader[DALConstants.ADMN_DT_COL].ToString() : string.Empty;
                    if (reader[DALConstants.ROOM_NAME_COL].ToString() != string.Empty)
                        _registration.ROOM_NAME = reader[DALConstants.ROOM_NAME_COL].ToString();

                    if (reader[DALConstants.BED_NAME_COL].ToString() != string.Empty)
                        _registration.BED_NAME = reader[DALConstants.BED_NAME_COL].ToString();

                    if (reader[DALConstants.CONSULTANT_COL].ToString() != string.Empty)
                        _registration.CONSULTANT = reader[DALConstants.CONSULTANT_COL].ToString();

                    if (reader[DALConstants.PATIENT_ID_COL].ToString() != string.Empty)
                        _registration.PATIENT_ID = reader[DALConstants.PATIENT_ID_COL].ToString();

                    if (reader[DALConstants.UMR_NO_COL].ToString() != string.Empty)
                        _registration.UMR_NO = reader[DALConstants.UMR_NO_COL].ToString();

                    if (reader[DALConstants.DISPLAY_NAME_COL].ToString() != string.Empty)
                        _registration.DISPLAY_NAME = reader[DALConstants.DISPLAY_NAME_COL].ToString();

                    if (reader[DALConstants.AGE_COL].ToString() != string.Empty)
                        _registration.AGE = reader[DALConstants.AGE_COL].ToString();
                    if (reader[DALConstants.DISPLAY_AGE_COL].ToString() != string.Empty)
                        _registration.DISPLAY_AGE = reader[DALConstants.DISPLAY_AGE_COL].ToString();
                    if (reader[DALConstants.DOB_COL].ToString() != string.Empty)
                        _registration.DOB = reader[DALConstants.DOB_COL].ToString();

                    //if (reader[DALConstants.GENDER_COL].ToString() != string.Empty)
                    //    _registration.GENDER = reader[DALConstants.GENDER_COL].ToString();

                    if (reader[DALConstants.REG_NO_COL].ToString() != string.Empty)
                        _registration.REG_NO = reader[DALConstants.REG_NO_COL].ToString();

                    if (reader[DALConstants.REGISTRATION_DT_COL].ToString() != string.Empty)
                        _registration.REGISTRATION_DT = reader[DALConstants.REGISTRATION_DT_COL].ToString();

                    if (reader[DALConstants.REG_EXPIRY_DT].ToString() != string.Empty)
                        _registration.REG_EXPIRY_DT = reader[DALConstants.REG_EXPIRY_DT].ToString();

                    if (reader[DALConstants.CORPORATE_NAME_COL].ToString() != string.Empty)
                        _registration.CORPORATE_NAME = reader[DALConstants.CORPORATE_NAME_COL].ToString();

                    if (reader[DALConstants.TREATMENT_BY_ID_COL].ToString() != string.Empty)
                        // _registration.TREATMENT_BY_ID = reader[DALConstants.TREATMENT_BY_ID_COL].ToString();

                        if (reader[DALConstants.ROOM_ID_COL].ToString() != string.Empty)
                            _registration.ROOM_ID = Convert.ToInt32(reader[DALConstants.ROOM_ID_COL].ToString());

                    if (reader[DALConstants.WARD_ID_COL].ToString() != string.Empty)
                        _registration.WARD_ID = Convert.ToInt32(reader[DALConstants.WARD_ID_COL].ToString());

                    if (reader[DALConstants.WARD_GROUP_ID_COL].ToString() != string.Empty)
                        _registration.WARD_GROUP_ID = Convert.ToInt32(reader[DALConstants.WARD_GROUP_ID_COL].ToString());

                    if (reader[DALConstants.WARD_GROUP_NAME_COL].ToString() != string.Empty)
                        _registration.WARD_GROUP_NAME = reader[DALConstants.WARD_GROUP_NAME_COL].ToString();

                    if (reader[DALConstants.BED_ID_COL].ToString() != string.Empty)
                        _registration.BED_ID = Convert.ToInt32(reader[DALConstants.BED_ID_COL].ToString());

                    if (reader[DALConstants.ADMN_ID_COL].ToString() != string.Empty)
                        _registration.ADMN_ID = Convert.ToInt32(reader[DALConstants.ADMN_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.RES_PERSON_NAME = reader[DALConstants.RES_PERSON_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.TREATED_WARD_ID_COL].ToString()))
                    { }
                    //  _registration.TREATED_WARD_ID = reader[DALConstants.TREATED_WARD_ID_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.TREATED_WARD_NAME_COL].ToString()))
                    { }
                    //  _registration.TREATED_WARD_NAME = reader[DALConstants.TREATED_WARD_NAME_COL].ToString();



                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.TITLE = reader[DALConstants.TITLEDESC_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.MARITAL_STATUS = reader[DALConstants.MARTITALDESC_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.BLOOD_GROUP = reader[DALConstants.BLOODGROUPDESC_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.MOTHER_MAIDEN_NAME = reader[DALConstants.MOTHER_MAIDEN_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.CREDIT_LIMIT_AMT_COL].ToString()))
                        _registration.CREDIT_LIMIT_AMT = reader[DALConstants.CREDIT_LIMIT_AMT_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.CREDIT_ORG_ID_COL].ToString()))
                        _registration.CREDIT_ORG_ID = Convert.ToInt32(reader[DALConstants.CREDIT_ORG_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.BILL_AMOUNT_COL].ToString()))
                        _registration.BILL_AMOUNT = float.Parse(reader[DALConstants.BILL_AMOUNT_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.BILL_ID_COL].ToString()))
                        _registration.BILL_ID = Convert.ToInt32(reader[DALConstants.BILL_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.ADVANCE_AMOUNT_COL].ToString()))
                        _registration.ADVANCE_AMOUNT = float.Parse(reader[DALConstants.ADVANCE_AMOUNT_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.DUE_AMOUNT_COL].ToString()))
                        _registration.DUE_AMOUNT = float.Parse(reader[DALConstants.DUE_AMOUNT_COL].ToString());
                    if (!string.IsNullOrEmpty(reader[DALConstants.PAID_AMOUNT_COL].ToString()))
                        _registration.PAID_AMOUNT = float.Parse(reader[DALConstants.PAID_AMOUNT_COL].ToString());

                    _registration.LOCK_STATUS = reader[DALConstants.LOCK_STATUS_COL].ToString();
                    _registration.UMR_LOCK = reader[DALConstants.UMR_LOCK_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.WARD_CREDIT_LIMIT_AMT_COL].ToString()))
                        _registration.WARD_CREDIT_LIMIT = reader[DALConstants.WARD_CREDIT_LIMIT_AMT_COL].ToString();

                    // _registration.POST_DISCOUNT = !DBNull.Value.Equals(reader[DALConstants.POST_DISCOUNT_COL]) ? Convert.ToString(reader[DALConstants.POST_DISCOUNT_COL]) : string.Empty;
                    if (!string.IsNullOrEmpty(reader[DALConstants.EMP_NAME_COL].ToString()))
                        _registration.EMP_NAME = reader[DALConstants.EMP_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.EMPLOYEE_ID_COL].ToString()))
                        _registration.EMPLOYEE_ID = reader[DALConstants.EMPLOYEE_ID_COL].ToString();


                    if (!string.IsNullOrEmpty(reader[DALConstants.RELATION_SHIP_NAME_COL].ToString()))
                        _registration.RELATION_SHIP_NAME = reader[DALConstants.RELATION_SHIP_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.RELATIONSHIP_ID_COL].ToString()))
                        _registration.RELATIONSHIP_ID = reader[DALConstants.RELATIONSHIP_ID_COL].ToString();
                    if (!string.IsNullOrEmpty(reader["RELATION_ADDRESS"].ToString()))
                        _registration.RELATION_ADDRESS = reader["RELATION_ADDRESS"].ToString();
                    if (!string.IsNullOrEmpty(reader["REL_MOBILE_PHONE"].ToString()))
                        _registration.REL_MOBILE_PHONE = reader["REL_MOBILE_PHONE"].ToString();
                    if (!string.IsNullOrEmpty(reader["REL_HOME_PHONE"].ToString()))
                        _registration.REL_HOME_PHONE = reader["REL_HOME_PHONE"].ToString();

                    if (!string.IsNullOrEmpty(reader["CONSULTANT_CD"].ToString()))
                        // _registration.CONSULTANT_CD = reader["CONSULTANT_CD"].ToString();

                        if (!string.IsNullOrEmpty(reader[DALConstants.COLOUR_ID_COL].ToString()))
                            //  _registration.COLOUR_ID = reader[DALConstants.COLOUR_ID_COL].ToString();

                            _registration.BILL_NO = !DBNull.Value.Equals(reader[DALConstants.BILL_NO_COL]) ? Convert.ToString(reader[DALConstants.BILL_NO_COL]) : string.Empty;
                    _registration.BILL_DT = !DBNull.Value.Equals(reader[DALConstants.BILL_DT_COL]) ? Convert.ToString(reader[DALConstants.BILL_DT_COL]) : string.Empty;
                    //_registration.REG_PATIENT_TYPE_ID = !DBNull.Value.Equals(reader[DALConstants.REG_PATIENT_TYPE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.REG_PATIENT_TYPE_ID_COL]) : 0;
                    //_registration.REG_PATIENT_TYPE = !DBNull.Value.Equals(reader[DALConstants.REG_PATIENT_TYPE_COL]) ? Convert.ToString(reader[DALConstants.REG_PATIENT_TYPE_COL]) : string.Empty;
                    //_registration.REG_REFERENCE_TYPE_ID = !DBNull.Value.Equals(reader[DALConstants.REG_REFERENCE_TYPE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.REG_REFERENCE_TYPE_ID_COL]) : 0;
                    //_registration.REG_COMPANY_NAME = !DBNull.Value.Equals(reader[DALConstants.REG_COMPANY_NAME_COL]) ? Convert.ToString(reader[DALConstants.REG_COMPANY_NAME_COL]) : string.Empty;
                    //_registration.INDENT_STATUS = !DBNull.Value.Equals(reader[DALConstants.INDENT_STATUS_COL]) ? Convert.ToString(reader[DALConstants.INDENT_STATUS_COL]) : string.Empty;
                    //_registration.DEPARTMENT_ID = !DBNull.Value.Equals(reader["DEPARTMENT_ID"]) ? Convert.ToInt32(reader["DEPARTMENT_ID"]) : 0;
                    //_registration.DEPARTMENT_NAME = !DBNull.Value.Equals(reader["DEPARTMENT_NAME"]) ? Convert.ToString(reader["DEPARTMENT_NAME"]) : string.Empty;
                    //_registration.DUTY_DOCTOR_ID = !DBNull.Value.Equals(reader[DALConstants.DUTY_DOCTOR_ID_COL]) ? Convert.ToString(reader[DALConstants.DUTY_DOCTOR_ID_COL]) : "0";
                    //_registration.DUTY_DOCTOR_NAME = !DBNull.Value.Equals(reader[DALConstants.DUTY_DOCTOR_NAME_COL]) ? Convert.ToString(reader[DALConstants.DUTY_DOCTOR_NAME_COL]) : string.Empty;
                    //_registration.DUTY_DOC_DEPT_ID = !DBNull.Value.Equals(reader[DALConstants.DUTY_DOC_DEPT_ID_COL]) ? Convert.ToString(reader[DALConstants.DUTY_DOC_DEPT_ID_COL]) : "0";
                    //_registration.DUTY_DOC_DEPT_NAME = !DBNull.Value.Equals(reader[DALConstants.DUTY_DOC_DEPT_NAME_COL]) ? Convert.ToString(reader[DALConstants.DUTY_DOC_DEPT_NAME_COL]) : string.Empty;
                    if (reader[DALConstants.ADMN_DT_COL].ToString() != string.Empty)
                        _registration.ADMN_DT = !DBNull.Value.Equals(reader[DALConstants.ADMN_DT_COL]) ? reader[DALConstants.ADMN_DT_COL].ToString() : string.Empty;
                    // _registration.ORDR_DOCTOR_IDS = !DBNull.Value.Equals(reader[DALConstants.SECONDARY_DOCTOR_ID_COL]) ? Convert.ToString(reader[DALConstants.SECONDARY_DOCTOR_ID_COL]) : string.Empty;
                    // _registration.SECONDARY_DOCTOR_NAME = !DBNull.Value.Equals(reader[DALConstants.SECONDARY_DOCTOR_NAME_COL]) ? Convert.ToString(reader[DALConstants.SECONDARY_DOCTOR_NAME_COL]) : string.Empty;
                    // _registration.SECONDARY_DOC_DEPT_NAME = !DBNull.Value.Equals(reader["SECONDARY_DOC_DEPT_NAME"]) ? Convert.ToString(reader["SECONDARY_DOC_DEPT_NAME"]) : string.Empty;
                    _registration.GENDER_ID = !DBNull.Value.Equals(reader["GENDER_ID"]) ? reader["GENDER_ID"].ToString() : "0";
                    //  _registration.DOCTOR_ID = !DBNull.Value.Equals(reader["TREATMENT_BY_ID"]) ? reader["TREATMENT_BY_ID"].ToString() : "0";
                    // _registration.BED_REV_NO = !DBNull.Value.Equals(reader["BED_REV_NO"]) ? Convert.ToInt32(reader["BED_REV_NO"]) : 0;
                    _collection.Add(_registration);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_IP_Patients_coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetAddressType()
        {
            try
            {
                // CollectionBase cbase = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ADDRESS_TYPES");
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetAddressTypes);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetIPBillDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        CollectionBase GetAddressTypes(IDataReader returnData)
        {
            try
            {
                AddressCollection addrcoll = new AddressCollection();
                AddressMaster objaddr = null;
                while (returnData.Read())
                {
                    objaddr = new AddressMaster();
                    objaddr.ADDR_TYPE_ID = returnData[DALConstants.ADDRESS_TYPE_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.ADDRESS_TYPE_ID_COL]) : 0;
                    objaddr.ADDRESS_TYPE_NAME = returnData[DALConstants.ADDRTYPENAME_COL].ToString();
                    addrcoll.Add(objaddr);
                }
                return addrcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAddressTypes").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }
        public bool InsertRegistrationXml(string xmlstring, string PAT_NO, out int COUNT_PAT_ID, out int COUNT_TRAN_ID, out string bill_no, out int COUNT_CON_BILL_ID,
      int COUNT_OPBILL_BILL_ID, string PATIENT_IMAGE, int REFERENC_ID, string ORDER_ID, string IS_OLD, string IP_RENWEL, int APMNT_PAT_ID, string QUICK_REG,
      int REFERENCE_SOURCE_ID, int REFERAL_DOCTOR_ID, string REFERRED_BY, out int QUICK_BILL_ID, out int patid, out int Tranid, ReceiptMaster _receipt, out string umr_no, out string tran_no, out string reg_no, string appt_type, string hc_det_id, out int reg_id, out int COUNT_REG_ID, out string parallel)
        {
            patid = 0;
            Tranid = 0;
            COUNT_PAT_ID = 0; COUNT_TRAN_ID = 0; QUICK_BILL_ID = 0; bill_no = string.Empty; COUNT_REG_ID = 0;
            umr_no = "";
            tran_no = "";
            COUNT_CON_BILL_ID = 0;
            reg_no = string.Empty;
            reg_id = 0;
            parallel = string.Empty;
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dBase = _dbLayer.DBaseFactory;
                string strxml = xmlstring.Replace('$', '"');
                MemoryStream stream = new MemoryStream(System.Text.Encoding.UTF32.GetBytes(strxml));
                System.Data.SqlTypes.SqlXml xml = new System.Data.SqlTypes.SqlXml(stream);
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_PATIENT_REG_XML");
                dBase.AddInParameter(dbCmd, "@XML", DbType.Xml, xml);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, patid);
                dBase.AddInParameter(dbCmd, "@IP_PATIENT_NO", DbType.String, PAT_NO);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT_PAT_ID", DbType.Int32, COUNT_PAT_ID);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT_TRAN_ID", DbType.Int32, COUNT_TRAN_ID);
                if (hc_det_id != "0")
                {
                    dBase.AddInParameter(dbCmd, "@IP_HEALTH_CARD_DET_ID", DbType.Int32, Convert.ToInt32(hc_det_id));
                }
                dBase.AddOutParameter(dbCmd, "@OP_COUNT_CON_BILL_ID", DbType.Int32, COUNT_CON_BILL_ID);
                // dBase.AddOutParameter(dbCmd, "@OP_COUNT_OPBILL_BILL_ID", DbType.Int32, COUNT_OPBILL_BILL_ID);
                dBase.AddInParameter(dbCmd, "@IP_PATIENT_IMAGE", DbType.Binary, _receipt.PATIENT_IMAGE_XML);
                //  dBase.AddInParameter(dbCmd, "@IP_REFERENC_ID", DbType.Int32, REFERENC_ID);
                //  dBase.AddInParameter(dbCmd, "@IP_ORDER_ID", DbType.String, ORDER_ID);
                dBase.AddInParameter(dbCmd, "@IP_IS_OLD", DbType.String, IS_OLD);
                dBase.AddInParameter(dbCmd, "@IP_RENWEL", DbType.String, IP_RENWEL);
                dBase.AddInParameter(dbCmd, "@IP_APMNT_PAT_ID", DbType.Int32, APMNT_PAT_ID);
                dBase.AddInParameter(dbCmd, "@IP_QUICK_REG", DbType.String, QUICK_REG);
                dBase.AddInParameter(dbCmd, "@IP_REFERENCE_SOURCE_ID", DbType.Int32, REFERENCE_SOURCE_ID);
                dBase.AddInParameter(dbCmd, "@IP_REFERAL_DOCTOR_ID", DbType.Int32, REFERAL_DOCTOR_ID);
                dBase.AddInParameter(dbCmd, "@IP_REFERRED_BY", DbType.String, REFERRED_BY);
                dBase.AddOutParameter(dbCmd, "@OP_QUICK_BILL_ID", DbType.Int32, QUICK_BILL_ID);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT_REG_BILL_NO", DbType.String, 50);
                dBase.AddOutParameter(dbCmd, "@OP_REG_BILL_NO", DbType.String, 50);
                dBase.AddInParameter(dbCmd, "@IP_APPTYPE", DbType.String, appt_type);
                dBase.AddOutParameter(dbCmd, "@OP_REG_ID", DbType.Int32, COUNT_REG_ID);
                dBase.AddOutParameter(dbCmd, "@OP_UMR_NO", DbType.String, 50);
                dBase.AddOutParameter(dbCmd, "@OP_TRAN_NO", DbType.String, 50);
                dBase.AddOutParameter(dbCmd, "@OP_PARALLEL", DbType.String, 50);
                bool val = _dbLayer.ExecuteNonQuery(dbCmd);
                patid = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT_PAT_ID"));
                bill_no = (dBase.GetParameterValue(dbCmd, "@OP_COUNT_REG_BILL_NO")).ToString();
                umr_no = (dBase.GetParameterValue(dbCmd, "@OP_UMR_NO")).ToString();
                tran_no = (dBase.GetParameterValue(dbCmd, "@OP_TRAN_NO")).ToString();
                reg_no = (dBase.GetParameterValue(dbCmd, "@OP_REG_BILL_NO")).ToString();
                reg_id = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_REG_ID"));
                parallel = (dBase.GetParameterValue(dbCmd, "@OP_PARALLEL")).ToString();
                COUNT_CON_BILL_ID = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT_CON_BILL_ID"));
                return val;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertRegXml").Name;
                ErrorLoger.InsertErrorLogger(ex, 1205, 1);
                return false;
            }
        }
        public CollectionBase Get_PatientOptions(MasterOptions _pOptions)
        {
            try
            {

                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                switch (_pOptions)
                {
                    case MasterOptions.DISPLAY_NAME:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_DISPLAYNAMES);
                        break;
                    case MasterOptions.GENDER:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_GENDER);
                        break;
                    case MasterOptions.REFERRAL:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALLREFERRAL);
                        break;
                    case MasterOptions.GRADE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALLGRADES);
                        break;
                    case MasterOptions.RELATIONSHIP:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_RELATIONSHIPS);
                        break;
                    case MasterOptions.ADDRESSTYPE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_ADDERSSTYPESS);
                        break;
                    case MasterOptions.MARITAL_STATUS:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UP_GET_MARITAL_STATUS);
                        break;
                    case MasterOptions.PATIENT_CATEGORY:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_PATIENTCATEGORY);
                        break;
                    case MasterOptions.RESPONSBILITY_PERSON:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_RESPONSBILITYPERSON);
                        break;
                    case MasterOptions.TITLE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TITLE);
                        break;

                    case MasterOptions.NATIONALITY:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_NATIONALITY);
                        break;
                    case MasterOptions.METHOD_OF_COMMUNICATION:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_METHOD_OF_COMMUNICATION);
                        break;
                    case MasterOptions.ETHNICITY:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ETHNICITY);
                        break;
                    case MasterOptions.VISATYPE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_VISATYPE);
                        break;
                    case MasterOptions.LANGUAGE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_LANGUAGE);
                        break;

                    case MasterOptions.PATIENT_TYPE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_PATIENT_TYPES);
                        break;
                    case MasterOptions.AGE_UOM:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_AGE_UOMS);
                        dbSvc.AddInParameter(cmd, DALConstants.AGE_UOM_TYPE_ID_PARM, DbType.Int32, UOM_TYPE.AGE);
                        break;

                    case MasterOptions.PATIENT_CLASS:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_PATIENT_CLASS);
                        break;

                    case MasterOptions.IMAGE_TYPE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_IMAGE_TYPE);
                        break;

                    case MasterOptions.DISPATCH_METHOD:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ALL_DISPATCH_METHODS");
                        break;
                    case MasterOptions.SPECIES:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ALL_SPECIES");
                        break;
                    case MasterOptions.CLINICAL_HISTORY:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CLINICAL_HISTORY");
                        break;


                }

                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                //Add_Data_ToCache(_pOptions.ToString(), _dblayer.ExecuteReaderCommand(cmd, sqlData));
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
                //}
                //return (CollectionBase)_pOptionCache.GetData(_pOptions.ToString());
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_PatientOptions").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetLevelCollection(ServiceDimenssions _dimenssion)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                switch (_dimenssion)
                {

                    case ServiceDimenssions.CONSULTATION_TYPE:
                        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CONSULTATIONTYPES");
                        break;

                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLevelCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 509, 1);
                return null;
            }
        }
        public CollectionBase GetStaff_Dependent(int STAFF_ID, int RELATION_ID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_STAFF_RELATION");

                dBase.AddInParameter(dCmd, "@IP_STAFF_ID", DbType.Int32, STAFF_ID);
                dBase.AddInParameter(dCmd, "@IP_RELATION", DbType.Int32, RELATION_ID);
                IGenerateReaderCollection.GenerateCollectionReader sqlData = new IGenerateReaderCollection.GenerateCollectionReader(GetStaff_DependentColl);
                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetStaff_Dependent").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        private CollectionBase GetStaff_DependentColl(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection creCollection = new PatientRegistrationCollection();
                PatientRegistration cMaster;
                while (returnData.Read())
                {
                    cMaster = new PatientRegistration();

                    if (!string.IsNullOrEmpty(returnData["DOB"].ToString()))
                    {
                        cMaster.empDOB = (returnData["DOB"].ToString());
                    }
                    if (!string.IsNullOrEmpty(returnData["NAME"].ToString()))
                    {
                        cMaster.FIRST_NAME = (returnData["NAME"].ToString());
                    }
                    if (!string.IsNullOrEmpty(returnData["GENDER"].ToString()))
                    {
                        cMaster.GENDER = (returnData["GENDER"].ToString());
                    }
                    if (cMaster.GENDER.Trim() == "1")
                    {
                        cMaster.GENDER = "Male";
                    }
                    else if (cMaster.GENDER.Trim() == "2")
                    {
                        cMaster.GENDER = "Female";
                    }
                    else if (cMaster.GENDER.Trim() == "3")
                    {
                        cMaster.GENDER = "ALL";

                    }

                    if (!string.IsNullOrEmpty(returnData["AGE"].ToString()))
                    {
                        cMaster.AGE = (returnData["AGE"].ToString());
                    }
                    if (!string.IsNullOrEmpty(returnData["EMPLOYEE_DEPENDENTS_ID"].ToString()))
                    {
                        cMaster.DEPENDENT_ID = Convert.ToInt32(returnData["EMPLOYEE_DEPENDENTS_ID"].ToString());
                    }
                    if (!string.IsNullOrEmpty(returnData["EMPLOYEE_ID"].ToString()))
                    {
                        cMaster.EMPLOYEE_ID = (returnData["EMPLOYEE_ID"].ToString());
                    }
                    if (!string.IsNullOrEmpty(returnData["REL_SHIP_ID"].ToString()))
                    {
                        cMaster.REL_SHIP_ID = (returnData["REL_SHIP_ID"].ToString());
                    }
                    if (!string.IsNullOrEmpty(returnData["PATIENT_RELATIONSHIP_NAME"].ToString()))
                    {
                        cMaster.PATIENT_RELATIONSHIP_NAME = (returnData["PATIENT_RELATIONSHIP_NAME"].ToString());
                    }
                    creCollection.Add(cMaster);
                }
                return creCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetStaff_DependentColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase GetPackageConsultation_NEW(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_DOCTORS");
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                }

                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                {
                    string deptid = string.Empty;

                    if (_lookUPSearch.PreConditon.Count > 0 && !string.IsNullOrEmpty(_lookUPSearch.PreConditon[0].ToString()))
                        dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARAM, DbType.String, _lookUPSearch.PreConditon[0]);

                    if (_lookUPSearch.PreConditon.Count > 1 && !string.IsNullOrEmpty(_lookUPSearch.PreConditon[1].ToString()))
                    {
                        deptid = "DEPARTMENT_ID=" + _lookUPSearch.PreConditon[1].ToString();

                        //if (deptid != string.Empty)
                        //    dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, deptid);

                        deptid = _lookUPSearch.PreConditon[1].ToString();
                        if (deptid.StartsWith("D"))
                            dBase.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, Convert.ToInt32(deptid.Substring(6)));
                        else
                            dBase.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, deptid);
                    }
                    if (_lookUPSearch.PreConditon.Count > 2 && !string.IsNullOrEmpty(_lookUPSearch.PreConditon[2].ToString()))
                        dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, _lookUPSearch.PreConditon[2]);

                    if (_lookUPSearch.PreConditon.Count > 3 && !string.IsNullOrEmpty(_lookUPSearch.PreConditon[3].ToString()))
                        dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.String, _lookUPSearch.PreConditon[3]);

                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                {
                    dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                }
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);

                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);

                GenerateCollectionReader reader = new GenerateCollectionReader(GetPackageConsultationColl);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, reader);
                _total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUpSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 806, 1);
                return null;
            }
        }
        public CollectionBase GetPackageConsultationColl(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection _drCollection = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration _drObject = new PatientRegistration();
                    _drObject.DISPLAY_NAME = reader[DALConstants.DISPLAY_NAME_COL].ToString();
                    _drObject.ID = reader[DALConstants.ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.ID_COL]) : 0;
                    _drObject.DOCTOR_CD = reader[DALConstants.DOCTOR_CD_COL].ToString();
                    _drObject.DEPARTMENT_DESC = reader[DALConstants.DEPARTMENT_DESC_COL].ToString();
                    if (reader[DALConstants.DEPARTMENT_ID_COL].ToString() != string.Empty)
                        _drObject.DEPARTMENT_ID = Convert.ToInt32(reader[DALConstants.DEPARTMENT_ID_COL].ToString());
                    _drObject.ADDRESS1 = reader[DALConstants.ADDRESS_COL].ToString();
                    _drObject.MOBILE_PHONE = reader[DALConstants.MOBILE_PHONE_COL].ToString();

                    _drCollection.Add(_drObject);
                }
                return _drCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUpSearchDataColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public bool SavePkgConsultationsXML(string _xml)
        {

            bool _status = false;
            int _transactin_id = 0;
            int _op_bill_done = 0;
            DataAccessLayer _dbLayer = new DataAccessLayer();
            DbCommand cmd = _dbLayer.SetCommandType(System.Data.CommandType.StoredProcedure, "PR_INSUPD_FO_BILL_XML_ROOT");
            try
            {
                _dbLayer.AddInParameter(cmd, DALConstants.XML_DATA_PARM, DbType.String, _xml);
                _dbLayer.AddOutParameter(cmd, DALConstants.OP_COUNT_PARM, DbType.Int32, _transactin_id);
                _dbLayer.AddOutParameter(cmd, "@OP_BILL_DONE", DbType.Int32, _op_bill_done);
                _status = _dbLayer.ExecuteNonQuery(cmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SavePkgConsultationsXML").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return _status;
        }
        public CollectionBase Get_Referrals(LookUpSearch lookup, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_REFERRALS);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, lookup.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, lookup.PAGE_SIZE);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                if (!string.IsNullOrEmpty(lookup.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, lookup.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, lookup.COLUMN_NAME);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAllCollection);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Referrals").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        protected CollectionBase GenerateAllCollection(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration _element = new PatientRegistration();
                    _element.ID = Convert.ToInt32(returnData[DALConstants.ID_COL].ToString());
                    _element.CODE = returnData[DALConstants.CODE_COL].ToString();
                    _element.DESC = returnData[DALConstants.DESC_COL_VAL].ToString();
                    _element.NAME = returnData[DALConstants.DESC_COL_VAL].ToString();
                    _collection.Add(_element);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateAllCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_Consultants()
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_CONSULTANT);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Consultants").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Allergies(LookUpSearch _lookUPSearch, out int totala_records)
        {
            totala_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_ALLERGIES);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_AllergiesCollection);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                totala_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Allergies").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        private CollectionBase Get_AllergiesCollection(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration _element = new PatientRegistration();
                    _element.ID = Convert.ToInt32(returnData[DALConstants.ID_COL].ToString());
                    _element.CODE = returnData[DALConstants.CODE_COL].ToString();
                    _element.DESCRIPTION = returnData[DALConstants.DESC_COL_VAL].ToString();
                    _collection.Add(_element);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_AllergiesCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);

            }
            return null;
        }
        public CollectionBase Get_Educations(LookUpSearch _lookUPSearch, out int total_records)
        {
            total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_EDUCATIONS);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                /* if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                 {
                     dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                     dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                 }
                 if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                     dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);*/
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAllCollection);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Educations").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_AddressTypes(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_ADDERSSTYPESS);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAllCollection);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                if (dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM) != DBNull.Value)
                    _total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_AddressTypes").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Nationalities(LookUpSearch _lookUPSearch, out int total_rec)
        {
            total_rec = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_NATIONALITIES);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateNationalityCollection);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);

                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Nationalities").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        protected CollectionBase GenerateNationalityCollection(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration _element = new PatientRegistration();
                    _element.NATIONALITY_ID = returnData[DALConstants.ID_COL].ToString();
                    _element.NATIONALITY_CD = returnData[DALConstants.CODE_COL].ToString();
                    _element.NATIONALITY_DESC = returnData[DALConstants.DESC_COL_VAL].ToString();
                    _element.NATIONALITY_NAME = returnData[DALConstants.NAME_COL].ToString();
                    _element.TOT_RECORD_CNT = returnData["TOT_RECORD_CNT"].ToString();
                    _collection.Add(_element);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateNationalityCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_Employers(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                string SP_NAME = "PR_GETALL_EMPLOYERS";
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                {
                    if (_lookUPSearch.PreConditon[0].ToString() == "AUTH") { SP_NAME = "PR_GETALL_AUTHORIZATION"; }
                }
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, SP_NAME);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                // dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
                //if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                //{
                dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                //}
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, _lookUPSearch.PreConditon[0]);
                    if (_lookUPSearch.PreConditon[0].ToString() == "AUTH")
                    {
                        dbSvc.AddInParameter(cmd, "@IP_TYPE", DbType.String, "O");
                    }
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 1)
                {
                    if (!string.IsNullOrEmpty(_lookUPSearch.PreConditon[1].ToString()))
                    {
                        dbSvc.AddInParameter(cmd, "@IP_TPA_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                    }
                }
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 2)
                {
                    dbSvc.AddInParameter(cmd, "@IP_PATIENT_TYPE_ID", DbType.Int32, _lookUPSearch.PreConditon[2]);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.REPORTFILTERCRETERIA))
                {
                    dbSvc.AddInParameter(cmd, DALConstants.REPORT_FLAG, DbType.String, _lookUPSearch.REPORTFILTERCRETERIA);
                }
                dbSvc.AddInParameter(cmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUPSearch.EVENTFLAG);
                //dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateEmployerAllCollection);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                //_total_records = dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM).ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM)) : 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Employers").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetEligibility(string age, string gender, string maritalstatus, string umr_no, string company_id)
        {
            DataAccessLayer dblayer = new DataAccessLayer();
            Database dbase = dblayer.DBaseFactory;
            DbCommand dcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_COMPANY_PATIENT_DEPDNT_RULE_UMR_NO ");
            try
            {
                dbase.AddInParameter(dcmd, "@IP_AGE", DbType.String, age);
                dbase.AddInParameter(dcmd, "@IP_GENDER_ID", DbType.String, gender);
                dbase.AddInParameter(dcmd, "@IP_MARITAL_STATUS_ID", DbType.String, maritalstatus);
                dbase.AddInParameter(dcmd, "@IP_UMR_NO", DbType.String, umr_no);
                dbase.AddInParameter(dcmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(company_id));
                IGenerateReaderCollection.GenerateCollectionReader _sqldata = new IGenerateReaderCollection.GenerateCollectionReader(GetEligibilityColl);
                CollectionBase _coll = dblayer.ExecuteReaderCommand(dcmd, _sqldata);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetEligibility").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        private CollectionBase GetEligibilityColl(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration refLetter = new PatientRegistration();
                    refLetter.STATUS = !DBNull.Value.Equals(reader["STATUS"]) ? (!string.IsNullOrEmpty(reader["STATUS"].ToString()) ? reader["STATUS"].ToString() : string.Empty) : string.Empty;
                    _collection.Add(refLetter);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAdmnDataColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected CollectionBase GenerateEmployerAllCollection(IDataReader returnData)
        {
            try
            {

                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    Employer _element = new Employer();
                    _element.COMPANY_ID = Convert.ToInt32(returnData[DALConstants.COMPANY_ID_COL].ToString());
                    _element.COMANY_CD = returnData[DALConstants.COMANY_CD_COL].ToString();
                    _element.COMPANY_DESC = returnData[DALConstants.COMPANY_DESC_COL].ToString();
                    _element.COMPANY_NAME = returnData[DALConstants.COMPANY_NAME_COL].ToString();
                    _element.COMPANY_FEE = returnData[DALConstants.COMPANY_FEE_COL].ToString();
                    _element.IS_CONSELIGIBLE_WARD = returnData[DALConstants.IS_CONSELIGIBLE_WARD_COL].ToString();
                    _element.IS_LETTER_REQUIRED = returnData[DALConstants.IS_LETTER_REQUIRED_COL].ToString();
                    _element.TARIFF_CONFIGURATION_IP = !DBNull.Value.Equals(returnData["TARIFF_CONFIGURATION_IP"]) ? returnData["TARIFF_CONFIGURATION_IP"].ToString() : string.Empty;
                    _element.TARIFF_CONFIGURATION_OP = !DBNull.Value.Equals(returnData["TARIFF_CONFIGURATION_OP"]) ? returnData["TARIFF_CONFIGURATION_OP"].ToString() : string.Empty;
                    _element.VAL_NO_OF_DAYS = !DBNull.Value.Equals(returnData["VAL_NO_OF_DAYS"]) ? returnData["VAL_NO_OF_DAYS"].ToString() : string.Empty;
                    _element.CMP_EXP_STS = !DBNull.Value.Equals(returnData["CMP_EXP_STS"]) ? returnData["CMP_EXP_STS"].ToString() : string.Empty;
                    _element.ORG_PERCENT = !DBNull.Value.Equals(returnData["ORG_PERCENT"]) ? returnData["ORG_PERCENT"].ToString() : string.Empty;
                    _element.EMP_PERCENT = !DBNull.Value.Equals(returnData["EMP_PERCENT"]) ? returnData["EMP_PERCENT"].ToString() : string.Empty;
                    _element.CMP_EXP_ALERT = !DBNull.Value.Equals(returnData["CMP_EXP_ALERT"]) ? returnData["CMP_EXP_ALERT"].ToString() : string.Empty;
                    _element.EFFECT_TO_DT = !DBNull.Value.Equals(returnData["EFFECT_TO_DT"]) ? returnData["EFFECT_TO_DT"].ToString() : string.Empty;
                    _element.IMAGE = !DBNull.Value.Equals(returnData["IMAGE"]) ? (byte[])(returnData["IMAGE"]) : new byte[1];
                    _element.CMP_CONS_DONE = !DBNull.Value.Equals(returnData["CMP_CONS_DONE"]) ? returnData["CMP_CONS_DONE"].ToString() : string.Empty;
                    _element.VAL_NO_OF_CONSULTATIONS = !DBNull.Value.Equals(returnData["VAL_NO_OF_CONSULTATIONS"]) ? returnData["VAL_NO_OF_CONSULTATIONS"].ToString() : string.Empty;
                    _element.IP_APPROVAL_REQ_MIN_AMT = !DBNull.Value.Equals(returnData["IP_APPROVAL_REQ_MIN_AMT"]) ? returnData["IP_APPROVAL_REQ_MIN_AMT"].ToString() : string.Empty;
                    _element.OP_APPROVAL_REQ_MIN_AMT = !DBNull.Value.Equals(returnData["OP_APPROVAL_REQ_MIN_AMT"]) ? returnData["OP_APPROVAL_REQ_MIN_AMT"].ToString() : string.Empty;
                    _element.CREDIT_LIMIT_AMT_OP = !DBNull.Value.Equals(returnData["CREDIT_LIMIT_AMT_OP"]) ? returnData["CREDIT_LIMIT_AMT_OP"].ToString() : string.Empty;
                    _element.IP_ORG_PERCENT = !DBNull.Value.Equals(returnData["IP_ORG_PERCENT"]) ? returnData["IP_ORG_PERCENT"].ToString() : string.Empty;
                    _element.IP_EMP_PERCENT = !DBNull.Value.Equals(returnData["IP_EMP_PERCENT"]) ? returnData["IP_EMP_PERCENT"].ToString() : string.Empty;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.COLOUR_ID_COL].ToString()))
                        _element.COLOUR_ID = returnData[DALConstants.COLOUR_ID_COL].ToString();
                    _element.NoOfRecords = !DBNull.Value.Equals(returnData["TOT_RECORD_CNT"]) ? Convert.ToInt32(returnData["TOT_RECORD_CNT"].ToString()) : 0;
                    _element.COMPANY_TYPE_ID = !DBNull.Value.Equals(returnData["COMPANY_TYPE_ID"]) ? Convert.ToString(returnData["COMPANY_TYPE_ID"]) : "0";
                    _element.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? returnData["RECORD_STATUS"].ToString() : string.Empty;
                    _element.EFFECT_FROM_DT = !DBNull.Value.Equals(returnData["EFFECT_FROM_DT"]) ? returnData["EFFECT_FROM_DT"].ToString() : string.Empty;
                    _element.COMPANY_TYPE_NAME = !DBNull.Value.Equals(returnData["COMPANY_TYPE_NAME"]) ? returnData["COMPANY_TYPE_NAME"].ToString() : string.Empty;
                    _collection.Add(_element);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateEmployerAllCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_Employers_Reg(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                // cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_EMPLOYERS);
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_EMPLOYERS_REG");
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                    dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, _lookUPSearch.PreConditon[0]);
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 1)
                {
                    if (!string.IsNullOrEmpty(_lookUPSearch.PreConditon[1].ToString()))
                    {
                        dbSvc.AddInParameter(cmd, "@IP_TPA_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                    }
                }
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 2)
                {
                    dbSvc.AddInParameter(cmd, "@IP_PATIENT_TYPE_ID", DbType.Int32, _lookUPSearch.PreConditon[2]);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.REPORTFILTERCRETERIA))
                {
                    dbSvc.AddInParameter(cmd, DALConstants.REPORT_FLAG, DbType.String, _lookUPSearch.REPORTFILTERCRETERIA);
                }
                dbSvc.AddInParameter(cmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUPSearch.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateEmployerAllCollection);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Employers").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Areas(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_AREAS);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAllCollection);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Areas").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase Get_Patient_Address_Dtls(int _patID)
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_ADDRESS");
                dbSvc.AddInParameter(cmd, "@IP_REFERENCE_ID", DbType.Int32, _patID);
                GenerateCollectionReader _reader = new GenerateCollectionReader(Get_Pat_Address_Dtls);
                return _dblayer.ExecuteReaderCommand(cmd, _reader);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patient_Address_Dtls").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Pat_Address_Dtls(IDataReader objDReader)
        {
            try
            {
                PatientAddress objEmpUtility;
                PatientRegistrationCollection Emp_depends_coll_master = new PatientRegistrationCollection();
                while (objDReader.Read())
                {
                    objEmpUtility = new PatientAddress();
                    if (objDReader["AREA_ID"] != null && objDReader["AREA_ID"].ToString() != string.Empty)
                        objEmpUtility.AREA_ID = Convert.ToInt32(objDReader["AREA_ID"].ToString());
                    if (objDReader[DALConstants.AREA_NAME_COL] != null && objDReader[DALConstants.AREA_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.AREA_NAME = objDReader[DALConstants.AREA_NAME_COL].ToString();
                    if (objDReader["CITY_ID"] != null && objDReader["CITY_ID"].ToString() != string.Empty)
                        objEmpUtility.CITY_ID = Convert.ToInt32(objDReader["CITY_ID"].ToString());
                    if (objDReader[DALConstants.CITY_NAME_COL] != null && objDReader[DALConstants.CITY_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.CITY_NAME = objDReader[DALConstants.CITY_NAME_COL].ToString();
                    if (objDReader["STATE_ID"] != null && objDReader["STATE_ID"].ToString() != string.Empty)
                        objEmpUtility.STATE_ID = Convert.ToInt32(objDReader["STATE_ID"].ToString());

                    if (objDReader[DALConstants.STATE_NAME_COL] != null && objDReader[DALConstants.STATE_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.STATE_NAME = objDReader[DALConstants.STATE_NAME_COL].ToString();
                    if (objDReader["COUNTRY_ID"] != null && objDReader["COUNTRY_ID"].ToString() != string.Empty)
                        objEmpUtility.COUNTRY_ID = Convert.ToInt32(objDReader["COUNTRY_ID"].ToString());

                    if (objDReader[DALConstants.COUNTRY_NAME_COL] != null && objDReader[DALConstants.COUNTRY_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.COUNTRY_NAME = objDReader[DALConstants.COUNTRY_NAME_COL].ToString();

                    if (objDReader["MOBILE_PHONE"] != null && objDReader["MOBILE_PHONE"].ToString() != string.Empty)
                        objEmpUtility.MOBILE_PHONE = objDReader["MOBILE_PHONE"].ToString();
                    if (objDReader["OFFICE_PHONE"] != null && objDReader["OFFICE_PHONE"].ToString() != string.Empty)
                        objEmpUtility.OFFICE_PHONE = objDReader["OFFICE_PHONE"].ToString();
                    if (objDReader["HOME_PHONE"] != null && objDReader["HOME_PHONE"].ToString() != string.Empty)
                        objEmpUtility.HOME_PHONE = objDReader["HOME_PHONE"].ToString();
                    if (objDReader["ZipCode"] != null && objDReader["ZipCode"].ToString() != string.Empty)
                        objEmpUtility.ZipCode = objDReader["ZipCode"].ToString();

                    if (objDReader["Address1"] != null && objDReader["Address1"].ToString() != string.Empty)
                        objEmpUtility.Address1 = objDReader["Address1"].ToString();
                    if (objDReader["Address2"] != null && objDReader["Address2"].ToString() != string.Empty)
                        objEmpUtility.Address2 = objDReader["Address2"].ToString();
                    if (objDReader["EMAIL_ID"] != null && objDReader["EMAIL_ID"].ToString() != string.Empty)
                        objEmpUtility.Email_ID = objDReader["EMAIL_ID"].ToString();
                    if (objDReader["ADDR_TYPE_ID"] != null && objDReader["ADDR_TYPE_ID"].ToString() != string.Empty)
                        objEmpUtility.ADDR_TYPE_ID = Convert.ToInt32(objDReader["ADDR_TYPE_ID"]);
                    if (objDReader["ADDRESS_ID"] != null && objDReader["ADDRESS_ID"].ToString() != string.Empty)
                        objEmpUtility.ADDRESS_ID = (objDReader["ADDRESS_ID"]).ToString();
                    if (objDReader["ADDRESS_REV_NO"] != null && objDReader["ADDRESS_REV_NO"].ToString() != string.Empty)
                        objEmpUtility.ADDRESS_REV_NO = Convert.ToInt32(objDReader["ADDRESS_REV_NO"]);
                    if (objDReader["DISTRICT"] != null && objDReader["DISTRICT"].ToString() != string.Empty)
                        objEmpUtility.DISTRICT_ID = Convert.ToInt32(objDReader["DISTRICT"]).ToString();
                    if (objDReader["DISTRICT_NAME"] != null && objDReader["DISTRICT_NAME"].ToString() != string.Empty)
                        objEmpUtility.DISTRICT_NAME = (objDReader["DISTRICT_NAME"]).ToString();
                    objEmpUtility.PREST_PERMI = !DBNull.Value.Equals(objDReader["PREST_PERMI"]) ? objDReader["PREST_PERMI"].ToString() : string.Empty;
                    objEmpUtility.PREST_OTHER = !DBNull.Value.Equals(objDReader["PREST_OTHER"]) ? objDReader["PREST_OTHER"].ToString() : string.Empty;
                    objEmpUtility.STD_CODE = !DBNull.Value.Equals(objDReader["STD_CODE"]) ? objDReader["STD_CODE"].ToString() : "0";
                    objEmpUtility.ISD_CODE = !DBNull.Value.Equals(objDReader["ISD_CODE"]) ? objDReader["ISD_CODE"].ToString() : "0";

                    Emp_depends_coll_master.Add(objEmpUtility);
                }
                return Emp_depends_coll_master;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Pat_Address_Dtls").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase Get_Employees(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _pOptionCache = CacheFactory.GetCacheManager();
                if (_pOptionCache.Contains("EMPLOYEES_LIST"))
                {
                    return (CollectionBase)_pOptionCache.GetData("EMPLOYEES_LIST");
                }
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_ALL_EMPINFO);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                dbSvc.AddInParameter(cmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                dbSvc.AddInParameter(cmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAllCollection);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                //Add_Data_ToCache("EMPLOYEES_LIST", _cBase);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Employees").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        private CollectionBase GeneratePatientColl(IDataReader reader)
        {
            PatientRegistrationCollection _coll = new PatientRegistrationCollection();
            PatientRegistration _registration = null;
            try
            {
                while (reader.Read())
                {
                    _registration = new PatientRegistration();
                    if (reader[DALConstants.ADMN_NO_COL].ToString() != string.Empty)
                        _registration.ADMN_NO = reader[DALConstants.ADMN_NO_COL].ToString();

                    if (reader[DALConstants.PATIENT_TYPE_NAME_COL].ToString() != string.Empty)
                        _registration.PATIENT_TYPE = reader[DALConstants.PATIENT_TYPE_NAME_COL].ToString();

                    if (reader[DALConstants.WARD_NAME_COL].ToString() != string.Empty)
                        _registration.WARD_NAME = reader[DALConstants.WARD_NAME_COL].ToString();

                    if (reader[DALConstants.ADMN_DT_COL].ToString() != string.Empty)
                        _registration.ADMN_DT = reader[DALConstants.ADMN_DT_COL].ToString();

                    if (reader[DALConstants.ROOM_NAME_COL].ToString() != string.Empty)
                        _registration.ROOM_NAME = reader[DALConstants.ROOM_NAME_COL].ToString();

                    if (reader[DALConstants.BED_NAME_COL].ToString() != string.Empty)
                        _registration.BED_NAME = reader[DALConstants.BED_NAME_COL].ToString();

                    if (reader[DALConstants.CONSULTANT_COL].ToString() != string.Empty)
                        _registration.CONSULTANT = reader[DALConstants.CONSULTANT_COL].ToString();

                    if (reader[DALConstants.PATIENT_ID_COL].ToString() != string.Empty)
                        _registration.PATIENT_ID = reader[DALConstants.PATIENT_ID_COL].ToString();

                    if (reader[DALConstants.UMR_NO_COL].ToString() != string.Empty)
                        _registration.UMR_NO = reader[DALConstants.UMR_NO_COL].ToString();

                    if (reader[DALConstants.DISPLAY_NAME_COL].ToString() != string.Empty)
                        _registration.DISPLAY_NAME = reader[DALConstants.DISPLAY_NAME_COL].ToString();

                    if (reader[DALConstants.AGE_COL].ToString() != string.Empty)
                        _registration.AGE = reader[DALConstants.AGE_COL].ToString();

                    if (reader[DALConstants.DOB_COL].ToString() != string.Empty)
                        _registration.DOB = reader[DALConstants.DOB_COL].ToString();

                    if (reader[DALConstants.GENDER_COL].ToString() != string.Empty)
                        _registration.GENDER = reader[DALConstants.GENDER_COL].ToString();

                    if (reader[DALConstants.REG_NO_COL].ToString() != string.Empty)
                        _registration.REG_NO = reader[DALConstants.REG_NO_COL].ToString();

                    if (reader[DALConstants.REGISTRATION_DT_COL].ToString() != string.Empty)
                        _registration.REGISTRATION_DT = reader[DALConstants.REGISTRATION_DT_COL].ToString();

                    if (reader[DALConstants.REG_EXPIRY_DT].ToString() != string.Empty)
                        _registration.REG_EXPIRY_DT = reader[DALConstants.REG_EXPIRY_DT].ToString();

                    if (reader[DALConstants.CORPORATE_NAME_COL].ToString() != string.Empty)
                        _registration.CORPORATE_NAME = reader[DALConstants.CORPORATE_NAME_COL].ToString();

                    if (reader[DALConstants.TREATMENT_BY_ID_COL].ToString() != string.Empty)
                        _registration.ORDR_DOCTOR_ID = Convert.ToInt32(reader[DALConstants.TREATMENT_BY_ID_COL].ToString());

                    if (reader[DALConstants.ROOM_ID_COL].ToString() != string.Empty)
                        _registration.ROOM_ID = Convert.ToInt32(reader[DALConstants.ROOM_ID_COL].ToString());

                    if (reader[DALConstants.WARD_ID_COL].ToString() != string.Empty)
                        _registration.WARD_ID = Convert.ToInt32(reader[DALConstants.WARD_ID_COL].ToString());

                    if (reader[DALConstants.BED_ID_COL].ToString() != string.Empty)
                        _registration.BED_ID = Convert.ToInt32(reader[DALConstants.BED_ID_COL].ToString());

                    if (reader[DALConstants.ADMN_ID_COL].ToString() != string.Empty)
                        _registration.ADMN_ID = Convert.ToInt32(reader[DALConstants.ADMN_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.RES_PERSON_NAME = reader[DALConstants.RES_PERSON_NAME_COL].ToString();
                    //-----------------------------------

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.TITLE = reader[DALConstants.TITLEDESC_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.MARITAL_STATUS = reader[DALConstants.MARTITALDESC_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.BLOOD_GROUP = reader[DALConstants.BLOODGROUPDESC_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.RES_PERSON_NAME_COL].ToString()))
                        _registration.MOTHER_MAIDEN_NAME = reader[DALConstants.MOTHER_MAIDEN_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.CREDIT_LIMIT_AMT_COL].ToString()))
                        _registration.CREDIT_LIMIT_AMT = reader[DALConstants.CREDIT_LIMIT_AMT_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.CREDIT_ORG_ID_COL].ToString()))
                        _registration.CREDIT_ORG_ID = Convert.ToInt32(reader[DALConstants.CREDIT_ORG_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.BILL_AMOUNT_COL].ToString()))
                        _registration.BILL_AMOUNT = float.Parse(reader[DALConstants.BILL_AMOUNT_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.ADVANCE_AMOUNT_COL].ToString()))
                        _registration.ADVANCE_AMOUNT = float.Parse(reader[DALConstants.ADVANCE_AMOUNT_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.DUE_AMOUNT_COL].ToString()))
                        _registration.DUE_AMOUNT = float.Parse(reader[DALConstants.DUE_AMOUNT_COL].ToString());
                    if (!string.IsNullOrEmpty(reader[DALConstants.PAID_AMOUNT_COL].ToString()))
                        _registration.PAID_AMOUNT = float.Parse(reader[DALConstants.PAID_AMOUNT_COL].ToString());

                    _registration.LOCK_STATUS = reader[DALConstants.LOCK_STATUS_COL].ToString();
                    _registration.UMR_LOCK = reader[DALConstants.UMR_LOCK_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.WARD_CREDIT_LIMIT_AMT_COL].ToString()))
                        _registration.WARD_CREDIT_LIMIT = reader[DALConstants.WARD_CREDIT_LIMIT_AMT_COL].ToString();
                    _coll.Add(_registration);

                }

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GeneratePatientColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            finally
            {
                _registration = null;
            }
            return _coll;
        }
        private CollectionBase Get_Patient_Address_Details(IDataReader returnData)
        {
            try
            {
                if (_collection == null)
                    _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientAddress _pAddress = new PatientAddress();
                    _pAddress.DisplayName = !DBNull.Value.Equals(returnData[DALConstants.DISPLAY_NAME_COL]) ? returnData[DALConstants.DISPLAY_NAME_COL].ToString() : string.Empty;
                    _pAddress.Address1 = !DBNull.Value.Equals(returnData[DALConstants.ADDRESS1_COL]) ? returnData[DALConstants.ADDRESS1_COL].ToString() : string.Empty;
                    _pAddress.Address2 = !DBNull.Value.Equals(returnData[DALConstants.ADDRESS2_COL]) ? returnData[DALConstants.ADDRESS2_COL].ToString() : string.Empty;
                    _pAddress.City = !DBNull.Value.Equals(returnData[DALConstants.CITY_ID_COL]) ? returnData[DALConstants.CITY_ID_COL].ToString() : string.Empty;
                    _pAddress.Country = !DBNull.Value.Equals(returnData[DALConstants.COUNTRY_ID_COL]) ? returnData[DALConstants.COUNTRY_ID_COL].ToString() : string.Empty;
                    _pAddress.Email_ID = !DBNull.Value.Equals(returnData[DALConstants.EMAIL_ID_COL]) ? returnData[DALConstants.EMAIL_ID_COL].ToString() : string.Empty;
                    _pAddress.State = !DBNull.Value.Equals(returnData[DALConstants.STATE_ID_COL]) ? returnData[DALConstants.STATE_ID_COL].ToString() : string.Empty;
                    _pAddress.WEBSITE_URL = !DBNull.Value.Equals(returnData[DALConstants.WEBSITE_URL_COL]) ? returnData[DALConstants.WEBSITE_URL_COL].ToString() : string.Empty;
                    _pAddress.ZipCode = !DBNull.Value.Equals(returnData[DALConstants.ZIPCODE_COL]) ? returnData[DALConstants.ZIPCODE_COL].ToString() : string.Empty;
                    _pAddress.AddressType = !DBNull.Value.Equals(returnData[DALConstants.ADDR_TYPE_ID_COL]) ? returnData[DALConstants.ADDR_TYPE_ID_COL].ToString() : string.Empty;
                    _pAddress.Area = !DBNull.Value.Equals(returnData[DALConstants.AREA_ID_COL]) ? returnData[DALConstants.AREA_ID_COL].ToString() : string.Empty;
                    _pAddress.MOBILE_PHONE = !DBNull.Value.Equals(returnData[DALConstants.MOBILE_PHONE_COL]) ? returnData[DALConstants.MOBILE_PHONE_COL].ToString() : string.Empty;
                    _pAddress.CITY_NAME = !DBNull.Value.Equals(returnData[DALConstants.CITYNAME_COL]) ? returnData[DALConstants.CITYNAME_COL].ToString() : string.Empty;
                    _pAddress.STATE_NAME = !DBNull.Value.Equals(returnData[DALConstants.STATENAME_COL]) ? returnData[DALConstants.STATENAME_COL].ToString() : string.Empty;
                    _pAddress.COUNTRY_NAME = !DBNull.Value.Equals(returnData[DALConstants.COUNTRYNAME_COL]) ? returnData[DALConstants.COUNTRYNAME_COL].ToString() : string.Empty;
                    _pAddress.AREA_NAME = !DBNull.Value.Equals(returnData[DALConstants.AREANAME_COL]) ? returnData[DALConstants.AREANAME_COL].ToString() : string.Empty;
                    _pAddress.AddressTypeName = !DBNull.Value.Equals(returnData[DALConstants.ADDRESSTYPE_COL]) ? returnData[DALConstants.ADDRESSTYPE_COL].ToString() : string.Empty;
                    _pAddress.ADDRESS_ID = !DBNull.Value.Equals(returnData[DALConstants.ADDRESS_ID_COL]) ? returnData[DALConstants.ADDRESS_ID_COL].ToString() : string.Empty;
                    _pAddress.ADDRESS_REV_NO = !DBNull.Value.Equals(returnData[DALConstants.ADDRESS_REV_NO_COL]) ? Convert.ToInt32(returnData[DALConstants.ADDRESS_REV_NO_COL]) : 0;
                    _pAddress.MOBILE_PHONE1 = !DBNull.Value.Equals(returnData["MOBILE_NO1"]) ? returnData["MOBILE_NO1"].ToString() : string.Empty;
                    _pAddress.DISTRICT_NAME = !DBNull.Value.Equals(returnData["DISTRICT_NAME"]) ? returnData["DISTRICT_NAME"].ToString() : string.Empty;
                    _pAddress.DISTRICT_ID = !DBNull.Value.Equals(returnData["DISTRICT_ID"]) ? returnData["DISTRICT_ID"].ToString() : string.Empty;
                    _pAddress.FirstName = !DBNull.Value.Equals(returnData["FIRST_NAME"]) ? returnData["FIRST_NAME"].ToString() : string.Empty;
                    _pAddress.MiddleName = !DBNull.Value.Equals(returnData["MIDDLE_NAME"]) ? returnData["MIDDLE_NAME"].ToString() : string.Empty;
                    _pAddress.LastName = !DBNull.Value.Equals(returnData["LAST_NAME"]) ? returnData["LAST_NAME"].ToString() : string.Empty;

                    _collection.Add(_pAddress);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patient_Address_Details").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    ListElements _element = new ListElements();
                    _element.Text = returnData[1].ToString();
                    _element.Value = returnData[0].ToString();
                    _collection.Add(_element);
                }
                returnData.Close();
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public List<ListElements> GetRegistrationAutoComp(string prefixText, int count, string tableName, string colName, string contextKey)
        {
            string fdt = string.Empty;
            string tdt = string.Empty;
            string contkey = string.Empty;
            string maindates = string.Empty;
            string flag = string.Empty;

            string[] dates = contextKey.Split('/');
            contkey = dates[0];
            if (dates.Length > 1)
            {
                maindates = dates[1];
            }
            if (maindates.Length < 15)
            {
                fdt = maindates;
                tdt = maindates;
            }
            else
            {
                fdt = maindates.Split('-')[0] + "-" + maindates.Split('-')[1] + "-" + maindates.Split('-')[2].Trim();
                tdt = maindates.Split('-')[3].Trim() + "-" + maindates.Split('-')[4] + "-" + maindates.Split('-')[5];
            }
            if (dates.Length > 2)
            {
                flag = dates[2];
            }
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database _dBase = _dbLayer.DBaseFactory;
                DbCommand _dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REGISTRATION_AUTO_COMP");

                _dBase.AddInParameter(_dbCmd, "@IP_TABLE_NAME", DbType.String, tableName);
                _dBase.AddInParameter(_dbCmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, contkey);
                _dBase.AddInParameter(_dbCmd, DALConstants.IP_PREFIXTEXT_PARAM, DbType.String, prefixText);
                _dBase.AddInParameter(_dbCmd, DALConstants.FROM_DT_PARM, DbType.String, fdt);
                _dBase.AddInParameter(_dbCmd, DALConstants.TO_DT_PARAM, DbType.String, tdt);
                _dBase.AddInParameter(_dbCmd, "@IP_COL_NAME", DbType.String, colName);
                _dBase.AddInParameter(_dbCmd, DALConstants.FLAG_PARM, DbType.String, flag);
                return _dbLayer.ExecuteReadercmd(_dbCmd);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetRegistrationAutoComp").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public List<ListElements> OthersDoctor(string prefixText, string contextkey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_REFERALS_SRC_ID");

                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, "REFERAL_NAME");
                dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, "@IP_REFRL_SRC_ID", DbType.String, contextkey);

                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                IDataReader dbDR = dbLayer.ExecuteReader(dbCmd);

                return Datareader(dbDR);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("OthersDoctor").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }

        }
        private List<ListElements> Datareader(IDataReader dbDR)
        {
            List<ListElements> returnData = new List<ListElements>();
            while (dbDR.Read())
            {
                ListElements _element = new ListElements();
                _element.Text = dbDR["REFERAL_NAME"].ToString();
                _element.Value = dbDR["REFRL_ID"].ToString();
                _element.Name = dbDR["EMAIL_ID"].ToString();
                returnData.Add(_element);
            }
            dbDR.Close();
            return returnData;
        }
        public List<RegAtuoDetails> OthersDoctors(string prefixText, string contextkey, string ADDFLAG)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_REFERALS_SRC_ID");

                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, "REFERAL_NAME");
                dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, "@IP_REFRL_SRC_ID", DbType.String, contextkey);
                if (ADDFLAG == "REG" || ADDFLAG == "AllRefrls")
                    dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, ADDFLAG);

                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                IDataReader dbDR = dbLayer.ExecuteReader(dbCmd);

                return Datareaders(dbDR);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("OthersDoctor").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }

        }
        private List<RegAtuoDetails> Datareaders(IDataReader dbDR)
        {
            List<RegAtuoDetails> returnData = new List<RegAtuoDetails>();
            while (dbDR.Read())
            {
                RegAtuoDetails _element = new RegAtuoDetails();
                _element.AddtionalVal = !DBNull.Value.Equals(dbDR["MOBILE_PHONE"]) ? dbDR["MOBILE_PHONE"].ToString() : string.Empty;
                _element.RefAddress = !DBNull.Value.Equals(dbDR["ADDRESS1"]) ? dbDR["ADDRESS1"].ToString() : string.Empty;
                _element.Text = dbDR["REFERAL_NAME"].ToString();
                _element.Value = dbDR["REFRL_ID"].ToString();
                _element.REFRL_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.REFRL_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.REFRL_TYPE_ID_COL]) : "1";
                _element.DISPATCH_TYPE_ID = !DBNull.Value.Equals(dbDR["DISPATCH_TYPE_ID"]) ? Convert.ToString(dbDR["DISPATCH_TYPE_ID"]) : "0";
                _element.DISPATCH_METHOD_NAME = !DBNull.Value.Equals(dbDR[DALConstants.DISPATCH_METHOD_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.DISPATCH_METHOD_NAME_COL]) : string.Empty;
                _element.REFERAL_EMAIL_ID = !DBNull.Value.Equals(dbDR[DALConstants.EMAIL_ID_COL]) ? Convert.ToString(dbDR[DALConstants.EMAIL_ID_COL]) : string.Empty;
                returnData.Add(_element);
            }
            dbDR.Close();
            return returnData;
        }
        public bool Save_Patient_PreRegistration(string _XmlRoot, int sessionid, out int pre_id, out string pre_no, out int count)
        {
            bool _status = false;
            pre_id = 0;
            count = 0;
            pre_no = string.Empty;
            DataAccessLayer _dbLayer = new DataAccessLayer();
            Database dbSvc = _dbLayer.DBaseFactory;
            try
            {
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_FO_PRE_REG");
                dbSvc.AddInParameter(dbCmd, "@XML", DbType.Xml, _XmlRoot);
                // dbSvc.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
                dbSvc.AddOutParameter(dbCmd, "@IP_PRE_REG_ID", DbType.Int32, 0);
                dbSvc.AddOutParameter(dbCmd, "@IP_Pre_Reg_No", DbType.String, 100);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                _status = _dbLayer.ExecuteNonQuery(dbCmd);
                if (!string.IsNullOrEmpty(dbSvc.GetParameterValue(dbCmd, "@IP_PRE_REG_ID").ToString()))
                    pre_id = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@IP_PRE_REG_ID"));
                pre_no = dbSvc.GetParameterValue(dbCmd, "@IP_Pre_Reg_No").ToString();
                count = !string.IsNullOrEmpty(dbSvc.GetParameterValue(dbCmd, "@OP_COUNT").ToString()) ? Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_COUNT")) : 0;
                return _status;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Patient_PreRegistration").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return _status;
        }
        private List<ListElements> DataReader(IDataReader dr)
        {
            try
            {
                List<ListElements> returnData = new List<ListElements>();
                while (dr.Read())
                {
                    ListElements _element = new ListElements();
                    _element.Text = dr[0].ToString();
                    _element.Value = dr[1].ToString();
                    //_element.Name = dr[7].ToString();
                    returnData.Add(_element);
                }
                dr.Close();
                return returnData;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DataReader").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public DataSet Get_Registration_DropDowns(string flag, int session_id)
        {
            try
            {
                _pOptionCache = CacheFactory.GetCacheManager();
                string keyValue = flag + "entities";
                if (!_pOptionCache.Contains(keyValue))
                {
                    DataAccessLayer dbLayer = new DataAccessLayer();
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ALL_ENTITY_PRC");
                    dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, session_id);
                    dBase.AddInParameter(dbCmd, DALConstants.IP_FLAG_PARM, DbType.String, flag);
                    DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                    //Add_Data_ToCache(keyValue, cbase);
                    return cbase;
                }
                return (DataSet)_pOptionCache.GetData(keyValue);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patients_Info").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }

        }
        public DataSet Get_RegTypeConfig_DropDowns(int session_id)
        {
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_PRICE_MAPPING");
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, session_id);
                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegTypeConfig_DropDowns").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }


        public DataSet Get_IPPatients_Info_LOOKUP_Auto(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_ADMN_DTLS_CHANGES");
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(_lookUPSearch.SORTORDER))
                {
                    dbSvc.AddInParameter(cmd, "@IP_ORDER_BY", DbType.String, _lookUPSearch.SORTORDER);
                }
                if (System.Web.HttpContext.Current.Session["FLAG"] != null)
                {
                    if (_lookUPSearch.FLAG != null)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.FLAG);
                    }
                    else
                    {
                        string flag = (System.Web.HttpContext.Current.Session["FLAG"]).ToString();
                        dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, flag);
                    }
                }
                else
                {
                    if (_lookUPSearch.FLAG != null)
                    {
                        dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.FLAG);
                    }
                }
                dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                dbSvc.AddInParameter(cmd, "@IP_REC_TYPE_ID", DbType.Int32, _lookUPSearch.REC_TYPE_ID);


                if (_lookUPSearch.FLAG == "ICD" || _lookUPSearch.FLAG == "Discharge")
                {
                    if (_lookUPSearch.TO_DATE != null && _lookUPSearch.TO_DATE != "")
                    {
                        dbSvc.AddInParameter(cmd, "@IP_TO_DATE", DbType.String, _lookUPSearch.TO_DATE);
                    }
                    if (_lookUPSearch.FROM_DATE != null && _lookUPSearch.FROM_DATE != "")
                    {
                        dbSvc.AddInParameter(cmd, "@IP_FROM_DT", DbType.String, _lookUPSearch.FROM_DATE);
                    }
                }



                dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet _cBase = dbSvc.ExecuteDataSet(cmd);
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_IPPatients_Info_LOOKUP").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public List<object> GetAll_Dynamic_LOOKUP(LookUpSearch _lookUPSearch, out int _total_records, string sp_name)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, sp_name);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(_lookUPSearch.SORTORDER))
                {
                    dbSvc.AddInParameter(cmd, "@IP_ORDER_BY", DbType.String, _lookUPSearch.SORTORDER);
                }
                //if (System.Web.HttpContext.Current.Session["FLAG"] != null)
                //{
                //    if (_lookUPSearch.FLAG != null)
                //    {
                //        dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.FLAG);
                //    }
                //    else
                //    {
                //        string flag = (System.Web.HttpContext.Current.Session["FLAG"]).ToString();
                //        dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, flag);
                //    }
                //}
                //else
                //{
                if (_lookUPSearch.FLAG != "")
                {
                    dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.FLAG);
                }
                //}
                dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                dbSvc.AddInParameter(cmd, "@IP_REC_TYPE_ID", DbType.Int32, _lookUPSearch.REC_TYPE_ID);
                if (_lookUPSearch.FLAG == "ICD" || _lookUPSearch.FLAG == "Discharge")
                {
                    if (_lookUPSearch.TO_DATE != null && _lookUPSearch.TO_DATE != "")
                    {
                        dbSvc.AddInParameter(cmd, "@IP_TO_DATE", DbType.String, _lookUPSearch.TO_DATE);
                    }
                    if (_lookUPSearch.FROM_DATE != null && _lookUPSearch.FROM_DATE != "")
                    {
                        dbSvc.AddInParameter(cmd, "@IP_FROM_DT", DbType.String, _lookUPSearch.FROM_DATE);
                    }
                }

                dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
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
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_IPPatients_Info_LOOKUP").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public List<object> GetAll_UMRPatients_Lookup(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_PATIENT");
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (_lookUPSearch.PreConditon.Count > 2)
                {
                    dbSvc.AddInParameter(cmd, "@IP_GENDER_ID", DbType.String, _lookUPSearch.PreConditon[2]);
                }
                if (_lookUPSearch.PreConditon.Count > 0)
                {
                    dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.PreConditon[0]);
                }
                if (_lookUPSearch.PreConditon.Count > 1)
                {
                    dbSvc.AddInParameter(cmd, "@IP_REC_TYPE_ID", DbType.Int32, _lookUPSearch.REC_TYPE_ID);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.SORTORDER))
                {
                    dbSvc.AddInParameter(cmd, "@IP_ORDER_BY", DbType.String, _lookUPSearch.SORTORDER);
                }
                dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));

                //GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_Patients_Info_new_umr);
                //CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
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
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patients_Info_NEW_UMR").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }



        public DataSet Get_Default_Values1()
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DEFAULT_REFERLS");
                dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, 1);
                DataSet cbase = _dblayer.ExecuteDataSet(cmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Default_Values").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase CheckValidation(string _advSrch, int session_id)
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_PAT_EXISTS_COND");
                dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _advSrch);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetExistPatientColl);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CheckValidation").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetExistPatientColl(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection recpMasterCollection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.PatientRegistration _objpat = new EzHms.ModelEntity.PatientRegistration();
                    _objpat.PATIENT_ID = !string.IsNullOrEmpty(returnData["PATIENT_ID"].ToString()) ? returnData["PATIENT_ID"].ToString() : string.Empty;
                    _objpat.PATIENT_RIVISION_NO = !string.IsNullOrEmpty(returnData["PATIENT_REV_NO"].ToString()) ? returnData["PATIENT_REV_NO"].ToString() : string.Empty;
                    _objpat.UMR_NO = !string.IsNullOrEmpty(returnData["UMR_NO"].ToString()) ? returnData["UMR_NO"].ToString() : string.Empty;
                    _objpat.DISPLAY_NAME = !string.IsNullOrEmpty(returnData["DISPLAY_NAME"].ToString()) ? returnData["DISPLAY_NAME"].ToString() : string.Empty;
                    _objpat.DOB = !string.IsNullOrEmpty(returnData["DOB"].ToString()) ? returnData["DOB"].ToString() : string.Empty;
                    _objpat.MOBILE_NO1 = !string.IsNullOrEmpty(returnData["MOBILE_NO1"].ToString()) ? returnData["MOBILE_NO1"].ToString() : string.Empty;
                    _objpat.MOBILE_NO2 = !string.IsNullOrEmpty(returnData["MOBILE_NO2"].ToString()) ? returnData["MOBILE_NO2"].ToString() : string.Empty;
                    _objpat.RES_PERSON_NAME = !string.IsNullOrEmpty(returnData["RES_PERSON_NAME"].ToString()) ? returnData["RES_PERSON_NAME"].ToString() : string.Empty;
                    _objpat.MOTHER_MAIDEN_NAME = !string.IsNullOrEmpty(returnData["MOTHER_MAIDEN_NAME"].ToString()) ? returnData["MOTHER_MAIDEN_NAME"].ToString() : string.Empty;
                    _objpat.ADDRESS1 = !string.IsNullOrEmpty(returnData["ADDRESS1"].ToString()) ? returnData["ADDRESS1"].ToString() : string.Empty;
                    recpMasterCollection.Add(_objpat);
                }
                return recpMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetExistPatientColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetExchangeRateNew(int fromcurid, int tocurid, string flag)
        {
            try
            {
                DataAccessLayer DbLayer = new DataAccessLayer();
                Database dbase = DbLayer.DBaseFactory;
                DbCommand dbcmd = null;
                dbcmd = DbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_CURRENCY_EXCHANGEVAL);
                dbase.AddInParameter(dbcmd, StoresConstatns.FROM_CURR_ID_PARM, DbType.Int32, fromcurid);
                dbase.AddInParameter(dbcmd, StoresConstatns.TO_CURR_ID_PARM, DbType.Int32, tocurid);
                dbase.AddInParameter(dbcmd, "@IP_FLAG", DbType.String, flag);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCurrencyExchangeDataColl);
                CollectionBase _cBase = DbLayer.ExecuteReaderCommand(dbcmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetExchangeRate").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }

        }
        public CollectionBase GetExchangeRate(int fromcurid, int tocurid)
        {
            try
            {
                DataAccessLayer DbLayer = new DataAccessLayer();
                Database dbase = DbLayer.DBaseFactory;
                DbCommand dbcmd = null;
                dbcmd = DbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_CURRENCY_EXCHANGEVAL);
                dbase.AddInParameter(dbcmd, StoresConstatns.FROM_CURR_ID_PARM, DbType.Int32, fromcurid);
                dbase.AddInParameter(dbcmd, StoresConstatns.TO_CURR_ID_PARM, DbType.Int32, tocurid);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCurrencyExchangeDataColl);
                CollectionBase _cBase = DbLayer.ExecuteReaderCommand(dbcmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetExchangeRate").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }

        }
        protected CollectionBase GetCurrencyExchangeDataColl(IDataReader returnData)
        {
            try
            {
                CurrencySettingCollections objcurrencycoll = new CurrencySettingCollections();
                while (returnData.Read())
                {
                    EzHms.ModelEntity.CurrencySettings objcurrency = new CurrencySettings();
                    objcurrency.FROM_CURR_SYMBOL = returnData[StoresConstatns.FROM_CURR_SYMBOL_COL].ToString();
                    objcurrency.TO_CURR_SYMBOL = returnData[StoresConstatns.TO_CURR_SYMBOL_COL].ToString();
                    objcurrency.EX_RATE = returnData[StoresConstatns.EX_RATE_COL].ToString();
                    objcurrency.EXCHANGE_RATE_CARD = returnData[StoresConstatns.EXCHANGE_RATE_CARD_COL].ToString();
                    objcurrency.EXCHANGE_RATE_CHAQUE = returnData[StoresConstatns.EXCHANGE_RATE_CHAQUE_COL].ToString();
                    objcurrency.EXCHANGE_RATE_DD = returnData[StoresConstatns.EXCHANGE_RATE_DD_COL].ToString();
                    objcurrency.FROM_CURR_CD = returnData[StoresConstatns.FROM_CURR_CD_COL].ToString();
                    objcurrency.TO_CURR_CD = returnData[StoresConstatns.TO_CURR_CD_COL].ToString();
                    objcurrency.EFT_FROM_DT = returnData[StoresConstatns.EFT_FROM_DT_COL].ToString();
                    objcurrency.EFT_TO_DT = returnData[StoresConstatns.EFT_TO_DT_COL].ToString();
                    objcurrency.EXCHANGE_RATE_OTHERS = returnData["EXCHANGE_RATE_OTHERS"].ToString();
                    objcurrencycoll.Add(objcurrency);
                }
                return objcurrencycoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCurrencyExchangeDataColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public DataSet GetDatabindpreregEdit(int preregid, int session)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_FO_PRE_REG);
                dBase.AddInParameter(dbCmd, DALConstants.PRE_REG_ID_PARM, DbType.Int32, preregid);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARAM, DbType.Int32, session);
                GenerateCollectionReader list = new GenerateCollectionReader(GetDatabindpreregEditCollection);
                DataSet ds = new DataSet();
                ds = dbLayer.ExecuteDataSet(dbCmd);

                return ds;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDatabindpreregEditCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }
        CollectionBase GetDatabindpreregEditCollection(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection objcoll = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration objpre = new PatientRegistration();

                    objpre.PRE_REV_NO = !DBNull.Value.Equals(reader[DALConstants.PRE_REG_REV_NO_COLP]) ? Convert.ToInt32(reader[DALConstants.PRE_REG_REV_NO_COLP]) : 0;
                    //objacn.PRO_CD = !DBNull.Value.Equals(reader[DALConstants.PRO_CD_COL]) ? Convert.ToString(reader[DALConstants.PRO_CD_COL]) : string.Empty;
                    objpre.PRE_REG_ID = !DBNull.Value.Equals(reader[DALConstants.PRE_REG_ID_COL]) ? Convert.ToInt32(reader[DALConstants.PRE_REG_ID_COL]) : 0;
                    objpre.PRE_REG_NO = reader[DALConstants.PRE_REG_NO_COL].ToString();
                    objpre.PRE_REG_DT = reader[DALConstants.PRE_REG_DT_COL].ToString();
                    objpre.TIT_ID = !DBNull.Value.Equals(reader[DALConstants.TITILE_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.TITILE_ID_COLP]) : 0;
                    objpre.FIRST_NAME = reader[DALConstants.FIRST_NAME_COLP].ToString();
                    objpre.MIDDLE_NAME = reader[DALConstants.MIDDLE_NAME_COLP].ToString();
                    objpre.LAST_NAME = reader[DALConstants.LAST_NAME_COLP].ToString();
                    objpre.DISPLAY_NAME = reader[DALConstants.DISPLAY_NAME_COLP].ToString();
                    objpre.ALIAS_NAME = reader[DALConstants.ALIAS_NAME_COLP].ToString();
                    objpre.GENDERPR_ID = !DBNull.Value.Equals(reader[DALConstants.GENDER_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.GENDER_ID_COLP]) : 0;
                    objpre.MARITALPR_STATUSPR_ID = !DBNull.Value.Equals(reader[DALConstants.MARITAL_STATUS_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.MARITAL_STATUS_ID_COLP]) : 0;
                    objpre.MOTHER_NAME = reader[DALConstants.MOTHER_NAME_COLP].ToString();
                    objpre.MOBILE_NO = reader[DALConstants.MOBILE_NO1_COL].ToString();
                    objpre.MOBILE_NO2 = reader[DALConstants.MOBILE_NO2_COLP].ToString();
                    objpre.ADDRESS1 = reader[DALConstants.ADDRESS1_COLP].ToString();
                    objpre.ADDRESS2 = reader[DALConstants.ADDRESS2_COLP].ToString();
                    objpre.EMAIL_ID = reader[DALConstants.EMAIL_ID_COLP].ToString();
                    objpre.AREAPR_ID = !DBNull.Value.Equals(reader[DALConstants.AREA_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.AREA_ID_COLP]) : 0;
                    objpre.CITYPR_ID = !DBNull.Value.Equals(reader[DALConstants.CITY_ID_COL]) ? Convert.ToInt32(reader[DALConstants.CITY_ID_COL]) : 0;
                    objpre.STATEPR_ID = !DBNull.Value.Equals(reader[DALConstants.STATE_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.STATE_ID_COLP]) : 0;
                    objpre.COUNTRYPR_ID = !DBNull.Value.Equals(reader[DALConstants.COUNTRY_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.COUNTRY_ID_COLP]) : 0;
                    objpre.PINZIPCODE = reader[DALConstants.ZIPCODE_COLP].ToString();
                    objpre.Website = reader[DALConstants.WEBSITE_COLP].ToString();
                    objpre.DOB = !DBNull.Value.Equals(reader[DALConstants.DOB_COL]) ? reader[DALConstants.DOB_COL].ToString() : string.Empty;
                    objpre.BLOOD_ID = !DBNull.Value.Equals(reader[DALConstants.BLOOD_GROUP_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.BLOOD_GROUP_ID_COLP]) : 0;
                    objpre.AGE = reader[DALConstants.AGE_COLP].ToString();
                    objpre.RES_PERSON_NAME = reader[DALConstants.RES_PERSON_NAME_COLP].ToString();
                    objpre.RES_PERSON_REL_ID = !DBNull.Value.Equals(reader[DALConstants.RES_PERSON_REL_ID_COLP]) ? Convert.ToString(reader[DALConstants.RES_PERSON_REL_ID_COLP]) : string.Empty;
                    objpre.RELEGIONPR_ID = !DBNull.Value.Equals(reader[DALConstants.RELIGION_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.RELIGION_ID_COLP]) : 0;
                    objpre.Educationpr_id = !DBNull.Value.Equals(reader[DALConstants.EDUCATION_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.EDUCATION_ID_COLP]) : 0;
                    objpre.Ethnicitypr_id = !DBNull.Value.Equals(reader[DALConstants.ETHNICITY_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.ETHNICITY_ID_COLP]) : 0;
                    objpre.Refferedpr_bypr = !DBNull.Value.Equals(reader[DALConstants.REFERRED_BY_COLP]) ? Convert.ToInt32(reader[DALConstants.REFERRED_BY_COLP]) : 0;
                    //reader[DALConstants.REFERRED_BY_COLP].ToString();
                    objpre.REFERAL_NAME = reader[DALConstants.REFERAL_NAME_COLP].ToString();
                    objpre.REFERREND_DOCTOR_ID = reader[DALConstants.REFERREND_DOCTOR_ID_COLP].ToString();
                    objpre.REFERRALADDRESS = reader[DALConstants.REFERRALADDRESS_COLP].ToString();
                    objpre.REFERRALPHONE = reader[DALConstants.REFERRALPHONE_COLP].ToString();
                    objpre.MODE_OF_COMM = reader[DALConstants.MODE_OF_COMMUNICATION_COLP].ToString();
                    objpre.Doctor_ID = !DBNull.Value.Equals(reader[DALConstants.DOCTOR_ID_COLP]) ? Convert.ToInt32(reader[DALConstants.DOCTOR_ID_COLP]) : 0;
                    //objpre.COUNTRY_NAME = reader[DALConstants.COUNTRY_NAME_COLP].ToString();
                    //objpre.STATE_NAME = reader[DALConstants.STATE_NAME_COL].ToString();
                    //objpre.CITY_NAME = reader[DALConstants.CITY_NAME_COLP].ToString();
                    //objpre.AREA_NAME = reader[DALConstants.AREA_NAME_COLP].ToString();
                    objpre.DOCTOR_NAME = reader[DALConstants.DOCTOR_NAME_COLP].ToString();
                    objpre.NOTES = reader[DALConstants.NOTE_COL].ToString();
                    objcoll.Add(objpre);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDatabindpreregEditCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }
        public CollectionBase Get_App_Details(string firstName, string DisplayName, string mobileno)
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_APPOINTMENT_DATA");
                dbSvc.AddInParameter(cmd, "@IP_FIRST_NAME", DbType.String, firstName);

                dbSvc.AddInParameter(cmd, "@IP_DISPLAY_NAME", DbType.String, DisplayName);
                dbSvc.AddInParameter(cmd, "@IP_MOBILE_NO", DbType.String, mobileno);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_App_Coll_Details);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_App_Details").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        private CollectionBase Get_App_Coll_Details(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration _registration = new PatientRegistration();
                    //_patRegistration.FIRST_NAME = !string.IsNullOrEmpty (returnData["FIRST_NAME"].ToString()) ? returnData["FIRST_NAME"].ToString() : string.Empty;
                    //_patRegistration.DISPLAY_NAME = !string.IsNullOrEmpty(returnData["PATIENT_NAME"].ToString()) ? returnData["PATIENT_NAME"].ToString() : string.Empty;
                    if (returnData["PATIENT_ID"].ToString() != "")
                    {
                        _registration.PATIENT_ID = returnData["PATIENT_ID"].ToString();
                    }
                    else
                    {
                        _registration.PATIENT_ID = "0";
                    }
                    if (returnData["PATIENT_ID"].ToString() != "")
                    {
                        _registration.APMNT_ID1 = returnData["APMNT_ID"].ToString();
                    }
                    else
                    {
                        _registration.APMNT_ID1 = "0";
                    }
                    _registration.VISIT_TYPE = !string.IsNullOrEmpty(returnData["apptype"].ToString()) ? returnData["apptype"].ToString() : string.Empty;

                    _collection.Add(_registration);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patients_Info_new_umr").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_Corporate_PatientInfo(string umrNO, string flag, string cmpnyid)
        {

            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                GenerateCollectionReader sqlData = null;
                if (_collection == null)
                    _collection = new PatientRegistrationCollection();
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_CORPORATE_PATIENTINFO);
                dbSvc.AddInParameter(cmd, DALConstants.UMR_NO_PARM, DbType.String, umrNO);
                if (!string.IsNullOrEmpty(flag) && flag != "0")
                    dbSvc.AddInParameter(cmd, DALConstants.CMPNY_REFERAL_LETTER_ID_PARM, DbType.String, flag);
                if (!string.IsNullOrEmpty(cmpnyid) && cmpnyid != "0")
                    dbSvc.AddInParameter(cmd, "@IP_TPA_ID", DbType.Int32, cmpnyid);

                sqlData = new GenerateCollectionReader(Get_Corporate_PatientInfoColl);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Corporate_PatientInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        private CollectionBase Get_Corporate_PatientInfoColl(IDataReader returnData)
        {
            try
            {

                PatientRegistrationCollection _empCollection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration corporateDetails = new PatientRegistration();
                    corporateDetails.REG_CORPORATE_ID = !string.IsNullOrEmpty(returnData[DALConstants.REG_CORPORATE_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.REG_CORPORATE_ID_COL].ToString()) : 0;
                    corporateDetails.REG_ID = !string.IsNullOrEmpty(returnData[DALConstants.REG_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.REG_ID_COL].ToString()) : 0;
                    corporateDetails.CREDIT_ORG_ID = !string.IsNullOrEmpty(returnData[DALConstants.CREDIT_ORG_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.CREDIT_ORG_ID_COL].ToString()) : 0;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.EMPLOYEE_ID_COL].ToString()))
                        corporateDetails.EMPLOYEE_ID = returnData[DALConstants.EMPLOYEE_ID_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.EMP_GRADE_ID_COL].ToString()))
                        corporateDetails.EMP_GRADE_ID = returnData[DALConstants.EMP_GRADE_ID_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.EMP_RELATIONSHIP_ID_COL].ToString()))
                        corporateDetails.EMP_RELATIONSHIP_ID = !string.IsNullOrEmpty(returnData[DALConstants.EMP_RELATIONSHIP_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.EMP_RELATIONSHIP_ID_COL].ToString()) : 0;

                    if (!string.IsNullOrEmpty(returnData[DALConstants.RELATIONSHIP_NAME_COL].ToString()))
                        corporateDetails.RelationName = returnData[DALConstants.RELATIONSHIP_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.EMP_COVERAGE_ID_COL].ToString()))
                        corporateDetails.EMP_COVERAGE_ID = returnData[DALConstants.EMP_COVERAGE_ID_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.CARD_NO_COL].ToString()))
                        corporateDetails.CARD_NO = returnData[DALConstants.CARD_NO_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.CARD_VALIDITY_COL].ToString()))
                        corporateDetails.CARD_VALIDITY = returnData[DALConstants.CARD_VALIDITY_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.COMPANY_NAME_COL].ToString()))
                        corporateDetails.COMPANY_NAME = returnData[DALConstants.COMPANY_NAME_COL].ToString();
                    corporateDetails.DISPLAY_NAME = returnData[DALConstants.DISPLAY_NAME_COL].ToString();
                    corporateDetails.EmployeeName = returnData[DALConstants.EMP_NAME_COL].ToString();
                    corporateDetails.ADMN_NO = returnData[DALConstants.ADMN_NO_COL] != DBNull.Value ? returnData[DALConstants.ADMN_NO_COL].ToString() : string.Empty;
                    corporateDetails.ADMN_ID = returnData[DALConstants.ADMN_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.ADMN_ID_COL].ToString()) : 0;
                    corporateDetails.ADMN_DT = returnData[DALConstants.ADMN_DT_COL] != DBNull.Value ? returnData[DALConstants.ADMN_DT_COL].ToString() : string.Empty;
                    corporateDetails.ADDRESS = returnData[DALConstants.ADDRESS1_COL].ToString();
                    corporateDetails.ADDRESS1 = returnData[DALConstants.ADDRESS2_COL].ToString();
                    corporateDetails.ORDR_DOCTOR_ID = !string.IsNullOrEmpty(returnData[DALConstants.TREATMENT_BY_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.TREATMENT_BY_ID_COL].ToString()) : 0;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.CONSULTANT_COL].ToString()))
                        corporateDetails.CONSULTANT = returnData[DALConstants.CONSULTANT_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.NET_AMOUNT_COL].ToString()))
                        corporateDetails.NET_AMOUNT = Convert.ToSingle(returnData[DALConstants.NET_AMOUNT_COL].ToString());
                    if (!string.IsNullOrEmpty(returnData[DALConstants.CONCESSION_AMOUNT_COL].ToString()))
                        corporateDetails.CONCESSION_AMOUNT = returnData[DALConstants.CONCESSION_AMOUNT_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.REFERENCE_SOURCE_ID_COL].ToString()))
                        corporateDetails.REFERENCE_SOURCE_ID = returnData[DALConstants.REFERENCE_SOURCE_ID_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.REFERENCE_SOURCE_NAME_COL].ToString()))
                        corporateDetails.REFERENCE_SOURCENAME = returnData[DALConstants.REFERENCE_SOURCE_NAME_COL].ToString();
                    corporateDetails.REFERAL_DOCTOR_ID = !string.IsNullOrEmpty(returnData[DALConstants.REFERRED_DOCTOR_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.REFERRED_DOCTOR_ID_COL].ToString()) : 0;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.REFERAL_NAME_COL].ToString()))
                        corporateDetails.REFERAL_NAME = returnData[DALConstants.REFERAL_NAME_COL].ToString();
                    corporateDetails.Department_Name = !DBNull.Value.Equals(returnData[DALConstants.DEPARTMENT_NAME_COL]) ? returnData[DALConstants.DEPARTMENT_NAME_COL].ToString() : string.Empty;
                    corporateDetails.BRANCH_NAME = !DBNull.Value.Equals(returnData[DALConstants.BRANCH_NAME_COL]) ? returnData[DALConstants.BRANCH_NAME_COL].ToString() : string.Empty;
                    corporateDetails.DESIGNATION = !DBNull.Value.Equals(returnData[DALConstants.DESIGNATION_COL]) ? returnData[DALConstants.DESIGNATION_COL].ToString() : string.Empty;
                    corporateDetails.PATIENT_ID = !DBNull.Value.Equals(returnData[DALConstants.PATIENT_ID_COL]) ? returnData[DALConstants.PATIENT_ID_COL].ToString() : "0";
                    corporateDetails.WARD_ID = !string.IsNullOrEmpty(returnData[DALConstants.WARD_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.WARD_ID_COL].ToString()) : 0;
                    corporateDetails.WARD_NAME = !DBNull.Value.Equals(returnData[DALConstants.WARD_NAME_COL]) ? returnData[DALConstants.WARD_NAME_COL].ToString() : string.Empty;
                    corporateDetails.ELIGIBAL_WARD_GROUP_ID = !string.IsNullOrEmpty(returnData[DALConstants.ELIGIBAL_WARD_GROUP_ID_COL].ToString()) ? Convert.ToString(returnData[DALConstants.ELIGIBAL_WARD_GROUP_ID_COL].ToString()) : "0";
                    corporateDetails.WARD_NAME = !DBNull.Value.Equals(returnData[DALConstants.WARD_NAME_COL]) ? returnData[DALConstants.WARD_NAME_COL].ToString() : string.Empty;
                    corporateDetails.CREDIT_LIMIT_AMT = !DBNull.Value.Equals(returnData[DALConstants.CREDIT_LIMIT_AMT_COL]) ? returnData[DALConstants.CREDIT_LIMIT_AMT_COL].ToString() : string.Empty;

                    _empCollection.Add(corporateDetails);

                }
                return (CollectionBase)_empCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Corporate_PatientInfoColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetCompanyReceiptInfoByID(int CompanyId, int patient_class_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_COMPANY_RECEIPT_INFO");
                dBase.AddInParameter(dCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, CompanyId);
                dBase.AddInParameter(dCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, patient_class_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCompanyReceiptCollection);

                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCompanyReceiptInfoByID").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        private CollectionBase GenerateCompanyReceiptCollection(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection creCollection = new PatientRegistrationCollection();

                while (returnData.Read())
                {
                    PatientRegistration cMaster = new PatientRegistration();
                    cMaster.COMPANY_ID = returnData[DALConstants.COMPANY_ID_COL].ToString();
                    cMaster.COMPANY_NAME = returnData[DALConstants.COMPANY_NAME_COL].ToString();
                    cMaster.COMANY_CD = returnData[DALConstants.COMANY_CD_COL].ToString();
                    cMaster.VALNOOF_CON = returnData[DALConstants.VAL_NO_OF_CONSULTATIONS_COL].ToString();
                    cMaster.VALNOOFVISITS = returnData[DALConstants.VAL_NO_OF_VISITS_COL].ToString();
                    cMaster.APPLY_DEFAULT_AOL_CONFGN = returnData[DALConstants.APPLY_DEFAULT_AOL_CONFGN_COL].ToString();
                    cMaster.VALNOOFDAYS = returnData[DALConstants.VAL_NO_OF_DAYS_COL].ToString();
                    cMaster.ORG_PERCENT = returnData[DALConstants.ORG_PERCENT_COL].ToString();
                    cMaster.EMP_PERCENT = returnData[DALConstants.EMP_PERCENT_COL].ToString();
                    cMaster.EFFECT_FROM_DT = returnData[DALConstants.EFFECT_FROM_DT_COL].ToString();
                    cMaster.EFFECT_TO_DT = returnData[DALConstants.EFFECT_TO_DT_COL].ToString();
                    cMaster.COLOR = returnData[DALConstants.COLOUR_ID_COL].ToString();
                    cMaster.IS_LETTER_REQUIRED = !DBNull.Value.Equals(returnData[DALConstants.IS_LETTER_REQUIRED_COL]) ? Convert.ToString(returnData[DALConstants.IS_LETTER_REQUIRED_COL]) : string.Empty;
                    cMaster.CONS_TARIFF_ID = !DBNull.Value.Equals(returnData[DALConstants.CONS_TARIFF_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.CONS_TARIFF_ID_COL]) : 0;
                    cMaster.OP_PRIORITY = !DBNull.Value.Equals(returnData[DALConstants.OP_PRIORITY_COL]) ? Convert.ToString(returnData[DALConstants.OP_PRIORITY_COL]) : string.Empty;
                    cMaster.OP_PRIORITY_COLOR_CDS = !DBNull.Value.Equals(returnData[DALConstants.OP_PRIORITY_COLOR_CDS_COL]) ? Convert.ToString(returnData[DALConstants.OP_PRIORITY_COLOR_CDS_COL]) : string.Empty;
                    cMaster.OP_PRIORITY_TARIFFS = !DBNull.Value.Equals(returnData[DALConstants.OP_PRIORITY_TARIFFS_COL]) ? Convert.ToString(returnData[DALConstants.OP_PRIORITY_TARIFFS_COL]) : string.Empty;
                    cMaster.CONSULTATION_DISC_PER = !DBNull.Value.Equals(returnData["CONSULTATION_DISC_PER"]) ? Convert.ToString(returnData["CONSULTATION_DISC_PER"]) : string.Empty;
                    creCollection.Add(cMaster);
                }
                return creCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCompanyReceiptCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase CheckIdProofStatus(string ProofID, string ProofName, string obj)
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_PAT_ID_PROOF_STATUS");
                dbSvc.AddInParameter(cmd, "@IP_ID_PROOF_ID", DbType.Int32, Convert.ToInt32(ProofID));
                dbSvc.AddInParameter(cmd, "@IP_ID_PROOF_TYPE_NAME", DbType.String, ProofName);
                dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, obj);
                /*dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, 1);*/
                GenerateCollectionReader reader = new GenerateCollectionReader(CheckIdProofStatusColl);
                CollectionBase _Status = _dblayer.ExecuteReaderCommand(cmd, reader);
                return _Status;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CheckIdProofStatus").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase CheckIdProofStatusColl(IDataReader returnData)
        {

            try
            {

                EzHms.ModelEntity.PatientRegistrationCollection PatregColl = new EzHms.ModelEntity.PatientRegistrationCollection();
                while (returnData.Read())
                {

                    EzHms.ModelEntity.PatientRegistration PatReg = new EzHms.ModelEntity.PatientRegistration();
                    PatReg.STATUS = !DBNull.Value.Equals(returnData["STATUS"]) ? Convert.ToString(returnData["STATUS"]) : string.Empty;
                    PatregColl.Add(PatReg);
                }
                return PatregColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CheckPassportStatusColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }
        public CollectionBase Get_Employee_Search(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records, string flag)
        {
            _total_records = 0;
            try
            {

                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;

                string SP_NAME = "";
                if (flag == "AUTH")
                { SP_NAME = "PR_GETALL_AUTHORIZATION"; }
                else SP_NAME = "PR_GETALL_EMPLOYEE";
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, SP_NAME);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUpSearch.PAGE_SIZE);
                //dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                //if (!string.IsNullOrEmpty(_columnName))
                //{
                dbSvc.AddInParameter(cmd, DALConstants.PREFIXTEXT_PARM, DbType.String, _lookUpSearch.PREFIX_TEXT);
                dbSvc.AddInParameter(cmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, _lookUpSearch.COLUMN_NAME);
                //}
                if (_lookUpSearch.PreConditon != null)
                {
                    if (_lookUpSearch.PreConditon.Count == 0)
                    {
                        dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, "AB");
                    }
                    else if (_lookUpSearch.PreConditon[0].ToString() != "AUTH")
                    {
                        dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, _lookUpSearch.PreConditon[0]);
                    }
                }
                if (flag == "AUTH")
                {
                    dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, flag);
                    dbSvc.AddInParameter(cmd, "@IP_TYPE", DbType.String, "E");
                }
                else if (flag == "u" || flag == "n")
                {
                    dbSvc.AddInParameter(cmd, DALConstants.FLAG_PARM, DbType.String, flag);
                }

                if (!string.IsNullOrEmpty(_lookUpSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUpSearch.ADVANCESEARCH);
                dbSvc.AddInParameter(cmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUpSearch.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateEmpCollection);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                //_total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));

                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Employee_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        private CollectionBase GenerateEmpCollection(IDataReader returnData)
        {
            try
            {
                PatientRegistrationCollection collection = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration _element = new PatientRegistration();
                    _element.ID = Convert.ToInt32(returnData[DALConstants.ID_COL].ToString());
                    _element.NAME = returnData[DALConstants.NAME_COL].ToString();
                    _element.CODE = returnData[DALConstants.CODE_COL].ToString();
                    _element.EMPLOYEE_DESC1 = returnData[DALConstants.EMPLOYEE_DESC_COL].ToString();
                    _element.DEPARTMENT = returnData[DALConstants.DEPARTMENT_COL].ToString();
                    _element.Address11 = returnData[DALConstants.ADDRESS_COL].ToString();
                    _element.MOBILE_PHONE1 = returnData[DALConstants.MOBILE_PHONE_COL].ToString();
                    _element.DOB = returnData["DOB"].ToString();
                    _element.SEX = returnData["SEX"].ToString();
                    _element.FIRST_NAME = returnData["FIRST_NAME"].ToString();
                    _element.LAST_NAME = returnData["LAST_NAME"].ToString();
                    _element.MIDDLE_NAME = returnData["MIDDLE_NAME"].ToString();
                    _element.DESIGNATION_NAME = !DBNull.Value.Equals(returnData["DESIGNATION_NAME"]) ? returnData["DESIGNATION_NAME"].ToString() : string.Empty;
                    _element.DESIGNATION_ID = !DBNull.Value.Equals(returnData["DESIGNATION_ID"]) ? Convert.ToInt32(returnData["DESIGNATION_ID"].ToString()) : 0;
                    _element.DEPARTMENT_ID = !DBNull.Value.Equals(returnData["DEPARTMENT_ID"]) ? Convert.ToInt32(returnData["DEPARTMENT_ID"].ToString()) : 0;
                    _element.AGE = !DBNull.Value.Equals(returnData["AGE"]) ? returnData["AGE"].ToString() : string.Empty;
                    _element.EMAIL_ID = !DBNull.Value.Equals(returnData["EMAIL_ID"]) ? returnData["EMAIL_ID"].ToString() : string.Empty;
                    _element.OFFICE_PHONE = returnData["OFFICE_PHONE"].ToString();
                    _element.UMRN = !DBNull.Value.Equals(returnData["UMRN"]) ? returnData["UMRN"].ToString() : string.Empty;
                    //_element.AGE = returnData["AGE"].ToString();
                    _element.NoOfRecords = !DBNull.Value.Equals(returnData["TOT_RECORD_CNT"]) ? Convert.ToInt32(returnData["TOT_RECORD_CNT"].ToString()) : 0;
                    collection.Add(_element);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateEmpCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_Emp_Address_Dtls(int _patID)
        {
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_EMP_ADDRESS");
                dbSvc.AddInParameter(cmd, "@IP_REFERENCE_ID", DbType.Int32, _patID);
                GenerateCollectionReader _reader = new GenerateCollectionReader(Get_Emp_Address_Dtls_coll);
                return _dblayer.ExecuteReaderCommand(cmd, _reader);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Emp_Address_Dtls").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Emp_Address_Dtls_coll(IDataReader objDReader)
        {
            try
            {
                PatientAddress objEmpUtility;
                PatientRegistrationCollection Emp_depends_coll_master = new PatientRegistrationCollection();
                while (objDReader.Read())
                {
                    objEmpUtility = new PatientAddress();
                    if (objDReader["ADDRESS_ID"] != null && objDReader["ADDRESS_ID"].ToString() != string.Empty)
                        objEmpUtility.ADDRESS_ID = objDReader["ADDRESS_ID"].ToString();
                    if (objDReader["ADDRESS_REV_NO"] != null && objDReader["ADDRESS_REV_NO"].ToString() != string.Empty)
                        objEmpUtility.ADDRESS_REV_NO = Convert.ToInt32(objDReader["ADDRESS_REV_NO"].ToString());
                    if (objDReader["AREA_ID"] != null && objDReader["AREA_ID"].ToString() != string.Empty)
                        objEmpUtility.AREA_ID = Convert.ToInt32(objDReader["AREA_ID"].ToString());
                    if (objDReader[DALConstants.AREA_NAME_COL] != null && objDReader[DALConstants.AREA_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.AREA_NAME = objDReader[DALConstants.AREA_NAME_COL].ToString();
                    if (objDReader["CITY_ID"] != null && objDReader["CITY_ID"].ToString() != string.Empty)
                        objEmpUtility.CITY_ID = Convert.ToInt32(objDReader["CITY_ID"].ToString());
                    if (objDReader[DALConstants.CITY_NAME_COL] != null && objDReader[DALConstants.CITY_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.CITY_NAME = objDReader[DALConstants.CITY_NAME_COL].ToString();
                    if (objDReader["STATE_ID"] != null && objDReader["STATE_ID"].ToString() != string.Empty)
                        objEmpUtility.STATE_ID = Convert.ToInt32(objDReader["STATE_ID"].ToString());


                    if (objDReader["DISTRICT_NAME"] != null && objDReader["DISTRICT_NAME"].ToString() != string.Empty)
                        objEmpUtility.DISTRICT_NAME = objDReader["DISTRICT_NAME"].ToString();
                    if (objDReader["DISTRICT_ID"] != null && objDReader["DISTRICT_ID"].ToString() != string.Empty)
                        objEmpUtility.DISTRICT_ID = objDReader["DISTRICT_ID"].ToString();

                    if (objDReader[DALConstants.STATE_NAME_COL] != null && objDReader[DALConstants.STATE_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.STATE_NAME = objDReader[DALConstants.STATE_NAME_COL].ToString();
                    if (objDReader["COUNTRY_ID"] != null && objDReader["COUNTRY_ID"].ToString() != string.Empty)
                        objEmpUtility.COUNTRY_ID = Convert.ToInt32(objDReader["COUNTRY_ID"].ToString());

                    if (objDReader[DALConstants.COUNTRY_NAME_COL] != null && objDReader[DALConstants.COUNTRY_NAME_COL].ToString() != string.Empty)
                        objEmpUtility.COUNTRY_NAME = objDReader[DALConstants.COUNTRY_NAME_COL].ToString();

                    if (objDReader["MOBILE_PHONE"] != null && objDReader["MOBILE_PHONE"].ToString() != string.Empty)
                        objEmpUtility.MOBILE_PHONE = objDReader["MOBILE_PHONE"].ToString();
                    if (objDReader["OFFICE_PHONE"] != null && objDReader["OFFICE_PHONE"].ToString() != string.Empty)
                        objEmpUtility.OFFICE_PHONE = objDReader["OFFICE_PHONE"].ToString();
                    if (objDReader["HOME_PHONE"] != null && objDReader["HOME_PHONE"].ToString() != string.Empty)
                        objEmpUtility.HOME_PHONE = objDReader["HOME_PHONE"].ToString();
                    if (objDReader["ZipCode"] != null && objDReader["ZipCode"].ToString() != string.Empty)
                        objEmpUtility.ZipCode = objDReader["ZipCode"].ToString();

                    if (objDReader["Address1"] != null && objDReader["Address1"].ToString() != string.Empty)
                        objEmpUtility.Address1 = objDReader["Address1"].ToString();
                    if (objDReader["Address2"] != null && objDReader["Address2"].ToString() != string.Empty)
                        objEmpUtility.Address2 = objDReader["Address2"].ToString();
                    if (objDReader["EMAIL_ID"] != null && objDReader["EMAIL_ID"].ToString() != string.Empty)
                        objEmpUtility.Email_ID = objDReader["EMAIL_ID"].ToString();
                    if (objDReader["ADDR_TYPE_ID"] != null && objDReader["ADDR_TYPE_ID"].ToString() != string.Empty)
                        objEmpUtility.ADDR_TYPE_ID = Convert.ToInt32(objDReader["ADDR_TYPE_ID"]);
                    Emp_depends_coll_master.Add(objEmpUtility);
                }
                return Emp_depends_coll_master;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Emp_Address_Dtls_coll").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_Employee_Dtls(int _patID)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbSvc = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_EMPLOYEEINFO_BYID");
                dbSvc.AddInParameter(cmd, "@IP_EMPLOYEE_ID", DbType.Int32, _patID);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(Get_Employee_Dtls_coll);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Emp_Address_Dtls").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Employee_Dtls_coll(IDataReader returnData)
        {
            try
            {
                PatientRegistration objEmpUtility;
                PatientRegistrationCollection Emp_depends_coll_master = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    objEmpUtility = new PatientRegistration();
                    objEmpUtility.EmpCode = !DBNull.Value.Equals(returnData["EMPLOYEE_CD"]) ? Convert.ToString(returnData["EMPLOYEE_CD"]) : string.Empty;
                    objEmpUtility.EmpDOB = !DBNull.Value.Equals(returnData["DOB"]) ? Convert.ToString(returnData["DOB"]) : string.Empty;
                    objEmpUtility.EmpFatherName = !DBNull.Value.Equals(returnData["FATHERNAME"]) ? Convert.ToString(returnData["FATHERNAME"]) : string.Empty;
                    objEmpUtility.EmpFirstName = !DBNull.Value.Equals(returnData["FIRSTNAME"]) ? Convert.ToString(returnData["FIRSTNAME"]) : string.Empty;
                    objEmpUtility.EmpJoiningDt = !DBNull.Value.Equals(returnData["JOININGDATE"]) ? Convert.ToString(returnData["JOININGDATE"]) : string.Empty;
                    objEmpUtility.EmpLastName = !DBNull.Value.Equals(returnData["LASTNAME"]) ? Convert.ToString(returnData["LASTNAME"]) : string.Empty;
                    objEmpUtility.EmpMaritalStatus = !DBNull.Value.Equals(returnData["MARITALSTATUS"]) ? Convert.ToString(returnData["MARITALSTATUS"]) : string.Empty;
                    objEmpUtility.EmpMidName = !DBNull.Value.Equals(returnData["MIDDLENAME"]) ? Convert.ToString(returnData["MIDDLENAME"]) : string.Empty;
                    objEmpUtility.ID = !DBNull.Value.Equals(returnData["NATIONALITY_ID"]) ? Convert.ToInt32(returnData["NATIONALITY_ID"]) : 0;
                    objEmpUtility.EmpNationality = !DBNull.Value.Equals(returnData["NATIONALITY"]) ? Convert.ToString(returnData["NATIONALITY"]) : string.Empty;
                    objEmpUtility.EmpSex = !DBNull.Value.Equals(returnData["SEX"]) ? Convert.ToString(returnData["SEX"]) : string.Empty;
                    objEmpUtility.EmpBloodGroup = !DBNull.Value.Equals(returnData["BLOOD_GROUP"]) ? Convert.ToString(returnData["BLOOD_GROUP"]) : string.Empty;
                    objEmpUtility.AGE = !DBNull.Value.Equals(returnData["AGE"]) ? Convert.ToString(returnData["AGE"]) : "0";
                    objEmpUtility.RES_PERSON_REL_ID = !DBNull.Value.Equals(returnData["RES_PERSON_REL_ID"]) ? Convert.ToString(returnData["RES_PERSON_REL_ID"]) : string.Empty;
                    Emp_depends_coll_master.Add(objEmpUtility);
                }
                return Emp_depends_coll_master;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Emp_Address_Dtls_coll").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase GetPatientPreConsultationDetails1(ReceiptMaster _rept)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ADMISSION");
                dbLayer.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, _rept.UMR_NO);
                dbLayer.AddInParameter(dbCmd, "@IP_ADMN_NO", DbType.String, _rept.ADMN_NO);
                if (!string.IsNullOrEmpty(_rept.ADVANCESEARCH))
                    dbLayer.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _rept.ADVANCESEARCH);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(PreviousConsultationCollection1);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPatientPreConsultationDetails1").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase PreviousConsultationCollection1(IDataReader returnData)
        {
            try
            {
                ReceiptMasterCollection recpMasterCollection = new ReceiptMasterCollection();
                PatientRegistration recpMaster;
                //while (returnData.Read())
                //{
                //    recpMaster = new PatientRegistration();
                //    recpMaster.BILL_ID = !DBNull.Value.Equals(returnData["BILL_ID"]) ? Convert.ToInt32(returnData["BILL_ID"].ToString()) : 0;
                //    recpMaster.BILL_NO = returnData[DALConstants.BILL_NO_COL].ToString();
                //    recpMaster.BILL_TYPE_ID = !DBNull.Value.Equals(returnData["BILL_TYPE_ID"]) ? Convert.ToInt32(returnData["BILL_TYPE_ID"].ToString()) : 0;
                //    recpMaster.BILL_TYPE_NAME = returnData["BILL_TYPE_NAME"].ToString();
                //    recpMaster.CREATE_BY = !DBNull.Value.Equals(returnData["CREATE_BY"]) ? Convert.ToInt32(returnData["CREATE_BY"].ToString()) : 0;
                //    recpMaster.CREATE_BY_NAME = returnData["CREATE_BY_NAME"].ToString();
                //    recpMaster.CREATE_DT = returnData["CREATE_DT"].ToString();
                //    recpMaster.MODIFY_BY = !DBNull.Value.Equals(returnData["MODIFY_BY"]) ? returnData["MODIFY_BY"].ToString() : "0"; 
                //    recpMaster.MODIFY_BY_NAME = returnData["MODIFY_BY_NAME"].ToString();
                //    recpMaster.MODIFY_DT = returnData["MODIFY_DT"].ToString();
                //    recpMaster.ADMN_NO = returnData["ADMN_NO"].ToString();
                //    recpMaster.DISPLAY_NAME = returnData["DISPLAY_NAME"].ToString();
                //    recpMaster.ADMN_DT = returnData["ADMN_DT"].ToString();
                //    recpMaster.DISCHR_DT = returnData["DISCHR_DT"].ToString();
                //    recpMaster.DOCTOR_NAME = returnData["DOCTOR_NAME"].ToString();
                //    recpMaster.GROSS_AMOUNT = !DBNull.Value.Equals(returnData["GROSS_AMOUNT"]) ? float.Parse(returnData["GROSS_AMOUNT"].ToString()) : 0;
                //    recpMaster.CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_AMOUNT"]) ? returnData["CONCESSION_AMOUNT"].ToString() : "0";
                //    recpMaster.NET_AMOUNT = !DBNull.Value.Equals(returnData["NET_AMOUNT"]) ? float.Parse(returnData["NET_AMOUNT"].ToString()) : 0;
                //    recpMaster.PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAID_AMOUNT"]) ? returnData["PAID_AMOUNT"].ToString() : "0";
                //    recpMaster.DUE_AMOUNT = !DBNull.Value.Equals(returnData["DUE_AMOUNT"]) ? returnData["DUE_AMOUNT"].ToString() : "0";
                //    recpMaster.OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["OUTSTANDING_DUE"]) ? returnData["OUTSTANDING_DUE"].ToString() : "0";
                //    recpMaster.POST_DISCOUNT = !DBNull.Value.Equals(returnData["POST_DISCOUNT"]) ? float.Parse(returnData["POST_DISCOUNT"].ToString()) : 0;
                //    recpMaster.REFUND_AMOUNT = !DBNull.Value.Equals(returnData["REFUND_AMOUNT"]) ? returnData["REFUND_AMOUNT"].ToString() : "0";
                //    recpMaster.ADMN_TYPE = !DBNull.Value.Equals(returnData["ADMN_TYPE"]) ? returnData["ADMN_TYPE"].ToString() : string.Empty;
                //    recpMaster.INSU_AMOUNT = !DBNull.Value.Equals(returnData["insurance_amt"]) ? returnData["insurance_amt"].ToString() : string.Empty;
                //    recpMaster.REFERAL_DTLS = !DBNull.Value.Equals(returnData["REFERAL_DTLS"]) ? returnData["REFERAL_DTLS"].ToString() : string.Empty;
                //    recpMaster.PATIENT_CLASS_NAME = !DBNull.Value.Equals(returnData["PATIENT_CLASS_NAME"]) ? returnData["PATIENT_CLASS_NAME"].ToString() : string.Empty;
                //    recpMaster.ADVANCE_AMOUNT = !DBNull.Value.Equals(returnData["ADVANCE_AMOUNT"]) ? returnData["ADVANCE_AMOUNT"].ToString() : string.Empty;
                //    recpMaster.EXCESS_AMOUNT = !DBNull.Value.Equals(returnData["EXCESS_AMOUNT"]) ? float.Parse(returnData["EXCESS_AMOUNT"].ToString()) : 0;
                //    recpMaster.BED_DTLS = !DBNull.Value.Equals(returnData["BED_DTLS"]) ? returnData["BED_DTLS"].ToString() : string.Empty;
                //    recpMaster.DIAGNOSIS = !DBNull.Value.Equals(returnData["DIAGNOSIS_NAME"]) ? returnData["DIAGNOSIS_NAME"].ToString() : string.Empty;
                //    recpMaster.TOKEN_NO = !DBNull.Value.Equals(returnData["TOKEN_NO"]) ? returnData["TOKEN_NO"].ToString() : string.Empty;
                //    recpMasterCollection.Add(recpMaster);
                //}
                return recpMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("PreviousConsultationCollection1").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Get_Referal_Letter(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_REFERAL_LETTER);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);

                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 0)
                {
                    dbSvc.AddInParameter(cmd, GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.PreConditon[0]);
                    dbSvc.AddInParameter(cmd, DALConstants.FROM_DT_PARM, DbType.String, _lookUPSearch.PreConditon[1]);
                    dbSvc.AddInParameter(cmd, DALConstants.TO_DT_PARM, DbType.String, _lookUPSearch.PreConditon[2]);
                    if (_lookUPSearch.PreConditon.Count > 3)
                    {
                        dbSvc.AddInParameter(cmd, GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PreConditon[3]);
                    }
                    else
                    {
                        dbSvc.AddInParameter(cmd, GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, "");
                    }
                    if (_lookUPSearch.PreConditon.Count > 4)
                        dbSvc.AddInParameter(cmd, "@IP_TPA_ID", DbType.Int32, _lookUPSearch.PreConditon[4]);
                }
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 5)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.UMR_NO_PARM, DbType.String, _lookUPSearch.PreConditon[5]);
                }
                if (_lookUPSearch.ADVANCESEARCH != null && _lookUPSearch.ADVANCESEARCH != "")
                {
                    dbSvc.AddInParameter(cmd, GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                }
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 7)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.PATIENT_COVERAGE_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[7]);
                }
                if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 8)
                {
                    dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, _lookUPSearch.PreConditon[8]);
                }
                dbSvc.AddInParameter(cmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUPSearch.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_Referal_Letter_coll);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Referal_Letter").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        private CollectionBase Get_Referal_Letter_coll(IDataReader reader)
        {
            try
            {
                PatientRegistrationCollection _collection = new PatientRegistrationCollection();
                while (reader.Read())
                {
                    PatientRegistration refLetter = new PatientRegistration();
                    if (reader[DALConstants.CMPNY_REFERAL_LETTER_ID_COL].ToString() != string.Empty)
                        refLetter.CMPNY_REFERAL_LETTER_ID = (reader[DALConstants.CMPNY_REFERAL_LETTER_ID_COL].ToString());

                    refLetter.REFERAL_LETTER_NO = reader[DALConstants.REFERAL_LETTER_NO_COL].ToString();
                    refLetter.REFERAL_LETTER_DT = reader[DALConstants.REFERAL_LETTER_DT_COL].ToString();
                    refLetter.ADMN_NO = reader[DALConstants.ADMN_NO_COL].ToString();
                    refLetter.UMR_NO = reader[DALConstants.UMR_NO_COL].ToString();
                    refLetter.EMP_NAME = reader[DALConstants.EMPLOYEE_NAME_COL].ToString();
                    refLetter.EMPLOYEE_ID = reader[DALConstants.EMPLOYEE_ID_COL].ToString();
                    refLetter.CARD_NO = reader[DALConstants.CARD_NO_COL].ToString();
                    if (reader[DALConstants.PATIENT_NAME_COL].ToString() != string.Empty)
                        refLetter.PATIENT_NAME = reader[DALConstants.PATIENT_NAME_COL].ToString();
                    if (reader[DALConstants.POST_DISCOUNT_COL].ToString() != string.Empty)
                        refLetter.POST_DISCOUNT = reader[DALConstants.POST_DISCOUNT_COL].ToString();
                    if (reader[DALConstants.VAL_NO_OF_DAYS_COL].ToString() != string.Empty)
                        refLetter.VAL_NO_OF_DAYS = reader[DALConstants.VAL_NO_OF_DAYS_COL].ToString();

                    refLetter.COMPANY_ID = !DBNull.Value.Equals(reader[DALConstants.COMPANY_ID_COL]) ? (!string.IsNullOrEmpty(reader[DALConstants.COMPANY_ID_COL].ToString()) ? reader[DALConstants.BILL_ID_COL].ToString() : "0") : "0";

                    // BILL_ID,BILL_NO,BILL_DT,CORP_DISCHR_DT,CONCESSION_AMOUNT

                    refLetter.BILL_ID = !DBNull.Value.Equals(reader[DALConstants.BILL_ID_COL]) ? Convert.ToInt32(reader[DALConstants.BILL_ID_COL]) : 0;
                    refLetter.BILL_NO = !DBNull.Value.Equals(reader[DALConstants.BILL_NO_COL]) ? (!string.IsNullOrEmpty(reader[DALConstants.BILL_NO_COL].ToString()) ? reader[DALConstants.BILL_NO_COL].ToString() : "0") : "0";
                    refLetter.BILL_DT = !DBNull.Value.Equals(reader[DALConstants.BILL_DT_COL]) ? (!string.IsNullOrEmpty(reader[DALConstants.BILL_DT_COL].ToString()) ? reader[DALConstants.BILL_DT_COL].ToString() : string.Empty) : string.Empty;
                    refLetter.CORP_DISCHR_DT = !DBNull.Value.Equals(reader["CORP_DISCHR_DT"]) ? (!string.IsNullOrEmpty(reader["CORP_DISCHR_DT"].ToString()) ? reader["CORP_DISCHR_DT"].ToString() : string.Empty) : string.Empty;
                    refLetter.CONCESSION_AMOUNT = !DBNull.Value.Equals(reader[DALConstants.CONCESSION_AMOUNT_COL]) ? (!string.IsNullOrEmpty(reader[DALConstants.CONCESSION_AMOUNT_COL].ToString()) ? reader[DALConstants.CONCESSION_AMOUNT_COL].ToString() : "0") : "0";
                    refLetter.PHAR_STATUS = !DBNull.Value.Equals(reader["PHAR_STATUS"]) ? Convert.ToString(reader["PHAR_STATUS"]) : string.Empty;
                    refLetter.LETTER_ISSUED_BY = !DBNull.Value.Equals(reader["LETTER_ISSUED_BY"]) ? (!string.IsNullOrEmpty(reader["LETTER_ISSUED_BY"].ToString()) ? reader["LETTER_ISSUED_BY"].ToString() : "0") : string.Empty;
                    refLetter.REFERRAL_LETTER_ISSUE_DT = !DBNull.Value.Equals(reader["REFERAL_ISSUE_DT"]) ? (!string.IsNullOrEmpty(reader["REFERAL_ISSUE_DT"].ToString()) ? reader["REFERAL_ISSUE_DT"].ToString() : string.Empty) : string.Empty;
                    refLetter.REFERRAL_VALIDITY_DT = !DBNull.Value.Equals(reader["REFERAL_VALIDITY_DT"]) ? (!string.IsNullOrEmpty(reader["REFERAL_VALIDITY_DT"].ToString()) ? reader["REFERAL_VALIDITY_DT"].ToString() : string.Empty) : string.Empty;
                    refLetter.PATIENT_COVERAGE_ID = !DBNull.Value.Equals(reader["PATIENT_COVERAGE_ID"]) ? (!string.IsNullOrEmpty(reader["PATIENT_COVERAGE_ID"].ToString()) ? reader["PATIENT_COVERAGE_ID"].ToString() : string.Empty) : string.Empty;
                    refLetter.CREDIT_LIMIT_AMT = !DBNull.Value.Equals(reader["CREDIT_LIMIT_AMT"]) ? (!string.IsNullOrEmpty(reader["CREDIT_LIMIT_AMT"].ToString()) ? reader["CREDIT_LIMIT_AMT"].ToString() : string.Empty) : string.Empty;
                    refLetter.STMNT_DONE = !DBNull.Value.Equals(reader["STMNT_DONE"]) ? (!string.IsNullOrEmpty(reader["STMNT_DONE"].ToString()) ? reader["STMNT_DONE"].ToString() : string.Empty) : string.Empty;
                    refLetter.REFRL_LTR_DONE = !DBNull.Value.Equals(reader["REFRL_LTR_DONE"]) ? (!string.IsNullOrEmpty(reader["REFRL_LTR_DONE"].ToString()) ? reader["REFRL_LTR_DONE"].ToString() : string.Empty) : string.Empty;
                    refLetter.TOTAL_CREDIT_LIMIT_AMT = !DBNull.Value.Equals(reader["TOTAL_CREDIT_LIMIT_AMT"]) ? (!string.IsNullOrEmpty(reader["TOTAL_CREDIT_LIMIT_AMT"].ToString()) ? reader["TOTAL_CREDIT_LIMIT_AMT"].ToString() : string.Empty) : string.Empty;
                    refLetter.CREDIT_LIMIT_STATUS = !DBNull.Value.Equals(reader["CREDIT_LIMIT_STATUS"]) ? (!string.IsNullOrEmpty(reader["CREDIT_LIMIT_STATUS"].ToString()) ? reader["CREDIT_LIMIT_STATUS"].ToString() : string.Empty) : string.Empty;
                    refLetter.IS_CREDIT_LIMIT_UNLIMITED = !DBNull.Value.Equals(reader["IS_CREDIT_LIMIT_UNLIMITED"]) ? (!string.IsNullOrEmpty(reader["IS_CREDIT_LIMIT_UNLIMITED"].ToString()) ? reader["IS_CREDIT_LIMIT_UNLIMITED"].ToString() : string.Empty) : string.Empty;
                    refLetter.REMARKS = !DBNull.Value.Equals(reader["REMARKS"]) ? (!string.IsNullOrEmpty(reader["REMARKS"].ToString()) ? reader["REMARKS"].ToString() : string.Empty) : string.Empty;
                    refLetter.RELATIONSHIP_NAME = !DBNull.Value.Equals(reader["RELATIONSHIP_NAME"]) ? (!string.IsNullOrEmpty(reader["RELATIONSHIP_NAME"].ToString()) ? reader["RELATIONSHIP_NAME"].ToString() : "0") : string.Empty;
                    refLetter.UTILIZED_AMOUNT = !DBNull.Value.Equals(reader["UTILISED_AMOUNT"]) ? (!string.IsNullOrEmpty(reader["UTILISED_AMOUNT"].ToString()) ? reader["UTILISED_AMOUNT"].ToString() : string.Empty) : string.Empty;
                    refLetter.EMP_PERCENT = !DBNull.Value.Equals(reader["EMP_PERCENT"]) ? Convert.ToString(reader["EMP_PERCENT"]) : string.Empty;
                    refLetter.ORG_PERCENT = !DBNull.Value.Equals(reader["ORG_PERCENT"]) ? Convert.ToString(reader["ORG_PERCENT"]) : string.Empty;

                    _collection.Add(refLetter);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Referal_Letter_coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetConServicePrice(PriceModal priceMaster)
        {

            try
            {
                DataAccessLayer dAccessLayer = new DataAccessLayer();
                Database dBase = dAccessLayer.DBaseFactory;
                DbCommand dbCmd = dAccessLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_PRICE_NEW_OP");

                dAccessLayer.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, priceMaster.SERVICE_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, priceMaster.CONSULTATION_TYPE_ID);

                dAccessLayer.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, priceMaster.PATIENT_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, priceMaster.TARIFF_ID);

                // dAccessLayer.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, priceMaster.SESSION_ID);

                dAccessLayer.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, priceMaster.COMPANY_ID);
                if (!string.IsNullOrEmpty(priceMaster.PATIENT_CLASS_ID.ToString()))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, priceMaster.PATIENT_CLASS_ID);
                }
                else
                {
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, 0);
                }
                //dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, priceMaster.PATIENT_CLASS_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, priceMaster.PRICE_LEVEL_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.PRICE_TIER_ID_PARM, DbType.Int32, priceMaster.PRICE_TIER_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.WARD_ID_PARM, DbType.Int32, priceMaster.WARD_ID);

                GenerateCollectionReader _SqlData = new GenerateCollectionReader(GenerateConServPriceColl);
                CollectionBase _coll = dAccessLayer.ExecuteReaderCommand(dbCmd, _SqlData);

                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePrice").Name;
                ErrorLoger.InsertErrorLogger(ex, 1702, 1);
                return null;
            }
            //return null;

        }
        public CollectionBase GenerateConServPriceColl(IDataReader returnData)
        {

            Service_PriceModel _objModel = null;
            service_priceCollection _objColl = new service_priceCollection();

            while (returnData.Read())
            {
                _objModel = new Service_PriceModel();
                _objModel.PRICE = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? Convert.ToString(returnData[DALConstants.PRICE_COL]) : string.Empty;


                _objModel.ORG_PRICE = !DBNull.Value.Equals(returnData[DALConstants.ORG_PRICE_COL]) ? Convert.ToString(returnData[DALConstants.ORG_PRICE_COL]) : "0";
                _objModel.DOCTOR_PRICE = !DBNull.Value.Equals(returnData[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToString(returnData[DALConstants.DOCTOR_PRICE_COL]) : "0";


                _objModel.SERVICE_PRICE_ID = !DBNull.Value.Equals(returnData["SERVICE_PRICE_ID"]) ? Convert.ToString(returnData["SERVICE_PRICE_ID"]) : "0";
                _objModel.ORG_PCT = !DBNull.Value.Equals(returnData["ORG_PCT"]) ? Convert.ToString(returnData["ORG_PCT"]) : "0";
                _objModel.DOCTOR_PCT = !DBNull.Value.Equals(returnData["DOCTOR_PCT"]) ? Convert.ToString(returnData["DOCTOR_PCT"]) : "0";

                _objColl.Add(_objModel);
            }

            return _objColl;
        }
    }




}


