package com.server.ZeroZinema.controller;

import com.server.ZeroZinema.model.Login;
import com.server.ZeroZinema.model.User;
import com.server.ZeroZinema.payloads.LoginDto;
import com.server.ZeroZinema.payloads.UserDto;
import com.server.ZeroZinema.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/login")
public class LoginController{
    @Autowired
    private LoginService loginService;

    @PostMapping("/addlogin")
    public ResponseEntity<LoginDto> addLogin(@RequestBody Login login){
        LoginDto createdLoginDto = this.loginService.addLogin(login);
        return  new ResponseEntity<>(createdLoginDto, HttpStatus.CREATED);
    }

    /* GET LOGIN BY ID */
    @GetMapping("{loginId}")
    public ResponseEntity<LoginDto> getLoginById(@PathVariable("loginId") Integer loginId){
        return ResponseEntity.ok(this.loginService.getLoginById(loginId));
    }

}