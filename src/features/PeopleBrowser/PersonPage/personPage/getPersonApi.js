import axios from "axios";
import { API_KEY, API_URL } from "../../../../core/App/apiCodes";

export const getPopularPeople = async({personId}) => {
    const response = await axios.get(
        `${API_URL}/person/${personId.personId}?api_key=${API_KEY}&language=en-US`);
};