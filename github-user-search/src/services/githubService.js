// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (query, page = 1, perPage = 5) => {
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q: query,
      page,
      per_page: perPage,
    },
  });
  return response.data; // { items: [...], total_count: ... }
};

export const fetchUserDetails = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data; // full user info
};




