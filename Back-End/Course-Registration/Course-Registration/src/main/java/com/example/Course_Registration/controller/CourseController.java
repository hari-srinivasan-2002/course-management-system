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

    // GET ALL COURSES
    @GetMapping("/courses")
    public List<Course> getAllCourses() {

        return courseRepository.findAll();
    }

    // ADD COURSE
    @PostMapping("/courses")
    public Course addCourse(
            @RequestBody Course course) {

        return courseRepository.save(course);
    }

    // DELETE COURSE
    @DeleteMapping("/courses/{id}")
    public void deleteCourse(
            @PathVariable Long id) {

        courseRepository.deleteById(id);
    }

    // UPDATE COURSE
    @PutMapping("/courses/{id}")
    public Course updateCourse(
            @PathVariable Long id,
            @RequestBody Course updatedCourse) {

        Course course =
                courseRepository.findById(id)
                        .orElseThrow();

        course.setCourseName(
                updatedCourse.getCourseName());

        course.setFee(
                updatedCourse.getFee());

        course.setTrainerName(
                updatedCourse.getTrainerName());

        return courseRepository.save(course);
    }
}