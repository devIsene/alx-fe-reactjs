import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />

      {/* Each UserProfile consumes its own context value */}
      <UserContext.Provider value={{ name: "Alice", age: 25, bio: "Loves hiking and photography" }}>
        <UserProfile />
      </UserContext.Provider>

      <UserContext.Provider value={{ name: "Bob", age: 30, bio: "Enjoys cooking and traveling" }}>
        <UserProfile />
      </UserContext.Provider>

      <UserContext.Provider value={{ name: "Carol", age: 22, bio: "Passionate about art and music" }}>
        <UserProfile />
      </UserContext.Provider>

      <Footer />
    </div>
  );
}

