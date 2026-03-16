import { NavigationHeader } from "@/components/common/navigation-header";
import { ScreenWrapper } from "@/components/common/screen-wrapper";
import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { useLocation } from "@/context/location-context";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as UserLocation from "expo-location";
const Location = () => {
  const { coords, setLocation, setCoords } = useLocation();
  const [locationPermission, setLocationPermission] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      // 1. Request the permission
      let { status } = await UserLocation.requestForegroundPermissionsAsync();
      setLocationPermission(status === "granted");
    })();
  }, []);
  const handleLocationSelect = async (region: any) => {
    const { latitude, longitude } = region;

    const address = await UserLocation.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const locationInfo = address[0];

    setLocation(locationInfo);
    setCoords({ latitude, longitude });
  };

  // 2. Handle the "Loading" state
  if (locationPermission === null) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Checking permissions...</Text>
      </View>
    );
  }

  // 3. Handle the "Denied" state
  if (locationPermission === false) {
    return (
      <View>
        <Text>
          Permission to access location was denied. Please enable it in
          settings.
        </Text>
      </View>
    );
  }
  return (
    <ScreenWrapper
      scrollable={false}
      headerContent={<NavigationHeader title="Set Location" />}
    >
      <View className="flex-1">
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: coords?.latitude || 19.076,
            longitude: coords?.longitude || 72.877,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onRegionChangeComplete={handleLocationSelect}
        >
          {coords && (
            <Marker
              coordinate={{
                latitude: coords.latitude,
                longitude: coords.longitude,
              }}
            />
          )}
        </MapView>
      </View>
    </ScreenWrapper>
  );
};

export default Location;
