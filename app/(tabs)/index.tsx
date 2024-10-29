import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";

const myPicture = require("../../assets/images/IMG_001-modified.png");

export default function HomeScreen() {
  // State variables to hold the visual feedback properties
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [width, setWidth] = useState(300);
  const [imageOpacity, setImageOpacity] = useState(1); // For onPressIn and onPressOut
  const [modalStatus, setModalStatus] = useState(false);

  // Function to change background color on button press
  function handleClick() {
    const newColor = bgColor === "white" ? "royalblue" : "white";
    const newTextColor = textColor === "black" ? "white" : "black";
    setBgColor(newColor);
    setTextColor(newTextColor);
    setModalStatus(true);
  }

  function handlePress() {
    const newWidth = width === 300 ? 500 : 300;
    setWidth(newWidth);
  }

  function handleOnPressIn() {
    setImageOpacity(0.5); // Reduces opacity to 50% on press
  }

  function handleOnPressOut() {
    setImageOpacity(1); // Resets opacity back to 100%
  }

  function handleLongPress() {
    setBgColor(bgColor === "white" ? "lightcoral" : "white"); // Change background color on long press
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button
        title="Click to change color"
        color="midnightblue"
        onPress={handleClick}
      />
      <ScrollView>
        <Pressable
          onPress={handlePress}
          onPressIn={handleOnPressIn}
          onPressOut={handleOnPressOut}
          onLongPress={handleLongPress}
        >
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: width, height: 300, opacity: imageOpacity }}
          />
        </Pressable>
        <Modal
          visible={modalStatus}
          onRequestClose={() => setModalStatus(false)}
          animationType={"slide"}
          presentationStyle={"formSheet"}
        >
          <Text>This is the content of the Modal</Text>
          <Button title="Cancel" onPress={() => setModalStatus(false)} />
        </Modal>
        <Text style={{ color: textColor }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam."
        </Text>
        <Text style={{ color: textColor }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam."
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
    padding: 20,
  },
});
