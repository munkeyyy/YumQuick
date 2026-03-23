import { ScreenWrapper } from "@/components/common/screen-wrapper";
import {
  Hamburger,
  Heart,
  IceCreamBowl,
  Pizza,
  Salad,
  Search,
  Settings2,
  X,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeInDown,
  FadeOutUp
} from "react-native-reanimated";
// @ts-ignore
import Burger from "../../../assets/images/burger.jpg";
const SearchScreen = () => {
  const items = ["Dishes", "Restaurants", "Burgers"];
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [activeItem, setActiveItem] = useState("all");
  // Automatically cycle through the items array
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const popularSearches = [
    {
      id: "1",
      name: "Burgers",
      tag: "all",
      icon: <Hamburger size={28} strokeWidth={1} color={"#fff"} />,
    },
    {
      id: "2",
      name: "Pizza",
      tag: "fast delivery",

      icon: <Pizza size={28} strokeWidth={1} color={"#fff"} />,
    },
    {
      id: "3",
      name: "Desserts",
      tag: "top rated",
      icon: <IceCreamBowl size={28} strokeWidth={1} color={"#fff"} />,
    },
    {
      id: "4",
      name: "Salads",
      tag: "vegie",
      icon: <Salad size={28} strokeWidth={1} color={"#fff"} />,
    },
  ];
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
            <Text className="text-[#7A10FA] font-semibold">Clear All</Text>
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
              contentContainerStyle={{ gap: 18 }}
              renderItem={({ item }) => (
                <View className="">
                  <TouchableOpacity
                    className="flex-row items-center bg-[#7A10FA]  px-4 py-4 justify-between rounded-full border border-gray-200"
                    onPress={() => setSearchText(item.name)}
                  >
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

  const renderFilters = () => {
    const filterData = [
      {
        id: "1",
        key: "all",
      },
      {
        id: "2",
        key: "fast delivery",
      },
      {
        id: "3",
        key: "top rated",
      },
      {
        id: "4",
        key: "vegie",
      },
    ];
    const handleFilter = (key: string) => {
      popularSearches.filter((s) => s.tag === key);
      setActiveItem(key);
    };
    return (
      <View className="my-4">
        <FlatList
          data={filterData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 15 }}
          renderItem={({ item }) => (
            <View className="">
              <TouchableOpacity
                className={`flex-row items-center   px-4 py-2 justify-between rounded-full  border border-[#7A10FA] ${activeItem === item.key ? "bg-[#7A10FA]" : "border-[#7A10FA] bg-white"}`}
                onPress={() => handleFilter(item.key)}
              >
                <Text
                  className={`${activeItem === item.key ? "text-white" : "text-[#7A10FA]"} text-sm font-medium`}
                >
                  {item.key.toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  };
  return (
    <ScreenWrapper
      headerContent={
        <View className="bg-white w-full p-2 px-4 relative rounded-3xl shadow-xl elevation-lg flex flex-row items-center gap-2">
          <Search size={15} color={"#7A10FA"} strokeWidth={4} />

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

          <TouchableOpacity className="p-3 bg-[#7A10FA] rounded-full">
            <Settings2 size={15} color={"#fff"} />
          </TouchableOpacity>
        </View>
      }
    >
      <View className="flex-1 p-5">
        <View>{handleRenderSearches()}</View>
        <View className="my-4">{renderPopularSearches()}</View>
        <View>
          <Text className="text-black font-extrabold text-xl">{`Search Results For '${searchText}'`}</Text>
          {renderFilters()}
        </View>
        <View className="my-4 ">
          <View className=" bg-white rounded-3xl overflow-hidden flex-2">
            <View className="h-[12rem] w-full relative">
              <TouchableOpacity className="absolute left-2 top-5 bg-gray-100 p-2 rounded-full z-10">
                <Heart size={15} stroke={"red"} />
              </TouchableOpacity>

              <Image source={Burger} className="h-full w-full" />
            </View>
          </View>
          <View className="flex flex-row justify-between gap-2">
            <View className=" bg-white rounded-3xl overflow-hidden my-2">
              <View className="h-[10rem] w-full relative">
                <TouchableOpacity className="absolute left-2 top-5 bg-gray-100 p-2 rounded-full z-10">
                  <Heart size={15} stroke={"red"} />
                </TouchableOpacity>

                <Image source={Burger} className="h-full w-full" />
              </View>
            </View>
            <View className=" bg-white rounded-3xl overflow-hidden my-2">
              <View className="h-[10rem] w-full relative">
                <TouchableOpacity className="absolute left-2 top-5 bg-gray-100 p-2 rounded-full z-10">
                  <Heart size={15} stroke={"red"} />
                </TouchableOpacity>

                <Image source={Burger} className="h-full w-full" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SearchScreen;
