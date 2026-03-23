import { useCart } from "@/context/cart-context";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const CartScreen = () => {
  const { cart, removeItem, clearCart } = useCart();
  const navigate = useRouter()
  console.log(cart);
  return (
    <SafeAreaView className="pt-10 b-2 bg-white h-screen">
      <View className="flex-row items-center gap-3 w-full p-4 py-6 shadow-xl  bg-white ">
        <TouchableOpacity onPress={() => navigate.back()}>
          <ChevronLeft />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Cart</Text>
      </View>
      <ScrollView
        style={{
          paddingTop: 20,
          paddingHorizontal: 10,
          paddingBottom: 200,
        }}
      >
        <View className="gap-4">
          {cart.map((item: any) => {
            return (
              <View
                key={item.id}
                className="p-3 rounded-xl flex-row bg-white items-center shadow-md gap-4 "
              >
                <View className="h-20 w-20 rounded-md bg-gray-300" />
                <View>
                  <Text>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View className="bg-white px-4 py-6 border border-t border-gray-200 shadow-xl w-full flex-row items-center justify-between">
        <View className="space-y-2">
          <Text className="text-base font-medium">To Pay</Text>
          <Text className="text-xl font-semibold"> ₹550 </Text>
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity className="px-6 py-3 shadow-lg   border bg-white  rounded-xl">
            <Text className="font-bold text-lg text-black">Pay Online</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-6 py-3 shadow-lg   bg-[#7A10FA] rounded-xl">
            <Text className="font-bold text-lg text-white">Pay Cash/UPI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
