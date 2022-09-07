import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HotelPanel, Map } from "components";
import { fetchProperties } from "services/property";

import styles from "./styles";

const Home = () => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetchProperties(32);
  }, []);

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
