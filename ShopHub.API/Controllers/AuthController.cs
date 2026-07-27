using Microsoft.AspNetCore.Mvc;
using ShopHub.Application.DTOs.Auth;
using ShopHub.Application.Services.Interfaces;

namespace ShopHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;


    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }


    [HttpPost("register")]
    public async Task<ActionResult<AuthResponseDto>> Register(
        RegisterDto dto)
    {
        var result = await _authService.RegisterAsync(dto);

        return Ok(result);
    }



    [HttpPost("login")]
    public async Task<ActionResult<AuthResponseDto>> Login(
        LoginDto dto)
    {
        var result = await _authService.LoginAsync(dto);

        return Ok(result);
    }
}