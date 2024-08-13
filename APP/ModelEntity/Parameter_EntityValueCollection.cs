using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Parameter_EntityValueCollection : SortableCollectionBase
    {
        public int Add(Parameter_EntityValue _pEntityValue)
        {
            return List.Add(_pEntityValue);
        }

        public Parameter_EntityValueCollection Filter(Parameter_Entity _pEntityValue)
        {
            Parameter_EntityValueCollection _eValCollection = new Parameter_EntityValueCollection();
            if (List.Count > 0)
            {
                List<Parameter_EntityValue> collection = GetCollection();
                IList<Parameter_EntityValue> filterValues = null;
                //List.Clear();
                filterValues = collection.FindAll(Parameter_EntityValue => Parameter_EntityValue.ENTITY_ID.Equals(Convert.ToInt32(_pEntityValue).ToString()));
                foreach (Parameter_EntityValue cPreSettings in filterValues)
                {
                    //List.Add(cPreSettings);
                    _eValCollection.Add(cPreSettings);
                }
                return _eValCollection;
            }
            return null;
        }

        private List<Parameter_EntityValue> GetCollection()
        {
            List<Parameter_EntityValue> pEntityValue = new List<Parameter_EntityValue>();
            for (int i = 0; i < List.Count; i++)
            {
                pEntityValue.Add((EzHms.ModelEntity.Parameter_EntityValue)InnerList[i]);
            }
            return pEntityValue;
        }
    }
}
