package com.example.Course_Registration.controller;

import com.example.Course_Registration.entity.Course;


import com.example.Course_Registration.reposiory.courseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private courseRepository courseRepository;

    // GET
    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // POST
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    // DELETE
    @DeleteMapping("/courses/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseRepository.deleteById(id);
    }

    // UPDATE
    @PutMapping("/courses/{id}")
    public Course updateCourse(@PathVariable Long id,
                               @RequestBody Course updatedCourse) {

        Course course = courseRepository.findById(id).orElseThrow();

        course.setCourse_name(updatedCourse.getCourse_name());
        course.setFee(updatedCourse.getFee());
        course.setTrainer_name(updatedCourse.getTrainer_name());

        return courseRepository.save(course);
    }
}