using System;
using System.Collections;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using EzHms.Abstract;
using EzHms.ModelEntity;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using AjaxControlToolkit;
using EzHms.DataAccessObject;

public partial class Private_FrontOffice_FOUserControls_FinalPaymentControl : System.Web.UI.UserControl
{
    string dbdateformat = "yyyy/MM/dd";
    private IAutoGenerateCD autoCDSer = null;
    private ILookUpSearch lookUP = null;
    // private IPatientRegistration _lookp = null;
    // private IPatientRegistration pregService = null;
    SuperClass objsu = new SuperClass();
    //private EzHms.Abstract.ICompanyPolicy icompolicy = null;
    //private CompanyPolicyCollection cpolicycoll = null;
    DataTable HTMLtable = null;
    ReceiptMasterCollection recpColl = null;
    string dateformate = string.Empty;
    EzHms.Abstract.ILookUpSearch authService = null;
    DataTable dtablepaymode = new System.Data.DataTable();
    DataRow objDrPay;
    //private CompanyPolicyCollection cpolicyColl = null;
    //private ICompanyPolicy imomPolicy = null;
    MasterClass obj = new MasterClass();
    
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

            HdnSessionID.Value = SessionHandler.DBSESSION_ID.ToString();
            CompanyDateFormate();
            hdnroundtype.Value = StockPointSetting(StockPointEnum.ROUNDING_VALUE_TYPE).ToString();
            hdnroundoffval.Value = StockPointSetting(StockPointEnum.ROUNDING_VALUE).ToString();
            hdnExpiredateman.Value = "N";
            autoCDSer = new EzHms.Services.AutoGenerateCD();
            int docId = Convert.ToInt32(SessionHandler.DOCUMENT_ID);
            string alias_cd = StockPointSetting(StockPointEnum.ALIAS_CODE);
            this.BindRowToGrid("S");
            if (docId == 64)
            {
                hdnDocName.Value = "REG";
            }
            if (docId == 2354)
            {
                hdnDocName.Value = "REG";
            }
            if (docId == 2620 || docId == 2619)
            {
                hdnDocName.Value = "IPFINAL";
            }
            Session["CONCESSIONAUTH_FOR_ALL"] = EzHms.ModelEntity.Authorization_For.Op_Concession.GetHashCode();
            autoCompleteRemarks.ContextKey = SessionHandler.DOCUMENT_ID.ToString();
            autocompleterQuickRemarks.ContextKey = SessionHandler.DOCUMENT_ID.ToString();
            if (hdnDocName.Value == "REG")
            {
                string cdstr = autoCDSer.GetAutoGenerateCD("FO_REG_REC");
                txtReceoptNoAdvanced.Text = alias_cd + cdstr;
                txtreceiptNoQuick.Text = alias_cd + cdstr;
            }
            else if (hdnDocName.Value == "OP")
            {
                string cdstr = autoCDSer.GetAutoGenerateCD("OP BILL");
                txtReceoptNoAdvanced.Text = alias_cd + cdstr;
                txtreceiptNoQuick.Text = alias_cd + cdstr;
            }
            else if (hdnDocName.Value == "Cons")
            {
                string cdstr = autoCDSer.GetAutoGenerateCD("OP CONS");
                txtReceoptNoAdvanced.Text = alias_cd + cdstr;
                txtreceiptNoQuick.Text = alias_cd + cdstr;
            }
            else if (hdnDocName.Value == "IpAdvance")
            {
                string cdstr = autoCDSer.GetAutoGenerateCD("IP DEPST");
                txtReceoptNoAdvanced.Text = alias_cd + cdstr;
                txtreceiptNoQuick.Text = alias_cd + cdstr;
            }
            else if (hdnDocName.Value == "IPFINAL")
            {
                string cdstr = autoCDSer.GetAutoGenerateCD("IP SETTL");
                txtReceoptNoAdvanced.Text = alias_cd + cdstr;
                txtreceiptNoQuick.Text = alias_cd + cdstr;
            }
            else
            {
                string cdstr = autoCDSer.GetAutoGenerateCD("FO_RECPAY");
                txtReceoptNoAdvanced.Text = alias_cd + cdstr;
                txtreceiptNoQuick.Text = alias_cd + cdstr;
            }
            BindRowToGrid();
            txtReceiptDtAdvanced.Text = ClientTime.ToString(dateformate);
            txtreceiptDtQuick.Text = ClientTime.ToString(dateformate);

            BindPAymentModes();
            BindBankName();
            BindCurrencys();

            hdnAdvAmtLmtMand.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Advance_Limit_Mandatory);
            hdnAdvAmtLimit.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Advance_Limit);
            hdnbaseCurrency.Value = "104";
            hdnisallowgst.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_GST_REQUIRED);
            hdnbanknamemandateswipe.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_MANDATORY_SWIPING);
            hbnallowpinlabserviceforrefund.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.AllowPinlabforRefund);
            var currency = obj.CompanySettingDisplayValue(PARAMETER_NAMES.Base_Currency);

            IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
            if (string.IsNullOrEmpty(hdnbaseCurrency.Value))
            {
                hdnbaseCurrency.Value = "0";
            }
            string query = "SELECT CURRENCY_CD FROM MA.CURRENCY WHERE CURRENCY_ID=" + hdnbaseCurrency.Value;
            DataSet ds = dMasters.DynamicDataset(query);
            if (ds != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                {
                    lblchangeamttext.Text = "Change in " + ds.Tables[0].Rows[0]["CURRENCY_CD"] + " :";
                    hdncurrenydesc.Value = ds.Tables[0].Rows[0]["CURRENCY_CD"].ToString();
                }
                else
                {
                    lblchangeamttext.Text = "Change in " + currency + " :";
                    hdncurrenydesc.Value = currency.ToString();
                }
            }

            if (hdnbaseCurrency.Value == "")
            {
                hdnbaseCurrency.Value = "1";
                lblchangeamttext.Text = "Change in INR :";
                hdncurrenydesc.Value = "INDIAN RUPEE";
            }
            else
            {
                CURRENCY_ID = hdnbaseCurrency.Value;
                ddlCurrency.SelectedValue = hdnbaseCurrency.Value;
                if (ddlCurrency.Items.FindByValue(hdnbaseCurrency.Value) != null)
                    
                lblcurrcd.Text = ddlCurrency.Items.FindByValue(hdnbaseCurrency.Value).Text;
                lblChcurr.Text = ddlCurrency.Items.FindByValue(hdnbaseCurrency.Value).Text;
                txtCurrency.Text = ddlCurrency.Items.FindByValue(hdnbaseCurrency.Value).Text;
                hdnstpcurrname.Value = ddlCurrency.Items.FindByValue(hdnbaseCurrency.Value).Text;

                hdnstpcurrid.Value = CURRENCY_ID;
                txtreqamtkyd.Text = AMT_INCURRENCY;
                txtreqamtkyd.Text = DUE_AMOUNT;
                txtExchangeRate.Text = "1";
            }
            /* added on 23.08.2016 */
            hdnSrvchargValSetting.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Is_applicable_Service_charges_percentage_amt);
            hdnotprequired.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.CARD_TRANSACTION_OTP_REQUIRED);
            hdndateformat.Value = obj.CompanySettingDisplayValue(PARAMETER_NAMES.DATE_FORMAT);
            hdnPasIntgrtnReq.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Is_PAS_Integration_Req);
            hdnAutoFill_tran.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.REG_FEE_AUTO_FILL_IN_CASH);
            hdnMapcurrency.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_MAPPED_CURRENCY);
            if (string.IsNullOrEmpty(hdnSrvchargValSetting.Value))
            {
                hdnSrvchargValSetting.Value = "0";
            }
            /* up to here */

            if (ddlPaymentType.SelectedIndex == 0)
            {
                DisableControl();
            }


            List<object> element1 = new List<object>();
            element1.Add(0);
            if (hdnDocName.Value == "IPFINAL")
            {
                element1.Add(6);
                Session["CONCESSIONAUTH_FOR_ALL"] = "6";
            }
            else
            {
                element1.Add(1);
                Session["CONCESSIONAUTH_FOR_ALL"] = "1";
            }


            ucdueauth.LookupName = "AUTHORIZATIONBYTRANID_NEW";
            ucdueauth.PreConditon = element1;
            UcTransactionNo.LookupName = "Transation";
            List<object> elements = new List<object>();
            elements.Add(0);
            elements.Add(Session["DUE_AUTH_FOR_ALL"]);
            this.Search3.LookupName = "AUTHORIZATION_NEW1";
            this.Search3.OnBlurRequired = true;
            this.Search3.PreConditon = elements;

            TextBox dueauth = Search3.FindControl("txtSearchControl") as TextBox;
            dueauth.Attributes.Add("onblur", "return OnNullValue(this);");

            TextBox ucdueauth1 = ucdueauth.FindControl("txtSearchControl") as TextBox;
            ucdueauth1.Attributes.Add("onblur", "javascript:return OnNullValue(this);");

            if (Request.QueryString["MODE"] == "OP_VIEW")
            {
                string Bill_Type = Request.QueryString["Type"].ToString();
                int V_bill_id = 0, V_Pat_ID = 0, v_Tran_ID = 0;
                string V_Umr_No = "";
                switch (Bill_Type)
                {
                    case "OP":
                        {
                            V_bill_id = Convert.ToInt32(Request.QueryString["BillId"]);
                            V_Pat_ID = Convert.ToInt32(Request.QueryString["Pat_ID"]);
                            v_Tran_ID = Convert.ToInt32(Request.QueryString["Tran_id"]);
                            V_Umr_No = Request.QueryString["Umr_No"].ToString();
                            ViewTransactionDetails(V_bill_id, V_Pat_ID, v_Tran_ID, V_Umr_No);
                            break;
                        }
                    case "OSP":
                        {
                            V_bill_id = Convert.ToInt32(Request.QueryString["BillId"]);
                            V_Pat_ID = Convert.ToInt32(Request.QueryString["Pat_ID"]);
                            v_Tran_ID = Convert.ToInt32(Request.QueryString["Tran_id"]);
                            V_Umr_No = Request.QueryString["Umr_No"].ToString();
                            ViewTransactionDetails(V_bill_id, V_Pat_ID, v_Tran_ID, V_Umr_No);
                            break;
                        }
                    case "CORPORATE":
                        {
                            V_bill_id = Convert.ToInt32(Request.QueryString["BillId"]);
                            V_Pat_ID = Convert.ToInt32(Request.QueryString["Pat_ID"]);
                            v_Tran_ID = Convert.ToInt32(Request.QueryString["Tran_id"]);
                            V_Umr_No = Request.QueryString["Umr_No"].ToString();
                            ViewTransactionDetails(V_bill_id, V_Pat_ID, v_Tran_ID, V_Umr_No);
                            break;
                        }
                    default:
                        break;

                }

            }
            hdnUserCrdLmt.Value = "N";
            hdnSrvChrg.Value = "N";
            hdnpinelabintgreq.Value = "N";
            hdnempasaintgreq.Value = "N";
            hdnpaytmint.Value = "N";
            hdnCardNoMand.Value = "YES";
            hdnCardRefNoMand.Value = "YES";

            if (hdnUserCrdLmt.Value == "True")
            {


            }
            else
            {
                hdnOpConPcnt.Value = "0";
                hdnOpDuePcnt.Value = "0";
                hdnREGConPcnt.Value = "0";
                hdnREGDUEPcnt.Value = "0";
                hdnCONConPcnt.Value = "0";
                hdnCONDUEPcnt.Value = "0";
                hdnIPConPcnt.Value = "0";
                hdnIPDUEPcnt.Value = "0";
                hdnis_active.Value = "N";
                hdnopd_con.Value = "0";
                hdnopd_due.Value = "0";
            }
            /* added on 03.10.2016 */
            List<object> elmCancel = new List<object>();
            elmCancel.Add(0);
            elmCancel.Add(EzHms.ModelEntity.Authorization_For.Cheque_Authorization.GetHashCode());
            this.UCchequeAuth.LookupName = "AUTHORIZATION";
            this.UCchequeAuth.OnBlurRequired = true;
            this.UCchequeAuth.PreConditon = elmCancel;
            if (!string.IsNullOrEmpty(hdncheckAuthID.Value))
                UCchequeAuth.Value = hdncheckAuthID.Value;
            TextBox checkauth = UCchequeAuth.FindControl("txtSearchControl") as TextBox;
            dueauth.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");

            hdnpmtgatewayurl.Value = obj.WebConfigSettings("PAYMENT_GATEWAY_URL");
            hdnWebCfngAllowCash.Value = obj.CompanySettingDisplayValue(PARAMETER_NAMES.IS_ALLOW_CASH);
            //hdnWebCfngAllowCash.Value = obj.WebConfigSettings("WebCfngAllowCash");
            hdnpinelabuploadurl.Value = obj.WebConfigSettings("PINELABUPLOADURL");
            hdnpinelabapproveurl.Value = obj.WebConfigSettings("PINELABAPPROVEURL");
            hdnpinelabcancelurl.Value = obj.WebConfigSettings("PINELABCANCELURL");

            hdnempesaauthorzationurl.Value = obj.WebConfigSettings("EMPSAAUTHORIZATION");
            hdnempesasimulationurl.Value = obj.WebConfigSettings("EMPSASIMULATE");
            hdnempesaqueryurl.Value = obj.WebConfigSettings("EMPSAQUERY");
            hdnempesaAuthKeyvalue.Value = obj.WebConfigSettings("EMPASAAUTHKEY");
            hdnempasapasskey.Value = obj.WebConfigSettings("EMPASAPASSKEY");
            hdnpinelabautosave.Value = obj.WebConfigSettings("AutoSavePinelab");

            hdnecitizenip.Value = obj.WebConfigSettings("callBackURLOnSuccess");
            hdnecitizennotificationurl.Value = obj.WebConfigSettings("notificationURL");
            hdnecitizenpictureurl.Value = obj.WebConfigSettings("pictureURL");
            hdnecitizenapiurl.Value = obj.WebConfigSettings("empasadatapushurl");

            BindRowToCardGrid(); BindInsRowToGrid();
        }
    }

    private void BindInsRowToGrid()
    {
        DataTable dtableService = null;
        dtableService = ViewState["Product1"] as DataTable;
        if (dtableService == null)
        {
            dtableService = new DataTable();
            dtableService.Columns.Add("ITEM_ID");
            dtableService.Columns.Add("PRESCRIPTION_NO");
            dtableService.Columns.Add("ITEM_NAME");
            dtableService.Columns.Add("PLAN_ID");
            dtableService.Columns.Add("CARRIER_ID");
            dtableService.Columns.Add("CARRIER_NAME");
            dtableService.Columns.Add("AUTH_NO");
            dtableService.Columns.Add("RECEIPT_AMT");
            //dtableService.Columns.Add("RX_ITEM_ID");
            dtableService.Columns.Add("USB_TRACK_1");
            dtableService.Columns.Add("USB_TRACK_2");
            dtableService.Columns.Add("REJECT_DESC");
            dtableService.Columns.Add("INS_PAS_CARD_ID");
            dtableService.Columns.Add("PAS_SRV_ID");

        }
        ViewState["Product1"] = dtableService;
        if (dtableService.Rows.Count > 1)
        {
            int i = 0;
            while (i < dtableService.Rows.Count)
            {
                if (dtableService.Rows[i][0].ToString() == string.Empty)
                {
                    dtableService.Rows[i].Delete();
                    ViewState["Product1"] = dtableService;
                }
                i++;
            }
        }
        else if (dtableService.Rows.Count == 0)
            dtableService.Rows.Add();
        GvIns.DataSource = dtableService;
        GvIns.DataBind();
        GvQuote.DataSource = dtableService;
        GvQuote.DataBind();
    }
    private void BindRowToCardGrid()
    {
        DataTable dtableService = null;
        dtableService = ViewState["Productc"] as DataTable;
        if (dtableService == null)
        {
            dtableService = new DataTable();
            dtableService.Columns.Add("PATIENT_FIRST_NAME");
            dtableService.Columns.Add("PATIENT_LAST_NAME");
            dtableService.Columns.Add("DOB");
            dtableService.Columns.Add("GROUP_NO");
            dtableService.Columns.Add("PERSON_CODE");
            dtableService.Columns.Add("RELATION");
            dtableService.Columns.Add("GENDER");
            dtableService.Columns.Add("PROVIDER_NO");
            dtableService.Columns.Add("CARD_VERSION_NO");
            dtableService.Columns.Add("BIN");
            dtableService.Columns.Add("SPECIAL_ACC_AMT");
            dtableService.Columns.Add("CARRIER_COPAY");
            dtableService.Columns.Add("TRACK1");
            dtableService.Columns.Add("TRACK2");
            dtableService.Columns.Add("SUBSRIBER_NO");
        }
        ViewState["Productc"] = dtableService;
        if (dtableService.Rows.Count > 1)
        {
            int i = 0;
            while (i < dtableService.Rows.Count)
            {
                if (dtableService.Rows[i][0].ToString() == string.Empty)
                {
                    dtableService.Rows[i].Delete();
                    ViewState["Productc"] = dtableService;
                }
                i++;
            }
        }
        else if (dtableService.Rows.Count == 0)
            dtableService.Rows.Add();
        GvCardDetails.DataSource = dtableService;
        GvCardDetails.DataBind();
    }
    private void BindRowToGrid(string obj)
    {

        DataTable dtableService = new DataTable();
        dtableService.Columns.AddRange(new DataColumn[] 
        {
                new DataColumn("HEALTH_CARD_TYPE_ID"), 
                new DataColumn("CNCSN_RULE_ID"), 
                new DataColumn("EVENT_ID"), 
                new DataColumn("AUTH_ID"), 
                new DataColumn("TYPE"), 
                new DataColumn("CARD_NO"), 
                new DataColumn("MODE"),
                new DataColumn("PERCENTAGE"), 
                new DataColumn("AMOUNT"),
                new DataColumn("SERVICE_NAME"),
                new DataColumn("REMARKS"),

           
            });
        dtableService.Rows.Add(dtableService.NewRow());
        gvMultipleConcession.DataSource = dtableService;
        gvMultipleConcession.DataBind();



    }

    public void ViewTransactionDetails(int bill_id, int pat_id, int tran_id, string umr_no)
    {

    }

    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public static string[] Get_DiscountTypes1(int session_id)
    {
        List<string> _str = new List<string>();
        DataSet dset;
        session_id = Convert.ToInt32(SessionHandler.DBSESSION_ID);
        DBPatientRegistration objdb = new DBPatientRegistration();
        dset = objdb.Get_Registration_DropDowns("REG", session_id);
        DataTable ds = new DataTable();
        ds = dset.Tables[20];
        List<string> items = new List<string>();
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        foreach (DataRow row in ds.Rows)
        {
            items.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["DISCOUNT_TYPE_NAME"].ToString(), serializer.Serialize(row["DISCOUNT_TYPE_NAME"].ToString())));

        }
        return items.ToArray();


    }
    protected virtual string StockPointSetting(Enum Value)
    {

        return string.Empty;
    }
    protected virtual string CompanySettingDSValue(string parameter)
    {

        return string.Empty;
    }
    public void CompanyDateFormate()
    {
        hdnRegconSetting.Value = "Yes";
        ViewState["datefmt"] = "MM/dd/yyyy";
    }

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

    private void BindRowToGrid()
    {
        dtablepaymode.Columns.AddRange(new DataColumn[] 
        {
                new DataColumn("PAYMENT_TYPE"), 
                new DataColumn("AMOUNT"), 
                new DataColumn("CC_ISSUE_BANK_NAME"), 
                new DataColumn("CC_CARD_NO"), 
                new DataColumn("AUTH_CODE"), 
                new DataColumn("CC_VALID_TO_DT"),
               // new DataColumn("EMPTY_FIELDS"),

            });
        dtablepaymode.Rows.Add(dtablepaymode.NewRow());
        gvReceiptDetails.DataSource = dtablepaymode;
        gvReceiptDetails.DataBind();

    }
    public void BindPAymentModes()
    {
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();

        EzHms.DataAccessObject.DBEventform obj = new EzHms.DataAccessObject.DBEventform();
        EzHms.ModelEntity.Eventform objmodel = new EzHms.ModelEntity.Eventform();
        objmodel.DOC_ID = Convert.ToString(SessionHandler.DOCUMENT_ID);
        CollectionBase cs = (EzHms.ModelEntity.Eventformcollection)obj.DocumentPaymentModes_View_Edit(objmodel);

        ddlPaymentType.DataSource = cs;
        ddlPaymentType.DataTextField = "PAYMENT_MODE_NAME";
        ddlPaymentType.DataValueField = "PAYMENT_MODE_ID";
        ddlPaymentType.DataBind();
        if (cs.Count == 0)
        {
            ddlPaymentType.Items.Insert(0, new ListItem("--Select--", "0"));
        }

        ddlPaymentType.Enabled = true;
        string query1 = "SELECT PAYMENT_MODE_ID,PAYMENT_MODE_NAME FROM PAYMENT_MODE WHERE RECORD_STATUS='A' AND PAYMENT_MODE_ID IN(4,5)";
        DataSet ds1 = dMasters.DynamicDataset(query1);
        ddlcrdtype.DataSource = ds1.Tables[0];
        ddlcrdtype.DataTextField = "PAYMENT_MODE_NAME";
        ddlcrdtype.DataValueField = "PAYMENT_MODE_ID";
        ddlcrdtype.DataBind();
        ddlcrdtype.Items.Insert(0, new ListItem("--Select--", "0"));
        //ScriptManager.RegisterStartupScript(this, this.GetType(), "data", "javascript:checkpayment();", true);
    }
    public void BindBankName()
    {
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
        string query = "SELECT BANK_ID,BANK_NAME FROM MA.BANK WHERE RECORD_STATUS='A'";
        DataSet ds = dMasters.DynamicDataset(query);
        ddlBankName.DataSource = ds.Tables[0];
        ddlBankName.DataTextField = "BANK_NAME";
        ddlBankName.DataValueField = "BANK_ID";
        ddlBankName.DataBind();
        ddlBankName.Items.Insert(0, new ListItem("--Select--", "0"));
        ddlBankName.Enabled = true;

        ddbankName.DataSource = ds.Tables[0];
        ddbankName.DataTextField = "BANK_NAME";
        ddbankName.DataValueField = "BANK_ID";
        ddbankName.DataBind();
        ddbankName.Items.Insert(0, new ListItem("--Select--", "0"));
        ddbankName.Enabled = true;
    }

    public void BindCurrencys()
    {
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
        string query = "SELECT CURRENCY_ID,CURRENCY_NAME FROM MA.CURRENCY WHERE RECORD_STATUS='A'";
        DataSet ds = dMasters.DynamicDataset(query);
        ddlCurrency.DataSource = ds.Tables[0];
        ddlCurrency.DataTextField = "CURRENCY_NAME";
        ddlCurrency.DataValueField = "CURRENCY_ID";
        ddlCurrency.DataBind();
        ddlCurrency.Items.Insert(0, new ListItem("--Select--", "0"));
        ddlCurrency.SelectedValue = CURRENCY_ID;
        ddlCurrency.Enabled = true;
    }
      
    public void BindCardtypes(DataTable dt)
    {
        //IEntity intEnt = new EzHms.Services.HospitalServices();
        //EntityValueMasterCollection scopeColl = intEnt.GetEntityLevelCollection(EzHms.ModelEntity.ServiceDimenssions.CARD_TYPE);
        //if (scopeColl != null && scopeColl.Count > 0)
        //{
        if (dt != null && dt.Rows.Count > 0)
        {
            ddlCardType.DataSource = dt;
            ddlCardType.DataValueField = "CREDIT_CARD_TYPE_ID";
            ddlCardType.DataTextField = "CREDIT_CARD_TYPE_NAME";
            ddlCardType.DataBind();
            ddlCardType.Items.Insert(0, new ListItem("--Select--", "0"));

            ddcardType.DataSource = dt;
            ddcardType.DataValueField = "CREDIT_CARD_TYPE_ID";
            ddcardType.DataTextField = "CREDIT_CARD_TYPE_NAME";
            ddcardType.DataBind();
            ddcardType.Items.Insert(0, new ListItem("--Select--", "0"));
        }
        //}  
    }
    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public static string[] Get_DiscountTypes(int session_id)
    {
        List<string> _str = new List<string>();
        DataSet dset;
        //IEmployeeInformation empservice = new EzHms.Services.EmployeeInformation();
        //EmployeeCollectionMaster coll = new EmployeeCollectionMaster();
        //EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
        dset = null; //objdb.Get_Registration_DropDowns("REG", Convert.ToInt32(SessionHandler.DBSESSION_ID));
        DataTable ds = new DataTable();
        ds = dset.Tables[15];
        List<string> items = new List<string>();
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        foreach (DataRow row in ds.Rows)
        {
            items.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["PATIENT_RELATIONSHIP_DESC"].ToString(), serializer.Serialize(row["PATIENT_RELATIONSHIP_ID"].ToString())));

        }
        return items.ToArray();


    }


    public void BindTranctionData()
    {

    }
    public void SetTranctionData()
    {
        txtreceiptAmount.Text = recpColl.Getlist(0).RECEIPT_AMT.ToString();
        gvReceiptDetails.DataSource = recpColl;
        gvReceiptDetails.DataBind();
    }
    public void DisableControl()
    {
        txtamt.Enabled = false;
        txtExpDt.Enabled = false;
        txtCurrAmt.Enabled = false;
        txtreqamtkyd.Enabled = false;
        txtCardNo.Enabled = false;
        txtCurrency.Enabled = false;
        txtAuthCode.Enabled = false;
        txtChangeKyd.Enabled = false;
        ddlCardType.Enabled = false;
        ddlBankName.Enabled = false;
        ddlCurrency.Enabled = true;
    }

    //public void EnableDisableControls(bool value)
    //{
    //    txtamt.Enabled = value;
    //    txtExpDt.Enabled = value;
    //    txtCurrAmt.Enabled = value;
    //    txtreqamtkyd.Enabled = value;
    //    txtCardNo.Enabled = value;
    //    txtCurrency.Enabled = value;
    //    txtAuthCode.Enabled = value;
    //    txtChangeKyd.Enabled = value;
    //    ddlCardType.Enabled = value;
    //    ddlBankName.Enabled = value;
    //    ddlCurrency.Enabled = value;
    //    ddlPaymentType.Enabled = value;
    //    txtTenderedAmt.Enabled = value;
    //    imgbtnadd.Enabled = value;
    //    gvReceiptDetails.Enabled = value;
    //}
    public delegate void OnGet(object sender, ImageClickEventArgs e);
    public OnGet Getdueamount;

    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        this.imgbtnadd.Click += new EventHandler(imgbtnadd_Click);
        // this.imgbtnupdate.Click += new ImageClickEventHandler(imgbtnadd_Click);
    }
    private string htmlString;
    public string HTMLSTRING
    {
        get { return this.hdnHTMLString1.Value; }
        set { this.hdnHTMLString1.Value = value; }
    }

    private string currency_id;
    public string CURRENCY_ID
    {
        get { return hdnstpcurrid.Value; }
        set { hdnstpcurrid.Value = value; }
    }
    private string amt_incurrency;
    public string AMT_INCURRENCY
    {
        get { return amt_incurrency; }
        set { amt_incurrency = value; }
    }
    private string net_amount;
    public string NET_AMOUNT
    {
        get { return net_amount; }
        set { net_amount = value; }
    }
    private string due_amount;
    public string DUE_AMOUNT
    {
        get { return this.hdnDueAmt.Value; }
        set { this.hdnDueAmt.Value = value; }
    }
    private string payment_amount;
    public string PAYMENT_AMOUNT
    {
        get { return this.hdnPayAmt.Value; }
        set { this.hdnPayAmt.Value = value; }
    }
    public string OnAddClientClick
    {
        set
        {
            this.imgbtnadd.OnClientClick = value;
        }
    }
    public string OnUpdateClientClick
    {
        set
        {
            this.imgbtnupdate.OnClientClick = value;
        }
    }
    public string UserwiseConcPercent
    {
        get { return hdnConcPercent.Value; }
        set { hdnConcPercent.Value = value; }
    }
    public string UserwiseDuePercent
    {
        get { return hdnDuePercent.Value; }
        set { hdnDuePercent.Value = value; }
    }
    public string IsAllowUserwiseConc
    {
        get { return hdnIsAllowUserwiseConc.Value; }
        set { hdnIsAllowUserwiseConc.Value = value; }
    }
    void imgbtnadd_Click(object sender, EventArgs e)
    {
        if (this.Getdueamount != null)
            //this.Getdueamount(sender, e);
            return;
    }


    public class ReceiptMasterCollection : SortableCollectionBase
    {
        public ReceiptMasterCollection()
        {
            base.SortObjectType = typeof(ReceiptMaster);
        }
        public int Add(ReceiptMaster recpMaster)
        {
            return List.Add(recpMaster);
        }
        public ReceiptMaster GetList(int position)
        {
            return (ReceiptMaster)InnerList[position];
        }

        public ReceiptMasterCollection Filter(string billid)
        {
            //ReceiptMasterCollection recColl = new ReceiptMasterCollection();
            //if (List.Count > 0)
            //{
            //    List<ReceiptMaster> collection = GetCollection();

            //    foreach (ReceiptMaster recmaster in collection)
            //    {
            //        if (recmaster.BILL_ID.ToString() == billid)
            //            List.Add(recmaster);
            //        recColl.Add(List);
            //    }

            //}
            //return recColl;

            if (List.Count > 0)
            {
                List<ReceiptMaster> collection = GetCollection();
                IList<ReceiptMaster> filterValues = null;
                filterValues = collection.FindAll(ReceiptMaster => ReceiptMaster.BILL_ID.Equals(billid));
                ReceiptMasterCollection recColl = new ReceiptMasterCollection();
                foreach (ReceiptMaster rec in filterValues)
                {
                    recColl.Add(rec);

                }
                return recColl;
            }
            return null;
        }

        private List<ReceiptMaster> GetCollection()
        {
            List<ReceiptMaster> recmaster = new List<ReceiptMaster>();
            for (int i = 0; i < List.Count; i++)
            {
                recmaster.Add((ReceiptMaster)InnerList[i]);
            }
            return recmaster;
        }

        public int Add(TransactionMaster transMaster)
        {
            return List.Add(transMaster);
        }

        public TransactionMaster Getlist(int position)
        {
            return (TransactionMaster)InnerList[position];
        }

    }
    public class ReceiptMaster
    {
        private string session_id;
        public string SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        
        private string _IS_SAMPLE_NEEDED;
        public string IS_SAMPLE_NEEDED
        {
            get { return _IS_SAMPLE_NEEDED; }
            set { _IS_SAMPLE_NEEDED = value; }
        }
        private string _SRV_BILL_AMOUNT;

        public string SRV_BILL_AMOUNT
        {
            get { return _SRV_BILL_AMOUNT; }
            set { _SRV_BILL_AMOUNT = value; }
        }
        private string _CQ_DATE;

        public string CQ_DATE
        {
            get { return _CQ_DATE; }
            set { _CQ_DATE = value; }
        }
        private string _CQ_CHEQUE_REALIZATION_DT;

        public string CQ_CHEQUE_REALIZATION_DT
        {
            get { return _CQ_CHEQUE_REALIZATION_DT; }
            set { _CQ_CHEQUE_REALIZATION_DT = value; }
        }
        private float post_discount_amt;

        public float POST_DISCOUNT_AMT
        {
            get { return post_discount_amt; }
            set { post_discount_amt = value; }
        }
        private string nation_id;

        public string NATION_ID
        {
            get { return nation_id; }
            set { nation_id = value; }
        }
        private int cons_auth_id;

        public int CONS_AUTH_ID
        {
            get { return cons_auth_id; }
            set { cons_auth_id = value; }
        }
        private int consultant_id;

        public int CONSULTANT_ID
        {
            get { return consultant_id; }
            set { consultant_id = value; }
        }
        private int corporate_id;

        public int CORPORATE_ID
        {
            get { return corporate_id; }
            set { corporate_id = value; }
        }
        private string to_age;

        public string TO_AGE
        {
            get { return to_age; }
            set { to_age = value; }
        }
        private string from_age;

        public string FROM_AGE
        {
            get { return from_age; }
            set { from_age = value; }
        }
        private string prop_disc;
        public string PROP_DISC
        {
            get { return prop_disc; }
            set { prop_disc = value; }

        }
        private string sex;
        public string SEX
        {
            get { return sex; }
            set { sex = value; }

        }
        private string is_foreign_service;
        public string IS_FOREIGN_SERVICE
        {
            get { return is_foreign_service; }
            set { is_foreign_service = value; }
        }
        private string medi_bill_value;
        public string MEDI_BILL_VALUE
        {
            get { return medi_bill_value; }
            set { medi_bill_value = value; }

        }
        private string out_of_stock;
        public string OUT_OF_STOCK
        {
            get { return out_of_stock; }
            set { out_of_stock = value; }
        }
        private string non_stock_value;
        public string NON_STOCK_VALUE
        {
            get { return non_stock_value; }
            set { non_stock_value = value; }
        }
        private string new_drug;
        public string NEW_DRUG
        {
            get { return new_drug; }
            set { new_drug = value; }
        }
        private string service_bill_no;
        public string SERVICE_BILL_NO
        {
            get { return service_bill_no; }
            set { service_bill_no = value; }
        }

        private string sample_collection_time;
        public string SAMPLE_COLLECTION_TIME
        {
            get { return sample_collection_time; }
            set { sample_collection_time = value; }
        }

        private string outsource_bill_dt;
        public string OUTSOURCE_BILL_DT
        {
            get { return outsource_bill_dt; }
            set { outsource_bill_dt = value; }
        }
        private string out_source_bill_no;
        public string OUT_SOURCE_BILL_NO
        {
            get { return out_source_bill_no; }
            set { out_source_bill_no = value; }
        }
        private string consultant;
        public string CONSULTANT
        {
            get { return consultant; }
            set { consultant = value; }
        }
        private string department;
        public string DEPARTMENT
        {
            get { return department; }
            set { department = value; }
        }
        private string diagnosis;
        public string DIAGNOSIS
        {
            get { return diagnosis; }
            set { diagnosis = value; }
        }
        private string days_in_icu;
        public string DAYS_IN_ICU
        {
            get { return days_in_icu; }
            set { days_in_icu = value; }
        }

        private string days_on_ventilator;
        public string DAYS_ON_VENTILATOR
        {
            get { return days_on_ventilator; }
            set { days_on_ventilator = value; }
        }
        private string disch_dt;
        public string DISCH_DT
        {
            get { return disch_dt; }
            set { disch_dt = value; }
        }
        private string pres_billed;
        public string PRES_BILLED
        {
            get { return pres_billed; }
            set { pres_billed = value; }
        }
        private string pres_bounce_value;
        public string PRES_BOUNCE_VALUE
        {
            get { return pres_bounce_value; }
            set { pres_bounce_value = value; }
        }

        private string investigation_billed_as;
        public string INVESTIGATION_BILLED_AS
        {
            get { return investigation_billed_as; }
            set { investigation_billed_as = value; }
        }

        private string investigation_bill_value;
        public string INVESTIGATION_BILL_VALUE
        {
            get { return investigation_bill_value; }
            set { investigation_bill_value = value; }
        }
        private string outside;
        public string OUTSIDE
        {
            get { return outside; }
            set { outside = value; }
        }
        private string doctor_prescribed_value;
        public string DOCTOR_PRESCRIBED_VALUE
        {
            get { return doctor_prescribed_value; }
            set { doctor_prescribed_value = value; }
        }
        private string medication_prescribed;
        public string MEDICATION_PRESCRIBED
        {
            get { return medication_prescribed; }
            set { medication_prescribed = value; }
        }
        private string medi_pres_qty;
        public string MEDI_PRES_QTY
        {
            get { return medi_pres_qty; }
            set { medi_pres_qty = value; }
        }
        private string medi_value;
        public string MEDI_VALUE
        {
            get { return medi_value; }
            set { medi_value = value; }
        }
        private string medication_pres_billed;
        public string MEDICATION_PRES_BILLED
        {
            get { return medication_pres_billed; }
            set { medication_pres_billed = value; }
        }
        private string medi_billed_as;
        public string MEDI_BILLED_AS
        {
            get { return medi_billed_as; }
            set { medi_billed_as = value; }
        }
        private string medi_billed_qty;
        public string MEDI_BILLED_QTY
        {
            get { return medi_billed_qty; }
            set { medi_billed_qty = value; }
        }
        private string pres_value;
        public string PRES_VALUE
        {
            get { return pres_value; }
            set { pres_value = value; }
        }
        private string investigation_prescribed;
        public string INVESTIGATION_PRESCRIBED
        {
            get { return investigation_prescribed; }
            set { investigation_prescribed = value; }
        }
        private string card;

        public string CARD
        {
            get { return card; }
            set { card = value; }
        }
        private string cheque;

        public string CHEQUE
        {
            get { return cheque; }
            set { cheque = value; }
        }
        private string cash;

        public string CASH
        {
            get { return cash; }
            set { cash = value; }
        }
        private string patient_status;

        public string PATIENT_STATUS
        {
            get { return patient_status; }
            set { patient_status = value; }
        }
        private string room_name;

        public string ROOM_NAME
        {
            get { return room_name; }
            set { room_name = value; }
        }
        private string bed_name;

        public string BED_NAME
        {
            get { return bed_name; }
            set { bed_name = value; }
        }
        private string ward_name;

        public string WARD_NAME
        {
            get { return ward_name; }
            set { ward_name = value; }
        }
        private string cost_center;

        public string COST_CENTER
        {
            get { return cost_center; }
            set { cost_center = value; }
        }
        private string ref_no;

        public string REF_NO
        {
            get { return ref_no; }
            set { ref_no = value; }
        }

        private string disc_on_proc_charges;

        public string DISC_ON_PROC_CHARGES
        {
            get { return disc_on_proc_charges; }
            set { disc_on_proc_charges = value; }
        }
        private string phar_charges;

        public string PHAR_CHARGES
        {
            get { return phar_charges; }
            set { phar_charges = value; }
        }
        private string actual_gross_amount;

        public string ACTUAL_GROSS_AMOUNT
        {
            get { return actual_gross_amount; }
            set { actual_gross_amount = value; }
        }
        private string actual_phar_gross_amt;

        public string ACTUAL_PHAR_GROSS_AMT
        {
            get { return actual_phar_gross_amt; }
            set { actual_phar_gross_amt = value; }
        }

        private string corp_bill;

        public string CORP_BILL
        {
            get { return corp_bill; }
            set { corp_bill = value; }
        }
        private string write_off_bill;

        public string WRITE_OFF_BILL
        {
            get { return write_off_bill; }
            set { write_off_bill = value; }
        }
        private string proc_charges;

        public string PROC_CHARGES
        {
            get { return proc_charges; }
            set { proc_charges = value; }
        }
        private string disc_on_service_charges;

        public string DISC_ON_SERVICE_CHARGES
        {
            get { return disc_on_service_charges; }
            set { disc_on_service_charges = value; }
        }
        private string service_charges;

        public string SERVICE_CHARGES
        {
            get { return service_charges; }
            set { service_charges = value; }
        }
        private string disc_on_cons_charges;

        public string DISC_ON_CONS_CHARGES
        {
            get { return disc_on_cons_charges; }
            set { disc_on_cons_charges = value; }
        }
        private string cons_charges;

        public string CONS_CHARGES
        {
            get { return cons_charges; }
            set { cons_charges = value; }
        }
        private string disc_on_professional_charges;

        public string DISC_ON_PROFESSIONAL_CHARGES
        {
            get { return disc_on_professional_charges; }
            set { disc_on_professional_charges = value; }
        }
        private string professional_charges;

        public string PROFESSIONAL_CHARGES
        {
            get { return professional_charges; }
            set { professional_charges = value; }
        }
        private string disc_on_inv_charges;

        public string DISC_ON_INV_CHARGES
        {
            get { return disc_on_inv_charges; }
            set { disc_on_inv_charges = value; }
        }
        private string inv_charges;

        public string INV_CHARGES
        {
            get { return inv_charges; }
            set { inv_charges = value; }
        }
        private string disc_on_ward_charges;

        public string DISC_ON_WARD_CHARGES
        {
            get { return disc_on_ward_charges; }
            set { disc_on_ward_charges = value; }
        }
        private string ward_charges;

        public string WARD_CHARGES
        {
            get { return ward_charges; }
            set { ward_charges = value; }
        }
        private string advance_amount;

        public string ADVANCE_AMOUNT
        {
            get { return advance_amount; }
            set { advance_amount = value; }
        }
        private string discount_amount;

        public string DISCOUNT_AMOUNT
        {
            get { return discount_amount; }
            set { discount_amount = value; }
        }
        private string trans_type;

        public string TRANS_TYPE
        {
            get { return trans_type; }
            set { trans_type = value; }
        }
        private string bill_month;

        public string BILL_MONTH
        {
            get { return bill_month; }
            set { bill_month = value; }
        }
        private string tran_count;

        public string TRANS_COUNT
        {
            get { return tran_count; }
            set { tran_count = value; }
        }
        private string tat;

        public string TAT
        {
            get { return tat; }
            set { tat = value; }
        }
        private string req_dt;

        public string REQ_DT
        {
            get { return req_dt; }
            set { req_dt = value; }
        }
        private string ns_location;

        public string NS_LOCATION
        {
            get { return ns_location; }
            set { ns_location = value; }
        }
        private string disc_type;

        public string DISC_TYPE
        {
            get { return disc_type; }
            set { disc_type = value; }
        }
        private string ident_issued_by;

        public string IDENT_ISSUED_BY
        {
            get { return ident_issued_by; }
            set { ident_issued_by = value; }
        }
        private string ident_issued_dt;

        public string IDENT_ISSUED_DT
        {
            get { return ident_issued_dt; }
            set { ident_issued_dt = value; }
        }

        private string drug_acknowledged;
        public string DRUG_ACKNOWLEDGED
        {
            get { return drug_acknowledged; }
            set { drug_acknowledged = value; }
        }

        private string drug_acknowled_dt;

        public string DRUG_ACKNOWLED_DT
        {
            get { return drug_acknowled_dt; }
            set { drug_acknowled_dt = value; }
        }


        private string Raised_By;

        public string RAISED_BY
        {
            get { return Raised_By; }
            set { Raised_By = value; }
        }
        private string adv_amount;

        public string ADV_AMOUNT
        {
            get { return adv_amount; }
            set { adv_amount = value; }
        }
        private string monthly_income;

        public string MONTHLY_INCOME
        {
            get { return monthly_income; }
            set { monthly_income = value; }
        }
        private string tran_type;

        public string TRAN_TYPE
        {
            get { return tran_type; }
            set { tran_type = value; }
        }
        private string doc_id;

        public string DOC_ID
        {
            get { return doc_id; }
            set { doc_id = value; }
        }
        private string Corporate_name;

        public string CORPORATE_NAME
        {
            get { return Corporate_name; }
            set { Corporate_name = value; }
        }
        private string Admin_no;

        public string ADMIN_NO
        {
            get { return Admin_no; }
            set { Admin_no = value; }
        }
        private string Address2;

        public string ADDRESS2
        {
            get { return Address2; }
            set { Address2 = value; }
        }
        private string Address1;

        public string ADDRESS1
        {
            get { return Address1; }
            set { Address1 = value; }
        }
        private string Discnt_amount;

        public string DISCNT_AMT
        {
            get { return Discnt_amount; }
            set { Discnt_amount = value; }
        }
        private string price;

        public string PRICE
        {
            get { return price; }
            set { price = value; }
        }
        private string Proc_amount;

        public string PROC_AMOUNT
        {
            get { return Proc_amount; }
            set { Proc_amount = value; }
        }
        private string Pro_name;

        public string PRO_NAME
        {
            get { return Pro_name; }
            set { Pro_name = value; }
        }
        private string service_amount;

        public string SERVICE_AMOUNT
        {
            get { return service_amount; }
            set { service_amount = value; }
        }
        private string consult_amount;

        public string CONSULT_AMOUNT
        {
            get { return consult_amount; }
            set { consult_amount = value; }
        }
        private string prof_amount;

        public string PROF_AMOUNT
        {
            get { return prof_amount; }
            set { prof_amount = value; }
        }
        private string Insu_amount;

        public string INSU_AMOUNT
        {
            get { return Insu_amount; }
            set { Insu_amount = value; }
        }
        private string Invs_amount;

        public string INVS_AMOUNT
        {
            get { return Invs_amount; }
            set { Invs_amount = value; }
        }
        private string ward_amount;

        public string WARD_AMOUNT
        {
            get { return ward_amount; }
            set { ward_amount = value; }
        }
        private string payment_type_id;

        public string PAYMENT_TYPE_ID
        {
            get { return payment_type_id; }
            set { payment_type_id = value; }
        }
        private string grp_bill_no;

        public string GRP_BILL_NO
        {
            get { return grp_bill_no; }
            set { grp_bill_no = value; }
        }












        private string ward;

        public string WARD
        {
            get { return ward; }
            set { ward = value; }
        }
        private string tran_no;

        public string TRAN_NO
        {
            get { return tran_no; }
            set { tran_no = value; }
        }
        private string _equi_service_name = string.Empty;
        public string EQUI_SERVICE_NAME
        {
            get { return _equi_service_name; }
            set { _equi_service_name = value; }
        }

        private string _bill_service_name = string.Empty;
        public string BILL_SERVICE_NAME
        {
            get { return _bill_service_name; }
            set { _bill_service_name = value; }
        }
        private string _bill_service_cd = string.Empty;
        public string BILL_SERVICE_CD
        {
            get { return _bill_service_cd; }
            set { _bill_service_cd = value; }
        }

        private string _package_status = string.Empty;
        public string PACKAGE_STATUS
        {
            get { return _package_status; }
            set { _package_status = value; }
        }
        private string _exclude_concession;
        public string EXCLUDE_CONCESSION
        {
            get { return _exclude_concession; }
            set { _exclude_concession = value; }
        }

        private string _tran_total_advance;
        public string TRAN_TOTAL_ADVANCE
        {
            get { return _tran_total_advance; }
            set { _tran_total_advance = value; }
        }

        private string _tran_excess_amt;
        public string TRAN_EXCESS_AMT
        {
            get { return _tran_excess_amt; }
            set { _tran_excess_amt = value; }
        }


        private string _pkg_rfnd_amt;
        public string PKG_RFND_AMT
        {
            get { return _pkg_rfnd_amt; }
            set { _pkg_rfnd_amt = value; }
        }

        private string _ref_type = string.Empty;
        public string _REF_TYPE
        {
            get { return _ref_type; }
            set { _ref_type = value; }
        }

        private string _total_received = "0";
        public string TOTAL_RECEIVED
        {
            get { return _total_received; }
            set { _total_received = value; }
        }

        private string _receipt_amount = string.Empty;
        public string RECEIPT_AMOUNT
        {
            get { return _receipt_amount; }
            set { _receipt_amount = value; }
        }

        private int visit_type_id;
        public int VISIT_TYPE_ID
        {
            get { return visit_type_id; }
            set { visit_type_id = value; }
        }
        private string visit_type;

        public string VISIT_TYPE
        {
            get { return visit_type; }
            set { visit_type = value; }
        }
        private int Patient_Typ;

        public int Patient_typ
        {
            get { return Patient_Typ; }
            set { Patient_Typ = value; }
        }
        private string allowence_amount;

        public string ALLOWENCE_AMOUNT
        {
            get { return allowence_amount; }
            set { allowence_amount = value; }
        }
        private string discount_no;
        private string access_app;
        private string _approve_status;
        private string _FLAG;
        private string _SERVICE_PRICE;
        private string _MULTIPOST_DISCOUNT;
        private string _REFERAL_SRC_NAME;
        private int _REFERAL_SOURCE_ID;
        private string _GROSS_AMOUNT;
        private string _REFERAL_SOURCE_NAME;
        private string _CONCESSION_AMOUNT;
        private string _NET_AMOUNT;
        private string CONC_AMOUNT;
        private int _PAGE_NO;
        private int _PAGE_SIZE;
        private int _CURRENT_PAGE;
        private string _OP_COUNT;
        private string Refund_Amount;
        private string _due_status;
        private string _concession_status;
        private string sorting;
        private string _auth_cd;
        private string _prev_discnt_amt;

        private string _tran_due_amt;
        private string _tran_paid_amt;
        private string _tran_received_amt;
        private string _debit_card_amount = "0";
        private string _cheque_amount = "0";
        private string _pkg_total_received_amt = "0";

        private string _pkg_excess_amt = "0";
        private string _emp_srv_tax_amts;
        private string _color_cd = string.Empty;
        private int _old_bill_id = 0;
        private string _discharge_type = string.Empty;

        public string DISCHARGE_TYPE
        {
            get { return _discharge_type; }
            set { _discharge_type = value; }
        }
        public int OLD_BILL_ID
        {
            get { return _old_bill_id; }
            set { _old_bill_id = value; }
        }

        public string COLOR_CD
        {
            get { return _color_cd; }
            set { _color_cd = value; }
        }

        private string _color_codes = string.Empty;
        public string COLOR_CODES
        {
            get { return _color_codes; }
            set { _color_codes = value; }
        }

        private string _mobile_no1 = string.Empty;

        public string MOBILE_NO1
        {
            get { return _mobile_no1; }
            set { _mobile_no1 = value; }
        }

        public string DISCOUNT_NO
        {
            get { return discount_no; }
            set { discount_no = value; }
        }
        public string PKG_EXCESS_AMT
        {
            get { return _pkg_excess_amt; }
            set { _pkg_excess_amt = value; }
        }

        public string EMP_SRV_TAX_AMTS
        {
            get { return _emp_srv_tax_amts; }
            set { _emp_srv_tax_amts = value; }
        }
        public string PKG_TOTAL_RECEIVED_AMT
        {
            get { return _pkg_total_received_amt; }
            set { _pkg_total_received_amt = value; }
        }

        public string CHEQUE_AMOUNT
        {
            get { return _cheque_amount; }
            set { _cheque_amount = value; }
        }

        public string DEBIT_CARD_AMOUNT
        {
            get { return _debit_card_amount; }
            set { _debit_card_amount = value; }
        }

        public string TRAN_RECEIVED_AMT
        {
            get { return _tran_received_amt; }
            set { _tran_received_amt = value; }
        }

        public string TRAN_PAID_AMT
        {
            get { return _tran_paid_amt; }
            set { _tran_paid_amt = value; }
        }

        public string TRAN_DUE_AMT
        {
            get { return _tran_due_amt; }
            set { _tran_due_amt = value; }
        }


        public string PREV_DISCNT_AMT
        {
            get { return _prev_discnt_amt; }
            set { _prev_discnt_amt = value; }
        }

        public string AUTH_CD
        {
            get { return _auth_cd; }
            set { _auth_cd = value; }
        }

        private string _pkg_bill_no = string.Empty;

        public string PKG_BILL_NO
        {
            get { return _pkg_bill_no; }
            set { _pkg_bill_no = value; }
        }



        private int _adt_discnt_srv_id = 0;

        public int DISCNT_SRV_ID
        {
            get { return _adt_discnt_srv_id; }
            set { _adt_discnt_srv_id = value; }
        }

        private string _SERVICE_PRICE_ID = string.Empty;

        public string SERVICE_PRICE_ID
        {
            get { return _SERVICE_PRICE_ID; }
            set { _SERVICE_PRICE_ID = value; }
        }


        private int _admn_id = 0;

        public int ADMN_ID
        {
            get { return _admn_id; }
            set { _admn_id = value; }
        }
        private string _USER_NAME;

        public string USER_NAME
        {
            get { return _USER_NAME; }
            set { _USER_NAME = value; }
        }
        private string _ORG_NAME;

        public string ORG_NAME
        {
            get { return _ORG_NAME; }
            set { _ORG_NAME = value; }
        }
        private string _CITY_NAME;

        public string CITY_NAME
        {
            get { return _CITY_NAME; }
            set { _CITY_NAME = value; }
        }
        private string _PAYMENT_BY;

        public string PAYMENT_BY
        {
            get { return _PAYMENT_BY; }
            set { _PAYMENT_BY = value; }
        }

        private string _access_del;

        public string ACCESS_DEL
        {
            get { return _access_del; }
            set { _access_del = value; }
        }

        public string APPROVE_STATUS
        {
            get { return _approve_status; }
            set { _approve_status = value; }
        }

        public string ACCESS_APP
        {
            get { return access_app; }
            set { access_app = value; }
        }

        public string REFUND_AMOUNT
        {
            get { return Refund_Amount; }
            set { Refund_Amount = value; }
        }
        public string FLAG
        {
            get { return _FLAG; }
            set { _FLAG = value; }
        }

        public string SERVICE_PRICE
        {
            get { return _SERVICE_PRICE; }
            set { _SERVICE_PRICE = value; }
        }

        public string SORTING
        {
            get { return sorting; }
            set { sorting = value; }
        }

        public string MULTIPOST_DISCOUNT
        {
            get { return _MULTIPOST_DISCOUNT; }
            set { _MULTIPOST_DISCOUNT = value; }
        }

        public string REFERAL_SRC_NAME
        {
            get { return _REFERAL_SRC_NAME; }
            set { _REFERAL_SRC_NAME = value; }
        }

        public string GROSS_AMOUNT
        {
            get { return _GROSS_AMOUNT; }
            set { _GROSS_AMOUNT = value; }
        }

        public string REFERAL_SOURCE_NAME
        {
            get { return _REFERAL_SOURCE_NAME; }
            set { _REFERAL_SOURCE_NAME = value; }
        }

        public string CONCESSION_AMOUNT1
        {
            get { return _CONCESSION_AMOUNT; }
            set { _CONCESSION_AMOUNT = value; }
        }

        public string NET_AMOUNT1
        {
            get { return _NET_AMOUNT; }
            set { _NET_AMOUNT = value; }
        }

        public string CONC_AMOUNT1
        {
            get { return CONC_AMOUNT; }
            set { CONC_AMOUNT = value; }
        }

        public int PAGE_NO
        {
            get { return _PAGE_NO; }
            set { _PAGE_NO = value; }
        }

        public int REFERAL_SOURCE_ID
        {
            get { return _REFERAL_SOURCE_ID; }
            set { _REFERAL_SOURCE_ID = value; }
        }

        public int PAGE_SIZE
        {
            get { return _PAGE_SIZE; }
            set { _PAGE_SIZE = value; }
        }

        public int CURRENT_PAGE
        {
            get { return _CURRENT_PAGE; }
            set { _CURRENT_PAGE = value; }
        }

        public string OP_COUNT
        {
            get { return _OP_COUNT; }
            set { _OP_COUNT = value; }
        }

        public string DUE_STATUS
        {
            get { return _due_status; }
            set { _due_status = value; }
        }

        public string CONCESSION_STATUS
        {
            get { return _concession_status; }
            set { _concession_status = value; }
        }


        private int _cmp_id = 0;

        public int CMP_ID
        {
            get { return _cmp_id; }
            set { _cmp_id = value; }
        }

        #region FO_RECPAY MEMBERS

        private int transaction_id;
        private string transaction_no;
        private string transaction_dt;
        private string transaction_type;
        private string reference_id;//sending multiple values
        private int reference_type_id;
        private float adj_amount;
        private string transaction_by;
        private int fo_recpay_no;
        private int fo_recpay_det_rev_no;
        private int transaction_cashden_rev_no;
        private string isinsert;
        private string create_by_name;
        #endregion

        #region FO_RECPAY PROPERTIES

        public float ADJ_AMOUNT
        {
            get { return adj_amount; }
            set { adj_amount = value; }
        }

        public string CREATE_BY_NAME
        {
            get { return create_by_name; }
            set { create_by_name = value; }
        }
        public string ISINSERT
        {
            get { return isinsert; }
            set { isinsert = value; }
        }

        public int TRANSACTION_CASHDEN_REV_NO
        {
            get { return transaction_cashden_rev_no; }
            set { transaction_cashden_rev_no = value; }
        }

        public int FO_RECPAY_DET_REV_NO
        {
            get { return fo_recpay_det_rev_no; }
            set { fo_recpay_det_rev_no = value; }
        }

        public int FO_RECPAY_REV_NO
        {
            get { return fo_recpay_no; }
            set { fo_recpay_no = value; }
        }

        public int TRANSACTION_ID
        {
            get { return transaction_id; }
            set { transaction_id = value; }
        }
        public string TRANSACTION_NO
        {
            get { return transaction_no; }
            set { transaction_no = value; }
        }
        public string TRANSACTION_DT
        {
            get { return transaction_dt; }
            set { transaction_dt = value; }
        }
        public string TRANSACTION_TYPE
        {
            get { return transaction_type; }
            set { transaction_type = value; }
        }
        public string REFERENCE_ID
        {
            get { return reference_id; }
            set { reference_id = value; }
        }
        public int REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }

        public string TRANSACTION_BY
        {
            get { return transaction_by; }
            set { transaction_by = value; }
        }

        #endregion

        #region FO_RECPAY_CASH_DENOMINATION MEMBERS

        private int transaction_cashden_id;
        private int transaction_det_id;
        private int denomination_id;
        private int domination_quantity;
        private string domination_ids;
        private int denomination_rev_no;

        #endregion

        #region FO_RECPAY_CASH_DENOMINATION PROPERTIES

        public int DENOMINATION_REV_NO
        {
            get { return denomination_rev_no; }
            set { denomination_rev_no = value; }
        }

        public int TRANSACTION_DET_ID
        {
            get { return transaction_det_id; }
            set { transaction_det_id = value; }
        }
        public int TRANSACTION_CASHDEN_ID
        {
            get { return transaction_cashden_id; }
            set { transaction_cashden_id = value; }
        }

        #endregion

        #region FO_RECPAY_DET TABLE MEMBERS
        private string is_bill_det;
        private string payment_mode_id;
        private string cc_card_no;
        private string cc_approval_no;
        private string cc_card_holder_name;
        private string cc_edc_machine;
        private string cc_card_type_id;
        private string cc_issue_bank_name;
        private string cc_validity_from_dt;
        private string cc_validity_to_dt;
        private string cc_card_holder_addr;

        private string dc_card_no;
        private string dc_approval_no;
        private string dc_card_holder_name;
        private string dc_edc_machine;
        private string dc_card_type_id;
        private string dc_issue_bank_name;
        private string dc_issue_bank_id;
        private string cc_issue_bank_id;
        private string dc_validity_from_dt;
        private string dc_validity_to_dt;
        private string dc_card_holder_addr;

        private string dd_no;
        private int dd_issue_bank_id;
        private int dd_issue_bank_branch_id;
        //private string dd_dt;
        private string dd_validity_from_dt;
        private string dd_validity_to_dt;
        private int dd_service_bank_id;
        private int dd_service_bank_branch_id;

        private string cq_cheque_no;
        private string cq_bank_id;
        private string cq_issuer_name;
        private string cq_bank_branch_id;
        //private string cq_cheque_dt;
        private string cq_validity_from_dt;
        private string cq_validity_to_dt;
        private string cq_auth_id;
        private string ol_account_no;
        private string ol_account_holder_name;
        private int ol_bank_id;
        private int ol_bank_branch_id;
        private string ol_transaction_dt;
        private int ol_transaction_mode_id;
        private int voucher_type_id;
        private string voucher_no;
        private int vh_issuer_id;
        private string vh_valid_from_dt;
        private string vh_valid_to_dt;
        private string det_amount;
        private float cash_amount;
        private string _cc_card_holder_address;
        #endregion


        #region FO_RECPAY_CNCL PROPERTIES

        private string recpay_cncl_date = String.Empty;

        public string RECPAY_CNCL_DATE
        {
            get { return recpay_cncl_date; }
            set { recpay_cncl_date = value; }
        }



        private string recpay_cncl_no = String.Empty;

        public string RECPAY_CNCL_NO
        {
            get { return recpay_cncl_no; }
            set { recpay_cncl_no = value; }
        }

        private string recpay_cncl_id = String.Empty;
        public string RECPAY_CNCL_ID
        {
            get { return recpay_cncl_id; }
            set { recpay_cncl_id = value; }
        }
        #endregion


        private int _bill_state_id = 0;
        public int BILL_STATE_ID
        {
            get { return _bill_state_id; }
            set { _bill_state_id = value; }
        }


        private int _state_by_id = 0;
        public int STATE_BY_ID
        {
            get { return _state_by_id; }
            set { _state_by_id = value; }
        }

        #region FO_RECPAY_DET TABLE PROPERTIES
        public string IS_BILL_DET
        {
            get { return is_bill_det; }
            set { is_bill_det = value; }
        }
        public float CASH_AMOUNT
        {
            get { return cash_amount; }
            set { cash_amount = value; }
        }
        public string DET_AMOUNT
        {
            get { return det_amount; }
            set { det_amount = value; }
        }
        public string CC_ISSUE_BANK_NAME
        {
            get { return cc_issue_bank_name; }
            set { cc_issue_bank_name = value; }
        }

        public string CC_ISSUE_BANK_ID
        {
            get { return cc_issue_bank_id; }
            set { cc_issue_bank_id = value; }
        }

        public string CC_VALID_FROM_DT
        {
            get { return cc_validity_from_dt; }
            set { cc_validity_from_dt = value; }
        }
        public string CC_VALID_TO_DT
        {
            get { return cc_validity_to_dt; }
            set { cc_validity_to_dt = value; }
        }
        public string CC_CARD_HOLDER_ADDRESS
        {
            get { return _cc_card_holder_address; }
            set { _cc_card_holder_address = value; }
        }
        public string DC_ISSUE_BANK_NAME
        {
            get { return dc_issue_bank_name; }
            set { dc_issue_bank_name = value; }
        }
        public string DC_ISSUE_BANK_ID
        {
            get { return dc_issue_bank_id; }
            set { dc_issue_bank_id = value; }
        }
        public string DC_VALID_FROM_DT
        {
            get { return dc_validity_from_dt; }
            set { dc_validity_from_dt = value; }
        }
        public string DC_VALID_TO_DT
        {
            get { return dc_validity_to_dt; }
            set { dc_validity_to_dt = value; }
        }
        public string DD_VALID_FROM_DT
        {
            get { return dd_validity_from_dt; }
            set { dd_validity_from_dt = value; }
        }
        public string DD_VALID_TO_DT
        {
            get { return dd_validity_to_dt; }
            set { dd_validity_to_dt = value; }
        }
        public string CQ_VALID_FROM_DT
        {
            get { return cq_validity_from_dt; }
            set { cq_validity_from_dt = value; }
        }
        public string CQ_VALID_TO_DT
        {
            get { return cq_validity_to_dt; }
            set { cq_validity_to_dt = value; }
        }

        public string CQ_AUTH_ID
        {
            get { return cq_auth_id; }
            set { cq_auth_id = value; }
        }

        private string _cq_auth_anme;

        public string CHEQUE_AUTH_NAME
        {
            get { return _cq_auth_anme; }
            set { _cq_auth_anme = value; }
        }

        public string OL_TRANSACTION_DT
        {
            get { return ol_transaction_dt; }
            set { ol_transaction_dt = value; }
        }
        public int OL_TRANSACTION_MODE_ID
        {
            get { return ol_transaction_mode_id; }
            set { ol_transaction_mode_id = value; }
        }
        public int VOUCHER_TYPE_ID
        {
            get { return voucher_type_id; }
            set { voucher_type_id = value; }
        }
        public string VOUCHER_NO
        {
            get { return voucher_no; }
            set { voucher_no = value; }
        }
        public int VH_ISSUER_ID
        {
            get { return vh_issuer_id; }
            set { vh_issuer_id = value; }
        }
        public string VH_VALID_FROM_DT
        {
            get { return vh_valid_from_dt; }
            set { vh_valid_from_dt = value; }
        }
        public string VH_VALID_TO_DT
        {
            get { return vh_valid_to_dt; }
            set { vh_valid_to_dt = value; }
        }
        public string PAYMENT_MODE_ID
        {
            get { return payment_mode_id; }
            set { payment_mode_id = value; }
        }

        public int DENOMINATION_QTY
        {
            get { return domination_quantity; }
            set { domination_quantity = value; }
        }

        public int DENOMINATION_ID
        {
            get { return denomination_id; }
            set { denomination_id = value; }
        }

        public string DOMINATION_IDS
        {
            get { return domination_ids; }
            set { domination_ids = value; }
        }

        public string CC_CARD_NO
        {
            get { return cc_card_no; }
            set { cc_card_no = value; }
        }

        public string CC_APPROVAL_NO
        {
            get { return cc_approval_no; }
            set { cc_approval_no = value; }
        }

        public string CC_CARD_HOLDER_NAME
        {
            get { return cc_card_holder_name; }
            set { cc_card_holder_name = value; }
        }

        public string CC_EDC_MACHINE
        {
            get { return cc_edc_machine; }
            set { cc_edc_machine = value; }
        }

        public string CC_CARD_TYPE
        {
            get { return cc_card_type_id; }
            set { cc_card_type_id = value; }
        }

        public string CC_CARD_HOLD_ADDR
        {
            get { return cc_card_holder_addr; }
            set { cc_card_holder_addr = value; }
        }

        public string DC_CARD_NO
        {
            get { return dc_card_no; }
            set { dc_card_no = value; }
        }

        public string DC_APPROVAL_NO
        {
            get { return dc_approval_no; }
            set { dc_approval_no = value; }
        }

        public string DC_CARD_HOLD_NAME
        {
            get { return dc_card_holder_name; }
            set { dc_card_holder_name = value; }
        }

        public string DC_EDC_MACHINE
        {
            get { return dc_edc_machine; }
            set { dc_edc_machine = value; }
        }

        public string DC_CARD_TYPE_ID
        {
            get { return dc_card_type_id; }
            set { dc_card_type_id = value; }
        }

        public string DC_CARD_HOLD_ADDR
        {
            get { return dc_card_holder_addr; }
            set { dc_card_holder_addr = value; }
        }

        public string DD_NO
        {
            get { return dd_no; }
            set { dd_no = value; }
        }

        public int DD_ISSUE_BNK_ID
        {
            get { return dd_issue_bank_id; }
            set { dd_issue_bank_id = value; }
        }

        public int DD_ISSUE_BNK_BRN_ID
        {
            get { return dd_issue_bank_branch_id; }
            set { dd_issue_bank_branch_id = value; }
        }

        public int DD_SERV_BNK_ID
        {
            get { return dd_service_bank_id; }
            set { dd_service_bank_id = value; }
        }

        public int DD_SER_BNK_BRN_ID
        {
            get { return dd_service_bank_branch_id; }
            set { dd_service_bank_branch_id = value; }
        }

        public string CQ_CHEQUE_NO
        {
            get { return cq_cheque_no; }
            set { cq_cheque_no = value; }
        }

        public string CQ_ISSUER_NAME
        {
            get { return cq_issuer_name; }
            set { cq_issuer_name = value; }
        }

        public string CQ_BANK_ID
        {
            get { return cq_bank_id; }
            set { cq_bank_id = value; }
        }

        public string CQ_BNK_BRN_ID
        {
            get { return cq_bank_branch_id; }
            set { cq_bank_branch_id = value; }
        }

        public string OL_ACC_NO
        {
            get { return ol_account_no; }
            set { ol_account_no = value; }
        }

        public string OL_ACC_HOLD_NAME
        {
            get { return ol_account_holder_name; }
            set { ol_account_holder_name = value; }
        }

        public int OL_BNK_ID
        {
            get { return ol_bank_id; }
            set { ol_bank_id = value; }
        }

        public int OL_BNK_BRN_ID
        {
            get { return ol_bank_branch_id; }
            set { ol_bank_branch_id = value; }
        }



        #endregion

        #region FO_RECPAY_REF MEMBERS

        private int recpay_ref_rev_no;
        private int recpay_ref_id;
        private int advance_type_id;

        public int ADVANCE_TYPE_ID
        {
            get { return advance_type_id; }
            set { advance_type_id = value; }
        }

        public int RECPAY_REF_REV_NO
        {
            get { return recpay_ref_rev_no; }
            set { recpay_ref_rev_no = value; }
        }

        public int RECPAY_REF_ID
        {
            get { return recpay_ref_id; }
            set { recpay_ref_id = value; }
        }

        #endregion

        #region Extra Parameters For Edit Function

        private string adj_amount_id;
        private string adj_amount_rev_no;
        private string issue_bank_name;
        private int count;
        private string service_bank_name;
        private string cq_bank_name;
        private string ol_bank_name;
        private string advance;
        private string no_of_days;
        private string is_contact;
        private string refund_no;
        private int patient_id;
        private string gender;
        private string patient_type;
        private int patient_type_id;
        private string registration_no;
        private string consultant_name;
        private string age;
        private string receipt_type_name;
        private string no_of_discounts;

        public string NO_OF_DISCOUNTS
        {
            get { return no_of_discounts; }
            set { no_of_discounts = value; }
        }
        public string ADJ_AMOUNT_REV_NO
        {
            get { return adj_amount_rev_no; }
            set { adj_amount_rev_no = value; }
        }

        public string ADJ_AMOUNT_ID
        {
            get { return adj_amount_id; }
            set { adj_amount_id = value; }
        }

        public string REFUND_NO
        {
            get { return refund_no; }
            set { refund_no = value; }
        }

        public string IS_CONTACT
        {
            get { return is_contact; }
            set { is_contact = value; }
        }

        public string NO_OF_DAYS
        {
            get { return no_of_days; }
            set { no_of_days = value; }
        }

        public string ADVANCE
        {
            get { return advance; }
            set { advance = value; }
        }

        #region PATIENT DETAILS

        public string PATIENT_TYPE
        {
            get { return patient_type; }
            set { patient_type = value; }
        }
        public int PATIENT_TYPE_ID
        {
            get { return patient_type_id; }
            set { patient_type_id = value; }
        }

        public string AGE
        {
            get { return age; }
            set { age = value; }
        }
        private string display_age;
        public string DISPLAY_AGE
        {
            get { return display_age; }
            set { display_age = value; }
        }
        public string CONSULTANT_NAME
        {
            get { return consultant_name; }
            set { consultant_name = value; }
        }

        public string REGISTRATION_NO
        {
            get { return registration_no; }
            set { registration_no = value; }
        }

        public int PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }

        public string GENDER
        {
            get { return gender; }
            set { gender = value; }
        }

        #endregion

        public string RECEIPT_TYPE_NAME
        {
            get { return receipt_type_name; }
            set { receipt_type_name = value; }
        }

        public int COUNT
        {
            get { return count; }
            set { count = value; }
        }

        public string ISSUE_BANK_NAME
        {
            get { return issue_bank_name; }
            set { issue_bank_name = value; }
        }

        public string SERVICE_BANK_NAME
        {
            get { return service_bank_name; }
            set { service_bank_name = value; }
        }

        public string CQ_BANK_NAME
        {
            get { return cq_bank_name; }
            set { cq_bank_name = value; }
        }

        public string OL_BANK_NAME
        {
            get { return ol_bank_name; }
            set { ol_bank_name = value; }
        }

        #endregion

        #region PreAdvances
        private int _referenceype_id;
        private string _card_no;
        private string _card_expiry;
        private string _cardbank;
        private string _card_amount;
        private string _marital_status;
        private string _receipt_no;
        private string _receipt_date;
        private string _reg_no;
        private string _reg_dt;
        private string _reg_exp_dt;
        private string _res_person_name;
        private string _status;

        public string STATUS
        {
            get { return _status; }
            set { _status = value; }
        }

        public string RES_PERSON_NAME
        {
            get { return _res_person_name; }
            set { _res_person_name = value; }
        }

        public string REG_DT
        {
            get { return _reg_dt; }
            set { _reg_dt = value; }
        }
        public string REG_EXPIRY_DT
        {
            get { return _reg_exp_dt; }
            set { _reg_exp_dt = value; }
        }
        public string REG_NO
        {
            get { return _reg_no; }
            set { _reg_no = value; }
        }

        public string RECEIPT_DATE
        {
            get { return _receipt_date; }
            set { _receipt_date = value; }
        }

        public string RECEIPT_NO
        {
            get { return _receipt_no; }
            set { _receipt_no = value; }
        }

        public string MARITAL_STATUS
        {
            get { return _marital_status; }
            set { _marital_status = value; }
        }

        public int REFERENCEYPE_ID
        {
            get { return _referenceype_id; }
            set { _referenceype_id = value; }
        }

        public string CARD_NO
        {
            get { return _card_no; }
            set { _card_no = value; }
        }

        public string CARD_EXPIRY
        {
            get { return _card_expiry; }
            set { _card_expiry = value; }
        }

        public string CARDBANK
        {
            get { return _cardbank; }
            set { _cardbank = value; }
        }

        public string CARD_AMOUNT
        {
            get { return _card_amount; }
            set { _card_amount = value; }
        }
        #endregion

        private string discnt_ids;

        public string DISCNT_IDS
        {
            get { return discnt_ids; }
            set { discnt_ids = value; }
        }

        private int discnt_id;

        public int DISCNT_ID
        {
            get { return discnt_id; }
            set { discnt_id = value; }
        }

        private float _quantity;
        public float QUANTITY1
        {
            get { return _quantity; }
            set { _quantity = value; }
        }

        private int opd_bill_id;
        public int OPD_BILL_ID
        {
            get { return opd_bill_id; }
            set { opd_bill_id = value; }
        }

        private int opd_bill_rev_no;
        public int OPD_BILL_REV_NO
        {
            get { return opd_bill_rev_no; }
            set { opd_bill_rev_no = value; }
        }

        private int no_of_sittings;
        public int NO_OF_SITTINGS
        {
            get { return no_of_sittings; }
            set { no_of_sittings = value; }
        }

        private string opd_type_name;
        public string OPD_TYPE_NAME
        {
            get { return opd_type_name; }
            set { opd_type_name = value; }
        }

        private string procedure_name;
        public string PROCEDURE_NAME
        {
            get { return procedure_name; }
            set { procedure_name = value; }
        }

        private string prefix;
        public string PREFIX
        {
            get { return prefix; }
            set { prefix = value; }
        }

        private string _effect_from_dt;

        public string EFFECT_FROM_DT
        {
            get { return _effect_from_dt; }
            set { _effect_from_dt = value; }
        }



        private string _effect_to_dt;

        public string EFFECT_TO_DT
        {
            get { return _effect_to_dt; }
            set { _effect_to_dt = value; }
        }

        private string dscnt_status;

        public string DSCNT_STATUS
        {
            get { return dscnt_status; }
            set { dscnt_status = value; }
        }
        private string _appt_no;

        public string APPT_NO
        {
            get { return _appt_no; }
            set { _appt_no = value; }
        }
        private string _slot_time;

        public string SLOT_TIME
        {
            get { return _slot_time; }
            set { _slot_time = value; }
        }

        private string _title_desc;

        public string TITLE_DESC
        {
            get { return _title_desc; }
            set { _title_desc = value; }
        }

        private string _occupation = String.Empty;

        public string OCCUPATION
        {
            get { return _occupation; }
            set { _occupation = value; }
        }

        private string _cancel_dt = String.Empty;

        public string CANCEL_DT
        {
            get { return _cancel_dt; }
            set { _cancel_dt = value; }
        }

        private string _cancel_by = String.Empty;

        public string CANCEL_BY
        {
            get { return _cancel_by; }
            set { _cancel_by = value; }
        }

        private string _mother_mainden_name = String.Empty;

        public string MOTHER_MAINDEN_NAME
        {
            get { return _mother_mainden_name; }
            set { _mother_mainden_name = value; }
        }

        private string cq_brn_name;
        public string CQ_BRANCH_NAME
        {
            get { return cq_brn_name; }
            set { cq_brn_name = value; }
        }
        private int _auth_id;

        public int AUTH_ID
        {
            get { return _auth_id; }
            set { _auth_id = value; }
        }
        private string _payment_mode_name;

        public string PAYMENT_MODE_NAME
        {
            get { return _payment_mode_name; }
            set { _payment_mode_name = value; }
        }
        private string _user_name;

        public string USERNAME
        {
            get { return _user_name; }
            set { _user_name = value; }
        }
        private string _CANCEL_AMOUNT1;

        public string CANCEL_AMOUNT1
        {
            get { return _CANCEL_AMOUNT1; }
            set { _CANCEL_AMOUNT1 = value; }
        }private string _ca_bill_amt = "0";
        public string CA_BILL_AMT
        {
            set { _ca_bill_amt = value; }
            get { return _ca_bill_amt; }
        }
        private string _cmp_cncsn_amt = "0";
        public string CMP_CNCSN_AMT
        {
            set { _cmp_cncsn_amt = value; }
            get { return _cmp_cncsn_amt; }
        }
        private string _cmp_concsn_amt = "0";
        public string CMP_CONCSN_AMT
        {
            set { _cmp_concsn_amt = value; }
            get { return _cmp_concsn_amt; }
        }
        private string _cmp_cncsn_pct = "0";
        public string CMP_CNCSN_PCT
        {
            set { _cmp_cncsn_pct = value; }
            get { return _cmp_cncsn_pct; }
        }
        private string _cmp_due_amt = "0";
        public string CMP_DUE_AMT
        {
            set { _cmp_due_amt = value; }
            get { return _cmp_due_amt; }
        }
        private string _cmpny_due_amt = "0";
        public string CMPNY_DUE_AMT
        {
            set { _cmpny_due_amt = value; }
            get { return _cmpny_due_amt; }
        }
        private string _cmp_gross_amt = "0";
        public string CMP_GROSS_AMT
        {
            set { _cmp_gross_amt = value; }
            get { return _cmp_gross_amt; }
        }
        private string _cmp_net_amt = "0";
        public string CMP_NET_AMT
        {
            set { _cmp_net_amt = value; }
            get { return _cmp_net_amt; }
        }
        private string _cmp_paid_amt = "0";
        public string CMP_PAID_AMT
        {
            set { _cmp_paid_amt = value; }
            get { return _cmp_paid_amt; }
        }
        private string _cmp_tax_amt = "0";
        public string CMP_TAX_AMT
        {
            set { _cmp_tax_amt = value; }
            get { return _cmp_tax_amt; }
        }
        private string _cmp_tax_pct = "0";
        public string CMP_TAX_PCT
        {
            set { _cmp_tax_pct = value; }
            get { return _cmp_tax_pct; }
        }
        private string _cr_bill_amt = "0";
        public string CR_BILL_AMT
        {
            set { _cr_bill_amt = value; }
            get { return _cr_bill_amt; }
        }
        private string _cr_cmp_amt = "0";
        public string CR_CMP_AMT
        {
            set { _cr_cmp_amt = value; }
            get { return _cr_cmp_amt; }
        }
        private string _cr_cmp_pct = "0";
        public string CR_CMP_PCT
        {
            set { _cr_cmp_pct = value; }
            get { return _cr_cmp_pct; }
        }
        private string _cr_pat_amt = "0";
        public string CR_PAT_AMT
        {
            set { _cr_pat_amt = value; }
            get { return _cr_pat_amt; }
        }
        private string _cr_pat_pct = "0";
        public string CR_PAT_PCT
        {
            set { _cr_pat_pct = value; }
            get { return _cr_pat_pct; }
        }
        private string _exc_pha_amt = "0";
        public string EXC_PHA_AMT
        {
            set { _exc_pha_amt = value; }
            get { return _exc_pha_amt; }
        }
        private string _gross_pha_amt = "0";
        public string GROSS_PHA_AMT
        {
            set { _gross_pha_amt = value; }
            get { return _gross_pha_amt; }
        }
        private string _inc_pha_amt = "0";
        public string INC_PHA_AMT
        {
            set { _inc_pha_amt = value; }
            get { return _inc_pha_amt; }
        }
        private string _is_dschrg_without_bill;
        public string IS_DSCHRG_WITHOUT_BILL
        {
            set { _is_dschrg_without_bill = value; }
            get { return _is_dschrg_without_bill; }
        }
        private string _pat_cncsn_amt = "0";
        public string PAT_CNCSN_AMT
        {
            set { _pat_cncsn_amt = value; }
            get { return _pat_cncsn_amt; }
        }
        private string _pat_cncsn_pct = "0";
        public string PAT_CNCSN_PCT
        {
            set { _pat_cncsn_pct = value; }
            get { return _pat_cncsn_pct; }
        }
        private string _pat_due_amt = "0";
        public string PAT_DUE_AMT
        {
            set { _pat_due_amt = value; }
            get { return _pat_due_amt; }
        }
        private string _pat_gross_amt = "0";
        public string PAT_GROSS_AMT
        {
            set { _pat_gross_amt = value; }
            get { return _pat_gross_amt; }
        }
        private string _pat_net_amt = "0";
        public string PAT_NET_AMT
        {
            set { _pat_net_amt = value; }
            get { return _pat_net_amt; }
        }
        private string _pat_paid_amt = "0";
        public string PAT_PAID_AMT
        {
            set { _pat_paid_amt = value; }
            get { return _pat_paid_amt; }
        }
        private string _pat_excess_amt = "0";

        public string Pat_excess_amt
        {
            get { return _pat_excess_amt; }
            set { _pat_excess_amt = value; }
        }
        private string _pat_tax_amt = "0";
        public string PAT_TAX_AMT
        {
            set { _pat_tax_amt = value; }
            get { return _pat_tax_amt; }
        }
        private string _pat_tax_pct = "0";
        public string PAT_TAX_PCT
        {
            set { _pat_tax_pct = value; }
            get { return _pat_tax_pct; }
        }
        private string _performed_procs;
        public string PERFORMED_PROCS
        {
            set { _performed_procs = value; }
            get { return _performed_procs; }
        }
        private string _pkg_bill_amt = "0";
        public string PKG_BILL_AMT
        {
            set { _pkg_bill_amt = value; }
            get { return _pkg_bill_amt; }
        }
        private string _pkg_cncsn_amt = "0";
        public string PKG_CNCSN_AMT
        {
            set { _pkg_cncsn_amt = value; }
            get { return _pkg_cncsn_amt; }
        }
        private string _pkg_due_amt = "0";
        public string PKG_DUE_AMT
        {
            set { _pkg_due_amt = value; }
            get { return _pkg_due_amt; }
        }
        private string _pkg_exc_amt = "0";
        public string PKG_EXC_AMT
        {
            set { _pkg_exc_amt = value; }
            get { return _pkg_exc_amt; }
        }
        private string _pkg_gross_amt = "0";
        public string PKG_GROSS_AMT
        {
            set { _pkg_gross_amt = value; }
            get { return _pkg_gross_amt; }
        }
        private string _pkg_inc_amt = "0";
        public string PKG_INC_AMT
        {
            set { _pkg_inc_amt = value; }
            get { return _pkg_inc_amt; }
        }
        private string _pkg_net_amt = "0";
        public string PKG_NET_AMT
        {
            set { _pkg_net_amt = value; }
            get { return _pkg_net_amt; }
        }
        private string _pkg_paid_amt = "0";
        public string PKG_PAID_AMT
        {
            set { _pkg_paid_amt = value; }
            get { return _pkg_paid_amt; }
        }
        private string _pkg_postdsc_amt = "0";
        public string PKG_POSTDSC_AMT
        {
            set { _pkg_postdsc_amt = value; }
            get { return _pkg_postdsc_amt; }
        }

        private int _bill_from_amt;
        public int BILL_FROM_AMT
        {
            set { _bill_from_amt = value; }
            get { return _bill_from_amt; }
        }
        private int _bill_to_amt;
        public int BILL_TO_AMT
        {
            set { _bill_to_amt = value; }
            get { return _bill_to_amt; }
        }
        private string _is_discharge_without_bill;

        public string IS_DISCHARGE_WITHOUT_BILL
        {
            get { return _is_discharge_without_bill; }
            set { _is_discharge_without_bill = value; }
        }



        private ReceiptMasterCollection _receiptMaterColl;

        public ReceiptMasterCollection RECEIPT_MASTER_COLL
        {
            get { return _receiptMaterColl; }
            set { _receiptMaterColl = value; }
        }


        private string _previous_refund = string.Empty;

        public string PREVIOUS_REFUND
        {
            get { return _previous_refund; }
            set { _previous_refund = value; }
        }

        private string _service_group_cd = string.Empty;

        public string SERVICE_GROUP_CD
        {
            get { return _service_group_cd; }
            set { _service_group_cd = value; }
        }
        private string _result_entity_time = string.Empty;

        public string RESULT_ENTITY_TIME
        {
            get { return _result_entity_time; }
            set { _result_entity_time = value; }
        }
        private int _company_id;

        public int COMPANY_ID
        {
            get { return _company_id; }
            set { _company_id = value; }
        }
        private string _comp_id;

        public string COMP_ID
        {
            get { return _comp_id; }
            set { _comp_id = value; }
        }
        private string _emp_name = string.Empty;

        public string EMP_NAME
        {
            get { return _emp_name; }
            set { _emp_name = value; }
        }
        private string _emp_paid = string.Empty;

        public string EMP_PAID
        {
            get { return _emp_paid; }
            set { _emp_paid = value; }
        }
        private string _admn_dt = string.Empty;

        public string ADMN_DT
        {
            get { return _admn_dt; }
            set { _admn_dt = value; }
        }
        private string _billid = string.Empty;

        public string BILLID
        {
            get { return _billid; }
            set { _billid = value; }
        }



        private string _employeeid = string.Empty;

        public string EMPLOYEEID
        {
            get { return _employeeid; }
            set { _employeeid = value; }
        }


        private string _due_recvrd_amnt;
        public string DUE_RECVRD_AMNT
        {
            get { return _due_recvrd_amnt; }
            set { _due_recvrd_amnt = value; }
        }

        private string testing;

        public string Testing
        {
            get { return testing; }
            set { testing = value; }
        }
        private string _amount_full_det;

        public string AMOUNT_FULL_DET
        {
            get { return _amount_full_det; }
            set { _amount_full_det = value; }
        }
        private string _payment_mode_det;

        public string PAYMENT_MODE_DET
        {
            get { return _payment_mode_det; }
            set { _payment_mode_det = value; }
        }
        private string _denominations_IDs;

        public string DENOMINATION_IDS
        {
            get { return _denominations_IDs; }
            set { _denominations_IDs = value; }
        }
        private string _denominations_quantity;

        public string DENOMINATION_QUANTITY
        {
            get { return _denominations_quantity; }
            set { _denominations_quantity = value; }
        }
        private string _is_referal;

        public string IS_REFERAL
        {
            get { return _is_referal; }
            set { _is_referal = value; }
        }
        private string _org_price;

        public string ORG_PRICE
        {
            get { return _org_price; }
            set { _org_price = value; }
        }
        private string _doctor_price;

        public string DOCTOR_PRICE
        {
            get { return _doctor_price; }
            set { _doctor_price = value; }
        }

        private string _org_pct;

        public string ORG_PCT
        {
            get { return _org_pct; }
            set { _org_pct = value; }
        }
        private string _doctor_pct;

        public string DOCTOR_PCT
        {
            get { return _doctor_pct; }
            set { _doctor_pct = value; }
        }

        private string _is_letter_required;

        public string IS_LETTER_REQUIRED
        {
            get { return _is_letter_required; }
            set { _is_letter_required = value; }
        }

        private string dscnt_amnt;

        public string DSCNT_AMNT
        {
            get { return dscnt_amnt; }
            set { dscnt_amnt = value; }
        }

        private string discnt_perc = "0";

        public string DISCNT_PERC
        {
            get { return discnt_perc; }
            set { discnt_perc = value; }
        }

        private string _is_cash;
        public string IS_CASH
        {
            set { _is_cash = value; }
            get { return _is_cash; }
        }
        private int _cmpny_ref_letter_id;

        public int CMPNY_REFERAL_LETTER_ID
        {
            get { return _cmpny_ref_letter_id; }
            set { _cmpny_ref_letter_id = value; }
        }
        private string _cmp_srv_tax_amts;

        public string CMP_SRV_TAX_AMTS
        {
            get { return _cmp_srv_tax_amts; }
            set { _cmp_srv_tax_amts = value; }
        }
        private string _emp_srv_net_amts;

        public string EMP_SRV_NET_AMTS
        {
            get { return _emp_srv_net_amts; }
            set { _emp_srv_net_amts = value; }
        }
        private string _paitent_count;

        public string PATIENT_COUNT
        {
            get { return _paitent_count; }
            set { _paitent_count = value; }
        }
        private string _doctor_count;

        public string DOCTOR_COUNT
        {
            get { return _doctor_count; }
            set { _doctor_count = value; }
        }
        private string _company_tariff_ids;

        public string COMPANY_TARIFF_IDS
        {
            get { return _company_tariff_ids; }
            set { _company_tariff_ids = value; }
        }
        private string _equlent_tariff_srv_name;

        public string EQUELENT_TARIFF_SRV_NAME
        {
            get { return _equlent_tariff_srv_name; }
            set { _equlent_tariff_srv_name = value; }
        }
        private string _pkg_id;

        public string PKG_ID
        {
            get { return _pkg_id; }
            set { _pkg_id = value; }
        }
        private string _referal_cd;

        public string REFERAL_CD
        {
            get { return _referal_cd; }
            set { _referal_cd = value; }
        }
        private string _doctor_amt;

        public string DOCTOR_AMOUNT
        {
            get { return _doctor_amt; }
            set { _doctor_amt = value; }
        }
        private string _discharg_status;

        public string DSCHRG_STATUS
        {
            get { return _discharg_status; }
            set { _discharg_status = value; }
        }
        private string _command_type;

        public string COMMAND_TYPE
        {
            get { return _command_type; }
            set { _command_type = value; }
        }
        private int _uid;

        public int UserId
        {
            get { return _uid; }
            set { _uid = value; }
        }
        private string pkg_srv_name;
        public string PKG_SRV_NAME
        {
            get { return pkg_srv_name; }
            set { pkg_srv_name = value; }
        }
        public string _notappr_discnt_id = "0";
        public string NOTAPPR_DISCNT_ID
        {
            set { _notappr_discnt_id = value; }
            get { return _notappr_discnt_id; }
        }
        private string _refund_status;

        public string REFUND_STATUS
        {
            get { return _refund_status; }
            set { _refund_status = value; }
        }
        private string _discnt_status;

        public string DISCNT_STATUS
        {
            get { return _discnt_status; }
            set { _discnt_status = value; }
        }
        private string _lock_status;

        public string LOCK_STATUS
        {
            get { return _lock_status; }
            set { _lock_status = value; }
        }
        private string _credit_status;

        public string CREDIT_STATUS
        {
            get { return _credit_status; }
            set { _credit_status = value; }
        }
        private string _active_status;

        public string ACTIVE_STATUS
        {
            get { return _active_status; }
            set { _active_status = value; }
        }
        private string _lock_srv_id;

        public string SRV_LOCK_ID
        {
            get { return _lock_srv_id; }
            set { _lock_srv_id = value; }
        }
        private string _Credit_limit_id;

        public string CREDIT_LIMIT_ID
        {
            get { return _Credit_limit_id; }
            set { _Credit_limit_id = value; }
        }
        private string _bill_srv_id;

        public string BILL_SERVICE_ID
        {
            get { return _bill_srv_id; }
            set { _bill_srv_id = value; }
        }

        private string Referal_Mobile_number;

        public string REFERAL_MOBILENO
        {
            get { return Referal_Mobile_number; }
            set { Referal_Mobile_number = value; }
        }
        private string referal_address;

        public string REFERAL_ADDRESS
        {
            get { return referal_address; }
            set { referal_address = value; }
        }
        private string _service_type;

        public string SERVICE_TYPE
        {
            get { return _service_type; }
            set { _service_type = value; }
        }
        private string _order_id;

        public string ORDER_ID
        {
            get { return _order_id; }
            set { _order_id = value; }
        }

        private string credit_card_amount;

        public string CREDIT_CARD_AMOUNT
        {
            get { return credit_card_amount; }
            set { credit_card_amount = value; }
        }


        private string check_amount;

        public string CHECK_AMOUNT
        {
            get { return check_amount; }
            set { check_amount = value; }
        }
        private string gen_bill_no;


        public string GEN_BILL_NO
        {
            get { return gen_bill_no; }
            set { gen_bill_no = value; }
        }

        private string gen_bill_dt;

        public string GEN_BILL_DT
        {
            get { return gen_bill_dt; }
            set { gen_bill_dt = value; }
        }
        private string pkg_due_recovered = "0";

        public string PKG_DUE_RECOVERED
        {
            get { return pkg_due_recovered; }
            set { pkg_due_recovered = value; }
        }

        private string _temp_UserId;

        public string TEMP_USER_ID
        {
            get { return _temp_UserId; }
            set { _temp_UserId = value; }
        }
        private string _temp_password;

        public string TEMP_PASSWORD
        {
            get { return _temp_password; }
            set { _temp_password = value; }
        }

        private string _pkg_act_amt;

        public string PKG_ACT_AMT
        {
            get { return _pkg_act_amt; }
            set { _pkg_act_amt = value; }
        }
        private int business_partner_id;

        public int BUSINESS_PARTNER_ID
        {
            get { return business_partner_id; }
            set { business_partner_id = value; }
        }
        private string business_partner_cd;

        public string BUSINESS_PARTNER_CD
        {
            get { return business_partner_cd; }
            set { business_partner_cd = value; }
        }
        private string business_partner_name;

        public string BUSINESS_PARTNER_NAME
        {
            get { return business_partner_name; }
            set { business_partner_name = value; }
        }
        private string business_partner_desc;

        public string BUSINESS_PARTNER_DESC
        {
            get { return business_partner_desc; }
            set { business_partner_desc = value; }
        }
        private string blood_group;

        public string BLOOD_GROUP
        {
            get { return blood_group; }
            set { blood_group = value; }
        }
        private string accepted_reserved_qty;

        public string ACCEPTED_RESERVED_QTY
        {
            get { return accepted_reserved_qty; }
            set { accepted_reserved_qty = value; }
        }
        private string accepted_requested_qty;

        public string ACCEPTED_REQUESTED_QTY
        {
            get { return accepted_requested_qty; }
            set { accepted_requested_qty = value; }
        }
        private string accepted_reserved_amount;

        public string ACCEPTED_RESERVED_AMOUNT
        {
            get { return accepted_reserved_amount; }
            set { accepted_reserved_amount = value; }
        }
        private string accepted_requested_amount;

        public string ACCEPTED_REQUESTED_AMOUNT
        {
            get { return accepted_requested_amount; }
            set { accepted_requested_amount = value; }
        }
        private string emp_naration;

        public string EMP_NARATION
        {
            get { return emp_naration; }
            set { emp_naration = value; }
        }

        private string cncsn_naration;

        public string CNCSN_NARATION
        {
            get { return cncsn_naration; }
            set { cncsn_naration = value; }
        }

        private string due_naration;

        public string DUE_NARATION
        {
            get { return due_naration; }
            set { due_naration = value; }
        }

        private string _is_pkg;
        public string IS_PKG
        {
            get { return _is_pkg; }
            set { _is_pkg = value; }
        }
        private string _is_post_consultation;

        public string IS_POST_CONSULT
        {
            get { return _is_post_consultation; }
            set { _is_post_consultation = value; }
        }
        private string _approve_status_name;
        public string APPROVE_STATUS_NAME
        {
            get { return _approve_status_name; }
            set { _approve_status_name = value; }
        }
        private string _hospital_conc_amt = "0";

        public string HOSPITAL_CONC_AMT
        {
            get { return _hospital_conc_amt; }
            set { _hospital_conc_amt = value; }
        }
        //added by Harish
        private string activity_plan_id;

        public string ACTIVITY_PLAN_ID
        {
            get { return activity_plan_id; }
            set { activity_plan_id = value; }
        }
        private string activity_name;

        public string ACTIVITY_NAME
        {
            get { return activity_name; }
            set { activity_name = value; }
        }
        private string topic;

        public string TOPIC
        {
            get { return topic; }
            set { topic = value; }
        }
        private string speaker;

        public string SPEAKER
        {
            get { return speaker; }
            set { speaker = value; }
        }
        #region add by swetha
        private string _DOSAGE_QTY;

        public string DOSAGE_QTY
        {
            get { return _DOSAGE_QTY; }
            set { _DOSAGE_QTY = value; }
        }
        private string _SPECIMAN_ID;

        public string SPECIMAN_ID
        {
            get { return _SPECIMAN_ID; }
            set { _SPECIMAN_ID = value; }
        }
        private string _SPECIMAN_NAME;

        public string SPECIMAN_NAME
        {
            get { return _SPECIMAN_NAME; }
            set { _SPECIMAN_NAME = value; }
        }

        private string _VACCUTAINER_NAME;

        public string VACCUTAINER_NAME
        {
            get { return _VACCUTAINER_NAME; }
            set { _VACCUTAINER_NAME = value; }
        }

        private string _VACCUTAINER_ID;

        public string VACCUTAINER_ID
        {
            get { return _VACCUTAINER_ID; }
            set { _VACCUTAINER_ID = value; }
        }
        private int referal_customer_id;

        public int REFERAL_CUSTOMER_ID
        {
            get { return referal_customer_id; }
            set { referal_customer_id = value; }
        }
        private string refrl_customer_name;

        public string REFRL_CUSTOMER_NAME
        {
            get { return refrl_customer_name; }
            set { refrl_customer_name = value; }
        }
        private string reference_source_name;

        public string REFERENCE_SOURCE_NAME
        {
            get { return reference_source_name; }
            set { reference_source_name = value; }
        }

        private string _IS_EMERGENCY;

        public string IS_EMERGENCY
        {
            get { return _IS_EMERGENCY; }
            set { _IS_EMERGENCY = value; }
        }
        private string chng_recpt_xml;

        public string CHNG_RECPT_XML
        {
            get { return chng_recpt_xml; }
            set { chng_recpt_xml = value; }
        }

        private string invoice_no;

        public string INVOICE_NO
        {
            get { return invoice_no; }
            set { invoice_no = value; }
        }
        private string dispatch_method_name;

        public string DISPATCH_METHOD_NAME
        {
            get { return dispatch_method_name; }
            set { dispatch_method_name = value; }
        }
        private string ward_group_name;

        public string WARD_GROUP_NAME
        {
            get { return ward_group_name; }
            set { ward_group_name = value; }
        }
        private string phlebotomist_id;

        public string PHLEBOTOMIST_ID
        {
            get { return phlebotomist_id; }
            set { phlebotomist_id = value; }
        }
        private string dispatch_method_id;

        public string DISPATCH_METHOD_ID
        {
            get { return dispatch_method_id; }
            set { dispatch_method_id = value; }
        }

        private string cmp_ward_group_id;

        public string CMP_WARD_GROUP_ID
        {
            get { return cmp_ward_group_id; }
            set { cmp_ward_group_id = value; }
        }
        private string _phlebotomist_name;

        public string PHLEBOTOMIST_NAME
        {
            get { return _phlebotomist_name; }
            set { _phlebotomist_name = value; }
        }
        private string bill_type_name;

        public string BILL_TYPE_NAME
        {
            get { return bill_type_name; }
            set { bill_type_name = value; }
        }
        private string is_clinical_hist_req;

        public string IS_CLINICAL_HIST_REQ
        {
            get { return is_clinical_hist_req; }
            set { is_clinical_hist_req = value; }
        }

        private string gendere_id;

        public string GENDER_ID
        {
            get { return gendere_id; }
            set { gendere_id = value; }
        }

        private string chistory_text;

        public string CHISTORY_TEXT
        {
            get { return chistory_text; }
            set { chistory_text = value; }
        }

        private string instructions;

        public string INSTRUCTIONS
        {
            get { return instructions; }
            set { instructions = value; }
        }

        private string item_from;

        public string ITEM_FROM
        {
            get { return item_from; }
            set { item_from = value; }
        }

        private string is_billed;

        public string IS_BILLED
        {
            get { return is_billed; }
            set { is_billed = value; }
        }

        private string patient_class_id;

        public string PATIENT_CLASS_ID
        {
            get { return patient_class_id; }
            set { patient_class_id = value; }
        }
        private string order_det_id;

        public string ORDER_DET_ID
        {
            get { return order_det_id; }
            set { order_det_id = value; }
        }
        private string location_name;

        public string LOCATION_NAME
        {
            get { return location_name; }
            set { location_name = value; }
        }
        private string _XMLROOT;

        public string XMLROOT
        {
            get { return _XMLROOT; }
            set { _XMLROOT = value; }
        }
        private string service_status;

        public string SERVICE_STATUS
        {
            get { return service_status; }
            set { service_status = value; }
        }
        private string processing_lab;

        public string PROCESSING_LAB
        {
            get { return processing_lab; }
            set { processing_lab = value; }
        }
        private string received_by;

        public string RECEIVED_BY
        {
            get { return received_by; }
            set { received_by = value; }
        }
        private string dispatch_type;

        public string DISPATCH_TYPE
        {
            get { return dispatch_type; }
            set { dispatch_type = value; }
        }

        private string accepted_date;

        public string ACCEPTED_DATE
        {
            get { return accepted_date; }
            set { accepted_date = value; }
        }
        private string delivery_person;

        public string DELIVERY_PERSON
        {
            get { return delivery_person; }
            set { delivery_person = value; }
        }
        private string Profile_name;

        public string PROFILE_NAME
        {
            get { return Profile_name; }
            set { Profile_name = value; }
        }
        private string cncl_smry_id;

        public string CNCL_SMRY_ID
        {
            get { return cncl_smry_id; }
            set { cncl_smry_id = value; }
        }
        private string clinical_summary;

        public string CLINICAL_SUMMARY
        {
            get { return clinical_summary; }
            set { clinical_summary = value; }
        }
        private int medication_id;

        public int MEDICATION_ID
        {
            get { return medication_id; }
            set { medication_id = value; }
        }
        private string medication_name;

        public string MEDICATION_NAME
        {
            get { return medication_name; }
            set { medication_name = value; }
        }
        private string medication_desc;

        public string MEDICATION_DESC
        {
            get { return medication_desc; }
            set { medication_desc = value; }
        }
        private string medication_rev_no;

        public string MEDICATION_REV_NO
        {
            get { return medication_rev_no; }
            set { medication_rev_no = value; }
        }
        #endregion
        private string _activity_date;

        public string ACTIVITY_DATE
        {
            get { return _activity_date; }
            set { _activity_date = value; }
        }

        private string _employee_name;

        public string EMPLOYEE_NAME
        {
            get { return _employee_name; }
            set { _employee_name = value; }
        }

        private string _place;

        public string PLACE
        {
            get { return _place; }
            set { _place = value; }
        }
        private int _activity_plan_rev_id;

        public int ACTIVITY_PLAN_REV_ID
        {
            get { return _activity_plan_rev_id; }
            set { _activity_plan_rev_id = value; }
        }
        private string _is_taken_today;
        public string IS_TAKEN_TODAY
        {
            get { return _is_taken_today; }
            set { _is_taken_today = value; }
        }
        private string _lmp_dt;

        public string LMP_DT
        {
            get { return _lmp_dt; }
            set { _lmp_dt = value; }
        }
        private string _dosage;

        public string DOSAGE
        {
            get { return _dosage; }
            set { _dosage = value; }
        }
        private string report_dispatch_time;

        public string REPORT_DISPATCH_TIME
        {
            get { return report_dispatch_time; }
            set { report_dispatch_time = value; }
        }

        private string is_package;

        public string IS_PACKAGE
        {
            get { return is_package; }
            set { is_package = value; }
        }

        private string _XMLROOT_DET;

        public string XMLROOT_DET
        {
            get { return _XMLROOT_DET; }
            set { _XMLROOT_DET = value; }
        }


        private string _text = string.Empty;
        public string TEXT
        {
            get
            {
                return _text;
            }
            set
            {
                _text = value;
            }

        }
        private string _value = string.Empty;
        public string Value
        {
            get
            {
                return _value;
            }
            set
            {
                _value = value;
            }
        }
        private string total_advance = string.Empty;
        public string TOTAL_ADVANCE
        {
            get
            {
                return total_advance;
            }
            set
            {
                total_advance = value;
            }
        }
        private string _outher_medication;

        public string OUTHER_MEDICATION
        {
            get { return _outher_medication; }
            set { _outher_medication = value; }
        }
        private string mobile_phone;

        public string MOBILE_PHONE
        {
            get { return mobile_phone; }
            set { mobile_phone = value; }
        }
        private string _transaction_amount;

        public string TRANSACTION_AMOUNT
        {
            get { return _transaction_amount; }
            set { _transaction_amount = value; }
        }
        private string _transaction_excess_amount;

        public string TRANSACTION_EXCESS_AMOUNT
        {
            get { return _transaction_excess_amount; }
            set { _transaction_excess_amount = value; }
        }
        private string _advance_transaction_no;

        public string ADVANCE_TRANSACTION_NO
        {
            get { return _advance_transaction_no; }
            set { _advance_transaction_no = value; }
        }
        private string _tariff_id;
        public string TARIFF_ID
        {
            get { return _tariff_id; }
            set { _tariff_id = value; }
        }
        private string _hist_specimen_name;
        public string HIST_SPECIMEN_NAME
        {
            get { return _hist_specimen_name; }
            set { _hist_specimen_name = value; }
        }
        private string _hist_site;
        public string HIST_SITE
        {
            get { return _hist_site; }
            set { _hist_site = value; }
        }
        private string _hist_trf;
        public string HIST_TRF
        {
            get { return _hist_trf; }
            set { _hist_trf = value; }
        }
        private string _reg_status;
        public string REG_STATUS
        {
            get { return _reg_status; }
            set { _reg_status = value; }
        }
        private string _chng_reg_status;

        public string CHNG_REG_STATUS
        {
            get { return _chng_reg_status; }
            set { _chng_reg_status = value; }
        }

        private byte[] _PATIENT_IMAGE_XML;

        public byte[] PATIENT_IMAGE_XML
        {
            get { return _PATIENT_IMAGE_XML; }
            set { _PATIENT_IMAGE_XML = value; }
        }
        private string convert_pre_advance;

        public string CONVERT_PRE_ADVANCE
        {
            get { return convert_pre_advance; }
            set { convert_pre_advance = value; }
        }
        private string pre_refund;

        public string PRE_REFUND
        {
            get { return pre_refund; }
            set { pre_refund = value; }
        }
        private string _cmp_outstanding_due;

        public string CMP_OUTSTANDING_DUE
        {
            get { return _cmp_outstanding_due; }
            set { _cmp_outstanding_due = value; }
        }
        private string _cancelled_services_amt;

        public string CANCELED_SERVICES_AMT
        {
            get { return _cancelled_services_amt; }
            set { _cancelled_services_amt = value; }
        }
        private string _bill_cancelation_status;

        public string BILL_CANCELATION_STATUS
        {
            get { return _bill_cancelation_status; }
            set { _bill_cancelation_status = value; }
        }
        private string _phar_status;

        public string PHAR_STATUS
        {
            get { return _phar_status; }
            set { _phar_status = value; }
        }
        private string _result_value;

        public string RESULT_VALUE
        {
            get { return _result_value; }
            set { _result_value = value; }
        }
        private string _normal_value;

        public string NORMAL_VALUE
        {
            get { return _normal_value; }
            set { _normal_value = value; }
        }

        private string _OUTSTANDIGDUE_AMOUNT;

        public string OUTSTANDIGDUE_AMOUNT
        {
            get { return _OUTSTANDIGDUE_AMOUNT; }
            set { _OUTSTANDIGDUE_AMOUNT = value; }
        }

        private string _PAT_NO;

        public string PAT_NO
        {
            get { return _PAT_NO; }
            set { _PAT_NO = value; }
        }
        private string _IS_OLD;

        public string IS_OLD
        {
            get { return _IS_OLD; }
            set { _IS_OLD = value; }
        }

        private string _ISCORPORATE;

        public string ISCORPORATE
        {
            get { return _ISCORPORATE; }
            set { _ISCORPORATE = value; }
        }
        private int _APMNT_PAT_ID;

        public int APMNT_PAT_ID
        {
            get { return _APMNT_PAT_ID; }
            set { _APMNT_PAT_ID = value; }
        }
        private string _PAYMNT_MODE_ID;

        public string PAYMNT_MODE_ID
        {
            get { return _PAYMNT_MODE_ID; }
            set { _PAYMNT_MODE_ID = value; }
        }
        private string _PACKAGE_NAME;

        public string PACKAGE_NAME
        {
            get { return _PACKAGE_NAME; }
            set { _PACKAGE_NAME = value; }
        }
        private string _CONSULTATION_TYPE_NAME;

        public string CONSULTATION_TYPE_NAME
        {
            get { return _CONSULTATION_TYPE_NAME; }
            set { _CONSULTATION_TYPE_NAME = value; }
        }
        private string _Extra_col;

        public string EXTRA_COL
        {
            get { return _Extra_col; }
            set { _Extra_col = value; }
        }
        private string _REG_CNCL;

        public string REG_CNCL
        {
            get { return _REG_CNCL; }
            set { _REG_CNCL = value; }
        }
        private string _CREATED_BY;

        public string CREATED_BY
        {
            get { return _CREATED_BY; }
            set { _CREATED_BY = value; }
        }
        private string _CREATED_DT;

        public string CREATED_DT
        {
            get { return _CREATED_DT; }
            set { _CREATED_DT = value; }
        }
        //private string _MODIFY_BY;

        //public string MODIFY_BY
        //{
        //    get { return _MODIFY_BY; }
        //    set { _MODIFY_BY = value; }
        //}
        private string _MODIFY_DT;

        public string MODIFY_DT
        {
            get { return _MODIFY_DT; }
            set { _MODIFY_DT = value; }
        }
        private string _MODIFIED_BY_NAME;

        public string MODIFIED_BY_NAME
        {
            get { return _MODIFIED_BY_NAME; }
            set { _MODIFIED_BY_NAME = value; }
        }
        private string _ENTERED_AMOUNT;

        public string ENTERED_AMOUNT
        {
            get { return _ENTERED_AMOUNT; }
            set { _ENTERED_AMOUNT = value; }
        }
        private string _TENDERED_AMOUNT;

        public string TENDERED_AMOUNT
        {
            get { return _TENDERED_AMOUNT; }
            set { _TENDERED_AMOUNT = value; }
        }
        private string _CHANGE_AMOUNT;

        public string CHANGE_AMOUNT
        {
            get { return _CHANGE_AMOUNT; }
            set { _CHANGE_AMOUNT = value; }
        }
        private string _EX_RATE;

        public string EX_RATE
        {
            get { return _EX_RATE; }
            set { _EX_RATE = value; }
        }
        private string _CURRENCY_ID;

        public string CURRENCY_ID
        {
            get { return _CURRENCY_ID; }
            set { _CURRENCY_ID = value; }
        }
        private string _CURRENCY_NAME;

        public string CURRENCY_NAME
        {
            get { return _CURRENCY_NAME; }
            set { _CURRENCY_NAME = value; }
        }
        private string _no_times_disc_count;

        public string NO_TIMES_DISC_COUNT
        {
            get { return _no_times_disc_count; }
            set { _no_times_disc_count = value; }
        }



        private string _UTILIZED_AMOUNT;

        public string UTILIZED_AMOUNT
        {
            get { return _UTILIZED_AMOUNT; }
            set { _UTILIZED_AMOUNT = value; }
        }
        private string _REMAINING_AMOUNT;

        public string REMAINING_AMOUNT
        {
            get { return _REMAINING_AMOUNT; }
            set { _REMAINING_AMOUNT = value; }
        }

        private string _CC_AUTH_CD;

        public string CC_AUTH_CD
        {
            get { return _CC_AUTH_CD; }
            set { _CC_AUTH_CD = value; }
        }
        private string _DC_AUTH_CD;

        public string DC_AUTH_CD
        {
            get { return _DC_AUTH_CD; }
            set { _DC_AUTH_CD = value; }
        }

        private string _PARENT_BILL_ID;

        public string PARENT_BILL_ID
        {
            get { return _PARENT_BILL_ID; }
            set { _PARENT_BILL_ID = value; }
        }

        private string _PARENT_BILL_NO;

        public string PARENT_BILL_NO
        {
            get { return _PARENT_BILL_NO; }
            set { _PARENT_BILL_NO = value; }
        }

        private string _DEBIT_AMOUNT;

        public string DEBIT_AMOUNT
        {
            get { return _DEBIT_AMOUNT; }
            set { _DEBIT_AMOUNT = value; }
        }

        private string _CREDIT_AMOUNT;

        public string CREDIT_AMOUNT
        {
            get { return _CREDIT_AMOUNT; }
            set { _CREDIT_AMOUNT = value; }
        }
        private string _MODIFY_BY_NAME;

        public string MODIFY_BY_NAME
        {
            get { return _MODIFY_BY_NAME; }
            set { _MODIFY_BY_NAME = value; }
        }

        private int _MODIFY_BY1;

        public int MODIFY_BY1
        {
            get { return _MODIFY_BY1; }
            set { _MODIFY_BY1 = value; }
        }

        private string _FROM_BILL_SRV_ID;

        public string FROM_BILL_SRV_ID
        {
            get { return _FROM_BILL_SRV_ID; }
            set { _FROM_BILL_SRV_ID = value; }
        }
        private string _FROM_DOCTOR_NAME;

        public string FROM_DOCTOR_NAME
        {
            get { return _FROM_DOCTOR_NAME; }
            set { _FROM_DOCTOR_NAME = value; }
        }
        private string _MAX_SCH_DT;

        public string MAX_SCH_DT
        {
            get { return _MAX_SCH_DT; }
            set { _MAX_SCH_DT = value; }
        }
        private string _CURR_SCH_DT;

        public string CURR_SCH_DT
        {
            get { return _CURR_SCH_DT; }
            set { _CURR_SCH_DT = value; }
        }
        private string _SCH_DT;

        public string SCH_DT
        {
            get { return _SCH_DT; }
            set { _SCH_DT = value; }
        }
        private string _BILL_SRV_SCH_ID;

        public string BILL_SRV_SCH_ID
        {
            get { return _BILL_SRV_SCH_ID; }
            set { _BILL_SRV_SCH_ID = value; }
        }

        private string _SERVICE_NAME;

        public string SERVICE_NAME1
        {
            get { return _SERVICE_NAME; }
            set { _SERVICE_NAME = value; }
        }
        private string _CREATE_DT;

        public string CREATE_DT1
        {
            get { return _CREATE_DT; }
            set { _CREATE_DT = value; }
        }

        private string doctor_name;

        public string DOCTOR_NAME
        {
            get { return doctor_name; }
            set { doctor_name = value; }
        }
        private string mobile_number;

        public string MOBILE_NUMBER
        {
            get { return mobile_number; }
            set { mobile_number = value; }
        }
        private string ref_doctor_name;

        public string REF_DOCTOR_NAME
        {
            get { return ref_doctor_name; }
            set { ref_doctor_name = value; }
        }
        private string companyname;

        public string COMPANYNAME
        {
            get { return companyname; }
            set { companyname = value; }
        }
        private string depositors_name;

        public string DEPOSITORS_NAME
        {
            get { return depositors_name; }
            set { depositors_name = value; }
        }


        private string is_free_followup;

        public string IS_FREE_FOLLOWUP
        {
            get { return is_free_followup; }
            set { is_free_followup = value; }
        }
        private string _pkg_dts;

        public string PKG_DTS
        {
            get { return _pkg_dts; }
            set { _pkg_dts = value; }
        }

        private string free_followup_doctor_id;

        public string FREE_FOLLOWUP_DOCTOR_ID
        {
            get { return free_followup_doctor_id; }
            set { free_followup_doctor_id = value; }
        }

        private string free_followup_visits;

        public string FREE_FOLLOWUP_VISITS
        {
            get { return free_followup_visits; }
            set { free_followup_visits = value; }
        }

        private string free_followup_visits_util;

        public string FREE_FOLLOWUP_VISITS_UTIL
        {
            get { return free_followup_visits_util; }
            set { free_followup_visits_util = value; }
        }

        private string free_followup_max_date;

        public string FREE_FOLLOWUP_MAX_DATE
        {
            get { return free_followup_max_date; }
            set { free_followup_max_date = value; }
        }

        private float _BALANCE_AMOUNT;

        public float BALANCE_AMOUNT
        {
            get { return _BALANCE_AMOUNT; }
            set { _BALANCE_AMOUNT = value; }
        }
        private string _TPA_NAME;

        public string TPA_NAME
        {
            get { return _TPA_NAME; }
            set { _TPA_NAME = value; }
        }

        private string _REFERRED_BY;

        public string REFERRED_BY
        {
            get { return _REFERRED_BY; }
            set { _REFERRED_BY = value; }
        }

        private string _CONSULTATION_TYPE;

        public string CONSULTATION_TYPE
        {
            get { return _CONSULTATION_TYPE; }
            set { _CONSULTATION_TYPE = value; }
        }
        private string _DEPARTMENT_NAME;

        public string DEPARTMENT_NAME
        {
            get { return _DEPARTMENT_NAME; }
            set { _DEPARTMENT_NAME = value; }
        }

        private string _REFERAL_LETTER_NO;

        public string REFERAL_LETTER_NO
        {
            get { return _REFERAL_LETTER_NO; }
            set { _REFERAL_LETTER_NO = value; }
        }


        private string _REFERAL_LETTER_ISSUED_DT;

        public string REFERAL_LETTER_ISSUED_DT
        {
            get { return _REFERAL_LETTER_ISSUED_DT; }
            set { _REFERAL_LETTER_ISSUED_DT = value; }
        }



        private string _REFERAL_LETTER_EXIPRY_DT;

        public string REFERAL_LETTER_EXIPRY_DT
        {
            get { return _REFERAL_LETTER_EXIPRY_DT; }
            set { _REFERAL_LETTER_EXIPRY_DT = value; }
        }
        private string _MOBILE_NO;

        public string MOBILE_NO
        {
            get { return _MOBILE_NO; }
            set { _MOBILE_NO = value; }
        }


        private string _REFERRAL_NAME;

        public string REFERRAL_NAME
        {
            get { return _REFERRAL_NAME; }
            set { _REFERRAL_NAME = value; }
        }


        private string _REFRRAL_SOURCE_NAME;

        public string REFRRAL_SOURCE_NAME
        {
            get { return _REFRRAL_SOURCE_NAME; }
            set { _REFRRAL_SOURCE_NAME = value; }
        }
        private string _SLOT_NO;

        public string SLOT_NO
        {
            get { return _SLOT_NO; }
            set { _SLOT_NO = value; }
        }
        private string payment_mode;

        public string PAYMENT_MODE
        {
            get { return payment_mode; }
            set { payment_mode = value; }
        }
        private string cc_card_type_name;

        public string CC_CARD_TYPE_NAME
        {
            get { return cc_card_type_name; }
            set { cc_card_type_name = value; }
        }
        private string dc_card_type_name;

        public string DC_CARD_TYPE_NAME
        {
            get { return dc_card_type_name; }
            set { dc_card_type_name = value; }
        }
        private string payment_type_name;

        public string PAYMENT_TYPE_NAME
        {
            get { return payment_type_name; }
            set { payment_type_name = value; }
        }
        private string _adjustment;

        public string ADJUSTMENT
        {
            get { return _adjustment; }
            set { _adjustment = value; }
        }
        private string _online;

        public string ONLINE
        {
            get { return _online; }
            set { _online = value; }
        }
        private string _is_srv_guidelines_required;

        public string IS_SRV_GUIDELINES_REQUIRED
        {
            get { return _is_srv_guidelines_required; }
            set { _is_srv_guidelines_required = value; }
        }
        private string _is_consent_form;

        public string IS_CONSENT_FORM
        {
            get { return _is_consent_form; }
            set { _is_consent_form = value; }
        }
        private string is_srv_checklist_required;

        public string IS_SRV_CHECKLIST_REQUIRED
        {
            get { return is_srv_checklist_required; }
            set { is_srv_checklist_required = value; }
        }

        private string _patient_type_name;

        public string PATIENT_TYPE_NAME
        {
            get { return _patient_type_name; }
            set { _patient_type_name = value; }
        }
        private string _is_assesment_required;

        public string IS_ASSESMENT_REQUIRED
        {
            get { return _is_assesment_required; }
            set { _is_assesment_required = value; }
        }
        private string _bill_assesment_sch_id;

        public string BILL_ASSESMENT_SCH_ID
        {
            get { return _bill_assesment_sch_id; }
            set { _bill_assesment_sch_id = value; }
        }
        private string _bill_assesment_id;

        public string BILL_ASSESMENT_ID
        {
            get { return _bill_assesment_id; }
            set { _bill_assesment_id = value; }
        }
        private string _due_date;

        public string DUE_DATE
        {
            get { return _due_date; }
            set { _due_date = value; }
        }
        private string _recoved_amount;

        public string RECOVED_AMOUNT
        {
            get { return _recoved_amount; }
            set { _recoved_amount = value; }
        }
        private string assmnt_due_amt;

        public string ASSMNT_DUE_AMT
        {
            get { return assmnt_due_amt; }
            set { assmnt_due_amt = value; }
        }
        private string _REFUNDS_DAYS;

        public string REFUNDS_DAYS
        {
            get { return _REFUNDS_DAYS; }
            set { _REFUNDS_DAYS = value; }
        }
        private int lab_dept_id;
        public int LAB_DEPT_ID
        {
            get { return lab_dept_id; }
            set { lab_dept_id = value; }
        }

        private int bill_dept_id;
        public int BILL_DEPT_ID
        {
            get { return bill_dept_id; }
            set { bill_dept_id = value; }
        }

        private int disc_sum_dept_id;
        public int DISC_SUM_DEPT_ID
        {
            get { return disc_sum_dept_id; }
            set { disc_sum_dept_id = value; }
        }

        private int phar_dept_id;
        public int PHAR_DEPT_ID
        {
            get { return phar_dept_id; }
            set { phar_dept_id = value; }
        }


        private string disc_req_tat;
        public string DISC_REQ_TAT
        {
            get { return disc_req_tat; }
            set { disc_req_tat = value; }
        }
        private string lab_clr_tat;
        public string LAB_CLR_TAT
        {
            get { return lab_clr_tat; }
            set { lab_clr_tat = value; }
        }
        private string phar_clr_tat;
        public string PHAR_CLR_TAT
        {
            get { return phar_clr_tat; }
            set { phar_clr_tat = value; }
        }
        private string bill_clr_tat;
        public string BILL_CLR_TAT
        {
            get { return bill_clr_tat; }
            set { bill_clr_tat = value; }
        }
        private string dsum_clr_tat;
        public string DSUM_CLR_TAT
        {
            get { return dsum_clr_tat; }
            set { dsum_clr_tat = value; }
        }
        private string overall_tat;
        public string OVERALL_TAT
        {
            get { return overall_tat; }
            set { overall_tat = value; }
        }
        private string tat_all;
        public string TAT_ALL
        {
            get { return tat_all; }
            set { tat_all = value; }
        }
        private string advise_doctor_name;
        public string ADVISE_DOCTOR_NAME
        {
            get { return advise_doctor_name; }
            set { advise_doctor_name = value; }
        }
        private string lab_dept_clrd_by;
        public string LAB_DEPT_CLRD_BY
        {
            get { return lab_dept_clrd_by; }
            set { lab_dept_clrd_by = value; }
        }
        private string lab_dept_clrd_dt;
        public string LAB_DEPT_CLRD_DT
        {
            get { return lab_dept_clrd_dt; }
            set { lab_dept_clrd_dt = value; }
        }
        private string lab_dept_recd_by;
        public string LAB_DEPT_RECD_BY
        {
            get { return lab_dept_recd_by; }
            set { lab_dept_recd_by = value; }
        }
        private string lab_dept_recd_dt;
        public string LAB_DEPT_RECD_DT
        {
            get { return lab_dept_recd_dt; }
            set { lab_dept_recd_dt = value; }
        }
        private string phar_dept_clrd_by;
        public string PHAR_DEPT_CLRD_BY
        {
            get { return phar_dept_clrd_by; }
            set { phar_dept_clrd_by = value; }
        }
        private string phar_dept_clrd_dt;
        public string PHAR_DEPT_CLRD_DT
        {
            get { return phar_dept_clrd_dt; }
            set { phar_dept_clrd_dt = value; }
        }
        private string phar_dept_recd_by;
        public string PHAR_DEPT_RECD_BY
        {
            get { return phar_dept_recd_by; }
            set { phar_dept_recd_by = value; }
        }
        private string phar_dept_recd_dt;
        public string PHAR_DEPT_RECD_DT
        {
            get { return phar_dept_recd_dt; }
            set { phar_dept_recd_dt = value; }
        }
        private string bill_dept_clrd_by;
        public string BILL_DEPT_CLRD_BY
        {
            get { return bill_dept_clrd_by; }
            set { bill_dept_clrd_by = value; }
        }
        private string bill_dept_clrd_dt;
        public string BILL_DEPT_CLRD_DT
        {
            get { return bill_dept_clrd_dt; }
            set { bill_dept_clrd_dt = value; }
        }
        private string bill_dept_recd_by;
        public string BILL_DEPT_RECD_BY
        {
            get { return bill_dept_recd_by; }
            set { bill_dept_recd_by = value; }
        }
        private string bill_dept_recd_dt;
        public string BILL_DEPT_RECD_DT
        {
            get { return bill_dept_recd_dt; }
            set { bill_dept_recd_dt = value; }
        }
        private string dsum_dept_clrd_by;
        public string DSUM_DEPT_CLRD_BY
        {
            get { return dsum_dept_clrd_by; }
            set { dsum_dept_clrd_by = value; }
        }
        private string dsum_dept_clrd_dt;
        public string DSUM_DEPT_CLRD_DT
        {
            get { return dsum_dept_clrd_dt; }
            set { dsum_dept_clrd_dt = value; }
        }
        private string dsum_dept_recd_by;
        public string DSUM_DEPT_RECD_BY
        {
            get { return dsum_dept_recd_by; }
            set { dsum_dept_recd_by = value; }
        }
        private string dsum_dept_recd_dt;
        public string DSUM_DEPT_RECD_DT
        {
            get { return dsum_dept_recd_dt; }
            set { dsum_dept_recd_dt = value; }
        }
        private string tentive_raised_by;
        public string TENTIVE_RAISED_BY
        {
            get { return tentive_raised_by; }
            set { tentive_raised_by = value; }
        }
        private string tentive_raised_dt;
        public string TENTIVE_RAISED_DT
        {
            get { return tentive_raised_dt; }
            set { tentive_raised_dt = value; }
        }
        private string normal_raised_by;
        public string NORMAL_RAISED_BY
        {
            get { return normal_raised_by; }
            set { normal_raised_by = value; }
        }
        private string normal_raised_dt;
        public string NORMAL_RAISED_DT
        {
            get { return normal_raised_dt; }
            set { normal_raised_dt = value; }
        }

        private string _CORP_FNB_STS;

        public string CORP_FNB_STS
        {
            get { return _CORP_FNB_STS; }
            set { _CORP_FNB_STS = value; }
        }
        private string prpsl_status;

        public string PRPSL_STATUS
        {
            get { return prpsl_status; }
            set { prpsl_status = value; }
        }

        private string dischr_dt;
        public string DISCHR_DT
        {
            get { return dischr_dt; }
            set { dischr_dt = value; }
        }
        private string doctor_role_name;
        public string DOCTOR_ROLE_NAME
        {
            get { return doctor_role_name; }
            set { doctor_role_name = value; }
        }
        private string advised_dschrg_dt;
        public string ADVISED_DSCHRG_DT
        {
            get { return advised_dschrg_dt; }
            set { advised_dschrg_dt = value; }
        }
        private string advised_dschrg_remarks;
        public string ADVISED_DSCHRG_REMARKS
        {
            get { return advised_dschrg_remarks; }
            set { advised_dschrg_remarks = value; }
        }
        private string lab_dept_name;
        public string LAB_DEPT_NAME
        {
            get { return lab_dept_name; }
            set { lab_dept_name = value; }
        }

        private string phar_dept_name;
        public string PHAR_DEPT_NAME
        {
            get { return phar_dept_name; }
            set { phar_dept_name = value; }
        }

        private string bill_dept_name;
        public string BILL_DEPT_NAME
        {
            get { return bill_dept_name; }
            set { bill_dept_name = value; }
        }

        private string disc_sum_dept_name;
        public string DISC_SUM_DEPT_NAME
        {
            get { return disc_sum_dept_name; }
            set { disc_sum_dept_name = value; }
        }

        private string lab_dept_dt;
        public string LAB_DEPT_DT
        {
            get { return lab_dept_dt; }
            set { lab_dept_dt = value; }
        }
        private string phar_dept_dt;
        public string PHAR_DEPT_DT
        {
            get { return phar_dept_dt; }
            set { phar_dept_dt = value; }
        }
        private string bill_dept_dt;
        public string BILL_DEPT_DT
        {
            get { return bill_dept_dt; }
            set { bill_dept_dt = value; }
        }
        private string disc_sum_dept_dt;
        public string DISC_SUM_DEPT_DT
        {
            get { return disc_sum_dept_dt; }
            set { disc_sum_dept_dt = value; }
        }
        private string lab_assigned_name;
        public string LAB_ASSIGNED_NAME
        {
            get { return lab_assigned_name; }
            set { lab_assigned_name = value; }
        }
        private string phar_assigned_name;
        public string PHAR_ASSIGNED_NAME
        {
            get { return phar_assigned_name; }
            set { phar_assigned_name = value; }
        }
        private string bill_assigned_name;
        public string BILL_ASSIGNED_NAME
        {
            get { return bill_assigned_name; }
            set { bill_assigned_name = value; }
        }
        private string disc_sum_assigned_name;
        public string DISC_SUM_ASSIGNED_NAME
        {
            get { return disc_sum_assigned_name; }
            set { disc_sum_assigned_name = value; }
        }

        private string lab_to_dept_name;
        public string LAB_TO_DEPT_NAME
        {
            get { return lab_to_dept_name; }
            set { lab_to_dept_name = value; }
        }
        private string phar_to_dept_name;
        public string PHAR_TO_DEPT_NAME
        {
            get { return phar_to_dept_name; }
            set { phar_to_dept_name = value; }
        }
        private string bill_to_dept_name;
        public string BILL_TO_DEPT_NAME
        {
            get { return bill_to_dept_name; }
            set { bill_to_dept_name = value; }
        }
        private string disc_sum_to_dept_name;
        public string DISC_SUM_TO_DEPT_NAME
        {
            get { return disc_sum_to_dept_name; }
            set { disc_sum_to_dept_name = value; }
        }


        private string payment_comm_dt;
        public string PAYMENT_COMM_DT
        {
            get { return payment_comm_dt; }
            set { payment_comm_dt = value; }
        }
        private string transaction_mode;
        public string TRANSACTION_MODE
        {
            get { return transaction_mode; }
            set { transaction_mode = value; }
        }
        private int bill_id;
        public int BILL_ID
        {
            get { return bill_id; }
            set { bill_id = value; }
        }
        private string bill_dt;
        public string BILL_DT
        {
            get { return bill_dt; }
            set { bill_dt = value; }
        }


        private string umr_no;
        public string UMR_NO
        {
            get { return umr_no; }
            set { umr_no = value; }
        }
        private string admn_no;
        public string ADMN_NO
        {
            get { return admn_no; }
            set { admn_no = value; }
        }
        private string outbound;
        public string OUTBOUND
        {
            get { return outbound; }
            set { outbound = value; }
        }
        private string inbound;
        public string INBOUND
        {
            get { return inbound; }
            set { inbound = value; }
        }
        private string comm_status;
        public string COMM_STATUS
        {
            get { return comm_status; }
            set { comm_status = value; }
        }

        private string card_number;
        public string CARD_NUMBER
        {
            get { return card_number; }
            set { card_number = value; }
        }
        private string expiration_date;
        public string EXPIRATION_DATE
        {
            get { return expiration_date; }
            set { expiration_date = value; }
        }
        private string issuer_name;
        public string ISSUER_NAME
        {
            get { return issuer_name; }
            set { issuer_name = value; }
        }
        private string scheme_type;
        public string SCHEME_TYPE
        {
            get { return scheme_type; }
            set { scheme_type = value; }
        }
        private string cardholder_name;
        public string CARDHOLDER_NAME
        {
            get { return cardholder_name; }
            set { cardholder_name = value; }
        }
        private string acquirer_name;
        public string ACQUIRER_NAME
        {
            get { return acquirer_name; }
            set { acquirer_name = value; }
        }
        private string terminal_id;
        public string TERMINAL_ID
        {
            get { return terminal_id; }
            set { terminal_id = value; }
        }
        private string merchant_id;
        public string MERCHANT_ID
        {
            get { return merchant_id; }
            set { merchant_id = value; }
        }
        private string merchant_name;
        public string MERCHANT_NAME
        {
            get { return merchant_name; }
            set { merchant_name = value; }
        }
        private string merchant_address;
        public string MERCHANT_ADDRESS
        {
            get { return merchant_address; }
            set { merchant_address = value; }
        }

        private string response_message;
        public string RESPONSE_MESSAGE
        {
            get { return response_message; }
            set { response_message = value; }
        }
        private string retrieval_refrence_number;
        public string RETRIEVAL_REFRENCE_NUMBER
        {
            get { return retrieval_refrence_number; }
            set { retrieval_refrence_number = value; }
        }
        private string tracking_number;
        public string TRACKING_NUMBER
        {
            get { return tracking_number; }
            set { tracking_number = value; }
        }
        private string batch_no;
        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }

        private float amount;
        public float AMOUNT
        {
            get { return amount; }
            set { amount = value; }
        }
        private string is_reversal;
        public string IS_REVERSAL
        {
            get { return is_reversal; }
            set { is_reversal = value; }
        }

        private string xml;
        public string XML
        {
            get { return xml; }
            set { xml = value; }
        }
        private string trans_id;
        public string TRANS_ID
        {
            get { return trans_id; }
            set { trans_id = value; }
        }

        private string _payment_comm_id;
        public string PAYMENT_COMM_ID
        {
            get { return _payment_comm_id; }
            set { _payment_comm_id = value; }
        }
        private int equip_id;
        public int EQUIP_ID
        {
            get { return equip_id; }
            set { equip_id = value; }
        }




        private string equipment_name;
        public string EQUIPMENT_NAME
        {
            get { return equipment_name; }
            set { equipment_name = value; }
        }

        private string usage_from;
        public string USAGE_FROM
        {
            get { return usage_from; }
            set { usage_from = value; }
        }

        private string usage_to;
        public string USAGE_TO
        {
            get { return usage_to; }
            set { usage_to = value; }
        }

        private string total_usage_time_required;
        public string TOTAL_USAGE_TIME_REQUIRED
        {
            get { return total_usage_time_required; }
            set { total_usage_time_required = value; }
        }

        private string is_er;
        public string IS_ER
        {
            get { return is_er; }
            set { is_er = value; }
        }
        private string _PARENT_ADMN_NO;

        public string PARENT_ADMN_NO
        {
            get { return _PARENT_ADMN_NO; }
            set { _PARENT_ADMN_NO = value; }
        }
        private int _LINK_TYPE_ID;

        public int LINK_TYPE_ID
        {
            get { return _LINK_TYPE_ID; }
            set { _LINK_TYPE_ID = value; }
        }

        private string _PRESCRIPTION_NO;

        public string PRESCRIPTION_NO
        {
            get { return _PRESCRIPTION_NO; }
            set { _PRESCRIPTION_NO = value; }
        }
        private string _CARRIER_AMT;

        public string CARRIER_AMT
        {
            get { return _CARRIER_AMT; }
            set { _CARRIER_AMT = value; }
        }
        private string _SRV_BILL_RECORD_STATUS;

        public string SRV_BILL_RECORD_STATUS
        {
            get { return _SRV_BILL_RECORD_STATUS; }
            set { _SRV_BILL_RECORD_STATUS = value; }
        }
        private string _FOREIGN_CATEGORIES_NAME;

        public string FOREIGN_CATEGORIES_NAME
        {
            get { return _FOREIGN_CATEGORIES_NAME; }
            set { _FOREIGN_CATEGORIES_NAME = value; }
        }
        private string _AUTH_NAME;

        public string AUTH_NAME
        {
            get { return _AUTH_NAME; }
            set { _AUTH_NAME = value; }
        }

        private string _REMARKS;

        public string REMARKS1
        {
            get { return _REMARKS; }
            set { _REMARKS = value; }
        }
        private string _transfer_in_amount;

        public string TRANSFER_IN_AMOUNT
        {
            get { return _transfer_in_amount; }
            set { _transfer_in_amount = value; }
        }
        private string _transfer_out_amount;

        public string TRANSFER_OUT_AMOUNT
        {
            get { return _transfer_out_amount; }
            set { _transfer_out_amount = value; }
        }
        private string _advance_id;

        public string ADVANCE_ID
        {
            get { return _advance_id; }
            set { _advance_id = value; }
        }
        private string _advance_rev_no;

        public string ADVANCE_REV_NO
        {
            get { return _advance_rev_no; }
            set { _advance_rev_no = value; }
        }
        private string _conc_auth_name;
        public string CONC_AUTH_NAME
        {
            get { return _conc_auth_name; }
            set { _conc_auth_name = value; }
        }
        private string check_in_out;
        public string CHECK_IN_OUT
        {
            get { return check_in_out; }
            set { check_in_out = value; }
        }



        private string cancel_auth_id;
        public string CANCEL_AUTH_ID
        {
            get { return cancel_auth_id; }
            set { cancel_auth_id = value; }
        }
        private string cancel_auth_name;
        public string CANCEL_AUTH_NAME
        {
            get { return cancel_auth_name; }
            set { cancel_auth_name = value; }
        }
        private string cancel_remarks;
        public string CANCEL_REMARKS
        {
            get { return cancel_remarks; }
            set { cancel_remarks = value; }
        }

        private string discount_auth_id;
        public string DISCOUNT_AUTH_ID
        {
            get { return discount_auth_id; }
            set { discount_auth_id = value; }
        }
        private string discount_auth_name;
        public string DISCOUNT_AUTH_NAME
        {
            get { return discount_auth_name; }
            set { discount_auth_name = value; }
        }
        private string discount_remarks;
        public string DISCOUNT_REMARKS
        {
            get { return discount_remarks; }
            set { discount_remarks = value; }
        }
        private string fo_bill_approve_by;
        public string FO_BILL_APPROVE_BY
        {
            get { return fo_bill_approve_by; }
            set { fo_bill_approve_by = value; }
        }
        private string fo_bill_approve_dt;
        public string FO_BILL_APPROVE_DT
        {
            get { return fo_bill_approve_dt; }
            set { fo_bill_approve_dt = value; }
        }
        private string _SRV_NET_AMOUNT;

        public string SRV_NET_AMOUNT
        {
            get { return _SRV_NET_AMOUNT; }
            set { _SRV_NET_AMOUNT = value; }
        }
        private string _SRV_CONCESSION_AMOUNT;

        public string SRV_CONCESSION_AMOUNT
        {
            get { return _SRV_CONCESSION_AMOUNT; }
            set { _SRV_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_CASH_CONCESSION_AMOUNT;

        public string SRV_CASH_CONCESSION_AMOUNT
        {
            get { return _SRV_CASH_CONCESSION_AMOUNT; }
            set { _SRV_CASH_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_CASH_CONCESSION_PCNT;

        public string SRV_CASH_CONCESSION_PCNT
        {
            get { return _SRV_CASH_CONCESSION_PCNT; }
            set { _SRV_CASH_CONCESSION_PCNT = value; }
        }
        private string _SRV_HC_CONCESSION_AMOUNT;

        public string SRV_HC_CONCESSION_AMOUNT
        {
            get { return _SRV_HC_CONCESSION_AMOUNT; }
            set { _SRV_HC_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_HC_CONCESSION_PCNT;

        public string SRV_HC_CONCESSION_PCNT
        {
            get { return _SRV_HC_CONCESSION_PCNT; }
            set { _SRV_HC_CONCESSION_PCNT = value; }
        }
        private string _SRV_STAFF_CONCESSION_AMOUNT;

        public string SRV_STAFF_CONCESSION_AMOUNT
        {
            get { return _SRV_STAFF_CONCESSION_AMOUNT; }
            set { _SRV_STAFF_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_STAFF_CONCESSION_PCNT;

        public string SRV_STAFF_CONCESSION_PCNT
        {
            get { return _SRV_STAFF_CONCESSION_PCNT; }
            set { _SRV_STAFF_CONCESSION_PCNT = value; }
        }
        private string _SRV_EVENT_BASED_CONCESSION_AMOUNT;

        public string SRV_EVENT_BASED_CONCESSION_AMOUNT
        {
            get { return _SRV_EVENT_BASED_CONCESSION_AMOUNT; }
            set { _SRV_EVENT_BASED_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_EVENT_BASED_CONCESSION_PCNT;

        public string SRV_EVENT_BASED_CONCESSION_PCNT
        {
            get { return _SRV_EVENT_BASED_CONCESSION_PCNT; }
            set { _SRV_EVENT_BASED_CONCESSION_PCNT = value; }
        }
        private string _SRV_CONCESSION_RULE_CONCESSION_AMOUNT;

        public string SRV_CONCESSION_RULE_CONCESSION_AMOUNT
        {
            get { return _SRV_CONCESSION_RULE_CONCESSION_AMOUNT; }
            set { _SRV_CONCESSION_RULE_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_CONCESSION_RULE_CONCESSION_PCNT;

        public string SRV_CONCESSION_RULE_CONCESSION_PCNT
        {
            get { return _SRV_CONCESSION_RULE_CONCESSION_PCNT; }
            set { _SRV_CONCESSION_RULE_CONCESSION_PCNT = value; }
        }
        private string _SRV_MANAGMENT_CONCESSION_AMOUNT;

        public string SRV_MANAGMENT_CONCESSION_AMOUNT
        {
            get { return _SRV_MANAGMENT_CONCESSION_AMOUNT; }
            set { _SRV_MANAGMENT_CONCESSION_AMOUNT = value; }
        }
        private string _SRV_MANAGMENT_CONCESSION_PCNT;

        public string SRV_MANAGMENT_CONCESSION_PCNT
        {
            get { return _SRV_MANAGMENT_CONCESSION_PCNT; }
            set { _SRV_MANAGMENT_CONCESSION_PCNT = value; }
        }

        private string _CONCESSION_AUTH_NAME;

        public string CONCESSION_AUTH_NAME1
        {
            get { return _CONCESSION_AUTH_NAME; }
            set { _CONCESSION_AUTH_NAME = value; }
        }

        private string _Fund_amt;

        public string Fund_amt
        {
            get { return _Fund_amt; }
            set { _Fund_amt = value; }
        }

        private string _EXCESS_FUND_AMOUNT;

        public string EXCESS_FUND_AMOUNT
        {
            get { return _EXCESS_FUND_AMOUNT; }
            set { _EXCESS_FUND_AMOUNT = value; }
        }

        private string _RECPAY_AMOUNT;

        public string RECPAY_AMOUNT
        {
            get { return _RECPAY_AMOUNT; }
            set { _RECPAY_AMOUNT = value; }
        }
        private string _transfer_type_id;

        public string TRANSFER_TYPE_ID
        {
            get { return _transfer_type_id; }
            set { _transfer_type_id = value; }
        }
        private string admn_type;

        public string ADMN_TYPE
        {
            get { return admn_type; }
            set { admn_type = value; }
        }
        private string _CONCESSION_AUTHORIZATION_NAME;

        public string CONCESSION_AUTHORIZATION_NAME
        {
            get { return _CONCESSION_AUTHORIZATION_NAME; }
            set { _CONCESSION_AUTHORIZATION_NAME = value; }
        }
        private string _DUE_AUTHORIZATION_NAME;

        public string DUE_AUTHORIZATION_NAME
        {
            get { return _DUE_AUTHORIZATION_NAME; }
            set { _DUE_AUTHORIZATION_NAME = value; }
        }
        private string _concession_auth_name2;

        public string CONCESSION_AUTH_NAME2
        {
            get { return _concession_auth_name2; }
            set { _concession_auth_name2 = value; }
        }
        private string _health_card_no;

        public string HEALTH_CARD_NO
        {
            get { return _health_card_no; }
            set { _health_card_no = value; }
        }
        private string _MOTHER_NAME;

        public string MOTHER_NAME
        {
            get { return _MOTHER_NAME; }
            set { _MOTHER_NAME = value; }
        }
        private string _FATHER_NAME;

        public string FATHER_NAME
        {
            get { return _FATHER_NAME; }
            set { _FATHER_NAME = value; }
        }
        private string _REFUNDABLE_AMOUNT;

        public string REFUNDABLE_AMOUNT
        {
            get { return _REFUNDABLE_AMOUNT; }
            set { _REFUNDABLE_AMOUNT = value; }
        }
        private string _CORP_PAY_AMOUNT;

        public string CORP_PAY_AMOUNT
        {
            get { return _CORP_PAY_AMOUNT; }
            set { _CORP_PAY_AMOUNT = value; }
        }
        private string _CORP_DUE_AMOUNT;

        public string CORP_DUE_AMOUNT
        {
            get { return _CORP_DUE_AMOUNT; }
            set { _CORP_DUE_AMOUNT = value; }
        }
        private string _EMP_PAY_AMOUNT;

        public string EMP_PAY_AMOUNT
        {
            get { return _EMP_PAY_AMOUNT; }
            set { _EMP_PAY_AMOUNT = value; }
        }
        private string _CORP_CONCESSION_PERCENT;

        public string CORP_CONCESSION_PERCENT
        {
            get { return _CORP_CONCESSION_PERCENT; }
            set { _CORP_CONCESSION_PERCENT = value; }
        }
        private string _EMP_CONCESSION_PERCENT;

        public string EMP_CONCESSION_PERCENT
        {
            get { return _EMP_CONCESSION_PERCENT; }
            set { _EMP_CONCESSION_PERCENT = value; }
        }
        private string _REPORT_DISPATCH_TYPE_NAME;

        public string REPORT_DISPATCH_TYPE_NAME
        {
            get { return _REPORT_DISPATCH_TYPE_NAME; }
            set { _REPORT_DISPATCH_TYPE_NAME = value; }
        }
        private string _REPORT_DISPATCH_ID;

        public string REPORT_DISPATCH_ID
        {
            get { return _REPORT_DISPATCH_ID; }
            set { _REPORT_DISPATCH_ID = value; }
        }
        private string _LETTER_ISSUED_BY;

        public string LETTER_ISSUED_BY
        {
            get { return _LETTER_ISSUED_BY; }
            set { _LETTER_ISSUED_BY = value; }
        }
        private string _LETTER_ISSUED_DT;

        public string LETTER_ISSUED_DT
        {
            get { return _LETTER_ISSUED_DT; }
            set { _LETTER_ISSUED_DT = value; }
        }
        private string _MEDICAL_CARD_NO;

        public string MEDICAL_CARD_NO
        {
            get { return _MEDICAL_CARD_NO; }
            set { _MEDICAL_CARD_NO = value; }
        }
        private string _DOB;

        public string DOB
        {
            get { return _DOB; }
            set { _DOB = value; }
        }
        private string _GENDER_NAME;

        public string GENDER_NAME
        {
            get { return _GENDER_NAME; }
            set { _GENDER_NAME = value; }
        }
        private string _RESPONSIBLE_NAME;

        public string RESPONSIBLE_NAME
        {
            get { return _RESPONSIBLE_NAME; }
            set { _RESPONSIBLE_NAME = value; }
        }
        private string _RESULT_SRV_COMP_ID;

        public string RESULT_SRV_COMP_ID
        {
            get { return _RESULT_SRV_COMP_ID; }
            set { _RESULT_SRV_COMP_ID = value; }
        }
        private string referal_dtls;

        public string REFERAL_DTLS
        {
            get { return referal_dtls; }
            set { referal_dtls = value; }
        }
        private string emp_due_amount;

        public string EMP_DUE_AMOUNT
        {
            get { return emp_due_amount; }
            set { emp_due_amount = value; }
        }
        private string due_recovered;

        public string DUE_RECOVERED
        {
            get { return due_recovered; }
            set { due_recovered = value; }
        }

        private int _REG_TYPE_NAME;

        public int REG_TYPE_NAME
        {
            get { return _REG_TYPE_NAME; }
            set { _REG_TYPE_NAME = value; }
        }
        private string _pre_discnt;

        public string PRE_DISCNT
        {
            get { return _pre_discnt; }
            set { _pre_discnt = value; }
        }
        private string _AMOUNT1;

        public string AMOUNT1
        {
            get { return _AMOUNT1; }
            set { _AMOUNT1 = value; }
        }

        private string _APPOINTMENT_NUMBER;

        public string APPOINTMENT_NUMBER
        {
            get { return _APPOINTMENT_NUMBER; }
            set { _APPOINTMENT_NUMBER = value; }
        }
        private string _pat_concession_amt;

        public string PAT_CONCESSION_AMOUNT
        {
            get { return _pat_concession_amt; }
            set { _pat_concession_amt = value; }
        }
        private string _CONSULTANT_TRANSFER_DT;

        public string CONSULTANT_TRANSFER_DT
        {
            get { return _CONSULTANT_TRANSFER_DT; }
            set { _CONSULTANT_TRANSFER_DT = value; }
        }

        private string _DEPARTMENT_CD;

        public string DEPARTMENT_CD
        {
            get { return _DEPARTMENT_CD; }
            set { _DEPARTMENT_CD = value; }
        }
        private string _DAY;

        public string DAY
        {
            get { return _DAY; }
            set { _DAY = value; }
        }
        private string _DISCOUNT;

        public string DISCOUNT
        {
            get { return _DISCOUNT; }
            set { _DISCOUNT = value; }
        }
        private string _INS_AMT;

        public string INS_AMT
        {
            get { return _INS_AMT; }
            set { _INS_AMT = value; }
        }
        private string _CASHAMOUNT;

        public string CASHAMOUNT
        {
            get { return _CASHAMOUNT; }
            set { _CASHAMOUNT = value; }
        }
        private string _IPOP;

        public string IPOP
        {
            get { return _IPOP; }
            set { _IPOP = value; }
        }
        private string suply_amount;

        public string SUPLY_AMOUNT
        {
            get { return suply_amount; }
            set { suply_amount = value; }
        }
        private string cheque_dt;

        public string CHEQUE_DT
        {
            get { return cheque_dt; }
            set { cheque_dt = value; }
        }
        private string credit_card_no;

        public string CREDIT_CARD_NO
        {
            get { return credit_card_no; }
            set { credit_card_no = value; }
        }
        private string debit_card_no;

        public string DEBIT_CARD_NO
        {
            get { return debit_card_no; }
            set { debit_card_no = value; }
        }
        private string _CNCSN_AUTH_NAME;

        public string CNCSN_AUTH_NAME
        {
            get { return _CNCSN_AUTH_NAME; }
            set { _CNCSN_AUTH_NAME = value; }
        }

        private string _BILL_ASSESMENT_DT;

        public string BILL_ASSESMENT_DT
        {
            get { return _BILL_ASSESMENT_DT; }
            set { _BILL_ASSESMENT_DT = value; }
        }

        private string _BILL_ASSESMENT_DT1;

        public string BILL_ASSESMENT_DT1
        {
            get { return _BILL_ASSESMENT_DT1; }
            set { _BILL_ASSESMENT_DT1 = value; }
        }

        private string _OFFICER_NAME;

        public string OFFICER_NAME
        {
            get { return _OFFICER_NAME; }
            set { _OFFICER_NAME = value; }
        }

        private string _NO_OF_ASSESMENTS;

        public string NO_OF_ASSESMENTS
        {
            get { return _NO_OF_ASSESMENTS; }
            set { _NO_OF_ASSESMENTS = value; }
        }

        private string _ADJUSTMENT_AMOUNT;

        public string ADJUSTMENT_AMOUNT
        {
            get { return _ADJUSTMENT_AMOUNT; }
            set { _ADJUSTMENT_AMOUNT = value; }
        }

        private string _FINANCED_AMOUNT;

        public string FINANCED_AMOUNT
        {
            get { return _FINANCED_AMOUNT; }
            set { _FINANCED_AMOUNT = value; }
        }

        private string _RECOVERED_AMOUNT;

        public string RECOVERED_AMOUNT
        {
            get { return _RECOVERED_AMOUNT; }
            set { _RECOVERED_AMOUNT = value; }
        }
        private string _ASSESMENT_AMOUNT;

        public string ASSESMENT_AMOUNT
        {
            get { return _ASSESMENT_AMOUNT; }
            set { _ASSESMENT_AMOUNT = value; }
        }

        private string _CLAIM_STATUS;

        public string CLAIM_STATUS
        {
            get { return _CLAIM_STATUS; }
            set { _CLAIM_STATUS = value; }
        }

        private string _TOT_RECORD_CNT;

        public string TOT_RECORD_CNT
        {
            get { return _TOT_RECORD_CNT; }
            set { _TOT_RECORD_CNT = value; }
        }

        private string _SRV_POST_DISCOUNT;

        public string SRV_POST_DISCOUNT
        {
            get { return _SRV_POST_DISCOUNT; }
            set { _SRV_POST_DISCOUNT = value; }
        }
        private string _DUE_AUTH_NAME;

        public string DUE_AUTH_NAME1
        {
            get { return _DUE_AUTH_NAME; }
            set { _DUE_AUTH_NAME = value; }
        }
        private string _REFERAL_NAME;

        public string REFERAL_NAME1
        {
            get { return _REFERAL_NAME; }
            set { _REFERAL_NAME = value; }
        }
        private float _CANCEL_AMOUNT;

        public float CANCEL_AMOUNT2
        {
            get { return _CANCEL_AMOUNT; }
            set { _CANCEL_AMOUNT = value; }
        }
        private string _CC_TYPE;

        public string CC_TYPE1
        {
            get { return _CC_TYPE; }
            set { _CC_TYPE = value; }
        }
        private string _REMARKS1;

        public string REMARKS2
        {
            get { return _REMARKS1; }
            set { _REMARKS1 = value; }
        }
        private string _CONS_DT;

        public string CONS_DT
        {
            get { return _CONS_DT; }
            set { _CONS_DT = value; }
        }
        private string _CURR_ID;

        public string CURR_ID
        {
            get { return _CURR_ID; }
            set { _CURR_ID = value; }
        }
        private string _CURRENCY_SYMBOL;

        public string CURRENCY_SYMBOL
        {
            get { return _CURRENCY_SYMBOL; }
            set { _CURRENCY_SYMBOL = value; }
        }
        private string _ADV_PAT_MOBILE_NO;

        public string ADV_PAT_MOBILE_NO
        {
            get { return _ADV_PAT_MOBILE_NO; }
            set { _ADV_PAT_MOBILE_NO = value; }
        }
        private string _CARD_HOLDER_NAME;

        public string CARD_HOLDER_NAME
        {
            get { return _CARD_HOLDER_NAME; }
            set { _CARD_HOLDER_NAME = value; }
        }
        private string _APPROVAL_NO;

        public string APPROVAL_NO
        {
            get { return _APPROVAL_NO; }
            set { _APPROVAL_NO = value; }
        }
        private string _COMPANY_TYPE_NAME;

        public string COMPANY_TYPE_NAME
        {
            get { return _COMPANY_TYPE_NAME; }
            set { _COMPANY_TYPE_NAME = value; }
        }
        private string _INTER_REFERAL;

        public string INTER_REFERAL
        {
            get { return _INTER_REFERAL; }
            set { _INTER_REFERAL = value; }
        }
        private string _EXTERNAL_REFERAL;

        public string EXTERNAL_REFERAL
        {
            get { return _EXTERNAL_REFERAL; }
            set { _EXTERNAL_REFERAL = value; }
        }
        private string _WALKING;

        public string WALKING
        {
            get { return _WALKING; }
            set { _WALKING = value; }
        }
        private string _UMR;

        public string UMR
        {
            get { return _UMR; }
            set { _UMR = value; }
        }
        private string _CNT;

        public string CNT
        {
            get { return _CNT; }
            set { _CNT = value; }
        }
        private string _PAID_VISITS;

        public string PAID_VISITS
        {
            get { return _PAID_VISITS; }
            set { _PAID_VISITS = value; }
        }
        private string _FREE_VISITS;

        public string FREE_VISITS
        {
            get { return _FREE_VISITS; }
            set { _FREE_VISITS = value; }
        }
        private string _COMPANY_NEW;

        public string COMPANY_NEW
        {
            get { return _COMPANY_NEW; }
            set { _COMPANY_NEW = value; }
        }
        private string _COMPANY_FOLLOWUP;

        public string COMPANY_FOLLOWUP
        {
            get { return _COMPANY_FOLLOWUP; }
            set { _COMPANY_FOLLOWUP = value; }
        }

        private string _TOTAL;

        public string TOTAL
        {
            get { return _TOTAL; }
            set { _TOTAL = value; }
        }
        private string _OTHERS_AMT;

        public string OTHERS_AMT
        {
            get { return _OTHERS_AMT; }
            set { _OTHERS_AMT = value; }
        }
        private string _CASH_AMT;

        public string CASH_AMT
        {
            get { return _CASH_AMT; }
            set { _CASH_AMT = value; }
        }
        private string _CHEQUE_AMT;

        public string CHEQUE_AMT
        {
            get { return _CHEQUE_AMT; }
            set { _CHEQUE_AMT = value; }
        }
        private string _CARD_AMT;

        public string CARD_AMT
        {
            get { return _CARD_AMT; }
            set { _CARD_AMT = value; }
        }
        private string _ADJUST_AMT;

        public string ADJUST_AMT
        {
            get { return _ADJUST_AMT; }
            set { _ADJUST_AMT = value; }
        }
        private string _ONLINE_AMT;

        public string ONLINE_AMT
        {
            get { return _ONLINE_AMT; }
            set { _ONLINE_AMT = value; }
        }
        private string _NO_OD_DFV;

        public string NO_OD_DFV
        {
            get { return _NO_OD_DFV; }
            set { _NO_OD_DFV = value; }
        }
        private string _MARK;

        public string MARK
        {
            get { return _MARK; }
            set { _MARK = value; }
        }
        private string _CASHAMT;

        public string CASHAMT
        {
            get { return _CASHAMT; }
            set { _CASHAMT = value; }
        }
        private string _TOTALAMOUNT;

        public string TOTALAMOUNT
        {
            get { return _TOTALAMOUNT; }
            set { _TOTALAMOUNT = value; }
        }
        private string _CONSESSIONAMT;

        public string CONSESSIONAMT
        {
            get { return _CONSESSIONAMT; }
            set { _CONSESSIONAMT = value; }
        }

        private string _advancesearch;

        public string ADVANCESEARCH
        {
            get { return _advancesearch; }
            set { _advancesearch = value; }
        }

        private string _patient_class_name;

        public string PATIENT_CLASS_NAME
        {
            get { return _patient_class_name; }
            set { _patient_class_name = value; }
        }
        private string bill_type_id_final;

        public string BILL_TYPE_ID_FINAL
        {
            get { return bill_type_id_final; }
            set { bill_type_id_final = value; }
        }
        private string _DMS_UPLOAD;

        public string DMS_UPLOAD
        {
            get { return _DMS_UPLOAD; }
            set { _DMS_UPLOAD = value; }
        }
        private string _FB_STATUS;

        public string FB_STATUS
        {
            get { return _FB_STATUS; }
            set { _FB_STATUS = value; }
        }
        private string _BILL_CANCEL_BY;

        public string BILL_CANCEL_BY
        {
            get { return _BILL_CANCEL_BY; }
            set { _BILL_CANCEL_BY = value; }
        }
        private string _BILL_CANCEL_DT;

        public string BILL_CANCEL_DT
        {
            get { return _BILL_CANCEL_DT; }
            set { _BILL_CANCEL_DT = value; }
        }
        private string _SORTING_ORDER;

        public string SORTING_ORDER
        {
            get { return _SORTING_ORDER; }
            set { _SORTING_ORDER = value; }
        }

        private string _ORDER_BY;

        public string ORDER_BY
        {
            get { return _ORDER_BY; }
            set { _ORDER_BY = value; }
        }


        private string _ADMN_CASH_AMOUNT;

        public string ADMN_CASH_AMOUNT
        {
            get { return _ADMN_CASH_AMOUNT; }
            set { _ADMN_CASH_AMOUNT = value; }
        }
        private string _DOCT_PER_AMT;

        public string DOCT_PER_AMT
        {
            get { return _DOCT_PER_AMT; }
            set { _DOCT_PER_AMT = value; }
        }
        private string _ACTUAL_AMOUNT;

        public string ACTUAL_AMOUNT
        {
            get { return _ACTUAL_AMOUNT; }
            set { _ACTUAL_AMOUNT = value; }
        }
        private string _CONSULTATION_TIME;

        public string CONSULTATION_TIME
        {
            get { return _CONSULTATION_TIME; }
            set { _CONSULTATION_TIME = value; }
        }
        private string _ADMN_DOCTOR;

        public string ADMN_DOCTOR
        {
            get { return _ADMN_DOCTOR; }
            set { _ADMN_DOCTOR = value; }
        }
        private string _MONTH;

        public string MONTH
        {
            get { return _MONTH; }
            set { _MONTH = value; }
        }
        private string _NO_OF_HEALTH_CHECKUPS;

        public string NO_OF_HEALTH_CHECKUPS
        {
            get { return _NO_OF_HEALTH_CHECKUPS; }
            set { _NO_OF_HEALTH_CHECKUPS = value; }
        }
        private string _TOTAL_TAT;

        public string TOTAL_TAT
        {
            get { return _TOTAL_TAT; }
            set { _TOTAL_TAT = value; }
        }
        private string _CNSCN_AUTH_NAME;

        public string CNSCN_AUTH_NAME
        {
            get { return _CNSCN_AUTH_NAME; }
            set { _CNSCN_AUTH_NAME = value; }
        }
        private string _SRV_PAID_AMOUNT;

        public string SRV_PAID_AMOUNT
        {
            get { return _SRV_PAID_AMOUNT; }
            set { _SRV_PAID_AMOUNT = value; }
        }

        private string _WARD_ID;

        public string WARD_ID
        {
            get { return _WARD_ID; }
            set { _WARD_ID = value; }
        }
        private string _LOCATION_ID;

        public string LOCATION_ID
        {
            get { return _LOCATION_ID; }
            set { _LOCATION_ID = value; }
        }
        private string _NURSESTATION_ID;

        public string NURSESTATION_ID
        {
            get { return _NURSESTATION_ID; }
            set { _NURSESTATION_ID = value; }
        }






        private string _NURSESTATION_NAME;

        public string NURSESTATION_NAME
        {
            get { return _NURSESTATION_NAME; }
            set { _NURSESTATION_NAME = value; }
        }




        private string _CANCELLED_GROSS;

        public string CANCELLED_GROSS
        {
            get { return _CANCELLED_GROSS; }
            set { _CANCELLED_GROSS = value; }
        }

        private string _CANCELLED_DISCOUNT;

        public string CANCELLED_DISCOUNT
        {
            get { return _CANCELLED_DISCOUNT; }
            set { _CANCELLED_DISCOUNT = value; }
        }
        private string _TRAN_AMOUNT;

        public string TRAN_AMOUNT
        {
            get { return _TRAN_AMOUNT; }
            set { _TRAN_AMOUNT = value; }
        }
        private string _TRN_SOURCEID;

        public string TRN_SOURCEID
        {
            get { return _TRN_SOURCEID; }
            set { _TRN_SOURCEID = value; }
        }
        public string BILL_ASSESMENT_NO { get; set; }

        private string _CMP_EXCESS_AMT;

        public string CMP_EXCESS_AMT
        {
            get { return _CMP_EXCESS_AMT; }
            set { _CMP_EXCESS_AMT = value; }
        }
        private string _CMP_CLAIM_STATUS;

        public string CMP_CLAIM_STATUS
        {
            get { return _CMP_CLAIM_STATUS; }
            set { _CMP_CLAIM_STATUS = value; }
        }

        public string DSCHRG_CNCL_STATUS { get; set; }
        public string BED_DTLS { get; set; }
        public string AUTHORIZED_BY { get; set; }
        public string BILL_TYPE { get; set; }
        public string CNCSN_AMT { get; set; }
        public string CNCSN_PERCENT { get; set; }

        public string CARD_HOLDER_MOBILE_NO { get; set; }
        public string REFERENCE_CARD_NO { get; set; }
        public string ADVANCE_NO { get; set; }
        public int DC_CARDTYPE_ID { get; set; }
        public string REC_TYPE_NAME { get; set; }
        public int REC_TYPE_ID { get; set; }

        public string RATE_EXC_GST { get; set; }
        public string TAX_PCT { get; set; }
        public string TAX_AMOUNT { get; set; }
        public string SGST_PCT { get; set; }
        public string CGST_PCT { get; set; }


        public string SGST_AMOUNT { get; set; }
        public string CGST_AMOUNT { get; set; }
        public string SAC_CD { get; set; }
        public string CONCESSION_CHAILD { get; set; }
        public string TOKEN_NO { get; set; }


        public string PRESCRIBED_DOCTOR { get; set; }
        public string IS_CHARITY { get; set; }
       
        
    }

    public ReceiptMasterCollection ReceiptObjects
    {
        get
        {
            this.BindTranctionData();
            return recpColl;
        }
        set
        {
            recpColl = value;
            this.SetTranctionData();
        }
    }

    public class REGENTITY
    {
        public string COLUMN_NAME { get; set; }
        public string PREFIX_TEXT { get; set; }
        public string ADVANCE_SEARCH { get; set; }
        public int CURRENT_PAGE { get; set; }
        public int PAGE_SIZE { get; set; }
        public string FLAG { get; set; }
        public int EVENTFLAG { get; set; }
    }
 
}

