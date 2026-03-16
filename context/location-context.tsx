import React, { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";

interface Address {
  city: string;
  country: string;
  district: string;
  formattedAddress: string;
  isoCountryCode: string;
  name: string;
  postalCode: string;
  region: string;
  street: string;
  streetNumber: null;
  subregion: string;
  timezone: null;
}

interface Coords {
  latitude: number;
  longitude: number;
}
type LocationContextType = {
  location: Address;
  setLocation: (location:Address) => void;
  coords: Coords;
  setCoords: (Coords:{latitude:number,longitude:number}) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState({
    city: "",
    country: "",
    district: "",
    formattedAddress: "",
    isoCountryCode: "",
    name: "",
    postalCode: "",
    region: "",
    street: "",
    streetNumber: null,
    subregion: "",
    timezone: null,
  });
  const [coords, setCoords] = useState<Coords | null>(null);
  useEffect(() => {
    getLocation();
  }, []);
const getLocation = async () => {
  try {
    // 1. Check if GPS is actually turned on in settings
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      console.log("Location services are disabled on the device");
      return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    // 2. Try to get the last known position first (it's faster and less likely to error)
    let lastKnown = await Location.getLastKnownPositionAsync({});
    if (lastKnown) {
      setCoords({ latitude: lastKnown.coords.latitude, longitude: lastKnown.coords.longitude });
    }

    // 3. Get current position with a lower accuracy fallback
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    
    const { latitude, longitude } = location.coords;
    setCoords({ latitude, longitude });

    const address = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (address.length > 0) {
      setLocation(address[0]);
    }
  } catch (error) {
    console.error("Error getting location:", error);
  }
};

  return (
    <LocationContext.Provider
      value={{ location, setLocation, coords, setCoords }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useLocation must be used within locationProvider");
  }
  return context;
}
