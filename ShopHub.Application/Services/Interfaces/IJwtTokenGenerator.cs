using ShopHub.Domain.Entities;

namespace ShopHub.Application.Services.Interfaces;

public interface IJwtTokenGenerator
{
    string GenerateToken(User user);
}