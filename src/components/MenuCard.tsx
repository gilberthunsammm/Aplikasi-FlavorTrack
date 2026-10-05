import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../constants/styles";
import { MenuItem } from "../constants/types";
import DietaryLabel from "./DietaryLabel";

interface MenuCardProps {
  item: MenuItem;
}

// Arrow function component
const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <DietaryLabel isVegan={item.isVegan} isSpicy={item.isSpicy} />
        </View>

        <Text style={styles.cardDesc} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.cardFooter}>
          {/* Template Literal & Data Binding */}
          <Text style={styles.cardPrice}>
            Rp {item.price.toLocaleString("id-ID")}
          </Text>

          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>Tambah</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;
