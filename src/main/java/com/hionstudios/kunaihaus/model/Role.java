package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;
import org.javalite.activejdbc.annotations.Cached;

@Cached
public class Role extends Model {
    public static final String ADMIN = "Admin";
    public static final String USER = "User";

    public static long getId(String role) {
        return Role.findFirst("role = ?", role).getLongId();
    }
}
