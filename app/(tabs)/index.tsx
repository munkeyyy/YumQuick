import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ScreenWrapper } from '@/components/common/screen-wrapper';
import HomeHeader from '@/components/screens/home/home-header';

export default function HomeScreen() {
  return (
    <ScreenWrapper
    headerContent={<HomeHeader/>}
    >
<View></View>
    </ScreenWrapper>
  );
}


