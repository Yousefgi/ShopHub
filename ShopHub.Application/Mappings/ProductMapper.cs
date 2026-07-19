using ShopHub.Application.DTOs.Product;
using ShopHub.Domain.Entities;

namespace ShopHub.Application.Mappings;

public static class ProductMapper
{
   public static ProductDto ToDto(Product product)
{
    return new ProductDto
    {
        Id = product.Id,
        Name = product.Name,
        Price = product.Price,
        DiscountPercentage = product.DiscountPercentage,

        FinalPrice =
            product.Price -
            (product.Price * (product.DiscountPercentage ?? 0) / 100),

        StockQuantity = product.StockQuantity,

        ImageUrl = product.ImageUrl,

        CategoryName = product.Category?.Name ?? ""
    };
}

  public static ProductDetailsDto ToDetailsDto(Product product)
{
    return new ProductDetailsDto
    {
        Id = product.Id,
        Name = product.Name,
        Description = product.Description,
        Price = product.Price,
        DiscountPercentage = product.DiscountPercentage,

        FinalPrice =
            product.Price -
            (product.Price * (product.DiscountPercentage ?? 0) / 100),

        StockQuantity = product.StockQuantity,

        Brand = product.Brand,

        ImageUrl = product.ImageUrl,

        CategoryName = product.Category?.Name ?? ""
    };
}

    public static Product ToEntity(CreateProductDto dto)
    {
        return new Product
        {
            Name = dto.Name,
            Price = dto.Price,
            DiscountPercentage = dto.DiscountPercentage,
            ImageUrl = dto.ImageUrl,
            CategoryId = dto.CategoryId
        };
    }

    public static void UpdateEntity(Product product, UpdateProductDto dto)
    {
        product.Name = dto.Name;
        product.Price = dto.Price;
        product.DiscountPercentage = dto.DiscountPercentage;
        product.ImageUrl = dto.ImageUrl;
        product.CategoryId = dto.CategoryId;
    }
}