package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

public class Sme extends Model {
    public Sme() {
    }

    public Sme(long company) {
        set("company_id", company);
    }
}
