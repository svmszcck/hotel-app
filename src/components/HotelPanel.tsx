import React, { FC } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import placeholder from "assets/images/placeholder.png";
import Colors from "constants/colors";
import Spacing from "constants/spacing";

type HotelPanelProps = {
  image?: string;
};

const HotelPanel: FC<HotelPanelProps> = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : placeholder}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>flower's berlin</Text>
        <View style={styles.location}>
          <Icon
            name="location-outline"
            size={20}
            color={Colors.ORANGE}
            style={styles.locationIcon}
          />
          <Text>6.3 km from city center</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: "100%",
  },
  info: {
    padding: Spacing.MEDIUM,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: Spacing.SMALL,
  },
  title: {
    fontSize: Spacing.LARGE,
    marginBottom: Spacing.SMALL,
  },
});

export default HotelPanel;
