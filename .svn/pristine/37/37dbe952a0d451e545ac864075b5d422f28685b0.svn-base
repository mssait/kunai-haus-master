package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

import com.hionstudios.time.TimeUtil;

public class BillboardRequest extends Model {
    public BillboardRequest() {
    }

    public BillboardRequest(long companyId) {
        set("company_id", companyId);
        set("created_time", TimeUtil.currentTime());
        set("status_id", BillboardStatus.getId(BillboardStatus.PENDING));
    }
}
