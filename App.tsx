import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

import { SHOW_LOGS } from "./src/constants/config";
import GlobalContextProvider from "./src/contexts/GlobalContext/provider";
import Router from "./src/router";

LogBox.ignoreAllLogs(!SHOW_LOGS);

const App = () => {
  return (
    <GlobalContextProvider>
      <StatusBar style="auto" />
      <Router />
    </GlobalContextProvider>
  );
};

export default App;
