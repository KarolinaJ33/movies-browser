import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    page: 1,
    movies: [],
    genres: [],
    status: "initial",
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.status = "success";
      state.movies = payload.results;
    },
  }
});

export const {
  fetchMoviesSuccess,
  fetchMoviesLoading,
} = popularMoviesSlice.actions

export const selectPopularMoviesState = (state) => state.popularMovies;

export const selectPopularMoviesStatus = (state) => selectPopularMoviesState(state).status;

export default popularMoviesSlice.reducer;