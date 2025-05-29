package com.in.StudentAuth.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomException {
    private LocalDateTime localDateTime;
    private String message;
}
