import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../../../types/cart";
import type { Product } from "../../../types/product";

interface CartStore {
  items: CartItem[];

  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
  items: [],

 addToCart: (product, quantity = 1) =>
  set((state) => {

    const existingItem = state.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      const updatedItems = state.items.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );


      return {
        items: updatedItems,
      };
    }

    const updatedItems = [
      ...state.items,
      {
        product,
        quantity,
      },
    ];


    return {
      items: updatedItems,
    };
  }),

  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.product.id !== productId
      ),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

    increaseQuantity: (productId) =>
  set((state) => ({
    items: state.items.map((item) =>
      item.product.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    ),
  })),

  decreaseQuantity: (productId) =>
  set((state) => ({
    items: state.items
      .map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0),
  })),

  getTotalItems: () =>
    get().items.reduce(
      (total, item) => total + item.quantity,
      0
    ),

  getTotalPrice: () =>
    get().items.reduce(
      (total, item) =>
        total + item.product.finalPrice * item.quantity,
      0
    ),
    }),
    {
      name: "cart-storage",
    }
  )
);