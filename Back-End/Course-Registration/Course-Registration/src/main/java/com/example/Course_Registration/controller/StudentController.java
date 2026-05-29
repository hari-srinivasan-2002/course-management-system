package com.example.Course_Registration.controller;

import com.example.Course_Registration.entity.Student;
import com.example.Course_Registration.reposiory.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    // GET ALL STUDENTS
    @GetMapping("/students")
    public List<Student> getStudents() {

        return studentRepository.findAll();
    }

    // ADD STUDENT
    @PostMapping("/students")
    public Student addStudent(
            @RequestBody Student student) {

        return studentRepository.save(student);
    }

    // DELETE STUDENT
    @DeleteMapping("/students/{id}")
    public void deleteStudent(
            @PathVariable Long id) {

        studentRepository.deleteById(id);
    }

    // UPDATE STUDENT
    @PutMapping("/students/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student updatedStudent) {

        Student student =
                studentRepository.findById(id)
                        .orElseThrow();

        student.setName(
                updatedStudent.getName());

        student.setEmail(
                updatedStudent.getEmail());

        student.setPhone(
                updatedStudent.getPhone());

        student.setCourse(
                updatedStudent.getCourse());

        return studentRepository.save(student);
    }
}