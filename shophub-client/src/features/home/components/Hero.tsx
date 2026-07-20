import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import shoppingImage from "../../../assets/images/shopping.jpg";
function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        {/* Content */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            <Star size={16} className="fill-blue-600" />
            Trusted Online Store
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Everything you need,
            <span className="block text-blue-600">in one place.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover high-quality products with great prices, secure payments,
            and fast delivery. Shop smarter with ShopHub.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <ShoppingBag size={20} />
              Shop Now
            </Link>

            <Link
              to="/products"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-slate-900">500+</p>

              <p className="text-sm text-slate-500">Products</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900">10K+</p>

              <p className="text-sm text-slate-500">Customers</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900">4.9</p>

              <p className="text-sm text-slate-500">Rating</p>
            </div>
          </div>
        </div>

        {/* Image Side */}

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-40" />

          <img
            src={shoppingImage}

            alt="Shopping"
            className="relative mx-auto w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
