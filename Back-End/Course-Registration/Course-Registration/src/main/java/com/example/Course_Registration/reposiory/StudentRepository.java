package com.example.Course_Registration.reposiory;

import com.example.Course_Registration.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository
        extends JpaRepository<Student, Long> {
}