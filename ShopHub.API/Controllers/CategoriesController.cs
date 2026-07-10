using Microsoft.AspNetCore.Mvc;
using ShopHub.Application.DTOs.Category;
using ShopHub.Application.Services.Interfaces;

namespace ShopHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly ICategoryService _service;

    public CategoriesController(ICategoryService service)
    {
        _service = service;
    }


    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var categories = await _service.GetAllAsync();

        return Ok(categories);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var category = await _service.GetByIdAsync(id);

        return Ok(category);
    }


    [HttpPost]
    public async Task<IActionResult> Create(CreateCategoryDto dto)
    {
        var category = await _service.CreateAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = category.Id },
            category);
    }


    [HttpPut("{id}")]
    public async Task<IActionResult> Update(
        int id,
        UpdateCategoryDto dto)
    {
        var category = await _service.UpdateAsync(id, dto);

        return Ok(category);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteAsync(id);

        return NoContent();
    }
}