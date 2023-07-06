import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    currentPage: 1,
    movies: [],
    genres: [],
    status: "loading",
    query: "",
    totalPages: 0,
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.status = "success";
      state.movies = payload.results;
      state.genres = payload.genres;
      state.status = "success";
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
    setQuery: (state, { payload }) => {
      state.query = payload.query;
      state.status = "loading";
    },
    goToPage: (state, { payload: movies }) => {
      state.status = "loading";
      state.page = movies.page;
    },
  }
});

export const {
  fetchMoviesSuccess,
  fetchMoviesLoading,
  setCurrentPage,
  setTotalPages,
  fetchMoviesError,
  setQuery, 
  goToPage,
} = popularMoviesSlice.actions

export const selectPopularMoviesState = (state) => state.popularMovies;
export const selectPopularMoviesStatus = (state) => selectPopularMoviesState(state).status;
export const selectCurrentPage = (state) => state.popularMovies.currentPage;
export const selectTotalPages = (state) => state.popularMovies.totalPages;
export const selectQuery = (state) => selectPopularMoviesState(state).query;
export const selectPage = (state) => selectPopularMoviesState(state).page;

export default popularMoviesSlice.reducer;
