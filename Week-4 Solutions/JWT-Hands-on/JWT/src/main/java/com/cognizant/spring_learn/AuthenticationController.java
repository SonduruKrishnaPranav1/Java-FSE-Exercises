package com.cognizant.spring_learn;

import com.cognizant.spring_learn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).build();
        }
        String token = jwtUtil.generateToken(principal.getName());
        return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
    }
}
