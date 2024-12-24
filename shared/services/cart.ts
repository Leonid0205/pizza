import { CartDTO, CreateCartItemValues } from './dto/cart-dto';
import { axiosInstance } from './instance';

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>('/cart')).data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  return (
    await axiosInstance.patch<CartDTO>('/cart/' + itemId, {
      quantity,
    })
  ).data;
};
/**
 * Removes an item from the user's cart.
 * @param {number} id The id of the item to remove.
 * @returns {Promise<CartDTO>} The updated cart.
 */
export const removeCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>('/cart/' + id)).data;
};
/**
 * Adds a new item to the user's cart.
 * @param {CreateCartItemValues} values The values to create the cart item with.
 * @returns {Promise<CartDTO>} The updated cart.
 */
export const addCartItem = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>('/cart', values)).data;
};
