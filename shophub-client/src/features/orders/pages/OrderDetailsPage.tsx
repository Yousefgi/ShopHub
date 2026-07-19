import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/order.service";

export default function OrderDetailsPage() {
  const { id } = useParams();

  const {
    data: order,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: () => orderService.getOrderById(Number(id)),
  });

  if (isLoading) {
    return <p className="p-10">Loading...</p>;
  }

  if (isError || !order) {
    return <p className="p-10">Order not found</p>;
  }

  return (
    <section className="py-10">
      <Container>
        <h1 className="mb-8 text-3xl font-bold">Order #{order.id}</h1>

        <Card className="p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">Date</p>

              <p className="font-semibold">
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>

            <Badge>{order.status}</Badge>
          </div>

          <div className="mt-6 space-y-2">
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {order.shippingAddress}
            </p>

            <p>
              <span className="font-semibold">Phone:</span> {order.phoneNumber}
            </p>

            <p>
              <span className="font-semibold">Payment:</span>{" "}
              {order.paymentMethod}
            </p>
          </div>

          <hr className="my-6" />

          <h2 className="mb-4 text-xl font-bold">Products</h2>

          <div className="space-y-3">
            {order.items.map((item) => (
              <div
                key={item.productId}
                className="flex justify-between rounded-lg bg-slate-50 p-4"
              >
                <span>
                  {item.productName} × {item.quantity}
                </span>

                <span className="font-semibold">${item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between text-xl font-bold">
            <span>Total</span>

            <span className="text-blue-600">
              ${order.totalAmount.toFixed(2)}
            </span>
          </div>
        </Card>
      </Container>
    </section>
  );
}
