namespace HIMS.NET
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
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
    using System.ComponentModel;
    //using CrediOrgMdl = EzHms.ModelEntity.CreditOrgMaster;
    using EzHms.Abstract;
    using AjaxControlToolkit;
    using EzHms.ModelEntity;
    using IPatientReg = EzHms.Abstract.IPatientRegistration;
    using PatientRegCollection = EzHms.ModelEntity.PatientRegistrationCollection;
    public partial class Private_UserControls_AddressDetails : System.Web.UI.UserControl
    {
        IPatientRegistration iPatReg = null;
        //EzHms.Abstract.ICreditOrg _creditSer = null;
        //private EzHms.ModelEntity.CreditOrgCollection _credStateCol;
        private EzHms.ModelEntity.PatientRegistrationCollection collection = null;
        private string _addressTypeID = string.Empty;
        private IPatientReg _iPatientReg = null;
        private PatientRegCollection _pRegCollection = null;

        //private EzHms.Abstract.ICompanyPolicy icompolicy = null;
        //private EzHms.ModelEntity.CompanyPolicyCollection cpolicycoll = null;

        #region Properties

        private string _addressType = string.Empty;
        private string _address1 = string.Empty;
        private string _address2 = string.Empty;
        private string _area = string.Empty;
        private string _city = string.Empty;
        private string _state = string.Empty;
        private string _country = string.Empty;
        private string _pin = string.Empty;
        private string _phoneNo = string.Empty;
        private short _tabIndex;

        //public string AddressTypeID
        //{
        //    get { return ddlAddrType.SelectedIndex > 0 ? ddlAddrType.SelectedValue : string.Empty; }
        //    set
        //    {
        //        if (value != "")
        //            ddlAddrType.SelectedValue = value;
        //    }
        //}
        //public string AddTypeText
        //{
        //    get
        //    {
        //        return AddressType1.Text;
        //    }
        //    set { AddressType1.Text = value; }
        //}
        public string Address1
        {
            get
            {
                return txtAddress1.Text;
            }
            set
            {
                txtAddress1.Text = value;
            }
        }
        public string Address2
        {
            get
            {
                return txtAddress2.Text;
            }
            set
            {
                txtAddress2.Text = value;
            }
        }
        public string Area
        {
            get
            {
                return hdnAreaId.Value;
            }
            set
            {
                hdnAreaId.Value = value;
            }
        }
        public string AreaText
        {
            get { return AreaUserControl1.Text; }
            set { AreaUserControl1.Text = value; }
        }
        public string City
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
            get { return CityUserControl1.Text; }
            set { CityUserControl1.Text = value; }
        }
        public string State
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
                return StateUserControl1.Text;
            }
            set
            {
                StateUserControl1.Text = value;
            }
        }
        public string Country
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
            get { return CountryUserControl1.Text; }
            set { CountryUserControl1.Text = value; }
        }
        public string District
        {
            get { return hdndistrictid.Value; }
            set { hdndistrictid.Value = value; }
        }
        public string DistrictText
        {
            get { return DistricUserControl1.Text; }
            set { DistricUserControl1.Text = value; }
        }
        public string PinCode
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
        public string PhoneNo
        {
            get
            {
                return null;// txtPhone.Text;
            }
            set
            {
                // txtPhone.Text = value;
            }
        }
        //public bool ChkPerIsPres
        //{
        //    get
        //    {
        //        return chkPerAsPres.Checked;
        //    }
        //    set
        //    {
        //        chkPerAsPres.Checked = value;
        //    }
        //}
        public short TabIndex
        {
            get
            {
                return _tabIndex;
            }
            set
            {
                _tabIndex = value;
                ////AddressType1.TabIndex = (short)(value++);
                //ddlAddrType.TabIndex = (short)(value++);
                txtAddress1.TabIndex = (short)(value++);
                txtAddress2.TabIndex = (short)(value++);
                AreaUserControl1.TabIndex = (short)(value++);
                CityUserControl1.TabIndex = (short)(value++);
                StateUserControl1.TabIndex = (short)(value++);
                CountryUserControl1.TabIndex = (short)(value++);
                txtPin.TabIndex = (short)(value++);
                //txtPhone.TabIndex = (short)(value);
                _tabIndex = value;
            }
        }

        #endregion

        #region PageLoad
        protected void Page_Load(object sender, EventArgs e)
        {
            if (SessionHandler.DBSESSION_ID > 0)
            {
                if (!IsPostBack)
                {
                    bindcountries();

                }

                hdnareaquick.Value = string.Empty;
                MasterClass obj = new MasterClass();
                hdndefaultstate.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.DEFAULT_STATE);
                DataSet _dsgetdocper = SessionHandler.DocPermission;
                hdnIsAssesment.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.IS_ASSESMENT_REQUIRED);

                //int DocCount = _dsgetdocper.Tables[0].Rows.Count;
                //for (int i = 0; i < DocCount; i++)
                //{
                //    string docIds = _dsgetdocper.Tables[0].Rows[i]["DOC_ID"].ToString();
                //    switch (docIds)
                //    {

                //        case "1"://--1  Area
                //            {
                //                if ((_dsgetdocper.Tables[0].Rows[i]["ACCESS_ADD"].ToString()) == "Y")
                //                    hdnareaquick.Value = "Y";
                //                else
                //                    hdnareaquick.Value = "N";
                //                break;
                //            }
                //        default:
                //            break;
                //    }

                //}
                InitializeLookupCtrls();
                //AjaxControlToolkit.ModalPopupExtender popup = AreaUserControl1.FindControl("_popUp") as AjaxControlToolkit.ModalPopupExtender;
                TextBox txtarea = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
                txtarea.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");
                txtarea.Attributes.Add("onblur", "javascript:return checkarea(this);");
                txtarea.ToolTip = "Select Area";
            }
            else
            {
                Response.Redirect("~/Default.aspx");
            }

        }
        #endregion

        /// <summary>
        /// Binds the data to drop down.
        /// </summary>
        /// <param name="ddlList">The DDL list.</param>
        /// <remarks></remarks>
        //protected void BindDataToDropDown(DropDownList ddlList)
        //{
        //    ddlList.DataSource = this.collection;
        //    ddlList.DataTextField = "Text";
        //    ddlList.DataValueField = "Value";
        //    ddlList.DataBind();
        //    ddlList.SelectedIndex = 1;
        //}
        protected virtual string NationalitySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
        {
            string Result = string.Empty;
            //CompanyPolicyCollection cpolicycoll = new CompanyPolicyCollection();
            //this.icompolicy = new EzHms.Services.ComapnyPolicyWebService();
            //cpolicycoll = this.icompolicy.Get_Parameter_Value(EnumType, GetEnumerationString.GetEnumDescription(EnumValue));
            //if (cpolicycoll != null)
            //    if (cpolicycoll.Count > 0)
            //        return Result = cpolicycoll.GetPresettings(0).PARAMETER_VALUE;
            //    else
            //        return string.Empty;
            //else
                return string.Empty;
        }
        protected void bindcountries()
        {
            IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
            SessionHandler.NATINALITY_ID = NationalitySetting(CompanyPolicyEnum.PARAMETER_CODE, PARAMETER_NAME.Default_Nationality);
            string query = "";
            if (hdnflag.Value == "PREREG")

            {
                 query = "SELECT COUNTRY_ID,COUNTRY_CD,COUNTRY_NAME FROM MA.COUNTRY where Record_status='A'";
            }
            else
            {
                 query = "SELECT COUNTRY_ID,COUNTRY_CD,COUNTRY_NAME FROM MA.COUNTRY where Record_status='A'";
            }
            
            DataSet ds = dMasters.DynamicDataset(query);
            ddlcountry.DataSource = ds.Tables[0];
            ddlcountry.DataTextField = "COUNTRY_NAME";
            ddlcountry.DataValueField = "COUNTRY_ID";
            ddlcountry.DataBind();
            ddlcountry.Items.Insert(0, new ListItem("--select--", "0"));
            ddlcountry.SelectedValue = "0";
            ddlcountry.Enabled = true;
       
                
            //EzHms.DataAccessObject.DBAddressMaster objdb = new EzHms.DataAccessObject.DBAddressMaster();
            EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
            CollectionBase _cbase_coll = objdb.GetAddressType();
            ddrelationaddr.DataSource = _cbase_coll;
            ddrelationaddr.DataTextField = "ADDRESS_TYPE_NAME";
            ddrelationaddr.DataValueField = "ADDR_TYPE_ID";
            ddrelationaddr.DataBind();
            ddrelationaddr.Items.Insert(0, new ListItem("--select--", "0"));
            ListItem removieitems = ddrelationaddr.Items.FindByText("Present");
            ddrelationaddr.Items.Remove(removieitems);
            ListItem removieitems1 = ddrelationaddr.Items.FindByText("Permanent");
            ddrelationaddr.Items.Remove(removieitems1);
            ListItem removieitems2 = ddrelationaddr.Items.FindByText("Permenent");
            ddrelationaddr.Items.Remove(removieitems2);
         
        }
        #region Lookup initialization
        public void InitializeLookupCtrls()
        {
            //Area Lookup
            AreaUserControl1.LookupName = "AREA";
            List<object> elements = new List<object>();
            elements.Add("0");
            elements.Add(hdndefaultstate.Value);
            AreaUserControl1.PreConditon = elements;
            AreaUserControl1.OnBlurRequired = true;

        }
        #endregion

        #region OnInit Method
        protected override void OnInit(EventArgs e)
        {
            //AutoCompleteExtender _extndrarea = this.AreaUserControl1.FindControl("_autoTxtSearchControl") as AutoCompleteExtender;
            //TextBox _txtBoxarea = this.AreaUserControl1.FindControl("txtSearchControl") as TextBox;
            //HiddenField _hiddenIDarea = this.AreaUserControl1.FindControl("_hiddenID") as HiddenField;
            //_txtBoxarea.Attributes.Remove("onblur");
            //string _scriptarea = "var results = eval('('+eventArgs.get_value()+')'); ";
            //_scriptarea += "OnAssignAddressDetails(results.AREA_ID, results.AREA_NAME, results.CITY_ID, results.CITY_NAME, results.STATE_ID, results.STATE_NAME,results.COUNTRY_ID,results.COUNTRY_NAME,results.PIN_CODE);";
            //_extndrarea.OnClientItemSelected = "function(sender,eventArgs){" + _scriptarea + "}";


            base.OnInit(e);
        }

        void AreaUserControl1_OnGridRowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                GridView gvarea = AreaUserControl1.FindControl("gridGeneric") as GridView;
                TextBox areatxtctrl = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField areahdn = AreaUserControl1.FindControl("_hiddenID") as HiddenField;
                string areaid = gvarea.DataKeys[e.Row.RowIndex].Values[0].ToString();
                string area = ((LinkButton)e.Row.Cells[0].Controls[0]).Text;
                string cityid = gvarea.DataKeys[e.Row.RowIndex].Values[1].ToString();
                string city = ((LinkButton)e.Row.Cells[1].Controls[0]).Text;
                string stateid = gvarea.DataKeys[e.Row.RowIndex].Values[2].ToString();
                string state = ((LinkButton)e.Row.Cells[2].Controls[0]).Text;
                string countryid = gvarea.DataKeys[e.Row.RowIndex].Values[3].ToString();
                string country = ((LinkButton)e.Row.Cells[3].Controls[0]).Text;
                string txtpinno = string.Empty;
                if (gvarea.DataKeys[e.Row.RowIndex].Values["PIN_CODE"] != null)
                    //txtpinno = ((LinkButton)e.Row.Cells[4].Controls[0]).Text;

                    txtpinno = gvarea.DataKeys[e.Row.RowIndex].Values["PIN_CODE"].ToString();

                System.Text.StringBuilder script = new System.Text.StringBuilder();
                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').value='" + area + "';");
                script.Append("document.getElementById('" + areahdn.ClientID + "').value='" + areaid + "';");
                script.Append("document.getElementById('" + CityUserControl1.ClientID + "').value='" + city + "';");
                script.Append("document.getElementById('" + hdncityid.ClientID + "').value='" + cityid + "';");
                script.Append("document.getElementById('" + StateUserControl1.ClientID + "').value='" + state + "';");
                script.Append("document.getElementById('" + hdnstateid.ClientID + "').value='" + stateid + "';");
                script.Append("document.getElementById('" + CountryUserControl1.ClientID + "').value='" + country + "';");
                script.Append("document.getElementById('" + hdncountryid.ClientID + "').value='" + countryid + "';");

                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').disabled=true;");
                script.Append("document.getElementById('" + txtPin.ClientID + "').value='" + txtpinno + "';");
                e.Row.Attributes["onclick"] = string.Empty;
                e.Row.Attributes.Add("onclick", script.ToString());
                //ScriptManager manager = ScriptManager.GetCurrent(this);
                //manager.SetFocus("txtPhone");
                //ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "FocusOnState", "$find('" + txtPhone.ClientID + "').focus(); ", true);

            }

        }

        void CityUserControl1_OnGridRowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                GridView gvarea = CityUserControl1.FindControl("gridGeneric") as GridView;
                TextBox areatxtctrl = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField areahdn = AreaUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox citytxtctrl = CityUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField cityhdn = CityUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox statetxtctrl = StateUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField statehdn = StateUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox countrytxtctrl = CountryUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField countryhdn = CountryUserControl1.FindControl("_hiddenID") as HiddenField;


                string areaid = gvarea.DataKeys[e.Row.RowIndex].Values[1].ToString();
                string area = ((LinkButton)e.Row.Cells[1].Controls[0]).Text;
                string cityid = gvarea.DataKeys[e.Row.RowIndex].Values[0].ToString();
                string city = ((LinkButton)e.Row.Cells[0].Controls[0]).Text;
                string stateid = gvarea.DataKeys[e.Row.RowIndex].Values[2].ToString();
                string state = ((LinkButton)e.Row.Cells[2].Controls[0]).Text;
                string countryid = gvarea.DataKeys[e.Row.RowIndex].Values[3].ToString();
                string country = ((LinkButton)e.Row.Cells[3].Controls[0]).Text;

                System.Text.StringBuilder script = new System.Text.StringBuilder();
                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').value='" + area + "';");
                script.Append("document.getElementById('" + areahdn.ClientID + "').value='" + areaid + "';");
                script.Append("document.getElementById('" + citytxtctrl.ClientID + "').value='" + city + "';");
                script.Append("document.getElementById('" + cityhdn.ClientID + "').value='" + cityid + "';");
                script.Append("document.getElementById('" + statetxtctrl.ClientID + "').value='" + state + "';");
                script.Append("document.getElementById('" + statehdn.ClientID + "').value='" + stateid + "';");
                script.Append("document.getElementById('" + countrytxtctrl.ClientID + "').value='" + country + "';");
                script.Append("document.getElementById('" + countryhdn.ClientID + "').value='" + countryid + "';");

                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').disabled=true;");
                script.Append("document.getElementById('" + txtPin.ClientID + "').focus();");
                e.Row.Attributes["onclick"] = string.Empty;
                e.Row.Attributes.Add("onclick", script.ToString());
                //ScriptManager manager = ScriptManager.GetCurrent(this);
                //manager.SetFocus("txtPhone");
                //ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "FocusOnState", "$find('" + txtPhone.ClientID + "').focus(); ", true);

            }

        }

        void StateUserControl1_OnGridRowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                GridView gvarea = StateUserControl1.FindControl("gridGeneric") as GridView;
                TextBox areatxtctrl = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField areahdn = AreaUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox citytxtctrl = CityUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField cityhdn = CityUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox statetxtctrl = StateUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField statehdn = StateUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox countrytxtctrl = CountryUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField countryhdn = CountryUserControl1.FindControl("_hiddenID") as HiddenField;


                string areaid = gvarea.DataKeys[e.Row.RowIndex].Values[1].ToString();
                string area = ((LinkButton)e.Row.Cells[1].Controls[0]).Text;
                string cityid = gvarea.DataKeys[e.Row.RowIndex].Values[2].ToString();
                string city = ((LinkButton)e.Row.Cells[2].Controls[0]).Text;
                string stateid = gvarea.DataKeys[e.Row.RowIndex].Values[0].ToString();
                string state = ((LinkButton)e.Row.Cells[0].Controls[0]).Text;
                string countryid = gvarea.DataKeys[e.Row.RowIndex].Values[3].ToString();
                string country = ((LinkButton)e.Row.Cells[3].Controls[0]).Text;

                System.Text.StringBuilder script = new System.Text.StringBuilder();
                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').value='" + area + "';");
                script.Append("document.getElementById('" + areahdn.ClientID + "').value='" + areaid + "';");
                script.Append("document.getElementById('" + citytxtctrl.ClientID + "').value='" + city + "';");
                script.Append("document.getElementById('" + cityhdn.ClientID + "').value='" + cityid + "';");
                script.Append("document.getElementById('" + statetxtctrl.ClientID + "').value='" + state + "';");
                script.Append("document.getElementById('" + statehdn.ClientID + "').value='" + stateid + "';");
                script.Append("document.getElementById('" + countrytxtctrl.ClientID + "').value='" + country + "';");
                script.Append("document.getElementById('" + countryhdn.ClientID + "').value='" + countryid + "';");

                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').disabled=true;");
                script.Append("document.getElementById('" + txtPin.ClientID + "').focus();");
                e.Row.Attributes["onclick"] = string.Empty;
                e.Row.Attributes.Add("onclick", script.ToString());
                //ScriptManager manager = ScriptManager.GetCurrent(this);
                //manager.SetFocus("txtPhone");
                //ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "FocusOnState", "$find('" + txtPhone.ClientID + "').focus(); ", true);

            }

        }

        void CountryUserControl1_OnGridRowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                GridView gvarea = CountryUserControl1.FindControl("gridGeneric") as GridView;
                TextBox areatxtctrl = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField areahdn = AreaUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox citytxtctrl = CityUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField cityhdn = CityUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox statetxtctrl = StateUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField statehdn = StateUserControl1.FindControl("_hiddenID") as HiddenField;
                TextBox countrytxtctrl = CountryUserControl1.FindControl("txtSearchControl") as TextBox;
                HiddenField countryhdn = CountryUserControl1.FindControl("_hiddenID") as HiddenField;


                string areaid = gvarea.DataKeys[e.Row.RowIndex].Values[1].ToString();
                string area = ((LinkButton)e.Row.Cells[1].Controls[0]).Text;
                string cityid = gvarea.DataKeys[e.Row.RowIndex].Values[2].ToString();
                string city = ((LinkButton)e.Row.Cells[2].Controls[0]).Text;
                string stateid = gvarea.DataKeys[e.Row.RowIndex].Values[3].ToString();
                string state = ((LinkButton)e.Row.Cells[3].Controls[0]).Text;
                string countryid = gvarea.DataKeys[e.Row.RowIndex].Values[0].ToString();
                string country = ((LinkButton)e.Row.Cells[0].Controls[0]).Text;


                System.Text.StringBuilder script = new System.Text.StringBuilder();
                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').value='" + area + "';");
                script.Append("document.getElementById('" + areahdn.ClientID + "').value='" + areaid + "';");
                script.Append("document.getElementById('" + citytxtctrl.ClientID + "').value='" + city + "';");
                script.Append("document.getElementById('" + cityhdn.ClientID + "').value='" + cityid + "';");
                script.Append("document.getElementById('" + statetxtctrl.ClientID + "').value='" + state + "';");
                script.Append("document.getElementById('" + statehdn.ClientID + "').value='" + stateid + "';");
                script.Append("document.getElementById('" + countrytxtctrl.ClientID + "').value='" + country + "';");
                script.Append("document.getElementById('" + countryhdn.ClientID + "').value='" + countryid + "';");

                script.Append("document.getElementById('" + areatxtctrl.ClientID + "').disabled=true;");
                script.Append("document.getElementById('" + txtPin.ClientID + "').focus();");
                e.Row.Attributes["onclick"] = string.Empty;
                e.Row.Attributes.Add("onclick", script.ToString());
                //ScriptManager manager = ScriptManager.GetCurrent(this);
                //manager.SetFocus("txtPhone");
                //ScriptManager.RegisterClientScriptBlock(this, typeof(Page), "FocusOnState", "$find('" + txtPhone.ClientID + "').focus(); ", true);

            }

        }

        #endregion

        #region RowCommand
        //public void AreaUserControl1_OnGridViewRowCommand(object sender, GridViewCommandEventArgs e)
        //{
        //    int index = Convert.ToInt32(e.CommandArgument);
        //    GridView gridView = (GridView)e.CommandSource;
        //    GridViewRow row = gridView.Rows[index];
        //    this.AreaUserControl1.Text = ((LinkButton)row.Cells[0].Controls[0]).Text;
        //    this.AreaUserControl1.Value = gridView.DataKeys[index].Values[0].ToString();
        //    this.CityUserControl1.Text = ((LinkButton)row.Cells[1].Controls[0]).Text;
        //    this.CityUserControl1.Value = gridView.DataKeys[index].Values[1].ToString();
        //    this.StateUserControl1.Text = ((LinkButton)row.Cells[2].Controls[0]).Text;
        //    this.StateUserControl1.Value = gridView.DataKeys[index].Values[2].ToString();
        //    this.CountryUserControl1.Text = ((LinkButton)row.Cells[3].Controls[0]).Text;
        //    this.CountryUserControl1.Value = gridView.DataKeys[index].Values[3].ToString();
        //}
        #endregion

        public void EnableControls(bool value)
        {
            txtAddress1.Enabled = value;
            txtAddress2.Enabled = value;
            AreaUserControl1.Enabled = value;
            CityUserControl1.Enabled = value;
            StateUserControl1.Enabled = value;
            CountryUserControl1.Enabled = value;
            txtPin.Enabled = value;

        }
        protected virtual string CompanySetting(EzHms.ModelEntity.CompanyPolicyEnum EnumType, Enum EnumValue)
        {
            //string Result = string.Empty;
            //this.cpolicycoll = new EzHms.ModelEntity.CompanyPolicyCollection();
            //this.icompolicy = new EzHms.Services.ComapnyPolicyWebService();
            //this.cpolicycoll = this.icompolicy.Get_Parameter_Value(EnumType, GetEnumerationString.GetEnumDescription(EnumValue));
            //if (this.cpolicycoll != null)
            //    if (cpolicycoll.Count > 0)
            //        return Result = cpolicycoll.GetPresettings(0).PARAMETER_DISPLAY_VALUE;
            //    else
            //        return string.Empty;
            //else
                return string.Empty;
        }
    }
}