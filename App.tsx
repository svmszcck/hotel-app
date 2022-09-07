import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import GlobalContextProvider from "./src/contexts/GlobalContext/provider";

import Router from "./src/router";

const App = () => {
  return (
    <GlobalContextProvider>
      <StatusBar style="auto" />
      <Router />
    </GlobalContextProvider>
  );
};

export default App;
