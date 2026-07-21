export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
}

export interface OrderDetails {
  id: number;

  userId: number;

  orderDate: string;

  totalAmount: number;

  status: string;

  shippingAddress: string;

  phoneNumber: string;

  paymentMethod: string;

  items: OrderItem[];
}