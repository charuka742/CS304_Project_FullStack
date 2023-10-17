package com.server.ZeroZinema.payloads;


import com.server.ZeroZinema.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {

    private int userId;
    private String name;
    private String email;
    private LocalDate dob;
    private String mobileNo;
    private String city;
    private String password;
    private Role role;

}
