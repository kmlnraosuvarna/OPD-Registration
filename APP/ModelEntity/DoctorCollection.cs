using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class DoctorCollection : SortableCollectionBase
    {
       public int Add(DoctorMaster doctormaster)
       {
           return List.Add(doctormaster);
       }

       public int Add(DOCTOR _doctor)
       {
           return List.Add(_doctor);
       }
       public DoctorMaster GetList(int Position)
       {
           return (DoctorMaster)InnerList[Position];
       }
       public DOCTOR GetDocList(int Position)
       {
           return (DOCTOR)InnerList[Position];
       }
       public object GetObject(int index)
       {
           if (InnerList.Count >= index)
               return InnerList[index];
           return null;
       }
    }
}
