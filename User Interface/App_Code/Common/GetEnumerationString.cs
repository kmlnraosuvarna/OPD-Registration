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
/// Summary description for GetEnumerationString
/// </summary>
public static class GetEnumerationString
{
	
    public static string GetEnumDescription(Enum value)
    {
        System.Reflection.FieldInfo fi = value.GetType().GetField(value.ToString().Trim());

        System.ComponentModel.DescriptionAttribute[] attributes =
            (System.ComponentModel.DescriptionAttribute[])fi.GetCustomAttributes(
            typeof(System.ComponentModel.DescriptionAttribute),
            false);

        if (attributes != null &&
            attributes.Length > 0)
            return attributes[0].Description;
        else
            return value.ToString();
    }
}
