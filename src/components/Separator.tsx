import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Colors from "constants/colors";
import Spacing from "constants/spacing";

type SeparatorProps = {
  style: ViewStyle;
};

const Separator: FC<SeparatorProps> = ({ style }) => {
  return <View style={StyleSheet.flatten([styles.container, style])} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
    marginVertical: Spacing.MEDIUM,
  },
});

export default Separator;
