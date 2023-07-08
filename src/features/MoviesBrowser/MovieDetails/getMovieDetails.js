import axios from "axios";
const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
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

export const getMovieDetailsCredits = async (movieId) => {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return await response.data;
};

