package com.in.StudentAuth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler extends Exception{

    @ExceptionHandler
    public ResponseEntity<?> exceptionHandler(Exception ex){
        CustomException customException=new CustomException(LocalDateTime.now(),ex.getMessage());
        return new ResponseEntity<>(customException, HttpStatus.NOT_FOUND);
    }
}
