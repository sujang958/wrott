import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ComponentProps, FC } from "react";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const RouteIcons = {
  index: (props: Omit<ComponentProps<typeof Feather>, 'name'>) => <Feather {...props} name="home" />,
  search: (props: Omit<ComponentProps<typeof Feather>, 'name'>) => <Feather {...props} name="search" />,
} as const

export default function RootLayout() {
  return (
    <Tabs screenOptions={ ({route}) => ({
      header: undefined,
      tabBarIcon: ({ focused, color, size }) => {
        const Icon = RouteIcons[route.name as keyof typeof RouteIcons]

        // You can return any component that you like here!
        return <Icon color={color} size={size} />
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search" />
    </Tabs>
  );
}
