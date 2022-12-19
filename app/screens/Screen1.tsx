import React, {FC} from "react";
import {View} from "react-native";

import {Text} from "../elements/Text";
import {Screen1ScreenProps} from "../navigators/drawer-navigation";

const Screen1: FC<Screen1ScreenProps> = ({
  route: {
    params: {count},
  },
}) => {
  return (
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <Text>Screen {count}</Text>
    </View>
  );
};

export default Screen1;
