import axios from "axios";
import { API_KEY, API_URL } from "../../../core/App/apiCodes";


export const getMovieDetails = async ({movieId}) => {
  console.log("getMovieDetails movieId:", movieId);
  try {
    const response = await axios.get(
        `${API_URL}/movie/${movieId.movieId}?api_key=${API_KEY}&language=en-US`
      );
      if (response.status !== 200) {
        throw new Error(response.data.status_message);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  export const getMovieCredits = async ({ movieId }) => {
    console.log("getMovieCredits movieId:", movieId);
    try {
      const response = await axios.get(
        `${API_URL}/movie/${movieId.movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      if (response.status !== 200) {
        throw new Error(response.data.status_message);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};