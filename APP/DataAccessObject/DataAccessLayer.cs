using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Collections;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;

namespace EzHms.DataAccessObject
{
    public class DataAccessLayer : DataAccessLayerBaseClass
    {
        private List<ListElements> ExecuteReaderCmd(DbCommand cmd, GenerateCollectionFromReader gcfr)
        {
            DbConnection connection = null;
            try
            {
                if (this.DBaseFactory == null)
                    throw (new ArgumentNullException("dbFactory"));
                connection = this.DBaseFactory.CreateConnection();
                if (connection == null)
                    throw (new ArgumentException("Unable to connect to the SqlServer"));
                if (connection.State != ConnectionState.Open)
                    connection.Open();
                return gcfr(this.DBaseFactory.ExecuteReader(cmd));

            }
            catch (Exception)
            {
                return null;
            }
            finally
            {
                if (connection != null)
                    connection.Close();
            }
        }

        public List<ListElements> ExecuteReadercmd(DbCommand cmd)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                try
                {
                    if (connection == null)
                        throw (new ArgumentException("Unable to connect to the SqlServer"));
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    //for getting the data based on location
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    }

                    GenerateCollectionFromReader gcfr = new GenerateCollectionFromReader(GenerateCollectionListFromReader);
                    cmd.CommandTimeout = Convert.ToInt32(System.Web.HttpContext.Current.Session["ExecutionTime"]);
                    return gcfr(this.DBaseFactory.ExecuteReader(cmd));
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
        }
        /// <summary>
        /// Add the parameters on the basis of different data providers
        /// </summary>
        /// <param name="cmd"></param>
        /// <returns></returns>
        DbCommand GetParametersList(DbCommand cmd)
        {
            DbCommand _db_aditional_cmd = SetCommandType(CommandType.Text, "SELECT * FROM PROCEDURE_PARAMETERS WHERE PROCEDURE_NAME ='" + cmd.CommandText + "'");
            IDataReader reader = this.DBaseFactory.ExecuteReader(_db_aditional_cmd);
            while (reader.Read())
            {
                string pName = reader["PARAMETER_NAME"].ToString();
                if (!cmd.Parameters.Contains(pName))
                {
                    this.DBaseFactory.AddInParameter(cmd, pName, DbType.Object, null);
                }
            }
            return cmd;
        }

        public object GetParameterValue(DbCommand dbCmd, string outParameter)
        {
            return this.DBaseFactory.GetParameterValue(dbCmd, outParameter);
        }

        public CollectionBase ExecuteReaderCommand(DbCommand cmd, GenerateCollectionReader reader)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                IDataReader _dataReader = null;
                try
                {
                    if (connection == null)
                        throw (new ArgumentException("Unable to connect to the SqlServer"));
                    if (connection.State != ConnectionState.Open)
                    {
                        connection.Open();
                        

                    }
                    //   for getting the data based on location
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    }

                    //if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
                    //    cmd = this.GetParametersList(cmd);
                    //cmd.CommandTimeout = 0;
                    cmd.CommandTimeout = Convert.ToInt32(System.Web.HttpContext.Current.Session["ExecutionTime"]);
                    _dataReader = this.DBaseFactory.ExecuteReader(cmd);
                    return reader(_dataReader);
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    if (_dataReader != null)
                        _dataReader.Close();
                    connection.Close();
                }
            }
        }

        public object ExecuteReaderObject(DbCommand cmd, GenerateCollectionReader reader)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                IDataReader _dataReader = null;
                try
                {
                    if (connection == null)
                        throw (new ArgumentException("Unable to connect to the SqlServer"));
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    //   for getting the data based on location
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    }

                    //if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
                    //    cmd = this.GetParametersList(cmd);
                    _dataReader = this.DBaseFactory.ExecuteReader(cmd);
                    cmd.CommandTimeout = Convert.ToInt32(System.Web.HttpContext.Current.Session["ExecutionTime"]);
                    return reader(_dataReader);
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    if (_dataReader != null)
                        _dataReader.Close();
                    connection.Close();
                }
            }
        }


        public object ExecuteScalar(DbCommand cmd)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                try
                {
                    if (connection == null)
                        throw (new ArgumentException("Unable to connect to the SqlServer"));
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    //for getting the data based on location
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    }

                    if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
                        cmd = this.GetParametersList(cmd);
                    return this.DBaseFactory.ExecuteScalar(cmd);
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public CollectionBase ExecuteReaderCommand(DbCommand cmd, GenerateCollectonList reader, IList _collection)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                IDataReader _dataReader = null;
                if (connection == null)
                    throw (new ArgumentException("Unable to connect to the SqlServer"));
                try
                {
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    }
                    cmd.CommandTimeout = Convert.ToInt32(System.Web.HttpContext.Current.Session["ExecutionTime"]);
                    _dataReader = this.DBaseFactory.ExecuteReader(cmd);
                    return reader(_dataReader, _collection);
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    if (_dataReader != null)
                        _dataReader.Close();
                    connection.Close();
                }
            }
        }

        //public override List<ListElements> GetServiceCollection()
        //{
        //    Database dbsvc = this.DBaseFactory;
        //    DbCommand cmd = SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.GET_ALL_SERVICES);
        //    GenerateCollectionFromReader sqlData = new GenerateCollectionFromReader(GenerateCollectionListFromReader);
        //    List<ListElements> results = ExecuteReaderCmd(cmd,sqlData);
        //    return results;
        //}

        //public List<ListElements> GetAllServicesByCode(string billCD)
        //{
        //    DataAccessLayer dbLayer = new DataAccessLayer();
        //    Database dBase = dbLayer.DBaseFactory;
        //    DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.STP_GET_SERVICES_ASSIGNED);
        //    dBase.AddInParameter(dbCmd, "@BILLINGHEAD_CD", DbType.String, billCD);
        //    GenerateCollectionFromReader sqlData = new GenerateCollectionFromReader(GenerateCollectionListFromReader);
        //    List<ListElements> results = ExecuteReaderCmd(dbCmd, sqlData);
        //    return results;
        //}

        //public List<ListElements> GetUnAssignServiceCollection()
        //{
        //    Database dbsvc = this.DBaseFactory;
        //    DbCommand cmd = SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.GET_ALL_UNASSIGN_SERVICES);
        //    GenerateCollectionFromReader sqlData = new GenerateCollectionFromReader(GenerateCollectionListFromReader);
        //    List<ListElements> results = ExecuteReaderCmd(cmd, sqlData);
        //    return results;
        //}

        //public int ExecuteNonQuery(DbCommand cmd)
        //{
        //    //for getting the data based on location
        //    if (this.DBaseFactory == null)
        //        throw (new ArgumentNullException("dbFactory"));
        //    using (DbConnection connection = this.DBaseFactory.CreateConnection())
        //    {
        //        if (connection == null)
        //            throw (new ArgumentException("Unable to connect to the SqlServer"));
        //        try
        //        {
        //            if (connection.State != ConnectionState.Open)
        //                connection.Open();
        //            if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
        //            {
        //                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
        //                this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
        //            }
        //            if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
        //                cmd = this.GetParametersList(cmd);
        //            return this.DBaseFactory.ExecuteNonQuery(cmd);
        //        }
        //        catch (Exception ex)
        //        {
        //            throw new ArgumentException(ex.Message);
        //        }
        //        finally
        //        {
        //            connection.Close();
        //        }
        //    }
        //}

        public bool ExecuteNonQuery(DbCommand cmd)
        {
            //for getting the data based on location
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                if (connection == null)
                    throw (new ArgumentException("Unable to connect to the SqlServer"));
                try
                {
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    {
                        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                        this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    }

                    if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
                        cmd = this.GetParametersList(cmd);
                    cmd.CommandTimeout = Convert.ToInt32(System.Web.HttpContext.Current.Session["ExecutionTime"]);
                    if (this.DBaseFactory.ExecuteNonQuery(cmd) > 0)
                    {
                        return true;
                    }
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
            return false;
        }

        public DbCommand SetCommandType(CommandType commandType, string sqlCmd)
        {
            DbCommand cmd = null;
            switch (commandType)
            {
                case CommandType.StoredProcedure:
                    cmd = this.DBaseFactory.GetStoredProcCommand(sqlCmd);
                    break;
                case CommandType.Text:
                    cmd = this.DBaseFactory.GetSqlStringCommand(sqlCmd);
                    break;
            }
            return cmd;
        }

        public void AddInParameter(DbCommand cmd, string name, DbType dbType, object value)
        {
            this.DBaseFactory.AddInParameter(cmd, name, dbType, value);
        }

        public void AddOutParameter(DbCommand cmd, string name, DbType dbType, int size)
        {
            this.DBaseFactory.AddOutParameter(cmd, name, dbType, size);
        }

        public DataSet ExecuteDataSet(DbCommand dbCmd)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                try
                {
                    if (connection == null)
                        throw (new ArgumentException("Unable to connect to the SqlServer"));
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    //for getting the data based on location
                    //if (DBaseFactory.GetParameterValue(dbCmd, DALConstants.SESSION_ID_PARM) == null)
                    //{
                    //    if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    //    {
                    //        int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    //        this.DBaseFactory.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
                    //    }
                    //}

                    if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
                        dbCmd = this.GetParametersList(dbCmd);
                    dbCmd.CommandTimeout = Convert.ToInt32(System.Web.HttpContext.Current.Session["ExecutionTime"]);
                    return this.DBaseFactory.ExecuteDataSet(dbCmd);
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public IDataReader ExecuteReader(DbCommand cmd)
        {
            if (this.DBaseFactory == null)
                throw (new ArgumentNullException("dbFactory"));
            using (DbConnection connection = this.DBaseFactory.CreateConnection())
            {
                IDataReader _dataReader = null;
                try
                {
                    if (connection == null)
                        throw (new ArgumentException("Unable to connect to the SqlServer"));
                    if (connection.State != ConnectionState.Open)
                        connection.Open();
                    //   for getting the data based on location
                    //if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                    //{
                    //    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    //    this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    //}

                    //if (this.DBaseFactory.GetParameterValue(cmd, DALConstants.SESSION_ID_PARM) == null)
                    //{
                    //    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    //    this.DBaseFactory.AddInParameter(cmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                    //}

                    //if (!this.DBaseFactory.DbProviderFactory.ToString().Equals("System.Data.SqlClient.SqlClientFactory"))
                    //    cmd = this.GetParametersList(cmd);
                    _dataReader = this.DBaseFactory.ExecuteReader(cmd);
                    return _dataReader;
                }
                catch (Exception ex)
                {
                    throw new ArgumentException(ex.Message);
                }
                finally
               {
                //    if (_dataReader != null)
                //        _dataReader.Close();
                    connection.Close();
                }
            }
        }

        //internal List<ListElements> ExecuteReader(DbCommand dbCmd)
        //{
        //    throw new NotImplementedException();
        //}

        internal IDataReader ExecuteReadercmd()
        {
            throw new NotImplementedException();
        
        }
        public CollectionBase GenerateGridList(IDataReader returnData)
        {
            try
            {
                GridCollection userCol = new GridCollection();
                ArrayList arraylist = new ArrayList();
                Optimization(returnData, arraylist);
                userCol.Add(arraylist);
                return userCol;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateUserList").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public ArrayList Optimization(IDataReader ds, ArrayList arraylist)
        {
            while (ds.Read())
            {
                var dict = new Dictionary<object, object>();
                for (int i = 0; i < ds.FieldCount; i++)
                {
                    dict[ds.GetName(i)] = ds.GetValue(i);
                }
                arraylist.Add(dict);
            }
            return arraylist;
        }
        public List<object> ConvertDataSetToList(DataSet ds, List<object> list)
        {
            if (ds != null)
            {
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables.Count; i++)
                    {
                        DataTable dt = ds.Tables[i];
                        ArrayList arraylist = new ArrayList();
                        foreach (DataRow row in dt.Rows)
                        {
                            var dict = new Dictionary<string, object>();
                            foreach (DataColumn col in dt.Columns)
                            {
                                dict[col.ColumnName] = row[col];
                            }
                            arraylist.Add(dict);
                        }
                        list.Add(arraylist);
                    }
                }
                return list;
            }
            else
                return null;
        }
    }
}