package com.in.StudentAuth.service;

import com.in.StudentAuth.model.Student;

import java.util.List;

public interface StudentService {

    List<Student> getStd();
    Student setStudent(Student std);
    Student loginStudent(Student std);
    Student getStdByEmail(String email);
}
