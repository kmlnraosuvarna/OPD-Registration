using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using System.Web.Script.Serialization;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using EzHms.Abstract;
using EzHms.ModelEntity;
using PRegBO = EzHms.BusinessObject.PatientRegistrationBO;
using System.Collections.Generic;

using AjaxControlToolkit;
using System.Data;
using System.Text;
using EzHms.BusinessObject;
using EzHms.DataAccessObject;
namespace EzHms.Services
{
    /// <summary>
    /// Summary description for PatientRegistration
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    [Serializable()]
    public class PatientRegistration : System.Web.Services.WebService
    {

        public int this[int index]
        {
            get
            {

                return 0;
            }
            set { /* Do Nothing */ }
        }

        PRegBO _preg;
        public PatientRegistration()
        {
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_Referals_Details(int _patID)
        {
            DBPatientRegistration obj = new DBPatientRegistration();
            return (PatientRegistrationCollection)obj.Get_Patient_Referals_Details(_patID);
        }
        [WebMethod]
        public PatientRegistrationCollection Get_PatientOptions(MasterOptions _pOptions)
        {
            return PRegBO.Get_PatientOptions(_pOptions);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_PatientAttndis(MasterOptions _pOptions, GridPaging gv)
        {
            return PRegBO.Get_PatientAttndis(_pOptions, gv);
        }

        [WebMethod]
        public void Save_Data_XML(PatientAddress _pAddress)
        {
            PRegBO.Save_Data_XML(_pAddress);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_Pincode(string prefixText, string contextKey)
        {
            int count = 0;
            EzHms.DataAccessObject.DBPatientRegistration _autoBO = new EzHms.DataAccessObject.DBPatientRegistration();
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> element = new List<object>();

            AddressCollection _lstElements = _autoBO.GetAutoComp_Area(prefixText, count, contextKey, element);
            foreach (EzHms.ModelEntity.Address _element in _lstElements)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.PIN_CODE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        [WebMethod(EnableSession = true)]
        public string Get_Patient_Addresses(string patientid)
        {
            DataSet ds = new DataSet();
            _preg = new PRegBO();
            ds = _preg.Get_Patient_Addresses(patientid);
            string myHtmlFile = "";
            DataTable targetTable = new DataTable();
            targetTable = ds.Tables[0];

            StringBuilder myBuilder = new StringBuilder();
            myBuilder.Append("<table class='grid' cellspacing='0' width='100%' cellpadding='4' border='0';");
            myBuilder.Append("style='border-width:0px;width:100%;border-collapse:collapse;'>");

            //Add the headings row.

            myBuilder.Append("<tr class='gridheaderstyle'>");
            int headColCount = 0;
            foreach (DataColumn myColumn in targetTable.Columns)
            {
                if (headColCount < 6)
                    myBuilder.Append("<th align='left' scope='col' style='display:none'>");
                else
                    myBuilder.Append("<th align='left' width='25%' height='20px' scope='col'>");

                myBuilder.Append(myColumn.ColumnName);
                myBuilder.Append("</th>");
                headColCount++;
            }

            myBuilder.Append("</tr>");
            int rowColor = 0;
            //Add the data rows. 
            foreach (DataRow myRow in targetTable.Rows)
            {
                if (rowColor == 0)
                {
                    myBuilder.Append("<tr class='gridrow'>");
                    rowColor++;
                }
                else
                {
                    myBuilder.Append("<tr class='gridAlternaterow'>");
                    rowColor = 0;
                }

                int colCount = 0;
                foreach (DataColumn myColumn in targetTable.Columns)
                {
                    if (colCount < 6)
                        myBuilder.Append("<td align='left' valign='top' style='display:none'>");
                    else
                        myBuilder.Append("<td align='left' width='25%' height='20px' valign='top'>");

                    myBuilder.Append(myRow[myColumn.ColumnName].ToString());
                    myBuilder.Append("</td>");
                    colCount++;
                }

                myBuilder.Append("</tr>");
            }

            //Close tags. 
            myBuilder.Append("</table>");
            //Get the string for return. 
            myHtmlFile = myBuilder.ToString();
            return myHtmlFile;
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Patient_Allergy_Details(int patientID, int allergyID)
        {
            return PRegBO.Get_Patient_Allergy_Details(patientID, allergyID);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Patient_Insurance_Details(int patientID, int insuranceID)
        {
            return PRegBO.Get_Patient_Insurance_Details(patientID, insuranceID);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Patient_VisaWork_Details(int patientID)
        {
            return PRegBO.Get_Patient_VisaWork_Details(patientID);
        }

        
        

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_AdditionalInfo_Details(int _patID)
        {
            return PRegBO.Get_Patient_AdditionalInfo_Details(_patID);
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_BedInfo_Details(string _umr_no)
        {
            return PRegBO.Get_Patient_BedInfo_Details(_umr_no);
        }
        

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_Address_Dtls(int _patID)
        {
            DBPatientRegistration obj = new DBPatientRegistration();
            return (PatientRegistrationCollection)obj.Get_Patient_Address_Dtls(_patID);
        }


       
        [WebMethod]
        public PatientRegistrationCollection Get_Patient_AllergySearch_Details(string umr_no)
        {
            return PRegBO.Get_Patient_AllergySearch_Details(umr_no);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> Get_Patient_Allergies(string umr_no)
        {
            LookUpSearch lookup = new LookUpSearch();
           // int total_records = 0;
            lookup.PAGE_SIZE = Convert.ToInt32(20);
            lookup.CURRENT_PAGE = Convert.ToInt32(1);
            CollectionBase _Coll = PRegBO.Get_Patient_AllergySearch_Details(umr_no);
            if (_Coll != null)
            {
                List<object> _lst = new List<object>();
                _lst.Add(_Coll);
                _lst.Add(_Coll.Count);
                return _lst;
            }
            else
                return null;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> Get_Patient_Allergies_new(string umr_no)
        {
            CollectionBase _Coll = PRegBO.Get_Patient_AllergySearch_Details_New(umr_no);
            if (_Coll != null)
            {
                List<object> _lst = new List<object>();
                _lst.Add(_Coll);
                _lst.Add(_Coll.Count);
                return _lst;
            }
            else
                return null;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_GeneralInfo(int patientID)
        {
            return PRegBO.Get_Patient_GeneralInfo(patientID, PatientServices.PATIENT_REGISTRATION);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_GeneralInfo_ByUmrNO(string umr_no, string admn_no)
        {
            return PRegBO.Get_Patient_GeneralInfo_ByUmrNO(umr_no, admn_no);
        }
        [WebMethod]
        public PatientRegistrationCollection Get_PrevNext_Patients(int patientid)
        {
            return PRegBO.Get_PrevNext_Patients(patientid);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_PrevNext_Patient_Insurances(int patientid, int insuranceid)
        {
            return PRegBO.Get_PrevNext_Patient_Insurances(patientid, insuranceid);
        }
        [WebMethod]
        public PatientRegistrationCollection Get_PrevNext_Patient_Allergies(int patientid, int allergyid)
        {
            return PRegBO.Get_PrevNext_Patient_Allergies(patientid, allergyid);
        }

        

        [WebMethod]
        public PatientRegistrationCollection Get_Consultants()
        {
            return PRegBO.Get_Consultants();
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Employees(LookUpSearch lookup, out int _totl_records)
        {
            return PRegBO.Get_Employees(lookup, out _totl_records);
        }
        [WebMethod]
        public PatientRegistrationCollection Get_Allergies(LookUpSearch lookup, out int _totl_records)
        {
            return PRegBO.Get_Allergies(lookup, out _totl_records);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Educations(LookUpSearch lookup, out int _total_records)
        {
            return PRegBO.Get_Educations(lookup, out _total_records);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Areas(LookUpSearch lookup, out int _totl_records)
        {
            return PRegBO.Get_Areas(lookup, out _totl_records);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_Grades(LookUpSearch lookup)
        {
            return PRegBO.Get_Grades(lookup);
        }
        [WebMethod]
        public PatientRegistrationCollection Get_Employers(LookUpSearch lookup, out int _totl_records)
        {
            return PRegBO.Get_Employers(lookup, out _totl_records);
        }
        [WebMethod]
        public PatientRegistrationCollection Get_Nationalities(LookUpSearch lookup, out int total_records)
        {
            return PRegBO.Get_Nationalities(lookup, out total_records);
        }

        [WebMethod]
        public PatientRegistrationCollection Get_AddressTypes(LookUpSearch lookup, out int _totl_records)
        {
            return PRegBO.Get_AddressTypes(lookup, out _totl_records);
        }
       
        [WebMethod]
        public PatientRegistrationCollection Get_IssuedBys(LookUpSearch lookup)
        {
            return PRegBO.Get_IssuedBys(lookup);
        }
         
         
       
        [WebMethod]
        public PatientRegistrationCollection Get_Patient_View(int ptientID, LookUpSearch lookup, PatientViewEnum _pViewEnum)
        {
            return PRegBO.Get_Patient_View(ptientID, lookup, _pViewEnum);
            //return null;
        }

    
        [WebMethod]
        public string Save_Patient_Registration(CollectionBase _pRegistration, RegistrationType _regType, out string billno, out string opumrno, out string oppatientid, out string CausltyBid)
        {
            return PRegBO.Save_Patient_Registration(_pRegistration, _regType, out billno, out opumrno, out oppatientid, out CausltyBid);
        }

      
     
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public PatientRegistrationCollection Get_Patient_Details(int _patID)
        {
            return PRegBO.Get_Patient_Details(_patID);
        }


       
       
        


        public bool Save_Patient_EmergencyContacts(PatientAddress _pAddress)
        {
            return false;
        }

       
        [WebMethod]
        public bool Delete_Patient_Allergies(int patientid, string allergyids)
        {
            return PRegBO.Delete_Patient_Allergies(patientid, allergyids);
        }

        [WebMethod]
        public bool Delete_Patient_Insurances(int patientid, string insuranceids)
        {
            return PRegBO.Delete_Patient_Insurances(patientid, insuranceids);
        }

     
        [WebMethod]
        public PatientRegistrationCollection Get_Referrals(LookUpSearch lookup, out int _total_records)
        {
            return PRegBO.Get_Referrals(lookup, out _total_records);
        }
    
       

        [WebMethod]
        public CollectionBase GetLookUpAllergySearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            return PRegBO.Get_Allergies(_lookUPSearch, out _total_records);
        }

        [WebMethod]
        public CollectionBase GetLookUpSearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            return PRegBO.Get_Nationalities(_lookUPSearch, out _total_records);
        }

    

        [WebMethod]
        public CollectionBase GetLookUp_AddressType_SearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            return PRegBO.Get_AddressTypes(_lookUPSearch, out _total_records);
        }

        [WebMethod]
        public CollectionBase GetLookUp_Employer_SearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            return PRegBO.Get_Employers(_lookUPSearch, out _total_records);
        }

        [WebMethod]
        public CollectionBase GetLookUp_Education_SearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            return PRegBO.Get_Educations(_lookUPSearch, out _total_records);
        }
       

        [WebMethod]
        public CollectionBase GetLookUp_Employees_SearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;

            return PRegBO.Get_Employees(_lookUPSearch, out _total_records);
        }
  



           

       
         


        public CollectionBase Get_patient_Enquiry_info(EzHms.ModelEntity.PatientRegistration patreg, int pno, int psize, out int count)
        {
            throw new NotImplementedException();
        }

        

        public string[] GetAutoCompleteServiceInfo(string prefixText, int count, string tableName, string colName, string contextKey)
        {
            throw new NotImplementedException();
        }

       

        public CollectionBase Get_DayCare_Patients_Info(LookUpSearch _lookUPSearch, out int _total_records)
        {
            throw new NotImplementedException();
        }

        

        [WebMethod(EnableSession = true)]
        public CollectionBase Get_IP_PAT_BASED_ON_UMR_ADMN(EzHms.ModelEntity.PatientRegistration _objModel)
        {
            EzHms.BusinessObject.PatientRegistrationBO _objBo = new EzHms.BusinessObject.PatientRegistrationBO();
            return _objBo.Get_IP_PAT_BASED_ON_UMR_ADMN(_objModel);
        }
         


         
           
         
         
        public void CopyTo(Array array, int index)
        {
            throw new NotImplementedException();
        }

        public int Count
        {
            get { throw new NotImplementedException(); }
        }

        public bool IsSynchronized
        {
            get { throw new NotImplementedException(); }
        }

        public object SyncRoot
        {
            get { throw new NotImplementedException(); }
        }

        

        public IEnumerator GetEnumerator()
        {
            throw new NotImplementedException();
        }



         
        [WebMethod(EnableSession = true)]
        public static CollectionBase GetPatientAllergies(string umr_no)
        {
           // int total_records = 0;

            return null;
        }
        [WebMethod(EnableSession = true)]
        public List<object> checkvalidation(string _advSrch, string Srch)
        {
            if (!string.IsNullOrEmpty(_advSrch))
            {
                Srch = Srch + " AND " + _advSrch;
            }
            //EzHms.Abstract.IServices objcheck = new EzHms.Services.HospitalServices();
            DBPatientRegistration objcheck = new DBPatientRegistration();
            int session_id = SessionHandler.DBSESSION_ID;
            CollectionBase recpColl = objcheck.CheckValidation(Srch, session_id);
            if (recpColl != null && recpColl.Count > 0)
            {
                List<object> _lst = new List<object>();
                _lst.Add(recpColl);
                _lst.Add(recpColl.Count);
                return _lst;
            }
            else
            {
                return null;
            }
        }
          

        [WebMethod(EnableSession = true)]
        public string[] Get_Dscnttype()
        {
            int session_id = Convert.ToInt32(SessionHandler.DBSESSION_ID);
            EzHms.DataAccessObject.DBPatientRegistration objdb = new EzHms.DataAccessObject.DBPatientRegistration();
            string flag = "REG";
            DataSet dset = objdb.Get_Registration_DropDowns(flag, session_id);
            DataTable ds = new DataTable();
            ds = dset.Tables[20];
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            foreach (DataRow row in ds.Rows)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["DISCOUNT_TYPE_NAME"].ToString(), serializer.Serialize(row["DISCOUNT_TYPE_ID"].ToString())));

            }
            return items.ToArray();
        }
        [WebMethod(EnableSession = true)]
        public List<object> GetPreregdatatoreg(int preregid, int session)
        {
            string fo_pre_reg = "";
            string address = "";
            DBPatientRegistration _preg = new DBPatientRegistration();
            DataSet ds = _preg.GetDatabindpreregEdit(preregid, session);

            DataTable dtaddress = ds.Tables[0];
            var listadd = new List<Dictionary<string, object>>();
            foreach (DataRow row1 in dtaddress.Rows)
            {
                var dictadd = new Dictionary<string, object>();
                foreach (DataColumn col1 in dtaddress.Columns)
                {
                    if (Convert.ToString(col1) == "ISSUE_DT" && !string.IsNullOrEmpty(row1[col1].ToString()))
                    {
                        dictadd[col1.ColumnName] = Convert.ToString(Convert.ToDateTime(row1[col1]));
                    }
                    else if (Convert.ToString(col1) == "EXPIRY_DT" && !string.IsNullOrEmpty(row1[col1].ToString()))
                    {
                        dictadd[col1.ColumnName] = Convert.ToString(Convert.ToDateTime(row1[col1]));
                    }
                    else
                    {
                        dictadd[col1.ColumnName] = row1[col1];
                    }
                }
                listadd.Add(dictadd);
            }
            JavaScriptSerializer serializeradd = new JavaScriptSerializer();
            fo_pre_reg = serializeradd.Serialize(listadd);

            DataTable dtaddress1 = ds.Tables[1];
            var listadd1 = new List<Dictionary<string, object>>();
            foreach (DataRow row1 in dtaddress1.Rows)
            {
                var dictadd1 = new Dictionary<string, object>();
                foreach (DataColumn col1 in dtaddress1.Columns)
                {
                    dictadd1[col1.ColumnName] = row1[col1];
                }
                listadd1.Add(dictadd1);
            }
            JavaScriptSerializer serializeradd1 = new JavaScriptSerializer();
            address = serializeradd1.Serialize(listadd1);
            List<object> _lst = new List<object>();
            _lst.Add(fo_pre_reg);
            _lst.Add(address);
            return _lst;
        }
         [WebMethod(EnableSession = true)]
   
        public EzHms.ModelEntity.PatientRegistrationCollection Get_Patient_Comp_Details(string umrNO, string flag, string cmpnyid)
        {

            DBPatientRegistration dbpat = new EzHms.DataAccessObject.DBPatientRegistration();
            PatientRegistrationCollection coll = new EzHms.ModelEntity.PatientRegistrationCollection();
            coll = (PatientRegistrationCollection)dbpat.Get_Corporate_PatientInfo(umrNO, flag, cmpnyid);
            if (coll != null || coll.Count > 0)
                return coll;
            else
                return null;
        }
         [WebMethod(EnableSession = true)]
         [ScriptMethod()]
         public EzHms.ModelEntity.PatientRegistrationCollection GetCompanyReceiptInfoByID(int CompanyId, int patient_class_id)
         {
             DBPatientRegistration creditOrgBoObj = new DBPatientRegistration();
             return (EzHms.ModelEntity.PatientRegistrationCollection)creditOrgBoObj.GetCompanyReceiptInfoByID(CompanyId, patient_class_id);
         }
         [WebMethod(EnableSession = true)]
         [ScriptMethod()]
         public CollectionBase Get_Emp_Address_Dtls(int _patID)
         {
             DBPatientRegistration empinfo = new DBPatientRegistration();
             return empinfo.Get_Emp_Address_Dtls(_patID);
         }
         [WebMethod(EnableSession = true)]
         public CollectionBase Get_Employee_Dtls(int PatientID)
         {
             int session = SessionHandler.DBSESSION_ID;
             DBPatientRegistration intRecp = new DBPatientRegistration();
             CollectionBase _coll = intRecp.Get_Employee_Dtls(PatientID);
             return _coll;

         }
         
    }
}

