package com.hionstudios.kunaihaus.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hionstudios.MapResponse;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.kunaihaus.CachedSelect;
import com.hionstudios.kunaihaus.flow.DashboardFlow;

@RestController
@RequestMapping("api")
public class APIController {
    @GetMapping("select/{select}")
    public ResponseEntity<MapResponse> select(@PathVariable String select) {
        return ((DbTransaction) () -> new CachedSelect().select(select)).read();
    }

    @GetMapping("dashboard")
    public ResponseEntity<MapResponse> dashboard() {
        return ((DbTransaction) () -> new DashboardFlow().dashboard()).read();
    }
}
