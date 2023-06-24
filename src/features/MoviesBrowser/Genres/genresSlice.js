import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
      genres: [],
      status: "initial",
    },
    reducers: {
      fetchGenres: () => ({
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

export default genresSlice.reducer;