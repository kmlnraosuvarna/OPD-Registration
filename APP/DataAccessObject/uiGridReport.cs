using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Collections;
using System.Linq.Expressions;
using Newtonsoft.Json;
using System.Reflection;
//using System.Dynamic;
using System.Data.SqlClient;
using System.Configuration;

namespace EzHms.DataAccessObject
{
    public static class uiGridReport
    {
        private static DataSet chssBenificaryDataSource;
        private static bool isLinQEnabled;
        private static string retrieveSource = "";

        private static MethodInfo containsMethod = typeof(string).GetMethod("Contains");
        private static MethodInfo startsWithMethod = typeof(string).GetMethod("StartsWith", new Type[] { typeof(string) });
        private static MethodInfo endsWithMethod = typeof(string).GetMethod("EndsWith", new Type[] { typeof(string) });
        private static MethodInfo equalshMethod = typeof(string).GetMethod("Equals", new Type[] { typeof(string) });
        private static MethodInfo trimMethod = typeof(string).GetMethod("Trim", Type.EmptyTypes);
        private static MethodInfo toLowerMethod = typeof(string).GetMethod("ToLower", Type.EmptyTypes);


        private static Expression expressionBuilder;
        private static Expression value;
        private static List<Expression> arguments;
        private static Expression index;
        private static Expression expression;
        private static string SoringOrders;



        public static ArrayList reportDataBuilder(string parameters, string parametervalues, string sp_name, bool isHotReload, int offset, string cmd, int limit, string selected, DataTable reportTable, int IListIndex, bool isLinQEnabled, List<object> search, string sourceOrigin, List<object> sort)
        {
            ArrayList returnCollection = new ArrayList();
            var dictionaryReports = new List<Dictionary<string, object>>();
            if (reportTable != null)
            {
                for (int i = 0; i < (reportTable.Rows.Count); i++)
                {
                    Dictionary<string, object> eachRecordItem = new Dictionary<string, object>();
                    foreach (DataColumn col in reportTable.Columns)
                    {
                        if (reportTable.Rows[i][col].GetType().Equals(typeof(DBNull)))
                        {
                            eachRecordItem.Add(col.ColumnName.ToString(), "");
                        }
                        else if (reportTable.Rows[i][col].GetType().Equals(typeof(long)))
                        {
                            eachRecordItem.Add(col.ColumnName.ToString(), Convert.ToInt32(reportTable.Rows[i][col]));
                        }
                        else
                        {
                            eachRecordItem.Add(col.ColumnName.ToString(), reportTable.Rows[i][col]);
                        }
                    }
                    dictionaryReports.Add(eachRecordItem);
                }
            }
            if (sort.Count > 0)
            {
                var parameter = Expression.Parameter(typeof(Dictionary<string, object>), "x");
                var propertyInfo = typeof(Dictionary<string, object>).GetProperty("Item");
                foreach (var _sort in sort)
                {
                    var eachFilterFromRequest = JsonConvert.DeserializeObject<searchFiltersList>(JsonConvert.SerializeObject(_sort));
                    arguments = new List<Expression> { Expression.Constant(eachFilterFromRequest.field) };
                    index = Expression.Convert(Expression.MakeIndex(parameter, propertyInfo, arguments), typeof(object));
                    SoringOrders = eachFilterFromRequest.direction;
                }
                var lambda = Expression.Lambda<Func<Dictionary<string, object>, object>>(index, parameter);
                if (SoringOrders == "desc")
                {
                    dictionaryReports = dictionaryReports.AsQueryable().OrderByDescending(lambda).ToList();
                }
                else
                {
                    dictionaryReports = dictionaryReports.AsQueryable().OrderBy(lambda).ToList();
                }
            }
            if (search.Count > 0)
            {
                var parameter = Expression.Parameter(typeof(Dictionary<string, object>), "x");
                var propertyInfo = typeof(Dictionary<string, object>).GetProperty("Item");
                int loop = -1;
                List<Expression> orExpressions = new List<Expression>();

                foreach (var _search in search)
                {
                    ++loop;

                    var eachFilterFromRequest = JsonConvert.DeserializeObject<searchFiltersList>(JsonConvert.SerializeObject(_search));
                    arguments = new List<Expression> { Expression.Constant(eachFilterFromRequest.field) };

                    if (eachFilterFromRequest.type == "int")
                    {
                        index = Expression.Convert(Expression.MakeIndex(parameter, propertyInfo, arguments), typeof(int));
                        value = Expression.Constant(Convert.ToInt32(eachFilterFromRequest.value));
                        expression = Expression.MakeBinary(ExpressionType.Equal, index, value);

                        if (eachFilterFromRequest.@operator == "more")
                        {
                            expression = Expression.MakeBinary(ExpressionType.GreaterThan, index, value);
                        }
                        else if (eachFilterFromRequest.@operator == "less")
                        {
                            expression = Expression.MakeBinary(ExpressionType.LessThan, index, value);
                        }
                        else
                        {
                            expression = Expression.MakeBinary(ExpressionType.Equal, index, value);
                        }
                    }
                    else if (eachFilterFromRequest.type == "date")
                    {
                        index = Expression.Convert(Expression.MakeIndex(parameter, propertyInfo, arguments), typeof(string));
                        value = Expression.Constant(Convert.ToDateTime(eachFilterFromRequest.value).ToString("dd-MMMM-yyyy"));
                        expression = Expression.MakeBinary(ExpressionType.Equal, index, value);

                        if (eachFilterFromRequest.@operator == "more")
                        {
                            expression = Expression.MakeBinary(ExpressionType.GreaterThan, index, value);
                        }
                        else if (eachFilterFromRequest.@operator == "less")
                        {
                            expression = Expression.MakeBinary(ExpressionType.LessThan, index, value);
                        }
                        else
                        {
                            expression = Expression.MakeBinary(ExpressionType.Equal, index, value);
                        }
                    }
                    else
                    {
                        var mIndex = Expression.MakeIndex(parameter, propertyInfo, arguments);
                        index = Expression.Convert(mIndex, typeof(string));
                        value = Expression.Constant(eachFilterFromRequest.value.ToLower(), typeof(string));

                        if (eachFilterFromRequest.@operator == "contains")
                        {
                            // expression = Expression.Call(index, containsMethod, value);
                            expression = Expression.Call(index, trimMethod);
                            expression = Expression.Call(expression, toLowerMethod);
                            expression = Expression.Call(expression, containsMethod, value);
                        }
                        else if (eachFilterFromRequest.@operator == "begins")
                        {
                            expression = Expression.Call(index, trimMethod);
                            expression = Expression.Call(expression, toLowerMethod);
                            expression = Expression.Call(expression, startsWithMethod, value);
                        }
                        else if (eachFilterFromRequest.@operator == "ends")
                        {
                            //expression = Expression.Call(index, endsWithMethod, value);

                            expression = Expression.Call(index, trimMethod);
                            expression = Expression.Call(expression, toLowerMethod);
                            expression = Expression.Call(expression, endsWithMethod, value);
                        }
                        else
                        {
                            expression = Expression.MakeBinary(ExpressionType.Equal, index, value);
                        }
                    }

                    if (loop == 0)
                    {
                        expressionBuilder = expression;
                    }
                    else
                    {
                        expressionBuilder = Expression.Or(expressionBuilder, expression);
                    }

                }
                var lambda = Expression.Lambda<Func<Dictionary<string, object>, bool>>(expressionBuilder, parameter);
                dictionaryReports = dictionaryReports.AsQueryable().Where(lambda).ToList();
            }
            ArrayList outputCollection = new ArrayList();
            if (isLinQEnabled)
            {
                for (int i = offset; i < offset + limit; i++)
                {
                    try
                    {
                        outputCollection.Add(dictionaryReports[i]);
                    }
                    catch (Exception)
                    {
                    }
                }
                returnCollection.Add(outputCollection);
            }
            else
            {
                returnCollection.Add(dictionaryReports);
            }
            returnCollection.Add(dictionaryReports.Count());
            returnCollection.Add(sourceOrigin);
            return returnCollection;
        }
        public static DataSet getDataSourceFromDb(string sp_name, string parameters, string parametervalues)
        {
            retrieveSource = "DATABASE";
            DataSet reprotDataset = new DataSet();
            string sCon = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
            int SessionId = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
            SqlConnection myConnection = new SqlConnection();
            myConnection.ConnectionString = sCon;
            SqlCommand oCmd = new SqlCommand();
            SqlDataAdapter oDA = new SqlDataAdapter();
            chssBenificaryDataSource = new DataSet();
            oCmd.Connection = new SqlConnection(sCon);
            oCmd.CommandType = CommandType.StoredProcedure;
            oCmd.CommandTimeout = 0;
            oCmd.CommandText = (sp_name);
            for (int i = 0; i < parameters.Split('^').Length; i++)
            {
                oCmd.Parameters.AddWithValue(parameters.Split('^')[i].ToString(), parametervalues.Split('^')[i].ToString());
            }
            oCmd.Parameters.AddWithValue("@IP_SESSION_ID", SessionId);
            oDA.SelectCommand = oCmd;
            oDA.Fill(reprotDataset);
            myConnection.Close();
            return reprotDataset;
        }
        public static ArrayList ConvertExcelDataSetToList(DataSet ds, ArrayList list)
        {
            if (ds != null)
            {
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables.Count; i++)
                    {
                        DataTable dt = ds.Tables[i];
                        ArrayList arraylist = new ArrayList();
                        foreach (DataRow row in dt.Rows)
                        {
                            var dict = new Dictionary<string, object>();
                            foreach (DataColumn col in dt.Columns)
                            {
                                dict[col.ColumnName] = row[col];
                            }
                            arraylist.Add(dict);
                        }
                        list.Add(arraylist);
                    }
                }
                return list;
            }
            else
                return null;
        }
    }
    public class searchFiltersList
    {
        public string field { get; set; }
        public string type { get; set; }
        public string @operator { get; set; }
        public string value { get; set; }
        public string direction { get; set; }
    }
}
