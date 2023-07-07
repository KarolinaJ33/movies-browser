import axios from "axios";
import { API_KEY, ApiPopularPeople } from "../../../core/App/apiCodes";

export const getPopularPeople = async ({ currentPage}) => {
    const response = await axios.get(
      `${ApiPopularPeople}?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
    return await response.data;
  };