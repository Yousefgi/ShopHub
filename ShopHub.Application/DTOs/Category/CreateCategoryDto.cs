using System.ComponentModel.DataAnnotations;

namespace ShopHub.Application.DTOs.Category;

public class CreateCategoryDto
{
    [Required]
    [StringLength(100, MinimumLength = 2)]
    public string Name { get; set; } = string.Empty;

      public string Description { get; set; } = string.Empty;

    public int ProductsCount { get; set; }
}