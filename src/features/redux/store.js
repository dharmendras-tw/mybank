import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./account/balanceReducer";

const store = configureStore({ reducer: balanceReducer });

export default store;