import axios from 'axios';

// Base URL for the GitHub API
const BASE_URL = 'https://api.github.com';

// Get the token from the environment variables
const token = process.env.REACT_APP_GITHUB_TOKEN;

// Fetch GitHub user data
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

// Fetch user repositories
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
