import { configureStore } from "@reduxjs/toolkit";
import sharedDataReducer from "./Slices/sharedDataSlice";

const store = configureStore({
  reducer: {
    sharedData: sharedDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
