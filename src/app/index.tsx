import React from "react";
import { View, Text, TextInput, FlatList, ScrollView } from "react-native";
import { menuItems } from "../constants/menuData";
import { styles } from "../constants/styles";
import MenuCard from "../components/MenuCard";
import OrderSummary from "../components/OrderSummary";
import { FoodCategory } from "../constants/types";

// Entry point route menggunakan export default function
export default function Index() {
  const appTitle = "FlavorTrack";

  // Data dummy kategori untuk perulangan Map
  const categories: FoodCategory[] = ["food", "drink", "snack", "dessert"];

  return (
    <View style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to {appTitle}</Text>
        <Text style={styles.headerSubtitle}>
          Pesan menu favoritmu sekarang!
        </Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Cari makanan atau minuman..."
          style={styles.searchInput}
        />
      </View>

      {/* Categories (.map Loop) */}
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat, index) => (
            <View key={`cat-${index}`} style={styles.categoryChip}>
              <Text style={styles.categoryText}>{cat.toUpperCase()}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* FlatList Loop */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Bagian dari Anggota 3 */}
      <OrderSummary />
    </View>
  );
}
