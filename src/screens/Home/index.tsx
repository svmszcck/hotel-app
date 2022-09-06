import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HotelPanel, Map } from "components";

import styles from "./styles";

const Home = () => {
  const insets = useSafeAreaInsets();

  console.log(insets);

  return (
    <View>
      <Map />
      <View
        style={StyleSheet.flatten([
          styles.info,
          { bottom: insets.bottom + 70 },
        ])}
      >
        <HotelPanel />
      </View>
    </View>
  );
};

export default Home;
