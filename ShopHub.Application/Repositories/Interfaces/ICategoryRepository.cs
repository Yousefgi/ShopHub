using ShopHub.Domain.Entities;

namespace ShopHub.Application.Repositories.Interfaces;

public interface ICategoryRepository
{
    Task<List<Category>> GetAllAsync();

    Task<Category?> GetByIdAsync(int id);

    Task AddAsync(Category category);

    void Update(Category category);

    void Delete(Category category);

    Task SaveChangesAsync();
}