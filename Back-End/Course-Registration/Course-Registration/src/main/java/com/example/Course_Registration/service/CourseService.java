package com.example.Course_Registration.service;

import com.example.Course_Registration.entity.Course;

import com.example.Course_Registration.reposiory.courseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private courseRepository repository;

    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    public Course saveCourse(Course course) {
        return repository.save(course);
    }

    public void deleteCourse(Long id) {
        repository.deleteById(id);
    }
}