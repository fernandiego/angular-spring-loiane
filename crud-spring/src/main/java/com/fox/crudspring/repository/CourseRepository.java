package com.fox.crudspring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fox.crudspring.model.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {

}
