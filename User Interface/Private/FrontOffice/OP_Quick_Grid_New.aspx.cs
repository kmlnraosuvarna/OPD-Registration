using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using EzHms.DataAccessObject;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using Microsoft.Reporting.WebForms;
using EzHms.ModelEntity;
using EzHms.ModelEntity2;
using System.Collections;
using System.Web.Services;
using EzHms.Abstract;
using System.Web.Script.Serialization;
using Newtonsoft.Json;

public partial class Private_FrontOffice_OP_Quick_Grid_New : MasterClass
{
    IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
   // private IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (SessionHandler.DBSESSION_ID > 0)
        {
            SessionHandler.REPORTPARAMS_LIST = null;
            SessionHandler.ReportPaths = null;
            hdnbarcodepath.Value = "barcode://";
            hdnDoctorPrescrption.Value = "True"; /* Added By Pushkar */
            hdnBothPrintSetting.Value = "";
            hdndateformat.Value = "dd-MMM-yyyy";
            hdnTimeFormat.Value = "12 Hours";
            hdnHcDietPkg.Value = "False";
            if (Request.QueryString["OPDNew"] != null)
            {
                hdnOPDNew.Value = Request.QueryString["OPDNew"];
            }
            headerControl1.PageType = EzHms.ModelEntity.PageClassification.Grid;

            string query1 = "SELECT DOC_ID,PARENT_DOC_ID,DOC_NAME,DOC_FORM_CD FROM SE.DOCUMENT WHERE PARENT_DOC_ID IN(SELECT DOC_ID FROM  SE.DOCUMENT WHERE DOC_FORM_CD='REG-EXPIRY')";
            DataSet ds1 = dMasters.DynamicDataset(query1);
            if (ds1 != null)
            {
                DataTable dt = ds1.Tables[0];
                regprintdocPermissions.Value = JsonConvert.SerializeObject(dt, Formatting.Indented);
            }
        }
        else
        {
            Response.Redirect("~/Default.aspx");
        }
    }
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        //headerControl1.AddNewItems += new Private_UserControls_PageHeaderControl.OnAddNew(this.ImgBtnAddNew_Click);
        headerControl1.ReloadItems += new Private_UserControls_PageHeaderControl.OnReload(this.ImgBtnReload_Click);

    }


    private void ImgBtnAddNew_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("~/Private/FrontOffice/OP_Quick.aspx?REGCONBILL=Y");
    }
    private void ImgBtnReload_Click(object sender, ImageClickEventArgs e)
    {
        Response.Redirect("~/Private/FrontOffice/OP_Quick.aspx?REGCONBILL=Y");
    }


    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string ImageBtnPrintSettlementClickClientSide2(string billid, string umrno, string patId, string trnsId, string type, string _trnsNo, string _Client_Name)
    {
        MasterClass obj = new MasterClass();
            string Url = "";
            string reportPath = string.Empty;
            string ptype = string.Empty;
            string Formatname = string.Empty;
            string ReportName = string.Empty;
            string path = string.Empty;
            string path2 = string.Empty;
            string Header = string.Empty;
            ptype = "Y";
            if (_Client_Name != "UHWI")
            {
                if (type == "Pre")
                {
                    List<ReportParameter> paramList = new List<ReportParameter>();
                    ptype = "Y";
                    //paramList.Add(new ReportParameter("Print_Type", ptype, false));
                    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
                    reportPath = "/HIMSReprots/PreAdvanceSettlement";// +path;
                    SessionHandler.REPORTPARAMS = paramList;
                    Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath;// +"&tid=" + billid;
                }
                if (type == "Cancel")
                {
                    List<ReportParameter> paramList = new List<ReportParameter>();
                    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
                    paramList.Add(new ReportParameter("IP_BILL_ID", billid, false));
                    paramList.Add(new ReportParameter("IP_PATIENT_ID", patId, false));
                    paramList.Add(new ReportParameter("IP_UMR_NO", umrno.ToString(), false));
                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                    paramList.Add(new ReportParameter("Username", SessionHandler.UserName.ToUpper(), false));
                    paramList.Add(new ReportParameter("ReportTitle", obj.ToString(), false));
                    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
                    //paramList.Add(new ReportParameter("Print_Type", "Y", false));
                    reportPath = "/HIMSReprots/" + "OP_Cancelled_Report";
                    SessionHandler.REPORTPARAMS = paramList;
                    Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + billid;
                }
                else
                {
                    string obj2 = "Bill Cum Receipt";
                    List<ReportParameter> paramList = new List<ReportParameter>();
                    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
                    paramList.Add(new ReportParameter("IP_BILL_ID", billid, false));
                    paramList.Add(new ReportParameter("IP_PATIENT_ID", patId, false));
                    paramList.Add(new ReportParameter("IP_UMR_NO", umrno.ToString(), false));
                    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                    paramList.Add(new ReportParameter("Username", SessionHandler.UserName.ToUpper(), false));
                    paramList.Add(new ReportParameter("ReportTitle", obj.ToString(), false));
                    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
                    //paramList.Add(new ReportParameter("Print_Type", "Y", false));
                    reportPath = "/HIMSReprots/" + "OPDetailReport";
                    SessionHandler.REPORTPARAMS = paramList;
                    Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + billid;
                }
            }
            else
            {
                string obj3 = "Bill Cum Receipt";
                List<ReportParameter> paramList = new List<ReportParameter>();
                paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
                paramList.Add(new ReportParameter("IP_BILL_ID", billid, false));
                paramList.Add(new ReportParameter("IP_PATIENT_ID", patId, false));
                paramList.Add(new ReportParameter("IP_UMR_NO", umrno.ToString(), false));
                paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
                paramList.Add(new ReportParameter("Username", SessionHandler.UserName.ToUpper(), false));
                paramList.Add(new ReportParameter("ReportTitle", obj.ToString(), false));
                paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
                //paramList.Add(new ReportParameter("Print_Type", "Y", false));
                reportPath = "/HIMSReprots/" + "Opbilling_Settlement_Report";
                SessionHandler.REPORTPARAMS = paramList;
                Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + billid;
            }
            return Url;
        }


    [WebMethod]
    public static string CallPrint(string Bill_ID, string Umr_NO, string Tran_ID, string Pat_ID, string DtFrmt, string Bill_NO)
    {
        //int transId = 0; string reportTitle = "Consultation Receipt";
        //if (!string.IsNullOrEmpty(Tran_ID))
        //    transId = Convert.ToInt32(Tran_ID);
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //_psinfo.PrintSettings_info(Convert.ToInt32(SessionHandler.DOCUMENT_ID), transId, string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    string path = string.Empty;
        //    string ReportName = string.Empty;
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        //    string ptyp = string.Empty;
        //    if (_psinfo.PRINT_TYPE == "ORIGINAL")
        //        ptyp = "Y";
        //    else
        //        ptyp = "N";
        //    // paramList.Add(new ReportParameter("Print_Type", ptyp, false));
        //    paramList.Add(new ReportParameter("DateFormat", DtFrmt, false));
        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tran_ID, false));
        //    paramList.Add(new ReportParameter("ReportTitle", reportTitle, false));
        //    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", Pat_ID, false));
        //    paramList.Add(new ReportParameter("IP_DOC_ID", "379", false));
        //    IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //    DocFormatCollection dcol = imap.GetDocFormat(379);
        //    if (dcol != null && dcol.Count > 0)
        //    {
        //        foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //            ReportName = dmp.DOC_NAME_DESC.ToString();
        //        string[] str = ReportName.Split(',');
        //        path = str[0];

        //    }
        //    else
        //    {
        //        path = "ConsultationSlip";
        //    }
        //    string reportPath = "/HIMSReprots/" + path;
        //    List<string> rptPathslistobj = new List<string>();
        //    rptPathslistobj.Add(reportPath);
        //    SessionHandler.REPORTPARAMS = paramList;
        //    SessionHandler.ReportPaths = rptPathslistobj;
        //    string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + transId + "&umrno=" + Umr_NO + "&transno=" + Bill_NO;
        //    return url;
        //}
        //else
            return "1";
    }


    [System.Web.Services.WebMethod]
    public static List<object> RegBillGrid(string _cName, string _fDt, string _pText, string _tDt, string _advSrch, string pageSize, string pageNum, string _eventFlag)
    {
        int total_records = 0;
        GridPaging gpage = new GridPaging();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.PAGE_SIZE = Convert.ToInt32(pageSize);
        gpage.CURRENT_PAGE = Convert.ToInt32(pageNum);
        //gpage.FLAG = _Flag;
        if (_advSrch != string.Empty)
            gpage.ADVANCESEARCH = _advSrch;
        if (_fDt == string.Empty)
            gpage.FROM_DATE = null;//DateTime.Now.ToString("MM/dd/yyyy");
        else
            gpage.FROM_DATE = Convert.ToDateTime(_fDt).ToString("MM/dd/yyyy");
        if (_tDt == string.Empty)
            gpage.TO_DATE = null;//DateTime.Now.ToString("MM/dd/yyyy");
        else
            gpage.TO_DATE = Convert.ToDateTime(_tDt).ToString("MM/dd/yyyy");

        string todate = string.Empty;
        if (_pText == string.Empty)
            _cName = string.Empty;

        if (_cName == "REGISTRATION_DT")
        {
            _pText = gpage.FROM_DATE;//Convert.ToDateTime(prefix).ToString(ViewState["datefmt"].ToString());
            //todate = txtToDate.Text;
        }
        //EzHms.Abstract.IPatientRegistration pregi = new EzHms.Services.PatientRegistration(); RegBillFirstChildGrid
        //DBOPRegConBillingList DBpat = new DBOPRegConBillingList();
        DBPatientRegistration DBpat = new DBPatientRegistration();
        //EzHms.ModelEntity.PatientRegistrationCollection _Coll = new EzHms.ModelEntity.PatientRegistrationCollection();
        gpage.EVENTFLAG = Convert.ToInt32(_eventFlag);
        EzHms.ModelEntity.PatientRegistrationCollection _Coll = DBpat.RegBillGrid(gpage, out total_records);



        if (_Coll != null && _Coll.Count > 0)
        {
            total_records = Convert.ToInt32(((PatientRegistrationCollection)_Coll).GetInnerList(0).TOT_RECORD_CNT);
            List<object> _lst = new List<object>();
            _lst.Add(_Coll);
            _lst.Add(total_records);
            return _lst;
        }
        else
            return null;

    }




    [System.Web.Services.WebMethod]
    public static List<object> RegBillGrid2(string _cName, string _fDt, string _pText, string _tDt, string _advSrch, string pageSize, string pageNum, string _eventFlag, string _bill_type_id)
    {
        int total_records = 0;
         GridPaging2 gpage = new GridPaging2();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.BILL_TYPE_ID =_bill_type_id;
        gpage.PAGE_SIZE = Convert.ToInt32(pageSize);
        gpage.CURRENT_PAGE = Convert.ToInt32(pageNum);
        //gpage.FLAG = _Flag;
        if (_advSrch != string.Empty)
            gpage.ADVANCESEARCH = _advSrch;
        if (_fDt == string.Empty)
            gpage.FROM_DATE = null;//DateTime.Now.ToString("MM/dd/yyyy");
        else
            gpage.FROM_DATE = Convert.ToDateTime(_fDt).ToString("MM/dd/yyyy");
        if (_tDt == string.Empty)
            gpage.TO_DATE = null;//DateTime.Now.ToString("MM/dd/yyyy");
        else
            gpage.TO_DATE = Convert.ToDateTime(_tDt).ToString("MM/dd/yyyy");

        string todate = string.Empty;
        if (_pText == string.Empty)
            _cName = string.Empty;

        if (_cName == "REGISTRATION_DT")
        {
            _pText = gpage.FROM_DATE;//Convert.ToDateTime(prefix).ToString(ViewState["datefmt"].ToString());
            //todate = txtToDate.Text;
        }
        //EzHms.Abstract.IPatientRegistration pregi = new EzHms.Services.PatientRegistration(); RegBillFirstChildGrid
        //DBOPRegConBillingList DBpat = new DBOPRegConBillingList();
        DBPatientRegistration2 DBpat = new DBPatientRegistration2();
        //EzHms.ModelEntity.PatientRegistrationCollection _Coll = new EzHms.ModelEntity.PatientRegistrationCollection();
        gpage.EVENTFLAG = Convert.ToInt32(_eventFlag);
        EzHms.ModelEntity.PatientRegistrationCollection _Coll = DBpat.RegBillGrid2(gpage, out total_records);



        if (_Coll != null && _Coll.Count > 0)
        {
            total_records = Convert.ToInt32(((PatientRegistrationCollection)_Coll).GetInnerList(0).TOT_RECORD_CNT);
            List<object> _lst = new List<object>();
            _lst.Add(_Coll);
            _lst.Add(total_records);
            return _lst;
        }
        else
            return null;

    }
    [WebMethod]
    public static string Registration_Report(string Patient_ID, string Umr_NO, string Bill_No, string ReqType, string Receipt_NO, string authorized_user, string bill_id, string reg_no)
    {
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //_psinfo.PrintSettings_info(64, int.Parse(bill_id), string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    string path = string.Empty;
        //    string ReportName = string.Empty;
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    if (ReqType != null && ReqType == "CORP")
        //    {
        //        paramList.Add(new ReportParameter("IP_BILL_NO", Bill_No, false));
        //        paramList.Add(new ReportParameter("DateFormat", "dd/MMM/yyyy", false));
        //        paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
        //        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //        paramList.Add(new ReportParameter("IsLogoVisible", "true", false));
        //        paramList.Add(new ReportParameter("IP_ACOUNTING_COMP_ID", "1", false));
        //        paramList.Add(new ReportParameter("IP_FLAG", "1", false));
        //        string ptyp = string.Empty;
        //        if (authorized_user == "Y")
        //        { ptyp = "Y"; }
        //        /* paramList.Add(new ReportParameter("PRINT_TYPE", ptyp, false));*/
        //        path = "RegistrationRecepInfot";
        //        string reportPath = "/HIMSReprots/" + path;
        //        string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&patient_id=" + Patient_ID + "&umrno=" + reg_no + "&transno=" + Receipt_NO + "&tid=" + bill_id;
        //        SessionHandler.REPORTPARAMS = paramList;
        //        return url;
        //    }
        //    else
        //    {
        //        paramList.Add(new ReportParameter("IP_BILL_NO", Bill_No, false));
        //        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //        //paramList.Add(new ReportParameter("IP_MAIN_REPORT_NAME", "RegistrationRecepInfot_A4Half", false));
        //        string ptyp = string.Empty;
        //        if (_psinfo.PRINT_TYPE == "ORIGINAL")
        //            ptyp = "Y";
        //        else
        //            ptyp = "N";
        //        IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //        DocFormatCollection dcol = imap.GetDocFormat(64);
        //        if (dcol != null && dcol.Count > 0)
        //        {
        //            foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //                ReportName = dmp.DOC_NAME_DESC.ToString();
        //            string[] str = ReportName.Split(',');
        //            path = str[0];
        //            paramList.Add(new ReportParameter("UserName", SessionHandler.UserName.ToUpper(), false));
        //            paramList.Add(new ReportParameter("DateFormat", "dd/MMM/yyyy", false));
        //            paramList.Add(new ReportParameter("IP_DOC_ID", "64"));
        //        }
        //        else
        //        {
        //            path = "RegistrationRecepInfot";
        //        }
        //        if (path == "")
        //        {
        //            path = "RegistrationRecepInfot";
        //        }
        //        string reportPath = "/HIMSReprots/" + path;
        //        List<string> rptPathslistobj = new List<string>();
        //        rptPathslistobj.Add(reportPath);
        //        SessionHandler.REPORTPARAMS = paramList;
        //        SessionHandler.ReportPaths = rptPathslistobj;
        //        string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&patient_id=" + Patient_ID + "&umrno=" + reg_no + "&transno=" + Receipt_NO + "&tid=" + bill_id;

        //        return url;
        //    }
        //}
        //else
            return "1";
    }


    [WebMethod]
    public static string CallREGPrint(string grpbillno, string bill_id, string tran_id, string pat_id)
    {
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //string Sessionid = SessionHandler.DBSESSION_ID.ToString();
        //int patid = 0;
        //_psinfo.PrintSettings_info(SessionHandler.DOCUMENT_ID, patid, string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    int printcount = 0;
        //    string path = string.Empty;
        //    string ReportName = string.Empty;
        //    List<ReportParameter> paramList = new List<ReportParameter>();

        //    if (!string.IsNullOrEmpty(grpbillno))
        //    {
        //        paramList.Add(new ReportParameter("IP_GRP_BILL_NO", grpbillno, false));
        //        paramList.Add(new ReportParameter("IP_SESSION_ID", Sessionid, false));
        //        paramList.Add(new ReportParameter("IP_MAIN_REPORT_NAME", "OPD_Registration_And_Billing", false));
        //        paramList.Add(new ReportParameter("IP_DOC_ID", SessionHandler.DOCUMENT_ID.ToString(), false));
        //        paramList.Add(new ReportParameter("PRINT_BY", SessionHandler.UserName, false));
        //        IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //        DocFormatCollection dcol = imap.GetDocFormat(SessionHandler.DOCUMENT_ID);
        //        if (dcol != null && dcol.Count > 0)
        //        {
        //            //foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //            //    ReportName = dmp.DOC_NAME_DESC.ToString();    
        //            //string[] str = ReportName.Split(',');
        //            //path = str[0];
        //            path = "OPD_Registration_And_Billing";

        //        }
        //        else
        //        {
        //            path = "OPD_Registration_And_Billing";
        //        }
        //    }
        //    else
        //    {
        //        paramList.Add(new ReportParameter("IP_TRANSACTION_ID", tran_id, false));
        //        paramList.Add(new ReportParameter("IP_BILL_ID", bill_id, false));
        //        paramList.Add(new ReportParameter("IP_PATIENT_ID", pat_id, false));
        //        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //        paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //        paramList.Add(new ReportParameter("Title", "Bill Cum Receipt", false));
        //        paramList.Add(new ReportParameter("showprintdt", "True", false));
        //        paramList.Add(new ReportParameter("IP_DOC_ID", SessionHandler.DOCUMENT_ID.ToString(), false));
        //        // paramList.Add(new ReportParameter("Print_Type", "Y", false));
        //        path = "OPReport_A4Half";
        //    }

        //    string reportPath = "/HIMSReprots/" + path;
        //    List<string> rptPathslistobj = new List<string>();
        //    rptPathslistobj.Add(reportPath);
        //    SessionHandler.REPORTPARAMS = paramList;
        //    SessionHandler.ReportPaths = rptPathslistobj;
        //    string url = "../Reports/HIMSReportViewer.aspx?count=" + printcount + "&rptPath=" + reportPath + "&transno=" + grpbillno + "&umrno=" + grpbillno;

        //    return url;



        //}

        //else
        return "1";
    }

    [WebMethod]
    public static string Print_Card(string Photo, string Bill_NO, string _bill_id)
    {
        string lblp = Photo;
        string img = "http://localhost:55723/UI/Private/PatientPhoto/" + lblp.Trim();
        //string img = Server.MapPath(@"~/Private/PatientPhoto/" + lblp.Trim()).ToString();
        List<ReportParameter> paramList = new List<ReportParameter>();
        paramList.Add(new ReportParameter("IP_BILL_NO", Bill_NO, false));
        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        paramList.Add(new ReportParameter("Pat_Image_Path", img, false));
        paramList.Add(new ReportParameter("IP_DOC_ID", Convert.ToString(SessionHandler.DOCUMENT_ID), false));
        SessionHandler.REPORTPARAMS = paramList;
        string url = "../../Private/Reports/HIMSReportViewer.aspx?rptPath=/HIMSReprots/RegistrationCardReport";
        return url;
    }
    [WebMethod]
    public static string GetBarcodePat(string entityid, string sampleno)
    {
        //string patDet = string.Empty;
        //IUser obj_iuser = new EzHms.Services.UserCreationService();
        //DataSet ds = obj_iuser.GetBarcodePrintDetails(Convert.ToInt32(entityid), sampleno);
        //if (ds.Tables[0].Rows.Count > 0)
        //{
        //    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
        //    {
        //        string age = string.Empty;
        //        // age = ds.Tables[0].Rows[i][3].ToString().Trim();
        //        // age = age.Split(',')[0];
        //        //patDet += "<NAME>-" + ds.Tables[0].Rows[i][2].ToString().Trim() + "$<AdmnNo>-" + ds.Tables[0].Rows[i][1].ToString().Trim() + "$<AGE>-" + age + "$<GENDER>-" + ds.Tables[0].Rows[i][4].ToString().Trim() + "$<Date&Time>-" + ds.Tables[0].Rows[i][5].ToString().Trim() + "$<BARCODE>-" + ds.Tables[0].Rows[i][6].ToString().Trim() + "$<Room>-" + ds.Tables[0].Rows[i][7].ToString().Trim();
        //        patDet += "<Reg.No>-" + ds.Tables[0].Rows[i]["KEY"].ToString().Trim() + "$<Umr.No>-" + ds.Tables[0].Rows[i]["UMR_NO"].ToString().Trim() + "$<Patient Name>-" + ds.Tables[0].Rows[i]["PATIENT_NAME"].ToString().Trim() + "$<Age>-" + ds.Tables[0].Rows[i]["AGE"].ToString().Trim() + "$<Gender>--" + ds.Tables[0].Rows[i]["GENDER"].ToString().Trim() + "$<Date&Time>--" + ds.Tables[0].Rows[i]["DOB"].ToString().Trim() + "$<Consultant>-" + ds.Tables[0].Rows[i]["CONSULTANT"].ToString().Trim();

        //    }
        //}
        return "";
    }

    [WebMethod(EnableSession = true)]
    public static string CallConPrint(string Bill_ID, string Umr_NO, string Tran_ID, string Pat_ID, string DtFrmt, string Bill_NO)
    {
        //int transId = 0; string reportTitle = "Consultation Receipt";
        //if (!string.IsNullOrEmpty(Tran_ID))
        //    transId = Convert.ToInt32(Tran_ID);
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //_psinfo.PrintSettings_info(Convert.ToInt32(379), transId, string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    string path = string.Empty;
        //    string ReportName = string.Empty;
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        //    string ptyp = string.Empty;
        //    if (_psinfo.PRINT_TYPE == "ORIGINAL")
        //        ptyp = "Y";
        //    else
        //        ptyp = "N";
        //    // paramList.Add(new ReportParameter("Print_Type", ptyp, false));
        //    paramList.Add(new ReportParameter("DateFormat", DtFrmt, false));
        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tran_ID, false));
        //    paramList.Add(new ReportParameter("ReportTitle", reportTitle, false));
        //    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", Pat_ID, false));
        //    paramList.Add(new ReportParameter("IP_DOC_ID", "379", false));

        //    IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //    DocFormatCollection dcol = imap.GetDocFormat(379);
        //    if (dcol != null && dcol.Count > 0)
        //    {
        //        foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //            ReportName = dmp.DOC_NAME_DESC.ToString();
        //        string[] str = ReportName.Split(',');
        //        path = str[0];

        //    }
        //    else
        //    {
        //        path = "ConsultationSlip";
        //    }
        //    string reportPath = "/HIMSReprots/" + path;
        //    List<string> rptPathslistobj = new List<string>();
        //    rptPathslistobj.Add(reportPath);
        //    SessionHandler.REPORTPARAMS = paramList;
        //    SessionHandler.ReportPaths = rptPathslistobj;
        //    string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + Bill_ID + "&umrno=" + Umr_NO + "&transno=" + Bill_NO;
        //    return url;
        //}
        //else
            return "1";
    }
    [WebMethod(EnableSession = true)]
    public static string PriscriptionPrint(string Bill_ID, string Bill_NO, string Tran_ID, string checkStatus, string _pat_id, string _dt_fmt, string umr_no, string PrescReportName)
    {
        string tid = "0";
        string url;
        //string reportTitle = "Consultation Receipt";
        //if (checkStatus == "checked")
        //{
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", _pat_id, false));
        //    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //    paramList.Add(new ReportParameter("ReportTitle", reportTitle, false));
        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("DateFormat", _dt_fmt, false));
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tran_ID, false));
        //    string ptyp = string.Empty;
        //    ptyp = "Y";
        //    // paramList.Add(new ReportParameter("Print_Type", ptyp, false));
        //    string reportPath = "/HIMSReprots/RepConsultSlipAndPrescriptionPrintReport";
        //    SessionHandler.REPORTPARAMS = paramList;
        //    // ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "if(confirm('Click OK to Print Receipt')){window.open('../../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + lblTransactionId.Text + "&umrno=" + lblumrno.Text + "&transno=" + lblbillno.Text + "');}", true);
        //    url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + Bill_ID.ToString();
        //}
        //else
        //{
        //    int transId = 0;
        //    if (!string.IsNullOrEmpty(Tran_ID))
        //        transId = Convert.ToInt32(Tran_ID);
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    string reportPath = string.Empty;
        //    if (!string.IsNullOrEmpty(PrescReportName))
        //        reportPath = "/HIMSReprots/" + PrescReportName;
        //    else
        //        reportPath = "/HIMSReprots/RepOPConsultationPrescription";

        //    List<string> rptPathslistobj = new List<string>();
        //    rptPathslistobj.Add(reportPath);
        //    SessionHandler.REPORTPARAMS = paramList;
        //    SessionHandler.ReportPaths = rptPathslistobj;
        //    url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + Bill_ID.ToString();
        //}

        return "";
    }

    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string ImageBtnPrintClickClientSide(string billid, string umrno, string patId, string trnsId, string type, string _trnsNo, string _ServCount)
    {
        string Url = ""; string obj = string.Empty;
        string reportPath = string.Empty;
        string ptype = string.Empty;
        string Formatname = string.Empty;
        string ReportName = string.Empty;
        string path = string.Empty;
        string path2 = string.Empty;
        string Header = string.Empty;
        ptype = "Y";
        //string copies = "2";
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //_psinfo.PrintSettings_info(Convert.ToInt32(86), int.Parse(billid), string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    if (type == "Pre")
        //    {
        //        List<ReportParameter> paramList = new List<ReportParameter>();
        //        // paramList.Add(new ReportParameter("Print_Type", ptype, false));
        //        paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //        paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
        //        reportPath = "/HIMSReprots/PreAdvanceSettlement";// +path;
        //        SessionHandler.REPORTPARAMS = paramList;
        //        reportPath = "/HIMSReprots/PreAdvanceSettlement";// +path;
        //        Url = "../Reports/HIMSReportViewer.aspx?tid=" + billid + "&rptPath=" + reportPath + "&umrno=" + umrno + "&transno=" + _trnsNo + "";

        //    }
        //    else
        //    {
        //        string showdt = "True";
        //        if (!(showdt == "True" || showdt == "False"))
        //            showdt = "True";
        //        obj = "Bill Cum Receipt";
        //        path = string.Empty;
        //        List<ReportParameter> paramList = new List<ReportParameter>();
        //        paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
        //        paramList.Add(new ReportParameter("IP_BILL_ID", billid, false));
        //        paramList.Add(new ReportParameter("IP_PATIENT_ID", patId, false));
        //        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //        paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //        paramList.Add(new ReportParameter("Title", obj.ToString(), false));
        //        paramList.Add(new ReportParameter("showprintdt", showdt, false));
        //        //   paramList.Add(new ReportParameter("Print_Type", ptype, false));
        //        IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //        DocFormatCollection dcol = imap.GetDocFormat(86);
        //        if (dcol != null && dcol.Count > 0)
        //        {
        //            foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //                ReportName = dmp.DOC_NAME_DESC.ToString();
        //            string[] str = ReportName.Split(',');
        //            path = str[0];

        //        }
        //        else
        //        {
        //            path = "OPReport_A4Half";
        //        }
        //        if (path == "")
        //        {
        //            path = "OPReport_A4Half";
        //        }
        //        paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //        reportPath = "/HIMSReprots/" + path;
        //        List<string> rptPathslistobj = new List<string>();
        //        rptPathslistobj.Add(reportPath);
        //        SessionHandler.REPORTPARAMS = paramList;
        //        SessionHandler.ReportPaths = rptPathslistobj;
        //        Url = "../Reports/HIMSReportViewer.aspx?tid=" + billid + "&rptPath=" + reportPath + "&umrno=" + umrno + "&transno=" + _trnsNo + "";
        //    }
        //    return Url;
        //}
        //else
            return "1";
    }


    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string ImageBtnPrintSettlementClickClientSide(string billid, string umrno, string patId, string trnsId, string type, string _trnsNo, string report_name)
    {
        //string Url = "";
        //string reportPath = string.Empty;
        //string ptype = string.Empty;
        //string Formatname = string.Empty;
        //string ReportName = string.Empty;
        //string path = string.Empty;
        //string path2 = string.Empty;
        //string Header = string.Empty;
        //ptype = "Y";
        //if (type == "Pre")
        //{
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    ptype = "Y";
        //    //  paramList.Add(new ReportParameter("Print_Type", ptype, false));
        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
        //    reportPath = "/HIMSReprots/PreAdvanceSettlement";// +path;
        //    SessionHandler.REPORTPARAMS = paramList;
        //    Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + billid;
        //    //ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "window.open('../../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "');", true);
        //}
        //else
        //{
        //    string obj = "Bill Cum Receipt";
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", trnsId, false));
        //    paramList.Add(new ReportParameter("IP_BILL_ID", billid, false));
        //    paramList.Add(new ReportParameter("IP_UMR_NO", umrno.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", patId, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList.Add(new ReportParameter("Username", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("ReportTitle", obj.ToString(), false));
        //    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_REFERENCE_ID", billid, false));
        //    // paramList.Add(new ReportParameter("Print_Type", "Y", false));
        //    reportPath = "/HIMSReprots/" + report_name;
        //    SessionHandler.REPORTPARAMS = paramList;
        //    Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + billid;
        //}
        return "";
    }
    [WebMethod(EnableSession = true)]
    public static List<object> GetFirstChild(string id, string no, string bill_id)
    {
        PatientRegistration preg = new PatientRegistration();
        preg.TRANSACTION_ID = Convert.ToInt32(id);
        preg.GRP_BILL_NO = no;
        if (!string.IsNullOrEmpty(bill_id))
            preg.BILL_ID = Convert.ToInt32(bill_id);
        else
            preg.BILL_ID = 0;
        //DBOPRegConBillingList DBpat = new DBOPRegConBillingList();
        DBPatientRegistration DBpat = new DBPatientRegistration();
        EzHms.ModelEntity.PatientRegistrationCollection _Coll = new EzHms.ModelEntity.PatientRegistrationCollection();
        CollectionBase cs = DBpat.RegBillFirstChildGrid(preg);
        if (cs != null && cs.Count > 0)
        {
            List<object> _lst = new List<object>();
            _lst.Add(cs);
            _lst.Add(cs.Count);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod(EnableSession = true)]
    public static List<object> GetSecondChild(string id)
    {
        DBPatientRegistration intRecp = new DBPatientRegistration();
        CollectionBase recpColl = intRecp.GetPatientBillsOnID(Convert.ToInt32(id));
        if (recpColl != null && recpColl.Count > 0)
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
    public static List<object> GetThirdChild(string Srv_id, string id)
    {
        //IPackageServices ipkg = new EzHms.Services.PackageServices();
        //EzHms.DataAccessObject.DBPackageService dbpkg = new EzHms.DataAccessObject.DBPackageService();
        //CollectionBase cb = dbpkg.Get_Package_Services_by_pIDColl_New(Convert.ToInt32(Srv_id), Convert.ToInt32(id));
        //if (cb != null && cb.Count > 0)
        //{
        //    List<object> _lst = new List<object>();
        //    _lst.Add(cb);
        //    _lst.Add(cb.Count);
        //    return _lst;
        //}
        //else
            return null;
    }
    [WebMethod(EnableSession = true)]
    public static string CallCorpConsultationPrint(string Bill_ID, string Umr_NO, string Tran_ID, string Pat_ID, string DtFrmt, string Bill_NO)
    {
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //string reportTitle = "Corporate OP Consultation Report";
        //string tranid = "0";
        //string path = string.Empty;
        //string ReportName = string.Empty;
        //if (Tran_ID != null)
        //    tranid = Tran_ID;
        //_psinfo.PrintSettings_info(Convert.ToInt32(379), int.Parse(tranid), string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    string ptyp = string.Empty;
        //    if (_psinfo.PRINT_TYPE == "ORIGINAL")
        //        ptyp = "Y";
        //    else
        //        ptyp = "N";
        //    //  paramList.Add(new ReportParameter("Print_Type", ptyp, false));
        //    paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        //    paramList.Add(new ReportParameter("DateFormat", DtFrmt, false));
        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tran_ID, false));
        //    paramList.Add(new ReportParameter("ReportTitle", reportTitle, false));
        //    paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", Pat_ID, false));
        //    IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //    DocFormatCollection dcol = imap.GetDocFormat(379);
        //    if (dcol != null && dcol.Count > 0)
        //    {
        //        foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //            ReportName = dmp.DOC_NAME_DESC.ToString();
        //        string[] str = ReportName.Split(',');
        //        path = str[0];
        //        if (path == string.Empty)
        //        {
        //            path = "ConsultationSlip_A4Half";
        //        }
        //    }
        //    else
        //    {
        //        path = "ConsultationSlip_A4Half";
        //    }
        //    string reportPath = "/HIMSReprots/" + path;
        //    List<string> rptPathslistobj = new List<string>();
        //    rptPathslistobj.Add(reportPath);
        //    SessionHandler.REPORTPARAMS = paramList;
        //    SessionHandler.ReportPaths = rptPathslistobj;
        //    string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + Bill_ID + "&umrno=" + Umr_NO + "&transno=" + Bill_NO;
        //    return url;
        //}
        //else
            return "1";
    }
    [WebMethod(EnableSession = true)]
    public static string CorpOPConPriscriptionPrint(string Bill_ID, string Bill_NO, string Tran_ID, string PrescReportName)
    {
        string transid = "0";
        if (!string.IsNullOrEmpty(Tran_ID))
            transid = Tran_ID;
        List<ReportParameter> paramList = new List<ReportParameter>();
        paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        string reportPath = string.Empty;
        if (!string.IsNullOrEmpty(PrescReportName))
            reportPath = "/HIMSReprots/" + PrescReportName;
        else
            reportPath = "/HIMSReprots/RepOPConsultationPrescription";//CorpConsultationPre
        List<string> rptPathslistobj = new List<string>();
        rptPathslistobj.Add(reportPath);
        SessionHandler.REPORTPARAMS = paramList;
        SessionHandler.ReportPaths = rptPathslistobj;
        string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid123=" + Bill_ID;
        return url;
    }
    [WebMethod(EnableSession = true)]
    public static string CallOPCorpBillPrint(string Tran_ID, string Umr_NO, string Tran_NO, string Patient_ID, string Bill_ID, string DatFrmt)
    {
        //string path = string.Empty;
        //string Con = string.Empty;
        //string ReportName = string.Empty;
        //string obj = "Bill Cum Receipt";
        //PrintSettingsInfo _psinfo = new PrintSettingsInfo();
        //_psinfo.PrintSettings_info(Convert.ToInt32(86), int.Parse(Tran_ID), string.Empty);
        //if (_psinfo.MAX_PRINT_COUNT != "" && int.Parse(_psinfo.MAX_PRINT_COUNT) >= int.Parse(_psinfo.TOTAL_PRINT_COUNT))
        //{
        //    List<ReportParameter> paramList = new List<ReportParameter>();
        //    string ptyp = string.Empty;
        //    if (_psinfo.PRINT_TYPE == "ORIGINAL")
        //        ptyp = "Y";
        //    else
        //        ptyp = "N";
        //    //  paramList.Add(new ReportParameter("Print_Type", ptyp, false));
        //    paramList.Add(new ReportParameter("IP_PATIENT_ID", Patient_ID, false));
        //    paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tran_ID, false));
        //    paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        //    paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //    paramList.Add(new ReportParameter("UserName", SessionHandler.UserName, false));
        //    paramList.Add(new ReportParameter("Title", obj.ToString(), false));
        //    paramList.Add(new ReportParameter("showprintdt", "true", false));
        //    IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //    DocFormatCollection dcol = imap.GetDocFormat(86);
        //    if (dcol != null && dcol.Count > 0)
        //    {
        //        foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        //            ReportName = dmp.DOC_NAME_DESC.ToString();
        //        string[] str = ReportName.Split(',');
        //        path = str[0];
        //        Con = str[1];
        //        if (path == string.Empty)
        //        {
        //            path = "OPReport_A4Half";
        //        }
        //    }
        //    else
        //    {
        //        path = "OPReport_A4Half";
        //    }

        //    if (Con == "N")
        //        paramList.Add(new ReportParameter("IsLogoVisible", false.ToString(), false));

        //    if (Con == "Y")
        //        paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));

        //    string reportPath = "/HIMSReprots/" + path;
        //    List<string> rptPathslistobj = new List<string>();
        //    rptPathslistobj.Add(reportPath);
        //    SessionHandler.REPORTPARAMS = paramList;
        //    SessionHandler.ReportPaths = rptPathslistobj;
        //    string url = "../Reports/HIMSReportViewer.aspx?tid=" + Bill_ID + "&rptPath=" + reportPath + "&umrno=" + Umr_NO + "&transno=" + Tran_NO;
        //    return url;
        //}
        //else
            return "1";
    }
    [WebMethod]
    public static string CorpOPSettlementPrint(string Tran_ID, string Patient_ID, string Bill_ID)
    {
        string obj = "Bill Cum Receipt";
        List<ReportParameter> paramList = new List<ReportParameter>();
        paramList.Add(new ReportParameter("IP_TRANSACTION_ID", Tran_ID, false));
        paramList.Add(new ReportParameter("IP_BILL_ID", Bill_ID, false));
        paramList.Add(new ReportParameter("IP_PATIENT_ID", Patient_ID, false));
        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        paramList.Add(new ReportParameter("Username", SessionHandler.UserName, false));
        paramList.Add(new ReportParameter("ReportTitle", obj.ToString(), false));
        paramList.Add(new ReportParameter("IsLogoVisible", true.ToString(), false));
        paramList.Add(new ReportParameter("IP_REFERENCE_ID", Bill_ID, false));
        // paramList.Add(new ReportParameter("Print_Type", "Y", false));
        string reportPath = "/HIMSReprots/" + "OPDetailReport";
        List<string> rptPathslistobj = new List<string>();
        rptPathslistobj.Add(reportPath);
        SessionHandler.REPORTPARAMS = paramList;
        SessionHandler.ReportPaths = rptPathslistobj;
        string url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + Bill_ID;
        return url;
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public static string PackegeCheckListPrint(string billid)
    {
        //string Url = "";
        //string ReportName = string.Empty;
        //string obj = "Report Collection Slip";
        //List<ReportParameter> paramList = new List<ReportParameter>();
        //paramList.Add(new ReportParameter("IP_BILL_ID", billid.ToString(), false));
        //paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        //paramList.Add(new ReportParameter("Print_by", SessionHandler.UserName, false));
        //paramList.Add(new ReportParameter("Report_Name", obj, false));
        //IDocFormatMap imap = new EzHms.Services.DocFormatMapping();
        //DocFormatCollection dcol = imap.GetDocFormat(SessionHandler.DOCUMENT_ID);
        ////foreach (EzHms.ModelEntity.DocFormatMapping dmp in dcol)
        ////    ReportName = dmp.DOC_NAME_DESC.ToString();
        ////string[] str = ReportName.Split(',');

        ////string Con = string.Empty;
        ////string path = string.Empty;
        ////if (str[0] != null && str[0] != string.Empty)
        ////{
        ////    path = str[0];
        ////    if (str.Length > 1)
        ////        Con = str[1];
        ////}
        ////if (path == "OPReport_NoOfServicePerPage")
        ////    path = !string.IsNullOrEmpty(path) ? path : "OPReport";
        //string BillPackegelistReceipt = "/HIMSReprots/Sub_Package_CheckList";
        //List<string> rptPathslistobj = new List<string>();
        //rptPathslistobj.Add(BillPackegelistReceipt);
        //SessionHandler.REPORTPARAMS = paramList;
        //SessionHandler.ReportPaths = rptPathslistobj;
        //Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + BillPackegelistReceipt + "&tid=" + billid.ToString();
        return "";

    }
    public string getPermissions()
    {
        //DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(SessionHandler.MODULE_ID), SessionHandler.DOCUMENT_ID);
//        if (_dsgetdocper.Tables[0].Rows.Count > 0)
//        {
//            //hdnauth_user.Value = _dsgetdocper.Tables[0].Rows[0]["ACCESS_PRINT_AUTHORIZED"].ToString();
//            if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/viewprofile.png', click: 'ViewRow', alt: 'View Record' }
//                                , { icon: '../../Assets/Grid_Icons/printview.png', click: 'PatientPrints', alt: 'Print View'}
//]";
//            }
//            else
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/viewprofile.png', click: 'ViewRow', alt: 'View Record' }]";
//            }
//        }
//        else
//        {
            return @"[{ icon: '../../Assets/Grid_Icons/viewprofile.png', click: 'ViewRow', alt: 'View Record' }]";
        //}
    }
    
    [WebMethod(EnableSession = true)]
    public static string Samplecollrept(string billid)
    {
        string Url = "";
        string ReportName = string.Empty;
        string obj = "Report Collection Slip";
        List<ReportParameter> paramList = new List<ReportParameter>();
        paramList.Add(new ReportParameter("IP_BILL_ID", billid.ToString(), false));
        paramList.Add(new ReportParameter("printedby", SessionHandler.UserName, false));
        paramList.Add(new ReportParameter("IP_SESSION_ID", SessionHandler.DBSESSION_ID.ToString(), false));
        paramList.Add(new ReportParameter("Islogovisible", true.ToString(), false));
        paramList.Add(new ReportParameter("IsHeadervisible", true.ToString(), false));
        // paramList.Add(new ReportParameter("Print_Type", "Y", false));
        // string SYSTEM_IP = System.Environment.MachineName.ToString();
        string reportPath = "/HIMSReprots/SUB_Service_Requisition_Slip";
        string url = "../../Reports/HIMSReportViewer.aspx?Print=Y&rptPath=" + reportPath + "";
        List<string> rptPathslistobj = new List<string>();
        rptPathslistobj.Add(reportPath);
        SessionHandler.REPORTPARAMS = paramList;
        SessionHandler.ReportPaths = rptPathslistobj;
        Url = "../Reports/HIMSReportViewer.aspx?rptPath=" + reportPath + "&tid=" + billid.ToString();
        return Url;
    }



    public string getChildPermissions()
    {
        //DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(SessionHandler.MODULE_ID), SessionHandler.DOCUMENT_ID);
//        if (_dsgetdocper.Tables[0].Rows.Count > 0)
//        {
//            if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "N")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'PatPrints', alt: 'Print View' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PatPresPrints', alt: 'Prescription print ' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PkgChkListPrints', alt: 'Packege CheckList Report' }
//                      , { icon: '../../Assets/Grid_Icons/printsettled.png', click: 'Consultation_settlement', alt: 'Settlement Report'}
//                      , { icon: '../../Assets/Grid_Icons/barcode.png', click: 'WristBand', alt: 'Wristband'}
//]";




//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'PatPrints', alt: 'Print View' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PatPresPrints', alt: 'Prescription print ' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PkgChkListPrints', alt: 'Packege CheckList Report' }
//                      , { icon: '../../Assets/Grid_Icons/printsettled.png', click: 'Consultation_settlement', alt: 'Settlement Report'}
//                      , { icon: '../../Assets/Grid_Icons/barcode.png', click: 'PatRegBarcodePrint', alt: 'Barcode Print '}
// , { icon: '../../Assets/Grid_Icons/barcode.png', click: 'WristBand', alt: 'Wristband'}]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "N" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/barcode.png', click: 'PatRegBarcodePrint', alt: 'Barcode Print '}]";

//            }
//            else
//            {
//                return @"[]";
//            }
//        }
//        else
//        {
            return @"[]";
        //}
    }



    public string getGetTHirdChildPermissions()
    {
        return @"[{ icon: '../../Assets/Grid_Icons/barcode.png', click: 'BarCode_Hc', alt: 'Barcode Print'}]";
    }
    public string getGetSecondChildPermissions()
    {
//        DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(SessionHandler.MODULE_ID), SessionHandler.DOCUMENT_ID);
//        if (_dsgetdocper.Tables[0].Rows.Count > 0)
//        {
//            if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "N")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'SrvGuide', alt: 'Service Guidelines' }
//                              ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'Consent', alt: 'Consent Form' }
//                      ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'ShowSchdul', alt: 'Service Schedule'}
//                        ,{ icon: '../../Assets/Grid_Icons/conditions.png', click: 'CheckList', alt: 'Check List'}
//]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'SrvGuide', alt: 'Service Guidelines' }
//                      ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'Consent', alt: 'Consent Form' }
//                        ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'ShowSchdul', alt: 'Service Schedule'}
//                        ,{ icon: '../../Assets/Grid_Icons/conditions.png', click: 'CheckList', alt: 'Check List'}
//]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "N" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'SrvGuide', alt: 'Service Guidelines '}
//                             ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'Consent', alt: 'Consent Form' }
//                            ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'ShowSchdul', alt: 'Service Schedule'}
//                            ,{ icon: '../../Assets/Grid_Icons/conditions.png', click: 'CheckList', alt: 'Check List'}
//]";
//            }
//            else
//            {
//                return @"[]";
//            }
//        }
//        else
//        {
            return @"[]";
//        }
    }




    public string getPermissions2()
    {
//        DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(SessionHandler.MODULE_ID), SessionHandler.DOCUMENT_ID);
//        if (_dsgetdocper.Tables[0].Rows.Count > 0)
//        {
//            hdnauth_user.Value = _dsgetdocper.Tables[0].Rows[0]["ACCESS_PRINT_AUTHORIZED"].ToString();
//            if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/viewprofile.png', click: 'ViewRow', alt: 'View Record' }
//                                , { icon: '../../Assets/Grid_Icons/printview.png', click: 'PatPresPrints', alt: 'Card Print'}
//                      ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'PatPrints', alt: 'Print View' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PatPresPrints', alt: 'Prescription print ' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PkgChkListPrints', alt: 'Packege CheckList Report' }
//                      , { icon: '../../Assets/Grid_Icons/printsettled.png', click: 'Consultation_settlement', alt: 'Settlement Report'}
// , { icon: '../../Assets/Grid_Icons/printview.png', click: 'settelePrint', alt: 'Settle Print'}
//                      , { icon: '../../Assets/Grid_Icons/barcode.png', click: 'PatRegBarcodePrint', alt: 'Barcode Print '}
//    , { icon: '../../Assets/Grid_Icons/barcode.png', click: 'WristBand', alt: 'Wristband'}
//
//
//]";

//            }


//            else
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/viewprofile.png', click: 'ViewRow', alt: 'View Record' }]";
//            }






//        }
//        else
//        {
            return @"[{ icon: '../../Assets/Grid_Icons/viewprofile.png', click: 'ViewRow', alt: 'View Record' }]";
        //}
    }
    public string getChildPermissions2()
    {
//        DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(SessionHandler.MODULE_ID), SessionHandler.DOCUMENT_ID);
//        if (_dsgetdocper.Tables[0].Rows.Count > 0)
//        {
//            if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "N")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'PatPrints', alt: 'Print View' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PatPresPrints', alt: 'Prescription print ' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PkgChkListPrints', alt: 'Packege CheckList Report' }
//                      , { icon: '../../Assets/Grid_Icons/printsettled.png', click: 'Consultation_settlement', alt: 'Settlement Report'}]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'PatPrints', alt: 'Print View' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PatPresPrints', alt: 'Prescription print ' }
//                      , { icon: '../../Assets/Grid_Icons/printrecord.png', click: 'PkgChkListPrints', alt: 'Packege CheckList Report' }
//                      , { icon: '../../Assets/Grid_Icons/printsettled.png', click: 'Consultation_settlement', alt: 'Settlement Report'}
//                      , { icon: '../../Assets/Grid_Icons/barcode.png', click: 'PatRegBarcodePrint', alt: 'Barcode Print '}]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "N" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/barcode.png', click: 'PatRegBarcodePrint', alt: 'Barcode Print '}]";
//            }
//            else
//            {
//                return @"[]";
//            }
//        }
//        else
//        {
            return @"[]";
//        }
    }

    public string getGetTHirdChildPermissions2()
    {
        return @"[{ icon: '../../Assets/Grid_Icons/barcode.png', click: 'BarCode_Hc', alt: 'Barcode Print'}]";
    }
    public string getGetSecondChildPermissions2()
    {
//        DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(SessionHandler.MODULE_ID), SessionHandler.DOCUMENT_ID);
//        if (_dsgetdocper.Tables[0].Rows.Count > 0)
//        {
//            if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "N")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'SrvGuide', alt: 'Service Guidelines' }
//                              ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'Consent', alt: 'Consent Form' }
//                      ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'ShowSchdul', alt: 'Service Schedule'}
//                        ,{ icon: '../../Assets/Grid_Icons/conditions.png', click: 'CheckList', alt: 'Check List'}
//]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'SrvGuide', alt: 'Service Guidelines' }
//                      ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'Consent', alt: 'Consent Form' }
//                        ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'ShowSchdul', alt: 'Service Schedule'}
//                        ,{ icon: '../../Assets/Grid_Icons/conditions.png', click: 'CheckList', alt: 'Check List'}
//]";
//            }
//            else if ((_dsgetdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "N" && (_dsgetdocper.Tables[0].Rows[0]["BARCODE"].ToString()) == "Y")
//            {
//                return @"[{ icon: '../../Assets/Grid_Icons/printview.png', click: 'SrvGuide', alt: 'Service Guidelines '}
//                             ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'Consent', alt: 'Consent Form' }
//                            ,{ icon: '../../Assets/Grid_Icons/printview.png', click: 'ShowSchdul', alt: 'Service Schedule'}
//                            ,{ icon: '../../Assets/Grid_Icons/conditions.png', click: 'CheckList', alt: 'Check List'}
//]";
//            }
//            else
//            {
//                return @"[]";
//            }
//        }
//        else
//        {
            return @"[]";
//        }
    }
}


public class DBPatientRegistration2
{
    public PatientRegistrationCollection RegBillGrid(GridPaging2 gp, out int total_records)
    {
        total_records = 0;
        try
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            DbCommand cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_REG_CONS_OPBILL_New");
            dBase.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, gp.COLUMN_NAME);
            dBase.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, gp.PREFIX_TEXT);
            dBase.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, gp.ADVANCESEARCH);
            dBase.AddInParameter(cmd, "@IP_PAGENUM", DbType.Int32, gp.CURRENT_PAGE);
            dBase.AddInParameter(cmd, "@IP_PAGESIZE", DbType.Int32, gp.PAGE_SIZE);
            dBase.AddInParameter(cmd, "@IP_FROM_DT", DbType.String, gp.FROM_DATE);
            dBase.AddInParameter(cmd, "@IP_TO_DT", DbType.String, gp.TO_DATE);
            dBase.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, gp.EVENTFLAG);
           // dBase.AddInParameter(cmd, "@IP_BILL_TYPE_ID", DbType.String, gp.BILL_TYPE_ID);
            EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(RegBillCollGrid2);
            CollectionBase cBase = dbLayer.ExecuteReaderCommand(cmd, sqlData);
            //total_records = Convert.ToInt32(dBase.GetParameterValue(cmd, "@OP_COUNT"));
            return (PatientRegistrationCollection)cBase;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillGrid").Name;
            ErrorLoger.InsertErrorLogger(ex, 1203, 1);
            return null;
        }
    }

      public PatientRegistrationCollection RegBillGrid2(GridPaging2 gp, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_REG_CONS_OPBILL_New");
                dBase.AddInParameter(cmd, "@IP_COLUMN_NAME", DbType.String, gp.COLUMN_NAME);
                dBase.AddInParameter(cmd, "@IP_PREFIX_TEXT", DbType.String, gp.PREFIX_TEXT);
                dBase.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, gp.ADVANCESEARCH);
                dBase.AddInParameter(cmd, "@IP_PAGENUM", DbType.Int32, gp.CURRENT_PAGE);
                dBase.AddInParameter(cmd, "@IP_PAGESIZE", DbType.Int32, gp.PAGE_SIZE);
                dBase.AddInParameter(cmd, "@IP_FROM_DT", DbType.String, gp.FROM_DATE);
                dBase.AddInParameter(cmd, "@IP_TO_DT", DbType.String, gp.TO_DATE);
                dBase.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, gp.EVENTFLAG);
                dBase.AddInParameter(cmd, "@IP_BILL_TYPE_ID", DbType.String, gp.BILL_TYPE_ID);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqlData = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(RegBillCollGrid2);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(cmd, sqlData);
                //total_records = Convert.ToInt32(dBase.GetParameterValue(cmd, "@OP_COUNT"));
                return (PatientRegistrationCollection)cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 1203, 1);
                return null;
            }
        }





        public CollectionBase RegBillCollGrid2(IDataReader returnData)
        {

            try
            {

                PatientRegistrationCollection PatregColl = new PatientRegistrationCollection();
                while (returnData.Read())
                {
                    PatientRegistration PatReg = new PatientRegistration();
                    PatReg.UMR_NO = !DBNull.Value.Equals(returnData["UMR_NO"]) ? Convert.ToString(returnData["UMR_NO"]) : string.Empty;
                    PatReg.CREATE_DT = !DBNull.Value.Equals(returnData["CREATE_DT"]) ? Convert.ToString(returnData["CREATE_DT"]) : string.Empty;
                    PatReg.GRP_BILL_NO = !string.IsNullOrEmpty(returnData["GRP_BILL_NO"].ToString()) ? returnData["GRP_BILL_NO"].ToString() : string.Empty;
                    PatReg.BILL_NO = !string.IsNullOrEmpty(returnData["BILL_NO"].ToString()) ? returnData["BILL_NO"].ToString() : string.Empty;
                    PatReg.PATIENT_ID = !DBNull.Value.Equals(returnData["patient_id"]) ? Convert.ToString(returnData["patient_id"]) : string.Empty;
                    PatReg.TRANSACTION_ID = !DBNull.Value.Equals(returnData["TRANSACTION_ID"]) ? Convert.ToInt32(returnData["TRANSACTION_ID"]) : 0;
                    PatReg.Transaction_no = !DBNull.Value.Equals(returnData["TRANSACTION_NO"]) ? Convert.ToString(returnData["TRANSACTION_NO"]) : string.Empty;
                    PatReg.Transaction_dt = !DBNull.Value.Equals(returnData["TRANSACTION_DT"]) ? Convert.ToString(returnData["TRANSACTION_DT"]) : string.Empty;
                    PatReg.MOBILE_NO1 = !DBNull.Value.Equals(returnData["MOBILE_NO1"]) ? Convert.ToString(returnData["MOBILE_NO1"]) : string.Empty;
                    PatReg.DISPLAY_NAME = !DBNull.Value.Equals(returnData["DISPLAY_NAME"]) ? Convert.ToString(returnData["DISPLAY_NAME"]) : string.Empty;
                    PatReg.RECEIPT_AMOUNT = !DBNull.Value.Equals(returnData["RECEIPT_AMOUNT"]) ? Convert.ToString(returnData["RECEIPT_AMOUNT"]) : "0";
                    PatReg.CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CONCESSION_AMOUNT"]) : "0";
                    PatReg.PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAID_AMOUNT"]) ? Convert.ToInt32(returnData["PAID_AMOUNT"]) : 0;
                    PatReg.DUE_AMOUNT = !DBNull.Value.Equals(returnData["DUE_AMOUNT"]) ? Convert.ToInt32(returnData["DUE_AMOUNT"]) : 0;
                    // PatReg.BILL_TYPE_NAME = !DBNull.Value.Equals(returnData["BILL_TYPE_NAME"]) ? Convert.ToString(returnData["BILL_TYPE_NAME"]) : "";
                    PatReg.CREATED_BY = !DBNull.Value.Equals(returnData["CREATED_BY"]) ? Convert.ToString(returnData["CREATED_BY"]) : string.Empty;
                    PatReg.MODIFIED_BY = !DBNull.Value.Equals(returnData["MODIFIED_BY"]) ? Convert.ToString(returnData["MODIFIED_BY"]) : string.Empty;
                    PatReg.MODIFY_DT = !DBNull.Value.Equals(returnData["MODIFY_DT"]) ? Convert.ToString(returnData["MODIFY_DT"]) : string.Empty;
                    PatReg.BILL_ID = !DBNull.Value.Equals(returnData["BILL_ID"]) ? Convert.ToInt32(returnData["BILL_ID"]) : 0;
                    PatReg.MOBILE_NO2 = !DBNull.Value.Equals(returnData["MOBILE_NO2"]) ? Convert.ToString(returnData["MOBILE_NO2"]) : string.Empty;
                    /*  PatReg.CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["CONCESSION_AMOUNT"]) : string.Empty;
                        PatReg.PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAID_AMOUNT"]) ? float.Parse(returnData["PAID_AMOUNT"].ToString()) : 0;
                        PatReg.DUE_AMOUNT = !DBNull.Value.Equals(returnData["DUE_AMOUNT"]) ? float.Parse(returnData["DUE_AMOUNT"].ToString()) : 0;
                        PatReg.IS_ASSESMENT_REQUIRED = !DBNull.Value.Equals(returnData["IS_ASSESMENT_REQUIRED"]) ? Convert.ToString(returnData["IS_ASSESMENT_REQUIRED"]) : "N";
   
                     */
                    /*Because Of THese Columns Duplicate Data Comming,  This Is Commented By Pushkar ,Please let Him Know Before Uncomment */
                    PatReg.CONCESSION_AUTHORIZATION_NAME = !DBNull.Value.Equals(returnData["CONCESSION_AUTHORIZATION_NAME"]) ? Convert.ToString(returnData["CONCESSION_AUTHORIZATION_NAME"]) : string.Empty;
                    PatReg.DUE_AUTHORIZATION_NAME = !DBNull.Value.Equals(returnData["DUE_AUTHORIZATION_NAME"]) ? Convert.ToString(returnData["DUE_AUTHORIZATION_NAME"]) : string.Empty;
                    PatReg.AUTHORIZED_NAME = !DBNull.Value.Equals(returnData["CONCESSION_AUTHORIZATION_NAME"]) ? Convert.ToString(returnData["CONCESSION_AUTHORIZATION_NAME"]) : string.Empty;
                    PatReg.FOREIGN_CATEGORIES_NAME = !DBNull.Value.Equals(returnData["FOREIGN_CATEGORIES_NAME"]) ? Convert.ToString(returnData["FOREIGN_CATEGORIES_NAME"]) : string.Empty;
                    PatReg.GROSS_AMOUNT = !DBNull.Value.Equals(returnData["GROSS_AMOUNT"]) ? Convert.ToInt32(returnData["GROSS_AMOUNT"]) : 0;
                    //PatReg.NET_AMOUNT = !DBNull.Value.Equals(returnData["NET_AMOUNT"]) ? Convert.ToInt32(returnData["NET_AMOUNT"]) : 0;                  

                    /*   PatReg.OUTSTANDING_DUE = !DBNull.Value.Equals(returnData["OUTSTANDING_DUE"]) ? Convert.ToString(returnData["OUTSTANDING_DUE"]) : string.Empty;
                    PatReg.DOCTOR_DEPARTMENT_NAME = !DBNull.Value.Equals(returnData["DOCTOR_DEPARTMENT_NAME"]) ? Convert.ToString(returnData["DOCTOR_DEPARTMENT_NAME"]) : string.Empty;
                    PatReg.REFERAL_TYPE_NAME = !DBNull.Value.Equals(returnData["REFERAL_TYPE_NAME"]) ? Convert.ToString(returnData["REFERAL_TYPE_NAME"]) : string.Empty;
                    PatReg.REFERAL_SOURCE_NAME = !DBNull.Value.Equals(returnData["REFERAL_SOURCE_NAME"]) ? Convert.ToString(returnData["REFERAL_SOURCE_NAME"]) : string.Empty;
                    PatReg.REFERAL_DOCTOR_NAME = !DBNull.Value.Equals(returnData["REFERAL_DOCTOR_NAME"]) ? Convert.ToString(returnData["REFERAL_DOCTOR_NAME"]) : string.Empty;
                    PatReg.REFERRED_BY = !DBNull.Value.Equals(returnData["REFERRED_BY"]) ? Convert.ToString(returnData["REFERRED_BY"]) : string.Empty;
                    */
                    /*Because Of THese Columns Duplicate Data Comming,  This Is Commented By Pushkar ,Please let Him Know Before Uncomment */
                    PatReg.NET_AMT = !DBNull.Value.Equals(returnData["NET_AMT"]) ? Convert.ToString(returnData["NET_AMT"]) : string.Empty;
                    PatReg.PAT_GROSS_AMOUNT = !DBNull.Value.Equals(returnData["PAT_GROSS_AMOUNT"]) ? Convert.ToString(returnData["PAT_GROSS_AMOUNT"]) : string.Empty;
                    PatReg.PAT_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["PAT_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["PAT_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.PAT_NET_AMT = !DBNull.Value.Equals(returnData["PAT_NET_AMT"]) ? Convert.ToString(returnData["PAT_NET_AMT"]) : string.Empty;
                    PatReg.PAT_PAID_AMOUNT = !DBNull.Value.Equals(returnData["PAT_PAID_AMOUNT"]) ? Convert.ToString(returnData["PAT_PAID_AMOUNT"]) : string.Empty;
                    PatReg.PAT_DUE_AMOUNT = !DBNull.Value.Equals(returnData["PAT_DUE_AMOUNT"]) ? Convert.ToString(returnData["PAT_DUE_AMOUNT"]) : string.Empty;
                    PatReg.CMP_GROSS_AMT = !DBNull.Value.Equals(returnData["CMP_GROSS_AMT"]) ? Convert.ToString(returnData["CMP_GROSS_AMT"]) : string.Empty;
                    PatReg.CMP_PAID_AMT = !DBNull.Value.Equals(returnData["CMP_PAID_AMT"]) ? Convert.ToString(returnData["CMP_PAID_AMT"]) : string.Empty;
                    PatReg.COMPANY_CONCESSION_AMOUNT = !DBNull.Value.Equals(returnData["COMPANY_CONCESSION_AMOUNT"]) ? Convert.ToString(returnData["COMPANY_CONCESSION_AMOUNT"]) : string.Empty;
                    PatReg.CMP_NET_AMT = !DBNull.Value.Equals(returnData["CMP_NET_AMT"]) ? Convert.ToString(returnData["CMP_NET_AMT"]) : string.Empty;
                    PatReg.CMP_DUE_AMT = !DBNull.Value.Equals(returnData["CMP_DUE_AMT"]) ? Convert.ToString(returnData["CMP_DUE_AMT"]) : string.Empty;
                    PatReg.TRANSFER_TYPE_ID = !DBNull.Value.Equals(returnData["TRANSFER_TYPE_ID"]) ? Convert.ToString(returnData["TRANSFER_TYPE_ID"]) : string.Empty;
                    PatReg.TOT_RECORD_CNT = !DBNull.Value.Equals(returnData["TOT_RECORD_CNT"]) ? Convert.ToString(returnData["TOT_RECORD_CNT"]) : string.Empty;
                    PatReg.COMPANY_DUE = !DBNull.Value.Equals(returnData["COMPANY_DUE"]) ? Convert.ToString(returnData["COMPANY_DUE"]) : string.Empty;
                    PatReg.DMS_UPLOAD = !DBNull.Value.Equals(returnData["DMS_UPLOAD"]) ? Convert.ToString(returnData["DMS_UPLOAD"]) : string.Empty;
                    PatReg.REC_TYPE_NAME = !DBNull.Value.Equals(returnData["REC_TYPE_NAME"]) ? Convert.ToString(returnData["REC_TYPE_NAME"]) : string.Empty;
                    PatReg.BILL_AMOUNT_EXC_GST = !DBNull.Value.Equals(returnData["BILL_AMOUNT_EXC_GST"]) ? Convert.ToString(returnData["BILL_AMOUNT_EXC_GST"]) : string.Empty;
                    PatReg.NET_AMOUNT_EXC_GST = !DBNull.Value.Equals(returnData["NET_AMOUNT_EXC_GST"]) ? Convert.ToString(returnData["NET_AMOUNT_EXC_GST"]) : string.Empty;
                    PatReg.GST_AMOUNT = !DBNull.Value.Equals(returnData["GST_AMOUNT"]) ? Convert.ToString(returnData["GST_AMOUNT"]) : string.Empty;
                    PatReg.SGST_AMOUNT = !DBNull.Value.Equals(returnData["SGST_AMOUNT"]) ? Convert.ToString(returnData["SGST_AMOUNT"]) : string.Empty;
                    PatReg.CGST_AMOUNT = !DBNull.Value.Equals(returnData["CGST_AMOUNT"]) ? Convert.ToString(returnData["CGST_AMOUNT"]) : string.Empty;
                    PatReg.BILL_TYPE_ID = !DBNull.Value.Equals(returnData["BILL_TYPE_ID"]) ? Convert.ToString(returnData["BILL_TYPE_ID"]) : string.Empty;
                   // PatReg.BILL_TYPE_ID = !DBNull.Value.Equals(returnData["BILL_TYPE_ID"]) ? Convert.ToString(returnData["BILL_TYPE_ID"]) : string.Empty;
                    PatReg.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? Convert.ToString(returnData["RECORD_STATUS"]) : string.Empty;
                    PatReg.PATIENT_STATUS = !DBNull.Value.Equals(returnData["PATIENT_TYPE_NAME"]) ? Convert.ToString(returnData["PATIENT_TYPE_NAME"]) : string.Empty;
                    PatregColl.Add(PatReg);
                }
                return PatregColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("RegBillCollGrid2").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }

        }


}



namespace EzHms.ModelEntity2
{

    [Serializable]
    public class GridPaging2 : LookUpSearch
    {
        private int _user_id;
        public int USER_ID
        {
            set
            {
                _user_id = value;
            }
            get { return _user_id; }
        }

        private int _sop_doc_id;
        public int SOP_DOC_ID
        {
            set
            {
                _sop_doc_id = value;
            }
            get { return _sop_doc_id; }
        }

        private int stp_id;
        public int STP_ID
        {
            set
            {
                stp_id = value;
            }
            get { return stp_id; }
        }

        private int page_num;
        public int PAGENUM
        {
            set
            {
                page_num = value;
            }
            get { return page_num; }
        }

        private int _session_id;
        public int SESSION_ID
        {
            set
            {
                _session_id = value;
            }
            get
            {
                return _session_id;
            }
        }
        private string from_date;

        public string FROM_DATE
        {
            get { return from_date; }
            set { from_date = value; }
        }
        private string to_date;

        public string TO_DATE
        {
            get { return to_date; }
            set { to_date = value; }
        }
        private string _flag;

        public string FLAG
        {
            get { return _flag; }
            set { _flag = value; }
        }

        private string ADMN_TYPE_ID = string.Empty;

        public string ADMN_TYPE_ID1
        {
            get { return ADMN_TYPE_ID; }
            set { ADMN_TYPE_ID = value; }
        }
        private int _patient_class_id;
        public int PATIENT_CLASS_ID
        {
            get
            {
                return _patient_class_id;
            }
            set
            {
                _patient_class_id = value;
            }
        }


        private int _doc_id = 0;

        public int DOC_ID
        {
            get { return _doc_id; }
            set { _doc_id = value; }
        }


        private int _mod_id = 0;

        public int MOD_ID
        {
            get { return _mod_id; }
            set { _mod_id = value; }
        }

        private string all_ind;

        public string ALL_IND
        {
            get { return all_ind; }
            set { all_ind = value; }
        }

        private string _LOCATION_ID;

        public string LOCATION_ID
        {
            get { return _LOCATION_ID; }
            set { _LOCATION_ID = value; }
        }

        private int _dept_id;

        public int DEPT_ID
        {
            get { return _dept_id; }
            set { _dept_id = value; }
        }
        private int _srv_grp_id;

        public int SRV_GRP_ID
        {
            get { return _srv_grp_id; }
            set { _srv_grp_id = value; }
        }
        private string patient_name;

        public string PATIENT_NAME
        {
            get { return patient_name; }
            set { patient_name = value; }
        }
        private string mobileno;

        public string MOBILENO
        {
            get { return mobileno; }
            set { mobileno = value; }
        }
        private string resonse_id;

        public string RESPONSE_ID
        {
            get { return resonse_id; }
            set { resonse_id = value; }
        }
        private string _ADMN_DT;

        public string ADMN_DT
        {
            get { return _ADMN_DT; }
            set { _ADMN_DT = value; }
        }
        private int reference_type_id;
        public int REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }
        private string _authorized_name;
        public string _AUTHORIZED_NAME
        {
            get { return _authorized_name; }
            set { _authorized_name = value; }
        }

        private string _ADMN_EC_ID = string.Empty;
        public string ADMN_EC_ID
        {
            get { return _ADMN_EC_ID; }
            set { _ADMN_EC_ID = value; }
        }
        private string _QueryKey = string.Empty;
        public string QueryKey
        {
            get { return _QueryKey; }
            set { _QueryKey = value; }
        }
        private string auto_id1;
        public string AUTO_ID1
        {
            get { return auto_id1; }
            set { auto_id1 = value; }
        }
        private string auto_id;
        public string AUTO_ID
        {
            get { return auto_id; }
            set { auto_id = value; }
        }
        private string column_name1;
        public string COLUMN_NAME1
        {
            get { return column_name1; }
            set { column_name1 = value; }
        }
        private string sp;
        public string SP
        {
            get { return sp; }
            set { sp = value; }
        }
        private int blood_req_id;
        public int BLOOD_REQ_ID
        {
            get { return blood_req_id; }
            set { blood_req_id = value; }
        }
        private string patient_type_id;
        public string PATIENT_TYPE_ID
        {
            get { return patient_type_id; }
            set { patient_type_id = value; }
        }
        private string column_name2;
        public string COLUMN_NAME2
        {
            get { return column_name2; }
            set { column_name2 = value; }
        }
        private string auto_id2;
        public string AUTO_ID2
        {
            get { return auto_id2; }
            set { auto_id2 = value; }
        }

        private string date;
        public string DATE
        {
            get { return date; }
            set { date = value; }
        }


        private int autoid;
        public int _AUTO_ID
        {
            get { return autoid; }
            set { autoid = value; }
        }
        private string _HC_SCH_ID;

        public string HC_SCH_ID
        {
            get { return _HC_SCH_ID; }
            set { _HC_SCH_ID = value; }
        }
        private string _PC_TEMPLATE_ID;

        public string PC_TEMPLATE_ID
        {
            get { return _PC_TEMPLATE_ID; }
            set { _PC_TEMPLATE_ID = value; }
        }
        private string _PC_SCH_REQ_ID;

        public string PC_SCH_REQ_ID
        {
            get { return _PC_SCH_REQ_ID; }
            set { _PC_SCH_REQ_ID = value; }
        }
        private string _EMP_HC_ID;

        public string EMP_HC_ID
        {
            get { return _EMP_HC_ID; }
            set { _EMP_HC_ID = value; }
        }
        private string tran_type_id;

        public string TRAN_TYPE_ID
        {
            get { return tran_type_id; }
            set { tran_type_id = value; }
        }
        private string pc_req_id;
        public string PC_REQ_ID
        {
            get { return pc_req_id; }
            set { pc_req_id = value; }
        }
        private string pc_req_source_id;
        public string PC_REQ_SOURCE_ID
        {
            get { return pc_req_source_id; }
            set { pc_req_source_id = value; }
        }
        private string _HC_SCH_REQ_ID;
        public string HC_SCH_REQ_ID
        {
            get { return _HC_SCH_REQ_ID; }
            set { _HC_SCH_REQ_ID = value; }
        }
        private string _EMP_VACCINATION_ID;
        public string EMP_VACCINATION_ID
        {
            get { return _EMP_VACCINATION_ID; }
            set { _EMP_VACCINATION_ID = value; }
        }
        private int req_stat_id;
        public int REQ_STAT_ID
        {
            get { return req_stat_id; }
            set { req_stat_id = value; }
        }
        private int _auto_id1;
        public int _AUTO_ID1
        {
            get { return _auto_id1; }
            set { _auto_id1 = value; }
        }
        private int _auto_id2;
        public int _AUTO_ID2
        {
            get { return _auto_id2; }
            set { _auto_id2 = value; }
        }

        private string admin_no;
        public string ADMIN_NO
        {
            get { return admin_no; }
            set { admin_no = value; }
        }
        private string gridflag;
        public string GRIDFLAG
        {
            get { return gridflag; }
            set { gridflag = value; }
        }
        public string IS_STAT { get; set; }

        private string schedule_status_cd;
        public string SCHEDULE_STATUS_CD
        {
            get { return schedule_status_cd; }
            set { schedule_status_cd = value; }
        }

        private string _PROCNAME;

        public string PROCNAME
        {
            get { return _PROCNAME; }
            set { _PROCNAME = value; }
        }
        private string _GRIDPAGENAME;

        public string GRIDPAGENAME
        {
            get { return _GRIDPAGENAME; }
            set { _GRIDPAGENAME = value; }
        }
        private string _VACCINATION_TRN_ID;

        public string VACCINATION_TRN_ID
        {
            get { return _VACCINATION_TRN_ID; }
            set { _VACCINATION_TRN_ID = value; }
        }
        private string _ENTITY_ID;

        public string ENTITY_ID
        {
            get { return _ENTITY_ID; }
            set { _ENTITY_ID = value; }
        }

        private string hai_trn_no;

        public string _HAI_TRN_NO
        {
            get { return hai_trn_no; }
            set { hai_trn_no = value; }
        }

        private string reference_type_idd;
        public string REFERENCE_TYPE_IDD
        {
            get { return reference_type_idd; }
            set { reference_type_idd = value; }
        }
        private string _PC_SCH_ID;
        public string PC_SCH_ID
        {
            get { return _PC_SCH_ID; }
            set { _PC_SCH_ID = value; }
        }

        private string ward_auto_chrg_id;

        public string WARD_AUTO_CHRG_ID
        {
            get { return ward_auto_chrg_id; }
            set { ward_auto_chrg_id = value; }
        }
        private int pas_bill_id;

        public int PAS_BILL_ID
        {
            get { return pas_bill_id; }
            set { pas_bill_id = value; }
        }

        private int _BILL_ASSESMENT_ID;

        public int BILL_ASSESMENT_ID
        {
            get { return _BILL_ASSESMENT_ID; }
            set { _BILL_ASSESMENT_ID = value; }
        }
        private string _ER_FLAG;

        public string ER_FLAG
        {
            get { return _ER_FLAG; }
            set { _ER_FLAG = value; }

        }


        private string ip_flag;

        public string IP_FLAG
        {
            get { return ip_flag; }
            set { ip_flag = value; }

        }
        private string admn_service_type_id;

        public string ADMN_SERVICE_TYPE_ID
        {
            get { return admn_service_type_id; }
            set { admn_service_type_id = value; }

        }
        private int _days;
        public int DAYS
        {

            get { return _days; }
            set { _days = value; }

        }
        private string _ip_advance_search;

        public string IP_ADVANCE_SEARCH
        {
            get { return _ip_advance_search; }
            set { _ip_advance_search = value; }
        }

        private string _ip_prefixtext;

        public string IP_PREFIXTEXT
        {
            get { return _ip_prefixtext; }
            set { _ip_prefixtext = value; }
        }

        private string _ip_pagenum;

        public string IP_PAGENUM
        {
            get { return _ip_pagenum; }
            set { _ip_pagenum = value; }
        }
        private string _ip_pagesize;

        public string IP_PAGESIZE
        {
            get { return _ip_pagesize; }
            set { _ip_pagesize = value; }
        }
        private string ip_from_dt;

        public string IP_FROM_DT
        {
            get { return ip_from_dt; }
            set { ip_from_dt = value; }
        }
        private string ip_to_dt;

        public string IP_TO_DT
        {
            get { return ip_to_dt; }
            set { ip_to_dt = value; }
        }
        private string _CatId;

        public string CatId
        {
            get { return _CatId; }
            set { _CatId = value; }
        }
        private string _admn;

        public string admn
        {
            get { return _admn; }
            set { _admn = value; }
        }
        private string _theterNo;

        public string theterNo
        {
            get { return _theterNo; }
            set { _theterNo = value; }
        }

        private string _MED_CHK_TEMPLAT_ID;
        public string MED_CHK_TEMPLAT_ID
        {
            get { return _MED_CHK_TEMPLAT_ID; }
            set { _MED_CHK_TEMPLAT_ID = value; }
        }
        public int ROOM_ID { get; set; }
        public int FLOOR_ID { get; set; }
        public int WARD_ID { get; set; }

        public int NURSESTATION_ID { get; set; }
        public int BLOCK_ID { get; set; }
        public int WING_ID { get; set; }

        public int GENDER_ID { get; set; }
        public int SPECIALIZATION_ID { get; set; }
        public int BED_STATUS_ID { get; set; }
        public string pageSize { get; set; }
        public string curPage { get; set; }

        private string _FLAG_USER;

        public string FLAG_USER
        {
            get { return _FLAG_USER; }
            set { _FLAG_USER = value; }
        }
        private string recevie_type_id;

        public string RECEVIE_TYPE_ID
        {
            get { return recevie_type_id; }
            set { recevie_type_id = value; }
        }
       

        private string _COUNTER;

        public string COUNTER
        {
            get { return _COUNTER; }
            set { _COUNTER = value; }
        }
        private string _ORDER_BY;

        public string ORDER_BY
        {
            get { return _ORDER_BY; }
            set { _ORDER_BY = value; }
        }
        private string _CREDIT_VALIDITY_DT;

        public string CREDIT_VALIDITY_DT
        {
            get { return _CREDIT_VALIDITY_DT; }
            set { _CREDIT_VALIDITY_DT = value; }
        }
        
        public int TotalCount;
        private string _usr_id;
        public string USR_ID
        {
            set
            {
                _usr_id = value;
            }
            get { return _usr_id; }
        }
        private string _LOC_ID;
        public string LOC_ID
        {
            set
            {
                _LOC_ID = value;
            }
            get { return _LOC_ID; }
        }
        private int _TARIFF_ID;
        public int TARIFF_ID
        {
            set
            {
                _TARIFF_ID = value;
            }
            get { return _TARIFF_ID; }
        }
        private string _SERVICE_GROUP_ID;

        public string SERVICE_GROUP_ID
        {
            get { return _SERVICE_GROUP_ID; }
            set { _SERVICE_GROUP_ID = value; }
        }
        private string _DEPARTMENT_ID;

        public string DEPARTMENTID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }
        //private int eventflag;

        //public int EVENTFLAG
        //{
        //    get { return eventflag; }
        //    set { eventflag = value; }
        //}

        //public string COLUMN_NAME { get; set; }
        //public string PREFIX_TEXT { get; set; }
        public int CMP_ID { get; set; }
        public string BILL_TYPE_ID { get; set; }
         public string PATIENT_TYPE_NAME { get; set; }
       
    }
}