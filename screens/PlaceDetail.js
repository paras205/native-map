import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetail = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.placeTitle
    });
  }, []);
  return (
    <View>
      <Text>PlaceDetail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default PlaceDetail;
