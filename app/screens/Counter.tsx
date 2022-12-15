import React, {FC, useCallback, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {CounterScreenProps} from '../navigators/root-navigator';

const Counter: FC<CounterScreenProps> = ({
  route: {
    params: {initCounter},
  },
}) => {
  const [counter, setCounter] = useState(initCounter);

  const increase = useCallback(() => setCounter(c => c + 1), []);
  const decrease = useCallback(() => setCounter(c => c - 1), []);

  return (
    <SafeAreaView>
      <Button onPress={decrease} title="-" />
      <Text>{counter}</Text>
      <Button onPress={increase} title="+" />
    </SafeAreaView>
  );
};
export default Counter;
