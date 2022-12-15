import {NavigationContainer} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

import Counter from "../screens/Counter";
import Welcome from "../screens/Welcome";

export type RootStackParamList = {
  Welcome: undefined;
  Counter: undefined;
};

export type CounterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Counter"
>;
export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Welcome"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
