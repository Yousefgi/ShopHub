import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Layers,
  Store,
  LogOut,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";
import { useAuthStore } from "../../../auth/store/auth.store";
import { useState } from "react";
import ConfirmDialog from "../../../../components/ui/ConfirmDialog";

const links = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
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
];

export default function AdminSidebar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <>
      <aside
        className="
        flex
        min-h-screen
        w-72
        flex-col
        bg-slate-950
        p-6
        text-white
        "
      >
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-500">ShopHub</h1>

          <p className="mt-1 text-sm text-slate-400">Admin Panel</p>
        </div>

        {/* Navigation */}

        <nav className="mt-10 flex-1 space-y-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 rounded-xl px-4 py-3
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
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

        {/* Bottom Section */}

        <div className="space-y-4">
          <Link
            to="/"
            className="
            flex
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-slate-400
            transition
            hover:bg-slate-800
            hover:text-white
            "
          >
            <Store size={20} />
            Back To Store
          </Link>

          <div
            className="
            rounded-2xl
            bg-slate-900
            p-4
            "
          >
            <p className="font-semibold">{user?.fullName}</p>

            <p className="text-sm text-slate-400">{user?.role}</p>

            <button
              onClick={() => setLogoutOpen(true)}
              className="
              mt-4
              flex
              w-full
              items-center
              gap-2
              rounded-xl
              px-3
              py-2
              text-sm
              text-red-400
              transition
              hover:bg-red-500/10
              "
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <ConfirmDialog
        open={logoutOpen}

        onOpenChange={setLogoutOpen}

        title="Logout"

        description="Are you sure you want to logout?"

        variant="danger"

        confirmText="Logout"

        cancelText="Cancel"

        onConfirm={() => {
          logout();
          setLogoutOpen(false);
        }}
      />
    </>
  );
}
