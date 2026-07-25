using ShopHub.Application.DTOs.Order;

namespace ShopHub.Application.Services.Interfaces;

public interface IOrderService
{
    Task<IEnumerable<OrderDto>> GetAllAsync();

    Task<IEnumerable<OrderDto>> GetMyOrdersAsync(int userId);

    Task<OrderDto> GetByIdAsync(int id);

    Task<OrderDto> CreateAsync(CreateOrderDto dto, int userId);

    Task<OrderDto> UpdateAsync(int id, UpdateOrderDto dto);

    Task<bool> DeleteAsync(int id);
}