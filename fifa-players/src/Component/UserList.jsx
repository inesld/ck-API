import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const [erreur, setErreur] = useState(null);
  console.log("erreur", erreur);
  console.log("users", users);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Enregistrer les données dans l'state
        setUsers(response.data);
      })
      .catch((error) => {
        setErreur(error.message);
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      });
  }, []);

  return (
    <div>
      {erreur && <h1> {erreur} </h1>}
      {users?.length === 0 && <h1>No Data Found</h1>}
      {users?.length > 0 &&
        users.map((user, index) => <User user={user} key={index} />)}
    </div>
  );
};

export default UserList;
