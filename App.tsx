import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Router from "./src/router";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
};

export default App;
