import { useRouter } from 'expo-router'
import { Bell, Filter, Option, Settings2, ShoppingCart, User } from 'lucide-react-native'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const HomeHeader = () => {
    const navigate=useRouter()
  return (
    <View className=''>
        <View className='flex flex-row items-center justify-between pt-6'>
            <TouchableOpacity onPress={()=>navigate.push(`/search`)} className='bg-white w-[55%] p-1  relative rounded-3xl overflow-hidden'>
                <Text placeholder='Search...' disableFullscreenUI placeholderTextColor={"#676767"} className='bg-white text-black w-full p-2'>Search</Text>
                <TouchableOpacity className='p-2 bg-[#E95322] absolute right-2 top-[5px] rounded-full '>
                    <Settings2 size={15} color={"#fff"}/>
                </TouchableOpacity>
            </TouchableOpacity>
            <View className='flex flex-row items-center justify-between gap-3'>
                <View className='bg-white p-1 rounded-xl'>
                    <ShoppingCart size={25} stroke={"#E95322"}/>
                </View>
                <View className='bg-white p-1 rounded-xl'>
                    <Bell size={25} stroke={"#E95322"}/>
                </View>
                <View className='bg-white p-1 rounded-xl'>
                    <User size={25} stroke={"#E95322"}/>
                </View>

            </View>

        </View>
            <View className='mt-6'>
                <Text className='text-white text-4xl font-extrabold'>Good Morning</Text>
                <Text className='text-[#E95322] text-sm font-semibold'>Rise And Shine! its's Breakfast Time</Text>
            </View>
      
    </View>
  )
}

export default HomeHeader
