import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { SharedElement } from "react-navigation-shared-element";

import { screenWidth } from "utils/ui";
import placeholder from "assets/images/placeholder.png";

const colors = ["tomato", "thistle", "skyblue", "teal"];

const width = screenWidth();

const Carousel = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        data={colors}
        renderItem={({ item }) => (
          <View style={[styles.child]}>
            <SharedElement id={`hotel-photo-${item}`} style={styles.cover}>
              <Image source={placeholder} style={styles.cover} />
            </SharedElement>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },
  cover: {
    width: "100%",
    height: 300,
    minHeight: 300,
  },
});

export default Carousel;
