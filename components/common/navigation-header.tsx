import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {router} from "expo-router"
import { ChevronLeft } from "lucide-react-native";
interface NavigationHeaderProps {
  title: string;

  // You can add more props like subtitle, icons, etc. as needed
}

export function NavigationHeader({ title }: NavigationHeaderProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>router.back()}>
          <ChevronLeft color="#E95322" size={22} />
        </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    fontFamily:'Spartan'
  },
});
