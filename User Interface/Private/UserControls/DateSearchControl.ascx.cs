using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using EzHms.ModelEntity;

public partial class Private_UserControls_DateSearchControl : webuser
{
    #region Delegate for textbox changed event
    public delegate void TextChanged(object sender, EventArgs e);
    public event TextChanged OnDateSearchTextChanged;
    #endregion

    #region Load evnets
    protected void Page_Load(object sender, EventArgs e)
    {
        hdndbdtformat.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.DB_DATE_FORMAT);
        hdndtformat.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.DATE_FORMAT);
        if (!IsPostBack)
        {
            if (IsShowCheckAll)
            {
                chkAllDates.Checked = true;
                hdnisalldtchecked.Value = "Y";
                chkAllDates.Style.Add("display", "block");
                txtDate.Style.Add("display", "none");
            }
        }
        if (IsPostBack)
        {
            if (hdnisalldtchecked.Value == "N")
                txtDate.Style.Add("display", "block");
            else
            {
                txtDate.Text = "";
                txtDate.Style.Add("display", "none");
            }
        }
        if (txtDate.Text != "")
        {
            if (txtDate.Text.Length < 12)
            {
                _FromDate = txtDate.Text;
                _ToDate = txtDate.Text;
            }
            else
            {
                _FromDate = txtDate.Text.Split('-')[0] + "-" + txtDate.Text.Split('-')[1] + "-" + txtDate.Text.Split('-')[2].Trim();
                _ToDate = txtDate.Text.Split('-')[3].Trim() + "-" + txtDate.Text.Split('-')[4] + "-" + txtDate.Text.Split('-')[5];
            }
        }
        else
        {
            float i = 0;
            string Griddisplaydays = "0";
//            EzHms.Abstract.ICompanyPolicy iComPolicy = new EzHms.Services.ComapnyPolicyWebService();
           // CompanyPolicyCollection cPolicyColl = iComPolicy.Get_Parameter_Value(EzHms.ModelEntity.CompanyPolicyEnum.PARAMETER_NAME, "No of Questions");
           // if (cPolicyColl != null && cPolicyColl.Count > 0)
                Griddisplaydays = "20";
            if (Convert.ToInt32(float.TryParse(Griddisplaydays, out i) ? Griddisplaydays : "0") > 0)
            {
                txtDate.Text = ClientTime.ToString("dd-MMM-yyyy");
                _FromDate = txtDate.Text;
                _ToDate = txtDate.Text;
                txtDate.Text = Convert.ToDateTime(_FromDate).AddDays(-Convert.ToInt32(Griddisplaydays)).ToString("dd-MMM-yyyy") + " - " + _ToDate;
            }
            else
            {
                txtDate.Text = ClientTime.ToString("dd-MMM-yyyy");
                _FromDate = txtDate.Text;
                _ToDate = txtDate.Text;
            }
        }

    }
    #endregion

    #region Textbox Changed event
    protected void OnDateSearch_TextChanged(object sender, EventArgs e)
    {
        if (OnDateSearchTextChanged != null)
            OnDateSearchTextChanged(sender, e);
    }
    #endregion


    private string _DateChangeFn;
    public string DateChangeFn
    {
        get
        {
            return _DateChangeFn;
        }
        set
        {
            _DateChangeFn = value;
        }
    }


    #region Parameters
    public bool IsShowtxtdate
    {
        set
        {
            this.txtDate.ReadOnly = true;
        }
    }

    public bool _IsShowCheckAll = false;
    public bool IsShowCheckAll
    {
        set
        {
            _IsShowCheckAll = value;
        }
        get
        {
            return _IsShowCheckAll;
        }
    }
    private string _FromDate;
    public string FromDate
    {
        get
        {

            //return _FromDate; 
            //return TIMEZONEDATE.SERVERDATE(_FromDate);
            return Fromdateassign(_FromDate);
        }
        set
        {
            _FromDate = value;
        }
    }
    private string _ToDate;
    public string ToDate
    {
        get
        {
            return todateassign(_ToDate);
            //return TIMEZONEDATE.SERVERDATE(_ToDate);; 
        }
        set
        {
            _ToDate = value;
        }
    }
           private string _txtDateSearch;
    public string txtDateSearch
    {
        get
        {
            return txtDate.Text;
        }
        set { txtDate.Text = value; }
    }
    private Unit _width;
    public Unit Width
    {
        get { return txtDate.Width; }
        set { txtDate.Width = value; }
    }
    #endregion
    protected string todateassign(string _date)
    {
        if (_date == null || _date == string.Empty)
        {
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _date = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES)).ToString("dd-MMM-yyyy");
            else
                _date = DateTime.Now.ToString("dd-MMM-yyyy");
        }
        return _date;
    }
    protected string Fromdateassign(string _date)
    {
        float i = 0;
        if (_date == null || _date == string.Empty)
        {
            _date = ClientTime.ToString("dd-MMM-yyyy"); ;
            string Griddisplaydays = "0";
            //EzHms.Abstract.ICompanyPolicy iComPolicy = new EzHms.Services.ComapnyPolicyWebService();
            //CompanyPolicyCollection cPolicyColl = iComPolicy.Get_Parameter_Value(EzHms.ModelEntity.CompanyPolicyEnum.PARAMETER_NAME, "No of Questions");
            //if (cPolicyColl != null && cPolicyColl.Count > 0)
            Griddisplaydays = "20";//cPolicyColl.GetPresettings(0).PARAMETER_VALUE;
            if (Convert.ToInt32(float.TryParse(Griddisplaydays, out i) ? Griddisplaydays : "0") > 0)
                _date = Convert.ToDateTime(_date).AddDays(-Convert.ToInt32(Griddisplaydays)).ToString("dd-MMM-yyyy");

        }
        return _date;
    }
}
