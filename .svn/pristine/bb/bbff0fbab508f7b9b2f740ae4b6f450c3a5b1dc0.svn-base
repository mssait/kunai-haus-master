package com.hionstudios;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class TestController {
    @RequestMapping("test")
    public ResponseEntity<MapResponse> test() {
        return ResponseEntity.ok(MapResponse.success("Test successful"));
    }

    @RequestMapping("")
    public ModelAndView home() {
        return new ModelAndView("index");
    }
}
