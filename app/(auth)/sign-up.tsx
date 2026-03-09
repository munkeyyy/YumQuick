import { NavigationHeader } from "@/components/common/navigation-header";
import { ScreenWrapper } from "@/components/common/screen-wrapper";
import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// @ts-ignore
import Google from "../../assets/images/Gmail.svg";
// @ts-ignore
import Facebook from "../../assets/images/Facebook.svg";
// @ts-ignore
import Print from "../../assets/images/Mark.svg";
import { useRouter,  } from "expo-router";
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
      const navigate = useRouter();
  
  return (
    <ScreenWrapper headerContent={<NavigationHeader title="New Account" />}>
      <View style={styles.conatiner}>
        <View style={styles.formConatiner}>
          <View style={styles.formInputConatiner}>
            <Text style={styles.inputlabelText}>Full Name</Text>
            <TextInput
              placeholder="example@example.com"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={[styles.formInputConatiner, styles.passwordField]}>
            <Text style={styles.inputlabelText}>Password</Text>
            <TextInput
              secureTextEntry
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
          </View>
          <View style={styles.formInputConatiner}>
            <Text style={styles.inputlabelText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="example@example.com"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={styles.formInputConatiner}>
            <Text style={styles.inputlabelText}>Mobile Number</Text>
            <TextInput
              keyboardType="phone-pad"
              placeholder="+123 456 789"
              style={styles.textInput}
            ></TextInput>
          </View>
          <View style={styles.formInputConatiner}>
            <Text style={styles.inputlabelText}>Date Of Birth</Text>
            <TextInput
              textContentType="dateTime"
              placeholder="+123 456 789"
              style={styles.textInput}
            ></TextInput>
          </View>
        </View>
        <View style={styles.policy}>

        <Text style={styles.terms}>By continuing, you agree to 
 Terms of Use and Privacy Policy.</Text>
        </View>
        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up </Text>
          </TouchableOpacity>
       
             <View >
                        <Text style={styles.optionText}>or sign up with </Text>
                        <View style={styles.options}>
                          <View style={styles.option}>
                            <Google style={styles.optionImage}  />
                          </View>
                          <View style={styles.option}>
                            <Facebook style={styles.optionImage} />
                          </View>
                          <View style={styles.option}>
                            <Print style={styles.optionImage} />
                          </View>
                        </View>
                      </View>
       
          <View style={styles.signuplink}>
            <Text style={styles.signUpText}>Already have an account?</Text>
             <TouchableOpacity onPress={()=>navigate.push("/(auth)/login")}>
            <Text style={[styles.signUpText, { color: "#E95322" }]}>
             Log In
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },

  formConatiner: {
    flexDirection: "column",
    gap: 0,
  },

  formInputConatiner: {
    flexDirection: "column",
    gap: 0,
    marginTop: 10,
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
    top: 45,
  },
  forgotPassword: {
    marginTop: 10,
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
    marginTop: 10,
    gap: 10,
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
    marginVertical:5,
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
    width: 30,
    resizeMode: "cover",
  },

  signuplink: {
    flexDirection: "row",
    gap: 5,
  },
  terms:{
    textAlign:'center',
    fontSize:12,
    marginVertical:10,
    width:180,
  },
  policy:{
    justifyContent:'center',
    alignItems:'center'
  }
});
