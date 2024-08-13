using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Text;
using System.Net;
using System.Net.Sockets;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

public partial class Private_FrontOffice_IPBilling_FileUpload : System.Web.UI.Page
{

    string _admn_no = string.Empty;
    string _umr_no = string.Empty;
    int _document_id = 0;
    string _module_id = string.Empty;
    string _user_id = string.Empty;
    string _session_id = string.Empty;
    StringBuilder _strfileupload = null;
    string ipAddress = string.Empty;
    string dmsPortNumber = string.Empty;

    TcpClient ourTCP_Client;
    NetworkStream ourStream;
    TcpListener listener;

    private Socket server;
    private EndPoint ip;
    Byte[] senddata = new Byte[1024000];
    string strFileExtention = string.Empty;
    string strapppath = AppDomain.CurrentDomain.BaseDirectory;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (SessionHandler.DBSESSION_ID > 0)
        {
            MasterClass obj1 = new MasterClass();
            //if (FtpWorkingorNotTesting(obj1.WebConfigSettings("Dmsftp").ToString() + "DMS") == true)
            //{
            //    hdnftpcheck.Value = "YES";
            //}
            //else
            //{
            //    hdnftpcheck.Value = "NO";
            //}

            hdnftpcheck.Value = SessionHandler.FTPWORKSTATUS.ToString();

            if(!string.IsNullOrEmpty(Request.QueryString["ADMN_NO"]))
                _admn_no = Request.QueryString["ADMN_NO"].ToString();
            if (!string.IsNullOrEmpty(Request.QueryString["UMR_NO"]))
                _umr_no = Request.QueryString["UMR_NO"].ToString();

            
            
            ipAddress = obj1.WebConfigSettings("DmsIpAdd");
            dmsPortNumber = obj1.WebConfigSettings("DmsPort");
        }
        else
        {
            Response.Redirect("~/Default.aspx");
        }

    }
    private Boolean FtpWorkingorNotTesting(string lvftppath)
    {
        try
        {
            FtpWebRequest ftpRequest;
            ftpRequest = (FtpWebRequest)FtpWebRequest.Create(lvftppath);
            ftpRequest.Method = WebRequestMethods.Ftp.ListDirectory;
            using (FtpWebResponse ftpResponse = (FtpWebResponse)(ftpRequest.GetResponse()))
            {
                return true;
            }
        }
        catch (Exception ex)
        {
            return false;
        }

    }
    protected override void OnInit(EventArgs e)
    {
            base.OnInit(e);
            this.btnUpload.Click += new EventHandler(btnUpload_Click);            
            this.MultipleFileUpload1.Click += new MultipleFileUploadClick(MultipleFileUpload1_Click);
    }

    void MultipleFileUpload1_Click(object sender, FileCollectionEventArgs e)
    {

        MasterClass obj1 = new MasterClass();
        if (!(FtpWorkingorNotTesting(obj1.WebConfigSettings("Dmsftp").ToString() + "DMS") == true))
        {
            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "123", "javascript:OnSaveUpdateDMSAlertFTP();", true);
            return;
        }      
        HttpFileCollection oHttpFileCollection = e.PostedFiles;
        HttpPostedFile oHttpPostedFile = null;
        if (e.HasFiles)
        {
            HiddenField hdnRemarks = MultipleFileUpload1.FindControl("hdnRemarks") as HiddenField;
            HiddenField hdnFormats = MultipleFileUpload1.FindControl("hdnFormats") as HiddenField;
            HiddenField hdnUMRNO = MultipleFileUpload1.FindControl("hdnUMRNO") as HiddenField;
            //HiddenField hdnREGNO = MultipleFileUpload1.FindControl("hdnREGNO") as HiddenField;
            HiddenField hdnADMNNO = MultipleFileUpload1.FindControl("hdnADMNNO") as HiddenField;

            HiddenField hdnTablename = MultipleFileUpload1.FindControl("hdntablename") as HiddenField;
            HiddenField hdntblautocdGlobalcolumns = MultipleFileUpload1.FindControl("hdntblautocdGlobalcolumns") as HiddenField;
            HiddenField hdntblautoidcolumns = MultipleFileUpload1.FindControl("hdntblautoidcolumns") as HiddenField;
            
            _document_id = SessionHandler.DOCUMENT_ID;
            _module_id = SessionHandler.MODULE_ID;
            _user_id = SessionHandler.UserID;
            _session_id = SessionHandler.DBSESSION_ID.ToString();
            //_strfileupload = new StringBuilder();
            Guid _guid;
            string imagename = string.Empty;
            Byte[] _image_bytes = new Byte[1000];
            if (!string.IsNullOrEmpty(Request.QueryString["UMR_NO"]))
                _umr_no = Request.QueryString["UMR_NO"].ToString();
            else
                _umr_no = hdnUMRNO.Value;
            //string _reg_no = hdnREGNO.Value;
            if (!string.IsNullOrEmpty(Request.QueryString["ADMN_NO"]))
                _admn_no = Request.QueryString["ADMN_NO"].ToString();
            else
                _admn_no = hdnADMNNO.Value;
          //  _strfileupload.Append("" + _umr_no + "," + _admn_no + "," + _admn_no + "," + SessionHandler.MODULE_ID + "," + SessionHandler.DOCUMENT_ID + "," + SessionHandler.UserID + "," + SessionHandler.DBSESSION_ID);
            try
            {
                int Filec = e.Count - 1;
                for (int n = 0; n < e.Count - 1; n++)
                {
                    _guid = Guid.NewGuid();
                    oHttpPostedFile = oHttpFileCollection[n];
                    //Getting File Extension
                    strFileExtention = System.IO.Path.GetExtension(oHttpPostedFile.FileName).ToUpper();
                    imagename = System.IO.Path.GetFileName(oHttpPostedFile.FileName);
                    string systime = System.DateTime.Now.ToString("ddMMyyhhmmssms");
                    string strapppath1 = AppDomain.CurrentDomain.BaseDirectory;
                    string recvpath = strapppath1 + "Image1" + "\\" + systime;

                    if (Directory.Exists(recvpath))
                    {
                        Directory.Delete(recvpath, true);
                    }
                    Directory.CreateDirectory(recvpath);
                    if (File.Exists(recvpath))
                    {
                        File.Delete(recvpath);
                    }
                    string pathtocheck = recvpath + "\\" + imagename;
                    oHttpPostedFile.SaveAs(pathtocheck);
                    byte[] imgData = File.ReadAllBytes(recvpath + "\\" + imagename);
                    string filefolderpath = recvpath;
                    string filepath = recvpath + "\\" + imagename;
                    string DBase = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
                    // string DBase = ConfigurationManager.ConnectionStrings["SuvarnaDB"].ConnectionString;
                   // string Insertion = System.Configuration.ConfigurationSettings.AppSettings.Get("Insertion").ToString();
                   // string documentname = System.Configuration.ConfigurationSettings.AppSettings.Get("documentname").ToUpper();
                   // string documentid = System.Configuration.ConfigurationSettings.AppSettings.Get("documentid").ToUpper();
                    string documentname = "CASESHEET";
                    string documentid = "DC1";
                    string Insertion = "1";
                    string Remarks = "";
                    if (hdnRemarks.Value == ",")
                    {
                        Remarks = "";
                    }
                    else
                    {
                        Remarks = hdnRemarks.Value.Split(',')[Filec - n];
                    }
                    string formatcd = hdnFormats.Value.Split(',')[Filec - n];
                    string Lineitem = "ALL";
                    string databasecon = DBase;
                    string _Pat_Type = "OP";
                    UploadDbFtp(_umr_no, _admn_no, _module_id, _document_id, _user_id, filefolderpath, databasecon, documentname, documentid, strFileExtention, formatcd, Lineitem, Remarks, Insertion, _Pat_Type, _session_id);
                }
                try
                {
                    //EzHms.ModelEntity.Transport objtran = new EzHms.ModelEntity.Transport();
                    //TransportWebService objiTRAN = new TransportWebService();
                    //int stp_id = SessionHandler.STP_ID;
                    //objtran.SESSION_ID = Convert.ToInt32(SessionHandler.DBSESSION_ID);
                    //objtran.DMS_UPLOAD_QUERY = "UPDATE " + hdnTablename.Value.ToString() + " SET DMS_UPLOAD='Y' WHERE " + hdntblautocdGlobalcolumns.Value.ToString() + "='" + hdnUMRNO.Value.ToString() + "' AND " + hdntblautoidcolumns.Value.ToString() + "='" + hdnADMNNO.Value.ToString() + "'";
                    //bool count = objiTRAN.Update_Dms_upload(objtran);
                    //if (count == true)
                    //{
                    //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "123", "javascript:OnSaveDMSAlert();", true);
                    //}
                    //else
                    //{
                    //    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "123", "javascript:OnSaveUpdateDMSAlert();", true);
                    //}
                }
                catch (Exception ex)
                {
                    File.AppendAllText(strapppath + "\\Image1\\listentrack.txt", " FileUpload Exception 1: " + ex.ToString() + System.DateTime.Now + Environment.NewLine);
                }
            }

            catch (Exception ex)
            {
                File.AppendAllText(strapppath + "\\Image1\\listentrack.txt", " FileUpload Exception 2: " + ex.ToString() + System.DateTime.Now + Environment.NewLine);
            }
        }
    }

    void btnUpload_Click(object sender, EventArgs e)
    {

        if (fileUpload1.FileName != string.Empty)
        {
            _document_id = SessionHandler.DOCUMENT_ID;
            _module_id = SessionHandler.MODULE_ID;
            //_strfileupload = new StringBuilder();
             Guid _guid;
            _guid = Guid.NewGuid();
            string imagename = string.Empty;
            Byte[] _image_bytes = new Byte[1000];
            
            
            try
            {
            //Getting File Extension
            string strFileExtention = System.IO.Path.GetExtension(fileUpload1.FileName).ToUpper();

            //Checking File Extension is jpg/jpeg
            if (strFileExtention == ".jpg".ToUpper() || strFileExtention == ".jpeg".ToUpper())
            {
                imagename = _guid + fileUpload1.FileName;
                //Saving Image into Physical Folder
                fileUpload1.SaveAs(Server.MapPath("~/DMS") + "\\" + imagename);
                byte[] imgData = File.ReadAllBytes(Server.MapPath("~//DMS//") + imagename);
                File.AppendAllText(Server.MapPath("~//DMS//txt"), Convert.ToBase64String(imgData));
                string filepath = Server.MapPath("~/DMS") + "\\" + imagename;
                //Converting image into bytes
                _image_bytes = File.ReadAllBytes(filepath);
                if (_strfileupload.ToString() == "")
                {
                    _strfileupload.Append("" + _umr_no + "," + _admn_no + "," + _admn_no + "," + SessionHandler.MODULE_ID + "," + SessionHandler.DOCUMENT_ID + "," + SessionHandler.UserID + ",FNF,REMARKS:" + string.Empty/*txtComments.Value*/+ ","+"C"+","+ GetToBase64Format(_image_bytes) + " ");
                    _strfileupload.Append("$$$");
                }
                else
                {
                    _strfileupload.Append("");
                }

                    ip = new IPEndPoint(IPAddress.Parse(ipAddress.ToString()), Convert.ToInt32(dmsPortNumber));
                    server = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                    server.Connect(ip);
                    server.Send(System.Text.Encoding.ASCII.GetBytes(_strfileupload.ToString()));
                    Byte[] _status = new Byte[100];
                    server.Receive(_status);
                    string savedstatus = Encoding.ASCII.GetString(_status).Trim();
                    if (savedstatus.Substring(0, 1) == "Y")
                    {
                        //txtComments.Value = string.Empty;
                        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "saveAlert", "alert('Documents Saved!');", true);
                    }
            }
            else
            {
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alert1", "alert('Image Format Should be JPG only!')", true);
            }
            }
            catch (Exception)
            {


            }

        }
    }

    protected string GetToBase64Format(Byte[] image)
    {
        return Convert.ToBase64String(image);
    }

    private void UploadDbFtp(string _umr_no, string _admn_no, string _module_id, int _document_id, string _user_id, string filefolderpath, string databasecon, string documentname, string documentid, string FileExten, string formatcd, string Lineitem, string Remarks, string Insertion, string _Pat_Type, string _session_id)
    {
        //string reqlog = System.Configuration.ConfigurationSettings.AppSettings.Get("dmstxtlog").ToString().ToUpper();
        try
        {
            #region Properties
            PROPLogin pro = new PROPLogin();
            DATALogin lvdal = new DATALogin();
            DataSet Dst1 = new DataSet();
            Dst1 = lvdal.GetAllLocationsLogin();
            string strwatcherpath = string.Empty;
            string JpgExtension = string.Empty;
            string Port = string.Empty;
            string scanlocation = string.Empty;
            string ADMISSIONDT = string.Empty;
            string PATIENTNAME = string.Empty;
            string GENDER = string.Empty;
            string DISCAHRGEDT = string.Empty;
            string ADMISSIONNO = string.Empty;
            string UMRNO = string.Empty;
            string AGE = string.Empty;
            string ADDRESS = string.Empty;
            string DISCHARGEDT = string.Empty;
            string WARD = string.Empty;
            string BILLDT = string.Empty;
            string DOCTORNAME1 = string.Empty;
            string PATIENTTYPE = string.Empty;
            string DOCTORCD1 = string.Empty;
            string COMPANYCD = string.Empty;
            string FATHER_NAME = string.Empty;
            string filepath = string.Empty;
            string DocumentTypeId = string.Empty;
            string Locationcd = string.Empty;
            string LOCATIONID = string.Empty;
            string FILESAVING = string.Empty;
            string ENCRYPTNAME = string.Empty;
            string EncryptFilepath = string.Empty;
            string STORAGE_ID = string.Empty;
            string MetadataName = string.Empty;
            string FtpUser = string.Empty;
            string FtpPwd = string.Empty;
            int lvInsert = 0;
            int lvCurFileid = 0;

            JpgExtension = FileExten;

            strwatcherpath = filefolderpath;

            #endregion propert end
            Port = Dst1.Tables[1].Rows[0]["PORT"].ToString();

            DirectoryInfo dir1 = new DirectoryInfo(strwatcherpath);
            FileInfo[] finof2 = dir1.GetFiles();

            DirectoryInfo[] dir2 = dir1.GetDirectories();

            for (int j = 0; j <= finof2.Length - 1; j++)
            {
                scanlocation = _admn_no.ToString();

                DataSet ds3 = new DataSet();
                //Dst1 = lvdal.GetAllLocationsLogin();
                Locationcd = Dst1.Tables[0].Rows[0]["LOCATIONCD"].ToString();
                COMPANYCD = Dst1.Tables[0].Rows[0]["COMPANYCD"].ToString();
                LOCATIONID = Dst1.Tables[0].Rows[0]["LOCATIONID"].ToString();
                FILESAVING = Dst1.Tables[1].Rows[0]["FILESAVING"].ToString();
                STORAGE_ID = Dst1.Tables[0].Rows[0]["STORAGE_ID"].ToString();
                FtpUser = Dst1.Tables[1].Rows[0]["FTPUSER"].ToString();
                FtpPwd = Dst1.Tables[1].Rows[0]["FTPPWD"].ToString();
                ds3 = lvdal.GetIPOPUMRDetails(scanlocation, _Pat_Type);

                if (ds3.Tables[0].Rows.Count > 0)
                {
                    PATIENTNAME = ds3.Tables[0].Rows[0]["PATIENTNAME"].ToString();
                    FATHER_NAME = ds3.Tables[0].Rows[0]["FATHER_NAME"].ToString();
                    ADMISSIONNO = ds3.Tables[0].Rows[0]["ADMISSIONNO"].ToString();
                    UMRNO = ds3.Tables[0].Rows[0]["UMRNO"].ToString();
                    GENDER = ds3.Tables[0].Rows[0]["GENDER"].ToString();
                    AGE = ds3.Tables[0].Rows[0]["AGE"].ToString();
                    ADMISSIONDT = ds3.Tables[0].Rows[0]["ADMISSIONDT"].ToString();
                    DISCHARGEDT = ds3.Tables[0].Rows[0]["DISCHARGEDT"].ToString();
                    WARD = ds3.Tables[0].Rows[0]["WARDNAME"].ToString();
                    DOCTORNAME1 = ds3.Tables[0].Rows[0]["DOCTORNAME1"].ToString();
                    PATIENTTYPE = ds3.Tables[0].Rows[0]["PATIENTTYPE"].ToString();
                    COMPANYCD = ds3.Tables[0].Rows[0]["COMPANYCD"].ToString();
                    DocumentTypeId = "DC1";
                }
                else
                {
                    UMRNO = _umr_no;
                    ADMISSIONNO = _admn_no + "-" + _admn_no;
                    DocumentTypeId = "DC1";
                }

                //ADMISSIONDT = DateTime.Today.ToString();
                string lvsubFolder = string.Empty;
                string Fielpath = string.Empty;
                string Docket = string.Empty;
                string Versions = string.Empty;
                string lvstrPath = string.Empty;
                string lvscanid;
                if (ADMISSIONDT == "")
                {
                    lvsubFolder = System.DateTime.Now.ToString("yyyy/MMM/d");
                }
                else
                {
                    lvsubFolder = Convert.ToDateTime(ADMISSIONDT).ToString("yyyy/MMM/d");
                }
                if (ADMISSIONNO == "")
                {
                    ADMISSIONNO = _admn_no + '-' + _admn_no;
                }


                Fielpath = "DMS/MEDICALRECORDS";
                Docket = "DOCKET";
                Versions = "V1";
                lvstrPath = Fielpath + '/' + lvsubFolder + '/' + ADMISSIONNO + '/' + Docket + '/' + Versions;


                //Started Insertion into DMS_SCAN

                pro._LocationCd = Locationcd.ToString();
                pro._CompanyCd = COMPANYCD.ToString();
                pro._DocId = "DMSFILEM";
                pro._Tran = true;
                lvscanid = lvdal.GetDocNumber(pro);
                pro._LocationCd = Locationcd.ToString();
                pro._CompanyCd = COMPANYCD.ToString();
                pro._ScanId = "SI" + lvscanid;
                pro._FileName = finof2[j].Name.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper();
                pro._Format = finof2[j].Extension.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper();
                pro._FileType = "SINGLE";
                pro._CreateBy = _user_id;
                pro._Cleaned = "N";
                pro._LocationId = LOCATIONID.ToString();
                pro._Scanlocation = ADMISSIONNO.ToString();
                pro._Repository = "N";
                pro._FormatCd = formatcd;
                pro._DocumentTypeId = "DC1";

                pro._moduleidhims = _module_id;
                pro._docidhims = _document_id.ToString();
                pro._lineitems = Lineitem;

                lvInsert = lvdal.InsertScanforHIMS(pro);

                //Inserted in DMS_SCAN

                // Insertion start in DMS_FILEM
                pro._LocationCd = Locationcd.ToString();
                pro._CompanyCd = COMPANYCD.ToString();
                pro._DocId = "DMSFILEM";
                pro._Tran = true;
                string lvdocnumber = lvdal.GetDocNumber(pro);
                pro._LocationCd = Locationcd.ToString();
                pro._CompanyCd = COMPANYCD.ToString();
                pro._FileId = "FM" + lvdocnumber;
                pro._FileSaving = FILESAVING.ToString();
                pro._EncryptName = finof2[j].Name.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper();
                pro._EncryptFilepath = lvstrPath;
                pro._FilePath = lvstrPath;
                pro._MetadataName = "MEDICALRECORDS";
                pro._UserId = _user_id;
                pro._Version1 = "1";
                pro._PresentLocation = lvstrPath;
                pro._CheckStatus = "N";
                pro._NewFileName = finof2[j].Name.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper();
                pro._NewEncryptFilename = finof2[j].Name.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper();
                pro._Drive = "D";
                pro._ScanId = "SI" + lvscanid;
                pro._Scanlocation = ADMISSIONNO;
                pro._DocumentTypeId = DocumentTypeId;
                pro._FormatCd = formatcd;
                pro._Port = Port;
                pro._Storage_id1 = STORAGE_ID;
                pro._FileType = finof2[j].Extension.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper(); ;
                pro._VersionRequired = "Y";
                pro._Owner = "";
                pro._Author = "";
                pro._FtpUser = FtpUser;
                pro._FtpPwd = FtpPwd;
                pro._comments = Remarks;
                pro._Newlocaid = _session_id;
                //  pro._bill_service_id = bill_service_id;
                lvCurFileid = lvdal.InsertFilemforhimsdocs(pro);

                // Insertion Completed in DMS_FILEM

                // Insertion start in DMS_MEDICALRECORDS
                pro._FileName = finof2[j].Name.Replace(".jpeg", ".JPG").Replace("*.JPEG", ".JPG").ToUpper();

                pro._FilePath = lvstrPath;
                pro._FileId = "FM" + lvCurFileid;

                pro._CompanyCd = COMPANYCD;
                pro._LocationCd = Locationcd;


                pro._UserId = _user_id;
                pro._Scanlocation = ADMISSIONNO;

                pro._DocumentTypeId = DocumentTypeId;


                DataSet ds4 = new DataSet();
                pro._Scanlocation = ADMISSIONNO;
                pro._DocumentTypeId = DocumentTypeId;
                ds4 = lvdal.GetCountofScanlocation(pro);

                string medical_col = ds4.Tables[0].Rows[0]["Column1"].ToString();


                if (medical_col == "0")
                {
                    int lvintval = lvdal.Insmedicalrecords(pro);
                }

                // Insertion Completed in DMS_MEDICALRECORDS



                //FTP ULOAD START

                FtpUpload(finof2[j].FullName, finof2[j].Name, lvstrPath, Port);




                FileInfo[] finof4 = dir1.GetFiles();


                for (int ij = 0; ij <= finof4.Length - 1; ij++)
                {
                    File.Delete(strwatcherpath + "\\" + finof4[ij].Name.ToString());
                }



            }
        }
        catch (Exception ex)
        {
           // if (reqlog == "Y")
           // {
                File.AppendAllText(strapppath + "\\Image1\\listentrack.txt", " FileUpload DbInsertion EXCEPTION  : " + ex.ToString() + System.DateTime.Now + Environment.NewLine);
          //  }

        }
    }

    private static void FtpUpload(string source, string filename1, string lvstrPath, string port)
    {
       // string reqlog = System.Configuration.ConfigurationSettings.AppSettings.Get("dmstxtlog").ToString().ToUpper();
        string strapppath = AppDomain.CurrentDomain.BaseDirectory;
        try
        {

            string filename = Path.GetFileName(source);
            string dest = port + lvstrPath + '/' + filename;
            string source1 = source;
            FtpWebRequest ftp = (FtpWebRequest)FtpWebRequest.Create(dest);

            CreateFTPDirectory(port, lvstrPath);

            ftp.KeepAlive = true;
            ftp.UseBinary = true;
            ftp.Method = WebRequestMethods.Ftp.UploadFile;

            FileStream fs = File.OpenRead(source1);
            byte[] buffer = new byte[fs.Length];

            fs.Read(buffer, 0, buffer.Length);
            fs.Close();

            Stream ftpstream = ftp.GetRequestStream();
            ftpstream.Write(buffer, 0, buffer.Length);
            ftpstream.Close();

        }
        catch (Exception ex)
        {
            //throw ex;
          //  if (reqlog == "Y")
            //{
                File.AppendAllText(strapppath + "\\Image1\\listentrack.txt", "  FtpUpload : " + ex + System.DateTime.Now + Environment.NewLine);
            //}

        }
    }

    private static bool CreateFTPDirectory(string directory, string folders)
    {
       // string reqlog = System.Configuration.ConfigurationSettings.AppSettings.Get("dmstxtlog").ToString().ToUpper();
        string strapppath = AppDomain.CurrentDomain.BaseDirectory;
        bool exito = true;
        string[] lstfolders = folders.Split('/');
        string pathftp = directory;


        foreach (string fol in lstfolders)
        {

            if (fol != "")
            {

                try
                {

                    pathftp += "/" + fol;
                    //create the directory
                    FtpWebRequest requestDir = (FtpWebRequest)FtpWebRequest.Create(new Uri(pathftp));

                    requestDir.Method = WebRequestMethods.Ftp.MakeDirectory;
                    //requestDir.Credentials = new NetworkCredential("ftpbienesraices", "b13n3sr@1c3s");
                    requestDir.UsePassive = true;
                    requestDir.UseBinary = true;
                    requestDir.KeepAlive = false;
                    FtpWebResponse response = (FtpWebResponse)requestDir.GetResponse();
                    Stream ftpStream = response.GetResponseStream();


                    ftpStream.Close();
                    response.Close();
                }
                catch (WebException ex)
                {
                    FtpWebResponse response = (FtpWebResponse)ex.Response;
                    if (response.StatusCode == FtpStatusCode.ActionNotTakenFileUnavailable)
                    {

                        response.Close();
                        exito = true;
                    }
                    else
                    {
                        response.Close();
                        exito = false;

                    }

                }
            }
        }




        return exito;

    }
}
public class PROPLogin
{
    private string
        flag, IPOPUMRNO, UserId, Scanlocation, DocumentTypeId, CompanyCd
        , LocationCd, DocId, FileName, Format, FileType, CreateBy
        , Cleaned, LocationId, Repository, FormatCd, ScanId
        , moduleidhims, docidhims, lineitems, FileSaving, FileId
        , EncryptName, FilePath, EncryptFilepath, MetadataName
        , PresentLocation, CheckStatus, NewFileName, NewEncryptFilename, Drive
        , Port, FtpUser, FtpPwd, VersionRequired, Owner, Author, comments
        , Table_Name, Query, Linktypeval, cabinetid, KeyValue, ErrorNo
        , ErrorDesc, ErrorProc, Version1, UserName, Storage_id1, Newlocaid, bill_service_id;


    private bool tran;
    private int sessionid;


    public bool _Tran
    {
        get { return tran; }
        set { tran = value; }
    }


    public string _Storage_id1
    {
        get
        {
            return Storage_id1;
        }
        set
        {
            Storage_id1 = value;
        }
    }

    public string _Newlocaid
    {
        get
        {
            return Newlocaid;
        }
        set
        {
            Newlocaid = value;
        }
    }





    public string _UserName
    {
        get
        {
            return UserName;
        }
        set
        {
            UserName = value;
        }
    }
    public string _Flag
    {
        get
        {
            return flag;
        }
        set
        {
            flag = value;
        }
    }
    public int _SessionId
    {
        get
        {
            return sessionid;
        }
        set
        {
            sessionid = value;
        }
    }
    public string _IPOPUMRNO
    {
        get
        {
            return IPOPUMRNO;
        }
        set
        {
            IPOPUMRNO = value;
        }
    }
    public string _UserId
    {
        get
        {
            return UserId;
        }
        set
        {
            UserId = value;
        }
    }
    public string _Scanlocation
    {
        get
        {
            return Scanlocation;
        }
        set
        {
            Scanlocation = value;
        }
    }
    public string _DocumentTypeId
    {
        get
        {
            return DocumentTypeId;
        }
        set
        {
            DocumentTypeId = value;
        }
    }
    public string _CompanyCd
    {
        get
        {
            return CompanyCd;
        }
        set
        {
            CompanyCd = value;
        }
    }
    public string _LocationCd
    {
        get
        {
            return LocationCd;
        }
        set
        {
            LocationCd = value;
        }
    }
    public string _DocId
    {
        get
        {
            return DocId;
        }
        set
        {
            DocId = value;
        }
    }

    public string _FileName
    {
        get
        {
            return FileName;
        }
        set
        {
            FileName = value;
        }
    }
    public string _Format
    {
        get
        {
            return Format;
        }
        set
        {
            Format = value;
        }
    }
    public string _FileType
    {
        get
        {
            return FileType;
        }
        set
        {
            FileType = value;
        }
    }
    public string _CreateBy
    {
        get
        {
            return CreateBy;
        }
        set
        {
            CreateBy = value;
        }
    }
    public string _Cleaned
    {
        get
        {
            return Cleaned;
        }
        set
        {
            Cleaned = value;
        }
    }
    public string _LocationId
    {
        get
        {
            return LocationId;
        }
        set
        {
            LocationId = value;
        }
    }
    public string _Repository
    {
        get
        {
            return Repository;
        }
        set
        {
            Repository = value;
        }
    }
    public string _FormatCd
    {
        get
        {
            return FormatCd;
        }
        set
        {
            FormatCd = value;
        }
    }
    public string _ScanId
    {
        get
        {
            return ScanId;
        }
        set
        {
            ScanId = value;
        }
    }
    public string _moduleidhims
    {
        get
        {
            return moduleidhims;
        }
        set
        {
            moduleidhims = value;
        }
    }
    public string _docidhims
    {
        get
        {
            return docidhims;
        }
        set
        {
            docidhims = value;
        }
    }
    public string _lineitems
    {
        get
        {
            return lineitems;
        }
        set
        {
            lineitems = value;
        }
    }
    public string _FileSaving
    {
        get
        {
            return FileSaving;
        }
        set
        {
            FileSaving = value;
        }
    }
    public string _FileId
    {
        get
        {
            return FileId;
        }
        set
        {
            FileId = value;
        }
    }
    public string _EncryptName
    {
        get
        {
            return EncryptName;
        }
        set
        {
            EncryptName = value;
        }
    }
    public string _FilePath
    {
        get
        {
            return FilePath;
        }
        set
        {
            FilePath = value;
        }
    }
    public string _EncryptFilepath
    {
        get
        {
            return EncryptFilepath;
        }
        set
        {
            EncryptFilepath = value;
        }
    }
    public string _MetadataName
    {
        get
        {
            return MetadataName;
        }
        set
        {
            MetadataName = value;
        }
    }
    public string _PresentLocation
    {
        get
        {
            return PresentLocation;
        }
        set
        {
            PresentLocation = value;
        }
    }
    public string _CheckStatus
    {
        get
        {
            return CheckStatus;
        }
        set
        {
            CheckStatus = value;
        }
    }
    public string _NewFileName
    {
        get
        {
            return NewFileName;
        }
        set
        {
            NewFileName = value;
        }
    }
    public string _NewEncryptFilename
    {
        get
        {
            return NewEncryptFilename;
        }
        set
        {
            NewEncryptFilename = value;
        }
    }
    public string _Drive
    {
        get
        {
            return Drive;
        }
        set
        {
            Drive = value;
        }
    }
    public string _Port
    {
        get
        {
            return Port;
        }
        set
        {
            Port = value;
        }
    }
    public string _FtpUser
    {
        get
        {
            return FtpUser;
        }
        set
        {
            FtpUser = value;
        }
    }
    public string _FtpPwd
    {
        get
        {
            return FtpPwd;
        }
        set
        {
            FtpPwd = value;
        }
    }
    public string _VersionRequired
    {
        get
        {
            return VersionRequired;
        }
        set
        {
            VersionRequired = value;
        }
    }
    public string _Owner
    {
        get
        {
            return Owner;
        }
        set
        {
            Owner = value;
        }
    }
    public string _Author
    {
        get
        {
            return Author;
        }
        set
        {
            Author = value;
        }
    }
    public string _comments
    {
        get
        {
            return comments;
        }
        set
        {
            comments = value;
        }
    }
    public string _Table_Name
    {
        get
        {
            return Table_Name;
        }
        set
        {
            Table_Name = value;
        }
    }
    public string _Query
    {
        get
        {
            return Query;
        }
        set
        {
            Query = value;
        }
    }
    public string _Linktypeval
    {
        get
        {
            return Linktypeval;
        }
        set
        {
            Linktypeval = value;
        }
    }
    public string _cabinetid
    {
        get
        {
            return cabinetid;
        }
        set
        {
            cabinetid = value;
        }
    }
    public string _KeyValue
    {
        get
        {
            return KeyValue;
        }
        set
        {
            KeyValue = value;
        }
    }
    public string _ErrorNo
    {
        get
        {
            return ErrorNo;
        }
        set
        {
            ErrorNo = value;
        }
    }
    public string _ErrorDesc
    {
        get
        {
            return ErrorDesc;
        }
        set
        {
            ErrorDesc = value;
        }
    }
    public string _ErrorProc
    {
        get
        {
            return ErrorProc;
        }
        set
        {
            ErrorProc = value;
        }
    }

    public string _Version1
    {
        get
        {
            return Version1;
        }
        set
        {
            Version1 = value;
        }
    }

    public string _bill_service_id
    {
        get
        {
            return bill_service_id;
        }
        set
        {
            bill_service_id = value;
        }
    }

}

public class DATALogin
{
    static string ConnString;
    static string Errorlog;
    SqlConnection SqlCon;
    SqlCommand SqlCmd;
    SqlDataAdapter SqlDa;
    DataSet ds;

    PROPLogin prlog = new PROPLogin();

    public DATALogin()
    {
        if (string.IsNullOrEmpty(ConnString))
        {
            try
            {
                // Errorlog = System.Configuration.ConfigurationSettings.AppSettings["dmstxtlog"].ToString();
                string Dbase = string.Empty;
                Dbase = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);

                string strConn = string.Empty;
                ConnString = Dbase;
            }
            catch (Exception Ex)
            {
                //File.AppendAllText(Errorlog, "DATALogin : " + Ex.Message.ToString() + " " + System.DateTime.Now.ToString() + Environment.NewLine);

            }
            finally
            {

                // try { if (SqlCon.State == ConnectionState.Open) { SqlCon.Close(); } }
                // catch (Exception Ex) { }


            }
        }

    }

    public DataSet GetIPOPUMRDetails(string _IPOPUMRNO, string _FLAG)
    {


        ds = new DataSet();
        try
        {
            SqlCon = new SqlConnection(ConnString);



            if (SqlCon.State == ConnectionState.Closed)
            {
                SqlCon.Open();
            }

            SqlCmd = new SqlCommand("PR_GET_IPOPUMRVWINDEXPAR_WEB_DATA", SqlCon);
            SqlCmd.CommandType = CommandType.StoredProcedure;
            SqlCmd.Parameters.Add("@IPOPUMRNO", SqlDbType.Text).Value = _IPOPUMRNO;
            SqlCmd.Parameters.Add("@GLAG", SqlDbType.Text).Value = _FLAG;
            //SqlCmd.Parameters.Add("@IP_SESSION_ID", SqlDbType.Int).Value = _SessionId;

            try
            {
                SqlDa = new SqlDataAdapter(SqlCmd);
                SqlDa.Fill(ds, "Table1");

            }
            catch (Exception ex)
            {
            }
            finally
            {
                SqlCmd.Dispose();
                if (SqlCon.State == ConnectionState.Open)
                {
                    SqlCon.Close();
                }

            }

        }
        catch (Exception ex)
        {
        }
        return ds;

    }

    public bool Update_Dms_upload(string DMS_UPLOAD_QUERY, string _session_id)
    {
        try
        {

            int k = 0;
            SqlCon = new SqlConnection(ConnString);
            if (SqlCon.State == ConnectionState.Closed)
            {
                SqlCon.Open();
            }

            SqlCmd = new SqlCommand("PR_UPDATE_DMS_STATUS", SqlCon);
            SqlCmd.CommandType = CommandType.StoredProcedure;
            SqlCmd.Parameters.Add("@IP_QUERY", SqlDbType.VarChar).Value = DMS_UPLOAD_QUERY;
            SqlCmd.Parameters.Add("@IP_SESSION_ID", SqlDbType.Int).Value = _session_id;

            SqlCmd.Parameters.Add("@OP_COUNT", SqlDbType.VarChar, 50).Direction = ParameterDirection.Output;

            int count = SqlCmd.ExecuteNonQuery();
            if (SqlCon.State == ConnectionState.Open)
            {
                SqlCon.Close();
            }
            return count > 0 ? true : false;
        }
        catch (Exception ex)
        {
            return false;
        }

    }

    public DataSet GetAllLocationsLogin()
    {

        ds = new DataSet();
        try
        {
            SqlCon = new SqlConnection(ConnString);
            if (SqlCon.State == ConnectionState.Closed)
            {
                SqlCon.Open();
            }

            SqlCmd = new SqlCommand("proc_get_alllocationslogin", SqlCon);
            SqlCmd.CommandType = CommandType.StoredProcedure;
            try
            {
                SqlDa = new SqlDataAdapter(SqlCmd);
                SqlDa.Fill(ds, "Table1");

            }
            catch (Exception ex)
            {
            }
            finally
            {
                SqlCmd.Dispose();
                if (SqlCon.State == ConnectionState.Open)
                {
                    SqlCon.Close();
                }
            }
        }
        catch (Exception ex)
        {
        }
        return ds;
    }

    public string GetDocNumber(PROPLogin lvprtlg)
    {

        SqlConnection con = new SqlConnection(ConnString);

        SqlCommand cmd = new SqlCommand("PKGGN_DOCNUMBER_PROGN_GET_DOCNUMBER2", con);
        cmd.CommandType = CommandType.StoredProcedure;

        cmd.Parameters.Add("@pcompanycd", SqlDbType.VarChar, 50);
        cmd.Parameters["@pcompanycd"].Value = lvprtlg._CompanyCd;

        cmd.Parameters.Add("@plocationcd", SqlDbType.VarChar, 50);
        cmd.Parameters["@plocationcd"].Value = lvprtlg._LocationCd;

        cmd.Parameters.Add("@pdocid", SqlDbType.VarChar, 50);
        cmd.Parameters["@pdocid"].Value = lvprtlg._DocId;

        //dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, obj.SESSION_ID);

        cmd.Parameters.Add("@pautonumber", SqlDbType.VarChar, 50);
        cmd.Parameters["@pautonumber"].Direction = ParameterDirection.Output;

        if (con.State == ConnectionState.Open)
            con.Close();

        con.Open();

        SqlTransaction tran;
        tran = con.BeginTransaction();
        cmd.Transaction = tran;
        int ds = cmd.ExecuteNonQuery();
        if (lvprtlg._Tran == true)
        {
            tran.Commit();
        }
        else
        {
            tran.Rollback();
        }

        string count = cmd.Parameters["@pautonumber"].Value.ToString();
        con.Close();
        cmd = null;
        return count;

    }

    public int InsertScanforHIMS(PROPLogin lvprtlg)
    {

        SqlCon = new SqlConnection(ConnString);
        if (SqlCon.State == ConnectionState.Closed)
        {
            SqlCon.Open();
        }

        SqlCmd = new SqlCommand("proc_ins_dmsscanforhims", SqlCon);
        SqlCmd.CommandType = CommandType.StoredProcedure;
        SqlCmd.Parameters.Add("@PCOMPANYCD", SqlDbType.VarChar).Value = lvprtlg._CompanyCd;
        SqlCmd.Parameters.Add("@PLOCATIONCD", SqlDbType.VarChar).Value = lvprtlg._LocationCd;
        SqlCmd.Parameters.Add("@PSCANID", SqlDbType.VarChar).Value = lvprtlg._ScanId;
        SqlCmd.Parameters.Add("@PFILENAME", SqlDbType.VarChar).Value = lvprtlg._FileName;
        SqlCmd.Parameters.Add("@PFORMAT", SqlDbType.VarChar).Value = lvprtlg._Format;
        SqlCmd.Parameters.Add("@PFILETYPE", SqlDbType.VarChar).Value = lvprtlg._FileType;
        SqlCmd.Parameters.Add("@PCREATEBY", SqlDbType.VarChar).Value = lvprtlg._CreateBy;
        SqlCmd.Parameters.Add("@PCLEANED", SqlDbType.VarChar).Value = lvprtlg._Cleaned;
        SqlCmd.Parameters.Add("@PLOCATIONID", SqlDbType.VarChar).Value = lvprtlg._LocationId;
        SqlCmd.Parameters.Add("@PSCANLOCATION", SqlDbType.VarChar).Value = lvprtlg._Scanlocation;
        SqlCmd.Parameters.Add("@PREPOSITORY", SqlDbType.VarChar).Value = lvprtlg._Repository;
        SqlCmd.Parameters.Add("@PFORMATCD", SqlDbType.VarChar).Value = lvprtlg._FormatCd;
        SqlCmd.Parameters.Add("@Pdoctype", SqlDbType.VarChar).Value = lvprtlg._DocumentTypeId;
        SqlCmd.Parameters.Add("@Pmoduleid", SqlDbType.VarChar).Value = lvprtlg._moduleidhims;
        SqlCmd.Parameters.Add("@Pdocid", SqlDbType.VarChar).Value = lvprtlg._docidhims;
        SqlCmd.Parameters.Add("@Plineitem", SqlDbType.VarChar).Value = lvprtlg._lineitems;
        //SqlCmd.Parameters.Add("@IP_SESSION_ID", SqlDbType.Int).Value = "1";

        int ds1 = SqlCmd.ExecuteNonQuery();

        return ds1;

    }

    public int InsertFilemforhimsdocs(PROPLogin lvprtlg)
    {
        int k = 0;
        SqlCon = new SqlConnection(ConnString);

        if (SqlCon.State == ConnectionState.Closed)
        {
            SqlCon.Open();
        }

        SqlCmd = new SqlCommand("proc_insupd_dmsfilemhimsdocnew", SqlCon);
        SqlCmd.CommandType = CommandType.StoredProcedure;
        SqlTransaction trans = SqlCon.BeginTransaction();

        SqlCmd.Transaction = trans;

        SqlCmd.Parameters.Add("@PCOMPANYCD", SqlDbType.VarChar).Value = lvprtlg._CompanyCd;
        SqlCmd.Parameters.Add("@PLOCATIONCD", SqlDbType.VarChar).Value = lvprtlg._LocationCd;
        SqlCmd.Parameters.Add("@PFILEID", SqlDbType.VarChar).Value = lvprtlg._FileId;
        SqlCmd.Parameters.Add("@PFILENAME", SqlDbType.VarChar).Value = lvprtlg._FileName;
        SqlCmd.Parameters.Add("@PENCRYPTNAME", SqlDbType.VarChar).Value = lvprtlg._EncryptName;
        SqlCmd.Parameters.Add("@PFILEPATH", SqlDbType.VarChar).Value = lvprtlg._EncryptFilepath;
        SqlCmd.Parameters.Add("@PENCRYPTFILEPATH", SqlDbType.VarChar).Value = lvprtlg._EncryptFilepath;
        SqlCmd.Parameters.Add("@PMETADATANAME", SqlDbType.VarChar).Value = lvprtlg._MetadataName;
        SqlCmd.Parameters.Add("@PCREATEBY", SqlDbType.VarChar).Value = lvprtlg._CreateBy;
        SqlCmd.Parameters.Add("@PVERSION", SqlDbType.VarChar).Value = lvprtlg._Version1;
        SqlCmd.Parameters.Add("@PCHECKSTATUS", SqlDbType.VarChar).Value = lvprtlg._CheckStatus;
        SqlCmd.Parameters.Add("@PPRESENTLOCATION", SqlDbType.VarChar).Value = lvprtlg._Scanlocation;
        SqlCmd.Parameters.Add("@PNEWFILENAME", SqlDbType.VarChar).Value = lvprtlg._NewFileName;
        SqlCmd.Parameters.Add("@PNEWENCRYPTNAME", SqlDbType.VarChar).Value = lvprtlg._NewEncryptFilename;
        SqlCmd.Parameters.Add("@PDRIVE", SqlDbType.VarChar).Value = lvprtlg._Drive;
        SqlCmd.Parameters.Add("@PSCANID", SqlDbType.VarChar).Value = lvprtlg._ScanId;
        SqlCmd.Parameters.Add("@PSCANLOCATION", SqlDbType.VarChar).Value = lvprtlg._Scanlocation;
        SqlCmd.Parameters.Add("@PDOCUMENTTYPE", SqlDbType.VarChar).Value = lvprtlg._DocumentTypeId;
        SqlCmd.Parameters.Add("@PVERSIONREQUIRED", SqlDbType.VarChar).Value = lvprtlg._VersionRequired;
        SqlCmd.Parameters.Add("@POWNER", SqlDbType.VarChar).Value = lvprtlg._Owner;
        SqlCmd.Parameters.Add("@PAUTHOR", SqlDbType.VarChar).Value = lvprtlg._Author;
        SqlCmd.Parameters.Add("@PFORMATCD", SqlDbType.VarChar).Value = lvprtlg._FormatCd;
        SqlCmd.Parameters.Add("@PPORT", SqlDbType.VarChar).Value = lvprtlg._Port;
        SqlCmd.Parameters.Add("@PFTPUSER", SqlDbType.VarChar).Value = lvprtlg._FtpUser;
        SqlCmd.Parameters.Add("@PFTPPWD", SqlDbType.VarChar).Value = lvprtlg._FtpPwd;
        SqlCmd.Parameters.Add("@PFILETYPE", SqlDbType.VarChar).Value = lvprtlg._FileType;
        SqlCmd.Parameters.Add("@PFILESAVING", SqlDbType.VarChar).Value = lvprtlg._FileSaving;
        SqlCmd.Parameters.Add("@Pmoduleid", SqlDbType.VarChar).Value = lvprtlg._moduleidhims;
        SqlCmd.Parameters.Add("@Pdocid", SqlDbType.VarChar).Value = lvprtlg._docidhims;
        SqlCmd.Parameters.Add("@Pcomment", SqlDbType.VarChar).Value = lvprtlg._comments;
        SqlCmd.Parameters.Add("@plineitem", SqlDbType.VarChar).Value = lvprtlg._lineitems;
        SqlCmd.Parameters.Add("@pstorageid", SqlDbType.VarChar).Value = lvprtlg._Storage_id1;
        SqlCmd.Parameters.Add("@plocation_id", SqlDbType.VarChar).Value = lvprtlg._Newlocaid;
        SqlCmd.Parameters.Add("@billserviceid", SqlDbType.VarChar).Value = lvprtlg._bill_service_id;

        //SqlCmd.Parameters.Add("@IP_SESSION_ID", SqlDbType.VarChar).Value = lvprtlg._CompanyCd;

        SqlCmd.Parameters.Add("@outparam", SqlDbType.VarChar, 50).Direction = ParameterDirection.Output;

        SqlCmd.ExecuteNonQuery();

        if (SqlCmd.Parameters["@outparam"].Value.ToString() == "")
        {
            k = 0;
        }
        else
        {
            k = Convert.ToInt32(SqlCmd.Parameters["@outparam"].Value.ToString());
        }
        try
        {
            trans.Commit();
            if (SqlCon.State == System.Data.ConnectionState.Open)
            {
                SqlCon.Close();
            }

        }
        catch (Exception ex)
        {
            trans.Rollback();
            if (SqlCon.State == System.Data.ConnectionState.Open)
            {
                SqlCon.Close();
            }
        }
        return k;

        //SqlCmd.Parameters.Add("@outparam", SqlDbType.VarChar, 50);
        //SqlCmd.Parameters["@outparam"].Direction = ParameterDirection.Output;

        //string count = SqlCmd.Parameters["@outparam"].Value.ToString();

        //int ds1 = SqlCmd.ExecuteNonQuery();

        //return ds1;

    }

    public DataSet GetCountofScanlocation(PROPLogin lvprtlg)
    {

        ds = new DataSet();
        try
        {
            SqlCon = new SqlConnection(ConnString);
            if (SqlCon.State == ConnectionState.Closed)
            {
                SqlCon.Open();
            }

            SqlCmd = new SqlCommand("PROC_GETSCANLOCATON", SqlCon);
            SqlCmd.CommandType = CommandType.StoredProcedure;


            SqlCmd.Parameters.Add("@PSCANLOCATION", SqlDbType.VarChar).Value = lvprtlg._Scanlocation;

            SqlCmd.Parameters.Add("@PDOCTYPE", SqlDbType.VarChar).Value = lvprtlg._DocumentTypeId;

            //SqlCmd.Parameters.Add("@IP_SESSION_ID", SqlDbType.Int).Value = "1";






            try
            {
                SqlDa = new SqlDataAdapter(SqlCmd);
                SqlDa.Fill(ds, "Table1");

            }
            catch (Exception ex)
            {
            }
            finally
            {
                SqlCmd.Dispose();
                if (SqlCon.State == ConnectionState.Open)
                {
                    SqlCon.Close();
                }
            }
        }
        catch (Exception ex)
        {
        }
        return ds;
    }

    public int Insmedicalrecords(PROPLogin lvprtlg)
    {

        int i = 0;
        SqlCon = new SqlConnection(ConnString);

        if (SqlCon.State == ConnectionState.Closed)
        {
            SqlCon.Open();
        }

        SqlCmd = new SqlCommand("pr_ins_dmsmedicalrecords", SqlCon);
        SqlCmd.CommandType = CommandType.StoredProcedure;
        SqlCmd.Parameters.Add("@pcompanycd", SqlDbType.VarChar).Value = lvprtlg._CompanyCd;
        SqlCmd.Parameters.Add("@plocationcd", SqlDbType.VarChar).Value = lvprtlg._LocationCd;
        SqlCmd.Parameters.Add("@pfileid", SqlDbType.VarChar).Value = lvprtlg._FileId;
        SqlCmd.Parameters.Add("@pfilename", SqlDbType.VarChar).Value = lvprtlg._FileName;
        SqlCmd.Parameters.Add("@pfilepath", SqlDbType.VarChar).Value = lvprtlg._FilePath;
        SqlCmd.Parameters.Add("@pcreateby", SqlDbType.VarChar).Value = lvprtlg._CreateBy;
        SqlCmd.Parameters.Add("@pscanlocation", SqlDbType.VarChar).Value = lvprtlg._Scanlocation;
        SqlCmd.Parameters.Add("@pdocumenttype", SqlDbType.VarChar).Value = lvprtlg._DocumentTypeId;
        //SqlCmd.Parameters.Add("@IP_SESSION_ID", SqlDbType.VarChar).Value = lvprtlg._SessionId;

        i = SqlCmd.ExecuteNonQuery();

        if (SqlCon.State == ConnectionState.Open)
        {
            SqlCon.Close();
        }

        return i;

    }

}