import { useRouter } from "expo-router";
import {
  Bookmark,
  BookUser,
  ChevronLeft,
  ChevronRight,
  ClockFading,
  CreditCard,
  Crown,
  EyeOff,
  Gift,
  HandHeart,
  LeafyGreen,
  MessageSquare,
  MessageSquareDashed,
  MessageSquareDot,
  Palette,
  Power,
  Save,
  ScrollText,
  Settings,
  Star,
  TicketPercent,
  UtensilsCrossed,
  Vegan,
  Wallet,
} from "lucide-react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const navigation = useRouter();
  return (
    <SafeAreaView className="bg-white h-screen  pt-20">
      <View className="px-4 flex-row items-center gap-3">
        <TouchableOpacity onPress={() => navigation.back()}>
          <ChevronLeft size={30} color={"#E95322"} />
        </TouchableOpacity>
        <Text className="text-2xl font-semibold">Profile</Text>
      </View>
      <View className="mt-4 mx-2 p-3">
        <View className="  rounded-3xl overflow-hidden">
          <View className="flex-row p-3 bg-[#f7f7f7] items-center gap-3 my-2">
            <View className="justify-center items-center bg-[#E95322] h-20 w-20 rounded-full">
              <Text className="text-center text-orange-300 text-4xl font-semibold">
                R
              </Text>
            </View>
            <View>
              <Text className="font-semibold text-2xl">Rohit</Text>

              <TouchableOpacity className="flex-row items-center gap-2 mt-4">
                <Text className="text-base font-medium text-[#E95322]">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row p-3 py-4 bg-[#000] items-center justify-between ">
            <View className="flex-row items-center gap-2">
              <View className="p-2  bg-[#ffd374] rounded-full">
                <Crown size={20} fill={"#000"} />
              </View>
              <Text className="text-lg font-bold text-[#ffd374]">
                Join YumQuick Premium
              </Text>
            </View>
            <Text className="text-lg font-bold text-[#ffd374]">
              <ChevronRight size={25} strokeWidth={3} color={"#ffd374"} />
            </Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 200,
            gap: 16,
          }}
        >
          <View className="flex-row items-center justify-between my-2">
            <View className="flex-row items-center py-3 px-3  rounded-2xl bg-[#f7f7f7]">
              <View className="p-2  bg-[#fcfcfc] rounded-full">
                <Wallet color={"#000"} size={20} />
              </View>
              <Text className="text-base font-medium"> Yumquick Money</Text>
            </View>
            <View className="flex-row items-center py-3 px-3  rounded-2xl bg-[#f7f7f7]">
              <View className="p-2  bg-[#fcfcfc] rounded-full">
                <TicketPercent color={"#000"} size={20} />
              </View>
              <Text className="text-base font-medium"> Your Coupons</Text>
            </View>
          </View>
          <View className="bg-[#f7f7f7] rounded-2xl py-2 my-3">
            <View className="relative">
              <View className="h-7 rounded bg-[#E95322] w-1 absolute left-0.5 bottom-3" />
              <Text className="p-3 px-4 text-xl font-semibold">
                Your prefrences
              </Text>
            </View>
            <View className="p-4">
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <LeafyGreen size={20} fill={"#498341"} />
                  <Text className="text-lg font-bold">Veg Mode</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-medium text-[#9b9b9bee]">
                    Off
                  </Text>
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <Star size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">
                    Show personalised ratings
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <Palette size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Appereance</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-medium text-[#9b9b9bee]">
                    Automatic
                  </Text>
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between pt-3">
                <View className="flex-row items-center gap-2  ">
                  <CreditCard size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Payment method</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-medium text-[#9b9b9bee]">
                    Off
                  </Text>
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#f7f7f7] rounded-2xl py-2 my-3">
            <View className="relative">
              <View className="h-7 rounded bg-[#E95322] w-1 absolute left-0.5 bottom-3" />
              <Text className="p-3 px-4 text-xl font-semibold">
                Food delivery
              </Text>
            </View>
            <View className="p-4">
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <ScrollText size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Your Orders</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <BookUser size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Address book</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <Bookmark size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Your Collection</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <HandHeart size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">
                    Manage recommendations
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <MessageSquareDot size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">
                    Online ordering help
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between pt-3 ">
                <View className="flex-row items-center gap-2  ">
                  <EyeOff size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Hidden restaurants</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#f7f7f7] rounded-2xl py-2 my-3">
            <View className="relative">
              <View className="h-7 rounded bg-[#E95322] w-1 absolute left-0.5 bottom-3" />
              <Text className="p-3 px-4 text-xl font-semibold">
                Dining & experiences
              </Text>
            </View>
            <View className="p-4">
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <ClockFading size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">
                    Your dining transactions
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <Gift size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Your dining rewards</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <UtensilsCrossed size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Your bookings</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <Bookmark size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Your Collection</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                <MessageSquareDot size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">
                    Online ordering help
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-between pt-3 ">
                <View className="flex-row items-center gap-2  ">
                  <EyeOff size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Hidden restaurants</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#f7f7f7] rounded-2xl py-2 my-3">
            <View className="relative">
              <View className="h-7 rounded bg-[#E95322] w-1 absolute left-0.5 bottom-3" />
              <Text className="p-3 px-4 text-xl font-semibold">More</Text>
            </View>
            <View className="p-4">
              <View className="flex-row items-center justify-between py-3 border-b  border-[#dfdfdfee]">
                <View className="flex-row items-center gap-2  ">
                  <Settings size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Settings</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-3 ">
                <View className="flex-row items-center gap-2  ">
                  <Power size={20} color={"#9b9b9bee"} />
                  <Text className="text-lg font-bold">Log out</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <ChevronRight size={20} color={"#9b9b9bee"} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
