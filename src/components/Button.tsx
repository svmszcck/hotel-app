import React from "react";
import { Button, GestureResponderEvent } from "react-native";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
};

const CustomButton = ({ onPress, title, variant = "primary" }: ButtonProps) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default CustomButton;
