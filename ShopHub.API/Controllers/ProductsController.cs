using Microsoft.AspNetCore.Mvc;
using ShopHub.Application.DTOs.Common;
using ShopHub.Application.DTOs.Product;
using ShopHub.Application.Services.Interfaces;

namespace ShopHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }


    [HttpGet]
    public async Task<ActionResult<PagedResult<ProductDto>>> GetAll(
     [FromQuery] ProductQueryParameters query)
    {
        var products = await _productService.GetAllAsync(query);

        return Ok(products);
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDetailsDto>> GetById(int id)
    {
        var product = await _productService.GetByIdAsync(id);

        return Ok(product);
    }


    [HttpPost]
    public async Task<ActionResult<ProductDto>> Create(
        CreateProductDto dto)
    {
        var product = await _productService.CreateAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = product.Id },
            product);
    }


    [HttpPut("{id}")]
    public async Task<ActionResult<ProductDto>> Update(
        int id,
        UpdateProductDto dto)
    {
        var product = await _productService.UpdateAsync(id, dto);

        return Ok(product);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _productService.DeleteAsync(id);

        return NoContent();
    }
}