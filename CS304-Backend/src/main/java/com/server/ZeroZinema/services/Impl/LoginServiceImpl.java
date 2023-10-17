package com.server.ZeroZinema.services.Impl;

import com.server.ZeroZinema.exception.ResourceNotFoundException;
import com.server.ZeroZinema.model.Login;
import com.server.ZeroZinema.payloads.LoginDto;
import com.server.ZeroZinema.repository.LoginRepository;
import com.server.ZeroZinema.services.LoginService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginRepository loginRepository;

    private LoginDto loginDto;


    @Override
    public LoginDto addLogin(Login login) {
        Login login1 = this.loginRepository.save(login);
        System.out.println(login1);
        return this.loginToDto(login1);
    }

    @Override
    public LoginDto getLoginById(Integer loginId) {
        Login login1 = this.loginRepository.findById(loginId)
                .orElseThrow(() -> new ResourceNotFoundException("Login","Id", loginId));
        return this.loginToDto(login1);
    }




    /*********  Dto to Login   **********/
    public Login dtoToLogin(@NotNull LoginDto loginDto){
        Login login = new Login();

        login.setEmail(loginDto.getEmail());
        login.setPassword(loginDto.getPassword());

        return login;
    }


    /*********** Login TO DTO *******/
    public LoginDto loginToDto(@NotNull Login login){
        LoginDto loginDto = new LoginDto();

        loginDto.setLoginId(login.getLoginId());
        loginDto.setEmail(login.getEmail());
        loginDto.setPassword(login.getPassword());


        return loginDto;
    }

}

