using ShopHub.Domain.Enums;

namespace ShopHub.Application.DTOs.Order;

public class OrderDetailsDto
{
    public int Id { get; set; }

    public DateTime OrderDate { get; set; }

    public decimal TotalAmount { get; set; }

    public OrderStatus Status { get; set; }

    public string ShippingAddress { get; set; } = string.Empty;

    public string PhoneNumber { get; set; } = string.Empty;

    public string PaymentMethod { get; set; } = string.Empty;

    public List<OrderItemDto> Items { get; set; } = new();
}