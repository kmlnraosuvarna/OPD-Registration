using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class Dimensions :ServiceDimenssion
    {
        public Dimensions()
        { }

        private string _tariff = string.Empty;
        public string Tariff 
        {
            get 
            {
                return _tariff; 
            }
            set
            {
                _tariff = value;
            }
        }

        private string _service = string.Empty;
        public string Service
        {
            get
            {
                return _service;
            }
            set
            {
                _service = value;
            }
        }
        private string _doctor = string.Empty;
        public string Doctor
        {
            get
            {
                return _doctor;
            }
            set
            {
                _doctor = value;
            }
        }

        private string _consultation = string.Empty;
        public string Consultation
        {
            get
            {
                return _consultation;
            }
            set
            {
                _consultation = value;
            }
        }
        private string _wardGroup = string.Empty;
        public string WardGroup
        {
            get
            {
                return _wardGroup;
            }
            set
            {
                _wardGroup = value;
            }
        }
        private string _priceLevel = string.Empty;
        public string PriceLevel
        {
            get
            {
                return _priceLevel;
            }
            set
            {
                _priceLevel = value;
            }
        }
        private string _facility = string.Empty;
        public string Facility
        {
            get
            {
                return _facility;
            }
            set
            {
                _facility = value;
            }
        }
        private string _ward = string.Empty;
        public string Ward
        {
            get
            {
                return _ward;
            }
            set
            {
                _ward = value;
            }
        }
        private string _surgery = string.Empty;
        public string Surgery
        {
            get
            {
                return _surgery;
            }
            set
            {
                _surgery = value;
            }
        }

        private string _surgeryClass = string.Empty;
        public string SurgeryClass
        {
            get
            {
                return _surgeryClass;
            }
            set
            {
                _surgeryClass = value;
            }
        }

        private string _department = string.Empty;
        public string Department
        {
            get
            {
                return _department;
            }
            set
            {
                _department = value;
            }
        }

        private string _bedType = string.Empty;
        public string BedType
        {
            get
            {
                return _bedType;
            }
            set
            {
                _bedType = value;
            }
        }

        private string _coverage = string.Empty;
        public string Coverage
        {
            get
            {
                return _coverage;
            }
            set
            {
                _coverage = value;
            }
        }

    }
}
