package com.in.StudentAuth.service;

import com.in.StudentAuth.model.Student;
import com.in.StudentAuth.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<Student> getStd() {
        List<Student> studentList = studentRepository.findAll();
        if (studentList.isEmpty()) {
            throw new RuntimeException("No data found");
        } else return studentList;
    }

    @Override
    public Student setStudent(Student std) {
        if (std.getName().isEmpty() || std.getEmail().isEmpty() || std.getPassword().isEmpty()) {
            throw new RuntimeException("Please fill all the details");
        } else {
            Optional<Student> optional = studentRepository.getStudentByEmail(std.getEmail());
            std.setPassword(passwordEncoder.encode(std.getPassword()));
            if (optional.isPresent()) {
                throw new RuntimeException("Email already Registered");
            } else return studentRepository.save(std);
        }
    }

    @Override
    public Student loginStudent(Student std) {
        Optional<Student> optional = studentRepository.getStudentByEmail(std.getEmail());
        if (optional.isPresent()) {
            Student preStd = optional.get();
            if (preStd.getPassword().equals(std.getPassword())) {
                return preStd;
            }
        }
        throw new RuntimeException("Invalid Credentials");
    }

    public Student getStdByEmail(String email) {
        return studentRepository.findStudentByEmail(email);
    }


}
