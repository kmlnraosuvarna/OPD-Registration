using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class OrganizationMaster : Address
    {
        #region Members

        private int _REG_AUTHORITY_ID;

        private int _ORG_REV_NO;

        private int orgid;

        private string org_cd;

        private string org_name;

        private string displayname;

        private string aliasname;

        private string tradename;

        private string legalname;

        private string registerdt;

        private string reg_under_act;

        private int reg_auth_id;

        private int nat_of_busi_id;

        private string nature_busi_name;

        private int scp_of_busi_id;

        private string scp_busi_name;

        private int exc_id;

        private string exc_name;

        private int promot_comp_id;

        private string list_startdt;

        private string list_enddt;

        private string createdt;

        private string modifydt;

        private int org_accr_id;

        private int accre_status_id;

        private string accre_status_name;

        private string accre_body;

        private string accre_for;

        private string accre_valid_from;

        private string accre_valid_to;

        private string accreditation_no;

        private int grp_id;

        private int exchange_rev_no;

        private int exchange_location_id;

        private string exchange_loc_name;

        private string isregistered;

        private string islisted;

        private int loctionid;

        private string location;

        private string reg_place;

        private int org_accr_rev_no;

        private string create_by;

        private string modify_by;

        private string org_desc;

        #endregion

        #region Properties

        public string EXCHANGE_LOC_NAME
        {
            get { return exchange_loc_name; }
            set { exchange_loc_name = value; }
        }

        public int EXCHANGE_REV_NO
        {
            get { return exchange_rev_no; }
            set { exchange_rev_no = value; }
        }

        public int EXCHANGE_LOCATION_ID
        {
            get { return exchange_location_id; }
            set { exchange_location_id = value; }
        }

        public int GRP_ID
        {
            get { return grp_id; }
            set { grp_id = value; }
        }

        public int ORG_ACCR_ID
        {
            get { return org_accr_id; }
            set { org_accr_id = value; }
        }

        public string MODIFY_BY
        {
            get { return modify_by; }
            set { modify_by = value; }
        }

        public string CREATE_BY
        {
            get { return create_by; }
            set { create_by = value; }
        }

        public string ORG_CD
        {
            get { return org_cd; }
            set { org_cd = value; }
        }

        public string ORG_NAME
        {
            get { return org_name; }
            set { org_name = value; }
        }

        public string ORG_DESC
        {
            get { return org_desc; }
            set { org_desc = value; }
        }

        public string DISPLAY_NAME
        {
            get { return displayname; }
            set { displayname = value; }
        }

        public string ALIAS_NAME
        {
            get { return aliasname; }
            set { aliasname = value; }
        }

        public string TRADE_NAME
        {
            get { return tradename; }
            set { tradename = value; }
        }

        public string LEGAL_NAME
        {
            get { return legalname; }
            set { legalname = value; }
        }

        public string REGISTER_DT
        {
            get { return registerdt; }
            set { registerdt = value; }
        }

        public string REG_UNDER_ACT
        {
            get { return reg_under_act; }
            set { reg_under_act = value; }
        }

        public int REG_AUTH_ID
        {
            get { return reg_auth_id; }
            set { reg_auth_id = value; }
        }

        public int NATURE_OF_BUSINESS_ID
        {
            get { return nat_of_busi_id; }
            set { nat_of_busi_id = value; }
        }

        public int SCOPE_OF_BUSINESS_ID
        {
            get { return scp_of_busi_id; }
            set { scp_of_busi_id = value; }
        }

        public int EXCHANGE_ID
        {
            get { return exc_id; }
            set { exc_id = value; }
        }

        public int PROMOT_COMP_ID
        {
            get { return promot_comp_id; }
            set { promot_comp_id = value; }
        }

        public string LIST_START_DT
        {
            get { return list_startdt; }
            set { list_startdt = value; }
        }

        public string LIST_END_DT
        {
            get { return list_enddt; }
            set { list_enddt = value; }
        }

        public string CREATE_DT
        {
            get { return createdt; }
            set { createdt = value; }
        }

        public string MODIFY_DT
        {
            get { return modifydt; }
            set { modifydt = value; }
        }

        public string EXC_NAME
        {
            get { return exc_name; }
            set { exc_name = value; }
        }

        public string NATURE_BUSI_NAME
        {
            get { return nature_busi_name; }
            set { nature_busi_name = value; }
        }

        public string SCP_BUSI_NAME
        {
            get { return scp_busi_name; }
            set { scp_busi_name = value; }
        }

        public int ACCRE_STATUS_ID
        {
            get { return accre_status_id; }
            set { accre_status_id = value; }
        }

        public string ACCRE_STATUS_NAME
        {
            get { return accre_status_name; }
            set { accre_status_name = value; }
        }

        public string ACCRE_BODY
        {
            get { return accre_body; }
            set { accre_body = value; }
        }

        public string ACCRE_FOR
        {
            get { return accre_for; }
            set { accre_for = value; }
        }

        public string ACCRE_VALID_FROM
        {
            get { return accre_valid_from; }
            set { accre_valid_from = value; }
        }

        public string ACCRE_VALID_TO
        {
            get { return accre_valid_to; }
            set { accre_valid_to = value; }
        }

        public string ACCREDITATION_NO
        {
            get { return accreditation_no; }
            set { accreditation_no = value; }
        }

        public int ORG_ACCR_REV_NO
        {
            get { return org_accr_rev_no; }
            set { org_accr_rev_no = value; }
        }

        public string IS_REGISTERED
        {
            get { return isregistered; }
            set { isregistered = value; }
        }

        public string IS_LISTED
        {
            get { return islisted; }
            set { islisted = value; }
        }

        public int LOCATIONID
        {
            get { return loctionid; }
            set { loctionid = value; }
        }

        public string LOCATION
        {
            get { return location; }
            set { location = value; }
        }

        public string REGISTERING_PLACE
        {
            get { return reg_place; }
            set { reg_place = value; }
        }

        public int REG_AUTHORITY_ID
        {
            get { return _REG_AUTHORITY_ID; }
            set { _REG_AUTHORITY_ID = value; }
        }

        public int ORG_REV_NO
        {
            get { return _ORG_REV_NO; }
            set { _ORG_REV_NO = value; }
        }

        public int ORG_ID
        {
            get { return orgid; }
            set { orgid = value; }
        }

        private string default_acct_id;
        public string DEFAULT_ACCT_ID
        {
            get { return default_acct_id; }
            set { default_acct_id = value; }
        }

        private string acc_cmp_pct = "0";
        public string ACC_CMP_PCT
        {
            get { return acc_cmp_pct; }
            set { acc_cmp_pct = value; }
        }
        private string _RECORD_STATUS;

        public string RECORD_STATUS
        {
            get { return _RECORD_STATUS; }
            set { _RECORD_STATUS = value; }
        }
        private string imageUrl;

        public string IMAGE_URL
        {
            get { return imageUrl; }
            set { imageUrl = value; }
        }
        private string xml;

        public string XML_DATA
        {
            get { return xml; }
            set { xml = value; }
        }
        #endregion

    }
}
