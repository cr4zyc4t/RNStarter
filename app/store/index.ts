import {configureStore} from "@reduxjs/toolkit";
import createDebugger from "redux-flipper";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import rootReducer, {RootState} from "./reducers";

const persistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export default function createStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware(getMiddlewares) {
      const defaultMiddlewares = getMiddlewares({
        serializableCheck: {
          ignoredActions: persistActions,
        },
      });
      if (__DEV__) {
        defaultMiddlewares.push(
          createDebugger({
            actionsBlacklist: persistActions,
          }),
        );
      }
      return defaultMiddlewares;
    },
  });
  const persistor = persistStore(store);
  return {store, persistor};
}
