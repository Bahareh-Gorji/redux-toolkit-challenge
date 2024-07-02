import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) state.push(action.payload);
    },
    clearAll: (state, action) => {
      return [];
    },
    clearFilter: (state, action) => {
      return state.filter((filter) => filter !== action.payload);
    },
  },
});

export const { addFilter, clearAll, clearFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
