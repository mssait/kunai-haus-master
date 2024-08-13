package com.hionstudios.kunaihaus.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hionstudios.MapResponse;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.kunaihaus.flow.ListingFlow;

@RestController
@RequestMapping("api/listings")
public class ListingController {
    @GetMapping("sme")
    public ResponseEntity<MapResponse> sme(
            @RequestParam(required = false) List<String> f_region,
            @RequestParam(required = false) List<String> f_province) {
        return ((DbTransaction) () -> new ListingFlow().sme(f_region, f_province)).read();
    }

    @GetMapping("sme/{id}")
    public ResponseEntity<MapResponse> sme(@PathVariable long id) {
        return ((DbTransaction) () -> new ListingFlow().sme(id)).read();
    }

    @GetMapping("bank")
    public ResponseEntity<MapResponse> bank(
            @RequestParam(required = false) List<String> f_region,
            @RequestParam(required = false) List<String> f_province) {
        return ((DbTransaction) () -> new ListingFlow().bank(f_region, f_province)).read();
    }

    @GetMapping("bank/{id}")
    public ResponseEntity<MapResponse> bank(@PathVariable long id) {
        return ((DbTransaction) () -> new ListingFlow().bank(id)).read();
    }

    @GetMapping("government")
    public ResponseEntity<MapResponse> government(
            @RequestParam(required = false) List<String> f_region,
            @RequestParam(required = false) List<String> f_province) {
        return ((DbTransaction) () -> new ListingFlow().government(f_region, f_province)).read();
    }

    @GetMapping("government/{id}")
    public ResponseEntity<MapResponse> government(@PathVariable long id) {
        return ((DbTransaction) () -> new ListingFlow().government(id)).read();
    }

    @GetMapping("development-partner")
    public ResponseEntity<MapResponse> developmentPartner(
            @RequestParam(required = false) List<String> f_region,
            @RequestParam(required = false) List<String> f_province) {
        return ((DbTransaction) () -> new ListingFlow().developmentPartner(f_region, f_province)).read();
    }

    @GetMapping("development-partner/{id}")
    public ResponseEntity<MapResponse> developmentPartner(@PathVariable long id) {
        return ((DbTransaction) () -> new ListingFlow().developmentPartner(id)).read();
    }

    @GetMapping("private-company")
    public ResponseEntity<MapResponse> privateCompany(
            @RequestParam(required = false) List<String> f_region,
            @RequestParam(required = false) List<String> f_province) {
        return ((DbTransaction) () -> new ListingFlow().privateCompany(f_region, f_province)).read();
    }

    @GetMapping("private-company/{id}")
    public ResponseEntity<MapResponse> privateCompany(@PathVariable long id) {
        return ((DbTransaction) () -> new ListingFlow().privateCompany(id)).read();
    }

    @GetMapping("region/{region}")
    public ResponseEntity<MapResponse> region(
            @PathVariable String region,
            @RequestParam(required = false) List<String> f_province,
            @RequestParam(required = false) List<String> f_type) {
        return ((DbTransaction) () -> new ListingFlow().region(region, f_province, f_type)).read();
    }

    @GetMapping("search")
    public ResponseEntity<MapResponse> search(
            @RequestParam String query,
            @RequestParam(required = false) List<String> f_region,
            @RequestParam(required = false) List<String> f_province,
            @RequestParam(required = false) List<String> f_type) {
        return ((DbTransaction) () -> new ListingFlow().search(query, f_region, f_province, f_type)).read();
    }
}
