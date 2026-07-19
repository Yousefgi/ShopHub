using System.ComponentModel.DataAnnotations;

namespace ShopHub.Application.DTOs.Order;

public class CreateOrderDto
{
    public string ShippingAddress { get; set; } = string.Empty;

    public string PhoneNumber { get; set; } = string.Empty;

    public string PaymentMethod { get; set; } = string.Empty;

    [Required]
    [MinLength(1, ErrorMessage = "At least one item is required.")]
    public List<CreateOrderItemDto> Items { get; set; } = new();
}