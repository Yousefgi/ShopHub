using Microsoft.EntityFrameworkCore;
using ShopHub.Application.DTOs.Admin;
using ShopHub.Application.Services.Interfaces;
using ShopHub.Infrastructure.Data;

namespace ShopHub.Infrastructure.Services;

public class AdminService : IAdminService
{
    private readonly AppDbContext _context;

    public AdminService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<DashboardStatsDto> GetDashboardStatsAsync()
    {
        return new DashboardStatsDto
        {
            ProductsCount = await _context.Products.CountAsync(),

            OrdersCount = await _context.Orders.CountAsync(),

            UsersCount = await _context.Users.CountAsync(),

            TotalRevenue = await _context.Orders.SumAsync(o => o.TotalAmount)
        };
    }

    public async Task<List<RecentOrderDto>> GetRecentOrdersAsync()
{
    return await _context.Orders
        .Include(o => o.User)
        .OrderByDescending(o => o.OrderDate)
        .Take(5)
        .Select(o => new RecentOrderDto
        {
            Id = o.Id,
            CustomerName = o.User.FullName,
            TotalAmount = o.TotalAmount,
            OrderDate = o.OrderDate,
            Status = o.Status.ToString()
        })
        .ToListAsync();
}
}