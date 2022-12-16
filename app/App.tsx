import "./i18n";
import React, {useRef} from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import RootNavigator from "./navigators/root-navigator";
import createStore from "./store";

export default function App() {
  const store = useRef(createStore());
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store.current.store}>
        <PersistGate loading={null} persistor={store.current.persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
