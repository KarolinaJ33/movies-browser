import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    page: 1,
    totalPages: 0,
    movies: [],
    genres: [],
    status: "loading",
    query: "",
    totalResults: 0,
  },
});

export default popularMoviesSlice;