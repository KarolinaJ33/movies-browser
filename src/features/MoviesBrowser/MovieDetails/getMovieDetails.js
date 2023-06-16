import axios from "axios";
import { API_KEY, API_URL } from "../../../core/App/apiCodes";


export const getMovieDetails = async ({movieId}) => {
    const response = await axios.get(
        `${API_URL}/movie/${movieId.movieId}?api_key=${API_KEY}&language=en-US`
      );
};