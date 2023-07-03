import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "loading",
    movieId: 0,
    credits: [],
    details: {},
    cast: [],
    crew: [],
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.status = "success";
      state.details = action.payload.details;
      state.credits = action.payload.credits;
      state.crew = action.payload.crew;
      state.cast = action.payload.cast;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    getMovieId: (state, action) => {
      console.log("personId payload:", action.payload)
      state.personId = action.payload;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.personDetails;

export const selectStatus = (state) => selectMovieState(state).status;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectPersonId = (state) => selectMovieState(state).personId;
export const selectCrew = (state) => selectMovieState(state).crew;
export const selectCast = (state) => selectMovieState(state).cast;
export const selectMovieId = (state) => selectMovieState(state).movieId;

export default movieDetailsSlice.reducer;