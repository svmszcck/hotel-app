import React, { FC } from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { SharedElement } from "react-navigation-shared-element";

import Colors from "constants/colors";
import Spacing from "constants/spacing";
import { Separator, Score } from "components";
import placeholder from "assets/images/placeholder.png";

type HotelPanelProps = {
  image?: string;
};

const HotelPanel: FC<HotelPanelProps> = ({ image }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Details" as never)}
    >
      <SharedElement id="hotel-photo-tomato">
        <Image
          source={image ? { uri: image } : placeholder}
          style={styles.image}
          resizeMode="cover"
        />
      </SharedElement>
      <Score style={{ left: 30, right: undefined }} />
      <View style={styles.info}>
        <Text style={styles.title}>flower's berlin</Text>
        <View style={styles.location}>
          <Ionicon
            name="location-outline"
            size={20}
            color={Colors.ORANGE}
            style={styles.locationIcon}
          />
          <Text numberOfLines={2}>6.3 km from city center</Text>
        </View>
        <Separator style={styles.separator} />
        <Text>
          From <Text style={styles.price}>55.00€/Night</Text>
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  image: {
    width: 100,
    height: "100%",
  },
  info: {
    flex: 1,
    padding: Spacing.MEDIUM,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Spacing.MEDIUM,
  },
  locationIcon: {
    marginRight: Spacing.SMALL,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    color: Colors.ORANGE,
    fontWeight: "600",
  },
  separator: {
    marginBottom: Spacing.MEDIUM,
  },
});

export default HotelPanel;
