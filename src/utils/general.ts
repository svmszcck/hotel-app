import { Platform } from "react-native";

import { PropertyImg } from "global-types";
import { MAX_IMG } from "constants/general";

export const isAndroid = Platform.OS === "android";

export const trimImages = (images: PropertyImg[]): PropertyImg[] => {
  if (images.length > MAX_IMG) return images.slice(0, MAX_IMG);
  else return images;
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
