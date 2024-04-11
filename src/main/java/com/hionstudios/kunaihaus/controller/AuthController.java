package com.hionstudios.kunaihaus.controller;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hionstudios.MapResponse;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.iam.Authenticator;
import com.hionstudios.iam.JwtRequest;
import com.hionstudios.iam.LicenceService;
import com.hionstudios.iam.RegisterService;
import com.hionstudios.iam.UserUtil;

@RestController
public class AuthController {
    @Autowired
    Authenticator authenticator;

    @PostMapping("/authenticate")
    @PermitAll
    public ResponseEntity<?> createAuthenticationToken(
            @RequestBody JwtRequest authenticationRequest,
            HttpServletResponse response) {
        return authenticator.authenticate(authenticationRequest, response);
    }

    @PostMapping("register")
    public ResponseEntity<MapResponse> register(
            @RequestParam String name,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String company,
            @RequestParam long type) {
        return ((DbTransaction) () -> RegisterService.register(name, phone, email, password, company, type)).write();
    }

    @PostMapping("forgot-password")
    @PermitAll
    public ResponseEntity<MapResponse> forgotPassword(@RequestParam String email) {
        return ((DbTransaction) () -> UserUtil.forgotPassword(email)).read();
    }

    @PostMapping("reset-password")
    @PermitAll
    public ResponseEntity<MapResponse> resetPassword(@RequestParam String code, @RequestParam String password) {
        return ((DbTransaction) () -> UserUtil.resetPassword(code, password)).write();
    }

    @GetMapping("licence")
    public ResponseEntity<MapResponse> licence() {
        return ((DbTransaction) () -> LicenceService.checkLicence()).read();
    }
}
