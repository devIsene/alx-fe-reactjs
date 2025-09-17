import { useState } from "react";
import { fetchUser } from "./services/github";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const data = await fetchUser(username);
      setUser(data);
      setError("");
    } catch (err) {
      setError("User not found");
      setUser(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.login}</h2>
          <p>{user.bio || "No bio available"}</p>
        </div>
      )}
    </div>
  );
}

export default App;



