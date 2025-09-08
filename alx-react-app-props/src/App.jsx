import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";

export default function App() {
  const users = [
    { name: "Alice", age: 25, bio: "Loves hiking and photography" },
    { name: "Bob", age: 30, bio: "Enjoys cooking and traveling" },
    { name: "Carol", age: 22, bio: "Passionate about art and music" },
  ];

  return (
    <UserContext.Provider value={users}>
      <Header />
      <MainContent />

      {/* Render each user profile */}
      {users.map((user, index) => (
        <UserProfile key={index} userIndex={index} />
      ))}

      <Footer />
    </UserContext.Provider>
  );
}


