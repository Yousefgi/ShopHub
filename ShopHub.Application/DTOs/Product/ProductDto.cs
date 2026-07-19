namespace ShopHub.Application.DTOs.Product;

public class ProductDto
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public decimal Price { get; set; }

    public decimal? DiscountPercentage { get; set; }

    public decimal FinalPrice { get; set; }

    public int StockQuantity { get; set; }

    public string? ImageUrl { get; set; }

    public string CategoryName { get; set; } = string.Empty;
}