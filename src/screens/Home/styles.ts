import { StyleSheet } from "react-native";

import { screenWidth } from "utils/ui";
import Colors from "constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.YELLOW_LIGHT,
    flexDirection: "row",
    height: 100,
    left: 20,
    right: 20,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
});

export default styles;
