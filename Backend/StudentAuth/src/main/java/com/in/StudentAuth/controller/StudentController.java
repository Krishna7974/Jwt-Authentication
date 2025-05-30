package com.in.StudentAuth.controller;

import com.in.StudentAuth.jwt.JwtUtils;
import com.in.StudentAuth.jwt.LoginRequest;
import com.in.StudentAuth.jwt.LoginResponse;
import com.in.StudentAuth.model.Student;
import com.in.StudentAuth.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManagerBuilder authenticationManagerBuilder;

    @GetMapping("/getAll")
    public ResponseEntity<?> getStudent() {
        List<Student> students = studentService.getStd();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerStudent(@RequestBody Student std) {
        Student student = studentService.setStudent(std);
        return new ResponseEntity<>(student, HttpStatus.ACCEPTED);
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> loginStudent(@RequestBody Student std) {
//        Student student = studentService.loginStudent(std);
//        if (student != null) {
//            return new ResponseEntity<>(student, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>("Invalid Student", HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping("/login2")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication;
        try {
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword());
            authentication = authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        } catch (AuthenticationException exception) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Bad credentials");
            map.put("status", false);
            return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String jwtToken = jwtUtils.generateTokenFromUsername(userDetails);

        Student std=studentService.getStdByEmail(userDetails.getUsername());

        LoginResponse response = new LoginResponse(jwtToken, userDetails.getUsername(),std.getName());

        return ResponseEntity.ok(response);
    }
}
