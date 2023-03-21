package com.fox.crudspring.dto.mapper;

import com.fox.crudspring.dto.CourseDTO;
import com.fox.crudspring.enums.Category;
import com.fox.crudspring.model.Course;
import org.springframework.stereotype.Component;

@Component
public class CourseMapper {

    public CourseDTO toDTO(Course course) {
        if (course == null) {
            return null;
        }
        return new CourseDTO(course.getId(), course.getName(), Category.FRONT_END.getValue());
    }

    public Course toEntity(CourseDTO courseDTO) {

        if (courseDTO == null) {
            return null;
        }

        Course course = new Course();
        if (courseDTO.id() != null) {
            course.setId(courseDTO.id());
        }
        course.setName(courseDTO.name());
        course.setCategory(Category.BACK_END);
        course.setStatus("Ativo");
        return course;
    }
}