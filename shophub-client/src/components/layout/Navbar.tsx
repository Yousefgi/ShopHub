import { useEffect, useRef, useState } from "react";
import ConfirmDialog from "../ui/ConfirmDialog";
import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../features/cart/store/cart.store";
import Container from "../ui/Container";
import { useAuthStore } from "../../features/auth/store/auth.store";
function Navbar() {
  const items = useCartStore((state) => state.items);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const badgeCount = totalItems > 99 ? "99+" : totalItems;
  const previousCount = useRef(totalItems);
  const [animateBadge, setAnimateBadge] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (totalItems > previousCount.current) {
      setAnimateBadge(true);

      const timer = setTimeout(() => {
        setAnimateBadge(false);
      }, 300);

      previousCount.current = totalItems;

      return () => clearTimeout(timer);
    }

    previousCount.current = totalItems;
  }, [totalItems]);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-600"
          >
            <ShoppingBag size={28} />
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
                    `rounded-xl px-4 py-2 transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              {isAuthenticated && (
                <li>
                  <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-2 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                      }`
                    }
                  >
                    My Orders
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/products")}
              className="
rounded-full
p-2.5
transition-all
duration-200
hover:bg-slate-100
hover:scale-105
"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link
              to="/cart"
              className="
relative
rounded-full
p-2.5
transition-all
duration-200
hover:bg-slate-100
hover:scale-105
"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />

              {totalItems > 0 && (
                <span
                  className={`
absolute
-right-2
top-0
flex
min-h-6
min-w-6
items-center
justify-center
rounded-full
bg-blue-600
px-2
text-xs
font-bold
leading-none
text-white
shadow-md
transition-transform
duration-300
${animateBadge ? "scale-125" : "scale-100"}
`}
                >
                  {badgeCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-100 active:scale-95"
                >
                  <div
                    className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-linear-to-br
from-blue-500
to-indigo-600
font-bold
text-white
shadow-md
ring-2
ring-white
"
                  >
                    {user?.fullName
                      ?.split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-900">
                      {user?.fullName}
                    </p>

                    <p className="text-xs text-slate-500">{user?.role}</p>
                  </div>
                </button>

                {menuOpen && (
                  <div
                    className="
        absolute
        right-0
        mt-3
        w-56
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-xl
      "
                  >
                    <Link
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 hover:bg-slate-50"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/orders"
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 hover:bg-slate-50"
                    >
                      My Orders
                    </Link>

                    {user?.role === "Admin" && (
                      <Link
                        to="/admin"
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-3 hover:bg-slate-50"
                      >
                        Dashboard
                      </Link>
                    )}

                    <hr />

                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setLogoutOpen(true);
                      }}
                      className="
          w-full
          px-5
          py-3
          text-left
          text-red-600
          hover:bg-red-50
        "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full p-2 hover:bg-slate-100"
              >
                <User size={22} />
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
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
    </header>
  );
}

export default Navbar;
