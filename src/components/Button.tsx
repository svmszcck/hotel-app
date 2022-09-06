import React, { useMemo } from "react";
import {
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Colors from "constants/colors";
import Spacing from "constants/spacing";
import Icon from "@expo/vector-icons/Ionicons";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
};

const CustomButton = ({ onPress, title, variant = "primary" }: ButtonProps) => {
  const color = useMemo(() => {
    switch (variant) {
      case "primary":
        return Colors.GREEN_DARK;
      case "secondary":
        return Colors.GREEN;
      case "danger":
        return Colors.RED;
      default:
        return Colors.GREEN_DARK;
    }
  }, [variant]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([styles.container, { backgroundColor: color }])}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
      <Icon
        name="arrow-forward"
        size={20}
        color={Colors.WHITE}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.SMALL,
    backgroundColor: Colors.GREEN_DARK,
    height: Spacing.LARGE_XX,
    borderRadius: 3,
    marginLeft: "auto",
    paddingHorizontal: 20,
  },
  text: {
    color: Colors.WHITE,
  },
  icon: {
    marginLeft: Spacing.SMALL,
  },
});

export default CustomButton;
