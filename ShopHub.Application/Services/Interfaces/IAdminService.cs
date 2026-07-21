using ShopHub.Application.DTOs.Admin;

namespace ShopHub.Application.Services.Interfaces;

public interface IAdminService
{
    Task<DashboardStatsDto> GetDashboardStatsAsync();

    Task<List<RecentOrderDto>> GetRecentOrdersAsync();
}