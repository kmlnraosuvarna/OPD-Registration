using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.IO;
using System.Windows.Forms;
using EzHms.ModelEntity;


public partial class UserControls_DMSControl : System.Web.UI.UserControl
{

    public delegate void OnUpload(object sender,   EventArgs e);
    public OnUpload SaveItems;

    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        lnkUpload.Click += new EventHandler(lnkUpload_Click);
        lnkSubmit.Click += new EventHandler(lnkSubmit_Click);
    }

    void lnkSubmit_Click(object sender, EventArgs e)
    {
       // SendDocumentInformation();
    }

    void lnkUpload_Click(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            clearFolder(Server.MapPath("~//DMS//"));
        }


        //if (fileUpload.FileName != string.Empty)
        //{
        //    fileUpload.SaveAs(Server.MapPath("~//Demo//") + fileUpload.FileName);


        //}
        //if (fLoad.FileName != string.Empty)
        //{
        //    fLoad.SaveAs(Server.MapPath("~//DMS//") + fLoad.FileName);
        //    lblImg.Text += "*." + Server.MapPath("~//DMS//") + fLoad.FileName;
        //    byte[] imgData = File.ReadAllBytes(Server.MapPath("~//DMS//") + fLoad.FileName);

        //    File.AppendAllText(Server.MapPath("~//DMS//txt"), Convert.ToBase64String(imgData));

        //}
        insurmodelpopup.Show();
       
    }
   
    void ibtnDownload_Click(object sender, ImageClickEventArgs e)
    {

    }
    void ibtnUpload_Click(object sender, ImageClickEventArgs e)
    {
      
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        //Scriptmanager2.RegisterAsyncPostBackControl(lnkUpload);
      
    }
    private void clearFolder(string FolderName)
    {
        try
        {
            DirectoryInfo dir = new DirectoryInfo(FolderName);

            foreach (FileInfo fi in dir.GetFiles())
            {
                fi.Delete();
            }

            foreach (DirectoryInfo di in dir.GetDirectories())
            {
                clearFolder(di.FullName);
                di.Delete();
            }
        }
        catch (Exception ex)
        {
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
        }
    }

    public FileUpload FILE_UPLOAD
    {
        get { return fLoad; }
    }

    public AjaxControlToolkit.ModalPopupExtender MODEL_POPUP
    {
        get { return insurmodelpopup; }
    }

   

#region Properties
    public string UmrNo
    {
        get { return hdnUmrNo.Value; }
        set { hdnUmrNo.Value = value; }
        
    }
    public string ConsNo
    {
        get { return hdnConsNo.Value; }
        set { hdnConsNo.Value = value; }

    }
    public string TransNo
    {
        get { return hdnTransNo.Value; }
        set { hdnTransNo.Value = value; }

    }
    public string ModId
    {
        get { return hdnModId.Value; }
        set { hdnModId.Value = value; }
    }

    public string DocId
    {
        get { return hdnDocId.Value; }
        set { hdnDocId.Value = value; }
    }

    public string UserId
    {
        get { return hdnUserId.Value; }
        set { hdnUserId.Value = value; }
    }

    public string FORMAT_CODE
    {
        get;
        set;
    }

    public string COMMENTS
    {
        get { return txtComments.Text; }
        set { txtComments.Text = value; }
    }
    
#endregion
    
}
