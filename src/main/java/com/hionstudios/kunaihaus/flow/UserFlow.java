package com.hionstudios.kunaihaus.flow;

import java.util.HashMap;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.Handler;
import com.hionstudios.db.SqlCriteria;
import com.hionstudios.db.SqlQuery;
import com.hionstudios.db.SqlUtil;

public class UserFlow {
    public MapResponse users(DataGridParams params) {
        String sql = "Select Users.Id, Users.Name, Users.Phone, Users.Email, Companies.Name Company From Users Join Companies On Companies.Id = Users.Company_Id";
        String count = "Select Count(*) From Users Join Companies On Companies.Id = Users.Company_Id";

        String[] columns = {
                "Name",
                "Phone",
                "Email",
                "Company"
        };

        HashMap<String, String> mapping = new HashMap<>(1);
        mapping.put("Company", "Companies.Name");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }
}
