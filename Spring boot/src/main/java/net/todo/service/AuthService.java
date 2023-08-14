package net.todo.service;

import net.todo.dto.JwtAuthResponse;
import net.todo.dto.LoginDto;
import net.todo.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginDto loginDto);
}
