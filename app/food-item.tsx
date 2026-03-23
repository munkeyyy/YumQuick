import { NavigationHeader } from "@/components/common/navigation-header";
import { ScreenWrapper } from "@/components/common/screen-wrapper";
import { useCart } from "@/context/cart-context";
import { useLocalSearchParams } from "expo-router";
import { Minus, Plus, ShoppingBag } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FoodItem = () => {
  const { id, title, desc, rating, price, categoryId } = useLocalSearchParams();
  const { addItem } = useCart()
  const cartData = {
    id,
    title,
    desc,
    rating,
    price,
    categoryId,
  };

  return (
    <ScreenWrapper
      headerContent={<NavigationHeader title={title.toString()} />}
    >
      <View className="justify-center  p-6">
        <View
          style={{
            height: 222,
            width: "100%",
          }}
          className=" bg-gray-300 rounded-3xl"
        />
        <View className="my-4 border-b border-[#FFD8C7]  px-4 pb-2 flex flex-row w-full justify-between">
          <Text className="font-bold text-[#7A10FA] text-4xl">₹{price}</Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity className="p-2 rounded-full bg-[#7A10FA]">
              <Text>
                <Minus size={10} color={"#fff"} strokeWidth={4} />
              </Text>
            </TouchableOpacity>
            <Text className="text-xl font-semibold">1</Text>
            <TouchableOpacity className="p-2 rounded-full bg-[#7A10FA]">
              <Text>
                <Plus size={10} color={"#fff"} strokeWidth={4} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-lg font-medium my-1">{desc}</Text>
        <Text className="text-lg font-normal my-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, harum.
        </Text>
        <View className="my-6 ">
          <Text className="text-xl font-bold">Toppings</Text>

          <View>
            {["Onions", "Diet Coke", "Chutney"].map((a) => {
              return (
                <View
                  key={a}
                  className="flex-row justify-between items-center gap-2 my-2"
                >
                  <Text className="text-lg">{a}</Text>
                  <Text className="text-lg">245</Text>
                </View>
              );
            })}
          </View>
          <TouchableOpacity onPress={() => addItem(cartData)} className="flex-row item-center gap-3 absolute bottom-[-60] left-[100] bg-[#7A10FA] p-4 rounded-full">
            <ShoppingBag color={"white"} size={20} />
            <Text className="text-white">Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default FoodItem;
