using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.DataAccessObject;
using System.Collections;
using EzHms.ModelEntity;

namespace EzHms.BusinessObject
{
   public class ENTITYBO
    {
       public CollectionBase GetAllEntitybo(string prefix)
       {
           DBENTITY obj = new DBENTITY();
           return obj.GetAllEntitts(prefix);
       
       }
       public CollectionBase GetAllEntityValueBo(int Entityid)
       {
           DBENTITY OBJ = new DBENTITY();
           return OBJ.GetAllEntityValues(Entityid);
       }
       public List<ListElements> GetAutoComp_Entity(string prefixText, string contextKey)
       {
           DBENTITY OBJ = new DBENTITY();
           return OBJ.GetAutoComp_Entity(prefixText, contextKey);
       }
       public bool Save_Entity(ENTITY objenty, out int output)
       {
           DBENTITY OBJ = new DBENTITY();
           return OBJ.Save_Entity(objenty, out output);
       }
       public bool SaveSortOrdersxml(ENTITY objnew, out int output)
       {
           DBENTITY objentyval = new DBENTITY();
           return objentyval.SaveSortOrdersxml(objnew,out output);

       }
    }
}
