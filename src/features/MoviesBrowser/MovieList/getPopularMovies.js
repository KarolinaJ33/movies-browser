import { API_KEY, ApiPopularMovies } from "../../../core/App/apiCodes";

export const popularMovies = async ({ page }) => {
  try {
  const response = await fetch(
    `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Not found movies.");
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error);
}
};