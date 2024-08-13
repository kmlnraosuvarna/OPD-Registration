using System;
using System.Web.UI.WebControls;
using EzHms.ModelEntity;
using System.Data;
//using IPatientReg = EzHms.Abstract.IPatientRegistration;
//using PatientRegServices = EzHms.Services.PatientRegistration;

public partial class Private_UserControls_New_ReferalUserControl : System.Web.UI.UserControl
{
    //private static EzHms.ModelEntity.PatientRegistrationCollection recpColl1;
    private PatientRegistrationCollection collection = null;
    //private IPatientReg pregService = null;
    //private EzHms.Abstract.ICompanyPolicy icompolicy = null;
    //private CompanyPolicyCollection cpolicycoll = null;
    
    protected void Page_Load(object sender, EventArgs e)
    {

        
        if (SessionHandler.DBSESSION_ID > 0)
        {
            if (!IsPostBack)
            {
                hdnRefQucikAdd.Value = string.Empty;
                DataSet _dsgetdocper = SessionHandler.DocPermission;
                if (_dsgetdocper != null)
                {
                    int DocCount = _dsgetdocper.Tables[0].Rows.Count;
                    for (int i = 0; i < DocCount; i++)
                    {
                        string docIds = _dsgetdocper.Tables[0].Rows[i]["DOC_ID"].ToString();
                        switch (docIds)
                        {
                            case "6": //--6 Referral
                                {
                                    if ((_dsgetdocper.Tables[0].Rows[i]["ACCESS_ADD"].ToString()) == "Y")
                                        hdnRefQucikAdd.Value = "Y";
                                    else
                                        hdnRefQucikAdd.Value = "N";
                                    break;
                                }
                                break;
                        }
                    }
                }
            }
            MasterClass obj = new MasterClass();

            hdnRefReq.Value = "Yes";
            hdndateformateref.Value = obj.CompanySettingDisplayValue(PARAMETER_NAMES.DATE_FORMAT);
            hdnreferaldisable.Value = "NO";
            
            txtSMSDt.Text = ClientTime.ToString("dd-MMM-yyyy");
            txtshh.Text = ClientTime.ToString("HH");
            txtsmm.Text = ClientTime.ToString("mm");
            txtsss.Text = ClientTime.ToString("ss");
            //this.pregService = new PatientRegServices();
  
            ListItem removieitem1 = ddlRefSourceType.Items.FindByText("Internal");
            ddlRefSourceType.Items.Remove(removieitem1);
            ListItem removieitem2 = ddlRefSourceType.Items.FindByText("Staff");
            ddlRefSourceType.Items.Remove(removieitem2);

            hdnClientName.Value = obj.WebConfigSettings("ClientName");

            Lookuparea.LookupName = "AREA_NEW_NEW";
            Lookuparea.OnBlurRequired = true;

            this.ucreferalname.LookupName = "Referals_New";
            this.ucrfrlsrc.LookupName = "REFERAL_SRC_New";
            this.ucReferedto.LookupName = "REFERAL_TO_New";
         }
        else
        {
            Response.Redirect("~/Default.aspx");
        }
    }

    public void BindReferalTypes(DataTable dt)
    {
        if (dt != null && dt.Rows.Count > 0)
        {
            ddlreferral.DataSource = dt;
            ddlreferral.DataTextField = "REFERAL_SOURCE_DESC";
            ddlreferral.DataValueField = "REFERAL_SOURCE_ID";
            ddlreferral.DataBind();
            ddlreferral.Items.Insert(0, new ListItem("--select--", "0"));
        }
         
    }
    //public virtual string CompanySettingDSValue1(string parameter)
    //{
    //    EzHms.DataAccessObject.DBCompanyPolicy obj = new EzHms.DataAccessObject.DBCompanyPolicy();
    //    DataSet ds = obj.GetCompanyPolicyDetailSettings("L");
    //    if (ds != null && ds.Tables[0].Rows.Count > 0)
    //    {
    //        DataTable dt = ds.Tables[0];
    //        foreach (DataRow row in dt.Rows)
    //        {
    //            if (row["PARAMETER_NAME"].ToString().Trim().ToUpper() == parameter.Trim().ToUpper())
    //            {
    //                return row["PARAMETER_VALUE"].ToString();
    //            }

    //        }
    //        return string.Empty;
    //    }
    //    else
    //        return string.Empty;
    //}

    public void BindReferalQuickTypes(DataTable dt)
    {
        if (dt != null && dt.Rows.Count > 0)
        {
            ddlRefSourceType.DataSource = dt;
            ddlRefSourceType.DataTextField = "REFERAL_SOURCE_DESC";
            ddlRefSourceType.DataValueField = "REFERAL_SOURCE_ID";
            ddlRefSourceType.DataBind();
            ddlRefSourceType.Items.Insert(0, new ListItem("--select--", "0"));


            ListItem removieitem = ddlRefSourceType.Items.FindByText("Corporate");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("CRO");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("Home Visit");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("Insurance");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("Other Hospitals");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("Staff");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("TPA");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("Proficency");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("SELF");
            ddlRefSourceType.Items.Remove(removieitem);
            removieitem = ddlRefSourceType.Items.FindByText("Walk-in");
            ddlRefSourceType.Items.Remove(removieitem);
        }
    }

    public void Referralclassddlbind(DataTable dt)
    {
        ddlRefClass.DataSource = dt;
        ddlRefClass.DataTextField = "REFERAL_CATEGORY_NAME";
        ddlRefClass.DataValueField = "REFERAL_CATEGORY_ID";
        ddlRefClass.DataBind();
        ddlRefClass.Items.Insert(0, new ListItem("--Select--", "0"));
    } 

    protected void BindDataToDropDown(DropDownList ddlList)
    {
        ddlList.DataSource = this.collection;
        ddlList.DataTextField = "Text";
        ddlList.DataValueField = "Value";
        ddlList.DataBind();
        ddlList.Items.Insert(0, new ListItem("--select--", "0"));
        if (ddlList.ID == "ddlRefSourceType")
        {
            ListItem removieitem = ddlList.Items.FindByText("Corporate");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("CRO");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("Home Visit");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("Insurance");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("Other Hospitals");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("Staff");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("TPA");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("Proficency");
            ddlList.Items.Remove(removieitem);
            removieitem = ddlList.Items.FindByText("SELF");
            ddlList.Items.Remove(removieitem);
        }
    }

    //[System.Web.Script.Services.ScriptMethod()]
    //[System.Web.Services.WebMethod]
    //public static bool AssignRefFlag(string Refclear, string Ref_src_id)
    //{
    //    SessionHandler.PRE_CONDITON = "IPUMR^" + Refclear;
    //    HttpContext.Current.Session.Remove("Ref_src_id");
    //    HttpContext.Current.Session.Add("ref_src_id", Ref_src_id);
    //    return true;
    //}
    //protected virtual string CompanySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    //{
    //    string Result = string.Empty;
    //    this.cpolicycoll = new CompanyPolicyCollection();
    //    this.icompolicy = new EzHms.Services.ComapnyPolicyWebService();
    //    this.cpolicycoll = this.icompolicy.Get_Parameter_Value(EnumType, GetEnumerationString.GetEnumDescription(EnumValue));
    //    if (this.cpolicycoll != null)
    //        if (cpolicycoll.Count > 0)
    //            return Result = cpolicycoll.GetPresettings(0).PARAMETER_DISPLAY_VALUE;
    //        else
    //            return string.Empty;
    //    else
    //        return string.Empty;
    //}
    protected virtual DateTime ClientTime
    {
        get
        {
            DateTime _datetime = DateTime.Now;
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _datetime = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES));
            return _datetime;
        }
    }
}