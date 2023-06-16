import axios from "axios";
import { API_KEY, API_URL } from "../../../core/App/apiCodes";

export const searchMovie = async ({ query, page }) => {
    const response = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.data;
  };

  export const searchPeople = async ({ page, query }) => {
    const response = await axios.get(
      `${API_URL}/search/person?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.data;
  };