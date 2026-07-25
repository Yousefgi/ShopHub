import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">ShopHub</h2>

            <p className="mt-5 max-w-md leading-8 text-slate-400">
              ShopHub is a modern e-commerce platform built with ASP.NET Core,
              React and TypeScript. Discover quality products, secure payments
              and a seamless shopping experience.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Shop</h3>

            <ul className="space-y-4">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="transition hover:text-white">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/orders" className="transition hover:text-white">
                  My Orders
                </Link>
              </li>

              <li>
                <Link to="/profile" className="transition hover:text-white">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Customer Care
            </h3>

            <ul className="space-y-4">
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 border-t border-slate-800 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>📍 Nablus, Palestine</span>

          <span>✉ support@shophub.com</span>

          <span>☎ +970 59 XXX XXXX</span>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ShopHub. Built with ❤️ using ASP.NET Core
          & React by{" "}
          <span className="font-semibold text-white">Yousef Salman</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
