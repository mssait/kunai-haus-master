package com.hionstudios.kunaihaus;

import java.util.List;

import com.hionstudios.MapResponse;
import com.hionstudios.db.Handler;

public class CachedSelect {
    private static MapResponse cachedSelect = new MapResponse();

    private static String getSql(String select) {
        String sql = null;
        switch (select) {
            case "company-type":
                sql = "Select Id, Type \"label\" From Company_Types";
                break;
            case "province":
                sql = "Select Id, Province \"label\" From Provinces";
                break;
        }
        return sql;
    }

    public MapResponse select(String select) {
        String sql = getSql(select);
        MapResponse response = cachedSelect.getMap(sql);
        if (response == null) {
            List<MapResponse> list = Handler.findAll(sql);
            response = new MapResponse().put("options", list);
            cachedSelect.put(sql, response);
        }
        return response;
    }

    public MapResponse dynamicSelect(String select) {
        String sql = getSql(select);
        MapResponse response = cachedSelect.getMap(sql);
        if (response == null) {
            response = new MapResponse().put("options", Handler.firstColumn(sql));
            cachedSelect.put(sql, response);
        }
        return response;
    }

    public static void dropCache(String select) {
        cachedSelect.remove(getSql(select));
    }
}
