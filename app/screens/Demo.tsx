import React, {FC, useState} from "react";
import {View} from "react-native";

import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";
import {Card} from "../elements/Card";
import {Screen} from "../elements/Screen";
import {Text} from "../elements/Text";
import {Toggle} from "../elements/Toggle";
import {spacing} from "../theme";

const Demo: FC = () => {
  const [toggleVal, setToggle] = useState(false);
  const usingHermes =
    typeof HermesInternal === "object" && HermesInternal !== null;

  return (
    <Screen backgroundColor="#fff">
      <View
        style={{
          padding: spacing.medium,
        }}>
        <Counter />

        <Card
          ContentComponent={
            <Toggle
              label="test"
              variant="switch"
              value={toggleVal}
              onValueChange={a => setToggle(a)}
            />
          }
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

        <Counter2 />

        <View>
          <Text text="UseHermes" />
          <Text text={usingHermes + ""} />
        </View>
      </View>
    </Screen>
  );
};

export default Demo;
