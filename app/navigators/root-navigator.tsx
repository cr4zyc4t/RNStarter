import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Counter from '../screens/Counter';

export type RootStackParamList = {
  Welcome: undefined;
  Counter: {initCounter: number};
};

export type CounterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Counter'
>;
export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Welcome'
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
