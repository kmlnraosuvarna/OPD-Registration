using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AddressCollection = EzHms.ModelEntity.AddressCollection;
using LookUpSearch = EzHms.DataAccessObject.DBLookUpSearch;
using LOOKUP_CONFIG = EzHms.ModelEntity.LOOKUP_CONFIG ;
using EzHms.ModelEntity;
namespace EzHms.BusinessObject
{
    public class LookUpSearchBO
    {
        public LookUpSearchBO()
        { 

        }
        public static AddressCollection Get_City_State_Country_Search(EzHms.ModelEntity.LookUpSearch _lookUpSearch,out int _total_records)
        {
            LookUpSearch _lookUp = new LookUpSearch();
            return (AddressCollection) _lookUp.Get_City_State_Country_Search(_lookUpSearch, out _total_records);
        }
        public static AddressCollection Get_City_State_Country_Search_Report(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            LookUpSearch _lookUp = new LookUpSearch();
            return (AddressCollection)_lookUp.Get_City_State_Country_Search_Report(_lookUpSearch, out _total_records);
        }
        public static LOOKUP_CONFIG GetLookUP_Search_Config(string _ctrlName)
        {
            LookUpSearch _lookUP = new LookUpSearch();
            return _lookUP.GetLookUP_Search_Config(_ctrlName);
        }
        public static AddressCollection GetCountryDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            LookUpSearch _lookUp = new LookUpSearch();
            return (AddressCollection)_lookUp.GetCountryDetails(_lookUpSearch, out _total_records);
        }
        public static AddressCollection GetCityDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            LookUpSearch _lookUp = new LookUpSearch();
            return (AddressCollection)_lookUp.GetCityDetails(_lookUpSearch, out _total_records);
        }
      
        public static AddressCollection GetStateDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            LookUpSearch _lookUp = new LookUpSearch();
            return (AddressCollection)_lookUp.GetStateDetails(_lookUpSearch, out _total_records);
        }
        public static AddressCollection GetDistrictDetails(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            LookUpSearch _lookUp = new LookUpSearch();
            return (AddressCollection)_lookUp.GetDistrictDetails(_lookUpSearch, out _total_records);
        }

    }
}
