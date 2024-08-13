using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Services;
using EzHms.DataAccessObject;
using System.Collections;
using Newtonsoft.Json;
using Microsoft.Office.Interop.Word;
public partial class Private_FrontOffice_FOUserControls_ServicesPostingIn_BillingUc : System.Web.UI.UserControl
{
    //private EzHms.Abstract.ICompanyPolicy icompolicy = null;
    //private EzHms.ModelEntity.CompanyPolicyCollection cpolicycoll = null;
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            hdnPrePrintedBarcodeReq.Value = "Yes";
            hdnAllowOutSideConcs.Value = "True";
            hdnEmergencySlot1.Value = "";
            hdnEmergencySlot2.Value = "";
            hdnEmergencySlot3.Value = "";
            hdnCon_In_Op.Value = "True";
            hdnNew_Born_Pcnt.Value = "10";
            hdnCompanyCrdLmt.Value = "100000";
            hdnassay_com_config.Value = "True";
            hdnRegFeeAutoFill.Value = "True";
            hdnPkgConsToOSP.Value = "True";
            hdnpkgincdlt.Value = "True";
            hdnPkgConsCharges.Value = "Doctor Wise Variation";
            hdnIsCnsltReqFrSrvPsting.Value = "True";
            hdnallowtestforbill.Value = "Yes";
            hdnallowpndg.Value = "NO";
            // hdnsrvgrp_type_con.Value = CompanySetting(EzHms.ModelEntity.CompanyPolicyEnum.PARAMETER_NAME, EzHms.ModelEntity.PARAMETER_NAME.Service_Group_Type_Wise_Concession_Applicable);
            hdnEmrMigID.Value = "1";
            hdnallowtariffslcn.Value = "True";
            hdnallowconsservice.Value = "True";
            hdnconssrvID.Value = "";
            hdnIS_MCI.Value = "True";
            hdnIS_MCI_default.Value = "2";
            hdnpatcatpolicy.Value = "1";
            hdnisallowgst.Value = "Yes";
            hbnisshowpatcatagery.Value = "Yes";
            hbnsearchsrvaspertariff.Value = "No";
            hdnsrvpricereq.Value = "Yes";
            hdnAllowFutureDateAppointments.Value = "False";
            SessionHandler.MEG_ID = "1";
            BindRowToGrid();
            BindDropdownEntities();
            List<object> element = new List<object>();
            element.Add(null);
           // EzHms.Abstract.ILookUpSearch rep = new EzHms.Services.ReceiptWebService();
            this.ucbillno.LookupName = "OP BILL NO";
            this.ucbillno.OnBlurRequired = true;
            this.ucbillno.PreConditon = element;
          //  this.ucbillno.GettingDataWithObjects = new LookUp.PagingMethodWithObject(rep.GetLookUpSearchData);
            GetAllPatientCategories();
            Getalldepartmentunits();
           
        }

    }
    
    DataTable dtableService = new DataTable();
    DataRow objDr;
    private void BindRowToGrid()
    {

        dtableService.Columns.AddRange(new DataColumn[] 
            {
                     new DataColumn("CONCERN_FORM_REQ"),
                     new DataColumn("IS_FOREIGN_SERVICE"),
                     new DataColumn("Service_Class_Id"),
                     new DataColumn("PKG_SRV_IDS"),
                     new DataColumn("IS_CLINICAL_HIST_REQ"),
                     new DataColumn("CNCL_SMRY_ID"),
                     new DataColumn("MEDICATION_ID"),
                     new DataColumn("IS_TAKEN_TODAY"),
                     new DataColumn("LMP_DT"),
                     new DataColumn("DOSAGE"),
                     new DataColumn("OUTHER_MEDICATION"),
                     new DataColumn("SPECIMEN_NAME"),
                     new DataColumn("TRF"),
                     new DataColumn("SITE"),
                     new DataColumn("PRIV_SRV_POSTED_DT"),
                     new DataColumn("TEXT"),
                     new DataColumn("VALUE"),
                     new DataColumn("Service_cd"),
                     new DataColumn("QUANTITY"),
                     new DataColumn("RATE"),
                     new DataColumn("AMOUNT"),
                     new DataColumn("IS_EMERGENCY"),
                     new DataColumn("PAT_GROSS_AMT"),
                     new DataColumn("CONSULTATION_TYPE_ID"),
                     new DataColumn("CONCESSION_AMOUNT"),
                     new DataColumn("EMP_NET_AMT"),
                     new DataColumn("COMPANY_AMOUNT"),
                     new DataColumn("COMPANY_CNCSN_AMT"),
                     new DataColumn("COMPANY_CNCSN_PCT"),
                     new DataColumn("COMPANY_NET_AMT"),
                     new DataColumn("EQUI_SERVICE_NAME"),
                     new DataColumn("Tariff_Id"),
                     new DataColumn("COLOR_CD"),
                     new DataColumn("EMP_GROSS_AMT"),
                     new DataColumn("DOCTOR_ID"),
                     new DataColumn("HCPER"),
                     new DataColumn("HCAMT"),
                     new DataColumn("MGPER"),
                     new DataColumn("MGAMT"),
                     new DataColumn("STAFPER"),
                     new DataColumn("STAMT"),
                     new DataColumn("EBPER"),
                     new DataColumn("EBAMT"),
                     new DataColumn("RULPER"),
                     new DataColumn("RULAMT"),
                     new DataColumn("REMARKS"),
                     new DataColumn("IS_REMARKS_MANDATORY"),
                     new DataColumn("REFRL_QTY"),
                     new DataColumn("SERVICE_UNICODE"),
                     new DataColumn("UNI_SERVICE_TYPE_ID"),
                     new DataColumn("DOCTOR_NAME"),
                     new DataColumn("TAX_PCT"),
                     new DataColumn("EMP_TAX_AMT"),
                     new DataColumn("CMP_TAX_AMT"),
            });

        dtableService.Rows.Add(dtableService.NewRow());
        gvServices.DataSource = dtableService;
        gvServices.DataBind();

        gv_services_header.DataSource = dtableService;
        gv_services_header.DataBind();


    }

    protected override void OnInit(EventArgs e)
    {

        base.OnInit(e);
        gv_services_header.RowDataBound += new GridViewRowEventHandler(gv_services_header_RowDataBound);
        gv_services_header.RowCreated += new GridViewRowEventHandler(gv_services_header_RowCreated);
        gvServices.RowDataBound += new GridViewRowEventHandler(gvServices_RowDataBound);
    }
    void gv_services_header_RowCreated(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            GridView headergrid = (GridView)sender;
            GridViewRow headerrow = new GridViewRow(0, 0, DataControlRowType.Header, DataControlRowState.Insert);

            TableHeaderCell cell_header = new TableHeaderCell();

            cell_header = new TableHeaderCell();
            cell_header.Text = "S.No";
            cell_header.ID = "sno";
            cell_header.Attributes.Add("class", "sno");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Manage";
            cell_header.ID = "h_manage";
            cell_header.Attributes.Add("class", "Manage");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Prev. Posted Dt";
            cell_header.ID = "h_priv_p_dt";
            cell_header.Attributes.Add("class", "PrivPostDt");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Doctor / Service Name";
            cell_header.ID = "h_con_srv_name";
            cell_header.Attributes.Add("class", "sd-name");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Service Doctor";
            cell_header.ID = "h_srv_dtr";
            cell_header.Attributes.Add("class", "srvDoctor");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Slots";
            cell_header.ID = "h_slots";
            cell_header.Attributes.Add("class", "Slots");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "S Code";
            cell_header.ID = "h_s_codes";
            cell_header.Attributes.Add("class", "scode");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Type";
            cell_header.ID = "h_type";
            cell_header.Attributes.Add("class", "stype");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Qty";
            cell_header.ID = "h_qty";
            cell_header.Attributes.Add("class", "Qty");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Rate";
            cell_header.ID = "h_rate";
            cell_header.Attributes.Add("class", "charge");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Amount";
            cell_header.ID = "h_amt";
            cell_header.Attributes.Add("class", "amount");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "STAT";
            cell_header.ID = "h_stat";
            cell_header.Attributes.Add("class", "stat");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);
            if (hdnPrePrintedBarcodeReq.Value == "Yes")
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    cell_header = new TableHeaderCell();
                    cell_header.Text = "Bar Code";
                    cell_header.ID = "h_bar_cd";
                    cell_header.Attributes.Add("class", "sbarcd barcdhead");
                    cell_header.HorizontalAlign = HorizontalAlign.Center;
                    cell_header.RowSpan = 2;
                    headerrow.Cells.Add(cell_header);
                }
            }
            else
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {

                }
            }
            cell_header = new TableHeaderCell();
            cell_header.Text = "Patient Details";
            cell_header.ID = "h_pat_dtls";
            cell_header.Attributes.Add("class", "gpatamts");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.ColumnSpan = 4;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Company Details";
            cell_header.ID = "h_cmp_dtls";
            cell_header.Attributes.Add("class", "gcompany");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.Style.Add(HtmlTextWriterStyle.Display, "none");
            cell_header.ColumnSpan = 5;
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Health Card Disc.";
            cell_header.ID = "h_dsc_1";
            cell_header.Attributes.Add("class", "ghcdisc");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.ColumnSpan = 2;
            cell_header.Style.Add(HtmlTextWriterStyle.Display, "none");
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Management Disc.";
            cell_header.ID = "h_dsc_2";
            cell_header.Attributes.Add("class", "gmgdisc");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.ColumnSpan = 2;
            cell_header.Style.Add(HtmlTextWriterStyle.Display, "none");
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Staff Disc.";
            cell_header.ID = "h_dsc_3";
            cell_header.Attributes.Add("class", "gstdisc");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.ColumnSpan = 2;
            cell_header.Style.Add(HtmlTextWriterStyle.Display, "none");
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Event Based Disc.";
            cell_header.ID = "h_dsc_4";
            cell_header.Attributes.Add("class", "gevdisc");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.ColumnSpan = 2;
            cell_header.Style.Add(HtmlTextWriterStyle.Display, "none");
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Concession Rule Disc.";
            cell_header.ID = "h_dsc_5";
            cell_header.Attributes.Add("class", "gcrdisc");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.ColumnSpan = 2;
            cell_header.Style.Add(HtmlTextWriterStyle.Display, "none");
            headerrow.Cells.Add(cell_header);

            cell_header = new TableHeaderCell();
            cell_header.Text = "Remarks";
            cell_header.ID = "HRemks";
            cell_header.Attributes.Add("class", "remarks");
            cell_header.HorizontalAlign = HorizontalAlign.Center;
            cell_header.RowSpan = 2;
            headerrow.Cells.Add(cell_header);

            gv_services_header.Controls[0].Controls.AddAt(0, headerrow);
        }

    }
    void gv_services_header_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.Header)
        {
            e.Row.Cells[0].Visible = false;
            e.Row.Cells[1].Visible = false;
            e.Row.Cells[2].Visible = false;
            e.Row.Cells[3].Visible = false;
            e.Row.Cells[4].Visible = false;
            e.Row.Cells[5].Visible = false;
            e.Row.Cells[6].Visible = false;
            e.Row.Cells[7].Visible = false;
            e.Row.Cells[8].Visible = false;
            e.Row.Cells[9].Visible = false;
            e.Row.Cells[10].Visible = false;
            e.Row.Cells[11].Visible = false;
            e.Row.Cells[12].Visible = false;
            e.Row.Cells[32].Visible = false;

        }
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            //e.Row.Cells[16].Style.Add(HtmlTextWriterStyle.Display, "block");
            e.Row.Cells[17].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[18].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[19].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[20].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[21].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[22].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[23].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[24].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[25].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[26].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[27].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[28].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[29].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[30].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[31].Style.Add(HtmlTextWriterStyle.Display, "none");
        }
    }

    void gvServices_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            e.Row.Cells[0].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[1].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[2].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[3].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[4].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[5].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[6].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[7].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[8].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[9].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[10].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[11].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[12].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[13].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[14].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[15].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[16].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[17].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[18].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[19].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[20].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[21].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[22].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[23].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[24].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[25].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[26].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[27].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[28].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[29].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[30].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[31].Style.Add(HtmlTextWriterStyle.Display, "none");
            e.Row.Cells[32].Style.Add(HtmlTextWriterStyle.Display, "none");
        }

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
    public virtual string CompanySettingDSValue(string parameter)
    {
        //EzHms.DataAccessObject.DBCompanyPolicy obj = new EzHms.DataAccessObject.DBCompanyPolicy();
        //DataSet ds = obj.GetCompanyPolicyDetailSettings("L");
        //if (ds != null && ds.Tables[0].Rows.Count > 0)
        //{
        //    DataTable dt = ds.Tables[0];
        //    foreach (DataRow row in dt.Rows)
        //    {
        //        if (row["PARAMETER_NAME"].ToString().Trim().ToUpper() == parameter.Trim().ToUpper())
        //        {
        //            return row["PARAMETER_VALUE"].ToString();
        //        }

        //    }
        //    return string.Empty;
        //}
        //else
            return string.Empty;
    }
    EzHms.Abstract.IPatientRegistration pregService1 = null;

    private EzHms.Abstract.IPatientRegistration _patReg = null;
    private static EzHms.ModelEntity.PatientRegistrationCollection collection = null;
    private void BindDropdownEntities()
    {
        DBPatientRegistration obj = new DBPatientRegistration();

       CollectionBase collection = obj.Get_PatientOptions(EzHms.ModelEntity.MasterOptions.CLINICAL_HISTORY);
        ddlclinical.DataSource = collection;
        ddlclinical.DataTextField = "Text";
        ddlclinical.DataValueField = "Value";
        ddlclinical.DataBind();
        ddlclinical.Items.Insert(0, new ListItem("--select--", "0"));
    }
    public void GetAllPatientCategories()
    {
        DBEventform obj = new DBEventform();
        CollectionBase cs = obj.Get_All_ForeignCategories();
        ddlpatcat.DataSource = cs;
        ddlpatcat.DataTextField = "FOREIGN_CATEGORIES_NAME";
        ddlpatcat.DataValueField = "FOREIGN_CATEGORIES_ID";
        ddlpatcat.DataBind();
        ddlpatcat.Items.Insert(0, new ListItem("--select--", "0"));
    }
    [WebMethod]
    [System.Web.Script.Services.ScriptMethod(ResponseFormat = System.Web.Script.Services.ResponseFormat.Json)]
    public void Getalldepartmentunits() {
        int session_id = Convert.ToInt32(SessionHandler.DBSESSION_ID);
        string FLAG = "DOCDEPAT";
        EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
        DataSet dset = objdb.Get_Registration_DropDowns(FLAG, session_id);
        //ddldeprtment.DataSource = dset.Tables[0];
        //ddldeprtment.DataTextField = "DEPARTMENT_NAME";
        //ddldeprtment.DataValueField = "DEPARTMENT_ID";
        //ddldeprtment.DataBind();
        //ddldeprtment.Items.Insert(0, new ListItem("--select--", "0"));
        //ddlunits.Items.Insert(0, new ListItem("--select--", "0"));
        if (dset != null)
        {
            hdnDoctorDepartment.Value = JsonConvert.SerializeObject(dset.Tables[0], Formatting.Indented);
            hdndoctorunits.Value = JsonConvert.SerializeObject(dset.Tables[1], Formatting.Indented);
        }
    }
    public string BillType
    {
        get { return hdnBillType.Value; }
        set { hdnBillType.Value = value; }
    }




}