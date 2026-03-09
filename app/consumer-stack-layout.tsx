import { useAuth } from "@/context/auth-context";
import { Stack } from "expo-router";

function StackLayout() {
  const { isSignedIn } = useAuth(); // Now this works! It's inside AuthProvider.

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <>
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="splashcreen" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/login" />
          <Stack.Screen name="(auth)/sign-up" />
        </>
      )}
    </Stack>
  );
}
export default StackLayout;