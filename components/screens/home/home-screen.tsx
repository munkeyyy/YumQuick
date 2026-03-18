import { Fonts } from "@/constants/theme";
import {
  ChefIcon,
  CulinaryIcon,
  Snacks,
  SoupIcon,
  UtensilIcon,
} from "@/helpers/icons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const TAB_WIDTH = SCREEN_WIDTH / 5; // Divide screen into 5 equal slots

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("1");
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useRouter();
  // Animated value to track the center X of the hump
  const humpX = useRef(new Animated.Value(TAB_WIDTH / 2)).current;

  // 1. Create the dynamic Path generator
  // This recreates your SVG structure but makes the "Hump" coordinates dynamic
  const getPath = (x: number) => {
    const humpWidth = 100; // Total width of the curved section
    const humpHeight = 93; // How deep the "cutout" is

    // Define anchor points relative to the center 'x'
    const startHump = x - 50; // x - (humpWidth / 2)
    const endHump = x + 50; // x + (humpWidth / 2)

    return `
    M 0 ${humpHeight}
    H ${startHump}
    C ${startHump + 15} ${humpHeight} ${startHump + 20} 75 ${startHump + 20} 60
    V 25
    C ${startHump + 20} 10 ${startHump + 35} 0 ${x} 0
    C ${endHump - 35} 0 ${endHump - 20} 10 ${endHump - 20} 25
    V 60
    C ${endHump - 20} 75 ${endHump - 15} ${humpHeight} ${endHump} ${humpHeight}
    H ${SCREEN_WIDTH}
    V 800
    H 0
    Z
  `;
  };

  // 2. Animate the hump to the new position
  const handlePress = (id: string, index: number) => {
    setActiveCategory(id);
    setActiveIndex(index);

    Animated.spring(humpX, {
      toValue: index * TAB_WIDTH + TAB_WIDTH / 2,
      useNativeDriver: false, // Path animation requires false for d-attribute
      friction: 8,
      tension: 50,
    }).start();
  };

  // Create a listener to update the path string in real-time
  const [pathStr, setPathStr] = useState(getPath(TAB_WIDTH / 2));

  humpX.addListener(({ value }) => {
    setPathStr(getPath(value));
  });

  const categories = [
    { id: "1", icon: <Snacks size={28} />, name: "Snacks" },
    { id: "2", icon: <UtensilIcon size={16} />, name: "Meal" },
    { id: "3", icon: <ChefIcon size={28} />, name: "Vegan" },
    { id: "4", icon: <SoupIcon size={28} />, name: "Dessert" },
    { id: "5", icon: <CulinaryIcon size={28} />, name: "Drinks" },
  ];

  const food = [
    {
      id: "1",
      title: "Mexican Appetizers",
      desc: "Totilla Chips With Toppings",
      price: "250",
      rating: "5.0",
      categoryId: "1",
    },
    {
      id: "2",
      title: "Peri Peri Fries",
      desc: "Totilla Chips With Toppings",
      price: "150",
      rating: "4.0",
      categoryId: "1",
    },
    {
      id: "3",
      title: "Chicken Popcorn",
      desc: "Totilla Chips With Toppings",
      price: "250",
      rating: "3.8",
      categoryId: "1",
    },
    {
      id: "4",
      title: "Chicken Popcorn",
      desc: "Totilla Chips With Toppings",
      price: "250",
      rating: "5.0",
      categoryId: "2",
    },
    {
      id: "5",
      title: "Chicken Biryani",
      desc: "Chicken Biryanin wit Raita",
      price: "250",
      rating: "5.0",
      categoryId: "2",
    },
    {
      id: "6",
      title: "Chicken Tandoori",
      desc: "5 Peices of chicken cooked in Tandoor",
      price: "450",
      rating: "4.5",
      categoryId: "2",
    },
  ];

  return (
    <View className="flex-1 bg-[#E95322]">
      {/* Background SVG Layer */}
      <View className="absolute inset-0 top-5 ">
        <Svg width={SCREEN_WIDTH} height={2000}>
          <Path d={pathStr} fill="#F5F5F5" />
        </Svg>
      </View>

      {/* Tabs Layer */}
      <View className="flex-row pt-8 ">
        {categories.map((item, index) => {
          const isActive = activeCategory === item.id;
          return (
            <Pressable
              key={item.id}
              onPress={() => handlePress(item.id, index)}
              style={{ width: TAB_WIDTH }}
              className="items-center justify-center flex-col self-center"
            >
              <View className={`self-center`}>
                {React.cloneElement(item.icon, {
                  color: isActive ? "#E95322" : "#F3E9B5",
                })}
              </View>
              <Text
                className={`text-[10px] mt-2 font-bold ${isActive ? "text-[#E95322]" : "text-white"}`}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Results Content */}
      <View className="flex-1 px-6 pt-10 ">


        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
            gap: 16,
          }}
        >
          {food
            .filter((f) => f.categoryId === categories[activeIndex].id)
            .map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    navigation.push({
                      pathname: "/food-item",
                      params: {
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        price: item.price,
                        rating: item.rating,
                        categoryId: item.categoryId,
                      },
                    })
                  }
                  className="bg-white p-4 rounded-2xl shadow-sm relative "
                  >
                  <Text className="p-1 px-3 text-white bg-[rgba(0,0,0,0.6)] rounded-full absolute z-10 text-sm top-8 left-6">{item.title}</Text>
                  <View
                    style={{
                      height: 222,
                      width: "100%",
                    }}
                    className=" bg-gray-300 rounded-2xl"
                  />
                  <View className="flex-row justify-between items-center mt-4">
                    <View className="flex-1">
                      <Text style={{fontFamily:Fonts.spartan}} className="text-lg font-bold text-gray-900">
                        {item.title}
                      </Text>
                      <Text className="text-gray-500 text-xs mb-1">
                        {item.desc}
                      </Text>
                      <Text className="text-[#E95322] font-bold">
                        ₹{item.price}
                      </Text>
                    </View>

                    <View className="bg-[#FDF2EE] px-3 py-1 rounded-full">
                      <Text className="text-[#E95322] text-xs font-bold">
                        ★ {item.rating}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
