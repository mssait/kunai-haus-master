package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

public class PrivateCompany extends Model {
    public PrivateCompany() {
    }

    public PrivateCompany(long company) {
        set("company_id", company);
    }
}
