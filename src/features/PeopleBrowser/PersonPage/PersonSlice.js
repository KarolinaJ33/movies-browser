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
  reducers: {
    fetchPersonDetails: (state) => {
      state.status = "loading";
    },
    fetchPersonDetailsSuccess: (state, action) => {
      state.status = "success";
      state.details = action.payload.details;
      state.credits = action.payload.credits;
      state.crew = action.payload.crew;
      state.cast = action.payload.cast;
    },
    fetchPersonDetailsError: (state) => {
      state.status = "error";
    },
    getPersonId: (state, action) => {
      console.log("personId payload:", action.payload)
      state.personId = action.payload;
    },
  },
});

export const {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  getPersonId,
} = personDetailsSlice.actions;

export const selectPersonState = (state) => state.personDetails;

export const selectStatus = (state) => selectPersonState(state).status;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectCredits = (state) => selectPersonState(state).credits;
export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectCrew = (state) => selectPersonState(state).crew;
export const selectCast = (state) => selectPersonState(state).cast;

export default personDetailsSlice.reducer;
