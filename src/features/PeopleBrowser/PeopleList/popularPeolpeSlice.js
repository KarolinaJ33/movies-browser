import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    people: [],
    status: "loading",
    query: "",
    page: 1,
    totalPages: 0,
    totalResults: 0,
  },
});

export default popularPeopleSlice;