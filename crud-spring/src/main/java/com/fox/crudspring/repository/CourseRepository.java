package com.fox.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.fox.crudspring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
