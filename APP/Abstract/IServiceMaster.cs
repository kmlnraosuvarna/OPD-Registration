using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ServiceMasterModel = EzHms.ModelEntity.ServiceMaster;
using ServiceMasterModelCollection = EzHms.ModelEntity.ServiceMasterCollection;
using EzHms.ModelEntity;
using System.Collections;
using System.Data;

namespace EzHms.Abstract
{
    public interface IServiceMaster
    {
        bool InsertCompanyTariffServiceMapping(string _xmlStr);
        string[]  Get_Service_Groups_auto(string contextKey, string prefixText, int count);
        string[] Get_Service_types(string contextKey, string prefixText, int count);
        CollectionBase Get_All_Tariff_Services_Cmp(LookUpSearch _lookupSearch, out int _tot_records);
        string[] get_auto_wardGroups(string contextKey, string prefixText, int count);
        string[] Get_Auto_Services(string prefixText, string contextKey, int count);
        CollectionBase   GetServicesByTariff(LookUpSearch _lookUPSearch, out int _tot_records);
        bool saveServiceMaster(ServiceMasterModel serMaster, out string servicecd);
        bool saveServiceTypeChange(SERVICE_TYPE_CHANGE srvtypechng);
        bool DeleteServiceMasterDetails(string serviceCode);
        //bool SaveServiceMaster(ServiceMasterCollection collection);
        bool SaveServiceMasterdet(ServiceMappingCollection collection);
        ServiceMasterModelCollection GetAllServiceMasterDetails_Paging(int pNo, int pSize, out int total_records);
        ServiceMasterModelCollection GetAllServiceMasterDetails_Paging(EzHms.ModelEntity.GridPaging gridPaging, out int total_records);
        ServiceMasterModelCollection GetServiceMasterBasedOnCode(int serCode,int tariff_id);
        ServiceMasterModelCollection GetServiceMasterByColST(string colName, string SearchText);
        ServiceMasterModelCollection GetServiceClassType_OnID(int serviceID);
        string[] GetAutoCompleteInfo(string prefixText, string contextKey);
        ServiceMasterModelCollection GetServicesByServiceType(string Type, string colName, string preFix, int pNo, int pSize, ServicePrice serMast, out int total_records);
        ServiceMasterModelCollection GetServicesByIPServiceType(ServicePrice serMast, out int total_records);
        ServiceMasterModelCollection Get_All_Tariff_Services(GridPaging _gridPaging,out int _total_records);
        ServiceMappingCollection Get_All_Tariff_Services1(int service_class,int service_type,GridPaging _gridPaging, out int _total_records);
        CollectionBase Get_All_Tariff_ServicesCopy(GridPaging _gridPaging, int _groupid,int _service_type_id,int _service_class_id, out int _total_records);
       // string[] GetServiceNames(string prefixText, int count, string contextKey);
        string GetServiceid(int serviceid);
        System.Collections.CollectionBase Get_All_WardGroups_By_Tariff(int tariff_id,string flag);
        DataSet GetEnquiryDetailsWardWise(WardGroup wgroup);
        DataSet GetEnquiryDetailsWardWiseDetails(WardGroup wgroup);
        bool InsertTariffServiceDetailsXML(TARIFF_SERVICE _objModel);
        CollectionBase GetDoctorOrderIndentDetails(string patinetId, string OrderId,string flag);
        CollectionBase getBillingHeads();
        CollectionBase GetServiceLookUpByTypeId(LookUpSearch _lookup, out int records);
        CollectionBase GetServicePackageDet(int serviceID);
        CollectionBase GetServicePackageDet1(int serviceID,int tariff_id);
        CollectionBase GetServiceHistoryDet(int serviceID, int patientID);
        CollectionBase GetAllServiceMaster_GridBind(GridPaging gpage, out int total_records);
       // CollectionBase CheckValidation_ServiceCode(string srvcode, string session_id, string Flag);
    }
}
