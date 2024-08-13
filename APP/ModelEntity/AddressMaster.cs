using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class AddressMaster
    {



        private int _address_id;
        public int ADDRESS_ID
        {
            set { _address_id = value; }
            get { return _address_id; }
        }
        private int _address_rev_no;
        public int ADDRESS_REV_NO
        {
            set { _address_rev_no = value; }
            get { return _address_rev_no; }
        }
        private string _address1;
        public string ADDRESS1
        {
            set { _address1 = value; }
            get { return _address1; }
        }
        private string _address2;
        public string ADDRESS2
        {
            set { _address2 = value; }
            get { return _address2; }
        }
        private int _area_id;
        public int AREA_ID
        {
            set { _area_id = value; }
            get { return _area_id; }
        }
        private int _area_rev_no;
        public int AREA_REV_NO
        {
            set { _area_rev_no = value; }
            get { return _area_rev_no; }
        }
        private int _city_id;
        public int CITY_ID
        {
            set { _city_id = value; }
            get { return _city_id; }
        }
        private int _city_rev_no;
        public int CITY_REV_NO
        {
            set { _city_rev_no = value; }
            get { return _city_rev_no; }
        }
        private int _state_id;
        public int STATE_ID
        {
            set { _state_id = value; }
            get { return _state_id; }
        }
        private int _state_rev_no;
        public int STATE_REV_NO
        {
            set { _state_rev_no = value; }
            get { return _state_rev_no; }
        }
        private int _country_id;
        public int COUNTRY_ID
        {
            set { _country_id = value; }
            get { return _country_id; }
        }
        private int _country_rev_no;
        public int COUNTRY_REV_NO
        {
            set { _country_rev_no = value; }
            get { return _country_rev_no; }
        }
        private string _office_phone;
        public string OFFICE_PHONE
        {
            set { _office_phone = value; }
            get { return _office_phone; }
        }
        private string _home_phone;
        public string HOME_PHONE
        {
            set { _home_phone = value; }
            get { return _home_phone; }
        }
        private string _mobile_phone;
        public string MOBILE_PHONE
        {
            set { _mobile_phone = value; }
            get { return _mobile_phone; }
        }
        private string _fax_number;
        public string FAX_NUMBER
        {
            set { _fax_number = value; }
            get { return _fax_number; }
        }
        private string _fax2;
        public string FAX2
        {
            set { _fax2 = value; }
            get { return _fax2; }
        }
        private string _website_url;
        public string WEBSITE_URL
        {
            set { _website_url = value; }
            get { return _website_url; }
        }
        private string _website_url2;
        public string WEBSITE_URL2
        {
            set { _website_url2 = value; }
            get { return _website_url2; }
        }
        private string _website_url3;
        public string WEBSITE_URL3
        {
            set { _website_url3 = value; }
            get { return _website_url3; }
        }
        private string _email_id;
        public string EMAIL_ID
        {
            set { _email_id = value; }
            get { return _email_id; }
        }
        private string _zipcode;
        public string ZIPCODE
        {
            set { _zipcode = value; }
            get { return _zipcode; }
        }
        private int _addr_type_id;
        public int ADDR_TYPE_ID
        {
            set { _addr_type_id = value; }
            get { return _addr_type_id; }
        }
        private int _addr_type_rev_no;
        public int ADDR_TYPE_REV_NO
        {
            set { _addr_type_rev_no = value; }
            get { return _addr_type_rev_no; }
        }
        private int _addr_grp_id;
        public int ADDR_GRP_ID
        {
            set { _addr_grp_id = value; }
            get { return _addr_grp_id; }
        }
        private int _addr_grp_rev_no;
        public int ADDR_GRP_REV_NO
        {
            set { _addr_grp_rev_no = value; }
            get { return _addr_grp_rev_no; }
        }
        private int _reference_type_id;
        public int REFERENCE_TYPE_ID
        {
            set { _reference_type_id = value; }
            get { return _reference_type_id; }
        }
        private int _reference_type_rev_no;
        public int REFERENCE_TYPE_REV_NO
        {
            set { _reference_type_rev_no = value; }
            get { return _reference_type_rev_no; }
        }
        private int _reference_id;
        public int REFERENCE_ID
        {
            set { _reference_id = value; }
            get { return _reference_id; }
        }
        private int _reference_rev_no;
        public int REFERENCE_REV_NO
        {
            set { _reference_rev_no = value; }
            get { return _reference_rev_no; }
        }
        private string   _create_by;
        public string CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
        }
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private string _modify_by;
        public string MODIFY_BY
        {
            set { _modify_by = value; }
            get { return _modify_by; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private string _is_shink;
        public string IS_SHINK
        {
            set { _is_shink = value; }
            get { return _is_shink; }
        }
        private string area_name;

        public string AREA_NAME
        {
            get { return area_name; }
            set { area_name = value; }
        }
        private string city_name;

        public string CITY_NAME
        {
            get { return city_name; }
            set { city_name = value; }
        }
        private string state_name;

        public string STATE_NAME
        {
            get { return state_name; }
            set { state_name = value; }
        }
        private string country_name;

        public string COUNTRY_NAME
        {
            get { return country_name; }
            set { country_name = value; }
        }
        private string address_type_name;

        public string ADDRESS_TYPE_NAME
        {
            get { return address_type_name; }
            set { address_type_name = value; }
        }
        private int location_id;

        public int LOCATION_ID
        {
            get { return location_id; }
            set { location_id = value; }
        }
        private string location_name;

        public string LOCATION_NAME
        {
            get { return location_name; }
            set { location_name = value; }
        }
        private int location_rev_no;

        public int LOCATION_REV_NO
        {
            get { return location_rev_no; }
            set { location_rev_no = value; }
        }
        private int image_id;

        public int IMAGE_ID
        {
            get { return image_id; }
            set { image_id = value; }
        }
        private int image_rev_no;

        public int IMAGE_REV_NO
        {
            get { return image_rev_no; }
            set { image_rev_no = value; }
        }

        private string image_url;

        public string IMAGE_URL
        {
            get { return image_url; }
            set { image_url = value; }

        }

        private int _DISTRICT_ID;

        public int DISTRICT_ID
        {
            get { return _DISTRICT_ID; }
            set { _DISTRICT_ID = value; }
        }
    }
}


