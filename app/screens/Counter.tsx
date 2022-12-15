import React, {FC, useCallback} from "react";
import {Button, SafeAreaView, Text} from "react-native";
import {useDispatch} from "react-redux";

import {CounterScreenProps} from "../navigators/root-navigator";
import {useAppSelector} from "../store/reducers";
import {increase as increaseCounter} from "../store/reducers/counter";

const Counter: FC<CounterScreenProps> = () => {
  const counter = useAppSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  const increase = useCallback(() => dispatch(increaseCounter(1)), [dispatch]);
  const decrease = useCallback(() => dispatch(increaseCounter(-1)), [dispatch]);

  return (
    <SafeAreaView>
      <Button onPress={decrease} title="-" />
      <Text>{counter}</Text>
      <Button onPress={increase} title="+" />
    </SafeAreaView>
  );
};
export default Counter;
