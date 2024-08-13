using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class WardGroup
    {
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }

        private int _Ward_Group_Id;
        private string _Ward_Group_Cd;
        private string _Ward_Group_Desc;


        private int _service_Id;

        public int SERVICE_ID
        {
            get { return _service_Id; }
            set { _service_Id = value; }
        }

        private int _ser_Group_ID;

        public int SERVICE_GROUP_ID
        {
            get { return _ser_Group_ID; }
            set { _ser_Group_ID = value; }
        }


        private int _service_type_id;
        public int SERVICE_TYPE_ID
        {
            set { _service_type_id = value; }
            get { return _service_type_id; }
        }

        public string Ward_Group_Desc
        {
            get { return _Ward_Group_Desc; }
            set { _Ward_Group_Desc = value; }
        }

        public string Ward_Group_Cd
        {
            get { return _Ward_Group_Cd; }
            set { _Ward_Group_Cd = value; }
        }


        public int Ward_Group_Id
        {
            get { return _Ward_Group_Id; }
            set { _Ward_Group_Id = value; }
        }

        private string _Ward_Group_Ids;
        public string Ward_Group_Ids
        {
            get { return _Ward_Group_Ids; }
            set { _Ward_Group_Ids = value; }
        }

        private int _GENERAL_WARD_GROUP_REV_NO;
        public int GENERAL_WARD_GROUP_REV_NO
        {
            get { return _GENERAL_WARD_GROUP_REV_NO; }
            set { _GENERAL_WARD_GROUP_REV_NO = value; }
        }
        private int _TARIFF_ID;
        public int TARIFF_ID
        {
            get { return _TARIFF_ID; }
            set { _TARIFF_ID = value; }
        }
        private int _GENERAL_WARD_GROUP_ID;
        public int GENERAL_WARD_GROUP_ID
        {
            get { return _GENERAL_WARD_GROUP_ID; }
            set { _GENERAL_WARD_GROUP_ID = value; }
        }
        private CollectionBase _WardGrpCollection;
        public CollectionBase WardGrpCollection
        {
            get { return _WardGrpCollection; }
            set { _WardGrpCollection = value; }
        }
        private string _ward_group_id;

        public string WARD_GROUP_ID
        {
            get { return _ward_group_id; }
            set { _ward_group_id = value; }
        }
        private string _gerneral_tariff_wgid;

        public string GENERAL_TARIFF_WARD_GROUP_ID
        {
            get { return _gerneral_tariff_wgid; }
            set { _gerneral_tariff_wgid = value; }
        }

        private int doctor_id;

        public int DOCTOR_ID
        {
            get { return doctor_id; }
            set { doctor_id = value; }
        }
        private string ward_group_name;

        public string WARD_GROUP_NAME
        {
            get { return ward_group_name; }
            set { ward_group_name = value; }
        }
        private string _value = string.Empty;
        public string VALUE
        {
            get
            {
                return _value;
            }
            set
            {
                _value = value;
            }
        }
        private string is_reference;

        public string IS_REFERENCE
        {
            get { return is_reference; }
            set { is_reference = value; }
        }
        private string ward_group_per;

        public string WARD_GROUP_PER
        {
            get { return ward_group_per; }
            set { ward_group_per = value; }
        }

    }
}
