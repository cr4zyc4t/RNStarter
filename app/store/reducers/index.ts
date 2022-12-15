import {combineReducers} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {persistReducer} from "redux-persist";

import reduxStorage from "../storage";

import counter from "./counter";

const persistConfig = {
  key: "root",
  storage: reduxStorage,
};

const rootReducer = combineReducers({
  counter: persistReducer(persistConfig, counter),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
