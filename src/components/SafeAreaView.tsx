import React, { FC, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafeAreaViewProps = {
  disableBottomSafeArea?: boolean;
  disableTopSafeArea?: boolean;
  disableSidesSafeArea?: boolean;
  children: ReactNode;
};

const SafeAreaView: FC<SafeAreaViewProps> = (props: SafeAreaViewProps) => {
  const {
    disableBottomSafeArea = false,
    disableTopSafeArea = false,
    disableSidesSafeArea = false,
    children,
  } = props;

  const insets = useSafeAreaInsets();

  const style: any = {};

  if (!disableBottomSafeArea) {
    style.marginBottom = insets.bottom;
  }

  if (!disableTopSafeArea) {
    style.marginTop = insets.top;
  }

  if (!disableSidesSafeArea) {
    style.marginRight = insets.right;
    style.marginLeft = insets.left;
  }

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaView;
