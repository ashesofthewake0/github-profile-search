import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import RepoList from "./components/RepoList.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import { getUserData, getUserRepos } from "./GithubAPI.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    try {
      const userData = await getUserData(username);
      const repoData = await getUserRepos(username);
      setUser(userData);
      setRepos(repoData);
    } catch (err) {
      setError(err.response?.status === 404 ? "User not found" : "API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {user && <ProfileCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default App;
