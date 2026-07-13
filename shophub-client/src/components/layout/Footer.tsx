import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t bg-slate-950 py-16 text-slate-300">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">ShopHub</h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              A modern e-commerce platform built with ASP.NET Core, React and
              TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ShopHub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
