import axios from "axios";
const API_KEY = "ae7d4af255a05506e1ed3b49e48b0d5c";
const API_URL = "https://api.themoviedb.org/3";

export const getPerson = async({personId}) => {
    try {
        const response = await axios.get(
            `${API_URL}/person/${personId.personId}?api_key=${API_KEY}&language=en-US`
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

export const getPersonCredits = async({personId}) => {
    try {
        const response = await axios.get(
            `${API_URL}/person/${personId.personId}/movie_credits?api_key=${API_KEY}&language=en-US`
          );
          if (response.status !== 200) {
            throw new Error(response.data.status_message);
          }
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
    }
}