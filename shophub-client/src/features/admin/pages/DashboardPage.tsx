import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";

import StatsCard from "../components/StatsCard";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-2 text-slate-500">
          Overview of your store performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Products" value="125" icon={Package} />

        <StatsCard title="Orders" value="64" icon={ShoppingCart} />

        <StatsCard title="Users" value="32" icon={Users} />

        <StatsCard title="Revenue" value="$15,400" icon={DollarSign} />
      </div>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold">Recent Orders</h2>

        <p className="mt-4 text-slate-500">Orders data will appear here.</p>
      </div>
    </div>
  );
}
