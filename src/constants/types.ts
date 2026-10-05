export type FoodCategory = "food" | "drink" | "snack" | "dessert";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: FoodCategory;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  imageUrl?: string;
  image?: any;
}