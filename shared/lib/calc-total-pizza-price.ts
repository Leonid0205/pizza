import { PizzaSize, PizzaType } from '../constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';

/**
 * Подсчет общнй стоимости пиццы
 * @example calcTotalPizzaPrice(20, 1, items, ingredients, selectedIngredients)
 * @param size - размер выбранной пиццы
 * @param type - список вариаций
 * @param items - список вариаций
 * @param ingredients список ингредиентов
 * @param selectedIngredients -выбранные ингредиенты
 * @returns - number общая стоимость
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
