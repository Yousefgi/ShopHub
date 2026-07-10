using System.Net;
using System.Text.Json;
using ShopHub.API.Models;
using ShopHub.Application.Exceptions;

namespace ShopHub.API.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
    {
        _next = next;
    }


    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }


    private static async Task HandleExceptionAsync(
        HttpContext context,
        Exception exception)
    {
        context.Response.ContentType = "application/json";


        var statusCode = exception switch
        {
            NotFoundException => HttpStatusCode.NotFound,

            BadRequestException => HttpStatusCode.BadRequest,

            _ => HttpStatusCode.InternalServerError
        };


        context.Response.StatusCode = (int)statusCode;


        var response = new ErrorResponse
        {
            StatusCode = (int)statusCode,

            Message = exception.Message,

            Timestamp = DateTime.UtcNow
        };


        var json = JsonSerializer.Serialize(response);


        await context.Response.WriteAsync(json);
    }
}