import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">GitHub User Search</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="flex items-center gap-4">
            <img
              src={userData.avatar_url}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{userData.name || "No name"}</h2>
              <p className="text-gray-600">@{userData.login}</p>
              <p className="text-sm text-gray-500">
                Joined {new Date(userData.created_at).toDateString()}
              </p>
            </div>
          </div>

          <p className="mt-4 text-gray-700">
            {userData.bio || "This profile has no bio"}
          </p>

          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mt-4 text-center">
            <div>
              <p className="text-lg font-bold">{userData.public_repos}</p>
              <p className="text-sm text-gray-500">Repos</p>
            </div>
            <div>
              <p className="text-lg font-bold">{userData.followers}</p>
              <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold">{userData.following}</p>
              <p className="text-sm text-gray-500">Following</p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>📍 {userData.location || "Not Available"}</p>
            <p>🏢 {userData.company || "Not Available"}</p>
            <p>🔗 {userData.blog ? <a href={userData.blog} target="_blank" rel="noreferrer" className="text-blue-500">{userData.blog}</a> : "Not Available"}</p>
            <p>🐦 {userData.twitter_username ? <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noreferrer" className="text-blue-500">@{userData.twitter_username}</a> : "Not Available"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;




