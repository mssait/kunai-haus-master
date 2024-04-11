package com.hionstudios.iam;

import java.io.Serializable;
import java.util.Date;

import com.hionstudios.time.TimeUtil;

public class JwtResponse implements Serializable {
    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwt;
    private final String name;
    private final String email;

    private final Date expiry;
    private final String type;

    public JwtResponse(String jwt, Date expiry, String name, String email, String type) {
        this.jwt = jwt;
        this.expiry = expiry;
        this.name = name;
        this.email = email;
        this.type = type;
    }

    public String getJwt() {
        return jwt;
    }

    public Date getExpiry() {
        return expiry;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getType() {
        return type;
    }

    public String toCookieHeader() {
        long expiry = getExpiry().getTime();
        return "Kunai-Haus-auth=" + getJwt() + ";Path=/;SameSite=None;Secure;max-age=" + ((expiry
                - TimeUtil.currentTime()) / 1000);
    }
}