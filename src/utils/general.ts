import { Platform } from "react-native";

import { PropertyImg } from "global-types";
import { MAX_IMG } from "constants/general";

export const isAndroid = Platform.OS === "android";

export const trimImages = (images: PropertyImg[]) => {
  if (images.length > MAX_IMG) return images.slice(0, MAX_IMG);
  else return images;
};
