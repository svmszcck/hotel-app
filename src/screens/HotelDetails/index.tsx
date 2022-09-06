import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import Icon from "@expo/vector-icons/Ionicons";

import {
  Button,
  Card,
  Carousel,
  Close,
  ScreenContainer,
  Separator,
  Score,
} from "components";
import Colors from "constants/colors";

import styles from "./styles";

const HotelDetails = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Carousel />

        <ScrollView contentContainerStyle={styles.info}>
          <View style={styles.topSection}>
            <Text style={styles.title}>flower's berlin</Text>
            <Score outlined style={styles.score} />
          </View>
          <View style={styles.location}>
            <Icon
              name="location-outline"
              size={20}
              color={Colors.ORANGE}
              style={styles.locationIcon}
            />
            <Text numberOfLines={2}>6.3 km from city center</Text>
          </View>
          <Text>
            Nature lovers will get their money's worth in Baden-Baden! The spa
            town in the Black Forest with the proximity to France invites you to
            hike and discover its surroundings. Our limehome Baden-Baden
            Bäderstr. is not only located in the heart of the city, from there
            you can explore
          </Text>
          <Separator style={styles.separator} />
          <Text style={styles.roomTypes}>
            Room types available in this location
          </Text>
          <View style={styles.rooms}>
            <Card text="3x1 Bedroom suites" style={styles.room} />
            <Card text="4x2 Bedroom suites" style={styles.room} />
            <Card text="2x3 Bedroom suites" style={styles.room} />
          </View>
        </ScrollView>
        <View style={styles.bottomSection}>
          <Text>
            From <Text style={styles.price}>55.00€/Night</Text>
          </Text>
          <Button title="EXPLORE" onPress={() => {}} />
        </View>
        <Close onPress={() => navigation.goBack()} />
      </View>
    </ScreenContainer>
  );
};

export default HotelDetails;
