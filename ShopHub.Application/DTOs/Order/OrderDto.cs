using ShopHub.Domain.Enums;
using System;

namespace ShopHub.Application.DTOs.Order;

public class OrderDto
{
    public int Id { get; set; }

    public DateTime OrderDate { get; set; }

    public decimal TotalAmount { get; set; }

    public OrderStatus Status { get; set; }

    public List<OrderItemDto> Items { get; set; } = new();
}