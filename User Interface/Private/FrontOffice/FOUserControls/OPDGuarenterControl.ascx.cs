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
using IPatientReg = EzHms.Abstract.IPatientRegistration;
using PatientRegCollection = EzHms.ModelEntity.PatientRegistrationCollection;
//using LookUpSearchServices = EzHms.Services.LookUpSearchService;
using ILookUpSearch = EzHms.Abstract.ILookUpSearch;
using LookUPSearch = EzHms.ModelEntity.LookUpSearch;

public partial class Private_FrontOffice_FOUserControls_OPDGuarenterControl : System.Web.UI.UserControl
{

    
    private PatientRegCollection _pRegCollection = null;
    private ILookUpSearch _iLookUpSearch = null;
    public delegate void OnCheckChanged(object sender, System.EventArgs e);
    public event OnCheckChanged Oncheckedme;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

            EzHms.DataAccessObject.DBPatientRegistration _iPatientReg = new EzHms.DataAccessObject.DBPatientRegistration();
            CollectionBase cb = null; 
            cb= _iPatientReg.Get_PatientOptions(EzHms.ModelEntity.MasterOptions.RELATIONSHIP);
            ddlERelation.DataSource = cb;
            ddlERelation.DataTextField = "Text";
            ddlERelation.DataValueField = "Value";
            ddlERelation.DataBind();
            ddlERelation.Items.Insert(0, new ListItem("--select--", "0"));

            ddlGERelation.DataSource = cb;
            ddlGERelation.DataTextField = "Text";
            ddlGERelation.DataValueField = "Value";
            ddlGERelation.DataBind();
            ddlGERelation.Items.Insert(0, new ListItem("--select--", "0"));
            if (!string.IsNullOrEmpty(_emergency_relation))
                ddlERelation.SelectedValue = _emergency_relation;
            if (!string.IsNullOrEmpty(_emergency_relation))
                ddlGERelation.SelectedValue = _emergency_relation;
        }
        //_iLookUpSearch = new LookUpSearchServices();
        this.ucArea.LookupName = "AREA_NEW_NEW"; //this.ucCity.LookupName = this.ucCountry.LookupName = this.ucState.LookupName = "ADDRESS";
        //this.ucArea.GettingDataWithObjects = new LookUp.PagingMethodWithObject(_iLookUpSearch.GetLookUpSearchData); //this.ucCity.GettingDataWithObjects = this.ucState.GettingDataWithObjects = this.ucCountry.GettingDataWithObjects = new Private_UserControls_GenericGrid.PagingMethodWithObject(_iLookUpSearch.GetLookUpSearchData);

        this.ucGArea.LookupName = "AREA_NEW_NEW"; //this.ucCity.LookupName = this.ucCountry.LookupName = this.ucState.LookupName = "ADDRESS";
        //this.ucGArea.GettingDataWithObjects = new LookUp.PagingMethodWithObject(_iLookUpSearch.GetLookUpSearchData); //this.ucCity.GettingDataWithObjects = this.ucState.GettingDataWithObjects = this.ucCountry.GettingDataWithObjects = new Private_UserControls_GenericGrid.PagingMethodWithObject(_iLookUpSearch.GetLookUpSearchData);

    }

    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        if (Request.QueryString["Type"] != "Pre")
        {
            TextBox txtarea = ucArea.FindControl("txtSearchControl") as TextBox;
            txtarea.Attributes.Add("onblur", "OnNullValue(this);");
            TextBox txtGarea = ucGArea.FindControl("txtSearchControl") as TextBox;
            txtGarea.Attributes.Add("onblur", "OnNullValue(this);");
        }

    }


    void ucArea_OnGridRowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            GridView gvArea = (GridView)ucArea.FindControl("gridGeneric");
            TextBox txtarea = ucArea.FindControl("txtSearchControl") as TextBox;
            HiddenField hidarea = ucArea.FindControl("_hiddenID") as HiddenField;


            string areaId = gvArea.DataKeys[e.Row.RowIndex].Values[0].ToString();
            string area = ((LinkButton)e.Row.Cells[0].Controls[0]).Text;

            string cityId = gvArea.DataKeys[e.Row.RowIndex].Values[1].ToString();
            string city = ((LinkButton)e.Row.Cells[1].Controls[0]).Text;

            string stateId = gvArea.DataKeys[e.Row.RowIndex].Values[2].ToString();
            string state = ((LinkButton)e.Row.Cells[2].Controls[0]).Text;

            string countryId = gvArea.DataKeys[e.Row.RowIndex].Values[3].ToString();
            string country = ((LinkButton)e.Row.Cells[3].Controls[0]).Text;

            System.Text.StringBuilder script = new System.Text.StringBuilder();
            script.Append("document.getElementById('" + txtarea.ClientID + "').value='" + area + "';");
            script.Append("document.getElementById('" + hidarea.ClientID + "').value='" + areaId + "';");
            script.Append("document.getElementById('" + ucCity.ClientID + "').value='" + city + "';");
            script.Append("document.getElementById('" + hdncityid.ClientID + "').value='" + cityId + "';");
            script.Append("document.getElementById('" + ucState.ClientID + "').value='" + state + "';");
            script.Append("document.getElementById('" + hdnstateid.ClientID + "').value='" + stateId + "';");
            script.Append("document.getElementById('" + ucCountry.ClientID + "').value='" + country + "';");
            script.Append("document.getElementById('" + hdncountryid.ClientID + "').value='" + countryId + "';");

            script.Append("document.getElementById('" + txtPin.ClientID + "').focus();");
            e.Row.Attributes["onclick"] = string.Empty;
            e.Row.Attributes.Add("onclick", script.ToString());

        }
    }

    void ucGArea_OnGridRowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            GridView gvGArea = (GridView)ucArea.FindControl("gridGeneric");
            TextBox txtGarea = ucArea.FindControl("txtSearchControl") as TextBox;
            HiddenField hidarea = ucArea.FindControl("_hiddenID") as HiddenField;


            string areaId = gvGArea.DataKeys[e.Row.RowIndex].Values[0].ToString();
            string area = ((LinkButton)e.Row.Cells[0].Controls[0]).Text;

            string cityId = gvGArea.DataKeys[e.Row.RowIndex].Values[1].ToString();
            string city = ((LinkButton)e.Row.Cells[1].Controls[0]).Text;

            string stateId = gvGArea.DataKeys[e.Row.RowIndex].Values[2].ToString();
            string state = ((LinkButton)e.Row.Cells[2].Controls[0]).Text;

            string countryId = gvGArea.DataKeys[e.Row.RowIndex].Values[3].ToString();
            string country = ((LinkButton)e.Row.Cells[3].Controls[0]).Text;

            System.Text.StringBuilder script = new System.Text.StringBuilder();
            script.Append("document.getElementById('" + txtGarea.ClientID + "').value='" + area + "';");
            script.Append("document.getElementById('" + hidarea.ClientID + "').value='" + areaId + "';");
            script.Append("document.getElementById('" + ucCity.ClientID + "').value='" + city + "';");
            script.Append("document.getElementById('" + hdncityid.ClientID + "').value='" + cityId + "';");
            script.Append("document.getElementById('" + ucState.ClientID + "').value='" + state + "';");
            script.Append("document.getElementById('" + hdnstateid.ClientID + "').value='" + stateId + "';");
            script.Append("document.getElementById('" + ucCountry.ClientID + "').value='" + country + "';");
            script.Append("document.getElementById('" + hdncountryid.ClientID + "').value='" + countryId + "';");

            script.Append("document.getElementById('" + txtPin.ClientID + "').focus();");
            e.Row.Attributes["onclick"] = string.Empty;
            e.Row.Attributes.Add("onclick", script.ToString());

        }
    }

    #region Properties


    public string TrMobileDisplay
    {
        set
        {
            trMobileNoDisp.Style.Add(HtmlTextWriterStyle.Display, value);
            trMobileNoDisp1.Style.Add(HtmlTextWriterStyle.Display, value);
        }
    }
    public string EmergencyName
    {
        get
        {
            return txtEName.Text;
        }
        set
        {
            txtEName.Text = value;
        }
    }
    public string Pin
    {
        get
        {
            return txtPin.Text;
        }
        set
        {
            txtPin.Text = value;
        }
    }
    public string PhoneNO
    {
        get
        {
            return txtPhone.Text;
        }
        set
        {
            txtPhone.Text = value;
        }
    }
    public string MobileNO
    {
        get
        {
            return txtmobileno.Text;
        }
        set
        {
            txtmobileno.Text = value;
        }
    }
    private string _emergency_relation = string.Empty;
    public string EergencyRelation
    {
        get
        {
            if (ddlERelation.SelectedIndex > 0)
                return ddlERelation.SelectedValue;
            return string.Empty;
        }
        set
        {
            _emergency_relation = value;
            ListItem _item = ddlERelation.Items.FindByValue(value);
            if (_item != null)
                _item.Selected = true;
        }
    }
    private string _SelectedRelation = string.Empty;
    public string SelectedRelation
    {
        get
        {
            if (ddlERelation.SelectedIndex > 0)
                return hdnRelid.Value;
            return string.Empty;
        }
        set
        {
            hdnRelid.Value = value;
        }

    }
    public string Address1
    {
        get { return txtAddress1.Text; }
        set
        {
            txtAddress1.Text = value;
        }
    }
    public string Address2
    {
        get { return txtAddress2.Text; }
        set
        {
            txtAddress2.Text = value;
        }
    }
    public string CityID
    {
        get
        {
            return hdncityid.Value;
        }
        set
        {
            hdncityid.Value = value;
        }
    }
    public string CityText
    {
        get
        {
            return ucCity.Text;
        }
        set
        {
            ucCity.Text = value;
        }
    }
    public string StateID
    {
        get
        {
            return hdnstateid.Value;
        }
        set
        {
            hdnstateid.Value = value;
        }
    }
    public string StateText
    {
        get
        {
            return ucState.Text;
        }
        set
        {
            ucState.Text = value;
        }
    }
    public string CountryID
    {
        get
        {
            return hdncountryid.Value;
        }
        set
        {
            hdncountryid.Value = value;
        }
    }
    public string CountryText
    {
        get
        {
            return ucCountry.Text;
        }
        set
        {
            ucCountry.Text = value;
        }
    }
    public string AreaID
    {
        get
        {
            return ucArea.Value;
        }
        set
        {
            ucArea.Value = value;
        }
    }
    public string AreaText
    {
        get
        {
            return ucArea.Text;
        }
        set
        {
            ucArea.Text = value;
        }
    }
    private string patientID = string.Empty;

    public string PatientID
    {
        get { return hdnPatid.Value; }
        set { hdnPatid.Value = value; }
    }
    #endregion
}