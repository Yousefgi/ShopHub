using ShopHub.Application.DTOs.Auth;
using ShopHub.Application.Repositories.Interfaces;
using ShopHub.Application.Services.Interfaces;

namespace ShopHub.Infrastructure.Services;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepository;

    public AuthService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<AuthResponseDto> RegisterAsync(RegisterDto dto)
    {
        throw new NotImplementedException();
    }

    public async Task<AuthResponseDto> LoginAsync(LoginDto dto)
    {
        throw new NotImplementedException();
    }
}