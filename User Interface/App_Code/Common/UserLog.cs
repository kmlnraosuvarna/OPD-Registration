using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for UserLog
/// </summary>
public class UserLog
{
    public static EzHms.ModelEntity.UserLogingInfo FillUserLog(string username,string password)
    {
        EzHms.ModelEntity.UserLogingInfo _userlog = new EzHms.ModelEntity.UserLogingInfo();
        _userlog.UserName = username;
        _userlog.Password = password;
        _userlog.HostName = HttpContext.Current.Request.UserHostName;
        _userlog.MACHINE = System.Net.Dns.GetHostByName("LocalHost").HostName;
        _userlog.VERSION = System.Environment.OSVersion.ToString();
        _userlog.TERMINAL = HttpContext.Current.Request.UserHostAddress;
        _userlog.OSUSER = System.Environment.UserDomainName.ToString();
        _userlog.ROLE_ID = 1;//we can change this value based on roles
        _userlog.START_TIME = DateTime.Now.ToString();
        _userlog.ORG_ID = 1;
        _userlog.GRP_ID = 1;

        return _userlog;
    }

    public static EzHms.ModelEntity.UserLogingInfo FillUserLog(int sessionID,int locID)
    {
        EzHms.ModelEntity.UserLogingInfo _userlog = new EzHms.ModelEntity.UserLogingInfo();
        _userlog.USER_ID = Convert.ToInt32(SessionHandler.UserID);
        _userlog.SESSION_ID = sessionID;
        _userlog.LOC_ID = locID;
        _userlog.HostName = HttpContext.Current.Request.UserHostName;
        _userlog.MACHINE = System.Net.Dns.GetHostByName("LocalHost").HostName;
        _userlog.VERSION = System.Environment.OSVersion.ToString();
        _userlog.TERMINAL = HttpContext.Current.Request.UserHostAddress;
        _userlog.OSUSER = System.Environment.UserDomainName.ToString();
        _userlog.ROLE_ID = 1;//we can change this value based on roles
        _userlog.START_TIME = DateTime.Now.ToString();
        _userlog.ORG_ID = 1;
        _userlog.GRP_ID = 1;
        return _userlog;
    }
}
