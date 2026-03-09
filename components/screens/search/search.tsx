import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutUp,
} from "react-native-reanimated";
import { Hamburger, IceCreamBowl, Pizza, Salad, Search, Settings2, X } from "lucide-react-native";
import { ScreenWrapper } from "@/components/common/screen-wrapper";

const SearchScreen = () => {
  const items = ["Dishes", "Restaurants", "Burgers"];
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  // Automatically cycle through the items array
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleRenderSearches = () => {
    // Replace this with your actual state/data source later
    const recentSearches = [
      { id: "1", term: "Salmon Sushi Box" },
      { id: "2", term: "Pepperoni Pizza" },
      { id: "3", term: "Vegan Burrito" },
    ];

    return (
      <View className="mt-2">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-900">
            Recent Searches
          </Text>
          <TouchableOpacity>
            <Text className="text-[#E95322] font-semibold">Clear All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={recentSearches}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View className="flex-row items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
              <TouchableOpacity onPress={() => setSearchText(item.term)}>
                <Text className="text-gray-700 mr-2 text-md font-medium">
                  {item.term}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="ml-1">
                <X size={14} color="#676767" strokeWidth={3} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  };

  const renderPopularSearches = () => {
    const popularSearches = [
      {
        id: "1",
        name: "Burgers",
        icon: <Hamburger size={28} color={"#fff"} />,
      },
      {
        id: "2",
        name: "Pizza",
        icon: <Pizza size={28} color={"#fff"} />,
      },
      {
        id: "3",
        name: "Desserts",
        icon: <IceCreamBowl size={28} color={"#fff"} />,
      },
      {
        id: "4",
        name: "Salads",
        icon: <Salad size={28} color={"#fff"} />,
      },
    ];
    return (
      <View className="mt-4">
        <View className=" mb-4">
          <Text className="text-xl font-bold text-gray-900">
            Popular Searches
          </Text>
          <View className="mt-4">

          <FlatList
            data={popularSearches}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap:18 }}
            renderItem={({ item }) => (
              <View className="">
                <TouchableOpacity className="flex-row items-center bg-[#E95322]  px-4 py-4 justify-between rounded-full border border-gray-200" onPress={() => setSearchText(item.name)}>
           
                    {item.icon}
                
                </TouchableOpacity>
                <Text className="text-center">{item.name}</Text>
              </View>
            )}
          />
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScreenWrapper
      headerContent={
        <View className="bg-white w-full p-2 px-4 relative rounded-3xl shadow-xl elevation-lg flex flex-row items-center gap-2">
          <Search size={15} color={"#E95322"} strokeWidth={4} />

          <View className="flex-1 justify-center h-10">
            {/* Animated Placeholder logic */}
            {searchText.length === 0 && (
              <View
                className="absolute left-2 flex items-center gap-2 flex-row overflow-clip"
                pointerEvents="none"
              >
                <Text className="text-[#676767] text-base">Search</Text>
                <Animated.Text
                  key={`placeholder-${index}`} // Key change triggers the animation
                  entering={FadeInDown.duration(700)}
                  exiting={FadeOutUp.duration(700)}
                  className="text-[#676767] text-base"
                >
                  {items[index]}
                </Animated.Text>
              </View>
            )}

            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              className="text-black w-full p-2 text-base"
            />
          </View>

          <TouchableOpacity className="p-3 bg-[#E95322] rounded-full">
            <Settings2 size={15} color={"#fff"} />
          </TouchableOpacity>
        </View>
      }
    >
      <View className="flex-1 p-5">
        <View>{handleRenderSearches()}</View>
        <View className="my-4">{renderPopularSearches()}</View>
      </View>
    </ScreenWrapper>
  );
};

export default SearchScreen;
