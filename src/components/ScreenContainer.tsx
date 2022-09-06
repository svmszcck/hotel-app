import React, { FC, ReactNode } from "react";

import { SafeAreaView } from "components";
import globalStyles from "global-styles";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default ScreenContainer;
