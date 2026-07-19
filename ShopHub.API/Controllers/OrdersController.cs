using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopHub.Application.DTOs.Order;
using ShopHub.Application.Services.Interfaces;
using System.Security.Claims;
namespace ShopHub.API.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _service;

    public OrdersController(IOrderService service)
    {
        _service = service;
    }


    // Customer + Admin
    [HttpPost]
public async Task<IActionResult> Create(CreateOrderDto dto)
{
    var userId = int.Parse(
        User.FindFirstValue(ClaimTypes.NameIdentifier)!
    );

    var order = await _service.CreateAsync(dto, userId);

    return CreatedAtAction(
        nameof(GetById),
        new { id = order.Id },
        order);
}


    // Admin only
    [HttpGet]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetAll()
    {
        var orders = await _service.GetAllAsync();

        return Ok(orders);
    }

      [HttpGet("my-orders")]
public async Task<IActionResult> GetMyOrders()
{
    var userId = int.Parse(
        User.FindFirstValue(ClaimTypes.NameIdentifier)!
    );

    var orders = await _service.GetMyOrdersAsync(userId);

    return Ok(orders);
}


    // Customer + Admin
   [HttpGet("{id}")]
public async Task<IActionResult> GetById(int id)
{
    var order = await _service.GetByIdAsync(id);

    var userId = int.Parse(
        User.FindFirstValue(ClaimTypes.NameIdentifier)!
    );

    var role = User.FindFirstValue(ClaimTypes.Role);

    if (role != "Admin" && order.UserId != userId)
    {
        return Forbid();
    }

    return Ok(order);
}


    // Admin only
    [HttpPut("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Update(
        int id,
        UpdateOrderDto dto)
    {
        var order = await _service.UpdateAsync(id, dto);

        return Ok(order);
    }


    // Admin only
    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteAsync(id);

        return NoContent();
    }

  
}