import React, { FC, ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Callout, Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useContext } from "use-context-selector";
import Icon from "@expo/vector-icons/FontAwesome";

import { getRandomInt } from "utils/general";
import { screenWidth, screenHeight } from "utils/ui";
import GlobalContext from "contexts/GlobalContext";
import Colors from "constants/colors";
import Spacing from "constants/spacing";
import {
  DEFAULT_LOCATION,
  MARKER_PRESS,
  MIN_PRICE,
  MAX_PRICE,
} from "constants/general";
import { Property } from "global-types";

type MapProps = {};

const renderMarker: FC = (marker: Property, isActive: boolean) => {
  return (
    <>
      <View style={styles.markerWrapper}>
        <View
          style={StyleSheet.flatten([
            styles.marker,
            {
              backgroundColor: isActive ? Colors.ORANGE : Colors.GRAY_DARK,
            },
          ])}
        >
          <Text style={styles.markerText}>
            {marker.lowest_price_per_night | getRandomInt(MIN_PRICE, MAX_PRICE)}
            €
          </Text>
        </View>
        <Icon
          name="caret-down"
          size={20}
          color={isActive ? Colors.ORANGE : Colors.GRAY_DARK}
          style={styles.arrowIcon}
        />
      </View>

      <Callout tooltip>
        <View></View>
      </Callout>
    </>
  );
};

const Map: FC<MapProps> = () => {
  const state = useContext(GlobalContext);
  const { properties, activeProperty, setActiveProperty } = state;

  const handleClick = (id: number) => {
    if (activeProperty && id === activeProperty) setActiveProperty(null);
    else setActiveProperty(id);
  };

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        zoomEnabled
        initialRegion={DEFAULT_LOCATION}
        onPress={(e) =>
          e.nativeEvent.action !== MARKER_PRESS ? setActiveProperty(null) : null
        }
      >
        {properties.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.location.lat,
                longitude: marker.location.lng,
              }}
              onPress={() => handleClick(marker.id)}
              zIndex={marker.id === activeProperty ? 1000 : 0}
            >
              {renderMarker(marker, marker.id === activeProperty)}
            </Marker>
          );
        })}
      </MapView>
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
  markerWrapper: {
    flex: 1,
    alignItems: "center",
  },
  marker: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Spacing.SMALL,
  },
  markerText: {
    color: "white",
  },
  arrowIcon: {
    marginTop: -8,
  },
});

export default Map;
