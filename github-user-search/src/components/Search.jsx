// src/components/Search.jsx
import { useState } from "react";
import { searchUsers, fetchUserDetails } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchUsers(query, page);
      setTotalCount(data.total_count);

      // Fetch extra details for each user
      const detailedUsers = await Promise.all(
        data.items.map(async (user) => {
          const details = await fetchUserDetails(user.login);
          return { ...user, ...details };
        })
      );

      setUsers(detailedUsers);
    } catch (err) {
      setError("Something went wrong while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username, location, etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-4 mb-2 rounded">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <p className="font-bold">{user.login}</p>
            <p>Name: {user.name || "N/A"}</p>
            <p>Location: {user.location || "N/A"}</p>
            <p>Public Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      {totalCount > users.length && (
        <div className="flex gap-2 mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}






