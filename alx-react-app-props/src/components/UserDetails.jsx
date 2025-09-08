import React, { useContext } from "react";
import UserContext from "../UserContext";

export default function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>User Info</h3>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
