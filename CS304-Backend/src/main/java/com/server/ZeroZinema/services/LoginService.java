package com.server.ZeroZinema.services;

import com.server.ZeroZinema.model.Login;
import com.server.ZeroZinema.payloads.LoginDto;


public interface LoginService {

    LoginDto addLogin(Login login);

    LoginDto getLoginById(Integer loginId);



}
