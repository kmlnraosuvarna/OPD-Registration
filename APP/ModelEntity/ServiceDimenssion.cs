using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class ServiceDimenssion : ServicePrice
    {
        private int _doctor_id = 0;
        public int DOCTOR_ID
        {
            set { _doctor_id = value; }
            get { return _doctor_id; }
        }
        private int _doctor_seq_id = 0;
        public int DOCTOR_SEQ_ID
        {
            set { _doctor_seq_id = value; }
            get { return _doctor_seq_id; }
        }
     
        private int _tariff_seq_id = 0;
        public int TARIFF_SEQ_ID
        {
            set { _tariff_seq_id = value; }
            get { return _tariff_seq_id; }
        }
        private int _tariff_id = 0;
        public int TARIFF_ID
        {
            set { _tariff_id = value; }
            get { return _tariff_id; }
        }
        private int _consultation_type_id = 0;
        public int CONSULTATION_TYPE_ID
        {
            set { _consultation_type_id = value; }
            get { return _consultation_type_id; }
        }
        private int _consultation_type_seq_id = 0;
        public int CONSULTATION_TYPE_SEQ_ID
        {
            set { _consultation_type_seq_id = value; }
            get { return _consultation_type_seq_id; }
        }
        private int _ward_group_seq_id = 0;
        public int WARD_GROUP_SEQ_ID
        {
            set { _ward_group_seq_id = value; }
            get { return _ward_group_seq_id; }
        }
        private int _ward_group_id = 0;
        public int WARD_GROUP_ID
        {
            set { _ward_group_id = value; }
            get { return _ward_group_id; }
        }

        private int _general_ward_group_seq_id = 0;
        public int GENERAL_WARD_GROUP_SEQ_ID
        {
            set { _general_ward_group_seq_id = value; }
            get { return _general_ward_group_seq_id; }
        }
        private int _general_ward_group_id = 0;
        public int GENERAL_WARD_GROUP_ID
        {
            set { _general_ward_group_id = value; }
            get { return _general_ward_group_id; }
        }

        private int _price_level_id = 0;
        public int PRICE_LEVEL_ID
        {
            set { _price_level_id = value; }
            get { return _price_level_id; }
        }
        private int _price_level_seq_id = 0;
        public int PRICE_LEVEL_SEQ_ID
        {
            set { _price_level_seq_id = value; }
            get { return _price_level_seq_id; }
        }

        private int _price_class_id = 0;
        public int PRICE_CLASS_ID
        {
            set { _price_class_id = value; }
            get { return _price_class_id; }
        }
        private int _price_class_seq_id = 0;
        public int PRICE_CLASS_SEQ_ID
        {
            set { _price_class_seq_id = value; }
            get { return _price_class_seq_id; }
        }
        private int _facility_id = 0;
        public int FACILITY_ID
        {
            set { _facility_id = value; }
            get { return _facility_id; }
        }
        private int _facility_seq_id = 0;
        public int FACILITY_SEQ_ID
        {
            set { _facility_seq_id = value; }
            get { return _facility_seq_id; }
        }
        private int _ward_seq_id = 0;
        public int WARD_SEQ_ID
        {
            set { _ward_seq_id = value; }
            get { return _ward_seq_id; }
        }
        private int _ward_id = 0;
        public int WARD_ID
        {
            set { _ward_id = value; }
            get { return _ward_id; }
        }
        private int _surgery_category_id = 0;
        public int SURGERY_CATEGORY_ID
        {
            set { _surgery_category_id = value; }
            get { return _surgery_category_id; }
        }
        private int _surgery_category_seq_id = 0;
        public int SURGERY_CATEGORY_SEQ_ID
        {
            set { _surgery_category_seq_id = value; }
            get { return _surgery_category_seq_id; }
        }
        private int _surgery_class_id = 0;
        public int SURGERY_CLASS_ID
        {
            set { _surgery_class_id = value; }
            get { return _surgery_class_id; }
        }
        private int _surgery_class_seq_id = 0;
        public int SURGERY_CLASS_SEQ_ID
        {
            set { _surgery_class_seq_id = value; }
            get { return _surgery_class_seq_id; }
        }
        private int _department_id = 0;
        public int DEPARTMENT_ID
        {
            set { _department_id = value; }
            get { return _department_id; }
        }
        private int _department_seq_id = 0;
        public int DEPARTMENT_SEQ_ID
        {
            set { _department_seq_id = value; }
            get { return _department_seq_id; }
        }
        private int _bed_type_id = 0;
        public int BED_TYPE_ID
        {
            set { _bed_type_id = value; }
            get { return _bed_type_id; }
        }
        private int _bed_type_seq_id = 0;
        public int BED_TYPE_SEQ_ID
        {
            set { _bed_type_seq_id = value; }
            get { return _bed_type_seq_id; }
        }
        private int _coverage_id = 0;
        public int COVERAGE_ID
        {
            set { _coverage_id = value; }
            get { return _coverage_id; }
        }
        private int _coverage_seq_id = 0;
        public int COVERAGE_SEQ_ID
        {
            set { _coverage_seq_id = value; }
            get { return _coverage_seq_id; }
        }
    }
}
