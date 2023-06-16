import { API_KEY, ApiPopularMovies } from "../../../core/App/apiCodes";

export const popularMovies = async ({page}) => {
    const response = await fetch(
        `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=${page}`
      );
};