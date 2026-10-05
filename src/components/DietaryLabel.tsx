import { Text, View } from "react-native";
import { styles } from "../constants/styles";

interface DietaryLabelProps {
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

const DietaryLabel = ({ isSpicy, isVegetarian }: DietaryLabelProps) => {
  if (isSpicy) {
    return (
      <View style={[styles.badge, { backgroundColor: "#ef4444" }]}>
        <Text style={styles.badgeText}>PEDAS</Text>
      </View>
    );
  }

  if (isVegetarian) {
    return (
      <View style={[styles.badge, { backgroundColor: "#10b981" }]}>
        <Text style={styles.badgeText}>VEG</Text>
      </View>
    );
  }

  return null;
};

export default DietaryLabel;