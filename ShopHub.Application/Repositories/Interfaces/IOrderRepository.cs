using ShopHub.Domain.Entities;

namespace ShopHub.Application.Repositories.Interfaces;

public interface IOrderRepository
{
    Task<List<Order>> GetAllAsync();
    Task<Order?> GetByIdAsync(int id);
    Task AddAsync(Order order);

    void Update(Order order);

    void Delete(Order order);

    Task SaveChangesAsync();
}