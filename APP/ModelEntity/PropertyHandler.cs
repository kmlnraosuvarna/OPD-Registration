using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;

namespace EzHms.ModelEntity
{
    public class PropertyHandler
    {
        //private static 
        public static string StartNode()
        {
            return "<root>";
        }

        public static string EndNode()
        {
            return "</root>";
        }

        public static StringBuilder CreateXmlData(object _object)
        {
            PropertyInfo[] properties = _object.GetType().GetProperties();
            StringBuilder xml = new StringBuilder();
            xml.Append("<"+ _object.GetType().Name);
            foreach(PropertyInfo property in properties)
            {
                xml.Append(" " + property.Name + "= \"" + property.GetValue(_object, null) + "\"");
            }
            xml.Append("/>");
            return xml;
        }

        public static StringBuilder AddAttributes(object _object)
        {
            PropertyInfo[] properties = _object.GetType().GetProperties();
            StringBuilder xml = new StringBuilder();
            //xml.Append("<" + _object.GetType().Name);
            foreach (PropertyInfo property in properties)
            {
                xml.Append(" " + property.Name + "= \"" + property.GetValue(_object, null) + "\"");
               
            }
            //xml.Append("/>");
            return xml;
        }

        //public static StringBuilder RemoveAttributes(obje)
        //{
        //    PropertyInfo[] properties = _object.GetType().GetProperties();
        //    StringBuilder xml = new StringBuilder();
        //    //xml.Append("<" + _object.GetType().Name);
        //    foreach (PropertyInfo property in properties)
        //    {
        //        xml.Append(" " + property.Name + "= \"" + property.GetValue(_object, null) + "\"");
        //        xml.Remove(

        //    }
        //    //xml.Append("/>");
        //    return xml;
        //}
       
    }
}
