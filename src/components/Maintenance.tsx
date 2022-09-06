import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import vacation from "assets/images/vacation.png";

const Maintenance = () => {
  return (
    <View style={styles.container}>
      <Image source={vacation} style={styles.vector} resizeMode="cover" />
      <Text style={styles.text}>Not Implemented Yet :(</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vector: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 200,
  },
  text: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 20,
  },
});

export default Maintenance;
