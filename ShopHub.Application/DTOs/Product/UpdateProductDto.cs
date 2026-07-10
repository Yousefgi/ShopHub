using System.ComponentModel.DataAnnotations;

namespace ShopHub.Application.DTOs.Product;

public class UpdateProductDto
{
    [Required(ErrorMessage = "Product name is required.")]
    [StringLength(100, MinimumLength = 2)]
    public string Name { get; set; } = string.Empty;

    [StringLength(1000)]
    public string Description { get; set; } = string.Empty;

    [Range(0.01, 1000000, ErrorMessage = "Price must be greater than zero.")]
    public decimal Price { get; set; }

    [Range(0, 100)]
    public decimal? DiscountPercentage { get; set; }

    [Range(0, int.MaxValue)]
    public int StockQuantity { get; set; }

    [StringLength(100)]
    public string Brand { get; set; } = string.Empty;


    [Url]
    public string? ImageUrl { get; set; }

    [Range(1, int.MaxValue)]
    public int CategoryId { get; set; }
   
}