using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for TabIndex
/// </summary>
public class TabIndex
{
   static int controlTabIndex = 0;
    public static void SetTabIndex(Control c)
    {
        foreach (Control c1 in c.Controls)
        {
            if (c1.HasControls())
            {
                SetTabIndex(c1);
            }
            if (c1 is TextBox)
            {
                ((TextBox)c1).TabIndex = (short)controlTabIndex++;
                ((TextBox)c1).Attributes.Add("onkeydown", "convertEnterToTab(event);");
            }
            if (c1 is DropDownList)
            {
                ((DropDownList)c1).TabIndex = (short)controlTabIndex++;
                ((DropDownList)c1).Attributes.Add("onkeydown", "convertEnterToTab(event);");
            }
            if (c1 is CheckBox)
            {
                ((CheckBox)c1).TabIndex = (short)controlTabIndex++;
                ((CheckBox)c1).Attributes.Add("onkeydown", "convertEnterToTab(event);");
            }
            if (c1 is RadioButton)
            {
                ((RadioButton)c1).TabIndex = (short)controlTabIndex++;
                ((RadioButton)c1).Attributes.Add("onkeydown", "convertEnterToTab(event);");
            }
            if (c1 is RadioButtonList)
            {
                //foreach (ListItem li in RadioButtonList.Items)
                //{
                //    li.Attributes.Add("tabindex", (short)controlTabIndex++);
                //    counter -= 1;
                //} 
                ((RadioButtonList)c1).TabIndex = (short)controlTabIndex++;
                ((RadioButtonList)c1).Attributes.Add("onkeydown", "convertEnterToTab(event);");
            }
            //if (c1 is AjaxControlToolkit.ComboBox)
            //{
            //    ((AjaxControlToolkit.ComboBox)c1).TabIndex = (short)controlTabIndex++;
            //    ((AjaxControlToolkit.ComboBox)c1).Attributes.Add("onkeydown", "convertEnterToTab(event);");
            //}

        }

    }

}

public class CustomGridview : GridView,System.Web.UI.ITemplate
{
    public CustomGridview()
    { 

    }

    public void InstantiateIn(System.Web.UI.Control container)
    {

    }
}
