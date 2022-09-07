import React, { useMemo, FC } from "react";
import { Image, View, StyleSheet } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { SharedElement } from "react-navigation-shared-element";

import { screenWidth } from "utils/ui";
import { trimImages } from "utils/general";
import { PropertyImg } from "global-types";

import placeholder from "assets/images/placeholder.png";

const width = screenWidth();

type CarouselProps = {
  images: PropertyImg[];
};

const Carousel: FC<CarouselProps> = ({ images }) => {
  const trimmedImages = useMemo(() => trimImages(images), [images]);

  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        data={trimmedImages}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          return (
            <View style={styles.child} testID="carousel-item">
              <SharedElement id={`hotel-photo-${item.position}`}>
                <Image
                  source={item.url ? { uri: item.url } : placeholder}
                  style={styles.cover}
                  testID="carousel-item-image"
                />
              </SharedElement>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  child: {
    width,
    justifyContent: "center",
  },
  cover: {
    width: "100%",
    height: 250,
    minHeight: 300,
  },
});

export default Carousel;
