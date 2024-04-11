package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;
import org.javalite.activejdbc.annotations.Cached;

@Cached
public class BillboardStatus extends Model {
    public static final String PENDING = "Pending";
    public static final String APPROVED = "Approved";
    public static final String REJECTED = "Rejected";

    public static int getId(String status) {
        return BillboardStatus.findFirst("status = ?", status).getInteger("id");
    }
}
