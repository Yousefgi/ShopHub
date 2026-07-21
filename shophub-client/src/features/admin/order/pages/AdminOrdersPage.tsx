import { useState } from "react";

import { toast } from "sonner";

import ConfirmDialog from "../../../../components/ui/ConfirmDialog";

import { useDeleteOrder } from "../hooks/useOrder";

import type { AdminOrder, OrderDetails } from "../types/admin-order";

import PageHeader from "../../../../components/ui/PageHeader";
import Button from "../../../../components/ui/Button";
import { Download } from "lucide-react";
import Pagination from "../../../../components/ui/Pagination";
import OrdersTable from "../components/OrdersTable";
import DataTableFilters from "../../../../components/ui/DataTableFilters";
import OrderDetailsModal from "../components/OrderDetailsModal";
import UpdateOrderModal from "../components/UpdateOrderModal";

import EmptyState from "../../../../components/ui/EmptyState";

import { useAdminOrders } from "../hooks/useAdminOrders";
import { adminOrdersService } from "../services/admin-orders.service";

export default function AdminOrdersPage() {
  const { data: orders = [], isLoading, isError } = useAdminOrders();

  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const [editingOrder, setEditingOrder] = useState<OrderDetails | null>(null);

  const [deletingOrder, setDeletingOrder] = useState<AdminOrder | null>(null);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const deleteMutation = useDeleteOrder();

  const pageSize = 10;

  if (isLoading) {
    return <p className="text-slate-500">Loading orders...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load orders.</p>;
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toString().includes(search) ||
      order.userId.toString().includes(search);

    const matchesStatus = status === "" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredOrders.length / pageSize);

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  async function handleEdit(orderId: number) {
    const data = await adminOrdersService.getOrderById(orderId);

    setEditingOrder(data);
  }

  function handleDelete() {
    if (!deletingOrder) return;

    deleteMutation.mutate(deletingOrder.id, {
      onSuccess: () => {
        toast.success("Order deleted successfully");

        setDeletingOrder(null);
      },

      onError: () => {
        toast.error("Failed to delete order");
      },
    });
  }

  return (
    <div>
      <PageHeader
        title="Orders"
        description="Manage customer orders and track their status."
        action={
          <Button>
            <Download size={18} />
            Export
          </Button>
        }
      />

      <DataTableFilters
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        placeholder="Search by order ID or customer..."
        status={status}
        statusOptions={[
          "Pending",
          "Processing",
          "Shipped",
          "Delivered",
          "Cancelled",
        ]}
        onStatusChange={(value) => {
          setStatus(value);
          setCurrentPage(1);
        }}
      />

      {paginatedOrders.length > 0 ? (
        <OrdersTable
          orders={paginatedOrders}
          onView={(order) => setSelectedOrderId(order.id)}
          onEdit={(order) => handleEdit(order.id)}
          onDelete={(order) => setDeletingOrder(order)}
        />
      ) : (
        <EmptyState
          title="No orders found"
          description="No orders available."
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <OrderDetailsModal
        id={selectedOrderId}
        open={selectedOrderId !== null}
        onClose={() => setSelectedOrderId(null)}
      />

      <UpdateOrderModal
        key={editingOrder?.id}
        order={editingOrder}
        open={editingOrder !== null}
        onClose={() => setEditingOrder(null)}
      />

      <ConfirmDialog
        open={!!deletingOrder}
        title="Delete Order"
        description={`Are you sure you want to delete order #${deletingOrder?.id}?`}

        variant="danger"

        confirmText="Delete"

        cancelText="Cancel"

        loading={deleteMutation.isPending}

        onOpenChange={(open) => {
          if (!open) {
            setDeletingOrder(null);
          }
        }}

        onConfirm={handleDelete}
      />
    </div>
  );
}
