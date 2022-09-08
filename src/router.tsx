import React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";

import { Home, Search, Saved, Profile, HotelDetails } from "screens";
import Routes from "constants/routes";
import Colors from "constants/colors";
import { isAndroid } from "utils/general";

const Stack = createSharedElementStackNavigator();
// A separate stack is required to prevent breaking the shared element transition
// Please check the issue and solution from here: https://github.com/IjzerenHein/react-navigation-shared-element/issues/77#issuecomment-688496843
const Stack2 = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();

const tavNavigatorOptions: any = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: Colors.GREEN_DARK,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
  },
  tabBarInactiveTintColor: Colors.GRAY,
  tabBarActiveTintColor: Colors.WHITE,
};

if (isAndroid) tavNavigatorOptions.tabBarStyle.height = 50;

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

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name="TabNav" component={Tabs} />
      <Stack.Screen
        name={Routes.DETAILS}
        component={HotelDetails}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return ["hotel-photo-0"];
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      <Stack2.Screen name={Routes.HOME} component={Home} />
    </Stack2.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME_STACK}
      screenOptions={tavNavigatorOptions}
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
  );
};

const routes = () => {
  if (isAndroid) NavigationBar.setBackgroundColorAsync(Colors.GREEN_DARK);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default routes;
