using System;
using System.Web.UI;


public partial class Private_UserControls_ImageUploadControl : System.Web.UI.UserControl
{
    public static string imagepath;
    //string _imgPath;
     
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Session["IMG_UMR_NO"] = "";
            Session["IMG_REFERENCE_ID"] = "";
            Session["IMG_REFERENCE_TYPE_ID"] = "";
            Session["capturedImageURL"] = "";
        }
    }
     protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        
    }

    
   private string imagefolder;
    public string ImageFolder
    {
        get { return imagefolder; }
        set { hdnImgPath.Value = value; }
    }
    protected void btnUpload_Click(object sender, ImageClickEventArgs e)
    {
        if (imageUpload.FileName != "")
        {
            imageUpload.SaveAs(Server.MapPath("~/TempImage/")+ imageUpload.FileName);
            Session["capturedImageURL"] = Server.MapPath("~/TempImage/" + imageUpload.FileName);
            img.ImageUrl = "~\\TempImage\\" + imageUpload.FileName;
            hdnImgPath.Value = img.ImageUrl;
        }
        insertImagePath();
    }
   
    public void insertImagePath() // use for imserting image when it is created.
    {
        if (Session["IMG_UMR_NO"] != null && Session["IMG_UMR_NO"] != string.Empty)
        {
            byte[] imgBytes = new byte[10000000];
            imgBytes = System.IO.File.ReadAllBytes(Session["capturedImageURL"].ToString());
            EzHms.ModelEntity.PatientRegistration _preg = new EzHms.ModelEntity.PatientRegistration();
            //EzHms.Abstract.IPatientRegistration ipat = new EzHms.Services.PatientRegistration();
            //_preg.PATIENT_IMAGE = imgBytes;
            //_preg.UMR_NO = !string.IsNullOrEmpty(Session["IMG_UMR_NO"].ToString()) ? Session["IMG_UMR_NO"].ToString() : string.Empty;
            //_preg.REFERENCE_ID = !string.IsNullOrEmpty(Session["IMG_REFERENCE_ID"].ToString()) ? Session["IMG_REFERENCE_ID"].ToString() : string.Empty;
            //_preg.REFERENCE_TYPE_ID = !string.IsNullOrEmpty(Session["IMG_REFERENCE_TYPE_ID"].ToString()) ? Session["IMG_REFERENCE_TYPE_ID"].ToString() : string.Empty;
            //_preg.PATIENT_IMAGE = imgBytes;
            //ipat.SaveandUpdatePatientImage(_preg);
        }

    }
    protected void btnCam_Click(object sender, ImageClickEventArgs e)
    {
        //byte[] imgBytes = new byte[10000000];
        //imgBytes = System.IO.File.ReadAllBytes(Session["capturedImageURL"].ToString());
        img.ImageUrl = Session["capturedImageURL"].ToString();//"data:image/jpg;base64," + Convert.ToBase64String(imgBytes);
        hdnImgPath.Value = img.ImageUrl;

        //if (hdnWebCamCurrentPage.Value.Trim() == "ExistPage")
        //{
        //    EzHms.ModelEntity.PatientRegistration _preg = new EzHms.ModelEntity.PatientRegistration();
        //    EzHms.Abstract.IPatientRegistration ipat = new EzHms.Services.PatientRegistration();
        //    _preg.PATIENT_IMAGE = imgBytes;
        //    ipat.SaveandUpdatePatientImage(_preg);
        //}
    }
   protected  void btnSignUpload_Click(object sender,ImageClickEventArgs e)
   {
        if (SignatureUpload1.FileName != "")
        {
            SignatureUpload1.SaveAs(Server.MapPath("~\\TempImage\\" + SignatureUpload1.FileName));
            imgSign.ImageUrl = "~\\TempImage\\" + SignatureUpload1.FileName;
            hdnSignPath.Value = imgSign.ImageUrl;
        }
   }

    public string ImgPath
    {
        get { return hdnImgPath.Value; }
        set { img.ImageUrl = value;
        //hdnImgPath.Value = img.ImageUrl;
        }
    }
    public string  Signature
    { 
        get{return hdnSignPath.Value;}
        set{imgSign.ImageUrl=value;}
    }

    public bool IsShowSignature
    {
        set { imgSign.Visible = value; }
    }
    public bool IsShowLoad
    {
        set { btnload.Visible = value; }
    }
    public bool IsShowRecord
    {
        set { btnrecord.Visible = value; }
    }
    //private short _tabIndex;
    //public short TabIndex
    //{
    //    get
    //    {
    //        return _tabIndex;
    //    }
    //    set
    //    {
    //        _tabIndex = value;
    //        btnbrowse.TabIndex = (short)(value++);
    //        txtSign.TabIndex = (short)(value++);
    //        _tabIndex = value;

    //    }
    //}
    
}
