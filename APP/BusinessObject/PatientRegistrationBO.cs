using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using System.IO;
using System.Xml;
using System.Collections;
using Microsoft.Practices.EnterpriseLibrary.Caching;
using Microsoft.Practices.EnterpriseLibrary.Caching.Expirations;
using System.Data;


namespace EzHms.BusinessObject
{
    /// <summary>
    /// Patient Registration Business object
    /// </summary>
    /// <remarks></remarks>
    public class PatientRegistrationBO
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="T:System.Object"/> class.
        /// </summary>
        /// <remarks></remarks>
        public PatientRegistrationBO()
        {

        }

        /// <summary>
        /// Save_s the patient_ registration.
        /// </summary>
        /// <param name="_pRegistration">The _p registration.</param>
        /// <param name="_regType">Type of the _reg.</param>
        /// <param name="billno">The billno.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static string Save_Patient_Registration(CollectionBase _pRegistration, RegistrationType _regType, out string billno, out string umrno, out string patientid, out string CausltyBid)
        {
            billno = string.Empty;
            umrno = string.Empty;
            patientid = string.Empty;
            CausltyBid = "0";
            // regno = string.Empty;
            string _result = null;
            DBPatientRegistration _pRegi = new DBPatientRegistration();
           
            return _result;


        }
        

        /// <summary>
        /// TO GET IP PATIENTS BASED ON UMR_NO AND ADMN_NO
        /// </summary>
        /// <param name="_objModel"></param>
        /// <returns></returns>
        public CollectionBase Get_IP_PAT_BASED_ON_UMR_ADMN(PatientRegistration _objModel)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ reg no.
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        

        /// <summary>
        /// Get_s the patient otions.
        /// </summary>
        /// <param name="_pOptions">The _p options.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_PatientOptions(MasterOptions _pOptions)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_PatientOptions(_pOptions);
        }

        /// <summary>
        /// Get_s the patients_ info.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_columnName">Name of the _column.</param>
        /// <param name="_prefixTxt">The _prefix TXT.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        /// 
        public static PatientRegistrationCollection Get_PatientAttndis(MasterOptions _pOptions, GridPaging gv)
        {
            return null;
        }

        
        /// <summary>
        /// Get_s the patient_ details.
        /// </summary>
        /// <param name="_patID">The _pat ID.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_Details(int _patID)
        {
            return null;
        }
        public static PatientRegistrationCollection Get_Change_Patient_Details(int _patID,int billid)
        {
            return null;
        }
        public static PatientRegistrationCollection Get_Pat_Info_ByUmrno(string _umrno)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ general info.
        /// </summary>
        /// <param name="patientID">The patient ID.</param>
        /// <param name="_pServices">The _p services.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_GeneralInfo(int patientID, PatientServices _pServices)
        {
            return null;
        }
        public static PatientRegistrationCollection Get_Patient_GeneralInfo_ByUmrNO(string umr_No, string admn_no)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ allergy_ details.
        /// </summary>
        /// <param name="patientID">The patient ID.</param>
        /// <param name="allergyID">The allergy ID.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_Allergy_Details(int patientID, int allergyID)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ visa work_ details.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_VisaWork_Details(int patientid)
        {
            return null;
        }

        
        /// <summary>
        /// Get_s the prev next_ patients.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_PrevNext_Patients(int patientid)
        {
            return null;
        }

        /// <summary>
        /// Get_s the prev next_ patient_ insurances.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <param name="insuranceid">The insuranceid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_PrevNext_Patient_Insurances(int patientid, int insuranceid)
        {
            return null;
        }

        /// <summary>
        /// Get_s the prev next_ patient_ allergies.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <param name="allergyid">The allergyid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_PrevNext_Patient_Allergies(int patientid, int allergyid)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ additional info_ details.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_AdditionalInfo_Details(int patientid)
        {
            return null;
        }
        /// <summary>
        /// Get_s the patient_ Bed info_ details.
        /// </summary>
        /// <param name="umrno">The patient umrno.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_BedInfo_Details(string _umr_no)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ insurance_ details.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <param name="insuranceid">The insuranceid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_Insurance_Details(int patientid, int insuranceid)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ insurance search_ details.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <param name="colname">The colname.</param>
        /// <param name="prefix">The prefix.</param>
        /// <param name="pageno">The pageno.</param>
        /// <param name="pagesize">The pagesize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        

        /// <summary>
        /// Get_s the patient_ allergy search_ details.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <param name="colname">The colname.</param>
        /// <param name="prefix">The prefix.</param>
        /// <param name="pageno">The pageno.</param>
        /// <param name="pagesize">The pagesize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_AllergySearch_Details(string umr_no)
        {
            return null;
        }
        public static PatientRegistrationCollection Get_Patient_AllergySearch_Details_New(string umr_no)
        {
            return null;
        }
        /// <summary>
        /// Get_s the patient_ view.
        /// </summary>
        /// <param name="patientID">The patient ID.</param>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_pViewEnum">The _p view enum.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Patient_View(int patientID, LookUpSearch _lookUPSearch, PatientViewEnum _pViewEnum)
        {
            return null;
        }

        /// <summary>
        /// Get_s the patient_ addresses.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        //public static PatientRegistrationCollection Get_Patient_Addresses(string patientid)
        //{
        //    DBPatientRegistration pReg = new DBPatientRegistration();
        //    return (PatientRegistrationCollection)pReg.Get_Patient_Addresses(patientid);
        //}
        public DataSet Get_Patient_Addresses(string patientid)
        {
            return null;
        }
        /// <summary>
        /// Save_s the patient_ visa work_ details.
        /// </summary>
        /// <param name="pVisaWorkColl">The p visa work coll.</param>
        /// <returns></returns>
        /// <remarks></remarks>
       
        /// <summary>
        /// Save_s the patient_ address.
        /// </summary>
        /// <param name="_pAddress">The _p address.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        


      
        /// <summary>
        /// Save_s the patient_ allergies_ details.
        /// </summary>
        /// <param name="_pAllergies">The _p allergies.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        
        /// <summary>
        /// Save_s the patient_ employee infor_ details.
        /// </summary>
        /// <param name="_pEmpInfo">The _p emp info.</param>
        /// <returns></returns>
        /// <remarks></remarks>
       

        /// <summary>
        /// Save_s the patient_ insurence_ details.
        /// </summary>
        /// <param name="_pInsurence">The _p insurence.</param>
        /// <returns></returns>
        /// <remarks></remarks>
       
        /// <summary>
        /// Save_s the patient_ visa_ details.
        /// </summary>
        /// <param name="_pVisa">The _p visa.</param>
        /// <returns></returns>
        /// <remarks></remarks>
      

        /// <summary>
        /// Save_s the patient_ work permit_ details.
        /// </summary>
        /// <param name="_pWorkPermit">The _p work permit.</param>
        /// <returns></returns>
        /// <remarks></remarks>
       

        /// <summary>
        /// Save_s the patient_ additional_ details.
        /// </summary>
        /// <param name="_pRegistration">The _p registration.</param>
        /// <returns></returns>
        /// <remarks></remarks>
       

        /// <summary>
        /// Delete_s the patient_ details.
        /// </summary>
        /// <param name="_patSeqID">The _pat seq ID.</param>
        /// <returns></returns>
        /// <remarks></remarks>
    

        /// <summary>
        /// Get_s the referrals.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_columnName">Name of the _column.</param>
        /// <param name="_prefixTxt">The _prefix TXT.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Referrals(LookUpSearch lookup, out int _total_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Referrals(lookup, out _total_records);
        }
       
        /// <summary>
        /// Get_s the consultants.
        /// </summary>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Consultants()
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Consultants();
        }

        /// <summary>
        /// Get_s the issued bys.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_IssuedBys(LookUpSearch lookup)
        {
            return null;
        }

        /// <summary>
        /// Get_s the allergies.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="totala_records">The totala_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Allergies(LookUpSearch lookup, out int totala_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Allergies(lookup, out totala_records);
        }

        /// <summary>
        /// Get_s the educations.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="totala_records">The totala_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Educations(LookUpSearch lookup, out int totala_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Educations(lookup, out totala_records);
        }

        /// <summary>
        /// Get_s the grades.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Grades(LookUpSearch lookup)
        {
            return null;
        }

        /// <summary>
        /// Get_s the employers.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Employers(LookUpSearch lookup, out int _total_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Employers(lookup, out _total_records);
        }
       
     

     

        /// <summary>
        /// Get_s the areas.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Areas(LookUpSearch lookup, out int _total_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Areas(lookup, out _total_records);
        }

        /// <summary>
        /// Get_s the address types.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_AddressTypes(LookUpSearch lookup, out int _total_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_AddressTypes(lookup, out _total_records);
        }

        /// <summary>
        /// Get_s the nationalities.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static PatientRegistrationCollection Get_Nationalities(LookUpSearch lookup, out int _total_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Nationalities(lookup, out _total_records);
        }

        /// <summary>
        /// Get_s the relationships.
        /// </summary>
        /// <param name="pno">The pno.</param>
        /// <param name="psize">The psize.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
       

        /// <summary>
        /// Save_s the data_ XML.
        /// </summary>
        /// <param name="_pAddress">The _p address.</param>
        /// <remarks></remarks>
        public static void Save_Data_XML(PatientAddress _pAddress)
        {
            string _path = System.Web.HttpContext.Current.Server.MapPath(@"XMLfile/1.xml");
            using (FileStream fs = new FileStream(_path, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.ReadWrite))
            {
                XmlDocument _xmlDocument = new XmlDocument();
                if (fs.Length > 0)
                {
                    _xmlDocument.Load(fs);
                }
                else
                {
                    _xmlDocument.LoadXml("<AddressTypes></AddressTypes>");
                }

                XmlElement _xmlAddressRoot = _xmlDocument.CreateElement("Address");

                XmlAttribute _AddressType = _xmlDocument.CreateAttribute("AddressType");
                _AddressType.Value = _pAddress.AddressType;
                _xmlAddressRoot.SetAttributeNode(_AddressType);

                XmlElement _xmlAddrss1 = _xmlDocument.CreateElement("Address1");
                _xmlAddrss1.InnerText = _pAddress.Address1;
                _xmlAddressRoot.AppendChild(_xmlAddrss1);

                XmlElement _xmlAddrss2 = _xmlDocument.CreateElement("Address2");
                _xmlAddrss2.InnerText = _pAddress.Address2;
                _xmlAddressRoot.AppendChild(_xmlAddrss2);

                XmlElement _City = _xmlDocument.CreateElement("City");
                _City.InnerText = _pAddress.City;
                _xmlAddressRoot.AppendChild(_City);

                XmlElement _Country = _xmlDocument.CreateElement("Country");
                _Country.InnerText = _pAddress.Country;
                _xmlAddressRoot.AppendChild(_Country);

                XmlElement _EmailID = _xmlDocument.CreateElement("EmailID");
                _EmailID.InnerText = _pAddress.Email_ID;
                _xmlAddressRoot.AppendChild(_EmailID);

                XmlElement _FaxNo = _xmlDocument.CreateElement("FaxNo");
                _FaxNo.InnerText = _pAddress.FAX_NUMBER;
                _xmlAddressRoot.AppendChild(_FaxNo);

                XmlElement _FirstName = _xmlDocument.CreateElement("FirstName");
                _FirstName.InnerText = _pAddress.FirstName;
                _xmlAddressRoot.AppendChild(_FirstName);

                XmlElement _HomePhoneNo = _xmlDocument.CreateElement("HomePhoneNo");
                _HomePhoneNo.InnerText = _pAddress.HOME_PHONE;
                _xmlAddressRoot.AppendChild(_HomePhoneNo);

                XmlElement _LastName = _xmlDocument.CreateElement("LastName");
                _LastName.InnerText = _pAddress.LastName;
                _xmlAddressRoot.AppendChild(_LastName);

                XmlElement _MiddleName = _xmlDocument.CreateElement("MiddleName");
                _MiddleName.InnerText = _pAddress.MiddleName;
                _xmlAddressRoot.AppendChild(_MiddleName);

                XmlElement _MobileNo = _xmlDocument.CreateElement("MobileNo");
                _MobileNo.InnerText = _pAddress.MOBILE_PHONE;
                _xmlAddressRoot.AppendChild(_MobileNo);

                XmlElement _OfficePhoneNo = _xmlDocument.CreateElement("OfficePhoneNo");
                _OfficePhoneNo.InnerText = _pAddress.OFFICE_PHONE;
                _xmlAddressRoot.AppendChild(_OfficePhoneNo);

                XmlElement _State = _xmlDocument.CreateElement("State");
                _State.InnerText = _pAddress.State;
                _xmlAddressRoot.AppendChild(_State);

                XmlElement _UrEmrNo = _xmlDocument.CreateElement("UrEmrNo");
                _UrEmrNo.InnerText = _pAddress.UrEmrNo;
                _xmlAddressRoot.AppendChild(_UrEmrNo);

                XmlElement _WebSiteURL = _xmlDocument.CreateElement("WebSiteURL");
                _WebSiteURL.InnerText = _pAddress.WEBSITE_URL;
                _xmlAddressRoot.AppendChild(_WebSiteURL);

                XmlElement _ZipCode = _xmlDocument.CreateElement("ZipCode");
                _ZipCode.InnerText = _pAddress.ZipCode;
                _xmlAddressRoot.AppendChild(_ZipCode);

                _xmlDocument.DocumentElement.InsertBefore(_xmlAddressRoot, _xmlDocument.DocumentElement.LastChild);

                using (FileStream fsxml = new FileStream(_path, FileMode.Truncate, FileAccess.Write, FileShare.ReadWrite))
                {
                    _xmlDocument.Save(fsxml);
                    fsxml.Flush();
                    fsxml.Close();
                }
            }
        }


        /// <summary>
        /// Delete_s the patient_ allergies.
        /// </summary>
        /// <param name="_patSeqID">The _pat seq ID.</param>
        /// <param name="allergyids">The allergyids.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static bool Delete_Patient_Allergies(int _patSeqID, string allergyids)
        {
            return true;
        }

        /// <summary>
        /// Delete_s the patient_ insurances.
        /// </summary>
        /// <param name="_patSeqID">The _pat seq ID.</param>
        /// <param name="insuranceids">The insuranceids.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        public static bool Delete_Patient_Insurances(int _patSeqID, string insuranceids)
        {
            return true;
        }

        /// <summary>
        /// Delete_s the patient_ additional info.
        /// </summary>
        /// <param name="patientid">The patientid.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        
        public static PatientRegistrationCollection Get_Employees(LookUpSearch _lookUPSearch, out int _total_records)
        {
            DBPatientRegistration _pRegi = new DBPatientRegistration();
            return (PatientRegistrationCollection)_pRegi.Get_Employees(_lookUPSearch, out _total_records);
        }

        /// <summary>
        /// Get_s the patients_ info.
        /// </summary>
        /// <param name="_lookUPSearch">The _look UP search.</param>
        /// <param name="_total_records">The _total_records.</param>
        /// <returns></returns>
        /// <remarks></remarks>
        

        public static CollectionBase GetLookUpSearchData(PatientRegistration patregr, EzHms.ModelEntity.LookUpSearch _lookupSearch, out int _total_records)
        {

            DBPatientRegistration PatReg = new DBPatientRegistration();
            return (PatientRegistrationCollection)PatReg.GetLookUpSearchData(patregr, _lookupSearch, out _total_records);

        }

        public List<ListElements> GetAutoCompleteServiceInfo(string prefixText, int count, string tableName, string colName, string contextKey)
        {
            DBPatientRegistration _pReg = new DBPatientRegistration();
            return _pReg.GetRegistrationAutoComp(prefixText, count, tableName, colName, contextKey);
        }
       
        public List<ListElements> OthersDoctor(string prefixText, string contextkey)
        {
            DBPatientRegistration patReg = new DBPatientRegistration();
            return patReg.OthersDoctor(prefixText, contextkey);
        }
        public List<RegAtuoDetails> OthersDoctors(string prefixText, string contextkey, string ADDFLAG)
        {
            DBPatientRegistration patReg = new DBPatientRegistration();
            return patReg.OthersDoctors(prefixText, contextkey, ADDFLAG);
        }

       
        
    }
}
