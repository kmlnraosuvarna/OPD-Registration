using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using ServiceMasterDAL = EzHms.DataAccessObject.DBServiceMaster;
using ServiceMasterModel = EzHms.ModelEntity.ServiceMaster;
using ServiceMasterModelCollection = EzHms.ModelEntity.ServiceMasterCollection;
using EzHms.ModelEntity;
using System.Data;

namespace EzHms.BusinessObject
{
    public class SerrviceMasterBO
    {

        ServiceMasterDAL serMasterDAL;

        public bool InsertCompanyTariffServiceMapping(string _xmlStr)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.InsertCompanyTariffServiceMapping(_xmlStr);

        }
        public CollectionBase get_auto_wardGroups(string contextKey, string prefixText, int count)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.get_auto_wardGroups(contextKey, prefixText, count);
        }

      



        //public bool saveServiceMaster(ServiceMasterCollection collection)
        //{
        //    serMasterDAL = new ServiceMasterDAL();
        //    bool checkValue = true;
        //    foreach (ServiceMaster servicemaster in collection)
        //    {
        //        ServiceMaster indexedObject = (ServiceMaster)collection[0];
        //        servicemaster.Serviceclass_id = indexedObject.Serviceclass_id;
        //        servicemaster.SERVICE_TYPE_ID = indexedObject.SERVICE_TYPE_ID;
        //        servicemaster.TARIFF_ID = indexedObject.TARIFF_ID;
        //        servicemaster.EFFECT_FROM_DT = indexedObject.EFFECT_FROM_DT;
        //        servicemaster.EFFECT_TO_DT = indexedObject.EFFECT_TO_DT;
        //        servicemaster.COVERAGE_ID = indexedObject.COVERAGE_ID;
        //        //
        //        checkValue = serMasterDAL.saveServiceMasterDetails(servicemaster);
        //        if (checkValue == false)
        //            return false;
        //    }
        //    return checkValue;
        //}

        public CollectionBase Get_Auto_Services_Comp(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Auto_Services_Comp(_obj, prefixText, contextKey, tariff_id);
        }

        public CollectionBase Get_Auto_Services(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Auto_Services(_obj, prefixText, contextKey, tariff_id);
        }
        public CollectionBase Get_Auto_Services1(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Auto_Services1(_obj, prefixText, contextKey, tariff_id);
        }

        public CollectionBase Get_Auto_Services_new(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Auto_Services_new(_obj, prefixText, contextKey, tariff_id);
        }
        public CollectionBase Get_Auto_Services_Ref(string prefixText, string contextKey, int locid)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Auto_Services_Ref(prefixText, contextKey, locid);
        }

      
        public ServiceMasterModelCollection GetServiceMasterBasedOnCode(int serCode,int tariff_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return (ServiceMasterModelCollection)serMasterDAL.GetServiceMasterBasedOnCode(serCode,tariff_id);
        }

        public ServiceMasterModelCollection GetServiceClassType_OnID(int serviceID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return (ServiceMasterModelCollection)serMasterDAL.GetServiceClassType_OnID(serviceID);
        }

        public bool DeleteServiceMasterDetails(string serviceID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.DeleteServiceMasterDetails(serviceID);
        }

        public ServiceMasterModelCollection GetServiceMasterByColST(string colName, string SearchText)
        {
            serMasterDAL = new ServiceMasterDAL();
            return (ServiceMasterModelCollection)serMasterDAL.GetServiceMasterByColST(colName, SearchText);
        }
        public CollectionBase GetAutoCompleteInfo(string prefixText,int count, string searchControl)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.GetAutoCompleteInfo(prefixText,count, searchControl);            
        }
      
        public static CollectionBase GetServiceLookUpByTypeId(LookUpSearch lookup, out int records)
        {
            ServiceMasterDAL objdal = new ServiceMasterDAL();
            return objdal.GetServiceLookUpByTypeId(lookup, out records);
        }
        public List<ListElements> GetAutoComp_ServiceDetails(string prefixText, int count, string contextKey)
        {
            try
            {
                ServiceMasterDAL serMasterDAL = new ServiceMasterDAL();
                return serMasterDAL.GetAutoCompletePackaGeServices(prefixText, count,contextKey);

                //NEED AUTO_COMPLETE PROCEDURE FOR SERVICE MASTER
                //DbCommand dbCmd = dbObj.GetStoredProcCommand(StoreProceduresNames.UPR_BANK_AUTO_COMP);
                //dbObj.AddInParameter(dbCmd, DALConstants.IP_PREFIX_TXT_PARM, DbType.String, prefixText);
                //IDataReader dbDR = dbObj.ExecuteReader(dbCmd);
                //return DataReader(dbDR);
                return null;
            }
            catch (Exception ex)
            {
                throw new ArgumentException(ex.Message);
            }
        }


        

        public CollectionBase Get_All_WardGroups_By_Tariff(int tariff_id,string flag)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_All_WardGroups_By_Tariff(tariff_id,flag);
        }

      

        public CollectionBase Get_Service_types(string contextKey, string prefixText, int count)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Service_types(contextKey, prefixText, count);
        }

        public CollectionBase Get_Service_types_new(string contextKey, string prefixText, int count)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Service_types_new(contextKey, prefixText, count);
        }
        public CollectionBase Get_Service_Groups_auto(string contextKey, string prefixText, int count)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Service_Groups_auto(contextKey, prefixText, count);
        }

        public CollectionBase Get_Service_Groups_auto_new(string contextKey, string prefixText, int count)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Service_Groups_auto_new(contextKey, prefixText, count);
        }
        public CollectionBase Get_Consultation_deptsWithPrice_auto(string contextKey, string prefixText, int count)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.Get_Consultation_deptsWithPrice_auto(contextKey, prefixText, count);
        }

        public CollectionBase getBillingHeads()
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.getBillingHeads();
        }
        public CollectionBase GetServicePackageDet(int serviceID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.GetServicePackageDet(serviceID);
        }
        public CollectionBase GetServicePackageDet1(int serviceID,int tariff_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.GetServicePackageDet1(serviceID, tariff_id);
        }
        public CollectionBase GetServiceHistoryDet(int serviceID, int patientID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.GetServiceHistoryDet(serviceID, patientID);
        }
       
        public CollectionBase GetServicePackageDetSampleReg(int serviceID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.GetServicePackageDetSampleReg(serviceID);
        }
        public CollectionBase CompanyWardGroup(int CompanyID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.CompanyWardGroup(CompanyID);
        }
       
        public CollectionBase HistoryTypeChange(int serviceID)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.HistoryTypeChange(serviceID);
        }
        //public bool CheckValidation_ServiceCode(string srvcode, string session_id, string Flag)
        //{
        //    serMasterDAL = new ServiceMasterDAL();
        //    return serMasterDAL.CheckValidation_ServiceCode(srvcode,session_id,Flag);
        //}
        public CollectionBase GetDcotorOrgPct(int serviceID, int doctor_id, int srv_price_id)
        {
            serMasterDAL = new ServiceMasterDAL();
            return serMasterDAL.GetDcotorOrgPct(serviceID, doctor_id, srv_price_id);
        }
    }

}
