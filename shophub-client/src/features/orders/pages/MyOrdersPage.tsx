import Container from "../../../components/ui/Container";
import { useMyOrders } from "../hooks/useMyOrders";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
  const { data: orders, isLoading, isError } = useMyOrders();

  if (isLoading) {
    return (
      <p className="py-10 text-center text-slate-500">Loading orders...</p>
    );
  }

  if (isError) {
    return (
      <p className="py-10 text-center text-red-500">Failed to load orders.</p>
    );
  }

  return (
    <section className="py-10">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">My Orders</h1>

          <p className="mt-2 text-slate-500">Track and manage your orders</p>
        </div>

        {orders && orders.length > 0 ? (
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-white p-10 text-center">
            <h2 className="text-xl font-semibold">No Orders Yet</h2>

            <p className="mt-2 text-slate-500">
              Start shopping and your orders will appear here.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
