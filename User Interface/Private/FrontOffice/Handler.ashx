<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.IO;
using System.Net;
using System.Web;
using System.Web.Script.Serialization;

public class Handler : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        //check if Request is to Upload the File.
        if (context.Request.Files.Count > 0)
        {
            //Fetch the Uploaded File.
            HttpPostedFile postedFile = context.Request.Files[0];
            //set the Folder Path.
            string folderPath = context.Server.MapPath("~/Private/DoctorSignature/");
            //set the file name.
            string fileName = Path.GetFileName(postedFile.FileName);
            //save the File in Folder.
            try
            {
                postedFile.SaveAs(folderPath + fileName);
            }
            catch (Exception ex)
            {
                string path = folderPath + "," + fileName;
            }
            //send file details in a json response.
            string json = new JavaScriptSerializer().Serialize(
                new
                {
                    name = folderPath + "," + fileName
                });
            context.Response.StatusCode = (int)HttpStatusCode.OK;
            context.Response.ContentType = "text/json";
            context.Response.Write(json);
            context.Response.End();
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}