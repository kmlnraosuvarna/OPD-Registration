using System;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using EzHms.Abstract;
public partial class Private_FrontOffice_FOUserControls_PatientBannerControl : System.Web.UI.UserControl
{

    protected void Page_Load(object sender, EventArgs e)
    {
        MasterClass obj = new MasterClass();
        hdndtfmt.Value = "dd-MMM-yyyy";
        hdnbasecurrancy.Value = "INR";
        hdnAlloweOP.Value = "False";
        hdnAlwmtplAdmn.Value = "Y";
        hdnVerifymonileno.Value = "N";
        hdndaysvalidatemobno.Value = "365";
        hdnAlowAdmnToOP.Value = "True";
        hdnRegShowDocDays.Value = "1";
        hdnRegDoctorRequired.Value = "False";
        hdnIsRegDtlsReq.Value = "Yes";
        hdnRegRefDays.Value = "0";
        hdnisrenewal.Value = "Yes";
        hdnIsMedClg.Value = "TRUE";
        hdnIsRefDtlsDisable.Value = "NO";

        hdnReg_Doc.Value = "64";
        hdnAdmn_Doc.Value = "105";
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();

        hdnOp_Doc.Value = "86";
        //hdnOp_Doc.Value = obj.WebConfigSettings("Opbilling");
        hdnCons_Doc.Value = "379";

        Billslookupdata();
        if (SessionHandler.REC_TYPE_ID != "" && hdnIsMedClg.Value == "TRUE" && hdnRectypeRequire.Value == "Y")
        {
            List<object> eleReg = new List<object>();
            eleReg.Add(0);
            eleReg.Add(SessionHandler.REC_TYPE_ID);
            Umrlookup.PreConditon = eleReg;
        }
        List<object> elements = new List<object>();
        this.Umrlookup.LookupName = "NEW_UMR";
        this.ucBills.LookupName = "BILLS_REPORT";
        this.Umrlookup.OnBlurRequired = true;
        this.ucPreAdmUmr.LookupName = "PRE_ADM_UMR";
        this.ucPreAdmUmr.OnBlurRequired = true;
        elements.Add("ALL");
        this.ucPreAdmUmr.PreConditon = elements;
        /* added by rama on 30/6/2018 in advance transfer screen only who has advance those only has to fetch */
        if (Flag == "ADVTRNSFR")
        {
            List<object> objadvtr = new List<object>();
            objadvtr.Add("");
            objadvtr.Add("ADVTRNSFR");
            Umrlookup.PreConditon = objadvtr;
        }
       
        if (Flag == "PREADMN")
        {
            if (Request.QueryString["PREADMN_ID"] != null)
            {
                tdpreadmn.Style.Add("display", "table-cell");
                tdadmn.Style.Add("display", "none");
                tdlblpreadmn.Style.Add("display", "none");
                hdnpreadmnumrno.Value = Request.QueryString["UMRNO"].ToString();
            }
            else
            {
                tdpreadmn.Style.Add("display", "none");
                tdlblpreadmn.Style.Add("display", "none");
                tdadmn.Style.Add("display", "table-cell");
            }
        }
        else if (Flag == "CHNGADMN")
        {
            tdUmrAdmission.Style.Add("display", "table-cell");
            tdpreadmn.Style.Add("display", "none");
            tdlblpreadmn.Style.Add("display", "none");
            tdadmn.Style.Add("display", "none");
            lblumr.Text = "Admn#";
            this.ucAdmission.LookupName = "IPUMRADMN";
            ucAdmission.Enabled = true;
        }
        else if (Flag == "ADMN")
        {
            if (IsPreAdmn)
            {
                tdpreadmn.Style.Add("display", "table-cell");
                tdlblpreadmn.Style.Add("display", "table-cell");
                tdadmn.Style.Add("display", "table-cell");

            }
            else
            {
                tdpreadmn.Style.Add("display", "table-cell");
                tdlblpreadmn.Style.Add("display", "table-cell");
                tdadmn.Style.Add("display", "table-cell");

            }
            
            if (Request.QueryString["PREADMN_ID"] != null)
                if (Request.QueryString["UMRNO"] != null)
                {
                    hdnpreadmnumrno.Value = Request.QueryString["UMRNO"].ToString();
                }
        }
        else if (Flag == "ESTBILL")
        {
            if (IsPreAdmn)
            {
                tdpreadmn.Style.Add("display", "table-cell");
                tdlblpreadmn.Style.Add("display", "table-cell");
                tdadmn.Style.Add("display", "table-cell");
            }
            else
            {
                tdpreadmn.Style.Add("display", "none");
                tdlblpreadmn.Style.Add("display", "none");
                tdadmn.Style.Add("display", "none");

            }
        }
        if (IsShowIPLookup == true && Flag == "IPFPOSTDISCOUNT")
        {
            tdUmrAdmission.Style.Add("display", "table-cell");
            tdlblpreadmn.Style.Add("display", "table-cell");
            lbladmin.Text = "Admn#";
            List<object> objadmn = new List<object>();

            objadmn.Add("IPFPOSTDISCOUNT");
            this.ucAdmission.LookupName = "IPUMRADMN";
            ucAdmission.Enabled = true;
            ucAdmission.PreConditon = objadmn;
        }
        else if (IsShowIPLookup)
        {
            tdUmrAdmission.Style.Add("display", "table-cell");
            tdlblpreadmn.Style.Add("display", "table-cell");
            lbladmin.Text = "Admn#";
            List<object> objadmn = new List<object>();

            objadmn.Add("IPF");
            this.ucAdmission.LookupName = "IPUMRADMN";
            ucAdmission.Enabled = true;
            ucAdmission.PreConditon = objadmn;
        }
        if (Request.QueryString["MODE"] == "VIEW")
        {
            hdnDocName.Value = "Cons";
            hdnFormName.Value = "Cons";
        }
      

        if (Flag == "ADMN")
        {
            hdnflag.Value = "ADMN";
        }

        //System.Data.DataSet ds = Docpermission.DocpermissionbyDocIdModid(64, 16);

        //if (ds != null && ds.Tables[0].Rows.Count > 0)
        //{
        //    if ((ds.Tables[0].Rows[0]["ACCESS_ADD"].ToString()) == "Y")
                hdnIsNewReg.Value = "Y";
        //    else
        //        hdnIsNewReg.Value = "N";
        //}
        hdnIsNewReg.Value = "Y";
        if (Request.QueryString["DashBdFlag"] != null && Request.QueryString["umr_no"] != null)
        {
            TextBox txtUmrNo = (TextBox)Umrlookup.FindControl("txtSearchControl");
            txtUmrNo.Enabled = false;
            TextBox txtAdmnNo = (TextBox)ucAdmission.FindControl("txtSearchControl");
            txtAdmnNo.Enabled = false;
            TextBox txtPreAdmUmr = (TextBox)ucPreAdmUmr.FindControl("txtSearchControl");
            txtPreAdmUmr.Enabled = false;

        }
        if (Request.QueryString["FROMDASHBOARD"] != null)
            hdnPatientDBFlg.Value = Request.QueryString["FROMDASHBOARD"].ToString();
        if (Request.QueryString["PatientID"] != null && (Request.QueryString["umrno"] != null || Request.QueryString["Umr_No"] != null))
        {
            PatientID = Request.QueryString["PatientID"];
            UMRNO = Request.QueryString["umrno"] != null ? Request.QueryString["umrno"].ToString() : Request.QueryString["Umr_No"] != null ? Request.QueryString["Umr_No"].ToString() : "";
           
        }
    }
    //public virtual string CompanySettingDSValue(string parameter)
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

  
    protected void Billslookupdata()
    {
      //  ICnvrtoGen _wi = new CnvrtoGenservice();
        List<object> obj = new List<object>();
        ucbill.LookupName = "CONVERT_GENEARL";
        ucbill.PreConditon = obj;
      //  this.ucbill.GettingDataWithObjects = new LookUp.PagingMethodWithObject(_wi.Get_Corporatebills);
    }
   
    private bool ispreadmn = false;
    public bool IsPreAdmn
    {
        get { return ispreadmn; }
        set { ispreadmn = value; }
    }

    private string _flag = string.Empty;
    public string Flag
    {
        set { _flag = value; }
        get { return _flag; }
    }
    public string DocName
    {
        get { return hdnDocName.Value; }
        set { hdnDocName.Value = value; HiddenField hdndocname = (HiddenField)ucPatOptions.FindControl("hdnOptDocName"); hdndocname.Value = value; }
    }
    public string IsShowBillsLookup
    {
        set
        {
            tdbillno.Style["display"] = value;
            tdbillnolookup.Style["display"] = value;
        }
    }
    private bool _isshowiplookup = false;
    public bool IsShowIPLookup
    {
        set
        {
            _isshowiplookup = value;
        }
        get { return _isshowiplookup; }
    }
    private string _patientID = string.Empty;
    public string PatientID
    {

        get { return Umrlookup.Value; }
        set { Umrlookup.Value = value;
        hdnPatientid.Value = value;
        hdnPatID.Value = value;
        }
    }
    public string UMRNO
    {
        get { return Umrlookup.Text; }
        set { Umrlookup.Text = value;
        hdnUmrNo.Value = value;
        }
    }



}
