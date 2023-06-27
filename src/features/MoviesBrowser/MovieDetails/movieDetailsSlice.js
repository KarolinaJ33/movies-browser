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
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    getMovieId: (state, action) => {
      console.log("movieId payload:", action.payload);
      state.movieId = action.payload;
    },
  },
});
export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
} = movieDetailsSlice.actions;
export const selectMovieState = (state) => state.movieDetails;
export const selectStatus = (state) => selectMovieState(state).status;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectMovie = (state) => selectMovieState(state).movie;

export default movieDetailsSlice.reducer;