using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopHub.Application.Services.Interfaces;

namespace ShopHub.API.Controllers;

[Authorize(Roles = "Admin")]
[ApiController]
[Route("api/admin")]
public class AdminController : ControllerBase
{
    private readonly IAdminService _adminService;

    public AdminController(IAdminService adminService)
    {
        _adminService = adminService;
    }

    [HttpGet("dashboard")]
    public async Task<IActionResult> GetDashboard()
    {
        var stats = await _adminService.GetDashboardStatsAsync();

        return Ok(stats);
    }

    [HttpGet("recent-orders")]
public async Task<IActionResult> GetRecentOrders()
{
    var orders = await _adminService.GetRecentOrdersAsync();

    return Ok(orders);
}
}