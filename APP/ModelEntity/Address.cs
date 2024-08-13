using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    /// <summary>
    /// 
    /// </summary>
    /// <remarks></remarks>
    [Serializable]
    public  class Address 
    {
        /// <summary>
        /// 
        /// </summary>
        private string _FacilityID;

        /// <summary>
        /// Gets or sets the facility ID.
        /// </summary>
        /// <value>The facility ID.</value>
        /// <remarks></remarks>
        public string FacilityID
        {
            get { return _FacilityID; }
            set { _FacilityID = value; }
        }


        /// <summary>
        /// 
        /// </summary>
        private int _area_id;

        /// <summary>
        /// Gets or sets the ARE a_ ID.
        /// </summary>
        /// <value>The ARE a_ ID.</value>
        /// <remarks></remarks>
        public int AREA_ID
        { 
            get { return _area_id; }
            set { _area_id = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int _city_id;

        /// <summary>
        /// Gets or sets the CIT y_ ID.
        /// </summary>
        /// <value>The CIT y_ ID.</value>
        /// <remarks></remarks>
        public int CITY_ID
        {
            get { return _city_id; }
            set { _city_id = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int _state_id;

        /// <summary>
        /// Gets or sets the STAT e_ ID.
        /// </summary>
        /// <value>The STAT e_ ID.</value>
        /// <remarks></remarks>
        public int STATE_ID
        {
            get { return _state_id; }
            set { _state_id = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int _country_id;

        /// <summary>
        /// Gets or sets the COUNTR y_ ID.
        /// </summary>
        /// <value>The COUNTR y_ ID.</value>
        /// <remarks></remarks>
        public int COUNTRY_ID
        {
            get { return _country_id; }
            set { _country_id = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private int _addrss_type_id;

        /// <summary>
        /// Gets or sets the ADDRES s_ TYP e_ ID.
        /// </summary>
        /// <value>The ADDRES s_ TYP e_ ID.</value>
        /// <remarks></remarks>
        public int ADDRESS_TYPE_ID
        {
            get { return _addrss_type_id; }
            set { _addrss_type_id = value; }
        }


        #region Properties

        /// <summary>
        /// 
        /// </summary>
        private string address_ID;
        /// <summary>
        /// Gets or sets the ADDRES s_ ID.
        /// </summary>
        /// <value>The ADDRES s_ ID.</value>
        /// <remarks></remarks>
        public string ADDRESS_ID
        {
            get
            {
                return address_ID;
            }
            set
            {
                address_ID = value;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        private string addressType = string.Empty;

        /// <summary>
        /// Gets or sets the type of the address.
        /// </summary>
        /// <value>The type of the address.</value>
        /// <remarks></remarks>
        public string AddressType
        {
            get { return addressType; }
            set { addressType = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string address1 = string.Empty;
        /// <summary>
        /// Gets or sets the address1.
        /// </summary>
        /// <value>The address1.</value>
        /// <remarks></remarks>
        public string Address1
        {
            get { return address1; }
            set { address1 = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string address2 = string.Empty;
        /// <summary>
        /// Gets or sets the address2.
        /// </summary>
        /// <value>The address2.</value>
        /// <remarks></remarks>
        public string Address2
        {
            get { return address2; }
            set { address2 = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string city = string.Empty;
        /// <summary>
        /// Gets or sets the city.
        /// </summary>
        /// <value>The city.</value>
        /// <remarks></remarks>
        public string City
        {
            get { return city; }
            set { city = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string country = string.Empty;
        /// <summary>
        /// Gets or sets the country.
        /// </summary>
        /// <value>The country.</value>
        /// <remarks></remarks>
        public string Country
        {
            get { return country; }
            set { country = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string emailID = string.Empty;
        /// <summary>
        /// Gets or sets the email ID.
        /// </summary>
        /// <value>The email ID.</value>
        /// <remarks></remarks>
        public string Email_ID
        {
            get { return emailID; }
            set { emailID = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string area;
        /// <summary>
        /// Gets or sets the area.
        /// </summary>
        /// <value>The area.</value>
        /// <remarks></remarks>
        public string Area
        {
            get { return area; }
            set { area = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string faxNo = string.Empty;
        /// <summary>
        /// Gets or sets the fax no.
        /// </summary>
        /// <value>The fax no.</value>
        /// <remarks></remarks>
        public string FAX_NUMBER
        {
            get { return faxNo; }
            set { faxNo = value; }
        }
        
        /// <summary>
        /// 
        /// </summary>
        private string mobileNo = string.Empty;

        /// <summary>
        /// Gets or sets the mobile no.
        /// </summary>
        /// <value>The mobile no.</value>
        /// <remarks></remarks>
        public string MOBILE_PHONE
        {
            get { return mobileNo; }
            set { mobileNo = value; }
        }
        
        /// <summary>
        /// 
        /// </summary>
        private string state = string.Empty;
        /// <summary>
        /// Gets or sets the state.
        /// </summary>
        /// <value>The state.</value>
        /// <remarks></remarks>
        public string State
        {
            get { return state; }
            set { state = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string webSiteURL = string.Empty;
        /// <summary>
        /// Gets or sets the web site URL.
        /// </summary>
        /// <value>The web site URL.</value>
        /// <remarks></remarks>
        public string WEBSITE_URL
        {
            get { return webSiteURL; }
            set { webSiteURL = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string webSiteURL2 = string.Empty;
        /// <summary>
        /// Gets or sets the web site URL.
        /// </summary>
        /// <value>The web site URL.</value>
        /// <remarks></remarks>
        public string WEBSITE_URL2
        {
            get { return webSiteURL2; }
            set { webSiteURL2 = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string webSiteURL3 = string.Empty;
        /// <summary>
        /// Gets or sets the web site URL.
        /// </summary>
        /// <value>The web site URL.</value>
        /// <remarks></remarks>
        public string WEBSITE_URL3
        {
            get { return webSiteURL3; }
            set { webSiteURL3 = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string zipCode = string.Empty;
        /// <summary>
        /// Gets or sets the zip code.
        /// </summary>
        /// <value>The zip code.</value>
        /// <remarks></remarks>
        public string ZipCode
        {
            get { return zipCode; }
            set { zipCode = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string cityname;
        /// <summary>
        /// Gets or sets the CIT y_ NAME.
        /// </summary>
        /// <value>The CIT y_ NAME.</value>
        /// <remarks></remarks>
        public string CITY_NAME
        {
            get { return cityname; }
            set { cityname = value; }

        }
        public string CITY_CD { get; set; }
        /// <summary>
        /// 
        /// </summary>
        private string statename;
        /// <summary>
        /// Gets or sets the STAT e_ NAME.
        /// </summary>
        /// <value>The STAT e_ NAME.</value>
        /// <remarks></remarks>
        public string STATE_NAME
        {
            get { return statename; }
            set { statename = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string countryname;
        /// <summary>
        /// Gets or sets the COUNTR y_ NAME.
        /// </summary>
        /// <value>The COUNTR y_ NAME.</value>
        /// <remarks></remarks>
        public string COUNTRY_NAME
        {
            get { return countryname; }
            set { countryname = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string areaname;
        /// <summary>
        /// Gets or sets the ARE a_ NAME.
        /// </summary>
        /// <value>The ARE a_ NAME.</value>
        /// <remarks></remarks>
        public string AREA_NAME
        {
            get { return areaname; }
            set { areaname = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string adrtypename;
        /// <summary>
        /// Gets or sets the name of the address type.
        /// </summary>
        /// <value>The name of the address type.</value>
        /// <remarks></remarks>
        public string AddressTypeName
        {
            get { return adrtypename; }
            set { adrtypename = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string toroleid;
        /// <summary>
        /// Gets or sets to role ID.
        /// </summary>
        /// <value>To role ID.</value>
        /// <remarks></remarks>
        public string ToRoleID
        {
            get { return toroleid; }
            set { toroleid = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int fromroleid;
        /// <summary>
        /// Gets or sets from role ID.
        /// </summary>
        /// <value>From role ID.</value>
        /// <remarks></remarks>
        public int FromRoleID
        {
            get { return fromroleid; }
            set { fromroleid = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string togroupid;
        /// <summary>
        /// Gets or sets to group ID.
        /// </summary>
        /// <value>To group ID.</value>
        /// <remarks></remarks>
        public string ToGroupID
        {
            get { return togroupid; }
            set { togroupid = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int fromgroupid;
        /// <summary>
        /// Gets or sets from group ID.
        /// </summary>
        /// <value>From group ID.</value>
        /// <remarks></remarks>
        public int FromGroupID
        {
            get { return fromgroupid; }
            set { fromgroupid = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string perispresaddr;
        /// <summary>
        /// Gets or sets the per is pres addr.
        /// </summary>
        /// <value>The per is pres addr.</value>
        /// <remarks></remarks>
        public string PerIsPresAddr
        {
            get { return perispresaddr; }
            set { perispresaddr = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int address_rev_no;
        /// <summary>
        /// Gets or sets the ADDRES s_ RE v_ NO.
        /// </summary>
        /// <value>The ADDRES s_ RE v_ NO.</value>
        /// <remarks></remarks>
        public int ADDRESS_REV_NO
        {
            get { return address_rev_no; }
            set { address_rev_no = value; }
        }
        //public string prevrec;
        //public string PrevRec
        //{
        //    get { return prevrec; }
        //    set { prevrec = value; }
        //}
        //public string nextrec;
        //public string NextRec
        //{
        //    get { return nextrec; }
        //    set { nextrec = value; }
        //}
        /// <summary>
        /// 
        /// </summary>
        public string reference_type;
        /// <summary>
        /// Gets or sets the REFERENC e_ TYPE.
        /// </summary>
        /// <value>The REFERENC e_ TYPE.</value>
        /// <remarks></remarks>
        public string REFERENCE_TYPE
        {
            get { return reference_type; }
            set { reference_type = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int reference_type_id;
        /// <summary>
        /// Gets or sets the REFERENC e_ TYP e_ ID.
        /// </summary>
        /// <value>The REFERENC e_ TYP e_ ID.</value>
        /// <remarks></remarks>
        public int REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }
        private string home_phone;

        public string HOME_PHONE
        {
            get { return home_phone; }
            set { home_phone = value; }
        }
        private string office_phone;

        public string OFFICE_PHONE
        {
            get { return office_phone; }
            set { office_phone = value; }
        }

        private int addr_type_id;

        public int ADDR_TYPE_ID
        {
            get { return addr_type_id; }
            set { addr_type_id = value; }
        }
        private int addr_grp_id;

        public int ADDR_GRP_ID
        {
            get { return addr_grp_id; }
            set { addr_grp_id = value; }
        }
        private int reference_id;

        public int REFERENCE_ID
        {
            get { return reference_id; }
            set { reference_id = value; }
        }

        private int referal_id;

        public int REFRL_ID
        {
            get { return referal_id; }
            set { referal_id = value; }
        }

        private string referal_cd;

        public string REFRL_CD
        {
            get { return referal_cd; }
            set { referal_cd = value; }
        }


        private int reference_source_id;

        public int REFERENCE_SOURCE_ID
        {
            get { return reference_source_id; }
            set { reference_source_id = value; }
        }

        private string referal_name;

        public string  REFERAL_NAME
        {
            get { return referal_name; }
            set { referal_name = value; }
        }
        private string fax2;

        public string FAX2
        {
            get { return fax2; }
            set { fax2 = value; }
        }
        private string _record_status;

        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
        }
        #endregion Properties
        private string pin_code;

        public string PIN_CODE
        {
            get { return pin_code; }
            set { pin_code = value; }
        }
        private string _value;

        public string Value
        {
            get { return _value; }
            set { _value = value; }
        }

        private string pin_code_name;

        public string PIN_CODE_NAME
        {
            get { return pin_code_name; }
            set { pin_code_name = value; }
        }

        private string _district_id;

        public string DISTRICT_ID
        {
            get { return _district_id; }
            set { _district_id = value; }
        }

        private string _district_name;

        public string DISTRICT_NAME
        {
            get { return _district_name; }
            set { _district_name = value; }
        }
        private string _STD_CODE;

        public string STD_CODE
        {
            get { return _STD_CODE; }
            set { _STD_CODE = value; }
        }

        private string _area1;

        public string AREA1
        {
            get { return _area1; }
            set { _area1 = value; }
        }
        private string country_cd;
    

public string COUNTRY_CD
{
  get { return country_cd; }
  set { country_cd = value; }
}
        private string country_desc;

public string COUNTRY_DESC
{
  get { return country_desc; }
  set { country_desc = value; }
}
private string state_cd;

public string STATE_CD
{
    get { return state_cd; }
    set { state_cd = value; }
}
private string state_desc;

public string STATE_DESC
{
    get { return state_desc; }
    set { state_desc = value; }
}
private string district_desc;

public string DISTRICT_DESC
{
    get { return district_desc; }
    set { district_desc = value; }
}
private string district_cd;

public string DISTRICT_CD
{
    get { return district_cd; }
    set { district_cd = value; }
}
private string city_desc;

public string CITY_DESC
{
    get { return city_desc; }
    set { city_desc = value; }
}


private string isd_code;

public string ISD_CODE
{
    get { return isd_code; }
    set { isd_code = value; }
}
public int NoOfRecords { get; set; }
    }
}
