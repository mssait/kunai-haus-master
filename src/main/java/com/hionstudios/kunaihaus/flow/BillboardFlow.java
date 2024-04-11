package com.hionstudios.kunaihaus.flow;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.Handler;
import com.hionstudios.db.SqlCriteria;
import com.hionstudios.db.SqlQuery;
import com.hionstudios.db.SqlUtil;
import com.hionstudios.iam.UserUtil;
import com.hionstudios.kunaihaus.model.Billboard;
import com.hionstudios.kunaihaus.model.BillboardRequest;
import com.hionstudios.kunaihaus.model.BillboardRequestBillboard;
import com.hionstudios.kunaihaus.model.BillboardStatus;
import com.hionstudios.kunaihaus.model.Company;
import com.hionstudios.kunaihaus.oauth.WorkDrive;
import com.hionstudios.time.TimeUtil;

public class BillboardFlow {
    public MapResponse billboards() {
        long userid = UserUtil.getUserid();
        String sql = "Select Image, Index From Billboards Where Company_Id = (Select Company_Id From Users Where Users.Id = ?) Order By Index";
        List<MapResponse> billboards = Handler.findAll(sql, userid);
        MapResponse response = new MapResponse();
        response.put("billboards", billboards);
        return response;
    }

    public MapResponse myRequests(DataGridParams params) {
        long userid = UserUtil.getUserid();
        String sql = "Select Billboard_Requests.Id, Array(Select Billboards.Image From Billboards Join Billboard_Request_Billboards On Billboard_Request_Billboards.Billboard_Id = Billboards.Id And Billboard_Request_Billboards.Request_Id = Billboard_Requests.Id) Images, Billboard_Statuses.Status, Billboard_Requests.Remark, Billboard_Requests.Created_Time \"Created Time\", Billboard_Requests.Modified_Time \"Modified Time\" From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id";

        String count = "Select Count(*) From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id";

        HashMap<String, String> mapping = new HashMap<>(2);
        mapping.put("Created Time", "Companies.Created_Time");
        mapping.put("Modified Time", "Companies.Modified_Time");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        String[] columns = {
                "Images",
                "Status",
                "Remark",
                "Created Time",
                "Modified Time"
        };

        SqlCriteria customCriteria = new SqlCriteria(
                "Billboard_Requests.Company_Id = (Select Company_Id From Users Where Users.Id = ?)", userid);

        SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params, customCriteria);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse requests(DataGridParams params) {
        String sql = "Select Billboard_Requests.Id, Companies.Name Company, Array(Select Billboards.Image From Billboards Join Billboard_Request_Billboards On Billboard_Request_Billboards.Billboard_Id = Billboards.Id And Billboard_Request_Billboards.Request_Id = Billboard_Requests.Id) Images, Billboard_Statuses.Status, Billboard_Requests.Remark, Billboard_Requests.Created_Time \"Created Time\", Billboard_Requests.Modified_Time \"Modified Time\" From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        String count = "Select Count(*) From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        HashMap<String, String> mapping = new HashMap<>(2);
        mapping.put("Company", "Companies.Name");
        mapping.put("Created Time", "Billboard_Requests.Created_Time");
        mapping.put("Modified Time", "Billboard_Requests.Modified_Time");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        String[] columns = {
                "Company",
                "Images",
                "Status",
                "Remark",
                "Created Time",
                "Modified Time"
        };

        SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params, null);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse pendingRequests(DataGridParams params) {
        String sql = "Select Billboard_Requests.Id \"Action\", Billboard_Requests.Id, Companies.Name Company, Array(Select Billboards.Image From Billboards Join Billboard_Request_Billboards On Billboard_Request_Billboards.Billboard_Id = Billboards.Id And Billboard_Request_Billboards.Request_Id = Billboard_Requests.Id) Images, Billboard_Requests.Created_Time \"Created Time\" From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        String count = "Select Count(*) From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        HashMap<String, String> mapping = new HashMap<>(2);
        mapping.put("Company", "Companies.Name");
        mapping.put("Created Time", "Billboard_Requests.Created_Time");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        String[] columns = {
                "Action",
                "Company",
                "Images",
                "Created Time",
        };
        SqlCriteria customCriteria = new SqlCriteria("Billboard_Statuses.Status = ?", BillboardStatus.PENDING);
        SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params, customCriteria);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse approvedRequests(DataGridParams params) {
        String sql = "Select Billboard_Requests.Id, Companies.Name Company, Array(Select Billboards.Image From Billboards Join Billboard_Request_Billboards On Billboard_Request_Billboards.Billboard_Id = Billboards.Id And Billboard_Request_Billboards.Request_Id = Billboard_Requests.Id) Images, Billboard_Requests.Created_Time \"Created Time\", Billboard_Requests.Modified_Time \"Approved Time\" From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        String count = "Select Count(*) From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        HashMap<String, String> mapping = new HashMap<>(3);
        mapping.put("Company", "Companies.Name");
        mapping.put("Created Time", "Billboard_Requests.Created_Time");
        mapping.put("Approved Time", "Billboard_Requests.Modified_Time");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        String[] columns = {
                "Company",
                "Images",
                "Created Time",
                "Approved Time",
        };

        SqlCriteria customCriteria = new SqlCriteria("Billboard_Statuses.Status = ?", BillboardStatus.APPROVED);
        SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params, customCriteria);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse rejectedRequests(DataGridParams params) {
        String sql = "Select Billboard_Requests.Id, Companies.Name Company, Array(Select Billboards.Image From Billboards Join Billboard_Request_Billboards On Billboard_Request_Billboards.Billboard_Id = Billboards.Id And Billboard_Request_Billboards.Request_Id = Billboard_Requests.Id) Images, Billboard_Requests.Remark, Billboard_Requests.Created_Time \"Created Time\", Billboard_Requests.Modified_Time \"Rejected Time\" From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        String count = "Select Count(*) From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Companies On Companies.Id = Billboard_Requests.Company_Id";

        HashMap<String, String> mapping = new HashMap<>(3);
        mapping.put("Company", "Companies.Name");
        mapping.put("Created Time", "Billboard_Requests.Created_Time");
        mapping.put("Rejected Time", "Billboard_Requests.Modified_Time");

        for (int i = 0; i < params.filterColumn.length; i++) {
            params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
        }

        String[] columns = {
                "Company",
                "Images",
                "Remark",
                "Created Time",
                "Rejected Time",
        };

        SqlCriteria customCriteria = new SqlCriteria("Billboard_Statuses.Status = ?", BillboardStatus.REJECTED);
        SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
        SqlCriteria filter = SqlUtil.constructCriteria(params, customCriteria);

        return Handler.toDataGrid(
                new SqlQuery(sql, criteria),
                new SqlQuery(count, filter),
                columns);
    }

    public MapResponse billboardRequest(long id) {
        String sql = "Select Array_Agg(Billboards.Image) Images, Billboard_Statuses.Status From Billboard_Requests Join Billboard_Statuses On Billboard_Statuses.Id = Billboard_Requests.Status_Id Join Billboard_Request_Billboards On Billboard_Request_Billboards.Request_Id = Billboard_Requests.Id Join Billboards On Billboards.Id = Billboard_Request_Billboards.Billboard_Id Where Billboard_Requests.Id = ? Group By Billboard_Requests.Id, Billboard_Statuses.Status";

        return Handler.findFirst(sql, id);
    }

    public MapResponse billboards(MultipartFile[] images) {
        long userid = UserUtil.getUserid();
        long companyId = Handler.getLong("Select Company_Id From Users Where Users.Id = ?", userid);
        BillboardRequest request = new BillboardRequest(companyId);
        request.insert();
        long requestId = request.getLongId();
        for (int i = 0; i < images.length; i++) {
            MultipartFile image = images[i];
            String billboardImg = WorkDrive.upload(image, UUID.randomUUID().toString());
            Billboard billboard = new Billboard(billboardImg, companyId);
            billboard.insert();
            long billboardId = billboard.getLongId();
            new BillboardRequestBillboard(billboardId, requestId).insert();
        }
        return MapResponse.success();
    }

    public MapResponse removeImage(String image) {
        long userid = UserUtil.getUserid();

        Billboard billboard = Billboard.findFirst(
                "Image = ? And Company_Id = (Select Company_Id From Users Where Users.Id = ?)", image, userid);
        long id = billboard.getLongId();
        BillboardRequestBillboard.delete("billboard_id = ?", id);
        BillboardRequest.delete("id in (Select Billboard_Id From Billboard_Request_Billboards Where Billboard_Id = ?)",
                id);
        Company.update("has_billboards = ?", "Id Not In (Select Company_Id From Billboards Where Active) And Has_Billboards = ?",
                false, true);
        if (billboard.delete()) {
            WorkDrive.delete(image);
            return MapResponse.success();
        } else {
            return MapResponse.failure();
        }
    }

    public MapResponse reorder(String[] images) {
        long userid = UserUtil.getUserid();
        for (int i = 0; i < images.length; i++) {
            Billboard.update("index = ?",
                    "Image = ? And Company_Id = (Select Company_Id From Users Where Users.Id = ?)",
                    i, images[i], userid);
        }
        return MapResponse.success();
    }

    public MapResponse billboardRequestStatus(long id, boolean status, String remark) {
        BillboardRequest request = BillboardRequest.findById(id);
        if (status) {
            request.set("status_id", BillboardStatus.getId(BillboardStatus.APPROVED));
            Billboard.update("Active = True",
                    "Id In (Select Billboard_Id From Billboard_Request_Billboards Where Billboard_Request_Billboards.Request_Id = ?)",
                    id);
            Company.update("has_billboards = ?",
                    "Id = (Select Company_Id From Billboards Where Billboards.Id = (Select Billboard_Id From Billboard_Request_Billboards Where Billboard_Request_Billboards.Request_Id = ?))",
                    true, id);
        } else {
            request.set("status_id", BillboardStatus.getId(BillboardStatus.REJECTED));
            if (remark != null && !remark.equals("")) {
                request.set("remark", remark);
            }
        }
        request.set("modified_time", TimeUtil.currentTime());
        request.set("modified_by", UserUtil.getUserid());
        request.saveIt();

        return MapResponse.success();
    }
}
