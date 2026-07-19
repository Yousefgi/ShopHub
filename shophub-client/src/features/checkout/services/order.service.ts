import { api } from "../../../api/axios";
import type { CreateOrderRequest } from "../types/order";


export const orderService = {

  createOrder: async (
    data: CreateOrderRequest
  ) => {

    const response = await api.post(
      "/orders",
      data
    );

    return response.data;
  }

};