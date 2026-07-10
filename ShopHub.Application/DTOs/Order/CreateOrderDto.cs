using System.ComponentModel.DataAnnotations;

namespace ShopHub.Application.DTOs.Order;

public class CreateOrderDto
{
    [Required]
    [MinLength(1, ErrorMessage = "At least one item is required.")]
    public List<CreateOrderItemDto> Items { get; set; } = new();
}