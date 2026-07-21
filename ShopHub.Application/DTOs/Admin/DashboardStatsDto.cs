namespace ShopHub.Application.DTOs.Admin;

public class DashboardStatsDto
{
    public int ProductsCount { get; set; }

    public int OrdersCount { get; set; }

    public int UsersCount { get; set; }

    public decimal TotalRevenue { get; set; }
}