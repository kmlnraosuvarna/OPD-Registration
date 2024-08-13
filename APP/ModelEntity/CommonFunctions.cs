using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
namespace EzHms.ModelEntity
{
    public class CommonFunctions
    {
        public static string[] Get_ID(string _values)
        {
            string[] id = new string[2];
            if (!string.IsNullOrEmpty(_values))
            {
                id = _values.Split('-');
            }
            return id;
        }

        public static string[] Get_ID(object _values)
        {
            if (_values == null)
                return null;

            string vals = _values.ToString();
            if (_values.ToString().IndexOf("-") == 0)
            {
                _values = _values.ToString() + "-" + _values.ToString();
            }
            string[] id = new string[2];
            id = _values.ToString().Split('-');
            return id;
        }
 


        //private ICacheManager _pOptionCache = null;
        //private void Add_Data_ToCache(string cacheManagerName, CollectionBase _valueAddToCache)
        //{
        //    _pOptionCache.Add(cacheManagerName, _valueAddToCache, CacheItemPriority.Normal, null, new SlidingTime(TimeSpan.FromMinutes(20)));
        //}
    }
}
