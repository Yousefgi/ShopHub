
using ShopHub.Application.DTOs.Common;
using ShopHub.Application.DTOs.Product;
using ShopHub.Application.Exceptions;
using ShopHub.Application.Mappings;
using ShopHub.Application.Repositories.Interfaces;
using ShopHub.Application.Services.Interfaces;
using ShopHub.Domain.Entities;


namespace ShopHub.Infrastructure.Services;

public class ProductService : IProductService
{
    private readonly IProductRepository _repository;

    public ProductService(IProductRepository repository)
    {
        _repository = repository;
    }

    public async Task<PagedResult<ProductDto>> GetAllAsync(ProductQueryParameters query)
    {
        IEnumerable<Product> products = await _repository.GetAllAsync();
        if (!string.IsNullOrWhiteSpace(query.Search))
        {
            products = products.Where(p =>
                p.Name.Contains(query.Search,
                StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(query.Category))
        {
            products = products.Where(p =>
                p.Category != null &&
                p.Category.Name.Equals(
                    query.Category,
                    StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(query.SortBy))
        {
            products = query.SortBy.ToLower() switch
            {
                "name" => query.Desc
                    ? products.OrderByDescending(p => p.Name)
                    : products.OrderBy(p => p.Name),

                "price" => query.Desc
                    ? products.OrderByDescending(p => p.Price)
                    : products.OrderBy(p => p.Price),

                _ => products
            };
        }

        var totalCount = products.Count();

        products = products
    .Skip((query.Page - 1) * query.PageSize)
    .Take(query.PageSize);

        return new PagedResult<ProductDto>
        {
            Items = products.Select(ProductMapper.ToDto),
            Page = query.Page,
            PageSize = query.PageSize,
            TotalCount = totalCount
        };
    }
    public async Task<ProductDetailsDto> GetByIdAsync(int id)
    {
        var product = await _repository.GetByIdAsync(id);

        if (product == null)
            throw new NotFoundException(
            $"Product with id {id} was not found.");

        return ProductMapper.ToDetailsDto(product);
    }

    public async Task<ProductDto> CreateAsync(CreateProductDto dto)
    {
        var product = ProductMapper.ToEntity(dto);

        await _repository.AddAsync(product);
        await _repository.SaveChangesAsync();

        var createdProduct = await _repository.GetByIdAsync(product.Id);

        if (createdProduct == null)
        {
            throw new InvalidOperationException("Product was created but could not be retrieved.");
        }

        return ProductMapper.ToDto(createdProduct);
    }

    public async Task<ProductDto> UpdateAsync(int id, UpdateProductDto dto)
    {
        var product = await _repository.GetByIdAsync(id);

        if (product == null)
            throw new NotFoundException(
          $"Product with id {id} was not found.");

        ProductMapper.UpdateEntity(product, dto);

        _repository.Update(product);
        await _repository.SaveChangesAsync();

        return ProductMapper.ToDto(product);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var product = await _repository.GetByIdAsync(id);

        if (product == null)
            throw new NotFoundException(
            $"Product with id {id} was not found.");

        _repository.Delete(product);
        await _repository.SaveChangesAsync();

        return true;
    }
}