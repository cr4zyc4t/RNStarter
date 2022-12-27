import React, {FC, useCallback} from "react";
import {View, ViewStyle} from "react-native";
import {useDispatch} from "react-redux";

import {Button} from "../elements/Button";
import {Text} from "../elements/Text";
import {useAppSelector} from "../store/reducers";
import {increase2 as increaseCounter} from "../store/reducers/counter2";

const containerStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const buttonStyle: ViewStyle = {
  width: 100,
};

const Counter2: FC = () => {
  const counter = useAppSelector(state => state.counter2.value);
  const dispatch = useDispatch();

  const increase = useCallback(() => dispatch(increaseCounter(1)), [dispatch]);
  const decrease = useCallback(() => dispatch(increaseCounter(-1)), [dispatch]);

  return (
    <View style={containerStyle}>
      <Button onPress={decrease} text="-" style={buttonStyle} />
      <Text>{counter}</Text>
      <Button onPress={increase} text="+" style={buttonStyle} />
    </View>
  );
};
export default Counter2;
