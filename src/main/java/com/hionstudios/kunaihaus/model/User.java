package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

public class User extends Model {
    public User() {
    }

    public User(String name, String phone, String email, String password, long role, long companyId) {
        set("name", name);
        set("phone", phone);
        set("email", email);
        set("password", password);
        set("role_id", role);
        set("company_id", companyId);
    }
}
