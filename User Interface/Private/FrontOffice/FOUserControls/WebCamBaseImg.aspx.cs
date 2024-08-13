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
using System.Drawing;
using System.Data.SqlClient;
using System.Drawing.Imaging;

public partial class Private_FrontOffice_FOUserControls_WebCamBaseImg : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        //called page form json for creating imgBase64 in image

        DateTime nm = DateTime.Now;
        string date = nm.ToString("ddMMMyyhhmmss");
        ///used date for creating Unique image name
        getimage(Server.MapPath("~/TempImage/") + date + "_save.jpg");
  
        StreamReader reader = new StreamReader(Request.InputStream);
        String Data = Server.UrlDecode(reader.ReadToEnd());
        File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\Doctorphotoupload.txt", "Start Time :: " + DateTime.Now + Environment.NewLine + Data +Environment.NewLine);
        reader.Close();

        Session["capturedImageURL"] = Server.MapPath("~/TempImage/") + date + ".jpg";

        Session["Imagename"] = date + ".jpg";
        try
        {
            byte[] data = null; string imgtype = "";
            if (Data.Contains("/jpeg"))
            {
                imgtype = "jpeg";
                data = Convert.FromBase64String(Data.Replace("imgBase64=data:image/jpeg;base64,", string.Empty));
            }
            else if (Data.Contains("/gif"))
            {

                imgtype = "gif";
                data = Convert.FromBase64String(Data.Replace("imgBase64=data:image/gif;base64,", string.Empty));
            }
            else
            {
                imgtype = "png";
                data = Convert.FromBase64String(Data.Replace("imgBase64=data:image/png;base64,", string.Empty));
            }
            System.Drawing.Image img1;
            using (MemoryStream ms = new MemoryStream(data))
            {
                img1 = System.Drawing.Image.FromStream(ms);
            }
            ImageFormat format = ImageFormat.Jpeg;
            //drawimg(Data.Replace("imgBase64=data:image/png;base64,", String.Empty), Session["capturedImageURL"].ToString());
            /// it is method 
            /// passing base64 string and string filename to Draw Image.
            //if (imgtype == "png")
            //    Savejpg(Server.MapPath("~/TempImage/") + date + ".png", img1, 80, imgtype);
            //else
            Savejpg(Server.MapPath("~/TempImage/") + date + ".jpg", img1, 80, imgtype);
        }
        catch (Exception ex)
        {
            File.AppendAllText(Server.MapPath(@"~/WorkFlowImages/") + "\\Doctorphotoupload.txt", "Exception Time :: " + DateTime.Now + Environment.NewLine + ex.Message + Environment.NewLine);
        }
        insertImagePath(Session["Imagename"].ToString(), "~/TempImage/" + Session["Imagename"].ToString(), date);
        /// it is method 
        ///inserting image in to database 
        ///System.Drawing.Image img1 = System.Drawing.Image.FromFile(Session["capturedImageURL"].ToString());
        ///Savejpg(Server.MapPath("~/TempImage/") + date + "_test.jpg", img1, 80);
    }

    public void drawimg(string base64, string filename)  // Drawing image from Base64 string.
    {
        using (FileStream fs = new FileStream(filename, FileMode.OpenOrCreate, FileAccess.Write))
        {
            using (BinaryWriter bw = new BinaryWriter(fs))
            {
                byte[] data = Convert.FromBase64String(base64);
                bw.Write(data);
                bw.Close();
            }
        }
    }
    public static void Savejpg(string path, System.Drawing.Image img, int quality, string imgtype)
    {
        if (quality < 0 || quality > 100)
            throw new ArgumentOutOfRangeException("quality must be between 0 and 100.");
        // Encoder parameter for image quality 
        EncoderParameter qualityParam =
            new EncoderParameter(Encoder.Quality, quality);
        // jpg image codec 
        ImageCodecInfo jpgCodec = null;
        if (imgtype == "gif")
            jpgCodec = GetEncoderInfo("image/gif");
        else if (imgtype == "jpeg")
            jpgCodec = GetEncoderInfo("image/jpeg");
        else
            jpgCodec = GetEncoderInfo("image/png");
        EncoderParameters encoderParams = new EncoderParameters(1);
        encoderParams.Param[0] = qualityParam;

        img.Save(path, jpgCodec, encoderParams);
    }

    /// <summary> 
    /// Returns the image codec with the given mime type 
    /// </summary> 
    private static ImageCodecInfo GetEncoderInfo(string mimeType)
    {
        // Get image codecs for all image formats 
        ImageCodecInfo[] codecs = ImageCodecInfo.GetImageEncoders();

        // Find the correct image codec 
        for (int i = 0; i < codecs.Length; i++)
            if (codecs[i].MimeType == mimeType)
                return codecs[i];
        return null;
    }

    public void insertImagePath(string imagename, string imagepath, string date) // use for imserting image when it is created.
    {
        if (Session["IMG_UMR_NO"] != null && Session["IMG_UMR_NO"] != string.Empty)
        {
            byte[] imgBytes = new byte[10000000];
            imgBytes = System.IO.File.ReadAllBytes(Session["capturedImageURL"].ToString());
            //EzHms.ModelEntity.PatientRegistration _preg = new EzHms.ModelEntity.PatientRegistration();
            //EzHms.Abstract.IPatientRegistration ipat = new EzHms.Services.PatientRegistration();
            //_preg.PATIENT_IMAGE = imgBytes;
            //_preg.UMR_NO = !string.IsNullOrEmpty(Session["IMG_UMR_NO"].ToString()) ? Session["IMG_UMR_NO"].ToString() : string.Empty;
            //_preg.REFERENCE_ID = !string.IsNullOrEmpty(Session["IMG_REFERENCE_ID"].ToString()) ? Session["IMG_REFERENCE_ID"].ToString() : string.Empty;
            //_preg.REFERENCE_TYPE_ID = !string.IsNullOrEmpty(Session["IMG_REFERENCE_TYPE_ID"].ToString()) ? Session["IMG_REFERENCE_TYPE_ID"].ToString() : string.Empty;
            //_preg.PATIENT_IMAGE = imgBytes;
            //ipat.SaveandUpdatePatientImage(_preg);
        }

    }
    public void getimage(string imgSavepth)
    {

    }
}
