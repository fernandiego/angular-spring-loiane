package com.fox.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    
    @GetMapping
    // @RequestMapping(method = RequestMethod.GET) forma alternativa de getmapping
    public List<Object> list() {
        return null;
    }
}
