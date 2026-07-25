using ShopHub.Application.DTOs.Category;
using ShopHub.Domain.Entities;

namespace ShopHub.Application.Mappings;

public static class CategoryMapper
{
    public static CategoryDto ToDto(Category category)
    {
        return new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            Description = category.Description,
            ProductsCount = category.Products.Count
        };
    }

    public static CategoryDetailsDto ToDetailsDto(Category category)
    {
        return new CategoryDetailsDto
        {
            Id = category.Id,
            Name = category.Name,
            Description = category.Description,
            ProductsCount = category.Products.Count
        };
    }
}