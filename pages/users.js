function UserList(props) {
  return (
    <div>
      <h1>List of Users</h1>
      {props.users.map((user) => {
        return (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
            </div>
        )
      })}
    </div>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
