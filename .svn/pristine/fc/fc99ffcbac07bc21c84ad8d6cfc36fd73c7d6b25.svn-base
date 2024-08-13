package com.hionstudios.kunaihaus.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.iam.IsAdmin;
import com.hionstudios.iam.IsUser;
import com.hionstudios.kunaihaus.flow.SubscriptionFlow;

@RestController
@RequestMapping("api/subscriptions")
public class SubscriptionController {
    @GetMapping
    @IsAdmin
    public ResponseEntity<MapResponse> subscriptions(DataGridParams params) {
        return ((DbTransaction) () -> new SubscriptionFlow().allSubscriptions(params)).read();
    }

    @GetMapping("my")
    @IsUser
    public ResponseEntity<MapResponse> mySubscriptions(DataGridParams params) {
        return ((DbTransaction) () -> new SubscriptionFlow().mySubscriptions(params)).read();
    }

    @GetMapping("{id}")
    public ResponseEntity<MapResponse> subscriptions(@PathVariable long id) {
        return ((DbTransaction) () -> new SubscriptionFlow().subscription(id)).read();
    }

    @PutMapping("{id}")
    @IsAdmin
    public ResponseEntity<MapResponse> editSubscription(
            @PathVariable long id,
            @RequestParam long start_date,
            @RequestParam long end_date,
            @RequestParam String description,
            @RequestParam String method,
            @RequestParam double amount,
            @RequestParam String payment_date,
            @RequestParam(required = false) String reference_no,
            @RequestParam(required = false) String bank,
            @RequestParam(required = false) String branch) {
        return ((DbTransaction) () -> new SubscriptionFlow().editSubscription(
                id,
                start_date,
                end_date,
                description,
                method,
                amount,
                payment_date,
                reference_no,
                bank,
                branch)).write();
    }

    @GetMapping("active")
    public ResponseEntity<MapResponse> active(DataGridParams params) {
        return ((DbTransaction) () -> new SubscriptionFlow().activeSubscriptions(params)).read();
    }

    @GetMapping("inactive")
    public ResponseEntity<MapResponse> inactive(DataGridParams params) {
        return ((DbTransaction) () -> new SubscriptionFlow().inactiveSubscriptions(params)).read();
    }
}
