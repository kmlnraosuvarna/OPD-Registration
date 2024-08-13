using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Web.Script.Services;
using System.Web.Script.Serialization;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using EzHms.BusinessObject;
using System.Collections;
using AjaxControlToolkit;

namespace EzHms.Services
{
    /// <summary>
    /// Summary description for LookupAutoService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    [System.Web.Script.Services.ScriptService]
    public class LookupAutoService : System.Web.Services.WebService
    {
        MasterClass masobj = new MasterClass();
        EzHms.ModelEntity.LookUpSearch _lookUPSearch = new LookUpSearch();
        public LookupAutoService()
        {

            //Uncomment the following line if using designed components 
            //InitializeComponent(); 
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetLookUpAutoSearchData(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            List<object> _flag = new List<object>();
            string _preC = precondition.Trim();
            if (_preC != string.Empty && _preC.Split('^').Length > 0)
            {
                for (int flg = 0; flg < _preC.Split('^').Length; flg++)
                {
                    if (_preC.Split('^')[flg].Trim() != null)
                    {
                        _flag.Add(_preC.Split('^')[flg].Trim());
                    }
                }
            }
            else if (_preC != string.Empty)
            {
                _flag.Add(_preC);
            }
            LookUpSearch obj = new LookUpSearch();
            List<object> element = new List<object>();
            for (int i = 0; i < _flag.Count; i++)
            {
                string res = _flag[i].ToString().Trim();
                element.Add(res);
            }
            obj.PreConditon = element;
            int count = 0;
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            obj.PREFIX_TEXT = prefixText;
            obj.PAGE_SIZE = 10;
            obj.CURRENT_PAGE = 1;
            obj.EVENTFLAG = 1;
            if (lookupName.ToUpper() == "DOCTOR_NEW")
            {
                obj.CMO_DOCTOR = "DISPLAY_NAME";
            }
            if (lookupName.ToUpper() == "REFERALS_NEW")
            {
                obj.COLUMN_NAME = "REFERAL_NAME";
            }
            if (lookupName.ToUpper() == "REFERAL_SRC_NEW")
            {
                obj.COLUMN_NAME = "REFERAL_CATEGORY_NAME";
            }
            if (lookupName.ToUpper() == "REFERAL_TO_NEW")
            {
                obj.COLUMN_NAME = "REFERAL_NAME";
            }
            if (lookupName.ToUpper() == "AREA_NEW_NEW")
            {
                obj.COLUMN_NAME = "AREA_NAME";
            }
            if (lookupName.ToUpper() == "NEW_UMR")
            {
                obj.COLUMN_NAME = "UMR_NO";
            }
            if (lookupName.ToUpper() == "REFERALLETTERS")
            {
                obj.COLUMN_NAME = "REFERAL_LETTER_NO";
            }
         
            
            
            


            obj.ADMN_NO = prefixText;
            if (obj.PreConditon != null)
            {
                if (obj.PreConditon.Count > 0)
                {
                    if (obj.PreConditon.Count > 1)
                    {
                        obj.FLAG = obj.PreConditon[1].ToString();
                    }
                    if (obj.PreConditon[0].ToString() != "")
                        obj.REC_TYPE_ID = Convert.ToInt32(obj.PreConditon[0].ToString());
                }
                else obj.REC_TYPE_ID = 1;
            }
            var sp_name = string.Empty;
            DBPatientRegistration objAutoComplete = new DBPatientRegistration();
            DataSet ds = new DataSet();
            if (lookupName.ToUpper() == "DOCTOR_NEW")
            {
                sp_name = "PR_GETALL_DOCTORS";
                obj.CMO_DOCTOR = "DOCTOR_NEW";
            }
            if (lookupName.ToUpper() == "REFERALS_NEW")
            {
                sp_name = "PR_GETALL_LOOKUP_REFERALS";
                obj.CMO_DOCTOR = "REFERALS_NEW";
            }
            if (lookupName.ToUpper() == "REFERAL_SRC_NEW")
            {
                sp_name = "PR_GET_REFERAL_CATEGORY_SOURCE_DTLS";
                obj.CMO_DOCTOR = "REFERAL_SRC_NEW";
            }
            if (lookupName.ToUpper() == "REFERAL_TO_NEW")
            {
                sp_name = "PR_GETALL_REFERED_TO_DTLS";
                obj.CMO_DOCTOR = "REFERAL_TO_NEW";
            }
            if (lookupName.ToUpper() == "AREA_NEW_NEW")
            {
                sp_name = "PR_GET_CSC_DETAILS";
                obj.CMO_DOCTOR = "AREA_NEW_NEW";
            }
            if (lookupName.ToUpper() == "NEW_UMR")
            {
                sp_name = "PR_GETALL_PATIENT";
                obj.CMO_DOCTOR = "NEW_UMR";
            }
            if (lookupName.ToUpper() == "REFERALLETTERS")
            {
                sp_name = "PR_GETALL_REFERAL_LETTER";
                obj.CMO_DOCTOR = "REFERALLETTERS";
            }

            





            ds = objAutoComplete.Get_Dynamic_AutoCompletion(obj, out count, sp_name);
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
                if (lookupName.ToUpper() == "DOCTOR_NEW")
                {


                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["DISPLAY_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "REFERALS_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "REFERAL_SRC_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_CATEGORY_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "REFERAL_TO_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "AREA_NEW_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["AREA_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "NEW_UMR")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["UMR_NO"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                    if (lookupName.ToUpper() == "REFERALLETTERS")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_LETTER_NO"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                 
            }
            return items1.ToArray();
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] Get_IpPatients_Auto_New(string prefixText, string contextKey, string precondition)
        {
            return null;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] Get_IpPatients_Auto_umr_New(string prefixText, string contextKey, string precondition)
        {
            return null;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_Refferal(string contextKey, string prefixText, string precondition)
        {
            return null;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteDPServiceMaster(string prefixText, string contextKey)
        {
            string filtercreteria = "";

            return null;

        }



        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServicesOpbilling(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceMaster(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoCompleteServiceMasterorg(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_ReferalDetails(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_ServiceGroups(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] Getautocomp_Servicesubgroups(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;

        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComplete_Dept(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }

        [ScriptMethod()]
        [WebMethod(EnableSession = true)]
        public string[] GetAutoComp_CheckAuthorization(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_Authorisation(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;

        }

        [ScriptMethod()]
        [WebMethod(EnableSession = true)]
        public string[] GetAutoComp_Authorisation_ByTranID(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] DP_PF_HEAD_LOOKUP(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {

            return null;

        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] Getautocompservicegroup(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetautoUsersOnly(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {

            return null;


        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_Employer(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] SearchReferalsDet(string lookupName, string prefixText, int count, string contextKey, string precondition, string filtercreteria)
        {

            return null;

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_DoctorTobeContract(string prefixText, string contextKey, string precondition)
        {
            return null;

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_DoctorStatementProcessed(string lookupName, string prefixText, string contextKey, string precondition)
        {
            return null;

        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComp_DoctorShareProcessed(string prefixText, string contextKey, string precondition)
        {
            return null;

        }


        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetAutoComplete_Receipt(string lookupName, string prefixText, string contextKey, string precondition, string filtercreteria)
        {
            return null;




        }
        [WebMethod(EnableSession = true)]
        [ScriptMethod()]
        public string[] GetLookUpAutoSearchDataauto(string prefixText, string contextKey, string precondition, string lookupName)
        {
            List<object> _flag = new List<object>();
            string _preC = precondition.Trim();
            if (_preC != string.Empty && _preC.Split('^').Length > 0)
            {
                for (int flg = 0; flg < _preC.Split('^').Length; flg++)
                {
                    if (_preC.Split('^')[flg].Trim() != null)
                    {
                        _flag.Add(_preC.Split('^')[flg].Trim());
                    }
                }
            }
            else if (_preC != string.Empty)
            {
                _flag.Add(_preC);
            }
            LookUpSearch obj = new LookUpSearch();
            List<object> element = new List<object>();
            for (int i = 0; i < _flag.Count; i++)
            {
                string res = _flag[i].ToString().Trim();
                element.Add(res);
            }
            obj.PreConditon = element;
            int count = 0;
            List<string> items = new List<string>();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            obj.PREFIX_TEXT = prefixText;
            obj.PAGE_SIZE = 10;
            obj.CURRENT_PAGE = 1;
            obj.EVENTFLAG = 1;
            if (lookupName.ToUpper() == "DOCTOR_NEW")
            {
                obj.COLUMN_NAME = "DISPLAY_NAME";
            }
            if (lookupName.ToUpper() == "PASDIAGNOSIS_NEW")
            {
                obj.COLUMN_NAME = "DIAGNOSIS_NAME";
            }
            if (lookupName.ToUpper() == "REFERALS_NEW")
            {
                obj.COLUMN_NAME = "REFERAL_NAME";
            }
            if (lookupName.ToUpper() == "REFERAL_SRC_NEW")
            {
                obj.COLUMN_NAME = "REFERAL_CATEGORY_NAME";
                
            }
            if (lookupName.ToUpper() == "REFERAL_TO_NEW")
            {
                obj.COLUMN_NAME = "REFERAL_NAME";
            }
            if (lookupName.ToUpper() == "AREA_NEW_NEW")
            {
                obj.COLUMN_NAME = "AREA_NAME";
            }
            if (lookupName.ToUpper() == "NEW_UMR")
            {
                obj.COLUMN_NAME = "UMR_NO";
            }
            if (lookupName.ToUpper() == "AUTHORIZATION_NEW1" )
            {
                obj.COLUMN_NAME = "AUTH_NAME";
            }
            if (lookupName.ToUpper() == "AUTHORIZATIONBYTRANID_NEW") { obj.COLUMN_NAME = "AUTH_NAME"; }
            if (lookupName.ToUpper() == "EMPLOYER_OPD_NEW" || lookupName.ToUpper() == "EMPLOYER_OPD_CMP_NEW")
            {
                obj.COLUMN_NAME = "COMPANY_NAME";
            }

            obj.ADMN_NO = prefixText;
            if (lookupName.ToUpper() != "EMPLOYER_OPD_NEW" && lookupName.ToUpper() != "EMPLOYER_OPD_CMP_NEW" && lookupName.ToUpper() != "AUTHORIZATION_NEW1" && lookupName.ToUpper() != "AUTHORIZATIONBYTRANID_NEW")
            {
                if (obj.PreConditon != null)
                {
                    if (obj.PreConditon.Count > 0)
                    {
                        if (obj.PreConditon.Count > 1)
                        {
                            obj.FLAG = obj.PreConditon[1].ToString();
                        }
                        if (obj.PreConditon[0].ToString() != "")
                            obj.REC_TYPE_ID = Convert.ToInt32(obj.PreConditon[0].ToString());
                    }
                    else obj.REC_TYPE_ID = 1;
                }
            }
            var sp_name = string.Empty;
            DBPatientRegistration objAutoComplete = new DBPatientRegistration();
            DataSet ds = new DataSet();
            if (lookupName.ToUpper() == "DOCTOR_NEW")
            {
                sp_name = "PR_GETALL_DOCTORS";
                obj.CMO_DOCTOR = "DOCTOR_NEW";
            }
            if (lookupName.ToUpper() == "PASDIAGNOSIS_NEW")
            {
                sp_name = "PR_GETALL_DIAGNOSIS_LOOKUP";
                obj.CMO_DOCTOR = "PASDIAGNOSIS_NEW";
            }
            if (lookupName.ToUpper() == "REFERALS_NEW")
            {
                sp_name = "PR_GETALL_LOOKUP_REFERALS";
                obj.CMO_DOCTOR = "REFERALS_NEW";
            }
            if (lookupName.ToUpper() == "REFERAL_SRC_NEW")
            {
                sp_name = "PR_GET_REFERAL_CATEGORY_SOURCE_DTLS";
                obj.CMO_DOCTOR = "REFERAL_SRC_NEW";
            }
            if (lookupName.ToUpper() == "REFERAL_TO_NEW")
            {
                sp_name = "PR_GETALL_REFERED_TO_DTLS";
                obj.CMO_DOCTOR = "REFERAL_TO_NEW";
            }
            if (lookupName.ToUpper() == "AREA_NEW_NEW")
            {
                sp_name = "PR_GET_CSC_DETAILS";
                obj.CMO_DOCTOR = "AREA_NEW_NEW";
            }
            if (lookupName.ToUpper() == "NEW_UMR")
            {
                sp_name = "PR_GET_REGISTRATION_AUTO_COMP";
                obj.CMO_DOCTOR = "NEW_UMR";
            }

            if (lookupName.ToUpper() == "AUTHORIZATION_NEW1")
            {
                sp_name = "PR_GET_LOOKUP_AUTH";
                obj.CMO_DOCTOR = "AUTHORIZATION_NEW1";
            }
            if (lookupName.ToUpper() == "AUTHORIZATIONBYTRANID_NEW")
            {
                sp_name = "PR_GET_LOOKUP_AUTH";
                obj.CMO_DOCTOR = "AUTHORIZATIONBYTRANID_NEW";
            }
            if (lookupName.ToUpper() == "EMPLOYER_OPD_NEW")
            {
                sp_name = "PR_GETALL_EMPLOYERS_OPD";
                obj.CMO_DOCTOR = "EMPLOYER_OPD_NEW";
            }
            if (lookupName.ToUpper() == "EMPLOYER_OPD_CMP_NEW")
            {
                sp_name = "PR_GETALL_EMPLOYERS_OPD_CMP";
                obj.CMO_DOCTOR = "EMPLOYER_OPD_CMP_NEW";
            }




            ds = objAutoComplete.Get_Dynamic_AutoCompletion(obj, out count, sp_name);
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
                if (lookupName.ToUpper() == "DOCTOR_NEW")
                {

                    
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["DISPLAY_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "REFERALS_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "REFERAL_SRC_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_CATEGORY_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "REFERAL_TO_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["REFERAL_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "AREA_NEW_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["AREA_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "NEW_UMR")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["UMR_NO"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));

                }
                if (lookupName.ToUpper() == "PASDIAGNOSIS_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["DIAGNOSIS_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));

                }
                if (lookupName.ToUpper() == "AUTHORIZATION_NEW1")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["AUTH_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "AUTHORIZATIONBYTRANID_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["AUTH_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "EMPLOYER_OPD_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["COMPANY_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
                if (lookupName.ToUpper() == "EMPLOYER_OPD_CMP_NEW")
                {
                    items1.Add(AutoCompleteExtender.CreateAutoCompleteItem(row["COMPANY_NAME"].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
                }
            }
            return items1.ToArray();
        }

    }


}