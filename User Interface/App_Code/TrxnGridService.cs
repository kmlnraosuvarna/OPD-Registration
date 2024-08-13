using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using Newtonsoft.Json;
using System.Collections;
using EzHms.DataAccessObject;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Web.Script.Serialization;
using System.Text;
using System.Web.Script.Services;
using System.Data.SqlClient;
using Microsoft.CSharp;
using System.Configuration;

/// <summary>
/// Summary description for TrxnGridService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class TrxnGridService : System.Web.Services.WebService
{

    public TrxnGridService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public void downloadFile(string ProcName,
                            string FromDate,
                            string ToDate,
                            string ColumnName,
                            string PrefixText,
                            string FilterBy,
                            string AdvanceSearch,
                            string Flag,
                            int PageNum,
                            int PageSize,
                            int Count,
                            int SessionID,
                            string AdmnType,
                            string ReferenceType,
                            string IsOSP,
                            string Sort,
                            string DocID,
                            string BindColumns)
    {
        DBReport dbRep = new DBReport();
        SessionID = SessionHandler.DBSESSION_ID;
        try
        {
            PageNum = 0;
            PageSize = 0;
            AdvanceSearch = "";
            Sort = "";
            DataTable dtable = ExecuteQuery(ProcName,
                                            FromDate,
                                            ToDate,
                                            ColumnName,
                                            PrefixText,
                                            FilterBy,
                                            AdvanceSearch,
                                            Flag,
                                            PageNum,
                                            PageSize,
                                            Count,
                                            SessionID,
                                            AdmnType,
                                            ReferenceType,
                                            IsOSP,
                                            Sort,
                                            DocID);

            DataTable dtOrg = GetOrgDets(SessionID);

            ArrayList arlTitle = new ArrayList();
            ArrayList arlDBCol = new ArrayList();

            var jsonBindColumns = JsonConvert.DeserializeObject(BindColumns, typeof(object)) as ICollection;

            foreach (var bindItem in jsonBindColumns)
            {
                DataBindColumns dataBindColumn = JsonConvert.DeserializeObject<DataBindColumns>(bindItem.ToString());
                if (dataBindColumn.RenderType == "BindColumn")
                {
                    arlTitle.Add((string)dataBindColumn.Title);
                    arlDBCol.Add((string)dataBindColumn._bind);
                }
            }

            string html = "<table border='1'>";

            if (dtOrg.Rows.Count > 0)
            {
                DataTable dtDoc = SessionHandler.DocPermission.Tables[0];
                DataView dvDoc = dtDoc.DefaultView;
                dvDoc.RowFilter = "DOC_ID=" + SessionHandler.DOCUMENT_ID.ToString();
                dtDoc = dvDoc.ToTable();
                string docName = dtDoc.Rows[0]["DOC_NAME"].ToString();

                html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-SIZE:15PT;FONT-WEIGHT:BOLD'>" + dtOrg.Rows[0]["ORG_NAME"].ToString() + "</SPAN></td></tr>";
                html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>" + dtOrg.Rows[0]["ADDRESS1"].ToString() + ", " + dtOrg.Rows[0]["ADDRESS2"].ToString() + "</SPAN></td></tr>";
                html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>Phone: " + dtOrg.Rows[0]["OFFICE_PHONE"].ToString() + "</SPAN></td></tr>";
                html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>Report: " + docName + "</SPAN></td></tr>";
                html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-WEIGHT:BOLD'></SPAN></td></tr>";
            }

            html += "<tr>";
            for (int i = 0; i < arlTitle.Count; i++)
            {
                html += "<td style='background-color:#d6d5d7'><b>" + arlTitle[i].ToString() + "</b></td>";
            }
            html += "</tr>";

            for (int i = 0; i < dtable.Rows.Count; i++)
            {
                html += "<tr>";
                for (int j = 0; j < arlDBCol.Count; j++)
                {
                    var bgColor = (i % 2 != 0 ? "#f7f7f7" : "#ffffff");
                    html += "<td style='background-color:" + bgColor + "'>" + dtable.Rows[i][arlDBCol[j].ToString()].ToString() + "</td>";
                }
                html += "</tr>";
            }
            html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>Print By: " + SessionHandler.UserName + "</SPAN></td></tr>";
            html += "<tr><td colspan='" + arlDBCol.Count + "'><SPAN STYLE='FONT-WEIGHT:BOLD'>Print Date / Time: "+ DateTime.Now.ToString("dd-MMM-yyyy HH:mm:ss")  +"</SPAN></td></tr>";
            html += "</table>";

            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.ClearContent();
            HttpContext.Current.Response.ClearHeaders();

            HttpContext.Current.Response.AddHeader("content-disposition", "attachment; filename:Download.xls");
            HttpContext.Current.Response.ContentType = "application/vmd.xls";
            byte[] __bytes = Encoding.ASCII.GetBytes(html);
            HttpContext.Current.Response.BinaryWrite(__bytes);
            HttpContext.Current.Response.Flush();
            HttpContext.Current.Response.SuppressContent = true;
            HttpContext.Current.ApplicationInstance.CompleteRequest();
            //HttpContext.Current.Response.End();
        }
        catch (Exception ex)
        {
            System.Threading.Thread.ResetAbort();
        }
    }

    [WebMethod(EnableSession = true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string GetTransactionGridData(string ProcName,
                                        string FromDate,
                                        string ToDate,
                                        string ColumnName,
                                        string PrefixText,
                                        string FilterBy,
                                        string AdvanceSearch,
                                        string Flag,
                                        int PageNum,
                                        int PageSize,
                                        int Count,
                                        int SessionID,
                                        string AdmnType,
                                        string ReferenceType,
                                        string IsOSP,
                                        string Sort,
                                        string DocID)
    {
        try
        {
            SessionID = SessionHandler.DBSESSION_ID;
            DBReport dbRep = new DBReport();
            DataTable dtable = ExecuteQuery(ProcName,
                                            FromDate,
                                            ToDate,
                                            ColumnName,
                                            PrefixText,
                                            FilterBy,
                                            AdvanceSearch,
                                            Flag,
                                            PageNum,
                                            PageSize,
                                            Count,
                                            SessionID,
                                            AdmnType,
                                            ReferenceType,
                                            IsOSP,
                                            Sort,
                                            DocID);

            int noOfRec = 0, curPage = 0;
            double totPages = 0;
            if (dtable.Rows.Count > 0) { noOfRec = (int)dtable.Rows[0]["TOT_RECORD_CNT"]; }
            curPage = PageNum;
            totPages = Math.Ceiling(noOfRec * 1.0 / PageSize * 1.0);

            int startRow = (((PageNum - 1) * PageSize) + 1);
            int lastRow = Math.Min(PageNum * PageSize, noOfRec);

            string headerInfo = "{\"FootNote\":\"" + startRow.ToString() + " to " + lastRow.ToString() + " from " + noOfRec.ToString() + " Records\", " +
                                    "\"StartIndex\":\"" + startRow.ToString() + "\", " +
                                    "\"CurrentPage\":\"" + curPage.ToString() + "\", " +
                                    "\"TotalPages\":\"" + totPages.ToString() + "\"}";

            string reportHeader = "\"ReportMetaData\":" + headerInfo + ",";
            string reportData = "\"ReportData\":" + GetJsonString(dtable) + "";
            string reportOutput = "{" + reportHeader + reportData + "}";
            return reportOutput;
        }
        catch (Exception ex)
        {
            throw;
        }
        return "No Data Found.";
    }

    private DataTable ExecuteQuery(string ProcName,
                                    string FromDate,
                                    string ToDate,
                                    string ColumnName,
                                    string PrefixText,
                                    string FilterBy,
                                    string AdvanceSearch,
                                    string Flag,
                                    int PageNum,
                                    int PageSize,
                                    int Count,
                                    int SessionID,
                                    string AdmnType,
                                    string ReferenceType,
                                    string IsOSP,
                                    string Sort,
                                    string DocID)
    {
        string sCon = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
        SqlConnection myConnection = new SqlConnection();
        myConnection.ConnectionString = sCon;
        SqlCommand oCmd = new SqlCommand();
        SqlDataAdapter oDA = new SqlDataAdapter();
        DataSet oDS = new DataSet();
        oCmd.Connection = new SqlConnection(sCon);
        oCmd.CommandType = CommandType.StoredProcedure;
        oCmd.CommandText = ProcName;

        FromDate = FromDate.Split('T')[0];
        ToDate = ToDate.Split('T')[0];
        if (FromDate != "") oCmd.Parameters.AddWithValue("@IP_FROM_DT", FromDate);
        if (ToDate != "") oCmd.Parameters.AddWithValue("@IP_TO_DT", ToDate);
        if (ColumnName != "") oCmd.Parameters.AddWithValue("@IP_COLUMN_NAME", ColumnName);
        if (PrefixText != "") oCmd.Parameters.AddWithValue("@IP_PREFIX_TEXT", PrefixText);
        if (FilterBy != "") oCmd.Parameters.AddWithValue("@IP_FILTER_BY", FilterBy);
        if (AdvanceSearch != "")
        {
            //[{Field:"",DataType:"",Criteria:"", Values:"[]" }]
            var jsonAdvSearch = JsonConvert.DeserializeObject(AdvanceSearch, typeof(object)) as ICollection;
            string sAdvSearch = "";
            foreach (var searchItem in jsonAdvSearch)
            {
                AdvanceSearch advSearch = JsonConvert.DeserializeObject<AdvanceSearch>(searchItem.ToString());

                string searchField = (string)advSearch.Field;
                string dataType = (string)advSearch.DataType;
                string searchOperator = (string)advSearch.Criteria;
                string searchValue1 = (string)advSearch.Values[0];
                string searchValue2 = "";//((string)advSearch.Values.length > 1 ? (string)advSearch.Values[0][1] : null);

                if (searchValue1 != "")
                {
                    switch (searchOperator.ToLower())
                    {
                        case "contains": sAdvSearch += searchField + " like '%" + searchValue1 + "%' AND "; break;
                        case "begin with": sAdvSearch += searchField + " like '" + searchValue1 + "%' AND "; break;
                        case "end with": sAdvSearch += searchField + " like '%" + searchValue1 + "' AND "; break;
                        case "between": sAdvSearch += searchField + " between '" + searchValue1 + "' and '" + searchValue2 + "' AND "; break;
                        default: sAdvSearch += searchField + " " + searchOperator + " '" + searchValue1 + "' AND "; break;
                    }
                }
            }
            if (sAdvSearch.Length > 0)
            {
                sAdvSearch = sAdvSearch.Substring(0, sAdvSearch.Length - 5);
                oCmd.Parameters.AddWithValue("@IP_ADVANCE_SEARCH", sAdvSearch);
            }
        }
        if (Flag != "") oCmd.Parameters.AddWithValue("@IP_FLAG", Flag);
        oCmd.Parameters.AddWithValue("@IP_PAGENUM", PageNum);
        oCmd.Parameters.AddWithValue("@IP_PAGESIZE", PageSize);
        if (Count != 0) oCmd.Parameters.AddWithValue("@IP_COUNT", Count);
        if (SessionID != 0) oCmd.Parameters.AddWithValue("@IP_SESSION_ID", SessionID);
        if (AdmnType != "") oCmd.Parameters.AddWithValue("@IP_ADMIN_TYPE_ID", AdmnType);
        if (ReferenceType != "") oCmd.Parameters.AddWithValue("@IP_REFERENCE_TYPE_ID", ReferenceType);
        if (IsOSP != "") oCmd.Parameters.AddWithValue("@IP_IS_OSP", IsOSP);
        if (DocID != "") oCmd.Parameters.AddWithValue("@IP_DOC_ID", DocID);
        oDA.SelectCommand = oCmd;
        oDA.Fill(oDS);
        DataTable oDT = oDS.Tables[0];
        myConnection.Close();

        if (Sort != "")
        {
            //[{Field:"",Direction:""}]
            var jsonSort = JsonConvert.DeserializeObject(Sort, typeof(object)) as ICollection;
            string sSortBy = "";
            foreach (var sortItem in jsonSort)
            {
                DataSort dSort = JsonConvert.DeserializeObject<DataSort>(sortItem.ToString());
                string sortField = (string)dSort.Field;
                string sortDirection = (string)dSort.Direction;
                sSortBy += sortField + " " + sortDirection + ", "; break;
            }
            if (sSortBy.Length > 0)
            {
                sSortBy = sSortBy.Substring(0, sSortBy.Length - 2);

                oDT.DefaultView.Sort = sSortBy;
                oDT = oDT.DefaultView.ToTable();

                //oCmd.Parameters.AddWithValue("@IP_SORT_BY", sSortBy);
            }
        }

        return oDT;
    }

    private DataTable GetOrgDets(int SessionID)
    {
        string sCon = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
        SqlConnection myConnection = new SqlConnection();
        myConnection.ConnectionString = sCon;
        SqlCommand oCmd = new SqlCommand();
        SqlDataAdapter oDA = new SqlDataAdapter();
        DataSet oDS = new DataSet();
        oCmd.Connection = new SqlConnection(sCon);
        oCmd.CommandType = CommandType.StoredProcedure;
        oCmd.CommandText = "PR_GET_ORG_DET";
        oCmd.Parameters.AddWithValue("@IP_SESSION_ID", SessionID);
        oDA.SelectCommand = oCmd;
        oDA.Fill(oDS);
        DataTable oDT = oDS.Tables[0];
        myConnection.Close();

        return oDT;
    }

    private string GetJsonString(DataTable lvDt)
    {
        //JavaScriptSerializer Serializer = new JavaScriptSerializer();
        //List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
        //Dictionary<string, object> row = null;
        try
        {
            //foreach (DataRow lvDr in lvDt.Rows)
            //{
            //    row = new Dictionary<string, object>();
            //    foreach (DataColumn lvCol in lvDt.Columns)
            //    {
            //        row.Add(lvCol.ColumnName, lvDr[lvCol]);
            //    }
            //    rows.Add(row);
            //}
            //return Serializer.Serialize(rows);
            string result = string.Empty;
            if (lvDt != null)
            {
                result = JsonConvert.SerializeObject(lvDt, Formatting.Indented);
            }
            return result;
        }
        catch (Exception Ex)
        {
            return null;
        }
        //finally
        //{
        //    lvDt.Dispose();
        //    Serializer = null;
        //    rows = null;
        //    row = null;
        //}
    }

    public class AdvanceSearch
    {
        public string Field { get; set; }
        public string DataType { get; set; }
        public string Criteria { get; set; }
        public string[] Values { get; set; }
    }

    public class DataSort
    {
        public string Field { get; set; }
        public string Direction { get; set; }
    }

    public class DataBindColumns
    {
        public string Title { get; set; }
        public string _bind { get; set; }
        public string RenderType { get; set; }
    }


    public class DBReport
    {
        public DataTable ExecuteQuery(string ProcName,
                                string FromDate,
                                string ToDate,
                                string ColumnName,
                                string PrefixText,
                                string FilterBy,
                                string AdvanceSearch,
                                string Flag,
                                int PageNum,
                                int PageSize,
                                int Count,
                                int SessionID,
                                string AdmnType,
                                string ReferenceType,
                                string IsOSP,
                                string Sort)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, ProcName);

            if (FromDate != "") dBase.AddInParameter(dCmd, "@IP_FROM_DT", DbType.String, FromDate);
            if (ToDate != "") dBase.AddInParameter(dCmd, "@IP_TO_DT", DbType.String, ToDate);
            if (ColumnName != "") dBase.AddInParameter(dCmd, "@IP_COLUMN_NAME", DbType.String, ColumnName);
            if (PrefixText != "") dBase.AddInParameter(dCmd, "@IP_PREFIX_TEXT", DbType.String, PrefixText);
            if (FilterBy != "") dBase.AddInParameter(dCmd, "@IP_FILTER_BY", DbType.String, FilterBy);

            if (AdvanceSearch != "")
            {
                //[{Field:"",DataType:"",Criteria:"", Values:"[]" }]
                var jsonAdvSearch = JsonConvert.DeserializeObject(AdvanceSearch, typeof(object)) as ICollection;
                string sAdvSearch = "";
                foreach (var searchItem in jsonAdvSearch)
                {
                    AdvanceSearch advSearch = JsonConvert.DeserializeObject<AdvanceSearch>(searchItem.ToString());

                    string searchField = (string)advSearch.Field;
                    string dataType = (string)advSearch.DataType;
                    string searchOperator = (string)advSearch.Criteria;
                    string searchValue1 = (string)advSearch.Values[0];
                    string searchValue2 = "";//((string)advSearch.Values.length > 1 ? (string)advSearch.Values[0][1] : null);

                    if (searchValue1 != "")
                    {
                        switch (searchOperator.ToLower())
                        {
                            case "contains": sAdvSearch += searchField + " like '%" + searchValue1 + "%' AND "; break;
                            case "begin with": sAdvSearch += searchField + " like '" + searchValue1 + "%' AND "; break;
                            case "end with": sAdvSearch += searchField + " like '%" + searchValue1 + "' AND "; break;
                            case "between": sAdvSearch += searchField + " between '" + searchValue1 + "' and '" + searchValue2 + "' AND "; break;
                            default: sAdvSearch += searchField + " " + searchOperator + " '" + searchValue1 + "' AND "; break;
                        }
                    }
                }
                if (sAdvSearch.Length > 0)
                {
                    sAdvSearch = sAdvSearch.Substring(0, sAdvSearch.Length - 5);
                    dBase.AddInParameter(dCmd, "@IP_ADVANCE_SEARCH", DbType.String, sAdvSearch);
                }
            }
            if (Flag != "") dBase.AddInParameter(dCmd, "@IP_FLAG", DbType.String, Flag);
            dBase.AddInParameter(dCmd, "@IP_PAGENUM", DbType.String, PageNum);
            dBase.AddInParameter(dCmd, "@IP_PAGESIZE", DbType.String, PageSize);
            if (Count != 0) dBase.AddInParameter(dCmd, "@IP_COUNT", DbType.String, Count);
            if (SessionID != 0) dBase.AddInParameter(dCmd, "@IP_SESSION_ID", DbType.String, SessionID);
            if (AdmnType != "") dBase.AddInParameter(dCmd, "@IP_ADMIN_TYPE_ID", DbType.String, AdmnType);
            if (ReferenceType != "") dBase.AddInParameter(dCmd, "@IP_REFERENCE_TYPE_ID", DbType.String, ReferenceType);
            if (IsOSP != "") dBase.AddInParameter(dCmd, "@IP_IS_OSP", DbType.String, IsOSP);
            if (Sort != "")
            {
                //[{Field:"",Direction:""}]
                var jsonSort = JsonConvert.DeserializeObject(Sort, typeof(object)) as ICollection;
                string sSortBy = "";
                foreach (var sortItem in jsonSort)
                {
                    DataSort dSort = JsonConvert.DeserializeObject<DataSort>(sortItem.ToString());
                    string sortField = (string)dSort.Field;
                    string sortDirection = (string)dSort.Direction;
                    sSortBy += sortField + " " + sortDirection + ", "; break;
                }
                if (sSortBy.Length > 0)
                {
                    sSortBy = sSortBy.Substring(0, sSortBy.Length - 2);
                    dBase.AddInParameter(dCmd, "@IP_SORT_BY", DbType.String, sSortBy);
                }
            }

            DataSet dsReport = dbLayer.ExecuteDataSet(dCmd);
            return dsReport.Tables[0];
        }

        public DataTable GetOrgDets()
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ORG_DET");

            DataSet dsReport = dbLayer.ExecuteDataSet(dCmd);
            return dsReport.Tables[0];
        }
    }
}
