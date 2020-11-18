import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Color from "../constants/Colors";

const LoactionPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const [loading, setIsLoading] = useState(false);
  const verifyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficent Permission!",
        "You need to grant camera permission to use this app",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const getLoactionHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    try {
      setIsLoading(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (err) {
      Alert.alert("Couldn't fetch location!", "Please try again later", [
        { text: "Okay" }
      ]);
    }
    setIsLoading(false);
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {loading ? (
          <ActivityIndicator size="large" color={Color.primary} />
        ) : (
          <Text>No location selected yet!</Text>
        )}
      </View>
      <Button
        title="Get user location"
        color={Color.primary}
        onPress={getLoactionHandler}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoactionPicker;
