#region Comments
// ClassName    : DynamicMasterService
// Description  : Service to Implement Get Column Names based on Table Name.
                  //and to Get Table Data Based on Table Name and Search Criteria.
// Author       : Naga Sankar J
// DateCreated  : 29/12/2009
// Modified By  :
// DateModified :
#endregion

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using System.Data;
//using System.Data.Objects;
using System.Data.Common;
using System.Data.SqlClient;
//using System.Data.Entity;
//using System.Data.EntityClient;

using dynamicMasterBO = EzHms.BusinessObject.DynamicMastersBO;
using EzHms.Abstract;
using EzHms.BusinessObject;
using EzHms.DataAccessObject;
using EzHms.ModelEntity;
using EzHms.Services;
using System.Web.Script.Serialization;
using AjaxControlToolkit;
using System.Web.Script.Services;

namespace EzHms.Services
{
    /// <summary>
    /// Summary description for DynamicMasterService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    #region Service DynamicMasterServices
    public class DynamicMasterService : System.Web.Services.WebService, EzHms.Abstract.IDynamicMastersBO,EzHms.Abstract.ILookUpSearch
    {
        #region MemberVaiables.
        dynamicMasterBO dMBO; 
        #endregion
        public DynamicMasterService()
        {
            dMBO = new dynamicMasterBO();
            //Uncomment the following line if using designed components 
            //InitializeComponent(); 
        }

        [WebMethod]
        public DataSet GetColumnNames(string tName)
        {
            return dMBO.GetColumnName(tName);
        }

        [WebMethod]
        public DataSet GetTableColumnNames(string tName)
        {
            return dMBO.GetTableColumnNames(tName);
        }

        [WebMethod]
        public DataSet BindGenericPagingData(string datasrc, string orderby, string fieldlist, string filter, string fields, int pageNumber, int pageSie)
        {
            return dMBO.BindGenericPagingData(datasrc, orderby, fieldlist, filter, fields, pageNumber, pageSie);
        }

        [WebMethod]
        public DataSet BindDynamicPagingData(string datasrc, string orderby, string fieldlist, string filter, string fields, int pageNumber, int pageSie, string fromdt, string todt)
        {
            return dMBO.BindDynamicPagingData(datasrc, orderby, fieldlist, filter, fields, pageNumber, pageSie, fromdt, todt);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public bool DynamicDMLQueryOperations(string query)
        {
            return dMBO.DynamicDMLQueryOperations(query);
        }

        //[WebMethod]
        //public bool CheckCodeExists(string tName, string searchCriteria)
        //{
        //    return dMBO.CheckCodeExists(t8Name, searchCriteria);
        //}

        [WebMethod]
        public DataSet GetTableData(string tName, string searchCriteria)
        {
            return dMBO.GetTableData(tName, searchCriteria);
        }

        //[WebMethod]
        //public DataSet GetDynamicTableData(string tName, string searchCriteria)
        //{
        //    return dMBO.GetDynamicTableData(tName, searchCriteria);
        //}

        [WebMethod]
        public string GetSearchColumn(string tName)
        {
            return dMBO.GetSearchColumn(tName);
        }

        [WebMethod]
        public bool DynamicDMLQueryExecution(string query, string colName, string tableName,string dmlType,string SearchCriteria)
        {
            return dMBO.DynamicDMLQueryExecution(query, colName, tableName, dmlType, SearchCriteria);
        }

        [WebMethod]
        public string GetViewData(string rColname, string tabName, string sColName, int sColValue)
        {
            return dMBO.GetViewData(rColname, tabName, sColName, sColValue);
        }

        //[WebMethod]
        //public string GetInfo(string prefixText)
        //{
        //    int count = 10;

        //}

        #region ILookUpSearch Members
        [WebMethod]
        public System.Collections.CollectionBase GetLookUpSearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            return null;
            //throw new NotImplementedException();
        }

        #endregion

        #region IDynamicMastersBO Members


        public DataSet GetDynamicTableData(string tName, string searchCriteria, int sessionid)
        {
            //throw new NotImplementedException();
            return dMBO.GetDynamicTableData(tName, searchCriteria,sessionid);
        }

        #endregion

        //#region IDynamicMastersBO Members


        //public bool InsertData(EzHms.ModelEntity.Assayworkflow aw, out int cntId)
        //{
        //    dynamicMasterBO bo = new DynamicMastersBO();
        //    return bo.InsertData(aw,out cntId);
        //}

        //#endregion

        #region IDynamicMastersBO Members


        public string GetCode(ServiceAutoCode autocode, string code)
        {
            dynamicMasterBO bo = new DynamicMastersBO();
            return bo.Getcode(autocode,code);
        }

        #endregion

        #region IDynamicMastersBO Members


        public System.Collections.CollectionBase GetGridFinancialworkflow(GridPaging gPage, out int total_records)
        {
            dynamicMasterBO bo = new DynamicMastersBO();
            return bo.GetGridFinancialworkflow(gPage,out total_records);
        }

        #endregion

        #region IDynamicMastersBO Members


        #endregion

        #region IDynamicMastersBO Members


        public bool Delete(string del)
        {
            dynamicMasterBO bo = new DynamicMastersBO();
            return bo.Delete(del);
        }

        #endregion

        #region IDynamicMastersBO Members

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] IFinancialautoextender(string prefixText, int count, string contextKey)
        {
             
          // contextKey = Session["ContextKey"].ToString();
            dynamicMasterBO BO = new dynamicMasterBO();
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<ListElements> _lstElements = BO.AutoExtender(prefixText, count, contextKey);
            foreach (ListElements _element in _lstElements)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        
        }
        

        #endregion

        #region IDynamicMastersBO Members

        [WebMethod]
        public System.Collections.CollectionBase EditFinancial(FinancialWorkFlow fwf)
        {
            dynamicMasterBO dbo = new DynamicMastersBO();
            return dbo.EditFinancial(fwf);
           
        }

        #endregion

        #region IDynamicMastersBO Members

        [WebMethod]
        public DataSet DynamicDataset(string query)
        {
            dynamicMasterBO dbo = new DynamicMastersBO();
            return dbo.DynamicDataset(query);
        }
        [WebMethod]
        public DataSet BindPAymentModes(string query, int session_id)
        {
            dynamicMasterBO dbo = new DynamicMastersBO();
            return dbo.BindPAymentModes(query,session_id);
        }

        #endregion
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public bool UpdateServiceStatus(string SrvGroupID, string record_status)
        {
            string lblstus;
            bool msg;
            if (record_status == "A")
            {
                lblstus = "I";
            }
            else
            {
                lblstus = "A";
            }
            string str = "UPDATE DBO.SERVICE_GROUP  SET RECORD_STATUS='" + lblstus + "',SESSION_ID="+SessionHandler.DBSESSION_ID+",MODIFY_BY="+SessionHandler.UserID+" WHERE SERVICE_GROUP_ID = " + SrvGroupID;
            IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
            return msg = dMasters.DynamicDMLQueryOperations(str);
        }
        
        public bool SaveDocumentAttributes(ADT_DSCHRG_SUM obj)
        {
            dynamicMasterBO bo = new DynamicMastersBO();
            return bo.SaveDocumentAttributes(obj);
        }


        public CollectionBase GetDocumentAttributesByDocId(int docId)
        {
            dynamicMasterBO bo = new DynamicMastersBO();
            return bo.GetDocumentAttributesByDocId(docId);
        }
        public CollectionBase GetDocumentsByModId(GridPaging gpage, out int total_records)
        {
            dynamicMasterBO bo = new DynamicMastersBO();
            return bo.GetDocumentsByModId(gpage, out total_records);
        }
    } 
    #endregion
}

