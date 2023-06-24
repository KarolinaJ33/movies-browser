import axios from "axios";
import { API_KEY, API_URL } from "../../../core/App/apiCodes";

export const getPopularPeople = async ({ page }) => {
    const response = await axios.get(
      `${API_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.data;
  };