import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white">
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

      <div className="absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />

      <Container>
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Modern E-Commerce Platform
          </span>

          <h1 className="mt-6 max-w-4xl text-6xl font-extrabold tracking-tight text-slate-900">
            Discover Products You'll Love
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ShopHub helps you discover premium products with a fast, secure and
            enjoyable shopping experience.
          </p>

          <div className="mt-10 flex gap-4">
            <Link to="/products">
              <Button>Browse Products</Button>
            </Link>
            <a href="#features">
              <Button variant="outline">Learn More</Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
