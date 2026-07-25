import { api } from "../../../../api/axios";

import type { OrderDetails,AdminOrder,UpdateOrderDto  } from "../types/admin-order";


async function getOrderById(
  id: number
): Promise<OrderDetails> {

  const response =
    await api.get<OrderDetails>(
      `/orders/${id}`
    );

  return response.data;
}

async function getOrders(): Promise<AdminOrder[]> {
  const response = await api.get<AdminOrder[]>("/orders");

  return response.data;
}

async function updateOrder(
  id: number,
  data: UpdateOrderDto,
): Promise<OrderDetails> {
  const response = await api.put<OrderDetails>(`/orders/${id}`, data);

  return response.data;
}

async function deleteOrder(id: number): Promise<void> {
  await api.delete(`/orders/${id}`);
}

export const adminOrdersService = {
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrders
};