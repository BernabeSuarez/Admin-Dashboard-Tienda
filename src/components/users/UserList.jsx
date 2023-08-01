import { useState } from "react";
const urlUsers = "https://backend-tienda-nucba.onrender.com/users";

export default function UserList() {
  fetch(urlUsers)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUsers(data);
    });
  const [users, setUsers] = useState([]);
  return (
    <div>
      {users.map((user) => (
        <h2 key={user._id}>{user.email}</h2>
      ))}
    </div>
  );
}
