package net.todo.service;

import net.todo.dto.LoginDto;
import net.todo.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
