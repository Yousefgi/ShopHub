import { Package, ShoppingCart, Users, DollarSign } from "lucide-react";

import StatsCard from "./StatsCard";

interface Props {
  productsCount: number;
  ordersCount: number;
  usersCount: number;
  revenue: number;
}

export default function StatsGrid({
  productsCount,
  ordersCount,
  usersCount,
  revenue,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Products"
        value={productsCount}
        icon={Package}
        color="blue"
      />

      <StatsCard
        title="Orders"
        value={ordersCount}
        icon={ShoppingCart}
        color="green"
      />

      <StatsCard title="Users" value={usersCount} icon={Users} color="purple" />

      <StatsCard
        title="Revenue"
        value={`$${revenue.toFixed(2)}`}
        icon={DollarSign}
        color="orange"
      />
    </div>
  );
}
