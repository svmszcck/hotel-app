import React, { FC, useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";

import globalStyles from "global-styles";

type CloseProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const Close: FC<CloseProps> = ({ onPress }) => {
  const [close, showClose] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => showClose(true), 500);
  }, []);

  return close ? (
    <TouchableOpacity
      style={StyleSheet.flatten([globalStyles.close, { top: 15, left: 15 }])}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text>X</Text>
    </TouchableOpacity>
  ) : null;
};

export default Close;
