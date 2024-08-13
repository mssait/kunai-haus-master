package com.hionstudios.kunaihaus.flow;

import com.hionstudios.MapResponse;
import com.hionstudios.db.Handler;
import com.hionstudios.iam.UserUtil;
import com.hionstudios.kunaihaus.model.Province;
import com.hionstudios.time.TimeUtil;

public class DashboardFlow {
    public MapResponse dashboard() {
        return UserUtil.isAdmin() ? adminDashboard() : userDashboard();
    }

    public MapResponse adminDashboard() {
        String sql = "Select (Select Count(*) From Companies) companies, (Select Count(*) From Subscriptions Where ? Between Start_Date And End_Date) Active_Subscriptions, (Select Count(*) From Companies Where Companies.Id Not In (Select Company_Id From Subscriptions Where ? Between Start_Date And End_Date)) Inactive_Subscriptions, (Select Count(*) From Companies Where Created_Time Between ? And ?) Today_Registration, (Select Count(*) From Subscriptions Where End_Date < ?) inactive_30_days, (Select Count(*) From Smes Where Women_Led) SME_Women_Led, (Select Count(*) From SMEs Where Finance_Advice) SME_Finance_Advice, (Select Count(*) From SMEs Where Green_Finance) SME_Green_Finance, (Select Count(*) From SMEs Where SMM) SME_SMM, (Select Count(*) From Banks Where SMM) Bank_SMM, (Select Count(*) From Banks Where Climate_Finance) Bank_Climate_Finance, (Select Count(*) From Government_Departments Where Climate_Finance) Government_Climate_Finance, (Select Count(*) From Private_Companies Where SMM) Private_SMM, (Select Count(*) From Private_Companies Where Green_Finance) Private_Green_Finance, (Select Count(*) From Private_Companies Where Finance_Advice) Private_Finance_Advice";

        long time = TimeUtil.currentTime();
        long todayStart = TimeUtil.start(time);
        long todayEnd = TimeUtil.end(time);
        long _30Days = TimeUtil.days(30);
        return Handler.findFirst(sql, time, time, todayStart, todayEnd, _30Days);
    }

    public MapResponse userDashboard() {
        String sql = "Select (Select Count(*) From Companies Join Provinces On Provinces.Id = Companies.Province_Id And Provinces.Region = ? And Has_Details And Has_Billboards) New_Guinea_Islands, (Select Count(*) From Companies Join Provinces On Provinces.Id = Companies.Province_Id And Provinces.Region = ? And Has_Details And Has_Billboards) Momase_Islands, (Select Count(*) From Companies Join Provinces On Provinces.Id = Companies.Province_Id And Provinces.Region = ? And Has_Details And Has_Billboards) Southern_Region, (Select Count(*) From Companies Join Provinces On Provinces.Id = Companies.Province_Id And Provinces.Region = ? And Has_Details And Has_Billboards) Highland_Region";
        return Handler.findFirst(sql,
                Province.NEW_GUINEA_ISLANDS,
                Province.MOMASE_REGION,
                Province.SOUTHERN_REGION,
                Province.HIGHLAND_REGION);
    }
}
