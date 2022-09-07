import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "use-context-selector";

import { HotelPanel, Map } from "components";
import { fetchProperties as fetchPropertiesService } from "services/property";
import GlobalContext from "contexts/GlobalContext";

import styles from "./styles";

const Home = () => {
  const insets = useSafeAreaInsets();
  const state = useContext(GlobalContext);
  const { activeProperty, setProperties } = state;

  const fetchProperties = async () => {
    const result = await fetchPropertiesService(32);

    if (result) {
      setProperties(result);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <View>
      <Map />
      {activeProperty && (
        <View
          style={StyleSheet.flatten([
            styles.info,
            { bottom: insets.bottom + 70 },
          ])}
        >
          <HotelPanel />
        </View>
      )}
    </View>
  );
};

export default Home;
