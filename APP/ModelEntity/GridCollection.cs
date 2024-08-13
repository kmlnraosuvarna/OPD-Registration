using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class GridCollection : SortableCollectionBase
    {
        public int Add(Grid _billh)
        {
            return List.Add(_billh);
        }

        public Grid GetList(int position)
        {
            return (Grid)InnerList[position];
        }
    }
}
