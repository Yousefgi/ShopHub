using FluentValidation;
using ShopHub.Application.DTOs.Product;

namespace ShopHub.Application.Validators.Product;

public class CreateProductValidator : AbstractValidator<CreateProductDto>
{
    public CreateProductValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage("Product name is required.")
            .MinimumLength(2)
            .WithMessage("Product name must be at least 2 characters.")
            .MaximumLength(100)
            .WithMessage("Product name cannot exceed 100 characters.");


        RuleFor(x => x.Description)
            .MaximumLength(1000)
            .WithMessage("Description cannot exceed 1000 characters.");


        RuleFor(x => x.Price)
            .GreaterThan(0)
            .WithMessage("Price must be greater than zero.")
            .LessThanOrEqualTo(1000000)
            .WithMessage("Price cannot exceed 1,000,000.");


        RuleFor(x => x.DiscountPercentage)
            .InclusiveBetween(0, 100)
            .When(x => x.DiscountPercentage.HasValue)
            .WithMessage("Discount must be between 0 and 100.");


        RuleFor(x => x.StockQuantity)
            .GreaterThanOrEqualTo(0)
            .WithMessage("Stock quantity cannot be negative.");


        RuleFor(x => x.Brand)
            .MaximumLength(100)
            .WithMessage("Brand cannot exceed 100 characters.");


        RuleFor(x => x.ImageUrl)
            .Must(BeValidUrl)
            .When(x => !string.IsNullOrEmpty(x.ImageUrl))
            .WithMessage("Image URL is not valid.");


        RuleFor(x => x.CategoryId)
            .GreaterThan(0)
            .WithMessage("Category is required.");
    }


    private bool BeValidUrl(string? url)
    {
        return Uri.TryCreate(
            url,
            UriKind.Absolute,
            out var result)
            && (result.Scheme == Uri.UriSchemeHttp
            || result.Scheme == Uri.UriSchemeHttps);
    }
}