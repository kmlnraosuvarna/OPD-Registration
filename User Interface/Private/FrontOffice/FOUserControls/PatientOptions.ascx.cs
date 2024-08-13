using System;
using System.Collections.Generic;
using System.Web.Services;
using System.Data;
using EzHms.Abstract;
public partial class Private_FrontOffice_FOUserControls_PatientOptions : System.Web.UI.UserControl
{
    //public int Admn_id
    //{
    //    get
    //    {
    //        return !string.IsNullOrEmpty(hdnOptAdmnID.Value) ? Convert.ToInt32(hdnOptAdmnID.Value) : 0;
    //    }
    //    set { hdnOptAdmnID.Value = value.ToString(); }
    //}
    private int _admnid;
    public int Admnid
    {
        get { return _admnid; }
        set { _admnid = value; }
    }

    public string OptFlag
    {
        get { return hdnpatientclass.Value; }
        set
        {
            hdnpatientclass.Value = value;
            HDN_IP_OP.Value = value;
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        hdncurrdocfrmcd.Value = SessionHandler.DOC_FORM_CD;
        System.Data.DataSet _dsgetdocper = null; //Docpermission.DocpermissionbyDocIdModid(2155, 16);
        MasterClass objmaster = new MasterClass();
        hdnFBMaxDcml.Value = objmaster.CompanySettingDSValue("FBMAXDECIMALS");
        string ChnRegDocID = "";
        IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
        string query1 = "SELECT DOC_ID FROM SE.DOCUMENT WHERE DOC_FORM_CD='CHANGE-REG'";
        DataSet ds1 = dMasters.DynamicDataset(query1);
        if (ds1 != null)
        {
            for (var m = 0; m < ds1.Tables[0].Rows.Count; m++)
            {
                ChnRegDocID = ds1.Tables[0].Rows[m]["DOC_ID"].ToString();
            }
        }
        //string ChnRegDocID = objmaster.WebConfigSettings("ChangeRegDetails");
        hdnclientNameFor.Value = objmaster.WebConfigSettings("ClientName");
        if (ChnRegDocID != "" && ChnRegDocID != null) { hdnChnRegDocID.Value = ChnRegDocID;/*.Split(',')[0];*/ }
        if (_dsgetdocper != null && _dsgetdocper.Tables[0].Rows.Count > 0)
        {
            if ((_dsgetdocper.Tables[0].Rows[0]["ACCESS_ADD"].ToString()) == "Y")
                chgregicon.Style.Add("display", "block");
            else
                chgregicon.Style.Add("display", "none");
        }
        else
        {
            chgregicon.Style.Add("display", "none");
        }
        System.Data.DataSet ds = null;//Docpermission.DocpermissionbyDocIdModid(64, 16);
        GetCorpCheckListPerm();
        if (OptFlag == "IP")
        {
            //prevadts.Style.Add("display", "block");
            //adtemergencydet.Style.Add("display", "block");
            clinicalflags.Style.Add("display", "block");
            regfacesheetrpt.Style.Add("display", "none");
            regcardrpt.Style.Add("display", "none");
        }
        else
        {
            //prevadts.Style.Add("display", "block");
            //adtemergencydet.Style.Add("display", "none");
            clinicalflags.Style.Add("display", "none");
            //if (ds.Tables[0].Rows.Count > 0)
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                if ((ds.Tables[0].Rows[0]["PRN_HEADER"].ToString()) == "Y")
                {
                    regfacesheetrpt.Style.Add("display", "block");
                    regcardrpt.Style.Add("display", "block");
                }
                else
                {
                    regfacesheetrpt.Style.Add("display", "none");
                    regcardrpt.Style.Add("display", "none");
                }
            }

        }

        //EzHms.Abstract.IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
        //DataSet _dsgetdocper1 = idocwiseper.GetAttributeDocPermissions(Convert.ToInt32(SessionHandler.UserID), 0, SessionHandler.DOCUMENT_ID);
        //if (_dsgetdocper1.Tables[0].Rows.Count > 0)
        //{
        //    hdnoptAddDisableAttr.Value = _dsgetdocper1.Tables[0].Rows[0]["ACCESS_ADD_DISABLE_ATTRIBUTES_NAME"].ToString();
        //    hdnoptauth_user.Value = _dsgetdocper1.Tables[0].Rows[0]["ACCESS_ADD_DISABLE_ATTRIBUTES"].ToString();
        //}
        hdnSrcDocFormCd.Value = SessionHandler.DOC_FORM_CD;
    }
    private void GetCorpCheckListPerm()
    {
        DataSet _dsgetdocper1 = null; //Docpermission.DocpermissionbyDocId(SessionHandler.DOCUMENT_ID);
        if (_dsgetdocper1 != null && _dsgetdocper1.Tables[0].Rows.Count > 0)
        {
            hdncorpupload.Value = _dsgetdocper1.Tables[0].Rows[0]["DMS_UPLOAD"].ToString();
            hdncorpdownload.Value = _dsgetdocper1.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString();
            hdncorpviewdownload.Value = _dsgetdocper1.Tables[0].Rows[0]["DMS_VIEW"].ToString();
        }
    }
    public void PatOptionControl(int ADMN_ID)
    {
        hdnOptAdmnID.Value = ADMN_ID.ToString();
    }
    [WebMethod]
    public static List<object> BindPatHistory(string _PatID, string _docID, string pageNum, string pageSize)
    {
        //EzHms.ModelEntity.ReceiptMasterCollection recpColl = new EzHms.ModelEntity.ReceiptMasterCollection();
        //EzHms.Services.ReceiptWebService intRecp = new EzHms.Services.ReceiptWebService();
        //recpColl = intRecp.GetPatientPreConsultationDetails(Convert.ToInt32(_PatID), Convert.ToInt32(_docID));
        //if (recpColl != null)
        //{
        //    List<object> _lst = new List<object>();
        //    _lst.Add(recpColl);
        //    _lst.Add(recpColl.Count);
        //    return _lst;
        //}
        //else
            return null;
    }
}