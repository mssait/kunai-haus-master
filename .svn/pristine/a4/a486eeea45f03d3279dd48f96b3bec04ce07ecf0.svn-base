package com.hionstudios.kunaihaus.model;

import org.javalite.activejdbc.Model;

import com.hionstudios.time.TimeUtil;

public class Subscription extends Model {
    public Subscription() {
    }

    public Subscription(
            long company,
            long start,
            long end,
            long time,
            String description,
            String method,
            double amount,
            String payment_date,
            String reference_no,
            String bank,
            String branch) {
        set("company_id", company);
        set("start_date", start);
        set("end_date", end);
        set("time", time);
        set("description", description);
        set("method", method);
        set("amount", amount);
        if (payment_date != null) {
            set("payment_date", TimeUtil.parse(payment_date, "yyyy-MM-DD"));
        }
        if (reference_no != null && !"".equals(reference_no)) {
            set("reference_no", reference_no);
        }
        if (bank != null && !"".equals(bank)) {
            set("bank", bank);
        }
        if (branch != null && !"".equals(branch)) {
            set("branch", branch);
        }
    }
}
