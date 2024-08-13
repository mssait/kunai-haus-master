package com.hionstudios.kunaihaus.oauth;

import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.tika.Tika;
import org.json.JSONArray;
import org.json.JSONObject;
import org.owasp.encoder.Encode;
import org.springframework.web.multipart.MultipartFile;

import com.hionstudios.MapResponse;
import com.hionstudios.http.HttpUtil;

public class WorkDrive extends ZohoApp {
    private static final String URL = "https://workdrive.zoho.in";
    private static final Logger LOGGER = Logger.getLogger(WorkDrive.class.getName());

    public WorkDrive() {
        super();
    }

    public static MapResponse upload(MultipartFile file, Folder folder) {
        return upload(file, Encode.forUriComponent(file.getOriginalFilename()), folder);
    }

    public static MapResponse upload(MultipartFile file, String filename, Folder folder) {
        try {
            return upload(file.getBytes(), filename, folder);
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
        }
        return null;
    }

    public static MapResponse upload(byte[] image, String filename, Folder folder) {
        try {
            filename = filename.replace(" ", "-");
            String mime = new Tika().detect(image);
            HashMap<String, String> params = new HashMap<>();
            params.put("filename", filename);
            params.put("parent_id", folder.get());
            params.put("override-name-exist", "true");
            MapResponse response = new WorkDrive()
                    .getResources(URL + "/api/v1/upload", "POST", params, null,
                            new HttpUtil.FileParam("content", filename, image, mime));
            return new MapResponse(new JSONObject(response)
                    .getJSONArray("data").getJSONObject(0).getJSONObject("attributes"));
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
        }
        return MapResponse.failure();
    }

    private static JSONObject fileJson(String status, String id) {
        return new JSONObject().put("data", new JSONArray().put(
                new JSONObject()
                        .put("attributes", new JSONObject().put("status", status))
                        .put("id", id)
                        .put("type", "files")));
    }

    public static MapResponse delete(String id) {
        String url = URL + "/api/v1/files";
        WorkDrive workDrive = new WorkDrive();
        workDrive.getResources(url, "PATCH", fileJson("51", id));
        try {
            return new MapResponse(new JSONObject(workDrive.getResources(url, "PATCH", fileJson("61", id))));
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
        }
        return null;
    }

    public static String upload(MultipartFile file, String filename) {
        MapResponse response = WorkDrive.upload(file, filename, Folder.WEBSITE);
        return response == null ? null : response.getString("resource_id");
    }

    public enum Folder {
        WEBSITE("me6u0c0cb0d46568848e6a29c96926679bccd");

        private final String id;

        Folder(String id) {
            this.id = id;
        }

        public String get() {
            return id;
        }
    }
}
