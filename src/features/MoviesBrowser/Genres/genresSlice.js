import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    status: "initial",
  },

  reducers: {
    fetchGenresLoading: () => ({
      status: "loading",
      genres: null,
    }),

    fetchGenresSuccess: (_, { payload: genres }) => ({
      status: "success",
      genres,
    }),

    fetchGenresError: () => ({
      status: "error",
      genres: null,
    }),
  },
});

export const { fetchGenresLoading, fetchGenresSuccess, fetchGenresError } =
  genresSlice.actions;

export const selectGenres = (state) => state.genres.genres;
export const selectGenresStatus = (state) => selectGenres(state).status;

export default genresSlice.reducer;