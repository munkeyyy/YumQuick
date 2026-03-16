import { useRouter } from "expo-router";
import {
  Bell,
  ChevronDown,
  Filter,
  Navigation,
  Navigation2,
  Option,
  Search,
  Settings2,
  ShoppingCart,
  User,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import { useLocation } from "@/context/location-context";

interface Address {
  city: string;
  country: string;
  district: string;
  formattedAddress: string;
  isoCountryCode: string;
  name: string;
  postalCode:string;
  region: string;
  street: string;
  streetNumber: null;
  subregion: string;
  timezone: null;
}
const HomeHeader = () => {
  const navigate = useRouter();
  const {location}=useLocation()

  const getFormattedAddress = (address: string, placeName: string) => {
    const parts = address.split(",");

    const filtered = parts.filter(
      (part) => part.trim().toLowerCase() !== placeName.trim().toLowerCase(),
    );

    return filtered.join(", ").trim();
  };
  const truncateText = (text: string, maxLength = 29) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
  return (
    <View className="">
      <View className="flex flex-row items-center justify-between pt-6 mb-4">
        <TouchableOpacity onPress={()=>navigate.push('/location')}>
          <View className="flex flex-row items-center gap-2">
            <Text>
              <Navigation size={20} fill={"#E95322"} color={"#E95322"} />
            </Text>

            <Text className="text-lg font-semibold text-white">
              {location?.name?.slice(0,20)}
            </Text>
            <Text className="text-lg font-semibold text-black">
              <ChevronDown size={20} color={"#f7f7f7"} />
            </Text>
          </View>
          <Text className="text-gray-100 text-center text-sm">
            {truncateText(getFormattedAddress(location?.formattedAddress, location?.name))}
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-between gap-3">
          <View className="bg-white p-1 rounded-xl">
            <ShoppingCart size={25} stroke={"#E95322"} />
          </View>
          {/* <View className="bg-white p-1 rounded-xl">
            <Bell size={25} stroke={"#E95322"} />
          </View> */}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate.push(`/search`)}
        className="bg-white w-[100%] px-3 py-3  relative rounded-3xl overflow-hidden flex-row  gap-1 items-center"
      >
        <Text>
          <Search size={20} color={"#E95322"} />
        </Text>
        <Text
          placeholder="Search..."
          disableFullscreenUI
          placeholderTextColor={"#676767"}
          className="bg-white text-gray-500 w-full p-2"
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
