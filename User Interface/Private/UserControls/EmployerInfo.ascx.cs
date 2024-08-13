namespace HIMS.NET
{
    using System;
    using System.Data;
    using System.Web.UI.WebControls;
    using System.Collections.Generic;
    public partial class Private_UserControls_EmployerInfo : System.Web.UI.UserControl
    {
        #region PageLoad Method
        protected void Page_Load(object sender, EventArgs e)
        {
            if (SessionHandler.DBSESSION_ID > 0)
            {
                if (!IsPostBack)
                {
                    MasterClass obj = new MasterClass();
                    hdndateformat.Value = "dd-MMM-yyyy";
                    chkDeptExists.Checked = true;
                    ChkBrachExists.Checked = true;
                    hdnClientName.Value = obj.WebConfigSettings("ClientName");
                    DataSet _dsgetdocper = SessionHandler.DocPermission;
                    //int DocCount = _dsgetdocper.Tables[0].Rows.Count;
                    hdncmpquick.Value = "Y";
                    //for (int i = 0; i < DocCount; i++)
                    //{
                    //    string docIds = _dsgetdocper.Tables[0].Rows[i]["DOC_ID"].ToString();
                    //    switch (docIds)
                    //    {
                    //        case "2342":/*--2342 CorpReg & Ref Letter*/
                    //            {
                    //                if ((_dsgetdocper.Tables[0].Rows[i]["ACCESS_ADD"].ToString()) == "Y")
                    //                    hdncmpquick.Value = "Y";
                    //                else
                    //                    hdncmpquick.Value = "N";
                    //                break;
                    //            }

                    //        default:
                    //            break;
                    //    }
                    //}
                }

                TextBox uctpaname = uctpa.FindControl("txtSearchControl") as TextBox;
                uctpaname.Attributes.Add("onblur", "javascript:return OnNullValue(this);");
                if (EmployeeName == "EMPCMP")
                {
                    List<object> elements = new List<object>();
                    elements.Add("ALL");// for getting all companies which are tariff setting not done also.
                    this.uctpa.LookupName = "EMPLOYER_REG";
                    this.uctpa.PreConditon = elements;

                }
                else if (EmployeeName == "CMPOPD")
                {
                    List<object> elements = new List<object>();
                    elements.Add("ALL");// for getting all companies which are tariff setting not done also.
                    this.uctpa.LookupName = "EMPLOYER_OPD_NEW";
                    this.uctpa.PreConditon = elements;
                    this.EmployerControl1.LookupName = "EMPLOYER_OPD_CMP_NEW";
                }
                else
                {
                    List<object> elements = new List<object>();
                    elements.Add("ALL");// for getting all companies which are tariff setting not done also.
                    this.EmployerControl1.LookupName = "EMPLOYER";
                    this.EmployerControl1.PreConditon = elements;

                    List<object> _elements1 = new List<object>();
                    _elements1.Add(0);//PatientId
                    uctpa.LookupName = "EMPLOYER"   ;
                    uctpa.PreConditon = _elements1;
                    this.uctpa.OnBlurRequired = true;

                    List<object> _elements = new List<object>();
                    _elements.Add(0);//company type
                    _elements.Add("PATIENTCMP");//gets all companies irrespective of company type.
                    _elements.Add(0);//PatientId
                    CmpLookup.LookupName = "COMPANY";
                    CmpLookup.PreConditon = _elements;
                    this.ucRefLetterNo.LookupName = "ReferalLetters";
                    ucRefLetterNo.OnBlurRequired = true;
                }
            }
            else
            {
                Response.Redirect("~/Default.aspx");
            }
        }

        #endregion
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);
        }

        public void binddropdowns(DataSet dset)
        {
            ddlpolicytype.DataSource = dset.Tables[28];
            ddlpolicytype.DataTextField = "POLICY_TYPE_NAME";
            ddlpolicytype.DataValueField = "POLICY_TYPE_ID";
            ddlpolicytype.DataBind();
            ddlpolicytype.Items.Insert(0, new ListItem("--select--", "0"));
        }
        public void BindEmpRelations(DataTable dt)
        {
            if (dt != null && dt.Rows.Count > 0)
            {
                ddlrelation.DataSource = dt;
                ddlrelation.DataTextField = "PATIENT_RELATIONSHIP_DESC";
                ddlrelation.DataValueField = "PATIENT_RELATIONSHIP_ID";
                ddlrelation.DataBind();
                ddlrelation.Items.Insert(0, new ListItem("--select--", "0"));
            }
        }
        #region Methods

        //public void EnableDisableEmployeeInfoControls(bool value)
        //{
        //    chkiscorporate.Enabled = value;
        //    EmployerControl1.Enabled = value;
        //    lblCmpCode.Enabled = value;
        //    txtCmpFee.Enabled = value;
        //    //EmployerControl1.EnableDisableEmployer = value;
        //    chkEmpASPatient.Enabled = value;
        //    //ddlEmpCoverage.Enabled = value;

        //    txtEmpMRNo.Enabled = value;
        //    txtEmpContactNo.Enabled = value;
        //    txtEmploeeID.Enabled = value;
        //    txtEmployeeName.Enabled = value;
        //    ddlrelation.Enabled = value;
        //    //ddlgrade.Enabled = value;
        //    txtempgrade.Enabled = value;
        //    txtDesignation.Enabled = value;
        //    txtSalary.Enabled = value;
        //    txtDept.Enabled = value;
        //    txtBranch.Enabled = value;
        //    ddlCorpBranch.Enabled = value;
        //    ddlCorpDept.Enabled = value;
        //    chkDeptExists.Enabled = value;
        //    ChkBrachExists.Enabled = value;
        //}
        #endregion

        #region Properties
        private string employername = string.Empty;
        public string EmployerName
        {
            get
            {
                return EmployerControl1.Value;
            }
            set
            {
                EmployerControl1.Value = value;
            }
        }

        public string EmployerNameText
        {
            get { return EmployerControl1.Text; }
            set
            {
                EmployerControl1.Text = value;
            }
        }

        private string employeeid = string.Empty;
        public string EmployeeID
        {
            get
            {
                return txtEmploeeID.Text;
            }
            set
            {
                txtEmploeeID.Text = value;
            }
        }
        private string employeename = string.Empty;
        public string EmployeeName
        {
            get
            {
                return txtEmployeeName.Text;
            }
            set
            {
                txtEmployeeName.Text = value;
            }
        }

        private string relationship = string.Empty;
        public string RelationShip
        {
            get
            {
                if (ddlrelation.SelectedIndex > 0)
                    return ddlrelation.SelectedValue;
                return string.Empty;
            }
            set
            {
                if (value != "")
                    ddlrelation.SelectedValue = value;
            }

        }

        public int RelationIndex
        {
            get { return ddlrelation.SelectedIndex; }
            set { ddlrelation.SelectedIndex = value; }
        }
        private string grade = string.Empty;

        public string Grade
        {
            get { return hidGrade.Value; }
            set
            {
                hidGrade.Value = value;
            }
        }
        public string GradeName
        {
            get { return txtempgrade.Text; }
            set { txtempgrade.Text = value; }
        }

        private string contactno = string.Empty;
        public string ContactNo
        {
            get
            {
                return txtEmpContactNo.Text;
            }
            set
            {
                txtEmpContactNo.Text = value;
            }
        }
        private string cardno = string.Empty;
        public string CardNO
        {
            get
            {
                return txtEmpMRNo.Text;
            }
            set
            {
                txtEmpMRNo.Text = value;
            }
        }

        private string validity = string.Empty;
        public string Validity
        {
            get
            {
                return txtEmpCardValidity.Text;
            }
            set
            {
                txtEmpCardValidity.Text = value;
            }
        }


        private string validfor = string.Empty;
        public string ValidFor
        {
            get
            {
                return ddlvldfr.SelectedValue;
            }
            set
            {
                ddlvldfr.SelectedValue = value;
            }
        }
        public string EmployerText
        {
            get { return EmployerControl1.Text; }
            set { EmployerControl1.Text = value; }
        }
        public string EmployerID
        {
            get { return EmployerControl1.Value; }
            set { EmployerControl1.Value = value; }
        }

        public string EmployeeText
        {
            get { return txtEmployeeName.Text; }
            set { txtEmployeeName.Text = value; }
        }
        //public bool IsCorporate
        //{
        //    get { return chkEmpASPatient.Checked; }
        //    set { chkEmpASPatient.Checked = value; }
        //}

        //public bool ChkEmpASPatient
        //{
        //    get
        //    {
        //        return chkEmpASPatient.Checked;
        //    }
        //    set
        //    {
        //        chkEmpASPatient.Checked = value;
        //    }
        //}
        private string designation = string.Empty;
        public string Designation
        {
            get
            {
                return txtDesignation.Text;
            }
            set
            {
                txtDesignation.Text = value;
            }
        }

        private string dept = string.Empty;
        public string Department
        {
            get
            {
                return txtDept.Text;
            }
            set
            {
                txtDept.Text = value;
            }
        }

        //private string salary = string.Empty;
        //public string Salary
        //{
        //    get
        //    {
        //        return txtSalary.Text;
        //    }
        //    set
        //    {
        //        txtSalary.Text = value;
        //    }
        //}
        public string BranchName
        {
            get
            {
                return txtBranch.Text;
            }
            set
            {
                txtBranch.Text = value;
            }
        }
        public bool ISDeptExists
        {
            get { return chkDeptExists.Checked; }
            set { chkDeptExists.Checked = value; }
        }
        public bool ISBranchExists
        {
            get { return ChkBrachExists.Checked; }
            set { ChkBrachExists.Checked = value; }
        }
        public string DeptName
        {
            get { return ddlCorpDept.SelectedItem.Text; }
            set { ddlCorpDept.SelectedItem.Text = value; }
        }
        public string CorpBranchName
        {
            get { return ddlCorpBranch.SelectedItem.Text; }
            set { ddlCorpBranch.SelectedItem.Text = value; }
        }
        public string Emplookup
        {

            get { return hdnEmplookup.Value; }
            set { hdnEmplookup.Value = value; }

        }
        #endregion
    }
}

