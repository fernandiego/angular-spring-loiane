package com.fox.crudspring.repository;

import org.springframework.data.repository.CrudRepository;

import com.fox.crudspring.model.Course;

public interface CourseRepository extends CrudRepository<Course, Long> {

}
