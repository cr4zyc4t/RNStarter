import {combineReducers} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {persistReducer} from "redux-persist";

import reduxStorage from "../storage";

import counter from "./counter";
import counter2 from "./counter2";

const rootReducer = combineReducers({
  counter: counter,
  counter2: counter2,
});

const presistedReducer = persistReducer(
  {
    key: "root",
    storage: reduxStorage,
  },
  rootReducer,
);

export default presistedReducer as any as typeof rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
