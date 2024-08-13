using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using AutoGenerateBO = EzHms.BusinessObject.AutoGenerateCDBO;




namespace EzHms.Services
{
    /// <summary>
    /// Summary description for AutoGenerateCD
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class AutoGenerateCD : System.Web.Services.WebService, EzHms.Abstract.IAutoGenerateCD
    {
        AutoGenerateBO autBo;
        public AutoGenerateCD()
        {

            //Uncomment the following line if using designed components 
            //InitializeComponent(); 
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


        #region IAutoGenerateCD Members
        [WebMethod]
        public string GetAutoGenerateCD(string tableName)
        {
            autBo = new AutoGenerateBO();
            return autBo.GetAutoGenerateCD(tableName);
        }

        #endregion


        [WebMethod]
        public string GetAntiBioticsAutoCD(EzHms.ModelEntity.AntiBioticsAutoCode _anitbioticsautocode, string code)
        {
            autBo = new AutoGenerateBO();
            return autBo.GetAnitBioticsAutoCD(_anitbioticsautocode, code);
        }



        #region IAutoGenerateCD Members

       

        string EzHms.Abstract.IAutoGenerateCD.GetAutoGenerateCD(string tableName)
        {
            autBo = new AutoGenerateBO();
            return autBo.GetAutoGenerateCD(tableName);
        }


        string EzHms.Abstract.IAutoGenerateCD.GetAutoReferalSourceNumber(string tableName)
        {
            autBo = new AutoGenerateBO();
            return autBo.GetAutoReferalSourceNumber(tableName);
        }

        #endregion
    }
}

