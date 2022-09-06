import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

import placeholder from "assets/images/placeholder.png";
import { Close, ScreenContainer } from "components";

import styles from "./styles";

const HotelDetails = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <View>
        <SharedElement id={"hotel-photo"}>
          <Image source={placeholder} style={styles.cover} />
        </SharedElement>
        <Close onPress={() => navigation.goBack()} />
      </View>
    </ScreenContainer>
  );
};

export default HotelDetails;
