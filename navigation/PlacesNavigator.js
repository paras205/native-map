import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesList from "../screens/PlacesList";
import PlaceDetail from "../screens/PlaceDetail";
import NewPlace from "../screens/NewPlace";
import Map from "../screens/Map";

const Stack = createStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Places">
      <Stack.Screen name="Places" component={PlacesList} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
      <Stack.Screen name="NewPlace" component={NewPlace} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
