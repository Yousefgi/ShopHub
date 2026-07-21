using ShopHub.Application.DTOs.Category;
using ShopHub.Application.Exceptions;
using ShopHub.Application.Mappings;
using ShopHub.Application.Repositories.Interfaces;
using ShopHub.Application.Services.Interfaces;
using ShopHub.Domain.Entities;

namespace ShopHub.Infrastructure.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _repository;

    public CategoryService(ICategoryRepository repository)
    {
        _repository = repository;
    }


    public async Task<IEnumerable<CategoryDto>> GetAllAsync()
    {
        var categories = await _repository.GetAllAsync();

        return categories.Select(CategoryMapper.ToDto);
    }


    public async Task<CategoryDto> GetByIdAsync(int id)
    {
        var category = await _repository.GetByIdAsync(id);

        if (category == null)
            throw new NotFoundException(
             $"Category with id {id} was not found.");


        return CategoryMapper.ToDto(category);
    }


    public async Task<CategoryDto> CreateAsync(CreateCategoryDto dto)
    {
        var category = new Category
{
    Name = dto.Name,
    Description = dto.Description
};


        await _repository.AddAsync(category);
        await _repository.SaveChangesAsync();


        return CategoryMapper.ToDto(category);
    }


    public async Task<CategoryDto> UpdateAsync(int id, UpdateCategoryDto dto)
    {
        var category = await _repository.GetByIdAsync(id);

        if (category == null)
            throw new NotFoundException(
             $"Category with id {id} was not found.");



       category.Name = dto.Name;
category.Description = dto.Description;


        _repository.Update(category);
        await _repository.SaveChangesAsync();


        return CategoryMapper.ToDto(category);
    }


    public async Task<bool> DeleteAsync(int id)
    {
        var category = await _repository.GetByIdAsync(id);

        if (category == null)
            throw new NotFoundException(
             $"Category with id {id} was not found.");



        _repository.Delete(category);
        await _repository.SaveChangesAsync();


        return true;
    }
}