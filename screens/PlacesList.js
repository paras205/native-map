import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import * as placesAction from "../store/placesAction";
import PlaceItem from "../components/PlaceItem";
import HeaderButton from "../components/HeaderButtons";

const PlacesList = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();
  useEffect(() => {
    props.navigation.setOptions({
      title: "All Places",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              props.navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      )
    });
    dispatch(placesAction.loadPlaces);
  }, [dispatch]);
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeId: itemData.item.id,
              placeTitle: itemData.item.title,
              placeImage: itemData.item.imageUri
            });
          }}
        />
      )}
    />
  );
};

export default PlacesList;
