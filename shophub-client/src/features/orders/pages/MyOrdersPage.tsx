import Container from "../../../components/ui/Container";
import OrderCard from "../components/OrderCard";
import { useMyOrders } from "../hooks/useMyOrders";

export default function MyOrdersPage() {
  const { data: orders, isLoading } = useMyOrders();

  if (isLoading) {
    return <p className="p-10">Loading...</p>;
  }

  return (
    <section className="py-10">
      <Container>
        <h1 className="mb-8 text-3xl font-bold">My Orders</h1>

        <div className="space-y-5">
          {orders?.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </Container>
    </section>
  );
}
