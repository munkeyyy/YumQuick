import {
  AnimatedFingerprint,
  FingerprintScanner,
} from "@/components/animated-fingerprint";
import { NavigationHeader } from "@/components/common/navigation-header";
import { ScreenWrapper } from "@/components/common/screen-wrapper";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const SetFingerPrint = () => {
  const navigate= useRouter();
  const [isScanning, setIsScanning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const startAuth = async () => {
    setIsScanning(true);

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Registering Fingerprint",
    });

    if (result.success) {
      setIsFinished(true);
      // navigate.push(`/(tabs)`)
      // Move to next screen or show success

    } else {
      setIsScanning(false);
    }
  };
  return (
    <ScreenWrapper headerContent={<NavigationHeader title="Set Fingerprint" />}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FingerprintScanner
          isScanning={isScanning}
          onComplete={() => console.log("Animation Finished")}
        />

        <TouchableOpacity onPress={startAuth} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            {isScanning ? "Scanning..." : "Start Scan"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SetFingerPrint;

const styles = StyleSheet.create({
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
});
