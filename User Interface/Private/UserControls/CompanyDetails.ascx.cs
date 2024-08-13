using System;
using System.Data;
using System.Data.Common;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using Microsoft.Practices.EnterpriseLibrary.Data;
public partial class Private_UserControls_CompanyDetails : System.Web.UI.UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public static DataSet Get_Company_Dtls(string cmpid, string umr_no)
    {
        DBCompanyDetails dbcmpy = new DBCompanyDetails();
        DataSet ds = dbcmpy.Get_Company_AllDtls(cmpid, umr_no);
        return ds;
    }
}

public class DBCompanyDetails
{
    private Database dbSvc = null;
    private DbCommand cmd = null;
    private DataAccessLayer _dblayer = null;
    private PatientRegistrationCollection _collection = null;
    //private patEmpInfoCollection _empCollection = null;

    public DataSet Get_Company_AllDtls(string cmpid, string umr_no)
    {
        try
        {
            _dblayer = new DataAccessLayer();
            dbSvc = _dblayer.DBaseFactory;
            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_CON_OPBILLS_GETTING");
            dbSvc.AddInParameter(cmd, "@IP_UMR_NO", DbType.String, umr_no);
            dbSvc.AddInParameter(cmd, "@IP_CMP_ID", DbType.Int32,Convert.ToInt32(cmpid));
            dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, 1);
            DataSet cbase = _dblayer.ExecuteDataSet(cmd);
            return cbase;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Consolidate_Patient_Details_View").Name;
            ErrorLoger.InsertErrorLogger(ex, 201, 1);
            return null;
        }
    }
}