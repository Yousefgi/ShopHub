
export interface AdminOrder {
  id: number;
  userId: number;
  orderDate: string;
  totalAmount: number;
  status: string;
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


export interface OrderItem {
  productId: number;

  productName: string;

  quantity: number;

  price: number;
}

export interface UpdateOrderDto {
  shippingAddress: string;

  phoneNumber: string;

  paymentMethod: string;

  status: string;
}