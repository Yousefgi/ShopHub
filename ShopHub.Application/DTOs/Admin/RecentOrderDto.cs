namespace ShopHub.Application.DTOs.Admin;

public class RecentOrderDto
{
    public int Id { get; set; }

    public string CustomerName { get; set; } = string.Empty;

    public decimal TotalAmount { get; set; }

    public DateTime OrderDate { get; set; }

    public string Status { get; set; } = string.Empty;
}