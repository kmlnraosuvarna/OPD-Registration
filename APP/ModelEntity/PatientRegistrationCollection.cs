using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class PatientRegistrationCollection : SortableCollectionBase
    {
        public PatientRegistrationCollection()
        {
            base.SortObjectType = typeof(PatientRegistration);
        }

        public int Add(ListElements _element)
        {
            return List.Add(_element);
        }
        public int Add(Patient _patient)
        {
            return List.Add(_patient);
        }



        public int Add(PatientAddress _pAddress)
        {
            return List.Add(_pAddress);
        }
        public int Add(PatientRegistration _pat)
        {
            return List.Add(_pat);
        }
        public int Add(CollectionBase _collection)
        {
            return List.Add(_collection);
        }
        public KitReturn GetListKR(int position)
        {
            return (KitReturn)InnerList[position];
        }
        //for vacc master
        public PatientRegistration GetListp(int position)
        {
            return (PatientRegistration)InnerList[position];
        }



        public int Add(SHIFT_HANDOVER Trns)
        {
            return List.Add(Trns);
        }

        public SHIFT_HANDOVER GetListSHIFT_HANDOVER(int position)
        {
            return (SHIFT_HANDOVER)InnerList[position];
        }

        public int Add(Transport Trns)
        {
            return List.Add(Trns);
        }

        public Transport GetListTrns(int position)
        {
            return (Transport)InnerList[position];
        }
        public int Add(KitUsage KU)
        {
            return List.Add(KU);
        }

        public KitUsage GetListKitUsage(int position)
        {
            return (KitUsage)InnerList[position];
        }

        public int Add(ReferalMaster rfrl)
        {
            return List.Add(rfrl);
        }

        public object GetObject(int index)
        {
            if (InnerList.Count >= index)
                return InnerList[index];
            return null;
        }
        public PatientAddress GetList(int position)
        {
            return (PatientAddress)InnerList[position];
        }

        public ReferalMaster GetReferalList(int position)
        {
            return (ReferalMaster)InnerList[position];
        }
        public PatientRegistrationCollection Filter(string umrNo)
        {
            PatientRegistrationCollection _filterColl = new PatientRegistrationCollection();
            foreach (PatientRegistration _pat in InnerList)
            {
                if (_pat.UMR_NO.Equals(umrNo))
                {
                    _filterColl.Add(_pat);
                }
            }
            return _filterColl;
        }
        public Employer GetListEmp(int position)
        {
            return (Employer)InnerList[position];
        }
        public PatientRegistration GetInnerList(int position)
        {
            return (PatientRegistration)InnerList[position];
        }
        public MedicalRecordMaintenaceCollection GetDetails(int position)
        {
            return (MedicalRecordMaintenaceCollection)InnerList[position];
        }


        public RackMaster GetRackMasterMaster(int position)
        {
            return (RackMaster)InnerList[position];
        }
        public RackFileEntry GetRackFileMaster(int position)
        {
            return (RackFileEntry)InnerList[position];
        }
        public PatientRegistrationCollection Filterbynurseid(int nuseid)
        {
            PatientRegistrationCollection _filterColl = new PatientRegistrationCollection();
            foreach (PatientRegistration _pat in InnerList)
            {
                if (_pat.NURSE_STATION_ID.Equals(nuseid))
                {
                    _filterColl.Add(_pat);
                }
            }
            return _filterColl;
        }




        public PatientRegistrationCollection FilterByAdmNo(string AdmnNo)
        {
            PatientRegistrationCollection _filterColl = new PatientRegistrationCollection();
            foreach (PatientRegistration _pat in InnerList)
            {
                if (_pat.ADMN_NO.Equals(AdmnNo))
                {
                    _filterColl.Add(_pat);
                }
            }
            return _filterColl;
        }
        public LocationMaster GetListLocationMaster(int position)
        {
            return (LocationMaster)InnerList[position];
        }


        private string _Emplookup;

        public string Emplookup
        {
            get { return _Emplookup; }
            set { _Emplookup = value; }
        }
    }



}
