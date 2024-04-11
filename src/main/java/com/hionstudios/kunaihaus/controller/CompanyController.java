package com.hionstudios.kunaihaus.controller;

import java.util.LinkedHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.iam.IsAdmin;
import com.hionstudios.iam.IsUser;
import com.hionstudios.kunaihaus.flow.CompanyFlow;

@RestController
@RequestMapping("api/companies")
public class CompanyController {
    @GetMapping
    @IsAdmin
    public ResponseEntity<MapResponse> allCompanies(DataGridParams params) {
        return ((DbTransaction) () -> new CompanyFlow().allCompanies(params)).read();
    }

    @GetMapping("{id}")
    @IsAdmin
    public ResponseEntity<MapResponse> get(@PathVariable long id) {
        return ((DbTransaction) () -> new CompanyFlow().company(id)).read();
    }

    @GetMapping("my")
    @IsUser
    public ResponseEntity<MapResponse> myCompany() {
        return ((DbTransaction) () -> new CompanyFlow().myCompany()).read();
    }

    @PostMapping("{id}/subscribe")
    @IsAdmin
    public ResponseEntity<MapResponse> subscribe(
            @PathVariable long id,
            @RequestParam int years,
            @RequestParam String description,
            @RequestParam String method,
            @RequestParam double amount,
            @RequestParam String payment_date,
            @RequestParam(required = false) String reference_no,
            @RequestParam(required = false) String bank,
            @RequestParam(required = false) String branch) {
        return ((DbTransaction) () -> new CompanyFlow().subscribe(
                id,
                years,
                description,
                method,
                amount,
                payment_date,
                reference_no,
                bank,
                branch)).write();
    }

    @GetMapping("sme")
    @IsAdmin
    public ResponseEntity<MapResponse> smes(DataGridParams params) {
        return ((DbTransaction) () -> new CompanyFlow().smes(params)).read();
    }

    @GetMapping("sme/my")
    public ResponseEntity<MapResponse> mySme() {
        return ((DbTransaction) () -> new CompanyFlow().mySme()).read();
    }

    @PutMapping("sme/my")
    public ResponseEntity<MapResponse> mySme(
            @RequestParam String company,
            @RequestParam String address_1,
            @RequestParam String address_2,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam(required = false) String website,
            @RequestParam long province,
            @RequestParam int year,
            @RequestParam int emp_male,
            @RequestParam int emp_female,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam String description,
            @RequestParam boolean finance_advice,
            @RequestParam boolean green_finance,
            @RequestParam boolean smm,
            @RequestParam boolean women_led,
            @RequestParam(required = false) String facebook,
            @RequestParam(required = false) String instagram,
            @RequestParam(required = false) String twitter,
            @RequestParam(required = false) String snapchat) {

        return ((DbTransaction) () -> new CompanyFlow().mySme(
                company,
                address_1,
                address_2,
                phone,
                email,
                website,
                province,
                year,
                emp_male,
                emp_female,
                latitude,
                longitude,
                description,
                finance_advice,
                green_finance,
                smm,
                women_led,
                facebook,
                instagram,
                twitter,
                snapchat)).write();
    }

    @GetMapping("private-company")
    @IsAdmin
    public ResponseEntity<MapResponse> privateCompanies(DataGridParams params) {
        return ((DbTransaction) () -> new CompanyFlow().privateCompanies(params)).read();
    }

    @GetMapping("private-company/my")
    @IsUser
    public ResponseEntity<MapResponse> myPrivateCompany() {
        return ((DbTransaction) () -> new CompanyFlow().myPrivateCompany()).read();
    }

    @PutMapping("private-company/my")
    public ResponseEntity<MapResponse> myPrivateCompany(
            @RequestParam String company,
            @RequestParam String address_1,
            @RequestParam String address_2,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam(required = false) String website,
            @RequestParam long province,
            @RequestParam int year,
            @RequestParam int emp_male,
            @RequestParam int emp_female,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam String description,
            @RequestParam boolean finance_advice,
            @RequestParam boolean green_finance,
            @RequestParam boolean smm,
            @RequestParam(required = false) String facebook,
            @RequestParam(required = false) String instagram,
            @RequestParam(required = false) String twitter,
            @RequestParam(required = false) String snapchat) {

        return ((DbTransaction) () -> new CompanyFlow().myPrivateCompany(
                company,
                address_1,
                address_2,
                phone,
                email,
                website,
                province,
                year,
                emp_male,
                emp_female,
                latitude,
                longitude,
                description,
                finance_advice,
                green_finance,
                smm,
                facebook,
                instagram,
                twitter,
                snapchat)).write();
    }

    @GetMapping("bank")
    @IsAdmin
    public ResponseEntity<MapResponse> banks(DataGridParams params) {
        return ((DbTransaction) () -> new CompanyFlow().banks(params)).read();
    }

    @GetMapping("bank/my")
    @IsUser
    public ResponseEntity<MapResponse> myBank() {
        return ((DbTransaction) () -> new CompanyFlow().myBank()).read();
    }

    @PutMapping("bank/my")
    public ResponseEntity<MapResponse> myBank(
            @RequestParam String company,
            @RequestParam String address_1,
            @RequestParam String address_2,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam(required = false) String website,
            @RequestParam long province,
            @RequestParam int year,
            @RequestParam int emp_male,
            @RequestParam int emp_female,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam boolean climate_finance,
            @RequestParam boolean smm,
            @RequestParam(required = false) String facebook,
            @RequestParam(required = false) String instagram,
            @RequestParam(required = false) String twitter,
            @RequestParam(required = false) String snapchat) {

        return ((DbTransaction) () -> new CompanyFlow().myBank(
                company,
                address_1,
                address_2,
                phone,
                email,
                website,
                province,
                year,
                emp_male,
                emp_female,
                latitude,
                longitude,
                climate_finance,
                smm,
                facebook,
                instagram,
                twitter,
                snapchat)).write();
    }

    @GetMapping("development-partner")
    @IsAdmin
    public ResponseEntity<MapResponse> developmentPartners(DataGridParams params) {
        return ((DbTransaction) () -> new CompanyFlow().developmentPartners(params)).read();
    }

    @GetMapping("development-partner/my")
    @IsUser
    public ResponseEntity<MapResponse> myDevelopmentPartner() {
        return ((DbTransaction) () -> new CompanyFlow().myDevelopmentPartner()).read();
    }

    @PutMapping("development-partner/my")
    public ResponseEntity<MapResponse> myDevelopmentPartner(
            @RequestParam String company,
            @RequestParam String address_1,
            @RequestParam String address_2,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam(required = false) String website,
            @RequestParam long province,
            @RequestParam int projects,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam(required = false) String facebook,
            @RequestParam(required = false) String instagram,
            @RequestParam(required = false) String twitter,
            @RequestParam(required = false) String snapchat) {

        return ((DbTransaction) () -> new CompanyFlow().myDevelopmentPartner(
                company,
                address_1,
                address_2,
                phone,
                email,
                website,
                province,
                projects,
                latitude,
                longitude,
                facebook,
                instagram,
                twitter,
                snapchat)).write();
    }

    @GetMapping("government")
    @IsAdmin
    public ResponseEntity<MapResponse> governments(DataGridParams params) {
        return ((DbTransaction) () -> new CompanyFlow().governments(params)).read();
    }

    @GetMapping("government/my")
    @IsUser
    public ResponseEntity<MapResponse> myGovernment() {
        return ((DbTransaction) () -> new CompanyFlow().myGovernment()).read();
    }

    @PutMapping("government/my")
    public ResponseEntity<MapResponse> myGovernment(
            @RequestParam String company,
            @RequestParam String address_1,
            @RequestParam String address_2,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam(required = false) String website,
            @RequestParam long province,
            @RequestParam int year,
            @RequestParam int emp_male,
            @RequestParam int emp_female,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam boolean climate_finance,
            @RequestParam int population,
            @RequestParam(required = false) String facebook,
            @RequestParam(required = false) String instagram,
            @RequestParam(required = false) String twitter,
            @RequestParam(required = false) String snapchat) {

        return ((DbTransaction) () -> new CompanyFlow().myGovernment(
                company,
                address_1,
                address_2,
                phone,
                email,
                website,
                province,
                year,
                emp_male,
                emp_female,
                latitude,
                longitude,
                climate_finance,
                population,
                facebook,
                instagram,
                twitter,
                snapchat)).write();
    }

    @GetMapping("type")
    public ResponseEntity<MapResponse> companyTypes() {
        return ((DbTransaction) () -> new CompanyFlow().companyTypes()).read();
    }

    @GetMapping("subscription-cost")
    public ResponseEntity<MapResponse> subscriptionCost() {
        return ((DbTransaction) () -> new CompanyFlow().subscriptionCost()).read();
    }

    @PutMapping("subscription-cost")
    public ResponseEntity<MapResponse> subscriptionCost(@RequestParam LinkedHashMap<String, String> value) {
        return ((DbTransaction) () -> new CompanyFlow().subscriptionCost(value)).write();
    }
}
