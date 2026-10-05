// Type & Interface
export type FoodCategory = "food" | "drink" | "snack" | "dessert";

export interface MenuItem {
  readonly id: string; // Readonly: id tidak boleh diubah setelah dibuat
  name: string;
  price: number;
  category: FoodCategory;
  description: string;
  image: string;
  isVegan: boolean;
  isSpicy: boolean;
  rating?: number; // Optional property (?)
}
