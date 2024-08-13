
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
    using System.ComponentModel;
    //using CrediOrgMdl = EzHms.ModelEntity.CreditOrgMaster;
    using EzHms.Abstract;
    using AjaxControlToolkit;
    public partial class Private_UserControls_NewAddressDetails : System.Web.UI.UserControl
    {
        //IPatientRegistration iPatReg = null;
        //EzHms.Abstract.ICreditOrg _creditSer = null;
        //private EzHms.ModelEntity.CreditOrgCollection _credStateCol;
        private EzHms.ModelEntity.PatientRegistrationCollection collection = null;
        private string _addressTypeID = string.Empty;

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
            if (!IsPostBack)
            {
                //this.iPatReg = new EzHms.Services.PatientRegistration();
                //this.collection = this.iPatReg.Get_PatientOptions(EzHms.ModelEntity.MasterOptions.ADDRESSTYPE);
                //this.BindDataToDropDown(ddlAddrType);

            }
            InitializeLookupCtrls();
            AjaxControlToolkit.ModalPopupExtender popup = AreaUserControl1.FindControl("_popUp") as AjaxControlToolkit.ModalPopupExtender;



            TextBox txtarea = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
            txtarea.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");
            //txtarea.Attributes.Add("onfocus", "ShowPopUp('" + popup.ClientID + "')");
            txtarea.ToolTip = "Select Area";
            //txtarea.Enabled = false;
            //txtarea.Attributes.Add("onKeyPress", "javascript:return false;");

            //txtAddress2.Attributes.Add("onblur", "document.getElementById('ctl00_ContentPlaceHolder1_Address1_AreaUserControl1_txtSearchControl').focus()");

            // TextBox txtcity = CityUserControl1.FindControl("txtSearchControl") as TextBox;
            // txtcity.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");
            // txtcity.ToolTip = "Select City";
            //// txtcity.Attributes.Add("onKeyPress", "javascript:return false;");


            // TextBox txtstate = StateUserControl1.FindControl("txtSearchControl") as TextBox;
            // txtstate.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");
            // txtstate.ToolTip = "Select State";
            //// txtstate.Attributes.Add("onKeyPress", "javascript:return false;");


            // TextBox txtcountry = CountryUserControl1.FindControl("txtSearchControl") as TextBox;
            // txtcountry.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");
            // txtcountry.ToolTip = "Select Country";
            // txtcountry.Attributes.Add("onKeyPress", "javascript:return false;");

        }
        #endregion

        /// <summary>
        /// Binds the data to drop down.
        /// </summary>
        /// <param name="ddlList">The DDL list.</param>
        /// <remarks></remarks>
        protected void BindDataToDropDown(DropDownList ddlList)
        {
            ddlList.DataSource = this.collection;
            ddlList.DataTextField = "Text";
            ddlList.DataValueField = "Value";
            ddlList.DataBind();
            ddlList.SelectedIndex = 1;
        }

        #region Lookup initialization
        public void InitializeLookupCtrls()
        {
            //Area Lookup
            //ILookUpSearch iLookUpSearch = new EzHms.Services.LookUpSearchService();
            this.AreaUserControl1.LookupName = "AREA";
            this.AreaUserControl1.OnBlurRequired = true;
            //this.AreaUserControl1.GettingDataWithObjects = new LookUp.PagingMethodWithObject(iLookUpSearch.GetLookUpSearchData);

            //City Lookup
            //EzHms.Abstract.ICreditOrg iCity = new EzHms.Services.CreditOrgService();
            // this.CityUserControl1.LookupName = "CITY";
            //this.CityUserControl1.GettingDataWithObjects = new Private_UserControls_GenericGrid.PagingMethodWithObject(iLookUpSearch.GetLookUpSearchData);

            //State Lookup
            //EzHms.Abstract.ICreditOrg iState = new EzHms.Services.CreditOrgService();
            // this.StateUserControl1.LookupName = "STATE";
            //this.StateUserControl1.GettingDataWithObjects = new Private_UserControls_GenericGrid.PagingMethodWithObject(iLookUpSearch.GetLookUpSearchData);

            //Country Lookup
            //EzHms.Abstract.ICreditOrg iCountry = new EzHms.Services.CreditOrgService();
            //this.CountryUserControl1.LookupName = "COUNTRY";
            // this.CountryUserControl1.GettingDataWithObjects = new Private_UserControls_GenericGrid.PagingMethodWithObject(iLookUpSearch.GetLookUpSearchData);

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
    }
