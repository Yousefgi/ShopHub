using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ShopHub.Domain.Entities;

namespace ShopHub.Infrastructure.Data;

public static class DbSeeder
{
    public static async Task SeedAdminAsync(AppDbContext context)
    {
        if (await context.Users.AnyAsync(u => u.Role == "Admin"))
            return;

        var hasher = new PasswordHasher<User>();

        var admin = new User
        {
            FullName = "ShopHub Admin",
            Email = "admin@shophub.com",
            Role = "Admin"
        };

        admin.PasswordHash = hasher.HashPassword(admin, "Admin123!");

        context.Users.Add(admin);

        await context.SaveChangesAsync();
    }
}