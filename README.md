# 🛍️ ShopHub

![ASP.NET Core](https://img.shields.io/badge/Backend-ASP.NET%20Core%2010-blue)
![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791)
![Deployment](https://img.shields.io/badge/Deployment-Render%20%7C%20Vercel-success)

A modern **Full-Stack E-Commerce Platform** built with **ASP.NET Core 10 Web API** and **React 19** following **Clean Architecture principles**.

ShopHub provides a complete shopping experience for customers and a management system for administrators with authentication, product management, cart, checkout, orders, and inventory control.

---

# 🌐 Live Demo

Frontend:
https://shophub-client.vercel.app

Backend API:
https://shophub-iurs.onrender.com

Swagger Documentation:
https://shophub-iurs.onrender.com/swagger

---

# ✨ Features

## 👤 Customer

- JWT Authentication
- Register & Login
- Protected Routes
- Product Catalog
- Product Search
- Category Filtering
- Sorting
- Product Details
- Shopping Cart
- Checkout
- Order Creation
- Order History
- User Profile


## 👨‍💼 Admin

- Admin Dashboard
- Product Management
- Category Management
- Order Management
- Store Statistics


## 📦 Inventory System

- Stock Quantity Management
- Stock Availability Validation
- Automatic Stock Reduction After Checkout
- Prevent Ordering More Than Available Quantity


---

# 🏗 Architecture

The backend follows **Clean Architecture**:

```text
ShopHub
│
├── ShopHub.API
├── ShopHub.Application
├── ShopHub.Domain
├── ShopHub.Infrastructure
└── shophub-client
```

---

# 🛠 Tech Stack

## Backend

- ASP.NET Core 10
- Entity Framework Core
- SQL Server
- Clean Architecture
- Repository Pattern
- JWT Authentication
- FluentValidation

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- Zustand
- React Router
- Axios

---

# 📸 Screenshots

| Home                             | Products                             |
| -------------------------------- | ------------------------------------ |
| ![](assets/screenshots/home.png) | ![](assets/screenshots/products.png) |

| Product                                     | Cart                             |
| ------------------------------------------- | -------------------------------- |
| ![](assets/screenshots/product-details.png) | ![](assets/screenshots/cart.png) |

| Checkout                             | Dashboard                             |
| ------------------------------------ | ------------------------------------- |
| ![](assets/screenshots/checkout.png) | ![](assets/screenshots/dashboard.png) |

| Admin Products                             | Admin Categories                             |
| ------------------------------------------ | -------------------------------------------- |
| ![](assets/screenshots/admin-products.png) | ![](assets/screenshots/admin-categories.png) |

| Admin Orders                             |
| ---------------------------------------- |
| ![](assets/screenshots/admin-orders.png) |

---

# 💾 Database

- SQL Server
- Entity Framework Core Migrations

---

# 🚀 Getting Started

## Backend

```bash
cd ShopHub.API

dotnet restore

dotnet ef database update

dotnet run
```

Backend runs on:

```
https://localhost:5146
```

---

## Frontend

```bash
cd shophub-client

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔐 Authentication

- JWT Authentication
- Role-based Authorization
- Customer & Admin Roles
- Protected Routes

---

# 📁 Project Structure

```text
ShopHub
│
├── ShopHub.API
├── ShopHub.Application
├── ShopHub.Domain
├── ShopHub.Infrastructure
│
├── shophub-client
│   ├── features
│   ├── components
│   ├── hooks
│   ├── layouts
│   ├── app
│   └── utils
│
└── assets
    └── screenshots
```

---

# 🔮 Future Improvements

- Online Payment Integration
- Product Reviews
- Wishlist
- Email Notifications
- Image Upload
- Dashboard Analytics
- Docker Support
- CI/CD Pipeline

---

# 👨‍💻 Author

**Yousef Salman**

Computer Engineer

Frontend & ASP.NET Core Developer
