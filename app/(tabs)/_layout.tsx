// app/(tabs)/_layout.tsx
import { HeartIcon, HomeIcon, MenuIcon } from '@/helpers/icons';
import { Tabs } from 'expo-router';
import { User2 } from 'lucide-react-native';

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
          inset: 'unset',

          // bottom: 0,
          width: '100%',

          backgroundColor: '#7A10FA', // Your orange color
          borderRadius: 40,
          height: 70,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,

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
          tabBarIcon: ({ color }) => <MenuIcon size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarIcon: ({ color }) => <HeartIcon size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          href: null, // This is the magic line that hides the icon
        }}
      />
      <Tabs.Screen
        name="support"

        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: null, // This is the magic line that hides the icon
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <User2 strokeWidth={1} size={32} color={color} />, // This is the magic line that hides the icon
        }}
      />
      {/* ... Add other screens: favorites, orders, support */}
    </Tabs>
  );
}