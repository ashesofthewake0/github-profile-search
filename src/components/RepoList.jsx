import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
