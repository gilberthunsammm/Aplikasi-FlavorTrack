import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DetailPage() {
  const router = useRouter();
  // Menangkap parameter dari URL / router.push
  const { info } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Detail & Informasi</Text>
      <Text style={styles.infoText}>Detail Promo: {info || "Tidak ada informasi."}</Text>

      {/* Navigasi kembali menggunakan router.back() */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Kembali ke Menu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f8fafc" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#0f172a" },
  infoText: { fontSize: 16, color: "#475569", marginBottom: 30, textAlign: "center" },
  backButton: { backgroundColor: "#2563eb", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10 },
  buttonText: { color: "#ffffff", fontWeight: "bold", fontSize: 14 }
});