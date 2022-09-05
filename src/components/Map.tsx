import React, { FC, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { screenWidth, screenHeight } from "utils/ui";

type MapProps = {};

const Map: FC<MapProps> = () => {
  return (
    <View>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: screenWidth(),
    height: screenHeight(),
  },
});

export default Map;
