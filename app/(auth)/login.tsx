import { NavigationHeader } from "@/components/common/navigation-header";
import { ScreenWrapper } from "@/components/common/screen-wrapper";

import { Eye, EyeClosed, EyeOff, Navigation } from "lucide-react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
// @ts-ignore
import Google from "../../assets/images/Gmail.svg";
// @ts-ignore
import Facebook from "../../assets/images/Facebook.svg";
// @ts-ignore
import Print from "../../assets/images/Mark.svg";
import { Image } from "react-native-svg";

import { useRouter } from "expo-router";
import { useAuth } from "@/context/auth-context";

const Login = () => {
  const navigate = useRouter();
const {signIn}=useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

const handleSignIn=()=>{
  signIn();
  navigate.push(`/(tabs)`)
}
  return (
    <ScreenWrapper headerContent={<NavigationHeader title="Log In" />}>
      <View style={styles.conatiner}>
        <View style={styles.greetContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos dolores perspiciatis asperiores vel omnis dolorum sed
            vero alias .
          </Text>
        </View>
        <View style={styles.formConatiner}>
          <View style={styles.formInputConatiner}>
            <Text style={styles.inputlabelText}>Email or Mobile Number</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="example@example.com"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={[styles.formInputConatiner, styles.passwordField]}>
            <Text style={styles.inputlabelText}>Password</Text>
            <TextInput
              secureTextEntry={!isPasswordVisible}
              placeholder="•••••••••"
              style={styles.textInput}
            ></TextInput>
            <View style={styles.eyeIcon}>
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Eye size={20} color={"#E95322"} />
                ) : (
                  <EyeOff size={20} color={"#E95322"} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ctaContainer}>
          <TouchableOpacity onPress={handleSignIn} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.optionText}>or sign up with </Text>
            <View style={styles.options}>
              <View style={styles.option}>
                <Google style={styles.optionImage} />
              </View>
              <View style={styles.option}>
                <Facebook style={styles.optionImage} />
              </View>
              <TouchableOpacity onPress={()=>navigate.push('/(auth)/set-fingerprint')} style={styles.option}>
                <Print style={styles.optionImage} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signuplink}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigate.push("/(auth)/sign-up")}>
              <Text style={[styles.signUpText, { color: "#E95322" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  conatiner: {
    padding: 20,
  },
  greetContainer: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  descriptionText: {
    fontSize: 14,
    color: "#000h",
  },
  formConatiner: {
    flexDirection: "column",
    gap: 0,
  },

  formInputConatiner: {
    flexDirection: "column",
    gap: 5,
    marginTop: 20,
  },
  inputlabelText: {
    fontSize: 16,

    color: "#000",
    fontWeight: "600",
    marginBottom: 10,
  },
  textInput: {
    padding: 10,
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: "#F3E9B5",
    color: "#391713",
    fontSize: 16,
  },
  passwordField: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 48,
  },
  forgotPassword: {
    marginTop: 5,
  },
  forgotPasswordText: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: "500",
    color: "#E95322",
  },
  ctaContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap: 20,
  },
  loginButton: {
    backgroundColor: "#E95322",
    paddingHorizontal: 80,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  optionText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "200",
    textAlign: "center",
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 5,
  },
  signUpText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
  },
  option: {
    backgroundColor: "#FFDECF",
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  optionImage: {
    height: 40,
    width: 40,
    resizeMode: "cover",
  },

  signuplink: {
    flexDirection: "row",
    gap: 5,
  },
});
