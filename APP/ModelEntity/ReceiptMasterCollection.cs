using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ReceiptMasterCollection : SortableCollectionBase
    {
        public ReceiptMasterCollection()
        {
            base.SortObjectType = typeof(ReceiptMaster);
        }
        public int Add(ReceiptMaster recpMaster)
        {
            return List.Add(recpMaster);
        }
        public ReceiptMaster GetList(int position)
        {
            return (ReceiptMaster)InnerList[position];
        }

        public ReceiptMasterCollection Filter(string billid)
        {
            //ReceiptMasterCollection recColl = new ReceiptMasterCollection();
            //if (List.Count > 0)
            //{
            //    List<ReceiptMaster> collection = GetCollection();

            //    foreach (ReceiptMaster recmaster in collection)
            //    {
            //        if (recmaster.BILL_ID.ToString() == billid)
            //            List.Add(recmaster);
            //        recColl.Add(List);
            //    }

            //}
            //return recColl;

            if (List.Count > 0)
            {
                List<ReceiptMaster> collection = GetCollection();
                IList<ReceiptMaster> filterValues = null;
                filterValues = collection.FindAll(ReceiptMaster => ReceiptMaster.BILL_ID.Equals(billid));
                ReceiptMasterCollection recColl = new ReceiptMasterCollection();
                foreach (ReceiptMaster rec in filterValues)
                {
                    recColl.Add(rec);

                }
                return recColl;
            }
            return null;
        }

        private List<ReceiptMaster> GetCollection()
        {
            List<ReceiptMaster> recmaster = new List<ReceiptMaster>();
            for (int i = 0; i < List.Count; i++)
            {
                recmaster.Add((ReceiptMaster)InnerList[i]);
            }
            return recmaster;
        }

        public int Add(TransactionMaster transMaster)
        {
            return List.Add(transMaster);
        }

        public TransactionMaster Getlist(int position)
        {
            return (TransactionMaster)InnerList[position];
        }

    }
}
