import React, { FC, ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Callout, Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useContext } from "use-context-selector";
import Icon from "@expo/vector-icons/FontAwesome";

import { screenWidth, screenHeight } from "utils/ui";
import GlobalContext from "contexts/GlobalContext";
import Colors from "constants/colors";
import { DEFAULT_LOCATION, MARKER_PRESS } from "constants/general";

type MarkerProps = {
  marker: any;
};

type MapProps = {};

const renderMarker: FC<MarkerProps> = ({ marker }) => {
  return (
    <>
      <View style={styles.markerWrapper}>
        <View style={styles.marker}>
          <Text style={styles.markerText}>49€</Text>
        </View>
        <Icon
          name="caret-down"
          size={20}
          color={Colors.GRAY_DARK}
          style={{
            marginTop: -8,
          }}
        />
      </View>

      <Callout tooltip />
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
        {properties.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.location.lat,
              longitude: marker.location.lng,
            }}
            title={marker.name}
            onPress={() => handleClick(marker.id)}
          >
            {renderMarker(marker)}
          </Marker>
        ))}
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
    backgroundColor: Colors.GRAY_DARK,
    justifyContent: "center",
    alignItems: "center",
  },
  markerText: {
    color: "white",
  },
});

export default Map;
