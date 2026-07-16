import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../../components/ui/Button";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <ShoppingCart size={70} className="mb-6 text-slate-300" />

      <h2 className="text-3xl font-bold text-slate-900">Your cart is empty</h2>

      <p className="mt-3 max-w-md text-slate-500">
        Looks like you haven't added any products to your cart yet.
      </p>

      <Link to="/products" className="mt-8">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}

export default EmptyCart;
