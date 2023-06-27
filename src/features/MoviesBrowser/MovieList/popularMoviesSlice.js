import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    currentPage: 1,
    movies: [],
    genres: [],
    status: "initial",
    totalPages: 0,
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.status = "success";
      state.movies = payload.results;
    },
    setCurrentPage: (state, action) => {
      state.status = "loading";
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  }
});

export const {
  fetchMoviesSuccess,
  fetchMoviesLoading,
  setCurrentPage,
  setTotalPages,
  fetchMoviesError,
} = popularMoviesSlice.actions

export const selectPopularMoviesState = (state) => state.popularMovies;
export const selectPopularMoviesStatus = (state) => selectPopularMoviesState(state).status;
export const selectCurrentPage = (state) => state.popularMovies.currentPage;
export const selectTotalPages = (state) => state.popularMovies.totalPages;

export default popularMoviesSlice.reducer;