import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, { 
  useAnimatedProps, 
  useSharedValue, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  isScanning: boolean;
  onComplete?: () => void;
}

export const FingerprintScanner = ({ isScanning, onComplete }: Props) => {
  const navigate = useRouter();
  const progress = useSharedValue(1); 
  const STROKE_LENGTH = 3000; // High value for complex fingerprint paths

  // The exact 'd' attribute from your SVG
  const pathData = "M226.13 292.74C221.349 276.717 226.944 259.55 233.193 244.018C243.772 219.541 249.546 193.247 250.198 166.576C250.198 118.454 233.573 68.8059 197.877 35.5074C179.707 18.9791 156.327 9.3786 131.818 8.3825C107.31 7.38639 83.2313 15.058 63.788 30.0576C21.3553 62.7566 7.71767 117.854 8.31532 169.192V193.825M183.697 82.8121C162.399 55.563 133.114 44.6633 103.069 57.9609C79.4895 68.4246 63.7329 91.4227 55.6919 115.239C45.532 145.213 50.2589 176.658 46.9447 207.613C45.1517 225.107 38.9036 243.201 25.2121 253.991M198.964 110.552C205.682 128.362 209.071 147.261 208.961 166.303C208.846 190.37 203.272 214.094 192.661 235.68C186.631 248.051 173.917 269.85 157.074 261.294C143.328 254.318 145.61 238.187 149.522 225.87C156.965 202.49 167.832 182.271 168.919 157.093C169.951 133.495 162.562 108.699 139.2 98.78C132.551 95.9154 125.14 95.3513 118.136 97.1767C111.133 99.0022 104.933 103.113 100.515 108.862C80.6843 136.111 91.877 166.303 82.6951 196.332M119.477 201.128C110.458 226.415 100.135 256.553 108.611 283.366C118.988 316.065 156.314 327.292 186.304 316.719M77.3707 232.791C74.5553 243.169 70.5244 253.175 65.363 262.602C60.1813 272.066 52.7074 280.069 43.6305 285.873M127.898 165.868C129.995 156.632 130.582 147.116 129.637 137.692C130.819 147.11 130.229 156.667 127.898 165.868Z";

  useEffect(() => {
    if (isScanning) {
      // Simulate the scan over 3 seconds
      progress.value = withTiming(0, {
        duration: 3000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }, (finished) => {
        
        if (finished && onComplete) onComplete();
      });
    } else {
      progress.value = withTiming(1); // Reset
    }
  }, [isScanning]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: progress.value * STROKE_LENGTH,
  }));

  return (
    <View style={styles.container}>
    <Svg width="220" height="280" viewBox="0 0 259 329">
      {/* Background "Ghost" Path */}
      <Path
        d={pathData}
        fill="none" // Add this
        stroke="#FFDECF"
        strokeWidth="16.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Animated "Fill" Path */}
      <AnimatedPath
        d={pathData}
        fill="none" // Add this
        stroke="#E95322"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={STROKE_LENGTH}
        animatedProps={animatedProps}
      />
    </Svg>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    height:'100%'
  }
});