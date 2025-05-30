package com.in.StudentAuth.repository;

import com.in.StudentAuth.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

    Optional<Student> getStudentByEmail(String email);
    Student  findStudentByEmail(String email);
}

