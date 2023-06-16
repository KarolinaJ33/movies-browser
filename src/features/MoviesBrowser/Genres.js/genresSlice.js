import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
      genres: [],
      status: "initial",
    },
});  

export default genresSlice;