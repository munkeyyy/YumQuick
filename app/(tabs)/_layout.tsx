// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeIcon, MenuIcon, OrdersIcon, SupportIcon } from '@/helpers/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        // Using standard styles for the positioning
        tabBarStyle: {
          position: 'absolute',
        inset:'unset',

          // bottom: 0,
          width:'100%',
       
          backgroundColor: '#E95322', // Your orange color
          borderRadius: 40,
          height: 70,
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          padding:10,

          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
 // Centers icons vertically
        },
      }}
    >
      <Tabs.Screen
        name="index" // This corresponds to index.tsx (Home)
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color }) => <MenuIcon  size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color }) => <OrdersIcon  size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          tabBarIcon: ({ color }) => <SupportIcon  size={26} color={color} />,
        }}
      />
      {/* ... Add other screens: favorites, orders, support */}
    </Tabs>
  );
}