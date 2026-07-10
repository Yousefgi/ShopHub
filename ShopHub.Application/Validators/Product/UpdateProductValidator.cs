using FluentValidation;
using ShopHub.Application.DTOs.Product;

namespace ShopHub.Application.Validators.Product;

public class UpdateProductValidator : AbstractValidator<UpdateProductDto>
{
    public UpdateProductValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MinimumLength(2)
            .MaximumLength(100);


        RuleFor(x => x.Description)
            .MaximumLength(1000);


        RuleFor(x => x.Price)
            .GreaterThan(0)
            .LessThanOrEqualTo(1000000);


        RuleFor(x => x.DiscountPercentage)
            .InclusiveBetween(0, 100)
            .When(x => x.DiscountPercentage.HasValue);


        RuleFor(x => x.StockQuantity)
            .GreaterThanOrEqualTo(0);


        RuleFor(x => x.Brand)
            .MaximumLength(100);


        RuleFor(x => x.CategoryId)
            .GreaterThan(0);
    }
}