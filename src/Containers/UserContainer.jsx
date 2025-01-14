import React, { useEffect, useState } from "react";
import UserList from "../Components/UserList";

function UserContainer() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      console.log("users data:", json);
      if (!json.data) return;
      setUsers(json.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <UserList users={users} loading = {isLoading} error = {error} />
    </div>
  );
}

export default UserContainer;
