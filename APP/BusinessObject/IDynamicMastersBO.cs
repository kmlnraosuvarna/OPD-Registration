#region Comments
// ClassName    : IDynamicMastersBO
// Description  : This Interface is used to Get Column Names based on table name 
                  //and to get table data based on table name and searchcriteria.
                  //DataBase Dynamic binding grid View.
// Author       : Naga Sankar J
// DateCreated  : 29/12/2009
// Modified By  :
// DateModified :
#endregion

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

//using System.Data.Objects;
using System.Data;
//using System.Data.Entity;
using System.Data.SqlClient;
using System.Data.Common;
using EzHms.ModelEntity;
using EzHms.BusinessObject;
using EzHms.DataAccessObject;
using System.Collections;


namespace EzHms.Abstract
{
    #region Interface IDynamicMastersBO
    public interface IDynamicMastersBO
    {
        DataSet GetTableColumnNames(string tName);
        DataSet GetColumnNames(string tName);
        DataSet BindGenericPagingData(string datasrc, string orderby, string fieldlist, string filter, string fields, int pageNumber, int pageSie);
        DataSet BindDynamicPagingData(string datasrc, string orderby, string fieldlist, string filter, string fields, int pageNumber, int pageSie, string fromdt, string todt);
        DataSet GetTableData(string tName, string searchCriteria);
        string GetSearchColumn(string tName);
        bool DynamicDMLQueryOperations(string query);
        DataSet DynamicDataset(string query);
        DataSet GetDynamicTableData(string tName, string searchCriteria,int sessionid);
        //bool DynamicDMLQueryExecution(string query, string colName, string tableName);
        bool DynamicDMLQueryExecution(string query, string colName, string tableName, string dmlType, string searchCriteria);
        //bool CheckCodeExists(string tName, string searchCriteria);
        string GetViewData(string rColname, string tabName, string sColName, int sColValue);
      
        string GetCode(ServiceAutoCode autocode, string code);
        CollectionBase GetGridFinancialworkflow(GridPaging gPage, out int total_records);
        bool Delete(string del);
        string[] IFinancialautoextender(string prefixText, int count, string contextKey);
      
        CollectionBase GetDocumentAttributesByDocId(int docId);
        CollectionBase GetDocumentsByModId(GridPaging gpage, out int total_records);
        DataSet BindPAymentModes(string query, int session_id);
    } 
    #endregion
}
