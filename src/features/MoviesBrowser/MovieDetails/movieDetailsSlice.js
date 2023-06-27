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
});

export default movieDetailsSlice.reducer;