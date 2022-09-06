import React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";

import { Home, Search, Saved, Profile, HotelDetails } from "screens";
import Routes from "constants/routes";
import Colors from "constants/colors";

const Stack = createSharedElementStackNavigator();
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

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen
        name={Routes.DETAILS}
        component={HotelDetails}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`hotel-photo`];
        }}
      />
    </Stack.Navigator>
  );
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
          name={Routes.HOME_STACK}
          component={HomeStack}
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
