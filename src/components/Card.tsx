import React, { FC, ReactNode } from "react";
import { Text, View, StyleSheet, ViewStyle } from "react-native";

import Colors from "constants/colors";
import Spacing from "constants/spacing";

type CardProps = {
  text: string;
  style?: ViewStyle;
};

const Card: FC<CardProps> = ({ text, style }) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    padding: Spacing.MEDIUM,
    backgroundColor: Colors.GREEN,
  },
});

export default Card;
