using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class EntityCollection : SortableCollectionBase
    {
        public int Add(ENTITY entity)
        {
            return List.Add(entity);
        }
        public ENTITY GetList(int Position)
        {
            return (ENTITY)InnerList[Position];
        }
        public EntityCollection()
        {
            base.SortObjectType=typeof(ENTITY);
        }
    }
}
