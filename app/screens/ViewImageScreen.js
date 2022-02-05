import React from "react";
import { View, Image, SafeAreaView, StatusBar } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "black" }}>
        <View
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            paddingTop: 25,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ backgroundColor: "salmon", width: 40, height: 40 }} />
          <View
            style={{ backgroundColor: "turquoise", width: 40, height: 40 }}
          />
        </View>
      </View>
      <View style={{ flex: 8, backgroundColor: "white" }}>
        <Image
          source={require("../assets/chair.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 2, backgroundColor: "black" }}></View>
    </View>
  );
}

export default ViewImageScreen;
