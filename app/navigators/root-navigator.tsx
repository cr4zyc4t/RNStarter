import {DrawerScreenProps} from "@react-navigation/drawer";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

import Welcome from "../screens/Welcome";
import {typography} from "../theme";

import DrawerNavigator, {DrawerParamList} from "./drawer-navigation";

export type RootStackParamList = {
  Welcome: undefined;
  Drawer: DrawerScreenProps<DrawerParamList>;
};

export type DemoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Drawer"
>;
export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Welcome"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: typography.primary.semiBold,
        },
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={() => ({
          // presentation: "modal",
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
