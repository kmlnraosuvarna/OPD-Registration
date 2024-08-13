using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;
using System.Collections;
using System.Data;
using EzHms.ModelEntity;
using Microsoft.Practices.EnterpriseLibrary.Data;

using System.Data.Common;

namespace EzHms.DataAccessObject
{
    public abstract class DataAccessLayerBaseClass : IGenerateReaderCollection,IDisposable
    {

        private Database dbfactory = null;
        public Database DBaseFactory
        {
            get
            {
                //dbfactory = DatabaseFactory.CreateDatabase(this.ConnectionString);

                string Encryptedstr = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings[this.ConnectionString].ToString(), true);
                dbfactory = CreateDatabase(Encryptedstr);

                DbConnection con = dbfactory.CreateConnection();
                if (con.State == ConnectionState.Open)
                {
                    con.Open();
                }
                con.Close();
                return dbfactory;
            }
            set
            {
                dbfactory = value;
            }
        }
        public DbTransaction Transaction
        {
            get
            { 
                DbConnection con = dbfactory.CreateConnection();
                con.Open();
                return con.BeginTransaction();
            }
        }

        //public DbConnection Connection
        //{
        //    get
        //    {
        //        //DbConnection connection = this.DBaseFactory.CreateConnection();
        //        //    if (connection.State != ConnectionState.Open)
        //        //        connection.Open();
        //        //    return connection;
        //        //Database DBaseFacotry = DatabaseFactory.CreateDatabase(this._connectionString);
        //        DbConnection connection = dbfactory.CreateConnection(); // DBaseFactory.CreateConnection();
        //            if (connection.State != ConnectionState.Open)
        //                connection.Open();
        //            return connection;
        //    }
        //}

        private string _connectionString;

        /*** PROPERTIES ***/

        public string ConnectionString
        {
            get
            {
                string str=string.Empty;
                if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
                    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
                else
                    str = "SuvarnaDB";
                if (str == null || str.Length <= 0)
                    throw (new ApplicationException("ConnectionString configuration is missing from you web.config. It should contain  <appSettings><add key=\"ConnectionString\" value=\"database=IssueTrackerStarterKit;server=localhost;Trusted_Connection=true\" /></appSettings> "));
                else
                    return (str);
            }
            set { _connectionString = value; }
        }

        public static Database CreateDatabase(string databaseName)
        {
            string dbFactory = "System.Data.SqlClient";
            return new GenericDatabase(databaseName, DbProviderFactories.GetFactory(dbFactory));
        }

        protected delegate List<ListElements> GenerateCollectionFromReader(IDataReader returnData);
        

        //public abstract List<ListElements> GetServiceCollection();
        //public abstract void DbCommand();

        //*********************************************************************
        //
        // Generate Collection Helper Methods
        //
        // The following methods are used to generate collections of objects.
        //
        //*********************************************************************

        protected List<ListElements> GenerateCollectionListFromReader(IDataReader returnData)
        {
            List<ListElements> lstElements = new List<ListElements>();
            while (returnData.Read())
            {
                ListElements _element = new ListElements();
                _element.Text = returnData[1].ToString();
                _element.Value = returnData[0].ToString();
                lstElements.Add(_element);
            }
            returnData.Close();

            return lstElements;
        }

        #region IDisposable Members

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        #endregion
    }
}
