using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using System.Collections;
using System.Data;
using System.Data.SqlClient;
namespace EzHms.Abstract
{
    public interface IPatientRegistration
    {

        CollectionBase GetLookUPSearch_PReregistrationData(LookUpSearch _lookUPSearch, out int _tot_records);
        DataSet GetDatabindpreregEdit(int preregid, int session);
        CollectionBase GetDatabindprereggrid(GridPaging gpage, out int _tot_records);
        bool deleteprereg(string preregid);
        bool Save_Patient_PreRegistration(string _XmlRoot, int sessionid, out int pre_id, out string pre_no, out int count);

        CollectionBase Get_Pat_Conversion_Type_Det(GridPaging gpage, out int _tot_records);

        PatientRegistrationCollection Get_Patients_InfoDashboard(GridPaging gpage, out int _total_records);
        void Get_Patient_UmrNO(out string umrno);
        void Get_Patient_RegistrationNO(out string regno);
        PatientRegistrationCollection Get_Patient_Receipt_Details(string umrno);
        PatientRegistrationCollection Get_PatientOptions(MasterOptions _pOptions);
        PatientRegistrationCollection Get_PatientAttndis(MasterOptions _pOptions, GridPaging gv);
        void Save_Data_XML(PatientAddress _pAddress);
        CollectionBase Get_IP_PAT_BASED_ON_UMR_ADMN(PatientRegistration _objModel);
        //PatientRegistrationCollection Get_Patient_Addresses(string Patientid);
        string Get_Patient_Addresses(string Patientid);
        PatientRegistrationCollection Get_Patient_GeneralInfo(int PatientID);
        PatientRegistrationCollection Get_Patient_GeneralInfo_ByUmrNO(string  umr_no,string admn_no);
        PatientRegistrationCollection Get_Patient_Allergy_Details(int PatientID, int allergyID);
        PatientRegistrationCollection Get_Patient_Insurance_Details(int patientid, int insuranceid);
        PatientRegistrationCollection Get_Patients_InfoPaging(GridPaging gpage, out int _total_records);
        PatientRegistrationCollection Get_Patient_Details(int _patID);
        PatientRegistrationCollection Get_PrevNext_Patients(int patientid);
        PatientRegistrationCollection Get_PrevNext_Patient_Insurances(int patientid, int insuranceid);
        PatientRegistrationCollection Get_PrevNext_Patient_Allergies(int patientid, int allergyid);
        PatientRegistrationCollection Get_Patient_View(int umrNo, LookUpSearch lookup, PatientViewEnum _pViewEnum);
        PatientRegistrationCollection Get_Patient_InsuranceSearch_Details(int patientid, LookUpSearch lookup, out int total_records);
        PatientRegistrationCollection Get_Patient_AllergySearch_Details(string umr_no);
        PatientRegistrationCollection Get_Referrals(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Referrals_BySource(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_IssuedAt(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Consultants();
        PatientRegistrationCollection Get_IssuedBys(LookUpSearch lookup);
        PatientRegistrationCollection Get_Allergies(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Educations(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Nationalities(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Employers(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Employees(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Areas(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_AddressTypes(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Relationships(LookUpSearch lookup, out int _total_records);
        PatientRegistrationCollection Get_Patient_VisaWork_Details(int patientid);
        PatientRegistrationCollection Get_Patient_AdditionalInfo_Details(int patientid);
        PatientRegistrationCollection Get_Pat_Info_ByUmrno(string _umrno);
        PatientRegistrationCollection Get_Patient_BedInfo_Details(string _umr_no);

        bool Save_Patient_VisaWork_Details(CollectionBase pVisaWorkCollection);
        string Save_Patient_Registration(CollectionBase _pRegistration, RegistrationType _regType, out string billno, out string umrno, out string patientid, out string CausltyBid);
        bool Save_Patient_Address(PatientAddress _pRegistration);
     
        bool Save_Patient_Additional_Info(PatientRegistration pRegistration);

        bool Delete_Patient_Details(string _patSeqID);
        bool Delete_Patient_Allergies(int _patSeqID, string allergyids);
        bool Delete_Patient_Insurances(int _patSeqID, string insuranceids);
        bool Delete_Patient_AdditionalInfo(int patientid);
        bool Delete_Patient_PassportInfo(int patientid);

        CollectionBase GetLookUpAllergySearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetLookUp_AddressType_SearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetLookUp_Education_SearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetLookUp_Employer_SearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetLookUp_Hospitals_SearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetLookUp_Relationship_SearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetLookUp_Employees_SearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase Get_Patients_Info(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase Get_IP_Patients_Cnvrt_Type_Info(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase Get_Patients_Info_OPEnquiry(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase Get_PkgCons_Patients_Info(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase Get_IP_Patients_Info(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);

        PatientRegistrationCollection Get_RegExpired_Patients(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int total_records);
        string GetPatientHistory(int pID, int dID);
       
        //CollectionBase Get_patient_Enquiry_info(PatientRegistration patreg,int pno,int psize,out int count);
        CollectionBase Get_patient_Enquiry_info(PatientRegistration patreg, EzHms.ModelEntity.GridPaging gridPaging, out int total_records);
        //CollectionBase Get_patient_Enquiryinfo_Paging(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);

        string[] GetAutoCompleteServiceInfo(string prefixText, int count, string tableName, string colName, string contextKey);
        PatientRegistrationCollection GetRoomByWard(int ward_id);
        EzHms.ModelEntity.PatientRegistrationCollection Get_Patient_BillDetails(string admno);
        EzHms.ModelEntity.PatientRegistrationCollection Get_Patient_AuthorizationDetails(string umrNO);
        
        //
        EzHms.ModelEntity.PatientRegistrationCollection Get_Pat_Apt_UrEmrNo(string umrNO);
        CollectionBase Get_area_wise_arddress_reports(PatientRegistration preg);
        CollectionBase Get_area_wise_reports(PatientRegistration preg);

        CollectionBase GetPatientHistoryColl(int pID, int dID);
        CollectionBase GetPreviousRegDetails(string UmrNO);
        string Save_Patient_RegistrationNew(CollectionBase _pRegistration, out string billno, out string opumrno, out string oppatientid);
        CollectionBase GetEmployersEmpCodeData(Employer obj, out int _total_records);

         bool Ins_update_Card_validity_details(PatientRegistration _objModel, out int _id);

         CollectionBase Get_Card_validity_det(GridPaging _objModel, out int _total_records);
         CollectionBase GetCorpDepartments(int CompanyID);
         CollectionBase GetCorpBranches(int CompanyID);       
         
         bool SaveChangePatientSampleregdetails(PatientRegistration objds);
         bool SaveandUpdatePatientImage(PatientRegistration objds);
       string  Save_Patient_Registration_Add_New(CollectionBase _pRegistration, out string billno, out string opumrno, out string oppatientid, out string CausltyBid, out int TRANSACTION_ID, out int BILL_ID);
       PatientRegistrationCollection GetForeignCategoryDetails();
    }
}
