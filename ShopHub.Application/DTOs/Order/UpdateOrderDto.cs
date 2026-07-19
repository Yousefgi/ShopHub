using ShopHub.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace ShopHub.Application.DTOs.Order;
public class UpdateOrderDto
{
    public string ShippingAddress { get; set; } = string.Empty;

    public string PhoneNumber { get; set; } = string.Empty;

    public string PaymentMethod { get; set; } = string.Empty;

    public OrderStatus Status { get; set; }
}