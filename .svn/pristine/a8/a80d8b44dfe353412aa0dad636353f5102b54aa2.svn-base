package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;
import org.javalite.activejdbc.annotations.CompositePK;

@CompositePK({ "billboard_id", "request_id" })
public class BillboardRequestBillboard extends Model {
    public BillboardRequestBillboard() {
    }

    public BillboardRequestBillboard(long billboard, long request) {
        set("billboard_id", billboard);
        set("request_id", request);
    }
}
