package com.hionstudios.iam;

import com.hionstudios.MapResponse;
import com.hionstudios.db.Handler;
import com.hionstudios.time.TimeUtil;

public class LicenceService {
    public static boolean licence() {
        long userid = UserUtil.getUserid();
        String sql = "Select Start_Date, End_Date, Time From Subscriptions Where Company_Id = (Select Company_Id From Users Where Id = ?) And Start_Date <= ? And End_Date >= ?";
        long time = TimeUtil.currentTime();
        MapResponse response = Handler.findFirst(sql, userid, time, time);
        return response != null;
    }

    public static MapResponse checkLicence() {
        return licence() ? MapResponse.success() : MapResponse.failure();
    }
}
