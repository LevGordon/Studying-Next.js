function User({ user }) {
  return (
    <div className="user" key={user.id}>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
