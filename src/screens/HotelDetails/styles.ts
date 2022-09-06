import { StyleSheet } from "react-native";

import Spacing from "constants/spacing";
import Colors from "constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.YELLOW_LIGHT,
    flex: 1,
  },
  info: {
    padding: Spacing.LARGE,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Spacing.MEDIUM,
  },
  locationIcon: {
    marginRight: Spacing.SMALL,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    color: Colors.ORANGE,
    fontWeight: "600",
  },
  separator: {
    marginVertical: Spacing.LARGE,
  },
  score: {
    top: 0,
    right: 0,
  },
  roomTypes: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: Spacing.LARGE,
  },
  rooms: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  room: {
    marginRight: Spacing.MEDIUM,
    marginBottom: Spacing.MEDIUM,
  },
  bottomSection: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    height: Spacing.LARGE_XXX,
    backgroundColor: Colors.GREEN,
    padding: Spacing.LARGE,
  },
});

export default styles;
