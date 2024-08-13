using System;
using System.Web.Services;
using System.Collections.Generic;
using System.Data;
using EzHms.ModelEntity;
using EzHms.Abstract;
using System.Collections;
using EzHms.DataAccessObject;
using Microsoft.Office.Interop.Word;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
public partial class Private_FrontOffice_OPD_opdsessionst : MasterClass
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        { 
        }

    }

   

    [WebMethod(EnableSession = true)]
    public static string LocalStorageSession(string ID)
    {
        string SessionID = SessionHandler.DBSESSION_ID.ToString();

        Dynamicoperaion _obj = new Dynamicoperaion();
        _obj.Proc_name = "PR_VALIDATE_USER_SESSION_ID";
        List<EzHms.ModelEntity.Parameters> pramvalist = new List<EzHms.ModelEntity.Parameters>();
        //pramvalist.Add("@IP_SESSION_ID", DbType.Int32, SessionID);
        _obj.Paramlist = pramvalist;
        IDynamicOperation _objwb = new DynamicOperationService();
        DataSet Dsquery = _objwb.Dynamicdataset(_obj);
        if (Dsquery != null)
        {
            SessionID = Dsquery.Tables[0].Rows[0]["SESSION_ID"].ToString();
        }
        else
            SessionID = "0";
        return SessionID;
    }

    [WebMethod(EnableSession = true)]
    public static void SessionManage(string docid, string submodid, string modid)
    {
        if (docid != "undefined" && !string.IsNullOrEmpty(docid.ToString()))
        {
            SessionHandler.DOCUMENT_ID = Convert.ToInt32(docid);
        }
        SessionHandler.SUB_MODULE_ID = submodid;
        SessionHandler.MODULE_ID = modid;
    }

   
    
    [WebMethod(EnableSession = true)]
    public static List<object> pat_banner_Valdatation_dataGridDataBind(string parameters, string parametervalues, string sp_name)
    {
        DBCreditOrg objdb = new DBCreditOrg();
        return objdb.pat_banner_Valdatation_dataGridDataBind(parameters, parametervalues,sp_name);
    }
}

public class DBCreditOrg
{

    public List<object> pat_banner_Valdatation_dataGridDataBind(string parameters, string parametervalues, string sp_name)
    {
        string session_id = SessionHandler.DBSESSION_ID.ToString();
        try
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            DbCommand dbCmd = null;
            dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, sp_name);
            for (int i = 0; i < parameters.Split('*').Length; i++)
            {
                dBase.AddInParameter(dbCmd, parameters.Split('*')[i].ToString(), DbType.String, parametervalues.Split('*')[i].ToString());
            }
            dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
            DataSet ds = dBase.ExecuteDataSet(dbCmd);
            List<object> list = new List<object>();
            if (ds != null)
            {
                if (ds.Tables.Count > 0)
                {
                    DataTable dt = ds.Tables[0];
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
                return list;
            }
            else
                return null;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RevenuData").Name;
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
            return null;
        }
    }

 
    
}
