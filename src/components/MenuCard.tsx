import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";
import { MenuItem } from "../constants/types";
import DietaryLabel from "./DietaryLabel";

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const MenuCard = ({ item, onAdd }: MenuCardProps) => {
  const imageSource = item.image || item.imageUrl;
  const validImage = typeof imageSource === "string" ? { uri: imageSource } : imageSource;

  return (
    <View style={styles.cardContainer}>
      <Image source={validImage} style={styles.cardImage} resizeMode="cover" />

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <DietaryLabel isSpicy={item.isSpicy} isVegetarian={item.isVegetarian} />
        </View>
        <Text style={styles.cardDescription}>{item.description}</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>
            Rp {item.price.toLocaleString("id-ID")}
          </Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAdd(item)}
            activeOpacity={0.7}
          >
            <Text style={styles.addButtonText}>Tambah</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;