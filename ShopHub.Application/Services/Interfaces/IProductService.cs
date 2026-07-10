using ShopHub.Application.DTOs.Common;
using ShopHub.Application.DTOs.Product;

namespace ShopHub.Application.Services.Interfaces;

public interface IProductService
{
    Task<PagedResult<ProductDto>> GetAllAsync(ProductQueryParameters query);

    Task<ProductDetailsDto> GetByIdAsync(int id);

    Task<ProductDto> CreateAsync(CreateProductDto dto);

    Task<ProductDto> UpdateAsync(int id, UpdateProductDto dto);

    Task<bool> DeleteAsync(int id);
}