export interface OrderItemRequest {
  productId: number;
  quantity: number;
}


export interface CreateOrderRequest {
  shippingAddress: string;
  phoneNumber: string;
  paymentMethod: string;
  items: OrderItemRequest[];
}