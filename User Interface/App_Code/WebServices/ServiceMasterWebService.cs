using System;
using System.Collections;
using System.Web.Services;
using EzHms.ModelEntity;
using System.Collections.Generic;
using System.Web.Script.Services;
using System.Web.Script.Serialization;
using ServiceMasterModel = EzHms.ModelEntity.ServiceMaster;
using ServiceMasterBO = EzHms.BusinessObject.SerrviceMasterBO;
using ServiceMasterCollection = EzHms.ModelEntity.ServiceMasterCollection;
using EzHms.BusinessObject;
using EzHms.DataAccessObject;
using AjaxControlToolkit;
using System.Data;
namespace EzHms.Services
{
    /// <summary>
    /// Summary description for ServiceMasterWebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]

    public class ServiceMasterWebService : System.Web.Services.WebService, EzHms.Abstract.IServiceMaster, EzHms.Abstract.ILookUpSearch
    {
        ServiceMasterBO serMasterBO;
        public ServiceMasterWebService()
        {
            //Uncomment the following line if using designed components 
            //InitializeComponent(); 
        }

        //[WebMethod]
        //public bool saveServiceMaster(ServiceMasterModel serMaster, out string servicecd)
        //{
        //    serMasterBO = new ServiceMasterBO();
        //    return serMasterBO.saveServiceMaster(serMaster, out servicecd);
        //}
        //[WebMethod]
        //public bool saveServiceTypeChange(SERVICE_TYPE_CHANGE srvtypechng)
        //{
        //    serMasterBO = new ServiceMasterBO();
        //    return serMasterBO.saveServiceTypeChange(srvtypechng);
        //}
        //[WebMethod(EnableSession = true)]
        //public ServiceMasterCollection GetAllServiceMasterDetails_Paging(int pNo, int pSize, out int total_records)
        //{
        //    serMasterBO = new ServiceMasterBO();
        //    return serMasterBO.GetAllServiceMasterDetails_Paging(pNo, pSize, out total_records);
        //}

        //[WebMethod]
        //public ServiceMasterCollection GetServicesByServiceType(string Type, string colName, string preFix, int pNo, int pSize, ServicePrice serMast, out int total_records)
        //{
        //    serMasterBO = new ServiceMasterBO();
        //    return serMasterBO.GetServicesByServiceType(Type, colName, preFix, pNo, pSize, serMast, out total_records);
        //}



        [WebMethod]
        public ServiceMasterCollection GetServiceMasterBasedOnCode(int serCode, int tariff_id)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServiceMasterBasedOnCode(serCode, tariff_id);
        }

        [WebMethod]
        public ServiceMasterCollection GetServiceClassType_OnID(int serviceID)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServiceClassType_OnID(serviceID);
        }

        [WebMethod]
        public bool DeleteServiceMasterDetails(string serviceCode)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.DeleteServiceMasterDetails(serviceCode);
        }
        [WebMethod]
        public ServiceMasterCollection GetServiceMasterByColST(string colName, string SearchText)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServiceMasterByColST(colName, SearchText);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteInfo(string prefixText, string contextKey)
        {
            int count = 0;
            if (Session["Srv_Type_ID"] != null && Session["Srv_Type_ID"] != "")
            {
                contextKey = contextKey + "/" + Session["Srv_Type_ID"].ToString();
            }

            serMasterBO = new ServiceMasterBO();
            EzHms.BusinessObject.SerrviceMasterBO _autoBO = new EzHms.BusinessObject.SerrviceMasterBO();
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            //AutoCompleteList objAutoComplete = new AutoCompleteList();
            CollectionBase _lstElements = _autoBO.GetAutoCompleteInfo(prefixText, count, contextKey);
            foreach (ListElements _element in _lstElements)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteSErviceInfo(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string[] objarray = null;
            if (contextKey != null)
            {
                objarray = contextKey.Split(',');
                for (int i = 0; i < objarray.Length; i++)
                {
                    string res = objarray[i].ToString().Trim();
                    elements.Add(res);
                }
                contextKey = objarray[3].ToString();
            }
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            DataSet ds = servObj.GetAutoCompleteSErviceInfo(prefixText, contextKey, obj);
            MasterClass mobj = new MasterClass();
            return mobj.ConvertDataSetToStringArray(ds, "SERVICE_NAME");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetAutoCompletePackages1(string prefixText, int count, string contextKey)
        {


            int TariffID = Session["TARIFF_ID"] != null ? Convert.ToInt32(Session["TARIFF_ID"].ToString()) : 0;
            int Companyid = Session["COMPANY_ID"] != null ? Convert.ToInt32(Session["COMPANY_ID"].ToString()) : 0;
            int patClsID = 1;
            int PatID = Session["PATIENT_ID"] != null ? Convert.ToInt32(Session["PATIENT_ID"].ToString()) : 0;
            int wgId = Session["WARD_GROUP_ID"] != null ? Convert.ToInt32(Session["WARD_GROUP_ID"].ToString()) : 0;
            string admnno = string.Empty;
            if (Session["ADMN_NO"] != null)
                admnno = !string.IsNullOrEmpty(Session["ADMN_NO"].ToString()) ? Session["ADMN_NO"].ToString() : "";

            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompletePackages(prefixText, contextKey, TariffID, Companyid, patClsID, PatID, Convert.ToInt32(contextKey), admnno);
            return objBo;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompletePackages(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            //int TariffID = Session["TARIFF_ID"] != null && Session["TARIFF_ID"] != "" ? Convert.ToInt32(Session["TARIFF_ID"].ToString()) : 0;
            //int Companyid = Session["COMPANY_ID"] != null && Session["COMPANY_ID"] != "" ? Convert.ToInt32(Session["COMPANY_ID"].ToString()) : 0;
            //int patClsID = 1;
            //int PatID = Session["PATIENT_ID"] != null && Session["PATIENT_ID"] != "" ? Convert.ToInt32(Session["PATIENT_ID"].ToString()) : 0;
            //int wgId = Session["WARD_GROUP_ID"] != null && Session["WARD_GROUP_ID"] != "" ? Convert.ToInt32(Session["WARD_GROUP_ID"].ToString()) : 0;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            //string admnno = string.Empty;
            //if (Session["ADMN_NO"] != null)
            //    admnno = !string.IsNullOrEmpty(Session["ADMN_NO"].ToString()) ? Session["ADMN_NO"].ToString() : "";

            int TariffID = contextKey.Split(',')[0] != "" ? Convert.ToInt32(contextKey.Split(',')[0]) : 0;
            int Companyid = contextKey.Split(',')[1] != "" ? Convert.ToInt32(contextKey.Split(',')[1]) : 0;
            int patClsID = 1;
            int PatID = contextKey.Split(',')[2] != "" ? Convert.ToInt32(contextKey.Split(',')[2]) : 0;
            int wgId = contextKey.Split(',')[3] != "" ? Convert.ToInt32(contextKey.Split(',')[3]) : 0;
            string admnno = string.Empty;
            if (contextKey.Split(',')[4] != "")
                admnno = !string.IsNullOrEmpty(contextKey.Split(',')[4]) ? contextKey.Split(',')[4].ToString() : "";


            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompletePackages(prefixText, contextKey, TariffID, Companyid, patClsID, PatID, wgId, admnno);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        //THIS IS FOR IP
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteIPServiceInfo(string prefixText, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string[] noRecordFound = new string[] { "No Match Found" };
            //if (contextKey != null)
            //    Session["service_type_id"] = contextKey;

            //elements.Add(Session["service_type_id"]);
            //elements.Add(Session["hdnTariffId"]);//elements.Add(Session["tariff_id"]);
            //elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            //elements.Add(Session["WardGrpId"]);
            //elements.Add(Session["ConsTypeId"]);
            //elements.Add(Session["company_id"]);
            //elements.Add(Session["admnno"]);
            //elements.Add(Session["patientId"]);
            ////elements.Add(Session["doctrid"]);
            //elements.Add(string.Empty);//  Flag
            //elements.Add(Session["FLAG"]);

            if (contextKey != null)
            {
                string service_type_id = contextKey.Split(',')[0];
                elements.Add(service_type_id);
                elements.Add(contextKey.Split(',')[1]);
                elements.Add(1);
                elements.Add(contextKey.Split(',')[2]);
                elements.Add(contextKey.Split(',')[3]);
                elements.Add(contextKey.Split(',')[4]);
                elements.Add(contextKey.Split(',')[5]);
                elements.Add(contextKey.Split(',')[6]);
                elements.Add(string.Empty);
                elements.Add(contextKey.Split(',')[7]);
                elements.Add(0);
                elements.Add(0);
                // elements.Add(contextKey.Split(',')[9]);
                contextKey = contextKey.Split(',')[0];
            }

            if (Session["IsFavNstID"] != null && Session["IsFavNstID"] != "")
            {
                elements.Add(Session["IsFavNstID"]);
            }
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            obj.TOTAL_RECORDS = 0;


            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, contextKey, obj);
            if (objBo != null)
            {
                foreach (OSPListElement _element in objBo)
                {
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
                }
            }
            //return items.ToArray();
            if (items.Count != 0)
            {
                return items.ToArray();
            }
            else
            {
                return noRecordFound;
            }


            // Session.Remove("serviceGrpId");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteIPServiceInfo_indent(string prefixText, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string[] noRecordFound = new string[] { "No Match Found" };
            //if (contextKey != null)
            //    Session["service_type_id"] = contextKey.Split(',')[0];

            //elements.Add(Session["service_type_id"]);
            //elements.Add(Session["hdnTariffId"]); /*elements.Add(1);//elements.Add(Session["tariff_id"]);*/
            //elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            //elements.Add(Session["WardGrpId"]);
            //elements.Add(Session["ConsTypeId"]);
            //elements.Add(Session["company_id"]);
            //elements.Add(Session["admnno"]);
            //elements.Add(Session["patientId"]);
            ////elements.Add(Session["doctrid"]);
            //if (Session["NurseOrderFlag"] != null && Session["NurseOrderFlag"] != "")
            //{
            //    elements.Add(Session["NurseOrderFlag"]);//  Flag
            //}
            //else
            //{
            //    elements.Add(string.Empty);
            //}
            //elements.Add(Session["FLAG"]);
            if (contextKey != null)
            {
                string service_type_id = contextKey.Split(',')[0];
                elements.Add(service_type_id);
                elements.Add(contextKey.Split(',')[1]);
                elements.Add(1);
                elements.Add(contextKey.Split(',')[2]);
                elements.Add(contextKey.Split(',')[3]);
                elements.Add(contextKey.Split(',')[4]);
                elements.Add(contextKey.Split(',')[5]);
                elements.Add(contextKey.Split(',')[6]);
                // elements.Add(string.Empty);
                if (contextKey.Split(',')[7] != "") { elements.Add(contextKey.Split(',')[7]); }
                else
                {
                    elements.Add(string.Empty);
                }
                if (contextKey.Split(',')[8] != "")
                {
                    elements.Add(contextKey.Split(',')[8]);
                }
                else
                {
                    elements.Add(contextKey.Split(',')[7]);

                }
                elements.Add(0);

                elements.Add(contextKey.Split(',')[9]);

                contextKey = contextKey.Split(',')[0];
            }
            //if (Session["IsFavNstID"] != null && Session["IsFavNstID"] != "")
            //{
            //    elements.Add(Session["IsFavNstID"]);
            //}

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            obj.TOTAL_RECORDS = 0;
            contextKey = null;

            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            //return items.ToArray();
            if (items.Count != 0)
            {
                return items.ToArray();
            }
            else
            {
                return noRecordFound;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetAutoCompleteIPServiceInfo1(string prefixText, string contextKey, string _advSrch)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            //if (contextKey != null)
            //    Session["service_type_id"] = contextKey;

            //elements.Add(Session["service_type_id"]);
            //elements.Add(Session["hdnTariffId"]);/*elements.Add(1);//elements.Add(Session["tariff_id"]);*/
            //elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            //elements.Add(Session["WardGrpId"]);
            //elements.Add(Session["ConsTypeId"]);
            //elements.Add(Session["company_id"]);
            //elements.Add(Session["admnno"]);
            //elements.Add(Session["patientId"]);
            ////elements.Add(Session["doctrid"]);
            //if (Session["NurseOrderFlag"] != null && Session["NurseOrderFlag"] != "")
            //{
            //    elements.Add(Session["NurseOrderFlag"]);//  Flag
            //}
            //else
            //{
            //    elements.Add(string.Empty);
            //}
            //if (Session["EmergencyPrice"] != null && Session["EmergencyPrice"] != "")
            //{
            //    elements.Add(Session["EmergencyPrice"]);
            //}
            //else
            //{
            //    elements.Add(Session["FLAG"]);
            //}
            if (contextKey != null)
            {
                string service_type_id = contextKey.Split(',')[0];
                elements.Add(service_type_id);
                elements.Add(contextKey.Split(',')[1]);
                elements.Add(1);
                elements.Add(contextKey.Split(',')[2]);
                elements.Add(contextKey.Split(',')[3]);
                elements.Add(contextKey.Split(',')[4]);
                elements.Add(contextKey.Split(',')[5]);
                elements.Add(contextKey.Split(',')[6]);
                // elements.Add(string.Empty);
                if (contextKey.Split(',')[7] != "") { elements.Add(contextKey.Split(',')[7]); }
                else
                {
                    elements.Add(string.Empty);
                }
                if (contextKey.Split(',')[8] != "")
                {
                    elements.Add(contextKey.Split(',')[8]);
                }
                else
                {
                    elements.Add(contextKey.Split(',')[7]);

                }

                elements.Add(0);
                elements.Add(contextKey.Split(',')[9]);
                contextKey = contextKey.Split(',')[0];

            }

            //elements.Add(0);
            //if (Session["IsFavNstID"] != null && Session["IsFavNstID"] != "")
            //{
            //    elements.Add(Session["IsFavNstID"]);
            //}
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            obj.ADVANCESEARCH = _advSrch;
            obj.TOTAL_RECORDS = 0;


            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            if (objBo != null)
            {
                List<object> _lst = new List<object>();
                _lst.Add(objBo);
                _lst.Add(objBo.Count);
                return _lst;
            }
            else
                return null;
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetAutoCompleteIPServiceInfo2(string prefixText, string contextKey, string _advSrch)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            //if (contextKey != null)
            //    Session["service_type_id"] = contextKey;

            //elements.Add(Session["service_type_id"]);
            //elements.Add(Session["hdnTariffId"]);/*elements.Add(1);//elements.Add(Session["tariff_id"]);*/
            //elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            //elements.Add(Session["WardGrpId"]);
            //elements.Add(Session["ConsTypeId"]);
            //elements.Add(Session["company_id"]);
            //elements.Add(Session["admnno"]);
            //elements.Add(Session["patientId"]);
            ////elements.Add(Session["doctrid"]);
            //if (Session["NurseOrderFlag"] != null && Session["NurseOrderFlag"] != "")
            //{
            //    elements.Add(Session["NurseOrderFlag"]);//  Flag
            //}
            //else
            //{
            //    elements.Add(string.Empty);
            //}
            //if (Session["EmergencyPrice"] != null && Session["EmergencyPrice"] != "")
            //{
            //    elements.Add(Session["EmergencyPrice"]);
            //}
            //else
            //{
            //    elements.Add(Session["FLAG"]);
            //}
            if (contextKey != null)
            {
                string service_type_id = contextKey.Split(',')[0];
                elements.Add(service_type_id);
                elements.Add(contextKey.Split(',')[1]);
               // elements.Add(1);
                elements.Add(contextKey.Split(',')[2]);
                elements.Add(contextKey.Split(',')[3]);
                elements.Add(contextKey.Split(',')[4]);
                elements.Add(contextKey.Split(',')[5]);
                elements.Add(contextKey.Split(',')[6]);
                // elements.Add(string.Empty);
                if (contextKey.Split(',')[7] != "") { elements.Add(contextKey.Split(',')[7]); }
                else
                {
                    elements.Add(string.Empty);
                }
                //if (contextKey.Split(',')[8] != "")
                //{
                    elements.Add(contextKey.Split(',')[8]);
                //}
                //else
                //{
                //    elements.Add(contextKey.Split(',')[7]);

                //}

                
                elements.Add(contextKey.Split(',')[9]);
                elements.Add(0);
                elements.Add(contextKey.Split(',')[10]);
                contextKey = contextKey.Split(',')[0];

            }

            //elements.Add(0);
            //if (Session["IsFavNstID"] != null && Session["IsFavNstID"] != "")
            //{
            //    elements.Add(Session["IsFavNstID"]);
            //}
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            obj.ADVANCESEARCH = _advSrch;
            obj.TOTAL_RECORDS = 0;


            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            if (objBo != null)
            {
                List<object> _lst = new List<object>();
                _lst.Add(objBo);
                _lst.Add(objBo.Count);
                return _lst;
            }
            else
                return null;
        }


        //THIS IS FOR IP
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteIPServiceInfoPkgSrv(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            if (contextKey != null)
            {
                Session["service_type_id"] = "0";
            }

            elements.Add(Session["service_type_id"]);
            elements.Add(1);//elements.Add(Session["tariff_id"]);
            elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            if (contextKey != null)
            {
                elements.Add(contextKey);
                contextKey = "";
            }
            else
                elements.Add(Session["WardGrpId"]);
            elements.Add(1);//Session["ConsTypeId"]);
            elements.Add(Session["company_id"]);
            elements.Add(Session["admnno"]);
            elements.Add(Session["patientId"]);
            //elements.Add(Session["doctrid"]);

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
            // Session.Remove("serviceGrpId");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteIPServiceInfo_det(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            if (contextKey != null)
                Session["service_type_id"] = contextKey;
            Session["doctrid"] = "";
            elements.Add(Session["service_type_id"]);
            elements.Add(1);//elements.Add(Session["tariff_id"]);
            elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            elements.Add(Session["WardGrpId"]);
            elements.Add(Session["ConsTypeId"]);
            elements.Add(Session["company_id"]);
            elements.Add(Session["admnno"]);
            elements.Add(Session["doctrid"]);

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;

            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo_det(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
            //Session.Remove("doctrid");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetAutoCompleteIPServiceInfo_new(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            //if (SessionHandler.SERVICEGRPID == "") SessionHandler.SERVICEGRPID = "0";
            //if (contextKey != null)
            //    Session["service_type_id"] = contextKey;


            //if (Session["service_type_id"] == null)
            //    Session["service_type_id"] = SessionHandler.SERVICE_TYPE_ID;
            //if (Session["WardGrpId"] == null)
            //    Session["WardGrpId"] = SessionHandler.SERVICEGRPID;
            //if (Session["ConsTypeId"] == null)
            //    Session["ConsTypeId"] = SessionHandler.CONSTYPEID;

            //if (Session["doctrid"] == null)
            //    Session["doctrid"] = SessionHandler.DOCTORID;

            elements.Add(contextKey.Split(',')[0]);
            elements.Add(contextKey.Split(',')[1]);//elements.Add(Session["tariff_id"]);
            elements.Add(contextKey.Split(',')[2]);//elements.Add(Session["patient_class_id"]);    
            elements.Add(contextKey.Split(',')[3]);
            elements.Add(contextKey.Split(',')[4]);
            elements.Add(contextKey.Split(',')[5]);
            elements.Add(contextKey.Split(',')[6]);
            elements.Add(contextKey.Split(',')[7]);


            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;

            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            return servObj.GetAutoCompleteIPServiceInfo_det(prefixText, contextKey, obj);
        }



        //THIS IS FOR IP
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteIPServiceInfo_IMR(string prefixText, string contextKey)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;
            string Emrgency_flag = string.Empty;
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    string ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    string WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    string ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    string GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";

                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    elements.Add(ServiceTypeid);
                    elements.Add(1);//elements.Add(Session["tariff_id"]);
                    elements.Add(1);//elements.Add(Session["patient_class_id"]);
                    elements.Add(WardGrpId);
                    elements.Add(ConTypeId);
                    elements.Add(Session["company_id"]);
                    elements.Add(string.Empty);
                    elements.Add(string.Empty);
                    elements.Add(flag);
                    elements.Add(Emrgency_flag);
                    elements.Add(GenderID);
                }
            }

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;

            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, null, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
            // Session.Remove("serviceGrpId");
        }

        //THIS IS FOR IP
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteCorpIPServiceInfo(string prefixText, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            elements.Add(1);
            elements.Add(Session["PATIENT_ID"]);
            elements.Add(Session["WARD_GROUP_ID"]);
            elements.Add(Session["COMPANY_ID"]);
            elements.Add(Session["CMP_REFRL_LTR_ID"]);
            elements.Add(Session["SERVICE_TYPE_ID"]);
            elements.Add(Session["DEPARTMENT_ID"]);
            elements.Add(Session["SPECIALIZATION_ID"]);
            elements.Add(Session["CONSULTATION_TYPE_ID"]);

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteCorpIPServiceInfo(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteCorpIPServiceInfo1(string prefixText, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();

            elements.Add(1);
            if (contextKey != null)
            {
                elements.Add(contextKey.Split(',')[0]);
                elements.Add(contextKey.Split(',')[1]);
                elements.Add(contextKey.Split(',')[2]);
                elements.Add(contextKey.Split(',')[3]);
            }
            //elements.Add(1);
            //elements.Add(Session["PATIENT_ID"]);
            //elements.Add(Session["WARD_GROUP_ID"]);
            //elements.Add(Session["COMPANY_ID"]);
            //elements.Add(Session["CMP_REFRL_LTR_ID"]);


            elements.Add(Session["SERVICE_TYPE_ID"]);
            elements.Add(Session["DEPARTMENT_ID"]);
            elements.Add(Session["SPECIALIZATION_ID"]);
            elements.Add(Session["CONSULTATION_TYPE_ID"]);

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteCorpIPServiceInfo1(prefixText, contextKey, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        //SERVICE tYPE
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceType(string prefixText, int count, string contextKey)
        {

            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceType(prefixText, count, contextKey);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Service_type_name, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
       

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteSErviceInfoBySrvTypeId(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            //EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            //EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteSErviceInfoBySrvTypeId(prefixText, count, contextKey);

            ServicePrice _sPrice = new ServicePrice();
            _sPrice.PREFIX = prefixText;
            _sPrice.COLUMN_NAME = "";
            string str = !string.IsNullOrEmpty(contextKey) ? contextKey : ",,,,";
            _sPrice.SERVICE_TYPE_ID = Convert.ToInt32(str.Split(',')[0]);
            _sPrice.WARD_GROUP_ID = str.Split(',')[1];
            _sPrice.CONSULTATION_TYPE_ID = Convert.ToInt32(str.Split(',')[2]);
            _sPrice.PATIENT_ID = Convert.ToInt32(str.Split(',')[3]);
            _sPrice.IS_EMERGNCY_PRICE = str.Split(',')[4];
            int total_records = 0;
            serMasterBO = new ServiceMasterBO();
            //ServiceMasterCollection _serCollection = serMasterBO.GetServicesByIPServiceType(_sPrice, out total_records);
            //foreach (EzHms.ModelEntity.ServiceMaster _element in _serCollection)
            //{
            //    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            //}
            return items.ToArray();
        }
        #region ILookUpSearch Members

        //[WebMethod]
        //public CollectionBase GetLookUpSearchData(LookUpSearch _lookUPSearch, out int _total_records)
        //{
        //    return SerrviceMasterBO.GetLookUPSearchData(_lookUPSearch, out _total_records);
        //}
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoServiceByTypeId(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteSErviceInfoBySrvTypeId(prefixText, count, contextKey);

            foreach (ListElements _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        [WebMethod]
        [ScriptMethod()]
        public string[] GetAutoComp_ServiceDetails(string prefixText, int count, string contextKey)
        {
            EzHms.BusinessObject.SerrviceMasterBO _autoBO = new EzHms.BusinessObject.SerrviceMasterBO();
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            //AutoCompleteList objAutoComplete = new AutoCompleteList();
            List<ListElements> _lstElements = _autoBO.GetAutoComp_ServiceDetails(prefixText, count, contextKey);
            foreach (ListElements _element in _lstElements)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        #endregion

        #region IServiceMaster Members

        //[WebMethod(EnableSession = true)]
        //public ServiceMasterCollection GetAllServiceMasterDetails_Paging(GridPaging gridPaging, out int total_records)
        //{
        //    return (ServiceMasterCollection)SerrviceMasterBO.GetLookUPSearchData(gridPaging, out total_records);
        //}

        #endregion



       

        #region IServiceMaster Members

        //[WebMethod]
        //public bool SaveServiceMaster(EzHms.ModelEntity.ServiceMasterCollection collection)
        //{
        //    SerrviceMasterBO servicemaster = new SerrviceMasterBO();
        //    return servicemaster.saveServiceMaster(collection);
        //}
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServices(string prefixText, int count, string contextKey)
        {

            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServices(prefixText, count, contextKey);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        #endregion

        [WebMethod(EnableSession = true)]
        public CollectionBase Get_All_WardGroups_By_Tariff(int tariff_id, string flag)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.Get_All_WardGroups_By_Tariff(tariff_id, flag);
        }

       

        //  [WebMethod(EnableSession = true)]
        //  [ScriptMethod()]
        //  public string[] GetServiceNames(string prefixText, int count, string contextKey)
        //{

        //      List<string> items = new List<string>();

        //      JavaScriptSerializer _serializer = new JavaScriptSerializer();
        //      ServiceDetMasterBO    serdetMasterBO = new ServiceDetMasterBO();
        //      ServiceDetMasterCollection _coll =(ServiceDetMasterCollection) serdetMasterBO.GetServiceDetails(prefixText, count, contextKey);
        //      foreach (ServiceMaster _element in _coll)
        //      {

        //          items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_TYPE_NAME, _serializer.Serialize(_element)));
        //      }
        //      return items.ToArray();
        //  }

        //  #region IServiceMaster Members





        //#region IServiceMaster Members
        //[WebMethod(EnableSession = true)]
        //public string GetServiceid(int serviceid)
        //{
        //    serMasterBO = new ServiceMasterBO();
        //    return serMasterBO.GetServiceid(serviceid);
        //}

        //#endregion

       

        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        [System.Web.Script.Services.ScriptMethod()]
        public string[] Get_Auto_Services(string prefixText, string contextKey, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = 0;
            _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            if (_tariff_id == null) { _tariff_id = 0; }
            LookUpSearch _lookupSearch = null;
            string[] str = new string[3];
            List<object> _obj = new List<object>();
            List<string> items = new List<string>();
            if (contextKey != null)
            {
                _lookupSearch = new LookUpSearch();
                str = contextKey.Split(',');
                if (str.Length > 1)
                {
                    if (str[0] == string.Empty)
                        str[0] = "0";
                    _obj.Add(str[0]);
                    _obj.Add(str[1]);
                    _obj.Add(str[2]);
                    if (str.Length > 4)
                        _tariff_id = Convert.ToInt32(str[3]);
                    _lookupSearch.PreConditon = _obj;
                }
            }
            ServiceCollection _coll = (ServiceCollection)_objBO.Get_Auto_Services(_lookupSearch, prefixText, "SERVICE_NAME", _tariff_id);
            foreach (OSPListElement _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }


        [WebMethod(EnableSession = true)]
        [System.Web.Script.Services.ScriptMethod()]
        public string[] Get_Auto_Services2(string prefixText, string contextKey, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = 0;
            _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            if (_tariff_id == null) { _tariff_id = 0; }
            LookUpSearch _lookupSearch = null;
            string[] str = new string[3];
            List<object> _obj = new List<object>();
            List<string> items = new List<string>();
            if (contextKey != null)
            {
                _lookupSearch = new LookUpSearch();
                str = contextKey.Split(',');
                if (str.Length > 1)
                {
                    if (str[0] == string.Empty)
                        str[0] = "0";
                    _obj.Add(str[0]);
                    _obj.Add(str[1]);
                    _obj.Add(str[2]);
                    _obj.Add(str[4]);

                    _obj.Add(str[5]);
                    if (str.Length >= 4)
                        _tariff_id = Convert.ToInt32(str[3]);
                    _lookupSearch.PreConditon = _obj;
                }
            }
            ServiceCollection _coll = (ServiceCollection)_objBO.Get_Auto_Services1(_lookupSearch, prefixText, "SERVICE_NAME", _tariff_id);
            foreach (OSPListElement _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }


        [WebMethod(EnableSession = true)]
        [System.Web.Script.Services.ScriptMethod()]
        public string[] Get_Auto_Services_Doctor_name(string prefixText, string contextKey, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            LookUpSearch _lookupSearch = null;
            string[] str = new string[3];
            List<object> _obj = new List<object>();
            List<string> items = new List<string>();
            if (contextKey != null)
            {
                _lookupSearch = new LookUpSearch();
                str = contextKey.Split(',');
                if (str.Length > 1)
                {
                    if (str[0] == string.Empty)
                        str[0] = "0";
                    _obj.Add(str[0]);
                    _obj.Add(str[1]);
                    _obj.Add(str[2]);
                    _lookupSearch.PreConditon = _obj;
                }
            }
            ServiceCollection _coll = (ServiceCollection)_objBO.Get_Auto_Services(_lookupSearch, prefixText, "DOCTOR_NAME", _tariff_id);
            foreach (OSPListElement _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }


        [WebMethod(EnableSession = true)]
        [System.Web.Script.Services.ScriptMethod()]
        public string[] Get_Auto_Services_new(string prefixText, string contextKey, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = 0;
            _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            if (_tariff_id == null) { _tariff_id = 0; }
            LookUpSearch _lookupSearch = null;
            string[] str = new string[3];
            List<object> _obj = new List<object>();
            List<string> items = new List<string>();
            if (contextKey != null)
            {
                _lookupSearch = new LookUpSearch();
                str = contextKey.Split(',');
                if (str.Length > 2)
                {
                    if (str[0] == string.Empty)
                        str[0] = "0";
                    _obj.Add(str[0]);
                    _obj.Add(str[1]);
                    _obj.Add(str[2]);
                    if (str.Length > 4)
                        _tariff_id = Convert.ToInt32(str[3]);
                    _lookupSearch.PreConditon = _obj;
                }
            }
            ServiceCollection _coll = (ServiceCollection)_objBO.Get_Auto_Services_new(_lookupSearch, prefixText, "SERVICE_NAME", _tariff_id);
            foreach (OSPListElement _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize

(_element)));
            }
            return items.ToArray();
        }
        [WebMethod(EnableSession = true)]
        [System.Web.Script.Services.ScriptMethod()]
        public string[] Get_Auto_Services_Ref(string prefixText, string contextKey)
        {
            int locid = 0;
            ServiceMasterBO _objBO = new ServiceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            //if (contextKey != null)
            //    Session["reflocid"] = contextKey;
            if (Session["reflocid"] != null)
                locid = Convert.ToInt32(Session["reflocid"].ToString());
            List<string> items = new List<string>();
            ServiceCollection _coll = (ServiceCollection)_objBO.Get_Auto_Services_Ref(prefixText, "SERVICE_NAME", locid);
            foreach (OSPListElement _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        #endregion

     
      

       

       

        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] Get_Service_types(string contextKey, string prefixText, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            List<string> items = new List<string>();
            ServiceMasterCollection _coll = (ServiceMasterCollection)_objBO.Get_Service_types(contextKey, prefixText, count);
            foreach (ServiceMaster _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_TYPE_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        #endregion

        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] Get_Service_types_new(string contextKey, string prefixText, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            List<string> items = new List<string>();
            ServiceMasterCollection _coll = (ServiceMasterCollection)_objBO.Get_Service_types_new(contextKey, prefixText,

count);
            foreach (ServiceMaster _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_TYPE_NAME, serializer.Serialize

(_element)));
            }
            return items.ToArray();
        }

        #endregion
        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        public string[] Get_Service_Groups_auto(string contextKey, string prefixText, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            if (Session["tariff_id"] != null)
            {
                int _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            }

            List<string> items = new List<string>();
            ServiceMasterCollection _coll = null;
            if (contextKey == "DEPARTMENT_NAME")
                _coll = (ServiceMasterCollection)_objBO.Get_Consultation_deptsWithPrice_auto(contextKey, prefixText, count);
            else
                _coll = (ServiceMasterCollection)_objBO.Get_Service_Groups_auto(contextKey, prefixText, count);

            foreach (ServiceMaster _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_GROUP_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        #endregion
        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        public string[] Get_Service_Groups_auto_new(string contextKey, string prefixText, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            if (Session["tariff_id"] != null)
            {
                int _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            }


            List<string> items = new List<string>();
            ServiceMasterCollection _coll = null;
            if (contextKey == "DEPARTMENT_NAME")
                _coll = (ServiceMasterCollection)_objBO.Get_Consultation_deptsWithPrice_auto(contextKey, prefixText,

count);
            else
                _coll = (ServiceMasterCollection)_objBO.Get_Service_Groups_auto_new(contextKey, prefixText, count);


            foreach (ServiceMaster _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_GROUP_NAME, serializer.Serialize

(_element)));
            }
            return items.ToArray();
        }

        #endregion

        [WebMethod(EnableSession = true)]
        public string[] Get_Service_Groups_auto1(string contextKey, string prefixText, int count)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            int _tariff_id = Convert.ToInt32(Session["tariff_id"]);
            List<string> items = new List<string>();
            ServiceMasterCollection _coll = null;
            if (contextKey == "DEPARTMENT_NAME")
                _coll = (ServiceMasterCollection)_objBO.Get_Service_Groups_auto(contextKey, prefixText, count);
            else
                _coll = (ServiceMasterCollection)_objBO.Get_Service_Groups_auto(contextKey, prefixText, count);

            foreach (ServiceMaster _element in _coll)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.SERVICE_GROUP_NAME, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }

        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        public bool InsertCompanyTariffServiceMapping(string _xmlStr)
        {
            ServiceMasterBO _objBO = new SerrviceMasterBO();
            return _objBO.InsertCompanyTariffServiceMapping(_xmlStr);
        }

        #endregion

       
       


        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        public CollectionBase GetDoctorOrderIndentDetails(string patinetId, string OrderId, string flag)
        {
            EzHms.BusinessObject.Services serBO = new EzHms.BusinessObject.Services();
            return serBO.GetDoctorOrderIndentDetails(patinetId, OrderId, flag);
        }

        #endregion

        #region IServiceMaster Members


        public CollectionBase getBillingHeads()
        {
            ServiceMasterBO objbo = new ServiceMasterBO();
            return objbo.getBillingHeads();
        }

        #endregion



        

        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetServicePackageDet(int serviceID)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServicePackageDet(serviceID);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetServicePackageDet1(int serviceID, int tariff_id)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServicePackageDet1(serviceID, tariff_id);
        }

        #endregion

        #region IServiceMaster Members

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetServiceHistoryDet(int serviceID, int patientID)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServiceHistoryDet(serviceID, patientID);
        }

        #endregion
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceMaster(string prefixText, string contextKey)
        {
            string filtercreteria = "";
            if (!string.IsNullOrEmpty(filtercreteria))
            {
                int count = 0;
                System.Collections.Generic.List<string> items = new List<string>();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
                EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMaster_Report(prefixText, count, filtercreteria, contextKey);
                foreach (OSPListElement _element in objBo)
                {
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
                }
                return items.ToArray();
            }
            else
            {
                int count = 0;
                System.Collections.Generic.List<string> items = new List<string>();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
                EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMaster(prefixText, count, filtercreteria, contextKey);
                foreach (OSPListElement _element in objBo)
                {
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
                }
                return items.ToArray();
            }
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceMasterorg(string prefixText, string contextKey)
        {
            string filtercreteria = "";
            if (!string.IsNullOrEmpty(filtercreteria))
            {
                int count = 0;
                System.Collections.Generic.List<string> items = new List<string>();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
                EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMaster_Report(prefixText, count, filtercreteria, contextKey);
                foreach (OSPListElement _element in objBo)
                {
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
                }
                return items.ToArray();
            }
            else
            {
                int count = 0;
                System.Collections.Generic.List<string> items = new List<string>();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
                EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMasterorg(prefixText, count, filtercreteria, contextKey);
                foreach (OSPListElement _element in objBo)
                {
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
                }
                return items.ToArray();
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceMaster_ByGrp(string prefixText, string contextKey)
        {
            int count = 0; int SrvGrp_Id = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            //if (!string.IsNullOrEmpty(SessionHandler.PRE_CONDITON.ToString()))
            //    SrvGrp_Id = Convert.ToInt32(SessionHandler.PRE_CONDITON.Split('^')[1]);
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMaster__ByGrp(prefixText, count, contextKey, SrvGrp_Id);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceMaster__ByGrp_tariff(string prefixText, string contextKey, string precondition)
        {
            int count = 0; int SrvGrp_Id = 0; int Srvtype_Id = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            //if (!string.IsNullOrEmpty(SessionHandler.PRE_CONDITON.ToString()))
            //    SrvGrp_Id = Convert.ToInt32(SessionHandler.PRE_CONDITON.Split('^')[1]);
            //if (!string.IsNullOrEmpty(SessionHandler.PRE_CONDITON.ToString()))
            //    Srvtype_Id = Convert.ToInt32(SessionHandler.PRE_CONDITON.Split('^')[2]);
            string _preC = precondition.Trim();
            if (_preC != string.Empty && _preC.Split('^').Length > 2)
            {
                Srvtype_Id = Convert.ToInt32(_preC.Split('^')[2].Trim());
            }
            if (_preC != string.Empty && _preC.Split('^').Length > 1)
            {
                SrvGrp_Id = Convert.ToInt32(_preC.Split('^')[1].Trim());
            }
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMaster__ByGrp_tariff(prefixText, count, contextKey, SrvGrp_Id, Srvtype_Id);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServicesOpbilling(string prefixText, string contextKey, string filtercreteria)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteServiceMaster(prefixText, count, filtercreteria, contextKey);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        //public CollectionBase GetAllServiceMaster_GridBind(GridPaging gpage, out int total_records)
        //{
        //    serMasterBO = new ServiceMasterBO();
        //    return serMasterBO.GetAllServiceMaster_GridBind(gpage, out total_records);
        //}

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteSErviceInfoSampleRegistration(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            // List<object> elements = new List<object>();
            //if (contextKey != null)
            //    Session["service_type_id"] = contextKey;
            int refdocid = 0;
            string Flag = string.Empty;
            string CmpyID = "0";
            string LocID = "0";
            string Corp_PatientType = string.Empty;
            string CmpWardGrpID = string.Empty;
            if (Session["CampanyID"] != null)
                CmpyID = Session["CampanyID"].ToString();

            LocID = SessionHandler.LOCATION_ID;
            if (Session["PayType"] != null)
                Flag = Session["PayType"].ToString();
            if (Session["CORP_PAT_TYPE"] != null)
                Corp_PatientType = Session["CORP_PAT_TYPE"].ToString();
            if (Session["Cmp_Ward_Grp_ID"] != null)
                CmpWardGrpID = Session["Cmp_Ward_Grp_ID"].ToString();
            int channel = Convert.ToInt32(Session["CHANNEL"]);
            if (channel == 6 || channel == 21)
            {
                refdocid = Convert.ToInt32(Session["REFERAL_DOC_ID"]);
            }
            else
            {
                refdocid = 0;
            }
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteSErviceInfoSampleReg(prefixText, contextKey, Flag, CmpyID, LocID, Corp_PatientType, CmpWardGrpID, channel, refdocid);
            foreach (OSPListElement _element in objBo)
            {
                if (contextKey == "SERVICE_CD")
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Service_cd, serializer.Serialize(_element)));
                else
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase HomeVisitServiceCharge(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            string Flag = string.Empty;
            string CmpyID = "0";
            string LocID = "0";
            string Corp_PatientType = string.Empty;
            string CmpWardGrpID = string.Empty;
            if (Session["CampanyID"] != null)
                CmpyID = Session["CampanyID"].ToString();

            LocID = SessionHandler.LOCATION_ID;
            if (Session["PayType"] != null)
                Flag = Session["PayType"].ToString();
            if (Session["CORP_PAT_TYPE"] != null)
                Corp_PatientType = Session["CORP_PAT_TYPE"].ToString();
            if (Session["Cmp_Ward_Grp_ID"] != null)
                CmpWardGrpID = Session["Cmp_Ward_Grp_ID"].ToString();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteSErviceInfoSampleReg(prefixText, contextKey, Flag, CmpyID, LocID, Corp_PatientType, CmpWardGrpID, 22, 0);
            return objBo;

        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetServicePackageDetForSampleRegistration(int serviceID)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetServicePackageDetSampleReg(serviceID);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase HistoryTypeChange(int srvId)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.HistoryTypeChange(srvId);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase CompanyWardGroup(int ComanyID)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.CompanyWardGroup(ComanyID);
        }
        #region Added by Swetha Reddy for getting services
        /// <summary>
        /// added by Swetha Reddy, in opd billing, get services through autocompletion
        /// </summary>
        /// <param name="prefixText"></param>
        /// <param name="count"></param>
        /// <param name="contextKey"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAllOPServiceAuto(string prefixText, int count, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string[] objarray = contextKey.Split(',');
            for (int i = 0; i < objarray.Length; i++)
            {
                string res = objarray[i].ToString().Trim();
                elements.Add(res);
            }
            ServiceMaster _service = new ServiceMaster();
            if (objarray[5] != null)
                _service.GENDER_ID = objarray[5].ToString();
            if (objarray[0] != null)
                _service.SERVICE_TYPE_ID = Convert.ToInt32(objarray[0].ToString());
            if (objarray[6] != null)
                _service.COMPANY_ID = objarray[6].ToString();
            if (objarray[8] != null)
            {
                if (!string.IsNullOrEmpty(objarray[8].ToString()))
                {
                    _service.REFERAL_LETTER_ID = Convert.ToInt32(objarray[8].ToString());
                }
                else
                {
                    _service.REFERAL_LETTER_ID = 0;
                }
            }
            if (objarray[1] != null)
            {
                if (!string.IsNullOrEmpty(objarray[1].ToString()))
                {
                    _service.TARIFF_ID = Convert.ToInt32(objarray[1].ToString());
                }
                else
                {
                    _service.TARIFF_ID = 0;
                }
            }
            if (objarray[9] != null)
            {
                if (!string.IsNullOrEmpty(objarray[9].ToString()))
                {
                    _service.STATUS = Convert.ToString(objarray[9].ToString());
                }
                else
                {
                    _service.STATUS = "N";
                }
            }

            if (objarray[10] != null)
            {
                if (!string.IsNullOrEmpty(objarray[10].ToString()))
                {
                    _service.DEPARTMENT_ID = Convert.ToInt32(objarray[10].ToString());
                }
                else
                {
                    _service.DEPARTMENT_ID = Convert.ToInt32("0");
                }
            }

            if (objarray[11] != null)
            {
                if (!string.IsNullOrEmpty(objarray[11].ToString()))
                {
                    _service.DOC_DEPT_UINT_ID = Convert.ToString(objarray[11].ToString());
                }
                else
                {
                    _service.DOC_DEPT_UINT_ID = "0";
                }
            }

            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            contextKey = objarray[3].ToString();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            DataSet ds = servObj.GetAllOPServiceAuto(prefixText, contextKey, obj, _service, out count);
            MasterClass mobj = new MasterClass();
            return mobj.ConvertDataSetToStringArray(ds, "SERVICE_NAME");
        }
        /// <summary>
        /// added by Swetha Reddy,  in opd billing, get services through lookup
        /// </summary>
        /// <param name="prefixText"></param>
        /// <param name="count"></param>
        /// <param name="contextKey"></param>
        /// <param name="_advSrch"></param>
        /// <param name="pageNum"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetAllOPServiceAutoLookup(string prefixText, string count, string contextKey, string _advSrch, string bill_id, string _eventFlag, string pageNum, string pageSize, string tariff_id, string srvpertariff)
        {
            int _count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string[] objarray = contextKey.Split(',');
            for (int i = 0; i < objarray.Length; i++)
            {
                string res = objarray[i].ToString().Trim();
                elements.Add(res);
            }
            ServiceMaster _service = new ServiceMaster();
            if (objarray[5] != null)
                _service.GENDER_ID = objarray[5].ToString();
            if (objarray[0] != null)
                _service.SERVICE_TYPE_ID = Convert.ToInt32(objarray[0].ToString());
            if (objarray[6] != null)
                _service.COMPANY_ID = objarray[6].ToString();
            if (objarray[8] != null)
                _service.REFERAL_LETTER_ID = Convert.ToInt32(objarray[8].ToString());
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            contextKey = objarray[3].ToString();
            if (!string.IsNullOrEmpty(_advSrch))
                _service.ADVANCE_SEARCH = _advSrch;
            else
                _service.ADVANCE_SEARCH = string.Empty;

            if (objarray[9] != null)
                _service.DEPARTMENT_ID = Convert.ToInt32(objarray[9].ToString());
            if (objarray[10] != null)
                _service.DOC_DEPT_UINT_ID = objarray[10].ToString();

            _service.PAGE_NO = Convert.ToInt32(pageNum);
            _service.PAGE_SIZE = Convert.ToInt32(pageSize);
            _service.BILL_ID = Convert.ToInt32(bill_id);
            _service.EVENTFLAG = Convert.ToInt32(_eventFlag);
            _service.TARIFF_ID = Convert.ToInt32(tariff_id);
            _service.STATUS = srvpertariff;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            DataSet ds = servObj.GetAllOPServiceAuto(prefixText, contextKey, obj, _service, out _count);
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
        [ScriptMethod()]
        public List<object> NewGetAutoCompleteSErviceInfo(string prefixText, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string[] objarray = contextKey.Split(',');
            for (int i = 0; i < objarray.Length; i++)
            {
                string res = objarray[i].ToString().Trim();
                elements.Add(res);
            }
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            //Session.Remove("GenderID");
            contextKey = objarray[3].ToString();
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            //EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteSErviceInfo(prefixText, contextKey, obj);

            //return objBo;
            DataSet ds = servObj.GetAutoCompleteSErviceInfo(prefixText, contextKey, obj);
            MasterClass mobj = new MasterClass();
            List<object> items1 = mobj.ConvertDataSetToListObject(ds);

            return items1;

        }


        //[System.Web.Script.Services.ScriptMethod()]
        //[System.Web.Services.WebMethod(EnableSession = true)]
        //public RuleMasterColl Depends_Services(string _service_id, string umr_no)
        //{
        //    RuleMaster RM = new RuleMaster();
        //    RM.SERVICE_ID = _service_id;

        //    DBRuleMaster DBRM = new DBRuleMaster();
        //    CollectionBase cb = DBRM.GetAll_Service_Depends(RM, umr_no);

        //    if (cb != null && cb.Count > 0)
        //    {
        //        return (RuleMasterColl)cb;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}

        //[System.Web.Script.Services.ScriptMethod()]
        //[System.Web.Services.WebMethod(EnableSession = true)]
        //public RuleMasterColl Depends_Services_ip(string _service_id, string umr_no)
        //{
        //    RuleMaster RM = new RuleMaster();
        //    RM.SERVICE_ID = _service_id;

        //    DBRuleMaster DBRM = new DBRuleMaster();
        //    CollectionBase cb = DBRM.GetAll_Service_Depends_ip(RM, umr_no);

        //    if (cb != null && cb.Count > 0)
        //    {
        //        return (RuleMasterColl)cb;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}

        /// <summary>
        /// added by Swetha Reddy, in imr service entry, get services through autocompletion
        /// </summary>
        /// <param name="prefixText"></param>
        /// <param name="contextKey"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAllIPServiceAuto(string prefixText, string contextKey)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;
            string Emrgency_flag = string.Empty;
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", admnNo = string.Empty, srvpertariff = "N";
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                    tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "4";
                    patientClassid = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "4";
                    companyid = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";

                    if (str.Length > 9)
                    {
                        admnNo = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : string.Empty;
                    }
                    if (str.Length > 11)
                    {
                        srvpertariff = !string.IsNullOrEmpty(str[11].ToString()) ? str[11].ToString() : "N";
                    }
                    if (SessionHandler.FLAG1 == "ADMISSION")
                    {
                        flag = "ADMISSION";
                    }
                    else if (SessionHandler.FLAG1 == "IMRPOST")
                    {
                        flag = "IMRPOST";
                    }

                }
            }
            LookUpSearch obj = new LookUpSearch();
            obj.PREFIX_TEXT = prefixText;
            obj.COLUMN_NAME = "SERVICE_NAME";
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = !string.IsNullOrEmpty(ConTypeId) ? Convert.ToInt32(ConTypeId) : 0;
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = companyid;
            _service.SERVICE_TYPE_ID = !string.IsNullOrEmpty(ServiceTypeid) ? Convert.ToInt32(ServiceTypeid) : 0;
            _service.ADVANCE_SEARCH = string.Empty;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 10;
            _service.WARD_GROUP_ID = !string.IsNullOrEmpty(WardGrpId) ? Convert.ToInt32(WardGrpId) : 0;
            _service.FLAG = flag;
            _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
            _service.PATIENT_CLASS_ID = patientClassid;
            _service.ADMN_NO = admnNo;
            _service.STATUS = srvpertariff;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIPServiceAutoCompletion(obj, _service, out count);
            foreach (OSPListElement _element in objBo)
            {
                if (!string.IsNullOrEmpty(_element.Text))
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
            // Session.Remove("serviceGrpId");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetLookupService(string prefixText, string contextKey, string _advSrch)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;
            string Emrgency_flag = string.Empty;
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", admnNo = string.Empty;
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                // str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    if (contextKey != null)
                        Session["service_type_id"] = contextKey;

                    elements.Add(Session["service_type_id"]);
                    elements.Add(1);//elements.Add(Session["tariff_id"]);
                    elements.Add(1);//elements.Add(Session["patient_class_id"]);    
                    elements.Add(Session["WardGrpId"]);
                    elements.Add(Session["ConsTypeId"]);
                    elements.Add(Session["company_id"]);
                    elements.Add(Session["admnno"]);
                    elements.Add(Session["patientId"]);
                    //elements.Add(Session["doctrid"]);
                    elements.Add(string.Empty);//  Flag
                    elements.Add(Session["FLAG"]);
                    elements.Add(0);

                    if (SessionHandler.FLAG1 == "ADMISSION")
                    {
                        flag = "ADMISSION";
                    }
                    else if (SessionHandler.FLAG1 == "0")
                    {
                        flag = "IMRPOST";
                    }

                }
            }
            LookUpSearch obj = new LookUpSearch();
            obj.PREFIX_TEXT = prefixText;
            obj.COLUMN_NAME = "SERVICE_NAME";
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = !string.IsNullOrEmpty(ConTypeId) ? Convert.ToInt32(ConTypeId) : 0;
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = companyid;
            _service.SERVICE_TYPE_ID = !string.IsNullOrEmpty(ServiceTypeid) ? Convert.ToInt32(ServiceTypeid) : 0;
            _service.ADVANCE_SEARCH = _advSrch;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 10;
            _service.WARD_GROUP_ID = !string.IsNullOrEmpty(WardGrpId) ? Convert.ToInt32(WardGrpId) : 0;
            _service.FLAG = flag;
            _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
            _service.PATIENT_CLASS_ID = patientClassid;
            _service.ADMN_NO = admnNo;

            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIPServiceAutoCompletion(obj, _service, out count);
            //foreach (OSPListElement _element in objBo)
            //{
            //    if (!string.IsNullOrEmpty(_element.Text))
            //        items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            //}
            // return items.ToArray();
            if (objBo != null)
            {
                List<object> _lst = new List<object>();
                _lst.Add(objBo);
                _lst.Add(objBo.Count);
                return _lst;
            }
            else
                return null;
        }
        // Session.Remove("serviceGrpId");
        /* CollectionBase cbase = objdb.GetAutoComp_Equipment1(prefixText, contextKey);
         if (cbase != null)
         {
             List<object> _lst = new List<object>();
             _lst.Add(cbase);
             _lst.Add(cbase.Count);
             return _lst;
         }
         else
             return null;*/

        // }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAllImrServiceAuto(string prefixText, string contextKey)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;
            string Emrgency_flag = string.Empty;
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", admnNo = string.Empty;
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                    tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "4";
                    patientClassid = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "4";
                    companyid = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                    if (str.Length > 9)
                    {
                        admnNo = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : string.Empty;
                    }

                }
            }
            LookUpSearch obj = new LookUpSearch();
            obj.PREFIX_TEXT = prefixText;
            obj.COLUMN_NAME = "SERVICE_NAME";
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = !string.IsNullOrEmpty(ConTypeId) ? Convert.ToInt32(ConTypeId) : 0;
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = companyid;
            _service.SERVICE_TYPE_ID = !string.IsNullOrEmpty(ServiceTypeid) ? Convert.ToInt32(ServiceTypeid) : 0;
            _service.ADVANCE_SEARCH = string.Empty;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 10;
            _service.WARD_GROUP_ID = !string.IsNullOrEmpty(WardGrpId) ? Convert.ToInt32(WardGrpId) : 0;
            _service.FLAG = flag;
            _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
            _service.PATIENT_CLASS_ID = patientClassid;
            _service.ADMN_NO = admnNo;

            DBServices servObj = new DBServices();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllImrServiceAutoCompletion(obj, _service, out count);
            foreach (OSPListElement _element in objBo)
            {
                if (!string.IsNullOrEmpty(_element.Text))
                    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
            // Session.Remove("serviceGrpId");
        }
        /// <summary>
        /// added by Swetha Reddy, in imr service entry, get services through lookup 
        /// </summary>
        /// <param name="prefixText"></param>
        /// <param name="count"></param>
        /// <param name="contextKey"></param>
        /// <param name="_advSrch"></param>
        /// <param name="pageNum"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetAllIPServiceAutoLookup(string prefixText, string count, string contextKey, string _advSrch, string pageNum, string pageSize)
        {
            try
            {
                System.Collections.Generic.List<string> items = new List<string>();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                List<object> elements = new List<object>();
                int scount = 0;
                string flag = string.Empty;
                string Emrgency_flag = string.Empty;
                string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", admnNo = string.Empty;
                string[] str = new string[5];
                if (!string.IsNullOrEmpty(contextKey))
                {
                    str = contextKey.Split(',');
                    if (str.Length > 0)
                    {
                        ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                        WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                        ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                        flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                        Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                        GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                        tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "4";
                        patientClassid = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "4";
                        companyid = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                        admnNo = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : string.Empty;
                    }
                }

                LookUpSearch obj = new LookUpSearch();
                //obj.PreConditon = elements;
                obj.PREFIX_TEXT = prefixText;
                obj.COLUMN_NAME = "SERVICE_NAME";
                ServiceMaster _service = new ServiceMaster();
                _service.CONSULTATION_TYPE_ID = Convert.ToInt32(ConTypeId);
                _service.EMERGNCY_FLAG = Emrgency_flag;
                _service.GENDER_ID = GenderID;
                _service.COMPANY_ID = companyid;
                _service.SERVICE_TYPE_ID = Convert.ToInt32(ServiceTypeid);
                if (!string.IsNullOrEmpty(_advSrch))
                    _service.ADVANCE_SEARCH = _advSrch;
                else
                    _service.ADVANCE_SEARCH = string.Empty;
                _service.PAGE_NO = Convert.ToInt32(pageNum);
                _service.PAGE_SIZE = Convert.ToInt32(pageSize);
                _service.WARD_GROUP_ID = Convert.ToInt32(WardGrpId);
                _service.FLAG = flag;
                _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
                _service.PATIENT_CLASS_ID = patientClassid;
                _service.ADMN_NO = admnNo;



                EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
                EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIPServiceAutoCompletion(obj, _service, out scount);
                if (objBo != null)
                {
                    List<object> _lst = new List<object>();
                    _lst.Add(objBo);
                    _lst.Add(scount);
                    return _lst;
                }
                else
                    return null;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetAllIPImrServiceAutoLookup(string prefixText, string count, string contextKey, string _advSrch, string pageNum, string pageSize)
        {
            try
            {
                System.Collections.Generic.List<string> items = new List<string>();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                List<object> elements = new List<object>();
                int scount = 0;
                string flag = string.Empty;
                string Emrgency_flag = string.Empty;
                string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", admnNo = string.Empty;
                string[] str = new string[5];
                if (!string.IsNullOrEmpty(contextKey))
                {
                    str = contextKey.Split(',');
                    if (str.Length > 0)
                    {
                        ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                        WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                        ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                        flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                        Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                        GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                        tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "4";
                        patientClassid = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "4";
                        companyid = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                        admnNo = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : string.Empty;
                    }
                }

                LookUpSearch obj = new LookUpSearch();
                //obj.PreConditon = elements;
                obj.PREFIX_TEXT = prefixText;
                obj.COLUMN_NAME = "SERVICE_NAME";
                ServiceMaster _service = new ServiceMaster();
                _service.CONSULTATION_TYPE_ID = Convert.ToInt32(ConTypeId);
                _service.EMERGNCY_FLAG = Emrgency_flag;
                _service.GENDER_ID = GenderID;
                _service.COMPANY_ID = companyid;
                _service.SERVICE_TYPE_ID = Convert.ToInt32(ServiceTypeid);
                if (!string.IsNullOrEmpty(_advSrch))
                    _service.ADVANCE_SEARCH = _advSrch;
                else
                    _service.ADVANCE_SEARCH = string.Empty;
                _service.PAGE_NO = Convert.ToInt32(pageNum);
                _service.PAGE_SIZE = Convert.ToInt32(pageSize);
                _service.WARD_GROUP_ID = Convert.ToInt32(WardGrpId);
                _service.FLAG = flag;
                _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
                _service.PATIENT_CLASS_ID = patientClassid;
                _service.ADMN_NO = admnNo;
                DBServices servObj = new DBServices();
                EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllImrServiceAutoCompletion(obj, _service, out scount);
                if (objBo != null)
                {
                    List<object> _lst = new List<object>();
                    _lst.Add(objBo);
                    _lst.Add(scount);
                    return _lst;
                }
                else
                    return null;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public ServiceCollection GetAllIPServiceAutoLeftMenu(string prefixText, string count, string contextKey, string _advSrch, string pageNum, string pageSize)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            int scount = 0;
            string flag = string.Empty;
            string Emrgency_flag = string.Empty;
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", Admn_No = "", department_id = "", srvpertariff = "N";
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                    tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "4";
                    patientClassid = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "4";
                    companyid = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                    Admn_No = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : "0";
                    department_id = !string.IsNullOrEmpty(str[10].ToString()) ? str[10].ToString() : "0";
                    // srvpertariff = !string.IsNullOrEmpty(str[10].ToString()) ? str[10].ToString() : "0";
                }
            }

            LookUpSearch obj = new LookUpSearch();
            //obj.PreConditon = elements;
            obj.PREFIX_TEXT = prefixText;
            obj.COLUMN_NAME = "SERVICE_NAME";
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = Convert.ToInt32(ConTypeId);
            if (Admn_No != "0")
                _service.ADMN_NO = Admn_No;
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = companyid;
            _service.SERVICE_TYPE_ID = Convert.ToInt32(ServiceTypeid);
            _service.ADVANCE_SEARCH = string.Empty;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 10;
            _service.WARD_GROUP_ID = Convert.ToInt32(WardGrpId);
            _service.FLAG = flag;
            _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
            _service.PATIENT_CLASS_ID = patientClassid;
            _service.DEPARTMENT_ID = Convert.ToInt32(department_id);
            // _service.STATUS = srvpertariff;



            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIPServiceAutoCompletion(obj, _service, out scount);
            return objBo;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public ServiceCollection GetAllIPServiceAutoLeftMenu30(string prefixText, string count, string contextKey, string _advSrch, string pageNum, string pageSize)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            int scount = 0;
            string flag = string.Empty;
            string Emrgency_flag = string.Empty;
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", companyid = "0", patientClassid = "0", tariffid = "0", Admn_No = "", department_id = "", DoctorRole_Id = "0", srvpertariff = "N";
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                    tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "4";
                    patientClassid = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "4";
                    companyid = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                    Admn_No = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : "0";
                    department_id = !string.IsNullOrEmpty(str[10].ToString()) ? str[10].ToString() : "0";
                    if (str.Length > 11)
                    {
                        DoctorRole_Id = !string.IsNullOrEmpty(str[11].ToString()) ? str[11].ToString() : "0";
                    }
                    if (str.Length > 12)
                    {
                        srvpertariff = !string.IsNullOrEmpty(str[12].ToString()) ? str[12].ToString() : "N";
                    }

                }
            }

            LookUpSearch obj = new LookUpSearch();
            //obj.PreConditon = elements;
            obj.PREFIX_TEXT = prefixText;
            obj.COLUMN_NAME = "SERVICE_NAME";
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = Convert.ToInt32(ConTypeId);
            if (Admn_No != "0")
                _service.ADMN_NO = Admn_No;
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = companyid;
            _service.SERVICE_TYPE_ID = Convert.ToInt32(ServiceTypeid);
            _service.ADVANCE_SEARCH = string.Empty;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 30;
            _service.WARD_GROUP_ID = Convert.ToInt32(WardGrpId);
            _service.FLAG = flag;
            _service.TARIFF_ID = !string.IsNullOrEmpty(tariffid) ? Convert.ToInt32(tariffid) : 0; ;
            _service.PATIENT_CLASS_ID = patientClassid;
            _service.DEPARTMENT_ID = Convert.ToInt32(department_id);
            _service.DOCTORROLE_ID = DoctorRole_Id;
            _service.STATUS = srvpertariff;



            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIPServiceAutoCompletion(obj, _service, out scount);
            return objBo;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public ServiceCollection NewGetIPAutoCompleteServiceInfo(string prefixText, string contextKey)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;
            string Emrgency_flag = string.Empty, admnNo = string.Empty, patientID = "0", ref_letter_id = "0";
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", serviceid = "0", tariffid = "0", patient_class_id = "0", company_id = "0", umr_no = string.Empty;
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                    tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "1";
                    patient_class_id = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "1";
                    company_id = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                    serviceid = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : "0";
                    admnNo = !string.IsNullOrEmpty(str[10].ToString()) ? str[10].ToString() : "";
                    patientID = !string.IsNullOrEmpty(str[11].ToString()) ? str[11].ToString() : "0";
                    ref_letter_id = !string.IsNullOrEmpty(str[12].ToString()) ? str[12].ToString() : "0";
                    if (str.Length > 13)
                    {
                        umr_no = !string.IsNullOrEmpty(str[13].ToString()) ? str[13].ToString() : "0";
                    }
                    elements.Add(ServiceTypeid);
                    elements.Add(1);//elements.Add(Session["tariff_id"]);
                    elements.Add(1);//elements.Add(Session["patient_class_id"]);
                    elements.Add(WardGrpId);
                    elements.Add(ConTypeId);
                    elements.Add(Session["company_id"]);
                    elements.Add(string.Empty);
                    elements.Add(string.Empty);
                    elements.Add(flag);
                    elements.Add(Emrgency_flag);
                    elements.Add(GenderID);
                }
            }

            LookUpSearch obj = new LookUpSearch();
            //obj.PreConditon = elements;
            obj.COLUMN_NAME = "";
            obj.PREFIX_TEXT = prefixText;
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = Convert.ToInt32(ConTypeId);
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = company_id;
            _service.SERVICE_TYPE_ID = Convert.ToInt32(ServiceTypeid);
            _service.ADVANCE_SEARCH = string.Empty;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 10;
            _service.WARD_GROUP_ID = Convert.ToInt32(WardGrpId);
            _service.FLAG = flag;
            _service.TARIFF_ID = Convert.ToInt32(tariffid);
            _service.PATIENT_CLASS_ID = patient_class_id;
            _service.SERVICE_ID = Convert.ToInt32(serviceid);
            _service.ADMN_NO = admnNo;
            _service.PATIENT_ID = Convert.ToInt32(patientID);
            _service.REFERAL_LETTER_ID = Convert.ToInt32(ref_letter_id);
            _service.UMR_NO = umr_no;
            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIPServiceAutoInfo(obj, _service);
            //foreach (OSPListElement _element in objBo)
            //{
            //    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            //}
            //return items.ToArray();
            return objBo;
            // Session.Remove("serviceGrpId");
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public ServiceCollection NewGetIMRAutoCompleteServiceInfo(string prefixText, string contextKey)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;
            string Emrgency_flag = string.Empty, admnNo = string.Empty, patientID = "0", ref_letter_id = "0";
            string ServiceTypeid = "", WardGrpId = "", ConTypeId = "", GenderID = "4", serviceid = "0", tariffid = "0", patient_class_id = "0", company_id = "0", umr_no = string.Empty;
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    ServiceTypeid = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    WardGrpId = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                    ConTypeId = !string.IsNullOrEmpty(str[2].ToString()) ? str[2].ToString() : "0";
                    flag = !string.IsNullOrEmpty(str[3].ToString()) ? str[3].ToString() : string.Empty;
                    Emrgency_flag = !string.IsNullOrEmpty(str[4].ToString()) ? str[4].ToString() : string.Empty;
                    GenderID = !string.IsNullOrEmpty(str[5].ToString()) ? str[5].ToString() : "4";
                    tariffid = !string.IsNullOrEmpty(str[6].ToString()) ? str[6].ToString() : "1";
                    patient_class_id = !string.IsNullOrEmpty(str[7].ToString()) ? str[7].ToString() : "1";
                    company_id = !string.IsNullOrEmpty(str[8].ToString()) ? str[8].ToString() : "0";
                    serviceid = !string.IsNullOrEmpty(str[9].ToString()) ? str[9].ToString() : "0";
                    admnNo = !string.IsNullOrEmpty(str[10].ToString()) ? str[10].ToString() : "";
                    patientID = !string.IsNullOrEmpty(str[11].ToString()) ? str[11].ToString() : "0";
                    ref_letter_id = !string.IsNullOrEmpty(str[12].ToString()) ? str[12].ToString() : "0";
                    if (str.Length > 13)
                    {
                        umr_no = !string.IsNullOrEmpty(str[13].ToString()) ? str[13].ToString() : "0";
                    }
                    elements.Add(ServiceTypeid);
                    elements.Add(1);//elements.Add(Session["tariff_id"]);
                    elements.Add(1);//elements.Add(Session["patient_class_id"]);
                    elements.Add(WardGrpId);
                    elements.Add(ConTypeId);
                    elements.Add(Session["company_id"]);
                    elements.Add(string.Empty);
                    elements.Add(string.Empty);
                    elements.Add(flag);
                    elements.Add(Emrgency_flag);
                    elements.Add(GenderID);
                }
            }

            LookUpSearch obj = new LookUpSearch();
            //obj.PreConditon = elements;
            obj.COLUMN_NAME = "";
            obj.PREFIX_TEXT = prefixText;
            ServiceMaster _service = new ServiceMaster();
            _service.CONSULTATION_TYPE_ID = Convert.ToInt32(ConTypeId);
            _service.EMERGNCY_FLAG = Emrgency_flag;
            _service.GENDER_ID = GenderID;
            _service.COMPANY_ID = company_id;
            _service.SERVICE_TYPE_ID = Convert.ToInt32(ServiceTypeid);
            _service.ADVANCE_SEARCH = string.Empty;
            _service.PAGE_NO = 1;
            _service.PAGE_SIZE = 10;
            _service.WARD_GROUP_ID = Convert.ToInt32(WardGrpId);
            _service.FLAG = flag;
            _service.TARIFF_ID = Convert.ToInt32(tariffid);
            _service.PATIENT_CLASS_ID = patient_class_id;
            _service.SERVICE_ID = Convert.ToInt32(serviceid);
            _service.ADMN_NO = admnNo;
            _service.PATIENT_ID = Convert.ToInt32(patientID);
            _service.REFERAL_LETTER_ID = Convert.ToInt32(ref_letter_id);
            _service.UMR_NO = umr_no;
            DBServices servObj = new DBServices();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAllIMRServiceAutoInfo(obj, _service);
            //foreach (OSPListElement _element in objBo)
            //{
            //    items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            //}
            //return items.ToArray();
            return objBo;
            // Session.Remove("serviceGrpId");
        }
        #endregion

        [System.Web.Script.Services.ScriptMethod()]
        [WebMethod(EnableSession = true)]
        public CollectionBase gethealthcarddetails(string UMR_NO, string PAT_NAME)
        {
            int session_id = SessionHandler.DBSESSION_ID;
            PatientRegistrationCollection pcol = new PatientRegistrationCollection();
            EzHms.ModelEntity.PatientRegistration Dbgetservice = new EzHms.ModelEntity.PatientRegistration();

            EzHms.DataAccessObject.DBPatientRegistration DBpersonal = new EzHms.DataAccessObject.DBPatientRegistration();
             //= (PatientRegistrationCollection)DBpersonal.GetHealthcarddtls(UMR_NO, PAT_NAME, session_id);

            if (pcol != null && pcol.Count > 0)
            {
                return pcol;
            }
            else
            {
                return null;
            }

        }

        //[WebMethod(EnableSession = true)]
        //public NU_IND_COLLECTION GetCheckProfileNameServices(string _Profile_name, string _service_id)
        //{
        //    DBServicesIndent obj = new DBServicesIndent();
        //    NU_IND_COLLECTION res = (NU_IND_COLLECTION)obj.GetCheckProfileName(_Profile_name, _service_id, SessionHandler.DBSESSION_ID);
        //    return res;
        //}
        [System.Web.Script.Services.ScriptMethod()]
        [WebMethod(EnableSession = true)]
        public CollectionBase BindAdjestumentdataAmount(string umrno, int patientid, int flag, string type, int admn_id)
        {
            
                return null;
            

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase ConsentDtls(int serviceID, string umr_no, string flag)
        {
            DBServices dbsrv = new DBServices();
            return dbsrv.GetConsentDtls(serviceID, umr_no, flag);
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase pre_Define_Inst_Data()
        {
            DBServices dbsrv = new DBServices();
            return dbsrv.pre_Define_Inst_Data();

        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase template_data(string temp_id)
        {
            DBEventform obj = new DBEventform();
            EzHms.ModelEntity.Eventform mod = new EzHms.ModelEntity.Eventform();
            mod.EVENT_ID = Convert.ToInt32(temp_id);
            //CollectionBase cs = obj.ConsentTemplate_View_Edit(mod);
            return null;
        }

       
        #region ForDoctorPanel AutoCompletion
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteIPDoctorInfo(string prefixText, string contextKey)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            elements.Add(1);//elements.Add(Session["service_type_id"]);
            elements.Add(1);//elements.Add(Session["tariff_id"]);
            elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            elements.Add(Session["WardGrpId"]);
            elements.Add(1);//elements.Add(Session["ConsTypeId"]);
            elements.Add(Session["company_id"]);
            elements.Add(Session["admnno"]);
            elements.Add(Session["patientId"]);
            //elements.Add(Session["doctrid"]);
            elements.Add(string.Empty);//  Flag
            elements.Add(Session["FLAG"]);
            elements.Add(0);
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            obj.TOTAL_RECORDS = 0;
            if (prefixText == "")
                obj.ADVANCESEARCH = contextKey;
            else if (contextKey == "" || contextKey == null)
                obj.ADVANCESEARCH = "SERVICE_NAME LIKE '" + prefixText + "%'";
            else
                obj.ADVANCESEARCH = contextKey + " AND SERVICE_NAME LIKE '" + prefixText + "%'";


            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(null, null, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            return items.ToArray();
            // Session.Remove("serviceGrpId");
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public List<object> GetAutoCompleteIPServiceInfo1_Dctrpanel(string prefixText, string contextKey, string _advSrch)
        {
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            elements.Add(1);//elements.Add(Session["service_type_id"]);
            elements.Add(1);//elements.Add(Session["tariff_id"]);
            elements.Add(1);//elements.Add(Session["patient_class_id"]);    
            elements.Add(Session["WardGrpId"]);
            elements.Add(1);//elements.Add(Session["ConsTypeId"]);
            elements.Add(Session["company_id"]);
            elements.Add(Session["admnno"]);
            elements.Add(Session["patientId"]);
            //elements.Add(Session["doctrid"]);
            elements.Add(string.Empty);//  Flag
            elements.Add(Session["FLAG"]);
            elements.Add(0);
            LookUpSearch obj = new LookUpSearch();
            obj.PreConditon = elements;
            if (contextKey != "" && _advSrch != "")
            {
                obj.ADVANCESEARCH = "DEPARTMENT_ID = " + contextKey + " AND " + _advSrch;
            }
            else if (contextKey != "")
            {
                obj.ADVANCESEARCH = "DEPARTMENT_ID = " + contextKey;
            }
            else
            {
                obj.ADVANCESEARCH = _advSrch;
            }
            obj.TOTAL_RECORDS = 0;


            EzHms.BusinessObject.Services servObj = new EzHms.BusinessObject.Services();
            EzHms.ModelEntity.ServiceCollection objBo = (EzHms.ModelEntity.ServiceCollection)servObj.GetAutoCompleteIPServiceInfo(prefixText, null, obj);
            foreach (OSPListElement _element in objBo)
            {
                items.Add(AutoCompleteExtender.CreateAutoCompleteItem(_element.Text, serializer.Serialize(_element)));
            }
            if (objBo != null)
            {
                List<object> _lst = new List<object>();
                _lst.Add(objBo);
                _lst.Add(objBo.Count);
                return _lst;
            }
            else
                return null;
        }
        #endregion ForDoctorPanel AutoCompletion


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public CollectionBase GetDcotorOrgPct(int serviceID, int doctor_id, int srv_price_id)
        {
            serMasterBO = new ServiceMasterBO();
            return serMasterBO.GetDcotorOrgPct(serviceID, doctor_id, srv_price_id);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAllBillByDate(string prefixText, string contextKey)
        {
            int count = 0;
            System.Collections.Generic.List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            List<object> elements = new List<object>();
            string flag = string.Empty;

            string fromdt = "", todt = "";
            string[] str = new string[5];
            if (!string.IsNullOrEmpty(contextKey))
            {
                str = contextKey.Split(',');
                if (str.Length > 0)
                {
                    fromdt = !string.IsNullOrEmpty(str[0].ToString()) ? str[0].ToString() : "0";
                    todt = !string.IsNullOrEmpty(str[1].ToString()) ? str[1].ToString() : "0";
                }
            }

            DBServiceMaster db = new DBServiceMaster();
            DataSet ds = db.GetBillS(fromdt, todt, "BILL_NO", prefixText);
            List<string> items1 = new List<string>();
            DataTable dtp = ds.Tables[0];
            foreach (DataRow row in dtp.Rows)
            {
                var listp = new List<Dictionary<string, object>>();
                var dict = new Dictionary<string, object>();
                foreach (DataColumn col in dtp.Columns)
                {
                    dict[col.ColumnName] = row[col];
                }
                listp.Add(dict);
                items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["BILL_NO"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
            }
            return items1.ToArray();
        }


        public ServiceMasterCollection GetAllServiceMasterDetails_Paging(GridPaging gridPaging, out int total_records)
        {
            throw new NotImplementedException();
        }

        public ServiceMasterCollection GetAllServiceMasterDetails_Paging(int pNo, int pSize, out int total_records)
        {
            throw new NotImplementedException();
        }

        public CollectionBase GetAllServiceMaster_GridBind(GridPaging gpage, out int total_records)
        {
            throw new NotImplementedException();
        }

        public DataSet GetEnquiryDetailsWardWise(WardGroup wgroup)
        {
            throw new NotImplementedException();
        }

        public DataSet GetEnquiryDetailsWardWiseDetails(WardGroup wgroup)
        {
            throw new NotImplementedException();
        }

        public CollectionBase GetServiceLookUpByTypeId(LookUpSearch _lookup, out int records)
        {
            throw new NotImplementedException();
        }

        public string GetServiceid(int serviceid)
        {
            throw new NotImplementedException();
        }

        public ServiceMasterCollection GetServicesByIPServiceType(ServicePrice serMast, out int total_records)
        {
            throw new NotImplementedException();
        }

        public ServiceMasterCollection GetServicesByServiceType(string Type, string colName, string preFix, int pNo, int pSize, ServicePrice serMast, out int total_records)
        {
            throw new NotImplementedException();
        }

        public CollectionBase GetServicesByTariff(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            throw new NotImplementedException();
        }

        public ServiceMasterCollection Get_All_Tariff_Services(GridPaging _gridPaging, out int _total_records)
        {
            throw new NotImplementedException();
        }

        public ServiceMappingCollection Get_All_Tariff_Services1(int service_class, int service_type, GridPaging _gridPaging, out int _total_records)
        {
            throw new NotImplementedException();
        }

        public CollectionBase Get_All_Tariff_ServicesCopy(GridPaging _gridPaging, int _groupid, int _service_type_id, int _service_class_id, out int _total_records)
        {
            throw new NotImplementedException();
        }

        public CollectionBase Get_All_Tariff_Services_Cmp(LookUpSearch _lookupSearch, out int _tot_records)
        {
            throw new NotImplementedException();
        }

        public bool InsertTariffServiceDetailsXML(TARIFF_SERVICE _objModel)
        {
            throw new NotImplementedException();
        }

        public bool SaveServiceMasterdet(ServiceMappingCollection collection)
        {
            throw new NotImplementedException();
        }

        public string[] get_auto_wardGroups(string contextKey, string prefixText, int count)
        {
            throw new NotImplementedException();
        }

        public bool saveServiceMaster(ServiceMasterModel serMaster, out string servicecd)
        {
            throw new NotImplementedException();
        }

        public bool saveServiceTypeChange(SERVICE_TYPE_CHANGE srvtypechng)
        {
            throw new NotImplementedException();
        }

        public CollectionBase GetLookUpSearchData(LookUpSearch _lookUPSearch, out int _total_records)
        {
            throw new NotImplementedException();
        }
    }

}


