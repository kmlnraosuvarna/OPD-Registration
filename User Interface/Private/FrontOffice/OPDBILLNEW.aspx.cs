using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Web.Services;
using System.Data.Common;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using EzHms.Abstract;
using System.Web.Script.Serialization;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Net;
using Newtonsoft.Json;
public partial class Private_FrontOffice_OPDBILLNEW : MasterClass
{

    private string patid = string.Empty;
    private string umrno = string.Empty;
    private string rcode = string.Empty;
    private string refer = string.Empty;
    private string result = string.Empty;
    string billno = string.Empty;
    //private CompanyPolicyCollection cpolicyColl = null;
    private IPatientRegistration pregService = null;
    //private ICompanyPolicy icomPolicy = null;
    //private IReceipt irecpt = null;
    private ILookUpSearch lookUP = null;
    private ReceiptMaster recMaster;
    string dbdateformat = "yyyy/MM/dd";
    private IAutoGenerateCD autoCDSer = null;
    // private IPatientRegistration _lookp = null;
    EzHms.Abstract.ILookUpSearch authService = null;
    private PatientRegistrationCollection collection = null;
    private EzHms.ModelEntity.PatientRegistration preigstation = null;
    DataTable dtableService = new DataTable();
    DataRow objDr;
    //private EzHms.Abstract.ICompanyPolicy icompolicy = null;
    int count = 0; int _patid = 0, tranid = 0, CausltyBid = 0;
    string conbillid = string.Empty;
    string PreReportName = string.Empty;
    string regbillno = string.Empty, opbillid = string.Empty;
    // public static string clientName;
    void InitlizeLookups()
    {
        List<object> refelements = new List<object>();
        refelements.Add("AB");
        UcStaffName.LookupName = "EMPLOYEE";
        UcStaffName.PreConditon = refelements;
        UcStaffName.OnBlurRequired = true;
        List<object> flag = new List<object>();
        flag.Add(0);
        this.UCprereg.PreConditon = flag;
        UCprereg.LookupName = "PRE_REGISTRATION";
        UCprereg.OnBlurRequired = true;
        List<object> _flag = new List<object>();
        _flag.Add("RCN");
        this.UcAppointmentNo.PreConditon = _flag;

        this.UcAppointmentNo.LookupName = "APPOINTMENTSREG_NEW1";
        this.UcAppointmentNo.OnBlurRequired = true;
        //SessionHandler.REGIONALLAB_ID = "RCN";
        Session["context_key"] = "APMNT_ID";
        List<object> flagd = new List<object>();
        flagd.Add("");
        flagd.Add("");
        flagd.Add("N");
        flagd.Add("");
        flagd.Add("0,0");

        
        ucConsultant.PreConditon = flagd;
        ucConsultant.LookupName = "DOCTOR_NEW";
        ucConsultant.OnBlurRequired = true;

        this.UcOdrPsyn.LookupName = "DOCTOR_NEW";
        this.UcOdrPsyn.OnBlurRequired = true;

        this.UcFamilyReff.LookupName = "NEW_UMR";
        this.UcFamilyReff.OnBlurRequired = true;
        // SessionHandler.PRE_CONDITON = "OP";

        List<object> eleReg = new List<object>();
        eleReg.Add("REGEXPIRED");
        ucUMRno.PreConditon = eleReg;
        this.ucUMRno.LookupName = "NEW_UMR";
        this.ucUMRno.OnBlurRequired = true;
        //SessionHandler.PRE_CONDITON = "REGEXPIRED";

        Session["Flag"] = "REGEXPIRED";
        LookUp EmployerControl1 = EmployerInfo1.FindControl("EmployerControl1") as LookUp;
        EmployerControl1.LookupName = "EMPLOYER";
        EmployerControl1.OnBlurRequired = true;
        List<object> ele = new List<object>();
        ele.Add(ddlNationality.SelectedValue);
        ucIssuedAt.PreConditon = ele;
        this.ucIssuedAt.LookupName = "ISSUEDAT";
        this.UcDiagnosis.LookupName = "PASDIAGNOSIS_NEW";
        this.UcDiagnosis.OnBlurRequired = true;
    }
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        hdnSaveAlert.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.CONFIRMSAVE);
        headerControl1.SaveItems += new Private_UserControls_PageHeaderControl.OnSave(this.OnSavePatientRegistration);
        //headerControl1.CancelItems += new Private_UserControls_PageHeaderControl.OnCancel(this.ImgBtnCancel_Click);
        this.headerControl1.OnSaveClientClick = "return CheckMandatoryfieldsData('" + hdnSaveAlert.ClientID + "');";
        this.headerControl1.OnClearClientClick = "AllClearPopUp();return false;";
        //this.btnOk.ServerClick += new EventHandler(btnOk_Click);
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string GetPrescriptionReportName(string billid)
    {
        string rpt_name = string.Empty; string Report_name = string.Empty;
        //DBPatientRegistration objreg = new DBPatientRegistration();
        //rpt_name = objreg.DBGetPrescReportName(billid, out Report_name);
        return rpt_name;
    }
    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public static string Get_imagedetails(byte[] _str, string UMR_NO, string REFERENCE_ID, string REFERENCE_TYPE_ID, string formname)
    {
        string stObj = Convert.ToBase64String(_str);

        HttpContext.Current.Session.Add("IMG_UMR_NO", UMR_NO);
        HttpContext.Current.Session.Add("IMG_REFERENCE_ID", REFERENCE_ID);
        HttpContext.Current.Session.Add("IMG_REFERENCE_TYPE_ID", REFERENCE_TYPE_ID);
        HttpContext.Current.Session.Add("FORMNAME", formname);
        return stObj;
    }
    [WebMethod(EnableSession = true)]
    public static void OnImageCondition(string umrno)
    {
        HttpContext.Current.Session["FORMNAME"] = "";
        SessionHandler.Umr_No = umrno;
    }

    [WebMethod(EnableSession = true)]
    public static void onref(string patid)
    {
        /*HttpContext.Current.Session["advsearch"] = patid;*/
        HttpContext.Current.Session.Remove("advsearch");
        HttpContext.Current.Session.Add("advsearch", "PATIENT_ID=" + patid);
    }
    [WebMethod(EnableSession = true)]
    public static string Decrypting(string target)
    {
        ASCIIEncoding encoding;
        try
        {
            encoding = new ASCIIEncoding();
            var bytes = Convert.FromBase64String(target ?? string.Empty);
            var decodedString = encoding.GetString(bytes);
            return decodedString;
        }
        catch { }
        return null;
    }
    [WebMethod]
    public static CollectionBase CheckIdProofStatus(string ProofID, string ProofName, string obj)
    {
        DBPatientRegistration dbobj = new DBPatientRegistration();
        CollectionBase ds = dbobj.CheckIdProofStatus(ProofID, ProofName, obj);
        return ds;

    }
    [WebMethod(EnableSession = true)]
    public static List<object> GetPatientRequisitions(string _cName, string _pText, string pageNum, string pageSize, string _advSrch)
    {
        int total_records = 0;
        GridPaging gpage = new GridPaging();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.ADVANCESEARCH = _advSrch;
        gpage.PAGE_SIZE = Convert.ToInt32(pageSize);
        gpage.CURRENT_PAGE = Convert.ToInt32(pageNum);
        if (_pText == string.Empty)
            _cName = string.Empty;
        DBServices1 _iipAppBill = new DBServices1();
        PatientRegistrationCollection _coll = null;
        _coll = new PatientRegistrationCollection();
        CollectionBase cs = (PatientRegistrationCollection)_iipAppBill.GetConsultDetails(gpage, out total_records);
        if (cs != null)
        {
            /*total_records = cs.Count;*/
            List<object> _lst = new List<object>();
            _lst.Add(cs);
            _lst.Add(total_records);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod(EnableSession = true)]
    public static List<object> BindAuthLookup(string _cName, string _pText, string pageNum, string pageSize, string _advSrch, string Auth_trans_for, string _eventFlag)
    {
        int total_records = 0;
        GridPaging gpage = new GridPaging();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.ADVANCESEARCH = _advSrch;
        gpage.PAGE_SIZE = Convert.ToInt32(pageSize);
        gpage.CURRENT_PAGE = Convert.ToInt32(pageNum);
        List<object> element = new List<object>();

        element.Add("");
        element.Add(Auth_trans_for);
        gpage.PreConditon = element;
        if (_pText == string.Empty)
            _cName = string.Empty;
        gpage.EVENTFLAG = Convert.ToInt32(_eventFlag);
        DBPatientRegistration _iipAppBill = new DBPatientRegistration();
        PatientRegistrationCollection _coll = null;
        _coll = new PatientRegistrationCollection();
        CollectionBase cs = (PatientRegistrationCollection)_iipAppBill.GetLookUPSearchData(gpage, out total_records);
        if (cs.Count > 0)
        {
            total_records = ((PatientRegistrationCollection)cs).GetList(0).NoOfRecords;
            /*total_records = cs.Count;*/
            List<object> _lst = new List<object>();
            _lst.Add(cs);
            _lst.Add(total_records);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod]
    public static List<object> BindPatHistory(string umrno, string admnno, string _advSrch)
    {
        EzHms.ModelEntity.ReceiptMasterCollection recpColl1 = new ReceiptMasterCollection();
        EzHms.DataAccessObject.DBPatientRegistration intRecp = new EzHms.DataAccessObject.DBPatientRegistration();
        ReceiptMaster _rcpt = new ReceiptMaster();
        _rcpt.UMR_NO = umrno;
        // _rcpt.ADMN_NO = !string.IsNullOrEmpty(admnno) ? admnno : null;
        _rcpt.SESSION_ID = SessionHandler.DBSESSION_ID.ToString();
        _rcpt.ADVANCESEARCH = _advSrch;
        CollectionBase recpColl = intRecp.GetPatientPreConsultationDetails1(_rcpt);
        if (recpColl != null)
        {
            List<object> _lst = new List<object>();
            _lst.Add(recpColl);
            _lst.Add(recpColl.Count);
            return _lst;
        }
        else
            return null;
    }
    
    [WebMethod(EnableSession = true)]
    public static string btnOk_Clicknew(string _patid, string tranid, string conbillid, string PreReportName, string reg_reg_no, string reg_bill_id, string opbillid, string regbillno, string grpbillno, string umr_no, string rbtnPrintOptions, string hdnauth_user, string Reg_Type, string mlc, string BothPrintSetting, string hdnNoOfCopies, string[] chkPrints, string DtFrmt, string regdocid)
    {


    //    #region print Variables
    //    string ReportName = string.Empty; string path = string.Empty; string opreportPath = string.Empty;
    //    string oppath = string.Empty; string conreportPath = string.Empty; string conpath = string.Empty; string conReportName = string.Empty;
    //    string reportPath = string.Empty;
    //    string reportPath1 = string.Empty;
    //    string reportPath2 = string.Empty;
    //    string reportPath3 = string.Empty;
    //    string reportPath4 = string.Empty;
    //    string reportPath5 = string.Empty;
    //    string regurl = string.Empty;
    //    string allprints = string.Empty;
    //    string opurl = string.Empty;
    //    string regcardurl = string.Empty;
    //    string url4 = string.Empty;
    //    string url5 = string.Empty;

    //    #endregion
    //    int printcount = 0;
    //    // HiddenField hdnbraverizes = (HiddenField)UCServices.FindControl("hdnfoodandbev");
    //    List<object> rptlistobject = new List<object>();
    //    List<string> rptPathslistobj = new List<string>();
    //    DataTable _dtrep = SessionHandler.ReportDocPermission;
    //    DataView _dvrep = new DataView(_dtrep);
    //    if (rbtnPrintOptions == "1")
    //    {
    //        //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alert", "window.location.href='OPDBill.aspx';", true);
    //        IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
    //        DocFormatCollection dcol = imap.GetDocFormat(SessionHandler.DOCUMENT_ID);
    //        if (dcol != null && dcol.Count >= 0)
    //        {
    //            foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
    //                ReportName = dmp.DOC_NAME_DESC.ToString();
    //            string[] str = ReportName.Split(',');
    //            reportPath = str[0];
    //            if (reportPath == "")
    //            {
    //                reportPath = "ConsultationSlip_A4Half";
    //            }
    //        }
    //        else
    //        {
    //            reportPath = "ConsultationSlip_A4Half";
    //        }
    //        PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //        string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //        int patid = 0;
    //        _psinfo.PrintSettings_info(64, patid, string.Empty);
    //        if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
    //        {
    //            if (!string.IsNullOrEmpty(grpbillno))
    //            {
    //                #region Registration Slip
    //                List<ReportParameter> paramList = new List<ReportParameter>();
    //                paramList.Add(new ReportParameter("IP_GRP_BILL_NO", grpbillno.ToString(), false));
    //                paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                paramList.Add(new ReportParameter("IP_MAIN_REPORT_NAME", "OPD_Registration_And_Billing", false));
    //                paramList.Add(new ReportParameter("PRINT_BY", SessionHandler.UserName, false));
    //                string ptyp = string.Empty;
    //                if (_psinfo.PRINT_TYPE == "ORIGINAL")
    //                    ptyp = "Y";
    //                else
    //                    ptyp = "N";
    //                if (hdnauth_user == "Y")
    //                {
    //                    ptyp = "Y";
    //                }
    //                paramList.Add(new ReportParameter("PRINT_TYPE", ptyp, false));
    //                IDocFormatMap regimap = new EzHms.Services.DocFormatMapping();
    //                DocFormatCollection regdcol = regimap.GetDocFormat(SessionHandler.DOCUMENT_ID);
    //                if (regdcol != null && regdcol.Count >= 0)
    //                {
    //                    foreach (EzHms.ModelEntity.DocFormatMapping dmp in regdcol)
    //                        ReportName = dmp.DOC_NAME_DESC.ToString();
    //                    string[] str2 = ReportName.Split(',');
    //                    path = str2[0];
    //                    if (path == "")
    //                    {
    //                        path = "OPD_Registration_And_Billing";
    //                    }
    //                }
    //                else
    //                {
    //                    path = "OPD_Registration_And_Billing";
    //                }
    //                reportPath5 = "/HIMSReprots/" + path;
    //                rptlistobject.Add(paramList);
    //                rptPathslistobj.Add(reportPath5);
    //                SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //                SessionHandler.ReportPaths = rptPathslistobj;
    //                allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath5 + "&transno=" + grpbillno + "&umrno=" + grpbillno + ",";
    //                MasterClass obj1 = new MasterClass();

    //                allprints += obj1.WebConfigSettings("BARCODEPATH") + "R-" + umr_no + ",";
    //                SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //                SessionHandler.ReportPaths = rptPathslistobj;
    //                #endregion
    //            }
    //        }
    //    }
    //    if (chkPrints[0] == "1" || chkPrints[1] == "1" || chkPrints[5] == "1")
    //    {
    //        _dvrep.RowFilter = "PAR_DOC_ID = 64 AND PARENT_MODULE_ID=16 AND MODULE_ID=18";
    //        if (_dtrep != null)
    //        {
    //            _dtrep = _dvrep.ToTable();
    //        }
    //        if (_dtrep != null && _dtrep.Rows.Count > 0)
    //        {
    //            foreach (DataRow row in _dtrep.Rows)
    //            {
    //                if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "RECEIPT PRINT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints[0] == "1")
    //                {
    //                    List<ReportParameter> paramList = new List<ReportParameter>();
    //                    paramList.Add(new ReportParameter("IP_BILL_NO", regbillno.ToString(), false));
    //                    paramList.Add(new ReportParameter("DateFormat", "dd/MMM/yyyy", false));
    //                    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
    //                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList.Add(new ReportParameter("IsLogoVisible", "true", false));
    //                    paramList.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "1", false));
    //                    paramList.Add(new ReportParameter("IP_FLAG", "1", false));
    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    reportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath + "&umrno=" + regbillno + "&regdocid=" + regdocid + ",";

    //                    rptlistobject.Add(paramList);
    //                    rptPathslistobj.Add(reportPath);

    //                }
    //                else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "FACESHEET REPORT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints[0] == "1")
    //                {
    //                    List<ReportParameter> paramList1 = new List<ReportParameter>();
    //                    paramList1.Add(new ReportParameter("IP_BILL_NO", regbillno.ToString(), false));
    //                    paramList1.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList1.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "1", false));
    //                    paramList1.Add(new ReportParameter("IP_FLAG", "1", false));
    //                    paramList1.Add(new ReportParameter("IP_DOC_ID", Convert.ToString(SessionHandler.DOCUMENT_ID)));

    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    string fcreportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + fcreportPath + "&umrno=" + regbillno + "&regdocid=" + regdocid + ",";
    //                    rptlistobject.Add(paramList1);
    //                    rptPathslistobj.Add(fcreportPath);
    //                }
    //                else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "CARD PRINT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints[1] == "1")
    //                {
    //                    string img = "0";
    //                    List<ReportParameter> paramList = new List<ReportParameter>();
    //                    paramList.Add(new ReportParameter("IP_BILL_NO", regbillno.ToString(), false));
    //                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList.Add(new ReportParameter("IP_DOC_ID", Convert.ToString(SessionHandler.DOCUMENT_ID), false));
    //                    paramList.Add(new ReportParameter("Pat_Image_Path", img, false));
    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    string crdreportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + crdreportPath + "&umrno=" + regbillno + "&regdocid=" + regdocid + ",";
    //                    rptlistobject.Add(paramList);
    //                    rptPathslistobj.Add(crdreportPath);
    //                }
    //                else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "LABEL PRINT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints[5] == "1")
    //                {
    //                    List<ReportParameter> paramList = new List<ReportParameter>();
    //                    paramList.Add(new ReportParameter("IP_UMR_NO", umr_no, false));
    //                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList.Add(new ReportParameter("IP_PATIENT_CLASS_ID", "2", false));
    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    string crdreportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + crdreportPath + "&umrno=" + regbillno + "&regdocid=" + regdocid + ",";
    //                    rptlistobject.Add(paramList);
    //                    rptPathslistobj.Add(crdreportPath);
    //                }
    //            }
    //            SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //            SessionHandler.ReportPaths = rptPathslistobj;
    //        }
    //    }
    //    if (chkPrints[2] == "1")
    //    {
    //        if (!string.IsNullOrEmpty(conbillid) && conbillid != "0")
    //        {
    //            string[] billstr = conbillid.Split(',');
    //            string conurl = string.Empty;
    //            #region Consultation Slip
    //            /*Consultation starts*/
    //            IDocFormatMap conimap = new EzHms.Services.DocFormatMapping();
    //            DocFormatCollection condcol = conimap.GetDocFormat(379);
    //            if (condcol != null && condcol.Count > 0)
    //            {
    //                foreach (EzHms.ModelEntity.DocFormatMapping dmp in condcol)
    //                    conReportName = dmp.DOC_NAME_DESC.ToString();
    //                string[] str1 = conReportName.Split(',');
    //                conpath = str1[0];
    //                if (conpath == "")
    //                {
    //                    conpath = "ConsultationSlip_A4Half";
    //                }
    //            }
    //            else
    //            {
    //                conpath = "ConsultationSlip_A4Half";
    //            }
    //            for (int i = 0; i < billstr.Length; i++)
    //            {
    //                string consurl = string.Empty;
    //                List<ReportParameter> conparamList = new List<ReportParameter>();
    //                PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //                string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //                int patid = 0;
    //                _psinfo.PrintSettings_info(86, patid, string.Empty);
    //                if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
    //                {
    //                    string reportTitle = "Consultation Receipt";
    //                    conparamList.Add(new ReportParameter("ReportTitle", reportTitle, false));
    //                    conparamList.Add(new ReportParameter("IP_BILL_ID", billstr[i].ToString(), false));
    //                    string ptyp = string.Empty;
    //                    if (_psinfo.PRINT_TYPE == "ORIGINAL")
    //                        ptyp = "Y";
    //                    else
    //                        ptyp = "N";
    //                    if (hdnauth_user == "Y")
    //                    {
    //                        ptyp = "Y";
    //                    }
    //                    //  conparamList.Add(new ReportParameter("Print_Type", ptyp, false));
    //                    conparamList.Add(new ReportParameter("IP_TRANSACTION_ID", tranid.ToString(), false));
    //                    conparamList.Add(new ReportParameter("DateFormat", DtFrmt, false));
    //                    conparamList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
    //                    conparamList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    conparamList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
    //                    conparamList.Add(new ReportParameter("IP_PATIENT_ID", _patid.ToString(), false));
    //                    conparamList.Add(new ReportParameter("IP_DOC_ID", SessionHandler.DOCUMENT_ID.ToString(), false));
    //                    reportPath3 = "/HIMSReprots/" + conpath;

    //                    rptlistobject.Add(conparamList);
    //                    rptPathslistobj.Add(reportPath3);

    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath3 + "&tid332=" + billstr[i].ToString() + ",";
    //                }
    //            }
    //            SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //            SessionHandler.ReportPaths = rptPathslistobj;
    //            /*consultation Ends*/
    //            #endregion
    //        }
    //    }
    //    if (chkPrints[3] == "1")
    //    {
    //        if (!string.IsNullOrEmpty(conbillid) && conbillid != "0")
    //        {
    //            string[] billstr = conbillid.Split(',');
    //            string conurl = string.Empty;
    //            #region Prescription Slip
    //            /*Consultation starts*/
    //            IDocFormatMap conimap = new EzHms.Services.DocFormatMapping();
    //            DocFormatCollection condcol = conimap.GetDocFormat(379);
    //            if (condcol != null && condcol.Count > 0)
    //            {
    //                foreach (EzHms.ModelEntity.DocFormatMapping dmp in condcol)
    //                    conReportName = dmp.DOC_NAME_DESC.ToString();
    //                string[] str1 = conReportName.Split(',');
    //                conpath = str1[0];
    //                if (conpath == "")
    //                {
    //                    conpath = "Prescription_Normal";
    //                }
    //            }
    //            else
    //            {
    //                conpath = "Prescription_Normal";
    //            }

    //            for (int i = 0; i < billstr.Length; i++)
    //            {
    //                string consurl = string.Empty;
    //                List<ReportParameter> conparamList = new List<ReportParameter>();
    //                PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //                string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //                int patid = 0;
    //                _psinfo.PrintSettings_info(86, patid, string.Empty);


    //                string conspreurl = string.Empty;
    //                if (BothPrintSetting != "0")
    //                {
    //                    PreReportName = GetPrescriptionReportName(billstr[i].ToString());
    //                    if (PreReportName == string.Empty)
    //                    {
    //                        PreReportName = "Prescription_Normal";
    //                    }
    //                    List<ReportParameter> paramListcpre = new List<ReportParameter>();
    //                    paramListcpre.Add(new ReportParameter("IP_BILL_ID", billstr[i].ToString(), false));
    //                    paramListcpre.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramListcpre.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "0", false));
    //                    paramListcpre.Add(new ReportParameter("IP_FLAG", "", false));
    //                    if (!string.IsNullOrEmpty(PreReportName))
    //                        reportPath4 = "/HIMSReprots/" + PreReportName;
    //                    else
    //                        reportPath4 = "/HIMSReprots/Prescription_Normal";
    //                    rptlistobject.Add(paramListcpre);
    //                    rptPathslistobj.Add(reportPath4);

    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath4 + "&tid332=" + billstr[i].ToString() + ",";
    //                }

    //            }
    //            SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //            SessionHandler.ReportPaths = rptPathslistobj;
    //            /*consultation Ends*/
    //            #endregion
    //        }
    //    }

    //    if (chkPrints[4] == "1")
    //    {
    //        if (!string.IsNullOrEmpty(opbillid) && opbillid != "0")
    //        {
    //            #region OP Bill Print
    //            string patientId = string.Empty;
    //            patientId = _patid.ToString();
    //            string obj = string.Empty;
    //            obj = "Bill Cum Receipt";
    //            PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //            string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //            int patid = 0;
    //            _psinfo.PrintSettings_info(376, patid, string.Empty);
    //            if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
    //            {
    //                List<ReportParameter> opparamList = new List<ReportParameter>();
    //                string ptyp = string.Empty;
    //                if (_psinfo.PRINT_TYPE == "ORIGINAL")
    //                    ptyp = "Y";
    //                else
    //                    ptyp = "N";
    //                if (hdnauth_user == "Y")
    //                {
    //                    ptyp = "Y";
    //                }
    //                opparamList.Add(new ReportParameter("IP_TRANSACTION_ID", tranid.ToString(), false));
    //                opparamList.Add(new ReportParameter("IP_BILL_ID", opbillid.ToString(), false));
    //                opparamList.Add(new ReportParameter("IP_PATIENT_ID", patientId, false));
    //                opparamList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                opparamList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
    //                opparamList.Add(new ReportParameter("Title", obj, false));
    //                opparamList.Add(new ReportParameter("showprintdt", false.ToString(), false));
    //                opparamList.Add(new ReportParameter("IP_DOC_ID", SessionHandler.DOCUMENT_ID.ToString(), false));
    //                IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
    //                DocFormatCollection dcol = imap.GetDocFormat(86);
    //                foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
    //                    ReportName = dmp.DOC_NAME_DESC.ToString();
    //                string[] str = ReportName.Split(',');
    //                oppath = str[0];
    //                if (oppath == "")
    //                {
    //                    oppath = "OPReport_A4Half";
    //                }
    //                string Con = string.Empty;
    //                Con = "N";
    //                if (Con == "N")
    //                    opparamList.Add(new ReportParameter("IsLogoVisible", false.ToString(), false));

    //                if (Con == "Y")
    //                    opparamList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
    //                string copies = !string.IsNullOrEmpty(hdnNoOfCopies) ? hdnNoOfCopies : "0"; ;
    //                // string copies = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.NoOfCopies);
    //                if (oppath == "OPReport_NoOfServicePerPage")
    //                    opparamList.Add(new ReportParameter("ServiceCntPerPage", copies, true));

    //                reportPath2 = "/HIMSReprots/" + oppath;
    //                rptlistobject.Add(opparamList);
    //                rptPathslistobj.Add(reportPath2);
    //                SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //                SessionHandler.ReportPaths = rptPathslistobj;
    //                allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath2 + "&tid332=" + opbillid.ToString() + ",";
    //            #endregion
    //            }
    //        }
    //    }
    //    IAutoGenerateCD autoCDSer = null;
    //    autoCDSer = new EzHms.Services.AutoGenerateCD();
    //    string new_umr_no = autoCDSer.GetAutoGenerateCD(DALConstants.PATIENT_TABLE);
    //    // ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "OPDbill", "javascript:ConsolatedPrint('" + allprints + "','" + Reg_Type + "','" + mlc + "','" + _patid + "','" + umr_no + "')", true);
    //    string data = allprints + "$%$" + Reg_Type + "$%$" + mlc + "$%$" + _patid + "$%$" + umr_no + "$%$" + new_umr_no;
    //    return data;
    //}
    //protected void btnOk_Click(object sender, EventArgs e)
    //{
    //    hdnregtypemain.Value = ddlRegType.SelectedValue;
    //    string mlc = "N";
    //    //  CheckBox CHKMLC = (CheckBox)Address1.FindControl("ChkMlcStatus") as CheckBox;

    //    if (ChkMlcStatus.Checked == true)
    //    {
    //        mlc = "Y";
    //    }
    //    #region print Variables
    //    string ReportName = string.Empty; string path = string.Empty; string opreportPath = string.Empty;
    //    string oppath = string.Empty; string conreportPath = string.Empty; string conpath = string.Empty; string conReportName = string.Empty;
    //    string reportPath = string.Empty;
    //    string reportPath1 = string.Empty;
    //    string reportPath2 = string.Empty;
    //    string reportPath3 = string.Empty;
    //    string reportPath4 = string.Empty;
    //    string reportPath5 = string.Empty;
    //    string regurl = string.Empty;
    //    string allprints = string.Empty;
    //    string opurl = string.Empty;
    //    string regcardurl = string.Empty;
    //    string url4 = string.Empty;
    //    string url5 = string.Empty;
    //    string reg_bill_id = string.Empty;
    //    string reg_reg_no = string.Empty;
    //    string grpbillno = string.Empty;
    //    #endregion
    //    int printcount = 0;
    //    _patid = !string.IsNullOrEmpty(hdnPrintPatID.Value) ? Convert.ToInt32(hdnPrintPatID.Value) : 0;
    //    tranid = !string.IsNullOrEmpty(hdnPrintTranid.Value) ? Convert.ToInt32(hdnPrintTranid.Value) : 0;
    //    conbillid = !string.IsNullOrEmpty(hdnPrintConBillId.Value) ? hdnPrintConBillId.Value : string.Empty;
    //    PreReportName = !string.IsNullOrEmpty(hdnprescreportname.Value) ? hdnprescreportname.Value : string.Empty;
    //    reg_reg_no = hdn_out_reg_no.Value;
    //    reg_bill_id = hdnout_reg_bill_id.Value;
    //    opbillid = !string.IsNullOrEmpty(hdnPrintOPBillId.Value) ? hdnPrintOPBillId.Value : string.Empty;
    //    regbillno = hdnPrintRegBillNo.Value;
    //    grpbillno = hdn_out_grp_bill_no.Value;
    //    HiddenField hdnbraverizes = (HiddenField)UCServices.FindControl("hdnfoodandbev");
    //    List<object> rptlistobject = new List<object>();
    //    List<string> rptPathslistobj = new List<string>();
    //    DataTable _dtrep = SessionHandler.ReportDocPermission;
    //    DataView _dvrep = new DataView(_dtrep);
    //    if (rbtnPrintOptions.SelectedValue == "1")
    //    {
    //        // ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alert", "window.location.href='OPDBill.aspx';", true);
    //        IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
    //        DocFormatCollection dcol = imap.GetDocFormat(SessionHandler.DOCUMENT_ID);
    //        if (dcol != null && dcol.Count >= 0)
    //        {
    //            foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
    //                ReportName = dmp.DOC_NAME_DESC.ToString();
    //            string[] str = ReportName.Split(',');
    //            reportPath = str[0];
    //            if (reportPath == "")
    //            {
    //                reportPath = "ConsultationSlip_A4Half";
    //            }
    //        }
    //        else
    //        {
    //            reportPath = "ConsultationSlip_A4Half";
    //        }
    //        PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //        string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //        int patid = 0;
    //        _psinfo.PrintSettings_info(64, patid, string.Empty);
    //        if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
    //        {
    //            if (!string.IsNullOrEmpty(grpbillno))
    //            {
    //                #region Registration Slip
    //                List<ReportParameter> paramList = new List<ReportParameter>();
    //                paramList.Add(new ReportParameter("IP_GRP_BILL_NO", grpbillno.ToString(), false));
    //                paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                paramList.Add(new ReportParameter("IP_MAIN_REPORT_NAME", "OPD_Registration_And_Billing", false));
    //                paramList.Add(new ReportParameter("PRINT_BY", SessionHandler.UserName, false));
    //                string ptyp = string.Empty;
    //                if (_psinfo.PRINT_TYPE == "ORIGINAL")
    //                    ptyp = "Y";
    //                else
    //                    ptyp = "N";
    //                if (hdnauth_user.Value == "Y")
    //                {
    //                    ptyp = "Y";
    //                }
    //                //paramList.Add(new ReportParameter("Print_type", ptyp, false));
    //                IDocFormatMap regimap = new EzHms.Services.DocFormatMapping();
    //                DocFormatCollection regdcol = regimap.GetDocFormat(SessionHandler.DOCUMENT_ID);
    //                if (regdcol != null && regdcol.Count >= 0)
    //                {
    //                    foreach (EzHms.ModelEntity.DocFormatMapping dmp in regdcol)
    //                        ReportName = dmp.DOC_NAME_DESC.ToString();
    //                    string[] str2 = ReportName.Split(',');
    //                    path = str2[0];
    //                    if (path == "")
    //                    {
    //                        path = "OPD_Registration_And_Billing";
    //                    }
    //                }
    //                else
    //                {
    //                    path = "OPD_Registration_And_Billing";
    //                }
    //                reportPath5 = "/HIMSReprots/" + path;
    //                rptlistobject.Add(paramList);
    //                rptPathslistobj.Add(reportPath5);
    //                SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //                SessionHandler.ReportPaths = rptPathslistobj;
    //                allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath5 + "&transno=" + grpbillno + "&umrno=" + grpbillno + ",";
    //                string umr_no = hdnUmrNo.Value;
    //                allprints += WebConfigSettings("BARCODEPATH") + "R-" + umr_no + ",";
    //                SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //                SessionHandler.ReportPaths = rptPathslistobj;
    //                #endregion
    //            }
    //        }
    //    }

    //    if (chkPrints.Items[0].Selected == true || chkPrints.Items[1].Selected == true || chkPrints.Items[5].Selected == true)
    //    {
    //        _dvrep.RowFilter = "PAR_DOC_ID = 64 AND PARENT_MODULE_ID=16 AND MODULE_ID=18";
    //        if (_dtrep != null)
    //        {
    //            _dtrep = _dvrep.ToTable();
    //        }
    //        if (_dtrep != null && _dtrep.Rows.Count > 0)
    //        {
    //            foreach (DataRow row in _dtrep.Rows)
    //            {
    //                if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "RECEIPT PRINT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints.Items[0].Selected == true)
    //                {
    //                    List<ReportParameter> paramList = new List<ReportParameter>();
    //                    paramList.Add(new ReportParameter("IP_BILL_NO", regbillno.ToString(), false));
    //                    paramList.Add(new ReportParameter("DateFormat", "dd/MMM/yyyy", false));
    //                    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
    //                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList.Add(new ReportParameter("IsLogoVisible", "true", false));
    //                    paramList.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "1", false));
    //                    paramList.Add(new ReportParameter("IP_FLAG", "1", false));
    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    reportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath + "&umrno=" + regbillno + "&regdocid=" + Request.QueryString["Doc_regID"] + ",";

    //                    rptlistobject.Add(paramList);
    //                    rptPathslistobj.Add(reportPath);

    //                }
    //                else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "FACESHEET REPORT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints.Items[0].Selected == true)
    //                {
    //                    List<ReportParameter> paramList1 = new List<ReportParameter>();
    //                    paramList1.Add(new ReportParameter("IP_BILL_NO", regbillno.ToString(), false));
    //                    paramList1.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList1.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "1", false));
    //                    paramList1.Add(new ReportParameter("IP_FLAG", "1", false));
    //                    paramList1.Add(new ReportParameter("IP_DOC_ID", Convert.ToString(SessionHandler.DOCUMENT_ID)));

    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    string fcreportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + fcreportPath + "&umrno=" + regbillno + "&regdocid=" + Request.QueryString["Doc_regID"] + ",";
    //                    rptlistobject.Add(paramList1);
    //                    rptPathslistobj.Add(fcreportPath);
    //                }
    //                else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "CARD PRINT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints.Items[1].Selected == true)
    //                {
    //                    string img = "0";
    //                    List<ReportParameter> paramList = new List<ReportParameter>();
    //                    paramList.Add(new ReportParameter("IP_BILL_NO", regbillno.ToString(), false));
    //                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList.Add(new ReportParameter("IP_DOC_ID", Convert.ToString(SessionHandler.DOCUMENT_ID), false));
    //                    paramList.Add(new ReportParameter("Pat_Image_Path", img, false));
    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    string crdreportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + crdreportPath + "&umrno=" + regbillno + "&regdocid=" + Request.QueryString["Doc_regID"] + ",";
    //                    rptlistobject.Add(paramList);
    //                    rptPathslistobj.Add(crdreportPath);
    //                }
    //                else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "LABEL PRINT" && row["PRN_HEADER"].ToString() == "Y" && chkPrints.Items[5].Selected == true)
    //                {
    //                    List<ReportParameter> paramList = new List<ReportParameter>();
    //                    paramList.Add(new ReportParameter("IP_UMR_NO", hdnUmrNo.Value, false));
    //                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramList.Add(new ReportParameter("IP_PATIENT_CLASS_ID", "2", false));
    //                    path = GetReportName(row["DOC_ID"].ToString());
    //                    string crdreportPath = "/HIMSReprots/" + path;
    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + crdreportPath + "&umrno=" + regbillno + "&regdocid=" + Request.QueryString["Doc_regID"] + ",";
    //                    rptlistobject.Add(paramList);
    //                    rptPathslistobj.Add(crdreportPath);
    //                }
    //            }
    //            SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //            SessionHandler.ReportPaths = rptPathslistobj;
    //        }
    //    }
    //    if (chkPrints.Items[2].Selected == true)
    //    {
    //        if (!string.IsNullOrEmpty(conbillid) && conbillid != "0")
    //        {
    //            string[] billstr = conbillid.Split(',');
    //            string conurl = string.Empty;
    //            #region Consultation Slip
    //            /*Consultation starts*/
    //            IDocFormatMap conimap = new EzHms.Services.DocFormatMapping();
    //            DocFormatCollection condcol = conimap.GetDocFormat(379);
    //            if (condcol != null && condcol.Count > 0)
    //            {
    //                foreach (EzHms.ModelEntity.DocFormatMapping dmp in condcol)
    //                    conReportName = dmp.DOC_NAME_DESC.ToString();
    //                string[] str1 = conReportName.Split(',');
    //                conpath = str1[0];
    //                if (conpath == "")
    //                {
    //                    conpath = "ConsultationSlip_A4Half";
    //                }
    //            }
    //            else
    //            {
    //                conpath = "ConsultationSlip_A4Half";
    //            }
    //            for (int i = 0; i < billstr.Length; i++)
    //            {
    //                string consurl = string.Empty;
    //                List<ReportParameter> conparamList = new List<ReportParameter>();
    //                PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //                string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //                int patid = 0;
    //                _psinfo.PrintSettings_info(86, patid, string.Empty);
    //                if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
    //                {
    //                    string reportTitle = "Consultation Receipt";
    //                    conparamList.Add(new ReportParameter("ReportTitle", reportTitle, false));
    //                    conparamList.Add(new ReportParameter("IP_BILL_ID", billstr[i].ToString(), false));
    //                    string ptyp = string.Empty;
    //                    if (_psinfo.PRINT_TYPE == "ORIGINAL")
    //                        ptyp = "Y";
    //                    else
    //                        ptyp = "N";
    //                    if (hdnauth_user.Value == "Y")
    //                    {
    //                        ptyp = "Y";
    //                    }
    //                    //  conparamList.Add(new ReportParameter("Print_Type", ptyp, false));
    //                    conparamList.Add(new ReportParameter("IP_TRANSACTION_ID", tranid.ToString(), false));
    //                    conparamList.Add(new ReportParameter("DateFormat", ViewState["datefmt"].ToString(), false));
    //                    conparamList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
    //                    conparamList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    conparamList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
    //                    conparamList.Add(new ReportParameter("IP_PATIENT_ID", _patid.ToString(), false));
    //                    conparamList.Add(new ReportParameter("IP_DOC_ID", SessionHandler.DOCUMENT_ID.ToString(), false));
    //                    reportPath3 = "/HIMSReprots/" + conpath;

    //                    rptlistobject.Add(conparamList);
    //                    rptPathslistobj.Add(reportPath3);

    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath3 + "&tid332=" + billstr[i].ToString() + ",";
    //                }
    //            }
    //            SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //            SessionHandler.ReportPaths = rptPathslistobj;
    //            /*consultation Ends*/
    //            #endregion
    //        }
    //    }
    //    if (chkPrints.Items[3].Selected == true)
    //    {
    //        if (!string.IsNullOrEmpty(conbillid) && conbillid != "0")
    //        {
    //            string[] billstr = conbillid.Split(',');
    //            string conurl = string.Empty;
    //            #region Prescription Slip
    //            /*Consultation starts*/
    //            IDocFormatMap conimap = new EzHms.Services.DocFormatMapping();
    //            DocFormatCollection condcol = conimap.GetDocFormat(379);
    //            if (condcol != null && condcol.Count > 0)
    //            {
    //                foreach (EzHms.ModelEntity.DocFormatMapping dmp in condcol)
    //                    conReportName = dmp.DOC_NAME_DESC.ToString();
    //                string[] str1 = conReportName.Split(',');
    //                conpath = str1[0];
    //                if (conpath == "")
    //                {
    //                    conpath = "Prescription_Normal";
    //                }
    //            }
    //            else
    //            {
    //                conpath = "Prescription_Normal";
    //            }

    //            for (int i = 0; i < billstr.Length; i++)
    //            {
    //                string consurl = string.Empty;
    //                List<ReportParameter> conparamList = new List<ReportParameter>();
    //                PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //                string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //                int patid = 0;
    //                _psinfo.PrintSettings_info(86, patid, string.Empty);


    //                string conspreurl = string.Empty;
    //                if (hdnBothPrintSetting.Value != "0")
    //                {
    //                    PreReportName = GetPrescriptionReportName(billstr[i].ToString());
    //                    if (PreReportName == string.Empty)
    //                    {
    //                        PreReportName = "Prescription_Normal";
    //                    }
    //                    List<ReportParameter> paramListcpre = new List<ReportParameter>();
    //                    paramListcpre.Add(new ReportParameter("IP_BILL_ID", billstr[i].ToString(), false));
    //                    paramListcpre.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                    paramListcpre.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "0", false));
    //                    paramListcpre.Add(new ReportParameter("IP_FLAG", "", false));
    //                    if (!string.IsNullOrEmpty(PreReportName))
    //                        reportPath4 = "/HIMSReprots/" + PreReportName;
    //                    else
    //                        reportPath4 = "/HIMSReprots/Prescription_Normal";
    //                    rptlistobject.Add(paramListcpre);
    //                    rptPathslistobj.Add(reportPath4);

    //                    allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath4 + "&tid332=" + billstr[i].ToString() + ",";
    //                }

    //            }
    //            SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //            SessionHandler.ReportPaths = rptPathslistobj;
    //            /*consultation Ends*/
    //            #endregion
    //        }
    //    }

    //    if (chkPrints.Items[4].Selected == true)
    //    {
    //        if (!string.IsNullOrEmpty(opbillid) && opbillid != "0")
    //        {
    //            #region OP Bill Print
    //            string patientId = string.Empty;
    //            patientId = _patid.ToString();
    //            string obj = string.Empty;
    //            obj = "Bill Cum Receipt";
    //            PrintSettingsInfo _psinfo = new PrintSettingsInfo();
    //            string Sessionid = SessionHandler.DBSESSION_ID.ToString();
    //            int patid = 0;
    //            _psinfo.PrintSettings_info(376, patid, string.Empty);
    //            if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
    //            {
    //                List<ReportParameter> opparamList = new List<ReportParameter>();
    //                string ptyp = string.Empty;
    //                if (_psinfo.PRINT_TYPE == "ORIGINAL")
    //                    ptyp = "Y";
    //                else
    //                    ptyp = "N";
    //                if (hdnauth_user.Value == "Y")
    //                {
    //                    ptyp = "Y";
    //                }
    //                opparamList.Add(new ReportParameter("IP_TRANSACTION_ID", tranid.ToString(), false));
    //                opparamList.Add(new ReportParameter("IP_BILL_ID", opbillid.ToString(), false));
    //                opparamList.Add(new ReportParameter("IP_PATIENT_ID", patientId, false));
    //                opparamList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
    //                opparamList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
    //                opparamList.Add(new ReportParameter("Title", obj, false));
    //                opparamList.Add(new ReportParameter("showprintdt", false.ToString(), false));
    //                opparamList.Add(new ReportParameter("IP_DOC_ID", SessionHandler.DOCUMENT_ID.ToString(), false));
    //                IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
    //                DocFormatCollection dcol = imap.GetDocFormat(86);
    //                foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
    //                    ReportName = dmp.DOC_NAME_DESC.ToString();
    //                string[] str = ReportName.Split(',');
    //                oppath = str[0];
    //                if (oppath == "")
    //                {
    //                    oppath = "OPReport_A4Half";
    //                }
    //                string Con = string.Empty;
    //                Con = "N";
    //                if (Con == "N")
    //                    opparamList.Add(new ReportParameter("IsLogoVisible", false.ToString(), false));

    //                if (Con == "Y")
    //                    opparamList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
    //                string copies = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.NoOfCopies);
    //                if (oppath == "OPReport_NoOfServicePerPage")
    //                    opparamList.Add(new ReportParameter("ServiceCntPerPage", copies, true));

    //                reportPath2 = "/HIMSReprots/" + oppath;
    //                rptlistobject.Add(opparamList);
    //                rptPathslistobj.Add(reportPath2);
    //                SessionHandler.REPORTPARAMS_LIST = rptlistobject;
    //                SessionHandler.ReportPaths = rptPathslistobj;
    //                allprints += "../Reports/HIMSReportViewer.aspx?count=" + printcount++ + "&rptPath=" + reportPath2 + "&tid332=" + opbillid.ToString() + ",";
    //            #endregion
    //            }
    //        }
    //    }
    //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "OPDbill", "javascript:ConsolatedPrint('" + allprints + "','" + hdnregtypemain.Value + "','" + mlc + "','" + hdnPatientid.Value + "','" + hdnUmrNo.Value + "')", true);
    //    //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "bill", "javascript:printConsultnts('" + allprints + "','" + hdnbraverizes.Value + "','" + opbillid.ToString() + "','" + hdnregtypemain.Value + "','" + mlc + "','" + hdnPatientid.Value + "','" + hdnUmrNo.Value + "')", true);
        return string.Empty;
    }

    protected void ImgBtnCancel_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("~/Private/FrontOffice/OP_Quick_Grid.aspx?OPDNew=Y");
    }
    Private_UserControls_NewAgeUserControl newAgeUc1 = null;
    Private_UserControls_DateofBirth_new2 newAgeUc = null;
    protected void Page_Load(object sender, EventArgs e)
    {

        SessionHandler.DBSESSION_ID = 1;
        SessionHandler.UserID = "1";
        SessionHandler.LOCATION_ID = "1";
        SessionHandler.MODULE_ID = "16";
        SessionHandler.DOCUMENT_ID = 2354;
        EmployerInfo1.EmployeeName = "CMPOPD";
        if (SessionHandler.DBSESSION_ID > 0)
        {
            if (!IsPostBack)
            {
                hdndobformat.Value = "dd-MM-yyyy";
                newAgeUc1 = LoadControl("~/Private/UserControls/DateofBirth_new.ascx") as Private_UserControls_NewAgeUserControl;
                newAgeUc = LoadControl("~/Private/UserControls/DateofBirth_new2.ascx") as Private_UserControls_DateofBirth_new2;

               
                    newAgeUc.ID = "newAgeUc";
                    divnewage2.Controls.Add(newAgeUc);

                    Session["DUE_AUTH_FOR_ALL"] = 2;
                    hdnClientName.Value = "APEX";
                    hdnbarcodepath.Value = "barcode://";
                    hdnApptHosting.Value = "IIS";
                    hdnApptUrl.Value = "https://emr.doctor9.com/napi_cmn/apt/";
                    hdnslotcall.Value = "yes";
                    hdnMegID.Value = "1";
                if (hdnMegID.Value == "" || hdnMegID.Value == "0")
                {
                    hdnMegID.Value = "1";
                }
                //hdnAppsync.Value = WebConfigSettings("APPSYNC");
                hdnAppsync.Value = "true";
                TextBox txtdoctor = ucConsultant.FindControl("txtSearchControl") as TextBox;
                txtdoctor.Attributes.Add("onblur", "return removeconsultant();");
                binddropdowns();
                TabIndexs();
                BindindRowToGrid();
                hdnbarcodeprintrequired.Value = "True";
                hdnIsDoctorSlotsReq.Value = "False";
                dbdateformat = "MM/dd/yyyy HH:mm";
                hdnddlNationality.Value = "1";
                hdnDND.Value = "Yes";
                hdnFmlyConRef.Value = "Yes";
                hdnAdmn_Pat_Op.Value = "True";
                hdnisapptslotreq.Value = "true";
                hdnRegFeeAutoFill.Value = "True";
                hdnRefReq.Value = "Yes";
                hdndateformat.Value = "dd-MMM-yyyy";
                hdnallowdueopd.Value = "True";
                hdnIsHealthCardReq.Value = "True";
                hdnConsPrintSetting.Value = "2";
                hdnospRequired.Value = "False";
                hdnisassestreq.Value = "True";
                hdnEmergencySlot.Value = "True";
                hdnpatcatpolicy.Value = "1";
                hdntitle.Value = "1";
                hdnautowalkin.Value = "True";
                hdnmotherrequired.Value = "True";
                hdnfatherrequired.Value = "True";
                hdndtrmandatary.Value = "No";
                hdnisalowzeroprice.Value = "No";
                hdnconsultation_count_in_day.Value = "True";
                string dateformate = "dd-MMM-yyyy";
                hdnalwsameconsameday.Value = "Yes";

                if (dateformate != null)
                    ViewState["datefmt"] = dateformate;
                else
                    ViewState["datefmt"] = "MM/dd/yyyy";

                Session["context_key"] = "APMNT_ID";
                hdnareaquick.Value = string.Empty;
                hbnqureystringregid.Value = Request.QueryString["Doc_regID"];
                hdnNoOfCopies.Value = CompanySettingDSValue(PARAMETER_NAMES.NoOfCopies);

                DataSet _dsgetrefper = SessionHandler.DocPermission;// Docpermission.DocpermissionbyDocFormCd("HMREFL");
                //DataRow[] srow = _dsgetrefper.Tables[0].Select("DOC_FORM_CD='HMREFL'");
                //if (srow.Length > 0 && srow[0]["ACCESS_ADD"].ToString() == "Y")
                //    hdnrefquick.Value = "Y";
                //else
                    hdnrefquick.Value = "Y";
                //DataRow[] corpregrow = _dsgetrefper.Tables[0].Select("DOC_FORM_CD='FO_CORREGREFENT'");
                //if (corpregrow.Length > 0 && corpregrow[0]["ACCESS_ADD"].ToString() == "Y")
                //    hdncmpquick.Value = "Y";
                //else
                    hdncmpquick.Value = "Y";
                //DataRow[] docemprow = _dsgetrefper.Tables[0].Select("DOC_FORM_CD='HISMDOCTEMP'");
                //if (docemprow.Length > 0 && docemprow[0]["ACCESS_ADD"].ToString() == "Y")
                //{ hdnempquick.Value = "Y"; hdndocquick.Value = "Y"; }
                //else
                //{ hdnempquick.Value = "N"; hdndocquick.Value = "N"; }
                //DataRow[] arearow = _dsgetrefper.Tables[0].Select("DOC_FORM_CD='HMAREA'");
                //if (arearow.Length > 0 && arearow[0]["ACCESS_ADD"].ToString() == "Y")
                   hdnareaquick.Value = "Y";
                //else
                //    hdnareaquick.Value = "N";
                //DataRow[] opbillrow = _dsgetrefper.Tables[0].Select("DOC_FORM_CD='HTOPBILL'");
                //if (opbillrow.Length > 0 && opbillrow[0]["ACCESS_ADD"].ToString() == "Y")
                //    hdnOpPermission.Value = "Y";
                //else
                   hdnOpPermission.Value = "Y";
                //DataRow[] consrow = _dsgetrefper.Tables[0].Select("DOC_FORM_CD='FO_OPCONSULT'");
                //if (consrow.Length > 0 && consrow[0]["ACCESS_ADD"].ToString() == "Y")
                //    hdnConsPermission.Value = "Y";
                //else
                    hdnConsPermission.Value = "Y";


                //DataRow[] docrow = _dsgetrefper.Tables[0].Select("DOC_ID=" + SessionHandler.DOCUMENT_ID + " AND MODULE_ID =" + SessionHandler.SUB_MODULE_ID);
                //if (docrow.Length > 0)
                //{
                //    HiddenField hdnswp = ReceiptControl2.FindControl("hdnswipe") as HiddenField;
                //    hdnswp.Value = docrow[0]["IS_PAYMENT_GATEWAY_ALLOWED"].ToString();
                //    hdnAddDisableAttr.Value = docrow[0]["ACCESS_ADD_DISABLE_ATTRIBUTES_NAME"].ToString();
                //    hdnauth_user.Value = docrow[0]["ACCESS_PRINT_AUTHORIZED"].ToString();
                //}
                headerControl1.PageType = EzHms.ModelEntity.PageClassification.AddNew;
                CheckBox chkDND = Address1.FindControl("chkDND") as CheckBox;

                if (hdnDND.Value == "Yes")
                {
                    chkDND.Checked = true;
                }
                else { chkDND.Checked = false; }



                InitlizeLookups();
                string cdGen = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.AUTOCODE);
                if (!string.IsNullOrEmpty(cdGen))
                    ViewState["cdGen"] = cdGen;
                else
                    ViewState["cdGen"] = string.Empty;
                autoCDSer = new EzHms.Services.AutoGenerateCD();
                txtumrno.Text = autoCDSer.GetAutoGenerateCD(DALConstants.PATIENT_TABLE);
                hdnumrgeneration.Value = autoCDSer.GetAutoGenerateCD(DALConstants.PATIENT_TABLE);
                HiddenField hdnTranUmrNo = ReceiptControl2.FindControl("hdnTranUMRNO") as HiddenField;
                hdnTranUmrNo.Value = txtumrno.Text;
                autoCDSer = new EzHms.Services.AutoGenerateCD();
                txtRegistration.Text = autoCDSer.GetAutoGenerateCD(DALConstants.REGISTRATION_TABLE);
                txtregfee.Text = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.REG_FEE);
                hdnregfee.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.REG_FEE);
                string mb = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.MOBILEINOP);
                hdnOSPMbl.Value = mb;
                hdnOSPNo.Value = autoCDSer.GetAutoGenerateCD(DALConstants.OS_PATIENT_COL);
                if (ViewState["cdGen"] != null && ViewState["cdGen"].ToString() == GetEnumerationString.GetEnumDescription(PARAMETER_VALUE.AUTOGENERATE))
                {
                   
                  
                }
                else
                {
                    txtumrno.Enabled = true;
                }
                //IReceipt intRecp = new EzHms.Services.ReceiptWebService();
                //TxtOspNO.Text = intRecp.GetAutoReceiptNumber(EzHms.ModelEntity.AutoCodes.FO_BILL_OSPB.ToString(), SessionHandler.DBSESSION_ID);

                TxtOspBillDt.Text = DateTime.Now.ToString("dd-MMM-yyyy"); ;

                txtRegDateTime.Text = ViewState["datefmt"] != null ? ClientTime.ToString(ViewState["datefmt"].ToString()) : string.Empty;
                hdnAssesmnt.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.IS_ASSESMENT_REQUIRED);
                //string regvalidity = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.REGVALIDATION);
                //string reg_validity = regvalidity;
                //string regvaliddt = reg_validity.Insert(0, " ");
                //if (regvaliddt.ToUpper().Trim() == "1 YEAR")
                //    txtregValidity.Text = ClientTime.AddYears(1).ToString(ViewState["datefmt"].ToString());
                //else if (regvaliddt.ToUpper().Trim() == "3 MONTHS")
                //    txtregValidity.Text = ClientTime.AddMonths(3).ToString(ViewState["datefmt"].ToString());
                //else if (regvaliddt.ToUpper().Trim() == "6 MONTHS")
                //    txtregValidity.Text = ClientTime.AddMonths(6).ToString(ViewState["datefmt"].ToString());
                //else if (regvaliddt.ToUpper().Trim() == "9 MONTHS")
                //    txtregValidity.Text = ClientTime.AddMonths(9).ToString(ViewState["datefmt"].ToString());
                //else if (!string.IsNullOrEmpty(reg_validity))
                //{
                //    if (reg_validity == "0")
                //        regvaliddt = "1";
                //    txtregValidity.Text = ClientTime.AddDays(Convert.ToInt32(regvaliddt)).ToString(ViewState["datefmt"].ToString());
                //}
                //else
                //{
                //    //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "javascript:alert('Plz Contact Administrator for Reg Validity Date!!!');", true);
                //    txtregValidity.Text = ClientTime.AddDays(Convert.ToInt32("1")).ToString(ViewState["datefmt"].ToString());
                //}
                HiddenField hdntokentype = this.Master.FindControl("hdnTokenType") as HiddenField;
                hdntokentype.Value = "3";

                hdnDisplayNameSetting.Value = "First Name And Last Name";
                hdnKineNameMandatary.Value = "Y";
                hdnFirstMiddleLastName.Value = "1,2";
                hdnFirstLastName.Value = "1,2";
                hdnonlymobilenumbermandate.Value = "Yes";
                hdndefaultconsultation.Value = "N";
                hdnNoConsLimts.Value = "True";
                hdnDueRemainder.Value = "True";
                hdnBothPrintSetting.Value = "2";
                hdnRefReq.Value = "";
                hdnIsRegDtlsReq.Value = "Yes";
                hdnRegRefDays.Value = "0";
                hdnPkgConsSetting.Value = "Doctor Wise Variation";
                hdnConsCharge.Value = "2";
                hdnRegDoctorRequired.Value = "False";
                hdnRegShowDocDays.Value = "1";
                hdnRefReq.Value = "Yes";

                hdnCasulityDocID.Value = "";
                HiddenField hdnSrvFormName = UCServices.FindControl("hdnSrvFormName") as HiddenField;
                hdnSrvFormName.Value = "OPQUICK";
                if (Request.QueryString["MODE"] == "VIEW" && Request.QueryString["GRPBILLNO"] != string.Empty)
                {

                    HiddenField hdnView_R = (HiddenField)ucReferal.FindControl("hdnView_R");
                    hdnView_R.Value = "OPDbill";

                    headerControl1.PageType = PageClassification.View;
                    chkDND.Enabled = false;
                    chkMLC.Enabled = false;
                    //  CheckBox ChkMlcStatus = Address1.FindControl("ChkMlcStatus") as CheckBox;
                    ChkMlcStatus.Enabled = false;
                    // CheckBox chkIsSenior = Address1.FindControl("chkIsSenior") as CheckBox;
                    chkIsSenior.Enabled = false;
                    RadioButtonList rbtnSrvsAndCons = UCServices.FindControl("rbtnSrvsAndCons") as RadioButtonList;
                    rbtnSrvsAndCons.Enabled = false;
                    DropDownList divrptDispatch = UCServices.FindControl("divrptDispatch") as DropDownList;
                    divrptDispatch.Enabled = false;

                    //ViewState["PatientID"] = Request.QueryString["PatientID"];
                    hdnQstrID.Value = !string.IsNullOrEmpty(Request.QueryString["PatientID"]) ? Request.QueryString["PatientID"].ToString() : string.Empty;
                    int _patID = Convert.ToInt32((Request.QueryString["PatientID"].ToString())[0]);
                    string grpbillno = !string.IsNullOrEmpty(Request.QueryString["GRPBILLNO"]) ? Request.QueryString["GRPBILLNO"].ToString() : string.Empty;
                    string TranId = !string.IsNullOrEmpty(Request.QueryString["TansId"]) ? Request.QueryString["TansId"].ToString() : string.Empty;
                    PatientViewDetails(grpbillno, TranId);
                    HDNSESSIONID.Value = SessionHandler.DBSESSION_ID.ToString();

                }
                TextBox txtconsultant = ucConsultant.FindControl("txtSearchControl") as TextBox;
                txtconsultant.Attributes.Add("onkeyup", "return OnNullValue(this);");
                TextBox txtreferal = ucReferal.FindControl("ucreferalname").FindControl("txtSearchControl") as TextBox;
                txtreferal.Attributes.Add("onkeyup", "return OnNullValue(this);");
                TextBox txtreferalpopup = ucReferal.FindControl("Lookuparea").FindControl("txtSearchControl") as TextBox;
                txtreferalpopup.Attributes.Add("onkeyup", "return OnNullValue(this);");
                pre_regi.SelectedValue = "0";
                TextBox txtfamilyreff = UcFamilyReff.FindControl("txtSearchControl") as TextBox;
                txtfamilyreff.Attributes.Add("onkeyup", "ClearFamilyReffRelatedcontrols(this);");
                if (Request.QueryString["reg_type"] != null && Request.QueryString["reg_type"] != "")
                {
                    string reg_type = Request.QueryString["reg_type"].ToString();
                    if (reg_type == "" || reg_type == null) { reg_type = "0"; }
                    else
                    {
                        ddlRegType.SelectedValue = reg_type;
                        hdnregtypemain.Value = reg_type;
                    }
                }
            }
        }
        else
        {
            Response.Redirect("~/Default.aspx");
        }
    }
    DataTable dtableINDService = new DataTable();
    DataRow objINDDr;
    private void BindindRowToGrid()
    {
        dtableINDService.Columns.AddRange(new DataColumn[] 
            {
                     new DataColumn("ORDER_ID"),
                     new DataColumn("ORDER_DT"),
                     new DataColumn("PATIENT_NAME"),
                     new DataColumn("ORDER_TYPE"),
                     new DataColumn("DOCTOR_NAME"),
                     new DataColumn("VISIT_DT"),
                     new DataColumn("CREATE_BY_NAME"),
            });
        dtableINDService.Rows.Add(dtableINDService.NewRow());
        gv_Ind_Services.DataSource = dtableINDService;
        gv_Ind_Services.DataBind();
    }
    protected void PatientViewDetails(string GrpBillNo, string TranId)
    {
        string _str_Bill_Type = !string.IsNullOrEmpty(Request.QueryString["Bill_Type"]) ? Request.QueryString["Bill_Type"].ToString() : string.Empty;
        string straddress = string.Empty, strref = string.Empty, strdicttrans = string.Empty, strAmmnt = string.Empty, strMultiDisc = string.Empty, str = string.Empty;
        string strEmp = string.Empty; string strPat = string.Empty;
        //ChkNBorn.Enabled = false;
        chkisold.Enabled = false;
        chk_old.Enabled = false;
        rbt_pat_type.Enabled = false;
        ddlRegType.Enabled = false;
        pre_regi.Enabled = false;
        //Umrlookup.Enabled = false;
        UcFamilyReff.Enabled = false;
        txtRegDateTime.Enabled = false;
        txtregValidity.Enabled = false;
        DBServices1 objdb = new DBServices1();
        //PatientCollection objcoll = new PatientCollection();
        int _tranId = !string.IsNullOrEmpty(TranId) ? Convert.ToInt32(TranId) : 0;
        DataSet ds = objdb.Get_Consolidate_Patient_Details_View(GrpBillNo, _tranId);
        GridView gvServices = UCServices.FindControl("gvServices") as GridView;
        GridView gvReceiptDetails = ReceiptControl2.FindControl("gvReceiptDetails") as GridView;

        if (_str_Bill_Type == "15")
        {
            pre_regi.SelectedValue = "5";
        }
        #region dataSet 0
        if (ds.Tables[0].Rows.Count != 0)
        {
            var bill_typeid = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["UMR_NO"].ToString()) ? ds.Tables[0].Rows[0]["UMR_NO"].ToString() : string.Empty;
            if (!string.IsNullOrEmpty(bill_typeid))
                txtregfee.Text = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["BILL_AMOUNT"].ToString()) ? (ds.Tables[0].Rows[0]["BILL_AMOUNT"]).ToString() : "0";

            txtumrno.Text = (ds.Tables[0].Rows[0]["UMR_NO"]).ToString();
            ddlTitle.SelectedValue = (ds.Tables[0].Rows[0]["TITILE_ID"]).ToString();
            txtFirstName.Text = (ds.Tables[0].Rows[0]["FIRST_NAME"]).ToString();
            txtLastName.Text = (ds.Tables[0].Rows[0]["LAST_NAME"]).ToString();
            txtMiddleName.Text = (ds.Tables[0].Rows[0]["MIDDLE_NAME"]).ToString();
            TextBox txtdob = newAgeUc.FindControl("txtDob") as TextBox;
            txtdob.Text = Convert.ToDateTime((ds.Tables[0].Rows[0]["DOB"])).ToString("dd-MM-yyyy");
            TextBox txtYear = newAgeUc.FindControl("txtYear") as TextBox;
            txtYear.Text = Convert.ToString((ds.Tables[0].Rows[0]["AGE"])).Split(',')[0];
            TextBox txtMonths = newAgeUc.FindControl("txtMonths") as TextBox;
            txtMonths.Text = Convert.ToString((ds.Tables[0].Rows[0]["AGE"])).Split(',')[1];
            TextBox txtDay = newAgeUc.FindControl("txtDay") as TextBox;
            txtDay.Text = Convert.ToString((ds.Tables[0].Rows[0]["AGE"])).Split(',')[2];
            ddlGender.SelectedValue = (ds.Tables[0].Rows[0]["GENDER_ID"]).ToString();
            txtDisplayname.Text = (ds.Tables[0].Rows[0]["DISPLAY_NAME"]).ToString();
            txtMotherMName.Text = (ds.Tables[0].Rows[0]["MOTHER_NAME"]).ToString();
            txtfathername.Text = (ds.Tables[0].Rows[0]["FATHER_NAME"]).ToString();
            ddlResPerson.SelectedValue = !string.IsNullOrEmpty((ds.Tables[0].Rows[0]["RES_PERSON_ID"]).ToString()) ? (ds.Tables[0].Rows[0]["RES_PERSON_ID"]).ToString() : "0";
            txtResPerson.Text = (ds.Tables[0].Rows[0]["RES_PERSON_NAME"]).ToString();
            ddlMaritalStatus.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["MARITAL_STATUS_ID"].ToString()) ? (ds.Tables[0].Rows[0]["MARITAL_STATUS_ID"]).ToString() : "0";
            ddlBloodGroup.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["BLOOD_GROUP_ID"].ToString()) ? (ds.Tables[0].Rows[0]["BLOOD_GROUP_ID"]).ToString() : "0";
            ddlOccupation.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["OCCUPATION_ID"].ToString()) ? (ds.Tables[0].Rows[0]["OCCUPATION_ID"]).ToString() : "0";
            ddlReligion.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["RELIGION_ID"].ToString()) ? (ds.Tables[0].Rows[0]["RELIGION_ID"]).ToString() : "0";
            ddlNationality.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["NATIONALITY_ID"].ToString()) ? (ds.Tables[0].Rows[0]["NATIONALITY_ID"]).ToString() : "0";

            txtPassprotno.Text = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["PASSPORT_NO"].ToString()) ? ds.Tables[0].Rows[0]["PASSPORT_NO"].ToString() : string.Empty;

            txtIssueDt.Text = Convert.ToDateTime((ds.Tables[0].Rows[0]["DOB"])).ToString("dd-MM-yyyy");
            txtExpiryDt.Text = Convert.ToDateTime((ds.Tables[0].Rows[0]["DOB"])).ToString("dd-MM-yyyy");

            ddlNationality.Enabled = false;
            ddlEthnicity.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["ETHNICITY_ID"].ToString()) ? (ds.Tables[0].Rows[0]["ETHNICITY_ID"]).ToString() : "0";
            ddlquestionary.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["QUESTIONARY_ID"].ToString()) ? (ds.Tables[0].Rows[0]["QUESTIONARY_ID"]).ToString() : "0";
            txtMobile1.Text = (ds.Tables[0].Rows[0]["MOBILE_NO1"]).ToString();
            txtMobile2.Text = (ds.Tables[0].Rows[0]["MOBILE_NO2"]).ToString();
            ddlRegType.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["REG_TYPE_ID"].ToString()) ? (ds.Tables[0].Rows[0]["REG_TYPE_ID"]).ToString() : "0";
            hdnOSPNo.Value = (ds.Tables[0].Rows[0]["IS_OSP"]).ToString();
            if (ddlRegType.SelectedValue == "7")
            {
                hdnViewPatTypId.Value = "7";
                hdnViewStfName.Value = (ds.Tables[0].Rows[0]["EMP_NAME"]).ToString();
                hdnViewRltn.Value = (ds.Tables[0].Rows[0]["EMP_RELATIONSHIP_ID"]).ToString();
            }
            string _PatType = (ds.Tables[0].Rows[0]["PAT_TYPE"]).ToString();
            if (_PatType == "N")
            {
                ddlPatientType.SelectedValue = "1";
            }
            //string new_born = (ds.Tables[0].Rows[0]["IS_NEW_BORN"]).ToString();
            //if (new_born.Trim() == "Y")
            //{
            //    ChkNBorn.Checked = true;
            //    hdnviewnewborn.Value = "Y";
            //    TextBox txtHH = newAgeUc.FindControl("txtHH") as TextBox;
            //    txtHH.Text = Convert.ToString((ds.Tables[0].Rows[0]["AGE"])).Split(',')[3];
            //    TextBox txtMM = newAgeUc.FindControl("txtMM") as TextBox;
            //    txtMM.Text = Convert.ToString((ds.Tables[0].Rows[0]["AGE"])).Split(',')[4];

            //}
            txtRegistration.Text = (ds.Tables[0].Rows[0]["REG_NO"]).ToString();
            var EXPIRY_DT = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["EXPIRY_DT"].ToString()) ? ds.Tables[0].Rows[0]["EXPIRY_DT"].ToString() : string.Empty;
            if (!string.IsNullOrEmpty(EXPIRY_DT))
                txtregValidity.Text = Convert.ToDateTime((ds.Tables[0].Rows[0]["EXPIRY_DT"])).ToString("dd-MMM-yyyy");
            TextBox txtcon = ucConsultant.FindControl("txtSearchControl") as TextBox;
            TextBox FamilyReff = UcFamilyReff.FindControl("txtSearchControl") as TextBox;
            FamilyReff.Text = (ds.Tables[0].Rows[0]["PARENT_UMR_NO"]).ToString();
            txtcon.Text = (ds.Tables[0].Rows[0]["DOCTOR_NAME"]).ToString();
            ddlproofid.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["ID_PROOF_TYPE_ID"].ToString()) ? (ds.Tables[0].Rows[0]["ID_PROOF_TYPE_ID"]).ToString() : "0";
            txtSSN.Text = (ds.Tables[0].Rows[0]["ID_PROOF_TYPE_NAME"]).ToString();
            if (txtSSN.Text == "Passport")
            {
                txtPassprotno.Text = ds.Tables[0].Rows[0]["PASSPORT_NO"].ToString();
                txtIssueDt.Text = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["PASSPORT_ISSUE_DT"].ToString()) ? Convert.ToDateTime((ds.Tables[0].Rows[0]["PASSPORT_ISSUE_DT"])).ToString("dd-MMM-yyyy") : string.Empty;
                txtExpiryDt.Text = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["PASSPORT_EXPIRY_DT"].ToString()) ? Convert.ToDateTime((ds.Tables[0].Rows[0]["PASSPORT_EXPIRY_DT"])).ToString("dd-MMM-yyyy") : string.Empty;
                txtissuedat.Text = (ds.Tables[0].Rows[0]["ISSUED_AT_NAME"]).ToString();
            }
            if ((ds.Tables[0].Rows[0]["IS_VIP"]).ToString().Trim() == "VV")
            {
                rbt_pat_type.SelectedValue = "2";
                dd_reg_source.SelectedIndex = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["VIP_TYPE_ID"].ToString()) ? Convert.ToInt32((ds.Tables[0].Rows[0]["VIP_TYPE_ID"]).ToString()) : 0;
                hdnddlVIP.Value = (ds.Tables[0].Rows[0]["VIP_TYPE_ID"]).ToString();
                source_remarks.Text = (ds.Tables[0].Rows[0]["VIP_NOTE"]).ToString();
                hdnVIPNotes.Value = (ds.Tables[0].Rows[0]["VIP_NOTE"]).ToString();
                ScriptManager.RegisterStartupScript(this, this.GetType(), "PatientTypeChange", "javascript:PatientTypeChange();", true);
                ScriptManager.RegisterStartupScript(this, this.GetType(), "PatientTpeChange", "javascript:VIPValues();", true);
            }
            else if ((ds.Tables[0].Rows[0]["IS_VIP"]).ToString().Trim() == "V")
            {
                rbt_pat_type.SelectedValue = "1";
                ScriptManager.RegisterStartupScript(this, this.GetType(), "PatientTypeChange", "javascript:PatientTypeChange();", true);
                dd_reg_source.SelectedValue = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["VIP_TYPE_ID"].ToString()) ? (ds.Tables[0].Rows[0]["VIP_TYPE_ID"]).ToString() : "0";
                source_remarks.Text = (ds.Tables[0].Rows[0]["VIP_NOTE"]).ToString();
                ScriptManager.RegisterStartupScript(this, this.GetType(), "TypeChange", "javascript:VIPviewmode();", true);
            }

            string seniorcitizen = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["IS_SENIOR_CITIZEN"].ToString()) ? (ds.Tables[0].Rows[0]["IS_SENIOR_CITIZEN"]).ToString() : "0";
            //CheckBox chkIsSenior = Address1.FindControl("chkIsSenior") as CheckBox;

            if (seniorcitizen == "Y")
            {
                chkIsSenior.Checked = true;
            }
            else { chkIsSenior.Checked = false; }

            string is_assesment_required = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["IS_ASSESMENT_REQUIRED"].ToString()) ? (ds.Tables[0].Rows[0]["IS_ASSESMENT_REQUIRED"]).ToString() : "0";

            if (is_assesment_required == "Y")
            {
                ChkAssesment.Checked = true;
            }
            else { ChkAssesment.Checked = false; }
            string is_mlc = !string.IsNullOrEmpty(ds.Tables[0].Rows[0]["IS_MLC"].ToString()) ? (ds.Tables[0].Rows[0]["IS_MLC"]).ToString() : "";
            //   CheckBox chkIsMlc = Address1.FindControl("ChkMlcStatus") as CheckBox;
            if (is_mlc == "Y")
            {
                ChkMlcStatus.Checked = true;
            }
            else { ChkMlcStatus.Checked = false; }

            DataTable dt0 = ds.Tables[0];
            var list0 = new List<Dictionary<string, object>>();
            foreach (DataRow row0 in dt0.Rows)
            {
                var dict0 = new Dictionary<string, object>();
                foreach (DataColumn col0 in dt0.Columns)
                {
                    dict0[col0.ColumnName] = row0[col0];
                }
                list0.Add(dict0);
            }
            JavaScriptSerializer serializer0 = new JavaScriptSerializer();
            strPat = serializer0.Serialize(list0);
        }
        if (ds.Tables[0].Rows[0]["PRE_REG_ID"].ToString() != "0")
        {
            hdnpreregid.Value = ds.Tables[0].Rows[0]["PRE_REG_ID"].ToString();
            ScriptManager.RegisterStartupScript(this, this.GetType(), "VISITTYPE", "javascript:VisitTypeviewmode('" + strPat + "');", true);
        }
        #endregion
        #region Dataset 2  Service Details
        /*Convertion of Services dataset  */
        DataTable dt = ds.Tables[2];
        var list = new List<Dictionary<string, object>>();
        foreach (DataRow row in dt.Rows)
        {
            var dict = new Dictionary<string, object>();
            foreach (DataColumn col in dt.Columns)
            {
                if (col.ColumnName.ToString() == "BILL_DT")
                {
                    dict[col.ColumnName] = Convert.ToDateTime(row[col]).ToString("dd-MMM-yyyy");
                }
                else
                {
                    dict[col.ColumnName] = row[col];
                }
            }
            list.Add(dict);
        }
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        str = serializer.Serialize(list);
        #endregion
        #region DataSet 1 Address Details
        /*Address dataset convertion*/
        DataTable dtaddress = ds.Tables[1];
        var listadd = new List<Dictionary<string, object>>();
        foreach (DataRow row1 in dtaddress.Rows)
        {
            var dictadd = new Dictionary<string, object>();
            foreach (DataColumn col1 in dtaddress.Columns)
            {
                dictadd[col1.ColumnName] = row1[col1];
            }
            listadd.Add(dictadd);
        }
        JavaScriptSerializer serializeradd = new JavaScriptSerializer();
        straddress = serializeradd.Serialize(listadd);
        #endregion
        #region DataSet 3 Referal Details
        /*Referal dataset convertion*/
        DataTable dtreferal = ds.Tables[3];
        var listref = new List<Dictionary<string, object>>();
        foreach (DataRow row2 in dtreferal.Rows)
        {
            var dictref = new Dictionary<string, object>();
            foreach (DataColumn col2 in dtreferal.Columns)
            {
                dictref[col2.ColumnName] = row2[col2];
            }
            listref.Add(dictref);
        }
        JavaScriptSerializer serializerRef = new JavaScriptSerializer();
        strref = serializerRef.Serialize(listref);
        #endregion
        #region DataSet 4 Transaction Mode Details
        /*Transactoion dataset convertion*/
        DataTable dttrans = ds.Tables[4];
        var listtrn = new List<Dictionary<string, object>>();
        foreach (DataRow row2 in dttrans.Rows)
        {
            var dicttrans = new Dictionary<string, object>();
            foreach (DataColumn col2 in dttrans.Columns)
            {
                dicttrans[col2.ColumnName] = row2[col2];
            }
            listtrn.Add(dicttrans);
        }
        JavaScriptSerializer serializerTrans = new JavaScriptSerializer();
        strdicttrans = serializerTrans.Serialize(listtrn);
        #endregion
        #region DataSet 5 BillDetails
        if (ds.Tables[5].Rows.Count != 0)
        {
            DataTable dtAmnt = ds.Tables[5];
            var listAmnt = new List<Dictionary<string, object>>();
            foreach (DataRow row1 in dtAmnt.Rows)
            {
                var dictAmnt = new Dictionary<string, object>();
                foreach (DataColumn col1 in dtAmnt.Columns)
                {
                    dictAmnt[col1.ColumnName] = row1[col1];
                }
                listAmnt.Add(dictAmnt);
            }
            JavaScriptSerializer serializeramnt = new JavaScriptSerializer();
            strAmmnt = serializeramnt.Serialize(listAmnt);
        }
        #endregion
        #region DataSet 6 MultiDiscount Grid Details
        if (ds.Tables[6].Rows.Count != 0)
        {
            DataTable dtMultiDscnt = ds.Tables[6];
            var listMultiDscnt = new List<Dictionary<string, object>>();
            foreach (DataRow rowMulti in dtMultiDscnt.Rows)
            {
                var dictMulti = new Dictionary<string, object>();
                foreach (DataColumn colMulti in dtMultiDscnt.Columns)
                {
                    dictMulti[colMulti.ColumnName] = rowMulti[colMulti];
                }
                listMultiDscnt.Add(dictMulti);
            }
            JavaScriptSerializer serializerMultiDisc = new JavaScriptSerializer();
            strMultiDisc = serializerMultiDisc.Serialize(listMultiDscnt);
        }
        #endregion


        #region DataSet 7 MultiDiscount Grid Details
        if (ds.Tables[7].Rows.Count != 0)
        {
            DataTable dtEmp = ds.Tables[7];
            var listEmp = new List<Dictionary<string, object>>();
            foreach (DataRow rowEmp in dtEmp.Rows)
            {
                var dictEmp = new Dictionary<string, object>();
                foreach (DataColumn colEmp in dtEmp.Columns)
                {
                    dictEmp[colEmp.ColumnName] = rowEmp[colEmp];
                }
                listEmp.Add(dictEmp);
            }
            JavaScriptSerializer serializerEmp = new JavaScriptSerializer();
            strEmp = serializerEmp.Serialize(listEmp);
        }
        #endregion



        ScriptManager.RegisterStartupScript(this, this.GetType(), "addview7", "javascript:ViewDetails( ' " + straddress + " ','" + _str_Bill_Type + "',' " + str + " ' , ' " + strref + " ',' " + strdicttrans + " ', ' " + strAmmnt + " ','" + strMultiDisc + "','" + strEmp + "','" + strPat + "');", true);
    }

    protected void TabIndexs()
    {

        ddlTitle.TabIndex = 1;
        txtFirstName.TabIndex = 2;
        txtMiddleName.TabIndex = 3;
        txtLastName.TabIndex = 4;
        if (hdndobformat.Value == "dd-MMM-yyyy")
        {
            TextBox txtdob = newAgeUc1.FindControl("txtDob") as TextBox;
            txtdob.TabIndex = 5;
            TextBox txtYear = newAgeUc1.FindControl("txtYear") as TextBox;
            txtYear.TabIndex = 6;
            TextBox txtMonths = newAgeUc1.FindControl("txtMonths") as TextBox;
            txtMonths.TabIndex = 7;
            TextBox txtDay = newAgeUc1.FindControl("txtDay") as TextBox;
            txtDay.TabIndex = 8;
        }
        else
        {

            TextBox txtdob = newAgeUc.FindControl("txtDob") as TextBox;
            txtdob.TabIndex = 5;
            TextBox txtYear = newAgeUc.FindControl("txtYear") as TextBox;
            txtYear.TabIndex = 6;
            TextBox txtMonths = newAgeUc.FindControl("txtMonths") as TextBox;
            txtMonths.TabIndex = 7;
            TextBox txtDay = newAgeUc.FindControl("txtDay") as TextBox;
            txtDay.TabIndex = 8;
        }



        ddlGender.TabIndex = 9;
        ddlResPerson.TabIndex = 10;
        txtResPerson.TabIndex = 11;
        txtfathername.TabIndex = 12;
        txtMotherMName.TabIndex = 13;

        ddlMaritalStatus.TabIndex = 14;
        ddlNationality.TabIndex = 15;
        ddlOccupation.TabIndex = 16;
        ddlReligion.TabIndex = 17;
        ddlEthnicity.TabIndex = 18;
        ddlproofid.TabIndex = 19;
        txtSSN.TabIndex = 20;
        TextBox txtcon = ucConsultant.FindControl("txtSearchControl") as TextBox;
        txtcon.TabIndex = 21;
        ddlquestionary.TabIndex = 22;
        ddlPatientType.TabIndex = 23;
        pre_regi.TabIndex = 24;
        TextBox txtcon1 = UcAppointmentNo.FindControl("txtSearchControl") as TextBox;
        txtcon1.TabIndex = 25;



        TextBox txtMobile1 = Address1.FindControl("txtMobile1") as TextBox;
        TextBox txtMobile2 = Address1.FindControl("txtMobile2") as TextBox;
        TextBox txtemail = Address1.FindControl("txtemail") as TextBox;
        TextBox txtAddress1 = Address1.FindControl("txtAddress1") as TextBox;
        TextBox txtPin = Address1.FindControl("txtPin") as TextBox;
        TextBox txtArea = (TextBox)Address1.FindControl("AreaUserControl1").FindControl("txtSearchControl");
        txtAddress1.TabIndex = 26;
        txtPin.TabIndex = 27;
        txtArea.TabIndex = 28;
        txtMobile1.TabIndex = 29;
        txtMobile2.TabIndex = 30;
        txtemail.TabIndex = 31;


        //txtPassprotno.TabIndex = 21;
        //txtIssueDt.TabIndex = 22;
        //txtExpiryDt.TabIndex = 23;
        //txtissuedat.TabIndex = 24;
        #region Referral Source TabIndexs

        DropDownList ddlreferral = ucReferal.FindControl("ddlreferral") as DropDownList;
        ddlreferral.TabIndex = 32;
        TextBox txtSearchControl = ucReferal.FindControl("ucreferalname").FindControl("txtSearchControl") as TextBox;
        txtSearchControl.TabIndex = 33;
        TextBox txtreferalsrc = ucReferal.FindControl("ucrfrlsrc").FindControl("txtSearchControl") as TextBox;
        txtreferalsrc.TabIndex = 34;
        TextBox txtreferalto = ucReferal.FindControl("ucReferedto").FindControl("txtSearchControl") as TextBox;
        txtreferalto.TabIndex = 35;
        //TextBox txtrefaddr = ucReferal.FindControl("txtrefaddr") as TextBox;s

        //txtrefaddr.TabIndex = 28;
        //TextBox txtRefPhone = ucReferal.FindControl("txtRefPhone") as TextBox;
        //txtRefPhone.TabIndex = 29;

        #endregion


        #region CompanyInfo TabIndex
        TextBox uctpa = (TextBox)EmployerInfo1.FindControl("uctpa").FindControl("txtSearchControl");
        uctpa.TabIndex = 36;
        TextBox EmployerControl1 = (TextBox)EmployerInfo1.FindControl("EmployerControl1").FindControl("txtSearchControl");
        EmployerControl1.TabIndex = 37;
        DropDownList ddlrelation = (DropDownList)EmployerInfo1.FindControl("ddlrelation");
        ddlrelation.TabIndex = 38;
        TextBox txtEmploeeID = (TextBox)EmployerInfo1.FindControl("txtEmploeeID");
        txtEmploeeID.TabIndex = 39;
        TextBox txtEmployeeName = (TextBox)EmployerInfo1.FindControl("txtEmployeeName");
        txtEmployeeName.TabIndex = 40;
        TextBox txtDesignation = (TextBox)EmployerInfo1.FindControl("txtDesignation");
        txtDesignation.TabIndex = 41;
        TextBox txtDept = (TextBox)EmployerInfo1.FindControl("txtDept");
        txtDept.TabIndex = 42;
        DropDownList txtempgrade = (DropDownList)EmployerInfo1.FindControl("txtempgrade");
        txtempgrade.TabIndex = 43;
        DropDownList txtBranch = (DropDownList)EmployerInfo1.FindControl("txtBranch");
        txtBranch.TabIndex = 44;

        TextBox txtEmpContactNo = (TextBox)EmployerInfo1.FindControl("txtEmpContactNo");
        txtEmpContactNo.TabIndex = 45;
        TextBox txtEmpMRNo = (TextBox)EmployerInfo1.FindControl("txtEmpMRNo");
        txtEmpMRNo.TabIndex = 46;
        TextBox txtEmpCardValidity = (TextBox)EmployerInfo1.FindControl("txtdateofissue");
        txtEmpCardValidity.TabIndex = 47;
        TextBox txtdateofissue = (TextBox)EmployerInfo1.FindControl("txtEmpCardValidity");
        txtdateofissue.TabIndex = 48;

        TextBox txtemployername = (TextBox)EmployerInfo1.FindControl("txtemployername");
        txtemployername.TabIndex = 49;
        TextBox txtrefletter = (TextBox)EmployerInfo1.FindControl("txtrefletter");
        txtrefletter.TabIndex = 50;
        TextBox txtrefissuedt = (TextBox)EmployerInfo1.FindControl("txtrefissuedt");
        txtrefissuedt.TabIndex = 51;
        TextBox txtlettervalidity = (TextBox)EmployerInfo1.FindControl("txtlettervalidity");
        txtlettervalidity.TabIndex = 52;
        TextBox txtletterissuedby = (TextBox)EmployerInfo1.FindControl("txtletterissuedby");
        txtletterissuedby.TabIndex = 53;
        TextBox txtcreditlimitamt = (TextBox)EmployerInfo1.FindControl("txtcreditlimitamt");
        txtcreditlimitamt.TabIndex = 54;
        //TextBox uctxtServiceName = (TextBox)UCServices.FindControl("gv_services_header").FindControl("txtServiceName");
        //uctxtServiceName.TabIndex = 52;
        #endregion
        #region RecieptControl TabIndex

        TextBox txtcashAmt = (TextBox)ReceiptControl2.FindControl("txtcashAmt");
        txtcashAmt.TabIndex = 57;
        TextBox txtCardAmt = (TextBox)ReceiptControl2.FindControl("txtCardAmt");
        txtCardAmt.TabIndex = 58;
        TextBox txtcardNoCmp = (TextBox)ReceiptControl2.FindControl("txtcardNoCmp");
        txtcardNoCmp.TabIndex = 59;
        DropDownList ddcardType = (DropDownList)ReceiptControl2.FindControl("ddcardType");
        ddcardType.TabIndex = 60;
        DropDownList ddlcrdtype = (DropDownList)ReceiptControl2.FindControl("ddlcrdtype");
        ddlcrdtype.TabIndex = 61;
        DropDownList ddbankName = (DropDownList)ReceiptControl2.FindControl("ddbankName");
        ddbankName.TabIndex = 62;
        TextBox RtxtcardExpiredt = (TextBox)ReceiptControl2.FindControl("txtcardExpiredt");
        RtxtcardExpiredt.TabIndex = 63;
        ////TextBox txtcardAuther = ReceiptControl2.FindControl("txtcardAuther") as TextBox;
        ////txtcardAuther.TabIndex = 64;
        //TextBox RtxtSearchControl = (TextBox)ReceiptControl2.FindControl("uccardAuther").FindControl("txtSearchControl");
        //RtxtSearchControl.TabIndex = 64;

        DropDownList ddlDiscountType = (DropDownList)ReceiptControl2.FindControl("ddlDiscountType");
        ddlDiscountType.TabIndex = 65;
        TextBox txtpatdis = (TextBox)ReceiptControl2.FindControl("txtpatdis");
        txtpatdis.TabIndex = 66;
        TextBox txtpartydis = (TextBox)ReceiptControl2.FindControl("txtpartydis");
        txtpartydis.TabIndex = 67;
        TextBox txtpatgrossamt = (TextBox)ReceiptControl2.FindControl("txtpatgrossamt");
        txtpatgrossamt.TabIndex = 68;
        TextBox txtpartygrossamt = (TextBox)ReceiptControl2.FindControl("txtpartygrossamt");
        txtpartygrossamt.TabIndex = 69;
        TextBox txtgrossamttotal = (TextBox)ReceiptControl2.FindControl("txtgrossamttotal");
        txtgrossamttotal.TabIndex = 70;
        TextBox ucdueauthtxtSearchControl = (TextBox)ReceiptControl2.FindControl("ucdueauth").FindControl("txtSearchControl");
        ucdueauthtxtSearchControl.TabIndex = 71;
        TextBox Search3txtSearchControl = (TextBox)ReceiptControl2.FindControl("Search3").FindControl("txtSearchControl");
        Search3txtSearchControl.TabIndex = 73;
        DropDownList ddlPaymentType = (DropDownList)ReceiptControl2.FindControl("ddlPaymentType");
        ddlPaymentType.TabIndex = 75;
        DropDownList ddlCurrency = (DropDownList)ReceiptControl2.FindControl("ddlCurrency");
        ddlCurrency.TabIndex = 76;
        TextBox txtTenderedAmt = (TextBox)ReceiptControl2.FindControl("txtTenderedAmt");
        txtTenderedAmt.TabIndex = 77;
        TextBox UcTransactionNotxtSearchControl = (TextBox)ReceiptControl2.FindControl("UcTransactionNo").FindControl("txtSearchControl");
        UcTransactionNotxtSearchControl.TabIndex = 78;
        TextBox txtRemarks = (TextBox)ReceiptControl2.FindControl("txtRemarks");
        txtRemarks.TabIndex = 79;

        #endregion

    }
    public void binddropdowns()
    {
        
        int session_id = Convert.ToInt32(SessionHandler.DBSESSION_ID);
        EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
        DataSet dset = objdb.Get_Registration_DropDowns("REG", session_id);
        EmployerInfo1.binddropdowns(dset);
        EmployerInfo1.BindEmpRelations(dset.Tables[15]);
        ReceiptControl2.BindCardtypes(dset.Tables[17]);
        ddlTitle.DataSource = dset.Tables[1];
        ddlTitle.DataTextField = "TITLE_DESC";
        ddlTitle.DataValueField = "TITLE_ID";
        ddlTitle.DataBind();
        ddlTitle.Items.Insert(0, new ListItem("--select--", "0"));

        ddlGender.DataSource = dset.Tables[3];
        ddlGender.DataTextField = "SEX_NAME";
        ddlGender.DataValueField = "SEX_ID";
        ddlGender.DataBind();
        ddlGender.Items.Insert(0, new ListItem("--select--", "0"));

        ddlResPerson.DataSource = dset.Tables[4];
        ddlResPerson.DataTextField = "RESPONSIBILITY_PERSON_DESC";
        ddlResPerson.DataValueField = "RESPONSIBILITY_PERSON_ID";
        ddlResPerson.DataBind();
        ddlResPerson.Items.Insert(0, new ListItem("--select--", "0"));

        ddlBloodGroup.DataSource = dset.Tables[6];
        ddlBloodGroup.DataTextField = "BLOOD_GROUP_NAME";
        ddlBloodGroup.DataValueField = "BLOOD_GROUP_ID";
        ddlBloodGroup.DataBind();
        ddlBloodGroup.Items.Insert(0, new ListItem("--select--", "0"));

        ddlMaritalStatus.DataSource = dset.Tables[5];
        ddlMaritalStatus.DataTextField = "MARITAL_STATUS_DESC";
        ddlMaritalStatus.DataValueField = "MARITAL_STATUS_ID";
        ddlMaritalStatus.DataBind();
        ddlMaritalStatus.Items.Insert(0, new ListItem("--select--", "0"));

        ddlOccupation.DataSource = dset.Tables[7];
        ddlOccupation.DataTextField = "OCCUPATION_DESC";
        ddlOccupation.DataValueField = "OCCUPATION_ID";
        ddlOccupation.DataBind();
        ddlOccupation.Items.Insert(0, new ListItem("--select--", "0"));

        ddlReligion.DataSource = dset.Tables[8];
        ddlReligion.DataTextField = "RELIGION_DESC";
        ddlReligion.DataValueField = "RELIGION_ID";
        ddlReligion.DataBind();
        ddlReligion.Items.Insert(0, new ListItem("--select--", "0"));


        ddlNationality.DataSource = dset.Tables[10];
        ddlNationality.DataTextField = "NATIONALITY_NAME";
        ddlNationality.DataValueField = "NATIONALITY_ID";
        ddlNationality.DataBind();
        ddlNationality.SelectedItem.Text = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Default_Nationality);
        ddlNationality.Items.Insert(0, new ListItem("--select--", "0"));

        ddlPatientType.DataSource = dset.Tables[11];
        ddlPatientType.DataTextField = "PATIENT_TYPE_NAME";
        ddlPatientType.DataValueField = "PATIENT_TYPE_ID";
        ddlPatientType.DataBind();
        ddlPatientType.Items.Insert(0, new ListItem("--select--", "0"));


        ddlquestionary.DataSource = dset.Tables[12];
        ddlquestionary.DataTextField = "QUESTIONARY_NAME";
        ddlquestionary.DataValueField = "QUESTIONARY_ID";
        ddlquestionary.DataBind();
        ddlquestionary.Items.Insert(0, new ListItem("--select--", "0"));

        ddlRegType.DataSource = dset.Tables[18];
        ddlRegType.DataTextField = "REG_TYPE_DESC";
        ddlRegType.DataValueField = "REG_TYPE_ID";
        ddlRegType.DataBind();
        ddlRegType.Items.Insert(0, new ListItem("--select--", "0"));
        ListItem removieitems = ddlRegType.Items.FindByText("Pediatric");
        ddlRegType.Items.Remove(removieitems);

        dd_reg_source.DataSource = dset.Tables[19];
        dd_reg_source.DataTextField = "VIP_NAME";
        dd_reg_source.DataValueField = "VIP_ID";
        dd_reg_source.DataBind();
        dd_reg_source.Items.Insert(0, new ListItem("--select--", "0"));

        ddlproofid.DataSource = dset.Tables[21];
        ddlproofid.DataTextField = "ID_PROOF_TYPE_NAME";
        ddlproofid.DataValueField = "ID_PROOF_TYPE_ID";
        ddlproofid.DataBind();
        ddlproofid.Items.Insert(0, new ListItem("--ID Proof--", "0"));

        StaffRelation.DataSource = dset.Tables[15];
        StaffRelation.DataTextField = "PATIENT_RELATIONSHIP_DESC";
        StaffRelation.DataValueField = "PATIENT_RELATIONSHIP_ID";
        StaffRelation.DataBind();
        StaffRelation.Items.Insert(0, new ListItem("--select--", "0"));
        ListItem removieitem = StaffRelation.Items.FindByText("Self");
        StaffRelation.Items.Remove(removieitem);

        DropDownList ddlRptDispatch = UCServices.FindControl("divrptDispatch") as DropDownList;
        ddlRptDispatch.DataSource = dset.Tables[23];
        ddlRptDispatch.DataTextField = "REPORT_DISPATCH_TYPE_NAME";
        ddlRptDispatch.DataValueField = "REPORT_DISPATCH_TYPE_ID";
        ddlRptDispatch.DataBind();
        ddlRptDispatch.Items.Insert(0, new ListItem("--select--", "0"));
        Session["FORMNAME"] = "PATIENT";

        DataTable dt = dset.Tables[24];
        var listref = new List<Dictionary<string, object>>();
        foreach (DataRow row2 in dt.Rows)
        {
            var dictref = new Dictionary<string, object>();
            foreach (DataColumn col2 in dt.Columns)
            {
                dictref[col2.ColumnName] = row2[col2];
            }
            listref.Add(dictref);
        }
        JavaScriptSerializer serializerRef = new JavaScriptSerializer();
        string strref = serializerRef.Serialize(listref);


        DataTable dttitle = dset.Tables[25];
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
        ScriptManager.RegisterStartupScript(this, this.GetType(), "addLabel1", "javascript:Assigncardlabel( ' " + strref + " ' ,'" + strTitle + "');", true);

        ucReferal.Referralclassddlbind(dset.Tables[34]);   /* */
        ucReferal.BindReferalQuickTypes(dset.Tables[13]);   /* */
        ucReferal.BindReferalTypes(dset.Tables[13]);    /* */
        bindcountries();
        BindCardType();
        uccorporate.BindPatTypeDropdown(dset.Tables[11]);
        uccorporate.BindTitles(dset.Tables[24]);
        UserControl uccmp = uccorporate.FindControl("EmployerInfo1") as UserControl;
        DropDownList ddlrel = uccmp.FindControl("ddlrelation") as DropDownList;
        DropDownList ddlpolicytype = uccmp.FindControl("ddlpolicytype") as DropDownList;

        ddlrel.DataSource = dset.Tables[15];
        ddlrel.DataTextField = "PATIENT_RELATIONSHIP_DESC";
        ddlrel.DataValueField = "PATIENT_RELATIONSHIP_ID";
        ddlrel.DataBind();
        ddlrel.Items.Insert(0, new ListItem("--select--", "0"));

        ddlpolicytype.DataSource = dset.Tables[28];
        ddlpolicytype.DataTextField = "POLICY_TYPE_NAME";
        ddlpolicytype.DataValueField = "POLICY_TYPE_ID";
        ddlpolicytype.DataBind();
        ddlpolicytype.Items.Insert(0, new ListItem("--select--", "0"));
        //IPatientRegistration _pRegi = new EzHms.Services.PatientRegistration();
        DBPatientRegistration obj = new DBPatientRegistration();
        CollectionBase _collection = obj.Get_PatientOptions(MasterOptions.VISATYPE);
        ddlVisatype.DataSource = _collection;
        ddlVisatype.DataTextField = "Text";
        ddlVisatype.DataValueField = "Value";
        ddlVisatype.DataBind();
        ddlVisatype.Items.Insert(0, new ListItem("--select--", "0"));
    }
    [WebMethod]
    public static CollectionBase GetEligilibityData(string age, string gender, string maritalstatus, string umr_no, string company_id)
    {
        DBPatientRegistration db = new DBPatientRegistration();
        PatientRegistrationCollection srvcoll = new PatientRegistrationCollection();
        srvcoll = (PatientRegistrationCollection)db.GetEligibility(age, gender, maritalstatus, umr_no, company_id);
        return srvcoll;
    }
    [WebMethod]
    public static ArrayList Bind_Consultation_Det_Async(int DOCTOR_ID, int PATIENT_ID, int COMPANY_ID, int TARIFF_ID)
    {
        List<string> _str = new List<string>();
        /*if (PATIENT_ID > 0)
         {*/
        //IReceipt _iReceipt = new EzHms.Services.ReceiptWebService();
        /*IPatient intPat = new EzHms.Services.PatientRegistration();*/
        // PatientRegistrationCollection _patRegcoll1 = new PatientRegistrationCollection();
        EzHms.ModelEntity.PatientRegistration _objReg = new EzHms.ModelEntity.PatientRegistration();
        _objReg.PATIENT_ID = !string.IsNullOrEmpty(PATIENT_ID.ToString()) ? Convert.ToString(PATIENT_ID) : "0";
        _objReg.Doctor_ID = DOCTOR_ID;
        _objReg.PATIENT_CLASS_ID = 2;
        _objReg.COMPANY_ID = !string.IsNullOrEmpty(COMPANY_ID.ToString()) ? Convert.ToString(COMPANY_ID) : "0";
        _objReg.TARIFF_ID = !string.IsNullOrEmpty(TARIFF_ID.ToString()) ? Convert.ToInt32(TARIFF_ID) : 1;
        DBServices1 DBJ = new DBServices1();
        DataSet _coll = DBJ.Get_And_Fee_Details(_objReg);
        ArrayList list = new ArrayList();
        if (_coll.Tables != null && _coll.Tables.Count > 0 && _coll.Tables[0].Rows.Count > 0)
        {
            foreach (DataRow row in _coll.Tables[0].Rows)
            {
                var dict = new Dictionary<string, object>();
                foreach (DataColumn col in _coll.Tables[0].Columns)
                {
                    dict[col.ColumnName] = row[col];
                }
                list.Add(dict);
            }
            return list;
        }
        return null;

       
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static List<object> GetPatientCategoryDtls(Int16 patcat_id)
    {
        
        List<object> lst = new List<object>();
        DBEventform obj = new DBEventform();
        DataSet ds = obj.GetPatientCategoryDtls(patcat_id);
        if (ds != null)
        {
            if (ds.Tables.Count > 0)
            {
                DataTable dt = ds.Tables[0];
                ArrayList arraylist = new ArrayList();

                foreach (DataRow row in dt.Rows)
                {
                    var dict = new Dictionary<string, object>();
                    foreach (DataColumn col in dt.Columns)
                    {
                        dict[col.ColumnName] = row[col];
                    }
                    arraylist.Add(dict);

                }
                lst.Add(arraylist);
            }
        }
        return lst;
    }
    protected void bindcountries()
    {
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
        string query = "SELECT COUNTRY_ID,COUNTRY_CD,COUNTRY_NAME FROM MA.COUNTRY where Record_status='A'";
        DataSet ds = dMasters.DynamicDataset(query);

    }
    private void BindCardType()
    {
        //IHealthcarddetails hlthdtls = new HealthCarddetailsService();
        CollectionBase cbase =null; //hlthdtls.getcardtypes();
        ddlhctype.DataSource = cbase;
        ddlhctype.DataValueField = "HEALTH_CARD_TYPE_ID";
        ddlhctype.DataTextField = "HEALTH_CARD_TYPE_NAME";
        ddlhctype.DataBind();
        ddlhctype.Items.Insert(0, new ListItem("--select--", "0"));
    }
    protected virtual string NationalitySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
        //string Result = string.Empty;
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
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string SlotData(int id, string Date, string umr_no)
    {
        MasterClass obj1 = new MasterClass();
        string ApptHosting = obj1.WebConfigSettings("Appointment Hosting");
        string ResponseData = string.Empty;
        System.Net.ServicePointManager.Expect100Continue = false;
        string Path = obj1.WebConfigSettings("AppointmentUrl");
        if (ApptHosting == "IIS")
        {
            if (Path != string.Empty)
            {
                try
                {

                    var request = (HttpWebRequest)WebRequest.Create(new Uri("" + Path + "api/Intgrtn/getApiIntgData"));
                    using (request as IDisposable)
                    {
                        request.Method = "POST";
                        request.Accept = "application/x-www-form-urlencoded";
                        string _Json = string.Empty;
                        if (!string.IsNullOrEmpty(umr_no))
                        {
                            _Json = "[{ \"lookupName\": \"AvailableSlots\", \"apiQry\": \"<root><MIG_ID>" + SessionHandler.MEG_ID + "</MIG_ID><I_RSRC_ID>" + id + "</I_RSRC_ID><FROM_DT>" + Date + "</FROM_DT><TO_DT>" + Date + "</TO_DT><UMR_NO>" + umr_no + "</UMR_NO></root>\", \"migId\": \"" + SessionHandler.MEG_ID + "\" }]";
                        }
                        else
                        {
                            _Json = "[{ \"lookupName\": \"AvailableSlots\", \"apiQry\": \"<root><MIG_ID>" + SessionHandler.MEG_ID + "</MIG_ID><I_RSRC_ID>" + id + "</I_RSRC_ID><FROM_DT>" + Date + "</FROM_DT><TO_DT>" + Date + "</TO_DT></root>\", \"migId\": \"" + SessionHandler.MEG_ID + "\" }]";
                        }
                        string body = "=" + _Json;
                        byte[] byteData = Encoding.UTF8.GetBytes(body);
                        request.ContentLength = byteData.Length;
                        request.ContentType = "application/x-www-form-urlencoded";
                        request.UserAgent = "Micro Framework";


                        using (Stream postStream = request.GetRequestStream())
                        {
                            postStream.Write(byteData, 0, byteData.Length);
                        }

                        using (var response = (HttpWebResponse)request.GetResponse())
                        using (var stream = response.GetResponseStream())
                        using (var reader = new StreamReader(stream))
                        {
                            ResponseData = reader.ReadToEnd();
                            reader.Close();
                            stream.Close();
                            response.Close();
                        }
                    }
                }
                catch (Exception Ex)
                {

                }
                return ResponseData;
            }
            else
                return string.Empty;
        }
        else if (ApptHosting == "NODE")
        {
            if (Path != string.Empty)
            {

                try
                {
                    string url = "" + Path + "apt/api/getAvailableSlots";
                    if (!string.IsNullOrEmpty(umr_no))
                    {
                        // url += "?MIG_ID=" + SessionHandler.MEG_ID + "&I_RSRC_ID=" + id + "&FROM_DT=" + Date + "&TO_DT=" + Date + "&UMR_NO=" + umr_no;
                        url += "?MIG_ID=1&I_RSRC_ID=DM9";
                    }
                    else
                    {
                        url += "?MIG_ID=" + SessionHandler.MEG_ID + "&I_RSRC_ID=" + id + "&FROM_DT=" + Date + "&TO_DT=" + Date;
                    }
                    var request = (HttpWebRequest)WebRequest.Create(url);
                    using (request as IDisposable)
                    {
                        request.Method = "GET";
                        request.Accept = "application/x-www-form-urlencoded";
                        request.ContentType = "application/x-www-form-urlencoded";
                        request.UserAgent = "Micro Framework";

                        using (var response = (HttpWebResponse)request.GetResponse())
                        using (var stream = response.GetResponseStream())
                        using (var reader = new StreamReader(stream))
                        {
                            //var result = reader.ReadToEnd();
                            //var results = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(result);
                            //ResponseData = (((Newtonsoft.Json.Linq.JContainer)((((Newtonsoft.Json.Linq.JContainer)(results))).First))).First.ToString();
                            ResponseData = reader.ReadToEnd();
                            reader.Close();
                            stream.Close();
                            response.Close();
                        }
                    }
                }
                catch (Exception Ex)
                {

                }
                return ResponseData;
            }
            else
                return string.Empty;
        }
        else
            return string.Empty;

    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string getpkgregid(string Query)
    {
        DataSet ds = new DataSet();
        IDynamicMastersBO dmast = new EzHms.Services.DynamicMasterService();
        string query = Query;
        ds = dmast.DynamicDataset(query);
        if (ds.Tables.Count != 0)
        {
            System.Data.DataTable dt = ds.Tables[0];
            var list = new List<Dictionary<string, object>>();
            foreach (DataRow row in dt.Rows)
            {
                var dict = new Dictionary<string, object>();
                foreach (DataColumn col in dt.Columns)
                {
                    dict[col.ColumnName] = row[col];
                }
                list.Add(dict);
            }
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            string str = serializer.Serialize(list);
            return str;
        }
        else
        {
            return null;
        }
    }
    [WebMethod]
    public static CollectionBase SetCmpId(int Cmpy_ID)
    {
            return null;
    }
    [WebMethod]
    public static CollectionBase GetGradeDetails(int Cmpy_ID)
    {
            return null;
    }
    
    [WebMethod]
    public static PatientRegistrationCollection Get_AlrdyApp_Details(string firstName, string displayName, string mobileno)
    {
        DBPatientRegistration dbpat = new EzHms.DataAccessObject.DBPatientRegistration();
        PatientRegistrationCollection coll = new EzHms.ModelEntity.PatientRegistrationCollection();
        coll = (PatientRegistrationCollection)dbpat.Get_App_Details(firstName, displayName, mobileno);
        if (coll != null || coll.Count > 0)
            return coll;
        else
            return null;
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string SlotDataSelection(int SlotTimingId)
    {
        string ResponseData = string.Empty;
        System.Net.ServicePointManager.Expect100Continue = false;
        MasterClass obj1 = new MasterClass();
        string Path = obj1.WebConfigSettings("AppointmentUrl");
        var request = (HttpWebRequest)WebRequest.Create(new Uri("" + Path + "api/Intgrtn/postApiIntgData"));

        using (request as IDisposable)
        {
            request.Method = "POST";
            request.Accept = "application/x-www-form-urlencoded";
            string _Json = "[{ \"lookupName\": \"slotHold\", \"apiQry\": \"<root><SLOTS_ID>" + SlotTimingId + "</SLOTS_ID><MIG_ID>" + SessionHandler.MEG_ID + "</MIG_ID><FLAG>H</FLAG></root>\", \"migId\": \"" + SessionHandler.MEG_ID + "\" }]";
            string body = "=" + _Json;
            byte[] byteData = Encoding.UTF8.GetBytes(body);
            request.ContentLength = byteData.Length;
            request.ContentType = "application/x-www-form-urlencoded";
            request.UserAgent = "Micro Framework";

            using (Stream postStream = request.GetRequestStream())
            {
                postStream.Write(byteData, 0, byteData.Length);
            }

            using (var response = (HttpWebResponse)request.GetResponse())
            using (var stream = response.GetResponseStream())
            using (var reader = new StreamReader(stream))
            {
                ResponseData = reader.ReadToEnd();
                reader.Close();
                stream.Close();
                response.Close();
            }
        }
        return ResponseData;

    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string RemoveSlotDataSelection(int SlotTimingId)
    {
        string ResponseData = string.Empty;
        System.Net.ServicePointManager.Expect100Continue = false;
        MasterClass obj1 = new MasterClass();
        string Path = obj1.WebConfigSettings("AppointmentUrl");
        var request = (HttpWebRequest)WebRequest.Create(new Uri("" + Path + "api/Intgrtn/postApiIntgData"));

        using (request as IDisposable)
        {
            request.Method = "POST";
            request.Accept = "application/x-www-form-urlencoded";
            string _Json = "[{ \"lookupName\": \"slotHold\", \"apiQry\": \"<root><SLOTS_ID>" + SlotTimingId + "</SLOTS_ID><MIG_ID>" + SessionHandler.MEG_ID + " </MIG_ID><FLAG>R</FLAG></root>\", \"migId\": \"" + SessionHandler.MEG_ID + "\" }]";
            string body = "=" + _Json;
            byte[] byteData = Encoding.UTF8.GetBytes(body);
            request.ContentLength = byteData.Length;
            request.ContentType = "application/x-www-form-urlencoded";
            request.UserAgent = "Micro Framework";

            using (Stream postStream = request.GetRequestStream())
            {
                postStream.Write(byteData, 0, byteData.Length);
            }

            using (var response = (HttpWebResponse)request.GetResponse())
            using (var stream = response.GetResponseStream())
            using (var reader = new StreamReader(stream))
            {
                ResponseData = reader.ReadToEnd();
                reader.Close();
                stream.Close();
                response.Close();
            }
        }
        return ResponseData;

    }

    [WebMethod(EnableSession = true)]
    public static bool SavePackageConsultations(string Xml)
    {
        bool status;
        string _xml = Xml.Replace('$', '"');
        EzHms.DataAccessObject.DBPatientRegistration _cbObj = new EzHms.DataAccessObject.DBPatientRegistration();
        status = _cbObj.SavePkgConsultationsXML(_xml);
        return status;

    }
    
    [WebMethod(EnableSession = true)]
    public static void Get_Package_Bill_Numbers(string UMR_NO)
    {
        SessionHandler.PRE_CONDITON = UMR_NO;
        // HttpContext.Current.Session.Add("CONDITION", "OP BILL NO" + UMR_NO);

    }
    private void GetServiceTypes(DropDownList ddl)
    {
       //DBServices1 intEnt =new DBServices1();
       // CollectionBase conslTypeColl = intEnt.GetLevelCollection();
       // if (conslTypeColl != null && conslTypeColl.Count > 0)
       // {
       //     ddl.DataSource = conslTypeColl;
       //     ddl.DataValueField = "ENTITY_VALUE_ID";
       //     ddl.DataTextField = "ENTITY_VALUE_NAME";
       //     ddl.DataBind();
       //     ddl.Items.Insert(0, "--select--");
       //     ddl.SelectedValue = "1";
       // }

    }
    protected void ClearControls()
    {
        txtRegDateTime.Text = ClientTime.ToString(ViewState["datefmt"].ToString());
        ddlTitle.SelectedIndex = -1;
        txtFirstName.Text = string.Empty;
        txtMiddleName.Text = string.Empty;
        txtLastName.Text = string.Empty;
        ddlDisplayName.SelectedIndex = -1;
        txtDisplayname.Text = string.Empty;
        ddlGender.SelectedIndex = -1;
        ddlReligion.SelectedIndex = -1;
        ddlEthnicity.SelectedIndex = -1;
        ddlMaritalStatus.SelectedIndex = 0;
        newAgeUc.ageInYears = string.Empty;
        ddlResPerson.SelectedIndex = -1;
        txtResPerson.Text = string.Empty;
        txtMotherMName.Text = string.Empty;
        txtfathername.Text = string.Empty;
        ddlOccupation.SelectedIndex = -1;
        ddlBloodGroup.SelectedIndex = -1;
        ddlPatientType.SelectedIndex = -1;
        txtcorporte.Text = string.Empty;
        ddlquestionary.SelectedIndex = -1;
        txtSSN.Text = string.Empty;
        txtPassprotno.Text = string.Empty;
        txtIssueDt.Text = string.Empty;
        txtExpiryDt.Text = string.Empty;
        txtissuedat.Text = string.Empty;
        if (ddlNationality.Items.Count > 1)
            ddlNationality.SelectedValue = "1";
        EmployerInfo1.CardNO = string.Empty;
        EmployerInfo1.ContactNo = string.Empty;
        EmployerInfo1.EmployeeID = string.Empty;
        EmployerInfo1.EmployeeName = string.Empty;
        EmployerInfo1.EmployeeText = string.Empty;
        EmployerInfo1.EmployerName = string.Empty;
        EmployerInfo1.EmployerText = string.Empty;
        EmployerInfo1.Grade = string.Empty;
        EmployerInfo1.RelationShip = string.Empty;
        EmployerInfo1.Designation = string.Empty;
        //  EmployerInfo1.Salary = string.Empty;
        newAgeUc.AgeInDay = "0";
        newAgeUc.ageInDays = "0";
        newAgeUc.AgeInMonth = "0";
        newAgeUc.ageInMonths = "0";
        newAgeUc.AgeInYear = "0";
        newAgeUc.ageInYears = "0";
        newAgeUc.DOB = string.Empty;
        ucConsultant.Text = string.Empty;
        if (ViewState["cdGen"] != null && ViewState["cdGen"].ToString() == GetEnumerationString.GetEnumDescription(PARAMETER_VALUE.AUTOGENERATE))
        {
            autoCDSer = new EzHms.Services.AutoGenerateCD();
            txtumrno.Text = autoCDSer.GetAutoGenerateCD(DALConstants.PATIENT_TABLE);
            autoCDSer = new EzHms.Services.AutoGenerateCD();
            txtRegistration.Text = autoCDSer.GetAutoGenerateCD(EzHms.ModelEntity.AutoCodes.FO_BILL_REG.ToString());
        }
        else
        {
            txtumrno.Enabled = true;
        }

    }
    protected bool IsRedirectToNewPage()
    {
        //this.cpolicyColl = new CompanyPolicyCollection();
        //this.icomPolicy = new EzHms.Services.ComapnyPolicyWebService();
        //this.cpolicyColl = this.icomPolicy.Get_Parameter_Value(CompanyPolicyEnum.PARAMETER_NAME, GetEnumerationString.GetEnumDescription(PARAMETER_NAME.DISPLAY_PAGE));
        //return (this.cpolicyColl != null && this.cpolicyColl.GetPresettings(0).PARAMETER_DISPLAY_VALUE == GetEnumerationString.GetEnumDescription(PARAMETER_VALUE.NEW_PAGE)) ? true : false;
        return false;
             
    }
    protected void OnSavePatientRegistration(object sender, EventArgs e)
    {
        hdnregtypemain.Value = ddlRegType.SelectedValue;
        string alert = string.Empty;
        string xmlstring = string.Empty; string PAT_NO = string.Empty;
        string IS_OLD;
        int billid = 0, tran_id = 0, patid = 0, Con_BillId = 0, opbill_billid = 0;
        bool _status = false; string out_umr_no = string.Empty; string out_trans_no = string.Empty; string pkgparam = string.Empty;
        string op_reg_no = string.Empty;
        string grp_bill_no = string.Empty;
        int reg_bill_id = 0;
        var MlcStatus = "N";
        HiddenField hdnospreg = (HiddenField)umrPatientDetails.FindControl("hdnOspRegReq");
        // CheckBox ChkMlcStatus = Address1.FindControl("ChkMlcStatus") as CheckBox;
        if (ChkMlcStatus.Checked == true)
        {
            MlcStatus = "Y";
        }
        if (chkisold.Checked == true || chk_old.Checked == true || hdnospreg.Value == "Y")
        {
            IS_OLD = "Y";
        }
        else
        { IS_OLD = "N"; }

        EzHms.DataAccessObject.DBPatientRegistration OBJPAT = new DBPatientRegistration();
        ReceiptMaster _receipt = new ReceiptMaster();
        //EzHms.DataAccessObject.DBServices objdb = new EzHms.DataAccessObject.DBServices();

        string _xmlimage = string.Empty;

        byte[] _patimg = new byte[1];
        if (Session["capturedImageURL"] != null && Session["capturedImageURL"] != string.Empty)
        {
            byte[] img = new byte[10000000];
            img = File.ReadAllBytes(Session["capturedImageURL"].ToString());
            preigstation = new EzHms.ModelEntity.PatientRegistration();
            _receipt.PATIENT_IMAGE_XML = img;
        }
        else
        {
            _receipt.PATIENT_IMAGE_XML = _patimg;
        }
        _receipt.ORDER_ID = !string.IsNullOrEmpty(hdnIndOrderId.Value) ? hdnIndOrderId.Value : string.Empty;
        string hck_flag = "N";
        if (!string.IsNullOrEmpty(hdnordertype.Value) && hdnordertype.Value != "C")
        {
            hck_flag = "Y";
        }

        _receipt.SESSION_ID = SessionHandler.DBSESSION_ID.ToString();
        string htmlstring = hdnHTMLstring.Value;
        string iscorporate = string.Empty;
        string bill_no = "";
        string tran_no = "";
        if (chk_old.Checked == false)
        {
            if (ddlPatientType.SelectedValue == "2" || ddlPatientType.SelectedValue == "5" || ddlPatientType.SelectedValue == "7" || ddlPatientType.SelectedValue == "8" || ddlPatientType.SelectedValue == "10" || ddlPatientType.SelectedValue == "9")
            {
                iscorporate = "CORP";

            }
            else
            { iscorporate = "NORMAL"; }
        }
        else
        {
            if (hdnpatienttype.Value == "2")
            {
                iscorporate = "CORP";
            }
            else
            {
                iscorporate = "NORMAL";
            }
        }
        if (htmlstring != string.Empty)
        {
            htmlstring = htmlstring.Replace('$', '"');
            _receipt.XMLROOT = htmlstring;
            _receipt.IS_OLD = IS_OLD;
            _receipt.ISCORPORATE = iscorporate;
            _receipt.APMNT_PAT_ID = !string.IsNullOrEmpty(ApptPatientId.Value) ? Convert.ToInt32(ApptPatientId.Value) : 0;
            _receipt.PAT_NO = PAT_NO;
            if (hdn_pkg_param_opd.Value != "" && hdn_pkg_param_opd.Value == "3")
            {
                pkgparam = "Y";
            }
            if (hdnpre_regi.Value == "5")
            {
                if (!string.IsNullOrEmpty(htmlstring))
                {
                    #region ospsaving
                    EzHms.DataAccessObject.DBServices objdb = new EzHms.DataAccessObject.DBServices();
                    File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\OSPSavingLog.txt", DateTime.Now + " -- ");
                    _status =objdb.SaveOSpBilling(htmlstring, "", "", Convert.ToInt32(SessionHandler.DBSESSION_ID), out count, out billid, out tran_id, out patid, out Con_BillId, out opbill_billid, out bill_no, out tran_no, pkgparam);
                    File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\OSPSavingLog.txt", DateTime.Now + "_" + billid + Environment.NewLine);
                    if (_status == true && count > 0)
                    {
                        int bill_id = 0;
                        if (billid > 0)
                        {
                            bill_id = Convert.ToInt32(billid);
                            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "ConsSave", "javascript:SavePackageConsultation('" + bill_id + "')", true);
                        }
                      //  PrintSettingsInfo _psinfo = new PrintSettingsInfo();
                        string Sessionid = SessionHandler.DBSESSION_ID.ToString();
                       // _psinfo.PrintSettings_info(Convert.ToInt32(SessionHandler.DOCUMENT_ID), patid, string.Empty);
                        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
                        //{
                        //    #region ospreport
                        //    string patientId = string.Empty;
                        //    string ReportName = string.Empty;
                        //    patientId = patid.ToString();
                        //    hdnHTMLstring.Value = string.Empty;
                        //    string obj = string.Empty;
                        //    obj = "Bill Cum Receipt";
                        //    List<ReportParameter> paramList = new List<ReportParameter>();
                        //    string ptyp = string.Empty;
                        //    if (_psinfo.PRINT_TYPE == "ORIGINAL")
                        //        ptyp = "Y";
                        //    else
                        //        ptyp = "N";
                        //    if (hdnauth_user.Value == "Y")
                        //    {
                        //        ptyp = "Y";
                        //    }
                        //    //  paramList.Add(new ReportParameter("Print_Type", ptyp, false));
                        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", tran_id.ToString(), false));
                        //    paramList.Add(new ReportParameter("IP_BILL_ID", Con_BillId.ToString(), false));
                        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", patientId, false));
                        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
                        //    paramList.Add(new ReportParameter("Title", obj, false));
                        //    paramList.Add(new ReportParameter("showprintdt", false.ToString(), false));
                        //    IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
                        //    DocFormatCollection dcol = imap.GetDocFormat(SessionHandler.DOCUMENT_ID);
                        //    if (hdnpre_regi.Value == "5")
                        //    {
                        //        ReportName = "OPReport_A4Half";
                        //    }
                        //    else
                        //    {
                        //        ReportName = "OPReport_A4Half";
                        //    }
                        //    string[] str = ReportName.Split(',');

                        //    string Con = string.Empty;
                        //    string path = string.Empty;
                        //    if (str[0] != null && str[0] != string.Empty)
                        //    {
                        //        path = str[0];
                        //        if (str.Length > 1)
                        //            Con = str[1];
                        //    }
                        //    if (Con == "N")
                        //        paramList.Add(new ReportParameter("IsLogoVisible", false.ToString(), false));

                        //    if (Con == "Y")
                        //        paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
                        //    string copies = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.NoOfCopies);
                        //    if (path == "OPReport_NoOfServicePerPage")
                        //        paramList.Add(new ReportParameter("ServiceCntPerPage", copies, true));
                        //    path = !string.IsNullOrEmpty(path) ? path : "OPReport_A4Half";

                        //    string reportPath = "/HIMSReprots/" + path + "&tid332=" + Con_BillId;
                        //    SessionHandler.REPORTPARAMS = paramList;
                        //    string ID = Convert.ToString(tran_id);
                        //    string pane = Request["pane"] != null ? Request["pane"].ToString() : "0";
                        //    hdnRpane.Value = pane;
                        //    string type = string.Empty;
                        //    if (Request.QueryString["Type"] != null)
                        //        type = Request.QueryString["Type"].ToString();
                        //    hdnRType.Value = type;
                        //    string QureyID = string.Empty;
                        //    if (Request.QueryString["ID"] != null)
                        //    {
                        //        QureyID = Request.QueryString["ID"].ToString();
                        //    }
                        //    else
                        //    {
                        //        QureyID = Request.QueryString["ID"];
                        //    }
                        //    string BillPackegelistReceipt = "";
                        //    HiddenField hdnpkg_print_req = UCServices.FindControl("hdnpkg_print_req") as HiddenField;
                        //    if (hdnpkg_print_req.Value == "Y")
                        //    {

                        //        string ReportName_pkg = string.Empty;
                        //        //string obj_pkg = "Report Collection Slip";
                        //        List<ReportParameter> paramList1 = new List<ReportParameter>();
                        //        paramList1.Add(new ReportParameter("IP_BILL_ID", Con_BillId.ToString(), false));
                        //        paramList1.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                        //        paramList1.Add(new ReportParameter("Print_by", SessionHandler.UserName, false));
                        //        paramList1.Add(new ReportParameter("Report_Name", obj, false));
                        //        BillPackegelistReceipt = "/HIMSReprots/Sub_Package_CheckList";
                        //        SessionHandler.REPORTPARAMS1 = paramList1;
                        //    }

                        //    List<ReportParameter> paramList2 = new List<ReportParameter>();
                        //    paramList2.Add(new ReportParameter("IP_BILL_ID", Con_BillId.ToString(), false));
                        //    paramList2.Add(new ReportParameter("printedby", SessionHandler.UserName, false));
                        //    paramList2.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                        //    paramList2.Add(new ReportParameter("Islogovisible", true.ToString(), false));
                        //    paramList2.Add(new ReportParameter("IsHeadervisible", true.ToString(), false));
                        //    // paramList2.Add(new ReportParameter("Print_Type", "Y", false));
                        //    // string SYSTEM_IP = System.Environment.MachineName.ToString();
                        //    string reportPath_srs = "/HIMSReprots/SUB_Service_Requisition_Slip";
                        //    SessionHandler.REPORTPARAMS2 = paramList2;
                        //    if (!string.IsNullOrEmpty(Request.QueryString["DashBdFlag"]) && Request.QueryString["DashBdFlag"] == "FrntOffice")
                        //        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + reportPath + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + QureyID + "','" + _status + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + reportPath_srs + "','" + MlcStatus + "','" + patientId + "');", true);
                        //    else
                        //        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + reportPath + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + QureyID + "','" + _status + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + reportPath_srs + "','" + MlcStatus + "','" + patientId + "');", true);
                        //    #endregion
                        //}
                        string Con = string.Empty;
                        string ReportName = string.Empty;
                        if (hdnpre_regi.Value == "5")
                        {
                            ReportName = "OPReport_A4Half";
                        }
                        else
                        {
                            ReportName = "OPReport_A4Half";
                        }
                        string[] str = ReportName.Split(',');
                        string path = string.Empty;
                        if (str[0] != null && str[0] != string.Empty)
                        {
                            path = str[0];
                            if (str.Length > 1)
                                Con = str[1];
                        }
                        string patientId = string.Empty;
                        //    string ReportName = string.Empty;
                            patientId = patid.ToString();
                        string reportPath = "/HIMSReprots/" + path + "&tid332=" + Con_BillId;
                        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + reportPath + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + 0 + "','" + _status + "','" + count + "','" + "" + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + "" + "','" + MlcStatus + "','" + patientId + "');", true);

                    }
                    else
                    {

                        string BillPackegelistReceipt = string.Empty;
                        string reportPath_srs = string.Empty;
                        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + "" + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + Request.QueryString["ID"] + "','" + _status + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + reportPath_srs + "','" + MlcStatus + "');", true);
                    }
                    #endregion
                }
            }
            else
            {
                if (!string.IsNullOrEmpty(_receipt.XMLROOT))
                {
                    string hc_det_id = "0";
                    string utilized_amt = "0";
                    HiddenField hdnhcdetid = (HiddenField)Address1.FindControl("hdnhcdetid");
                    if (hdnhcdetid.Value == "" || hdnhcdetid.Value == "0")
                    {
                    }
                    else
                    {
                        hc_det_id = hdnhcdetid.Value;
                        utilized_amt = hdnutilizamt.Value;
                    }
                    string ap_type = hdnappttype.Value;
                    DBServices1 save = new DBServices1();
                   File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\InsertRegSavingLog.txt", "Start Time :: " + DateTime.Now + Environment.NewLine + htmlstring + Environment.NewLine);
                    string ex11 = string.Empty;
                    _status = save.InsertRegXml(_receipt, out count, out _patid, out tranid, out regbillno, out conbillid, out opbillid, out CausltyBid, out out_umr_no, out out_trans_no, pkgparam, out alert, out op_reg_no, out reg_bill_id, hck_flag, ap_type, hc_det_id, utilized_amt, out grp_bill_no, out ex11);
                    File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\InsertRegSavingLog.txt", "End Time :: " + DateTime.Now + "with UMR#:" + out_umr_no + "_patid:" + _patid + "tranid:" + tranid + "regbillno:" + regbillno + "conbillid:" + conbillid + "opbillid:" + opbillid + "CausltyBid:" + CausltyBid + "out_umr_no:" + out_umr_no + "out_trans_no:" + out_trans_no + "alert:" + alert + "op_reg_no:" + op_reg_no + "reg_bill_id:" + reg_bill_id + Environment.NewLine + Environment.NewLine);
                    hdn_out_reg_no.Value = op_reg_no;
                    hdn_out_grp_bill_no.Value = grp_bill_no;
                    //hdnUmrNo.Value = out_umr_no;
                    hdnout_reg_bill_id.Value = Convert.ToString(reg_bill_id);
                    if (alert == "") { alert = "0,0"; }
                    ex11 = ex11.Replace("'", "");
                    if (ex11 != "")
                    {
                        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler4444", "SaveFailelert('" + ex11.ToString() + "');", true);
                    }
                    else if (_status == true && out_umr_no != string.Empty)
                    {
                        //if (Session["capturedImageURL"] != null && Session["capturedImageURL"] != string.Empty && File.Exists(HttpContext.Current.Server.MapPath(Session["capturedImageURL"].ToString())))
                        //    File.Delete(Session["capturedImageURL"].ToString());

                        MlcStatus = "N";
                        if (ChkMlcStatus.Checked == true)
                        {
                            MlcStatus = "Y";
                        }
                        else
                        {
                            MlcStatus = "N";
                        }
                        if (chk_old.Checked == true)
                        {
                            string umr_no = "";
                            int bill_id = 0;
                            if (opbillid == "" || opbillid == null) { opbillid = "0"; }
                            if (Convert.ToInt32(opbillid) > 0)
                            {
                                bill_id = Convert.ToInt32(opbillid);
                                umr_no = out_umr_no;
                                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "ConsSave", "javascript:SavePackageConsultation('" + bill_id + "," + grp_bill_no + "," + umr_no + "')", true);
                            }
                            hdnNoOfCopies.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.NoOfCopies);
                            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "save", "javascript:SaveISRegisteredSuccessMessages(" + _patid + "," + tranid + ",'" + regbillno + "','" + conbillid + "','" + opbillid + "','" + out_umr_no + "','" + out_trans_no + "','" + MlcStatus + "','" + op_reg_no + "','" + reg_bill_id + "','" + grp_bill_no + "');", true);
                        }
                        else
                        {
                            hdnPrintPatID.Value = _patid.ToString();
                            hdnPrintRegBillNo.Value = regbillno;
                            hdnPrintTranid.Value = tranid.ToString();
                            hdnPrintConBillId.Value = conbillid.ToString();
                            hdnPrintOPBillId.Value = opbillid.ToString();
                            hdn_out_reg_no.Value = op_reg_no;
                            hdn_out_grp_bill_no.Value = grp_bill_no;
                            hdnout_reg_bill_id.Value = Convert.ToString(reg_bill_id);
                            hdnTest.Value = "PKG";

                            int bill_id = 0;
                            string umr_no = "";
                            if (opbillid == "" || opbillid == null) { opbillid = "0"; }
                            if (Convert.ToInt32(opbillid) > 0)
                            {
                                bill_id = Convert.ToInt32(opbillid);
                                umr_no = out_umr_no;
                                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "ConsSave", "javascript:SavePackageConsultation('" + bill_id + "," + grp_bill_no + "," + umr_no + "')", true);
                            }
                            string BillPackegelistReceipt = string.Empty;
                            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "save", "javascript:SaveSuccessMessages(" + _patid + "," + tranid + ",'" + regbillno + "','" + conbillid + "','" + opbillid + "','" + out_umr_no + "','" + out_trans_no + "','" + MlcStatus + "','" + BillPackegelistReceipt + "','" + billid + "','" + op_reg_no + "','" + reg_bill_id + "','" + grp_bill_no + "','" + CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.NoOfCopies) + "');", true);
                        }
                    }
                    else
                    {
                        if (alert != "" && alert != "0,0")
                        {
                            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "ConsultatentMsg('" + alert + "');", true);
                        }
                        else
                        {
                            string s = string.Empty;
                            string BillPackegelistReceipt = string.Empty;
                            string reportPath_srs = string.Empty;
                            //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + s + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + Request.QueryString["ID"].ToString() + "','" + _status + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + reportPath_srs + "','" + MlcStatus + "','" + patid + "');", true);
                            if (tran_no != "")
                            {
                                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + s + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + Request.QueryString["ID"].ToString() + "','" + _status + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + reportPath_srs + "','" + MlcStatus + "','" + patid + "');", true);
                            }
                            else
                            {
                                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler4444", "SaveFailelert('" + "Failed to save" + "');", true);
                            }
                        }
                    }
                }
            }
        }
        else
        {
            string BillPackegelistReceipt = string.Empty;
            string reportPath_srs = string.Empty;
            if (tran_no != "")
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + "" + "','" + tran_id.ToString() + "','" + Request.QueryString["DashBdFlag"] + "','" + Request.QueryString["ID"].ToString() + "','" + _status + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "','" + reportPath_srs + "','" + MlcStatus + "');", true);
            }
            else
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler4444", "SaveFailelert('" + "Failed to save" + "');", true);
            }
        }
        //}
        //else
        //{
        //    string BillPackegelistReceipt = string.Empty;
        //    int billid = 0;
        //    string bill_no = "";
        //    string tran_no = "";
        //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "OPDSaveMsg('" + "" + "','" + "" + "','" + Request.QueryString["DashBdFlag"] + "','" + Request.QueryString["ID"].ToString() + "','" + "" + "','" + count + "','" + BillPackegelistReceipt + "','" + billid + "','" + bill_no + "','" + tran_no + "');", true);
        //}
    }
    [System.Web.Script.Services.ScriptMethod()]
    [WebMethod(EnableSession = true)]
    public static List<object> Getconsutationcount(string doctor_count_id)
    {
        int tot_records = 0;
        ServiceConcesionCollection _ipColl = new ServiceConcesionCollection();

        DBServices1 DBpersonal = new DBServices1();
        DataSet ds = DBpersonal.Getconsutationcount(doctor_count_id);
        MasterClass mobj = new MasterClass();
        List<object> items1 = mobj.ConvertDataSetToListObject(ds);
        if (ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
        {

            List<object> _lst = new List<object>();
            _lst.Add(items1);

            return _lst;
        }
        else
            return null;




    }
    [System.Web.Script.Services.ScriptMethod()]
    [WebMethod(EnableSession = true)]
    public static List<object> GetPrices(string SELECTED_TYPE_ID, string SELECTED_ID, string UMR_NO, string SERVICE_ID, string SERVICE_TYPE_ID, string PAT_NAME, string DOCTOR_ID, string cmp_id, string sel_qty, string sel_rate, string HEALTH_CARD_DET_ID)
    {
        int tot_records = 0;
        ServiceConcesionCollection _ipColl = new ServiceConcesionCollection();
        DBServices1 Dbgetservice = new DBServices1();
        ServiceConcesion _objFoBill = new ServiceConcesion();
        _objFoBill.SELECTED_TYPE_ID = SELECTED_TYPE_ID;
        _objFoBill.SELECTED_ID = SELECTED_ID;
        _objFoBill.UMR_NO = UMR_NO;
        _objFoBill.SERVICE_TYPE_ID = SERVICE_TYPE_ID;
        _objFoBill.SERVICE_ID = SERVICE_ID;
        _objFoBill.DOCTOR_ID = DOCTOR_ID;
        _objFoBill.PERCENTAGE = PAT_NAME;
        _objFoBill.ADDRESS1 = cmp_id;
        _objFoBill.QUANTITY = sel_qty;
        _objFoBill.RATE = sel_rate;
        _objFoBill.HEALTH_CARD_DET_ID = Convert.ToInt32(HEALTH_CARD_DET_ID);
        DBServices1 DBpersonal = new DBServices1();
        DataSet ds = DBpersonal.GetServiceConcesionPrice(_objFoBill, out tot_records);
        MasterClass mobj = new MasterClass();
        List<object> items1 = mobj.ConvertDataSetToListObject(ds);
        if (ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
        {

            List<object> _lst = new List<object>();
            _lst.Add(items1);

            return _lst;
        }
        else
            return null;




    }
    [WebMethod]
    [System.Web.Script.Services.ScriptMethod(ResponseFormat = System.Web.Script.Services.ResponseFormat.Json)]
    public static string GetPaymentModdedetails(string paymnetmodeid)
    {
        DBServices1 obj = new DBServices1();
        DataSet ds = obj.GetPaymentModeDb(paymnetmodeid);
        List<object> lst = new List<object>();
        string result = string.Empty;
        if (ds != null)
        {
            if (ds.Tables.Count > 0)
            {
                DataTable dt = ds.Tables[0];
                result = JsonConvert.SerializeObject(dt, Formatting.Indented);
            }
        }
        return result;

    }
   
    [WebMethod(EnableSession = true)]
    public static string GetImage()
    {
        string path = HttpContext.Current.Session["capturedImageURL"].ToString();
        string _Str = HttpContext.Current.Session["PatientcapturedImageURL"].ToString();
        return _Str;
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string IconsVisibleValidation(string _TempData)
    {
      //  MasterClass obj1 = new MasterClass();
      //  int docid = Convert.ToInt32(obj1.WebConfigSettings("PatBanner"));
      //  int modid = Convert.ToInt32(obj1.WebConfigSettings("PatBannerMod"));

      // // ICacheManager _pOptionCache = CacheFactory.GetCacheManager();
      //  string locname = SessionHandler.LOCATION_NAME;
      //  string user = SessionHandler.UserName;
      //  string keyValue = locname + "-" + user + "-" + "bannerdocs";
      // // if (!_pOptionCache.Contains(keyValue))
      ////  {
      //      //DataSet ds = Docpermission.DocpermissionbyDocIdModid(docid, modid);
      //     // _pOptionCache.Add(keyValue, ds, CacheItemPriority.Normal, null, new SlidingTime(TimeSpan.FromMinutes(20)));
      ////  }
      ////  DataSet docds = (DataSet)_pOptionCache.GetData(keyValue);
      //  DataSet docds = null;
      //  if (docds != null)
      //  {
      //      DataTable dt = docds.Tables[0];
      //      //var list = new List<Dictionary<string, object>>();
      //      //foreach (DataRow row in dt.Rows)
      //      //{
      //      //    var dict = new Dictionary<string, object>();
      //      //    foreach (DataColumn col in dt.Columns)
      //      //    {
      //      //        dict[col.ColumnName] = row[col];
      //      //    }
      //      //    list.Add(dict);
      //      //}
      //      //JavaScriptSerializer serializer = new JavaScriptSerializer();
      //      //string strColl = serializer.Serialize(list);
      //      //return strColl;
      //      string result = string.Empty;
      //      if (dt != null)
      //      {
      //          result = JsonConvert.SerializeObject(dt, Formatting.Indented);
      //      }
      //      return result;
      //  }
      //  else
            return null;
    }
    [WebMethod(EnableSession = true)]
    public static string BindVisitType()
    {

        string result = string.Empty;
        DBServices1 obj = new DBServices1();
        DataSet ds = obj.GetLevelCollection();
        List<object> lst = new List<object>();
        if (ds != null)
        {
            if (ds.Tables.Count > 0)
            {
                DataTable dt = ds.Tables[0];
                result = JsonConvert.SerializeObject(dt, Formatting.Indented);
            }
        }
        return result;

    }
    [WebMethod(EnableSession = true)]
    public static string Get_Dscnttype()
    {

        string result = string.Empty;
        DBServices1 obj = new DBServices1();
        DataSet ds = obj.Get_Dscnttype();
        List<object> lst = new List<object>();
        if (ds != null)
        {
            if (ds.Tables.Count > 0)
            {
                DataTable dt = ds.Tables[0];
                result = JsonConvert.SerializeObject(dt, Formatting.Indented);
            }
        }
        return result;

    }
    [WebMethod(EnableSession = true)]
    public static CollectionBase GetRegFeeandValidity(string RegTypeVal)
    {
        RegTypeMaster regtyp = new RegTypeMaster();
        regtyp.REGISTRATION_TYPE_ID = RegTypeVal;
        DBRegTypeMaster dbreg = new DBRegTypeMaster();
        CollectionBase _coll = dbreg.Get_RegType_details(regtyp);
        if (_coll != null)
        {
            return _coll;
        }
        return null;
    }
    
    [WebMethod(EnableSession = true)]
    public static void PreCondition_Consultant(string Dept_ID)
    {
        HttpContext.Current.Session.Add("ConsDeptID", Dept_ID);
    }
    [WebMethod(EnableSession = true)]
    public static List<object> GetConsultationDoctors(string _cName, string _pText, string pageNum, string pageSize, string flag, string _advSrch)
    {
        int _total_records = 0;
        EzHms.ModelEntity.LookUpSearch _lookUPSearch = new LookUpSearch();
        _lookUPSearch.PAGE_SIZE = Convert.ToInt32(pageSize);
        _lookUPSearch.CURRENT_PAGE = Convert.ToInt32(pageNum);
        _lookUPSearch.COLUMN_NAME = _cName;
        _lookUPSearch.PREFIX_TEXT = _pText.Trim();
        if (!string.IsNullOrEmpty(_advSrch))
            _lookUPSearch.ADVANCESEARCH = "DEPARTMENT_ID=" + flag + " AND " + _advSrch + " AND 1=1";
        else
            _lookUPSearch.ADVANCESEARCH = "DEPARTMENT_ID=" + flag;
        List<object> _element = new List<object>();
        _element.Add("");
        _element.Add(flag);
        _lookUPSearch.PreConditon = _element;
        DBPatientRegistration dbase = new DBPatientRegistration();
        CollectionBase _cBase = dbase.GetPackageConsultation_NEW(_lookUPSearch, out _total_records);
        if (_cBase != null)
        {
            List<object> _lst = new List<object>();
            _lst.Add(_cBase);
            _lst.Add(_total_records);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod]
    public static List<object> GetIndents(string Patient_ID, string Consultant_ID, string _fDt, string _tDt, string pageNum, string pageSize, string _cName, string _pText, string _advSrch)
    {
        GridPaging gpage = new GridPaging();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.PAGE_SIZE = Convert.ToInt32(pageSize);
        gpage.CURRENT_PAGE = Convert.ToInt32(pageNum);
        if (_advSrch != string.Empty)
            gpage.ADVANCESEARCH = _advSrch;
        int total_Records = 0;

        int PatId = !string.IsNullOrEmpty(Patient_ID) ? Convert.ToInt32(Patient_ID) : 0;
        int Billid = !string.IsNullOrEmpty(Consultant_ID) ? Convert.ToInt32(Consultant_ID) : 0;
        gpage.FROM_DATE = !string.IsNullOrEmpty(_fDt) ? Convert.ToString(_fDt) : string.Empty;
        gpage.TO_DATE = !string.IsNullOrEmpty(_tDt) ? Convert.ToString(_tDt) : string.Empty;

        //EzHms.ModelEntity.ReceiptMasterCollection recpColl = new ReceiptMasterCollection();
        //IDoctorDeskLabinfor idocInd = new DoctorLabService();
        CollectionBase cbInd = null; //idocInd.GetDoctor_OrderIndents(PatId, Billid, gpage, out total_Records);
        List<object> _lst = new List<object>();
        _lst.Add(cbInd);
        _lst.Add(total_Records);
        return _lst;
    }
    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public static PatientRegistrationCollection GetStaff_Dependent(int staff_id, int rel_id)
    {
        DBPatientRegistration intRecp = new DBPatientRegistration();
        return (PatientRegistrationCollection)intRecp.GetStaff_Dependent(staff_id, rel_id);
    }
    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public static List<object> GetStaff_Dependent_LookUp(string staff_id, string rel_id)
    {
        int staff_id1 = Convert.ToInt32(staff_id);
        int rel_id1 = Convert.ToInt32(rel_id);
        DBPatientRegistration intRecp = new DBPatientRegistration();
        CollectionBase cb = intRecp.GetStaff_Dependent(staff_id1, rel_id1);
        List<object> _lst1 = new List<object>();
        if (cb != null)
        {

            _lst1.Add(cb);
            _lst1.Add(100);
        }
        return _lst1;
    }

    [WebMethod(EnableSession = true)]
    public static void RefLetter_Precondition(string Umr_No, string Company_ID)
    {
        SessionHandler.PRE_CONDITON = "ReferalLetters^UMR_NO^" + Umr_No + "^^^COMPANY_ID=" + Company_ID;
        HttpContext.Current.Session.Add("CONDITION", "ReferalLetters^UMR_NO^" + Umr_No + "^^^COMPANY_ID=" + Company_ID);

    }

    
    [WebMethod(EnableSession = true)]
    public static void OnExpiredPreCondition()
    {
        HttpContext.Current.Session.Add("Flag", "REGEXPIRED");
    }
    //[WebMethod]
    //public static DcotorAvailabilityCollections GetNoOfConsultationLimits(string Doc_ID)
    //{
    //    IDcotorAvailability _objwitime = new DcotorAvailabilityService();
    //    DcotorAvailabilityCollections _objtimecollcount = (DcotorAvailabilityCollections)_objwitime.GetDoctorAvailbilitytime(Convert.ToInt32(Doc_ID), "C");
    //    DcotorAvailability _objconcount = new DcotorAvailability();
    //    return _objtimecollcount;
    //}
 
    [System.Web.Services.WebMethod(EnableSession = true)]
    public void sss(string imgName)
    {
        string str = Server.MapPath("~/TempImage/") + imgName;
        FileUpload file = new FileUpload();
        file.SaveAs(str);
    }

    [WebMethod(EnableSession = true)]
    public static string ConsultationReport(string Tid, string PatientId, string BothPrintSetting, string PatType, string DtFrmt, string billid, string opbillid, string hdnNoOfCopies, string pkg_chk_req, string PrescReportName, string chk_IsReg)
    {
        //string ReportName = string.Empty;
        //string reportPath = string.Empty;
        //string reportPath1 = string.Empty;
        //List<object> rptlistobject = new List<object>();
        //List<string> rptPaths = new List<string>();
        //int count = 0; string url = string.Empty;
        ////HiddenField hdnospreg = umrPatientDetails.FindControl("hdnOspRegReq") as HiddenField;
        //#region Consultation Prints
        //string[] reportstr = PrescReportName.Split(',');
        //if (!string.IsNullOrEmpty(billid) && billid != "0")
        //{
        //    string[] billstr = billid.Split(',');
        //    IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //    DocFormatCollection dcol = imap.GetDocFormat(379);
        //    if (dcol != null && dcol.Count >= 0)
        //    {
        //        foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //            ReportName = dmp.DOC_NAME_DESC.ToString();
        //        string[] str = ReportName.Split(',');
        //        reportPath = str[0];
        //        if (reportPath == "")
        //        {
        //            reportPath = "ConsultationSlip_A4Half";
        //        }
        //    }
        //    else
        //    {
        //        reportPath = "ConsultationSlip_A4Half";
        //    }

        //    reportPath = "ConsultationSlip_A4Half";

        //    for (int i = 0; i < billstr.Length; i++)
        //    {
        //        if (BothPrintSetting == "0")
        //        {
        //            List<ReportParameter> paramList = new List<ReportParameter>();
        //            string reportTitle = "Consultation Receipt";
        //            paramList.Add(new ReportParameter("ReportTitle", reportTitle, false));
        //            // paramList.Add(new ReportParameter("Print_Type", "Y", false));
        //            paramList.Add(new ReportParameter("IP_BILL_ID", billstr[i], false));
        //            paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tid, false));
        //            paramList.Add(new ReportParameter("DateFormat", DtFrmt, false));
        //            paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
        //            paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //            paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //            paramList.Add(new ReportParameter("IP_PATIENT_ID", PatientId, false));
        //            paramList.Add(new ReportParameter("IP_DOC_ID", "379"));

        //            reportPath1 = "/HIMSReprots/" + reportPath;

        //            rptlistobject.Add(paramList);
        //            rptPaths.Add(reportPath1);

        //            url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + reportPath1 + "&tid332=" + billstr[i] + ",";
        //        }
        //        else if (BothPrintSetting == "1")
        //        {
        //            // string _doctorid = null; 
        //            string reportPath2 = string.Empty;
        //            List<ReportParameter> paramList1 = new List<ReportParameter>();
        //            paramList1.Add(new ReportParameter("IP_BILL_ID", billstr[i], false));
        //            paramList1.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "0", false));
        //            paramList1.Add(new ReportParameter("IP_FLAG", "", false));
        //            paramList1.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));



        //            if (reportstr[i] == string.Empty)
        //            {
        //                reportPath2 = "/HIMSReprots/RepOPConsultationPrescription";
        //            }
        //            else
        //            {
        //                reportPath2 = "/HIMSReprots/" + reportstr[i];
        //            }





        //            if (chk_IsReg != "Y")
        //            {


        //                if (reportstr[i] == string.Empty)
        //                {
        //                    reportPath2 = "/HIMSReprots/Prescription_Normal";
        //                }
        //                else
        //                {
        //                    reportPath2 = "/HIMSReprots/" + reportstr[i];
        //                }



        //            }
        //            //SessionHandler.REPORTPARAMS = paramList1;  suseela

        //            rptlistobject.Add(paramList1);
        //            rptPaths.Add(reportPath2);
        //            url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + reportPath2 + ",";
        //        }
        //        else
        //        {
        //            string reportPath2 = string.Empty;
        //            List<ReportParameter> paramList1 = new List<ReportParameter>();
        //            paramList1.Add(new ReportParameter("IP_BILL_ID", billstr[i], false));
        //            paramList1.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "0", false));
        //            paramList1.Add(new ReportParameter("IP_FLAG", "", false));
        //            paramList1.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //            if (reportstr[i] == string.Empty)
        //            {
        //                reportPath2 = "/HIMSReprots/Prescription_Normal";
        //            }
        //            else
        //            {
        //                reportPath2 = "/HIMSReprots/" + reportstr[i];
        //            }


        //            rptlistobject.Add(paramList1);
        //            rptPaths.Add(reportPath2);
        //            url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + reportPath2 + ",";// "&tid=" + billstr[i] + ",";


        //            List<ReportParameter> paramList = new List<ReportParameter>();
        //            string reportTitle = "Consultation Receipt";
        //            paramList.Add(new ReportParameter("ReportTitle", reportTitle, false));
        //            //  paramList.Add(new ReportParameter("Print_Type", "Y", false));
        //            paramList.Add(new ReportParameter("IP_BILL_ID", billstr[i], false));
        //            paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tid, false));
        //            paramList.Add(new ReportParameter("DateFormat", DtFrmt, false));
        //            paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
        //            paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //            paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //            paramList.Add(new ReportParameter("IP_PATIENT_ID", PatientId, false));
        //            paramList.Add(new ReportParameter("IP_DOC_ID", "379"));

        //            reportPath1 = "/HIMSReprots/" + reportPath;

        //            rptlistobject.Add(paramList);
        //            rptPaths.Add(reportPath1);

        //            url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + reportPath1 + "&tid332=" + billstr[i] + ",";

        //        }
        //    }
        //}
        //#endregion
        //#region OP Bill Print
        //if (!string.IsNullOrEmpty(opbillid) && opbillid != "0")
        //{
        //    string patientId = string.Empty;
        //    patientId = PatientId.ToString();
        //    string obj = string.Empty;
        //    obj = "Bill Cum Receipt";

        //    List<ReportParameter> opparamList = new List<ReportParameter>();

        //    opparamList.Add(new ReportParameter("PRINT_TYPE", "Y", false));
        //    opparamList.Add(new ReportParameter("IP_TRANSACTION_ID", Tid.ToString(), false));
        //    opparamList.Add(new ReportParameter("IP_BILL_ID", opbillid.ToString(), false));
        //    opparamList.Add(new ReportParameter("IP_PATIENT_ID", patientId, false));
        //    opparamList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    opparamList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    opparamList.Add(new ReportParameter("Title", obj, false));
        //    opparamList.Add(new ReportParameter("showprintdt", false.ToString(), false));
        //    IDocFormatMap opimap = new EzHms.Services.DocFormatMapping();
        //    DocFormatCollection opdcol = opimap.GetDocFormat(86);
        //    foreach (EzHms.ModelEntity.DocFormatMapping dmp in opdcol)
        //        ReportName = dmp.DOC_NAME_DESC.ToString();
        //    string[] str = ReportName.Split(',');

        //    string Con = string.Empty;
        //    string oppath = string.Empty;
        //    if (str.Length > 1)
        //    {
        //        if (str[1] != null && str[1] != string.Empty)
        //        {
        //            oppath = str[1];
        //            if (str.Length > 6)
        //                Con = str[5];
        //        }
        //    }
        //    if (Con == "N")
        //        opparamList.Add(new ReportParameter("IsLogoVisible", false.ToString(), false));

        //    else //if (Con == "Y")
        //        opparamList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //    string copies = !string.IsNullOrEmpty(hdnNoOfCopies) ? hdnNoOfCopies : "0";
        //    if (oppath == "OPReport_NoOfServicePerPage")
        //        opparamList.Add(new ReportParameter("ServiceCntPerPage", copies, true));
        //    oppath = !string.IsNullOrEmpty(oppath) ? oppath : "OPReport_A4Half";
        //    oppath = "OPReport_A4Half";
        //    string reportPath3 = "/HIMSReprots/" + oppath;
        //    rptlistobject.Add(opparamList);
        //    rptPaths.Add(reportPath3);
        //    url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + reportPath3 + "&tid332=" + opbillid.ToString() + ",";

        //}
        //#endregion
        //string BillPackegelistReceipt = "";
        //if (pkg_chk_req == "Y")
        //{
        //    string ReportName_pkg = string.Empty;
        //    string obj_pkg = "Report Collection Slip";
        //    List<ReportParameter> paramList1 = new List<ReportParameter>();
        //    paramList1.Add(new ReportParameter("IP_BILL_ID", opbillid.ToString(), false));
        //    paramList1.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList1.Add(new ReportParameter("Print_by", SessionHandler.UserName, false));
        //    paramList1.Add(new ReportParameter("Report_Name", obj_pkg, false));
        //    BillPackegelistReceipt = "/HIMSReprots/Sub_Package_CheckList";
        //    rptlistobject.Add(paramList1);
        //    rptPaths.Add(BillPackegelistReceipt);
        //    url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + BillPackegelistReceipt + "&tid332=" + opbillid.ToString() + ",";

        //}
        ///*if (clientName != "Yashoda" && clientName != "YASHODA") //No need for any client requisition slip
        //{
        //    List<ReportParameter> paramList2 = new List<ReportParameter>();
        //    paramList2.Add(new ReportParameter("IP_BILL_ID", opbillid.ToString(), false));
        //    paramList2.Add(new ReportParameter("printedby", SessionHandler.UserName, false));
        //    paramList2.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList2.Add(new ReportParameter("Islogovisible", true.ToString(), false));
        //    paramList2.Add(new ReportParameter("IsHeadervisible", true.ToString(), false));
        //    paramList2.Add(new ReportParameter("PRINT_TYPE", "Y", false));
        //    // string SYSTEM_IP = System.Environment.MachineName.ToString();
        //    string reportPath_srs = "/HIMSReprots/SUB_Service_Requisition_Slip";
        //    rptlistobject.Add(paramList2);
        //    rptPaths.Add(reportPath_srs);
        //    url += "../Reports/HIMSReportViewer.aspx?count=" + count++ + "&rptPath=" + reportPath_srs + "&tid332=" + opbillid.ToString() + ",";
        //}*/
        //SessionHandler.REPORTPARAMS_LIST = rptlistobject;
        //SessionHandler.ReportPaths = rptPaths;

        //IAutoGenerateCD autoCDSer = null;
        //autoCDSer = new EzHms.Services.AutoGenerateCD();
        //string new_umr_no = autoCDSer.GetAutoGenerateCD(DALConstants.PATIENT_TABLE);
        //string data = url + "$%$" + new_umr_no;
        //return data;
        return string.Empty;
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string getnewumr()
    {
        IAutoGenerateCD autoCDSer = null;
        autoCDSer = new EzHms.Services.AutoGenerateCD();
        string new_umr_no = autoCDSer.GetAutoGenerateCD(DALConstants.PATIENT_TABLE);
        return new_umr_no;
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static bool DeleteStatus(string srvid)
    {
        //EzHms.ModelEntity.PatientRegistration obj = new EzHms.ModelEntity.PatientRegistration();
        //obj.BILL_SRV_ID = srvid;
        //obj.STATUS = "Y";
        //DBPatientRegistration chnt = new DBPatientRegistration();
        bool _Coll = true; //chnt.GET_DEL_STATUS(obj);
        return _Coll;
    }
}

public class ServiceConcesion
{

    private string total_dis_amt = string.Empty;
    public string TOTAL_DIS_AMT
    {
        get { return total_dis_amt; }
        set { total_dis_amt = value; }
    }
    private string dis_amt = string.Empty;
    public string DIS_AMT
    {
        get { return dis_amt; }
        set { dis_amt = value; }
    }
    private string percentage = string.Empty;
    public string PERCENTAGE
    {
        get { return percentage; }
        set { percentage = value; }
    }
    private string price = string.Empty;
    public string PRICE
    {
        get { return price; }
        set { price = value; }
    }
    private string service_cd = string.Empty;
    public string SERVICE_CD
    {
        get { return service_cd; }
        set { service_cd = value; }
    }
    private string service_dispname = string.Empty;
    public string SERVICE_DISPNAME
    {
        get { return service_dispname; }
        set { service_dispname = value; }
    }

    private string net_amount = string.Empty;
    public string NET_AMOUNT
    {
        get { return net_amount; }
        set { net_amount = value; }
    }
    private string concession_percent = string.Empty;
    public string CONCESSION_PERCENT
    {
        get { return concession_percent; }
        set { concession_percent = value; }
    }

    private string concession_amount = string.Empty;
    public string CONCESSION_AMOUNT
    {
        get { return concession_amount; }
        set { concession_amount = value; }
    }
    private string tot_dis_amt = string.Empty;
    public string TOT_DIS_AMT
    {
        get { return tot_dis_amt; }
        set { tot_dis_amt = value; }
    }
    private string tot_percentage = string.Empty;
    public string TOT_PERCENTAGE
    {
        get { return tot_percentage; }
        set { tot_percentage = value; }
    }

    private string rate = string.Empty;

    public string RATE
    {
        get { return rate; }
        set { rate = value; }
    }

    private string umr_no = string.Empty;

    public string UMR_NO
    {
        get { return umr_no; }
        set { umr_no = value; }
    }
    private string ward_group_id = string.Empty;

    public string WARD_GROUP_ID
    {
        get { return ward_group_id; }
        set { ward_group_id = value; }
    }
    private string amount = string.Empty;

    public string AMOUNT
    {
        get { return amount; }
        set { amount = value; }
    }

    private string service_id = string.Empty;

    public string SERVICE_ID
    {
        get { return service_id; }
        set { service_id = value; }
    }
    private string department_id = string.Empty;

    public string DEPARTMENT_ID
    {
        get { return department_id; }
        set { department_id = value; }
    }
    private string doctorid = string.Empty;

    public string DOCTORID
    {
        get { return doctorid; }
        set { doctorid = value; }
    }


    private string quantity = string.Empty;

    public string QUANTITY
    {
        get { return quantity; }
        set { quantity = value; }
    }

    private string service_type_id = string.Empty;

    public string SERVICE_TYPE_ID
    {
        get { return service_type_id; }
        set { service_type_id = value; }
    }
    private string service_group_id = string.Empty;

    public string SERVICE_GROUP_ID
    {
        get { return service_group_id; }
        set { service_group_id = value; }
    }
    private string package_ids = string.Empty;

    public string PACKAGE_IDS
    {
        get { return package_ids; }
        set { package_ids = value; }
    }

    private string selected_id = string.Empty;

    public string SELECTED_ID
    {
        get { return selected_id; }
        set { selected_id = value; }
    }

    private string selected_type_id = string.Empty;

    public string SELECTED_TYPE_ID
    {
        get { return selected_type_id; }
        set { selected_type_id = value; }
    }

    private string doctor_id = string.Empty;

    public string DOCTOR_ID
    {
        get { return doctor_id; }
        set { doctor_id = value; }
    }
    private string event_id = string.Empty;

    public string EVENT_ID
    {
        get { return event_id; }
        set { event_id = value; }
    }
    private string event_track_id = string.Empty;

    public string EVENT_TRACK_ID
    {
        get { return event_track_id; }
        set { event_track_id = value; }
    }
    private string reg_dt = string.Empty;

    public string REG_DT
    {
        get { return reg_dt; }
        set { reg_dt = value; }
    }
    private string expiry_dt = string.Empty;

    public string EXPIRY_DT
    {
        get { return expiry_dt; }
        set { expiry_dt = value; }
    }

    private string title_cd = string.Empty;

    public string TITLE_CD
    {
        get { return title_cd; }
        set { title_cd = value; }
    }

    private string first_name = string.Empty;

    public string FIRST_NAME
    {
        get { return first_name; }
        set { first_name = value; }
    }
    private string middle_name = string.Empty;

    public string MIDDLE_NAME
    {
        get { return middle_name; }
        set { middle_name = value; }
    }
    private string last_name = string.Empty;

    public string LAST_NAME
    {
        get { return last_name; }
        set { last_name = value; }
    }

    private string display_name = string.Empty;

    public string DISPLAY_NAME
    {
        get { return display_name; }
        set { display_name = value; }
    }

    private string res_person_name = string.Empty;

    public string RES_PERSON_NAME
    {
        get { return res_person_name; }
        set { res_person_name = value; }
    }

    private string res_person_rel_id = string.Empty;

    public string RES_PERSON_REL_ID
    {
        get { return res_person_rel_id; }
        set { res_person_rel_id = value; }
    }

    private string gender_cd = string.Empty;

    public string GENDER_CD
    {
        get { return gender_cd; }
        set { gender_cd = value; }
    }

    private string marital_status_cd = string.Empty;

    public string MARITAL_STATUS_CD
    {
        get { return marital_status_cd; }
        set { marital_status_cd = value; }
    }

    private string mother_maiden_name = string.Empty;

    public string MOTHER_MAIDEN_NAME
    {
        get { return mother_maiden_name; }
        set { mother_maiden_name = value; }
    }

    private string dob = string.Empty;

    public string DOB
    {
        get { return dob; }
        set { dob = value; }
    }

    private string patient_type_cd = string.Empty;

    public string PATIENT_TYPE_CD
    {
        get { return patient_type_cd; }
        set { patient_type_cd = value; }
    }

    private string occupation_cd = string.Empty;

    public string OCCUPATION_CD
    {
        get { return occupation_cd; }
        set { occupation_cd = value; }
    }

    private string nationality_cd = string.Empty;

    public string NATIONALITY_CD
    {
        get { return nationality_cd; }
        set { nationality_cd = value; }
    }
    private string religion_cd = string.Empty;

    public string RELIGION_CD
    {
        get { return religion_cd; }
        set { religion_cd = value; }
    }

    private string blood_group_cd = string.Empty;

    public string BLOOD_GROUP_CD
    {
        get { return blood_group_cd; }
        set { blood_group_cd = value; }
    }
    private string id_proof_id = string.Empty;

    public string ID_PROOF_ID
    {
        get { return id_proof_id; }
        set { id_proof_id = value; }
    }

    private string id_proof_name = string.Empty;

    public string ID_PROOF_NAME
    {
        get { return id_proof_name; }
        set { id_proof_name = value; }
    }

    private string language_id = string.Empty;

    public string LANGUAGE_ID
    {
        get { return language_id; }
        set { language_id = value; }
    }

    private string mobile_no1 = string.Empty;

    public string MOBILE_NO1
    {
        get { return mobile_no1; }
        set { mobile_no1 = value; }
    }

    private string mobile_no2 = string.Empty;

    public string MOBILE_NO2
    {
        get { return mobile_no2; }
        set { mobile_no2 = value; }
    }

    private string email_id = string.Empty;

    public string EMAIL_ID
    {
        get { return email_id; }
        set { email_id = value; }
    }

    private string address1 = string.Empty;

    public string ADDRESS1
    {
        get { return address1; }
        set { address1 = value; }
    }
    private string address2 = string.Empty;

    public string ADDRESS2
    {
        get { return address2; }
        set { address2 = value; }
    }

    private string zipcode = string.Empty;

    public string ZIPCODE
    {
        get { return zipcode; }
        set { zipcode = value; }
    }
    private string rsrc_cd = string.Empty;

    public string RSRC_CD
    {
        get { return rsrc_cd; }
        set { rsrc_cd = value; }
    }
    private string cons_fee = string.Empty;

    public string CONS_FEE
    {
        get { return cons_fee; }
        set { cons_fee = value; }
    }

    private string org_cd = string.Empty;

    public string ORG_CD
    {
        get { return org_cd; }
        set { org_cd = value; }
    }

    private string loc_cd = string.Empty;

    public string LOC_CD
    {
        get { return loc_cd; }
        set { loc_cd = value; }
    }

    private string mig_id = string.Empty;

    public string MIG_ID
    {
        get { return mig_id; }
        set { mig_id = value; }
    }

    private string consultation_type = string.Empty;

    public string CONSULTATION_TYPE
    {
        get { return consultation_type; }
        set { consultation_type = value; }
    }

    private string consultationno = string.Empty;

    public string CONSULTATIONNO
    {
        get { return consultationno; }
        set { consultationno = value; }
    }

    private string status = string.Empty;

    public string STATUS
    {
        get { return status; }
        set { status = value; }
    }

    private string slot_id = string.Empty;

    public string SLOT_ID
    {
        get { return slot_id; }
        set { slot_id = value; }
    }

    private string consultation_dt = string.Empty;

    public string CONSULTATION_DT
    {
        get { return consultation_dt; }
        set { consultation_dt = value; }
    }

    private string revists = string.Empty;

    public string REVISTS
    {
        get { return revists; }
        set { revists = value; }
    }
    private string visit_validity_dt = string.Empty;

    public string VISIT_VALIDITY_DT
    {
        get { return visit_validity_dt; }
        set { visit_validity_dt = value; }
    }
    private string _HC_CARD_NO;

    public string HC_CARD_NO
    {
        get { return _HC_CARD_NO; }
        set { _HC_CARD_NO = value; }
    }
    private int _HC_CARD_DET_ID;

    public int HC_CARD_DET_ID
    {
        get { return _HC_CARD_DET_ID; }
        set { _HC_CARD_DET_ID = value; }
    }
    private int _IP_REC_TYPE_ID;

    public int IP_REC_TYPE_ID
    {
        get { return _IP_REC_TYPE_ID; }
        set { _IP_REC_TYPE_ID = value; }
    }

    private int _REG_TYPE;

    public int REG_TYPE
    {
        get { return _REG_TYPE; }
        set { _REG_TYPE = value; }
    }

    private string _RULE_DEFINE_BY;

    public string RULE_DEFINE_BY
    {
        get { return _RULE_DEFINE_BY; }
        set { _RULE_DEFINE_BY = value; }
    }
    private int _HEALTH_CARD_DET_ID;

    public int HEALTH_CARD_DET_ID
    {
        get { return _HEALTH_CARD_DET_ID; }
        set { _HEALTH_CARD_DET_ID = value; }
    }
    private int _DEFINE_BY_ID;

    public int DEFINE_BY_ID
    {
        get { return _DEFINE_BY_ID; }
        set { _DEFINE_BY_ID = value; }
    }
    private int _HEALTH_CARD_ID;

    public int HEALTH_CARD_ID
    {
        get { return _HEALTH_CARD_ID; }
        set { _HEALTH_CARD_ID = value; }
    }
    private int _CNCSN_RULE_ID;

    public int CNCSN_RULE_ID
    {
        get { return _CNCSN_RULE_ID; }
        set { _CNCSN_RULE_ID = value; }
    }
}
public class ServiceConcesionCollection : SortableCollectionBase
{
    public int Add(ServiceConcesion _billh)
    {
        return List.Add(_billh);
    }

    public ServiceConcesion GetList(int position)
    {
        return (ServiceConcesion)InnerList[position];
    }
}
public class PatientRegistration1 
{
   
   
 
    public string NEWROW_ID { get; set; }
    public string REF_TYPE { get; set; }
    public string REF_NO { get; set; }
    public string RSRC_NAME { get; set; }
    public string SPECIALIZATION_NAME { get; set; }
    public string DOCTOR_ID { get; set; }
    public string APMNT_DT { get; set; }
    public string SLOT_TIME { get; set; }
    public string BILL_SRV_ID { get; set; }
    public string PRICE { get; set; }
    public string DOCTOR_REV_NO { get; set; }
    public string FREE_FOLLOWUP_DOCTOR_ID { get; set; }
    public string DEPARTMENT_NAME { get; set; }
    public string SOURCE_TYPE { get; set; }
    public string SOURCE_TIME { get; set; }
    public string REMARKS { get; set; }
    public string APT_SLOTS_ID { get; set; }
    public string DEPARTMENT_ID { get; set; }
    public string DOCTOR_CD { get; set; }
    public int BILL_ID { get; set; }
    public string Consultantname { get; set; }
    public string REFERRED_BY { get; set; }
    public string SLOT_TOKEN_NO { get; set; }
    public string EVENT_TRACK_ID { get; set; }
    public string CREATE_BY { get; set; }
    public string CREATE_DT { get; set; }
    public string REF_ID_N { get; set; }
  
    
}
public class DBServices1 : DBExecuteDataReader
{

    private Database dbSvc = null;
    private DbCommand cmd = null;
    private DataAccessLayer _dblayer = null;
    private PatientRegistrationCollection _collection = null;

    public CollectionBase GetConsultDetails(GridPaging gpage, out int total_records)
    {
        total_records = 0;
        try
        {
            DataAccessLayer _dblayer = new DataAccessLayer();
            Database dbSvc = _dblayer.DBaseFactory;
            DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_APPOINTMENTS");
            if (gpage.COLUMN_NAME != string.Empty)
                dbSvc.AddInParameter(cmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
            if (gpage.PREFIX_TEXT != string.Empty)
                dbSvc.AddInParameter(cmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
            if (gpage.ADVANCESEARCH != string.Empty)
                dbSvc.AddInParameter(cmd, DALConstants.ADVANCE_SEARCH_PARAM, DbType.String, gpage.ADVANCESEARCH);
            dbSvc.AddInParameter(cmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
            dbSvc.AddInParameter(cmd, DALConstants.PAGENUM_PARAM, DbType.String, gpage.CURRENT_PAGE);
            dbSvc.AddOutParameter(cmd, DALConstants.OP_COUNT_PARM, DbType.Int32, total_records);
            EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(GenerateConsultColl);
            CollectionBase _cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
            total_records = Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OP_COUNT_PARM));
            return _cBase;

        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetConsultDetails").Name;
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
            return null;
        }
    }
    private CollectionBase GenerateConsultColl(IDataReader returnData)
    {
        PatientRegistration1 _objRegModel = null;
        PatientRegistrationCollection _objColl = new PatientRegistrationCollection();
        try
        {
            while (returnData.Read())
            {

                _objRegModel = new PatientRegistration1();
                _objRegModel.NEWROW_ID = !DBNull.Value.Equals(returnData["ROW"]) ? Convert.ToString(returnData["ROW"]) : string.Empty;
                _objRegModel.REF_TYPE = !DBNull.Value.Equals(returnData["REF_TYPE"]) ? Convert.ToString(returnData["REF_TYPE"]) : string.Empty;
                _objRegModel.REF_NO = !DBNull.Value.Equals(returnData["REF_NO"]) ? Convert.ToString(returnData["REF_NO"]) : string.Empty;
                _objRegModel.RSRC_NAME = !DBNull.Value.Equals(returnData["RSRC_NAME"]) ? Convert.ToString(returnData["RSRC_NAME"]) : string.Empty;
                _objRegModel.SPECIALIZATION_NAME = !DBNull.Value.Equals(returnData["SPECIALIZATION_NAME"]) ? Convert.ToString(returnData["SPECIALIZATION_NAME"]) : string.Empty;
                _objRegModel.DOCTOR_ID = !DBNull.Value.Equals(returnData["DOCTOR_ID"]) ? Convert.ToString(returnData["DOCTOR_ID"]) : "0";
                _objRegModel.DEPARTMENT_ID = !DBNull.Value.Equals(returnData["DEPARTMENT_ID"]) ? Convert.ToString(returnData["DEPARTMENT_ID"]) : "0";
                _objRegModel.DOCTOR_CD = !DBNull.Value.Equals(returnData["DOCTOR_CD"]) ? Convert.ToString(returnData["DOCTOR_CD"]) : string.Empty;
                _objRegModel.APMNT_DT = !DBNull.Value.Equals(returnData["APMNT_DT"]) ? Convert.ToString(returnData["APMNT_DT"]) : string.Empty;
                _objRegModel.SLOT_TIME = !DBNull.Value.Equals(returnData["SLOT_TIME"]) ? Convert.ToString(returnData["SLOT_TIME"]) : string.Empty;
                _objRegModel.BILL_ID = !DBNull.Value.Equals(returnData["BILL_ID"]) ? Convert.ToInt32(returnData["BILL_ID"]) : 0;
                _objRegModel.BILL_SRV_ID = !DBNull.Value.Equals(returnData["BILL_SRV_ID"]) ? Convert.ToString(returnData["BILL_SRV_ID"]) : string.Empty;
                _objRegModel.PRICE = !DBNull.Value.Equals(returnData["RATE"]) ? (returnData["RATE"]).ToString() : "0";
                _objRegModel.DOCTOR_REV_NO = !DBNull.Value.Equals(returnData["DOCTOR_REV_NO"]) ? (returnData["DOCTOR_REV_NO"]).ToString() : "0";
                _objRegModel.FREE_FOLLOWUP_DOCTOR_ID = !DBNull.Value.Equals(returnData["FREE_FOLLOWUP_DOCTOR_ID"]) ? (returnData["FREE_FOLLOWUP_DOCTOR_ID"]).ToString() : "0";
                _objRegModel.DEPARTMENT_NAME = !DBNull.Value.Equals(returnData["DEPARTMENT_NAME"]) ? (returnData["DEPARTMENT_NAME"]).ToString() : "";
                if (_objRegModel.DOCTOR_ID == "0" || Convert.ToInt32(_objRegModel.DOCTOR_ID) == 0)
                {
                    _objRegModel.Consultantname = !DBNull.Value.Equals(returnData["DEPARTMENT_NAME"]) ? (returnData["DEPARTMENT_NAME"]).ToString() : "";
                }
                else
                {
                    _objRegModel.Consultantname = !DBNull.Value.Equals(returnData["RSRC_NAME"]) ? (returnData["RSRC_NAME"]).ToString() : "";
                }
                _objRegModel.REFERRED_BY = !DBNull.Value.Equals(returnData["FROM_DOCTOR_NAME"]) ? (returnData["FROM_DOCTOR_NAME"]).ToString() : "";
                _objRegModel.SLOT_TOKEN_NO = !DBNull.Value.Equals(returnData["SLOT_TOKEN_NO"]) ? (returnData["SLOT_TOKEN_NO"]).ToString() : "";
                _objRegModel.EVENT_TRACK_ID = !DBNull.Value.Equals(returnData["EVENT_TRACK_ID"]) ? Convert.ToString(returnData["EVENT_TRACK_ID"]) : "0";
                _objRegModel.SOURCE_TYPE = !DBNull.Value.Equals(returnData["SOURCE_TYPE"]) ? (returnData["SOURCE_TYPE"]).ToString() : "";
                _objRegModel.SOURCE_TIME = !DBNull.Value.Equals(returnData["SOURCE_TIME"]) ? (returnData["SOURCE_TIME"]).ToString() : "";
                _objRegModel.REMARKS = !DBNull.Value.Equals(returnData["REMARKS"]) ? (returnData["REMARKS"]).ToString() : "";
                _objRegModel.CREATE_BY = !DBNull.Value.Equals(returnData["CREATE_BY"]) ? (returnData["CREATE_BY"]).ToString() : "";
                _objRegModel.CREATE_DT = !DBNull.Value.Equals(returnData["CREATE_DT"]) ? (returnData["CREATE_DT"]).ToString() : "";
                _objRegModel.REF_ID_N = !DBNull.Value.Equals(returnData["REF_ID_N"]) ? (returnData["REF_ID_N"]).ToString() : "0";
                _objRegModel.APT_SLOTS_ID = !DBNull.Value.Equals(returnData["APT_SLOTS_ID"]) ? (returnData["APT_SLOTS_ID"]).ToString() : "0";


                _objColl.Add(_objRegModel);
            }

            return (CollectionBase)_objColl;

        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateConsultColl").Name;
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
        }
        return null;
    }
    public DataSet Getconsutationcount(string doctor_count_id)
    {
        EzHms.DataAccessObject.DataAccessLayer dbLayer = new EzHms.DataAccessObject.DataAccessLayer();
        System.Data.Common.DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DOCTOR_CONSULTATIONS_AS_PER_DAY");
        try
        {

            dbLayer.AddInParameter(dbCmd, "@IP_DOCTOR_ID", DbType.String, doctor_count_id);

            if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
            {
                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                dbLayer.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
            }

            DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
            return cbase;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceConcesionPrice").Name;
            ErrorLoger.InsertErrorLogger(ex, 1207, 1);

        }
        return null;
    }
    public DataSet GetServiceConcesionPrice(ServiceConcesion _objModel, out int total_records)
    {
        total_records = 0;
        EzHms.DataAccessObject.DataAccessLayer dbLayer = new EzHms.DataAccessObject.DataAccessLayer();
        System.Data.Common.DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_AMOUNT_CONCESSION");
        try
        {
            dbLayer.AddInParameter(dbCmd, "@IP_SELECTED_TYPE_ID", DbType.String, _objModel.SELECTED_TYPE_ID);
            dbLayer.AddInParameter(dbCmd, "@IP_SELECTED_ID", DbType.String, _objModel.SELECTED_ID);
            dbLayer.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, _objModel.UMR_NO);
            dbLayer.AddInParameter(dbCmd, "@IP_DOCTOR_ID", DbType.String, _objModel.DOCTOR_ID);
            dbLayer.AddInParameter(dbCmd, "@IP_SERVICE_TYPE_ID", DbType.String, _objModel.SERVICE_TYPE_ID);
            dbLayer.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.String, _objModel.SERVICE_ID);
            dbLayer.AddInParameter(dbCmd, "@IP_PATIENT_NAME", DbType.String, _objModel.PERCENTAGE);
            dbLayer.AddInParameter(dbCmd, "@IP_COMPANY_ID", DbType.Int32, Convert.ToInt32(_objModel.ADDRESS1));
            dbLayer.AddInParameter(dbCmd, "@IP_QUANTITY", DbType.String, _objModel.QUANTITY);
            dbLayer.AddInParameter(dbCmd, "@IP_PRICE", DbType.String, _objModel.RATE);
            dbLayer.AddInParameter(dbCmd, "@IP_HEALTH_CARD_DET_ID", DbType.String, _objModel.HEALTH_CARD_DET_ID);
            if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
            {
                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                dbLayer.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, sessionid);
            }
            //EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader SqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(GetHealthCardServiceWiseCon);
            //CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, SqlData);
            // return (ServiceConcesionCollection)_coll;
            DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
            return cbase;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceConcesionPrice").Name;
            ErrorLoger.InsertErrorLogger(ex, 1207, 1);

        }
        return null;
    }
    public DataSet GetLevelCollection()
    {
        DataAccessLayer dbLayer = new DataAccessLayer();
        Database dBase = dbLayer.DBaseFactory;
        DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CONSULTATIONTYPES");
        try
        {
            dbLayer.AddInParameter(dbCmd, DALConstants.IP_SESSION_ID_PARAM, DbType.Int32, SessionHandler.DBSESSION_ID);
            return dbLayer.ExecuteDataSet(dbCmd);
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLevelCollection").Name;
            ErrorLoger.InsertErrorLogger(ex, 809, 1);
        }
        return null;

    }
    public DataSet Get_Dscnttype()
    {
        DataAccessLayer dbLayer = new DataAccessLayer();
        Database dBase = dbLayer.DBaseFactory;
        DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DYNAMIC_ENTITY");
        try
        {
            dbLayer.AddInParameter(dbCmd, "@IP_ENTITY_TABLE", DbType.String, "DISCOUNT_TYPE");
            dbLayer.AddInParameter(dbCmd, DALConstants.IP_SESSION_ID_PARAM, DbType.Int32, SessionHandler.DBSESSION_ID);
            return dbLayer.ExecuteDataSet(dbCmd);
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Dscnttype").Name;
            ErrorLoger.InsertErrorLogger(ex, 809, 1);
        }
        return null;

    }
    //private patEmpInfoCollection _empCollection = null;
    public DataSet GetPaymentModeDb(string paymentmodeid)
    {
        DataAccessLayer dbLayer = new DataAccessLayer();
        Database dBase = dbLayer.DBaseFactory;
        DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_APP_PAYMENT_GROUP_ID");
        try
        {
            dbLayer.AddInParameter(dbCmd, "@IP_APP_PAYMENT_GROUP_ID", DbType.String, paymentmodeid);
            dbLayer.AddInParameter(dbCmd, DALConstants.IP_SESSION_ID_PARAM, DbType.Int32, SessionHandler.DBSESSION_ID);
            return dbLayer.ExecuteDataSet(dbCmd);
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetPaymentModeDb").Name;
            ErrorLoger.InsertErrorLogger(ex, 809, 1);
        }
        return null;

    }
    public bool InsertRegXml(ReceiptMaster _receipt, out int _billid, out int _patid, out int _tranid, out string _regbillno, out string _conbillid, out string _opbillid, out int CausltyBid, out string umr_no, out string trans_no, string pkgparam, out string alert, out string op_reg_no, out int reg_bill_id, string hck_pkg, string ap_type, string hc_det_id, string utilized_amt, out string grp_bill_no, out string ex11)
    {
        alert = string.Empty;
        _billid = 0; bool _status = false; int count = 0;
        _patid = 0; _tranid = 0; CausltyBid = 0; umr_no = ""; trans_no = "";
        _regbillno = string.Empty; _conbillid = string.Empty; _opbillid = string.Empty;
        op_reg_no = string.Empty;
        grp_bill_no = string.Empty;
        reg_bill_id = 0;
        try
        {
            DataAccessLayer _dbLayer = new DataAccessLayer();
            Database dBase = _dbLayer.DBaseFactory;
            DbCommand dbCmd = _dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_PATIENT_REG_CON_OPBILL_XML_NEW");
            dBase.AddInParameter(dbCmd, "@IP_XML_DATA", DbType.String, _receipt.XMLROOT);
            dBase.AddInParameter(dbCmd, "@IP_PATIENT_NO", DbType.String, _receipt.PAT_NO);
            dBase.AddInParameter(dbCmd, "@IP_PATIENT_IMAGE", DbType.Binary, _receipt.PATIENT_IMAGE_XML);
            dBase.AddInParameter(dbCmd, "@IP_REG_ID", DbType.String, "0");
            dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, _receipt.ISCORPORATE);
            dBase.AddInParameter(dbCmd, "@IP_APMNT_PAT_ID", DbType.Int32, _receipt.APMNT_PAT_ID);
            dBase.AddInParameter(dbCmd, "@IP_ORDER_ID", DbType.String, _receipt.ORDER_ID);
            dBase.AddInParameter(dbCmd, "@IP_IS_OLD", DbType.String, _receipt.IS_OLD);
            dBase.AddInParameter(dbCmd, "@IP_ISHCPKG", DbType.String, pkgparam);
            dBase.AddInParameter(dbCmd, "@IP_HCK", DbType.String, hck_pkg);
            dBase.AddInParameter(dbCmd, "@IP_APPTYPE", DbType.String, ap_type);
            if (hc_det_id != "0" && hc_det_id != "")
            {
                dBase.AddInParameter(dbCmd, "@IP_HEALTH_CARD_DET_ID", DbType.Int32, Convert.ToInt32(hc_det_id));
            }
            if (utilized_amt != "0" && utilized_amt != "")
            {
                dBase.AddInParameter(dbCmd, "@IP_UTILIZED_AMOUNT", DbType.Double, float.Parse(utilized_amt));
            }

            dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, _patid);
            dBase.AddOutParameter(dbCmd, "@OP_BILL_ID", DbType.Int32, count);
            dBase.AddOutParameter(dbCmd, "@OP_COUNT_PAT_ID", DbType.Int32, count);
            dBase.AddOutParameter(dbCmd, "@OP_COUNT_TRAN_ID", DbType.Int32, count);
            dBase.AddOutParameter(dbCmd, "@OP_COUNT_REG_BILL_NO", DbType.String, 255);
            dBase.AddOutParameter(dbCmd, "@OP_COUNT_CON_BILL_ID", DbType.String, 255);
            dBase.AddOutParameter(dbCmd, "@OP_COUNT_OPBILL_BILL_ID", DbType.String, 255);
            //dBase.AddOutParameter(dbCmd, "@OP_QUICK_BILL_ID", DbType.Int32, count);


            dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, _receipt.SESSION_ID);
            dBase.AddOutParameter(dbCmd, "@OP_UMR_NO", DbType.String, 50);
            dBase.AddOutParameter(dbCmd, "@OP_TRAN_NO", DbType.String, 50);
            dBase.AddOutParameter(dbCmd, "@OP_MESSAGE", DbType.String, 50);
            dBase.AddOutParameter(dbCmd, "@OP_REG_BILL_NO", DbType.String, 50);
            dBase.AddOutParameter(dbCmd, "@OP_GRP_BILL_NO", DbType.String, 50);

            // patid = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT"));
            dbCmd.CommandTimeout = 50000;
            _status = dBase.ExecuteNonQuery(dbCmd) > 0;
            _billid = !string.IsNullOrEmpty(dBase.GetParameterValue(dbCmd, "@OP_COUNT").ToString()) ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT")) : 0;
            _patid = !string.IsNullOrEmpty(dBase.GetParameterValue(dbCmd, "@OP_COUNT_PAT_ID").ToString()) ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT_PAT_ID")) : 0;
            _tranid = !string.IsNullOrEmpty(dBase.GetParameterValue(dbCmd, "@OP_COUNT_TRAN_ID").ToString()) ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT_TRAN_ID")) : 0;

            grp_bill_no = (dBase.GetParameterValue(dbCmd, "@OP_GRP_BILL_NO")).ToString();
            _regbillno = dBase.GetParameterValue(dbCmd, "@OP_COUNT_REG_BILL_NO").ToString();
            _conbillid = dBase.GetParameterValue(dbCmd, "@OP_COUNT_CON_BILL_ID").ToString();
            _opbillid = dBase.GetParameterValue(dbCmd, "@OP_COUNT_OPBILL_BILL_ID").ToString();
            umr_no = (dBase.GetParameterValue(dbCmd, "@OP_UMR_NO")).ToString();
            trans_no = (dBase.GetParameterValue(dbCmd, "@OP_TRAN_NO")).ToString();
            alert = (dBase.GetParameterValue(dbCmd, "@OP_MESSAGE")).ToString() != "" ? (dBase.GetParameterValue(dbCmd, "@OP_MESSAGE")).ToString() : "";
            op_reg_no = (dBase.GetParameterValue(dbCmd, "@OP_REG_BILL_NO")).ToString();
            ex11 = "";
            reg_bill_id = !string.IsNullOrEmpty(dBase.GetParameterValue(dbCmd, "@OP_BILL_ID").ToString()) ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_BILL_ID")) : 0;
            //reg_bill_id = Convert.ToInt32((dBase.GetParameterValue(dbCmd, "@OP_BILL_ID")));
            //CausltyBid = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_QUICK_BILL_ID"));
            return _status;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertRegXml").Name;
            //ErrorLoger.InsertErrorLogger(ex, 1205, 1);
            ex11 = ex.Message;
            return false;
        }
    }
    public DataSet Get_And_Fee_Details(PatientRegistration _objModel)
    {
        DataAccessLayer _dbAccessLayer = new DataAccessLayer();
        DbCommand _dbCmd = _dbAccessLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CHECK_REVISIT");
        // DbCommand _dbCmd = _dbAccessLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CHECK_REVISIT_DUM");
        try
        {
            _dbAccessLayer.AddInParameter(_dbCmd, DALConstants.PATIENT_ID_PARAM, DbType.Int32, _objModel.PATIENT_ID);
            _dbAccessLayer.AddInParameter(_dbCmd, DALConstants.DOCTOR_ID_PARAM, DbType.Int32, _objModel.Doctor_ID);
            _dbAccessLayer.AddInParameter(_dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, _objModel.PATIENT_CLASS_ID);
            if (!string.IsNullOrEmpty(_objModel.COMPANY_ID))
                _dbAccessLayer.AddInParameter(_dbCmd, DALConstants.COMPANY_ID_PARM, DbType.String, _objModel.COMPANY_ID);
            if (!string.IsNullOrEmpty(_objModel.TARIFF_ID.ToString()))
                _dbAccessLayer.AddInParameter(_dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, _objModel.TARIFF_ID);
            _dbAccessLayer.AddInParameter(_dbCmd, "@IP_SESSION_ID", DbType.Int32, SessionHandler.DBSESSION_ID);
            DataSet cbase = _dbAccessLayer.ExecuteDataSet(_dbCmd);
            return cbase;

        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DataReader").Name;
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
            return null;
        }



    }

    public DataSet Get_Consolidate_Patient_Details_View(string GrpBillno, int TranId)
    {
        try
        {
            _dblayer = new DataAccessLayer();
            dbSvc = _dblayer.DBaseFactory;
            cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REG_CON_OPBILLS_GETTING");
            dbSvc.AddInParameter(cmd, "@IP_GRP_BILL_NO", DbType.String, GrpBillno);
            dbSvc.AddInParameter(cmd, "@IP_TRANSACTION_ID", DbType.Int32, TranId);
            dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, SessionHandler.DBSESSION_ID);
            DataSet cbase = _dblayer.ExecuteDataSet(cmd);
            return cbase;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Consolidate_Patient_Details_View").Name;
            ErrorLoger.InsertErrorLogger(ex, 201, 1);
            return null;
        }
    }
    protected override CollectionBase GenerateCollection(IDataReader returnData)
    {
        throw new NotImplementedException();
    }


}

