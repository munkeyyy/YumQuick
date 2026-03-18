import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";

const CartScreen = () => {
  return (
    <SafeAreaView className="pt-10 bg-white h-screen">
      <View className="flex-row items-center gap-3 w-full p-4 py-6 shadow-xl  bg-white ">
        <TouchableOpacity>
          <ChevronLeft />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Cart</Text>
      </View>
      <ScrollView
      style={{
        paddingBottom:200,
        
      }}
      >

      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
