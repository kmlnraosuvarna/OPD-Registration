namespace HIMS.NET
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Text;
    using System.Web.UI.WebControls;
    using System.Web.UI.HtmlControls;

    /// <summary>
    /// Summary description for AdvanceSearch
    /// </summary>
    public class AdvanceSearch
    {
        private StringBuilder queryString = null; //new StringBuilder();
        public delegate void TextChanged(object sender, EventArgs e);
        public event TextChanged OnTextChanged;
       
        public void CreateControls(System.Web.UI.Control control, HIMS.NET.ListItemsCollection _columns)
        {
            HtmlTable table = new HtmlTable();
            HtmlTableRow row = null;
            for (int colIndex = 0; colIndex < _columns.Count-1; colIndex++)
            {
                row = new HtmlTableRow();
                CreateHtmlControls(((HIMS.NET.ListElement)_columns[colIndex]).Text, ((HIMS.NET.ListElement)_columns[colIndex]).Value, ref row);
                colIndex++;
                CreateHtmlControls(((HIMS.NET.ListElement)_columns[colIndex]).Text, ((HIMS.NET.ListElement)_columns[colIndex]).Value, ref row);
                //Add HtmlTableRow to HtmlTable
                //table.Attributes["class"] = "GridForms"; 
                table.Rows.Add(row);
            }
            if (_columns.Count % 2 > 0)
            {
                row = new HtmlTableRow();
                CreateHtmlControls(((HIMS.NET.ListElement)_columns[_columns.Count - 1]).Text, ((HIMS.NET.ListElement)_columns[_columns.Count - 1]).Value, ref row);
                //Add HtmlTableRow to HtmlTable
                //table.Attributes["class"] = "GridForms"; 
                table.Rows.Add(row);
            }
            control.Controls.Add(table);
        }

        void CreateHtmlControls(string _txt,string _value,ref HtmlTableRow row)
        {
            HtmlTableCell lblCell = new HtmlTableCell();
            HtmlTableCell txtCell = new HtmlTableCell();
            Label lblColAlias = new Label();
            lblColAlias.CssClass = "";
            lblColAlias.Text = _txt; //((HIMS.NET.ListElement)_columns[colIndex]).Text;
            TextBox txtColName = new TextBox();
            txtColName.CssClass = "formtextbox";
            txtColName.AutoPostBack = true;
            txtColName.TextChanged += new EventHandler(txtColName_TextChanged);
            txtColName.ID = _value; //((HIMS.NET.ListElement)_columns[colIndex]).Value;
            //Add Controls to HtmlTableCell
            lblColAlias.CssClass = "pagertext";
            lblCell.Controls.Add(lblColAlias);
            txtCell.Controls.Add(txtColName);
            lblCell.Attributes["style"] = "padding: 3px;";
            txtCell.Attributes["style"] = "padding: 3px 8px 3px 3px;"; 
            //Add HtmlTableCell to HtmlTableRow
            row.Cells.Add(lblCell);
            
            row.Cells.Add(txtCell);
        }

        void txtColName_TextChanged(object sender, EventArgs e)
        {
            OnTextChanged(sender, e);
        }

        public string GetQueryString(System.Web.UI.Control control)
        {
            queryString = new StringBuilder();
            IterateControls(control);
            if (queryString.Length>0)
                return queryString.ToString().Substring(0, queryString.Length - 4);
            return string.Empty;
        }

        void IterateControls(System.Web.UI.Control control)
        {
            foreach (System.Web.UI.Control cntrl in control.Controls)
            {
                //if the control is having any child controls or not
                if (cntrl.Controls.Count > 0)
                {
                    //recursion
                    IterateControls(cntrl);
                }
                //whether the control is check box or not
                if (cntrl is System.Web.UI.WebControls.TextBox)
                {
                    //casting the control to the Textbox
                    System.Web.UI.WebControls.TextBox txt = (System.Web.UI.WebControls.TextBox)cntrl;
                    //If the any one control is not fill returns null value.
                    if (txt.Text != string.Empty)
                    {
                        //making the search query, control id is column name and text is value of column
                        queryString.Append("[" + txt.ID + "]" + " LIKE '" + txt.Text + "%' and ");
                    }
                }
            }
        }
    }

    [Serializable]
    public class ListItemsCollection : System.Collections.CollectionBase
    {

        public ListElement this[int index]
        {
            get
            {
                if (InnerList.Count > index)
                    return (ListElement)InnerList[index];
                return null;
            }
        }

        public int Add(ListElement _item)
        {
            return List.Add(_item);
        }

        public int Length
        {
            get
            {
                return List.Count;
            }
        }
    }

    [Serializable]
    public class ListElement
    {
        private string _text = string.Empty;
        private string _value = string.Empty;

        public ListElement()
        { }

        public ListElement(string text,string value )
        {
            this._text = text;
            this._value = value;
        }
        public string Text
        {
            get
            {
                return _text;
            }
            set
            {
                _text = value;
            }
        }

        public string Value
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
    }
}