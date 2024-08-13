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
using EzHms.ModelEntity;


public partial class Private_FrontOffice_FOUserControls_DDLMultiSelection : System.Web.UI.UserControl
{

    public bool Enabled
    {
        set
        {
            MultiSelectDDL.Enabled = value;
        }

    }

    public int TabIndex
    {
        set { MultiSelectDDL.TabIndex = (short)value; }
        get { return MultiSelectDDL.TabIndex; }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        CheckBoxListExCtrl1.Attributes.Add("onclick", "readCheckBoxList('" +
                       CheckBoxListExCtrl1.ClientID + "','" + MultiSelectDDL.ClientID + "','" +
                       hf_checkBoxText.ClientID + "','" +
                       hf_checkBoxValue.ClientID + "','" + hf_checkBoxSelIndex.ClientID + "');");

    }

    //selected checkbox value
    public string sValue
    {
        get { return hf_checkBoxValue.Value; }
        set
        {
            string[] strArray;
            strArray = value.Split(",".ToCharArray());
            string chkBoxIndex = string.Empty;
            string chkBoxValue = string.Empty;
            string chkBoxText = string.Empty;

            if (strArray.Length > 0)
            {
                int result;
                foreach (string s in strArray)
                {
                    result = 0;
                    if (s != null && s != "0")
                    {
                        if (int.TryParse(s, out result))
                        {
                            CheckBoxListExCtrl1.Items[result - 1].Selected = true;

                            //index
                            if (chkBoxIndex.Length > 0)
                                chkBoxIndex += ", ";

                            chkBoxIndex += result.ToString();

                            //value
                            if (chkBoxValue.Length > 0)
                                chkBoxValue += ", ";

                            chkBoxValue += CheckBoxListExCtrl1.Items[result - 1].Value;

                            //text
                            if (chkBoxText.Length > 0)
                                chkBoxText += ", ";

                            chkBoxText += CheckBoxListExCtrl1.Items[result - 1].Text;

                        }
                    }
                }

                SetDropDownListText(chkBoxText);
                //SetToolTip(chkBoxText);
                hf_checkBoxSelIndex.Value = chkBoxIndex;
                hf_checkBoxText.Value = chkBoxText;
                hf_checkBoxValue.Value = chkBoxValue;
            }
        }
    }

    //selected checkbox text
    public string sText
    {
        get { return hf_checkBoxText.Value; }
    }

    public string Multi_Value
    {
        get { return hf_checkBoxValue.Value; }
        set
        {
            string[] strArray;
            strArray = value.Split(",".ToCharArray());
            string chkBoxIndex = string.Empty;
            string chkBoxValue = string.Empty;
            string chkBoxText = string.Empty;

            if (strArray.Length > 0)
            {
                int result;
                foreach (string s in strArray)
                {
                    result = 0;
                    if (s != null && s != "0")
                    {
                        if (int.TryParse(s, out result))
                        {
                            // CheckBoxListExCtrl1.Items[result - 1].Selected = true;


                            for (int i = 0; i < CheckBoxListExCtrl1.Items.Count; i++)
                            {
                                if (CheckBoxListExCtrl1.Items[i].Value == Convert.ToString(result))
                                {
                                    CheckBoxListExCtrl1.Items[i].Selected = true;
                                    //index
                                    if (chkBoxIndex.Length > 0)
                                        chkBoxIndex += ", ";

                                    chkBoxIndex += result.ToString();

                                    //value
                                    if (chkBoxValue.Length > 0)
                                        chkBoxValue += ", ";

                                    chkBoxValue += CheckBoxListExCtrl1.Items[i].Value;

                                    //text
                                    if (chkBoxText.Length > 0)
                                        chkBoxText += ", ";

                                    chkBoxText += CheckBoxListExCtrl1.Items[i].Text;
                                }
                            }


                        }
                    }
                }

                SetDropDownListText(chkBoxText);
                //SetToolTip(chkBoxText);
                hf_checkBoxSelIndex.Value = chkBoxIndex;
                hf_checkBoxText.Value = chkBoxText;
                hf_checkBoxValue.Value = chkBoxValue;
            }
        }
    }


    internal void SetDropDownListText(string txt)
    {
        MultiSelectDDL.Items.Clear();
        MultiSelectDDL.Items.Add(new ListItem(txt));
    }

    public void CreateCheckBoxTable(DataTable dt)
    {
        CheckBoxListExCtrl1.DataSource = dt;
        CheckBoxListExCtrl1.DataTextField = "METHOD_OF_COMMUNICATION_NAME";
        CheckBoxListExCtrl1.DataValueField = "METHOD_OF_COMMUNICATION_ID";
        CheckBoxListExCtrl1.DataBind();

        SetDropDownListText("--Select--");
    }

    public void CreateCheckBox()
    {
        CheckBoxListExCtrl1.DataSource = null;
        CheckBoxListExCtrl1.DataTextField = "Text";
        CheckBoxListExCtrl1.DataValueField = "Value";
        CheckBoxListExCtrl1.DataBind();

        SetDropDownListText("--Select--");
    }
    public void createlist()
    {
        CheckBoxListExCtrl1.DataSource = null;
        CheckBoxListExCtrl1.DataTextField = "ENTITY_VALUE_NAME";
        CheckBoxListExCtrl1.DataValueField = "ENTITY_VALUE_ID";
        CheckBoxListExCtrl1.DataBind();

        SetDropDownListText("--Select--");

    }
    public void CreateEmrgncyAtndtsCheckBox()
    {
        CheckBoxListExCtrl1.DataSource = null;
        CheckBoxListExCtrl1.DataTextField = "NAME";
        CheckBoxListExCtrl1.DataValueField = "ADMN_EC_ID";
        CheckBoxListExCtrl1.DataBind();

        SetDropDownListText("--Select--");
    }
    public void CreateAdjesmentCodeTable(DataTable dt)
    {
        CheckBoxListExCtrl1.DataSource = dt;
        CheckBoxListExCtrl1.DataTextField = "ASSESMENT_ADJUSTMENT_CODES_NAME";
        CheckBoxListExCtrl1.DataValueField = "ASSESMENT_ADJUSTMENT_CODES_ID";
        CheckBoxListExCtrl1.DataBind();
        SetDropDownListText("--Select--");
    }
}
