export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface Order {
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