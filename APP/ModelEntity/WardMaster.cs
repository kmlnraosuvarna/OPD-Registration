using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class WardMaster : AbEntityName
    {
        private int _Ward_Id;
        private string _Ward_Cd;
        private string _Ward_Desc;



        private int _ward_group_id = 0;

        public int WARD_GROUP_ID
        {
            get { return _ward_group_id; }
            set { _ward_group_id = value; }
        }

        public string WARD_DESC //Ward_Desc
        {
            get { return _Ward_Desc; }
            set { _Ward_Desc = value; }
        }

        public string WARD_CD  //Ward_Cd
        {
            get { return _Ward_Cd; }
            set { _Ward_Cd = value; }
        }

        public int WARD_ID //Ward_Id
        {
            get { return _Ward_Id; }
            set { _Ward_Id = value; }
        }


        private int page_num;
        public int PAGE_NUM
        {
            get { return page_num; }
            set { page_num = value; }
        }

        private int page_size;
        public int PAGE_SIZE
        {
            get { return page_size; }
            set { page_size = value; }
        }
        private string adv_search;
        public string ADV_SEARCH
        {
            get { return adv_search; }
            set { adv_search = value; }
        }
        private string _vard_group_name;

        public string WARD_GROUP_NAME
        {
            get { return _vard_group_name; }
            set { _vard_group_name = value; }
        }


        private string ward_group_name;

        public string _WARD_GROUP_NAME
        {
            get { return ward_group_name; }
            set { ward_group_name = value; }
        }

    }
}
