using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using System.Collections;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using System.Data.SqlTypes;
using ErrLoger = EzHms.ModelEntity.ErrorLoger;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using System.IO;
namespace EzHms.DataAccessObject
{
    public class DBServices : DBExecuteDataReader
    {
        private Database dbSvc = null;
        private DbCommand cmd = null;
        private DbCommand searchCmd = null;
        public DBServices()
        {
            //TODo Constructor...
        }
        public CollectionBase Get_OutsideLab_InfoListByid(int bus_prtid)
        {
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dbObj = _dbLayer.DBaseFactory;
                dbSvc = _dbLayer.DBaseFactory;
                cmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_BUS_PRTNR_SRV_PRICE_ID_FPNL");
                dbObj.AddInParameter(cmd, DALConstants.BUS_PRTNR_SRV_PRICE_ID_PARM, DbType.Int32, bus_prtid);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateOutsideLabInfo);
                CollectionBase _cBase = _dbLayer.ExecuteReaderCommand(cmd, sqlData);

                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_OutsideLab_InfoListByid").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        private CollectionBase GenerateOutsideLabInfo(IDataReader returnData)
        {
            ServiceCollection _collection = new ServiceCollection();
            try
            {
                while (returnData.Read())
                {
                    Service _serv = new Service();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_ID_COL].ToString()))
                        _serv.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL]);
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_NAME_COL].ToString()))
                        _serv.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.PRICE_COL].ToString()))
                        _serv.SERVICE_PRICE = returnData[DALConstants.PRICE_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_ID_COL].ToString()))
                        _serv.BUS_PRTNR_SRV_PRICE_ID = Convert.ToInt32(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_ID_COL]);

                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_REV_NO_COL].ToString()))
                        _serv.BUS_PRTNR_SRV_PRICE_REV_NO = Convert.ToInt32(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_REV_NO_COL]);

                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUSINESS_PARTNER_ID_COL].ToString()))
                        _serv.BUSINESS_PARTNER_ID = Convert.ToInt32(returnData[DALConstants.BUSINESS_PARTNER_ID_COL]);
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PARTNER_NAME_COL].ToString()))
                        _serv.PARTNER_NAME = returnData[DALConstants.PARTNER_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUSINESS_PARTNER_REV_NO_COL].ToString()))
                        _serv.BUSINESS_PARTNER_REV_NO = Convert.ToInt32(returnData[DALConstants.BUSINESS_PARTNER_REV_NO_COL]);

                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_NAME_COLUMN].ToString()))
                        _serv.SERVICE_GROUP_NAME = returnData[DALConstants.SERVICE_GROUP_NAME_COLUMN].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_PRICE_COL].ToString()))
                        _serv.PRICE = returnData[DALConstants.SERVICE_PRICE_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString()))
                        _serv.SERVICE_GROUP_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_GROUP_ID_COL]);
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_CD_COL].ToString()))
                        _serv.SERVICE_GROUP_CD = returnData[DALConstants.SERVICE_GROUP_CD_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUSINESS_PARTNER_REV_NO_COL].ToString()))
                        _serv.BUS_PRTNR_SRV_PRICE_REV_NO = Convert.ToInt32(returnData[DALConstants.BUSINESS_PARTNER_REV_NO_COL].ToString());
                    if (!string.IsNullOrEmpty(returnData[DALConstants.FIRST_COL].ToString()))
                        _serv.FIRST = returnData[DALConstants.FIRST_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.NEXT_COL].ToString()))
                        _serv.NEXT = returnData[DALConstants.NEXT_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PREV_COL].ToString()))
                        _serv.PREVIOUS = returnData[DALConstants.PREV_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.LAST_COL].ToString()))
                        _serv.LAST = returnData[DALConstants.LAST_COL].ToString();


                    _collection.Add(_serv);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateOutsideLabInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 504, 1);
                return null;
            }
        }

        #region PrivateMethods
        private void AddParameters(string column1, string column2, string tablename)
        {
            try
            {
                dbSvc.AddInParameter(cmd, DALConstants.COLUMN1_PARM, DbType.String, column1);
                dbSvc.AddInParameter(cmd, DALConstants.COLUMN2_PARM, DbType.String, column2);
                dbSvc.AddInParameter(cmd, DALConstants.TNAME_PARM, DbType.String, tablename);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("AddParameters").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
            }
        }
        #endregion PrivateMethods

        public bool DeleteBussPartnerLabCharge(string bus_prtid)
        {
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dbObj = _dbLayer.DBaseFactory;
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_DEL_BUS_PRTNR_SRV_PRICE_ID);
                dbObj.AddInParameter(dbCmd, DALConstants.BUS_PRTNR_SRV_PRICE_ID_PARM, DbType.String, bus_prtid);
                int count = dbObj.ExecuteNonQuery(dbCmd);

                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DeleteBussPartnerLabCharge").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return false;
            }
            //return false;

        }

        public string SaveOutLabChargeSetup(Service _objservice)
        {
            string outPart;
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dbObj = _dbLayer.DBaseFactory;
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_BUS_PRTNR_SRV_PRICE);
                dbObj.AddInParameter(dbCmd, DALConstants.BUS_PRTNR_SRV_PRICE_ID_PARM, DbType.Int32, _objservice.BUS_PRTNR_SRV_PRICE_ID);
                dbObj.AddInParameter(dbCmd, DALConstants.BUSINESS_PARTNER_ID_PARM, DbType.Int32, _objservice.BUSINESS_PARTNER_ID);
                dbObj.AddInParameter(dbCmd, DALConstants.BUS_PRTNR_SRV_PRICE_REV_NO_PARM, DbType.Int32, _objservice.BUS_PRTNR_SRV_PRICE_REV_NO);

                dbObj.AddInParameter(dbCmd, DALConstants.PRICE_PARM, DbType.String, _objservice.SERVICE_PRICE);
                dbObj.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, _objservice.SERVICE_ID);
                dbObj.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, _objservice.SESSION_ID);

                outPart = dbObj.ExecuteScalar(dbCmd).ToString();
                if (outPart != "" && outPart != null)
                {
                    return outPart;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveOutLabChargeSetup").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
            return null;

        }
        #region PublicMethods
        /// <summary>
        /// Get the Service Dimenssions from the VW_Service_Dimenssions
        /// & retruns the collection of Dimenssions
        /// </summary>
        /// <returns></returns>
        public CollectionBase GetDimenssions()
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.STP_GETDIMENSSIONS);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServiceDimenssions);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDimenssions").Name;
                ErrorLoger.InsertErrorLogger(ex, 501, 1);
                return null;
            }
        }
        public CollectionBase Get_OutsideLab_InfoList(int pNo, int pSize, string _columnName, string _prefixTxt, out int _total_records)
        {

            _total_records = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_BUS_PRTNR_SRV_PRICE);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, pNo);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, pSize);
                if (!string.IsNullOrEmpty(_columnName))
                {
                    dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, _columnName);
                    dbSvc.AddInParameter(cmd, "@IP_PREFIXTEXT", DbType.String, _prefixTxt);
                }
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateOutsideLabList);
                CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM).ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM)) : 0;
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_OutsideLab_InfoList").Name;
                ErrorLoger.InsertErrorLogger(ex, 501, 1);
                return null;
            }
        }
        private CollectionBase GenerateOutsideLabList(IDataReader returnData)
        {
            ServiceCollection _collection = new ServiceCollection();
            try
            {
                while (returnData.Read())
                {
                    Service _serv = new Service();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_ID_COL].ToString()))
                        _serv.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL]);
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_NAME_COL].ToString()))
                        _serv.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.PRICE_COL].ToString()))
                        _serv.PRICE = returnData[DALConstants.PRICE_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_ID_COL].ToString()))
                        _serv.BUS_PRTNR_SRV_PRICE_ID = Convert.ToInt32(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_ID_COL]);

                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_REV_NO_COL].ToString()))
                        _serv.BUS_PRTNR_SRV_PRICE_REV_NO = Convert.ToInt32(returnData[DALConstants.BUS_PRTNR_SRV_PRICE_REV_NO_COL]);

                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUSINESS_PARTNER_ID_COL].ToString()))
                        _serv.BUSINESS_PARTNER_ID = Convert.ToInt32(returnData[DALConstants.BUSINESS_PARTNER_ID_COL]);
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PARTNER_NAME_COL].ToString()))
                        _serv.PARTNER_NAME = returnData[DALConstants.PARTNER_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.BUSINESS_PARTNER_REV_NO_COL].ToString()))
                        _serv.BUSINESS_PARTNER_REV_NO = Convert.ToInt32(returnData[DALConstants.BUSINESS_PARTNER_REV_NO_COL]);

                    //if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_NAME_COLUMN].ToString()))
                    //    _serv.SERVICE_GROUP_NAME = returnData[DALConstants.SERVICE_GROUP_NAME_COLUMN].ToString();
                    //    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_PRICE_COL].ToString()))
                    //        _serv.PRICE = returnData[DALConstants.SERVICE_PRICE_COL].ToString();
                    //    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString()))
                    //        _serv.SERVICE_GROUP_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_GROUP_ID_COL]);
                    _collection.Add(_serv);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateOutsideLabList").Name;
                ErrorLoger.InsertErrorLogger(ex, 504, 1);
                return null;
            }
        }
        /// <summary>
        /// Get the Service Dimenssin from the VW_Service_Dimenssions respective to 
        /// the Servic_Seq_ID  & returns collection of values
        /// </summary>
        /// <param name="_serviceID">Service_Seq_ID</param>
        /// <returns></returns>
        public CollectionBase GetDimenssions(int _serviceID)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICEDETAILS);
                dbSvc.AddInParameter(cmd, DALConstants.SERVICE_SEQ_ID_PARM, DbType.Int32, _serviceID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                return _dblayer.ExecuteReaderCommand(cmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDimenssions").Name;
                ErrorLoger.InsertErrorLogger(ex, 502, 1);
                return null;
            }
        }
        #region Getting Service Price Dimension

        //public CollectionBase GetPriceDimension()
        //{
        //    DataAccessLayer _dblayer = new DataAccessLayer();
        //    dbSvc = _dblayer.DBaseFactory;
        //    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICEDIMENSION);
        //    GenerateCollectionReader sqlData = new GenerateCollectionReader(GeneratePriceDimension);
        //    return _dblayer.ExecuteReaderCommand(cmd, sqlData);
        //}

        //public CollectionBase GeneratePriceDimension(IDataReader returndata)
        //{
        //    ServicePriceDimCollection _serdimcol = new ServicePriceDimCollection();
        //    while (returndata.Read())
        //    {
        //        ServicePriceDim _servdim = new ServicePriceDim();
        //        _servdim.PriceDimID = Convert.ToInt32(returndata["PRICE_DIM_SEQ_ID"]);
        //        _servdim.ServiceDimCD = returndata["PRICE_DIM_CD"].ToString();
        //        _servdim.ServiceDimDESC = returndata["PRICE_DIM_DESC"].ToString();
        //        _serdimcol.Add(_servdim);
        //    }
        //    return _serdimcol;
        //}

        public CollectionBase GetPriceDimension(ListElements _element, int pageno, int pagesize)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                ServicePriceDimCollection _collection = new ServicePriceDimCollection();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICE_PRICE_DIMENSION);
                if (_element != null)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.INSTRING_PARM, DbType.String, _element.Text);
                    dbSvc.AddInParameter(cmd, DALConstants.COLUMN_NAME_PARM, DbType.String, _element.Value);
                }
                dbSvc.AddInParameter(cmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, pageno);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, pagesize);
                GenerateCollectonList _list = new GenerateCollectonList(GeneratePriceDimension);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceDimension").Name;
                ErrorLoger.InsertErrorLogger(ex, 503, 1);
                return null;
            }
        }
        private CollectionBase GeneratePriceDimension(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ServicePriceDim _servdim = new ServicePriceDim();
                    _servdim.PriceDimID = Convert.ToInt32(returnData[DALConstants.PRICE_DIM_SEQ_ID_COL]);
                    _servdim.ServiceDimCD = returnData[DALConstants.PRICE_DIM_CD_COL].ToString();
                    _servdim.ServiceDimDESC = returnData[DALConstants.PRICE_DIM_DESC_COL].ToString();
                    _servdim.Count = Convert.ToInt32(returnData[DALConstants.NOOFRECORDS_COL].ToString());

                    _collection.Add(_servdim);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GeneratePriceDimension").Name;
                ErrorLoger.InsertErrorLogger(ex, 504, 1);
                return null;
            }
        }
        #endregion

        //public bool Save_Service_Price(ServiceDimenssion _dimenssion)
        //{
        //    DataAccessLayer dbLayer = new DataAccessLayer();
        //    dbSvc = dbLayer.DBaseFactory;
        //    cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.STP_INS_SERVICE_PRICE);
        //    if (_dimenssion.BED_TYPE_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.BED_TYPE_SEQ_ID_PARM, DbType.Int32, _dimenssion.BED_TYPE_SEQ_ID);
        //    if (_dimenssion.CONSULTATION_TYPE_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.CONSULTATION_TYPE_SEQ_ID_PARM, DbType.Int32, _dimenssion.CONSULTATION_TYPE_SEQ_ID);
        //    if (_dimenssion.COVERAGE_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.COVERAGE_SEQ_ID_PARM, DbType.Int32, _dimenssion.COVERAGE_SEQ_ID);
        //    if (_dimenssion.DEPARTMENT_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.DEPARTMENT_SEQ_ID_PARM, DbType.Int32, _dimenssion.DEPARTMENT_SEQ_ID);
        //    if (_dimenssion.DOCTOR_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.DOCTOR_SEQ_ID_PARM, DbType.Int32, _dimenssion.DOCTOR_SEQ_ID);
        //    if (_dimenssion.FACILITY_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.FACILITY_SEQ_ID_PARM, DbType.Int32, _dimenssion.FACILITY_SEQ_ID);
        //    if (_dimenssion.HOSPITAL_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.HOSPITAL_SEQ_ID_PARM, DbType.Int32, _dimenssion.HOSPITAL_SEQ_ID);
        //    if (_dimenssion.PRICE_CLASS_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.PRICE_CLASS_SEQ_ID_PARM, DbType.Int32, _dimenssion.PRICE_CLASS_SEQ_ID);
        //    if (_dimenssion.PRICE_LEVEL_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.PRICE_LEVEL_SEQ_ID_PARM, DbType.Int32, _dimenssion.PRICE_LEVEL_SEQ_ID);
        //    if (_dimenssion.SERVICE_PRICE_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.SERVICE_PRICE_SEQ_ID_PARM, DbType.Int32, _dimenssion.SERVICE_PRICE_SEQ_ID);
        //    if (_dimenssion.SERVICE_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.SERVICE_SEQ_ID_PARM, DbType.Int32, _dimenssion.SERVICE_SEQ_ID);
        //    if (_dimenssion.SURGERY_CATEGORY_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.SURGERY_CATEGORY_SEQ_ID_PARM, DbType.Int32, _dimenssion.SURGERY_CATEGORY_SEQ_ID);
        //    if (_dimenssion.SURGERY_CLASS_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.SURGERY_CLASS_SEQ_ID_PARM, DbType.Int32, _dimenssion.SURGERY_CLASS_SEQ_ID);
        //    if (_dimenssion.TARIFF_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.TARIFF_SEQ_ID_PARM, DbType.Int32, _dimenssion.TARIFF_SEQ_ID);
        //    if (_dimenssion.WARD_GROUP_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.WARD_GROUP_SEQ_ID_PARM, DbType.Int32, _dimenssion.WARD_GROUP_SEQ_ID);
        //    if (_dimenssion.WARD_SEQ_ID > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.WARD_SEQ_ID_PARM, DbType.Int32, _dimenssion.WARD_SEQ_ID);
        //    if (!string.IsNullOrEmpty(_dimenssion.START_DT))
        //        dbSvc.AddInParameter(cmd, DALConstants.START_DT_PARM, DbType.DateTime, _dimenssion.START_DT);
        //    if (!string.IsNullOrEmpty(_dimenssion.END_DT))
        //        dbSvc.AddInParameter(cmd, DALConstants.END_DT_PARM, DbType.DateTime, _dimenssion.END_DT);
        //    if (_dimenssion.NO_OF_DAYS > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.NO_OF_DAYS_PARM, DbType.Int32, _dimenssion.NO_OF_DAYS);
        //    if (_dimenssion.NO_OF_VISITS > 0)
        //        dbSvc.AddInParameter(cmd, DALConstants.NO_OF_VISITS_PARM, DbType.Int32, _dimenssion.NO_OF_VISITS);
        //    dbSvc.AddInParameter(cmd, DALConstants.PRICE_PARM, DbType.Int32, _dimenssion.PRICE);
        //    return dbSvc.ExecuteNonQuery(cmd) > 0 ? true : false;
        //    //if (!string.IsNullOrEmpty(_columnNames))
        //    //  dbSvc.AddInParameter(cmd, DALConstants.SERV_COL_NAMES_PARM, DbType.String, _columnNames);
        //    //return dbLayer.ExecuteNonQuery(cmd);
        //}

        public bool Save_Ser_Price(ServicePrice _dimenssion)
        {

            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                dbSvc = dbLayer.DBaseFactory;
                cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.STP_INS_SERVICE_PRICE);


                if (!string.IsNullOrEmpty(_dimenssion.SERVICE_PRICE_ID))
                    dbLayer.AddInParameter(cmd, "@IP_SERVICE_PRICE_ID", DbType.String, _dimenssion.SERVICE_PRICE_ID);
                else
                    dbLayer.AddInParameter(cmd, "@IP_SERVICE_PRICE_ID", DbType.String, null);

                if (_dimenssion.SERVICE_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, _dimenssion.SERVICE_ID);


                dbLayer.AddInParameter(cmd, "@IP_SERVICE_PRICE_REV_NO", DbType.String, _dimenssion.Service_Price_Rev_No);
                //if (!string.IsNullOrEmpty(_dimenssion.Service_Price_Rev_No))
                //    dbSvc.AddInParameter(cmd, DALConstants.SERVICE_PRICE_REV_NO, DbType.String, _dimenssion.Service_Price_Rev_No);
                if (_dimenssion.TARIFF_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, _dimenssion.TARIFF_ID);
                //if (_dimenssion.HOSPITAL_ID > 0)
                //    dbSvc.AddInParameter(cmd, DALConstants.HOSPITAL_ID_PARM, DbType.Int32, _dimenssion.HOSPITAL_ID);

                if (_dimenssion.DOCTOR_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.DOCTOR_ID_PARM, DbType.Int32, _dimenssion.DOCTOR_ID);

                if (!string.IsNullOrEmpty(_dimenssion.ConsulWardPrice))
                    dbLayer.AddInParameter(cmd, DALConstants.CONSULTATION_WARG_PRICE, DbType.String, _dimenssion.ConsulWardPrice);

                if (_dimenssion.NO_OF_DAYS > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.NO_OF_DAYS_PARM, DbType.Int32, _dimenssion.NO_OF_DAYS);

                if (_dimenssion.NO_OF_VISITS > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.NO_OF_VISITS_PARM, DbType.Int32, _dimenssion.NO_OF_VISITS);

                if (_dimenssion.DOCTOR_PRICE > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.DOCTOR_PRICE_PARM, DbType.Int32, _dimenssion.DOCTOR_PRICE);

                if (_dimenssion.HOSPITAL_PRICE > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.HOSPITAL_PRICE_PARM, DbType.Int32, _dimenssion.HOSPITAL_PRICE);

                dbSvc.AddInParameter(cmd, DALConstants.COST_PARM, DbType.Int32, _dimenssion.COST);

                if (!string.IsNullOrEmpty(_dimenssion.START_DT))
                    dbLayer.AddInParameter(cmd, DALConstants.START_DT_PARM, DbType.DateTime, _dimenssion.START_DT);

                if (!string.IsNullOrEmpty(_dimenssion.END_DT))
                    dbLayer.AddInParameter(cmd, DALConstants.END_DT_PARM, DbType.DateTime, _dimenssion.END_DT);

                if (_dimenssion.FACILITY_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.FACILITY_ID_PARM, DbType.Int32, _dimenssion.FACILITY_ID);

                if (_dimenssion.WARD_ID > 0)
                    dbSvc.AddInParameter(cmd, DALConstants.WARD_ID_PARM, DbType.Int32, _dimenssion.WARD_ID);

                if (_dimenssion.SURGERY_CATEGORY_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.SURGERY_CATEGORY_ID_PARM, DbType.Int32, _dimenssion.SURGERY_CATEGORY_ID);

                if (_dimenssion.SURGERY_CLASS_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.SURGERY_CLASS_ID_PARM, DbType.Int32, _dimenssion.SURGERY_CLASS_ID);

                if (_dimenssion.DEPARTMENT_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, _dimenssion.DEPARTMENT_ID);

                if (_dimenssion.BED_TYPE_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.BED_TYPE_ID_PARM, DbType.Int32, _dimenssion.BED_TYPE_ID);

                if (_dimenssion.PATIENT_CLASS_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, _dimenssion.PATIENT_CLASS_ID);

                if (_dimenssion.PRICE_TIER_ID > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.PRICE_TIER_ID_PARM, DbType.Int32, _dimenssion.PRICE_TIER_ID);

                if (_dimenssion.Doctor_cat_id > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.DOCTOR_CAT_ID_PARM, DbType.Int32, _dimenssion.Doctor_cat_id);

                if (_dimenssion.CREATE_BY > 0)
                    dbLayer.AddInParameter(cmd, DALConstants.CREATE_BY_PARM, DbType.Int32, _dimenssion.CREATE_BY);
                //if (_dimenssion.Patient> 0)
                //dbSvc.AddInParameter(cmd, DALConstants., DbType.Int32, _dimenssion.PRICE_CLASS_ID);
                dbLayer.AddInParameter(cmd, DALConstants.PRICE_PARM, DbType.String, _dimenssion.PRICE);
                //  dbSvc.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, _dimenssion.SESSION_ID);
                //dbSvc.AddInParameter(cmd, DALConstants.PRICE_PARM, DbType.Int32, _dimenssion.PRICE);

                return dbLayer.ExecuteNonQuery(cmd);
                //return dbSvc.ExecuteNonQuery(cmd) > 0 ? true : false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Ser_Price").Name;
                ErrorLoger.InsertErrorLogger(ex, 505, 1);
                return false;
            }
        }

       

     
      

        public CollectionBase Get_Service_Price_Details(string dySearch)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.PR_GET_SERVICE_PRICE);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicePriceCollection);
                dBase.AddInParameter(dCmd, "IP_CONDITION", DbType.String, dySearch);
                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Service_Price_Details").Name;
                ErrorLoger.InsertErrorLogger(ex, 506, 1);
                return null;
            }
        }
        public CollectionBase Get_Service_Price_Details_Cons(string dySearch)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_PRICE_BY");
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicePriceCollection);
                dBase.AddInParameter(dCmd, "IP_CONDITION", DbType.String, dySearch);
                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Service_Price_Details_Cons").Name;
                ErrorLoger.InsertErrorLogger(ex, 506, 1);
                return null;
            }
        }
        public CollectionBase Get_Service_Price_OnTariff_Doctor(int tariffID, int doctorID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.PR_GET_SERVICE_PRICE);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicePriceCollection);
                dBase.AddInParameter(dCmd, "IP_TARIFF_ID", DbType.Int32, tariffID);
                dBase.AddInParameter(dCmd, "IP_DOCTOR_ID", DbType.Int32, doctorID);
                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Service_Price_OnTariff_Doctor").Name;
                ErrorLoger.InsertErrorLogger(ex, 507, 1);
                return null;
            }
        }

        public CollectionBase GetServicePriceCollection(IDataReader returnData)
        {
            try
            {
                service_priceCollection serPriceColl = new service_priceCollection();
                Service_PriceModel serPrice;
                while (returnData.Read())
                {
                    serPrice = new Service_PriceModel();
                    serPrice.SERVICE_PRICE_ID = !DBNull.Value.Equals(returnData["SERVICE_PRICE_ID"]) ? Convert.ToString(returnData["SERVICE_PRICE_ID"]) : "0";
                    serPrice.SERVICE_PRICE_REV_NO = !DBNull.Value.Equals(returnData["SERVICE_PRICE_REV_NO"]) ? Convert.ToString(returnData["SERVICE_PRICE_REV_NO"]) : "0";
                    serPrice.SERVICE_ID = !DBNull.Value.Equals(returnData["SERVICE_ID"]) ? Convert.ToInt32(returnData["SERVICE_ID"].ToString()) : 0;
                    serPrice.START_DT = !DBNull.Value.Equals(returnData["START_DT"]) ? Convert.ToString(returnData["START_DT"]) : "";
                    serPrice.END_DT = !DBNull.Value.Equals(returnData["END_DT"]) ? Convert.ToString(returnData["END_DT"]) : "";
                    serPrice.CREATE_BY = !DBNull.Value.Equals(returnData["CREATE_BY"]) ? Convert.ToInt32(returnData["CREATE_BY"].ToString()) : 0;
                    serPrice.CREATE_DT = !DBNull.Value.Equals(returnData["CREATE_DT"]) ? Convert.ToString(returnData["CREATE_DT"]) : "0";
                    serPrice.MODIFY_BY = !DBNull.Value.Equals(returnData["MODIFY_BY"]) ? Convert.ToInt32(returnData["MODIFY_BY"].ToString()) : 0;
                    serPrice.MODIFY_DT = !DBNull.Value.Equals(returnData["MODIFY_DT"]) ? Convert.ToString(returnData["MODIFY_DT"]) : "";
                    serPrice.PRICE_TIER_ID = !DBNull.Value.Equals(returnData["PRICE_TIER_ID"]) ? Convert.ToInt32(returnData["PRICE_TIER_ID"].ToString()) : 0;
                    serPrice.TARIFF_ID = !DBNull.Value.Equals(returnData["TARIFF_ID"]) ? Convert.ToInt32(returnData["TARIFF_ID"].ToString()) : 0;
                    serPrice.ORG_PRICE = !DBNull.Value.Equals(returnData["ORG_PRICE"]) ? Convert.ToString(returnData["ORG_PRICE"]) : "0";
                    serPrice.DOCTOR_PRICE = !DBNull.Value.Equals(returnData["DOCTOR_PRICE"]) ? Convert.ToString(returnData["DOCTOR_PRICE"]) : "0";
                    serPrice.PRICE = !DBNull.Value.Equals(returnData["PRICE"]) ? Convert.ToString(returnData["PRICE"]) : "0";
                    serPrice.COST = !DBNull.Value.Equals(returnData["COST"]) ? Convert.ToString(returnData["COST"]) : "0";
                    serPrice.NO_OF_DAYS = !DBNull.Value.Equals(returnData["NO_OF_DAYS"]) ? Convert.ToInt32(returnData["NO_OF_DAYS"].ToString()) : 0;
                    serPrice.NO_OF_VISITS = !DBNull.Value.Equals(returnData["NO_OF_VISITS"]) ? Convert.ToInt32(returnData["NO_OF_VISITS"].ToString()) : 0;
                    serPrice.DOCTOR_ID = !DBNull.Value.Equals(returnData["DOCTOR_ID"]) ? Convert.ToInt32(returnData["DOCTOR_ID"].ToString()) : 0;
                    serPrice.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(returnData["CONSULTATION_TYPE_ID"]) ? Convert.ToInt32(returnData["CONSULTATION_TYPE_ID"].ToString()) : 0;
                    serPrice.WARD_GROUP_ID = !DBNull.Value.Equals(returnData["WARD_GROUP_ID"]) ? Convert.ToInt32(returnData["WARD_GROUP_ID"].ToString()) : 0;
                    serPrice.WARD_ID = !DBNull.Value.Equals(returnData["WARD_ID"]) ? Convert.ToInt32(returnData["WARD_ID"].ToString()) : 0;
                    serPrice.SURGERY_CATEGORY_ID = !DBNull.Value.Equals(returnData["SURGERY_CATEGORY_ID"]) ? Convert.ToInt32(returnData["SURGERY_CATEGORY_ID"].ToString()) : 0;
                    serPrice.SURGERY_CLASS_ID = !DBNull.Value.Equals(returnData["SURGERY_CLASS_ID"]) ? Convert.ToInt32(returnData["SURGERY_CLASS_ID"].ToString()) : 0;
                    serPrice.DEPARTMENT_ID = !DBNull.Value.Equals(returnData["DEPARTMENT_ID"]) ? Convert.ToInt32(returnData["DEPARTMENT_ID"].ToString()) : 0;
                    serPrice.BED_TYPE_ID = !DBNull.Value.Equals(returnData["BED_TYPE_ID"]) ? Convert.ToInt32(returnData["BED_TYPE_ID"].ToString()) : 0;
                    serPrice.PATIENT_CLASS_ID = !DBNull.Value.Equals(returnData["PATIENT_CLASS_ID"]) ? Convert.ToInt32(returnData["PATIENT_CLASS_ID"].ToString()) : 0;
                    serPrice.SERVICE_PRICE_REV_NO = !DBNull.Value.Equals(returnData["SERVICE_PRICE_REV_NO"]) ? Convert.ToString(returnData["SERVICE_PRICE_REV_NO"]) : "0";
                    serPrice.NO_OF_PAID_REVISITS = !DBNull.Value.Equals(returnData["NO_OF_PAID_REVISITS"]) ? Convert.ToString(returnData["NO_OF_PAID_REVISITS"]) : "0";
                    serPrice.NO_OF_FREE_REVISITS = !DBNull.Value.Equals(returnData["NO_OF_FREE_REVISITS"]) ? Convert.ToString(returnData["NO_OF_FREE_REVISITS"]) : "0";
                    serPrice.WARD_GROUP_CD = !DBNull.Value.Equals(returnData["WARD_GROUP_CD"]) ? Convert.ToString(returnData["WARD_GROUP_CD"]) : "";
                    serPrice.CHARGE_TYPE_ID = !DBNull.Value.Equals(returnData["CHARGE_TYPE_ID"]) ? Convert.ToInt32(returnData["CHARGE_TYPE_ID"]) : 0;
                    serPrice.EMERGENCY_PRICE = !DBNull.Value.Equals(returnData["EMERGNCY_PRICE"]) ? Convert.ToString(returnData["EMERGNCY_PRICE"]) : "0";
                    serPrice.OT_CATEGORY_ID = !DBNull.Value.Equals(returnData["OT_CATEGORY_ID"]) ? Convert.ToString(returnData["OT_CATEGORY_ID"]) : "0";
                    serPrice.FROM_MINUTE = !DBNull.Value.Equals(returnData["FROM_MINUTE"]) ? Convert.ToString(returnData["FROM_MINUTE"]) : "0";
                    serPrice.TO_MINUTE = !DBNull.Value.Equals(returnData["TO_MINUTE"]) ? Convert.ToString(returnData["TO_MINUTE"]) : "0";
                    serPrice.PRICE_DIM_ID = !DBNull.Value.Equals(returnData["PRICE_DIM_ID"]) ? Convert.ToInt32(returnData["PRICE_DIM_ID"].ToString()) : 0;
                    serPrice.ORG_PCT = !DBNull.Value.Equals(returnData["ORG_PCT"]) ? Convert.ToString(returnData["ORG_PCT"]) : "0";
                    serPrice.DOCTOR_PCT = !DBNull.Value.Equals(returnData["DOCTOR_PCT"]) ? Convert.ToString(returnData["DOCTOR_PCT"]) : "0";

                    serPriceColl.Add(serPrice);

                }
                return serPriceColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePriceCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 508, 1);
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
                    case ServiceDimenssions.DOCTOR:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABLEDATA);
                            AddParameters(DALConstants.DOCTOR_ID_COL, DALConstants.DOCTOR_DISPLAY_NAME_COL, DALConstants.DOCTOR);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                        }
                    //case ServiceDimenssions.FACILITY:
                    //    {
                    //        LevelCollection _collection = new LevelCollection();
                    //        cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABLEDATA);
                    //        AddParameters(DALConstants.FACILITY_ID_COL, DALConstants.FACILITY_DESC_COL, DALConstants.FACILITY);
                    //        GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                    //        return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                    //    }
                    case ServiceDimenssions.BED_TYPE:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABLEDATA);
                            AddParameters(DALConstants.BED_TYPE_ID_COL, DALConstants.BED_TYPE_DESC_COL, DALConstants.BED_TYPE_TABLE);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                        }
                    case ServiceDimenssions.CONSULTATION_TYPE:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABLEDATA);
                            AddParameters(DALConstants.CONSULTATION_TYPE_ID_COL, DALConstants.CONSULTATION_TYPE_DESC_COL, DALConstants.CONSULTATION_TYPE);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                        }
                    case ServiceDimenssions.WARD:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABLEDATA);
                            AddParameters(DALConstants.WARD_ID_COL, DALConstants.WARD_DESC_COL, DALConstants.WARD_TABLE);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                        }
                    case ServiceDimenssions.WARD_GROUP:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_WARDGROUPS);
                            AddParameters(DALConstants.WARD_GROUP_ID_COL, DALConstants.WARD_GROUP_DESC_COL, DALConstants.WARDGROUP);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);

                            //EntityValueMasterCollection enityCollection = new EntityValueMasterCollection();
                            //cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_WARDGROUPS);
                            //GenerateCollectionReader collList = new GenerateCollectionReader(GetWardGroupCollections);
                            //return _dblayer.ExecuteReaderCommand(cmd, collList);
                        }
                    case ServiceDimenssions.GENERAL_WARD_GROUP:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_GENERAL_WARDGROUPS);
                            AddParameters(DALConstants.WARD_GROUP_ID_COL, DALConstants.WARD_GROUP_DESC_COL, DALConstants.WARDGROUP);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                        }
                    case ServiceDimenssions.DEPARTMENT:
                        {
                            LevelCollection _collection = new LevelCollection();
                            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_TABLEDATA);
                            AddParameters(DALConstants.DEPARTMENT_ID_COL, DALConstants.DEPARTMENT_NAME_COL, DALConstants.DEPARTMENT);
                            GenerateCollectonList _reader = new GenerateCollectonList(GenerateLevelCollection);
                            return _dblayer.ExecuteReaderCommand(cmd, _reader, _collection);
                        }
                }
                return null;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLevelCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 509, 1);
                return null;
            }
        }

        
     

     

     
       

        public CollectionBase GetPriceLevels(ListElements _element, int pageSize, int currentPage)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICE_PRICE_LEVELS);
                if (_element != null)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.SEARCH_TEXT, DbType.String, _element.Text);
                    dbSvc.AddInParameter(cmd, DALConstants.COLUMN_NAME_PARM, DbType.String, _element.Value);
                }
                dbSvc.AddInParameter(cmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, pageSize);
                dbSvc.AddInParameter(cmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, currentPage);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, 0);
                //dbSvc.AddInParameter(cmd, "IP_PREFIX_TEXT",DbType.String,1);
                GenerateCollectionReader _list = new GenerateCollectionReader(GetPriceLevelsCollection);
                return _dblayer.ExecuteReaderCommand(cmd, _list);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceLevels").Name;
                ErrorLoger.InsertErrorLogger(ex, 511, 1);
                return null;
            }
        }

        public CollectionBase GetPriceDimSearch(string colName, string ColData)
        {
            try
            {
                ServicePriceDimCollection _servdimcol = new ServicePriceDimCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                searchCmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICELEVELCOLUMNBASED);
                dbSvc.AddInParameter(searchCmd, DALConstants.SL_IP_COLUMN_NAME, DbType.String, colName);
                dbSvc.AddInParameter(searchCmd, DALConstants.SL_IP_COLUMN_DATA, DbType.String, ColData);
                GenerateCollectonList _list = new GenerateCollectonList(Getpricedimsearchcol);
                return _dblayer.ExecuteReaderCommand(searchCmd, _list, _servdimcol);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceDimSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 512, 1);
                return null;
            }

        }

        protected CollectionBase Getpricedimsearchcol(IDataReader returndata, IList _list)
        {
            try
            {
                while (returndata.Read())
                {
                    ServicePriceDim _servdim = new ServicePriceDim();
                    _servdim.ServiceDimCD = returndata["PRICE_DIM_CD"].ToString();
                    _servdim.ServiceDimDESC = returndata["PRICE_DIM_DESC"].ToString();
                    _list.Add(_servdim);
                }
                return (CollectionBase)_list;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getpricedimsearchcol").Name;
                ErrorLoger.InsertErrorLogger(ex, 513, 1);
                return null;
            }
        }

        public CollectionBase GetPriceLevelsSearch(string colName, string ColData)
        {
            try
            {
                //int totalCount = 0;
                LevelCollection _collection = new LevelCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                searchCmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_GET_SERVICEDIMCOLUMNBASED);

                dbSvc.AddInParameter(searchCmd, DALConstants.SL_IP_COLUMN_NAME, DbType.String, colName);
                dbSvc.AddInParameter(searchCmd, DALConstants.SL_IP_COLUMN_DATA, DbType.String, ColData);

                GenerateCollectionReader _list = new GenerateCollectionReader(GetPriceLevelsSrc);
                return _dblayer.ExecuteReaderCommand(searchCmd, _list);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceLevelsSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 514, 1);
                return null;
            }
        }

        public CollectionBase GetServicePrices()
        {
            try
            {
                LevelCollection _collection = new LevelCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICEPRICEDETAILS);
                GenerateCollectonList _list = new GenerateCollectonList(GetPriceDetails);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePrices").Name;
                ErrorLoger.InsertErrorLogger(ex, 515, 1);
                return null;
            }
        }

        

        public CollectionBase GetServiceMappings(ListElements _element, int pageSize, int currentPage)
        {
            try
            {
                ServiceMappingCollection _collection = new ServiceMappingCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICE_MAPPINGS);
                if (_element != null)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_Instring, DbType.String, _element.Text);
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_ColumnName, DbType.String, _element.Value);
                }
                // dbSvc.AddInParameter(cmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, pageSize);
                //dbSvc.AddInParameter(cmd, DALConstants.pNum, DbType.Int32, PAGENO);
                dbSvc.AddInParameter(cmd, DALConstants.SM_IP_pageSize, DbType.Int32, pageSize);
                dbSvc.AddInParameter(cmd, DALConstants.SM_IP_pageNum, DbType.Int32, currentPage);
                //dbSvc.AddOutParameter(cmd, "@tolcount", DbType.Int32, 30);
                GenerateCollectonList _list = new GenerateCollectonList(GetServiceMappings);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMappings").Name;
                ErrorLoger.InsertErrorLogger(ex, 518, 1);
                return null;
            }
        }

        public CollectionBase GetServiceMappingsDimension(ListElements _element)
        {
            try
            {
                ServiceMappingCollection _collection = new ServiceMappingCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICE_MAPPINGS);
                if (_element != null)
                {
                    dbSvc.AddInParameter(cmd, DALConstants.INSTRING_PARM, DbType.String, _element.Text);
                    dbSvc.AddInParameter(cmd, "@ColumnName", DbType.String, _element.Value);
                }
                //dbSvc.AddInParameter(cmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, pageSize);
                ////dbSvc.AddInParameter(cmd, DALConstants.pNum, DbType.Int32, PAGENO);
                //dbSvc.AddInParameter(cmd, "@PAGENO", DbType.Int32, currentPage);
                //dbSvc.AddOutParameter(cmd, "@tolcount", DbType.Int32, 30);
                GenerateCollectonList _list = new GenerateCollectonList(GetServiceMappingsDim);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMappingsDimension").Name;
                ErrorLoger.InsertErrorLogger(ex, 519, 1);
                return null;
            }
        }
        public CollectionBase GetServiceMappingSearch(string SearchField, string SearchText)
        {
            try
            {
                ServiceMappingCollection _searchColl = new ServiceMappingCollection();
                DataAccessLayer _dbLayer = new DataAccessLayer();
                dbSvc = _dbLayer.DBaseFactory;
                searchCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_GET_SERVICEMAPCOLUMNBASED);
                dbSvc.AddInParameter(searchCmd, "@COLUMN_NAME", DbType.String, SearchField);
                dbSvc.AddInParameter(searchCmd, "@COLUMN_DATA", DbType.String, SearchText);
                GenerateCollectonList _list = new GenerateCollectonList(GetMapSearch);
                return _dbLayer.ExecuteReaderCommand(searchCmd, _list, _searchColl);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMappingSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 520, 1);
                return null;
            }
        }
        //Search fo Service Level
        //public CollectionBase GetServiceLevelByColumnSearch(string colName, string ColData)
        //{//sp to be created
        //    ServiceMappingCollection _collection = new ServiceMappingCollection();
        //    DataAccessLayer _dblayer = new DataAccessLayer();
        //    dbSvc = _dblayer.DBaseFactory;
        //    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICELEVELCOLUMNBASED);

        //    dbSvc.AddInParameter(cmd, "@COLUMN_NAME", DbType.String, colName);
        //    dbSvc.AddInParameter(cmd, "@COLUMN_DATA", DbType.String, ColData);
        //    GenerateCollectonList _list = new GenerateCollectonList(GetServiceLevel);
        //    return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
        //}
        //sp to get servicemapping by search
        public CollectionBase GetSericeMapByColumnSearch(string colName, string ColData)
        {//sp to be created
            try
            {
                ServiceMappingCollection _collection = new ServiceMappingCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_GET_SERVICEMAPCOLUMNBASED);

                dbSvc.AddInParameter(cmd, "@COLUMN_NAME", DbType.String, colName);
                dbSvc.AddInParameter(cmd, "@COLUMN_DATA", DbType.String, ColData);
                GenerateCollectonList _list = new GenerateCollectonList(GetServiceMappings);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetSericeMapByColumnSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 521, 1);
                return null;
            }
        }

        public CollectionBase GetSericeLavelByColumnSearch(string colName, string ColData)
        {//sp to be created
            try
            {
                ServiceMappingCollection _collection = new ServiceMappingCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_GET_SERVICEMAPCOLUMNBASED);

                dbSvc.AddInParameter(cmd, "@COLUMN_NAME", DbType.String, colName);
                dbSvc.AddInParameter(cmd, "@COLUMN_DATA", DbType.String, ColData);
                GenerateCollectonList _list = new GenerateCollectonList(GetServiceLavel);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetSericeLavelByColumnSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 522, 1);
                return null;
            }
        }

        public bool Delete_Service_Mappings(string _str)
        {
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_DEL_SERVICEPRICE);
                dbSvc.AddInParameter(cmd, DALConstants.SM_IP_PRICE_ID, DbType.String, _str);
                int count = dbSvc.ExecuteNonQuery(cmd);

                if (count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Delete_Service_Mappings").Name;
                ErrorLoger.InsertErrorLogger(ex, 523, 1);
                return false;
            }
        }

        public bool Save_Service_Mappings(ServiceMappingCollection _collection)
        {
            try
            {
                foreach (ServiceMapping _sMaping in _collection)
                {
                    DataAccessLayer _dblayer = new DataAccessLayer();
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_INS_SERVICE_MAPPING);
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_SERVICE_ID, DbType.Int32, _sMaping.SERVICE_ID);
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_PRICE_DIM_ID, DbType.String, _sMaping.PriceDimidList);
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_START_DT, DbType.String, _sMaping.StartDate);
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_END_DT, DbType.String, _sMaping.EndDate);
                    //dbSvc.AddInParameter(cmd, DALConstants.SM_IP_HOSPITAL_ID, DbType.Int32, _sMaping.HospitalID);
                    dbSvc.AddInParameter(cmd, DALConstants.SM_IP_PRICE_TIER_REV_NO, DbType.Int32, _sMaping.ServiceRevNo);
                    dbSvc.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, _sMaping.SESSION_ID);
                    dbSvc.AddInParameter(cmd, DALConstants.PRICE_TIER_PRIORITY_PARM, DbType.String, _sMaping.PRIORITY);
                    dbSvc.ExecuteNonQuery(cmd);
                }
                return true;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Service_Mappings").Name;
                ErrorLoger.InsertErrorLogger(ex, 524, 1);
                return false;
            }
        }
        public bool Update_Service_Mapping(ServiceMappingCollection _collectionmap)
        {
            try
            {
                foreach (ServiceMapping _sMapping in _collectionmap)
                {
                    DataAccessLayer _dblayer = new DataAccessLayer();
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_UPD_SERV_PRICE_TIRE);
                    dbSvc.AddInParameter(cmd, "@START_DT", DbType.String, _sMapping.StartDate);
                    dbSvc.AddInParameter(cmd, "@END_DT", DbType.String, _sMapping.EndDate);
                    dbSvc.AddInParameter(cmd, "@SERVICE_ID", DbType.Int32, _sMapping.SERVICE_ID);  //Service ID is notrquired
                    dbSvc.AddInParameter(cmd, "@PRIC_DIM_ID", DbType.String, _sMapping.PriceDimID_M);
                    dbSvc.ExecuteNonQuery(cmd);
                }
                return true;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Update_Service_Mapping").Name;
                ErrorLoger.InsertErrorLogger(ex, 525, 1);
                return false;
            }
        }

        public bool Delete_Service_Mapping(string price_dim)
        {
            try
            {
                ServiceMappingCollection _collectionmap;
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_DEL_SERVICE_PRICE_TIRE);
                dbSvc.AddInParameter(cmd, "@PRIC_DIM_ID", DbType.String, price_dim);
                return dbSvc.ExecuteNonQuery(cmd) > 0 ? true : false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Delete_Service_Mapping").Name;
                ErrorLoger.InsertErrorLogger(ex, 526, 1);
                return false;
            }
        }

        public CollectionBase GetDimenssionByLevelID(int _lvlID, int _lvlRevNo)
        {
            try
            {
                LevelCollection _collection = new LevelCollection();
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_DIMENSSON_BY_LEVELID);
                dbSvc.AddInParameter(cmd, DALConstants.SL_IP_PRICE_DIM_ID, DbType.Int32, _lvlID);
                dbSvc.AddInParameter(cmd, DALConstants.SL_IP_PRICE_DIM_REV_NO, DbType.Int32, _lvlRevNo);

                GenerateCollectonList _list = new GenerateCollectonList(GetDimenssionByLevelID);
                return _dblayer.ExecuteReaderCommand(cmd, _list, _collection);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDimenssionByLevelID").Name;
                ErrorLoger.InsertErrorLogger(ex, 527, 1);
                return null;
            }
        }

        #endregion PublicMethods

        #region DataReaderCollections

        private CollectionBase GetServiceDimenssions(IDataReader returnData)
        {
            try
            {
                DimensionsCollection _collection = new DimensionsCollection();
                while (returnData.Read())
                {
                    ListElements _pLvls = new ListElements();
                    _pLvls.Text = returnData[0].ToString();//SERVICE_DIM_SEQ_ID
                    _pLvls.Value = returnData[1].ToString();//SERVICE_DIM_CD
                    _collection.Add(_pLvls);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceDimenssions").Name;
                ErrorLoger.InsertErrorLogger(ex, 528, 1);
                return null;
            }
        }

        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            try
            {
                LevelCollection _collection = new LevelCollection();
                while (returnData.Read())
                {
                    PriceLevels _pLvls = new PriceLevels();
                    _pLvls.ID = Convert.ToInt32(returnData[0]);//SERVICE_DIM_SEQ_ID
                    _pLvls.Code = returnData[1].ToString();//SERVICE_DIM_CD
                    _pLvls.PriceDimID = Convert.ToInt32(returnData[2]);//PRICE_DIM_SEQ_ID

                    _collection.Add(_pLvls);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 529, 1);
                return null;
            }
        }

        protected CollectionBase GenerateLevelCollection(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ListElements _element = new ListElements();
                    _element.Text = returnData[1].ToString();
                    _element.Value = returnData[0].ToString();
                    _collection.Add(_element);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateLevelCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 530, 1);
                return null;
            }
        }

        private CollectionBase GetPriceLevels(IDataReader returnData)
        {
            try
            {
                LevelCollection lColl = new LevelCollection();
                while (returnData.Read())
                {
                    PriceLevels _levels = new PriceLevels();
                    _levels.ID = Convert.ToInt32(returnData[0]);//PRICE_DIM_SEQ_ID
                    _levels.Code = returnData[2].ToString();//PRICE_DIM_CD
                    _levels.Price_dim_rev_no = returnData[1] != DBNull.Value ? Convert.ToInt32(returnData[1]) : 0;
                    _levels.Description = returnData[3].ToString();//PRICE_DIM_DESC
                    _levels.Count = Convert.ToInt32(returnData["NO OF RECORDS"].ToString());

                    lColl.Add(_levels);
                }
                return lColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceLevels").Name;
                ErrorLoger.InsertErrorLogger(ex, 531, 1);
                return null;
            }
        }

        private CollectionBase GetPriceLevelsCollection(IDataReader returnData)
        {
            try
            {
                PriceLevelCollection pLvlColl = new PriceLevelCollection();
                while (returnData.Read())
                {
                    PriceLevels pLvls = new PriceLevels();
                    pLvls.ID = Convert.ToInt32(returnData["PRICE_DIM_ID"]);
                    pLvls.Code = returnData["PRICE_DIM_CD"].ToString();
                    pLvls.Price_dim_rev_no = returnData["PRICE_DIM_REV_NO"] != DBNull.Value ? Convert.ToInt32(returnData["PRICE_DIM_REV_NO"]) : 0;
                    pLvls.Description = returnData["PRICE_DIM_DESC"].ToString();//PRICE_DIM_DESC
                    pLvls.SERVICE_LEVELS = !DBNull.Value.Equals(returnData["SERVICE_DIM_CD"]) == true ? Convert.ToString(returnData["SERVICE_DIM_CD"]) : string.Empty;
                    //pLvls.Count = Convert.ToInt32(returnData["NO OF RECORDS"].ToString());
                    pLvls.RECORD_STATUS = returnData[DALConstants.RECORD_STATUS_COL].ToString();
                    if (pLvls.RECORD_STATUS == "A")
                    {
                        pLvls.RECORD_STATUSS = "Active";
                    }
                    else
                    {
                        pLvls.RECORD_STATUSS = "InActive";
                    }
                    pLvlColl.Add(pLvls);
                }
                return pLvlColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceLevelsCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 532, 1);
                return null;
            }
        }

        private CollectionBase GetPriceLevelsSrc(IDataReader returnData)
        {
            try
            {
                LevelCollection _collection = new LevelCollection();
                while (returnData.Read())
                {
                    PriceLevels _levels = new PriceLevels();
                    _levels.Code = returnData["PRICE_DIM_CD"].ToString();//PRICE_DIM_CD
                    _levels.Description = returnData["PRICE_DIM_DESC"].ToString();//PRICE_DIM_DESC
                    _levels.Count = Convert.ToInt32(returnData["NO OF RECORDS"].ToString());
                    _collection.Add(_levels);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceLevelsSrc").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }


        CollectionBase GetAutoCompleteInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.LAST_INVST_SRV = !DBNull.Value.Equals(dbDR[DALConstants.LAST_INVST_SRV_COL]) ? Convert.ToString(dbDR[DALConstants.LAST_INVST_SRV_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;
                    _listElements.DEPARTMENTID = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DEPARTMENT_ID_COL]) : 0;
                    _listElements.DEPARTMENT_ID = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;

                    _listElements.COMPANY_SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) : 0;
                    _listElements.COMPANY_SERVICE_NAME = !DBNull.Value.Equals(dbDR["COMPANY_SERVICE_NAME"]) ? Convert.ToString(dbDR["COMPANY_SERVICE_NAME"]) : string.Empty;
                    _listElements.RATE = !DBNull.Value.Equals(dbDR[DALConstants.RATE_COL]) ? Convert.ToString(dbDR[DALConstants.RATE_COL]) : string.Empty;
                    // _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? dbDR[DALConstants.TARIFF_ID_COL].ToString() : "1";
                    _listElements.TARIFF_CD = !DBNull.Value.Equals(dbDR["TARIFF_CD"]) ? Convert.ToString(dbDR["TARIFF_CD"]) : string.Empty;
                    _listElements.TARIFF_NAME = !DBNull.Value.Equals(dbDR["TARIFF_NAME"]) ? Convert.ToString(dbDR["TARIFF_NAME"]) : string.Empty;
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : string.Empty;
                    _listElements.PRE_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.PRE_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRE_DAYS_COL]) : 0;
                    _listElements.POST_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.POST_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.POST_DAYS_COL]) : 0;
                    _listElements.WARD_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.WARD_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.WARD_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_ID_COL]) : 0;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_NAME = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_NAME_COL]) : string.Empty;
                    _listElements.ACCEPTED_BY = !DBNull.Value.Equals(dbDR[DALConstants.ACCEPTED_BY_COL]) ? Convert.ToString(dbDR[DALConstants.ACCEPTED_BY_COL]) : string.Empty;
                    _listElements.POSTED_TIME = !DBNull.Value.Equals(dbDR[DALConstants.POSTED_TIME_COL]) ? Convert.ToString(dbDR[DALConstants.POSTED_TIME_COL]) : string.Empty;
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? dbDR["GENDER_ID"].ToString() : string.Empty;
                    _listElements.COMPANY_BILL_HEAD_ID = !DBNull.Value.Equals(dbDR["COMPANY_BILL_HEAD_ID"]) ? dbDR["COMPANY_BILL_HEAD_ID"].ToString() : "0";
                    _listElements.IS_PRICE_EDIT = !DBNull.Value.Equals(dbDR["IS_PRICE_EDIT"]) ? dbDR["IS_PRICE_EDIT"].ToString() : "";

                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? dbDR["ORG_PCT"].ToString() : "0";
                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? dbDR["DOCTOR_PCT"].ToString() : "0";

                    _listElements.ORG_PRICE1 = !DBNull.Value.Equals(dbDR["ORG_PRICE"]) ? Convert.ToInt32(dbDR["ORG_PRICE"]) : 0;
                    _listElements.DOCTOR_PRICE1 = !DBNull.Value.Equals(dbDR["DOCTOR_PRICE"]) ? Convert.ToInt32(dbDR["DOCTOR_PRICE"]) : 0;
                    _listElements.MIN_CEILING = !DBNull.Value.Equals(dbDR["MIN_CEILING"]) ? dbDR["MIN_CEILING"].ToString() : "0";
                    _listElements.MAX_CEILING = !DBNull.Value.Equals(dbDR["MAX_CEILING"]) ? dbDR["MAX_CEILING"].ToString() : "0";
                    _listElements.IS_QUANTITY_EDIT = !DBNull.Value.Equals(dbDR["IS_QUANTITY_EDIT"]) ? dbDR["IS_QUANTITY_EDIT"].ToString() : "";
                    _listElements.SAC_CD = !DBNull.Value.Equals(dbDR["SAC_CD"]) ? dbDR["SAC_CD"].ToString() : "";
                    _listElements.CONC_RULE_ID = !DBNull.Value.Equals(dbDR["CNCSN_RULE_ID"]) ? dbDR["CNCSN_RULE_ID"].ToString() : "";
                    _listElements.CNCL_SMRY_ID = !DBNull.Value.Equals(dbDR["CNCSN_AUTH_ID"]) ? dbDR["CNCSN_AUTH_ID"].ToString() : "";
                    //_listElements.CASH_CONCESSION_PCNT = !DBNull.Value.Equals(dbDR["CONC_PCT"]) ? dbDR["CONC_PCT"].ToString() : "0";
                    _listElements.CONC_RULE_AUTH_NAME = !DBNull.Value.Equals(dbDR["AUTH_NAME"]) ? dbDR["AUTH_NAME"].ToString() : "";
                    _listElements.PHAR_LIMIT_PER = !DBNull.Value.Equals(dbDR["PHAR_LIMIT_PER"]) ? dbDR["PHAR_LIMIT_PER"].ToString() : "0";
                    
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        CollectionBase GetAutoCompleteInfoservice(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.LAST_INVST_SRV = !DBNull.Value.Equals(dbDR[DALConstants.LAST_INVST_SRV_COL]) ? Convert.ToString(dbDR[DALConstants.LAST_INVST_SRV_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;
                    _listElements.COMPANY_SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) : 0;
                    _listElements.COMPANY_SERVICE_NAME = !DBNull.Value.Equals(dbDR["COMPANY_SERVICE_NAME"]) ? Convert.ToString(dbDR["COMPANY_SERVICE_NAME"]) : string.Empty;
                    _listElements.RATE = !DBNull.Value.Equals(dbDR[DALConstants.RATE_COL]) ? Convert.ToString(dbDR[DALConstants.RATE_COL]) : string.Empty;
                    // _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? dbDR[DALConstants.TARIFF_ID_COL].ToString() : "1";
                    _listElements.TARIFF_CD = !DBNull.Value.Equals(dbDR["TARIFF_CD"]) ? Convert.ToString(dbDR["TARIFF_CD"]) : string.Empty;
                    _listElements.TARIFF_NAME = !DBNull.Value.Equals(dbDR["TARIFF_NAME"]) ? Convert.ToString(dbDR["TARIFF_NAME"]) : string.Empty;
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : string.Empty;
                    _listElements.PRE_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.PRE_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRE_DAYS_COL]) : 0;
                    _listElements.POST_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.POST_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.POST_DAYS_COL]) : 0;
                    _listElements.WARD_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.WARD_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.WARD_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_ID_COL]) : 0;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.SPECIMEN_ID = !DBNull.Value.Equals(dbDR["SPECIMEN_ID"]) ? Convert.ToString(dbDR["SPECIMEN_ID"]) : "0";
                    _listElements.VACCUTAINER_ID = !DBNull.Value.Equals(dbDR["VACCUTAINER_ID"]) ? Convert.ToString(dbDR["VACCUTAINER_ID"]) : "0";
                    _listElements.VACCUTAINER_NAME = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_NAME_COL]) : string.Empty;
                    _listElements.ACCEPTED_BY = !DBNull.Value.Equals(dbDR[DALConstants.ACCEPTED_BY_COL]) ? Convert.ToString(dbDR[DALConstants.ACCEPTED_BY_COL]) : string.Empty;
                    _listElements.POSTED_TIME = !DBNull.Value.Equals(dbDR[DALConstants.POSTED_TIME_COL]) ? Convert.ToString(dbDR[DALConstants.POSTED_TIME_COL]) : string.Empty;
                    //_listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : "0";
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.SERVICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_ID"]) : 0;
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? dbDR["GENDER_ID"].ToString() : string.Empty;
                    _listElements.DEPARTMENT_NAME = !DBNull.Value.Equals(dbDR["DEPT_NAME"]) ? Convert.ToString(dbDR["DEPT_NAME"]) : string.Empty;
                    _listElements.IS_QUANTITY_EDIT = !DBNull.Value.Equals(dbDR["IS_QUANTITY_EDIT"]) ? dbDR["IS_QUANTITY_EDIT"].ToString() : string.Empty;
                    _listElements.FROM_AGE = !DBNull.Value.Equals(dbDR["FROM_AGE"]) ? dbDR["FROM_AGE"].ToString() : string.Empty;
                    _listElements.TO_AGE = !DBNull.Value.Equals(dbDR["TO_AGE"]) ? dbDR["TO_AGE"].ToString() : string.Empty;
                    _listElements.IS_REMARKS_MANDATORY = !DBNull.Value.Equals(dbDR["IS_REMARKS_MANDATORY"]) ? dbDR["IS_REMARKS_MANDATORY"].ToString() : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : "N";
                    _listElements.POSTED_DT = !DBNull.Value.Equals(dbDR["POSTED_DT"]) ? Convert.ToString(dbDR["POSTED_DT"]) : string.Empty;
                    _listElements.ADT_OP_SERVICE_TYPE_ID = !DBNull.Value.Equals(dbDR["ADT_OP_SERVICE_TYPE_ID"]) ? Convert.ToString(dbDR["ADT_OP_SERVICE_TYPE_ID"]) : string.Empty;

                    _listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;
                    _listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? dbDR["IS_CONSENT_FORM"].ToString() : string.Empty;
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? dbDR["IS_SRV_GUIDELINES_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? dbDR["IS_SRV_CHECKLIST_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? dbDR["RATE_EDIT"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? dbDR["CONCERN_FORM_REQ"].ToString() : string.Empty;


                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIS_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIS_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.HISTORY_TYPE_ID1 = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToInt32(dbDR["HISTORY_TYPE_ID"]) : 0;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? Convert.ToString(dbDR["IS_FOREIGN_SERVICE"]) : string.Empty;
                    _listElements.IS_NUR_STATION = !DBNull.Value.Equals(dbDR["IS_NUR_STATION"]) ? Convert.ToString(dbDR["IS_NUR_STATION"]) : string.Empty;
                    _listElements.IS_DIRECT_BILLING = !DBNull.Value.Equals(dbDR["IS_DIRECT_BILLING"]) ? Convert.ToString(dbDR["IS_DIRECT_BILLING"]) : string.Empty;
                    _listElements.BILLING_HEAD = !DBNull.Value.Equals(dbDR["BILLING_HEAD"]) ? Convert.ToString(dbDR["BILLING_HEAD"]) : string.Empty;
                    _listElements.IS_APPROVAL_REQUIRED = !DBNull.Value.Equals(dbDR["IS_APPROVAL_REQUIRED"]) ? Convert.ToString(dbDR["IS_APPROVAL_REQUIRED"]) : string.Empty;
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : string.Empty;
                    _listElements.IS_DOCTOR_REQUIRED = !DBNull.Value.Equals(dbDR["IS_DOCTOR_REQUIRED"]) ? Convert.ToString(dbDR["IS_DOCTOR_REQUIRED"]) : string.Empty;

                    _listElements.CHARGE_SETUP_DONE = !DBNull.Value.Equals(dbDR["CHARGE_SETUP_DONE"]) ? Convert.ToString(dbDR["CHARGE_SETUP_DONE"]) : string.Empty;
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["SRV_GENDER_ID"]) ? Convert.ToString(dbDR["SRV_GENDER_ID"]) : string.Empty;
                    _listElements.IS_FAVOURITE = !DBNull.Value.Equals(dbDR["IS_FAVOURITE"]) ? Convert.ToString(dbDR["IS_FAVOURITE"]) : string.Empty;
                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? dbDR["DOCTOR_PCT"].ToString() : string.Empty;
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? dbDR["ORG_PCT"].ToString() : string.Empty;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;

                    _listElements.BILLING_HEAD_ID = !DBNull.Value.Equals(dbDR["BILLING_HEAD_ID"]) ? Convert.ToString(dbDR["BILLING_HEAD_ID"]) : string.Empty;
                    _listElements.BILLING_HEAD_NAME = !DBNull.Value.Equals(dbDR["BILLING_HEAD_NAME"]) ? Convert.ToString(dbDR["BILLING_HEAD_NAME"]) : string.Empty;

                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }


        CollectionBase OpGetAutoCompleteInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIST_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIST_REQ"]) : "N";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? Convert.ToString(dbDR["GENDER_ID"]) : "0";
                    // _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR["HISTORY_TYPE"]) ? Convert.ToString(dbDR["HISTORY_TYPE"]) : "N";
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToString(dbDR["HISTORY_TYPE_ID"]) : "0";
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? Convert.ToString(dbDR["MIN_PRICE"]) : "0";
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? Convert.ToString(dbDR["MAX_PRICE"]) : "0";
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : "0";
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? Convert.ToString(dbDR["CONCERN_FORM_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.NO_NEED_DAYS = !DBNull.Value.Equals(dbDR["NO_NEED_DAYS"]) ? Convert.ToString(dbDR["NO_NEED_DAYS"]) : "0";
                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? Convert.ToString(dbDR["QYT_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.CMP_DISC_PCNT = !DBNull.Value.Equals(dbDR["CMP_DISC_PCNT"]) ? Convert.ToString(dbDR["CMP_DISC_PCNT"]) : "0";
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? Convert.ToString(dbDR["EMP_PERCENT"]) : "0";
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? Convert.ToString(dbDR["ORG_PERCENT"]) : "0";
                    _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? Convert.ToString(dbDR["EMP_PRICE"]) : "0";
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_DAYS"]) ? Convert.ToString(dbDR["FROM_DAYS"]) : "0";
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_DAYS"]) ? Convert.ToString(dbDR["TO_DAYS"]) : "0";
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : "0";
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? Convert.ToString(dbDR["IS_POST"]) : "N";
                    _listElements.COLOR_CD = !DBNull.Value.Equals(dbDR["COLOR_CD"]) ? Convert.ToString(dbDR["COLOR_CD"]) : "";
                    _listElements.ORG_PERCENT_PRICE = !DBNull.Value.Equals(dbDR["ORG_PERCENT_PRICE"]) ? Convert.ToString(dbDR["ORG_PERCENT_PRICE"]) : "0";
                    _listElements.COMPANY_ID = !DBNull.Value.Equals(dbDR["COMPANY_ID"]) ? Convert.ToString(dbDR["COMPANY_ID"]) : "0";
                    _listElements.IS_APPOINTMENT = !DBNull.Value.Equals(dbDR["IS_APPOINTMENT"]) ? Convert.ToString(dbDR["IS_APPOINTMENT"]) : "0";
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR["CONSULTATION_TYPE_ID"]) ? Convert.ToString(dbDR["CONSULTATION_TYPE_ID"]) : "0";
                    _listElements.EQUI_SERVICE_CD = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_CD"]) ? Convert.ToString(dbDR["EQUI_SERVICE_CD"]) : "";
                    _listElements.IS_CASH = !DBNull.Value.Equals(dbDR["IS_CASH"]) ? Convert.ToString(dbDR["IS_CASH"]) : "0";
                    _listElements.NON_SHOW = !DBNull.Value.Equals(dbDR["NON_SHOW"]) ? Convert.ToString(dbDR["NON_SHOW"]) : "0";
                    _listElements.IS_REG_FEE_INCLUDED = !DBNull.Value.Equals(dbDR["IS_REG_FEE_INCLUDED"]) ? Convert.ToString(dbDR["IS_REG_FEE_INCLUDED"]) : "N";
                    _listElements.OP_TRAN_ALLOWED = !DBNull.Value.Equals(dbDR["OP_TRAN_ALLOWED"]) ? Convert.ToString(dbDR["OP_TRAN_ALLOWED"]) : "N";
                    _listElements.STOP_CONS = !DBNull.Value.Equals(dbDR["STOP_CONS"]) ? dbDR["STOP_CONS"].ToString() : string.Empty;
                    _listElements.REFRL_QTY = !DBNull.Value.Equals(dbDR["REFRL_QTY"]) ? dbDR["REFRL_QTY"].ToString() : string.Empty;
                    _listElements.UTILIZED_REFRL_QTY = !DBNull.Value.Equals(dbDR["UTILIZED_REFRL_QTY"]) ? dbDR["UTILIZED_REFRL_QTY"].ToString() : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : string.Empty;
                    _listElements.MAX_OPT_SERVICES_ALLOWED = !DBNull.Value.Equals(dbDR["MAX_OPT_SERVICES_ALLOWED"]) ? dbDR["MAX_OPT_SERVICES_ALLOWED"].ToString() : string.Empty;
                    _listElements.Utilz_cmp_rule_qty = !DBNull.Value.Equals(dbDR["UTILZ_CMP_RULE_QTY"]) ? dbDR["UTILZ_CMP_RULE_QTY"].ToString() : string.Empty;
                    _listElements.Cmp_rul_qty = !DBNull.Value.Equals(dbDR["CMO_RUL_QTY"]) ? dbDR["CMO_RUL_QTY"].ToString() : string.Empty;
                    _listElements.IS_REMARKS_MANDATORY = !DBNull.Value.Equals(dbDR["IS_REMARKS_MANDATORY"]) ? dbDR["IS_REMARKS_MANDATORY"].ToString() : string.Empty;
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? dbDR["IS_SRV_GUIDELINES_REQUIRED"].ToString() : "N";
                    _listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? dbDR["IS_CONSENT_FORM"].ToString() : "N";
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? dbDR["IS_SRV_CHECKLIST_REQUIRED"].ToString() : "N";
                    _listElements.IS_ADDITIONAL = !DBNull.Value.Equals(dbDR["IS_ADDITIONAL"]) ? dbDR["IS_ADDITIONAL"].ToString() : "N";
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? dbDR["DISCOUNT_PERCENT"].ToString() : "0";
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : "N";
                    _listElements.DOC_HOL_STATUS = !DBNull.Value.Equals(dbDR["DOC_HOL_STATUS"]) ? dbDR["DOC_HOL_STATUS"].ToString() : string.Empty;
                    _listElements.CMP_PKG_EXIST = !DBNull.Value.Equals(dbDR["CMP_PKG_EXIST"]) ? dbDR["CMP_PKG_EXIST"].ToString() : "N";
                    _listElements.SERVICE_UNICODE = !DBNull.Value.Equals(dbDR["SERVICE_UNICODE"]) ? dbDR["SERVICE_UNICODE"].ToString() : string.Empty;
                    _listElements.UNI_SERVICE_TYPE_ID = !DBNull.Value.Equals(dbDR["UNI_SERVICE_TYPE_ID"]) ? dbDR["UNI_SERVICE_TYPE_ID"].ToString() : string.Empty;
                    _listElements.STATUS = !DBNull.Value.Equals(dbDR["STATUS"]) ? dbDR["STATUS"].ToString() : string.Empty;
                    _listElements.DEPARTMENT_ID = !DBNull.Value.Equals(dbDR["DEPARTMENT_ID"]) ? dbDR["DEPARTMENT_ID"].ToString() : string.Empty;
                    _listElements.IS_DOCTOR_REQUIRED = !DBNull.Value.Equals(dbDR["IS_DOCTOR_REQUIRED"]) ? Convert.ToString(dbDR["IS_DOCTOR_REQUIRED"]) : string.Empty;
                    //_listElements.DEPT_ID = !DBNull.Value.Equals(dbDR["DEPARTMENT_ID"]) ? dbDR["DEPARTMENT_ID"].ToString() : string.Empty;
                    _listElements.IS_SCHEDULE_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SCHEDULE_REQUIRED"]) ? dbDR["IS_SCHEDULE_REQUIRED"].ToString() : string.Empty;
                    _listElements.VISIT_TYPE = !DBNull.Value.Equals(dbDR["VISIT_TYPE"]) ? dbDR["VISIT_TYPE"].ToString() : string.Empty;
                    _listElements.BILLING_HEAD_ID = !DBNull.Value.Equals(dbDR["BILLING_HEAD_ID"]) ? dbDR["BILLING_HEAD_ID"].ToString() : string.Empty;
                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? dbDR["DOCTOR_PCT"].ToString() : string.Empty;
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? dbDR["ORG_PCT"].ToString() : string.Empty;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("OpGetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        CollectionBase OpCorporeteGetAutoCompleInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    //if(!string.IsNullOrEmpty(dbDR[DALConstants.TARIFF_ID_COL].ToString()))
                    // _listElements.Tarrif_Id =dbDR[DALConstants.TARIFF_ID_COL].ToString();
                    //if (!string.IsNullOrEmpty(dbDR[DALConstants.PRIORITY_ID_COL].ToString()))
                    //    _listElements.Priority = dbDR[DALConstants.PRIORITY_ID_COL].ToString();
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR[DALConstants.DISCOUNT_PERCENT_COL]) ? Convert.ToString(dbDR[DALConstants.DISCOUNT_PERCENT_COL]) : "0";
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    _listElements.EQUIVALENT_SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.EQUELENT_TARIFF_SRV_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.EQUELENT_TARIFF_SRV_NAME_COL]) : string.Empty;
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? Convert.ToString(dbDR[DALConstants.TARIFF_ID_COL]) : "0";
                    _listElements.TARIFF_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.AMOUNT_COL]) ? Convert.ToString(dbDR[DALConstants.AMOUNT_COL]) : "0";
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR[DALConstants.DISCOUNT_PERCENT_COL]) ? Convert.ToString(dbDR[DALConstants.DISCOUNT_PERCENT_COL]) : "0";
                    _listElements.COLOR_CD = !DBNull.Value.Equals(dbDR[DALConstants.COLOR_CD_COL]) ? Convert.ToString(dbDR[DALConstants.COLOR_CD_COL]) : "";
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : "";
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("OpCorporeteGetAutoCompleInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        //public CollectionBase GetAutoCompleteSErviceInfo(string prefixText, string contextKey, LookUpSearch obj)
        //{
        //    try
        //    {
        //        GenerateCollectionReader list = null;
        //        DataAccessLayer dbLayer = new DataAccessLayer();
        //        Database dBase = dbLayer.DBaseFactory;
        //        DbCommand dbCmd;
        //        dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_OP_AUTO_SERVICES);
        //        dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, (obj.PreConditon[4]));
        //        dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[6]));
        //        if (obj.PreConditon[7] == "")
        //        { obj.PreConditon[7] = null; }
        //        dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, (obj.PreConditon[7]));

        //        if (obj.PreConditon != null)
        //        {
        //            dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[0]));
        //            dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[1]));
        //            dBase.AddInParameter(dbCmd, "@IP_PATIENT_CLASS_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[2]));
        //            if (obj.PreConditon[8] != null)
        //            {
        //                dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[8]));
        //            }
        //            if (obj.PreConditon.Count > 9)
        //            {
        //                if (obj.PreConditon[9] != null && obj.PreConditon[9] != "")
        //                {
        //                    dBase.AddInParameter(dbCmd, "@IP_ADMN_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[9]));
        //                }
        //            }
        //            if (obj.PreConditon.Count > 10)
        //            {
        //                if (obj.PreConditon[10] != null && obj.PreConditon[10] != "")
        //                {
        //                    dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[10]));
        //                }
        //            }
        //        }
        //        dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.Int32, 4);
        //        if (obj.PreConditon.Count > 11 && obj.PreConditon[11] != null && obj.PreConditon[11] != "")
        //            dBase.AddInParameter(dbCmd, DALConstants.BILL_NO_PARM, DbType.String, Convert.ToString(obj.PreConditon[11]));
        //        if (obj.PreConditon.Count > 12 && obj.PreConditon[12] != null && obj.PreConditon[12] != "")
        //            dBase.AddInParameter(dbCmd, "@IP_PKG_SRV_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[12]));
        //        list = new GenerateCollectionReader(OpGetAutoCompleteInfo);
        //        CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
        //        return cBase;
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteSErviceInfo").Name;
        //        ErrorLoger.InsertErrorLogger(ex, 534, 1);
        //        return null;
        //    }
        //}

        public DataSet GetAutoCompleteSErviceInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_OP_AUTO_SERVICES);
                dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, (obj.PreConditon[4]));
                dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[6]));
                if (obj.PreConditon[7] == "")
                { obj.PreConditon[7] = null; }
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, (obj.PreConditon[7]));

                if (obj.PreConditon != null)
                {
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[0]));
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[1]));
                    dBase.AddInParameter(dbCmd, "@IP_PATIENT_CLASS_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[2]));
                    if (obj.PreConditon[8] != null)
                    {
                        dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[8]));
                    }
                    if (obj.PreConditon.Count > 9)
                    {
                        if (obj.PreConditon[9] != null && obj.PreConditon[9] != "")
                        {
                            dBase.AddInParameter(dbCmd, "@IP_ADMN_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[9]));
                        }
                    }
                    if (obj.PreConditon.Count > 10)
                    {
                        if (obj.PreConditon[10] != null && obj.PreConditon[10] != "")
                        {
                            dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[10]));
                        }
                    }
                }

                dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.Int32, 4);
                if (obj.PreConditon.Count > 11 && obj.PreConditon[11] != null && obj.PreConditon[11] != "")
                    dBase.AddInParameter(dbCmd, DALConstants.BILL_NO_PARM, DbType.String, Convert.ToString(obj.PreConditon[11]));
                if (obj.PreConditon.Count > 12 && obj.PreConditon[12] != null && obj.PreConditon[12] != "")
                    dBase.AddInParameter(dbCmd, "@IP_PKG_SRV_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[12]));

                if (obj.PreConditon.Count > 13 && obj.PreConditon[13] != null && obj.PreConditon[13] != "")
                    dBase.AddInParameter(dbCmd, "@IP_PAT_CATEGORY_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[13]));
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet ds = dBase.ExecuteDataSet(dbCmd);
                return ds;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteSErviceInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        //THIS IS FOR IP
        public CollectionBase GetAutoCompleteIPServiceInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_IP_AUTO_SERVICES);
                //dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_IP_SERVICES_NST");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, obj.PreConditon[0]);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, obj.PreConditon[1]);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, obj.PreConditon[2]);
                if (obj.PreConditon[3] != null && obj.PreConditon[3] != "")
                    dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[3]));
                if (obj.PreConditon[4] != null && obj.PreConditon[4] != "")
                    dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[4]));
                if (obj.PreConditon[5] != null && obj.PreConditon[5] != "")
                    dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[5]));
                if (obj.PreConditon[6] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, obj.PreConditon[6]);
                if (obj.PreConditon[7] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARAM, DbType.String, obj.PreConditon[7]);
                if (obj.PreConditon.Count > 8)
                {
                    if (obj.PreConditon[8] != null)
                        dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, obj.PreConditon[8]);
                }
                if (obj.PreConditon.Count > 9 && obj.PreConditon[9] != null)
                {
                    if (obj.PreConditon[9] != null)
                        dBase.AddInParameter(dbCmd, "@IP_IS_EME_PRICE", DbType.String, obj.PreConditon[9]);
                    if (obj.PreConditon[10] != null)
                        dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.String, obj.PreConditon[10]);
                }
                if (obj.PreConditon.Count > 11 && obj.PreConditon[11] != null)
                {
                    dBase.AddInParameter(dbCmd, "@IP_NURSESTATION_ID", DbType.String, obj.PreConditon[11]);
                }
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, obj.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, "@OP_COUNT", DbType.Int32, Convert.ToInt32(obj.TOTAL_RECORDS));
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteInfoservice);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteIPServiceInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }



        public CollectionBase GetAutoCompleteIPServiceInfo_det(string prefixText, string contextKey, LookUpSearch obj)
        {
            int count = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_IP_AUTO_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, obj.PreConditon[0]);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, obj.PreConditon[1]);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, obj.PreConditon[2]);
                if (obj.PreConditon[3] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[3]));
                if (obj.PreConditon[4] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[4]));
                if (obj.PreConditon[5] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[5]));
                if (obj.PreConditon[6] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, obj.PreConditon[6]);
                if (obj.PreConditon[7] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.IP_DOCTOR_ID_PARAM, DbType.String, obj.PreConditon[7]);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                count = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT"));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteIPServiceInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompleteCorpIPServiceInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_AUTO_CORP_IP_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, obj.PreConditon[0]);
                if (obj.PreConditon[1] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[1]));
                if (obj.PreConditon[2] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[2]));
                if (obj.PreConditon[3] != null)
                    dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[3]));
                if (obj.PreConditon[4] != null)
                    dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[4]));
                if (obj.PreConditon[5] != null)
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[5]));
                if (obj.PreConditon[6] != null)
                    dBase.AddInParameter(dbCmd, "@IP_DEPARTMENT_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[6]));
                if (obj.PreConditon[7] != null)
                    dBase.AddInParameter(dbCmd, "@IP_SPECIALIZATION_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[7]));
                if (obj.PreConditon[8] != null)
                    dBase.AddInParameter(dbCmd, "@IP_CONSULTATION_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[8]));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.IP_PREFIX_TEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteCorpIPServiceInfoColl);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteCorpIPServiceInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public CollectionBase GetAutoCompleteCorpIPServiceInfo1(string prefixText, string contextKey, LookUpSearch obj)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_AUTO_CORP_IP_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, obj.PreConditon[0]);
                if (!string.IsNullOrEmpty(obj.PreConditon[1].ToString()))
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[1]));
                if (!string.IsNullOrEmpty(obj.PreConditon[2].ToString()))
                    dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[2]));
                if (!string.IsNullOrEmpty(obj.PreConditon[3].ToString()))
                    dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[3]));
                if (!string.IsNullOrEmpty(obj.PreConditon[4].ToString()))
                    dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[4]));
                if (obj.PreConditon[5] != null)
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[5]));
                if (obj.PreConditon[6] != null)
                    dBase.AddInParameter(dbCmd, "@IP_DEPARTMENT_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[6]));
                if (obj.PreConditon[7] != null)
                    dBase.AddInParameter(dbCmd, "@IP_SPECIALIZATION_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[7]));
                if (obj.PreConditon[8] != null)
                    dBase.AddInParameter(dbCmd, "@IP_CONSULTATION_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[8]));
               // dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.IP_PREFIX_TEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteCorpIPServiceInfoColl);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteCorpIPServiceInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompleteCorpIPServiceInfoColl(IDataReader dbDR)
        {
            try
            {
                ServiceCollection ipServiceColl = new ServiceCollection();// IpPatserviceentryCollection();
                //IpPatserviceentryParams _listElements;
                OSPListElement _listElements;
                while (dbDR.Read())
                {
                    //_listElements = new IpPatserviceentryParams();
                    _listElements = new OSPListElement();
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : string.Empty;
                    _listElements.SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_ID_COL].ToString()) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? dbDR[DALConstants.DEPARTMENT_ID_COL].ToString() : string.Empty;
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : string.Empty;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"].ToString()) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;

                    _listElements.WARD_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.WARD_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.WARD_GROUP_ID_COL]) : 0;
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? Convert.ToString(dbDR[DALConstants.TARIFF_ID_COL]) : string.Empty;
                    _listElements.TARIFF_CD = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_CD_COL]) ? Convert.ToString(dbDR[DALConstants.TARIFF_CD_COL]) : string.Empty;
                    _listElements.TARIFF_NAME = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.TARIFF_NAME_COL]) : string.Empty;
                    _listElements.TARIFF_RATE = !DBNull.Value.Equals(dbDR[DALConstants.AMOUNT_COL]) ? Convert.ToString(dbDR[DALConstants.AMOUNT_COL]) : "0";
                    _listElements.TARIFF_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToString(dbDR[DALConstants.PRICE_COL]) : "0";
                    _listElements.COMPANY_SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.TARIFF_SERVICE_ID_COL]) : 0;
                    _listElements.COMPANY_SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    if (!string.IsNullOrEmpty(dbDR[DALConstants.PRIORITY_COL].ToString()))
                        _listElements.Priority = dbDR[DALConstants.PRIORITY_COL].ToString();
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR[DALConstants.DISCOUNT_PERCENT_COL]) ? Convert.ToString(dbDR[DALConstants.DISCOUNT_PERCENT_COL]) : "0";
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.COST_COL]) ? Convert.ToInt32(dbDR[DALConstants.COST_COL]) : 0;
                    _listElements._Price = !DBNull.Value.Equals(dbDR[DALConstants.COST_COL]) ? Convert.ToDouble(dbDR[DALConstants.COST_COL]) : 0;
                    _listElements.ORIGINAL_AMOUNT = !DBNull.Value.Equals(dbDR[DALConstants.ORIGINAL_AMOUNT_COL]) ? Convert.ToString(dbDR[DALConstants.ORIGINAL_AMOUNT_COL]) : "0";
                    _listElements.COLOR_CD = !DBNull.Value.Equals(dbDR[DALConstants.COLOR_CD_COL]) ? Convert.ToString(dbDR[DALConstants.COLOR_CD_COL]) : string.Empty;
                    _listElements.NON_SHOW = !DBNull.Value.Equals(dbDR[DALConstants.NON_SHOW_COL]) ? Convert.ToString(dbDR[DALConstants.NON_SHOW_COL]) : string.Empty;
                    _listElements.IS_CASH = !DBNull.Value.Equals(dbDR[DALConstants.IS_CASH_COL]) ? Convert.ToString(dbDR[DALConstants.IS_CASH_COL]) : string.Empty;
                    _listElements.BILLING_HEAD_NAME = !DBNull.Value.Equals(dbDR[DALConstants.BILLING_HEAD_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.BILLING_HEAD_NAME_COL]) : string.Empty;
                    _listElements.BILLING_HEAD_ID = !DBNull.Value.Equals(dbDR["BILLING_HEAD_ID"]) ? Convert.ToString(dbDR["BILLING_HEAD_ID"]) : "0";

                    _listElements.BATCH_NO = !DBNull.Value.Equals(dbDR["BATCH_NO"]) ? Convert.ToString(dbDR["BATCH_NO"]) : "";
                    _listElements.BATCH_EXPERY_DT = !DBNull.Value.Equals(dbDR["BATCH_EXPERY_DT"]) ? Convert.ToString(dbDR["BATCH_EXPERY_DT"]) : "";
                    _listElements.MANFACTURE_NAME = !DBNull.Value.Equals(dbDR["MANFACTURE_NAME"]) ? Convert.ToString(dbDR["MANFACTURE_NAME"]) : "";
                    _listElements.Cmp_rul_qty = !DBNull.Value.Equals(dbDR["CMO_RUL_QTY"]) ? Convert.ToString(dbDR["CMO_RUL_QTY"]) : "0";
                    _listElements.Utilz_cmp_rule_qty = !DBNull.Value.Equals(dbDR["UTILZ_CMP_RULE_QTY"]) ? Convert.ToString(dbDR["UTILZ_CMP_RULE_QTY"]) : "0";
                    _listElements.UTILIZED_REFRL_QTY = !DBNull.Value.Equals(dbDR["UTILIZED_REFRL_QTY"]) ? Convert.ToString(dbDR["UTILIZED_REFRL_QTY"]) : "0";
                    _listElements.REFRL_QTY = !DBNull.Value.Equals(dbDR["REFRL_QTY"]) ? Convert.ToString(dbDR["REFRL_QTY"]) : "0";
                    _listElements.SAC_CD = !DBNull.Value.Equals(dbDR["SAC_CD"]) ? Convert.ToString(dbDR["SAC_CD"]) : "";

                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? Convert.ToString(dbDR["DOCTOR_PCT"]) : "0";
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? Convert.ToString(dbDR["ORG_PCT"]) : "0";
                    _listElements.ORG_PRICE1 = !DBNull.Value.Equals(dbDR["ORG_PRICE"]) ? Convert.ToInt32(dbDR["ORG_PRICE"]) : 0;
                    _listElements.DOCTOR_PRICE1 = !DBNull.Value.Equals(dbDR["DOCTOR_PRICE"]) ? Convert.ToInt32(dbDR["DOCTOR_PRICE"]) : 0;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;


                    _listElements.RULE_CONC_PCT = !DBNull.Value.Equals(dbDR["RULE_CONC_PCT"]) ? Convert.ToString(dbDR["RULE_CONC_PCT"]) : "0";
                    _listElements.RULE_CONC_AMT = !DBNull.Value.Equals(dbDR["RULE_CONC_AMT"]) ? Convert.ToString(dbDR["RULE_CONC_AMT"]) : "0";

                    _listElements.TAX_PCT = !DBNull.Value.Equals(dbDR["TAX_PCT"]) ? Convert.ToString(dbDR["TAX_PCT"]) : "0";
                    _listElements.CGST_PCT = !DBNull.Value.Equals(dbDR["CGST_PCT"]) ? Convert.ToString(dbDR["CGST_PCT"]) : "0";
                    _listElements.SGST_PCT = !DBNull.Value.Equals(dbDR["SGST_PCT"]) ? Convert.ToString(dbDR["SGST_PCT"]) : "0";
                    



                    ipServiceColl.Add(_listElements);
                }
                return ipServiceColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("OpCorporeteGetAutoCompleInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompleteSErviceInfoBySrvTypeId(string prefixText, int count, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_IP_AUTO_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, null);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteSErviceInfoBySrvTypeId").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public string[] GetAutoCompleteInfo(string prefixText, int count, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_TYPE_AUTO);
                dBase.AddInParameter(dbCmd, "COLUMN_NAME", DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, "PREFIXTEXT", DbType.String, prefixText);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                List<string> returnData = new List<string>();
                IDataReader dbDR = dbLayer.ExecuteReader(dbCmd);
                while (dbDR.Read())
                {
                    returnData.Add(dbDR[contextKey].ToString());
                }
                dbDR.Close();
                return returnData.ToArray();
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }




        //public string[] GetAutoCompleteDimDesc(string prifixtext, int count, string contextkey)
        //{
        //    try
        //    {
        //        DataAccessLayer _dblayer = new DataAccessLayer();
        //        Database dbase = _dblayer.DBaseFactory;
        //        DbCommand dbcmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.PR_SERVICE_DIM_AUTO);
        //        dbase.AddInParameter(dbcmd, "COLUMN_NAME", DbType.String, contextkey);
        //        dbase.AddInParameter(dbcmd, "PREFIXTEXT", DbType.String, prifixtext);
        //        List<string> returndata = new List<string>();
        //        IDataReader dbDr = dbase.ExecuteReader(dbcmd);
        //        while (dbDr.Read())
        //        {
        //            returndata.Add(dbDr[contextkey].ToString());
        //        }
        //        return returndata.ToArray();
        //    }
        //    catch (Exception ex)
        //    {
        //        ErrorLoger.InsertErrorLogger(ex, 535, 1);
        //        return null;
        //    }

        public List<ListElements> GetAutoCompleteDimDesc(string prefixText, int count, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.PR_SERVICE_DIM_AUTO);

                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                return dbLayer.ExecuteReadercmd(dbCmd);

                //List<string> returnData = new List<string>();
                //IDataReader dbDR = dBase.ExecuteReader(dbCmd);
                //while (dbDR.Read())
                //{
                //    returnData.Add(dbDR[contextKey].ToString());
                //}
                //return returnData.ToArray();
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteDimDesc").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }

        }

        private CollectionBase GetPriceDetails(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    Dimensions _dimenssion = new Dimensions();
                    _dimenssion.BedType = returnData["BEDTYPENAME"].ToString();
                    _dimenssion.Consultation = returnData["CONSULTATIONNAME"].ToString();
                    _dimenssion.Coverage = returnData["COVERAGENAME"].ToString();
                    _dimenssion.Department = returnData["DEPARTMENTNAME"].ToString();
                    _dimenssion.Doctor = returnData["DOCTORNAME"].ToString();
                    _dimenssion.END_DT = returnData["END_DT"].ToString();
                    _dimenssion.Facility = returnData["FACILITYNAME"].ToString();
                    _dimenssion.NO_OF_DAYS = returnData["NO_OF_DAYS"] == System.DBNull.Value ? 0 : Convert.ToInt32(returnData["NO_OF_DAYS"]);
                    _dimenssion.NO_OF_VISITS = returnData["NO_OF_VISITS"] == System.DBNull.Value ? 0 : Convert.ToInt32(returnData["NO_OF_VISITS"]);//.ToString();
                    _dimenssion.PRICE = returnData["PRICE"].ToString(); //== System.DBNull.Value ? 0 : returnData["PRICE"].ToString();
                    _dimenssion.Service = returnData["SERVICENAME"].ToString();
                    _dimenssion.START_DT = returnData["START_DT"].ToString();
                    _dimenssion.Surgery = returnData["SURGERYCATEGORY"].ToString();
                    _dimenssion.SurgeryClass = returnData["SURGERYCLASS"].ToString();
                    _dimenssion.Tariff = returnData["TRAIFFNAME"].ToString();
                    _dimenssion.Ward = returnData["WARDNAME"].ToString();
                    _dimenssion.WardGroup = returnData["WARDGROUPNAME"].ToString();
                    _collection.Add(_dimenssion);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 536, 1);
                return null;
            }
        }

        private CollectionBase GetServiceMappings(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ServiceMapping _sMapping = new ServiceMapping();
                    _sMapping.ServiceDesc = returnData[DALConstants.SM_SERVICE_DESC].ToString();//SERVICE_DESC
                    _sMapping.PriceDimCD = returnData[DALConstants.SM_PRICE_DIM_CD].ToString();//PRICE_DIM_CD
                    _sMapping.PriceDimDesc = returnData[DALConstants.SM_PRICE_DIM_DESC].ToString();//PRICE_DIM_DESC
                    _sMapping.SERVICE_NAME = returnData[DALConstants.SM_SERVICE_NAME].ToString();
                    _sMapping.StartDate = returnData[DALConstants.SM_START_DATE].ToString();//StartDate
                    _sMapping.EndDate = returnData[DALConstants.SM_END_DATE].ToString();//EndDate
                    _sMapping.PriceDimID_M = returnData[DALConstants.SM_PRICE_DIM_ID].ToString();
                    _sMapping.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SM_SERVICE_ID]);
                    _sMapping.Price_tier_id = Convert.ToInt32(returnData[DALConstants.SM_PRICE_TIER_ID]);
                    _sMapping.PRICE_TIER_SEQ_ID = Convert.ToInt32(returnData[DALConstants.SM_PRICE_TIER_REV_NO]);
                    //_sMapping.Count = Convert.ToInt32(returnData[DALConstants.SM_NO_OF_RECORDS]);
                    _collection.Add(_sMapping);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMappings").Name;
                ErrorLoger.InsertErrorLogger(ex, 537, 1);
                return null;
            }
        }

        private CollectionBase GetServiceLavel(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ServiceMapping _sMapping = new ServiceMapping();
                    _sMapping.ServiceDesc = returnData["service_name"].ToString();//SERVICE_DESC
                    _sMapping.PriceDimCD = returnData["PRICE_DIM_CD"].ToString();//PRICE_DIM_CD
                    _sMapping.PriceDimDesc = returnData["PRICE_DIM_DESC"].ToString();//PRICE_DIM_DESC
                    _sMapping.StartDate = returnData["StartDate"].ToString();//StartDate
                    _sMapping.EndDate = returnData["EndDate"].ToString();//EndDate
                    _sMapping.PriceDimID_M = returnData["PRICE_DIM_ID"].ToString();
                    _sMapping.SERVICE_NAME = returnData["service_name"].ToString();
                    _sMapping.SERVICE_ID = Convert.ToInt32(returnData["SERVICE_ID"]);
                    //_sMapping.Count = Convert.ToInt32(returnData["NO.OF.RECORDS"]);
                    _collection.Add(_sMapping);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceLavel").Name;
                ErrorLoger.InsertErrorLogger(ex, 538, 1);
                return null;
            }
        }

        private CollectionBase GetMapSearch(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ServiceMapping _sMapping = new ServiceMapping();
                    _sMapping.ServiceDesc = returnData["SERVICE_DESC"].ToString();//SERVICE_DESC
                    _sMapping.PriceDimCD = returnData["PRICE_DIM_CD"].ToString();//PRICE_DIM_CD
                    _sMapping.PriceDimDesc = returnData["PRICE_DIM_DESC"].ToString();//PRICE_DIM_DESC
                    _sMapping.StartDate = returnData["StartDate"].ToString();//StartDate
                    _sMapping.EndDate = returnData["EndDate"].ToString();//EndDate
                    _sMapping.PriceDimID_M = returnData["PRICE_DIM_ID"].ToString();
                    _sMapping.SERVICE_ID = Convert.ToInt32(returnData["SERVICE_ID"]);
                    //                    _sMapping.Count = Convert.ToInt32(returnData["No Of Records"]);
                    _collection.Add(_sMapping);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetMapSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 539, 1);
                return null;
            }
        }

        private CollectionBase GetServiceMappingsDim(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ServiceMapping _sMapping = new ServiceMapping();
                    _sMapping.ServiceDesc = returnData["SERVICE_DESC"].ToString();//SERVICE_DESC
                    _sMapping.PriceDimCD = returnData["PRICE_DIM_CD"].ToString();//PRICE_DIM_CD
                    _sMapping.PriceDimDesc = returnData["PRICE_DIM_DESC"].ToString();//PRICE_DIM_DESC
                    _sMapping.SERVICE_NAME = returnData["service_name"].ToString();
                    _collection.Add(_sMapping);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMappingsDim").Name;
                ErrorLoger.InsertErrorLogger(ex, 540, 1);
                return null;
            }
        }

        public CollectionBase GetServiceMappingsByName(string SERVICENAME)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.PR_GET_SERVICEMAP_BY_SERV_NAME);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollectionMap);
                dBase.AddInParameter(dCmd, DALConstants.SM_IP_SERVICENAME, DbType.String, SERVICENAME);

                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMappingsByName").Name;
                ErrorLoger.InsertErrorLogger(ex, 541, 1);
                return null;
            }
        }

        private CollectionBase GenerateCollectionMap(IDataReader returnData)
        {
            try
            {
                ServiceMappingCollection serCollection = new ServiceMappingCollection();
                ServiceMapping sMapp;
                while (returnData.Read())
                {
                    sMapp = new ServiceMapping();
                    sMapp.PriceDimID = !DBNull.Value.Equals(returnData[DALConstants.PRICE_DIM_ID_COL]) == true ? Convert.ToInt32(returnData[DALConstants.PRICE_DIM_ID_COL]) : 0;
                    sMapp.SERVICE_NAME = returnData[DALConstants.SM_SERVICE_NAME].ToString();
                    sMapp.PriceDimCD = returnData[DALConstants.SM_PRICE_DIM_CD].ToString();
                    sMapp.PriceDimDesc = returnData[DALConstants.SM_PRICE_DIM_DESC].ToString();
                    sMapp.RecordStatus = returnData[DALConstants.SM_RECORD_STATUS].ToString();
                    sMapp.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SM_SERVICE_ID].ToString());
                    sMapp.StartDate = returnData[DALConstants.SM_START_DATE].ToString();
                    sMapp.EndDate = returnData[DALConstants.SM_END_DATE].ToString();
                    sMapp.PRIORITY = returnData[DALConstants.PRICE_TIER_PRIORITY_COL].ToString();
                    sMapp.EDIT_SER_DIM_IDS = !DBNull.Value.Equals(returnData["SER_DIM_IDS"]) == true ? Convert.ToString(returnData["SER_DIM_IDS"]) : string.Empty;
                    sMapp.PRIORITY_STR = !DBNull.Value.Equals(returnData["DIM_PRIORITY"]) == true ? Convert.ToString(returnData["DIM_PRIORITY"]) : string.Empty;
                    sMapp.Price_tier_id = !DBNull.Value.Equals(returnData["PRICE_TIER_ID"]) == true ? Convert.ToInt32(returnData["PRICE_TIER_ID"]) : 0;

                    sMapp.PRICE_DIM_NAME = !DBNull.Value.Equals(returnData["PRICE_DIM_NAME"]) == true ? Convert.ToString(returnData["PRICE_DIM_NAME"]) : string.Empty;
                    sMapp.PRICE_CODE = !DBNull.Value.Equals(returnData["PRICE_CODE"]) == true ? Convert.ToString(returnData["PRICE_CODE"]) : string.Empty;
                    serCollection.Add(sMapp);
                }
                return serCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollectionMap").Name;
                ErrorLoger.InsertErrorLogger(ex, 542, 1);
                return null;
            }
        }

       

        #endregion DataReaderCollections

        private CollectionBase GetDimenssionByLevelID(IDataReader returnData, IList _collection)
        {
            try
            {
                while (returnData.Read())
                {
                    ServiceLevels _element = new ServiceLevels();
                    _element.LevelID = Convert.ToInt32(returnData["SERVICE_DIM_ID"]);//SERVICE_DIM_SEQ_ID
                    _element.LevelCode = returnData["PRICE_DIM_CD"].ToString();//PRICE_DIM_CD
                    _element.LevelDesc = returnData["PRICE_DIM_DESC"].ToString();//PRICE_DIM_DESC
                    _collection.Add(_element);
                }
                return (CollectionBase)_collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDimenssionByLevelID").Name;
                ErrorLoger.InsertErrorLogger(ex, 565, 1);
                return null;
            }
        }
        public CollectionBase GetPriceLevels(EzHms.ModelEntity.GridPaging gridPaging, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                dbSvc = _dblayer.DBaseFactory;
                cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICE_PRICE_LEVELS);
                if (!string.IsNullOrEmpty(gridPaging.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, DALConstants.SEARCH_TEXT, DbType.String, gridPaging.PREFIX_TEXT);
                    dbSvc.AddInParameter(cmd, DALConstants.COLUMN_NAME_PARM, DbType.String, gridPaging.COLUMN_NAME);
                }
                dbSvc.AddInParameter(cmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, gridPaging.PAGE_SIZE);
                dbSvc.AddInParameter(cmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, gridPaging.CURRENT_PAGE);
                if (gridPaging.ADVANCESEARCH != string.Empty)
                    // dbSvc.AddInParameter(cmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gridPaging.ADVANCESEARCH);
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, gridPaging.ADVANCESEARCH);
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, total_records);
                //dbSvc.AddInParameter(cmd,"IP_PREFIX_TEXT",DbType.String,1);
                GenerateCollectionReader _list = new GenerateCollectionReader(GetPriceLevelsCollection);
                CollectionBase cbase = _dblayer.ExecuteReaderCommand(cmd, _list);
                total_records = dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM) != DBNull.Value ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM)) : 0;
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPriceLevels").Name;
                ErrorLoger.InsertErrorLogger(ex, 511, 1);
                return null;
            }
        }
        /// <summary>
        /// Gets the look up search data.
        /// </summary>
        /// <param name="_lookUPSearch">The _look UP search.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public CollectionBase GetLookUpSearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE_PRICE_ORG_LEVEL);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (_lookUPSearch.PreConditon != null)
                {
                    dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARAM, DbType.String, _lookUPSearch.PreConditon[0]);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                {
                    dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                    //dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                }
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                GenerateCollectionReader reader = new GenerateCollectionReader(GetLookUpSearchData);
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
        /// <summary>
        /// Gets the look up search data.
        /// </summary>
        /// <param name="reader">The reader.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public CollectionBase GetLookUpSearchData(IDataReader reader)
        {
            try
            {
                ServiceCollection _servCollection = new ServiceCollection();
                while (reader.Read())
                {
                    Service _drObject = new Service();

                    _drObject.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _drObject.SERVICE_ID = reader[DALConstants.SERVICE_ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]) : 0;
                    if (reader[DALConstants.SERVICE_PRICE_COL].ToString() != string.Empty)
                        _drObject.ServicePrice = reader[DALConstants.SERVICE_PRICE_COL].ToString();
                    if (reader[DALConstants.SERVICE_PRICE_COL].ToString() != string.Empty)
                        _drObject.SERVICE_PRICE = reader[DALConstants.SERVICE_PRICE_COL].ToString();
                    if (reader[DALConstants.SERVICE_GROUP_ID_COL].ToString() != string.Empty)
                        _drObject.SERVICE_GROUP_ID = Convert.ToInt32(reader[DALConstants.SERVICE_GROUP_ID_COL].ToString());

                    if (reader[DALConstants.SERVICE_CD_COL].ToString() != string.Empty)
                        _drObject.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();

                    if (reader[DALConstants.SERVICE_GROUP_CD_COL].ToString() != string.Empty)
                        _drObject.SERVICE_GROUP_CD = reader[DALConstants.SERVICE_GROUP_CD_COL].ToString();

                    if (reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString() != string.Empty)
                        _drObject.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();

                    _servCollection.Add(_drObject);
                }
                return _servCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUpSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase GetAutoCompleteServiceType(string prefixText, int count, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_TYPE_AUTOCOMPLETE);

                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, null);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceTypeAutoComplete);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteServiceType").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        CollectionBase GetServiceTypeAutoComplete(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = dbDR[1].ToString();
                    _listElements.Value = dbDR[0].ToString();
                    _listElements.Service_type_name = dbDR[2].ToString();
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceTypeAutoComplete").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompleteServices(string prefixText, int count, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_IP_AUTO_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(contextKey));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, string.Empty);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompletePackages(string prefixText, string contextKey, int TariffID, int Companyid, int patClsID, int patID, int wardgrpID, string admnno)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_AUTO_PACKAGES);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, TariffID);
                dBase.AddInParameter(dbCmd, DALConstants.IP_COMPANY_ID, DbType.Int32, Companyid);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, patClsID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, patID);
                dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARAM, DbType.Int32, wardgrpID);
                dBase.AddInParameter(dbCmd, DALConstants.IP_ADMN_NO_PARM, DbType.String, admnno);
                
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompletePackages").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        public CollectionBase GetDoctorOrderIndentDetails(string patinetId, string OrderId, string flag)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_INVS_ORDER_SERVICES);


                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, patinetId);
                dBase.AddInParameter(dbCmd, DALConstants.ORDER_ID_PARM, DbType.Int32, OrderId);
                dBase.AddInParameter(dbCmd, DALConstants.IP_FLAG_PARM, DbType.String, flag);
                list = new GenerateCollectionReader(GetIndentDetailsCollection);

                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDoctorOrderIndentDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase GetIndentDetailsCollection(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    _listElements.IS_BILLED = !DBNull.Value.Equals(dbDR[DALConstants.IS_BILLED_COL]) ? Convert.ToString(dbDR[DALConstants.IS_BILLED_COL]) : string.Empty;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.ITEM_FROM = !DBNull.Value.Equals(dbDR["ITEM_FROM"]) ? Convert.ToString(dbDR["ITEM_FROM"]) : string.Empty;
                    _listElements.INSTRUCTIONS = !DBNull.Value.Equals(dbDR["INSTRUCTIONS"]) ? Convert.ToString(dbDR["INSTRUCTIONS"]) : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetIndentDetailsCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }



        public CollectionBase GetServicesForExcludes(string _Service_type_id, string _service_group_id, string _tariff_id, string _block_list)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICES_SRVTYPE_SRVGRP);

            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, Convert.ToInt32(_Service_type_id));
                dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARAM, DbType.Int32, Convert.ToInt32(_service_group_id));
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, Convert.ToInt32(_tariff_id));
                dbLayer.AddInParameter(dbCmd, "@IP_BLOCK_LIST", DbType.String, _block_list);
                GenerateCollectionReader _sqlData = new GenerateCollectionReader(GenerateServiceCollection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, _sqlData);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetIndentDetailsCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
            return null;
        }


        protected CollectionBase GenerateServiceCollection(IDataReader returnData)
        {
            ServiceCollection _coll = new ServiceCollection();
            ServiceMaster _objModel = null;
            try
            {
                while (returnData.Read())
                {
                    _objModel = new ServiceMaster();
                    _objModel.SERVICE_TYPE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _objModel.SERVICE_GROUP_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_ID_COL]) : string.Empty;
                    _objModel.TARIFF_ID = !DBNull.Value.Equals(returnData[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.TARIFF_ID_COL]) : 0;
                    _objModel.SERVICE_TYPE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _objModel.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _objModel.PRICE = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? float.Parse(returnData[DALConstants.PRICE_COL].ToString()) : 0;
                    _objModel.SERVICE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _coll.Add(_objModel);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetIndentDetailsCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
            return _coll;
        }




        #region Drug Indent
        public CollectionBase GetAutoCompleteDrugInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_AUTO_DRUGS);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAutoCompleteDrugInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteDrugInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        CollectionBase GetAutoCompleteDrugInfo(IDataReader dbDR)
        {
            ServiceCollection collection = new ServiceCollection();
            while (dbDR.Read())
            {
                //OSPListElement _listElements = new OSPListElement();
                //_listElements.Text = dbDR[0].ToString();
                //_listElements.Value = dbDR[1].ToString();
                //_listElements.Price = dbDR[2] != DBNull.Value ? Convert.ToInt32(dbDR[2]) : 0;
                //_listElements.Service_type_name = dbDR[3].ToString();
                //_listElements.Service_group_id = dbDR[4] != DBNull.Value ? Convert.ToInt32(dbDR[4]) : 0;
                //_listElements.Service_type_id = dbDR[5] != DBNull.Value ? Convert.ToInt32(dbDR[5]) : 0;
                //_listElements.Service_Class_Id = dbDR[6] != DBNull.Value ? Convert.ToInt32(dbDR[6]) : 0;
                //_listElements.Service_cd = dbDR[7].ToString();
                //_listElements.Service_group = dbDR[8].ToString();
                //_listElements.Doctor_id = dbDR[9].ToString();
                //_listElements.START_DT = dbDR[11] != DBNull.Value ? dbDR[11].ToString() : string.Empty;
                //_listElements.END_DT = dbDR[12] != DBNull.Value ? dbDR[12].ToString() : string.Empty;
                //collection.Add(_listElements);
            }
            return collection;
        }
        #endregion
        public CollectionBase GetAutoCompleteServiceMaster(string prefixText, int count, string filtercreteria, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICEAUTOCOMPLTE");
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                if (System.Web.HttpContext.Current.Session["TARIFF_ID"] != null)
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["TARIFF_ID"].ToString()));
                }
                else
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, 1);
                }
                if (!string.IsNullOrEmpty(filtercreteria))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.REPORT_FLAG, DbType.String, filtercreteria);
                }
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteServiceMaster").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public CollectionBase GetAutoCompleteServiceMasterorg(string prefixText, int count, string filtercreteria, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICEAUTOCOMPLTE_ORG");
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                if (System.Web.HttpContext.Current.Session["TARIFF_ID"] != null)
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["TARIFF_ID"].ToString()));
                }
                else
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, 1);
                }
                if (!string.IsNullOrEmpty(filtercreteria))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.REPORT_FLAG, DbType.String, filtercreteria);
                }
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceAutoCompleteInfoorg);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteServiceMaster").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompleteServiceMaster_Report(string prefixText, int count, string filtercreteria, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "RPR_GET_SERVICEAUTOCOMPLTE_REPORT");
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                if (System.Web.HttpContext.Current.Session["TARIFF_ID"] != null)
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["TARIFF_ID"].ToString()));
                }
                else
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, 1);
                }
                if (!string.IsNullOrEmpty(filtercreteria))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.REPORT_FLAG, DbType.String, filtercreteria);
                }
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceAutoCompleteInfo_report_Coll);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteServiceMaster").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public CollectionBase GetAutoCompleteServiceMaster__ByGrp(string prefixText, int count, string contextKey, int SrvGrp_Id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICEAUTOCOMPLTE_BYGRP");
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_GROUP_ID", DbType.Int32, SrvGrp_Id);
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteServiceMaster").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public CollectionBase GetAutoCompleteServiceMaster__ByGrp_tariff(string prefixText, int count, string contextKey, int SrvGrp_Id, int servicetype_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICEAUTOCOMPLTE_BYGRP");
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_GROUP_ID", DbType.Int32, SrvGrp_Id);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, servicetype_id);
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceAutoCompleteInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceAutoCompleteInfoorg").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        CollectionBase GetServiceAutoCompleteInfoorg(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                OSPListElement _listElements;
                while (dbDR.Read())
                {
                    _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[1]) ? Convert.ToString(dbDR[1]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToString(dbDR["SERVICE_ID"]) : "0";
                    _listElements.Price = !DBNull.Value.Equals(dbDR["PRICE"]) ? Convert.ToInt32(dbDR["PRICE"].ToString()) : 0;
                    _listElements.SERVICE_CD = !DBNull.Value.Equals(dbDR[4]) ? Convert.ToString(dbDR[4].ToString()) : string.Empty;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR[6]) ? Convert.ToString(dbDR[6].ToString()) : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR[3]) ? Convert.ToString(dbDR[3]) : string.Empty;
                    _listElements.SERVICE_TYPE_ID = !DBNull.Value.Equals(dbDR["SERVICE_TYPE_ID"]) ? Convert.ToString(dbDR["SERVICE_TYPE_ID"]) : "0";
                    _listElements.SERVICE_TYPE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.SERVICE_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR["SERVICE_GROUP_NAME"]) ? Convert.ToString(dbDR["SERVICE_GROUP_NAME"]) : string.Empty;
                    _listElements.SERVICE_CLASS_NAME = !DBNull.Value.Equals(dbDR["SERVICE_CLASS_NAME"]) ? Convert.ToString(dbDR["SERVICE_CLASS_NAME"]) : string.Empty;
                    _listElements.SERVICECLASS_ID = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? Convert.ToString(dbDR["DOCTOR_PCT"]) : string.Empty;
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? Convert.ToString(dbDR["ORG_PCT"]) : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceAutoCompleteInfoorg").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        CollectionBase GetServiceAutoCompleteInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                OSPListElement _listElements;
                while (dbDR.Read())
                {
                    _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[1]) ? Convert.ToString(dbDR[1]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToString(dbDR["SERVICE_ID"]) : "0";
                    _listElements.Price = !DBNull.Value.Equals(dbDR["PRICE"]) ? Convert.ToInt32(dbDR["PRICE"].ToString()) : 0;
                    _listElements.SERVICE_CD = !DBNull.Value.Equals(dbDR[4]) ? Convert.ToString(dbDR[4].ToString()) : string.Empty;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR[6]) ? Convert.ToString(dbDR[6].ToString()) : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR[3]) ? Convert.ToString(dbDR[3]) : string.Empty;
                    _listElements.SERVICE_TYPE_ID = !DBNull.Value.Equals(dbDR["SERVICE_TYPE_ID"]) ? Convert.ToString(dbDR["SERVICE_TYPE_ID"]) : "0";
                    _listElements.UNI_SERVICE_TYPE_ID=!DBNull.Value.Equals(dbDR["SERVICE_TYPE_ID"]) ? Convert.ToString(dbDR["SERVICE_TYPE_ID"]) : "0";
                    _listElements.SERVICE_TYPE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.SERVICE_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR["SERVICE_GROUP_NAME"]) ? Convert.ToString(dbDR["SERVICE_GROUP_NAME"]) : string.Empty;
                    _listElements.SERVICE_CLASS_NAME = !DBNull.Value.Equals(dbDR["SERVICE_CLASS_NAME"]) ? Convert.ToString(dbDR["SERVICE_CLASS_NAME"]) : string.Empty;
                    _listElements.SERVICECLASS_ID = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase GetServiceAutoCompleteInfo_report_Coll(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                OSPListElement _listElements;
                while (dbDR.Read())
                {
                    _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[1]) ? Convert.ToString(dbDR[1]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToString(dbDR["SERVICE_ID"]) : "0";
                    _listElements.SERVICE_CD = !DBNull.Value.Equals(dbDR["SERVICE_CD"]) ? Convert.ToString(dbDR["SERVICE_CD"].ToString()) : string.Empty;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR["SERVICE_GROUP_NAME"]) ? Convert.ToString(dbDR["SERVICE_GROUP_NAME"]) : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceAutoCompleteInfo_report_Coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        

        public CollectionBase GetAutoCompleteSErviceInfoSampleReg(string prefixText, string contextKey, string Flag, string companyId, string LocId, string CorpPatType, string CmpWardGrpID, int channel, int refdocid)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_AUTO_OP_SAMPLE_REG);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.String, companyId);
                dBase.AddInParameter(dbCmd, DALConstants.LOCATION_ID_PARM, DbType.String, LocId);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_TYPE_PARM, DbType.String, CorpPatType);
                dBase.AddInParameter(dbCmd, "@IP_CMP_WARD_GROUP_ID", DbType.String, CmpWardGrpID);
                dBase.AddInParameter(dbCmd, "@IP_CHANNEL", DbType.Int32, channel);
                dBase.AddInParameter(dbCmd, "@IP_REF_DOC_ID", DbType.Int32, refdocid);
                dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, Flag);

                list = new GenerateCollectionReader(GetAutoCompleteInfoSampleReg);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteSErviceInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase GetAutoCompleteInfoSampleReg(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;

                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;

                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? dbDR[DALConstants.TARIFF_ID_COL].ToString() : "1";

                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_ID_COL]) : 0;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_NAME = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_COL]) : string.Empty;
                    _listElements.DOSAGE_QTY = !DBNull.Value.Equals(dbDR[DALConstants.DOSAGE_QTY_COL]) ? Convert.ToString(dbDR[DALConstants.DOSAGE_QTY_COL]) : string.Empty;
                    _listElements.SPECIMEN_ID = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_ID_COL]) : string.Empty;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_ID = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_ID_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_ID_COL]) : string.Empty;
                    _listElements.CONCESSION = !DBNull.Value.Equals(dbDR[DALConstants.CONCESSION_COL]) ? Convert.ToString(dbDR[DALConstants.CONCESSION_COL]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR[DALConstants.IS_CLINICAL_HIST_REQ_COL]) ? Convert.ToString(dbDR[DALConstants.IS_CLINICAL_HIST_REQ_COL]) : string.Empty;
                    _listElements.CHISTORY_TEXT = !DBNull.Value.Equals(dbDR[DALConstants.CHISTORY_TEXT_COL]) ? Convert.ToString(dbDR[DALConstants.CHISTORY_TEXT_COL]) : string.Empty;
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR[DALConstants.GENDER_ID_COL]) ? Convert.ToString(dbDR[DALConstants.GENDER_ID_COL]) : "0";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.REPORT_DISPATCH_TIME = !DBNull.Value.Equals(dbDR[DALConstants.REPORT_DISPATCH_TIME_COL]) ? Convert.ToString(dbDR[DALConstants.REPORT_DISPATCH_TIME_COL]) : string.Empty;
                    _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR[DALConstants.HISTORY_TYPE_COL]) ? Convert.ToString(dbDR[DALConstants.HISTORY_TYPE_COL]) : string.Empty;
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.HISTORY_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.HISTORY_TYPE_ID_COL]) : string.Empty;

                    collection.Add(_listElements);
                }

                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }
        public CollectionBase ESTIMATION_WORK_ORDER_SERVICES_SUB(string FRN_APP_BILL_ID, string LocId)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_ESTIMATION_WORK_ORDER_SERVICES_SUB);
                dBase.AddInParameter(dbCmd, "@IP_FRN_APP_BILL_ID", DbType.String, FRN_APP_BILL_ID);
                dBase.AddInParameter(dbCmd, DALConstants.LOCATION_ID_PARM, DbType.String, LocId);
                list = new GenerateCollectionReader(ESTIMATION_WORK_ORDER_SERVICES_SUBCOLLECTION);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ESTIMATION_WORK_ORDER_SERVICES_SUB").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }


        CollectionBase ESTIMATION_WORK_ORDER_SERVICES_SUBCOLLECTION(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    //_listElements.LAST_INVST_SRV = !DBNull.Value.Equals(dbDR[DALConstants.LAST_INVST_SRV_COL]) ? Convert.ToString(dbDR[DALConstants.LAST_INVST_SRV_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? dbDR[DALConstants.TARIFF_ID_COL].ToString() : "1";
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_ID_COL]) : 0;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_NAME = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_COL]) : string.Empty;
                    _listElements.DOSAGE_QTY = !DBNull.Value.Equals(dbDR[DALConstants.DOSAGE_QTY_COL]) ? Convert.ToString(dbDR[DALConstants.DOSAGE_QTY_COL]) : string.Empty;
                    _listElements.SPECIMEN_ID = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_ID_COL]) : string.Empty;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_ID = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_ID_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_ID_COL]) : string.Empty;
                    _listElements.CONCESSION = !DBNull.Value.Equals(dbDR[DALConstants.CONCESSION_COL]) ? Convert.ToString(dbDR[DALConstants.CONCESSION_COL]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR[DALConstants.IS_CLINICAL_HIST_REQ_COL]) ? Convert.ToString(dbDR[DALConstants.IS_CLINICAL_HIST_REQ_COL]) : string.Empty;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.AMOUNT = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToString(dbDR[DALConstants.PRICE_COL]) : "0";
                    _listElements.NET_AMOUNT = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToString(dbDR[DALConstants.PRICE_COL]) : "0";
                    _listElements.CONCESSION_AMOUNT = !DBNull.Value.Equals(dbDR[DALConstants.CONCESSION_COL]) ? Convert.ToString(dbDR[DALConstants.CONCESSION_COL]) : "0";
                    _listElements.IS_EMERGENCY = !DBNull.Value.Equals(dbDR[DALConstants.IS_EMERGENCY_COL]) ? Convert.ToString(dbDR[DALConstants.IS_EMERGENCY_COL]) : "N";
                    _listElements.REPORT_DISPATCH_TIME = !DBNull.Value.Equals(dbDR[DALConstants.REPORT_DISPATCH_TIME_COL]) ? Convert.ToString(dbDR[DALConstants.REPORT_DISPATCH_TIME_COL]) : string.Empty;
                    _listElements.CNCL_SMRY_ID = !DBNull.Value.Equals(dbDR["CNCL_HIS_ID"]) ? dbDR["CNCL_HIS_ID"].ToString() : string.Empty;
                    _listElements.MEDICATION_ID = !DBNull.Value.Equals(dbDR[DALConstants.MEDICATION_ID_COL]) ? Convert.ToString(dbDR[DALConstants.MEDICATION_ID_COL].ToString()) : string.Empty;
                    _listElements.IS_TAKEN_TODAY = !DBNull.Value.Equals(dbDR["IS_TAKEN_TODAY"]) ? dbDR["IS_TAKEN_TODAY"].ToString() : string.Empty;
                    _listElements.DOSAGE = !DBNull.Value.Equals(dbDR["DOSAGE"]) ? dbDR["DOSAGE"].ToString() : string.Empty;
                    _listElements.LMP_DT = !DBNull.Value.Equals(dbDR["LMP_DT"]) ? dbDR["LMP_DT"].ToString() : string.Empty;
                    _listElements.MEDICATION_NAME = !DBNull.Value.Equals(dbDR["MEDICATION_NAME"]) ? dbDR["MEDICATION_NAME"].ToString() : string.Empty;
                    _listElements.SERVICE_STATUS = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_STATUS_COL]) ? dbDR[DALConstants.SERVICE_STATUS_COL].ToString() : string.Empty;
                    _listElements.OUTHER_MEDICATION = !DBNull.Value.Equals(dbDR["OTHER_MEDICATION"]) ? dbDR["OTHER_MEDICATION"].ToString() : string.Empty;
                    _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR["HISTORY_TYPE"]) ? dbDR["HISTORY_TYPE"].ToString() : string.Empty;
                    _listElements.PKG_SRV_ID = !DBNull.Value.Equals(dbDR[DALConstants.PKG_SRV_ID_COL]) ? Convert.ToString(dbDR[DALConstants.PKG_SRV_ID_COL]) : "0";
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.HISTORY_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.HISTORY_TYPE_ID_COL]) : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ESTIMATION_WORK_ORDER_SERVICES_SUBCOLLECTION").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        public bool CheckValidation_Op_Sample(string DOB, string MOBILE_NO, string session_id)
        {
            int count = 0;
            try
            {
                using (DataAccessLayer dbLayer = new DataAccessLayer())
                {
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_PAT_REG_ALERT_MSG);
                    dBase.AddInParameter(dbCmd, DALConstants.IP_DOB_PARM, DbType.String, DOB);
                    dBase.AddInParameter(dbCmd, DALConstants.MOBILE_NO_PARM, DbType.String, MOBILE_NO);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, session_id);
                    count = Convert.ToInt32(dBase.ExecuteScalar(dbCmd));

                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CheckValidation_Op_Sample").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);

            }
            if (count > 0)
                return true;
            else
                return false;
        }

        

      
        public bool SaveMedications(Service _objservice)
        {
            int count = 0;
            try
            {
                DataAccessLayer _dbLayer = new DataAccessLayer();
                Database dbObj = _dbLayer.DBaseFactory;
                DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_MEDICATIONS);
                dbObj.AddInParameter(dbCmd, DALConstants.MEDICATION_ID_PARM, DbType.Int32, _objservice.MEDICATION_ID);
                dbObj.AddInParameter(dbCmd, DALConstants.CLINICAL_HISTORY_ID_PARM, DbType.Int32, _objservice.CLINICAL_HISTORY_ID);
                dbObj.AddInParameter(dbCmd, DALConstants.MEDICATION_NAME_PARAM, DbType.String, _objservice.MEDICATION_NAME);
                dbObj.AddInParameter(dbCmd, DALConstants.MEDICATION_DESC_PARM1, DbType.String, _objservice.MEDICATION_DESC);
                dbObj.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, _objservice.SESSION_ID);
                count = dbObj.ExecuteNonQuery(dbCmd);
                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveMedications").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return false;

            }

        }

        public CollectionBase GetMedications_Suburban(EzHms.ModelEntity.LookUpSearch _lookupSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_MEDICATION);
                dbSvc.AddInParameter(dbCmd, DALConstants.PageNum, DbType.Int32, _lookupSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(dbCmd, DALConstants.PageSize, DbType.Int32, _lookupSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookupSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, _lookupSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookupSearch.PREFIX_TEXT);
                }
                dbSvc.AddInParameter(dbCmd, DALConstants.FROM_DT_PARM, DbType.String, _lookupSearch.FROM_DT);
                dbSvc.AddInParameter(dbCmd, DALConstants.TO_DT_PARM, DbType.String, _lookupSearch.TO_DT);
                if (!string.IsNullOrEmpty(_lookupSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookupSearch.ADVANCESEARCH);
                dbSvc.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);

                //GenerateCollectionReader sqlData = new GenerateCollectionReader(GetAllServiceGroupsCollection);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollectionMedication);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _total_records = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllAdvancePaymentDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 802, 1);
                return null;
            }
        }

        protected CollectionBase GenerateCollectionMedication(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection servicemastercoll = new ServiceMasterCollection();

                while (returnData.Read())
                {
                    Service srvmaster = new Service();
                    srvmaster.MEDICATION_ID = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.MEDICATION_ID_COL].ToString()) : 0;
                    //srvmaster.MEDICATION_REV_NO = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_REV_NO_COL]) ? (returnData[DALConstants.MEDICATION_REV_NO_COL]) : string.Empty;
                    srvmaster.MEDICATION_NAME = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_NAME_COL]) ? returnData[DALConstants.MEDICATION_NAME_COL].ToString() : string.Empty;
                    srvmaster.MEDICATION_DESC = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_DESC_COL]) ? returnData[DALConstants.MEDICATION_DESC_COL].ToString() : string.Empty;
                    srvmaster.CLINICAL_HISTORY_ID = !DBNull.Value.Equals(returnData[DALConstants.CLINICAL_HISTORY_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.CLINICAL_HISTORY_ID_COL]) : 0;
                    srvmaster.CREATE_BY = !DBNull.Value.Equals(returnData[DALConstants.CREATE_BY_COL]) ? returnData[DALConstants.CREATE_BY_COL].ToString() : string.Empty;
                    srvmaster.RECORD_STATUS = !DBNull.Value.Equals(returnData[DALConstants.RECORD_STATUS_COL]) ? returnData[DALConstants.RECORD_STATUS_COL].ToString() : string.Empty;
                    srvmaster.MODIFY_BY = !DBNull.Value.Equals(returnData[DALConstants.MODIFY_BY_COL]) ? returnData[DALConstants.MODIFY_BY_COL].ToString() : string.Empty;
                    srvmaster.CREATE_DT = !DBNull.Value.Equals(returnData[DALConstants.CREATE_DT_COL]) ? returnData[DALConstants.CREATE_DT_COL].ToString() : string.Empty;
                    srvmaster.MODIFY_DT = !DBNull.Value.Equals(returnData[DALConstants.MODIFY_DT_COL]) ? returnData[DALConstants.MODIFY_DT_COL].ToString() : string.Empty;
                    srvmaster.SESSION_ID = !DBNull.Value.Equals(returnData[DALConstants.SESSION_ID_COl]) ? Convert.ToInt32(returnData[DALConstants.SESSION_ID_COl]) : 0;
                    servicemastercoll.Add(srvmaster);
                }
                return servicemastercoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollectionMedication").Name;
                ErrorLoger.InsertErrorLogger(ex, 800, 1);
                return null;
            }
        }

        public CollectionBase Getmedicationedit_Suburban(int meditation_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_MEDICATION_EDIT);
                dBase.AddInParameter(dbCmd, DALConstants.MEDICATION_ID_PARM, DbType.Int32, meditation_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Generatemedicationeditcoll_Suburban);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getmedicationedit_Suburban").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase Generatemedicationeditcoll_Suburban(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection servicemastercoll = new ServiceMasterCollection();

                while (returnData.Read())
                {
                    Service srvmaster = new Service();
                    srvmaster.MEDICATION_ID = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.MEDICATION_ID_COL].ToString()) : 0;
                    srvmaster.MEDICATION_NAME = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_NAME_COL]) ? returnData[DALConstants.MEDICATION_NAME_COL].ToString() : string.Empty;
                    srvmaster.MEDICATION_DESC = !DBNull.Value.Equals(returnData[DALConstants.MEDICATION_DESC_COL]) ? returnData[DALConstants.MEDICATION_DESC_COL].ToString() : string.Empty;
                    srvmaster.CLINICAL_HISTORY_ID = !DBNull.Value.Equals(returnData[DALConstants.CLINICAL_HISTORY_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.CLINICAL_HISTORY_ID_COL]) : 0;
                    srvmaster.MEDICATION_REV_NO = returnData["MEDICATION_REV_NO"].ToString(); //?(returnData[DALConstants.MEDICATION_REV_NO_COL]) :string.Empty;
                    servicemastercoll.Add(srvmaster);
                }
                return servicemastercoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Generatemedicationeditcoll_Suburban").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }


        
        
        public bool CheckValidation_ServiceCode(string srvcode, string session_id, string Flag)
        {
            int count = 0;
            try
            {
                using (DataAccessLayer dbLayer = new DataAccessLayer())
                {
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_CODE_ALERT_MSG");
                    dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CD_PARM, DbType.String, srvcode);
                    dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, Flag);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, session_id);
                    count = Convert.ToInt32(dBase.ExecuteScalar(dbCmd));
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CheckValidation_ServiceCode").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);

            }
            if (count > 0)
                return true;
            else
                return false;
        }
        public DataSet GetAutoPkgservicesincludesNEW(int service_id, int tariffid, string umr_no, string PAT_CATEGORY_ID, string cmp_id)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_PACKAGE_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARAM, DbType.Int32, service_id);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, tariffid);
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, umr_no);
                if (!string.IsNullOrEmpty(cmp_id))
                {
                    dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(cmp_id));
                }
                if (!string.IsNullOrEmpty(PAT_CATEGORY_ID))
                {
                    dBase.AddInParameter(dbCmd, "@IP_PAT_CATEGORY_ID", DbType.Int32, Convert.ToInt32(PAT_CATEGORY_ID));
                }
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet ds = dBase.ExecuteDataSet(dbCmd);
                return ds;
               
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoPkgservicesincludes").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public CollectionBase GetAutoPkgservicesincludes(int service_id, int tariffid, string umr_no, string PAT_CATEGORY_ID, string cmp_id)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_PACKAGE_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARAM, DbType.Int32, service_id);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, tariffid);
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, umr_no);
                if (!string.IsNullOrEmpty(cmp_id))
                {
                    dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(cmp_id));
                }
                if (!string.IsNullOrEmpty(PAT_CATEGORY_ID))
                {
                    dBase.AddInParameter(dbCmd, "@IP_PAT_CATEGORY_ID", DbType.Int32, Convert.ToInt32(PAT_CATEGORY_ID));
                }
                list = new GenerateCollectionReader(GetPkgsrvincludescoll);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoPkgservicesincludes").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase GetPkgsrvincludescoll(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.PKG_SRV_IDS = !DBNull.Value.Equals(dbDR["SRV_PKG_ID"]) ? Convert.ToString(dbDR["SRV_PKG_ID"]) : "0";
                    _listElements.PKG_SRV_NAME = !DBNull.Value.Equals(dbDR["PKG_SRV_NAME"]) ? Convert.ToString(dbDR["PKG_SRV_NAME"]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR["DEPARTMENT_ID"]) ? Convert.ToString(dbDR["DEPARTMENT_ID"]) : "0";
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR["SERVICE_GROUP_NAME"]) ? Convert.ToString(dbDR["SERVICE_GROUP_NAME"]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.QUANTITY = !DBNull.Value.Equals(dbDR["QUANTITY"]) ? Convert.ToInt32(dbDR["QUANTITY"].ToString()) : 1;
                    //_listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    //_listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    //_listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    // _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    //  _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    //  _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIST_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIST_REQ"]) : "N";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? Convert.ToString(dbDR["GENDER_ID"]) : "0";
                    // _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR["HISTORY_TYPE"]) ? Convert.ToString(dbDR["HISTORY_TYPE"]) : "N";
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToString(dbDR["HISTORY_TYPE_ID"]) : "0";
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? Convert.ToString(dbDR["MIN_PRICE"]) : "0";
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? Convert.ToString(dbDR["MAX_PRICE"]) : "0";
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : "0";
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? Convert.ToString(dbDR["CONCERN_FORM_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.NO_NEED_DAYS = !DBNull.Value.Equals(dbDR["NO_NEED_DAYS"]) ? Convert.ToString(dbDR["NO_NEED_DAYS"]) : "0";
                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? Convert.ToString(dbDR["QYT_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.CMP_DISC_PCNT = !DBNull.Value.Equals(dbDR["CMP_DISC_PCNT"]) ? Convert.ToString(dbDR["CMP_DISC_PCNT"]) : "0";
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? Convert.ToString(dbDR["EMP_PERCENT"]) : "0";
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? Convert.ToString(dbDR["ORG_PERCENT"]) : "0";
                    //   _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? Convert.ToString(dbDR["EMP_PRICE"]) : "0";
                    //   _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_AGE"]) ? Convert.ToString(dbDR["FROM_AGE"]) : "0";
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_AGE"]) ? Convert.ToString(dbDR["TO_AGE"]) : "0";
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : "0";
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? Convert.ToString(dbDR["IS_POST"]) : "N";
                    _listElements.IS_OPTIONAL = !DBNull.Value.Equals(dbDR["IS_OPTIONAL"]) ? Convert.ToString(dbDR["IS_OPTIONAL"]) : "N";
                    _listElements.IS_FREE_FOLLOWUP = !DBNull.Value.Equals(dbDR["IS_FREE_FOLLOWUP"]) ? Convert.ToString(dbDR["IS_FREE_FOLLOWUP"]) : "N";
                    _listElements.EQUI_SERVICE_CD = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_CD"]) ? Convert.ToString(dbDR["EQUI_SERVICE_CD"]) : "";
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? Convert.ToString(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) : "N";
                    _listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? Convert.ToString(dbDR["IS_CONSENT_FORM"]) : "N";
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? Convert.ToString(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) : "N";
                    _listElements.IS_ADDITIONAL = !DBNull.Value.Equals(dbDR["IS_ADDITIONAL"]) ? Convert.ToString(dbDR["IS_ADDITIONAL"]) : "N";
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : "0";
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.ITEM_ID = !DBNull.Value.Equals(dbDR["ITEM_ID"]) ? Convert.ToInt32(dbDR["ITEM_ID"].ToString()) : 0;
                    _listElements.ITEM_GROUP_ID = !DBNull.Value.Equals(dbDR["ITEM_GROUP_ID"]) ? Convert.ToString(dbDR["ITEM_GROUP_ID"]) : "0";
                    _listElements.IS_DIRECT_BILLING = !DBNull.Value.Equals(dbDR["IS_DIRECT_BILLING"]) ? Convert.ToString(dbDR["IS_DIRECT_BILLING"]) : string.Empty;
                    _listElements.IS_APPROVAL_REQUIRED = !DBNull.Value.Equals(dbDR["IS_APPROVAL_REQUIRED"]) ? Convert.ToString(dbDR["IS_APPROVAL_REQUIRED"]) : string.Empty;
                    _listElements.BILLING_HEAD_ID = !DBNull.Value.Equals(dbDR["BILLING_HEAD_ID"]) ? Convert.ToString(dbDR["BILLING_HEAD_ID"]) : string.Empty;
                    _listElements.IS_DOCTOR_REQUIRED = !DBNull.Value.Equals(dbDR["IS_DOCTOR_REQUIRED"]) ? Convert.ToString(dbDR["IS_DOCTOR_REQUIRED"]) : string.Empty;
                    _listElements.TAX_PCT = !DBNull.Value.Equals(dbDR["TAX_PCT"]) ? Convert.ToString(dbDR["TAX_PCT"]) : "0";
                    _listElements.SGST_TAX_PCT = !DBNull.Value.Equals(dbDR["SGST_PCT"]) ? Convert.ToString(dbDR["SGST_PCT"]) : "0";
                    _listElements.CGST_TAX_PCT = !DBNull.Value.Equals(dbDR["CGST_PCT"]) ? Convert.ToString(dbDR["CGST_PCT"]) : "0";
                    _listElements.CONC_RULE_PCT = !DBNull.Value.Equals(dbDR["CONC_PCT"]) ? Convert.ToString(dbDR["CONC_PCT"]) : "0";
                    _listElements.CONC_RULE_ID = !DBNull.Value.Equals(dbDR["CNCSN_RULE_ID"]) ? Convert.ToString(dbDR["CNCSN_RULE_ID"]) : "0";
                    _listElements.CONC_RULE_NAME = !DBNull.Value.Equals(dbDR["CNCSN_RULE_NAME"]) ? Convert.ToString(dbDR["CNCSN_RULE_NAME"]) : "";
                    _listElements.CONC_RULE_AUTH_NAME = !DBNull.Value.Equals(dbDR["AUTH_NAME"]) ? Convert.ToString(dbDR["AUTH_NAME"]) : "";
                    _listElements.CONC_RULE_AUTH_ID = !DBNull.Value.Equals(dbDR["AUTH_ID"]) ? Convert.ToString(dbDR["AUTH_ID"]) : "0";
                    collection.Add(_listElements);
                }

                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPkgsrvincludescoll").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }





        /*Services Posting In Op Billing Lookup And AutoCompletion */
        public CollectionBase GetServicesLookupIn_OPBilling(LookUpSearch obj, out int _total_records)
        {
            _total_records = 0;
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_OP_SERVICES_LOOKUP");
                if (obj.PreConditon != null)
                {
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[0]));
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[1]));
                    dBase.AddInParameter(dbCmd, "@IP_PATIENT_CLASS_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[2]));
                }
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, obj.PreConditon[3]);
                dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, obj.PreConditon[4]);
                dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, obj.PreConditon[6]);/*Emergency Flag */
                dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.String, obj.PreConditon[7]); /*Gender Id Check */
                dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(obj.PreConditon[8]));/*Company Id For Corporate */
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, Convert.ToInt32(obj.PreConditon[10]));
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, Convert.ToInt32(obj.PreConditon[9]));
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, Convert.ToString(obj.PreConditon[11]));

                if (!string.IsNullOrEmpty(obj.PreConditon[5].ToString()))
                    dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, obj.PreConditon[5]);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, 100);
                //dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.String, ));
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_Op_Services_Details);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                object count = dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM);
                _total_records = count != DBNull.Value ? Convert.ToInt32(count) : 0; //Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicesLookupIn_OPBilling").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        public DataSet GetAutoCompleteOpBillingSrvs(string prefixText, string contextKey, LookUpSearch obj)
        {
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_AUTO_OP_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, obj.PreConditon[4]);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[6]));
                if (obj.PreConditon != null)
                {
                    dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[0]));
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[1]));
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, Convert.ToInt32(obj.PreConditon[2]));
                }
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, DALConstants.GENDER_ID_PARM, DbType.String, Convert.ToInt32(obj.PreConditon[5]));
                //list = new GenerateCollectionReader(Get_Op_Services_Details);
                //CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                //return cBase;
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet ds = dBase.ExecuteDataSet(dbCmd);
                return ds;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteOpBillingSrvs").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }
        CollectionBase Get_Op_Services_Details(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();

                while (dbDR.Read())
                {
                    EzHms.ModelEntity.Service _listElements = new Service();
                    //  OSPListElement _listElements = new OSPListElement();
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_ID_COL]) : 0;
                    _listElements.PRICE = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToString(dbDR[DALConstants.PRICE_COL]) : "0";
                    _listElements.SERVICE_TYPE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.SERVICE_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.SERVICE_CLASS_ID = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.SERVICE_CD = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.SERVICE_GROUP_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.EFFECT_FROM_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.EFFECT_TO_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToString(dbDR["SERVICE_PRICE_ID"]) : "0";
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR["ORG_PRICE"]) ? Convert.ToString(dbDR["ORG_PRICE"]) : "0";
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR["DOCTOR_PRICE"]) ? Convert.ToString(dbDR["DOCTOR_PRICE"]) : "0";
                    _listElements.PATIENT_CLASS_ID = !DBNull.Value.Equals(dbDR["PATIENT_CLASS_ID"]) ? Convert.ToString(dbDR["PATIENT_CLASS_ID"]) : "0";
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR["CONSULTATION_TYPE_ID"]) ? Convert.ToString(dbDR["CONSULTATION_TYPE_ID"]) : "0";
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.TARIFF_ID = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToInt32(dbDR["TARIFF_ID"]) : 0;
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIST_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIST_REQ"]) : "N";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? Convert.ToString(dbDR["GENDER_ID"]) : "0";
                    // _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR["HISTORY_TYPE"]) ? Convert.ToString(dbDR["HISTORY_TYPE"]) : "N";
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToString(dbDR["HISTORY_TYPE_ID"]) : "0";
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? Convert.ToString(dbDR["MIN_PRICE"]) : "0";
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? Convert.ToString(dbDR["MAX_PRICE"]) : "0";
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : "N";
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? Convert.ToString(dbDR["CONCERN_FORM_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : string.Empty;
                    //  _listElements.NO_NEED_DAYS = !DBNull.Value.Equals(dbDR["NO_NEED_DAYS"]) ? Convert.ToString(dbDR["NO_NEED_DAYS"]) : "0";
                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? Convert.ToString(dbDR["QYT_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.CMP_DISC_PCNT = !DBNull.Value.Equals(dbDR["CMP_DISC_PCNT"]) ? Convert.ToString(dbDR["CMP_DISC_PCNT"]) : "0";
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? Convert.ToString(dbDR["EMP_PERCENT"]) : "0";
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? Convert.ToString(dbDR["ORG_PERCENT"]) : "0";
                    //   _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? Convert.ToString(dbDR["EMP_PRICE"]) : "0";
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_AGE"]) ? Convert.ToString(dbDR["FROM_AGE"]) : "0";
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_AGE"]) ? Convert.ToString(dbDR["TO_AGE"]) : "0";
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : "0";
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? Convert.ToString(dbDR["IS_POST"]) : "N";
                    _listElements.MAX_OPT_SERVICES_ALLOWED = !DBNull.Value.Equals(dbDR["MAX_OPT_SERVICES_ALLOWED"]) ? Convert.ToString(dbDR["MAX_OPT_SERVICES_ALLOWED"]) : "0";
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Op_Services_Details").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }


        public bool SaveOpBilling(string Xml, int reg_id, int session_id, out int count, out int bill_id, out int tran_id, out string bill_no, out string tran_no, string pkgparam, string hck_pkg, out string op_message)
        {
            count = 0;
            bill_id = 0;
            tran_id = 0;
            bill_no = "";
            tran_no = "";
            op_message = string.Empty;

            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_OPBILL_ONLY");
                dbSvc.AddInParameter(dbCmd, "@XML", DbType.Xml, Xml);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                dbSvc.AddOutParameter(dbCmd, "@OP_BILL_ID", DbType.Int32, bill_id);
                dbSvc.AddOutParameter(dbCmd, "@OP_TRAN_ID", DbType.Int32, tran_id);
                dbSvc.AddInParameter(dbCmd, "@IP_REG_ID", DbType.Int32, reg_id);
                dbSvc.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, session_id);
                dbSvc.AddInParameter(dbCmd, "@IP_HCK", DbType.String, hck_pkg);

                dbSvc.AddOutParameter(dbCmd, "@OP_BILL_NO", DbType.String, 50);
                dbSvc.AddOutParameter(dbCmd, "@OP_TRAN_NO", DbType.String, 50);
                dbSvc.AddInParameter(dbCmd, "@IP_ISHCPKG", DbType.String, pkgparam);
                dbSvc.AddOutParameter(dbCmd, "@OP_MESSAGE", DbType.String, 250);
                count = dbSvc.ExecuteNonQuery(dbCmd);
                bill_id = dbSvc.GetParameterValue(dbCmd, "@OP_BILL_ID").ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_BILL_ID")) : 0;
                tran_id = dbSvc.GetParameterValue(dbCmd, "@OP_TRAN_ID").ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_TRAN_ID")) : 0;
                bill_no = dbSvc.GetParameterValue(dbCmd, "@OP_BILL_NO").ToString() != string.Empty ? Convert.ToString(dbSvc.GetParameterValue(dbCmd, "@OP_BILL_NO")) : "0";
                tran_no = dbSvc.GetParameterValue(dbCmd, "@OP_TRAN_NO").ToString() != string.Empty ? Convert.ToString(dbSvc.GetParameterValue(dbCmd, "@OP_TRAN_NO")) : "0";
                op_message = dbSvc.GetParameterValue(dbCmd, "@OP_MESSAGE").ToString() != string.Empty ? Convert.ToString(dbSvc.GetParameterValue(dbCmd, "@OP_MESSAGE")) : "0";

                if (count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveOpBilling").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return false;
            }

        }



        public bool SaveOSpBilling(string Xml, string patient_no, string pat_Img, int session_id, out int count, out int bill_id, out int tran_id, out int patient_id, out int con_bill_id, out int opbill_billid, out string bill_no, out string tran_no, string ishcpkg)
        {
            count = 0;
            bill_id = 0;
            tran_id = 0;
            patient_id = 0;
            con_bill_id = 0;
            opbill_billid = 0;
            bill_no = "";
            tran_no = "";
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_OSPREGBILLING_XML");
                dbSvc.AddInParameter(dbCmd, "@XML", DbType.Xml, Xml);
                dbSvc.AddInParameter(dbCmd, "@IP_PATIENT_NO", DbType.String, patient_no);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT_PAT_ID", DbType.Int32, patient_id);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT_CON_BILL_ID", DbType.Int32, con_bill_id);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT_TRAN_ID", DbType.Int32, tran_id);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT_OPBILL_BILL_ID", DbType.Int32, opbill_billid);
                dbSvc.AddOutParameter(dbCmd, "@OP_BILL_NO", DbType.String, 50);
                dbSvc.AddOutParameter(dbCmd, "@OP_TRAN_NO", DbType.String, 50);
                dbSvc.AddInParameter(dbCmd, "@IP_PATIENT_IMAGE", DbType.String, pat_Img);
                dbSvc.AddInParameter(dbCmd, "@IP_ISHCPKG", DbType.String, ishcpkg);
                dbSvc.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, session_id);
                /* dbSvc.AddInParameter(dbCmd, "@IP_ISHCPKG", DbType.String, pkgparam);*/
                count = dbSvc.ExecuteNonQuery(dbCmd);
                tran_id = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_COUNT_TRAN_ID"));
                patient_id = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_COUNT_PAT_ID"));
                con_bill_id = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_COUNT_CON_BILL_ID"));
                opbill_billid = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd, "@OP_COUNT_OPBILL_BILL_ID"));
                bill_no = Convert.ToString(dbSvc.GetParameterValue(dbCmd, "@OP_BILL_NO"));
                tran_no = Convert.ToString(dbSvc.GetParameterValue(dbCmd, "@OP_TRAN_NO"));
                if (count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveOSpBilling").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return false;
            }

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

      

        public CollectionBase GetRepeateBill(string bill_id, string cmp_id, string PAT_CATEGORY_ID, string tariff_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_BILL_REPEAT_DTLS");
                dBase.AddInParameter(dbCmd, "@IP_BILL_ID", DbType.Int32, Convert.ToInt32(bill_id));
                dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(cmp_id));
                if (!string.IsNullOrEmpty(PAT_CATEGORY_ID))
                {
                    dBase.AddInParameter(dbCmd, "@IP_PAT_CATEGORY_ID", DbType.Int32, Convert.ToInt32(PAT_CATEGORY_ID));
                }
                if (!string.IsNullOrEmpty(tariff_id))
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(tariff_id));
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetRepeatBillcollcetion);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetRepeateBill").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetRepeatBillcollcetion(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    // _listElements.ORDER_DET_ID = !DBNull.Value.Equals(dbDR["ORDER_DET_ID"]) ? Convert.ToString(dbDR["ORDER_DET_ID"]) : "0";
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIST_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIST_REQ"]) : "N";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? Convert.ToString(dbDR["GENDER_ID"]) : "0";
                    // _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR["HISTORY_TYPE"]) ? Convert.ToString(dbDR["HISTORY_TYPE"]) : "N";
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToString(dbDR["HISTORY_TYPE_ID"]) : "0";
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? Convert.ToString(dbDR["MIN_PRICE"]) : "0";
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? Convert.ToString(dbDR["MAX_PRICE"]) : "0";
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : "0";
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? Convert.ToString(dbDR["CONCERN_FORM_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.NO_NEED_DAYS = !DBNull.Value.Equals(dbDR["NO_NEED_DAYS"]) ? Convert.ToString(dbDR["NO_NEED_DAYS"]) : "0";
                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? Convert.ToString(dbDR["QYT_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.CMP_DISC_PCNT = !DBNull.Value.Equals(dbDR["CMP_DISC_PCNT"]) ? Convert.ToString(dbDR["CMP_DISC_PCNT"]) : "0";
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? Convert.ToString(dbDR["EMP_PERCENT"]) : "0";
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? Convert.ToString(dbDR["ORG_PERCENT"]) : "0";
                    _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? Convert.ToString(dbDR["EMP_PRICE"]) : "0";
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_DAYS"]) ? Convert.ToString(dbDR["FROM_DAYS"]) : "0";
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_DAYS"]) ? Convert.ToString(dbDR["TO_DAYS"]) : "0";
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : "0";
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? Convert.ToString(dbDR["IS_POST"]) : "N";
                    _listElements.EQUI_SERVICE_CD = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_CD"]) ? Convert.ToString(dbDR["EQUI_SERVICE_CD"]) : "";
                    _listElements.MAX_OPT_SERVICES_ALLOWED = !DBNull.Value.Equals(dbDR["MAX_OPT_SERVICES_ALLOWED"]) ? Convert.ToString(dbDR["MAX_OPT_SERVICES_ALLOWED"]) : "0";
                    _listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? Convert.ToString(dbDR["IS_CONSENT_FORM"]) : "N";
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? Convert.ToString(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) : "N";
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? Convert.ToString(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) : "N";
                    _listElements.IS_ADDITIONAL = !DBNull.Value.Equals(dbDR["IS_ADDITIONAL"]) ? Convert.ToString(dbDR["IS_ADDITIONAL"]) : "N";
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : "0";
                    _listElements.TAX_PCT = !DBNull.Value.Equals(dbDR["TAX_PCT"]) ? Convert.ToString(dbDR["TAX_PCT"]) : "0";
                    _listElements.SGST_TAX_PCT = !DBNull.Value.Equals(dbDR["SGST_PCT"]) ? Convert.ToString(dbDR["SGST_PCT"]) : "0";
                    _listElements.CGST_TAX_PCT = !DBNull.Value.Equals(dbDR["CGST_PCT"]) ? Convert.ToString(dbDR["CGST_PCT"]) : "0";
                    _listElements.SAC_CD = !DBNull.Value.Equals(dbDR["SAC_CD"]) ? Convert.ToString(dbDR["SAC_CD"]) : "0";
                    _listElements.CONC_RULE_PCT = !DBNull.Value.Equals(dbDR["CONC_PCT"]) ? Convert.ToString(dbDR["CONC_PCT"]) : "0";
                    _listElements.CONC_RULE_ID = !DBNull.Value.Equals(dbDR["CNCSN_RULE_ID"]) ? Convert.ToString(dbDR["CNCSN_RULE_ID"]) : "0";
                    _listElements.CONC_RULE_NAME = !DBNull.Value.Equals(dbDR["CNCSN_RULE_NAME"]) ? Convert.ToString(dbDR["CNCSN_RULE_NAME"]) : "";
                    _listElements.CONC_RULE_AUTH_NAME = !DBNull.Value.Equals(dbDR["AUTH_NAME"]) ? Convert.ToString(dbDR["AUTH_NAME"]) : "";
                    _listElements.CONC_RULE_AUTH_ID = !DBNull.Value.Equals(dbDR["AUTH_ID"]) ? Convert.ToString(dbDR["AUTH_ID"]) : "0";
                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? Convert.ToString(dbDR["DOCTOR_PCT"]) : "0";
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? Convert.ToString(dbDR["ORG_PCT"]) : "0";
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetRepeatBillcollcetion").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }



        public CollectionBase GetViewServices(string bill_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SRV_WIES_CNS_AMTS");
                dBase.AddInParameter(dbCmd, "@IP_BILL_ID", DbType.Int32, Convert.ToInt32(bill_id));
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetViewcollcetion);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetViewServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetViewcollcetion(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR["CONCESSION_TYPE_ID"]) ? Convert.ToString(dbDR["CONCESSION_TYPE_ID"]) : "0";
                    _listElements.CONCESSION_MODE_ID = !DBNull.Value.Equals(dbDR["CONCESSION_MODE_ID"]) ? Convert.ToString(dbDR["CONCESSION_MODE_ID"]) : "0";
                    _listElements.CONCESSION = !DBNull.Value.Equals(dbDR["CONCESSION"]) ? Convert.ToString(dbDR["CONCESSION"]) : "0";
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? Convert.ToString(dbDR["IS_CONSENT_FORM"]) : "N";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? Convert.ToString(dbDR["IS_FOREIGN_SERVICE"]) : "N";
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["CLASS_SERVICE_ID"]) ? Convert.ToInt32(dbDR["CLASS_SERVICE_ID"]) : 0;
                    _listElements.PKG_SRV_IDS = !DBNull.Value.Equals(dbDR["SERVICE_CLASS_ID"]) ? Convert.ToString(dbDR["SERVICE_CLASS_ID"]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_PRE_REQUISIT"]) ? Convert.ToString(dbDR["IS_PRE_REQUISIT"]) : "N";
                    _listElements.CNCL_SMRY_ID = !DBNull.Value.Equals(dbDR["CNCL_HIS_ID"]) ? Convert.ToString(dbDR["CNCL_HIS_ID"]) : "0";
                    _listElements.MEDICATION_ID = !DBNull.Value.Equals(dbDR["MEDICATION_ID"]) ? Convert.ToString(dbDR["MEDICATION_ID"]) : "0";
                    _listElements.IS_TAKEN_TODAY = !DBNull.Value.Equals(dbDR["IS_TAKEN_TODAY"]) ? Convert.ToString(dbDR["IS_TAKEN_TODAY"]) : "N";
                    _listElements.LMP_DT = !DBNull.Value.Equals(dbDR["LMP_DT"]) ? Convert.ToString(dbDR["LMP_DT"]) : "";
                    _listElements.DOSAGE = !DBNull.Value.Equals(dbDR["DOSAGE"]) ? Convert.ToString(dbDR["DOSAGE"]) : "";
                    _listElements.OUTHER_MEDICATION = !DBNull.Value.Equals(dbDR["OTHER_MEDICATION"]) ? Convert.ToString(dbDR["OTHER_MEDICATION"]) : "";
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR["SPECIMEN_NAME"]) ? Convert.ToString(dbDR["SPECIMEN_NAME"]) : "";
                    _listElements.TRF = !DBNull.Value.Equals(dbDR["TRF"]) ? Convert.ToString(dbDR["TRF"]) : "";
                    _listElements.SITE = !DBNull.Value.Equals(dbDR["SITE"]) ? Convert.ToString(dbDR["SITE"]) : "";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "";
                    _listElements.TEXT = !DBNull.Value.Equals(dbDR["SERVICE_NAME"]) ? Convert.ToString(dbDR["SERVICE_NAME"]) : string.Empty;
                    _listElements.VALUE = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToString(dbDR["SERVICE_ID"]) : string.Empty;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR["EDIT_SERVICE_CD"]) ? Convert.ToString(dbDR["EDIT_SERVICE_CD"]) : string.Empty;
                    _listElements.QUANTITY = !DBNull.Value.Equals(dbDR["QUANTITY"]) ? Convert.ToInt32(dbDR["QUANTITY"]) : 0;
                    _listElements.RATE = !DBNull.Value.Equals(dbDR["RATE"]) ? Convert.ToString(dbDR["RATE"]) : string.Empty;
                    _listElements.AMOUNT = !DBNull.Value.Equals(dbDR["AMOUNT"]) ? Convert.ToString(dbDR["AMOUNT"]) : string.Empty;
                    _listElements.IS_EMERGENCY = !DBNull.Value.Equals(dbDR["IS_EMERGENCY"]) ? Convert.ToString(dbDR["IS_EMERGENCY"]) : "N";
                    _listElements.PAT_GROSS_AMT = !DBNull.Value.Equals(dbDR["PAT_GROSS_AMT"]) ? Convert.ToString(dbDR["PAT_GROSS_AMT"]) : "0";
                    _listElements.CONCESSION_AMOUNT = !DBNull.Value.Equals(dbDR["CONCESSION_AMOUNT"]) ? Convert.ToString(dbDR["CONCESSION_AMOUNT"]) : "0";
                    _listElements.EMP_NET_AMT = !DBNull.Value.Equals(dbDR["EMP_NET_AMT"]) ? Convert.ToString(dbDR["EMP_NET_AMT"]) : "0";
                    _listElements.COMPANY_AMOUNT = !DBNull.Value.Equals(dbDR["COMPANY_AMOUNT"]) ? Convert.ToString(dbDR["COMPANY_AMOUNT"]) : "0";
                    _listElements.COMPANY_CNCSN_AMT = !DBNull.Value.Equals(dbDR["COMPANY_CNCSN_AMT"]) ? Convert.ToString(dbDR["COMPANY_CNCSN_AMT"]) : "0";
                    _listElements.COMPANY_CNCSN_PCT = !DBNull.Value.Equals(dbDR["COMPANY_CNCSN_PCT"]) ? Convert.ToString(dbDR["COMPANY_CNCSN_PCT"]) : "0";
                    _listElements.COMPANY_NET_AMT = !DBNull.Value.Equals(dbDR["COMPANY_NET_AMT"]) ? Convert.ToString(dbDR["COMPANY_NET_AMT"]) : "0";
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : "";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.COLOR_CD = !DBNull.Value.Equals(dbDR["TARIFF_COLOR"]) ? Convert.ToString(dbDR["TARIFF_COLOR"]) : "";
                    _listElements.BILL_AMOUNT = !DBNull.Value.Equals(dbDR["BILL_AMOUNT"]) ? Convert.ToString(dbDR["BILL_AMOUNT"]) : "0";
                    _listElements.NET_AMOUNT = !DBNull.Value.Equals(dbDR["NET_AMOUNT"]) ? Convert.ToString(dbDR["NET_AMOUNT"]) : "0";
                    _listElements.PAID_AMOUNT = !DBNull.Value.Equals(dbDR["PAID_AMOUNT"]) ? Convert.ToString(dbDR["PAID_AMOUNT"]) : "0";
                    _listElements.CONCESSION_AUTH_NAME = !DBNull.Value.Equals(dbDR["CONCESSION_AUTH_NAME"]) ? Convert.ToString(dbDR["CONCESSION_AUTH_NAME"]) : "0";
                    _listElements.DUE_AUTH_NAME = !DBNull.Value.Equals(dbDR["DUE_AUTH_NAME"]) ? Convert.ToString(dbDR["DUE_AUTH_NAME"]) : "0";
                    _listElements.DUE_AMOUNT = !DBNull.Value.Equals(dbDR["DUE_AMOUNT"]) ? Convert.ToString(dbDR["DUE_AMOUNT"]) : "0";
                    _listElements.CMP_NAME = !DBNull.Value.Equals(dbDR["CMP_NAME"]) ? Convert.ToString(dbDR["CMP_NAME"]) : "";
                    _listElements.CMP_CNCSN_AMT = !DBNull.Value.Equals(dbDR["CMP_CNCSN_AMT"]) ? Convert.ToString(dbDR["CMP_CNCSN_AMT"]) : "0";
                    _listElements.CMP_CNCSN_PCT = !DBNull.Value.Equals(dbDR["CMP_CNCSN_PCT"]) ? Convert.ToString(dbDR["CMP_CNCSN_PCT"]) : "0";
                    _listElements.CMP_GROSS_AMT = !DBNull.Value.Equals(dbDR["CMP_GROSS_AMT"]) ? Convert.ToString(dbDR["CMP_GROSS_AMT"]) : "0";
                    _listElements.CMP_DUE_AMT = !DBNull.Value.Equals(dbDR["CMP_DUE_AMT"]) ? Convert.ToString(dbDR["CMP_DUE_AMT"]) : "0";
                    _listElements.CMP_NET_AMT = !DBNull.Value.Equals(dbDR["CMP_NET_AMT"]) ? Convert.ToString(dbDR["CMP_NET_AMT"]) : "0";
                    _listElements.CMP_PAID_AMT = !DBNull.Value.Equals(dbDR["CMP_PAID_AMT"]) ? Convert.ToString(dbDR["CMP_PAID_AMT"]) : "0";
                    _listElements.PAT_CNCSN_AMT = !DBNull.Value.Equals(dbDR["PAT_CNCSN_AMT"]) ? Convert.ToString(dbDR["PAT_CNCSN_AMT"]) : "0";
                    _listElements.PAT_CNCSN_PCT = !DBNull.Value.Equals(dbDR["PAT_CNCSN_PCT"]) ? Convert.ToString(dbDR["PAT_CNCSN_PCT"]) : "0";
                    _listElements.PAT_DUE_AMT = !DBNull.Value.Equals(dbDR["PAT_DUE_AMT"]) ? Convert.ToString(dbDR["PAT_DUE_AMT"]) : "0";
                    _listElements.PAT_GROSS_AMT = !DBNull.Value.Equals(dbDR["PAT_GROSS_AMT"]) ? Convert.ToString(dbDR["PAT_GROSS_AMT"]) : "0";
                    _listElements.PAT_NET_AMT = !DBNull.Value.Equals(dbDR["PAT_NET_AMT"]) ? Convert.ToString(dbDR["PAT_NET_AMT"]) : "0";
                    _listElements.PAT_PAID_AMT = !DBNull.Value.Equals(dbDR["PAT_PAID_AMT"]) ? Convert.ToString(dbDR["PAT_PAID_AMT"]) : "0";
                    _listElements.EMP_GROSS_AMT = !DBNull.Value.Equals(dbDR["EMP_GROSS_AMT"]) ? Convert.ToString(dbDR["EMP_GROSS_AMT"]) : "0";
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetViewcollcetion").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
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

                dBase.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, _lookUPSearch.EVENTFLAG);

                GenerateCollectionReader reader = new GenerateCollectionReader(GetPackageConsultationColl);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, reader);
                //_total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
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
                DoctorCollection _drCollection = new DoctorCollection();
                while (reader.Read())
                {
                    DOCTOR _drObject = new DOCTOR();
                    _drObject.DISPLAY_NAME = reader[DALConstants.DISPLAY_NAME_COL].ToString();
                    _drObject.ID = reader[DALConstants.ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.ID_COL]) : 0;
                    _drObject.DOCTOR_CD = reader[DALConstants.DOCTOR_CD_COL].ToString();
                    _drObject.DEPARTMENT_DESC = reader[DALConstants.DEPARTMENT_DESC_COL].ToString();
                    if (reader[DALConstants.DEPARTMENT_ID_COL].ToString() != string.Empty)
                        _drObject.DEPARTMENT_ID = Convert.ToInt32(reader[DALConstants.DEPARTMENT_ID_COL].ToString());
                    _drObject.ADDRESS1 = reader[DALConstants.ADDRESS_COL].ToString();
                    _drObject.MOBILE_PHONE = reader[DALConstants.MOBILE_PHONE_COL].ToString();
                    _drObject.NoOfRecords = !DBNull.Value.Equals(reader[DALConstants.TOT_RECORD_CNT_COL]) ? Convert.ToInt32(reader[DALConstants.TOT_RECORD_CNT_COL].ToString()) : 0;

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

        
        #region added by swetha reddy for getting services in autocompletion


        //public CollectionBase GetAllOPServiceAuto(string prefixText, string contextKey, LookUpSearch obj, ServiceMaster _service, out int count)
        //{
        //    count = 0;
        //    try
        //    {
        //        GenerateCollectionReader list = null;
        //        DataAccessLayer dbLayer = new DataAccessLayer();
        //        Database dBase = dbLayer.DBaseFactory;
        //        DbCommand dbCmd;
        //        dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_ALL_OP_SERVICES);
        //        dBase.AddInParameter(dbCmd, DALConstants.GENDER_ID_PARM, DbType.String, _service.GENDER_ID);
        //        dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, _service.COMPANY_ID);
        //        dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
        //        dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
        //        dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
        //        dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.Int32, _service.REFERAL_LETTER_ID);
        //        dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _service.ADVANCE_SEARCH);
        //        dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, _service.PAGE_NO);
        //        dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, _service.PAGE_SIZE);
        //        dBase.AddInParameter(dbCmd, "@IP_BILL_ID", DbType.Int32, _service.BILL_ID);
        //        dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _service.EVENTFLAG);
        //        //dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
        //        list = new GenerateCollectionReader(GetAllOPServiceAutoInfo);
        //        CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
        //        //count = dBase.GetParameterValue(dbCmd, "@OP_COUNT").ToString() != string.Empty ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT")) : 0;
        //        return cBase;
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllOPServiceAuto").Name;
        //        ErrorLoger.InsertErrorLogger(ex, 534, 1);
        //        return null;
        //    }
        //}

        public DataSet GetAllOPServiceAuto(string prefixText, string contextKey, LookUpSearch obj, ServiceMaster _service, out int count)
        {
            count = 0;
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_ALL_OP_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.GENDER_ID_PARM, DbType.String, _service.GENDER_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, _service.COMPANY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.Int32, _service.REFERAL_LETTER_ID);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _service.ADVANCE_SEARCH);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, _service.PAGE_NO);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, _service.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_BILL_ID", DbType.Int32, _service.BILL_ID);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _service.EVENTFLAG);
                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, _service.TARIFF_ID);
                dBase.AddInParameter(dbCmd, "@IP_SRVNAME_REQ", DbType.String, _service.STATUS);
                dBase.AddInParameter(dbCmd, "@IP_DOC_DEPT_ID", DbType.String, _service.DEPARTMENT_ID);
                dBase.AddInParameter(dbCmd, "@IP_DOC_DEPT_UINT_ID", DbType.String, _service.DOC_DEPT_UINT_ID);

                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet ds = dBase.ExecuteDataSet(dbCmd);
                return ds;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("pat_banner_Valdatation_data").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }



        CollectionBase GetAllOPServiceAutoInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.SERVICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_ID"].ToString()) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    //_listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.PATIENT_CLASS_ID = !DBNull.Value.Equals(dbDR["PATIENT_CLASS_ID"]) ? dbDR["PATIENT_CLASS_ID"].ToString() : "0";
                    _listElements.DEPARTMENTID = !DBNull.Value.Equals(dbDR["DEPARTMENT_ID"]) ? Convert.ToInt32(dbDR["DEPARTMENT_ID"].ToString()) : 0;
                    _listElements.DEPARTMENT_NAME = !DBNull.Value.Equals(dbDR["DEPARTMENT_NAME"]) ? dbDR["DEPARTMENT_NAME"].ToString() : string.Empty;
                    _listElements.IS_CASH = !DBNull.Value.Equals(dbDR["IS_CASH"]) ? dbDR["IS_CASH"].ToString() : string.Empty;
                    _listElements.NON_SHOW = !DBNull.Value.Equals(dbDR["NON_SHOW"]) ? dbDR["NON_SHOW"].ToString() : string.Empty;
                    _listElements.CHARGE_SETUP_DONE = !DBNull.Value.Equals(dbDR["CHARGE_SETUP_DONE"]) ? dbDR["CHARGE_SETUP_DONE"].ToString() : string.Empty;
                    _listElements.STOP_CONS = !DBNull.Value.Equals(dbDR["STOP_CONS"]) ? dbDR["STOP_CONS"].ToString() : string.Empty;
                    _listElements.REFRL_QTY = !DBNull.Value.Equals(dbDR["REFRL_QTY"]) ? dbDR["REFRL_QTY"].ToString() : string.Empty;
                    _listElements.DOC_HOL_STATUS = !DBNull.Value.Equals(dbDR["DOC_HOL_STATUS"]) ? dbDR["DOC_HOL_STATUS"].ToString() : string.Empty;
                    //  _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : string.Empty;
                    _listElements.APMNT_DOC_LEAVE_FROM_DT = !DBNull.Value.Equals(dbDR["FROM_DT"]) ? dbDR["FROM_DT"].ToString() : string.Empty;
                    _listElements.APMNT_DOC_LEAVE_TO_DT = !DBNull.Value.Equals(dbDR["TO_DT"]) ? dbDR["TO_DT"].ToString() : string.Empty;
                    _listElements.ESTIMATED_TIME = !DBNull.Value.Equals(dbDR["ESTIMATED_TIME"]) ? dbDR["ESTIMATED_TIME"].ToString() : string.Empty;
                    _listElements.BILLING_HEAD_ID = !DBNull.Value.Equals(dbDR["BILLING_HEAD_ID"]) ? dbDR["BILLING_HEAD_ID"].ToString() : string.Empty;
                    _listElements.NoOfRecords = !DBNull.Value.Equals(dbDR["TOT_RECORD_CNT"]) ? Convert.ToInt32(dbDR["TOT_RECORD_CNT"].ToString()) : 0;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllOPServiceAutoInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        public CollectionBase GetAllIPServiceAutoCompletion(LookUpSearch obj, ServiceMaster _service, out int count)
        {
            count = 0;
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_IP_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.GENDER_ID_PARM, DbType.String, _service.GENDER_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, _service.COMPANY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, obj.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, obj.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _service.ADVANCE_SEARCH);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, _service.PAGE_NO);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, _service.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_WARD_GROUP_ID", DbType.Int32, _service.WARD_GROUP_ID);
                dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, _service.FLAG);
                if (!string.IsNullOrEmpty(_service.ADMN_NO))
                    dBase.AddInParameter(dbCmd, "@IP_ADMN_NO", DbType.String, _service.ADMN_NO);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, _service.TARIFF_ID);
                //dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, _service.UMR_NO);
                dBase.AddInParameter(dbCmd, "@IP_DEPARTMENT_ID", DbType.Int32, _service.DEPARTMENT_ID);
                dBase.AddInParameter(dbCmd, "@IP_DOCTOR_ROLE", DbType.Int32, _service.DOCTORROLE_ID);
                dBase.AddInParameter(dbCmd, "@IP_SRVNAME_REQ", DbType.String, _service.STATUS);
                list = new GenerateCollectionReader(GetAllIPServiceAuto_Info);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                count = dBase.GetParameterValue(dbCmd, "@OP_COUNT").ToString() != string.Empty ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT")) : 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllIPServiceAutoCompletion").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }


        CollectionBase GetAllIPServiceAuto_Info(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.SERVICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_ID"].ToString()) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    //_listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.PATIENT_CLASS_ID = !DBNull.Value.Equals(dbDR["PATIENT_CLASS_ID"]) ? dbDR["PATIENT_CLASS_ID"].ToString() : "0";
                    _listElements.DEPARTMENTID = !DBNull.Value.Equals(dbDR["DEPARTMENT_ID"]) ? Convert.ToInt32(dbDR["DEPARTMENT_ID"].ToString()) : 0;
                    _listElements.DEPARTMENT_NAME = !DBNull.Value.Equals(dbDR["DEPARTMENT_NAME"]) ? dbDR["DEPARTMENT_NAME"].ToString() : string.Empty;
                    //_listElements.IS_CASH = !DBNull.Value.Equals(dbDR["IS_CASH"]) ? dbDR["IS_CASH"].ToString() : string.Empty;
                    //_listElements.NON_SHOW = !DBNull.Value.Equals(dbDR["NON_SHOW"]) ? dbDR["NON_SHOW"].ToString() : string.Empty;
                    //_listElements.CHARGE_SETUP_DONE = !DBNull.Value.Equals(dbDR["CHARGE_SETUP_DONE"]) ? dbDR["CHARGE_SETUP_DONE"].ToString() : string.Empty;
                    //_listElements.IS_REMARKS_MANDATORY = !DBNull.Value.Equals(dbDR["IS_REMARKS_MANDATORY"]) ? dbDR["IS_REMARKS_MANDATORY"].ToString() : string.Empty;
                    _listElements.IS_ELGIBLE = !DBNull.Value.Equals(dbDR["IS_ELGIBLE"]) ? dbDR["IS_ELGIBLE"].ToString() : string.Empty;
                    _listElements.ADT_IMR_SRV_ID = !DBNull.Value.Equals(dbDR["ADT_IMR_SRV_ID"]) ? dbDR["ADT_IMR_SRV_ID"].ToString() : string.Empty;

                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["SRV_GENDER_ID"]) ? dbDR["SRV_GENDER_ID"].ToString() : string.Empty;
                    _listElements.FROM_AGE = !DBNull.Value.Equals(dbDR["FROM_AGE"]) ? dbDR["FROM_AGE"].ToString() : string.Empty;
                    _listElements.TO_AGE = !DBNull.Value.Equals(dbDR["TO_AGE"]) ? dbDR["TO_AGE"].ToString() : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : string.Empty;
                    _listElements.ROW = !DBNull.Value.Equals(dbDR["ROW"]) ? dbDR["ROW"].ToString() : "0";
                    _listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;
                    //_listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? dbDR["IS_CONSENT_FORM"].ToString() : string.Empty;
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? dbDR["IS_SRV_GUIDELINES_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? dbDR["IS_SRV_CHECKLIST_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? dbDR["RATE_EDIT"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? dbDR["CONCERN_FORM_REQ"].ToString() : string.Empty;


                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIS_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIS_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.HISTORY_TYPE_ID1 = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToInt32(dbDR["HISTORY_TYPE_ID"]) : 0;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? Convert.ToString(dbDR["IS_FOREIGN_SERVICE"]) : string.Empty;
                    _listElements.POSTED_TIME = !DBNull.Value.Equals(dbDR["POSTED_TIME"]) ? Convert.ToString(dbDR["POSTED_TIME"]) : string.Empty;
                    _listElements.POSTED_DT = !DBNull.Value.Equals(dbDR["POSTED_DT"]) ? Convert.ToString(dbDR["POSTED_DT"]) : string.Empty;
                    _listElements.IS_DIRECT_BILLING = !DBNull.Value.Equals(dbDR["IS_DIRECT_BILLING"]) ? Convert.ToString(dbDR["IS_DIRECT_BILLING"]) : string.Empty;

                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QTY_EDIT"]) ? Convert.ToString(dbDR["QTY_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.RECORD_STATUS = !DBNull.Value.Equals(dbDR["RECORD_STATUS"]) ? Convert.ToString(dbDR["RECORD_STATUS"]) : string.Empty;
                    _listElements.IS_NUR_STATION = !DBNull.Value.Equals(dbDR["IS_NUR_STATION"]) ? Convert.ToString(dbDR["IS_NUR_STATION"]) : string.Empty;
                    _listElements.ACCEPTED_BY = !DBNull.Value.Equals(dbDR["ACCEPTED_BY"]) ? Convert.ToString(dbDR["ACCEPTED_BY"]) : string.Empty;
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : string.Empty;
                    _listElements.EFFECT_TO_DT = !DBNull.Value.Equals(dbDR["EFFECT_TO_DT"]) ? Convert.ToString(dbDR["EFFECT_TO_DT"]) : string.Empty;
                    _listElements.EFFECT_FROM_DT = !DBNull.Value.Equals(dbDR["EFFECT_FROM_DT"]) ? Convert.ToString(dbDR["EFFECT_FROM_DT"]) : string.Empty;
                    _listElements.GEN_SERVICE_NAME = !DBNull.Value.Equals(dbDR["GEN_SERVICE_NAME"]) ? Convert.ToString(dbDR["GEN_SERVICE_NAME"]) : string.Empty;
                    _listElements.GEN_SERVICE_CODE = !DBNull.Value.Equals(dbDR["GEN_SERVICE_CODE"]) ? Convert.ToString(dbDR["GEN_SERVICE_CODE"]) : string.Empty;
                    //bool Exists = dbDR.GetSchemaTable().Columns.Contains("SERVICE_QUESTION_TEMPLATE_ID");
                    //if (Exists==true)
                    //{
                    //    _listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;

                    //}
                    //_listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;
                    _listElements.IS_DOCTOR_REQUIRED = !DBNull.Value.Equals(dbDR["IS_DOCTOR_REQUIRED"]) ? Convert.ToString(dbDR["IS_DOCTOR_REQUIRED"]) : string.Empty;
                    _listElements.RATE = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToString(dbDR[DALConstants.PRICE_COL]) : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllIPServiceAuto_Info").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        public CollectionBase GetAllImrServiceAutoCompletion(LookUpSearch obj, ServiceMaster _service, out int count)
        {
            count = 0;
            try
            {
                GenerateCollectionReader list = null;
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_IMR_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.GENDER_ID_PARM, DbType.String, _service.GENDER_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, _service.COMPANY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, obj.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, obj.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _service.ADVANCE_SEARCH);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, _service.PAGE_NO);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, _service.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_WARD_GROUP_ID", DbType.Int32, _service.WARD_GROUP_ID);
                dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, _service.FLAG);
                if (!string.IsNullOrEmpty(_service.ADMN_NO))
                    dBase.AddInParameter(dbCmd, "@IP_ADMN_NO", DbType.String, _service.ADMN_NO);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, _service.TARIFF_ID);
                //dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, _service.UMR_NO);
                dBase.AddInParameter(dbCmd, "@IP_DEPARTMENT_ID", DbType.Int32, _service.DEPARTMENT_ID);
                list = new GenerateCollectionReader(GetAllImrServiceAuto_Info);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                count = dBase.GetParameterValue(dbCmd, "@OP_COUNT").ToString() != string.Empty ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT")) : 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllIPServiceAutoCompletion").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase GetAllImrServiceAuto_Info(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.SERVICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_ID"].ToString()) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    //_listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.PATIENT_CLASS_ID = !DBNull.Value.Equals(dbDR["PATIENT_CLASS_ID"]) ? dbDR["PATIENT_CLASS_ID"].ToString() : "0";
                    _listElements.DEPARTMENTID = !DBNull.Value.Equals(dbDR["DEPARTMENT_ID"]) ? Convert.ToInt32(dbDR["DEPARTMENT_ID"].ToString()) : 0;
                    _listElements.DEPARTMENT_NAME = !DBNull.Value.Equals(dbDR["DEPARTMENT_NAME"]) ? dbDR["DEPARTMENT_NAME"].ToString() : string.Empty;
                    //_listElements.IS_CASH = !DBNull.Value.Equals(dbDR["IS_CASH"]) ? dbDR["IS_CASH"].ToString() : string.Empty;
                    //_listElements.NON_SHOW = !DBNull.Value.Equals(dbDR["NON_SHOW"]) ? dbDR["NON_SHOW"].ToString() : string.Empty;
                    //_listElements.CHARGE_SETUP_DONE = !DBNull.Value.Equals(dbDR["CHARGE_SETUP_DONE"]) ? dbDR["CHARGE_SETUP_DONE"].ToString() : string.Empty;
                    //_listElements.IS_REMARKS_MANDATORY = !DBNull.Value.Equals(dbDR["IS_REMARKS_MANDATORY"]) ? dbDR["IS_REMARKS_MANDATORY"].ToString() : string.Empty;
                    _listElements.IS_ELGIBLE = !DBNull.Value.Equals(dbDR["IS_ELGIBLE"]) ? dbDR["IS_ELGIBLE"].ToString() : string.Empty;
                    _listElements.ADT_IMR_SRV_ID = !DBNull.Value.Equals(dbDR["ADT_IMR_SRV_ID"]) ? dbDR["ADT_IMR_SRV_ID"].ToString() : string.Empty;

                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["SRV_GENDER_ID"]) ? dbDR["SRV_GENDER_ID"].ToString() : string.Empty;
                    _listElements.FROM_AGE = !DBNull.Value.Equals(dbDR["FROM_AGE"]) ? dbDR["FROM_AGE"].ToString() : string.Empty;
                    _listElements.TO_AGE = !DBNull.Value.Equals(dbDR["TO_AGE"]) ? dbDR["TO_AGE"].ToString() : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : string.Empty;
                    _listElements.ROW = !DBNull.Value.Equals(dbDR["ROW"]) ? dbDR["ROW"].ToString() : "0";
                    _listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;
                    //_listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? dbDR["IS_CONSENT_FORM"].ToString() : string.Empty;
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? dbDR["IS_SRV_GUIDELINES_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? dbDR["IS_SRV_CHECKLIST_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? dbDR["RATE_EDIT"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? dbDR["CONCERN_FORM_REQ"].ToString() : string.Empty;


                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIS_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIS_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.HISTORY_TYPE_ID1 = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToInt32(dbDR["HISTORY_TYPE_ID"]) : 0;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? Convert.ToString(dbDR["IS_FOREIGN_SERVICE"]) : string.Empty;
                    _listElements.POSTED_TIME = !DBNull.Value.Equals(dbDR["POSTED_TIME"]) ? Convert.ToString(dbDR["POSTED_TIME"]) : string.Empty;
                    _listElements.POSTED_DT = !DBNull.Value.Equals(dbDR["POSTED_DT"]) ? Convert.ToString(dbDR["POSTED_DT"]) : string.Empty;
                    _listElements.IS_DIRECT_BILLING = !DBNull.Value.Equals(dbDR["IS_DIRECT_BILLING"]) ? Convert.ToString(dbDR["IS_DIRECT_BILLING"]) : string.Empty;

                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QTY_EDIT"]) ? Convert.ToString(dbDR["QTY_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.QUANTITY = !DBNull.Value.Equals(dbDR["QUANTITY"]) ? Convert.ToInt32(dbDR["QUANTITY"]) : 0;

                    //bool Exists = dbDR.GetSchemaTable().Columns.Contains("SERVICE_QUESTION_TEMPLATE_ID");
                    //if (Exists==true)
                    //{
                    //    _listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;

                    //}
                    //_listElements.SERVICE_QUESTION_TEMPLATE_ID = !DBNull.Value.Equals(dbDR["SERVICE_QUESTION_TEMPLATE_ID"]) ? dbDR["SERVICE_QUESTION_TEMPLATE_ID"].ToString() : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllIPServiceAuto_Info").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }


        public CollectionBase GetAllIPServiceAutoInfo(LookUpSearch obj, ServiceMaster _service)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_AUTO_IP_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, _service.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, _service.PATIENT_CLASS_ID);
                dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, _service.WARD_GROUP_ID);
                dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, _service.CONSULTATION_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, _service.COMPANY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, _service.ADMN_NO);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARAM, DbType.String, _service.PATIENT_ID);
                dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, _service.FLAG);
                dBase.AddInParameter(dbCmd, "@IP_IS_EME_PRICE", DbType.String, _service.EMERGNCY_FLAG);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, obj.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, obj.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.String, _service.GENDER_ID);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.String, _service.SERVICE_ID);
                dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.String, _service.REFERAL_LETTER_ID);
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, _service.UMR_NO);
                GenerateCollectionReader list = new GenerateCollectionReader(NewGetAllIPServiceAutoInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllIPServiceAutoInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase NewGetAllIPServiceAutoInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.LAST_INVST_SRV = !DBNull.Value.Equals(dbDR[DALConstants.LAST_INVST_SRV_COL]) ? Convert.ToString(dbDR[DALConstants.LAST_INVST_SRV_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;
                    _listElements.COMPANY_SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) : 0;
                    _listElements.COMPANY_SERVICE_NAME = !DBNull.Value.Equals(dbDR["COMPANY_SERVICE_NAME"]) ? Convert.ToString(dbDR["COMPANY_SERVICE_NAME"]) : string.Empty;
                    _listElements.RATE = !DBNull.Value.Equals(dbDR[DALConstants.RATE_COL]) ? Convert.ToString(dbDR[DALConstants.RATE_COL]) : string.Empty;
                    // _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? dbDR[DALConstants.TARIFF_ID_COL].ToString() : "1";
                    _listElements.TARIFF_CD = !DBNull.Value.Equals(dbDR["TARIFF_CD"]) ? Convert.ToString(dbDR["TARIFF_CD"]) : string.Empty;
                    _listElements.TARIFF_NAME = !DBNull.Value.Equals(dbDR["TARIFF_NAME"]) ? Convert.ToString(dbDR["TARIFF_NAME"]) : string.Empty;
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : string.Empty;
                    _listElements.PRE_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.PRE_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRE_DAYS_COL]) : 0;
                    _listElements.POST_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.POST_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.POST_DAYS_COL]) : 0;
                    _listElements.WARD_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.WARD_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.WARD_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_ID_COL]) : 0;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_NAME = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_NAME_COL]) : string.Empty;
                    _listElements.SPECIMEN_ID = !DBNull.Value.Equals(dbDR["SPECIMEN_ID"]) ? dbDR["SPECIMEN_ID"].ToString() : string.Empty;
                    _listElements.VACCUTAINER_ID = !DBNull.Value.Equals(dbDR["VACCUTAINER_ID"]) ? dbDR["VACCUTAINER_ID"].ToString() : string.Empty;
                    _listElements.ACCEPTED_BY = !DBNull.Value.Equals(dbDR[DALConstants.ACCEPTED_BY_COL]) ? Convert.ToString(dbDR[DALConstants.ACCEPTED_BY_COL]) : string.Empty;
                    _listElements.POSTED_TIME = !DBNull.Value.Equals(dbDR[DALConstants.POSTED_TIME_COL]) ? Convert.ToString(dbDR[DALConstants.POSTED_TIME_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : "0";
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? dbDR["GENDER_ID"].ToString() : string.Empty;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR["ORG_PRICE"]) ? Convert.ToInt32(dbDR["ORG_PRICE"]) : 0;
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR["DOCTOR_PRICE"]) ? Convert.ToInt32(dbDR["DOCTOR_PRICE"]) : 0;
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? dbDR["EMERGENCY_PRICE"].ToString() : string.Empty;
                    _listElements.PATIENT_CLASS_ID = !DBNull.Value.Equals(dbDR["PATIENT_CLASS_ID"]) ? dbDR["PATIENT_CLASS_ID"].ToString() : string.Empty;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? dbDR["IS_FOREIGN_SERVICE"].ToString() : string.Empty;
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? dbDR["MIN_PRICE"].ToString() : string.Empty;
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? dbDR["MAX_PRICE"].ToString() : string.Empty;
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? dbDR["NO_NEED_SRV"].ToString() : string.Empty;
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? dbDR["PRIV_SRV_POSTED_DT"].ToString() : string.Empty;
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? dbDR["EMP_PERCENT"].ToString() : string.Empty;
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? dbDR["ORG_PERCENT"].ToString() : string.Empty;
                    _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? dbDR["EMP_PRICE"].ToString() : string.Empty;
                    _listElements.ORG_PERCENT_PRICE = !DBNull.Value.Equals(dbDR["ORG_PERCENT_PRICE"]) ? dbDR["ORG_PERCENT_PRICE"].ToString() : string.Empty;
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_DAYS"]) ? dbDR["FROM_DAYS"].ToString() : string.Empty;
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_DAYS"]) ? dbDR["TO_DAYS"].ToString() : string.Empty;
                    _listElements.EQUI_SERVICE_CD = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_CD"]) ? dbDR["EQUI_SERVICE_CD"].ToString() : string.Empty;
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? dbDR["EQUI_SERVICE_NAME"].ToString() : string.Empty;
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? dbDR["PRIV_SRV_POSTED_DT"].ToString() : string.Empty;
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? dbDR["IS_POST"].ToString() : string.Empty;
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIST_REQ"]) ? dbDR["IS_CLINICAL_HIST_REQ"].ToString() : string.Empty;
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? dbDR["HISTORY_TYPE_ID"].ToString() : string.Empty;
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? dbDR["CONCERN_FORM_REQ"].ToString() : string.Empty;
                    _listElements.NO_NEED_DAYS = !DBNull.Value.Equals(dbDR["NO_NEED_DAYS"]) ? dbDR["NO_NEED_DAYS"].ToString() : string.Empty;
                    _listElements.EFFECT_FROM_DT = !DBNull.Value.Equals(dbDR["EFFECT_FROM_DT"]) ? dbDR["EFFECT_FROM_DT"].ToString() : string.Empty;
                    _listElements.EFFECT_TO_DT = !DBNull.Value.Equals(dbDR["EFFECT_TO_DT"]) ? dbDR["EFFECT_TO_DT"].ToString() : string.Empty;
                    _listElements.RECORD_STATUS = !DBNull.Value.Equals(dbDR["RECORD_STATUS"]) ? dbDR["RECORD_STATUS"].ToString() : string.Empty;
                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? dbDR["QYT_EDIT"].ToString() : string.Empty;
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? dbDR["RATE_EDIT"].ToString() : string.Empty;
                    _listElements.IS_APPOINTMENT = !DBNull.Value.Equals(dbDR["IS_APPOINTMENT"]) ? dbDR["IS_APPOINTMENT"].ToString() : string.Empty;
                    _listElements.CMP_DISC_PCNT = !DBNull.Value.Equals(dbDR["CMP_DISC_PCNT"]) ? dbDR["CMP_DISC_PCNT"].ToString() : string.Empty;
                    _listElements.COMPANY_ID = !DBNull.Value.Equals(dbDR["COMPANY_ID"]) ? dbDR["COMPANY_ID"].ToString() : string.Empty;
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? dbDR["IS_POST"].ToString() : string.Empty;
                    _listElements.COLOR_CD = !DBNull.Value.Equals(dbDR["COLOR_CD"]) ? dbDR["COLOR_CD"].ToString() : string.Empty;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? dbDR["IS_FOREIGN_SERVICE"].ToString() : string.Empty;
                    _listElements.IS_CASH = !DBNull.Value.Equals(dbDR["IS_CASH"]) ? dbDR["IS_CASH"].ToString() : string.Empty;
                    _listElements.IS_SHOW = !DBNull.Value.Equals(dbDR["IS_SHOW"]) ? dbDR["IS_SHOW"].ToString() : string.Empty;
                    _listElements.NON_SHOW = !DBNull.Value.Equals(dbDR["NON_SHOW"]) ? dbDR["NON_SHOW"].ToString() : string.Empty;
                    _listElements.Cmp_rul_qty = !DBNull.Value.Equals(dbDR["CMO_RUL_QTY"]) ? dbDR["CMO_RUL_QTY"].ToString() : "0";
                    _listElements.Utilz_cmp_rule_qty = !DBNull.Value.Equals(dbDR["UTILZ_CMP_RULE_QTY"]) ? dbDR["UTILZ_CMP_RULE_QTY"].ToString() : "0";
                    _listElements.UTILIZED_REFRL_QTY = !DBNull.Value.Equals(dbDR["UTILIZED_REFRL_QTY"]) ? dbDR["UTILIZED_REFRL_QTY"].ToString() : "0";
                    _listElements.REFRL_QTY = !DBNull.Value.Equals(dbDR["REFRL_QTY"]) ? dbDR["REFRL_QTY"].ToString() : "0";
                    _listElements.MIN_CEILING = !DBNull.Value.Equals(dbDR["MIN_CEILING"]) ? dbDR["MIN_CEILING"].ToString() : string.Empty;
                    _listElements.MAX_CEILING = !DBNull.Value.Equals(dbDR["MAX_CEILING"]) ? dbDR["MAX_CEILING"].ToString() : string.Empty;
                    _listElements.TEST_OCCURANCY = !DBNull.Value.Equals(dbDR["TEST_OCCURANCY"]) ? dbDR["TEST_OCCURANCY"].ToString() : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : string.Empty;
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? dbDR["IS_SRV_GUIDELINES_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? dbDR["IS_SRV_CHECKLIST_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.OP_TO_IP_SERVICE_ID = !DBNull.Value.Equals(dbDR["OP_TO_IP_SERVICE_ID"]) ? dbDR["OP_TO_IP_SERVICE_ID"].ToString() : "0";
                    _listElements.BILLING_HEAD_ID = !DBNull.Value.Equals(dbDR["BILLING_HEAD_ID"]) ? dbDR["BILLING_HEAD_ID"].ToString() : "0";
                    _listElements.IS_DIRECT_BILLING = !DBNull.Value.Equals(dbDR["IS_DIRECT_BILLING"]) ? dbDR["IS_DIRECT_BILLING"].ToString() : string.Empty;
                    _listElements.IS_DOCTOR_REQUIRED = !DBNull.Value.Equals(dbDR["IS_DOCTOR_REQUIRED"]) ? dbDR["IS_DOCTOR_REQUIRED"].ToString() : string.Empty;
                    _listElements.COMPANY_BILL_HEAD_ID = !DBNull.Value.Equals(dbDR["COMPANY_BILL_HEAD_ID"]) ? dbDR["COMPANY_BILL_HEAD_ID"].ToString() : string.Empty;
                    _listElements.APPLICABLE_FOR_ID = !DBNull.Value.Equals(dbDR["APPLICABLE_FOR_ID"]) ? dbDR["APPLICABLE_FOR_ID"].ToString() : string.Empty;
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("NewGetAllIPServiceAutoInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }


        public CollectionBase GetAllIMRServiceAutoInfo(LookUpSearch obj, ServiceMaster _service)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_AUTO_IMR_SERVICES");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, _service.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, _service.PATIENT_CLASS_ID);
                dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, _service.WARD_GROUP_ID);
                dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, _service.CONSULTATION_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, _service.COMPANY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.ADMN_NO_PARM, DbType.String, _service.ADMN_NO);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARAM, DbType.String, _service.PATIENT_ID);
                dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, _service.FLAG);
                dBase.AddInParameter(dbCmd, "@IP_IS_EME_PRICE", DbType.String, _service.EMERGNCY_FLAG);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, obj.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, obj.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.String, _service.GENDER_ID);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.String, _service.SERVICE_ID);
                dBase.AddInParameter(dbCmd, "@IP_CMP_REFRL_LTR_ID", DbType.String, _service.REFERAL_LETTER_ID);
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, _service.UMR_NO);
                GenerateCollectionReader list = new GenerateCollectionReader(GetAllIMRServiceAutoInfoInfo);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllIPServiceAutoInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 534, 1);
                return null;
            }
        }

        CollectionBase GetAllIMRServiceAutoInfoInfo(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.LAST_INVST_SRV = !DBNull.Value.Equals(dbDR[DALConstants.LAST_INVST_SRV_COL]) ? Convert.ToString(dbDR[DALConstants.LAST_INVST_SRV_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;
                    _listElements.COMPANY_SERVICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.COMPANY_SERVICE_ID_COL]) : 0;
                    _listElements.COMPANY_SERVICE_NAME = !DBNull.Value.Equals(dbDR["COMPANY_SERVICE_NAME"]) ? Convert.ToString(dbDR["COMPANY_SERVICE_NAME"]) : string.Empty;
                    _listElements.RATE = !DBNull.Value.Equals(dbDR[DALConstants.RATE_COL]) ? Convert.ToString(dbDR[DALConstants.RATE_COL]) : string.Empty;
                    // _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR[DALConstants.TARIFF_ID_COL]) ? dbDR[DALConstants.TARIFF_ID_COL].ToString() : "1";
                    _listElements.TARIFF_CD = !DBNull.Value.Equals(dbDR["TARIFF_CD"]) ? Convert.ToString(dbDR["TARIFF_CD"]) : string.Empty;
                    _listElements.TARIFF_NAME = !DBNull.Value.Equals(dbDR["TARIFF_NAME"]) ? Convert.ToString(dbDR["TARIFF_NAME"]) : string.Empty;
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : string.Empty;
                    _listElements.PRE_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.PRE_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRE_DAYS_COL]) : 0;
                    _listElements.POST_DAYS = !DBNull.Value.Equals(dbDR[DALConstants.POST_DAYS_COL]) ? Convert.ToInt32(dbDR[DALConstants.POST_DAYS_COL]) : 0;
                    _listElements.WARD_GROUP_ID = !DBNull.Value.Equals(dbDR[DALConstants.WARD_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.WARD_GROUP_ID_COL]) : 0;
                    _listElements.SERVICE_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.DOCTOR_ID = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_ID_COL]) : 0;
                    _listElements.SPECIMEN_NAME = !DBNull.Value.Equals(dbDR[DALConstants.SPECIMEN_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SPECIMEN_NAME_COL]) : string.Empty;
                    _listElements.VACCUTAINER_NAME = !DBNull.Value.Equals(dbDR[DALConstants.VACCUTAINER_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.VACCUTAINER_NAME_COL]) : string.Empty;
                    _listElements.ACCEPTED_BY = !DBNull.Value.Equals(dbDR[DALConstants.ACCEPTED_BY_COL]) ? Convert.ToString(dbDR[DALConstants.ACCEPTED_BY_COL]) : string.Empty;
                    _listElements.POSTED_TIME = !DBNull.Value.Equals(dbDR[DALConstants.POSTED_TIME_COL]) ? Convert.ToString(dbDR[DALConstants.POSTED_TIME_COL]) : string.Empty;
                    _listElements.Department_id = !DBNull.Value.Equals(dbDR[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DEPARTMENT_ID_COL]) : "0";
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? dbDR["GENDER_ID"].ToString() : string.Empty;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR["ORG_PRICE"]) ? Convert.ToInt32(dbDR["ORG_PRICE"]) : 0;
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR["DOCTOR_PRICE"]) ? Convert.ToInt32(dbDR["DOCTOR_PRICE"]) : 0;
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? dbDR["EMERGENCY_PRICE"].ToString() : string.Empty;
                    _listElements.PATIENT_CLASS_ID = !DBNull.Value.Equals(dbDR["PATIENT_CLASS_ID"]) ? dbDR["PATIENT_CLASS_ID"].ToString() : string.Empty;
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR["IS_FOREIGN_SERVICE"]) ? dbDR["IS_FOREIGN_SERVICE"].ToString() : string.Empty;
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? dbDR["MIN_PRICE"].ToString() : string.Empty;
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? dbDR["MAX_PRICE"].ToString() : string.Empty;
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? dbDR["NO_NEED_SRV"].ToString() : string.Empty;
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? dbDR["PRIV_SRV_POSTED_DT"].ToString() : string.Empty;
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? dbDR["EMP_PERCENT"].ToString() : string.Empty;
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? dbDR["ORG_PERCENT"].ToString() : string.Empty;
                    _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? dbDR["EMP_PRICE"].ToString() : string.Empty;
                    _listElements.ORG_PERCENT_PRICE = !DBNull.Value.Equals(dbDR["ORG_PERCENT_PRICE"]) ? dbDR["ORG_PERCENT_PRICE"].ToString() : string.Empty;
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_DAYS"]) ? dbDR["FROM_DAYS"].ToString() : string.Empty;
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_DAYS"]) ? dbDR["TO_DAYS"].ToString() : string.Empty;
                    _listElements.EQUI_SERVICE_CD = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_CD"]) ? dbDR["EQUI_SERVICE_CD"].ToString() : string.Empty;
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? dbDR["EQUI_SERVICE_NAME"].ToString() : string.Empty;
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? dbDR["PRIV_SRV_POSTED_DT"].ToString() : string.Empty;

                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? dbDR["QYT_EDIT"].ToString() : string.Empty;
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? dbDR["RATE_EDIT"].ToString() : string.Empty;

                    _listElements.MIN_CEILING = !DBNull.Value.Equals(dbDR["MIN_CEILING"]) ? dbDR["MIN_CEILING"].ToString() : string.Empty;
                    _listElements.MAX_CEILING = !DBNull.Value.Equals(dbDR["MAX_CEILING"]) ? dbDR["MAX_CEILING"].ToString() : string.Empty;
                    _listElements.TEST_OCCURANCY = !DBNull.Value.Equals(dbDR["TEST_OCCURANCY"]) ? dbDR["TEST_OCCURANCY"].ToString() : string.Empty;
                    _listElements.SERVICE_DEPENDS = !DBNull.Value.Equals(dbDR["SERVICE_DEPENDS"]) ? dbDR["SERVICE_DEPENDS"].ToString() : string.Empty;

                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? dbDR["IS_SRV_GUIDELINES_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? dbDR["IS_SRV_CHECKLIST_REQUIRED"].ToString() : string.Empty;
                    _listElements.IS_SRV_INSTRUCTION_REQ = !DBNull.Value.Equals(dbDR["IS_SRV_INSTRUCTION_REQ"]) ? dbDR["IS_SRV_INSTRUCTION_REQ"].ToString() : string.Empty;
                    _listElements.QUANTITY = !DBNull.Value.Equals(dbDR["QUANTITY"]) ? Convert.ToInt32(dbDR["QUANTITY"]) : 0;

                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("NewGetAllIPServiceAutoInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }



        #endregion


        public CollectionBase GetConsentDtls(int SrvId, string umr_no, string Flag)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_TMPLT_BASED_SRVID");
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.Int32, SrvId);
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, umr_no);
                dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, Flag);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(ConsentDtlsColl);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ConsentDtlsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            return null;
        }
        public CollectionBase ConsentDtlsColl(IDataReader returnData)
        {
            EzHms.ModelEntity.Service _objMdl = new Service();
            EzHms.ModelEntity.ServiceCollection _coll = new ServiceCollection();
            try
            {
                while (returnData.Read())
                {
                    _objMdl.SERVICE_ID = !DBNull.Value.Equals(returnData["SERVICE_ID"]) ? Convert.ToInt32(returnData["SERVICE_ID"]) : 0;
                    /* _objMdl.SERVICE_NAME = !DBNull.Value.Equals(returnData["SERVICE_NAME"]) ? Convert.ToString(returnData["SERVICE_NAME"]) : "0";
                     _objMdl.TEMPLATE_CD = !DBNull.Value.Equals(returnData["TEMPLATE_CD"]) ? Convert.ToString(returnData["TEMPLATE_CD"]) : "0";
                     _objMdl.TEMPLATE_DESC = !DBNull.Value.Equals(returnData["TEMPLATE_DESC"]) ? Convert.ToString(returnData["TEMPLATE_DESC"]) : "0"; */
                    _objMdl.FORM_META_TEXT = !DBNull.Value.Equals(returnData["FORM_META_TEXT"]) ? Convert.ToString(returnData["FORM_META_TEXT"]) : "0";
                    _objMdl.LANGUAGE = !DBNull.Value.Equals(returnData["LANGUAGE"]) ? Convert.ToString(returnData["LANGUAGE"]) : "";
                    _coll.Add(_objMdl);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateGetEmergencyCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            finally
            {
                _objMdl = null;
            }
            return _coll;
        }


        

        

        public CollectionBase GetInsLanguageDetails(Service _srv)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SRVTEMPL_DET");
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.Int32, _srv.SERVICE_ID);
                dBase.AddInParameter(dbCmd, "@IP_LANGUAGE_ID", DbType.String, _srv.LANGUAGE_ID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetInsLanguageDetailsColl);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetInsLanguageDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            return null;
        }
        public CollectionBase GetInsLanguageDetailsColl(IDataReader returnData)
        {
            EzHms.ModelEntity.Service _objMdl = new Service();
            EzHms.ModelEntity.ServiceCollection _coll = new ServiceCollection();
            try
            {
                while (returnData.Read())
                {
                    _objMdl.TEMPLATE_ID = !DBNull.Value.Equals(returnData["TEMPLATE_ID"]) ? Convert.ToInt32(returnData["TEMPLATE_ID"]) : 0;
                    _objMdl.TEMPLATE_DESC = !DBNull.Value.Equals(returnData["TEMPLATE_NAME"]) ? Convert.ToString(returnData["TEMPLATE_NAME"]) : string.Empty;
                    _objMdl.LANGUAGE_ID = !DBNull.Value.Equals(returnData["LANGUAGE_ID"]) ? Convert.ToInt32(returnData["LANGUAGE_ID"]) : 0;
                    _objMdl.LANGUAGE = !DBNull.Value.Equals(returnData["LANGUAGE_NAME"]) ? Convert.ToString(returnData["LANGUAGE_NAME"]) : string.Empty;
                    byte[] img = new byte[10000000];
                    _objMdl.IMAGE = !DBNull.Value.Equals(returnData["IMAGE"]) ? (byte[])(returnData["IMAGE"]) : new byte[1];
                    _objMdl.IMAGE_PATH = !DBNull.Value.Equals(returnData["IMAGE_PATH"]) ? Convert.ToString(returnData["IMAGE_PATH"]) : string.Empty;
                    _coll.Add(_objMdl);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetInsLanguageDetailsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            finally
            {
                _objMdl = null;
            }
            return _coll;
        }




        public CollectionBase GetSelfInv(string Ind_ID, string PAT_CATEGORY_ID, string tariff_id, string cmp_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_BILL_REPEAT_DTLS");
                dBase.AddInParameter(dbCmd, "@IP_BILL_ID", DbType.Int32, 0);
                if (!string.IsNullOrEmpty(cmp_id))
                {
                    dBase.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(cmp_id));
                }
                dBase.AddInParameter(dbCmd, "@IP_IND_ID", DbType.Int32, Convert.ToInt32(Ind_ID));
                if (!string.IsNullOrEmpty(PAT_CATEGORY_ID))
                {
                    dBase.AddInParameter(dbCmd, "@IP_PAT_CATEGORY_ID", DbType.Int32, Convert.ToInt32(PAT_CATEGORY_ID));
                }
                if (!string.IsNullOrEmpty(tariff_id))
                {
                    dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(tariff_id));
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetSelfInvcollcetion);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetSelfInv").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetSelfInvcollcetion(IDataReader dbDR)
        {
            try
            {
                ServiceCollection collection = new ServiceCollection();
                while (dbDR.Read())
                {
                    OSPListElement _listElements = new OSPListElement();
                    // _listElements.ORDER_DET_ID = !DBNull.Value.Equals(dbDR["ORDER_DET_ID"]) ? Convert.ToString(dbDR["ORDER_DET_ID"]) : "0";
                    _listElements.Text = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _listElements.Value = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _listElements.Price = !DBNull.Value.Equals(dbDR[DALConstants.PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.PRICE_COL]) : 0;
                    _listElements.Service_type_name = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _listElements.Service_group_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _listElements.Service_type_id = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _listElements.Service_Class_Id = !DBNull.Value.Equals(dbDR["SERVICECLASS_ID"]) ? Convert.ToInt32(dbDR["SERVICECLASS_ID"]) : 0;
                    _listElements.Service_cd = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _listElements.Service_group = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_GROUP_COL]) ? Convert.ToString(dbDR[DALConstants.SERVICE_GROUP_COL]) : string.Empty;
                    _listElements.Doctor_id = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_ID_COL]) ? Convert.ToString(dbDR[DALConstants.DOCTOR_ID_COL]) : string.Empty;
                    _listElements.START_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_FROM_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_FROM_DT_COL]) : string.Empty;
                    _listElements.END_DT = !DBNull.Value.Equals(dbDR[DALConstants.EFFECT_TO_DT_COL]) ? Convert.ToString(dbDR[DALConstants.EFFECT_TO_DT_COL]) : string.Empty;
                    _listElements.RECORD_STATUS = dbDR[DALConstants.RECORD_STATUS_COL].ToString();
                    _listElements.DOCTOR_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.OrgRAmount = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.DoctorRAmount = !DBNull.Value.Equals(dbDR[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.DOCTOR_PRICE_COL]) : 0;
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) ? Convert.ToInt32(dbDR[DALConstants.SERVICE_PRICE_ID_COL]) : 0;
                    _listElements.CNSLTSN_TYPE_ID = !DBNull.Value.Equals(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(dbDR[DALConstants.CONSULTATION_TYPE_ID_COL]) : "0";
                    _listElements.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(dbDR[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _listElements.EMERGENCY_PRICE = !DBNull.Value.Equals(dbDR["EMERGENCY_PRICE"]) ? Convert.ToString(dbDR["EMERGENCY_PRICE"]) : "0";
                    _listElements.Tariff_Id = !DBNull.Value.Equals(dbDR["TARIFF_ID"]) ? Convert.ToString(dbDR["TARIFF_ID"]) : "0";
                    _listElements.IS_CLINICAL_HIST_REQ = !DBNull.Value.Equals(dbDR["IS_CLINICAL_HIST_REQ"]) ? Convert.ToString(dbDR["IS_CLINICAL_HIST_REQ"]) : "N";
                    _listElements.SRV_GENDER_ID = !DBNull.Value.Equals(dbDR["GENDER_ID"]) ? Convert.ToString(dbDR["GENDER_ID"]) : "0";
                    // _listElements.HISTORY_TYPE = !DBNull.Value.Equals(dbDR["HISTORY_TYPE"]) ? Convert.ToString(dbDR["HISTORY_TYPE"]) : "N";
                    _listElements.HISTORY_TYPE_ID = !DBNull.Value.Equals(dbDR["HISTORY_TYPE_ID"]) ? Convert.ToString(dbDR["HISTORY_TYPE_ID"]) : "0";
                    _listElements.MIN_PRICE = !DBNull.Value.Equals(dbDR["MIN_PRICE"]) ? Convert.ToString(dbDR["MIN_PRICE"]) : "0";
                    _listElements.MAX_PRICE = !DBNull.Value.Equals(dbDR["MAX_PRICE"]) ? Convert.ToString(dbDR["MAX_PRICE"]) : "0";
                    _listElements.NO_NEED_SRV = !DBNull.Value.Equals(dbDR["NO_NEED_SRV"]) ? Convert.ToString(dbDR["NO_NEED_SRV"]) : "0";
                    _listElements.CONCERN_FORM_REQ = !DBNull.Value.Equals(dbDR["CONCERN_FORM_REQ"]) ? Convert.ToString(dbDR["CONCERN_FORM_REQ"]) : "N";
                    _listElements.PRIV_SRV_POSTED_DT = !DBNull.Value.Equals(dbDR["PRIV_SRV_POSTED_DT"]) ? Convert.ToString(dbDR["PRIV_SRV_POSTED_DT"]) : "0";
                    _listElements.NO_NEED_DAYS = !DBNull.Value.Equals(dbDR["NO_NEED_DAYS"]) ? Convert.ToString(dbDR["NO_NEED_DAYS"]) : "0";
                    _listElements.QYT_EDIT = !DBNull.Value.Equals(dbDR["QYT_EDIT"]) ? Convert.ToString(dbDR["QYT_EDIT"]) : "N";
                    _listElements.RATE_EDIT = !DBNull.Value.Equals(dbDR["RATE_EDIT"]) ? Convert.ToString(dbDR["RATE_EDIT"]) : "N";
                    _listElements.CMP_DISC_PCNT = !DBNull.Value.Equals(dbDR["CMP_DISC_PCNT"]) ? Convert.ToString(dbDR["CMP_DISC_PCNT"]) : "0";
                    _listElements.EMP_PERCENT = !DBNull.Value.Equals(dbDR["EMP_PERCENT"]) ? Convert.ToString(dbDR["EMP_PERCENT"]) : "0";
                    _listElements.ORG_PERCENT = !DBNull.Value.Equals(dbDR["ORG_PERCENT"]) ? Convert.ToString(dbDR["ORG_PERCENT"]) : "0";
                    _listElements.EMP_PRICE = !DBNull.Value.Equals(dbDR["EMP_PRICE"]) ? Convert.ToString(dbDR["EMP_PRICE"]) : "0";
                    _listElements.ORG_PRICE = !DBNull.Value.Equals(dbDR[DALConstants.ORG_PRICE_COL]) ? Convert.ToInt32(dbDR[DALConstants.ORG_PRICE_COL]) : 0;
                    _listElements.FROM_DAYS = !DBNull.Value.Equals(dbDR["FROM_DAYS"]) ? Convert.ToString(dbDR["FROM_DAYS"]) : "0";
                    _listElements.TO_DAYS = !DBNull.Value.Equals(dbDR["TO_DAYS"]) ? Convert.ToString(dbDR["TO_DAYS"]) : "0";
                    _listElements.EQUI_SERVICE_NAME = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_NAME"]) ? Convert.ToString(dbDR["EQUI_SERVICE_NAME"]) : "0";
                    _listElements.IS_POST = !DBNull.Value.Equals(dbDR["IS_POST"]) ? Convert.ToString(dbDR["IS_POST"]) : "N";
                    _listElements.EQUI_SERVICE_CD = !DBNull.Value.Equals(dbDR["EQUI_SERVICE_CD"]) ? Convert.ToString(dbDR["EQUI_SERVICE_CD"]) : "";
                    _listElements.MAX_OPT_SERVICES_ALLOWED = !DBNull.Value.Equals(dbDR["MAX_OPT_SERVICES_ALLOWED"]) ? Convert.ToString(dbDR["MAX_OPT_SERVICES_ALLOWED"]) : "0";
                    _listElements.IS_CONSENT_FROM = !DBNull.Value.Equals(dbDR["IS_CONSENT_FORM"]) ? Convert.ToString(dbDR["IS_CONSENT_FORM"]) : "N";
                    _listElements.IS_SRV_GUIDELINES_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) ? Convert.ToString(dbDR["IS_SRV_GUIDELINES_REQUIRED"]) : "N";
                    _listElements.IS_SRV_CHECKLIST_REQUIRED = !DBNull.Value.Equals(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) ? Convert.ToString(dbDR["IS_SRV_CHECKLIST_REQUIRED"]) : "N";
                    _listElements.IS_ADDITIONAL = !DBNull.Value.Equals(dbDR["IS_ADDITIONAL"]) ? Convert.ToString(dbDR["IS_ADDITIONAL"]) : "N";
                    _listElements.DISCOUNT_PERCENT = !DBNull.Value.Equals(dbDR["DISCOUNT_PERCENT"]) ? Convert.ToString(dbDR["DISCOUNT_PERCENT"]) : "0";
                    _listElements.IND_SRV_ID = !DBNull.Value.Equals(dbDR["IND_SRV_ID"]) ? Convert.ToInt32(dbDR["IND_SRV_ID"]) : 0;
                    _listElements.IS_EMERGENCY = !DBNull.Value.Equals(dbDR["IS_EMERGENCY"]) ? Convert.ToString(dbDR["IS_EMERGENCY"]) : "0";
                    _listElements.TAX_PCT = !DBNull.Value.Equals(dbDR["TAX_PCT"]) ? Convert.ToString(dbDR["TAX_PCT"]) : "0";
                    _listElements.SGST_TAX_PCT = !DBNull.Value.Equals(dbDR["SGST_PCT"]) ? Convert.ToString(dbDR["SGST_PCT"]) : "0";
                    _listElements.CGST_TAX_PCT = !DBNull.Value.Equals(dbDR["CGST_PCT"]) ? Convert.ToString(dbDR["CGST_PCT"]) : "0";
                    _listElements.SAC_CD = !DBNull.Value.Equals(dbDR["SAC_CD"]) ? Convert.ToString(dbDR["SAC_CD"]) : "0";
                    _listElements.CONC_RULE_PCT = !DBNull.Value.Equals(dbDR["CONC_PCT"]) ? Convert.ToString(dbDR["CONC_PCT"]) : "0";
                    _listElements.CONC_RULE_ID = !DBNull.Value.Equals(dbDR["CNCSN_RULE_ID"]) ? Convert.ToString(dbDR["CNCSN_RULE_ID"]) : "0";
                    _listElements.CONC_RULE_NAME = !DBNull.Value.Equals(dbDR["CNCSN_RULE_NAME"]) ? Convert.ToString(dbDR["CNCSN_RULE_NAME"]) : "";
                    _listElements.CONC_RULE_AUTH_NAME = !DBNull.Value.Equals(dbDR["AUTH_NAME"]) ? Convert.ToString(dbDR["AUTH_NAME"]) : "";
                    _listElements.CONC_RULE_AUTH_ID = !DBNull.Value.Equals(dbDR["AUTH_ID"]) ? Convert.ToString(dbDR["AUTH_ID"]) : "0";
                    _listElements.DOCTOR_PCT = !DBNull.Value.Equals(dbDR["DOCTOR_PCT"]) ? Convert.ToString(dbDR["DOCTOR_PCT"]) : "0";
                    _listElements.ORG_PCT = !DBNull.Value.Equals(dbDR["ORG_PCT"]) ? Convert.ToString(dbDR["ORG_PCT"]) : "0";
                    _listElements.SERVICE_PRICE_ID = !DBNull.Value.Equals(dbDR["SERVICE_PRICE_ID"]) ? Convert.ToInt32(dbDR["SERVICE_PRICE_ID"]) : 0;
               
                    collection.Add(_listElements);
                }
                return collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetSelfInvcollcetion").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }
        }

        public CollectionBase pre_Define_Inst_Data()
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ER_FB_TEMPLATE");
                GenerateCollectionReader sqlData = new GenerateCollectionReader(pre_Def_Collection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("pre_Define_Inst_Data").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            return null;
        }
        public CollectionBase pre_Def_Collection(IDataReader returnData)
        {
            EzHms.ModelEntity.Service _objMdl;
            EzHms.ModelEntity.ServiceCollection _coll = new ServiceCollection();
            try
            {
                while (returnData.Read())
                {
                    _objMdl = new Service();
                    _objMdl.TEMPLATE_ID = !DBNull.Value.Equals(returnData["TEMPLATE_ID"]) ? Convert.ToInt32(returnData["TEMPLATE_ID"]) : 0;
                    _objMdl.TEMPLATE_NAME = !DBNull.Value.Equals(returnData["TEMPLATE_NAME"]) ? Convert.ToString(returnData["TEMPLATE_NAME"]) : "";
                    _objMdl.TEMPLATE_CD = !DBNull.Value.Equals(returnData["TEMPLATE_CD"]) ? Convert.ToString(returnData["TEMPLATE_CD"]) : "0";
                    _objMdl.TEMPLATE_DESC = !DBNull.Value.Equals(returnData["TEMPLATE_DESC"]) ? Convert.ToString(returnData["TEMPLATE_DESC"]) : "0";
                    _objMdl.FORM_META_TEXT = !DBNull.Value.Equals(returnData["FORM_META_TEXT"]) ? Convert.ToString(returnData["FORM_META_TEXT"]) : "0";
                    _objMdl.TEMPLATE_TYPE_ID = !DBNull.Value.Equals(returnData["TEMPLATE_TYPE_ID"]) ? Convert.ToString(returnData["TEMPLATE_TYPE_ID"]) : "";
                    _objMdl.TEMPLATE_TYPE_NAME = !DBNull.Value.Equals(returnData["TEMPLATE_TYPE_NAME"]) ? Convert.ToString(returnData["TEMPLATE_TYPE_NAME"]) : "";
                    _objMdl.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? Convert.ToString(returnData["RECORD_STATUS"]) : "N";
                    _coll.Add(_objMdl);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("pre_Def_Collection").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
            }
            finally
            {
                _objMdl = null;
            }
            return _coll;
        }

        public CollectionBase GetProcedureServices(LookUpSearch _lookUpSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ALL_OT_PROCEDURES_LOOKUP");
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, "SERVICE_NAME");
                dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUpSearch.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.Int32, 3);
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUpSearch.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, "@IP_PAGENUM", DbType.Int32, _lookUpSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, "@IP_PAGESIZE", DbType.Int32, _lookUpSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, _total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetProcedureServices_collection);
                _total_records = dBase.GetParameterValue(dbCmd, "@OP_COUNT") != DBNull.Value ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT")) : 0;
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetProcedureServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        CollectionBase GetProcedureServices_collection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection objcoll = new ServiceMasterCollection();
                ServiceMaster objmodel;
                while (returnData.Read())
                {
                    objmodel = new ServiceMaster();
                    objmodel.SERVICE_ID = !DBNull.Value.Equals(returnData["SERVICE_ID"]) ? Convert.ToInt32(returnData["SERVICE_ID"].ToString()) : 0;
                    objmodel.SERVICE_CD = !DBNull.Value.Equals(returnData["SERVICE_CD"]) ? Convert.ToString(returnData["SERVICE_CD"]) : "";
                    objmodel.SERVICE_NAME = !DBNull.Value.Equals(returnData["SERVICE_NAME"]) ? Convert.ToString(returnData["SERVICE_NAME"]) : "";
                    objmodel.SERVICE_TYPE_ID = !DBNull.Value.Equals(returnData["SERVICE_TYPE_ID"]) ? Convert.ToInt32(returnData["SERVICE_TYPE_ID"].ToString()) : 0;
                    objmodel.SERVICE_GROUP_ID = !DBNull.Value.Equals(returnData["SERVICE_GROUP_ID"]) ? Convert.ToString(returnData["SERVICE_GROUP_ID"].ToString()) : "0";
                    objmodel.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData["SERVICE_GROUP_NAME"]) ? Convert.ToString(returnData["SERVICE_GROUP_NAME"]) : "";
                    objmodel.DEPARTMENT_NAME = !DBNull.Value.Equals(returnData["DEPARTMENT_NAME"]) ? Convert.ToString(returnData["DEPARTMENT_NAME"]) : "";
                    objmodel.DEPARTMENT_ID = !DBNull.Value.Equals(returnData["DEPARTMENT_ID"]) ? Convert.ToInt32(returnData["DEPARTMENT_ID"].ToString()) : 0;
                    objcoll.Add(objmodel);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetProcedureServices_collection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        public CollectionBase Get_Time_intravels_DropDowns()
        {
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_OT_TIME_INTERVAL");
                GenerateCollectionReader sqlData = new GenerateCollectionReader(get_ot_time_interval);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Time_intravels_DropDowns").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        CollectionBase get_ot_time_interval(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection objcoll = new ServiceMasterCollection();
                ServiceMaster objmodel;
                while (returnData.Read())
                {
                    objmodel = new ServiceMaster();
                    objmodel.TIME_INTERVAL_ID = !DBNull.Value.Equals(returnData["TIME_INTERVAL_ID"]) ? Convert.ToString(returnData["TIME_INTERVAL_ID"]) : "0";
                    objmodel.INTERVAL_CD = !DBNull.Value.Equals(returnData["INTERVAL_CD"]) ? Convert.ToString(returnData["INTERVAL_CD"]) : "";
                    objmodel.INTERVAL_NAME = !DBNull.Value.Equals(returnData["INTERVAL_NAME"]) ? Convert.ToString(returnData["INTERVAL_NAME"]) : "";
                    objmodel.FROM_MINUTE = !DBNull.Value.Equals(returnData["FROM_MINUTE"]) ? Convert.ToString(returnData["FROM_MINUTE"]) : "";
                    objmodel.TO_MINUTE = !DBNull.Value.Equals(returnData["TO_MINUTE"]) ? Convert.ToString(returnData["TO_MINUTE"]) : "";
                    objmodel.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? Convert.ToString(returnData["RECORD_STATUS"]) : "N";
                    objcoll.Add(objmodel);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetProcedureServices_collection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

    }
}
