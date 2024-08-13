using System;
using System.IO;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Web;
using System.Web.UI.WebControls;

using EzHms.ModelEntity;
using EzHms.BusinessObject;
using EzHms.DataAccessObject;
using EzHms.Services;
using EzHms.Abstract;


using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using System.Configuration;

public partial class Private_UserControls_ExportGrid : System.Web.UI.UserControl
{
    public string GridDivID
    {
        set
        {
            hdngriddivid.Value = value;
        }
    }
    public string FileName
    {
        set
        {
            hdnfilename.Value = value;
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    public DataSet ConvertDs()
    {

        GridPaging gpage = new GridPaging();
        ExportBindingClass concdb = new ExportBindingClass();
        string SpName = hdnExportSpName.Value;
        string RecordStatus = hdnRecordStatus.Value;
        string Flag = hdnExportFlag.Value;
        int DocId = Convert.ToInt32(SessionHandler.DOCUMENT_ID);
        string Referencetypeid = hdnExportReferencetypeid.Value;
        string fromDt = hdnFromDt.Value;
        string toDt = hdnToDt.Value;
        string filename = hdnfilename.Value;
        string dateparameter = hdndateparam.Value;
        DataSet ds = concdb.ExportDataBinding(SpName, Flag, DocId, Referencetypeid, fromDt, toDt, filename, dateparameter, RecordStatus);

        return ds;
    }

    //I Ashok Naidu
    protected void ddlExportData_SelectedIndexChanged(object sender, EventArgs e)
    {
        USER_DOC_AUDIT uda = new USER_DOC_AUDIT();
        //AuditTracking obj = new AuditTracking();
        //uda.DOC_ID = SessionHandler.DOCUMENT_ID;
        //uda.USER_ID = Convert.ToInt32(SessionHandler.UserID);
        //uda.ACTION_ID = 16;
        //uda.ACTION_IPTEXT = ddlExportData.SelectedItem.Text + ' ' + hdnsearchtext.Value;
        //obj.SaveAuditTracking(uda);

        string datetime = DateTime.Now.ToString();
        string pregstr = string.Empty;
        /* int _totalrecords = 0;
        DataSet ds = new DataSet();
        DataSet dsData = new DataSet();
         string Params = hdnExportParams.Value;
          if (Params.Split('&').Length > 2)
          {
              try
              {
                  string Encryptedstr = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
                  //dbfactory = CreateDatabase(Encryptedstr);
                  SqlConnection con = new SqlConnection(Encryptedstr);
                  SqlCommand cmd = null;
                  for (int i = 0; i < Params.Split('&').Length; i++)
                  {
                      if (Params.Split('&')[i].Split(':')[0] != "PROC" && Params.Split('&')[i].Split(':')[0] != "DOC_NAME" && Params.Split('&')[i].Split(':')[0] != "IP_PAGENUM" && Params.Split('&')[i].Split(':')[0] != "IP_PAGESIZE" && Params.Split('&')[i].Split(':')[1] != "null")
                      {
                          cmd.Parameters.AddWithValue(Params.Split('&')[i].Split(':')[0], Params.Split('&')[i].Split(':')[1]);
                      }
                      else if (Params.Split('&')[i].Split(':')[0] == "PROC")
                      {
                          cmd = new SqlCommand(Params.Split('&')[i].Split(':')[1], con);
                      }
                      else if (Params.Split('&')[i].Split(':')[0] == "DOC_NAME")
                      {
                          pregstr = Params.Split('&')[i].Split(':')[1] + pregstr;
                      }

                  }

                  cmd.Parameters.AddWithValue("OP_COUNT", 10);
                  cmd.Parameters["OP_COUNT"].Direction = ParameterDirection.Output;
                  cmd.Parameters.AddWithValue("IP_SESSION_ID", SessionHandler.DBSESSION_ID);
                  cmd.CommandType = CommandType.StoredProcedure;
                  if (pregstr == "" || pregstr == null)
                  {
                      pregstr = "Download List" + " " + datetime;
                  }
                  else
                  {
                      pregstr = pregstr + " " + datetime;
                  }
                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  da.Fill(ds);
                  _totalrecords = Convert.ToInt32(cmd.Parameters["OP_COUNT"].Value);

                  DataTable dt = dsData.Tables.Add("Grid");
                  string Columns = hdnExportColumns.Value;
                  for (int i = 0; i < Columns.Split('&').Length; i++)
                  {
                      dt.Columns.Add(Columns.Split('&')[i].Split(':')[0], Type.GetType("System.String"));
                  }
                  DataRow ROWIss = null;
                  for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                  {
                      ROWIss = dt.NewRow();
                      for (int j = 0; j < Columns.Split('&').Length; j++)
                      {
                          ROWIss[Columns.Split('&')[j].Split(':')[0]] = ds.Tables[0].Rows[i][Columns.Split('&')[j].Split(':')[1]];
                      }
                      dt.Rows.Add(ROWIss);
                  }
              }
              catch (Exception ex)
              {
                  File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\errorlog.txt", DateTime.Now + " :: " + ex.Message + Environment.NewLine);
              }
          }
          else
          {
              dsData = ConvertDs();
          } 
          if (dsData != null)
          {
              DropDownList theList = sender as DropDownList;
              if (theList.SelectedItem.Text == "Excel")
              {
                  //IsSelected = true;
                  //ResetDropdownIndex();
                  Response.Clear();
                  Response.AddHeader("content-disposition", "attachment;filename=" + pregstr + ".xls");
                  Response.Charset = string.Empty;
                  Response.Cache.SetCacheability(HttpCacheability.NoCache);
                  Response.ContentType = "application/vnd.xls";
                  System.IO.StringWriter stringWrite = new System.IO.StringWriter();
                  System.Web.UI.HtmlTextWriter htmlWrite = new System.Web.UI.HtmlTextWriter(stringWrite);
                  HIMS.NET.DataSetExport.Convert(dsData, Response);
              }

              if (theList.SelectedItem.Text == "Word")
              {
                  Response.Clear();
                  Response.AddHeader("content-disposition", "attachment;filename=" + pregstr + ".doc");
                  Response.Charset = string.Empty;
                  Response.Cache.SetCacheability(HttpCacheability.NoCache);
                  Response.ContentType = "application/vnd.word";

                  System.IO.StringWriter stringWrite = new System.IO.StringWriter();
                  System.Web.UI.HtmlTextWriter htmlWrite = new System.Web.UI.HtmlTextWriter(stringWrite);
                  HIMS.NET.DataSetExport.Convert(dsData, Response);
              }

              if (theList.SelectedItem.Text == "CSV")
              {
                  Response.Clear();
                  Response.AddHeader("content-disposition", "attachment;filename=" + pregstr + ".txt");
                  Response.Charset = string.Empty;
                  Response.Cache.SetCacheability(HttpCacheability.NoCache);
                  Response.ContentType = "application/vnd.text";

                  System.IO.StringWriter stringWrite = new System.IO.StringWriter();
                  System.Web.UI.HtmlTextWriter htmlWrite = new System.Web.UI.HtmlTextWriter(stringWrite);
                  HIMS.NET.DataSetExport.Convert(dsData, Response);
              }
          }
          */
        try
        {
            
            if (pregstr == string.Empty)
                pregstr = hdnfilename.Value;
            if (pregstr == "" || pregstr == null)
            {
                pregstr = "Download List" + " " + datetime;
            }
            else
            {
                pregstr = pregstr + " " + datetime;
            }
            string html = hdndata.Value;
            html = html.Replace("&gt;", ">");
            html = html.Replace("&lt;", "<");
            if (ddlExportData.SelectedItem.Text == "Excel")
            {
                Response.ClearContent();
                Response.AddHeader("content-disposition", "attachment;filename=" + pregstr + ".xls");
                Response.ContentType = "application/vnd.xls";
                Response.Write(html);
                Response.End();
            }
            if (ddlExportData.SelectedItem.Text == "Word")
            {
                Response.Clear();
                Response.AddHeader("content-disposition", "attachment;filename=" + pregstr + ".doc");
                Response.Charset = string.Empty;
                Response.Cache.SetCacheability(HttpCacheability.NoCache);
                Response.ContentType = "application/vnd.word";
                Response.Write(html);
                Response.End();
            }
            if (ddlExportData.SelectedItem.Text == "CSV")
            {
                Response.Clear();
                Response.AddHeader("content-disposition", "attachment;filename=" + pregstr + ".txt");
                Response.Charset = string.Empty;
                Response.Cache.SetCacheability(HttpCacheability.NoCache);
                Response.ContentType = "application/vnd.text";
                Response.Write(html);
                Response.End();
            }

        }
        catch (Exception ex) { throw ex; }


    }
    //I Ashok Naidu End


}
public class ExportBindingClass : DBExecuteDataReader
{
    private Database dbSvc = null;
    private DbCommand cmd = null;
    private DataAccessLayer _dblayer = null;
    //private PatientRegistrationCollection _collection = null;
    //private patEmpInfoCollection _empCollection = null;
    public DataSet ExportDataBinding(string SpName, string Flag, int DocID, string Referencetypeid, string fromDt, string toDt, string filename, string dateparamter, string RecordStatus)
    {
        try
        {

            _dblayer = new DataAccessLayer();
            dbSvc = _dblayer.DBaseFactory;
            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, SpName);
            dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, SessionHandler.DBSESSION_ID);
            if (fromDt != "" && toDt != "")
            {
                dbSvc.AddInParameter(cmd, "@IP_FROM_DT", DbType.DateTime, fromDt);
                dbSvc.AddInParameter(cmd, "@IP_TO_DT", DbType.DateTime, toDt);
            }
            if (SpName == "PR_GETALL_CORP_REG_REFRL_DONE" || SpName == "PR_GET_CONSULTANT_ROOM" || SpName == "PR_GETALL_FB_TEMPLATE" || SpName == "PR_GETALL_DOCTOR_UNITS")
            { }
            else
            {
                dbSvc.AddInParameter(cmd, "@IP_FLAG", DbType.String, Flag);
            }
            if (filename == "Followup PreAdmission Patients")
            {
                dbSvc.AddInParameter(cmd, "@IP_ADMN_DT", DbType.String, dateparamter);
            }
            /*if (SpName == "PR_GET_RECEIPT_COLUMN_BASED")
                dbSvc.AddInParameter(cmd, "@IP_REFERENCE_TYPE_ID", DbType.String, Referencetypeid);*/
            if (Referencetypeid == "4" || Referencetypeid == "6")
            {
                dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GETALL_ADT_DISCNT" || SpName == "PR_GETALL_PACKAGE_CONV")
            {
                dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, DocID);
            }
            /*   if (SpName == "PR_GETALL_ADT_APPBILL")
               {
                   dbSvc.AddInParameter(cmd, "@IP_TRAN_TYPE", DbType.String, "p");
               }*/
            if (SpName == "PR_GET_CONSULTANT_ROOM" || SpName == "PR_GETALL_FB_TEMPLATE")
            {
            }
            else
            {
                dbSvc.AddOutParameter(cmd, "@OP_COUNT", DbType.Int32, 100000);
            }
            if (SpName == "PR_GETALL_FB_TEMPLATE")
            {
                dbSvc.AddInParameter(cmd, "@IP_TEMPLATE_TYPE_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GET_RECEIPT_COLUMN_BASED_IP_FINAL_BILL")
            {
                dbSvc.AddInParameter(cmd, "@IP_REFERENCE_TYPE_ID", DbType.Int32, 9);
                dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GET_RECEIPT_COLUMN_BASED")
            {
                dbSvc.AddInParameter(cmd, "@IP_REFERENCE_TYPE_ID", DbType.Int32, 9);
                dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GET_RECEIPT_COLUMN_BASED_IP_FINAL_BILL_SUPPLYMENTRY" && RecordStatus == "B")
            {
                dbSvc.AddInParameter(cmd, "@IP_RECORD_STATUS", DbType.String, RecordStatus);
                dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GET_RECEIPT_COLUMN_BASED_IP_FINAL_BILL_SUPPLYMENTRY" && RecordStatus == "RECPAY")
            {
                dbSvc.AddInParameter(cmd, "@IP_RECORD_STATUS", DbType.String, RecordStatus);
                dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GETALL_DIA_PROCEDURE_REND") //added by ashok
            {

                dbSvc.AddInParameter(cmd, "@IP_TRAN_TYPE_ID", DbType.Int32, 1);
            }
            if (SpName == "PR_GET_COMPANYINFO_PAGING") 
            {
                dbSvc.AddInParameter(cmd, "@IP_PAGESIZE", DbType.Int32, 100000);
                dbSvc.AddInParameter(cmd, "@IP_PAGENUM", DbType.Int32, 1);
                dbSvc.AddInParameter(cmd, "@IP_COMPANY_TYPE_ID", DbType.Int32, 0);
            }
            if (SpName == "PR_GETALL_SERVICE")
            {
                dbSvc.AddInParameter(cmd, "@IP_PAGESIZE", DbType.Int32, 100000);
                dbSvc.AddInParameter(cmd, "@IP_PAGENUM", DbType.Int32, 1);
                dbSvc.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, "SERVICE_ID");
            }

            DataSet _Status = _dblayer.ExecuteDataSet(cmd);
            return _Status;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Consult_Patient_Details_View").Name;
            ErrorLoger.InsertErrorLogger(ex, 201, 1);
            return null;
        }
    }

    protected override CollectionBase GenerateCollection(System.Data.IDataReader returnData)
    {
        throw new System.NotImplementedException();
    }
}