import User from "../components/user";

function UserList(props) {
  return (
    <div>
      <h1>List of Users</h1>
      {props.users.map((user) => {
        return (
           <User user={user}/>
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
