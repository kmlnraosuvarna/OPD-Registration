using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using Microsoft.Practices.EnterpriseLibrary.Logging;

namespace EzHms.ModelEntity
{
    public class ErrorLoger
    {
        public static void InsertErrorLogger(Exception ex,int eventID,int priority)
        {
            LogEntry exEntry = new LogEntry();
            exEntry.EventId = eventID;
            exEntry.Message = ex.Message;
            exEntry.Priority = priority;
            exEntry.Message += ex.Source;

            exEntry.Severity = System.Diagnostics.TraceEventType.Error;
            exEntry.TimeStamp = System.DateTime.Now;
            if(System.Web.HttpContext.Current.Session["DBSessionID"]!=null)
            exEntry.ExtendedProperties.Add("*SESSION ID", System.Web.HttpContext.Current.Session["DBSessionID"].ToString());
            if (System.Web.HttpContext.Current.Session["UserName"] != null)
            exEntry.ExtendedProperties.Add("#USER NAME", System.Web.HttpContext.Current.Session["UserName"].ToString());
            if (System.Web.HttpContext.Current.Session["location"] != null)
            exEntry.ExtendedProperties.Add("#LOCATION", System.Web.HttpContext.Current.Session["location"].ToString());
            exEntry.ExtendedProperties.Add("#BROWSER", System.Web.HttpContext.Current.Request.Browser.Browser + " " + System.Web.HttpContext.Current.Request.Browser.Version);
            exEntry.ExtendedProperties.Add("#PAGE URL", System.Web.HttpContext.Current.Request.Url);
            exEntry.ExtendedProperties.Add("#PAGE PATH", System.Web.HttpContext.Current.Request.Path);
            exEntry.ExtendedProperties.Add("#PHYSICAL PAGE PATH", System.Web.HttpContext.Current.Request.PhysicalPath);
            exEntry.ExtendedProperties.Add("#REQUEST TYPE", System.Web.HttpContext.Current.Request.RequestType);
            exEntry.ExtendedProperties.Add("#USER AGENT", System.Web.HttpContext.Current.Request.UserAgent);
            exEntry.ExtendedProperties.Add("#USER HOST ADDRESS", System.Web.HttpContext.Current.Request.UserHostAddress);
            exEntry.ExtendedProperties.Add("#USER LANGUAGES", System.Web.HttpContext.Current.Request.UserLanguages[0].Replace('-','_'));
           
            //exEntry.ExtendedProperties["UserName"].ToString();    

            Logger.Write(exEntry);
        }
              
    }
}
 