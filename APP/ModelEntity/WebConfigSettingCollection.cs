using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class WebConfigSettingCollection : SortableCollectionBase
    {
        public int Add(WebConfigSetting WebCnfg)
        {
            return List.Add(WebCnfg);
        }
        public WebConfigSetting Getlist(int position)
        {
            return (WebConfigSetting)InnerList[position];
        }
    }
}
