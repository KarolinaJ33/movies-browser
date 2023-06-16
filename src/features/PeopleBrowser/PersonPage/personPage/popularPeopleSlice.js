import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    status: "loading",
    personId: 0,
    credits: [],
    details: {},
    cast: [],
    crew: [],
  },
});

export default personDetailsSlice;
