import { Pressable, StyleSheet, Text, View } from "react-native";
// Tambahkan Stack dari expo-router
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function DetailPage() {
  const router = useRouter();

  const { info, isDark } = useLocalSearchParams();
  const isDarkMode = isDark === "true";

  const containerBg = isDarkMode ? "#0f172a" : "#f8fafc";
  const textColor = isDarkMode ? "#f8fafc" : "#0f172a";
  const subTextColor = isDarkMode ? "#cbd5e1" : "#475569";

  return (
    <View style={[styles.container, { backgroundColor: containerBg }]}>
      {/* KODE BARU: Mengubah warna Header atas secara dinamis */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: containerBg },
          headerTintColor: textColor,
        }}
      />

      <Text style={[styles.title, { color: textColor }]}>
        Halaman Detail & Informasi
      </Text>
      <Text style={[styles.infoText, { color: subTextColor }]}>
        Detail Promo: {info || "Tidak ada informasi."}
      </Text>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Kembali ke Menu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  infoText: { fontSize: 16, marginBottom: 30, textAlign: "center" },
  backButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: { color: "#ffffff", fontWeight: "bold", fontSize: 14 },
});
