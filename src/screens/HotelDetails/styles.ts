import { StyleSheet } from "react-native";

import Spacing from "constants/spacing";
import Colors from "constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.YELLOW_LIGHT,
  },
  cover: {
    width: "100%",
    height: 300,
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
  card: {
    marginRight: Spacing.MEDIUM,
    marginBottom: Spacing.MEDIUM,
  },
});

export default styles;
