import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import "../global.css";
import { AuthProvider, useAuth } from "@/context/auth-context";
import StackLayout from "./consumer-stack-layout";
import { LocationProvider } from "@/context/location-context";
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <LocationProvider>

        <StackLayout />
        </LocationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
