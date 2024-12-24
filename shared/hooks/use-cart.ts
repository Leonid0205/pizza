import React from 'react';
import { useCartStore } from '@/shared/store';
import { CreateCartItemValues } from '@/services/dto/cart-dto';
import { CartStateItem } from '../lib/get-cart-details';
import { CartState } from '../store/cart';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);
  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
