import LoginForm from "../components/LoginForm";
import shoppingImage from "../../../assets/images/shopping.svg";
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 via-white to-blue-100 p-6">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Left Side */}
        <div className="hidden lg:flex w-1/2 flex-col justify-between bg-linear-to-br from-blue-600 to-indigo-700 p-12 text-white">
          <div>
            <h1 className="text-5xl font-extrabold">ShopHub</h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Shop smarter with thousands of premium products, secure payments
              and lightning-fast delivery.
            </p>
          </div>

          <img src={shoppingImage} alt="Shopping" className="mx-auto w-60" />

          <div className="space-y-3 text-blue-100">
            <div>🚚 Fast Delivery</div>
            <div>🔒 Secure Payments</div>
            <div>⭐ Premium Products</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center p-10 lg:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
