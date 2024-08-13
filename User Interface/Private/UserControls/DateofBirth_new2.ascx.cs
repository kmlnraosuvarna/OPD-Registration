using System;
//using PatientRegServices = EzHms.Services.PatientRegistration;

public partial class Private_UserControls_DateofBirth_new2 : System.Web.UI.UserControl
{
    //PatientRegServices _ipetReg = new PatientRegServices();
    //private PatientRegistrationCollection collection = null;
    //private IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            MasterClass obj = new MasterClass();
            CalendarExtender1.Format = obj.CompanySettingDSValue(PARAMETER_NAMES.DATE_FORMAT);
            hdndobmontheditable.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_MONTHDATE_EDITABLE_DOB);
        }

    }

    //private void CheckAge_UOM()
    //{
    //    collection = _ipetReg.Get_PatientOptions(MasterOptions.AGE_UOM);
    //}
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