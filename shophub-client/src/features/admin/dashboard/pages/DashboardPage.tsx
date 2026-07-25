import DashboardHeader from "../components/DashboardHeader";
import StatsGrid from "../components/StatsGrid";
import RecentOrdersTable from "../components/RecentOrdersTable";

import { useDashboardStats, useRecentOrders } from "../hooks/useDashboardStats";
import ErrorState from "../../../../components/ui/ErrorState";

export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useDashboardStats();

  const { data: recentOrders = [] } = useRecentOrders();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-3xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Dashboard Error"
        description="Unable to load dashboard data."
        onRetry={refetch}
      />
    );
  }

  return (
    <div>
      <DashboardHeader />

      <StatsGrid
        productsCount={data?.productsCount ?? 0}
        ordersCount={data?.ordersCount ?? 0}
        usersCount={data?.usersCount ?? 0}
        revenue={data?.totalRevenue ?? 0}
      />

      <div className="mt-10">
        <RecentOrdersTable orders={recentOrders} />
      </div>
    </div>
  );
}
