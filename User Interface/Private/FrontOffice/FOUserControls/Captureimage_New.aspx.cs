using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Private_FrontOffice_FOUserControls_Captureimage_New : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        MasterClass obj3 = new MasterClass();
        hdnShowWebCam.Value = obj3.WebConfigSettings("ShowWebCam");
    }
    protected void btnsave_Click(object sender, EventArgs e)
    {

    }
}