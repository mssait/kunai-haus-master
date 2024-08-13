package com.hionstudios.stream;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.hionstudios.http.ResponseUtil;

public class NdJsonStreamer {
    private PrintWriter out;

    public NdJsonStreamer(HttpServletResponse res) {
        try {
            this.out = res.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
        ResponseUtil.json(res);
        start();
    }

    public void stream(JSONObject json) {
        out.println(json);
        out.flush();
    }

    private void start() {
    }

    public void end() {
        out.close();
    }
}
