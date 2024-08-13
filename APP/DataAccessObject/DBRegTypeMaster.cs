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

namespace EzHms.DataAccessObject
{
    public class DBRegTypeMaster : DBExecuteDataReader
    {
        public DataSet Get_RegType_DropDowns(int session_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ALL_ENTITY_PRC");
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, 1);
                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegType_DropDowns").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public bool InsUpdRegType(RegTypeMaster _regtype,out int count)
        {
            bool _status = false;
            count = 0;
            DataAccessLayer dbLayer = new DataAccessLayer();
            try
            {

                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_REG_TYPE_PRICE");
                dbSvc.AddInParameter(dbCmd, "@IP_PRICE", DbType.Double, _regtype.REGISTRATION_FEE);
                dbSvc.AddInParameter(dbCmd, "@IP_REG_TYPE_PRICE_ID", DbType.Int32, _regtype.REGISTRATION_FEE_ID);
                dbSvc.AddInParameter(dbCmd, "@IP_REG_TYPE_NAME", DbType.String, _regtype.REGISTRATION_TYPE);
                dbSvc.AddInParameter(dbCmd, "@IP_REG_TYPE_ID", DbType.Int32, _regtype.REGISTRATION_TYPE_ID);
                dbSvc.AddInParameter(dbCmd, "@IP_VALIDTY_DAYS", DbType.Int32, _regtype.REGISTRATION_VALIDITY);
                dbSvc.AddInParameter(dbCmd, "@IP_REG_TYPE_PRICE_REV_NO", DbType.Int32, _regtype.REG_TYPE_PRICE_REV_NO);
                dbSvc.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, _regtype.SESSION_ID);
                dbSvc.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, count);
                _status = dbSvc.ExecuteNonQuery(dbCmd) > 0;

                count = Convert.ToInt32(dbSvc.GetParameterValue(dbCmd,"@OP_COUNT"));

                if (count == 1)
                    return _status;
                else
                    return _status;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsUpdRegType").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return _status;
        }
        public CollectionBase Get_RegType(RegTypeMaster _regtype)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbSvc = dblayer.DBaseFactory;
                DbCommand dbCmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_TYPE_PRICE");
                dbSvc.AddInParameter(dbCmd, "@IP_REG_TYPE_PRICE_ID", DbType.Int32, _regtype.REGISTRATION_FEE_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_RegType_Coll);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbCmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegType").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_RegType_Coll(IDataReader returnData)
        {
            try
            {
                RegTypeMaterColl RegColl = new RegTypeMaterColl();

                while (returnData.Read())
                {

                    RegTypeMaster Regtype = new RegTypeMaster();
                    Regtype.REGISTRATION_FEE = Convert.ToInt32(returnData["PRICE"].ToString());
                    Regtype.REG_TYPE_PRICE_REV_NO = Convert.ToInt32(returnData["REG_TYPE_PRICE_REV_NO"].ToString());
                    Regtype.REGISTRATION_TYPE_ID = returnData["REG_TYPE_ID"].ToString();
                    Regtype.REGISTRATION_TYPE = returnData["REG_TYPE_NAME"].ToString();
                    Regtype.REGISTRATION_VALIDITY = Convert.ToInt32(returnData["VALIDTY_DAYS"].ToString());
                    Regtype.VALIDTY_DT = (returnData["VALIDTY_DT"].ToString());
                    Regtype.REGISTRATION_FEE_ID = Convert.ToInt32(returnData["REG_TYPE_PRICE_ID"].ToString());
                    RegColl.Add(Regtype);
                }
                return RegColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegType_Coll").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase Get_RegType_details(RegTypeMaster _regtype)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbSvc = dblayer.DBaseFactory;
                DbCommand dbCmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_TYPE_DETAILS");
                dbSvc.AddInParameter(dbCmd, "@IP_REG_TYPE_ID", DbType.Int32, _regtype.REGISTRATION_TYPE_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_RegType_Details_Coll);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbCmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegType_details").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_RegType_Details_Coll(IDataReader returnData)
        {
            try
            {
                RegTypeMaterColl RegColl = new RegTypeMaterColl();

                while (returnData.Read())
                {

                    RegTypeMaster Regtype = new RegTypeMaster();
                    Regtype.REGISTRATION_FEE = Convert.ToInt32(returnData["PRICE"].ToString());
                    Regtype.REG_TYPE_PRICE_REV_NO = Convert.ToInt32(returnData["REG_TYPE_PRICE_REV_NO"].ToString());
                    Regtype.REGISTRATION_TYPE_ID = returnData["REG_TYPE_ID"].ToString();
                    Regtype.REGISTRATION_TYPE = returnData["REG_TYPE_NAME"].ToString();
                    Regtype.REGISTRATION_VALIDITY = Convert.ToInt32(returnData["VALIDTY_DAYS"].ToString());
                    Regtype.VALIDTY_DT = (returnData["VALIDTY_DT"].ToString());
                    Regtype.REGISTRATION_FEE_ID = Convert.ToInt32(returnData["REG_TYPE_PRICE_ID"].ToString());
                    RegColl.Add(Regtype);
                }
                return RegColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegType_Coll").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetAll_RegType(GridPaging gpage, out int _totalrecords)
        {

            _totalrecords = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_REG_TYPE_PRICE");
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, Convert.ToInt32(gpage.CURRENT_PAGE));
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, Convert.ToInt32(gpage.PAGE_SIZE));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                dBase.AddOutParameter(dbCmd, DALConstants.OP_COUNT_PARM, DbType.Int32, _totalrecords);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(GetAll_RegType_Coll);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                _totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OP_COUNT_PARM));
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAll_RegType").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        protected CollectionBase GetAll_RegType_Coll(IDataReader returnData)
        {
            try
            {
                RegTypeMaterColl RegColl = new RegTypeMaterColl();
                while (returnData.Read())
                {
                    RegTypeMaster Regtype = new RegTypeMaster();
                    Regtype.REGISTRATION_FEE = Convert.ToInt32(returnData["PRICE"].ToString());
                    Regtype.REG_TYPE_PRICE_REV_NO = Convert.ToInt32(returnData["REG_TYPE_PRICE_REV_NO"].ToString());
                    Regtype.REGISTRATION_TYPE_ID = returnData["REG_TYPE_ID"].ToString();
                    Regtype.REGISTRATION_TYPE = returnData["REG_TYPE_NAME"].ToString();
                    Regtype.REGISTRATION_VALIDITY = Convert.ToInt32(returnData["VALIDTY_DAYS"].ToString());
                    Regtype.REGISTRATION_FEE_ID = Convert.ToInt32(returnData["REG_TYPE_PRICE_ID"].ToString());
                    Regtype.CREATED_BY = returnData["CREATED_BY"].ToString();
                    Regtype.CREATE_DT = returnData["CREATE_DT"].ToString();
                    Regtype.MODIFIED_BY = returnData["MODIFIED_BY"].ToString();
                    Regtype.MODIFY_DT = returnData["MODIFY_DT"].ToString();
                    RegColl.Add(Regtype);

                }
                return RegColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod(" GetAll_RegType_Coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase RegType_Name(String hdReg)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_TYPE_PRICE_ALLERT");
                dBase.AddInParameter(dbcmd, "@IP_REG_TYPE_NAME", DbType.String, hdReg);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(RegType_Name_Coll);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegType_Name").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase RegType_Name_Coll(IDataReader idr)
        {
            try
            {
                RegTypeMaterColl RegColl = new RegTypeMaterColl();
                while (idr.Read())
                {

                    RegTypeMaster regtype;
                    regtype = new RegTypeMaster();
                    regtype.REGISTRATION_TYPE = Convert.ToString(idr["REG_TYPE_NAME"]);
                    regtype.REGISTRATION_TYPE_ID = (idr["REG_TYPE_ID"].ToString());


                    RegColl.Add(regtype);
                }
                return RegColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegType_Name_Coll").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public DataSet Get_RegTypePrice(int session_id)
        {
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_REG_TYPE_PRICE");
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, 1);
                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_RegTypePrice").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }





        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            throw new NotImplementedException();
        }
    }
}
