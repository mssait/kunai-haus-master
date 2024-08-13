package com.hionstudios.kunaihaus.flow;

import java.util.HashMap;
import java.util.LinkedHashMap;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.Handler;
import com.hionstudios.db.SqlCriteria;
import com.hionstudios.db.SqlQuery;
import com.hionstudios.db.SqlUtil;
import com.hionstudios.iam.UserUtil;
import com.hionstudios.kunaihaus.model.Bank;
import com.hionstudios.kunaihaus.model.Company;
import com.hionstudios.kunaihaus.model.CompanyType;
import com.hionstudios.kunaihaus.model.DevelopmentPartner;
import com.hionstudios.kunaihaus.model.GovernmentDepartment;
import com.hionstudios.kunaihaus.model.PrivateCompany;
import com.hionstudios.kunaihaus.model.Sme;
import com.hionstudios.kunaihaus.model.Subscription;
import com.hionstudios.time.TimeUtil;

public class CompanyFlow {
    public MapResponse company(long id) {
        String sql = "Select * From Companies Join Company_Types On Company_Types.Id = Companies.Type_Id Where Companies.Id = ?";
        return Handler.findFirst(sql, id);
    }

    public MapResponse myCompany() {
        long userid = UserUtil.getUserid();
        String sql = "Select * From Companies Join Company_Types On Company_Types.Id = Companies.Type_Id Where Companies.Id = (Select Company_Id From Users Where Id = ?)";
        return Handler.findFirst(sql, userid);
    }

    public MapResponse mySme() {
        long userid = UserUtil.getUserid();
        String sql = "Select * From Companies Join Smes On Smes.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = (Select Company_Id From Users Where Id = ?)";
        return Handler.findFirst(sql, userid);
    }

    public MapResponse mySme(
            String company,
            String address_1,
            String address_2,
            String phone,
            String email,
            String website,
            long province,
            int year,
            int emp_male,
            int emp_female,
            Double latitude,
            Double longitude,
            String description,
            boolean finance_advice,
            boolean green_finance,
            boolean smm,
            boolean women_led,
            String facebook,
            String instagram,
            String twitter,
            String snapchat) {
        long userid = UserUtil.getUserid();
        long companyid = Handler.getLong("Select Company_Id From Users Where Id = ?", userid);
        Company.update("name = ?, province_id = ?, has_details = ?", "id = ?", company, province, true, companyid);

        Sme sme = Sme.findFirst("company_id = ?", companyid);
        sme.set("address_1", address_1);
        sme.set("address_2", address_2);
        sme.set("phone", phone);
        sme.set("email", email);
        sme.set("website", website);
        sme.set("year", year);
        sme.set("emp_male", emp_male);
        sme.set("emp_female", emp_female);
        sme.set("latitude", latitude);
        sme.set("longitude", longitude);
        sme.set("description", description);
        sme.set("finance_advice", finance_advice);
        sme.set("green_finance", green_finance);
        sme.set("smm", smm);
        sme.set("women_led", women_led);
        sme.set("facebook", facebook);
        sme.set("instagram", instagram);
        sme.set("twitter", twitter);
        sme.set("snapchat", snapchat);
        sme.saveIt();

        return MapResponse.success();
    }

    public MapResponse myBank() {
        long userid = UserUtil.getUserid();
        String sql = "Select * From Companies Join Banks On Banks.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = (Select Company_Id From Users Where Id = ?)";
        return Handler.findFirst(sql, userid);
    }

    public MapResponse myBank(
            String company,
            String address_1,
            String address_2,
            String phone,
            String email,
            String website,
            long province,
            int year,
            int emp_male,
            int emp_female,
            Double latitude,
            Double longitude,
            boolean climate_finance,
            boolean smm,
            String facebook,
            String instagram,
            String twitter,
            String snapchat) {
        long userid = UserUtil.getUserid();
        long companyid = Handler.getLong("Select Company_Id From Users Where Id = ?", userid);
        Company.update("name = ?, province_id = ?, has_details = ?", "id = ?", company, province, true, companyid);

        Bank bank = Bank.findFirst("company_id = ?", companyid);
        bank.set("address_1", address_1);
        bank.set("address_2", address_2);
        bank.set("phone", phone);
        bank.set("email", email);
        bank.set("website", website);
        bank.set("year", year);
        bank.set("emp_male", emp_male);
        bank.set("emp_female", emp_female);
        bank.set("latitude", latitude);
        bank.set("longitude", longitude);
        bank.set("climate_finance", climate_finance);
        bank.set("smm", smm);
        bank.set("facebook", facebook);
        bank.set("instagram", instagram);
        bank.set("twitter", twitter);
        bank.set("snapchat", snapchat);
        bank.saveIt();

        return MapResponse.success();
    }

    public MapResponse myPrivateCompany() {
        long userid = UserUtil.getUserid();
        String sql = "Select * From Companies Join Private_Companies On Private_Companies.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = (Select Company_Id From Users Where Id = ?)";
        return Handler.findFirst(sql, userid);
    }

    public MapResponse myPrivateCompany(
            String company,
            String address_1,
            String address_2,
            String phone,
            String email,
            String website,
            long province,
            int year,
            int emp_male,
            int emp_female,
            Double latitude,
            Double longitude,
            String description,
            boolean finance_advice,
            boolean green_finance,
            boolean smm,
            String facebook,
            String instagram,
            String twitter,
            String snapchat) {
        long userid = UserUtil.getUserid();
        long companyid = Handler.getLong("Select Company_Id From Users Where Id = ?", userid);
        Company.update("name = ?, province_id = ?, has_details = ?", "id = ?", company, province, true, companyid);

        PrivateCompany privateCompany = PrivateCompany.findFirst("company_id = ?", companyid);
        privateCompany.set("address_1", address_1);
        privateCompany.set("address_2", address_2);
        privateCompany.set("phone", phone);
        privateCompany.set("email", email);
        privateCompany.set("website", website);
        privateCompany.set("year", year);
        privateCompany.set("emp_male", emp_male);
        privateCompany.set("emp_female", emp_female);
        privateCompany.set("latitude", latitude);
        privateCompany.set("longitude", longitude);
        privateCompany.set("description", description);
        privateCompany.set("finance_advice", finance_advice);
        privateCompany.set("green_finance", green_finance);
        privateCompany.set("smm", smm);
        privateCompany.set("facebook", facebook);
        privateCompany.set("instagram", instagram);
        privateCompany.set("twitter", twitter);
        privateCompany.set("snapchat", snapchat);
        privateCompany.saveIt();

        return MapResponse.success();
    }

    public MapResponse myGovernment() {
        long userid = UserUtil.getUserid();
        String sql = "Select * From Companies Join Government_Departments On Government_Departments.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = (Select Company_Id From Users Where Id = ?)";
        return Handler.findFirst(sql, userid);
    }

    public MapResponse myGovernment(String company,
            String address_1,
            String address_2,
            String phone,
            String email,
            String website,
            long province,
            int year,
            int emp_male,
            int emp_female,
            Double latitude,
            Double longitude,
            boolean climate_finance,
            int population,
            String facebook,
            String instagram,
            String twitter,
            String snapchat) {
        long userid = UserUtil.getUserid();
        long companyid = Handler.getLong("Select Company_Id From Users Where Id = ?", userid);
        Company.update("name = ?, province_id = ?, has_details = ?", "id = ?", company, province, true, companyid);

        GovernmentDepartment government = GovernmentDepartment.findFirst("company_id = ?", companyid);
        government.set("address_1", address_1);
        government.set("address_2", address_2);
        government.set("phone", phone);
        government.set("email", email);
        government.set("website", website);
        government.set("year", year);
        government.set("emp_male", emp_male);
        government.set("emp_female", emp_female);
        government.set("latitude", latitude);
        government.set("longitude", longitude);
        government.set("climate_finance", climate_finance);
        government.set("population", population);
        government.set("facebook", facebook);
        government.set("instagram", instagram);
        government.set("twitter", twitter);
        government.set("snapchat", snapchat);
        government.saveIt();

        return MapResponse.success();
    }

    public MapResponse myDevelopmentPartner() {
        long userid = UserUtil.getUserid();
        String sql = "Select * From Companies Join Development_Partners On Development_Partners.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = (Select Company_Id From Users Where Id = ?)";
        return Handler.findFirst(sql, userid);
    }

    public MapResponse myDevelopmentPartner(
            String company,
            String address_1,
            String address_2,
            String phone,
            String email,
            String website,
            long province,
            int projects,
            Double latitude,
            Double longitude,
            String facebook,
            String instagram,
            String twitter,
            String snapchat) {
        long userid = UserUtil.getUserid();
        long companyid = Handler.getLong("Select Company_Id From Users Where Id = ?", userid);
        Company.update("name = ?, province_id = ?, has_details = ?", "id = ?", company, province, true, companyid);

        DevelopmentPartner developmentPartner = DevelopmentPartner.findFirst("company_id = ?", companyid);
        developmentPartner.set("address_1", address_1);
        developmentPartner.set("address_2", address_2);
        developmentPartner.set("phone", phone);
        developmentPartner.set("email", email);
        developmentPartner.set("website", website);
        developmentPartner.set("projects", projects);
        developmentPartner.set("latitude", latitude);
        developmentPartner.set("longitude", longitude);
        developmentPartner.set("facebook", facebook);
        developmentPartner.set("instagram", instagram);
        developmentPartner.set("twitter", twitter);
        developmentPartner.set("snapchat", snapchat);
        developmentPartner.saveIt();

        return MapResponse.success();
    }

    public MapResponse allCompanies(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Companies.Name Company, Provinces.Region, Provinces.Province, Company_Types.Type \"Company Type\", Subscriptions.End_Date \"Subscribed Till\", Companies.Created_Time \"Created Time\" From Users Join Companies On Companies.Id = Users.Company_Id Join Company_Types On Company_Types.Id = Companies.Type_Id Left Join (Select Distinct On (Company_Id) * From Subscriptions) Subscriptions On Subscriptions.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id Join Company_Types On Company_Types.Id = Companies.Type_Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        HashMap<String, String> mapping = new HashMap<>(5);
        mapping.put("Company Type", "Company_Types.Type");
        mapping.put("Company", "Companies.Name");
        mapping.put("Name", "Users.Name");
        mapping.put("Subscribed Till", "Subscriptions.End_Date");
        mapping.put("Created Time", "Companies.Created_Time");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        String[] columns = {
                "Name",
                "Company",
                "Region",
                "Province",
                "Company Type",
                "Subscribed Till",
                "Created Time"
        };
        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse smes(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Companies.Name company, Provinces.Region, Provinces.Province, Subscriptions.End_Date \"Subscribed Till\", Smes.Year \"Year Founded\", Smes.Emp_Male \"Male Employees\", Smes.Emp_Female \"Female Employees\", Smes.Women_Led \"Women Led\", Smes.Finance_Advice \"Finance Advice\", Smes.Green_Finance \"Green Finance\", Smes.SMM \"Social Media Marketing\", Smes.Website, Smes.Email, Smes.Phone From Users Join Companies On Companies.Id = Users.Company_Id Left Join (Select Distinct On (Company_Id) * From Subscriptions) Subscriptions On Subscriptions.Company_Id = Companies.Id Join Smes On Smes.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id Join Smes On Smes.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        HashMap<String, String> mapping = new HashMap<>(10);
        mapping.put("Company", "Companies.Name");
        mapping.put("Name", "Users.Name");
        mapping.put("Subscribed Till", "Subscriptions.End_Date");
        mapping.put("Year Founded", "Smes.Year");
        mapping.put("Male Employees", "Smes.Emp_Male");
        mapping.put("Female Employees", "Smes.Emp_Female");
        mapping.put("Women Led", "Smes.Women_Led");
        mapping.put("Finance Advice", "Smes.Finance_Advice");
        mapping.put("Green Finance", "Smes.Green_Finance");
        mapping.put("Social Media Marketing", "Smes.SMM");
        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }
        String[] columns = {
                "Name",
                "Company",
                "Region",
                "Province",
                "Subscribed Till",
                "Year Founded",
                "Male Employees",
                "Female Employees",
                "Women Led",
                "Finance Advice",
                "Green Finance",
                "Social Media Marketing",
                "Website",
                "Email",
                "Phone"
        };

        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse privateCompanies(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Companies.Name company, Provinces.Region, Provinces.Province, Subscriptions.End_Date \"Subscribed Till\", Private_Companies.Year \"Year Founded\", Private_Companies.Emp_Male \"Male Employees\", Private_Companies.Emp_Female \"Female Employees\", Private_Companies.Finance_Advice \"Finance Advice\", Private_Companies.Green_Finance \"Green Finance\", Private_Companies.SMM \"Social Media Marketing\", Private_Companies.Website, Private_Companies.Email, Private_Companies.Phone From Users Join Companies On Companies.Id = Users.Company_Id Left Join (Select Distinct On (Company_Id) * From Subscriptions) Subscriptions On Subscriptions.Company_Id = Companies.Id Join Private_Companies On Private_Companies.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id Join Private_Companies On Private_Companies.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        HashMap<String, String> mapping = new HashMap<>(9);
        mapping.put("Company", "Companies.Name");
        mapping.put("Name", "Users.Name");
        mapping.put("Subscribed Till", "Subscriptions.End_Date");
        mapping.put("Year Founded", "Private_Companies.Year");
        mapping.put("Male Employees", "Private_Companies.Emp_Male");
        mapping.put("Female Employees", "Private_Companies.Emp_Female");
        mapping.put("Finance Advice", "Private_Companies.Finance_Advice");
        mapping.put("Green Finance", "Private_Companies.Green_Finance");
        mapping.put("Social Media Marketing", "Private_Companies.SMM");
        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }
        String[] columns = {
                "Name",
                "Company",
                "Region",
                "Province",
                "Subscribed Till",
                "Year Founded",
                "Male Employees",
                "Finance Advice",
                "Green Finance",
                "Social Media Marketing",
                "Website",
                "Email",
                "Phone"
        };
        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse banks(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Companies.Name company, Provinces.Province, Provinces.Region, Subscriptions.End_Date \"Subscribed Till\", Banks.Year \"Year Founded\", Banks.Emp_Male \"Male Employees\", Banks.Emp_Female \"Female Employees\", Banks.Climate_Finance \"Climate Finance\", Banks.SMM \"Social Media Marketing\", Banks.Website, Banks.Email, Banks.Phone From Users Join Companies On Companies.Id = Users.Company_Id Left Join (Select Distinct On (Company_Id) * From Subscriptions) Subscriptions On Subscriptions.Company_Id = Companies.Id Join Banks On Banks.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id Join Banks On Banks.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        HashMap<String, String> mapping = new HashMap<>(8);
        mapping.put("Company", "Companies.Name");
        mapping.put("Name", "Users.Name");
        mapping.put("Subscribed Till", "Subscriptions.End_Date");
        mapping.put("Year Founded", "Banks.Year");
        mapping.put("Male Employees", "Banks.Emp_Male");
        mapping.put("Female Employees", "Banks.Emp_Female");
        mapping.put("Climate Finance", "Banks.Climate_Finance");
        mapping.put("Social Media Marketing", "Banks.SMM");
        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }
        String[] columns = {
                "Name",
                "Company",
                "Region",
                "Province",
                "Subscribed Till",
                "Year Founded",
                "Male Employees",
                "Climate Finance",
                "Social Media Marketing",
                "Website",
                "Email",
                "Phone"
        };
        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse developmentPartners(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Companies.Name company, Provinces.Region, Provinces.Province, Subscriptions.End_Date \"Subscribed Till\", Development_Partners.Website, Development_Partners.Email, Development_Partners.Phone From Users Join Companies On Companies.Id = Users.Company_Id Left Join (Select Distinct On (Company_Id) * From Subscriptions) Subscriptions On Subscriptions.Company_Id = Companies.Id Join Development_Partners On Development_Partners.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";
        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id Join Development_Partners On Development_Partners.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        HashMap<String, String> mapping = new HashMap<>(3);
        mapping.put("Company", "Companies.Name");
        mapping.put("Name", "Users.Name");
        mapping.put("Subscribed Till", "Subscriptions.End_Date");
        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }
        String[] columns = {
                "Name",
                "Company",
                "Region",
                "Province",
                "Subscribed Till",
                "Website",
                "Email",
                "Phone"
        };
        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse governments(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Companies.Name company, Provinces.Region, Provinces.Province, Subscriptions.End_Date \"Subscribed Till\", Government_Departments.Climate_Finance \"Climate Finance\", Government_Departments.Website, Government_Departments.Email, Government_Departments.Phone From Users Join Companies On Companies.Id = Users.Company_Id Left Join (Select Distinct On (Company_Id) * From Subscriptions) Subscriptions On Subscriptions.Company_Id = Companies.Id Join Government_Departments On Government_Departments.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";
        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id Join Government_Departments On Government_Departments.Company_Id = Companies.Id Left Join Provinces On Provinces.Id = Companies.Province_Id";

        HashMap<String, String> mapping = new HashMap<>(4);
        mapping.put("Company", "Companies.Name");
        mapping.put("Name", "Users.Name");
        mapping.put("Subscribed Till", "Subscriptions.End_Date");
        mapping.put("Climate Finance", "Government_Departments.Climate_Finance");
        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }
        String[] columns = {
                "Name",
                "Company",
                "Region",
                "Province",
                "Subscribed Till",
                "Climate Finance",
                "Website",
                "Email",
                "Phone"
        };
        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse companyTypes() {
        String sql = "Select Company_Types.* From Company_Types Join Companies On Companies.Type_Id = Company_Types.Id Join Users On Users.Company_Id = Companies.Id And Users.Id = ?";
        long userid = UserUtil.getUserid();
        return Handler.findFirst(sql, userid);
    }

    public MapResponse subscribe(
            long company,
            int years,
            String description,
            String method,
            double amount,
            String payment_date,
            String reference_no,
            String bank,
            String branch) {
        long now = TimeUtil.currentTime();

        long start = TimeUtil.today();
        long end = TimeUtil.end(now + years * 365l * 24 * 60 * 60 * 1000);

        Subscription subscription = new Subscription(
                company,
                start,
                end,
                now,
                description,
                method,
                amount,
                payment_date,
                reference_no,
                bank,
                branch);
        return subscription.insert() ? MapResponse.success() : MapResponse.failure();
    }

    public MapResponse subscriptionCost() {
        String sql = "Select * From Company_Types";
        return Handler.toKeyValue(sql, "type", "subscription_cost");
    }

    public MapResponse subscriptionCost(LinkedHashMap<String, String> params) {
        params.forEach((type, cost) -> {
            CompanyType.update("subscription_cost = ?", "type = ?", Double.parseDouble(cost), type);
        });
        return MapResponse.success();
    }
}
