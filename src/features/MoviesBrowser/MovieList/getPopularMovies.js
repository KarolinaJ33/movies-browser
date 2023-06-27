import { API_KEY, ApiPopularMovies } from "../../../core/App/apiCodes";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=1`
  );

  const popularMovies = await response.json();
  return popularMovies;
};