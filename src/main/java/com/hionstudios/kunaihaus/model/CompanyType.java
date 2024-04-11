package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;
import org.javalite.activejdbc.annotations.Cached;

@Cached
public class CompanyType extends Model {
    public static final String SME = "SME";
    public static final String BANK = "Bank";
    public static final String GOVERNMENT_OFFICERS = "Government Officers";
    public static final String DEVELOPMENT_PARTNERS = "Development Partners";
    public static final String PRIVATE_COMPANIES = "Private Companies";

    public static long getId(String type) {
        return CompanyType.findFirst("type = ?", type).getLongId();
    }
}
