const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>{user.location}</p>
      <p>
        <strong>Repos:</strong> {user.public_repos} | <strong>Followers:</strong>{" "}
        {user.followers} | <strong>Following:</strong> {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default ProfileCard;
