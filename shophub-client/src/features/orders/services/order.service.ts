import { api } from "../../../api/axios";

import type { Order } from "../types/order";


export const orderService = {

  getMyOrders: async (): Promise<Order[]> => {

    const response = await api.get<Order[]>(
      "/orders/my-orders"
    );

    return response.data;
  },


  getOrderById: async (id:number): Promise<Order> => {

    const response = await api.get<Order>(
      `/orders/${id}`
    );

    return response.data;
  }

};