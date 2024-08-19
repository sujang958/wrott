import { Feather, Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { ComponentProps, FC } from "react"
import { View } from "react-native-reanimated/lib/typescript/Animated"

const RouteIcons = {
  index: (props: Omit<ComponentProps<typeof Feather>, "name">) => (
    <Feather {...props} name="home" />
  ),
  search: (props: Omit<ComponentProps<typeof Feather>, "name">) => (
    <Feather {...props} name="search" />
  ),
  library: (props: Omit<ComponentProps<typeof Feather>, "name">) => (
    <Ionicons {...props} name="library-outline" />
  ),
} as const

export default function RootLayout() {
  return (
    <Tabs
      sceneContainerStyle={{ maxWidth: 1200 }}
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {},
        tabBarIcon: ({ focused, color, size }) => {
          const Icon = RouteIcons[route.name as keyof typeof RouteIcons]
          return <Icon color={color} size={size} />
        },
        tabBarActiveTintColor: "blue",
        tabBarIconStyle: { flexDirection: "column" },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="library" />
    </Tabs>
  )
}
