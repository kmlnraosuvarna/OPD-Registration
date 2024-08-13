using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using System.Web.UI.WebControls;
using System.Collections;
namespace EzHms.BusinessObject
{
    public class Services
    {
        //private ServiceCollection _serCollection = null;
        public Services()
        {

        }

        public CollectionBase GetServicesForExcludes(string _Service_type_id, string _service_group_id, string _tariff_id, string _block_list)
        {
            EzHms.DataAccessObject.DBServices _servMaster = new EzHms.DataAccessObject.DBServices();
            return _servMaster.GetServicesForExcludes(_Service_type_id, _service_group_id, _tariff_id, _block_list);
        }
        public bool DeleteBussPartnerLabCharge(string bus_prtid)
        {
            EzHms.DataAccessObject.DBServices _servMaster = new EzHms.DataAccessObject.DBServices();
            return _servMaster.DeleteBussPartnerLabCharge(bus_prtid);
        }
        public CollectionBase Get_OutsideLab_InfoListByid(int bus_prtid)
        {
            EzHms.DataAccessObject.DBServices _servMaster = new EzHms.DataAccessObject.DBServices();
            return _servMaster.Get_OutsideLab_InfoListByid(bus_prtid);
        }
        public CollectionBase Get_OutsideLab_InfoList(int pNo, int pSize, string _columnName, string _prefixTxt, out int _total_records)
        {
            EzHms.DataAccessObject.DBServices _servMaster = new EzHms.DataAccessObject.DBServices();
            return _servMaster.Get_OutsideLab_InfoList(pNo, pSize, _columnName, _prefixTxt, out _total_records);
        }
        public string SaveOutLabChargeSetup(Service _objservice)
        {
            EzHms.DataAccessObject.DBServices _servMaster = new EzHms.DataAccessObject.DBServices();
            return _servMaster.SaveOutLabChargeSetup(_objservice);
        }

        public CollectionBase GetLookUpSearchData(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records)
        {
            EzHms.DataAccessObject.DBServices _servMaster = new EzHms.DataAccessObject.DBServices();
            return _servMaster.GetLookUpSearchData(_lookUPSearch, out _total_records);
        }
        public List<ListElements> GetAutoCompleteDimDesc(string prifixtext, int count, string contextkey)
        {
            DBServices _servdimauto = new DBServices();
            return _servdimauto.GetAutoCompleteDimDesc(prifixtext, count, contextkey);
        }
        //public static List<ListElements> GetServices()
        //{
        //    DataAccessLayer DBLayer = new DataAccessLayer();
        //    return DBLayer.GetServiceCollection();
        //}
        //public static List<ListElements> GetAllServicesByCode(string billCD)
        //{
        //    DataAccessLayer DBLayer = new DataAccessLayer();
        //    return DBLayer.GetAllServicesByCode(billCD);
        //}
        //public static List<ListElements> GetUnAssignServices()
        //{
        //    DataAccessLayer DBLayer = new DataAccessLayer();
        //    return DBLayer.GetUnAssignServiceCollection();
        //}
        public static DimensionsCollection GetDimenssions()
        {
            DBServices _services = new DBServices();
            return (DimensionsCollection)_services.GetDimenssions();
        }
        public static Table GetDimenssionPrices(int _serviceID)
        {
            DBServices _services = new DBServices();
            LevelCollection _collection = (LevelCollection)_services.GetDimenssions(_serviceID);
            int _intialValue = 0;
            Table _mainTab = new Table();
            _mainTab.CellPadding = 2;
            _mainTab.CellSpacing = 3;
            TableRow _tRow = null;
            foreach (PriceLevels _pLvls in _collection)
            {
                TableCell _cell = new TableCell();
                TableCell _cell2 = new TableCell();
                if (_intialValue == 0 || _intialValue != _pLvls.PriceDimID)
                {
                    if (_intialValue != 0)
                    {
                        TextBox _txtPrice = new TextBox();
                        TableCell _tPrCell = new TableCell();
                        _tPrCell.Controls.Add(_txtPrice);
                        _tRow.Cells.Add(_tPrCell);
                    }
                    _intialValue = _pLvls.PriceDimID;
                    _tRow = new TableRow();
                    _mainTab.Rows.Add(_tRow);
                }
                Label _lblCode = new Label();
                _lblCode.Text = _pLvls.Code;
                _cell2.Controls.Add(_lblCode);
                _tRow.Cells.Add(_cell2);

                DropDownList _ddLst = new DropDownList();
                _ddLst.Items.Insert(0, new ListItem("--select"));
                _cell.Controls.Add(_ddLst);
                _tRow.Cells.Add(_cell);
            }

            return _mainTab;
        }

        public static List<ListElements> GetPriceDimensions(int _value)
        {
            DBServices _services = new DBServices();
            return null;
        }

        public static bool Save_Ser_Price(ServicePrice _servicePrice)
        {
            DBServices _services = new DBServices();
            return _services.Save_Ser_Price(_servicePrice);
        }

       

        public static bool Delete_Service_Mappings(string _str)
        {
            DBServices _services = new DBServices();
            return _services.Delete_Service_Mappings(_str);
        }
        public EzHms.ModelEntity.service_priceCollection Get_Service_Price_Details(string dySearch)
        {
            DBServices _services = new DBServices();
            return (EzHms.ModelEntity.service_priceCollection)_services.Get_Service_Price_Details(dySearch);
        }

        public EzHms.ModelEntity.service_priceCollection Get_Service_Price_Details_Cons(string dySearch)
        {
            DBServices _services = new DBServices();
            return (EzHms.ModelEntity.service_priceCollection)_services.Get_Service_Price_Details_Cons(dySearch);
        }

        public static EzHms.ModelEntity.ServicePriceCollection Get_Service_Price_OnTariff_Doctor(int tariffID, int doctorID)
        {
            DBServices _services = new DBServices();
            EzHms.ModelEntity.ServicePriceCollection serPriceColl = (EzHms.ModelEntity.ServicePriceCollection)_services.Get_Service_Price_OnTariff_Doctor(tariffID, doctorID);
            return serPriceColl;
        }


        //public static ServicePriceDimCollection GetPriceDimension()
        //{

        //    DBServices service = new DBServices();
        //    return (ServicePriceDimCollection)service.GetPriceDimension();
        //}
        public static ServicePriceDimCollection GetPriceDimension(ListElements _elements, int pageno, int pagesize)
        {
            DBServices service = new DBServices();
            return (ServicePriceDimCollection)service.GetPriceDimension(_elements, pageno, pagesize);
        }



        public static LevelCollection GetLevelCollection(ServiceDimenssions _dimenssion)
        {
            DBServices _services = new DBServices();
            return (LevelCollection)_services.GetLevelCollection(_dimenssion);
            //LevelCollection _collection = new LevelCollection();
            //foreach (string _dimenssion in _selItems)
            //{
            //    switch (_dimenssion)
            //    {
            //        case DALConstants.doctor:
            //            _collection.Add(_services.GetLevelCollection(ServiceDimenssions.DOCTOR));
            //            break;
            //        case DALConstants.wardGroup:
            //            _collection.Add(_services.GetLevelCollection(ServiceDimenssions.WARD_GROUP));
            //            break;
            //        case DALConstants.ward:
            //            _collection.Add(_services.GetLevelCollection(ServiceDimenssions.WARD));
            //            break;
            //        case "BED_TYPE":
            //            _collection.Add(_services.GetLevelCollection(ServiceDimenssions.BED_TYPE));
            //            break;
            //        case DALConstants.consultationType:
            //            _collection.Add(_services.GetLevelCollection(ServiceDimenssions.CONSULTATION_TYPE));
            //            break;
            //        case DALConstants.department :
            //            _collection.Add(_services.GetLevelCollection(ServiceDimenssions.Department));
            //            break;
            //    }
            //}
            //return _collection;
        }

       

        public static LevelCollection GetServicePrices()
        {
            DBServices _services = new DBServices();
            return (LevelCollection)_services.GetServicePrices();
        }

        //public static LevelCollection GetPriceLevels(ListElements _element,int pageSize,int currentPage)
        //{ 
        //    DBServices _services = new DBServices();
        //    return (LevelCollection)_services.GetPriceLevels(_element,pageSize,currentPage);
        //}

        public static EzHms.ModelEntity.PriceLevelCollection GetPriceLevels(ListElements _element, int pageSize, int currentPage)
        {
            DBServices _services = new DBServices();
            return (PriceLevelCollection)_services.GetPriceLevels(_element, pageSize, currentPage);
        }

       
        public static bool Save_Service_Mappings(ServiceMappingCollection _collection)
        {
            DBServices _services = new DBServices();
            return _services.Save_Service_Mappings(_collection);
        }
        public static bool Update_Service_Mapping(ServiceMappingCollection _collectionmap)
        {
            DBServices _services = new DBServices();
            return _services.Update_Service_Mapping(_collectionmap);
        }
        public static bool Delete_Service_Mapping(string price_dim)
        {
            DBServices _services = new DBServices();
            return _services.Delete_Service_Mapping(price_dim);
        }
        public static ServiceMappingCollection GetServiceMappingsDimension(ListElements _element)
        {
            DBServices _servicedim = new DBServices();
            return (ServiceMappingCollection)_servicedim.GetServiceMappingsDimension(_element);
        }
        public static ServiceMappingCollection GetServiceMappings(ListElements _element, int pageSize, int currentPage)
        {
            DBServices _services = new DBServices();
            return (ServiceMappingCollection)_services.GetServiceMappings(_element, pageSize, currentPage);
        }
        public static ServiceMappingCollection GetServiceMappingsByName(string ServiceName)
        {
            DBServices _services = new DBServices();
            return (ServiceMappingCollection)_services.GetServiceMappingsByName(ServiceName);
        }

        public static ServiceMappingCollection GetSericeMapByColumnSearch(string colName, string ColData)
        {
            DBServices _services = new DBServices();
            return (ServiceMappingCollection)_services.GetSericeMapByColumnSearch(colName, ColData);
        }
        public static ServicePriceDimCollection GetPriceDimSearch(string colName, string ColData)
        {
            DBServices _services = new DBServices();
            return (ServicePriceDimCollection)_services.GetPriceDimSearch(colName, ColData);

        }
        public static LevelCollection GetPriceLevelsSearch(string colName, string ColData)
        {
            DBServices _services = new DBServices();
            return (LevelCollection)_services.GetPriceLevelsSearch(colName, ColData);

        }
        public static LevelCollection GetDimenssionByLevelID(int _lvlID, int _lvlRevNo)
        {
            DBServices _services = new DBServices();
            return (LevelCollection)_services.GetDimenssionByLevelID(_lvlID, _lvlRevNo);
        }

      

        public EzHms.ModelEntity.PriceLevelCollection GetPriceLevels(EzHms.ModelEntity.GridPaging gridPaging, out int total_records)
        {
            DBServices _services = new DBServices();
            return (PriceLevelCollection)_services.GetPriceLevels(gridPaging, out total_records);
        }

       
        //public CollectionBase GetAutoCompleteSErviceInfo(string prefixText, string contextKey, LookUpSearch obj)
        //{
        //    DBServices service = new DBServices();
        //    return service.GetAutoCompleteSErviceInfo(prefixText, contextKey, obj);
        //}
        public DataSet GetAutoCompleteSErviceInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteSErviceInfo(prefixText, contextKey, obj);
        }
        public CollectionBase GetAutoCompleteIPServiceInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteIPServiceInfo(prefixText, contextKey, obj);
        }

        public CollectionBase GetAutoCompleteIPServiceInfo_det(string prefixText, string contextKey, LookUpSearch obj)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteIPServiceInfo_det(prefixText, contextKey, obj);
        }

        public CollectionBase GetAutoCompleteCorpIPServiceInfo(string prefixText, string contextKey, LookUpSearch obj)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteCorpIPServiceInfo(prefixText, contextKey, obj);
        }

        public CollectionBase GetAutoCompleteCorpIPServiceInfo1(string prefixText, string contextKey, LookUpSearch obj)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteCorpIPServiceInfo1(prefixText, contextKey, obj);
        }

        public CollectionBase GetAutoCompletePackages(string prefixText, string contextKey, int TariffID, int Companyid, int patClsID, int patID, int wardgrpID, string admnno)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompletePackages(prefixText, contextKey, TariffID, Companyid, patClsID, patID, wardgrpID, admnno);
        }
        public CollectionBase GetAutoCompleteSErviceInfoBySrvTypeId(string prefixText, int count, string contextKey)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteSErviceInfoBySrvTypeId(prefixText, count, contextKey);
        }
        //Service Type Autocomplete
        public CollectionBase GetAutoCompleteServiceType(string prefixText, int count, string contextKey)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServiceType(prefixText, count, contextKey);
        }
        public CollectionBase GetAutoCompleteServices(string prefixText, int count, string contextKey)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServices(prefixText, count, contextKey);
        }


      
        public CollectionBase GetDoctorOrderIndentDetails(string patinetId, string OrderId, string flag)
        {
            DBServices objdb = new DBServices();
            return objdb.GetDoctorOrderIndentDetails(patinetId, OrderId, flag);
        }
        public CollectionBase GetAutoCompleteServiceMaster(string prefixText, int count, string filtercreteria, string contextKey)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServiceMaster(prefixText, count, filtercreteria, contextKey);
        }
        public CollectionBase GetAutoCompleteServiceMasterorg(string prefixText, int count, string filtercreteria, string contextKey)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServiceMasterorg(prefixText, count, filtercreteria, contextKey);
        }
        public CollectionBase GetAutoCompleteServiceMaster_Report(string prefixText, int count, string filtercreteria, string contextKey)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServiceMaster_Report(prefixText, count, filtercreteria, contextKey);
        }
        public CollectionBase GetAutoCompleteServiceMaster__ByGrp(string prefixText, int count, string contextKey, int SrvGrp_Id)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServiceMaster__ByGrp(prefixText, count, contextKey, SrvGrp_Id);
        }
        public CollectionBase GetAutoCompleteServiceMaster__ByGrp_tariff(string prefixText, int count, string contextKey, int SrvGrp_Id, int servicetype_id)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteServiceMaster__ByGrp_tariff(prefixText, count, contextKey, SrvGrp_Id, servicetype_id);
        }
        /* public CollectionBase GetAutoCompleteServicesOpbilling(string prefixText, int count, string contextKey)
         {
             DBServices service = new DBServices();
             return service.GetAutoCompleteServiceMaster(prefixText, count, contextKey);
         }*/

    
        public CollectionBase GetAutoCompleteSErviceInfoSampleReg(string prefixText, string contextKey, string Flag, string companyId, string LocId, string CorpPatType, string CmpWardGrpID, int channel, int refdocid)
        {
            DBServices service = new DBServices();
            return service.GetAutoCompleteSErviceInfoSampleReg(prefixText, contextKey, Flag, companyId, LocId, CorpPatType, CmpWardGrpID, channel, refdocid);
        }
        public CollectionBase ESTIMATION_WORK_ORDER_SERVICES_SUB(string FRN_APP_BILL_ID, string LocId)
        {
            DBServices service = new DBServices();
            return service.ESTIMATION_WORK_ORDER_SERVICES_SUB(FRN_APP_BILL_ID, LocId);

        }
        public bool CheckValidation_Op_Sample(string DOB, string MOBILE_NO, string session_id)
        {
            DBServices service = new DBServices();
            return service.CheckValidation_Op_Sample(DOB, MOBILE_NO, session_id);

        }
    
        public bool SaveMedications(Service _objservice)
        {
            DBServices service = new DBServices();
            return service.SaveMedications(_objservice);
        }
        public CollectionBase GetMedications_Suburban(EzHms.ModelEntity.LookUpSearch _lookupSearch, out int _total_records)
        {
            DBServices service = new DBServices();
            return service.GetMedications_Suburban(_lookupSearch, out _total_records);
        }
        public CollectionBase Getmedicationedit_Suburban(int meditation_id)
        {
            DBServices service = new DBServices();
            return service.Getmedicationedit_Suburban(meditation_id);
        }
     
        public bool CheckValidation_ServiceCode(string srvcode, string session_id, string Flag)
        {
            DBServices service = new DBServices();
            return service.CheckValidation_ServiceCode(srvcode, session_id, Flag);
        }
        public CollectionBase GetAutoPkgservicesincludes(int service_id, int tariffid, string umr_no, string PAT_CATEGORY_ID, string cmp_id)
        {
            DBServices service = new DBServices();
            return service.GetAutoPkgservicesincludes(service_id, tariffid, umr_no, PAT_CATEGORY_ID, cmp_id);
        }
        public DataSet GetAutoPkgservicesincludesNEW(int service_id, int tariffid, string umr_no, string PAT_CATEGORY_ID, string cmp_id)
        {
            DBServices service = new DBServices();
            return service.GetAutoPkgservicesincludesNEW(service_id, tariffid, umr_no, PAT_CATEGORY_ID, cmp_id);
        }
        /*added by swetha reddy for getting services in autocompletion*/
        //public CollectionBase GetAllOPServiceAuto(string prefixText, string contextKey, LookUpSearch obj,ServiceMaster _service , out int count)
        //{
        //    DBServices service = new DBServices();
        //    return service.GetAllOPServiceAuto(prefixText, contextKey, obj, _service,out count);
        //}

        public DataSet GetAllOPServiceAuto(string prefixText, string contextKey, LookUpSearch obj, ServiceMaster _service, out int count)
        {
            DBServices service = new DBServices();
            return service.GetAllOPServiceAuto(prefixText, contextKey, obj, _service, out count);
        }

        //public List<object> GetAllIPServiceAutoCompletion(LookUpSearch obj, ServiceMaster _service, out int count)
        //{
        //    DBServices service = new DBServices();
        //    return service.GetAllIPServiceAutoCompletion(obj, _service, out count);
        //}
        public CollectionBase GetAllIPServiceAutoCompletion(LookUpSearch obj, ServiceMaster _service, out int count)
        {
            DBServices service = new DBServices();
            return service.GetAllIPServiceAutoCompletion(obj, _service, out count);
        }
        public CollectionBase GetAllIPServiceAutoInfo(LookUpSearch obj, ServiceMaster _service)
        {
            DBServices service = new DBServices();
            return service.GetAllIPServiceAutoInfo(obj, _service);
        }
        public static ServiceMasterCollection GetProcedureServices(EzHms.ModelEntity.LookUpSearch _lookUpSearch, out int _total_records)
        {
            DBServices objdb = new DBServices();
            return (ServiceMasterCollection)objdb.GetProcedureServices(_lookUpSearch, out _total_records);
        }

      

    }
}
