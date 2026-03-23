import AppIcon from "@/components/app-logo";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);

const LogoSection = ({ animatedColorValue }: any) => {
  const animatedStrokeProps = useAnimatedProps(() => {
    return {
      stroke: interpolateColor(
        animatedColorValue.value,
        [0, 1],
        ["#FF642F", "#F5CB58"],
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedColorValue.value,
      [0, 1],
      ["#FF642F", "#F5CB58"],
    ),
  }));

  return (
    <View className="flex items-center justify-center">
      <View className="mb-6">
        <AppIcon animatedProps={animatedStrokeProps} />
      </View>

      <View className="flex items-center flex-row justify-center">
        <AnimatedText style={textStyle} className="text-4xl  font-[900] my-8">
          YUM
        </AnimatedText>

        <Text className="text-4xl font-[900] my-8 text-white">QUICK</Text>
      </View>
    </View>
  );
};

const AppSplashScreen = () => {
  const navigate = useRouter();
  const animatedColorValue = useSharedValue(0);

  const loginOpacity = useSharedValue(0);
  const loginY = useSharedValue(20);

  const signUpOpacity = useSharedValue(0);
  const signUpY = useSharedValue(20);
  const scale = useSharedValue(1);

  useEffect(() => {
    // animatedColorValue.value = withTiming(1, { duration: 1000 });
    const animatedColorTimer = setTimeout(() => {
      animatedColorValue.value = withTiming(1, { duration: 1000 });
    }, 2000);

    const loginTimer = setTimeout(() => {
      loginOpacity.value = withTiming(1, { duration: 500 });
      loginY.value = withTiming(0, { duration: 500 });
    }, 2500);

    const signUpTimer = setTimeout(() => {
      signUpOpacity.value = withTiming(1, { duration: 500 });
      signUpY.value = withTiming(0, { duration: 500 });
    }, 3000);
    const scaleTimer = setTimeout(() => {
      scale.value = withTiming(100, { duration: 500 });
    }, 2000);

    return () => {
      clearTimeout(animatedColorTimer);
      clearTimeout(scaleTimer);
      clearTimeout(loginTimer);
      clearTimeout(signUpTimer);
    };
  }, []);

  // const splashStyle = useAnimatedStyle(() => ({
  //   opacity: splashOpacity.value,
  // }));

  // const launchStyle = useAnimatedStyle(() => ({
  //   opacity: launchOpacity.value,
  // }));

  const loginAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: loginOpacity.value,
      transform: [{ translateY: loginY.value }],
    };
  });

  const signUpAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: signUpOpacity.value,
      transform: [{ translateY: signUpY.value }],
    };
  });

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(scale.value, [0, 1, 100], [0, 1, 100]) }],
    backgroundColor: interpolateColor(
      scale.value,
      [0, 1, 100],
      ["#F5CB58", "#F5CB58", "#7A10FA"],
    ),
  }));

  return (
    <View className="relative ">
      {/* Splash Screen */}

      <Animated.View
        // style={splashStyle}
        className="  bg-[#F5CB58] h-full w-full flex items-center justify-center"
      >
        <Animated.View
          style={animatedCircleStyle}
          className="animated h-[16px] w-[6.2px] absolute top-[54.5%] left-[49%] rounded-full "
        />
        <LogoSection animatedColorValue={animatedColorValue} />
        <View className="flex flex-column gap-4 ">
          <Pressable onPress={() => navigate.push("/(auth)/login")}>
            <Animated.View
              style={loginAnimatedStyle}
              className="bg-[#F5CB58] rounded-full px-20 py-3"
            >
              <Text className="text-[#7A10FA] text-lg font-[700] text-center">
                Log In
              </Text>
            </Animated.View>
          </Pressable>
          <Pressable onPress={() => navigate.push("/(auth)/sign-up")}>
            <Animated.View
              style={signUpAnimatedStyle}
              className="bg-[#F3E9B5] rounded-full px-20 py-3"
            >
              <Text className="text-[#7A10FA] text-lg font-[700]">Sign Up</Text>
            </Animated.View>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
};

export default AppSplashScreen;
