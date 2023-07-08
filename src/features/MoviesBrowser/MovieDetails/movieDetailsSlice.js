import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "initial",
    movieId: 0,
    credits: [],
    details: null,
    cast: [],
    crew: [],
  },
  reducers: {
    fetchMovieDetailsLoading: (state, action) => {
      state.details = null;
      state.status = "loading";
      state.error = null;
      state.movieId = action.payload.movieId;
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.details = action.payload;
      state.status = "success";
      state.error = null;
      state.movieId = action.payload.movieId;
    },
    fetchError: (state) => {
      state.status = "error";
    },
    setCast: (state, action) => {
      state.cast = action.payload;
    },
    setCrew: (state, action) => {
      state.crew = action.payload;
    },
  }
});

export const {
  fetchMovieDetailsLoading,
  fetchMovieDetailsSuccess,
  fetchError,
  setCast,
  setCrew,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;

export const selectStatus = (state) => selectMovieState(state).status;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCast = (state) => state.movieDetails.cast;
export const selectCrew = (state) => state.movieDetails.crew;

export default movieDetailsSlice.reducer;