import { Feather } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import React from "react"
import { Text } from "react-native"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1d4ed8",
        headerShown: false,

        tabBarStyle: {
          bottom: 24,
          maxWidth: 500,
          borderRadius: 16,
          alignSelf: "center",
          width: "90%",
          borderWidth: 0,
          //paddingVertical: 12,
          // flexDirection: "row",
          // alignItems: "center",
          // alignContent: "center",
          // justifyContent: "space-between",
        },
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color, fontSize: 12, marginTop: -8 }}>홈</Text>
            )
          },
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color, fontSize: 12, marginTop: -8 }}>검색</Text>
            )
          },
          tabBarIcon: ({ color, focused }) => (
            <Feather name="search" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text style={{ color, fontSize: 12, marginTop: -8 }}>
                내 서재
              </Text>
            )
          },
          tabBarIcon: ({ color, focused }) => (
            <Feather name="columns" size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
