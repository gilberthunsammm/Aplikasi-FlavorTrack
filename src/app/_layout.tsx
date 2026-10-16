import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "FlavorTrack - Home", headerShown: false }}
      />
      <Stack.Screen
        name="detail"
        options={{ title: "Detail Pesanan", headerShown: true }}
      />
    </Stack>
  );
}
