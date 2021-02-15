import React from "react";

function ListUsers(props) {
  const { listUsers } = props;
  return (
    <div>
      <h4>Lista de Usuarios:</h4>
      <ul>
        {listUsers.map((user, index) => (
          <li key={index}>
            {user.name}, {user.years} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
