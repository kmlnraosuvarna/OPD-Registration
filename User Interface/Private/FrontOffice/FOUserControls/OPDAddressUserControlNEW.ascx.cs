using System;
using System.Collections.Generic;
using System.Data;
using System.Web.UI.WebControls;
using EzHms.Abstract;

public partial class Private_FrontOffice_FOUserControls_OPDAddressUserControlNEW : System.Web.UI.UserControl
{
    //private EzHms.Abstract.ICompanyPolicy icompolicy = null;
    //private EzHms.ModelEntity.CompanyPolicyCollection cpolicycoll = null;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            bindcountries();
        }

        hdnareaquick.Value = string.Empty;
        MasterClass obj = new MasterClass();
        //IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
        //DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), 0, 0);
        hdnIsAssesment.Value = "True";
        hdndefaultstate.Value = "107";
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
        AjaxControlToolkit.ModalPopupExtender popup = AreaUserControl1.FindControl("_popUp") as AjaxControlToolkit.ModalPopupExtender;
        TextBox txtarea = AreaUserControl1.FindControl("txtSearchControl") as TextBox;
        txtarea.Attributes.Add("onkeyup", "javascript:return OnNullValue(this);");
        txtarea.Attributes.Add("onblur", "javascript:return checkarea(this);");
        txtarea.ToolTip = "Select Area";

        AreaUserControl1.LookupName = "AREA_NEW_NEW";
        List<object> elements = new List<object>();
        elements.Add("0");
        elements.Add(hdndefaultstate.Value);
        AreaUserControl1.PreConditon = elements;
        AreaUserControl1.OnBlurRequired = true;

        this.uchccrdtype.LookupName = "HEALTH_CARD";
        this.uchccrdtype.OnBlurRequired = true;

        this.ucHc_crd_no.LookupName = "HEALTH_CARD_NO";
        this.ucHc_crd_no.OnBlurRequired = true;

    }
    protected void bindcountries()
    {
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
        string query = "SELECT COUNTRY_ID,COUNTRY_CD,COUNTRY_NAME FROM MA.COUNTRY where Record_status='A'";
        DataSet ds = dMasters.DynamicDataset(query);
        ddlcountry.DataSource = ds.Tables[0];
        ddlcountry.DataTextField = "COUNTRY_NAME";
        ddlcountry.DataValueField = "COUNTRY_ID";
        ddlcountry.DataBind();
        ddlcountry.Items.Insert(0, new ListItem("--select--", "0"));
        ddlcountry.SelectedValue = "0";
        ddlcountry.Enabled = true;
        EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();

        System.Collections.CollectionBase _cbase_coll = objdb.GetAddressType();
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


        string queryq = "SELECT    METHOD_OF_COMMUNICATION_ID,METHOD_OF_COMMUNICATION_CD,METHOD_OF_COMMUNICATION_NAME,METHOD_OF_COMMUNICATION_DESC ,ENTITY_ID  FROM METHOD_OF_COMMUNICATION WHERE RECORD_STATUS='A' ORDER BY DISPLAY_ORDER ,METHOD_OF_COMMUNICATION_NAME ASC";
        DataSet dsq = dMasters.DynamicDataset(queryq);
        chkmodeComm.CreateCheckBoxTable(dsq.Tables[0]);


    }
    #region Lookup initialization
    public void InitializeLookupCtrls()
    {
        //Area Lookup
        //ILookUpSearch iLookUpSearch = new EzHms.Services.LookUpSearchService();
        this.AreaUserControl1.LookupName = "AREA";
        this.AreaUserControl1.OnBlurRequired = true;
        //this.AreaUserControl1.GettingDataWithObjects = new LookUp.PagingMethodWithObject(iLookUpSearch.GetLookUpSearchData);

    }
    #endregion
    //protected virtual string CompanySetting(EzHms.ModelEntity.CompanyPolicyEnum EnumType, Enum EnumValue)
    //{
    //    string Result = string.Empty;
    //    this.cpolicycoll = new EzHms.ModelEntity.CompanyPolicyCollection();
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
}