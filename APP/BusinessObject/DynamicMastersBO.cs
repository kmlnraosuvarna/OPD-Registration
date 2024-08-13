
#region Comments
    // ClassName    : DynamicMastersBO
    // Description  : This calss consists of Getting the Colum Names based on table and tbale data based on search criteria and Data Base Grid Binding.
    // Author       : Naga Sankar J
    // DateCreated  : 29/12/2009
    // Modified By  :
    // DateModified :
#endregion


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Data;
//using System.Data.Objects;
using System.Data.Common;
using System.Data.SqlClient;
////using System.Data.Entity;
//using System.Data.EntityClient;
//using System.Web.UI.HtmlControls;
using ErrorHandler = EzHms.ModelEntity.ErrorLoger;
using Microsoft.Practices.EnterpriseLibrary.ExceptionHandling;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Microsoft.Practices.EnterpriseLibrary.Data.Sql;
using Microsoft.Practices.EnterpriseLibrary.Logging;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using System.Collections;

namespace EzHms.BusinessObject
{
    #region ClasssDynamicMastersBO
    public class DynamicMastersBO
    {
        
        #region MemberVariables
       // Database dBase = DatabaseFactory.CreateDatabase(Constants.ConnectionName);
        
        #endregion

        #region DataMembers

        #endregion

        #region Properties
        #endregion

        #region Constatns
        #endregion

        #region Events
        #endregion

        //Method to get ColumNames based on Table Name.
        public DataSet GetTableColumnNames(string tName)
        {
            //DbCommand dbCmd1 = db1Obj.GetSqlStringCommand("Select * from STATE");
            //DataSet getDs1 = db1Obj.ExecuteDataSet(dbCmd1);
            //return getDs1;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dBase.GetStoredProcCommand(Constants.Stp_GetTable_ColumnNames);
                dBase.AddInParameter(dbCmd, "IP_TAB_ALIAS_NAME", DbType.String, tName);
                DataSet getDs = dBase.ExecuteDataSet(dbCmd);
                return getDs;
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        // Method to implement Dynamic paging which takes input parametes.
        // Table Name,Order by condition,reguired fields,Filter condition,Fields,Page number and page sise.
        public DataSet BindDynamicPagingData(string datasrc, string orderby, string fieldlist, string filter, string fields, int pageNumber, int pageSie,string fromdt,string todt)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dBase.GetStoredProcCommand(Constants.Stp_GenericPaging);
                dBase.AddInParameter(dbCmd, "@IP_datasrc", DbType.String, datasrc);
                dBase.AddInParameter(dbCmd, "@IP_orderBy", DbType.String, orderby);
                dBase.AddInParameter(dbCmd, "@IP_fieldlist", DbType.String, fieldlist);
                dBase.AddInParameter(dbCmd, "@IP_filter", DbType.String, filter);
                dBase.AddInParameter(dbCmd, "@IP_fields", DbType.String, fields);
                dBase.AddInParameter(dbCmd, "@IP_pageNum", DbType.Int32, pageNumber);
                dBase.AddInParameter(dbCmd, "@IP_pageSize", DbType.Int32, pageSie);
                dBase.AddInParameter(dbCmd, "@IP_FROM_DT", DbType.String, fromdt);
                dBase.AddInParameter(dbCmd, "@IP_TO_DT", DbType.String, todt);
                dBase.AddOutParameter(dbCmd,"@IP_tolcount", DbType.Int32, Int32.MaxValue);
                DataSet ds = dBase.ExecuteDataSet(dbCmd);
                int totalCount = Convert.ToInt32(dbCmd.Parameters["@IP_tolcount"].Value);
                if (ds.Tables[0].Rows.Count > 0 && totalCount > 0)
                {
                    ds.Tables[0].Columns.Add("Count");
                    ds.Tables[0].Rows[0]["count"] = totalCount.ToString();
                }
                return ds;
            }
            catch(Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex,100,1);//EventID 100 for Dynamic Masters
                return null;
            }
        }

        //Method to execute dynamically created query.
        public bool DynamicDMLQueryOperations(string query)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dBase.GetSqlStringCommand(query);
                int a = dBase.ExecuteNonQuery(dbCmd);
                if (a > 0)
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
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return false;
            }
        }
        //Dynamic dataset created by mahendra on 20120503
        public DataSet DynamicDataset(string query)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dBase.GetSqlStringCommand(query);               
                DataSet a = dBase.ExecuteDataSet(dbCmd);
                return a;
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public DataSet BindPAymentModes(string query, int session_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dBase.GetStoredProcCommand(query);
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, session_id);
                DataSet a = dBase.ExecuteDataSet(dbCmd);
                return a;
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        //Dynamic Executescalr created by mahendra on 20120713
        public object DynamicExecuteScalar(string query)
        {
            try
            {
               DataAccessLayer dbLayer = new DataAccessLayer();
               Database dBase = dbLayer.DBaseFactory;
               DbCommand dbCmd = dBase.GetSqlStringCommand(query);
               object a = dBase.ExecuteScalar(dbCmd);
               return a;
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        //Method to execute Dynamically Created Query based on peration type.
        public bool DynamicDMLQueryExecution(string query, string colName, string tableName,string dmlType,string searchCriteria)
        {
            try
            {
                if (dmlType == "Save")
                {
                    DataAccessLayer dbLayer = new DataAccessLayer();
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dBase.GetStoredProcCommand(Constants.Stp_Get_InsUpd_TableId);
                    dBase.AddInParameter(dbCmd, "@IP_InsQuery", DbType.String, query);
                    dBase.AddInParameter(dbCmd, "@IP_Tname", DbType.String, tableName);
                    dBase.AddInParameter(dbCmd, "@IP_ColumnId", DbType.String, colName);
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
                    }
                    int count = dBase.ExecuteNonQuery(dbCmd);
                    if (count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else if (dmlType == "Modify")
                {
                    DataAccessLayer dbLayer = new DataAccessLayer();
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dBase.GetStoredProcCommand(Constants.Stp_Get_InsUpd_RowStatus);
                    dBase.AddInParameter(dbCmd, "IP_InsQuery", DbType.String, query);
                    dBase.AddInParameter(dbCmd, "IP_Tname", DbType.String, tableName);
                    dBase.AddInParameter(dbCmd, "IP_ColumnId", DbType.String, colName);
                    dBase.AddInParameter(dbCmd, "IP_Condition", DbType.String, searchCriteria);
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
                    }
                    int count = dBase.ExecuteNonQuery(dbCmd);
                    if (count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else if (dmlType == "DeleteRow")
                {
                    DataAccessLayer dbLayer = new DataAccessLayer();
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dBase.GetSqlStringCommand(query);
                    int count = dBase.ExecuteNonQuery(dbCmd);
                    if (count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                else if (dmlType == "InActiveRow")
                {
                    DataAccessLayer dbLayer = new DataAccessLayer();
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dBase.GetSqlStringCommand(query);
                    int count = dBase.ExecuteNonQuery(dbCmd);
                    if (count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else if (dmlType == "ActiveRow")
                {
                    DataAccessLayer dbLayer = new DataAccessLayer();
                    Database dBase = dbLayer.DBaseFactory;
                    DbCommand dbCmd = dBase.GetSqlStringCommand(query);
                    int count = dBase.ExecuteNonQuery(dbCmd);
                    if (count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return false;
            }
        }

        //public bool CheckCodeExists(string tName, string searchCriteria)
        //{
        //    DbCommand dbCmd = dBase.GetSqlStringCommand("SELECT * FROM MA."+tName+" WHERE "+ searchCriteria);
        //    int a = dBase.ExecuteNonQuery(dbCmd);
        //    if (a ==-1)
        //    {
        //        return true;
        //    }
        //    else
        //    {
        //        return false;
        //    }
        //}

        //Method to get Column Names Based on Table Name.

        //Entity method to getColunNames based on table name.
        public DataSet GetColumnName(string tName)
        {
            //mEntity = new menuEntity();
            //EntityConnection eCon = (EntityConnection)mEntity.Connection;
            //DbConnection dbCon = eCon.StoreConnection;
            ////Database db=GeneralDBFunctions.GetConnection();
            ////DbConnection dbCon = GeneralDBFunctions.GetConnection();
            //DbCommand dbCmd = dbCon.CreateCommand();
            //////dbCmd.CommandText = "MASTERS.Stp_GetAll_TableColumnNames";

            //dbCmd.CommandText = Constants.Stp_GetAll_TableColumnNames;
            //dbCmd.CommandType = CommandType.StoredProcedure;
            //bool openConnection = dbCmd.Connection.State == ConnectionState.Closed;
            //if (openConnection)
            //{
            //    dbCmd.Connection.Open();
            //}
            //dbCmd.Parameters.Add(new SqlParameter("@TableName", SqlDbType.VarChar));
            //dbCmd.Parameters["@TableName"].Value = tName;


            //CustomDbDataAdapter dbDA = new CustomDbDataAdapter();
            DataSet getDs = new DataSet();
            //dbDA.SelectCommand = dbCmd;
            //dbDA.Fill(getDs);
            //dbCmd.Connection.Close();
            return getDs;
        }

        //Method to assign Dynamic paging to Gridview.
        public DataSet BindGenericPagingData(string datasrc, string orderby, string fieldlist, string filter, string fields, int pageNumber, int pageSie)
        {
                //mEntity = new menuEntity();
                //EntityConnection eCon = (EntityConnection)mEntity.Connection;
                //DbConnection dbCon = eCon.StoreConnection;
                //DbCommand dbCmd = dbCon.CreateCommand();
                //dbCmd.CommandText = Constants.Stp_GenericPaging;
                //dbCmd.CommandType = CommandType.StoredProcedure;

                ////DbDataAdapter da;
                ////da.SelectCommand = dbCmd;

                //dbCmd.Parameters.Add(new SqlParameter("@datasrc", SqlDbType.NVarChar, 2000));
                //dbCmd.Parameters["@datasrc"].Value = "Masters." + datasrc;

                //dbCmd.Parameters.Add(new SqlParameter("@orderBy", SqlDbType.NVarChar, 2000));
                //dbCmd.Parameters["@orderBy"].Value = orderby;

                //dbCmd.Parameters.Add(new SqlParameter("@fieldlist", SqlDbType.NVarChar, 4000));
                //dbCmd.Parameters["@fieldlist"].Value = fieldlist;

                //dbCmd.Parameters.Add(new SqlParameter("@filter", SqlDbType.NVarChar, 4000));
                //dbCmd.Parameters["@filter"].Value = filter;

                //dbCmd.Parameters.Add(new SqlParameter("@fields", SqlDbType.NVarChar, 4000));
                //dbCmd.Parameters["@fields"].Value = fields;

                //dbCmd.Parameters.Add(new SqlParameter("@pageNum", SqlDbType.Int));
                //dbCmd.Parameters["@pageNum"].Value = pageNumber;

                //dbCmd.Parameters.Add(new SqlParameter("@pageSize", SqlDbType.Int));
                //dbCmd.Parameters["@pageSize"].Value = pageSie;


                //dbCmd.Parameters.Add(new SqlParameter("@tolcount", SqlDbType.Int));
                //dbCmd.Parameters["@tolcount"].Direction = ParameterDirection.Output;

                //bool openConnection = dbCmd.Connection.State == ConnectionState.Closed;
                //if (openConnection)
                //{
                //    dbCmd.Connection.Open();
                //}
                //dbCmd.ExecuteNonQuery();
                ////rowCount = Convert.ToInt32(dbCmd.Parameters["@tolcount"].Value.ToString());
                DataSet ds = new DataSet();
                //CustomDbDataAdapter dbDA = new CustomDbDataAdapter();
                //dbDA.SelectCommand = dbCmd;
                //dbDA.Fill(ds);
                //int tolCount = Convert.ToInt32(dbCmd.Parameters["@tolcount"].Value);
                //if (ds.Tables[0].Rows.Count > 0 && tolCount > 0)
                //{
                //    ds.Tables[0].Columns.Add("Count");
                //    ds.Tables[0].Rows[0]["count"] = tolCount.ToString();
                //}
                ////ds.Tables[0].Rows.Add(

                return ds;
        }

        //Method to get Data Based on TableName and Search Criteria.
        public DataSet GetTableData(string tName, string searchCriteria)
        {
            //mEntity = new menuEntity();
            //EntityConnection eCon = (EntityConnection)mEntity.Connection;
            //DbConnection dbCon = eCon.StoreConnection;
            //DbCommand dbCmd = dbCon.CreateCommand();
            //dbCmd.CommandText = "SEARCH.Stp_Get_SearchCriteria";
            //dbCmd.CommandType = CommandType.StoredProcedure;

            //dbCmd.Parameters.Add(new SqlParameter("@Tname", SqlDbType.VarChar));
            //dbCmd.Parameters["@Tname"].Value = tName;

            //dbCmd.Parameters.Add(new SqlParameter("@SearchCriteria", SqlDbType.VarChar));
            //dbCmd.Parameters["@SearchCriteria"].Value = searchCriteria;

            DataSet getDs = new DataSet();
            //CustomDbDataAdapter dbDA = new CustomDbDataAdapter();
            //dbDA.SelectCommand = dbCmd;
            //dbDA.Fill(getDs);
            return getDs;
        }

        //Method to get data dynamically depends on table name and search criteria.
        public DataSet GetDynamicTableData(string tName, string searchCriteria,int sessionid)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dBase.GetStoredProcCommand(Constants.Stp_Get_TableSearchCriteria);
                dBase.AddInParameter(dbCmd, "@IP_Tname", DbType.String, tName);
                dBase.AddInParameter(dbCmd, "@IP_SearchCriteria", DbType.String, searchCriteria);
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32,sessionid);
                DataSet getDs = dBase.ExecuteDataSet(dbCmd);
                return getDs;
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        //Entity Method to get Search Columns based on table name.
        public string GetSearchColumn(string tName)
        {
            string isDefaultColumn = string.Empty;
            //mEntity = new menuEntity();
            //EntityConnection eCon = (EntityConnection)mEntity.Connection;
            //DbConnection dbCon = eCon.StoreConnection;
            //DbCommand dbCmd = dbCon.CreateCommand();
            ////dbCmd.CommandText = "MASTERS.Stp_GetAll_TableColumnNames";
            //dbCmd.CommandText = "Stp_Get_DefaultSearchColumn";//Constants.Stp_GetAll_TableColumnNames;
            //dbCmd.CommandType = CommandType.StoredProcedure;
            //bool openConnection = dbCmd.Connection.State == ConnectionState.Closed;
            //if (openConnection)
            //{
            //    dbCmd.Connection.Open();
            //}
            //dbCmd.Parameters.Add(new SqlParameter("@TName", SqlDbType.VarChar));
            //dbCmd.Parameters["@TName"].Value = tName;

            //isDefaultColumn = dbCmd.ExecuteScalar().ToString();

            return isDefaultColumn;
        }

        //Method to get data based on Required column  name, table name,column names and values.
        public string GetViewData(string rColname, string tabName, string sColName, int sColValue)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                string descValue = null;
                DbCommand dbCmd = dBase.GetStoredProcCommand(Constants.Stp_Get_DynamicValue);
                dBase.AddInParameter(dbCmd, "@IP_RColName", DbType.String, rColname);
                dBase.AddInParameter(dbCmd, "@IP_TableName", DbType.String, tabName);
                dBase.AddInParameter(dbCmd, "@IP_SColName", DbType.String, sColName);
                dBase.AddInParameter(dbCmd, "@IP_SColValue", DbType.Int32, sColValue);
                IDataReader dbDR = dBase.ExecuteReader(dbCmd);
                while (dbDR.Read())
                {
                    descValue = dbDR[0].ToString();
                }
                return descValue;
            }
            catch (Exception ex)
            {
                ErrorHandler.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public bool InsertData(FinancialWorkFlow aw, out int cntId)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.InsertData(aw,out cntId);
        }
        public string Getcode(ServiceAutoCode sac, string code)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.GetCode(sac, code);

        }
        public CollectionBase GetGridFinancialworkflow(GridPaging gPage, out int total_records)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.GetGridFinancialworkflow(gPage,out total_records);
        }
        public bool Delete(string del)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.Delete(del);
        }
        public List<ListElements> AutoExtender(string prefixText, int count, string contextKey)
        {
            DBdynamicmaster DB = new DBdynamicmaster();
            return DB.AutoExtender(prefixText,count,contextKey);
        }
        public CollectionBase EditFinancial(FinancialWorkFlow fwf)
        {

            DBdynamicmaster db = new DBdynamicmaster();
            return db.EditFinancial(fwf);
        }
        
        #region Dynamic Document Master
        public bool SaveDocumentAttributes(ADT_DSCHRG_SUM obj)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.SaveDocumentAttributes(obj);
        }
        public CollectionBase GetDocumentAttributesByDocId(int docId)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.GetDocumentAttributesByDocId(docId);

        }
        public CollectionBase GetDocumentsByModId(GridPaging gpage, out int total_records)
        {
            DBdynamicmaster db = new DBdynamicmaster();
            return db.GetDocumentsByModId(gpage,out total_records);
        }
        #endregion Dynamic Document Master
    }

    #endregion
    
}
