package com.in.StudentAuth.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginResponse {

    private String jwtToken;

    private String email;

    private String name;
}
