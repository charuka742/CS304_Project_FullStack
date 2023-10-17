package com.server.ZeroZinema.payloads;

import com.server.ZeroZinema.model.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class LoginDto {


        private int loginId;
        private String password;
        private String email;
        private int userId;

}
