using Microsoft.AspNetCore.Mvc;
using ShopHub.Application.DTOs.Order;
using ShopHub.Application.Services.Interfaces;

namespace ShopHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _service;

    public OrdersController(IOrderService service)
    {
        _service = service;
    }


    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var orders = await _service.GetAllAsync();

        return Ok(orders);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var order = await _service.GetByIdAsync(id);

        return Ok(order);
    }


    [HttpPost]
    public async Task<IActionResult> Create(CreateOrderDto dto)
    {
        var order = await _service.CreateAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = order.Id },
            order);
    }


    [HttpPut("{id}")]
    public async Task<IActionResult> Update(
        int id,
        UpdateOrderDto dto)
    {
        var order = await _service.UpdateAsync(id, dto);

        return Ok(order);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteAsync(id);

        return NoContent();
    }
}