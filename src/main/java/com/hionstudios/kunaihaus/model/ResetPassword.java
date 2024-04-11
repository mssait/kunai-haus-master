package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

import com.hionstudios.security.Generator;
import com.hionstudios.time.TimeUtil;

public class ResetPassword extends Model {
    public ResetPassword() {
    }

    public ResetPassword(long userid) {
        set("user_id", userid);
        set("code", Generator.RESET_CODE.generate());
        set("time", TimeUtil.currentTime());
    }
}
