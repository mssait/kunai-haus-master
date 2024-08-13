package com.hionstudios.kunaihaus.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.iam.IsAdmin;
import com.hionstudios.kunaihaus.flow.UserFlow;

@RestController
@RequestMapping("api/users")
public class UserController {
    @GetMapping
    @IsAdmin
    public ResponseEntity<MapResponse> users(DataGridParams params) {
        return ((DbTransaction) () -> new UserFlow().users(params)).read();
    }
}
