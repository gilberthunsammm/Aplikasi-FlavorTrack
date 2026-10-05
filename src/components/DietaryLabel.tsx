import { Text, View } from "react-native";

interface DietaryLabelProps {
  isVegan: boolean;
  isSpicy: boolean;
}

// Custom Function (Arrow Function Component)
const DietaryLabel = ({ isVegan, isSpicy }: DietaryLabelProps) => {
  // Penggunaan Kondisi if sederhana (ternary tidak dipakai di sini untuk memisahkan logic)
  if (!isVegan && !isSpicy) return null;

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {isVegan ? (
        // Inline Style dinamis
        <View
          style={{
            backgroundColor: "#10b981",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            VEGAN
          </Text>
        </View>
      ) : null}

      {isSpicy ? (
        <View
          style={{
            backgroundColor: "#ef4444",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            PEDAS
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default DietaryLabel;
