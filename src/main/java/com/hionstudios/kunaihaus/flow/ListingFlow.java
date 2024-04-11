package com.hionstudios.kunaihaus.flow;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import com.hionstudios.MapResponse;
import com.hionstudios.db.Handler;
import com.hionstudios.db.SqlCriteria;
import com.hionstudios.db.SqlQuery;

public class ListingFlow {
    public MapResponse sme(long id) {
        String sql = "Select Companies.Name, Provinces.Region, Provinces.Province, Company_Types.Type, Smes.*, Array(Select Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index) Billboards From Companies Join Smes On Smes.Company_Id = Companies.Id Join Company_Types On Company_Types.Id = Companies.Type_Id Left Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = ? And (Companies.Has_Details And Companies.Has_Billboards)";
        return Handler.findFirst(sql, id);
    }

    public MapResponse sme(List<String> f_region, List<String> f_province) {

        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From SMEs Join Companies On Companies.Id = SMEs.Company_Id And (Companies.Has_Details And Companies.Has_Billboards) Left Join Provinces On Provinces.Id = Companies.Province_Id Join Company_Types On Company_Types.Id = Companies.Type_Id";

        ArrayList<String> filter = new ArrayList<>();

        if (f_region != null && f_region.size() > 0) {
            filter.add("(Provinces.Region In ('" + String.join("','", f_region) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr);

        SqlQuery query = new SqlQuery(sql, criteria);

        List<MapResponse> smes = Handler.findAll(query);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> regions = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> regionIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Provinces.Region From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join SMEs On SMEs.Company_Id = Companies.Id";

        for (MapResponse sme : Handler.findAll(filterSql)) {
            Long provinceId = sme.getLong("id");
            if (provinceId == null) {
                continue;
            }
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", sme.getString("province"));

                provinces.add(province);
            }
            if (!regionIds.contains(provinceId)) {
                regionIds.add(provinceId);

                MapResponse region = new MapResponse(2);
                region.put("id", provinceId);
                region.put("region", sme.getString("region"));

                regions.add(region);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("regions", regions);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", smes);
        response.put("filters", filters);

        return response;
    }

    public MapResponse bank(long id) {
        String sql = "Select Companies.Name, Provinces.Region, Provinces.Province, Company_Types.Type, Banks.*, Array(Select Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index) Billboards From Companies Join Banks On Banks.Company_Id = Companies.Id Join Company_Types On Company_Types.Id = Companies.Type_Id Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = ? And (Companies.Has_Details And Companies.Has_Billboards)";
        return Handler.findFirst(sql, id);
    }

    public MapResponse bank(List<String> f_region, List<String> f_province) {

        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From Banks Join Companies On Companies.Id = Banks.Company_Id And (Companies.Has_Details And Companies.Has_Billboards) Left Join Provinces On Provinces.Id = Companies.Province_Id Join Company_Types On Company_Types.Id = Companies.Type_Id";

        ArrayList<String> filter = new ArrayList<>();

        if (f_region != null && f_region.size() > 0) {
            filter.add("(Provinces.Region In ('" + String.join("','", f_region) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr);

        SqlQuery query = new SqlQuery(sql, criteria);

        List<MapResponse> banks = Handler.findAll(query);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> regions = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> regionIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Provinces.Region From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join Banks On Banks.Company_Id = Companies.Id";

        for (MapResponse sme : Handler.findAll(filterSql)) {
            Long provinceId = sme.getLong("id");
            if (provinceId == null) {
                continue;
            }
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", sme.getString("province"));

                provinces.add(province);
            }
            if (!regionIds.contains(provinceId)) {
                regionIds.add(provinceId);

                MapResponse region = new MapResponse(2);
                region.put("id", provinceId);
                region.put("region", sme.getString("region"));

                regions.add(region);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("regions", regions);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", banks);
        response.put("filters", filters);

        return response;
    }

    public MapResponse government(long id) {
        String sql = "Select Companies.Name, Provinces.Region, Provinces.Province, Company_Types.Type, Government_Departments.*, Array(Select Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index) Billboards From Companies Join Government_Departments On Government_Departments.Company_Id = Companies.Id Join Company_Types On Company_Types.Id = Companies.Type_Id Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = ? And (Companies.Has_Details And Companies.Has_Billboards)";
        return Handler.findFirst(sql, id);
    }

    public MapResponse government(List<String> f_region, List<String> f_province) {

        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From Government_Departments Join Companies On Companies.Id = Government_Departments.Company_Id And (Companies.Has_Details And Companies.Has_Billboards) Left Join Provinces On Provinces.Id = Companies.Province_Id Join Company_Types On Company_Types.Id = Companies.Type_Id";

        ArrayList<String> filter = new ArrayList<>();

        if (f_region != null && f_region.size() > 0) {
            filter.add("(Provinces.Region In ('" + String.join("','", f_region) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr);

        SqlQuery query = new SqlQuery(sql, criteria);

        List<MapResponse> governments = Handler.findAll(query);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> regions = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> regionIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Provinces.Region From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join Government_Departments On Government_Departments.Company_Id = Companies.Id";

        for (MapResponse sme : Handler.findAll(filterSql)) {
            Long provinceId = sme.getLong("id");
            if (provinceId == null) {
                continue;
            }
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", sme.getString("province"));

                provinces.add(province);
            }
            if (!regionIds.contains(provinceId)) {
                regionIds.add(provinceId);

                MapResponse region = new MapResponse(2);
                region.put("id", provinceId);
                region.put("region", sme.getString("region"));

                regions.add(region);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("regions", regions);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", governments);
        response.put("filters", filters);

        return response;
    }

    public MapResponse developmentPartner(long id) {
        String sql = "Select Companies.Name, Provinces.Region, Provinces.Province, Company_Types.Type, Development_Partners.*, Array(Select Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index) Billboards From Companies Join Development_Partners On Development_Partners.Company_Id = Companies.Id Join Company_Types On Company_Types.Id = Companies.Type_Id Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = ? And (Companies.Has_Details And Companies.Has_Billboards)";
        return Handler.findFirst(sql, id);
    }

    public MapResponse developmentPartner(List<String> f_region, List<String> f_province) {

        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From Development_Partners Join Companies On Companies.Id = Development_Partners.Company_Id And (Companies.Has_Details And Companies.Has_Billboards) Left Join Provinces On Provinces.Id = Companies.Province_Id Join Company_Types On Company_Types.Id = Companies.Type_Id";

        ArrayList<String> filter = new ArrayList<>();

        if (f_region != null && f_region.size() > 0) {
            filter.add("(Provinces.Region In ('" + String.join("','", f_region) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr);

        SqlQuery query = new SqlQuery(sql, criteria);

        List<MapResponse> developmentPartners = Handler.findAll(query);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> regions = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> regionIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Provinces.Region From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join Development_Partners On Development_Partners.Company_Id = Companies.Id";

        for (MapResponse sme : Handler.findAll(filterSql)) {
            Long provinceId = sme.getLong("id");
            if (provinceId == null) {
                continue;
            }
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", sme.getString("province"));

                provinces.add(province);
            }
            if (!regionIds.contains(provinceId)) {
                regionIds.add(provinceId);

                MapResponse region = new MapResponse(2);
                region.put("id", provinceId);
                region.put("region", sme.getString("region"));

                regions.add(region);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("regions", regions);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", developmentPartners);
        response.put("filters", filters);

        return response;
    }

    public MapResponse privateCompany(long id) {
        String sql = "Select Companies.Name, Provinces.Region, Provinces.Province, Company_Types.Type, Private_Companies.*, Array(Select Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index) Billboards From Companies Join Private_Companies On Private_Companies.Company_Id = Companies.Id Join Company_Types On Company_Types.Id = Companies.Type_Id Join Provinces On Provinces.Id = Companies.Province_Id Where Companies.Id = ? And (Companies.Has_Details And Companies.Has_Billboards)";
        return Handler.findFirst(sql, id);
    }

    public MapResponse privateCompany(List<String> f_region, List<String> f_province) {

        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From Private_Companies Join Companies On Companies.Id = Private_Companies.Company_Id And (Companies.Has_Details And Companies.Has_Billboards) Left Join Provinces On Provinces.Id = Companies.Province_Id Join Company_Types On Company_Types.Id = Companies.Type_Id";

        ArrayList<String> filter = new ArrayList<>();

        if (f_region != null && f_region.size() > 0) {
            filter.add("(Provinces.Region In ('" + String.join("','", f_region) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr);

        SqlQuery query = new SqlQuery(sql, criteria);

        List<MapResponse> privateCompanies = Handler.findAll(query);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> regions = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> regionIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Provinces.Region From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join Private_Companies On Private_Companies.Company_Id = Companies.Id";

        for (MapResponse sme : Handler.findAll(filterSql)) {
            Long provinceId = sme.getLong("id");
            if (provinceId == null) {
                continue;
            }
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", sme.getString("province"));

                provinces.add(province);
            }
            if (!regionIds.contains(provinceId)) {
                regionIds.add(provinceId);

                MapResponse region = new MapResponse(2);
                region.put("id", provinceId);
                region.put("region", sme.getString("region"));

                regions.add(region);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("regions", regions);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", privateCompanies);
        response.put("filters", filters);

        return response;
    }

    public MapResponse region(String region, List<String> f_province, List<String> f_type) {
        MapResponse map = new MapResponse(4);
        map.put("new-guinea-islands", "New Guinea Islands");
        map.put("momase", "Momase Region");
        map.put("southern", "Southern Region");
        map.put("highland", "Highland Region");

        region = map.getString(region);

        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From Companies Join Provinces On Provinces.Id = Companies.Province_Id And Provinces.Region = ? Join Company_Types On Company_Types.Id = Companies.Type_Id And (Companies.Has_Details And Companies.Has_Billboards)";

        ArrayList<String> filter = new ArrayList<>();

        if (f_type != null && f_type.size() > 0) {
            filter.add("(Company_Types.Type In ('" + String.join("','", f_type) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr, region);

        SqlQuery query = new SqlQuery(sql, criteria);

        List<MapResponse> smes = Handler.findAll(query);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> types = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> typeIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Companies.Type_Id, Company_Types.Type From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join Company_Types On Company_Types.Id = Companies.Type_Id Where Provinces.Region = ?";

        List<MapResponse> filterList = Handler.findAll(filterSql, region);

        for (MapResponse filterMap : filterList) {

            Long provinceId = filterMap.getLong("id");
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", filterMap.getString("province"));

                provinces.add(province);
            }

            Long typeId = filterMap.getLong("type_id");
            if (!typeIds.contains(typeId)) {
                typeIds.add(typeId);

                MapResponse type = new MapResponse(2);
                type.put("id", typeId);
                type.put("type", filterMap.getString("type"));

                types.add(type);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("types", types);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", smes);
        response.put("filters", filters);

        return response;
    }

    public MapResponse search(String query, List<String> f_region, List<String> f_province, List<String> f_type) {
        query = "%" + query + "%";
        String sql = "Select Companies.Id, Companies.Name, Companies.Province_Id, Provinces.Region, Provinces.Province, Company_Types.Type, (Select Billboards.Image From Billboards Where Billboards.Company_Id = Companies.Id And Billboards.Active Order By Billboards.Index Limit 1) Billboard From Companies Join Provinces On Provinces.Id = Companies.Province_Id Join Company_Types On Company_Types.Id = Companies.Type_Id And (Companies.Has_Details And Companies.Has_Billboards) Where (Company_Types.Type iLike ? Or Companies.Name iLike ?)";

        ArrayList<String> filter = new ArrayList<>();

        if (f_type != null && f_type.size() > 0) {
            filter.add("(Company_Types.Type In ('" + String.join("','", f_type) + "'))");
        }

        if (f_province != null && f_province.size() > 0) {
            filter.add("(Provinces.Province In ('" + String.join("','", f_province) + "'))");
        }

        String filterStr = filter.size() > 0 ? "And " + String.join("And", filter) : "";
        SqlCriteria criteria = new SqlCriteria(filterStr, query, query);

        SqlQuery sqlQuery = new SqlQuery(sql, criteria);

        List<MapResponse> smes = Handler.findAll(sqlQuery);

        List<MapResponse> provinces = new ArrayList<>();
        List<MapResponse> types = new ArrayList<>();

        HashSet<Long> provinceIds = new HashSet<>();
        HashSet<Long> typeIds = new HashSet<>();

        String filterSql = "Select Provinces.Id, Provinces.Province, Companies.Type_Id, Company_Types.Type From Provinces Join Companies On Companies.Province_Id = Provinces.Id And (Companies.Has_Details And Companies.Has_Billboards) Join Company_Types On Company_Types.Id = Companies.Type_Id Where (Company_Types.Type iLike ? Or Companies.Name iLike ?)";

        List<MapResponse> filterList = Handler.findAll(filterSql, query, query);

        for (MapResponse filterMap : filterList) {

            Long provinceId = filterMap.getLong("id");
            if (!provinceIds.contains(provinceId)) {
                provinceIds.add(provinceId);

                MapResponse province = new MapResponse(2);
                province.put("id", provinceId);
                province.put("province", filterMap.getString("province"));

                provinces.add(province);
            }

            Long typeId = filterMap.getLong("type_id");
            if (!typeIds.contains(typeId)) {
                typeIds.add(typeId);

                MapResponse type = new MapResponse(2);
                type.put("id", typeId);
                type.put("type", filterMap.getString("type"));

                types.add(type);
            }
        }

        MapResponse filters = new MapResponse(2);
        filters.put("types", types);
        filters.put("provinces", provinces);

        MapResponse response = new MapResponse(2);
        response.put("listing", smes);
        response.put("filters", filters);

        return response;
    }
}
