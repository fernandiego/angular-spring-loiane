package com.fox.crudspring.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fox.crudspring.model.Course;
import com.fox.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;



    @GetMapping
    // @RequestMapping(method = RequestMethod.GET) forma alternativa de getmapping
    public @ResponseBody Iterable<Course> list() {
        return courseRepository.findAll();
        }
}
