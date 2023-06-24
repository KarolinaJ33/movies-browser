import axios from "axios";
import { API_KEY } from "../../../core/App/apiCodes";

export const getGenres = async () => {
  const response = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
};