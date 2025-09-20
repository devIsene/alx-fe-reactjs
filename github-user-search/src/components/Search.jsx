// src/components/Search.jsx
import { useState } from "react";
import { fetchUsers, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (reset = true) => {
    if (reset) {
      setPage(1);
      setResults([]);
    }
    setLoading(true);
    setError("");

    try {
      const data = await fetchUsers(username, location, minRepos, reset ? 1 : page);
      const users = data.items;

      // Fetch more details for each user
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          try {
            const details = await fetchUserData(user.login);
            return { ...user, ...details };
          } catch {
            return user;
          }
        })
      );

      setResults((prev) => (reset ? detailedUsers : [...prev, ...detailedUsers]));
      setHasMore(data.total_count > (reset ? detailedUsers.length : results.length + detailedUsers.length));
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(true);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    handleSearch(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          placeholder="Min repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {results.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded mb-2 flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-blue-600"
              >
                {user.login}
              </a>
              <p>Name: {user.name || "N/A"}</p>
              <p>Location: {user.location || "Not available"}</p>
              <p>Repos: {user.public_repos ?? "N/A"}</p>
              <p>Followers: {user.followers ?? "N/A"}</p>
              <p>Following: {user.following ?? "N/A"}</p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button
          onClick={handleLoadMore}
          className="bg-green-500 text-white p-2 rounded mt-4 w-full"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;









