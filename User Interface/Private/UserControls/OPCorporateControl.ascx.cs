using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Web.Script.Serialization;
public partial class Private_UserControls_OPCorporateControl : System.Web.UI.UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (SessionHandler.DBSESSION_ID > 0)
        {

            if (!IsPostBack)
            {
                // BindDropdown();
                DataSet _dsgetdocper = SessionHandler.DocPermission;
                MasterClass obj = new MasterClass();
                hdnClientName.Value = obj.WebConfigSettings("ClientName");
                //int DocCount = _dsgetdocper.Tables[0].Rows.Count;
                //for (int i = 0; i < DocCount; i++)
                //{
                //    string docIds = _dsgetdocper.Tables[0].Rows[i]["DOC_ID"].ToString();
                //    switch (docIds)
                //    {
                //        case "33": // CompanyMaster
                //            {
                //                if ((_dsgetdocper.Tables[0].Rows[i]["ACCESS_ADD"].ToString()) == "Y")
                //                    hdnQucikCmpny.Value = "Y";
                //                else
                //                    hdnQucikCmpny.Value = "N";
                //                break;
                //            }
                //        case "2342": // ReferralLetter
                //            {
                //                if ((_dsgetdocper.Tables[0].Rows[i]["ACCESS_ADD"].ToString()) == "Y")
                                    hdnQucikRefltr.Value = "Y";
                //                else
                //                    hdnQucikRefltr.Value = "N";
                //                break;
                //            }

                //        default:
                //            break;
                //    }

                //}
            }
            if (ddlpattyp.SelectedValue == "2")
            {
                TextBox CmpLookup1 = CmpLookup.FindControl("txtSearchControl") as TextBox;
                CmpLookup1.Attributes.Add("onblur", "javascript:return OnNullValue(this);");
            }
            TextBox txtelward = UCEligibleWard.FindControl("txtSearchControl") as TextBox;
            txtelward.Attributes.Add("onblur", "javascript:return OnNullValue(this);");
            TextBox txtrefletter1 = ucRefLetterNo.FindControl("txtSearchControl") as TextBox;
            txtrefletter1.Attributes.Add("onblur", "javascript:return OnNullValue(this);");

            List<object> elements = new List<object>();
            elements.Add(0);//company type
            elements.Add("PATIENTCMP");//gets all companies irrespective of company type.
            elements.Add(0);//PatientId
          //  EzHms.Abstract.ILookUpSearch compService = new EzHms.Services.CreditOrgService();
            this.CmpLookup.LookupName = "COMPANY";
            this.CmpLookup.PreConditon = elements;

            UCEligibleWard.LookupName = "Ward_Group_name";

            this.allcmplookup.LookupName = "EMPLOYER";
            LookUp CmpControl = EmployerInfo1.FindControl("EmployerControl1") as LookUp;
            CmpControl.LookupName = "EMPLOYER";
            CmpControl.OnBlurRequired = true;

            this.ucRefLetterNo.LookupName = "ReferalLetters";
            ucRefLetterNo.OnBlurRequired = true;
            this.ucArea.LookupName = "AREA";
            ucArea.OnBlurRequired = true; 

            ucinsname.LookupName = "EMPLOYER";
            ucinsname.OnBlurRequired = true;


            EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
            DataSet dset3 = objdb.Get_Registration_DropDowns("INSTYPE", SessionHandler.DBSESSION_ID);
            if (dset3.Tables[0].Rows.Count > 0)
            {
                ddlinslevel.DataSource = dset3.Tables[0];
                ddlinslevel.DataTextField = "INSURANCE_TYPE_NAME";
                ddlinslevel.DataValueField = "INSURANCE_TYPE_ID";
                ddlinslevel.DataBind();
                ddlinslevel.Items.Insert(0, new ListItem("--select--", "0"));
            }

        }
        else
        {
            Response.Redirect("~/Default.aspx");
        }
    }

    public void BindPatTypeDropdown(DataTable dt)
    {
        ddlpatcreditype.DataSource = dt;
        ddlpatcreditype.DataTextField = "PATIENT_TYPE_NAME";
        ddlpatcreditype.DataValueField = "PATIENT_TYPE_ID";
        ddlpatcreditype.DataBind();
        ddlpatcreditype.Items.Insert(0, new ListItem("--select--", "0"));
        ListItem removeg = ddlpatcreditype.Items.FindByText("Cash");
        ddlpatcreditype.Items.Remove(removeg);
        ListItem removes = ddlpatcreditype.Items.FindByText("Staff");
        ddlpatcreditype.Items.Remove(removes);
        ListItem removesd = ddlpatcreditype.Items.FindByText("Staff dependent");
        ddlpatcreditype.Items.Remove(removesd);
        ListItem removehv = ddlpatcreditype.Items.FindByText("Home Visit");
        ddlpatcreditype.Items.Remove(removehv);
        ListItem removeInt = ddlpatcreditype.Items.FindByText("International");
        ddlpatcreditype.Items.Remove(removeInt);

        ddlpattyp.DataSource = dt;
        ddlpattyp.DataTextField = "PATIENT_TYPE_NAME";
        ddlpattyp.DataValueField = "PATIENT_TYPE_ID";
        ddlpattyp.DataBind();
        ddlpattyp.Items.Insert(0, new ListItem("--select--", "0"));
        ListItem removieitem = ddlpattyp.Items.FindByText("Cash");
        ddlpattyp.Items.Remove(removieitem);
        ListItem removestaff = ddlpattyp.Items.FindByText("Staff");
        ddlpattyp.Items.Remove(removestaff);
        ListItem removestaffdep = ddlpattyp.Items.FindByText("Staff dependent");
        ddlpattyp.Items.Remove(removestaffdep);
        ListItem removehome = ddlpattyp.Items.FindByText("Home Visit");
        ddlpattyp.Items.Remove(removehome);
        ListItem International = ddlpattyp.Items.FindByText("International");
        ddlpattyp.Items.Remove(International);

    }
    public void BindMultiInsRel(DataTable dt)
    {
        ddlinsrelations.DataSource = dt;
        ddlinsrelations.DataTextField = "PATIENT_RELATIONSHIP_NAME";
        ddlinsrelations.DataValueField = "PATIENT_RELATIONSHIP_ID";
        ddlinsrelations.DataBind();
        ddlinsrelations.Items.Insert(0, new ListItem("--select--", "0"));
    }
    public void BindIdProofDtls(DataTable dt)
    {
        ddlproofid.DataSource = dt;
        ddlproofid.DataTextField = "ID_PROOF_TYPE_NAME";
        ddlproofid.DataValueField = "ID_PROOF_TYPE_ID";
        ddlproofid.DataBind();
        ddlproofid.Items.Insert(0, new ListItem("--ID Proof--", "0"));

    }
    public void BindMultiInsGender(DataTable dt)
    {
        ddlGender.DataSource = dt;
        ddlGender.DataTextField = "SEX_NAME";
        ddlGender.DataValueField = "SEX_ID";
        ddlGender.DataBind();
        ddlGender.Items.Insert(0, new ListItem("--select--", "0"));
    }
    public string Emplookup
    {
        get { return hdnEmplookup.Value; }
        set { hdnEmplookup.Value = value; }
    }
    public void BindTitles(DataTable dttitle)
    {
        var list = new List<Dictionary<string, object>>();
        foreach (DataRow row in dttitle.Rows)
        {
            var dict = new Dictionary<string, object>();
            foreach (DataColumn col in dttitle.Columns)
            {
                dict[col.ColumnName] = row[col];
            }
            list.Add(dict);
        }
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        string strTitle = serializer.Serialize(list);
        ScriptManager.RegisterStartupScript(this, this.GetType(), "addLabel1", "javascript:Assigncardlabel1( ' " + strTitle + "');", true);
    }
}