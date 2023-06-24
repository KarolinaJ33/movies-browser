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

  reducers: {
    fetchPopularPeople: (state) => {
      state.status = "loading";
    },
    fetchPopularPeopleSuccess: (state, {payload}) => {
      state.status="loading";
      state.status = "success";
      state.totalPages = payload.data.total_pages > 500 ? 500 : payload.data.total_pages;
      state.totalResults = payload.data.total_results;
      state.people = payload.data.results;
  },
    fetchPopularPeopleError:(state) => {
      state.status = "error";
    },
    goToPage: (state, { payload }) => {
      state.status = "loading";
      state.page = payload.page;
    },
    setQuery: (state, { payload }) => {
      state.status = "loading";
      state.query = payload.query;

    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  goToPage,
  setQuery,
} = popularPeopleSlice.actions;

export const selectStatePopularPeople = (state) => state.popularPeople;
export const selectPopularPeopleStatus = (state) =>
  selectStatePopularPeople(state).status;
export const selectPopularPeople = (state) =>
  selectStatePopularPeople(state).people;
export const selectPeoplePage = (state) => selectStatePopularPeople(state).page;
export const selectTotalPages = (state) => selectStatePopularPeople(state).totalPages;
export const selectTotalResults = (state) => selectStatePopularPeople(state).totalResults;
export const selectQuery = (state) => selectStatePopularPeople(state).query;

export default popularPeopleSlice.reducer;