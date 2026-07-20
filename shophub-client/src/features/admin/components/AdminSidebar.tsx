import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Layers,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Categories",
    path: "/admin/categories",
    icon: Layers,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="min-h-screen w-72 bg-slate-950 p-6 text-white">
      <h1 className="mb-10 text-3xl font-bold text-blue-500">
        ShopHub
        <span className="ml-2 text-sm text-slate-400">Admin</span>
      </h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/admin"}
              className={({ isActive }) =>
                `
                flex items-center gap-3 rounded-xl px-4 py-3
                transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }
                `
              }
            >
              <Icon size={20} />

              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
