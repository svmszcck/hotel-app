import React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";

import { Home, Search, Saved, Profile } from "screens";
import Routes from "constants/routes";
import Colors from "constants/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const handleIcon = (screen: string, color: string) => {
  switch (screen) {
    case Routes.HOME:
      return <Icon name="map-marked-alt" size={20} color={color} />;
    case Routes.SEARCH:
      return <Icon name="search" size={20} color={color} />;
    case Routes.SAVED:
      return <Icon name="heart" size={20} color={color} />;
    case Routes.PROFILE:
      return <Icon name="user-circle" size={20} solid color={color} />;
  }
};

const routes = () => {
  NavigationBar.setBackgroundColorAsync(Colors.GREEN_DARK);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.GREEN_DARK,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            position: "absolute",
            // height: 50,
          },
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarActiveTintColor: Colors.WHITE,
        }}
      >
        <Tab.Screen
          name={Routes.SEARCH}
          component={Search}
          options={{
            tabBarIcon: ({ color }) => handleIcon(Routes.SEARCH, color),
          }}
        />
        <Tab.Screen
          name={Routes.HOME}
          component={Home}
          options={{
            tabBarIcon: ({ color }) => handleIcon(Routes.HOME, color),
          }}
        />
        <Tab.Screen
          name={Routes.SAVED}
          component={Saved}
          options={{
            tabBarIcon: ({ color }) => handleIcon(Routes.SAVED, color),
          }}
        />
        <Tab.Screen
          name={Routes.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => handleIcon(Routes.PROFILE, color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default routes;
