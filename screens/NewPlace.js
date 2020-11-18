import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
} from "react-native";
import { useDispatch } from "react-redux";

import * as placesAction from "../store/placesAction";
import ImagePicker from "../components/ImagePicker";
import LoactionPicker from "../components/LoactionPicker";
import Colors from "../constants/Colors";

const NewPlace = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const titleChangeHandler = (text) => {
    setTitle(text);
  };
  const onImageTaken = (imagePath) => {
    setImage(imagePath);
  };
  const savePlaceHandler = () => {
    dispatch(placesAction.addPlace(title, image));
    props.navigation.goBack();
  };
  useEffect(() => {
    props.navigation.setOptions({
      title: "Add Places"
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={titleChangeHandler}
          value={title}
        />
        <ImagePicker onImageTaken={onImageTaken} />
        <LoactionPicker navigation={props.navigation} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlace;
