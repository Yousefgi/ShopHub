import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

import Container from "../ui/Container";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-tight text-blue-600"
          >
            ShopHub
          </NavLink>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-gray-600 transition-colors hover:text-blue-600"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-gray-600 transition-colors hover:text-blue-600"
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="rounded-full p-2 transition-colors hover:bg-slate-100"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              className="rounded-full p-2 transition-colors hover:bg-slate-100"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
            </button>

            <button
              className="rounded-full p-2 transition-colors hover:bg-slate-100"
              aria-label="User"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
