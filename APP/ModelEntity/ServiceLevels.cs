using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class ServiceLevels
    {
        private int _lvlID = 0;
        private string _lvlCode = string.Empty;
        private string _lvlDesc = string.Empty;
        private int _lvlPrice = 0;
        private int count;
        private int price_lev_seq_id;
        private string modifydt;
        private string creatdt;        
        private string createby;
        private string modifyby;

        public string Create_By
        {
            get { return createby; }
            set { createby = value; }
        }
        public string Modify_By
        {
            get { return modifyby; }
            set { modifyby = value; }
        }
        public string Create_Dt
        {
            get { return creatdt; }
            set { creatdt = value; }
        }
        public int Price_lev_seq_id
        {
            get { return price_lev_seq_id; }
            set { price_lev_seq_id = value; }
        }
        public string Modify_Dt
        {
            get { return modifydt; }
            set { modifydt = value; }
        }
        public int Count
        {
            get { return count; }
            set { count = value; }
        }
        public int LevelID
        {
            get
            {
                return _lvlID;
            }
            set
            {
                _lvlID = value;
            }
        }
        public string LevelCode
        {
            get
            {
                return _lvlCode;
            }
            set
            {
                _lvlCode = value;
            }
        }        
        public string LevelDesc
        {
            get
            {
                return _lvlDesc;
            }
            set
            {
                _lvlDesc = value;
            }
        }
        public int LevelPrie
        {
            get
            {
                return _lvlPrice;
            }
            set
            {
                _lvlPrice = value;
            }
        }
    }
}
