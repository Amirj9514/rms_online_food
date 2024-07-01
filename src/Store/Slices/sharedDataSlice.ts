import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SharedDataState {
  [key: string]: any;
}

const initialState: SharedDataState = JSON.parse(
  localStorage.getItem("sharedData@RMS") || "{}"
);

const sharedDataSlice = createSlice({
  name: "sharedData",
  initialState,
  reducers: {

    setData: (state, action: PayloadAction<SharedDataState>) => {
      return { ...state, ...action.payload };
    },
    insertData: (state, action: PayloadAction<{ key: string; val: any }>) => {
      state[action.payload.key] = action.payload.val;
      localStorage.setItem("sharedData@RMS", JSON.stringify(state));
    },
  },
});

export const { setData, insertData } = sharedDataSlice.actions;

export default sharedDataSlice.reducer;
