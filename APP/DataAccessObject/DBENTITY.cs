using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Data;
using System.Data.Common;
using EzHms.ModelEntity;
using Spname = EzHms.ModelEntity.StoreProceduresNames;
using DalCont = EzHms.ModelEntity.DALConstants;
using Microsoft.Practices.EnterpriseLibrary.Data;

namespace EzHms.DataAccessObject
{
    public class DBENTITY : DBExecuteDataReader
    {
        public bool Save_Entity(ENTITY objenty, out int output)
        {
            output = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbsv = null;
                dbsv = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_ENTITY_VALUE");
                dbsv.AddInParameter(cmd, "@IP_ENTITY_VALUE_ID", DbType.Int32, objenty.ENTITY_VALUE_ID);
                dbsv.AddInParameter(cmd, "@IP_ENTITY_ID", DbType.Int32, objenty.ENTITY_ID);
                dbsv.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, objenty.SESSION_ID);
                dbsv.AddInParameter(cmd, "@IP_SRV_TYPE_ORDER", DbType.Int32,0);
                dbsv.AddInParameter(cmd, "@IP_ENTITY_VALUE_CD", DbType.String, objenty.ENTITY_CD);
                dbsv.AddInParameter(cmd, "@IP_ENTITY_VALUE_NAME", DbType.String, objenty.ENTITY_VALUE_NAME);
                dbsv.AddInParameter(cmd, "@IP_ENTITY_VALUE_DESC", DbType.String, objenty.ENTITY_VALUE_DESC);
                dbsv.AddInParameter(cmd, "@IP_IMAGE_CLASS", DbType.String,null);
                dbsv.AddOutParameter(cmd, "@OP_COUNT", DbType.Int32, output);
                int count = dbsv.ExecuteNonQuery(cmd);
                output = count;
                if (count == -1)
                {
                    return false;
                }
                if (count == 1)
                {
                    return true;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Save_Entity").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return true;
        }
        public CollectionBase GetAllEntitts(string prefix)
        {
            
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, Spname.UPR_GETALL_ENTITY);
                dbase.AddInParameter(dbcmd, DalCont.IP_PREFIX_TEXT_PARM, DbType.String, prefix);
               GenerateCollectionReader sqldata = new GenerateCollectionReader(GenerateEntityCollection);
                CollectionBase cb = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cb;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllEntitts").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
         public CollectionBase GenerateEntityCollection(IDataReader reader)
        {
            try
            {
                EntityCollection objcoll = new EntityCollection();
                while (reader.Read())
                {
                    ENTITY objent = new ENTITY();
                    objent.ENTITY_ID = !DBNull.Value.Equals(reader[DALConstants.ENTITY_ID_COL]) ? Convert.ToInt32(reader[DALConstants.ENTITY_ID_COL]) : 0;
                    objent.ENTITY_CD=!DBNull.Value.Equals(reader[DALConstants.ENTITY_CD_COL])? Convert.ToString(reader[DALConstants.ENTITY_CD_COL]):string.Empty;
                    objent.ENTITY_DESC = !DBNull.Value.Equals(reader[DALConstants.ENTITY_DESC_COL]) ? Convert.ToString(reader[DALConstants.ENTITY_DESC_COL]) : string.Empty;
              
                  
                    objcoll.Add(objent);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateEntityCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            throw new NotImplementedException();
        }
        public CollectionBase GetAllEntityValues(int Entityid)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, Spname.UPR_GETALL_ENTITY_VALUE);
                dbase.AddInParameter(dbcmd, DALConstants.ENTITY_ID_PARM, DbType.Int32, Entityid);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GenerateEntityValuesCollection);
                CollectionBase cb = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cb;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllEntitts").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GenerateEntityValuesCollection(IDataReader reader)
        {
            try 
            {
                EntityCollection objcol1 = new EntityCollection();
                while (reader.Read())
                {
                    ENTITY objent = new ENTITY();
                    objent.ENTITY_VALUE_ID = !DBNull.Value.Equals(reader[DALConstants.ENTITY_VALUE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.ENTITY_VALUE_ID_COL]) : 0;
                    objent.ENTITY_VALUE_CD = !DBNull.Value.Equals(reader[DALConstants.ENTITY_VALUE_CD_COL]) ? Convert.ToString(reader[DALConstants.ENTITY_VALUE_CD_COL]) : string.Empty;
                    objent.ENTITY_VALUE_DESC = !DBNull.Value.Equals(reader[DALConstants.ENTITY_VALUE_DESC_COL]) ? Convert.ToString(reader[DALConstants.ENTITY_VALUE_DESC_COL]) : string.Empty;
                    objent.ENTITY_VALUE_NAME = !DBNull.Value.Equals(reader[DALConstants.ENTITY_VALUE_NAME_COL]) ? Convert.ToString(reader[DALConstants.ENTITY_VALUE_NAME_COL]) : string.Empty;
                    objent.ENTITY_ID = !DBNull.Value.Equals(reader[DALConstants.ENTITY_ID_COL]) ? Convert.ToInt32(reader[DALConstants.ENTITY_ID_COL]) : 0;
                    objent.RECORD_STATUS = !DBNull.Value.Equals(reader["RECORD_STATUS"]) ? Convert.ToString(reader["RECORD_STATUS"]) : string.Empty;
                    objent.ENTITY_VALUE_REV_NO = reader["ENTITY_VALUE_REV_NO"].ToString();
                    objent.DISPLAY_ORDER = reader["DISPLAY_ORDER"].ToString();
                    objcol1.Add(objent);
                }
                return objcol1;
            }
            catch(Exception ex) 
                {
                 ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateEntityCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                }
            return null;
        }
        public List<ListElements> GetAutoComp_Entity(string prefixtext,string contextkey)
        {
        try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, Spname.UPR_GET_ENTITY_AUTO);
                dbase.AddInParameter(dbcmd, DalCont.IP_COLUMN_NAME_PARM, DbType.String,contextkey);
                dbase.AddInParameter(dbcmd, DalCont.IP_PREFIX_TEXT_PARM, DbType.String, prefixtext);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {

                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dbase.AddInParameter(dbcmd, DalCont.IP_SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                List<string> returnData = new List<string>();
                IDataReader dbDR = dblayer.ExecuteReader(dbcmd);
                return DataReaderEntityAuto(dbDR);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoComp_BedTransferList").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }
        
                
        private List<ListElements> DataReaderEntityAuto(IDataReader dbDR)
        {
            try 
            {
                List<ListElements> returnData = new List<ListElements>();
                while (dbDR.Read())
                {
                    ListElements _element = new ListElements();
                    _element.Text = dbDR[1].ToString();
                    _element.Value = dbDR[0].ToString();
                    returnData.Add(_element);
                }
                dbDR.Close();
                return returnData;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DataReaderBedTrnsfrAuto").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public bool SaveSortOrdersxml(ENTITY obj, out int output)
        {
            output = 0;

            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_ENTITY_VALUE_XML");
                dBase.AddInParameter(dbCmd, "@XML", DbType.Xml, obj.XML);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, output);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                }
                int count = dBase.ExecuteNonQuery(dbCmd);
                // int id = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT"));
                output = count;
                return count > 0 ? true : false;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveSortOrdersxml").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return false;
            }
        }
    }

}
