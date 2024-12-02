import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token YOUR_PERSONAL_ACCESS_TOKEN`
    }
  });
  return response.data;
};
