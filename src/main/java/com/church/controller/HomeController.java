package com.church.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        return "home";
    }

    @GetMapping("/about")
    public String about(Model model) {
        return "about";
    }

    @GetMapping("/sermons")
    public String sermons(Model model) {
        return "sermons";
    }

    @GetMapping("/events")
    public String events(Model model) {
        return "events";
    }

    @GetMapping("/gallery")
    public String gallery(Model model) {
        return "gallery";
    }

    @GetMapping("/contact")
    public String contact(Model model) {
        return "contact";
    }
}