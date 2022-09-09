import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";

import {
  Button,
  Card,
  Carousel,
  Close,
  ScreenContainer,
  Separator,
  Score,
} from "components";
import Colors from "constants/colors";
import { MIN_PRICE, MAX_PRICE, CAROUSEL_DELAY } from "constants/general";
import usePropertySelect from "hooks/usePropertySelect";
import { fetchProperty as fetchPropertyService } from "services/property";
import { getRandomInt } from "utils/general";
import { Property } from "global-types";

import styles from "./styles";

const HotelDetails = () => {
  const [property, setProperty] = useState<Property>(null);
  const carouselRef = useRef(null);
  const navigation = useNavigation();
  const activeProperty: Property = usePropertySelect();

  console.log(carouselRef);

  const fetchProperty = async (): Promise<void> => {
    const result = await fetchPropertyService(activeProperty.id);

    if (result) setProperty(result);
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Carousel images={activeProperty.images} ref={carouselRef} />
        <ScrollView contentContainerStyle={styles.info}>
          <View style={styles.topSection}>
            <Text style={styles.title}>{activeProperty.name}</Text>
            <Score outlined style={styles.score} />
          </View>
          {activeProperty.distance && (
            <View style={styles.location}>
              <Icon
                name="location-outline"
                size={20}
                color={Colors.ORANGE}
                style={styles.locationIcon}
              />

              <Text numberOfLines={2}>
                {activeProperty.distance.toFixed(1)} km from city center
              </Text>
            </View>
          )}
          {property?.description && <Text>{property.description}</Text>}

          <Separator style={styles.separator} />
          <Text style={styles.roomTypes}>
            Room types available in this location
          </Text>
          {property?.unit_groups.length ? (
            <View style={styles.rooms}>
              {property?.unit_groups.map((room) => (
                <Card text={room.name} style={styles.room} key={property.id} />
              ))}
            </View>
          ) : (
            <Text>No room available</Text>
          )}
        </ScrollView>
        <View style={styles.bottomSection}>
          <Text>
            From{" "}
            <Text style={styles.price}>
              {getRandomInt(MIN_PRICE, MAX_PRICE)}€/Night
            </Text>
          </Text>
          <Button title="EXPLORE" onPress={() => {}} />
        </View>
        <Close
          onPress={() => {
            carouselRef.current.goToFirstIndex();
            setTimeout(() => navigation.goBack(), CAROUSEL_DELAY);
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default HotelDetails;
