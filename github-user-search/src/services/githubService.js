// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search: supports username, location, and minRepos
export const searchUsers = async (username, location = "", minRepos = 0, page = 1, perPage = 5) => {
  let q = username;

  if (location) q += `+location:${location}`;
  if (minRepos > 0) q += `+repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q, page, per_page: perPage },
  });

  return response.data; // contains { items: [...], total_count }
};

// Fetch full user details for location, repos, followers, etc.
export const fetchUserDetails = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};





