using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using System.Collections.Generic;
using EzHms.ModelEntity;
using System.Web.Script.Services;
using System.Net;
using System.Text;
using System.IO;
using System.Data;
using System.Web.Script.Serialization;
using EzHms.Abstract;
using EzHms.DataAccessObject;
using Newtonsoft.Json;
/// <summary>
/// Summary description for GridService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class GridService : System.Web.Services.WebService, IBindGrids
{

    public GridService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    //public CollectionBase BindGrid(GridPaging _gPage, out int _total_records)
    //{
    //    EzHms.BusinessObject.BindGridsBO _obj = new EzHms.BusinessObject.BindGridsBO();
    //    return _obj.BindGrid(_gPage, out _total_records);
    //}

    [WebMethod(EnableSession = true)]
    public List<object> BindGetAllsGrid(string Params)
    {
        int total_record = 0;
        EzHms.DataAccessObject.DBBindGrids _obj = new EzHms.DataAccessObject.DBBindGrids();
        CollectionBase _coll = _obj.BindGetAllsGrid(Params, SessionHandler.DBSESSION_ID, out total_record);
        if (_coll != null)
        {
            List<object> _lst = new List<object>();
            _lst.Add(_coll);
            _lst.Add(total_record);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod(EnableSession = true)]
    [ScriptMethod]
    public CollectionBase GetExchangeRate(int fromcurid, int tocurid)
    {
        DBPatientRegistration balobj = new DBPatientRegistration();
        return balobj.GetExchangeRate(fromcurid, tocurid);
    }
    [WebMethod(EnableSession = true)]
    [ScriptMethod]
    public CollectionBase GetExchangeRateNew(int fromcurid, int tocurid, string flag)
    {
        DBPatientRegistration balobj = new DBPatientRegistration();
        return balobj.GetExchangeRateNew(fromcurid, tocurid, flag);
    }
    [WebMethod(EnableSession = true)]
    public service_priceCollection CheckVistiTypeVales(string _srv_id, string ddlVisitVal, string DeptID, string PatientID, string DoctorID, string ConsTariffID, string CompanyID, string PageType)
    {
        service_priceCollection _coll = new service_priceCollection();
        ServicePrice serModal = new ServicePrice();
        //EzHms.Abstract.IServicePrice intSerPrice = new EzHms.Services.ServicePriceWebService();
        DBServiceMaster intSerPrice = new DBServiceMaster();
        serModal.DOCTOR_ID = !string.IsNullOrEmpty(DoctorID) ? Convert.ToInt32(DoctorID) : 0;
        serModal.SERVICE_ID = !string.IsNullOrEmpty(_srv_id) ? Convert.ToInt32(_srv_id) : 0;//2;
        serModal.DEPARTMENT_ID = !string.IsNullOrEmpty(DeptID) ? Convert.ToInt32(DeptID) : 0;
        serModal.CONSULTATION_TYPE_ID = !string.IsNullOrEmpty(ddlVisitVal) ? Convert.ToInt32(ddlVisitVal) : 0;
        serModal.PATIENT_ID = !string.IsNullOrEmpty(PatientID) ? Convert.ToInt32(PatientID) : 0;
        serModal.SESSION_ID = SessionHandler.DBSESSION_ID.ToString();
        serModal.PATIENT_CLASS_ID = 2;
        serModal.TARIFF_ID = !string.IsNullOrEmpty(ConsTariffID) ? Convert.ToInt32(ConsTariffID) : 1;
        _coll = (service_priceCollection)intSerPrice.GetServicePriceforcons(serModal);
        return _coll;
    }

    [WebMethod(EnableSession = true)]
    public PatientRegistrationCollection GetEmgFlagExistORnot(string Flag)
    {
        EzHms.DataAccessObject.DBPatientRegistration objdal = new EzHms.DataAccessObject.DBPatientRegistration();
        EzHms.ModelEntity.PatientRegistration _objModel1 = new EzHms.ModelEntity.PatientRegistration();
        _objModel1.FLAG = Flag;
        PatientRegistrationCollection _Emgcoll = new PatientRegistrationCollection();
        _Emgcoll = (PatientRegistrationCollection)objdal.GetEmergencyFlagExist(_objModel1);
        return (_Emgcoll != null && _Emgcoll.Count > 0) ? (_Emgcoll) : null;

        //return null;


    }
    [WebMethod(EnableSession = true)]
    public List<object> BindGetAllGrid(string Params)
    {
        int total_records = 0;
        EzHms.DataAccessObject.DBBindGrids _obj = new EzHms.DataAccessObject.DBBindGrids();
        CollectionBase _coll = _obj.BindGetAllGrid(Params, SessionHandler.DBSESSION_ID, out total_records);
        if (_coll != null)
        {
            List<object> _lst = new List<object>();
            _lst.Add(_coll);
            _lst.Add(total_records);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod(EnableSession = true)]
    [ScriptMethod()]
    public List<string> Post(string ProcName, string Params)
    {


        EzHms.DataAccessObject.DBBindGrids objdb = new EzHms.DataAccessObject.DBBindGrids();
        int count = objdb.Post(ProcName, Params);

        List<string> objstr = new List<string>();
        objstr.Add(count.ToString());
        return objstr;


    }
    [WebMethod(EnableSession = true)]
    public CollectionBase Get(String ProcName, string Params)
    {

        EzHms.DataAccessObject.DBBindGrids _obj = new EzHms.DataAccessObject.DBBindGrids();
        CollectionBase _coll = _obj.Get(ProcName, Params);
        return _coll;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindConsultations(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize)
    {
        int total_records = 0;
        GridPaging gpage = new GridPaging();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.PAGE_SIZE = Convert.ToInt32(pageSize);
        gpage.CURRENT_PAGE = Convert.ToInt32(pageNum);
        if (_fDt == string.Empty)
            gpage.FROM_DATE = null; //  DateTime.Now.ToString("MM/dd/yyyy");
        else
            gpage.FROM_DATE = Convert.ToDateTime(_fDt).ToString("MM/dd/yyyy");
        if (_tDt == string.Empty)
            gpage.TO_DATE = null; // DateTime.Now.ToString("MM/dd/yyyy");
        else
            gpage.TO_DATE = Convert.ToDateTime(_tDt).ToString("MM/dd/yyyy");

        string todate = string.Empty;
        if (_pText == string.Empty)
            _cName = string.Empty;

        if (_cName == "BILL_DT")
        {
            _pText = gpage.FROM_DATE;//Convert.ToDateTime(prefix).ToString(ViewState["datefmt"].ToString());
            //todate = txtToDate.Text;
        }
       
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindOutstandingDueGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string rectpy, string _advSrch,string filter_by, string _eventFlag)
    {
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindIpCreditLimitGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
       
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindReAdmissionGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindBedTransfrList(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindToBeDischargGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindChangeAuthorizationDetails(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize)
    {
     
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindModifyApprovalTransactionGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {

    
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindServiceCallOffList(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;
    }
   
    [WebMethod(EnableSession = true)]
    public List<object> BindUserVoucherEntryList(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        int count = 0;
        string toDate = string.Empty;
        //    ////Deposit advance REFERENCE_TYPE_ID=7 
        EzHms.ModelEntity.LookUpSearch _lookup = new EzHms.ModelEntity.LookUpSearch();
        if (_cName == "VOUCHER_DT")
        {
            _pText = _lookup.FROM_DATE;
            toDate = _tDt;
        }
        else
            _pText = _pText;
        _lookup.FROM_DATE = _fDt;
        _lookup.TO_DATE = _tDt;
        _lookup.FLAG = "R";
        _lookup.PREFIX_TEXT = _pText;
        _lookup.COLUMN_NAME = _cName;
        if (_advSrch != string.Empty)
        { _lookup.ADVANCESEARCH = _advSrch; }
        if (_pText == string.Empty)
        {
            _cName = string.Empty;
            _lookup.PreConditon = null;
        }
        if (_fDt == string.Empty)
            _lookup.FROM_DATE = null;// DateTime.Now.ToString("MM/dd/yyyy");
        else
            _lookup.FROM_DATE = Convert.ToDateTime(_fDt).ToString("MM/dd/yyyy");
        if (_tDt == string.Empty)
            _lookup.TO_DATE = null;// DateTime.Now.ToString("MM/dd/yyyy");
        else
            _lookup.TO_DATE = Convert.ToDateTime(_tDt).ToString("MM/dd/yyyy");

        _lookup.CURRENT_PAGE = Convert.ToInt32(pageNum);
        _lookup.PAGE_SIZE = Convert.ToInt32(pageSize);
       
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindPreRefundsGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string flag, int _eventFlag)
    {
       
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindIPDischargeGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch,string filter_by, string _eventFlag)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindIPDischargeGridMRD(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }
     [WebMethod(EnableSession = true)]
    public List<object> BindPreAdmissionList(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
       
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindPreAdvances_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
       
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindFinalBillCncl_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindRegistration_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _Flag, string _advSrch, string _eventFlag)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> All_Registered_patient_dtls(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _Flag, string _advSrch)
    {
       
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindPreRegistration_Grid(string PreRegSrcId, string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public static List<object> GetRequisition(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
       
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindAdmission_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindCorpCnslts_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
       
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindChngAdmission_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindChngReceiptMode_Grid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindPostDiscountGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {

       
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindApproximateGird(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string Flag, string _advSrch, string _eventFlag)
    {
        
            return null;

    }
    [WebMethod(EnableSession = true)]
    public List<object> BindIcdCodeAssesmentData(string _fDt, string _tDt, string _cname, string _ptext, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindDrWiseSettlementGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindRcptCncl(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindDocTrnsfrGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> GetDoctorAvailability(string fDt, string tDt, string pageSize, string pageNum)
    {
       
            return null;
    }

    [WebMethod(EnableSession = true)]
    public List<object> GetDocAvailability(string date)
    {
        
            return null;
    }



    [WebMethod(EnableSession = true)]
    public List<object> BindServicesGrid(string service_type_id, string tariff_id, string Patient_Class_id, string column_name, string prefix_text, string _advSrch, string flag, string Gender_id, string company_id, string umr_no, string pageSize, string pageNum)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase BindVisitType()
    {
        DBPatientRegistration OBJ = new DBPatientRegistration();
        CollectionBase conslTypeColl = OBJ.GetLevelCollection(EzHms.ModelEntity.ServiceDimenssions.CONSULTATION_TYPE);
        return conslTypeColl;
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase BindPreCausionsOnsrvs(string srvId)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    public List<CollectionBase> MeditationData(string clinical)
    {
       
        return null;
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase pkgincludesub(string srvid, string tariffid, string pkg, string Umr_no, string PAT_CATEGORY_ID, string cmp_id)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> pkgincludesubNEW(string srvid, string tariffid, string pkg, string Umr_no, string PAT_CATEGORY_ID, string cmp_id)
    {

        EzHms.BusinessObject.Services objsrv = new EzHms.BusinessObject.Services();
        DataSet ds = objsrv.GetAutoPkgservicesincludesNEW(Convert.ToInt32(srvid), Convert.ToInt32(tariffid), Umr_no, PAT_CATEGORY_ID, cmp_id);
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
    [WebMethod(EnableSession = true)]
    public List<object> BindOpBillHistory(string umr_no, string FormName, string cname, string prifixtext, string pageSize, string pageNum, string _advSrch)
    {

        return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindOpBillidBasedSrvsHistory(string id)
    {
       return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindOpSrvHistory(string umr_no, string _srvId, string pat_Class_id)
    {
        
        { return null; }
    }

    [WebMethod(EnableSession = true)]
    public List<object> BindOpBillSrvidBasedSrvsHistory(string id, string _srvId, string Pat_CLass)
    {
       
        { return null; }
    }
    [WebMethod(EnableSession = true)]
    [ScriptMethod()]
    public CollectionBase GetIndentDrugData(string patient_id, string order_id, string Referal_id, string loc_id, string cmp_id, string flag, string PAT_CATEGORY_ID, string tariff_id)
    {
        return null;
    }

    [WebMethod(EnableSession = true)]
    [ScriptMethod()]
    public CollectionBase BindRepeatTest(string bill_id, string Cmp_id, string PAT_CATEGORY_ID, string tariff_id)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    [ScriptMethod()]
    public CollectionBase GetSelfInv(string Ind_ID, string PAT_CATEGORY_ID, string tariff_id, string cmp_id)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> GetConsultationDoctors(string _cName, string _pText, string pageNum, string pageSize, string flag, string _advSrch, string _eventFlag)
    {
       
            return null;


    }
    [WebMethod(EnableSession = true)]
    public List<object> GetDoctorsDetails(string _cName, string _pText, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
       
            return null;


    }
    [WebMethod(EnableSession = true)]
    public List<object> GetBedRoomWardDetails(string _cName, string _pText, string pageNum, string pageSize, string _advSrch, string _eventFlag)
    {
        
            return null;


    }

   
    public void CheckEmergencyPrice(string chkVal)
    {
        if (!string.IsNullOrEmpty(chkVal))
        {
            if (chkVal == "Y")
                HttpContext.Current.Session.Add("FLAG", "EMG_PRICE");
            else
                HttpContext.Current.Session.Add("FLAG", null);

        }
        //return chkVal;
    }
    [WebMethod(EnableSession = true)]
    public string GetCurrentTime(string PresentTime)
    {
        return PresentTime = System.DateTime.Now.ToString("HH:mm");
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase GetIndentsServices(string Consultant_ID, string Patient_ID, string _fDt, string _tDt, string _cName, string _pText, string _advSrch)
    {
        GridPaging gpage = new GridPaging();
        gpage.COLUMN_NAME = _cName;
        gpage.PREFIX_TEXT = _pText;
        gpage.PAGE_SIZE = Convert.ToInt32(50);
        gpage.CURRENT_PAGE = Convert.ToInt32(1);
        if (_advSrch != string.Empty)
            gpage.ADVANCESEARCH = _advSrch;
        int total_Records = 0;

        int PatId = !string.IsNullOrEmpty(Patient_ID) ? Convert.ToInt32(Patient_ID) : 0;
        int Billid = !string.IsNullOrEmpty(Consultant_ID) ? Convert.ToInt32(Consultant_ID) : 0;

        return null;
    }
    //[WebMethod(EnableSession = true)]
    //public void AddPreContion(string Flag)
    //{
    //    SessionHandler.PRE_CONDITON = "UMR^" + Flag;
    //    HttpContext.Current.Session.Add("CONDITION", "UMR^" + Flag);

    //}
    /*Added by Swetha Reddy*/
    [System.Web.Script.Services.ScriptMethod()]
    [System.Web.Services.WebMethod]
    public string Get_imagedetails(byte[] _str, string UMR_NO, string REFERENCE_ID, string REFERENCE_TYPE_ID)
    {
        string stObj = Convert.ToBase64String(_str);

        HttpContext.Current.Session.Add("IMG_UMR_NO", UMR_NO);
        HttpContext.Current.Session.Add("IMG_REFERENCE_ID", REFERENCE_ID);
        HttpContext.Current.Session.Add("IMG_REFERENCE_TYPE_ID", REFERENCE_TYPE_ID);
        return stObj;
    }

   
    

    [WebMethod(EnableSession = true)]
    public string GetBaseString(byte[] _str, string UMR_NO, string REFERENCE_ID, string REFERENCE_TYPE_ID, string FormName)
    {
        string stObj = Convert.ToBase64String(_str);

        HttpContext.Current.Session.Add("IMG_UMR_NO", UMR_NO);
        HttpContext.Current.Session.Add("IMG_REFERENCE_ID", REFERENCE_ID);
        HttpContext.Current.Session.Add("IMG_REFERENCE_TYPE_ID", REFERENCE_TYPE_ID);
        SessionHandler.Umr_No = UMR_NO;
        SessionHandler.STP_NAME = FormName;
        return stObj;
    }
    [WebMethod(EnableSession = true)]
    public string Insertsms(string mobile_no)
    {
        string guidstr = Guid.NewGuid().ToString();
        string Otp = guidstr.Substring(0, 8);

        return null;

    }
    [WebMethod(EnableSession = true)]
    public CollectionBase CheckUploadedDoc(string UmrNo)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase GetLanguageInstructions(string SrvId, string LangId)
    {
        return null;

    }
    [WebMethod(EnableSession = true)]
    public CollectionBase HealthCardsBinding(string hc_type_id)
    {
        return null;
    }
    //[WebMethod(EnableSession = true)]
    //public CollectionBase HCUnRegisterEdPatDtls(string hc_id)
    //{
    //    return null;
    //}
    [WebMethod(EnableSession = true)]
    public CollectionBase HCUnRegisterEdPatDtls(string hc_id)
    {
        EzHms.DataAccessObject.DBHealthCarddetails objdb = new EzHms.DataAccessObject.DBHealthCarddetails();
        CollectionBase cbase = objdb.HCUnRegisterEdPatDtls(Convert.ToInt32(hc_id));
        return cbase;
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase MultipleHcGetting(string _umr_no)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    public CollectionBase Get_Hc_Count_status(string _fDt, string _tDt)
    {
        return null;
    }
    [WebMethod(EnableSession = true)]
    public int Adv_tran_Save_Xml(string xml)
    {
        return 1;
    }
    [WebMethod(EnableSession = true)]
    public List<object> Get_Default_Values()
    {
        string ref_by = string.Empty;
        string ref_source = string.Empty;
        string ref_to = string.Empty;
        EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
        DataSet dset = objdb.Get_Default_Values1();
        DataTable dt0 = dset.Tables[0];
        if (dt0 != null)
        {
            ref_by = JsonConvert.SerializeObject(dt0, Formatting.Indented);
        }
        DataTable dt1 = dset.Tables[1];
        if (dt1 != null)
        {
            ref_source = JsonConvert.SerializeObject(dt1, Formatting.Indented);
        }
        DataTable dt2 = dset.Tables[2];
        if (dt2 != null)
        {
            ref_to = JsonConvert.SerializeObject(dt2, Formatting.Indented);
        }
        List<object> obj1 = new List<object>();
        obj1.Add(ref_by);
        obj1.Add(ref_source);
        obj1.Add(ref_to);
        return obj1;
    }

    [System.Web.Services.WebMethod(EnableSession = true)]
    public string PackageAvailabilitychk(int srv_id, string Date)
    {
        string ResponseData = string.Empty;
        System.Net.ServicePointManager.Expect100Continue = false;
        MasterClass obj1 = new MasterClass();
        string Path = "https://emr.doctor9.com/napi_cmn/apt/";
        var request = (HttpWebRequest)WebRequest.Create(new Uri("" + Path + "api/Intgrtn/getApiIntgData"));
        using (request as IDisposable)
        {
            request.Method = "POST";
            request.Accept = "application/x-www-form-urlencoded";
            string _Json = "[{ \"lookupName\": \"AvailableHC\", \"apiQry\": \"<root><MIG_ID>8</MIG_ID><SERVICE_ID>" + srv_id + "</SERVICE_ID><APMNT_DT>" + Date + "</APMNT_DT></root>\", \"migId\": \"" + 8 + "\" }]";
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
    /*Ends*/


    
    [System.Web.Services.WebMethod(EnableSession = true)]
    public CollectionBase GetBalance_amt(string Umr_no, string Admn_id, string Advance_type_id)
    {
        return null;
    }
    [System.Web.Services.WebMethod(EnableSession = true)]
    public List<object> GetBalance_amt_all(string Umr_no, string _flag, string pageNum, string pageSize)
    {
      
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindGetAllGridNew(string _cName, string _fDt, string _tDt, string _pText, string pageNum, string pageSize,
        string _advSrch, string flag, string ProcName, string _eventFlag, string RECEVIE_TYPE_ID, string REFERENCE_TYPE_ID,string STP_ID)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public  List<object> BindDoctorPaymentGrid(string _cName, string _pText, string _advSrch, string pageSize, string pageNum, string _fDt, string _tDt)
    {
       
            return null;
    }
    [WebMethod(EnableSession = true)]
    public  List<object> BindPayPeriodGrid(string _cName, string _fDt, string _pText, string _tDt, string pageNum, string pageSize, string _advSrch)
    {
        
            return null;
    }


    [WebMethod(EnableSession = true)]
    public List<object> BindGetAllGridNew_Hic(string _cName, string _fDt, string _tDt, string _pText, string pageNum, string pageSize,
        string _advSrch, string flag, string ProcName, string _eventFlag, string RECEVIE_TYPE_ID, string REFERENCE_TYPE_ID, string STP_ID, string TRAN_TYPE_ID)
    {
        
            return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> BindGetAllGridNew_Mrd(string _cName, string _fDt, string _tDt, string _pText, string pageNum, string pageSize,
        string _advSrch, string flag, string ProcName, string _eventFlag, string RECEVIE_TYPE_ID, string REFERENCE_TYPE_ID, string STP_ID, string TRAN_TYPE_ID, string FilterBy)
    {
        
            return null;
    }

    //SERVICE VERIFICATION

    [WebMethod(EnableSession = true)]
    public List<object> BindGetAllGridServiceVer(string _cName, string _fDt, string _tDt, string _pText, string pageNum, string pageSize,
        string _advSrch, string ProcName, string _eventFlag, string STP_ID, string Dt_Filter)
    {
       
            return null;
    }
    //[WebMethod(EnableSession = true)]
    //public void AddMCIPrecondition_Consultation(string is_schedule)
    //{
    //    SessionHandler.PRE_CONDITON = "DOCTOR^^^" + is_schedule;
    //    HttpContext.Current.Session.Add("CONDITION", "DOCTOR^^^" + is_schedule);
    //}
    [WebMethod(EnableSession=true)]
    public string SaveFavourites(string srvId, int user_id)
    {
         return null;
    }
    [WebMethod(EnableSession = true)]
    public List<object> GetFavourites(int UserId, int Tariff_id, string _cName, string _pText, string _advSrch, int _company_id, int pageSize, int pageNum, string _eventFlag, int PAT_CATEGORY_ID)
    {

        int _count = 0;
        DBPatientRegistration gpage = new DBPatientRegistration();
        //BedTransfer obj = new BedTransfer();
        GridPaging gpag = new GridPaging();
        gpag.USER_ID = UserId;
        gpag.TARIFF_ID = Tariff_id;
        gpag.COLUMN_NAME = _cName;
        gpag.PREFIX_TEXT = _pText;
        gpag.IP_ADVANCE_SEARCH = _advSrch;
        gpag.CMP_ID = _company_id;
        gpag.PAGE_SIZE = pageSize;
        gpag.CURRENT_PAGE = pageNum;
        gpag.EVENTFLAG = Convert.ToInt32(_eventFlag);
        gpag.PATIENT_CLASS_ID = PAT_CATEGORY_ID;

        DataSet ds = gpage.GetFavouritesList(gpag, out _count);
        MasterClass mobj = new MasterClass();
        List<object> items1 = mobj.ConvertDataSetToListObject(ds);
        if (ds.Tables != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
        {
            _count = Convert.ToInt32(ds.Tables[0].Rows[0]["TOT_RECORD_CNT"].ToString());
            List<object> _lst = new List<object>();
            _lst.Add(items1);
            _lst.Add(_count);
            return _lst;
        }
        else
            return null;
    }
    [WebMethod(EnableSession = true)]
    public service_priceCollection CheckVistiTypeValesforservice(string _srv_id, string ddlVisitVal, string PatientID, string TariffID, string CompanyID)
    {
        service_priceCollection _coll = new service_priceCollection();
        ServicePrice serModal = new ServicePrice();
        //EzHms.Abstract.IServicePrice intSerPrice = new EzHms.Services.ServicePriceWebService();
        DBPatientRegistration intSerPrice = new DBPatientRegistration();

        serModal.SERVICE_ID = !string.IsNullOrEmpty(_srv_id) ? Convert.ToInt32(_srv_id) : 0;//2;

        serModal.CONSULTATION_TYPE_ID = !string.IsNullOrEmpty(ddlVisitVal) ? Convert.ToInt32(ddlVisitVal) : 0;
        serModal.PATIENT_ID = !string.IsNullOrEmpty(PatientID) ? Convert.ToInt32(PatientID) : 0;
        serModal.SESSION_ID = SessionHandler.DBSESSION_ID.ToString();
        serModal.PATIENT_CLASS_ID = 2;
        serModal.TARIFF_ID = !string.IsNullOrEmpty(TariffID) ? Convert.ToInt32(TariffID) : 1;

        _coll = (service_priceCollection)intSerPrice.GetConServicePrice(serModal);
        return _coll;
    }
    public CollectionBase BindGetGrid(GridPaging _gPage, out int _total_records)
    {
        throw new NotImplementedException();
    }
}



