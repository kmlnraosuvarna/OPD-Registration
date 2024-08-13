using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
  public class ServicePrice:CommonPropeties
  {

      #region SERVICE_PRICE MEMBERS


      private int _price_dim_id = 0;

      public int PRICE_DIM_ID
      {
          get { return _price_dim_id; }
          set { _price_dim_id = value; }
      }

      private int company_id;
      private int _service_id;
     
      private string service_Price_Rev_No;

      private int _tariff_id;
     
      private int _hospital_id;
      
      private int _doctor_id;
     
      private string _consultation_id;

      private string _ward_group_id;
     
      private string _price;

      private int _no_of_days;

      private int _no_of_visits;
      
      private int _doctor_price;
     
      private int _hospital_price;

      private int _cost;
     
      private string _start_dt;

      private string _end_dt;

      private int _facility_id;
     
      private int _ward_id;

      private int _surgery_category_id;

      private int _surgery_class_id;

      private int _department_id;

      private int _bed_type_id;

      private int _patient_class_id;

      private int _price_tier_id;

      private int _doctor_cat_id;
      
      private string _service_price_id;
      
      private int _consultation_type_id;
      
      private int _price_level_id;

      private int _price_class_id;
     
      private int _coverage_id;
     
      private string consulWardPrice;

      private string _current_record;
     
      private int patient_id;

      private string _SERVICE_TYPE_CD;
      private string _VISIT_TYPE;    
      private int _SERVICE_TYPE_ID;
      private int _PAGENUM;
      private int _PAGESIZE;
      private string _PREFIX;
      private string _COLUMN_NAME;

     
   
      #endregion
      
      #region SERVICE_PRICE PROPERTIES

      public string WARD_GROUP_ID
      {
          set { _ward_group_id = value; }
          get { return _ward_group_id; }
      }
      public string CONSULTATION_ID
      {
          set { _consultation_id = value; }
          get { return _consultation_id; }
      }
      public int DOCTOR_ID
      {
          set { _doctor_id = value; }
          get { return _doctor_id; }
      }

      public int COMPANY_ID
      {
          set { company_id = value; }
          get { return company_id; }
      }

      public int HOSPITAL_ID
      {
          set { _hospital_id = value; }
          get { return _hospital_id; }
      }
      public int TARIFF_ID
      {
          set { _tariff_id = value; }
          get { return _tariff_id; }
      }
      public string Service_Price_Rev_No
      {
          get { return service_Price_Rev_No; }
          set { service_Price_Rev_No = value; }
      }
      public int SERVICE_ID
      {
          set { _service_id = value; }
          get { return _service_id; }
      }
      public string PRICE
      {
          set { _price = value; }
          get { return _price; }
      }
      public int NO_OF_DAYS
      {
          set { _no_of_days = value; }
          get { return _no_of_days; }
      }
      public int NO_OF_VISITS
      {
          set { _no_of_visits = value; }
          get { return _no_of_visits; }
      }
      public int DOCTOR_PRICE
      {
          set { _doctor_price = value; }
          get { return _doctor_price; }
      }
      public int HOSPITAL_PRICE
      {
          set { _hospital_price = value; }
          get { return _hospital_price; }
      }
      public int COST
      {
          set { _cost = value; }
          get { return _cost; }
      }
      public string START_DT
      {
          set { _start_dt = value; }
          get { return _start_dt; }
      }
      public string END_DT
      {
          set { _end_dt = value; }
          get { return _end_dt; }
      }
      public int FACILITY_ID
      {
          set { _facility_id = value; }
          get { return _facility_id; }
      }
      public int WARD_ID
      {
          set { _ward_id = value; }
          get { return _ward_id; }
      }
      public int SURGERY_CATEGORY_ID
      {
          set { _surgery_category_id = value; }
          get { return _surgery_category_id; }
      }
      public int SURGERY_CLASS_ID
      {
          set { _surgery_class_id = value; }
          get { return _surgery_class_id; }
      }
      public int DEPARTMENT_ID
      {
          set { _department_id = value; }
          get { return _department_id; }
      }
      public int BED_TYPE_ID
      {
          set { _bed_type_id = value; }
          get { return _bed_type_id; }
      }
      public int PATIENT_CLASS_ID
      {
          get { return _patient_class_id; }
          set { _patient_class_id = value; }
      }
      public int PRICE_TIER_ID
      {
          get { return _price_tier_id; }
          set { _price_tier_id = value; }
      }
      public int Doctor_cat_id
      {
          get { return _doctor_cat_id; }
          set { _doctor_cat_id = value; }
      }
      public string SERVICE_PRICE_ID
      {
          set { _service_price_id = value; }
          get { return _service_price_id; }
      }
      public int CONSULTATION_TYPE_ID
      {
          set { _consultation_type_id = value; }
          get { return _consultation_type_id; }
      }
      public int PRICE_LEVEL_ID
      {
          set { _price_level_id = value; }
          get { return _price_level_id; }
      }
      public int PRICE_CLASS_ID
      {
          set { _price_class_id = value; }
          get { return _price_class_id; }
      }
      public int COVERAGE_ID
      {
          set { _coverage_id = value; }
          get { return _coverage_id; }
      }

      public string ConsulWardPrice
      {
          get { return consulWardPrice; }
          set { consulWardPrice = value; }
      }
      public string CURRENT_RECORD
      {
          set { _current_record = value; }
          get { return _current_record; }
      }
      public int PATIENT_ID
      {
          get { return patient_id; }
          set { patient_id = value; }
      }

      private int specelization_id;
      public int SPECELIZATION_ID
      {
          get
          {
              return specelization_id;
          }
          set
          {
              specelization_id = value;
          }
      }     
      public string VISIT_TYPE
      {
          get { return _VISIT_TYPE; }
          set { _VISIT_TYPE = value; }
      }
      public string SERVICE_TYPE_CD
      {
          get { return _SERVICE_TYPE_CD; }
          set { _SERVICE_TYPE_CD = value; }
      }
      public int SERVICE_TYPE_ID
      {
          get { return _SERVICE_TYPE_ID; }
          set { _SERVICE_TYPE_ID = value; }
      }
      public int PAGENUM
      {
          get { return _PAGENUM; }
          set { _PAGENUM = value; }
      }
      public int PAGESIZE
      {
          get { return _PAGESIZE; }
          set { _PAGESIZE = value; }
      }
      public int psize;
      public int pSize
      {
          get { return psize; }
          set { psize = value; }
      }
      
      public string PREFIX
      {
          get { return _PREFIX; }
          set { _PREFIX = value; }
      }
      public string COLUMN_NAME
      {
          get { return _COLUMN_NAME; }
          set { _COLUMN_NAME = value; }
      }



      private string _flag;

      public string FLAG
      {
          get { return _flag; }
          set { _flag = value; }
      }
      private string advancesearch;

      public string Advancesearch
      {
          get { return advancesearch; }
          set { advancesearch = value; }
      }
      private string xml_srvprice;

      public string XML_SRVPRICE
      {
          get { return xml_srvprice; }
          set { xml_srvprice = value; }
      }
      private string _is_emergency;

      public string IS_EMERGNCY_PRICE
      {
          get { return _is_emergency; }
          set { _is_emergency = value; }
      }
      #endregion

      #region Added By Swetha Reddy     
      private int _GENDER_ID;

      public int GENDER_ID
      {
          get { return _GENDER_ID; }
          set { _GENDER_ID = value; }
      }
      private string session_id;

       public string SESSION_ID
      {
          get { return session_id; }
          set { session_id = value; }
      }
      
      #endregion
  }
}
