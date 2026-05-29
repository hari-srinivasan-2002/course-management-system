package com.example.Course_Registration.reposiory;

import com.example.Course_Registration.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface courseRepository
        extends JpaRepository<Course, Long> {
}