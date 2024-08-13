using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using EzHms.Abstract;
using EzHms.ModelEntity;
using EzHms.Services;
using PatientRegServices = EzHms.Services.PatientRegistration;

public partial class Private_UserControls_NewAgeUserControl : System.Web.UI.UserControl
{
    PatientRegServices _ipetReg = new PatientRegServices();
    private PatientRegistrationCollection collection = null;
//    private IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
    //private CompanyPolicyCollection cpolicyColl = null;
    //private ICompanyPolicy imomPolicy = null;
    protected void Page_Load(object sender, EventArgs e)
    {
        //CheckAge_UOM();
        if (!IsPostBack)
        {
            //this.cpolicyColl = new CompanyPolicyCollection();
            //this.imomPolicy = new EzHms.Services.ComapnyPolicyWebService();
            //this.cpolicyColl = this.imomPolicy.Get_Parameter_Value(EzHms.ModelEntity.CompanyPolicyEnum.PARAMETER_NAME, "Documents Date Format");

            //if (this.cpolicyColl != null)
            //    ViewState["datefmt"] = this.cpolicyColl.GetPresettings(0).PARAMETER_VALUE;
            //else
            //    ViewState["datefmt"] = "dd-MMM-yyyy";
            MasterClass obj = new MasterClass();
            CalendarExtender1.Format = obj.CompanySettingDisplayValue(PARAMETER_NAMES.DATE_FORMAT); 
            hdndobmontheditable.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_MONTHDATE_EDITABLE_DOB);
        }
    }

    private void CheckAge_UOM()
    {
        collection = _ipetReg.Get_PatientOptions(MasterOptions.AGE_UOM);

    }
    public string UOM
    {
        get
        {

            return hdnUOM.Value;
        }
        set
        {
            hdnUOM.Value = value;
        }
    }

    public string AGE
    {
        get
        {
            if (string.IsNullOrEmpty(txtYear.Text))
                txtYear.Text = "0";
            if (string.IsNullOrEmpty(txtMonths.Text))
                txtMonths.Text = "0";
            if (string.IsNullOrEmpty(txtDay.Text))
                txtDay.Text = "0";

            string ageOf = txtYear.Text + "," + txtMonths.Text + "," + txtDay.Text;
            return ageOf;
        }
        set
        {

        }
    }

    public string DOB
    {
        get
        {
            return txtDob.Text;
        }
        set
        {
            txtDob.Text = value;
        }
    }
    public string AgeInYear
    {
        get
        {
            return txtYear.Text;
        }
        set
        {
            txtYear.Text = value;
        }
    }
    public string AgeInMonth
    {
        get
        {
            return txtMonths.Text;
        }
        set
        {
            txtMonths.Text = value;
        }
    }
    public string AgeInDay
    {
        get
        {
            return txtDay.Text;
        }
        set
        {
            txtDay.Text = value;
        }
    }
    public string ActualAge
    {
        get { return hdnAge.Value; }
        set { hdnAge.Value = value; }
    }
    public string ageInYears
    {
        get
        {
            return hdnYear.Value;
        }
        set
        {
            hdnYear.Value = value;
        }
    }
    public string ageInMonths
    {
        get
        {
            return hdnMonth.Value;
        }
        set
        {
            hdnMonth.Value = value;
        }
    }
    public string ageInDays
    {
        get
        {
            return hdnDay.Value;
        }
        set
        {
            hdnDay.Value = value;
        }
    }

    private string format = string.Empty;
    public string Format
    {
        get { return CalendarExtender1.Format; }
        set { CalendarExtender1.Format = value; }
    }
    
    
    
}
