import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import MenuCard from "../components/MenuCard";
import OrderSummary from "../components/OrderSummary";
import { menuItems } from "../constants/menuData";
import { styles } from "../constants/styles";
import { FoodCategory } from "../constants/types";
import { CartItem } from "../constants/utils";

export default function Index() {
  const appTitle = "FlavorTrack";
  const categories: FoodCategory[] = ["food", "drink", "snack", "dessert"];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FoodCategory | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredMenu = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (item: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      } else {
        return [...prevCart, { id: item.id, name: item.name, price: item.price, qty: 1 }];
      }
    });
  };

  const handleDecreaseItem = (id: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      if (existingItem && existingItem.qty > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== id);
      }
    });
  };

  // Fungsi baru untuk membersihkan keranjang saat pembayaran selesai
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to {appTitle}</Text>
        <Text style={styles.headerSubtitle}>Pesan menu favoritmu sekarang!</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Cari makanan atau minuman..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={[styles.categoryChip, activeCategory === null && { backgroundColor: "#0f172a" }]}
            onPress={() => setActiveCategory(null)}
          >
            <Text style={styles.categoryText}>ALL</Text>
          </Pressable>

          {categories.map((cat, index) => (
            <Pressable
              key={`cat-${index}`}
              style={[styles.categoryChip, activeCategory === cat && { backgroundColor: "#0f172a" }]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={styles.categoryText}>{cat.toUpperCase()}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} onAdd={handleAddToCart} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20, color: "#64748b" }}>
            Menu tidak ditemukan.
          </Text>
        }
      />

      {/* Menambahkan prop onClearCart ke OrderSummary */}
      <OrderSummary
        cartData={cart}
        onDecrease={handleDecreaseItem}
        onClearCart={handleClearCart}
      />
    </View>
  );
}