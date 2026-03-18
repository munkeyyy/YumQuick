import { Redirect } from "expo-router";
import { useAuth } from "@/context/auth-context";
import { useFonts } from "expo-font";

export default function Index() {

  const { isSignedIn } = useAuth();
  const [fontsLoaded] = useFonts({
    "Spartan": require("../assets/fonts/spartan.ttf"),
   
  });

  if (!isSignedIn && !fontsLoaded) {
    // Redirect to login if not authenticated
    return <Redirect href="/splashcreen" />;
  }

  // Redirect to tabs if authenticated
  return <Redirect href="/(tabs)" />;
}
