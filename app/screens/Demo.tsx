import React, {FC} from "react";
import {View} from "react-native";

import Counter from "../components/Counter";
import {Card} from "../elements/Card";
import {Screen} from "../elements/Screen";
import {spacing} from "../theme";

const Demo: FC = () => {
  return (
    <Screen backgroundColor="#fff">
      <View
        style={{
          padding: spacing.medium,
        }}>
        <Counter />

        <Card
          content="asdasdas"
          style={{
            marginTop: 10,
            shadowColor: "rgba(0,0,0)",
            shadowOpacity: 0.3,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowRadius: 10,
          }}
        />
      </View>
    </Screen>
  );
};

export default Demo;
