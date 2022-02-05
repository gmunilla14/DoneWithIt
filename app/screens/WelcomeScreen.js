import React from "react";
import { View, Image, Text } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

function WelcomeScreen(props) {
  let dims = useDimensions();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 50,
          left: dims.window.width / 2 - 50,
          zIndex: 1,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ fontSize: 10 }}>Sell What You Dont Need</Text>
      </View>
      <View style={{ flex: 8 }}>
        <Image
          source={require("../assets/background.jpg")}
          style={{ width: "100%", height: "100%", zIndex: -1 }}
        />
      </View>
      <View style={{ backgroundColor: "salmon", flex: 1 }}></View>
      <View style={{ backgroundColor: "turquoise", flex: 1 }}></View>
    </View>
  );
}

export default WelcomeScreen;
