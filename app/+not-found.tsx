import { Link, Stack } from 'expo-router';
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <Link href="/">
        <Text>Go Back</Text>
      </Link>
    </SafeAreaView>
  )
}