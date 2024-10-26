import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";

const myPicture = require("../../assets/images/IMG_001-modified.png");

export default function HomeScreen() {
  // State variable to hold the background color
  const [bgColor, setBgColor] = useState("white");

  // Function to change background color on button press
  function handlePress() {
    const newColor = bgColor === "white" ? "lightblue" : "white";
    setBgColor(newColor);
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Click to change color" color="midnightblue" onPress={handlePress} />
      <ScrollView>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ color: "black" }}>
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
        <Text style={{ color: "black" }}>
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
