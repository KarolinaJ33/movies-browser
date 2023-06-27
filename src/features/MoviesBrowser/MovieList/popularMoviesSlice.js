import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    currentPage: 1,
    movies: [],
    genres: [],
    status: "loading",
    totalPages: 0,
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchMoviesListSuccess: (state, {payload: movies}) => {
      state.status="loading";
      state.movies = movies.data.results;
      state.genres = movies.genres;
      state.status = "success";
      state.totalPages = movies.data.total_pages > 500 ? 500 : movies.data.total_pages;
      state.totalResults = movies.data.total_results;
    },
    
    fetchMoviesListError: (state) => {
      state.status = "error";
    },
    goToPage: (state, { payload: movies }) => {
      state.status = "loading";
      state.page = movies.page;
    },
    setQuery: (state, { payload }) => {
      state.status = "loading";
      state.query = payload.query;
    },
  },
});

export const {
  fetchMoviesListSuccess,
  fetchMoviesListError,
  goToPage,
  setQuery,
} = popularMoviesSlice.actions

export const selectStatePopularMovies = (state) => state.popularMovies;
export const selectPopularMovies = (state) =>
  selectStatePopularMovies(state).movies;
export const selectStatus = (state) => selectStatePopularMovies(state).status;
export const selectPage = (state) => selectStatePopularMovies(state).page;
export const selectTotalPages = (state) =>
  selectStatePopularMovies(state).totalPages;
export const selectQuery = (state) => selectStatePopularMovies(state).query;
export const selectTotalResults = (state) =>
  selectStatePopularMovies(state).totalResults;


export default popularMoviesSlice.reducer;