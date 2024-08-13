using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using EzHms.DataAccessObject;
using EzHms.ModelEntity;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using AjaxControlToolkit;
using System.Collections.Generic;
using EzHms.Abstract;
using EzHms.BusinessObject;


/// <summary>
/// Summary description for LookupWebservice
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
public class LookupWebservice : System.Web.Services.WebService,ILookupconfig {

    public LookupWebservice () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }

    [WebMethod(EnableSession = true)]
    public bool SaveLookup(LookupconfigMaster obj)
    {
        LookupconfigBO objbo = new LookupconfigBO();
        return objbo.SaveLookup(obj);
    }

    [WebMethod(EnableSession = true)]
    public CollectionBase GetLookupDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records, int _lookup_id)
    {
        LookupconfigBO objbo = new LookupconfigBO();
        return objbo.GetLookupDetails(_objpag, out _total_records, _lookup_id);

    }


}

