package com.cognizant.spring_learn.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "mysecretkey";

    public String generateToken(String username) {
        long currentTime = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(currentTime))
                .setExpiration(new Date(currentTime + 10 * 60 * 1000)) // 10 minutes
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
