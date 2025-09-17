import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// Function to fetch user data
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};
