import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import React from "react";

import {Text} from "../elements/Text";
import Demo from "../screens/Demo";
import Screen1 from "../screens/Screen1";

export type DrawerParamList = {
  Demo: undefined;
  Screen1: {
    count: number;
  };
  Screen2: {
    count: number;
  };
};

export type DemoScreenProps = DrawerScreenProps<DrawerParamList, "Demo">;
export type Screen1ScreenProps = DrawerScreenProps<DrawerParamList, "Screen1">;

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Demo">
      <Drawer.Screen
        name="Demo"
        component={Demo}
        options={({navigation}) => ({
          presentation: "modal",
          headerLeft: () => (
            <Text onPress={() => navigation.goBack()}>Back</Text>
          ),
        })}
      />
      <Drawer.Screen
        name="Screen1"
        component={Screen1}
        initialParams={{count: 1}}
      />
      <Drawer.Screen
        name="Screen2"
        component={Screen1}
        initialParams={{count: 2}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
