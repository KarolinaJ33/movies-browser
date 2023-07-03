import axios from "axios";
import { API_KEY, API_URL } from "../../../core/App/apiCodes";

export const getGenres = async () => {
  const response = await axios.get(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};