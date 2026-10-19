import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Nasi Goreng Mercon",
    category: "food",
    price: 25000,
    // KODE YANG DIPERBAIKI: Mengembalikan format ke .jpg
    image:
      "https://detiknusantara.co.id/wp-content/uploads/2025/07/IMG-20250726-WA0012.jpg",
  },
  {
    id: "m2",
    name: "Salad Buah Segar",
    category: "dessert",
    price: 18000,
    image:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: "m3",
    name: "Es Kopi Susu Aren",
    category: "drink",
    price: 15000,
    image:
      "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: "m4",
    name: "Kentang Goreng Keju",
    category: "snack",
    price: 12000,
    image:
      "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    id: "m5",
    name: "Ayam Bakar Madu",
    category: "food",
    price: 30000,
    image:
      "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
];
