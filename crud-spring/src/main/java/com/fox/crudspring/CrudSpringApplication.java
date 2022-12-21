package com.fox.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.fox.crudspring.model.Course;
import com.fox.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular com spring");
			c.setCategory("front-end");		

			courseRepository.save(c);
		};
	}
}
