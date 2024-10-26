import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
const myPicture = require("../../assets/images/IMG_001-modified.png");

// Default export for r component
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", height: 300 }}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ color: "black" }}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam."
      </Text>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ color: "black" }}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam."
      </Text>
    </View>
  );
}

{
  /* <ImageBackground source={myPicture} style={{flex:1}}>
        <Text>Image Text</Text>
      </ImageBackground> */
}
