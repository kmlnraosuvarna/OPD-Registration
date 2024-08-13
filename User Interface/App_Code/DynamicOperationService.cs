using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using System.Web.Script.Serialization;
using EzHms.Abstract;
using EzHms.BusinessObject;
using EzHms.DataAccessObject;
using EzHms.ModelEntity;
using AjaxControlToolkit;
using System.Collections;
using System.Data;
using Microsoft.Practices.EnterpriseLibrary.Caching;
using Microsoft.Practices.EnterpriseLibrary.Caching.Expirations;
using Newtonsoft.Json;

/// <summary>
/// Summary description for DynamicOperationService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class DynamicOperationService : System.Web.Services.WebService, IDynamicOperation
{

    public DynamicOperationService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }


    #region IDynamicOperation Members
    [WebMethod]
    public DataSet Dynamicdataset(Dynamicoperaion _objdy)
    {
        
        return null;
    }

    #endregion
    [WebMethod(EnableSession = true)]
    public string GetDocumentsByUser2(string userId, string sesssionid)
    {
        return null;
    }
    private ICacheManager _pOptionCache = null;

    [WebMethod(EnableSession = true)]
    public string GetDocumentsByUser1()
    {
        return null;
    }
    private void Add_Data_ToCache(string cacheManagerName, DataTable _valueAddToCache)
    {
        _pOptionCache.Add(cacheManagerName, _valueAddToCache, CacheItemPriority.Normal, null, new SlidingTime(TimeSpan.FromMinutes(20)));

    }
    //public List<object> GetDocumentsByUser1(string userId, string sesssionid)
    //{
    //    return null;
    //}
    #region IDynamicOperation Members
    [WebMethod]
    public bool DynamicExecuteNonquery(Dynamicoperaion _objdy)
    {
        return false;
    }
    [WebMethod]
    public object DynamicExecutescar(Dynamicoperaion _objdy)
    {
        return null;
    }

    #endregion

    //#region IDynamicOperation Members

    //public CollectionBase DynamicCollection_NEW(Dynamicoperaion _objdy)
    //{
    //    DynamicOperationBO _objBO = new DynamicOperationBO();
    //    return _objBO.DynamicCollection_NEW(_objdy);
    //}

    //#endregion
}

