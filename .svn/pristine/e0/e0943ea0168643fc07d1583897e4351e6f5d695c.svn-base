package com.hionstudios.db;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletResponse;

import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.RowListenerAdapter;
import org.json.JSONArray;
import org.postgresql.jdbc.PgArray;
import org.postgresql.util.PGobject;

import com.hionstudios.ListResponse;
import com.hionstudios.MapResponse;

public interface Handler {
    Logger LOGGER = Logger.getLogger(Handler.class.getName());

    static void write(Object obj, HttpServletResponse res) {
        try (PrintWriter out = res.getWriter()) {
            out.print(obj);
        } catch (IOException e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
        }
    }

    static List<MapResponse> findAll(String sql, Object... params) {
        List<MapResponse> list = new ArrayList<>();
        findWith(sql, params, new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> map) {
                list.add(parse(map));
            }
        });
        return list;
    }

    static List<MapResponse> findAll(SqlQuery sql, SqlCriteria criteria) {
        List<MapResponse> list = new ArrayList<>();
        findWith(sql.toString(), criteria.getParams().toArray(), new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> map) {
                list.add(parse(map));
            }
        });
        return list;
    }

    static List<MapResponse> findAll(SqlQuery sql) {
        List<MapResponse> list = new ArrayList<>();
        findWith(sql, new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> map) {
                list.add(parse(map));
            }
        });
        return list;
    }

    static ListResponse firstColumn(String sql, Object... params) {
        ListResponse array = new ListResponse();
        findWith(sql, params, new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> row) {
                array.add(row.values().iterator().next());
            }
        });
        return array;
    }

    static void findWith(String sql, Object[] params, RowListenerAdapter listener) {
        Base.find(sql, params).with(listener);
    }

    static void findWith(String sql, RowListenerAdapter listener, Object... params) {
        Base.find(sql, params).with(listener);
    }

    static void findWith(String sql, RowListenerAdapter listener) {
        Base.find(sql).with(listener);
    }

    static void findWith(SqlQuery sql, RowListenerAdapter listener) {
        SqlCriteria criteria = sql.getCriteria();
        if (criteria != null) {
            Base.find(sql.toString(), criteria.getParams().toArray()).with(listener);
        } else {
            Base.find(sql.toString()).with(listener);
        }
    }

    static MapResponse parse(Map<String, Object> map) {
        MapResponse json = new MapResponse();
        map.forEach((a, b) -> {
            try {
                if (b instanceof PgArray) {
                    PgArray pgArray = (PgArray) b;
                    List<Object> list = new ArrayList<>();
                    Object arrayObject = pgArray.getArray();
                    if (arrayObject instanceof Object[]) {
                        Object[] objects = (Object[]) arrayObject;
                        for (Object object : objects) {
                            if (object instanceof PGobject) {
                                list.add(((PGobject) object).getValue());
                            } else {
                                list.add(object);
                            }
                        }
                        json.put(String.valueOf(a), list);
                    } else {
                        json.put(String.valueOf(a), new ListResponse(new JSONArray(pgArray.getArray())));
                    }
                } else {
                    json.put(String.valueOf(a), b);
                }
            } catch (SQLException e) {
                LOGGER.log(Level.SEVERE, e.getMessage(), e);
            }
        });
        return json;
    }

    static MapResponse findFirst(String sql, Object... params) {
        List<MapResponse> responses = findAll(sql, params);
        return responses.size() > 0 ? responses.get(0) : null;
    }

    static Object get(SqlQuery query) {
        return get(query.toString(), query.getCriteria().getParams().toArray());
    }

    static Object get(String sql, Object... params) {
        return Base.firstCell(sql, params);
    }

    static boolean exists(String sql, Object... params) {
        return get(sql, params) != null;
    }

    static Double getDouble(String sql, Object... params) {
        Object value = get(sql, params);
        return value instanceof BigDecimal ? ((BigDecimal) value).doubleValue() : (Double) value;
    }

    static Long getLong(String sql, Object... params) {
        return (Long) get(sql, params);
    }

    static Integer getInt(String sql, Object... params) {
        return (Integer) get(sql, params);
    }

    static String getString(String sql, Object... params) {
        return (String) get(sql, params);
    }

    static Boolean getBoolean(String sql, Object... params) {
        return (Boolean) get(sql, params);
    }

    static ListResponse getList(String sql, Object... params) {
        return (ListResponse) get(sql, params);
    }

    static MapResponse toDataGrid(SqlQuery sql, SqlQuery countSql, String... columns) {
        return toDataGrid(null, sql, countSql, columns);
    }

    static MapResponse toDataGrid(
            HashMap<String, HashMap<Object, Object>> transformer,
            SqlQuery sql, SqlQuery countSql,
            String... columns) {
        List<Object> array = new ArrayList<>();
        boolean toTransform = transformer != null;
        List<MapResponse> columnList = new ArrayList<>(columns.length);
        for (String column : columns) {
            MapResponse columnMap = new MapResponse();
            columnMap.put("id", column);
            columnMap.put("headerName", column);
            columnMap.put("field", column);
            columnMap.put("width", "200");
            columnList.add(columnMap);
        }
        findWith(sql, new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> row) {
                MapResponse rowMap = new MapResponse();
                for (String column : columns) {
                    Object value = row.get(column);
                    if (toTransform) {
                        Map<?, ?> t = transformer.get(column);
                        if (t != null) {
                            Object newValue = t.get(value);
                            if (newValue != null) {
                                value = newValue;
                            }
                        }
                    }
                    if (value instanceof PgArray) {
                        rowMap.put(column, toList((PgArray) value));
                    } else {
                        rowMap.put(column, value);
                    }
                }
                rowMap.put("id", row.get("id"));
                array.add(rowMap);
            }
        });
        MapResponse response = new MapResponse();
        response.put("rowCount", get(countSql)).put("columns", columnList);
        return response.put("rows", array);
    }

    static ListResponse toList(PgArray array) {
        try {
            return new ListResponse(new JSONArray(array.getArray()));
        } catch (SQLException e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
        }
        return null;
    }

    static MapResponse toKeyValue(String sql, String key, String value, Object... params) {
        MapResponse map = new MapResponse();
        findWith(sql, new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> row) {
                map.put(String.valueOf(row.get(key)), row.get(value));
            }
        }, params);
        return map;
    }

    static MapResponse toJson(String sql, String id, Object... params) {
        MapResponse response = new MapResponse();
        findWith(sql, new RowListenerAdapter() {
            @Override
            public void onNext(Map<String, Object> row) {
                response.put(String.valueOf(row.get(id)), parse(row));
            }
        }, params);
        return response;
    }

    static int count(String sql, Object... params) {
        return Handler.findAll(sql, params).size();
    }

    static MapResponse toDataGrid(String sql) {
        List<MapResponse> columnList = new ArrayList<>();
        List<String> columns = new ArrayList<String>();
        List<Object> rows = new ArrayList<>();
        MapResponse response;
        try {
            findWith(sql, new RowListenerAdapter() {
                @Override
                public void onNext(Map<String, Object> row) {
                    if (columnList.size() == 0) {
                        for (Map.Entry<String, Object> entry : row.entrySet()) {
                            String column = entry.getKey();
                            entry.getValue();
                            MapResponse columnMap = new MapResponse();
                            columns.add(column);
                            columnMap.put("id", column);
                            columnMap.put("headerName", column);
                            columnMap.put("field", column);
                            columnMap.put("minWidth", "200");
                            columnList.add(columnMap);
                        }
                    }
                    MapResponse rowMap = new MapResponse();
                    for (String column : columns) {
                        Object value = row.get(column);
                        if (value instanceof PgArray) {
                            rowMap.put(column, toList((PgArray) value));
                        } else {
                            rowMap.put(column, value);
                        }
                    }
                    Object id = row.get("id");
                    if (id == null) {
                        id = UUID.randomUUID().toString();
                    }
                    rowMap.put("id", id);
                    rows.add(rowMap);
                }
            });
            response = MapResponse.success();
        } catch (Exception e) {
            response = MapResponse.failure(e.getMessage());
        }
        response.put("columns", columnList);
        return response.put("rows", rows);
    }
}
