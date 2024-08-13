package com.hionstudios.kunaihaus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
    @GetMapping({
            "/",
            "login.sm",
            "shop.sm",
            "index.html",
            "/{x:[\\w\\-]+}",
            "/{x:[\\w\\-]+}/{y:[\\w\\-]+}",
            "/{x:[\\w\\-]+}/{y:[\\w\\-]+}/{z:[\\w\\-]+}",
            "/{x:[\\w\\-]+}/{y:[\\w\\-]+}/{z:[\\w\\-]+}/{x1:[\\w\\-]+}",
            "/{x:[\\w\\-]+}/{y:[\\w\\-]+}/{z:[\\w\\-]+}/{x1:[\\w\\-]+}/{x2:[\\w\\-]+}"
    })
    public ModelAndView home() {
        return new ModelAndView("index");
    }
}
