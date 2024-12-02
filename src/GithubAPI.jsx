import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const getUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos?per_page=5&sort=created`, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
