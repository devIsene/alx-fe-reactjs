import React, { useContext } from "react";
import UserContext from "../UserContext";

export default function UserProfile({ userIndex }) {
  const users = useContext(UserContext);
  const userData = users[userIndex];

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{userData.age}</span>
      </p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}



  