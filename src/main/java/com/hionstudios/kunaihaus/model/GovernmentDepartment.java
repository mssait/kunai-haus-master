package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

public class GovernmentDepartment extends Model {
    public GovernmentDepartment() {
    }

    public GovernmentDepartment(long company) {
        set("company_id", company);
    }
}
