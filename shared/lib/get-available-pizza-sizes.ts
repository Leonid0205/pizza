import { ProductItem } from '@prisma/client';
import { PizzaType, pizzaSizes } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';
export const getAvailablePizzaSizes = (
  items: ProductItem[],
  type: PizzaType
): Variant[] => {
  const filtredPizzasByType = items.filter((item) => item.pizzaType === type);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filtredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
