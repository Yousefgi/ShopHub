using ShopHub.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace ShopHub.Application.DTOs.Order;

public class UpdateOrderDto
{
    [Required]
    public OrderStatus Status { get; set; }
}