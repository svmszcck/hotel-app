import { StatusBar, StyleSheet } from "react-native";

import { screenWidth } from "utils/ui";
import Colors from "constants/colors";
import Spacing from "constants/spacing";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  close: {
    position: "absolute",
    width: Spacing.LARGE_XX,
    height: Spacing.LARGE_XX,
    backgroundColor: Colors.YELLOW_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
});

export default styles;
