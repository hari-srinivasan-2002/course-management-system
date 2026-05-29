package com.example.Course_Registration.service;

import com.example.Course_Registration.entity.Student;

import com.example.Course_Registration.reposiory.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // SAVE
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // GET ALL
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // GET BY ID
    public Student getStudentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Student Not Found"));
    }

    // UPDATE
    public Student updateStudent(Long id,
                                 Student updatedStudent) {

        Student student = getStudentById(id);

        student.setName(updatedStudent.getName());
        student.setEmail(updatedStudent.getEmail());
        student.setPhone(updatedStudent.getPhone());
        student.setCourse(updatedStudent.getCourse());

        return repository.save(student);
    }

    // DELETE
    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}