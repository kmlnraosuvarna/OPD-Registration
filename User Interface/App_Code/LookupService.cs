using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using System.Web.Script.Services;
using System.Collections.Generic;
using EzHms.BusinessObject;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using EzHms.Abstract;
using System.Data;

/// <summary>
/// Summary description for LookupService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class LookupService : System.Web.Services.WebService
{

    CollectionBase _cBase; int _total_records = 0;
    public LookupService()
    {
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    [WebMethod(EnableSession = true)]
    [ScriptMethod(UseHttpGet = false)]
    public List<object> GetLookUpSearchData(string lookupName, string cName, string preFix, string advSearch, string PreCondition, int pNumber, int pSize, string defaultLoad, string sortOrder, string eventFlag, string filtercreteria)
    {
        #region Assign values to Properties

        EzHms.ModelEntity.LookUpSearch _lookUPSearch = new LookUpSearch();
        _lookUPSearch.PAGE_SIZE = pSize;
        _lookUPSearch.CURRENT_PAGE = pNumber;
        _lookUPSearch.COLUMN_NAME = cName;
        _lookUPSearch.PREFIX_TEXT = preFix.Trim();
        _lookUPSearch.EVENTFLAG = Convert.ToInt32(eventFlag);
        _lookUPSearch.REPORTFILTERCRETERIA = filtercreteria;
        #region Advance Search
        _lookUPSearch.ADVANCESEARCH = advSearch;
        if (_lookUPSearch.ADVANCESEARCH == "adv Search") _lookUPSearch.ADVANCESEARCH = string.Empty;
        _lookUPSearch.SORTORDER = sortOrder;
        #endregion

        lookupName = lookupName.ToUpper();
        #region PreCondition
        List<object> _flag = new List<object>();
        string _preC = PreCondition.Trim();

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
        List<object> lst = new List<object>();
        #endregion
        #endregion
        #region Calling Method
        if (defaultLoad == "N")
        {
            _cBase = null;
            _total_records = 0;
        }
        else
        {

            //if (lookupName == "DOCTOR_NEW")
            //{
            //    DBPatientRegistration obje = new DBPatientRegistration();


            //        _lookUPSearch.CMO_DOCTOR = "DOCTOR_NEW";
            //        _lookUPSearch.PreConditon = _flag;
            //        lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

            //    return lst;
            //}
            //if (lookupName == "REFERALS_NEW")
            //{
            //    DBPatientRegistration obje = new DBPatientRegistration();


            //        _lookUPSearch.PreConditon = _flag;
            //        _lookUPSearch.CMO_DOCTOR = "REFERALS_NEW";
            //        lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

            //    return lst;
            //}
            //if (lookupName == "PASDIAGNOSIS_NEW")
            //{
            //    DBPatientRegistration obje = new DBPatientRegistration();


            //    _lookUPSearch.PreConditon = _flag;
            //    _lookUPSearch.CMO_DOCTOR = "PASDIAGNOSIS_NEW";
            //    lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

            //    return lst;
            //}
            //if (lookupName == "REFERAL_SRC_NEW")
            //{
            //    DBPatientRegistration obje = new DBPatientRegistration();


            //        _lookUPSearch.PreConditon = _flag;
            //        _lookUPSearch.CMO_DOCTOR = "REFERAL_SRC_NEW";
            //        lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

            //    return lst;
            //}
            //if (lookupName == "REFERAL_TO_NEW")
            //{
            //    DBPatientRegistration obje = new DBPatientRegistration();


            //    _lookUPSearch.PreConditon = _flag;
            //    _lookUPSearch.CMO_DOCTOR = "REFERAL_TO_NEW";
            //    lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

            //    return lst;
            //}
            //if (lookupName == "AREA_NEW_NEW")
            //{
            //    DBPatientRegistration obje = new DBPatientRegistration();


            //    _lookUPSearch.PreConditon = _flag;
            //    _lookUPSearch.CMO_DOCTOR = "AREA_NEW_NEW";

            //    lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

            //    return lst;
            //}

            if (lookupName == "EMPLOYER_OPD_NEW" || lookupName == "EMPLOYER_OPD_CMP_NEW" || lookupName == "AUTHORIZATION_NEW1" || lookupName == "AREA_NEW_NEW"
                || lookupName == "REFERAL_TO_NEW" || lookupName == "REFERAL_SRC_NEW" || lookupName == "PASDIAGNOSIS_NEW" || lookupName == "REFERALS_NEW"
                || lookupName == "DOCTOR_NEW" || lookupName == "AUTHORIZATIONBYTRANID_NEW" || lookupName == "APPOINTMENTSREG_NEW1")
            {
                DBPatientRegistration obje = new DBPatientRegistration();


                _lookUPSearch.PreConditon = _flag;
                _lookUPSearch.CMO_DOCTOR = lookupName;

                lst = obje.GetLookUpRSearchData(_lookUPSearch, out _total_records);

                return lst;
            }
            else if (lookupName == "HEALTH_CARD")
            {

                DBHealthCarddetails OBJ = new DBHealthCarddetails();
                _cBase = OBJ.Card_type_Lookup(_lookUPSearch, out _total_records);
                List<object> _lst = new List<object>();
                _lst.Add(_cBase);
                _lst.Add(_total_records);
                return _lst;
            }
            else if (lookupName == "HEALTH_CARD_NO")
            {
                int hc_type_id = 0;
                for (int i = 0; i < _flag.Count; i++)
                {
                    if (!string.IsNullOrEmpty(_flag[0].ToString()))
                    {
                        hc_type_id = Convert.ToInt32(_flag[0].ToString());
                    }
                }
                EzHms.DataAccessObject.DBHealthCarddetails objdb = new DBHealthCarddetails();
                _cBase = objdb.HealthCard_no_based_onHc_type(hc_type_id, _lookUPSearch, out _total_records);
                List<object> _lst = new List<object>();
                _lst.Add(_cBase);
                _lst.Add(_total_records);
                return _lst;
            }
            else if (lookupName == "COMPANY")
            {
                DBPatientRegistration obje = new DBPatientRegistration();
                List<object> element = new List<object>();
                for (int i = 0; i < _flag.Count; i++)
                {
                    string res = _flag[i].ToString().Trim();
                    element.Add(res);
                }

                _lookUPSearch.PreConditon = element;
                _cBase = obje.GetLookUPSearchData1(_lookUPSearch, out _total_records);
                List<object> _lst = new List<object>();
                _lst.Add(_cBase);
                _lst.Add(_total_records);
                return _lst;
            }
            else if (lookupName == "PRE_REGISTRATION")
            {
                DBPatientRegistration obje = new DBPatientRegistration();
                _cBase = obje.GetLookUPSearch_PReregistrationData(_lookUPSearch, out _total_records);
                List<object> _lst = new List<object>();
                _lst.Add(_cBase);
                _lst.Add(_total_records);
                return _lst;
            }

            if (lookupName == "EMPLOYER")
            {
                List<object> element = new List<object>();
                for (int i = 0; i < _flag.Count; i++)
                {
                    string res = _flag[i].ToString().Trim();
                    element.Add(res);
                }
                _lookUPSearch.PreConditon = element;
                _cBase = PatientRegistrationBO.Get_Employers(_lookUPSearch, out _total_records);
                _total_records = _cBase != null && _cBase.Count > 0 ? ((PatientRegistrationCollection)_cBase).GetListEmp(0).NoOfRecords : 0;
                List<object> _lst = new List<object>();
                _lst.Add(_cBase);
                _lst.Add(_total_records);
                return _lst;
            }
            if (lookupName == "REFERALLETTERS")
            {
                List<object> element = new List<object>();
                for (int i = 0; i < _flag.Count - 1; i++)
                {
                    string res = _flag[i].ToString().Trim();
                    if (res == "UMRNO")
                        res = "UMR_NO";
                    element.Add(res);
                }
                _lookUPSearch.PreConditon = element;
                DBPatientRegistration RfltEntryBO = new DBPatientRegistration();
                _cBase = RfltEntryBO.Get_Referal_Letter(_lookUPSearch, out _total_records);
                List<object> _lst = new List<object>();
                _lst.Add(_cBase);
                _lst.Add(_total_records);
                return _lst;
            }
            if (lookupName == "NEW_UMR")
            {
                DBPatientRegistration obje = new DBPatientRegistration();
                List<object> element = new List<object>();
                for (int i = 0; i < _flag.Count; i++)
                {
                    string res = _flag[i].ToString().Trim();
                    element.Add(res);
                }
                _lookUPSearch.PreConditon = element;
                _lookUPSearch.EVENTFLAG = 1;
                if (_lookUPSearch.PreConditon != null)
                {
                    if (_lookUPSearch.PreConditon.Count > 0)
                    {
                        _lookUPSearch.FLAG = _lookUPSearch.PreConditon[0].ToString();
                        if (_lookUPSearch.PreConditon[1].ToString() != "")
                            _lookUPSearch.REC_TYPE_ID = Convert.ToInt32(_lookUPSearch.PreConditon[1].ToString());
                    }
                }
                int count = 0;
                DBPatientRegistration obj = new DBPatientRegistration();
                lst = obj.GetAll_UMRPatients_Lookup(_lookUPSearch, out _total_records);
                return lst;
            }

            if (lookupName == "EMPLOYEE")
            {
                DBPatientRegistration dbemp = new DBPatientRegistration();
                {
                    if (_flag.Count > 0)
                    {
                        _lookUPSearch.PreConditon = _flag;
                        string flag = string.Empty;
                        if (_flag.Count > 0)
                        {
                            if (_flag[0].ToString() == "AUTH")
                            { flag = "AUTH"; }
                        }
                        _cBase = dbemp.Get_Employee_Search(_lookUPSearch, out _total_records, flag);
                        if (_cBase.Count > 0)
                        {
                            _total_records = ((PatientRegistrationCollection)_cBase).GetListp(0).NoOfRecords;
                        }
                        else
                        {
                            _total_records = 0;
                        }
                    }
                    else
                    {
                        _lookUPSearch.PreConditon = _flag;
                        string flag = string.Empty;
                        _cBase = dbemp.Get_Employee_Search(_lookUPSearch, out _total_records, flag);
                        if (_cBase.Count > 0)
                        {
                            _total_records = ((PatientRegistrationCollection)_cBase).GetListp(0).NoOfRecords;
                        }
                        else
                        {
                            _total_records = 0;
                        }
                    }
                    List<object> _lst = new List<object>();
                    _lst.Add(_cBase);
                    _lst.Add(_total_records);
                    return _lst;

                }

            }



            return lst;

        }
        return lst;
        #endregion
    }


    #region CHANGE THEME
    [WebMethod(EnableSession = true)]
    public string ChangeTheme(string _color)
    {
        return null;
    }
    #endregion
}

