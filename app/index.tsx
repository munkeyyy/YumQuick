import { Redirect } from "expo-router";
import { useAuth } from "@/context/auth-context";

export default function Index() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    // Redirect to login if not authenticated
    return <Redirect href="/splashcreen" />;
  }

  // Redirect to tabs if authenticated
  return <Redirect href="/(tabs)" />;
}