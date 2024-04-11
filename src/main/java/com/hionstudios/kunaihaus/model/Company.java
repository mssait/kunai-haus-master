package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

import com.hionstudios.time.TimeUtil;

public class Company extends Model {
    public Company() {
    }

    public Company(long type, String company) {
        set("name", company);
        set("type_id", type);
        set("created_time", TimeUtil.currentTime());
    }
}
