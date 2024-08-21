import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import "react-native-reanimated"
import "../global.css"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
