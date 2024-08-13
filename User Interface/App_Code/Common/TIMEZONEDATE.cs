using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for TIMEZONEDATE
/// </summary>
public static class TIMEZONEDATE
{
    #region commeneted by mahendra
    //public static string SERVERDATE(string _date)
    //{
    //    if (_date == null || _date == string.Empty)
    //        _date = DateTime.Now.ToString("dd-MMM-yyyy");
    //    else
    //    {
    //        string _serverdate = Convert.ToDateTime(_date).ToString("dd-MMM-yyyy") + " " + DateTime.Now.ToLocalTime().ToShortTimeString();
    //        if (Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES) != 0)
    //            _date = Convert.ToDateTime(_serverdate).AddMinutes((Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES))).ToString("dd-MMM-yyyy");
    //        else
    //            _date = Convert.ToDateTime(_serverdate).ToString("dd-MMM-yyyy");
    //    }
    //    return _date;
    //}
    #endregion
    public static string SERVERDATE(string _date)
    {
        if (_date == null || _date == string.Empty)
        {
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _date = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES)).ToString("dd-MMM-yyyy");
            else
                _date = DateTime.Now.ToString("dd-MMM-yyyy");
        }
        return _date;
    }
}
