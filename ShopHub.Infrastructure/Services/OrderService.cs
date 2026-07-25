using ShopHub.Application.DTOs.Order;
using ShopHub.Application.Exceptions;
using ShopHub.Application.Mappings;
using ShopHub.Application.Repositories.Interfaces;
using ShopHub.Application.Services.Interfaces;
using ShopHub.Domain.Entities;

namespace ShopHub.Infrastructure.Services;

public class OrderService : IOrderService
{
    private readonly IOrderRepository _repository;
    private readonly IProductRepository _productRepository;

    public OrderService(
        IOrderRepository repository,
        IProductRepository productRepository)
    {
        _repository = repository;
        _productRepository = productRepository;
    }

    public async Task<IEnumerable<OrderDto>> GetAllAsync()
    {
       
        var orders = await _repository.GetAllAsync();

        return orders.Select(OrderMapper.ToDto);
    }

    public async Task<IEnumerable<OrderDto>> GetMyOrdersAsync(int userId)
{
    var orders = await _repository.GetByUserIdAsync(userId);

    return orders.Select(OrderMapper.ToDto);
}


    public async Task<OrderDto> GetByIdAsync(int id)
    {
       
        var order = await _repository.GetByIdAsync(id);

        if (order == null)
            throw new NotFoundException(
             $"Order with id {id} was not found.");


        return OrderMapper.ToDto(order);
    }


    public async Task<OrderDto> CreateAsync(
    CreateOrderDto dto,
    int userId)
    {
     var order = new Order
        {
            UserId = userId,

            ShippingAddress = dto.ShippingAddress,

            PhoneNumber = dto.PhoneNumber,

            PaymentMethod = dto.PaymentMethod
        };
        foreach (var item in dto.Items)
        {
            var product = await _productRepository.GetByIdAsync(item.ProductId);

            if (product == null)
                throw new NotFoundException(
       $"Product with id {item.ProductId} was not found.");

            var finalPrice =
                product.Price -
                (product.Price * (product.DiscountPercentage ?? 0) / 100);


            order.OrderItems.Add(new OrderItem
            {
                ProductId = product.Id,
                Quantity = item.Quantity,
                UnitPrice = finalPrice
            });


            order.TotalAmount += finalPrice * item.Quantity;
        }


        await _repository.AddAsync(order);
        await _repository.SaveChangesAsync();


        var createdOrder = await _repository.GetByIdAsync(order.Id);

        if (createdOrder == null)
            throw new Exception("Order was created but could not be retrieved.");


        return OrderMapper.ToDto(createdOrder);
    }

    public async Task<OrderDto> UpdateAsync(int id, UpdateOrderDto dto)
    {
        var order = await _repository.GetByIdAsync(id);

        if (order == null)
            throw new NotFoundException(
               $"Order with id {id} was not found.");


        order.ShippingAddress = dto.ShippingAddress;
        order.PhoneNumber = dto.PhoneNumber;
        order.PaymentMethod = dto.PaymentMethod;
        order.Status = dto.Status;

        _repository.Update(order);

        await _repository.SaveChangesAsync();


        return OrderMapper.ToDto(order);
    }
    public async Task<bool> DeleteAsync(int id)
    {
        var order = await _repository.GetByIdAsync(id);

        if (order == null)
            return false;


        _repository.Delete(order);

        await _repository.SaveChangesAsync();

        return true;
    }
}