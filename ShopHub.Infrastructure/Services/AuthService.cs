using Microsoft.AspNetCore.Identity;
using ShopHub.Application.DTOs.Auth;
using ShopHub.Application.Repositories.Interfaces;
using ShopHub.Application.Services.Interfaces;
using ShopHub.Domain.Entities;

namespace ShopHub.Infrastructure.Services;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepository;
    private readonly IJwtTokenGenerator _jwtTokenGenerator;
    private readonly PasswordHasher<User> _passwordHasher;

    public AuthService(
        IUserRepository userRepository,
        IJwtTokenGenerator jwtTokenGenerator)
    {
        _userRepository = userRepository;
        _jwtTokenGenerator = jwtTokenGenerator;

        _passwordHasher = new PasswordHasher<User>();
    }


    public async Task<AuthResponseDto> RegisterAsync(RegisterDto dto)
    {
        var existingUser = await _userRepository
            .GetByEmailAsync(dto.Email);

        if (existingUser != null)
        {
            throw new Exception("Email already exists");
        }


        var user = new User
        {
            FullName = dto.FullName,
            Email = dto.Email,
            Role = "Customer"
        };


        user.PasswordHash = _passwordHasher.HashPassword(
            user,
            dto.Password
        );


        await _userRepository.AddAsync(user);

        await _userRepository.SaveChangesAsync();


        var token = _jwtTokenGenerator.GenerateToken(user);


        return new AuthResponseDto
        {
            Token = token,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role
        };
    }


    public async Task<AuthResponseDto> LoginAsync(LoginDto dto)
    {
        var user = await _userRepository
            .GetByEmailAsync(dto.Email);


        if (user == null)
        {
            throw new Exception("Invalid email or password");
        }


        var result = _passwordHasher.VerifyHashedPassword(
            user,
            user.PasswordHash,
            dto.Password
        );


        if (result == PasswordVerificationResult.Failed)
        {
            throw new Exception("Invalid email or password");
        }


        var token = _jwtTokenGenerator.GenerateToken(user);


        return new AuthResponseDto
        {
            Token = token,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role
        };
    }
}