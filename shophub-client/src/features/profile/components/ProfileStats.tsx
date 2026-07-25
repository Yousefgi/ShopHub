import { Package, ShoppingCart, Wallet } from "lucide-react";

interface Props {
  ordersCount?: number;
  cartItems?: number;
  totalSpent?: number;
}

export default function ProfileStats({
  ordersCount = 0,
  cartItems = 0,
  totalSpent = 0,
}: Props) {
  const stats = [
    {
      title: "Orders",
      value: ordersCount,
      icon: Package,
      description: "Total orders",
    },
    {
      title: "Cart Items",
      value: cartItems,
      icon: ShoppingCart,
      description: "Products in cart",
    },
    {
      title: "Total Spent",
      value: `$${totalSpent.toFixed(2)}`,
      icon: Wallet,
      description: "Shopping value",
    },
  ];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Icon size={28} />
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">{stat.description}</p>
          </div>
        );
      })}
    </div>
  );
}
