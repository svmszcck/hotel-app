import React, { FC } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "constants/colors";

type ScoreProps = {
  outlined?: boolean;
  style?: ViewStyle;
};

const Score: FC<ScoreProps> = ({ outlined, style }) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.score,
        style,
        outlined ? { borderWidth: 1, borderColor: Colors.GRAY } : null,
      ])}
    >
      <Text>4.5</Text>
      <FontAwesome
        name="star"
        size={15}
        color={Colors.ORANGE}
        style={styles.scoreIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: Colors.YELLOW_LIGHT,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  scoreIcon: {
    marginLeft: 5,
  },
});

export default Score;
