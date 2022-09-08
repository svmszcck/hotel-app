import React, { FC } from "react";
import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { SharedElement } from "react-navigation-shared-element";

import Colors from "constants/colors";
import Spacing from "constants/spacing";
import Routes from "constants/routes";
import { Separator, Score } from "components";
import usePropertySelect from "hooks/usePropertySelect";

import placeholder from "assets/images/placeholder.png";

const HotelPanel: FC = () => {
  const navigation = useNavigation();
  const activeProperty = usePropertySelect();
  const coverImage = activeProperty?.images[0]?.url;

  return (
    <Pressable
      style={styles.container}
      testID="hotel-panel-container"
      onPress={() => navigation.navigate(Routes.DETAILS as never)}
    >
      <SharedElement id="hotel-photo-0">
        <View style={styles.imageWrapper}>
          <Image
            source={coverImage ? { uri: coverImage } : placeholder}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </SharedElement>
      <Score style={styles.score} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {activeProperty?.name}
        </Text>
        <View style={styles.location}>
          <Ionicon
            name="location-outline"
            size={20}
            color={Colors.ORANGE}
            style={styles.locationIcon}
          />
          <Text numberOfLines={2}>
            {activeProperty?.distance.toFixed(1)} km from city center
          </Text>
        </View>
        <Separator style={styles.separator} />
        {activeProperty?.lowest_price_per_night ? (
          <Text>
            From{" "}
            <Text style={styles.price}>
              {activeProperty?.lowest_price_per_night}€/Night
            </Text>
          </Text>
        ) : (
          <Text>No Price Info</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  imageWrapper: {
    backgroundColor: Colors.BLACK,
  },
  image: {
    width: 100,
    height: "100%",
    opacity: 0.6,
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
    fontSize: 18,
    fontWeight: "500",
  },
  price: {
    color: Colors.ORANGE,
    fontWeight: "600",
  },
  separator: {
    marginBottom: Spacing.MEDIUM,
  },
  score: {
    left: 30,
    right: undefined,
  },
});

export default HotelPanel;
