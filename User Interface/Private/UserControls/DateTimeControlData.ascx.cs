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

public partial class Private_UserControls_DateTimeControl : webuser
{
    protected void Page_Load(object sender, EventArgs e)
    { 
        if (!IsPostBack)
        {
            txtfromdate.Text =ClientTime.ToString("dd-MMM-yyyy HH:MM tt");
            txttodate.Text = ClientTime.ToString("dd-MMM-yyyy HH:MM tt");
            gettimeampm();
            bindpm();
        }
    }
    private void gettimeampm()
    {
        DataTable dt = new DataTable();
        dt.Columns.Add("Id");
        
        for (int i = 1; i <= 12; i++)
        {
            for (int j = 10; j <= 50; j = j + 10)
            {
                DataRow dr = dt.NewRow();
                dr["Id"] = i + " :" + j + " " + "am";
                dt.Rows.Add(dr);
            }
        }
        dttime.DataSource = dt;
        dttime.DataBind();
        DataList2.DataSource = dt;
        DataList2.DataBind();
    }
    protected void bindpm()
    {
        DataTable dt1 = new DataTable();
        dt1.Columns.Add("Id");
        for (int i = 1; i <= 12; i++)
        {
            for (int j = 10; j <= 50; j = j + 10)
            {
                DataRow dr1 = dt1.NewRow();
                dr1["Id"] = i + " :" + j + " " + "pm";
                dt1.Rows.Add(dr1);
            }
        }

        DataList1.DataSource = dt1;
        DataList1.DataBind();
        DataList3.DataSource = dt1;
        DataList3.DataBind();
    }
    protected void dttime_ItemDataBound(object sender, DataListItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.AlternatingItem || e.Item.ItemType == ListItemType.Item)
        {
            Label l1 = e.Item.FindControl("lblkey") as Label;
            l1.Attributes.Add("onclick", "assigntime('" + l1.Text + "')");
        }
    }
    protected void DataList1_ItemDataBound(object sender, DataListItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.AlternatingItem || e.Item.ItemType == ListItemType.Item)
        {
            Label l1 = e.Item.FindControl("lblkey") as Label;
            l1.Attributes.Add("onclick", "assigntime('" + l1.Text + "')");
        }
    }
    protected void DataList2_ItemDataBound(object sender, DataListItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.AlternatingItem || e.Item.ItemType == ListItemType.Item)
        {
            Label l1 = e.Item.FindControl("lblkey") as Label;
            l1.Attributes.Add("onclick", "assignamandpm('" + l1.Text + "')");
        }
    }
    protected void DataList3_ItemDataBound(object sender, DataListItemEventArgs e)
    {
        if (e.Item.ItemType == ListItemType.AlternatingItem || e.Item.ItemType == ListItemType.Item)
        {
            Label l1 = e.Item.FindControl("lblkey") as Label;
            l1.Attributes.Add("onclick", "assignamandpm('" + l1.Text + "')");
        }
    }
    public string Fromdate
    {
        get
        {
            return txtfromdate.Text;
        }
        set
        {
            txtfromdate.Text = value;
        }
    }
    public string Todate
    {
        get
        {
            return txttodate.Text;
        }
        set
        {
            txttodate.Text = value;
        }
    }
}
