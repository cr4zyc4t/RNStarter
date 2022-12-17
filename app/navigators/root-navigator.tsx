import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

import {Text} from "../elements/Text";
import Demo from "../screens/Demo";
import Welcome from "../screens/Welcome";
import {typography} from "../theme";

export type RootStackParamList = {
  Welcome: undefined;
  Demo: undefined;
};

export type DemoScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Demo"
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
        name="Demo"
        component={Demo}
        options={({navigation}) => ({
          presentation: "modal",
          headerLeft: () => (
            <Text onPress={() => navigation.goBack()}>Back</Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
