const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
      <p>
        ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
      </p>
    </div>
  );
};

export default RepoItem;
